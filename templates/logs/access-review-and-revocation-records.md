# Access Review and Revocation Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset and Item Identification](#2-asset-and-item-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Status and Lifecycle Stage](#5-status-and-lifecycle-stage)
6. [Last Review Date and Review History](#6-last-review-date-and-review-history)
7. [Access Review Records](#7-access-review-records)
8. [Revocation Evidence and Audit Trail](#8-revocation-evidence-and-audit-trail)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official record template for quarterly access reviews and immediate access revocation activities conducted by [Organization Name] in accordance with the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.28**.

It provides a structured, audit-ready log to demonstrate that access rights to information systems, applications, and data are periodically reviewed, validated, and revoked in a timely manner upon change of role, employment status, or identified risk.

### 1.2 Scope

This template applies to:

- All information systems, applications, databases, and infrastructure components owned or operated by [Organization Name]
- All user accounts, including employees, contractors, third-party vendors, privileged users, and system/service accounts
- All access types, including physical access, logical access, remote access, and privileged access
- Access review cycles conducted on a **quarterly basis** and all ad-hoc revocations triggered by operational events

### 1.3 Regulatory Basis

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | 10.28 | Financial institutions must implement a process to periodically review and promptly revoke access rights that are no longer required or appropriate |
| BNM RMiT | 10.27 | Access rights must be granted based on least privilege and need-to-know principles |
| Personal Data Protection Act 2010 (PDPA) | Section 40 | Appropriate security controls must prevent unauthorised access to personal data |
| NACSA | Cloud Security Framework | Access governance requirements for cloud-hosted systems |

---

## 2. Asset and Item Identification

*Record every system, application, or data repository subject to this access review cycle. Each row represents a distinct asset. Ensure all assets in the institution's Technology Asset Register are covered.*

### 2.1 Asset Register — Systems Under Review

| Asset ID | Asset Name | Asset Type | Hosting Environment | Business Criticality | System Owner | Review Period |
|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Core Banking System] | [Application / Database / Infrastructure] | [On-Premise / Cloud / Hybrid] | [Critical / High / Medium / Low] | [Name, Department] | [Q1 / Q2 / Q3 / Q4 YYYY] |
| [ASSET-002] | [e.g., Active Directory] | [Identity Provider] | [On-Premise] | [Critical] | [Name, Department] | [Q1 / Q2 / Q3 / Q4 YYYY] |
| [ASSET-003] | [e.g., Cloud Storage (Azure Blob)] | [Cloud Service] | [Cloud — Azure] | [High] | [Name, Department] | [Q1 / Q2 / Q3 / Q4 YYYY] |
| [ASSET-004] | | | | | | |

### 2.2 Scope Exclusions

*Document any assets explicitly excluded from this review cycle and provide justification. Exclusions must be approved by the IT Operations Manager.*

| Asset Name | Justification for Exclusion | Approved By | Approval Date |
|---|---|---|---|
| [Asset Name] | [Reason, e.g., system decommissioned, covered under separate review] | [Name, Role] | [DD/MM/YYYY] |

---

## 3. Classification and Categorisation

*Classify each asset and the access types under review using [Organization Name]'s approved data classification and access categorisation framework. Classification determines the sensitivity of the review findings and the handling requirements for this record.*

### 3.1 Data Classification Framework

| Classification Level | Definition | Handling Requirement |
|---|---|---|
| **Top Secret / Restricted** | Highly sensitive financial, personal, or regulatory data | Strict access control; encrypted storage; executive approval for access |
| **Confidential** | Internal business data, customer information, system credentials | Role-based access; confidentiality agreements required |
| **Internal** | General operational data not intended for public disclosure | Internal network access only |
| **Public** | Information approved for external distribution | No special controls required |

### 3.2 Asset Classification Register

*For each asset identified in Section 2, record its data classification and access category.*

| Asset ID | Asset Name | Data Classification | Access Category | Regulation Applicable | Notes |
|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Confidential] | [Privileged / Standard / Read-Only] | [RMiT, PDPA] | [Any relevant notes] |
| [ASSET-002] | [Asset Name] | [Top Secret / Restricted] | [Privileged] | [RMiT] | |
| [ASSET-003] | [Asset Name] | [Internal] | [Standard] | [RMiT, PDPA] | |
| [ASSET-004] | | | | | |

### 3.3 Access Type Categorisation

| Access Type | Description | Review Frequency | Approver |
|---|---|---|---|
| **Privileged Access** | Admin, root, DBA, or elevated rights | Quarterly + Event-driven | CISO / IT Operations Manager |
| **Standard User Access** | Regular user accounts with defined role permissions | Quarterly | Line Manager + IT Operations |
| **Service / System Accounts** | Non-human accounts used for automated processes | Quarterly | System Owner |
| **Third-Party / Vendor Access** | External parties with temporary or ongoing access | Quarterly + Contract Review | IT Operations Manager + Procurement |
| **Remote Access** | VPN, RDP, or remote desktop sessions | Quarterly | IT Operations Manager |

---

## 4. Owner and Custodian

*Document the designated owner and custodian for each asset under review. The owner is accountable for the asset and its access decisions; the custodian is operationally responsible for implementing access controls.*

### 4.1 Asset Ownership Register

*Ensure each asset has a clearly assigned owner and custodian. Unassigned assets must be escalated to the IT Operations Manager for immediate designation.*

| Asset ID | Asset Name | Business Owner | Business Owner Department | Technical Custodian | Custodian Department | Data Protection Officer Notified | Date Assigned |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Full Name] | [Department] | [Full Name] | [IT / Ops] | [Yes / No] | [DD/MM/YYYY] |
| [ASSET-002] | [Asset Name] | [Full Name] | [Department] | [Full Name] | [IT / Ops] | [Yes / No] | [DD/MM/YYYY] |
| [ASSET-003] | [Asset Name] | [Full Name] | [Department] | [Full Name] | [IT / Ops] | [Yes / No] | [DD/MM/YYYY] |
| [ASSET-004] | | | | | | | |

