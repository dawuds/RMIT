# Annual Cryptographic Policy Review Records

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

> **Handling Instructions:** This document is classified **Confidential**. It contains sensitive information regarding cryptographic controls and must be handled in accordance with [Organization Name]'s Information Classification Policy. Distribution is restricted to authorized personnel with a legitimate need to know. Unauthorized disclosure, copying, or transmission is prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Annual Review Methodology](#4-annual-review-methodology)
5. [Cryptographic Policy Statements and Requirements](#5-cryptographic-policy-statements-and-requirements)
6. [Approved Algorithms and Key Lengths](#6-approved-algorithms-and-key-lengths)
7. [Key Lifecycle Management](#7-key-lifecycle-management)
8. [Hardware Security Module (HSM) Usage Requirements](#8-hardware-security-module-hsm-usage-requirements)
9. [Review Findings and Observations](#9-review-findings-and-observations)
10. [Policy Updates and Change Log](#10-policy-updates-and-change-log)
11. [Remediation Action Plan](#11-remediation-action-plan)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section should state the intent of the annual review, what it seeks to validate, and its role in the organization's broader technology risk management program.*

This document constitutes the formal Annual Cryptographic Policy Review Record for [Organization Name] for the review period ending **[Review Period End Date]**. The purpose of this record is to:

- Document the outcomes of the annual review of [Organization Name]'s Cryptographic Policy and associated standards;
- Verify that cryptographic controls remain fit-for-purpose, algorithmically sound, and aligned with current regulatory expectations and industry best practices;
- Record any changes made to the Cryptographic Policy as a result of the review, together with the rationale for those changes;
- Provide an auditable trail of governance activity demonstrating compliance with Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.20;
- Identify gaps, risks, and emerging threats to cryptographic posture and establish a structured remediation plan.

This Annual Review Record serves as primary evidence of ongoing cryptographic governance and is subject to inspection by internal audit, external auditors, and regulatory examiners including BNM.

### 1.2 Scope

*This section should define the boundaries of what the review covers — systems, entities, geographies, and cryptographic domains. Be explicit about what is included and excluded.*

This review covers the following in-scope elements:

**In-Scope Systems and Domains:**

- All information systems classified as **Critical** or **High** under [Organization Name]'s Information Asset Classification Framework, where cryptography is employed as a security control;
- Cryptographic key management infrastructure, including key generation, distribution, storage, rotation, and destruction processes;
- Hardware Security Modules (HSMs) deployed within [Organization Name]'s on-premises data centres and cloud environments;
- Public Key Infrastructure (PKI) components including Certificate Authorities (CAs), registration authorities, and certificate lifecycle management;
- Data-at-rest encryption covering databases, file systems, backup media, and removable storage;
- Data-in-transit encryption covering network communications, API channels, inter-system integrations, and customer-facing channels;
- Cryptographic controls within internet banking, mobile banking, and payment processing platforms;
- Third-party and vendor-managed cryptographic services accessed under outsourcing arrangements.

**In-Scope Organizational Entities:**

| Entity | Included | Remarks |
|---|---|---|
| [Organization Name] — Head Office | Yes | Primary scope |
| [Subsidiary / Branch Name] | [Yes / No] | [Remarks] |
| [Outsourced Service Provider Name] | [Yes / No] | [Remarks] |

**Explicitly Out-of-Scope:**

- [List any systems, subsidiaries, or cryptographic domains explicitly excluded from this review cycle and the rationale for exclusion]
- [e.g., Legacy systems scheduled for decommission within [timeframe], reviewed under a separate decommissioning plan]

### 1.3 Review Period

| Parameter | Details |
|---|---|
| **Review Period Start** | [DD Month YYYY] |
| **Review Period End** | [DD Month YYYY] |
| **Review Conducted By** | [Name(s) / Team Name] |
| **Review Completion Date** | [DD Month YYYY] |
| **Previous Review Date** | [DD Month YYYY] |
| **Previous Review Document ID** | [Document ID of Prior Year Review] |

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Framework

*This section should map the review activity to the specific regulatory obligations it fulfills. Reference exact clause numbers and reproduce the key obligation text where helpful for auditors.*

This Annual Cryptographic Policy Review is conducted in accordance with the following regulatory instruments and internal policies:

**Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document**

| Clause | Title | Obligation Summary |
|---|---|---|
| 10.20 | Cryptography | Financial institutions shall implement and manage cryptographic controls to protect the confidentiality, integrity, and authenticity of information. Cryptographic policies shall be reviewed at least annually and updated to reflect changes in technology risks and regulatory guidance. |
| 10.1 | Technology Risk Management | Overarching obligation to maintain a technology risk management framework commensurate with the nature, scale, and complexity of operations. |
| 10.19 | Network Security | Relevant to encryption of data in transit across network infrastructure. |
| [Additional Clause] | [Title] | [Obligation Summary] |

**Supporting Regulatory and Standards References:**

- BNM RMIT Policy Document — issued [Date], effective [Date];
- Personal Data Protection Act 2010 (PDPA) — obligations relating to security of personal data;
- National Cyber Security Agency (NACSA) — [Relevant Circular or Guideline, if applicable];
- Payment Card Industry Data Security Standard (PCI DSS) v[Version] — Requirements 3 and 4 (where applicable to card payment systems);
- [Any other applicable BNM circulars or guidelines].

### 2.2 Internal Policy Hierarchy

*List the internal policy documents that this review is assessing. Include document IDs and version numbers to create a clear audit trail.*

| Policy / Standard Document | Document ID | Version | Effective Date |
|---|---|---|---|
| Cryptographic Policy | [Doc ID] | [Version] | [Date] |
| Key Management Standard | [Doc ID] | [Version] | [Date] |
| Public Key Infrastructure (PKI) Standard | [Doc ID] | [Version] | [Date] |
| HSM Operational Standard | [Doc ID] | [Version] | [Date] |
| Data Classification and Handling Policy | [Doc ID] | [Version] | [Date] |
| Information Security Policy | [Doc ID] | [Version] | [Date] |
| Cloud Security Policy | [Doc ID] | [Version] | [Date] |

### 2.3 Changes in Regulatory Landscape Since Last Review

*Describe any new or amended regulatory guidance, industry advisories, or standards updates that have emerged since the previous annual review and that have influenced this review cycle.*

| Change | Source | Date Issued | Impact on Cryptographic Policy |
|---|---|---|---|
| [Description of regulatory change] | [BNM / NACSA / PCI SSC / NIST / other] | [Date] | [High / Medium / Low — describe impact] |
| [Description of new threat or vulnerability (e.g., algorithm deprecation advisory)] | [Source] | [Date] | [Impact] |
| [Description of industry standard update] | [Standard Body] | [Date] | [Impact] |

---

## 3. Roles and Responsibilities

### 3.1 Governance Structure

*This section defines who is accountable and responsible for cryptographic governance and for the annual review process. Ensure alignment with the organization's broader IT governance framework.*

Effective cryptographic governance at [Organization Name] is maintained through a defined governance structure with clear ownership at each level:

| Role | Individual / Committee | Accountability |
|---|---|---|
| **Board Risk Committee** | [Committee Name] | Ultimate oversight of technology risk, including cryptographic risk |
| **Chief Information Security Officer (CISO)** | [Name / TBC] | Policy ownership; accountable for cryptographic governance program |
| **Head of Cryptography / Cryptography Lead** | [Name / TBC] | Day-to-day operational ownership; leads annual review |
| **Chief Information Officer (CIO)** | [Name / TBC] | Technology infrastructure alignment |
| **Head of IT Risk** | [Name / TBC] | Second line oversight; independent assessment of cryptographic risk posture |
| **Internal Audit** | [Name / TBC] | Third line assurance over cryptographic controls |
| **Legal and Compliance** | [Name / TBC] | Regulatory alignment; PDPA obligations |

### 3.2 RACI Matrix — Annual Cryptographic Policy Review

*The RACI matrix assigns Responsible (R), Accountable (A), Consulted (C), and Informed (I) designations to each key activity in the annual review process.*

| Activity | CISO | Head of Cryptography | IT Risk | Internal Audit | Legal & Compliance | CIO | Board Risk Committee |
|---|---|---|---|---|---|---|---|
| Initiate annual review | A | R | C | I | I | I | I |
| Review cryptographic policy documents | A | R | C | C | C | I | I |
| Assess algorithm and key length adequacy | A | R | C | I | I | C | I |
| Review key lifecycle management processes | A | R | C | I | I | C | I |
| Assess HSM operational compliance | A | R | C | I | I | R | I |
| Conduct gap analysis against RMiT Clause 10.20 | A | R | R | C | C | I | I |
| Document findings and observations | A | R | C | I | I | I | I |
| Develop remediation action plan | A | R | C | I | I | C | I |
| Review and recommend policy updates | A | R | C | C | C | I | I |
| Approve updated Cryptographic Policy | A | C | C | I | C | C | I |
| Submit review record to governance forum | A | R | I | I | I | I | I |
| Present summary to Board Risk Committee | A | C | C | I | C | C | R |
| File and retain review records | A | R | C | I | I | I | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 3.3 Review Team

*List the individuals who participated in this specific annual review cycle.*

| Name | Title / Role | Department | Contribution to Review |
|---|---|---|---|
| [Name] | [Title] | [Department] | [e.g., Review lead, policy assessment] |
| [Name] | [Title] | [Department] | [e.g., HSM assessment, technical validation] |
| [Name] | [Title] | [Department] | [e.g., Regulatory mapping, gap analysis] |
| [Name] | [Title] | [Department] | [e.g., IT Risk second-line review] |
| [Name] | [Title] | [Department] | [e.g., Internal audit observer] |

---

## 4. Annual Review Methodology

### 4.1 Review Approach

*Describe the structured methodology used to conduct the review, including the types of evidence gathered and validation techniques employed. This section demonstrates the rigor of the review process to auditors.*

The annual review was conducted using a structured, evidence-based methodology comprising the following phases:

**Phase 1 — Preparation and Planning**

- Identification of review scope, objectives, and schedule;
- Assembly of the review team and assignment of responsibilities;
- Collection of current policy documents, standards, and procedures;
- Identification of changes since the prior review cycle (regulatory, operational, and threat landscape).

**Phase 2 — Documentation Review**

- Line-by-line review of the Cryptographic Policy and subordinate standards against current regulatory requirements and best practice frameworks;
- Comparison of the current policy version against the prior approved version to identify changes;
- Verification that all policy references (regulatory citations, internal document references) remain current and accurate.

**Phase 3 — Technical Validation**

- Review of the approved algorithm inventory against current NIST, ENISA, and Malaysian NACSA guidance;
- Verification that deprecated or weakened algorithms are not in active production use;
- Assessment of key length adequacy relative to current computational attack capabilities and projected future threat (post-quantum considerations);
- Review of HSM configuration documentation and audit logs;
- Walkthrough of key lifecycle procedures with operational teams.

**Phase 4 — Gap Analysis**

- Structured comparison of current cryptographic posture against RMiT Clause 10.20 requirements;
- Identification of gaps, control weaknesses, and areas requiring policy clarification or update;
- Risk rating of identified gaps.

**Phase 5 — Reporting and Approval**

- Drafting of review findings and recommendations;
- Preparation of updated policy documents where required;
- Submission of review record through the approval workflow defined in Section 12.

### 4.2 Evidence Collected

*List the specific evidence items reviewed and tested during this annual review cycle.*

| Evidence Item | Document / System | Version / Date | Reviewer | Review Date |
|---|---|---|---|---|
| Cryptographic Policy (current version) | [Document ID] | [Version] | [Name] | [Date] |
| Key Management Standard | [Document ID] | [Version] | [Name] | [Date] |
| HSM Operational Standard | [Document ID] | [Version] | [Date] | [Name] |
| HSM audit logs | [System Name] | [Period Covered] | [Name] | [Date] |
| Certificate inventory / PKI report | [System / Tool] | [Date] | [Name] | [Date] |
| Algorithm usage scan results | [Tool Name] | [Date] | [Name] | [Date] |
| Key rotation records | [System Name] | [Period Covered] | [Name] | [Date] |
| Prior year review record | [Document ID] | [Date] | [Name] | [Date] |
| BNM RMiT examination findings (if applicable) | [Reference] | [Date] | [Name] | [Date] |
| [Additional evidence item] | | | | |

### 4.3 Review Schedule

| Milestone | Planned Date | Actual Date | Status |
|---|---|---|---|
| Review initiation | [Date] | [Date] | [Complete / In Progress / Overdue] |
| Documentation review complete | [Date] | [Date] | [Status] |
| Technical validation complete | [Date] | [Date] | [Status] |
| Gap analysis complete | [Date] | [Date] | [Status] |
| Draft findings circulated | [Date] | [Date] | [Status] |
| Management responses received | [Date] | [Date] | [Status] |
| Final review record submitted for approval | [Date] | [Date] | [Status] |
| Approval received | [Date] | [Date] | [Status] |
| Filing and distribution | [Date] | [Date] | [Status] |

---

## 5. Cryptographic Policy Statements and Requirements

### 5.1 Overview of Policy Assessment

*This section records the outcome of the line-by-line review of each cryptographic policy statement. For each policy requirement, document whether it remains adequate, requires amendment, or has been superseded.*

The review team conducted a structured assessment of all policy statements contained in [Organization Name]'s Cryptographic Policy ([Document ID], Version [X]). The assessment evaluated each statement for:

- Continued regulatory alignment with RMiT Clause 10.20 and other applicable requirements;
- Technical accuracy and adequacy relative to current cryptographic best practice;
- Clarity and actionability for operational teams;
- Consistency with associated standards and procedures.

### 5.2 Policy Statement Assessment Register

*Complete one row per policy statement or policy section reviewed. This register forms the core evidence of the policy review.*

| Policy Ref | Policy Statement Summary | Assessment Outcome | Findings / Notes | Action Required | Priority |
|---|---|---|---|---|---|
| [Section X.X] | [Brief summary of policy statement] | [Adequate / Requires Amendment / Superseded] | [Notes on finding] | [Yes / No] | [High / Medium / Low] |
| [Section X.X] | [Brief summary of policy statement] | [Adequate / Requires Amendment / Superseded] | [Notes on finding] | [Yes / No] | [High / Medium / Low] |
| [Section X.X] | [Brief summary of policy statement] | [Adequate / Requires Amendment / Superseded] | [Notes on finding] | [Yes / No] | [High / Medium / Low] |
| [Section X.X] | [Brief summary of policy statement] | [Adequate / Requires Amendment / Superseded] | [Notes on finding] | [Yes / No] | [High / Medium / Low] |

**Assessment Outcome Legend:**
- **Adequate** — Policy statement remains fit-for-purpose; no changes required.
- **Requires Amendment** — Policy statement requires update; see Section 10 for change details.
- **Superseded** — Policy statement has been replaced; document the superseding statement.

### 5.3 Summary of Policy Adequacy

| Assessment Category | Count | Percentage |
|---|---|---|
| Policy statements assessed — Adequate | [Number] | [%] |
| Policy statements assessed — Requires Amendment | [Number] | [%] |
| Policy statements assessed — Superseded | [Number] | [%] |
| **Total policy statements reviewed** | **[Number]** | **100%** |

### 5.4 Key Policy Requirements — Status Confirmation

*Confirm the status of each mandatory high-level policy requirement as a structured assertion.*

| Requirement | Policy Reference | Status | Evidence / Notes |
|---|---|---|---|
| Cryptographic policy formally documented and approved | [Ref] | [Confirmed / Gap] | [Notes] |
| Policy reviewed at minimum annually | [Ref] | [Confirmed / Gap] | [Notes] |
| Approved algorithm list maintained and current | [Ref] | [Confirmed / Gap] | [Notes] |
| Key management lifecycle formally documented | [Ref] | [Confirmed / Gap] | [Notes] |
| HSM usage mandated for critical key material | [Ref] | [Confirmed / Gap] | [Notes] |
| Key custodian roles formally defined | [Ref] | [Confirmed / Gap] | [Notes] |
| Cryptographic controls applied to data at rest (Critical / High) | [Ref] | [Confirmed / Gap] | [Notes] |
| Cryptographic controls applied to data in transit | [Ref] | [Confirmed / Gap] | [Notes] |
| Prohibition of deprecated algorithms enforced | [Ref] | [Confirmed / Gap] | [Notes] |
| Incident response procedures cover cryptographic incidents | [Ref] | [Confirmed / Gap] | [Notes] |
| Post-quantum readiness considerations documented | [Ref] | [Confirmed / Gap] | [Notes] |

---

## 6. Approved Algorithms and Key Lengths

### 6.1 Algorithm Review Methodology

*Explain how the algorithm inventory was established and validated. Reference the external frameworks used as benchmarks (e.g., NIST SP 800-131A, ENISA recommendations). This demonstrates the rigor of technical review to auditors.*

The approved algorithm inventory was reviewed against the following authoritative guidance:

- **NIST Special Publication 800-131A** (Transitioning the Use of Cryptographic Algorithms and Key Lengths) — Revision [Number], [Date];
- **NIST Special Publication 800-57** (Recommendation for Key Management) — Part 1, Revision [Number];
- **ENISA Cryptographic Guidelines** — [Year Edition];
- **NACSA / MAMPU** — [Any applicable Malaysian government cryptographic guidance];
- **PCI DSS v[Version]** — Requirements 3.5 and 4 (where applicable).

An automated algorithm discovery scan was conducted across [scope of systems] using [Tool Name] on [Date] to identify cryptographic primitives in active use. Results were cross-referenced against the approved algorithm list.

### 6.2 Approved Symmetric Encryption Algorithms

*List all symmetric encryption algorithms approved for use within the organization. Include minimum key lengths and permitted use cases.*

| Algorithm | Minimum Key Length | Approved Use Cases | Status | Notes |
|---|---|---|---|---|
| AES (Advanced Encryption Standard) | 256-bit (128-bit for legacy — see note) | Data at rest encryption, database encryption, file encryption, backup encryption | **Approved** | AES-128 permitted for [specified legacy use case] only; migration to AES-256 required by [Date] |
| AES-GCM | 256-bit | Authenticated encryption where integrity and confidentiality required simultaneously | **Approved** | Preferred mode for new implementations |
| AES-CBC | 256-bit | [Permitted use cases] | **Approved (Restricted)** | Requires IV management; not recommended for new implementations; prefer AES-GCM |
| 3DES (Triple DES) | 168-bit | **None** | **Deprecated** | Prohibited for all new implementations; existing uses must migrate by [Date] |
| DES | 56-bit | **None** | **Prohibited** | Not permitted under any circumstances |
| [Other Algorithm] | [Key Length] | [Use Cases] | [Status] | [Notes] |

### 6.3 Approved Asymmetric Encryption and Key Exchange Algorithms

| Algorithm | Minimum Key Length / Curve | Approved Use Cases | Status | Notes |
|---|---|---|---|---|
| RSA | 3072-bit (new implementations); 2048-bit (legacy — migration required) | Digital signatures, key encipherment, certificate issuance | **Approved** | RSA-2048 legacy systems must migrate to RSA-3072 or EC equivalent by [Date] |
| ECDH (Elliptic Curve Diffie-Hellman) | P-256 (NIST), P-384 preferred | Key agreement / key exchange | **Approved** | P-384 preferred for new implementations |
| ECDSA (Elliptic Curve Digital Signature Algorithm) | P-256 minimum; P-384 preferred | Digital signatures | **Approved** | |
| Diffie-Hellman (classical) | 3072-bit | Key exchange (legacy interoperability only) | **Approved (Restricted)** | Not recommended for new implementations |
| RSA-1024 | 1024-bit | None | **Prohibited** | Not permitted |
| [Other Algorithm] | [Key Length] | [Use Cases] | [Status] | [Notes] |

### 6.4 Approved Hashing Algorithms

| Algorithm | Output Length | Approved Use Cases | Status | Notes |
|---|---|---|---|---|
| SHA-256 | 256-bit | Digital signatures, certificate hashing, integrity verification, HMAC | **Approved** | Minimum approved for new implementations |
| SHA-384 | 384-bit | High-assurance digital signatures, TLS certificates (preferred) | **Approved** | Recommended for new implementations |
| SHA-512 | 512-bit | High-assurance applications | **Approved** | |
| SHA-3 (256/384/512) | Variable | As alternative to SHA-2 family | **Approved** | Permitted where SHA-3 is operationally supported |
| SHA-1 | 160-bit | **None** | **Prohibited** | Not permitted for any cryptographic purpose; permitted only for non-cryptographic legacy checksums where migration is impractical (requires documented exception) |
| MD5 | 128-bit | **None** | **Prohibited** | Not permitted under any circumstances |
| [Other Algorithm] | [Length] | [Use Cases] | [Status] | [Notes] |

### 6.5 Approved Key Agreement and Derivation Functions

| Function / Protocol | Specification | Approved Use Cases | Status | Notes |
|---|---|---|---|---|
| PBKDF2 | NIST SP 800-132 | Password-based key derivation | **Approved** | Minimum 600,000 iterations with SHA-256 |
| HKDF | RFC 5869 | Key derivation from high-entropy material | **Approved** | |
| bcrypt | [Version/Spec] | Password hashing (authentication systems) | **Approved** | Minimum cost factor [Value] |
| Argon2id | [Spec] | Password hashing (preferred for new systems) | **Approved** | Preferred over bcrypt for new implementations |
| ECDH | NIST SP 800-56A | Key agreement | **Approved** | See Section 6.3 |

### 6.6 Approved Transport Security Protocols

| Protocol | Version | Approved Use Cases | Status | Notes |
|---|---|---|---|---|
| TLS | 1.3 | All new implementations; customer-facing systems | **Approved — Preferred** | Mandatory for new systems |
| TLS | 1.2 | Existing systems pending migration | **Approved (Transitional)** | Migration to TLS 1.3 required by [Date] |
| TLS | 1.1 | None | **Prohibited** | Not permitted |
| TLS | 1.0 | None | **Prohibited** | Not permitted |
| SSL | Any version | None | **Prohibited** | Not permitted under any circumstances |

### 6.7 Post-Quantum Cryptography (PQC) Readiness Assessment

*This section records the organization's assessment of post-quantum risk and the current state of PQC readiness planning. As NIST PQC standards are finalized, this section should be updated to reflect migration planning.*

| Assessment Area | Current Status | Notes |
|---|---|---|
| Awareness of NIST PQC standardization process | [Aware / In Progress / Complete] | [Notes] |
| Crypto-agility assessment completed | [Yes / No / In Progress] | [Notes — ability to swap algorithms without major re-architecture] |
| Inventory of quantum-vulnerable systems completed | [Yes / No / In Progress] | [Notes] |
| PQC migration roadmap documented | [Yes / No / In Progress] | [Target completion date if in progress] |
| NIST FIPS 203 (ML-KEM / Kyber) evaluation | [Evaluated / Planned / Not Started] | [Notes] |
| NIST FIPS 204 (ML-DSA / Dilithium) evaluation | [Evaluated / Planned / Not Started] | [Notes] |
| NIST FIPS 205 (SLH-DSA / SPHINCS+) evaluation | [Evaluated / Planned / Not Started] | [Notes] |
| Hybrid classical/PQC schemes under consideration | [Yes / No] | [Notes] |

**Post-Quantum Risk Rating:** [High / Medium / Low] — [Brief justification]

### 6.8 Algorithm Review Summary — Changes from Prior Year

*Summarize any changes to the approved algorithm list resulting from this review cycle.*

| Change Type | Algorithm / Protocol | Prior Status | New Status | Effective Date | Rationale |
|---|---|---|---|---|---|
| [Newly Approved] | [Algorithm] | [N/A / Prior status] | Approved | [Date] | [Rationale] |
| [Deprecated] | [Algorithm] | Approved | Deprecated | [Date] | [Rationale] |
| [Prohibited] | [Algorithm] | [Prior status] | Prohibited | [Date] | [Rationale] |
| [Key Length Updated] | [Algorithm] | [Prior minimum] | [New minimum] | [Date] | [Rationale] |
| [No Change] | All other algorithms | Unchanged | Unchanged | N/A | No new guidance warranting change |

---

## 7. Key Lifecycle Management

### 7.1 Key Lifecycle Framework Overview

*This section documents the review of key lifecycle management processes across all phases: generation, distribution, storage, use, rotation, suspension, and destruction. For each phase, document policy requirements, operational implementation, and any gaps identified.*

Key lifecycle management at [Organization Name] is governed by the Key Management Standard ([Document ID], Version [X]) and operationalized through documented procedures. The annual review assessed the adequacy of lifecycle controls across the following phases in accordance with NIST SP 800-57 and RMiT Clause 10.20 requirements.

### 7.2 Key Generation

*Document the requirements and controls for cryptographic key generation, and the review findings for this phase.*

**Policy Requirements:**

- All cryptographic keys shall be generated using a FIPS 140-2 Level [2/3] validated or equivalent random number generator;
- Key generation for critical systems shall occur within a validated HSM;
- Key generation ceremonies for high-value keys shall be conducted in accordance with the Key Ceremony Procedure ([Document ID]);
- Key generation activities shall be logged and the log retained for a minimum of [X] years.

**Review Findings:**

| Control Area | Requirement | Finding | Gap? | Risk Rating |
|---|---|---|---|---|
| Random number generation source | FIPS-validated CSPRNG | [Finding description] | [Yes / No] | [High / Medium / Low / N/A] |
| HSM-based generation for critical keys | HSM required | [Finding description] | [Yes / No] | [High / Medium / Low / N/A] |
| Key ceremony procedure compliance | Documented ceremony | [Finding description] | [Yes / No] | [High / Medium / Low / N/A] |
| Generation activity logging | Logs retained [X] years | [Finding description] | [Yes / No] | [High / Medium / Low / N/A] |
| Dual control / split knowledge for high-value keys | Required | [Finding description] | [Yes / No] | [High / Medium / Low / N/A] |

### 7.3 Key Distribution

**Policy Requirements:**

- Cryptographic keys shall never be transmitted in plaintext;
- Key distribution shall use encrypted channels protected by a key of equal or greater strength than the key being distributed;
- Physical key components (where applicable) shall be distributed using split knowledge and dual control;
- Key distribution events shall be logged.

**Review Findings:**

| Control Area | Requirement | Finding | Gap? | Risk Rating |
|---|---|---|---|---|
| Encrypted transmission of key material | Required | [Finding] | [Yes / No] | [Rating] |
| Equal or greater protection for distribution channel | Required | [Finding] | [Yes / No] | [Rating] |
| Split knowledge / dual control for physical components | Required | [Finding] | [Yes / No] | [Rating] |
| Distribution logging | Required | [Finding] | [Yes / No] | [Rating] |

### 7.4 Key Storage

**Policy Requirements:**

- Cryptographic keys shall not be stored in plaintext form at rest;
- Master keys and key-encrypting keys (KEKs) for critical systems shall be stored within HSMs;
- Software-stored keys shall be encrypted under a KEK stored in an HSM or equivalent secure element;
- Key storage locations shall be inventoried and subject to access controls restricting access to authorized key custodians.

**Key Storage Inventory:**

| Key Type | Storage Location | Protection Mechanism | Access Control | Review Status |
|---|---|---|---|---|
| Master Key (MK) | [HSM Name / Location] | HSM hardware protection | [Role / Group] | [Adequate / Gap] |
| Key-Encrypting Key (KEK) | [Location] | [Protection] | [Role / Group] | [Adequate / Gap] |
| Data Encryption Key (DEK) | [Location] | [Protection] | [Role / Group] | [Adequate / Gap] |
| TLS Private Keys | [Location] | [Protection] | [Role / Group] | [Adequate / Gap] |
| Code Signing Keys | [Location] | [Protection] | [Role / Group] | [Adequate / Gap] |
| [Other Key Type] | [Location] | [Protection] | [Role / Group] | [Adequate / Gap] |

**Review Findings:**

| Control Area | Requirement | Finding | Gap? | Risk Rating |
|---|---|---|---|---|
| No plaintext key storage | Required | [Finding] | [Yes / No] | [Rating] |
| HSM storage for master and KEKs | Required | [Finding] | [Yes / No] | [Rating] |
| Access controls on key storage | Required | [Finding] | [Yes / No] | [Rating] |
| Key storage inventory maintained | Required | [Finding] | [Yes / No] | [Rating] |

### 7.5 Key Usage and Cryptoperiod

*The cryptoperiod (maximum active lifetime) for each key type should be defined in policy and enforced operationally. This section reviews compliance with cryptoperiod requirements.*

**Approved Cryptoperiods:**

| Key Type | Maximum Cryptoperiod (Originator Use) | Maximum Cryptoperiod (Recipient Use) | Basis for Cryptoperiod | Review Status |
|---|---|---|---|---|
| AES-256 Data Encryption Key (Symmetric) | [e.g., 1 year] | [e.g., 3 years] | NIST SP 800-57 Table 1 | [Adequate / Requires Update] |
| AES-256 Key-Encrypting Key | [e.g., 2 years] | [e.g., 2 years] | NIST SP 800-57 | [Adequate / Requires Update] |
| RSA-3072 Private Key (Signing) | [e.g., 1–3 years] | [e.g., Signature verification period] | NIST SP 800-57 | [Adequate / Requires Update] |
| RSA-3072 Private Key (Key Transport) | [e.g., 1–2 years] | [e.g., 1 year] | NIST SP 800-57 | [Adequate / Requires Update] |
| TLS Server Certificate | [e.g., 1 year] | N/A | CA/Browser Forum | [Adequate / Requires Update] |
| Code Signing Certificate | [e.g., 3 years] | N/A | [Basis] | [Adequate / Requires Update] |
| [Other Key Type] | [Period] | [Period] | [Basis] | [Status] |

**Cryptoperiod Compliance Review:**

| System / Use Case | Key Type | Configured Rotation Period | Compliant with Policy? | Evidence | Notes |
|---|---|---|---|---|---|
| [System Name] | [Key Type] | [Period] | [Yes / No] | [Evidence reference] | [Notes] |
| [System Name] | [Key Type] | [Period] | [Yes / No] | [Evidence reference] | [Notes] |

### 7.6 Key Rotation

**Policy Requirements:**

- Cryptographic keys shall be rotated at the end of their cryptoperiod or upon any suspected compromise;
- Key rotation shall be performed without service disruption where operationally feasible;
- Rotation events shall be logged with timestamps, key identifiers, and operator identity;
- Automatic rotation shall be implemented where technically feasible for high-volume key types.

**Key Rotation Review:**

| Key Type / System | Rotation Method | Rotation Frequency | Last Rotation Date | Next Scheduled Rotation | Automated? | Compliance Status |
|---|---|---|---|---|---|---|
| [System / Key Type] | [Manual / Automated] | [Frequency] | [Date] | [Date] | [Yes / No] | [Compliant / Non-Compliant] |
| [System / Key Type] | [Manual / Automated] | [Frequency] | [Date] | [Date] | [Yes / No] | [Compliant / Non-Compliant] |

### 7.7 Key Suspension and Revocation

**Policy Requirements:**

- A key suspension and revocation procedure shall be maintained to support timely response to key compromise;
- Revocation of compromised keys shall be completed within [X hours] of confirmed or suspected compromise;
- Certificate revocation shall be supported through CRL and/or OCSP;
- Revoked keys shall be added to a revocation list and all relying parties notified.

**Review Findings:**

| Control Area | Requirement | Finding | Gap? | Risk Rating |
|---|---|---|---|---|
| Revocation procedure documented | Required | [Finding] | [Yes / No] | [Rating] |
| Revocation timeline met ([X hours]) | Required | [Finding] | [Yes / No] | [Rating] |
| CRL / OCSP operational | Required | [Finding] | [Yes / No] | [Rating] |
| Revocation testing conducted | Recommended | [Finding] | [Yes / No] | [Rating] |

### 7.8 Key Destruction

**Policy Requirements:**

- Cryptographic keys that have exceeded their cryptoperiod or been superseded shall be securely destroyed and rendered unrecoverable;
- Destruction shall be performed using a process that renders recovery computationally infeasible;
- For HSM-stored keys, destruction shall be via the HSM's secure erase function;
- Key destruction events shall be logged with timestamps, key identifiers, and custodian identity;
- Destruction records shall be retained for a minimum of [X] years.

**Review Findings:**

| Control Area | Requirement | Finding | Gap? | Risk Rating |
|---|---|---|---|---|
| Secure destruction procedure documented | Required | [Finding] | [Yes / No] | [Rating] |
| HSM secure erase used for HSM keys | Required | [Finding] | [Yes / No] | [Rating] |
| Destruction logging | Required | [Finding] | [Yes / No] | [Rating] |
| Destruction records retained | [X] years | [Finding] | [Yes / No] | [Rating] |

### 7.9 Key Backup and Recovery

**Policy Requirements:**

- Backups of cryptographic keys shall be encrypted and stored in a separate physical or logical location from the primary key store;
- Key backup and recovery procedures shall be tested at minimum [annually / per defined schedule];
- Access to key backups shall be subject to dual control and require documented authorization;
- Recovery of keys from backup shall be logged.

**Review Findings:**

| Control Area | Requirement | Finding | Gap? | Risk Rating |
|---|---|---|---|---|
| Encrypted key backups maintained | Required | [Finding] | [Yes / No] | [Rating] |
| Separate storage location | Required | [Finding] | [Yes / No] | [Rating] |
| Recovery procedure tested | [Annually] | [Finding / last test date] | [Yes / No] | [Rating] |
| Dual control for backup access | Required | [Finding] | [Yes / No] | [Rating] |

### 7.10 Key Inventory and Registry

*A complete and current inventory of all cryptographic keys is essential for effective lifecycle management.*

**Key Registry Status:**

| Registry Parameter | Current Status | Notes |
|---|---|---|
| Key inventory maintained | [Yes / Partial / No] | [Notes] |
| Registry last updated | [Date] | [Notes] |
| Registry includes all key types in scope | [Yes / Partial / No] | [Notes] |
| Automated discovery tooling in place | [Yes / No] | [Tool name if applicable] |
| Orphaned / unmanaged keys identified | [Yes / No — count if yes] | [Notes] |

---

## 8. Hardware Security Module (HSM) Usage Requirements

### 8.1 HSM Inventory

*List all HSMs deployed within the organization, including their validation status, location, and purpose. This inventory confirms the scope of HSM coverage.*

| HSM ID / Name | Manufacturer | Model | Firmware Version | FIPS 140-2/3 Validation Level | Location | Primary Purpose | Status |
|---|---|---|---|---|---|---|---|
| [HSM-01] | [Manufacturer] | [Model] | [Version] | Level [2/3] | [Data Centre / Location] | [Master key storage / PKI / Payment HSM] | [Active / Standby / Decommissioned] |
| [HSM-02] | [Manufacturer] | [Model] | [Version] | Level [2/3] | [Location] | [Purpose] | [Status] |
| [HSM-03] | [Manufacturer] | [Model] | [Version] | Level [2/3] | [Location] | [Purpose] | [Status] |

### 8.2 HSM Policy Requirements

**Mandatory HSM Usage:**

Per [Organization Name]'s Cryptographic Policy, HSM protection is **mandatory** for the following key types and use cases:

| Use Case | Key Type | HSM Required | Policy Reference |
|---|---|---|---|
| Master key storage | Master Key (MK) | Yes — FIPS 140-2 Level 3 minimum | [Ref] |
| Key-encrypting key storage | KEK | Yes — FIPS 140-2 Level 2 minimum | [Ref] |
| Payment processing (PAN encryption / decryption) | Payment keys | Yes — PCI HSM requirements apply | [Ref] |
| PKI root CA private key | CA Key | Yes — FIPS 140-2 Level 3 minimum | [Ref] |
| Code signing | Code signing private key | Yes | [Ref] |
| [Other critical use case] | [Key Type] | Yes | [Ref] |

### 8.3 HSM Configuration and Hardening Review

*Document the review of HSM configuration settings against the HSM Operational Standard.*

| Configuration Parameter | Required Setting | Observed Setting | Compliant? | Notes |
|---|---|---|---|---|
| FIPS mode enabled | Yes | [Yes / No] | [Yes / No] | |
| Firmware version current / patched | Latest approved version | [Version] | [Yes / No] | |
| Default passwords changed | Yes | [Yes / No] | [Yes / No] | |
| Unused ports / services disabled | Yes | [Yes / No] | [Yes / No] | |
| Dual administrator requirement enabled | Yes | [Yes / No] | [Yes / No] | |
| Network access restricted to authorized hosts | Yes | [Yes / No] | [Yes / No] | |
| HSM audit logging enabled | Yes | [Yes / No] | [Yes / No] | |
| Tamper detection / response active | Yes | [Yes / No] | [Yes / No] | |
| Time synchronization (NTP) configured | Yes | [Yes / No] | [Yes / No] | |
| Backup and recovery tested | [Annually] | [Last test date] | [Yes / No] | |

### 8.4 HSM Access Control Review

*Review of who has administrative and operational access to HSMs, and whether access controls are consistent with the principle of least privilege and dual control requirements.*

| Access Type | Authorized Roles | Dual Control Required? | Current Access List Reviewed? | Compliant? |
|---|---|---|---|---|
| HSM Administrator | [Role / Group Name] | Yes | [Yes / No] | [Yes / No] |
| HSM Operator | [Role / Group Name] | [Yes / No] | [Yes / No] | [Yes / No] |
| Key Custodian | [Role / Group Name] | Yes | [Yes / No] | [Yes / No] |
| Read-only / Monitoring | [Role / Group Name] | No | [Yes / No] | [Yes / No] |

**Access Control Findings:**

| Finding | Risk Rating | Action Required |
|---|---|---|
| [Description of access control finding] | [High / Medium / Low] | [Yes / No — see Action Plan] |
| [Finding] | [Rating] | [Action] |

### 8.5 HSM Audit Log Review

*Summarize the review of HSM audit logs for the review period, including any anomalous events identified.*

| Review Parameter | Details |
|---|---|
| **Log review period** | [Start Date] to [End Date] |
| **Logs reviewed by** | [Name] |
| **Log review date** | [Date] |
| **Total log entries reviewed** | [Number / Sampled] |
| **Anomalous events identified** | [Number — 0 if none] |
| **Log integrity verified** | [Yes / No] |

**Anomalous Event Summary (if applicable):**

| Event Date/Time | Event Description | Severity | Investigation Status | Resolution |
|---|---|---|---|---|
| [Date/Time] | [Description] | [High / Medium / Low] | [Under Investigation / Resolved] | [Resolution details] |
| [No anomalous events identified during the review period] | | | | |

### 8.6 HSM Maintenance and Support Status

| Parameter | HSM-01 | HSM-02 | [HSM-03] |
|---|---|---|---|
| **Vendor support status** | [Active / End of Support: Date] | [Status] | [Status] |
| **Last maintenance / firmware update** | [Date] | [Date] | [Date] |
| **Next scheduled maintenance** | [Date] | [Date] | [Date] |
| **Maintenance contract expiry** | [Date] | [Date] | [Date] |
| **FIPS certificate expiry** | [Date] | [Date] | [Date] |

---

## 9. Review Findings and Observations

### 9.1 Finding Classification

*All findings identified during the annual review are classified using the following risk rating definitions to prioritize remediation.*

| Rating | Definition | Remediation Timeline |
|---|---|---|
| **Critical** | Control failure that creates an immediate and material risk of regulatory breach, cryptographic compromise, or data loss. | Immediate — within [5] business days |
| **High** | Significant control weakness with potential to result in cryptographic compromise or regulatory non-compliance if not addressed. | [30] days |
| **Medium** | Control gap or weakness that, if exploited, could result in limited or indirect impact. Remediation required within defined timeframe. | [60] days |
| **Low** | Observations and improvement opportunities with negligible direct risk impact. | [90] days or next review cycle |
| **Informational** | Advisory finding; no immediate action required. | Next review cycle |

### 9.2 Findings Register

*Complete one row per finding. Each finding should be uniquely referenced and linked to a remediation action in Section 11.*

| Finding ID | Category | Description | Root Cause | Risk Rating | RMiT Clause | Action ID | Status |
|---|---|---|---|---|---|---|---|
| FIND-001 | [Policy / Algorithm / Key Lifecycle / HSM / Other] | [Detailed description of the finding] | [Root cause analysis] | [Critical / High / Medium / Low] | [Clause Ref] | ACT-001 | [Open / In Progress / Closed] |
| FIND-002 | [Category] | [Description] | [Root cause] | [Rating] | [Clause] | ACT-002 | [Status] |
| FIND-003 | [Category] | [Description] | [Root cause] | [Rating] | [Clause] | ACT-003 | [Status] |
| FIND-004 | [Category] | [Description] | [Root cause] | [Rating] | [Clause] | ACT-004 | [Status] |
| FIND-005 | [Category] | [Description] | [Root cause] | [Rating] | [Clause] | ACT-005 | [Status] |

*Add rows as required. If no findings were identified for a category, record "No findings identified" for that category.*

### 9.3 Findings Summary by Category

| Category | Critical | High | Medium | Low | Informational | Total |
|---|---|---|---|---|---|---|
| Policy and Documentation | [n] | [n] | [n] | [n] | [n] | [n] |
| Algorithms and Key Lengths | [n] | [n] | [n] | [n] | [n] | [n] |
| Key Lifecycle Management | [n] | [n] | [n] | [n] | [n] | [n] |
| HSM Configuration and Operations | [n] | [n] | [n] | [n] | [n] | [n] |
| PKI and Certificate Management | [n] | [n] | [n] | [n] | [n] | [n] |
| Post-Quantum Readiness | [n] | [n] | [n] | [n] | [n] | [n] |
| **Total** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** |

### 9.4 Comparison with Prior Year Findings

*Demonstrate the effectiveness of remediation actions taken since the prior annual review.*

| Prior Year Finding ID | Description | Prior Rating | Remediation Action Taken | Current Status | Verified Closed? |
|---|---|---|---|---|---|
| [Prior FIND-ID] | [Description] | [Rating] | [Action taken] | [Closed / Partially Closed / Outstanding] | [Yes / No] |
| [Prior FIND-ID] | [Description] | [Rating] | [Action taken] | [Status] | [Yes / No] |

**Repeat Findings (Outstanding from Prior Year):**

| Prior Finding ID | Description | Rating | Reason for Non-Closure | Revised Target Date |
|---|---|---|---|---|
| [ID] | [Description] | [Rating] | [Reason — e.g., system upgrade dependency] | [Revised Date] |

---

## 10. Policy Updates and Change Log

### 10.1 Policy Changes Arising from This Review

*Document every change made to the Cryptographic Policy and subordinate standards as a result of this review. Each change should be traceable to a finding or to changes in the regulatory/threat landscape.*

| Change ID | Policy Document | Section Changed | Nature of Change | Previous Content (Summary) | New Content (Summary) | Rationale | Related Finding ID |
|---|---|---|---|---|---|---|---|
| CHG-001 | Cryptographic Policy | [Section X.X] | [Amendment / Addition / Deletion] | [Summary of prior content] | [Summary of new content] | [Rationale — e.g., algorithm deprecation, regulatory update] | [FIND-ID / N/A] |
| CHG-002 | Key Management Standard | [Section X.X] | [Nature of change] | [Prior content] | [New content] | [Rationale] | [FIND-ID / N/A] |
| CHG-003 | [Document Name] | [Section] | [Nature] | [Prior] | [New] | [Rationale] | [ID] |

### 10.2 Summary of Policy Version Changes

*Provide a narrative summary of the substantive changes made to the Cryptographic Policy as a result of this review.*

**[Organization Name] Cryptographic Policy — Changes from Version [Prior Version] to Version [New Version]:**

The following substantive changes were made to the Cryptographic Policy as a result of the [Year] Annual Review:

1. **Algorithm Deprecation — [Algorithm Name]:** [Description of change and rationale]
2. **Key Length Update — [Key Type]:** [Description of change and rationale]
3. **Post-Quantum Readiness:** [New section / updated section description]
4. **[Other change]:** [Description]

*If no changes were required:*

> *No amendments to the Cryptographic Policy were required as a result of this review. The policy was confirmed as current, adequate, and aligned with applicable regulatory requirements and industry best practice.*

### 10.3 Next Review Trigger Events

In addition to the scheduled annual review, the Cryptographic Policy shall be reviewed on an ad hoc basis upon the occurrence of any of the following trigger events:

- Publication of new or amended BNM guidance affecting cryptographic controls;
- Identification of a material vulnerability in an approved algorithm or protocol;
- A cryptographic incident or near-miss affecting [Organization Name];
- Significant changes to the technology environment (e.g., cloud migration, new payment platform);
- Publication of NIST PQC standards warranting migration planning updates;
- Recommendation from internal or external audit;
- Direction from the Board Risk Committee or senior management.

---

## 11. Remediation Action Plan

### 11.1 Action Register

*Each action should be specific, measurable, and assigned to a named individual with a target completion date. Actions must be tracked to completion through the regular governance reporting cycle.*

| Action ID | Related Finding | Action Description | Owner | Target Completion Date | Priority | Status | Evidence of Completion |
|---|---|---|---|---|---|---|---|
| ACT-001 | FIND-001 | [Specific, measurable remediation action] | [Named Individual] | [DD Month YYYY] | [Critical / High / Medium / Low] | [Not Started / In Progress / Complete] | [Evidence reference when complete] |
| ACT-002 | FIND-002 | [Action description] | [Owner] | [Date] | [Priority] | [Status] | [Evidence] |
| ACT-003 | FIND-003 | [Action description] | [Owner] | [Date] | [Priority] | [Status] | [Evidence] |
| ACT-004 | FIND-004 | [Action description] | [Owner] | [Date] | [Priority] | [Status] | [Evidence] |
| ACT-005 | FIND-005 | [Action description] | [Owner] | [Date] | [Priority] | [Status] | [Evidence] |

### 11.2 Action Tracking and Reporting

*Define how remediation actions will be tracked and reported until closure.*

| Governance Mechanism | Frequency | Responsible Party | Reporting Audience |
|---|---|---|---|
| Action status update — IT Security Steering Committee | [Monthly] | CISO | [Committee Name] |
| Action status update — IT Risk Committee | [Quarterly] | Head of IT Risk | [Committee Name] |
| Critical / High finding escalation | Upon identification | CISO | Board Risk Committee |
| Annual review findings — Board report | [Annually] | CISO | Board Risk Committee |
| Regulatory reporting (if applicable) | As required | CISO / Legal | BNM |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 0.1 | [DD Month YYYY] | [Name] | Initial draft for internal review |
| 0.2 | [DD Month YYYY] | [Name] | Incorporated review team feedback |
| 0.3 | [DD Month YYYY] | [Name] | Management comments incorporated |
| 1.0 | [DD Month YYYY] | [Name] | Final version — submitted for approval |

### 12.2 Peer Review

*Prior to formal approval, this review record was subject to peer review by the following individuals.*

| Reviewer | Role | Review Date | Comments / Outcome |
|---|---|---|---|
| [Name] | [Role] | [Date] | [No objections / Comments incorporated] |
| [Name] | [Role] | [Date] | [No objections / Comments incorporated] |

### 12.3 Approval Sign-Off

*By signing below, the approvers confirm that they have reviewed this Annual Cryptographic Policy Review Record, that the findings and recommendations are accurate to the best of their knowledge, and that the remediation action plan is approved for implementation.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Head of Cryptography / Cryptography Lead** | [Name] | __________________ | [Date] |
| **Chief Information Security Officer (CISO)** | [Name] | __________________ | [Date] |
| **Head of IT Risk** | [Name] | __________________ | [Date] |
| **Chief Information Officer (CIO)** | [Name] | __________________ | [Date] |

> *This document has been approved and is effective as of the date of the CISO's signature above.*

### 12.4 Distribution List

| Recipient | Role | Distribution Date | Copy Type |
|---|---|---|---|
| [Name] | CISO | [Date] | Original |
| [Name] | Head of IT Risk | [Date] | Controlled Copy |
| [Name] | Internal Audit | [Date] | Controlled Copy |
| [Name] | CIO | [Date] | Controlled Copy |
| [Name] | Head of Cryptography | [Date] | Controlled Copy |
| Document Management System | [System Name] | [Date] | Electronic Master |

### 12.5 Record Retention

This review record shall be retained for a minimum of **[7] years** from the date of approval in accordance with [Organization Name]'s Records Retention Policy ([Document ID]) and BNM record retention requirements. Records shall be stored in [designated secure repository] with access restricted to authorized personnel.

---

## 13. References

### 13.1 Regulatory References

| Reference | Title | Issuing Body | Version / Date | Relevant Clause(s) |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Effective Date] | Clause 10.20 (Cryptography); Clause 10.1 (Technology Risk Management); Clause 10.19 (Network Security) |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010, as amended | Section 9 (Security of personal data) |
| [NACSA Circular] | [Title] | NACSA | [Date] | [Sections] |
| [BNM Circular] | [Title] | Bank Negara Malaysia | [Date] | [Sections] |

### 13.2 Standards References

| Reference | Title | Issuing Body | Version / Date | Relevant Sections |
|---|---|---|---|---|
| NIST SP 800-57 Part 1 | Recommendation for Key Management | NIST | Rev. 5, May 2020 | All |
| NIST SP 800-131A | Transitioning the Use of Cryptographic Algorithms and Key Lengths | NIST | Rev. 2, March 2019 | All |
| NIST SP 800-132 | Recommendation for Password-Based Key Derivation | NIST | December 2010 | All |
| NIST FIPS 140-3 | Security Requirements for Cryptographic Modules | NIST | March 2019 | All |
| NIST FIPS 203 | Module-Lattice-Based Key-Encapsulation Mechanism Standard (ML-KEM) | NIST | August 2024 | All |
| NIST FIPS 204 | Module-Lattice-Based Digital Signature Standard (ML-DSA) | NIST | August 2024 | All |
| NIST FIPS 205 | Stateless Hash-Based Digital Signature Standard (SLH-DSA) | NIST | August 2024 | All |
| ISO/IEC 11770 | Key Management | ISO/IEC | [Version] | All parts |
| PCI DSS | Payment Card Industry Data Security Standard | PCI SSC | v[Version] | Requirements 3, 4 |
| RFC 5246 / 8446 | TLS 1.2 / TLS 1.3 | IETF | — | — |

### 13.3 Internal Policy References

| Document | Document ID | Version | Owner |
|---|---|---|---|
| Cryptographic Policy | [ID] | [Version] | CISO |
| Key Management Standard | [ID] | [Version] | Head of Cryptography |
| HSM Operational Standard | [ID] | [Version] | Head of Cryptography |
| PKI Standard | [ID] | [Version] | Head of Cryptography |
| Information Security Policy | [ID] | [Version] | CISO |
| Data Classification and Handling Policy | [ID] | [Version] | CISO |
| Incident Response Procedure | [ID] | [Version] | CISO |
| Records Retention Policy | [ID] | [Version] | [Owner] |

---

## 14. Appendices

### Appendix A — RMiT Clause 10.20 Compliance Mapping

*This appendix provides a structured mapping of each sub-requirement under RMiT Clause 10.20 to the specific controls and evidence that demonstrate compliance. This mapping is designed to support regulatory examination.*

| RMiT Clause 10.20 Sub-Requirement | Requirement Description | Applicable Control(s) | Evidence Reference | Compliance Status | Remarks |
|---|---|---|---|---|---|
| 10.20(a) | [Sub-requirement description] | [Control name / policy reference] | [Evidence reference] | [Compliant / Partial / Non-Compliant] | [Remarks] |
| 10.20(b) | [Sub-requirement description] | [Control name / policy reference] | [Evidence reference] | [Compliant / Partial / Non-Compliant] | [Remarks] |
| 10.20(c) | [Sub-requirement description] | [Control name / policy reference] | [Evidence reference] | [Compliant / Partial / Non-Compliant] | [Remarks] |
| 10.20(d) | [Sub-requirement description] | [Control name / policy reference] | [Evidence reference] | [Compliant / Partial / Non-Compliant] | [Remarks] |

**Overall RMiT Clause 10.20 Compliance Rating:** [Fully Compliant / Substantially Compliant — Minor Gaps / Partially Compliant — Remediation Required / Non-Compliant]

---

### Appendix B — Algorithm Discovery Scan Results Summary

*This appendix summarizes the results of the automated algorithm discovery scan conducted as part of the technical validation phase. Full scan reports are retained as evidence in [document management system / evidence repository].*

| Scan Parameter | Details |
|---|---|
| **Scan Tool** | [Tool Name and Version] |
| **Scan Scope** | [Systems / Network Ranges Scanned] |
| **Scan Date** | [Date] |
| **Scan Conducted By** | [Name] |
| **Full Report Reference** | [Reference ID / Location] |

**Algorithm Usage Summary:**

| Algorithm Identified | Occurrences | Systems Affected | Policy Status | Action Required |
|---|---|---|---|---|
| [Algorithm Name] | [Count] | [System list / count] | [Approved / Deprecated / Prohibited] | [Yes / No] |
| [Algorithm Name] | [Count] | [System list / count] | [Status] | [Yes / No] |

**Key Findings from Scan:**

- [Finding 1 — e.g., Deprecated TLS 1.0 identified on [number] systems]
- [Finding 2 — e.g., SHA-1 certificates identified in [system]]
- [Finding 3 — or "No prohibited algorithms identified during the scan period"]

---

### Appendix C — Key Ceremony Records Summary

*This appendix references key ceremony records conducted during the review period. Full ceremony documentation is retained separately as classified records.*

| Ceremony Reference | Key Type | Purpose | Date Conducted | Participants | Ceremony Record Location |
|---|---|---|---|---|---|
| [Ceremony ID] | [Key Type] | [Purpose — e.g., annual master key rotation] | [Date] | [Names / Roles] | [Secure repository reference] |
| [Ceremony ID] | [Key Type] | [Purpose] | [Date] | [Names / Roles] | [Reference] |

---

### Appendix D — Certificate Inventory Summary

*This appendix provides a high-level summary of the certificate inventory as at the review date. Full certificate inventory is maintained in [certificate management system / CMDB].*

| Certificate Category | Total Count | Expiring within 90 days | Expired (unrenewed) | Algorithm | Status |
|---|---|---|---|---|---|
| TLS / SSL Certificates (External) | [Number] | [Number] | [Number] | [e.g., RSA-2048/SHA-256] | [Within policy / Gap] |
| TLS / SSL Certificates (Internal) | [Number] | [Number] | [Number] | [Algorithm] | [Status] |
| Code Signing Certificates | [Number] | [Number] | [Number] | [Algorithm] | [Status] |
| Client Authentication Certificates | [Number] | [Number] | [Number] | [Algorithm] | [Status] |
| PKI Root / Intermediate CA Certificates | [Number] | [Number] | [Number] | [Algorithm] | [Status] |

**Certificate Lifecycle Findings:**

- [e.g., [Number] certificates identified with expiry within 90 days — renewal process initiated]
- [e.g., [Number] expired certificates identified — investigation and remediation in progress — see FIND-[ID]]
- [e.g., [Number] certificates using deprecated SHA-1 — migration required by [Date] — see ACT-[ID]]

---

### Appendix E — HSM Validation Certificates

*This appendix references the FIPS 140-2/140-3 validation certificates for all HSMs listed in Section 8.1. Validation certificates confirm that the HSMs meet the required cryptographic module security standards.*

| HSM ID | Manufacturer | Model | FIPS Certificate Number | Validation Level | Certificate URL / Reference | Expiry / Sunset Date |
|---|---|---|---|---|---|---|
| [HSM-01] | [Manufacturer] | [Model] | [CMVP Certificate #] | Level [2/3] | [NIST CMVP reference / internal reference] | [Date] |
| [HSM-02] | [Manufacturer] | [Model] | [Certificate #] | Level [2/3] | [Reference] | [Date] |

---

### Appendix F — Glossary of Terms

| Term | Definition |
|---|---|
| **Algorithm** | A mathematical procedure used to encrypt or decrypt data, generate keys, or produce digital signatures. |
| **AES** | Advanced Encryption Standard — a symmetric block cipher standardized by NIST (FIPS 197). |
| **CA** | Certificate Authority — an entity that issues and manages digital certificates. |
| **Cryptoperiod** | The time period during which a specific key is authorized for use by legitimate entities. |
| **CSPRNG** | Cryptographically Secure Pseudo-Random Number Generator — used for key generation. |
| **DEK** | Data Encryption Key — a key used directly to encrypt data. |
| **ECDH** | Elliptic Curve Diffie-Hellman — a key agreement protocol using elliptic curve cryptography. |
| **ECDSA** | Elliptic Curve Digital Signature Algorithm — a digital signature algorithm using elliptic curves. |
| **FIPS** | Federal Information Processing Standard — standards issued by NIST for use in US government and applied as benchmarks internationally. |
| **HKDF** | HMAC-based Key Derivation Function — a key derivation function based on HMAC. |
| **HMAC** | Hash-based Message Authentication Code — a mechanism for message authentication using a cryptographic hash function and a secret key. |
| **HSM** | Hardware Security Module — a physical device that safeguards and manages cryptographic keys and performs cryptographic operations. |
| **KEK** | Key-Encrypting Key — a key used to encrypt other keys. |
| **ML-KEM** | Module-Lattice-Based Key-Encapsulation Mechanism — a NIST-standardized post-quantum key encapsulation mechanism (FIPS 203). |
| **ML-DSA** | Module-Lattice-Based Digital Signature Algorithm — a NIST-standardized post-quantum digital signature algorithm (FIPS 204). |
| **NIST** | National Institute of Standards and Technology (United States). |
| **OCSP** | Online Certificate Status Protocol — a protocol for checking the revocation status of a digital certificate. |
| **PBKDF2** | Password-Based Key Derivation Function 2 — a key derivation function that applies a pseudorandom function to a password with a salt value. |
| **PKI** | Public Key Infrastructure — the set of roles, policies, and procedures needed to create, manage, distribute, use, store, and revoke digital certificates. |
| **PQC** | Post-Quantum Cryptography — cryptographic algorithms designed to be secure against attacks by quantum computers. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles in a process or project. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |
| **RSA** | Rivest–Shamir–Adleman — an asymmetric cryptographic algorithm used for key exchange and digital signatures. |
| **SHA** | Secure Hash Algorithm — a family of cryptographic hash functions standardized by NIST. |
| **TLS** | Transport Layer Security — a cryptographic protocol for securing communications over a network. |

---

### Appendix G — Review Meeting Minutes Reference

*This appendix references the minutes of meetings held as part of the annual review process.*

| Meeting | Date | Participants | Minutes Reference |
|---|---|---|---|
| Review kickoff meeting | [Date] | [Names / Roles] | [Reference ID / Location] |
| Technical validation workshop | [Date] | [Names / Roles] | [Reference ID / Location] |
| Findings review and management response meeting | [Date] | [Names / Roles] | [Reference ID / Location] |
| Final review and approval meeting | [Date] | [Names / Roles] | [Reference ID / Location] |

---

*End of Document*

---

| Document ID | [Document ID] |
|---|---|
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [DD Month YYYY] |
| **Owner** | CISO / Head of Cryptography — [Organization Name] |

*This document is subject to annual review and must be updated whenever material changes are made to [Organization Name]'s cryptographic policy or controls. Queries regarding this document should be directed to the CISO's office.*