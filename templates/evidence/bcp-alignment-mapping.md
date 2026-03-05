# BCP Alignment Mapping

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Scope of Alignment](#2-objectives-and-scope-of-alignment)
3. [Actions and Milestones](#3-actions-and-milestones)
4. [Accountable Owners](#4-accountable-owners)
5. [Business Impact Analysis](#5-business-impact-analysis)
6. [Recovery Priority Tiers](#6-recovery-priority-tiers)
7. [Testing Schedule and Results](#7-testing-schedule-and-results)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

This document provides an evidence-based mapping demonstrating the alignment between [Organization Name]'s IT Continuity Plan (ITCP) and its Business Continuity Plan (BCP). It is maintained in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.30**, which requires financial institutions to ensure that IT continuity arrangements are integrated with and support overarching business continuity objectives.

This mapping serves as a primary audit artifact to demonstrate to BNM examiners, internal auditors, and senior management that:

- IT recovery capabilities are aligned to business recovery priorities;
- Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) defined in the ITCP are consistent with, and do not exceed, those committed to in the BCP;
- Gaps between IT and business continuity plans are identified, tracked, and remediated; and
- Alignment is validated through periodic and event-driven reviews.

**In-Scope Systems and Business Functions:**

*List all critical business functions and their supporting IT systems covered by this mapping. This section defines the boundary of the alignment exercise.*

| Business Function | Supporting IT Systems / Applications | BCP Reference | ITCP Reference |
|---|---|---|---|
| [e.g., Core Banking Operations] | [e.g., Core Banking System, Payment Gateway] | [BCP Section X.X] | [ITCP Section X.X] |
| [e.g., Treasury and Liquidity Management] | [e.g., Treasury Management System] | [BCP Section X.X] | [ITCP Section X.X] |
| [e.g., Customer Channels (Internet/Mobile Banking)] | [e.g., Digital Banking Platform, API Gateway] | [BCP Section X.X] | [ITCP Section X.X] |
| [e.g., Interbank Settlement] | [e.g., RENTAS Interface, PayNet Connector] | [BCP Section X.X] | [ITCP Section X.X] |
| [e.g., Regulatory Reporting] | [e.g., Reporting Engine, Data Warehouse] | [BCP Section X.X] | [ITCP Section X.X] |

**Out of Scope:**

*Identify any systems, processes, or business units explicitly excluded from this alignment mapping and the rationale for their exclusion.*

- [e.g., Non-critical internal administrative systems with RTO > 72 hours]
- [e.g., Development and test environments]

---

## 2. Objectives and Scope of Alignment

*This section articulates the specific objectives of the BCP-ITCP alignment exercise and defines the criteria used to determine whether alignment is achieved or a gap exists.*

### 2.1 Alignment Objectives

The BCP Alignment Mapping aims to achieve the following objectives:

1. **Validate RTO/RPO Consistency** — Confirm that ITCP-defined RTOs and RPOs for all critical systems are equal to or more aggressive than the RTOs and RPOs stated in the BCP for dependent business functions.
2. **Ensure Coverage Completeness** — Verify that every critical business function identified in the BCP has a corresponding IT recovery arrangement documented in the ITCP.
3. **Identify and Track Gaps** — Document any misalignments, coverage gaps, or dependency risks between the BCP and ITCP and assign remediation ownership and timelines.
4. **Support Regulatory Compliance** — Demonstrate compliance with BNM RMiT Clause 10.30 and provide evidence of integrated technology and business continuity governance.
5. **Enable Informed Decision-Making** — Provide senior management with a consolidated view of continuity posture to support escalation and resource prioritisation decisions.

### 2.2 Alignment Criteria

*Define the specific criteria against which alignment is assessed. The criteria below are illustrative; adjust to reflect the institution's internal standards.*

| Alignment Dimension | Aligned Criteria | Misaligned / Gap Criteria |
|---|---|---|
| **RTO** | ITCP System RTO ≤ BCP Business Function RTO | ITCP System RTO > BCP Business Function RTO |
| **RPO** | ITCP System RPO ≤ BCP Business Function RPO | ITCP System RPO > BCP Business Function RPO |
| **Coverage** | All BCP-listed functions have a corresponding ITCP entry | One or more BCP functions lack an ITCP entry |
| **Dependencies** | All system interdependencies documented and recovery-sequenced | Undocumented dependencies that could invalidate recovery sequence |
| **Testing** | Joint BCP/ITCP tests conducted at least annually | No joint test conducted within the past 12 months |

### 2.3 Current Alignment Status Summary

*Provide a high-level dashboard of overall alignment status as at the last review date.*

| Status | Count | Percentage |
|---|---|---|
| Fully Aligned | [X] | [X]% |
| Partially Aligned (Minor Gap) | [X] | [X]% |
| Not Aligned (Critical Gap) | [X] | [X]% |
| **Total Business Functions Assessed** | **[X]** | **100%** |

**Overall Alignment Rating:** [Green / Amber / Red]

---

## 3. Actions and Milestones

*This section documents the detailed BCP-ITCP alignment mapping matrix, including identified gaps, remediation actions, target milestones, and current status. Update this section following each review cycle or triggering event.*

### 3.1 BCP-ITCP Alignment Matrix

*For each critical business function, record the alignment status, the source of any gap, and the remediation action required. This is the core evidence table for RMiT Clause 10.30 compliance.*

| Ref | Business Function | BCP RTO | BCP RPO | ITCP System RTO | ITCP System RPO | RTO Aligned | RPO Aligned | Gap Description | Remediation Action | Target Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ALN-001 | [Core Banking Operations] | [4 hrs] | [1 hr] | [4 hrs] | [1 hr] | Yes | Yes | None | N/A | N/A | Aligned |
| ALN-002 | [Treasury Management] | [2 hrs] | [15 min] | [4 hrs] | [30 min] | **No** | **No** | ITCP RTO and RPO exceed BCP commitment | Upgrade DR replication for Treasury system; review ITCP targets | [Target Date] | In Progress |
| ALN-003 | [Internet Banking] | [1 hr] | [30 min] | [1 hr] | [30 min] | Yes | Yes | None | N/A | N/A | Aligned |
| ALN-004 | [Regulatory Reporting] | [24 hrs] | [4 hrs] | [N/A — not in ITCP] | [N/A] | **No** | **No** | Reporting system not included in current ITCP scope | Add Reporting Engine to ITCP; document recovery procedure | [Target Date] | Open |
| [ALN-00X] | [Business Function] | [X hrs] | [X min] | [X hrs] | [X min] | [Yes/No] | [Yes/No] | [Description or None] | [Action or N/A] | [Date] | [Status] |

### 3.2 Gap Remediation Milestones

*Summarise all open gap remediation actions with milestone tracking. This table is the primary tracking mechanism for closure of alignment gaps.*

| Gap Ref | Gap Description | Severity | Accountable Owner | Milestone 1 | Milestone 2 | Milestone 3 | Completion Target | Completion Date |
|---|---|---|---|---|---|---|---|---|
| GAP-001 | [Treasury ITCP RTO/RPO exceeds BCP] | High | [System Owner Name] | [e.g., DR replication assessment complete — DD/MM/YYYY] | [e.g., Architecture change approved — DD/MM/YYYY] | [e.g., Implementation and test complete — DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or Open] |
| GAP-002 | [Regulatory Reporting not in ITCP scope] | Medium | [IT Operations Lead] | [e.g., System criticality assessment — DD/MM/YYYY] | [e.g., ITCP section drafted — DD/MM/YYYY] | [e.g., Reviewed and approved — DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY or Open] |
| [GAP-00X] | [Description] | [High/Med/Low] | [Owner] | [Milestone] | [Milestone] | [Milestone] | [Date] | [Date or Open] |

---

## 4. Accountable Owners

*This section identifies the named individuals responsible for owning each business function's continuity planning, the corresponding IT system owners, and the alignment mapping itself. Ownership must be assigned to specific roles and individuals, not teams or departments.*

### 4.1 Business Function and IT System Ownership Register

| Business Function | Business Continuity Owner (BCP) | IT System Owner (ITCP) | Alignment Review Owner | Escalation Contact |
|---|---|---|---|---|
| [Core Banking Operations] | [Name, Title] | [Name, Title] | [Name, Title] | [Name, Title] |
| [Treasury Management] | [Name, Title] | [Name, Title] | [Name, Title] | [Name, Title] |
| [Internet Banking] | [Name, Title] | [Name, Title] | [Name, Title] | [Name, Title] |
| [Regulatory Reporting] | [Name, Title] | [Name, Title] | [Name, Title] | [Name, Title] |
| [Add rows as required] | | | | |

### 4.2 Document Ownership

| Role | Assigned To | Responsibilities |
|---|---|---|
| **Document Owner** | Head of IT Operations, [Name] | Maintains and updates this mapping; escalates gaps; ensures review schedule is met |
| **BCP Coordinator** | [Name, Title] | Provides BCP RTO/RPO inputs; validates business function coverage |
| **ITCP Coordinator** | [Name, Title] | Provides ITCP system recovery targets; confirms technical feasibility |
| **Reviewer** | Chief Risk Officer / Head of Risk | Reviews alignment findings and approves remediation plans |
| **Approver** | [CIO / COO / Board Risk Committee] | Final approval of this mapping document and significant gap remediation plans |

---

## 5. Business Impact Analysis

*This section summarises the Business Impact Analysis (BIA) findings that underpin the RTO/RPO commitments in the BCP and, by extension, the alignment targets for the ITCP. The BIA should be reviewed at least annually or following material changes to the business.*

### 5.1 BIA Summary

*Reference the full BIA document. Summarise the maximum tolerable downtime (MTD) and minimum business continuity objectives for each critical function.*

| Business Function | Maximum Tolerable Downtime (MTD) | RTO Target | RPO Target | Financial Impact (per hour) | Reputational Impact | Regulatory Impact | BIA Last Reviewed |
|---|---|---|---|---|---|---|---|
| [Core Banking Operations] | [8 hrs] | [4 hrs] | [1 hr] | [RM X million] | [Critical] | [Critical — Payment system obligations] | [DD/MM/YYYY] |
| [Treasury Management] | [4 hrs] | [2 hrs] | [15 min] | [RM X million] | [High] | [High — Liquidity reporting to BNM] | [DD/MM/YYYY] |
| [Internet Banking] | [2 hrs] | [1 hr] | [30 min] | [RM X thousand] | [High] | [Medium] | [DD/MM/YYYY] |
| [Regulatory Reporting] | [48 hrs] | [24 hrs] | [4 hrs] | [N/A — Penalty risk] | [Medium] | [High — Statutory deadlines] | [DD/MM/YYYY] |
| [Add rows as required] | | | | | | | |

### 5.2 Key BIA Assumptions and Dependencies

*Document the key assumptions underpinning the BIA findings and any critical single points of failure or external dependencies that could affect recovery.*

- **Assumption 1:** [e.g., Disaster Recovery site at [Location] is fully operational and synchronised at the time of invocation.]
- **Assumption 2:** [e.g., Minimum staff complement of [X] personnel are available to operate critical systems at the DR site.]
- **Assumption 3:** [e.g., Third-party service providers for [Service] will meet their contracted SLA recovery obligations.]
- **Critical Dependency 1:** [e.g., RENTAS connectivity — availability of PayNet link at DR site is required for settlement functions.]
- **Critical Dependency 2:** [e.g., Cloud provider regional availability — Internet Banking platform depends on [Provider] [Region].]

### 5.3 BIA Document Reference

| BIA Document | Version | Date | Owner | Location |
|---|---|---|---|---|
| Business Impact Analysis — [Organization Name] | [Version] | [DD/MM/YYYY] | [Owner Name] | [Document Repository Path / DMS Reference] |

---

## 6. Recovery Priority Tiers

*This section defines the tiered prioritisation model used to sequence IT system recovery during a continuity event. Priority tiers must be directly derived from BIA findings and reflected consistently in both the BCP and ITCP.*

### 6.1 Recovery Priority Tier Definitions

| Tier | Label | RTO Range | RPO Range | Description |
|---|---|---|---|---|
| **Tier 1** | Mission Critical | 0 – 4 hours | 0 – 1 hour | Systems whose failure would immediately impair core business operations, regulatory obligations, or financial settlement. Recovery must commence immediately upon incident declaration. |
| **Tier 2** | Business Critical | 4 – 12 hours | 1 – 4 hours | Systems that support important business functions. Short-term manual workarounds may be possible but are not sustainable. Recovery must begin within the first operational period. |
| **Tier 3** | Important | 12 – 24 hours | 4 – 24 hours | Systems that support significant but non-time-critical functions. Manual processes can sustain operations for a limited period. |
| **Tier 4** | Non-Critical | > 24 hours | > 24 hours | Systems with low business impact or for which extended downtime is acceptable. Recovery is scheduled after Tier 1–3 systems are restored. |

### 6.2 System Recovery Priority Register

*Assign each in-scope system to a recovery tier. Ensure tier assignments are consistent between the BCP and ITCP.*

| Tier | System / Application | Business Function Supported | BCP Tier Assignment | ITCP Tier Assignment | Aligned | Notes |
|---|---|---|---|---|---|---|
| 1 | [Core Banking System] | Core Banking Operations | Tier 1 | Tier 1 | Yes | |
| 1 | [RENTAS / PayNet Interface] | Interbank Settlement | Tier 1 | Tier 1 | Yes | |
| 1 | [Treasury Management System] | Treasury Management | Tier 1 | Tier 2 | **No** | ITCP tier mis-assignment — see GAP-001 |
| 2 | [Internet Banking Platform] | Customer Digital Channels | Tier 2 | Tier 2 | Yes | |
| 2 | [Mobile Banking Platform] | Customer Digital Channels | Tier 2 | Tier 2 | Yes | |
| 3 | [Reporting Engine] | Regulatory Reporting | Tier 2 | Not Assigned | **No** | Not in ITCP — see GAP-002 |
| 4 | [HR System] | Human Resources | Tier 4 | Tier 4 | Yes | Out of scope for this review |
| [Add rows] | | | | | | |

### 6.3 Recovery Sequencing

*Describe the agreed recovery sequence for each tier, including any interdependencies that dictate the order in which systems must be recovered.*

**Tier 1 Recovery Sequence:**
1. [e.g., Network and connectivity infrastructure — DR site activation]
2. [e.g., Core Banking System database restoration and validation]
3. [e.g., RENTAS/PayNet interface connectivity confirmation]
4. [e.g., Treasury Management System — *pending gap remediation*]

**Tier 2 Recovery Sequence:**
1. [e.g., Internet Banking Platform — dependent on Core Banking System (Step 2 above)]
2. [e.g., Mobile Banking Platform]
3. [e.g., Additional Tier 2 systems in order of business priority]

**Tier 3 Recovery Sequence:**
1. [e.g., Regulatory Reporting Engine — *pending gap remediation to assign ITCP entry*]
2. [e.g., Additional Tier 3 systems]

---

## 7. Testing Schedule and Results

*This section documents the schedule for joint BCP/ITCP testing exercises and records the results, findings, and remediation actions arising from each test. BNM RMiT requires that IT continuity plans be tested regularly to validate their effectiveness and alignment with business continuity objectives.*

### 7.1 Annual Testing Schedule

*Define the planned testing activities for the current year. Tests should include scenarios that validate the BCP-ITCP alignment, not merely individual IT recovery procedures in isolation.*

| Test ID | Test Name / Scenario | Test Type | Planned Date | Systems / Functions in Scope | Test Participants | Status |
|---|---|---|---|---|---|---|
| TEST-2026-01 | Full DR Failover — Core Banking | Live Failover | [DD/MM/YYYY] | Core Banking System, RENTAS Interface | IT Operations, Core Banking Team, Business Continuity Team | [Planned / Completed] |
| TEST-2026-02 | Table-Top Exercise — Cyber Incident BCP/ITCP Walkthrough | Table-Top | [DD/MM/YYYY] | All Tier 1 and Tier 2 Systems | Executive Leadership, IT, Risk, Compliance, Business Units | [Planned / Completed] |
| TEST-2026-03 | Partial Failover — Internet and Mobile Banking | Partial Failover | [DD/MM/YYYY] | Internet Banking Platform, Mobile Banking Platform | IT Operations, Digital Banking Team | [Planned / Completed] |
| TEST-2026-04 | Communication and Notification Test | Communications Drill | [DD/MM/YYYY] | N/A — process test | All Business Continuity stakeholders | [Planned / Completed] |
| [TEST-YYYY-XX] | [Test Name] | [Type] | [Date] | [Scope] | [Participants] | [Status] |

### 7.2 Test Results Register

*Record the outcomes, issues identified, and post-test remediation actions for each completed test. This register is a key evidence artifact for regulatory examination.*

| Test ID | Test Date | Test Name | Overall Result | Objectives Met | Issues / Findings | Remediation Actions | Remediation Owner | Remediation Target Date | Remediation Status |
|---|---|---|---|---|---|---|---|---|---|
| TEST-2025-01 | [DD/MM/YYYY] | [Full DR Failover — Core Banking] | [Pass / Partial Pass / Fail] | [X of Y] | [e.g., Core Banking RTO achieved. RENTAS connectivity took 45 min vs. 30 min target.] | [e.g., Review network configuration at DR site; add pre-check steps to ITCP runbook.] | [Name, Title] | [DD/MM/YYYY] | [Open / Closed] |
| TEST-2025-02 | [DD/MM/YYYY] | [Table-Top Exercise] | [Pass / Partial Pass / Fail] | [X of Y] | [e.g., Decision escalation path for invoking BCP was unclear to two business units.] | [e.g., Update BCP communication tree; conduct targeted awareness session.] | [Name, Title] | [DD/MM/YYYY] | [Open / Closed] |
| [Add rows as required] | | | | | | | | | |

### 7.3 Testing Observations and Trend Analysis

*Summarise recurring themes, improvement trends, and persistent weaknesses identified across multiple test cycles. This narrative supports management reporting and demonstrates continuous improvement.*

- **Observation 1:** [e.g., Network connectivity at the DR site has been a recurring finding across two consecutive test cycles. A formal infrastructure review has been commissioned — refer to GAP-001 remediation plan.]
- **Observation 2:** [e.g., BCP/ITCP awareness among business unit representatives has improved following targeted training delivered in [Month/Year]. No escalation pathway issues were recorded in the most recent test.]
- **Overall Trend:** [Improving / Stable / Deteriorating] — [Brief narrative supporting the assessment.]

---

## 8. Roles and Responsibilities

*This section defines the roles involved in the creation, maintenance, review, and governance of the BCP Alignment Mapping, presented in RACI format.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of IT Operations | CIO | Chief Risk Officer | Business Continuity Manager | IT System Owners | Business Unit Heads | Internal Audit | Board / Risk Committee |
|---|---|---|---|---|---|---|---|---|
| Maintain BCP Alignment Mapping | R | A | C | C | C | I | I | I |
| Conduct BIA review | C | I | A | R | C | R | I | I |
| Assign and update recovery priority tiers | R | A | C | C | R | C | I | I |
| Identify and log alignment gaps | R | I | C | C | R | I | I | I |
| Approve gap remediation plans | C | A | R | C | C | I | I | I |
| Execute remediation actions | R | I | I | C | R | I | I | I |
| Schedule and coordinate continuity tests | R | A | C | R | C | C | I | I |
| Review and approve test results | C | A | R | C | C | I | C | I |
| Report alignment status to Board/Risk Committee | I | R | R | C | I | I | I | A |
| Annual review and re-approval of this document | R | A | C | C | C | I | C | I |
| Event-triggered review | R | A | C | C | R | C | I | I |

---

## 9. Review and Approval

### 9.1 Review Triggers

This document shall be reviewed:

- **Periodically:** At least **quarterly** or as scheduled in the annual BCP/ITCP review calendar, whichever is earlier.
- **Per-event:** Following any of the triggering events below:
  - Activation of the BCP or ITCP in response to a real incident;
  - Completion of a continuity test exercise;
  - Material changes to critical business processes, systems, or infrastructure;
  - Changes to BNM RMiT requirements or related regulatory guidance;
  - Significant organisational restructuring or mergers and acquisitions; or
  - Identification of a critical alignment gap that materially affects recovery capability.

### 9.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Title] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name, Title] | [e.g., Updated alignment matrix following Q1 review; added GAP-002] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Title] | [e.g., Full review following annual BIA refresh; revised recovery tiers for Treasury function] |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations (Document Owner) | [Name] | | [DD/MM/YYYY] |
| Chief Information Officer | [Name] | | [DD/MM/YYYY] |
| Chief Risk Officer | [Name] | | [DD/MM/YYYY] |
| Business Continuity Manager | [Name] | | [DD/MM/YYYY] |

---

## 10. References

The following regulatory instruments, policies, and internal documents are referenced in or underpin this BCP Alignment Mapping:

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document | **Clause 10.30** | Primary regulatory obligation for IT-business continuity alignment |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document | Clause 10.28 – 10.29 | IT continuity planning requirements |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document | Clause 10.31 – 10.32 | IT continuity testing requirements |
| **Internal** | [Organization Name] Business Continuity Plan | All | Source of BCP RTO/RPO commitments and business function prioritisation |
| **Internal** | [Organization Name] IT Continuity Plan | All | Source of ITCP system recovery targets and procedures |
| **Internal** | [Organization Name] Business Impact Analysis | All | Source of MTD, RTO, and RPO requirements |
| **Internal** | [Organization Name] IT Disaster Recovery Plan | All | Detailed technical recovery procedures referenced by the ITCP |
| **Internal** | [Organization Name] Risk Management Framework | [Section] | Overarching risk governance context |

---

## 11. Appendices

### Appendix A — Glossary of Terms

| Term | Definition |
|---|---|
| **BCP** | Business Continuity Plan — a documented plan for maintaining essential business functions during and after a disruptive incident. |
| **BIA** | Business Impact Analysis — the process of analysing business functions to determine the impact of an interruption and to quantify recovery time requirements. |
| **DR** | Disaster Recovery — the process, policies, and procedures for restoring IT systems and data following a disruptive event. |
| **ITCP** | IT Continuity Plan — the plan governing the recovery and continuity of IT systems and services to support business continuity objectives. |
| **MTD** | Maximum Tolerable Downtime — the maximum period of time an organisation can tolerate the disruption of a business function before it causes unacceptable consequences. |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time; defines how far back in time recovery must reach. |
| **RTO** | Recovery Time Objective — the maximum acceptable time within which a system, application, or function must be restored after a disruption. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |
| [Add terms as required] | |

### Appendix B — Alignment Gap Tracking Log (Detailed)

*Attach or reference the detailed gap tracking log maintained in [Document Management System / Issue Tracker Name]. The log should capture full gap details, evidence of remediation activities, and closure confirmation.*

- **Gap Log Location:** [Document Repository Path / JIRA/ServiceNow Reference / SharePoint Link]
- **Log Owner:** Head of IT Operations
- **Review Frequency:** Monthly until all critical and high-severity gaps are closed

### Appendix C — Test Evidence Repository

*Reference the repository where test evidence artefacts (test plans, test scripts, screenshots, attendee records, and post-test reports) are stored.*

- **Evidence Repository:** [Document Repository Path / Network Share / DMS Reference]
- **Repository Owner:** Business Continuity Manager
- **Retention Period:** [e.g., 7 years, in accordance with [Organization Name] Records Retention Policy]

### Appendix D — Cross-Reference to Related BCP/ITCP Documents

| Document | Version | Location | Owner |
|---|---|---|---|
| Business Continuity Plan | [Version] | [Path / DMS Reference] | [Owner] |
| IT Continuity Plan | [Version] | [Path / DMS Reference] | [Owner] |
| IT Disaster Recovery Plan | [Version] | [Path / DMS Reference] | [Owner] |
| Business Impact Analysis | [Version] | [Path / DMS Reference] | [Owner] |
| Crisis Management Plan | [Version] | [Path / DMS Reference] | [Owner] |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact the Document Owner at [contact details].*