# Deployment Verification Records

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

This document serves as the Deployment Verification Records log for **[Organization Name]**, capturing structured evidence of post-deployment verification checks performed on technology systems, applications, and infrastructure components. It is maintained in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.12**, which mandates that financial institutions establish rigorous controls over technology change and deployment activities, including verification that deployments conform to approved specifications and do not introduce unintended risk into the production environment.

**Scope:** This record applies to all technology assets deployed into production, pre-production, staging, and disaster recovery environments within [Organization Name], including but not limited to:

- Application software releases and patches
- Infrastructure and platform changes (servers, network devices, databases)
- Cloud-hosted and on-premises workloads
- Third-party and vendor-supplied technology components
- Configuration and security baseline changes

This log is designated as a **mandatory** compliance artifact and is subject to continuous update with quarterly consolidated review by the IT Operations Manager.

---

## 2. Asset / Item Identification

*Record the unique identification details of each technology asset or change item that has undergone post-deployment verification. Each entry must be traceable to an approved change request.*

| Field | Value |
|---|---|
| **Record ID** | [DVR-YYYY-NNNN] |
| **Change Request Reference** | [CR / RFC Number] |
| **Asset / Item Name** | [Name of the deployed system, application, or component] |
| **Asset ID / CMDB Reference** | [Asset ID from Configuration Management Database] |
| **Deployment Package / Build Version** | [Version number or release tag, e.g., v2.4.1] |
| **Deployment Date & Time** | [DD-MMM-YYYY HH:MM (UTC+8)] |
| **Target Environment** | [Production / Pre-Production / DR / Staging] |
| **Deployment Method** | [Automated Pipeline / Manual / Vendor-Led] |
| **Deployment Ticket / ITSM Reference** | [Ticket Number] |

---

## 3. Classification and Categorisation

*Classify the deployed item by technology type, criticality tier, and data sensitivity to enable appropriate verification rigour and downstream risk assessment.*

### 3.1 Technology Category

*Select the primary category that best describes the deployed asset or change. Multiple categories may apply.*

| Category | Applicable (Yes / No) |
|---|---|
| Application Software (in-house developed) | |
| Application Software (third-party / vendor) | |
| Operating System / Platform | |
| Database Management System | |
| Network Infrastructure (routers, switches, firewalls) | |
| Security Controls (WAF, IDS/IPS, SIEM) | |
| Cloud Service / PaaS / IaaS Component | |
| End-User Device Configuration | |
| Integration / API Layer | |
| Other: [Specify] | |

### 3.2 Criticality Tier

*Assign criticality based on the organization's technology risk tiering framework, considering impact on business operations, regulatory obligations, and data exposure.*

| Field | Value |
|---|---|
| **Criticality Tier** | [Tier 1 – Critical / Tier 2 – High / Tier 3 – Medium / Tier 4 – Low] |
| **Tier Assignment Rationale** | [Brief justification, e.g., "Supports real-time payment processing; downtime directly impacts customer-facing services"] |
| **Supports Critical Business Service (CBS)?** | [Yes / No] |
| **CBS Name (if applicable)** | [Name of Critical Business Service] |

### 3.3 Data Sensitivity Classification

| Field | Value |
|---|---|
| **Data Classification** | [Strictly Confidential / Confidential / Internal / Public] |
| **Personal Data Involved (PDPA)** | [Yes / No] |
| **Categories of Personal Data** | [e.g., Financial, Identity, Behavioral — or N/A] |
| **Sensitive Data Elements** | [e.g., Account numbers, NRIC, transactional records — or N/A] |

---

## 4. Owner and Custodian

*Record accountability for the deployed asset, distinguishing between the business owner (accountable for outcomes) and the technical custodian (responsible for operational management).*

### 4.1 Asset Owner

| Field | Value |
|---|---|
| **Asset Owner Name** | [Full Name] |
| **Designation** | [Job Title] |
| **Department / Business Unit** | [Department Name] |
| **Email Address** | [owner@organization.com.my] |
| **Contact Number** | [+60X-XXXXXXXX] |

### 4.2 Technical Custodian

| Field | Value |
|---|---|
| **Custodian Name** | [Full Name] |
| **Designation** | [Job Title, e.g., System Administrator, Infrastructure Engineer] |
| **Department / Business Unit** | [IT Operations / DevOps / Platform Engineering] |
| **Email Address** | [custodian@organization.com.my] |
| **Contact Number** | [+60X-XXXXXXXX] |

