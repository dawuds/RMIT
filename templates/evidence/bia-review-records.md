# BIA Review Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head], [Department Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual from Last Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset/Item Identification](#2-assetitem-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Status and Lifecycle Stage](#5-status-and-lifecycle-stage)
6. [Last Review Date](#6-last-review-date)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the **annual Business Impact Analysis (BIA) Review Record** for [Organization Name]. It provides a structured and auditable account of the review and update activities conducted on the organisation's BIA, in accordance with the requirements of Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.34**.

The BIA Review Records establish a systematic basis for verifying that all technology-related business functions, systems, and assets have been assessed for their criticality, recovery requirements, and operational dependencies, and that this assessment remains current and accurate on an annual basis.

### 1.2 Scope

*Define the organisational and technical boundaries of this BIA review cycle. Include all business units, systems, and processes subject to BIA assessment under RMiT.*

This review record applies to:

- All critical technology systems and infrastructure within [Organization Name]
- Business functions and processes dependent on technology as identified in the current BIA
- Third-party and outsourced technology services supporting critical operations
- All departments and business units within scope: [List Applicable Departments/Business Units]

**Exclusions:** [List any explicitly excluded systems, processes, or departments, with justification]

**Review Period:** [Review Start Date] to [Review End Date]

---

## 2. Asset/Item Identification

### 2.1 Overview

*List and uniquely identify each asset, system, process, or business function subject to this BIA review cycle. Each item must carry a stable identifier that can be cross-referenced with the master BIA register and asset inventory.*

### 2.2 BIA Item Register

| Item ID | Item Name | Item Type | Business Function | Department | Previous BIA Reference |
|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [System / Process / Service / Data Asset] | [Supported Business Function] | [Department Name] | [Previous BIA Doc ID / Section] |
| [BIA-002] | [System/Process Name] | [System / Process / Service / Data Asset] | [Supported Business Function] | [Department Name] | [Previous BIA Doc ID / Section] |
| [BIA-003] | [System/Process Name] | [System / Process / Service / Data Asset] | [Supported Business Function] | [Department Name] | [Previous BIA Doc ID / Section] |
| [BIA-004] | [System/Process Name] | [System / Process / Service / Data Asset] | [Supported Business Function] | [Department Name] | [Previous BIA Doc ID / Section] |
| [BIA-005] | [System/Process Name] | [System / Process / Service / Data Asset] | [Supported Business Function] | [Department Name] | [Previous BIA Doc ID / Section] |

> **Guidance:** Item Types may include: Core Banking System, Payment System, IT Infrastructure, Business Application, Data Repository, Third-Party Service, or Business Process. Align Item IDs with the organisation's authoritative asset register where applicable.

### 2.3 New Items Added This Review Cycle

*Record any new assets, systems, or processes identified during this review cycle that were not present in the prior BIA.*

| Item ID | Item Name | Item Type | Reason for Inclusion | Date Added |
|---|---|---|---|---|
| [BIA-NEW-001] | [System/Process Name] | [Type] | [Reason — e.g., new system deployed, process identified as critical] | [Date] |

### 2.4 Items Removed This Review Cycle

*Record any assets, systems, or processes removed from scope since the last review, with justification.*

| Item ID | Item Name | Reason for Removal | Date Removed | Approved By |
|---|---|---|---|---|
| [BIA-REM-001] | [System/Process Name] | [Reason — e.g., system decommissioned, function outsourced] | [Date] | [Approver Name] |

---

## 3. Classification and Categorisation

### 3.1 Overview

*Assign and confirm the criticality classification and regulatory categorisation for each BIA item. Classifications must reflect the impact of disruption on business operations, regulatory obligations, and customer commitments. Align with BNM RMiT definitions of critical systems.*

### 3.2 Criticality Classification Framework

| Criticality Level | Definition |
|---|---|
| **Critical** | Disruption would have an immediate, severe impact on financial services delivery, regulatory compliance, or systemic risk within [X] hours |
| **High** | Disruption would cause significant operational impact or regulatory breach within [X] hours to [Y] days |
| **Medium** | Disruption would cause moderate operational impact; workarounds exist but are unsustainable beyond [Y] days |
| **Low** | Disruption has limited operational impact; manual workarounds are viable for an extended period |

### 3.3 Classification and Categorisation Register

| Item ID | Item Name | Criticality Level | BNM System Category | Data Classification | Regulatory Relevance | Review Outcome |
|---|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Critical / High / Medium / Low] | [Critical / Non-Critical per RMiT] | [Confidential / Restricted / Public] | [BNM / PDPA / NACSA / Other] | [Confirmed / Updated / Escalated] |
| [BIA-002] | [System/Process Name] | [Critical / High / Medium / Low] | [Critical / Non-Critical per RMiT] | [Confidential / Restricted / Public] | [BNM / PDPA / NACSA / Other] | [Confirmed / Updated / Escalated] |
| [BIA-003] | [System/Process Name] | [Critical / High / Medium / Low] | [Critical / Non-Critical per RMiT] | [Confidential / Restricted / Public] | [BNM / PDPA / NACSA / Other] | [Confirmed / Updated / Escalated] |
| [BIA-004] | [System/Process Name] | [Critical / High / Medium / Low] | [Critical / Non-Critical per RMiT] | [Confidential / Restricted / Public] | [BNM / PDPA / NACSA / Other] | [Confirmed / Updated / Escalated] |
| [BIA-005] | [System/Process Name] | [Critical / High / Medium / Low] | [Critical / Non-Critical per RMiT] | [Confidential / Restricted / Public] | [BNM / PDPA / NACSA / Other] | [Confirmed / Updated / Escalated] |

