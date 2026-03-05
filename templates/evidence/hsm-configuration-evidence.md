# HSM Configuration Evidence

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

## 1. Purpose and Scope

*This section establishes the intent of this document and defines the boundaries of the HSM configuration evidence it captures.*

This document provides formal evidence of the deployment, configuration, and operational status of Hardware Security Modules (HSMs) used to protect critical cryptographic keys within [Organization Name]'s technology environment. It is maintained in accordance with **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.21**, which mandates that financial institutions implement robust cryptographic key management controls using hardware-based security mechanisms.

### 1.1 Scope

This evidence record applies to:

- All HSMs deployed within the production, disaster recovery (DR), and pre-production environments of [Organization Name]
- Cryptographic keys classified as **Critical** or **High** sensitivity, including but not limited to:
  - Master encryption keys (MEKs)
  - Key encryption keys (KEKs)
  - Transaction signing keys
  - TLS/PKI private keys for internet-facing systems
  - Payment processing keys (e.g., PIN encryption keys, card scheme keys)
- Integration points between HSMs and dependent critical systems (e.g., core banking, payment gateways, authentication services)

### 1.2 Exclusions

*List any systems, environments, or key types explicitly excluded from this evidence record.*

- [List exclusions, e.g., software-based key stores in development environments]
- [Any third-party managed HSM services covered under separate evidence records]

---

## 2. Assessment Scope and Criteria

*Define the specific evaluation criteria used to assess HSM deployment adequacy, referencing applicable standards and internal policies.*

### 2.1 Assessment Scope

| Item | Details |
|---|---|
| **Assessment Reference** | [Assessment ID / Audit Cycle Reference] |
| **Assessment Date** | [Date of Assessment] |
| **Assessed By** | [Name, Role] |
| **Systems in Scope** | [List of HSM units and associated systems] |
| **Environments Covered** | Production / DR / Pre-Production |
| **Assessment Trigger** | Per-Event / Quarterly Review / Annual Audit |

### 2.2 Evaluation Criteria

The HSM deployment and configuration is assessed against the following criteria:

| Criterion | Applicable Standard / Clause |
|---|---|
| Hardware certification and tamper-evidence | FIPS 140-2 Level 3 or equivalent; RMiT Clause 10.21 |
| Dual control and split knowledge for key generation | RMiT Clause 10.21; PCI DSS Requirement 3.6 |
| Key ceremony documentation and custodian records | RMiT Clause 10.21 |
| Audit logging and monitoring of HSM activity | RMiT Clause 10.27; ISO 27001 A.12.4 |
| Firmware and software patching currency | RMiT Clause 10.3 |
| Physical security controls at HSM location | RMiT Clause 10.52 |
| Redundancy and high availability configuration | RMiT Clause 10.21 |
| Backup and key recovery procedures | RMiT Clause 10.21 |
| Access control and role segregation | RMiT Clause 10.21; ISO 27001 A.9 |
| Compliance with [Organization Name] Cryptographic Key Management Policy | [Internal Policy Reference] |

---

## 3. Methodology

*Describe the approach used to collect, verify, and document the HSM configuration evidence.*

### 3.1 Evidence Collection Approach

The following methodology was applied to gather and validate HSM configuration evidence:

1. **Documentation Review** — Examination of HSM vendor specifications, configuration baselines, and internal key management procedures
2. **Configuration Inspection** — Direct review of HSM administrative console outputs, configuration exports, and audit logs
3. **Physical Inspection** — On-site verification of HSM tamper seals, physical location, and access control measures
4. **Interview** — Discussions with HSM custodians, system administrators, and the Head of Cryptography
5. **Testing** — Functional verification of key generation, encryption/decryption operations, and failover capability

### 3.2 Tools and References Used

| Tool / Reference | Purpose |
|---|---|
| [HSM Vendor Management Console / CLI] | Configuration export and audit log retrieval |
| [Vulnerability Scanner / Compliance Tool] | Firmware and patch level verification |
| [Organization Name] Key Management Policy v[x.x] | Internal baseline reference |
| FIPS 140-2 Validation Certificate | Hardware certification verification |
| PCI DSS Self-Assessment Questionnaire (SAQ) | Supplementary control mapping |

### 3.3 Sampling Approach

*If applicable, describe which HSM units were sampled and the rationale for sampling selection.*

