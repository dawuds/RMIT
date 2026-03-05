# QR Security Implementation Evidence

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

This document serves as formal evidence that [Organization Name] has implemented, validated, and maintains adequate security controls for QR code-based transactions and services, in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.9**. It demonstrates the institution's compliance posture with respect to QR code validation mechanisms, cryptographic protections, and anti-tampering safeguards across all applicable channels and systems.

### 1.1 Purpose

This evidence document provides a structured record of:

- The scope and criteria applied in assessing QR security controls
- The methodologies used to validate implementation integrity
- Findings arising from assessments, including control gaps and remediation actions
- The approved cryptographic standards governing QR code payloads
- Key lifecycle governance and Hardware Security Module (HSM) deployment requirements

### 1.2 Scope

*Define the specific systems, channels, products, and business functions covered by this evidence artifact. Include in-scope and explicitly state any out-of-scope items.*

**In-Scope Systems and Channels:**

| System / Channel | Description | Business Function | Environment |
|---|---|---|---|
| [System Name] | [Brief Description] | [e.g., DuitNow QR Payments] | [Production / UAT] |
| [System Name] | [Brief Description] | [e.g., QR-based Customer Onboarding] | [Production / UAT] |
| [System Name] | [Brief Description] | [e.g., QR Login / Authentication] | [Production / UAT] |

**Out-of-Scope:**

- [Describe any systems or processes explicitly excluded, with justification]

### 1.3 Regulatory Context

This artifact is maintained in direct response to the following regulatory obligations:

- **BNM RMiT Clause 12.9** — Requirements for the security of QR code implementations, including validation, encryption, and anti-tampering controls
- **BNM RMiT Clause 10.x** — Cryptographic controls and key management obligations
- Applicable **PayNet DuitNow QR** technical and security specifications (where relevant)

---

## 2. Assessment Scope and Criteria

*Describe the boundaries of the security assessment performed, the risk criteria applied, and the control objectives used to evaluate QR security implementation. This section should be updated at each review cycle or triggered assessment event.*

### 2.1 Assessment Identifier

| Field | Details |
|---|---|
| **Assessment ID** | [ASSESS-YYYY-NNN] |
| **Assessment Type** | [Periodic Quarterly Review / Triggered Event Review / Post-Incident Review] |
| **Assessment Date(s)** | [Start Date] to [End Date] |
| **Conducted By** | [Internal Audit / External Assessor / Second Line Risk] |
| **Assessor Name / Firm** | [Name or Firm] |
| **Trigger** | [Scheduled / System Change / Incident / Regulatory Directive] |

### 2.2 Control Objectives

The following control objectives were assessed:

| Ref | Control Objective | Applicable Standard |
|---|---|---|
| CO-01 | QR code payloads are validated before processing | BNM RMiT 12.9 |
| CO-02 | QR code data is encrypted in transit and at rest | BNM RMiT 12.9 |
| CO-03 | Anti-tampering mechanisms are implemented and tested | BNM RMiT 12.9 |
| CO-04 | QR code generation uses approved cryptographic algorithms | BNM RMiT 12.9 |
| CO-05 | Expiry and one-time-use controls are enforced | BNM RMiT 12.9 |
| CO-06 | Audit logs capture QR generation, presentation, and scanning events | BNM RMiT 12.9 |
| CO-07 | Cryptographic keys used in QR operations are managed per policy | BNM RMiT 10.x |

### 2.3 Assessment Criteria and Risk Thresholds

*Specify the risk rating scale and thresholds used to classify findings.*

| Rating | Definition | Required Action |
|---|---|---|
| **Critical** | Control absent; exploitable vulnerability with high impact | Immediate remediation within 72 hours |
| **High** | Control significantly deficient; exploitable under feasible conditions | Remediation within 14 days |
| **Medium** | Control partially effective; compensating controls exist | Remediation within 30 days |
| **Low** | Minor gap; negligible risk with current compensating controls | Remediation within 90 days |
| **Informational** | Observation only; no material risk | Action at next scheduled review |

---

## 3. Methodology

*Describe the technical and procedural methods used to assess QR security controls. This provides audit traceability and demonstrates the rigour of the assessment.*

### 3.1 Assessment Approach

The following methodology was applied during this assessment:

- **Documentation Review** — Examination of QR security policies, technical specifications, architecture diagrams, and prior assessment records
- **Configuration Review** — Inspection of cryptographic configurations, validation logic, and anti-tampering implementation in source code and deployment artefacts
- **Technical Testing** — Active testing of QR generation, validation, and scanning workflows in [Production / UAT / Isolated Test Environment]
- **Interview and Walkthrough** — Structured interviews with system owners, developers, and security operations personnel
- **Log and Audit Trail Review** — Review of audit logs for QR-related events to confirm completeness and integrity

