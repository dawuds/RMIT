# Patch Deployment Tracking Log

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This Patch Deployment Tracking Log supports [Organization Name]'s compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.18**, which mandates that financial institutions maintain timely and systematic patch management processes to address technology vulnerabilities across all critical and non-critical systems.

This log serves as the authoritative operational record of all patch deployments applied to [Organization Name]'s technology assets, capturing deployment timelines, criticality classifications, testing outcomes, and rollback readiness. It is intended for **continuous monitoring** by IT Operations and subject to **quarterly review** by the IT Operations Manager and relevant governance committees.

**Scope** of this log covers:

- All servers (physical and virtual) within [Organization Name]'s production, staging, and development environments
- Network infrastructure devices (routers, switches, firewalls, load balancers)
- End-user computing devices (workstations, laptops, mobile endpoints)
- Databases, middleware, and application platforms
- Cloud-hosted and co-located assets managed by or on behalf of [Organization Name]
- Third-party systems under [Organization Name]'s patch management remit per contractual obligation

**Out of Scope:** Assets managed entirely by approved third-party vendors under separate SLA-governed patch management arrangements, unless classified as critical systems per [Organization Name]'s Technology Risk classification framework.

---

## 2. Regulatory Reference

| Regulatory Framework | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | 10.18 | Financial institutions shall implement a patch management process to identify, evaluate, test, and apply security patches in a timely manner commensurate with the criticality of the vulnerability. |
| BNM RMiT | 10.18(a) | Patches classified as critical shall be applied within the stipulated timeframe following vendor release or vulnerability disclosure. |
| BNM RMiT | 10.18(b) | A register of end-of-life (EOL) technology shall be maintained, with documented risk acceptance and remediation plans. |
| Personal Data Protection Act 2010 (PDPA) | Section 9 – Security Principle | Practical steps shall be taken to protect personal data from unauthorized access, including maintaining up-to-date system security. |
| NACSA Cybersecurity Framework | Patch Management Control | Timely application of security patches to reduce the attack surface of information systems. |

---

## 3. Asset and Item Identification

*Record each unique technology asset subject to patch management. Every asset must have a stable identifier that links patch events throughout the log. Assets should be sourced from [Organization Name]'s authoritative Configuration Management Database (CMDB) or asset inventory.*

| Asset ID | Asset Name / Hostname | Asset Type | Operating System / Platform | Version / Build | Location (DC / Cloud / Branch) | Business Unit | Criticality Tier | CMDB Record Link |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Hostname / Device Name] | [Server / Network / Endpoint / Database / Application] | [OS/Platform Name] | [Version] | [Primary DC / DR Site / Azure / AWS / Branch Office] | [Business Unit Name] | [Tier 1 / Tier 2 / Tier 3] | [CMDB-REF-001] |
| [ASSET-002] | | | | | | | | |
| [ASSET-003] | | | | | | | | |

**Asset Type Definitions:**

- **Server** – Physical or virtual compute servers in any environment
- **Network** – Routers, switches, firewalls, WAFs, load balancers
- **Endpoint** – Workstations, laptops, tablets, mobile devices
- **Database** – RDBMS, NoSQL, data warehousing platforms
- **Application** – Business applications, middleware, integration platforms
- **Security** – IDS/IPS, SIEM, PAM, DLP, and other security tooling

---

## 4. Classification and Categorisation

*Patches must be classified by criticality upon identification, aligned with the originating vendor advisory (e.g., CVSS score) and [Organization Name]'s internal risk rating methodology. Classification determines the mandatory remediation timeline per RMiT Clause 10.18.*

### 4.1 Patch Criticality Classification Framework

| Criticality Level | CVSS Score Range | Description | Mandatory Remediation Timeframe | RMiT Reference |
|---|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Remote code execution, privilege escalation, or complete system compromise possible without authentication. | Within **72 hours** of vendor release or vulnerability disclosure (whichever is earlier) | RMiT 10.18(a) |
| **High** | 7.0 – 8.9 | Significant security risk; exploitation likely with minimal conditions. | Within **14 calendar days** | RMiT 10.18 |
| **Medium** | 4.0 – 6.9 | Moderate risk; exploitation requires specific conditions or authenticated access. | Within **30 calendar days** | RMiT 10.18 |
| **Low** | 0.1 – 3.9 | Minimal risk; exploitation is complex or has negligible impact. | Within **90 calendar days** | RMiT 10.18 |
| **Informational** | 0.0 | No direct security impact; advisory or best-practice update. | Next scheduled maintenance window | RMiT 10.18 |

