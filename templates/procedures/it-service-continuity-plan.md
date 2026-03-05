# IT Service Continuity Plan

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Scope](#2-objectives-and-scope)
3. [Actions and Milestones](#3-actions-and-milestones)
4. [Accountable Owners](#4-accountable-owners)
5. [Business Impact Analysis](#5-business-impact-analysis)
6. [Recovery Priority Tiers](#6-recovery-priority-tiers)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Testing Schedule and Results](#8-testing-schedule-and-results)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This IT Service Continuity Plan (ITSCP) establishes the framework, procedures, and responsibilities required to ensure the continued availability of critical IT services during disruptions, outages, or disasters affecting [Organization Name]'s technology infrastructure.

This document is prepared in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.30, which mandates that financial institutions maintain documented service continuity arrangements to safeguard operational resilience and protect the interests of customers and stakeholders.

### 1.2 Scope

*Define the boundaries of this plan — which systems, services, departments, and geographies are covered. Clearly state what is out of scope.*

**In Scope:**

- All IT systems and infrastructure classified as critical or high-impact in accordance with [Organization Name]'s IT Asset Classification Policy
- Technology services supporting core banking operations, payment systems, customer-facing digital channels, and regulatory reporting
- IT infrastructure components including but not limited to: data centres, networks, servers, storage, end-user computing, and cloud services
- Managed service providers and third-party technology vendors providing critical services
- All staff within the IT Operations, IT Security, and Business Technology functions

**Out of Scope:**

- Business continuity arrangements for non-technology functions (refer to [Organization Name] Business Continuity Plan — [Document Reference])
- Physical security and facilities management continuity (refer to [Facilities BCP — Document Reference])
- [Any other exclusions relevant to the organization]

### 1.3 Regulatory Context

This plan is developed and maintained to comply with the following regulatory requirements:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.30 | IT service continuity plans must be documented, tested, and maintained to ensure critical services remain available during disruptions |
| BNM RMiT Policy Document | Clause 10.28 | Recovery time and recovery point objectives must be defined for critical systems |
| BNM RMiT Policy Document | Clause 10.29 | Continuity arrangements must be reviewed and tested at least annually |
| [Additional Regulation] | [Clause] | [Summary] |

---

## 2. Objectives and Scope

### 2.1 Plan Objectives

*State the specific, measurable objectives this plan is designed to achieve. Objectives should be outcome-oriented and tied to regulatory expectations and organizational risk appetite.*

This IT Service Continuity Plan is designed to achieve the following objectives:

1. **Minimize Service Disruption:** Ensure that critical IT services are restored within defined Recovery Time Objectives (RTOs) to minimize the impact on customers, business operations, and regulatory obligations.

2. **Protect Data Integrity:** Ensure that data loss is constrained within defined Recovery Point Objectives (RPOs) to maintain the integrity and accuracy of [Organization Name]'s financial and operational records.

3. **Maintain Regulatory Compliance:** Ensure continued ability to meet BNM reporting obligations and other statutory requirements during and immediately following a disruption event.

4. **Preserve Customer Trust:** Maintain service levels for critical customer-facing channels, including [e.g., internet banking, mobile banking, ATM networks], to the greatest extent possible during a disruption.

5. **Enable Coordinated Response:** Provide a single, authoritative reference document for IT and business teams to execute a structured, coordinated recovery response.

6. **Support Continuous Improvement:** Establish a testing and review cycle that identifies gaps and strengthens continuity capabilities over time.

### 2.2 Plan Assumptions and Dependencies

*Document the conditions and dependencies that must hold true for this plan to function as intended. Flag any single points of failure.*

**Assumptions:**

- Alternate data centre / disaster recovery (DR) site at [DR Site Location] is available and operational
- Minimum [X]% of IT Operations staff are reachable and able to perform recovery duties
- Communications infrastructure (mobile networks, out-of-band channels) remain functional
- Third-party vendors are subject to their own continuity arrangements consistent with contracted SLAs
- [Additional assumptions]

**Critical Dependencies:**

| Dependency | Provider / Owner | Contingency if Unavailable |
|---|---|---|
| Primary Data Centre | [Internal / Vendor Name] | Failover to DR site at [Location] |
| Disaster Recovery Site | [Internal / Vendor Name] | [Contingency] |
| Core Banking System | [Vendor Name] | [Contingency] |
| Wide Area Network (WAN) | [Telco / ISP Name] | [Secondary ISP / MPLS path] |
| Cloud Services | [Cloud Provider] | [Contingency] |
| [Dependency] | [Provider] | [Contingency] |

---

## 3. Actions and Milestones

### 3.1 Incident Response and Continuity Activation Framework

*Describe the activation criteria, escalation thresholds, and decision authority for invoking this plan. Include the notification chain and communication tree.*

#### 3.1.1 Activation Criteria

This plan shall be activated when one or more of the following conditions are met:

| Trigger Condition | Threshold | Activating Authority |
|---|---|---|
| Unplanned system outage affecting critical services | Outage duration exceeds [X] minutes | Head of IT Operations |
| Data centre or facility unavailability | Loss of access exceeding [X] hours | Head of IT Operations / CTO |
| Cybersecurity incident causing service disruption | As declared by CISO | CISO / CTO |
| Natural disaster or physical event at primary site | Site declared inaccessible | Crisis Management Team |
| Third-party / vendor critical service failure | SLA breach exceeding [X] hours | Head of IT Operations |
| Pandemic or workforce availability crisis | Key personnel unavailability >  [X]% | Head of IT Operations / CHRO |

#### 3.1.2 Notification and Escalation Chain

*Provide the step-by-step notification sequence to be followed upon detection of a disruption event.*

1. **Detection / Alert** — IT Operations team or monitoring system detects service disruption
2. **Initial Assessment** (within [15] minutes) — On-call engineer assesses scope and severity
3. **Escalation to Incident Commander** (within [30] minutes) — Head of IT Operations notified and assumes Incident Commander role
4. **Stakeholder Notification** (within [1] hour) — Senior management, Business Continuity Manager, and affected business units notified
5. **Plan Activation Decision** (within [1] hour) — Incident Commander formally activates ITSCP
6. **Regulatory Notification** (within [X] hours if required) — Compliance team notifies BNM per regulatory obligation
7. **External Communication** — Corporate Communications manages any customer or media communications

**Emergency Contact List:** Refer to Appendix A — Emergency Contact Directory

### 3.2 Recovery Actions and Milestones

*For each recovery phase, specify the actions to be taken, the target completion time, and the responsible party.*

#### Phase 1: Immediate Response (0 — 4 Hours)

| Milestone | Action | Responsible | Target Time |
|---|---|---|---|
| M1.1 | Declare IT service disruption incident and log in incident management system | IT Operations On-Call | T + 15 min |
| M1.2 | Convene IT Crisis Response Team via [Teams / Bridge call] | Head of IT Operations | T + 30 min |
| M1.3 | Activate war room at [Location / Virtual Channel] | IT Operations Manager | T + 30 min |
| M1.4 | Assess scope of disruption and affected systems | IT Operations / Infrastructure Team | T + 1 hr |
| M1.5 | Initiate failover procedures for Tier 1 critical systems | Infrastructure Lead | T + 2 hr |
| M1.6 | Communicate status to executive leadership and business units | Head of IT Operations | T + 2 hr |
| M1.7 | Validate DR site readiness and connectivity | DR Site / Network Team | T + 3 hr |
| M1.8 | Confirm Tier 1 system recovery and validate functionality | Application / Operations Team | T + 4 hr |

#### Phase 2: Stabilization (4 — 24 Hours)

| Milestone | Action | Responsible | Target Time |
|---|---|---|---|
| M2.1 | Recover Tier 2 critical systems and services | Infrastructure / Application Teams | T + 8 hr |
| M2.2 | Restore data from most recent clean backup within RPO | Database / Storage Team | T + 8 hr |
| M2.3 | Conduct data integrity validation for recovered systems | Database Administrator | T + 12 hr |
| M2.4 | Resume critical business operations from DR / alternate site | Business Unit Leads | T + 12 hr |
| M2.5 | Provide hourly status updates to executive management | Incident Commander | Ongoing |
| M2.6 | Recover Tier 3 systems as capacity permits | Infrastructure Team | T + 24 hr |
| M2.7 | Submit initial incident report to BNM (if required) | Compliance Officer | Per BNM timeline |

#### Phase 3: Recovery and Return to Normal (24 Hours — Resolution)

| Milestone | Action | Responsible | Target Time |
|---|---|---|---|
| M3.1 | Assess and remediate root cause at primary site | Infrastructure / Security Team | [Target] |
| M3.2 | Plan and schedule failback to primary site | Head of IT Operations | [Target] |
| M3.3 | Execute controlled failback with business sign-off | Infrastructure Team + Business Leads | [Target] |
| M3.4 | Validate full system functionality post-failback | All IT Teams | [Target] |
| M3.5 | Declare incident closed and stand down crisis team | Incident Commander | [Target] |
| M3.6 | Initiate post-incident review process | Head of IT Operations | Within 5 business days |
| M3.7 | Submit post-incident report to BNM (if required) | Compliance Officer | Per BNM timeline |

---

## 4. Accountable Owners

### 4.1 Plan Ownership

*Identify the individual and organizational unit accountable for maintaining, updating, and governing this plan.*

| Role | Name | Department | Contact |
|---|---|---|---|
| **Plan Owner** | [Name] | IT Operations | [Email / Phone] |
| **Plan Author** | [Name] | IT Operations | [Email / Phone] |
| **Business Continuity Sponsor** | [Name] | Executive Management | [Email / Phone] |
| **Plan Custodian** | [Name] | IT Governance / Risk | [Email / Phone] |

### 4.2 System and Service Owners

*List the designated owners for each critical IT system covered under this plan. System owners are accountable for ensuring their systems have documented recovery procedures.*

| System / Service | System Owner | Technical Lead | Business Owner |
|---|---|---|---|
| Core Banking System | [Name / Role] | [Name / Role] | [Name / Role] |
| Internet Banking Platform | [Name / Role] | [Name / Role] | [Name / Role] |
| Mobile Banking Application | [Name / Role] | [Name / Role] | [Name / Role] |
| Payment Processing System | [Name / Role] | [Name / Role] | [Name / Role] |
| ATM / CDM Network | [Name / Role] | [Name / Role] | [Name / Role] |
| Card Management System | [Name / Role] | [Name / Role] | [Name / Role] |
| Enterprise Data Warehouse | [Name / Role] | [Name / Role] | [Name / Role] |
| Active Directory / IAM | [Name / Role] | [Name / Role] | [Name / Role] |
| Email and Collaboration | [Name / Role] | [Name / Role] | [Name / Role] |
| Network Infrastructure | [Name / Role] | [Name / Role] | [Name / Role] |
| [Additional System] | [Name / Role] | [Name / Role] | [Name / Role] |

---

## 5. Business Impact Analysis

### 5.1 BIA Methodology

*Describe how the Business Impact Analysis was conducted — including the methodology, data sources, assessment period, and who was involved in the analysis.*

The Business Impact Analysis (BIA) underpinning this plan was conducted using [Organization Name]'s BIA Methodology as documented in [BIA Methodology Document — Reference]. The BIA was last formally reviewed on [Date] and involved consultation with the following stakeholders:

- [Business Unit / Function]
- [Business Unit / Function]
- [IT Operations and Infrastructure Teams]
- [Risk Management and Compliance]

The BIA assessed the impact of IT service disruption across the following dimensions:

| Impact Dimension | Description |
|---|---|
| **Financial Impact** | Direct financial loss, regulatory fines, compensation costs |
| **Regulatory / Legal Impact** | Breach of BNM requirements, statutory obligations, contractual SLAs |
| **Reputational Impact** | Customer confidence, media coverage, market perception |
| **Operational Impact** | Inability to process transactions, serve customers, or fulfil operational duties |
| **Customer Impact** | Denial of service, data exposure, customer harm |

### 5.2 Maximum Tolerable Downtime (MTD) and Recovery Objectives

*For each critical service, document the agreed Maximum Tolerable Downtime, Recovery Time Objective, and Recovery Point Objective. These values must be validated by the relevant business owners.*

| IT Service / System | MTD | RTO | RPO | Validated By | Validation Date |
|---|---|---|---|---|---|
| Core Banking System | [X] hours | [X] hours | [X] minutes | [Business Owner] | [Date] |
| Internet Banking | [X] hours | [X] hours | [X] minutes | [Business Owner] | [Date] |
| Mobile Banking | [X] hours | [X] hours | [X] minutes | [Business Owner] | [Date] |
| Payment Processing (RENTAS) | [X] hours | [X] hours | [X] minutes | [Business Owner] | [Date] |
| ATM / CDM Network | [X] hours | [X] hours | [X] minutes | [Business Owner] | [Date] |
| Card Management System | [X] hours | [X] hours | [X] minutes | [Business Owner] | [Date] |
| Regulatory Reporting Systems | [X] hours | [X] hours | [X] minutes | [Business Owner] | [Date] |
| Enterprise Email | [X] hours | [X] hours | [X] hours | [Business Owner] | [Date] |
| [Additional System] | [X] hours | [X] hours | [X] minutes | [Business Owner] | [Date] |

> **Definitions:**
> - **MTD (Maximum Tolerable Downtime):** The maximum period the business can sustain the loss of a service before unacceptable consequences occur.
> - **RTO (Recovery Time Objective):** The target time within which a service must be restored after a disruption.
> - **RPO (Recovery Point Objective):** The maximum acceptable amount of data loss measured in time.

### 5.3 Impact Assessment Matrix

*Complete the following impact assessment for each critical service based on BIA findings.*

| IT Service | Financial Impact | Regulatory Impact | Reputational Impact | Operational Impact | Overall Impact Rating |
|---|---|---|---|---|---|
| Core Banking System | Critical | Critical | High | Critical | **Critical** |
| Internet Banking | High | High | Critical | High | **Critical** |
| Mobile Banking | High | Medium | High | High | **High** |
| Payment Processing | Critical | Critical | High | Critical | **Critical** |
| ATM / CDM Network | High | High | Critical | High | **Critical** |
| Regulatory Reporting | Medium | Critical | Medium | Medium | **High** |
| Email / Collaboration | Low | Low | Low | Medium | **Medium** |
| [Additional System] | [Rating] | [Rating] | [Rating] | [Rating] | **[Rating]** |

> **Impact Ratings:** Critical | High | Medium | Low

---

## 6. Recovery Priority Tiers

### 6.1 Tiering Framework

*Explain the criteria used to assign systems to recovery priority tiers. Tier assignment must align with BIA findings and be validated by business owners and risk management.*

[Organization Name] classifies IT systems and services into four recovery priority tiers based on their impact rating from the Business Impact Analysis, customer criticality, regulatory obligations, and RTO/RPO requirements. Recovery resources and efforts shall be allocated in tier order during a disruption event.

| Tier | Classification | Description | Target RTO |
|---|---|---|---|
| **Tier 1** | Mission Critical | Services whose unavailability immediately impairs core banking operations, payment processing, or creates regulatory breach | ≤ [X] hours |
| **Tier 2** | Business Critical | Services that are essential to daily operations but can sustain limited downtime without immediate regulatory or financial harm | ≤ [X] hours |
| **Tier 3** | Important | Services supporting significant business functions that can operate manually or on reduced capability for a defined period | ≤ [X] hours |
| **Tier 4** | Non-Critical | Services that can be suspended during a crisis event without material business impact | ≤ [X] hours |

### 6.2 System Recovery Priority Register

*Assign each IT system to its approved recovery tier. This register must be reviewed as part of the annual plan review and updated whenever new systems are onboarded or decommissioned.*

#### Tier 1 — Mission Critical

| System / Service | Recovery Method | RTO | RPO | DR Capability | System Owner |
|---|---|---|---|---|---|
| Core Banking System | Active-Passive Failover to DR Site | [X] hr | [X] min | [Hot / Warm / Cold Standby] | [Name] |
| RENTAS / Payment Processing | [Recovery Method] | [X] hr | [X] min | [Capability] | [Name] |
| ATM / CDM Network | [Recovery Method] | [X] hr | [X] min | [Capability] | [Name] |
| Internet Banking Platform | [Recovery Method] | [X] hr | [X] min | [Capability] | [Name] |
| Card Management System | [Recovery Method] | [X] hr | [X] min | [Capability] | [Name] |
| [Additional System] | [Recovery Method] | [X] hr | [X] min | [Capability] | [Name] |

#### Tier 2 — Business Critical

| System / Service | Recovery Method | RTO | RPO | DR Capability | System Owner |
|---|---|---|---|---|---|
| Mobile Banking Application | [Recovery Method] | [X] hr | [X] min | [Capability] | [Name] |
| Regulatory Reporting Systems | [Recovery Method] | [X] hr | [X] hr | [Capability] | [Name] |
| Enterprise Data Warehouse | [Recovery Method] | [X] hr | [X] hr | [Capability] | [Name] |
| Active Directory / IAM | [Recovery Method] | [X] hr | [X] min | [Capability] | [Name] |
| [Additional System] | [Recovery Method] | [X] hr | [X] hr | [Capability] | [Name] |

#### Tier 3 — Important

| System / Service | Recovery Method | RTO | RPO | DR Capability | System Owner |
|---|---|---|---|---|---|
| Enterprise Email | [Recovery Method] | [X] hr | [X] hr | [Capability] | [Name] |
| HR Information System | [Recovery Method] | [X] hr | [X] hr | [Capability] | [Name] |
| Document Management | [Recovery Method] | [X] hr | [X] hr | [Capability] | [Name] |
| [Additional System] | [Recovery Method] | [X] hr | [X] hr | [Capability] | [Name] |

#### Tier 4 — Non-Critical

| System / Service | Recovery Method | RTO | RPO | System Owner |
|---|---|---|---|---|
| [System Name] | Restore from backup | [X] hr | [X] hr | [Name] |
| [System Name] | Restore from backup | [X] hr | [X] hr | [Name] |

### 6.3 Recovery Sequence

*Document the approved recovery sequence for a full site failover scenario. This sequence must be followed by the IT Crisis Response Team during plan activation.*

The following sequence shall be adhered to during a full DR site activation:

1. **Network Infrastructure** — Establish WAN connectivity to DR site; activate BGP routing changes
2. **Core Authentication Services** — Restore Active Directory / IAM at DR site
3. **Database Servers** — Validate data replication and promote DR database instances
4. **Core Banking System** — Activate DR instance and validate core banking readiness
5. **Payment Processing Systems** — Activate DR payment rails; notify BNM / PayNet as required
6. **ATM / CDM Network** — Redirect ATM network to DR processing environment
7. **Internet and Mobile Banking** — Re-point DNS and load balancers; validate customer access
8. **Regulatory Reporting** — Validate reporting data feeds and submission capability
9. **Secondary Business Systems** — Recover Tier 2 and Tier 3 systems per capacity
10. **End-User Computing and Collaboration** — Restore staff productivity tools

---

## 7. Roles and Responsibilities

### 7.1 IT Continuity Governance Structure

*Describe the governance hierarchy that oversees IT service continuity, from Board-level oversight to operational execution.*

| Role | Responsibility |
|---|---|
| **Board of Directors / Board Risk Committee** | Approve IT continuity policy; receive post-incident reports for material events |
| **Chief Technology Officer (CTO)** | Executive accountability for IT continuity capability; approve plan activation for major incidents |
| **Chief Information Security Officer (CISO)** | Cybersecurity continuity; lead response for security-related disruptions |
| **Head of IT Operations (Plan Owner)** | Maintain and govern this plan; act as Incident Commander during activations |
| **Business Continuity Manager** | Coordinate IT continuity with enterprise BCP; report to Risk Management Committee |
| **IT Operations Manager** | Operational execution of recovery procedures; manage IT Crisis Response Team |
| **Infrastructure Lead** | Lead technical recovery of infrastructure, network, and data centre components |
| **Application Lead** | Lead recovery of business applications and middleware |
| **Database Administrator** | Manage data recovery, validation, and integrity assurance |
| **IT Security Team** | Maintain security controls during DR operations; monitor for threats during recovery |
| **Compliance Officer** | Manage regulatory notification obligations to BNM and other authorities |

### 7.2 RACI Matrix

*The RACI matrix below defines Responsible, Accountable, Consulted, and Informed designations for key IT continuity activities.*

> **Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CTO | Head of IT Ops | IT Ops Manager | Infra Lead | App Lead | DBA | CISO | Compliance | Business Units |
|---|---|---|---|---|---|---|---|---|---|
| Plan development and maintenance | C | A/R | R | C | C | C | C | C | C |
| BIA conduct and review | C | A | R | C | C | C | C | C | R |
| RTO/RPO validation | C | A | R | C | C | C | — | C | R |
| Incident detection and escalation | I | A | R | R | R | R | C | I | I |
| Plan activation decision | A | R | C | C | C | C | C | C | I |
| Technical recovery execution | I | A | R | R | R | R | C | I | I |
| Crisis communications (internal) | C | A | R | I | I | I | C | C | C |
| Regulatory notification to BNM | C | A | I | I | I | I | C | R | I |
| Customer communications | C | C | I | I | I | I | C | C | A |
| DR site management | I | A | R | R | I | I | C | I | I |
| Post-incident review | C | A | R | R | R | R | C | C | C |
| Annual plan review and testing | C | A | R | C | C | C | C | C | C |
| Board / senior management reporting | A | R | C | I | I | I | C | C | I |

---

## 8. Testing Schedule and Results

### 8.1 Testing Strategy

*Describe the overall approach to continuity testing, including test types, frequency, and objectives. Testing must satisfy BNM RMiT Clause 10.29 requirements.*

[Organization Name] adopts a risk-based, progressive testing approach to validate the effectiveness of this IT Service Continuity Plan. Testing is conducted at multiple levels of complexity, from component-level validation to full end-to-end DR exercises.

**Testing Principles:**

- All Tier 1 critical systems must be subject to at least one full failover test annually
- Testing must validate both technical recovery capability and procedural effectiveness
- Test scenarios must reflect realistic and current threat scenarios
- Test results must be documented and gaps remediated within agreed timelines
- Executive management must be briefed on test outcomes annually

### 8.2 Testing Programme

*Complete the annual testing calendar. Testing must be coordinated to minimize business disruption and must involve relevant business stakeholders.*

| Test Type | Description | Frequency | Target Systems | Lead | Scheduled Date |
|---|---|---|---|---|---|
| **Tabletop Exercise** | Structured walkthrough of response procedures with key stakeholders; no live systems | Semi-Annual | All critical services (plan-level) | Head of IT Operations | [Date] / [Date] |
| **Component / Unit Test** | Technical validation of individual DR components (e.g., backup restore, failover switch) | Quarterly | Individual systems on rotation | Infrastructure Lead | [Quarterly dates] |
| **Partial Failover Test** | Controlled failover of selected Tier 1 systems to DR site; business validation included | Semi-Annual | Tier 1 — selected systems | IT Operations Manager | [Date] / [Date] |
| **Full DR Simulation** | End-to-end failover of all Tier 1 and Tier 2 systems to DR site; full business participation | Annual | Tier 1 and Tier 2 systems | Head of IT Operations | [Date] |
| **Backup Restoration Test** | Restore selected datasets from backup media to validate RPO capability | Monthly | All critical databases | DBA | [Monthly dates] |
| **Communication Tree Test** | Validate emergency contact list and escalation chain | Quarterly | All IT Continuity stakeholders | IT Operations Manager | [Quarterly dates] |

### 8.3 Test Result Register

*Record the outcomes of all completed tests. Test results and gap closure must be tracked to completion and presented to the Risk Management Committee.*

| Test ID | Test Type | Test Date | Systems Tested | RTO Achieved | RPO Achieved | Test Outcome | Issues Identified | Remediation Status | Sign-Off |
|---|---|---|---|---|---|---|---|---|---|
| TST-2025-001 | Tabletop Exercise | [Date] | All critical services | N/A | N/A | [Pass / Fail / Partial] | [Summary] | [Open / Closed] | [Name] |
| TST-2025-002 | Backup Restoration | [Date] | Core Banking DB | N/A | [X] min | [Pass / Fail / Partial] | [Summary] | [Open / Closed] | [Name] |
| TST-2025-003 | Partial Failover | [Date] | Core Banking, Payments | [X] hr | [X] min | [Pass / Fail / Partial] | [Summary] | [Open / Closed] | [Name] |
| TST-2025-004 | Full DR Simulation | [Date] | Tier 1 and Tier 2 | [X] hr | [X] min | [Pass / Fail / Partial] | [Summary] | [Open / Closed] | [Name] |
| [Test ID] | [Type] | [Date] | [Systems] | [Achieved] | [Achieved] | [Outcome] | [Issues] | [Status] | [Name] |

### 8.4 Gap and Remediation Tracker

*All gaps identified during testing must be logged and tracked to closure. Open items must be presented to the Head of IT Operations and Risk Management Committee.*

| Gap ID | Source Test | Gap Description | Risk Level | Remediation Action | Responsible Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| GAP-2025-001 | [Test ID] | [Description of gap identified] | Critical / High / Medium / Low | [Action to remediate] | [Name / Role] | [Date] | Open / In Progress / Closed |
| GAP-2025-002 | [Test ID] | [Description of gap identified] | [Risk Level] | [Action] | [Name / Role] | [Date] | [Status] |
| [Gap ID] | [Test ID] | [Description] | [Risk Level] | [Action] | [Owner] | [Date] | [Status] |

---

## 9. Review and Approval

### 9.1 Review Triggers

This plan shall be reviewed:

- **Annually** — As part of the scheduled annual IT continuity review cycle
- **Upon significant change** — Including but not limited to: major system upgrades or decommissions, changes to organizational structure, changes to DR site arrangements, acquisition or divestiture of business units, significant changes to the regulatory environment
- **Post-incident** — Following any activation of this plan or any significant IT disruption event
- **Post-test** — Where testing identifies material gaps that require plan revision

### 9.2 Version History

*Maintain a complete version history for audit trail purposes.*

| Version | Date | Author | Section(s) Amended | Summary of Changes | Approved By |
|---|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | All | Initial document creation | [Approver Name] |
| [1.1] | [Date] | [Author Name] | [Sections] | [Summary of changes] | [Approver Name] |
| [2.0] | [Date] | [Author Name] | [Sections] | [Summary of changes] | [Approver Name] |

### 9.3 Approval Sign-Off

*This document requires formal sign-off from the following roles prior to publication and at each review cycle.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations (Plan Owner) | [Name] | __________________ | [Date] |
| Chief Technology Officer | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Head of Compliance | [Name] | __________________ | [Date] |
| Business Continuity Manager | [Name] | __________________ | [Date] |

---

## 10. References

The following regulatory documents, internal policies, and standards are referenced in or inform this IT Service Continuity Plan:

### 10.1 Regulatory References

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 10.30** | IT service continuity plan requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.28 | RTO and RPO definition requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.29 | Continuity testing and review requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.1 — 10.5 | Technology risk governance |
| BNM | Guidelines on Business Continuity Management | [Section] | Enterprise BCP framework |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 | Data security obligations during disruptions |
| [Regulation] | [Document] | [Clause] | [Relevance] |

### 10.2 Internal Policy References

| Document Title | Document ID | Owner | Relationship |
|---|---|---|---|
| IT Risk Management Policy | [Doc ID] | Head of IT Risk | Parent policy governing IT risk |
| Business Continuity Plan | [Doc ID] | Business Continuity Manager | Enterprise-level BCP; ITSCP is subordinate plan |
| IT Asset Classification Policy | [Doc ID] | Head of IT Operations | Defines criticality classification methodology |
| Incident Management Procedure | [Doc ID] | IT Operations Manager | Governs incident logging and escalation |
| Change Management Policy | [Doc ID] | Head of IT | Controls change to systems covered in this plan |
| Data Backup and Retention Policy | [Doc ID] | Head of IT Operations | Defines backup frequency and retention aligned to RPO |
| Vendor Management Policy | [Doc ID] | Head of Procurement / IT | Third-party continuity requirements |
| Information Security Policy | [Doc ID] | CISO | Security requirements during DR operations |

### 10.3 Standards References

| Standard | Title | Application |
|---|---|---|
| ISO 22301:2019 | Business Continuity Management Systems | International standard informing BCP and ITSCP framework |
| ISO/IEC 27031:2011 | ICT Readiness for Business Continuity | Specific guidance on ICT continuity planning |
| NIST SP 800-34 Rev. 1 | Contingency Planning Guide for Federal Information Systems | Supplementary guidance on IT contingency planning methodology |

---

## 11. Appendices

### Appendix A — Emergency Contact Directory

*Maintain this contact list in a separately controlled document that can be accessed offline and is updated as part of the quarterly communication tree test.*

| Role | Name | Primary Phone | Secondary Phone | Email | Alternate Contact |
|---|---|---|---|---|---|
| Head of IT Operations (Incident Commander) | [Name] | [Number] | [Number] | [Email] | [Name] |
| IT Operations Manager | [Name] | [Number] | [Number] | [Email] | [Name] |
| Infrastructure Lead | [Name] | [Number] | [Number] | [Email] | [Name] |
| Application Lead | [Name] | [Number] | [Number] | [Email] | [Name] |
| Database Administrator | [Name] | [Number] | [Number] | [Email] | [Name] |
| Chief Technology Officer | [Name] | [Number] | [Number] | [Email] | [Name] |
| Chief Information Security Officer | [Name] | [Number] | [Number] | [Email] | [Name] |
| Compliance Officer | [Name] | [Number] | [Number] | [Email] | [Name] |
| Business Continuity Manager | [Name] | [Number] | [Number] | [Email] | [Name] |
| BNM Regulatory Contact | [Name] | [Number] | [Number] | [Email] | N/A |
| [Vendor] — Core Banking Support | [Contact] | [Number] | [Number] | [Email] | [Escalation] |
| [Vendor] — Network / WAN | [Contact] | [Number] | [Number] | [Email] | [Escalation] |
| DR Site Operations | [Contact] | [Number] | [Number] | [Email] | [Escalation] |

### Appendix B — DR Site Details

*Provide physical and technical details for the disaster recovery site. Restrict access to this appendix.*

| Field | Primary Site | DR Site |
|---|---|---|
| **Site Name** | [Primary DC Name] | [DR Site Name] |
| **Address** | [Address] | [Address] |
| **Facility Type** | [Owned / Co-location] | [Owned / Co-location] |
| **Site Manager** | [Name / Contact] | [Name / Contact] |
| **Physical Access Procedure** | [Reference] | [Reference] |
| **Network Connectivity** | [Details] | [Details] |
| **Installed Capacity** | [Servers / Racks / Power] | [Servers / Racks / Power] |
| **Replication Technology** | N/A | [e.g., synchronous / asynchronous replication] |
| **Last Site Audit Date** | [Date] | [Date] |

### Appendix C — System Recovery Run Books

*Individual System Recovery Run Books provide step-by-step technical instructions for recovering each critical system. The following run books exist and are maintained by the respective system owners:*

| System | Run Book Title | Document ID | Owner | Last Updated |
|---|---|---|---|---|
| Core Banking System | Core Banking DR Failover Procedure | [Doc ID] | [Name] | [Date] |
| Internet Banking Platform | Internet Banking Recovery Procedure | [Doc ID] | [Name] | [Date] |
| Mobile Banking Application | Mobile Banking Recovery Procedure | [Doc ID] | [Name] | [Date] |
| Payment Processing System | Payment Systems Failover Procedure | [Doc ID] | [Name] | [Date] |
| ATM / CDM Network | ATM Network Recovery Procedure | [Doc ID] | [Name] | [Date] |
| Network Infrastructure | Network DR Runbook | [Doc ID] | [Name] | [Date] |
| Active Directory / IAM | AD / IAM Recovery Procedure | [Doc ID] | [Name] | [Date] |
| [Additional System] | [Run Book Title] | [Doc ID] | [Name] | [Date] |

### Appendix D — BNM Notification Template

*Use the following template for regulatory notification to BNM in the event of a material IT service disruption.*

---

**To:** [BNM Supervisory Contact]
**From:** [Organization Name] — Compliance / IT Operations
**Date:** [Date and Time]
**Subject:** IT Service Disruption Notification — [Incident Reference Number]

**1. Nature of Disruption:**
[Brief description of the disruption event, systems affected, and cause if known]

**2. Services Impacted:**
[List of affected customer-facing and operational services]

**3. Customer Impact:**
[Number of customers affected / geographic scope / type of impact]

**4. Time of Occurrence:**
[Date and time disruption commenced]

**5. Current Status:**
[Current recovery status and estimated time to resolution]

**6. Actions Taken:**
[Summary of immediate actions taken]

**7. Next Update:**
[Committed time for next regulatory update]

**8. Contact:**
[Name / Role / Phone / Email of designated contact]

---

### Appendix E — Plan Distribution and Access Control

*Control and track distribution of this document. Given its Confidential classification, distribution must be restricted to authorised personnel only.*

| Recipient | Role | Copy Type | Date Issued |
|---|---|---|---|
| [Name] | Head of IT Operations | Controlled — Electronic | [Date] |
| [Name] | Chief Technology Officer | Controlled — Electronic | [Date] |
| [Name] | Chief Information Security Officer | Controlled — Electronic | [Date] |
| [Name] | Business Continuity Manager | Controlled — Electronic | [Date] |
| [Name] | IT Operations Manager | Controlled — Electronic | [Date] |
| [Secure Location] | War Room / Crisis Kit | Controlled — Printed | [Date] |
| [Secure Location] | DR Site — Operations Folder | Controlled — Printed | [Date] |

> **Document Security Note:** This document is classified **Confidential**. It must not be shared outside [Organization Name] without the explicit written approval of the Head of IT Operations. Physical copies must be stored in a secure, locked location. Electronic copies must be stored in [Document Management System] with access restricted to authorised roles.

---

*End of Document*

---
**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential | **Owner:** Head of IT Operations
**© [Organization Name] [Year] — All rights reserved. For internal use only.**