# Audit Access Rights

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Internal Audit |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Per-event or Quarterly] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Note on Document Nature:** This document serves as an evidence artifact and is primarily system-generated or compiled from system outputs. Manual entries are limited to governance metadata and contextual annotations. All access right records referenced herein are to be extracted directly from authoritative source systems and attached as appendices or linked exhibits.

---

## 1. Purpose and Scope

### 1.1 Purpose

This artifact documents the unrestricted audit access rights granted to the Internal Audit function of [Organization Name] across all in-scope technology systems, applications, databases, and records. It serves as evidence that the Internal Audit function maintains independent and unimpeded access necessary to discharge its oversight responsibilities in accordance with regulatory requirements.

This document supports compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically:

- **Clause 13.2** — which requires that the internal audit function be accorded unrestricted access to all systems, records, personnel, and premises relevant to the performance of its audit mandate.

### 1.2 Scope

*Define the boundaries of audit access coverage — which systems, environments, business units, and record types are in scope. Exclude any out-of-scope items with justification.*

This document applies to:

- All technology systems and platforms under the ownership or operational control of [Organization Name]
- All environments: production, user acceptance testing (UAT), development, and disaster recovery (DR)
- All business units and subsidiaries within the scope of the internal audit mandate
- All records, logs, configurations, and data repositories relevant to audit activities
- Third-party and outsourced systems where [Organization Name] retains data processing or service accountability

**Out of Scope:**

| Excluded Item | Justification |
|---|---|
| [Excluded System/Environment] | [Reason for Exclusion] |
| [Excluded System/Environment] | [Reason for Exclusion] |

---

## 2. Asset and Item Identification

*List all technology assets, systems, and records to which Internal Audit has been granted access. This section should be populated from the organisation's technology asset inventory or CMDB. Each entry must be uniquely identifiable.*

### 2.1 In-Scope Technology Assets

| Asset ID | Asset Name | System Type | Environment | Business Unit | Access Granted Date | Access Method |
|---|---|---|---|---|---|---|
| [ASSET-001] | [System / Application Name] | [Core Banking / IAM / SIEM / DB / etc.] | [Production / UAT / DR] | [BU Name] | [DD-MMM-YYYY] | [Read-Only / Console / API / Report Export] |
| [ASSET-002] | [System / Application Name] | [Type] | [Environment] | [BU Name] | [DD-MMM-YYYY] | [Access Method] |
| [ASSET-003] | [System / Application Name] | [Type] | [Environment] | [BU Name] | [DD-MMM-YYYY] | [Access Method] |

### 2.2 In-Scope Records and Data Repositories

*Identify record types, log repositories, and data stores accessible by Internal Audit beyond individual application access.*

| Record / Repository ID | Description | Format | Retention Period | Custodian System |
|---|---|---|---|---|
| [REC-001] | [Audit Logs / Transaction Logs / Change Management Records / etc.] | [SIEM Export / Database / File Share] | [Period] | [System Name] |
| [REC-002] | [Description] | [Format] | [Period] | [System Name] |
| [REC-003] | [Description] | [Format] | [Period] | [System Name] |

---

## 3. Classification and Categorisation

*Classify each asset and access right by sensitivity, criticality, and system category. Classification informs the level of scrutiny, handling requirements, and audit priority.*

### 3.1 Asset Classification Framework

[Organization Name] applies the following classification tiers for technology assets subject to audit access:

| Classification Tier | Description | Examples |
|---|---|---|
| **Critical** | Systems whose failure or compromise would have a material impact on financial services delivery, regulatory compliance, or customer data integrity | Core banking platform, payment gateway, identity and access management (IAM) |
| **High** | Systems handling sensitive customer or financial data with significant reputational or operational risk | CRM, data warehouses, risk management systems |
| **Medium** | Supporting systems with moderate impact if compromised | HR systems, internal collaboration tools, monitoring dashboards |
| **Low** | Non-sensitive internal systems with minimal regulatory or operational exposure | Internal intranet, document management (non-regulated content) |

### 3.2 Asset Classification Register

| Asset ID | Asset Name | Criticality Tier | Data Classification | Regulatory Sensitivity | Audit Frequency Alignment |
|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Critical / High / Medium / Low] | [Confidential / Restricted / Internal / Public] | [RMiT / PDPA / AMLA / PCI-DSS / etc.] | [Continuous / Quarterly / Annual] |
| [ASSET-002] | [System Name] | [Tier] | [Classification] | [Regulation] | [Frequency] |
| [ASSET-003] | [System Name] | [Tier] | [Classification] | [Regulation] | [Frequency] |