### 4.2 Patch Category Classification

| Category Code | Category | Description |
|---|---|---|
| CAT-SEC | Security Patch | Addresses a known vulnerability (CVE or vendor advisory) |
| CAT-BUG | Bug Fix | Resolves functional defect with no direct security implication |
| CAT-FEAT | Feature Update | Adds new functionality; may include embedded security fixes |
| CAT-CONF | Configuration Update | Hardening or configuration change applied as a patch |
| CAT-EOL | EOL Remediation | Patch applied as part of EOL technology migration or upgrade |

---

## 5. Owner and Custodian Register

*Every asset in scope must have a designated Technical Owner (accountable for patch decisions) and a Technical Custodian (operationally responsible for applying patches). This section should be maintained in alignment with [Organization Name]'s CMDB and reviewed quarterly.*

| Asset ID | Asset Name | Technical Owner | Technical Owner Department | Technical Custodian | Technical Custodian Contact | Vendor / Third-Party Custodian (if applicable) | Escalation Contact |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Full Name] | [IT Infrastructure / Application Services / etc.] | [Full Name] | [Email / Ext.] | [Vendor Name or N/A] | [IT Operations Manager] |
| [ASSET-002] | | | | | | | |
| [ASSET-003] | | | | | | | |

**Ownership Definitions:**

- **Technical Owner** – Senior accountable individual responsible for authorising patch deployment and accepting residual risk where patches are deferred.
- **Technical Custodian** – Individual or team operationally responsible for executing the patch within stipulated timelines.
- **Vendor / Third-Party Custodian** – Where patch management is delegated to a vendor, the vendor's designated contact and SLA reference must be recorded.

---

## 6. Patch Deployment Tracking Log

*This is the primary operational record. Each row represents a single patch deployment event. Log entries must be created at the point a patch advisory is identified and updated at each stage of the deployment lifecycle. This log may be system-generated from [Organization Name]'s patch management platform (e.g., Microsoft WSUS, Tenable.io, Qualys, Ansible, or equivalent).*

### 6.1 Active Patch Log

| Log Entry ID | Patch ID / CVE Reference | Patch Name / Description | Vendor Advisory Reference | CVSS Score | Criticality Level | Category | Asset ID | Asset Name | Advisory Date | Patch Available Date | Target Deployment Date (per SLA) | Actual Deployment Date | Deployment Status | Days Variance (±) | Deployed By | Change Reference | Comments |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [LOG-2024-001] | [CVE-XXXX-XXXXX / Vendor-Patch-ID] | [Patch Description] | [Vendor Advisory URL / Reference] | [X.X] | [Critical / High / Medium / Low] | [CAT-SEC / CAT-BUG / etc.] | [ASSET-001] | [Asset Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Deployed / Pending / Deferred / Failed / Exempted] | [+/- Days] | [Technician Name] | [CHG-XXXXX] | [Free text] |
| [LOG-2024-002] | | | | | | | | | | | | | | | | | |
| [LOG-2024-003] | | | | | | | | | | | | | | | | | |

**Deployment Status Definitions:**

| Status | Description |
|---|---|
| **Deployed** | Patch successfully applied and verified within SLA |
| **Pending** | Patch identified; deployment scheduled within SLA |
| **In Progress** | Deployment actively underway |
| **Deferred** | Deployment delayed beyond SLA; formal deferral approved (see Section 6.2) |
| **Failed** | Deployment attempted but unsuccessful; rollback executed |
| **Exempted** | Asset formally exempted from patch; risk acceptance documented |

### 6.2 Deferral and Exception Register

*Where patches cannot be applied within the mandated timeframe, a formal deferral must be documented below. All deferrals require written approval from the IT Operations Manager and notification to the Chief Information Security Officer (CISO). Deferrals for Critical-rated patches additionally require escalation to the [Risk Management Committee / Technology Risk Committee] and must be reported to BNM if the deferral impacts a Critical System as defined under RMiT.*

| Deferral ID | Log Entry ID | Asset ID | Patch ID / CVE | Criticality | Original SLA Date | Revised Target Date | Deferral Reason | Compensating Controls Applied | Approved By | Approval Date | Review Date | Escalated to BNM (Y/N) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [DEF-2024-001] | [LOG-2024-XXX] | [ASSET-XXX] | [CVE / Patch ID] | [Critical / High / etc.] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Operational constraint / vendor delay / compatibility issue / etc.] | [Network segmentation / enhanced monitoring / WAF rule / etc.] | [IT Operations Manager] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Y / N] |
| [DEF-2024-002] | | | | | | | | | | | | |

