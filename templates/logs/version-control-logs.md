# Version Control Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Internal Audit |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and why version control logs are maintained as a compliance artifact.*

This document defines the structure, retention, and governance requirements for Version Control Logs maintained by [Organization Name]. These logs serve as the primary audit trail for all changes to source code, configuration files, infrastructure-as-code, and other technology assets under version control, supporting accountability, traceability, and regulatory compliance.

Version Control Logs are a mandatory artifact under Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically Clause **10.14**, which requires financial institutions to maintain adequate records of technology changes to support audit, investigation, and regulatory review.

### 1.2 Scope

*Define the systems, repositories, and technology assets covered by these logs.*

This artifact applies to:

- All source code repositories (production, staging, and development branches)
- Infrastructure-as-code (IaC) repositories
- Configuration management repositories
- Database migration scripts and schema change logs
- Any technology asset tracked within an approved version control system (e.g., Git, SVN, Azure DevOps Repos, GitLab, Bitbucket)

**In Scope:**

| Category | System / Repository | Environment |
|---|---|---|
| Core Banking Applications | [Repository Name/URL] | Production / UAT |
| Internet Banking Platform | [Repository Name/URL] | Production / UAT |
| Internal Tools & Utilities | [Repository Name/URL] | Production / Dev |
| Infrastructure Configuration | [Repository Name/URL] | All Environments |
| [Add Row as Required] | | |

**Out of Scope:**

- Manual change records maintained in separate Change Management systems (refer to Change Management Log)
- Third-party vendor source code not hosted on [Organization Name]'s version control infrastructure

---

## 2. Asset and Item Identification

*For each repository or technology asset tracked, provide a unique identifier and descriptive metadata to enable precise traceability during audit or incident investigation.*

### 2.1 Repository Register

| Repository ID | Repository Name | Description | Technology Stack | Hosting Location | Date Registered |
|---|---|---|---|---|---|
| REPO-001 | [Repository Name] | [Brief description of purpose] | [e.g., Java / Spring Boot] | [e.g., On-premises GitLab / GitHub Enterprise] | [DD-MMM-YYYY] |
| REPO-002 | [Repository Name] | [Brief description of purpose] | [e.g., Python / Terraform] | [e.g., Azure DevOps] | [DD-MMM-YYYY] |
| [Add Row] | | | | | |

### 2.2 Commit Log Entry Structure

*Each commit entry captured by the version control system must contain, at minimum, the following fields to constitute a valid audit trail record.*

| Field | Description | Example |
|---|---|---|
| **Commit Hash / ID** | Unique cryptographic identifier for the commit | `a3f8c21d...` |
| **Repository Name** | Name of the repository where the change was made | `core-banking-api` |
| **Branch** | Branch on which the commit was recorded | `main`, `release/v2.4`, `hotfix/JIRA-1042` |
| **Author** | Identity of the individual who authored the commit | `[Staff Name] <[Email]>` |
| **Committer** | Identity of the individual who committed the change (may differ from author) | `[Staff Name] <[Email]>` |
| **Timestamp** | Date and time of the commit (UTC+8) | `2025-06-01 14:32:11 +0800` |
| **Commit Message** | Description of the change, referencing the change ticket or Jira ID | `[JIRA-1042] Fix: Null pointer exception in payment module` |
| **Files Changed** | List of files added, modified, or deleted | `src/payment/PaymentService.java (+12/-3)` |
| **Change Ticket Reference** | Reference to the Change Management or ITSM ticket | `CHG-20250601-042` |
| **Tag / Release Reference** | If applicable, the release tag associated with this commit | `v2.4.1` |

---

## 3. Classification and Categorisation

*All version-controlled changes must be classified to support risk-based audit planning, prioritisation of review activities, and regulatory reporting.*

### 3.1 Change Type Classification

