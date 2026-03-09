# Privileged Access Review Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset/Item Identification](#2-assetitem-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Status and Lifecycle Stage](#5-status-and-lifecycle-stage)
6. [Last Review Date](#6-last-review-date)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the quarterly Privileged Access Review Record for [Organization Name], documenting the systematic review of all privileged access rights across information systems, applications, and infrastructure. This record supports compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy, specifically Clause 10.57, which mandates periodic review of privileged access to ensure that access rights remain appropriate, authorised, and aligned with the principle of least privilege.

This record is a system-generated log artifact maintained by the Identity and Access Management (IAM) function and must be retained in accordance with [Organization Name]'s record retention policy.

### 1.2 Scope

This review record covers all privileged accounts across the following in-scope domains:

- Operating systems (servers, endpoints, network devices)
- Database management systems
- Applications and middleware
- Cloud platforms and hosted services
- Security tools and monitoring platforms
- Network infrastructure and perimeter controls

**Review Period:** [Q1/Q2/Q3/Q4] [YYYY] — [Start Date] to [End Date]

**In-Scope Systems:** [List all in-scope systems or reference the Technology Asset Register]

**Out-of-Scope:** [Document any exclusions and justification, e.g., systems under decommission, disaster recovery standby instances]

---

## 2. Asset/Item Identification

*This section records the identification details of each privileged account or access right subject to review. Each entry must correspond to a registered asset or system in the Technology Asset Register. Ensure all active privileged accounts are enumerated prior to commencing the review.*

### 2.1 Privileged Account Inventory

| # | Account ID / Username | Account Type | Associated System / Application | System Hostname / IP | Environment | Date Identified | Source of Record |
|---|---|---|---|---|---|---|---|
| 1 | [account_id_001] | [Local Admin / Domain Admin / Service Account / etc.] | [System/Application Name] | [Hostname or IP] | [Production / UAT / DR] | [DD-MMM-YYYY] | [AD / IAM System / Manual] |
| 2 | [account_id_002] | | | | | | |
| 3 | [account_id_003] | | | | | | |
| N | | | | | | | |

> **Total Privileged Accounts Identified:** [Number]

### 2.2 Account Type Definitions

| Account Type | Description |
|---|---|
| **Domain Admin** | Accounts with administrative privileges across the domain |
| **Local Admin** | Accounts with administrative rights on a single system |
| **Service Account** | Non-human accounts used by applications or services |
| **Database Admin (DBA)** | Accounts with elevated database-level privileges |
| **Network Admin** | Accounts with privileged access to network devices |
| **Security Admin** | Accounts with access to security tools and SIEM platforms |
| **Cloud Admin** | Accounts with elevated privileges in cloud environments |
| **Emergency/Break-Glass** | Accounts reserved for emergency use only |

---

## 3. Classification and Categorisation

*This section documents the classification and risk categorisation assigned to each privileged account. Classification must align with [Organization Name]'s Information Classification Policy and BNM RMiT risk-tiering requirements. Higher-risk accounts require more stringent controls and more frequent sub-reviews.*

### 3.1 Risk Classification Criteria

| Classification | Description | Review Frequency |
|---|---|---|
| **Critical** | Accounts with unrestricted or domain-wide access; can affect system integrity or confidentiality at scale | Monthly sub-review required; formal quarterly review |
| **High** | Accounts with elevated privileges on production or sensitive systems | Quarterly review |
| **Medium** | Accounts with elevated privileges on non-production or lower-sensitivity systems | Quarterly review |
| **Low** | Service accounts with limited, predefined scope | Quarterly review; automated monitoring preferred |

### 3.2 Privileged Account Classification Register

| # | Account ID / Username | Risk Classification | Justification for Classification | Data Sensitivity | Regulatory Relevance |
|---|---|---|---|---|---|
| 1 | [account_id_001] | [Critical / High / Medium / Low] | [Reason for classification] | [e.g., Customer PII, Financial Data] | [PDPA / RMiT / Internal Policy] |
| 2 | [account_id_002] | | | | |
| N | | | | | |

### 3.3 Classification Summary

| Classification | Count | % of Total |
|---|---|---|
| Critical | [Number] | [%] |
| High | [Number] | [%] |
| Medium | [Number] | [%] |
| Low | [Number] | [%] |
| **Total** | **[Number]** | **100%** |

---

## 4. Owner and Custodian

*This section identifies the designated owner (business accountability) and custodian (technical stewardship) for each privileged account. Ownership must be confirmed during every quarterly review cycle. Accounts without a confirmed owner must be escalated for immediate remediation.*

### 4.1 Ownership Confirmation Record

| # | Account ID / Username | Business Owner | Business Owner Department | Technical Custodian | Custodian Department | Ownership Confirmed (Y/N) | Confirmation Date | Remarks |
|---|---|---|---|---|---|---|---|---|
| 1 | [account_id_001] | [Full Name] | [Department] | [Full Name] | [IT / Infra / Cloud Ops] | [Y/N] | [DD-MMM-YYYY] | |
| 2 | [account_id_002] | | | | | | | |
| N | | | | | | | |

### 4.2 Ownership Exceptions

*Document any accounts where ownership could not be confirmed and the action taken.*

| # | Account ID / Username | Reason Ownership Unconfirmed | Escalated To | Escalation Date | Resolution Target Date | Resolution Status |
|---|---|---|---|---|---|---|
| 1 | [account_id_001] | [Staff resigned / Role changed / etc.] | [CISO / IT Head] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Open / Resolved / Pending] |

