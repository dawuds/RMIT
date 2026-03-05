# Software Development Life Cycle (SDLC) Framework Document

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
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. This document must be reviewed annually or upon material changes to regulatory requirements, technology infrastructure, or organisational structure.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Governance Structure](#4-governance-structure)
5. [SDLC Framework Overview](#5-sdlc-framework-overview)
6. [Phase 1 – Planning and Requirements](#6-phase-1--planning-and-requirements)
7. [Phase 2 – System Design and Architecture](#7-phase-2--system-design-and-architecture)
8. [Phase 3 – Development and Secure Coding](#8-phase-3--development-and-secure-coding)
9. [Phase 4 – Code Review and Quality Gates](#9-phase-4--code-review-and-quality-gates)
10. [Phase 5 – Testing and Security Validation](#10-phase-5--testing-and-security-validation)
11. [Phase 6 – Deployment and Release Management](#11-phase-6--deployment-and-release-management)
12. [Phase 7 – Operations, Monitoring and Maintenance](#12-phase-7--operations-monitoring-and-maintenance)
13. [Phase 8 – Decommissioning and Retirement](#13-phase-8--decommissioning-and-retirement)
14. [Third-Party and Open-Source Software Management](#14-third-party-and-open-source-software-management)
15. [Change Management Integration](#15-change-management-integration)
16. [Roles and Responsibilities](#16-roles-and-responsibilities)
17. [Metrics, Reporting and Continuous Improvement](#17-metrics-reporting-and-continuous-improvement)
18. [Exceptions and Deviations](#18-exceptions-and-deviations)
19. [Review and Approval](#19-review-and-approval)
20. [References](#20-references)
21. [Appendices](#21-appendices)

---

## 1. Executive Summary

*Provide a high-level overview of the SDLC Framework, its strategic importance to [Organization Name], and its alignment with the organisation's risk appetite and regulatory obligations. This section should be written for a senior management audience and summarise the key objectives, scope, and governance underpinning the framework.*

[Organization Name] ("the Organisation") operates within a regulated financial services environment and is subject to the requirements of Bank Negara Malaysia's ("BNM") Risk Management in Technology ("RMiT") Policy Document. This Software Development Life Cycle ("SDLC") Framework Document establishes the formal, institutionalised approach by which the Organisation plans, designs, develops, tests, deploys, and retires technology systems and applications.

The SDLC Framework is a mandatory governance instrument that integrates information security, risk management, and regulatory compliance requirements at every phase of the software development process. By embedding security controls and governance gates throughout the development lifecycle, the Organisation seeks to:

- Minimise the introduction of vulnerabilities into production environments;
- Ensure the integrity, confidentiality, and availability of systems and data processed by developed or acquired applications;
- Demonstrate compliance with BNM RMiT Policy Document requirements, particularly Clause 10.4 governing application development and maintenance controls;
- Align development activities with the Organisation's Technology Risk Management Framework, Information Security Policy, and Change Management Policy;
- Establish clear accountability and oversight for all development activities, regardless of whether development is conducted internally or by third-party vendors.

This Framework applies to all software development, customisation, and significant configuration activities undertaken by or on behalf of [Organization Name]. It replaces [Previous Document Reference, if applicable] and is effective as of [Effective Date].

Senior management endorsement and active sponsorship of this Framework are essential to its effective implementation. The [Chief Information Officer / Chief Technology Officer] ("CIO/CTO") holds ultimate accountability for the Framework's maintenance and effectiveness, with day-to-day ownership delegated to the Head of Application Development.

---

## 2. Purpose and Scope

### 2.1 Purpose

*State the formal purpose of this document, the problems it addresses, and the regulatory obligations it fulfils.*

The purpose of this document is to:

1. Establish a structured, repeatable, and auditable methodology for all software development activities conducted by or on behalf of [Organization Name];
2. Define mandatory security requirements, quality controls, and governance gates that must be satisfied at each phase of the development lifecycle;
3. Assign clear roles, responsibilities, and accountabilities for development, security review, testing, and deployment activities;
4. Provide a compliance baseline for meeting the requirements of BNM RMiT Policy Document Clause 10.4 and related provisions;
5. Integrate application security practices into the Organisation's broader Technology Risk Management and Information Security frameworks;
6. Serve as the authoritative reference for all policies, standards, and procedures governing software development activities.

### 2.2 Scope

*Define the boundaries of applicability. Be explicit about what is included and excluded. Include application types, development methods, and organisational units covered.*

#### 2.2.1 In Scope

This Framework applies to:

| Category | Description |
|---|---|
| **Internal Development** | All software, applications, scripts, and systems developed by employees or contractors of [Organization Name] |
| **Outsourced Development** | Software developed by third-party vendors or service providers on behalf of [Organization Name], including offshore and nearshore arrangements |
| **System Configuration** | Significant configuration changes to commercial off-the-shelf ("COTS") software, enterprise platforms, and cloud-hosted services |
| **System Integration** | Development of integration layers, APIs, middleware, and data pipelines connecting internal or external systems |
| **Application Maintenance** | Enhancements, patches, bug fixes, and modifications to existing production applications |
| **Rapid/Agile Development** | Applications developed under Agile, DevOps, or continuous delivery methodologies |
| **Automation and Scripting** | Robotic process automation ("RPA"), macros, and batch scripts that process sensitive or regulated data |
| **Mobile Applications** | Mobile applications published or distributed by [Organization Name] to staff or customers |
| **Cloud-Native Development** | Applications developed for or deployed on cloud platforms, including PaaS and serverless environments |

#### 2.2.2 Out of Scope

The following are excluded from the primary scope of this Framework unless otherwise specified:

- Minor configuration changes with no security impact, as defined in the Organisation's Change Management Policy;
- Vendor-managed software upgrades where [Organization Name] exercises no development control;
- Proof-of-concept or sandbox activities that do not involve production data and are formally designated as experimental environments.

> **Note:** Even where activities are deemed out of scope of this Framework, they remain subject to the Organisation's Change Management Policy, Information Security Policy, and relevant BNM RMiT requirements.

#### 2.2.3 Organisational Scope

This Framework applies to the following business units and functions of [Organization Name]:

- [Application Development Department]
- [Information Technology Department]
- [Information Security Department]
- [Technology Risk Management]
- [Business Units sponsoring development projects]
- [Third-party development vendors contracted by the Organisation]

### 2.3 Objectives

*List the specific, measurable objectives this Framework is designed to achieve.*

The specific objectives of this SDLC Framework are to:

1. **Reduce Security Vulnerabilities:** Ensure that critical and high-severity security vulnerabilities are identified and remediated prior to production deployment through mandatory security testing gates;
2. **Enforce Separation of Duties:** Maintain clear separation between development, testing, and production environments and the personnel authorised to access each;
3. **Ensure Regulatory Compliance:** Demonstrate continuous compliance with BNM RMiT Clause 10.4 and related provisions through documented, auditable processes;
4. **Standardise Development Practices:** Establish consistent development standards, coding guidelines, and quality controls across all development teams;
5. **Manage Technology Risk:** Identify, assess, and mitigate technology risks arising from development activities before they materialise in production;
6. **Support Auditability:** Maintain sufficient documentation and evidence to support internal audit, external audit, and BNM supervisory review.

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Requirements

*Describe the regulatory landscape that mandates this Framework. Reference specific policy documents and clauses.*

[Organization Name] operates as a [licensed bank / insurance company / payment service provider / other regulated entity] under the supervision of Bank Negara Malaysia ("BNM"). The Organisation's development practices must comply with the following primary regulatory requirements:

| Regulatory Instrument | Issuing Authority | Relevant Provisions | Applicability |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 10.4 (Application Development and Maintenance Controls) | Mandatory |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 10.1 (Technology Risk Governance) | Mandatory |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 10.3 (Cybersecurity) | Mandatory |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11 (Technology Audit) | Mandatory |
| Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | Data minimisation, security safeguards, data subject rights | Mandatory |
| Guidelines on Management of Cyber Risk | BNM | Secure software development practices | Mandatory |
| [Other applicable BNM circulars or guidelines] | Bank Negara Malaysia | [Reference] | [Mandatory/Advisory] |

### 3.2 Internal Policy Alignment

This Framework is subordinate to, and must be read in conjunction with, the following internal policy instruments:

| Internal Policy / Framework | Document Reference | Relationship to this Framework |
|---|---|---|
| Technology Risk Management Framework | [Doc Ref] | Parent framework governing all technology risk activities |
| Information Security Policy | [Doc Ref] | Defines security classification and data handling requirements |
| Change Management Policy | [Doc Ref] | Governs the change control process for production deployments |
| Vendor Management Policy | [Doc Ref] | Governs third-party development and outsourcing arrangements |
| Data Management and Classification Policy | [Doc Ref] | Defines data classification and handling standards applicable during development |
| Business Continuity and Disaster Recovery Policy | [Doc Ref] | Development must incorporate DR and resilience requirements |
| Identity and Access Management Policy | [Doc Ref] | Access controls applicable to development environments |
| Patch and Vulnerability Management Standard | [Doc Ref] | Governs remediation timelines for identified vulnerabilities |

### 3.3 BNM RMiT Clause 10.4 – Summary of Requirements

*Summarise the key requirements of BNM RMiT Clause 10.4 that this Framework is designed to address. Do not reproduce the full text of the regulatory document; instead, provide a compliance mapping summary.*

BNM RMiT Clause 10.4 requires financial institutions to establish and maintain controls over the development and acquisition of technology systems. The key requirements addressed by this Framework include, but are not limited to:

- Formal policies and procedures for the development and acquisition of systems;
- Security requirements defined and documented prior to development commencing;
- Secure coding practices and developer security awareness training;
- Testing of security controls prior to production deployment;
- Change management controls governing the migration of software to production;
- Segregation of development, testing, and production environments;
- Controls over the use of production data in testing environments;
- Management of third-party software components and open-source libraries;
- Periodic review and update of SDLC policies and procedures.

A detailed compliance mapping between the requirements of Clause 10.4 and the specific controls established by this Framework is provided in **Appendix A**.

---

## 4. Governance Structure

### 4.1 Overview

*Describe the governance hierarchy and oversight mechanisms for SDLC activities within the Organisation. Explain how development activities are governed from the Board level down to project teams.*

Effective governance of the SDLC is essential to ensuring that development activities are aligned with the Organisation's strategic objectives, risk appetite, and regulatory obligations. [Organization Name] has established a multi-tiered governance structure that provides oversight of all development activities, with clear escalation paths and accountability at each level.

### 4.2 Governance Hierarchy

```
Board of Directors / Board Risk Committee
            |
Technology and Cybersecurity Risk Committee (TCRC)
            |
Management Technology Risk Committee (MTRC)
            |
Chief Information Officer / Chief Technology Officer
            |
Head of Application Development
            |
Application Development Teams / Project Teams
```

*Adapt the governance hierarchy above to reflect [Organization Name]'s actual committee structure.*

### 4.3 Committee and Management Responsibilities

#### 4.3.1 Board Risk Committee / Board

| Responsibility | Description |
|---|---|
| Strategic Oversight | Approves the Organisation's technology risk appetite, including risks arising from development activities |
| Policy Endorsement | Endorses the SDLC Framework and material changes thereto |
| Reporting | Receives periodic reports on technology risk, including significant incidents attributable to development defects |

#### 4.3.2 Technology and Cybersecurity Risk Committee (TCRC)

| Responsibility | Description |
|---|---|
| Framework Governance | Approves the SDLC Framework and annual review outcomes |
| Escalated Issues | Reviews and approves exceptions to SDLC requirements that have been escalated by management |
| Risk Oversight | Monitors technology risk indicators related to development activities |

*Insert the actual terms of reference for [Organization Name]'s TCRC here, or cross-reference to the TCRC Charter.*

#### 4.3.3 Management Technology Risk Committee (MTRC)

| Responsibility | Description |
|---|---|
| Operational Governance | Provides management-level oversight of development projects and SDLC compliance |
| Exception Review | Reviews and approves minor exceptions within delegated authority |
| Metrics Review | Reviews SDLC metrics and KRIs on a [monthly/quarterly] basis |
| Policy Maintenance | Recommends updates to the SDLC Framework to the TCRC |

#### 4.3.4 Chief Information Officer / Chief Technology Officer

| Responsibility | Description |
|---|---|
| Accountability | Holds ultimate management accountability for SDLC Framework effectiveness |
| Resource Allocation | Ensures adequate resources are allocated to development and security activities |
| Escalation | Escalates material SDLC failures or systemic risks to the TCRC |

#### 4.3.5 Head of Application Development

| Responsibility | Description |
|---|---|
| Framework Ownership | Day-to-day ownership and maintenance of this Framework document |
| Operational Compliance | Ensures development teams comply with SDLC requirements |
| Annual Review | Leads the annual review of this Framework |
| Training | Ensures developers receive appropriate secure coding training |

### 4.4 Project Governance

*Describe how individual development projects are governed within the SDLC Framework. Include project initiation, steering, and closure governance.*

All development projects of significant size or risk shall be subject to formal project governance, including:

1. **Project Initiation Document ("PID") / Project Charter:** Formally authorises the project, identifies the Business Owner, Project Sponsor, and Project Manager, and documents high-level scope and objectives.

2. **Project Steering Committee:** For projects exceeding [threshold, e.g., RM 500,000 / 6 months / classified as High risk], a Project Steering Committee shall be established comprising representatives from IT, Business, Risk, and Security.

3. **Stage-Gate Reviews:** The SDLC Framework mandates mandatory gate reviews at defined phase boundaries. Gate approval is required before progressing to the next phase. Gate reviewers and approvers are specified per phase in Sections 6–13.

4. **Project Closure:** All projects must undergo formal closure, including a post-implementation review ("PIR") within [30/60/90] days of production deployment.

| Project Risk Classification | Governance Requirement |
|---|---|
| **Critical** (impacts core banking / customer data / regulatory systems) | Full SDLC compliance; MTRC reporting; Security Architecture Review mandatory |
| **High** (significant functional impact; moderate data sensitivity) | Full SDLC compliance; Head of Application Development sign-off |
| **Medium** (limited functional impact; internal systems) | Standard SDLC compliance; Team Lead sign-off |
| **Low** (minor enhancements; no sensitive data; low business impact) | Streamlined SDLC; peer review required |

*The project risk classification methodology shall be defined in the Project Risk Assessment Standard [Document Reference].*

### 4.5 SDLC Methodology Selection

*Describe which development methodologies are approved for use within the Organisation and how each methodology is expected to comply with this Framework.*

[Organization Name] recognises that development teams may employ different methodologies based on project type, team structure, and business requirements. The following methodologies are approved:

| Methodology | Applicability | SDLC Gate Adaptation |
|---|---|---|
| **Waterfall** | Large-scale, complex, regulatory-critical systems | Sequential gate reviews as defined in Sections 6–13 |
| **Agile / Scrum** | Iterative product development; customer-facing applications | Security gates embedded within sprint reviews and release ceremonies |
| **Kanban** | Continuous maintenance and small enhancements | Lightweight gates; security review required before each production push |
| **DevOps / CI/CD** | Cloud-native, high-frequency deployment environments | Automated security gates (SAST, DAST, SCA) integrated into pipeline; manual review for significant releases |
| **Hybrid** | Mixed approaches as approved by Head of Application Development | Gates adapted and documented in the Project Development Plan |

Regardless of the methodology employed, all projects must satisfy the mandatory security requirements specified in this Framework. The form of evidence may differ (e.g., sprint-level security review logs versus formal gate review sign-off documents), but the substance of the requirement must be met.

---

## 5. SDLC Framework Overview

### 5.1 SDLC Phases

*Provide a high-level overview of the SDLC phases defined by this Framework and how they interrelate. A diagram or table summary is recommended.*

The [Organization Name] SDLC Framework comprises eight distinct phases, each with defined objectives, mandatory activities, security requirements, and governance gates. The phases are:

| Phase | Name | Key Objective | Mandatory Gate |
|---|---|---|---|
| 1 | Planning and Requirements | Define business needs, security requirements, and risk assessment | Requirements Approval Gate |
| 2 | System Design and Architecture | Produce secure system design with architecture review | Design Approval Gate |
| 3 | Development and Secure Coding | Build the system in accordance with secure coding standards | Code Completion Checkpoint |
| 4 | Code Review and Quality Gates | Independent review of code quality and security | Code Review Approval Gate |
| 5 | Testing and Security Validation | Validate functionality, performance, and security | Test Completion Gate |
| 6 | Deployment and Release Management | Controlled promotion of software to production | Production Deployment Approval |
| 7 | Operations, Monitoring and Maintenance | Ongoing security monitoring and maintenance | Periodic Review |
| 8 | Decommissioning and Retirement | Secure retirement of systems at end-of-life | Decommission Approval Gate |

### 5.2 Mandatory Security Integration Points

*Summarise the mandatory security activities that must occur at each phase. This provides a quick reference for developers and project managers.*

Security is not a single phase or activity but a continuous thread woven through every phase of the SDLC. The following table summarises the mandatory security integration points:

| Phase | Mandatory Security Activity | Evidence Required |
|---|---|---|
| Planning | Security requirements elicitation; threat modelling initiation; Privacy Impact Assessment (where applicable) | Security Requirements Document; PIA initiation log |
| Design | Security architecture review; threat modelling completion; data flow analysis; cryptographic controls specification | Security Architecture Review sign-off; Threat Model document |
| Development | Secure coding standards compliance; use of approved libraries; secrets management compliance | Secure coding checklist; developer attestation |
| Code Review | Static Application Security Testing (SAST); peer code review with security focus; dependency scanning | SAST report; code review sign-off |
| Testing | Dynamic Application Security Testing (DAST); penetration testing (where required); security regression testing; vulnerability remediation | DAST report; penetration test report; vulnerability closure evidence |
| Deployment | Change Advisory Board approval; deployment checklist; security configuration validation | CAB approval record; deployment checklist; go/no-go sign-off |
| Operations | Continuous vulnerability monitoring; security patching; security incident response | Vulnerability scan reports; patch management records |
| Decommissioning | Secure data disposal; access revocation; dependency mapping and removal | Data disposal certificate; access revocation log |

### 5.3 Environment Architecture

*Describe the required environment separation to support the SDLC. BNM RMiT requires clear segregation between development, testing, and production environments.*

[Organization Name] maintains a minimum of three segregated environments for all significant development projects:

| Environment | Purpose | Data Permitted | Access |
|---|---|---|---|
| **Development (DEV)** | Active development and unit testing | Synthetic or anonymised test data only | Development team only |
| **Testing / Staging (SIT/UAT)** | System integration testing, user acceptance testing, security testing | Synthetic or anonymised test data only | Test team, Business users (UAT), Security team |
| **Production (PROD)** | Live operational system | Live production data | Operations team only; no developer access without approved change |

**Production Data in Testing:** The use of production data in development or testing environments is **prohibited** unless formally approved through the Data Classification Exemption process, subject to anonymisation/masking requirements, and documented with appropriate data handling controls. Refer to the [Data Management and Classification Policy, Document Reference] for requirements.

**Environment Access Controls:**
- Developers must not have access to production environments except through the approved change management process.
- Access to each environment must be governed by the Organisation's Identity and Access Management Policy.
- All access to environments must be logged and subject to periodic access review.

---

## 6. Phase 1 – Planning and Requirements

### 6.1 Phase Objectives

*Describe the objectives of the Planning and Requirements phase. This section should explain what must be achieved before development can proceed.*

The Planning and Requirements phase establishes the foundation for a secure, compliant, and fit-for-purpose software development project. The primary objectives of this phase are to:

- Define and document business requirements in sufficient detail to guide development;
- Identify and document information security requirements applicable to the proposed system;
- Conduct an initial technology risk assessment and classify the project;
- Initiate a Privacy Impact Assessment where personal data will be collected, processed, or stored;
- Develop a project plan, resource plan, and governance structure;
- Obtain formal approval to proceed to the Design phase.

### 6.2 Business Requirements Analysis

*Provide guidance on how business requirements should be captured and documented during this phase.*

The Business Owner, in collaboration with the Project Manager and Business Analyst, shall produce a **Business Requirements Document ("BRD")** or equivalent artefact that captures:

| Requirement Category | Description | Responsible |
|---|---|---|
| Functional Requirements | What the system must do; features and capabilities required | Business Owner, Business Analyst |
| Non-Functional Requirements | Performance, availability, scalability, and capacity requirements | Project Manager, Architecture team |
| Regulatory and Compliance Requirements | Specific regulatory obligations applicable to the system (e.g., data retention, audit trail) | Risk and Compliance, Legal |
| Integration Requirements | Systems and data sources with which the new system must integrate | Architecture team, Application Development |
| Data Requirements | Data types, sensitivity classification, retention periods, and processing purposes | Data Owner, Information Security |

The BRD must be reviewed and signed off by the Business Owner before the project progresses to the Design phase.

### 6.3 Security Requirements Elicitation

*This is a mandatory activity under BNM RMiT Clause 10.4. Security requirements must be defined before design begins, not retrospectively.*

Security requirements must be formally identified and documented during the Planning phase. The Information Security team shall participate in requirements workshops to ensure that security requirements are comprehensive and aligned with the Organisation's security policies and applicable regulatory standards.

**Minimum Security Requirements to be Addressed:**

- **Authentication and Authorisation:** Multi-factor authentication requirements; role-based access control ("RBAC") specifications; privileged access requirements;
- **Data Protection:** Encryption requirements at rest and in transit; data masking and tokenisation requirements; key management requirements;
- **Audit Logging:** Events to be logged; log retention periods; tamper-evident logging requirements;
- **Session Management:** Session timeout requirements; concurrent session controls;
- **Input Validation:** Requirements for validation of user inputs and API inputs to prevent injection attacks;
- **Error Handling:** Requirements for secure error handling and suppression of sensitive information in error messages;
- **Availability:** Recovery Time Objective ("RTO") and Recovery Point Objective ("RPO") requirements;
- **Third-Party Integration Security:** Security requirements for APIs, web services, and data feeds from external parties.

**Security Requirements Document:** The Information Security team shall produce or review a **Security Requirements Document ("SRD")** that documents all mandatory security controls for the project. The SRD shall be maintained throughout the project and updated if scope or requirements change.

### 6.4 Technology Risk Assessment

*Describe the initial technology risk assessment that must be conducted during the Planning phase.*

The Technology Risk Management team shall conduct an initial technology risk assessment to:

1. Classify the project risk level (Critical / High / Medium / Low) in accordance with the risk classification criteria defined in Section 4.4;
2. Identify applicable regulatory requirements and compliance obligations;
3. Identify key risk areas to be managed throughout the project;
4. Determine whether a formal Security Architecture Review ("SAR") is required;
5. Determine whether a formal Privacy Impact Assessment ("PIA") is required under PDPA 2010.

The outcome of the risk assessment shall be documented and form part of the project initiation package.

### 6.5 Privacy Impact Assessment (PIA)

*PDPA compliance requires that privacy considerations are assessed before development commences where personal data is involved.*

Where the proposed system will collect, process, store, or transmit personal data as defined under the Personal Data Protection Act 2010, the Project Manager shall initiate a Privacy Impact Assessment in coordination with the Data Protection Officer ("DPO") and the Information Security team.

The PIA shall assess:

| PIA Component | Description |
|---|---|
| Personal data inventory | Categories of personal data to be processed; data subjects affected |
| Purpose and lawful basis | Purposes for processing; applicable lawful basis under PDPA 2010 |
| Data flows | How personal data will flow through the system; cross-border transfers |
| Data minimisation | Whether data collection is limited to what is necessary |
| Privacy risks | Identified privacy risks and proposed mitigations |
| Consent mechanisms | Where consent is required, how it will be obtained and recorded |

The PIA must be completed and reviewed by the DPO prior to the Design phase gate review.

### 6.6 Planning Phase Gate Review – Requirements Approval Gate

*Define the gate review process and the criteria that must be satisfied before the project can proceed to Phase 2.*

The Requirements Approval Gate is a formal checkpoint that must be passed before the Design phase commences. The gate review shall be conducted by the [Head of Application Development / Project Steering Committee] and must verify that:

**Gate Entry Criteria:**

| Criterion | Verified By | Status |
|---|---|---|
| Business Requirements Document (BRD) completed and signed off by Business Owner | Project Manager | [ ] |
| Security Requirements Document (SRD) reviewed and approved by Information Security | Information Security Manager | [ ] |
| Technology Risk Assessment completed and project classified | Technology Risk Management | [ ] |
| Privacy Impact Assessment initiated (where applicable) | Data Protection Officer | [ ] |
| Project plan, resource plan, and budget approved | Project Sponsor | [ ] |
| Development environment provisioning requested | Infrastructure team | [ ] |

**Gate Approver:** [Head of Application Development / Project Steering Committee Chair]

**Gate Documentation:** The completed gate review checklist, along with all supporting artefacts, shall be retained in the project repository and available for audit.

---

## 7. Phase 2 – System Design and Architecture

### 7.1 Phase Objectives

*Describe the objectives of the Design phase, emphasising the security architecture requirements.*

The System Design and Architecture phase translates the approved requirements into a detailed technical design that provides a secure, scalable, and maintainable blueprint for development. The primary objectives of this phase are to:

- Produce a high-level and detailed system architecture that incorporates security controls by design;
- Complete a formal Security Architecture Review;
- Finalise the threat model for the system;
- Define data flows, integration points, and API specifications;
- Specify cryptographic controls, key management approach, and data protection mechanisms;
- Obtain formal design approval before development commences.

### 7.2 System Architecture Design

*Describe the required content and format for system architecture documentation.*

The Architecture team, in collaboration with the development team, shall produce a **System Architecture Document ("SAD")** comprising:

| Architecture Component | Description |
|---|---|
| **Architecture Overview** | High-level description of the system; technology stack; deployment model (on-premises, cloud, hybrid) |
| **Component Diagram** | Logical components of the system and their interactions |
| **Network Architecture** | Network topology; firewall zones; load balancers; DMZ placement; network segmentation |
| **Data Architecture** | Data model overview; data flows between components; data classification |
| **Integration Architecture** | APIs and integration points with internal and external systems; integration security controls |
| **Infrastructure Architecture** | Compute, storage, and networking resources; high availability and disaster recovery design |
| **Security Architecture** | Security controls by layer (network, application, data, identity); cryptographic specifications |
| **Logging and Monitoring Architecture** | Security event sources; SIEM integration; alerting design |

### 7.3 Security Architecture Review

*Define the mandatory Security Architecture Review process, which is required for Critical and High risk projects.*

For projects classified as **Critical** or **High** risk, a formal Security Architecture Review ("SAR") shall be conducted by the Information Security team. For **Medium** and **Low** risk projects, a Security Architecture Checklist review shall be conducted.

The SAR shall assess:

1. Alignment of the proposed architecture with the Organisation's security architecture standards and principles (e.g., defence in depth, least privilege, zero trust principles where applicable);
2. Adequacy of network segmentation and boundary controls;
3. Authentication and authorisation mechanisms, including privileged access management;
4. Cryptographic controls and key management approach;
5. Logging and monitoring coverage;
6. Secure communication channels (TLS standards, certificate management);
7. Third-party and API security;
8. Cloud security controls (if applicable), including shared responsibility model alignment;
9. Compliance with applicable security standards (e.g., OWASP, NIST).

The SAR outcome (Approved / Approved with Conditions / Not Approved) and findings shall be documented in a **Security Architecture Review Report** and tracked to resolution.

### 7.4 Threat Modelling

*Threat modelling is a key security activity that should be completed during the design phase to identify security risks before development begins.*

Threat modelling shall be conducted for all **Critical** and **High** risk projects, and is strongly recommended for **Medium** risk projects. The threat modelling exercise shall:

- Identify assets requiring protection;
- Enumerate potential threat actors and attack vectors using the STRIDE methodology (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) or an equivalent framework;
- Identify and document potential threats and vulnerabilities in the proposed design;
- Assess the likelihood and impact of identified threats;
- Define mitigating controls to be incorporated into the design and development;
- Produce a **Threat Model Document** that is reviewed and approved by the Information Security team.

| Threat Category (STRIDE) | Example Threats | Mitigation Approach |
|---|---|---|
| **Spoofing** | Impersonation of users or services | Strong authentication; mutual TLS; API keys |
| **Tampering** | Unauthorised modification of data or code | Data integrity checks; digital signatures; input validation |
| **Repudiation** | Denial of having performed an action | Audit logging; non-repudiation mechanisms |
| **Information Disclosure** | Unauthorised access to sensitive data | Encryption; access controls; data masking |
| **Denial of Service** | Disruption of system availability | Rate limiting; DDoS protection; capacity planning |
| **Elevation of Privilege** | Gaining unauthorised elevated access | Least privilege; RBAC; privilege separation |

*Complete the threat model table above with specific threats identified for [System Name] and the agreed mitigations.*

### 7.5 Data Flow Analysis

*Describe the data flow analysis requirements to support both security and PDPA compliance.*

A formal data flow analysis shall be conducted to:

- Map all data flows into, within, and out of the system;
- Identify data classification at each flow point;
- Confirm that encryption is applied to sensitive data flows;
- Identify where personal data flows cross organisational or jurisdictional boundaries;
- Inform the Privacy Impact Assessment.

The data flow diagram ("DFD") shall be documented in the System Architecture Document and maintained as part of the system documentation throughout the system's lifecycle.

### 7.6 Design Phase Gate Review – Design Approval Gate

**Gate Entry Criteria:**

| Criterion | Verified By | Status |
|---|---|---|
| System Architecture Document (SAD) completed and reviewed | Head of Application Development | [ ] |
| Security Architecture Review completed; all findings addressed or accepted with residual risk sign-off | Information Security Manager | [ ] |
| Threat Model completed and reviewed | Information Security Manager | [ ] |
| Data Flow Diagram completed; personal data flows identified and Privacy Impact Assessment updated | Data Protection Officer | [ ] |
| API and integration specifications documented and reviewed | Architecture team | [ ] |
| Cryptographic standards and key management approach approved | Information Security Manager | [ ] |
| Design signed off by Business Owner | Business Owner | [ ] |

**Gate Approver:** [Head of Application Development / Project Steering Committee Chair]

---

## 8. Phase 3 – Development and Secure Coding

### 8.1 Phase Objectives

*Describe the objectives of the Development phase and establish the mandatory secure coding requirements.*

The Development phase involves the actual construction of the software system in accordance with the approved design and security requirements. The primary objectives of this phase are to:

- Build the system in compliance with the Organisation's secure coding standards and guidelines;
- Implement the security controls specified in the Security Requirements Document and Security Architecture Review;
- Ensure all developers adhere to approved coding standards and development practices;
- Maintain secure management of code, credentials, and development artefacts;
- Conduct continuous unit testing and developer-level security testing throughout development.

### 8.2 Secure Coding Standards

*Define the secure coding standards that all developers must follow. Reference specific standards frameworks and map them to development languages used by the Organisation.*

All developers at [Organization Name] shall adhere to the following secure coding standards and guidelines:

#### 8.2.1 Core Secure Coding Principles

| Principle | Description |
|---|---|
| **Input Validation** | All user inputs and external data must be validated, sanitised, and appropriately encoded before use |
| **Output Encoding** | All data rendered in web interfaces must be properly encoded to prevent Cross-Site Scripting (XSS) |
| **Authentication** | Implement strong authentication mechanisms; never develop custom cryptographic or authentication algorithms |
| **Authorisation** | Enforce least privilege; implement authorisation checks server-side, not only client-side |
| **Session Management** | Implement secure session management; use framework-provided session mechanisms |
| **Cryptography** | Use only approved cryptographic algorithms and approved libraries; never implement custom cryptography |
| **Error Handling** | Implement generic error messages to users; log detailed errors securely server-side only |
| **Logging** | Log security-relevant events; never log credentials, tokens, or sensitive personal data |
| **Data Protection** | Encrypt sensitive data at rest and in transit; implement data masking where required |
| **Dependency Management** | Use only approved third-party libraries; keep dependencies current; conduct dependency vulnerability scanning |

#### 8.2.2 Approved Cryptographic Standards

| Use Case | Approved Algorithm / Standard | Prohibited |
|---|---|---|
| Symmetric Encryption | AES-256 | DES, 3DES, RC4 |
| Asymmetric Encryption | RSA-2048 (minimum), ECC P-256 | RSA < 2048 |
| Hashing (general) | SHA-256, SHA-384, SHA-512 | MD5, SHA-1 |
| Password Hashing | bcrypt, scrypt, Argon2 | Plain SHA-1/SHA-256 without salt |
| TLS/Transport | TLS 1.2 (minimum), TLS 1.3 preferred | SSL 2.0/3.0, TLS 1.0, TLS 1.1 |
| Key Length | As per algorithm specifications above | Keys below minimum length |

*[Organization Name] shall review and update approved cryptographic standards at least annually to reflect advances in cryptanalysis and changes in regulatory guidance.*

#### 8.2.3 Language-Specific Secure Coding Guidelines

*Complete the table below with the programming languages used within [Organization Name] and the applicable secure coding guidelines.*

| Programming Language | Secure Coding Reference | Key Controls |
|---|---|---|
| [Java] | OWASP Java Security; SEI CERT Java Coding Standard | Input validation; parameterised queries; secure serialisation |
| [Python] | OWASP Python Security; Bandit static analysis | Injection prevention; secure pickle usage; dependency management |
| [JavaScript / Node.js] | OWASP Node.js Security; npm audit | XSS prevention; SSRF protection; secure npm dependency management |
| [.NET / C#] | Microsoft SDL; OWASP .NET Security | SQL injection prevention; secure configuration; code access security |
| [SQL / PL-SQL] | OWASP SQL Injection Prevention | Parameterised queries; stored procedures; least privilege database accounts |
| [Other languages] | [Reference] | [Key controls] |

### 8.3 Secrets and Credential Management

*Hardcoded credentials and secrets in source code are a critical security risk. This section defines the mandatory requirements for secrets management during development.*

**Prohibited Practices:**

- Hardcoding of credentials, API keys, tokens, certificates, or passwords in source code;
- Storage of secrets in version control repositories (including private repositories);
- Transmission of secrets in plaintext via email, messaging platforms, or unencrypted channels.

**Required Practices:**

- All application secrets must be stored in the Organisation's approved secrets management solution: [Secrets Management Tool, e.g., HashiCorp Vault / Azure Key Vault / AWS Secrets Manager];
- Environment-specific configuration (including connection strings and credentials) must be managed through the approved configuration management process, not embedded in application code;
- Pre-commit hooks shall be implemented in all development repositories to scan for hardcoded credentials using approved scanning tools;
- Developers who accidentally commit secrets must immediately report the incident to the Information Security team, and the secret must be rotated without delay.

### 8.4 Source Code Management

*Define the requirements for managing source code securely throughout the development phase.*

| Requirement | Standard |
|---|---|
| **Version Control** | All source code must be maintained in the Organisation's approved version control system: [Source Control System, e.g., GitLab / GitHub Enterprise / Azure DevOps] |
| **Branching Strategy** | Developers must follow the approved branching strategy: [e.g., GitFlow / trunk-based development] |
| **Code Commit Standards** | All commits must be associated with an approved work item or change ticket |
| **Repository Access** | Access to source code repositories must be governed by the IAM Policy; repository access is reviewed quarterly |
| **Repository Configuration** | Repositories must not be public; force-push to protected branches is disabled; branch protection rules enforced |
| **Backup** | Source code repositories are backed up in accordance with the Organisation's backup standards |

### 8.5 Development Environment Security

*Describe the security requirements for development environments, including workstation security and environment access controls.*

Development environments must meet the following minimum security requirements:

- Development environments must be logically isolated from production environments; direct connectivity between development and production systems is prohibited;
- Developer workstations must comply with the Organisation's endpoint security standards, including full-disk encryption, endpoint protection software, and operating system patch compliance;
- Access to development environments must be reviewed and revoked upon role change or departure;
- Developers must not store production data on local workstations or unencrypted portable media;
- Remote development access must use the Organisation's approved secure remote access mechanism (VPN or equivalent) with MFA.

### 8.6 Developer Security Training

*BNM RMiT and secure SDLC best practice require that developers receive regular training in secure coding practices.*

All developers, including contracted developers, must complete the following training requirements:

| Training | Frequency | Audience | Provider |
|---|---|---|---|
| Secure Coding Fundamentals | Upon onboarding | All developers | [Internal / External Provider] |
| Annual Secure Coding Refresher | Annual | All developers | [Internal / External Provider] |
| OWASP Top 10 Awareness | Annual | All developers | [Internal / External Provider] |
| Language / Framework-Specific Security | As required | Relevant developers | [Internal / External Provider] |
| Security Champion Training | Upon designation | Security Champions | [Internal / External Provider] |

Training completion records shall be maintained by [HR / L&D / Information Security] and made available for audit.

---

## 9. Phase 4 – Code Review and Quality Gates

### 9.1 Phase Objectives

*Describe the purpose and objectives of the Code Review and Quality Gates phase.*

Code review and quality gating are critical controls that detect defects, security vulnerabilities, and deviations from coding standards before software progresses to testing. The objectives of this phase are to:

- Verify that developed code adheres to the Organisation's secure coding standards;
- Identify security vulnerabilities through automated static analysis and human code review;
- Identify functional defects and code quality issues that could impact system reliability or maintainability;
- Ensure that all identified findings are tracked, remediated, and verified before progression to testing.

### 9.2 Static Application Security Testing (SAST)

*Define the mandatory SAST requirements. SAST tools analyse source code or compiled code for security vulnerabilities without executing the code.*

Static Application Security Testing ("SAST") is a **mandatory** control for all projects classified as **Critical**, **High**, or **Medium** risk.

| SAST Requirement | Standard |
|---|---|
| **Approved SAST Tool** | [SAST Tool Name, e.g., SonarQube, Checkmarx, Veracode, Semgrep] |
| **Integration** | SAST must be integrated into the CI/CD pipeline; all code changes must be scanned automatically |
| **Scan Scope** | All first-party source code; configuration files |
| **Baseline** | A security baseline must be established at project initiation |
| **Findings Remediation** | Critical findings: must be remediated before gate approval. High findings: must be remediated or risk-accepted before gate approval. Medium/Low: tracked and remediated per agreed schedule |

**SAST Finding Severity Definitions and Remediation SLAs:**

| Severity | Definition | Remediation SLA |
|---|---|---|
| **Critical** | Directly exploitable vulnerability with high impact (e.g., SQL injection, RCE) | Must be remediated before Code Review Approval Gate |
| **High** | Significant vulnerability; exploitable under certain conditions | Must be remediated or formally risk-accepted before Code Review Approval Gate |
| **Medium** | Moderate vulnerability; requires specific conditions to exploit | Remediated within [Sprint / 30 days] of identification |
| **Low** | Minor issue; limited exploitability or impact | Tracked; remediated within [60 days] or accepted |
| **Informational** | Best practice finding; no direct vulnerability | Reviewed; addressed at developer discretion |

### 9.3 Software Composition Analysis (SCA)

*SCA tools identify vulnerabilities in third-party and open-source software components used in the application.*

Software Composition Analysis ("SCA") scanning is a **mandatory** control for all projects that incorporate third-party or open-source software components.

| SCA Requirement | Standard |
|---|---|
| **Approved SCA Tool** | [SCA Tool Name, e.g., Dependabot, Snyk, OWASP Dependency-Check, Black Duck] |
| **Bill of Materials** | A Software Bill of Materials ("SBOM") must be generated and maintained for each application |
| **License Compliance** | All third-party components must be reviewed for licence compatibility; prohibited licences defined in Appendix B |
| **Vulnerability Findings** | Severity-based remediation SLAs consistent with SAST findings above |

### 9.4 Peer Code Review

*Peer code review is a mandatory quality and security control that provides human judgement on code changes.*

All code changes must undergo peer code review prior to merging into the main or release branch. The peer code review process shall:

| Code Review Requirement | Standard |
|---|---|
| **Reviewer Independence** | Code must be reviewed by at least one developer who did not write the code being reviewed |
| **Security Champion Review** | For Critical and High risk projects, at least one reviewer must be a designated Security Champion |
| **Review Scope** | Functional correctness; adherence to coding standards; secure coding compliance; test coverage |
| **Review Documentation** | Code review must be conducted through the Organisation's approved code review tool (e.g., pull/merge request workflow); review comments and approvals must be recorded |
| **Approval Requirement** | Merging code without at least one approved peer review is prohibited (enforced through branch protection rules) |

**Code Review Checklist (Minimum):**

- [ ] Code adheres to the Organisation's coding standards and style guide
- [ ] No hardcoded credentials, API keys, or sensitive data
- [ ] Input validation is implemented for all user-supplied and external data
- [ ] SQL queries use parameterised statements; no dynamic SQL construction with user input
- [ ] Error handling is implemented; errors do not expose sensitive information
- [ ] Authorisation checks are present for all sensitive operations
- [ ] Cryptographic operations use approved algorithms and libraries
- [ ] No use of deprecated or insecure functions/libraries
- [ ] Logging is implemented for security-relevant events; no sensitive data logged
- [ ] Unit tests are present and adequate for the code change
- [ ] No commented-out dead code left in the codebase

### 9.5 Code Review Gate – Code Review Approval Gate

**Gate Entry Criteria:**

| Criterion | Verified By | Status |
|---|---|---|
| SAST scan completed; Critical and High findings remediated or formally risk-accepted | Information Security / Lead Developer | [ ] |
| SCA scan completed; Critical and High component vulnerabilities addressed | Information Security / Lead Developer | [ ] |
| Peer code review completed for all code changes; approvals recorded | Team Lead | [ ] |
| Secrets scanning completed; no hardcoded credentials detected | Lead Developer | [ ] |
| Unit test coverage meets defined threshold: [e.g., ≥ 80%] | QA Lead | [ ] |
| Code quality metrics meet defined thresholds (e.g., technical debt, code duplication) | Team Lead | [ ] |

**Gate Approver:** [Head of Application Development / Lead Developer / Security Champion]

---

## 10. Phase 5 – Testing and Security Validation

### 10.1 Phase Objectives

*Describe the objectives of the Testing and Security Validation phase, covering both functional testing and the mandatory security testing activities.*

The Testing and Security Validation phase provides independent verification that the system functions as intended and that security controls are effective prior to production deployment. The objectives of this phase are to:

- Validate that the system meets all functional requirements documented in the BRD;
- Verify that security controls specified in the SRD and Security Architecture Review are correctly implemented and effective;
- Identify and remediate vulnerabilities not detected during the Code Review phase;
- Obtain formal business acceptance through User Acceptance Testing;
- Satisfy all testing gate criteria before submitting for production deployment approval.

### 10.2 Testing Types and Requirements

*Define all mandatory and recommended testing types, with specific requirements for each.*

#### 10.2.1 Functional Testing

| Test Type | Description | Mandatory | Lead Responsibility |
|---|---|---|---|
| Unit Testing | Testing of individual code units in isolation | Mandatory (all projects) | Development team |
| Integration Testing (SIT) | Testing of interfaces and integration between system components | Mandatory (all projects) | QA team |
| System Testing | End-to-end testing of the complete system | Mandatory (all projects) | QA team |
| User Acceptance Testing (UAT) | Business user validation of system functionality | Mandatory (all projects) | Business Owner |
| Regression Testing | Verification that changes have not broken existing functionality | Mandatory (all changes to existing systems) | QA team |
| Performance and Load Testing | Validation of performance under expected and peak load | Mandatory (Critical/High risk; customer-facing) | QA / Infrastructure team |

#### 10.2.2 Security Testing

| Test Type | Description | Mandatory | Lead Responsibility |
|---|---|---|---|
| Dynamic Application Security Testing (DAST) | Active testing of running application for vulnerabilities | Mandatory (Critical/High risk) | Information Security / QA |
| Penetration Testing | Simulated adversarial attack to identify exploitable vulnerabilities | Mandatory (Critical risk; internet-facing; customer-facing) | Approved penetration testing provider |
| API Security Testing | Testing of API endpoints for authentication, authorisation, and injection vulnerabilities | Mandatory where APIs are exposed | Information Security / QA |
| Security Configuration Review | Review of system and infrastructure configuration against security hardening baselines | Mandatory (Critical/High risk) | Information Security |
| Vulnerability Assessment | Automated scanning for known vulnerabilities in application and infrastructure components | Mandatory (all projects) | Information Security |
| Security Regression Testing | Verification that previously identified vulnerabilities have been remediated and have not re-emerged | Mandatory following remediation of Critical/High findings | Information Security |

### 10.3 Dynamic Application Security Testing (DAST)

*Describe the DAST requirements and process.*

DAST shall be conducted in the testing environment against a fully deployed instance of the application. DAST tests the application from the outside, as an attacker would, and can detect vulnerabilities that are not visible through static analysis.

| DAST Requirement | Standard |
|---|---|
| **Approved DAST Tool** | [DAST Tool Name, e.g., OWASP ZAP, Burp Suite Enterprise, Nessus Web Application Scanner] |
| **Test Scope** | All web application entry points; authenticated and unauthenticated flows; API endpoints |
| **Authenticated Scanning** | DAST scans must include authenticated scanning to test logged-in user functionality |
| **Findings Treatment** | Consistent with SAST findings severity and remediation SLAs (Section 9.2) |

### 10.4 Penetration Testing Requirements

*Define when penetration testing is required, who may conduct it, and how results must be managed.*

Penetration testing is required for:

- New systems classified as **Critical** risk;
- Significant changes to internet-facing or customer-facing systems;
- Systems that handle payment card data, where PCI-DSS scope applies;
- Systems that handle large volumes of personal data;
- Any system where significant changes to authentication, authorisation, or cryptographic controls have been made.

| Penetration Testing Requirement | Standard |
|---|---|
| **Provider** | Penetration testing must be conducted by an approved, qualified provider (internal security team or approved external firm with relevant certifications, e.g., CREST, OSCP) |
| **Methodology** | Testing must be conducted in accordance with a recognised methodology (e.g., OWASP Testing Guide, PTES, NIST SP 800-115) |
| **Scope Agreement** | Scope, rules of engagement, and authorisation must be documented and agreed before testing commences |
| **Report** | A formal penetration testing report must be produced, covering methodology, findings, risk ratings, and remediation recommendations |
| **Remediation** | Critical and High findings must be remediated and verified before production deployment |
| **Frequency** | In addition to pre-deployment testing, internet-facing critical systems must undergo annual penetration testing |

### 10.5 Use of Test Data

*Define the requirements for test data management, particularly the prohibition on using production data in test environments.*

| Test Data Requirement | Standard |
|---|---|
| **Production Data Prohibition** | Production data must not be used in development or testing environments without formal exemption |
| **Synthetic Data** | Synthetic test data that represents realistic data volumes and characteristics must be used |
| **Data Masking** | Where use of production-derived data is approved through the exemption process, data must be irreversibly masked or anonymised prior to use in test environments |
| **Test Data Lifecycle** | Test data must be securely deleted from test environments at the end of the project or testing cycle |

### 10.6 Testing Phase Gate Review – Test Completion Gate

**Gate Entry Criteria:**

| Criterion | Verified By | Status |
|---|---|---|
| System Integration Testing (SIT) completed; all critical defects resolved | QA Lead | [ ] |
| User Acceptance Testing (UAT) completed and signed off by Business Owner | Business Owner | [ ] |
| DAST scan completed; Critical and High findings remediated or formally risk-accepted | Information Security Manager | [ ] |
| Penetration testing completed (where required); Critical and High findings remediated | Information Security Manager | [ ] |
| Security configuration review completed | Information Security Manager | [ ] |
| Performance and load testing completed and results acceptable (where required) | QA / Infrastructure Lead | [ ] |
| All test cases executed; test results documented | QA Lead | [ ] |
| Outstanding defects assessed and accepted by Business Owner and Risk team | Business Owner / Risk | [ ] |
| Privacy Impact Assessment completed and DPO sign-off obtained (where applicable) | Data Protection Officer | [ ] |

**Gate Approver:** [Head of Application Development]

---

## 11. Phase 6 – Deployment and Release Management

### 11.1 Phase Objectives

*Describe the objectives of the Deployment and Release Management phase, which is the final controlled step before software enters the live production environment.*

The Deployment and Release Management phase provides the formal governance controls that ensure only tested, approved, and securely configured software is deployed to production. This phase is critical for maintaining the integrity and security of the production environment. The objectives of this phase are to:

- Obtain formal approval for production deployment from all required stakeholders;
- Ensure the deployment process is controlled, documented, and reversible;
- Validate that the production environment is correctly configured in accordance with security hardening standards;
- Conduct post-deployment validation to confirm successful deployment and system health;
- Maintain an auditable record of all production deployments.

### 11.2 Change Management Integration

*Describe how SDLC deployments integrate with the Organisation's Change Management Process. BNM RMiT requires that changes to production are controlled through a formal change management process.*

All deployments to production must be managed through the Organisation's Change Management Process in accordance with the Change Management Policy [Document Reference]. No deployment to production may proceed without an approved Change Request.

| Change Type | Change Advisory Board (CAB) Requirement | Approval Authority |
|---|---|---|
| **Standard Change** (pre-approved, low-risk, routine) | Standard changes may be deployed under pre-approved procedures without full CAB review | [Head of Operations / Change Manager] |
| **Normal Change** (assessed, scheduled, medium to high risk) | Full CAB review and approval required | Change Advisory Board |
| **Emergency Change** (urgent, unplanned, requires immediate action) | Emergency CAB approval; retrospective full CAB review within [5 business days] | [Emergency CAB / CTO] |

All SDLC project deployments for new systems or significant changes shall be classified as **Normal Changes** by default, unless assessed and pre-approved as Standard Changes.

### 11.3 Production Deployment Approval Process

*Define the mandatory approval process for production deployment, including all required sign-offs. This is a mandatory control under BNM RMiT.*

Production deployment of a new system or significant release shall not proceed until the following approvals have been obtained and documented:

| Approval | Approver | Basis for Approval |
|---|---|---|
| Technical Readiness | Head of Application Development | Confirmation that all SDLC gates have been passed; code is deployment-ready |
| Security Clearance | Information Security Manager | Confirmation that all Critical/High security findings are remediated; no outstanding unaccepted security risks |
| Business Acceptance | Business Owner | Confirmation of UAT sign-off; business readiness for go-live |
| Risk Acceptance (where applicable) | Chief Risk Officer / Technology Risk Manager | Formal acceptance of any residual risks associated with the deployment |
| Change Advisory Board | CAB Chair | Formal change approval; deployment window authorised |
| Infrastructure Readiness | Head of Infrastructure | Confirmation that production infrastructure is ready; DR/backup configured |

**Go/No-Go Decision:** A formal Go/No-Go meeting shall be conducted prior to each production deployment, with representation from Development, Information Security, Business, and Operations. The outcome (Go / No-Go) and any conditions shall be documented.

### 11.4 Deployment Procedure Requirements

*Define the requirements for the deployment procedure itself, including the deployment plan, rollback plan, and environment verification.*

A formal **Deployment Plan** must be produced and approved as part of the Change Request for each production deployment. The Deployment Plan must include:

| Deployment Plan Component | Description |
|---|---|
| **Deployment Steps** | Detailed, step-by-step deployment instructions; scripted automation where available |
| **Pre-Deployment Checks** | Environment health verification; backup confirmation; dependency checks |
| **Deployment Window** | Agreed deployment window; change freeze compliance |
| **Rollback Plan** | Documented and tested rollback procedure in the event of deployment failure; rollback decision criteria |
| **Post-Deployment Verification** | Test cases to be executed post-deployment to confirm system health; smoke test plan |
| **Communication Plan** | Stakeholder notification plan; user communication; support team readiness |
| **Contact List** | Escalation contacts during deployment; on-call arrangements |

**Separation of Duties:** The deployment to production must be executed by Operations or DevOps personnel, not by the development team. Developers must not have direct write access to production environments outside the approved change process.

### 11.5 Production Environment Security Configuration

*Verify that the production environment is securely configured prior to deployment.*

Prior to deployment, the Information Security team or a designated security reviewer shall verify that the production environment meets the Organisation's security hardening baseline. The security configuration review shall check:

- [ ] Operating system and middleware are at approved patch levels
- [ ] All default credentials have been changed; no default accounts enabled
- [ ] Unnecessary services, ports, and protocols are disabled
- [ ] Security hardening baseline (e.g., CIS Benchmark) has been applied
- [ ] TLS/SSL is correctly configured with approved cipher suites
- [ ] Web application firewall (WAF) is configured and enabled (where applicable)
- [ ] Intrusion detection / intrusion prevention system (IDS/IPS) is configured
- [ ] Security logging is enabled and verified to be forwarding to the SIEM
- [ ] Data backup is configured and tested
- [ ] Disaster recovery configuration is validated
- [ ] Access controls have been configured per the access control specification

### 11.6 Post-Deployment Review

*Define the requirements for the post-deployment review and hypercare period.*

Following each production deployment, a **Post-Deployment Review** shall be conducted within [5 business days] to confirm:

- The deployment achieved the intended objectives;
- No unexpected impacts on production systems or users were observed;
- All post-deployment verification tests were passed;
- Security monitoring is active and baseline alerts are functioning;
- Any issues identified during deployment have been documented and tracked.

For major releases, a formal **Post-Implementation Review ("PIR")** shall be conducted within [30/60] days of go-live, assessing the project against its original objectives, budget, and risk assessments.

---

## 12. Phase 7 – Operations, Monitoring and Maintenance

### 12.1 Phase Objectives

*Describe the ongoing security obligations for systems in production.*

Once a system has been deployed to production, the SDLC lifecycle continues through the operational phase. The objectives of this phase are to:

- Maintain the security posture of the system throughout its operational life;
- Ensure timely identification and remediation of newly discovered vulnerabilities;
- Conduct periodic security assessments and reviews;
- Manage changes to the operational system through the Change Management process;
- Maintain up-to-date system documentation throughout the system's lifecycle.

### 12.2 Vulnerability Management

*Define the ongoing vulnerability management requirements for production systems.*

All production systems must be subject to ongoing vulnerability management in accordance with the Organisation's Patch and Vulnerability Management Standard [Document Reference]:

| Vulnerability Management Activity | Frequency | Responsible |
|---|---|---|
| Automated vulnerability scanning | [Weekly / Monthly] | Information Security / Operations |
| Web application vulnerability scanning | [Monthly / Quarterly] | Information Security |
| Penetration testing (internet-facing / critical systems) | Annual | Approved penetration testing provider |
| Security patch assessment | Continuous / upon patch release | Operations / Application Development |
| Critical patch deployment | Within [7 days] of release | Operations |
| High patch deployment | Within [30 days] of release | Operations |
| Medium patch deployment | Within [90 days] of release | Operations |

### 12.3 Security Monitoring

*Describe the security monitoring requirements for production systems.*

All production systems must generate security-relevant log events that are forwarded to the Organisation's Security Information and Event Management ("SIEM") system. Minimum logging requirements include:

| Log Event Category | Examples |
|---|---|
| Authentication events | Successful and failed login attempts; MFA events; account lockouts |
| Authorisation events | Access denials; privilege escalation; administrative actions |
| Application errors | Security exceptions; unexpected errors that may indicate attack attempts |
| Data access events | Access to sensitive data; bulk data exports; unusual query patterns |
| Configuration changes | Changes to security settings; user account management |
| Network events | Unusual outbound connections; port scanning; traffic anomalies |

Alert thresholds and response playbooks for security events shall be defined in the Security Operations Standard [Document Reference].

### 12.4 Application Maintenance and Patching

*Describe the maintenance lifecycle, including how application-level patching and updates are managed.*

Application maintenance activities, including bug fixes, security patches, and minor enhancements, shall be managed through the SDLC process scaled to the risk of the change:

- **Security patches addressing Critical/High vulnerabilities:** Emergency or expedited change process; abbreviated but documented SDLC gates;
- **Bug fixes:** Standard change or normal change process; appropriate testing and peer review required;
- **Minor enhancements:** Standard SDLC process scaled to risk level;
- **Major enhancements:** Full SDLC process as defined in this Framework.

### 12.5 Annual Security Review

*Define the requirement for periodic security review of production applications.*

All production applications classified as Critical or High risk must undergo an annual security review comprising:

| Review Activity | Description |
|---|---|
| Threat Model Review | Review and update of the system threat model to reflect any changes in the threat landscape or system design |
| Security Architecture Review | Assessment of whether security controls remain appropriate given changes to the system or environment |
| Access Review | Review and recertification of all access rights to the application and its supporting infrastructure |
| Penetration Test | Annual penetration test for internet-facing and customer-facing systems |
| Compliance Assessment | Assessment of ongoing compliance with applicable regulatory requirements |

---

## 13. Phase 8 – Decommissioning and Retirement

### 13.1 Phase Objectives

*Describe the objectives and requirements for the secure decommissioning of systems at end-of-life.*

Systems that have reached the end of their operational life must be decommissioned in a controlled and secure manner to prevent residual risks from lingering in the environment. The objectives of this phase are to:

- Ensure all data is appropriately migrated, archived, or securely disposed of;
- Revoke all access rights associated with the decommissioned system;
- Remove or disable all dependencies, integrations, and service accounts;
- Update asset registers, documentation, and architecture diagrams to reflect the decommissioning;
- Obtain formal approval for decommissioning and maintain an auditable record.

### 13.2 Decommissioning Requirements

| Decommissioning Activity | Description | Responsible |
|---|---|---|
| Data Migration / Archiving | Migrate required data to designated successor systems; archive data per retention policy | Data Owner / Application Development |
| Secure Data Disposal | Securely destroy data that is not migrated or archived; obtain data destruction certificate | Information Security / Operations |
| Access Revocation | Revoke all user, service account, and administrative access to the system | IAM team / Operations |
| Integration Removal | Identify and remove/disable all integrations and API connections | Application Development / Architecture |
| Infrastructure Decommissioning | Decommission servers, virtual machines, containers, and cloud resources | Infrastructure / Operations |
| Documentation Update | Update CMDB, asset register, data flow diagrams, and architecture documentation | IT Architecture / Operations |
| License Surrender | Return or terminate software licences associated with the decommissioned system | IT Procurement |

### 13.3 Decommissioning Approval Gate

**Gate Entry Criteria:**

| Criterion | Verified By | Status |
|---|---|---|
| Business Owner approval for decommissioning obtained | Business Owner | [ ] |
| Data migration/archiving completed and verified | Data Owner | [ ] |
| Data destruction certificate obtained (where applicable) | Information Security Manager | [ ] |
| All access rights revoked | IAM team | [ ] |
| All integrations removed or disabled | Application Development Lead | [ ] |
| Regulatory data retention requirements verified and met | Compliance / Legal | [ ] |
| Asset register and documentation updated | IT Architecture | [ ] |

**Gate Approver:** [Head of Application Development / CIO/CTO]

---

## 14. Third-Party and Open-Source Software Management

### 14.1 Overview

*Describe the controls governing the use of third-party commercial software and open-source software components in development projects.*

The use of third-party and open-source software components introduces security and operational risks that must be managed throughout the SDLC. [Organization Name] shall maintain controls over the selection, use, and ongoing management of all externally sourced software components.

### 14.2 Third-Party Software Procurement

Prior to approving the use of any new commercial third-party software component or library, the following assessment shall be conducted:

| Assessment Area | Criteria |
|---|---|
| **Security Assessment** | Vendor security practices; known vulnerabilities; security patch history |
| **Licence Compliance** | Licence type; commercial terms; open-source licence compatibility |
| **Vendor Due Diligence** | Vendor financial stability; support terms; software lifecycle commitment |
| **Regulatory Compliance** | Compliance with data residency, privacy, and other regulatory requirements |
| **Vulnerability Management** | Vendor's approach to vulnerability disclosure and patching |

### 14.3 Open-Source Software Controls

| Control | Requirement |
|---|---|
| **Approved Sources** | Open-source components must be sourced from official repositories only (e.g., npm, PyPI, Maven Central) |
| **Licence Review** | Licences must be reviewed for compatibility; prohibited licence types are defined in Appendix B |
| **Vulnerability Scanning** | All open-source components must be scanned using the approved SCA tool prior to use |
| **Known Vulnerability Check** | Components with known Critical or High CVEs must not be incorporated; alternative must be identified |
| **SBOM Maintenance** | A Software Bill of Materials must be maintained for all applications using open-source components |
| **Ongoing Monitoring** | Open-source components must be continuously monitored for newly disclosed vulnerabilities |

### 14.4 Outsourced Development Controls

*Define the controls that apply when development is outsourced to third-party vendors.*

Where development activities are outsourced to third-party vendors, the following controls must be applied:

| Control | Requirement |
|---|---|
| **Contractual Requirements** | Development contracts must incorporate security requirements, including adherence to this SDLC Framework or an equivalent approved standard |
| **Security Annexure** | A security annexure to the development contract must specify minimum security requirements, code review obligations, and vulnerability management responsibilities |
| **Security Testing** | [Organization Name] retains the right to conduct or commission security testing of all code produced by third-party developers |
| **Code Escrow** | For critical systems, source code escrow arrangements must be in place |
| **Intellectual Property** | Contracts must specify that all code produced under contract is the property of [Organization Name] |
| **Access Management** | Third-party developer access to [Organization Name] systems and environments must be governed by the IAM Policy and Vendor Management Policy |
| **Background Checks** | Third-party developers with access to sensitive systems must have undergone appropriate background screening |

---

## 15. Change Management Integration

### 15.1 Overview

*Describe the relationship between the SDLC Framework and the Organisation's Change Management process, and how they interact.*

The SDLC Framework and the Change Management Policy are complementary and interdependent governance instruments. The SDLC Framework governs how software is built and tested; the Change Management Policy governs how tested software is moved into production. All production deployments resulting from SDLC activities must pass through the Change Management process.

### 15.2 Change Classification

*Define how SDLC outputs are classified within the Change Management process.*

| SDLC Deliverable | Change Classification | CAB Requirements |
|---|---|---|
| New system deployment | Normal Change | Full CAB review; standard SDLC gates |
| Major release (significant new functionality) | Normal Change | Full CAB review; full SDLC gates |
| Minor release (bug fixes, minor enhancements) | Normal Change (or Standard if pre-approved) | Abbreviated SDLC; peer review; testing evidence |
| Emergency security patch | Emergency Change | Emergency CAB; expedited SDLC; retrospective review |
| Configuration change (non-code) | Standard or Normal | Risk-assessed; change ticket required |

### 15.3 Change Freeze Periods

*Define the change freeze periods during which production deployments are restricted.*

[Organization Name] observes the following change freeze periods during which production deployments are restricted without special approval:

| Period | Duration | Deployment Restriction |
|---|---|---|
| Year-End Processing | [Dates] | No deployments except emergency security patches |
| Major Business Events | [Dates, e.g., major product launches, regulatory deadlines] | No deployments except emergency security patches |
| BNM Reporting Periods | [Dates] | Restricted deployments; pre-approval required |
| Scheduled Maintenance Windows | [Agreed maintenance windows] | Deployments during maintenance window only |

*Emergency security patches that cannot wait until the end of a freeze period require approval from the [CTO / CIO] and must be subject to retrospective CAB review.*

---

## 16. Roles and Responsibilities

### 16.1 Overview

*Describe the RACI framework used to define roles and responsibilities for SDLC activities.*

Clear delineation of roles and responsibilities is essential to the effective governance of the SDLC. The following RACI matrix defines the Responsible, Accountable, Consulted, and Informed parties for key SDLC activities.

**RACI Key:**
- **R** – Responsible: Performs the activity
- **A** – Accountable: Ultimately answerable for the activity; approves the output
- **C** – Consulted: Provides input and expertise; two-way communication
- **I** – Informed: Kept informed of progress and outcomes; one-way communication

### 16.2 RACI Matrix

| SDLC Activity | Business Owner | Head of App Dev | Development Team | Information Security | QA Team | Technology Risk | Data Protection Officer | Infrastructure / Ops | Change Manager |
|---|---|---|---|---|---|---|---|---|---|
| Project initiation and BRD | A | C | C | C | I | C | C | I | I |
| Security requirements elicitation | C | C | C | R/A | I | C | C | I | I |
| Privacy Impact Assessment | C | I | I | C | I | I | R/A | I | I |
| Technology risk assessment | I | C | I | C | I | R/A | C | I | I |
| System architecture design | C | A | R | C | I | C | I | C | I |
| Security Architecture Review | I | C | I | R/A | I | C | I | C | I |
| Threat modelling | C | C | C | R/A | I | C | C | I | I |
| Secure coding | I | A | R | C | I | I | I | I | I |
| SAST scanning | I | A | R | C | I | I | I | I | I |
| SCA scanning | I | A | R | C | I | I | I | I | I |
| Peer code review | I | A | R | C | I | I | I | I | I |
| Functional testing (SIT) | C | A | C | I | R | I | I | I | I |
| User Acceptance Testing (UAT) | R/A | C | C | I | C | I | I | I | I |
| DAST and penetration testing | I | C | I | R/A | C | C | I | I | I |
| Production deployment planning | C | A | C | C | I | I | I | R | C |
| Change Request submission | I | C | R | C | I | I | I | C | R/A |
| CAB approval | I | C | I | C | I | C | I | C | R/A |
| Production deployment execution | I | A | I | I | I | I | I | R | C |
| Post-deployment verification | C | C | C | C | R | I | I | C | I |
| Ongoing vulnerability management | I | C | C | R/A | I | C | I | C | I |
| Annual security review | C | C | I | R/A | I | C | I | C | I |
| SDLC Framework review | I | R/A | C | C | C | C | C | I | I |

### 16.3 Key Role Descriptions

*Provide a description of the key roles referenced in the RACI matrix above.*

| Role | Responsibilities |
|---|---|
| **Business Owner** | Senior business representative sponsoring the development project; accountable for business requirements, UAT sign-off, and business change readiness |
| **Head of Application Development** | Overall accountability for SDLC Framework compliance and development team performance; gate approver for technical decisions |
| **Development Team** | Design, build, and unit test software in accordance with this Framework; attend security training; raise security concerns |
| **Security Champion** | Developer with additional security training designated to support the team's secure coding practices; participates in security reviews |
| **Information Security Manager** | Defines and enforces security requirements; conducts or coordinates security reviews and testing; advises on security architecture |
| **QA Lead / Team** | Plans and executes testing activities; manages defect tracking; provides gate sign-off on test completion |
| **Technology Risk Manager** | Conducts technology risk assessments; manages risk acceptance; reports risk metrics |
| **Data Protection Officer (DPO)** | Advises on PDPA compliance; reviews and approves Privacy Impact Assessments |
| **Infrastructure / Operations** | Provisions and manages environments; executes production deployments; manages production access |
| **Change Manager** | Manages the Change Management process; schedules and chairs CAB; maintains change records |

---

## 17. Metrics, Reporting and Continuous Improvement

### 17.1 SDLC Key Performance Indicators

*Define the metrics used to measure the effectiveness of the SDLC Framework and track compliance.*

[Organization Name] shall track and report the following Key Performance Indicators ("KPIs") and Key Risk Indicators ("KRIs") for the SDLC:

| Metric | Type | Measurement | Reporting Frequency | Target |
|---|---|---|---|---|
| SAST critical/high findings rate per project | KRI | Number of Critical/High SAST findings per code scan | Per project | Trending downward |
| DAST critical/high findings rate per project | KRI | Number of Critical/High DAST findings per assessment | Per project | Trending downward |
| Mean time to remediate (MTTR) – Critical vulnerabilities | KPI | Days from identification to verified closure | Monthly | ≤ [X] days |
| MTTR – High vulnerabilities | KPI | Days from identification to verified closure | Monthly | ≤ [X] days |
| SDLC gate compliance rate | KPI | % of projects with all gates completed and documented | Quarterly | ≥ 95% |
| Security exceptions / deviations | KRI | Number of approved SDLC security exceptions | Quarterly | ≤ [X] per quarter |
| Penetration test findings (Critical/High) | KRI | Number of Critical/High findings in penetration tests | Per assessment | Trending downward |
| Developer secure coding training completion | KPI | % of developers with current training certification | Quarterly | ≥ 95% |
| Production incidents attributable to code defects | KRI | Number of production security incidents linked to development | Monthly | Trending downward |
| Post-deployment rollbacks | KRI | Number of failed deployments requiring rollback | Monthly | ≤ [X]% of deployments |

### 17.2 Reporting

*Define the reporting cadence and audience for SDLC metrics.*

| Report | Audience | Frequency | Content |
|---|---|---|---|
| SDLC Compliance Dashboard | Head of Application Development, Information Security | Monthly | Gate compliance rates; open vulnerabilities; training completion |
| Technology Risk Report | MTRC | Quarterly | KRI trends; exceptions; significant findings |
| TCRC Technology Risk Report | TCRC | Quarterly | Summary KRIs; material risks; improvement initiatives |
| BNM Regulatory Reporting | BNM (where required) | As required | As specified by BNM |

### 17.3 Continuous Improvement

*Describe the process for continuously improving the SDLC Framework based on experience, metrics, and changes in the regulatory environment.*

The SDLC Framework shall be subject to continuous improvement through:

1. **Annual Framework Review:** The Head of Application Development shall lead an annual review of this Framework, incorporating findings from internal audits, metric trends, incident post-mortems, and regulatory updates;
2. **Post-Implementation Reviews:** Lessons learned from individual projects shall be documented in PIRs and fed back into Framework improvements;
3. **Security Incident Review:** Security incidents attributable to SDLC deficiencies shall be analysed and result in targeted improvements to the Framework or associated standards;
4. **Industry and Regulatory Benchmarking:** The Framework shall be benchmarked against industry standards (e.g., OWASP SAMM, BSIMM) and updated to reflect evolving regulatory guidance from BNM and NACSA.

---

## 18. Exceptions and Deviations

### 18.1 Exception Management

*Define the process for managing exceptions to this Framework.*

It is recognised that exceptional circumstances may arise where strict compliance with every requirement of this Framework is not practicable. A formal exception process is established to manage such circumstances in a controlled and transparent manner.

**Exception Principles:**
- Exceptions are granted for specific, time-limited circumstances only;
- Exceptions do not diminish the underlying risk; they require explicit risk acceptance;
- All exceptions must be documented, approved at an appropriate level, and reviewed regularly.

### 18.2 Exception Process

| Step | Action | Responsible |
|---|---|---|
| 1 | Identify and document the specific SDLC requirement that cannot be met, the reason, and the duration of the exception | Project Manager / Team Lead |
| 2 | Identify and document compensating controls to mitigate the risk of non-compliance | Information Security |
| 3 | Conduct a risk assessment of the exception; determine residual risk level | Technology Risk Manager |
| 4 | Submit the Exception Request to the appropriate approver | Project Manager |
| 5 | Approver reviews and either approves or rejects the exception | [See approval authorities below] |
| 6 | Approved exceptions are logged in the Exception Register and communicated to relevant parties | Head of Application Development |
| 7 | Exception is reviewed at the agreed review date; closed or extended with re-approval | Head of Application Development |

### 18.3 Exception Approval Authority

| Residual Risk of Exception | Approval Authority |
|---|---|
| **Low** | Head of Application Development |
| **Medium** | Head of Application Development + Information Security Manager |
| **High** | CIO/CTO |
| **Critical** | MTRC / TCRC |

### 18.4 Exception Register

All approved exceptions shall be logged in the SDLC Exception Register, which shall include:

| Column | Description |
|---|---|
| Exception ID | Unique identifier |
| Project / System | Affected project or system |
| SDLC Requirement | Specific requirement for which exception is granted |
| Reason | Justification for exception |
| Compensating Controls | Controls mitigating the risk of non-compliance |
| Residual Risk | Risk rating (Critical / High / Medium / Low) |
| Approval Date | Date exception was approved |
| Approved By | Approver name and role |
| Expiry Date | Date by which exception must be resolved or renewed |
| Status | Open / Closed / Renewed |

---

## 19. Review and Approval

### 19.1 Document Review

This document shall be reviewed:

- **Annually**, at a minimum, by the Head of Application Development;
- **Upon material changes** to BNM RMiT requirements or other applicable regulatory guidance;
- **Following significant security incidents** attributable to SDLC deficiencies;
- **Upon material changes** to the Organisation's technology strategy, development methodology, or organisational structure.

Proposed amendments to this document must be reviewed by the Information Security team and Technology Risk Management before submission for approval.

### 19.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 19.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Application Development | [Name] | _________________ | [Date] |
| Information Security Manager | [Name] | _________________ | [Date] |
| Chief Information Officer / Chief Technology Officer | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| Technology and Cybersecurity Risk Committee Chair | [Name] | _________________ | [Date] |

---

## 20. References

### 20.1 Regulatory References

| Reference | Title | Publisher | Applicable Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.4 (Application Development and Maintenance Controls); Clause 10.1 (Technology Risk Governance); Clause 10.3 (Cybersecurity); Clause 11 (Technology Audit) |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | All provisions related to data processing in development and testing |
| BNM Cybersecurity Guidelines | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | All provisions related to secure software development |
| NACSA | National Cyber Security Policy | NACSA Malaysia | Critical Information Infrastructure protection requirements |
| [Other BNM Circulars] | [Title] | Bank Negara Malaysia | [Clauses] |

### 20.2 Internal Policy References

| Document | Reference | Owner |
|---|---|---|
| Technology Risk Management Framework | [Doc Ref] | [Owner] |
| Information Security Policy | [Doc Ref] | [Owner] |
| Change Management Policy | [Doc Ref] | [Owner] |
| Vendor Management Policy | [Doc Ref] | [Owner] |
| Data Management and Classification Policy | [Doc Ref] | [Owner] |
| Identity and Access Management Policy | [Doc Ref] | [Owner] |
| Patch and Vulnerability Management Standard | [Doc Ref] | [Owner] |
| Business Continuity and Disaster Recovery Policy | [Doc Ref] | [Owner] |
| Incident Response Procedure | [Doc Ref] | [Owner] |

### 20.3 Industry Standards and Frameworks Referenced

| Standard / Framework | Publisher | Purpose |
|---|---|---|
| OWASP Top 10 | Open Web Application Security Project | Web application security risk awareness |
| OWASP Application Security Verification Standard (ASVS) | Open Web Application Security Project | Security verification requirements |
| OWASP Software Assurance Maturity Model (SAMM) | Open Web Application Security Project | SDLC security maturity model |
| NIST SP 800-53 | National Institute of Standards and Technology | Security and privacy controls |
| NIST SP 800-115 | National Institute of Standards and Technology | Technical guide to information security testing |
| CIS Benchmarks | Center for Internet Security | System hardening baselines |
| ISO/IEC 27001:2022 | ISO/IEC | Information security management |
| SEI CERT Coding Standards | Software Engineering Institute, Carnegie Mellon | Language-specific secure coding standards |
| PCI-DSS | PCI Security Standards Council | Payment card security (where applicable) |

---

## 21. Appendices

### Appendix A – BNM RMiT Clause 10.4 Compliance Mapping

*Provide a detailed mapping between each requirement of BNM RMiT Clause 10.4 and the specific controls established by this Framework. This table is critical for demonstrating regulatory compliance to BNM and internal/external auditors.*

| BNM RMiT Clause | Requirement Summary | Framework Control | Section Reference | Evidence Artefact |
|---|---|---|---|---|
| 10.4(a) | Formal policies and procedures for system development | SDLC Framework Document | This document | This document |
| 10.4(b) | Security requirements defined prior to development | Security Requirements Elicitation; Requirements Approval Gate | Section 6.3; Section 6.6 | Security Requirements Document; Gate sign-off |
| 10.4(c) | Secure coding practices | Secure Coding Standards; Developer Training | Section 8.2; Section 8.6 | Secure coding checklist; Training records |
| 10.4(d) | Testing of security controls | SAST; DAST; Penetration Testing; Code Review | Sections 9, 10 | SAST/DAST reports; Pen test report |
| 10.4(e) | Change management controls for migration to production | Change Management Integration; Production Deployment Approval | Sections 11, 15 | Change Request; CAB approval; Go/No-Go sign-off |
| 10.4(f) | Segregation of environments | Environment Architecture | Section 5.3 | Environment architecture document; access logs |
| 10.4(g) | Controls over production data in test environments | Use of Test Data | Section 10.5 | Data masking evidence; PIA |
| 10.4(h) | Management of third-party and open-source software | Third-Party and Open-Source Software Management | Section 14 | SBOM; SCA reports; vendor assessments |
| 10.4(i) | Periodic review of SDLC policies | Annual Review | Section 17.3; Section 19.1 | Review sign-off; version history |

*[Expand this table to include all relevant sub-clauses of BNM RMiT Clause 10.4 and related clauses. Reference the current BNM RMiT Policy Document for the full list of requirements.]*

---

### Appendix B – Prohibited Open-Source Software Licences

*List the open-source software licences that are prohibited or require legal review before use, based on the Organisation's intellectual property and commercial risk appetite.*

| Licence Category | Licence Type | Status | Reason |
|---|---|---|---|
| **Permissive** | MIT, Apache 2.0, BSD 2-Clause, BSD 3-Clause | Approved | Minimal restrictions on use and distribution |
| **Weak Copyleft** | LGPL v2.1, LGPL v3, MPL 2.0 | Approved with review | Requires Legal review for linking/distribution scenarios |
| **Strong Copyleft (GPL)** | GPL v2, GPL v3, AGPL v3 | Requires Legal approval | May require source code disclosure; consult Legal before use |
| **Network Copyleft** | AGPL v3 | Prohibited (without Board approval) | Requires disclosure of modifications even for network-accessed services |
| **Commercial / Non-OSI** | [Specific licences] | Requires Legal and Procurement approval | Commercial terms must be reviewed |
| **Unknown / Unlicensed** | No licence declared | Prohibited | Cannot use software with no declared licence |

*[Review and update this appendix in consultation with [Organization Name]'s Legal team and Procurement.]*

---

### Appendix C – SDLC Phase Gate Checklists

#### Appendix C.1 – Requirements Approval Gate Checklist

| Item | Responsible | Completed | Date | Notes |
|---|---|---|---|---|
| Business Requirements Document completed | Business Analyst | [ ] | | |
| BRD signed off by Business Owner | Business Owner | [ ] | | |
| Security Requirements Document completed | Information Security | [ ] | | |
| SRD reviewed and approved by InfoSec Manager | InfoSec Manager | [ ] | | |
| Technology risk assessment completed | Technology Risk | [ ] | | |
| Project risk classification confirmed | Technology Risk | [ ] | | |
| PIA initiated (where required) | DPO | [ ] | | |
| Project plan approved | Project Sponsor | [ ] | | |
| Development environment provisioning requested | Project Manager | [ ] | | |
| **Gate Approved By** | **Head of Application Development** | [ ] | | |

#### Appendix C.2 – Design Approval Gate Checklist

| Item | Responsible | Completed | Date | Notes |
|---|---|---|---|---|
| System Architecture Document completed | Architecture team | [ ] | | |
| Security Architecture Review completed | Information Security | [ ] | | |
| All SAR findings addressed or risk-accepted | InfoSec Manager | [ ] | | |
| Threat model completed and reviewed | Information Security | [ ] | | |
| Data flow diagram completed | Architecture team | [ ] | | |
| PIA updated with data flow findings | DPO | [ ] | | |
| Cryptographic standards approved | InfoSec Manager | [ ] | | |
| Design signed off by Business Owner | Business Owner | [ ] | | |
| **Gate Approved By** | **Head of Application Development** | [ ] | | |

#### Appendix C.3 – Code Review Approval Gate Checklist

| Item | Responsible | Completed | Date | Notes |
|---|---|---|---|---|
| SAST scan completed | InfoSec / Dev Lead | [ ] | | |
| Critical SAST findings remediated | Dev Lead | [ ] | | |
| High SAST findings remediated or risk-accepted | Dev Lead / InfoSec | [ ] | | |
| SCA scan completed; SBOM generated | Dev Lead | [ ] | | |
| Critical/High component vulnerabilities addressed | Dev Lead / InfoSec | [ ] | | |
| Peer code review completed (all changes) | Team Lead | [ ] | | |
| Secrets scanning completed; no violations | Dev Lead | [ ] | | |
| Unit test coverage meets threshold | QA Lead | [ ] | | |
| Code quality metrics within thresholds | Team Lead | [ ] | | |
| **Gate Approved By** | **Head of App Dev / Security Champion** | [ ] | | |

#### Appendix C.4 – Test Completion Gate Checklist

| Item | Responsible | Completed | Date | Notes |
|---|---|---|---|---|
| SIT completed; critical defects resolved | QA Lead | [ ] | | |
| UAT completed and signed off | Business Owner | [ ] | | |
| DAST scan completed; Critical/High findings remediated | InfoSec Manager | [ ] | | |
| Penetration test completed (where required) | InfoSec Manager | [ ] | | |
| Critical/High pen test findings remediated | InfoSec Manager / Dev Lead | [ ] | | |
| Security configuration review completed | InfoSec Manager | [ ] | | |
| Performance testing completed (where required) | QA / Infra Lead | [ ] | | |
| PIA completed; DPO sign-off obtained (where required) | DPO | [ ] | | |
| Outstanding defects accepted by Business Owner | Business Owner | [ ] | | |
| **Gate Approved By** | **Head of Application Development** | [ ] | | |

#### Appendix C.5 – Production Deployment Approval Checklist

| Item | Responsible | Completed | Date | Notes |
|---|---|---|---|---|
| All preceding SDLC gates passed and documented | Head of App Dev | [ ] | | |
| Change Request submitted and approved by CAB | Change Manager | [ ] | | |
| Deployment Plan completed and reviewed | Project Manager / Ops | [ ] | | |
| Rollback plan tested and ready | Infrastructure / Ops | [ ] | | |
| Production environment security configuration verified | InfoSec | [ ] | | |
| Backup and DR configuration verified | Infrastructure | [ ] | | |
| Security monitoring and alerting configured | InfoSec / Ops | [ ] | | |
| Communication plan executed; stakeholders notified | Project Manager | [ ] | | |
| Go/No-Go meeting conducted; outcome documented | Project Manager | [ ] | | |
| **Technical Readiness – Approved By** | **Head of Application Development** | [ ] | | |
| **Security Clearance – Approved By** | **Information Security Manager** | [ ] | | |
| **Business Acceptance – Approved By** | **Business Owner** | [ ] | | |

#### Appendix C.6 – Decommissioning Approval Gate Checklist

| Item | Responsible | Completed | Date | Notes |
|---|---|---|---|---|
| Business Owner approval obtained | Business Owner | [ ] | | |
| Data migration / archiving completed | Data Owner | [ ] | | |
| Data destruction certificate obtained | InfoSec | [ ] | | |
| All user and service access revoked | IAM team | [ ] | | |
| All integrations removed or disabled | App Dev Lead | [ ] | | |
| Regulatory retention requirements verified | Compliance / Legal | [ ] | | |
| Asset register and documentation updated | IT Architecture | [ ] | | |
| **Gate Approved By** | **Head of Application Development / CIO/CTO** | [ ] | | |

---

### Appendix D – Secure Coding Quick Reference Card

*This quick reference card summarises the key secure coding requirements for developers. It should be printed and posted in development areas or distributed electronically.*

**[Organization Name] – Secure Coding Quick Reference**

**Always Do:**
- Validate all inputs; whitelist where possible
- Use parameterised queries for all database calls
- Encode all outputs rendered in HTML/JSON
- Use the Organisation's approved secrets management tool for all credentials
- Use only approved cryptographic algorithms and libraries
- Log security events; never log credentials or sensitive data
- Handle errors gracefully; generic messages to users; detailed logs server-side
- Check authorisation on every sensitive operation server-side
- Keep dependencies up to date; run SCA scans regularly

**Never Do:**
- Hardcode credentials, API keys, or tokens in code
- Commit secrets to version control
- Use MD5, SHA-1, DES, or RC4 for security purposes
- Trust user input without validation
- Implement your own cryptographic algorithms
- Use eval() or equivalent with user-supplied input
- Expose stack traces or internal error details to users
- Bypass SDLC gates or skip peer review

**OWASP Top 10 – Know Your Enemy:**
1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, LDAP, OS Command)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)

**Security Issues? Contact:** [Information Security team email / Slack channel / ITSM portal]

---

### Appendix E – Glossary

| Term | Definition |
|---|---|
| **ASVS** | Application Security Verification Standard; an OWASP framework providing a basis for testing web application technical security controls |
| **BNM** | Bank Negara Malaysia; the central bank and financial services regulator of Malaysia |
| **BSIMM** | Building Security In Maturity Model; a framework for measuring and planning software security initiatives |
| **CAB** | Change Advisory Board; the body responsible for reviewing and approving changes to production systems |
| **CI/CD** | Continuous Integration / Continuous Deployment; a DevOps practice of automating the build, test, and deployment pipeline |
| **CMDB** | Configuration Management Database; a database used to store information about hardware and software assets |
| **COTS** | Commercial Off-The-Shelf software; proprietary software available for purchase and use without modification |
| **CVE** | Common Vulnerabilities and Exposures; a publicly disclosed list of known cybersecurity vulnerabilities |
| **DAST** | Dynamic Application Security Testing; security testing of a running application to identify vulnerabilities |
| **DevOps** | A set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle |
| **DFD** | Data Flow Diagram; a graphical representation of the flow of data through an information system |
| **DPO** | Data Protection Officer; the individual responsible for overseeing an organisation's data protection strategy and compliance with PDPA |
| **IAM** | Identity and Access Management; policies and technologies for ensuring the right individuals access the right resources |
| **KPI** | Key Performance Indicator; a measurable value that demonstrates how effectively a process achieves key business objectives |
| **KRI** | Key Risk Indicator; a metric that provides advance warning of increasing risk exposures |
| **MFA** | Multi-Factor Authentication; authentication using two or more independent factors |
| **MTRC** | Management Technology Risk Committee; a management-level committee overseeing technology risk |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **OWASP** | Open Web Application Security Project; a nonprofit foundation that works to improve the security of software |
| **PDPA** | Personal Data Protection Act 2010; Malaysian legislation governing the processing of personal data |
| **PIA** | Privacy Impact Assessment; a systematic assessment of privacy risks associated with a project or system |
| **PIR** | Post-Implementation Review; a review conducted after a project has been completed to assess outcomes |
| **RACI** | Responsible, Accountable, Consulted, Informed; a matrix used to define roles and responsibilities |
| **RMiT** | Risk Management in Technology; BNM's policy document governing technology risk management for financial institutions |
| **RPO** | Recovery Point Objective; the maximum acceptable amount of data loss in the event of a disaster |
| **RTO** | Recovery Time Objective; the maximum acceptable time to restore a system after a disaster |
| **SAMM** | Software Assurance Maturity Model; an OWASP framework for assessing and improving software security practices |
| **SAST** | Static Application Security Testing; analysis of source code or binaries for security vulnerabilities without executing the code |
| **SBOM** | Software Bill of Materials; a complete list of software components, dependencies, and licences used in an application |
| **SCA** | Software Composition Analysis; automated scanning of third-party and open-source software components for vulnerabilities |
| **SDLC** | Software Development Life Cycle; the process of planning, developing, testing, and deploying software |
| **SIEM** | Security Information and Event Management; a system that aggregates and analyses security event data |
| **SIT** | System Integration Testing; testing of integrated system components to verify they work together correctly |
| **STRIDE** | Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege; a threat modelling methodology |
| **TCRC** | Technology and Cybersecurity Risk Committee; a board-level or senior management committee overseeing technology and cyber risk |
| **TLS** | Transport Layer Security; a cryptographic protocol for secure communication over a network |
| **UAT** | User Acceptance Testing; testing by business users to verify a system meets their requirements |
| **WAF** | Web Application Firewall; a security control that monitors, filters, and blocks HTTP traffic to a web application |

---

### Appendix F – Document History and Distribution

#### Appendix F.1 – Distribution List

| Role / Position | Name | Department | Distribution Date |
|---|---|---|---|
| Head of Application Development | [Name] | [Department] | [Date] |
| Information Security Manager | [Name] | [Department] | [Date] |
| Chief Information Officer / CTO | [Name] | [Department] | [Date] |
| Technology Risk Manager | [Name] | [Department] | [Date] |
| Head of Quality Assurance | [Name] | [Department] | [Date] |
| Data Protection Officer | [Name] | [Department] | [Date] |
| Head of Infrastructure | [Name] | [Department] | [Date] |
| Change Manager | [Name] | [Department] | [Date] |
| [All Development Team Leads] | [Names] | [Department] | [Date] |

#### Appendix F.2 – Annual Review Sign-Off

| Review Year | Review Lead | Review Date | Material Changes | Approved By | Approval Date |
|---|---|---|---|---|---|
| [Year] | [Name] | [Date] | [Yes / No – describe if Yes] | [Name, Role] | [Date] |
| [Year] | [Name] | [Date] | [Yes / No – describe if Yes] | [Name, Role] | [Date] |
| [Year] | [Name] | [Date] | [Yes / No – describe if Yes] | [Name, Role] | [Date] |

---

*End of Document*

---

> **Document Classification: Confidential**
> **[Organization Name] | [Document ID] | Version 1.0**
> **Any printed copies of this document are uncontrolled. Refer to the Document Management System for the current version.**