### 4.2 Ownership Change Log

*Record any changes to asset ownership or custodianship during the review period. Changes must be approved and documented to maintain accountability.*

| Asset ID | Asset Name | Previous Owner | New Owner | Reason for Change | Change Date | Approved By |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Previous Name] | [New Name] | [Reason, e.g., resignation, restructure] | [DD/MM/YYYY] | [Name, Role] |

---

## 5. Status and Lifecycle Stage

*Record the current operational status and lifecycle stage of each asset and each user account under review. This informs whether access rights are still appropriate and whether any accounts require immediate action.*

### 5.1 Asset Lifecycle Status

| Asset ID | Asset Name | Operational Status | Lifecycle Stage | Planned Decommission Date | Action Required |
|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Active / Inactive / Under Maintenance] | [In Production / Development / End-of-Life / Decommissioning] | [DD/MM/YYYY or N/A] | [None / Review Access / Revoke All / Decommission] |
| [ASSET-002] | [Asset Name] | [Active] | [In Production] | [N/A] | [None] |
| [ASSET-003] | | | | | |

### 5.2 User Account Status Register

*This register captures the access status of each user account across all assets in scope. A separate record should be maintained per asset or exported from the identity management system and appended as Appendix A.*

| User ID | Full Name | Department | Job Title | Employment Status | Account Status | Last Login Date | Access Justification | Review Outcome | Action Required |
|---|---|---|---|---|---|---|---|---|---|
| [USR-001] | [Full Name] | [Department] | [Job Title] | [Active / Resigned / On Leave / Transferred] | [Active / Disabled / Locked / Pending Deletion] | [DD/MM/YYYY] | [Business Need] | [Approved / Revoked / Modified] | [None / Revoke / Modify Role] |
| [USR-002] | [Full Name] | [Department] | [Job Title] | [Active] | [Active] | [DD/MM/YYYY] | [Business Need] | [Approved] | [None] |
| [USR-003] | | | | | | | | | |

### 5.3 Account Status Summary

*Populate this summary table at the conclusion of each quarterly review cycle.*