---

## 7. Testing and Rollback Procedures

*Each patch deployment must be accompanied by documented pre-deployment testing outcomes and a defined rollback plan. Testing must be conducted in a non-production environment prior to production deployment for all Critical and High-rated patches, and for any patch applied to a Tier 1 (critical) asset.*

### 7.1 Pre-Deployment Testing Record

| Test Record ID | Log Entry ID | Asset ID | Patch ID | Test Environment | Test Start Date | Test Completion Date | Test Outcome | Issues Identified | Issue Resolution | Approved for Production (Y/N) | Approved By | Approval Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [TEST-2024-001] | [LOG-2024-XXX] | [ASSET-XXX] | [Patch ID] | [UAT / Staging / Dev / Lab] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Pass / Fail / Conditional Pass] | [Description of issues or "None"] | [Remediation action or "N/A"] | [Y / N] | [Technical Owner / Change Manager] | [DD/MM/YYYY] |
| [TEST-2024-002] | | | | | | | | | | | | |

### 7.2 Rollback Plan Register

*A rollback plan must be defined and tested (where feasible) before any patch is applied to a production system. Rollback procedures must be documented in the associated Change Request ([Change Management System Reference]) and summarised below.*

| Rollback Plan ID | Log Entry ID | Asset ID | Patch ID | Rollback Method | Rollback Script / Procedure Reference | Estimated Rollback Duration | Rollback Tested (Y/N) | Rollback Test Date | Rollback Contact (On-Call) |
|---|---|---|---|---|---|---|---|---|---|
| [RB-2024-001] | [LOG-2024-XXX] | [ASSET-XXX] | [Patch ID] | [Snapshot restore / Uninstall / Config backup restore / Image re-deploy] | [Runbook Ref / Change Ticket Ref] | [Estimated minutes/hours] | [Y / N] | [DD/MM/YYYY or N/A] | [On-call engineer name / pager details] |
| [RB-2024-002] | | | | | | | | | |

### 7.3 Failed Deployment and Rollback Log

*Record all instances where a patch deployment failed and a rollback was executed. This log is reviewed by the IT Operations Manager and reported to the Technology Risk Committee quarterly.*

| Incident ID | Log Entry ID | Asset ID | Patch ID | Failure Date/Time | Failure Description | Rollback Executed (Y/N) | Rollback Completion Date/Time | Rollback Outcome | Root Cause | Remediation Action | Incident Report Reference |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [INC-2024-001] | [LOG-2024-XXX] | [ASSET-XXX] | [Patch ID] | [DD/MM/YYYY HH:MM] | [Brief description of failure] | [Y / N] | [DD/MM/YYYY HH:MM] | [Success / Partial / Failed] | [Root cause summary] | [Corrective action taken] | [INC-REF-XXXXX] |
| [INC-2024-002] | | | | | | | | | | | |

---

## 8. End-of-Life (EOL) Technology Register

*Per RMiT Clause 10.18(b), [Organization Name] is required to maintain a register of all technology assets that have reached or are approaching end-of-life (EOL) status, where vendor security patches are no longer issued. For each EOL asset, a formal risk acceptance and documented remediation plan is mandatory. This register must be reviewed quarterly and reported to the Technology Risk Committee.*

### 8.1 EOL Asset Register

| EOL Register ID | Asset ID | Asset Name | Vendor | Product Name | Version | Official EOL Date | Status | Days Past EOL | Compensating Controls | Migration / Remediation Plan | Target Remediation Date | Risk Acceptance Reference | Risk Accepted By | Risk Acceptance Date | Next Review Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [EOL-2024-001] | [ASSET-XXX] | [Asset Name] | [Vendor Name] | [Product Name] | [Version] | [DD/MM/YYYY] | [EOL – Active / EOL – Scheduled for Decommission / EOL – In Migration] | [Number of days] | [Network isolation / additional monitoring / WAF / compensating patch from third party / etc.] | [Migration to [replacement system] / Decommission by [date]] | [DD/MM/YYYY] | [Risk Acceptance Form Ref] | [CISO / CTO / Risk Committee] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [EOL-2024-002] | | | | | | | | | | | | | | | |

### 8.2 EOL Risk Acceptance Summary

*Each EOL asset in production must have an associated risk acceptance entry. Risk acceptance does not indefinitely defer remediation; each acceptance has a defined validity period not exceeding 12 months, subject to quarterly review.*