- **Population:** [Total number of HSMs in scope]
- **Sample Selected:** [Number of HSMs assessed]
- **Sampling Rationale:** [e.g., 100% coverage of production HSMs; risk-based sampling for DR units]

---

## 4. Findings and Ratings

*Document the outcome of the assessment for each HSM unit. Assign a risk rating to any gaps or non-conformances identified.*

### 4.1 HSM Inventory and Configuration Summary

| HSM ID | Model / Vendor | Location | Environment | Firmware Version | FIPS Certification | HA Configuration | Status |
|---|---|---|---|---|---|---|---|
| [HSM-001] | [Vendor / Model] | [Data Centre / Rack ID] | Production | [Version] | FIPS 140-2 Level [3] | Active/Passive | [Compliant / Non-Compliant] |
| [HSM-002] | [Vendor / Model] | [Data Centre / Rack ID] | DR | [Version] | FIPS 140-2 Level [3] | Standby | [Compliant / Non-Compliant] |
| [HSM-003] | [Vendor / Model] | [Data Centre / Rack ID] | Pre-Production | [Version] | FIPS 140-2 Level [3] | Standalone | [Compliant / Non-Compliant] |

### 4.2 Configuration Control Assessment

| Control Area | Expected State | Observed State | Rating | Finding Ref |
|---|---|---|---|---|
| Hardware tamper seals intact | All seals intact | [Observed] | [Pass / Fail] | [F-001] |
| Dual control enforced for key generation | Minimum 2 custodians required | [Observed] | [Pass / Fail] | [F-002] |
| Audit logging enabled | All administrative actions logged | [Observed] | [Pass / Fail] | [F-003] |
| Firmware patched to current approved version | Version [x.x] as per approved baseline | [Observed] | [Pass / Fail] | [F-004] |
| Default credentials changed | No default credentials present | [Observed] | [Pass / Fail] | [F-005] |
| Network interface segregated (dedicated management VLAN) | HSM on isolated management network | [Observed] | [Pass / Fail] | [F-006] |
| Key backup encrypted and stored offsite | Encrypted backup in approved offsite location | [Observed] | [Pass / Fail] | [F-007] |
| Role-based access with least privilege | Minimum roles: SO, User, Auditor | [Observed] | [Pass / Fail] | [F-008] |

### 4.3 Risk Rating Definitions

| Rating | Definition |
|---|---|
| **Critical** | Immediate risk to key material or system integrity; remediation required within 24 hours |
| **High** | Significant gap against RMiT or internal policy; remediation required within 30 days |
| **Medium** | Partial non-conformance; remediation required within 90 days |
| **Low** | Minor deviation or enhancement opportunity; remediation within next review cycle |
| **Pass** | Control operating effectively; no action required |

### 4.4 Overall Assessment Rating

| HSM ID | Overall Rating | Rationale |
|---|---|---|
| [HSM-001] | [Pass / Low / Medium / High / Critical] | [Brief justification] |
| [HSM-002] | [Pass / Low / Medium / High / Critical] | [Brief justification] |
| [HSM-003] | [Pass / Low / Medium / High / Critical] | [Brief justification] |

---

## 5. Evidence Reviewed

*List all artefacts, documents, and outputs reviewed as part of this evidence collection exercise. These items should be retained as supporting evidence in the document management system.*

### 5.1 Documentary Evidence

| Evidence Item | Document Reference | Date Obtained | Obtained From |
|---|---|---|---|
| HSM configuration export / baseline | [File Name / Path] | [Date] | [System / Custodian] |
| HSM audit log extract (last 90 days) | [File Name / Path] | [Date] | [HSM Admin Console] |
| Key ceremony minutes and custodian sign-off sheets | [Document ID] | [Date] | [Key Custodian Records] |
| FIPS 140-2 validation certificate | [Certificate No.] | [Date] | [Vendor / NIST CMVP] |
| HSM firmware patch record | [Change ID] | [Date] | [Change Management System] |
| Physical access logs for HSM data centre | [Log Reference] | [Date] | [Data Centre Operations] |
| Cryptographic Key Management Policy | [Policy ID, Version] | [Date] | [Policy Management System] |
| HSM vendor hardening guide | [Document Reference] | [Date] | [Vendor Documentation Portal] |
| Network diagram showing HSM placement | [Diagram ID] | [Date] | [IT Architecture] |
| DR failover test results | [Test Report ID] | [Date] | [IT Operations] |

