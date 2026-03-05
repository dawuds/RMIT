# Code Review Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Application Development |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]
**Regulatory Framework:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Policy Statements and Requirements](#2-policy-statements-and-requirements)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Code Review Log Register](#4-code-review-log-register)
5. [Review Findings and Defect Tracking](#5-review-findings-and-defect-tracking)
6. [Exceptions and Escalation Process](#6-exceptions-and-escalation-process)
7. [Compliance and Enforcement](#7-compliance-and-enforcement)
8. [Review and Approval History](#8-review-and-approval-history)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the purpose of this log — why it exists, what regulatory obligation it fulfills, and how it supports secure software development practices within the organization.*

This document serves as the authoritative log record for all code reviews conducted by [Organization Name] against established secure coding standards. It provides an auditable trail of review activities undertaken as part of the organization's application security controls, in compliance with BNM RMiT Policy Document, specifically Clause 10.6 governing application security and secure software development lifecycle (SSDLC) requirements.

Code Review Logs are a **mandatory** compliance artifact demonstrating that application changes are systematically reviewed for security vulnerabilities, coding defects, and adherence to [Organization Name]'s secure coding standards prior to deployment into production environments.

### 1.2 Scope

*Define the systems, applications, and types of code changes covered by this log. Specify any exclusions and the rationale.*

This log applies to:

- All application source code changes (new development, enhancements, and patches) deployed to production systems classified as **critical** or **high** under [Organization Name]'s IT asset classification framework
- Code changes to systems handling customer data, financial transactions, or regulated information
- Third-party and vendor-supplied code integrated into [Organization Name]'s technology stack
- Infrastructure-as-Code (IaC), scripts, and automation workflows that interact with production environments
- API integrations and microservices forming part of [Organization Name]'s digital banking or financial services platform

**Out of Scope:**

- Exploratory or proof-of-concept code confined to isolated development sandboxes with no path to production
- Documentation-only changes with no functional code modification
- [Any other exclusions — specify with justification]

### 1.3 Log Characteristics

| Attribute | Detail |
|---|---|
| **Log Type** | System-generated with human reviewer attestation |
| **Generation Method** | Automated via [Code Review Tool / DevSecOps Pipeline — e.g., SonarQube, Checkmarx, GitHub Actions] |
| **Monitoring Frequency** | Continuous (per code commit / pull request) |
| **Formal Review Frequency** | Quarterly aggregate review by Head of Application Development |
| **Retention Period** | [e.g., 7 years, per BNM record retention requirements] |
| **Storage Location** | [Repository / SIEM / GRC Platform — e.g., GitLab, Jira, ServiceNow] |

---

## 2. Policy Statements and Requirements

### 2.1 Policy Statements

*State the organization's binding policy commitments regarding code review. These should directly reflect the controls mandated under RMiT Clause 10.6.*

[Organization Name] is committed to embedding security throughout the software development lifecycle. The following policy statements govern the conduct and recording of code reviews:

1. **Mandatory Review:** No code change shall be merged to the main branch or deployed to production without a completed, documented code review by an authorized reviewer.

2. **Secure Coding Standards Compliance:** All code reviews shall be conducted against [Organization Name]'s Secure Coding Standards, which incorporate OWASP Top 10, SANS Top 25, and relevant BNM RMiT requirements.

3. **Independence of Review:** Code authors shall not serve as the sole reviewer of their own code changes. Peer review by an independent developer or security champion is mandatory.

4. **Tooling and Automation:** Static Application Security Testing (SAST) and Software Composition Analysis (SCA) scans shall be executed automatically for every pull request. Results must be acknowledged and addressed before merge approval.

5. **Defect Remediation:** All Critical and High severity findings identified during code review must be remediated prior to production deployment. Medium and Low findings must be tracked and remediated within agreed timelines as defined in Section 5.

6. **Completeness of Records:** All code review activities — automated and manual — shall generate a log entry in accordance with this document. Log entries must be complete, accurate, and tamper-evident.

7. **Quarterly Aggregate Review:** The Head of Application Development shall conduct and document a quarterly aggregate review of code review logs to identify systemic trends, recurring defect types, and process improvement opportunities.

### 2.2 Secure Coding Standards Reference

*List the secure coding standards that reviewers must apply. Reference internal policies and external frameworks.*

Code reviews shall assess conformance with the following standards and references:

| Standard / Reference | Applicability |
|---|---|
| [Organization Name] Secure Coding Standard v[X.X] | Primary internal standard |
| OWASP Top 10 (current edition) | Web application vulnerabilities |
| OWASP Mobile Top 10 (current edition) | Mobile application vulnerabilities |
| OWASP API Security Top 10 (current edition) | API security vulnerabilities |
| SANS/CWE Top 25 Most Dangerous Software Weaknesses | Common weakness enumeration |
| BNM RMiT Policy Document, Clause 10.6 | Regulatory requirement |
| [Organization Name] Cryptography Policy v[X.X] | Encryption and key management |
| [Organization Name] Data Classification Policy v[X.X] | Data handling in code |
| [Language-specific style guide — e.g., Google Java Style Guide] | Language-specific conventions |

### 2.3 Mandatory Review Checklist Items

*Specify the minimum checklist items that every code review must address. This list should be embedded in or referenced by the organization's code review tooling.*

At minimum, each code review shall verify:

- [ ] Input validation and sanitization for all user-supplied data
- [ ] Output encoding to prevent injection attacks (SQL, XSS, command injection)
- [ ] Authentication and session management implementation
- [ ] Authorization checks and access control enforcement (least privilege)
- [ ] Cryptographic algorithm correctness and key management practices
- [ ] Sensitive data handling (no hardcoded credentials, secrets, or PII in code)
- [ ] Error handling and logging (no sensitive data in logs or error messages)
- [ ] Dependency versions and known vulnerability status (SCA scan results)
- [ ] Third-party library usage and licensing compliance
- [ ] Race conditions and concurrency issues
- [ ] Business logic vulnerabilities specific to the feature under review
- [ ] Compliance with [Organization Name]'s data classification and retention requirements

---

## 3. Roles and Responsibilities

### 3.1 RACI Matrix

*Define accountability and responsibility for all activities related to code review and maintenance of this log. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of App Dev | Security Champion | Developer / Author | Peer Reviewer | IT Security Officer | Compliance Officer | CISO |
|---|---|---|---|---|---|---|---|
| Define and maintain secure coding standards | A | R | C | C | C | I | I |
| Configure and maintain SAST/SCA tooling | A | R | I | I | C | I | I |
| Submit code for review (raise pull request) | I | I | R | I | I | I | I |
| Conduct automated SAST/SCA scan | I | I | R | I | I | I | I |
| Conduct manual peer code review | A | C | I | R | C | I | I |
| Document review findings in log | I | C | R | R | I | I | I |
| Remediate identified defects | A | C | R | I | I | I | I |
| Verify defect remediation | I | R | I | R | C | I | I |
| Approve merge / deployment readiness | A | C | I | R | C | I | I |
| Escalate Critical/unresolved findings | A | R | C | C | R | I | I |
| Conduct quarterly aggregate log review | R/A | C | I | I | C | C | I |
| Report code review metrics to management | A | C | I | I | C | R | I |
| Approve exceptions to mandatory review | A | C | I | I | R | C | A |
| Maintain log retention and integrity | A | I | I | I | R | C | I |

### 3.2 Role Definitions

*Provide a brief description of each role's responsibilities in the context of code review.*

| Role | Description |
|---|---|
| **Head of Application Development** | Accountable for the overall code review program, policy compliance, and quarterly aggregate review. Approves exceptions and escalation outcomes. |
| **Security Champion** | Embedded security resource within the development team. Supports reviewers, configures security tooling, and triages security findings. |
| **Developer / Author** | Responsible for writing code compliant with secure coding standards, submitting code for review, and remediating identified defects. |
| **Peer Reviewer** | An independent developer (not the code author) who conducts the manual review, documents findings, and approves or rejects the merge request. |
| **IT Security Officer** | Provides security expertise for escalated or Critical findings. Advises on remediation approaches and approves exceptions where security risk is accepted. |
| **Compliance Officer** | Monitors regulatory alignment of code review practices and reports on compliance status to senior management. |
| **CISO** | Ultimate accountability for application security posture. Receives escalated Critical findings and signs off on material exceptions. |

---

## 4. Code Review Log Register

### 4.1 Log Entry Fields

*This section defines the mandatory fields for each code review log entry. In automated environments, these fields are populated by the DevSecOps pipeline and code review tooling. Manual fields require reviewer attestation.*

Each log entry shall capture the following minimum data fields:

| Field | Source | Mandatory | Description |
|---|---|---|---|
| Review ID | System-generated | Yes | Unique identifier for the review event (e.g., CR-2024-00001) |
| Repository / System | System | Yes | Name of the source code repository and target system |
| Pull Request / Change ID | System | Yes | Unique identifier of the pull request or change ticket |
| Commit Hash | System | Yes | SHA hash of the code commit under review |
| Author | System | Yes | Developer who authored the code change |
| Reviewer(s) | Manual | Yes | Name(s) of peer reviewer(s) |
| Review Type | System/Manual | Yes | Automated (SAST/SCA), Manual Peer Review, or Both |
| Date Submitted | System | Yes | Date the pull request was raised |
| Date Review Completed | System/Manual | Yes | Date the review was marked complete |
| Standards Applied | Manual | Yes | Reference to secure coding standards checklist version used |
| Findings Count (Critical) | System/Manual | Yes | Number of Critical severity findings identified |
| Findings Count (High) | System/Manual | Yes | Number of High severity findings identified |
| Findings Count (Medium) | System/Manual | Yes | Number of Medium severity findings identified |
| Findings Count (Low) | System/Manual | Yes | Number of Low severity findings identified |
| Findings Count (Info) | System/Manual | No | Number of Informational findings identified |
| Review Outcome | Manual | Yes | Approved / Approved with Conditions / Rejected |
| Reviewer Comments | Manual | Yes | Summary of review observations and rationale |
| Remediation Required | Manual | Yes | Yes / No — whether defect remediation is required before merge |
| Escalation Triggered | Manual | Yes | Yes / No — whether escalation to Security/CISO was triggered |
| Approved for Merge | Manual | Yes | Yes / No — final merge approval status |
| Approval Date | System | Yes | Date and time of merge approval |

### 4.2 Code Review Log — Current Period

*This table is populated continuously as code reviews are completed. In automated environments, this register is exported from the DevSecOps pipeline. For manual records, each row must be completed by the reviewer at time of review.*

| Review ID | Repository / System | Pull Request ID | Author | Reviewer(s) | Review Type | Date Submitted | Date Completed | Critical | High | Medium | Low | Outcome | Escalation | Approved for Merge |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNNN] | [Repository Name] | [PR-XXXXX] | [Author Name] | [Reviewer Name] | [Automated / Manual / Both] | [DD/MM/YYYY] | [DD/MM/YYYY] | [0] | [0] | [0] | [0] | [Approved / Rejected] | [Yes / No] | [Yes / No] |
| CR-[YYYY]-[NNNNN] | [Repository Name] | [PR-XXXXX] | [Author Name] | [Reviewer Name] | [Automated / Manual / Both] | [DD/MM/YYYY] | [DD/MM/YYYY] | [0] | [0] | [0] | [0] | [Approved / Rejected] | [Yes / No] | [Yes / No] |
| CR-[YYYY]-[NNNNN] | [Repository Name] | [PR-XXXXX] | [Author Name] | [Reviewer Name] | [Automated / Manual / Both] | [DD/MM/YYYY] | [DD/MM/YYYY] | [0] | [0] | [0] | [0] | [Approved / Rejected] | [Yes / No] | [Yes / No] |

*[Rows to be added continuously. Full log export is available from [DevSecOps Platform / GRC Tool]. This table represents a summary view for quarterly review purposes.]*

---

## 5. Review Findings and Defect Tracking

### 5.1 Findings Severity Classification

*Define severity levels to ensure consistent classification of code review findings across all reviewers and automated tools.*

| Severity | Definition | Examples |
|---|---|---|
| **Critical** | A vulnerability that, if exploited, would result in complete system compromise, unauthorized access to sensitive/financial data, or material regulatory breach. Requires immediate remediation — no production deployment permitted. | SQL injection, hardcoded credentials, authentication bypass, remote code execution |
| **High** | A vulnerability that significantly increases risk of unauthorized access, data exposure, or system disruption. Must be remediated before production deployment unless a formal exception is approved. | Broken access control, insecure direct object references, sensitive data in logs, use of deprecated cryptographic algorithms |
| **Medium** | A weakness that may contribute to a security incident under specific conditions. Must be tracked and remediated within [30 days] of identification. | CSRF without critical data exposure, verbose error messages, missing security headers |
| **Low** | A minor deviation from best practice with limited immediate security impact. Must be tracked and remediated within [90 days] of identification. | Missing input length validation on non-sensitive fields, minor code quality issues, informational-only log entries |
| **Informational** | Observations for improvement with no immediate security impact. Addressed at developer discretion. | Code style deviations, optimization suggestions |

### 5.2 Defect Remediation Tracking

*Record all findings requiring remediation. Each finding from the Code Review Log that is classified Critical, High, or Medium must have a corresponding entry in this tracking table.*

| Finding ID | Review ID | Repository | Finding Description | Severity | CWE / OWASP Reference | Assigned To | Date Identified | Target Remediation Date | Actual Remediation Date | Verification Reviewer | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| F-[YYYY]-[NNNNN] | CR-[YYYY]-[NNNNN] | [Repository] | [Brief description of the finding] | [Critical / High / Medium / Low] | [CWE-XXX / OWASP A0X] | [Developer Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Reviewer Name] | [Open / In Progress / Resolved / Accepted Risk] |
| F-[YYYY]-[NNNNN] | CR-[YYYY]-[NNNNN] | [Repository] | [Brief description of the finding] | [Critical / High / Medium / Low] | [CWE-XXX / OWASP A0X] | [Developer Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Reviewer Name] | [Open / In Progress / Resolved / Accepted Risk] |

### 5.3 Quarterly Aggregate Metrics Summary

*Completed by the Head of Application Development at the end of each quarter based on the full log extract. Used to identify trends and drive process improvements.*

| Metric | Q[X] [YYYY] | Q[X] [YYYY] | Q[X] [YYYY] | Q[X] [YYYY] |
|---|---|---|---|---|
| Total code reviews conducted | | | | |
| Total pull requests reviewed | | | | |
| Reviews with at least one finding | | | | |
| Total Critical findings | | | | |
| Total High findings | | | | |
| Total Medium findings | | | | |
| Total Low findings | | | | |
| Critical findings remediated within SLA | | | | |
| High findings remediated within SLA | | | | |
| Reviews completed within [X] business days | | | | |
| Pull requests rejected (review failed) | | | | |
| Exceptions approved | | | | |
| Escalations triggered | | | | |
| Average time from submission to review completion | | | | |
| Most frequent finding type (Top 3) | | | | |

---

## 6. Exceptions and Escalation Process

### 6.1 Exception Policy

*Define the circumstances under which a code review requirement may be waived or modified, and the controls that must be in place when an exception is granted.*

All exceptions to mandatory code review requirements must be formally approved and documented. Exceptions do not eliminate risk; compensating controls must be applied and documented for the duration of the exception.

**Grounds for Exception (Limited to):**

- Emergency security patches where the remediation window is critically time-sensitive and deferral would increase risk to the organization or customers
- Regulatory-mandated emergency changes with a defined regulatory authority instruction
- [Other grounds — specify with justification]

**Exception Conditions:**

- No exception shall be granted for Critical or High severity vulnerabilities in code already identified as defective
- Exceptions are time-limited to a maximum of [30 calendar days] unless renewed with documented justification
- All exceptions must include a defined compensating control (e.g., enhanced monitoring, WAF rule deployment, rollback plan)
- Post-exception code review must be completed within the exception period

### 6.2 Exception Register

*Record all approved exceptions. Exceptions must be raised before the code change is merged or deployed.*

| Exception ID | Related Review ID | Repository / System | Requestor | Justification | Compensating Controls | Approved By | Approval Date | Exception Expiry Date | Post-Exception Review Completed | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| EX-[YYYY]-[NNNNN] | CR-[YYYY]-[NNNNN] | [Repository / System] | [Name, Role] | [Business justification for exception] | [Describe compensating controls applied] | [Approver Name, Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Yes / No / Date] | [Open / Closed] |
| EX-[YYYY]-[NNNNN] | CR-[YYYY]-[NNNNN] | [Repository / System] | [Name, Role] | [Business justification for exception] | [Describe compensating controls applied] | [Approver Name, Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Yes / No / Date] | [Open / Closed] |

### 6.3 Escalation Process

*Define the escalation path for findings or situations that require action beyond the development team.*

The following escalation triggers and process apply:

**Escalation Triggers:**

- Any **Critical** severity finding identified during code review
- Any **High** severity finding where the developer disputes the finding or declines to remediate
- Any code change that is rejected at review and the author seeks to override the rejection
- Recurring findings of the same type (3 or more instances across a rolling 90-day period) indicating a systemic training or tooling gap
- Any finding that may constitute a reportable incident under BNM or PDPA obligations
- Exception requests where the IT Security Officer assessment is that risk acceptance is not appropriate

**Escalation Path:**

```
Developer / Author
       ↓
  Peer Reviewer
       ↓ (if unresolved)
 Security Champion
       ↓ (if Critical / systemic / disputed)
 IT Security Officer
       ↓ (if Critical finding confirmed / exception sought)
Head of Application Development
       ↓ (if material risk / regulatory implication)
     CISO
```

**Escalation Log:**

| Escalation ID | Review ID | Escalation Date | Escalation Trigger | Escalated To | Resolution Summary | Resolution Date | Escalation Outcome |
|---|---|---|---|---|---|---|---|
| ESC-[YYYY]-[NNNNN] | CR-[YYYY]-[NNNNN] | [DD/MM/YYYY] | [Describe trigger] | [Role / Name] | [Summary of resolution] | [DD/MM/YYYY] | [Resolved / Pending / Escalated Further] |

---

## 7. Compliance and Enforcement

### 7.1 Regulatory Compliance

*Describe how this log demonstrates compliance with BNM RMiT and other applicable regulatory requirements.*

This Code Review Log directly supports [Organization Name]'s compliance with:

- **BNM RMiT Clause 10.6** — Application Security: Requiring that financial institutions implement a secure software development lifecycle (SSDLC) that includes security-focused code review and testing prior to production deployment.
- **[Any additional applicable BNM policy references — e.g., BNM Operational Risk, BNM Outsourcing Policy where vendor code is involved]**
- **PDPA 2010** — Where code handles personal data, reviews must confirm appropriate technical safeguards are implemented.

The existence, completeness, and currency of this log will be assessed during:

- BNM supervisory examinations and Technology Risk assessments
- Internal Audit reviews of the IT/application development control environment
- External audits and penetration testing engagements
- ISO 27001 / [Other certification] surveillance audits

### 7.2 Enforcement

*State the consequences of non-compliance with code review requirements and the mechanism for monitoring adherence.*

Non-compliance with code review requirements — including merging code without a completed review, failing to document findings, or deploying code with unresolved Critical/High findings without an approved exception — constitutes a breach of [Organization Name]'s IT Security Policy and may result in:

- Mandatory remediation at the developer's expense of time
- Formal written warning under [Organization Name]'s HR disciplinary framework
- Escalation to the CISO and relevant business unit head
- Reporting to BNM where the breach results in a security incident affecting regulated operations

**Compliance Monitoring:**

| Control | Monitoring Method | Frequency | Monitored By |
|---|---|---|---|
| All pull requests have a completed review log entry | Automated pipeline gate — blocks merge without review attestation | Continuous | DevSecOps Pipeline |
| No Critical/High findings unresolved at time of merge | Automated pipeline quality gate | Per pull request | SAST/SCA Tool |
| Review completion timeliness (within [X] business days) | Dashboard metric from [Code Review Tool] | Weekly | Head of Application Development |
| Exception register currency and completeness | Manual check during quarterly review | Quarterly | IT Security Officer |
| Escalation log resolution within defined SLAs | Manual check during quarterly review | Quarterly | Head of Application Development |
| Log retention and integrity | Audit log review in [SIEM / GRC Platform] | Quarterly | IT Security Officer |

### 7.3 Log Integrity and Tamper-Evidence

*Describe the controls in place to ensure the integrity and authenticity of code review log records.*

To ensure the integrity of Code Review Logs as an audit-ready artifact:

- Log entries generated by automated tooling ([SAST Tool / DevSecOps Platform]) are written to an append-only audit log with digital timestamps
- Manual review attestations are recorded via [Code Review Platform — e.g., GitHub, GitLab, Azure DevOps] with authenticated user credentials, ensuring non-repudiation
- Log exports for quarterly review and regulatory purposes are signed or hash-verified by the Head of Application Development
- Access to modify or delete log entries is restricted to system administrators with [MFA / PAM controls]; all such access is itself logged and reviewed
- Log retention complies with [Organization Name]'s Records Retention Schedule, retaining code review logs for a minimum of [7 years]

---

## 8. Review and Approval History

### 8.1 Document Version History

*Record all versions of this document, including initial creation and subsequent updates.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Role] | [Reviewer Name, Role] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name, Role] | [Reviewer Name, Role] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Role] | [Reviewer Name, Role] | [Description of changes] |

### 8.2 Approval Sign-Off

*This document requires formal approval from the following roles prior to becoming effective. Approved signatures confirm that the document accurately reflects organizational policy and satisfies applicable regulatory requirements.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Application Development | [Name] | ___________________________ | [DD/MM/YYYY] |
| IT Security Officer | [Name] | ___________________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Name] | ___________________________ | [DD/MM/YYYY] |
| Compliance Officer | [Name] | ___________________________ | [DD/MM/YYYY] |
| [Chief Information Officer / CTO] | [Name] | ___________________________ | [DD/MM/YYYY] |

