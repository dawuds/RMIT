# Key Lifecycle Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document constitutes the **Key Lifecycle Records** log maintained by [Organization Name] in accordance with the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.21**, which mandates that financial institutions implement robust cryptographic key management controls and maintain auditable records of all key lifecycle events.

These records capture every material event in the lifecycle of cryptographic keys used to protect information assets across [Organization Name]'s systems and infrastructure, including key generation, rotation, suspension, revocation, and destruction. The log is **system-generated on a continuous basis** and subject to a formal quarterly review by the IT Operations Manager.

**Scope includes:**

- All cryptographic keys used for data encryption, digital signatures, authentication, and secure communications
- Keys managed across all environments: production, disaster recovery, pre-production, and development (where applicable)
- Keys associated with systems within the scope of BNM RMiT, PDPA, and NACSA requirements
- Third-party and cloud-managed keys where [Organization Name] retains custodial or supervisory responsibility

**Out of Scope:**

- [Define any exclusions, e.g., keys managed entirely by regulated third parties with no shared custody]
- [Other exclusions as appropriate]

---

## 2. Asset / Item Identification

*This section records the unique identity of each cryptographic key asset. Every key managed by [Organization Name] must be assigned a unique identifier and associated with the system or data asset it protects.*

| Field | Value |
|---|---|
| **Key ID** | [Unique Key Identifier, e.g., KEY-2024-AES-001] |
| **Key Name / Label** | [Descriptive name, e.g., "Core Banking DB Encryption Key"] |
| **Algorithm** | [e.g., AES-256, RSA-4096, ECDSA P-384] |
| **Key Length (bits)** | [e.g., 256] |
| **Associated System / Application** | [System or application name and ID] |
| **Environment** | [Production / DR / Pre-Production / Development] |
| **Key Store / HSM Reference** | [e.g., HSM Slot ID, Vault Path, KMS ARN] |
| **Certificate / Key File Reference** | [File path, certificate serial number, or thumbprint if applicable] |
| **Date Generated** | [YYYY-MM-DD] |
| **Scheduled Expiry Date** | [YYYY-MM-DD] |

### 2.1 Key Inventory Summary Table

*Maintain a consolidated inventory of all active and archived keys. This table provides a high-level view for audit and oversight purposes.*

| Key ID | Key Name | Algorithm | Key Length | Associated System | Environment | Key Store | Date Generated | Expiry Date | Current Status |
|---|---|---|---|---|---|---|---|---|---|
| [KEY-ID] | [Name] | [Algorithm] | [Bits] | [System] | [Env] | [Store] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Active / Rotated / Revoked / Destroyed] |
| [KEY-ID] | [Name] | [Algorithm] | [Bits] | [System] | [Env] | [Store] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Active / Rotated / Revoked / Destroyed] |

---

## 3. Classification and Categorisation

*This section records the sensitivity classification and functional category of each key. Classification determines the handling, storage, access, and disposal requirements applicable to each key.*

### 3.1 Classification Level

*Assign a classification level consistent with [Organization Name]'s Data Classification Policy and BNM RMiT requirements.*

| Key ID | Classification Level | Basis for Classification |
|---|---|---|
| [KEY-ID] | [Top Secret / Secret / Confidential / Internal] | [e.g., Protects customer PII; protects core banking transaction data] |

**Classification Definitions:**

| Level | Description |
|---|---|
| **Top Secret** | Keys protecting highly sensitive data; compromise would cause severe operational or reputational harm |
| **Secret** | Keys protecting confidential financial or personal data regulated under PDPA or BNM directives |
| **Confidential** | Keys protecting internal business-sensitive information |
| **Internal** | Keys protecting non-public internal systems with lower sensitivity |

### 3.2 Functional Category

*Record the functional purpose of each key to ensure appropriate lifecycle controls are applied.*

| Key ID | Functional Category | Sub-Category |
|---|---|---|
| [KEY-ID] | [Data Encryption / Authentication / Digital Signature / Key Encryption Key (KEK) / Transport / Code Signing] | [e.g., Database Encryption / TLS / S/MIME] |

