# Change Log — Production Changes Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Prepared By** | [Prepared By] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |
| **Organization** | [Organization Name] |
| **Department** | Technology Risk Management |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be disclosed to unauthorised parties. Distribution is restricted to individuals with a legitimate business need. Any reproduction, transmission, or use of this document outside its intended purpose must be authorised by the Head of Technology Risk.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Change Log Framework](#3-change-log-framework)
4. [Asset and Item Identification](#4-asset-and-item-identification)
5. [Classification and Categorisation of Changes](#5-classification-and-categorisation-of-changes)
6. [Owner and Custodian Register](#6-owner-and-custodian-register)
7. [Status and Lifecycle Stage](#7-status-and-lifecycle-stage)
8. [Last Review Date and Review Tracking](#8-last-review-date-and-review-tracking)
9. [Production Change Log — Master Register](#9-production-change-log--master-register)
10. [Risk Assessment Records](#10-risk-assessment-records)
11. [Change Approval and Authorisation Records](#11-change-approval-and-authorisation-records)
12. [Emergency and Expedited Change Records](#12-emergency-and-expedited-change-records)
13. [Post-Implementation Review Records](#13-post-implementation-review-records)
14. [Roles and Responsibilities](#14-roles-and-responsibilities)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section defines the purpose of this document and the regulatory obligations it fulfils. Authors should articulate how this Change Log supports the organisation's technology risk management posture.*

This Change Log serves as the authoritative record of all production changes undertaken by [Organization Name] across its technology environment. It captures the complete lifecycle of each change — from initial request and risk assessment through to approval, implementation, and post-implementation review — ensuring full traceability and accountability in accordance with the requirements of Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.10**.

The Change Log is a mandatory compliance artifact that demonstrates [Organization Name]'s adherence to disciplined change management practices, supports audit and examination activities by BNM and internal/external auditors, and provides an evidentiary record of governance controls applied to technology changes.

This document supports the following organisational objectives:

- Maintain a complete and accurate record of all technology changes in production environments.
- Ensure that all changes are subject to appropriate risk assessment, approval, and oversight.
- Provide an auditable trail for regulatory examinations, internal audits, and post-incident investigations.
- Enable continuous monitoring of change activity and quarterly aggregated review by senior management.
- Support the identification of unauthorised or failed changes and drive corrective action.

### 1.2 Scope

*This section defines the boundaries of what is covered by this Change Log. Authors should specify which systems, environments, and change types are in scope.*

This Change Log applies to **all production changes** affecting the following categories of technology assets within [Organization Name]:

**In Scope:**

- Core banking systems and payment processing platforms
- Internet banking and mobile banking applications
- Treasury and capital markets systems
- Regulatory reporting systems
- Data warehouses and business intelligence platforms
- Network infrastructure (routers, switches, firewalls, load balancers)
- Server and compute infrastructure (physical and virtual)
- Cloud service configurations and deployments
- Security systems (SIEM, DLP, IAM, PAM, endpoint protection)
- Middleware and integration platforms
- Databases and data management systems
- Third-party and vendor-managed systems where [Organization Name] retains responsibility
- Outsourced technology services as defined in applicable Outsourcing Agreements

**Out of Scope:**

- Changes restricted to non-production environments (development, UAT, staging) — unless those changes have a direct dependency on production
- Routine batch processing or scheduled automated jobs that do not alter system configuration or code
- Minor cosmetic or content updates to non-regulated systems as defined in the **Change Management Policy [Policy ID]**

**Applicable Environments:**

| Environment Label | Description |
|---|---|
| PROD | Live production environment serving customers and regulatory obligations |
| DR | Disaster Recovery environment — changes tracked when actively serving as primary |
| PROD-EXT | External/partner-facing production integrations |

### 1.3 Document Objectives

*List the specific outcomes this document is designed to achieve.*

- Provide regulators, auditors, and senior management with a single source of truth for all production changes.
- Demonstrate compliance with BNM RMiT Clause 10.10 requirements for change management governance.
- Enable trend analysis of change volumes, risk profiles, and change-related incidents.
- Support forensic investigation and root cause analysis following technology incidents.
- Evidence the effectiveness of change advisory board (CAB) and approval processes.

---

## 2. Regulatory Context

### 2.1 Applicable Regulatory Framework

*This section situates the Change Log within the relevant regulatory and policy landscape. Authors should update this section when new regulatory guidance is issued.*

[Organization Name] is subject to the following regulatory frameworks that mandate or inform the maintenance of this Change Log:

| Regulatory Instrument | Issuing Authority | Relevant Clauses | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 10.10 | Mandatory |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Communications and Digital | Sections 9–11 (Security) | Applicable where changes affect personal data processing |
| National Cyber Security Policy (NCSP) | NACSA / MOSTI | Security baseline controls | Applicable |
| Financial Services Act 2013 (FSA) | BNM | Section 57 (Risk Management) | Applicable |
| Islamic Financial Services Act 2013 (IFSA) | BNM | Section 57 (Risk Management) | Applicable where applicable |
| Payment Systems Act 2003 | BNM | Operational risk provisions | Applicable |
| [Internal Policy Reference] | [Organization Name] | Change Management Policy | Mandatory |

### 2.2 BNM RMiT Clause 10.10 — Summary of Requirements

*Provide a concise summary of what BNM RMiT Clause 10.10 specifically requires of the organisation with respect to change management. Authors should reference the current version of the RMiT policy document.*

BNM RMiT Clause 10.10 requires financial institutions to establish and maintain a **robust change management framework** that governs all changes to technology systems in production. The key requirements under Clause 10.10 include:

- **Formal change request and authorisation process**: All changes must be initiated through a formal request and subjected to documented authorisation prior to implementation.
- **Risk assessment**: Each change must be accompanied by an assessment of the risks introduced, including operational, security, and business continuity impacts.
- **Testing requirements**: Changes must be tested in an environment representative of production prior to deployment.
- **Rollback planning**: Every change must include a documented rollback or back-out plan in the event of implementation failure.
- **Emergency change provisions**: The institution must define and apply a documented process for emergency changes that maintains oversight while enabling rapid response.
- **Post-implementation review (PIR)**: Changes must be reviewed after implementation to confirm successful completion and identify any unintended consequences.
- **Audit trail**: A complete audit trail of all change activity — including approvals, implementation evidence, and PIR outcomes — must be maintained and made available for examination.
- **Segregation of duties**: Personnel who implement changes must not be the same individuals who authorise them, except where formally documented dispensations apply.

### 2.3 Relationship to Other Compliance Artifacts

*Describe how this Change Log interacts with other RMiT compliance documentation maintained by [Organization Name].*

This Change Log is a component of the broader technology risk management documentation suite maintained by [Organization Name]. It interfaces with and draws from the following related artifacts:

| Related Artifact | Document ID | Relationship |
|---|---|---|
| Technology Asset Register | [Doc ID] | Change records reference assets from the Asset Register |
| Risk Register | [Doc ID] | Change risk assessments feed into the enterprise Risk Register |
| Incident Register | [Doc ID] | Change-related incidents are cross-referenced with the Incident Register |
| Business Continuity Plan | [Doc ID] | Rollback plans align with BCP recovery procedures |
| Vendor Management Register | [Doc ID] | Third-party changes are tracked against the Vendor Register |
| Change Management Policy | [Policy ID] | This log operationalises the policy's requirements |
| IT Security Policy | [Policy ID] | Change records must comply with security baseline requirements |
| CAB Meeting Minutes | [Doc ID] | CAB approvals are documented in CAB minutes and referenced here |

---

## 3. Change Log Framework

### 3.1 Change Management Governance Structure

*Describe the governance bodies and structures that oversee the change management process. Authors should update this section to reflect [Organization Name]'s current governance structure.*

[Organization Name] operates a **three-tiered change management governance structure** designed to provide appropriate oversight commensurate with the risk and impact of each change:

**Tier 1 — Standard Change Advisory Board (CAB)**

- Convenes: [Weekly / Bi-weekly — specify frequency]
- Membership: Head of Technology Risk, IT Operations Manager, Information Security Officer, Business Relationship Managers, Application Owners (as required)
- Authority: Approves standard and normal changes up to [Risk Level Threshold]
- Quorum: [Define quorum requirements]

**Tier 2 — Senior Change Advisory Board (SCAB)**

- Convenes: [Monthly / As required — specify frequency]
- Membership: Chief Technology Officer, Chief Risk Officer, Head of Technology Risk, Head of Cybersecurity, Business Unit Heads (as required)
- Authority: Approves major and high-risk changes, changes to critical systems, and changes with significant customer impact
- Quorum: [Define quorum requirements]

**Tier 3 — Emergency Change Authority (ECA)**

- Convenes: On-demand for emergency changes outside business hours
- Membership: [Define on-call authority — e.g., IT Operations Manager + one Senior Manager]
- Authority: Approves emergency changes with post-implementation SCAB ratification within [24/48] hours
- Constraints: Emergency change authority is logged and subject to mandatory PIR

### 3.2 Change Categories and Approval Thresholds

*Define the change categories used by [Organization Name] and the corresponding approval requirements. Align these with the Change Management Policy.*

| Change Category | Definition | Risk Level | Approval Authority | CAB Required | Testing Requirement |
|---|---|---|---|---|---|
| **Standard** | Pre-approved, low-risk, frequently repeated changes following a tested template | Low | IT Operations Manager | No (pre-approved) | Template validation only |
| **Normal — Minor** | Routine planned changes with limited scope and well-understood risk | Low–Medium | CAB (Tier 1) | Yes | UAT or equivalent |
| **Normal — Major** | Planned changes with significant scope, system-wide impact, or dependencies | Medium–High | SCAB (Tier 2) | Yes | Full regression + UAT |
| **Emergency** | Unplanned changes required to resolve a production incident or critical vulnerability | High | ECA (Tier 3) + ratification | Post-implementation CAB | Expedited testing or waived with documentation |
| **Release** | Scheduled software releases combining multiple changes | Medium–Very High | SCAB (Tier 2) | Yes | Full test cycle including SIT/UAT |

### 3.3 Change Request Numbering Convention

*Define the change request numbering convention used by [Organization Name] to uniquely identify each change record.*

All change records maintained in this log are assigned a unique Change Request ID following the format:

**`CHG-[YYYY]-[NNNNNN]`**

Where:

- `CHG` — Fixed prefix identifying this as a Change Request
- `[YYYY]` — Four-digit calendar year in which the change was initiated
- `[NNNNNN]` — Six-digit sequential number, reset annually

**Example:** `CHG-2025-000142`

Emergency changes are additionally prefixed with `EMG-` in the summary register to enable rapid filtering:

**Example:** `EMG-CHG-2025-000143`

---

## 4. Asset and Item Identification

### 4.1 Overview

*This section records the identification details for technology assets that are subjects of production changes. Each change record must reference one or more assets from the Technology Asset Register. Guidance: Authors should ensure that all referenced assets have a corresponding entry in the Technology Asset Register [Doc ID] and that Asset IDs are consistent between documents.*

Every change logged in this register must be linked to at least one uniquely identified technology asset or configuration item. Asset identification ensures complete traceability between changes and the systems they affect, enabling impact analysis, incident investigation, and regulatory reporting.

### 4.2 Asset Identification Requirements

*For each change record, the following asset identification fields must be populated.*

The following data elements are mandatory for asset identification in each change record:

| Field | Description | Format / Example |
|---|---|---|
| **Asset ID** | Unique identifier from the Technology Asset Register | `AST-[YYYY]-[NNNNNN]` |
| **Asset Name** | Common name of the system or component | `Core Banking System — Deposits Module` |
| **Asset Type** | Category of technology asset | Application / Infrastructure / Network / Database / Security / Cloud |
| **Asset Sub-Type** | Specific sub-category | e.g., Web Application, Firewall, Relational Database |
| **Business Domain** | Business function supported by the asset | Retail Banking / Treasury / Payments / Corporate Banking / Shared Services |
| **Hosting Environment** | Where the asset is hosted | On-premises / Private Cloud / Public Cloud (specify provider) / Hybrid |
| **Asset Criticality** | Criticality tier as defined in the Asset Register | Critical / High / Medium / Low |
| **Regulatory Classification** | Whether asset is subject to specific regulatory requirements | Licensed / Non-Licensed; PII / Non-PII; Payment System / Non-Payment |

### 4.3 Asset Identification Reference Table

*This table provides a summary reference of assets most frequently subject to production changes. It is not exhaustive — refer to the Technology Asset Register for the complete asset inventory.*

| Asset ID | Asset Name | Asset Type | Business Domain | Criticality | Regulatory Classification |
|---|---|---|---|---|---|
| [AST-ID] | [Asset Name] | [Type] | [Domain] | [Criticality] | [Classification] |
| [AST-ID] | [Asset Name] | [Type] | [Domain] | [Criticality] | [Classification] |
| [AST-ID] | [Asset Name] | [Type] | [Domain] | [Criticality] | [Classification] |
| [AST-ID] | [Asset Name] | [Type] | [Domain] | [Criticality] | [Classification] |
| [AST-ID] | [Asset Name] | [Type] | [Domain] | [Criticality] | [Classification] |

> *Add additional rows as required. This table should be reviewed and updated quarterly in alignment with the Technology Asset Register.*

### 4.4 Configuration Item (CI) Identification

*For changes affecting specific configuration items (CIs) within a broader system, the CI details should be recorded here.*

Where a change affects a specific configuration item (CI) rather than an entire asset, the CI must be identified using the following fields:

| Field | Description | Example |
|---|---|---|
| **CI ID** | Unique Configuration Item identifier from the CMDB | `CI-APP-00421` |
| **CI Name** | Descriptive name of the configuration item | `Payment Gateway API — Version 3.2` |
| **CI Type** | Type of configuration item | Module / Service / Component / Interface / Database Schema |
| **Parent Asset ID** | Asset ID of the parent system | `AST-2025-000031` |
| **CMDB Last Verified** | Date CMDB record was last confirmed accurate | `[DD Month YYYY]` |

---

## 5. Classification and Categorisation of Changes

### 5.1 Overview

*This section defines the classification and categorisation framework applied to all production changes. Authors should ensure that classifications are applied consistently and are reviewed as part of the CAB process. Classification determines the approval pathway, testing requirements, and documentation obligations.*

All production changes must be classified along three dimensions: **change type**, **risk level**, and **business impact**. This multi-dimensional classification ensures that governance controls are proportionate to the risk and complexity of each change.

### 5.2 Change Type Classification

*Record the change type for each change in the Master Register (Section 9). The definitions below should guide classification decisions.*

| Change Type Code | Change Type | Definition |
|---|---|---|
| **STD** | Standard | Pre-approved, repeatable change following an approved standard template |
| **NRM-MIN** | Normal — Minor | Planned change with limited scope and low-to-medium risk |
| **NRM-MAJ** | Normal — Major | Planned change with significant scope or system-wide dependencies |
| **EMG** | Emergency | Unplanned change required to address a production incident or critical security vulnerability |
| **REL** | Release | Bundled software or infrastructure release incorporating multiple changes |
| **PROJ** | Project | Change associated with a formally governed technology project |

### 5.3 Risk Level Classification

*Risk level must be assigned following completion of the risk assessment in Section 10. The risk matrix below provides guidance on risk level assignment.*

**Risk Matrix:**

| Likelihood \ Impact | Negligible | Minor | Moderate | Major | Critical |
|---|---|---|---|---|---|
| **Almost Certain** | Medium | High | High | Very High | Very High |
| **Likely** | Low | Medium | High | High | Very High |
| **Possible** | Low | Medium | Medium | High | High |
| **Unlikely** | Low | Low | Medium | Medium | High |
| **Rare** | Low | Low | Low | Medium | Medium |

**Risk Level Definitions:**

| Risk Level | Code | Description | Required Action |
|---|---|---|---|
| Very High | VH | Change poses a critical risk to operations, customers, or regulatory compliance | SCAB approval mandatory; CTO notification required; BCP team engaged |
| High | H | Change poses significant risk requiring senior oversight | SCAB approval required; formal PIR mandatory |
| Medium | M | Change poses moderate risk with manageable mitigations | CAB (Tier 1) approval; PIR recommended |
| Low | L | Change poses minimal risk with well-understood impact | Standard approval process; PIR at implementer discretion |

### 5.4 Business Impact Classification

*Business impact must be assessed independently of technical risk. Both dimensions inform the approval pathway.*

| Impact Level | Code | Definition | Customer Facing? | Regulatory Notification? |
|---|---|---|---|---|
| Critical | BIC | Service unavailability or degradation affecting all or majority of customers; regulatory reporting systems affected | Yes | Yes — notify BNM within [X hours] |
| Significant | BIS | Partial service degradation or data integrity risk affecting a segment of customers | Yes | Assess per incident |
| Moderate | BIM | Limited impact on internal operations; no direct customer impact | No | No |
| Minor | BIN | Negligible business impact; change is isolated to non-customer-facing components | No | No |

### 5.5 Change Classification by System Criticality

*The criticality of the affected asset influences the minimum classification assigned to a change, regardless of the inherent risk of the change itself.*

| Asset Criticality | Minimum Change Risk Classification | Minimum CAB Level |
|---|---|---|
| Critical | Medium (M) | CAB Tier 1 or above |
| High | Low (L) | CAB Tier 1 or above |
| Medium | Low (L) | IT Operations Manager |
| Low | Low (L) | Team Lead authorisation |

---

## 6. Owner and Custodian Register

### 6.1 Overview

*This section defines the ownership and custodianship framework for changes and the assets they affect. Authors must ensure that all change records contain clearly identified owners and custodians. Ownership accountability is a key control assessed during regulatory examinations.*

[Organization Name] applies a **two-tier accountability model** for all production changes:

- **Change Owner**: The individual or role accountable for the business and risk outcomes of the change. Typically the Business System Owner or Application Owner of the affected asset.
- **Change Implementer / Custodian**: The individual or team technically responsible for executing the change in accordance with the approved change plan.

### 6.2 Change Owner Responsibilities

*The Change Owner is accountable for the following throughout the change lifecycle.*

The Change Owner is responsible for:

- Initiating or endorsing the change request.
- Ensuring the business case and justification for the change are complete and accurate.
- Confirming that the change has been tested adequately in non-production environments.
- Approving the go-live decision for the change (where applicable within their authority).
- Reviewing and accepting the post-implementation review (PIR) outcomes.
- Escalating change-related issues to the appropriate governance body.

### 6.3 Change Custodian / Implementer Responsibilities

*The Change Custodian / Implementer is responsible for the following.*

The Change Custodian / Implementer is responsible for:

- Preparing the detailed change plan, including implementation steps, rollback procedures, and testing evidence.
- Executing the change in strict accordance with the approved change plan.
- Documenting implementation evidence (screenshots, logs, execution timestamps) and attaching these to the change record.
- Notifying the Change Owner and CAB upon completion or failure of the change.
- Initiating rollback procedures if implementation criteria are not met.
- Completing the PIR within the defined timeframe.

### 6.4 Ownership Register

*This table records the designated owners and custodians for assets most frequently subject to change. Authors should update this register when ownership changes occur and ensure alignment with the Technology Asset Register.*

| Asset ID | Asset Name | Business Owner | System / Application Owner | Technical Custodian | Backup Custodian | Last Updated |
|---|---|---|---|---|---|---|
| [AST-ID] | [Asset Name] | [Business Owner Name / Role] | [App Owner Name / Role] | [Custodian Name / Role] | [Backup Name / Role] | [DD Mon YYYY] |
| [AST-ID] | [Asset Name] | [Business Owner Name / Role] | [App Owner Name / Role] | [Custodian Name / Role] | [Backup Name / Role] | [DD Mon YYYY] |
| [AST-ID] | [Asset Name] | [Business Owner Name / Role] | [App Owner Name / Role] | [Custodian Name / Role] | [Backup Name / Role] | [DD Mon YYYY] |
| [AST-ID] | [Asset Name] | [Business Owner Name / Role] | [App Owner Name / Role] | [Custodian Name / Role] | [Backup Name / Role] | [DD Mon YYYY] |
| [AST-ID] | [Asset Name] | [Business Owner Name / Role] | [App Owner Name / Role] | [Custodian Name / Role] | [Backup Name / Role] | [DD Mon YYYY] |

> *This is a summary reference table. The Technology Asset Register [Doc ID] is the authoritative source for ownership records.*

### 6.5 Segregation of Duties Matrix

*This matrix confirms that segregation of duties requirements are enforced in the change management process. Authors should update this matrix if organisational structure changes.*

| Control Point | Restriction | Compensating Control (if applicable) |
|---|---|---|
| Change Requester ≠ Change Approver | A person who raises a change request may not be the approving authority for that same change | [Define compensating control for small teams] |
| Change Developer ≠ Change Implementer | The developer who codes a change may not be the sole person implementing it in production | Peer review and dual-person access controls |
| Change Implementer ≠ PIR Approver | The person who implements a change may not be the sole reviewer of the PIR | PIR must be reviewed by Change Owner or CAB |
| Emergency Change ≠ Self-Authorised | Emergency changes must be authorised by a person other than the implementer | Emergency Change Authority (ECA) on-call roster |

---

## 7. Status and Lifecycle Stage

### 7.1 Overview

*This section defines the status and lifecycle stage framework applied to all change records. Authors must ensure that each change record reflects the current status at all times, and that status transitions are timestamped and attributed to the responsible individual.*

All change records maintained in this log progress through a defined lifecycle from initiation to closure. The lifecycle stage of each change is recorded in the Master Change Register (Section 9) and must be updated at each transition point.

### 7.2 Change Lifecycle Stages

*The following lifecycle stages apply to all change types. Emergency changes may compress or bypass certain stages — see Section 12 for emergency change lifecycle.*

```
[DRAFT] → [SUBMITTED] → [UNDER REVIEW] → [APPROVED] → [SCHEDULED] → [IMPLEMENTING] → [PIR PENDING] → [CLOSED]
                                                                                            ↓
                                                                                        [ROLLED BACK] → [UNDER REVIEW]
                                                                                            ↓
                                                                                        [CANCELLED]
```

| Status Code | Status Label | Description | Who Updates |
|---|---|---|---|
| **DRAFT** | Draft | Change request is being prepared by the requestor; not yet submitted for review | Change Requestor |
| **SUBMITTED** | Submitted | Change request has been submitted and is awaiting CAB scheduling | Change Requestor / Change Management Team |
| **UNDER REVIEW** | Under Review | CAB is actively reviewing the change request; additional information may be requested | CAB Chair |
| **APPROVED** | Approved | Change has been formally approved by the appropriate authority; awaiting scheduling | CAB / Approving Authority |
| **REJECTED** | Rejected | Change has been rejected by the approving authority; must be revised and resubmitted | CAB Chair |
| **DEFERRED** | Deferred | Change approval has been deferred pending additional information or conditions | CAB Chair |
| **SCHEDULED** | Scheduled | Change has been approved and an implementation window has been allocated | Change Management Team |
| **IMPLEMENTING** | Implementing | Change is actively being implemented in the production environment | Change Implementer |
| **PIR PENDING** | PIR Pending | Implementation is complete; post-implementation review has not yet been conducted | Change Implementer |
| **CLOSED** | Closed | Post-implementation review is complete; change record is closed with all evidence attached | Change Owner / CAB |
| **ROLLED BACK** | Rolled Back | Implementation was unsuccessful; rollback procedure has been executed | Change Implementer |
| **CANCELLED** | Cancelled | Change was cancelled prior to implementation; cancellation reason documented | Change Owner |
| **FAILED** | Failed | Change implementation was unsuccessful and rollback was also unsuccessful | Change Implementer — immediate escalation required |

### 7.3 Status Transition Rules

*The following rules govern valid status transitions. Invalid transitions must not occur without formal exception documentation.*

| From Status | Valid Transitions | Restriction |
|---|---|---|
| DRAFT | SUBMITTED, CANCELLED | — |
| SUBMITTED | UNDER REVIEW, CANCELLED | — |
| UNDER REVIEW | APPROVED, REJECTED, DEFERRED, CANCELLED | — |
| APPROVED | SCHEDULED, CANCELLED | — |
| DEFERRED | UNDER REVIEW, CANCELLED | Requires re-submission with additional information |
| SCHEDULED | IMPLEMENTING, CANCELLED | Cancellation at this stage requires CAB notification |
| IMPLEMENTING | PIR PENDING, ROLLED BACK, FAILED | — |
| PIR PENDING | CLOSED | PIR must be completed within [X] business days |
| ROLLED BACK | UNDER REVIEW, CANCELLED | Rolled-back changes require root cause analysis before re-approval |
| FAILED | Mandatory escalation | Head of Technology Risk and CTO must be notified immediately |

### 7.4 Overdue Change Tracking

*Changes that remain in a status beyond the defined timeframe are flagged as overdue and subject to escalation.*

| Status | Maximum Duration | Escalation Action |
|---|---|---|
| SUBMITTED | [5] business days | Escalate to CAB Chair |
| UNDER REVIEW | [3] CAB cycles | Escalate to SCAB |
| APPROVED (awaiting scheduling) | [30] calendar days | Re-validate risk assessment; re-present to CAB |
| PIR PENDING | [5] business days | Escalate to Change Owner |
| ROLLED BACK (awaiting re-review) | [10] business days | Escalate to Head of Technology Risk |

---

## 8. Last Review Date and Review Tracking

### 8.1 Overview

*This section documents the review schedule and tracking requirements for this Change Log document and for individual change records within it. Authors must update the review tracking table following each scheduled review.*

This Change Log is subject to **two distinct review obligations**:

1. **Continuous monitoring**: Change records are reviewed at each CAB session (weekly/bi-weekly) as they are submitted, approved, and closed.
2. **Quarterly aggregated review**: The Head of Technology Risk conducts a formal quarterly review of this document, assessing completeness, accuracy, and trend data across all change activity.

### 8.2 Document-Level Review Schedule

*Record each formal review of this document in the table below. This provides evidence of ongoing oversight for regulatory purposes.*

| Review No. | Review Date | Reviewer Name | Reviewer Role | Review Type | Findings Summary | Next Review Due |
|---|---|---|---|---|---|---|
| 001 | [DD Month YYYY] | [Reviewer Name] | Head of Technology Risk | Quarterly | [Summary or "No material findings"] | [DD Month YYYY] |
| 002 | [DD Month YYYY] | [Reviewer Name] | [Role] | [Type] | [Summary] | [DD Month YYYY] |
| 003 | [DD Month YYYY] | [Reviewer Name] | [Role] | [Type] | [Summary] | [DD Month YYYY] |
| 004 | [DD Month YYYY] | [Reviewer Name] | [Role] | [Type] | [Summary] | [DD Month YYYY] |

### 8.3 Change Record Review Requirements

*Individual change records within the Master Register are subject to the following review requirements.*

| Review Type | Frequency | Reviewer | Purpose |
|---|---|---|---|
| CAB In-Session Review | Each CAB meeting | CAB Members | Review pending, in-progress, and recently completed changes |
| PIR Review | Within [5] business days of implementation | Change Owner + CAB | Validate successful implementation and close change record |
| Emergency Change Ratification | Within [24–48] hours of emergency implementation | SCAB | Formally ratify emergency changes post-implementation |
| Quarterly Trend Review | Quarterly | Head of Technology Risk | Assess change volume, risk profile trends, and failed/rolled-back changes |
| Annual Compliance Review | Annually | Technology Risk + Internal Audit | Verify completeness and accuracy against RMiT requirements |

### 8.4 Outstanding Review Actions

*This table tracks review actions that have been identified but not yet resolved. Authors should update this table at each quarterly review.*

| Action ID | Source Review | Date Identified | Action Description | Responsible Party | Due Date | Status |
|---|---|---|---|---|---|---|
| ACT-001 | [Quarterly Review Q[X] YYYY] | [DD Mon YYYY] | [Description of action required] | [Name / Role] | [DD Mon YYYY] | [Open / Closed / Overdue] |
| ACT-002 | [Review Reference] | [DD Mon YYYY] | [Description] | [Name / Role] | [DD Mon YYYY] | [Status] |
| ACT-003 | [Review Reference] | [DD Mon YYYY] | [Description] | [Name / Role] | [DD Mon YYYY] | [Status] |

---

## 9. Production Change Log — Master Register

### 9.1 Overview

*This is the core operational section of this document. The Master Register is the authoritative log of all production changes. Authors (Change Management team) must create a new record for every change at the point of submission. Each field must be populated in accordance with the data definitions in Appendix A.*

The Master Change Register below provides a summary view of all production changes. Full detail records for each change are maintained in [Change Management System Name, e.g., ServiceNow / Jira Service Management] and are referenced by Change Request ID.

### 9.2 Master Change Register — Current Quarter

*Populate this table with all change records for the current quarter. Archive prior quarters in accordance with the Records Retention Schedule (Appendix G).*

**Reporting Period:** [Q1/Q2/Q3/Q4] [YYYY] — [Start Date] to [End Date]

| Change ID | Change Title | Change Type | Affected Asset(s) | Asset Criticality | Business Impact | Risk Level | Change Owner | Implementer | Submission Date | CAB Review Date | Approval Date | Implementation Date | Status | PIR Date | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CHG-[YYYY]-000001 | [Change Title] | [Type] | [Asset Name / ID] | [Crit] | [BIC/BIS/BIM/BIN] | [VH/H/M/L] | [Owner] | [Implementer] | [DD Mon] | [DD Mon] | [DD Mon] | [DD Mon] | [Status] | [DD Mon] | [Notes] |
| CHG-[YYYY]-000002 | [Change Title] | [Type] | [Asset Name / ID] | [Crit] | [BIC/BIS/BIM/BIN] | [VH/H/M/L] | [Owner] | [Implementer] | [DD Mon] | [DD Mon] | [DD Mon] | [DD Mon] | [Status] | [DD Mon] | [Notes] |
| CHG-[YYYY]-000003 | [Change Title] | [Type] | [Asset Name / ID] | [Crit] | [BIC/BIS/BIM/BIN] | [VH/H/M/L] | [Owner] | [Implementer] | [DD Mon] | [DD Mon] | [DD Mon] | [DD Mon] | [Status] | [DD Mon] | [Notes] |
| EMG-CHG-[YYYY]-000004 | [Emergency Change Title] | EMG | [Asset Name / ID] | [Crit] | [BIC/BIS/BIM/BIN] | [VH/H/M/L] | [Owner] | [Implementer] | [DD Mon] | Post-impl | [DD Mon] | [DD Mon] | [Status] | [DD Mon] | Emergency |
| CHG-[YYYY]-000005 | [Change Title] | [Type] | [Asset Name / ID] | [Crit] | [BIC/BIS/BIM/BIN] | [VH/H/M/L] | [Owner] | [Implementer] | [DD Mon] | [DD Mon] | [DD Mon] | [DD Mon] | [Status] | [DD Mon] | [Notes] |

> *Continue adding rows for each change. This register must be complete and current at all times. The Change Management team is responsible for maintaining this register.*

### 9.3 Change Volume Summary — Current Quarter

*Complete this summary at the end of each month and at the quarterly review. It provides an executive-level view of change activity.*

| Metric | Month 1 | Month 2 | Month 3 | Quarter Total |
|---|---|---|---|---|
| Total Changes Submitted | [N] | [N] | [N] | [N] |
| Standard Changes | [N] | [N] | [N] | [N] |
| Normal — Minor Changes | [N] | [N] | [N] | [N] |
| Normal — Major Changes | [N] | [N] | [N] | [N] |
| Emergency Changes | [N] | [N] | [N] | [N] |
| Release Changes | [N] | [N] | [N] | [N] |
| Changes Approved | [N] | [N] | [N] | [N] |
| Changes Rejected | [N] | [N] | [N] | [N] |
| Changes Deferred | [N] | [N] | [N] | [N] |
| Changes Cancelled | [N] | [N] | [N] | [N] |
| Changes Rolled Back | [N] | [N] | [N] | [N] |
| Changes Failed | [N] | [N] | [N] | [N] |
| Changes Closed (PIR Complete) | [N] | [N] | [N] | [N] |
| PIR Overdue (> [5] business days) | [N] | [N] | [N] | [N] |
| Unauthorised Changes Detected | [N] | [N] | [N] | [N] |

### 9.4 Change Volume by Asset Criticality

| Asset Criticality | Changes This Quarter | % of Total | Rolled Back | Failed |
|---|---|---|---|---|
| Critical | [N] | [%] | [N] | [N] |
| High | [N] | [%] | [N] | [N] |
| Medium | [N] | [%] | [N] | [N] |
| Low | [N] | [%] | [N] | [N] |
| **Total** | **[N]** | **100%** | **[N]** | **[N]** |

---

## 10. Risk Assessment Records

### 10.1 Overview

*This section provides the framework for risk assessments that must accompany each change request. Authors (Change Requestors and the Technology Risk team) must complete a risk assessment for every change prior to submission to the CAB. Risk assessments for emergency changes may be expedited but must be completed and ratified post-implementation.*

Every production change must be accompanied by a documented risk assessment addressing the four risk dimensions defined in this section. The risk assessment forms part of the permanent change record and must be attached in [Change Management System Name].

### 10.2 Risk Assessment Framework

*The risk assessment must evaluate the change across the following four dimensions.*

**Dimension 1 — Operational Risk**

| Assessment Element | Guidance | Response |
|---|---|---|
| What is the probability of implementation failure? | Consider the complexity of the change, team experience, and historical success rate for similar changes | [Low / Medium / High] — [Rationale] |
| What is the operational impact if the change fails? | Describe impact on service availability, data integrity, and business processes | [Description of impact] |
| Is there a tested rollback plan? | Confirm that rollback steps have been documented and tested in a non-production environment | [Yes / No — with explanation] |
| What is the estimated rollback time? | Provide a realistic estimate of time required to revert if implementation fails | [HH:MM] |
| Are there known dependencies that could be affected? | Identify upstream and downstream systems with potential dependencies | [List dependencies or "None identified"] |

**Dimension 2 — Cybersecurity Risk**

| Assessment Element | Guidance | Response |
|---|---|---|
| Does this change introduce new attack surfaces? | Assess whether new ports, interfaces, APIs, or data flows are created | [Yes / No — with explanation] |
| Does this change affect access controls or IAM? | Identify any modifications to user rights, roles, or access policies | [Yes / No — with explanation] |
| Has a security review been conducted? | Confirm whether the Information Security team reviewed the change | [Yes — reviewer and date / No — with justification] |
| Are cryptographic controls affected? | Assess whether encryption, key management, or certificate configurations are modified | [Yes / No — with explanation] |
| Vulnerability / penetration test required? | For changes introducing new attack surface, specify whether security testing is required | [Yes / Not required — rationale] |

**Dimension 3 — Business Continuity Risk**

| Assessment Element | Guidance | Response |
|---|---|---|
| Does this change affect RTO/RPO for critical systems? | Assess whether the change may degrade recovery time or recovery point capabilities | [Yes / No — with explanation] |
| Is this change being made during a restricted period? | Check the Change Freeze Calendar (Appendix D) for blackout dates | [Within freeze period: Yes / No] |
| Has the BCP / DRP team been notified? | For high and very high risk changes, BCP team notification is mandatory | [Yes — date notified / Not required] |
| Does this change affect DR failover procedures? | Assess impact on disaster recovery runbooks and DR environment | [Yes / No] |

**Dimension 4 — Regulatory and Compliance Risk**

| Assessment Element | Guidance | Response |
|---|---|---|
| Does this change affect regulatory reporting? | Identify any impact on BNM, SC, or other regulatory submissions | [Yes / No — with explanation] |
| Does this change affect personal data processing? | Assess PDPA implications including data flows, storage, and access | [Yes / No — if yes, DPO notification required] |
| Are there audit trail implications? | Assess whether logging and audit trail completeness is maintained post-change | [Yes / No — with explanation] |
| Is BNM notification required? | For changes affecting licensed payment systems or core banking, assess notification obligations | [Yes / No — reference applicable requirement] |

### 10.3 Risk Assessment Summary Register

*This table provides a summary of risk assessments conducted for the current quarter. Full risk assessment details are maintained in [Change Management System Name].*

| Change ID | Change Title | Operational Risk | Cybersecurity Risk | BCP Risk | Compliance Risk | Aggregate Risk Level | Risk Mitigations Applied | Residual Risk | Assessed By | Assessment Date |
|---|---|---|---|---|---|---|---|---|---|---|
| CHG-[YYYY]-000001 | [Title] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [Summary of mitigations] | [L/M/H/VH] | [Name / Role] | [DD Mon YYYY] |
| CHG-[YYYY]-000002 | [Title] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [Summary of mitigations] | [L/M/H/VH] | [Name / Role] | [DD Mon YYYY] |
| CHG-[YYYY]-000003 | [Title] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [L/M/H/VH] | [Summary of mitigations] | [L/M/H/VH] | [Name / Role] | [DD Mon YYYY] |

### 10.4 Residual Risk Acceptance

*High and Very High residual risk changes require formal residual risk acceptance. Record risk acceptance decisions in the table below.*

| Change ID | Residual Risk Level | Risk Acceptance Justification | Accepted By | Role | Acceptance Date | Conditions / Monitoring Required |
|---|---|---|---|---|---|---|
| [CHG-ID] | [H / VH] | [Justification for accepting the residual risk] | [Name] | [Role — must be appropriate authority] | [DD Mon YYYY] | [Any conditions, monitoring, or time-bound acceptance] |
| [CHG-ID] | [H / VH] | [Justification] | [Name] | [Role] | [DD Mon YYYY] | [Conditions] |

---

## 11. Change Approval and Authorisation Records

### 11.1 Overview

*This section documents the formal approval and authorisation records for each production change. Authors must ensure that approval records are complete before any change proceeds to implementation. No change may be implemented without documented authorisation from the appropriate authority.*

All change approvals must be recorded with the name, role, and timestamp of the approving authority. Approvals provided verbally must be confirmed in writing within [24] hours.

### 11.2 CAB Decision Register

*Record all CAB decisions in the table below. Each CAB session must have a corresponding entry referencing the minutes of that session.*

| CAB Session Reference | CAB Date | CAB Type | Changes Reviewed | Changes Approved | Changes Rejected | Changes Deferred | CAB Chair | Minutes Reference |
|---|---|---|---|---|---|---|---|---|
| CAB-[YYYY]-[NN] | [DD Month YYYY] | [Tier 1 / Tier 2 / Emergency] | [N] | [N] | [N] | [N] | [Name / Role] | [Minutes Doc ID] |
| CAB-[YYYY]-[NN] | [DD Month YYYY] | [Tier 1 / Tier 2 / Emergency] | [N] | [N] | [N] | [N] | [Name / Role] | [Minutes Doc ID] |
| CAB-[YYYY]-[NN] | [DD Month YYYY] | [Tier 1 / Tier 2 / Emergency] | [N] | [N] | [N] | [N] | [Name / Role] | [Minutes Doc ID] |

### 11.3 Individual Change Approval Records

*For each change, record the complete approval chain. This table should be populated at the time of approval.*

| Change ID | Change Title | Approval Level Required | Approver Name | Approver Role | Approval Decision | Approval Date and Time | Conditions of Approval | Approval Reference (Minutes / Email / System) |
|---|---|---|---|---|---|---|---|---|
| CHG-[YYYY]-000001 | [Title] | [Tier 1 CAB / Tier 2 SCAB] | [Name] | [Role] | [Approved / Rejected / Deferred] | [DD Mon YYYY HH:MM] | [None / specify conditions] | [Reference] |
| CHG-[YYYY]-000002 | [Title] | [Tier 1 CAB / Tier 2 SCAB] | [Name] | [Role] | [Approved / Rejected / Deferred] | [DD Mon YYYY HH:MM] | [None / specify conditions] | [Reference] |
| CHG-[YYYY]-000003 | [Title] | [Tier 1 CAB / Tier 2 SCAB] | [Name] | [Role] | [Approved / Rejected / Deferred] | [DD Mon YYYY HH:MM] | [None / specify conditions] | [Reference] |
| EMG-CHG-[YYYY]-000004 | [Emergency Title] | Emergency Change Authority | [ECA Name] | [Role] | Approved (Emergency) | [DD Mon YYYY HH:MM] | Post-impl ratification required | [Reference] |

### 11.4 Rejected and Deferred Change Register

*Rejected and deferred changes must be tracked to ensure they are appropriately resolved and do not recur without proper remediation.*

| Change ID | Change Title | Original Submission Date | Decision | Decision Date | Reason for Rejection / Deferral | Action Required | Resubmission Date | Outcome |
|---|---|---|---|---|---|---|---|---|
| CHG-[YYYY]-[NN] | [Title] | [DD Mon YYYY] | [Rejected / Deferred] | [DD Mon YYYY] | [Detailed reason] | [Action required before resubmission] | [DD Mon YYYY] | [Resubmitted / Cancelled / Pending] |
| CHG-[YYYY]-[NN] | [Title] | [DD Mon YYYY] | [Rejected / Deferred] | [DD Mon YYYY] | [Detailed reason] | [Action required] | [DD Mon YYYY] | [Outcome] |

---

## 12. Emergency and Expedited Change Records

### 12.1 Overview

*This section provides dedicated tracking for emergency changes. Emergency changes represent the highest-risk change category and require the most rigorous post-implementation oversight. Authors must ensure that every emergency change has a corresponding ratification record within [24–48] hours of implementation.*

Emergency changes are initiated outside the standard CAB approval cycle in response to critical production incidents or urgent security vulnerabilities. Despite the expedited nature of their approval, emergency changes are subject to **heightened post-implementation scrutiny** to ensure that governance standards are upheld.

### 12.2 Emergency Change Criteria

*A change may only be classified as an emergency if it meets one or more of the following criteria.*

An emergency change must meet at least one of the following triggering conditions:

- Active production incident causing service outage or material degradation to customer-facing services.
- Confirmed exploitation of a critical security vulnerability (CVSS score ≥ [9.0] or as determined by the CISO).
- Regulatory or legal deadline that cannot be met through standard change processes.
- Directive from a regulatory authority (BNM, SC, NACSA) requiring immediate implementation.
- Data integrity breach or risk of material data loss requiring immediate remediation.

**Conditions that do NOT justify an emergency change:**

- Business convenience or preference for faster delivery.
- Inadequate planning or missed deadlines for normal changes.
- Requests from senior management that do not meet the above criteria.

Any use of the emergency change pathway for non-qualifying changes must be reported to the Head of Technology Risk and documented in the Non-Conformance Register.

### 12.3 Emergency Change Register

*All emergency changes must be logged in this register. The log must be updated within [2] hours of the emergency change being initiated.*

| EMG Change ID | Trigger Description | Production Incident ID (if applicable) | CVE / Vulnerability Reference | Emergency Declared By | Declaration Date & Time | ECA Authorised By | ECA Auth Date & Time | Implementer | Implementation Start | Implementation End | Implementation Outcome | Ratification CAB Date | Ratification Decision | PIR Completed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EMG-CHG-[YYYY]-[NN] | [Description of the emergency trigger] | [INC-ID or N/A] | [CVE or N/A] | [Name / Role] | [DD Mon YYYY HH:MM] | [Name / Role] | [DD Mon YYYY HH:MM] | [Name] | [HH:MM DD Mon] | [HH:MM DD Mon] | [Success / Partial / Rolled Back] | [DD Mon YYYY] | [Ratified / Not Ratified] | [Yes / No] |
| EMG-CHG-[YYYY]-[NN] | [Description] | [INC-ID or N/A] | [CVE or N/A] | [Name / Role] | [DD Mon YYYY HH:MM] | [Name / Role] | [DD Mon YYYY HH:MM] | [Name] | [HH:MM DD Mon] | [HH:MM DD Mon] | [Outcome] | [DD Mon YYYY] | [Decision] | [Yes / No] |

### 12.4 Emergency Change Trend Analysis

*Complete this analysis at the quarterly review. A high volume of emergency changes may indicate systemic issues in the change management process or in production stability.*

| Metric | Q1 | Q2 | Q3 | Q4 | Annual Total |
|---|---|---|---|---|---|
| Total Emergency Changes | [N] | [N] | [N] | [N] | [N] |
| Emergency changes — Incident-triggered | [N] | [N] | [N] | [N] | [N] |
| Emergency changes — Security vulnerability | [N] | [N] | [N] | [N] | [N] |
| Emergency changes — Regulatory directive | [N] | [N] | [N] | [N] | [N] |
| Emergency changes resulting in further incidents | [N] | [N] | [N] | [N] | [N] |
| Emergency changes requiring rollback | [N] | [N] | [N] | [N] | [N] |
| Emergency changes not ratified within [48] hours | [N] | [N] | [N] | [N] | [N] |
| Emergency change ratio (EMG / Total changes) | [%] | [%] | [%] | [%] | [%] |

> **Note:** An emergency change ratio exceeding [5%] of total changes requires a root cause analysis and a remediation plan to be presented to the Head of Technology Risk.

---

## 13. Post-Implementation Review Records

### 13.1 Overview

*This section tracks post-implementation reviews (PIRs) for all changes. PIRs are a mandatory control under BNM RMiT Clause 10.10 and evidence that changes have been implemented successfully and that any unintended consequences have been identified and remediated. Authors must complete and close PIR records within [5] business days of implementation for standard changes, and within [2] business days for emergency changes.*

### 13.2 PIR Requirements by Change Type

| Change Type | PIR Mandatory? | PIR Timeframe | PIR Reviewer | PIR Approver |
|---|---|---|---|---|
| Standard | No (unless failure or rollback occurred) | [5] business days if required | Change Implementer | CAB Chair |
| Normal — Minor | Yes | [5] business days | Change Implementer + Change Owner | CAB Chair |
| Normal — Major | Yes | [3] business days | Change Implementer + Change Owner + Technology Risk | Head of Technology Risk |
| Emergency | Yes — mandatory | [2] business days | Change Implementer + Change Owner | SCAB |
| Release | Yes | [5] business days | Release Manager + QA Lead + Change Owner | Head of Technology Risk |

### 13.3 PIR Summary Register

*Record the outcome of each PIR in this summary register. Full PIR documentation is maintained in [Change Management System Name].*

| Change ID | Change Title | Implementation Date | Implementation Outcome | PIR Conducted By | PIR Date | PIR Outcome | Unintended Consequences Identified | Corrective Actions Required | Corrective Action Due | PIR Approved By | PIR Approval Date | Change Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CHG-[YYYY]-000001 | [Title] | [DD Mon YYYY] | [Success / Partial / Failed / Rolled Back] | [Name / Role] | [DD Mon YYYY] | [Satisfactory / Unsatisfactory] | [Yes / No — describe if Yes] | [Yes / No — describe if Yes] | [DD Mon YYYY or N/A] | [Name / Role] | [DD Mon YYYY] | [CLOSED / PIR PENDING] |
| CHG-[YYYY]-000002 | [Title] | [DD Mon YYYY] | [Outcome] | [Name / Role] | [DD Mon YYYY] | [Outcome] | [Yes / No] | [Yes / No] | [Date or N/A] | [Name / Role] | [DD Mon YYYY] | [Status] |
| CHG-[YYYY]-000003 | [Title] | [DD Mon YYYY] | [Outcome] | [Name / Role] | [DD Mon YYYY] | [Outcome] | [Yes / No] | [Yes / No] | [Date or N/A] | [Name / Role] | [DD Mon YYYY] | [Status] |

### 13.4 Change-Related Incidents

*This table tracks incidents that were caused by or associated with production changes. Cross-reference with the Incident Register [Doc ID].*

| Change ID | Incident ID | Incident Title | Incident Severity | Incident Start Date | Root Cause (Change Link) | Incident Resolution Date | Customer Impact? | Regulatory Notification Required? | Lessons Learned Captured? |
|---|---|---|---|---|---|---|---|---|---|
| CHG-[YYYY]-[NN] | INC-[YYYY]-[NN] | [Incident Title] | [P1 / P2 / P3 / P4] | [DD Mon YYYY] | [Description of how change caused incident] | [DD Mon YYYY] | [Yes / No] | [Yes / No] | [Yes / No] |
| CHG-[YYYY]-[NN] | INC-[YYYY]-[NN] | [Incident Title] | [Severity] | [DD Mon YYYY] | [Root cause description] | [DD Mon YYYY] | [Yes / No] | [Yes / No] | [Yes / No] |

---

## 14. Roles and Responsibilities

### 14.1 Overview

*This section defines the roles and responsibilities of all parties involved in the change management process and the maintenance of this Change Log. Authors should update this section when organisational changes affect the parties listed.*

### 14.2 RACI Matrix — Change Management Process

*The RACI matrix below defines Responsible (R), Accountable (A), Consulted (C), and Informed (I) assignments for each key activity in the change management lifecycle.*

| Activity | Change Requestor | Change Implementer | Change Owner | IT Operations Manager | Information Security Officer | Head of Technology Risk | CAB Chair | SCAB Chair | CTO / CIO | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|
| **Change Request Submission** | R | C | A | I | C | I | I | — | — | — |
| **Risk Assessment Completion** | R | C | C | C | C | A | R | — | — | — |
| **CAB (Tier 1) Review and Approval** | I | C | C | R | C | C | A | — | — | — |
| **SCAB (Tier 2) Approval** | I | C | C | C | C | C | C | A | I | — |
| **Emergency Change Authorisation** | I | R | C | A | C | I | — | — | I | — |
| **Change Scheduling** | I | R | A | C | — | I | I | — | — | — |
| **Change Implementation** | — | R | C | C | C | I | I | — | — | — |
| **Implementation Documentation** | — | R | C | — | — | — | I | — | — | — |
| **Rollback Execution (if required)** | — | R | A | C | C | I | I | — | I | — |
| **Post-Implementation Review** | — | R | A | C | C | C | I | — | — | — |
| **Emergency Change Ratification** | I | C | C | C | C | C | C | A | I | — |
| **Quarterly Change Log Review** | — | — | C | C | C | A | C | — | I | C |
| **Unauthorised Change Investigation** | — | C | C | C | C | A | C | — | I | C |
| **Change-Related Incident Reporting** | — | R | A | C | C | C | I | — | I | I |
| **Annual Compliance Review** | — | — | C | C | C | C | — | — | I | A |
| **Change Freeze Management** | I | I | C | R | C | A | C | — | I | — |

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 14.3 Role Descriptions

*This section provides a brief description of each role referenced in the RACI matrix.*

| Role | Description | Current Incumbent |
|---|---|---|
| **Change Requestor** | Any authorised staff member who initiates a change request. Must have appropriate authority to request changes to the relevant system. | Various |
| **Change Implementer** | The technical staff member or team responsible for executing the change in production. Must hold appropriate access permissions and relevant technical competency. | Various |
| **Change Owner** | The Application Owner or Business System Owner of the affected technology asset. Accountable for business outcomes and risk acceptance of the change. | As per Ownership Register (Section 6) |
| **IT Operations Manager** | Responsible for the day-to-day management of IT operations including change scheduling and CAB facilitation. | [Name] |
| **Information Security Officer (ISO/CISO)** | Responsible for reviewing the cybersecurity risk dimension of changes and providing security sign-off for high and very high risk changes. | [Name] |
| **Head of Technology Risk** | Accountable for the change management framework, this Change Log, and quarterly review. Provides risk oversight and escalation management. | [Name] |
| **CAB Chair** | Chairs Tier 1 CAB sessions, facilitates change reviews, and records approval decisions. Typically the IT Operations Manager or delegate. | [Name] |
| **SCAB Chair** | Chairs Tier 2 SCAB sessions for major and high-risk changes. Typically the CTO or Head of Technology Risk. | [Name] |
| **CTO / CIO** | Receives notifications for Very High risk changes and change-related incidents. Provides strategic oversight of the change management programme. | [Name] |
| **Internal Audit** | Conducts independent review of change management controls and compliance with this policy. Provides assurance to the Board. | [Name] |

---

## 15. Review and Approval

### 15.1 Version History

*Record all versions of this document in the table below. This provides an audit trail of document changes and ensures version control.*

| Version | Date | Author | Role | Changes Made |
|---|---|---|---|---|
| 0.1 | [DD Month YYYY] | [Author Name] | [Role] | Initial draft for internal review |
| 0.2 | [DD Month YYYY] | [Author Name] | [Role] | Incorporated feedback from Technology Risk team |
| 0.3 | [DD Month YYYY] | [Author Name] | [Role] | Updated following Information Security review |
| 1.0 | [DD Month YYYY] | [Author Name] | [Role] | Final version approved for release |
| [1.1] | [DD Month YYYY] | [Author Name] | [Role] | [Description of changes in this version] |
| [2.0] | [DD Month YYYY] | [Author Name] | [Role] | [Description of major revision] |

### 15.2 Review and Approval Sign-Off

*All approvers listed below must review and sign this document before it becomes effective. Physical signatures or authenticated electronic approvals are both acceptable, provided they are traceable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** | [Name] | _________________ | [DD Month YYYY] |
| **Reviewed By — Technology Risk** | [Name] | _________________ | [DD Month YYYY] |
| **Reviewed By — Information Security** | [Name] | _________________ | [DD Month YYYY] |
| **Reviewed By — IT Operations** | [Name] | _________________ | [DD Month YYYY] |
| **Reviewed By — Internal Audit** | [Name] | _________________ | [DD Month YYYY] |
| **Approved By — Head of Technology Risk** | [Name] | _________________ | [DD Month YYYY] |
| **Endorsed By — Chief Technology Officer** | [Name] | _________________ | [DD Month YYYY] |
| **Noted By — Chief Risk Officer** | [Name] | _________________ | [DD Month YYYY] |

### 15.3 Quarterly Review Sign-Off

*The Head of Technology Risk must sign this section at each quarterly review to evidence ongoing oversight.*

| Quarter | Review Date | Reviewer | Signature | Key Observations | Next Review Due |
|---|---|---|---|---|---|
| Q[X] [YYYY] | [DD Month YYYY] | [Name] — Head of Technology Risk | _________________ | [Summary of key observations from quarterly review] | [DD Month YYYY] |
| Q[X] [YYYY] | [DD Month YYYY] | [Name] — Head of Technology Risk | _________________ | [Summary] | [DD Month YYYY] |
| Q[X] [YYYY] | [DD Month YYYY] | [Name] — Head of Technology Risk | _________________ | [Summary] | [DD Month YYYY] |
| Q[X] [YYYY] | [DD Month YYYY] | [Name] — Head of Technology Risk | _________________ | [Summary] | [DD Month YYYY] |

---

## 16. References

### 16.1 Regulatory References

*The following regulatory instruments form the mandatory compliance basis for this Change Log.*

| Reference | Document | Issuing Authority | Version / Date | Specific Clause(s) | Obligation |
|---|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Version / Issue Date] | **Clause 10.10** — Change Management | Mandatory compliance |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Version / Issue Date] | Clause 10.1 — Technology Risk Management Framework | Applicable |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Version / Issue Date] | Clause 10.9 — IT Service Management | Applicable |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Version / Issue Date] | Clause 10.12 — Cybersecurity | Applicable |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Version / Issue Date] | Clause 10.16 — Technology Audit | Applicable |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | 2010 (as amended) | Sections 9–11 — Security of Personal Data | Applicable where changes affect PII processing |
| FSA 2013 | Financial Services Act 2013 | Government of Malaysia | 2013 | Section 57 — Risk Management | Applicable |
| NACSA NCSP | National Cyber Security Policy | NACSA | [Version] | Security baseline controls | Applicable |

### 16.2 Internal Policy References

*The following internal policies and standards govern the change management process at [Organization Name].*

| Document | Document ID | Owner | Version | Relationship to This Log |
|---|---|---|---|---|
| Change Management Policy | [Policy ID] | Head of Technology Risk | [Version] | Primary governing policy — this log operationalises the policy |
| IT Security Policy | [Policy ID] | CISO | [Version] | Security requirements for changes |
| Business Continuity Plan | [Doc ID] | Head of Business Continuity | [Version] | Rollback plans and DR considerations |
| Technology Asset Register | [Doc ID] | Head of Technology Risk | [Version] | Asset reference for change records |
| Incident Management Procedure | [Doc ID] | IT Operations Manager | [Version] | Integration between change and incident management |
| Risk Management Framework | [Doc ID] | Chief Risk Officer | [Version] | Enterprise risk appetite informing change risk thresholds |
| Vendor Management Policy | [Policy ID] | Head of Procurement | [Version] | Governs changes to third-party managed systems |
| Records Retention Schedule | [Doc ID] | Compliance | [Version] | Defines retention period for change records |

### 16.3 Standards and Frameworks

*The following industry standards and frameworks inform the change management practices documented in this log.*

| Standard / Framework | Reference | Relevance |
|---|---|---|
| ITIL 4 — Change Enablement | ITIL 4 Foundation | Change management best practices |
| ISO/IEC 20000-1:2018 | IT Service Management | IT service management system requirements |
| ISO/IEC 27001:2022 | Information Security Management | Controls A.12.1.2 (Change Management) |
| COBIT 2019 | BAI06 — Manage IT Changes | IT governance and management of changes |
| NIST SP 800-128 | Guide for Security-Focused Configuration Management | Security configuration management |

---

## 17. Appendices

### Appendix A — Change Record Data Dictionary

*This appendix defines all data fields used in the Master Change Register (Section 9) and associated tables. Authors should refer to this dictionary when completing change records to ensure data quality and consistency.*

| Field Name | Description | Mandatory? | Format | Valid Values / Examples |
|---|---|---|---|---|
| Change ID | Unique identifier for the change request | Yes | CHG-[YYYY]-[NNNNNN] | CHG-2025-000142 |
| Change Title | Brief, descriptive title of the change | Yes | Free text (max 120 characters) | "Upgrade Core Banking DB Oracle 12c to 19c" |
| Change Type | Category of change | Yes | Code | STD / NRM-MIN / NRM-MAJ / EMG / REL / PROJ |
| Affected Asset(s) | Asset(s) impacted by the change | Yes | Asset ID(s) from Asset Register | AST-2025-000031 |
| Asset Criticality | Criticality level of the primary affected asset | Yes | Code | Critical / High / Medium / Low |
| Business Impact | Assessment of business impact | Yes | Code | BIC / BIS / BIM / BIN |
| Risk Level | Aggregate risk level from risk assessment | Yes | Code | VH / H / M / L |
| Change Owner | Accountable business or application owner | Yes | Name and Role | [Name], Application Owner |
| Implementer | Technical person or team executing the change | Yes | Name and Role | [Name], Senior Systems Engineer |
| Submission Date | Date change request was submitted | Yes | DD Mon YYYY | 15 Jan 2025 |
| CAB Review Date | Date reviewed by CAB | Yes (post-review) | DD Mon YYYY | 20 Jan 2025 |
| Approval Date | Date formal approval was granted | Yes (post-approval) | DD Mon YYYY | 20 Jan 2025 |
| Implementation Date | Date of actual production implementation | Yes (post-implementation) | DD Mon YYYY | 25 Jan 2025 |
| Status | Current lifecycle stage of the change | Yes | Code | See Section 7.2 |
| PIR Date | Date PIR was completed | Yes (post-PIR) | DD Mon YYYY | 28 Jan 2025 |
| Notes | Any additional relevant information | No | Free text | — |

---

### Appendix B — Change Request Form Template

*This appendix provides the standard change request form. Change Requestors must complete all mandatory fields before submitting a change request.*

**Change Request Form**

---

**Section 1 — Change Identification**

| Field | Response |
|---|---|
| Change Title | [Concise, descriptive title] |
| Requested By | [Name, Role, Department] |
| Date of Request | [DD Month YYYY] |
| Target Implementation Date | [DD Month YYYY] |
| Change Type | [STD / NRM-MIN / NRM-MAJ / EMG / REL / PROJ] |

**Section 2 — Change Description**

| Field | Response |
|---|---|
| Detailed Description of Change | [Describe what will change, technically and functionally] |
| Business Justification | [Why is this change required? What business or regulatory need does it address?] |
| Affected Systems and Assets | [List all affected Asset IDs and Asset Names] |
| Affected Environments | [PROD / DR / PROD-EXT] |
| Dependencies | [List any upstream or downstream dependencies] |

**Section 3 — Implementation Plan**

| Field | Response |
|---|---|
| Implementation Steps | [Numbered step-by-step implementation procedure] |
| Estimated Implementation Duration | [HH:MM] |
| Rollback Steps | [Numbered step-by-step rollback procedure] |
| Estimated Rollback Duration | [HH:MM] |
| Implementation Window | [Date, Start Time, End Time, Timezone] |
| Resources Required | [Personnel, tools, access required] |

**Section 4 — Testing Evidence**

| Field | Response |
|---|---|
| Test Environment Used | [DEV / UAT / Staging / Other] |
| Test Date(s) | [DD Month YYYY] |
| Test Results Summary | [Pass / Fail / Partial — with notes] |
| Test Evidence Reference | [Attach or reference test evidence document] |
| QA Sign-Off | [Name, Role, Date] |

**Section 5 — Risk Assessment Summary**

| Field | Response |
|---|---|
| Operational Risk | [L / M / H / VH] — [Brief rationale] |
| Cybersecurity Risk | [L / M / H / VH] — [Brief rationale] |
| BCP Risk | [L / M / H / VH] — [Brief rationale] |
| Compliance Risk | [L / M / H / VH] — [Brief rationale] |
| Aggregate Risk Level | [L / M / H / VH] |
| Risk Mitigations | [Describe mitigations applied to reduce risk] |

**Requestor Sign-Off:**

Name: ___________________________ Role: ___________________________ Date: _______________

Change Owner Sign-Off:

Name: ___________________________ Role: ___________________________ Date: _______________

---

### Appendix C — Change Freeze Calendar

*This appendix records the change freeze periods applicable to [Organization Name]. No standard or normal changes may be implemented during a freeze period without explicit approval from the Head of Technology Risk or SCAB. Emergency changes may proceed during freeze periods with appropriate authorisation.*

| Freeze Period | Start Date | End Date | Duration | Reason | Authority | Exceptions Process |
|---|---|---|---|---|---|---|
| Year-End Freeze | [DD Month YYYY] | [DD Month YYYY] | [N] days | Year-end processing, regulatory submissions | Head of Technology Risk | SCAB approval required |
| CNY / Eid / Public Holiday Freeze | [DD Month YYYY] | [DD Month YYYY] | [N] days | Public holiday — reduced support availability | IT Operations Manager | Head of Technology Risk approval |
| Ramadan Freeze | [DD Month YYYY] | [DD Month YYYY] | [N] days | Reduced staffing, Syariah compliance period | Head of Technology Risk | SCAB approval required |
| BNM Examination Freeze | [DD Month YYYY] | [DD Month YYYY] | [N] days | BNM onsite examination in progress | Head of Technology Risk | SCAB approval required |
| Peak Period — [Event Name] | [DD Month YYYY] | [DD Month YYYY] | [N] days | High-volume business period | IT Operations Manager | Head of Technology Risk approval |
| [Custom Freeze Period] | [DD Month YYYY] | [DD Month YYYY] | [N] days | [Reason] | [Authority] | [Exception process] |

---

### Appendix D — Rollback Plan Template

*This appendix provides a standardised template for rollback plans. Every change must include a completed rollback plan prior to CAB approval. Rollback plans must be tested where feasible.*

**Rollback Plan for Change: [CHG-ID] — [Change Title]**

| Field | Details |
|---|---|
| Change ID | [CHG-ID] |
| Change Title | [Title] |
| Rollback Decision Authority | [Who authorises the rollback decision?] |
| Rollback Decision Timeframe | The rollback decision must be made within [X minutes/hours] of implementation start |
| Rollback Trigger Conditions | [Define the specific conditions that will trigger rollback initiation] |

**Rollback Steps:**

| Step | Action | Responsible | Expected Duration | Verification |
|---|---|---|---|---|
| 1 | [First rollback step] | [Name / Role] | [HH:MM] | [How to verify step is complete] |
| 2 | [Second rollback step] | [Name / Role] | [HH:MM] | [Verification method] |
| 3 | [Third rollback step] | [Name / Role] | [HH:MM] | [Verification method] |
| 4 | [Final verification] | [Name / Role] | [HH:MM] | [Confirm system is restored to pre-change state] |

**Total Estimated Rollback Time:** [HH:MM]

**Rollback Tested?** [Yes — Date and Environment / No — Reason]

**Post-Rollback Notification Required:**

- [ ] Change Owner
- [ ] CAB Chair
- [ ] Head of Technology Risk
- [ ] Business Unit Head (if customer impact)
- [ ] CISO (if security-related change)
- [ ] Other: [Specify]

---

### Appendix E — Post-Implementation Review Template

*This appendix provides the standardised PIR template. The Change Implementer must complete this template within the timeframe defined in Section 13.2.*

**Post-Implementation Review for Change: [CHG-ID] — [Change Title]**

| Field | Details |
|---|---|
| Change ID | [CHG-ID] |
| Change Title | [Title] |
| Implementation Date | [DD Month YYYY] |
| Implementation Start Time | [HH:MM] |
| Implementation End Time | [HH:MM] |
| Total Implementation Duration | [HH:MM] (vs. planned [HH:MM]) |
| PIR Date | [DD Month YYYY] |
| PIR Conducted By | [Name, Role] |

**Implementation Outcome Assessment:**

| Assessment Area | Result | Notes |
|---|---|---|
| Implementation completed successfully? | [Yes / No / Partial] | [Details] |
| All implementation steps executed as planned? | [Yes / No] | [Deviations noted] |
| Rollback required? | [Yes / No] | [If yes, describe reason and rollback outcome] |
| System functionality verified post-implementation? | [Yes / No] | [Verification method and evidence reference] |
| No unintended impact on dependent systems? | [Yes / Unintended impact noted] | [Details if impact noted] |
| Performance baseline maintained? | [Yes / No] | [Monitoring evidence reference] |
| Security controls verified? | [Yes / No] | [Details] |
| All implementation evidence attached? | [Yes / No] | [Evidence reference] |

**Unintended Consequences:**

[Describe any unintended consequences identified. If none, state "No unintended consequences identified."]

**Corrective Actions Required:**

| Action | Responsible | Due Date | Status |
|---|---|---|---|
| [Corrective action description] | [Name / Role] | [DD Mon YYYY] | [Open / Closed] |

**Lessons Learned:**

[Record any lessons learned from this change that should inform future changes or change management processes.]

**PIR Conclusion:**

- [ ] **Satisfactory** — Change implemented successfully with no material issues. Change record closed.
- [ ] **Unsatisfactory** — Issues identified requiring corrective action. Change record remains open pending corrective action completion.

**PIR Approved By:**

Name: ___________________________ Role: ___________________________ Date: _______________

---

### Appendix F — Unauthorised Change Investigation Procedure

*This appendix defines the procedure to be followed when an unauthorised change is detected. An unauthorised change is any modification to a production system that was not approved through the change management process.*

**Definition:** An unauthorised change is any modification to a production system configuration, code, data, or access rights that:

- Was not submitted as a formal change request, or
- Was implemented without the required CAB or SCAB approval, or
- Deviated materially from the approved change plan without documented authorisation.

**Detection Methods:**

- File integrity monitoring (FIM) alerts
- SIEM correlation rules detecting configuration changes without associated change records
- Configuration drift detection via CMDB comparison
- Discrepancies identified during PIR
- Reports from staff or auditors

**Investigation Steps:**

| Step | Action | Responsible | Timeframe |
|---|---|---|---|
| 1 | Log the detected unauthorised change in the Unauthorised Change Register | IT Operations Manager | Within [2] hours of detection |
| 2 | Notify Head of Technology Risk and CISO | IT Operations Manager | Within [2] hours of detection |
| 3 | Isolate or contain the unauthorised change if security risk warrants it | CISO | Immediate if security risk |
| 4 | Conduct forensic investigation to determine who made the change and when | Technology Risk + CISO | Within [24] hours |
| 5 | Assess business and security impact of the unauthorised change | Technology Risk + Change Owner | Within [24] hours |
| 6 | Determine whether the change should be retained, modified, or reversed | SCAB decision | Within [48] hours |
| 7 | Initiate disciplinary process if warranted | HR + Head of Technology Risk | Per HR Policy |
| 8 | Document root cause and implement corrective controls | Head of Technology Risk | Within [5] business days |
| 9 | Report to CTO and Internal Audit | Head of Technology Risk | Within [5] business days |
| 10 | Report to BNM if the unauthorised change affected licensed systems and meets reporting thresholds | Compliance | Per BNM reporting requirements |

**Unauthorised Change Register:**

| Detection Date | System Affected | Nature of Unauthorised Change | Detected By | Detection Method | Investigation Outcome | Disposition | Disciplinary Action | Reported to BNM? |
|---|---|---|---|---|---|---|---|---|
| [DD Mon YYYY] | [System] | [Description] | [Name / Tool] | [Method] | [Outcome] | [Retained / Reversed / Modified] | [Yes / No] | [Yes / No] |

---

### Appendix G — Records Retention Schedule

*This appendix defines the retention requirements for change management records in accordance with BNM requirements and [Organization Name]'s Records Retention Policy.*

| Record Type | Minimum Retention Period | Storage Location | Disposal Method | Regulatory Basis |
|---|---|---|---|---|
| Change Request Records (all types) | 7 years | [Change Management System / Document Management System] | Secure destruction per Records Policy | BNM RMiT; FSA 2013 |
| CAB and SCAB Meeting Minutes | 7 years | [Document Management System] | Secure destruction | BNM RMiT |
| Risk Assessment Records | 7 years | [Change Management System / Document Management System] | Secure destruction | BNM RMiT |
| PIR Records | 7 years | [Change Management System] | Secure destruction | BNM RMiT |
| Emergency Change Records | 7 years | [Change Management System] | Secure destruction | BNM RMiT |
| Unauthorised Change Records | 10 years | [Secure Document Store] | Secure destruction with CRO sign-off | BNM RMiT; legal hold considerations |
| Change-Related Incident Records | 7 years (or per Incident Register retention, whichever is longer) | [Incident Management System] | Secure destruction | BNM RMiT; FSA 2013 |
| This Change Log (document) | 7 years per version | [Document Management System] | Secure destruction | BNM RMiT |

> *Retention periods are minimum periods. Legal holds, regulatory examination requirements, or ongoing investigations may require extended retention. Consult the Legal and Compliance team before disposing of any change management records.*

---

### Appendix H — Glossary

*This appendix defines key terms used throughout this document.*

| Term | Definition |
|---|---|
| **Back-out Plan** | See Rollback Plan. |
| **CAB** | Change Advisory Board — the governance body responsible for reviewing and approving change requests. |
| **Change** | Any modification to a production technology asset, including configuration changes, software deployments, infrastructure modifications, and access changes. |
| **Change Freeze** | A defined period during which no standard or normal changes may be implemented in production without explicit senior management approval. |
| **Change Owner** | The individual accountable for the business and risk outcomes of a change, typically the Application Owner or Business System Owner. |
| **CMDB** | Configuration Management Database — the authoritative record of configuration items and their relationships. |
| **ECA** | Emergency Change Authority — the authorised individuals who may approve emergency changes outside of regular CAB meetings. |
| **Emergency Change** | An unplanned change required to address a critical production incident or security vulnerability that cannot wait for the standard CAB process. |
| **PIR** | Post-Implementation Review — a structured review conducted after a change is implemented to confirm success and identify any unintended consequences. |
| **Production Environment** | The live technology environment that serves customers and supports regulated business activities. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix used to clarify roles in a process. |
| **Release** | A bundled deployment of multiple changes, typically following a release management process. |
| **Residual Risk** | The level of risk remaining after mitigations have been applied. |
| **Rollback** | The process of reverting a production system to its prior state following a failed or problematic change implementation. |
| **SCAB** | Senior Change Advisory Board — the senior governance body responsible for approving major and high-risk changes. |
| **Segregation of Duties** | The practice of dividing responsibilities such that no single individual has end-to-end control over a critical process. |
| **Standard Change** | A pre-approved, repeatable change following a tested and documented template, subject to reduced approval requirements. |
| **Unauthorised Change** | Any modification to a production system that was not approved through the formal change management process. |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential | **Owner:** Head of Technology Risk | **Last Review:** [Last Review Date] | **Next Review:** [Next Review Date]

*This document is subject to the Information Classification and Handling Policy of [Organization Name]. Unauthorised disclosure is prohibited.*