---

## 9. References

*List all regulatory, internal policy, and technical standards referenced in or applicable to this document.*

### 9.1 Regulatory References

| Reference | Description |
|---|---|
| BNM RMiT Policy Document — Clause 10.6 | Application Security — secure software development lifecycle and code review requirements |
| BNM RMiT Policy Document — Clause 10 (general) | Technology Risk Management — overarching requirements for application and system security |
| Personal Data Protection Act 2010 (PDPA) | Data protection obligations applicable to code handling personal data |
| [BNM Guidelines on Outsourcing] | Where code review applies to vendor or third-party supplied code |
| [Financial Services Act 2013 / Islamic Financial Services Act 2013] | Where applicable to the organization's regulatory license |

### 9.2 Internal Policy References

| Reference | Description |
|---|---|
| [Organization Name] IT Security Policy v[X.X] | Overarching information security policy |
| [Organization Name] Secure Coding Standard v[X.X] | Primary secure coding standard applied during code review |
| [Organization Name] Secure Software Development Lifecycle (SSDLC) Procedure v[X.X] | End-to-end SSDLC procedure of which code review is a component |
| [Organization Name] Vulnerability Management Policy v[X.X] | Governs remediation SLAs referenced in Section 5 |
| [Organization Name] Change Management Policy v[X.X] | Governs the change process into which code review is embedded |
| [Organization Name] Data Classification Policy v[X.X] | Informs the scope and depth of review for data-handling code |
| [Organization Name] Records Retention Schedule v[X.X] | Governs log retention periods |
| [Organization Name] IT Risk Register | Records residual risks associated with code review gaps |