### 3.3 Regulatory / Compliance Tagging

*Tag keys with relevant regulatory frameworks to facilitate targeted audit reporting.*

| Key ID | Applicable Framework(s) | Notes |
|---|---|---|
| [KEY-ID] | [BNM RMiT / PDPA / NACSA / PCI-DSS / ISO 27001] | [Additional context if required] |

---

## 4. Owner and Custodian

*This section records accountability for each cryptographic key, distinguishing between the business owner (accountable) and the technical custodian (responsible for operational management).*

### 4.1 Key Ownership and Custody Register

*All keys must have a designated owner and at least one named custodian. Dual-custodian controls must be documented for keys classified Secret or above.*

| Key ID | Key Owner (Role) | Key Owner (Name) | Technical Custodian (Role) | Technical Custodian (Name) | Dual Custodian Required | Second Custodian (Name) |
|---|---|---|---|---|---|---|
| [KEY-ID] | [e.g., IT Operations Manager] | [Name] | [e.g., Systems Administrator] | [Name] | [Yes / No] | [Name if applicable] |

### 4.2 Ownership Definitions

| Role | Responsibilities |
|---|---|
| **Key Owner** | Accountable for the key's appropriate use, classification, and lifecycle decisions; authorises key generation, rotation, and destruction |
| **Technical Custodian** | Responsible for day-to-day operational management, storage, and technical procedures associated with the key |
| **Second / Dual Custodian** | Holds split knowledge or shared control for keys requiring dual authorisation; required for Top Secret and Secret keys |

### 4.3 Authorised Access List

*Record personnel and systems authorised to access or use each key. Access must follow the principle of least privilege.*

| Key ID | Authorised User / System | Access Type | Access Granted Date | Access Expiry / Review Date |
|---|---|---|---|---|
| [KEY-ID] | [Name / System ID] | [Read / Use / Administer] | [YYYY-MM-DD] | [YYYY-MM-DD] |

---

## 5. Status and Lifecycle Stage

*This section constitutes the core audit log of key lifecycle events. All events must be recorded at the time of occurrence, either automatically by the key management system or manually by the Technical Custodian. Each event entry must be immutable and tamper-evident.*

### 5.1 Lifecycle Event Log

*Record every lifecycle event for each key. This log is system-generated where a Key Management System (KMS) or Hardware Security Module (HSM) is in use. Manual entries must be co-signed by the Key Owner.*

| Event ID | Key ID | Event Type | Event Timestamp (UTC) | Performed By (Role) | Performed By (Name) | Authorised By | Event Details / Notes | Reference Ticket / Change ID |
|---|---|---|---|---|---|---|---|---|
| [EVT-ID] | [KEY-ID] | [Generation] | [YYYY-MM-DD HH:MM:SS] | [Role] | [Name] | [Authoriser Name] | [e.g., Initial generation for new core banking system deployment] | [CHG-XXXXX] |
| [EVT-ID] | [KEY-ID] | [Rotation] | [YYYY-MM-DD HH:MM:SS] | [Role] | [Name] | [Authoriser Name] | [e.g., Scheduled annual rotation per key management policy] | [CHG-XXXXX] |
| [EVT-ID] | [KEY-ID] | [Suspension] | [YYYY-MM-DD HH:MM:SS] | [Role] | [Name] | [Authoriser Name] | [e.g., Suspended pending investigation of suspected compromise] | [INC-XXXXX] |
| [EVT-ID] | [KEY-ID] | [Revocation] | [YYYY-MM-DD HH:MM:SS] | [Role] | [Name] | [Authoriser Name] | [e.g., Revoked following confirmed compromise; replacement key activated] | [INC-XXXXX] |
| [EVT-ID] | [KEY-ID] | [Destruction] | [YYYY-MM-DD HH:MM:SS] | [Role] | [Name] | [Authoriser Name] | [e.g., Secure destruction per retention schedule; destruction certificate issued] | [CHG-XXXXX] |

