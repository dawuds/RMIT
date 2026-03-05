# Repository Access Controls

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

## 1. Purpose and Scope

This document provides configuration evidence demonstrating that access controls over source code repositories are implemented, enforced, and reviewed in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.14**, which requires financial institutions to establish and maintain controls over access to technology assets, including source code repositories.

### 1.1 Purpose

*State the primary objective of this document — for example, to provide auditable evidence that repository access is governed by the principle of least privilege, segregation of duties, and formal provisioning and deprovisioning workflows.*

This document serves as evidence that [Organization Name] has implemented and maintains effective access controls over its source code repositories, ensuring that:

- Access is granted based on business need and role requirements.
- Provisioning and deprovisioning are performed through a formal, authorized workflow.
- Segregation of duties is enforced across the software development lifecycle.
- Periodic access certification is conducted to validate ongoing access appropriateness.

### 1.2 Scope

*Define the boundaries of this document — which repositories, platforms, teams, and environments are covered.*

This document applies to:

- **Repository Platforms:** [e.g., GitHub Enterprise, GitLab, Azure DevOps, Bitbucket]
- **Repository Types:** Application source code, infrastructure-as-code (IaC), configuration repositories
- **Environments:** [e.g., Production, Staging, Development, DR]
- **Teams in Scope:** [e.g., Software Engineering, DevOps, Information Security, IT Operations]
- **Exclusions:** [List any repositories or teams explicitly out of scope and rationale]

---

## 2. Assessment Scope and Criteria

*Describe the scope of the access control assessment and the criteria used to evaluate whether controls are adequate. Reference internal policy baselines or regulatory thresholds where applicable.*

### 2.1 Assessment Scope

| Parameter | Detail |
|---|---|
| **Assessment Period** | [e.g., Q1 2025 — 1 January 2025 to 31 March 2025] |
| **Repositories Assessed** | [Number and list of repositories reviewed] |
| **Total Accounts Reviewed** | [Number of user accounts, service accounts, bot accounts] |
| **Platforms Assessed** | [e.g., GitHub Enterprise — github.company.com] |
| **Assessment Trigger** | [Per-event / Quarterly review / Audit request] |
| **Assessed By** | [IAM Manager / Internal Audit / External Assessor] |

### 2.2 Assessment Criteria

*List the specific criteria against which access configurations were assessed. These should map to internal policy and RMiT requirements.*

Access configurations were evaluated against the following criteria:

| # | Criterion | Policy Reference | RMiT Reference |
|---|---|---|---|
| AC-01 | All repository access is role-based and maps to an approved job function | [Internal Policy Ref] | RMiT 10.14 |
| AC-02 | No user holds both write access and merge/approval authority on the same branch | [Internal Policy Ref] | RMiT 10.14 |
| AC-03 | Service accounts are restricted to the minimum required permissions | [Internal Policy Ref] | RMiT 10.14 |
| AC-04 | All access changes are traceable to an approved change request | [Internal Policy Ref] | RMiT 10.14 |
| AC-05 | Privileged access (admin/owner) is restricted to authorized personnel only | [Internal Policy Ref] | RMiT 10.14 |
| AC-06 | Access for separated or transferred staff is revoked within defined SLA | [Internal Policy Ref] | RMiT 10.14 |
| AC-07 | Periodic access certification is completed on schedule | [Internal Policy Ref] | RMiT 10.14 |

---

## 3. Methodology

*Describe the approach, tools, and techniques used to gather evidence and assess access configurations. This section supports the reproducibility and defensibility of findings.*

### 3.1 Evidence Collection Method

| Method | Description | Tool / Source |
|---|---|---|
| Configuration Export | Automated export of current repository permission settings | [e.g., GitHub API / GitLab REST API] |
| Access Log Review | Review of access change logs for the assessment period | [e.g., Audit log export from platform] |
| HR Cross-Reference | Comparison of active repository users against current HR employee records | [e.g., AD / HRIS system] |
| Ticket Validation | Verification that access changes were backed by approved ITSM tickets | [e.g., ServiceNow / Jira Service Desk] |
| Interview / Walkthrough | Discussions with repository owners and IAM team to validate configurations | [IAM Manager, Repository Owners] |

### 3.2 Assessment Approach

*Explain whether the assessment was full-population or sample-based, and why.*