| Classification Code | Change Type | Description |
|---|---|---|
| **FEAT** | Feature Development | Introduction of new functionality or capability |
| **FIX** | Bug Fix | Correction of a defect in existing functionality |
| **HOTFIX** | Emergency Fix | Urgent change applied outside the standard release cycle |
| **CONFIG** | Configuration Change | Modification to system or environment configuration parameters |
| **INFRA** | Infrastructure Change | Changes to infrastructure-as-code, pipelines, or platform configuration |
| **REFACTOR** | Code Refactoring | Structural improvement without functional change |
| **SECURITY** | Security Patch | Remediation of a vulnerability or security finding |
| **COMPLIANCE** | Compliance-Driven Change | Change mandated by regulatory or policy requirement |
| **RELEASE** | Release / Merge | Merge to production branch or tagged release |

### 3.2 Risk Classification of Changes

*Assign a risk classification to each change category to guide the frequency and depth of audit review.*

| Risk Level | Definition | Audit Review Frequency |
|---|---|---|
| **Critical** | Changes to core banking, payment processing, or authentication systems | Every commit — automated scanning + quarterly manual review |
| **High** | Changes to internet-facing applications or data access layers | Sampled review — monthly automated + quarterly manual |
| **Medium** | Internal tools, reporting modules, non-critical configurations | Quarterly review |
| **Low** | Documentation, non-production scripts, development utilities | Annual review |

---

## 4. Owner and Custodian

*Accountability for version control logs must be formally assigned to ensure completeness, integrity, and availability of the audit trail.*

### 4.1 Ownership Register

| Repository ID | Repository Name | Business Owner | Technical Custodian | Backup Custodian | Date Assigned |
|---|---|---|---|---|---|
| REPO-001 | [Repository Name] | [Business Unit Head / Role] | [Team Lead / Role] | [Deputy / Role] | [DD-MMM-YYYY] |
| REPO-002 | [Repository Name] | [Business Unit Head / Role] | [Team Lead / Role] | [Deputy / Role] | [DD-MMM-YYYY] |
| [Add Row] | | | | | |

### 4.2 Ownership Responsibilities

| Role | Responsibility |
|---|---|
| **Business Owner** | Accountable for the business purpose of the repository; approves access control changes; escalates unresolved audit findings |
| **Technical Custodian** | Responsible for repository configuration, access management, branch protection rules, and log integrity |
| **Head of Internal Audit** | Owns this compliance artifact; ensures version control logs are reviewed as part of the audit plan |
| **IT Security Officer** | Reviews logs for anomalous commit patterns, unauthorised access, and security-relevant changes |
| **Change Manager** | Validates that all production commits are traceable to an approved change ticket |

---

## 5. Audit Universe and Risk-Based Plan

*The audit universe for version control encompasses all repositories and version-controlled assets within scope. A risk-based plan determines the depth and frequency of log review.*

### 5.1 Audit Universe

| Audit Unit ID | Audit Entity | Repository / System | Risk Rating | Last Audit Date | Next Planned Review |
|---|---|---|---|---|---|
| AU-VCL-001 | [Audit Unit Name] | [Repository Name] | [Critical / High / Medium / Low] | [DD-MMM-YYYY] | [DD-MMM-YYYY] |
| AU-VCL-002 | [Audit Unit Name] | [Repository Name] | [Critical / High / Medium / Low] | [DD-MMM-YYYY] | [DD-MMM-YYYY] |
| [Add Row] | | | | | |

### 5.2 Risk-Based Review Plan

*The following plan governs the internal audit review of version control logs on a quarterly basis, with continuous automated monitoring in between.*

| Quarter | Review Period | Repositories in Scope | Review Type | Responsible Party | Status |
|---|---|---|---|---|---|
| Q1 [YYYY] | 01 Jan – 31 Mar | [List Repositories] | Full sample review — Critical & High | Head of Internal Audit / IT Audit Team | [Planned / In Progress / Completed] |
| Q2 [YYYY] | 01 Apr – 30 Jun | [List Repositories] | Full sample review — Critical & High | Head of Internal Audit / IT Audit Team | [Planned / In Progress / Completed] |
| Q3 [YYYY] | 01 Jul – 30 Sep | [List Repositories] | Full sample review — Critical & High | Head of Internal Audit / IT Audit Team | [Planned / In Progress / Completed] |
| Q4 [YYYY] | 01 Oct – 31 Dec | [List Repositories] | Full sample review — All Risk Levels | Head of Internal Audit / IT Audit Team | [Planned / In Progress / Completed] |

