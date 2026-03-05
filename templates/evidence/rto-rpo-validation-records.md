# RTO/RPO Validation Records

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

*This section states the purpose of this record, the regulatory obligation it fulfils, and the systems and processes it covers.*

This document records the outcomes of Disaster Recovery (DR) tests conducted to validate that the Recovery Time Objective (RTO) and Recovery Point Objective (RPO) targets defined for critical systems and services are operationally achievable. It serves as primary evidence of compliance with **BNM Risk Management in Technology (RMiT) Policy Document, Clause 10.33**, which requires financial institutions to periodically test and validate their DR capabilities against defined recovery objectives.

**Scope:** This record applies to all critical technology systems, applications, and infrastructure components subject to DR planning within [Organization Name]. It encompasses:

- All systems classified as **Mission Critical** or **Business Critical** under the institution's IT asset classification framework.
- All DR tests, whether full failover, partial failover, tabletop exercises, or component-level recovery tests.
- All environments including on-premises data centres, co-location facilities, and cloud-hosted services.

**Out of Scope:** Non-critical systems with no defined RTO/RPO targets, and informal ad-hoc recovery activities not conducted under a structured DR test plan.

---

## 2. Asset/Item Identification

*List each system, application, or service that was subject to validation in this test event. Each entry must be uniquely identifiable and traceable to the institution's IT asset register.*

### 2.1 Systems Under Test

| Asset ID | System / Application Name | System Type | Environment | Hosting Location | Business Function Supported |
|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Application / Database / Infrastructure] | [Production / DR] | [On-Premises / Co-Lo / Cloud] | [Business Function] |
| [ASSET-002] | [System Name] | [Application / Database / Infrastructure] | [Production / DR] | [On-Premises / Co-Lo / Cloud] | [Business Function] |
| [ASSET-003] | [System Name] | [Application / Database / Infrastructure] | [Production / DR] | [On-Premises / Co-Lo / Cloud] | [Business Function] |

### 2.2 Test Event Identification

| Field | Details |
|---|---|
| **Test Event ID** | [TEST-YYYY-MM-NNN] |
| **Test Name** | [e.g., Annual DR Full Failover Exercise – Core Banking] |
| **Test Type** | [Full Failover / Partial Failover / Tabletop / Component Recovery] |
| **Test Date(s)** | [Start Date] to [End Date] |
| **Test Window** | [e.g., Saturday 22:00 – Sunday 06:00 MYT] |
| **Trigger** | [Scheduled Annual Test / Post-Incident Validation / Regulatory Requirement / Change-Driven] |
| **Test Scenario** | [Brief description of simulated failure scenario] |

---

## 3. Classification and Categorisation

*Record the criticality classification and business impact category for each asset under test, consistent with the institution's IT asset classification policy and BCP/DR tiering framework.*

### 3.1 Criticality Classification

| Asset ID | System Name | Criticality Tier | BCP Category | RTO Target | RPO Target | Regulatory Sensitivity | Data Classification |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Tier 1 – Mission Critical] | [Category A] | [e.g., 4 hours] | [e.g., 1 hour] | [Yes / No] | [Confidential / Restricted] |
| [ASSET-002] | [System Name] | [Tier 2 – Business Critical] | [Category B] | [e.g., 8 hours] | [e.g., 4 hours] | [Yes / No] | [Confidential / Internal] |
| [ASSET-003] | [System Name] | [Tier 3 – Important] | [Category C] | [e.g., 24 hours] | [e.g., 8 hours] | [No] | [Internal] |

### 3.2 Classification Definitions Reference

*For reference only. Definitions should align with the organization's approved IT Asset Classification Policy.*

| Criticality Tier | Definition |
|---|---|
| **Tier 1 – Mission Critical** | Failure causes immediate cessation of regulated business activity or systemic risk. |
| **Tier 2 – Business Critical** | Failure significantly impacts core operations but alternatives exist. |
| **Tier 3 – Important** | Failure causes operational inconvenience but no immediate business or regulatory breach. |

---

## 4. Owner and Custodian

*Record the accountable and responsible parties for each system under test. Ownership must align with the institution's IT asset register and DR plan.*

### 4.1 System Ownership Register

| Asset ID | System Name | Business Owner | Business Owner Department | IT System Custodian | IT Custodian Contact | DR Plan Owner |
|---|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Full Name] | [Department] | [Full Name] | [Email / Extension] | [Full Name / Role] |
| [ASSET-002] | [System Name] | [Full Name] | [Department] | [Full Name] | [Email / Extension] | [Full Name / Role] |
| [ASSET-003] | [System Name] | [Full Name] | [Department] | [Full Name] | [Email / Extension] | [Full Name / Role] |

### 4.2 Test Execution Team