### 5.2 Technical Evidence

| Evidence Item | Method of Collection | Stored At |
|---|---|---|
| HSM administrative role listing (exported) | Console command output | [Repository / DMS Path] |
| Enabled cryptographic algorithms list | Configuration snapshot | [Repository / DMS Path] |
| Active partition and key object inventory | HSM management utility export | [Repository / DMS Path] |
| Network port and interface configuration | Configuration export | [Repository / DMS Path] |
| Backup key material storage confirmation | Custodian attestation + physical verification | [Repository / DMS Path] |

---

## 6. Recommendations

*Document all recommended actions arising from assessment findings. Each recommendation should be linked to a specific finding, assigned an owner, and tracked to closure.*

### 6.1 Recommendation Register

| Rec. ID | Finding Ref | Recommendation | Risk Rating | Responsible Owner | Target Completion Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | [F-001] | [Description of recommended action] | [Critical / High / Medium / Low] | [Name / Role] | [Date] | [Open / In Progress / Closed] |
| REC-002 | [F-002] | [Description of recommended action] | [Critical / High / Medium / Low] | [Name / Role] | [Date] | [Open / In Progress / Closed] |
| REC-003 | [F-003] | [Description of recommended action] | [Critical / High / Medium / Low] | [Name / Role] | [Date] | [Open / In Progress / Closed] |

### 6.2 Strategic Recommendations

*List any broader, non-finding-specific improvements recommended to strengthen the HSM programme.*

- [ ] [e.g., Evaluate migration from FIPS 140-2 Level 2 to Level 3 certified HSMs for payment processing keys]
- [ ] [e.g., Implement centralised HSM monitoring dashboard integrated with SIEM]
- [ ] [e.g., Review key ceremony procedures to align with updated BNM guidance]
- [ ] [e.g., Establish formal HSM lifecycle management policy covering procurement, commissioning, and decommissioning]

---

## 7. Roles and Responsibilities

*This section defines accountability for HSM configuration evidence activities using a RACI framework.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Head of Cryptography | HSM Administrator | IT Security Analyst | Internal Audit | Data Centre Operations |
|---|---|---|---|---|---|---|
| Define HSM configuration standards and baselines | C | R | C | C | I | I |
| Deploy and configure HSMs | I | A | R | C | I | C |
| Conduct key ceremonies | C | A | R | I | I | I |
| Perform quarterly HSM configuration review | A | R | C | R | I | I |
| Collect and compile configuration evidence | I | A | R | R | I | I |
| Review and approve evidence document | A | R | I | I | C | I |
| Monitor HSM audit logs | I | C | R | R | I | I |
| Manage HSM firmware patching | C | A | R | C | I | C |
| Maintain physical security of HSM location | I | C | I | I | I | R |
| Track and close recommendations | A | R | R | C | C | I |
| Report HSM compliance status to Board / Senior Management | R | C | I | I | I | I |

---

## 8. Review and Approval

### 8.1 Review Trigger

This document is subject to review under the following conditions:

- **Per-event:** Following any HSM deployment, decommissioning, firmware upgrade, key ceremony, or security incident affecting key material
- **Quarterly:** Scheduled configuration review aligned to [Organization Name]'s cryptographic key management review cycle
- **Ad hoc:** Upon request from Internal Audit, BNM examination, or senior management

### 8.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial document creation |
| [1.1] | [Date] | [Author Name, Role] | [Summary of changes, e.g., updated HSM inventory to include HSM-003] |
| [2.0] | [Date] | [Author Name, Role] | [Summary of changes] |

### 8.3 Approval Sign-Off

*All approvers must sign to confirm this evidence document is accurate, complete, and fit for audit purposes.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Cryptography | [Name] | __________________ | [Date] |
| CISO | [Name] | __________________ | [Date] |
| Chief Risk Officer (CRO) | [Name] | __________________ | [Date] |
| Internal Audit Representative | [Name] | __________________ | [Date] |

---

## 9. References

*The following regulatory and standards documents are applicable to this evidence record.*

