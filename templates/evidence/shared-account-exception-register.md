# Shared Account Exception Register

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

**Organisation:** [Organisation Name]
**Effective Date:** [Effective Date]

---

## 1. Purpose and Scope

### 1.1 Purpose

This register serves as the authoritative record of all approved shared privileged accounts in use within [Organisation Name]. It documents the business justification, compensating controls, ownership, and lifecycle status of each exception, supporting accountability and audit traceability in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document.

This register is classified as a **mandatory evidence artifact** under RMiT and must be maintained as a current, accurate, and auditable record.

### 1.2 Regulatory Basis

This document satisfies the requirements of:

- **BNM RMiT Policy Document, Clause 10.56** — which mandates that financial institutions establish controls over privileged access, including the management of shared accounts, and ensure that compensating controls are in place where individual accountability cannot be achieved through technical means.

### 1.3 Scope

This register covers:

- All shared privileged accounts (e.g., root, administrator, service accounts shared across personnel) across production, non-production, and third-party managed environments within [Organisation Name].
- Accounts residing on infrastructure, application platforms, databases, network devices, and cloud environments owned or operated by [Organisation Name].
- Exceptions granted on a time-limited or standing basis pending remediation.

**Out of Scope:** Individual named privileged accounts managed under the standard Privileged Access Management (PAM) process; service accounts with no interactive login capability and no shared credential.

---

## 2. Asset / Item Identification

*This section identifies each shared account exception uniquely. Every entry must be traceable to a specific account, system, and business context. Assign a unique Exception ID to each record upon creation.*

| Field | Description |
|---|---|
| **Exception ID** | Unique identifier for the exception record (e.g., SAE-YYYY-NNN) |
| **Account Name / Username** | The exact account identifier as it exists in the target system |
| **Account Type** | Root / Local Administrator / Domain Administrator / Service Account / Application Account / Database Account / Other |
| **Target System / Asset** | Hostname, IP address, or application name where the account resides |
| **Environment** | Production / Non-Production / DR / Cloud / Third-Party Managed |
| **Platform / OS** | e.g., Windows Server 2022, RHEL 9, Oracle DB 19c, AWS IAM |
| **Business Justification** | Documented rationale for why a shared account is necessary and individual accounts are not feasible |

**Register Entries:**

| Exception ID | Account Name | Account Type | Target System / Asset | Environment | Platform / OS | Business Justification |
|---|---|---|---|---|---|---|
| SAE-[YYYY]-001 | [Account Name] | [Account Type] | [System / Asset Name] | [Environment] | [Platform] | [Justification Text] |
| SAE-[YYYY]-002 | [Account Name] | [Account Type] | [System / Asset Name] | [Environment] | [Platform] | [Justification Text] |

---

## 3. Classification and Categorisation

*This section categorises each shared account by risk level and exception type to enable prioritised oversight and reporting. Classification should be reviewed whenever the account's usage profile changes.*

### 3.1 Risk Classification Criteria

| Risk Level | Criteria |
|---|---|
| **Critical** | Shared account with unrestricted access to production systems, data classified as Confidential or above, or financial transaction systems |
| **High** | Shared account with elevated privileges on production systems; access to personally identifiable information (PII) |
| **Medium** | Shared privileged account in non-production or staging environments; limited blast radius |
| **Low** | Shared account with read-only or narrowly scoped access; no access to sensitive data |

### 3.2 Exception Type Classification

| Exception Type | Description |
|---|---|
| **Technical Limitation** | Vendor or platform does not support individual named accounts |
| **Operational Necessity** | Business continuity or operational model requires shared access (e.g., break-glass account) |
| **Transitional** | Temporary exception pending system upgrade or PAM onboarding |
| **Third-Party Managed** | Account managed by an external service provider under contractual controls |

### 3.3 Classification Register

| Exception ID | Risk Level | Exception Type | Sensitivity of Accessed Data | Compensating Controls in Place |
|---|---|---|---|---|
| SAE-[YYYY]-001 | [Critical / High / Medium / Low] | [Exception Type] | [Data Sensitivity] | [Yes / Partial / No] |
| SAE-[YYYY]-002 | [Critical / High / Medium / Low] | [Exception Type] | [Data Sensitivity] | [Yes / Partial / No] |

---

## 4. Owner and Custodian

*This section establishes clear accountability for each shared account exception. Every exception must have a named Business Owner responsible for justification and a named Technical Custodian responsible for operational management. Shared accounts without a named owner must be disabled immediately.*

### 4.1 Ownership Definitions

| Role | Responsibility |
|---|---|
| **Business Owner** | The business unit head or designated manager accountable for the business need driving the exception. Approves the exception and periodic renewals. |
| **Technical Custodian** | The technical team or individual (e.g., system administrator, platform team) responsible for securing, monitoring, and rotating the account credential. |
| **IAM Manager** | Maintains this register; coordinates exception approvals, reviews, and closures. |

### 4.2 Ownership Register

