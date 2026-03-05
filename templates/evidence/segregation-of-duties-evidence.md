# Segregation of Duties Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Audit Universe and Risk-Based Plan](#5-audit-universe-and-risk-based-plan)
6. [Audit Methodology and Standards](#6-audit-methodology-and-standards)
7. [Finding Severity Classification](#7-finding-severity-classification)
8. [Use Case Catalogue and Tuning Schedule](#8-use-case-catalogue-and-tuning-schedule)
9. [Shift Handover Procedures](#9-shift-handover-procedures)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

This document provides formal evidence that [Organization Name] maintains adequate **Segregation of Duties (SoD)** controls between its Security Operations, Risk Management, and Audit functions, in compliance with the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT)** policy document, specifically **Clause 11.3**.

Segregation of Duties is a foundational internal control principle that ensures no single individual or team holds conflicting responsibilities across operational, risk oversight, and assurance functions. This evidence document substantiates that [Organization Name] has implemented, enforces, and periodically reviews SoD controls across technology and security domains.

**This document applies to:**

- Security Operations Centre (SOC) and all personnel performing security monitoring duties
- Risk Management function, including Technology Risk and Information Security Risk teams
- Internal Audit function, including IT Audit and Cybersecurity Audit teams
- Third-party service providers performing any of the above functions on behalf of [Organization Name]
- All systems, platforms, and processes subject to privileged access or change management controls

**Review Trigger:** This document shall be reviewed **per material organisational or structural change event**, or at minimum **quarterly**, whichever occurs first. Material events include but are not limited to: restructuring of the SOC, Risk, or Audit functions; changes to privileged access assignments; or findings raised by BNM examination or internal audit.

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the SoD assessment, the specific functions or roles evaluated, and the criteria used to determine whether adequate separation exists. Include both in-scope and explicitly out-of-scope items.*

### 2.1 Assessment Scope

| Dimension | In Scope | Out of Scope |
|---|---|---|
| **Functions** | Security Operations, Technology Risk, Internal Audit (IT/Cyber) | Physical security, HR, Finance |
| **Systems** | SIEM, ITSM, IAM, GRC platform, audit management tools | Legacy decommissioned systems |
| **Personnel Roles** | All roles with privileged or administrative access to in-scope systems | Temporary contractors (unless access provisioned >30 days) |
| **Environments** | Production, DR/BCP | Development, UAT (unless connected to production data) |
| **Assessment Period** | [Assessment Start Date] to [Assessment End Date] | N/A |

### 2.2 Assessment Criteria

The following criteria were applied to determine whether SoD controls are adequate:

- **Functional Independence:** No individual holds a primary role in more than one of the three functions (Security Operations, Risk, Audit) simultaneously.
- **System Access Segregation:** Privileged access rights to monitoring, risk, and audit systems are provisioned on a least-privilege, role-specific basis with no cross-functional overlap unless formally approved and documented.
- **Reporting Line Independence:** The Audit function reports independently of the Security Operations and Risk functions, with a direct escalation path to the Board Audit Committee or equivalent governance body.
- **Conflict of Interest Controls:** No individual responsible for designing or operating a control is solely responsible for reviewing the effectiveness of that same control.
- **Compensating Controls:** Where full SoD is not practicable (e.g., in lean teams), compensating controls such as enhanced logging, secondary review, or independent sampling are documented and in place.

### 2.3 Applicable Standards and Benchmarks

| Standard / Framework | Relevant Requirement |
|---|---|
| BNM RMiT | Clause 11.3 — Segregation of duties between security, risk, and audit |
| ISO/IEC 27001:2022 | Annex A 8.2 — Privileged access rights; A 5.3 — Segregation of duties |
| COBIT 2019 | DSS05, MEA02 — Managed security services; managed internal control |
| NIST SP 800-53 Rev.5 | AC-5 — Separation of duties |

---

## 3. Methodology

*Describe the approach, techniques, and tools used to gather and evaluate SoD evidence. This section should be sufficient for an auditor to reproduce the assessment.*

### 3.1 Assessment Approach

The SoD assessment was conducted using a **control design and operating effectiveness** methodology comprising the following phases:

1. **Scoping and Planning** — Identification of in-scope functions, roles, and systems; agreement on assessment criteria; stakeholder notification.
2. **Evidence Gathering** — Collection of access control matrices, organisational charts, job descriptions, system-generated access reports, and policy documentation.
3. **Control Design Review** — Evaluation of whether SoD controls are formally defined in policy and reflected in role design and system configuration.
4. **Operating Effectiveness Testing** — Sampling of access logs, user provisioning records, and incident/change tickets to verify that SoD controls operate as designed.
5. **Gap Analysis** — Identification of SoD conflicts or weaknesses; documentation of compensating controls where applicable.
6. **Reporting** — Preparation of this evidence document and communication of findings to relevant stakeholders.

### 3.2 Evidence Collection Methods

| Method | Description | Evidence Reference |
|---|---|---|
| Access control matrix review | Extract of user roles and permissions from IAM/PAM system | Appendix A |
| Organisational chart review | Formal reporting line verification | Appendix B |
| Job description review | Verification of role responsibilities and functional boundaries | Appendix C |
| System-generated access reports | SIEM, GRC, audit tool user access listings as at [Snapshot Date] | Appendix D |
| Interview / walkthrough | Interviews with [SOC Manager / Risk Manager / Head of Internal Audit] | [Interview Notes Reference] |
| Policy document review | SoD Policy, IAM Policy, Acceptable Use Policy | [Policy Reference IDs] |

### 3.3 Sampling Approach

Where operating effectiveness testing required sampling, the following parameters were applied:

- **Population size < 25 items:** 100% testing
- **Population size 25–250 items:** Minimum 25 samples
- **Population size > 250 items:** Minimum 60 samples or 10%, whichever is greater
- **Sampling method:** [Random / Haphazard / Judgement — specify and justify]

---

## 4. Findings and Ratings

*Summarise the results of the SoD assessment. Each finding should reference the evidence reviewed, the gap or control weakness identified, and the agreed remediation action.*

### 4.1 Summary Dashboard

| Finding Reference | Finding Description | Severity | Status | Target Remediation Date |
|---|---|---|---|---|
| SoD-[YYYY]-001 | [Brief description of finding] | [Critical / High / Medium / Low] | [Open / In Progress / Closed] | [Date] |
| SoD-[YYYY]-002 | [Brief description of finding] | [Critical / High / Medium / Low] | [Open / In Progress / Closed] | [Date] |
| SoD-[YYYY]-003 | [Brief description of finding] | [Critical / High / Medium / Low] | [Open / In Progress / Closed] | [Date] |

**Overall SoD Control Rating:** [Satisfactory / Needs Improvement / Unsatisfactory]

*Provide a single overall rating and a brief narrative (2–3 sentences) summarising the overall posture.*

[Overall rating narrative — e.g., "The assessment identified adequate functional separation between the three in-scope domains. Minor access-level overlaps were identified in [specific area] and are subject to remediation as detailed below."]

### 4.2 Detailed Findings

---

**Finding Reference:** SoD-[YYYY]-001

**Title:** [Finding Title]

**Clause / Control Reference:** BNM RMiT Clause 11.3; [Internal Policy Reference]

**Condition:** *[Describe what was observed — the actual state.]*
[Description of the condition identified]

**Criteria:** *[Describe what should exist — the expected state per policy or regulation.]*
[Description of the expected control or requirement]

**Cause:** [Root cause analysis — e.g., process gap, system configuration, staffing constraint]

**Effect / Risk:** [Describe the potential impact if the gap is not remediated]

**Recommendation:** [Specific, actionable recommendation]

**Management Response:** [Management's agreed action and owner]

**Target Date:** [Remediation Target Date]

**Evidence Reference:** [Appendix / Document Reference]

---

*Repeat the above finding block for each identified gap. Where no findings exist for a control area, document a positive assurance statement confirming the control was tested and found effective.*

---

## 5. Audit Universe and Risk-Based Plan

*Document the full population of auditable SoD-related items (the audit universe) and the risk-based prioritisation logic used to determine which items were subjected to detailed testing in this assessment cycle.*

### 5.1 Audit Universe

| ID | Auditable Unit | Function | System / Platform | Risk Rating | Last Assessed | Next Scheduled |
|---|---|---|---|---|---|---|
| AU-001 | SOC Analyst access rights | Security Operations | [SIEM Platform] | [High/Med/Low] | [Date] | [Date] |
| AU-002 | SOC Tier 2/3 escalation controls | Security Operations | [ITSM Platform] | [High/Med/Low] | [Date] | [Date] |
| AU-003 | Technology Risk access to production systems | Risk Management | [GRC Platform] | [High/Med/Low] | [Date] | [Date] |
| AU-004 | IT Audit access to audit management tools | Internal Audit | [Audit Platform] | [High/Med/Low] | [Date] | [Date] |
| AU-005 | Cross-functional access conflicts (IAM review) | All | IAM / PAM | [High/Med/Low] | [Date] | [Date] |
| AU-006 | Privileged account management controls | All | PAM System | [High/Med/Low] | [Date] | [Date] |
| AU-007 | Reporting line independence verification | All | Organisational | [High/Med/Low] | [Date] | [Date] |

### 5.2 Risk-Based Selection Rationale

*Explain the logic used to prioritise which audit universe items were selected for assessment in the current cycle.*

| Selection Factor | Weighting | Rationale |
|---|---|---|
| Regulatory significance (BNM RMiT Clause 11.3) | High | Mandatory clause; direct examination risk |
| Prior audit findings | High | Repeat findings attract elevated scrutiny |
| Organisational changes since last assessment | Medium | Restructuring may invalidate prior evidence |
| System changes (new platform, migration) | Medium | May introduce new access conflicts |
| Time elapsed since last assessment | Medium | Quarterly minimum per review policy |

**Items selected for current assessment cycle:** [List AU-IDs selected, e.g., AU-001, AU-003, AU-005]

**Items deferred to next cycle:** [List AU-IDs deferred and justification]

---

## 6. Audit Methodology and Standards

*Describe the professional standards and internal methodology governing how this SoD assessment was conducted, to demonstrate rigour and independence to external reviewers.*

### 6.1 Governing Standards

| Standard | Version / Edition | Application |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | [Effective Date Version] | Primary regulatory requirement |
| International Standards for the Professional Practice of Internal Auditing (IPPF) | 2024 | Internal audit conduct and independence |
| ISACA IT Audit Framework (ITAF) | 3rd Edition | IT audit methodology |
| ISO/IEC 27001:2022 | 2022 | Information security control framework |
| COBIT 2019 | 2019 | IT governance and management objectives |

### 6.2 Independence and Objectivity

The assessment was conducted by [Internal Audit / External Assessor — specify]:

- **Assessor:** [Name / Team / Firm]
- **Reporting Line:** [Describe independence — e.g., "The IT Audit team reports directly to the Board Audit Committee and is organisationally independent of the SOC and Risk functions."]
- **Conflicts of Interest Declared:** [None / List declared conflicts and mitigations]
- **External Quality Assurance:** [Internal QA review / External peer review — describe process]

### 6.3 Documentation and Evidence Standards

All evidence collected during this assessment:

- Is retained in [Document Management System / Audit Tool] under reference [Engagement Reference]
- Is labelled with the date of collection, source, and collecting assessor
- Is retained for a minimum of **[7] years** in accordance with [Organization Name]'s Records Retention Policy [Policy Reference]
- Is classified as **Confidential** and accessible only to authorised personnel

---

## 7. Finding Severity Classification

*Define the severity scale applied to all findings in this document. Consistent classification enables management to prioritise remediation and allows trend analysis across assessment cycles.*

### 7.1 Severity Rating Scale

| Severity | Definition | Required Management Response | Escalation |
|---|---|---|---|
| **Critical** | SoD failure presenting immediate, material risk of fraud, regulatory breach, or significant financial loss. Control is absent or completely ineffective. | Immediate escalation to Board / Board Audit Committee. Remediation within **5 business days** or compensating control implemented same day. | CRO, CEO, Board Audit Committee |
| **High** | Significant SoD gap or control weakness with high likelihood of exploitation or regulatory finding. Compensating controls are insufficient or absent. | Formal remediation plan within **10 business days**. Monthly progress reporting to senior management. | CRO, CISO, Head of Internal Audit |
| **Medium** | Moderate SoD gap where compensating controls partially mitigate risk. Risk is present but limited in scope or likelihood. | Remediation plan within **30 days**. Quarterly progress reporting. | SOC Manager, Risk Manager |
| **Low** | Minor SoD deviation, process improvement opportunity, or documentation gap with minimal direct risk impact. | Remediation within **90 days** or acceptance with documented rationale. | Documented in finding register |
| **Informational** | Observation for management awareness. No control gap identified; best practice recommendation only. | Management acknowledgement. No mandatory remediation required. | N/A |

### 7.2 Rating Assignment Process

Severity ratings are assigned based on the following factors, evaluated collectively:

- **Likelihood** of the gap being exploited (considering threat environment and access controls)
- **Impact** on [Organization Name]'s operational integrity, financial position, or regulatory standing
- **Detectability** — whether the gap would be identified by other compensating controls before harm occurs
- **Regulatory Sensitivity** — whether the gap directly contravenes a mandatory BNM RMiT clause

**Rating Authority:** All **Critical** and **High** findings must be co-validated by [Head of Internal Audit / Chief Risk Officer] before publication.

---

## 8. Use Case Catalogue and Tuning Schedule

*Document the specific SoD monitoring use cases active within the SIEM or GRC platform, and the schedule for reviewing and tuning these use cases to maintain detection accuracy.*

### 8.1 Active SoD Monitoring Use Cases

| Use Case ID | Use Case Name | Description | Detection Logic Summary | Data Source | Owner | Status |
|---|---|---|---|---|---|---|
| UC-SoD-001 | Cross-functional privileged access alert | Alert when a user account holds roles in both SOC and Audit functions | IAM role membership + SIEM user table join | IAM / PAM | SOC Manager | Active |
| UC-SoD-002 | SOC analyst modifying audit logs | Alert when a SOC-role user account modifies or deletes log data | SIEM audit trail | SIEM | SOC Manager | Active |
| UC-SoD-003 | Risk team direct production access | Alert when a Risk function user authenticates directly to production systems outside change window | PAM session log + change calendar | PAM / ITSM | Risk Manager | Active |
| UC-SoD-004 | Self-approval of access requests | Alert when user approves their own IAM access request | IAM workflow audit log | IAM | [Owner] | Active |
| UC-SoD-005 | Audit tool access by non-audit personnel | Alert when a non-Audit-role account authenticates to the audit management platform | Audit tool access log | [Audit Platform] | Head of Internal Audit | Active |
| [UC-SoD-00X] | [Use Case Name] | [Description] | [Logic Summary] | [Source] | [Owner] | [Active / Draft / Retired] |

### 8.2 Use Case Tuning Schedule

*Document the cadence and process for reviewing use case performance (false positive rate, true positive rate, coverage gaps) to ensure detection quality is maintained.*

| Use Case ID | Last Tuned | Tuning Frequency | Next Scheduled Tune | False Positive Rate (Last Period) | Tuning Owner |
|---|---|---|---|---|---|
| UC-SoD-001 | [Date] | Quarterly | [Date] | [X%] | [Name / Role] |
| UC-SoD-002 | [Date] | Quarterly | [Date] | [X%] | [Name / Role] |
| UC-SoD-003 | [Date] | Bi-annually | [Date] | [X%] | [Name / Role] |
| UC-SoD-004 | [Date] | Quarterly | [Date] | [X%] | [Name / Role] |
| UC-SoD-005 | [Date] | Quarterly | [Date] | [X%] | [Name / Role] |

**Tuning Threshold:** Use cases with a false positive rate exceeding **[15%]** must be reviewed and retuned within **[10] business days** of the threshold being breached.

### 8.3 Use Case Retirement and Decommission Log

| Use Case ID | Use Case Name | Retirement Date | Reason | Replaced By | Approved By |
|---|---|---|---|---|---|
| [UC-SoD-000] | [Name] | [Date] | [Reason — e.g., redundant, replaced, platform change] | [Replacement UC ID or N/A] | [Name / Role] |

---

## 9. Shift Handover Procedures

*Document the formal procedures governing the handover of SoD monitoring responsibilities between shifts, ensuring continuity of control coverage and no gaps in oversight.*

### 9.1 Purpose of Shift Handover in SoD Context

Shift handover procedures ensure that active SoD monitoring controls remain continuously effective across shift boundaries, that open alerts or anomalies are formally transferred between accountable personnel, and that no individual exploits shift transition periods to conduct unauthorised cross-functional activities.

### 9.2 Shift Structure

| Shift | Hours (Local Time) | Primary SoD Responsibility | Shift Lead Role |
|---|---|---|---|
| Morning | [HH:MM – HH:MM] | [Responsibility description] | [Role Title] |
| Afternoon | [HH:MM – HH:MM] | [Responsibility description] | [Role Title] |
| Night | [HH:MM – HH:MM] | [Responsibility description] | [Role Title] |
| On-Call (if applicable) | [HH:MM – HH:MM] | [Responsibility description] | [Role Title] |

### 9.3 Handover Process

The outgoing shift lead is responsible for completing and formally handing over the **Shift Handover Record** (see Appendix E) to the incoming shift lead. The handover record shall capture:

1. **Active SoD Alerts** — All open or unresolved SoD-related alerts, their current status, and any investigation steps already taken.
2. **Escalations Pending** — Any findings escalated during the shift that remain awaiting management response.
3. **System Health** — Status of SoD monitoring tools (SIEM, IAM, PAM) including any degraded or offline data sources that may affect detection coverage.
4. **Access Changes During Shift** — Any emergency or out-of-cycle access provisioning events that occurred during the shift and require follow-up review.
5. **Handover Attestation** — Both outgoing and incoming shift leads must sign (or digitally acknowledge in [ITSM / Shift Log Platform]) the handover record before the outgoing shift lead departs.

### 9.4 Escalation During Handover

If a **Critical** or **High** severity SoD alert is open at shift transition:

- The **outgoing shift lead must remain available** by phone for a minimum of [30] minutes after handover completion.
- The **incoming shift lead must acknowledge** the alert and assign an analyst before the outgoing lead is released.
- The **SOC Manager must be notified** of any unresolved Critical SoD alert at every shift handover until closure.

### 9.5 Handover Record Retention

Completed shift handover records are retained in [ITSM / SOC Log System] for a minimum of **[1 year]** and are made available to Internal Audit and Risk functions upon request as evidence of continuous SoD monitoring.

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountabilities for maintaining, reviewing, and evidencing SoD controls across the three in-scope functions.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | SOC Manager | CISO | Technology Risk Manager | Chief Risk Officer | Head of Internal Audit | IT Audit Team | Board Audit Committee |
|---|---|---|---|---|---|---|---|
| Define SoD policy and minimum standards | C | A/R | C | C | C | — | I |
| Maintain access control matrix and IAM role design | R | A | C | I | I | — | — |
| Conduct SoD assessment (this document) | R | I | C | I | A | R | I |
| Review and approve SoD findings | C | C | C | A | R | R | I |
| Remediate identified SoD gaps | R (SOC gaps) | A | R (Risk gaps) | A | I | I | — |
| Monitor SoD use cases (SIEM/GRC) | R | A | C | I | I | C | — |
| Tune and maintain SoD use cases | R | A | I | I | C | I | — |
| Conduct shift handover (SoD monitoring) | R | I | I | I | I | — | — |
| Escalate Critical/High SoD findings | R | A | C | A | R | R | I (Critical only) |
| Approve quarterly SoD evidence document | C | C | C | C | A | R | I |
| Report SoD status to Board | I | R | C | R | R | I | A |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial document creation |
| [1.1] | [Date] | [Author Name, Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Role] | [Description of major revision] |

### 11.2 Approval Sign-Off

*This document requires formal approval from the following roles prior to issuance and after each material revision.*

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Manager (Document Owner) | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Head of Internal Audit | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |

---

## 12. References

The following regulatory instruments, standards, and internal policies are referenced in or directly applicable to this document:

| Reference | Title | Issuing Body | Relevant Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | **Clause 11.3** — Segregation of duties between security operations, risk, and audit |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10 — Technology risk governance |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 — Security principle (data access controls) |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC | Annex A 5.3 (SoD), A 8.2 (Privileged access) |
| COBIT 2019 | Control Objectives for Information Technologies | ISACA | DSS05.04, MEA02.01 |
| NIST SP 800-53 Rev.5 | Security and Privacy Controls for Information Systems | NIST | AC-5 (Separation of duties), AC-6 (Least privilege) |
| [Internal Policy Ref] | [Organization Name] Segregation of Duties Policy | [Organization Name] | All sections |
| [Internal Policy Ref] | [Organization Name] Identity and Access Management Policy | [Organization Name] | Privileged access, role assignment |
| [Internal Policy Ref] | [Organization Name] Information Security Policy | [Organization Name] | Security operations governance |

---

## 13. Appendices

### Appendix A — Access Control Matrix

*Attach or embed the current access control matrix showing all in-scope user roles, their system entitlements, and functional classification (SOC / Risk / Audit). This matrix should be generated from the authoritative IAM/PAM system as at the assessment snapshot date.*

**[ATTACH: Access Control Matrix — generated [Snapshot Date] from [IAM/PAM System]]**

| User ID | Full Name | Department | Primary Function | SIEM Role | GRC Platform Role | Audit Tool Role | IAM Role | PAM Access | SoD Conflict? |
|---|---|---|---|---|---|---|---|---|---|
| [User ID] | [Name] | [Dept] | [SOC / Risk / Audit] | [Role] | [Role] | [Role] | [Role] | [Y/N] | [Y/N — if Y, reference finding] |

---

### Appendix B — Organisational Chart

*Attach the current approved organisational chart for the Security Operations, Technology Risk, and Internal Audit functions, showing reporting lines to senior management and Board-level governance bodies.*

**[ATTACH: Organisational Chart — approved [Date], version [X]]**

---

### Appendix C — Role Descriptions Summary

*Provide a summary of key role responsibilities for SoD-relevant positions, confirming that functional boundaries are formally defined and do not contain conflicting duties.*

| Role Title | Function | Key Responsibilities | Prohibited Activities (SoD) |
|---|---|---|---|
| SOC Analyst (Tier 1/2/3) | Security Operations | Monitoring, triage, incident investigation | Cannot approve own access; cannot modify audit logs |
| SOC Manager | Security Operations | Oversight of SOC operations, escalation management | Cannot conduct independent audit of SOC controls |
| Technology Risk Analyst | Risk Management | Control assessment, risk register maintenance | Cannot directly operate production security tools |
| Technology Risk Manager | Risk Management | Risk reporting, control framework ownership | Cannot approve security tool configurations |
| IT Auditor | Internal Audit | Control testing, finding documentation | Cannot perform SOC operational duties |
| Head of Internal Audit | Internal Audit | Audit planning, quality assurance, Board reporting | Cannot have operational access to production systems |

---

### Appendix D — System-Generated Access Reports

*Attach system-generated user access reports from each in-scope platform, exported as at the assessment snapshot date. Reports must be unaltered and include export timestamp and administrator credentials used to generate the report.*

**[ATTACH: [SIEM Platform] User Access Report — [Snapshot Date]]**

**[ATTACH: [GRC Platform] User Access Report — [Snapshot Date]]**

**[ATTACH: [Audit Management Platform] User Access Report — [Snapshot Date]]**

**[ATTACH: IAM System Privileged Role Membership Report — [Snapshot Date]]**

---

### Appendix E — Shift Handover Record Template

*The following template is to be completed at each shift transition by the outgoing shift lead and acknowledged by the incoming shift lead.*

---

**SHIFT HANDOVER RECORD**

| Field | Details |
|---|---|
| Date | [Date] |
| Outgoing Shift | [Morning / Afternoon / Night] |
| Outgoing Shift Lead | [Name] |
| Incoming Shift Lead | [Name] |
| Handover Time | [HH:MM] |

**Open SoD Alerts:**

| Alert ID | Description | Severity | Current Status | Assigned Analyst | Next Action |
|---|---|---|---|---|---|
| [Alert ID] | [Description] | [Critical/High/Med/Low] | [Status] | [Name] | [Action] |

**Pending Escalations:** [None / Describe]

**System Health Status:**

| System | Status | Notes |
|---|---|---|
| [SIEM Platform] | [Operational / Degraded / Offline] | [Notes] |
| [IAM System] | [Operational / Degraded / Offline] | [Notes] |
| [PAM System] | [Operational / Degraded / Offline] | [Notes] |

**Access Changes During Shift:** [None / Describe any out-of-cycle provisioning events]

**Additional Notes:** [Free text]

**Outgoing Shift Lead Attestation:** I confirm the above information is accurate and complete.

Signature: __________________ Date/Time: __________________

**Incoming Shift Lead Acknowledgement:** I have received and reviewed the above handover.

Signature: __________________ Date/Time: __________________

---

*End of Document*

---

*This document is classified as **Confidential**. Distribution is restricted to authorised personnel with a legitimate need to know. Unauthorised disclosure, reproduction, or transmission is prohibited. For queries regarding this document, contact the Document Owner: SOC Manager, [Organization Name].*