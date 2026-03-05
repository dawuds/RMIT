# Code Review Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Regulatory Reference:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 10.7
>
> **Document Category:** Procedures
>
> **Mandatory:** Yes

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Code Review Process Flow](#5-code-review-process-flow)
6. [Peer Code Review Procedure](#6-peer-code-review-procedure)
7. [Static Application Security Testing (SAST) Procedure](#7-static-application-security-testing-sast-procedure)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Tools and Systems](#9-tools-and-systems)
10. [Review Criteria and Standards](#10-review-criteria-and-standards)
11. [Findings Classification and Disposition](#11-findings-classification-and-disposition)
12. [Escalation Procedures](#12-escalation-procedures)
13. [Exceptions Management](#13-exceptions-management)
14. [Metrics and Reporting](#14-metrics-and-reporting)
15. [Training and Awareness](#15-training-and-awareness)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*Describe the intent of this document and what compliance or operational outcome it is designed to achieve.*

This procedure establishes the mandatory requirements, processes, and controls for conducting peer code reviews and Static Application Security Testing (SAST) scanning across all software development activities undertaken by or on behalf of [Organization Name]. The procedure ensures that all code changes introduced into production systems are subject to structured, documented quality and security review prior to deployment.

This document is issued to:

- Enforce a consistent and repeatable code review process that meets the requirements of BNM RMiT Clause 10.7;
- Reduce the risk of security vulnerabilities, defects, and technical weaknesses being introduced into production systems;
- Provide evidence of adequate technology risk controls to internal and external auditors, regulators, and examiners;
- Define clear accountability for code review activities across all technology teams.

---

## 2. Scope and Applicability

*Specify what systems, projects, teams, and change types are covered by this procedure, as well as any explicit exclusions.*

### 2.1 In-Scope

This procedure applies to:

- All internally developed or customized application source code deployed within [Organization Name]'s production, staging, or user acceptance testing (UAT) environments;
- All software development projects, regardless of development methodology (Agile, Waterfall, DevOps, or hybrid);
- All changes to application source code including new features, bug fixes, security patches, hotfixes, and configuration-as-code;
- Third-party or vendor-supplied source code where [Organization Name] holds the right to review and modify the code;
- Infrastructure-as-Code (IaC) scripts, CI/CD pipeline definitions, and build automation scripts where these directly configure or deploy production systems;
- All development teams, including but not limited to:
  - [Team / Business Unit 1]
  - [Team / Business Unit 2]
  - [Team / Business Unit 3]
  - External development vendors or managed service providers operating under contract with [Organization Name].

### 2.2 Out-of-Scope

The following are explicitly excluded from this procedure:

- Configuration changes to commercial off-the-shelf (COTS) software where source code is not accessible, unless such configuration is maintained as code in a version control system;
- Changes to documentation files, static assets (e.g., images, fonts), or non-executable content that does not influence system behaviour;
- Exploratory or proof-of-concept code maintained exclusively in sandboxed environments with no path to production;
- [Any additional organizational exclusions].

### 2.3 Applicability by Change Type

| Change Type | Peer Code Review Required | SAST Scan Required |
|---|---|---|
| New feature development | Yes | Yes |
| Bug fix (non-critical) | Yes | Yes |
| Security hotfix | Yes (expedited process — see §6.5) | Yes |
| Infrastructure-as-Code change | Yes | Yes (IaC rules) |
| Third-party library / dependency update | Yes | Yes |
| Configuration-only change (code-managed) | Yes | Conditional — see §7.4 |
| Documentation update only | No | No |

---

## 3. Regulatory Context

*Summarize the specific regulatory obligations this procedure fulfils, referencing the exact clause numbers and policy document versions.*

### 3.1 BNM Risk Management in Technology (RMiT)

[Organization Name] is subject to the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT)** Policy Document, issued pursuant to the Financial Services Act 2013, Islamic Financial Services Act 2013, and/or the Development Financial Institutions Act 2002, as applicable.

This procedure directly addresses the following RMiT obligations:

| RMiT Clause | Obligation Summary |
|---|---|
| **10.7** | A financial institution shall implement a structured code review process to detect and remediate security vulnerabilities and coding defects prior to deployment. This includes peer review and the use of automated security testing tools. |
| [10.x] | [Additional RMiT clause, if applicable] |
| [10.x] | [Additional RMiT clause, if applicable] |

### 3.2 Related Regulatory Frameworks

This procedure is also designed to support compliance with the following, where applicable:

| Framework | Relevant Requirement | Applicability |
|---|---|---|
| PDPA 2010 (Personal Data Protection Act) | Security principle — protection of personal data in applications | [Applicable / Not Applicable] |
| NACSA Cybersecurity Framework | Secure development lifecycle controls | [Applicable / Not Applicable] |
| BNM Operational Risk Integrated Online Network (ORION) | Reporting of technology risk incidents arising from code defects | [Applicable / Not Applicable] |
| PCI DSS (if applicable) | Requirement 6 — Develop and maintain secure systems | [Applicable / Not Applicable] |
| ISO/IEC 27001:2022 | Annex A — Secure coding | [Applicable / Not Applicable] |
| OWASP SAMM | Software Assurance Maturity Model — Code Review practice | [Applicable / Not Applicable] |

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Code Review** | A systematic examination of source code by one or more persons other than the original author, intended to identify defects, security vulnerabilities, and non-compliance with coding standards before the code is merged or deployed. |
| **Peer Code Review** | A code review conducted by a developer of comparable or greater seniority who was not involved in writing the code under review. |
| **Static Application Security Testing (SAST)** | Automated analysis of source code, bytecode, or binary code to identify security vulnerabilities without executing the program. |
| **Pull Request (PR) / Merge Request (MR)** | A mechanism in a version control system by which a developer requests that changes from one branch be integrated into another, typically the main or release branch. |
| **Security Finding** | A potential vulnerability, coding defect, or non-compliance identified during peer review or SAST scanning. |
| **False Positive** | A SAST finding that, upon review, does not represent an actual vulnerability or risk. |
| **Remediation** | The action taken to resolve a security finding, which may include fixing the code, applying a compensating control, or formally accepting the risk. |
| **Hotfix** | An urgent change to production code required to address a critical defect or security incident. |
| **Infrastructure-as-Code (IaC)** | The practice of managing and provisioning infrastructure through machine-readable configuration files rather than manual configuration. |
| **CI/CD Pipeline** | Continuous Integration / Continuous Delivery pipeline — an automated sequence of build, test, and deployment steps. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| SAST | Static Application Security Testing |
| DAST | Dynamic Application Security Testing |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| OWASP | Open Web Application Security Project |
| PR / MR | Pull Request / Merge Request |
| IaC | Infrastructure-as-Code |
| CI/CD | Continuous Integration / Continuous Delivery |
| CVSS | Common Vulnerability Scoring System |
| CWE | Common Weakness Enumeration |
| SLA | Service Level Agreement |

---

## 5. Code Review Process Flow

*Provide a high-level overview of the end-to-end code review process, including entry and exit criteria for each stage.*

### 5.1 Process Overview

All code changes must pass through the following sequential stages before being approved for deployment to production:

```
[Developer Completes Code] 
        │
        ▼
[Self-Review & Unit Tests Pass]
        │
        ▼
[Raise Pull Request / Merge Request]
        │
        ▼
[Automated SAST Scan Triggered] ──► [Critical/High Findings?] ──► YES ──► [Block PR / Developer Remediates]
        │ (No critical/high)                                                        │
        ▼                                                                           │
[Peer Code Review Assigned]                                                        │
        │                                                                           │
        ▼                                                                           │
[Reviewer Examines Code] ──► [Issues Raised?] ──► YES ──► [Developer Remediates] ─┘
        │ (No issues / issues resolved)
        ▼
[Reviewer Approves PR/MR]
        │
        ▼
[Security Champion / Lead Review (if applicable)]
        │
        ▼
[Merge Approved & Code Integrated]
        │
        ▼
[Deployment to Staging / UAT]
        │
        ▼
[Production Deployment]
```

### 5.2 Entry Criteria

A code review may only be initiated when all of the following conditions are met:

- [ ] The developer has completed all planned code changes for the feature, fix, or task;
- [ ] All unit tests pass in the developer's local environment;
- [ ] The code has been committed to the appropriate feature branch in the version control system;
- [ ] The pull request or merge request has been raised with an adequate description of the change, linked to the relevant change ticket or user story;
- [ ] The developer has performed a self-review of the diff and resolved obvious issues prior to requesting review.

### 5.3 Exit Criteria

A code review is considered complete and the code may be merged only when:

- [ ] At least [minimum number, e.g., one (1)] qualified peer reviewer has approved the pull request;
- [ ] All SAST findings rated Critical or High have been remediated or formally accepted with documented justification (see §11);
- [ ] All reviewer comments have been resolved or acknowledged;
- [ ] All automated CI/CD pipeline checks have passed;
- [ ] The approving reviewer has recorded their approval within the version control system.

### 5.4 Branching Strategy Alignment

*Describe how this procedure aligns to the organization's branching model.*

| Branch Type | Description | Code Review Required |
|---|---|---|
| `main` / `master` | Production-ready code | Yes — protected branch, no direct commits |
| `release/*` | Release candidate branches | Yes |
| `develop` | Integration branch | Yes |
| `feature/*` | Individual feature branches | Reviewed upon PR to `develop` |
| `hotfix/*` | Urgent production fixes | Yes — expedited process (§6.5) |
| `sandbox/*` | Experimental / POC branches | No — cannot merge to `develop` or `main` |

---

## 6. Peer Code Review Procedure

*Detail the step-by-step process for conducting a peer code review, including timing requirements, reviewer assignment, and documentation standards.*

### 6.1 Raising a Pull Request / Merge Request

**Step 1 — Developer Preparation**

Before raising a pull request (PR) or merge request (MR), the developer (Author) shall:

1. Ensure the code change is complete and unit-tested locally;
2. Review the diff against the target branch and remove any debugging artefacts, commented-out code, or test credentials;
3. Verify that no secrets, API keys, passwords, or personally identifiable information (PII) are included in the commit;
4. Update or create relevant unit tests to achieve the minimum code coverage threshold of [X]%;
5. Ensure all automated pre-commit hooks have passed.

**Step 2 — Pull Request Creation**

The Author shall raise the PR/MR in [Version Control System, e.g., GitHub / GitLab / Azure DevOps] and populate the following fields:

| PR Field | Requirement |
|---|---|
| **Title** | Clear, concise description of the change |
| **Description** | Summary of what was changed and why; link to ticket/story |
| **Change Type** | Feature / Bug Fix / Security Patch / Hotfix / Refactor / IaC |
| **Testing Evidence** | Summary of tests performed and outcomes |
| **Risk Assessment** | High / Medium / Low — brief rationale |
| **Reviewer(s) Assigned** | At least [one (1)] qualified peer reviewer |
| **Labels / Tags** | [Applicable labels per project convention] |

### 6.2 Reviewer Assignment

- Reviewers shall be assigned by the Author, the Team Lead, or automatically via the repository's code ownership configuration ([CODEOWNERS file or equivalent]);
- The assigned reviewer must **not** be the Author of the code under review;
- For changes involving security-sensitive components (authentication, cryptography, session management, payment processing, or data handling), an additional review by a [Security Champion / Application Security team member] is mandatory;
- The minimum seniority of the reviewer shall be [Junior Developer / Senior Developer / equivalent or above — specify per organizational policy].

### 6.3 Review Execution

**Step 3 — Reviewer Examination**

The reviewer shall examine the code change against the following criteria, which are detailed further in §10:

1. **Correctness** — Does the code do what is intended? Does it handle edge cases?
2. **Security** — Are there any vulnerabilities introduced (OWASP Top 10, CWE Top 25)?
3. **Coding Standards** — Does the code conform to [Organization Name]'s coding standards and style guides?
4. **Readability and Maintainability** — Is the code understandable and well-structured?
5. **Test Coverage** — Are tests adequate, meaningful, and correctly written?
6. **Dependency and Library Review** — Are any new dependencies introduced? Are they approved?
7. **Data Handling** — Is sensitive or personal data handled appropriately, with encryption and minimal exposure?
8. **Error Handling** — Are errors caught, logged appropriately, and handled securely?
9. **Performance** — Are there any obvious performance concerns?
10. **Compliance** — Does the code comply with applicable regulatory and policy requirements?

**Step 4 — Reviewer Feedback**

- All reviewer feedback shall be documented within the PR/MR comment system;
- Comments shall be categorized as:

| Comment Category | Description | Action Required |
|---|---|---|
| **Blocker** | Must be resolved before approval | Yes — PR cannot be merged |
| **Required** | Must be addressed but may be resolved in a follow-up ticket | Yes |
| **Suggestion** | Optional improvement; Author may choose to implement | No |
| **Question** | Clarification sought; not necessarily a defect | Author response required |
| **Nitpick** | Minor style or formatting feedback | No |

**Step 5 — Author Response and Remediation**

- The Author shall respond to all reviewer comments within [X] business days;
- For **Blocker** and **Required** findings, the Author shall update the code and push new commits to the branch;
- The Author shall not close or dismiss reviewer comments unilaterally; dismissal of a Blocker or Required comment requires documented justification or agreement from the reviewer;
- Re-review shall be requested by the Author once all findings are addressed.

**Step 6 — Reviewer Approval**

- The reviewer shall confirm that all Blocker and Required findings have been adequately addressed;
- Approval shall be recorded via the PR/MR approval mechanism in [Version Control System];
- The reviewer's approval constitutes their attestation that the code meets the required standards to the best of their knowledge.

### 6.4 Timing Requirements

| Activity | Target SLA | Maximum SLA |
|---|---|---|
| Reviewer first response after PR raised | [1] business day | [2] business days |
| Author response to reviewer comments | [1] business day | [2] business days |
| Re-review after Author remediation | [1] business day | [2] business days |
| Total code review cycle (standard) | [3] business days | [5] business days |
| Total code review cycle (hotfix — see §6.5) | [4] hours | [8] hours |

### 6.5 Expedited Review — Hotfixes and Security Patches

Where a critical production defect or active security incident requires an urgent hotfix:

1. The Author shall notify the [Team Lead / Head of Technology / Incident Manager] to declare an expedited review;
2. A dedicated reviewer with sufficient seniority shall be assigned immediately;
3. SAST scanning shall still be executed, but with a focused scope on the changed files;
4. The minimum peer review approval requirement remains in force — expedited review does not waive peer review;
5. A post-deployment review shall be conducted within [X] business days to retrospectively validate the quality of the change;
6. All expedited reviews shall be logged in the Expedited Review Register (Appendix C) and reported to the [Head of Technology / Risk Management function] in the next regular reporting cycle.

### 6.6 Merge and Integration

Upon completion of the peer code review and SAST scan:

1. Only an authorized team member (Maintainer / Lead Developer) shall execute the merge;
2. The Author shall not merge their own PR/MR unless the repository policy explicitly permits it and at least one external approval has been received;
3. The merge shall be recorded in the version control system with the PR/MR reference;
4. Post-merge, automated build and integration tests shall execute in the CI/CD pipeline.

---

## 7. Static Application Security Testing (SAST) Procedure

*Detail the SAST scanning process, tool configuration, scan triggers, result interpretation, and disposition of findings.*

### 7.1 Overview

Static Application Security Testing (SAST) shall be performed on all in-scope code changes using [Organization Name]'s approved SAST tooling (§9). SAST scanning is a mandatory gate in the CI/CD pipeline and shall be configured to execute automatically upon the raising of a pull request or merge request.

### 7.2 SAST Scan Triggers

| Trigger Event | Scan Type | Scope |
|---|---|---|
| Pull Request / Merge Request raised | Incremental scan | Changed files and affected dependencies |
| Merge to `develop` branch | Full repository scan | Entire codebase |
| Merge to `main` / `release` branch | Full repository scan | Entire codebase |
| Scheduled scan | Full repository scan | All active repositories |
| On-demand (manual) | Full or targeted scan | As specified |

### 7.3 SAST Tool Configuration Requirements

The SAST tooling shall be configured and maintained in accordance with the following requirements:

- Rule sets shall be updated to the latest available version on a [monthly] basis, or immediately upon notification of a critical rule update;
- Custom rule sets shall be reviewed and approved by the [Security Champion / Application Security Lead] before activation;
- SAST configuration files (e.g., `.semgrep.yml`, `sonar-project.properties`) shall be maintained under version control and subject to peer review;
- Suppressed findings and false positive exclusions shall be documented, reviewed, and approved as per §7.6;
- Scan results shall be retained for a minimum of [X] years in accordance with [Organization Name]'s Records Retention Policy.

### 7.4 Conditional Scanning — Configuration Changes

For configuration-only changes managed as code (e.g., Kubernetes manifests, Terraform files, Ansible playbooks):

- IaC-specific SAST rules (e.g., [Tool Name] IaC ruleset) shall apply;
- Secrets detection scanning is mandatory for all configuration files;
- Standard application SAST rules may be scoped to exclude non-applicable checks at the discretion of the [Security Champion / Application Security Lead].

### 7.5 SAST Findings — Severity Classification

All SAST findings shall be classified using the following severity levels, aligned with the Common Vulnerability Scoring System (CVSS):

| Severity | CVSS Score | Description | Pipeline Gate |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Directly exploitable vulnerability with high impact | **Hard block** — PR/MR cannot be merged |
| **High** | 7.0 – 8.9 | Significant vulnerability likely to cause material harm | **Hard block** — PR/MR cannot be merged |
| **Medium** | 4.0 – 6.9 | Vulnerability that may be exploited under certain conditions | **Soft block** — Requires documented disposition |
| **Low** | 0.1 – 3.9 | Minor issue with limited exploitability | Non-blocking — must be tracked |
| **Informational** | N/A | Coding best practice or advisory | Non-blocking — tracked for awareness |

### 7.6 False Positive Management

Where a SAST finding is assessed by the developer to be a false positive:

1. The developer shall document the basis for the false positive assessment in the PR/MR comments;
2. The [Security Champion / Application Security Lead] shall independently verify the assessment;
3. If confirmed as a false positive, the finding shall be suppressed using the SAST tool's supported suppression mechanism (e.g., inline comment annotation), with the justification recorded;
4. A record of all suppressed findings shall be maintained in the False Positive Register (Appendix D) and reviewed [quarterly] by the [Application Security team];
5. Suppression of Critical or High findings must be approved by the [Head of Technology / CISO].

### 7.7 SAST Results Reporting

- SAST scan results shall be published to [dashboard/portal, e.g., SonarQube, Semgrep App, Snyk dashboard] and shall be accessible to authorized development and security personnel;
- A summary of SAST findings (open, resolved, suppressed) shall be included in [monthly / quarterly] Technology Risk reporting to [relevant governance committee];
- Trend data (new findings, remediated findings, mean time to remediation by severity) shall be tracked and reported as specified in §14.

---

## 8. Roles and Responsibilities

*Define the specific roles involved in the code review process and assign accountability using the RACI model.*

### 8.1 Role Definitions

| Role | Description |
|---|---|
| **Code Author / Developer** | The individual who wrote the code change and is responsible for raising the pull request and remediating findings. |
| **Peer Reviewer** | A qualified developer who examines the Author's code change and provides feedback and approval. |
| **Security Champion** | A designated team member with advanced application security knowledge who reviews security-sensitive changes and validates SAST findings. |
| **Team Lead / Engineering Lead** | Responsible for ensuring code reviews are completed within SLA and for escalating overdue reviews. |
| **Application Security Lead** | Responsible for maintaining SAST tooling, rule sets, and overseeing the False Positive Register. |
| **Head of Technology / CTO** | Accountable executive for the code review programme; approves risk acceptances and exception requests. |
| **CISO / Information Security Officer** | Accountable for security policy compliance; notified of Critical and High SAST findings. |
| **Change Approval Board (CAB)** | Reviews and approves production deployments, relying on evidence of completed code review and SAST scan. |

### 8.2 RACI Matrix

*R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (kept up to date)*

| Activity | Code Author | Peer Reviewer | Security Champion | Team Lead | AppSec Lead | Head of Tech | CISO | CAB |
|---|---|---|---|---|---|---|---|---|
| Write code and raise PR/MR | **R/A** | I | I | I | | | | |
| Assign reviewer(s) | **R** | | C | **A** | | | | |
| Conduct peer code review | | **R/A** | C | I | | | | |
| Execute SAST scan (automated) | I | I | I | I | **R/A** | | | |
| Triage and classify SAST findings | **R** | C | **A** | I | C | | | |
| Remediate code review findings | **R/A** | C | C | I | | | | |
| Approve suppression of false positives (Medium/Low) | | | **R/A** | I | C | | | |
| Approve suppression of false positives (Critical/High) | | | C | C | **R** | **A** | **C** | |
| Formally accept residual risk | | | C | C | C | **R/A** | **C** | |
| Approve PR/MR merge | C | **R/A** | C | I | | | | |
| Execute merge to protected branch | | | | **R/A** | | I | | |
| Approve production deployment | I | | | I | I | I | I | **R/A** |
| Maintain SAST tooling and rules | | | C | | **R/A** | I | C | |
| Review False Positive Register | | | C | | **R/A** | I | I | |
| Escalate overdue reviews | | | | **R/A** | | I | | |
| Report metrics to governance | | | | **R** | C | **A** | I | |
| Approve exceptions to this procedure | | | | C | C | **R** | **A** | |

---

## 9. Tools and Systems

*List all tools, platforms, and systems used in the code review and SAST process, including version and configuration management requirements.*

### 9.1 Version Control System

| Parameter | Details |
|---|---|
| **Tool** | [e.g., GitHub Enterprise / GitLab / Azure DevOps / Bitbucket] |
| **Instance URL** | [Internal URL] |
| **Managed By** | [Team Name] |
| **Branch Protection Enabled** | Yes — `main`, `develop`, `release/*` branches are protected |
| **Minimum Approvals Required** | [1 / 2 — specify per repository policy] |
| **PR/MR Templates** | Yes — stored at [repository path, e.g., `.github/pull_request_template.md`] |

### 9.2 SAST Tools

| Tool | Primary Use Case | Languages / Platforms | Integration | Managed By |
|---|---|---|---|---|
| [e.g., SonarQube / SonarCloud] | Code quality and security analysis | [Java, Python, JavaScript, etc.] | CI/CD pipeline, PR/MR gate | [AppSec Team] |
| [e.g., Semgrep] | Security-focused static analysis | [Multi-language] | CI/CD pipeline | [AppSec Team] |
| [e.g., Snyk] | Dependency and open-source vulnerability scanning | [Multi-language] | CI/CD pipeline, IDE plugin | [AppSec Team] |
| [e.g., Checkov / tfsec] | Infrastructure-as-Code security scanning | [Terraform, Kubernetes, Ansible] | CI/CD pipeline | [AppSec Team] |
| [e.g., Gitleaks / detect-secrets] | Secrets detection | All file types | Pre-commit hook, CI/CD | [AppSec Team] |

### 9.3 CI/CD Pipeline

| Parameter | Details |
|---|---|
| **Platform** | [e.g., GitHub Actions / GitLab CI / Jenkins / Azure Pipelines] |
| **Pipeline Configuration** | [Repository path, e.g., `.github/workflows/` or `.gitlab-ci.yml`] |
| **SAST Integration Point** | [Stage name in pipeline, e.g., `security-scan` stage] |
| **Quality Gate** | Configured to fail pipeline on Critical or High SAST findings |
| **Pipeline Configuration Review** | Managed under version control; subject to this procedure |

### 9.4 Ticketing and Tracking

| Tool | Use | Notes |
|---|---|---|
| [e.g., Jira / Azure Boards] | Linking PRs to change tickets; tracking remediation tasks | [Notes] |
| [e.g., ServiceNow] | Change management records for production deployments | [Notes] |
| [e.g., Confluence] | Documentation of SAST suppressions and risk acceptances | [Notes] |

### 9.5 Tool Access and Licensing

- Access to SAST dashboards and results is restricted to authorized personnel (developers, security champions, management) via [Identity Provider / SSO];
- Tool licensing compliance is the responsibility of the [IT Procurement / Technology Governance function];
- Tool configuration changes require approval by the [Application Security Lead] and shall be documented.

---

## 10. Review Criteria and Standards

*Define the specific criteria that reviewers must assess during a peer code review, with reference to applicable coding standards and security guidelines.*

### 10.1 Coding Standards

*Reference the specific internal coding standards and style guides that apply.*

All code shall conform to [Organization Name]'s [Coding Standards Document, Document ID: XXX], which incorporates the following external standards where applicable:

| Standard | Applicability |
|---|---|
| OWASP Secure Coding Practices Quick Reference Guide | All web application development |
| OWASP Top 10 (current edition) | All web-facing applications |
| CWE Top 25 Most Dangerous Software Weaknesses | All application development |
| [Language-specific style guide, e.g., PEP 8 for Python] | [Language] development |
| [Internal coding standards document] | All development |

### 10.2 Security Review Checklist

Reviewers shall assess the following security criteria as a minimum during peer review:

**Authentication and Access Control**

- [ ] Authentication mechanisms are correctly implemented and cannot be bypassed;
- [ ] Authorization checks are present and enforce least privilege;
- [ ] Session management follows secure practices (token expiry, invalidation on logout);
- [ ] No hardcoded credentials, API keys, or secrets are present.

**Input Validation and Output Encoding**

- [ ] All user-supplied inputs are validated on the server side;
- [ ] SQL queries use parameterized statements or ORM methods — no dynamic query construction from user input;
- [ ] Output is correctly encoded to prevent XSS;
- [ ] File upload handling is restricted and validated.

**Data Handling and Privacy**

- [ ] Personal data (as defined under PDPA 2010) is handled with appropriate controls;
- [ ] Sensitive data is encrypted at rest and in transit using approved algorithms;
- [ ] Data is not logged in plain text where it is sensitive;
- [ ] Data minimisation principles are applied — only necessary data is collected and processed.

**Error Handling and Logging**

- [ ] Errors are handled gracefully and do not expose sensitive information in responses;
- [ ] Audit logs are generated for security-relevant events;
- [ ] Logging does not capture sensitive data (passwords, tokens, card numbers);
- [ ] Exception handling does not suppress errors silently.

**Cryptography**

- [ ] Approved cryptographic algorithms are used (AES-256, SHA-256 or above, RSA-2048 or above);
- [ ] Cryptographic keys are managed via [Key Management System / HSM — specify];
- [ ] Random number generation uses cryptographically secure functions.

**Third-Party Dependencies**

- [ ] New dependencies have been reviewed for known vulnerabilities;
- [ ] Dependency versions are pinned and sourced from approved repositories;
- [ ] No dependency introduces a license incompatible with [Organization Name]'s policy.

### 10.3 Quality Review Checklist

- [ ] Code is readable and self-documenting; complex logic is commented;
- [ ] Functions and methods follow single-responsibility principles;
- [ ] Code is DRY (Don't Repeat Yourself) — no unnecessary duplication;
- [ ] Unit tests are present, meaningful, and achieve minimum coverage threshold;
- [ ] No dead code, commented-out blocks, or debugging artefacts are present;
- [ ] Database migrations are reversible where possible;
- [ ] Performance implications of the change have been considered.

---

## 11. Findings Classification and Disposition

*Describe how findings from peer review and SAST are documented, tracked, and resolved.*

### 11.1 Disposition Options

Each finding identified during peer review or SAST scanning shall receive one of the following dispositions:

| Disposition | Description | Approval Required |
|---|---|---|
| **Remediate** | The defect is fixed in the current PR before merge. | Reviewer confirmation |
| **Defer** | The finding is acknowledged, a remediation ticket is raised, and the risk is accepted for the current release. | Team Lead |
| **Accept (Risk Acceptance)** | The finding is assessed, a compensating control is identified or the risk is formally accepted. | Head of Technology / CISO (Critical/High) |
| **False Positive** | The finding does not represent an actual vulnerability. | Security Champion (Medium/Low); AppSec Lead + Head of Tech (Critical/High) |
| **Not Applicable** | The finding rule does not apply to this codebase or context. | Security Champion |

### 11.2 Remediation SLAs

| Severity | Disposition: Remediate (within current PR) | Disposition: Deferred Remediation |
|---|---|---|
| **Critical** | Must be remediated before merge | Not permitted — must be fixed or formally risk-accepted |
| **High** | Must be remediated before merge | Not permitted — must be fixed or formally risk-accepted |
| **Medium** | Strongly encouraged before merge | Within [30] calendar days |
| **Low** | Encouraged before merge | Within [90] calendar days |
| **Informational** | At developer discretion | Within [180] calendar days or next major release |

### 11.3 Risk Acceptance Process

Where a finding cannot be remediated within the required timeframe and a formal risk acceptance is required:

1. The Author or Team Lead shall complete a **Risk Acceptance Request** (Appendix E);
2. The request shall document: finding description, severity, business justification, compensating controls in place, and proposed acceptance period;
3. The request shall be reviewed and approved by the [Head of Technology] for Medium findings, and [Head of Technology and CISO] for Critical and High findings;
4. Approved risk acceptances shall be recorded in the Technology Risk Register;
5. Risk acceptances shall be reviewed at the next scheduled code review cycle or at the expiry of the acceptance period, whichever is sooner.

---

## 12. Escalation Procedures

*Define the escalation paths for overdue reviews, unresolved findings, disagreements between reviewer and author, and systemic issues.*

### 12.1 Escalation Triggers

| Trigger | Escalation Path | Timeframe |
|---|---|---|
| PR/MR not reviewed within SLA | Author notifies Team Lead | After [2] business days without first response |
| Reviewer and Author cannot reach agreement on a finding | Team Lead mediates | Immediately upon impasse |
| Team Lead cannot resolve disagreement | Head of Technology makes final decision | Within [1] business day |
| Critical or High SAST finding with no remediation plan | Security Champion notifies AppSec Lead and Head of Technology | Within [4] hours of finding identification |
| Suspected active vulnerability in production code identified during review | Head of Technology notified; Incident Management process activated | Immediately |
| Code review SLA breaches exceed [X]% in a reporting period | Report to [Technology Risk Committee / relevant governance body] | Next scheduled reporting cycle |
| Author bypasses code review controls | Immediate escalation to Head of Technology and CISO | Immediately upon detection |

### 12.2 Escalation Register

All escalations shall be logged in the Escalation Register (Appendix F), capturing:

- Date and time of escalation;
- Description of the trigger;
- Parties involved;
- Resolution reached;
- Date and time of resolution;
- Lessons learned (if applicable).

### 12.3 Control Bypass — Emergency Override

In extraordinary circumstances, a designated authority may approve a temporary bypass of the code review gate (e.g., during a declared technology incident requiring immediate intervention). The following conditions apply:

- Only the [Head of Technology / CEO — specify] may authorize an emergency override;
- The override shall be documented in writing (email or incident management system) before or immediately after the deployment;
- A full retrospective code review shall be completed within [24] hours of the override;
- All emergency overrides shall be reported to the [Technology Risk Committee] and [CISO] within [1] business day;
- Repeated use of emergency overrides shall be treated as a control deficiency and escalated for root cause analysis.

---

## 13. Exceptions Management

*Define how exceptions to this procedure are requested, approved, tracked, and reviewed.*

### 13.1 Exception Request Process

Where a team or project requires a formal exception to one or more requirements of this procedure:

1. The relevant Team Lead or Project Manager shall submit an **Exception Request Form** (Appendix G) to the [Head of Technology];
2. The request shall document: the specific requirement being excepted, the business justification, the duration of the exception, and any compensating controls proposed;
3. Exceptions shall be reviewed by the [Technology Risk Committee / Information Security Steering Committee];
4. Approved exceptions shall be time-limited (maximum [6] months unless otherwise approved) and documented in the Exceptions Register;
5. The Exceptions Register shall be reviewed [quarterly] by the [Head of Technology] and [CISO].

### 13.2 Exception Register

| Exception ID | Project / Team | Requirement Excepted | Justification | Compensating Control | Approved By | Approval Date | Expiry Date | Review Date |
|---|---|---|---|---|---|---|---|---|
| EX-001 | [Project Name] | [Requirement] | [Justification] | [Control] | [Name] | [Date] | [Date] | [Date] |

---

## 14. Metrics and Reporting

*Define the key performance indicators, reporting frequency, and governance reporting requirements for the code review programme.*

### 14.1 Key Performance Indicators

The following metrics shall be tracked and reported on a [monthly / quarterly] basis:

| Metric | Description | Target | Reporting Frequency |
|---|---|---|---|
| Code Review Coverage | % of PRs/MRs subject to peer review before merge | 100% | Monthly |
| SAST Scan Coverage | % of code commits scanned by SAST tools | 100% | Monthly |
| Mean Time to Review (MTTR) | Average time from PR raised to first reviewer response | ≤ [1] business day | Monthly |
| Mean Time to Approval (MTTA) | Average time from PR raised to approval | ≤ [3] business days | Monthly |
| Critical/High Findings — Open | Number of open Critical and High SAST findings | 0 (unaccepted) | Monthly |
| Critical/High Findings — MTTR | Mean time to remediate Critical and High findings | Critical: [24h]; High: [5 days] | Monthly |
| False Positive Rate | % of SAST findings closed as false positives | < [X]% | Quarterly |
| Review SLA Breach Rate | % of PRs where review SLA was exceeded | < [X]% | Monthly |
| Emergency Overrides | Count of authorized code review bypasses | 0 target | Monthly |
| Exceptions Active | Count of active exceptions to this procedure | Track and minimize | Quarterly |

### 14.2 Reporting Structure

| Report | Audience | Frequency | Owner |
|---|---|---|---|
| Code Review Dashboard | Development Teams, Team Leads | Real-time (via SAST dashboard) | AppSec Lead |
| Technology Risk Report (code review section) | Head of Technology, CTO | Monthly | Team Lead / AppSec Lead |
| Information Security Steering Committee Report | ISSC Members | Quarterly | CISO |
| BNM Technology Risk Self-Assessment | BNM (as required) | Annual / On-demand | Head of Technology |

---

## 15. Training and Awareness

*Define training requirements for personnel involved in the code review process.*

### 15.1 Mandatory Training Requirements

| Role | Training Required | Frequency | Delivery Method |
|---|---|---|---|
| All Developers | Secure coding fundamentals; this procedure | On onboarding; annual refresh | [e-learning / classroom / workshop] |
| Peer Reviewers | Security code review techniques; OWASP Top 10; SAST tool usage | Annual | [Workshop / internal session] |
| Security Champions | Advanced application security; SAST rule development; threat modelling | Annual + ad hoc | [External training / certifications] |
| Team Leads | Code review governance; escalation procedures | On appointment; annual | [Internal briefing] |
| AppSec Lead | SAST tool administration; vulnerability research | Continuous | [Professional development] |

### 15.2 Training Records

Training completion records shall be maintained by the [Human Resources / Learning Management System] and shall be made available to internal audit and regulatory examiners upon request.

### 15.3 Awareness Communications

- This procedure shall be published to all relevant personnel via [Intranet / SharePoint / Confluence] upon issuance and upon each revision;
- Changes to this procedure shall be communicated to all affected teams within [X] business days of approval;
- Key updates to OWASP Top 10, BNM RMiT guidance, or SAST rule sets shall be communicated to development teams by the [Security Champion / AppSec Lead] within [X] business days of publication.

---

## 16. Review and Approval

### 16.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial release |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of major revision] |

### 16.2 Review Schedule

- This procedure shall be reviewed at least **annually** from the effective date, or earlier if:
  - A significant change is made to the development toolchain, version control system, or CI/CD pipeline;
  - BNM issues new or revised guidance affecting RMiT Clause 10.7;
  - A significant security incident occurs that is attributable to a deficiency in the code review process;
  - A material change is made to the scope of [Organization Name]'s technology operations or application portfolio.

| Parameter | Detail |
|---|---|
| **Review Frequency** | Annual (minimum) |
| **Review Owner** | [Relevant Department Head] |
| **Next Scheduled Review** | [Next Review Date] |

### 16.3 Approval Sign-Off

*This document requires the following approvals before it becomes effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Author | [Name] | _________________ | [Date] |
| [Relevant Department Head] | [Name] | _________________ | [Date] |
| Head of Technology / CTO | [Name] | _________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| [Other Approver as required] | [Name] | _________________ | [Date] |

---

## 17. References

### 17.1 Regulatory Documents

| Reference | Title | Publisher | Applicable Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.7 |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Security Principle |
| [BNM/RH/PD XXX] | [Additional BNM Policy Document] | Bank Negara Malaysia | [Clauses] |

### 17.2 Internal Documents

| Document ID | Title | Owner |
|---|---|---|
| [DOC-ID-001] | Information Security Policy | [CISO] |
| [DOC-ID-002] | Coding Standards and Style Guide | [Head of Technology] |
| [DOC-ID-003] | Change Management Policy | [Head of Technology] |
| [DOC-ID-004] | Technology Risk Management Framework | [CRO / Head of Technology] |
| [DOC-ID-005] | Incident Response Procedure | [CISO] |
| [DOC-ID-006] | Records Retention Policy | [Compliance] |
| [DOC-ID-007] | Vendor and Third-Party Risk Management Policy | [Procurement / Risk] |

### 17.3 External Standards and Frameworks

| Reference | Title | Publisher |
|---|---|---|
| OWASP Top 10 (current edition) | Top Ten Web Application Security Risks | OWASP Foundation |
| CWE Top 25 | Most Dangerous Software Weaknesses | MITRE Corporation |
| OWASP Secure Coding Practices | Quick Reference Guide | OWASP Foundation |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC |
| NIST SP 800-53 | Security and Privacy Controls for Information Systems | NIST |
| OWASP SAMM | Software Assurance Maturity Model | OWASP Foundation |

---

## 18. Appendices

### Appendix A — Pull Request / Merge Request Template

*This template shall be configured as the default PR/MR description template in the version control system.*

---

**PR/MR Description Template**

**Change Summary**

_Brief description of what this change does and why._

**Linked Ticket / Story**

- Ticket: [TICKET-000]

**Change Type** _(select one)_

- [ ] New Feature
- [ ] Bug Fix
- [ ] Security Patch / Hotfix
- [ ] Refactor
- [ ] Infrastructure-as-Code Change
- [ ] Dependency Update
- [ ] Other: ___

**Testing Evidence**

_Describe tests performed. Include unit test results, integration test results, and any manual testing steps._

**Security Checklist**

- [ ] No hardcoded credentials or secrets
- [ ] Input validation applied to all user-supplied data
- [ ] Sensitive data is not logged
- [ ] New dependencies reviewed for known vulnerabilities
- [ ] PDPA / data protection considerations reviewed

**Risk Assessment**

- Risk Level: [ ] High  [ ] Medium  [ ] Low
- Justification: _[Provide brief rationale]_

**Reviewer Notes**

_Any specific areas where reviewer attention is requested._

---

### Appendix B — SAST Finding Triage Worksheet

*To be completed by the developer for each SAST finding requiring disposition.*

| Field | Details |
|---|---|
| **Finding ID** | [SAST tool reference ID] |
| **Tool** | [Tool name and version] |
| **Rule / Check** | [Rule name and CWE reference] |
| **Severity** | Critical / High / Medium / Low / Informational |
| **File and Line** | [file_path:line_number] |
| **Finding Description** | [SAST tool description] |
| **Developer Assessment** | [Developer's assessment of whether this is a genuine finding] |
| **Proposed Disposition** | Remediate / Defer / Accept / False Positive / Not Applicable |
| **Remediation / Justification** | [Description of fix applied or justification for disposition] |
| **Reviewed By** | [Security Champion / AppSec Lead] |
| **Approval Date** | [Date] |

---

### Appendix C — Expedited Review Register

*To be maintained by the Team Lead. All entries to be reported in the next governance reporting cycle.*

| Ref | Date | PR/MR Reference | Change Description | Business Justification | Reviewer Assigned | Post-Deploy Review Date | Status |
|---|---|---|---|---|---|---|---|
| EXR-001 | [Date] | [PR/MR #] | [Description] | [Justification] | [Reviewer Name] | [Date] | [Open / Closed] |

---

### Appendix D — False Positive Register

*To be maintained by the Application Security Lead. Reviewed quarterly.*

| Ref | Date Raised | Repository | SAST Tool | Rule / Finding | Severity | Justification | Approved By | Approval Date | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| FP-001 | [Date] | [Repo name] | [Tool] | [Rule] | [Severity] | [Justification] | [Name] | [Date] | [Date] |

---

### Appendix E — Risk Acceptance Request Form

*To be completed for any finding that cannot be remediated within the required timeframe.*

| Field | Details |
|---|---|
| **Request ID** | [RA-YYYY-NNN] |
| **Date of Request** | [Date] |
| **Requested By** | [Name, Title] |
| **Repository / Application** | [Name] |
| **Finding Reference** | [SAST finding ID or peer review comment reference] |
| **Severity** | Critical / High / Medium / Low |
| **Finding Description** | [Detailed description of the vulnerability or defect] |
| **Business Justification** | [Why the finding cannot be remediated immediately] |
| **Compensating Controls** | [Controls currently in place that mitigate the risk] |
| **Residual Risk Assessment** | [Assessment of residual risk after compensating controls] |
| **Proposed Acceptance Period** | [Start date – End date; maximum 6 months] |
| **Remediation Plan** | [Planned remediation actions and target date] |
| **Risk Owner** | [Name, Title] |
| **Approved By (Head of Tech)** | [Name] \| Signature: ___________________ \| Date: [Date] |
| **Approved By (CISO)** | [Name] \| Signature: ___________________ \| Date: [Date] *(Critical/High only)* |

---

### Appendix F — Escalation Register

*To be maintained by Team Leads. Reviewed monthly.*

| Ref | Date | Trigger Description | PR/MR Reference | Parties Involved | Escalated To | Resolution | Resolution Date |
|---|---|---|---|---|---|---|---|
| ESC-001 | [Date] | [Description] | [PR/MR #] | [Names] | [Escalation recipient] | [Resolution description] | [Date] |

---

### Appendix G — Exception Request Form

*To be submitted to the Head of Technology for exceptions to this procedure.*

| Field | Details |
|---|---|
| **Exception ID** | [EX-YYYY-NNN] |
| **Date of Request** | [Date] |
| **Requested By** | [Name, Title, Team] |
| **Project / System** | [Name] |
| **Requirement Being Excepted** | [Specific section and clause of this procedure] |
| **Duration of Exception** | [Start date – End date; maximum 6 months] |
| **Business Justification** | [Detailed justification for the exception] |
| **Risk Assessment** | [Assessment of risk introduced by the exception] |
| **Compensating Controls** | [Controls to be implemented in lieu of the stated requirement] |
| **Reviewed By (Technology Risk)** | [Name] \| Date: [Date] |
| **Approved By (Head of Technology)** | [Name] \| Signature: ___________________ \| Date: [Date] |
| **Noted By (CISO)** | [Name] \| Signature: ___________________ \| Date: [Date] |
| **Next Review / Expiry Date** | [Date] |

---

### Appendix H — Approved SAST Tools List

*Maintained by the Application Security Lead. Updated upon procurement or decommissioning of tools.*

| Tool Name | Version | Vendor | Primary Use | Languages / Platforms | Approval Date | Approved By | License Expiry |
|---|---|---|---|---|---|---|---|
| [Tool 1] | [Version] | [Vendor] | [Use case] | [Languages] | [Date] | [Name] | [Date] |
| [Tool 2] | [Version] | [Vendor] | [Use case] | [Languages] | [Date] | [Name] | [Date] |

---

### Appendix I — Related BNM RMiT Clause Reference Summary

*Provided for quick reference during audits and self-assessments.*

| RMiT Clause | Summary | Addressed By |
|---|---|---|
| **10.7** | Financial institutions shall implement a structured code review process including peer review and automated security testing prior to deployment. | §5, §6, §7 of this procedure |
| [10.x] | [Summary] | [Section reference] |
| [10.x] | [Summary] | [Section reference] |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It shall not be disclosed to external parties without prior written approval from the [Head of Technology / Compliance Officer]. Printed copies are uncontrolled. The master version of this document is maintained in [Document Management System / Intranet location].