### 5.2 Permissible Lifecycle Event Types

| Event Type | Description | Authorisation Required |
|---|---|---|
| **Generation** | Creation of a new cryptographic key | Key Owner approval; documented change request |
| **Activation** | Key placed into active operational use | Key Owner approval |
| **Rotation** | Replacement of an active key with a newly generated key; predecessor retired | Key Owner approval; scheduled or triggered |
| **Suspension** | Temporary withdrawal of a key from use pending review | IT Operations Manager |
| **Revocation** | Permanent withdrawal of a key from use, typically due to compromise or policy breach | IT Operations Manager + CISO |
| **Archival** | Transfer of a retired key to secure long-term storage for decryption of legacy data | IT Operations Manager |
| **Destruction** | Secure, irreversible deletion of a key and all copies | Key Owner + CISO; destruction certificate required |

### 5.3 Current Status Register

*Snapshot of current key statuses for operational oversight. Updated quarterly or upon any status change.*

| Key ID | Key Name | Current Status | Status Since | Next Action | Next Action Due Date |
|---|---|---|---|---|---|
| [KEY-ID] | [Name] | [Active / Suspended / Revoked / Archived / Destroyed] | [YYYY-MM-DD] | [e.g., Scheduled Rotation / No Action Required] | [YYYY-MM-DD] |

### 5.4 Key Rotation Schedule

*Document the approved rotation schedule for all active keys. Rotation frequency must comply with [Organization Name]'s Cryptographic Key Management Policy and BNM RMiT Clause 10.21 requirements.*

| Key ID | Key Name | Rotation Frequency | Last Rotation Date | Next Scheduled Rotation | Rotation Trigger | Status |
|---|---|---|---|---|---|---|
| [KEY-ID] | [Name] | [e.g., Annual / 90-Day / Event-Triggered] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Scheduled / Compromise / Policy Change] | [On Track / Overdue / Completed] |

### 5.5 Key Destruction Certificate

*A destruction certificate must be completed for every key destruction event. Retain certificates for a minimum of [X] years per [Organization Name]'s Records Retention Policy.*

| Field | Details |
|---|---|
| **Destruction Event ID** | [EVT-ID] |
| **Key ID** | [KEY-ID] |
| **Key Name** | [Name] |
| **Destruction Date** | [YYYY-MM-DD] |
| **Destruction Method** | [e.g., HSM Zeroisation / Secure Erase / Physical Destruction of Media] |
| **Performed By** | [Name, Role] |
| **Witnessed By** | [Name, Role] |
| **Authorised By** | [Name, Role] |
| **Confirmation** | All copies of the key, including backups and escrowed copies, have been irrecoverably destroyed |
| **Signature (Performed By)** | [Signature] |
| **Signature (Witnessed By)** | [Signature] |

---

## 6. Last Review Date

*This section records all formal periodic reviews of the Key Lifecycle Records, consistent with the quarterly review frequency mandated by [Organization Name]'s key management governance framework.*

### 6.1 Quarterly Review Log

*Reviews must be conducted by the IT Operations Manager no later than the last business day of each quarter. The review must confirm completeness, accuracy, and currency of all lifecycle records.*

| Review Period | Review Date | Reviewed By (Role) | Reviewed By (Name) | Findings Summary | Actions Raised | Actions Closed By | Sign-Off |
|---|---|---|---|---|---|---|---|
| [Q1 YYYY] | [YYYY-MM-DD] | IT Operations Manager | [Name] | [e.g., No anomalies detected / 2 keys overdue for rotation — see Action IDs] | [Action IDs or "None"] | [YYYY-MM-DD] | [Signature] |
| [Q2 YYYY] | [YYYY-MM-DD] | IT Operations Manager | [Name] | [Summary] | [Action IDs or "None"] | [YYYY-MM-DD] | [Signature] |
| [Q3 YYYY] | [YYYY-MM-DD] | IT Operations Manager | [Name] | [Summary] | [Action IDs or "None"] | [YYYY-MM-DD] | [Signature] |
| [Q4 YYYY] | [YYYY-MM-DD] | IT Operations Manager | [Name] | [Summary] | [Action IDs or "None"] | [YYYY-MM-DD] | [Signature] |