### 3.4 Classification Changes from Prior Review

*Document any items whose criticality classification has changed since the last annual BIA review, with the rationale for the change.*

| Item ID | Item Name | Previous Classification | New Classification | Rationale | Approved By |
|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Previous Level] | [New Level] | [Business/technical justification] | [Approver Name] |

### 3.5 Recovery Objective Parameters

*Confirm or update the Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for each item, as these are core outputs of the BIA process.*

| Item ID | Item Name | Criticality | RTO (Current) | RPO (Current) | RTO (Previous) | RPO (Previous) | Change Justification |
|---|---|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Level] | [Hours] | [Hours] | [Hours] | [Hours] | [Reason or "No Change"] |
| [BIA-002] | [System/Process Name] | [Level] | [Hours] | [Hours] | [Hours] | [Hours] | [Reason or "No Change"] |
| [BIA-003] | [System/Process Name] | [Level] | [Hours] | [Hours] | [Hours] | [Hours] | [Reason or "No Change"] |

---

## 4. Owner and Custodian

### 4.1 Overview

*Identify and confirm the accountable owner and operational custodian for each BIA item. Ownership must be assigned to named individuals or roles, not teams or generic titles alone. Verify that ownership assignments remain current and that custodians are aware of their responsibilities.*

### 4.2 Ownership Register

| Item ID | Item Name | Business Owner (Role) | Business Owner (Name) | IT Custodian (Role) | IT Custodian (Name) | Third-Party Custodian | Ownership Status |
|---|---|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Role Title] | [Full Name] | [Role Title] | [Full Name] | [Vendor/Partner Name or N/A] | [Confirmed / Changed / Vacant] |
| [BIA-002] | [System/Process Name] | [Role Title] | [Full Name] | [Role Title] | [Full Name] | [Vendor/Partner Name or N/A] | [Confirmed / Changed / Vacant] |
| [BIA-003] | [System/Process Name] | [Role Title] | [Full Name] | [Role Title] | [Full Name] | [Vendor/Partner Name or N/A] | [Confirmed / Changed / Vacant] |
| [BIA-004] | [System/Process Name] | [Role Title] | [Full Name] | [Role Title] | [Full Name] | [Vendor/Partner Name or N/A] | [Confirmed / Changed / Vacant] |
| [BIA-005] | [System/Process Name] | [Role Title] | [Full Name] | [Role Title] | [Full Name] | [Vendor/Partner Name or N/A] | [Confirmed / Changed / Vacant] |

> **Guidance:** "Vacant" ownership status requires immediate escalation and resolution prior to BIA approval. All ownership changes must be formally acknowledged by the incoming owner.

### 4.3 Ownership Changes Since Last Review

*Record all changes to ownership assignments that occurred since the previous annual review.*

| Item ID | Item Name | Change Type | Previous Owner | New Owner | Effective Date | Acknowledgement Obtained |
|---|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Business Owner / IT Custodian] | [Previous Name / Role] | [New Name / Role] | [Date] | [Yes / Pending] |