### 9.3 Technical Standards and Frameworks

| Reference | Description |
|---|---|
| OWASP Top 10 (current edition) | Web application security risk classification |
| OWASP API Security Top 10 (current edition) | API security risk classification |
| OWASP Mobile Top 10 (current edition) | Mobile application security risk classification |
| SANS/CWE Top 25 Most Dangerous Software Weaknesses | Software weakness enumeration |
| NIST SP 800-53 (SA-11) | Developer Security Testing and Evaluation |
| ISO/IEC 27002:2022 — Control 8.28 | Secure coding practices |

---

## 10. Appendices

### Appendix A: Code Review Checklist Template

*This checklist is used by peer reviewers during manual code review. A completed checklist must be attached to or referenced in the corresponding log entry.*

**Review ID:** CR-[YYYY]-[NNNNN]
**Repository:** [Repository Name]
**Pull Request / Change ID:** [PR-XXXXX]
**Reviewer:** [Name]
**Review Date:** [DD/MM/YYYY]

| # | Review Item | Standard Reference | Status | Reviewer Notes |
|---|---|---|---|---|
| 1 | Input validation implemented for all user-supplied inputs | OWASP A03, CWE-20 | [ ] Pass [ ] Fail [ ] N/A | |
| 2 | Output encoding applied to prevent injection (SQL, XSS, command) | OWASP A03, CWE-79, CWE-89 | [ ] Pass [ ] Fail [ ] N/A | |
| 3 | Authentication mechanisms correctly implemented | OWASP A07, CWE-287 | [ ] Pass [ ] Fail [ ] N/A | |
| 4 | Authorization / access control enforced at all sensitive endpoints | OWASP A01, CWE-862 | [ ] Pass [ ] Fail [ ] N/A | |
| 5 | No hardcoded credentials, tokens, or secrets in code | CWE-798 | [ ] Pass [ ] Fail [ ] N/A | |
| 6 | Approved cryptographic algorithms used; no deprecated algorithms | CWE-327, [Org Crypto Policy] | [ ] Pass [ ] Fail [ ] N/A | |
| 7 | Sensitive data not logged or exposed in error messages | CWE-532, CWE-209 | [ ] Pass [ ] Fail [ ] N/A | |
| 8 | Third-party dependencies free of known Critical/High CVEs (SCA scan reviewed) | OWASP A06 | [ ] Pass [ ] Fail [ ] N/A | |
| 9 | Secure session management implemented | OWASP A07, CWE-384 | [ ] Pass [ ] Fail [ ] N/A | |
| 10 | CSRF protection applied where applicable | CWE-352 | [ ] Pass [ ] Fail [ ] N/A | |
| 11 | File upload handling secured (type validation, storage controls) | CWE-434 | [ ] Pass [ ] Fail [ ] N/A | |
| 12 | Business logic reviewed for abuse cases | [Org Secure Coding Standard] | [ ] Pass [ ] Fail [ ] N/A | |
| 13 | Race conditions and concurrency issues assessed | CWE-362 | [ ] Pass [ ] Fail [ ] N/A | |
| 14 | Logging implemented for security-relevant events (audit trail) | [Org Logging Policy] | [ ] Pass [ ] Fail [ ] N/A | |
| 15 | Data handling compliant with classification and PDPA obligations | PDPA 2010, [Org Data Classification Policy] | [ ] Pass [ ] Fail [ ] N/A | |