### 3.3 System Category Taxonomy

*Categorise systems by functional type to align with the audit universe structure.*

| Category | Description | Systems in Scope |
|---|---|---|
| Core Financial Systems | Systems directly involved in financial transaction processing | [List systems] |
| Technology Infrastructure | Servers, network devices, virtualisation, and cloud platforms | [List systems] |
| Cybersecurity Controls | SIEM, endpoint protection, IAM, vulnerability management | [List systems] |
| Data Management | Databases, data lakes, backup and recovery systems | [List systems] |
| Third-Party / Outsourced | Vendor-managed systems within audit scope | [List systems] |
| Operational Support | Change management, ITSM, monitoring tools | [List systems] |

---

## 4. Owner and Custodian

*Document the accountable owner and operational custodian for each in-scope asset. Owners are accountable for the asset's risk posture; custodians are responsible for day-to-day access management and provisioning.*

### 4.1 Definitions

- **Asset Owner:** Senior management role accountable for the business function supported by the asset, its risk profile, and compliance obligations.
- **Asset Custodian:** Technical or operational role responsible for provisioning, maintaining, and revoking access, including audit access rights.
- **Audit Access Sponsor:** The individual who formally approved the granting of audit access rights to the Internal Audit function.

### 4.2 Asset Owner and Custodian Register

| Asset ID | Asset Name | Asset Owner (Role) | Asset Owner (Name) | Asset Custodian (Role) | Asset Custodian (Name) | Audit Access Sponsor | Date Access Granted | Access Expiry / Review Date |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [e.g., Chief Information Officer] | [Name] | [e.g., System Administrator] | [Name] | [e.g., CIO / CISO] | [DD-MMM-YYYY] | [DD-MMM-YYYY / Quarterly] |
| [ASSET-002] | [System Name] | [Role] | [Name] | [Role] | [Name] | [Sponsor Role] | [DD-MMM-YYYY] | [Date] |
| [ASSET-003] | [System Name] | [Role] | [Name] | [Role] | [Name] | [Sponsor Role] | [DD-MMM-YYYY] | [Date] |

### 4.3 Conflict of Interest Attestation

*Record that no audit access provisioning creates a conflict of interest that could impair audit independence.*

| Asset ID | Potential Conflict Identified | Mitigation Applied | Attested By | Attestation Date |
|---|---|---|---|---|
| [ASSET-001] | [Yes / No] | [Mitigating control, if applicable] | [Head of Internal Audit / Audit Committee] | [DD-MMM-YYYY] |
| [ASSET-002] | [Yes / No] | [N/A] | [Name / Role] | [DD-MMM-YYYY] |

---

## 5. Audit Universe and Risk-Based Plan

*The audit universe defines the complete population of auditable entities. The risk-based audit plan determines which entities are prioritised for review in a given period, based on inherent risk ratings and residual risk assessments.*

### 5.1 Audit Universe

*This section should align with the approved Annual Audit Plan and be updated upon material changes to the technology landscape or risk profile.*

| Audit Entity ID | Auditable Entity | Entity Type | Inherent Risk Rating | Last Audit Date | Next Planned Audit | Audit Owner |
|---|---|---|---|---|---|---|
| [AE-001] | [System / Process / Domain Name] | [Application / Infrastructure / Process / Control] | [Critical / High / Medium / Low] | [DD-MMM-YYYY / Not Yet Audited] | [DD-MMM-YYYY / Q[X] 20XX] | [Lead Auditor Name] |
| [AE-002] | [Entity Name] | [Type] | [Rating] | [Date] | [Date] | [Name] |
| [AE-003] | [Entity Name] | [Type] | [Rating] | [Date] | [Date] | [Name] |

### 5.2 Risk-Based Audit Prioritisation Matrix

*Describe how audit priority is determined. The following matrix guides the frequency and depth of audit coverage.*

| Inherent Risk | Control Effectiveness | Residual Risk | Audit Priority | Recommended Audit Frequency |
|---|---|---|---|---|
| Critical | Weak | Very High | Priority 1 | Continuous monitoring / Immediate |
| High | Moderate | High | Priority 2 | Quarterly |
| Medium | Adequate | Medium | Priority 3 | Semi-Annual |
| Low | Strong | Low | Priority 4 | Annual |

### 5.3 Current Period Audit Plan Summary