- **Population:** All [X] repositories across [Platform Name] were included in scope.
- **Sampling Approach:** [Full population / Risk-based sample of X% prioritizing production repositories]
- **Evidence Retention:** Evidence artefacts (screenshots, exports, logs) are retained at [evidence storage location] for a minimum of [X] years in accordance with [Organization Name]'s records retention policy.

---

## 4. Findings and Ratings

*Summarize the findings from the access control assessment, including any exceptions, deficiencies, or confirmed compliant configurations.*

### 4.1 Overall Compliance Rating

| Rating | Description |
|---|---|
| **Compliant** | All criteria met; no exceptions identified |
| **Partially Compliant** | Minor exceptions identified; remediation in progress |
| **Non-Compliant** | Significant gaps identified; immediate remediation required |

**Overall Assessment Rating for this Period:** [Compliant / Partially Compliant / Non-Compliant]

### 4.2 Findings Summary

| Finding ID | Criterion Ref | Repository / Scope | Observation | Severity | Status |
|---|---|---|---|---|---|
| F-001 | AC-02 | [Repository Name] | [Description of finding] | [High / Medium / Low] | [Open / Remediated / Accepted] |
| F-002 | AC-06 | [Platform-wide] | [e.g., 2 separated staff accounts not deprovisioned within SLA] | [Medium] | [Remediated — Date] |
| F-003 | AC-05 | [Repository Name] | [e.g., 3 non-IAM accounts with Owner-level permission] | [High] | [Open — Target: Date] |

### 4.3 Criterion-Level Results

| Criterion | Result | Repositories Compliant | Exceptions | Notes |
|---|---|---|---|---|
| AC-01 | [Pass / Fail] | [X of Y] | [n] | [Comments] |
| AC-02 | [Pass / Fail] | [X of Y] | [n] | [Comments] |
| AC-03 | [Pass / Fail] | [X of Y] | [n] | [Comments] |
| AC-04 | [Pass / Fail] | [X of Y] | [n] | [Comments] |
| AC-05 | [Pass / Fail] | [X of Y] | [n] | [Comments] |
| AC-06 | [Pass / Fail] | [X of Y] | [n] | [Comments] |
| AC-07 | [Pass / Fail] | [X of Y] | [n] | [Comments] |

### 4.4 Remediation Tracker

| Finding ID | Owner | Remediation Action | Target Date | Completion Date | Evidence Reference |
|---|---|---|---|---|---|
| F-001 | [Name / Team] | [Remediation steps] | [Date] | [Date / Pending] | [Ticket / Evidence ID] |
| F-002 | [Name / Team] | [Remediation steps] | [Date] | [Date / Pending] | [Ticket / Evidence ID] |

---

## 5. Access Provisioning and Deprovisioning Workflow

*Document the formal process for granting and revoking access to source code repositories. Evidence of adherence to this workflow should be maintained in the ITSM system.*

### 5.1 Access Provisioning

*Describe the end-to-end workflow for requesting and granting new repository access.*

**Trigger Events:** New hire, role change, project onboarding, contractor engagement.

| Step | Activity | Responsible Party | System / Tool | SLA |
|---|---|---|---|---|
| 1 | Requestor submits access request with business justification | Line Manager / Project Lead | [ITSM Tool, e.g., ServiceNow] | — |
| 2 | Repository Owner reviews and approves request | Repository Owner | [ITSM Tool] | [e.g., 2 business days] |
| 3 | IAM team validates request against role matrix and SoD policy | IAM Manager | [IAM System] | [e.g., 1 business day] |
| 4 | Access granted in repository platform | IAM Team / DevOps | [GitHub / GitLab / etc.] | [e.g., 1 business day post-approval] |
| 5 | Requestor notified and access confirmed | IAM Team | [Email / ITSM] | Same day |
| 6 | Ticket closed and evidence archived | IAM Team | [ITSM Tool] | Same day |

### 5.2 Access Deprovisioning

*Describe the end-to-end workflow for revoking repository access upon role change, resignation, contract expiry, or disciplinary action.*

**Trigger Events:** Resignation, termination, contract expiry, internal transfer, project completion.

