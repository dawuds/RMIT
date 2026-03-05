# Access Request and Approval Logs

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

*This section defines the intent of this log artifact and the systems and data assets it governs.*

This document establishes the structure and requirements for maintaining **Access Request and Approval Logs** at [Organization Name]. These logs serve as the authoritative, system-generated record of all access requests submitted to, and approvals or rejections issued by, designated system owners and data owners across all technology assets within scope.

This artifact is **mandatory** under Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.53**, which requires financial institutions to maintain adequate access control records to demonstrate that access to systems and data is authorised, monitored, and periodically reviewed.

**Scope of Coverage:**

- All information systems, applications, databases, and infrastructure components classified under [Organization Name]'s IT asset register
- All privileged and non-privileged access requests raised by internal staff, contractors, third-party vendors, and system accounts
- All environments: Production, User Acceptance Testing (UAT), Development, and Disaster Recovery (DR)
- Access types including, but not limited to: read, write, execute, administrative, and remote access

**Out of Scope:**

- Physical access logs (refer to [Physical Access Control Policy – Document ID])
- Emergency/break-glass access (refer to [Emergency Access Procedure – Document ID])

---

## 2. Regulatory and Policy Context

*Cite the specific BNM RMiT clauses and internal policies that mandate this log. This section anchors the artifact to its compliance obligations.*

| Reference | Description |
|---|---|
| **BNM RMiT Clause 10.53** | Requires that access to systems and sensitive data is granted based on documented requests approved by the respective system or data owner, with logs retained for audit purposes. |
| **BNM RMiT Clause 10.50–10.52** | Establishes overarching access control principles including least privilege, need-to-know, and segregation of duties. |
| **[Organization Name] Information Security Policy** | [Document ID] – Internal policy governing access management lifecycle. |
| **[Organization Name] Data Classification Policy** | [Document ID] – Governs classification levels referenced in access decisions. |
| **Personal Data Protection Act 2010 (PDPA)** | Imposes obligations on processing personal data; access controls are a key safeguard. |

---

## 3. Asset / Item Identification

*Record the specific system, application, database, or data asset for which access was requested. Each log entry must be uniquely tied to an identifiable asset.*

Each access request log entry shall capture the following asset identification fields:

| Field | Description | Example |
|---|---|---|
| **Asset ID** | Unique identifier from the IT Asset Register | AST-2024-00142 |
| **Asset Name** | Common name of the system or dataset | Core Banking System – Finacle |
| **Asset Type** | Category of asset (Application / Database / Infrastructure / Network / Data Set) | Application |
| **Environment** | Deployment environment | Production |
| **Hosting Location** | On-premise / Private Cloud / Public Cloud / Hybrid | On-Premise – [Data Centre Name] |
| **Asset Criticality** | As rated in the Business Impact Assessment | Critical / High / Medium / Low |
| **Business Function** | Primary business domain served by the asset | Retail Banking Operations |

---

## 4. Classification and Categorisation

*Capture the data sensitivity classification and access tier of the asset at the time of the request. This determines the approval authority and retention requirements applicable to the log entry.*

### 4.1 Data Classification

| Classification Level | Description | Applicable to This Asset |
|---|---|---|
| **Strictly Confidential** | Customer financial data, credentials, cryptographic keys | ☐ Yes ☐ No |
| **Confidential** | Internal business data, employee records, system configurations | ☐ Yes ☐ No |
| **Internal** | General operational data not for public disclosure | ☐ Yes ☐ No |
| **Public** | Data approved for external release | ☐ Yes ☐ No |

*Record the classification as determined under [Organization Name]'s Data Classification Policy [Document ID].*

### 4.2 Access Tier Categorisation

| Field | Value |
|---|---|
| **Access Tier** | Privileged / Standard / Read-Only / Service Account |
| **Access Method** | Interactive Login / API / Database Client / Remote Desktop / VPN |
| **Multi-Factor Authentication Required** | Yes / No |
| **Privileged Access Management (PAM) Controlled** | Yes / No |

---

## 5. Owner and Custodian

*Identify the accountable parties for the asset at the time of the access request. Approval authority is derived from these roles.*

| Role | Name | Department | Contact |
|---|---|---|---|
| **System Owner** | [System Owner Name] | [Department] | [Email / Extension] |
| **Data Owner** | [Data Owner Name] | [Department] | [Email / Extension] |
| **System Custodian / Administrator** | [Custodian Name] | IT Operations | [Email / Extension] |
| **Information Security Focal Point** | [ISFP Name] | Information Security | [Email / Extension] |

> **Note:** The System Owner or Data Owner (as appropriate to the access type) is the designated approving authority per RMiT Clause 10.53. Approval by IT Operations alone, without owner sign-off, is not sufficient for assets classified Confidential or above.

---

## 6. Access Request Log Entries

*This section constitutes the primary system-generated log. Each row represents a single access request transaction. Logs are generated and retained in [Identity and Access Management System Name / ITSM Platform Name] and exported for quarterly review.*

### 6.1 Log Schema

