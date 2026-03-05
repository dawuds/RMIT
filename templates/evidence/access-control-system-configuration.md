# Access Control System Configuration

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It contains sensitive configuration and control information relating to physical and logical access systems. Distribution is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure may constitute a breach of [Organization Name]'s Information Security Policy and applicable regulatory obligations.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Findings and Ratings](#5-findings-and-ratings)
6. [Access Provisioning and Deprovisioning Workflow](#6-access-provisioning-and-deprovisioning-workflow)
7. [Segregation of Duties Matrix](#7-segregation-of-duties-matrix)
8. [Periodic Access Certification Process](#8-periodic-access-certification-process)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official configuration evidence record for [Organization Name]'s multi-factor physical access controls and biometric systems. It demonstrates compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy, specifically Clause 10.28, which mandates that financial institutions implement and maintain robust access control mechanisms commensurate with the sensitivity of the systems and facilities they protect.

This artifact provides auditors, regulators, and internal governance bodies with documented evidence that:

- Physical access controls are appropriately configured and enforced.
- Multi-factor authentication (MFA) and biometric controls are deployed at designated secure perimeters.
- Access rights are granted, reviewed, and revoked in a controlled and auditable manner.
- Segregation of duties (SoD) principles are embedded in access administration processes.

### 1.2 Scope

*Define the boundaries of this document — which facilities, systems, and user populations are covered. Include any explicit exclusions.*

This document applies to the following systems, facilities, and personnel within [Organization Name]:

**In-Scope Systems and Facilities:**

| Item | Description | Location |
|---|---|---|
| Data Centre (Primary) | [DC Name / Identifier] | [Physical Address / Zone] |
| Data Centre (DR/Secondary) | [DC Name / Identifier] | [Physical Address / Zone] |
| Server Rooms | [Room Identifiers] | [Floor / Building] |
| Network Closets | [Closet Identifiers] | [Floor / Building] |
| Biometric Access Control System | [System Name / Vendor] | Enterprise-wide |
| Physical Access Control System (PACS) | [System Name / Vendor] | Enterprise-wide |
| Identity & Access Management Platform | [IAM Platform Name] | Enterprise-wide |

**In-Scope Personnel:**

- All permanent employees, contractors, and third-party vendors with physical or logical access to in-scope facilities.

**Exclusions:**

- [List any facilities, systems, or user groups explicitly excluded from this document's scope and the rationale.]

### 1.3 Document Triggers

This document is reviewed and updated upon the occurrence of any of the following events, and no less than **quarterly**:

- Significant changes to physical access control infrastructure or biometric system configuration.
- Addition or decommissioning of a secure facility.
- Findings arising from internal audit, penetration testing, or regulatory examination.
- Material changes to applicable regulatory requirements.
- Scheduled quarterly periodic review cycle.

---

## 2. Regulatory Context

*Reference the specific regulatory frameworks, clauses, and guidance documents that mandate this artifact. This section establishes the regulatory basis for the controls documented herein.*

This document has been prepared in accordance with the following regulatory instruments and internal policies:

| Regulatory Instrument | Issuing Authority | Relevant Clause(s) | Requirement Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy | Bank Negara Malaysia (BNM) | **10.28** | Financial institutions must implement multi-factor authentication for access to critical systems and facilities, and maintain documented configuration evidence for all access control mechanisms. |
| Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | Sections 9, 10 | Security controls must protect personal data from unauthorised access, including physical access safeguards. |
| NACSA Cybersecurity Framework | National Cyber Security Agency (NACSA) | PR.AC (Access Control) | Access to assets and associated facilities is limited to authorised users, processes, and devices. |
| [Internal Policy Name] | [Organization Name] | [Policy Ref] | [Brief description of internal policy requirement.] |

---

## 3. Assessment Scope and Criteria

### 3.1 Assessment Scope

*Describe what was assessed, over what time period, and what the assessment was intended to validate. Be specific about the facilities, systems, and control domains reviewed.*

This configuration assessment covers the following control domains for the period **[Assessment Start Date]** to **[Assessment End Date]**:

| Control Domain | Systems / Assets Assessed | Assessment Lead |
|---|---|---|
| Physical Access Controls | PACS, door controllers, badge readers | [Name / Team] |
| Biometric Authentication | Fingerprint scanners, facial recognition units | [Name / Team] |
| Multi-Factor Authentication (MFA) | MFA tokens, mobile authenticators, smart cards | [Name / Team] |
| Access Administration | IAM platform, provisioning workflows | [Name / Team] |
| Audit Logging | SIEM integration, PACS audit trails | [Name / Team] |
| Vendor / Third-Party Access | Contractor access records | [Name / Team] |

### 3.2 Assessment Criteria

*List the specific standards, benchmarks, and internal thresholds used to evaluate control effectiveness.*

The following criteria were applied to evaluate the adequacy of access control configurations:

- **BNM RMiT Clause 10.28** — Multi-factor physical access controls mandated for all Tier 1 and Tier 2 secure zones.
- **CIS Controls v8** — CIS Control 6 (Access Control Management) benchmarks for authentication and authorisation.
- **ISO/IEC 27001:2022** — Annex A.7 (Physical Controls) and Annex A.8 (Technological Controls).
- **[Organization Name] Information Security Policy** — [Policy Reference], minimum authentication standards.
- **[Organization Name] Data Centre Physical Security Standard** — [Standard Reference].

**Risk Thresholds:**

| Rating | Criteria |
|---|---|
| **Critical** | Control is absent or completely ineffective; immediate exploitation risk. |
| **High** | Control is significantly deficient; material gap against regulatory requirement. |
| **Medium** | Control is partially effective; improvement required within agreed timeframe. |
| **Low** | Minor gap; compensating controls exist; improvement recommended. |
| **Compliant** | Control meets or exceeds all applicable criteria. |

---

## 4. Methodology

### 4.1 Assessment Approach

*Describe the methods used to gather evidence and evaluate control effectiveness. This section should satisfy auditor requirements for methodological rigour.*

The assessment employed the following methods:

- **Configuration Review:** Direct inspection of PACS and biometric system configuration files, administrative console settings, and vendor-supplied configuration reports.
- **Policy and Procedure Review:** Comparison of documented policies and procedures against actual system configuration and operational practice.
- **Observation:** On-site observation of physical access control mechanisms at designated secure zones.
- **Interview:** Structured interviews with IAM Manager, Facilities Management, and IT Security personnel.
- **Log Sampling:** Review of access logs and audit trails for a sample period of **[Sample Period, e.g., 30 days]** to verify logging completeness and anomaly detection.
- **Penetration Testing Reference:** Where applicable, findings from the most recent physical penetration test dated **[Date]** have been incorporated.

### 4.2 Evidence Collection

*List the specific evidence artefacts gathered during the assessment.*

| Evidence Item | Source | Date Collected | Collected By |
|---|---|---|---|
| PACS Configuration Export | [System Name] Admin Console | [Date] | [Name] |
| Biometric Enrolment Records | [Biometric System Name] | [Date] | [Name] |
| MFA Policy Configuration | [IAM Platform Name] | [Date] | [Name] |
| Access Log Sample | SIEM / [Log Source] | [Date] | [Name] |
| Access Review Records | IAM Platform / Certification Report | [Date] | [Name] |
| Vendor Maintenance Logs | [Vendor Name] | [Date] | [Name] |
| [Additional Evidence] | [Source] | [Date] | [Name] |

### 4.3 Assumptions and Limitations

- The assessment was conducted based on information available as at **[Assessment Date]**. Control effectiveness may have changed subsequent to this date.
- [List any limitations, e.g., restricted access to certain logs, vendor system constraints, or sampling approach applied.]

---

## 5. Findings and Ratings

### 5.1 Executive Summary

*Provide a high-level summary of overall compliance posture across the assessed control domains. This should be suitable for senior management and board-level reporting.*

| Control Domain | Overall Rating | Open Findings | Critical / High |
|---|---|---|---|
| Physical Access Controls | [Compliant / Medium / High] | [#] | [#] |
| Biometric Authentication | [Compliant / Medium / High] | [#] | [#] |
| Multi-Factor Authentication | [Compliant / Medium / High] | [#] | [#] |
| Access Administration | [Compliant / Medium / High] | [#] | [#] |
| Audit Logging | [Compliant / Medium / High] | [#] | [#] |
| Vendor / Third-Party Access | [Compliant / Medium / High] | [#] | [#] |
| **Overall** | **[Overall Rating]** | **[Total #]** | **[Total #]** |

### 5.2 Detailed Findings

*Document each finding with sufficient detail to allow the relevant control owner to understand the gap, its regulatory significance, and the required remediation action.*

---

**Finding ID:** [FND-001]
**Control Domain:** [e.g., Physical Access Controls]
**Rating:** [Critical / High / Medium / Low]
**RMiT Reference:** Clause 10.28

**Observation:**
[Describe the specific gap or deficiency observed. Be factual and objective.]

**Evidence:**
[Reference the specific evidence item(s) that substantiate this finding.]

**Risk Impact:**
[Describe the potential consequence if this finding is not addressed — regulatory, operational, or reputational.]

**Recommended Action:**
[State the specific remediation action required.]

**Target Remediation Date:** [Date]
**Control Owner:** [Name / Role]
**Status:** [Open / In Progress / Closed]

---

**Finding ID:** [FND-002]
**Control Domain:** [e.g., Biometric Authentication]
**Rating:** [Rating]
**RMiT Reference:** Clause 10.28

**Observation:**
[Description]

**Evidence:**
[Evidence reference]

**Risk Impact:**
[Impact description]

**Recommended Action:**
[Remediation action]

**Target Remediation Date:** [Date]
**Control Owner:** [Name / Role]
**Status:** [Open / In Progress / Closed]

---

*[Replicate the above structure for each additional finding.]*

### 5.3 Configuration Baseline Summary

*Document the current approved configuration state for each major access control system component.*

| System Component | Configuration Parameter | Current Setting | Required Setting | Compliant? |
|---|---|---|---|---|
| PACS — Door Controller | Authentication Mode | [e.g., Card + PIN] | MFA Required | [Yes / No] |
| PACS — Tailgating Detection | Anti-Passback Enabled | [Yes / No] | Yes | [Yes / No] |
| Biometric Scanner — Data Centre | Liveness Detection | [Enabled / Disabled] | Enabled | [Yes / No] |
| Biometric Scanner — Server Room | FAR Threshold | [Value] | ≤ 0.001% | [Yes / No] |
| MFA — Remote Access | Second Factor Type | [e.g., TOTP / Hardware Token] | TOTP or Hardware Token | [Yes / No] |
| IAM Platform — Session | Idle Session Timeout | [Value] | ≤ 15 minutes | [Yes / No] |
| PACS Audit Log | Retention Period | [Value] | ≥ 12 months | [Yes / No] |
| [Component] | [Parameter] | [Current] | [Required] | [Yes / No] |

---

## 6. Access Provisioning and Deprovisioning Workflow

### 6.1 Provisioning Workflow

*Describe the end-to-end process for granting access to physical and logical systems. Include all approval gates, verification steps, and system configuration actions.*

The following workflow governs the provisioning of access rights for all in-scope systems and facilities:

**Trigger Events:**
- New employee onboarding.
- Role change or transfer.
- Approved project-based access requirement.
- Vendor or third-party engagement commencement.

**Provisioning Steps:**

| Step | Action | Responsible Party | SLA | Approval Required |
|---|---|---|---|---|
| 1 | Access Request raised via [System Name / Ticketing Platform] | Requestor / Line Manager | Day 0 | Line Manager |
| 2 | Justification and business need validated | IAM Manager | 1 Business Day | IAM Manager |
| 3 | Risk classification of requested access level determined | Information Security | 1 Business Day | — |
| 4 | Data Owner / System Owner approval obtained | System / Data Owner | 2 Business Days | System / Data Owner |
| 5 | Background check / vetting confirmed (for Tier 1 zones) | HR / Security | As per HR SLA | CISO |
| 6 | Biometric enrolment completed (where applicable) | Facilities / IAM Team | 1 Business Day | — |
| 7 | Access provisioned in PACS and IAM platform | IAM Administrator | 1 Business Day | — |
| 8 | Access confirmation issued to requestor and line manager | IAM Administrator | Day of provisioning | — |
| 9 | Provisioning record updated in Access Register | IAM Administrator | Day of provisioning | — |

**Minimum Approval Requirements by Zone:**

| Zone / System | Approvers Required |
|---|---|
| General office areas | Line Manager |
| Server rooms / comms rooms | Line Manager + IAM Manager |
| Data Centre (Primary / DR) | Line Manager + IAM Manager + CISO |
| Privileged / Administrative access | IAM Manager + CISO + System Owner |

### 6.2 Deprovisioning Workflow

*Describe the end-to-end process for revoking access rights. Emphasise timeliness, especially for high-risk departures.*

**Trigger Events:**
- Employee resignation, termination, or retirement.
- Role change resulting in reduction of access requirements.
- Vendor or third-party engagement conclusion.
- Access certification finding requiring revocation.
- Disciplinary or security incident.

**Deprovisioning Steps:**

| Step | Action | Responsible Party | SLA — Standard | SLA — High Risk / Termination |
|---|---|---|---|---|
| 1 | Notification received from HR or Line Manager | HR / Line Manager | Day of effective date | Immediate |
| 2 | Access suspension initiated in IAM platform | IAM Administrator | Same business day | Within 2 hours |
| 3 | Physical access credentials deactivated (badge, biometric) | IAM / Facilities | Same business day | Within 2 hours |
| 4 | Active sessions terminated | IAM Administrator | Same business day | Immediate |
| 5 | System-specific accounts disabled or removed | System Administrators | 5 Business Days | Same business day |
| 6 | Equipment and credentials recovered | HR / Facilities | As per offboarding checklist | Immediate |
| 7 | Deprovisioning record updated in Access Register | IAM Administrator | Within 1 Business Day of completion | Same business day |
| 8 | Post-departure access audit conducted | IAM Manager | Within 10 Business Days | Within 3 Business Days |

### 6.3 Emergency and Privileged Access

*Document controls for emergency break-glass access and temporary elevated privileges.*

| Scenario | Process | Approval | Logging | Revocation |
|---|---|---|---|---|
| Emergency data centre access | Break-glass procedure via [System Name] | CISO or designate | Full session recorded | Within 24 hours or upon incident resolution |
| Temporary elevated privilege | [Privileged Access Management (PAM) system] request | IAM Manager + System Owner | Full audit trail in PAM | Maximum [X] hours; auto-expiry enforced |
| Vendor emergency access | Supervised access; escort required | Facilities Manager + IAM Manager | Visitor log + CCTV | Upon vendor departure |

---

## 7. Segregation of Duties Matrix

### 7.1 Overview

*Describe the SoD principles applied to access administration and control functions. The matrix below documents which roles are prohibited from holding conflicting access rights simultaneously.*

[Organization Name] applies the principle of Segregation of Duties to ensure that no single individual holds access rights that would enable them to perform and conceal a fraudulent or erroneous action without detection. The following matrix documents approved access profiles and identified SoD conflicts.

### 7.2 Role-Based Access Profiles

| Role | Physical Zones Permitted | Logical Access Level | Administrative Rights | MFA Required |
|---|---|---|---|---|
| General Staff | General office areas | Read — business systems | None | No |
| IT Operations | Server rooms, comms rooms | Read/Write — managed systems | Limited — own systems | Yes |
| IAM Administrator | Server rooms, IAM console area | Admin — IAM platform | IAM provisioning only | Yes |
| System Administrator | Data Centre | Admin — assigned systems | System-specific | Yes (Hardware Token) |
| PACS Administrator | Security control room | Admin — PACS | PACS configuration | Yes (Hardware Token) |
| Security Operations | Security control room, Data Centre | Read — SIEM, PACS logs | None | Yes |
| CISO / IT Management | All zones | Read — all systems | Policy approval only | Yes (Hardware Token) |
| Auditor (Internal) | Read-only audit access | Read — all audit logs | None | Yes |
| Vendor / Third Party | Escorted — designated zones only | Restricted — as contracted | None | Yes (as applicable) |

### 7.3 SoD Conflict Matrix

*An **X** indicates a prohibited combination. No individual should hold both roles simultaneously. Compensating controls must be documented where exceptions exist.*

| Role | IAM Admin | PACS Admin | System Admin | Security Ops | Auditor | Finance Systems Admin |
|---|---|---|---|---|---|---|
| **IAM Admin** | — | **X** | **X** | **X** | **X** | **X** |
| **PACS Admin** | **X** | — | **X** | **X** | **X** | — |
| **System Admin** | **X** | **X** | — | — | **X** | **X** |
| **Security Ops** | **X** | **X** | — | — | — | — |
| **Auditor** | **X** | **X** | **X** | — | — | **X** |
| **Finance Systems Admin** | **X** | — | **X** | — | **X** | — |

### 7.4 Documented SoD Exceptions

*List any approved exceptions to the SoD matrix, including the business justification, compensating controls, and approval authority.*

| Exception ID | Individual / Role | Conflicting Rights | Business Justification | Compensating Control | Approved By | Expiry Date |
|---|---|---|---|---|---|---|
| [SoD-EX-001] | [Name / Role] | [Conflicting rights] | [Justification] | [Compensating control, e.g., enhanced logging, dual control] | [Approver] | [Date] |

---

## 8. Periodic Access Certification Process

### 8.1 Certification Schedule

*Describe the cadence and triggers for periodic access reviews. This is a critical control for detecting and revoking access that is no longer required.*

[Organization Name] conducts access certification reviews in accordance with the following schedule:

| Access Type | Review Frequency | Certification Owner | Review Basis |
|---|---|---|---|
| Privileged / Administrative access | **Monthly** | IAM Manager | Full population review |
| Data Centre physical access | **Quarterly** | Facilities Manager + IAM Manager | Full population review |
| Server room / comms room access | **Quarterly** | IAM Manager | Full population review |
| General system access | **Semi-Annually** | Line Managers (via IAM platform) | Role-based review |
| Vendor / Third-party access | **Per engagement** + **Quarterly** | IAM Manager + Vendor Manager | Full population review |
| Biometric enrolment records | **Annually** | IAM Manager | Full population review |

**Ad hoc reviews** are triggered by:

- Security incidents involving unauthorised access.
- Significant organisational restructuring.
- Regulatory examination or audit request.
- PACS or biometric system integrity alerts.

### 8.2 Certification Workflow

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| 1 | Access certification campaign initiated in [IAM Platform / GRC Tool] | IAM Administrator | Day 1 of review period |
| 2 | Certification tasks assigned to Line Managers and System Owners | IAM Administrator | Day 1 |
| 3 | Reviewers confirm, modify, or revoke access for each assigned user | Line Managers / System Owners | Within [10] Business Days |
| 4 | Escalation for non-response initiated by IAM Manager | IAM Manager | Day [8] |
| 5 | Revocations actioned by IAM team | IAM Administrator | Within [2] Business Days of certification decision |
| 6 | Exceptions and unresolved items escalated to CISO | IAM Manager | End of certification period |
| 7 | Certification completion report generated and filed | IAM Manager | Within [5] Business Days of close |
| 8 | Results reported to IT Security Steering Committee | CISO | Next scheduled committee meeting |

### 8.3 Certification Metrics and Reporting

*Define the KPIs used to measure the effectiveness of the access certification programme.*

| Metric | Target | Reporting Frequency |
|---|---|---|
| Certification completion rate | ≥ 98% within SLA | Per campaign |
| Access revocations actioned on time | 100% within 2 business days | Per campaign |
| SoD conflicts identified and resolved | 100% resolved or exception-approved | Per campaign |
| Accounts with no last logon > [X] days | 0% (auto-flagged for review) | Monthly |
| Mean time to deprovision (leavers) | ≤ [X] hours (high risk) / ≤ 1 business day (standard) | Monthly |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for the key activities described in this document.*

**RACI Key:** **R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | IAM Manager | IAM Admin | CISO | System Owner | Line Manager | Facilities Mgr | Internal Audit | HR |
|---|---|---|---|---|---|---|---|---|
| Define access control policy | C | — | A/R | C | — | C | C | — |
| Approve access provisioning requests | A/R | — | C | R | R | C | — | — |
| Execute provisioning / deprovisioning | C | R | — | C | — | C | — | I |
| Conduct biometric enrolment | C | R | — | — | — | R | — | — |
| Manage PACS configuration | I | I | C | — | — | A/R | — | — |
| Conduct access certification campaigns | A/R | R | C | C | R | C | I | — |
| Review SoD conflicts | A/R | C | C | C | — | — | C | — |
| Approve SoD exceptions | C | — | A/R | C | — | — | C | — |
| Investigate access-related incidents | R | C | A | C | I | C | I | I |
| Report to IT Security Steering Committee | C | — | A/R | — | — | — | I | — |
| Annual biometric records review | A/R | R | C | — | — | C | — | — |
| Notify IAM of leavers / movers | I | I | — | — | R | — | — | A/R |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation. |
| [1.1] | [Date] | [Author Name] | [Description of changes, e.g., updated SoD matrix to reflect organisational restructure.] |
| [X.X] | [Date] | [Author Name] | [Description] |

### 10.2 Approval Sign-Off

*This document requires approval from the following designated authorities prior to issuance and upon each review.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager (Owner) | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Risk Officer / Head of Compliance | [Name] | __________________ | [Date] |
| Chief Technology Officer | [Name] | __________________ | [Date] |
| [Additional Approver as required] | [Name] | __________________ | [Date] |

---

## 11. References

The following regulatory instruments, standards, and internal documents inform the requirements documented in this artifact:

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy | Bank Negara Malaysia | **10.28** |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Sections 9, 10 |
| NACSA CF | National Cybersecurity Framework | National Cyber Security Agency (NACSA) | PR.AC |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC | Annex A.7, A.8 |
| CIS Controls v8 | Center for Internet Security Controls | CIS | Control 6 |
| [Internal Policy Ref] | [Organization Name] Information Security Policy | [Organization Name] | [Section] |
| [Internal Policy Ref] | [Organization Name] Data Centre Physical Security Standard | [Organization Name] | [Section] |
| [Internal Policy Ref] | [Organization Name] Identity and Access Management Policy | [Organization Name] | [Section] |
| [Internal Policy Ref] | [Organization Name] Acceptable Use Policy | [Organization Name] | [Section] |

---

## 12. Appendices

### Appendix A — Access Control System Architecture Diagram

*Attach or embed a current network / physical architecture diagram showing the placement of PACS controllers, biometric readers, MFA enforcement points, and integration with the IAM platform and SIEM.*

[Insert Diagram or Reference: "See attached — Access Control Architecture Diagram v[X.X], dated [Date]"]

### Appendix B — Biometric System Configuration Specification

*Provide the vendor-supplied or internally documented configuration specification sheet for each biometric device type in scope, including model, firmware version, FAR/FRR thresholds, liveness detection settings, and data storage configuration.*

| Device Type | Vendor / Model | Firmware Version | Location(s) | FAR Threshold | FRR Threshold | Liveness Detection | Data Storage |
|---|---|---|---|---|---|---|---|
| Fingerprint Scanner | [Vendor / Model] | [Version] | [Location] | [Value] | [Value] | [Enabled / Disabled] | [On-device / Centralised] |
| Facial Recognition Unit | [Vendor / Model] | [Version] | [Location] | [Value] | [Value] | [Enabled / Disabled] | [On-device / Centralised] |
| [Device Type] | [Vendor / Model] | [Version] | [Location] | [Value] | [Value] | [Enabled / Disabled] | [On-device / Centralised] |

### Appendix C — PACS Zone Classification Register

*List all physical zones, their security tier classification, required authentication factors, and the PACS door controllers assigned to each zone.*

| Zone ID | Zone Name | Location | Security Tier | Required Auth Factors | PACS Controller ID | Last Config Review |
|---|---|---|---|---|---|---|
| [Z-001] | [Zone Name, e.g., Data Centre Floor] | [Location] | Tier 1 | Card + Biometric + PIN | [Controller ID] | [Date] |
| [Z-002] | [Zone Name, e.g., Server Room A] | [Location] | Tier 2 | Card + PIN | [Controller ID] | [Date] |
| [Z-003] | [Zone Name, e.g., General Office] | [Location] | Tier 3 | Card only | [Controller ID] | [Date] |

### Appendix D — Access Certification Campaign Log

*Maintain a log of all completed access certification campaigns for audit trail purposes.*

| Campaign ID | Review Period | Scope | Launch Date | Close Date | Completion Rate | Revocations | Exceptions | Sign-Off By |
|---|---|---|---|---|---|---|---|---|
| [CERT-2025-Q1] | Q1 [Year] | Privileged Access | [Date] | [Date] | [%] | [#] | [#] | [Name] |
| [CERT-2025-Q2] | Q2 [Year] | All Access Types | [Date] | [Date] | [%] | [#] | [#] | [Name] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| PACS | Physical Access Control System — hardware and software used to control and monitor access to physical spaces. |
| MFA | Multi-Factor Authentication — authentication requiring two or more independent verification factors. |
| FAR | False Acceptance Rate — the probability that a biometric system incorrectly grants access to an unauthorised individual. |
| FRR | False Rejection Rate — the probability that a biometric system incorrectly denies access to an authorised individual. |
| SoD | Segregation of Duties — the practice of dividing tasks among multiple individuals to reduce the risk of error or fraud. |
| IAM | Identity and Access Management — policies, processes, and technologies for managing digital identities and access rights. |
| PAM | Privileged Access Management — controls for managing, monitoring, and auditing privileged account access. |
| RACI | Responsible, Accountable, Consulted, Informed — a matrix used to define roles in organisational processes. |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |
| BNM | Bank Negara Malaysia — the Central Bank of Malaysia. |

---

*End of Document*

*Document ID: [Document ID] | Version: 1.0 | Classification: Confidential | Owner: IAM Manager*
*[Organization Name] — For internal use only. Do not distribute without authorisation.*