### 4.4 Owner Confirmation

*Business owners and IT custodians must confirm their awareness of and accountability for the items listed above.*

| Item ID | Item Name | Business Owner Name | Confirmation Date | IT Custodian Name | Confirmation Date |
|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Name] | [Date] | [Name] | [Date] |
| [BIA-002] | [System/Process Name] | [Name] | [Date] | [Name] | [Date] |
| [BIA-003] | [System/Process Name] | [Name] | [Date] | [Name] | [Date] |

---

## 5. Status and Lifecycle Stage

### 5.1 Overview

*Document the current operational status and lifecycle stage of each BIA item. This ensures the BIA accurately reflects the current state of the technology environment and that appropriate recovery provisions exist for systems at each stage of their lifecycle.*

### 5.2 Lifecycle Stage Definitions

| Lifecycle Stage | Definition |
|---|---|
| **Planning** | System or process is in design or procurement phase; not yet operational |
| **Active** | Fully operational and in production use |
| **Under Maintenance** | Temporarily modified, upgraded, or under scheduled maintenance |
| **Legacy / End-of-Life** | Operational but no longer vendor-supported; subject to risk acceptance |
| **Decommissioning** | Scheduled for retirement; transition plan in progress |
| **Decommissioned** | Removed from production; retained only for archival or audit purposes |

### 5.3 Status and Lifecycle Register

| Item ID | Item Name | Operational Status | Lifecycle Stage | End-of-Life Date (if applicable) | Decommission Target Date (if applicable) | Risk Accepted (Y/N) | Notes |
|---|---|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Operational / Degraded / Offline] | [Active / Legacy / etc.] | [Date or N/A] | [Date or N/A] | [Y / N] | [Any relevant notes] |
| [BIA-002] | [System/Process Name] | [Operational / Degraded / Offline] | [Active / Legacy / etc.] | [Date or N/A] | [Date or N/A] | [Y / N] | [Any relevant notes] |
| [BIA-003] | [System/Process Name] | [Operational / Degraded / Offline] | [Active / Legacy / etc.] | [Date or N/A] | [Date or N/A] | [Y / N] | [Any relevant notes] |
| [BIA-004] | [System/Process Name] | [Operational / Degraded / Offline] | [Active / Legacy / etc.] | [Date or N/A] | [Date or N/A] | [Y / N] | [Any relevant notes] |
| [BIA-005] | [System/Process Name] | [Operational / Degraded / Offline] | [Active / Legacy / etc.] | [Date or N/A] | [Date or N/A] | [Y / N] | [Any relevant notes] |

### 5.4 Items Requiring Remediation Action

*List any items where the current lifecycle stage introduces risk to business continuity or BIA assumptions, along with the planned remediation actions.*

| Item ID | Item Name | Issue Identified | Risk Level | Remediation Action | Target Completion Date | Responsible Party |
|---|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [e.g., Legacy system with no vendor support] | [High / Medium / Low] | [Planned action] | [Date] | [Owner Name / Role] |

---

## 6. Last Review Date

### 6.1 Overview

*Record the dates on which each BIA item was last reviewed, validated, and updated. This section provides the primary audit trail demonstrating compliance with the annual review requirement under RMiT Clause 10.34.*

### 6.2 Review History Register

| Item ID | Item Name | Last Full Review Date | Reviewed By | Review Method | Key Findings | BIA Updated (Y/N) | Update Description |
|---|---|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Date] | [Reviewer Name / Role] | [Workshop / Interview / Document Review / Automated] | [Summary of findings or "No changes identified"] | [Y / N] | [Description of updates made, or N/A] |
| [BIA-002] | [System/Process Name] | [Date] | [Reviewer Name / Role] | [Workshop / Interview / Document Review / Automated] | [Summary of findings or "No changes identified"] | [Y / N] | [Description of updates made, or N/A] |
| [BIA-003] | [System/Process Name] | [Date] | [Reviewer Name / Role] | [Workshop / Interview / Document Review / Automated] | [Summary of findings or "No changes identified"] | [Y / N] | [Description of updates made, or N/A] |
| [BIA-004] | [System/Process Name] | [Date] | [Reviewer Name / Role] | [Workshop / Interview / Document Review / Automated] | [Summary of findings or "No changes identified"] | [Y / N] | [Description of updates made, or N/A] |
| [BIA-005] | [System/Process Name] | [Date] | [Reviewer Name / Role] | [Workshop / Interview / Document Review / Automated] | [Summary of findings or "No changes identified"] | [Y / N] | [Description of updates made, or N/A] |