| Field | Description |
|---|---|
| **Request ID** | Unique system-generated request identifier |
| **Request Date/Time** | Timestamp of request submission (UTC+8) |
| **Requester Name** | Full name of the individual or team raising the request |
| **Requester Employee ID** | Staff / Contractor / Vendor ID |
| **Requester Department** | Business unit of the requester |
| **Requester Role / Job Title** | Current role at time of request |
| **Asset ID** | Linked asset identifier (see Section 3) |
| **Access Type Requested** | Read / Write / Admin / Full / Custom |
| **Business Justification** | Stated reason for requiring access |
| **Requested Access Duration** | Permanent / Temporary (specify end date) |
| **Approver Name** | System Owner or Data Owner who actioned the request |
| **Approver Role** | Role of the approving authority |
| **Approval Decision** | Approved / Rejected / Escalated / Deferred |
| **Decision Date/Time** | Timestamp of approval decision (UTC+8) |
| **Decision Rationale** | Reason for rejection or conditions attached to approval |
| **Provisioned By** | IT Operations staff member who implemented access |
| **Provisioning Date/Time** | Timestamp of access provisioning |
| **Ticket Reference** | ITSM ticket number (e.g., INC/CHG/REQ number) |
| **Supporting Evidence Ref** | Reference to attached approval email, form, or workflow ID |

### 6.2 Sample Log Extract (Illustrative)

| Request ID | Request Date/Time | Requester | Asset | Access Type | Decision | Decision Date/Time | Approver |
|---|---|---|---|---|---|---|---|
| REQ-2024-00451 | 2024-03-01 09:14 | [Requester Name] | Core Banking – Finacle | Read-Only | Approved | 2024-03-01 11:32 | [System Owner] |
| REQ-2024-00452 | 2024-03-01 10:05 | [Requester Name] | Customer Database – CRM | Write | Rejected | 2024-03-01 14:20 | [Data Owner] |
| REQ-2024-00453 | 2024-03-02 08:45 | [Requester Name] | Payments Gateway | Admin | Approved | 2024-03-02 09:00 | [System Owner] |

*Actual log data is system-generated and exported from [IAM / ITSM System Name]. This table is illustrative only.*

---

## 7. Status and Lifecycle Stage

*Track the current state of each access grant through its full lifecycle, from request to revocation. This supports the quarterly access review and ensures no orphaned access persists.*

### 7.1 Access Lifecycle States

| Status | Definition |
|---|---|
| **Pending Approval** | Request submitted; awaiting owner decision |
| **Approved – Pending Provisioning** | Owner approved; IT Operations to implement |
| **Active** | Access provisioned and currently in use |
| **Suspended** | Access temporarily disabled (e.g., staff on leave, investigation) |
| **Pending Revocation** | Revocation initiated; pending de-provisioning |
| **Revoked** | Access removed; record retained for audit |
| **Expired** | Temporary access reached its end date and was auto-revoked |
| **Rejected** | Request denied by owner; access never provisioned |

### 7.2 Lifecycle Tracking Fields

| Field | Description |
|---|---|
| **Current Status** | Current lifecycle state from the table above |
| **Access Start Date** | Date access was provisioned |
| **Access End Date** | Scheduled expiry date (if temporary) |
| **Last Activity Date** | Date of last recorded use of the access (sourced from SIEM / access logs) |
| **Revocation Trigger** | Reason for revocation: Resignation / Role Change / Project End / Periodic Review / Policy Violation |
| **Revocation Date** | Date access was removed |
| **Revoked By** | IT Operations staff member who performed de-provisioning |

---

## 8. Last Review Date

*Record the most recent formal review of the access grant, as required by the quarterly access review cycle under RMiT Clause 10.53 and [Organization Name]'s Access Review Procedure [Document ID].*

### 8.1 Quarterly Access Review Record

| Review Period | Review Date | Reviewed By | Review Outcome | Action Taken | Completion Date |
|---|---|---|---|---|---|
| Q1 [Year] | [Date] | [Reviewer Name], [Role] | Confirmed / Modified / Revoked | [Description of action] | [Date] |
| Q2 [Year] | [Date] | [Reviewer Name], [Role] | Confirmed / Modified / Revoked | [Description of action] | [Date] |
| Q3 [Year] | [Date] | [Reviewer Name], [Role] | Confirmed / Modified / Revoked | [Description of action] | [Date] |
| Q4 [Year] | [Date] | [Reviewer Name], [Role] | Confirmed / Modified / Revoked | [Description of action] | [Date] |

### 8.2 Review Criteria

During each quarterly review, the reviewing authority shall assess:

- Whether the business justification for access remains valid
- Whether the access level is consistent with the requester's current role (least privilege)
- Whether the access has been actively used (dormant access to be revoked)
- Whether the asset classification or owner has changed since last review
- Whether any policy or regulatory changes affect the access grant

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for the access request and approval log process.*

