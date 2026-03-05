# Source Code Protection Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Source Code Protection Policy |
| **Category** | Procedures |
| **Owner** | Head of Application Development |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause(s)** | 10.14 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution of this document, in whole or in part, is strictly prohibited and may result in disciplinary action and/or legal liability. If you have received this document in error, please notify the document owner immediately and destroy all copies.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context and Obligations](#3-regulatory-context-and-obligations)
4. [Definitions](#4-definitions)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
   - 6.1 [Source Code Repository Management](#61-source-code-repository-management)
   - 6.2 [Access Control for Source Code](#62-access-control-for-source-code)
   - 6.3 [Source Code Versioning and Change Management](#63-source-code-versioning-and-change-management)
   - 6.4 [Source Code Security and Integrity](#64-source-code-security-and-integrity)
   - 6.5 [Third-Party and Vendor Source Code](#65-third-party-and-vendor-source-code)
   - 6.6 [Source Code Backup and Recovery](#66-source-code-backup-and-recovery)
   - 6.7 [Secure Code Development Practices](#67-secure-code-development-practices)
   - 6.8 [Source Code Review and Audit](#68-source-code-review-and-audit)
   - 6.9 [Source Code Retirement and Disposal](#69-source-code-retirement-and-disposal)
7. [Exceptions and Escalation Process](#7-exceptions-and-escalation-process)
8. [Compliance and Enforcement](#8-compliance-and-enforcement)
9. [Incident Management](#9-incident-management)
10. [Training and Awareness](#10-training-and-awareness)
11. [Review and Approval History](#11-review-and-approval-history)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose

*This section defines the intent of the policy and the business or regulatory problem it addresses. Describe the overarching goal of protecting source code assets within the organisation.*

This policy establishes the requirements and controls that [Organization Name] ("the Organization") must implement to protect its source code assets from unauthorised access, modification, disclosure, and loss. Source code represents a critical intellectual and operational asset of the Organization; its compromise may result in financial loss, reputational damage, regulatory sanction, and systemic risk to the Organization's technology infrastructure and customer-facing services.

The purpose of this policy is to:

- Define the minimum standards for the secure management and protection of all source code owned, licensed, or maintained by [Organization Name].
- Establish clear roles, responsibilities, and accountability for source code protection across the software development lifecycle (SDLC).
- Ensure compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.14, which mandates controls over source code and system software.
- Provide a governance framework that enables detection, response, and recovery from source code-related security incidents.
- Protect the confidentiality, integrity, and availability of source code in all environments — development, staging, testing, and production.

This policy supports the Organization's broader commitment to maintaining a secure and resilient technology environment in accordance with applicable Malaysian regulatory requirements, including but not limited to BNM RMiT, the Personal Data Protection Act 2010 (PDPA), and guidelines issued by the National Cyber Security Agency (NACSA).

---

## 2. Scope

*This section identifies who, what, and where the policy applies. Be specific about the systems, environments, personnel, and third parties covered.*

### 2.1 In-Scope Personnel

This policy applies to all individuals who develop, access, review, test, deploy, or maintain source code on behalf of [Organization Name], including but not limited to:

- Full-time and part-time employees in technology, application development, and IT operations roles.
- Contractors, consultants, and temporary staff engaged in software development or code review activities.
- Vendors and third-party service providers who are granted access to the Organization's source code or repositories under a formal agreement.
- Offshore development teams and managed service providers operating on behalf of the Organization.

### 2.2 In-Scope Systems and Environments

This policy covers all source code and associated artefacts maintained by or on behalf of [Organization Name], across the following environments:

| Environment | Description | Examples |
|---|---|---|
| Development | Environments used for active code development | Local developer workstations, cloud-based IDEs |
| Testing / QA | Non-production environments for testing and quality assurance | SIT, UAT, regression environments |
| Staging / Pre-Production | Near-production environments for final validation | Staging servers, pre-prod clusters |
| Production | Live operational environments serving customers | Core banking systems, digital banking platforms |
| Archival / Retired | Environments holding legacy or decommissioned code | Cold storage, archival repositories |

### 2.3 In-Scope Code Assets

The policy applies to:

- Proprietary application source code developed internally by [Organization Name].
- Configuration-as-code, infrastructure-as-code (IaC), and pipeline scripts (e.g., CI/CD configurations).
- Customisations, patches, and modifications made to third-party or open-source software.
- Scripts, stored procedures, database schemas, and query files maintained in version control.
- Documentation and specifications stored within source code repositories (e.g., API contracts, architecture decision records).
- Compiled binaries, build artefacts, and deployment packages derived from source code.

### 2.4 Out-of-Scope

The following are explicitly out of scope for this policy, unless otherwise specified:

- Third-party commercial off-the-shelf (COTS) software for which the Organization does not hold source code rights.
- Open-source libraries consumed as dependencies but not modified by the Organization.
- Data files, databases, and operational data that do not form part of an application's codebase.

---

## 3. Regulatory Context and Obligations

*This section establishes the regulatory basis for the policy. Reference all applicable regulatory documents, clauses, and guidelines. Where possible, summarise the specific obligation imposed by each clause.*

[Organization Name] is subject to the following regulatory requirements that directly inform this policy:

### 3.1 BNM Risk Management in Technology (RMiT)

The BNM RMiT Policy Document (effective [RMiT Effective Date]) sets out risk management requirements for technology systems used by financial institutions licensed under the Financial Services Act 2013 (FSA) and Islamic Financial Services Act 2013 (IFSA).

| RMiT Clause | Requirement Summary | Policy Relevance |
|---|---|---|
| **10.14** | Financial institutions shall implement appropriate controls to protect source code from unauthorised access, modification, and loss, including the use of version control systems and access restrictions. | Directly addressed by this policy in its entirety. |
| **10.1 – 10.5** | General requirements for application development and maintenance, including the use of secure development lifecycle practices. | Supported by Section 6.7 of this policy. |
| **10.12 – 10.13** | Change management controls applicable to application changes and releases. | Supported by Section 6.3 of this policy. |
| **11.1 – 11.5** | Cybersecurity requirements for protecting technology assets from internal and external threats. | Supported by Sections 6.2, 6.4, and 9 of this policy. |
| **13.1 – 13.3** | Business continuity and resilience requirements, including recovery of technology assets. | Supported by Section 6.6 of this policy. |

### 3.2 Personal Data Protection Act 2010 (PDPA)

Where source code processes or handles personal data of customers or staff, controls must ensure that the personal data remains protected. Source code repositories must not contain hardcoded personal data, credentials, or sensitive customer information in violation of the PDPA's security principle.

### 3.3 NACSA Guidelines

The National Cyber Security Agency's guidelines on critical information infrastructure protection, where applicable, impose requirements for protecting source code and software assets that underpin critical financial services.

### 3.4 Internal Standards

This policy shall be read in conjunction with:

- [Organization Name] Information Security Policy
- [Organization Name] IT Change Management Policy
- [Organization Name] Data Classification Policy
- [Organization Name] Vendor Management Policy
- [Organization Name] Business Continuity Management Policy

---

## 4. Definitions

*This section provides clear, unambiguous definitions for all technical and regulatory terms used throughout the policy. Ensure definitions are consistent with those used in BNM RMiT and the Organization's broader policy framework.*

| Term | Definition |
|---|---|
| **Source Code** | Human-readable instructions written in a programming language that define the behaviour of a software application. Includes application code, scripts, configuration files, and IaC templates maintained in a version control system. |
| **Version Control System (VCS)** | A system that records changes to source code over time, enabling retrieval of specific historical versions. Examples include Git, Subversion (SVN), and Mercurial. |
| **Repository** | A storage location within a version control system that contains the source code, history, and associated artefacts for a given software project or component. |
| **Branch** | A parallel line of development within a version control repository, allowing isolated development of features or fixes without affecting the main codebase. |
| **Commit** | A recorded change to a repository, representing a snapshot of the source code at a particular point in time, attributed to a specific author. |
| **Pull Request / Merge Request** | A formal request to merge changes from one branch into another, typically subject to peer review and automated checks before approval. |
| **Privileged Access** | Access rights that confer elevated capabilities over source code repositories, including the ability to merge to protected branches, delete repositories, or administer repository settings. |
| **Secrets** | Sensitive configuration data embedded in or alongside source code, such as API keys, passwords, cryptographic keys, and connection strings, which must not be stored in repositories. |
| **Static Application Security Testing (SAST)** | Automated analysis of source code or compiled binaries to identify security vulnerabilities without executing the code. |
| **Software Composition Analysis (SCA)** | Automated identification and risk assessment of open-source and third-party components used within a codebase, including known vulnerability detection. |
| **CI/CD Pipeline** | Continuous Integration and Continuous Delivery/Deployment pipeline; an automated sequence of steps that build, test, and deploy source code changes. |
| **Authorised Personnel** | Individuals explicitly granted access to a source code repository by the repository owner or Information Security team, in accordance with this policy. |
| **Data Classification** | The categorisation of information based on its sensitivity and the potential impact of unauthorised disclosure, as defined in the [Organization Name] Data Classification Policy. |
| **Intellectual Property (IP)** | Proprietary creations of the mind, including software code, that are legally protected and owned by or licensed to [Organization Name]. |
| **Production Environment** | The live operational environment in which software systems serve end users and customers. |
| **SDLC** | Software Development Lifecycle; the structured process governing the planning, creation, testing, deployment, and maintenance of software applications. |

---

## 5. Roles and Responsibilities

*This section defines accountability for source code protection activities. Use a RACI framework (Responsible, Accountable, Consulted, Informed) to clearly assign duties. Ensure each role is mapped to an organisational function rather than an individual.*

### 5.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of App Dev | Information Security | IT Operations | Developer / Engineer | CISO | Internal Audit | Vendor Manager |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Policy ownership and maintenance | A | C | I | I | C | I | I |
| Defining repository access standards | A/R | C | I | I | C | I | I |
| Granting and revoking repository access | R | C | R | I | I | I | I |
| Conducting periodic access reviews | A | R | C | I | I | C | I |
| Managing version control infrastructure | C | C | A/R | I | I | I | I |
| Enforcing branch protection rules | A/R | C | I | I | I | I | I |
| Conducting code reviews (security) | C | R | I | R | I | I | I |
| Conducting code reviews (functional) | A/R | I | I | R | I | I | I |
| Running SAST / SCA tooling | R | A | I | R | I | I | I |
| Managing secrets scanning controls | C | A/R | R | I | I | I | I |
| Overseeing third-party code access | A | C | I | I | C | I | R |
| Source code backup verification | C | C | A/R | I | I | I | I |
| Responding to source code incidents | A | R | R | C | C | I | C |
| Reporting source code breaches to BNM | I | R | I | I | A | I | I |
| Policy exception approval | C | C | I | I | A | I | I |
| Annual policy review | A | C | I | I | C | R | I |

### 5.2 Role Descriptions

#### 5.2.1 Head of Application Development

*The primary owner of this policy. Responsible for day-to-day governance of source code protection practices within the development function.*

- Owns and maintains this policy and ensures it reflects current technology practices and regulatory requirements.
- Approves access requests for source code repositories at the team or project level.
- Ensures all developers under their management have completed mandatory security training.
- Escalates material source code security incidents to the CISO.
- Reviews and approves policy exceptions in coordination with the CISO.

#### 5.2.2 Chief Information Security Officer (CISO)

*Executive accountability for information security governance, including source code protection.*

- Provides executive oversight of the source code protection programme.
- Approves policy exceptions that carry significant organisational risk.
- Ensures alignment of this policy with the Organization's broader information security strategy.
- Acts as the designated point of contact for regulatory engagement related to source code security incidents.

#### 5.2.3 Information Security Team

*Operational responsibility for implementing and monitoring source code security controls.*

- Defines and enforces technical security standards for source code repositories.
- Manages and monitors automated security tooling (SAST, SCA, secrets scanning).
- Conducts periodic access reviews and produces reports for the Head of Application Development.
- Investigates and responds to source code security incidents.
- Performs or coordinates independent security assessments of the source code environment.

#### 5.2.4 IT Operations

*Responsible for the infrastructure underpinning version control systems and CI/CD pipelines.*

- Maintains availability, performance, and patching of version control infrastructure.
- Implements and verifies backup and recovery processes for source code repositories.
- Supports access provisioning and de-provisioning workflows.

#### 5.2.5 Developer / Software Engineer

*Day-to-day custodians of source code. Directly responsible for adherence to secure coding and repository management practices.*

- Adheres to all requirements set out in this policy and associated standards.
- Does not commit secrets, credentials, or personal data to source code repositories.
- Participates in peer code review processes.
- Reports suspected or confirmed unauthorised access or code tampering to the Information Security team immediately.

#### 5.2.6 Vendor Manager

*Responsible for oversight of third-party and vendor access to source code.*

- Ensures vendor contracts include appropriate source code confidentiality and security clauses.
- Coordinates with the Information Security team to provision and deprovision vendor access.
- Monitors vendor compliance with source code access requirements.

#### 5.2.7 Internal Audit

*Independent assurance over source code protection controls.*

- Conducts periodic audits of source code protection practices against this policy.
- Reports findings and recommendations to the Audit Committee.
- Validates management's remediation of audit findings.

---

## 6. Policy Statements and Requirements

*This section contains the substantive requirements of the policy. Each subsection addresses a distinct aspect of source code protection. Authors should populate each subsection with specific, measurable controls applicable to the Organization's environment.*

---

### 6.1 Source Code Repository Management

*Define the requirements for how source code repositories are established, governed, and maintained. Include standards for repository naming, classification, and lifecycle management.*

#### 6.1.1 Approved Repository Platforms

All source code maintained by [Organization Name] shall be stored exclusively in Organisation-sanctioned version control systems. The use of personal accounts on public hosting platforms (e.g., personal GitHub, GitLab, or Bitbucket accounts) for Organisation source code is strictly prohibited.

| Approved Platform | Hosting Model | Primary Use Case | Operator |
|---|---|---|---|
| [Platform Name, e.g., GitLab EE] | [On-premises / Private Cloud] | All production source code | IT Operations |
| [Platform Name] | [On-premises / Private Cloud] | [Use Case] | [Operator] |

*Note: Any request to use a new repository platform must be submitted as a change request and approved by the Head of Application Development and CISO prior to adoption.*

#### 6.1.2 Repository Creation and Registration

- All new repositories shall be created only by authorised administrators.
- Each repository shall be registered in [Organization Name]'s IT Asset Register within [X] business days of creation, with the following information captured:

| Field | Description |
|---|---|
| Repository Name | Unique identifier for the repository |
| Application / System Name | The application or system the repository supports |
| Repository Owner | Named individual accountable for the repository |
| Data Classification | Classification level per the Data Classification Policy |
| Creation Date | Date the repository was created |
| Repository Status | Active / Archived / Pending Decommission |
| Third-Party Access | Yes / No — whether vendors have access |

#### 6.1.3 Repository Classification

All repositories shall be classified in accordance with the [Organization Name] Data Classification Policy. The default classification for all internally developed source code is **Confidential**. Repositories shall not be set to public visibility under any circumstances without written approval from the CISO.

| Classification Level | Description | Example |
|---|---|---|
| Confidential | Proprietary business logic, financial algorithms, security controls | Core banking application source code |
| Internal | Internal tooling, administrative scripts with limited exposure | Deployment automation scripts |
| Restricted | Code containing references to regulated data processing | Code interfacing with customer PII |

---

### 6.2 Access Control for Source Code

*Describe the controls governing who may access source code repositories, under what conditions, and how access is provisioned and reviewed. Reference the principle of least privilege.*

#### 6.2.1 Principle of Least Privilege

Access to source code repositories shall be granted on a **need-to-know, least-privilege basis**. Individuals shall be granted only the minimum level of access required to perform their assigned duties.

#### 6.2.2 Access Levels

The following access levels are defined for source code repositories:

| Access Level | Description | Who May Be Assigned |
|---|---|---|
| **Read** | View and clone repository contents | Approved reviewers, auditors, read-only stakeholders |
| **Write / Developer** | Push to non-protected branches, raise merge requests | Assigned developers |
| **Maintainer** | Manage branches, approve and merge pull requests | Senior developers, tech leads |
| **Owner / Administrator** | Full repository control, including settings and deletion | Repository owners, IT Operations (infrastructure only) |

#### 6.2.3 Access Provisioning

- All access requests shall be submitted through the [Organization Name] IT Service Management (ITSM) system using the approved request form ([Form Reference]).
- Access shall be approved by the relevant Repository Owner and the Head of Application Development.
- Privileged access (Maintainer and above) shall require additional approval from Information Security.
- Access shall be provisioned within [X] business days of approval.
- Default access for all new repositories shall be **no access** until explicitly granted.

#### 6.2.4 Access Revocation

- Access shall be revoked within **[X] hours** of an employee's separation from the Organisation being confirmed in the HR system.
- Access shall be revoked within **[X] business days** when an employee changes role or team and no longer requires access to a specific repository.
- Vendor access shall be revoked upon contract expiry, project completion, or at the direction of the Vendor Manager.
- Emergency access revocation (e.g., in response to a security incident) shall be executed within **[X] hours** of incident confirmation.

#### 6.2.5 Privileged Access Management

- Accounts with Owner or Administrator access to repository platforms shall be treated as privileged accounts and managed in accordance with the [Organization Name] Privileged Access Management (PAM) Policy.
- Multi-factor authentication (MFA) is mandatory for all users accessing the Organization's version control systems, without exception.
- Shared or generic accounts shall not be used to access source code repositories. All access shall be attributed to a named individual.
- Service accounts used by CI/CD pipelines shall have access restricted to the minimum set of repositories required, with read-only access where possible.

#### 6.2.6 Periodic Access Reviews

- The Information Security team shall conduct a **quarterly access review** of all source code repository access rights.
- Repository Owners shall be required to certify the continued appropriateness of access for all individuals and service accounts within their repositories.
- Access certifications shall be completed within **[X] business days** of the review being initiated.
- All unresponded-to certifications shall default to **access revocation**.
- Access review outcomes shall be documented and retained for a minimum of **[X] years** for audit purposes.

---

### 6.3 Source Code Versioning and Change Management

*Define the mandatory version control practices, branching strategies, and change management controls that govern how changes are made to source code.*

#### 6.3.1 Mandatory Use of Version Control

All source code shall be managed within an approved version control system at all times. The use of shared drives, email attachments, USB storage, or other non-VCS mechanisms to transfer or maintain source code is prohibited.

#### 6.3.2 Branching Strategy

[Organization Name] shall adopt a defined branching strategy for all repositories. The following branching model applies unless a specific exception has been granted:

| Branch Type | Purpose | Protection Level | Merge Authorisation |
|---|---|---|---|
| `main` / `master` | Production-ready code | Protected | Maintainer approval required; no direct commits |
| `develop` | Integration branch for completed features | Protected | Maintainer approval required |
| `release/*` | Release preparation and stabilisation | Protected | Maintainer approval required |
| `feature/*` | Individual feature development | Standard | Developer self-managed |
| `hotfix/*` | Emergency production fixes | Protected | Maintainer approval + expedited review |
| `bugfix/*` | Non-critical bug fixes | Standard | Developer self-managed |

*Note: Branching strategies may be adapted at the project level with documented justification, subject to approval by the Head of Application Development.*

#### 6.3.3 Branch Protection Requirements

The following protections shall be enforced on all protected branches:

- Direct commits (bypassing pull/merge requests) are prohibited.
- A minimum of **[X] peer reviewer approvals** are required before a merge request may be completed.
- All automated CI checks (build, test, SAST) must pass prior to merge.
- Branch history shall not be rewritten (no force pushes).
- The author of a pull request may not approve their own changes.

#### 6.3.4 Commit Requirements

- Each commit shall be attributed to an individually identified author. Anonymous or pseudonymous commits are prohibited.
- Commits shall include a descriptive commit message referencing the associated change ticket (e.g., `[JIRA-1234] Fix null pointer exception in payment processor`).
- Commits must not contain secrets, credentials, API keys, or personal data (see Section 6.4.3).

#### 6.3.5 Change Management Integration

All significant source code changes — including new features, architectural changes, and security fixes — shall be linked to an approved change record in the ITSM system prior to merge into protected branches. Emergency changes (hotfixes) shall follow the expedited change management process defined in the [Organization Name] IT Change Management Policy.

---

### 6.4 Source Code Security and Integrity

*Define the technical and procedural controls that protect the security and integrity of source code. Include requirements for automated security scanning, secrets management, and code signing.*

#### 6.4.1 Mandatory Security Scanning

All source code committed to approved repositories shall be subject to the following automated security scans, integrated into the CI/CD pipeline:

| Scan Type | Tool | Stage | Blocking? | Frequency |
|---|---|---|---|---|
| Static Application Security Testing (SAST) | [Tool Name] | Pre-merge | Yes — on High/Critical findings | Every commit |
| Software Composition Analysis (SCA) | [Tool Name] | Pre-merge | Yes — on known exploitable CVEs | Every commit |
| Secrets Scanning | [Tool Name] | Pre-commit + pre-merge | Yes — on any detected secret | Every commit |
| Infrastructure-as-Code (IaC) Scanning | [Tool Name] | Pre-merge | Yes — on High/Critical findings | Every commit |
| Container Image Scanning | [Tool Name] | Build stage | Yes — on Critical CVEs | Every build |

*Note: Scan results shall be logged, retained for [X] years, and reviewed by the Information Security team. Blocking thresholds shall be reviewed and adjusted [annually / semi-annually] by the Information Security team.*

#### 6.4.2 Vulnerability Remediation SLAs

Vulnerabilities identified through automated scans shall be remediated within the following timeframes:

| Severity | Remediation SLA | Escalation Path |
|---|---|---|
| Critical | [X] business days | Immediate escalation to CISO |
| High | [X] business days | Escalation to Head of Application Development |
| Medium | [X] calendar days | Managed through sprint backlog |
| Low | [X] calendar days | Managed through sprint backlog |
| Informational | Best effort | No escalation required |

#### 6.4.3 Secrets Management

- Secrets (API keys, passwords, tokens, cryptographic material, connection strings) shall **never** be committed to source code repositories, regardless of branch or environment.
- All secrets shall be stored in and retrieved from [Organization Name]'s approved secrets management solution ([Tool Name, e.g., HashiCorp Vault / Azure Key Vault]).
- Pre-commit hooks implementing secrets detection shall be configured on all developer workstations and enforced at the repository level.
- Any secret inadvertently committed to a repository shall be treated as **compromised immediately**. The relevant secret shall be rotated without delay, and the incident shall be reported to the Information Security team.

#### 6.4.4 Code Signing and Integrity Verification

*Describe any requirements for digitally signing code artefacts, commits, or releases to verify authenticity and detect tampering.*

- [Describe code signing requirements applicable to the Organization, e.g., GPG signing of commits, signing of release artefacts.]
- Build artefacts deployed to production environments shall be verified against their cryptographic checksums prior to deployment.
- Any artefact that fails integrity verification shall not be deployed and shall be reported as a security incident.

#### 6.4.5 Dependency Management

- All external dependencies (open-source libraries, packages) shall be declared in a dependency manifest file (e.g., `package.json`, `pom.xml`, `requirements.txt`) and committed to the repository.
- Developers shall not introduce new dependencies without review and approval from the relevant Tech Lead.
- Approved dependency sources (registries) shall be defined and enforced by IT Operations. Use of unregistered or unofficial package sources is prohibited.
- SCA scan results shall be reviewed prior to each release to ensure no newly disclosed vulnerabilities affect dependencies in use.

---

### 6.5 Third-Party and Vendor Source Code

*Define the requirements governing vendor access to the Organization's source code, as well as the management of source code supplied by or developed by third parties.*

#### 6.5.1 Vendor Access to Organisation Source Code

- Third-party vendors and contractors shall only be granted access to source code repositories that are strictly necessary for the delivery of contracted services.
- Vendor access shall be provisioned in accordance with Section 6.2 of this policy.
- All vendor personnel requiring access shall be individually named. Shared or team-level vendor accounts are prohibited.
- Vendor access rights shall be subject to the same quarterly access review process as internal personnel (Section 6.2.6).
- Vendors shall acknowledge and sign the [Organization Name] Source Code Confidentiality Agreement (Appendix B) prior to access being provisioned.

#### 6.5.2 Contractual Requirements

All contracts with vendors who access, develop, or maintain [Organization Name] source code shall include, at a minimum:

| Contractual Clause | Description |
|---|---|
| Confidentiality | Prohibition on disclosure of source code to third parties |
| IP Ownership | Explicit assignment of intellectual property rights in developed code to [Organization Name] |
| Security Standards | Obligation to comply with [Organization Name]'s source code security standards |
| Audit Rights | Right of [Organization Name] to audit vendor's code security practices |
| Incident Notification | Obligation to report suspected source code breaches within [X] hours |
| Return / Destruction | Obligation to return or destroy source code copies upon contract termination |

#### 6.5.3 Source Code Escrow

For critical systems where the Organization relies on vendor-supplied source code, a source code escrow arrangement shall be established to ensure the Organization's ability to access the source code under defined trigger conditions (e.g., vendor insolvency, material breach of contract).

*Document the list of systems subject to source code escrow requirements and the escrow agent details in Appendix C.*

#### 6.5.4 Open-Source Software Usage

- The use of open-source software (OSS) components in Organisation systems is permitted subject to review and approval in accordance with the [Organization Name] Open-Source Software Usage Standard.
- OSS components shall be evaluated for licence compatibility, security posture, and maintenance status prior to adoption.
- A record of all OSS components in use, including version and licence details, shall be maintained and updated at each release (Software Bill of Materials — SBOM).

---

### 6.6 Source Code Backup and Recovery

*Define the controls ensuring source code is backed up reliably and can be recovered in a timely manner following a loss event.*

#### 6.6.1 Backup Requirements

All source code repositories shall be included in the Organisation's backup programme, with the following minimum requirements:

| Parameter | Requirement |
|---|---|
| Backup Frequency | [Daily / Continuous mirroring] |
| Backup Retention Period | [X months / years] |
| Backup Encryption | AES-256 or equivalent; keys managed separately from backup data |
| Offsite / Secondary Location | Required — backup stored in geographically separate location from primary |
| Backup Verification | Monthly automated restoration test |
| Recovery Point Objective (RPO) | [X hours] |
| Recovery Time Objective (RTO) | [X hours] |

#### 6.6.2 Backup Testing and Verification

- IT Operations shall perform a **monthly verification** of source code backup integrity by testing restoration of a sample of repositories to a non-production environment.
- Results of backup tests shall be documented and retained.
- Any backup failures shall be escalated to the Head of Application Development and resolved within [X] business days.

#### 6.6.3 Disaster Recovery

- Source code repositories shall be included in the Organisation's Disaster Recovery (DR) plan.
- The DR plan shall document the procedure for recovering the version control infrastructure and all repositories following a catastrophic failure.
- DR tests shall include source code recovery scenarios at least **annually**, in alignment with the [Organization Name] Business Continuity Management Policy.

---

### 6.7 Secure Code Development Practices

*Describe the secure development lifecycle requirements that developers must follow to prevent the introduction of vulnerabilities into source code.*

#### 6.7.1 Secure Development Lifecycle (SDLC) Integration

[Organization Name] shall embed security at each phase of the software development lifecycle in accordance with the following requirements:

| SDLC Phase | Security Activity | Responsible |
|---|---|---|
| Requirements | Security requirements definition; threat modelling initiation | Developer, Information Security |
| Design | Architecture review; threat modelling completion | Developer, Information Security |
| Development | Secure coding standards compliance; peer code review; pre-commit secrets scanning | Developer, Tech Lead |
| Testing | SAST; SCA; dynamic testing (DAST) where applicable; penetration testing for high-risk systems | Developer, Information Security |
| Deployment | Artefact integrity verification; production access control review | IT Operations, Information Security |
| Maintenance | Vulnerability patching; periodic code review | Developer, Information Security |
| Decommissioning | Secure code retirement and archival; access revocation | Developer, IT Operations |

#### 6.7.2 Secure Coding Standards

All developers shall adhere to the [Organization Name] Secure Coding Standards (see Appendix D), which are based on industry-recognised frameworks including:

- OWASP Top 10 (Web Application Security Risks)
- OWASP ASVS (Application Security Verification Standard)
- CERT Secure Coding Standards
- [Any language-specific standards applicable to the Organisation's technology stack]

#### 6.7.3 Peer Code Review

- All code changes merged into protected branches shall be subject to peer review by at least **[X] reviewer(s)** with appropriate technical competence.
- Code reviews shall include assessment of security implications, not only functional correctness.
- Reviewers shall not approve changes without adequate understanding of the code being reviewed.
- Review comments and approval records shall be preserved within the version control system as a permanent audit trail.

#### 6.7.4 Developer Security Training

- All developers shall complete mandatory application security training within **[X] days** of joining the Organisation.
- Annual refresher training covering OWASP Top 10, secure coding practices, and the requirements of this policy is mandatory for all development personnel.
- Training completion records shall be maintained by the Head of Application Development and made available to Internal Audit upon request.

---

### 6.8 Source Code Review and Audit

*Define the periodic review and independent audit activities that provide assurance over source code protection controls.*

#### 6.8.1 Internal Review

- The Head of Application Development shall commission an **annual internal review** of source code protection practices against the requirements of this policy.
- The review shall cover a representative sample of repositories and shall assess:
  - Compliance with access control requirements.
  - Effectiveness of automated scanning controls.
  - Branch protection configuration.
  - Secrets management adherence.
  - Backup and recovery readiness.

#### 6.8.2 Independent Security Assessment

- An independent security assessment of the source code environment shall be conducted at least **[annually / every two years]**, either by Internal Audit or a qualified external party.
- The scope shall include the version control infrastructure, CI/CD pipelines, and a sample of application repositories.
- Findings shall be reported to the Audit Committee and the CISO, with remediation tracked to closure.

#### 6.8.3 Audit Logs

- All access to and operations performed within the version control system (login, clone, push, pull, administrative actions) shall be logged.
- Audit logs shall be:
  - Retained for a minimum of **[X years]** in accordance with the [Organization Name] Log Management Standard.
  - Forwarded to the Security Information and Event Management (SIEM) system for monitoring.
  - Protected from modification or deletion by source code repository users.

---

### 6.9 Source Code Retirement and Disposal

*Define the controls governing the decommissioning, archival, and secure disposal of source code assets.*

#### 6.9.1 Archival of Retired Code

- When an application or system is decommissioned, its source code shall be **archived** rather than deleted, to support future audit, legal, or regulatory requirements.
- Archived repositories shall be moved to read-only status and access restricted to authorised personnel only.
- The archival action shall be recorded in the IT Asset Register, with the following information:

| Field | Description |
|---|---|
| Repository Name | Name of the archived repository |
| Archive Date | Date the repository was archived |
| Reason for Archival | Business or technical reason for decommissioning |
| Retention Period | Period for which the archive must be retained |
| Authorised By | Name and role of approver |

#### 6.9.2 Retention Periods

Source code archives shall be retained for the periods defined below, or for longer if required by law or regulation:

| Code Type | Minimum Retention Period |
|---|---|
| Production application source code | [X years] after decommissioning |
| Security-relevant code (authentication, encryption) | [X years] after decommissioning |
| Regulatory reporting code | [X years] after decommissioning |
| Configuration and IaC | [X years] after decommissioning |

#### 6.9.3 Secure Disposal

- At the end of the defined retention period, archived repositories shall be **permanently deleted** from all systems, including backups, in accordance with the [Organization Name] Data Disposal Standard.
- Disposal shall be documented and authorised by the Head of Application Development.
- Physical media containing source code that is being decommissioned shall be destroyed using a certified data destruction method.

---

## 7. Exceptions and Escalation Process

*This section describes the process for requesting, approving, and documenting exceptions to this policy. Exceptions should be time-bound, risk-assessed, and subject to compensating controls.*

### 7.1 Exception Principles

[Organization Name] recognises that operational circumstances may occasionally necessitate temporary deviations from the requirements of this policy. All exceptions shall be:

- **Formally requested** — no informal verbal approvals are permitted.
- **Risk-assessed** — the risk arising from the exception shall be documented and accepted by an authorised approver.
- **Time-bound** — exceptions shall be granted for a defined period not exceeding **[X months]**, with a clear expiry date.
- **Compensating control-bearing** — wherever practicable, compensating controls shall be implemented to mitigate the risk introduced by the exception.
- **Reviewed** — exceptions shall be reviewed prior to expiry and either remediated, renewed, or escalated.

### 7.2 Exception Request Process

| Step | Action | Responsible |
|---|---|---|
| 1 | Complete the Source Code Policy Exception Request Form (Appendix E). | Requestor |
| 2 | Submit the form to the Head of Application Development via the ITSM system. | Requestor |
| 3 | Assess the risk and identify compensating controls. | Head of Application Development, Information Security |
| 4 | Approve or reject the exception request. | CISO (for exceptions with High/Critical risk) or Head of Application Development (Medium/Low risk) |
| 5 | Communicate the decision to the requestor and log in the Exception Register. | Information Security |
| 6 | Implement compensating controls (if applicable). | Requestor / IT Operations |
| 7 | Review the exception prior to expiry and take appropriate action. | Information Security |

### 7.3 Exception Register

All approved exceptions shall be recorded in the Source Code Policy Exception Register, maintained by the Information Security team, with the following information:

| Field | Description |
|---|---|
| Exception ID | Unique identifier |
| Date Requested | Date exception was submitted |
| Requestor | Name and team |
| Policy Clause | Clause(s) from which exception is sought |
| Business Justification | Reason the exception is required |
| Risk Assessment | Risk rating and description |
| Compensating Controls | Controls implemented to mitigate risk |
| Approved By | Approver name and role |
| Approval Date | Date approved |
| Expiry Date | Date exception expires |
| Status | Active / Expired / Remediated |

### 7.4 Escalation

Where an exception request is denied and the requesting party believes the denial creates an unacceptable operational risk, the matter may be escalated in the following order:

1. Head of Application Development
2. CISO
3. Chief Technology Officer (CTO)
4. Risk Management Committee

Escalations shall be documented and resolved within **[X] business days**.

---

## 8. Compliance and Enforcement

*This section describes how compliance with this policy is measured, monitored, and enforced, including the consequences of non-compliance.*

### 8.1 Compliance Monitoring

Compliance with this policy shall be monitored through the following mechanisms:

| Monitoring Activity | Frequency | Responsible | Output |
|---|---|---|---|
| Automated repository configuration scanning | Continuous | Information Security | Dashboard / Alerts |
| Access rights review | Quarterly | Information Security | Access Review Report |
| SAST/SCA scan completion rate | Monthly | Head of Application Development | Metrics Report |
| Policy exception register review | Quarterly | CISO | Exception Summary |
| Internal policy compliance review | Annual | Internal Audit | Audit Report |
| Independent security assessment | [Annual / Biennial] | External Auditor / Internal Audit | Assessment Report |

### 8.2 Key Compliance Metrics

[Organization Name] shall track and report the following key performance indicators (KPIs) for source code protection:

| Metric | Target | Reporting Frequency |
|---|---|---|
| % of repositories with branch protection enabled | 100% | Monthly |
| % of commits passing automated security scans | ≥ 99% | Monthly |
| % of Critical/High SAST findings remediated within SLA | 100% | Monthly |
| % of developers who have completed annual security training | 100% | Quarterly |
| Quarterly access review completion rate | 100% | Quarterly |
| Number of active policy exceptions | < [X] | Quarterly |
| Mean time to revoke departed employee access | ≤ [X] hours | Monthly |

### 8.3 Non-Compliance and Disciplinary Action

Non-compliance with this policy may result in disciplinary action commensurate with the severity and intent of the breach. The following framework applies:

| Breach Severity | Examples | Potential Consequence |
|---|---|---|
| **Minor** | Failure to include a ticket reference in a commit message; late completion of access review | Verbal warning; mandatory retraining |
| **Moderate** | Granting repository access without proper approval; failure to disclose a scan finding | Written warning; access suspension; formal investigation |
| **Serious** | Committing secrets or credentials to a repository; circumventing branch protection controls | Formal disciplinary action up to and including dismissal; regulatory notification where required |
| **Critical / Malicious** | Deliberate exfiltration of source code; sabotage of code integrity controls | Immediate dismissal; referral to law enforcement; regulatory notification |

*Note: Disciplinary actions shall be administered in accordance with the [Organization Name] Human Resources Disciplinary Policy and applicable Malaysian employment law.*

### 8.4 Regulatory Non-Compliance

Where a breach of this policy also constitutes a breach of BNM RMiT or other applicable regulations, the CISO shall notify BNM in accordance with the incident reporting requirements of the RMiT Policy Document and any other applicable regulatory guidance. The Legal and Compliance function shall be engaged in all cases of potential regulatory non-compliance.

---

## 9. Incident Management

*This section defines the process for identifying, reporting, escalating, and responding to source code security incidents. It complements the Organization's broader Incident Response Policy.*

### 9.1 Incident Classification

Source code security incidents shall be classified as follows:

| Incident Type | Classification | Examples |
|---|---|---|
| Confirmed unauthorised access to source code | Critical | External breach, insider threat, compromised credentials |
| Suspected unauthorised access (under investigation) | High | Anomalous access patterns, failed brute-force attempts |
| Secret/credential committed to repository | High | API key, password, certificate found in commit history |
| Accidental public exposure of private repository | High | Repository visibility changed to public |
| Detected malicious code in repository | Critical | Backdoor, logic bomb, supply-chain tampering |
| Loss of source code (accidental deletion, backup failure) | Medium-High | Repository deleted, backup corruption |
| Unauthorised modification of protected branch | High | Forced push, bypassed review process |

### 9.2 Incident Reporting

- Any individual who suspects or confirms a source code security incident shall report it to the Information Security team **immediately** and no later than **[X] hours** after detection.
- Incidents shall be reported via [Reporting Channel — e.g., ITSM portal, security hotline, email].
- Reporters shall not attempt to investigate, remediate, or conceal an incident independently prior to reporting.

### 9.3 Incident Response Steps

| Step | Action | Responsible |
|---|---|---|
| 1. Detection & Reporting | Identify and report the incident | All staff |
| 2. Initial Triage | Classify the incident and assess initial impact | Information Security |
| 3. Containment | Revoke suspect access; isolate affected repositories; rotate compromised credentials | Information Security, IT Operations |
| 4. Investigation | Determine root cause, scope of exposure, and affected parties | Information Security, Head of App Dev |
| 5. Eradication | Remove malicious code, revoke compromised keys, restore clean backups | IT Operations, Developer |
| 6. Recovery | Restore affected systems and verify integrity | IT Operations |
| 7. Regulatory Notification | Notify BNM and other relevant regulators if required | CISO, Legal & Compliance |
| 8. Post-Incident Review | Root cause analysis, lessons learned, policy updates | Head of App Dev, Information Security |

### 9.4 Post-Incident Review

A post-incident review (PIR) shall be conducted within **[X] business days** of resolving any Critical or High severity source code incident. The PIR report shall include:

- Timeline of events.
- Root cause analysis.
- Impact assessment.
- Effectiveness of the incident response.
- Recommendations and remediation actions with owners and target dates.

PIR reports shall be presented to the CISO and, where relevant, the Audit Committee.

---

## 10. Training and Awareness

*This section defines the training obligations for all personnel subject to this policy.*

### 10.1 Mandatory Training Programme

| Training Module | Target Audience | Frequency | Delivery Mode | Minimum Passing Score |
|---|---|---|---|---|
| Application Security Fundamentals (OWASP Top 10) | All developers | Annual | [Online / In-person] | [X%] |
| Secure Coding Practices | All developers | Annual | [Online / In-person] | [X%] |
| Source Code Protection Policy Awareness | All in-scope personnel | Annual (or upon policy update) | Online | [X%] |
| Secrets Management and Prevention | All developers | Annual | [Online / In-person] | [X%] |
| Incident Reporting for Source Code Breaches | All developers and IT Operations | Annual | Online | [X%] |
| Advanced Threat Modelling | Senior developers, architects | [Annual / Biennial] | In-person / Workshop | N/A (completion required) |

### 10.2 Onboarding

All new personnel subject to this policy shall complete the mandatory training programme within **[X] days** of commencing employment or engagement. Access to source code repositories shall not be provisioned until mandatory training completion is confirmed.

### 10.3 Training Records

The Head of Application Development is responsible for maintaining training completion records. Records shall be retained for a minimum of **[X years]** and made available to Internal Audit upon request.

---

## 11. Review and Approval History

*This section provides the formal governance record for this policy. Maintain a complete audit trail of all versions, reviews, and approvals.*

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], Head of Application Development | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 11.2 Review Schedule

This policy shall be reviewed at least **annually**, or sooner if any of the following trigger conditions occur:

- A material change to BNM RMiT or other applicable regulations.
- A significant source code security incident or near-miss.
- A material change to the Organisation's technology architecture or development practices.
- A recommendation from Internal Audit or an external assessor.
- A change to the Organization's risk appetite in relation to source code security.

The next scheduled review date is **[Next Review Date]**.

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Application Development | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Technology Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Chief Executive Officer / Managing Director | [Name] | | [Date] |

*Note: This policy is effective upon the signature of the Head of Application Development and CISO. CEO/MD sign-off is required for initial issuance and for any major revision (version increment ≥ 1.0).*

---

## 12. References

*This section lists all regulatory documents, standards, and internal policies referenced by or directly informing this policy.*

### 12.1 Regulatory References

| Reference | Document Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | 10.14, 10.1–10.5, 10.12–10.13, 11.1–11.5, 13.1–13.3 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Security principle (Part 2) |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Applicable provisions |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Applicable provisions |
| NACSA Guidelines | [Applicable NACSA Guideline Title] | NACSA | [Relevant sections] |

### 12.2 Industry Standards

| Standard | Title | Relevance |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | A.8.4 — Access to source code |
| ISO/IEC 27002:2022 | Information Security Controls | 8.4 — Access to source code |
| OWASP Top 10 | Web Application Security Risks | Secure development guidance |
| OWASP ASVS | Application Security Verification Standard | Secure coding verification requirements |
| NIST SP 800-218 | Secure Software Development Framework (SSDF) | Secure SDLC practices |

### 12.3 Internal Policies and Standards

| Document | Title | Owner |
|---|---|---|
| [Doc ID] | Information Security Policy | CISO |
| [Doc ID] | IT Change Management Policy | Head of IT Operations |
| [Doc ID] | Data Classification Policy | CISO |
| [Doc ID] | Privileged Access Management Policy | CISO |
| [Doc ID] | Vendor Management Policy | Chief Procurement Officer |
| [Doc ID] | Business Continuity Management Policy | Chief Risk Officer |
| [Doc ID] | Incident Response Policy | CISO |
| [Doc ID] | Secure Coding Standards | Head of Application Development |
| [Doc ID] | Open-Source Software Usage Standard | Head of Application Development |
| [Doc ID] | Data Disposal Standard | CISO |
| [Doc ID] | Log Management Standard | Head of IT Operations |

---

## 13. Appendices

*This section contains supporting materials referenced throughout this policy. Each appendix should be maintained as a living document and updated independently of the main policy body where appropriate.*

---

### Appendix A — Repository Inventory Template

*Use this template to maintain the IT Asset Register entries for all source code repositories managed by [Organization Name]. This inventory shall be maintained by IT Operations and reviewed by the Head of Application Development quarterly.*

| Field | Value |
|---|---|
| Repository ID | [Auto-generated] |
| Repository Name | [e.g., core-banking-api] |
| Platform | [e.g., GitLab, GitHub Enterprise] |
| Application / System | [e.g., Core Banking System] |
| Repository Owner | [Name and email] |
| Development Team | [Team name] |
| Data Classification | [Confidential / Internal / Restricted] |
| Languages | [e.g., Java, Python, TypeScript] |
| Third-Party Access | [Yes / No] |
| Third-Party Name (if applicable) | [Vendor name] |
| Branch Protection Enabled | [Yes / No] |
| SAST Enabled | [Yes / No] |
| SCA Enabled | [Yes / No] |
| Secrets Scanning Enabled | [Yes / No] |
| Backup Included | [Yes / No] |
| Creation Date | [DD/MM/YYYY] |
| Last Access Review Date | [DD/MM/YYYY] |
| Repository Status | [Active / Archived / Pending Decommission] |
| Notes | [Any additional notes] |

---

### Appendix B — Source Code Confidentiality Agreement (Vendor / Contractor)

*This agreement shall be signed by all third-party vendors and contractors before access to [Organization Name] source code repositories is provisioned.*

**SOURCE CODE CONFIDENTIALITY AGREEMENT**

This agreement is entered into between **[Organization Name]** ("the Disclosing Party") and **[Vendor / Contractor Name]** ("the Receiving Party") on **[Date]**.

**1. Confidentiality Obligation**
The Receiving Party acknowledges that all source code, documentation, and related materials disclosed by the Disclosing Party ("Confidential Information") are proprietary and confidential. The Receiving Party agrees to:

- Use Confidential Information solely for the purpose of delivering the services contracted under **[Contract Reference]**.
- Not disclose, copy, reproduce, or distribute Confidential Information to any third party without the prior written consent of the Disclosing Party.
- Apply security measures no less stringent than those applied to its own most sensitive confidential information, and in any case no less than the requirements of [Organization Name]'s Source Code Protection Policy.

**2. Return and Destruction**
Upon completion of the engagement or at the Disclosing Party's request, the Receiving Party shall promptly return or destroy all copies of Confidential Information and provide written confirmation of destruction.

**3. Incident Notification**
The Receiving Party shall notify the Disclosing Party within **[X] hours** of becoming aware of any actual or suspected unauthorised access to, disclosure of, or loss of Confidential Information.

**4. Governing Law**
This agreement is governed by the laws of Malaysia.

| Party | Name | Signature | Date |
|---|---|---|---|
| [Organization Name] | [Authorised Representative] | | [Date] |
| [Vendor / Contractor Name] | [Authorised Representative] | | [Date] |

---

### Appendix C — Source Code Escrow Register

*This register records all systems for which a source code escrow arrangement is in place. Reviewed annually by the Vendor Manager.*

| System / Application | Vendor Name | Escrow Agent | Escrow Agreement Reference | Last Tested | Trigger Conditions |
|---|---|---|---|---|---|
| [System Name] | [Vendor Name] | [Escrow Agent Name] | [Agreement Ref] | [DD/MM/YYYY] | [e.g., Vendor insolvency, material breach] |

---

### Appendix D — Secure Coding Standards Summary

*This appendix provides a high-level summary of the secure coding standards applicable to [Organization Name] developers. Full standards are maintained in [Document Reference]. This summary is intended as a quick reference guide and does not supersede the full standards document.*

#### Input Validation
- All input received from external sources (users, APIs, files) shall be validated against expected type, length, format, and range before processing.
- Reject all input that does not conform to expected patterns.

#### Authentication and Session Management
- Implement strong authentication controls for all application functions requiring identity verification.
- Use approved, industry-standard session management libraries. Do not implement custom session management.
- Ensure session tokens are sufficiently random, expire appropriately, and are invalidated upon logout.

#### Access Control
- Enforce access control checks server-side for every request. Do not rely on client-side enforcement.
- Implement deny-by-default access control policies.

#### Cryptography
- Use only approved cryptographic algorithms and key lengths as defined in the [Organization Name] Cryptography Standard.
- Do not implement custom cryptographic functions.
- Manage cryptographic keys using the approved secrets management solution.

#### Error Handling and Logging
- Do not expose sensitive information (stack traces, internal paths, user data) in error messages returned to users.
- Log security-relevant events (authentication failures, access control violations, input validation failures) to the centralised SIEM.

#### Dependency Management
- Keep all dependencies updated and verified against the approved SCA tool.
- Remove unused dependencies from the codebase.

#### Secrets and Configuration
- Never hardcode secrets, credentials, or environment-specific configuration in source code.
- Use environment variables or an approved secrets manager to inject sensitive configuration at runtime.

---

### Appendix E — Source Code Policy Exception Request Form

*This form shall be used to request a formal exception to any requirement of this policy. Submit to the Head of Application Development via the ITSM portal.*

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-generated by ITSM] |
| **Date of Request** | [DD/MM/YYYY] |
| **Requestor Name** | [Full Name] |
| **Requestor Team / Department** | [Team / Department] |
| **Requestor Contact** | [Email / Phone] |
| **Policy Document Reference** | Source Code Protection Policy — [Document ID] |
| **Policy Clause(s) Affected** | [e.g., Section 6.2.5 — MFA requirement] |
| **Description of Exception Required** | [Clearly describe what policy requirement cannot be met and why] |
| **Business Justification** | [Explain the business or operational reason necessitating the exception] |
| **Risk Assessment** | [Describe the risks arising from the exception — likelihood and impact] |
| **Proposed Compensating Controls** | [Describe what alternative controls will be implemented to mitigate risk] |
| **Requested Exception Period** | From: [DD/MM/YYYY] — To: [DD/MM/YYYY] |
| **Remediation Plan** | [Describe how full policy compliance will be achieved by the expiry date] |
| **Requestor Sign-Off** | Signature: ________________ Date: ________ |

---

**FOR APPROVER USE ONLY**

| Field | Details |
|---|---|
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Decision** | [Approved / Approved with Conditions / Rejected] |
| **Conditions (if applicable)** | [Any conditions attached to approval] |
| **Approved By** | [Name and Role] |
| **Approval Date** | [DD/MM/YYYY] |
| **Exception Expiry Date** | [DD/MM/YYYY] |
| **Notes** | |

---

### Appendix F — Source Code Incident Response Quick Reference Card

*This quick reference is intended for distribution to all development and IT operations staff. It provides a summary of actions to take when a source code security incident is suspected or confirmed.*

---

**IF YOU SUSPECT A SOURCE CODE SECURITY INCIDENT:**

**STEP 1 — STOP**
Do not attempt to investigate, fix, or cover up the incident independently.

**STEP 2 — REPORT**
Contact the Information Security team immediately:
- **Hotline:** [Phone Number]
- **Email:** [security@organization.com.my]
- **ITSM Portal:** [URL] — Category: Security Incident

**STEP 3 — PRESERVE**
Do not delete, modify, or access logs, repository history, or affected systems beyond what is needed for your normal work.

**STEP 4 — COOPERATE**
Support the Information Security team's investigation as requested.

**Examples of incidents to report:**
- You accidentally committed a password, API key, or certificate to a repository.
- You notice commits or changes you did not make in a repository you own.
- A repository has been made public unexpectedly.
- You receive an alert from the secrets scanning tool.
- You believe your developer credentials have been compromised.

---

*End of Document*

---

**Document Classification: Confidential**
**© [Organization Name] [Year] — All rights reserved.**
*Unauthorised reproduction or distribution of this document is prohibited.*