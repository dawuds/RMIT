# DLP Configuration Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

## 1. Purpose and Scope

This document provides configuration evidence for Data Loss Prevention (DLP) controls implemented across email, web, endpoint, and cloud environments within [Organization Name]. It serves as an audit artifact demonstrating compliance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.10**, which requires financial institutions to implement controls preventing unauthorized disclosure, transfer, or exfiltration of sensitive and customer data.

This evidence document supports [Organization Name]'s obligations under:
- **BNM RMiT Policy Document** — Clause 11.10 (Data Leakage Prevention)
- **Personal Data Protection Act 2010 (PDPA)** — Data security and breach prevention requirements
- **NACSA Cybersecurity Policy** — Critical information infrastructure protection requirements (where applicable)

### 1.1 Scope

*Define the organizational and technical boundaries covered by the DLP controls documented herein.*

- **Organizational Scope:** [List departments, business units, or subsidiaries in scope]
- **Technical Scope:**
  - Email DLP: [e.g., Microsoft 365 / Google Workspace / on-premises mail relay]
  - Web/Proxy DLP: [e.g., Zscaler / Symantec ProxySG / Cisco Umbrella]
  - Endpoint DLP: [e.g., Microsoft Purview / Forcepoint / Symantec DLP Endpoint]
  - Cloud DLP: [e.g., Microsoft Defender for Cloud Apps / Netskope / CASB solution]
- **Data Types in Scope:**
  - Customer Personally Identifiable Information (PII)
  - Payment Card Industry (PCI) data
  - Non-public financial information
  - Intellectual property and internal confidential documents
- **Out of Scope:** [List explicitly excluded systems, environments, or data types]

---

## 2. Assessment Scope and Criteria

*Describe the assessment boundaries and the criteria used to evaluate DLP control effectiveness. Reference the control objectives aligned to RMiT Clause 11.10.*

### 2.1 Assessment Objectives

This assessment validates that DLP controls:

- Detect and prevent unauthorized transmission of sensitive data across all monitored channels
- Operate with policy configurations aligned to [Organization Name]'s data classification framework
- Generate audit-quality logs and alerts for regulatory review
- Are reviewed and updated in accordance with the quarterly review cycle or upon a triggering event

### 2.2 Assessment Criteria

| Criterion | Description | Reference |
|---|---|---|
| Policy Coverage | DLP policies cover all data channels (email, web, endpoint, cloud) | RMiT Clause 11.10 |
| Data Classification Alignment | DLP rules map to the organization's data classification tiers | Internal Data Classification Policy |
| Alert Fidelity | False positive rate is within acceptable threshold ([X]%) | Internal SOC KPI |
| Incident Response Integration | DLP alerts are ingested into SIEM/SOAR for triage | RMiT Clause 11.10 |
| Policy Review Cadence | Policies reviewed quarterly or upon significant change | RMiT Clause 11.10 |
| Exception Management | Exceptions are documented, time-limited, and approved | Internal Exception Policy |

### 2.3 Triggering Events for Out-of-Cycle Review

*List any events that would prompt an unscheduled review of this evidence document.*

- Discovery of a confirmed or suspected data exfiltration incident
- Significant change to the DLP platform or vendor
- Introduction of a new data channel or cloud service
- BNM supervisory request or examination
- Material change in data classification policy

---

## 3. Methodology

*Describe the approach used to gather, validate, and document DLP configuration evidence. Include the tools, techniques, and personnel involved.*

### 3.1 Evidence Collection Approach

| Step | Activity | Responsible Party | Tool/Source |
|---|---|---|---|
| 1 | Export current DLP policy configurations from each channel | [SOC Analyst / DLP Administrator] | [DLP Management Console] |
| 2 | Validate active policy status and rule enablement | [SOC Analyst] | [DLP Management Console] |
| 3 | Review alert and incident logs for the review period | [Security Operations Manager] | [SIEM Platform] |
| 4 | Verify exception register and approvals | [Information Security Officer] | [GRC Platform / Exception Register] |
| 5 | Conduct test scenario validation (where applicable) | [SOC Analyst / Red Team] | [DLP Testing Scripts] |
| 6 | Compile findings and obtain management sign-off | [Security Operations Manager] | This document |

### 3.2 Review Period

- **Review Period Start Date:** [DD MMM YYYY]
- **Review Period End Date:** [DD MMM YYYY]
- **Evidence Collection Date:** [DD MMM YYYY]
- **Review Type:** ☐ Quarterly Scheduled  ☐ Per-Event (Triggered by: [Event Description])

