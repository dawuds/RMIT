# IRP Testing Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
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

This document serves as an official record of Incident Response Plan (IRP) testing activities conducted by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** policy document, specifically **Clause 11.1**. It captures the outcomes of tabletop exercises, simulation drills, and other structured IRP validation activities to demonstrate ongoing readiness and regulatory compliance.

### 1.2 Scope

This record applies to all IRP testing events covering:

- Technology-related incidents within [Organization Name]'s operational environment
- Systems, processes, and personnel identified within the scope of the IRP
- All business units, subsidiaries, and third-party dependencies subject to the IRP

This document is **mandatory** and must be maintained per-event and reviewed no less than **quarterly**, in line with BNM RMiT obligations.

### 1.3 Regulatory Context

| Requirement | Reference |
|---|---|
| Risk Management in Technology (RMiT) | BNM/RH/PD 028-107 |
| IRP Testing and Validation | RMiT Clause 11.1 |
| Technology Risk Management | RMiT Clauses 10.x (supporting context) |

---

## 2. Asset/Item Identification

*Identify each IRP testing event or exercise as a discrete record. Each entry should uniquely identify the test, the systems or scenarios involved, and the test method employed.*

### 2.1 Test Event Register

| Field | Details |
|---|---|
| **Test Record ID** | [TRP-YYYY-NNN] |
| **Test Event Name** | [e.g., Q1 Tabletop Exercise — Ransomware Scenario] |
| **Test Type** | [Tabletop Exercise / Simulation / Full Drill / Walk-Through] |
| **Test Date** | [DD MMM YYYY] |
| **Test Duration** | [e.g., 3 hours] |
| **Scenario Description** | [Brief description of the incident scenario tested] |
| **Systems/Assets in Scope** | [List of systems, applications, or infrastructure components covered] |
| **Trigger for Test** | [Scheduled / Post-Incident / Regulatory Requirement / Change Event] |

### 2.2 Systems and Assets Covered

*List all IT assets, applications, and infrastructure components that were included within the scope of this testing event.*

| Asset ID | Asset Name | Asset Type | Environment | Criticality |
|---|---|---|---|---|
| [ASSET-001] | [e.g., Core Banking System] | [Application / Infrastructure / Data] | [Production / DR / UAT] | [Critical / High / Medium / Low] |
| [ASSET-002] | [Asset Name] | [Type] | [Environment] | [Criticality] |
| [ASSET-003] | [Asset Name] | [Type] | [Environment] | [Criticality] |

---

## 3. Classification and Categorisation

*Classify and categorise the testing event and the incident scenario according to [Organization Name]'s taxonomy and BNM-recognised severity tiers. This enables trend analysis and appropriate escalation of findings.*

### 3.1 Test Classification

| Field | Details |
|---|---|
| **Incident Scenario Category** | [Cyber Attack / Data Breach / System Outage / Third-Party Failure / Natural Disaster / Other] |
| **Severity Level Simulated** | [Critical / High / Medium / Low — per internal classification framework] |
| **BNM Reportable Incident Type** | [Yes / No — indicate if scenario mirrors a BNM-reportable incident type] |
| **IRP Version Tested** | [e.g., IRP v2.3, dated DD MMM YYYY] |
| **Test Methodology** | [Tabletop / Functional / Full-Scale / Red Team / Third-Party Facilitated] |

### 3.2 Scenario Categorisation Detail

*Provide a structured breakdown of the simulated scenario, including the attack vector or failure mode, affected services, and intended test objectives.*

| # | Test Objective | Scenario Injects | Expected Outcome | Pass / Fail |
|---|---|---|---|---|
| 1 | [e.g., Validate escalation procedures] | [e.g., Simulated phishing email detected] | [e.g., SOC escalates within 15 minutes] | [Pass / Fail / Partial] |
| 2 | [Test objective] | [Scenario inject description] | [Expected outcome] | [Pass / Fail / Partial] |
| 3 | [Test objective] | [Scenario inject description] | [Expected outcome] | [Pass / Fail / Partial] |

---

## 4. Owner and Custodian

*Record the accountable owner and operational custodian for this IRP testing record. Custodians are responsible for maintaining the accuracy of this document; owners are accountable for the adequacy of the IRP and its testing programme.*

### 4.1 Record Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **Document Owner** | [Name] | QA / Technology Risk | [email@organization.com] |
| **Document Custodian** | [Name] | [Department] | [email@organization.com] |
| **IRP Owner** | [Name] | [e.g., CISO / Technology Risk] | [email@organization.com] |
| **Test Facilitator** | [Name] | [Department] | [email@organization.com] |

### 4.2 Participating Stakeholders

*List all individuals and teams who participated in the IRP test. This roster serves as attendance evidence for audit purposes.*

| Name | Role / Title | Department | Participation Capacity | Attendance Confirmed |
|---|---|---|---|---|
| [Name] | [e.g., CISO] | [Department] | [Decision Maker / Observer / Player / Facilitator] | [Yes / No] |
| [Name] | [Role] | [Department] | [Capacity] | [Yes / No] |
| [Name] | [Role] | [Department] | [Capacity] | [Yes / No] |
| [Name] | [Role] | [Department] | [Capacity] | [Yes / No] |