### 5.3 Automated Monitoring Controls

*Continuous monitoring supplements quarterly review to provide real-time detection of anomalies.*

- [ ] Automated alerts configured for direct commits to protected branches (e.g., `main`, `master`, `production`) bypassing pull request controls
- [ ] Alerts for commits outside of approved change windows
- [ ] Alerts for commits by former employees or service accounts with revoked access
- [ ] Alerts for unusually large file deletions or bulk removals
- [ ] Integration with SIEM (e.g., [SIEM Platform Name]) for centralised log aggregation and correlation

---

## 6. Audit Methodology and Standards

*This section defines the approach and professional standards applied when reviewing version control logs as part of internal audit activities.*

### 6.1 Audit Standards Applied

| Standard | Reference | Applicability |
|---|---|---|
| Bank Negara Malaysia RMiT Policy | Clause 10.14 | Mandatory — Change audit trail requirements |
| ISACA IS Audit and Assurance Standards | ITAF 3rd Edition | Methodology framework for IT audit |
| ISO/IEC 27001:2022 | Annex A.8.32 — Change Management | Supporting control framework |
| [Organization Name] Internal Audit Charter | [Document ID] | Internal governance |
| [Organization Name] IT Change Management Policy | [Document ID] | Supporting policy |

### 6.2 Review Methodology

*The following steps constitute the standard methodology for auditing version control logs.*

**Step 1 — Log Extraction**
- Export commit logs from all in-scope repositories for the review period using standardised scripts or repository management tooling
- Validate log completeness against repository metadata (total commit count, date range)

**Step 2 — Reconciliation with Change Management Records**
- Cross-reference all production branch commits against approved change tickets in the ITSM system ([ITSM Platform Name])
- Identify and escalate any commits lacking a valid change ticket reference

**Step 3 — Access Validation**
- Verify that all commit authors hold current, valid repository access at the time of the commit
- Cross-reference against HR records for staff movements (joiners, movers, leavers)

**Step 4 — Branch Protection and Peer Review Compliance**
- Confirm that all merges to protected branches were approved via a pull/merge request with the required number of reviewers ([X] reviewers per policy)
- Identify any bypasses of branch protection rules

**Step 5 — Change Classification and Risk Review**
- Classify each sampled commit by change type and risk level
- Apply enhanced scrutiny to HOTFIX and SECURITY classified commits

**Step 6 — Finding Documentation and Escalation**
- Document all exceptions and findings with supporting evidence extracted from commit logs
- Assign severity classification (refer to Section 7)
- Escalate Critical and High findings to the Head of Internal Audit and [CISO / CTO] within [X] business days

### 6.3 Sampling Approach

| Risk Level | Minimum Sample Size | Selection Basis |
|---|---|---|
| Critical | 100% of production commits | Full population review |
| High | 25% of commits, minimum 50 | Random stratified sample |
| Medium | 10% of commits, minimum 20 | Random sample |
| Low | 5% of commits, minimum 10 | Random sample |

---

## 7. Finding Severity Classification

*Findings arising from the review of version control logs are classified by severity to prioritise remediation and ensure appropriate escalation.*

### 7.1 Severity Classification Framework

