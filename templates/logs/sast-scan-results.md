# SAST Scan Results

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

This document records the results of Static Application Security Testing (SAST) conducted against application source code prior to and during production releases. It serves as an audit-ready log of automated and manual static analysis activities performed to identify security vulnerabilities, coding defects, and non-compliant coding practices within [Organization Name]'s software assets.

This artifact fulfils mandatory requirements under **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.7**, which mandates that financial institutions implement application security controls throughout the software development lifecycle, including vulnerability scanning and remediation tracking. It also supports compliance with the **Personal Data Protection Act 2010 (PDPA)** with respect to protecting personal data processed by applications, and **NACSA** cybersecurity baseline requirements applicable to critical national information infrastructure.

**Scope of this document:**

- All internally developed, customised, or procured applications subject to the [Organization Name] Application Security Policy
- Applications undergoing new releases, major version changes, or significant code modifications
- Third-party components and open-source libraries integrated into in-scope applications
- Applications classified as [Critical / High / Medium] by the organisation's asset classification framework

**Out of Scope:**

- Infrastructure-level scanning (covered under separate Vulnerability Assessment artefacts)
- Dynamic runtime testing (covered under DAST Scan Results artefacts)
- Applications explicitly exempted in writing by the CISO with documented risk acceptance

---

## 2. Assessment Scope and Criteria

*Define the boundaries of this SAST scan engagement, including which application(s), version(s), repositories, and code branches were assessed. Specify the acceptance criteria applied to determine pass/fail status.*

### 2.1 Application Details