| Step | Activity | Responsible Party | System / Tool | SLA |
|---|---|---|---|---|
| 1 | HR or Line Manager notifies IAM team of departure/change | HR / Line Manager | [HR System / Email] | Day of event |
| 2 | IAM team identifies all repository access held by the user | IAM Team | [IAM System / Platform API] | [e.g., Same business day] |
| 3 | Access revoked across all in-scope repositories | IAM Team | [GitHub / GitLab / etc.] | [e.g., Within 24 hours of notification] |
| 4 | Revocation confirmed and logged | IAM Team | [ITSM Tool] | Same day |
| 5 | Post-revocation verification performed | IAM Manager | [Platform Audit Log] | [e.g., Within 48 hours] |
| 6 | Ticket closed; evidence archived | IAM Team | [ITSM Tool] | Same day |

### 5.3 Privileged Access (Admin / Owner) Provisioning

*State additional controls that apply to the provisioning of privileged repository access, such as CISO approval or time-bound access.*

- Privileged access requires approval from: [e.g., CISO / IT Director / IAM Manager]
- Access is time-bound: [e.g., Maximum 90 days; renewal requires re-approval]
- Just-in-time (JIT) provisioning is [in use / not yet implemented]: [Details]

---

## 6. Segregation of Duties Matrix

*Document the SoD requirements enforced across repository access roles to prevent any single individual from having conflicting levels of access that could lead to unauthorized code changes or fraud.*

### 6.1 Repository Access Role Definitions

| Role | Description | Typical Assignee |
|---|---|---|
| **Owner / Admin** | Full control including settings, member management, and deletion | IAM Manager, Repository Admin |
| **Maintainer** | Can merge to protected branches, manage CI/CD pipelines | Senior Developer, Tech Lead |
| **Developer / Contributor** | Can push to feature branches; cannot merge to main/release | Software Engineer |
| **Reviewer** | Read access plus pull request review capability | QA Engineer, Security Engineer |
| **Read-Only** | Read access to repository content only | Auditor, Business Analyst |
| **Service Account** | Automated system access for CI/CD pipelines | [CI/CD System Name] |

### 6.2 Segregation of Duties Rules

*Conflicts marked **Prohibited** must not be held by the same individual or service account. Conflicts marked **Requires Approval** are permitted only with documented risk acceptance.*

| Role A | Role B | Same Repository | Same Team | Ruling | Rationale |
|---|---|---|---|---|---|
| Developer / Contributor | Maintainer (merge authority) | **Prohibited** | — | Prohibited | Prevents self-approval of own code |
| Developer / Contributor | Owner / Admin | **Prohibited** | — | Prohibited | Prevents self-modification of access controls |
| Maintainer | Owner / Admin | Requires Approval | — | Requires Approval | Elevated privilege requires documented justification |
| QA Reviewer | Developer (same feature) | **Prohibited** | — | Prohibited | Prevents self-review of own deliverables |
| Service Account | Maintainer / Admin | **Prohibited** | — | Prohibited | Automated accounts must not hold approval authority |

### 6.3 Current SoD Compliance Status

*Summarize the result of the SoD review for this assessment period.*

| Repository | SoD Violations Identified | Remediated | Outstanding | Notes |
|---|---|---|---|---|
| [Repository Name] | [n] | [n] | [n] | [Comments] |
| [Repository Name] | [n] | [n] | [n] | [Comments] |

---

## 7. Periodic Access Certification Process

*Describe the formal process by which repository access is periodically reviewed and recertified to ensure ongoing appropriateness.*

### 7.1 Certification Schedule

| Review Type | Frequency | Scope | Owner |
|---|---|---|---|
| Full Access Review | Quarterly | All users across all repositories | IAM Manager |
| Privileged Access Review | Monthly | Owner / Admin / Maintainer roles only | IAM Manager + CISO |
| Per-Event Review | On trigger event | Affected user accounts | IAM Team |
| Post-Incident Review | Within 5 business days of incident | Incident-related accounts | IAM Manager + CISO |

### 7.2 Certification Workflow

*Describe how repository owners and line managers are engaged in the certification process.*

| Step | Activity | Responsible Party | Tool | Timeline |
|---|---|---|---|---|
| 1 | IAM team generates access report from repository platform | IAM Team | [Platform API / IAM System] | Day 1 |
| 2 | Report distributed to Repository Owners and Line Managers for review | IAM Manager | [Email / ITSM] | Day 1–2 |
| 3 | Repository Owners and Line Managers certify, modify, or revoke access | Repository Owners / Line Managers | [Certification Tool / Email] | Day 3–7 |
| 4 | IAM team implements approved access changes | IAM Team | [Repository Platform] | Day 8–10 |
| 5 | Certification results documented and archived | IAM Manager | [ITSM / Document Store] | Day 10 |
| 6 | Summary report submitted to CISO / IT Risk | IAM Manager | [Report] | Day 11 |