| Status Category | Count | Percentage of Total |
|---|---|---|
| Accounts Reviewed | [Number] | 100% |
| Accounts Approved (No Change) | [Number] | [%] |
| Accounts Modified (Role Change) | [Number] | [%] |
| Accounts Revoked / Disabled | [Number] | [%] |
| Accounts Pending Further Review | [Number] | [%] |
| Orphaned Accounts Identified | [Number] | [%] |
| Orphaned Accounts Remediated | [Number] | [%] |

---

## 6. Last Review Date and Review History

*Maintain a complete and auditable history of all access reviews conducted. Each quarterly review must be recorded below, including findings, actions taken, and sign-off evidence.*

### 6.1 Quarterly Review Schedule

| Review Cycle | Review Period | Scheduled Date | Actual Completion Date | Review Lead | Status |
|---|---|---|---|---|---|
| Q1 [YYYY] | 01 Jan – 31 Mar [YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name, Role] | [Completed / In Progress / Overdue] |
| Q2 [YYYY] | 01 Apr – 30 Jun [YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name, Role] | [Completed / In Progress / Overdue] |
| Q3 [YYYY] | 01 Jul – 30 Sep [YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name, Role] | [Completed / In Progress / Overdue] |
| Q4 [YYYY] | 01 Oct – 31 Dec [YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name, Role] | [Completed / In Progress / Overdue] |

### 6.2 Review Findings Summary per Cycle

*Summarise key findings from each completed review cycle. Detailed findings should be preserved in Appendix B.*

| Review Cycle | Total Users Reviewed | Accounts Revoked | Accounts Modified | Exceptions Raised | Findings Escalated | Sign-Off Date | Signed Off By |
|---|---|---|---|---|---|---|---|
| Q1 [YYYY] | [Number] | [Number] | [Number] | [Number] | [Yes / No] | [DD/MM/YYYY] | [Name, Role] |
| Q2 [YYYY] | [Number] | [Number] | [Number] | [Number] | [Yes / No] | [DD/MM/YYYY] | [Name, Role] |
| Q3 [YYYY] | [Number] | [Number] | [Number] | [Number] | [Yes / No] | [DD/MM/YYYY] | [Name, Role] |
| Q4 [YYYY] | [Number] | [Number] | [Number] | [Number] | [Yes / No] | [DD/MM/YYYY] | [Name, Role] |

### 6.3 Ad-Hoc Reviews Conducted

*Record any unscheduled reviews triggered by events such as security incidents, employee terminations, or regulatory directives.*

| Review ID | Trigger Event | Date Initiated | Date Completed | Systems Reviewed | Accounts Affected | Outcome | Initiated By |
|---|---|---|---|---|---|---|---|
| [AHR-001] | [e.g., Employee resignation] | [DD/MM/YYYY] | [DD/MM/YYYY] | [System Names] | [Number] | [Summary] | [Name, Role] |
| [AHR-002] | [e.g., Security incident] | [DD/MM/YYYY] | [DD/MM/YYYY] | [System Names] | [Number] | [Summary] | [Name, Role] |

---

## 7. Access Review Records

*This section contains the detailed records of each quarterly access review. Review records must be sufficiently detailed to demonstrate compliance with RMiT Clause 10.28 and must be retained for a minimum of [7] years in accordance with [Organization Name]'s Records Retention Policy.*

### 7.1 Review Initiation Record

| Field | Details |
|---|---|
| **Review Reference Number** | [REV-YYYY-QX-NNN] |
| **Review Type** | [Quarterly Scheduled / Ad-Hoc] |
| **Review Quarter** | [Q1 / Q2 / Q3 / Q4 YYYY] |
| **Review Start Date** | [DD/MM/YYYY] |
| **Review Completion Date** | [DD/MM/YYYY] |
| **Review Lead** | [Name, Job Title] |
| **Systems in Scope** | [List Asset IDs] |
| **Total User Accounts in Scope** | [Number] |
| **Review Methodology** | [Automated IAM Report / Manual Review / Combined] |
| **Tools Used** | [e.g., Active Directory, CyberArk, Microsoft Entra ID, Manual Spreadsheet] |

### 7.2 Detailed Access Review Log