### 6.2 Review Checklist

*The following items must be verified during each quarterly review.*

| # | Review Item | Status | Notes |
|---|---|---|---|
| 1 | All active keys have a designated Owner and Custodian | [Complete / Incomplete] | |
| 2 | All keys are within their approved rotation schedule | [Complete / Incomplete] | |
| 3 | No keys have exceeded their scheduled expiry without action | [Complete / Incomplete] | |
| 4 | All revocation and destruction events have destruction certificates | [Complete / Incomplete] | |
| 5 | Authorised access lists are current and reflect least-privilege | [Complete / Incomplete] | |
| 6 | Key management system audit logs have been reviewed for anomalies | [Complete / Incomplete] | |
| 7 | No unresolved findings from the previous quarterly review | [Complete / Incomplete] | |
| 8 | Records are complete and consistent with KMS/HSM system exports | [Complete / Incomplete] | |

### 6.3 Action Register (Arising from Reviews)

| Action ID | Review Period | Action Description | Assigned To | Due Date | Status | Closed Date |
|---|---|---|---|---|---|---|
| [ACT-ID] | [Q# YYYY] | [Description of required action] | [Name / Role] | [YYYY-MM-DD] | [Open / In Progress / Closed] | [YYYY-MM-DD] |

---

## 7. Roles and Responsibilities

*This section defines accountability and responsibility for key lifecycle record management using the RACI framework.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | IT Operations Manager | Systems Administrator / Key Custodian | CISO / Information Security | Internal Audit | Compliance Officer | Business System Owner |
|---|---|---|---|---|---|---|
| Define key management policy and standards | A | C | R | I | C | I |
| Generate new cryptographic keys | A | R | C | I | I | I |
| Maintain key lifecycle event log | A | R | I | I | I | I |
| Authorise key rotation | A | R | C | I | I | I |
| Authorise key revocation | A | C | R | I | I | I |
| Authorise key destruction | A | R | R | I | I | C |
| Issue destruction certificates | A | R | C | I | I | I |
| Conduct quarterly review of lifecycle records | A | R | C | I | C | I |
| Report non-compliance or anomalies to CISO | R | R | A | I | C | I |
| Present records to internal/external auditors | A | C | C | R | C | I |
| Maintain authorised access lists | A | R | C | I | I | I |
| Review and update this document annually | A | C | C | I | C | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Role | Changes |
|---|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | IT Operations Manager | Initial document creation |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Role] | [Description of changes] |

### 8.2 Approval Sign-Off

*This document requires formal approval from the following roles prior to implementation and following each annual review.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | [Signature] | [YYYY-MM-DD] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [YYYY-MM-DD] |
| Chief Information Officer (CIO) | [Name] | [Signature] | [YYYY-MM-DD] |
| Compliance Officer | [Name] | [Signature] | [YYYY-MM-DD] |
| [Additional Approver if required] | [Name] | [Signature] | [YYYY-MM-DD] |

---

## 9. References

The following regulatory instruments, standards, and internal policies inform and govern this document:

| Reference | Title | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 10.21** | Cryptographic key management lifecycle controls and audit record requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.1–10.5 | General technology risk management obligations |
| PDPA 2010 | Personal Data Protection Act 2010 | Principle 6 – Security | Protection of personal data through appropriate technical controls including encryption |
| NACSA | National Cyber Security Agency — Cybersecurity Framework | Key Management Controls | National baseline for cryptographic key management in critical information infrastructure |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A, Control 8.24 | Use of cryptography and key management |
| NIST SP 800-57 | Recommendation for Key Management | Parts 1–3 | Best practice guidance for cryptographic key lifecycle management |
| [Internal Policy] | [Organization Name] Cryptographic Key Management Policy | [Section Reference] | Internal standards governing key types, rotation schedules, and custodianship |
| [Internal Policy] | [Organization Name] Data Classification Policy | [Section Reference] | Basis for key classification levels referenced in Section 3 |
| [Internal Policy] | [Organization Name] Records Retention Policy | [Section Reference] | Retention periods applicable to key lifecycle records and destruction certificates |