### 3.2 Tools and Techniques Used

| Tool / Technique | Purpose | Applied By |
|---|---|---|
| [Tool Name, e.g., ZXing / QR Test Suite] | QR payload validation and decoding testing | [Team / Assessor] |
| [Tool Name, e.g., Burp Suite] | Interception and manipulation of QR-related API traffic | [Team / Assessor] |
| [Tool Name, e.g., OpenSSL] | Cryptographic algorithm and key length verification | [Team / Assessor] |
| [Manual Code Review] | Validation logic and anti-tampering control review | [Team / Assessor] |
| [Log Analysis Tool] | Audit trail completeness verification | [Team / Assessor] |

### 3.3 Evidence Collected

*List the specific evidence items collected to support findings and control assertions.*

| Evidence Ref | Description | Source | Date Collected |
|---|---|---|---|
| EV-001 | [e.g., QR Security Architecture Diagram v2.1] | [System / Team] | [Date] |
| EV-002 | [e.g., Cryptographic Configuration Extract — Production] | [System / Team] | [Date] |
| EV-003 | [e.g., QR Validation Unit Test Results] | [System / Team] | [Date] |
| EV-004 | [e.g., Penetration Test Report — QR Module] | [External Firm] | [Date] |
| EV-005 | [e.g., HSM Audit Log Sample — 90 Days] | [System / Team] | [Date] |

---

## 4. Findings and Ratings

*Record all findings identified during the assessment. Each finding must include a clear description, evidence reference, risk rating, and remediation timeline. Leave no findings unaddressed — open findings must be tracked to closure.*

### 4.1 Summary of Findings

| Finding ID | Control Objective | Title | Rating | Status |
|---|---|---|---|---|
| F-001 | CO-01 | [Finding Title] | [Critical / High / Medium / Low] | [Open / Closed / In-Progress] |
| F-002 | CO-03 | [Finding Title] | [Rating] | [Status] |
| F-003 | CO-06 | [Finding Title] | [Rating] | [Status] |
| F-004 | CO-07 | [Finding Title] | [Rating] | [Status] |

**Overall Assessment Rating:** [Satisfactory / Requires Improvement / Unsatisfactory]

### 4.2 Detailed Findings

---

**Finding ID:** F-001
**Control Objective:** [CO-Ref]
**Title:** [Descriptive Title of Finding]
**Rating:** [Critical / High / Medium / Low / Informational]
**Evidence Reference:** [EV-00X]

**Description:**
[Provide a factual description of the control gap or deficiency observed. Include what was tested, what was expected, and what was observed.]

**Risk Impact:**
[Describe the potential business, regulatory, or security impact if this finding is not remediated.]

**Recommendation:**
[Provide a specific, actionable recommendation for remediation.]

**Management Response:**
[To be completed by system owner — include acceptance, rejection, or remediation plan.]

**Remediation Owner:** [Name / Role]
**Target Remediation Date:** [Date]
**Actual Closure Date:** [Date]

---

*Replicate the above block for each finding identified. Remove this block entirely if no findings are raised.*

### 4.3 Closed Findings (Prior Periods)

| Finding ID | Original Rating | Description | Closure Date | Verified By |
|---|---|---|---|---|
| [F-PREV-001] | [Rating] | [Brief Description] | [Date] | [Name / Role] |

---

## 5. Approved Algorithms and Key Lengths

*This section documents the cryptographic standards approved for use in QR code operations at [Organization Name]. All QR-related implementations must conform to these standards. Deviations require formal exception approval from the CISO.*

### 5.1 Approved Cryptographic Standards for QR Operations

The following algorithms and parameters are approved for use in QR code generation, signing, validation, and encryption:

| Use Case | Approved Algorithm | Minimum Key Length | Hash Function | Notes |
|---|---|---|---|---|
| QR Payload Signing | ECDSA | 256-bit (P-256 / secp256r1) | SHA-256 | RSA-PSS (2048-bit min) as alternative |
| QR Payload Encryption | AES-GCM | 256-bit | N/A | IV must be unique per operation |
| Transport Layer Security | TLS 1.2 / TLS 1.3 | N/A | SHA-256 / SHA-384 | TLS 1.0 and 1.1 prohibited |
| MAC / HMAC (Integrity) | HMAC | 256-bit key | SHA-256 | For payload integrity validation |
| Key Wrapping (HSM Export) | AES-KW | 256-bit | N/A | Per NIST SP 800-38F |
| Random Number Generation | DRBG (SP 800-90A) | N/A | N/A | Hardware entropy source required |

