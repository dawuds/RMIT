# De-provisioning Compliance Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Compliance Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official evidence record for user access de-provisioning activities undertaken by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document. Specifically, it provides a structured and auditable record demonstrating that access rights to systems, applications, and data assets are revoked within **24 hours of employee or contractor termination**, in compliance with **RMiT Clause 10.53**.

These records are classified as mandatory compliance evidence and must be retained and made available for regulatory review, internal audit, and third-party assurance assessments.

### 1.2 Scope

This template applies to:

- All full-time employees, contract staff, third-party vendors, and privileged users whose access to [Organization Name] systems is subject to revocation upon termination of employment or engagement
- All information systems, applications, infrastructure components, and data repositories managed or operated by [Organization Name]
- All access types including logical access, privileged access, remote access, and physical access to data centres where applicable
- De-provisioning events occurring within [Organization Name]'s Malaysian operations, as regulated by BNM under the Financial Services Act 2013 (FSA) and Islamic Financial Services Act 2013 (IFSA)

### 1.3 Out of Scope

- Access changes resulting from role transfers or promotions (governed separately under the Access Review Policy)
- Temporary access suspensions not related to termination events

---

## 2. Asset / Item Identification

*Provide unique identification details for each system or access asset from which the user has been de-provisioned. Each row in the tracking log must reference a specific, identifiable asset.*

### 2.1 De-provisioning Event Reference

| Field | Value |
|---|---|
| **De-provisioning Record ID** | [DP-YYYY-NNNN] |
| **Associated Termination Reference** | [HR Termination Reference / Ticket ID] |
| **User Full Name** | [User Full Name] |
| **User ID / Staff Number** | [User ID / Staff Number] |
| **User Type** | [ ] Employee &nbsp; [ ] Contractor &nbsp; [ ] Vendor &nbsp; [ ] Privileged User |
| **Department / Business Unit** | [Department / Business Unit] |
| **Termination Effective Date & Time** | [DD/MM/YYYY HH:MM] |
| **De-provisioning Initiated Date & Time** | [DD/MM/YYYY HH:MM] |
| **De-provisioning Completed Date & Time** | [DD/MM/YYYY HH:MM] |
| **Elapsed Time (Hours)** | [Calculated: Must be ≤ 24 hours] |
| **SLA Compliance Status** | [ ] Compliant (≤ 24 hrs) &nbsp; [ ] Breached (> 24 hrs) |

### 2.2 Systems and Access Assets De-provisioned

*List every system, application, and access point from which the user's access was removed. Include all logical and physical access entitlements. Ensure no orphaned accounts remain.*

| # | System / Application Name | System ID / Code | Access Type | Account / Username | De-provisioning Action Taken | Completed Date & Time | Completed By |
|---|---|---|---|---|---|---|---|
| 1 | [System Name] | [SYS-ID] | [Logical / Privileged / Remote / Physical] | [Username] | [Disabled / Deleted / Revoked] | [DD/MM/YYYY HH:MM] | [Staff Name] |
| 2 | [System Name] | [SYS-ID] | [Logical / Privileged / Remote / Physical] | [Username] | [Disabled / Deleted / Revoked] | [DD/MM/YYYY HH:MM] | [Staff Name] |
| 3 | [System Name] | [SYS-ID] | [Logical / Privileged / Remote / Physical] | [Username] | [Disabled / Deleted / Revoked] | [DD/MM/YYYY HH:MM] | [Staff Name] |
| 4 | Active Directory / LDAP | [AD-CORP] | Directory Account | [username@domain] | [Disabled / Deleted] | [DD/MM/YYYY HH:MM] | [Staff Name] |
| 5 | Email / Collaboration Platform | [EMAIL-SYS] | Logical | [email@domain] | [Disabled / Redirected / Deleted] | [DD/MM/YYYY HH:MM] | [Staff Name] |
| 6 | VPN / Remote Access | [VPN-SYS] | Remote Access | [Username] | [Disabled / Revoked] | [DD/MM/YYYY HH:MM] | [Staff Name] |
| 7 | Cloud Platforms (if applicable) | [CLOUD-ID] | Cloud IAM | [Username / Role ARN] | [Disabled / Deleted / Keys Revoked] | [DD/MM/YYYY HH:MM] | [Staff Name] |
| 8 | Physical Access / Badge | [PHYS-ACC] | Physical | [Badge ID] | [Deactivated / Surrendered] | [DD/MM/YYYY HH:MM] | [Staff Name] |

