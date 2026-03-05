# Incident Response Plan

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Incident Response Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT Policy Document, Clause 11.1 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to unauthorized parties without the prior written approval of [Organization Name]'s Chief Information Security Officer (CISO) or equivalent authority. All printed copies are uncontrolled.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Milestones](#2-objectives-and-milestones)
3. [Incident Classification Matrix](#3-incident-classification-matrix)
4. [Roles, Responsibilities, and Accountable Owners](#4-roles-responsibilities-and-accountable-owners)
5. [Incident Response Phases](#5-incident-response-phases)
   - 5.1 [Identification and Detection](#51-identification-and-detection)
   - 5.2 [Containment](#52-containment)
   - 5.3 [Eradication](#53-eradication)
   - 5.4 [Recovery](#54-recovery)
   - 5.5 [Post-Incident Activities](#55-post-incident-activities)
6. [Escalation Timelines and Notification Requirements](#6-escalation-timelines-and-notification-requirements)
7. [Recovery Objectives — RPO and RTO Definitions by Tier](#7-recovery-objectives--rpo-and-rto-definitions-by-tier)
8. [Backup Schedule and Retention Periods](#8-backup-schedule-and-retention-periods)
9. [Restoration Testing Results](#9-restoration-testing-results)
10. [RACI Matrix](#10-raci-matrix)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section states the regulatory basis, intent, and objectives of the Incident Response Plan. Authors should clearly articulate why this document exists and what problem it solves within the organization's technology risk management framework.*

This Incident Response Plan (IRP) establishes [Organization Name]'s structured approach for identifying, containing, eradicating, recovering from, and conducting post-incident review of technology-related incidents. It operationalizes the requirements set out under **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, Clause 11.1**, which mandates that financial institutions maintain a documented and tested incident response capability commensurate with their operational risk profile.

This Plan ensures that [Organization Name] can minimize the impact of technology incidents on customers, operations, financial integrity, and regulatory standing, while meeting mandatory reporting obligations to BNM and other relevant authorities.

### 1.2 Scope

*Define the systems, entities, personnel, and incident types covered by this plan. Exclusions should be clearly stated to avoid ambiguity during an actual incident.*

This Plan applies to:

- **Organizational Entities:** All business units, subsidiaries, and third-party service providers that operate, manage, or support technology systems on behalf of [Organization Name].
- **Technology Assets:** All information systems, applications, infrastructure, cloud environments, and operational technology (OT) assets owned or managed by [Organization Name].
- **Incident Types:** Cybersecurity incidents, technology outages, data breaches, ransomware, insider threats, third-party technology failures, and any other events that disrupt or threaten the confidentiality, integrity, or availability of [Organization Name]'s technology resources.
- **Personnel:** All employees, contractors, managed service providers, and any other parties with access to [Organization Name]'s technology environment.

**Exclusions:**

- Physical security incidents not involving technology assets (refer to [Physical Security Policy]).
- Business continuity events governed exclusively by the Business Continuity Plan (BCP) where no technology incident is the primary trigger.

### 1.3 Relationship to Other Plans

| Related Document | Relationship |
|---|---|
| Business Continuity Plan (BCP) | IRP triggers BCP escalation when incident causes prolonged outage |
| Disaster Recovery Plan (DRP) | IRP coordinates with DRP during recovery phase for critical systems |
| Data Breach Notification Procedure | IRP triggers notification procedure upon confirmed data breach |
| Third-Party Risk Management Policy | Governs vendor notification and escalation obligations |
| Crisis Communications Plan | Governs external and internal communications during a major incident |

---

## 2. Objectives and Milestones

*This section defines the measurable goals this Plan must achieve and the key milestones that structure incident response activity. Authors should ensure milestones are achievable within the RTO and escalation timelines defined in later sections.*

### 2.1 Objectives

The Incident Response Plan is designed to achieve the following objectives:

1. **Rapid Detection:** Ensure all technology incidents are detected and reported within defined timelines aligned to incident severity classification.
2. **Effective Containment:** Limit the spread, impact, and data exposure resulting from a technology incident through timely containment actions.
3. **Thorough Eradication:** Fully remove threat actors, malicious code, or root-cause vulnerabilities before recovery activities commence.
4. **Safe Recovery:** Restore affected systems and services to full operational status within defined RTO thresholds, validated by testing.
5. **Regulatory Compliance:** Meet all BNM RMiT mandatory reporting timelines, including submission of required notifications and post-incident reports.
6. **Continuous Improvement:** Capture lessons learned and drive measurable improvements to controls following every significant incident.

### 2.2 Key Milestones

*The milestone table below represents the expected sequence of activities from initial detection to plan closure. Actual timelines will be governed by the incident's severity tier (see Section 3).*

| Milestone | Target Timeframe (from Detection) | Responsible Party |
|---|---|---|
| Incident detected and logged | T+0 (immediate) | IT Operations / SOC |
| Initial triage and severity classification | T+30 minutes | Incident Response Lead |
| Incident Response Team (IRT) assembled | T+1 hour (Critical/High) | Incident Response Lead |
| Initial containment actions executed | T+2 hours (Critical) | IRT / IT Security |
| Internal stakeholder notification | T+2 hours (Critical/High) | Incident Response Lead |
| BNM initial notification (if required) | Within 1 hour of discovery (cyber) | CISO / Compliance |
| Eradication actions completed | [Define per tier] | IRT / IT Security |
| System recovery initiated | [Define per tier] | IT Operations |
| Post-recovery validation completed | [Define per tier] | IT Operations / QA |
| Post-incident report submitted to BNM | Within 14 days (if applicable) | CISO / Compliance |
| Lessons Learned review completed | Within 30 days of closure | Incident Response Lead |
| IRP updated based on lessons learned | Within 60 days of closure | Incident Response Lead |

---

## 3. Incident Classification Matrix

*Define the severity tiers used to classify incidents. Classification determines escalation paths, RTO/RPO thresholds, mandatory notification triggers, and resource mobilization. Authors should align classification criteria to BNM RMiT expectations and internal risk appetite.*

### 3.1 Severity Tier Definitions

| Severity Tier | Label | Description | Examples |
|---|---|---|---|
| **Tier 1** | Critical | Incident causing or likely to cause significant disruption to critical banking systems, widespread customer impact, confirmed data breach, regulatory reporting threshold met, or systemic financial risk | Ransomware on core banking; total internet banking outage; confirmed PII breach >1,000 customers |
| **Tier 2** | High | Incident with material impact on a significant system or service; limited customer impact; potential regulatory notification required | Partial outage of internet banking; suspected data exfiltration; DDoS attack degrading services |
| **Tier 3** | Medium | Incident affecting internal systems with limited or no customer impact; no confirmed data breach; manageable within normal operations | Malware on isolated workstation; failed backup restoration; insider policy violation without data access |
| **Tier 4** | Low | Minor incident or anomaly requiring investigation; no immediate customer or regulatory impact | Failed login attempts below threshold; minor system error; suspicious but unconfirmed activity |

### 3.2 Classification Decision Matrix

*Use the table below as a rapid triage aid during the identification phase. The highest applicable criterion determines the tier.*

| Criterion | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Customer Impact | >1,000 customers or systemic | 100–1,000 customers | <100 customers or internal only | None |
| System Criticality | Critical (Tier 1 system per DRP) | Important (Tier 2 system) | Standard | Non-critical |
| Data Breach Confirmed | Yes (large-scale) | Suspected or limited | No | No |
| Financial Impact | >RM [Threshold] | RM [Threshold] – RM [Threshold] | <RM [Threshold] | Negligible |
| Regulatory Notification | Mandatory (immediate) | Likely required | Review required | Not required |
| Regulatory Reporting to BNM | Yes — within 1 hour | Assess within 2 hours | Assess within 24 hours | Not required |
| Service Outage Duration | >4 hours or undefined | 1–4 hours | <1 hour | Momentary |
| Reputational Risk | High (media/public exposure) | Medium | Low | Minimal |

### 3.3 Incident Type Catalogue

*Authors should populate this catalogue with incident types relevant to [Organization Name]'s operational environment.*

| Incident Type | Default Classification | Notes |
|---|---|---|
| Ransomware / destructive malware | Tier 1 | Escalate immediately; invoke BCP/DRP |
| Data breach — customer PII | Tier 1 or 2 depending on scale | PDPA notification obligations apply |
| Core banking system outage | Tier 1 | BNM RMiT reporting mandatory |
| Internet banking unavailability | Tier 1 or 2 depending on duration | |
| DDoS attack | Tier 2 or higher | Severity based on service impact |
| Insider threat / unauthorized access | Tier 2 or 3 | Escalate if data exfiltration suspected |
| Phishing campaign (targeted) | Tier 3 or 2 | Elevate if executives targeted (BEC) |
| Third-party/vendor outage | Tier 1–3 | Depends on criticality of service |
| Malware on isolated endpoint | Tier 3 | Contain and investigate |
| Vulnerability exploitation (active) | Tier 1 or 2 | Elevate if production systems affected |
| Failed backup or recovery test | Tier 3 | Escalate if affecting critical systems |

---

## 4. Roles, Responsibilities, and Accountable Owners

*This section defines the human structure of the Incident Response capability. Every named role must have a designated individual and an alternate. Authors should ensure alignment with the organization's existing governance structure.*

### 4.1 Incident Response Team (IRT) Structure

| Role | Designated Individual | Alternate | Contact (Primary) | Contact (Alternate) |
|---|---|---|---|---|
| **Executive Sponsor** | [Name / CTO / COO] | [Name] | [Phone / Email] | [Phone / Email] |
| **Incident Response Lead (IRL)** | [Name] | [Name] | [Phone / Email] | [Phone / Email] |
| **CISO / Information Security** | [Name] | [Name] | [Phone / Email] | [Phone / Email] |
| **IT Operations Lead** | [Name] | [Name] | [Phone / Email] | [Phone / Email] |
| **SOC Analyst (On-call)** | [Rotation Schedule — see Appendix A] | — | [Phone / SOC Hotline] | — |
| **Compliance / Regulatory Affairs** | [Name] | [Name] | [Phone / Email] | [Phone / Email] |
| **Legal Counsel** | [Name / External Firm] | [Name] | [Phone / Email] | [Phone / Email] |
| **Communications / PR** | [Name] | [Name] | [Phone / Email] | [Phone / Email] |
| **Business Unit Representative** | [Name — per affected BU] | [Name] | [Phone / Email] | [Phone / Email] |
| **Third-Party Liaison** | [Name] | [Name] | [Phone / Email] | [Phone / Email] |
| **Forensics (Internal / External)** | [Name / Vendor Name] | [Name] | [Phone / Email] | [Phone / Email] |

### 4.2 Role Descriptions

**Incident Response Lead (IRL)**
- Accountable owner of the IRP; activates and stands down the IRT.
- Maintains overall situational awareness and decision authority during an incident.
- Signs off on regulatory notifications before submission.
- Owns post-incident review and lessons learned process.

**CISO / Information Security**
- Provides technical direction on containment, eradication, and evidence preservation.
- Coordinates with external cybersecurity vendors and law enforcement as required.
- Authorizes forensic investigation activities.

**IT Operations Lead**
- Executes technical containment and recovery actions.
- Coordinates system restoration in accordance with DRP/BCP procedures.
- Validates system integrity before declaring recovery complete.

**Compliance / Regulatory Affairs**
- Monitors incident developments against BNM RMiT notification thresholds.
- Prepares and submits regulatory notifications and post-incident reports.
- Maintains records for regulatory audit purposes.

**Communications / PR**
- Manages internal and external communications strategy.
- Coordinates customer notifications in the event of a data breach.
- Liaises with media if public disclosure is required.

---

## 5. Incident Response Phases

*This section details the specific actions, decision points, and responsibilities across all five phases of the incident response lifecycle. Each phase should be executed sequentially; however, phases may overlap in fast-moving incidents.*

### 5.1 Identification and Detection

*This phase covers the activities from initial event detection through to formal incident declaration. Speed and accuracy of detection directly determine the organization's ability to contain impact.*

#### 5.1.1 Detection Sources

| Detection Source | Responsible Team | Monitoring Frequency |
|---|---|---|
| SIEM / SOC Alert | SOC | 24/7 |
| Endpoint Detection & Response (EDR) | IT Security | 24/7 automated |
| Network Intrusion Detection System (IDS/IPS) | IT Security | 24/7 automated |
| User-reported incident (Help Desk) | IT Help Desk | Business hours + on-call |
| Automated system health monitoring | IT Operations | 24/7 automated |
| Third-party / vendor notification | Third-Party Liaison | As received |
| BNM / regulatory authority notification | Compliance | As received |
| Threat intelligence feed | SOC / IT Security | Continuous |

#### 5.1.2 Initial Triage Checklist

Upon receipt of an alert or report, the SOC Analyst / first responder shall:

- [ ] Log the event in the Incident Management System ([System Name]) with date, time, source, and initial description.
- [ ] Assign a unique Incident Reference Number (IRN): [IRN Format: INC-YYYY-NNNN].
- [ ] Perform initial triage to determine whether the event constitutes a confirmed incident or a false positive.
- [ ] Apply the Incident Classification Matrix (Section 3) to assign a severity tier.
- [ ] Notify the Incident Response Lead within the required timeframe (see Section 6).
- [ ] Preserve initial evidence — do not power off affected systems without authorization from CISO.
- [ ] Document all actions taken, with timestamps, in the Incident Log (Appendix B).

#### 5.1.3 Evidence Preservation Principles

- All affected systems must be treated as potential evidence sources.
- No destructive actions (reformatting, deletion, overwriting) shall be taken without written authorization from the CISO or IRL.
- Memory dumps and forensic images should be captured before containment where operationally feasible.
- Chain of custody must be maintained for all digital evidence (refer to Appendix C — Chain of Custody Template).

---

### 5.2 Containment

*Containment limits the spread and impact of an incident. Short-term containment prioritizes stopping the bleeding; long-term containment stabilizes the environment while eradication is prepared.*

#### 5.2.1 Short-Term Containment Actions

*Immediate actions to be taken within the timeframes specified in Section 6, based on severity tier.*

| Action | Applicable Tier | Authorized By |
|---|---|---|
| Isolate affected network segment | 1, 2 | IT Operations Lead |
| Block malicious IP / domain at firewall | 1, 2, 3 | SOC / IT Security |
| Disable compromised user accounts | 1, 2, 3 | IT Security |
| Force password reset — affected accounts | 1, 2, 3 | IT Security |
| Take system offline (graceful shutdown) | 1, 2 | IT Operations Lead + IRL approval |
| Emergency firewall rule deployment | 1, 2 | IT Security |
| Activate out-of-band communication channel | 1 | IRL |
| Invoke DDoS mitigation service | 1, 2 | IT Operations Lead |

#### 5.2.2 Long-Term Containment Actions

*Long-term containment maintains service stability while the full eradication process is completed. These measures may remain in place for hours or days.*

- Deploy temporary compensating controls (e.g., enhanced monitoring, additional authentication).
- Implement increased logging verbosity on affected systems.
- Apply emergency patches or configuration changes to prevent re-exploitation.
- Establish clean communication channels for IRT coordination.
- Notify affected third parties to implement containment on their end.

#### 5.2.3 Containment Decision Log

*All containment decisions, including rationale for actions taken or deferred, must be recorded in the Incident Log with timestamps and the name of the authorizing individual.*

---

### 5.3 Eradication

*Eradication ensures the complete removal of the threat before recovery begins. Premature recovery without thorough eradication risks reinfection or persistent attacker access.*

#### 5.3.1 Eradication Actions Checklist

- [ ] Identify and document the root cause of the incident.
- [ ] Identify all affected systems, accounts, and data.
- [ ] Remove malware, unauthorized access tools, or backdoors from affected systems.
- [ ] Revoke and rotate all potentially compromised credentials (service accounts, certificates, API keys).
- [ ] Patch or remediate exploited vulnerability across all applicable systems.
- [ ] Conduct full anti-malware scan across the environment.
- [ ] Validate that all threat indicators have been removed (IOC sweep).
- [ ] Confirm eradication completeness with CISO sign-off before proceeding to recovery.

#### 5.3.2 Root Cause Analysis (Preliminary)

*Document the preliminary root cause as identified during eradication. A full root cause analysis will be completed in the Post-Incident Activities phase.*

| Field | Details |
|---|---|
| Incident Reference Number | [IRN] |
| Preliminary Root Cause | [Description] |
| Attack Vector | [e.g., phishing, unpatched vulnerability, credential theft] |
| Initial Entry Point | [System / User / Third Party] |
| Lateral Movement Observed | [Yes / No — if yes, describe scope] |
| Data Affected | [Type, volume, sensitivity classification] |
| Duration of Exposure | [Estimated time from initial compromise to containment] |

---

### 5.4 Recovery

*Recovery restores affected systems and services to normal operations. Recovery must be validated before systems are returned to production. Restoration is performed in priority order based on system criticality tiers defined in the DRP.*

#### 5.4.1 Recovery Actions Checklist

- [ ] Confirm eradication is complete and authorized by CISO before beginning recovery.
- [ ] Identify most recent clean backup applicable to each affected system (see Section 8).
- [ ] Restore systems from verified clean backups in accordance with DRP recovery sequences.
- [ ] Validate system integrity using cryptographic hashes or other verification mechanisms.
- [ ] Apply all outstanding security patches before returning to production.
- [ ] Conduct functional testing to confirm full system operation.
- [ ] Conduct security testing (vulnerability scan, configuration review) before go-live.
- [ ] Obtain business stakeholder sign-off on service restoration.
- [ ] Return system to production and notify relevant stakeholders.
- [ ] Remove temporary containment controls in a controlled, staged manner.
- [ ] Document recovery completion, including final RTO measurement against targets.

#### 5.4.2 Recovery Sequence (by System Tier)

*Recovery priority follows system criticality tiers defined in [Organization Name]'s Disaster Recovery Plan. Authors should populate this table in alignment with the DRP.*

| Recovery Priority | System / Service | Tier | Recovery Method | Target RTO |
|---|---|---|---|---|
| 1 | [e.g., Core Banking System] | Tier 1 — Critical | [Restore from backup / Failover] | [e.g., 4 hours] |
| 2 | [e.g., Payment Gateway] | Tier 1 — Critical | [Restore from backup / Failover] | [e.g., 4 hours] |
| 3 | [e.g., Internet Banking] | Tier 2 — Important | [Restore from backup] | [e.g., 8 hours] |
| 4 | [e.g., ATM Management System] | Tier 2 — Important | [Restore from backup] | [e.g., 8 hours] |
| 5 | [e.g., Internal HR System] | Tier 3 — Standard | [Rebuild / Restore] | [e.g., 24 hours] |
| 6 | [e.g., Email / Collaboration] | Tier 3 — Standard | [Restore from backup] | [e.g., 24 hours] |

---

### 5.5 Post-Incident Activities

*Post-incident activities capture lessons learned, improve controls, and fulfil regulatory reporting obligations. These activities must be completed even when the incident is assessed as low severity.*

#### 5.5.1 Post-Incident Review (PIR)

- A Post-Incident Review must be conducted within **30 calendar days** of incident closure for Tier 1 and Tier 2 incidents, and within **60 days** for Tier 3 incidents.
- The PIR must be chaired by the Incident Response Lead and attended by all IRT members and relevant business stakeholders.

**PIR Agenda Template:**

1. Incident timeline reconstruction — what happened and when?
2. Effectiveness of detection — was the incident detected promptly?
3. Effectiveness of containment — was containment timely and adequate?
4. Eradication completeness — was the root cause fully addressed?
5. Recovery efficiency — were RTO and RPO targets met?
6. Communication effectiveness — were internal and external communications timely and accurate?
7. Regulatory compliance — were all reporting obligations met within required timelines?
8. Identified control gaps and improvement actions.
9. Assignment of action items with owners and due dates.

#### 5.5.2 Lessons Learned Action Register

*Authors should maintain a running register of improvement actions arising from each incident. The register must be tracked to closure.*

| Action ID | Lesson Identified | Recommended Action | Owner | Target Date | Status |
|---|---|---|---|---|---|
| [LL-001] | [Description of gap] | [Specific control improvement] | [Name / Role] | [Date] | [Open / In Progress / Closed] |
| [LL-002] | | | | | |

#### 5.5.3 Regulatory Post-Incident Reporting

*Authors should confirm applicable reporting requirements with the Compliance team for each incident. Requirements may change based on BNM circular updates.*

| Report | Trigger | Submission Deadline | Recipient | Responsible Party |
|---|---|---|---|---|
| Initial Incident Notification | Tier 1 cyber incident | Within 1 hour of discovery | BNM (FSP portal or designated channel) | CISO / Compliance |
| Interim Report | Ongoing Tier 1 incident | As requested by BNM | BNM | Compliance |
| Post-Incident Report | Tier 1 (and Tier 2 if BNM-directed) | Within 14 calendar days of closure | BNM | Compliance |
| PDPA Breach Notification | Confirmed personal data breach | As required under PDPA 2010 | PDPC and affected data subjects | Compliance / Legal |
| Board / Risk Committee Notification | Tier 1 and Tier 2 incidents | Within 24 hours (Tier 1) / 48 hours (Tier 2) | Board / BRCC | CISO |

---

## 6. Escalation Timelines and Notification Requirements

*This section defines the mandatory escalation timelines for each severity tier, covering both internal escalation and external regulatory notification. Authors must validate all regulatory timelines against the current BNM RMiT Policy Document and any subsequent BNM circulars.*

### 6.1 Internal Escalation Timelines

| Event | Tier 1 (Critical) | Tier 2 (High) | Tier 3 (Medium) | Tier 4 (Low) |
|---|---|---|---|---|
| SOC / First Responder notifies IRL | Immediate (T+0) | T+30 min | T+1 hour | T+4 hours |
| IRL activates full IRT | T+30 min | T+1 hour | As required | Not required |
| CISO notified | T+0 | T+30 min | T+2 hours | T+8 hours |
| Executive Sponsor / COO notified | T+1 hour | T+2 hours | T+8 hours | Not required |
| Board / Risk Committee notified | T+24 hours | T+48 hours | Next scheduled meeting | Not required |
| Legal Counsel engaged | T+1 hour (if data breach suspected) | As assessed | As required | Not required |
| PR / Communications engaged | T+1 hour (if customer impact) | T+2 hours | As required | Not required |

### 6.2 External Notification Timelines

*External notification timelines are governed by BNM RMiT, PDPA 2010, and other applicable regulations. These timelines represent current requirements and must be validated against the latest BNM issuances.*

| Notification Recipient | Trigger Condition | Required Timeline | Responsible Party |
|---|---|---|---|
| **Bank Negara Malaysia (BNM)** | Tier 1 technology/cyber incident | Within **1 hour** of discovery | CISO + Compliance |
| **BNM — Updated Notification** | Ongoing Tier 1 incident | Regular updates as directed | Compliance |
| **BNM — Post-Incident Report** | Tier 1 incident closure | Within **14 calendar days** | Compliance |
| **Personal Data Protection Commissioner (PDPC)** | Confirmed personal data breach | As required under PDPA 2010 | Compliance + Legal |
| **Affected Data Subjects** | Confirmed personal data breach | As required under PDPA 2010 | Communications + Legal |
| **Affected Third Parties / Vendors** | Third-party systems implicated | Within **[X hours]** of confirmation | Third-Party Liaison |
| **Cyber999 / CyberSecurity Malaysia** | Cyber incident (if applicable) | As appropriate | CISO |
| **Law Enforcement (PDRM / JSJK)** | Criminal activity suspected | Within **24 hours** (if warranted) | Legal + IRL |
| **Relevant FSPR / Financial Intelligence Unit** | Financial crime component detected | As directed by Compliance | Compliance + Legal |

### 6.3 Escalation Flowchart (Narrative)

*Authors are recommended to produce a visual flowchart as a companion to this table. A narrative description is provided below as a placeholder.*

1. Event detected by SOC, monitoring system, or user report.
2. SOC Analyst performs initial triage → classifies severity tier.
3. **If Tier 4:** Log, monitor, resolve via standard IT process. Escalate to IRL only if situation deteriorates.
4. **If Tier 3:** Notify IRL. IRL determines if full IRT activation is required. Manage within IT Operations.
5. **If Tier 2:** IRL activates partial IRT. CISO notified. Assess BNM notification requirement. Manage within 2-hour window.
6. **If Tier 1:** IRL activates full IRT immediately. CISO, Executive Sponsor notified. BNM notified within 1 hour. All-hands incident response posture activated.

---

## 7. Recovery Objectives — RPO and RTO Definitions by Tier

*This section defines Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO) for each system criticality tier. These values must be validated against business impact assessments and tested through the DRP testing program. Authors should ensure these align with commitments made to BNM and reflect actual technical capability.*

### 7.1 Definitions

**Recovery Point Objective (RPO):** The maximum acceptable age of data that can be recovered after an incident; represents the maximum tolerable data loss measured in time.

**Recovery Time Objective (RTO):** The maximum acceptable duration of time within which a system or process must be restored after an incident; represents the maximum tolerable downtime.

### 7.2 RPO and RTO Targets by System Criticality Tier

| System Tier | Tier Label | Description | RPO Target | RTO Target | Recovery Method |
|---|---|---|---|---|---|
| **Tier 1** | Mission-Critical | Systems whose failure causes immediate, material financial loss or systemic risk; subject to BNM reporting | ≤ 1 hour | ≤ 4 hours | Hot standby / active-active failover |
| **Tier 2** | Business-Critical | Systems whose failure causes significant operational disruption or material customer impact | ≤ 4 hours | ≤ 8 hours | Warm standby / restore from backup |
| **Tier 3** | Important | Systems whose failure causes internal operational disruption but limited customer impact | ≤ 24 hours | ≤ 24 hours | Cold standby / restore from backup |
| **Tier 4** | Standard | Systems supporting non-critical functions; failure manageable through manual workarounds | ≤ 48 hours | ≤ 72 hours | Restore from backup |

### 7.3 System Tier Assignments

*Authors must populate the following table to align each production system with its assigned tier. This table must be reviewed and updated annually or whenever a significant change is made to the technology estate.*

| System / Application | Business Function | Tier Assignment | Assigned RPO | Assigned RTO | Last Validated |
|---|---|---|---|---|---|
| [Core Banking System] | Core financial processing | Tier 1 | [e.g., ≤ 1 hour] | [e.g., ≤ 4 hours] | [Date] |
| [Payment Gateway] | Payment processing | Tier 1 | [e.g., ≤ 1 hour] | [e.g., ≤ 4 hours] | [Date] |
| [Internet Banking Platform] | Customer-facing banking services | Tier 2 | [e.g., ≤ 4 hours] | [e.g., ≤ 8 hours] | [Date] |
| [ATM Switching System] | ATM network management | Tier 2 | [e.g., ≤ 4 hours] | [e.g., ≤ 8 hours] | [Date] |
| [HR & Payroll System] | Internal HR operations | Tier 3 | [e.g., ≤ 24 hours] | [e.g., ≤ 24 hours] | [Date] |
| [Email / Collaboration] | Internal communications | Tier 3 | [e.g., ≤ 24 hours] | [e.g., ≤ 24 hours] | [Date] |
| [Document Management System] | Internal document storage | Tier 4 | [e.g., ≤ 48 hours] | [e.g., ≤ 72 hours] | [Date] |
| [Add additional systems] | | | | | |

---

## 8. Backup Schedule and Retention Periods

*This section documents the backup strategy for all in-scope systems. Backup configurations must be validated against RPO targets and must be tested regularly to ensure recoverability. Authors should align this section with the DRP and the organization's data classification framework.*

### 8.1 Backup Strategy Overview

| Backup Type | Description | Typical Frequency | Storage Location |
|---|---|---|---|
| **Full Backup** | Complete copy of all data on the system | [e.g., Weekly — Sunday 02:00] | [Primary: On-site / Secondary: Off-site / Cloud] |
| **Incremental Backup** | Changes since the last backup (full or incremental) | [e.g., Daily — 22:00] | [Primary: On-site / Secondary: Off-site] |
| **Differential Backup** | Changes since the last full backup | [e.g., Daily — 22:00 (alternative to incremental)] | [Primary: On-site] |
| **Snapshot (VM / Cloud)** | Point-in-time system state capture | [e.g., Every 4 hours] | [On-site / Cloud storage] |
| **Database Transaction Log** | Continuous database change logging | [e.g., Every 15 minutes] | [On-site / Replicated] |
| **Offsite / Cloud Replication** | Replicated copy at geographically separate location | [e.g., Real-time / Daily] | [Offsite DC / Cloud region] |

### 8.2 Backup Schedule by System Tier

| System | Tier | Full Backup | Incremental / Snapshot | Transaction Log | Offsite Copy |
|---|---|---|---|---|---|
| [Core Banking System] | 1 | Weekly | Every [X] hours | Every 15 min | Real-time replication |
| [Payment Gateway] | 1 | Weekly | Every [X] hours | Every 15 min | Real-time replication |
| [Internet Banking Platform] | 2 | Weekly | Daily | Hourly | Daily |
| [ATM Switching System] | 2 | Weekly | Daily | Hourly | Daily |
| [HR & Payroll System] | 3 | Weekly | Daily | N/A | Weekly |
| [Email / Collaboration] | 3 | Weekly | Daily | N/A | Weekly |
| [Document Management System] | 4 | Monthly | Weekly | N/A | Monthly |

### 8.3 Backup Retention Schedule

*Retention periods must comply with legal, regulatory, and operational requirements. Authors should validate retention periods against PDPA data minimization obligations and BNM record-keeping requirements.*

| System / Data Type | Tier | Daily Backup Retention | Weekly Backup Retention | Monthly Backup Retention | Annual Backup Retention | Regulatory Minimum |
|---|---|---|---|---|---|---|
| [Core Banking System] | 1 | 30 days | 12 weeks | 12 months | 7 years | [BNM / FSA requirement] |
| [Payment Gateway] | 1 | 30 days | 12 weeks | 12 months | 7 years | [BNM / FSA requirement] |
| [Internet Banking Platform] | 2 | 14 days | 8 weeks | 6 months | 3 years | [Define per compliance] |
| [HR & Payroll] | 3 | 7 days | 4 weeks | 3 months | 7 years | [Employment Act / LHDN] |
| [General Systems] | 3–4 | 7 days | 4 weeks | 3 months | As required | [Define per compliance] |

### 8.4 Backup Integrity Controls

- All backup jobs are logged and monitored by [Backup Monitoring Tool / IT Operations].
- Failed backup jobs trigger automated alerts to IT Operations within [X minutes].
- Backup integrity is verified using [checksum / hash verification method] after each backup job.
- Monthly reports on backup job success rates are reviewed by the IT Operations Lead.
- A backup failure exceeding [X] consecutive cycles must be escalated to the IRL as a potential Tier 3 incident.

---

## 9. Restoration Testing Results

*Regular restoration testing validates that backups are recoverable and that RTO/RPO targets are achievable. BNM RMiT requires that recovery capabilities be tested at defined intervals. Authors must maintain a current record of all restoration tests.*

### 9.1 Restoration Testing Schedule

| Test Type | Frequency | Scope | Responsible Party | Next Scheduled Test |
|---|---|---|---|---|
| File / Database restoration spot check | Monthly | Sample critical system backups | IT Operations | [Date] |
| Full system restoration test (non-production) | Quarterly | Tier 1 and Tier 2 systems | IT Operations + Business | [Date] |
| DR failover test | Semi-annually | All Tier 1 systems | IT Operations + IRT | [Date] |
| Full DR simulation (tabletop + technical) | Annually | All tiers | IRT + Business + Exec | [Date] |
| Post-incident backup validation | Per event (if backup used) | Affected systems | IT Operations | N/A |

### 9.2 Restoration Test Results Register

*All restoration tests must be documented in this register. Records must be retained for a minimum of [3 / 5 / 7] years and made available to BNM upon request.*

| Test ID | Test Date | System Tested | Test Type | Backup Date Used | RTO Target | Actual Recovery Time | RPO Target | Actual Data Loss | Result | Deficiencies Identified | Remediation Actions | Remediation Due | Retested |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [RST-2025-001] | [Date] | [System Name] | Full restoration | [Backup Date] | [X hours] | [Actual hours] | [X hours] | [Actual minutes] | Pass / Fail | [None / Description] | [Action] | [Date] | [Yes/No/Date] |
| [RST-2025-002] | | | | | | | | | | | | | |
| [Add rows as required] | | | | | | | | | | | | | |

### 9.3 Restoration Test Summary (Latest Cycle)

*Authors should provide a management summary of the most recent full restoration test cycle for executive and regulatory audiences.*

| Metric | Result |
|---|---|
| Test Period | [Quarter / Year] |
| Systems Tested | [Number] of [Total in scope] |
| Tests Passed (RTO met) | [Number] ([%]) |
| Tests Failed (RTO not met) | [Number] ([%]) |
| Tests Passed (RPO met) | [Number] ([%]) |
| Tests Failed (RPO not met) | [Number] ([%]) |
| Open Deficiencies | [Number] |
| Critical Deficiencies (unresolved >30 days) | [Number] |
| Executive Sign-Off | [Name / Date] |

---

## 10. RACI Matrix

*The RACI matrix defines accountability across all incident response activities. R = Responsible (performs the task), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (kept updated).*

| Activity | IRL | CISO | IT Ops Lead | SOC | Compliance | Legal | Communications | Executive Sponsor | Business Unit |
|---|---|---|---|---|---|---|---|---|---|
| Incident detection and logging | I | I | I | R/A | I | — | — | — | I |
| Initial triage and classification | A | C | C | R | C | — | — | — | — |
| IRT activation | R/A | C | C | I | I | — | — | I | — |
| Internal stakeholder notification | R/A | C | I | I | I | I | I | I | I |
| BNM regulatory notification | C | A | — | — | R | C | — | I | — |
| Short-term containment | A | C | R | R | I | — | — | — | — |
| Long-term containment | A | C | R | C | I | — | — | — | — |
| Forensic evidence preservation | C | A | C | R | I | C | — | — | — |
| External forensics engagement | A | R | I | I | — | C | — | I | — |
| Eradication actions | A | C | R | R | I | — | — | — | — |
| Root cause analysis | A | R | C | C | I | — | — | — | — |
| System recovery execution | A | C | R | I | I | — | — | — | C |
| Recovery validation / sign-off | A | C | R | — | — | — | — | — | R |
| Customer communication | C | I | — | — | C | A | R | I | C |
| Board / Risk Committee notification | R | C | — | — | C | C | — | A | — |
| Post-incident review facilitation | R/A | C | C | C | C | C | C | I | C |
| Lessons learned action tracking | R/A | C | C | I | C | — | — | I | C |
| IRP update and re-approval | R/A | C | C | I | C | — | — | I | — |
| Post-incident report to BNM | C | A | — | — | R | C | — | I | — |
| PDPA breach notification | C | C | — | — | R | A | C | I | — |

---

## 11. Review and Approval

### 11.1 Review Obligations

*This section documents the minimum review cadence required for this Plan. Review frequency is aligned with BNM RMiT requirements and [Organization Name]'s internal governance framework.*

| Review Type | Frequency | Trigger Condition | Responsible Party |
|---|---|---|---|
| Scheduled periodic review | Quarterly (trend and performance review) | Calendar-based | Incident Response Lead |
| Post-incident triggered review | Per significant incident (Tier 1 / Tier 2) | Upon incident closure | Incident Response Lead |
| Ad-hoc review | As required | Significant regulatory or threat landscape change | CISO |
| Full document review and re-approval | Annually | Calendar-based | IRL + CISO + Governance |

### 11.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation and approval |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 11.3 Approval Sign-Off

*This document requires formal approval from all parties listed below before it becomes effective. Digital signatures or wet signatures are acceptable in accordance with [Organization Name]'s document management policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Incident Response Lead | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Technology Officer (CTO) / Chief Operating Officer (COO) | [Name] | | [Date] |
| Chief Compliance Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Board Risk Management Committee (for Tier 1 policy documents) | [Name / Chairperson] | | [Date] |

---

## 12. References

*This section lists the primary regulatory instruments, standards, and internal documents that govern or inform this Incident Response Plan.*

### 12.1 Regulatory References

| Reference | Issuing Authority | Relevant Clause(s) | Notes |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | **Clause 11.1** — Technology Incident Management | Primary regulatory basis for this Plan |
| Personal Data Protection Act 2010 (PDPA) | Malaysian Parliament | Sections 29–33 (security, data breach) | Governs personal data breach notification obligations |
| Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA) | Malaysian Parliament | [Relevant sections on operational resilience] | Overarching financial institution obligations |
| BNM Policy Document on Operational Risk (if applicable) | Bank Negara Malaysia | [Relevant clauses] | |
| NACSA National Cyber Security Policy | National Cyber Security Agency (NACSA) | [Relevant provisions] | Critical information infrastructure obligations |
| Payment Card Industry Data Security Standard (PCI DSS) v4.0 | PCI Security Standards Council | Requirement 12.10 (incident response) | Applicable if card data processed |

### 12.2 Internal References

| Document | Owner | Location |
|---|---|---|
| Disaster Recovery Plan (DRP) | [Owner] | [Document Management System path] |
| Business Continuity Plan (BCP) | [Owner] | [Document Management System path] |
| Data Classification Policy | [Owner] | [Document Management System path] |
| Third-Party Risk Management Policy | [Owner] | [Document Management System path] |
| Information Security Policy | [Owner] | [Document Management System path] |
| Crisis Communications Plan | [Owner] | [Document Management System path] |
| Data Breach Notification Procedure | [Owner] | [Document Management System path] |
| Acceptable Use Policy | [Owner] | [Document Management System path] |

### 12.3 Standards and Frameworks

| Standard / Framework | Relevant Section | Application |
|---|---|---|
| ISO/IEC 27035 — Information Security Incident Management | All parts | Best practice framework for incident response |
| NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide | All sections | Technical guidance on incident handling lifecycle |
| NIST Cybersecurity Framework (CSF) 2.0 | Detect, Respond, Recover functions | Maturity alignment |

---

## 13. Appendices

### Appendix A — On-Call Roster and Contact Directory

*Maintain a current, separate controlled document for the IRT on-call roster. This appendix should reference the roster location and access instructions. On-call roster must be reviewed monthly.*

| Document | Location | Last Updated | Owner |
|---|---|---|---|
| IRT On-Call Roster | [Location / Access Path] | [Date] | Incident Response Lead |
| External Vendor Emergency Contacts | [Location / Access Path] | [Date] | IT Operations Lead |
| BNM Reporting Channel Details | [Location / Access Path] | [Date] | Compliance |

---

### Appendix B — Incident Log Template

*All incidents must be documented using this log. A separate log entry must be created for each unique incident. Logs must be retained for a minimum of [5 / 7] years.*

**Incident Reference Number:** [INC-YYYY-NNNN]

| Field | Details |
|---|---|
| Date / Time Detected | |
| Date / Time Reported | |
| Detection Source | |
| Reported By | |
| System(s) Affected | |
| Initial Description | |
| Severity Classification | Tier [1 / 2 / 3 / 4] |
| Incident Response Lead Assigned | |
| IRT Activated? | Yes / No |
| BNM Notification Required? | Yes / No |
| BNM Notification Submitted? | Yes / No — [Date/Time] |

**Chronological Action Log:**

| Timestamp | Action Taken | Performed By | Authorized By | Notes |
|---|---|---|---|---|
| [YYYY-MM-DD HH:MM] | | | | |
| | | | | |

**Incident Closure:**

| Field | Details |
|---|---|
| Date / Time of Closure | |
| Root Cause (confirmed) | |
| Data Affected (type, volume) | |
| Customer Impact | |
| Regulatory Notifications Made | |
| PIR Scheduled Date | |
| IRL Sign-Off | |

---

### Appendix C — Chain of Custody Template

*Chain of custody records are required for all digital evidence collected during an incident where legal action, regulatory investigation, or insurance claim is anticipated.*

**Evidence Reference Number:** [EVD-YYYY-NNNN]  
**Associated Incident Reference:** [INC-YYYY-NNNN]

| Field | Details |
|---|---|
| Description of Evidence | |
| System / Device Source | |
| Date / Time Collected | |
| Collected By | |
| Hash / Checksum Value (SHA-256) | |
| Storage Location | |
| Access Restrictions Applied | |

**Custody Transfer Log:**

| Transfer Date/Time | Released By | Received By | Purpose | Signature (Released) | Signature (Received) |
|---|---|---|---|---|---|
| | | | | | |

---

### Appendix D — BNM Notification Draft Template

*The following template may be used as the basis for BNM initial incident notifications. Authors must ensure the template reflects the current BNM reporting format and channel requirements.*

**To:** [BNM Designated Contact / Supervisory Department]  
**From:** [Organization Name] — Chief Information Security Officer  
**Subject:** Technology Incident Notification — [Incident Reference Number]  
**Classification:** Confidential

---

**1. Incident Overview**

[Organization Name] hereby notifies Bank Negara Malaysia of a technology incident detected at [Time] on [Date].

**2. Incident Details**

| Field | Details |
|---|---|
| Incident Type | [Cyber / Technology Outage / Data Breach / Other] |
| Date / Time Detected | |
| Date / Time Notifying BNM | |
| Systems Affected | |
| Initial Assessment of Customer Impact | |
| Initial Assessment of Financial Impact | |
| Data Affected (if applicable) | |

**3. Immediate Actions Taken**

[Brief description of containment and initial response actions.]

**4. Current Status**

[Under investigation / Contained / In recovery / Resolved]

**5. Next Steps**

[Expected next update and timeline for post-incident report.]

**Submitted by:**  
[Name]  
[Title]  
[Organization Name]  
[Contact Number]  
[Date / Time]

---

### Appendix E — Incident Response Metrics Dashboard

*The following metrics should be tracked per incident and aggregated for quarterly trend review reporting.*

| Metric | Definition | Target | Current Quarter | Prior Quarter |
|---|---|---|---|---|
| Mean Time to Detect (MTTD) | Average time from incident occurrence to detection | < [X hours] | | |
| Mean Time to Contain (MTTC) | Average time from detection to containment | < [X hours] (Tier 1) | | |
| Mean Time to Recover (MTTR) | Average time from detection to full recovery | ≤ RTO target | | |
| Incidents by Tier | Count of incidents per severity tier | — | | |
| RTO Met (%) | Percentage of incidents where RTO was achieved | ≥ 95% | | |
| RPO Met (%) | Percentage of incidents where RPO was achieved | ≥ 95% | | |
| BNM Notifications — On Time (%) | Percentage submitted within required timeline | 100% | | |
| PIR Completion Rate | Percentage of qualifying incidents with PIR completed | 100% | | |
| Lessons Learned Actions — Closed on Time | Percentage of LL actions closed by due date | ≥ 90% | | |
| Repeat Incidents (same root cause) | Count of incidents with a root cause seen before | 0 | | |

---

### Appendix F — Tabletop Exercise Schedule and Record

*Tabletop exercises must be conducted at minimum annually. Records of exercises, including attendance, scenarios tested, and follow-up actions, must be retained for regulatory audit purposes.*

| Exercise ID | Date | Scenario Tested | Participants | Facilitator | Key Findings | Action Items | Completion Status |
|---|---|---|---|---|---|---|---|
| [TTX-2025-001] | [Date] | [e.g., Ransomware attack on core banking] | [List of roles] | [Name] | [Summary] | [Number of actions raised] | [Open / Closed] |
| [TTX-2025-002] | [Date] | [e.g., Data breach — customer PII] | | | | | |

---

*End of Document*

---

**Document Classification:** Confidential  
**Document ID:** [Document ID]  
**Version:** 1.0  
**© [Organization Name] [Year] — All rights reserved. Unauthorized reproduction or distribution is prohibited.**