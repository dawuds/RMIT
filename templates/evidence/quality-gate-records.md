# Quality Gate Records

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

---

## 1. Purpose and Scope

This document serves as the formal record of quality gate assessments and sign-offs conducted for technology projects and initiatives within [Organization Name]. It provides structured, auditable evidence that each project phase has met predefined quality, security, and compliance criteria before progression to subsequent stages.

This template supports compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically:

- **Clause 10.4** — Technology project management controls, including quality assurance checkpoints, formal sign-off requirements, and the maintenance of evidence records throughout the project lifecycle.

Quality gate records shall be maintained for all in-scope technology projects, including but not limited to system development, infrastructure changes, vendor-delivered solutions, and significant configuration changes. Records shall be retained in accordance with [Organization Name]'s document retention policy and made available to internal audit, external auditors, and BNM examiners upon request.

---

## 2. Asset / Item Identification

*Provide unique identification details for the project or deliverable subject to quality gate assessment. Each record must be traceable to a specific project, release, or change item.*

| Field | Details |
|---|---|
| **Project / Item Name** | [Project or Item Name] |
| **Project / Item ID** | [Unique Project ID or Reference Number] |
| **Description** | [Brief description of the project or change item] |
| **Project Type** | [New Development / Enhancement / Infrastructure Change / Vendor Implementation / Other] |
| **Business Unit / Department** | [Sponsoring Business Unit or Department] |
| **Associated System(s)** | [Name(s) of impacted or related systems] |
| **Project Manager** | [Name and Employee ID] |
| **Quality Gate Reference** | [QG-YYYY-NNN] |
| **Gate Stage** | [Initiation / Planning / Design / Development / Testing / UAT / Pre-Production / Go-Live / Post-Implementation] |
| **Gate Assessment Date** | [DD/MM/YYYY] |

---

## 3. Classification and Categorisation

*Classify the project and associated quality gate according to its risk profile, sensitivity, and regulatory relevance. Classification determines the level of rigour and oversight applied to the gate assessment.*

### 3.1 Project Classification

| Classification Dimension | Value | Basis for Classification |
|---|---|---|
| **Risk Tier** | [Critical / High / Medium / Low] | [Rationale, e.g., customer-facing system, data sensitivity] |
| **Data Sensitivity** | [Public / Internal / Confidential / Restricted] | [Type of data processed or stored] |
| **Regulatory Scope** | [In-scope / Out-of-scope] | [Applicable regulations, e.g., RMiT, PDPA, PCI-DSS] |
| **System Criticality** | [Mission-Critical / Business-Critical / Supporting / Administrative] | [Impact on operations if unavailable] |
| **Change Category** | [Major / Minor / Standard / Emergency] | [Per Change Management Policy] |

### 3.2 Quality Gate Category

| Field | Details |
|---|---|
| **Gate Type** | [Mandatory / Advisory] |
| **Gate Category** | [Technical Quality / Security / Compliance / Business / Combined] |
| **Applicable Standards** | [e.g., RMiT Clause 10.4, ISO 27001, Internal SDLC Policy] |
| **Regulatory Notification Required** | [Yes / No] |
| **Escalation Threshold** | [Conditions under which findings are escalated, e.g., Critical defect, non-compliance] |

### 3.3 Applicable Criteria Checklist

*Check all criteria domains assessed at this quality gate. Each checked domain must have corresponding evidence referenced in Section 5.*