### 7.3 Certification Evidence for This Period

| Certification Cycle | Date Initiated | Date Completed | Total Accounts Reviewed | Access Revoked | Access Modified | Certified Clean | Evidence Reference |
|---|---|---|---|---|---|---|---|
| [Q1 2025] | [Date] | [Date] | [n] | [n] | [n] | [n] | [Document / Ticket ID] |

---

## 8. Roles and Responsibilities

*The following RACI table defines accountability for access control activities related to source code repositories.*

| Activity | CISO | IAM Manager | Repository Owner | Line Manager | Software Developer | HR | Internal Audit |
|---|---|---|---|---|---|---|---|
| Define repository access policy | A | R | C | I | I | — | C |
| Approve privileged access requests | A | R | C | I | — | — | — |
| Provision standard repository access | I | R | A | C | I | — | — |
| Revoke access on staff departure | I | R | C | A | — | R | — |
| Conduct quarterly access certification | A | R | C | C | — | — | I |
| Remediate SoD violations | A | R | C | C | I | — | I |
| Report access control status to governance | A | R | I | — | — | — | C |
| Perform independent access control audit | C | I | I | — | — | — | R/A |

**Key:** R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Name] | [Signature] | [Date] |
| CISO / Head of Information Security | [Name] | [Signature] | [Date] |
| Chief Risk Officer (or delegate) | [Name] | [Signature] | [Date] |
| Internal Audit Representative | [Name] | [Signature] | [Date] |

---

## 10. References

| Reference | Description |
|---|---|
| BNM RMiT Policy Document | Risk Management in Technology, Bank Negara Malaysia — **Clause 10.14** |
| [Organization Name] Information Security Policy | [Internal Policy Reference / Version] |
| [Organization Name] Access Control Policy | [Internal Policy Reference / Version] |
| [Organization Name] Identity and Access Management Standard | [Internal Standard Reference / Version] |
| [Organization Name] Acceptable Use Policy | [Internal Policy Reference / Version] |
| PDPA 2010 | Personal Data Protection Act 2010 — Principle 7 (Security) |
| ISO/IEC 27001:2022 | Annex A.8.3 (Information Access Restriction), A.8.18 (Privileged Access Rights) |

---

## Appendices

### Appendix A — Repository Access Configuration Export

*Attach or reference the full export of repository access configurations generated from the platform for the assessment period. This should include usernames, roles, repositories, and last active date.*

| Attachment | Description | Date Generated | Generated By |
|---|---|---|---|
| [Filename / Link] | Full permission export — [Platform Name] | [Date] | [IAM Team] |

### Appendix B — Access Change Log (Assessment Period)

*Attach or reference the audit log extract covering all access provisioning and deprovisioning events during the assessment period.*

| Attachment | Description | Date Generated | Generated By |
|---|---|---|---|
| [Filename / Link] | Access change log — [Start Date] to [End Date] | [Date] | [IAM Team] |

### Appendix C — HR Cross-Reference Reconciliation Report

*Attach the reconciliation report comparing active repository accounts against the current active employee and contractor register from HR.*

| Attachment | Description | Date Generated | Generated By |
|---|---|---|---|
| [Filename / Link] | HR vs. repository access reconciliation | [Date] | [IAM Team] |

### Appendix D — Access Certification Acknowledgement Records

*Attach signed or electronically confirmed acknowledgement records from Repository Owners and Line Managers confirming their review of the access certification report.*

| Repository Owner | Repository | Certified Date | Method | Evidence Reference |
|---|---|---|---|---|
| [Name] | [Repository Name] | [Date] | [Email / ITSM / Digital Sign] | [Ticket / Email ID] |

### Appendix E — Approved Exceptions Register

*Document any approved deviations from standard access control policy, including the business justification, risk acceptance authority, and expiry date.*

| Exception ID | Repository | User / Account | Policy Deviation | Business Justification | Risk Owner | Approval Date | Expiry Date |
|---|---|---|---|---|---|---|---|
| EX-001 | [Repository] | [User] | [Description] | [Justification] | [Name / Role] | [Date] | [Date] |

---

*This document is classified **Confidential**. It must not be distributed outside [Organization Name] without the prior written approval of the CISO. Printed copies are uncontrolled — refer to the document management system for the current version.*