---

## 3. Classification and Categorisation

*Classify the nature of the de-provisioning event and the sensitivity of the systems involved. This supports risk-tiered prioritisation and regulatory reporting.*

### 3.1 Termination Type

| Field | Value |
|---|---|
| **Termination Category** | [ ] Voluntary Resignation &nbsp; [ ] Involuntary Termination &nbsp; [ ] Retirement &nbsp; [ ] Contract Expiry &nbsp; [ ] Immediate Dismissal &nbsp; [ ] Other: [Specify] |
| **Risk Classification of Termination** | [ ] High Risk (Involuntary / Immediate) &nbsp; [ ] Medium Risk &nbsp; [ ] Low Risk |
| **Escalated to Security Team** | [ ] Yes &nbsp; [ ] No |
| **Reason for Escalation (if applicable)** | [Describe if escalated] |

### 3.2 Data Sensitivity of Affected Systems

*Classify each system according to [Organization Name]'s data classification policy to ensure appropriate urgency of de-provisioning was applied.*

| System / Application Name | Data Classification | Regulatory Sensitivity | Priority Tier |
|---|---|---|---|
| [System Name] | [ ] Restricted &nbsp; [ ] Confidential &nbsp; [ ] Internal &nbsp; [ ] Public | [ ] PDPA Personal Data &nbsp; [ ] Financial Data &nbsp; [ ] None | [ ] Critical &nbsp; [ ] High &nbsp; [ ] Medium &nbsp; [ ] Low |
| [System Name] | [ ] Restricted &nbsp; [ ] Confidential &nbsp; [ ] Internal &nbsp; [ ] Public | [ ] PDPA Personal Data &nbsp; [ ] Financial Data &nbsp; [ ] None | [ ] Critical &nbsp; [ ] High &nbsp; [ ] Medium &nbsp; [ ] Low |
| [System Name] | [ ] Restricted &nbsp; [ ] Confidential &nbsp; [ ] Internal &nbsp; [ ] Public | [ ] PDPA Personal Data &nbsp; [ ] Financial Data &nbsp; [ ] None | [ ] Critical &nbsp; [ ] High &nbsp; [ ] Medium &nbsp; [ ] Low |

### 3.3 Privileged Access Flag

| Field | Value |
|---|---|
| **Did user hold Privileged / Administrative Access?** | [ ] Yes &nbsp; [ ] No |
| **Privileged Systems Affected** | [List privileged systems, e.g., domain admin, database DBA, cloud root] |
| **Privileged Access Review Completed** | [ ] Yes &nbsp; [ ] No &nbsp; [ ] Not Applicable |
| **PAM Vault Credentials Rotated** | [ ] Yes &nbsp; [ ] No &nbsp; [ ] Not Applicable |

---

## 4. Owner and Custodian

*Identify the accountable and responsible parties for the de-provisioning event. This section establishes the chain of accountability required for regulatory evidence purposes.*

### 4.1 Accountable Parties

| Role | Name | Staff ID | Department | Contact |
|---|---|---|---|---|
| **Process Owner** | Chief Compliance Officer | [Staff ID] | Compliance | [Email] |
| **IT / IAM Administrator (Action Party)** | [Name] | [Staff ID] | IT / Cybersecurity | [Email] |
| **HR Initiator** | [Name] | [Staff ID] | Human Resources | [Email] |
| **Line Manager (Confirming Party)** | [Name] | [Staff ID] | [Department] | [Email] |
| **System Custodian** | [Name] | [Staff ID] | [Department] | [Email] |
| **Information Security Officer** | [Name] | [Staff ID] | Information Security | [Email] |