**Overall Review Outcome:**
[ ] **Approved** — No material findings; code meets secure coding standards
[ ] **Approved with Conditions** — Minor findings noted; may merge with tracking of remediation
[ ] **Rejected** — Critical or High findings require remediation before merge

**Reviewer Signature:** ___________________________
**Date:** [DD/MM/YYYY]

---

### Appendix B: SAST / SCA Tool Configuration Reference

*Document the configuration baseline for automated security testing tools integrated into the CI/CD pipeline.*

| Tool | Purpose | Version | Ruleset / Policy | Integration Point | Owner |
|---|---|---|---|---|---|
| [e.g., SonarQube / Checkmarx / Semgrep] | SAST — static code analysis | [Version] | [Policy name/version] | [CI/CD stage — e.g., PR gate] | [Role] |
| [e.g., Dependabot / Snyk / OWASP Dependency-Check] | SCA — dependency vulnerability scanning | [Version] | [Policy name/version] | [CI/CD stage] | [Role] |
| [e.g., GitLeaks / TruffleHog] | Secret detection | [Version] | [Policy name/version] | [CI/CD stage — e.g., pre-commit] | [Role] |
| [e.g., Trivy] | Container image scanning | [Version] | [Policy name/version] | [CI/CD stage] | [Role] |

*Tool configuration and quality gate thresholds are maintained in [DevSecOps Platform / IaC repository location]. Changes to tool configuration require approval from the IT Security Officer.*