| Exception ID | Business Owner (Name) | Business Owner (Department) | Technical Custodian (Name / Team) | Technical Custodian (Contact) | PAM System Managed | Vault / Credential Store |
|---|---|---|---|---|---|---|
| SAE-[YYYY]-001 | [Name] | [Department] | [Name / Team] | [Email / Extension] | [Yes / No] | [CyberArk / HashiCorp Vault / Manual / Other] |
| SAE-[YYYY]-002 | [Name] | [Department] | [Name / Team] | [Email / Extension] | [Yes / No] | [Vault / Store Name] |

### 4.3 Compensating Controls

*For each exception, document the specific compensating controls applied to mitigate the risk of shared credential use. At minimum, session recording and credential vaulting should be in place for Critical and High risk accounts.*

| Exception ID | Session Recording | Credential Vaulting | Shared Password Rotation Frequency | Access Approval Workflow | Concurrent Session Limit | Additional Controls |
|---|---|---|---|---|---|---|
| SAE-[YYYY]-001 | [Yes / No] | [Yes / No] | [Daily / Weekly / Monthly / On-Use] | [Yes / No — System Name] | [N / Unlimited] | [Description] |
| SAE-[YYYY]-002 | [Yes / No] | [Yes / No] | [Frequency] | [Yes / No] | [N] | [Description] |

---

## 5. Status and Lifecycle Stage

*This section tracks the current disposition and lifecycle stage of each exception. Exceptions must not remain open indefinitely; all entries must have a defined expiry date or a documented rationale for standing status. Expired exceptions must be escalated to the IAM Manager for immediate review.*

### 5.1 Lifecycle Stages

| Stage | Description |
|---|---|
| **Pending Approval** | Exception request submitted; awaiting formal approval |
| **Active** | Exception approved and account in use under documented controls |
| **Under Remediation** | Exception acknowledged; remediation plan in progress to eliminate shared account |
| **Expired** | Exception approval period has lapsed; account use must cease pending re-approval |
| **Closed** | Exception resolved — shared account disabled or replaced by individual accounts |
| **Suspended** | Account temporarily disabled pending investigation or review |

### 5.2 Status Register

| Exception ID | Current Status | Exception Approval Date | Exception Expiry Date | Remediation Target Date | Remediation Plan Reference | Days to Expiry |
|---|---|---|---|---|---|---|
| SAE-[YYYY]-001 | [Stage] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Ticket / Plan ID] | [Auto-calculated] |
| SAE-[YYYY]-002 | [Stage] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Ticket / Plan ID] | [Auto-calculated] |

### 5.3 Ageing Summary

*This summary provides management visibility into the ageing profile of open exceptions. To be updated at each quarterly review.*

| Risk Level | Total Exceptions | Active < 90 Days | Active 90–180 Days | Active > 180 Days | Expired | Under Remediation |
|---|---|---|---|---|---|---|
| Critical | [N] | [N] | [N] | [N] | [N] | [N] |
| High | [N] | [N] | [N] | [N] | [N] | [N] |
| Medium | [N] | [N] | [N] | [N] | [N] | [N] |
| Low | [N] | [N] | [N] | [N] | [N] | [N] |
| **Total** | **[N]** | **[N]** | **[N]** | **[N]** | **[N]** | **[N]** |

---

## 6. Last Review Date

*This section records the review history for each individual exception entry. All exceptions must be reviewed at minimum quarterly, or immediately upon any of the following trigger events: system change, personnel change, security incident, or audit finding. The reviewing officer must attest that compensating controls remain effective.*

### 6.1 Per-Event and Periodic Review Triggers

| Trigger Type | Description | Required Action |
|---|---|---|
| **Scheduled Quarterly Review** | Regular review of all active exceptions | Confirm status, re-validate justification, confirm controls |
| **Personnel Change** | Owner or custodian departure or role change | Reassign ownership; re-approve if necessary |
| **Security Incident** | Incident involving privileged access or credential compromise | Immediate review; suspend account if implicated |
| **System Change** | Platform upgrade, migration, or decommission | Assess if exception still applies |
| **Audit Finding** | Internal or external audit identifies control gap | Remediate and document outcome |
| **Remediation Completion** | Shared account successfully replaced | Close exception; disable account |

### 6.2 Review Log

| Exception ID | Review Date | Review Type | Reviewed By (Name) | Reviewed By (Role) | Outcome | Next Scheduled Review | Comments |
|---|---|---|---|---|---|---|---|
| SAE-[YYYY]-001 | [DD-MMM-YYYY] | [Quarterly / Per-Event] | [Name] | [Role] | [Renewed / Escalated / Closed / No Change] | [DD-MMM-YYYY] | [Notes] |
| SAE-[YYYY]-002 | [DD-MMM-YYYY] | [Quarterly / Per-Event] | [Name] | [Role] | [Outcome] | [DD-MMM-YYYY] | [Notes] |

### 6.3 Reviewer Attestation

By completing a review entry above, the reviewer attests that:

1. The business justification for the shared account exception remains valid.
2. Compensating controls documented in Section 4.3 are operational and effective.
3. No alternative solution (individual named accounts, PAM onboarding) has become feasible since the last review.
4. The exception risk level remains accurately classified.

---

## 7. Roles and Responsibilities