### 4.2 Notification and Trigger Chain

*Document how the de-provisioning request was initiated and communicated to ensure the audit trail is complete from HR notification to IT execution.*

| Step | Action | Responsible Party | Date & Time | Reference / Evidence |
|---|---|---|---|---|
| 1 | HR issues termination notification | HR Department | [DD/MM/YYYY HH:MM] | [Ticket / Email Reference] |
| 2 | IT / IAM team receives de-provisioning request | IT / IAM Administrator | [DD/MM/YYYY HH:MM] | [Ticket / Email Reference] |
| 3 | De-provisioning tasks assigned and executed | IT / IAM Administrator | [DD/MM/YYYY HH:MM] | [Ticket / Email Reference] |
| 4 | Completion confirmed and record closed | Information Security Officer | [DD/MM/YYYY HH:MM] | [Ticket / Email Reference] |
| 5 | Record filed for compliance evidence | Chief Compliance Officer | [DD/MM/YYYY HH:MM] | [Document ID] |

---

## 5. Status and Lifecycle Stage

*Record the current status of the de-provisioning event and track its progress through each lifecycle stage. This section is the primary operational log for the record.*

### 5.1 Current Status

| Field | Value |
|---|---|
| **Overall De-provisioning Status** | [ ] Pending &nbsp; [ ] In Progress &nbsp; [ ] Completed &nbsp; [ ] Partially Completed &nbsp; [ ] Escalated |
| **24-Hour SLA Met** | [ ] Yes &nbsp; [ ] No — Breach Reason: [Specify] |
| **Outstanding Actions (if any)** | [Describe any pending access removal items and expected completion date] |
| **Breach Incident Raised** | [ ] Yes — Incident Reference: [INC-NNNN] &nbsp; [ ] No &nbsp; [ ] Not Applicable |

### 5.2 Lifecycle Stage Checklist

*Verify that all mandatory lifecycle stages have been completed. All items must be marked complete before this record is considered closed.*

| # | Lifecycle Stage | Status | Completed By | Completed Date |
|---|---|---|---|---|
| 1 | HR termination notification received | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 2 | De-provisioning ticket/task created | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 3 | Active Directory / SSO account disabled | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 4 | Email account disabled / redirected | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 5 | VPN and remote access revoked | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 6 | Application-level access revoked | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 7 | Privileged / admin credentials changed (if applicable) | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 8 | Cloud IAM roles and API keys revoked | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 9 | Physical access badge deactivated | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 10 | Equipment and assets returned / confirmed | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 11 | Completion verified by Information Security | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |
| 12 | Record filed as compliance evidence | [ ] Complete &nbsp; [ ] Pending &nbsp; [ ] N/A | [Name] | [DD/MM/YYYY] |

### 5.3 Exceptions and Deviations

*Document any deviations from the standard 24-hour de-provisioning SLA, including justification and remediation actions taken. All exceptions require formal approval.*

| Exception ID | System / Access Affected | Reason for Exception | Risk Assessment | Approved By | Approval Date | Remediation Date |
|---|---|---|---|---|---|---|
| [EXC-001] | [System Name] | [Reason, e.g., system unavailability, pending approval] | [ ] High &nbsp; [ ] Medium &nbsp; [ ] Low | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY] |

---

## 6. Last Review Date

*Record the most recent review of this de-provisioning record to confirm completeness, accuracy, and continued regulatory compliance. Records must be reviewed at minimum per-event at closure and as part of quarterly batch reviews.*

### 6.1 Record Review Log

