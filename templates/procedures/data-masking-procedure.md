# Data Masking Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]
**Framework Reference:** Bank Negara Malaysia Risk Management in Technology (RMiT) — Clause 10.9

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Data Classification and Masking Requirements](#5-data-classification-and-masking-requirements)
6. [Step-by-Step Process Flow](#6-step-by-step-process-flow)
7. [Masking Techniques and Standards](#7-masking-techniques-and-standards)
8. [Tools and Systems Used](#8-tools-and-systems-used)
9. [Roles and Responsibilities (RACI)](#9-roles-and-responsibilities-raci)
10. [Escalation Procedures](#10-escalation-procedures)
11. [Quality Assurance and Verification](#11-quality-assurance-and-verification)
12. [Exceptions and Derogations](#12-exceptions-and-derogations)
13. [Audit, Logging, and Monitoring](#13-audit-logging-and-monitoring)
14. [Review and Update History](#14-review-and-update-history)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*Describe the purpose of this procedure, why it exists, and the compliance obligation it fulfils. Reference the specific regulatory framework and clause.*

This procedure establishes the mandatory requirements and step-by-step process for masking sensitive production data prior to its use in non-production environments (including development, testing, user acceptance testing (UAT), staging, and training environments) at [Organization Name].

The proliferation of production data into non-production environments without adequate controls poses significant risk of unauthorised disclosure of customer personal data, financial records, and other sensitive information. This procedure ensures that [Organization Name] maintains consistent, repeatable, and auditable controls over such data flows, in accordance with the Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.9, which mandates that financial institutions implement appropriate controls to protect sensitive data in non-production environments.

This procedure supports [Organization Name]'s broader commitment to:

- Protecting the confidentiality, integrity, and availability of customer and institutional data.
- Complying with the Personal Data Protection Act 2010 (PDPA) obligations regarding the processing and handling of personal data.
- Meeting the expectations of BNM's RMiT framework concerning data lifecycle management and technology risk controls.
- Reducing the attack surface presented by non-production environments, which typically have lower security controls than production systems.

---

## 2. Scope and Applicability

*Define clearly what systems, data types, teams, environments, and activities this procedure applies to. Be specific enough that it can be cited in an audit.*

### 2.1 In-Scope

This procedure applies to:

**Systems and Environments:**

- All non-production environments maintained by or on behalf of [Organization Name], including but not limited to:
  - Development (DEV)
  - System Integration Testing (SIT)
  - User Acceptance Testing (UAT)
  - Performance / Load Testing
  - Staging / Pre-Production
  - Training and Demonstration environments

**Data Types:**

- All data extracted, copied, replicated, or derived from production databases, data warehouses, or live application systems where the data contains, or may contain, any of the following:
  - Customer personally identifiable information (PII) as defined under PDPA 2010
  - Payment card data (PAN, CVV, expiry dates)
  - Bank account numbers and transaction records
  - National Registration Identity Card (NRIC) numbers and passport numbers
  - Authentication credentials and biometric data
  - Salary, income, and financial position data
  - Any data classified as **Confidential** or **Restricted** under [Organization Name]'s Data Classification Policy

**Personnel:**

- All employees, contractors, vendors, and third-party service providers who request, provision, access, or process production-derived data in non-production environments.

**Applications and Pipelines:**

- All data pipelines, ETL (Extract, Transform, Load) processes, database refresh procedures, and data provisioning workflows that source data from production.

### 2.2 Out-of-Scope

The following are explicitly excluded from this procedure:

- Synthetic data that was generated entirely without reference to production records.
- Anonymised datasets that have been formally assessed and certified as non-re-identifiable by [Organization Name]'s Data Privacy Officer (DPO) or equivalent.
- Production data accessed in production environments under existing production access controls.
- Disaster Recovery (DR) and Business Continuity Planning (BCP) environments where an equivalent or higher security control baseline is applied and formally documented.

### 2.3 Applicability Matrix

| Environment Type | Masking Required | Authority to Waive |
|---|---|---|
| Development (DEV) | Yes | [Head of IT / CISO] |
| System Integration Testing (SIT) | Yes | [Head of IT / CISO] |
| User Acceptance Testing (UAT) | Yes | [Head of IT / CISO] |
| Performance / Load Testing | Yes | [Head of IT / CISO] |
| Staging / Pre-Production | Yes | [Head of IT / CISO] |
| Training / Demo | Yes | [Head of IT / CISO] |
| DR / BCP (equivalent controls) | No (with documented justification) | [CISO + Head of Risk] |
| Vendor sandbox (hosted externally) | Yes — prior to data transfer | [CISO + DPO] |

---

## 3. Regulatory and Policy Context

*List all regulatory frameworks, internal policies, and standards this procedure is designed to comply with. Provide enough detail for an auditor to trace the linkage.*

### 3.1 Regulatory Requirements

| Regulation / Policy | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | 10.9 | Financial institutions shall ensure that production data used for testing or development purposes is appropriately masked or anonymised to prevent unauthorised disclosure. |
| Personal Data Protection Act 2010 (PDPA) | Section 5 — General Principle | Personal data shall not be processed unless specific conditions are met; copying unmasked data to non-production breaches the purpose limitation principle. |
| PDPA 2010 | Section 9 — Security Principle | Data processors must take practical steps to protect personal data from any loss, misuse, modification, unauthorised or accidental access, disclosure, alteration, or destruction. |
| BNM RMiT | 10.1 – 10.4 | General technology risk management obligations including data governance and lifecycle management. |
| BNM RMiT | 11 (Cyber Risk Management) | Controls to limit the impact of potential data breaches through access control and data minimisation. |
| NACSA Cybersecurity Framework | Data Protection Controls | Sensitive data in non-production environments must be protected commensurate with its classification. |

### 3.2 Internal Policy References

| Document | Document ID | Relevance |
|---|---|---|
| Data Classification Policy | [POL-DC-001] | Defines classification tiers and handling requirements |
| Information Security Policy | [POL-IS-001] | Overarching security requirements |
| Access Control Policy | [POL-AC-001] | Controls governing non-production environment access |
| Change Management Policy | [POL-CM-001] | Governs requests for production data refresh |
| Data Governance Policy | [POL-DG-001] | Ownership and stewardship of data assets |
| Vendor Management Policy | [POL-VM-001] | Requirements when vendors need non-production data |
| Incident Response Procedure | [PROC-IR-001] | Escalation path if unmasked data is discovered |

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation.*

| Term / Abbreviation | Definition |
|---|---|
| **Data Masking** | The process of creating a structurally similar but inauthentic version of data that can be used for testing, development, or training, such that the masked values cannot be used to identify or reconstruct the original data subject. |
| **Static Data Masking (SDM)** | A masking approach where a copy of the database is created and then masked in place; the original production database is not altered. |
| **Dynamic Data Masking (DDM)** | A masking approach where data is masked on-the-fly at the query layer, presenting masked values to certain users without altering the stored data. |
| **Anonymisation** | An irreversible process of transforming data so that individuals cannot be identified, directly or indirectly, even by the data controller. |
| **Pseudonymisation** | Replacing direct identifiers with artificial identifiers (pseudonyms), such that re-identification is possible with additional information held separately. |
| **PII** | Personally Identifiable Information — any information that can be used to identify a natural person, as defined under PDPA 2010. |
| **Production Environment** | The live operational environment that processes real customer transactions and data. |
| **Non-Production Environment** | Any environment that is not the live production environment, including DEV, SIT, UAT, staging, performance, and training environments. |
| **Data Refresh** | The process of copying or synchronising data from a production environment to a non-production environment. |
| **NRIC** | National Registration Identity Card — a primary identifier for Malaysian citizens and permanent residents. |
| **ETL** | Extract, Transform, Load — a data integration process. |
| **DPO** | Data Protection Officer — the designated officer responsible for PDPA compliance. |
| **CISO** | Chief Information Security Officer. |
| **UAT** | User Acceptance Testing. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| **RMiT** | Risk Management in Technology — BNM Policy Document. |
| **BNM** | Bank Negara Malaysia. |
| **PDPA** | Personal Data Protection Act 2010. |
| **NACSA** | National Cyber Security Agency (Malaysia). |
| **SIT** | System Integration Testing. |

---

## 5. Data Classification and Masking Requirements

*Define which data fields require masking, the classification tier of each, and the minimum masking standard to be applied. This section should be tailored to reflect the actual data assets of the organisation.*

### 5.1 Data Field Inventory and Masking Matrix

*Complete the table below for all sensitive data fields present in systems within scope. Add rows as required to reflect the organisation's actual data assets. The Masking Technique column should reference Section 7.*

| Data Category | Field Name | Classification | Masking Required | Minimum Masking Technique | Retention in Non-Prod |
|---|---|---|---|---|---|
| Customer Identity | Full Name | Confidential | Yes | Pseudonymisation / Random substitution | 90 days max |
| Customer Identity | NRIC Number | Confidential | Yes | Format-preserving encryption or truncation (show last 4 digits only) | 90 days max |
| Customer Identity | Passport Number | Confidential | Yes | Redaction / Random substitution | 90 days max |
| Customer Identity | Date of Birth | Confidential | Yes | Date shifting (±30 days) | 90 days max |
| Customer Identity | Home Address | Confidential | Yes | Pseudonymisation / Region-only retention | 90 days max |
| Customer Identity | Email Address | Confidential | Yes | Format-preserving substitution (e.g., [randomstring]@[domain.test]) | 90 days max |
| Customer Identity | Mobile Number | Confidential | Yes | Format-preserving random substitution | 90 days max |
| Financial Data | Bank Account Number | Confidential | Yes | Format-preserving encryption | 90 days max |
| Financial Data | Payment Card Number (PAN) | Restricted | Yes | Tokenisation or truncation (first 6 / last 4 visible) | 30 days max |
| Financial Data | Card CVV / CVC | Restricted | Yes | Full redaction (replace with static placeholder) | Not retained |
| Financial Data | Card Expiry Date | Restricted | Yes | Date shifting or full redaction | 30 days max |
| Financial Data | Account Balance | Confidential | Yes | Value scaling (multiply by random factor within range) | 90 days max |
| Financial Data | Transaction Amount | Confidential | Yes | Value scaling | 90 days max |
| Financial Data | Transaction Reference | Internal | Conditional | Masking required only if directly linked to customer PII | 90 days max |
| Authentication | Password Hash | Restricted | Yes | Full replacement with known test hash | Not retained |
| Authentication | Biometric Data | Restricted | Yes | Full redaction / synthetic replacement | Not retained |
| Authentication | Security Questions / Answers | Confidential | Yes | Full redaction | Not retained |
| Employee Data | Employee ID | Internal | Conditional | Pseudonymisation if linked to personal data | 90 days max |
| Employee Data | Salary / Remuneration | Confidential | Yes | Value scaling | 90 days max |

### 5.2 Data Minimisation Principle

Before any data masking activity is initiated, the requesting team **must** evaluate whether the full dataset is necessary. The following principles apply:

- **Data minimisation first:** Use only the minimum number of records and fields required to achieve the testing or development objective.
- **Synthetic data preferred:** Where synthetic data can adequately meet the requirement, it shall be used in preference to masked production data.
- **Subset selection:** Extract the minimum representative subset of production data required, rather than a full table or database copy.

---

## 6. Step-by-Step Process Flow

*This section documents the end-to-end procedure that must be followed each time production data is required in a non-production environment. Every step should be auditable.*

### 6.1 Process Overview

The data masking lifecycle consists of six phases:

```
[1] Request & Approval → [2] Data Scoping → [3] Extraction → [4] Masking Execution → [5] Verification → [6] Provisioning & Controlled Access
```

### 6.2 Phase 1: Request and Approval

*Document all actions, approvers, and artifacts required before any data extraction begins.*

**Step 1.1 — Submit Data Request**

The requesting team (e.g., Development, QA, or Testing team) submits a **Non-Production Data Request Form** (Appendix A) via [Organisation's ITSM / Ticketing System, e.g., ServiceNow / Jira]. The form must capture:

- Business justification for requiring production-derived data (rather than synthetic data)
- Target non-production environment
- List of required data tables and fields
- Estimated volume of records required
- Proposed retention period in the non-production environment
- Confirmation that synthetic data was considered and rejected with documented rationale

**Step 1.2 — Data Owner Review**

The relevant **Data Owner** (as designated in the Data Governance Policy) reviews the request within **[X] business days** and confirms:

- The requested data fields are necessary for the stated purpose (data minimisation check)
- The requesting team has a legitimate need for the data

**Step 1.3 — Information Security Review**

The **Information Security team** reviews the request to confirm:

- The target non-production environment has appropriate security controls (access control, encryption at rest, network segmentation)
- The proposed masking technique is adequate for the sensitivity of the data requested
- There are no open vulnerabilities or compliance issues with the target environment

**Step 1.4 — DPO Review (if personal data is involved)**

Where the request involves personal data as defined under PDPA 2010, the **Data Protection Officer (DPO)** must review and approve the request, confirming that the masking approach is sufficient to meet PDPA obligations.

**Step 1.5 — Approval Decision**

| Scenario | Required Approver(s) |
|---|---|
| Internal use, standard sensitivity data | Data Owner + Information Security Lead |
| Personal data (PII) | Data Owner + DPO + Information Security Lead |
| Restricted data (payment card, biometric, credentials) | Data Owner + DPO + CISO |
| Third-party / vendor non-production environment | Data Owner + DPO + CISO + Vendor Manager |

All approvals must be recorded in the ticketing system before proceeding to Phase 2. Verbal approvals are not accepted.

---

### 6.3 Phase 2: Data Scoping

**Step 2.1 — Identify Source Tables and Fields**

The **Data Engineer / DBA** works with the requesting team to produce a **Data Scoping Document** that lists:

- Source system and database schema
- Specific tables and columns to be extracted
- Estimated row counts
- Foreign key dependencies and referential integrity requirements

**Step 2.2 — Classify All Fields**

Each field in the extraction scope is classified against the Data Field Masking Matrix (Section 5.1). Any field not already in the matrix must be assessed and a classification assigned before proceeding.

**Step 2.3 — Select Masking Techniques**

For each sensitive field identified, the appropriate masking technique is selected from Section 7 and documented in the Data Scoping Document.

**Step 2.4 — Scoping Document Sign-Off**

The completed Data Scoping Document is reviewed and signed off by the **Information Security Lead** and the **Data Owner** before extraction commences.

---

### 6.4 Phase 3: Data Extraction

**Step 3.1 — Extraction Environment**

Data extraction from production must be performed using a **dedicated, isolated masking environment** (also referred to as a masking proxy or staging area). Extracted data must **never** be written directly to the target non-production environment without first being masked.

**Step 3.2 — Extract Data to Masking Staging Area**

The DBA or Data Engineer executes the approved extraction script or ETL pipeline to copy the scoped dataset from production to the masking staging area.

- All extraction activities must be logged with timestamp, operator identity, source system, and row counts.
- Extraction must occur during [defined maintenance window / low-traffic period] to minimise production impact, unless a real-time masking tool is in use.
- The masking staging area must be accessible only to authorised personnel participating in the masking process.

**Step 3.3 — Confirm Extraction Integrity**

Row counts and checksums from the extraction are recorded and cross-referenced against the approved scope in the Data Scoping Document. Any discrepancy must be investigated and resolved before proceeding.

---

### 6.5 Phase 4: Masking Execution

**Step 4.1 — Configure Masking Rules**

The Data Engineer or Security Engineer configures the masking tool (see Section 8) with the masking rules defined in the approved Data Scoping Document.

**Step 4.2 — Execute Masking**

The masking process is executed against the extracted dataset in the masking staging area.

- Masking must be applied to **all** sensitive fields identified in the scoping exercise.
- The process must preserve referential integrity across related tables (e.g., a masked customer ID in a customer table must match the same masked value in the transactions table).
- Masking transformation logs must be generated and retained for audit purposes.

**Step 4.3 — Record Masking Execution Log**

Upon completion, a **Masking Execution Log** is generated (see Appendix B) capturing:

- Date and time of masking run
- Operator/system identity
- Masking tool and version used
- Tables and fields processed
- Masking technique applied to each field
- Row counts before and after masking
- Any errors or exceptions encountered

---

### 6.6 Phase 5: Verification and Quality Assurance

**Step 5.1 — Technical Verification**

The **Information Security team** performs a technical verification of the masked dataset to confirm:

- No unmasked sensitive values remain (spot-check minimum [X]% of records per sensitive field)
- Referential integrity has been preserved
- Data formats remain valid for application use (e.g., NRIC format still passes validation checks)
- No original production values are discoverable in the masked output, including in metadata, indexes, or audit tables within the masked copy

**Step 5.2 — Functional Verification**

The **Requesting Team** performs a functional check to confirm:

- The masked dataset is fit for the intended testing or development purpose
- Application behaviour with the masked data is as expected

**Step 5.3 — Verification Sign-Off**

Both the Information Security team and the Requesting Team must record their verification outcomes in the ticketing system. If verification fails:

- The failed dataset must be deleted from the masking staging area.
- The masking configuration must be reviewed and corrected.
- Phases 4 and 5 must be repeated.

---

### 6.7 Phase 6: Provisioning and Controlled Access

**Step 6.1 — Transfer to Target Non-Production Environment**

Following successful verification, the masked dataset is transferred to the approved target non-production environment.

**Step 6.2 — Access Controls Applied**

The **Environment Owner** ensures that access to the non-production environment is restricted to authorised team members only, consistent with the principle of least privilege.

**Step 6.3 — Retention Period Enforced**

The masked dataset must be deleted from the non-production environment upon the earlier of:

- Completion of the testing or development activity
- Expiry of the approved retention period (as documented in Section 5.1 and the approved request)

Automated deletion controls should be configured where technically feasible. Where automated deletion is not possible, a manual deletion task must be scheduled and tracked.

**Step 6.4 — Closure of Request**

The original ITSM ticket is updated to record:

- Date of provisioning
- Scheduled deletion date
- Personnel responsible for deletion
- Confirmation of final deletion (to be updated upon completion)

---

## 7. Masking Techniques and Standards

*Define the specific masking techniques in use, their applicability, and any constraints. This section provides the technical foundation referenced in the Data Field Masking Matrix.*

### 7.1 Approved Masking Techniques

| Technique | Description | Applicable Data Types | Preserves Format | Reversible |
|---|---|---|---|---|
| **Substitution** | Replaces original value with a randomly selected value from a predefined lookup table of fictitious but realistic values. | Names, addresses, email addresses | Yes | No |
| **Shuffling** | Randomly redistributes values within a column across rows, so real values appear but are no longer associated with the correct individual. | Names, contact details | Yes | No |
| **Format-Preserving Encryption (FPE)** | Encrypts data while preserving the format and length of the original value (e.g., a 16-digit card number remains 16 digits). | PAN, account numbers, NRIC | Yes | Yes (with key) |
| **Tokenisation** | Replaces sensitive data with a non-sensitive token; the original value is stored in a secure token vault. | PAN, account numbers | Yes | Yes (with vault access) |
| **Redaction** | Replaces the original value with a null, blank, or fixed placeholder (e.g., "REDACTED"). | CVV, passwords, biometric data | No | No |
| **Truncation** | Retains only a defined portion of the original value (e.g., showing only the last 4 digits of a card number). | PAN, account numbers | Partial | No |
| **Date Shifting** | Shifts date values by a consistent random offset within a defined range, preserving relative date relationships. | Date of birth, transaction dates | Yes | No |
| **Value Scaling / Variance** | Multiplies numeric values by a random factor within a defined range, preserving the distribution shape while obscuring exact amounts. | Account balances, transaction amounts | Yes | No |
| **Pseudonymisation** | Replaces identifying fields with artificial identifiers; the mapping is retained in a secure key table. | Customer IDs, names, identifiers | Configurable | Yes (with key table) |
| **Nulling Out** | Sets the field value to NULL in the database. | Obsolete or non-required fields | N/A | No |
| **Synthetic Data Generation** | Generates entirely new, algorithmically created data that mimics the statistical properties of the original. | Any | Yes | No |

### 7.2 Technique Selection Guidance

- **Restricted data** (payment cards, biometrics, credentials): Tokenisation, FPE, or full redaction only.
- **PII (names, contact details, NRIC)**: Substitution, shuffling, or pseudonymisation.
- **Financial values**: Value scaling with sufficient variance to prevent reverse-engineering.
- **Dates**: Date shifting must be applied consistently across all related tables to preserve chronological logic.
- **Foreign keys and reference fields**: Masking must be consistent — the same source value must always produce the same masked output within a single masking run (deterministic masking).

### 7.3 Prohibited Practices

The following practices are **expressly prohibited**:

- Using encryption alone as a masking technique (encrypted data in a non-production environment is still sensitive data).
- Storing the encryption or pseudonymisation key in the same environment as the masked data.
- Manually masking data using ad-hoc scripts without review and approval by the Information Security team.
- Using production datasets in vendor or third-party environments without confirmed masking.
- Reusing a masked dataset in a second non-production environment without re-approval.

---

## 8. Tools and Systems Used

*Document the specific tooling approved for use in data masking activities. Ensure tool versions are tracked as part of the change and review process.*

### 8.1 Approved Masking Tools

*Complete this table with the tools actually licensed and deployed by the organisation. Remove or add rows as appropriate.*

| Tool Name | Version | Vendor | Purpose | Environment | Licence Status |
|---|---|---|---|---|---|
| [Tool Name, e.g., Informatica Data Masking] | [Version] | [Vendor] | Static data masking for database refresh | Masking Staging Area | [Licensed / Open Source] |
| [Tool Name, e.g., IBM Optim Data Privacy] | [Version] | [Vendor] | Format-preserving encryption for PAN and account numbers | Masking Staging Area | [Licensed] |
| [Tool Name, e.g., Delphix] | [Version] | [Vendor] | Data virtualisation and masking | [Environment] | [Licensed] |
| [In-house masking scripts] | [Version] | Internal | Field-level substitution for specific legacy systems | Masking Staging Area | Internal |
| [Tokenisation vault, e.g., HashiCorp Vault] | [Version] | HashiCorp | Token management for PAN tokenisation | Production-adjacent secure vault | [Licensed] |

### 8.2 Tool Access and Administration

- Access to masking tools is restricted to authorised personnel only, as maintained in the **Masking Tool Access Register** (Appendix C).
- Tool configurations (masking rules, job definitions) are version-controlled in [Version Control System, e.g., GitLab] under the repository [repository path/name].
- Changes to masking tool configurations must follow the **Change Management Policy** ([POL-CM-001]) and require review by the Information Security team.

### 8.3 Masking Staging Environment

| Attribute | Details |
|---|---|
| Environment Name | [Masking Staging Environment Name] |
| Hosting | [On-premises / Private Cloud / Managed Service] |
| Access Control | [Describe: VPN-only, MFA required, privileged access management tool] |
| Encryption at Rest | [Yes / No — specify standard, e.g., AES-256] |
| Encryption in Transit | [Yes / No — specify standard, e.g., TLS 1.3] |
| Network Segmentation | [Describe: isolated VLAN, no internet egress] |
| Log Retention | [X months] |
| Owner | [Team / Individual] |

### 8.4 Connectivity and Data Flow Diagram

*Insert or reference a data flow diagram showing how data moves from the production environment through the masking staging area to each non-production environment. Diagrams should be maintained in [Document Repository / SharePoint / Confluence] and linked here.*

**Reference:** [Link to Data Flow Diagram — Document Repository]

---

## 9. Roles and Responsibilities (RACI)

*The RACI matrix defines who is Responsible (R), Accountable (A), Consulted (C), and Informed (I) for each key activity in this procedure.*

### 9.1 Role Definitions

| Role | Description |
|---|---|
| **Data Owner** | Senior business or IT manager responsible for a specific data asset; typically the Head of the business unit that owns the data. |
| **Data Protection Officer (DPO)** | Designated officer responsible for PDPA compliance and data privacy governance. |
| **Chief Information Security Officer (CISO)** | Executive responsible for information security strategy, risk, and compliance. |
| **Information Security Lead** | Operational security team member responsible for reviewing and overseeing masking activities. |
| **Data Engineer / DBA** | Technical specialist responsible for executing data extraction and masking tasks. |
| **Environment Owner** | Team or individual responsible for managing the target non-production environment. |
| **Requesting Team Lead** | Supervisor of the team requesting access to masked production data. |
| **Internal Audit** | Function responsible for independent review and assurance of control compliance. |
| **Vendor Manager** | Person responsible for managing third-party relationships where vendors require non-production data. |

### 9.2 RACI Matrix

| Activity | Data Owner | DPO | CISO | IS Lead | Data Engineer / DBA | Environment Owner | Requesting Team Lead | Internal Audit | Vendor Manager |
|---|---|---|---|---|---|---|---|---|---|
| Submit non-production data request | C | C | I | C | I | I | R/A | I | C |
| Review data minimisation and purpose | A | C | I | C | I | I | R | I | I |
| Review request for personal data (PDPA) | C | A | C | C | I | I | R | I | C |
| Approve restricted data request | C | A | A | A | I | I | R | I | I |
| Define data scoping and field classification | A | C | I | R | R | I | C | I | I |
| Select masking techniques | A | C | C | A | R | I | C | I | I |
| Execute data extraction | A | I | I | C | R | I | I | I | I |
| Execute data masking | A | I | I | C | R | I | I | I | I |
| Technical verification of masked data | C | C | A | R | C | I | I | I | I |
| Functional verification of masked data | I | I | I | C | I | A | R | I | I |
| Provision masked data to non-prod environment | A | I | I | C | R | R | I | I | I |
| Apply and enforce access controls | A | I | I | C | I | R | I | I | I |
| Monitor data retention and enforce deletion | A | C | I | C | I | R | C | I | I |
| Manage masking tool configuration changes | A | I | C | R | R | I | I | I | I |
| Review and update this procedure (annual) | A | C | C | R | C | I | I | C | I |
| Third-party / vendor masking assurance | C | A | A | C | I | I | I | I | R |
| Incident escalation (unmasked data found) | A | C | A | R | C | C | C | I | C |
| Annual audit and compliance review | C | C | C | C | C | C | C | R/A | I |

---

## 10. Escalation Procedures

*Define when and how to escalate issues arising during or after data masking activities, including discovery of unmasked data, tool failures, and process non-compliance.*

### 10.1 Escalation Trigger Events

The following events must trigger immediate escalation:

| Trigger Event | Severity | Immediate Action | Escalation Path |
|---|---|---|---|
| Unmasked production data discovered in any non-production environment | **Critical** | Isolate the environment immediately; restrict all access | IS Lead → CISO → DPO → [CEO / Board Risk Committee] within 1 hour |
| Unmasked data suspected to have been accessed by unauthorised parties | **Critical** | Invoke Incident Response Procedure [PROC-IR-001] | IS Lead → CISO → DPO → Legal → BNM (if reportable breach) |
| Masking tool failure during an active masking run | **High** | Halt extraction; quarantine staging area | Data Engineer → IS Lead → Data Owner within 2 hours |
| Verification failure (sensitive values found post-masking) | **High** | Delete masked dataset; do not provision | Data Engineer → IS Lead within 2 hours; re-run required |
| Unapproved use of production data in non-production (process bypass) | **High** | Suspend access of involved parties; preserve evidence | IS Lead → CISO → HR (if employee involved); Internal Audit notification within 24 hours |
| Third-party vendor found with unmasked data | **Critical** | Invoke vendor incident clause; demand confirmation of data destruction | Vendor Manager → CISO → DPO → Legal within 1 hour |
| Approved retention period exceeded without deletion | **Medium** | Immediate deletion or isolation; document root cause | Environment Owner → IS Lead within 24 hours |
| New sensitive field discovered not covered by masking rules | **Medium** | Halt masking job; assess; update masking rules | Data Engineer → IS Lead → Data Owner within 1 business day |

### 10.2 Escalation Contact List

*Maintain this list and review at each annual procedure review. Ensure out-of-hours contacts are included.*

| Role | Name | Primary Contact | Out-of-Hours Contact |
|---|---|---|---|
| Information Security Lead | [Name] | [Email] / [Phone] | [Mobile] |
| Chief Information Security Officer (CISO) | [Name] | [Email] / [Phone] | [Mobile] |
| Data Protection Officer (DPO) | [Name] | [Email] / [Phone] | [Mobile] |
| Head of IT / Technology | [Name] | [Email] / [Phone] | [Mobile] |
| Legal Counsel | [Name] | [Email] / [Phone] | [Mobile] |
| Head of Risk | [Name] | [Email] / [Phone] | [Mobile] |

### 10.3 Regulatory Reporting Obligations

Where an escalation involves a potential personal data breach reportable under PDPA 2010 or a technology incident reportable under RMiT, the DPO and CISO must jointly assess the reporting obligation:

- **PDPA 2010:** Notify affected data subjects and the Personal Data Protection Commissioner as required.
- **BNM RMiT:** Report to BNM in accordance with the incident reporting requirements specified in the RMiT Policy Document and any applicable BNM circulars, within the prescribed timeframe.

All regulatory notifications must be coordinated through Legal Counsel and approved by the CEO or a designated senior executive before submission.

### 10.4 Post-Incident Review

Following resolution of any Critical or High severity escalation event, a **Post-Incident Review (PIR)** must be conducted within **[X] business days**. The PIR report must:

- Identify root cause(s)
- Document impact assessment
- Define corrective actions with owners and target dates
- Be reviewed by CISO and Data Owner
- Be retained for a minimum of **[3 / 5] years** (align with organisation's records retention schedule)

---

## 11. Quality Assurance and Verification

*Define the specific checks and acceptance criteria that must be satisfied before masked data is provisioned to a non-production environment.*

### 11.1 Pre-Masking Checklist

Before executing any masking job, the Data Engineer must confirm all of the following:

- [ ] Approved non-production data request ticket is in place and all approvals recorded
- [ ] Data Scoping Document is complete and signed off
- [ ] Masking staging environment is isolated and access-controlled
- [ ] Masking tool is configured with the approved rules for this job
- [ ] Backup of masking tool configuration has been taken
- [ ] Extraction scope matches the approved scoping document (row count validation)
- [ ] Masking staging area has been cleared of any previous extraction data

### 11.2 Post-Masking Verification Checklist

| Verification Step | Method | Acceptance Criterion | Performed By |
|---|---|---|---|
| No unmasked PII remains | Random sample check — minimum [X]% of rows per sensitive field | Zero unmasked records found | IS Lead |
| No unmasked payment card data remains | Automated regex scan for PAN patterns | Zero matches | IS Lead |
| No unmasked NRIC numbers remain | Automated pattern scan | Zero matches | IS Lead |
| Referential integrity preserved | Cross-table join verification | No orphaned records; consistent masked keys | Data Engineer |
| Data format validity | Application-layer validation test | Application accepts masked data without format errors | Requesting Team Lead |
| Row count consistency | Compare pre- and post-masking counts | Row counts match (within documented tolerance for any deliberate data subsetting) | Data Engineer |
| No production metadata retained | Review database properties, comments, logs within masked copy | No production server names, connection strings, or identifiers present | IS Lead |

### 11.3 Verification Outcome Recording

Results of all verification steps must be recorded in the **Masking Verification Report** (Appendix D) and attached to the ITSM request ticket before provisioning is authorised.

---

## 12. Exceptions and Derogations

*Define the process for requesting and approving exceptions to this procedure, and document any standing exceptions.*

### 12.1 Exception Process

Where strict compliance with this procedure is not feasible, the requesting team must submit an **Exception Request Form** (Appendix E) that includes:

- Description of the specific requirement that cannot be met
- Business justification
- Assessment of the additional risk introduced by the exception
- Proposed compensating controls
- Requested duration of exception (maximum [6 / 12] months)

Exception requests must be approved by the **CISO** and **DPO** jointly. All approved exceptions are logged in the **Exception Register** (Appendix F) and are subject to review at each annual procedure review.

### 12.2 Standing Exceptions

*Document any standing exceptions that have been formally approved at the time of publication. If none, state "None at this time."*

| Exception ID | Description | Compensating Controls | Approved By | Expiry Date |
|---|---|---|---|---|
| [EXC-DM-001] | [Description of exception] | [Compensating controls] | [Approver] | [Date] |

### 12.3 Emergency Access

In genuine production incidents where live data access in a non-production environment cannot be avoided (e.g., critical defect reproduction), emergency access may be granted by the CISO with simultaneous notification to the DPO. All emergency accesses must be:

- Time-limited (maximum [4 / 8] hours)
- Fully logged and monitored
- Subject to a post-incident review within [X] business days
- Recorded in the Exception Register

---

## 13. Audit, Logging, and Monitoring

*Define the audit trail requirements to demonstrate compliance with this procedure to internal and external auditors and regulators.*

### 13.1 Mandatory Log Events

The following events must be logged with sufficient detail to reconstruct the complete masking lifecycle for any given data request:

| Event | Log Location | Minimum Data Points | Retention Period |
|---|---|---|---|
| Non-production data request submitted | ITSM system | Requestor, date, scope, justification | [3 / 5] years |
| Approval granted / denied | ITSM system | Approver, date, decision | [3 / 5] years |
| Data extraction from production | Database activity monitoring tool / ETL log | Operator, timestamp, source tables, row counts | [3 / 5] years |
| Masking job executed | Masking tool log | Operator/service account, timestamp, job ID, tables, techniques, row counts, errors | [3 / 5] years |
| Verification completed | Masking Verification Report (ITSM attachment) | Verifier, date, outcome, evidence | [3 / 5] years |
| Masked data provisioned to non-prod environment | Environment access log | Operator, timestamp, target environment | [3 / 5] years |
| Masked data deleted | Deletion confirmation record (ITSM) | Operator, timestamp, confirmation method | [3 / 5] years |
| Exception request submitted and approved | Exception Register | Requestor, approvers, compensating controls, expiry | [3 / 5] years |
| Escalation triggered | Incident log | Trigger event, severity, persons notified, actions taken | [5 / 7] years |

### 13.2 Periodic Monitoring

| Activity | Frequency | Performed By | Reported To |
|---|---|---|---|
| Review of open non-production data requests and retention expiry dates | Monthly | IS Lead | Data Owner |
| Spot audit of non-production environments for unmasked data | Quarterly | Information Security team | CISO |
| Review of masking tool access register | Quarterly | IS Lead | CISO |
| Full compliance review of this procedure | Annually | IS Lead + DPO | CISO + Board Risk Committee |
| Independent audit of data masking controls | Annually (or as directed) | Internal Audit | Audit Committee |

---

## 14. Review and Update History

*Maintain a complete history of all versions of this document.*

### 14.1 Version History

| Version | Date | Author | Description of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version | [Approver Name] |
| | | | | |
| | | | | |

### 14.2 Scheduled Reviews

This procedure must be reviewed:

- **Annually**, no later than [anniversary of effective date], or
- **Upon any significant change** to the technology environment, regulatory requirements, or organisational structure, whichever is earlier.

"Significant change" includes, but is not limited to:

- Introduction of new production systems containing personal or sensitive data
- Changes to non-production environment hosting arrangements (e.g., migration to cloud)
- Changes to BNM RMiT or PDPA regulatory requirements
- Material changes to the organisation's data classification policy
- Discovery of a significant data masking incident or near-miss

---

## 15. Review and Approval

### 15.1 Approval Sign-Off

This procedure has been reviewed and approved by the following authorised signatories:

| Role | Name | Signature | Date |
|---|---|---|---|
| Owner — [Relevant Department Head] | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Data Protection Officer | [Name] | | [Date] |
| Head of Risk | [Name] | | [Date] |
| Chief Technology Officer / Head of IT | [Name] | | [Date] |

### 15.2 Distribution List

This document is classified **Confidential** and is distributed to the following roles. Recipients are responsible for ensuring the document is not shared beyond this list without CISO approval.

| Role / Team | Name | Distribution Method |
|---|---|---|
| Information Security Team | [Team Lead Name] | [SharePoint / Secure Document Repository] |
| Data Protection Officer | [Name] | [SharePoint / Secure Document Repository] |
| All Data Engineers / DBAs | [Team Lead Name] | [SharePoint / Secure Document Repository] |
| All Environment Owners | [List] | [SharePoint / Secure Document Repository] |
| Internal Audit | [Name] | [SharePoint / Secure Document Repository] |
| Vendor Manager | [Name] | [SharePoint / Secure Document Repository] |

---

## 16. References

*List all regulatory, legislative, and internal documents referenced in this procedure.*

### 16.1 Regulatory and Legislative References

| Reference | Issuing Authority | Clause / Section | URL / Source |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.9 — Data Protection in Non-Production Environments | [BNM Website] |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clauses 10.1 – 10.4 — Data Governance and Lifecycle | [BNM Website] |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 11 — Cyber Risk Management | [BNM Website] |
| Personal Data Protection Act 2010 | Government of Malaysia | Section 5 — General Principle; Section 9 — Security Principle | [Attorney General's Chambers] |
| NACSA Cybersecurity Framework | National Cyber Security Agency (Malaysia) | Data Protection Controls | [NACSA Website] |
| Payment Card Industry Data Security Standard (PCI DSS) | PCI Security Standards Council | Requirement 6.3.3 — Test Data | [PCI SSC Website] |

### 16.2 Internal Document References

| Document Title | Document ID | Version |
|---|---|---|
| Data Classification Policy | [POL-DC-001] | [Version] |
| Information Security Policy | [POL-IS-001] | [Version] |
| Access Control Policy | [POL-AC-001] | [Version] |
| Change Management Policy | [POL-CM-001] | [Version] |
| Data Governance Policy | [POL-DG-001] | [Version] |
| Vendor Management Policy | [POL-VM-001] | [Version] |
| Incident Response Procedure | [PROC-IR-001] | [Version] |
| Data Retention and Disposal Policy | [POL-DR-001] | [Version] |
| Technology Risk Management Framework | [FRMK-TRM-001] | [Version] |

---

## 17. Appendices

### Appendix A: Non-Production Data Request Form

*This form must be completed and submitted via [ITSM system] for all requests to use production-derived data in non-production environments.*

| Field | Response |
|---|---|
| **Request ID** | [Auto-generated by ITSM] |
| **Requestor Name** | |
| **Requestor Department / Team** | |
| **Requestor Manager** | |
| **Date of Request** | |
| **Target Non-Production Environment** | |
| **Business Justification** | |
| **Has synthetic data been considered?** | Yes / No |
| **If No, reason synthetic data is not suitable** | |
| **Source System(s)** | |
| **Requested Data Tables and Fields** | *(Attach Data Scoping Document if available)* |
| **Estimated Number of Records Required** | |
| **Proposed Retention Period** | |
| **Will data be shared with third parties / vendors?** | Yes / No |
| **If Yes, name of vendor and hosting environment** | |
| **Requestor Declaration** | *I confirm that the above information is accurate, that this request is for a legitimate business purpose, and that I will ensure the data is used and deleted in accordance with the Data Masking Procedure [PROC-DM-001].* |
| **Requestor Signature** | |
| **Date** | |

---

### Appendix B: Masking Execution Log Template

*To be completed by the Data Engineer upon completion of each masking job and attached to the ITSM request ticket.*

| Field | Details |
|---|---|
| **Request Ticket ID** | |
| **Masking Job ID / Reference** | |
| **Date and Time of Execution** | |
| **Executed By (Name / Service Account)** | |
| **Masking Tool and Version** | |
| **Source System** | |
| **Target: Masking Staging Area** | |

**Masking Job Summary:**

| Table Name | Field Name | Masking Technique Applied | Pre-Masking Row Count | Post-Masking Row Count | Errors / Notes |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |

**Exceptions / Issues Encountered:**

[Describe any errors, anomalies, or fields skipped and the rationale]

**Executed By Signature:** _______________________ **Date:** _______________

---

### Appendix C: Masking Tool Access Register

*Maintained by the Information Security Lead. Reviewed quarterly.*

| Name | Role | Tool(s) Access | Access Level | Date Granted | Approved By | Date of Last Review | Notes |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
| | | | | | | | |

---

### Appendix D: Masking Verification Report Template

*To be completed by the Information Security Lead and Requesting Team Lead and attached to the ITSM request ticket.*

| Field | Details |
|---|---|
| **Request Ticket ID** | |
| **Masking Job ID** | |
| **Verification Date** | |
| **Verified By (IS Lead)** | |
| **Verified By (Requesting Team)** | |

**Technical Verification Results:**

| Verification Check | Method Used | Outcome (Pass / Fail) | Evidence / Notes |
|---|---|---|---|
| No unmasked PII | Random sample — [X]% of rows | | |
| No unmasked PAN data | Automated regex scan | | |
| No unmasked NRIC | Automated pattern scan | | |
| Referential integrity | Cross-table join check | | |
| Row count consistency | Count comparison | | |
| No production metadata | Schema and log review | | |

**Functional Verification Results:**

| Verification Check | Outcome (Pass / Fail) | Notes |
|---|---|---|
| Application accepts masked data formats | | |
| Test scenarios execute as expected | | |

**Overall Verification Outcome:** Pass / Fail

**If Fail — Actions Required:**

[Document required remediation actions and target completion date]

**IS Lead Signature:** _______________________ **Date:** _______________

**Requesting Team Lead Signature:** _______________________ **Date:** _______________

---

### Appendix E: Exception Request Form

*Submit to CISO and DPO for approval. Attach to ITSM ticket.*

| Field | Details |
|---|---|
| **Exception Request ID** | |
| **Date of Request** | |
| **Requestor Name and Role** | |
| **Procedure Clause(s) for which Exception is Sought** | |
| **Description of Requirement Cannot Be Met** | |
| **Business Justification** | |
| **Risk Assessment Summary** | |
| **Proposed Compensating Controls** | |
| **Requested Exception Duration** | |
| **CISO Approval** | Approved / Rejected |
| **CISO Signature** | |
| **DPO Approval** | Approved / Rejected |
| **DPO Signature** | |
| **Date of Approval** | |
| **Expiry Date** | |

---

### Appendix F: Exception Register

*Maintained by the Information Security Lead. Reviewed at each annual procedure review.*

| Exception ID | Procedure Clause | Requestor | Description | Compensating Controls | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| [EXC-DM-001] | | | | | | | | Active / Expired |

---

### Appendix G: Glossary of Masking Techniques — Quick Reference Card

*For use by Data Engineers and DBAs during masking configuration.*

| Technique | When to Use | Key Constraint |
|---|---|---|
| Substitution | Names, addresses, email | Ensure lookup table values are fictitious and cannot be attributed to real individuals |
| Format-Preserving Encryption | Account numbers, NRIC, PAN | Key must be stored separately from masked dataset |
| Tokenisation | PAN (PCI DSS context) | Token vault must be production-grade secure |
| Redaction | CVV, passwords, biometric | Verify application does not error on null/blank value |
| Truncation | PAN (display only) | Ensure remaining digits alone are not sufficient for re-identification |
| Date Shifting | DoB, transaction dates | Use consistent offset within a dataset to preserve temporal relationships |
| Value Scaling | Balances, amounts | Define acceptable range to preserve testability of business logic |
| Pseudonymisation | Customer IDs, names | Key table must not be co-located with masked data |

---

*End of Document*

---

> **Document Control Note:** This document is classified **Confidential**. Unauthorised reproduction, distribution, or disclosure is prohibited. Printed copies are uncontrolled. Always refer to the document repository for the current approved version.
>
> **Document Repository:** [SharePoint / Confluence / Document Management System URL]
>
> © [Organization Name] [Year] — All Rights Reserved