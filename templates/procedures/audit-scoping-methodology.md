# Audit Scoping Methodology

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Internal Audit |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | Internal Audit |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws and regulations, including the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Audit Scoping Process Flow](#4-audit-scoping-process-flow)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Audit Universe and Risk-Based Plan](#6-audit-universe-and-risk-based-plan)
7. [Audit Methodology and Standards](#7-audit-methodology-and-standards)
8. [Finding Severity Classification](#8-finding-severity-classification)
9. [Quality Assurance and Continuous Monitoring](#9-quality-assurance-and-continuous-monitoring)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the **Audit Scoping Methodology** for [Organization Name], providing a structured, risk-based framework for identifying, scoping, and prioritising Information Technology (IT) audits. The methodology ensures that internal audit resources are directed toward areas of highest risk and strategic significance to [Organization Name], in full alignment with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document.

This methodology supports [Organization Name]'s obligation to maintain a robust internal audit function capable of providing independent and objective assurance over technology risk management, cybersecurity, operational resilience, and IT governance. It operationalises the requirements of **RMiT Clause 13.1**, which mandates that financial institutions establish a formal process for defining the scope and focus of technology-related audits on a risk-sensitive basis.

### 1.2 Objectives

The specific objectives of this methodology are to:

- Define a repeatable, evidence-based process for constructing and maintaining the IT audit universe.
- Establish criteria for risk-based prioritisation of audit engagements across all technology domains.
- Align audit planning with BNM RMiT requirements, internal risk appetite, and strategic priorities.
- Ensure audit coverage of critical systems, third-party service providers, and emerging technology risks.
- Provide a consistent framework for audit scoping decisions that can withstand regulatory scrutiny.
- Support continuous monitoring through dynamic re-scoping triggered by material risk events.

### 1.3 Document Authority

This methodology is a **mandatory** procedure document. Adherence is required of all personnel involved in the planning, execution, and oversight of IT audit activities at [Organization Name]. Any deviation from this methodology must be formally documented, justified, and approved by the Head of Internal Audit prior to commencement of the relevant audit engagement.

---

## 2. Regulatory and Policy Context

*This section identifies the regulatory instruments, policy documents, and internal governance frameworks that underpin this methodology. Authors should verify that all cited references remain current at each review cycle.*

### 2.1 Regulatory Requirements

| Reference | Instrument | Relevant Provision |
|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document (BNM/RH/PD 028-2) | Clause 13.1 – Technology Audit |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 13.2 – Audit Independence |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 13.3 – Audit Competency |
| BNM CMP | Climate Change and Principle-based Taxonomy | [Applicable provisions if relevant] |
| PDPA 2010 | Personal Data Protection Act 2010 | Section [X] – Data Governance Obligations |
| NACSA | National Cyber Security Policy | [Applicable provisions] |
| IIA Standards | International Standards for the Professional Practice of Internal Auditing | Standard 2010 – Planning; Standard 2200 – Engagement Planning |

### 2.2 Internal Policy Alignment

This methodology must be read in conjunction with the following internal policies and procedures:

- [Organization Name] Internal Audit Charter
- [Organization Name] IT Risk Management Policy
- [Organization Name] Information Security Policy
- [Organization Name] Technology Risk Management Framework
- [Organization Name] Vendor and Third-Party Risk Management Policy
- [Organization Name] Business Continuity Management Policy
- [Organization Name] Data Governance Policy

### 2.3 Key Regulatory Interpretation: RMiT Clause 13.1

*Authors should summarise the organisation's interpretation of RMiT Clause 13.1 as it applies to this methodology. The following is a template interpretation.*

RMiT Clause 13.1 requires [Organization Name] to ensure that its technology audit function:

- Covers all material technology systems, infrastructure, and processes.
- Applies a **risk-based approach** to determine audit frequency, depth, and scope.
- Incorporates assessments of cybersecurity, third-party risk, operational resilience, and data management.
- Is subject to **independent review** and **Board-level oversight**.
- Is updated to reflect changes in the technology risk landscape, including new systems, emerging threats, and regulatory developments.

[Organization Name] interprets this requirement to mandate a **continuous, dynamic audit scoping process** rather than a static annual planning exercise. Accordingly, this methodology incorporates both periodic planning cycles and event-triggered re-scoping mechanisms.

---

## 3. Scope and Applicability

*This section defines the boundaries of this methodology — what it covers, what it excludes, and who is bound by it.*

### 3.1 In-Scope Domains

This methodology applies to all IT audit engagements conducted by or on behalf of the Internal Audit function of [Organization Name], covering the following domains:

| Domain | Description | Examples |
|---|---|---|
| **Core Banking Systems** | Mission-critical transaction and customer management platforms | [System Name], [System Name] |
| **Payment Systems** | Retail and interbank payment infrastructure | [System Name], [System Name] |
| **Cybersecurity Controls** | Preventive, detective, and responsive security measures | SIEM, IAM, DLP, EDR |
| **IT Infrastructure** | Networks, servers, storage, cloud platforms | [Cloud Provider], Data Centre [Name] |
| **Data Management** | Data governance, data quality, and data protection | [System Name], Data Warehouse |
| **Third-Party / Outsourced IT** | IT services provided by external vendors | [Vendor Name], [Vendor Name] |
| **IT Governance and Risk** | Technology risk management processes and governance structures | Risk Register, ITSM tooling |
| **Business Applications** | Business-critical applications across all functions | [Application Name] |
| **Digital Channels** | Customer-facing digital banking platforms | Mobile Banking, Internet Banking |
| **Emerging Technologies** | AI/ML, cloud-native, API ecosystems | [Platform Name] |

### 3.2 Out-of-Scope

The following are explicitly excluded from this methodology unless otherwise determined by the Head of Internal Audit:

- Financial and operational audits with no material IT component.
- Regulatory compliance reviews conducted by [Compliance Function] (unless jointly scoped).
- External audits conducted by BNM examiners or external auditors (though findings from such reviews inform this methodology).
- Ad hoc investigations directed by the Audit Committee that fall under a separate investigation protocol.

### 3.3 Applicability

| Applicability | Applies To |
|---|---|
| **Mandatory** | All IT audit engagements, including thematic, cyclical, and follow-up audits |
| **Mandatory** | All Internal Audit staff involved in IT audit planning or execution |
| **Advisory** | Co-source and guest auditors engaged under the Internal Audit function |
| **Reference** | Risk, Compliance, and Technology functions that interface with Internal Audit |

### 3.4 Geographic and Entity Scope

*Specify the legal entities, subsidiaries, and geographic locations covered by this methodology.*

This methodology applies to all technology systems and processes operated by, or on behalf of:

- [Organization Name] (Parent Entity)
- [Subsidiary Name 1]
- [Subsidiary Name 2]
- Operations in: [List jurisdictions]

Material technology services outsourced to entities outside Malaysia remain in scope insofar as they support operations regulated by BNM.

---

## 4. Audit Scoping Process Flow

*This section describes the step-by-step process for defining audit scope. Each step should be documented in the audit management system. The process is designed to be iterative, with continuous monitoring feeding back into earlier stages.*

### 4.1 Process Overview

The audit scoping process comprises seven sequential phases, executed as part of both the annual planning cycle and any interim re-scoping exercise:

```
Phase 1: Establish / Refresh Audit Universe
        ↓
Phase 2: Conduct Technology Risk Assessment
        ↓
Phase 3: Risk-Based Prioritisation
        ↓
Phase 4: Develop Annual Audit Plan
        ↓
Phase 5: Individual Engagement Scoping
        ↓
Phase 6: Scope Approval and Communication
        ↓
Phase 7: Continuous Monitoring and Re-scoping
        ↑_______________________________________↑
```

### 4.2 Phase 1 — Establish / Refresh the Audit Universe

**Objective:** Maintain a comprehensive and current inventory of all auditable IT entities.

**Trigger:** Annual review (Q4 of each year) and upon notification of material changes to the technology environment.

**Steps:**

1. **Obtain Current Technology Inventory**
   - Retrieve the current IT asset register from [Technology / IT Department].
   - Obtain the vendor and third-party IT service register from [Procurement / Risk Function].
   - Review the current year's IT project pipeline and recently decommissioned systems.

2. **Define Auditable Entities**
   - Decompose the technology environment into discrete **auditable entities** — units of sufficient granularity to be individually assessed and audited.
   - Each auditable entity must be assigned to one of the domains defined in Section 3.1.

3. **Validate Completeness**
   - Cross-reference with prior audit plans to identify any newly established systems not yet in the universe.
   - Review BNM RMiT compliance registers for systems subject to specific regulatory obligations.
   - Confirm with the Chief Information Officer (CIO) or Chief Technology Officer (CTO) that no material systems are omitted.

4. **Document in Audit Management System**
   - Record all auditable entities in [Audit Management System Name] using the template in **Appendix A**.

**Output:** Updated Audit Universe Register (see Section 6.1).

---

### 4.3 Phase 2 — Technology Risk Assessment

**Objective:** Assess the inherent and residual risk of each auditable entity to enable objective prioritisation.

**Inputs:**
- Enterprise Risk Register (maintained by [Risk Function])
- Technology Risk Register (maintained by [IT Risk Function])
- Prior internal audit findings and management action plan status
- External threat intelligence reports (e.g., BNM Financial Intelligence Unit advisories, FinSAC circulars)
- Results of prior BNM examinations and external audit reports
- Incident and near-miss logs from [Security Operations Centre / IT Operations]
- Third-party assessment reports (e.g., penetration test results, vendor audits)

**Risk Dimensions Assessed:**

| Dimension | Definition | Scoring Scale |
|---|---|---|
| **Strategic Significance** | Degree to which the system supports critical business objectives | 1 (Low) – 5 (Critical) |
| **Regulatory Criticality** | Extent of direct BNM RMiT / PDPA obligations | 1 (Low) – 5 (Critical) |
| **Inherent Risk** | Risk level prior to controls, based on threat and vulnerability exposure | 1 (Low) – 5 (Critical) |
| **Control Effectiveness** | Quality and maturity of existing controls; inverse of residual risk | 1 (Ineffective) – 5 (Highly Effective) |
| **Change Velocity** | Rate of change in the system or its environment | 1 (Stable) – 5 (Rapidly Changing) |
| **Prior Audit History** | Time since last audit and severity of prior findings | 1 (Recent, Clean) – 5 (Overdue, High Findings) |
| **Third-Party Dependency** | Reliance on external service providers with limited direct oversight | 1 (None) – 5 (Fully Outsourced, Critical) |
| **Data Sensitivity** | Volume and sensitivity of personal or confidential data processed | 1 (None) – 5 (Large-scale, Highly Sensitive) |

**Risk Score Calculation:**

The composite risk score for each auditable entity is calculated as follows:

> **Composite Risk Score = (Strategic Significance × W₁) + (Regulatory Criticality × W₂) + (Inherent Risk × W₃) + (1/Control Effectiveness × W₄) + (Change Velocity × W₅) + (Prior Audit History × W₆) + (Third-Party Dependency × W₇) + (Data Sensitivity × W₈)**

Where W₁ through W₈ are weighting factors determined by the Head of Internal Audit in consultation with the Audit Committee, summing to 1.0. Default weightings are documented in **Appendix B**.

**Output:** Technology Risk Assessment Matrix (see Section 6.2).

---

### 4.4 Phase 3 — Risk-Based Prioritisation

**Objective:** Rank auditable entities by composite risk score to determine audit frequency and priority.

**Prioritisation Tiers:**

| Tier | Composite Score Range | Indicative Audit Frequency | Description |
|---|---|---|---|
| **Tier 1 – Critical** | 4.0 – 5.0 | Annual or more frequent | Highest risk; mandatory coverage each audit cycle |
| **Tier 2 – High** | 3.0 – 3.9 | Annual | Significant risk; coverage required each cycle |
| **Tier 3 – Medium** | 2.0 – 2.9 | Every 2 years | Moderate risk; coverage on rotating basis |
| **Tier 4 – Low** | 1.0 – 1.9 | Every 3 years or as capacity permits | Lower risk; included when resources allow |

**Overrides and Mandatory Coverage:**

Notwithstanding composite risk scores, the following auditable entities must be included in every annual audit plan regardless of tier:

- All systems classified as **Critical IT Systems** under [Organization Name]'s Business Impact Assessment.
- All systems subject to a BNM regulatory directive or MOU commitment.
- Any system that experienced a **material security incident** or **data breach** in the preceding 12 months.
- All systems for which the most recent audit resulted in a **Critical or High severity finding** with an overdue Management Action Plan.
- Core payment systems subject to BNM Payment Systems Act obligations.

**Output:** Prioritised Audit Universe (ranked list of auditable entities with assigned tiers).

---

### 4.5 Phase 4 — Develop the Annual Audit Plan

**Objective:** Translate the prioritised audit universe into a structured, resourced, and Board-approved Annual IT Audit Plan.

**Steps:**

1. **Allocate Audit Resources**
   - Determine available Internal Audit FTE capacity for IT audit engagements for the coming year.
   - Identify co-sourcing requirements for specialised technical audits (e.g., penetration testing, cloud security, AI model governance).

2. **Draft Audit Calendar**
   - Map Tier 1 and Tier 2 engagements to specific quarters, accounting for:
     - Business blackout periods (e.g., year-end processing, regulatory submission windows).
     - Known technology change freezes.
     - Availability of key auditee personnel.

3. **Define Coverage Targets**
   - Tier 1: 100% coverage per cycle.
   - Tier 2: 100% coverage per cycle.
   - Tier 3: Minimum [X]% coverage per cycle (agreed with Audit Committee).
   - Tier 4: Best efforts; documented justification for any coverage.

4. **Secure Approval**
   - Present the draft Annual Audit Plan to the Audit Committee for review and approval.
   - Obtain sign-off from the Board Risk Committee (or equivalent) where required by the Internal Audit Charter.

5. **Communicate the Plan**
   - Distribute the approved plan to the CIO, CTO, Chief Risk Officer (CRO), and relevant business unit heads.

**Output:** Board/Audit Committee-approved Annual IT Audit Plan.

---

### 4.6 Phase 5 — Individual Engagement Scoping

**Objective:** Define the specific boundaries, objectives, and approach for each individual audit engagement.

For each planned engagement, the assigned Audit Lead must prepare an **Audit Engagement Scope Document** covering:

1. **Engagement Objectives**
   - Primary audit objective(s), aligned to the risk rationale for inclusion in the plan.
   - Specific RMiT clauses or other regulatory requirements to be assessed.

2. **Scope Boundary Definition**
   - In-scope systems, processes, organisational units, and time periods.
   - Explicitly out-of-scope items with rationale.
   - Interface dependencies: systems or processes that are adjacent to scope but not directly audited.

3. **Audit Approach**
   - Audit methodology to be applied (see Section 7).
   - Sampling strategy and population definitions.
   - Data analytics and technology-assisted audit techniques to be employed.

4. **Key Risks and Control Objectives**
   - Mapping of identified risks to control objectives and planned audit procedures.

5. **Resource Plan**
   - Named auditors, estimated hours, and engagement timeline.
   - Co-source or specialist requirements.

6. **Preliminary Engagement Communication**
   - Notification to auditee management of engagement scope, timeline, and document request list.

**Output:** Signed Audit Engagement Scope Document (template in **Appendix C**).

---

### 4.7 Phase 6 — Scope Approval and Communication

**Objective:** Ensure all engagement scopes are approved by the appropriate authority before fieldwork commences.

| Engagement Type | Approval Authority |
|---|---|
| Tier 1 / Critical System Audit | Head of Internal Audit |
| Tier 2 / High Risk Audit | Head of Internal Audit |
| Tier 3 / Medium Risk Audit | Senior Audit Manager |
| Regulatory-Mandated Audit | Head of Internal Audit + Audit Committee Chair |
| Unplanned / Urgent Audit | Head of Internal Audit (with retrospective Audit Committee notification) |

Approved scopes must be communicated to auditee management no later than **[X] business days** before fieldwork commencement, except where the nature of the engagement (e.g., surprise audit) precludes advance notice.

---

### 4.8 Phase 7 — Continuous Monitoring and Re-Scoping

**Objective:** Ensure the audit plan and individual engagement scopes remain current in response to emerging risks.

**Continuous Monitoring Inputs:**

- Daily/weekly threat intelligence feeds reviewed by [Security Operations].
- Monthly IT risk register updates from [IT Risk Function].
- BNM circulars, FinSAC advisories, and industry alerts.
- Whistleblower and hotline reports relating to technology controls.
- Material IT incidents notified under the Incident Management process.
- Significant changes to IT systems, architecture, or third-party arrangements.

**Re-Scoping Triggers:**

The Head of Internal Audit must consider immediate re-scoping of current or planned engagements upon:

- A **material cybersecurity incident** affecting any Tier 1 or Tier 2 system.
- A **BNM regulatory notification** identifying concerns about a specific technology domain.
- A **significant change** to an in-scope system that invalidates prior scoping assumptions.
- **Management request** backed by documented risk rationale (subject to independence assessment).
- Identification of **previously unknown auditable entities** of material risk.

Any re-scoping decisions and their rationale must be documented in [Audit Management System] and reported to the Audit Committee at the next scheduled meeting.

---

## 5. Roles and Responsibilities

*This section defines accountability for all activities within this methodology. The RACI matrix below should be reviewed against the current organisational structure at each annual review.*

### 5.1 Key Roles

| Role | Description |
|---|---|
| **Board of Directors / Board Risk Committee** | Ultimate oversight of the Internal Audit function; approves the Internal Audit Charter |
| **Audit Committee** | Approves the Annual IT Audit Plan; receives and reviews audit reports; oversees audit independence |
| **Head of Internal Audit** | Owns this methodology; accountable for the quality and coverage of the IT audit programme |
| **Senior Audit Manager (IT)** | Manages day-to-day delivery of IT audit engagements; supervises audit leads |
| **Audit Lead** | Responsible for individual engagement scoping, execution, and reporting |
| **Audit Team Member** | Executes fieldwork procedures under direction of the Audit Lead |
| **Chief Information Officer (CIO) / CTO** | Provides technology environment information; validates audit universe completeness |
| **Chief Risk Officer (CRO)** | Provides enterprise risk context; shares risk register inputs |
| **Chief Information Security Officer (CISO)** | Provides cybersecurity risk inputs; facilitates access to security tooling and logs |
| **IT Risk Manager** | Maintains Technology Risk Register; provides risk assessment inputs |
| **Auditee Management** | Cooperates with audit access requests; provides documentation and evidence |
| **Co-Source Provider** | Provides specialist technical capability under direction of Head of Internal Audit |

### 5.2 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Board / Audit Committee | Head of Internal Audit | Senior Audit Manager | Audit Lead | CIO / CTO | CRO / CISO | Auditee Management |
|---|---|---|---|---|---|---|---|
| Approve Internal Audit Charter | A | R | I | I | I | I | I |
| Establish / Refresh Audit Universe | I | A | R | C | C | C | I |
| Conduct Technology Risk Assessment | I | A | R | R | C | C | I |
| Risk-Based Prioritisation | I | A | R | C | I | C | I |
| Draft Annual Audit Plan | A | A | R | C | C | C | I |
| Present Audit Plan to Audit Committee | A | R | C | I | I | I | I |
| Approve Annual Audit Plan | A | I | I | I | I | I | I |
| Individual Engagement Scoping | I | A | C | R | I | C | C |
| Approve Engagement Scope | I | A | R | I | I | I | I |
| Communicate Scope to Auditee | I | I | A | R | I | I | R |
| Execute Audit Fieldwork | I | A | R | R | I | I | C |
| Continuous Monitoring | I | A | R | C | C | C | I |
| Re-Scoping Decisions | I | A | R | C | C | C | I |
| Report Re-Scoping to Audit Committee | A | R | C | I | I | I | I |
| Methodology Review (Quarterly) | I | A | R | C | I | C | I |

---

## 6. Audit Universe and Risk-Based Plan

*This section describes the structure and content of the Audit Universe Register and the Annual Audit Plan. Both documents are maintained in [Audit Management System] and referenced here by structure only.*

### 6.1 Audit Universe Register

The Audit Universe Register is the authoritative inventory of all auditable IT entities. It must be maintained as a living document and reviewed at minimum on a **quarterly basis**, with a full refresh annually.

**Required Fields:**

| Field | Description |
|---|---|
| **Entity ID** | Unique identifier (format: AU-[Year]-[Sequence]) |
| **Entity Name** | Descriptive name of the auditable entity |
| **Domain** | Technology domain (per Section 3.1) |
| **Description** | Brief description of the entity's function and scope |
| **System Owner** | Business owner responsible for the system |
| **Technical Owner** | IT owner responsible for the system |
| **Regulatory Classification** | BNM-regulated / PDPA-applicable / Critical System / Other |
| **Third-Party Involvement** | Yes/No; if yes, vendor name and service type |
| **Last Audit Date** | Date of most recent completed audit |
| **Last Audit Outcome** | Clean / Minor Findings / Significant Findings / Critical Findings |
| **Current Risk Tier** | Tier 1 / 2 / 3 / 4 (per Phase 3 prioritisation) |
| **Composite Risk Score** | Numerical score from risk assessment |
| **Next Scheduled Audit** | Target quarter/year for next audit |
| **Notes** | Any material context relevant to scoping decisions |

### 6.2 Technology Risk Assessment Matrix

The Technology Risk Assessment Matrix records the risk scoring of each auditable entity against the dimensions defined in Phase 2. It serves as the evidentiary basis for prioritisation decisions.

**Sample Structure:**

| Entity ID | Entity Name | Strategic Sig. | Regulatory Crit. | Inherent Risk | Control Effectiveness | Change Velocity | Prior Audit History | Third-Party Dependency | Data Sensitivity | Composite Score | Risk Tier |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AU-[Year]-001 | [System Name] | [Score] | [Score] | [Score] | [Score] | [Score] | [Score] | [Score] | [Score] | [Score] | [Tier] |
| AU-[Year]-002 | [System Name] | [Score] | [Score] | [Score] | [Score] | [Score] | [Score] | [Score] | [Score] | [Score] | [Tier] |

*Complete the full matrix for all auditable entities. Retain prior-year matrices for trend analysis.*

### 6.3 Annual IT Audit Plan Structure

The Annual IT Audit Plan is presented to the Audit Committee for approval and contains the following components:

**Part A — Executive Summary**
- Summary of the IT risk landscape for the planning year.
- Total number of auditable entities by tier.
- Planned coverage rates by tier.
- Total planned audit days and resource allocation.
- Summary of prior year plan execution (coverage achieved vs planned).

**Part B — Planned Engagements**

| Engagement ID | Audit Entity / Scope | Risk Tier | Regulatory Driver | Planned Quarter | Estimated Days | Lead Auditor | Co-Source Required |
|---|---|---|---|---|---|---|---|
| IT-[Year]-001 | [Engagement Name] | Tier [X] | RMiT [Clause] | Q[X] [Year] | [X] days | [Name] | Yes / No |
| IT-[Year]-002 | [Engagement Name] | Tier [X] | RMiT [Clause] | Q[X] [Year] | [X] days | [Name] | Yes / No |

**Part C — Coverage Analysis**

| Domain | Total Entities | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Planned for Coverage | Coverage % |
|---|---|---|---|---|---|---|---|
| Core Banking Systems | [X] | [X] | [X] | [X] | [X] | [X] | [X]% |
| Payment Systems | [X] | [X] | [X] | [X] | [X] | [X] | [X]% |
| Cybersecurity Controls | [X] | [X] | [X] | [X] | [X] | [X] | [X]% |
| IT Infrastructure | [X] | [X] | [X] | [X] | [X] | [X] | [X]% |
| Data Management | [X] | [X] | [X] | [X] | [X] | [X] | [X]% |
| Third-Party IT | [X] | [X] | [X] | [X] | [X] | [X] | [X]% |
| **Total** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]%** |

**Part D — Resource Plan**

| Resource Category | Available Days | Allocated to IT Audit | Allocation % |
|---|---|---|---|
| Internal Audit FTE | [X] | [X] | [X]% |
| Co-Source — General IT | [X] | [X] | [X]% |
| Co-Source — Cybersecurity | [X] | [X] | [X]% |
| Co-Source — Cloud | [X] | [X] | [X]% |
| **Total** | **[X]** | **[X]** | **[X]%** |

---

## 7. Audit Methodology and Standards

*This section defines the standards, frameworks, and methodological principles that govern how IT audits are planned and executed at [Organization Name]. It ensures consistency of approach and defensibility of conclusions.*

### 7.1 Governing Standards

All IT audit engagements must be conducted in accordance with:

| Standard | Applicability |
|---|---|
| **IIA International Standards for the Professional Practice of Internal Auditing** | Mandatory for all engagements |
| **ISACA IT Audit and Assurance Standards** | Mandatory for technology-focused engagements |
| **COBIT 2019** | Reference framework for IT governance and control assessment |
| **NIST Cybersecurity Framework (CSF)** | Reference framework for cybersecurity control assessment |
| **ISO/IEC 27001:2022** | Reference standard for information security management |
| **BNM RMiT Policy Document** | Mandatory; governs technology risk and audit requirements |
| **BNM Operational Risk Integrated Online Network (ORION)** | Reporting obligations for material findings |
| **[Organization Name] Internal Audit Methodology** | Internal standard; supersedes the above where more stringent |

### 7.2 Audit Phases and Approach

Each IT audit engagement follows a five-phase lifecycle:

#### Phase A — Planning

- Finalise engagement scope (per Section 4.6).
- Conduct pre-engagement risk assessment and control environment review.
- Review prior audit workpapers, findings, and management action plan status.
- Prepare audit programme and testing procedures.
- Issue formal engagement notification to auditee.

#### Phase B — Fieldwork

- Execute planned audit procedures in accordance with the audit programme.
- Gather and evaluate evidence using the techniques described in Section 7.3.
- Document findings in [Audit Management System] with supporting workpapers.
- Conduct ongoing communication with auditee on emerging findings.

#### Phase C — Reporting

- Draft audit report incorporating all findings with preliminary severity ratings.
- Conduct findings validation meeting with auditee management.
- Incorporate management responses and agreed Management Action Plans.
- Issue final audit report to auditee, CIO, CRO, and Head of Internal Audit.
- Distribute to Audit Committee per the reporting schedule.

#### Phase D — Follow-Up

- Track management action plan implementation against agreed deadlines.
- Verify closure of findings through evidence review and/or targeted follow-up procedures.
- Escalate overdue or inadequately addressed actions to the Audit Committee.

#### Phase E — Engagement Quality Review

- Conduct post-engagement quality review per the Internal Audit Quality Assurance Programme.
- Incorporate lessons learned into the audit universe and methodology.

### 7.3 Evidence Gathering Techniques

Audit teams may employ the following techniques, with selection driven by the nature of the risk and control being assessed:

| Technique | Description | Typical Application |
|---|---|---|
| **Inquiry** | Interviews with system owners, operators, and control owners | Control design assessment; process understanding |
| **Observation** | Direct observation of processes and controls in operation | Physical security; change management processes |
| **Inspection of Documents** | Review of policies, procedures, configurations, and records | Policy compliance; control documentation |
| **Re-performance** | Independent execution of a control to verify it operates as described | Automated control testing; reconciliation procedures |
| **Data Analytics** | Analysis of large data populations using CAATs | Access control reviews; transaction monitoring |
| **Vulnerability Assessment** | Automated scanning of systems for known vulnerabilities | Infrastructure; application security |
| **Penetration Testing** | Controlled exploitation of vulnerabilities | As specified in the engagement scope; requires specific authorisation |
| **Configuration Review** | Assessment of system configuration against security baselines | Servers, network devices, cloud platforms |
| **Log Analysis** | Review of system, security, and access logs | Cybersecurity; access monitoring |
| **Third-Party Report Review** | Assessment of vendor-provided assurance reports (e.g., SOC 2 Type II, ISAE 3402) | Third-party IT service providers |

### 7.4 Sampling Standards

| Population Type | Minimum Sample Size | Sampling Methodology |
|---|---|---|
| Access control reviews (user populations) | Higher of [X]% or [X] users | Risk-based; statistical where population > [X] |
| Change management (changes in period) | [X]% or [X] changes, whichever is greater | Statistical random |
| Incident records | [X] incidents or full population if < [X] | Judgmental; bias toward high/critical severity |
| Privileged access activity logs | [X]% of privileged user activity | Risk-based; focus on sensitive operations |
| Configuration settings | All critical settings per defined baseline | Full population (not sampled) |

*Sampling parameters above are defaults; Audit Leads may deviate with documented justification approved by the Senior Audit Manager.*

### 7.5 Use of Data Analytics and Technology-Assisted Audit Techniques (TAATs)

[Organization Name]'s Internal Audit function is committed to progressively increasing the use of data analytics and TAATs to enhance audit coverage, efficiency, and the detection of control failures that would not be identified through manual sampling alone.

**Planned TAAT Capabilities:**

| Capability | Tool / Platform | Application |
|---|---|---|
| Data extraction and analysis | [Tool Name, e.g., ACL Analytics / IDEA] | Transaction analysis; population extraction |
| Automated control monitoring | [Tool Name] | Continuous control monitoring |
| Vulnerability scanning | [Tool Name, e.g., Nessus / Qualys] | IT infrastructure audits |
| Log analysis | [Tool Name, e.g., Splunk / Elastic] | Cybersecurity audits; access reviews |
| AI-assisted anomaly detection | [Tool Name / Platform] | Fraud risk; access anomalies |

---

## 8. Finding Severity Classification

*This section establishes a consistent and defensible framework for classifying the severity of audit findings. Consistent severity classification is essential for prioritising management responses, aggregating risk, and meeting BNM reporting requirements.*

### 8.1 Severity Classification Framework

All audit findings must be assigned a severity rating using the following framework. The rating is based on the **higher** of the potential impact and the likelihood of the risk materialising.

| Severity Level | Definition | Required Management Response | Escalation |
|---|---|---|---|
| **Critical** | Control failure that has resulted in, or presents an imminent risk of, material financial loss, regulatory breach, significant reputational damage, or compromise of critical systems or data. | Immediate remediation required. Management action plan within **5 business days**. CEO and Board notification may be required. | Immediate escalation to Head of Internal Audit; Audit Committee notified within 5 business days; BNM notification per regulatory obligations. |
| **High** | Significant control weakness that materially increases the risk of financial loss, regulatory non-compliance, or operational disruption. Remediation is urgent but not requiring immediate cessation of activity. | Management action plan within **30 days**. Remediation within **90 days** (or agreed extended timeline with justification). | Escalated to Head of Internal Audit; reported to Audit Committee at next scheduled meeting. |
| **Medium** | Control gap or weakness that represents a meaningful risk exposure, but with mitigating controls or circumstances that limit immediate severity. | Management action plan within **60 days**. Remediation within **180 days**. | Reported to Senior Audit Manager; included in periodic Audit Committee reporting. |
| **Low** | Minor deficiency or observation where the risk impact is limited and existing compensating controls are largely effective. | Management to note and address as part of normal operations. Remediation within **12 months**. | Included in full audit report; monitored through standard follow-up process. |
| **Informational / Advisory** | Observation, best practice recommendation, or emerging risk not constituting a current control failure. | No mandatory action required; management response encouraged. | Included in full audit report for management awareness. |

### 8.2 Severity Assessment Criteria

When assigning severity ratings, Audit Leads must consider the following dimensions:

| Dimension | Critical | High | Medium | Low |
|---|---|---|---|---|
| **Financial Impact** | > [RM X million] or material to financial statements | [RM X – X million] | [RM X – X million] | < [RM X] |
| **Regulatory Impact** | Direct BNM breach; reportable incident | Potential BNM breach; corrective action risk | Regulatory gap; advisory risk | Best practice deviation |
| **Customer / Data Impact** | Large-scale PII breach; customer harm | Material data exposure; limited customer impact | Limited data exposure; no customer harm | Negligible |
| **Operational Impact** | Critical system unavailability | Material operational disruption | Limited operational impact | Negligible |
| **Reputational Impact** | Material media / public exposure risk | Potential reputational damage | Internal only | Negligible |

### 8.3 Aggregation of Findings

Where multiple findings of lower individual severity collectively indicate a **systemic control weakness**, the Audit Lead must consider whether an aggregated rating is warranted. Aggregated findings must be documented as such and the individual findings cross-referenced.

**Aggregation Triggers:**

- Three or more Medium findings in the same control domain within a single engagement.
- Recurring findings (same finding across two or more audit cycles).
- Findings that individually score High but collectively indicate a critical process breakdown.

### 8.4 Finding Documentation Requirements

Each finding must be documented in [Audit Management System] with the following components:

| Component | Description |
|---|---|
| **Finding ID** | Unique reference (format: [Engagement ID]-F[Sequence]) |
| **Finding Title** | Concise, descriptive title |
| **Severity Rating** | Critical / High / Medium / Low / Informational |
| **Condition** | What the audit team found |
| **Criteria** | The standard, policy, or control requirement against which the condition is measured |
| **Cause** | Root cause of the condition |
| **Effect / Risk** | Actual or potential consequence of the condition |
| **Recommendation** | Specific remediation action recommended by Internal Audit |
| **Management Response** | Auditee management's response, including agreed action and responsible owner |
| **Target Remediation Date** | Agreed date by which remediation will be completed |
| **RMiT / Regulatory Reference** | Specific clause(s) of BNM RMiT or other regulation breached or at risk |

### 8.5 Escalation Procedures for Critical and High Findings

Upon identification of a **Critical** finding:

1. The Audit Lead notifies the Senior Audit Manager verbally within **24 hours**.
2. The Senior Audit Manager escalates to the Head of Internal Audit within **24 hours**.
3. The Head of Internal Audit assesses whether immediate notification to the Audit Committee Chair, CEO, or CRO is warranted.
4. The Head of Internal Audit determines whether BNM notification obligations are triggered under applicable reporting requirements.
5. An **Immediate Management Alert** (template in **Appendix D**) is issued to auditee management within **2 business days**.

For **High** findings, escalation to the Head of Internal Audit is required within **5 business days** of finding confirmation.

---

## 9. Quality Assurance and Continuous Monitoring

### 9.1 Quality Assurance Programme

The Internal Audit function maintains a Quality Assurance and Improvement Programme (QAIP) that encompasses all aspects of this methodology. The QAIP includes:

**Internal Assessments:**
- Engagement-level quality reviews by the Senior Audit Manager for all Tier 1 and Tier 2 engagements.
- Annual self-assessment against IIA Standards, ISACA standards, and BNM RMiT requirements.
- Tracking of key performance indicators (KPIs) — see Appendix E.

**External Assessments:**
- Independent external quality assessment at least once every **five years** in accordance with IIA Standards.
- Peer review by [External Quality Assessor] where applicable.

### 9.2 Methodology Review Cycle

| Review Type | Frequency | Responsible | Output |
|---|---|---|---|
| Continuous monitoring of audit universe | Ongoing | Senior Audit Manager | Updated Audit Universe Register |
| Quarterly methodology review | Quarterly | Head of Internal Audit | Quarterly Review Report to Audit Committee |
| Annual full methodology review | Annual (Q4) | Head of Internal Audit | Updated Methodology Document (new version) |
| Ad hoc review triggered by regulatory change | As required | Head of Internal Audit | Version update and Audit Committee notification |
| Post-incident review | Within 30 days of material incident | Senior Audit Manager | Lessons learned incorporated into methodology |

### 9.3 Key Performance Indicators

The following KPIs are tracked to measure the effectiveness of this methodology:

| KPI | Target | Measurement Frequency |
|---|---|---|
| Annual Audit Plan completion rate | ≥ [X]% of planned engagements | Quarterly |
| Tier 1 coverage rate | 100% | Annual |
| Tier 2 coverage rate | 100% | Annual |
| Average time from engagement start to report issuance | ≤ [X] weeks | Per engagement |
| Critical finding escalation timeliness | 100% within 24 hours | Per incident |
| Management Action Plan closure rate (within agreed deadline) | ≥ [X]% | Quarterly |
| Percentage of engagements using data analytics | ≥ [X]% | Annual |
| Repeat findings rate | ≤ [X]% | Annual |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Approved By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Approver Name] | Initial release |
| [X.X] | [Date] | [Author Name] | [Approver Name] | [Description of changes] |
| [X.X] | [Date] | [Author Name] | [Approver Name] | [Description of changes] |

### 10.2 Pending Changes

*Document any changes under consideration or in draft that are not yet incorporated in the current version.*

| Change Reference | Description | Proposed By | Target Version |
|---|---|---|---|
| [Change ID] | [Description] | [Name / Function] | [Version X.X] |

### 10.3 Approval Sign-Off

By signing below, the approvers confirm that this document has been reviewed for accuracy, completeness, and compliance with applicable regulatory requirements, and that it is approved for use effective [Effective Date].

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Internal Audit | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| Chief Information Officer | [Name] | _________________ | [Date] |
| Audit Committee Chair | [Name] | _________________ | [Date] |

---

## 11. References

### 11.1 Regulatory References

| Reference | Document Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-2 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | **Clause 13.1** — Technology Audit (primary); Clause 13.2 — Audit Independence; Clause 13.3 — Audit Competency |
| BNM/RH/GL 016-3 | Management of IT Environment | Bank Negara Malaysia | Applicable guidance clauses |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | Sections on processing, security, and governance obligations |
| Act 578 | Financial Services Act 2013 | Parliament of Malaysia | Relevant provisions on internal controls and governance |
| [Act / Policy Reference] | [Title] | NACSA | [Applicable Provisions] |

### 11.2 Standards and Frameworks References

| Standard / Framework | Title | Issuing Body | Version / Edition |
|---|---|---|---|
| IIA Standards | International Standards for the Professional Practice of Internal Auditing | Institute of Internal Auditors | [Current Edition] |
| ISACA IT Audit Standards | IT Audit and Assurance Standards | ISACA | [Current Edition] |
| COBIT 2019 | Control Objectives for Information and Related Technologies | ISACA | 2019 |
| NIST CSF | Cybersecurity Framework | NIST | Version [X.X] |
| ISO/IEC 27001 | Information Security Management Systems | ISO/IEC | 2022 |
| ISO 19011 | Guidelines for Auditing Management Systems | ISO | [Edition] |

### 11.3 Internal Policy References

| Document | Title | Owner | Version |
|---|---|---|---|
| [Doc ID] | Internal Audit Charter | Head of Internal Audit | [Version] |
| [Doc ID] | IT Risk Management Policy | Chief Risk Officer | [Version] |
| [Doc ID] | Information Security Policy | CISO | [Version] |
| [Doc ID] | Technology Risk Management Framework | CIO / CRO | [Version] |
| [Doc ID] | Vendor and Third-Party Risk Management Policy | Chief Risk Officer | [Version] |
| [Doc ID] | Business Continuity Management Policy | [Owner] | [Version] |
| [Doc ID] | Data Governance Policy | [Owner] | [Version] |

---

## 12. Appendices

### Appendix A — Audit Universe Register Template

*Complete this template for each auditable entity identified in Phase 1. Maintain in [Audit Management System].*

| Field | Value |
|---|---|
| Entity ID | AU-[Year]-[NNN] |
| Entity Name | |
| Domain | |
| Description | |
| Business Owner | |
| Technical Owner | |
| Regulatory Classification | |
| Third-Party Involvement | Yes / No |
| Vendor Name (if applicable) | |
| Last Audit Date | |
| Last Audit Outcome | |
| Material Incidents (past 12 months) | Yes / No |
| Current Risk Tier | |
| Composite Risk Score | |
| Next Scheduled Audit | |
| Notes | |

---

### Appendix B — Risk Assessment Weighting Factors

*The following default weightings are applied to the composite risk score calculation. The Head of Internal Audit may adjust these weightings annually with Audit Committee notification. Any adjustments must be documented here with rationale.*

| Risk Dimension | Default Weighting (W) | Current Weighting (W) | Effective Date | Rationale for Change |
|---|---|---|---|---|
| Strategic Significance | [X]% | [X]% | [Date] | [Rationale] |
| Regulatory Criticality | [X]% | [X]% | [Date] | [Rationale] |
| Inherent Risk | [X]% | [X]% | [Date] | [Rationale] |
| Control Effectiveness (Inverse) | [X]% | [X]% | [Date] | [Rationale] |
| Change Velocity | [X]% | [X]% | [Date] | [Rationale] |
| Prior Audit History | [X]% | [X]% | [Date] | [Rationale] |
| Third-Party Dependency | [X]% | [X]% | [Date] | [Rationale] |
| Data Sensitivity | [X]% | [X]% | [Date] | [Rationale] |
| **Total** | **100%** | **100%** | | |

---

### Appendix C — Audit Engagement Scope Document Template

**AUDIT ENGAGEMENT SCOPE DOCUMENT**

| Field | Value |
|---|---|
| Engagement ID | IT-[Year]-[NNN] |
| Engagement Title | |
| Audit Entity / System | |
| Risk Tier | |
| Regulatory Driver | |
| Audit Lead | |
| Audit Team Members | |
| Co-Source Provider | |
| Planned Start Date | |
| Planned End Date | |
| Estimated Days | |

**1. Engagement Objectives**

[State the primary and secondary objectives of this engagement.]

**2. Scope Boundary**

*In Scope:*
- [System / Process / Unit]
- [System / Process / Unit]

*Out of Scope:*
- [Item] — Rationale: [Reason]

*Time Period Under Review:*
- [From Date] to [To Date]

**3. Key Risks and Control Objectives**

| Key Risk | Control Objective | Planned Audit Procedure | RMiT Reference |
|---|---|---|---|
| [Risk] | [Objective] | [Procedure] | [Clause] |

**4. Sampling Approach**

[Describe the sampling methodology and population definitions for this engagement.]

**5. Data Analytics / TAATs**

[Describe any data analytics or technology-assisted audit techniques to be employed.]

**6. Resource Plan**

| Resource | Role | Estimated Days |
|---|---|---|
| [Name] | Audit Lead | [X] days |
| [Name] | Audit Team Member | [X] days |
| [Vendor] | Co-Source — [Speciality] | [X] days |

**Scope Approved By:** ___________________________ **Date:** _______________

---

### Appendix D — Immediate Management Alert Template

**INTERNAL AUDIT — IMMEDIATE MANAGEMENT ALERT**

| Field | Value |
|---|---|
| Alert Reference | IMA-[Year]-[NNN] |
| Date Issued | |
| Engagement | |
| Severity | **CRITICAL** |
| Finding Title | |
| Issued By | Head of Internal Audit |
| Issued To | [CEO / CRO / Auditee Management / Audit Committee Chair] |

**Finding Summary:**

[Concise description of the critical finding, its condition, cause, and potential impact.]

**Immediate Actions Required:**

1. [Action 1] — Responsible: [Name] — Deadline: [Date]
2. [Action 2] — Responsible: [Name] — Deadline: [Date]

**Management Response Required By:** [Date — 5 business days from issue]

---

### Appendix E — Key Performance Indicators Tracking Template

*This template is completed by the Senior Audit Manager at each quarterly review and submitted to the Head of Internal Audit.*

| KPI | Target | Q1 Actual | Q2 Actual | Q3 Actual | Q4 Actual | Annual | Status |
|---|---|---|---|---|---|---|---|
| Annual Audit Plan completion rate | ≥ [X]% | | | | | | [On Track / At Risk / Breached] |
| Tier 1 coverage rate | 100% | | | | | | |
| Tier 2 coverage rate | 100% | | | | | | |
| Average report issuance time | ≤ [X] weeks | | | | | | |
| Critical finding escalation timeliness | 100% | | | | | | |
| MAP closure rate (on time) | ≥ [X]% | | | | | | |
| % engagements using data analytics | ≥ [X]% | | | | | | |
| Repeat findings rate | ≤ [X]% | | | | | | |

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| **Auditable Entity** | A discrete unit of technology, process, or organisational function that can be independently assessed as part of an IT audit engagement. |
| **Audit Universe** | The complete inventory of all auditable entities within [Organization Name]'s technology environment. |
| **BNM** | Bank Negara Malaysia — the central bank and financial services regulator of Malaysia. |
| **CAAT / TAAT** | Computer-Assisted Audit Techniques / Technology-Assisted Audit Techniques — tools and methods for electronic analysis of audit data. |
| **Composite Risk Score** | A weighted numerical score summarising the overall risk profile of an auditable entity. |
| **Critical System** | A system whose unavailability or compromise would cause material harm to [Organization Name]'s operations, customers, or regulatory standing. |
| **Co-Source** | An arrangement whereby an external specialist firm assists the Internal Audit function in executing specific audit procedures, under the direction and oversight of the Head of Internal Audit. |
| **Management Action Plan (MAP)** | A documented commitment by auditee management to address an audit finding within a specified timeframe. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles and responsibilities. |
| **RMiT** | Risk Management in Technology — BNM Policy Document BNM/RH/PD 028-2 governing technology risk management for financial institutions. |
| **Risk Tier** | A classification (Tier 1–4) assigned to an auditable entity based on its composite risk score, determining audit frequency and priority. |
| **SOC 2 Type II** | Service Organisation Control 2 Type II — an independent audit report on a service organisation's controls over a period of time, commonly used to assess third-party IT service providers. |

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. The master copy is maintained in [Document Management System]. Printed copies are uncontrolled. Verify currency before use.