---

## 10. Appendices

### Appendix A: Key Management System (KMS) Export Format

*Attach or reference the standard export format produced by [Organization Name]'s Key Management System or HSM. This defines the fields automatically captured in system-generated lifecycle event logs.*

> [Attach KMS/HSM audit log schema or field dictionary here]

---

### Appendix B: Key Naming Convention

*[Organization Name] uses the following standardised naming convention for all cryptographic keys to ensure consistent identification across systems.*

**Format:** `[ORG]-[ENV]-[PURPOSE]-[ALGORITHM]-[SEQUENCE]`

**Example:** `ORGNAME-PRD-DBENCRYPT-AES256-001`

| Component | Description | Example Values |
|---|---|---|
| ORG | Organization or business unit code | ORGNAME, BIZUNIT |
| ENV | Environment | PRD, DR, UAT, DEV |
| PURPOSE | Functional purpose | DBENCRYPT, TLS, SIGN, KEK |
| ALGORITHM | Cryptographic algorithm | AES256, RSA4096, ECDSA384 |
| SEQUENCE | Sequential number | 001, 002 |

---

### Appendix C: Glossary of Terms

| Term | Definition |
|---|---|
| **Cryptographic Key** | A piece of information used by a cryptographic algorithm to encrypt, decrypt, sign, or verify data |
| **Key Generation** | The process of creating a new cryptographic key using an approved random number generator |
| **Key Rotation** | The replacement of an existing cryptographic key with a newly generated key |
| **Key Revocation** | The permanent invalidation of a key, typically due to compromise or end of authorised use |
| **Key Destruction** | The irreversible deletion of a key and all known copies, rendering it unrecoverable |
| **Key Custodian** | The individual technically responsible for the day-to-day management of a cryptographic key |
| **Key Owner** | The individual accountable for a key's appropriate use and lifecycle decisions |
| **HSM** | Hardware Security Module — a tamper-resistant device used to manage and protect cryptographic keys |
| **KMS** | Key Management System — software or service used to centrally manage cryptographic key lifecycles |
| **KEK** | Key Encryption Key — a key used to encrypt other keys for secure storage or transmission |
| **Dual Custodianship** | A control requiring two authorised individuals to cooperate in order to access or use a key |
| **Zeroisation** | The process of erasing cryptographic keys from an HSM by overwriting with zeros |

---

### Appendix D: Incident Response — Suspected Key Compromise

*In the event of a suspected or confirmed cryptographic key compromise, the following immediate actions must be taken. Refer to [Organization Name]'s Incident Response Policy for full procedures.*

| Step | Action | Responsible | Timeframe |
|---|---|---|---|
| 1 | Detect and report suspected compromise to IT Operations Manager and CISO | Any staff member | Immediately |
| 2 | Suspend the affected key(s) pending investigation | IT Operations Manager | Within 1 hour |
| 3 | Initiate formal incident record and notify relevant stakeholders | CISO | Within 2 hours |
| 4 | Assess scope and impact of potential compromise | IT Security / IT Operations | Within 4 hours |
| 5 | Revoke compromised key(s) and activate replacement key(s) | IT Operations Manager | As determined by impact assessment |
| 6 | Notify BNM if the compromise constitutes a reportable technology incident | Compliance Officer | Per BNM RMiT reporting timelines |
| 7 | Complete post-incident review and update lifecycle records | IT Operations Manager | Within 5 business days of resolution |

---

*This document is classified **Confidential**. It must not be shared outside [Organization Name] without the written authorisation of the IT Operations Manager or CISO. Physical copies must be stored securely and disposed of via approved secure destruction methods.*

*Document ID: [Document ID] | Version: 1.0 | Last Review: [Last Review Date] | Owner: IT Operations Manager*