| # | Criteria Domain | Applicable | Evidence Reference |
|---|---|---|---|
| 1 | Requirements completeness and traceability | [Yes / No / N/A] | [Document ID or link] |
| 2 | Architecture and design review | [Yes / No / N/A] | [Document ID or link] |
| 3 | Security assessment (VAPT, threat modelling) | [Yes / No / N/A] | [Document ID or link] |
| 4 | Code review and static analysis | [Yes / No / N/A] | [Document ID or link] |
| 5 | Test coverage and results | [Yes / No / N/A] | [Document ID or link] |
| 6 | User Acceptance Testing (UAT) sign-off | [Yes / No / N/A] | [Document ID or link] |
| 7 | Data migration and integrity verification | [Yes / No / N/A] | [Document ID or link] |
| 8 | Business continuity and DR readiness | [Yes / No / N/A] | [Document ID or link] |
| 9 | Regulatory and compliance review | [Yes / No / N/A] | [Document ID or link] |
| 10 | Vendor / third-party assurance | [Yes / No / N/A] | [Document ID or link] |
| 11 | Operational readiness (runbook, training) | [Yes / No / N/A] | [Document ID or link] |
| 12 | Post-implementation review plan | [Yes / No / N/A] | [Document ID or link] |

---

## 4. Owner and Custodian

*Identify all individuals and functions accountable for the project and this quality gate record. Entries must reflect actual named individuals; generic role titles alone are insufficient for audit purposes.*

### 4.1 Project Ownership

| Role | Name | Employee ID | Department | Contact |
|---|---|---|---|---|
| **Executive Sponsor** | [Name] | [ID] | [Department] | [Email / Extension] |
| **Project Owner / Business Owner** | [Name] | [ID] | [Department] | [Email / Extension] |
| **Project Manager** | [Name] | [ID] | [Department] | [Email / Extension] |
| **Technical Lead** | [Name] | [ID] | [Department] | [Email / Extension] |
| **Security Lead** | [Name] | [ID] | [Department] | [Email / Extension] |

### 4.2 Quality Gate Custodianship

| Role | Name | Employee ID | Responsibility |
|---|---|---|---|
| **Quality Gate Assessor** | [Name] | [ID] | Conducts and documents gate assessment |
| **Quality Gate Record Custodian** | [Name] | [ID] | Maintains and controls this record |
| **Approving Authority** | [Name] | [ID] | Provides formal gate sign-off |
| **Independent Reviewer** | [Name] | [ID] | Reviews findings for objectivity (if applicable) |

### 4.3 Third-Party Involvement

| Vendor / Third Party | Scope of Involvement | Relationship Manager | Assurance Status |
|---|---|---|---|
| [Vendor Name] | [e.g., Development, Testing, Infrastructure] | [Internal RM Name] | [Assurance obtained / Pending / N/A] |

---

## 5. Status and Lifecycle Stage

*Record the current gate outcome and document the project's position within the approved lifecycle methodology. The gate status must be formally declared before the project proceeds to the next stage.*

### 5.1 Gate Outcome

| Field | Details |
|---|---|
| **Gate Status** | [PASS / CONDITIONAL PASS / FAIL / DEFERRED] |
| **Decision Date** | [DD/MM/YYYY] |
| **Decision Made By** | [Name, Title] |
| **Conditions Attached** | [Yes / No] |
| **Next Permitted Stage** | [Stage name, or "On Hold" / "Rejected"] |
| **Target Next Gate Date** | [DD/MM/YYYY or N/A] |

> **Gate Status Definitions:**
> - **PASS** — All criteria met; project may proceed unconditionally.
> - **CONDITIONAL PASS** — Project may proceed subject to resolution of specified conditions within the agreed timeframe.
> - **FAIL** — Critical criteria not met; project must not proceed until remediation is complete and gate is re-assessed.
> - **DEFERRED** — Assessment postponed; project activity paused pending required inputs.

### 5.2 Project Lifecycle Stage

| Field | Details |
|---|---|
| **Lifecycle Methodology** | [Waterfall / Agile / Hybrid / DevSecOps] |
| **Current Phase** | [Initiation / Planning / Design / Development / Testing / UAT / Pre-Production / Go-Live / Closed] |
| **Phase Start Date** | [DD/MM/YYYY] |
| **Phase Target End Date** | [DD/MM/YYYY] |
| **Overall Project Status** | [On Track / At Risk / Delayed / Completed / Cancelled] |
| **Milestone Reference** | [Link to project plan or milestone register] |