### 4.3 Deployment Executor

| Field | Value |
|---|---|
| **Executed By** | [Full Name or Automated Process Name] |
| **Role** | [Release Engineer / DevOps Engineer / Vendor Representative] |
| **Authorization Reference** | [Reference to CAB approval or authorized change record] |
| **Supervised By** | [Name of supervising IT Operations staff, if applicable] |

---

## 5. Status and Lifecycle Stage

*Document the current operational status and lifecycle stage of the deployed item at the time of verification and at each subsequent review. This section must be updated continuously as status changes occur.*

### 5.1 Deployment Verification Status

*Record the outcome of each verification check performed immediately following deployment. All checks must be signed off before the change is considered successfully closed.*

| Verification Check | Required | Result | Verified By | Timestamp |
|---|---|---|---|---|
| Deployment script / pipeline completed without errors | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Application health check / smoke test passed | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Configuration baseline confirmed (vs. approved baseline) | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Security hardening settings verified | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Vulnerability scan post-deployment (if applicable) | [Yes/No] | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Integration / API connectivity confirmed | [Yes/No] | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Rollback capability confirmed | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Monitoring and alerting confirmed active | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Backup job confirmed (post-deployment) | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Sign-off by Change Implementer | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |
| Sign-off by IT Operations Manager | Yes | [Pass / Fail / N/A] | [Name] | [DD-MMM-YYYY HH:MM] |

**Overall Verification Outcome:** [Verified – Successful / Verified – Successful with Exceptions / Failed – Rolled Back / Pending]

**Exception Details (if any):**
> [Describe any failed checks, deviations from expected outcomes, and remediation actions taken. Reference incident or problem tickets as applicable.]

### 5.2 Current Lifecycle Stage

| Field | Value |
|---|---|
| **Current Lifecycle Stage** | [Development / Testing / Pre-Production / Production / Decommissioned] |
| **Date Entered Current Stage** | [DD-MMM-YYYY] |
| **Expected End-of-Life / Decommission Date** | [DD-MMM-YYYY / Not Determined] |
| **Predecessor Asset / Version (if replaced)** | [Asset ID or Version of replaced item, or N/A] |
| **Successor Asset / Version (if known)** | [Planned successor, or N/A] |

### 5.3 Post-Deployment Incident Log

*Record any incidents, defects, or anomalies directly attributable to this deployment, identified during the post-deployment observation period.*

| Incident / Defect ID | Description | Severity | Date Raised | Status | Resolution Date |
|---|---|---|---|---|---|
| [INC-YYYY-NNNN] | [Brief description] | [Critical / High / Medium / Low] | [DD-MMM-YYYY] | [Open / Resolved / Closed] | [DD-MMM-YYYY] |
| | | | | | |

---

## 6. Last Review Date

*Record all formal reviews of this deployment verification record, including the quarterly consolidated reviews mandated under this framework. The record must be reviewed whenever a material change in status or risk occurs, and at minimum on a quarterly basis.*

### 6.1 Review History

| Review Cycle | Review Date | Reviewed By | Designation | Review Outcome | Next Scheduled Review |
|---|---|---|---|---|---|
| Post-Deployment (Initial) | [DD-MMM-YYYY] | [Name] | IT Operations Manager | [No issues / Issues noted — see below] | [DD-MMM-YYYY] |
| Quarterly Review – Q[N] [YYYY] | [DD-MMM-YYYY] | [Name] | IT Operations Manager | [No issues / Issues noted — see below] | [DD-MMM-YYYY] |
| Ad-Hoc Review | [DD-MMM-YYYY] | [Name] | [Designation] | [No issues / Issues noted — see below] | [DD-MMM-YYYY] |

### 6.2 Review Findings and Actions

*Document any findings raised during review and the corresponding remediation or action items.*

