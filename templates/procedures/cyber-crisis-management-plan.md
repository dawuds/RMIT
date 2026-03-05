# Cyber Crisis Management Plan

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head — e.g., Chief Information Security Officer / Head of Technology Risk] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By — Name and Title] |
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT), Clause 11.5 |

---

> **Confidentiality Notice:** This document contains sensitive operational and security information. Distribution is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure is prohibited under [Organization Name]'s Information Classification Policy and applicable Malaysian law including the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives](#2-objectives)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Classification of Cyber Crises](#4-definitions-and-classification-of-cyber-crises)
5. [Governance Structure](#5-governance-structure)
6. [Escalation Framework](#6-escalation-framework)
7. [Decision-Making Authority](#7-decision-making-authority)
8. [Crisis Response Actions and Milestones](#8-crisis-response-actions-and-milestones)
9. [Accountable Owners](#9-accountable-owners)
10. [Resource Requirements](#10-resource-requirements)
11. [Progress Tracking Mechanism](#11-progress-tracking-mechanism)
12. [Communication Plan](#12-communication-plan)
13. [Regulatory Notification Obligations](#13-regulatory-notification-obligations)
14. [Post-Crisis Activities](#14-post-crisis-activities)
15. [Roles and Responsibilities](#15-roles-and-responsibilities)
16. [Training and Exercising](#16-training-and-exercising)
17. [Review and Approval](#17-review-and-approval)
18. [References](#18-references)
19. [Appendices](#19-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overall intent and rationale for this document. Explain why the plan exists and what outcomes it is designed to achieve.*

This Cyber Crisis Management Plan ("the Plan") establishes the governance framework, escalation procedures, decision-making authorities, and coordinated response actions that [Organization Name] shall activate when a cyber incident escalates to, or is declared as, a cyber crisis. The Plan ensures that [Organization Name] can respond to severe cyber threats in a structured, timely, and effective manner, minimizing operational disruption, financial loss, reputational damage, and regulatory non-compliance.

This Plan is issued in compliance with the requirements of Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.5, which mandates that financial institutions maintain a documented and tested cyber crisis management capability.

### 1.2 Scope

*Define the boundaries of this plan — which business units, systems, processes, and geographies are covered. Clearly articulate what is in scope and what is not.*

This Plan applies to:

- **Entities in scope:** [Organization Name] and all its Malaysian subsidiaries and branches.
- **Systems in scope:** All information systems, technology infrastructure, cloud environments, third-party managed systems, and digital channels operated by or on behalf of [Organization Name].
- **Personnel in scope:** All employees, contractors, vendors, and third-party service providers with access to [Organization Name]'s technology environment.
- **Geographic scope:** All locations where [Organization Name] operates within Malaysia, and international locations where systems may impact Malaysian operations.

**Out of Scope:**

- Physical security incidents that do not involve a technology component (refer to [Physical Security Incident Response Plan]).
- Non-cyber operational disruptions (refer to [Business Continuity Plan]).

### 1.3 Relationship to Other Plans

*Describe how this Plan interacts with adjacent plans such as the Incident Response Plan, Business Continuity Plan, and Disaster Recovery Plan.*

| Related Plan | Relationship |
|---|---|
| Cyber Incident Response Plan | This Plan is activated when an incident declared under the Incident Response Plan meets the crisis threshold defined in Section 4. |
| Business Continuity Plan (BCP) | Crisis response may trigger BCP activation; both plans operate in parallel during a cyber crisis. |
| Disaster Recovery Plan (DRP) | DRP may be invoked to restore critical systems during or following a cyber crisis. |
| Crisis Communications Plan | Governs external and internal communication; activated concurrently with this Plan. |
| Third-Party Risk Management Policy | Defines escalation paths for crises involving third-party or supply chain compromise. |

---

## 2. Objectives

*State the specific, measurable objectives that this Plan is designed to achieve. These should be outcome-oriented and auditable.*

The primary objectives of this Plan are:

1. **Establish clear governance** — Define an unambiguous command structure with designated decision-makers for all phases of a cyber crisis.
2. **Enable rapid escalation** — Ensure that cyber crises are identified, escalated, and declared without delay, minimizing time-to-response.
3. **Coordinate response actions** — Provide a structured set of actions, milestones, and owners to manage the crisis through containment, eradication, and recovery.
4. **Protect critical assets** — Prioritize the protection of [Organization Name]'s most critical systems, customer data, and financial infrastructure during a crisis.
5. **Fulfill regulatory obligations** — Ensure timely notification to BNM and other relevant authorities as required under applicable regulations.
6. **Minimize impact** — Reduce financial, operational, reputational, and legal impact on [Organization Name] and its customers.
7. **Enable post-crisis learning** — Establish mechanisms for lessons-learned review and continuous improvement of cyber crisis capabilities.

---

## 3. Regulatory Context

*Reference the specific regulatory requirements that mandate this document. This section demonstrates regulatory traceability and is important during audits.*

### 3.1 BNM Risk Management in Technology (RMiT)

This Plan is developed to satisfy the requirements of the **BNM Risk Management in Technology (RMiT) Policy Document**, issued pursuant to Section 47 of the Financial Services Act 2013 (FSA) and Section 57 of the Islamic Financial Services Act 2013 (IFSA).

| Clause | Requirement Summary |
|---|---|
| **11.5** | Financial institutions must establish and maintain a cyber crisis management plan that defines governance, escalation procedures, and decision-making authority during cyber crises. |
| **11.1** | Establishes the overarching requirement for a cyber resilience framework, of which crisis management is a key component. |
| **11.3** | Requirements for cyber incident detection and response, which feed into crisis declaration criteria. |
| **11.4** | Requirements for cyber incident reporting to BNM, which this Plan operationalizes. |
| **10.4** | Technology risk governance requirements applicable to crisis governance structures. |

### 3.2 Other Applicable Regulations

| Regulation | Relevant Obligation |
|---|---|
| Personal Data Protection Act 2010 (PDPA) | Obligation to safeguard personal data during a cyber crisis and notify affected data subjects where required. |
| Financial Services Act 2013 (FSA), Section 47 | Powers of BNM to issue enforceable standards on technology risk management. |
| Islamic Financial Services Act 2013 (IFSA), Section 57 | Equivalent provision for Islamic financial institutions. |
| NACSA National Cyber Security Policy | Alignment with national cybersecurity standards and Critical National Information Infrastructure (CNII) obligations. |
| [Other applicable internal policies] | [Description] |

---

## 4. Definitions and Classification of Cyber Crises

### 4.1 Key Definitions

*Define all key terms used in this document to ensure consistent interpretation across teams.*

| Term | Definition |
|---|---|
| **Cyber Incident** | Any unauthorized access, disruption, modification, or destruction of [Organization Name]'s information systems or data. |
| **Cyber Crisis** | A cyber incident of such severity, scale, or strategic impact that it requires activation of senior management governance and this Plan. See Section 4.2 for classification criteria. |
| **Crisis Declaration** | The formal act of activating this Plan, made by the Crisis Declaration Authority defined in Section 7. |
| **Cyber Crisis Management Team (CCMT)** | The senior-level team convened to govern and direct response during a declared cyber crisis. |
| **Recovery Time Objective (RTO)** | The maximum acceptable time to restore a system or function following disruption. |
| **Recovery Point Objective (RPO)** | The maximum acceptable data loss measured in time. |
| **Indicators of Compromise (IoC)** | Artifacts or behaviors that indicate a system has been compromised. |
| **Threat Actor** | An individual or group responsible for conducting a malicious cyber attack. |

### 4.2 Cyber Crisis Classification Matrix

*Use this matrix to guide the decision on whether an incident meets the threshold for crisis declaration.*

| Severity Level | Criteria | Response Plan Activated |
|---|---|---|
| **Level 1 — Minor** | Limited impact, isolated system, no customer or regulatory impact | Cyber Incident Response Plan |
| **Level 2 — Significant** | Multiple systems affected, potential customer data exposure, service degradation | Cyber Incident Response Plan + Escalation to CISO |
| **Level 3 — Major** | Widespread system compromise, confirmed data breach, significant service disruption | Cyber Incident Response Plan + Senior Management Notification |
| **Level 4 — Critical (Cyber Crisis)** | Enterprise-wide compromise, critical service failure, systemic financial impact, regulatory breach, or reputational crisis | **This Plan — Cyber Crisis Management Plan** |

**Crisis Declaration Triggers include but are not limited to:**

- Ransomware or destructive malware affecting core banking systems.
- Unauthorized access to or exfiltration of customer financial or personal data at scale.
- Compromise of privileged accounts with access to critical infrastructure.
- Distributed Denial of Service (DDoS) attacks causing prolonged service unavailability.
- Confirmed supply chain compromise affecting critical systems.
- Cyber attack impacting financial market operations or settlement systems.
- Any incident attracting or likely to attract significant media, regulatory, or public attention.
- BNM or NACSA notification of a sector-wide threat requiring immediate action.

---

## 5. Governance Structure

*Define the governance bodies, their composition, and their mandate during a cyber crisis.*

### 5.1 Cyber Crisis Management Team (CCMT)

The Cyber Crisis Management Team is the senior governing body convened upon declaration of a cyber crisis. The CCMT has ultimate authority over crisis response decisions.

**CCMT Composition:**

| Role | Title | Primary Contact | Alternate Contact |
|---|---|---|---|
| **CCMT Chair** | [Chief Executive Officer / Chief Risk Officer] | [Contact Details] | [Alternate Contact Details] |
| **Technology Lead** | Chief Information Officer (CIO) | [Contact Details] | [Alternate Contact Details] |
| **Security Lead** | Chief Information Security Officer (CISO) | [Contact Details] | [Alternate Contact Details] |
| **Legal & Compliance Lead** | Head of Legal / Chief Compliance Officer | [Contact Details] | [Alternate Contact Details] |
| **Operations Lead** | Chief Operating Officer (COO) | [Contact Details] | [Alternate Contact Details] |
| **Communications Lead** | Head of Corporate Communications / PR | [Contact Details] | [Alternate Contact Details] |
| **Finance Lead** | Chief Financial Officer (CFO) | [Contact Details] | [Alternate Contact Details] |
| **Human Resources Lead** | Head of Human Resources | [Contact Details] | [Alternate Contact Details] |
| **External Relations** | Head of Regulatory Affairs | [Contact Details] | [Alternate Contact Details] |

### 5.2 Cyber Incident Response Team (CIRT)

The CIRT operates under the direction of the CCMT during a cyber crisis and is responsible for technical investigation, containment, and remediation.

| Role | Responsibility |
|---|---|
| CIRT Lead (CISO or delegate) | Technical direction of response activities |
| Security Operations Center (SOC) Manager | Threat monitoring and analysis |
| Forensics Lead | Digital forensics and evidence preservation |
| Infrastructure Lead | System isolation and recovery coordination |
| Application Lead | Application-layer containment and recovery |
| Network Security Lead | Network traffic analysis and segmentation |
| [Third-Party IR Retainer] | External specialist support — [Vendor Name] |

### 5.3 Crisis Command Center

*Specify the physical and virtual locations from which the crisis will be managed.*

- **Primary Command Center:** [Location — e.g., Floor X, [Organization Name] HQ, Kuala Lumpur]
- **Alternate Command Center:** [Location — e.g., Disaster Recovery Site, [City]]
- **Virtual Command Center:** [Collaboration platform — e.g., Microsoft Teams Crisis Channel / Zoom War Room]
- **Activation Trigger:** Command center is activated within [X hours] of crisis declaration.

---

## 6. Escalation Framework

*Define the escalation path from initial detection through crisis declaration. This must be unambiguous and time-bound.*

### 6.1 Escalation Tiers

| Tier | Trigger | Escalation To | Time Limit |
|---|---|---|---|
| **Tier 1 — Detection** | SOC alert or staff report of potential incident | SOC Analyst → SOC Manager | Immediate |
| **Tier 2 — Triage** | Incident confirmed by SOC | SOC Manager → CIRT Lead / CISO | Within [15] minutes |
| **Tier 3 — Incident Management** | Incident classified Level 2 or above | CISO → CIO, Head of Technology Risk | Within [30] minutes |
| **Tier 4 — Senior Escalation** | Incident classified Level 3 | CIO/CISO → CEO, COO, CCO, CFO | Within [1] hour |
| **Tier 5 — Crisis Declaration** | Incident meets Level 4 criteria | CCMT Chair declares Cyber Crisis | Within [2] hours of Level 4 determination |

### 6.2 Escalation Contact Tree

*Maintain this contact tree separately in Appendix A to allow for regular updates without requiring full document re-approval.*

Refer to **Appendix A — Crisis Escalation Contact Directory** for the complete escalation contact tree including primary contacts, alternates, and out-of-hours contacts.

### 6.3 Escalation Communication Channels

| Channel | Primary Use | Backup Channel |
|---|---|---|
| [Secure Messaging Platform — e.g., Signal / Teams] | Real-time CCMT and CIRT communication | Voice calls to mobile |
| Dedicated Crisis Email Distribution List | Formal crisis communications | [Alternate email group] |
| Crisis Bridge Line | Voice coordination | [Bridge number and PIN] |
| Out-of-band Communication | Use when primary systems are compromised | [Pre-positioned mechanism — e.g., personal mobile, satellite] |

> **Note:** If primary communication channels are compromised or suspected to be monitored by a threat actor, out-of-band communication methods must be used immediately. Refer to Appendix B for out-of-band communication procedures.

---

## 7. Decision-Making Authority

*Define who has authority to make which decisions during a cyber crisis. Ambiguity in decision-making authority is a primary cause of delayed response.*

### 7.1 Crisis Declaration Authority

| Authority | Who |
|---|---|
| **Primary Crisis Declaration Authority** | [CCMT Chair — e.g., CEO or CRO] |
| **Alternate Crisis Declaration Authority** | [Alternate — e.g., CIO or CISO] |
| **Conditions for Alternate to Act** | Primary is unreachable after [15] minutes of attempted contact |

### 7.2 Decision Authority Matrix

*This matrix defines who has authority to approve key crisis decisions without requiring full CCMT consensus, enabling rapid response.*

| Decision | Authority | Escalate to CCMT If |
|---|---|---|
| Isolate a critical production system | CISO | System supports more than [X]% of customer transactions |
| Engage external IR/forensics vendor | CISO + CIO | Contract value exceeds [MYR threshold] |
| Notify BNM of a cyber incident | CCO + CISO | Always — mandatory joint decision |
| Issue public statement or media communication | Head of Communications + CEO | Always — CEO approval required |
| Invoke Business Continuity Plan | COO + CIO | Always |
| Invoke Disaster Recovery Plan | CIO + CISO | Always |
| Shut down internet-facing services | CIO + CISO | Always |
| Pay ransom demand | **Prohibited without Board approval** | Always — refer to Ransom Policy (Appendix C) |
| Engage law enforcement (PDRM / CyberSecurity Malaysia) | CCO + CEO | Always |
| Activate crisis insurance policy | CFO + CEO | Always |

### 7.3 Board Notification

- The **Board of Directors** or its **Risk Committee** shall be notified within **[X hours]** of a Level 4 cyber crisis declaration.
- Board notification is the responsibility of the **[CEO / CRO]**.
- An initial Board briefing shall include: nature of the crisis, systems affected, customer impact assessment, regulatory notification status, and immediate response actions taken.

---

## 8. Crisis Response Actions and Milestones

*Detail the specific actions to be executed during each phase of crisis response. Each action must have an owner and a target completion timeframe.*

### 8.1 Phase Overview

| Phase | Description | Timeframe (from declaration) |
|---|---|---|
| **Phase 1 — Activation** | Mobilize CCMT and CIRT, establish command center | 0–2 hours |
| **Phase 2 — Containment** | Isolate affected systems, prevent further compromise | 0–6 hours |
| **Phase 3 — Assessment** | Determine scope, impact, and threat actor TTPs | 2–24 hours |
| **Phase 4 — Eradication** | Remove threat actor access and malicious artifacts | 6–72 hours |
| **Phase 5 — Recovery** | Restore systems and services in priority order | 24–[X] hours |
| **Phase 6 — Post-Crisis** | Lessons learned, reporting, and remediation planning | [X] days post-recovery |

---

### 8.2 Phase 1 — Activation (0–2 Hours)

*This phase focuses on mobilizing response resources and establishing governance. Speed is critical.*

| # | Action | Owner | Target Completion | Success Criteria |
|---|---|---|---|---|
| 1.1 | Declare cyber crisis and notify CCMT members | CCMT Chair | T+0 | All CCMT members notified |
| 1.2 | Activate Crisis Command Center (physical or virtual) | COO / Facilities | T+30 min | Command center operational |
| 1.3 | Convene initial CCMT briefing | CCMT Chair | T+60 min | Briefing completed, situation assessed |
| 1.4 | Mobilize CIRT and assign response workstreams | CISO | T+30 min | CIRT activated and roles assigned |
| 1.5 | Engage external IR retainer if required | CISO | T+60 min | Vendor engaged and scoped |
| 1.6 | Establish crisis communication channels | Head of Comms | T+30 min | Channels operational |
| 1.7 | Initiate evidence preservation and forensic logging | Forensics Lead | T+60 min | Logging confirmed active |
| 1.8 | Conduct initial impact assessment and brief CCMT | CISO | T+90 min | Initial impact assessment presented |
| 1.9 | Determine BNM notification obligation and timeline | CCO | T+60 min | Notification decision documented |
| 1.10 | Notify Board / Risk Committee | CEO / CRO | T+[X] hours | Board notified per governance requirements |

---

### 8.3 Phase 2 — Containment (0–6 Hours)

*Containment actions aim to limit the blast radius of the attack and prevent further unauthorized access.*

| # | Action | Owner | Target Completion | Success Criteria |
|---|---|---|---|---|
| 2.1 | Identify and isolate compromised systems/segments | CIRT Lead | T+2 hours | Affected systems isolated from network |
| 2.2 | Reset and revoke compromised credentials | Infrastructure Lead | T+2 hours | Credentials revoked |
| 2.3 | Block identified threat actor IP addresses and domains | Network Security Lead | T+1 hour | Blocks confirmed at perimeter |
| 2.4 | Disable compromised accounts | CIRT Lead | T+1 hour | Accounts disabled |
| 2.5 | Implement emergency firewall and access control rules | Network Security Lead | T+2 hours | Rules applied and verified |
| 2.6 | Preserve forensic images of affected systems | Forensics Lead | T+4 hours | Images captured and stored securely |
| 2.7 | Confirm containment boundary and residual risk | CIRT Lead | T+6 hours | Containment boundary confirmed to CCMT |
| 2.8 | Assess customer-facing service impact | Operations Lead | T+2 hours | Impact assessment documented |
| 2.9 | Determine if BCP/DRP activation is required | COO / CIO | T+2 hours | BCP/DRP decision made |
| 2.10 | Brief CCMT on containment status | CISO | T+4 hours | CCMT briefed |

---

### 8.4 Phase 3 — Assessment (2–24 Hours)

*Deep-dive investigation to understand the full scope, root cause, and attacker tactics, techniques, and procedures (TTPs).*

| # | Action | Owner | Target Completion | Success Criteria |
|---|---|---|---|---|
| 3.1 | Conduct full scope assessment of compromise | Forensics Lead / IR Vendor | T+12 hours | Scope fully defined |
| 3.2 | Identify initial attack vector and root cause | Forensics Lead | T+24 hours | Root cause identified |
| 3.3 | Map attacker TTPs to MITRE ATT&CK framework | SOC Manager | T+24 hours | TTP mapping completed |
| 3.4 | Assess data exfiltration risk and volume | Forensics Lead | T+12 hours | Data impact assessment documented |
| 3.5 | Identify all affected customer accounts/data | CIRT Lead + Data Privacy Officer | T+24 hours | Customer impact list prepared |
| 3.6 | Assess third-party and supply chain exposure | Third-Party Risk Lead | T+24 hours | Third-party exposure assessed |
| 3.7 | Provide comprehensive impact report to CCMT | CISO | T+24 hours | Report presented to CCMT |
| 3.8 | Update BNM notification with detailed assessment | CCO | Per BNM timeline | Notification submitted |

---

### 8.5 Phase 4 — Eradication (6–72 Hours)

*Remove all threat actor presence, malicious artifacts, and unauthorized access from [Organization Name]'s environment.*

| # | Action | Owner | Target Completion | Success Criteria |
|---|---|---|---|---|
| 4.1 | Remove all identified malware and malicious artifacts | CIRT Lead | T+48 hours | Clean state verified |
| 4.2 | Patch or remediate exploited vulnerabilities | Infrastructure Lead | T+72 hours | Vulnerabilities remediated |
| 4.3 | Rebuild compromised systems from trusted gold images | Infrastructure Lead | T+72 hours | Systems rebuilt and verified |
| 4.4 | Reset all privileged account credentials enterprise-wide | CIRT Lead | T+24 hours | All privileged credentials reset |
| 4.5 | Validate eradication through independent scanning | SOC Manager / IR Vendor | T+72 hours | No indicators of compromise found |
| 4.6 | Confirm eradication with forensics lead | Forensics Lead | T+72 hours | Eradication confirmed and documented |

---

### 8.6 Phase 5 — Recovery (24 Hours to [X] Days)

*Restore systems and services in priority order, validated before return to production.*

| # | Action | Owner | Target Completion | Success Criteria |
|---|---|---|---|---|
| 5.1 | Define system recovery priority list (per BCP/DRP) | CIO + COO | T+24 hours | Priority list approved by CCMT |
| 5.2 | Restore Tier 1 critical systems (per priority list) | Infrastructure Lead | Per RTO | Systems restored and validated |
| 5.3 | Restore Tier 2 systems | Infrastructure Lead | Per RTO | Systems restored and validated |
| 5.4 | Restore Tier 3 systems | Infrastructure Lead | Per RTO | Systems restored and validated |
| 5.5 | Conduct security validation before each system goes live | SOC Manager | Before each restoration | Security sign-off obtained |
| 5.6 | Verify data integrity of restored systems | Application Lead | Per RPO | Data integrity confirmed |
| 5.7 | Resume customer-facing services in controlled manner | COO + CIO | Per RTO | Services restored without re-compromise |
| 5.8 | Notify customers of service restoration | Head of Comms | Upon service restoration | Customer notification issued |
| 5.9 | Confirm full operational restoration to CCMT | CIO | [Target date] | CCMT formally closes crisis phase |

**System Recovery Priority List:**

*Complete this table with [Organization Name]-specific systems, RTOs, and RPOs.*

| Priority | System / Service | RTO | RPO | Responsible Team | Notes |
|---|---|---|---|---|---|
| 1 (Critical) | [Core Banking System] | [X hours] | [X hours] | [Team] | |
| 1 (Critical) | [Payment / Settlement Systems] | [X hours] | [X hours] | [Team] | |
| 2 (High) | [Internet Banking / Mobile App] | [X hours] | [X hours] | [Team] | |
| 2 (High) | [ATM Network] | [X hours] | [X hours] | [Team] | |
| 3 (Medium) | [Internal Email / Collaboration] | [X hours] | [X hours] | [Team] | |
| 4 (Low) | [Non-critical internal systems] | [X hours] | [X hours] | [Team] | |

---

## 9. Accountable Owners

*Define the single accountable owner for each key crisis management workstream. Accountability must be singular — shared accountability is no accountability.*

| Workstream | Accountable Owner | Role | Backup Owner |
|---|---|---|---|
| Overall Crisis Governance | [Name] | CCMT Chair / CEO | [Alternate Name] |
| Technical Response | [Name] | CISO | [Alternate Name] |
| Forensics and Investigation | [Name] | Forensics Lead | [Alternate Name] |
| Network and Infrastructure | [Name] | Head of Infrastructure | [Alternate Name] |
| Application Recovery | [Name] | Head of Application Management | [Alternate Name] |
| Business Continuity | [Name] | Head of Business Continuity | [Alternate Name] |
| Regulatory Notification | [Name] | Chief Compliance Officer | [Alternate Name] |
| Legal and Liability | [Name] | General Counsel | [Alternate Name] |
| Customer Communication | [Name] | Head of Corporate Communications | [Alternate Name] |
| Staff Communication | [Name] | Head of Human Resources | [Alternate Name] |
| Media Relations | [Name] | Head of Corporate Communications | [Alternate Name] |
| Financial Impact Tracking | [Name] | Chief Financial Officer | [Alternate Name] |
| Third-Party Coordination | [Name] | Head of Third-Party Risk | [Alternate Name] |
| Insurance and Claims | [Name] | Head of Finance / Risk | [Alternate Name] |
| Board and Investor Relations | [Name] | CEO / CRO | [Alternate Name] |

---

## 10. Resource Requirements

*Define the resources — human, technical, financial, and external — required to execute this Plan.*

### 10.1 Human Resources

| Resource | Minimum Staffing | Source | Availability Requirement |
|---|---|---|---|
| CCMT Members | Full team ([X] members) | Internal — as defined in Section 5.1 | 24/7 on-call |
| CIRT Members | Minimum [X] core members | Internal SOC and IT | 24/7 on-call |
| Forensics Specialists | [X] internal + external retainer | Internal + [Vendor Name] | Activated within [X] hours |
| Legal Counsel | [X] internal + external | Internal + [Law Firm Name] | On-call |
| Communications Specialists | [X] members | Internal PR/Comms + [Agency Name] | On-call |
| Senior Management | CCMT as defined | Internal | 24/7 availability required during crisis |

### 10.2 Technology Resources

| Resource | Details | Location | Responsible Party |
|---|---|---|---|
| Forensic Investigation Tools | [e.g., EnCase, FTK, Velociraptor] | [Location/Access Method] | [Team] |
| SIEM Platform | [Platform Name] | [Location] | SOC |
| Endpoint Detection and Response (EDR) | [Platform Name] | Deployed enterprise-wide | SOC |
| Secure Evidence Storage | [Isolated storage system or cloud] | [Location] | Forensics Lead |
| Out-of-band Communication Systems | [Satellite / mobile / alternate network] | [Location] | [Team] |
| Crisis Management Platform | [Platform — e.g., D3 Security / ServiceNow] | [Location] | [Team] |
| Backup and Recovery Systems | [System Name] | [Location] | Infrastructure Team |
| Gold Image Repository | [Location and access method] | [Air-gapped / secure location] | Infrastructure Team |
| Cyber Threat Intelligence Feeds | [Vendors / platforms] | [Access method] | SOC |

### 10.3 External Resources

| Resource | Vendor / Provider | Contact | Engagement Trigger |
|---|---|---|---|
| Incident Response Retainer | [IR Firm Name] | [Contact Name, Phone, Email] | Level 3+ incident |
| Digital Forensics Firm | [Firm Name] | [Contact Name, Phone, Email] | Evidence required |
| Legal Counsel (Cyber) | [Law Firm Name] | [Contact Name, Phone, Email] | Legal exposure |
| Public Relations Agency | [Agency Name] | [Contact Name, Phone, Email] | Public statement required |
| Cyber Insurance Provider | [Insurer Name] | [Policy Number, Hotline] | Crisis declaration |
| CyberSecurity Malaysia (CSM) | [Contact] | +603-XXXX-XXXX | As required by regulation |
| NACSA | [Contact] | [Contact Details] | CNII incidents |
| PDRM Cyber Crime Division | [Contact] | [Contact Details] | Law enforcement required |
| BNM Supervision Contact | [Officer Name] | [Contact Details] | Regulatory notification |

### 10.4 Financial Resources

*Ensure pre-authorized spending limits are established before a crisis occurs to avoid delays during response.*

| Resource Category | Pre-Authorized Limit | Approval Authority | Notes |
|---|---|---|---|
| External IR/Forensics | Up to MYR [X] | CISO + CFO | Pre-approved vendor contract in place |
| Legal Fees | Up to MYR [X] | General Counsel + CFO | — |
| Crisis Communications | Up to MYR [X] | Head of Comms + CFO | — |
| Emergency IT Procurement | Up to MYR [X] | CIO + CFO | For replacement hardware/software |
| Customer Remediation | As required | CEO + CFO + Board | Subject to legal and risk assessment |
| Total Emergency Reserve | MYR [X] | CFO + CEO | Pre-approved crisis reserve fund |

---

## 11. Progress Tracking Mechanism

*Define how crisis response progress will be tracked, reported, and documented throughout the crisis lifecycle.*

### 11.1 Crisis Status Dashboard

A real-time crisis status dashboard shall be maintained throughout the crisis by the **Crisis Coordinator** (designated by the CCMT Chair). The dashboard shall include:

- Crisis declaration time and current phase
- Summary of systems affected and containment status
- Open actions, owners, and target completion times
- Overdue actions and escalation status
- Customer impact metrics
- Regulatory notification status
- Key decisions made and by whom
- Next CCMT briefing time

**Dashboard Platform:** [e.g., Microsoft Teams Crisis Channel / ServiceNow / SharePoint / Designated Crisis Management Tool]

### 11.2 CCMT Briefing Cadence

| Phase | Briefing Frequency | Format | Chair |
|---|---|---|---|
| Activation (Phase 1) | Every 30 minutes | War room / video call | CCMT Chair |
| Containment (Phase 2) | Every 60 minutes | War room / video call | CCMT Chair |
| Assessment (Phase 3) | Every 2–4 hours | Video call / written update | CCMT Chair |
| Eradication (Phase 4) | Every 4–8 hours | Video call / written update | CCMT Chair |
| Recovery (Phase 5) | Daily or as required | Video call / written report | CCMT Chair |
| Post-Crisis (Phase 6) | As scheduled | Formal meeting | CCMT Chair |

### 11.3 Crisis Action Log

All actions taken during a cyber crisis shall be recorded in the **Crisis Action Log**. This log is an official record and may be required for regulatory, legal, and insurance purposes.

| Log Field | Description |
|---|---|
| Timestamp | Date and time of action (24-hour format, Malaysia Standard Time) |
| Action Taken | Description of action |
| Taken By | Name and role of person who took the action |
| Authorized By | Name and role of authorizing person (if applicable) |
| Outcome | Result of the action |
| Next Step | Follow-on action required |

### 11.4 Situation Reports (SitRep)

Formal Situation Reports shall be issued at defined intervals to the CCMT, Board, and regulators:

| SitRep | Timing | Recipients | Author |
|---|---|---|---|
| SitRep 1 — Initial | Within [2] hours of crisis declaration | CCMT, Board | CISO |
| SitRep 2 — Containment Update | [6] hours post-declaration | CCMT, Board, BNM (if required) | CISO / CCO |
| SitRep 3 — Assessment Update | [24] hours post-declaration | CCMT, Board, BNM | CISO / CCO |
| SitRep [N] — Ongoing | Every [24] hours until crisis closure | CCMT, Board, BNM | CISO / CCO |
| Final SitRep — Closure | Upon crisis closure | CCMT, Board, BNM | CISO / CCO |

**SitRep Template:** Refer to **Appendix D — Situation Report Template**.

---

## 12. Communication Plan

*Define internal and external communication strategies to be activated during a cyber crisis.*

### 12.1 Internal Communication

| Audience | Message Type | Channel | Frequency | Owner |
|---|---|---|---|---|
| CCMT | Real-time crisis updates | Crisis bridge / war room | Continuous | CCMT Chair |
| CIRT | Technical workstream updates | Secure messaging | Continuous | CISO |
| All Staff | General awareness / behavioral guidance | Internal email / intranet | As needed | Head of HR + Head of Comms |
| Branch Managers | Customer-facing guidance | Email + phone | As needed | COO |
| Third-Party Vendors | Coordination on affected integrations | Email / phone | As needed | Third-Party Risk Lead |
| Board of Directors | Crisis status updates | Formal briefing / email | Per Section 7.3 | CEO / CRO |

### 12.2 External Communication

| Audience | Message Type | Channel | Timing | Owner | Approval Required |
|---|---|---|---|---|---|
| BNM | Regulatory notification | Secure written submission | Per RMiT Clause 11.4 | CCO | CEO + CCO |
| Customers (affected) | Incident notification and guidance | Email / SMS / App notification | As soon as practicable | Head of Comms | CEO |
| General Public | Media statement | Press release / website | As required | Head of Comms | CEO |
| Media | Statement only — no ad hoc responses | Designated spokesperson only | As required | CEO / Head of Comms | CEO |
| Law Enforcement | Incident report | PDRM / CSM | As required | General Counsel + CEO | CEO |
| Cyber Insurance Provider | Claim notification | Policy hotline + email | Upon crisis declaration | CFO | CEO |

### 12.3 Communication Restrictions

- **No employee** other than designated spokespersons shall communicate with media, investors, or regulators during a cyber crisis without explicit CCMT authorization.
- **No technical details** of the compromise shall be shared in external communications without approval from the CISO and General Counsel.
- All external statements must be reviewed by **Legal Counsel** before issuance.
- Social media monitoring shall be activated upon crisis declaration. Refer to **Appendix E — Social Media Monitoring Protocol**.

---

## 13. Regulatory Notification Obligations

*BNM RMiT mandates specific timelines for regulatory notification. This section operationalizes that obligation.*

### 13.1 BNM Notification Requirements

Under RMiT Clause 11.4, [Organization Name] is required to notify BNM of significant cyber incidents within prescribed timeframes.

| Notification Type | Trigger | Timeframe | Format | Owner |
|---|---|---|---|---|
| **Initial Notification** | Cyber crisis declaration (Level 4) or significant Level 3 incident | Within [X] hours of detection | BNM prescribed format | CCO + CISO |
| **Progress Update** | Material changes in scope, impact, or status | As material changes occur | BNM prescribed format | CCO |
| **Final Report** | Resolution of the incident | Within [30] calendar days of resolution | BNM prescribed format | CCO + CISO |

### 13.2 Other Regulatory Notifications

| Regulator / Authority | Trigger | Timeframe | Owner |
|---|---|---|---|
| CyberSecurity Malaysia (MyCERT) | Cyber incident affecting national infrastructure | As soon as practicable | CCO + CISO |
| NACSA | CNII-related incident | As soon as practicable | CCO + CISO |
| PDRM Cyber Crime Division | Criminal activity suspected | As soon as practicable | General Counsel + CEO |
| PDPA-related notification (if applicable) | Confirmed personal data breach | As required under PDPA | Data Protection Officer |
| Payment Card Industry (PCI-DSS) | Cardholder data compromise | Within 24 hours | CCO + Head of Payments |

### 13.3 Notification Decision Log

All regulatory notification decisions — including decisions **not** to notify — shall be documented in the **Regulatory Notification Decision Log**, including the rationale, decision-maker, and timestamp.

---

## 14. Post-Crisis Activities

*Structured post-crisis activities ensure organizational learning and continuous improvement.*

### 14.1 Crisis Closure Criteria

A cyber crisis may be formally closed when:

- [ ] All compromised systems have been eradicated and rebuilt.
- [ ] All affected systems have been restored to production.
- [ ] No residual indicators of compromise are detected.
- [ ] All regulatory notifications have been submitted.
- [ ] Customer-facing services are fully operational.
- [ ] CCMT has formally declared crisis closure.
- [ ] Final Situation Report has been issued to the Board and BNM.

### 14.2 Post-Incident Review (PIR)

A formal **Post-Incident Review** shall be conducted within **[15] business days** of crisis closure.

| PIR Component | Description | Owner |
|---|---|---|
| Timeline Reconstruction | Full timeline of events from initial compromise to closure | Forensics Lead |
| Root Cause Analysis | Identification of the root cause and contributing factors | CISO |
| Response Effectiveness Assessment | Evaluation of response speed, decisions, and coordination | CCMT Chair |
| Gaps and Weaknesses | Identification of gaps in people, process, and technology | CISO + COO |
| Lessons Learned | Documented learnings and recommended improvements | All CCMT members |
| Remediation Action Plan | Specific, time-bound actions to address identified gaps | CISO + relevant leads |

### 14.3 Remediation Action Tracking

| # | Finding / Gap | Recommended Action | Owner | Target Date | Status |
|---|---|---|---|---|---|
| [1] | [Finding description] | [Action description] | [Owner] | [Date] | [Open / In Progress / Closed] |
| [2] | [Finding description] | [Action description] | [Owner] | [Date] | [Open / In Progress / Closed] |
| [3] | [Finding description] | [Action description] | [Owner] | [Date] | [Open / In Progress / Closed] |

### 14.4 Board Post-Crisis Briefing

A formal **Board Post-Crisis Report** shall be presented to the Board of Directors within **[30] calendar days** of crisis closure. The report shall include:

- Executive summary of the incident and response
- Financial impact assessment
- Customer and reputational impact
- Regulatory actions taken
- Key lessons learned
- Remediation roadmap and investments required
- Management assurance on control improvements

---

## 15. Roles and Responsibilities

*This RACI matrix defines who is Responsible, Accountable, Consulted, and Informed for each key crisis management activity.*

**RACI Key:**
- **R** — Responsible (does the work)
- **A** — Accountable (single owner, approves the outcome)
- **C** — Consulted (provides input)
- **I** — Informed (kept informed of progress/outcome)

| Activity | CCMT Chair (CEO/CRO) | CISO | CIO | CCO | COO | CFO | Head of Comms | General Counsel | Forensics Lead | SOC Manager |
|---|---|---|---|---|---|---|---|---|---|---|
| Declare cyber crisis | A | C | C | C | C | I | I | I | — | I |
| Activate CCMT | A | R | C | C | C | I | I | I | — | I |
| Technical containment | I | A | R | I | I | I | — | I | R | R |
| Forensic investigation | I | A | I | I | I | I | — | C | R | C |
| BNM notification | A | C | — | R | — | — | — | C | — | — |
| Customer communication | A | C | — | C | C | — | R | C | — | — |
| Media statement | A | — | — | C | — | — | R | C | — | — |
| Board notification | R | C | C | C | C | C | — | C | — | — |
| Business continuity activation | A | C | R | — | R | I | — | — | — | — |
| Disaster recovery activation | A | C | R | — | C | I | — | — | — | — |
| Crisis budget authorization | A | C | C | — | C | R | — | — | — | — |
| Post-incident review | A | R | C | C | C | I | I | C | R | C |
| Board post-crisis report | A | R | C | C | C | C | I | C | — | — |
| Plan maintenance and testing | I | A | C | C | C | — | — | — | — | R |

---

## 16. Training and Exercising

*A crisis management plan that has not been tested is a plan that will fail. Regular exercising is a regulatory expectation under RMiT.*

### 16.1 Training Requirements

| Training Type | Target Audience | Frequency | Owner |
|---|---|---|---|
| Crisis Management Plan Awareness | All CCMT members | Annual and upon plan update | CISO |
| Crisis Communications Training | Head of Comms, CEO | Annual | Head of Comms |
| Technical IR Training | CIRT members | Annual + as needed | CISO |
| Escalation Procedure Training | All staff (awareness level) | Annual | Head of HR + CISO |

### 16.2 Exercise Programme

| Exercise Type | Description | Frequency | Participants | Owner |
|---|---|---|---|---|
| **Tabletop Exercise** | Discussion-based walkthrough of a simulated cyber crisis scenario | Annual (minimum) | CCMT + CIRT | CISO |
| **Functional Exercise** | Activation of crisis communication and decision-making processes without full system recovery | Annual | CCMT | CISO + COO |
| **Full-Scale Exercise** | End-to-end simulation including technical response, communication, and recovery | Every [2] years | CCMT + CIRT + Key Departments | CISO |
| **Red Team Exercise** | Adversarial simulation to test detection, escalation, and response | Every [2] years | SOC + CIRT (unannounced) | CISO / External Red Team |

### 16.3 Exercise Records

Records of all exercises, including exercise design, participation, findings, and remediation actions, shall be maintained and made available to BNM upon request.

| Exercise | Date | Participants | Key Findings | Remediation Actions | Status |
|---|---|---|---|---|---|
| [Tabletop — Ransomware Scenario] | [Date] | [Names/Roles] | [Summary] | [Actions] | [Open/Closed] |
| [Full-Scale Exercise] | [Date] | [Names/Roles] | [Summary] | [Actions] | [Open/Closed] |

---

## 17. Review and Approval

### 17.1 Review Schedule

This Plan shall be reviewed:

- **Annually** — as a minimum, by the [CCMT Chair / CISO].
- **Following any declared cyber crisis** — to incorporate lessons learned.
- **Following significant changes** to [Organization Name]'s technology environment, organizational structure, or regulatory requirements.
- **Following a change in crisis management personnel** in key roles.

### 17.2 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial release | [Approver Name, Role] |
| [1.1] | [Date] | [Author Name, Role] | [Description of changes] | [Approver Name, Role] |
| [2.0] | [Date] | [Author Name, Role] | [Description of major revision] | [Approver Name, Role] |

### 17.3 Approval Sign-Off

*This document requires the following approvals before it is considered effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Preparer | [Name], [Title] | | [Date] |
| Reviewer — Technology Risk | [Name], [Title] | | [Date] |
| Reviewer — Compliance | [Name], [Title] | | [Date] |
| Reviewer — Legal | [Name], [Title] | | [Date] |
| Approver — CISO | [Name], Chief Information Security Officer | | [Date] |
| Approver — CIO | [Name], Chief Information Officer | | [Date] |
| Final Approver | [Name], [CEO / CRO / Board Risk Committee Chair] | | [Date] |

---

## 18. References

*List all regulatory, policy, and standards references that underpin this document.*

### 18.1 Regulatory References

| Reference | Title | Issuing Authority | Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | 11.5 (primary), 11.1, 11.3, 11.4, 10.4 |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Section 47 |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Section 57 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Applicable provisions |
| NACSA NCSP | National Cyber Security Policy | NACSA | Applicable provisions |
| [Payment Card Standards] | PCI-DSS v[X] | PCI Security Standards Council | [Relevant requirements] |

### 18.2 Internal Policy References

| Document | Document ID | Owner |
|---|---|---|
| Cyber Incident Response Plan | [Doc ID] | CISO |
| Business Continuity Plan | [Doc ID] | Head of BCM |
| Disaster Recovery Plan | [Doc ID] | CIO |
| Information Security Policy | [Doc ID] | CISO |
| Data Classification Policy | [Doc ID] | CISO / DPO |
| Third-Party Risk Management Policy | [Doc ID] | Head of Third-Party Risk |
| Crisis Communications Policy | [Doc ID] | Head of Corporate Communications |
| Technology Risk Management Framework | [Doc ID] | Head of Technology Risk |
| Ransom Payment Policy | [Doc ID] | CEO + General Counsel |

### 18.3 Standards and Frameworks

| Standard | Description |
|---|---|
| NIST Cybersecurity Framework (CSF) 2.0 | Cyber risk management framework reference |
| ISO/IEC 27001:2022 | Information security management — Clause A.5.30 (ICT Readiness for Business Continuity) |
| MITRE ATT&CK Framework | Adversary tactics, techniques, and procedures reference |
| NIST SP 800-61 Rev. 2 | Computer Security Incident Handling Guide |
| SANS Incident Response Process | Six-phase incident response methodology |

---

## 19. Appendices

### Appendix A — Crisis Escalation Contact Directory

*Maintain this directory separately to allow frequent updates (e.g., personnel changes) without requiring full document re-approval. This appendix is classified Confidential — Restricted.*

| Role | Primary Contact | Mobile | Email | Alternate Contact | Alt Mobile | Alt Email |
|---|---|---|---|---|---|---|
| CCMT Chair | [Name] | [Number] | [Email] | [Name] | [Number] | [Email] |
| CISO | [Name] | [Number] | [Email] | [Name] | [Number] | [Email] |
| CIO | [Name] | [Number] | [Email] | [Name] | [Number] | [Email] |
| CCO | [Name] | [Number] | [Email] | [Name] | [Number] | [Email] |
| General Counsel | [Name] | [Number] | [Email] | [Name] | [Number] | [Email] |
| External IR Retainer | [Vendor] | [Hotline] | [Email] | [Alt Contact] | [Number] | [Email] |
| BNM Supervision Officer | [Name] | [Number] | [Email] | — | — | — |
| CyberSecurity Malaysia | MyCERT Hotline | 1-300-88-2999 | [report@mycert.org.my](mailto:report@mycert.org.my) | — | — | — |

---

### Appendix B — Out-of-Band Communication Procedures

*Detailed procedures for maintaining crisis communication when primary channels (email, Teams, corporate mobile) are compromised or suspected to be monitored by a threat actor.*

**Trigger:** Out-of-band communication shall be activated when:
- Primary corporate communication systems are confirmed or suspected to be compromised.
- CISO or CCMT Chair directs a switch to out-of-band channels.

| Method | Details | Access Instructions | Responsible Party |
|---|---|---|---|
| Personal Mobile Devices | Use personal (non-corporate) mobile phones | Contact numbers in Appendix A | All CCMT members |
| Pre-positioned Secure Phones | [Details of pre-positioned devices] | [Storage location and access] | [Responsible party] |
| Physical Meeting | Convene in person at [Alternate Command Center address] | [Access instructions] | COO / Facilities |
| [Other Method] | [Details] | [Instructions] | [Owner] |

---

### Appendix C — Ransom Payment Policy

*[Organization Name]'s position on ransom payments is set out in this appendix. Decisions regarding ransom payments carry significant legal, ethical, financial, and reputational implications and require the highest level of authorization.]*

**Policy Statement:** [Organization Name]'s default position is that ransom payments are **not authorized** without explicit Board approval and legal advice confirming that payment does not violate Malaysian law or applicable sanctions regimes.

**If a ransom demand is received:**

1. Do not engage with the threat actor without authorization from the CCMT Chair and General Counsel.
2. Immediately notify the CCMT Chair, General Counsel, and CFO.
3. Engage legal counsel to assess legality of payment and sanctions exposure.
4. Notify BNM and law enforcement as required.
5. Conduct a cost-benefit analysis of payment vs. recovery from backups.
6. Any payment decision requires **Board approval**.

---

### Appendix D — Situation Report (SitRep) Template

**CYBER CRISIS SITUATION REPORT**

| Field | Details |
|---|---|
| **Report Number** | SitRep [#] |
| **Organization** | [Organization Name] |
| **Date / Time** | [Date, Time MST] |
| **Prepared By** | [Name, Role] |
| **Distribution** | [CCMT / Board / BNM] |

**1. Incident Summary**

*[Brief description of the incident, including initial detection time, nature of attack, and current phase.]*

**2. Systems Affected**

*[List of confirmed affected systems and services, current status (compromised / isolated / restored).]*

**3. Customer Impact**

*[Number of customers affected, services unavailable, data at risk.]*

**4. Containment Status**

*[Summary of containment actions taken and current containment boundary.]*

**5. Key Actions Completed Since Last SitRep**

*[Bulleted list of significant actions completed since the previous report.]*

**6. Key Actions Planned in Next Period**

*[Bulleted list of actions planned for the next reporting period.]*

**7. Regulatory Notification Status**

*[BNM notification — submitted / pending / not required. Other regulators.]*

**8. Financial Impact (Preliminary)**

*[Estimated or confirmed financial impact to date.]*

**9. Risks and Issues**

*[Current risks and blockers to effective response.]*

**10. Next SitRep**

*[Scheduled time and date of next Situation Report.]*

---

### Appendix E — Social Media Monitoring Protocol

*During a cyber crisis, social media may amplify the incident, spread misinformation, or provide threat intelligence. This appendix defines the monitoring and response approach.*

| Activity | Owner | Frequency | Tools |
|---|---|---|---|
| Monitor social media for crisis-related mentions | [Social Media Team / PR Agency] | Continuous | [Monitoring platform — e.g., Meltwater, Brandwatch] |
| Identify and flag misinformation | [Social Media Team] | Continuous | — |
| Recommend corrective communication | [Head of Comms] | As identified | — |
| Approve corrective posts | [CEO + Head of Comms] | Before publishing | — |
| Monitor for leaked technical details | [CISO + Social Media Team] | Continuous | — |

**Response to Misinformation:** Any corrective communication on social media requires approval from the **CEO** and **Head of Communications** before posting.

---

### Appendix F — Cyber Crisis Exercise Log

*Record of all crisis management exercises conducted. To be updated after each exercise.*

| Exercise # | Exercise Type | Date | Scenario | Facilitator | Participants | Key Findings | Action Items | Closure Date |
|---|---|---|---|---|---|---|---|---|
| [1] | Tabletop | [Date] | [Scenario description] | [Name] | [List of roles] | [Key findings] | [Action items] | [Date] |
| [2] | Full-Scale | [Date] | [Scenario description] | [Name] | [List of roles] | [Key findings] | [Action items] | [Date] |

---

### Appendix G — Glossary

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank of Malaysia |
| BCP | Business Continuity Plan |
| CCMT | Cyber Crisis Management Team |
| CIRT | Cyber Incident Response Team |
| CISO | Chief Information Security Officer |
| CIO | Chief Information Officer |
| CCO | Chief Compliance Officer |
| COO | Chief Operating Officer |
| DRP | Disaster Recovery Plan |
| IoC | Indicator of Compromise |
| MITRE ATT&CK | Adversarial Tactics, Techniques, and Common Knowledge framework |
| NACSA | National Cyber Security Agency Malaysia |
| PDPA | Personal Data Protection Act 2010 |
| PDRM | Polis Diraja Malaysia (Royal Malaysia Police) |
| PIR | Post-Incident Review |
| RMiT | Risk Management in Technology (BNM Policy Document) |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SitRep | Situation Report |
| SOC | Security Operations Center |
| TTP | Tactics, Techniques, and Procedures |

---

*End of Document*

---

*This document is classified **Confidential** and is the property of [Organization Name]. It must be stored securely, handled in accordance with [Organization Name]'s Information Classification Policy, and not reproduced or distributed without authorization. Printed copies are uncontrolled — always refer to the document management system for the current version.*

| Document ID | [Document ID] | Version | 1.0 |
|---|---|---|---|
| **Last Review** | [Last Review Date] | **Next Review** | [Next Review Date] |