### 5.2 Prohibited Algorithms

The following algorithms are **explicitly prohibited** in all QR-related operations:

| Algorithm | Reason for Prohibition |
|---|---|
| MD5 | Cryptographically broken; collision vulnerabilities |
| SHA-1 | Deprecated; collision demonstrated (SHAttered attack) |
| DES / 3DES | Insufficient key length; deprecated by NIST |
| RSA < 2048-bit | Insufficient security margin |
| ECB Mode (any cipher) | Deterministic; leaks plaintext patterns |
| RC4 | Cryptographically broken |

### 5.3 Algorithm Review Schedule

Cryptographic algorithm approvals are reviewed:

- **Annually** — as part of the Cryptographic Standards Review
- **On trigger** — following publication of material cryptanalytic advances or updated guidance from BNM, NACSA, or NIST

**Last Algorithm Review Date:** [Date]
**Next Scheduled Review Date:** [Date]
**Reviewed By:** [Name / Role]

---

## 6. Key Lifecycle Management

*Document the complete lifecycle of cryptographic keys used in QR operations, from generation through destruction. This section must demonstrate that [Organization Name] maintains continuous control over keys at every lifecycle stage, consistent with BNM RMiT requirements and industry best practice.*

### 6.1 Key Inventory — QR Operations

| Key ID | Key Type | Algorithm | Length | Purpose | Owner | Status | Expiry Date |
|---|---|---|---|---|---|---|---|
| [KEY-QR-001] | Asymmetric — Private | ECDSA P-256 | 256-bit | QR Payload Signing | [Team] | [Active] | [Date] |
| [KEY-QR-002] | Symmetric | AES-GCM | 256-bit | QR Payload Encryption | [Team] | [Active] | [Date] |
| [KEY-QR-003] | Symmetric | HMAC-SHA-256 | 256-bit | Payload Integrity MAC | [Team] | [Active] | [Date] |
| [KEY-QR-004] | Asymmetric — Public | ECDSA P-256 | 256-bit | QR Signature Verification | [Team] | [Active] | [Date] |

### 6.2 Lifecycle Controls

| Lifecycle Stage | Control Requirement | Implementation | Evidence Reference |
|---|---|---|---|
| **Generation** | Keys generated within HSM using hardware entropy | [Describe implementation] | [EV-Ref] |
| **Distribution** | Keys distributed via encrypted channels under dual control | [Describe implementation] | [EV-Ref] |
| **Storage** | Keys stored only within approved HSM or encrypted key store | [Describe implementation] | [EV-Ref] |
| **Usage** | Keys used only for designated purpose; usage logged | [Describe implementation] | [EV-Ref] |
| **Rotation** | Keys rotated per schedule or on suspected compromise | [Describe implementation] | [EV-Ref] |
| **Suspension** | Keys suspended immediately upon compromise notification | [Describe implementation] | [EV-Ref] |
| **Destruction** | Keys destroyed using approved zeroisation procedures | [Describe implementation] | [EV-Ref] |

### 6.3 Key Rotation Schedule

| Key ID | Rotation Frequency | Last Rotation Date | Next Rotation Date | Rotation Method |
|---|---|---|---|---|
| [KEY-QR-001] | [e.g., Annual] | [Date] | [Date] | [HSM-assisted rotation / Dual-control ceremony] |
| [KEY-QR-002] | [e.g., Quarterly] | [Date] | [Date] | [Automated rotation via KMS] |
| [KEY-QR-003] | [e.g., Annual] | [Date] | [Date] | [Manual dual-control ceremony] |

### 6.4 Key Compromise Response

In the event of confirmed or suspected key compromise, the following immediate response applies:

1. Notify CISO and Head of Cryptography within **[X] hours** of detection
2. Suspend affected key(s) in HSM immediately
3. Initiate emergency key rotation procedure (refer to **[Cryptographic Incident Response Procedure — Doc Ref]** )
4. Revoke and reissue any certificates or tokens derived from compromised key material
5. Conduct root cause analysis and document in incident record
6. Report to BNM if material impact to operations or customer data is confirmed

---

## 7. HSM Usage Requirements

*This section documents [Organization Name]'s requirements and evidence for Hardware Security Module deployment in support of QR security operations. HSMs provide the highest assurance boundary for key generation, storage, and cryptographic operations.*