### 3.3 Tools and Platforms Used

| Tool / Platform | Purpose | Version / Tenant |
|---|---|---|
| [DLP Platform Name] | Central DLP policy management and reporting | [Version / Instance] |
| [SIEM Platform] | Alert correlation and log review | [Version / Instance] |
| [GRC Platform] | Exception tracking and evidence storage | [Version / Instance] |
| [Cloud Access Security Broker] | Cloud channel DLP enforcement | [Version / Instance] |

---

## 4. Findings and Ratings

*Summarize the outcomes of the configuration review. Each channel should be assessed individually. Ratings use a standard tiered scale.*

### 4.1 Rating Scale

| Rating | Definition |
|---|---|
| **Effective** | Control is fully configured, operational, and meeting stated objectives |
| **Partially Effective** | Control is operational but has identified gaps or configuration deficiencies |
| **Ineffective** | Control is not operational, misconfigured, or not meeting stated objectives |
| **Not Assessed** | Control is out of scope for this review cycle |

### 4.2 DLP Channel Assessment Summary

| Channel | Control Component | Configuration Status | Rating | Findings / Notes |
|---|---|---|---|---|
| **Email** | Outbound DLP policy — PII detection | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |
| **Email** | Outbound DLP policy — PCI data detection | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |
| **Email** | Encryption enforcement for sensitive data | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |
| **Web/Proxy** | Upload restriction — cloud storage sites | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |
| **Web/Proxy** | SSL/TLS inspection for DLP effectiveness | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |
| **Endpoint** | Removable media control (USB block/encrypt) | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |
| **Endpoint** | Screen capture and print restriction | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |
| **Cloud (CASB)** | Sanctioned app DLP policy | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |
| **Cloud (CASB)** | Unsanctioned app blocking | ☐ Active ☐ Inactive | [Rating] | [Finding or "No issues identified"] |

### 4.3 Detailed Findings

*For each finding rated "Partially Effective" or "Ineffective", provide a detailed entry below.*

#### Finding [F-001]: [Short Finding Title]

| Field | Detail |
|---|---|
| **Channel** | [Email / Web / Endpoint / Cloud] |
| **Control Component** | [Name of the specific policy or rule] |
| **Rating** | [Partially Effective / Ineffective] |
| **Finding Description** | [Detailed description of the configuration gap or deficiency] |
| **Risk Impact** | [Potential regulatory or operational risk if unaddressed] |
| **Recommended Action** | [Specific remediation step] |
| **Owner** | [Name or Role] |
| **Target Remediation Date** | [DD MMM YYYY] |
| **Status** | ☐ Open  ☐ In Progress  ☐ Remediated  ☐ Accepted (Risk Accepted) |

---

## 5. Cloud Service Model and Deployment Type

*Document the cloud service models and deployment configurations relevant to DLP enforcement. This section supports shared responsibility analysis required under RMiT.*

### 5.1 Cloud Service Inventory

| Cloud Service | Provider | Service Model | Deployment Type | DLP Coverage Method |
|---|---|---|---|---|
| [e.g., Microsoft 365] | [Microsoft] | SaaS | Public Cloud | [Microsoft Purview DLP / CASB] |
| [e.g., Azure Storage] | [Microsoft] | PaaS/IaaS | Public Cloud | [Defender for Cloud / CASB] |
| [e.g., Internal Banking App] | [Internal/MSP] | IaaS | Private Cloud | [Endpoint DLP + Network DLP] |
| [e.g., Shared Services Platform] | [Vendor Name] | SaaS | Hybrid | [CASB + Contractual DLP obligations] |

### 5.2 Cloud Deployment Classification

| Deployment Type | Description | Services in Scope |
|---|---|---|
| **Public Cloud** | Shared multi-tenant infrastructure managed by CSP | [List services] |
| **Private Cloud** | Dedicated infrastructure within [Organization Name] or colocation | [List services] |
| **Hybrid Cloud** | Combination of public and private with interconnection | [List services] |
| **Community Cloud** | Shared infrastructure for specific industry/regulatory group | [List services / N/A] |

---

## 6. Data Residency Requirements

*Document data residency obligations and confirm that DLP controls enforce restrictions on cross-border data transfer.*

### 6.1 Regulatory Data Residency Position