*Export or transcribe the access review findings for each system. Where system-generated reports are used, attach them as Appendix A and reference the report ID below.*

| Review Ref | Asset ID | User ID | Full Name | Current Role / Permission | Access Still Required? | Reviewer Decision | Decision Justification | Reviewer Name | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [REV-001] | [ASSET-001] | [USR-001] | [Full Name] | [Admin / Read / Write] | [Yes / No] | [Retain / Modify / Revoke] | [Business justification] | [Reviewer Name] | [DD/MM/YYYY] |
| [REV-001] | [ASSET-001] | [USR-002] | [Full Name] | [Read-Only] | [Yes] | [Retain] | [Active project requirement] | [Reviewer Name] | [DD/MM/YYYY] |
| [REV-001] | [ASSET-002] | [USR-003] | [Full Name] | [Domain Admin] | [No] | [Revoke] | [Staff transferred to non-IT role] | [Reviewer Name] | [DD/MM/YYYY] |
| | | | | | | | | | |

### 7.3 Exceptions and Deviations

*Document any exceptions to standard access review procedures, including delayed reviews, inaccessible systems, or approved deviations. All exceptions must be risk-accepted and signed off by the IT Operations Manager.*

| Exception ID | Description | Risk Level | Compensating Control | Approved By | Approval Date | Resolution Target Date | Resolved Date |
|---|---|---|---|---|---|---|---|
| [EXC-001] | [e.g., System unavailable during review window] | [High / Medium / Low] | [e.g., Manual log review conducted] | [Name, Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or Pending] |

---

## 8. Revocation Evidence and Audit Trail

*This section captures evidence of access revocation actions. All revocations — whether triggered by quarterly review findings or immediate operational events — must be recorded here with sufficient evidence to satisfy internal audit and regulatory examination.*

### 8.1 Immediate Revocation Triggers

*The following events require immediate access revocation (within 24 hours) without waiting for the next scheduled quarterly review:*

- Termination of employment (voluntary or involuntary)
- Transfer to a role with incompatible access requirements
- Detection of a security incident involving the account
- Contract expiry for contractors or third-party vendors
- Receipt of a formal access revocation directive from management or compliance
- Identification of a compromised or shared credential

### 8.2 Access Revocation Log

*Record every revocation action taken, whether arising from a quarterly review or an immediate trigger event. Evidence of completion (e.g., ticket number, system screenshot reference) must be referenced.*

