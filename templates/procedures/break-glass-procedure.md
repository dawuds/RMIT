# Break-Glass Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | IAM Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause Reference** | 10.54 |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel involved in identity and access management, incident response, and technology risk oversight. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Break-Glass Access Framework](#5-break-glass-access-framework)
6. [Pre-Requisites and Authorization Controls](#6-pre-requisites-and-authorization-controls)
7. [Step-by-Step Break-Glass Process Flow](#7-step-by-step-break-glass-process-flow)
8. [Multi-Factor Authentication (MFA) Controls](#8-multi-factor-authentication-mfa-controls)
9. [Roles and Responsibilities (RACI)](#9-roles-and-responsibilities-raci)
10. [Tools and Systems Used](#10-tools-and-systems-used)
11. [Escalation Procedures](#11-escalation-procedures)
12. [Monitoring, Logging, and Audit Trail](#12-monitoring-logging-and-audit-trail)
13. [Post-Access Review and Remediation](#13-post-access-review-and-remediation)
14. [Security and Compliance Controls](#14-security-and-compliance-controls)
15. [Training and Awareness](#15-training-and-awareness)
16. [Exceptions and Deviations](#16-exceptions-and-deviations)
17. [Review and Approval](#17-review-and-approval)
18. [References](#18-references)
19. [Appendices](#19-appendices)

---

## 1. Purpose

*Describe the primary purpose of this document and the operational need it fulfills. Explain the risk management intent and how it supports continuity of critical operations.*

This document establishes the formal Break-Glass Procedure for [Organization Name], defining the controlled process by which privileged emergency access to critical systems and data is granted, monitored, and revoked in scenarios where standard access channels are unavailable or insufficient to address a high-severity incident.

The purpose of this procedure is to:

- Provide a structured, auditable mechanism for emergency access to critical systems during incidents, outages, or disaster recovery scenarios.
- Ensure that emergency access is authorized, time-limited, and subject to mandatory multi-factor authentication (MFA) controls.
- Maintain accountability and full audit trails for all break-glass access events in compliance with BNM RMiT requirements.
- Minimize the risk of unauthorized or uncontrolled privileged access while preserving the organization's ability to respond rapidly to critical technology incidents.
- Define clear roles, responsibilities, and escalation paths to prevent ambiguity during high-pressure emergency scenarios.

This procedure is a mandatory control document under BNM RMiT Clause 10.54 and forms part of [Organization Name]'s broader Identity and Access Management (IAM) control framework.

---

## 2. Scope and Applicability

*Define the boundaries of this procedure — which systems, users, environments, and scenarios it applies to. Clearly state any exclusions.*

### 2.1 In-Scope Systems and Environments

This procedure applies to all situations where emergency privileged access is required to the following categories of systems operated by or on behalf of [Organization Name]:

| System Category | Examples | Criticality |
|---|---|---|
| Core Banking Systems | [CBS Platform Name], [Payments Engine] | Critical |
| Identity and Access Management | [IAM Platform], Active Directory, [PAM Tool] | Critical |
| Security Infrastructure | SIEM, Firewalls, IDS/IPS, EDR | Critical |
| Cloud Platforms | [Cloud Provider] Management Consoles | High |
| Database Servers | [Production DB Name], [Replication DB] | Critical |
| Network Infrastructure | Core Routers, Switches, Load Balancers | High |
| Application Servers | [Application Name] Production Environment | High |
| Data Centre Infrastructure | Hypervisors, Storage Arrays, Backup Systems | High |

### 2.2 In-Scope Personnel

This procedure applies to all personnel who may be required to invoke or authorize break-glass access, including but not limited to:

- Information Technology (IT) Operations staff
- Cybersecurity and Security Operations Centre (SOC) personnel
- Incident Response team members
- System and Database Administrators
- IAM team members
- Senior Technology Management (CTO, CISO, Head of IT Operations)
- Third-party vendors or managed service providers with pre-approved emergency access agreements

### 2.3 Applicable Scenarios

Break-glass access may only be invoked under the following qualifying emergency scenarios:

- **Severity 1 (Critical) Incidents:** System-wide outages affecting core banking operations, payments processing, or customer-facing services.
- **Disaster Recovery (DR) Activation:** Invocation of the Business Continuity Plan (BCP) or Disaster Recovery Plan (DRP) requiring emergency access to restore operations.
- **Cybersecurity Incidents:** Active breaches, ransomware events, or security incidents where standard access channels have been compromised.
- **Privileged Account Lockout:** Unavailability of all standard privileged accounts due to technical failure, compromise, or administrative error.
- **Regulatory or Audit Emergency:** Time-critical access required to fulfill regulatory obligations or auditor requests outside normal business hours.

### 2.4 Out of Scope

This procedure does **not** apply to:

- Routine privileged access requests (refer to [Privileged Access Management Policy, Document ID: [PAM Policy ID]])
- Standard password reset procedures (refer to [Password Management Procedure, Document ID: [PW Procedure ID]])
- Vendor access provisioning for non-emergency activities
- Development and test environment access

---

## 3. Regulatory Context

*Describe the regulatory obligations that this procedure fulfills. Reference specific clauses and explain the obligation in plain language.*

### 3.1 BNM Risk Management in Technology (RMiT)

This procedure is established in direct response to obligations under Bank Negara Malaysia's **Risk Management in Technology (RMiT)** policy document issued pursuant to the Financial Services Act 2013 (FSA) and Islamic Financial Services Act 2013 (IFSA).

| RMiT Clause | Requirement Summary | How This Procedure Addresses It |
|---|---|---|
| **10.54** | Financial institutions shall implement controls for emergency or privileged access, including break-glass procedures with defined authorization, logging, and review requirements. | This document defines the full lifecycle of break-glass access: authorization, MFA enforcement, logging, and post-access review. |
| [Additional Clause] | [Summary of requirement] | [How addressed] |
| [Additional Clause] | [Summary of requirement] | [How addressed] |

### 3.2 Related Regulatory and Standards Obligations

| Framework / Standard | Relevant Section | Description |
|---|---|---|
| **PDPA 2010** | Part III — General Principles | Ensures personal data accessed during break-glass events is handled in accordance with data protection obligations. |
| **NACSA Cybersecurity Framework** | [Relevant Section] | [Description] |
| **ISO/IEC 27001:2022** | A.8.18 — Use of privileged utility programs | Establishes controls for privileged account usage and monitoring. |
| **NIST SP 800-53** | AC-2, AC-6, AU-2 | Access management, least privilege, and audit event requirements. |
| **BNM RMIT** | Section 10 — Access Control | Broader access control framework within which this procedure sits. |

---

## 4. Definitions and Terminology

*Provide clear definitions for all key terms used in this document to ensure consistent interpretation across teams.*

| Term | Definition |
|---|---|
| **Break-Glass Access** | An emergency access mechanism that allows pre-authorized personnel to gain immediate privileged access to systems or data under tightly controlled and audited conditions, bypassing standard access workflows. |
| **Break-Glass Account** | A dedicated, highly privileged account held in escrow (e.g., a password vault) that is activated only during qualifying emergency scenarios. Also referred to as a "firecall account" or "emergency account." |
| **Multi-Factor Authentication (MFA)** | An authentication method requiring the user to present two or more verification factors: something they know (password), something they have (token/OTP), or something they are (biometric). |
| **Privileged Access Management (PAM)** | The set of cybersecurity strategies and technologies used to control, monitor, and audit privileged account access across an organization's IT environment. |
| **Incident Commander** | The individual assigned overall responsibility for managing a declared technology incident, including authorization of break-glass access requests. |
| **Custodian** | The individual responsible for holding and releasing break-glass credentials, typically the IAM Manager or designated deputy. |
| **Approver** | A senior authority (CISO, CTO, or designated deputy) whose explicit authorization is required before break-glass credentials are released. |
| **Requestor** | The individual formally requesting break-glass access to resolve a specific incident. |
| **Audit Trail** | A chronological, tamper-evident record of all actions taken during a break-glass access session, including credential retrieval, login events, commands executed, and session termination. |
| **Time-Bound Access** | Access granted for a specific, pre-defined duration, after which it is automatically revoked or must be explicitly renewed with re-authorization. |
| **PAM Tool** | [PAM Tool Name] — the privileged access management platform used by [Organization Name] to store, release, and monitor break-glass credentials. |
| **Vault** | The secure credential repository within the PAM tool where break-glass account credentials are stored. |

---

## 5. Break-Glass Access Framework

*Describe the overarching framework and guiding principles that govern break-glass access. This section sets the context for the detailed procedures that follow.*

### 5.1 Guiding Principles

[Organization Name]'s Break-Glass Access Framework is founded on the following core principles:

1. **Least Privilege:** Break-glass accounts shall be granted only the minimum level of access necessary to address the specific emergency. Access shall not be broader than what is required.
2. **Dual Authorization:** No single individual shall have the ability to both request and approve break-glass access. All activations require a minimum of two authorized parties.
3. **Time-Bound Access:** All break-glass access is strictly time-limited. Default maximum session duration is **[X] hours**, extendable only with explicit re-authorization.
4. **Full Auditability:** Every action performed during a break-glass session — including credential retrieval, system login, commands executed, and session termination — must be recorded in a tamper-evident audit log.
5. **Mandatory MFA:** Break-glass account activation requires multi-factor authentication at every stage: credential retrieval, system login, and where technically feasible, individual privileged actions.
6. **Immediate Rotation:** Break-glass account passwords shall be rotated immediately upon session termination and in no case later than **[X] hours** after credential release.
7. **Mandatory Post-Access Review:** Every break-glass access event triggers a mandatory post-access review within **[X] business days** to assess appropriateness, identify lessons learned, and confirm credential rotation.

### 5.2 Break-Glass Account Inventory

*List all designated break-glass accounts maintained by the organization. This table should be maintained separately in the PAM tool and referenced here.*

| Account ID | Target System | Account Type | Custodian | Vault Location | Last Rotation Date |
|---|---|---|---|---|---|
| [BG-001] | [Core Banking System] | Local Admin | [Custodian Name] | [Vault Path] | [Date] |
| [BG-002] | [Database Server] | DBA Account | [Custodian Name] | [Vault Path] | [Date] |
| [BG-003] | [Cloud Console] | Root / Break-Glass | [Custodian Name] | [Vault Path] | [Date] |
| [BG-004] | [Network Device] | Enable / Privileged | [Custodian Name] | [Vault Path] | [Date] |
| [BG-005] | [IAM Platform] | Super Admin | [Custodian Name] | [Vault Path] | [Date] |

### 5.3 Account Maintenance Schedule

| Activity | Frequency | Responsible Party |
|---|---|---|
| Password rotation (scheduled) | Quarterly | IAM Manager |
| Password rotation (post-use) | Immediately after each use | PAM Tool (automated) / IAM Manager |
| Access entitlement review | Semi-annually | IAM Manager + System Owner |
| Vault access review | Quarterly | CISO |
| Procedure test (tabletop exercise) | Annually | IT Operations + IAM |

---

## 6. Pre-Requisites and Authorization Controls

*Detail all conditions that must be met before break-glass access can be activated. This section establishes the gate controls.*

### 6.1 Pre-Authorization Requirements

Before break-glass access may be initiated, all of the following conditions must be satisfied:

- [ ] A formal incident ticket has been raised in the incident management system ([Incident Management Tool Name]) with Severity 1 or equivalent designation.
- [ ] The Incident Commander has been identified and notified.
- [ ] Standard access recovery options have been attempted and exhausted (or are deemed impossible given the nature of the incident).
- [ ] The Requestor has formally stated the specific system(s) requiring emergency access and the business justification.
- [ ] The Approver has been contacted via the approved emergency communication channel ([Communication Channel, e.g., Encrypted Call, Secure Messaging Platform]).
- [ ] The Custodian has verified the Requestor's identity using the approved verification procedure (see Section 6.3).

### 6.2 Authorization Matrix

*Define who can authorize break-glass access for different system criticality tiers.*

| System Criticality | Primary Approver | Secondary Approver (if primary unavailable) | Custodian |
|---|---|---|---|
| **Critical** (Core Banking, Payments) | CISO | CTO | IAM Manager |
| **High** (Security Infrastructure, Cloud) | Head of IT Operations | CISO | IAM Manager |
| **Medium** (Application Servers, Non-critical DBs) | IT Operations Manager | Head of IT Operations | IAM Team Lead |

### 6.3 Identity Verification Protocol

*The Custodian must verify the identity of the Requestor before releasing break-glass credentials. Define the verification steps.*

The Custodian shall verify the Requestor's identity using the following steps:

1. **Step 1 — Employee Verification:** Confirm the Requestor's employee ID and full name against the HR system or Active Directory.
2. **Step 2 — Out-of-Band Verification:** Call the Requestor back on their registered mobile number (as held in HR records) — do not accept contact details provided by the Requestor in the initial request.
3. **Step 3 — Challenge Phrase:** The Requestor must provide the current month's emergency challenge phrase (rotated monthly and communicated securely to eligible staff).
4. **Step 4 — Incident Ticket Validation:** The Custodian independently verifies the incident ticket number provided by the Requestor in the incident management system.
5. **Step 5 — Approver Confirmation:** The Custodian independently contacts the Approver (via registered contact) to confirm verbal or written authorization was given.

---

## 7. Step-by-Step Break-Glass Process Flow

*Provide a detailed, numbered procedure covering every stage of the break-glass lifecycle. This section is the operational core of the document.*

### 7.1 Process Flow Diagram

*Insert a process flow diagram here. The diagram should illustrate the full end-to-end workflow from incident detection through credential rotation and post-access review.*

> **[INSERT PROCESS FLOW DIAGRAM]**
> *(Recommended: BPMN or swimlane diagram showing Requestor, Approver, Custodian, and Monitoring roles)*

### 7.2 Phase 1 — Incident Declaration and Initial Assessment

| Step | Action | Responsible Party | Time Target |
|---|---|---|---|
| 1.1 | Detect and confirm the incident requiring emergency access. Document initial findings. | Incident Detector (SOC / IT Ops) | T+0 |
| 1.2 | Raise a Severity 1 incident ticket in [Incident Management Tool]. Record: incident description, affected systems, business impact, and initial diagnosis. | Incident Detector | T+0 to T+5 min |
| 1.3 | Notify the Incident Commander per the Incident Response procedure [Document ID: [IR Procedure ID]]. | IT Operations On-Call | T+5 min |
| 1.4 | Incident Commander confirms that standard access recovery has been attempted and is not viable. Documents this determination in the incident ticket. | Incident Commander | T+5 to T+15 min |
| 1.5 | Incident Commander formally declares the need for break-glass access and identifies: the Requestor, target system(s), and specific access scope required. | Incident Commander | T+15 min |

### 7.3 Phase 2 — Break-Glass Access Request

| Step | Action | Responsible Party | Time Target |
|---|---|---|---|
| 2.1 | Requestor submits a Break-Glass Access Request using the [Break-Glass Request Form / PAM Tool Request Portal]. The request must include: incident ticket number, target system, access scope required, justification, and estimated access duration. | Requestor | T+15 to T+20 min |
| 2.2 | Requestor notifies the Approver via the emergency communication channel, providing: incident ticket number, system(s) requiring access, and the break-glass request ID. | Requestor | T+20 min |
| 2.3 | Approver reviews the request, confirms the incident severity and business justification, and provides explicit written or verbal authorization. The Approver records authorization in the incident ticket. | Approver | T+20 to T+30 min |
| 2.4 | Requestor notifies the Custodian of the approved break-glass request, providing: request ID, incident ticket number, and Approver's name. | Requestor | T+30 min |

### 7.4 Phase 3 — Identity Verification and Credential Release

| Step | Action | Responsible Party | Time Target |
|---|---|---|---|
| 3.1 | Custodian performs identity verification of the Requestor per Section 6.3. | Custodian | T+30 to T+40 min |
| 3.2 | Custodian independently confirms Approver authorization per Section 6.3, Step 5. | Custodian | T+40 min |
| 3.3 | Custodian initiates credential release in the PAM tool ([PAM Tool Name]). Records: request ID, time of release, Requestor identity confirmed, Approver identity confirmed, target system, and maximum session duration. | Custodian | T+40 to T+45 min |
| 3.4 | PAM tool generates a one-time-use session token or releases the break-glass credential with an automatic expiry set to the approved session duration. | PAM Tool (automated) | T+45 min |
| 3.5 | Custodian transmits credentials to the Requestor via the approved secure channel ([Secure Channel, e.g., Encrypted Messaging, PAM Tool Session Launch]). Credentials must **never** be transmitted via email, SMS, or unencrypted channels. | Custodian | T+45 min |
| 3.6 | PAM tool immediately notifies the Security Operations Centre (SOC) and SIEM of break-glass credential release. Monitoring is activated. | PAM Tool (automated) | T+45 min |

### 7.5 Phase 4 — Break-Glass Session Execution

| Step | Action | Responsible Party | Time Target |
|---|---|---|---|
| 4.1 | Requestor authenticates to the target system using the break-glass credentials, completing MFA as defined in Section 8. | Requestor | T+45 to T+50 min |
| 4.2 | Requestor performs only the actions necessary to resolve the specific incident. Actions must be confined to the scope declared in the break-glass request. | Requestor | During session |
| 4.3 | Requestor maintains a contemporaneous log of all significant actions taken during the session in the incident ticket or a dedicated break-glass session log. | Requestor | During session |
| 4.4 | SOC monitors the break-glass session in real time via SIEM alerts and PAM tool session recording. Any out-of-scope activity is escalated immediately to the Approver and CISO. | SOC Analyst | During session |
| 4.5 | Requestor provides a status update to the Incident Commander at the following intervals: upon session start, at 50% of approved session duration, and upon achieving the incident resolution milestone. | Requestor | During session |
| 4.6 | If the approved session duration is reached before incident resolution, the Requestor must obtain explicit re-authorization from the Approver (repeat Phase 2 steps 2.2–2.3) before the session is extended. | Requestor / Approver | As required |

### 7.6 Phase 5 — Session Termination and Credential Rotation

| Step | Action | Responsible Party | Time Target |
|---|---|---|---|
| 5.1 | Upon incident resolution (or upon expiry of the approved session duration), the Requestor terminates the break-glass session in the PAM tool. | Requestor | Upon completion |
| 5.2 | Requestor updates the incident ticket to reflect: session end time, actions taken, and whether the incident was resolved. | Requestor | Within 30 min of session end |
| 5.3 | Custodian confirms session termination in the PAM tool and initiates immediate credential rotation for the break-glass account(s) used. | Custodian | Within 1 hour of session end |
| 5.4 | PAM tool automatically rotates the break-glass account password and records the rotation event. New credential is stored in the vault. | PAM Tool (automated) | Within 1 hour of session end |
| 5.5 | Custodian notifies the Approver and IAM Manager that the session has been terminated and credentials rotated. | Custodian | Within 1 hour of session end |
| 5.6 | SOC confirms that all monitoring alerts related to the break-glass session have been reviewed and closed or escalated as appropriate. | SOC Analyst | Within 2 hours of session end |

### 7.7 Phase 6 — Post-Access Review

| Step | Action | Responsible Party | Deadline |
|---|---|---|---|
| 6.1 | IAM Manager initiates a post-access review within [X] business days of session termination. | IAM Manager | T + [X] business days |
| 6.2 | SOC provides a full session activity report from the SIEM and PAM tool session recordings. | SOC Manager | Within [X] business days |
| 6.3 | IAM Manager reviews the session recording and activity logs to confirm all actions were within the declared scope. | IAM Manager | Within [X] business days |
| 6.4 | Any out-of-scope or anomalous actions identified during review are escalated to the CISO and may trigger a separate investigation. | IAM Manager / CISO | Immediately upon identification |
| 6.5 | Post-access review findings are documented in the Break-Glass Event Register (Appendix C). | IAM Manager | Within [X] business days |
| 6.6 | Lessons learned are documented and, where applicable, procedural improvements are raised as change requests. | IAM Manager | Within [X] business days |

---

## 8. Multi-Factor Authentication (MFA) Controls

*Detail all MFA requirements applicable to break-glass access. MFA must be enforced at every feasible authentication point.*

### 8.1 MFA Requirements

MFA is mandatory for all break-glass access scenarios. [Organization Name] enforces MFA at the following control points:

| Control Point | MFA Requirement | Acceptable Factors | Notes |
|---|---|---|---|
| PAM Vault Access (Custodian) | Mandatory | Hardware token (TOTP) + Password | Custodian must authenticate to vault before credential release |
| Break-Glass Credential Retrieval | Mandatory | PAM Tool MFA (TOTP / Push notification) | PAM tool enforces MFA on all privileged credential checkouts |
| Target System Login | Mandatory (where technically feasible) | TOTP / Smart card / Biometric | Documented exception required where MFA is technically unavailable |
| Remote Access (VPN/Bastion) | Mandatory | Certificate + TOTP | All remote break-glass access traverses the bastion host |

### 8.2 MFA Exceptions

*Where MFA cannot be technically enforced on a specific system, a documented compensating control must be in place.*

| System | MFA Gap | Compensating Control | Exception Approved By | Expiry Date |
|---|---|---|---|---|
| [Legacy System Name] | MFA not supported on local console | PAM session recording active; dual-person rule enforced; session limited to 30 minutes | [Approver Name] | [Date] |
| [System Name] | [Gap description] | [Compensating control] | [Approver] | [Date] |

### 8.3 MFA Failure During Break-Glass Event

If MFA authentication fails during a break-glass event:

1. The Requestor must immediately notify the Custodian and Incident Commander.
2. The Custodian shall not release alternate credentials without re-verifying identity using Section 6.3 and obtaining fresh Approver authorization.
3. If the MFA failure is suspected to be related to the incident being investigated (e.g., account compromise), the CISO must be notified immediately before any further credential release.
4. All MFA failure events during break-glass scenarios must be logged in the Break-Glass Event Register (Appendix C) and reviewed in the post-access review.

---

## 9. Roles and Responsibilities (RACI)

*Define the accountabilities and responsibilities of all parties involved in the break-glass process. Use the RACI model: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 9.1 RACI Matrix

| Activity | Requestor | Incident Commander | Approver (CISO/CTO) | Custodian (IAM Manager) | SOC Analyst | IT Operations | System Owner | Risk & Compliance |
|---|---|---|---|---|---|---|---|---|
| Detect and declare incident | R | A | I | I | R | C | I | I |
| Raise incident ticket | R | A | I | I | C | C | I | I |
| Confirm standard access exhausted | R | A | C | I | C | R | C | I |
| Submit break-glass access request | R | C | I | I | I | I | I | I |
| Authorize break-glass access | I | C | **A/R** | I | I | I | C | C |
| Perform identity verification | I | I | I | **A/R** | I | I | I | I |
| Release break-glass credentials | I | I | C | **A/R** | I | I | I | I |
| Execute break-glass session | **R** | C | I | I | I | C | C | I |
| Real-time session monitoring | I | I | I | I | **A/R** | I | I | I |
| Contemporaneous session logging | **R** | I | I | I | C | I | I | I |
| Session termination | **R** | C | I | I | I | I | I | I |
| Credential rotation | I | I | I | **A/R** | I | I | I | I |
| Post-access review | I | C | A | **R** | C | C | C | I |
| Update Break-Glass Event Register | I | I | I | **A/R** | C | I | I | I |
| Escalate anomalous activity | I | C | A | R | **R** | I | I | I |
| Procedure annual review | I | I | A | **R** | C | C | C | C |

### 9.2 Role Descriptions

| Role | Responsibilities |
|---|---|
| **Requestor** | The individual invoking break-glass access to resolve a specific incident. Responsible for performing only authorized actions, maintaining session logs, and terminating the session promptly upon incident resolution. |
| **Incident Commander** | Senior IT/Operations lead responsible for declaring and managing the overall incident. Confirms the business need for break-glass access and coordinates across teams. |
| **Approver (CISO / CTO)** | Senior executive who provides explicit written or verbal authorization for each break-glass access event. Accountable for the authorization decision. Must be contactable 24/7 via emergency channels. |
| **Custodian (IAM Manager)** | Responsible for maintaining the break-glass account inventory, performing identity verification, releasing credentials, and ensuring prompt post-session rotation. |
| **SOC Analyst** | Responsible for real-time monitoring of break-glass sessions via SIEM and PAM session recording tools. Escalates anomalous activity immediately. |
| **IT Operations** | Provides technical support during the incident and may assist in scoping the access required. |
| **System Owner** | Accountable for the target system(s) being accessed. Consulted on the impact of break-glass access and participates in post-access review. |
| **Risk and Compliance** | Consulted on regulatory obligations and informed of break-glass events for risk register updates. Reviews post-access reports for compliance gaps. |

### 9.3 Deputy and Escalation Coverage

| Primary Role | Deputy (First) | Deputy (Second) | Contact Method |
|---|---|---|---|
| IAM Manager (Custodian) | [Deputy Name / Title] | [Deputy Name / Title] | [Contact Method] |
| CISO (Approver) | [Deputy Name / Title] | [Deputy Name / Title] | [Contact Method] |
| CTO (Approver) | [Deputy Name / Title] | [Deputy Name / Title] | [Contact Method] |
| SOC Lead | [Deputy Name / Title] | [Deputy Name / Title] | [Contact Method] |

---

## 10. Tools and Systems Used

*List all tools, platforms, and systems involved in the break-glass process. Include version, purpose, and access method.*

### 10.1 Primary Tools

| Tool / System | Purpose | Version | Access Method | Owner |
|---|---|---|---|---|
| **[PAM Tool Name]** (e.g., CyberArk, BeyondTrust, HashiCorp Vault) | Primary break-glass credential vault, session launch, recording, and monitoring | [Version] | HTTPS via internal network / VPN | IAM Manager |
| **[SIEM Platform]** (e.g., Wazuh, Splunk, Microsoft Sentinel) | Real-time alerting and audit log aggregation for break-glass events | [Version] | Internal portal | SOC Manager |
| **[Incident Management Tool]** (e.g., ServiceNow, Jira Service Management) | Incident ticket creation, break-glass request tracking, and authorization recording | [Version] | HTTPS via internal network / VPN | IT Operations |
| **[Bastion Host / Jump Server]** | Secure gateway for all remote break-glass sessions | [Version] | SSH / RDP via VPN | IT Operations |
| **[Secure Communication Tool]** | Out-of-band communication for break-glass authorization (must be available when primary systems are down) | [Version] | Mobile / Web | IT Operations |
| **[MFA Platform]** (e.g., Duo Security, Microsoft Authenticator, RSA SecurID) | Multi-factor authentication for break-glass credential access and system login | [Version] | Mobile token / Hardware token | IAM Manager |

### 10.2 System Access Details

| System | Break-Glass Account ID | Connection Method | Vault Path | Session Recording |
|---|---|---|---|---|
| [Core Banking System] | [BG-001] | [Protocol, e.g., RDP via Bastion] | [Vault/Path] | Yes / No |
| [Database Server] | [BG-002] | [Protocol, e.g., SSH] | [Vault/Path] | Yes / No |
| [Cloud Console] | [BG-003] | [Protocol, e.g., HTTPS] | [Vault/Path] | Yes / No |
| [Network Device] | [BG-004] | [Protocol, e.g., SSH] | [Vault/Path] | Yes / No |

### 10.3 Offline Contingency

*In scenarios where the PAM tool itself is unavailable (e.g., during a major infrastructure outage), the following offline contingency applies:*

- Break-glass credentials for the PAM tool recovery account are maintained in a **physical sealed envelope** stored in the [Physical Secure Location, e.g., fireproof safe in server room].
- The physical envelope may only be accessed by the IAM Manager or designated deputy, in the presence of the CISO or CTO, and with documented dual-person witness.
- Opening the physical envelope triggers a mandatory PAM tool incident review and the physical credentials must be rotated and re-sealed within **[X] hours** of the contingency event.
- A log of all physical envelope access events is maintained at [Location] and reviewed quarterly by the CISO.

---

## 11. Escalation Procedures

*Define escalation paths for all scenarios where the standard break-glass process encounters obstacles or unexpected conditions.*

### 11.1 Escalation Triggers

Escalation to the next authority level is required in any of the following circumstances:

- The designated Approver is unreachable within **[X] minutes** of initial contact.
- The Custodian is unable to verify the Requestor's identity.
- MFA authentication fails or is suspected to be compromised.
- The PAM tool is unavailable or has been compromised.
- The SOC identifies activity during a break-glass session that appears to exceed the declared scope.
- The break-glass session is approaching its approved duration and incident resolution has not been achieved.
- Any indication that the break-glass process itself is being manipulated or abused.

### 11.2 Escalation Path — Approver Unavailability

```
Level 1: Primary Approver (CISO)
         └─ If unreachable within [X] minutes →
Level 2: Secondary Approver (CTO)
         └─ If unreachable within [X] minutes →
Level 3: CEO / Managing Director
         └─ If unreachable within [X] minutes →
Level 4: Board Risk Committee Chair (for critical systemic events only)
```

| Level | Role | Contact Details | Escalation Condition |
|---|---|---|---|
| 1 | CISO | [Contact Method / Number] | Primary approver |
| 2 | CTO | [Contact Method / Number] | CISO unreachable > [X] min |
| 3 | CEO / MD | [Contact Method / Number] | CTO unreachable > [X] min |
| 4 | Board Risk Committee Chair | [Contact Method / Number] | CEO unreachable > [X] min (critical events only) |

### 11.3 Escalation Path — Custodian Unavailability

| Level | Role | Contact Details | Escalation Condition |
|---|---|---|---|
| 1 | IAM Manager (Primary Custodian) | [Contact Method / Number] | Primary custodian |
| 2 | IAM Team Lead (Deputy Custodian) | [Contact Method / Number] | IAM Manager unreachable > [X] min |
| 3 | Head of IT Operations | [Contact Method / Number] | IAM Team Lead unreachable > [X] min |

### 11.4 Escalation Path — Suspected Abuse or Compromise

If at any point during the break-glass process there is a reasonable suspicion that:

- Break-glass credentials are being requested under false pretenses.
- A break-glass session is being used for unauthorized purposes.
- The break-glass process is being exploited as part of a social engineering or insider threat attack.

**Immediate actions:**

1. The Custodian or SOC Analyst who identifies the suspicion immediately notifies the CISO and IAM Manager.
2. The break-glass session is terminated immediately by the Custodian or SOC (PAM tool session kill).
3. The break-glass account is disabled (not merely rotated) pending investigation.
4. A P1 Security Incident is raised in the incident management system.
5. [Organization Name]'s Incident Response procedure ([Document ID: [IR Procedure ID]]) is invoked.
6. No further break-glass access to the affected system is permitted until the CISO approves resumption.

### 11.5 Regulatory Notification Escalation

Certain break-glass events may trigger regulatory notification obligations under BNM requirements:

| Trigger | Notification Requirement | Timeline | Responsible Party |
|---|---|---|---|
| Break-glass event related to a data breach involving customer personal data | BNM notification; PDPA Commissioner notification | As per BNM incident reporting requirements | CISO + Compliance Officer |
| Break-glass event related to a material operational disruption | BNM notification | As per BNM incident reporting requirements | CISO + Compliance Officer |
| Suspected insider threat or abuse of break-glass process | Internal escalation; regulatory notification as advised by Legal | Immediately | CISO + Legal |

---

## 12. Monitoring, Logging, and Audit Trail

*Define all monitoring, logging, and audit trail requirements for break-glass access events.*

### 12.1 Mandatory Log Events

The following events must be captured in the audit trail for every break-glass access event:

| Log Event | Data Captured | Source System | Retention Period |
|---|---|---|---|
| Break-glass request submission | Requestor ID, timestamp, target system, incident ticket number, justification | Incident Management Tool / PAM Tool | [X] years |
| Approver authorization | Approver ID, timestamp, authorization channel (call/written), incident ticket reference | Incident Management Tool | [X] years |
| Custodian identity verification | Verification steps completed, timestamp, outcome | PAM Tool / Manual log | [X] years |
| Credential release | Custodian ID, Requestor ID, account ID, timestamp, approved session duration | PAM Tool | [X] years |
| MFA authentication event | Requestor ID, MFA method, timestamp, success/failure | MFA Platform / PAM Tool | [X] years |
| System login | Account ID, source IP, target system, timestamp | Target System / SIEM | [X] years |
| Commands/actions executed | Full session recording (keystrokes, screen capture) | PAM Tool session recording | [X] years |
| Session termination | Account ID, timestamp, duration | PAM Tool | [X] years |
| Credential rotation | Account ID, timestamp, rotation method (auto/manual) | PAM Tool | [X] years |
| Post-access review completion | Reviewer ID, findings summary, date completed | IAM Record | [X] years |

### 12.2 Log Integrity Controls

- All break-glass audit logs shall be forwarded to the SIEM ([SIEM Platform Name]) in real time.
- Logs must be stored in a tamper-evident, write-once repository.
- Log access is restricted to the SOC Manager, IAM Manager, and CISO.
- Log integrity is verified via [hash verification / blockchain anchor / other method] at [frequency].
- Logs must be retained for a minimum of **[X] years** in accordance with BNM RMiT and organizational data retention policy.

### 12.3 Real-Time Monitoring Alerts

The SOC shall maintain the following real-time SIEM alerts for break-glass events:

| Alert Name | Trigger Condition | Severity | SOC Response |
|---|---|---|---|
| Break-Glass Credential Released | PAM tool records a break-glass checkout | High | SOC activates monitoring; notifies SOC Shift Lead |
| Break-Glass Session Active > Approved Duration | Session runtime exceeds approved window | High | SOC contacts Custodian; Approver notified |
| Out-of-Scope System Access | Break-glass account accesses a system not listed in the request | Critical | SOC terminates session; notifies CISO immediately |
| MFA Failure During Break-Glass | Authentication failure on break-glass account | High | SOC notifies Custodian and IAM Manager |
| Credential Rotation Not Completed | Rotation not confirmed within [X] hours of session end | High | SOC notifies Custodian; escalates to IAM Manager |
| Multiple Simultaneous Break-Glass Sessions | More than one active session for the same break-glass account | Critical | SOC terminates both sessions; notifies CISO immediately |

---

## 13. Post-Access Review and Remediation

*Define the post-access review process that must occur after every break-glass event.*

### 13.1 Post-Access Review Requirements

A mandatory post-access review must be completed within **[X] business days** of every break-glass access event, regardless of session duration or outcome.

### 13.2 Post-Access Review Checklist

| Review Item | Verified By | Expected Outcome |
|---|---|---|
| Break-glass request was formally submitted with complete information | IAM Manager | Request form complete and incident ticket linked |
| Approver authorization was obtained before credential release | IAM Manager | Authorization recorded in incident ticket |
| Identity verification was performed per Section 6.3 | IAM Manager | Verification steps documented |
| MFA was enforced at all required control points | IAM Manager / SOC | MFA logs confirm authentication |
| All session activity was within declared scope | SOC Manager | Session recording reviewed; no out-of-scope actions |
| Session duration did not exceed approved window | IAM Manager | Session end time confirmed |
| Credentials were rotated within the required timeframe | IAM Manager | PAM tool rotation log confirmed |
| Incident ticket has been updated with break-glass session summary | IAM Manager | Ticket complete and accurate |
| Break-Glass Event Register has been updated | IAM Manager | Register entry complete |
| Any anomalies or lessons learned have been documented | IAM Manager | Documented and actioned |

### 13.3 Remediation Actions

| Finding Category | Required Action | Responsibility | Deadline |
|---|---|---|---|
| Procedural deviation (minor) | Document in event register; briefing with Requestor | IAM Manager | Within [X] business days |
| Procedural deviation (significant) | Formal corrective action; procedure review | IAM Manager + CISO | Within [X] business days |
| Out-of-scope access (unintentional) | Document; system owner notification; risk assessment | IAM Manager + System Owner | Within [X] business days |
| Out-of-scope access (suspected intentional) | Security investigation; HR involvement; regulatory notification | CISO + HR + Legal | Immediately |
| MFA control failure | Technical remediation; vendor engagement if required | IAM Manager + IT Ops | Within [X] business days |
| Credential rotation failure | Immediate rotation; root cause analysis | IAM Manager | Within [X] hours of finding |

---

## 14. Security and Compliance Controls

*Describe the overarching security controls that govern this procedure.*

### 14.1 Segregation of Duties

- The Requestor and the Approver must be different individuals.
- The Custodian must not be the same individual as the Approver.
- The SOC analyst monitoring a break-glass session must not be the same individual as the Requestor.
- Exceptions to segregation of duties must be documented and approved by the CISO.

### 14.2 Need-to-Know and Least Privilege

- Break-glass accounts shall be configured with the minimum privilege set required for the declared emergency scope.
- The list of personnel authorized to be designated as Requestors, Approvers, and Custodians is reviewed semi-annually by the IAM Manager and CISO.
- Break-glass account credentials are stored in the PAM vault and are not known to any individual in advance of an emergency event.

### 14.3 Physical Security Controls

- Physical break-glass envelopes (offline contingency) are stored in a Class [X] fireproof safe located at [Location].
- Access to the physical safe requires dual authorization (IAM Manager + CISO or designated deputies).
- Physical access attempts are logged in the Physical Access Register maintained at [Location].

### 14.4 Compliance Attestation

The IAM Manager shall provide an annual attestation to the CISO and Risk and Compliance function confirming:

- [ ] All break-glass accounts have been reviewed and entitlements are appropriate.
- [ ] All break-glass events in the review period have been subject to post-access review.
- [ ] All credentials have been rotated in accordance with schedule and post-use requirements.
- [ ] The procedure has been tested and remains operationally viable.
- [ ] The Break-Glass Event Register is complete and accurate.

---

## 15. Training and Awareness

*Define training requirements for all personnel involved in the break-glass procedure.*

### 15.1 Mandatory Training Requirements

| Role | Training Required | Frequency | Delivery Method | Completion Record |
|---|---|---|---|---|
| All Requestors | Break-Glass Procedure overview; PAM tool operation; MFA usage | Annually | Online module + practical exercise | [LMS / IAM Records] |
| Custodians (IAM Manager / deputies) | Full break-glass procedure; PAM vault management; identity verification protocol | Annually + upon role assumption | Instructor-led + practical exercise | IAM Records |
| Approvers (CISO / CTO / deputies) | Authorization responsibilities; escalation paths; regulatory obligations | Annually | Briefing document + awareness session | IAM Records |
| SOC Analysts | Real-time monitoring procedures; SIEM alert response; session termination | Annually | Online module + simulation | SOC Records |

### 15.2 Procedure Testing and Exercises

| Exercise Type | Description | Frequency | Participants | Owner |
|---|---|---|---|---|
| Tabletop Exercise | Scenario-based walkthrough of a break-glass activation event without live system access | Annually | All key roles | IAM Manager |
| Live Drill | Full activation test using non-production systems, including PAM tool credential checkout and session recording | [Semi-annually / Annually] | IAM Team, SOC, IT Ops | IAM Manager |
| Communication Test | Verification that all emergency contact numbers are current and reachable out-of-hours | Quarterly | All Approvers and Custodians | IAM Manager |

---

## 16. Exceptions and Deviations

*Define the process for managing exceptions to this procedure.*

### 16.1 Exception Request Process

Any deviation from this procedure must be formally documented and approved prior to implementation (except in genuine operational emergencies where post-hoc documentation is acceptable within [X] hours).

| Step | Action | Responsibility |
|---|---|---|
| 1 | Submit an Exception Request documenting: the specific clause being deviated from, the business justification, the risk assessment, and proposed compensating controls. | Requestor |
| 2 | IAM Manager reviews the request and provides a recommendation. | IAM Manager |
| 3 | CISO approves or rejects the exception. Approved exceptions are time-limited (maximum [X] months). | CISO |
| 4 | Exception is recorded in the Exceptions Register and reviewed at the next procedure review cycle. | IAM Manager |

### 16.2 Active Exception Register

| Exception ID | Clause Deviated | Justification | Compensating Control | Approved By | Expiry Date | Status |
|---|---|---|---|---|---|---|
| [EX-001] | [Clause] | [Justification] | [Control] | [Approver] | [Date] | Active |
| [EX-002] | [Clause] | [Justification] | [Control] | [Approver] | [Date] | Active |

---

## 17. Review and Approval

*This document shall be reviewed annually, or upon any significant change to the systems, processes, or regulatory environment it governs.*

### 17.1 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release | [Approver Name, Title] |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] | [Approver Name, Title] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes] | [Approver Name, Title] |

### 17.2 Review Schedule

| Review Trigger | Action Required |
|---|---|
| Annual review (scheduled) | Full document review; update version history; obtain fresh approvals |
| Significant change to PAM tool or MFA platform | Targeted review of Sections 8 and 10; update as required |
| Material incident involving break-glass abuse or failure | Immediate review; update procedure within [X] business days |
| Change to BNM RMiT or other applicable regulation | Regulatory alignment review; update References section |
| Organizational restructuring affecting key roles | Update Sections 9, 11.2, and 11.3; re-issue for approval |

### 17.3 Approval Sign-Off

*This document requires the following approvals before it is considered effective. All approvers confirm they have read, understood, and agree with the content of this document.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Document Owner** — IAM Manager | [Name] | ________________ | [Date] |
| **Reviewed By** — Head of IT Operations | [Name] | ________________ | [Date] |
| **Reviewed By** — SOC Manager | [Name] | ________________ | [Date] |
| **Reviewed By** — Risk and Compliance Manager | [Name] | ________________ | [Date] |
| **Approved By** — CISO | [Name] | ________________ | [Date] |
| **Approved By** — CTO | [Name] | ________________ | [Date] |

---

## 18. References

*List all regulatory instruments, internal policies, and standards that this document references or is governed by.*

### 18.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | **10.54** — Emergency and privileged access controls |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Applicable provisions |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Applicable provisions |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Part III — General Principles |
| [NACSA Framework] | [Title] | NACSA | [Relevant sections] |

### 18.2 Internal Policy and Procedure References

| Document ID | Document Title | Relationship |
|---|---|---|
| [IAM-POL-001] | Identity and Access Management Policy | Parent policy; this procedure implements IAM controls |
| [PAM-POL-002] | Privileged Access Management Policy | Governs privileged account management; break-glass is a subset |
| [IR-PROC-001] | Incident Response Procedure | Governs the incident declaration that triggers break-glass |
| [BCP-001] | Business Continuity Plan | May trigger break-glass during DR activation |
| [DRP-001] | Disaster Recovery Plan | May trigger break-glass during DR activation |
| [PW-PROC-001] | Password Management Procedure | Governs standard (non-emergency) credential management |
| [SEC-POL-001] | Information Security Policy | Parent policy framework |
| [DATA-RET-001] | Data Retention Policy | Governs retention of break-glass audit logs |

### 18.3 Technical Standards References

| Standard | Title | Relevant Section |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | A.8.18 (Privileged utility programs), A.8.15 (Logging) |
| NIST SP 800-53 Rev 5 | Security and Privacy Controls for Information Systems | AC-2, AC-6, AU-2, AU-9, IA-2 |
| CIS Controls v8 | Center for Internet Security Controls | Control 5 (Account Management), Control 8 (Audit Log Management) |

---

## 19. Appendices

### Appendix A — Break-Glass Access Request Form

*This form must be completed by the Requestor and submitted via the incident management system or PAM tool portal before break-glass credentials are released.*

---

**BREAK-GLASS ACCESS REQUEST**

| Field | Details |
|---|---|
| **Request ID** | [Auto-generated by system] |
| **Date and Time of Request** | [DD/MM/YYYY HH:MM] |
| **Requestor Name** | [Full Name] |
| **Requestor Employee ID** | [Employee ID] |
| **Requestor Contact Number** | [Mobile number as registered in HR] |
| **Incident Ticket Number** | [Ticket ID] |
| **Incident Severity** | [Severity 1 / Critical] |
| **Target System(s)** | [System name(s)] |
| **Break-Glass Account(s) Required** | [Account ID(s) from Account Inventory] |
| **Scope of Access Required** | [Specific actions to be performed — be precise] |
| **Business Justification** | [Why is this access necessary? What is the business impact if not granted?] |
| **Standard Access Recovery Attempted?** | Yes / No — [Detail what was attempted and why it was insufficient] |
| **Estimated Session Duration** | [Hours : Minutes] |
| **Requestor Declaration** | *I confirm that I am requesting this access in good faith to address a genuine operational emergency. I understand that all actions taken during this session will be recorded and subject to post-access review. I agree to perform only the specific actions declared above.* |
| **Requestor Signature** | ________________ |

**Approver Authorization** *(to be completed by Approver)*

| Field | Details |
|---|---|
| **Approver Name** | [Full Name] |
| **Approver Title** | [CISO / CTO / Designated Deputy] |
| **Authorization Decision** | Approved / Denied |
| **Conditions / Restrictions** | [Any additional conditions or scope restrictions] |
| **Authorization Method** | Verbal (call recorded in incident ticket) / Written (this form) |
| **Date and Time of Authorization** | [DD/MM/YYYY HH:MM] |
| **Approver Signature** | ________________ |

---

### Appendix B — Break-Glass Session Log Template

*The Requestor must maintain this log contemporaneously during the break-glass session. It supplements the automated PAM tool session recording.*

---

**BREAK-GLASS SESSION LOG**

| Field | Details |
|---|---|
| **Session ID** | [PAM Tool Session ID] |
| **Break-Glass Request ID** | [Request ID from Appendix A] |
| **Incident Ticket Number** | [Ticket ID] |
| **Requestor Name** | [Name] |
| **Session Start Time** | [DD/MM/YYYY HH:MM] |
| **Approved Session Duration** | [Hours : Minutes] |
| **Target System(s)** | [System name(s)] |

**Actions Log**

| Time (HH:MM) | System | Action Taken | Outcome | Notes |
|---|---|---|---|---|
| [HH:MM] | [System] | [Action description] | [Success / Failure] | [Any relevant notes] |
| [HH:MM] | [System] | [Action description] | [Success / Failure] | [Any relevant notes] |
| [HH:MM] | [System] | [Action description] | [Success / Failure] | [Any relevant notes] |

**Session Closure**

| Field | Details |
|---|---|
| **Session End Time** | [DD/MM/YYYY HH:MM] |
| **Incident Resolved?** | Yes / No / Partially |
| **Summary of Outcome** | [Brief description of what was achieved and current system status] |
| **Any Anomalies Encountered?** | Yes / No — [If yes, describe] |
| **Requestor Sign-Off** | ________________ |
| **Incident Commander Acknowledgement** | ________________ |

---

### Appendix C — Break-Glass Event Register

*The IAM Manager maintains this register as a complete record of all break-glass access events. It must be reviewed by the CISO quarterly and retained for a minimum of [X] years.*

| Event ID | Date | Requestor | Approver | Target System(s) | Account Used | Session Duration | Incident Ticket | Post-Review Completed | Findings / Anomalies | Credential Rotated |
|---|---|---|---|---|---|---|---|---|---|---|
| [BG-EVT-001] | [Date] | [Name] | [Name] | [System] | [Account ID] | [Duration] | [Ticket ID] | Yes / No | [Summary] | Yes / No — [Date] |
| [BG-EVT-002] | [Date] | [Name] | [Name] | [System] | [Account ID] | [Duration] | [Ticket ID] | Yes / No | [Summary] | Yes / No — [Date] |

---

### Appendix D — Emergency Contact Directory

*This directory must be maintained current at all times and is reviewed quarterly by the IAM Manager. Physical copies are held in [Location].*

| Role | Primary Contact | Mobile Number | Alternate Contact Method |
|---|---|---|---|
| IAM Manager (Custodian) | [Name] | [Number] | [Method] |
| IAM Team Lead (Deputy Custodian) | [Name] | [Number] | [Method] |
| CISO (Primary Approver) | [Name] | [Number] | [Method] |
| CTO (Secondary Approver) | [Name] | [Number] | [Method] |
| CEO / MD | [Name] | [Number] | [Method] |
| SOC Shift Lead (24/7) | [Name / Team number] | [Number] | [Method] |
| Head of IT Operations | [Name] | [Number] | [Method] |
| Risk and Compliance Manager | [Name] | [Number] | [Method] |
| Legal Counsel | [Name] | [Number] | [Method] |

*Last verified: [Date] | Verified by: [Name]*

---

### Appendix E — Glossary of Abbreviations

| Abbreviation | Full Form |
|---|---|
| BCP | Business Continuity Plan |
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CTO | Chief Technology Officer |
| DR | Disaster Recovery |
| DRP | Disaster Recovery Plan |
| FSA | Financial Services Act |
| IAM | Identity and Access Management |
| IFSA | Islamic Financial Services Act |
| IOC | Indicator of Compromise |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| OTP | One-Time Password |
| PAM | Privileged Access Management |
| PDPA | Personal Data Protection Act |
| RACI | Responsible, Accountable, Consulted, Informed |
| RMiT | Risk Management in Technology |
| SIEM | Security Information and Event Management |
| SOC | Security Operations Centre |
| TOTP | Time-based One-Time Password |

---

### Appendix F — Related Document Index

| Document ID | Title | Location | Owner | Last Updated |
|---|---|---|---|---|
| [IAM-POL-001] | Identity and Access Management Policy | [Document Repository Path] | IAM Manager | [Date] |
| [PAM-POL-002] | Privileged Access Management Policy | [Document Repository Path] | IAM Manager | [Date] |
| [IR-PROC-001] | Incident Response Procedure | [Document Repository Path] | SOC Manager | [Date] |
| [BCP-001] | Business Continuity Plan | [Document Repository Path] | IT Operations | [Date] |
| [DRP-001] | Disaster Recovery Plan | [Document Repository Path] | IT Operations | [Date] |

---

*End of Document*

---

**Document Control Footer**

| Field | Value |
|---|---|
| Document Title | Break-Glass Procedure |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | IAM Manager |
| Organization | [Organization Name] |
| Last Updated | [Last Review Date] |

*This document is subject to annual review. Printed copies are uncontrolled. Refer to the document management system for the current version.*