### 6.3 Items Overdue for Review

*List any items that did not receive a full review within the required 12-month cycle, with explanation and remediation timeline.*

| Item ID | Item Name | Last Review Date | Days Overdue | Reason for Delay | Remediation Plan | Target Review Date |
|---|---|---|---|---|---|---|
| [BIA-001] | [System/Process Name] | [Date] | [Number] | [Explanation] | [Plan] | [Date] |

### 6.4 Next Scheduled Review

| Review Parameter | Details |
|---|---|
| **Next Full BIA Review Date** | [Date — 12 months from this review completion] |
| **Interim Review Trigger Events** | Significant system changes, major incidents, M&A activity, regulatory changes, or material outsourcing arrangements |
| **Review Coordinator** | [Name], [Role] |
| **Scheduled Review Workshop Date** | [Date] |

---

## 7. Roles and Responsibilities

### 7.1 RACI Matrix

*The following RACI matrix defines accountability for BIA review activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Department Head / BIA Owner | IT Risk / Technology Risk | Business Continuity Manager | IT Custodian / System Owner | Internal Audit | Senior Management / EXCO |
|---|---|---|---|---|---|---|
| Initiate annual BIA review cycle | A | R | R | I | I | I |
| Identify and update BIA item register | C | R | R | C | I | I |
| Validate criticality classifications | A | R | C | C | I | I |
| Confirm RTO/RPO parameters | A | C | R | C | I | I |
| Confirm ownership assignments | A | C | R | R | I | I |
| Assess system lifecycle status | C | R | C | R | I | I |
| Conduct BIA review workshops | C | R | R | C | I | I |
| Document review findings | I | R | R | C | I | I |
| Approve BIA updates | A | C | C | I | I | R |
| Submit BIA review evidence to audit | C | R | R | I | A | I |
| Report BIA review completion to EXCO | A | C | R | I | I | R |

### 7.2 Key Roles

| Role | Responsibility |
|---|---|
| **[Relevant Department Head]** | Accountable owner of this BIA Review Record; ensures review is completed annually |
| **Technology Risk Manager** | Leads the technical review of system classifications, RTOs, and RPOs |
| **Business Continuity Manager** | Coordinates the BIA review process; maintains the master BIA document |
| **IT System Custodians** | Provide accurate system status, dependency, and lifecycle information |
| **Internal Audit** | Independently verifies completeness and accuracy of BIA review evidence |
| **EXCO / Board Risk Committee** | Receives summary report; approves material changes to criticality classifications |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Role] | Initial document creation |
| [1.1] | [Date] | [Author Name], [Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Role] | [Description of changes] |

### 8.2 Annual Review Completion Certification

*The signatories below certify that the BIA Review Record is complete, accurate, and reflects the current state of all technology assets and business processes within scope. This record serves as evidence of compliance with BNM RMiT Clause 10.34.*

| Role | Name | Signature | Date |
|---|---|---|---|
| BIA Owner / Department Head | [Full Name] | __________________ | [Date] |
| Technology Risk Manager | [Full Name] | __________________ | [Date] |
| Business Continuity Manager | [Full Name] | __________________ | [Date] |
| Chief Information Officer / CTO | [Full Name] | __________________ | [Date] |
| Chief Risk Officer | [Full Name] | __________________ | [Date] |

### 8.3 Management Approval

| Approval Level | Role | Name | Signature | Date |
|---|---|---|---|---|
| First-Level Approval | [Approving Manager Role] | [Full Name] | __________________ | [Date] |
| Final Approval | [Senior Approver Role] | [Full Name] | __________________ | [Date] |

---

## 9. References

### 9.1 Regulatory References

| Reference | Document | Clause / Section | Description |
|---|---|---|---|
| **BNM RMiT** | Risk Management in Technology (RMiT) Policy Document | **10.34** | Requirement for annual review and update of the Business Impact Analysis |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | 10.30 – 10.33 | Business Impact Analysis methodology and content requirements |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | 10.1 – 10.5 | Technology risk management governance framework |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | 11.x | Business Continuity Management (BCM) requirements linking to BIA outputs |