| Review Type | Reviewed By | Role | Review Date | Outcome | Notes |
|---|---|---|---|---|---|
| Per-event closure review | [Name] | [Role] | [DD/MM/YYYY] | [ ] Approved &nbsp; [ ] Requires Update &nbsp; [ ] Escalated | [Notes] |
| Quarterly compliance review | [Name] | Chief Compliance Officer | [DD/MM/YYYY] | [ ] Approved &nbsp; [ ] Requires Update &nbsp; [ ] Escalated | [Notes] |
| Internal audit review | [Name] | Internal Auditor | [DD/MM/YYYY] | [ ] No Findings &nbsp; [ ] Findings Raised | [Audit Reference] |
| Regulatory / external review | [Name] | [External Auditor / BNM Examiner] | [DD/MM/YYYY] | [ ] No Findings &nbsp; [ ] Findings Raised | [Reference] |

### 6.2 Next Scheduled Review

| Field | Value |
|---|---|
| **Next Quarterly Review Date** | [DD/MM/YYYY] |
| **Assigned Reviewer** | [Name / Role] |
| **Review Trigger** | [ ] Scheduled Quarterly &nbsp; [ ] Post-Incident &nbsp; [ ] Regulatory Request &nbsp; [ ] Policy Change |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for de-provisioning compliance record management. All parties must be aware of their obligations under this framework.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Chief Compliance Officer | Information Security Officer | IT / IAM Administrator | HR Department | Line Manager | Internal Audit | System Custodian |
|---|---|---|---|---|---|---|---|
| Issue termination notification | I | I | I | **R/A** | C | — | — |
| Initiate de-provisioning request | I | C | **R** | **A** | C | — | — |
| Execute access removal (all systems) | I | C | **R/A** | I | I | — | C |
| Verify privileged access removal | C | **R/A** | R | — | — | — | C |
| Confirm physical access deactivation | I | C | I | **R** | I | — | — |
| Review and sign off de-provisioning record | **A** | **R** | C | I | I | I | — |
| Manage SLA exceptions and escalations | **A** | R | C | I | I | I | — |
| File record as compliance evidence | **R/A** | C | I | I | — | I | — |
| Conduct quarterly batch review | **R/A** | C | I | I | — | C | — |
| Conduct internal audit of records | I | C | I | I | — | **R/A** | — |
| Report to BNM / regulators (if required) | **R/A** | C | — | — | — | C | — |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial release |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 8.2 Approval Sign-Off

*This document requires formal approval from the following designated approvers before it may be used as regulatory compliance evidence.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Compliance Officer | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [DD/MM/YYYY] |
| Head of Information Technology | [Name] | __________________ | [DD/MM/YYYY] |
| Head of Human Resources | [Name] | __________________ | [DD/MM/YYYY] |
| Internal Auditor (Reviewer) | [Name] | __________________ | [DD/MM/YYYY] |

---

## 9. References

The following regulatory instruments, policy documents, and standards are directly applicable to this compliance artifact:

| Reference | Description | Clause / Section |
|---|---|---|
| BNM RMiT Policy Document | Bank Negara Malaysia Risk Management in Technology | **Clause 10.53** — User access de-provisioning must occur within 24 hours of termination |
| BNM RMiT Policy Document | Bank Negara Malaysia Risk Management in Technology | Clause 10.49–10.52 — User access management and access review requirements |
| Financial Services Act 2013 (FSA) | Primary legislation governing licensed financial institutions in Malaysia | Sections on technology risk governance |
| Islamic Financial Services Act 2013 (IFSA) | Primary legislation governing Islamic financial institutions in Malaysia | Sections on technology risk governance |
| Personal Data Protection Act 2010 (PDPA) | Malaysian personal data protection legislation | Obligations regarding access controls over personal data |
| ISO/IEC 27001:2022 | International standard for information security management | A.5.18 — Access rights; A.6.5 — Responsibilities after employment termination |
| NIST SP 800-53 Rev. 5 | Security and Privacy Controls for Information Systems | AC-2 — Account Management; PS-4 — Personnel Termination |
| [Organization Name] Identity and Access Management Policy | Internal policy governing provisioning and de-provisioning | [Internal Policy Reference] |
| [Organization Name] Human Resources Termination Policy | Internal policy governing employee offboarding procedures | [Internal Policy Reference] |

---