---

## 5. Status and Lifecycle Stage

*This section captures the current operational status and lifecycle stage of each privileged account. The review must confirm that accounts are in an expected state and that dormant, orphaned, or expired accounts are promptly actioned. All findings must be tracked through to remediation.*

### 5.1 Account Status Definitions

| Status | Description | Required Action |
|---|---|---|
| **Active** | Account is in use and access is current and valid | Confirm access is still required; validate entitlements |
| **Dormant** | Account has not been used within the defined dormancy threshold (e.g., 30 days) | Disable immediately; investigate and remediate |
| **Orphaned** | Account has no confirmed owner or has been associated with a departed staff member | Disable and delete; raise incident if data access risk exists |
| **Suspended** | Account temporarily disabled pending investigation or HR action | Confirm suspension rationale; track to resolution |
| **Pending Deletion** | Account approved for removal but deletion not yet executed | Delete within agreed SLA; confirm and record completion |
| **Decommissioned** | Account has been formally removed from the system | Confirm removal; archive record |

### 5.2 Lifecycle Stage Definitions

| Lifecycle Stage | Description |
|---|---|
| **Provisioning** | Account has been requested and is being set up |
| **Active Use** | Account is operational and in regular use |
| **Review Pending** | Account is due for or undergoing access review |
| **Modification** | Access rights are being updated or changed |
| **Suspension** | Account has been temporarily disabled |
| **Decommission** | Account is being removed from the environment |

### 5.3 Account Status and Lifecycle Review Record

| # | Account ID / Username | Current Status | Lifecycle Stage | Last Login Date | Dormancy Threshold Exceeded (Y/N) | Access Still Required (Y/N) | Reviewer Decision | Action Required | Action Due Date |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [account_id_001] | [Active] | [Active Use] | [DD-MMM-YYYY] | [N] | [Y] | [Retain / Revoke / Modify] | [None / Disable / Delete] | [DD-MMM-YYYY] |
| 2 | [account_id_002] | | | | | | | | |
| N | | | | | | | | | |

### 5.4 Remediation Tracker

| # | Account ID | Issue Identified | Severity | Assigned To | Date Raised | Target Resolution Date | Resolution Date | Resolution Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | [account_id_001] | [Dormant account not disabled] | [High] | [Name / Team] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Ticket No. / Screenshot Ref.] | [Open / Closed] |

---

## 6. Last Review Date

*This section records the review history for each privileged account, providing an auditable trail of when each account was last examined, by whom, and what the outcome was. The review date must be updated at the conclusion of each quarterly cycle.*