*Reference the approved Annual Audit Plan for the current period. Attach full plan as Appendix A.*

| Audit Plan Reference | Approved By | Approval Date | Plan Period | Total Auditable Entities | Entities Scheduled This Period |
|---|---|---|---|---|---|
| [AUDIT-PLAN-20XX] | [Audit Committee / Board] | [DD-MMM-YYYY] | [FY 20XX / Q[X] 20XX] | [Number] | [Number] |

---

## 6. Audit Methodology and Standards

*Document the methodology, standards, and frameworks applied by Internal Audit when exercising its access rights. This demonstrates that audit activities are conducted systematically and in accordance with recognised professional and regulatory standards.*

### 6.1 Applicable Professional Standards

| Standard / Framework | Issuing Body | Applicability |
|---|---|---|
| International Standards for the Professional Practice of Internal Auditing | Institute of Internal Auditors (IIA) | Mandatory — all internal audit activities |
| BNM Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Mandatory — technology audit engagements |
| COBIT 2019 | ISACA | Reference framework for IT governance and control audits |
| ISO/IEC 27001:2022 | ISO / IEC | Reference framework for information security audits |
| NIST Cybersecurity Framework (CSF) | NIST | Reference framework for cybersecurity control assessments |
| [Additional Standard] | [Body] | [Applicability] |

### 6.2 Audit Engagement Methodology

*Describe the standard audit lifecycle applied to all technology audit engagements where audit access rights are exercised.*

**Phase 1 — Planning**
- Define audit objectives, scope, and criteria
- Conduct preliminary risk assessment and identify key controls
- Develop audit programme and fieldwork procedures
- Issue formal engagement notification to auditee

**Phase 2 — Fieldwork**
- Exercise audit access rights to retrieve system logs, configuration reports, user access listings, and transaction records
- Conduct walkthroughs, interviews, and technical testing
- Collect and validate evidence in accordance with evidence handling procedures (refer Appendix B)
- Document exceptions and observations in working papers

**Phase 3 — Reporting**
- Classify findings by severity (refer Section 7)
- Issue draft report for management response
- Finalise report incorporating management responses
- Present findings to [Audit Committee / Senior Management]

**Phase 4 — Follow-Up**
- Track agreed management actions to completion
- Validate remediation evidence
- Close findings upon satisfactory resolution or escalate unresolved items

### 6.3 Evidence Handling Standards

| Evidence Type | Collection Method | Storage Location | Retention Period | Chain of Custody Requirement |
|---|---|---|---|---|
| System-generated access logs | Direct export from source system / SIEM | [Audit evidence repository path / system] | [Minimum 5 years / per policy] | Yes — log hash and timestamp recorded |
| User access listings | Extracted via [IAM system / privileged account report] | [Location] | [Period] | Yes |
| Configuration screenshots | [Tool / method] | [Location] | [Period] | Yes |
| Interview notes | Manual documentation | [Location] | [Period] | No |
| Transaction samples | [Extraction method] | [Location] | [Period] | Yes |

---

## 7. Finding Severity Classification

*All audit findings arising from the exercise of audit access rights must be classified using the following severity framework. Severity determines escalation path, management response timelines, and reporting obligations.*

### 7.1 Severity Classification Framework

| Severity Level | Label | Definition | Examples | Management Response Deadline | Escalation Path |
|---|---|---|---|---|---|
| **1** | **Critical** | Material control failure with immediate potential for regulatory breach, financial loss, fraud, or significant operational disruption | Uncontrolled privileged access to production systems; absence of encryption for customer PII; active exploitation of a known vulnerability | **Immediate (within 24–48 hours)** | Head of Internal Audit → CEO → Board / Audit Committee; Regulatory notification if required |
| **2** | **High** | Significant control weakness with high likelihood of material impact if unaddressed | Excessive user access rights not reviewed within prescribed period; missing MFA on critical systems; unpatched critical vulnerabilities | **Within 30 days** | Head of Internal Audit → CIO / CISO → Audit Committee |
| **3** | **Medium** | Control gap or deficiency that could result in moderate impact; may indicate systemic weakness | Inadequate logging coverage; access reviews completed late; policy exceptions not formally documented | **Within 60 days** | Head of Internal Audit → Relevant System Owner |
| **4** | **Low** | Minor control improvement opportunity with limited immediate risk | Documentation gaps; minor process inefficiency; cosmetic policy deviations | **Within 90 days** | Lead Auditor → Relevant Custodian |
| **5** | **Advisory** | Best practice recommendation with no current control failure | Enhancement to monitoring dashboards; process automation opportunities | **As agreed with management** | Lead Auditor → Relevant Business Unit |

