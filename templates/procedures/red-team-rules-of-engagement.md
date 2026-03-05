# Red Team Rules of Engagement

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Department Head, e.g., Head of Cyber Security / Head of Technology Risk] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — six months from Last Review Date] |
| **Approved By** | [Approved By] |
| **Organisation** | [Organisation Name] |
| **Regulatory Framework** | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document |
| **RMiT Clause Reference** | 11.13 |

---

> **Document Sensitivity Notice:** This document is classified **Confidential**. It contains operational security details related to adversarial simulation exercises. Distribution is restricted to authorised personnel only. Unauthorised disclosure may compromise the integrity of security testing activities and expose [Organisation Name] to increased cyber risk.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Acronyms](#4-definitions-and-acronyms)
5. [Red Team Exercise Framework](#5-red-team-exercise-framework)
6. [Process Flow and Methodology](#6-process-flow-and-methodology)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Authorisation and Approvals](#8-authorisation-and-approvals)
9. [Scope Boundaries and Constraints](#9-scope-boundaries-and-constraints)
10. [Tools, Techniques, and Systems](#10-tools-techniques-and-systems)
11. [Communication and Coordination Protocols](#11-communication-and-coordination-protocols)
12. [Escalation Procedures](#12-escalation-procedures)
13. [Incident Handling During Exercises](#13-incident-handling-during-exercises)
14. [Data Handling and Evidence Management](#14-data-handling-and-evidence-management)
15. [Reporting Requirements](#15-reporting-requirements)
16. [Post-Exercise Review and Remediation](#16-post-exercise-review-and-remediation)
17. [Roles and Responsibilities (RACI)](#17-roles-and-responsibilities-raci)
18. [Review and Approval](#18-review-and-approval)
19. [References](#19-references)
20. [Appendices](#20-appendices)

---

## 1. Purpose

*Describe the intent of this document and why it exists within the organisation's security programme.*

This document establishes the formal **Rules of Engagement (RoE)** governing all red team exercises conducted by or on behalf of **[Organisation Name]**. It defines the boundaries, authorisation requirements, operational protocols, and responsibilities that must be observed throughout the planning, execution, and closure phases of any adversarial simulation or red team activity.

The Rules of Engagement serve to:

- Ensure red team activities are conducted in a controlled, authorised, and legally compliant manner.
- Protect the confidentiality, integrity, and availability of [Organisation Name]'s production systems, customer data, and critical infrastructure during testing.
- Provide clear operational guidance to red team operators, blue team defenders, and management stakeholders.
- Satisfy the requirements of BNM's Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.13, relating to advanced security assessments and threat-led penetration testing.
- Establish accountability and traceability for all actions taken during red team exercises.

---

## 2. Scope and Applicability

*Define which systems, environments, entities, and personnel this document applies to. Be explicit about what is in scope and what is explicitly excluded.*

### 2.1 Organisational Scope

This document applies to:

- All internal red team personnel employed by [Organisation Name].
- All external third-party red team providers engaged under formal contract with [Organisation Name].
- All business units, technology teams, and support functions whose systems, infrastructure, or processes may be targeted during a red team exercise.
- All members of the Blue Team / Security Operations Centre (SOC) who may be subject to real-time detection and response evaluation.

### 2.2 Systems and Environment Scope

The following environments are subject to this Rules of Engagement policy:

| Environment | Applicability | Notes |
|---|---|---|
| Production Systems | In scope (with prior written approval) | Requires elevated authorisation; restricted techniques |
| Pre-Production / UAT | In scope | Standard authorisation required |
| Development Environments | In scope | Lower risk; standard authorisation required |
| Disaster Recovery (DR) Sites | In scope (with prior written approval) | Requires coordination with BC/DR team |
| Cloud Infrastructure ([Cloud Provider, e.g., AWS / Azure / GCP]) | In scope | Cloud-specific constraints apply |
| Third-Party Hosted Systems | In scope only with explicit third-party consent | Third-party consent letter required |
| Customer-Facing Systems | Restricted scope | Limited to defined test windows; customer impact mitigation required |
| Core Banking / Payment Systems | Restricted scope | Senior management approval and BNM notification may be required |

### 2.3 Exclusions

The following are explicitly **out of scope** unless separately authorised in writing:

- Physical intrusion into data centres or branch premises (unless a physical red team component is specifically approved).
- Social engineering targeting customers of [Organisation Name].
- Denial-of-service (DoS) or distributed denial-of-service (DDoS) attack simulations against production systems.
- Exploitation of systems owned by third parties without their explicit written consent.
- Any technique that would result in irreversible data destruction or service disruption.

### 2.4 Applicability by Exercise Type

| Exercise Type | Applicable | Specific Addendum Required |
|---|---|---|
| Full-scope Red Team Exercise | Yes | Yes — Exercise-specific RoE addendum |
| Targeted Adversary Simulation | Yes | Yes — Exercise-specific RoE addendum |
| Purple Team Exercise | Yes | No — Standard RoE applies |
| Threat-Led Penetration Test (TLPT) | Yes | Yes — BNM TLPT framework addendum |
| Social Engineering Assessment | Yes | Yes — Social engineering addendum |
| Physical Security Assessment | Conditional | Yes — Physical security addendum |

---

## 3. Regulatory Context

*Reference the specific regulatory obligations that necessitate this document. Include direct clause references.*

[Organisation Name] is a [licensed financial institution / payment system operator / designated financial institution] regulated by **Bank Negara Malaysia (BNM)**. This document has been developed to comply with the following regulatory requirements:

### 3.1 BNM Risk Management in Technology (RMiT)

The BNM RMiT Policy Document issued on [Issue Date, e.g., 1 July 2020] and effective [Effective Date] establishes minimum standards for technology risk management in financial institutions.

**Clause 11.13 — Adversarial Attack Simulation:**

> *[Reproduce or paraphrase the relevant text of BNM RMiT Clause 11.13 here. As of the time of this template's creation, Clause 11.13 addresses requirements for financial institutions to conduct regular adversarial attack simulations, including red team exercises, to assess the resilience of people, processes, and technology against realistic threats.]*

Key obligations under Clause 11.13 include:

- [ ] Conducting adversarial attack simulations periodically to test the organisation's detection and response capabilities.
- [ ] Ensuring exercises are conducted by qualified and experienced personnel.
- [ ] Maintaining documented rules of engagement for each exercise.
- [ ] Reporting findings and remediation plans to senior management and the Board (where required).
- [ ] Retaining exercise records for a minimum period as specified by BNM.

### 3.2 Related BNM Requirements

| Clause | Title | Relevance |
|---|---|---|
| RMiT 11.1 – 11.12 | Cybersecurity Programme | Overarching cybersecurity governance context |
| RMiT 11.14 | Vulnerability Assessment and Penetration Testing | Complementary to red team activities |
| RMiT 10.x | Incident Management | Governs response to incidents that may arise during exercises |
| RMiT 5.x | Technology Risk Governance | Senior management oversight obligations |

### 3.3 Other Applicable Frameworks and Legislation

| Reference | Applicability |
|---|---|
| Personal Data Protection Act 2010 (PDPA) | Data accessed during exercises must be handled in compliance with PDPA |
| Computer Crimes Act 1997 | All activities must remain within authorised boundaries to avoid legal exposure |
| NACSA Cyber Security Framework | Reference for cyber resilience standards |
| MITRE ATT&CK Framework | Reference methodology for adversary emulation |
| TIBER-MY / TIBER-EU (if applicable) | Reference for threat-led red team methodology |
| ISO/IEC 27001:2022 | Alignment with information security management system |
| NIST SP 800-115 | Technical guide for information security testing |

---

## 4. Definitions and Acronyms

*Define all key terms used throughout this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Red Team** | A group of security professionals who simulate the tactics, techniques, and procedures (TTPs) of real-world adversaries to assess an organisation's detection and response capabilities. |
| **Blue Team** | The internal security team (typically the SOC) responsible for defending systems and detecting red team activities during an exercise. |
| **Purple Team** | A collaborative exercise format where red and blue team members work together to improve detection and response capabilities in real time. |
| **Rules of Engagement (RoE)** | The set of conditions, constraints, and protocols governing the conduct of a red team exercise. |
| **Threat-Led Penetration Testing (TLPT)** | An advanced form of red team exercise driven by current threat intelligence specific to the organisation's industry and threat landscape. |
| **Exercise-Specific RoE Addendum** | A supplementary document appended to this master RoE that defines the specific scope, targets, and constraints for a particular exercise. |
| **Get-Out-of-Jail (GOJ) Letter** | A formal authorisation letter carried by red team operators confirming that their activities are sanctioned by [Organisation Name] management. |
| **Deconfliction** | The process of informing relevant parties (e.g., SOC, IT operations) that a specific activity is part of the red team exercise rather than a genuine attack. |
| **Tactics, Techniques, and Procedures (TTPs)** | The specific methods used by threat actors to achieve their objectives, as catalogued in frameworks such as MITRE ATT&CK. |
| **Crown Jewels** | The most critical assets of the organisation that represent the primary objectives of an adversarial simulation. |
| **Assumed Breach** | A red team scenario that begins with the assumption that an attacker has already gained initial access, allowing focus on lateral movement and privilege escalation. |

### 4.2 Acronyms

| Acronym | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| RoE | Rules of Engagement |
| TLPT | Threat-Led Penetration Testing |
| TTPs | Tactics, Techniques, and Procedures |
| SOC | Security Operations Centre |
| CISO | Chief Information Security Officer |
| CIO | Chief Information Officer |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| IOC | Indicator of Compromise |
| C2 | Command and Control |
| VPN | Virtual Private Network |
| OSINT | Open Source Intelligence |
| RACI | Responsible, Accountable, Consulted, Informed |
| GOJ | Get-Out-of-Jail |
| DR | Disaster Recovery |
| UAT | User Acceptance Testing |

---

## 5. Red Team Exercise Framework

*Describe the overall framework within which red team exercises are conducted at the organisation. Include exercise types and frequency.*

### 5.1 Exercise Principles

All red team exercises conducted by or on behalf of [Organisation Name] shall adhere to the following principles:

1. **Authorisation:** No red team activity shall commence without formal written authorisation from the designated approving authority.
2. **Controlled Impact:** Activities shall be designed to minimise operational disruption. The objective is to test, not to cause harm.
3. **Realism:** Exercises shall simulate realistic, intelligence-led adversary behaviours relevant to [Organisation Name]'s threat landscape.
4. **Confidentiality:** Exercise details, findings, and reports are classified Confidential. Distribution is strictly controlled.
5. **Accountability:** All red team actions shall be logged and attributable to individual operators.
6. **Collaboration:** Findings shall be shared constructively to improve organisational security posture, not to apportion blame.
7. **Compliance:** All activities shall remain within the bounds of applicable Malaysian law and regulation.

### 5.2 Annual Exercise Planning

| Activity | Frequency | Responsible Party |
|---|---|---|
| Red Team Exercise Programme Review | Annual | [CISO / Head of Cyber Security] |
| Full-Scope Red Team Exercise | [Annual / Bi-annual] | [Red Team Lead] |
| Targeted Adversary Simulation | [Quarterly / Semi-annual] | [Red Team Lead] |
| Purple Team Exercise | [Quarterly] | [Red Team Lead / SOC Manager] |
| RoE Document Review | Semi-annual | [Head of Cyber Security] |
| Exercise Results Reporting to Management | Post-exercise | [CISO] |
| Regulatory Reporting (if required) | As required | [CRO / CISO] |

### 5.3 Exercise Lifecycle

```
┌─────────────────────────────────────────────────────────┐
│                  RED TEAM EXERCISE LIFECYCLE              │
│                                                           │
│  1. PLANNING    →  2. AUTHORISATION  →  3. PREPARATION   │
│                                                           │
│  4. EXECUTION   →  5. DECONFLICTION  →  6. REPORTING     │
│                                                           │
│  7. REMEDIATION →  8. LESSONS LEARNED →  9. CLOSURE      │
└─────────────────────────────────────────────────────────┘
```

*Each phase is described in detail in Section 6.*

---

## 6. Process Flow and Methodology

*Document the step-by-step process that governs each red team exercise from initiation to closure.*

### 6.1 Phase 1: Planning and Scoping

**Objective:** Define the exercise objectives, scope, timeline, and success criteria.

**Steps:**

1. **Exercise Initiation:** [CISO / Head of Cyber Security] raises a formal exercise request, identifying business objectives and regulatory drivers.
2. **Threat Intelligence Briefing:** Threat intelligence team provides a briefing on current threat actors, TTPs, and campaigns relevant to the financial services sector in Malaysia.
3. **Scope Definition:** Red Team Lead works with [CISO / Head of Technology Risk] to define:
   - Target systems and environments
   - Excluded systems and hard stops
   - Attack scenarios and objectives (e.g., exfiltrate customer data, achieve domain admin, compromise core banking)
   - Physical, digital, or social engineering components
4. **Exercise-Specific RoE Addendum:** Red Team Lead drafts the exercise-specific RoE addendum (see Appendix A template).
5. **Timeline and Resource Planning:** Define start date, end date, test windows, and resource allocation.
6. **Kick-off Meeting:** Conduct planning meeting with all authorised stakeholders. Document attendance.

**Outputs:**
- [ ] Exercise brief document
- [ ] Draft exercise-specific RoE addendum
- [ ] Proposed timeline
- [ ] Threat intelligence summary

---

### 6.2 Phase 2: Authorisation

**Objective:** Obtain formal written authorisation from all required approving authorities before any exercise activity commences.

**Steps:**

1. **RoE Addendum Review:** Exercise-specific RoE addendum is reviewed by [Head of Technology Risk / Legal / Compliance].
2. **Legal Review:** Legal team confirms that planned activities are compliant with the Computer Crimes Act 1997 and all applicable Malaysian legislation.
3. **Third-Party Consent (if applicable):** Obtain written consent from any third-party system owners.
4. **Management Approval:** Obtain sign-off from all required approving authorities (see Section 8).
5. **Issue Get-Out-of-Jail Letters:** Issue GOJ letters to all red team operators. Letters must be signed by [CISO / Managing Director].
6. **Notification to Insurance Provider (if required):** Notify cyber insurance provider of planned exercise as required by policy terms.

**Outputs:**
- [ ] Signed exercise-specific RoE addendum
- [ ] Legal review confirmation
- [ ] Third-party consent letters (where applicable)
- [ ] Signed management authorisation
- [ ] GOJ letters issued to all operators

**Gate Criteria:** No exercise activity may commence until all outputs above are completed and filed.

---

### 6.3 Phase 3: Preparation

**Objective:** Prepare all technical infrastructure, tools, and logistics required for exercise execution.

**Steps:**

1. **Infrastructure Setup:** Red team establishes attack infrastructure (C2 servers, phishing domains, etc.) in accordance with approved tools list (see Section 10).
2. **OSINT and Reconnaissance Planning:** Plan initial reconnaissance activities within approved scope.
3. **Tool Configuration:** Configure and test all approved tools. Verify that tools are updated and free of known vulnerabilities.
4. **Operator Briefing:** Brief all red team operators on exercise scope, objectives, constraints, and emergency stop procedures.
5. **Contact List Preparation:** Prepare and distribute emergency contact lists to all red team operators.
6. **Deconfliction Mechanism Setup:** Establish secure, out-of-band communication channel between Red Team Lead and designated Blue Team point of contact (for deconfliction only — not for sharing exercise intelligence).
7. **Evidence Collection Setup:** Configure logging and evidence collection systems for all operator workstations.

**Outputs:**
- [ ] Attack infrastructure deployment confirmation
- [ ] Tool readiness checklist
- [ ] Operator briefing sign-off sheet
- [ ] Emergency contact list distributed
- [ ] Deconfliction channel tested and confirmed

---

### 6.4 Phase 4: Execution

**Objective:** Conduct the adversarial simulation within the approved scope and constraints.

**General Execution Principles:**

- All operators must operate exclusively within the approved scope defined in the exercise-specific RoE addendum.
- All operator actions must be continuously logged with timestamps.
- Operators must maintain awareness of approved test windows and hard-stop conditions.
- If unexpected findings are encountered (e.g., evidence of actual threat actor activity), operators must immediately invoke the escalation procedure (see Section 12).

**Typical Attack Phases (MITRE ATT&CK Aligned):**

| Phase | MITRE ATT&CK Tactic | Permitted Activities | Notes |
|---|---|---|---|
| Reconnaissance | Reconnaissance (TA0043) | OSINT, passive network scanning | Passive only unless active recon approved |
| Initial Access | Initial Access (TA0001) | Phishing (approved list), exploitation of approved targets | Phishing restricted to test accounts unless social engineering approved |
| Execution | Execution (TA0002) | Payload delivery on approved targets | No destructive payloads |
| Persistence | Persistence (TA0003) | Registry modification, scheduled tasks on approved targets | Must be reversible |
| Privilege Escalation | Privilege Escalation (TA0004) | Exploitation of approved systems | No permanent modifications |
| Defence Evasion | Defence Evasion (TA0005) | As approved in tool list | No disabling of production security controls |
| Credential Access | Credential Access (TA0006) | Password spraying, credential dumping on approved targets | Real credentials must be handled per Section 14 |
| Discovery | Discovery (TA0007) | Network and system enumeration | Within approved scope only |
| Lateral Movement | Lateral Movement (TA0008) | Pass-the-hash, pass-the-ticket on approved systems | Document all lateral movement steps |
| Collection | Collection (TA0009) | Identify and stage target data | No exfiltration of real customer data |
| Command and Control | Command and Control (TA0011) | Use of approved C2 framework | C2 infrastructure must be pre-approved |
| Exfiltration | Exfiltration (TA0010) | Simulated exfiltration of synthetic/test data only | Never exfiltrate real production data |
| Impact | Impact (TA0040) | Simulation only — no actual impact permitted | Hard stop: never execute impact actions on production |

**Hard Stop Conditions:**

The exercise must be immediately suspended and the Red Team Lead must notify the Emergency Contact if any of the following conditions are met:

- [ ] Evidence of a real, active threat actor is discovered on [Organisation Name] systems.
- [ ] An exercise action causes unintended service disruption to production systems.
- [ ] Real customer data is inadvertently accessed, copied, or exfiltrated.
- [ ] A red team operator loses control of an implant or C2 channel.
- [ ] Any stakeholder invokes the exercise stop order.
- [ ] An operator is physically confronted or detained.
- [ ] Legal or regulatory concerns arise during execution.

---

### 6.5 Phase 5: Deconfliction

**Objective:** Manage the boundary between red team exercise activities and genuine security incidents.

**Steps:**

1. **Real-Time Monitoring:** Red Team Lead monitors exercise activities and maintains awareness of Blue Team response indicators.
2. **Deconfliction Requests:** If the Blue Team or SOC identifies an activity as a potential incident, the designated deconfliction contact (known to the SOC) can request confirmation of whether the activity is exercise-related.
3. **Deconfliction Response:** Red Team Lead provides a confirmation or denial within [X minutes] via the pre-established secure channel.
4. **Incident Escalation Override:** If the SOC assesses that an activity poses an imminent risk to [Organisation Name], the SOC retains the right to take defensive action regardless of exercise status.
5. **Deconfliction Log:** All deconfliction interactions are logged with timestamps, parties involved, and outcomes.

**Deconfliction Contacts:**

| Role | Name | Contact Method | Contact Details |
|---|---|---|---|
| Red Team Lead (Primary) | [Name] | [Method, e.g., Secure Mobile] | [Contact] |
| Red Team Lead (Backup) | [Name] | [Method] | [Contact] |
| SOC Deconfliction Contact | [Name] | [Method] | [Contact] |
| Exercise Sponsor | [Name] | [Method] | [Contact] |

---

### 6.6 Phase 6: Reporting

**Objective:** Document all exercise findings, evidence, and recommendations in a structured report.

**Steps:**

1. **Operator Log Consolidation:** All operators submit their activity logs within [X business days] of exercise conclusion.
2. **Draft Report Preparation:** Red Team Lead prepares the draft exercise report within [X business days].
3. **Report Review:** [CISO / Head of Technology Risk] reviews the draft report.
4. **Findings Validation:** Red Team Lead presents findings to relevant technical teams for factual validation.
5. **Final Report Issuance:** Final report is issued to [CISO, CIO, Head of Technology Risk, Board Risk Committee (if required)].
6. **Regulatory Reporting:** [CISO / CRO] assesses whether BNM notification is required under RMiT or other applicable requirements.

**Report Contents (Minimum):**

- [ ] Executive Summary
- [ ] Exercise objectives and scope
- [ ] Summary of attack paths and objectives achieved
- [ ] Detailed technical findings with evidence
- [ ] Risk ratings for each finding
- [ ] Recommended remediations with priority ratings
- [ ] Appendices: operator logs, screenshots, artefacts

---

### 6.7 Phase 7: Remediation Tracking

*Refer to Section 16 for detailed remediation procedures.*

---

### 6.8 Phase 8: Lessons Learned

**Objective:** Capture improvements to the red team programme, detection capabilities, and security controls.

**Steps:**

1. Conduct a lessons learned session within [X weeks] of final report issuance.
2. Document lessons learned in the exercise closure report.
3. Update this RoE document and exercise playbooks as required.
4. Feed lessons learned into the annual threat assessment and security programme planning cycle.

---

### 6.9 Phase 9: Exercise Closure

**Objective:** Formally close the exercise and confirm all artefacts, access, and infrastructure have been cleaned up.

**Closure Checklist:**

- [ ] All red team implants and persistence mechanisms removed from target systems.
- [ ] All attack infrastructure decommissioned or repurposed as approved.
- [ ] All test accounts, credentials, and access created during the exercise revoked.
- [ ] All exercise evidence and artefacts archived in accordance with Section 14.
- [ ] Exercise closure report signed off by [CISO / Head of Technology Risk].
- [ ] Findings entered into the vulnerability management register.
- [ ] Remediation plan approved and owners assigned.

---

## 7. Roles and Responsibilities

*Define the key roles involved in red team exercises and their specific responsibilities.*

### 7.1 Exercise Sponsor

**Role:** [CISO / Head of Cyber Security / Head of Technology Risk]

**Responsibilities:**

- Champions the red team programme at senior management level.
- Provides formal authorisation for each exercise.
- Ensures adequate resources and budget are allocated.
- Reviews and approves exercise reports.
- Escalates significant findings to the Board Risk Committee as appropriate.
- Oversees remediation progress.

---

### 7.2 Red Team Lead

**Role:** [Internal Red Team Lead / External Provider Lead Consultant]

**Responsibilities:**

- Plans and coordinates all red team exercise activities.
- Drafts and maintains exercise-specific RoE addenda.
- Briefs and manages red team operators throughout the exercise.
- Maintains real-time awareness of exercise activities and operator actions.
- Manages deconfliction with the SOC.
- Invokes emergency stop procedures when required.
- Prepares and presents the exercise report.
- Ensures all operators adhere to approved scope and RoE constraints.

---

### 7.3 Red Team Operators

**Role:** [Internal security personnel / External provider consultants]

**Responsibilities:**

- Execute approved attack activities within the defined scope and constraints.
- Maintain detailed, timestamped logs of all actions taken.
- Carry GOJ letters at all times during the exercise.
- Report any hard-stop conditions or unexpected findings to the Red Team Lead immediately.
- Handle any data or credentials accessed during the exercise in accordance with Section 14.
- Participate in post-exercise debrief and report validation.

---

### 7.4 Exercise Controller

**Role:** [Designated internal staff member — may be the Exercise Sponsor or a delegated representative]

**Responsibilities:**

- Serves as the single point of authority for exercise go/no-go decisions.
- Has the authority to suspend or terminate the exercise at any time.
- Manages communication between the red team, blue team (at appropriate levels), and senior management during the exercise.
- Maintains the master deconfliction log.

---

### 7.5 SOC Manager / Blue Team Lead

**Role:** [Head of SOC / Lead SOC Analyst]

**Responsibilities:**

- May or may not be aware of the exercise (depending on exercise design — blind vs. informed).
- If aware: does not disclose exercise details to SOC analysts; allows normal detection and response activities to proceed.
- Serves as the deconfliction contact for real-incident versus exercise deconfliction.
- Provides Blue Team assessment report as part of the exercise findings.

---

### 7.6 Technology Risk / Compliance

**Role:** [Head of Technology Risk / Chief Risk Officer / Compliance Officer]

**Responsibilities:**

- Reviews exercise-specific RoE addendum for compliance with BNM RMiT and applicable regulations.
- Assesses whether findings trigger regulatory reporting obligations.
- Ensures exercise records are retained in accordance with regulatory requirements.
- Participates in exercise planning from a risk governance perspective.

---

### 7.7 Legal and Compliance

**Role:** [General Counsel / Head of Compliance]

**Responsibilities:**

- Reviews exercise scope and planned activities for legal compliance.
- Confirms that GOJ letters provide adequate legal protection for operators.
- Reviews and approves third-party consent letters.
- Advises on PDPA obligations related to any data accessed during the exercise.

---

### 7.8 Third-Party Red Team Provider (if applicable)

**Role:** [External security firm / Authorised red team service provider]

**Responsibilities:**

- Operates exclusively within the scope and constraints defined in this RoE and the exercise-specific addendum.
- Provides evidence of professional indemnity and cyber insurance prior to engagement commencement.
- Signs a non-disclosure agreement (NDA) with [Organisation Name] prior to receiving any sensitive information.
- Submits all evidence, logs, and artefacts to [Organisation Name] upon exercise completion.
- Does not retain copies of [Organisation Name] data, credentials, or findings beyond the agreed retention period.

---

## 8. Authorisation and Approvals

*Define the formal approval matrix for different types of red team exercises.*

### 8.1 Approval Matrix

| Exercise Type | Minimum Approving Authority | Additional Approvals Required |
|---|---|---|
| Purple Team / Controlled Exercise | [Head of Cyber Security] | None |
| Targeted Adversary Simulation (non-production) | [CISO] | [Head of Technology Risk] |
| Full-Scope Red Team Exercise (production included) | [CISO] + [CIO] | [Head of Technology Risk], [Legal] |
| Social Engineering Assessment (staff targeting) | [CISO] + [HR Director] | [Legal], [Head of Compliance] |
| Physical Security Assessment | [CISO] + [COO / Head of Operations] | [Legal], [Facilities Management] |
| Threat-Led Penetration Test (TLPT) | [CEO / Managing Director] | [Board Risk Committee notification], [BNM notification if required] |
| Core Banking / Payment System Targeting | [CEO / Managing Director] + [CIO] | [Board Risk Committee approval], [BNM pre-notification recommended] |

### 8.2 BNM Notification Requirements

*[Organisation Name] shall assess whether BNM notification is required prior to or following each exercise in accordance with applicable BNM circulars and guidelines. Document the outcome of each assessment in the exercise file.]*

| Trigger | BNM Notification Required | Timeframe | Responsible Party |
|---|---|---|---|
| Material service disruption during exercise | Yes | Within [X] business days | [CRO / CISO] |
| Discovery of actual threat actor compromise | Yes | As per incident reporting obligations | [CRO / CISO] |
| TLPT exercise (if BNM mandated) | Yes — pre and post | Per BNM guidance | [CRO / CISO] |
| Findings of critical severity affecting systemic risk | Assess case by case | Consult Legal and Compliance | [CRO / CISO] |

---

## 9. Scope Boundaries and Constraints

*Define explicit boundaries and operational constraints applicable to all exercises.*

### 9.1 Absolute Prohibitions

The following activities are **absolutely prohibited** under any circumstances during a red team exercise:

| Prohibited Activity | Rationale |
|---|---|
| Exfiltration of real customer personal data | PDPA violation; legal exposure |
| Execution of destructive malware (e.g., ransomware with live payload) | Irreversible damage risk |
| Denial-of-service attacks against production systems | Service availability risk |
| Unauthorised physical access to customer areas | Safety and reputational risk |
| Targeting systems outside the defined scope | Legal and contractual exposure |
| Social engineering of customers | Regulatory and reputational risk |
| Retention of customer data or credentials after exercise | PDPA obligation |
| Sharing exercise findings with unauthorised parties | Confidentiality breach |
| Operating without a valid GOJ letter | Legal exposure for operator |

### 9.2 Conditional Permissions

The following activities require specific additional approval as noted:

| Activity | Condition | Additional Approval Required |
|---|---|---|
| Phishing simulation targeting all staff | Only with HR Director approval | [HR Director] |
| Credential spraying | Only against approved test accounts initially | [CISO] |
| Physical access simulation | Only with physical security addendum approved | [COO / CISO] |
| Cloud infrastructure targeting | Only within approved cloud account/subscription | [Head of Cloud / Infrastructure] |
| Third-party system testing | Only with written consent from third party | [Legal] |
| After-hours testing | Only with IT Operations awareness (for deconfliction) | [CIO / IT Operations Manager] |

### 9.3 Test Windows

*Define approved windows during which active testing may occur. Restricting testing to specific windows reduces the risk of interference with critical business processes.*

| Test Type | Approved Windows | Exceptions |
|---|---|---|
| Active exploitation / intrusion simulation | [e.g., Monday–Friday, 08:00–18:00 MYT] | With [CISO] approval for after-hours |
| Phishing campaigns | [e.g., Monday–Thursday, business hours] | None |
| Core banking system targeting | [e.g., Saturday 02:00–06:00 MYT] | Pre-approval from [CIO] required |
| Physical security testing | [As defined in physical addendum] | |

### 9.4 Protected Systems

The following systems are designated as protected and require elevated approval for any targeting:

| System | Protection Level | Required Approval |
|---|---|---|
| [Core Banking System Name] | Critical — restricted | [CEO + CIO] |
| [Payment Gateway / Switch Name] | Critical — restricted | [CIO + CISO] |
| [Customer Data Platform] | High — restricted | [CISO + DPO] |
| [DR Systems] | High — restricted | [CISO + BC/DR Manager] |
| [HR / Payroll Systems] | High — restricted | [CISO + HR Director] |
| Regulatory Reporting Systems | High — restricted | [CISO + CRO] |

---

## 10. Tools, Techniques, and Systems

*Maintain a pre-approved list of tools that red team operators are permitted to use.*

### 10.1 Tool Approval Policy

All tools used during a red team exercise must be:

1. Listed in the approved tools register below, or specifically approved in the exercise-specific RoE addendum.
2. Sourced from verified, legitimate sources (no modified or cracked versions of commercial tools).
3. Used only against systems within the approved exercise scope.
4. Operated by trained and competent personnel.

Any tool not listed below requires written approval from [CISO / Red Team Lead] before use.

### 10.2 Approved Tools Register

*Update this register as tools are approved or deprecated. Include version numbers where relevant.*

**Reconnaissance and OSINT:**

| Tool | Version | Purpose | Restrictions |
|---|---|---|---|
| [e.g., Maltego] | [Version] | OSINT and link analysis | Passive use only in pre-engagement phase |
| [e.g., Shodan] | [Version] | Internet-exposed asset discovery | External reconnaissance only |
| [e.g., theHarvester] | [Version] | Email and domain enumeration | Passive only |
| [e.g., Recon-ng] | [Version] | Open source intelligence framework | |

**Scanning and Enumeration:**

| Tool | Version | Purpose | Restrictions |
|---|---|---|---|
| [e.g., Nmap] | [Version] | Network scanning and port discovery | Within approved IP ranges only |
| [e.g., Nessus / Tenable] | [Version] | Vulnerability scanning | With prior IT Operations notification |
| [e.g., BloodHound / SharpHound] | [Version] | Active Directory enumeration | Production AD — with elevated approval |
| [e.g., Netcat] | [Version] | Network connectivity testing | |

**Exploitation and Post-Exploitation:**

| Tool | Version | Purpose | Restrictions |
|---|---|---|---|
| [e.g., Metasploit Framework] | [Version] | Exploitation framework | Against approved targets only |
| [e.g., Cobalt Strike] | [Version] | Adversary simulation and C2 | Licensed copy only; pre-approved C2 infrastructure |
| [e.g., Sliver] | [Version] | Open source C2 framework | Pre-approved C2 infrastructure |
| [e.g., Impacket] | [Version] | Windows protocol exploitation | |
| [e.g., Mimikatz] | [Version] | Credential extraction | Only on approved, non-production targets unless elevated approval granted |
| [e.g., CrackMapExec] | [Version] | Active Directory post-exploitation | Within approved scope |

**Phishing and Social Engineering:**

| Tool | Version | Purpose | Restrictions |
|---|---|---|---|
| [e.g., GoPhish] | [Version] | Phishing campaign management | Only against approved target list |
| [e.g., Evilginx2] | [Version] | Advanced phishing proxy | Only against approved test accounts |
| [e.g., SET (Social Engineering Toolkit)] | [Version] | Social engineering attacks | With social engineering addendum approval |

**Password and Credential Attacks:**

| Tool | Version | Purpose | Restrictions |
|---|---|---|---|
| [e.g., Hashcat] | [Version] | Offline password cracking | Only against captured hashes from approved systems |
| [e.g., John the Ripper] | [Version] | Offline password cracking | Only against captured hashes from approved systems |
| [e.g., Spray] | [Version] | Password spraying | Strict account lockout threshold awareness required |

**Infrastructure and Utilities:**

| Tool | Version | Purpose | Restrictions |
|---|---|---|---|
| [e.g., Burp Suite Pro] | [Version] | Web application testing | Within approved web application scope |
| [e.g., Wireshark] | [Version] | Network traffic analysis | On approved network segments only |
| [e.g., Proxychains] | [Version] | Traffic routing | |
| [e.g., VPN Client] | [Version] | Secure operator connectivity | |

### 10.3 Prohibited Tools

The following tool categories are **prohibited** during red team exercises:

- Weaponised ransomware or wiper malware with functional destructive capability.
- Tools sourced from criminal or darknet markets.
- Zero-day exploit tools targeting live production critical infrastructure (unless specifically approved for a TLPT exercise with elevated authorisation).
- Any tool that is subject to active law enforcement investigation or known to be used exclusively for criminal purposes.

### 10.4 Attack Infrastructure Requirements

All command and control infrastructure used during exercises must:

- [ ] Be provisioned specifically for the exercise and decommissioned upon exercise closure.
- [ ] Not be hosted on infrastructure shared with other clients (if using an external provider).
- [ ] Use domains registered solely for the exercise (not recycled criminal infrastructure).
- [ ] Be documented with IP addresses and domain names in the exercise file.
- [ ] Be accessible only to authorised red team operators.

---

## 11. Communication and Coordination Protocols

*Define how the red team communicates internally and with stakeholders during the exercise.*

### 11.1 Internal Red Team Communications

- All internal red team communications during the exercise shall use [approved secure communication channel, e.g., Signal, encrypted Slack workspace, dedicated secure chat].
- Operational details shall not be communicated over standard corporate email or messaging systems that may be monitored by the Blue Team.
- Red Team Lead shall conduct daily stand-up calls with operators at [time] each day.

### 11.2 Reporting Cadence to Exercise Sponsor

| Update Type | Frequency | Method | Recipient |
|---|---|---|---|
| Exercise status update | Daily (or as agreed) | Secure briefing | Exercise Sponsor |
| Significant finding alert | Within [X hours] of discovery | Direct call | Exercise Sponsor, CISO |
| Hard stop notification | Immediately | Direct call | Exercise Sponsor, Emergency Contact |
| Progress report | Weekly | Written brief | Exercise Sponsor |

### 11.3 Need-to-Know Principle

Information about the exercise shall be shared strictly on a need-to-know basis:

| Stakeholder Group | Information Shared | Timing |
|---|---|---|
| Exercise Sponsor / Approving Authority | Full scope and objectives | Before exercise commences |
| IT Operations (selected staff) | Existence of exercise; deconfliction contact only | Before exercise commences |
| SOC Manager (if informed exercise) | Existence of exercise only — no scenario details | Before exercise commences (if informed) |
| SOC Analysts | None (blind exercise) or existence only | As per exercise design |
| General Staff | None | None during exercise |
| All staff | General awareness of security testing programme | Post-exercise (de-identified) |

---

## 12. Escalation Procedures

*Define the escalation path for significant events during the exercise.*

### 12.1 Escalation Triggers

The following events trigger the escalation procedure:

| Trigger | Priority | Initial Action |
|---|---|---|
| Discovery of suspected real threat actor activity | **P1 — Critical** | Immediate exercise suspension; notify Emergency Contact |
| Unintended production system disruption | **P1 — Critical** | Immediate exercise suspension; notify Emergency Contact |
| Real customer data accessed or exfiltrated | **P1 — Critical** | Immediate exercise suspension; notify Emergency Contact, DPO, Legal |
| Operator detained or confronted by security | **P1 — Critical** | Operator presents GOJ letter; notify Red Team Lead immediately |
| Loss of control of implant / C2 infrastructure | **P2 — High** | Attempt controlled takedown; notify Red Team Lead; escalate if unresolved |
| Out-of-scope system accessed unintentionally | **P2 — High** | Cease activity; document; notify Red Team Lead; assess impact |
| Identification of a previously unknown critical vulnerability | **P2 — High** | Document; notify Red Team Lead; assess whether to pause or continue |
| Operator health or safety concern | **P2 — High** | Pause relevant operator activity; notify Red Team Lead |
| Legal or regulatory concern identified | **P2 — High** | Pause activity; notify Legal and Red Team Lead |

### 12.2 Escalation Path

```
Red Team Operator
      │
      ▼
Red Team Lead ──────────────────────────────►  Exercise Sponsor (CISO)
      │                                                │
      ▼                                                ▼
Exercise Controller                         Head of Technology Risk
      │                                                │
      ▼                                                ▼
IT Operations / SOC (for system recovery)     Legal / Compliance
                                                       │
                                                       ▼
                                              Senior Management (CEO/CIO)
                                                       │
                                                       ▼
                                              BNM (if regulatory trigger)
```

### 12.3 Emergency Contacts

| Role | Primary Contact | Backup Contact |
|---|---|---|
| Red Team Lead | [Name] — [Phone] — [Email] | [Name] — [Phone] |
| Exercise Sponsor (CISO) | [Name] — [Phone] — [Email] | [Name] — [Phone] |
| Exercise Controller | [Name] — [Phone] — [Email] | [Name] — [Phone] |
| Head of Technology Risk | [Name] — [Phone] — [Email] | [Name] — [Phone] |
| Legal (General Counsel) | [Name] — [Phone] — [Email] | [Name] — [Phone] |
| Data Protection Officer | [Name] — [Phone] — [Email] | [Name] — [Phone] |
| IT Operations Manager | [Name] — [Phone] — [Email] | [Name] — [Phone] |
| SOC Deconfliction Contact | [Name] — [Phone] — [Email] | [Name] — [Phone] |

### 12.4 Emergency Stop Procedure

Any of the following persons may invoke an immediate exercise stop:

- Exercise Sponsor
- Exercise Controller
- Red Team Lead
- [CISO / CIO / CEO]

**Upon invocation of emergency stop:**

1. Red Team Lead immediately notifies all operators to cease all activity.
2. Red Team Lead confirms cessation with Exercise Controller within [X minutes].
3. Operators log their exact activity state at time of stop.
4. Red Team Lead conducts a rapid impact assessment.
5. Red Team Lead and Exercise Controller decide whether to resume, pause, or terminate the exercise.
6. All decisions are documented in the exercise log.

---

## 13. Incident Handling During Exercises

*Establish clear protocols for distinguishing exercise activity from genuine security incidents and for managing real incidents discovered during exercises.*

### 13.1 Real Incident Discovery Protocol

If a red team operator discovers evidence of a genuine security incident (e.g., evidence of active malware, unauthorised third-party access, data breach) that is not related to the red team exercise:

1. **Do not investigate or exploit** the discovered incident — this may compromise forensic evidence.
2. **Immediately notify** the Red Team Lead with a description of what was found, where, and how.
3. **Red Team Lead notifies** the Exercise Sponsor and SOC Manager immediately.
4. **Red Team Lead documents** the discovery in the exercise log with full details.
5. **Exercise is paused** pending assessment by the SOC and [Head of Technology Risk].
6. **Incident response** is handed over to the SOC and incident response team under [Organisation Name]'s Incident Response Procedure.
7. **Red team exercise resumes** only after the genuine incident has been assessed and a decision made by the Exercise Sponsor.

### 13.2 Accidental Impact Management

If a red team action causes unintended impact (e.g., a system crash, data corruption, service degradation):

1. **Operator immediately stops** all activity and notifies the Red Team Lead.
2. **Red Team Lead notifies** the Exercise Controller and IT Operations.
3. **IT Operations** assesses and remediates the impact.
4. **Red Team Lead** documents the incident, root cause, and remediation actions.
5. **Exercise is suspended** until the impact is resolved and the Exercise Sponsor approves resumption.
6. **Post-exercise review** includes a root cause analysis of the accidental impact.

---

## 14. Data Handling and Evidence Management

*Define how data and evidence collected during exercises must be managed to comply with PDPA and organisational data governance requirements.*

### 14.1 Data Handling Principles

During the course of a red team exercise, operators may encounter or access sensitive data, including personal data protected under the Personal Data Protection Act 2010 (PDPA). The following principles apply:

1. **Minimum necessary access:** Operators shall access only the minimum data required to demonstrate attainment of an exercise objective.
2. **No retention of personal data:** Real customer personal data accessed during an exercise shall not be extracted, copied, retained, or removed from [Organisation Name]'s systems.
3. **Synthetic data preference:** Where demonstrating data access is an exercise objective, synthetic or anonymised data should be used in preference to real personal data.
4. **Credential handling:** Real credentials obtained during the exercise (e.g., through credential dumping) must be immediately reported to the Red Team Lead and surrendered to [Organisation Name] at exercise closure. They must not be retained or used outside the exercise scope.
5. **Evidence integrity:** Evidence collected for the exercise report must be handled with integrity — it must not be manipulated or fabricated.

### 14.2 Evidence Collection Standards

| Evidence Type | Collection Method | Storage Location | Retention Period |
|---|---|---|---|
| Screenshots | [Approved screenshot tool] | [Encrypted exercise folder / approved repository] | [Per retention policy, e.g., 3 years] |
| Operator logs / keystroke logs | [Approved logging agent] | [Encrypted exercise folder] | [Per retention policy] |
| Network captures | Wireshark / tcpdump | [Encrypted exercise folder] | [Per retention policy] |
| Artefacts (malware samples, payloads) | Secure collection | [Isolated, encrypted storage] | [Per retention policy] |
| Photographs (physical assessment) | [Approved device] | [Encrypted exercise folder] | [Per retention policy] |
| Video recordings | [Approved device] | [Encrypted exercise folder] | [Per retention policy] |

### 14.3 Data Classification of Exercise Records

All exercise documentation, reports, and evidence are classified as **Confidential** and must be:

- Stored in access-controlled systems.
- Transmitted only via encrypted channels.
- Shared only with authorised personnel on a need-to-know basis.
- Disposed of in accordance with [Organisation Name]'s information disposal policy upon expiry of the retention period.

### 14.4 Third-Party Provider Data Obligations

Where an external red team provider is engaged, the engagement contract must explicitly require:

- [ ] NDA covering all exercise details, findings, and [Organisation Name] data.
- [ ] No retention of [Organisation Name] data beyond the agreed handover period.
- [ ] Return or certified destruction of all [Organisation Name] data upon exercise closure.
- [ ] Compliance with PDPA requirements for any personal data accessed.
- [ ] Notification to [Organisation Name] within [24/48] hours of any suspected data breach relating to exercise data.

---

## 15. Reporting Requirements

*Define the reporting structure for exercise findings and outcomes.*

### 15.1 Exercise Report Structure

The post-exercise report shall contain, at a minimum, the following sections:

| Section | Contents |
|---|---|
| Cover Page | Exercise name, date, classification, distribution list |
| Executive Summary | High-level narrative of exercise outcomes; key risk findings; recommended executive actions |
| Exercise Overview | Objectives, scope, timeline, team composition |
| Methodology | Attack scenarios executed; MITRE ATT&CK tactics employed |
| Findings Summary | Tabular summary of all findings by severity |
| Detailed Findings | For each finding: description, evidence, impact, MITRE ATT&CK mapping, recommended remediation, priority |
| Attack Narrative | End-to-end description of successful attack chains |
| Blue Team Assessment | Detection and response performance evaluation |
| Risk Ratings | Severity classification of findings using [organisation's risk matrix] |
| Recommendations | Prioritised remediation roadmap |
| Appendices | Operator logs, raw evidence, MITRE ATT&CK navigator layer |

### 15.2 Finding Severity Classification

| Severity | Description | Remediation Timeframe |
|---|---|---|
| Critical | Immediate threat to critical assets; could result in significant financial loss, regulatory breach, or reputational damage | [e.g., 7 days] |
| High | Significant security weakness; likely to be exploited by motivated threat actor | [e.g., 30 days] |
| Medium | Moderate security weakness; may be exploited under certain conditions | [e.g., 90 days] |
| Low | Minor security weakness; limited exploitability or impact | [e.g., 180 days] |
| Informational | Observation that does not represent an immediate risk; may improve security posture | As resources allow |

### 15.3 Distribution List

| Recipient | Report Version | Distribution Method |
|---|---|---|
| Exercise Sponsor (CISO) | Full report | Secure delivery |
| CIO | Full report | Secure delivery |
| Head of Technology Risk | Full report | Secure delivery |
| Board Risk Committee | Executive Summary only | Via board paper |
| IT Operations Manager | Technical findings only | Secure delivery |
| Relevant system owners | Findings relevant to their systems | Secure delivery |
| External Red Team Provider (if applicable) | Factual review copy only | Secure delivery |
| BNM (if required) | As prescribed by BNM | Per BNM requirements |

### 15.4 Retention of Reports

All exercise reports and supporting evidence shall be retained for a minimum of **[X years]** in accordance with [Organisation Name]'s records retention policy and applicable BNM requirements.

---

## 16. Post-Exercise Review and Remediation

*Define the process for tracking and verifying remediation of exercise findings.*

### 16.1 Remediation Tracking

All findings from red team exercises shall be entered into [Organisation Name]'s vulnerability management register within [X business days] of the final report being issued.

Each finding entry shall include:

| Field | Description |
|---|---|
| Finding ID | Unique identifier (e.g., RT-[Year]-[Exercise]-[Number]) |
| Title | Short title of the finding |
| Severity | Critical / High / Medium / Low / Informational |
| Affected System | Affected system(s) and environment |
| Description | Detailed description of the finding |
| Evidence Reference | Reference to supporting evidence in the exercise file |
| Recommended Remediation | Specific remediation action recommended by the red team |
| Assigned Owner | Business or technology owner responsible for remediation |
| Target Remediation Date | Target date based on severity |
| Actual Remediation Date | Actual date of remediation completion |
| Verification Status | Pending / In Progress / Remediated / Risk Accepted |
| Verification Method | How remediation was verified (e.g., re-test, evidence review) |

### 16.2 Remediation Governance

| Activity | Frequency | Owner | Escalation Trigger |
|---|---|---|---|
| Remediation status review meeting | [Monthly / Fortnightly] | [Head of Cyber Security] | Findings overdue by [30 days] |
| Executive status update | Monthly | [CISO] | Critical finding unresolved after [7 days] |
| Board Risk Committee update | Quarterly | [CRO / CISO] | As part of technology risk report |
| Re-test of critical findings | Within [X days] of remediation | [Red Team Lead] | N/A |
| Close-out sign-off | Upon all findings remediated or risk accepted | [CISO / Head of Technology Risk] | N/A |

### 16.3 Risk Acceptance

Where a finding cannot be remediated within the target timeframe or where remediation is not commercially feasible, the responsible owner may submit a **Risk Acceptance Request** for review and approval by:

- **Critical / High findings:** [CISO + CRO + Board Risk Committee notification]
- **Medium findings:** [CISO + Head of Technology Risk]
- **Low / Informational findings:** [Head of Cyber Security]

All risk acceptances must be documented, time-limited (maximum [X months]), and subject to review at the next exercise or risk review cycle.

---

## 17. Roles and Responsibilities (RACI)

*Consolidated RACI matrix for all key activities in the red team exercise lifecycle.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Exercise Sponsor (CISO) | Red Team Lead | Red Team Operators | Exercise Controller | SOC Manager | IT Operations | Technology Risk | Legal & Compliance | DPO | Board / ExCo |
|---|---|---|---|---|---|---|---|---|---|---|
| **Planning & Scoping** |
| Define exercise objectives | A | R | C | C | C | I | C | I | I | I |
| Draft exercise-specific RoE addendum | C | R | C | C | | | C | C | | |
| Obtain third-party consent (if needed) | A | C | | | | | C | R | | |
| **Authorisation** |
| Approve exercise-specific RoE | A | R | | | | | C | C | | |
| Issue GOJ letters | A | R | I | I | | | | C | | |
| Legal review of RoE | C | C | | | | | C | R | C | |
| **Preparation** |
| Set up attack infrastructure | I | A | R | | | | | | | |
| Brief red team operators | A | R | I | C | | | | | | |
| Establish deconfliction channel | C | R | | A | C | C | | | | |
| **Execution** |
| Conduct adversarial simulation | I | A | R | C | | I | I | | | |
| Maintain operator logs | I | A | R | | | | | | | |
| Monitor exercise progress | A | R | I | C | I | I | I | | | |
| **Deconfliction** |
| Manage deconfliction requests | C | R | I | A | C | I | | | | |
| Invoke emergency stop | A | R | C | R | C | C | C | | | |
| **Incident Handling** |
| Escalate real incident discovery | A | R | I | C | C | C | C | C | C | |
| Manage accidental impact | A | R | I | C | C | R | C | | | |
| **Reporting** |
| Prepare exercise report | C | R | C | C | C | I | C | | | |
| Review and approve report | A | R | | C | | | C | | | I |
| Regulatory reporting assessment | C | C | | | | | R | C | | |
| Board reporting | A | C | | | | | C | C | | R |
| **Remediation** |
| Enter findings into register | C | R | | | | | C | | | |
| Assign remediation owners | A | C | | | | C | R | | | |
| Track remediation progress | C | R | | | | C | A | | | |
| Verify remediation | C | R | C | | | C | C | | | |
| Risk acceptance approval | A | C | | | | | R | C | | I |
| **Governance** |
| Review and update this RoE | A | R | C | C | | | C | C | | |
| Annual programme planning | A | R | | | | | C | C | | I |

---

## 18. Review and Approval

### 18.1 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document creation | [Approver Name, Title] |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes, e.g., Updated tool list; added TLPT guidance] | [Approver Name, Title] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] | [Approver Name, Title] |

### 18.2 Review Schedule

This document shall be reviewed on the following schedule:

| Review Trigger | Review Type | Owner |
|---|---|---|
| Semi-annual scheduled review | Full review | [Head of Cyber Security] |
| Following each major red team exercise | Update as required | [Red Team Lead] |
| Material change in regulatory requirements (BNM RMiT update) | Full review | [Head of Technology Risk] |
| Significant change in organisational IT environment | Update as required | [Head of Cyber Security] |
| Following a significant security incident | Update as required | [CISO] |
| Discovery of deficiencies in this document during an exercise | Immediate update | [Red Team Lead] |

### 18.3 Approval Sign-Off

This document has been reviewed and approved by the following authorised signatories:

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Cyber Security | [Name] | _________________ | [Date] |
| Head of Technology Risk | [Name] | _________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Chief Information Officer | [Name] | _________________ | [Date] |
| General Counsel / Legal | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |

---

## 19. References

### 19.1 Regulatory References

| Reference | Title | Clause(s) | Issuing Authority |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | 11.13 (Adversarial Attack Simulation) | Bank Negara Malaysia |
| BNM RMiT | Risk Management in Technology Policy Document | 11.1–11.12 (Cybersecurity Programme) | Bank Negara Malaysia |
| BNM RMiT | Risk Management in Technology Policy Document | 11.14 (VAPT) | Bank Negara Malaysia |
| BNM RMiT | Risk Management in Technology Policy Document | 5.x (Technology Risk Governance) | Bank Negara Malaysia |
| BNM RMiT | Risk Management in Technology Policy Document | 10.x (Incident Management) | Bank Negara Malaysia |
| PDPA 2010 | Personal Data Protection Act 2010 | All applicable provisions | Parliament of Malaysia |
| Computer Crimes Act 1997 | Computer Crimes Act 1997 | All applicable provisions | Parliament of Malaysia |
| NACSA | National Cyber Security Policy | All applicable provisions | National Cyber Security Agency |

### 19.2 Internal Policy References

| Document | Title | Owner |
|---|---|---|
| [Doc ID] | Cyber Security Policy | [CISO] |
| [Doc ID] | Information Security Policy | [CISO] |
| [Doc ID] | Incident Response Procedure | [SOC Manager] |
| [Doc ID] | Vulnerability Management Procedure | [Head of Cyber Security] |
| [Doc ID] | Penetration Testing Procedure | [Head of Cyber Security] |
| [Doc ID] | Data Protection Policy | [DPO] |
| [Doc ID] | Records Retention Policy | [Compliance] |
| [Doc ID] | Third-Party Risk Management Policy | [Head of Technology Risk] |
| [Doc ID] | Technology Risk Management Policy | [CRO] |

### 19.3 Industry Standards and Frameworks

| Reference | Title | Version / Date |
|---|---|---|
| MITRE ATT&CK | Adversarial Tactics, Techniques and Common Knowledge | [Current version] |
| NIST SP 800-115 | Technical Guide to Information Security Testing and Assessment | September 2008 |
| TIBER-EU | Threat Intelligence-Based Ethical Red Teaming Framework | [Version] |
| PTES | Penetration Testing Execution Standard | [Version] |
| OWASP Testing Guide | Web Security Testing Guide | [Version] |
| ISO/IEC 27001:2022 | Information Security Management Systems | 2022 |
| CBEST | Intelligence-Led Cyber Security Testing Framework (UK reference) | [Version] |

---

## 20. Appendices

### Appendix A: Exercise-Specific Rules of Engagement Addendum Template

*This appendix provides a template for the exercise-specific RoE addendum that must be completed and approved for each individual red team exercise. This document supplements and does not replace the master RoE.*

---

**EXERCISE-SPECIFIC RULES OF ENGAGEMENT ADDENDUM**

| Field | Details |
|---|---|
| **Exercise Name** | [Exercise Name] |
| **Exercise Reference** | [RT-YYYY-NNN] |
| **Master RoE Reference** | [Document ID of this document] |
| **Exercise Type** | [Full-Scope / Targeted / Purple Team / TLPT / Other] |
| **Exercise Start Date** | [Start Date] |
| **Exercise End Date** | [End Date] |
| **Exercise Sponsor** | [Name, Title] |
| **Red Team Lead** | [Name, Organisation] |
| **Approved By** | [Name, Title] |
| **Approval Date** | [Date] |

**Exercise Objectives:**

1. [Primary objective, e.g., Achieve domain administrator access within [Organisation Name]'s internal network]
2. [Secondary objective, e.g., Exfiltrate simulated customer data from [System Name]]
3. [Tertiary objective, e.g., Evaluate SOC detection and response time against spear-phishing attack]

**In-Scope Systems and Environments:**

| System / Network | IP Range / URL | Environment | Notes |
|---|---|---|---|
| [System Name] | [IP Range / URL] | [Prod / Pre-Prod / Dev] | [Any specific constraints] |

**Explicitly Out-of-Scope:**

- [System or environment 1]
- [System or environment 2]

**Approved Attack Scenarios:**

| Scenario | Description | Approved Techniques | Constraints |
|---|---|---|---|
| [Scenario 1] | [Description] | [TTPs from approved list] | [Any scenario-specific constraints] |

**Test Windows:**

| Activity | Approved Window |
|---|---|
| [Active exploitation] | [Days / Times] |
| [Phishing campaign] | [Days / Times] |

**Additional Constraints Specific to This Exercise:**

- [Constraint 1]
- [Constraint 2]

**Approvals for This Exercise:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Exercise Sponsor | [Name] | _________________ | [Date] |
| [Additional approver] | [Name] | _________________ | [Date] |

---

### Appendix B: Get-Out-of-Jail Letter Template

*This appendix provides the standard template for the GOJ letter to be issued to each red team operator before the exercise commences.*

---

**[Organisation Name Letterhead]**

**AUTHORISATION LETTER — SECURITY TESTING EXERCISE**

**STRICTLY CONFIDENTIAL**

Date: [Date]

To Whom It May Concern,

This letter confirms that **[Operator Full Name]**, identification number **[ID Number / Passport Number]**, is an authorised security professional conducting a controlled security assessment on behalf of **[Organisation Name]** (Registration No. [Company Registration Number]).

The individual named above is authorised to perform the following activities within the defined scope of our internal security testing programme:

- Network and system security testing within [Organisation Name]'s authorised systems.
- Security assessment activities as defined in the approved Rules of Engagement document reference **[Document ID]**.

All activities are being conducted with the full knowledge and authorisation of [Organisation Name]'s senior management. These activities are part of [Organisation Name]'s compliance with Bank Negara Malaysia's Risk Management in Technology (RMiT) policy requirements.

If you have any questions or require verification of this authorisation, please contact:

**[Exercise Sponsor Name]**
**[Title]**
**[Organisation Name]**
**[Phone Number — available 24/7 during exercise period]**
**[Email Address]**

This authorisation is valid from **[Start Date]** to **[End Date]** only.

Yours sincerely,

____________________________
[Name]
[Title — e.g., Chief Information Security Officer]
[Organisation Name]
[Date]

---

### Appendix C: Operator Log Template

*Each red team operator must maintain a continuous activity log throughout the exercise using this format.*

| Timestamp (MYT) | Operator | Action Taken | Target System / IP | Tool Used | Result / Output | Notes |
|---|---|---|---|---|---|---|
| [YYYY-MM-DD HH:MM:SS] | [Operator Name] | [Description of action] | [Target] | [Tool] | [Brief result] | [Any notable observations] |

---

### Appendix D: Deconfliction Log Template

*The Exercise Controller maintains this log for all deconfliction interactions during the exercise.*

| Timestamp (MYT) | Requesting Party | Contact Method | Query Description | Response Given | Red Team Activity Confirmed (Y/N) | Notes |
|---|---|---|---|---|---|---|
| [YYYY-MM-DD HH:MM:SS] | [Name, Role] | [Method] | [Description] | [Response] | [Y/N] | |

---

### Appendix E: Exercise Closure Checklist

*This checklist must be completed and signed off by the Red Team Lead and Exercise Sponsor at exercise closure.*

| # | Closure Item | Responsible | Completed | Date | Notes |
|---|---|---|---|---|---|
| 1 | All red team implants removed from target systems | Red Team Lead | ☐ | | |
| 2 | All persistence mechanisms removed | Red Team Lead | ☐ | | |
| 3 | All C2 infrastructure decommissioned | Red Team Lead | ☐ | | |
| 4 | All test user accounts and credentials revoked | Red Team Lead / IT Operations | ☐ | | |
| 5 | All operator logs consolidated and archived | Red Team Lead | ☐ | | |
| 6 | All real credentials surrendered to [CISO] | Red Team Lead | ☐ | | |
| 7 | No real customer personal data retained | Red Team Lead | ☐ | | |
| 8 | Draft exercise report submitted | Red Team Lead | ☐ | | |
| 9 | Findings entered into vulnerability management register | Red Team Lead | ☐ | | |
| 10 | GOJ letters returned and filed | Exercise Sponsor | ☐ | | |
| 11 | Exercise evidence archived in approved location | Red Team Lead | ☐ | | |
| 12 | Third-party provider NDA obligations confirmed | Legal | ☐ | | |
| 13 | Lessons learned session conducted | Red Team Lead | ☐ | | |
| 14 | Closure report signed off | Exercise Sponsor | ☐ | | |

**Red Team Lead Sign-Off:**

Name: _______________________ Signature: _______________________ Date: _______________________

**Exercise Sponsor Sign-Off:**

Name: _______________________ Signature: _______________________ Date: _______________________

---

### Appendix F: Risk Acceptance Request Template

*To be completed when a finding cannot be remediated within the required timeframe.*

| Field | Details |
|---|---|
| **Finding ID** | [RT-YYYY-NNN-FNN] |
| **Finding Title** | [Title] |
| **Severity** | [Critical / High / Medium / Low] |
| **Affected System** | [System Name] |
| **Recommended Remediation** | [From exercise report] |
| **Reason for Risk Acceptance** | [Explanation of why remediation is not feasible within the required timeframe] |
| **Compensating Controls in Place** | [List any mitigating or compensating controls] |
| **Residual Risk Assessment** | [Assessment of residual risk level after compensating controls] |
| **Risk Acceptance Period** | [Start Date] to [End Date — maximum 12 months] |
| **Review Date** | [Date for next review of this risk acceptance] |
| **Requested By** | [Name, Title] |
| **Date Requested** | [Date] |

**Approvals:**

| Role | Name | Signature | Date |
|---|---|---|---|
| [Appropriate approver per Section 16.3] | [Name] | _________________ | [Date] |
| [Additional approver if required] | [Name] | _________________ | [Date] |

---

*End of Document*

---

**Document Control:**
This document is the property of [Organisation Name]. Any reproduction, distribution, or disclosure outside of authorised channels is strictly prohibited. All printed copies of this document are uncontrolled. The master controlled copy is maintained in [Document Management System / Location].

**Classification: CONFIDENTIAL**