| Field | Details |
|---|---|
| **Application Name** | [Application Name] |
| **Application Owner** | [Application Owner / Business Unit] |
| **Version / Release Tag** | [Version Number / Git Tag] |
| **Repository / Branch** | [Repository URL / Branch Name] |
| **Programming Language(s)** | [e.g., Java, Python, JavaScript, C#] |
| **Framework(s)** | [e.g., Spring Boot, React, .NET Core] |
| **Environment Target** | [Development / Staging / Production] |
| **Lines of Code (LoC)** | [Approximate LoC scanned] |
| **Scan Trigger** | [Scheduled / Pre-Release / Incident-Driven / Periodic Review] |

### 2.2 Scan Scope Boundaries

*List the specific modules, packages, directories, or code components included and excluded from this scan run.*

**Included:**

- [ ] [Module / Package / Directory 1]
- [ ] [Module / Package / Directory 2]
- [ ] [Module / Package / Directory 3]

**Excluded (with justification):**

| Excluded Component | Justification for Exclusion | Approved By |
|---|---|---|
| [Component Name] | [e.g., Third-party binary, previously accepted risk, vendor-managed] | [Approver Name / Role] |

### 2.3 Acceptance Criteria

*Define the severity thresholds that must be met before this application may proceed to the next release gate.*

| Severity Level | Definition | Release Gate Policy |
|---|---|---|
| **Critical** | CVSS ≥ 9.0 — Exploitable with no user interaction, high business impact | Zero tolerance — must be remediated or formally risk-accepted before release |
| **High** | CVSS 7.0–8.9 — Significant exploitability or data exposure risk | Must be remediated within [X] days; risk acceptance requires CISO sign-off |
| **Medium** | CVSS 4.0–6.9 — Moderate risk, typically requires specific conditions to exploit | Remediation within [X] days; tracked in risk register |
| **Low** | CVSS 0.1–3.9 — Minimal exploitability or impact | Remediation within [X] days; logged and monitored |
| **Informational** | No CVSS score — Best practice deviations, code quality issues | Logged; addressed at next scheduled sprint |

**Release Decision Threshold:** [e.g., No unmitigated Critical or High findings prior to production deployment]

---

## 3. Methodology

*Describe the tools, techniques, rulesets, and process used to conduct this SAST scan. This section provides auditors with confidence in the rigour and repeatability of the assessment.*

### 3.1 SAST Tool(s) Used

| Tool Name | Vendor | Version | Licence Type | Last Updated |
|---|---|---|---|---|
| [e.g., SonarQube / Checkmarx / Semgrep / Veracode] | [Vendor] | [Version] | [Commercial / Open Source] | [Date] |
| [Tool 2] | [Vendor] | [Version] | [Commercial / Open Source] | [Date] |

### 3.2 Ruleset and Vulnerability Taxonomy

*Specify the security rulesets, coding standards, and vulnerability classifications applied during the scan.*

- **Primary Ruleset:** [e.g., OWASP Top 10 (2021), CWE/SANS Top 25, OWASP ASVS Level 2]
- **Custom Rules Applied:** [Yes / No] — [If yes, describe or reference custom rule set document]
- **Vulnerability Taxonomy:** [e.g., CWE, CVE, OWASP]
- **Compliance Rules Mapped:** [e.g., BNM RMiT Clause 10.7, PDPA data handling rules]

### 3.3 Scan Process

*Summarise the steps taken from code checkout to results review, including any CI/CD pipeline integration.*

1. **Code Retrieval:** Source code retrieved from [Repository / Branch] at commit hash `[Commit Hash]` on [Scan Date and Time].
2. **Environment Setup:** Scan environment configured using [Tool configuration file / policy profile name].
3. **Automated Scan Execution:** SAST tool executed against the defined scope. Scan duration: [HH:MM].
4. **Results Export:** Raw results exported in [XML / JSON / PDF / HTML] format and stored at [Artefact Storage Location].
5. **Triage and Review:** Findings reviewed by [Reviewer Name / Role] to eliminate false positives and assign severity ratings.
6. **Reporting:** Findings consolidated into this artefact and submitted for approval.

### 3.4 Scan Configuration Reference

| Parameter | Value |
|---|---|
| **Scan Profile / Policy** | [Profile Name] |
| **Incremental Scan** | [Yes / No — if Yes, baseline commit: `[Baseline Commit Hash]`] |
| **False Positive Filter Applied** | [Yes / No] |
| **Scan Duration** | [HH:MM:SS] |
| **Scan Initiated By** | [User / Service Account / CI Pipeline Name] |
| **Scan Timestamp (Start)** | [YYYY-MM-DD HH:MM:SS UTC+8] |
| **Scan Timestamp (End)** | [YYYY-MM-DD HH:MM:SS UTC+8] |

---

## 4. Findings and Ratings

*Present all identified vulnerabilities, categorised by severity. Include sufficient detail for developers to reproduce and remediate each finding. Mark false positives separately.*

### 4.1 Executive Summary

| Severity | Total Found | False Positives | Confirmed | Remediated | Open | Risk Accepted |
|---|---|---|---|---|---|---|
| **Critical** | [#] | [#] | [#] | [#] | [#] | [#] |
| **High** | [#] | [#] | [#] | [#] | [#] | [#] |
| **Medium** | [#] | [#] | [#] | [#] | [#] | [#] |
| **Low** | [#] | [#] | [#] | [#] | [#] | [#] |
| **Informational** | [#] | [#] | [#] | [#] | [#] | [#] |
| **TOTAL** | [#] | [#] | [#] | [#] | [#] | [#] |

**Overall Scan Status:** [PASS / FAIL / CONDITIONAL PASS]

*CONDITIONAL PASS requires documented risk acceptance for any outstanding High or Critical findings.*

### 4.2 Detailed Findings

*For each confirmed finding, complete a row in the table below. Attach raw tool output as Appendix A.*

| Finding ID | Severity | CWE / CVE | Vulnerability Type | Affected File / Module | Line Number | Description | Status | Remediation Owner | Target Date |
|---|---|---|---|---|---|---|---|---|---|
| SAST-[YYYYMMDD]-001 | Critical | CWE-[###] | [e.g., SQL Injection] | [File path] | [Line #] | [Brief description of the vulnerability and potential impact] | [Open / Remediated / Risk Accepted / False Positive] | [Developer / Team Name] | [YYYY-MM-DD] |
| SAST-[YYYYMMDD]-002 | High | CWE-[###] | [e.g., Hardcoded Credential] | [File path] | [Line #] | [Brief description] | [Open / Remediated / Risk Accepted / False Positive] | [Developer / Team Name] | [YYYY-MM-DD] |
| SAST-[YYYYMMDD]-003 | Medium | CWE-[###] | [e.g., Insecure Deserialization] | [File path] | [Line #] | [Brief description] | [Open / Remediated / Risk Accepted / False Positive] | [Developer / Team Name] | [YYYY-MM-DD] |
| SAST-[YYYYMMDD]-004 | Low | CWE-[###] | [e.g., Missing Security Header] | [File path] | [Line #] | [Brief description] | [Open / Remediated / Risk Accepted / False Positive] | [Developer / Team Name] | [YYYY-MM-DD] |

### 4.3 False Positives

*Document all findings excluded from the confirmed findings list, with justification, to demonstrate due diligence during triage.*

| Finding ID (Tool-Assigned) | Severity | Vulnerability Type | Justification for False Positive Classification | Reviewed By | Review Date |
|---|---|---|---|---|---|
| [Tool Finding ID] | [Severity] | [Type] | [e.g., Input is validated upstream at the API gateway layer; unreachable code path] | [Reviewer Name] | [YYYY-MM-DD] |

### 4.4 Trend Analysis

*Compare current scan results against prior scan cycles to demonstrate continuous improvement. Update each quarter.*

| Metric | Current Scan | Previous Scan | Quarter-on-Quarter Change |
|---|---|---|---|
| Total Confirmed Findings | [#] | [#] | [+/- #] |
| Critical Findings | [#] | [#] | [+/- #] |
| High Findings | [#] | [#] | [+/- #] |
| Mean Time to Remediate (Critical/High) | [X days] | [X days] | [+/- days] |
| Recurrence Rate (same CWE as prior scan) | [%] | [%] | [+/- %] |

---

## 5. Evidence Reviewed

*List all supporting artefacts and evidence gathered during or in support of this SAST assessment. These items substantiate the findings and will be referenced during regulatory or internal audits.*

### 5.1 Evidence Register

| Evidence ID | Description | Source / Location | Date Obtained | Retained By |
|---|---|---|---|---|
| EVD-001 | Raw SAST tool output (full results export) | [Storage path / SharePoint / JIRA] | [YYYY-MM-DD] | [IT Operations / Security Team] |
| EVD-002 | Source code repository snapshot (commit hash `[hash]`) | [Repository URL] | [YYYY-MM-DD] | [IT Operations] |
| EVD-003 | SAST tool configuration / policy profile | [Storage path] | [YYYY-MM-DD] | [IT Operations] |
| EVD-004 | CI/CD pipeline scan logs | [Pipeline URL / Log storage path] | [YYYY-MM-DD] | [IT Operations] |
| EVD-005 | Previous SAST scan report (baseline) | [Storage path / Document ID] | [YYYY-MM-DD] | [IT Operations] |
| EVD-006 | Risk acceptance approvals (if applicable) | [Risk Register / Email approval reference] | [YYYY-MM-DD] | [Risk / Compliance Team] |
| EVD-007 | Developer remediation evidence (code commit / patch notes) | [Repository commit reference] | [YYYY-MM-DD] | [Development Team] |
| EVD-008 | [Additional evidence as applicable] | [Source] | [YYYY-MM-DD] | [Custodian] |

### 5.2 Evidence Retention

All evidence listed above shall be retained for a minimum of **[X years]** in accordance with [Organization Name]'s Records Retention Policy and BNM RMiT requirements. Evidence is stored at [Primary Storage Location] with backup at [Secondary Storage Location].

---

## 6. Recommendations

*Provide actionable remediation guidance for each confirmed finding, prioritised by severity. Where systemic issues are identified, include process-level recommendations to prevent recurrence.*

### 6.1 Immediate Actions (Critical and High Findings)

*The following actions must be completed before the application proceeds to production or within [X] business days for post-release findings.*

| Finding ID | Recommendation | Priority | Recommended By | Assigned To | Due Date |
|---|---|---|---|---|---|
| SAST-[YYYYMMDD]-001 | [e.g., Parameterise all database queries in [Module Name] to eliminate SQL injection vectors. Refer to OWASP Query Parameterisation Cheat Sheet.] | Critical | [Security Analyst Name] | [Developer / Team] | [YYYY-MM-DD] |
| SAST-[YYYYMMDD]-002 | [e.g., Remove hardcoded credentials from [File]. Migrate to environment variable injection via [secrets management tool].] | High | [Security Analyst Name] | [Developer / Team] | [YYYY-MM-DD] |

### 6.2 Short-Term Remediation (Medium Findings)

*The following actions are required within [X] days of this report.*

| Finding ID | Recommendation | Assigned To | Due Date |
|---|---|---|---|
| SAST-[YYYYMMDD]-003 | [Specific, actionable remediation guidance] | [Assigned Team] | [YYYY-MM-DD] |

### 6.3 Long-Term and Process Improvements

*The following systemic recommendations address root causes and aim to prevent recurrence of identified vulnerability classes.*

- **Secure Coding Training:** [e.g., Mandate OWASP-aligned secure coding training for all developers involved in [Application Name] by [Date]. Findings in CWE-89 (SQL Injection) indicate a gap in input validation practices.]
- **Pre-Commit Hooks:** [e.g., Implement pre-commit SAST scanning using [Tool] to detect Critical and High findings before code is merged to the main branch.]
- **Dependency Management:** [e.g., Introduce Software Composition Analysis (SCA) scanning for third-party libraries, integrated into the CI/CD pipeline.]
- **Security Champions Programme:** [e.g., Designate a Security Champion within [Development Team] to perform first-level triage of SAST findings each sprint.]
- **Ruleset Refinement:** [e.g., Review and suppress confirmed false-positive rule categories in the tool configuration to reduce analyst triage burden and improve signal-to-noise ratio.]
- **[Additional recommendation as applicable]**

### 6.4 Risk Acceptance Register

*Where a finding cannot be remediated prior to the release gate, formal risk acceptance must be documented below.*

| Finding ID | Severity | Reason Remediation Deferred | Compensating Controls in Place | Risk Owner | Acceptance Expiry Date | Approved By |
|---|---|---|---|---|---|---|
| SAST-[YYYYMMDD]-[###] | [Severity] | [e.g., Third-party vendor code; vendor patch expected by [Date]] | [e.g., WAF rule deployed to block exploitation vector] | [Risk Owner Name / Role] | [YYYY-MM-DD] | [CISO / IT Operations Manager] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for the SAST scan process and the management of findings. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations Manager | Application Owner | Development Team | Security / CISO | Risk & Compliance | Internal Audit |
|---|---|---|---|---|---|---|
| Define SAST scanning scope and schedule | A | C | C | R | C | I |
| Configure and maintain SAST tooling | R | I | C | C | I | I |
| Execute SAST scans (automated / CI pipeline) | R | I | R | C | I | I |
| Triage and validate findings (false positive review) | R | C | R | C | I | I |
| Remediate confirmed vulnerabilities | I | A | R | C | I | I |
| Review and approve risk acceptances | A | C | I | R | C | I |
| Produce and distribute SAST report | R | I | I | C | I | I |
| Conduct quarterly trend review | A | C | I | R | R | I |
| Maintain evidence and artefact retention | R | I | I | C | C | I |
| Escalate unresolved Critical / High findings | A | I | I | R | C | I |
| Regulatory reporting and audit response | A | C | I | R | R | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name], [Role] | Initial document created |
| [1.1] | [YYYY-MM-DD] | [Author Name], [Role] | [e.g., Updated findings after developer remediation sprint] |
| [2.0] | [YYYY-MM-DD] | [Author Name], [Role] | [e.g., Quarterly review — revised acceptance criteria thresholds] |

### 8.2 Approval Sign-Off

*This document requires sign-off from the following roles before it is considered complete and audit-ready.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **IT Operations Manager** (Owner) | [Name] | _________________________ | [YYYY-MM-DD] |
| **Application Owner** | [Name] | _________________________ | [YYYY-MM-DD] |
| **Chief Information Security Officer (CISO)** | [Name] | _________________________ | [YYYY-MM-DD] |
| **Risk & Compliance Manager** | [Name] | _________________________ | [YYYY-MM-DD] |

> **Note:** Digital signatures via [Organization Name]'s approved e-signature platform are acceptable in lieu of handwritten signatures, provided an audit trail is maintained.

---

## 9. References

The following regulatory documents, standards, and internal policies are referenced by this artefact.

| Reference | Document / Clause | Description |
|---|---|---|
| **BNM RMiT** | Clause 10.7 | Application security — secure software development lifecycle, vulnerability scanning, and release gate controls |
| **PDPA 2010** | Sections 9, 10 | Security standards for protection of personal data in systems processing personal information |
| **NACSA Cybersecurity Framework** | Baseline Control — Application Security | Application vulnerability management for Critical National Information Infrastructure operators |
| **OWASP Top 10 (2021)** | All categories | Standard taxonomy for web application security risks referenced in scanning rulesets |
| **CWE/SANS Top 25** | All entries | Common Weakness Enumeration used for finding classification |
| **OWASP ASVS** | Level [1 / 2 / 3] | Application Security Verification Standard applied as assessment baseline |
| **[Internal Policy]** | [Organization Name] Application Security Policy v[X.X] | Internal policy governing SAST requirements, tooling standards, and release gates |
| **[Internal Policy]** | [Organization Name] Vulnerability Management Policy v[X.X] | Internal SLAs for remediation timescales by severity level |
| **[Internal Policy]** | [Organization Name] Records Retention Policy v[X.X] | Retention periods for security artefacts and scan evidence |

---

## Appendices

### Appendix A — Raw SAST Tool Output

*Attach or reference the complete, unmodified output exported from the SAST tool(s) used for this scan. This constitutes primary evidence for audit purposes.*

> **Reference:** [Storage path / SharePoint URL / JIRA ticket / Artefact ID]
> **Format:** [XML / JSON / PDF / HTML]
> **File Name:** `[YYYYMMDD]_[ApplicationName]_SAST_RawOutput.[ext]`

### Appendix B — CI/CD Pipeline Integration Evidence

*Attach screenshots or logs demonstrating that SAST scanning is integrated into the CI/CD pipeline and was executed as part of the build / release workflow.*

> **Reference:** [Pipeline URL / Log storage path]
> **Pipeline Name:** [CI/CD Pipeline Name]
> **Build / Run ID:** [Build ID]

### Appendix C — Developer Remediation Evidence

*For each finding marked as "Remediated," attach or reference the supporting evidence demonstrating the fix was applied and verified.*

| Finding ID | Remediation Evidence | Code Commit / Patch Reference | Verified By | Verification Date |
|---|---|---|---|---|
| SAST-[YYYYMMDD]-001 | [e.g., Code diff showing parameterised query implementation] | [Commit hash / PR link] | [Name, Role] | [YYYY-MM-DD] |

### Appendix D — Risk Acceptance Approval Documentation

*Attach formal written risk acceptance approvals for any findings where remediation has been deferred beyond the standard SLA.*

> **Reference:** [Risk Register entry ID / Email approval chain / Document reference]

### Appendix E — SAST Tool Configuration and Ruleset

*Attach or reference the tool configuration file, policy profile, or ruleset applied during this scan to enable reproducibility.*

> **Reference:** [Storage path / Configuration file name]
> **Profile Name:** [Profile / Policy Name]
> **Version:** [Configuration version]

### Appendix F — Quarterly Review Summary

*Completed during quarterly review cycles. Summarise changes to findings status, trend analysis outcomes, and any policy or tooling updates made since the last review.*

| Review Date | Reviewer | Open Findings Reviewed | Status Changes | Policy / Tooling Updates | Next Review Date |
|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Name, Role] | [#] | [Brief summary] | [Brief summary or "None"] | [YYYY-MM-DD] |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name] and designated regulatory bodies. Unauthorised disclosure is prohibited under [Organization Name]'s Information Security Policy and applicable Malaysian law.*