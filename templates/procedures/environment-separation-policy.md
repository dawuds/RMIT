# Environment Separation Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Environment Separation Policy |
| **Owner** | Head of Application Development |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [Environment Classification and Definitions](#7-environment-classification-and-definitions)
8. [Environment Separation Architecture Requirements](#8-environment-separation-architecture-requirements)
9. [Access Control Requirements per Environment](#9-access-control-requirements-per-environment)
10. [Security Requirements per SDLC Phase](#10-security-requirements-per-sdlc-phase)
11. [Data Management and Handling Across Environments](#11-data-management-and-handling-across-environments)
12. [Code Review and Testing Gates](#12-code-review-and-testing-gates)
13. [Production Deployment Approval](#13-production-deployment-approval)
14. [Monitoring, Audit, and Compliance](#14-monitoring-audit-and-compliance)
15. [Exceptions and Waivers](#15-exceptions-and-waivers)
16. [Policy Violations and Consequences](#16-policy-violations-and-consequences)
17. [Review and Approval](#17-review-and-approval)
18. [References](#18-references)
19. [Appendices](#19-appendices)

---

## 1. Purpose

*Describe the intent of this policy, the problem it addresses, and the regulatory obligation it fulfills. Reference BNM RMiT Clause 10.13 explicitly.*

This Environment Separation Policy establishes the mandatory requirements and controls governing the segregation of development, test/staging, and production environments within [Organization Name]. It ensures that software development, integration testing, user acceptance testing, and production operations are conducted in clearly demarcated, isolated environments to prevent unauthorized access, data contamination, service disruption, and system compromise.

This policy is established in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.13**, which requires financial institutions to implement adequate controls to segregate development, testing, and production environments. Compliance with this policy supports the integrity, confidentiality, and availability of [Organization Name]'s technology systems and the financial data processed therein.

This document provides:

- A clear definition of each operational environment and its purpose;
- Mandatory separation controls, access restrictions, and security requirements applicable to each environment;
- Gate criteria and approval workflows governing the promotion of code and configuration changes across environments;
- Responsibilities assigned to technology, security, and business stakeholders throughout the Software Development Life Cycle (SDLC).

---

## 2. Scope

*Define the organizational units, systems, technologies, and personnel covered by this policy. Ensure alignment with the institution's technology asset inventory.*

### 2.1 In-Scope

This policy applies to:

**Systems and Platforms:**

- All application systems, platforms, and services developed, operated, or maintained by [Organization Name], including:
  - Core banking systems and ancillary financial applications
  - Internet banking and mobile banking platforms
  - API gateways and middleware integration layers
  - Data analytics and reporting platforms
  - Internal enterprise applications (ERP, HRMS, document management)
  - Cloud-hosted services and hybrid infrastructure components

**Environments:**

- Development environments (including local developer workstations where shared codebases are managed)
- System Integration Testing (SIT) environments
- User Acceptance Testing (UAT) environments
- Staging / Pre-production environments
- Production environments
- Disaster Recovery (DR) environments

**Personnel:**

- Internal technology staff, including application developers, system architects, database administrators, and infrastructure engineers
- Technology operations and DevOps teams
- Information security personnel
- Business analysts and UAT participants with environment access
- Third-party vendors, outsourced developers, and managed service providers operating on behalf of [Organization Name]

**Processes:**

- All phases of the Software Development Life Cycle (SDLC)
- Change management and release management processes
- Patch management activities
- Disaster recovery and business continuity testing

### 2.2 Out-of-Scope

- [Specify any systems, platforms, or subsidiaries explicitly excluded from this policy, with justification]
- Proof-of-concept (PoC) or sandbox environments that are fully isolated from production networks and do not process real or masked production data, subject to documentation and approval under the Exceptions process in Section 15

---

## 3. Regulatory and Policy Context

*Summarize the applicable regulatory requirements and internal policies that drive the creation and maintenance of this document.*

### 3.1 Regulatory Requirements

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.13 | Financial institutions shall ensure adequate controls are in place to segregate development, testing, and production environments. Production data shall not be used in development or testing unless adequately anonymised or masked. |
| BNM Risk Management in Technology (RMiT) | Clause 10.1 – 10.12 | General technology risk management, change management, and SDLC requirements |
| Personal Data Protection Act 2010 (PDPA) | Part II, Section 5–8 | General principles governing collection, processing, and protection of personal data; applicable to controls preventing production personal data exposure in non-production environments |
| ISO/IEC 27001:2022 | Annex A 8.31 | Separation of development, testing, and production environments |
| [Additional standard if applicable] | [Clause] | [Summary] |

### 3.2 Internal Policy Alignment

This policy is to be read in conjunction with the following internal policies and standards of [Organization Name]:

- Information Security Policy
- Change Management Policy
- Data Classification and Handling Policy
- Access Control Policy
- Acceptable Use Policy
- Vendor and Third-Party Risk Management Policy
- Business Continuity and Disaster Recovery Policy
- [Other relevant internal policy]

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used within this document to ensure consistent interpretation across all stakeholders.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Production Environment** | The live operational environment in which approved, fully tested systems process real customer and business transactions. |
| **Staging / Pre-Production Environment** | An environment that mirrors the production configuration as closely as possible, used for final integration verification and performance testing before production deployment. |
| **User Acceptance Testing (UAT) Environment** | An environment used by business stakeholders and end users to validate that developed functionality meets business requirements prior to production release. |
| **System Integration Testing (SIT) Environment** | An environment used by the development and QA teams to verify that integrated components and modules function correctly as a combined system. |
| **Development Environment** | An environment used by software developers to write, compile, and perform initial unit testing of application code. |
| **Disaster Recovery (DR) Environment** | A replicated or near-replicated environment maintained for the purpose of resuming production operations following a disruption. |
| **Data Masking** | The process of obscuring or anonymising sensitive or personal data so that it cannot be used to identify an individual or be exploited, while retaining its structural and format characteristics for testing purposes. |
| **Environment Promotion** | The controlled process of moving code, configuration, or data artefacts from a lower environment (e.g., development) to a higher environment (e.g., UAT, production). |
| **Separation Control** | A technical or procedural measure that enforces a boundary between environments to prevent unauthorized access, data leakage, or cross-environment interference. |
| **SDLC** | Software Development Life Cycle — the structured process governing the planning, creation, testing, deployment, and maintenance of software systems. |
| **Change Advisory Board (CAB)** | A governance body responsible for reviewing, approving, and overseeing changes to production systems. |
| **Production Data** | Any data — including customer personal data, financial transaction data, or business-sensitive data — that is created, processed, or stored within the production environment. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| SDLC | Software Development Life Cycle |
| SIT | System Integration Testing |
| UAT | User Acceptance Testing |
| DR | Disaster Recovery |
| CAB | Change Advisory Board |
| CISO | Chief Information Security Officer |
| IAM | Identity and Access Management |
| MFA | Multi-Factor Authentication |
| RBAC | Role-Based Access Control |
| CI/CD | Continuous Integration / Continuous Deployment |
| VPN | Virtual Private Network |
| VLAN | Virtual Local Area Network |
| WAF | Web Application Firewall |
| DLP | Data Loss Prevention |

---

## 5. Roles and Responsibilities

*Define accountability and responsibility for all activities governed by this policy using a RACI model. RACI: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 5.1 Role Descriptions

| Role | Description |
|---|---|
| **Head of Application Development** | Policy owner; accountable for enforcement of environment separation across all development activities. |
| **Chief Information Security Officer (CISO)** | Accountable for information security controls within all environments; approves exceptions. |
| **Chief Information Officer (CIO) / Head of Technology** | Executive sponsor; accountable for overall technology risk governance. |
| **Application Development Manager** | Oversees development team compliance with environment separation requirements. |
| **DevOps / Release Manager** | Manages promotion pipelines, CI/CD controls, and deployment gates. |
| **IT Infrastructure Manager** | Responsible for technical provisioning and separation of environment infrastructure. |
| **Database Administrator (DBA)** | Responsible for data masking, database access controls, and environment-level data management. |
| **Information Security Team** | Conducts security reviews, vulnerability assessments, and access audits. |
| **Change Advisory Board (CAB)** | Reviews and approves production changes and emergency deployments. |
| **Internal Audit** | Independently assesses compliance with this policy. |
| **Business Owners / UAT Coordinators** | Coordinate UAT activities; responsible for UAT sign-off. |
| **Vendor / Third-Party Developers** | External parties bound by contractual obligations to comply with this policy. |

### 5.2 RACI Matrix

*The following RACI table maps policy activities to accountable and responsible stakeholders.*

| Activity | Head of App Dev | CISO | CIO / Head of Tech | App Dev Manager | DevOps / Release Mgr | IT Infrastructure Mgr | DBA | Info Security Team | CAB | Internal Audit | Business Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Policy ownership and annual review | A | C | C | R | I | I | I | C | I | I | I |
| Environment provisioning and configuration | C | C | A | I | R | R | C | C | I | I | I |
| Access provisioning to environments | A | C | I | R | R | C | C | C | I | I | I |
| Code promotion from Dev to SIT | A | I | I | R | R | I | I | C | I | I | I |
| Code promotion from SIT to UAT | A | I | I | R | R | I | I | C | I | I | C |
| UAT sign-off | I | I | I | C | I | I | I | I | I | I | A/R |
| Production deployment approval | A | C | C | C | R | C | C | C | A | I | C |
| Data masking in non-production environments | A | C | I | C | C | C | R | C | I | I | I |
| Security gate review (vulnerability scan) | C | A | I | C | R | C | C | R | I | I | I |
| Exception and waiver approval | C | A | C | I | I | I | I | R | C | C | I |
| Compliance monitoring and audit | I | A | I | I | I | I | I | R | I | R | I |
| Incident response (cross-environment) | C | A | C | C | R | R | C | R | I | I | I |
| Vendor compliance assessment | A | C | I | R | C | C | I | C | I | C | I |

---

## 6. Policy Statements and Requirements

*State the overarching policy commitments and non-negotiable requirements that govern environment separation at [Organization Name].*

### 6.1 General Policy Principles

[Organization Name] is committed to maintaining robust environment separation as a foundational control within its technology risk management framework. The following principles govern all activities subject to this policy:

1. **Mandatory Separation:** Development, testing, and production environments **shall** be physically or logically separated at all times. Co-location of development and production workloads on shared infrastructure is prohibited unless explicitly approved under the exception process defined in Section 15.

2. **Access Minimization:** Access to each environment shall be granted on the principle of least privilege. Personnel shall be granted access only to the environments necessary for the performance of their assigned role.

3. **No Production Data in Non-Production Environments:** Real production data — including customer personal data and financial transaction records — **shall not** be used in development, SIT, or UAT environments unless it has been subject to approved data masking or anonymisation processes as defined in Section 11.

4. **Controlled Promotion:** All movement of code, configuration, and data artefacts between environments shall follow the defined promotion and gate approval process. Uncontrolled or direct promotion to production outside of the defined change management process is prohibited.

5. **Auditability:** All access, changes, and promotions across environments shall be logged and retained in accordance with [Organization Name]'s log management and retention standards.

6. **Security by Design:** Security controls and requirements shall be incorporated at each phase of the SDLC and shall not be deferred to production readiness reviews.

7. **Vendor Compliance:** Third-party developers and outsourced teams shall be contractually obligated to comply with the requirements of this policy. Vendor access to any [Organization Name] environment shall be governed by this policy.

### 6.2 Mandatory Requirements Summary

| # | Requirement | Applicability |
|---|---|---|
| REQ-01 | All environments shall be segregated by separate network segments (VLANs or equivalent logical separation) | All environments |
| REQ-02 | Production credentials shall not be stored in or accessible from development or test environments | All environments |
| REQ-03 | Developer access to production environment shall require explicit, time-limited approval | Production |
| REQ-04 | All non-production environments using data derived from production shall use masked/anonymised datasets | Dev, SIT, UAT |
| REQ-05 | Code promotion to production shall require documented approval from the CAB or delegated authority | Production |
| REQ-06 | All environment access shall be authenticated via MFA for privileged access | All environments |
| REQ-07 | Security vulnerability scanning shall be completed prior to UAT-to-staging promotion | SIT, UAT, Staging |
| REQ-08 | All production deployments shall have a documented rollback plan | Production |
| REQ-09 | Environment separation controls shall be reviewed at minimum annually or following material changes | All environments |
| REQ-10 | Automated CI/CD pipelines shall enforce gate controls and shall not bypass manual approval checkpoints | All environments |

---

## 7. Environment Classification and Definitions

*Formally define each environment tier, its purpose, ownership, and characteristics. This section forms the authoritative reference for environment nomenclature within [Organization Name].*

### 7.1 Environment Tiers

[Organization Name] operates the following formally recognised environment tiers:

| Environment | Code | Primary Purpose | Data Classification Allowed | Typical Uptime Requirement |
|---|---|---|---|---|
| Development | DEV | Feature development, unit testing, initial debugging | Synthetic / masked data only | Best-effort |
| System Integration Testing | SIT | Integration testing of multiple components and services | Masked production data (approved) | Business hours |
| User Acceptance Testing | UAT | Business validation of functionality against requirements | Masked production data (approved) | Business hours |
| Staging / Pre-Production | STG | Final pre-release validation; production mirror | Masked production data (approved) | High availability |
| Production | PRD | Live operational processing of customer and business transactions | Live production data | Highest (SLA-governed) |
| Disaster Recovery | DR | Failover and continuity operations | Replicated production data | RTO/RPO-governed |

### 7.2 Environment-Specific Characteristics

#### 7.2.1 Development Environment (DEV)

- Owned by: Application Development Manager
- Managed by: Individual developers or development team leads
- Infrastructure: [Specify — e.g., developer workstations, shared internal development servers, cloud-based developer sandboxes]
- Access: Development team only; no business user or operations access
- Data: Synthetic test data only; production data strictly prohibited
- Stability: Frequent changes expected; no availability guarantees
- Network: Isolated from SIT, UAT, and production networks

#### 7.2.2 System Integration Testing Environment (SIT)

- Owned by: Application Development Manager / QA Lead
- Managed by: DevOps / Release Management team
- Infrastructure: [Specify]
- Access: Development, QA, and test teams; no business user access unless specifically approved
- Data: Approved masked/anonymised datasets; production data prohibited
- Stability: Stable during active test cycles; changes require SIT change control
- Network: Isolated from DEV and production networks; controlled access to external test services

#### 7.2.3 User Acceptance Testing Environment (UAT)

- Owned by: Business Owner / UAT Coordinator
- Managed by: DevOps / Release Management team
- Infrastructure: [Specify]
- Access: Business users, UAT coordinators, and support developers; no general developer write access
- Data: Approved masked/anonymised datasets; production data prohibited
- Stability: Stable during UAT cycles; changes must not occur during active UAT without notification
- Network: Isolated from DEV and production networks

#### 7.2.4 Staging / Pre-Production Environment (STG)

- Owned by: DevOps / Release Manager
- Managed by: IT Infrastructure and DevOps teams
- Infrastructure: Must mirror production configuration, topology, and capacity where operationally feasible
- Access: DevOps, release management, and senior engineers; strict access controls
- Data: Approved masked/anonymised datasets
- Stability: High availability; treated as production-equivalent for operational controls
- Network: Logically separated from production but configuration-equivalent

#### 7.2.5 Production Environment (PRD)

- Owned by: Head of Application Development / Technology Operations Manager
- Managed by: IT Operations and DevOps teams
- Infrastructure: [Specify]
- Access: Strictly controlled; production access requires formal approval and is logged at all times
- Data: Live customer and business data; subject to full data classification and PDPA controls
- Stability: Highest; governed by service level agreements (SLAs)
- Network: Fully isolated from all non-production environments; no direct connectivity to DEV or SIT

#### 7.2.6 Disaster Recovery Environment (DR)

- Owned by: Head of Technology / Business Continuity Manager
- Managed by: IT Infrastructure team
- Infrastructure: [Specify — e.g., geographically separated secondary data centre or cloud DR region]
- Access: Controlled; mirroring production access controls
- Data: Replicated production data; subject to same controls as production
- Stability: Maintained in accordance with BCP/DR policy; regular DR testing schedule required

---

## 8. Environment Separation Architecture Requirements

*Detail the technical controls and architectural standards required to enforce separation between environments.*

### 8.1 Network Separation

*Specify the network architecture requirements that enforce environment isolation. Include VLAN assignments, firewall rules, and traffic control policies.*

- Each environment shall be provisioned within a dedicated network segment or VLAN with no direct network routing between environments except through explicitly approved and monitored pathways.
- Firewall rules governing inter-environment traffic shall be documented, reviewed quarterly, and approved by the IT Infrastructure Manager and Information Security Team.
- The following inter-environment network connectivity is explicitly prohibited unless subject to a documented exception:

| From Environment | To Environment | Prohibited |
|---|---|---|
| Development (DEV) | Production (PRD) | Yes — Prohibited |
| Development (DEV) | Disaster Recovery (DR) | Yes — Prohibited |
| SIT | Production (PRD) | Yes — Prohibited |
| SIT | Disaster Recovery (DR) | Yes — Prohibited |
| UAT | Production (PRD) | Yes — Prohibited |
| External / Internet | Development (DEV) | Yes — Prohibited (unless VPN-controlled) |

- All permitted inter-environment connectivity shall be documented in the [Organization Name] Network Architecture Register and reviewed annually.

### 8.2 Infrastructure Separation

*Describe physical and logical infrastructure requirements for environment separation.*

- Where feasible, dedicated infrastructure (servers, storage, network appliances) shall be provisioned per environment tier.
- Shared infrastructure hosting multiple environment tiers shall implement logical separation controls (e.g., hypervisor-level isolation, containerisation namespaces) and shall be subject to additional security review.
- Cloud-hosted environments shall use separate accounts, subscriptions, or projects per environment tier (e.g., separate AWS accounts per environment, separate Azure subscriptions).
- Infrastructure-as-Code (IaC) templates used to provision environments shall be version-controlled, peer-reviewed, and maintained in a dedicated code repository.

| Environment | Infrastructure Type | Separation Mechanism | Cloud/On-Premise |
|---|---|---|---|
| DEV | [e.g., shared virtual machines] | [e.g., VLAN + RBAC] | [Specify] |
| SIT | [Specify] | [Specify] | [Specify] |
| UAT | [Specify] | [Specify] | [Specify] |
| STG | [Specify] | [Specify] | [Specify] |
| PRD | [Specify] | [Specify] | [Specify] |
| DR | [Specify] | [Specify] | [Specify] |

### 8.3 Secrets and Credentials Management

- Production credentials, API keys, service account passwords, and cryptographic keys **shall not** be stored in or accessible from development, SIT, or UAT environments.
- Each environment shall use environment-specific credentials, connection strings, and secrets.
- Secrets management solutions (e.g., [specify tool — e.g., HashiCorp Vault, AWS Secrets Manager, Azure Key Vault]) shall be used to inject environment-specific credentials at runtime; hardcoded credentials in application code are strictly prohibited.
- Rotation schedules for environment credentials shall be documented:

| Environment | Credential Type | Rotation Frequency | Responsible Party |
|---|---|---|---|
| PRD | Service account passwords | [e.g., 90 days] | [Role] |
| PRD | API keys | [e.g., 180 days] | [Role] |
| STG | Service account passwords | [e.g., 90 days] | [Role] |
| SIT / UAT | Service account passwords | [e.g., Per release cycle] | [Role] |
| DEV | Developer credentials | [e.g., 180 days] | [Role] |

### 8.4 CI/CD Pipeline Separation Controls

*Describe controls embedded in automated deployment pipelines to enforce environment separation.*

- CI/CD pipelines shall implement mandatory gate controls between each environment stage that prevent automated promotion without successful completion of defined checks (see Section 12).
- Pipeline configurations shall be stored in version-controlled repositories and protected from direct modification by developers outside the DevOps team.
- Deployment pipelines shall not permit direct promotion from DEV to PRD, bypassing intermediate environments.
- Pipeline service accounts shall operate under the principle of least privilege, with separate service accounts per environment.
- All pipeline execution logs shall be retained for a minimum of [specify period, e.g., 12 months] and shall be accessible to the Information Security Team and Internal Audit.

---

## 9. Access Control Requirements per Environment

*Define the access control standards applicable to each environment, including approval workflows, privileged access management, and periodic reviews.*

### 9.1 General Access Control Principles

- All environment access shall be provisioned through the [Organization Name] Identity and Access Management (IAM) system.
- Access shall be granted on a role-based basis (RBAC), aligned to the individual's job function and the minimum access necessary.
- Multi-factor authentication (MFA) is mandatory for all environment access, with particular emphasis on privileged and production access.
- All access provisioning requests shall be documented, approved by the relevant environment owner, and logged in the access management system.

### 9.2 Access Control Matrix

*The following matrix defines permitted access levels for each role across environment tiers. Access levels: R = Read, W = Write/Deploy, A = Admin, X = No Access.*

| Role | DEV | SIT | UAT | STG | PRD | DR |
|---|---|---|---|---|---|---|
| Application Developer | R/W | R | X | X | X (emergency only) | X |
| QA / Test Engineer | R | R/W | R | X | X | X |
| DevOps / Release Manager | R/W | R/W | R/W | R/W | W (deploy only) | R |
| IT Infrastructure Engineer | R/W | R/W | R/W | A | A | A |
| Database Administrator | R/W | R/W | R/W | R/W | R/W (controlled) | R/W (controlled) |
| Information Security Team | R | R | R | R | R (read/audit only) | R |
| Business Analyst / UAT User | X | X | R/W (UAT only) | X | X | X |
| Technology Operations | X | X | X | R | R/W | R/W |
| Senior Management / CIO | X | X | X | X | R (read audit only) | X |
| Third-Party Vendor | As contracted | As contracted | X | X | X | X |
| Internal Audit | R | R | R | R | R | R |

### 9.3 Production Access Controls

*Production environment access requires heightened controls given the sensitivity of live data and operational risk.*

- **Developer access to production is prohibited** except in formally declared emergency scenarios (see Section 9.4).
- All production access shall be governed by a formally approved access request, including:
  - Requester name and employee ID
  - Business justification
  - Duration of access required
  - Approver (Head of Application Development and CISO dual approval required)
- Production access shall be time-limited; standing (permanent) privileged access to production is prohibited for development staff.
- All production access sessions shall be recorded using session recording tools where technically feasible, and logs retained for [specify period, e.g., 24 months].
- Just-in-Time (JIT) access provisioning shall be implemented for production where supported by the IAM infrastructure.

### 9.4 Emergency / Break-Glass Access

- Emergency access to production ("break-glass" access) may be granted in accordance with [Organization Name]'s Incident Response Policy.
- Break-glass access requests shall be:
  - Approved by the CISO or designated delegate in writing (email approval is acceptable in emergencies);
  - Documented with the incident reference number;
  - Time-limited to the duration of the incident;
  - Subject to a post-incident access review within 5 business days.
- All break-glass access events shall be reported to the CAB and the Information Security Team within 24 hours.

### 9.5 Access Review

- Formal access reviews for all environments shall be conducted on the following schedule:

| Environment | Review Frequency | Reviewer | Approver |
|---|---|---|---|
| Production | Quarterly | IT Infrastructure Manager | CISO |
| Staging / Pre-Production | Quarterly | DevOps / Release Manager | Head of App Dev |
| UAT | Per release cycle | Application Dev Manager | Business Owner |
| SIT | Per release cycle | Application Dev Manager | Application Dev Manager |
| Development | Semi-annually | Application Dev Manager | Head of App Dev |

---

## 10. Security Requirements per SDLC Phase

*Define the mandatory security activities and controls applicable at each phase of the Software Development Life Cycle. This section operationalizes security-by-design for [Organization Name].*

### 10.1 SDLC Overview

[Organization Name] adopts the following SDLC phases as the basis for security requirements:

| Phase | Description | Primary Environment |
|---|---|---|
| 1. Requirements | Gathering and documentation of functional and non-functional security requirements | N/A |
| 2. Design | System and security architecture design | N/A |
| 3. Development | Coding, unit testing, and component integration | DEV |
| 4. System Integration Testing | Testing of integrated system components | SIT |
| 5. User Acceptance Testing | Business validation against requirements | UAT |
| 6. Staging / Pre-Release | Final production readiness verification | STG |
| 7. Production Deployment | Live deployment and post-release monitoring | PRD |
| 8. Maintenance | Patching, updates, and change management | All |

### 10.2 Phase 1: Requirements

**Security Requirements Elicitation:**

- Security requirements shall be explicitly documented as part of the functional requirements for all projects and changes, including:
  - Authentication and authorisation requirements
  - Data classification and handling requirements
  - Regulatory compliance requirements (BNM RMiT, PDPA)
  - Encryption requirements (data at rest and in transit)
  - Audit logging requirements
  - Input validation and output encoding requirements

**Mandatory Deliverables:**

- [ ] Security Requirements Specification or Security section within the Business Requirements Document (BRD)
- [ ] Data classification assessment for data processed by the system
- [ ] Regulatory compliance checklist completed

### 10.3 Phase 2: Design

**Secure Architecture Review:**

- System architecture designs shall be reviewed by the Information Security Team prior to commencement of development.
- Threat modelling shall be conducted for high-risk and critical systems as classified by [Organization Name]'s data classification framework.
- Design reviews shall assess:
  - Environment separation design (network topology, API gateway controls)
  - Authentication and session management design
  - Cryptographic design (algorithms, key management)
  - Input/output handling and injection prevention
  - Logging and monitoring design

**Mandatory Deliverables:**

- [ ] Architecture design document reviewed and signed off by Information Security Team
- [ ] Threat model (for systems classified as High or Critical)
- [ ] Security design review sign-off

### 10.4 Phase 3: Development

**Secure Coding Standards:**

- All developers shall adhere to [Organization Name]'s Secure Coding Standard, which aligns to OWASP Top 10 and SANS CWE Top 25.
- Developers are prohibited from:
  - Hardcoding credentials, API keys, or cryptographic keys in source code
  - Using production data in development environments
  - Bypassing authentication or authorisation mechanisms for development convenience
  - Committing code that disables or suppresses security controls

**Mandatory Development Security Activities:**

| Activity | Requirement | Tool / Method |
|---|---|---|
| Static Application Security Testing (SAST) | Mandatory for all code committed to the main/feature branch | [Specify tool — e.g., SonarQube, Checkmarx] |
| Secret / credential scanning | Mandatory; integrated into version control pre-commit hooks | [Specify tool — e.g., GitGuardian, truffleHog] |
| Dependency / SCA scanning | Mandatory; scan for known vulnerable third-party libraries | [Specify tool — e.g., Snyk, OWASP Dependency Check] |
| Unit testing with security test cases | Mandatory; minimum [X]% code coverage for security-sensitive modules | [Specify framework] |
| Code review (peer review) | Mandatory; minimum one peer reviewer required before branch merge | Pull request / code review process |

**Mandatory Deliverables:**

- [ ] SAST scan results with no unresolved Critical or High findings
- [ ] Secret scanning confirmation (clean)
- [ ] Dependency scan results with no unresolved Critical findings
- [ ] Peer code review approval documented in version control system

### 10.5 Phase 4: System Integration Testing (SIT)

**Integration Security Testing:**

- Integration testing shall verify that security controls function correctly across component boundaries, including:
  - Authentication and session token handling
  - Authorisation controls across API endpoints
  - Correct handling of error conditions (no sensitive data leakage in error messages)
  - Secure communication (TLS configuration, certificate validation)

**Mandatory SIT Security Activities:**

| Activity | Requirement | Responsible |
|---|---|---|
| Dynamic Application Security Testing (DAST) | Mandatory prior to SIT exit gate | Information Security Team / DevOps |
| Integration security test execution | Mandatory; security test cases must be included in the test plan | QA / Test Team |
| Security defect triage | All security defects raised during SIT must be triaged and risk-rated | App Dev Manager + Info Security Team |
| SIT environment access review | Confirm only authorised personnel have access to SIT | App Dev Manager |

**Mandatory Deliverables:**

- [ ] SIT test plan including security test cases
- [ ] DAST scan report with remediation evidence for Critical/High findings
- [ ] Security defect register with risk ratings and remediation status
- [ ] SIT sign-off from QA Lead

### 10.6 Phase 5: User Acceptance Testing (UAT)

**UAT Security Requirements:**

- UAT environments shall use masked/anonymised datasets (see Section 11) and shall not contain live production data.
- UAT access shall be provisioned for business users as per the access matrix in Section 9.2.
- Security-related UAT scenarios shall be included in the UAT test plan where applicable (e.g., testing that users cannot access data they are not authorised to see).
- Any security defects identified during UAT shall be communicated to the development team and resolved prior to production deployment.

**Mandatory Deliverables:**

- [ ] UAT test plan reviewed and approved by Business Owner
- [ ] UAT sign-off document signed by authorised Business Owner
- [ ] Outstanding defect register with risk acceptance for any deferred defects
- [ ] Confirmation that UAT environment used masked data only

### 10.7 Phase 6: Staging / Pre-Production

**Pre-Production Security Validation:**

- Staging environments shall replicate production configuration to the greatest extent feasible to allow pre-production security validation.
- The following activities are mandatory prior to production deployment approval:

| Activity | Requirement | Responsible |
|---|---|---|
| Penetration testing | Required for new system deployments and major changes to internet-facing applications | Information Security Team / Approved external vendor |
| Infrastructure vulnerability scanning | Mandatory; no Critical or High findings unresolved | Information Security Team |
| Security configuration review | Review of security hardening (OS, application server, database) | Information Security Team |
| Performance and load testing (security baseline) | Verify system performance under load does not degrade security controls | DevOps / QA |
| Rollback plan validation | Confirm rollback procedures are documented and tested | DevOps / Release Manager |

**Mandatory Deliverables:**

- [ ] Penetration test report (where applicable) with remediation evidence
- [ ] Infrastructure vulnerability scan report — clean or with accepted residual risk
- [ ] Security configuration review sign-off
- [ ] Rollback plan documented and approved

### 10.8 Phase 7: Production Deployment

*See Section 13 for full Production Deployment Approval procedures.*

### 10.9 Phase 8: Maintenance

**Ongoing Security Maintenance:**

- All patches and updates shall be assessed, tested in non-production environments, and approved through the standard change management process before production deployment.
- Emergency security patches may follow the expedited change management process defined in [Organization Name]'s Change Management Policy.
- Security testing requirements apply to changes and patches in the same manner as new development, scaled proportionately to the risk rating of the change.

---

## 11. Data Management and Handling Across Environments

*Define the requirements governing the use, protection, and handling of data within each environment tier, with emphasis on preventing production data exposure in non-production environments.*

### 11.1 Production Data in Non-Production Environments

The use of live production data in development, SIT, or UAT environments is **strictly prohibited** except where:

1. A formal exception has been approved under the process defined in Section 15; and
2. The data has been subject to approved anonymisation or masking techniques that render individual identification impossible; and
3. The use of the data is necessary for a specific, documented business or technical purpose that cannot be achieved with synthetic data.

### 11.2 Data Masking Requirements

*Describe the approved data masking standards and techniques applicable to [Organization Name].*

- Data masking shall be applied prior to the extraction of any production-derived dataset for use in non-production environments.
- Approved masking techniques include:

| Data Type | Masking Technique | Example |
|---|---|---|
| Customer name | Substitution (pseudonymisation) | Replace with realistic synthetic names |
| NRIC / MyKad number | Substitution or truncation | Replace with format-consistent synthetic value |
| Date of birth | Perturbation | Offset by random number of days within acceptable range |
| Account number | Tokenisation | Replace with non-reversible token preserving format |
| Email address | Substitution | Replace with [masked]@test.example.com |
| Phone number | Substitution | Replace with format-consistent synthetic value |
| Transaction amount | Randomisation / scaling | Replace with random values within realistic range |
| IP address | Substitution | Replace with RFC 5737 documentation ranges |
| Passwords / PINs | Hashing / replacement | Replace with test-specific hash or placeholder |

- Masking shall be performed using approved tooling: [specify tool, e.g., Informatica Data Masking, Delphix, custom masking scripts reviewed by Info Security Team].
- Masked datasets shall be validated by the DBA and Information Security Team prior to loading into non-production environments.
- The masking process and resulting datasets shall be documented and approved before use.

### 11.3 Synthetic Test Data

- Wherever feasible, synthetic test data should be used in preference to masked production data.
- Synthetic data generation tools and processes shall be documented.
- Synthetic data sets shall be reviewed for realism and adequacy to support testing objectives.

### 11.4 Data Retention in Non-Production Environments

| Environment | Retention Period for Test Data | Disposal Method |
|---|---|---|
| DEV | Duration of active development sprint | Secure deletion or environment decommission |
| SIT | Duration of SIT cycle | Secure deletion following SIT completion |
| UAT | Duration of UAT cycle | Secure deletion following UAT sign-off |
| STG | Duration of release staging window | Secure deletion following production deployment |

### 11.5 Data Transfer Controls

- Transfer of datasets between environments shall be:
  - Approved by the DBA and the relevant environment owner;
  - Conducted over encrypted channels;
  - Logged, with the transfer record retained for audit purposes.
- Datasets shall not be transferred from production to non-production environments via unapproved channels (e.g., email, USB media, personal file sharing services).

---

## 12. Code Review and Testing Gates

*Define the mandatory gate criteria and approval checkpoints that must be satisfied before code or configuration may be promoted between environment tiers.*

### 12.1 Overview of Promotion Gates

All code and configuration promotion between environments is governed by defined gates. **Promotion shall not proceed unless all gate criteria for the target environment are satisfied.**

```
[DEV] --> [Gate 1: Dev-to-SIT] --> [SIT] --> [Gate 2: SIT-to-UAT] --> [UAT]
      --> [Gate 3: UAT-to-STG] --> [STG] --> [Gate 4: STG-to-PRD] --> [PRD]
```

### 12.2 Gate 1: Development to SIT

**Purpose:** Verify that code is functionally complete, peer-reviewed, and meets baseline security standards before integration testing.

| Gate Criterion | Mandatory | Evidence Required | Approver |
|---|---|---|---|
| All unit tests passed (minimum [X]% pass rate) | Yes | Test execution report | Dev Lead |
| SAST scan completed — no unresolved Critical/High findings | Yes | SAST scan report | App Dev Manager |
| Secret scanning completed — clean result | Yes | Secret scan log | App Dev Manager |
| Dependency/SCA scan — no unresolved Critical findings | Yes | SCA scan report | App Dev Manager |
| Peer code review completed and approved | Yes | Pull request approval record | Dev Lead / App Dev Manager |
| Build pipeline successful | Yes | CI pipeline execution log | DevOps |
| Release notes / change log updated | Yes | Release notes document | Dev Lead |

**Gate Approval Authority:** Application Development Manager

### 12.3 Gate 2: SIT to UAT

**Purpose:** Verify that integration testing is complete and system functions correctly as an integrated whole before business user validation.

| Gate Criterion | Mandatory | Evidence Required | Approver |
|---|---|---|---|
| SIT test execution completed — all critical/high test cases passed | Yes | SIT test execution report | QA Lead |
| DAST scan completed — no unresolved Critical/High findings | Yes | DAST scan report | Info Security Team |
| Security defect register reviewed — no open Critical/High defects | Yes | Defect register | App Dev Manager + Info Security |
| All SIT defects triaged and disposition documented | Yes | Defect triage log | QA Lead |
| SIT sign-off obtained from QA Lead | Yes | SIT sign-off document | QA Lead |
| Non-production data masking confirmed for UAT environment | Yes | DBA confirmation | DBA |

**Gate Approval Authority:** Application Development Manager (co-signed by Information Security Team for security findings)

### 12.4 Gate 3: UAT to Staging

**Purpose:** Confirm business acceptance of functionality and completeness before final pre-production validation.

| Gate Criterion | Mandatory | Evidence Required | Approver |
|---|---|---|---|
| UAT test execution completed — all critical/high test cases passed | Yes | UAT test execution report | Business Owner / UAT Coordinator |
| UAT sign-off obtained from authorised Business Owner | Yes | UAT sign-off document | Business Owner |
| All UAT defects triaged — no open Critical/High defects (or risk-accepted) | Yes | UAT defect register | App Dev Manager |
| User documentation / release communications prepared | Yes | User communications draft | Business Owner |
| Rollback plan documented | Yes | Rollback plan document | DevOps / Release Manager |
| Training completed (if applicable) | Yes / N/A | Training completion records | Business Owner |

**Gate Approval Authority:** Head of Application Development (co-signed by Business Owner)

### 12.5 Gate 4: Staging to Production (Production Deployment Gate)

*See Section 13 for full details of the Production Deployment Approval process.*

**Summary of Mandatory Gate Criteria:**

| Gate Criterion | Mandatory | Evidence Required | Approver |
|---|---|---|---|
| All preceding gate criteria satisfied (Gates 1–3) | Yes | Gate completion records | Head of App Dev |
| Infrastructure vulnerability scan — clean | Yes | Scan report | Info Security Team |
| Penetration test completed (where applicable) | Yes / N/A | Pentest report + remediation evidence | CISO |
| Security configuration review completed | Yes | Config review checklist | Info Security Team |
| Rollback plan validated | Yes | Rollback test evidence | DevOps |
| CAB approval obtained | Yes | CAB meeting minutes / approval record | CAB Chair |
| Deployment window confirmed | Yes | Change record | DevOps / Release Manager |
| Post-deployment monitoring plan confirmed | Yes | Monitoring runbook | Technology Operations |

**Gate Approval Authority:** Change Advisory Board (CAB) — see Section 13

### 12.6 Code Review Standards

*Define the minimum standards for peer code review applicable throughout the SDLC.*

- **Mandatory Reviewers:** A minimum of [specify number, e.g., one] peer reviewer must approve a pull request before code may be merged to the main or release branch.
- **Reviewer Independence:** Code shall not be reviewed by its own author.
- **Review Scope:** Code reviews shall assess:
  - Functional correctness
  - Adherence to [Organization Name]'s Secure Coding Standard
  - Absence of hardcoded credentials or sensitive data
  - Proper input validation and output encoding
  - Appropriate error handling (no sensitive data in error messages)
  - Adherence to logging requirements
- **Review Documentation:** All code reviews shall be conducted within the version control platform (e.g., [specify — e.g., GitLab, Azure DevOps]) and approval records shall be retained as part of the release artefacts.
- **Automated Code Quality Checks:** Automated linting, code quality metrics, and SAST findings shall be integrated into the pull request workflow and must pass before human reviewer approval is possible.

---

## 13. Production Deployment Approval

*Define the end-to-end approval process for deploying changes to the production environment, including CAB governance, emergency change procedures, and post-deployment review.*

### 13.1 Standard Production Deployment Process

All production deployments shall follow the standard change management process as defined in [Organization Name]'s Change Management Policy. The following steps are mandatory:

**Step 1: Change Request Submission**

- The Release Manager shall submit a formal Change Request (CR) to the Change Management system at least [specify period, e.g., 5 business days] prior to the proposed deployment window.
- The CR shall include:
  - Description of the change and business justification
  - Risk assessment (impact, likelihood, residual risk)
  - Technical implementation plan
  - Rollback plan
  - Testing evidence (gate completion records for Gates 1–4)
  - List of affected systems and environments
  - Deployment window and duration estimate
  - Post-deployment verification plan

**Step 2: Pre-CAB Technical Review**

- The Information Security Team shall conduct a pre-CAB security review of the change request, verifying:
  - All security gate criteria have been met
  - No outstanding security vulnerabilities above accepted risk threshold
  - Compliance with environment separation requirements
  - Adequacy of the rollback plan

**Step 3: Change Advisory Board (CAB) Review**

- The CAB shall convene [specify frequency, e.g., weekly] to review and approve standard change requests.
- CAB approval requires the agreement of the following members:

| CAB Member | Role |
|---|---|
| [CAB Chair] | [Title] |
| Head of Application Development | Policy Owner |
| CISO or designated delegate | Information Security |
| IT Infrastructure Manager | Infrastructure |
| Technology Operations Manager | Operations |
| [Business Representative] | Business |

- The CAB shall document its decision (approved, rejected, deferred) and the conditions of approval in the CAB meeting minutes.
- Changes assessed as High Risk require additional sign-off from the CIO.

**Step 4: Deployment Execution**

- Deployments shall be executed by the authorized DevOps / Release Manager.
- Developers shall not perform direct production deployments except under emergency circumstances (Section 13.3).
- Deployment steps shall follow the approved implementation plan; any deviation from the plan shall be documented and escalated.
- Automated deployment pipelines shall enforce access controls and approval gates configured in the pipeline.

**Step 5: Post-Deployment Verification**

- The Release Manager and Technology Operations team shall perform post-deployment smoke tests and verification as documented in the post-deployment verification plan.
- Verification shall confirm:
  - Core system functionality is operating correctly
  - Security controls are active and functioning
  - No unexpected errors in application logs
  - Performance metrics are within acceptable thresholds

**Step 6: Change Closure**

- Upon successful post-deployment verification, the Release Manager shall close the Change Request and document the deployment outcome.
- If post-deployment issues are identified, the rollback plan shall be invoked (see Section 13.2).

### 13.2 Rollback Procedures

- A rollback plan is mandatory for all production deployments and shall be reviewed and approved as part of the CAB process.
- The rollback plan shall include:
  - Clear rollback trigger criteria (conditions under which rollback shall be initiated)
  - Step-by-step rollback procedure
  - Rollback timeline (maximum time before rollback decision must be made: [specify, e.g., 2 hours post-deployment])
  - Roles responsible for executing rollback
  - Communication plan for stakeholders
- Rollback capability shall be tested in the staging environment prior to production deployment where technically feasible.

### 13.3 Emergency Change (Expedited) Process

*Define the process for urgent production changes that cannot follow the standard CAB schedule, such as critical security patches or incident-driven fixes.*

- Emergency changes may be invoked where there is an immediate risk to the confidentiality, integrity, or availability of production systems, or a regulatory compliance obligation requiring immediate action.
- Emergency change requests shall be approved by at minimum:
  - Head of Application Development; **and**
  - CISO or designated delegate
- Emergency changes shall be retrospectively reviewed by the full CAB at the next scheduled CAB meeting.
- All emergency changes shall be documented in the Change Management system within 24 hours of completion.
- Evidence of testing (even abbreviated) shall be documented for all emergency changes.

### 13.4 Production Deployment Approval Summary

| Deployment Type | Minimum Approval Required | CAB Review | Lead Time |
|---|---|---|---|
| Standard (low/medium risk) | Release Manager + CAB approval | Mandatory | [e.g., 5 business days] |
| Standard (high risk) | Release Manager + CAB + CIO | Mandatory | [e.g., 10 business days] |
| Emergency / critical security patch | Head of App Dev + CISO | Post-implementation retrospective | As required |
| Minor / standard change (pre-approved) | Release Manager | Pre-approved change category | [e.g., 24 hours] |

---

## 14. Monitoring, Audit, and Compliance

*Define the ongoing monitoring, audit logging, and compliance assurance activities that maintain the effectiveness of environment separation controls over time.*

### 14.1 Continuous Monitoring

- Environment separation controls shall be subject to continuous monitoring through the following mechanisms:

| Monitoring Activity | Frequency | Responsible | Tool / Method |
|---|---|---|---|
| Network firewall rule review | Quarterly | IT Infrastructure Manager + Info Security | [Specify tool] |
| Access rights review | Per Section 9.5 schedule | App Dev Manager / CISO | IAM system |
| CI/CD pipeline configuration audit | Quarterly | DevOps Manager | Pipeline configuration review |
| Production access log review | Monthly | Info Security Team | SIEM / log management |
| Environment configuration drift detection | [Real-time / weekly] | DevOps / IT Infrastructure | [Specify tool, e.g., AWS Config, Azure Policy] |
| Data classification compliance in environments | Quarterly | DBA + Info Security | Data discovery scan |

### 14.2 Audit Logging Requirements

- The following activities shall be logged and retained for a minimum of [specify period, e.g., 12 months for non-production, 24 months for production]:
  - All user authentication events (success and failure) across all environments
  - All privileged access activities in production and staging environments
  - All code promotion and deployment events
  - All CAB approvals and change records
  - All access provisioning and deprovisioning events
  - All data transfer activities between environments
  - All break-glass / emergency access events

- Logs shall be centralised in [Organization Name]'s SIEM platform and protected from modification.
- Log integrity shall be verified periodically.

### 14.3 Internal Audit

- Internal Audit shall conduct an annual review of environment separation controls, assessing:
  - Compliance with this policy
  - Effectiveness of access controls
  - Adequacy of gate criteria and approval evidence
  - Data masking compliance
  - Exception management effectiveness
- Findings shall be reported to the CISO and Head of Application Development, with management responses documented.

### 14.4 Third-Party and Vendor Compliance

- Vendors and third-party developers with access to [Organization Name] environments shall be subject to periodic compliance assessments.
- Third-party compliance with environment separation requirements shall be included in vendor contract clauses and assessed during vendor due diligence reviews.

---

## 15. Exceptions and Waivers

*Define the process for managing legitimate exceptions to this policy where strict compliance is not feasible.*

### 15.1 Exception Process

- Any deviation from the requirements of this policy requires a formal exception request.
- Exception requests shall be submitted to the Information Security Team and shall include:
  - Description of the requirement from which an exception is sought
  - Business justification for the exception
  - Risk assessment (likelihood, impact, residual risk)
  - Proposed compensating controls
  - Duration of the exception (maximum [specify period, e.g., 6 months]; renewable subject to re-approval)

### 15.2 Exception Approval Authority

| Exception Risk Level | Approval Authority |
|---|---|
| Low risk (administrative / procedural deviation) | Head of Application Development |
| Medium risk (technical control deviation) | Head of Application Development + CISO |
| High risk (significant control gap) | Head of Application Development + CISO + CIO |

### 15.3 Exception Register

- All approved exceptions shall be recorded in the [Organization Name] Policy Exception Register, maintained by the Information Security Team.
- The exception register shall include:

| Exception ID | Policy Reference | Description | Risk Level | Compensating Controls | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [Section] | [Description] | [Low/Med/High] | [Controls] | [Name] | [Date] | [Date] | [Active/Expired] |

- All active exceptions shall be reviewed at minimum quarterly and shall be closed or renewed upon expiry.

---

## 16. Policy Violations and Consequences

*Define the consequences of non-compliance and the process for reporting and managing policy violations.*

### 16.1 Reporting Violations

- Any individual who identifies or suspects a violation of this policy shall report it to the Information Security Team or the Head of Application Development immediately.
- Reports may also be submitted through [Organization Name]'s whistleblowing or incident reporting channels.

### 16.2 Consequences of Non-Compliance

- Violations of this policy shall be subject to investigation and may result in disciplinary action in accordance with [Organization Name]'s Human Resources policies and applicable employment law.
- Severity of consequences shall be commensurate with the nature and impact of the violation:

| Violation Severity | Example | Consequence |
|---|---|---|
| Minor | Failure to complete gate documentation before promotion (self-corrected) | Formal reminder; corrective action required |
| Moderate | Unauthorized access provisioning; bypassing a gate without approval | Formal investigation; disciplinary action; additional training |
| Major | Introducing production data into non-production environment without authorization | Formal investigation; significant disciplinary action; regulatory notification if required |
| Critical | Unauthorized production deployment; deliberate circumvention of controls | Immediate suspension pending investigation; potential termination; regulatory and legal consequences |

### 16.3 Regulatory Reporting Obligations

- Violations that result in or risk a material breach of BNM RMiT requirements, a PDPA personal data breach, or a significant technology incident shall be reported to BNM and relevant regulators in accordance with [Organization Name]'s regulatory reporting obligations and timelines.

---

## 17. Review and Approval

### 17.1 Policy Review

- This policy shall be reviewed **annually** by the Head of Application Development in consultation with the Information Security Team.
- Ad hoc reviews shall be triggered by:
  - Material changes to the technology architecture
  - Significant security incidents involving environment separation failures
  - Changes to BNM RMiT or other applicable regulatory requirements
  - Internal or external audit findings that require policy updates

### 17.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version — issued for approval |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 17.3 Approval Sign-Off

*This policy is approved by the following authorized signatories:*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Application Development (Policy Owner) | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Information Officer / Head of Technology | [Name] | __________________ | [Date] |
| [Additional approver if required] | [Name] | __________________ | [Date] |

---

## 18. References

*List all regulatory documents, standards, and internal policies referenced in or applicable to this document.*

### 18.1 Regulatory and Statutory References

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 10.13 (Environment Separation); Clauses 10.1–10.12 (Technology Risk Management and SDLC) |
| Personal Data Protection Act 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Part II (Principles); Section 5 (General); Section 6 (Notice and Choice); Section 9 (Security) |
| [Applicable BNM Circular] | [Title of circular if applicable] | Bank Negara Malaysia | [Clause] |

### 18.2 Standards References

| Standard | Title | Relevant Clause(s) |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A 8.31 (Separation of development, testing and production environments) |
| ISO/IEC 27002:2022 | Information Security Controls | Control 8.31 |
| OWASP Top 10 | OWASP Top 10 Application Security Risks | All |
| NIST SP 800-64 | Security Considerations in the System Development Life Cycle | All |
| [Additional standard] | [Title] | [Clause] |

### 18.3 Internal Policy References

| Document | Title | Owner |
|---|---|---|
| [POL-IS-001] | Information Security Policy | CISO |
| [POL-CM-001] | Change Management Policy | Head of Technology |
| [POL-DC-001] | Data Classification and Handling Policy | CISO |
| [POL-AC-001] | Access Control Policy | CISO |
| [POL-BCP-001] | Business Continuity and Disaster Recovery Policy | BCM Manager |
| [POL-VM-001] | Vendor and Third-Party Risk Management Policy | Head of Procurement / CISO |
| [STD-SC-001] | Secure Coding Standard | Head of Application Development |

---

## 19. Appendices

### Appendix A: Environment Separation Architecture Diagram

*Insert or attach a network/architecture diagram illustrating the logical and physical separation of all defined environment tiers, including network segments (VLANs), firewall boundaries, access pathways, and CI/CD pipeline flow. The diagram should clearly show:*

- *Each environment tier (DEV, SIT, UAT, STG, PRD, DR)*
- *Network separation boundaries and firewall locations*
- *Permitted and prohibited inter-environment communication paths*
- *CI/CD pipeline flow with gate checkpoints annotated*
- *Identity and access management control points*

[Diagram: [Organization Name] Environment Separation Architecture — Version [X.X] — [Date]]

---

### Appendix B: Gate Completion Checklist Templates

*The following checklists shall be used by the Release Manager and Application Development Manager to document satisfaction of gate criteria prior to environment promotion.*

#### Appendix B.1: Gate 1 Checklist — Development to SIT

| # | Criterion | Status | Evidence Reference | Sign-off |
|---|---|---|---|---|
| 1 | All unit tests passed | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 2 | SAST scan completed — no unresolved Critical/High | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 3 | Secret scanning — clean result | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 4 | SCA scan — no unresolved Critical findings | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 5 | Peer code review approved | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 6 | Build pipeline successful | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 7 | Release notes updated | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |

**Gate 1 Approval:** __________________ **Date:** __________

#### Appendix B.2: Gate 2 Checklist — SIT to UAT

| # | Criterion | Status | Evidence Reference | Sign-off |
|---|---|---|---|---|
| 1 | SIT test execution completed — critical/high cases passed | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 2 | DAST scan completed — no unresolved Critical/High | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 3 | Security defect register reviewed — no open Critical/High | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 4 | SIT sign-off obtained | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 5 | UAT data masking confirmed | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |

**Gate 2 Approval:** __________________ **Date:** __________

#### Appendix B.3: Gate 3 Checklist — UAT to Staging

| # | Criterion | Status | Evidence Reference | Sign-off |
|---|---|---|---|---|
| 1 | UAT execution completed — critical/high cases passed | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 2 | UAT sign-off obtained from Business Owner | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 3 | Outstanding defect register — no open Critical/High (or risk-accepted) | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 4 | Rollback plan documented | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 5 | User communications / training prepared | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |

**Gate 3 Approval:** __________________ **Date:** __________

#### Appendix B.4: Gate 4 Checklist — Staging to Production

| # | Criterion | Status | Evidence Reference | Sign-off |
|---|---|---|---|---|
| 1 | Gates 1–3 all completed | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 2 | Infrastructure vulnerability scan — clean | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 3 | Penetration test completed (where applicable) | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 4 | Security configuration review completed | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 5 | Rollback plan validated | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 6 | CAB approval obtained | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 7 | Deployment window confirmed | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |
| 8 | Post-deployment monitoring plan confirmed | ☐ Pass / ☐ Fail / ☐ N/A | [Reference] | [Name / Date] |

**Gate 4 Approval (CAB Chair):** __________________ **Date:** __________

---

### Appendix C: Data Masking Specification Template

*Use this template to document each masking specification for datasets used in non-production environments.*

| Field | Details |
|---|---|
| **Dataset Name** | [Name of dataset] |
| **Source System** | [Production system name] |
| **Target Environment** | [SIT / UAT / STG] |
| **Data Classification** | [Confidential / Restricted / etc.] |
| **Masking Tool Used** | [Tool name and version] |
| **DBA Approval** | [Name / Date] |
| **Info Security Approval** | [Name / Date] |

| Column Name | Data Type | Contains Personal Data (Y/N) | Masking Technique Applied | Validated By |
|---|---|---|---|---|
| [column_name] | [VARCHAR / INT / DATE / etc.] | [Y/N] | [Substitution / Truncation / Hashing / etc.] | [Name / Date] |
| [column_name] | [Type] | [Y/N] | [Technique] | [Name / Date] |

---

### Appendix D: Production Deployment Change Request Template

*This template summarises the minimum required fields for a production deployment change request.*

| Field | Details |
|---|---|
| **Change Request ID** | [CR-YYYY-NNN] |
| **Change Title** | [Brief description] |
| **Requested By** | [Name, Role] |
| **Release Manager** | [Name] |
| **System / Application Affected** | [System name] |
| **Change Type** | [Standard / Emergency / Pre-approved] |
| **Risk Rating** | [Low / Medium / High] |
| **Proposed Deployment Window** | [Date, Time, Duration] |
| **Rollback Window** | [Time by which rollback decision must be made] |
| **Business Justification** | [Description] |
| **Technical Implementation Summary** | [Description] |
| **Rollback Plan Summary** | [Description — full rollback plan attached] |
| **Testing Evidence Reference** | [Gate 1-4 checklist references] |
| **Post-Deployment Verification Steps** | [Steps to verify successful deployment] |
| **Stakeholders to Notify** | [Names / teams] |
| **CAB Approval** | [Name / Date] |

---

### Appendix E: Exception Register Template

*Maintained by the Information Security Team; reviewed quarterly.*

| Field | Details |
|---|---|
| **Exception ID** | [EXC-YYYY-NNN] |
| **Date Submitted** | [Date] |
| **Submitted By** | [Name, Role] |
| **Policy Section / Requirement** | [Reference to this policy section] |
| **Description of Exception** | [What requirement is being deviated from] |
| **Business Justification** | [Why the deviation is necessary] |
| **Risk Assessment** | [Risk level and description] |
| **Compensating Controls** | [Controls in place to mitigate risk] |
| **Exception Duration** | [Start date — End date] |
| **Approval Authority** | [Name, Role] |
| **Approval Date** | [Date] |
| **Status** | [Active / Expired / Closed] |
| **Review Due Date** | [Date] |

---

### Appendix F: Contact Directory

*Identify the key contacts responsible for this policy and environment separation matters.*

| Role | Name | Contact | Escalation Level |
|---|---|---|---|
| Head of Application Development (Policy Owner) | [Name] | [Email / Phone] | Primary |
| Chief Information Security Officer | [Name] | [Email / Phone] | Secondary |
| Application Development Manager | [Name] | [Email / Phone] | Operational |
| DevOps / Release Manager | [Name] | [Email / Phone] | Operational |
| IT Infrastructure Manager | [Name] | [Email / Phone] | Operational |
| CAB Chair | [Name] | [Email / Phone] | Governance |
| Information Security Team (general) | [Team email] | [Email] | Operational |
| Internal Audit | [Name] | [Email / Phone] | Assurance |

---

*End of Document*

---

> **Document Control:** This document is controlled. Printed copies are uncontrolled and may not reflect the current version. The authoritative version is maintained in [Organization Name]'s document management system. Please verify currency before use.