---

## 5. Status and Lifecycle Stage

*Document the current status of this testing record and the lifecycle state of any findings, remediation actions, and follow-up items arising from the exercise.*

### 5.1 Record Status

| Field | Details |
|---|---|
| **Record Status** | [Draft / Under Review / Approved / Closed] |
| **Test Outcome (Overall)** | [Satisfactory / Unsatisfactory / Partially Satisfactory] |
| **Number of Findings Raised** | [Total count] |
| **Critical / High Findings** | [Count] |
| **Medium / Low Findings** | [Count] |
| **All Findings Remediated** | [Yes / No / In Progress] |
| **Record Archived** | [Yes / No — indicate if stored in the central evidence repository] |

### 5.2 Findings and Action Tracker

*Record all observations, gaps, and improvement actions identified during the test. Each finding must be assigned an owner and target remediation date.*

| Finding ID | Finding Description | Severity | IRP Section Affected | Responsible Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| [FND-001] | [Description of gap or deficiency observed] | [Critical / High / Medium / Low] | [IRP Section reference] | [Name / Team] | [DD MMM YYYY] | [Open / In Progress / Closed] |
| [FND-002] | [Finding description] | [Severity] | [IRP Section] | [Owner] | [Date] | [Status] |
| [FND-003] | [Finding description] | [Severity] | [IRP Section] | [Owner] | [Date] | [Status] |

### 5.3 Improvement Actions Log

*Capture actionable recommendations arising from the test that require updates to the IRP, runbooks, technology controls, or training.*

| Action ID | Recommended Action | Category | Priority | Assigned To | Due Date | Completion Date | Evidence of Closure |
|---|---|---|---|---|---|---|---|
| [ACT-001] | [Actionable recommendation] | [IRP Update / Training / Technical Control / Process] | [High / Medium / Low] | [Owner] | [Date] | [Date or Pending] | [Link / Reference] |
| [ACT-002] | [Recommendation] | [Category] | [Priority] | [Owner] | [Date] | [Date or Pending] | [Reference] |

---

## 6. Last Review Date

*Record the review history of this testing record and associated IRP document versions. This section provides an auditable trail demonstrating that testing records are periodically validated and that findings are tracked to closure.*

### 6.1 Testing Record Review Log

*This section must be updated following each quarterly review or upon completion of a new test event, whichever occurs first.*

| Review Date | Reviewed By | Role | Review Type | Outcome / Notes |
|---|---|---|---|---|
| [DD MMM YYYY] | [Name] | [QA Lead / Risk Officer] | [Quarterly Review / Post-Event Review] | [e.g., All prior findings closed; new test scheduled for Q2] |
| [DD MMM YYYY] | [Name] | [Role] | [Review Type] | [Notes] |
| [DD MMM YYYY] | [Name] | [Role] | [Review Type] | [Notes] |

### 6.2 IRP Version Review History Referenced

| IRP Version | IRP Review Date | Changes from Prior Version | Tested Against This Record |
|---|---|---|---|
| [v1.0] | [DD MMM YYYY] | [Initial release] | [Yes / No] |
| [v1.1] | [DD MMM YYYY] | [Description of changes] | [Yes / No] |
| [v2.0] | [DD MMM YYYY] | [Major revision — describe] | [Yes / No] |

### 6.3 Next Scheduled Review

| Field | Details |
|---|---|
| **Next Review Due** | [DD MMM YYYY] |
| **Review Trigger** | [Quarterly Schedule / Next Test Event / Material Change to IRP] |
| **Responsible Reviewer** | [Name], QA Lead |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for IRP testing record creation, maintenance, and escalation across [Organization Name].*

### 7.1 RACI Matrix

| Activity | QA Lead | CISO | Technology Risk | IT/SOC Team | Business Units | Internal Audit | Board / Risk Committee |
|---|---|---|---|---|---|---|---|
| Plan and schedule IRP tests | **A/R** | C | C | I | I | I | I |
| Design test scenarios | R | A | C | C | C | I | I |
| Facilitate tabletop / simulation | **A/R** | I | C | R | R | O | I |
| Record test observations and findings | **A/R** | I | C | R | C | I | I |
| Assign and track remediation actions | **A/R** | I | C | R | R | I | I |
| Review and approve testing record | A | **A** | C | I | I | R | I |
| Report results to governance bodies | C | **R** | R | I | I | C | **A** |
| Archive evidence in repository | **R** | I | C | I | I | I | I |
| Quarterly record review | **A/R** | I | C | I | I | C | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed | O = Observer

### 7.2 Role Definitions