### 7.1 HSM Deployment Overview

| Attribute | Details |
|---|---|
| **HSM Model / Vendor** | [e.g., Thales Luna Network HSM 7 / Utimaco SecurityServer] |
| **Certification Level** | [e.g., FIPS 140-2 Level 3 / Common Criteria EAL4+] |
| **Deployment Mode** | [Network-attached / Embedded / Cloud HSM (e.g., AWS CloudHSM)] |
| **High Availability Configuration** | [e.g., Active-Active cluster / Active-Passive failover] |
| **Location** | [Primary: Data Centre Name] / [Secondary: DR Site Name] |
| **HSM Firmware Version** | [Version] |
| **Last Firmware Review Date** | [Date] |

### 7.2 Operations Mandated to Use HSM

The following QR-related cryptographic operations **must** be performed within the HSM boundary and must not be performed in software:

| Operation | HSM Mandate | Rationale |
|---|---|---|
| Private key generation (QR signing keys) | **Mandatory** | Ensures entropy quality and key non-exportability |
| QR payload signing | **Mandatory** | Protects signing key from extraction |
| Key wrapping / unwrapping for distribution | **Mandatory** | Prevents key material exposure in plaintext |
| Random number generation for QR tokens | **Mandatory** | Hardware entropy requirement |
| Encryption key generation | **Mandatory** | Ensures key material never exists outside HSM in cleartext |

### 7.3 HSM Access Controls

| Control | Requirement | Implementation Status |
|---|---|---|
| Dual control for key operations | Minimum two custodians required for key ceremonies | [Implemented / Partially Implemented / Not Implemented] |
| Role-based access to HSM partitions | Segregated partitions per application function | [Implemented / Partially Implemented / Not Implemented] |
| Tamper detection and auto-zeroisation | HSM configured to zeroize on tamper event | [Implemented / Partially Implemented / Not Implemented] |
| Audit logging of all HSM operations | Complete audit trail retained for [X] years | [Implemented / Partially Implemented / Not Implemented] |
| Physical security of HSM appliance | Located in locked, access-controlled rack | [Implemented / Partially Implemented / Not Implemented] |
| HSM administrative credentials management | Credentials held by designated custodians | [Implemented / Partially Implemented / Not Implemented] |

### 7.4 HSM Health and Monitoring

*Describe how HSM operational health is monitored, how alerts are managed, and what periodic checks are performed.*

| Check | Frequency | Last Performed | Performed By |
|---|---|---|---|
| HSM availability and connectivity check | Daily (automated) | [Date] | [Team / System] |
| HSM audit log review | Monthly | [Date] | [Name / Role] |
| HSM firmware and patch review | Quarterly | [Date] | [Name / Role] |
| Key custodian access review | Annual | [Date] | [Name / Role] |
| Physical inspection of HSM hardware | Annual | [Date] | [Name / Role] |
| Disaster recovery failover test (HSM) | Annual | [Date] | [Name / Role] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for QR security implementation, assessment, and evidence maintenance across [Organization Name].*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Head of Cryptography | IT Security Team | System / Application Owner | Internal Audit | Risk Management | Technology Operations |
|---|---|---|---|---|---|---|---|
| Define QR cryptographic standards | C | R | C | I | I | C | I |
| Approve cryptographic standards | **A** | R | I | I | I | C | I |
| Implement QR security controls | I | C | R | R | I | I | R |
| Conduct QR security assessment | A | C | R | C | C | I | I |
| Manage HSM operations | A | R | C | I | I | I | R |
| Manage cryptographic key lifecycle | A | **R** | C | C | I | I | R |
| Review and sign off this document | **A** | R | C | I | I | I | I |
| Report findings to Board / BIRMC | **R** | C | I | I | C | C | I |
| Remediate identified findings | C | C | R | **R** | I | I | R |
| Verify finding closure | A | C | R | I | R | I | I |

---

## 9. Review and Approval

### 9.1 Review Frequency

This document is reviewed:

- **Per event** — following any material change to QR systems, a security incident affecting QR operations, or a triggered assessment
- **Quarterly** — as part of the scheduled cryptographic and QR security review cycle
- **On regulatory direction** — upon receipt of new or amended guidance from BNM or PayNet

### 9.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Brief description of changes] |
| [2.0] | [Date] | [Author Name] | [Brief description of changes] |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Name] | __________________ | [Date] |
| Head of Cryptography | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Head of Technology | [Name] | __________________ | [Date] |
| Internal Audit Acknowledgement | [Name] | __________________ | [Date] |