---

### Appendix C: Quarterly Review Report Template

*Completed by the Head of Application Development at the end of each quarter. This report summarizes the aggregate code review log and is submitted to [Governance Forum / CISO / Risk Committee].*

**Quarter:** Q[X] [YYYY]
**Reporting Period:** [DD/MM/YYYY] to [DD/MM/YYYY]
**Prepared By:** [Name], Head of Application Development
**Date Prepared:** [DD/MM/YYYY]

**1. Summary of Code Review Activity**
[Narrative summary of review volumes, coverage, and overall outcomes for the quarter.]

**2. Key Findings and Trends**
[Summary of significant findings, recurring vulnerability types, and trend analysis compared to prior quarters.]

**3. Remediation Status**
[Summary of open, in-progress, and closed defects. Highlight any overdue items and remediation plans.]

**4. Exceptions and Escalations**
[Summary of exceptions approved and escalations triggered during the quarter, with outcomes.]

**5. Process Improvement Actions**
[Actions taken or proposed to address systemic issues, improve tooling, or enhance developer training.]

**6. Compliance Assessment**
[Assessment of overall compliance with code review policy and BNM RMiT Clause 10.6 requirements. Note any gaps and remediation plans.]

**Submitted By:** [Name] ___________________________
**Date:** [DD/MM/YYYY]

---

### Appendix D: Glossary

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the Central Bank of Malaysia |
| **CWE** | Common Weakness Enumeration — a community-developed list of software and hardware weakness types |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed cybersecurity vulnerability database |
| **OWASP** | Open Web Application Security Project — a nonprofit foundation producing guidance on web application security |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **SAST** | Static Application Security Testing — automated analysis of source code for security vulnerabilities without executing the code |
| **SCA** | Software Composition Analysis — automated identification of open-source components and known vulnerabilities in dependencies |
| **SSDLC** | Secure Software Development Lifecycle — an approach to software development that integrates security practices throughout all phases |
| **CISO** | Chief Information Security Officer |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |
| **WAF** | Web Application Firewall — a security control that filters HTTP/S traffic to web applications |
| **IaC** | Infrastructure-as-Code — managing and provisioning infrastructure through code and automation |
| **PAM** | Privileged Access Management — controls for managing and monitoring privileged user accounts |

---

*This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact [Head of Application Development] at [contact details].*

---

*End of Document — Code Review Logs Template v1.0*