### 5.3 Open Findings and Conditions

*List all findings, defects, or conditions identified during the gate assessment. All Critical and High items must be resolved before a PASS status can be granted unless formally escalated and accepted by the Approving Authority.*

| Finding ID | Description | Severity | Owner | Target Resolution Date | Status |
|---|---|---|---|---|---|
| [F-001] | [Description of finding] | [Critical / High / Medium / Low] | [Name] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| [F-002] | [Description of finding] | [Critical / High / Medium / Low] | [Name] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| [F-003] | [Description of finding] | [Critical / High / Medium / Low] | [Name] | [DD/MM/YYYY] | [Open / In Progress / Closed] |

### 5.4 Risk Acceptance (if applicable)

*Complete this section only where risks have been formally accepted rather than remediated prior to gate passage.*

| Risk ID | Risk Description | Accepted Risk Owner | Justification | Acceptance Date | Expiry Date |
|---|---|---|---|---|---|
| [R-001] | [Description] | [Name, Title] | [Business justification] | [DD/MM/YYYY] | [DD/MM/YYYY] |

---

## 6. Last Review Date

*Record all instances of review, re-assessment, or update to this quality gate record. This section provides a complete audit trail of when the record was examined and by whom.*

### 6.1 Review History

| Review # | Review Date | Reviewed By | Role | Purpose | Outcome / Changes Made |
|---|---|---|---|---|---|
| 1 | [DD/MM/YYYY] | [Name] | [Role] | [Initial gate assessment] | [Record created / gate assessed] |
| 2 | [DD/MM/YYYY] | [Name] | [Role] | [Condition verification] | [Condition [F-001] closed; status updated] |
| 3 | [DD/MM/YYYY] | [Name] | [Role] | [Quarterly record review] | [No changes; confirmed current] |

### 6.2 Scheduled Review Triggers

*This record shall be reviewed upon occurrence of any of the following events, or at minimum on a quarterly basis:*

- [ ] Project progresses to a new lifecycle phase (per-event)
- [ ] A gate finding is remediated and requires verification (per-event)
- [ ] A risk acceptance is due to expire (per-event)
- [ ] A material change in project scope, ownership, or timeline (per-event)
- [ ] Quarterly record accuracy review (periodic)
- [ ] Internal or external audit request (ad hoc)
- [ ] BNM examination or regulatory inquiry (ad hoc)

| Field | Details |
|---|---|
| **Last Review Date** | [DD/MM/YYYY] |
| **Last Reviewed By** | [Name, Title] |
| **Next Scheduled Review Date** | [DD/MM/YYYY] |
| **Review Basis** | [Per-event / Quarterly / Ad hoc] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for the creation, maintenance, assessment, and sign-off of quality gate records in accordance with RMiT Clause 10.4.*

**RACI Key:** **R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Project Manager | Technical Lead | Security & Risk | Business Owner | Department Head | Internal Audit | IT Governance |
|---|---|---|---|---|---|---|---|
| Initiate quality gate process | R | C | C | I | A | I | I |
| Define gate criteria and thresholds | C | R | R | C | A | I | C |
| Prepare evidence and gate pack | R | R | C | C | I | I | I |
| Conduct gate assessment | C | R | R | C | A | C | C |
| Document gate findings | R | C | C | I | I | I | I |
| Review and challenge gate findings | I | C | C | I | A | R | C |
| Approve gate pass / fail decision | I | I | C | C | A | I | C |
| Manage open findings to closure | R | R | C | I | A | I | I |
| Maintain and update gate record | R | C | I | I | A | I | C |
| Quarterly record review | C | I | C | I | A | I | R |
| Escalate critical gate failures | R | C | C | C | A | I | R |
| Archive completed gate records | I | I | I | I | A | I | R |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Role | Changes |
|---|---|---|---|---|
| 0.1 | [DD/MM/YYYY] | [Author Name] | [Role] | Initial draft |
| 0.2 | [DD/MM/YYYY] | [Author Name] | [Role] | Incorporated review comments from [Reviewer] |
| 1.0 | [DD/MM/YYYY] | [Author Name] | [Role] | Approved for use; baselined |