## 10. Appendices

### Appendix A: De-provisioning SLA Requirements Summary

*Reference summary of mandatory SLA timelines derived from BNM RMiT Clause 10.53 and [Organization Name]'s internal policy.*

| User Category | Maximum De-provisioning Time | Priority |
|---|---|---|
| Involuntary / Immediate Termination | Immediate (same day, < 2 hours recommended) | Critical |
| Voluntary Resignation (with notice) | Within 24 hours of effective termination date | High |
| Contract Expiry | Within 24 hours of contract end date | High |
| Retirement | Within 24 hours of effective retirement date | High |
| Third-Party / Vendor Access | Within 24 hours of engagement termination | High |

### Appendix B: System Inventory Reference

*[Attach or reference the organization's authoritative system inventory register here. This should enumerate all systems subject to de-provisioning requirements, their custodians, and their data classification.]*

> **See:** [Organization Name] System Inventory Register — Document ID: [DOC-SYS-INV-001]

### Appendix C: Evidence Retention Schedule

*De-provisioning compliance records are classified as mandatory regulatory evidence and must be retained in accordance with the following schedule.*

| Record Type | Minimum Retention Period | Storage Location | Disposal Authority |
|---|---|---|---|
| De-provisioning Compliance Records | 7 years (post-event) | [Secure Document Repository / GRC System] | Chief Compliance Officer |
| Supporting Ticket / Helpdesk Logs | 7 years (post-event) | [IT Service Management System] | Head of IT |
| HR Termination Notifications | 7 years (post-event) | [HR Document Management System] | Head of Human Resources |
| Exception and Escalation Records | 7 years (post-event) | [Secure Document Repository / GRC System] | Chief Compliance Officer |

### Appendix D: Glossary

| Term | Definition |
|---|---|
| **De-provisioning** | The process of revoking a user's access rights to systems, applications, and data upon termination of their employment or engagement. |
| **Privileged Access** | Elevated access rights that permit administrative or superuser control over systems, infrastructure, or data. |
| **IAM** | Identity and Access Management — the framework of policies and technologies to manage digital identities and access rights. |
| **RMiT** | Risk Management in Technology — BNM's policy document establishing technology risk management requirements for financial institutions. |
| **SLA** | Service Level Agreement — a defined time-bound commitment for completing a specified action. |
| **Orphaned Account** | A user account that remains active in a system after the associated individual has left the organisation. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix used for process governance. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data. |

### Appendix E: Quarterly Batch Review Checklist

*[Attach completed quarterly review checklist here. The quarterly review should confirm that all de-provisioning events in the review period were completed within SLA, exceptions were properly documented, and no orphaned accounts were identified.]*

| # | Review Item | Status | Notes |
|---|---|---|---|
| 1 | All termination events in period have corresponding de-provisioning records | [ ] Pass &nbsp; [ ] Fail &nbsp; [ ] N/A | |
| 2 | All records confirm ≤ 24-hour SLA compliance | [ ] Pass &nbsp; [ ] Fail &nbsp; [ ] N/A | |
| 3 | All SLA breaches have documented exceptions with approvals | [ ] Pass &nbsp; [ ] Fail &nbsp; [ ] N/A | |
| 4 | No orphaned accounts identified in systems scan | [ ] Pass &nbsp; [ ] Fail &nbsp; [ ] N/A | |
| 5 | Privileged access rotation confirmed for all relevant terminations | [ ] Pass &nbsp; [ ] Fail &nbsp; [ ] N/A | |
| 6 | Records archived to compliance evidence repository | [ ] Pass &nbsp; [ ] Fail &nbsp; [ ] N/A | |
| **Quarterly Review Sign-Off** | [Name / Chief Compliance Officer] | | [DD/MM/YYYY] |

---

*This document is classified as **Confidential**. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. All copies must be controlled and accounted for in accordance with [Organization Name]'s document control policy.*

*For queries regarding this document, contact the Chief Compliance Officer at [compliance@organizationname.com.my].*