| Revocation ID | Trigger Type | User ID | Full Name | Asset ID | Asset Name | Access Type Revoked | Revocation Date | Revocation Time | Completed By | Evidence Reference | Verified By | Verification Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [REV-RVK-001] | [Quarterly Review / Immediate — Termination / Immediate — Incident] | [USR-003] | [Full Name] | [ASSET-001] | [System Name] | [Admin Access] | [DD/MM/YYYY] | [HH:MM] | [Name, Role] | [Ticket #, Screenshot ID] | [Name, Role] | [DD/MM/YYYY] |
| [REV-RVK-002] | [Immediate — Contract Expiry] | [USR-010] | [Full Name] | [ASSET-003] | [System Name] | [VPN Access] | [DD/MM/YYYY] | [HH:MM] | [Name, Role] | [Ticket #, Screenshot ID] | [Name, Role] | [DD/MM/YYYY] |
| [REV-RVK-003] | | | | | | | | | | | | |

### 8.3 Revocation Timeliness Compliance

*Measure revocation timeliness against [Organization Name]'s Access Control Policy SLA requirements. Report any SLA breaches to the CISO.*

| Trigger Type | Required Revocation SLA | Average Actual Time | SLA Compliance Rate | SLA Breaches | Breach Details |
|---|---|---|---|---|---|
| Employee Termination | 24 hours | [X hours] | [%] | [Number] | [Reference REV-RVK IDs] |
| Contract Expiry | 24 hours | [X hours] | [%] | [Number] | [Reference REV-RVK IDs] |
| Security Incident | 4 hours | [X hours] | [%] | [Number] | [Reference REV-RVK IDs] |
| Quarterly Review Finding | 5 business days | [X days] | [%] | [Number] | [Reference REV-RVK IDs] |

### 8.4 Post-Revocation Verification

*All revocations must be independently verified by a party other than the individual who performed the revocation. Record verification evidence here.*

| Revocation ID | Verification Method | Verification Result | Verified By | Verification Date | Remarks |
|---|---|---|---|---|---|
| [REV-RVK-001] | [e.g., Login attempt test / IAM report confirmation / System audit log review] | [Confirmed Revoked / Failed — Escalated] | [Name, Role] | [DD/MM/YYYY] | [Any remarks] |
| [REV-RVK-002] | [e.g., IAM report confirmation] | [Confirmed Revoked] | [Name, Role] | [DD/MM/YYYY] | |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for all activities related to access review and revocation at [Organization Name].*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | IT Operations Manager | System / Asset Owner | IT Security (CISO) | HR Department | Line Manager | Internal Audit | Data Protection Officer | External Auditor |
|---|---|---|---|---|---|---|---|---|
| Define access review schedule and scope | A | C | C | I | I | I | I | — |
| Initiate quarterly access review | R/A | C | C | — | — | I | — | — |
| Provide user access reports per system | R | R | C | — | — | — | — | — |
| Review and validate user access appropriateness | C | R | C | — | A | — | — | — |
| Approve access retention decisions | C | A | C | — | R | — | — | — |
| Execute access revocation actions | R | — | C | — | — | — | — | — |
| Notify HR of access changes related to employment | R | — | I | A | I | — | — | — |
| Verify post-revocation completion | C | — | R/A | — | — | — | — | — |
| Document and retain review records | R/A | C | C | — | — | I | I | — |
| Escalate SLA breaches and exceptions | R | C | A | — | I | I | I | — |
| Review and sign off quarterly report | A | — | C | — | — | I | — | — |
| Conduct independent audit of access records | — | — | C | — | — | R/A | — | I |
| Regulatory reporting (if breach identified) | C | — | R | — | — | C | A | — |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Job Title] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name, Job Title] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Job Title] | [Description of major revision] |

### 10.2 Approval Sign-Off

*This document requires formal approval from the following designated authorities prior to use. Approval confirms the document is fit for purpose, accurate, and compliant with applicable regulatory requirements.*

| Role | Full Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Full Name] | _________________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Full Name] | _________________________ | [DD/MM/YYYY] |
| Data Protection Officer (DPO) | [Full Name] | _________________________ | [DD/MM/YYYY] |
| Chief Risk Officer / Head of Risk | [Full Name] | _________________________ | [DD/MM/YYYY] |
| Internal Audit Representative | [Full Name] | _________________________ | [DD/MM/YYYY] |

---

## 11. References

*This document is prepared in compliance with and shall be read in conjunction with the following regulatory instruments and internal policies.*

### 11.1 Regulatory References

| Reference | Document | Clause / Section | Description |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 10.28** | Periodic review and prompt revocation of access rights no longer required |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.27 | Least privilege and need-to-know access provisioning |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.29 | Privileged access management controls |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.30 | Logging and monitoring of privileged access |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 40 | Security standards for personal data protection |
| NACSA | Cloud Security Framework | Control Domain — Identity & Access | Access governance for cloud-hosted systems |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A, Control 5.18 | Access rights — provisioning, review, and revocation |

### 11.2 Internal Policy References

| Document | Owner | Location |
|---|---|---|
| [Organization Name] Access Control Policy | IT Operations Manager | [Internal document repository link / path] |
| [Organization Name] Information Classification Policy | Data Protection Officer | [Internal document repository link / path] |
| [Organization Name] Acceptable Use Policy | CISO | [Internal document repository link / path] |
| [Organization Name] Human Resources Offboarding Procedure | HR Director | [Internal document repository link / path] |
| [Organization Name] Incident Response Procedure | CISO | [Internal document repository link / path] |
| [Organization Name] Records Retention Policy | Compliance Officer | [Internal document repository link / path] |

---

## 12. Appendices

### Appendix A — System-Generated Access Reports

*Attach or reference system-generated access reports extracted from the identity and access management (IAM) platform, Active Directory, or individual application admin consoles for each system in scope. Each report must be clearly labelled with the system name, report date, and the review cycle it corresponds to.*

