# Disaster Recovery Roles and Responsibilities Matrix

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Risk Officer (CRO) |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT Paragraph 10.31 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name] involved in disaster recovery governance and operations. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This document shall be reviewed annually or upon significant changes to the organization's technology environment, recovery objectives, or regulatory requirements.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Governance Structure](#3-governance-structure)
4. [Methodology and Approach](#4-methodology-and-approach)
5. [DR Roles and Responsibilities Matrix](#5-dr-roles-and-responsibilities-matrix)
6. [Escalation Paths and Communication Framework](#6-escalation-paths-and-communication-framework)
7. [Implementation Roadmap](#7-implementation-roadmap)
8. [Monitoring and Review Mechanisms](#8-monitoring-and-review-mechanisms)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Executive Summary

*Provide a concise overview of this document's purpose, the organizational context for disaster recovery governance, and the key outcomes expected from maintaining clearly defined DR roles and responsibilities.*

[Organization Name] operates critical financial services infrastructure subject to the technology risk management requirements prescribed by Bank Negara Malaysia (BNM) under the Risk Management in Technology (RMiT) Policy Document. As a licensed financial institution, [Organization Name] is required to establish and maintain a robust Disaster Recovery (DR) framework underpinned by clearly defined roles, responsibilities, and escalation procedures.

This Disaster Recovery Roles and Responsibilities Matrix ("the Matrix") formally assigns accountability and authority for all DR-related activities across the organization. It establishes the governance structure necessary to ensure that, in the event of a technology disruption or disaster, recovery actions are executed in a coordinated, timely, and compliant manner.

### 1.1 Key Highlights

- **Regulatory Basis:** This Matrix is prepared in compliance with BNM RMiT Paragraph 10.31, which mandates that financial institutions define and document roles and responsibilities for disaster recovery.
- **Ownership:** The Chief Risk Officer (CRO) holds overall ownership and accountability for this document.
- **Applicability:** This Matrix applies to all technology systems, personnel, and third-party service providers involved in DR activities at [Organization Name].
- **Review Cycle:** This document is subject to annual review and immediate update upon material changes to organizational structure, technology architecture, or regulatory guidance.

### 1.2 Critical Assumptions

- [Assumption 1: e.g., All personnel named in this Matrix have received DR awareness training.]
- [Assumption 2: e.g., Third-party service providers have been notified of their roles and have agreed to the stated responsibilities.]
- [Assumption 3: e.g., This Matrix is aligned with the organization's Business Continuity Plan (BCP) and IT Disaster Recovery Plan (ITDRP).]

---

## 2. Purpose and Scope

*Define the purpose of this document and delineate the boundaries of its applicability, including which systems, entities, personnel, and regulatory requirements it addresses.*

### 2.1 Purpose

This document serves the following purposes:

1. To formally define and assign DR roles and responsibilities across all levels of [Organization Name], from Board-level governance to operational execution teams.
2. To establish clear escalation paths that ensure timely decision-making and communication during a disaster or technology disruption event.
3. To demonstrate compliance with BNM RMiT Paragraph 10.31, which requires financial institutions to maintain documented DR governance structures.
4. To provide a reference document for DR training, testing, audit, and regulatory examination purposes.
5. To integrate DR accountability into the broader risk governance framework of [Organization Name].

### 2.2 Scope

#### 2.2.1 In Scope

| Category | Description |
|---|---|
| **Systems** | All critical and major technology systems as defined in [Organization Name]'s IT Asset Register, including core banking, payment systems, and customer-facing digital channels |
| **Personnel** | All [Organization Name] employees with DR responsibilities, including Board members, senior management, technology staff, and business unit representatives |
| **Third Parties** | Outsourced service providers, cloud service providers, and co-location facility operators engaged by [Organization Name] for critical technology services |
| **Locations** | Primary data centre, secondary (DR) data centre, and all remote work arrangements |
| **DR Scenarios** | Technology disruptions, data centre outages, cyber incidents requiring system recovery, and natural disaster scenarios affecting technology operations |

#### 2.2.2 Out of Scope

- Physical security incident response (refer to [Physical Security Incident Response Plan, Document ID: XXXX])
- Non-technology business continuity activities (refer to [Business Continuity Plan, Document ID: XXXX])
- Human resources crisis management unrelated to technology recovery

### 2.3 Regulatory Context

This Matrix directly supports compliance with the following regulatory requirements:

| Regulation | Reference | Requirement Summary |
|---|---|---|
| BNM RMiT | Paragraph 10.31 | Financial institutions shall define and document roles and responsibilities for DR, including escalation procedures |
| BNM RMiT | Paragraph 10.1–10.5 | General technology risk governance and accountability requirements |
| BNM RMiT | Paragraph 11.1–11.8 | Business continuity management and technology resilience |
| PDPA 2010 | Section 40 | Data protection obligations during system recovery |
| [Other Applicable Regulation] | [Reference] | [Summary] |

---

## 3. Governance Structure

*Describe the governance hierarchy that oversees DR activities at [Organization Name], including the committees, forums, and reporting lines relevant to disaster recovery.*

### 3.1 DR Governance Hierarchy

*Insert or reference an organizational chart illustrating the DR governance hierarchy from Board level to operational teams.*

> **[Insert DR Governance Organizational Chart here — illustrating reporting lines from Board Risk Committee → CRO → IT Steering Committee → DR Coordinator → DR Teams]**

### 3.2 Governance Bodies and Forums

| Governance Body | Composition | DR Responsibilities | Meeting Frequency |
|---|---|---|---|
| **Board Risk Committee (BRC)** | Board members, Independent Directors | Ultimate oversight of DR governance; approval of DR policy and risk appetite | Quarterly (or as required during incidents) |
| **IT Steering Committee (ITSC)** | CRO, CIO, CTO, CFO, COO | Strategic oversight of DR investments, approval of DR strategy and testing results | Quarterly |
| **Technology Risk Management Committee** | CRO, CISO, IT Risk Manager, Technology Heads | Operational oversight of DR program; review of DR test results and gaps | Monthly |
| **DR Management Team** | DR Coordinator, IT Operations Head, Application Owners, Network Lead | Operational management of DR planning, testing, and execution | Monthly (and during incidents) |
| **Crisis Management Team (CMT)** | CEO, CRO, COO, CIO, Head of Legal, Head of Communications | Executive decision-making during declared DR events | As required during incidents |

### 3.3 DR Governance Principles

[Organization Name] adheres to the following principles in governing disaster recovery:

1. **Accountability at the Top:** The Board bears ultimate accountability for the adequacy of DR arrangements. The CRO holds delegated operational accountability.
2. **Separation of Duties:** Personnel responsible for declaring a DR event are distinct from those executing recovery actions to prevent conflicts of interest.
3. **Documented Authority:** All DR decision-making authority is formally documented and communicated to relevant personnel.
4. **Third-Party Alignment:** DR governance obligations are contractually extended to critical third-party service providers.
5. **Continuous Improvement:** DR governance is subject to ongoing monitoring and regular testing to ensure effectiveness.

---

## 4. Methodology and Approach

*Describe the framework and methodology used to define and maintain DR roles and responsibilities, including how roles are identified, assigned, and kept current.*

### 4.1 Framework Alignment

This Matrix has been developed in alignment with the following frameworks and standards:

| Framework / Standard | Version / Edition | Alignment Area |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Effective 1 July 2020 (as amended) | Primary regulatory requirement |
| ISO/IEC 22301:2019 | 2019 | Business Continuity Management System |
| NIST SP 800-34 Rev. 1 | May 2010 | IT Contingency Planning |
| ISACA COBIT 2019 | 2019 | IT Governance and Management |
| [Organization Name] Enterprise Risk Management Framework | [Version] | Internal governance alignment |

### 4.2 Role Identification Methodology

DR roles and responsibilities at [Organization Name] are identified through the following process:

1. **Critical System Mapping:** Identification of all critical and major technology systems through the IT Asset Register and Business Impact Analysis (BIA).
2. **Recovery Workflow Analysis:** Decomposition of each recovery scenario into discrete tasks and activities requiring human intervention.
3. **Organizational Mapping:** Assignment of recovery tasks to existing organizational roles and identification of gaps requiring dedicated DR roles.
4. **Stakeholder Validation:** Review and confirmation of role assignments with relevant business unit heads and technology leads.
5. **Document Approval:** Formal approval of the Matrix by the CRO and ratification by the IT Steering Committee.

### 4.3 RACI Methodology

This Matrix employs the RACI model to assign responsibilities:

| Code | Definition | Constraints |
|---|---|---|
| **R — Responsible** | The individual(s) who perform the work or task. | At least one R must be assigned per activity. |
| **A — Accountable** | The individual who is ultimately answerable for the correct completion of the task. | Only one A is permitted per activity. |
| **C — Consulted** | Individuals whose input is sought before or during the task (two-way communication). | Multiple C designations are permitted. |
| **I — Informed** | Individuals who are notified of task progress or outcomes (one-way communication). | Multiple I designations are permitted. |

### 4.4 DR Lifecycle Phases

DR roles and responsibilities are assigned across the following lifecycle phases:

| Phase | Description |
|---|---|
| **Phase 1 — Prevention & Preparedness** | Activities undertaken to reduce the likelihood and impact of a DR event |
| **Phase 2 — Detection & Notification** | Activities related to identifying a disruption and triggering the DR response |
| **Phase 3 — Declaration & Activation** | Formal declaration of a DR event and activation of recovery teams |
| **Phase 4 — Recovery & Restoration** | Execution of recovery procedures to restore systems to operational status |
| **Phase 5 — Return to Normal** | Orderly transition from DR environment back to primary operations |
| **Phase 6 — Post-Incident Review** | Review, documentation, and improvement activities following a DR event |

---

## 5. DR Roles and Responsibilities Matrix

*This section constitutes the core of the document. Define each DR role, its responsibilities across the DR lifecycle, and produce the consolidated RACI matrix.*

### 5.1 Role Definitions

#### 5.1.1 Strategic / Executive Roles

| Role | Role Holder | Department | Primary DR Accountability |
|---|---|---|---|
| **Board Risk Committee (BRC) Chair** | [Name / TBC] | Board | Ultimate governance and policy oversight |
| **Chief Executive Officer (CEO)** | [Name / TBC] | Executive | Overall organizational decision-making during crisis |
| **Chief Risk Officer (CRO)** | [Name / TBC] | Risk Management | DR framework ownership; document owner of this Matrix |
| **Chief Information Officer (CIO)** | [Name / TBC] | Information Technology | Technology recovery strategy and investment |
| **Chief Technology Officer (CTO)** | [Name / TBC] | Technology | Technical architecture decisions during recovery |
| **Chief Operating Officer (COO)** | [Name / TBC] | Operations | Business operations during and after DR event |
| **Chief Financial Officer (CFO)** | [Name / TBC] | Finance | Financial authorization and reporting during DR |
| **Chief Information Security Officer (CISO)** | [Name / TBC] | Information Security | Security oversight during recovery activities |

#### 5.1.2 Management / Coordination Roles

| Role | Role Holder | Department | Primary DR Accountability |
|---|---|---|---|
| **DR Coordinator** | [Name / TBC] | IT Risk / Technology | Day-to-day DR program management; central coordination point during incidents |
| **IT Operations Manager** | [Name / TBC] | IT Operations | Oversight of infrastructure and operations recovery |
| **Application Recovery Lead** | [Name / TBC] | Application Management | Coordination of application-layer recovery |
| **Network Recovery Lead** | [Name / TBC] | Network / Infrastructure | Recovery of network connectivity and communications |
| **Data Recovery Lead** | [Name / TBC] | Database / Data Management | Data backup validation and restoration oversight |
| **Security Recovery Lead** | [Name / TBC] | Information Security | Security controls re-establishment during recovery |
| **Communications Lead** | [Name / TBC] | Corporate Communications | Internal and external communications management |
| **Vendor Management Lead** | [Name / TBC] | Vendor / Procurement | Coordination with third-party service providers |

#### 5.1.3 Operational / Technical Roles

| Role | Role Holder | Department | Primary DR Accountability |
|---|---|---|---|
| **Infrastructure Recovery Team** | [Names / TBC] | IT Infrastructure | Execution of server, storage, and compute recovery tasks |
| **Database Administrators (DBAs)** | [Names / TBC] | Database Management | Database restoration, data integrity verification |
| **Application Support Team** | [Names / TBC] | Application Support | Application restart, configuration validation, UAT |
| **Network Engineers** | [Names / TBC] | Network Engineering | Network failover, DNS updates, connectivity testing |
| **Security Operations Team** | [Names / TBC] | SOC | Monitoring for threats during recovery; access control management |
| **Service Desk** | [Names / TBC] | IT Service Desk | First point of contact; incident logging; user communications |
| **Business Continuity Representatives** | [Names / TBC] | All Business Units | Liaison between technology teams and business units |

### 5.2 Detailed Responsibilities by Role

#### 5.2.1 Chief Risk Officer (CRO)

*The CRO holds overall accountability for the DR framework and this Matrix as document owner.*

**Phase 1 — Prevention & Preparedness:**
- Approve the annual DR strategy and testing schedule
- Ensure adequate resources are allocated to the DR program
- Report DR program status to the IT Steering Committee and Board Risk Committee
- Approve material changes to DR policies and procedures

**Phase 2 — Detection & Notification:**
- Receive escalated notifications for high-severity technology disruptions
- Assess risk implications of the disruption in conjunction with the CIO

**Phase 3 — Declaration & Activation:**
- Recommend DR event declaration to the CEO and Crisis Management Team
- Authorize activation of the crisis communications protocol

**Phase 4 — Recovery & Restoration:**
- Chair the Crisis Management Team during DR event execution
- Provide authoritative decisions on risk trade-offs during recovery
- Maintain communication with BNM and other regulators as required

**Phase 5 — Return to Normal:**
- Authorize return-to-normal declaration in conjunction with the CEO and CIO
- Ensure risk-based assessment of system readiness is completed before deactivation

**Phase 6 — Post-Incident Review:**
- Commission post-incident review report
- Approve remediation plans and track completion
- Ensure lessons learned are incorporated into DR framework updates

#### 5.2.2 DR Coordinator

*The DR Coordinator is the central operational owner of the DR program and the primary point of coordination during an incident.*

**Phase 1 — Prevention & Preparedness:**
- Maintain and update the DR Plan, this Matrix, and all associated DR documentation
- Coordinate and schedule annual DR tests and exercises
- Maintain the DR contact directory and ensure it is current
- Liaise with business units to validate Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs)
- Manage DR training and awareness programs

**Phase 2 — Detection & Notification:**
- Receive initial incident notification from Service Desk or monitoring systems
- Assess the nature and severity of the disruption against DR trigger criteria
- Initiate the notification cascade to relevant DR team members
- Escalate to CIO and CRO where DR trigger thresholds are met

**Phase 3 — Declaration & Activation:**
- Coordinate logistics for DR team assembly (physical or virtual)
- Activate the DR command centre
- Issue formal DR activation notification to all team leads
- Notify third-party service providers as per agreed escalation procedures

**Phase 4 — Recovery & Restoration:**
- Maintain the DR incident log throughout the recovery event
- Coordinate sequenced recovery activities across all technical teams
- Provide regular status updates to the Crisis Management Team
- Manage and document all decisions and deviations from the DR Plan

**Phase 5 — Return to Normal:**
- Coordinate the orderly transition from DR to primary environment
- Verify completion of all recovery milestones before recommending return-to-normal
- Ensure all temporary workarounds are documented and remediated

**Phase 6 — Post-Incident Review:**
- Lead the post-incident review process
- Compile the Post-Incident Review Report
- Track and report on implementation of remediation actions

#### 5.2.3 [Additional Role — Complete for All Roles Listed in Section 5.1]

*Replicate the structure above for each role defined in Section 5.1. Each role description should cover all six DR lifecycle phases.*

- [Phase 1 responsibilities]
- [Phase 2 responsibilities]
- [Phase 3 responsibilities]
- [Phase 4 responsibilities]
- [Phase 5 responsibilities]
- [Phase 6 responsibilities]

### 5.3 Consolidated RACI Matrix

*This table provides the consolidated RACI assignment across all DR activities and roles. A = Accountable, R = Responsible, C = Consulted, I = Informed.*

#### 5.3.1 Phase 1 — Prevention & Preparedness

| Activity | BRC | CEO | CRO | CIO | CTO | CISO | DR Coord. | IT Ops Mgr | App Lead | Network Lead | Data Lead | Security Lead |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Approve DR Policy and Strategy | A | I | R | C | C | C | C | I | I | I | I | I |
| Conduct Business Impact Analysis (BIA) | I | I | A | C | C | C | R | C | C | C | C | C |
| Define / Review RTOs and RPOs | I | I | A | R | C | C | R | C | C | C | C | C |
| Maintain DR Documentation | I | I | A | I | I | I | R | C | C | C | C | C |
| Conduct DR Training and Awareness | I | I | A | C | I | C | R | C | C | C | C | C |
| Schedule and Plan DR Tests | I | I | A | C | C | C | R | C | C | C | C | C |
| Review Third-Party DR Capabilities | I | I | A | C | C | C | R | C | I | I | I | C |
| Manage DR Budget and Resources | I | C | A | R | C | C | C | I | I | I | I | I |

#### 5.3.2 Phase 2 — Detection & Notification

| Activity | CEO | CRO | CIO | CTO | CISO | DR Coord. | IT Ops Mgr | App Lead | Service Desk | Vendors |
|---|---|---|---|---|---|---|---|---|---|---|
| Detect technology disruption | I | I | I | I | C | I | C | C | R | I |
| Log and classify incident | I | I | I | I | C | C | C | C | R | I |
| Assess against DR trigger criteria | I | C | C | C | C | A/R | R | C | C | I |
| Notify DR Coordinator | I | I | I | I | C | R | R | R | R | R |
| Escalate to CRO / CIO | A | A | A | C | C | R | C | I | I | I |
| Notify third-party service providers | I | I | I | I | I | A/R | C | C | I | I |

#### 5.3.3 Phase 3 — Declaration & Activation

| Activity | CEO | CRO | CIO | CTO | CISO | COO | CFO | DR Coord. | IT Ops Mgr | Comms Lead |
|---|---|---|---|---|---|---|---|---|---|---|
| Convene Crisis Management Team | R | R | R | C | C | R | R | R | I | I |
| Assess situation and make DR declaration | A | R | R | C | C | C | I | R | C | I |
| Formally declare DR event | A | R | R | I | I | I | I | R | I | I |
| Activate DR command centre | I | I | I | I | I | I | I | A/R | R | I |
| Notify all DR team leads | I | I | I | I | I | I | I | A/R | C | I |
| Initiate staff communication | I | I | I | I | I | C | I | C | I | A/R |
| Notify regulators (BNM) if required | C | A/R | C | I | I | C | C | C | I | C |
| Activate alternate site / cloud failover | I | I | C | C | C | I | I | C | A/R | I |

#### 5.3.4 Phase 4 — Recovery & Restoration

| Activity | CRO | CIO | CTO | CISO | DR Coord. | IT Ops Mgr | App Lead | Network Lead | Data Lead | DBA Team | Infra Team |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Execute infrastructure recovery | I | C | A | C | C | R | C | C | C | C | R |
| Execute network failover | I | C | A | C | C | C | I | R | I | I | C |
| Restore databases from backup | I | C | C | C | C | C | C | I | A/R | R | C |
| Validate data integrity | I | C | C | C | C | C | C | I | A/R | R | I |
| Restore and test applications | I | C | C | C | C | C | A/R | C | C | C | C |
| Conduct security checks during recovery | I | C | C | A/R | C | C | C | C | C | I | C |
| Provide status updates to CMT | C | C | I | I | A/R | R | R | R | R | I | I |
| Maintain incident log | I | I | I | I | A/R | C | I | I | I | I | I |
| Manage vendor/third-party coordination | I | C | I | I | A/R | C | I | I | I | I | I |

#### 5.3.5 Phase 5 — Return to Normal

| Activity | CEO | CRO | CIO | CTO | CISO | DR Coord. | IT Ops Mgr | App Lead | Data Lead |
|---|---|---|---|---|---|---|---|---|---|
| Declare end of DR event | A | R | R | C | C | R | C | I | I |
| Verify system readiness for return | I | C | A | R | C | R | R | R | R |
| Authorize data synchronization | I | C | A | R | C | C | R | C | A/R |
| Execute failback to primary site | I | I | A | R | C | C | R | R | R |
| Communicate return to normal to staff | C | C | I | I | I | C | I | I | I |
| Document temporary workarounds for remediation | I | C | I | I | C | A/R | C | C | C |

#### 5.3.6 Phase 6 — Post-Incident Review

| Activity | BRC | CEO | CRO | CIO | CISO | DR Coord. | IT Ops Mgr | All Team Leads | Audit |
|---|---|---|---|---|---|---|---|---|---|
| Conduct post-incident debrief | I | C | A | R | C | R | R | R | I |
| Compile Post-Incident Review Report | I | I | A | C | C | R | C | C | I |
| Identify root cause | I | I | C | C | C | R | R | R | I |
| Develop remediation plan | I | I | A | R | C | R | R | R | C |
| Present findings to ITSC / BRC | I | C | A/R | R | C | C | I | I | I |
| Update DR documentation | I | I | A | C | C | R | C | C | I |
| Submit regulatory report (if required) | I | C | A/R | C | C | C | I | I | I |
| Track remediation completion | I | I | A | C | C | R | C | C | C |

---

## 6. Escalation Paths and Communication Framework

*Define the structured escalation paths to be followed during a DR event, including decision thresholds, notification timelines, and communication channels.*

### 6.1 DR Event Severity Classification

| Severity Level | Description | Example Scenarios | Escalation Authority |
|---|---|---|---|
| **Level 1 — Critical** | Complete failure of one or more critical systems; RTO breach imminent or occurring | Core banking system outage; primary data centre failure; ransomware affecting production | CEO, CRO, CIO — immediate activation of CMT |
| **Level 2 — Major** | Significant degradation of critical systems; risk of RTO breach within 4 hours | Partial network failure; database corruption; key application failure | CRO, CIO — DR Coordinator activates DR teams |
| **Level 3 — Moderate** | Non-critical system failure or degradation; operations impacted but RTO not at risk | Ancillary system failure; localised infrastructure issues | IT Operations Manager — DR Coordinator notified |
| **Level 4 — Minor** | Minimal impact; standard incident management sufficient | Single server failure with automatic failover; brief service degradation | Service Desk — standard incident management process |

### 6.2 Escalation Trigger Criteria

A DR event escalation shall be initiated when one or more of the following conditions are met:

- [ ] A technology disruption affects one or more systems classified as Critical or Major in the IT Asset Register
- [ ] Recovery Time Objective (RTO) of any critical system is at risk of being breached
- [ ] Recovery Point Objective (RPO) of any critical system has been breached
- [ ] A cyber incident (including ransomware or destructive malware) has been detected affecting production systems
- [ ] Primary data centre is unavailable or access is denied
- [ ] A disruption has been active for more than [X hours] without resolution
- [ ] BNM or another regulatory body has been notified of a related incident
- [ ] Customer-facing systems are unavailable for more than [X minutes]

### 6.3 Escalation Path — Level 1 (Critical) Event

```
[Detection Source: Monitoring System / Service Desk / Staff Report]
          |
          v
[Service Desk — Log and Initial Triage]
          |
          v
[IT Operations Manager — Severity Assessment]
          |
          v (Level 1 Confirmed)
[DR Coordinator — Notified within 15 minutes of detection]
          |
     _____|_____
    |           |
    v           v
[CIO]         [CRO]
(Technical)  (Risk/Governance)
    |           |
    v           v
[Crisis Management Team Convened — within 30 minutes]
[CEO | CRO | CIO | COO | CFO | CISO | Legal | Comms]
          |
          v
[DR Declaration Decision]
          |
          v
[DR Coordinator — Activates DR Teams and DR Plan]
```

### 6.4 Notification Timeline Requirements

| Notification | Recipient | Timeline | Channel |
|---|---|---|---|
| Initial incident alert | IT Operations Manager | Within 5 minutes of detection | Monitoring system alert / phone |
| DR trigger assessment | DR Coordinator | Within 15 minutes of detection | Phone / secure messaging |
| Level 1 escalation | CIO, CRO | Within 15 minutes of trigger determination | Phone (primary) |
| CMT assembly notification | All CMT members | Within 30 minutes of Level 1 determination | Phone / emergency contact list |
| BNM regulatory notification | CRO (to BNM) | Within [timeframe per BNM guidelines] | As prescribed by BNM |
| Staff communication | All staff | Within [X hours] of DR declaration | Email / intranet / SMS |
| Customer communication | Head of Communications | Within [X hours] if customer impact | Approved channels |

### 6.5 Communication Channels

| Scenario | Primary Channel | Backup Channel | Owner |
|---|---|---|---|
| Normal operations | Email, internal collaboration tools | Phone | IT Operations |
| DR event (IT systems degraded) | Mobile phones, personal email | Physical assembly at [DR Command Centre Location] | DR Coordinator |
| Out-of-hours emergency | On-call mobile numbers (DR Contact Directory) | [Backup contact method] | DR Coordinator |
| Regulatory communication | Secure email to BNM | Phone to [BNM Contact] | CRO |
| Media / public communication | Approved statement via [Channel] | [Backup] | Head of Communications |

### 6.6 DR Contact Directory

*Maintain the current DR contact directory as Appendix A. The directory shall include primary and secondary contact numbers for all personnel listed in the RACI matrix and shall be reviewed and updated at minimum quarterly.*

> **See Appendix A — DR Contact Directory**

---

## 7. Implementation Roadmap

*Describe the roadmap for implementing, maintaining, and maturing the DR roles and responsibilities framework, including key milestones, timelines, and dependencies.*

### 7.1 Current State Assessment

*Summarize the current state of DR governance and role definition at [Organization Name], identifying strengths and gaps to be addressed.*

| Assessment Area | Current State | Gap / Observation | Priority |
|---|---|---|---|
| Role definition completeness | [e.g., Partially defined — executive roles clear, operational roles not fully documented] | [Gap description] | High / Medium / Low |
| RACI documentation | [e.g., Not formally documented] | [Gap description] | High |
| Escalation procedure documentation | [e.g., Informal process in place] | [Gap description] | High |
| Training and awareness | [e.g., Ad hoc training only] | [Gap description] | Medium |
| Third-party DR role alignment | [e.g., Not contractually defined] | [Gap description] | High |
| Regular testing of roles | [e.g., Tested annually but not all roles participate] | [Gap description] | Medium |

### 7.2 Implementation Milestones

| Milestone | Description | Target Date | Owner | Status |
|---|---|---|---|---|
| **M1** | Finalize and approve this DR Roles and Responsibilities Matrix | [Date] | CRO | [Status] |
| **M2** | Distribute Matrix to all named role holders and obtain acknowledgement | [Date] | DR Coordinator | [Status] |
| **M3** | Conduct DR roles awareness briefing for all role holders | [Date] | DR Coordinator | [Status] |
| **M4** | Update DR Contact Directory with current personnel details | [Date] | DR Coordinator | [Status] |
| **M5** | Extend DR role obligations to third-party service provider contracts | [Date] | Vendor Management Lead | [Status] |
| **M6** | Conduct tabletop DR exercise to validate role assignments | [Date] | DR Coordinator | [Status] |
| **M7** | Incorporate DR role assignments into annual performance objectives for key personnel | [Date] | CRO / HR | [Status] |
| **M8** | Conduct first full-scale DR test with all role holders | [Date] | DR Coordinator | [Status] |
| **M9** | Complete first annual review of this Matrix | [Date] | CRO | [Status] |

### 7.3 Dependencies

| Dependency | Description | Impact if Not Met | Responsible Party |
|---|---|---|---|
| IT Asset Register | Current and accurate classification of critical and major systems | Role assignments may not cover all critical recovery scenarios | IT Operations Manager |
| Business Impact Analysis (BIA) | Current BIA to validate RTOs and RPOs | Role responsibilities may not align with actual recovery time requirements | DR Coordinator |
| Third-party contracts | DR obligations embedded in service provider agreements | Third-party roles cannot be formally enforced | Vendor Management Lead |
| HR organizational structure | Current reporting lines and role holders | Contact directory and escalation paths may be inaccurate | CRO / HR |

---

## 8. Monitoring and Review Mechanisms

*Define the mechanisms for monitoring the effectiveness of the DR roles and responsibilities framework and for ensuring the document remains current and fit for purpose.*

### 8.1 Ongoing Monitoring Activities

| Activity | Description | Frequency | Owner | Output |
|---|---|---|---|---|
| DR Contact Directory Review | Verify accuracy of all contact details and role assignments | Quarterly | DR Coordinator | Updated contact directory |
| DR Training Completions | Monitor completion of DR training by all role holders | Quarterly | DR Coordinator | Training completion report |
| Third-Party DR Compliance Review | Review third-party DR capabilities and role alignment | Semi-annually | Vendor Management Lead | Third-party DR review report |
| Incident Debrief Role Assessment | Assess effectiveness of role performance following any DR event or near-miss | Post-event | DR Coordinator | Post-incident review report |
| New Joiner / Leaver DR Role Update | Update Matrix and contact directory upon relevant personnel changes | As required (within 5 business days) | DR Coordinator | Updated Matrix / directory |

### 8.2 Annual Review Process

This Matrix shall be subject to a comprehensive annual review. The review shall include:

1. **Regulatory Change Review:** Assessment of any changes to BNM RMiT or other applicable regulations that affect DR governance requirements.
2. **Organizational Change Review:** Assessment of organizational restructures, new business lines, or changes in technology that affect DR role assignments.
3. **Technology Change Review:** Review of changes to critical system architecture or infrastructure that introduce new recovery tasks requiring role assignment.
4. **Test Findings Incorporation:** Review of DR test results and post-incident reports to identify improvements to role definitions or escalation paths.
5. **Benchmarking:** Comparison of DR governance practices against industry peers and regulatory guidance.

### 8.3 Trigger-Based Review Events

In addition to the annual review, this Matrix shall be reviewed and updated upon the occurrence of the following trigger events:

- [ ] Significant organizational restructure affecting DR role holders
- [ ] Acquisition, divestiture, or outsourcing of material technology operations
- [ ] Material change to the technology architecture (e.g., cloud migration, new data centre)
- [ ] Revision to BNM RMiT or other applicable regulatory requirements
- [ ] Material failure of DR roles during a live DR event or major test
- [ ] Direction from internal audit, external audit, or BNM examination

### 8.4 Key Performance Indicators (KPIs)

| KPI | Description | Target | Measurement Method |
|---|---|---|---|
| Role Coverage | Percentage of critical system recovery tasks with an assigned accountable owner | 100% | Matrix review |
| Training Completion | Percentage of DR role holders who have completed required DR training | ≥ 95% | Training records |
| Contact Directory Currency | Percentage of contact entries verified as current | 100% | Quarterly review |
| DR Test Role Participation | Percentage of named role holders who participate in annual DR tests | ≥ 90% | Test attendance records |
| Post-Incident Remediation | Percentage of role-related remediation actions closed within agreed timeframes | ≥ 85% | Remediation tracker |
| Third-Party Role Alignment | Percentage of critical third parties with contractual DR role obligations | 100% | Contract review |

### 8.5 Audit and Assurance

| Assurance Activity | Performed By | Frequency | Output |
|---|---|---|---|
| Internal Audit Review | Internal Audit | Annual | Audit report with findings and recommendations |
| IT Steering Committee Review | IT Steering Committee | Annual (minimum) | Committee minutes and approval record |
| BNM Regulatory Examination | BNM Examiners | As required | Regulatory examination findings |
| External Audit / Certification | [External Auditor / Certification Body] | [Frequency] | Audit opinion / certification |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author] | Initial draft for internal review | N/A — Draft |
| 0.2 | [Date] | [Author] | Incorporated review comments from IT Steering Committee | N/A — Draft |
| 1.0 | [Date] | [Author] | Final version approved for issuance | [Approver] |
| [Version] | [Date] | [Author] | [Description of changes] | [Approver] |

### 9.2 Document Review Schedule

| Review Type | Due Date | Reviewer | Completion Date |
|---|---|---|---|
| Annual Review | [Date] | CRO | [Date] |
| Post-Incident Review (if applicable) | [Date] | DR Coordinator | [Date] |
| Regulatory Change Review | [Date] | CRO / Compliance | [Date] |

### 9.3 Approval Sign-Off

*This document requires formal approval from the following authorities prior to issuance and following each material update.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** — DR Coordinator | [Name] | _________________ | [Date] |
| **Reviewed By** — Chief Information Officer | [Name] | _________________ | [Date] |
| **Reviewed By** — Chief Information Security Officer | [Name] | _________________ | [Date] |
| **Reviewed By** — Head of Compliance | [Name] | _________________ | [Date] |
| **Approved By** — Chief Risk Officer | [Name] | _________________ | [Date] |
| **Ratified By** — IT Steering Committee Chair | [Name] | _________________ | [Date] |

---

## 10. References

### 10.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Paragraphs |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Paragraph 10.31 (DR roles and responsibilities); Paragraphs 10.1–10.5 (technology risk governance); Paragraphs 11.1–11.8 (business continuity) |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 40 (data protection obligations during recovery) |
| FSIA 2013 | Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections applicable to technology resilience] |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections applicable to technology resilience] |
| BNM/RH/GL 013-3 | Guidelines on Business Continuity Management | Bank Negara Malaysia | All applicable sections |
| [Other Regulation] | [Title] | [Issuing Authority] | [Relevant Sections] |

### 10.2 Internal References

| Document | Document ID | Owner |
|---|---|---|
| IT Disaster Recovery Plan | [Document ID] | CIO |
| Business Continuity Plan | [Document ID] | COO |
| Technology Risk Management Policy | [Document ID] | CRO |
| IT Asset Register | [Document ID] | CTO |
| Business Impact Analysis Report | [Document ID] | DR Coordinator |
| Vendor Management Policy | [Document ID] | [Owner] |
| Information Security Policy | [Document ID] | CISO |
| Incident Management Procedure | [Document ID] | IT Operations Manager |

### 10.3 Industry Standards and Frameworks

| Standard / Framework | Version | Title |
|---|---|---|
| ISO/IEC 22301:2019 | 2019 | Security and resilience — Business continuity management systems — Requirements |
| ISO/IEC 27031:2011 | 2011 | Information technology — Security techniques — Guidelines for ICT readiness for business continuity |
| NIST SP 800-34 Rev. 1 | May 2010 | Contingency Planning Guide for Federal Information Systems |
| ISACA COBIT 2019 | 2019 | Control Objectives for Information and Related Technologies |

---

## 11. Appendices

### Appendix A — DR Contact Directory

*Maintain the current DR contact directory below. This directory shall be reviewed and updated at minimum quarterly. Verify all contact details prior to each scheduled DR test.*

| Role | Name | Organization / Department | Primary Phone | Secondary Phone | Email | On-Call Hours |
|---|---|---|---|---|---|---|
| DR Coordinator | [Name] | [Department] | [Phone] | [Phone] | [Email] | 24/7 |
| CRO | [Name] | Risk Management | [Phone] | [Phone] | [Email] | Business hours / on-call |
| CIO | [Name] | Information Technology | [Phone] | [Phone] | [Email] | 24/7 |
| CTO | [Name] | Technology | [Phone] | [Phone] | [Email] | 24/7 |
| CISO | [Name] | Information Security | [Phone] | [Phone] | [Email] | 24/7 |
| IT Operations Manager | [Name] | IT Operations | [Phone] | [Phone] | [Email] | 24/7 |
| Application Recovery Lead | [Name] | Application Management | [Phone] | [Phone] | [Email] | 24/7 |
| Network Recovery Lead | [Name] | Network Engineering | [Phone] | [Phone] | [Email] | 24/7 |
| Data Recovery Lead | [Name] | Data Management | [Phone] | [Phone] | [Email] | 24/7 |
| Security Recovery Lead | [Name] | Information Security | [Phone] | [Phone] | [Email] | 24/7 |
| Communications Lead | [Name] | Corporate Communications | [Phone] | [Phone] | [Email] | Business hours / on-call |
| [Primary DR Site Contact] | [Name] | [DR Site Operator] | [Phone] | [Phone] | [Email] | 24/7 |
| [Key Vendor — Name] | [Name] | [Vendor Organization] | [Phone] | [Phone] | [Email] | [Hours] |
| BNM Emergency Contact | N/A | Bank Negara Malaysia | [BNM contact as published] | N/A | [BNM email] | [As published] |

> **Security Note:** A printed copy of this directory shall be maintained in a physically secure location accessible to the DR Coordinator and backup DR Coordinator that does not depend on digital system availability. The DR Contact Directory is classified as **Confidential**.

---

### Appendix B — Glossary of Terms

| Term | Definition |
|---|---|
| **BCP** | Business Continuity Plan — a plan to ensure continuation of critical business functions during and after a disruption |
| **BIA** | Business Impact Analysis — an analysis identifying critical business functions and the impact of their disruption |
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| **CMT** | Crisis Management Team — the senior leadership team convened during a disaster event |
| **DR** | Disaster Recovery — the process of restoring IT systems and operations following a disruptive event |
| **ITDRP** | IT Disaster Recovery Plan — the documented plan for recovering IT systems following a disaster |
| **ITSC** | IT Steering Committee — the governance body overseeing technology strategy and risk |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RMiT** | Risk Management in Technology — BNM Policy Document issued effective 1 July 2020 |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss measured in time |
| **RTO** | Recovery Time Objective — the maximum acceptable duration of a system outage before recovery |
| **[Term]** | [Definition] |

---

### Appendix C — DR Role Acknowledgement Form

*All personnel assigned roles in this Matrix shall sign an acknowledgement confirming they have read, understood, and accept their DR responsibilities.*

---

**DR Role Acknowledgement**

I, the undersigned, acknowledge that I have received, read, and understood the **Disaster Recovery Roles and Responsibilities Matrix** (Document ID: [Document ID], Version: [Version]).

I understand my assigned DR role(s) and responsibilities as defined in this document, and I commit to:

- Fulfilling my DR responsibilities as described in this Matrix
- Maintaining availability per the on-call requirements associated with my DR role
- Completing required DR training as directed by the DR Coordinator
- Notifying the DR Coordinator promptly of any changes that affect my ability to fulfill my DR role
- Maintaining the confidentiality of this document and DR-related information

| Field | Details |
|---|---|
| **Full Name** | _________________________________ |
| **Role / Position** | _________________________________ |
| **DR Role(s) Assigned** | _________________________________ |
| **Department** | _________________________________ |
| **Signature** | _________________________________ |
| **Date** | _________________________________ |

---

### Appendix D — DR Test Results Summary (Most Recent)

*Insert a summary of the most recent DR test relevant to role and responsibilities validation. Full test reports should be maintained separately and referenced here.*

| Test Item | Details |
|---|---|
| **Test Date** | [Date] |
| **Test Type** | [Tabletop / Parallel / Full Failover / Simulation] |
| **Scenario Tested** | [Description of the DR scenario] |
| **Scope** | [Systems and processes included in test] |
| **Test Coordinator** | [Name] |
| **Key Findings — Roles** | [Summary of role-related findings, e.g., gaps in role coverage, unclear responsibilities] |
| **Key Findings — Escalation** | [Summary of escalation-related findings] |
| **Remediation Actions** | [Summary of actions taken or planned] |
| **Overall Test Result** | [Pass / Pass with Observations / Fail] |
| **Next Scheduled Test** | [Date] |

> Full DR Test Report: [Document ID / Reference]

---

### Appendix E — Regulatory Examination Checklist

*This checklist is provided to assist with preparation for BNM regulatory examinations related to DR governance.*

| RMiT Requirement | Reference | Evidence of Compliance | Status |
|---|---|---|---|
| DR roles and responsibilities are formally defined and documented | Para. 10.31 | This Matrix (Document ID: [ID]) | [Complete / In Progress / Gap] |
| Accountability for DR is assigned to a senior management role | Para. 10.31 | CRO designated as document owner (Section 1) | [Complete / In Progress / Gap] |
| Escalation procedures are documented | Para. 10.31 | Section 6 of this Matrix | [Complete / In Progress / Gap] |
| DR roles are tested through periodic exercises | Para. 10.31 | DR Test Reports (Appendix D) | [Complete / In Progress / Gap] |
| Third-party DR roles are aligned and documented | Para. 10.31 | Third-party contracts; Appendix A | [Complete / In Progress / Gap] |
| DR documentation is reviewed and updated regularly | Para. 10.31 | Version history (Section 9.1) | [Complete / In Progress / Gap] |
| Board / senior management oversight of DR is evidenced | Para. 10.1–10.5 | BRC and ITSC minutes | [Complete / In Progress / Gap] |
| RTOs and RPOs are defined and aligned to DR roles | Para. 11.x | BIA Report; ITDRP | [Complete / In Progress / Gap] |
| [Additional requirement] | [Reference] | [Evidence] | [Status] |

---

*End of Document*

---

> **Document Classification: Confidential**
> **[Organization Name]** | Document ID: [Document ID] | Version 1.0
> *This document is subject to annual review. Next Review Date: [Next Review Date]*