### 9.2 Internal Document References

| Document Title | Document ID | Version | Relationship to this Record |
|---|---|---|---|
| Business Impact Analysis (Master Document) | [Doc ID] | [Version] | Primary document updated as a result of this review |
| Business Continuity Plan | [Doc ID] | [Version] | Informed by BIA outputs |
| Disaster Recovery Plan | [Doc ID] | [Version] | Recovery parameters derived from BIA |
| IT Asset Register | [Doc ID] | [Version] | Source register for BIA item identification |
| Technology Risk Register | [Doc ID] | [Version] | Risk context for BIA classifications |
| IT Change Management Policy | [Doc ID] | [Version] | Governs updates to systems in scope |

### 9.3 Standards and Frameworks

| Standard | Relevance |
|---|---|
| ISO 22317:2021 — Business Impact Analysis | International standard for BIA methodology |
| ISO/IEC 27001:2022 — Information Security Management | Asset classification and management requirements |
| BNM PDPA Obligations | Personal data protection considerations within BIA scope |
| NACSA Critical Information Infrastructure (CII) Guidelines | CII designation requirements relevant to critical systems |

---

## 10. Appendices

### Appendix A — BIA Review Evidence Checklist

*Use this checklist to confirm that all required evidence has been collected and attached to support this BIA Review Record.*

| # | Evidence Item | Required | Collected | Reference / Location |
|---|---|---|---|---|
| A1 | Signed confirmation from all business owners | Yes | [Y / N] | [Document location] |
| A2 | System change log from IT (showing changes since last BIA review) | Yes | [Y / N] | [Document location] |
| A3 | Minutes or attendance record from BIA review workshop(s) | Yes | [Y / N] | [Document location] |
| A4 | Updated BIA master document with version history | Yes | [Y / N] | [Document location] |
| A5 | RTO/RPO validation evidence (test results, DR test reports) | Yes | [Y / N] | [Document location] |
| A6 | Third-party/outsourcing review confirmation | Yes | [Y / N] | [Document location] |
| A7 | Management sign-off on classification changes | Yes | [Y / N] | [Document location] |
| A8 | Internal Audit notification of review completion | Yes | [Y / N] | [Document location] |

### Appendix B — BIA Review Workshop Attendance Record

*Attach or reference the attendance sheet from the annual BIA review workshop(s).*

| Workshop Date | Workshop Facilitator | Attendees (Name / Role) | Department | Attendance Confirmed |
|---|---|---|---|---|
| [Date] | [Name], [Role] | [Name], [Role] | [Department] | [Y / N] |
| [Date] | [Name], [Role] | [Name], [Role] | [Department] | [Y / N] |

### Appendix C — Summary of Material Changes to BIA

*Provide a consolidated summary of all material changes made to the BIA as a result of this annual review.*

| Change Reference | Item Affected | Nature of Change | Business Impact | Approved By | Effective Date |
|---|---|---|---|---|---|
| [CHG-001] | [System/Process Name] | [e.g., Criticality upgraded from High to Critical] | [Description of business impact] | [Name] | [Date] |
| [CHG-002] | [System/Process Name] | [e.g., RTO revised from 4 hours to 2 hours] | [Description of business impact] | [Name] | [Date] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **BIA** | Business Impact Analysis — an assessment of the potential effects of disruption to critical business operations |
| **RTO** | Recovery Time Objective — the maximum acceptable duration of a system or process outage |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss measured in time |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk in financial institutions |
| **Critical System** | A system whose failure would have an immediate and severe impact on financial services delivery or regulatory compliance, as defined under BNM RMiT |
| **BCP** | Business Continuity Plan |
| **DRP** | Disaster Recovery Plan |
| **CII** | Critical Information Infrastructure, as designated under NACSA guidelines |

---

*This document is classified as **Confidential** and is intended for authorised personnel of [Organization Name] only. Unauthorised disclosure, reproduction, or distribution is prohibited.*

*Prepared in accordance with BNM Risk Management in Technology (RMiT) Policy Document — Clause 10.34*
*[Organization Name] | [Department Name] | Version 1.0 | [Effective Date]*