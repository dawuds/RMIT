# Data Centre Access Control Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | IAM Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Department** | [Department Name] |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Physical Access Control Zones](#5-physical-access-control-zones)
6. [Access Provisioning and Deprovisioning Workflow](#6-access-provisioning-and-deprovisioning-workflow)
7. [Step-by-Step Process Flow](#7-step-by-step-process-flow)
8. [Roles and Responsibilities (RACI)](#8-roles-and-responsibilities-raci)
9. [Segregation of Duties Matrix](#9-segregation-of-duties-matrix)
10. [Periodic Access Certification Process](#10-periodic-access-certification-process)
11. [Environmental Controls](#11-environmental-controls)
12. [Visitor and Third-Party Access](#12-visitor-and-third-party-access)
13. [Security Incidents and Exceptions](#13-security-incidents-and-exceptions)
14. [Monitoring, Logging, and Audit](#14-monitoring-logging-and-audit)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*State the primary objective of this procedure and the business problem it addresses. Explain why physical access control to data centre facilities is critical to the organization's security posture.*

This procedure establishes the formal process by which [Organization Name] manages, controls, monitors, and audits physical access to its data centre facilities. The procedure ensures that only authorized personnel are granted access to critical technology infrastructure, and that all access activities are logged, reviewed, and governed in accordance with applicable regulatory requirements.

The objectives of this procedure are to:

- Protect the confidentiality, integrity, and availability of information systems and data assets housed within [Organization Name]'s data centre facilities.
- Establish clear authorization, provisioning, and deprovisioning workflows for physical access rights.
- Enforce the principle of least privilege and segregation of duties in physical access management.
- Ensure compliance with Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically clause 10.28, governing physical security of technology infrastructure.
- Provide a structured process for periodic review and certification of physical access rights.
- Define responsibilities for all parties involved in data centre access management.

---

## 2. Scope and Applicability

*Define the boundaries of this procedure — which facilities, systems, personnel, and organizational units are covered. Be explicit about any exclusions.*

### 2.1 In-Scope Facilities

This procedure applies to all data centre facilities owned, operated, leased, or co-located by [Organization Name], including but not limited to:

| Facility Name | Location | Type | Tier Classification |
|---|---|---|---|
| [Primary Data Centre Name] | [Address / Floor / Building] | Owned / Leased / Co-lo | [Tier I / II / III / IV] |
| [Secondary Data Centre Name] | [Address / Floor / Building] | Owned / Leased / Co-lo | [Tier I / II / III / IV] |
| [Disaster Recovery Site Name] | [Address / Floor / Building] | Owned / Leased / Co-lo | [Tier I / II / III / IV] |
| [Network Operations Centre] | [Address / Floor / Building] | Owned / Leased / Co-lo | [N/A] |

### 2.2 In-Scope Personnel

This procedure applies to:

- All permanent employees of [Organization Name] requiring physical access to data centre facilities.
- Contractors, vendors, and third-party service providers requiring temporary or recurring access.
- Auditors (internal and external) conducting on-site inspections.
- Regulators and supervisory bodies conducting examinations.
- Any individual granted escort access by an authorized [Organization Name] employee.

### 2.3 In-Scope Systems and Assets

- Server racks, cabinets, and cages.
- Network equipment (routers, switches, firewalls, load balancers).
- Storage systems (SAN, NAS, tape libraries).
- Power distribution and UPS systems.
- Environmental monitoring and control systems.
- Physical security systems (CCTV, access control panels, biometric readers).

### 2.4 Exclusions

*List any facilities, systems, or personnel explicitly excluded from this procedure's scope.*

- Office server rooms containing fewer than [N] rack units, which are governed by [Reference Policy/Procedure].
- Cloud-hosted infrastructure managed by third-party providers (governed by [Cloud Governance Policy]).
- [Any other explicit exclusion]

---

## 3. Regulatory and Policy Framework

*List all applicable regulatory requirements and internal policies that this procedure implements or supports.*

### 3.1 Regulatory Requirements

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) Policy | Clause 10.28 | Physical security controls for technology infrastructure, including access control, environmental controls, and monitoring of data centre facilities. |
| BNM RMiT Policy | Clause 10.1 – 10.10 | General technology risk management governance and oversight obligations. |
| Personal Data Protection Act 2010 (PDPA) | Part II, Section 5 | Security principle requiring protection of personal data against unauthorized physical access. |
| [ISO/IEC 27001:2022] | Annex A, Control 7.2, 7.3 | Physical entry controls and securing offices, rooms, and facilities. |
| [Payment Card Industry DSS (PCI DSS)] | Requirement 9 | Restrict physical access to cardholder data (if applicable). |

### 3.2 Internal Policies and Related Documents

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy governing security controls |
| Physical Security Policy | [Doc ID] | Parent policy for physical security |
| Identity and Access Management Policy | [Doc ID] | Governs access provisioning principles |
| Vendor and Third-Party Management Policy | [Doc ID] | Governs third-party access |
| Incident Response Procedure | [Doc ID] | Invoked upon security incidents |
| Business Continuity Plan | [Doc ID] | Reference for DR site access procedures |
| Asset Management Policy | [Doc ID] | Governs assets housed within data centres |

---

## 4. Definitions and Terminology

*Define all key terms used throughout this document to ensure consistent interpretation by all readers.*

| Term | Definition |
|---|---|
| **Authorized Personnel** | Individuals whose physical access to one or more data centre zones has been formally approved through the access request process defined in this procedure. |
| **Access Control System (ACS)** | The electronic system managing physical entry to secured areas, including card readers, biometric scanners, PINs, and associated software platforms. |
| **Access Zone** | A defined physical area within or surrounding a data centre facility, each with distinct access control requirements based on criticality and sensitivity. |
| **Badge / Access Card** | A proximity card, smart card, or similar credential used to authenticate an individual at an access control point. |
| **Biometric Authentication** | Verification of an individual's identity using unique biological characteristics (e.g., fingerprint, retinal scan, facial recognition). |
| **Cage / Cage Area** | A physically separated, caged section within a co-location data centre allocated exclusively to [Organization Name]. |
| **Co-location (Co-lo)** | A data centre facility owned and operated by a third party, in which [Organization Name] leases rack space, cages, or suites. |
| **Data Centre** | A dedicated facility housing critical technology infrastructure including servers, storage, and networking equipment. |
| **Deprovisioning** | The formal process of revoking an individual's physical access rights. |
| **Escort** | The act of an authorized employee accompanying an unauthorized visitor within a controlled access zone. |
| **IAM Manager** | Identity and Access Management Manager; the designated owner of this procedure. |
| **Least Privilege** | The principle that individuals are granted only the minimum level of access necessary to perform their authorized duties. |
| **Man-trap / Airlock** | A secure entry vestibule requiring sequential authentication — exit from one door is permitted only after the entry door is secured. |
| **Provisioning** | The formal process of granting an individual physical access rights. |
| **Segregation of Duties (SoD)** | The separation of tasks and responsibilities to prevent any single individual from having complete control over a sensitive process. |
| **Tailgating / Piggybacking** | The unauthorized act of entering a controlled access area by following closely behind an authorized individual. |
| **Visitor** | Any individual who does not hold standing access rights to a data centre facility and must be escorted at all times. |

---

## 5. Physical Access Control Zones

*Describe the tiered zone structure of the data centre. Zones should be defined by criticality, with access controls becoming progressively stricter from the perimeter inward.*

### 5.1 Zone Architecture

[Organization Name] applies a defense-in-depth approach to physical security, organizing its data centre facilities into distinct access control zones. Each zone has defined access control mechanisms, authorized personnel categories, and monitoring requirements.

*Insert a floor plan diagram or zone map of the data centre as an appendix and reference it here.*

### 5.2 Zone Definitions

| Zone | Zone Name | Description | Authentication Method | Authorized Personnel Categories |
|---|---|---|---|---|
| **Zone 0** | Perimeter / Public Area | Building lobby, public reception, visitor waiting area. | None / Reception sign-in | General public, visitors (sign-in required) |
| **Zone 1** | Building Access | General building access, security checkpoint. | Building access card | All building employees, approved visitors (escorted) |
| **Zone 2** | Data Centre Anteroom / Staging | Loading bay, equipment staging area, visitor holding area immediately outside the data centre. | Access card + PIN | Data centre operations staff, approved vendors (escorted) |
| **Zone 3** | Data Centre Main Floor | Primary server floor; general rack and equipment areas. | Access card + Biometric (dual-factor) | IT Operations, Network Engineering, approved authorized staff |
| **Zone 4** | Sensitive / Restricted Zones | Specific cages, cabinets, or secure rooms housing classified or highly sensitive systems (e.g., HSM room, management network). | Access card + Biometric + Management approval | Named individuals only; strictly controlled |
| **Zone 5** | Operations Control Room | Data centre monitoring, CCTV systems, physical security management station. | Access card + Biometric + Role restriction | Data Centre Manager, Security Operations |

### 5.3 Zone Access Control Requirements

| Zone | CCTV Coverage | Motion Detection | Anti-Tailgating | Man-Trap | Intruder Alarm | Audit Log Retention |
|---|---|---|---|---|---|---|
| Zone 0 | Yes | No | No | No | Yes | [N] months |
| Zone 1 | Yes | Yes | No | No | Yes | [N] months |
| Zone 2 | Yes | Yes | No | No | Yes | [N] months |
| Zone 3 | Yes | Yes | Yes | Yes | Yes | [N] months |
| Zone 4 | Yes | Yes | Yes | Yes | Yes | [N] months |
| Zone 5 | Yes | Yes | Yes | No | Yes | [N] months |

### 5.4 Access Hours

| Zone | Standard Access Hours | After-Hours Access | Weekend / Public Holiday Access |
|---|---|---|---|
| Zone 0 | [e.g., 07:00–22:00] | Not applicable | Not applicable |
| Zone 1 | [e.g., 07:00–22:00] | Requires supervisor approval | Requires supervisor approval |
| Zone 2 | [e.g., 08:00–18:00] | Requires DC Manager approval | Requires DC Manager and CISO approval |
| Zone 3 | 24/7 (authorized staff only) | Logged; alert triggered | Logged; alert triggered |
| Zone 4 | Business hours + on-call | Requires dual approval | Requires dual approval |
| Zone 5 | 24/7 (DC Ops only) | Automatic alert | Automatic alert |

---

## 6. Access Provisioning and Deprovisioning Workflow

*Detail the end-to-end lifecycle of a physical access right, from initial request through termination. Include timelines, approval hierarchies, and system update requirements.*

### 6.1 Access Request and Provisioning

#### 6.1.1 Eligibility Criteria

An individual may be considered for physical data centre access only if they meet **all** of the following criteria:

- [ ] Employment or engagement with [Organization Name] is active and in good standing.
- [ ] A valid business justification for access exists and is documented.
- [ ] The requesting manager has confirmed the business need.
- [ ] The individual has completed mandatory data centre security awareness training within the preceding [N] months.
- [ ] A background verification check has been completed (for employees) or satisfactory vendor vetting has been completed (for third parties).
- [ ] The requested access zone is commensurate with the individual's role and responsibilities.

#### 6.1.2 Provisioning Workflow

*The following table describes each step in the access provisioning process. All steps must be completed and documented before access is granted.*

| Step | Action | Responsible Party | System / Tool | SLA |
|---|---|---|---|---|
| 1 | Requestor submits physical access request form (Appendix A) via [ITSM Tool / Email / Portal]. | Requestor | [ITSM Tool Name] | Day 0 |
| 2 | Line Manager reviews and approves business justification. | Line Manager | [ITSM Tool Name] | 1 business day |
| 3 | Data Centre Manager reviews and approves zone-level access request. | Data Centre Manager | [ITSM Tool Name] | 1 business day |
| 4 | For Zone 4 access: CISO or designated deputy provides secondary approval. | CISO | [ITSM Tool Name] | 2 business days |
| 5 | IAM team verifies training completion and eligibility criteria. | IAM Team | [Training Platform] | 1 business day |
| 6 | IAM team programs access card / biometric profile in the Access Control System. | IAM Team | [ACS Platform Name] | 1 business day |
| 7 | IAM team notifies requestor and line manager of access activation. | IAM Team | Email | Day of activation |
| 8 | Access record created and maintained in the Physical Access Register (Appendix B). | IAM Team | [Register / ITSM] | Day of activation |

**Maximum provisioning time (standard request):** [N] business days from submission.

#### 6.1.3 Access Request Form Requirements

The physical access request (Appendix A) must capture:

- Full name and employee/vendor ID of the individual requiring access.
- Department and reporting line.
- Business justification (specific role-based need).
- Zone(s) requested.
- Duration of access required (permanent, fixed-term, or one-time).
- If fixed-term or one-time: start date and end date.
- Name of sponsoring Line Manager.
- Confirmation that the individual has completed mandatory security awareness training.

### 6.2 Access Modification

*Describe the process for modifying existing access rights when an employee changes roles, is promoted, or requires additional access zones.*

| Trigger | Action Required | Initiated By | Approval Required |
|---|---|---|---|
| Role change (internal transfer) | Submit modification request; review existing rights; remove no-longer-required access; add newly required access. | Line Manager (new) | New Line Manager + Data Centre Manager |
| Promotion or expanded responsibilities | Submit request for additional zones; existing access rights reviewed for continued need. | Line Manager | Line Manager + Data Centre Manager (+ CISO if Zone 4) |
| Reduction in responsibilities | IAM team notified; access rights reduced within [N] business days. | HR / Line Manager | Line Manager |
| Long-term leave (> [N] days) | Access suspended for duration of leave; reinstated upon return. | HR | Automated trigger from HR system |

### 6.3 Access Deprovisioning

*Define the mandatory timelines and actions for revoking physical access rights upon employment termination, contract expiry, or other triggering events.*

#### 6.3.1 Deprovisioning Triggers

- Employment termination (resignation, redundancy, dismissal).
- End of contractor or vendor engagement.
- Disciplinary action requiring access removal.
- Role change resulting in access no longer being required.
- Failure to complete mandatory training renewal.
- Security incident involving the individual.

#### 6.3.2 Deprovisioning Timeline and Actions

| Trigger | Deprovisioning Deadline | Responsible Party | Action |
|---|---|---|---|
| Voluntary resignation (standard notice period) | **Same day as last working day** | HR (trigger) + IAM Team (execution) | Disable ACS profile; collect access card; update Physical Access Register. |
| Involuntary termination / dismissal | **Immediately upon notification** | HR (trigger) + IAM Team (execution) | Immediate ACS profile disable; card confiscation by Security or HR at time of notification. |
| Contractor engagement end | **By end of final day on-site** | Vendor Manager (trigger) + IAM Team (execution) | Disable ACS profile; collect access card. |
| Security incident | **Immediately upon instruction** | CISO / Security Operations (trigger) + IAM Team (execution) | Immediate ACS profile disable; escalate to Incident Response team. |
| Role change (access no longer needed) | **Within [N] business days of role change** | Line Manager (trigger) + IAM Team (execution) | Modify ACS profile to remove no-longer-required zone access. |

#### 6.3.3 Deprovisioning Checklist

- [ ] ACS profile disabled or modified in [ACS Platform Name].
- [ ] Biometric data removed from biometric reader database (if applicable).
- [ ] Physical access card collected and deactivated.
- [ ] Physical Access Register updated with deprovisioning date and reason.
- [ ] ITSM ticket closed and documented.
- [ ] Confirmation notification sent to Line Manager and HR.
- [ ] If Zone 4 access: CISO notified of deprovisioning.

---

## 7. Step-by-Step Process Flow

*Provide a linear, numbered process description for the most critical end-to-end access management scenarios. This section should be usable as an operational reference by data centre operations staff and the IAM team.*

### 7.1 Process: Standard Physical Access Request (Employee)

**Process Owner:** IAM Manager
**Frequency:** As required

---

**Step 1 — Initiate Request**

The employee (requestor) or their Line Manager initiates a Physical Access Request via [ITSM Tool / Helpdesk Portal / Access Request Form].

- Required fields: Full name, employee ID, department, zone(s) requested, business justification, requested duration, and Line Manager name.
- The requestor attaches evidence of completed mandatory data centre security training (or confirms completion date within the system).

**Step 2 — Line Manager Review and Approval**

The Line Manager receives an automated notification and reviews the access request within **1 business day**.

- The Line Manager verifies that the access request is consistent with the employee's role and responsibilities.
- The Line Manager confirms the business justification is valid and necessary.
- If approved: the request proceeds to Step 3.
- If rejected: the request is closed; the requestor is notified with the reason for rejection.

**Step 3 — Data Centre Manager Review and Approval**

The Data Centre Manager receives an automated notification and reviews the zone-level request within **1 business day**.

- The Data Centre Manager confirms that the requested zone access is appropriate and consistent with operational requirements.
- The Data Centre Manager may request additional justification if the zone requested appears excessive for the stated role.
- If approved: the request proceeds to Step 4.
- If Zone 4 access is requested: escalate to Step 4a.
- If approved (non-Zone 4): proceed to Step 5.

**Step 4 — IAM Eligibility Verification**

The IAM Team verifies that the requestor meets all eligibility criteria:

- [ ] Confirm employment status is active in HR system.
- [ ] Confirm mandatory training completion is current (within [N] months).
- [ ] Confirm no outstanding disciplinary matters (check with HR if required).
- [ ] Confirm no conflicting SoD issues (reference Segregation of Duties Matrix, Section 9).

If any criterion is not met: the IAM Team contacts the Line Manager to resolve the gap before proceeding. The request is placed on hold pending resolution.

**Step 4a — Secondary Approval (Zone 4 Only)**

For Zone 4 access requests, the IAM Team escalates to the CISO (or designated deputy) for secondary approval within **2 business days**.

- The CISO reviews the business justification and confirms the necessity of Zone 4 access.
- If approved: proceed to Step 5.
- If rejected: the IAM Team notifies the Line Manager; the request is closed.

**Step 5 — Access Card Programming and Biometric Enrollment**

The IAM Team programs the individual's physical access credentials in [ACS Platform Name]:

- [ ] Enable zone access permissions on the individual's access card / badge profile.
- [ ] Enroll biometric data (fingerprint / retinal scan) if required for the requested zone.
- [ ] Set access hours and any applicable time restrictions.
- [ ] Set access expiry date if access is fixed-term (for contractors or temporary access).
- [ ] Verify that programming is correct by reviewing the ACS profile before activation.

**Step 6 — Notification and Record Update**

- The IAM Team sends a confirmation email to the employee, Line Manager, and Data Centre Manager confirming that access has been activated, the zones enabled, and the expiry date (if applicable).
- The Physical Access Register (Appendix B) is updated with the new access record.
- The ITSM ticket is closed with full audit trail documentation.

---

### 7.2 Process: One-Time Visitor / Vendor Access

**Process Owner:** Data Centre Manager
**Frequency:** As required

---

**Step 1 — Visitor Pre-Registration**

The [Organization Name] sponsor (the employee hosting the visitor) submits a Visitor Access Request at least **[N] hours in advance** via [ITSM Tool / Visitor Registration System]. Emergency requests are handled per Section 13.2.

- Required information: Visitor name, organization, purpose, date and time of visit, zones to be visited, expected duration, and name of [Organization Name] escort.

**Step 2 — Data Centre Manager Pre-Approval**

The Data Centre Manager reviews and approves or rejects the visitor request within [N] hours.

**Step 3 — On-Site Registration**

Upon arrival, the visitor must:

- Present a valid government-issued photo ID.
- Sign the Data Centre Visitor Log (Appendix C).
- Receive a temporary visitor badge clearly marked "VISITOR."
- Be briefed on data centre safety and security rules by the escort.

**Step 4 — Escorted Access**

- The [Organization Name] escort accompanies the visitor **at all times** throughout the data centre facility.
- The escort is responsible for the visitor's compliance with all security and safety rules.
- The visitor must not be left unattended at any point within a controlled access zone.

**Step 5 — Visitor Departure and Badge Collection**

- The visitor badge is collected by the escort or security desk upon departure.
- The Visitor Log is signed off with the actual departure time.
- If a visitor badge is not returned: the data centre manager is notified immediately and the badge is deactivated in the ACS.

---

### 7.3 Process: Emergency After-Hours Access

**Process Owner:** Data Centre Manager / On-Call Manager
**Frequency:** As required (exceptions to standard hours)

*This process governs legitimate emergency access by authorized personnel outside of standard operating hours and must not be used to circumvent the standard provisioning process.*

**Step 1 — Contact On-Call Manager**

The individual requiring emergency access contacts the on-call manager or data centre operations duty officer via [Phone Number / Escalation System].

**Step 2 — Verbal Authorization and Logging**

The on-call manager verbally authorizes the access and immediately logs:

- Name of individual granted emergency access.
- Date and time of authorization.
- Business justification for emergency access.
- Zones to be accessed.
- Estimated duration.

**Step 3 — Access Granted and Monitored**

The individual uses their existing ACS credentials to access the facility. CCTV monitoring is in place. The SOC or CCTV monitoring team is notified of the after-hours access event.

**Step 4 — Post-Event Documentation**

Within **1 business day** of the emergency access event, the on-call manager submits a formal after-hours access notification to the IAM team and Data Centre Manager, documenting:

- Confirmed business justification.
- Actions performed during the visit.
- Confirmation that no security incidents occurred.

---

## 8. Roles and Responsibilities (RACI)

*This section defines accountability for each key activity in the data centre access control lifecycle. RACI: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 8.1 RACI Matrix

| Activity | IAM Manager | IAM Team | Data Centre Manager | Line Manager | CISO / Security | HR | Requestor | Internal Audit |
|---|---|---|---|---|---|---|---|---|
| Define and maintain access control procedure | A/R | C | C | I | C | I | — | I |
| Define zone classifications and access requirements | C | C | A/R | I | C | — | — | I |
| Submit physical access request | I | I | I | A | I | I | R | — |
| Approve access request (business justification) | I | I | C | A/R | I | C | — | — |
| Approve access request (zone suitability) | C | I | A/R | C | C | — | — | — |
| Secondary approval for Zone 4 access | I | I | C | I | A/R | — | — | — |
| Verify eligibility criteria | A | R | C | C | C | C | — | — |
| Program ACS and biometric enrollment | A | R | I | I | I | — | — | — |
| Maintain Physical Access Register | A | R | C | I | I | I | — | I |
| Conduct periodic access certification | A | R | C | C | C | I | — | C |
| Initiate deprovisioning upon termination | I | R | I | I | I | A | — | — |
| Execute deprovisioning in ACS | A | R | I | I | I | I | — | — |
| Approve visitor access | I | I | A/R | C | I | — | I | — |
| Escort visitors within data centre | I | I | C | R | I | — | A | — |
| Maintain visitor log | I | C | A/R | I | I | — | — | — |
| Review ACS and CCTV logs | I | C | A/R | — | C | — | — | I |
| Investigate security incidents | C | C | C | I | A/R | I | — | C |
| Conduct annual procedure review | A/R | C | C | I | C | I | — | C |

---

## 9. Segregation of Duties Matrix

*Define which roles must be separated to prevent conflicts of interest and unauthorized access. An "X" indicates an incompatible combination — one individual must not hold both roles.*

### 9.1 Access Management SoD Conflicts

| Role / Function | Access Requester | Access Approver (Line Mgr) | Access Approver (DC Mgr) | ACS Administrator | Access Certifier | Physical Access Auditor |
|---|---|---|---|---|---|---|
| **Access Requester** | — | X | X | X | X | X |
| **Access Approver (Line Manager)** | X | — | — | X | X | X |
| **Access Approver (DC Manager)** | X | — | — | — | X | X |
| **ACS Administrator** | X | X | — | — | X | X |
| **Access Certifier** | X | X | X | X | — | X |
| **Physical Access Auditor** | X | X | X | X | X | — |

**Legend:** X = Incompatible; these roles must not be held by the same individual.

### 9.2 SoD Violation Handling

If an SoD conflict is identified during the access request process:

1. The IAM Team flags the conflict and notifies the IAM Manager.
2. The IAM Manager escalates to the CISO for exception decision.
3. Any approved exception is documented, time-bound, and subject to enhanced monitoring.
4. All SoD exceptions are reported to the Audit Committee [quarterly / at the next scheduled review].

### 9.3 Compensating Controls for Approved Exceptions

| Compensating Control | Description | Applicable Scenario |
|---|---|---|
| Dual-person integrity | Require two authorized individuals to be present when the role-conflicted individual performs the sensitive action. | ACS administrator requiring temporary access to their own profile for testing. |
| Enhanced CCTV and ACS logging | Increase CCTV resolution and log review frequency for individuals with approved SoD exceptions. | Any approved exception. |
| Supervisory review | All actions performed under the exception must be reviewed and signed off by the CISO or Data Centre Manager within 24 hours. | Any approved exception. |
| Time-limited exception | SoD exceptions are valid for a maximum of [N] days; renewal requires fresh CISO approval. | Any approved exception. |

---

## 10. Periodic Access Certification Process

*Describe the formal, recurring process by which all physical access rights are reviewed to confirm they remain appropriate, necessary, and compliant with the least-privilege principle.*

### 10.1 Certification Schedule

| Certification Type | Frequency | Scope | Initiated By | Completed By |
|---|---|---|---|---|
| Full Access Review | Annual | All personnel with any zone access | IAM Manager | Line Managers + Data Centre Manager |
| Zone 4 Access Review | Semi-Annual | Zone 4 access holders only | IAM Manager | CISO + Data Centre Manager |
| Contractor / Vendor Access Review | Quarterly | All third-party access holders | IAM Manager | Vendor Managers |
| Post-Incident Access Review | Ad hoc (within [N] days of incident) | Affected personnel | CISO | IAM Manager + Data Centre Manager |
| Role-Change Access Review | Ad hoc (triggered by HR event) | Individual affected by role change | HR (trigger) | Line Manager (new) |

### 10.2 Certification Process

**Step 1 — IAM Team generates access certification report.**

The IAM Team extracts a current Physical Access Register report from [ACS Platform Name] and [ITSM Tool], listing all active access rights by individual, zone, and grant date.

**Step 2 — Reports distributed to certifiers.**

The IAM Manager distributes individual certification tasks to the appropriate certifiers (Line Managers for employees; Vendor Managers for contractors) via [ITSM Tool / Email / GRC Platform]. Certifiers are given [N] business days to complete their reviews.

**Step 3 — Certifiers review each access record.**

For each access right in their scope, the certifier must make one of the following decisions:

| Decision | Action Required |
|---|---|
| **Certify / Confirm** | Access is still required and appropriate. No change needed. |
| **Modify** | Access requires modification (e.g., zone downgrade, reduced hours). Certifier specifies required changes. |
| **Revoke** | Access is no longer required or is no longer appropriate. IAM Team deprovisioning to be initiated. |

**Step 4 — IAM Team implements changes.**

The IAM Team implements all modification and revocation decisions within **[N] business days** of receiving the certified report.

**Step 5 — Escalation for non-response.**

If a certifier fails to complete their review within the allotted period:

- Day [N+1]: IAM Manager sends a reminder.
- Day [N+3]: IAM Manager escalates to the certifier's manager.
- Day [N+5]: IAM Manager escalates to the CISO; access rights of non-reviewed individuals are suspended pending certification.

**Step 6 — Certification completion report.**

Upon completion of the certification cycle, the IAM Manager prepares a Certification Completion Report documenting:

- Total access rights reviewed.
- Number confirmed, modified, and revoked.
- Number of exceptions.
- Completion rate and any escalations.
- Outstanding items (if any) and remediation plan.

The report is submitted to the CISO and [Risk Committee / IT Steering Committee] within [N] business days of certification completion.

### 10.3 Certification Documentation and Retention

All certification records, including the original access listing, individual certifier decisions, change evidence, and completion reports, must be retained for a minimum of **[N] years** in [Document Management System / GRC Platform], in accordance with [Organization Name]'s Records Retention Policy.

---

## 11. Environmental Controls

*Document the environmental controls in place within data centre facilities to protect equipment and personnel. These controls support availability and are subject to the same oversight framework as physical access controls under BNM RMiT Clause 10.28.*

### 11.1 Overview

[Organization Name]'s data centre facilities incorporate multiple layers of environmental controls to maintain optimal operating conditions for technology infrastructure and to detect and mitigate environmental risks, including fire, flooding, power failure, and temperature/humidity excursions.

### 11.2 Temperature and Humidity Controls

| Parameter | Target Range | Critical Threshold | Response Action |
|---|---|---|---|
| Temperature (server inlet) | [e.g., 18°C – 27°C] | Below [N]°C or above [N]°C | Automated alert; DCOPS on-call notified; HVAC fault investigation initiated. |
| Relative Humidity | [e.g., 40% – 60% RH] | Below [N]% or above [N]% | Automated alert; DCOPS on-call notified. |
| Dew Point | [e.g., 5.5°C – 15°C] | Outside range | Automated alert; HVAC system check. |

**HVAC Systems:**

- *Describe the HVAC system configuration — number of units, redundancy (N+1, 2N), capacity, and maintenance schedule.*
- Precision air conditioning units: [N] units, [N+1 / 2N] redundancy configuration.
- Computer Room Air Handlers (CRAHs): [Describe configuration].
- Maintenance schedule: [Frequency] preventive maintenance; [Frequency] full inspection.
- HVAC maintenance is performed by [Vendor Name] under contract [Contract Reference].

### 11.3 Fire Detection and Suppression

| System | Coverage Area | Type | Testing Frequency |
|---|---|---|---|
| Smoke / Aspirating Detection | All zones including sub-floor and above-ceiling plenum | [VESDA / Point-type / Aspirating] | [Quarterly / Semi-Annual] |
| Heat Detection | [Specific areas] | [Rate-of-rise / Fixed-temperature] | [Quarterly] |
| Fire Suppression — Primary | Server floor | [FM-200 / Inergen / NOVEC 1230 / CO₂] | Annual (discharge test per local regulation) |
| Fire Suppression — Pre-action Sprinkler | [Staging / Office areas adjacent to DC] | Pre-action dry pipe sprinkler | Annual |
| Manual Call Points | All zones | Manual break-glass alarm | [Quarterly visual check] |
| Emergency Cut-Off | Data centre floor | [EPO panel location] | Annual test |

**Fire Suppression Activation Protocol:**

1. Automated detection triggers audio/visual alarm throughout the facility.
2. Suppression pre-discharge delay: [N] seconds (allowing personnel to evacuate).
3. Automatic door closure: all fire-rated doors seal automatically.
4. Suppression agent released.
5. Facility management and local fire services notified automatically.
6. Re-entry prohibited until all-clear is confirmed by [Fire Safety Officer / Local Fire Department].

### 11.4 Power and Electrical Systems

| System | Description | Redundancy | Testing |
|---|---|---|---|
| Uninterruptible Power Supply (UPS) | [Manufacturer / Model / Capacity kVA] | [N+1 / 2N] | Monthly battery test; Annual full load test |
| Diesel Generator (DG) | [Manufacturer / Model / Capacity kVA] | [N+1 / 2N] | Monthly [N]-minute run test; Annual full load test |
| Automatic Transfer Switch (ATS) | Transfers load from mains to UPS/DG within [N] ms | Dual ATS | Quarterly |
| Power Distribution Units (PDUs) | [Dual-corded / Single] | [A+B feed] | Quarterly inspection |

### 11.5 Water Leak and Flood Detection

- Under-floor leak detection cables installed beneath the raised floor throughout the server floor.
- [Above-ceiling leak detection installed where applicable — e.g., near HVAC units].
- Water leak alarms integrated with the Data Centre Infrastructure Management (DCIM) system and the BMS (Building Management System).
- Alert notification: on-call DCOPS and Facilities Manager notified automatically.

### 11.6 Physical Security Monitoring Systems

| System | Description | Monitoring | Retention Period |
|---|---|---|---|
| Closed-Circuit Television (CCTV) | IP cameras covering all zones including entry/exit points, server aisles, and perimeter. | 24/7 by [SOC / Security Desk / DCOPS] | Minimum [90 days / as per policy] |
| Access Control System (ACS) | Electronic door locks with card reader and biometric authentication, integrated audit logging. | 24/7 real-time alert on unauthorized access attempt | Minimum [12 months] |
| Intrusion Detection System (IDS) | Motion detection and door/window tamper alerts for all controlled zones. | 24/7 integrated with SOC | Minimum [12 months] |
| DCIM Platform | Real-time monitoring of power, temperature, humidity, and capacity. | 24/7 automated alerting | [N] months |
| BMS | Building-level monitoring of HVAC, fire systems, power, and physical security integration. | 24/7 by Facilities Management | [N] months |

### 11.7 Environmental Control Testing and Review

| Activity | Frequency | Responsible Party | Documentation |
|---|---|---|---|
| HVAC preventive maintenance | [Quarterly] | [Vendor Name] | Maintenance report filed in [System] |
| Fire alarm system testing | [Quarterly] | [Fire Safety Contractor] | Test report; filed in [System] |
| Fire suppression functional test | Annual | [Suppression Contractor] | Test report; BOMBA / local authority notification |
| UPS battery capacity test | [Monthly / Quarterly] | [UPS Vendor / In-house] | Test log |
| Generator load test | Monthly | [Generator Vendor / Facilities] | Test log |
| Full power failover test (UPS + DG) | Annual | Facilities + DCOPS | Test report; approved by Data Centre Manager |
| CCTV system and recording verification | Monthly | SOC / Security | Verification log |
| ACS system integrity check | Quarterly | IAM Team | Integrity report |

---

## 12. Visitor and Third-Party Access

*Detail the specific requirements and controls governing non-employee access, including vendors, contractors, regulators, and auditors.*

### 12.1 Visitor Categories and Access Levels

| Visitor Category | Examples | Maximum Zone Access | Escort Required | Advance Notice |
|---|---|---|---|---|
| Vendor / Contractor (maintenance) | HVAC technician, cabling, UPS maintenance | Zone 3 (limited) | Yes — at all times | Minimum [48] hours |
| Vendor / Contractor (IT) | Hardware replacement, rack installation | Zone 3 | Yes — at all times | Minimum [24] hours |
| Internal Auditor | Internal Audit function | All zones (audit purpose) | Required for Zone 4 | [N] business days |
| External Auditor | External audit firm | Zones 1–3 | Yes — at all times | Minimum [5] business days |
| Regulator / Examiner | BNM, NACSA examiner | As required by examination scope | Yes — at all times | As directed by regulator |
| Vendor Senior Management / Executive | Sales, relationship management | Zone 1–2 only | Yes — at all times | Minimum [24] hours |

### 12.2 Third-Party Access Requirements

Before any third-party is granted access, the following must be confirmed:

- [ ] Non-Disclosure Agreement (NDA) signed and on file.
- [ ] Vendor security assessment completed (for recurring access vendors, per [Vendor Management Policy]).
- [ ] Specific access purpose documented.
- [ ] Identity verified with government-issued photo ID on site.
- [ ] Visitor Log signed on entry and exit.
- [ ] Tools and equipment brought on-site are declared and logged (reference Appendix D — Equipment Bring-In / Take-Out Log).
- [ ] Escort assigned from within [Organization Name]; escort must remain with the visitor throughout the visit.

### 12.3 Equipment Bring-In and Take-Out Controls

- All equipment (laptops, tools, storage media, test equipment) brought into or removed from the data centre must be declared to the security desk and logged in the Equipment Register (Appendix D).
- Portable storage media (USB drives, external hard disks) are prohibited without explicit written approval from the Data Centre Manager and CISO.
- Cameras (including mobile phone cameras) are prohibited within Zone 3 and Zone 4 unless explicitly authorized in writing for a specific purpose.

---

## 13. Security Incidents and Exceptions

*Define how to identify, report, and respond to physical access security incidents and how to manage legitimate exceptions to this procedure.*

### 13.1 Physical Access Security Incident Types

| Incident Type | Description | Immediate Action | Escalation |
|---|---|---|---|
| Tailgating / Piggybacking | Unauthorized individual follows authorized person into controlled zone. | Escort individual out; challenge identity; alert SOC/Security. | Data Centre Manager; IAM Manager; CISO if Zone 4. |
| Unauthorized access attempt | Failed ACS authentication attempt; alarm triggered. | SOC investigates; review CCTV; verify whether authorized individual. | Data Centre Manager; CISO if Zone 4 or repeated attempts. |
| Lost / stolen access card | Employee or visitor reports access card missing. | Immediately deactivate card in ACS; issue replacement after identity verification. | IAM Manager; CISO if Zone 4 cardholder. |
| Unescorted visitor | Visitor found without escort within controlled zone. | Escort visitor out immediately; identify escort responsible; incident report. | Data Centre Manager; Line Manager of escort. |
| Forced entry / physical breach | Evidence of forced entry or tampering with access control points. | Alert Security and SOC immediately; preserve CCTV evidence; secure affected zone; notify police if required. | CISO; Data Centre Manager; Risk Management; Legal. |
| Visitor badge not returned | Visitor leaves without returning temporary badge. | Immediately deactivate badge; notify Data Centre Manager; log incident. | IAM Manager. |
| Environmental system failure | HVAC, power, fire suppression, or detection system failure. | Activate relevant contingency procedure; notify Facilities and DCOPS. | Data Centre Manager; BCP/DR team if service impact. |

### 13.2 Emergency Access (Unplanned)

In genuine emergency situations where a critical system requires immediate physical intervention by an individual who does not hold standing access rights:

1. Emergency access may be authorized by the Data Centre Manager or CISO verbally.
2. Emergency access must be logged immediately in the Emergency Access Log (Appendix E).
3. A formal exception report must be completed within **[N] business days** documenting the emergency, the access granted, actions taken, and whether any data or systems were affected.
4. All emergency access events are reviewed by the IAM Manager at the next scheduled access certification.

### 13.3 Procedure Exceptions

Requests for exceptions to any requirement in this procedure must be:

- Submitted in writing to the IAM Manager via [ITSM / Exception Management Process].
- Approved by the CISO and Data Centre Manager.
- Documented with a clear business justification, risk assessment, compensating controls, and time-bound validity.
- Reviewed at the next scheduled access certification.

All active exceptions are maintained in the Exceptions Register (Appendix F) and reported to [Risk Committee / IT Steering Committee] at each [quarterly] meeting.

---

## 14. Monitoring, Logging, and Audit

*Specify the ongoing monitoring activities, log review requirements, and audit obligations associated with physical data centre access.*

### 14.1 Access Log Review

| Log Type | Review Frequency | Reviewed By | Action on Anomaly |
|---|---|---|---|
| ACS entry/exit logs (all zones) | Daily | Data Centre Operations | Investigate and escalate any anomalous entries. |
| Zone 4 ACS logs | Daily | Data Centre Manager | Immediate investigation of any unexpected access. |
| After-hours access logs | Next business day | Data Centre Manager | Confirm legitimacy; follow up with on-call manager. |
| Failed access attempt logs | Daily | SOC | Investigate repeated failures; escalate to CISO if pattern detected. |
| Visitor log completeness | Daily | Data Centre Operations | Ensure all entries have departure times and badge collected. |
| CCTV recording integrity | Monthly | SOC | Confirm all cameras operational and recordings retained. |

### 14.2 Audit Activities

| Audit Activity | Frequency | Conducted By | Output |
|---|---|---|---|
| Physical Access Register reconciliation (ACS vs register) | Quarterly | IAM Team | Reconciliation report; discrepancies remediated within [N] days. |
| Visitor log completeness audit | Quarterly | Data Centre Manager | Audit finding report. |
| SoD conflict check | Quarterly | IAM Team | SoD review report; exceptions reported to CISO. |
| Environmental system compliance verification | Annual | Facilities + DCOPS | Compliance checklist; gaps reported to Data Centre Manager. |
| Full physical security assessment | Annual | Internal Audit (or appointed third party) | Formal audit report; findings tracked in issue register. |
| BNM RMiT compliance review | Annual (or upon regulatory request) | Compliance / Internal Audit | Compliance attestation; gaps escalated to CISO and Board-level committee. |

### 14.3 Key Performance Indicators (KPIs)

*Track the following metrics to measure the effectiveness of the physical access control programme.*

| KPI | Target | Measurement Source | Reporting Frequency |
|---|---|---|---|
| Access provisioning SLA compliance | ≥ 95% of requests provisioned within SLA | ITSM reports | Monthly |
| Access deprovisioning SLA compliance | 100% of terminations deprovisioned within SLA | HR / IAM reconciliation | Monthly |
| Periodic access certification completion rate | 100% within scheduled window | IAM certification reports | Per certification cycle |
| Physical security incidents — tailgating | 0 confirmed incidents per quarter | Incident register | Quarterly |
| Open SoD exceptions > [N] days | 0 | Exceptions register | Quarterly |
| Visitor log completeness | 100% | DC Ops log review | Monthly |
| ACS log review completion | 100% | DC Ops daily checklist | Monthly |

---

## 15. Review and Approval

### 15.1 Document Review

This procedure is reviewed:

- **Annually**, in line with [Organization Name]'s policy review cycle.
- **Upon significant change** to the data centre facility, access control technology, organizational structure, or applicable regulatory requirements.
- **Following a material physical security incident** at any [Organization Name] data centre facility.

### 15.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], IAM Manager | Initial version. |
| [1.1] | [Date] | [Author Name] | [Description of changes, e.g., "Updated Zone 4 approval requirements; added Section 13.3 Exceptions."] |
| [2.0] | [Date] | [Author Name] | [Description of major revision.] |

### 15.3 Approval Sign-Off

*All listed approvers must sign this document before it is considered approved and effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager (Owner) | [Name] | __________________ | [Date] |
| Data Centre Manager | [Name] | __________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [Date] |
| Chief Information Officer (CIO) / Head of IT | [Name] | __________________ | [Date] |
| Chief Risk Officer (CRO) | [Name] | __________________ | [Date] |
| Head of Compliance | [Name] | __________________ | [Date] |

---

## 16. References

*List all regulatory instruments, standards, and internal documents referenced or applicable to this procedure.*

### 16.1 Regulatory References

| Reference | Issuing Authority | Relevant Clause(s) | Description |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | **Clause 10.28** | Physical security controls for technology infrastructure: access control, environmental protection, and monitoring of data centre and computer room facilities. |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clauses 10.1–10.27 | General technology risk management obligations, governance, and oversight. |
| Personal Data Protection Act 2010 (PDPA) | Malaysian Parliament | Part II, Section 5 (Security Principle) | Obligation to protect personal data against unauthorized or unlawful access, processing, loss, destruction, or damage. |
| Financial Services Act 2013 (FSA) | Malaysian Parliament | Section 47, 57 | General obligations on licensed financial institutions for risk management and regulatory compliance. |
| Islamic Financial Services Act 2013 (IFSA) | Malaysian Parliament | Section 57 | Equivalent obligations for Islamic financial institutions. |
| Guidelines on Management of Cyber Risk | BNM | Applicable sections | Cyber risk management obligations inclusive of physical security controls. |
| National Cyber Security Agency (NACSA) Guidelines | NACSA | [Applicable sections] | National cybersecurity baseline requirements applicable to critical information infrastructure. |

### 16.2 Standards References

| Standard | Version | Relevant Section(s) | Description |
|---|---|---|---|
| ISO/IEC 27001 | 2022 | Annex A, Controls 7.1–7.14 | Physical and environmental security controls. |
| ISO/IEC 27002 | 2022 | Clauses 7.2, 7.3, 7.4, 7.5 | Physical entry controls, securing offices and facilities, physical security monitoring, working in secure areas. |
| NIST SP 800-53 Rev 5 | 2020 | PE Family (Physical and Environmental Protection) | Comprehensive physical and environmental protection controls. |
| PCI DSS | v4.0 | Requirement 9 | Restrict and monitor physical access to cardholder data environment components. |
| Uptime Institute | Tier Standard | Applicable to facility tier classification | Data centre site infrastructure tier classification. |

### 16.3 Internal Document References

| Document Title | Document ID | Version |
|---|---|---|
| Information Security Policy | [Doc ID] | [Version] |
| Physical Security Policy | [Doc ID] | [Version] |
| Identity and Access Management Policy | [Doc ID] | [Version] |
| Vendor and Third-Party Management Policy | [Doc ID] | [Version] |
| Incident Response Procedure | [Doc ID] | [Version] |
| Business Continuity Plan | [Doc ID] | [Version] |
| Disaster Recovery Plan | [Doc ID] | [Version] |
| Asset Management Policy | [Doc ID] | [Version] |
| Records Retention Policy | [Doc ID] | [Version] |

---

## 17. Appendices

### Appendix A — Physical Access Request Form

*This form must be completed by the requestor or their Line Manager and submitted via [ITSM Tool / Portal] to initiate the access provisioning process.*

---

**PHYSICAL ACCESS REQUEST FORM**

| Field | Details |
|---|---|
| **Request Date** | [DD/MM/YYYY] |
| **ITSM Ticket Reference** | [Ticket Number] |
| **Requestor Full Name** | [Full Name] |
| **Employee / Vendor ID** | [ID Number] |
| **Department / Organization** | [Department Name / Company Name] |
| **Job Title / Role** | [Job Title] |
| **Line Manager Name** | [Manager Name] |
| **Line Manager Email** | [Email Address] |
| **Employment Type** | ☐ Permanent Employee ☐ Contractor ☐ Vendor ☐ Other: ________ |
| **Contract / Engagement End Date** (if applicable) | [DD/MM/YYYY] |
| **Access Required (Zone)** | ☐ Zone 2 ☐ Zone 3 ☐ Zone 4 ☐ Zone 5 |
| **Access Type** | ☐ Permanent ☐ Fixed-Term ☐ One-Time Visit |
| **Access Start Date** | [DD/MM/YYYY] |
| **Access End Date** (if applicable) | [DD/MM/YYYY] |
| **Specific Business Justification** | [Detailed explanation of why access is required] |
| **Specific Systems / Cabinets / Areas** (if Zone 4) | [List specific systems or cages requiring access] |
| **Mandatory Training Completed?** | ☐ Yes — Completion Date: [DD/MM/YYYY] ☐ No — Expected Completion Date: [DD/MM/YYYY] |
| **Requestor Signature** | __________________ Date: _________ |
| **Line Manager Approval** | __________________ Date: _________ |
| **Data Centre Manager Approval** | __________________ Date: _________ |
| **CISO Approval (Zone 4 only)** | __________________ Date: _________ |
| **IAM Team — Eligibility Verified** | __________________ Date: _________ |
| **IAM Team — Access Programmed** | __________________ Date: _________ |

---

### Appendix B — Physical Access Register

*The IAM Team maintains this register as the authoritative record of all active physical access rights. It must be updated within [N] business day(s) of any provisioning or deprovisioning event.*

| Employee / Vendor ID | Full Name | Department / Company | Zone(s) Authorized | Access Type | Grant Date | Expiry Date | Last Certified | Certifier | Status |
|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Name] | [Dept] | [Zone 2, 3] | Permanent | [Date] | N/A | [Date] | [Certifier] | Active |
| [ID] | [Name] | [Dept] | [Zone 3] | Fixed-Term | [Date] | [Date] | [Date] | [Certifier] | Active |
| [ID] | [Name] | [Company] | [Zone 3] | Fixed-Term | [Date] | [Date] | [Date] | [Certifier] | Revoked — [Date] |

---

### Appendix C — Data Centre Visitor Log

*This log must be maintained at the data centre security desk and completed for every visitor without standing access rights. The log is reviewed daily by Data Centre Operations.*

| Date | Visitor Name | Organization | Purpose of Visit | Host / Escort Name | Time In | Time Out | Badge Number | ID Type Verified | Visitor Signature | Security Sign-Off |
|---|---|---|---|---|---|---|---|---|---|---|
| [Date] | [Name] | [Company] | [Purpose] | [Host] | [HH:MM] | [HH:MM] | [Badge #] | [Passport / NRIC] | ________ | ________ |

---

### Appendix D — Equipment Bring-In / Take-Out Log

*All equipment brought into or removed from the data centre must be declared and logged. Spot checks may be conducted by security staff.*

| Date | Individual Name | Company | Equipment Description | Serial Number | Direction (In / Out) | Authorized By | Time | Security Sign-Off |
|---|---|---|---|---|---|---|---|---|
| [Date] | [Name] | [Company] | [Description] | [Serial No.] | In / Out | [Name] | [HH:MM] | ________ |

---

### Appendix E — Emergency Access Log

*Completed for every unplanned emergency access event. Must be submitted to the IAM Manager within [N] business days.*

| Field | Details |
|---|---|
| **Date and Time of Access** | [DD/MM/YYYY HH:MM] |
| **Individual Name and ID** | [Name / ID] |
| **Zones Accessed** | [Zone(s)] |
| **Business Justification / Emergency Description** | [Description] |
| **Authorized By** | [Authorizing Manager Name and Role] |
| **Method of Authorization** | ☐ Phone ☐ Email ☐ In Person |
| **Actions Performed During Visit** | [Description of work performed] |
| **Systems or Data Affected** | [Yes / No — if Yes, describe] |
| **Duration of Access** | [HH:MM to HH:MM] |
| **CCTV Confirmed** | ☐ Yes ☐ No |
| **Completed By** | [IAM / DC Ops Staff Name] |
| **Date Submitted** | [DD/MM/YYYY] |
| **IAM Manager Review** | __________________ Date: _________ |

---

### Appendix F — Exceptions Register

*Maintained by the IAM Manager. All active exceptions to this procedure are tracked here and reported to the Risk Committee quarterly.*

| Exception ID | Date Raised | Description of Exception | Business Justification | Risk Assessment | Compensating Controls | Approved By | Valid Until | Status | Next Review Date |
|---|---|---|---|---|---|---|---|---|---|
| EX-[YYYY]-001 | [Date] | [Description] | [Justification] | [High / Medium / Low] | [Controls] | [Approver] | [Date] | Open / Closed | [Date] |

---

### Appendix G — Data Centre Zone Map

*Insert a floor plan or zone diagram of the data centre facility clearly showing the boundaries of each access control zone (Zone 0 through Zone 5), access control point locations, CCTV camera positions, and emergency exit routes.*

> [Insert floor plan diagram here — labeled with zone boundaries, ACS reader locations, camera positions, man-trap/airlock locations, and emergency exits.]

---

### Appendix H — Mandatory Training Requirements

*List the training courses that must be completed before an individual is eligible for physical data centre access.*

| Training Course | Delivery Method | Validity Period | Platform / Provider |
|---|---|---|---|
| Data Centre Physical Security Awareness | [eLearning / Instructor-led] | [12 months] | [Platform Name] |
| Health, Safety, and Emergency Evacuation — Data Centre | [eLearning / In-person] | [12 months] | [Platform Name / HR] |
| [Information Classification and Handling] | [eLearning] | [12 months] | [Platform Name] |
| [Any role-specific training for Zone 4 access] | [Instructor-led] | [12 months] | [Platform Name] |

---

### Appendix I — Access Certification Checklist

*Used by certifiers during the periodic access certification process (Section 10) to document their decisions.*

**Certification Period:** [Period, e.g., Q1 2025 Annual Review]
**Certifier Name and Role:** [Name / Role]
**Date Completed:** [DD/MM/YYYY]

| Employee / Vendor ID | Full Name | Zone(s) | Grant Date | Decision | Justification / Notes | Certifier Initials |
|---|---|---|---|---|---|---|
| [ID] | [Name] | [Zone 2, 3] | [Date] | ☐ Certify ☐ Modify ☐ Revoke | [Notes] | ________ |
| [ID] | [Name] | [Zone 3] | [Date] | ☐ Certify ☐ Modify ☐ Revoke | [Notes] | ________ |

**Certifier Declaration:**

> I confirm that I have reviewed each access right listed above and that my decisions accurately reflect the current business need and principle of least privilege.

**Signature:** __________________ **Date:** __________

---

*End of Document*

---

**Document Control:** This document is subject to [Organization Name]'s document management and version control policy. The master copy is maintained in [Document Management System]. Printed copies are uncontrolled. Verify currency against the master copy before use.