*This section defines accountability for maintaining and acting upon this register using a RACI framework. All named roles must have a designated individual or team assigned at all times.*

| Activity | IAM Manager | Business Owner | Technical Custodian | CISO / Head of IT Security | Internal Audit | Compliance Officer |
|---|---|---|---|---|---|---|
| Raise and submit exception request | I | R | C | I | — | I |
| Approve shared account exception | A | C | I | R | — | C |
| Maintain and update this register | R/A | I | I | I | — | I |
| Implement compensating controls | I | I | R/A | C | — | — |
| Conduct quarterly review | R/A | C | C | I | — | I |
| Conduct per-event review | R | R | R | C | — | I |
| Escalate expired / Critical exceptions | R | I | I | A | — | I |
| Validate register completeness | C | — | — | A | R | C |
| Report exceptions to Board / Risk Committee | I | — | — | R/A | — | C |
| Approve register and version updates | C | — | — | A | — | C |

**RACI Key:** R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name] | Initial version |
| [1.1] | [DD-MMM-YYYY] | [Author Name] | [Description of changes] |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Name] | [Signature] | [DD-MMM-YYYY] |
| CISO / Head of IT Security | [Name] | [Signature] | [DD-MMM-YYYY] |
| Chief Information Officer | [Name] | [Signature] | [DD-MMM-YYYY] |
| Compliance Officer | [Name] | [Signature] | [DD-MMM-YYYY] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.56 | Privileged access management requirements, including controls over shared and generic accounts and compensating controls where individual accountability is not achievable |
| BNM RMiT | Clause 10.51–10.55 | Broader privileged access management policy context |
| [Organisation Name] | Privileged Access Management Policy | Internal PAM policy governing access provisioning, review, and revocation |
| [Organisation Name] | Information Security Policy | Overarching information security governance framework |
| [Organisation Name] | Access Control Standard | Technical standards for access control implementation |
| [Organisation Name] | Incident Response Plan | Procedures applicable when a shared account is implicated in a security event |
| ISO/IEC 27001:2022 | Annex A 8.2 | Privileged access rights management |

---

## 10. Appendices

### Appendix A — Exception Request Form Template

*This appendix provides the standard form used to initiate a new shared account exception request. Completed forms must be attached to the corresponding register entry.*

| Field | Input |
|---|---|
| Requestor Name | [Name] |
| Requestor Department | [Department] |
| Date of Request | [DD-MMM-YYYY] |
| Account Name / Username | [Account] |
| Target System | [System] |
| Business Justification | [Detailed justification] |
| Duration Requested | [e.g., 6 months / Standing with quarterly review] |
| Proposed Compensating Controls | [List controls] |
| Alternatives Considered and Rejected | [Describe] |
| Approving Manager | [Name and signature] |

---

### Appendix B — Compensating Controls Reference

*This appendix provides reference guidance on acceptable compensating controls for shared privileged accounts, aligned with RMiT expectations.*

| Control Category | Control Examples | Applicability |
|---|---|---|
| **Credential Management** | Centralised credential vaulting (PAM tool); automatic rotation on check-in/check-out; one-time passwords | All Critical and High risk accounts |
| **Session Monitoring** | Full session recording; real-time session monitoring; keystroke logging | All Critical accounts; recommended for High |
| **Access Workflow** | Ticketed access requests; dual approval for checkout; time-limited access windows | Critical and High |
| **Alerting** | Real-time alerts on account use; anomaly detection; failed login alerting | All exceptions |
| **Audit Logging** | Immutable audit trail of all sessions; log forwarding to SIEM | All exceptions |
| **Physical / Procedural** | Witnessed access; split-knowledge credential distribution; custodian log | Where technical controls are not feasible |

---

### Appendix C — Exception Closure Checklist

*Complete this checklist when closing an exception to confirm that the shared account has been appropriately decommissioned.*

- [ ] Shared account disabled in the target system
- [ ] Credential removed from vault / credential store
- [ ] Individual named accounts confirmed as operational replacement
- [ ] Business Owner notified and sign-off obtained
- [ ] Register entry updated to **Closed** status
- [ ] Audit log retained for a minimum of [3 / 5 / 7] years per records retention policy
- [ ] PAM system updated to reflect decommission

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Shared Account** | A user account whose credentials are known to or used by more than one individual, preventing attribution of actions to a single person |
| **Privileged Account** | An account with elevated access rights beyond those of a standard user, capable of modifying system configurations, accessing sensitive data, or administering other accounts |
| **Break-Glass Account** | An emergency privileged account used only in exceptional circumstances where normal access paths are unavailable |
| **Compensating Control** | A security control applied in place of a standard control to achieve an equivalent or greater level of risk mitigation |
| **PAM** | Privileged Access Management — a set of cybersecurity strategies and technologies for managing, monitoring, and securing privileged access |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology — the regulatory policy document governing technology risk management for Malaysian financial institutions |
| **IAM** | Identity and Access Management |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |

---

*This document is classified as **Confidential**. Unauthorised disclosure is prohibited. For queries regarding this register, contact the IAM Manager at [IAM Manager Email].*

*Document ID: [Document ID] | Version: 1.0 | [Organisation Name]*