# Requirements Management Procedure

---

| **Field** | **Details** |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Department Head Title], [Department Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual from Effective Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. All printed copies are uncontrolled. Refer to the document management system for the current version.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy References](#3-regulatory-and-policy-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Process Flow Overview](#6-process-flow-overview)
7. [Step-by-Step Requirements Management Process](#7-step-by-step-requirements-management-process)
   - 7.1 [Requirements Identification and Elicitation](#71-requirements-identification-and-elicitation)
   - 7.2 [Requirements Documentation and Classification](#72-requirements-documentation-and-classification)
   - 7.3 [Requirements Analysis and Validation](#73-requirements-analysis-and-validation)
   - 7.4 [Requirements Traceability](#74-requirements-traceability)
   - 7.5 [Requirements Approval and Baselining](#75-requirements-approval-and-baselining)
   - 7.6 [Requirements Change Management](#76-requirements-change-management)
   - 7.7 [Requirements Verification and Testing](#77-requirements-verification-and-testing)
   - 7.8 [Requirements Closure and Archival](#78-requirements-closure-and-archival)
8. [Tools and Systems](#8-tools-and-systems)
9. [Escalation Procedures](#9-escalation-procedures)
10. [Metrics and Reporting](#10-metrics-and-reporting)
11. [Exceptions and Waivers](#11-exceptions-and-waivers)
12. [Review and Update History](#12-review-and-update-history)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*Describe the intent of this procedure and what problem it solves. Reference the regulatory obligation that mandates this procedure.*

This procedure establishes the formal process by which [Organization Name] captures, documents, traces, validates, and manages security and technology requirements throughout the project and system development lifecycle. It ensures that all requirements — including functional, non-functional, and security requirements — are systematically handled in a manner consistent with sound risk management practice and the expectations of Bank Negara Malaysia (BNM).

This procedure supports [Organization Name]'s compliance with BNM's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.5**, which mandates that financial institutions implement structured processes for the identification and management of technology and security requirements. By following this procedure, [Organization Name] ensures that:

- Security and technology requirements are explicitly identified, documented, and owned.
- Requirements are traceable from their regulatory or business source through to implementation and testing.
- Changes to requirements are governed through a formal change control process.
- Evidence is produced and retained to support internal audit, external examination, and regulatory inspection.

---

## 2. Scope and Applicability

*Define what systems, projects, teams, and activities this procedure applies to. Clearly state any exclusions.*

### 2.1 In Scope

This procedure applies to all technology and security requirements arising from:

- **New system developments** — internally developed applications, platforms, and infrastructure components.
- **System enhancements and upgrades** — significant changes to existing production systems.
- **Third-party and vendor-managed systems** — technology solutions procured from or operated by external parties on behalf of [Organization Name].
- **Cloud-based services** — including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) deployments.
- **Regulatory and compliance-driven changes** — system changes mandated by BNM, Securities Commission, or other competent authorities.
- **Internal policy-driven changes** — changes arising from updates to [Organization Name]'s internal information security, data governance, or risk management policies.

This procedure applies to all personnel involved in the requirements lifecycle, including but not limited to:

| Department / Function | Applicability |
|---|---|
| Information Technology (IT) / Technology Division | All projects and initiatives |
| Information Security (IS) / Cybersecurity | All security-related requirements |
| Business Units (BU) | As requirement owners or stakeholders |
| Risk Management | Oversight and governance |
| Internal Audit | Review and assurance |
| Third-Party Vendors / System Integrators | Where contracted to deliver technology solutions |

### 2.2 Out of Scope

The following are explicitly excluded from this procedure:

- **Routine operational activities** that do not involve changes to system functionality, configuration, or security posture (refer to the Change Management Procedure, [Document ID]).
- **Emergency break-fix actions** governed by the Incident Response Procedure ([Document ID]) — though such fixes must subsequently be reviewed against this procedure for formal requirements capture.
- **Non-technology business process changes** that have no direct IT or security component.

### 2.3 Applicability Threshold

*Define the minimum project size or risk classification that triggers mandatory application of this full procedure.*

This full procedure is mandatory for all projects classified as **Medium**, **High**, or **Critical** in accordance with [Organization Name]'s Project Risk Classification Framework ([Document ID]). For **Low** risk or minor projects, a streamlined requirements log (Appendix A) shall be used at minimum, with approval from the relevant Department Head.

---

## 3. Regulatory and Policy References

*List all regulatory instruments, standards, and internal policies that this procedure is designed to satisfy.*

### 3.1 Regulatory Instruments

| Reference | Title | Relevant Section(s) |
|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document, Bank Negara Malaysia | Clause 10.5 (Security Requirements); Clause 10.1–10.4 (System Development and Acquisition) |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 (Security Standard) |
| NACSA | National Cyber Security Agency — Policies and Guidelines | Critical Information Infrastructure (CII) requirements |
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | Clause A.8.26 (Application Security Requirements) |
| ISO/IEC 27002:2022 | Information Security Controls | Clause 8.26 |
| BNM/RH/PD 028-109 | Guidelines on Management of IT Risk (GITIR) | As applicable |

### 3.2 Internal Policy References

| Document ID | Title |
|---|---|
| [IS-POL-001] | Information Security Policy |
| [IS-POL-002] | Secure System Development Lifecycle (SSDLC) Policy |
| [IT-POL-003] | Change Management Policy |
| [IT-POL-004] | Third-Party and Vendor Risk Management Policy |
| [RM-POL-005] | Enterprise Risk Management Policy |
| [DG-POL-006] | Data Governance and Classification Policy |

---

## 4. Definitions and Abbreviations

*Define all key terms and abbreviations used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Security Requirement** | A specification of a capability or constraint that a system, component, or process must satisfy to protect the confidentiality, integrity, and availability of information assets. |
| **Functional Requirement** | A specification describing what a system must do — its features, behaviours, and functions. |
| **Non-Functional Requirement (NFR)** | A specification describing how well a system must perform, covering quality attributes such as performance, scalability, availability, and security. |
| **Requirements Traceability Matrix (RTM)** | A document that maps requirements to their sources (regulatory, business) and to their downstream artefacts (design, test cases, implementation evidence). |
| **Baseline** | An approved, versioned snapshot of a set of requirements that serves as a reference point for change control. |
| **Requirements Elicitation** | The process of gathering, discovering, and surfacing requirements from stakeholders, regulations, threat models, and other sources. |
| **Validation** | Confirmation, through evidence, that requirements correctly represent stakeholder and regulatory needs. |
| **Verification** | Confirmation, through testing and review, that a delivered system or component satisfies its stated requirements. |
| **Traceability** | The ability to track a requirement from its origin through design, development, testing, and deployment, and to trace backwards from any artefact to the originating requirement. |
| **Change Request (CR)** | A formal request to add, modify, or remove a baselined requirement. |
| **Acceptance Criteria** | Measurable conditions that a requirement must satisfy to be deemed fulfilled. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act |
| NACSA | National Cyber Security Agency |
| RTM | Requirements Traceability Matrix |
| SSDLC | Secure System Development Lifecycle |
| IS | Information Security |
| IT | Information Technology |
| BU | Business Unit |
| PM | Project Manager |
| SME | Subject Matter Expert |
| UAT | User Acceptance Testing |
| SIT | System Integration Testing |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| CR | Change Request |
| NFR | Non-Functional Requirement |

---

## 5. Roles and Responsibilities

*Define who is accountable, responsible, consulted, and informed for each major activity in this procedure. Update role titles to match your organization's actual structure.*

### 5.1 Role Descriptions

| Role | Description |
|---|---|
| **[Department Head — IT/Technology]** | Procedure owner. Accountable for the overall implementation and maintenance of this procedure within the technology division. |
| **Project Manager (PM)** | Responsible for coordinating requirements activities within a project, ensuring this procedure is followed, and maintaining project-level documentation. |
| **Business Analyst (BA) / Requirements Analyst** | Responsible for eliciting, documenting, and managing requirements throughout the project lifecycle. Primary author of the RTM. |
| **Information Security Officer (ISO) / CISO Representative** | Reviews and approves security-specific requirements. Ensures requirements align with the Information Security Policy and BNM RMiT obligations. |
| **System Architect / Technical Lead** | Responsible for translating requirements into technical design and confirming technical feasibility. |
| **Business Unit Representative (Requirement Owner)** | Owns business and functional requirements on behalf of the business unit. Signs off on requirements accuracy and completeness. |
| **Quality Assurance (QA) / Test Lead** | Responsible for deriving test cases from requirements, executing verification, and reporting traceability coverage. |
| **Risk Manager** | Reviews requirements for risk implications. Consulted on requirements arising from risk assessments or compliance obligations. |
| **Change Advisory Board (CAB)** | Approves changes to baselined requirements. |
| **Internal Audit** | Reviews the requirements management process for compliance and adequacy. Informed of major changes. |
| **Vendor / Third-Party Representative** | Where applicable, responsible for delivering requirements artefacts as contracted. Subject to the same requirements standards. |

### 5.2 RACI Matrix

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

| Activity | Dept Head (IT) | PM | BA | ISO | System Architect | BU Representative | QA / Test Lead | Risk Manager | CAB | Internal Audit |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Requirements Elicitation | I | A | R | C | C | C | I | C | I | I |
| Security Requirements Identification | A | C | R | R | C | C | I | C | I | I |
| Requirements Documentation (RTM creation) | I | A | R | C | C | I | I | I | I | I |
| Requirements Classification (security/functional/NFR) | I | C | R | A | C | C | I | C | I | I |
| Requirements Validation with Stakeholders | I | A | R | C | C | R | I | C | I | I |
| Requirements Approval and Baselining | A | C | R | C | C | C | I | C | I | I |
| Traceability Matrix Maintenance | I | A | R | C | C | I | C | I | I | I |
| Requirements Change Control | A | R | R | C | C | C | C | C | A | I |
| Requirements Verification (Test Coverage) | I | A | C | C | C | C | R | I | I | I |
| Security Requirements Sign-off | A | I | C | R | C | C | I | C | I | I |
| Procedure Review and Update | A | I | C | C | I | I | I | C | I | C |

---

## 6. Process Flow Overview

*Provide a high-level summary of the end-to-end requirements management process. This section may be supplemented with a process flow diagram attached as an appendix.*

The requirements management process at [Organization Name] follows a structured lifecycle aligned with the Secure System Development Lifecycle (SSDLC) Policy ([Document ID]). The process comprises eight sequential phases, each producing defined outputs that feed into subsequent phases and collectively form the audit trail required under BNM RMiT Clause 10.5.

```
  ┌─────────────────────────────────────────────────────────────────────┐
  │              REQUIREMENTS MANAGEMENT LIFECYCLE                      │
  │                                                                     │
  │  [1] Identify  →  [2] Document  →  [3] Validate  →  [4] Trace      │
  │       ↓                                                   ↓         │
  │  [8] Archive  ←  [7] Verify  ←  [6] Change Ctrl  ←  [5] Baseline  │
  └─────────────────────────────────────────────────────────────────────┘
```

| Phase | Key Input | Key Output | Responsible |
|---|---|---|---|
| 1. Identification & Elicitation | Project charter, risk assessment, regulatory gap analysis | Draft requirements list | BA, ISO, BU Representative |
| 2. Documentation & Classification | Draft requirements list | Requirements register, initial RTM | BA |
| 3. Analysis & Validation | Requirements register | Validated requirements (stakeholder sign-off) | BA, BU Representative, ISO |
| 4. Traceability | Validated requirements | Updated RTM (source-to-requirement linkage) | BA |
| 5. Approval & Baselining | Validated RTM | Baselined requirements (version-controlled) | PM, Dept Head |
| 6. Change Management | Change request | Updated, re-baselined requirements | PM, CAB |
| 7. Verification & Testing | Baselined requirements, test results | Test coverage report, verified RTM | QA Lead |
| 8. Closure & Archival | Verified requirements, project closure report | Archived requirements package | PM, BA |

---

## 7. Step-by-Step Requirements Management Process

### 7.1 Requirements Identification and Elicitation

*Describe the techniques and sources used to discover requirements. Enumerate all mandatory sources for security requirements under RMiT.*

#### 7.1.1 Trigger Events

Requirements elicitation shall be initiated upon occurrence of any of the following trigger events:

- Formal project initiation (Project Charter approved).
- Regulatory directive or guidance issued by BNM, Securities Commission, or other authority.
- Identification of a material risk or control gap through risk assessment or audit finding.
- Significant change to an existing system (as defined under the Change Management Procedure, [Document ID]).
- Adoption of a new third-party technology solution.

#### 7.1.2 Mandatory Sources for Requirements Elicitation

The Business Analyst, in coordination with the Information Security Officer, shall consult the following mandatory sources when eliciting requirements:

**Regulatory and Compliance Sources:**

- BNM RMiT Policy Document (all applicable clauses, with emphasis on Clause 10.5).
- Personal Data Protection Act 2010 and subsidiary regulations.
- NACSA advisories and critical infrastructure guidelines.
- Any current BNM supervisory findings or directives applicable to [Organization Name].
- [Organization Name]'s current regulatory obligations register ([Document ID]).

**Internal Sources:**

- Information Security Policy and standards ([Document ID]).
- Enterprise Risk Management framework outputs (risk register, control assessments).
- Threat and vulnerability assessments or penetration test findings.
- Lessons learned from prior projects and post-implementation reviews.
- Business unit requirements workshops and interviews.
- Data classification assessments for systems handling personal or sensitive data.

**Technical Sources:**

- Architecture review board recommendations.
- Technology roadmap and infrastructure standards.
- Third-party vendor security assessments and contractual requirements.

#### 7.1.3 Elicitation Techniques

The following techniques shall be employed as appropriate to the project context:

| Technique | Description | When to Use |
|---|---|---|
| Stakeholder Workshops | Facilitated sessions with business and IT stakeholders | All projects |
| Structured Interviews | One-on-one sessions with key subject matter experts | Complex or specialized domains |
| Document Analysis | Review of existing policies, contracts, regulations | Regulatory-driven requirements |
| Threat Modelling | Structured analysis of threats to identify security controls | Systems handling sensitive/regulated data |
| Use Case / User Story Analysis | Functional decomposition to surface implied security needs | Agile or iterative delivery projects |
| Gap Analysis | Comparison of current state against regulatory or policy requirements | Compliance-driven initiatives |
| Prototyping | Iterative mockups to surface latent requirements | User-facing systems |

#### 7.1.4 Elicitation Records

All elicitation activities shall be documented. The following records shall be created and retained:

- Meeting minutes or workshop notes (signed or acknowledged by attendees).
- Interview records (date, attendees, key outputs).
- Document analysis logs referencing source documents reviewed.
- Threat modelling outputs (where applicable).

*Records shall be stored in [specify document repository/system] and linked to the project requirements register.*

---

### 7.2 Requirements Documentation and Classification

*Describe the standard format for documenting requirements and the classification taxonomy used. Ensure security requirements are distinctly identified.*

#### 7.2.1 Requirements Register

All requirements identified during elicitation shall be captured in the **Requirements Register**. The minimum mandatory fields for each requirement entry are:

| Field | Description | Mandatory |
|---|---|---|
| Requirement ID | Unique identifier (e.g., REQ-SEC-001, REQ-FUNC-001, REQ-NFR-001) | Yes |
| Requirement Title | Brief descriptive title | Yes |
| Requirement Description | Full, unambiguous statement of the requirement | Yes |
| Requirement Type | Security / Functional / Non-Functional / Regulatory / Data Privacy | Yes |
| Priority | Critical / High / Medium / Low | Yes |
| Source | Regulatory clause, risk assessment, stakeholder request (with reference) | Yes |
| Owner (Business) | Business unit or role responsible for the requirement | Yes |
| Owner (Technical) | Technical team responsible for implementation | Yes |
| Acceptance Criteria | Measurable conditions for requirement fulfilment | Yes |
| Status | Draft / Under Review / Approved / Implemented / Verified / Closed | Yes |
| Version | Requirement version number | Yes |
| Notes / Dependencies | Additional context, links to related requirements | No |

*The Requirements Register template is provided in Appendix B.*

#### 7.2.2 Requirement Classification

Requirements shall be classified using the following taxonomy:

**By Type:**

| Type | Description | Examples |
|---|---|---|
| **Security (SEC)** | Requirements directly addressing confidentiality, integrity, availability, authentication, authorisation, audit, or non-repudiation | MFA enforcement, encryption at rest, role-based access control |
| **Regulatory (REG)** | Requirements derived directly from regulatory instruments or supervisory directives | BNM RMiT Clause 10.5, PDPA Section 9 |
| **Functional (FUNC)** | Requirements describing system behaviour and features | User login flow, transaction processing rules |
| **Non-Functional (NFR)** | Requirements describing system quality attributes | 99.9% availability, sub-2-second response time |
| **Data Privacy (DP)** | Requirements governing the collection, processing, storage, and deletion of personal data | Data minimisation, consent management, retention limits |
| **Operational (OPS)** | Requirements for ongoing operation, monitoring, and maintenance | Log retention for 7 years, automated alerting thresholds |

**By Priority:**

| Priority | Definition |
|---|---|
| **Critical** | Mandatory for regulatory compliance or system security. Non-negotiable. Cannot be deferred. |
| **High** | Significant impact on security posture or business functionality. Must be delivered in the current release. |
| **Medium** | Important but can be addressed in a subsequent release with risk acceptance from the Department Head. |
| **Low** | Desirable. Can be deferred without material risk. |

#### 7.2.3 Security Requirements — Mandatory Coverage Areas

For all systems classified as [Medium risk or above], the following security requirement categories shall be explicitly addressed in the Requirements Register. A nil-return entry is required if a category is not applicable (with documented justification):

- [ ] Authentication and Identity Management
- [ ] Authorisation and Access Control
- [ ] Encryption (data in transit and at rest)
- [ ] Audit Logging and Log Integrity
- [ ] Session Management
- [ ] Input Validation and Output Encoding
- [ ] Error Handling and Exception Management
- [ ] Secrets and Cryptographic Key Management
- [ ] Third-Party Component and Dependency Security
- [ ] Data Retention and Secure Disposal
- [ ] Backup and Recovery Requirements
- [ ] Availability and Resilience
- [ ] Security Monitoring and Alerting
- [ ] Personal Data Protection (where applicable)
- [ ] Penetration Testing and Vulnerability Assessment Requirements

---

### 7.3 Requirements Analysis and Validation

*Describe how requirements are reviewed for completeness, clarity, consistency, and correctness before being approved.*

#### 7.3.1 Completeness Review

Prior to stakeholder validation, the Business Analyst shall conduct a completeness review of the Requirements Register against the following criteria:

| Criterion | Check |
|---|---|
| **Correct** | Does the requirement accurately represent the stakeholder's or regulatory need? |
| **Unambiguous** | Is the requirement stated in clear, precise language with a single interpretation? |
| **Testable** | Can the requirement be verified through inspection, analysis, demonstration, or test? |
| **Traceable** | Is the source of the requirement clearly referenced? |
| **Feasible** | Is implementation technically and commercially viable within project constraints? |
| **Non-Redundant** | Does the requirement duplicate an existing requirement without adding value? |
| **Consistent** | Is the requirement free of conflict with other requirements in the register? |

Any requirement that fails one or more criteria shall be returned to the originating BA or stakeholder for revision before proceeding.

#### 7.3.2 Security Requirements Review

All requirements classified as **Security (SEC)** or **Regulatory (REG)** shall undergo a dedicated security review conducted by the Information Security Officer (or designated representative) prior to baselining. The review shall confirm:

- Alignment with the Information Security Policy and applicable security standards.
- Compliance with BNM RMiT requirements, particularly Clause 10.5.
- Adequate coverage of identified threats (cross-reference with threat model outputs, where applicable).
- Appropriate acceptance criteria that can be objectively verified.

The ISO shall document the outcome of the security review in writing (using the Security Requirements Review Record, Appendix C), indicating either:

- **Approved** — requirement is fit for purpose.
- **Approved with Comments** — requirement is approved subject to specified amendments.
- **Rejected** — requirement does not meet security standards (with written justification and remediation guidance).

#### 7.3.3 Stakeholder Validation

Following completeness and security review, the PM shall convene a **Requirements Validation Workshop** (or circulate requirements for written sign-off for smaller projects) involving:

- Business Unit Representative(s) — to confirm requirements accurately reflect business needs.
- Technical Lead / System Architect — to confirm technical feasibility.
- ISO — to confirm security adequacy.
- Risk Manager — to confirm alignment with risk management objectives.

Validated requirements shall be acknowledged by stakeholders via:

- Signed minutes of the validation workshop, **or**
- Written email approval from each stakeholder, **or**
- Electronic approval within the designated requirements management tool ([Tool Name]).

---

### 7.4 Requirements Traceability

*Describe how traceability is maintained from requirements source through to implementation and testing evidence.*

#### 7.4.1 Requirements Traceability Matrix (RTM)

The Business Analyst shall maintain a **Requirements Traceability Matrix (RTM)** for all projects within scope of this procedure. The RTM establishes bidirectional traceability across the requirements lifecycle.

**Mandatory RTM columns:**

| Column | Description |
|---|---|
| Requirement ID | Unique requirement identifier |
| Requirement Description (Summary) | Brief description of the requirement |
| Requirement Type | SEC / REG / FUNC / NFR / DP / OPS |
| Priority | Critical / High / Medium / Low |
| Regulatory Source | BNM RMiT Clause, PDPA Section, etc. (if applicable) |
| Business Source | Business unit, risk assessment reference, etc. |
| Design Reference | Architecture or design document reference(s) |
| Development Reference | Code module, configuration item, or user story reference |
| Test Case ID(s) | Linked test case(s) in the test management system |
| Test Result | Pass / Fail / Not Yet Tested |
| Verification Evidence | Reference to test report, review record, or audit log |
| Status | Draft / Approved / Implemented / Verified / Closed |

*The RTM template is provided in Appendix D.*

#### 7.4.2 Traceability Coverage Requirements

At project closure, the following minimum traceability coverage standards shall be met:

| Requirement Type | Minimum Test Coverage |
|---|---|
| Security (SEC) | 100% — all security requirements must be traced to at least one verified test case |
| Regulatory (REG) | 100% — all regulatory requirements must be traced to verified implementation evidence |
| Functional (FUNC) | 95% minimum — exceptions require documented risk acceptance |
| Non-Functional (NFR) | 90% minimum — exceptions require documented risk acceptance |
| Data Privacy (DP) | 100% — all data privacy requirements must be fully traced and verified |

Gaps in traceability coverage shall be raised as findings in the project risk register and escalated per Section 9 of this procedure.

#### 7.4.3 RTM Maintenance

The RTM shall be maintained and updated:

- Following each sprint or development iteration (for agile projects).
- Upon each baseline change (see Section 7.6).
- Following completion of each testing phase (SIT, UAT).
- At project closure.

The current RTM version shall be accessible to all project team members via [document repository/system].

---

### 7.5 Requirements Approval and Baselining

*Describe the formal approval and version control process for requirements.*

#### 7.5.1 Baseline Approval

Prior to development commencement, the validated and traced requirements shall be submitted for formal baseline approval. The following approvals are required:

| Requirement Type | Approving Authority |
|---|---|
| All requirements — baseline approval | [Department Head — IT/Technology] |
| Security requirements | Chief Information Security Officer (CISO) or delegated ISO |
| Requirements with regulatory implications | Chief Risk Officer (CRO) or delegated Risk Manager |
| Requirements affecting third parties | [relevant vendor/contract manager role] |

Approval shall be documented using the Requirements Baseline Approval Record (Appendix E).

#### 7.5.2 Baseline Version Control

Upon approval, the requirements baseline shall be:

- Assigned a baseline version number (e.g., v1.0-BASE).
- Locked in [requirements management tool / document repository].
- Tagged in the version control system if requirements are maintained in source control.

Subsequent changes to a baselined requirement are governed by the Requirements Change Management process (Section 7.6).

---

### 7.6 Requirements Change Management

*Describe the formal process for managing changes to baselined requirements. Align with the organization's Change Management Procedure.*

#### 7.6.1 Change Initiation

Any proposed change to a baselined requirement shall be formally initiated via a **Requirements Change Request (CR)**. The CR shall capture:

| Field | Description |
|---|---|
| CR ID | Unique change request identifier |
| Date Raised | Date the change request was submitted |
| Raised By | Name and role of the requestor |
| Affected Requirement(s) | Requirement ID(s) impacted |
| Nature of Change | Add / Modify / Remove |
| Justification | Business, technical, or regulatory reason for the change |
| Impact Assessment | Impact on scope, schedule, cost, security, and compliance |
| Proposed New Requirement Text | Updated requirement statement (for modifications) |
| Risk Assessment | Risk of implementing / not implementing the change |

*The Requirements Change Request template is provided in Appendix F.*

#### 7.6.2 Impact Assessment

Prior to escalation for approval, the Business Analyst and ISO shall assess the impact of the proposed change on:

- **Security posture** — does the change introduce, remove, or modify security controls?
- **Regulatory compliance** — does the change affect [Organization Name]'s compliance with BNM RMiT Clause 10.5 or other regulatory obligations?
- **Traceability** — does the change require updates to design, test cases, or implementation artefacts?
- **Project scope and schedule** — what is the downstream impact on delivery?

#### 7.6.3 Change Approval Authority

| Change Risk Classification | Approval Authority |
|---|---|
| **Low** — cosmetic or wording changes with no security or compliance impact | PM (documented in project log) |
| **Medium** — functional changes with limited security impact | [Department Head — IT/Technology] |
| **High** — changes affecting security requirements or regulatory compliance | CISO + [Department Head — IT/Technology] |
| **Critical** — changes with material regulatory implications or significant security degradation | CRO + CTO/CIO (or equivalent) + CISO |

#### 7.6.4 Post-Approval Actions

Following CR approval, the Business Analyst shall:

1. Update the Requirements Register with the revised requirement text and increment the requirement version number.
2. Update the RTM to reflect the change.
3. Notify all affected teams (development, QA, architecture) of the change.
4. Update or create test cases as required.
5. Re-seek ISO sign-off for changes to security or data privacy requirements.
6. Document the updated baseline version.

All changes to baselined requirements shall be logged in the Requirements Change Log (Appendix G).

---

### 7.7 Requirements Verification and Testing

*Describe how each requirement is verified as having been correctly implemented, and how verification evidence is captured.*

#### 7.7.1 Test Coverage Planning

The QA / Test Lead shall, in coordination with the Business Analyst, ensure that test cases are created for each requirement in the RTM prior to the commencement of formal testing phases. The test coverage plan shall be reviewed and approved by the PM and ISO.

#### 7.7.2 Verification Methods

Requirements shall be verified using one or more of the following methods, as appropriate to the requirement type:

| Verification Method | Description | Applicable Requirement Types |
|---|---|---|
| **Inspection** | Review of documentation, configuration, or code against the requirement | Security controls, policy compliance |
| **Analysis** | Logical evaluation (e.g., architecture review, threat model validation) | NFRs, architecture requirements |
| **Demonstration** | Live walkthrough of system functionality against acceptance criteria | Functional requirements, UI requirements |
| **Test** | Automated or manual test execution with documented results | All requirement types |
| **Penetration Test / Security Assessment** | Independent adversarial testing of security requirements | All SEC-classified requirements |
| **Audit / Compliance Review** | Internal or external review against regulatory standards | All REG-classified requirements |

#### 7.7.3 Security Requirements Verification

All requirements classified as **Security (SEC)** shall be verified through formal testing (minimum: SIT and UAT) and, where mandated by the SSDLC Policy or project risk classification, through independent security assessment (e.g., vulnerability assessment, penetration test).

The ISO or designated security tester shall review and formally sign off on security requirements verification evidence prior to production deployment approval.

#### 7.7.4 Verification Evidence

For each verified requirement, the following evidence shall be captured and retained:

- Test case ID and description.
- Test execution date and tester identity.
- Test result (Pass / Fail).
- Supporting evidence (screenshots, logs, reports) where required.
- Sign-off by the QA Lead and, for security requirements, the ISO.

Verification evidence shall be stored in [document repository/system] and linked to the RTM.

#### 7.7.5 Failed Requirements

Where a requirement fails verification:

1. A defect or finding shall be raised in [defect tracking system].
2. The requirement status in the RTM shall be updated to **Failed — Remediation Required**.
3. The PM shall assess the impact on project go-live and escalate per Section 9 if critical or high-priority requirements are not satisfied.
4. Re-verification shall be conducted following remediation.

---

### 7.8 Requirements Closure and Archival

*Describe the process for formally closing and archiving requirements at project completion.*

#### 7.8.1 Requirements Closure Conditions

Requirements closure shall occur upon satisfaction of all the following conditions:

- All **Critical** and **High** priority requirements have been verified and evidence retained.
- All **Security (SEC)** and **Regulatory (REG)** requirements have been formally signed off by the ISO.
- The final RTM reflects 100% traceability coverage for Security and Regulatory requirements.
- The PM and Department Head have reviewed and accepted the requirements closure report.
- Any open defects or gaps have been resolved or accepted via the risk acceptance process.

#### 7.8.2 Requirements Closure Report

The BA shall prepare a **Requirements Closure Report** (Appendix H) summarising:

- Total requirements count (by type and priority).
- Requirements verification coverage statistics.
- Requirements that were deferred (with risk acceptance references).
- Outstanding issues or observations for post-implementation review.
- Recommendations for future projects.

#### 7.8.3 Archival

The following requirements artefacts shall be archived upon project closure:

| Artefact | Retention Period | Storage Location |
|---|---|---|
| Requirements Register (final) | [Retention period per Records Retention Schedule] | [Document repository] |
| Requirements Traceability Matrix (final) | [Retention period per Records Retention Schedule] | [Document repository] |
| Stakeholder validation records | [Retention period] | [Document repository] |
| Security requirements review records | [Retention period] | [Document repository] |
| Requirements Change Requests | [Retention period] | [Document repository] |
| Requirements Closure Report | [Retention period] | [Document repository] |

*Retention periods shall be determined in accordance with [Organization Name]'s Records Retention Schedule ([Document ID]) and BNM record-keeping requirements.*

---

## 8. Tools and Systems

*List all tools and systems used to support requirements management activities. Include details on access controls and data handling for each tool.*

### 8.1 Approved Tools

The following tools are approved for use in requirements management activities at [Organization Name]:

| Tool / System | Purpose | Administrator | Access Control | Data Classification Supported |
|---|---|---|---|---|
| [Requirements Management Tool — e.g., Jira, Azure DevOps, Confluence] | Requirements register, RTM, change tracking | [IT Operations / DevOps Team] | Role-based access; MFA enforced | Up to Confidential |
| [Document Management System — e.g., SharePoint, Confluence] | Document storage and version control | [IT Operations] | Role-based access; audit logging enabled | Up to Confidential |
| [Test Management Tool — e.g., Jira, TestRail, Azure Test Plans] | Test case management, test execution, traceability | [QA Lead] | Role-based access | Up to Confidential |
| [Project Management Tool — e.g., MS Project, Jira] | Project scheduling, milestone tracking | [PM] | Role-based access | Internal |
| [Collaboration Tool — e.g., Microsoft Teams] | Stakeholder communication, meeting records | [IT Operations] | Organisation account required | Internal / Confidential |

### 8.2 Tool Access Control Requirements

- All tools used for requirements management shall enforce **Role-Based Access Control (RBAC)**.
- Access to requirements classified as **Confidential** or above shall be restricted to project team members with a documented need-to-know.
- Third-party users (vendors, consultants) shall be provisioned with minimum-privilege access and their access shall be reviewed and revoked upon project completion.
- All access provisioning and deprovisioning shall be documented and approved by the relevant system administrator.

### 8.3 Prohibited Activities

The following activities are prohibited:

- Storing requirements artefacts on personal devices or unapproved cloud storage services.
- Sharing requirements documents containing personal data or sensitive business information via unencrypted channels.
- Using non-approved third-party tools for requirements management without prior approval from [ISO/IT Operations].

---

## 9. Escalation Procedures

*Define the escalation paths for issues arising during requirements management activities. Ensure timelines are clear and authorities are named.*

### 9.1 Escalation Triggers

The following events shall trigger the escalation process:

| Trigger | Severity |
|---|---|
| A Critical or High priority security requirement cannot be met due to technical constraints | High |
| A regulatory requirement (REG-classified) cannot be implemented within the project timeline | Critical |
| Traceability coverage falls below mandatory thresholds at a testing gate | High |
| A security requirement is rejected or materially changed by a stakeholder without ISO approval | High |
| A significant gap in security requirements coverage is identified after baseline | High |
| Requirements change is proposed that would reduce the security posture or compliance position | Medium–Critical |
| Vendor fails to produce required requirements artefacts per contractual obligations | Medium |
| A post-implementation review identifies that verified requirements were not correctly implemented | High |

### 9.2 Escalation Path

| Escalation Level | Trigger Condition | Escalated To | Resolution Timeframe |
|---|---|---|---|
| **Level 1 — Project Level** | Any requirements issue that can be resolved within the project team | PM → [Department Head — IT/Technology] | Within [X] business days |
| **Level 2 — Departmental** | Issues involving security posture, cross-departmental impact, or resource constraints | [Department Head — IT/Technology] → CISO / CRO | Within [X] business days |
| **Level 3 — Executive** | Issues with material regulatory compliance impact, inability to meet regulatory requirements, or significant security risk | CISO / CRO → CTO / CIO → [Executive Committee / Risk Committee] | Within [X] business days |
| **Level 4 — Board / Regulatory** | Issues that may require notification to BNM or other regulatory body | [Executive Committee] → Board Risk Committee → BNM (if applicable) | As required by BNM notification obligations |

### 9.3 Escalation Documentation

All escalations shall be documented with:

- Date of escalation.
- Description of the issue.
- Escalating party and escalated-to party.
- Supporting evidence or context.
- Resolution decision and rationale.
- Date of resolution.

Escalation records shall be retained as part of the project documentation and are subject to review by Internal Audit.

---

## 10. Metrics and Reporting

*Define the key performance indicators and reporting obligations associated with this procedure.*

### 10.1 Key Performance Indicators (KPIs)

The following KPIs shall be tracked for each project subject to this procedure:

| KPI | Description | Target | Reporting Frequency |
|---|---|---|---|
| Requirements completeness rate | % of requirements with all mandatory fields populated | 100% | At each project phase gate |
| Security requirements coverage | % of mandatory security coverage areas explicitly addressed | 100% | At requirements baseline |
| Traceability coverage — SEC/REG | % of security/regulatory requirements traced to verified test cases | 100% | At project closure |
| Traceability coverage — FUNC/NFR | % of functional/NFR requirements traced to test cases | ≥95% / ≥90% | At project closure |
| Requirements change rate | % of baselined requirements changed during the project | Target: <[X]% | Monthly |
| Failed security requirements at SIT | Number of security requirements failing SIT | Target: 0 Critical | Per SIT completion |
| Requirements closure report on time | % of projects with closure report submitted within [X] days of go-live | 100% | Quarterly |

### 10.2 Reporting

The PM shall include a requirements management status summary in the regular **Project Status Report**, covering:

- Total requirements count and status breakdown.
- RTM coverage statistics.
- Open change requests.
- Escalations (if any).

The [Department Head — IT/Technology] shall include an aggregated requirements management KPI summary in the **quarterly IT Risk and Governance Report** presented to [Risk Committee / Management Committee].

---

## 11. Exceptions and Waivers

*Define the process for handling justified deviations from this procedure.*

### 11.1 Exception Criteria

An exception to this procedure may be considered where:

- Strict compliance would present a demonstrably higher risk than the controlled deviation.
- Emergency circumstances require expedited action (post-facto compliance required within [X] business days).
- The project scope is sufficiently limited that full procedure application would be disproportionate (subject to approval).

### 11.2 Exception Process

| Step | Action | Responsible |
|---|---|---|
| 1 | Submit Exception Request Form (Appendix I) with full justification, risk assessment, and proposed compensating controls | PM / BA |
| 2 | Review exception for security and compliance impact | ISO |
| 3 | Approve or reject the exception request | [Department Head — IT/Technology] + CISO |
| 4 | Log approved exception in the Exceptions Register ([Document ID]) | ISO / Risk Manager |
| 5 | Review exception at project closure and assess for permanent policy update if warranted | [Department Head — IT/Technology] |

All approved exceptions shall be reported to Internal Audit on a quarterly basis.

---

## 12. Review and Update History

*Record all versions of this document, including what changed and who approved the change.*

| Version | Date | Author | Reviewed By | Approved By | Summary of Changes |
|---|---|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | [Approver Name, Title] | Initial issue |
| [1.1] | [Date] | [Author Name, Title] | [Reviewer Name, Title] | [Approver Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Reviewer Name, Title] | [Approver Name, Title] | [Description of changes — major revision] |

*This procedure shall be reviewed at least annually, or upon:*
- *Material change to BNM RMiT or other applicable regulatory requirements.*
- *Significant change to [Organization Name]'s technology or security landscape.*
- *Material audit finding related to requirements management.*
- *Recommendation from Internal Audit or external assessors.*

---

## 13. Review and Approval

*Formal sign-off for this version of the procedure.*

### 13.1 Prepared By

| Name | Title | Department | Date | Signature |
|---|---|---|---|---|
| [Name] | [Title] | [Department] | [Date] | |

### 13.2 Reviewed By

| Name | Title | Department | Review Date | Signature |
|---|---|---|---|---|
| [Name] | Information Security Officer | [Information Security] | [Date] | |
| [Name] | Risk Manager | [Risk Management] | [Date] | |
| [Name] | [Technical Lead / System Architect] | [IT / Technology] | [Date] | |

### 13.3 Approved By

| Name | Title | Department | Approval Date | Signature |
|---|---|---|---|---|
| [Name] | [Department Head — IT/Technology] | [IT / Technology] | [Date] | |
| [Name] | Chief Information Security Officer | [Information Security] | [Date] | |

---

## 14. References

*List all external and internal references cited in this document.*

### 14.1 Regulatory References

| Reference | Title | Publisher | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | **10.5** — Security Requirements; 10.1–10.4 — System Development |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 — Security Standard |
| NACSA | National Cyber Security Policy and Directives | National Cyber Security Agency (NACSA) | CII requirements |
| BNM/RH/PD 028-109 | Guidelines on Management of IT Risk (GITIR) | Bank Negara Malaysia | As applicable |

### 14.2 Standards References

| Reference | Title | Publisher | Relevant Section(s) |
|---|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | ISO/IEC | Clause A.8.26 |
| ISO/IEC 27002:2022 | Information Security Controls | ISO/IEC | 8.26 — Application Security Requirements |
| OWASP ASVS | Application Security Verification Standard | OWASP | All levels, aligned to project risk |
| NIST SP 800-160 | Systems Security Engineering | NIST | Requirements engineering guidance |

### 14.3 Internal Document References

| Document ID | Title |
|---|---|
| [IS-POL-001] | Information Security Policy |
| [IS-POL-002] | Secure System Development Lifecycle (SSDLC) Policy |
| [IT-POL-003] | Change Management Policy |
| [IT-POL-004] | Third-Party and Vendor Risk Management Policy |
| [RM-POL-005] | Enterprise Risk Management Policy |
| [DG-POL-006] | Data Governance and Classification Policy |
| [IT-PROC-XXX] | Change Management Procedure |
| [IT-PROC-XXX] | Incident Response Procedure |
| [IT-PROC-XXX] | Vendor Security Assessment Procedure |

---

## 15. Appendices

*The following appendices provide supporting templates, forms, and reference material for use with this procedure.*

---

### Appendix A — Streamlined Requirements Log (Low Risk Projects)

*For use by projects classified as Low Risk, as approved by the Department Head. This form satisfies the minimum requirements management obligation for such projects.*

| Req ID | Description | Type | Priority | Source | Owner | Acceptance Criteria | Status | Verification Notes |
|---|---|---|---|---|---|---|---|---|
| REQ-001 | [Description] | [SEC/FUNC/NFR] | [Critical/High/Med/Low] | [Source] | [Owner] | [Criteria] | [Status] | [Notes] |
| REQ-002 | | | | | | | | |

**Sign-off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Manager | | | |
| Information Security Officer | | | |
| Department Head (IT) | | | |

---

### Appendix B — Requirements Register Template

*Full requirements register for use on Medium, High, and Critical risk projects.*

| Req ID | Title | Description | Type | Priority | Regulatory Source | Business Source | Owner (Business) | Owner (Technical) | Acceptance Criteria | Status | Version | Notes / Dependencies |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| REQ-SEC-001 | [Title] | [Full description] | SEC | Critical | BNM RMiT 10.5 | [Source] | [Name/Role] | [Name/Role] | [Criteria] | Draft | 1.0 | |
| REQ-FUNC-001 | | | FUNC | High | N/A | [Source] | | | | Draft | 1.0 | |
| REQ-NFR-001 | | | NFR | Medium | | | | | | Draft | 1.0 | |
| REQ-DP-001 | | | DP | Critical | PDPA s.9 | | | | | Draft | 1.0 | |

---

### Appendix C — Security Requirements Review Record

*To be completed by the Information Security Officer for each security requirements review.*

**Project Name:** [Project Name]
**Review Date:** [Date]
**Reviewer:** [ISO Name and Title]
**Requirements Version Reviewed:** [Version]

| Req ID | Requirement Summary | Review Outcome | Comments / Required Changes | Reviewed By | Date |
|---|---|---|---|---|---|
| REQ-SEC-001 | [Summary] | Approved / Approved with Comments / Rejected | [Comments] | [ISO Name] | [Date] |

**Overall Review Conclusion:**

*[Approved / Conditionally Approved / Not Approved — provide summary statement]*

**ISO Signature:** _______________________________ **Date:** _______________

---

### Appendix D — Requirements Traceability Matrix (RTM) Template

*Maintained by the Business Analyst throughout the project lifecycle.*

| Req ID | Req Summary | Type | Priority | Regulatory Source | Business Source | Design Ref | Dev Ref | Test Case ID | Test Result | Verification Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| REQ-SEC-001 | [Summary] | SEC | Critical | RMiT 10.5 | [Source] | [Doc Ref] | [Code/Config Ref] | TC-001, TC-002 | Pass | [Evidence Ref] | Verified |
| REQ-FUNC-001 | | FUNC | High | | | | | | Not Tested | | Approved |

---

### Appendix E — Requirements Baseline Approval Record

**Project Name:** [Project Name]
**Baseline Version:** [e.g., v1.0-BASE]
**Baseline Date:** [Date]
**Total Requirements in Baseline:** [Number]

**Breakdown:**

| Type | Count |
|---|---|
| Security (SEC) | |
| Regulatory (REG) | |
| Functional (FUNC) | |
| Non-Functional (NFR) | |
| Data Privacy (DP) | |
| Operational (OPS) | |
| **Total** | |

**Approval Signatures:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Department Head (IT/Technology) | | | |
| Chief Information Security Officer | | | |
| Chief Risk Officer (if applicable) | | | |

---

### Appendix F — Requirements Change Request Form

**CR ID:** [CR-XXXX]
**Date Raised:** [Date]
**Raised By:** [Name, Title, Department]
**Project Name:** [Project Name]
**Affected Requirement(s):** [Req ID(s)]

**Nature of Change:** [ ] Add   [ ] Modify   [ ] Remove

**Current Requirement Text (for Modify/Remove):**
> [Current text]

**Proposed New Requirement Text (for Add/Modify):**
> [New text]

**Justification:**
[Explain the business, technical, or regulatory reason for this change]

**Impact Assessment:**

| Impact Area | Assessment |
|---|---|
| Security posture | [High / Medium / Low / None — describe] |
| Regulatory compliance | [Impacted / Not Impacted — describe] |
| Traceability (design/test updates required) | [Yes / No — describe] |
| Project scope / schedule | [Describe] |
| Cost | [Describe] |

**Risk of NOT implementing:** [Describe]

**Recommended Decision:** [ ] Approve   [ ] Reject   [ ] Defer

**Approval:**

| Role | Name | Decision | Signature | Date |
|---|---|---|---|---|
| PM | | | | |
| ISO | | | | |
| Department Head (IT) | | | | |

---

### Appendix G — Requirements Change Log

*Maintained by the BA as a running log of all approved changes to baselined requirements.*

| CR ID | Date Approved | Affected Req ID | Nature of Change | New Req Version | Approved By | Notes |
|---|---|---|---|---|---|---|
| CR-0001 | [Date] | REQ-SEC-001 | Modify | 1.1 | [Approver] | [Notes] |

---

### Appendix H — Requirements Closure Report Template

**Project Name:** [Project Name]
**Report Date:** [Date]
**Prepared By:** [BA Name, Title]
**PM:** [PM Name]

**1. Requirements Summary**

| Type | Total | Verified | Deferred | Cancelled |
|---|---|---|---|---|
| SEC | | | | |
| REG | | | | |
| FUNC | | | | |
| NFR | | | | |
| DP | | | | |
| OPS | | | | |
| **Total** | | | | |

**2. Traceability Coverage**

| Type | Required Coverage | Achieved Coverage | Pass / Fail |
|---|---|---|---|
| SEC / REG | 100% | [X]% | |
| FUNC | 95% | [X]% | |
| NFR | 90% | [X]% | |

**3. Deferred Requirements**

| Req ID | Reason for Deferral | Target Resolution Date | Risk Acceptance Reference |
|---|---|---|---|
| | | | |

**4. Outstanding Issues / Observations**

[List any unresolved issues, observations, or recommendations for post-implementation review]

**5. Lessons Learned**

[Brief summary of requirements management lessons for future projects]

**Closure Sign-off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Business Analyst | | | |
| Project Manager | | | |
| ISO | | | |
| Department Head (IT) | | | |

---

### Appendix I — Exception Request Form

**Exception ID:** [EX-XXXX]
**Date Raised:** [Date]
**Raised By:** [Name, Title, Department]
**Project Name:** [Project Name]
**Procedure Section(s) Affected:** [Section numbers]

**Description of Exception:**
[Clearly describe the specific procedure requirement for which an exception is sought]

**Justification:**
[Explain why the exception is necessary]

**Risk Assessment:**
[Describe the risk of the exception and the risk of strict compliance]

**Proposed Compensating Controls:**
[Describe any mitigating measures that will be in place during the exception period]

**Duration of Exception:** From [Date] to [Date]

**Approval:**

| Role | Name | Decision | Signature | Date |
|---|---|---|---|---|
| ISO | | Approve / Reject | | |
| Department Head (IT) | | Approve / Reject | | |
| CISO | | Approve / Reject | | |

*Approved exceptions must be reported to Internal Audit quarterly.*

---

*End of Document*

---

**[Organization Name] — Confidential**
*Requirements Management Procedure | Version 1.0 | Document ID: [Document ID]*
*This document is subject to annual review. Printed copies are uncontrolled. Refer to [document repository] for the current version.*