| Activity | IT Operations Manager | System / Data Owner | Information Security | Internal Audit | Requester |
|---|---|---|---|---|---|
| Submit access request | I | I | I | – | **R** |
| Approve / Reject access request | I | **R/A** | C | – | – |
| Provision approved access | **R/A** | I | I | – | I |
| Maintain access request logs | **R/A** | I | C | I | – |
| Monitor access activity (continuous) | **R** | I | **A** | I | – |
| Conduct quarterly access review | C | **R/A** | C | I | – |
| Revoke access upon trigger event | **R/A** | I | I | – | – |
| Escalate policy exceptions | C | C | **R/A** | I | – |
| Annual compliance reporting | C | C | **R/A** | **A** | – |

**Key:** R – Responsible | A – Accountable | C – Consulted | I – Informed

---

## 10. Log Retention and Evidence Requirements

*This section defines how access request log data is retained to satisfy BNM audit and examination requirements.*

- **Retention Period:** Access request and approval logs shall be retained for a minimum of **[X] years** from the date of the access decision, in accordance with [Organization Name]'s Records Retention Schedule [Document ID] and BNM examination requirements.
- **Storage Location:** Logs are stored in [IAM System / ITSM Platform / SIEM] and archived to [Archive Location / Storage Platform].
- **Integrity Controls:** Log entries are write-protected post-generation. Any amendments require a formal Change Request and dual approval. Audit trail of amendments is maintained separately.
- **Availability for Audit:** Logs must be retrievable within **[X] business days** upon request by Internal Audit, External Auditor, or BNM examination team.
- **Export Format:** Logs are exportable in [CSV / PDF / XLSX] format. Quarterly review packs are exported and stored in [Document Management System – path/location].

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], IT Operations | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 11.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | __________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [Date] |
| Data Protection Officer (DPO) | [Name] | __________________ | [Date] |
| Head of Compliance | [Name] | __________________ | [Date] |
| Chief Information Officer (CIO) / Head of IT | [Name] | __________________ | [Date] |

---

## 12. References

| Reference | Description |
|---|---|
| **BNM RMiT Policy Document (BNM/RH/PD 028-119)** | Risk Management in Technology, Bank Negara Malaysia |
| **RMiT Clause 10.53** | Primary clause mandating access request and approval logging |
| **RMiT Clauses 10.50–10.52** | Access control principles: least privilege, need-to-know, segregation of duties |
| **Personal Data Protection Act 2010 (Act 709)** | Malaysian legislation governing personal data processing and safeguards |
| **[Organization Name] Information Security Policy** | [Document ID] |
| **[Organization Name] Access Management Procedure** | [Document ID] |
| **[Organization Name] Data Classification Policy** | [Document ID] |
| **[Organization Name] Privileged Access Management (PAM) Standard** | [Document ID] |
| **[Organization Name] Records Retention Schedule** | [Document ID] |
| **ISO/IEC 27001:2022, Annex A Control 5.18** | Access rights management (where ISO certification is in scope) |

---

## 13. Appendices

### Appendix A – Access Request Form Template

*A blank copy of the standard access request form used to initiate entries in this log. Attach the current approved version below or reference the form location in the ITSM system.*

> **Form Location:** [ITSM System URL / SharePoint Path / Document ID]
> **Form Version:** [Version Number]
> **Last Updated:** [Date]

---

### Appendix B – Approving Authority Matrix

*Defines the required approval authority based on asset classification and access tier. This matrix is referenced by the IAM system during workflow routing.*

| Asset Classification | Access Tier | Required Approver | Secondary Approver (if required) |
|---|---|---|---|
| Strictly Confidential | Privileged / Admin | Data Owner + CISO | CIO |
| Strictly Confidential | Standard / Read-Only | Data Owner | System Owner |
| Confidential | Privileged / Admin | System Owner + CISO | IT Operations Manager |
| Confidential | Standard / Read-Only | System Owner | – |
| Internal | All Tiers | System Owner | – |
| Public | All Tiers | System Custodian | – |

---

### Appendix C – Quarterly Access Review Checklist

*Checklist to be completed by the System/Data Owner during each quarterly access review cycle.*

- [ ] All active access grants reviewed against current staff list
- [ ] Dormant accounts (no activity for >[X] days) identified and revoked
- [ ] All temporary access grants checked against approved end dates
- [ ] Privileged access accounts verified against PAM vault records
- [ ] Service accounts reviewed; password rotation confirmed where applicable
- [ ] Access for resigned/transferred staff confirmed as revoked
- [ ] Third-party/vendor access reviewed against active contracts
- [ ] Review outcomes documented in Section 8.1 of this log
- [ ] Exceptions raised to Information Security for risk acceptance or remediation
- [ ] Completed review pack signed off and archived to [Document Location]

---

### Appendix D – Exception and Escalation Log

*Record any exceptions to the standard access approval process, including emergency access grants, business justification overrides, or owner-unavailability workarounds.*

| Exception ID | Date | Description | Raised By | Risk Accepted By | Review Date | Status |
|---|---|---|---|---|---|---|
| EXC-[Year]-[Seq] | [Date] | [Description of exception] | [Name] | [CISO / CIO Name] | [Date] | Open / Closed |

---

*This document is classified **Confidential** and is intended for internal use by [Organization Name] only. Unauthorised disclosure is prohibited.*

*Last generated: [Date] | Document ID: [Document ID] | Owner: IT Operations Manager*