| Role | Name | Department | Contact | Responsibilities |
|---|---|---|---|---|
| **DR Test Coordinator** | [Full Name] | [Department] | [Email] | Overall test coordination and outcome documentation |
| **Technical Lead** | [Full Name] | [Department] | [Email] | Technical execution of failover and recovery steps |
| **Business Continuity Manager** | [Full Name] | [Department] | [Email] | Validation of business process recoverability |
| **IT Security Representative** | [Full Name] | [Department] | [Email] | Security controls verification post-recovery |
| **Independent Observer / Auditor** | [Full Name] | [Department / External Firm] | [Email] | Independent observation and attestation |
| **Vendor Support** | [Full Name] | [Vendor Name] | [Email] | Vendor-specific system support during test |

---

## 5. Status and Lifecycle Stage

*Record the execution status and outcome of each validation test, including whether RTO and RPO targets were met.*

### 5.1 Test Execution Summary

| Asset ID | System Name | Test Start Time | Recovery Initiated | System Available (RTO Clock Stop) | Last Backup Timestamp (RPO Reference) | Actual RTO Achieved | RTO Target | RTO Met? | Actual RPO Achieved | RPO Target | RPO Met? | Overall Result |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [HH:MM] | [HH:MM] | [HH:MM] | [YYYY-MM-DD HH:MM] | [X hrs Y mins] | [X hrs] | [Pass / Fail] | [X hrs Y mins] | [X hrs] | [Pass / Fail] | [Pass / Fail / Partial] |
| [ASSET-002] | [System Name] | [HH:MM] | [HH:MM] | [HH:MM] | [YYYY-MM-DD HH:MM] | [X hrs Y mins] | [X hrs] | [Pass / Fail] | [X hrs Y mins] | [X hrs] | [Pass / Fail] | [Pass / Fail / Partial] |
| [ASSET-003] | [System Name] | [HH:MM] | [HH:MM] | [HH:MM] | [YYYY-MM-DD HH:MM] | [X hrs Y mins] | [X hrs] | [Pass / Fail] | [X hrs Y mins] | [X hrs] | [Pass / Fail] | [Pass / Fail / Partial] |

### 5.2 Test Lifecycle Stage

| Field | Details |
|---|---|
| **Test Status** | [Planned / In Progress / Completed / Cancelled] |
| **Outcome** | [Full Pass / Partial Pass / Fail] |
| **Overall Conclusion** | [Brief narrative summary of whether objectives were met] |
| **Remediation Required** | [Yes / No] |
| **Remediation Tracked Under** | [Issue Reference / Risk Register ID / CAP Reference] |

### 5.3 Issues and Observations

*Record all issues, deviations, and observations encountered during the test. Each item must be tracked to closure.*

| Issue ID | Asset Affected | Issue Description | Severity | Impact on RTO/RPO | Remediation Action | Responsible Owner | Target Closure Date | Status |
|---|---|---|---|---|---|---|---|---|
| [ISSUE-001] | [Asset ID / Name] | [Description of issue encountered] | [Critical / High / Medium / Low] | [RTO impacted by X mins / RPO unaffected] | [Corrective action to be taken] | [Name / Role] | [YYYY-MM-DD] | [Open / Closed] |
| [ISSUE-002] | [Asset ID / Name] | [Description of issue encountered] | [Critical / High / Medium / Low] | [Impact description] | [Corrective action] | [Name / Role] | [YYYY-MM-DD] | [Open / Closed] |

---

## 6. Last Review Date

*Record when this validation record and the underlying DR plans were last formally reviewed and updated.*

### 6.1 Review History

| Review Date | Review Type | Reviewed By | Findings Summary | Action Taken | Next Scheduled Review |
|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Post-Test Review / Periodic Quarterly Review / Post-Incident Review] | [Name / Role] | [Summary of findings] | [Actions taken or deferred] | [YYYY-MM-DD] |
| [YYYY-MM-DD] | [Review Type] | [Name / Role] | [Summary of findings] | [Actions taken or deferred] | [YYYY-MM-DD] |

### 6.2 DR Plan Currency

| Asset ID | System Name | DR Plan Document ID | DR Plan Version | Last DR Plan Update Date | Change Summary |
|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [DR-PLAN-001] | [v1.x] | [YYYY-MM-DD] | [e.g., Updated failover procedures for new DR site configuration] |
| [ASSET-002] | [System Name] | [DR-PLAN-002] | [v1.x] | [YYYY-MM-DD] | [Change description] |

### 6.3 Review Schedule

| Review Trigger | Frequency / Condition | Next Due Date |
|---|---|---|
| Periodic Scheduled Review | Quarterly | [YYYY-MM-DD] |
| Post-DR Test Review | Per event, within 10 business days of test completion | [YYYY-MM-DD] |
| Post-Incident Review | Following any production incident invoking DR procedures | Upon trigger |
| Material Change Review | Following significant infrastructure, system, or business change | Upon trigger |
| Annual Full DR Exercise | Annually, at minimum per RMiT Clause 10.33 | [YYYY-MM-DD] |

---

## 7. Roles and Responsibilities