### 6.1 Review History Log

| # | Account ID / Username | Previous Review Date | Previous Review Outcome | Current Review Date | Current Reviewer | Current Review Outcome | Next Scheduled Review | Supporting Evidence Ref. |
|---|---|---|---|---|---|---|---|---|
| 1 | [account_id_001] | [DD-MMM-YYYY] | [No Change / Revoked / Modified] | [DD-MMM-YYYY] | [Reviewer Name] | [No Change / Revoked / Modified / Escalated] | [DD-MMM-YYYY] | [Ticket / Report Ref.] |
| 2 | [account_id_002] | | | | | | | |
| N | | | | | | | | |

### 6.2 Review Cycle Summary

| Review Quarter | Review Period | Total Accounts Reviewed | Accounts Retained | Accounts Revoked | Accounts Modified | Accounts Escalated | Review Completion Date | IAM Manager Sign-Off |
|---|---|---|---|---|---|---|---|---|
| [Q1 YYYY] | [DD-MMM-YYYY] to [DD-MMM-YYYY] | [Number] | [Number] | [Number] | [Number] | [Number] | [DD-MMM-YYYY] | [Name / Signature] |
| [Q2 YYYY] | | | | | | | | |
| [Q3 YYYY] | | | | | | | | |
| [Q4 YYYY] | | | | | | | | |

### 6.3 Review Findings Summary

*Summarise any material findings or systemic issues identified during this review cycle.*

| # | Finding | Affected Accounts | Root Cause | Risk Rating | Recommended Remediation | Owner | Target Date |
|---|---|---|---|---|---|---|---|
| 1 | [Description of finding] | [Account IDs or count] | [Root cause analysis] | [Critical / High / Medium / Low] | [Recommended action] | [Name / Team] | [DD-MMM-YYYY] |

---

## 7. Roles and Responsibilities

*This section defines the accountability and responsibility framework for the Privileged Access Review process, aligned with [Organization Name]'s governance model and BNM RMiT requirements.*

### 7.1 RACI Matrix

| Activity | IAM Manager | System Owner | IT Security | Internal Audit | CISO | Business Unit Head |
|---|---|---|---|---|---|---|
| Initiate quarterly review cycle | **A/R** | I | C | I | I | I |
| Generate privileged account inventory | **A/R** | C | C | I | I | I |
| Confirm account ownership | C | **A/R** | C | I | I | R |
| Classify and categorise accounts | **A/R** | C | C | I | I | I |
| Review and certify account entitlements | C | **A/R** | C | I | I | C |
| Execute access revocations and modifications | **R** | C | R | I | I | I |
| Escalate unresolved issues | **R** | C | R | I | **A** | C |
| Approve review completion | C | C | C | I | **A** | I |
| Maintain and archive review records | **A/R** | I | C | C | I | I |
| Independent verification / sampling | I | I | I | **A/R** | I | I |
| Report to management / board committee | C | I | C | C | **A/R** | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 7.2 Role Descriptions

| Role | Responsibilities |
|---|---|
| **IAM Manager** | Owns the privileged access review process; ensures reviews are completed on schedule; maintains records; reports findings to CISO |
| **System Owner** | Confirms access requirements for their systems; certifies that assigned privileges remain appropriate and necessary |
| **IT Security** | Provides technical validation; monitors for anomalies; supports investigation of exceptions |
| **Internal Audit** | Independently samples and verifies review records; reports audit findings to the Audit Committee |
| **CISO** | Approves review completion; escalates material findings to Senior Management; owns the overall IAM framework |
| **Business Unit Head** | Confirms business justification for privileged access within their domain; approves access extensions where required |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name] | Initial version |
| [1.1] | [DD-MMM-YYYY] | [Author Name] | [Description of changes] |

### 8.2 Approval Sign-Off