| Role | Responsibility Summary |
|---|---|
| **QA Lead** | Owns the IRP testing programme; maintains this record; ensures findings are tracked to closure |
| **CISO** | Accountable for the overall IRP and its adequacy; approves testing records |
| **Technology Risk** | Provides risk-based input on scenario design and finding severity ratings |
| **IT / SOC Team** | Participates in exercises; implements technical remediation actions |
| **Business Units** | Participate as relevant stakeholders; validate business recovery procedures |
| **Internal Audit** | Reviews testing records as part of audit scope; validates evidence completeness |
| **Board / Risk Committee** | Receives summary reporting on IRP test outcomes; provides governance oversight |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Name], QA Lead | Initial document creation |
| [1.1] | [DD MMM YYYY] | [Name] | [Description of changes made] |
| [2.0] | [DD MMM YYYY] | [Name] | [Description of major revision] |

### 8.2 Approval Sign-Off

*This record requires the following approvals before it is considered final and submitted as regulatory evidence.*

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead (Preparer) | [Name] | [Signature] | [DD MMM YYYY] |
| CISO (Approver) | [Name] | [Signature] | [DD MMM YYYY] |
| Technology Risk Officer (Reviewer) | [Name] | [Signature] | [DD MMM YYYY] |
| Chief Risk Officer (Endorser) | [Name] | [Signature] | [DD MMM YYYY] |

---

## 9. References

The following regulatory instruments, internal policies, and standards inform this document:

| Reference | Document / Clause | Issuing Body | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology, **Clause 11.1** | Bank Negara Malaysia | Mandatory IRP testing requirements |
| BNM RMiT | Risk Management in Technology, Clause 10.x | Bank Negara Malaysia | Technology incident management framework |
| BNM/RH/PD 028-107 | RMiT Policy Document (latest version) | Bank Negara Malaysia | Overarching technology risk governance |
| [Internal Policy] | Incident Response Plan (IRP) v[X.X] | [Organization Name] | Primary document under test |
| [Internal Policy] | Business Continuity Plan (BCP) | [Organization Name] | Supporting reference for recovery procedures |
| [Internal Policy] | Technology Risk Management Policy | [Organization Name] | Governance framework context |
| ISO/IEC 27035 | Information Security Incident Management | ISO/IEC | Best practice reference for IRP design |
| NIST SP 800-61 | Computer Security Incident Handling Guide | NIST | Supporting technical reference |

---

## 10. Appendices

### Appendix A — Test Scenario Injects Log

*Attach or link the full scenario inject script used during the tabletop exercise or simulation, including the sequence of events presented to participants and facilitator notes.*

> **[ATTACH: Scenario Inject Script — Test Event [TRP-YYYY-NNN]]**

| Inject # | Time (T+) | Inject Description | Delivered By | Participant Response | Facilitator Notes |
|---|---|---|---|---|---|
| 1 | T+00:00 | [Initial scenario trigger presented] | [Facilitator] | [Summary of participant response] | [Notes] |
| 2 | T+00:30 | [Second inject — complicating factor introduced] | [Facilitator] | [Response] | [Notes] |
| 3 | T+01:00 | [Third inject] | [Facilitator] | [Response] | [Notes] |

---

### Appendix B — Attendance Register

*Original signed attendance sheet from the test event. Retain physical or digitally signed copy as evidence.*

> **[ATTACH: Signed Attendance Register — Test Event [TRP-YYYY-NNN], [DD MMM YYYY]]**

---

### Appendix C — Evidence Artefacts

*List all supporting evidence collected during or after the IRP test, including screenshots, communication logs, decision timelines, and system outputs.*

| Artefact ID | Description | Format | Location / Reference | Collected By | Date Collected |
|---|---|---|---|---|---|
| [EVD-001] | [e.g., Communication log extract from test event] | [PDF / Screenshot / Log File] | [Repository path or link] | [Name] | [DD MMM YYYY] |
| [EVD-002] | [e.g., Timeline reconstruction worksheet] | [Format] | [Location] | [Name] | [Date] |
| [EVD-003] | [e.g., Post-exercise survey results] | [Format] | [Location] | [Name] | [Date] |

---

### Appendix D — Post-Exercise Survey Summary

*Summarise participant feedback collected via post-exercise survey to inform continuous improvement of the IRP testing programme.*

| Question | Average Rating (1–5) | Key Themes from Responses |
|---|---|---|
| Overall realism of the scenario | [X.X] | [Summary of feedback] |
| Clarity of facilitator instructions | [X.X] | [Summary] |
| Effectiveness of IRP procedures tested | [X.X] | [Summary] |
| Confidence in incident response capability | [X.X] | [Summary] |
| Suggested improvements | N/A | [Summary of improvement suggestions] |

---

### Appendix E — Regulatory Submission Log

*Record any instances where this test record or its summary was submitted to BNM or other regulatory bodies.*

| Submission Date | Submitted To | Submission Reference | Submitted By | Outcome / Response |
|---|---|---|---|---|
| [DD MMM YYYY] | [e.g., Bank Negara Malaysia] | [Reference number] | [Name, Title] | [e.g., Acknowledged / No objection raised] |

---

*End of Document*

---

> **Document Control Notice:** This document is classified **Confidential**. It must be handled in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited. Retain this record for a minimum of **[X] years** in accordance with applicable BNM record-keeping requirements and internal data retention policies.