| Risk Acceptance ID | EOL Register ID | Asset ID | Risk Statement | Risk Rating | Business Justification for Continued Use | Compensating Controls | Validity Period | Accepted By | Acceptance Date | Escalated to Board/ExCo (Y/N) | Next Review / Expiry Date |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [RA-EOL-2024-001] | [EOL-2024-XXX] | [ASSET-XXX] | [Description of risk posed by continued EOL operation] | [Critical / High / Medium / Low] | [Business reason for continued use pending migration] | [List of controls] | [Start Date] – [End Date] | [CISO / CTO name and designation] | [DD/MM/YYYY] | [Y / N] | [DD/MM/YYYY] |
| [RA-EOL-2024-002] | | | | | | | | | | | |

---

## 9. Patch Compliance Dashboard Summary

*This section provides a quarterly management summary of patch compliance posture. It is to be populated by the IT Operations Manager and presented to the Technology Risk Committee at each quarterly review.*

### 9.1 Quarterly Compliance Summary

| Quarter | Total Patches Identified | Critical | High | Medium | Low | Deployed On-Time | Deployed Late | Deferred | Failed / Rolled Back | Exempted | Compliance Rate (%) | EOL Assets Active |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [Q1 YYYY] | | | | | | | | | | | | |
| [Q2 YYYY] | | | | | | | | | | | | |
| [Q3 YYYY] | | | | | | | | | | | | |
| [Q4 YYYY] | | | | | | | | | | | | |

> **Compliance Rate Calculation:** (Patches Deployed On-Time ÷ Total Patches Identified) × 100
>
> **Target:** ≥ 95% overall patch compliance rate. Critical patch SLA compliance target: **100%**.

### 9.2 Trend Observations and Management Commentary

*Record observations on patch compliance trends, recurring issues, systemic risks, and actions taken or planned.*

- **[Quarter YYYY] Observations:** [Free text – e.g., increased volume of Critical patches from Microsoft Patch Tuesday; compensating controls applied to 3 assets pending upgrade window]
- **Key Risks Identified:** [Free text]
- **Actions Taken:** [Free text]
- **Actions Planned:** [Free text]

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability and responsibility for patch management activities within [Organization Name].*

**RACI Key:** **R** – Responsible | **A** – Accountable | **C** – Consulted | **I** – Informed

| Activity | IT Operations Manager | System / Asset Owner | IT Security (CISO Office) | Change Manager | Technical Custodian | Technology Risk Committee | Senior Management / Board |
|---|---|---|---|---|---|---|---|
| Identify and triage patch advisories | A | C | R | I | R | I | I |
| Classify patch criticality and assign SLA | A | C | R | I | C | I | I |
| Approve patch deployment plan | A | R | C | R | C | I | I |
| Execute pre-production testing | A | I | C | I | R | I | I |
| Raise and approve Change Request | I | C | C | A | R | I | I |
| Deploy patch to production | A | I | I | I | R | I | I |
| Verify successful patch deployment | A | I | R | I | R | I | I |
| Log and maintain patch records | A | I | I | I | R | I | I |
| Execute rollback on failed deployment | A | I | C | I | R | I | I |
| Approve patch deferral | A | C | C | I | I | I | I |
| Approve EOL risk acceptance | I | C | A | I | I | R | C |
| Quarterly patch compliance review | A | I | R | I | I | R | I |
| Report to BNM on critical patch SLA breach | I | I | A | I | I | R | R |
| Maintain EOL register | A | C | R | I | C | I | I |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial document created |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Description of major revision] |

### 11.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Full Name] | _________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Full Name] | _________________ | [DD/MM/YYYY] |
| Chief Technology Officer (CTO) | [Full Name] | _________________ | [DD/MM/YYYY] |
| Head of Technology Risk / Risk Management | [Full Name] | _________________ | [DD/MM/YYYY] |
| Compliance Officer | [Full Name] | _________________ | [DD/MM/YYYY] |

---

## 12. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.18 | Patch management obligations for licensed financial institutions in Malaysia |
| BNM RMiT | Clause 10.18(a) | Critical patch remediation timeframe requirements |
| BNM RMiT | Clause 10.18(b) | End-of-life technology register and risk acceptance requirements |
| BNM RMiT | Clause 11 | Business continuity considerations related to technology resilience |
| Personal Data Protection Act 2010 | Section 9 – Security Principle | Obligation to protect personal data through appropriate technical controls including system patching |
| NACSA Cybersecurity Framework | Patch Management Control Domain | National cybersecurity guidance on vulnerability and patch management |
| [Organization Name] Change Management Policy | [Internal Policy Ref] | Internal policy governing change management process applicable to patch deployments |
| [Organization Name] Technology Risk Appetite Statement | [Internal Policy Ref] | Risk thresholds applicable to EOL technology and deferred patching |
| [Organization Name] Vulnerability Management Policy | [Internal Policy Ref] | Vulnerability identification, classification, and remediation policy |
| [Organization Name] Business Continuity Plan | [Internal Policy Ref] | BCP procedures relevant to critical system patch failures |