### 7.2 Finding Register (Current Period)

*This register is system-generated or maintained in [Audit Management System Name]. The table below is a summary view. Full finding details are maintained in the audit working papers.*

| Finding ID | Audit Engagement | System / Asset | Finding Title | Severity | Date Identified | Management Action Owner | Target Remediation Date | Status |
|---|---|---|---|---|---|---|---|---|
| [FIND-001] | [Engagement Reference] | [Asset ID / Name] | [Brief Finding Title] | [Critical / High / Medium / Low / Advisory] | [DD-MMM-YYYY] | [Name / Role] | [DD-MMM-YYYY] | [Open / In Progress / Closed] |
| [FIND-002] | [Engagement Reference] | [Asset ID / Name] | [Title] | [Severity] | [Date] | [Owner] | [Date] | [Status] |
| [FIND-003] | [Engagement Reference] | [Asset ID / Name] | [Title] | [Severity] | [Date] | [Owner] | [Date] | [Status] |

### 7.3 Escalation and Regulatory Notification Protocol

*Define the conditions under which findings must be escalated to the Board, Audit Committee, or reported to BNM.*

| Trigger Condition | Required Action | Responsible Party | Notification Timeline |
|---|---|---|---|
| Critical finding identified | Immediate verbal notification to Head of Internal Audit | Lead Auditor | Within 24 hours of identification |
| Critical or High finding with no agreed management action within defined timeline | Escalation to Audit Committee | Head of Internal Audit | Prior to next scheduled Audit Committee meeting or within 14 days |
| Finding indicative of a reportable incident under BNM guidelines | Assessment for regulatory notification obligation | Head of Internal Audit + Legal / Compliance | Within BNM-prescribed reporting window |
| Unresolved Critical finding at agreed remediation date | Board notification | Head of Internal Audit | Immediate |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability and responsibility for the management of audit access rights and the activities described in this document.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Internal Audit | Internal Audit Team | Chief Information Officer (CIO) | Chief Information Security Officer (CISO) | System / Asset Custodian | Audit Committee | Chief Compliance Officer |
|---|---|---|---|---|---|---|---|
| Approve and maintain audit access rights policy | A | R | C | C | I | I | C |
| Request provisioning of audit access to a system | A | R | I | I | I | — | — |
| Provision and configure audit access accounts | I | I | A | C | R | — | — |
| Verify access rights are read-only / non-destructive | A | R | C | R | C | — | — |
| Maintain audit universe and risk-based plan | A | R | C | C | I | A | C |
| Conduct audit fieldwork using access rights | A | R | I | I | I | — | — |
| Classify audit findings by severity | A | R | C | C | I | I | C |
| Review and approve final audit reports | A | — | I | I | I | A | I |
| Track and validate finding remediation | A | R | C | C | R | I | I |
| Conduct quarterly access rights review | A | R | I | C | R | I | — |
| Revoke access upon change or de-provisioning trigger | A | I | I | R | R | — | — |
| Report Critical or High findings to Audit Committee | A | — | I | I | — | I | I |
| Retain audit evidence in accordance with policy | A | R | I | I | I | — | — |

---

## 9. Review and Approval

### 9.1 Review Trigger Events

*This document is subject to mandatory review upon any of the following trigger events, in addition to the scheduled quarterly review cycle:*

- Material change to the technology asset inventory (addition, decommission, or significant modification of an in-scope system)
- Change in the Head of Internal Audit or a key custodian role
- Identification of a Critical or High severity finding indicating a gap in audit access coverage
- Regulatory update to BNM RMiT or related policy documents
- Post-incident review where audit access was exercised
- Merger, acquisition, or outsourcing arrangement affecting in-scope systems