### 8.2 Approval Sign-Off

*By signing below, the approving parties confirm that this Quality Gate Record accurately reflects the assessment conducted, that findings are correctly recorded, and that the gate decision is appropriate given the evidence reviewed.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Manager | [Name] | __________________ | [DD/MM/YYYY] |
| Technical Lead | [Name] | __________________ | [DD/MM/YYYY] |
| Security & Risk Representative | [Name] | __________________ | [DD/MM/YYYY] |
| Business Owner | [Name] | __________________ | [DD/MM/YYYY] |
| **Department Head (Accountable)** | **[Name]** | **__________________** | **[DD/MM/YYYY]** |

---

## 9. References

The following regulatory instruments, standards, and internal policies govern this document:

| Reference | Title | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 10.4** | Technology project management; quality gate and sign-off requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.1–10.3 | Overarching technology project governance framework |
| [Internal Policy ID] | [Organization Name] System Development Life Cycle (SDLC) Policy | [Section] | Internal SDLC methodology and gate criteria |
| [Internal Policy ID] | [Organization Name] Change Management Policy | [Section] | Change categorisation and approval authority |
| [Internal Policy ID] | [Organization Name] Information Security Policy | [Section] | Security review and acceptance requirements |
| [Internal Policy ID] | [Organization Name] Document Retention Policy | [Section] | Retention period for compliance records |
| ISO/IEC 27001:2022 | Information Security Management Systems | A.8.25–A.8.32 | Secure development lifecycle controls |
| NACSA | National Cyber Security Agency Guidelines | [Relevant Section] | Critical national information infrastructure requirements (if applicable) |

---

## 10. Appendices

### Appendix A — Quality Gate Criteria Framework

*Attach or reference the organization's approved quality gate criteria matrix applicable to this project type and risk tier. The criteria matrix defines the minimum pass thresholds for each gate stage.*

> **[Attach: QG-CRITERIA-[ProjectType]-v[X.X].xlsx or equivalent]**

### Appendix B — Supporting Evidence Register

*List all evidence documents referenced or submitted as part of this gate assessment.*

| # | Evidence Item | Document ID / Reference | Prepared By | Date | Location |
|---|---|---|---|---|---|
| 1 | [e.g., Test Results Report] | [DOC-ID] | [Name] | [DD/MM/YYYY] | [Repository path or link] |
| 2 | [e.g., Security Assessment Report] | [DOC-ID] | [Name] | [DD/MM/YYYY] | [Repository path or link] |
| 3 | [e.g., UAT Sign-Off Sheet] | [DOC-ID] | [Name] | [DD/MM/YYYY] | [Repository path or link] |
| 4 | [e.g., Architecture Review Record] | [DOC-ID] | [Name] | [DD/MM/YYYY] | [Repository path or link] |

### Appendix C — Condition Closure Evidence

*For each Conditional Pass, attach evidence demonstrating that conditions imposed at the gate have been satisfactorily resolved prior to stage progression.*

| Condition / Finding ID | Resolution Description | Evidence Document | Verified By | Closure Date |
|---|---|---|---|---|
| [F-001] | [Description of remediation action taken] | [DOC-ID or link] | [Name, Role] | [DD/MM/YYYY] |

### Appendix D — Escalation and Exception Log

*Record any formal exceptions, waivers, or escalations raised in connection with this quality gate, including BNM notification records where applicable.*

| Escalation / Exception ID | Date Raised | Raised By | Description | Escalated To | Resolution / Outcome | Close Date |
|---|---|---|---|---|---|---|
| [ESC-001] | [DD/MM/YYYY] | [Name] | [Description] | [Name, Title] | [Outcome] | [DD/MM/YYYY] |

---

*This document is classified as **Confidential**. It must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: [Relevant Department Head] | [Organization Name]*