---

## Appendices

### Appendix A – Patch Management SLA Reference Card

| Criticality | CVSS Range | SLA from Vendor Release | Escalation Trigger |
|---|---|---|---|
| Critical | 9.0–10.0 | 72 hours | Immediate – CISO + IT Ops Manager |
| High | 7.0–8.9 | 14 calendar days | Day 10 – IT Ops Manager |
| Medium | 4.0–6.9 | 30 calendar days | Day 25 – Technical Custodian |
| Low | 0.1–3.9 | 90 calendar days | Day 80 – Technical Custodian |
| Informational | 0.0 | Next maintenance window | N/A |

---

### Appendix B – Patch Deferral Approval Form Template

**Deferral Reference:** [DEF-YYYY-XXX]
**Date Raised:** [DD/MM/YYYY]
**Raised By:** [Name and Designation]

| Field | Details |
|---|---|
| Asset ID | [ASSET-XXX] |
| Asset Name | [Asset Name] |
| Patch ID / CVE | [CVE-XXXX-XXXXX] |
| Criticality | [Critical / High / Medium / Low] |
| Original SLA Date | [DD/MM/YYYY] |
| Proposed Revised Date | [DD/MM/YYYY] |
| Reason for Deferral | [Operational impact / vendor compatibility issue / scheduled outage window / etc.] |
| Compensating Controls | [Controls applied during deferral period] |
| Residual Risk Assessment | [Brief risk assessment] |
| IT Operations Manager Approval | Name: _________________ Date: _________ |
| CISO Acknowledgement (Critical patches) | Name: _________________ Date: _________ |

---

### Appendix C – EOL Technology Notification and Tracking Procedure

*This appendix outlines the minimum procedural steps for onboarding an asset into the EOL register.*

1. **Identification** – IT Operations or Vendor Management identifies a technology approaching or past EOL via vendor notification, NVD advisory, or internal audit.
2. **Classification** – Asset Criticality Tier is confirmed against the CMDB.
3. **Risk Assessment** – IT Security assesses residual risk from continued operation of the EOL asset.
4. **Compensating Controls** – IT Operations implements and documents compensating controls.
5. **Risk Acceptance** – Formal risk acceptance is completed per [Organization Name]'s Risk Management Framework.
6. **Remediation Planning** – A time-bound remediation or migration plan is agreed between the Technical Owner and IT Operations Manager.
7. **Quarterly Review** – The EOL register is reviewed at each quarterly patch compliance review; risk acceptances approaching expiry are escalated for renewal or remediation.
8. **Closure** – Upon decommission or migration, the EOL register entry is closed and archived with supporting evidence.

---

### Appendix D – Glossary

| Term | Definition |
|---|---|
| **CVE** | Common Vulnerabilities and Exposures – a standardised identifier for publicly known cybersecurity vulnerabilities |
| **CVSS** | Common Vulnerability Scoring System – a framework for rating the severity of security vulnerabilities (scored 0.0–10.0) |
| **EOL** | End-of-Life – the status of a technology product for which the vendor no longer provides security patches or support |
| **CMDB** | Configuration Management Database – authoritative inventory of IT assets and their relationships |
| **SLA** | Service Level Agreement – in this context, the mandatory timeframe within which a patch must be deployed |
| **RMiT** | Risk Management in Technology – BNM policy document governing technology risk management for Malaysian financial institutions |
| **CISO** | Chief Information Security Officer |
| **CHG** | Change Request reference number from [Organization Name]'s change management system |
| **Compensating Control** | A security measure applied in lieu of a primary control (e.g., patching) to mitigate residual risk |
| **Risk Acceptance** | Formal acknowledgement and sign-off by an accountable party that a residual risk is accepted within the organization's risk appetite |

---

*This document is classified as **Confidential**. Distribution is restricted to authorised personnel with a legitimate need-to-know. Unauthorised disclosure, reproduction, or modification is prohibited. For queries regarding this document, contact the IT Operations Manager at [Contact Details].*

*Document ID: [Document ID] | Version 1.0 | [Organization Name] | © [Year]*