*This RACI matrix defines accountability for all activities related to RTO/RPO validation.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Relevant Department Head | Business Continuity Manager | IT Operations / Infrastructure | IT Security | System Business Owner | Internal Audit | Risk Management | Senior Management |
|---|---|---|---|---|---|---|---|---|
| Define RTO/RPO targets | C | R | C | C | A | I | C | A |
| Develop and maintain DR test plan | C | A | R | C | C | I | C | I |
| Schedule and coordinate DR test | A | R | C | I | C | I | I | I |
| Execute technical DR procedures | I | C | R | C | I | I | I | I |
| Validate business process recoverability | A | R | I | I | C | I | I | I |
| Document test results and outcomes | C | A | R | C | I | I | I | I |
| Review and sign off validation records | A | C | C | C | C | I | C | I |
| Track and remediate identified issues | A | R | R | C | C | I | C | I |
| Report results to Senior Management | C | R | I | I | I | I | C | A |
| Archive validation records | C | R | C | I | I | I | I | I |
| Periodic review of DR plan currency | A | R | C | C | C | I | C | I |
| Report to regulator (BNM) if required | A | C | I | I | I | I | C | R |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Role | Changes |
|---|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | [Role] | Initial document created |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Role] | [Description of changes] |
| [2.0] | [YYYY-MM-DD] | [Author Name] | [Role] | [Description of major revision] |

### 8.2 Approval Sign-Off

*This record is considered complete and approved only upon signature by all required approvers below.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Relevant Department Head** | [Full Name] | _________________________ | [YYYY-MM-DD] |
| **Business Continuity Manager** | [Full Name] | _________________________ | [YYYY-MM-DD] |
| **Chief Information Officer / Head of IT** | [Full Name] | _________________________ | [YYYY-MM-DD] |
| **Chief Risk Officer / Risk Manager** | [Full Name] | _________________________ | [YYYY-MM-DD] |
| **Independent Observer / Internal Auditor** | [Full Name] | _________________________ | [YYYY-MM-DD] |

---

## 9. References

*This document addresses the following regulatory requirements and internal policy references.*

| Reference | Document / Clause | Description |
|---|---|---|
| **BNM RMiT** | Clause 10.33 | Requires financial institutions to periodically test DR capabilities and validate that RTO and RPO targets are achievable. DR tests must be conducted at least annually for critical systems, with results documented and reviewed by senior management. |
| **BNM RMiT** | Clause 10.30 – 10.32 | Broader DR planning requirements establishing the framework within which RTO/RPO targets are defined, documented, and maintained. |
| **BNM RMiT** | Clause 10.1 – 10.5 | Technology risk governance requirements underpinning accountability structures referenced in this record. |
| **ISO/IEC 27031:2011** | Section 8 | Guidelines for ICT readiness for business continuity, informing DR test methodology and evidence standards. |
| **[Organization Name] IT Asset Classification Policy** | [Policy ID] | Defines criticality tiers referenced in Section 3 of this record. |
| **[Organization Name] Business Continuity Policy** | [Policy ID] | Establishes the BCP/DR governance framework within which this record operates. |
| **[Organization Name] DR Master Plan** | [Document ID] | Parent document defining DR strategies, RTO/RPO targets, and test requirements for all critical systems. |
| **[Organization Name] IT Risk Register** | [Document ID] | Risk register entries for DR-related risks updated following each validation exercise. |

---

## 10. Appendices

### Appendix A – DR Test Checklist

*Attach the completed DR test execution checklist used during this test event. The checklist must cover all pre-test, during-test, and post-test validation steps.*

> **[ATTACHMENT: DR Test Execution Checklist – [TEST-YYYY-MM-NNN]]**
> *File reference: [Filename / Document Management System Path]*

### Appendix B – Test Evidence and Screenshots

*Attach timestamped evidence demonstrating actual recovery times and recovery point achieved for each system under test. Evidence must include system monitoring logs, database recovery logs, and application availability confirmations.*

> **[ATTACHMENT: Test Evidence Package – [TEST-YYYY-MM-NNN]]**
> *File reference: [Filename / Document Management System Path]*

### Appendix C – RTO/RPO Target Register (Baseline)

*Attach or cross-reference the current approved RTO/RPO target register showing pre-approved targets against which actual results in Section 5 were measured.*

> **[ATTACHMENT: Approved RTO/RPO Target Register – Version [x.x], dated [YYYY-MM-DD]]**
> *File reference: [Filename / Document Management System Path]*

### Appendix D – Issue and Corrective Action Log

*If issues were identified during testing (Section 5.3), attach the full corrective action plan with ownership, milestones, and closure evidence.*

> **[ATTACHMENT: Corrective Action Plan – [CAP-YYYY-NNN]]**
> *File reference: [Filename / Document Management System Path]*

### Appendix E – Management Reporting Summary

*Attach the executive summary or board/senior management report derived from this validation record, confirming that DR test outcomes were escalated per BNM RMiT governance requirements.*

> **[ATTACHMENT: DR Test Management Summary – [TEST-YYYY-MM-NNN]]**
> *File reference: [Filename / Document Management System Path]*

---

*This document is classified as **Confidential**. It must be handled, stored, and transmitted in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: [Relevant Department Head] | [Organization Name]*