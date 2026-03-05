# Configuration Management Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clause(s)** | RMiT 10.15 |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It must not be disclosed, reproduced, or distributed to any third party without prior written authorization from [Relevant Department Head] or [Authorized Signatory].

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Regulatory and Policy Context](#4-regulatory-and-policy-context)
5. [Configuration Management Principles](#5-configuration-management-principles)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Configuration Management Process Flow](#7-configuration-management-process-flow)
8. [Configuration Baseline Management](#8-configuration-baseline-management)
9. [Change Management Integration](#9-change-management-integration)
10. [Configuration Item (CI) Inventory](#10-configuration-item-ci-inventory)
11. [Tools and Systems](#11-tools-and-systems)
12. [Audit, Monitoring, and Compliance Verification](#12-audit-monitoring-and-compliance-verification)
13. [Escalation Procedures](#13-escalation-procedures)
14. [Exceptions and Deviations](#14-exceptions-and-deviations)
15. [Review and Update History](#15-review-and-update-history)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*Describe the intent of this procedure and the problem it addresses. This section should be concise (2–4 sentences) and directly state why this document exists.*

This procedure establishes the requirements, processes, and responsibilities for managing technology configuration baselines across [Organization Name]'s information technology environment. It ensures that all configuration items (CIs) are identified, documented, controlled, and maintained in a consistent and auditable manner throughout their lifecycle.

This document is issued in compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.15, which mandates that financial institutions maintain robust configuration management practices to reduce technology risk and ensure system integrity.

---

## 2. Scope and Applicability

*Define which systems, teams, processes, and asset types are covered by this procedure. Clearly state any exclusions and the organizational units to which this procedure applies.*

### 2.1 In Scope

This procedure applies to all of the following within [Organization Name]:

**Systems and Infrastructure:**

- All production, pre-production (staging/UAT), and development environments
- On-premises servers, networking devices, and storage systems
- Cloud-hosted infrastructure (IaaS, PaaS, SaaS) operated or contracted by [Organization Name]
- End-user computing devices managed under corporate policy
- Security appliances (firewalls, intrusion detection/prevention systems, WAFs)
- Database management systems (DBMS) and middleware components
- Application servers and web servers
- Third-party and vendor-managed systems processing [Organization Name] data

**Organizational Units:**

- [IT Department / Technology Division]
- [Information Security Department]
- [Operations and Infrastructure Team]
- [Application Development Team]
- [Vendor and Third-Party Management Team]
- All business units that own or operate technology systems

**Processes:**

- Initial provisioning and baseline configuration of new systems
- Ongoing management of configuration changes
- Periodic review and validation of configuration baselines
- Decommissioning and secure disposal of configuration items

### 2.2 Out of Scope

The following are explicitly excluded from this procedure:

- [List any exclusions, e.g., personal devices not enrolled in MDM, isolated research labs]
- Physical security controls (refer to [Physical Security Policy, Document ID])
- Software licensing management (refer to [Software Asset Management Procedure, Document ID])

### 2.3 Applicability

*Indicate whether this procedure is mandatory or advisory, and for whom.*

This procedure is **mandatory** for all employees, contractors, vendors, and third parties who administer, operate, or support technology systems on behalf of [Organization Name]. Non-compliance may result in disciplinary action in accordance with [HR Policy / Disciplinary Procedure, Document ID].

---

## 3. Definitions and Abbreviations

*Provide clear definitions of all technical terms, acronyms, and regulatory terms used in this document to ensure consistent interpretation across all readers.*

### 3.1 Definitions

| Term | Definition |
|---|---|
| **Configuration Item (CI)** | Any component (hardware, software, documentation, or service) that is subject to configuration management control and requires formal identification, control, status accounting, and audit. |
| **Configuration Baseline** | An approved, formally documented description of the attributes of a CI at a specific point in time, serving as a reference for future changes. |
| **Configuration Management Database (CMDB)** | A repository that stores information about CIs and the relationships between them throughout their lifecycle. |
| **Configuration Management Plan** | A document defining the strategy and approach for implementing configuration management within the organization. |
| **Hardening Standard** | A documented set of security configuration settings applied to a CI to minimize its attack surface and reduce vulnerability. |
| **Drift** | An unauthorized or undocumented deviation from the approved configuration baseline of a CI. |
| **Change Request (CR)** | A formal request to modify a CI, initiated through the organization's change management process. |
| **Gold Image / Golden Configuration** | A pre-configured, approved master template used as the basis for deploying new CI instances. |
| **Configuration Audit** | A formal examination to verify that a CI conforms to its documented configuration baseline. |
| **Authorized Change** | A change that has been formally reviewed, approved, and implemented through the organization's change management procedure. |

### 3.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| CI | Configuration Item |
| CMDB | Configuration Management Database |
| CR | Change Request |
| CAB | Change Advisory Board |
| ITSM | IT Service Management |
| IaC | Infrastructure as Code |
| PDPA | Personal Data Protection Act 2010 |
| SLA | Service Level Agreement |
| RACI | Responsible, Accountable, Consulted, Informed |

---

## 4. Regulatory and Policy Context

*Reference all applicable regulatory requirements, internal policies, and standards that this procedure is designed to address. Clearly map this procedure to its governing obligations.*

### 4.1 Regulatory Requirements

This procedure is established in direct response to the following regulatory obligations:

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | **Clause 10.15** | Financial institutions must maintain configuration management practices to ensure that technology assets are configured securely and consistently, with baselines documented and changes controlled. |
| BNM RMiT | Clause 10.1 – 10.5 | General technology risk management obligations covering governance, accountability, and control. |
| BNM RMiT | Clause 11 | Technology operations management, including patch management and system hardening. |
| Personal Data Protection Act 2010 (PDPA) | Section 9 (Security Principle) | Organizations processing personal data must implement appropriate security measures, including secure configuration of systems. |
| [Any other applicable BNM circulars or guidelines] | [Clause] | [Summary] |

### 4.2 Internal Policies and Standards

This procedure operates within and supports the following internal documents:

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Document ID] | Parent policy governing all information security practices |
| IT Change Management Procedure | [Document ID] | Governs the change control process that integrates with this procedure |
| IT Asset Management Procedure | [Document ID] | Governs asset inventory; CMDB aligns with asset register |
| Patch Management Procedure | [Document ID] | Patch deployment must update configuration baselines accordingly |
| Incident Response Procedure | [Document ID] | Configuration drift may trigger incident classification |
| Acceptable Use Policy | [Document ID] | Governs authorized use of systems subject to configuration control |
| Vendor and Third-Party Risk Management Policy | [Document ID] | Governs configuration requirements for third-party managed systems |

### 4.3 External Standards and Frameworks

| Standard / Framework | Reference | Application |
|---|---|---|
| CIS Benchmarks | [Applicable CIS Benchmark versions] | Primary source for hardening standards per OS/platform |
| NIST SP 800-128 | Guide for Security-Focused Configuration Management | Reference framework for configuration management methodology |
| ISO/IEC 27001:2022 | Annex A Control 8.9 – Configuration Management | International standard alignment |
| ITIL 4 | Service Configuration Management Practice | Process alignment reference |

---

## 5. Configuration Management Principles

*Articulate the core principles that guide configuration management practice across the organization. These principles provide the foundation for all subsequent process steps.*

[Organization Name]'s configuration management practice is guided by the following principles:

### 5.1 Principle of Least Privilege Configuration

All CIs shall be configured with only the minimum services, ports, protocols, and access rights necessary for their intended function. Default accounts, unnecessary services, and vendor-default credentials shall be disabled or removed prior to production deployment.

### 5.2 Principle of Documented Baselines

No CI shall be placed into production without a formally approved and documented configuration baseline. Baselines shall be version-controlled and stored in the approved configuration management repository.

### 5.3 Principle of Authorized Change

No configuration change to a CI shall be made outside of the formal change management process. Emergency changes are permitted in accordance with the IT Change Management Procedure but must be documented retrospectively within [24/48] hours.

### 5.4 Principle of Continuous Verification

Configuration baselines shall be subject to regular automated and manual verification. Any drift detected between the actual configuration and the approved baseline shall be treated as a security event and remediated in accordance with this procedure.

### 5.5 Principle of Auditability

All configuration states, changes, and audit results shall be logged in a manner that supports forensic investigation, internal audit, and regulatory examination by BNM or other authorized bodies.

---

## 6. Roles and Responsibilities

*Define all roles involved in configuration management. Each role should have clearly delineated responsibilities. The RACI table provides a consolidated accountability map.*

### 6.1 Role Descriptions

| Role | Description | Designated Position |
|---|---|---|
| **Configuration Management Process Owner** | Owns this procedure; accountable for its effectiveness and regulatory compliance | [Relevant Department Head / IT Director / CTO] |
| **Configuration Manager** | Day-to-day management of the CMDB, baseline library, and configuration audit program | [Senior IT/Infrastructure Manager] |
| **System Administrator / Engineer** | Responsible for implementing configurations on assigned CIs; must adhere to approved baselines | [System Administrators, Network Engineers, DBA team] |
| **Information Security Officer (ISO)** | Reviews and approves hardening standards; oversees security configuration compliance | [CISO / ISO] |
| **Change Advisory Board (CAB)** | Reviews and approves significant configuration changes | [CAB Members as defined in Change Management Procedure] |
| **IT Audit / Compliance** | Conducts independent verification of configuration compliance; reports findings | [Internal Audit / Compliance team] |
| **Business System Owner** | Accountable for the fitness-for-purpose of configuration settings for business systems they own | [Named Business Owner per system] |
| **Vendor / Third-Party Manager** | Ensures vendor-managed systems comply with [Organization Name]'s configuration standards | [Vendor Management Team] |

### 6.2 RACI Matrix

*The RACI matrix maps each key configuration management activity to the roles defined in Section 6.1. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Config. Mgmt Process Owner | Configuration Manager | System Administrator | ISO | CAB | IT Audit | Business System Owner |
|---|---|---|---|---|---|---|---|
| Define and approve configuration management policy/procedure | A | R | C | C | I | C | I |
| Develop and maintain hardening standards | A | C | R | R | I | C | I |
| Establish and document configuration baselines | A | R | R | C | I | I | C |
| Onboard new CI and create baseline record in CMDB | I | A | R | C | I | I | I |
| Submit change request for configuration change | I | I | R | C | A | I | C |
| Review and approve configuration change (standard) | I | A | R | C | C | I | I |
| Review and approve configuration change (significant) | I | C | R | C | A | I | C |
| Implement approved configuration change | I | I | R | I | I | I | I |
| Update CMDB following configuration change | A | R | R | I | I | I | I |
| Conduct scheduled configuration drift audit | A | R | C | C | I | R | I |
| Investigate and remediate configuration drift | A | R | R | C | I | I | I |
| Escalate unresolved configuration drift | A | R | C | R | I | I | I |
| Report configuration compliance status | I | R | I | C | I | A | I |
| Annual review of this procedure | A | R | C | C | I | C | I |
| Manage third-party configuration compliance | A | C | I | C | I | I | R |

---

## 7. Configuration Management Process Flow

*Describe the end-to-end configuration management lifecycle. This section is the procedural core of the document and should be detailed enough to serve as an operational guide.*

### 7.1 Process Overview

The configuration management lifecycle at [Organization Name] consists of five phases:

```
[IDENTIFY] → [BASELINE] → [CONTROL] → [AUDIT] → [REVIEW]
```

| Phase | Description |
|---|---|
| **Identify** | Discover and register all CIs within scope |
| **Baseline** | Document approved configuration state for each CI |
| **Control** | Manage and authorize all changes to CI configurations |
| **Audit** | Verify actual configurations against approved baselines |
| **Review** | Continuously improve standards and procedures |

### 7.2 Phase 1 — CI Identification and Registration

*Detail the steps for identifying new configuration items and recording them in the CMDB.*

**Step 1.1 — Discovery**

Upon procurement, deployment, or identification of a new in-scope technology asset, the responsible System Administrator shall:

1. Confirm that the asset falls within the scope of this procedure (refer to Section 2.1).
2. Assign the CI to the appropriate CI class (refer to Appendix A — CI Classification Taxonomy).
3. Generate a unique CI identifier following the naming convention: `[ORG]-[CI-TYPE]-[SEQUENCE]` (e.g., `ORG-SRV-0042`).

**Step 1.2 — CMDB Registration**

The Configuration Manager shall register the CI in the CMDB within **[X] business days** of identification, capturing at minimum:

| CMDB Attribute | Description | Example |
|---|---|---|
| CI ID | Unique identifier | ORG-SRV-0042 |
| CI Name | Descriptive name | PROD-WEBAPP-01 |
| CI Type | Classification | Server – Windows |
| Owner | Business/IT owner | [Name / Team] |
| Environment | Prod / UAT / Dev | Production |
| IP Address / Hostname | Network identifiers | 10.x.x.x / webapp01.org |
| Operating System | OS and version | Windows Server 2022 |
| Business Function | Purpose of CI | Core banking web frontend |
| Criticality | Critical / High / Medium / Low | Critical |
| Baseline Reference | Link to approved baseline document | [Document ID / URL] |
| Last Verified Date | Date of last compliance check | [Date] |
| Status | Active / Decommissioned / Under Review | Active |

### 7.3 Phase 2 — Configuration Baseline Establishment

*Describe how configuration baselines are created, approved, and stored.*

**Step 2.1 — Hardening Standard Selection**

The System Administrator, in consultation with the ISO, shall select the applicable hardening standard for the CI:

| CI Category | Primary Hardening Standard | Secondary Reference |
|---|---|---|
| Windows Servers | CIS Microsoft Windows Server Benchmark | BNM RMiT Annex / Internal Standard |
| Linux Servers | CIS Linux Benchmark (distro-specific) | NIST SP 800-123 |
| Network Devices (Cisco) | CIS Cisco IOS Benchmark | Vendor hardening guide |
| Network Devices (other) | Vendor hardening guide | CIS applicable benchmark |
| Databases (MSSQL/Oracle) | CIS Database Benchmark | Vendor security guide |
| Cloud Infrastructure (AWS/Azure) | CIS Cloud Foundations Benchmark | CSP security baseline |
| Web/Application Servers | CIS applicable benchmark | OWASP guidelines |
| End-User Devices | CIS Windows 11 / macOS Benchmark | Internal MDM policy |

**Step 2.2 — Baseline Documentation**

The approved baseline configuration for each CI class shall be documented in a **Configuration Baseline Document** that captures:

1. Target CI class and applicable OS/platform version
2. Applied CIS or equivalent benchmark level (Level 1 / Level 2)
3. List of all applied controls with their configured values
4. List of approved exceptions with documented justification (refer to Section 14)
5. Approval signature by the Configuration Manager and ISO
6. Version number and effective date

**Step 2.3 — Gold Image / Template Creation**

Where technically feasible, a gold image or Infrastructure-as-Code (IaC) template shall be created from the approved baseline to ensure consistent, repeatable deployment.

**Step 2.4 — Baseline Approval and Storage**

- Baseline documents require sign-off from: [Configuration Manager] and [ISO / Security Team Lead]
- Approved baselines shall be stored in: [Document Management System / Version-Controlled Repository — e.g., Confluence, SharePoint, Git]
- Access to modify baseline documents is restricted to: [Configuration Manager] and [ISO]

### 7.4 Phase 3 — Configuration Change Control

*Describe the process for managing changes to configurations of existing CIs. This phase integrates directly with the IT Change Management Procedure.*

**Step 3.1 — Change Initiation**

Any change to a CI's configuration shall be initiated by raising a formal Change Request (CR) in [ITSM Tool Name, e.g., ServiceNow, Jira Service Management]. The CR must include:

- Description of the requested configuration change
- Affected CI(s) and their CI IDs
- Business or technical justification
- Risk assessment (refer to Change Management Procedure for risk classification)
- Rollback plan
- Testing approach (pre-production validation where applicable)
- Target implementation date and window

**Step 3.2 — Change Classification**

| Change Category | Description | Approval Required | Example |
|---|---|---|---|
| **Standard Change** | Pre-approved, low-risk, well-understood change | Pre-approved; Configuration Manager sign-off | Routine OS patch application |
| **Normal Change** | Moderate-risk change requiring CAB review | CAB approval | New firewall rule set implementation |
| **Significant Change** | High-risk or high-impact change | CAB + Senior Management approval | Core banking server OS upgrade |
| **Emergency Change** | Urgent change to address critical incident | Immediate action; retrospective CAB approval within [24/48] hours | Critical vulnerability hotfix |

**Step 3.3 — Pre-Implementation Validation**

Prior to implementing any Normal or Significant change in production:

1. The change shall be tested in the UAT/pre-production environment where one exists.
2. The Configuration Manager shall verify that the proposed change is consistent with the applicable hardening standard or that a documented exception has been approved.
3. A peer review of the change instructions shall be conducted by a second System Administrator.

**Step 3.4 — Change Implementation**

1. Configuration changes shall be implemented only within the approved change window.
2. Where IaC tools are used (Ansible, Terraform, Puppet, Chef, etc.), changes shall be committed to the version-controlled repository prior to deployment.
3. The System Administrator shall document the exact changes made, including before-and-after configuration values.

**Step 3.5 — Post-Implementation Review**

Within **[X] business days** of change implementation:

1. The System Administrator shall confirm successful implementation and update the CI's configuration record in the CMDB.
2. A post-implementation configuration scan shall be run to confirm the actual state matches the intended change.
3. The Configuration Manager shall close the CR and update the baseline document if the change results in a new approved baseline state.
4. If the implementation failed or introduced unintended effects, the rollback plan shall be executed immediately and the CR shall be escalated.

### 7.5 Phase 4 — Configuration Audit and Drift Detection

*Describe the processes by which configurations are verified against approved baselines.*

**Step 4.1 — Automated Continuous Monitoring**

[Organization Name] shall deploy automated configuration compliance scanning using [Tooling — e.g., Wazuh SCA, Tenable.sc, Qualys PC, Chef InSpec] to:

- Continuously or periodically compare actual CI configurations against approved baselines
- Generate alerts upon detection of unauthorized configuration drift
- Produce compliance dashboards accessible to the Configuration Manager and ISO

**Step 4.2 — Scheduled Formal Audits**

| Audit Type | Frequency | Scope | Owner |
|---|---|---|---|
| Automated configuration scan | [Daily / Weekly] | All in-scope CIs | Configuration Manager |
| Spot-check manual audit | Monthly | [X]% sample of CIs per CI class | System Administrator + Configuration Manager |
| Full formal configuration audit | Quarterly | All critical and high-rated CIs | Configuration Manager + IT Audit |
| Annual baseline review | Annual | All CI classes — review and update baselines | Configuration Manager + ISO |
| Post-incident audit | Ad hoc (post-incident) | Affected CIs and related systems | Configuration Manager + ISO + IT Audit |

**Step 4.3 — Drift Remediation**

Upon detection of configuration drift:

1. The Configuration Manager shall classify the drift as:
   - **Authorized** — drift resulted from an approved change that was not yet reflected in the CMDB (update CMDB accordingly)
   - **Unauthorized** — drift resulted from an unapproved change (initiate incident response per Step 13.2)
2. Unauthorized drift shall be remediated by reverting the CI to its approved baseline within the timeframe specified in Section 13.
3. Root cause analysis shall be conducted to prevent recurrence.

### 7.6 Phase 5 — Baseline Review and Continuous Improvement

*Describe how baselines are kept current and how this procedure is improved over time.*

Configuration baselines and this procedure shall be reviewed:

- **Annually**, as a scheduled review
- **Upon significant change** to the technology environment, applicable regulatory guidance, or hardening standards
- **Following a security incident** where misconfiguration contributed to or exacerbated the incident
- **Upon release of updated CIS Benchmarks or other applicable hardening standards**

---

## 8. Configuration Baseline Management

*Detail the standards and controls for maintaining configuration baselines, including versioning, storage, and lifecycle management.*

### 8.1 Baseline Versioning

All configuration baseline documents shall follow a versioning convention:

| Version Format | Trigger | Example |
|---|---|---|
| Major version increment (e.g., 1.0 → 2.0) | Significant change to baseline (new OS, major security policy change) | Baseline v2.0 |
| Minor version increment (e.g., 1.0 → 1.1) | Minor update (new CIS recommendation incorporated, patch-level change) | Baseline v1.1 |
| Patch version increment (e.g., 1.1 → 1.1.1) | Correction of documented error | Baseline v1.1.1 |

### 8.2 Baseline Document Repository

| Attribute | Details |
|---|---|
| **Repository System** | [System name — e.g., Confluence, SharePoint, GitLab] |
| **Repository Location** | [URL / Path] |
| **Access Control** | Read: All IT staff; Write: Configuration Manager, ISO only |
| **Backup Frequency** | [Daily / Weekly] |
| **Retention Period** | Minimum [3 / 5] years (align with regulatory retention requirements) |

### 8.3 Baseline Inventory Register

*Maintain a register of all approved configuration baselines. This table should be kept current and reconciled with the CMDB quarterly.*

| Baseline ID | CI Class | Applicable OS/Version | CIS Benchmark Version | Baseline Document Version | Last Approved Date | Approved By | Next Review Date |
|---|---|---|---|---|---|---|---|
| [BL-001] | Windows Server | Windows Server 2022 | [CIS Version] | [1.0] | [Date] | [Name] | [Date] |
| [BL-002] | Linux Server | RHEL 9 / Ubuntu 22.04 | [CIS Version] | [1.0] | [Date] | [Name] | [Date] |
| [BL-003] | Cisco Router/Switch | IOS XE [version] | [CIS Version] | [1.0] | [Date] | [Name] | [Date] |
| [BL-004] | Cloud – AWS | AWS Foundations | [CIS Version] | [1.0] | [Date] | [Name] | [Date] |
| [BL-005] | Database – [MSSQL/Oracle] | [Version] | [CIS Version] | [1.0] | [Date] | [Name] | [Date] |
| [Add rows as required] | | | | | | | |

### 8.4 Decommissioning of CIs

When a CI is decommissioned:

1. System Administrator raises a decommission request in [ITSM Tool].
2. Prior to decommission, the CI's configuration is exported and archived per retention policy.
3. The CMDB record is updated to status **Decommissioned** — records are retained and not deleted.
4. The baseline document is marked as **Retired** and archived.
5. Secure disposal of data on the CI shall follow [Data Destruction Procedure, Document ID].

---

## 9. Change Management Integration

*Describe the formal integration points between configuration management and the organization's IT change management process.*

### 9.1 Integration Touchpoints

This procedure operates in conjunction with the [IT Change Management Procedure, Document ID]. The integration points are:

| Touchpoint | Configuration Management Activity | Change Management Activity |
|---|---|---|
| **Change initiation** | Configuration Manager validates whether change impacts a baseline-controlled CI | System Administrator raises CR in ITSM tool |
| **Change assessment** | Configuration Manager assesses impact on CI configuration record and baseline | CAB reviews risk and approves/rejects CR |
| **Pre-implementation** | Configuration Manager confirms proposed change aligns with hardening standards | Change implementer prepares change instructions and test plan |
| **Post-implementation** | Configuration Manager updates CMDB and baseline documentation | Change Manager closes CR; PIR conducted |
| **Emergency change** | Emergency change flag triggers expedited CMDB update protocol | Emergency CAB convened for retrospective approval |

### 9.2 Configuration Freeze Periods

During designated change freeze periods (e.g., financial year-end, major regulatory submission periods, as declared by [Change Advisory Board / IT Director]):

- No standard or normal configuration changes shall be implemented unless formally approved by [Relevant Authority]
- Emergency changes remain permissible under the emergency change process
- The Configuration Manager shall notify all System Administrators of freeze periods at least **[X] business days** in advance

---

## 10. Configuration Item (CI) Inventory

*Describe how the CI inventory (CMDB) is maintained, reconciled, and governed.*

### 10.1 CMDB Governance

The CMDB is the authoritative record of all configuration items within scope. The following governance controls apply:

| Control | Requirement |
|---|---|
| **CMDB Tool** | [Tool name — e.g., ServiceNow CMDB, i-doit, Ralph] |
| **Data Owner** | Configuration Manager |
| **Update Frequency** | Within [2] business days of any CI change, addition, or decommission |
| **Reconciliation Frequency** | Quarterly automated reconciliation against asset discovery scans |
| **Access Rights** | Read: All IT staff; Create/Update: System Administrators; Delete/Archive: Configuration Manager only |
| **Backup** | Daily backup; retained for [X] years |

### 10.2 CI Classification Taxonomy

*Use this taxonomy to consistently classify configuration items across the organization.*

| CI Class | Sub-Class | Examples |
|---|---|---|
| **Compute** | Physical Server | Rack-mounted, blade servers |
| | Virtual Machine | VMware VM, Hyper-V VM |
| | Container Host | Docker host, Kubernetes node |
| **Network** | Router | Core, edge, branch routers |
| | Switch | L2/L3 distribution, access switches |
| | Firewall | Perimeter, internal segment, WAF |
| | Load Balancer | Hardware/software LBs |
| **Storage** | SAN/NAS | Shared storage arrays |
| | Backup System | Backup appliances, backup software config |
| **Cloud** | IaaS Resource | AWS EC2, Azure VM, GCP Compute |
| | PaaS Service | RDS, Azure SQL, managed Kubernetes |
| | SaaS Application | [Critical SaaS platforms with configurable security settings] |
| **Endpoint** | Workstation | Corporate laptops, desktops |
| | Mobile Device | MDM-enrolled smartphones, tablets |
| **Application** | Application Server | Middleware, app servers (Tomcat, IIS) |
| | Database | MSSQL, Oracle, PostgreSQL instances |
| | Web Server | Apache, Nginx, IIS |
| **Security** | SIEM | Log collector, SIEM platform |
| | IAM / PAM | Active Directory, privileged access management tools |
| | Endpoint Security | AV/EDR agents, DLP agents |

### 10.3 Quarterly CMDB Reconciliation

The Configuration Manager shall conduct a quarterly reconciliation of the CMDB against:

1. Results from automated network discovery scans ([Tool Name])
2. Cloud provider asset inventories (AWS Config, Azure Resource Manager, etc.)
3. The IT Asset Register maintained by [Asset Management team]

Discrepancies shall be investigated and resolved within [10] business days. A reconciliation report shall be produced and retained for audit purposes.

---

## 11. Tools and Systems

*Document all tools used to support configuration management activities. Ensure all tools are themselves registered as CIs in the CMDB.*

### 11.1 Approved Configuration Management Toolset

| Tool Category | Tool Name / Product | Purpose | Owner | Version |
|---|---|---|---|---|
| **CMDB / ITSM** | [e.g., ServiceNow, i-doit] | Central CI registry; change tracking | [IT Ops Team] | [Version] |
| **Configuration Scanning** | [e.g., Wazuh SCA, Tenable.sc, Qualys PC] | Automated compliance scanning against baselines | [ISO / IT Security] | [Version] |
| **Vulnerability Management** | [e.g., Tenable Nessus, Qualys VM] | Identifies misconfigured and vulnerable systems | [ISO] | [Version] |
| **Infrastructure as Code** | [e.g., Ansible, Terraform, Puppet, Chef] | Automated, version-controlled config deployment | [Infrastructure Team] | [Version] |
| **Version Control (IaC)** | [e.g., GitLab, GitHub Enterprise, Bitbucket] | Version control for IaC and baseline scripts | [DevOps Team] | [Version] |
| **Network Discovery** | [e.g., Nmap, Lansweeper, SolarWinds] | Discovery of in-scope CIs; CMDB reconciliation | [IT Ops Team] | [Version] |
| **Log Management / SIEM** | [e.g., Wazuh, Splunk, Microsoft Sentinel] | Monitoring of configuration change events | [ISO] | [Version] |
| **Document Management** | [e.g., Confluence, SharePoint] | Storage of baseline documents and this procedure | [IT/QA Team] | [Version] |

### 11.2 Tool Access Control

Access to configuration management tooling shall be restricted on a least-privilege basis:

| Tool | Read Access | Write / Configure Access | Admin Access |
|---|---|---|---|
| CMDB / ITSM | All IT staff | System Administrators, Config Manager | Config Manager, IT Manager |
| Configuration Scanner | ISO, Config Manager (reports) | ISO, Config Manager | ISO |
| IaC Repository | All IT staff (read) | Approved Engineers | DevOps Lead, Config Manager |
| [Other tools] | [Define] | [Define] | [Define] |

### 11.3 Tool Maintenance

All configuration management tools are themselves subject to:

- Registration as CIs in the CMDB
- Application of applicable hardening standards
- Inclusion in the regular patch management cycle
- Annual review of fitness-for-purpose

---

## 12. Audit, Monitoring, and Compliance Verification

*Describe how configuration management compliance is measured, reported, and improved.*

### 12.1 Key Performance Indicators (KPIs)

The following KPIs shall be tracked and reported to [IT Governance Committee / Management] on a [monthly / quarterly] basis:

| KPI | Target | Reporting Frequency | Owner |
|---|---|---|---|
| % of in-scope CIs with documented and approved baseline | 100% | Monthly | Configuration Manager |
| % of in-scope CIs passing automated compliance scan | ≥ [95%] | Monthly | Configuration Manager / ISO |
| % of configuration changes implemented via approved change process | 100% | Monthly | Configuration Manager |
| Number of unauthorized configuration drift incidents | 0 (target) | Monthly | ISO |
| Mean time to remediate unauthorized configuration drift | ≤ [X] business days | Monthly | Configuration Manager |
| % of CIs with CMDB record updated within SLA after change | ≥ [98%] | Monthly | Configuration Manager |
| % of overdue configuration baseline reviews | 0% | Quarterly | Configuration Manager |

### 12.2 Compliance Reporting

| Report | Audience | Frequency | Format |
|---|---|---|---|
| Configuration Compliance Dashboard | IT Management, ISO | Weekly (automated) | Dashboard / Automated report |
| Configuration Audit Report | IT Director, ISO, Internal Audit | Quarterly | Formal report |
| Drift Incident Summary | ISO, Configuration Manager | Monthly | Summary report |
| Annual Configuration Management Review Report | Senior Management, Board IT Committee | Annual | Formal report |
| BNM RMiT Self-Assessment (configuration management component) | [Compliance / Risk team] | As required by BNM | Regulatory submission |

### 12.3 Internal Audit

Internal Audit shall conduct an independent review of configuration management compliance at a minimum annually. The scope of the audit shall include:

- Verification that the CMDB is complete and current
- Sample-based testing of CI compliance against documented baselines
- Review of change records to confirm all configuration changes were authorized
- Assessment of drift remediation timeliness and adequacy
- Review of configuration management tool access controls

Audit findings shall be tracked to remediation in the organization's [Audit Issue Tracking System].

---

## 13. Escalation Procedures

*Define how configuration management issues and violations are escalated and resolved. Clear escalation paths reduce response time and ensure appropriate management oversight.*

### 13.1 Escalation Triggers

The following events shall trigger escalation through the path defined in Section 13.2:

| Trigger | Severity | Initial Response Owner |
|---|---|---|
| Unauthorized configuration change detected on a Critical system | High | Configuration Manager + ISO |
| Unauthorized configuration change detected on a High/Medium system | Medium | Configuration Manager |
| Configuration drift not remediated within [X] business days | Medium | Configuration Manager → IT Manager |
| CMDB data integrity issue affecting multiple CIs | Medium | Configuration Manager |
| Configuration management tooling unavailable for > [4] hours | High | IT Operations Lead |
| Evidence of deliberate or malicious configuration tampering | Critical | ISO → CISO → Management |
| Regulatory inquiry or BNM examination related to configuration management | Critical | [Compliance / Risk Officer] → Management |
| Failure to remediate a critical baseline gap within agreed timeframe | High | IT Manager → IT Director |

### 13.2 Escalation Path

```
Level 1: Configuration Manager
        ↓ [If unresolved within X hours/days]
Level 2: IT Manager / Infrastructure Lead
        ↓ [If unresolved within X hours/days]
Level 3: IT Director / CTO
        ↓ [If critical security or regulatory implication]
Level 4: CISO / Chief Risk Officer
        ↓ [If requires Board or regulatory notification]
Level 5: CEO / Board / BNM Notification (if required)
```

### 13.3 Escalation Response Timeframes

| Severity | Detection to Acknowledgement | Acknowledgement to Remediation | Management Notification |
|---|---|---|---|
| **Critical** | [1 hour] | [24 hours] | Immediate (same day) |
| **High** | [4 hours] | [3 business days] | Within [1] business day |
| **Medium** | [1 business day] | [10 business days] | Within [3] business days |
| **Low** | [3 business days] | [20 business days] | Monthly report |

### 13.4 Incident Integration

Where unauthorized configuration change or critical configuration drift is assessed as a security incident, the matter shall be handed over to the [Information Security Incident Response team] in accordance with the [Incident Response Procedure, Document ID]. Configuration management remains responsible for restoring the approved baseline state; Incident Response is responsible for investigation and containment.

---

## 14. Exceptions and Deviations

*Define the process for managing situations where compliance with the approved configuration baseline is not achievable or practical.*

### 14.1 Exception Criteria

An exception to the approved configuration baseline may be requested where:

- Technical constraints prevent implementation of the required configuration (e.g., legacy system incompatibility)
- Business criticality requires a configuration setting that conflicts with the hardening standard
- A vendor or regulatory requirement mandates a non-standard configuration

### 14.2 Exception Request and Approval Process

1. The System Administrator or Business System Owner submits an **Exception Request Form** (refer to Appendix C) to the Configuration Manager.
2. The Configuration Manager reviews the technical basis and documents compensating controls.
3. The ISO reviews and provides a security risk opinion.
4. Approval authority based on residual risk:

| Residual Risk Level | Approval Authority |
|---|---|
| Low | Configuration Manager + ISO |
| Medium | IT Manager + ISO |
| High | IT Director + CISO |
| Critical | Not permitted without Board Risk Committee / Senior Management endorsement |

5. Approved exceptions are:
   - Documented in the applicable Configuration Baseline Document as an approved deviation
   - Recorded in the **Exception Register** (refer to Appendix D)
   - Reviewed at least **annually** or when the baseline is next reviewed

### 14.3 Compensating Controls

All approved exceptions shall include one or more compensating controls to reduce residual risk. Examples include:

- Enhanced monitoring or alerting on the affected CI
- Network segmentation or access restrictions
- Additional authentication requirements
- Increased audit frequency for the affected CI

---

## 15. Review and Update History

*Maintain a full version history of this procedure. Every change to the document must be recorded here.*

### 15.1 Version History

| Version | Date | Author | Section(s) Changed | Summary of Changes | Approved By |
|---|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | All | Initial version | [Approver Name] |
| [1.1] | [Date] | [Author Name] | [e.g., Section 7, Section 11] | [Brief description of change] | [Approver Name] |
| [2.0] | [Date] | [Author Name] | [e.g., Full review] | [Annual review — updated tooling section, revised KPI targets] | [Approver Name] |

### 15.2 Scheduled Review Log

| Review Date | Reviewer | Outcome | Next Review Date |
|---|---|---|---|
| [Date] | [Reviewer Name / Role] | [No change required / Updated — see version X.X] | [Date] |
| [Date] | [Reviewer Name / Role] | [No change required / Updated — see version X.X] | [Date] |

---

## 16. Review and Approval

*Record the formal approval of this document. All approvers must review the full document before signing.*

### 16.1 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Configuration Management Process Owner | [Name] | ________________ | [Date] |
| Information Security Officer | [Name] | ________________ | [Date] |
| IT Director / CTO | [Name] | ________________ | [Date] |
| [Additional Approver if required] | [Name] | ________________ | [Date] |

### 16.2 Review Trigger Checklist

This procedure shall be reviewed and updated upon any of the following triggers. The reviewer shall confirm each trigger is checked at review time:

| Trigger | Checked | Date Checked | Action Taken |
|---|---|---|---|
| Annual scheduled review due | ☐ | | |
| Significant change to technology environment | ☐ | | |
| New or amended BNM RMiT guidance issued | ☐ | | |
| Security incident involving configuration failure | ☐ | | |
| Internal audit finding requiring procedure update | ☐ | | |
| Updated CIS Benchmark or hardening standard released | ☐ | | |
| New technology platform or CI class onboarded | ☐ | | |

---

## 17. References

*List all regulatory documents, standards, policies, and procedures referenced within this document.*

### 17.1 Regulatory References

| Reference | Title | Issuing Body | Applicable Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-109 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | **Clause 10.15** (Configuration Management); Clauses 10.1–10.14 (General Technology Risk Management); Clause 11 (Technology Operations) |
| Personal Data Protection Act 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 — Security Principle |
| [NACSA Guidelines] | [Title of applicable NACSA guideline] | NACSA | [Applicable sections] |
| [Other BNM Circular] | [Title] | Bank Negara Malaysia | [Clause] |

### 17.2 Standards References

| Standard | Title | Applicable Section(s) |
|---|---|---|
| CIS Benchmarks | Center for Internet Security Benchmarks (platform-specific) | All applicable platform benchmarks |
| NIST SP 800-128 | Guide for Security-Focused Configuration Management of Information Systems | Full document |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A Control 8.9 — Configuration Management |
| ITIL 4 | IT Infrastructure Library — Service Configuration Management | Configuration Management Practice |

### 17.3 Internal Document References

| Document Title | Document ID | Location |
|---|---|---|
| Information Security Policy | [Document ID] | [Repository Path / URL] |
| IT Change Management Procedure | [Document ID] | [Repository Path / URL] |
| IT Asset Management Procedure | [Document ID] | [Repository Path / URL] |
| Patch Management Procedure | [Document ID] | [Repository Path / URL] |
| Incident Response Procedure | [Document ID] | [Repository Path / URL] |
| Data Classification Policy | [Document ID] | [Repository Path / URL] |
| Vendor and Third-Party Risk Management Policy | [Document ID] | [Repository Path / URL] |
| Data Destruction Procedure | [Document ID] | [Repository Path / URL] |
| Business Continuity Plan | [Document ID] | [Repository Path / URL] |

---

## 18. Appendices

### Appendix A — CI Classification Taxonomy (Detailed)

*Complete this appendix with the full CI taxonomy applicable to [Organization Name]'s environment. The table in Section 10.2 provides a starter framework; expand as required.*

| CI Class | Sub-Class | CI Examples | Default Hardening Standard | Criticality Default | Review Frequency |
|---|---|---|---|---|---|
| Compute — Physical Server | Domain Controller | [Examples] | CIS Windows Server L1 | Critical | Quarterly |
| Compute — Physical Server | Application Server | [Examples] | CIS Windows/Linux Server L1 | High | Quarterly |
| Compute — Virtual Machine | [Sub-class] | [Examples] | [Standard] | [Criticality] | [Frequency] |
| Network — Firewall | Perimeter Firewall | [Examples] | CIS [Vendor] Benchmark | Critical | Quarterly |
| [Continue for all CI classes] | | | | | |

---

### Appendix B — Configuration Baseline Document Template

*Use this template when creating a new configuration baseline document for a CI class.*

---

**Configuration Baseline Document**

| Field | Details |
|---|---|
| Baseline ID | [BL-XXX] |
| CI Class | [e.g., Windows Server 2022] |
| Hardening Standard Applied | [e.g., CIS Microsoft Windows Server 2022 Benchmark, Level 1, v1.0.0] |
| Baseline Document Version | [1.0] |
| Date Approved | [Date] |
| Approved By | [Configuration Manager Name] / [ISO Name] |
| Next Review Date | [Date] |

**Section 1 — Applied Controls**

| Control ID | Control Description | Required Value / Setting | Rationale | CIS Benchmark Ref |
|---|---|---|---|---|
| [1.1] | [e.g., Password minimum length] | [e.g., ≥ 14 characters] | [Reduces brute-force risk] | [CIS 1.1.1] |
| [1.2] | [e.g., Account lockout threshold] | [e.g., ≤ 5 invalid attempts] | [Prevents brute-force] | [CIS 1.2.1] |
| [Add all applicable controls] | | | | |

**Section 2 — Approved Exceptions**

| Exception ID | Control ID | Non-compliant Setting | Justification | Compensating Control | Approved By | Expiry Date |
|---|---|---|---|---|---|---|
| [EX-001] | [Control ID] | [Current setting] | [Business/technical reason] | [Compensating control] | [Name] | [Date] |

---

### Appendix C — Configuration Exception Request Form

*Complete and submit to the Configuration Manager for all requests to deviate from an approved configuration baseline.*

---

**Configuration Exception Request**

| Field | Details |
|---|---|
| Request Reference | [EX-YYYY-XXX] |
| Date of Request | [Date] |
| Requestor Name | [Name] |
| Requestor Role | [Role] |
| Business Unit | [Business Unit] |

**Affected CI(s):**

| CI ID | CI Name | CI Class | Environment |
|---|---|---|---|
| [CI-ID] | [CI Name] | [Class] | [Prod/UAT/Dev] |

**Baseline Non-Compliance Detail:**

- **Applicable Baseline:** [Baseline ID and version]
- **Non-compliant Control:** [Control ID and description]
- **Current / Proposed Configuration Value:** [Value]
- **Required Baseline Value:** [Value]

**Justification for Exception:**

> [Provide detailed technical or business justification for why the required baseline configuration cannot be implemented]

**Risk Assessment:**

- **Identified Risk:** [Describe the risk introduced by this exception]
- **Residual Risk Level:** [Critical / High / Medium / Low]

**Proposed Compensating Controls:**

1. [Compensating control 1]
2. [Compensating control 2]

**Requested Exception Duration:** [From date] to [To date / Permanent with annual review]

| Approver Role | Name | Decision (Approve / Reject) | Date |
|---|---|---|---|
| Configuration Manager | | | |
| Information Security Officer | | | |
| [IT Manager if required] | | | |

---

### Appendix D — Exception Register

*Maintain this register as a living document. Review at least annually and when each exception reaches its expiry date.*

| Exception ID | CI ID | Affected CI Name | Non-compliant Control | Residual Risk | Compensating Control | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| [EX-001] | [CI-ID] | [CI Name] | [Control] | [High] | [Description] | [Name] | [Date] | [Date] | [Active / Expired / Remediated] |
| [EX-002] | | | | | | | | | |

---

### Appendix E — Configuration Audit Checklist

*Use this checklist when conducting manual configuration spot-checks or formal audits.*

**CI Under Audit:** [CI Name / CI ID]
**Audit Date:** [Date]
**Auditor:** [Name / Role]
**Applicable Baseline:** [Baseline ID and version]

| # | Audit Check | Expected Value (per Baseline) | Observed Value | Compliant (Y/N) | Finding (if non-compliant) |
|---|---|---|---|---|---|
| 1 | [e.g., Remote desktop services status] | [Disabled] | [Observed] | [Y/N] | [Description] |
| 2 | [e.g., Password complexity policy] | [Enabled] | [Observed] | [Y/N] | [Description] |
| 3 | [e.g., Audit logon events policy] | [Enabled: Success and Failure] | [Observed] | [Y/N] | [Description] |
| 4 | [Continue for all baseline controls] | | | | |

**Audit Summary:**

- Total controls checked: [X]
- Controls compliant: [X]
- Controls non-compliant: [X]
- Compliance percentage: [X%]
- Findings requiring remediation: [X]

**Auditor Sign-Off:** ________________ Date: [Date]
**Configuration Manager Review:** ________________ Date: [Date]

---

### Appendix F — Glossary of Regulatory References

*This appendix provides the full text of the most directly applicable RMiT clause(s) for the convenience of procedure users.*

**BNM RMiT Clause 10.15 — Configuration Management**

> *[Insert the full text of BNM RMiT Clause 10.15 as published in the official BNM policy document. This ensures the procedure remains directly anchored to the regulatory text and facilitates regulatory examination.]*

**Source:** Bank Negara Malaysia, Risk Management in Technology (RMiT), [Document Reference], [Issue Date].

---

*End of Document*

---

| Document ID | [Document ID] | Version | 1.0 |
|---|---|---|---|
| Classification | Confidential | Last Updated | [Date] |
| Owner | [Relevant Department Head] | Next Review | [Next Review Date] |