*This record must be approved by the designated approvers at the conclusion of each quarterly review cycle before it is filed.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Full Name] | [Signature] | [DD-MMM-YYYY] |
| CISO / Head of IT Security | [Full Name] | [Signature] | [DD-MMM-YYYY] |
| Chief Risk Officer (if applicable) | [Full Name] | [Signature] | [DD-MMM-YYYY] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| **BNM RMiT** | Clause 10.57 | Requires financial institutions to periodically review privileged access rights to ensure they remain appropriate and authorised |
| **BNM RMiT** | Clause 10.53–10.57 | Access control requirements including segregation of duties, minimum necessary access, and access lifecycle management |
| **BNM RMiT** | Clause 10.49 | Technology risk governance and accountability for IT systems and access controls |
| **PDPA 2010** | Section 5 – Security Principle | Requires practical steps to protect personal data from unauthorised access, including access control management |
| **[Organization Name] IAM Policy** | [Policy Reference No.] | Internal Identity and Access Management Policy |
| **[Organization Name] Information Security Policy** | [Policy Reference No.] | Internal Information Security Policy governing access controls |
| **[Organization Name] Technology Asset Register** | [Register Reference No.] | Registry of all technology assets in scope for privileged access review |
| **ISO/IEC 27001:2022** | Control A.8.2 | Privileged access rights management best practice |

---

## 10. Appendices

### Appendix A — Privileged Account Discovery Methodology

*Describe the technical methods and tools used to enumerate privileged accounts during this review cycle (e.g., Active Directory queries, PAM tool exports, manual system reviews).*

| # | Discovery Method | Tool / Script Used | Systems Covered | Date Executed | Output Reference |
|---|---|---|---|---|---|
| 1 | [Active Directory Query] | [PowerShell / AD Audit Tool] | [Domain Name] | [DD-MMM-YYYY] | [Report Ref.] |
| 2 | [PAM System Export] | [CyberArk / BeyondTrust / etc.] | [All vaulted accounts] | [DD-MMM-YYYY] | [Report Ref.] |
| 3 | [Manual System Review] | [N/A] | [List specific systems] | [DD-MMM-YYYY] | [Completed checklist ref.] |

### Appendix B — Access Revocation and Modification Evidence

*Attach or reference evidence confirming that all access revocations and modifications identified during this review have been executed.*

| # | Account ID | Action Taken | Executed By | Execution Date | Supporting Evidence (Ticket / Screenshot Ref.) | Verified By | Verification Date |
|---|---|---|---|---|---|---|---|
| 1 | [account_id_001] | [Revoked / Modified / Disabled] | [Name] | [DD-MMM-YYYY] | [ITSM Ticket No. / Ref.] | [Name] | [DD-MMM-YYYY] |

### Appendix C — Exception Register

*Document any accounts that were granted an exception to the standard review outcome (e.g., access retained despite dormancy) with formal justification and time-bound approval.*

| # | Account ID | Exception Type | Business Justification | Risk Acceptance Owner | Exception Approved By | Approval Date | Exception Expiry Date | Review at Expiry |
|---|---|---|---|---|---|---|---|---|
| 1 | [account_id_001] | [Dormancy Exception] | [Justification text] | [Business Owner Name] | [CISO Name] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Y/N] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Privileged Access** | Access rights that exceed standard user permissions, granting elevated control over systems, applications, or data |
| **Least Privilege** | The principle of granting only the minimum access rights necessary for a user or process to perform its function |
| **Orphaned Account** | An account that no longer has an active, identified owner, typically resulting from staff departure or role change |
| **Dormant Account** | An account that has not been accessed within the organisation's defined dormancy threshold |
| **Break-Glass Account** | An emergency access account with elevated privileges, used only in predefined emergency scenarios and subject to strict controls |
| **PAM** | Privileged Access Management — systems and processes for managing, monitoring, and auditing privileged account usage |
| **IAM** | Identity and Access Management — the framework of policies, processes, and technologies for managing digital identities |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RMiT** | Risk Management in Technology — Bank Negara Malaysia's policy document governing technology risk in financial institutions |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. Retain in accordance with [Organization Name]'s Record Retention Schedule.*