### 9.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name, Role] | Initial document creation |
| [1.1] | [DD-MMM-YYYY] | [Author Name, Role] | [Description of changes made] |
| [2.0] | [DD-MMM-YYYY] | [Author Name, Role] | [Description of major revision] |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Internal Audit | [Name] | __________________ | [DD-MMM-YYYY] |
| Chief Information Officer | [Name] | __________________ | [DD-MMM-YYYY] |
| Chief Information Security Officer | [Name] | __________________ | [DD-MMM-YYYY] |
| Audit Committee Chairperson | [Name] | __________________ | [DD-MMM-YYYY] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 13.2 | Internal audit function to be accorded unrestricted access to all systems, records, personnel, and premises for the purpose of discharging its audit mandate |
| BNM RMiT | Part C — Technology Risk Management | Broader technology risk management obligations governing in-scope systems |
| IIA Standards | Standard 1110 — Organizational Independence | Internal audit must be free from interference in determining audit scope, performing work, and communicating results |
| IIA Standards | Standard 2010 — Planning | The chief audit executive must establish a risk-based plan to determine the priorities of the internal audit activity |
| IIA Standards | Standard 2300 — Performing the Engagement | Internal auditors must identify, analyse, evaluate, and document sufficient information to achieve engagement objectives |
| PDPA 2010 | Section 9 — Security Principle | Personal data must be protected against loss, misuse, modification, unauthorised or accidental access |
| [Organization Name] Internal Audit Charter | Section [X] | Defines the mandate, independence, and access rights of the Internal Audit function |
| [Organization Name] Information Security Policy | Section [X] | Governs provisioning and management of privileged access accounts |
| [Organization Name] Records Retention Policy | Section [X] | Minimum retention periods for audit evidence and working papers |

---

## 11. Appendices

### Appendix A — Annual Audit Plan (Current Period)

*Attach or reference the Board / Audit Committee approved Annual Audit Plan. This plan defines the full schedule of audit engagements for the period and the risk basis for prioritisation.*

> **Document Reference:** [AUDIT-PLAN-20XX] — Approved by [Audit Committee / Board] on [DD-MMM-YYYY]
>
> *[Attach plan or insert hyperlink to document repository location]*

---

### Appendix B — Evidence Handling and Chain of Custody Procedures

*Detailed procedures for the collection, labelling, storage, and retention of audit evidence gathered through the exercise of audit access rights.*

> **Document Reference:** [Internal Audit Evidence Handling Procedure v[X.X]]
>
> *[Attach procedure or insert hyperlink to document repository location]*

---

### Appendix C — System-Generated Access Rights Report

*This appendix contains the system-generated output confirming the current audit access rights provisioned across all in-scope assets. Reports should be extracted at the time of each quarterly review or per-event trigger.*

| Report Reference | Source System | Report Type | Extraction Date | Extracted By | Report Location |
|---|---|---|---|---|---|
| [RPT-001] | [System Name] | [User Access Listing / Privileged Account Report / Role Assignment Report] | [DD-MMM-YYYY] | [Name / Role] | [Repository path / location] |
| [RPT-002] | [System Name] | [Report Type] | [Date] | [Name] | [Location] |
| [RPT-003] | [System Name] | [Report Type] | [Date] | [Name] | [Location] |

---

### Appendix D — Audit Access Request and Approval Records

*Retain copies of all formal access request forms and approvals for each system. These records demonstrate that audit access was provisioned through a governed process and with appropriate authorisation.*

| Request ID | System / Asset | Date Requested | Requested By | Approved By | Approval Date | Access Type | Access Expiry |
|---|---|---|---|---|---|---|---|
| [REQ-001] | [System Name] | [DD-MMM-YYYY] | [Head of Internal Audit] | [CIO / System Owner] | [DD-MMM-YYYY] | [Read-Only / Report Access] | [Date / Ongoing — Quarterly Review] |
| [REQ-002] | [System Name] | [Date] | [Requestor] | [Approver] | [Date] | [Type] | [Expiry] |

---

### Appendix E — Quarterly Access Rights Certification

*Record of the quarterly certification exercise confirming that audit access rights remain appropriate, necessary, and correctly provisioned.*

| Certification Period | Certification Date | Certified By | Systems Reviewed | Access Changes Made | Exceptions Noted |
|---|---|---|---|---|---|
| [Q1 20XX] | [DD-MMM-YYYY] | [Head of Internal Audit] | [Number] | [Yes / No — describe if Yes] | [Yes / No — describe if Yes] |
| [Q2 20XX] | [DD-MMM-YYYY] | [Head of Internal Audit] | [Number] | [Yes / No] | [Yes / No] |
| [Q3 20XX] | [DD-MMM-YYYY] | [Head of Internal Audit] | [Number] | [Yes / No] | [Yes / No] |
| [Q4 20XX] | [DD-MMM-YYYY] | [Head of Internal Audit] | [Number] | [Yes / No] | [Yes / No] |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It must not be disclosed outside [Organization Name] without the prior written approval of the Head of Internal Audit. Physical and electronic copies are subject to the [Organization Name] Information Classification and Handling Policy.