| Appendix Ref | Report Name | System / Source | Report Date | Generated By | File Reference |
|---|---|---|---|---|---|
| A-1 | [e.g., Active Directory User Access Report — Q3 2025] | [Active Directory] | [DD/MM/YYYY] | [Tool Name / Admin Name] | [File path or document ID] |
| A-2 | [e.g., Core Banking System Role Assignment Export] | [Core Banking System] | [DD/MM/YYYY] | [Tool Name / Admin Name] | [File path or document ID] |
| A-3 | [e.g., Cloud IAM Policy Export — Azure Entra ID] | [Microsoft Entra ID] | [DD/MM/YYYY] | [Tool Name / Admin Name] | [File path or document ID] |
| A-4 | [e.g., Privileged Account Audit Log] | [CyberArk / BeyondTrust] | [DD/MM/YYYY] | [Tool Name / Admin Name] | [File path or document ID] |

---

### Appendix B — Detailed Quarterly Review Findings

*Attach full findings reports for each completed quarterly review cycle. Include all reviewer comments, anomalies identified, and the disposition of each finding.*

| Appendix Ref | Review Cycle | Finding Summary | Report Date | Prepared By | File Reference |
|---|---|---|---|---|---|
| B-1 | [Q1 YYYY] | [Summary of key findings] | [DD/MM/YYYY] | [Name, Role] | [File path or document ID] |
| B-2 | [Q2 YYYY] | [Summary of key findings] | [DD/MM/YYYY] | [Name, Role] | [File path or document ID] |
| B-3 | [Q3 YYYY] | [Summary of key findings] | [DD/MM/YYYY] | [Name, Role] | [File path or document ID] |
| B-4 | [Q4 YYYY] | [Summary of key findings] | [DD/MM/YYYY] | [Name, Role] | [File path or document ID] |

---

### Appendix C — Access Revocation Evidence Artefacts

*Retain supporting evidence for each access revocation action. Evidence may include service desk tickets, email confirmations, screenshots of disabled accounts, or IAM audit logs. Reference each artefact against the Revocation ID recorded in Section 8.2.*

| Appendix Ref | Revocation ID | Evidence Type | Description | Date Captured | Captured By | File Reference |
|---|---|---|---|---|---|---|
| C-1 | [REV-RVK-001] | [Service Desk Ticket / Screenshot / Email / Audit Log] | [Brief description of evidence] | [DD/MM/YYYY] | [Name, Role] | [File path or document ID] |
| C-2 | [REV-RVK-002] | [Audit Log Export] | [Brief description of evidence] | [DD/MM/YYYY] | [Name, Role] | [File path or document ID] |

---

### Appendix D — Exception Register

*Maintain a running register of all exceptions raised during access review cycles, including their current resolution status. Exceptions must be reviewed and risk-accepted by the IT Operations Manager.*

| Exception ID | Review Cycle | Exception Description | Risk Rating | Compensating Control | Risk Accepted By | Risk Acceptance Date | Target Resolution | Resolved Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [Q1 YYYY] | [Description] | [High / Medium / Low] | [Description] | [Name, Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or Open] | [Open / Closed] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Access Review** | A periodic process to verify that user access rights remain appropriate, authorised, and aligned with the user's current role and business need |
| **Access Revocation** | The removal or disabling of a user's access rights to one or more systems, applications, or data repositories |
| **Least Privilege** | A security principle requiring that users are granted only the minimum access rights necessary to perform their job functions |
| **Orphaned Account** | A user account that remains active after the associated individual has left the organisation or no longer requires access |
| **Privileged Access** | Elevated system access rights that allow a user to perform administrative, configuration, or sensitive operations beyond standard user capabilities |
| **RACI** | Responsibility Assignment Matrix: Responsible, Accountable, Consulted, Informed |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for licensed financial institutions in Malaysia |
| **SLA** | Service Level Agreement — in this context, the defined timeframe within which an access revocation must be completed |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. Retain this record in accordance with [Organization Name]'s Records Retention Policy and BNM examination requirements.*

*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Last Review Date]*