| Severity Level | Definition | Examples in Version Control Context | Required Action | Resolution Deadline |
|---|---|---|---|---|
| **Critical** | Immediate threat to integrity, confidentiality, or availability; evidence of policy breach or potential fraud | Unauthorised production commit; commit by a terminated employee; force-push overwriting audit history | Immediate escalation to CTO, CISO, and Board Risk Committee; activate Incident Response | 24 hours |
| **High** | Significant control weakness with material risk of exploitation or non-compliance | Missing change ticket reference on production commit; bypass of peer review requirement; dormant account with active commit access | Escalate to Head of Internal Audit and [CISO]; formal remediation plan required | 7 business days |
| **Medium** | Control gap with limited immediate risk but requiring remediation | Inconsistent commit message standards; delayed access revocation (>5 days post-offboarding); missing tag/release reference | Assign to custodian for remediation; track in findings register | 30 calendar days |
| **Low** | Minor observation or improvement opportunity | Informal commit message convention; minor documentation gaps | Note in findings register; address in next review cycle | 90 calendar days |
| **Informational** | Observation with no direct risk; best-practice recommendation | Opportunities to improve automation or tooling integration | Include in audit report recommendations section | [No hard deadline] |

### 7.2 Findings Register

*All findings arising from version control log reviews must be recorded in the findings register below or in the centralised audit management system.*

| Finding ID | Repository | Date Identified | Description | Severity | Owner | Remediation Action | Target Date | Status |
|---|---|---|---|---|---|---|---|---|
| VCL-F-001 | [Repository Name] | [DD-MMM-YYYY] | [Brief description of finding] | [Critical/High/Medium/Low] | [Owner Name/Role] | [Agreed remediation steps] | [DD-MMM-YYYY] | [Open / In Progress / Closed] |
| [Add Row] | | | | | | | | |

---

## 8. Log Retention and Integrity

*Version control logs must be retained in a manner that ensures their completeness, immutability, and availability for audit and regulatory purposes.*

### 8.1 Retention Requirements

| Log Type | Minimum Retention Period | Storage Location | Format | Immutability Control |
|---|---|---|---|---|
| Commit History (all branches) | 7 years | [Repository Platform / Archive Storage] | Native Git / exportable JSON/CSV | Branch protection; repository archiving |
| Pull / Merge Request Audit Trail | 7 years | [Repository Platform / Archive Storage] | Native platform logs | Platform-managed |
| Access Audit Logs (repo access events) | 7 years | [SIEM / Log Management Platform] | Syslog / JSON | WORM storage / SIEM immutable archive |
| Release and Tag Records | 7 years | [Repository Platform / Archive Storage] | Native Git tags | Signed tags (GPG) |

### 8.2 Integrity Controls

- [ ] Repository history is protected against force-push and history rewriting on all protected branches
- [ ] Commit signing (GPG / SSH key signing) is enforced for all production commits
- [ ] Periodic hash verification of log exports is performed and documented
- [ ] Log exports forwarded to SIEM ([SIEM Platform Name]) within [X] hours of generation

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for the management, review, and maintenance of Version Control Logs.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Internal Audit | IT Audit Team | Technical Custodian | IT Security Officer | Change Manager | CTO / CIO |
|---|---|---|---|---|---|---|
| Define log standards and review methodology | A | R | C | C | C | I |
| Configure repository log settings and retention | I | I | R | C | I | A |
| Perform continuous automated monitoring | I | C | R | R | I | I |
| Conduct quarterly log review | A | R | C | C | C | I |
| Reconcile commits with change tickets | C | R | C | I | R | I |
| Document and escalate findings | A | R | I | C | I | I |
| Remediate identified findings | I | I | A | C | C | R |
| Review and approve this document | A | C | I | C | I | R |
| Report to Board / Risk Committee | A | C | I | I | I | R |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name, Role] | Initial version — baseline template established |
| [Add Row] | | | |

### 10.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Internal Audit | [Name] | __________________ | [DD-MMM-YYYY] |
| Chief Technology Officer | [Name] | __________________ | [DD-MMM-YYYY] |
| Chief Information Security Officer | [Name] | __________________ | [DD-MMM-YYYY] |
| Chief Risk Officer | [Name] | __________________ | [DD-MMM-YYYY] |

---