---

## 10. References

The following regulatory frameworks, standards, and internal policies are referenced by this document:

| Ref | Document | Clause / Section | Issuing Body |
|---|---|---|---|
| R-01 | Risk Management in Technology (RMiT) Policy Document | **Clause 12.9** — QR Code Security | Bank Negara Malaysia |
| R-02 | Risk Management in Technology (RMiT) Policy Document | Clause 10.x — Cryptographic Controls | Bank Negara Malaysia |
| R-03 | Risk Management in Technology (RMiT) Policy Document | Clause 11.x — Key Management | Bank Negara Malaysia |
| R-04 | DuitNow QR Technical and Security Specifications | [Relevant Section] | PayNet Malaysia |
| R-05 | NIST Special Publication 800-57 | Key Management Recommendations | NIST |
| R-06 | NIST Special Publication 800-131A | Transitioning the Use of Cryptographic Algorithms | NIST |
| R-07 | FIPS 140-2 / FIPS 140-3 | Security Requirements for Cryptographic Modules | NIST |
| R-08 | ISO/IEC 18033 | Encryption Algorithms | ISO/IEC |
| R-09 | [Organization Name] — Cryptographic Standards Policy | [Internal Doc Ref] | [Organization Name] |
| R-10 | [Organization Name] — Key Management Procedure | [Internal Doc Ref] | [Organization Name] |
| R-11 | [Organization Name] — Information Security Policy | [Internal Doc Ref] | [Organization Name] |

---

## 11. Appendices

### Appendix A — QR Security Architecture Diagram

*Attach or embed the current QR security architecture diagram showing system components, trust boundaries, data flows, and cryptographic control points. Diagrams must be version-controlled and dated.*

[Attach: QR Security Architecture Diagram — Version X.X — Dated [Date]]

---

### Appendix B — QR Validation Test Results

*Include the results of QR code validation testing, covering both positive (valid QR accepted) and negative (tampered / expired / malformed QR rejected) test cases.*

| Test Case ID | Description | Expected Result | Actual Result | Pass / Fail | Tested By | Date |
|---|---|---|---|---|---|---|
| TC-001 | Valid QR with correct signature | Accepted and processed | [Actual] | [P/F] | [Name] | [Date] |
| TC-002 | QR with invalid signature | Rejected with error | [Actual] | [P/F] | [Name] | [Date] |
| TC-003 | Expired QR code (past TTL) | Rejected — expired | [Actual] | [P/F] | [Name] | [Date] |
| TC-004 | Previously used one-time QR | Rejected — already used | [Actual] | [P/F] | [Name] | [Date] |
| TC-005 | QR payload with tampered amount field | Rejected — integrity failure | [Actual] | [P/F] | [Name] | [Date] |
| TC-006 | QR generated with prohibited algorithm | Rejected at validation | [Actual] | [P/F] | [Name] | [Date] |

---

### Appendix C — Cryptographic Exception Register

*Record any approved deviations from the cryptographic standards documented in Section 5. All exceptions must be formally approved by the CISO and have a defined remediation timeline.*

| Exception ID | System / Component | Approved Algorithm Used | Required Algorithm | Business Justification | Approved By | Approval Date | Remediation Date |
|---|---|---|---|---|---|---|---|
| EXC-001 | [System Name] | [Algorithm] | [Required Algorithm] | [Justification] | [CISO Name] | [Date] | [Date] |

---

### Appendix D — Key Ceremony Records

*Maintain references to formal key ceremony records for all QR cryptographic key generation and rotation events. Full ceremony records are retained separately under [Document Storage Location].*

| Ceremony ID | Key ID | Ceremony Type | Date | Custodians Present | Ceremony Record Location |
|---|---|---|---|---|---|
| KC-001 | [KEY-QR-001] | [Initial Generation] | [Date] | [Names] | [Location / Document Ref] |
| KC-002 | [KEY-QR-002] | [Annual Rotation] | [Date] | [Names] | [Location / Document Ref] |

---

### Appendix E — Regulatory Correspondence

*Reference any correspondence with BNM, PayNet, or other regulatory bodies specifically relating to QR security, where such correspondence has informed the controls documented herein.*

| Ref | Date | Counterparty | Subject | Document Location |
|---|---|---|---|---|
| CORR-001 | [Date] | [BNM / PayNet] | [Subject] | [Location] |

---

*End of Document*

---

> **Document Control Notice:** This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. Printed copies are uncontrolled — always refer to the document management system for the current version.