| Reference | Document | Clause / Section |
|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document, Bank Negara Malaysia | Clause 10.21 — Cryptographic Controls |
| BNM RMiT | Risk Management in Technology Policy Document, Bank Negara Malaysia | Clause 10.27 — Audit Logging and Monitoring |
| BNM RMiT | Risk Management in Technology Policy Document, Bank Negara Malaysia | Clause 10.52 — Physical and Environmental Security |
| BNM RMiT | Risk Management in Technology Policy Document, Bank Negara Malaysia | Clause 10.3 — Patch and Vulnerability Management |
| FIPS 140-2 | Security Requirements for Cryptographic Modules, NIST | Level 3 — Physical Security Requirements |
| ISO/IEC 27001:2022 | Information Security Management Systems | A.8.24 — Use of Cryptography |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | Requirement 3.6 — Key Management Procedures |
| [Internal Policy] | [Organization Name] Cryptographic Key Management Policy | [Section Reference] |
| [Internal Policy] | [Organization Name] Information Security Policy | [Section Reference] |

---

## 10. Appendices

### Appendix A — HSM Technical Configuration Baseline

*Attach or reference the approved HSM configuration baseline document used as the assessment standard.*

> **Appendix A Reference:** [Document ID] — [Organization Name] HSM Configuration Baseline v[x.x], dated [Date]

| Parameter | Required Setting | Assessed Setting | Compliant? |
|---|---|---|---|
| Minimum key length (RSA) | 2048-bit minimum | [Observed] | [Yes / No] |
| Minimum key length (AES) | AES-256 | [Observed] | [Yes / No] |
| Allowed algorithms | [Approved algorithm list] | [Observed] | [Yes / No] |
| Disabled weak algorithms (DES, 3DES, RC4, MD5) | Disabled | [Observed] | [Yes / No] |
| SNMP version | SNMPv3 only | [Observed] | [Yes / No] |
| Session timeout (admin console) | [x] minutes | [Observed] | [Yes / No] |
| Concurrent admin sessions | Maximum [x] | [Observed] | [Yes / No] |
| NTP synchronisation | Enabled, synced to approved NTP server | [Observed] | [Yes / No] |

---

### Appendix B — Key Ceremony Record Summary

*Summarise key ceremonies conducted during the review period. Full ceremony minutes are retained separately under controlled access.*

| Ceremony ID | Date | Purpose | Participants | Outcome |
|---|---|---|---|---|
| [KC-001] | [Date] | [e.g., Annual Master Key Generation] | [List of custodians] | [Completed / Deferred] |
| [KC-002] | [Date] | [e.g., Key Compromise Recovery] | [List of custodians] | [Completed / Deferred] |

---

### Appendix C — HSM Audit Log Extract (Summary)

*Provide a summarised extract of HSM audit log events for the review period. Full logs are retained in [SIEM / Log Repository].*

| Timestamp | Event Type | User / Role | HSM ID | Result | Notes |
|---|---|---|---|---|---|
| [Date Time] | [e.g., Key Generation] | [SO / Admin] | [HSM-001] | Success | [Key label / reference] |
| [Date Time] | [e.g., Failed Login Attempt] | [Unknown] | [HSM-001] | Failed | [Investigated — no breach] |
| [Date Time] | [e.g., Firmware Update] | [Admin] | [HSM-002] | Success | [Change ID: CHG-XXXX] |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **HSM** | Hardware Security Module — a dedicated hardware device that manages, generates, and protects cryptographic keys within a tamper-resistant boundary |
| **KEK** | Key Encryption Key — a cryptographic key used to encrypt other keys |
| **MEK** | Master Encryption Key — the top-level key in a key hierarchy |
| **FIPS 140-2** | Federal Information Processing Standard 140-2 — US government standard for cryptographic module validation |
| **Key Ceremony** | A formal, controlled procedure for generating, loading, or retiring cryptographic keys, requiring dual control and witnessed by designated custodians |
| **Dual Control** | A security principle requiring two or more authorised individuals to be present and participate in a sensitive cryptographic operation |
| **Split Knowledge** | A security principle whereby no single individual has knowledge of an entire cryptographic key, with portions held by separate custodians |
| **RMiT** | Risk Management in Technology — BNM's technology risk management policy framework for financial institutions |
| **SO** | Security Officer — the HSM administrative role responsible for security domain management |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name] and designated regulators. Unauthorised disclosure is prohibited under [Organization Name]'s Information Classification Policy and applicable Malaysian law.*

*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Last Review Date]*