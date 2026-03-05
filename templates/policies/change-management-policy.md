# Change Management Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Change Advisory Board (CAB) Chair |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |

---

> **Regulatory Reference:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 10.10
>
> **Compliance Note:** This policy is mandatory under BNM RMiT requirements applicable to all licensed financial institutions operating in Malaysia. Non-compliance may result in regulatory action under the Financial Services Act 2013 (FSA) or Islamic Financial Services Act 2013 (IFSA).

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Change Classification Criteria](#6-change-classification-criteria)
7. [Change Management Process Overview](#7-change-management-process-overview)
8. [Standard Change Process](#8-standard-change-process)
9. [Normal Change Process and CAB Review](#9-normal-change-process-and-cab-review)
10. [Emergency Change Process](#10-emergency-change-process)
11. [Change Advisory Board (CAB) Governance](#11-change-advisory-board-cab-governance)
12. [Change Records and Documentation Requirements](#12-change-records-and-documentation-requirements)
13. [Risk Assessment and Impact Analysis](#13-risk-assessment-and-impact-analysis)
14. [Testing and Back-Out Requirements](#14-testing-and-back-out-requirements)
15. [Post-Implementation Review](#15-post-implementation-review)
16. [Change Freeze Periods](#16-change-freeze-periods)
17. [Policy Compliance, Monitoring, and Enforcement](#17-policy-compliance-monitoring-and-enforcement)
18. [Exceptions Management](#18-exceptions-management)
19. [Review and Approval](#19-review-and-approval)
20. [References](#20-references)
21. [Appendices](#21-appendices)

---

## 1. Purpose

*This section should clearly articulate why this policy exists, the business and regulatory drivers, and the intended outcome of its implementation.*

This Change Management Policy establishes the formal governance framework for planning, requesting, assessing, approving, implementing, and reviewing all changes made to [Organization Name]'s information technology systems, infrastructure, applications, and services in production environments.

The primary purposes of this policy are to:

- Protect the stability, availability, integrity, and confidentiality of [Organization Name]'s production systems and the data they process.
- Ensure that all changes are assessed for risk, authorised by the appropriate authority, and implemented in a controlled and documented manner.
- Minimise the adverse impact of changes on customers, operations, and regulatory obligations.
- Support compliance with BNM's Risk Management in Technology (RMiT) Policy Document, in particular Clause 10.10, and all other applicable regulatory requirements.
- Establish clear accountability for change outcomes and provide an auditable record of all changes made to production systems.
- Reduce the frequency and impact of change-related incidents, service disruptions, and security vulnerabilities.

This policy reflects [Organization Name]'s commitment to maintaining the highest standards of technology governance, operational resilience, and regulatory compliance as required by Bank Negara Malaysia.

---

## 2. Scope

*This section defines what systems, processes, personnel, and organisational entities are subject to this policy. Be precise to avoid ambiguity during audits.*

### 2.1 In-Scope Systems and Services

This policy applies to all changes to the following categories of systems, platforms, and services owned, operated, or managed by [Organization Name]:

- **Core Banking Systems** — including but not limited to [list core banking platform names]
- **Internet and Mobile Banking Platforms** — customer-facing digital channels
- **Payment and Clearing Systems** — including IBG, DuitNow, FPX, and RENTAS-connected systems
- **Network Infrastructure** — routers, switches, firewalls, load balancers, and WAN/LAN components
- **Servers and Virtualisation Platforms** — physical servers, VMware/Hyper-V environments, cloud infrastructure
- **Databases** — relational and non-relational database management systems (DBMS)
- **Security Systems** — SIEM platforms, intrusion detection/prevention systems, endpoint protection, PAM solutions
- **Third-Party and Vendor-Managed Systems** — systems hosted or managed by external parties on behalf of [Organization Name]
- **Cloud Services** — public, private, and hybrid cloud environments procured by [Organization Name]
- **Data Centres and Disaster Recovery Sites** — including [Primary Data Centre Name] and [DR Site Name]

### 2.2 In-Scope Activities

This policy governs all activities that alter the configuration, functionality, capacity, or operational state of the above systems, including:

- Software releases, patches, and hotfixes
- Hardware replacements, upgrades, and installations
- Network configuration and topology changes
- Database schema, stored procedure, and data migration changes
- Security configuration and policy changes
- Changes to third-party managed services and cloud configurations
- Decommissioning and retirement of systems

### 2.3 Personnel and Entities Subject to This Policy

This policy applies to:

- All permanent employees of [Organization Name] involved in technology operations and change delivery
- Contractors, consultants, and outsourced service providers with access to [Organization Name]'s production systems
- All technology vendors and managed service providers operating under contract with [Organization Name]
- All subsidiaries and related entities of [Organization Name] where indicated in the Group Technology Policy Framework

### 2.4 Out of Scope

The following are explicitly excluded from the scope of this policy:

- Changes made in development and user acceptance testing (UAT) environments that do not affect production systems (governed by the Software Development Lifecycle Policy)
- Planned maintenance activities conducted within approved maintenance windows where a pre-approved standard change procedure applies
- [Any other explicitly excluded activities]

---

## 3. Regulatory and Policy Framework

*List all regulatory instruments, internal policies, and standards that this policy is aligned with or is required to comply with.*

### 3.1 Regulatory Requirements

This policy is issued in compliance with the following regulatory requirements:

| Regulation / Standard | Issuing Authority | Relevant Clause(s) | Requirement Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.10 | Formal change management process for production systems |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 10.1 – 10.9 | General technology risk governance |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Section 57, 58 | Technology governance obligations for licensed institutions |
| Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Section 57, 58 | Technology governance for Islamic financial institutions |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Principle 4 – Security | Data security obligations applicable to changes affecting personal data |
| Guidelines on Management of Cyber Risk | BNM | [Relevant sections] | Cybersecurity controls applicable to change management |
| [Additional regulatory instruments] | [Issuing Authority] | [Clause] | [Summary] |

### 3.2 Internal Policy Alignment

This policy operates within [Organization Name]'s broader policy framework and must be read in conjunction with:

- IT Security Policy
- Information Classification Policy
- Incident Management Policy
- Business Continuity and Disaster Recovery Policy
- Vendor and Third-Party Risk Management Policy
- Software Development Lifecycle (SDLC) Policy
- Access Control and Privileged Access Management Policy
- [Any additional internal policies]

### 3.3 Standards Alignment

*Where applicable, reference international standards adopted by the organisation.*

This policy is aligned with the following industry standards and frameworks:

- ISO/IEC 27001:2022 — Information Security Management Systems (Control A.8.32 — Change Management)
- ITIL 4 — Change Enablement Practice
- NIST SP 800-53 — Configuration Management (CM) and Change Management controls
- [Any additional standards]

---

## 4. Definitions and Abbreviations

*Define all technical, regulatory, and process-specific terms used within this document to ensure consistent interpretation across all staff and auditors.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Change** | Any addition, modification, or removal of anything that could have an effect on IT services, infrastructure, applications, security controls, or associated processes in the production environment. |
| **Change Record** | A formal record created to document the details of a change, including its rationale, risk assessment, authorisation, implementation plan, test results, and outcome. |
| **Change Requestor** | The individual or team that initiates and submits a change request for approval. |
| **Change Implementer** | The individual or team responsible for physically implementing the approved change. |
| **Change Owner** | The accountable individual responsible for the successful outcome of a specific change, typically the requesting department head or system owner. |
| **Change Advisory Board (CAB)** | A governance body responsible for evaluating, approving, or rejecting normal and major changes before implementation. |
| **Emergency CAB (eCAB)** | A sub-set of the CAB convened urgently to assess and approve emergency changes that cannot wait for a scheduled CAB meeting. |
| **Standard Change** | A pre-approved, low-risk, repeatable change that follows a documented procedure and does not require individual CAB approval. |
| **Normal Change** | A change that is not pre-approved as standard and requires full assessment and CAB approval prior to implementation. |
| **Emergency Change** | A change that must be implemented as soon as possible to restore a failed service, prevent an imminent security breach, or address a critical regulatory obligation. |
| **Major Change** | A high-risk, high-impact change requiring elevated approval from senior management and the CAB Chair. |
| **Post-Implementation Review (PIR)** | A structured review conducted after a change has been implemented to assess its success, capture lessons learned, and identify any residual risks or issues. |
| **Back-Out Plan** | A documented procedure to reverse a change and restore the system to its pre-change state if the change fails or produces unintended consequences. |
| **Change Freeze** | A designated period during which non-emergency changes to production systems are prohibited, typically around peak business periods, regulatory reporting periods, or major system milestones. |
| **Configuration Item (CI)** | Any component that needs to be managed to deliver an IT service, including hardware, software, networks, and documentation. |
| **Configuration Management Database (CMDB)** | A repository that contains information about CIs and their relationships. |
| **Production Environment** | The live operational technology environment used to deliver services to customers and support business operations. |
| **[Additional Term]** | [Definition] |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| CAB | Change Advisory Board |
| CI | Configuration Item |
| CMDB | Configuration Management Database |
| CRF | Change Request Form |
| DR | Disaster Recovery |
| eCAB | Emergency Change Advisory Board |
| FSA | Financial Services Act 2013 |
| IFSA | Islamic Financial Services Act 2013 |
| ITSM | IT Service Management |
| PDPA | Personal Data Protection Act 2010 |
| PIR | Post-Implementation Review |
| RFC | Request for Change |
| RMiT | Risk Management in Technology |
| RTO | Recovery Time Objective |
| UAT | User Acceptance Testing |
| [Abbreviation] | [Full Form] |

---

## 5. Roles and Responsibilities

*Define the specific responsibilities of each role involved in the change management process. Ensure these are realistic and aligned to your organisation's actual structure. The RACI table should be completed to reflect actual workflow accountability.*

### 5.1 Role Descriptions

#### 5.1.1 Chief Information Officer (CIO) / Chief Technology Officer (CTO)

The CIO/CTO holds ultimate accountability for the effectiveness of the change management framework across [Organization Name]. Responsibilities include:

- Providing executive sponsorship and oversight of the Change Management Policy
- Approving major changes that carry enterprise-level risk or significant financial impact
- Reporting change management performance metrics to the Board Risk Committee and relevant management committees
- Ensuring adequate resourcing for the change management function

#### 5.1.2 Chief Information Security Officer (CISO)

- Reviewing and approving change requests that have security implications
- Ensuring that security controls are assessed and validated as part of the change impact analysis
- Representing the security function on the Change Advisory Board
- Approving emergency changes with significant cybersecurity implications

#### 5.1.3 Change Advisory Board (CAB) Chair

- Chairing all scheduled CAB meetings and ensuring quorum
- Making final approval or rejection decisions on normal and major change requests reviewed by the CAB
- Escalating high-risk changes to the CIO/CTO or relevant executive for approval
- Overseeing the continuous improvement of the change management process
- Appointing Emergency CAB (eCAB) members for after-hours emergency change approvals
- Ensuring compliance with this policy and reporting non-compliance to relevant governance bodies

#### 5.1.4 Change Manager

- Managing the end-to-end change management process on a day-to-day basis
- Reviewing all submitted change requests for completeness and quality before CAB presentation
- Maintaining the change schedule and forward schedule of changes
- Facilitating CAB and eCAB meetings and documenting decisions
- Tracking change implementation and ensuring PIRs are completed
- Producing change management metrics and management reports
- Maintaining and updating the Change Management Policy and associated procedures

#### 5.1.5 Change Requestor / Change Owner

- Initiating the change request and completing the Change Request Form (CRF) in full
- Conducting or coordinating the initial risk and impact assessment
- Preparing and testing the back-out plan prior to change implementation
- Ensuring all required approvals are obtained before change implementation begins
- Completing the Post-Implementation Review and submitting it within the required timeframe
- Communicating change impacts to affected stakeholders

#### 5.1.6 Change Implementer

- Executing the approved change precisely as documented in the approved Change Request Form
- Adhering to the approved implementation window and not deviating from the approved plan without authorisation
- Immediately escalating to the Change Manager and Change Owner if the change encounters issues
- Initiating the back-out plan if directed by the Change Owner or CAB Chair
- Documenting actual implementation steps and outcomes in the Change Record

#### 5.1.7 System / Application Owner

- Approving changes to systems for which they hold ownership accountability
- Ensuring that their systems' changes are managed in accordance with this policy
- Participating in the PIR for changes affecting their systems
- Maintaining awareness of all scheduled changes impacting their systems

#### 5.1.8 Technology Risk Management

- Providing independent risk oversight of the change management process
- Reviewing high-risk and major changes from a technology risk perspective
- Reporting change-related risk metrics to the Technology Risk Committee
- Conducting periodic assessments of change management control effectiveness

#### 5.1.9 Internal Audit

- Conducting periodic audits of the change management process and controls
- Reporting audit findings and recommendations to the Board Audit Committee
- Verifying compliance with this policy and associated regulatory requirements

### 5.2 RACI Matrix

*Complete the RACI matrix below to reflect the actual organisational roles involved at each stage of the change management process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Process Activity | CIO/CTO | CISO | CAB Chair | Change Manager | Change Requestor | Change Implementer | System Owner | Tech Risk Mgmt | Internal Audit |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Submit Change Request | I | I | I | I | R/A | | C | | |
| Initial Quality Review of CRF | | | C | R/A | C | | | | |
| Risk and Impact Assessment | | C | C | C | R | | A | C | |
| Security Impact Assessment | | R/A | | C | C | | | | |
| CAB Review and Recommendation | I | C | A | R | C | | C | C | |
| CAB Approval — Normal Change | I | C | A | R | I | | I | I | I |
| CIO/CTO Approval — Major Change | A | C | R | C | I | | I | I | I |
| Schedule Change | | | I | R/A | C | C | I | | |
| Communicate Change | I | I | I | R | A | C | I | I | I |
| Implement Change | | | I | I | A | R | I | | |
| Verify Implementation | | | I | I | R | C | A | | |
| Initiate Back-Out | | | I | I | A | R | C | | |
| Post-Implementation Review | I | C | C | R | A | C | C | I | |
| Emergency Change — eCAB Approval | I | C | A | R | I | | I | | |
| Policy Exception Approval | A | C | C | C | I | | | C | I |
| Policy Review | A | C | A | R | | | | C | C |

---

## 6. Change Classification Criteria

*This section is critical for ensuring that every change submitted is correctly categorised so the appropriate approval workflow is followed. Classifications must be clearly defined and mutually exclusive.*

### 6.1 Classification Overview

All changes must be classified at the time of submission using the criteria defined in this section. The classification determines the approval authority, lead time, and documentation requirements for the change. Misclassification of a change is a policy violation and may result in disciplinary action.

The three primary change classifications used by [Organization Name] are:

| Classification | Risk Level | Examples | Approval Authority | Minimum Lead Time |
|---|---|---|---|---|
| Standard | Low | Pre-approved, repeatable procedures | Pre-authorised (no individual CAB) | [X] business days |
| Normal | Low to High | Application patches, infrastructure upgrades | CAB Chair (after CAB review) | [X] business days |
| Emergency | Critical/Urgent | Incident resolution, critical security patches | eCAB Chair | [X] hours |

### 6.2 Standard Change

A Standard Change is a pre-approved change that:

- Is low risk and follows a fully documented, tested, and repeatable procedure
- Has been formally approved by the CAB as a standard change procedure
- Has a known and understood impact on the production environment
- Has a defined and tested back-out procedure
- Requires no individual CAB review prior to each implementation

Standard changes are maintained in the [Organization Name] Standard Change Register. The Change Manager is responsible for maintaining this register and ensuring all standard change procedures are reviewed at least annually.

**Examples of Standard Changes at [Organization Name]:**

- [Example: Monthly password resets for privileged accounts following approved PAM procedure]
- [Example: Routine antivirus definition updates via automated deployment]
- [Example: Pre-approved SSL/TLS certificate renewals]
- [Example: Addition or removal of standard user accounts in line with the Access Control Policy]
- [Add further examples specific to the organisation]

### 6.3 Normal Change

A Normal Change is any change that does not qualify as a standard or emergency change and requires individual CAB review and approval. Normal changes are further sub-classified by risk level:

| Sub-Classification | Risk Score | Characteristics | Approval Required |
|---|---|---|---|
| **Low** | 1–4 | Minimal service impact, isolated scope, tested, well-understood | CAB Chair or delegated authority |
| **Medium** | 5–9 | Moderate service impact, defined scope, potential customer impact | Full CAB approval |
| **High** | 10–14 | Significant service impact, broad scope, regulatory/financial risk | Full CAB + CISO (if security-related) |
| **Major** | 15–25 | Enterprise-level impact, multi-system scope, high financial or regulatory risk | Full CAB + CIO/CTO approval |

*Risk scores are calculated using the Risk Assessment Matrix in Appendix B.*

**Factors that elevate a change to Major classification include:**

- Changes to core banking, payment processing, or customer-facing systems that may cause service unavailability exceeding [X] hours
- Changes with potential regulatory reporting implications
- Changes affecting cryptographic systems or key management infrastructure
- Changes involving mass customer data migration or transformation
- Changes to disaster recovery infrastructure affecting Recovery Time Objectives (RTO)
- [Additional criteria]

### 6.4 Emergency Change

An Emergency Change is a change that must be implemented immediately or within a very short timeframe to:

- Restore a failed or degraded production service
- Address an active or imminent cybersecurity threat or breach
- Fulfil an urgent regulatory directive from BNM or another competent authority
- Prevent significant financial loss or customer harm

**Emergency changes are NOT a mechanism to bypass the standard change process due to poor planning.** Changes submitted as emergency that do not meet the above criteria will be rejected by the eCAB Chair and must follow the normal change process.

**Post-implementation obligations for emergency changes are enhanced** — a full PIR and retrospective risk assessment must be completed within [48/72] hours of implementation.

---

## 7. Change Management Process Overview

*Provide a high-level description of the end-to-end change management process. A process flow diagram should be embedded or referenced in the appendices.*

### 7.1 Process Flow Summary

The [Organization Name] change management lifecycle follows these key phases for all non-standard changes:

1. **Initiation** — Change Requestor identifies the need for a change and creates a Change Request Form (CRF) in the ITSM system.
2. **Assessment** — Change Requestor conducts risk and impact analysis; Change Manager reviews for completeness.
3. **Review** — CAB reviews the change request, evaluates risks, and seeks clarifications.
4. **Approval / Rejection** — CAB Chair approves, rejects, or defers the change request.
5. **Scheduling** — Approved changes are placed on the Forward Schedule of Changes (FSC).
6. **Communication** — Stakeholders are notified of the change and its expected impact.
7. **Implementation** — Change Implementer executes the change during the approved implementation window.
8. **Verification** — Change Owner confirms successful implementation and system stability.
9. **Post-Implementation Review** — Outcomes are documented and lessons learned are captured.
10. **Closure** — Change Record is closed and the CMDB is updated.

### 7.2 ITSM Tooling

All change requests at [Organization Name] must be managed through the organisation's designated IT Service Management (ITSM) platform: **[ITSM Platform Name, e.g., ServiceNow / JIRA Service Management / Remedy]**.

- No change may be implemented without a corresponding, approved Change Record in the ITSM system.
- Manual change records (paper-based or email-only) are not acceptable except in the event of an ITSM system outage, in which case the manual process defined in Appendix C applies.
- The ITSM system serves as the authoritative record of all changes and is subject to regular audit.

### 7.3 Forward Schedule of Changes (FSC)

The Change Manager maintains a Forward Schedule of Changes (FSC) that:

- Documents all approved upcoming changes with their planned implementation dates and times
- Is published and accessible to all relevant stakeholders on at least a weekly basis
- Is reviewed at each CAB meeting for conflicts, resource constraints, and peak-period impacts
- Is updated immediately when changes are approved, deferred, or cancelled

---

## 8. Standard Change Process

*Detail the specific process for submitting, registering, and implementing standard (pre-approved) changes.*

### 8.1 Standard Change Register

The Change Manager maintains the Standard Change Register, which lists all approved standard change procedures. Each entry in the register includes:

| Field | Description |
|---|---|
| Standard Change ID | Unique identifier for the standard change procedure |
| Change Description | Brief description of the change activity |
| Applicable Systems | Systems and components to which the procedure applies |
| Procedure Document Reference | Reference to the detailed implementation procedure |
| Risk Level | Assessed risk level (must be Low) |
| Last Review Date | Date the procedure was last reviewed by the CAB |
| Next Review Date | Date by which the procedure must be reviewed |
| Status | Active / Suspended / Under Review |

### 8.2 Standard Change Implementation Process

1. Change Implementer identifies the applicable standard change procedure from the Standard Change Register.
2. Change Implementer raises a change record in the ITSM system, referencing the Standard Change ID.
3. Change Implementer confirms that all prerequisites specified in the procedure are met.
4. Change Implementer executes the change strictly in accordance with the documented procedure.
5. Change Implementer records implementation details and outcome in the ITSM change record.
6. System Owner or designated verifier confirms successful completion.
7. Change record is closed.

### 8.3 Deviation from Standard Change Procedure

If a Change Implementer encounters circumstances that require deviation from the approved standard change procedure, they must immediately:

- Stop the implementation
- Notify the Change Manager
- Raise a new Normal Change request to cover the required deviation

Under no circumstances may a change implementer deviate from an approved standard change procedure without prior authorisation.

### 8.4 New Standard Change Proposals

Any team may propose a new standard change procedure by submitting a proposal to the Change Manager. The proposal must include a draft procedure, risk assessment, and evidence of successful testing. The CAB must formally approve all new standard changes before they are added to the Standard Change Register.

---

## 9. Normal Change Process and CAB Review

*This section should describe the end-to-end process for normal changes in sufficient detail that any staff member can follow it without ambiguity.*

### 9.1 Submitting a Normal Change Request

All normal change requests must be submitted by the Change Requestor using the official Change Request Form (CRF) — Appendix A. The CRF must be completed in full, including:

- **Change Description** — clear and concise description of what is being changed and why
- **Business Justification** — the business, operational, or regulatory reason for the change
- **Systems Affected** — all configuration items (CIs) impacted by the change
- **Risk Assessment** — completed risk and impact assessment using the matrix in Appendix B
- **Change Classification** — the requestor's proposed classification (Low/Medium/High/Major)
- **Implementation Plan** — step-by-step implementation procedure
- **Back-Out Plan** — documented procedure to reverse the change if required
- **Test Plan and Results** — evidence of testing in a non-production environment
- **Change Window** — proposed date, time, and duration for implementation
- **Stakeholder Notification List** — list of parties to be notified of the change

Incomplete CRFs will be returned to the requestor by the Change Manager without being progressed to CAB.

### 9.2 Submission Lead Times

| Change Risk Level | Minimum Submission Lead Time | CAB Presentation |
|---|---|---|
| Low | [X] business days before proposed implementation | Next scheduled CAB meeting |
| Medium | [X] business days before proposed implementation | Next scheduled CAB meeting |
| High | [X] business days before proposed implementation | CAB meeting with [X] days notice |
| Major | [X] business days before proposed implementation | Special CAB session or scheduled major change review |

### 9.3 Change Manager Pre-Review

Upon receipt of a CRF, the Change Manager will:

1. Verify that the CRF is complete and that all mandatory fields are populated.
2. Validate the proposed classification against the criteria in Section 6.
3. Review for conflicts with other scheduled changes in the FSC.
4. Check for change freeze periods that may affect the proposed window.
5. Liaise with the Change Requestor to resolve any gaps or issues.
6. Place the change on the CAB agenda for the appropriate meeting.

### 9.4 CAB Review Process

The CAB will review each normal change request presented by the Change Manager. The review process includes:

1. **Presentation** — The Change Manager presents the change request to the CAB. The Change Requestor may be invited to present and answer questions.
2. **Risk Discussion** — CAB members assess the risk, impact, and adequacy of the implementation and back-out plans.
3. **Security Review** — The CISO or security representative assesses changes with security implications.
4. **Deliberation and Decision** — The CAB deliberates and reaches one of the following decisions:

| CAB Decision | Meaning | Outcome |
|---|---|---|
| **Approved** | Change is approved as submitted | Change is scheduled; Requestor notified |
| **Approved with Conditions** | Change is approved subject to additional requirements | Requestor must fulfil conditions before implementation |
| **Deferred** | Further information required; change is not approved at this meeting | Requestor provides additional information; resubmitted to next CAB |
| **Rejected** | Change is rejected and must not be implemented as proposed | Requestor notified with reasons; must redesign and resubmit |

5. **Documentation** — The Change Manager documents the CAB decision in the ITSM system and the CAB meeting minutes.

### 9.5 Approval Authority Matrix

| Change Classification | Approval Authority | Minimum Approvers |
|---|---|---|
| Low | Change Manager (delegated authority) | Change Manager |
| Medium | CAB | CAB Chair + [X] CAB members |
| High | CAB + CISO (if security-impacted) | CAB Chair + [X] CAB members + CISO |
| Major | CAB + CIO/CTO | CAB Chair + CIO/CTO + [X] CAB members |

### 9.6 Change Implementation

Upon approval, the Change Implementer must:

1. Confirm the approved change window with the Change Manager and affected stakeholders at least [X] hours/days before implementation.
2. Verify that all prerequisites specified in the CRF are met before beginning implementation.
3. Implement the change exactly as documented in the approved CRF. Any deviation requires the implementation to be stopped and the Change Manager notified immediately.
4. Record all implementation steps and timestamps in the ITSM change record in real time.
5. Upon completion, notify the Change Owner to initiate verification.

### 9.7 Change Verification

The Change Owner must verify that:

- The change has been implemented as intended
- The affected systems are operating normally
- No unintended consequences or service degradation are observed
- Verification tests specified in the CRF have been executed and passed

If verification fails, the Change Owner must immediately invoke the back-out plan (see Section 14).

---

## 10. Emergency Change Process

*The emergency change process must balance urgency with governance. Every step should minimise the governance shortcut while still enabling rapid response.*

### 10.1 Emergency Change Definition and Justification

Emergency changes are reserved exclusively for situations where delay would result in:

- Prolonged or worsening service outage affecting customers or critical business operations
- Active exploitation of a security vulnerability or ongoing security incident
- Regulatory non-compliance with immediate consequences
- Significant financial loss that cannot be mitigated without an immediate change

**The burden of proof for emergency classification lies with the Change Requestor.** The eCAB Chair will reject emergency change requests that are determined to be the result of inadequate planning.

### 10.2 Emergency Change Approval Process

| Step | Activity | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Change Requestor contacts the Change Manager (or on-call technology manager outside business hours) to declare an emergency change | Change Requestor | Immediately upon identification |
| 2 | Change Manager convenes the Emergency CAB (eCAB) via available communication channels (phone, instant messaging) | Change Manager | Within [X] minutes |
| 3 | Change Requestor presents the emergency, proposed change, implementation approach, and back-out plan verbally/electronically | Change Requestor | Within [X] minutes |
| 4 | eCAB reviews and approves or rejects the emergency change | eCAB Chair | Within [X] minutes |
| 5 | If approved, implementation begins immediately under the supervision of the Change Owner | Change Implementer | Immediately upon approval |
| 6 | Change Requestor creates or updates the ITSM change record to document all approvals and decisions (may be done retrospectively within [4/8] hours) | Change Requestor | Within [X] hours of implementation |
| 7 | Change Owner submits completed Post-Implementation Review within the required timeframe | Change Owner | Within [48/72] hours of implementation |

### 10.3 Emergency CAB (eCAB) Composition

The eCAB is a standing committee that may be convened at any time, including outside business hours. The minimum composition for an eCAB is:

| Member | Role | Contact Details |
|---|---|---|
| CAB Chair | eCAB Chair and final approver | [Contact Details — maintained in ITSM system] |
| CISO or Delegate | Security review | [Contact Details] |
| Technology Risk representative | Risk oversight | [Contact Details] |
| [System Owner / Technical Expert] | Technical advice | [Contact Details] |

An emergency change may only proceed with the explicit approval of the eCAB Chair. A minimum of [X] eCAB members must be convened.

### 10.4 Post-Emergency Review

All emergency changes are subject to mandatory post-implementation review:

- The full PIR must be submitted to the Change Manager within [48/72] hours of the emergency change implementation.
- The Change Manager must present all emergency changes from the preceding period at the next scheduled CAB meeting for retrospective review.
- Recurring emergency changes for the same system or issue must be escalated to the Technology Risk Committee for root cause analysis.
- Emergency changes classified as a result of poor planning will be flagged to the relevant System Owner's management and recorded as a control deficiency.

---

## 11. Change Advisory Board (CAB) Governance

*Define the formal governance structure, meeting cadence, quorum requirements, and decision-making process for the CAB.*

### 11.1 CAB Composition

The Change Advisory Board is a standing governance body with the following permanent membership:

| Role | Position | Voting Status |
|---|---|---|
| **CAB Chair** | [Head of IT Operations / CTO Representative] | Chair (casting vote) |
| **Change Manager** | [Change Manager] | Non-voting (secretary) |
| **CISO Representative** | [Security Operations Manager / CISO Delegate] | Voting |
| **Technology Risk Representative** | [Head of Technology Risk] | Voting |
| **Infrastructure Representative** | [Head of Infrastructure / Systems] | Voting |
| **Application Representative** | [Head of Application Management] | Voting |
| **Business Representative** | [Head of Operations / Business delegate] | Voting |
| **[Additional member]** | [Role] | Voting |

Subject matter experts and system owners may be invited to attend specific CAB meetings as non-voting participants when changes affecting their systems are under review.

### 11.2 Meeting Frequency and Scheduling

| Meeting Type | Frequency | Duration | Chairperson |
|---|---|---|---|
| Regular CAB | [Weekly / Bi-weekly] | [60–90 minutes] | CAB Chair |
| Emergency CAB (eCAB) | As required | [30–60 minutes] | CAB Chair or delegate |
| Major Change Review | As required | [90–120 minutes] | CAB Chair + CIO/CTO |

A schedule of CAB meetings for the year must be published by the Change Manager at the start of each calendar year.

### 11.3 Quorum Requirements

A CAB meeting requires the following minimum attendance to be valid:

- **CAB Chair** (or formally designated alternate) — mandatory
- **Minimum [X] voting members** out of the full voting membership

If quorum is not met, the meeting may not proceed and must be rescheduled. Emergency approval may be sought from the CAB Chair and a minimum of [X] members via documented electronic communication in exceptional circumstances.

### 11.4 Decision Making

- Decisions are made by consensus where possible.
- Where consensus cannot be reached, the CAB Chair has the casting vote.
- All CAB decisions are documented in the official CAB meeting minutes.
- Meeting minutes must be reviewed and approved by the CAB Chair within [X] business days of the meeting.
- Approved minutes are distributed to all CAB members and retained as an official record.

### 11.5 CAB Reporting

The Change Manager is responsible for producing and presenting the following reports at each CAB meeting:

- Summary of changes implemented since the last CAB meeting
- Outstanding change requests pending review
- Change success/failure rates and trend analysis
- Emergency changes implemented since last meeting
- Changes past their planned implementation date
- Post-Implementation Reviews due or overdue

---

## 12. Change Records and Documentation Requirements

*Specify the mandatory documentation requirements for each change type to ensure audit readiness and regulatory compliance.*

### 12.1 Mandatory Change Record Fields

All change records in the ITSM system must include the following mandatory information:

| Field | Description | Applicable To |
|---|---|---|
| Change ID | Unique system-generated identifier | All changes |
| Change Title | Brief descriptive title | All changes |
| Change Description | Detailed description of the change | All changes |
| Change Type | Standard / Normal (Low/Medium/High/Major) / Emergency | All changes |
| Change Requestor | Name and department of the requestor | All changes |
| Change Owner | Accountable individual | All changes |
| Change Implementer | Individual(s) implementing the change | All changes |
| Systems Affected | List of CIs and systems impacted | All changes |
| Business Justification | Rationale for the change | All changes |
| Risk Score | Calculated risk score with supporting assessment | Normal, Emergency |
| Implementation Plan | Step-by-step implementation procedure | All changes |
| Back-Out Plan | Documented reversal procedure | All changes |
| Test Evidence | Reference to test results and UAT sign-off | Normal, Standard |
| Requested Implementation Window | Proposed date, time, and duration | All changes |
| Approved Implementation Window | CAB-approved date, time, and duration | Normal, Emergency |
| CAB Approval Record | Names of approvers and approval date | Normal, Emergency |
| Actual Implementation Date/Time | Recorded start and end time | All changes |
| Implementation Outcome | Successful / Failed / Partially Successful / Rolled Back | All changes |
| PIR Reference | Reference to the completed Post-Implementation Review | Normal, Emergency |
| Change Closure Date | Date the change record was formally closed | All changes |

### 12.2 Document Retention

All change records and associated documentation must be retained in accordance with [Organization Name]'s Records Retention Policy. The minimum retention period for change records is **[7] years**, consistent with regulatory requirements under the Financial Services Act 2013 and BNM RMiT requirements.

---

## 13. Risk Assessment and Impact Analysis

*Provide detailed guidance on how risk assessments are to be conducted for each change. This section is critical for BNM RMiT compliance.*

### 13.1 Risk Assessment Requirement

A formal risk and impact assessment must be completed for all Normal and Emergency changes. The risk assessment must consider:

- **Technical Risk** — likelihood and impact of the change failing, causing system errors, or degrading performance
- **Security Risk** — potential for the change to introduce security vulnerabilities or weaken existing controls
- **Operational Risk** — potential disruption to business operations, customer services, or staff productivity
- **Data Risk** — risk of data loss, corruption, or unauthorised exposure resulting from the change
- **Regulatory Risk** — risk of the change resulting in non-compliance with BNM, PDPA, or other regulatory requirements
- **Dependency Risk** — impact on upstream and downstream systems and services that depend on the affected system

### 13.2 Risk Scoring Matrix

The following matrix must be used to calculate the risk score for each change. The risk score is calculated by multiplying the **Likelihood** score by the **Impact** score.

**Likelihood:**

| Score | Level | Description |
|---|---|---|
| 1 | Rare | Change of this type has rarely or never caused issues |
| 2 | Unlikely | Change of this type occasionally causes minor issues |
| 3 | Possible | Change of this type sometimes causes issues |
| 4 | Likely | Change of this type frequently causes issues |
| 5 | Almost Certain | Change of this type is expected to encounter difficulties |

**Impact:**

| Score | Level | Description |
|---|---|---|
| 1 | Negligible | No customer impact; minor internal inconvenience; fully reversible |
| 2 | Minor | Limited customer impact; isolated to single system; short recovery time |
| 3 | Moderate | Moderate customer impact; multiple systems affected; recovery within RTO |
| 4 | Significant | Significant customer impact; financial/reputational risk; recovery approaching RTO |
| 5 | Critical | Critical service failure; regulatory reporting required; recovery exceeds RTO |

**Risk Score Classification:**

| Risk Score | Risk Level | Change Classification |
|---|---|---|
| 1–4 | Low | Normal — Low |
| 5–9 | Medium | Normal — Medium |
| 10–14 | High | Normal — High |
| 15–25 | Major | Normal — Major |

### 13.3 Security Impact Assessment

Any change that scores 2 or above on the Security Risk dimension must be reviewed by the CISO or designated security representative. The security review must assess:

- Whether the change introduces new attack surfaces
- Whether existing security controls are maintained, weakened, or removed by the change
- Whether access control requirements change as a result of the change
- Whether vulnerability scanning or penetration testing is required before or after implementation
- Whether cryptographic controls or key material are affected

### 13.4 Regulatory Impact Assessment

Changes must be assessed for regulatory impact, particularly:

- Changes to systems that generate or hold data subject to BNM regulatory reporting obligations
- Changes affecting systems that process personal data under the PDPA 2010
- Changes that alter audit trails, logging, or monitoring capabilities
- Changes to systems used for financial crime compliance (AML/CFT)

---

## 14. Testing and Back-Out Requirements

*Testing and back-out plans are non-negotiable controls. This section must leave no ambiguity about what is required before a change can be approved for implementation.*

### 14.1 Testing Requirements

All Normal changes must be tested in an appropriate non-production environment prior to implementation in production. Evidence of successful testing must be submitted as part of the CRF.

| Change Risk Level | Minimum Testing Requirement |
|---|---|
| Low | Functional testing in development or staging environment |
| Medium | Functional testing + integration testing in staging environment; UAT sign-off |
| High | Full regression testing + integration testing + performance testing; UAT sign-off; Security testing where applicable |
| Major | Full regression, integration, performance, and security testing; UAT sign-off; DR test where applicable |
| Emergency | Best effort testing; formal testing must be completed post-implementation as part of PIR |

Testing must be conducted in an environment that is sufficiently representative of production to provide meaningful assurance. The Change Manager may reject change requests where the testing environment is not representative.

### 14.2 User Acceptance Testing (UAT)

Where a change affects business processes or customer-facing functionality, User Acceptance Testing must be completed and signed off by an authorised business representative before the change is submitted to the CAB.

### 14.3 Back-Out Plan Requirements

Every Normal and Emergency change must include a documented back-out plan. The back-out plan must:

- Be documented in the CRF and reviewed by the CAB as part of the change review
- Specify the exact steps required to reverse the change and restore the system to its pre-change state
- Specify the trigger conditions for invoking the back-out plan
- Specify who has authority to invoke the back-out plan
- Include a back-out time estimate and a defined back-out decision deadline (point of no return)
- Be tested where feasible, particularly for high-risk and major changes

| Change Risk Level | Back-Out Testing Requirement |
|---|---|
| Low | Not mandatory but recommended |
| Medium | Back-out procedure must be verified in a non-production environment |
| High | Back-out procedure must be tested and evidence submitted with CRF |
| Major | Back-out procedure must be fully tested, timed, and evidenced |

### 14.4 Point of No Return

The Change Implementer and Change Owner must agree on a **point of no return** for each change — a defined time threshold beyond which the change cannot be reversed without greater risk than proceeding. This must be documented in the CRF and communicated to the CAB.

If implementation has not reached the point of no return and issues are encountered, the Change Owner has authority to invoke the back-out plan without further CAB approval.

If implementation has passed the point of no return, the Change Owner must notify the Change Manager, who will convene the CAB Chair or eCAB for guidance.

---

## 15. Post-Implementation Review

*The PIR is a critical control for continuous improvement and regulatory evidence. Define the timeframes and content requirements clearly.*

### 15.1 PIR Requirement

A Post-Implementation Review is mandatory for:

- All Normal changes rated Medium, High, or Major
- All Emergency changes (regardless of outcome)
- All changes that failed or required back-out
- All changes where unexpected issues arose during implementation

The PIR is optional but recommended for Normal Low changes.

### 15.2 PIR Timeframes

| Change Type | PIR Submission Deadline |
|---|---|
| Normal — Medium | Within [5] business days of implementation |
| Normal — High | Within [3] business days of implementation |
| Normal — Major | Within [2] business days of implementation |
| Emergency | Within [48/72] hours of implementation |
| Failed / Rolled-Back Change | Within [2] business days of rollback completion |

### 15.3 PIR Content Requirements

The Post-Implementation Review must document:

| PIR Field | Description |
|---|---|
| Change ID | Reference to the original change record |
| Implementation Date and Time | Actual start and end time of implementation |
| Implementation Outcome | Successful / Partially Successful / Failed / Rolled Back |
| Planned vs. Actual Duration | Comparison of planned implementation window vs. actual time taken |
| Issues Encountered | Description of any issues, errors, or deviations from the plan |
| Back-Out Invoked? | Yes / No — if yes, document the back-out process and outcome |
| Customer / Operational Impact | Actual impact on customers and business operations |
| Root Cause (if issues occurred) | Analysis of why issues occurred |
| Lessons Learned | Improvements to be made to the change process, procedure, or design |
| Action Items | Specific remediation or improvement actions, owners, and deadlines |
| PIR Author | Name and role of the person completing the PIR |
| System Owner Sign-Off | Confirmation by the System Owner that the change outcome is accepted |

### 15.4 PIR Review and Closure

- The Change Manager reviews all PIRs for quality and completeness.
- PIRs for failed or emergency changes are presented at the next CAB meeting.
- Action items identified in PIRs are tracked by the Change Manager until closed.
- Recurring issues identified across multiple PIRs must be escalated to the Technology Risk Committee.

---

## 16. Change Freeze Periods

*Change freeze periods protect the organisation during critical business cycles. Define them clearly and specify the process for exceptions.*

### 16.1 Annual Change Freeze Schedule

[Organization Name] observes the following mandatory change freeze periods each year, during which no non-emergency changes may be implemented without the explicit approval of the CIO/CTO:

| Period | Dates | Rationale |
|---|---|---|
| Year-End Freeze | [Date range — e.g., 20 December to 5 January] | Year-end financial close and peak transaction volumes |
| BNM Statutory Reporting | [Date range] | Protect systems used for regulatory submissions |
| Hari Raya Aidilfitri | [Date range — typically 5 days around Eid] | Peak customer transaction period |
| Chinese New Year | [Date range — typically 5 days] | Peak customer transaction period |
| [Additional freeze period] | [Date range] | [Rationale] |

The annual change freeze calendar must be published by the Change Manager no later than [November/December] of the preceding year.

### 16.2 Ad Hoc Change Freeze

The CAB Chair, in consultation with the CIO/CTO, may declare an ad hoc change freeze at any time in response to:

- Active major incidents or service disruptions
- Active cybersecurity incidents or threats
- Urgent regulatory directives
- [Other triggers]

Ad hoc freezes must be communicated to all relevant stakeholders immediately via [communication channel] and documented in the ITSM system.

### 16.3 Change Freeze Exceptions

Exceptions to a change freeze may only be granted by the CIO/CTO upon written request from the CAB Chair. Exceptions will only be granted for:

- Emergency changes that meet the criteria in Section 10
- Regulatory-mandated changes with a fixed deadline that falls within the freeze period
- [Other criteria]

All freeze period exceptions must be documented and reported to the Board Risk Committee in the next technology risk report.

---

## 17. Policy Compliance, Monitoring, and Enforcement

*Define how compliance with this policy is measured, monitored, and enforced, including consequences of non-compliance.*

### 17.1 Key Performance Indicators

The Change Manager is responsible for tracking and reporting the following KPIs to the CAB and Technology Risk Committee on a [monthly/quarterly] basis:

| KPI | Target | Measurement Method |
|---|---|---|
| Change Success Rate | ≥ [95]% | ITSM reports |
| Emergency Change Rate | ≤ [5]% of total changes | ITSM reports |
| Changes Implemented Without Approval | 0 | Audit log review |
| PIR Completion Rate (mandatory PIRs) | 100% | ITSM reports |
| PIR Completed On Time | ≥ [95]% | ITSM reports |
| Failed Changes Resulting in Incident | ≤ [X]% | Incident/Change correlation |
| CAB Meeting Attendance Rate | ≥ [90]% | Meeting records |
| Change Freeze Violations | 0 | ITSM reports + audit log |
| Average Change Lead Time (Normal Medium) | ≤ [X] business days | ITSM reports |

### 17.2 Compliance Monitoring

Compliance with this policy is monitored through:

- **Continuous ITSM Monitoring** — automated reports and alerts for unauthorised changes, overdue PIRs, and changes outside approved windows
- **Change Audit Reviews** — the Change Manager conducts a [monthly] audit of change records for compliance with policy requirements
- **Internal Audit** — Internal Audit conducts independent periodic audits of the change management process, at minimum [annually]
- **BNM Examination Readiness** — change records and evidence are maintained in a manner that supports BNM supervisory examination at any time

### 17.3 Consequences of Non-Compliance

Non-compliance with this policy may result in:

| Violation Category | Example | Consequence |
|---|---|---|
| Minor | Incomplete CRF; late PIR submission | Formal warning; corrective action required |
| Moderate | Misclassification of change; implementation outside approved window | Disciplinary action; escalation to management |
| Serious | Implementing a change without CAB approval | Formal disciplinary action; mandatory retraining; potential suspension of system access |
| Critical | Deliberate bypass of change controls; changes during freeze without authorisation | Disciplinary action up to and including termination; regulatory disclosure if applicable |

Non-compliance incidents must be documented and reported to the Technology Risk Committee. Systemic or repeated non-compliance will be escalated to the Board Risk Committee.

---

## 18. Exceptions Management

*All policies require a formal exception process. Define it clearly to prevent ad hoc bypasses while providing a legitimate channel for genuine exceptions.*

### 18.1 Requesting a Policy Exception

Where strict compliance with this policy is not possible due to genuine operational, technical, or regulatory constraints, a formal exception request must be submitted to the Change Manager using the Policy Exception Request Form (Appendix D).

Exception requests must include:

- Description of the specific policy requirement for which an exception is sought
- Business justification and the risk of not granting the exception
- Proposed compensating controls to mitigate the risk of non-compliance
- Duration of the exception (exceptions must be time-limited)
- Change Owner's acknowledgement of the risk

### 18.2 Exception Approval Authority

| Exception Type | Approval Authority |
|---|---|
| Minor exception (e.g., extended lead time) | Change Manager |
| Standard exception (e.g., modified CAB composition) | CAB Chair |
| Significant exception (e.g., reduced testing requirements for a specific change) | CIO/CTO |
| Policy-level exception | Board Risk Committee |

### 18.3 Exception Register

All approved exceptions are recorded in the Policy Exception Register maintained by the Change Manager. The register is reviewed at each CAB meeting and reported to the Technology Risk Committee quarterly. Exceptions must not be renewed indefinitely — the root cause of the exception must be addressed and the policy amended if the exception reflects a genuine gap in the policy.

---

## 19. Review and Approval

### 19.1 Policy Review

This policy is subject to formal review in accordance with the following schedule:

| Review Trigger | Action Required |
|---|---|
| Annual scheduled review | Full policy review by the Change Manager and CAB; approval by CIO/CTO |
| Significant change to BNM RMiT or other applicable regulation | Immediate review and update; approval by CIO/CTO |
| Significant change to [Organization Name]'s technology environment | Review of affected sections; approval by CAB Chair |
| Material change management failure or incident | Review of relevant policy sections; approval by CAB Chair |
| Internal or external audit finding | Review and update of affected sections; approval as appropriate |

The Change Manager is responsible for initiating and managing the review process. All proposed policy changes must be reviewed by the CAB before being submitted for final approval.

### 19.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version — policy created |
| [Version] | [Date] | [Author Name] | [Description of changes] |
| [Version] | [Date] | [Author Name] | [Description of changes] |

### 19.3 Approval Sign-Off

By signing below, the approving parties confirm that they have reviewed this policy and that it accurately reflects [Organization Name]'s change management requirements and complies with all applicable regulatory obligations.

| Role | Name | Signature | Date |
|---|---|---|---|
| CAB Chair | [Name] | | [Date] |
| Chief Information Officer / CTO | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Head of Technology Risk | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| [Additional Approver] | [Name] | | [Date] |

---

## 20. References

*List all regulatory instruments, internal policies, and standards referenced or applicable to this policy.*

### 20.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.10 (Change Management) |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.1–10.9 (Technology Risk Governance) |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Sections 57, 58 |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Sections 57, 58 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Data Security Principle |
| BNM Cyber Risk | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Applicable sections] |
| [Additional reference] | [Title] | [Issuing body] | [Clauses] |

### 20.2 Internal Policy References

| Document ID | Title | Owner |
|---|---|---|
| [Doc ID] | IT Security Policy | CISO |
| [Doc ID] | Information Classification Policy | CISO |
| [Doc ID] | Incident Management Policy | Head of IT Operations |
| [Doc ID] | Business Continuity and Disaster Recovery Policy | Head of Business Continuity |
| [Doc ID] | Vendor and Third-Party Risk Management Policy | Head of Procurement / Technology Risk |
| [Doc ID] | Software Development Lifecycle (SDLC) Policy | Head of Application Development |
| [Doc ID] | Access Control and Privileged Access Management Policy | CISO |
| [Doc ID] | Records Retention Policy | Head of Compliance |
| [Additional Doc ID] | [Title] | [Owner] |

### 20.3 Industry Standards and Frameworks

| Standard | Title | Relevant Section |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Control A.8.32 — Change Management |
| ITIL 4 | IT Infrastructure Library | Change Enablement Practice |
| NIST SP 800-53 Rev. 5 | Security and Privacy Controls for Information Systems | CM-3 (Configuration Change Control) |
| [Additional standard] | [Title] | [Relevant section] |

---

## 21. Appendices

### Appendix A: Change Request Form (CRF) Template

*The Change Request Form (CRF) is the primary document used to initiate a change request. A completed CRF must be submitted through the ITSM system for all Normal and Emergency changes. The fields below represent the minimum required information.*

---

**CHANGE REQUEST FORM**

| Field | Details |
|---|---|
| **Change ID** | [Auto-generated by ITSM] |
| **Change Title** | [Brief descriptive title] |
| **Change Type** | ☐ Standard ☐ Normal — Low ☐ Normal — Medium ☐ Normal — High ☐ Normal — Major ☐ Emergency |
| **Change Requestor** | [Name, Department, Contact] |
| **Change Owner** | [Name, Department, Contact] |
| **Change Implementer(s)** | [Names and roles] |
| **Submission Date** | [Date] |
| **Requested Implementation Date/Time** | [Date and time] |
| **Requested Duration** | [Hours] |
| **Back-Out Decision Deadline (Point of No Return)** | [Time after start] |

**Section 1 — Change Description**

[Provide a detailed description of the change, including what is being changed, why it is being changed, and the expected outcome.]

**Section 2 — Systems and Configuration Items Affected**

| System / CI Name | CI Type | Owner | Impact Level |
|---|---|---|---|
| [System Name] | [Application / Infrastructure / Network / Database] | [Owner] | [High / Medium / Low] |

**Section 3 — Business Justification**

[Describe the business, operational, or regulatory reason for this change. Reference any project, incident, or regulatory directive that drives this change.]

**Section 4 — Risk and Impact Assessment**

| Risk Dimension | Likelihood (1–5) | Impact (1–5) | Risk Score | Mitigation |
|---|---|---|---|---|
| Technical Risk | | | | |
| Security Risk | | | | |
| Operational Risk | | | | |
| Data Risk | | | | |
| Regulatory Risk | | | | |
| Dependency Risk | | | | |
| **Overall Risk Score** | | | **[Total]** | |

**Overall Change Classification based on Risk Score:** [Low / Medium / High / Major]

**Section 5 — Implementation Plan**

| Step | Action | Responsible | Expected Duration |
|---|---|---|---|
| 1 | [Step description] | [Name/Role] | [Minutes] |
| 2 | [Step description] | [Name/Role] | [Minutes] |
| [n] | [Step description] | [Name/Role] | [Minutes] |

**Section 6 — Back-Out Plan**

| Step | Action | Responsible | Expected Duration |
|---|---|---|---|
| 1 | [Back-out step description] | [Name/Role] | [Minutes] |
| 2 | [Back-out step description] | [Name/Role] | [Minutes] |
| [n] | [Back-out step description] | [Name/Role] | [Minutes] |

**Back-Out Trigger Conditions:** [Describe conditions under which back-out will be invoked]

**Section 7 — Test Evidence**

| Test Type | Test Environment | Test Date | Result | Evidence Reference |
|---|---|---|---|---|
| [Functional Testing] | [Staging] | [Date] | [Pass/Fail] | [Reference] |
| [UAT] | [UAT Environment] | [Date] | [Pass/Fail] | [Sign-off reference] |

**Section 8 — Stakeholder Notification**

| Stakeholder | Notification Method | Notification Timing |
|---|---|---|
| [Name / Group] | [Email / System Alert / Meeting] | [X days/hours before implementation] |

**Section 9 — Change Requestor Declaration**

I confirm that the information provided in this Change Request Form is accurate and complete. I acknowledge that this change must not be implemented without formal CAB approval and that any deviation from the approved plan requires immediate escalation to the Change Manager.

| Requestor Name | Signature | Date |
|---|---|---|
| [Name] | | [Date] |

---

### Appendix B: Risk Assessment Matrix

*The Risk Assessment Matrix is to be used in conjunction with Section 13 of this policy. Change Requestors must use this matrix to calculate the risk score for all Normal and Emergency changes.*

**Risk Score Calculation:**

**Risk Score = Likelihood × Impact**

| | **Impact 1 — Negligible** | **Impact 2 — Minor** | **Impact 3 — Moderate** | **Impact 4 — Significant** | **Impact 5 — Critical** |
|---|:---:|:---:|:---:|:---:|:---:|
| **Likelihood 5 — Almost Certain** | 5 | 10 | 15 | 20 | 25 |
| **Likelihood 4 — Likely** | 4 | 8 | 12 | 16 | 20 |
| **Likelihood 3 — Possible** | 3 | 6 | 9 | 12 | 15 |
| **Likelihood 2 — Unlikely** | 2 | 4 | 6 | 8 | 10 |
| **Likelihood 1 — Rare** | 1 | 2 | 3 | 4 | 5 |

**Risk Score Key:**

| Score | Risk Level | Colour | Change Classification |
|---|---|---|---|
| 1–4 | Low | Green | Normal — Low |
| 5–9 | Medium | Yellow | Normal — Medium |
| 10–14 | High | Orange | Normal — High |
| 15–25 | Major | Red | Normal — Major |

---

### Appendix C: Manual Change Process (ITSM Unavailability)

*This appendix defines the process to be followed when the ITSM platform is unavailable and change requests cannot be submitted electronically.*

In the event that the ITSM system is unavailable, the following manual process applies:

1. The Change Requestor completes a physical or email-based Change Request Form (identical fields to Appendix A) and submits it to the Change Manager by email.
2. The Change Manager convenes the CAB via available communication channels (telephone, email, or instant messaging).
3. The CAB Chair documents approval via email, which constitutes a valid authorisation record.
4. All physical or email records must be uploaded to the ITSM system within [24/48] hours of the ITSM system being restored.
5. The Change Manager must log all changes processed under the manual process and present them for retrospective CAB review at the next scheduled CAB meeting.

---

### Appendix D: Policy Exception Request Form

*Use this form to formally request an exception to any requirement of this Change Management Policy.*

---

**POLICY EXCEPTION REQUEST FORM**

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-assigned] |
| **Requestor** | [Name, Role, Department] |
| **Date of Request** | [Date] |
| **Policy Reference** | Change Management Policy, Version [X] |
| **Specific Section / Clause** | [Section number and title] |

**Description of Exception Required:**

[Describe precisely what policy requirement cannot be complied with and why.]

**Business Justification:**

[Explain the business, operational, or technical reason why compliance is not possible. Include any constraints, timelines, or dependencies.]

**Risk Assessment:**

[Describe the risk of granting this exception and the risk of not granting it.]

**Proposed Compensating Controls:**

[Describe the compensating controls that will be put in place to mitigate the risk of non-compliance during the exception period.]

**Requested Exception Duration:**

From: [Date] To: [Date]

**Requestor Sign-Off:**

| Name | Role | Signature | Date |
|---|---|---|---|
| [Name] | [Role] | | [Date] |

**Approval:**

| Approver | Role | Decision | Signature | Date |
|---|---|---|---|---|
| [Name] | [CAB Chair / CIO-CTO / BRC] | ☐ Approved ☐ Rejected | | [Date] |

---

### Appendix E: CAB Meeting Agenda Template

*Standard agenda to be used for all scheduled CAB meetings.*

---

**CHANGE ADVISORY BOARD MEETING AGENDA**

**Meeting Date:** [Date]
**Meeting Time:** [Time]
**Location / Conference Link:** [Location / URL]
**Chairperson:** [CAB Chair Name]
**Minutes Recorder:** [Change Manager Name]

| Agenda Item | Description | Presenter | Time Allocation |
|---|---|---|---|
| 1 | Attendance and Quorum Confirmation | Change Manager | 5 mins |
| 2 | Review and Approval of Previous Minutes | CAB Chair | 5 mins |
| 3 | Changes Implemented Since Last Meeting — Status Update | Change Manager | 10 mins |
| 4 | Emergency Changes — Retrospective Review | Change Manager | 10 mins |
| 5 | Post-Implementation Reviews — Outstanding and Completed | Change Manager | 10 mins |
| 6 | KPI and Metrics Report | Change Manager | 10 mins |
| 7 | Upcoming Changes for Review and Approval | Change Manager / Requestors | 30–45 mins |
| 8 | Forward Schedule of Changes — Review and Conflicts | Change Manager | 10 mins |
| 9 | Change Freeze Calendar Update | Change Manager | 5 mins |
| 10 | Any Other Business | All | 5 mins |
| 11 | Next Meeting Date Confirmation | Change Manager | 2 mins |

---

### Appendix F: Change Management Metrics Dashboard

*The following metrics should be tracked and reported monthly to the CAB and quarterly to the Technology Risk Committee.*

| Metric | Current Period | Previous Period | Target | Status |
|---|---|---|---|---|
| Total Changes Submitted | [#] | [#] | — | — |
| Total Changes Approved | [#] | [#] | — | — |
| Total Changes Rejected | [#] | [#] | — | — |
| Total Changes Implemented | [#] | [#] | — | — |
| Change Success Rate | [%] | [%] | ≥ [95%] | ☐ On Track ☐ At Risk ☐ Breached |
| Emergency Change Rate | [%] | [%] | ≤ [5%] | ☐ On Track ☐ At Risk ☐ Breached |
| Failed / Rolled-Back Changes | [#] | [#] | 0 target | — |
| Unauthorised Changes | [#] | [#] | 0 | ☐ On Track ☐ Breached |
| PIR Completion Rate | [%] | [%] | 100% | ☐ On Track ☐ At Risk ☐ Breached |
| PIR On-Time Completion | [%] | [%] | ≥ [95%] | ☐ On Track ☐ At Risk ☐ Breached |
| Changes During Freeze Periods | [#] | [#] | 0 | ☐ On Track ☐ Breached |
| Policy Exceptions Active | [#] | [#] | — | — |

---

### Appendix G: Glossary of BNM RMiT Relevant Terms

*This appendix provides additional context on BNM RMiT terminology as it relates to change management for reference during regulatory examinations.*

| BNM RMiT Term | Definition in RMiT Context | Mapping to This Policy |
|---|---|---|
| Technology Change Management | The formal process for managing changes to IT systems to prevent unauthorised alterations and service disruptions (RMiT Clause 10.10) | Fully addressed by this policy |
| Change Advisory Board | A governance body responsible for evaluating change risks and approving changes (referenced in RMiT Clause 10.10) | Defined in Sections 5 and 11 |
| Emergency Change | A change implemented urgently to restore service or address an imminent threat (RMiT Clause 10.10) | Defined and governed in Section 10 |
| Post-Implementation Review | A review conducted after a change to assess outcomes and capture lessons learned (RMiT Clause 10.10) | Defined in Section 15 |
| Configuration Management | Management of IT components and their relationships, supporting change traceability (RMiT Clause 10.10) | Referenced in Sections 7 and 12 |

---

*End of Document*

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution of this document is prohibited. For queries regarding this policy, contact the Change Manager at [contact details].*

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Owner** | Change Advisory Board (CAB) Chair |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Classification** | Confidential |