| Finding ID | Review Date | Finding Description | Risk Rating | Action Required | Responsible Party | Target Closure Date | Status |
|---|---|---|---|---|---|---|---|
| [F-001] | [DD-MMM-YYYY] | [Description of finding] | [High / Medium / Low] | [Action description] | [Name / Role] | [DD-MMM-YYYY] | [Open / Closed] |
| | | | | | | | |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability and responsibility for the creation, maintenance, verification, and review of Deployment Verification Records.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | IT Operations Manager | Release / DevOps Engineer | Change Advisory Board (CAB) | Information Security Officer | Risk & Compliance Officer | Business Asset Owner | Internal Audit |
|---|---|---|---|---|---|---|---|
| Authorize deployment to production | A | R | C | C | I | C | I |
| Execute deployment | I | R | I | I | I | I | I |
| Perform post-deployment verification checks | A | R | I | C | I | I | I |
| Record verification outcomes in this log | A | R | I | I | I | I | I |
| Approve closure of change (verification passed) | A | I | C | I | I | I | I |
| Initiate rollback on failed verification | A | R | C | C | I | I | I |
| Conduct quarterly review of deployment records | A | I | I | C | C | I | I |
| Escalate unresolved exceptions | A | R | C | C | C | I | I |
| Perform independent audit of records | I | I | I | I | I | I | A/R |
| Maintain record in CMDB / log repository | A | R | I | I | I | I | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name] | Initial template creation and approval |
| | | | |

### 8.2 Approval Sign-Off

*This document requires the following approvals before it is considered effective. Electronic signature or approval via the organization's approved document management system is acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Full Name] | [Signature / Ref] | [DD-MMM-YYYY] |
| Chief Information Officer (CIO) | [Full Name] | [Signature / Ref] | [DD-MMM-YYYY] |
| Information Security Officer (ISO) | [Full Name] | [Signature / Ref] | [DD-MMM-YYYY] |
| Risk & Compliance Officer | [Full Name] | [Signature / Ref] | [DD-MMM-YYYY] |

---

## 9. References

The following regulatory frameworks, policy documents, and internal standards govern this artifact:

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.12 | Post-deployment verification and change management controls for technology systems |
| BNM RMiT | Clause 10 (General) | Technology risk management requirements for licensed financial institutions |
| PDPA 2010 | Part II, Section 6 | General principles governing processing of personal data |
| NACSA | Cybersecurity Framework | National cybersecurity requirements applicable to Critical National Information Infrastructure |
| [Organization Name] | Change Management Policy v[X.X] | Internal policy governing the end-to-end change lifecycle |
| [Organization Name] | Technology Risk Management Framework v[X.X] | Internal framework for technology risk identification and treatment |
| [Organization Name] | Asset Management Policy v[X.X] | Internal policy governing classification and management of technology assets |
| ISO/IEC 20000-1 | Clause 9.2 | IT service management — Change management process requirements |

---

## 10. Appendices

### Appendix A: Deployment Verification Checklist (Printable Form)

*A standalone printable checklist version of Section 5.1 for use in environments where the automated log system is unavailable. Must be scanned and attached to the corresponding digital record upon completion.*

> [Attach or link to: `DVR-Checklist-Template-v1.0.pdf`]

### Appendix B: Rollback Procedure Reference

*Reference to the organization's standard rollback and backout procedure, to be followed when any verification check in Section 5.1 results in a "Fail" outcome.*

> [Attach or link to: `Rollback-and-Backout-Procedure-v[X.X].pdf` or relevant ITSM runbook]

### Appendix C: Approved Change Window Schedule

*Quarterly schedule of approved production change windows, as authorized by the Change Advisory Board, during which deployments covered by this record may occur.*

> [Attach or link to: `CAB-Approved-Change-Window-Schedule-[YYYY]-Q[N].xlsx`]

### Appendix D: CMDB Integration Reference

*Details of the Configuration Management Database (CMDB) integration used to auto-populate asset identification fields in Section 2. Includes field mapping and data dictionary.*

> [Attach or link to: `CMDB-DVR-Integration-Mapping-v[X.X].pdf`]

### Appendix E: Glossary of Terms

| Term | Definition |
|---|---|
| CAB | Change Advisory Board — the governance body responsible for approving significant technology changes |
| CBS | Critical Business Service — a business service whose unavailability would materially impact [Organization Name]'s operations or regulatory obligations |
| CMDB | Configuration Management Database — authoritative repository of technology asset records |
| DVR | Deployment Verification Record — this document |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk for licensed financial institutions |
| RFC | Request for Change — a formal change request submitted through the ITSM platform |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. All printed copies are uncontrolled — refer to the document management system for the current approved version.*