Under **BNM RMiT Clause 11.10** and applicable BNM guidelines on outsourcing and cloud computing, [Organization Name] is required to ensure that customer data and non-public financial information remains within Malaysia or in jurisdictions approved by the Board and BNM, except where explicitly permitted.

### 6.2 Data Residency Configuration Evidence

| Data Type | Storage Location | Cloud Region | Residency Compliant | DLP Enforcement Control |
|---|---|---|---|---|
| Customer PII | [e.g., Malaysia — Azure East Asia] | [Region] | ☐ Yes ☐ No | [Policy Name / Reference] |
| Payment / PCI Data | [Storage Location] | [Region] | ☐ Yes ☐ No | [Policy Name / Reference] |
| Internal Financial Records | [Storage Location] | [Region] | ☐ Yes ☐ No | [Policy Name / Reference] |
| Audit Logs | [Storage Location] | [Region] | ☐ Yes ☐ No | [Policy Name / Reference] |

### 6.3 Cross-Border Transfer Controls

*Describe any approved cross-border data transfers and the DLP controls enforcing transfer restrictions.*

| Transfer Scenario | Destination Jurisdiction | Approval Reference | DLP Control Applied |
|---|---|---|---|
| [e.g., Backup replication to DR site] | [Country] | [Board/BNM Approval Reference] | [Control Description] |
| [e.g., Vendor data sharing — AML screening] | [Country] | [Approval Reference] | [Control Description] |

---

## 7. Shared Responsibility Matrix

*Define the division of DLP responsibilities between [Organization Name] and its cloud service providers and managed security service providers.*

### 7.1 Responsibility Model

*This matrix maps DLP control responsibilities across each stakeholder. "R" = Responsible, "A" = Accountable, "C" = Consulted, "I" = Informed.*

| DLP Control Domain | [Organization Name] | Cloud Service Provider | Managed Security Provider | Regulator |
|---|---|---|---|---|
| DLP policy authoring and approval | R/A | I | C | I |
| DLP platform configuration and maintenance | R/A | C (SaaS limits) | R (if managed) | — |
| DLP rule tuning and optimization | R/A | — | R (if managed) | — |
| Alert monitoring and triage | R/A | — | R (if managed) | — |
| Incident escalation and response | R/A | C | C | I |
| Evidence retention and audit readiness | R/A | C | C | I |
| Platform availability and uptime | I | R/A | — | — |
| Underlying infrastructure security | I | R/A | — | — |
| Regulatory reporting and notification | R/A | I | I | A |
| Exception approval and governance | R/A | — | C | — |

### 7.2 Cloud Provider Shared Responsibility Summary

| Provider | Service | Provider DLP Responsibility | Organization DLP Responsibility |
|---|---|---|---|
| [CSP Name] | [Service Name] | [e.g., Platform-level logging, native DLP tooling availability] | [e.g., Policy configuration, rule definition, alert monitoring] |
| [MSSP Name] | [Service Name] | [e.g., 24x7 alert triage, tuning, monthly reporting] | [e.g., Policy approval, exception sign-off, regulatory submissions] |

---

## 8. Roles and Responsibilities

*The following RACI table defines accountability for DLP configuration evidence maintenance and review.*

| Activity | Security Operations Manager | Information Security Officer | DLP Administrator / SOC Analyst | IT / Cloud Team | Chief Information Security Officer | Compliance Officer |
|---|---|---|---|---|---|---|
| DLP policy design and review | A | C | R | C | I | C |
| DLP configuration evidence compilation | A | I | R | C | I | I |
| Quarterly review scheduling | R/A | C | I | I | I | C |
| Findings remediation oversight | A | C | R | R | I | I |
| Exception approval | C | R | I | I | A | C |
| Regulatory submission support | C | R | I | I | A | R |
| Board / MANCO reporting | I | C | I | I | R/A | C |
| Evidence archive and retention | C | R | R | C | I | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Author Name] | Initial document creation |
| [1.1] | [DD MMM YYYY] | [Author Name] | [Description of changes] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Security Operations Manager | [Name] | __________________ | [DD MMM YYYY] |
| Information Security Officer | [Name] | __________________ | [DD MMM YYYY] |
| Chief Information Security Officer | [Name] | __________________ | [DD MMM YYYY] |
| Compliance Officer | [Name] | __________________ | [DD MMM YYYY] |

---

## 10. References

