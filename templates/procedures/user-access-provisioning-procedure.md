# User Access Provisioning Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual or upon significant change] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of [Organization Name]'s information security policy and applicable Malaysian law, including the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy References](#3-regulatory-and-policy-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Guiding Principles](#5-guiding-principles)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Access Provisioning Process](#7-access-provisioning-process)
   - 7.1 [New User Access Provisioning](#71-new-user-access-provisioning)
   - 7.2 [Access Modification](#72-access-modification)
   - 7.3 [Access Revocation and Offboarding](#73-access-revocation-and-offboarding)
   - 7.4 [Privileged and Administrative Access](#74-privileged-and-administrative-access)
   - 7.5 [Third-Party and Vendor Access](#75-third-party-and-vendor-access)
   - 7.6 [Emergency and Temporary Access](#76-emergency-and-temporary-access)
8. [Access Review and Certification](#8-access-review-and-certification)
9. [Tools and Systems Used](#9-tools-and-systems-used)
10. [Escalation Procedures](#10-escalation-procedures)
11. [Exceptions and Non-Compliance](#11-exceptions-and-non-compliance)
12. [Monitoring, Audit, and Reporting](#12-monitoring-audit-and-reporting)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*This section states the purpose of the procedure and what problem it addresses. Keep this concise — two to four sentences.*

This procedure establishes a standardised, controlled, and auditable process for the granting, modification, and revocation of logical user access rights within [Organization Name]'s technology environment. It is designed to ensure that access to information systems, applications, and data is aligned with each user's job function and granted on the basis of least privilege and need-to-know.

This procedure supports [Organization Name]'s obligations under Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, particularly the requirements governing access management controls as specified under **Clause 10.53**, and reinforces the organisation's commitment to protecting the confidentiality, integrity, and availability of customer and institutional data.

---

## 2. Scope and Applicability

*Define who and what this procedure applies to. Be explicit about inclusions and any deliberate exclusions. Reference all relevant systems, user categories, and organisational units.*

### 2.1 Applicability

This procedure applies to:

- **All personnel** of [Organization Name], including permanent employees, contract staff, interns, and seconded staff.
- **Third-party vendors, service providers, and consultants** who require access to [Organization Name]'s systems to fulfil contractual obligations.
- **All information systems, applications, databases, network infrastructure, and cloud environments** owned, operated, or managed by [Organization Name], regardless of whether hosted on-premises or in a third-party or cloud environment.
- **All user account types**, including standard user accounts, service accounts, privileged accounts, and administrative accounts.

### 2.2 Exclusions

The following are explicitly excluded from this procedure:

| Exclusion | Governing Document |
|---|---|
| Physical access to premises and data centres | [Physical Access Control Policy — Document ID] |
| Customer-facing digital banking access provisioning | [Customer Onboarding and Digital Access Procedure — Document ID] |
| Emergency break-glass access (beyond initial trigger) | [Incident Response Procedure — Document ID] |
| [Any other exclusion] | [Reference Document] |

### 2.3 Organisational Units Covered

*List all business units, departments, and subsidiaries to which this procedure applies. Amend as required.*

| Business Unit / Department | Included (Y/N) | Notes |
|---|---|---|
| [Department / Business Unit 1] | Y | |
| [Department / Business Unit 2] | Y | |
| [Subsidiary / Entity Name] | Y/N | [Note if covered by a separate but aligned procedure] |
| [Technology & Operations] | Y | |
| [Information Security] | Y | |
| [Human Resources] | Y | Triggers provisioning and revocation events |
| [Audit & Compliance] | Y | Oversight and review role |

---

## 3. Regulatory and Policy References

*List all regulatory instruments, internal policies, and standards that this procedure implements or is derived from. This section is critical for audit purposes.*

### 3.1 Regulatory Framework

| Reference | Description | Applicable Clause(s) |
|---|---|---|
| BNM RMiT Policy Document | Bank Negara Malaysia Risk Management in Technology | **Clause 10.53** (User Access Management) |
| BNM RMiT Policy Document | Bank Negara Malaysia Risk Management in Technology | Clause 10.50–10.58 (Access Control) |
| Personal Data Protection Act 2010 (PDPA) | Malaysian data protection legislation | Principle 4 (Security), Principle 7 (Access) |
| BNM Guidelines on Management of Customer Information and Permitted Disclosures | Customer data handling requirements | [Relevant Sections] |
| [Other applicable BNM Guideline] | [Description] | [Clause] |

### 3.2 Internal Policy References

| Document Title | Document ID | Version |
|---|---|---|
| Information Security Policy | [Document ID] | [Version] |
| Identity and Access Management Policy | [Document ID] | [Version] |
| Human Resources Onboarding and Offboarding Policy | [Document ID] | [Version] |
| Privileged Access Management Policy | [Document ID] | [Version] |
| Vendor and Third-Party Management Policy | [Document ID] | [Version] |
| Data Classification Policy | [Document ID] | [Version] |
| [Other Internal Policy] | [Document ID] | [Version] |

### 3.3 Standards and Frameworks

| Standard | Relevance |
|---|---|
| ISO/IEC 27001:2022 — Annex A 5.18 (Access Rights) | Aligns access management controls to international standard |
| NIST SP 800-53 Rev 5 — AC Family (Access Control) | Supporting technical control guidance |
| CIS Controls v8 — Control 5 (Account Management) | Implementation benchmarking |

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent understanding across all personnel.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **User Access** | The ability of an individual or system to read, write, modify, execute, or delete information or system resources. |
| **Provisioning** | The process of creating or granting a user account and associated access rights. |
| **De-provisioning / Revocation** | The process of removing or disabling a user account and its associated access rights. |
| **Least Privilege** | The principle that users are granted only the minimum access rights necessary to perform their authorised job functions. |
| **Need-to-Know** | A principle limiting access to information to only those individuals who require it to perform a specific task. |
| **Privileged Access** | Elevated access rights that allow a user to perform administrative, configuration, or system-level operations. |
| **Service Account** | A non-personal account used by an application, system, or automated process to interact with other systems. |
| **Role-Based Access Control (RBAC)** | An access control model where permissions are assigned to roles, and users are assigned to appropriate roles. |
| **Access Owner** | The individual (typically a department or system owner) accountable for authorising and reviewing access to a system or dataset. |
| **Joiner-Mover-Leaver (JML)** | A framework for managing the lifecycle of user access covering onboarding (Joiner), role change (Mover), and departure (Leaver). |
| **RACI** | A responsibility assignment matrix defining those who are Responsible, Accountable, Consulted, and Informed. |
| **IAM** | Identity and Access Management. |
| **MFA** | Multi-Factor Authentication. |
| **PAM** | Privileged Access Management. |
| **AD** | Active Directory. |
| **ITSM** | IT Service Management (e.g., ticketing system). |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| HR | Human Resources |
| IT | Information Technology |
| IS | Information Security |
| CISO | Chief Information Security Officer |
| HOD | Head of Department |
| IAM | Identity and Access Management |
| MFA | Multi-Factor Authentication |
| PAM | Privileged Access Management |
| UAR | User Access Review |
| SLA | Service Level Agreement |
| SOP | Standard Operating Procedure |

---

## 5. Guiding Principles

*This section articulates the foundational principles that govern all access decisions. These principles align with BNM RMiT Clause 10.53 requirements.*

All user access provisioning, modification, and revocation activities at [Organization Name] shall be governed by the following principles:

1. **Least Privilege:** Access rights shall be the minimum necessary for a user to perform their designated job function. No user shall be granted access exceeding their operational need.

2. **Need-to-Know:** Access to sensitive or classified data shall be restricted to individuals who demonstrably require it to execute a specific, authorised task.

3. **Segregation of Duties (SoD):** Where operationally feasible, conflicting functions and responsibilities shall be segregated to prevent a single individual from executing fraudulent or erroneous actions without detection.

4. **Explicit Authorisation:** All access rights must be explicitly authorised by an appropriate access owner or line manager prior to provisioning. No access shall be granted on implied or assumed authorisation.

5. **Accountability:** All user accounts shall be uniquely identifiable and attributed to a named individual or, in the case of service accounts, a designated custodian. Shared accounts are prohibited except where operationally unavoidable and specifically approved.

6. **Timely Revocation:** Access rights shall be revoked promptly upon departure, role change, or any other event that renders access no longer necessary.

7. **Auditability:** All provisioning, modification, and revocation actions shall be logged, traceable, and available for audit review.

8. **Default Deny:** In the absence of explicit authorisation, access shall not be granted. The default posture is denial.

---

## 6. Roles and Responsibilities

*This section defines who is responsible for each activity within this procedure. The RACI matrix provides a quick-reference view. Ensure all named roles exist within your organisational structure.*

### 6.1 Role Descriptions

| Role | Description |
|---|---|
| **Requesting Manager / Line Manager** | The direct manager or HOD of the user requiring access. Initiates and formally authorises access requests. Accountable for the appropriateness of access requested. |
| **Human Resources (HR)** | Triggers Joiner, Mover, and Leaver events. Communicates employment changes to IT/IAM team in a timely manner. |
| **IT Service Desk / IAM Team** | Processes access requests, provisions accounts, and implements approved changes in the relevant systems. |
| **Information Security (IS) Team** | Reviews requests for privileged, sensitive, or cross-system access. Conducts periodic user access reviews and monitors for anomalies. |
| **System / Application Owner** | Accountable for the data and system under their ownership. Provides or delegates authorisation for access to their systems. |
| **Access Owner** | Individual designated by the System Owner to review and approve access requests for a specific system or dataset. May be the same as the System Owner. |
| **CISO / IT Risk Manager** | Provides oversight of access management controls. Approves exceptions and escalated access requests. |
| **Internal Audit** | Independently reviews compliance with this procedure. Has no provisioning role. |
| **Third-Party / Vendor Representative** | Submits access requests through the sponsoring internal manager. Subject to all applicable controls in this procedure. |

### 6.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Requesting Manager | HR | IT/IAM Team | IS Team | System/Access Owner | CISO | Internal Audit |
|---|---|---|---|---|---|---|---|
| Initiate new user access request | R | I | I | — | C | — | — |
| Formally authorise access request | A | — | — | C | R | — | — |
| Receive Joiner/Leaver notification | I | R | A | I | I | I | — |
| Validate request completeness | — | — | R | C | — | — | — |
| Provision standard user account | — | — | R/A | I | I | — | — |
| Approve privileged access request | C | — | — | R | C | A | — |
| Provision privileged account | — | — | R | A | I | I | — |
| Approve third-party access | R/A | — | — | C | C | C | — |
| Provision third-party access | — | — | R | I | I | — | — |
| Modify user access on role change | R | R (notify) | R | C | I | — | — |
| Revoke access on offboarding | I | R (notify) | R/A | I | I | — | — |
| Disable accounts upon termination | — | R (notify) | R/A | I | — | — | — |
| Conduct periodic access review | C | — | C | R | A | I | I |
| Manage exception requests | R | — | I | C | C | A | I |
| Audit compliance with procedure | — | — | — | — | — | I | R/A |
| Report on access metrics | — | — | R | A | — | I | I |

---

## 7. Access Provisioning Process

*This section contains the core procedural content. Each subsection covers a distinct phase of the user access lifecycle. Process flows should be read in conjunction with the supporting flowcharts in Appendix A.*

### 7.1 New User Access Provisioning

*This subsection covers the end-to-end process for provisioning access for new joiners, whether they are employees, contractors, or interns. Detail the sequential steps, required forms, and approval gates.*

#### 7.1.1 Pre-Provisioning Requirements

Before any access is provisioned, the following conditions must be satisfied:

- [ ] A formal employment contract, vendor agreement, or engagement letter has been executed.
- [ ] HR has recorded the user's employment details in the HR Information System (HRIS).
- [ ] The requesting manager has completed the **User Access Request Form** (Appendix B).
- [ ] The user's role profile and required access levels have been determined in accordance with the approved role access matrix (Appendix C).
- [ ] Background screening (where applicable per HR policy) has been satisfactorily completed.

#### 7.1.2 Provisioning Process Steps

| Step | Activity | Responsible Party | Completion Timeframe | Supporting Document |
|---|---|---|---|---|
| 1 | HR notifies IT/IAM team of new joiner (name, start date, role, department) | HR | At least [X] business days before start date | HR Onboarding Notification |
| 2 | Requesting manager submits User Access Request Form, specifying systems and access levels required | Requesting Manager | At least [X] business days before start date | User Access Request Form (Appendix B) |
| 3 | IT/IAM team validates the request for completeness and consistency with role access matrix | IT/IAM Team | Within [1] business day of receipt | Role Access Matrix (Appendix C) |
| 4 | Access Owner reviews and formally approves the access request | Access Owner | Within [2] business days of receipt | Approval recorded in ITSM system |
| 5 | IS team reviews any requests involving elevated, sensitive, or cross-system access | IS Team | Within [2] business days of referral | IS Review Checklist |
| 6 | IT/IAM team creates user account and provisions approved access rights | IT/IAM Team | [1] business day after final approval | ITSM ticket / IAM system log |
| 7 | MFA and initial credentials are securely communicated to the user via [defined channel] | IT/IAM Team | Upon account creation | [Channel — e.g., encrypted email, in-person] |
| 8 | Requesting manager confirms user access is functioning as required | Requesting Manager | On user's first working day | Confirmation logged in ITSM |
| 9 | Provisioning event is logged and closed in the ITSM system | IT/IAM Team | Within [1] business day of confirmation | ITSM ticket closure |

#### 7.1.3 Naming Conventions and Account Standards

- **Username format:** [Define standard — e.g., firstname.lastname@[organization].com.my]
- **Password policy:** Minimum [X] characters, complexity requirements as per [Password Policy — Document ID].
- **MFA:** Mandatory for all user accounts accessing [specify systems/environments — e.g., all systems, remote access, privileged access].
- **Account expiry:** Contractor and vendor accounts shall have a defined expiry date aligned to the contract end date, not to exceed [X] months without review.

---

### 7.2 Access Modification

*This subsection covers the process for modifying access when a user changes roles, moves departments, takes on additional responsibilities, or when access rights require adjustment.*

#### 7.2.1 Triggers for Access Modification

Access modification shall be initiated in the following circumstances:

- **Internal transfer or promotion:** User moves to a new role or department.
- **Change in job responsibilities:** User's duties expand or contract such that existing access is no longer appropriate.
- **Project-based access:** Temporary access granted for the duration of a specific project or engagement.
- **System or application changes:** A change to the system landscape requires re-alignment of access rights.
- **Access review finding:** A periodic review identifies that access rights require adjustment.

#### 7.2.2 Mover Process Steps

| Step | Activity | Responsible Party | Completion Timeframe |
|---|---|---|---|
| 1 | HR or receiving manager notifies IT/IAM of role change, effective date, and new role details | HR / Receiving Manager | At least [X] business days before effective date |
| 2 | Requesting manager for new role submits Access Modification Request Form | New Manager | At least [X] business days before effective date |
| 3 | IT/IAM team assesses current access against new role requirements; identifies access to be added and removed | IT/IAM Team | Within [2] business days of notification |
| 4 | Access Owner(s) for affected systems approve modifications | Access Owner | Within [2] business days of referral |
| 5 | IT/IAM team implements approved modifications — grants new access and revokes access no longer required | IT/IAM Team | By effective date of role change |
| 6 | Requesting manager confirms access is appropriate for new role | New Manager | Within [X] business days of effective date |
| 7 | Modification event is logged and closed in ITSM | IT/IAM Team | Within [1] business day of confirmation |

> **Note — Preventing Privilege Accumulation:** When a user moves roles, prior access rights that are no longer required for the new role **must be revoked** at the time of modification. Accumulation of access rights across roles (also known as privilege creep) is prohibited.

---

### 7.3 Access Revocation and Offboarding

*This subsection is critical. Timely revocation of access upon departure or termination is a key control under BNM RMiT. Define both the voluntary departure and involuntary termination processes separately.*

#### 7.3.1 Triggers for Access Revocation

| Trigger | Urgency Level | Target Revocation Timeframe |
|---|---|---|
| Resignation (standard notice period served) | Standard | On or before last working day |
| Retirement | Standard | On or before last working day |
| End of contract or fixed-term engagement | Standard | On contract end date |
| Involuntary termination / immediate dismissal | **Critical** | **Within [2] hours of decision** |
| Mutual agreement / gardening leave | Standard | As directed by HR, no later than last day of active service |
| Long-term leave (e.g., >30 days unpaid leave) | Elevated | Account suspended for duration of leave |
| Vendor/contractor engagement ended | Standard | On last day of engagement |
| Security incident or investigation | **Critical** | **Immediately upon instruction from IS/CISO** |

#### 7.3.2 Leaver Process Steps — Standard Departure

| Step | Activity | Responsible Party | Completion Timeframe |
|---|---|---|---|
| 1 | HR notifies IT/IAM and relevant managers of user's departure and last working day | HR | Upon resignation acceptance or [X] business days before departure |
| 2 | Requesting manager ensures any active sessions, shared credentials, or business-critical handovers are completed | Requesting Manager | Prior to last working day |
| 3 | IT/IAM team disables the user account on the last working day (or as directed by HR) | IT/IAM Team | End of business on last working day |
| 4 | IT/IAM team revokes all access rights across all systems, applications, VPN, and remote access | IT/IAM Team | Within [1] business day of account disable |
| 5 | IT/IAM team removes or reassigns any group memberships, shared mailboxes, or distribution lists | IT/IAM Team | Within [2] business days |
| 6 | User account is archived and retained for [X months/years] in accordance with the Data Retention Policy before deletion | IT/IAM Team | Per retention schedule |
| 7 | Revocation event is logged in ITSM and access audit log | IT/IAM Team | Within [1] business day of completion |
| 8 | IS team validates revocation completeness for accounts with privileged or sensitive access | IS Team | Within [2] business days of revocation |

#### 7.3.3 Immediate Revocation Process — Involuntary Termination

> **CRITICAL:** The following process applies in cases of immediate termination, gross misconduct, fraud suspicion, or any security incident requiring urgent access removal.

1. HR or authorised senior management notifies the **IT/IAM team and CISO simultaneously** of the revocation requirement and the reason.
2. IT/IAM team **immediately disables** the user's primary account (Active Directory, email, VPN) within **[2] hours** of notification.
3. The IS team is notified to **monitor for any anomalous post-revocation access attempts**.
4. IT/IAM team systematically revokes all remaining application and system access within **[4] business hours**.
5. Physical access cards and tokens are deactivated by [Physical Security / Facilities] simultaneously.
6. The requesting manager or HR collects all organisational assets (laptop, tokens, mobile devices) from the user on the day of termination.
7. All actions are logged in the ITSM system with timestamps, including the identity of the person who initiated the revocation.

---

### 7.4 Privileged and Administrative Access

*Privileged access carries elevated risk and requires additional controls beyond standard access provisioning. This subsection sets out the enhanced requirements for privileged accounts, aligned with BNM RMiT Clause 10.53.*

#### 7.4.1 Definition of Privileged Access

Privileged access includes, but is not limited to:

- System administrator or root accounts on servers and operating systems.
- Database administrator (DBA) accounts.
- Network infrastructure administrator accounts (firewalls, routers, switches).
- Cloud platform administrative accounts (e.g., AWS IAM admin, Azure Global Admin).
- Application super-user or configuration-level accounts.
- Security tool administration accounts (e.g., SIEM, vulnerability scanner, PAM platform).
- Domain Administrator accounts in Active Directory.

#### 7.4.2 Privileged Access Controls

| Control | Requirement |
|---|---|
| **Separate account** | Privileged accounts must be separate from the user's standard day-to-day account. |
| **Approval authority** | All privileged access must be approved by the CISO or designated IS Manager in addition to the line manager. |
| **MFA** | MFA is **mandatory** for all privileged account access without exception. |
| **Just-In-Time (JIT) Access** | Where technically feasible, privileged access should be granted on a time-limited, just-in-time basis using the PAM platform. |
| **Session recording** | All privileged sessions must be recorded and retained for a minimum of [X months] via the PAM platform. |
| **No shared credentials** | Shared privileged accounts are prohibited. Each privileged user must have a uniquely attributed account. |
| **Regular review** | Privileged access rights must be reviewed [quarterly / as per access review schedule]. |
| **Break-glass accounts** | Emergency break-glass accounts must be sealed, access events must be alerted in real-time, and usage must be reviewed within [24 hours]. |

#### 7.4.3 Privileged Access Provisioning Steps

| Step | Activity | Responsible Party |
|---|---|---|
| 1 | Business justification for privileged access is documented and submitted by the requesting manager | Requesting Manager |
| 2 | IS team reviews the business justification and assesses risk | IS Team |
| 3 | CISO or designated IS Manager provides written approval | CISO / IS Manager |
| 4 | IT/IAM team creates the privileged account in the PAM platform | IT/IAM Team |
| 5 | Privileged account user completes mandatory privileged access security awareness training | User / HR / IS |
| 6 | User signs the Privileged Access Acceptable Use Agreement (Appendix D) | User |
| 7 | IT/IAM team provisions access via the PAM platform with defined scope and time limits | IT/IAM Team |
| 8 | Provisioning is logged in both ITSM and the PAM platform | IT/IAM Team |

---

### 7.5 Third-Party and Vendor Access

*Third-party access represents a significant risk vector. This subsection defines the controls required when granting external parties access to [Organization Name]'s systems.*

#### 7.5.1 Requirements Before Provisioning Third-Party Access

- [ ] A signed contract or Non-Disclosure Agreement (NDA) is in place with the vendor/third-party organisation.
- [ ] A designated **internal sponsor** (employee of [Organization Name]) has been identified and accepts accountability for the third-party's access.
- [ ] The scope and duration of required access have been formally documented and justified.
- [ ] The vendor's security posture has been assessed in accordance with the [Vendor and Third-Party Management Policy — Document ID].
- [ ] The IS team has reviewed the access request.

#### 7.5.2 Third-Party Access Controls

| Control | Requirement |
|---|---|
| **Unique accounts** | Each third-party user must have an individually attributed account. Generic or shared vendor accounts are prohibited. |
| **Time-limited access** | All third-party accounts must have a defined expiry date aligned to the contract or engagement end date. |
| **Minimum access** | Access is limited strictly to the systems and data required for the engagement. |
| **MFA** | MFA is mandatory for all third-party access. |
| **VPN or secure channel** | Remote access must be via [Organisation's approved secure access mechanism — e.g., VPN, privileged remote access platform]. |
| **Monitoring** | All third-party access sessions are monitored and logged. |
| **Internal sponsor accountability** | The internal sponsor is responsible for notifying IT/IAM immediately when third-party access is no longer required or the engagement ends. |
| **Access review** | Third-party access rights are reviewed at least [quarterly] or upon any change to the engagement scope. |

#### 7.5.3 Third-Party Access Provisioning Steps

| Step | Activity | Responsible Party |
|---|---|---|
| 1 | Internal sponsor submits Third-Party Access Request Form, attaching contract/NDA and justification | Internal Sponsor |
| 2 | IS team reviews and assesses the request | IS Team |
| 3 | CISO or Access Owner approves the request | CISO / Access Owner |
| 4 | IT/IAM provisions the account with defined scope and expiry date | IT/IAM Team |
| 5 | Internal sponsor communicates account details to the vendor via a secure channel | Internal Sponsor |
| 6 | Third-party user completes mandatory security awareness acknowledgement | Third-Party User |
| 7 | Access is logged in ITSM and IAM system with expiry date flagged | IT/IAM Team |
| 8 | IT/IAM team implements automated expiry notification [X] days before expiry date | IT/IAM Team |

---

### 7.6 Emergency and Temporary Access

*This subsection covers the process for granting access in urgent or time-bound scenarios that cannot follow the standard approval timeline without unacceptable operational impact.*

#### 7.6.1 Criteria for Emergency Access

Emergency access may only be invoked when:

- A critical business or operational process will be significantly impacted by the time required for the standard access process.
- A system incident or outage requires immediate access by personnel not ordinarily authorised.
- The standard approval authority is unavailable and a defined alternate approver has been contacted.

#### 7.6.2 Emergency Access Process

1. The requesting manager contacts the **IS team and CISO (or designated alternate)** verbally or via [approved emergency channel] to request emergency access.
2. Verbal approval is granted by the CISO or designated alternate, with the approver's name and timestamp recorded.
3. IT/IAM provisions the minimum necessary access required to address the immediate situation.
4. A formal **Access Request Form and post-event justification** must be completed **within [1] business day** of the emergency access being granted.
5. Emergency access is reviewed by the IS team within **[2] business days** to confirm it remains appropriate or should be revoked.
6. All emergency access events are reported to the IS Committee / Risk Committee at the next scheduled meeting.

> **Note:** Emergency access must never be used as a mechanism to bypass standard controls. Repeated invocation of emergency access by the same user or team will be escalated to the CISO for review.

---

## 8. Access Review and Certification

*Periodic access reviews are a mandatory control under BNM RMiT. This section defines the review frequency, process, and accountability for ensuring access rights remain appropriate over time.*

### 8.1 Review Schedule

| Access Type | Review Frequency | Review Owner |
|---|---|---|
| Standard user access | [Semi-annual / Annual] | Relevant Access Owner / Line Manager |
| Privileged and administrative access | [Quarterly] | IS Team / CISO |
| Third-party and vendor access | [Quarterly] | Internal Sponsor / IS Team |
| Service accounts | [Semi-annual] | IT/IAM Team / Application Owner |
| Dormant accounts (no login > [60] days) | [Monthly automated check] | IT/IAM Team |
| Sensitive data access | [Quarterly] | Data Owner / IS Team |

### 8.2 Access Review Process

| Step | Activity | Responsible Party |
|---|---|---|
| 1 | IT/IAM team generates access entitlement reports for each system, segmented by department and role | IT/IAM Team |
| 2 | Reports are distributed to relevant Access Owners and Line Managers for review | IT/IAM Team |
| 3 | Access Owners and Line Managers review and certify or flag for removal/modification each access entitlement | Access Owner / Manager |
| 4 | Any identified inappropriate or excessive access is submitted to IT/IAM for remediation | Access Owner / Manager |
| 5 | IT/IAM implements remediation actions within [X] business days of identification | IT/IAM Team |
| 6 | IS team reviews the outcomes of the access review and validates remediation completeness | IS Team |
| 7 | A User Access Review Summary Report is produced and submitted to [IS Steering Committee / Risk Committee] | IS Team |
| 8 | Review completion and outcomes are documented and retained for audit purposes | IS Team |

### 8.3 Dormant Account Management

- Accounts with no login activity for **[45] days** shall receive an automated alert notification to the account owner's manager.
- Accounts with no login activity for **[60] days** shall be automatically **suspended** (disabled, not deleted).
- Suspended accounts with no activity for a further **[30] days** ([90] days total) shall be escalated to the IT/IAM team for review and potential deletion, subject to data retention requirements.
- Service accounts are exempt from automated suspension but are subject to manual review at the defined review frequency.

---

## 9. Tools and Systems Used

*List all technology tools and platforms used to execute, record, and audit access provisioning activities. This section helps auditors understand the technical environment and control infrastructure.*

### 9.1 Identity and Access Management Systems

| System / Tool | Purpose | Owner | Notes |
|---|---|---|---|
| [Active Directory / LDAP] | Central user account and group management | IT/IAM Team | [On-premises / Cloud] |
| [PAM Platform — e.g., CyberArk, BeyondTrust] | Privileged access management, session recording | IS Team | Mandatory for all privileged accounts |
| [MFA Platform — e.g., Microsoft Authenticator, RSA SecurID] | Multi-factor authentication | IT/IAM Team | Mandatory for all users |
| [Identity Governance & Administration (IGA) Tool] | Access request workflows, certification campaigns | IT/IAM Team | [If applicable] |
| [Cloud IAM — e.g., AWS IAM, Azure AD] | Cloud platform access management | IT/IAM / Cloud Team | [If applicable] |
| [Single Sign-On (SSO) Platform] | Centralised authentication for supported applications | IT/IAM Team | [If applicable] |

### 9.2 ITSM and Request Management

| System / Tool | Purpose | Owner |
|---|---|---|
| [ITSM Tool — e.g., ServiceNow, Jira Service Management] | Access request ticketing, approval workflows, audit trail | IT Service Desk |
| [HR Information System — e.g., SAP HR, Workday] | Joiner/Mover/Leaver event triggers | HR |
| [Email / Collaboration Platform] | Communication of approvals and notifications | IT |

### 9.3 Monitoring and Audit

| System / Tool | Purpose | Owner |
|---|---|---|
| [SIEM Platform — e.g., Wazuh, Splunk] | Monitoring of access events, anomaly detection | IS Team |
| [Access Log Repository] | Retention of access provisioning and de-provisioning logs | IT/IAM Team |
| [Audit Management Tool] | Documentation and evidence management for internal/external audit | Audit & Compliance |

---

## 10. Escalation Procedures

*Define the escalation path when access decisions cannot be resolved at the standard level, when anomalies are detected, or when policy violations occur.*

### 10.1 Escalation Matrix

| Scenario | Initial Handler | First Escalation | Second Escalation | Timeframe |
|---|---|---|---|---|
| Access request not actioned within SLA | Requestor / Requesting Manager | IT Service Desk Manager | CISO | After [2] business days of SLA breach |
| Conflicting access rights identified (SoD conflict) | IT/IAM Team | IS Team | CISO | Within [1] business day of identification |
| Suspicious access pattern or anomaly detected | IS Team (SIEM alert) | CISO | IT Risk Committee | Within [4] hours |
| Repeated access request denied for same user | IS Team | HOD + CISO | Risk Committee | Within [2] business days |
| Policy exception requested | Requesting Manager + IS Team | CISO | CIO / Risk Committee | Per Exception Process (Section 11) |
| Failure to revoke access within required timeframe | IT/IAM Team | IS Team | CISO | Within [4] hours of SLA breach |
| Discovery of unauthorised access | IS Team | CISO | Incident Response Team | **Immediately — Invoke Incident Response Procedure** |
| Access control system unavailability | IT/IAM Team | IT Operations Manager | CIO / CISO | Within [2] hours |

### 10.2 Escalation Communication Channels

| Situation | Channel | Contact |
|---|---|---|
| Standard business hours escalation | [ITSM system / Email] | [Contact details] |
| After-hours critical escalation | [On-call mobile / SMS alert] | [On-call IS Manager contact] |
| Suspected security incident | [Incident Hotline / Direct call] | [CISO / IS Team emergency contact] |

---

## 11. Exceptions and Non-Compliance

*Define the process for handling legitimate exceptions to this procedure, as well as the consequences of non-compliance.*

### 11.1 Exception Process

Where a legitimate business requirement makes full compliance with this procedure impracticable, an exception may be requested as follows:

1. The requesting manager documents the **business justification**, **specific procedure element** requiring an exception, **proposed compensating controls**, and **duration** of the exception.
2. The request is reviewed by the **IS team** for risk assessment.
3. The exception must be approved by the **CISO** for standard exceptions, or the **CIO / Risk Committee** for exceptions of elevated risk or extended duration.
4. Approved exceptions are logged in the **Exception Register** (maintained by the IS team) with a review date not exceeding [6 months].
5. All exceptions are reported to the [IS Steering Committee / Risk Committee] at the next scheduled meeting.
6. No exception is permanent. Each exception must be reviewed at its specified review date and either remediated, renewed with re-approval, or escalated.

### 11.2 Non-Compliance

Failure to comply with this procedure, including but not limited to the following, may result in disciplinary action up to and including termination of employment or contract:

- Provisioning access without authorisation.
- Sharing account credentials.
- Failing to report a departure or role change that would trigger access modification or revocation.
- Circumventing access controls.
- Using access rights beyond the scope of authorised duties.

Non-compliance findings are reported to:

- **Line Manager and HR:** For employee disciplinary process.
- **CISO and IS Team:** For security impact assessment.
- **Internal Audit:** For recording as an audit finding.
- **Legal / Compliance:** Where non-compliance may constitute a regulatory breach.

---

## 12. Monitoring, Audit, and Reporting

*This section defines how compliance with this procedure is monitored on an ongoing basis and how findings are reported to management.*

### 12.1 Ongoing Monitoring

| Monitoring Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| Automated review of dormant accounts | [Monthly] | IT/IAM Team | Dormant Account Report |
| Privileged access session review | [Monthly] | IS Team | Privileged Access Activity Report |
| SoD conflict analysis | [Quarterly] | IS Team / IT/IAM | SoD Conflict Report |
| Access provisioning SLA compliance check | [Monthly] | IT Service Desk | SLA Performance Report |
| Third-party account expiry monitoring | [Monthly] | IT/IAM Team | Vendor Access Status Report |
| Failed login and anomalous access alerting | [Real-time / Daily summary] | IS Team (SIEM) | SIEM Alerts / Daily Security Report |
| Access request queue age review | [Weekly] | IT Service Desk | Open Request Report |

### 12.2 Periodic Audit

| Audit Activity | Frequency | Conducted By | Reported To |
|---|---|---|---|
| User Access Review (full certification) | [Semi-annual / Annual] | IS Team + Access Owners | IS Steering Committee / Risk Committee |
| Privileged Access Audit | [Quarterly] | IS Team | CISO / Risk Committee |
| Third-Party Access Audit | [Quarterly] | IS Team | CISO |
| Procedure compliance review | [Annual] | Internal Audit | Audit Committee |
| BNM RMiT control self-assessment | [Annual] | IS / Compliance Team | Board Risk Committee |

### 12.3 Key Metrics and Reporting

The following metrics shall be tracked and reported to [IS Steering Committee / Risk Committee] on a [monthly/quarterly] basis:

| Metric | Target | Reporting Frequency |
|---|---|---|
| Access provisioning SLA compliance rate | ≥ [95]% | Monthly |
| Access revocation SLA compliance rate (standard) | ≥ [98]% | Monthly |
| Access revocation SLA compliance rate (immediate) | 100% | Monthly |
| Number of open exception requests | [0–5] | Monthly |
| Number of dormant accounts identified and remediated | Trend to zero | Monthly |
| Number of SoD conflicts identified | Trend to zero | Quarterly |
| Privileged access review completion rate | 100% | Quarterly |
| Third-party access review completion rate | 100% | Quarterly |
| Number of policy non-compliance incidents | [0] | Monthly |

---

## 13. Review and Approval

### 13.1 Document Review Schedule

This procedure shall be reviewed:

- **Annually**, from the effective date; or
- **Upon significant change**, including but not limited to: significant changes to technology infrastructure, changes in organisational structure, changes to BNM RMiT requirements, or material findings from internal/external audits.

The IS team is responsible for coordinating the review and ensuring that any revisions are submitted for approval prior to the expiry of the review date.

### 13.2 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Effective Date] | [Author Name], [Title] | Initial release | [Approved By] |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] | [Approved By] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of changes — major revision] | [Approved By] |

### 13.3 Approval Sign-Off

*All versions of this document require the following sign-offs prior to publication. Signatures confirm review, understanding, and approval of the content.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], [Title] | ___________________________ | [Date] |
| Reviewed By (Information Security) | [Name], CISO / IS Manager | ___________________________ | [Date] |
| Reviewed By (IT) | [Name], CIO / IT Director | ___________________________ | [Date] |
| Reviewed By (Compliance) | [Name], Compliance Officer | ___________________________ | [Date] |
| Approved By | [Name], [Relevant Department Head / Authorised Approver] | ___________________________ | [Date] |

---

## 14. References

*This section provides a consolidated listing of all regulatory, statutory, and internal references that this procedure is derived from or aligned to.*

### 14.1 Regulatory and Statutory References

| Reference | Issuing Authority | Applicable Section(s) | URL / Source |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | **Clause 10.53** — User Access Management; Clauses 10.50–10.58 (Access Control) | [BNM Official Portal] |
| Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 — Security Principle; Section 10 — Retention Principle | [Attorney General's Chambers] |
| Guidelines on Management of Customer Information and Permitted Disclosures | Bank Negara Malaysia (BNM) | [Relevant Paragraphs] | [BNM Official Portal] |
| Financial Services Act 2013 | Parliament of Malaysia | [Relevant Sections re: data security and operational risk] | [Attorney General's Chambers] |
| Islamic Financial Services Act 2013 | Parliament of Malaysia | [Relevant Sections — if applicable] | [Attorney General's Chambers] |

### 14.2 Standards References

| Standard | Relevant Control(s) |
|---|---|
| ISO/IEC 27001:2022 | Annex A 5.15 (Access Control), 5.16 (Identity Management), 5.17 (Authentication), 5.18 (Access Rights) |
| ISO/IEC 27002:2022 | Clause 5.18 — Access Rights (Provisioning, modification, revocation guidance) |
| NIST SP 800-53 Rev 5 | AC-2 (Account Management), AC-3 (Access Enforcement), AC-5 (Separation of Duties), AC-6 (Least Privilege) |
| CIS Controls v8 | Control 5 — Account Management; Control 6 — Access Control Management |

---

## 15. Appendices

### Appendix A: Process Flowcharts

*Insert process flowcharts for each major access lifecycle event. Flowcharts should visually represent the step-by-step procedures described in Section 7. Use BPMN or equivalent notation for clarity.*

**A1 — New User Access Provisioning Flowchart**

> [Insert flowchart: HR Notification → Manager Request → IAM Validation → Access Owner Approval → IS Review (if privileged) → Provisioning → Confirmation → Log & Close]

**A2 — Access Modification (Mover) Flowchart**

> [Insert flowchart: Change Event → Manager Request → IAM Assessment → Approval → Modify (Grant + Revoke) → Confirmation → Log & Close]

**A3 — Access Revocation (Leaver) Flowchart — Standard**

> [Insert flowchart: HR Notification → Handover → Account Disable → Revocation → Archival → IS Validation → Log & Close]

**A4 — Immediate Access Revocation Flowchart — Involuntary Termination**

> [Insert flowchart: Management Decision → Simultaneous IT/IS Notification → Immediate Disable → Full Revocation → Physical Asset Recovery → Post-Event Review]

**A5 — Privileged Access Provisioning Flowchart**

> [Insert flowchart: Business Justification → IS Review → CISO Approval → Training + Agreement → PAM Provisioning → Log]

---

### Appendix B: User Access Request Form

*The User Access Request Form must be completed and submitted via [ITSM system / email to iam@[organization].com.my] for all standard access provisioning requests.*

| Field | Detail |
|---|---|
| **Request Date** | |
| **Request Type** | ☐ New Access ☐ Modification ☐ Revocation ☐ Temporary Access |
| **User Full Name** | |
| **Staff ID / Employee Number** | |
| **Department** | |
| **Job Title / Role** | |
| **Employment Type** | ☐ Permanent Employee ☐ Contract ☐ Intern ☐ Vendor / Third-Party |
| **Contract End Date (if applicable)** | |
| **Start Date / Effective Date** | |
| **Manager / Requesting Manager Name** | |
| **Manager / Requesting Manager Email** | |

**Access Required:**

| System / Application | Access Level / Role | Business Justification | Duration (if temporary) |
|---|---|---|---|
| [System 1] | [Role / Access Level] | [Justification] | [Permanent / End Date] |
| [System 2] | [Role / Access Level] | [Justification] | [Permanent / End Date] |
| [System 3] | [Role / Access Level] | [Justification] | [Permanent / End Date] |

| Field | Detail |
|---|---|
| **Manager Declaration** | I confirm that the access requested above is the minimum required for the user to perform their role, and that I accept accountability for the appropriateness of this request. |
| **Manager Signature** | ___________________________ |
| **Date** | |
| **Access Owner Approval** | ___________________________ |
| **Date** | |
| **IS Review (if required)** | ☐ Approved ☐ Rejected ☐ Referred for escalation |
| **IS Reviewer Name** | |
| **Date** | |

---

### Appendix C: Role Access Matrix

*The Role Access Matrix defines the standard set of system access entitlements for each role within [Organization Name]. This matrix is maintained by the IT/IAM team in consultation with business unit heads and reviewed [annually / upon role changes]. Access provisioned must not exceed the entitlements defined in this matrix without specific approval.*

| Role | [System 1] | [System 2] | [System 3] | [System 4] | [Network / VPN] | [Email] | Notes |
|---|---|---|---|---|---|---|---|
| [Role 1 — e.g., Customer Service Officer] | Read | Read | None | None | Standard | Yes | |
| [Role 2 — e.g., Credit Analyst] | Read/Write | Read | Read | None | Standard | Yes | |
| [Role 3 — e.g., IT Support Analyst] | Admin | Read | Read | Admin | Full | Yes | |
| [Role 4 — e.g., Operations Manager] | Read/Write | Read/Write | Read | None | Standard | Yes | |
| [Role 5 — e.g., Compliance Officer] | Read | Read | Read/Write | None | Standard | Yes | Audit log access required |
| [Add roles as required] | | | | | | | |

> **Access Level Key:** `None` — No access | `Read` — View only | `Read/Write` — View and modify | `Admin` — Full administrative control

---

### Appendix D: Privileged Access Acceptable Use Agreement

*This agreement must be signed by all users granted privileged access prior to that access being provisioned. The signed original is retained by the IS team.*

**[Organization Name]**
**Privileged Access Acceptable Use Agreement**

I, **[Full Name]**, **[Job Title]**, **[Department]**, acknowledge that I have been granted privileged access to [Organization Name]'s systems and infrastructure. By signing this agreement, I confirm that I:

1. Understand that privileged access carries elevated responsibility and risk, and that I will use it only for authorised, work-related purposes.
2. Will not share my privileged account credentials with any other person under any circumstances.
3. Will use a separate, dedicated privileged account for administrative tasks, distinct from my standard user account.
4. Understand that all privileged sessions are recorded and subject to review by the Information Security team.
5. Will report any suspected misuse, compromise, or unauthorised access to my privileged account to the IS team immediately.
6. Will comply with all requirements of the User Access Provisioning Procedure and all related information security policies.
7. Understand that misuse of privileged access may result in disciplinary action, up to and including termination, and may constitute a criminal offence under Malaysian law.
8. Will immediately notify the IS team if my role changes such that privileged access is no longer required.

| Field | Detail |
|---|---|
| **User Full Name** | |
| **Staff ID / Employee Number** | |
| **Department** | |
| **Systems / Platforms — Privileged Access Granted** | |
| **Date of Grant** | |
| **User Signature** | ___________________________ |
| **Date Signed** | |
| **Witnessed By (IS Team)** | ___________________________ |
| **Date** | |

---

### Appendix E: Glossary of Access Levels

*This appendix provides a standardised definition of access levels used in the Role Access Matrix and Access Request Form to ensure consistent interpretation.*

| Access Level | Definition |
|---|---|
| **None** | No access to the system or data asset. |
| **Read / View Only** | User may view data and reports but cannot create, modify, or delete any records. |
| **Read / Write** | User may view, create, and modify records within their authorised scope. Cannot delete records or perform administrative functions. |
| **Read / Write / Delete** | User may view, create, modify, and delete records within their authorised scope. Cannot perform administrative functions. |
| **Super User / Power User** | User has elevated functional access beyond standard Read/Write, such as access to additional modules, configuration options, or bulk data operations. Does not include system administration. |
| **Administrator** | User has full administrative control over the system, including user management, configuration, and system-level operations. Governed by Privileged Access controls (Section 7.4). |
| **Read Only — Audit** | Restricted read-only access for audit and compliance review purposes. No operational data modification capability. |

---

### Appendix F: Regulatory Mapping Summary

*This appendix provides a direct mapping between the controls in this procedure and the specific BNM RMiT Clause 10.53 requirements, to facilitate compliance assessment and audit evidence preparation.*

| BNM RMiT Clause 10.53 Requirement | Corresponding Section(s) in This Procedure | Evidence / Artefact |
|---|---|---|
| Access rights shall be granted based on the principle of least privilege | Section 5 (Guiding Principles), Section 7.1 | Approved Access Request Forms, Role Access Matrix (Appendix C) |
| Access provisioning shall be subject to formal authorisation | Section 7.1.2, Section 7.4.3, Section 7.5.3 | ITSM Approval Records, Signed Access Request Forms |
| User access rights shall be reviewed periodically | Section 8 (Access Review and Certification) | User Access Review Reports, Certification Records |
| Access rights shall be promptly revoked upon change of role or departure | Section 7.2, Section 7.3 | ITSM Revocation Records, HR Leaver Notifications |
| Privileged access shall be subject to enhanced controls | Section 7.4 | PAM Platform Logs, Privileged Access Agreements (Appendix D) |
| Third-party access shall be managed and monitored | Section 7.5 | Vendor Access Records, Third-Party Access Review Reports |
| Access management activities shall be logged and auditable | Section 12 (Monitoring, Audit, and Reporting) | SIEM Logs, ITSM Records, IAM System Audit Trail |
| Segregation of duties shall be maintained | Section 5, Section 8.2 (SoD conflict analysis) | SoD Conflict Reports |

---

*End of Document*

---

| Field | Detail |
|---|---|
| **Document Title** | User Access Provisioning Procedure |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Next Review Date** | [Next Review Date] |