## 11. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT Policy Document | **Clause 10.14** | Requirements for audit trails and change records in technology systems |
| BNM RMiT Policy Document | Clause 10.1 – 10.13 | Broader technology risk management requirements |
| [Organization Name] IT Change Management Policy | [Document ID] | Internal policy governing change management procedures |
| [Organization Name] Information Security Policy | [Document ID] | Classification, access control, and log management standards |
| [Organization Name] Internal Audit Charter | [Document ID] | Mandate and authority of the Internal Audit function |
| ISO/IEC 27001:2022 | Annex A.8.32 | Change management controls |
| ISACA ITAF | Chapter 3 — IT Audit Standards | Methodology standards applied in this review process |

---

## Appendices

### Appendix A — Version Control Log Export Template

*Use the following fields when extracting and archiving commit logs for quarterly review evidence packages.*

```
Repository:         [Repository Name]
Review Period:      [DD-MMM-YYYY] to [DD-MMM-YYYY]
Extracted By:       [Name, Role]
Extraction Date:    [DD-MMM-YYYY]
Extraction Method:  [git log --format / API export / Platform report]

---
Commit Hash | Branch | Author | Timestamp | Change Type | Ticket Ref | Files Changed | Commit Message
------------|--------|--------|-----------|-------------|------------|---------------|---------------
[Value]     | [Value]| [Value]| [Value]   | [Value]     | [Value]    | [Value]       | [Value]
```

### Appendix B — Quarterly Review Checklist

*Complete this checklist for each quarterly log review cycle and retain as audit evidence.*

| # | Review Step | Completed | Evidence Reference | Reviewer | Date |
|---|---|---|---|---|---|
| 1 | Log extraction completed for all in-scope repositories | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |
| 2 | Total commit count reconciled with repository metadata | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |
| 3 | All production commits reconciled with ITSM change tickets | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |
| 4 | Unauthorised or unmatched commits investigated and escalated | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |
| 5 | Access validation completed (active authors vs. HR records) | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |
| 6 | Branch protection compliance reviewed | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |
| 7 | Findings documented in findings register | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |
| 8 | Critical/High findings escalated within required timeframe | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |
| 9 | Review summary report prepared and signed off | [ ] Yes / [ ] No | [Evidence File/Location] | [Name] | [DD-MMM-YYYY] |

### Appendix C — Glossary

| Term | Definition |
|---|---|
| **Commit** | A discrete recorded change to one or more files within a version control repository |
| **Branch** | An independent line of development within a repository |
| **Pull Request / Merge Request** | A formal request to merge changes from one branch into another, subject to peer review |
| **Repository** | A storage location for version-controlled files and their complete change history |
| **Force Push** | An operation that overwrites remote branch history; a high-risk action restricted on protected branches |
| **Tag / Release** | A named reference to a specific commit, typically used to mark software releases |
| **ITSM** | IT Service Management — the system used to log and approve change requests |
| **WORM** | Write Once Read Many — a storage principle ensuring log immutability |
| **RMiT** | Risk Management in Technology — BNM Policy Document on technology risk management |
| **SIEM** | Security Information and Event Management — centralised log aggregation and alerting platform |

### Appendix D — Log Anomaly Escalation Matrix

*Use the following matrix when an anomaly is detected during continuous monitoring or quarterly review.*

| Anomaly Type | Initial Notification | Escalation (if unresolved within SLA) | Evidence to Preserve |
|---|---|---|---|
| Commit by terminated staff | IT Security Officer + HR | CISO + Head of Internal Audit within 4 hours | Commit hash, author identity, files changed, timestamp |
| Direct push to protected branch bypassing PR | Technical Custodian | Head of Internal Audit within 24 hours | Commit hash, branch protection audit log |
| Commit without valid change ticket reference | Change Manager | Head of Internal Audit within 3 business days | Commit hash, ITSM query result |
| Bulk file deletion in production repository | Technical Custodian + IT Security | CTO + CISO within 2 hours | Full commit diff, author identity, access logs |
| Suspected history rewriting (force push) | IT Security Officer | CISO + Head of Internal Audit immediately | Repository reflog, before/after state |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure is prohibited. For queries regarding this document, contact the Head of Internal Audit at [Contact Email / Extension].*