| Reference | Document / Clause | Relevance |
|---|---|---|
| BNM RMiT Policy Document | Clause 11.10 — Data Leakage Prevention | Primary regulatory basis for DLP controls |
| BNM RMiT Policy Document | Clause 10 — Cybersecurity | Overarching cybersecurity management framework |
| BNM RMiT Policy Document | Clause 11 — Technology Operations | Technology control requirements including DLP |
| PDPA 2010 | Section 9 — Security of Personal Data | Obligation to prevent unauthorized data disclosure |
| BNM Policy Document on Outsourcing | Section on Data and Information Security | Cloud and vendor DLP obligations |
| BNM Cloud Policy | Data Residency and Sovereignty Requirements | Cross-border data transfer controls |
| NACSA Cybersecurity Policy | CII Protection Requirements | Where applicable to critical infrastructure |
| ISO/IEC 27001:2022 | Annex A.8.12 — Data Leakage Prevention | International standard alignment |
| [Internal Data Classification Policy] | [Version / Reference] | Basis for DLP rule categorization |
| [Internal Incident Response Policy] | [Version / Reference] | DLP alert escalation and response procedures |

---

## Appendices

### Appendix A — DLP Policy Configuration Screenshots

*Attach or embed exported configuration screenshots from each DLP channel. Screenshots must be date-stamped and sourced directly from the management console. Label each screenshot with the channel, policy name, and capture date.*

| # | Channel | Policy Name | Screenshot Reference | Captured By | Capture Date |
|---|---|---|---|---|---|
| A-01 | Email | [Policy Name] | [File Reference / Embedded] | [Name] | [Date] |
| A-02 | Web/Proxy | [Policy Name] | [File Reference / Embedded] | [Name] | [Date] |
| A-03 | Endpoint | [Policy Name] | [File Reference / Embedded] | [Name] | [Date] |
| A-04 | Cloud (CASB) | [Policy Name] | [File Reference / Embedded] | [Name] | [Date] |

---

### Appendix B — DLP Alert and Incident Summary

*Provide a statistical summary of DLP alerts generated during the review period. Source from SIEM or DLP management console reports.*

| Channel | Total Alerts | True Positives | False Positives | Incidents Escalated | Blocked Actions |
|---|---|---|---|---|---|
| Email | [Count] | [Count] | [Count] | [Count] | [Count] |
| Web/Proxy | [Count] | [Count] | [Count] | [Count] | [Count] |
| Endpoint | [Count] | [Count] | [Count] | [Count] | [Count] |
| Cloud (CASB) | [Count] | [Count] | [Count] | [Count] | [Count] |
| **Total** | **[Count]** | **[Count]** | **[Count]** | **[Count]** | **[Count]** |

---

### Appendix C — Active Exception Register

*List all currently active exceptions to DLP policy enforcement. All exceptions must be time-limited and subject to senior management approval.*

| Exception ID | Description | Justification | Channel Affected | Approved By | Approval Date | Expiry Date | Risk Accepted |
|---|---|---|---|---|---|---|---|
| EXC-[001] | [Brief description of exception] | [Business justification] | [Channel] | [Approver Name/Role] | [Date] | [Date] | ☐ Yes ☐ No |

---

### Appendix D — DLP Test Validation Results

*Where DLP control validation testing was conducted, document test scenarios and outcomes to confirm controls are operating as configured.*

| Test ID | Channel | Test Scenario | Expected Outcome | Actual Outcome | Pass / Fail | Tested By | Test Date |
|---|---|---|---|---|---|---|---|
| T-01 | Email | Send email with dummy PAN (credit card number) to external recipient | Email blocked; alert generated | [Actual Outcome] | ☐ Pass ☐ Fail | [Name] | [Date] |
| T-02 | Endpoint | Attempt USB copy of file tagged "Confidential" | Transfer blocked; alert generated | [Actual Outcome] | ☐ Pass ☐ Fail | [Name] | [Date] |
| T-03 | Web | Attempt upload of IC number data to personal cloud storage | Upload blocked; alert generated | [Actual Outcome] | ☐ Pass ☐ Fail | [Name] | [Date] |
| T-04 | Cloud (CASB) | Attempt sharing of internal document via unsanctioned SaaS | Action blocked; incident raised | [Actual Outcome] | ☐ Pass ☐ Fail | [Name] | [Date] |

---

*This document is classified **Confidential** and is intended solely for [Organization Name] internal use, authorized auditors, and regulatory authorities. Unauthorized disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Security Operations Manager | Next Review: [Next Review Date]*