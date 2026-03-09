# Password Policy Compliance Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Compliance Officer |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT 10.55 |

---

> **Document Classification Notice:** This document is classified as **Confidential**. It contains sensitive compliance and security information pertaining to [Organization Name]. Distribution is restricted to authorized personnel only. Unauthorized disclosure, reproduction, or transmission of this document is strictly prohibited and may constitute a breach of regulatory obligations under Bank Negara Malaysia (BNM) guidelines.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and Obligations](#2-regulatory-framework-and-obligations)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Password Policy Statements and Requirements](#4-password-policy-statements-and-requirements)
5. [System Coverage and Compliance Assessment](#5-system-coverage-and-compliance-assessment)
6. [Compliance Findings and Gaps](#6-compliance-findings-and-gaps)
7. [Exceptions and Escalation Process](#7-exceptions-and-escalation-process)
8. [Remediation and Action Plans](#8-remediation-and-action-plans)
9. [Compliance and Enforcement](#9-compliance-and-enforcement)
10. [Review and Approval History](#10-review-and-approval-history)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary intent of this report and its significance within the organization's technology risk management framework.*

This Password Policy Compliance Report documents the assessment, evaluation, and status of password policy adherence across all information systems and technology assets operated by [Organization Name]. The report is prepared in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.55**, which mandates that financial institutions maintain and enforce robust authentication controls commensurate with the sensitivity of systems and data accessed.

This report serves the following purposes:

- To provide evidence of [Organization Name]'s compliance posture with respect to password management practices as required under RMiT.
- To identify systems, applications, and processes that are compliant, partially compliant, or non-compliant with the current Password Policy.
- To document exception cases and the associated risk acceptance or remediation activities.
- To support internal audit, external regulatory examination, and management oversight functions.
- To fulfil annual reporting obligations as prescribed by the Chief Compliance Officer and the Board Risk Committee.

### 1.2 Scope

*Define the boundaries of this report, including which systems, organizational units, and personnel are covered.*

This report covers all technology assets, information systems, and user populations within the scope defined below:

**In Scope:**

| Scope Dimension | Coverage |
|---|---|
| **Organizational Units** | All business units, subsidiaries, and controlled entities of [Organization Name] |
| **User Categories** | All employees, contractors, vendors, and privileged users with access to [Organization Name] systems |
| **System Categories** | Core banking systems, customer-facing applications, internal business applications, infrastructure components, cloud platforms, and third-party integrated systems |
| **Environments** | Production, User Acceptance Testing (UAT), staging, and development environments where sensitive or production-equivalent data is handled |
| **Geographic Scope** | All [Organization Name] operations within Malaysia and any offshore operations with access to Malaysian systems |

**Out of Scope:**

| Exclusion | Rationale |
|---|---|
| [System/Entity Name] | [Justification for exclusion, e.g., managed by a third party under separate SLA with equivalent controls] |
| [System/Entity Name] | [Justification for exclusion] |

### 1.3 Reporting Period

*Specify the time period covered by this compliance assessment.*

| Field | Details |
|---|---|
| **Assessment Period** | [Start Date] to [End Date] |
| **Report Preparation Date** | [Report Date] |
| **Previous Report Reference** | [Previous Report Document ID, if applicable] |

---

## 2. Regulatory Framework and Obligations

### 2.1 Bank Negara Malaysia RMiT — Clause 10.55

*Summarize the relevant regulatory clause and its implications for the organization's password management practices.*

Bank Negara Malaysia's **Risk Management in Technology (RMiT)** policy establishes requirements for financial institutions to implement and maintain effective technology risk management practices. The following regulatory obligations are directly relevant to this report:

**RMiT Clause 10.55 — Authentication Controls**

RMiT Clause 10.55 requires that [Organization Name], as a licensed financial institution, implement authentication controls that are commensurate with the risk and sensitivity of systems and information assets. Key obligations include, but are not limited to:

- Implementation of password complexity, length, and expiry controls aligned with risk classification of systems.
- Prohibition of default, shared, or trivial passwords in production and sensitive environments.
- Enforcement of account lockout mechanisms to mitigate brute-force and credential-stuffing attacks.
- Maintenance of password history to prevent reuse of recent credentials.
- Application of multi-factor authentication (MFA) for privileged access and high-risk systems where passwords form part of the authentication chain.
- Documentation and periodic review of password policies to ensure continued relevance and effectiveness.

### 2.2 Related Regulatory and Standards References

*List all additional frameworks and standards that inform or complement the password policy requirements assessed in this report.*

| Reference | Description | Relevance |
|---|---|---|
| BNM RMiT (2020) | Risk Management in Technology Policy Document | Primary regulatory obligation |
| BNM RMiT Clause 10.53–10.57 | Access Control and Authentication | Authentication controls framework |
| Personal Data Protection Act 2010 (PDPA) | Malaysian data protection legislation | Password controls as safeguard for personal data |
| NACSA Cybersecurity Framework | National Cyber Security Agency guidelines | Baseline cybersecurity control standards |
| ISO/IEC 27001:2022 — Annex A.9 | Access Control | International benchmark for access management |
| NIST SP 800-63B | Digital Identity Guidelines | Password and authentication best practices |
| PCI DSS v4.0 — Requirement 8 | Identify Users and Authenticate Access | Applicable to cardholder data environments |
| [Additional Reference] | [Description] | [Relevance] |

### 2.3 Internal Policy Alignment

*Reference the organization's internal policies that operationalize the regulatory requirements.*

This report assesses compliance against the following [Organization Name] internal policy instruments:

| Internal Document | Document ID | Version | Effective Date |
|---|---|---|---|
| [Organization Name] Password Policy | [Doc ID] | [Version] | [Date] |
| [Organization Name] Access Control Policy | [Doc ID] | [Version] | [Date] |
| [Organization Name] Privileged Access Management Policy | [Doc ID] | [Version] | [Date] |
| [Organization Name] Information Security Policy | [Doc ID] | [Version] | [Date] |
| [Additional Policy] | [Doc ID] | [Version] | [Date] |

---

## 3. Roles and Responsibilities

### 3.1 Accountability Framework

*Define the governance structure for password policy ownership, implementation, and compliance monitoring. Use the RACI model: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

The following table defines the roles and responsibilities associated with the maintenance of this report and the underlying password policy compliance program:

| Activity | Chief Compliance Officer | Chief Information Security Officer | IT Security Team | System Owners | Business Unit Heads | Internal Audit | Board Risk Committee |
|---|---|---|---|---|---|---|---|
| Approve Password Policy | A | R | C | I | I | C | I |
| Define password standards and requirements | C | A | R | C | I | I | I |
| Implement password controls in systems | I | A | C | R | I | I | I |
| Monitor compliance against password policy | A | R | R | C | I | I | I |
| Conduct annual compliance assessment | A | C | R | I | C | C | I |
| Review and approve compliance report | A | C | I | I | I | C | I |
| Manage policy exceptions | A | R | C | I | C | C | I |
| Report compliance status to Board | R | C | I | I | I | C | A |
| Coordinate remediation of gaps | C | A | R | R | C | I | I |
| Perform independent audit of controls | I | C | C | I | I | A/R | I |

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 3.2 Role Descriptions

*Provide a brief description of each role's specific obligations in relation to password policy compliance.*

**Chief Compliance Officer (CCO)**

The CCO holds ultimate accountability for ensuring [Organization Name]'s compliance with BNM RMiT password management requirements. Responsibilities include:

- Commissioning and approving the annual Password Policy Compliance Report.
- Escalating material non-compliance findings to the Board Risk Committee.
- Ensuring that exception approvals are granted in accordance with the organization's risk appetite.
- Overseeing remediation timelines for identified compliance gaps.

**Chief Information Security Officer (CISO)**

The CISO is responsible for the operational delivery of password policy standards. Responsibilities include:

- Maintaining the organization's Password Policy and ensuring its alignment with regulatory requirements.
- Directing the IT Security Team in conducting compliance assessments.
- Reviewing technical findings and recommending remediation actions.
- Providing expert input on emerging authentication threats and control enhancements.

**IT Security Team**

The IT Security Team is responsible for the day-to-day execution of password policy controls. Responsibilities include:

- Conducting technical assessments of password configurations across in-scope systems.
- Identifying and documenting compliance gaps and exceptions.
- Implementing and verifying remediation actions.
- Maintaining evidence records for audit and regulatory review purposes.

**System Owners**

System Owners are accountable for the implementation and maintenance of password controls within their respective systems. Responsibilities include:

- Ensuring that password configuration settings comply with the organization's Password Policy.
- Facilitating access for compliance assessments and audits.
- Implementing remediation actions within agreed timelines.
- Raising exception requests where technical or operational constraints prevent full compliance.

**Business Unit Heads**

Business Unit Heads are responsible for ensuring that employees within their units adhere to password management practices. Responsibilities include:

- Communicating password policy requirements to staff.
- Reporting suspected policy violations to the IT Security Team.
- Supporting user awareness and training initiatives.

**Internal Audit**

Internal Audit provides independent assurance on the effectiveness of password policy controls. Responsibilities include:

- Conducting periodic independent audits of password management practices.
- Providing objective findings and recommendations to management.
- Tracking the closure of audit findings related to password compliance.

---

## 4. Password Policy Statements and Requirements

### 4.1 Password Complexity and Construction Requirements

*Document the specific technical password requirements mandated by the organization's Password Policy, against which compliance is assessed in this report.*

The following password construction standards apply across all in-scope systems, subject to the risk-tiered classification defined in Section 4.5:

| Requirement | Standard Users | Privileged Users | Service Accounts | Regulatory Basis |
|---|---|---|---|---|
| **Minimum Password Length** | [e.g., 12 characters] | [e.g., 16 characters] | [e.g., 24 characters] | RMiT 10.55 |
| **Maximum Password Length** | [e.g., 64 characters] | [e.g., 64 characters] | [e.g., 64 characters] | — |
| **Uppercase Letters Required** | Yes | Yes | Yes | RMiT 10.55 |
| **Lowercase Letters Required** | Yes | Yes | Yes | RMiT 10.55 |
| **Numeric Characters Required** | Yes | Yes | Yes | RMiT 10.55 |
| **Special Characters Required** | Yes | Yes | Yes | RMiT 10.55 |
| **Disallowed Patterns** | Dictionary words, username, sequential characters | Dictionary words, username, sequential characters | Rotated programmatically | RMiT 10.55 |
| **Password Blacklist Enforced** | Yes | Yes | Yes | NIST SP 800-63B |

### 4.2 Password Lifecycle Requirements

*Specify the requirements governing password validity periods, expiry, and renewal.*

| Requirement | Standard Users | Privileged Users | Service Accounts |
|---|---|---|---|
| **Maximum Password Age** | [e.g., 90 days] | [e.g., 60 days] | [e.g., 180 days or automated rotation] |
| **Minimum Password Age** | [e.g., 1 day] | [e.g., 1 day] | [N/A — automated] |
| **Password History** | [e.g., Last 12 passwords] | [e.g., Last 24 passwords] | [e.g., Last 12 passwords] |
| **Password Expiry Warning** | [e.g., 14 days prior] | [e.g., 14 days prior] | [e.g., Automated alert to owner] |
| **Forced Reset Trigger** | Initial login, suspected compromise | Initial login, suspected compromise, role change | Scheduled rotation, suspected compromise |

### 4.3 Account Lockout and Authentication Controls

*Document the account lockout parameters and related authentication safeguards.*

| Control | Configuration |
|---|---|
| **Maximum Failed Attempts Before Lockout** | [e.g., 5 attempts] |
| **Lockout Duration (Standard)** | [e.g., 30 minutes] |
| **Lockout Duration (Privileged Accounts)** | [e.g., Indefinite — requires administrator unlock] |
| **Lockout Reset Mechanism** | [e.g., Automated after duration / Helpdesk-assisted unlock with identity verification] |
| **Failed Attempt Logging** | Required — centralized SIEM ingestion |
| **Concurrent Session Restriction** | [e.g., Single session for privileged users] |
| **Idle Session Timeout** | [e.g., 15 minutes for standard users; 10 minutes for privileged users] |

### 4.4 Password Storage and Transmission Requirements

*Specify the technical standards for secure password handling.*

| Requirement | Standard |
|---|---|
| **Password Hashing Algorithm** | [e.g., bcrypt / Argon2id / PBKDF2 with SHA-256 — minimum work factor per current NIST guidance] |
| **Salting Requirement** | Mandatory — unique salt per credential |
| **Plaintext Storage** | Strictly prohibited |
| **Reversible Encryption Storage** | Prohibited except where technically mandated; requires CISO approval and documented exception |
| **Transmission Protocol** | TLS 1.2 minimum; TLS 1.3 preferred |
| **Password Logging** | Strictly prohibited in any application log, audit trail, or monitoring system |
| **Password Manager Usage** | Approved enterprise password managers permitted; personal/consumer-grade tools prohibited |

### 4.5 Risk-Tiered System Classification

*Define the system risk tiers used to determine the applicable level of password control stringency.*

[Organization Name] applies a risk-tiered approach to password policy enforcement, reflecting the varying sensitivity and criticality of systems:

| Tier | Classification | Examples | Additional Controls Required |
|---|---|---|---|
| **Tier 1 — Critical** | Systems processing highly sensitive financial, customer, or regulatory data | Core banking platform, payment processing, treasury systems | MFA mandatory; PAM tooling; session recording |
| **Tier 2 — High** | Systems with significant business impact or access to sensitive non-public data | HR systems, customer CRM, internal reporting platforms | MFA strongly recommended; enhanced monitoring |
| **Tier 3 — Medium** | Standard business applications with limited sensitive data exposure | Internal productivity tools, collaboration platforms | Standard password policy; periodic access reviews |
| **Tier 4 — Low** | Low-risk, non-sensitive systems | Non-production development environments (without production data) | Baseline password policy |

### 4.6 Multi-Factor Authentication Requirements

*Document the MFA policy requirements as they interact with password-based authentication.*

In accordance with RMiT Clause 10.55 and [Organization Name]'s Access Control Policy, multi-factor authentication requirements are as follows:

| User Category / System | MFA Required | Approved MFA Methods |
|---|---|---|
| All privileged/administrator accounts | Mandatory | [e.g., Hardware token, authenticator app, biometric] |
| Remote access (VPN, remote desktop) | Mandatory | [e.g., Authenticator app, SMS OTP (fallback only)] |
| Customer-facing digital banking | Mandatory | [e.g., TAC, hardware token, biometric] |
| Tier 1 internal systems | Mandatory | [e.g., Authenticator app, hardware token] |
| Tier 2 internal systems | Mandatory | [e.g., Authenticator app] |
| Tier 3 internal systems | Recommended | [e.g., Authenticator app] |
| Tier 4 internal systems | Optional | [N/A] |

---

## 5. System Coverage and Compliance Assessment

### 5.1 System Inventory and Coverage Summary

*Provide an overview of the systems assessed during the reporting period, including coverage statistics.*

*This section should summarize the total population of in-scope systems and the proportion assessed. Document any systems excluded from assessment and the rationale.*

**Assessment Coverage Summary:**

| Metric | Value |
|---|---|
| Total In-Scope Systems | [Total Count] |
| Systems Fully Assessed | [Count] |
| Systems Partially Assessed | [Count] |
| Systems Not Assessed (with justification) | [Count] |
| Assessment Coverage Rate | [Percentage]% |
| Target Coverage Rate | [e.g., 100% for Tier 1 & 2; 80% for Tier 3 & 4] |

### 5.2 Systems Assessed — Detail

*List each system assessed during the review period with its classification tier, assessment method, and overall compliance status.*

| System Name | System ID | Tier | System Owner | Assessment Method | Assessment Date | Overall Status |
|---|---|---|---|---|---|---|
| [System Name] | [SYS-001] | Tier 1 | [Owner Name/Team] | Automated scan + manual review | [Date] | Compliant / Partially Compliant / Non-Compliant |
| [System Name] | [SYS-002] | Tier 1 | [Owner Name/Team] | Automated scan | [Date] | Compliant / Partially Compliant / Non-Compliant |
| [System Name] | [SYS-003] | Tier 2 | [Owner Name/Team] | Manual review | [Date] | Compliant / Partially Compliant / Non-Compliant |
| [System Name] | [SYS-004] | Tier 2 | [Owner Name/Team] | Configuration review | [Date] | Compliant / Partially Compliant / Non-Compliant |
| [System Name] | [SYS-005] | Tier 3 | [Owner Name/Team] | Automated scan | [Date] | Compliant / Partially Compliant / Non-Compliant |
| [Add rows as required] | | | | | | |

**Status Legend:**
- **Compliant** — All assessed password policy requirements met.
- **Partially Compliant** — Most requirements met; minor gaps identified with low residual risk; remediation plan in place.
- **Non-Compliant** — Material gaps identified; remediation required; may require formal exception or escalation.

### 5.3 Assessment Methodology

*Describe the methods used to assess password policy compliance across in-scope systems.*

The compliance assessment was conducted using the following approaches, applied proportionately to the risk tier of each system:

**5.3.1 Automated Configuration Scanning**

Automated tools were used to evaluate password policy configuration settings against defined benchmarks. The following tools were employed during this assessment period:

| Tool | Purpose | Systems Assessed |
|---|---|---|
| [Tool Name, e.g., CIS-CAT Pro] | Configuration benchmark assessment | [Systems] |
| [Tool Name, e.g., Nessus / Tenable.sc] | Vulnerability and configuration scan | [Systems] |
| [Tool Name] | Active Directory Group Policy assessment | [Systems] |
| [Tool Name] | Cloud platform identity configuration review | [Systems] |

**5.3.2 Manual Configuration Review**

For systems not amenable to automated scanning, manual configuration reviews were conducted by the IT Security Team. Evidence collected included:

- Screenshots of system authentication configuration settings.
- Exported Group Policy Objects (GPOs) or equivalent configuration files.
- System administrator interview records.
- Configuration documentation provided by system owners.

**5.3.3 User Sample Testing**

A sample of user accounts was reviewed to validate that enforced controls reflect intended policy settings. The sampling methodology was as follows:

| Account Category | Sample Size | Selection Method |
|---|---|---|
| Standard user accounts | [Count] ([Percentage]% of population) | [e.g., Random stratified sample] |
| Privileged/administrator accounts | [Count] ([Percentage]% of population) | [e.g., 100% population review] |
| Service accounts | [Count] ([Percentage]% of population) | [e.g., All active service accounts] |
| Vendor/contractor accounts | [Count] ([Percentage]% of population) | [e.g., Random sample] |

### 5.4 Compliance Results Summary

*Present an aggregate summary of compliance results across all assessed systems.*

**Overall Compliance by Requirement Area:**

| Requirement Area | Total Systems | Compliant | Partially Compliant | Non-Compliant | Compliance Rate |
|---|---|---|---|---|---|
| Password Complexity | [n] | [n] | [n] | [n] | [%] |
| Password Length (Minimum) | [n] | [n] | [n] | [n] | [%] |
| Password Expiry / Maximum Age | [n] | [n] | [n] | [n] | [%] |
| Password History Enforcement | [n] | [n] | [n] | [n] | [%] |
| Account Lockout | [n] | [n] | [n] | [n] | [%] |
| Idle Session Timeout | [n] | [n] | [n] | [n] | [%] |
| MFA Implementation | [n] | [n] | [n] | [n] | [%] |
| Secure Password Storage | [n] | [n] | [n] | [n] | [%] |
| Service Account Controls | [n] | [n] | [n] | [n] | [%] |
| **Overall** | **[n]** | **[n]** | **[n]** | **[n]** | **[%]** |

**Compliance by System Tier:**

| Tier | Total Systems | Compliant | Partially Compliant | Non-Compliant | Compliance Rate |
|---|---|---|---|---|---|
| Tier 1 — Critical | [n] | [n] | [n] | [n] | [%] |
| Tier 2 — High | [n] | [n] | [n] | [n] | [%] |
| Tier 3 — Medium | [n] | [n] | [n] | [n] | [%] |
| Tier 4 — Low | [n] | [n] | [n] | [n] | [%] |
| **Total** | **[n]** | **[n]** | **[n]** | **[n]** | **[%]** |

---

## 6. Compliance Findings and Gaps

### 6.1 Summary of Findings

*Provide an executive-level summary of significant compliance findings identified during the assessment period.*

*This section should be written after completing the detailed findings below and should summarize the most material gaps, trends, and risk implications for senior management and regulatory review.*

During the assessment period covering [Start Date] to [End Date], [Count] compliance findings were identified across [Count] systems. The findings are summarized as follows:

| Severity | Count | Description |
|---|---|---|
| **Critical** | [Count] | Findings representing immediate and material risk; immediate remediation required |
| **High** | [Count] | Significant gaps with elevated risk; remediation required within 30 days |
| **Medium** | [Count] | Moderate gaps; remediation required within 90 days |
| **Low** | [Count] | Minor deviations; remediation required within 180 days or at next scheduled maintenance |
| **Informational** | [Count] | Observations and recommendations for improvement; no mandatory remediation timeline |
| **Total** | **[Count]** | |

**Compared to Prior Period:**

| Metric | Current Period | Prior Period | Trend |
|---|---|---|---|
| Total Findings | [Count] | [Count] | [Improved / Deteriorated / Stable] |
| Critical Findings | [Count] | [Count] | [Improved / Deteriorated / Stable] |
| Overall Compliance Rate | [%] | [%] | [Improved / Deteriorated / Stable] |
| Open Findings from Prior Period (Closed) | [Count] | — | — |
| Open Findings from Prior Period (Carried Forward) | [Count] | — | — |

### 6.2 Detailed Findings Register

*Document each individual compliance finding in sufficient detail to support audit review and remediation tracking.*

| Finding ID | System | Tier | Requirement Area | Finding Description | Root Cause | Risk Rating | Recommended Action | Target Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| [FIND-001] | [System Name] | [Tier] | [e.g., Password Complexity] | [Detailed description of the gap identified] | [Root cause analysis] | Critical / High / Medium / Low | [Recommended remediation action] | [Date] | Open / In Progress / Closed |
| [FIND-002] | [System Name] | [Tier] | [e.g., Account Lockout] | [Detailed description] | [Root cause] | [Rating] | [Recommendation] | [Date] | Open / In Progress / Closed |
| [FIND-003] | [System Name] | [Tier] | [e.g., MFA] | [Detailed description] | [Root cause] | [Rating] | [Recommendation] | [Date] | Open / In Progress / Closed |
| [Add rows as required] | | | | | | | | | |

### 6.3 Notable Findings — Narrative Detail

*For Critical and High severity findings, provide additional narrative context, including business impact and risk analysis.*

#### Finding [FIND-001]: [Finding Title]

**System:** [System Name] | **Tier:** [Tier] | **Severity:** [Rating]

**Description:** [Provide a detailed description of the non-compliance identified, including specific configuration settings observed versus required.]

**Evidence:** [Reference to evidence collected, e.g., screenshot reference, configuration export file name, audit log reference.]

**Business Impact:** [Describe the potential business, regulatory, and reputational impact if this finding is not remediated. Consider the likelihood and consequence of exploitation or regulatory scrutiny.]

**Root Cause:** [Describe the underlying cause of the gap — technical, process, governance, or resourcing.]

**Recommended Remediation:** [Specific, actionable remediation steps.]

**Target Remediation Date:** [Date]

**Accountable Owner:** [Name / Role]

---

#### Finding [FIND-002]: [Finding Title]

**System:** [System Name] | **Tier:** [Tier] | **Severity:** [Rating]

**Description:** [Detailed description.]

**Evidence:** [Evidence reference.]

**Business Impact:** [Impact description.]

**Root Cause:** [Root cause description.]

**Recommended Remediation:** [Remediation steps.]

**Target Remediation Date:** [Date]

**Accountable Owner:** [Name / Role]

---

*[Repeat for each Critical and High severity finding. Medium and Low findings may be summarized in the findings register table above.]*

### 6.4 Carry-Forward Findings from Prior Period

*Document findings from the previous assessment period that have not yet been fully remediated.*

| Finding ID (Original) | System | Original Risk Rating | Original Finding Summary | Remediation Status | Updated Target Date | Escalation Required |
|---|---|---|---|---|---|---|
| [FIND-YYYY-001] | [System] | [Rating] | [Summary] | [In Progress / Delayed — reason] | [Date] | Yes / No |
| [FIND-YYYY-002] | [System] | [Rating] | [Summary] | [Status] | [Date] | Yes / No |
| [Add rows as required] | | | | | | |

---

## 7. Exceptions and Escalation Process

### 7.1 Exception Policy Framework

*Summarize the organization's approach to managing situations where full compliance with the Password Policy cannot be achieved, and how such exceptions are formally managed.*

[Organization Name] recognizes that in certain circumstances, full compliance with the Password Policy may not be immediately achievable due to technical constraints, vendor limitations, legacy system architecture, or transitional operational requirements. In such cases, a formal exception management process must be followed to ensure that risks are explicitly acknowledged, managed, and periodically reviewed.

All exceptions must be:

- Formally documented and approved by the appropriate authority prior to the exception period commencing.
- Accompanied by documented compensating controls that mitigate the risk created by the exception.
- Assigned a defined expiry date and an accountable owner responsible for remediation.
- Reviewed at a minimum annually or upon any material change to the underlying system or risk context.
- Reported to the Chief Compliance Officer and, where material, to the Board Risk Committee.

### 7.2 Exception Approval Authority Matrix

*Define the approval authorities required for different categories of exception based on risk severity.*

| Exception Risk Level | Definition | Required Approver(s) | Review Frequency |
|---|---|---|---|
| **Critical** | Exception exposes organization to significant regulatory, financial, or reputational risk | CISO + CCO + CEO | Quarterly |
| **High** | Exception creates elevated risk to sensitive systems or data | CISO + CCO | Bi-annually |
| **Medium** | Exception represents moderate deviation with acceptable residual risk | CISO | Annually |
| **Low** | Minor deviation with negligible risk impact | IT Security Manager | Annually |

### 7.3 Current Exception Register

*Document all active exceptions to the Password Policy in effect during the reporting period.*

| Exception ID | System | Tier | Requirement Excepted | Justification | Compensating Controls | Risk Level | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [System Name] | [Tier] | [e.g., Password complexity — vendor limitation] | [Detailed justification, e.g., Legacy system does not support special characters in passwords due to vendor software constraint. Vendor upgrade planned for Q[X] [Year].] | [e.g., Network segmentation; enhanced monitoring; IP whitelisting; MFA enforced at perimeter layer] | [Risk Level] | [Approver Name / Role] | [Date] | [Date] | Active / Expired / Under Review |
| [EXC-002] | [System Name] | [Tier] | [Requirement] | [Justification] | [Compensating controls] | [Risk Level] | [Approver] | [Date] | [Date] | Active / Expired / Under Review |
| [Add rows as required] | | | | | | | | | | |

**Exception Summary:**

| Status | Count |
|---|---|
| Active Exceptions | [Count] |
| Expired Exceptions (Pending Renewal or Closure) | [Count] |
| Exceptions Closed This Period | [Count] |
| Total Exceptions | [Count] |

### 7.4 Exception Escalation Process

*Describe the escalation pathway for exceptions that are approaching expiry, unresolved, or where compensating controls are deemed insufficient.*

The following escalation process applies to the management of password policy exceptions:

1. **Identification of Escalation Trigger:** The IT Security Team monitors exception expiry dates and compensating control effectiveness on an ongoing basis. An escalation trigger is activated when:
   - An exception is within [e.g., 30 days] of its expiry date without a confirmed renewal or remediation plan.
   - A compensating control is identified as ineffective or has been removed.
   - A material change in the risk environment makes the accepted residual risk no longer acceptable.
   - A regulatory finding or internal audit observation references an active exception.

2. **Initial Escalation:** The IT Security Team escalates to the System Owner and the relevant Business Unit Head, requiring a remediation update or renewal request within [e.g., 5 business days].

3. **Second-Level Escalation:** If no satisfactory response is received, the matter is escalated to the CISO, who may invoke enhanced monitoring, access restriction, or system quarantine as interim risk controls.

4. **Executive Escalation:** Material exceptions that cannot be resolved within [e.g., 30 days] of the second-level escalation, or that affect Tier 1 systems, are escalated to the CCO and reported to the Board Risk Committee at the next scheduled meeting.

5. **Regulatory Notification:** Where an unresolved exception represents a material breach of BNM RMiT requirements, the CCO shall assess whether regulatory notification obligations are triggered under the applicable BNM reporting framework.

### 7.5 Exceptions Closed During Reporting Period

*Document exceptions that were formally closed during the current reporting period, either through remediation or expiry.*

| Exception ID | System | Original Justification | Closure Date | Closure Reason | Verified By |
|---|---|---|---|---|---|
| [EXC-YYYY-001] | [System] | [Summary of original exception] | [Date] | [e.g., System upgraded; policy requirement now met] | [Name / Role] |
| [Add rows as required] | | | | | |

---

## 8. Remediation and Action Plans

### 8.1 Remediation Status Overview

*Provide a consolidated view of remediation activities planned or in progress arising from current and prior period findings.*

| Priority | Total Actions | Completed | In Progress | Not Started | Overdue |
|---|---|---|---|---|---|
| Critical | [n] | [n] | [n] | [n] | [n] |
| High | [n] | [n] | [n] | [n] | [n] |
| Medium | [n] | [n] | [n] | [n] | [n] |
| Low | [n] | [n] | [n] | [n] | [n] |
| **Total** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** |

### 8.2 Remediation Action Plan — Detail

*Document specific remediation actions for each open finding, with clear ownership and timelines.*

| Action ID | Finding ID | System | Action Description | Accountable Owner | Supporting Resources | Target Completion Date | Actual Completion Date | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| [ACT-001] | [FIND-001] | [System] | [Specific remediation action, e.g., Update Active Directory Group Policy to enforce minimum 12-character password length for all users in OU=[X]] | [Name / Role] | [Team / Budget / Tools required] | [Date] | [Date or N/A] | Not Started / In Progress / Completed / Overdue | [Notes] |
| [ACT-002] | [FIND-002] | [System] | [Action description] | [Owner] | [Resources] | [Date] | [Date] | [Status] | [Notes] |
| [Add rows as required] | | | | | | | | | |

### 8.3 Systemic Issues and Strategic Recommendations

*Identify any systemic or recurring issues identified across multiple systems or assessment periods, and recommend strategic improvements.*

*This section should highlight patterns that suggest underlying process, governance, or tooling deficiencies that cannot be addressed through individual system-level remediation alone.*

| Issue | Systems Affected | Root Cause Assessment | Strategic Recommendation | Proposed Timeline | Accountable Owner |
|---|---|---|---|---|---|
| [e.g., Legacy systems consistently unable to meet password complexity requirements due to vendor constraints] | [Systems] | [Root cause, e.g., Aging vendor platforms without modern authentication support; lack of vendor management oversight] | [e.g., Develop a legacy system modernisation roadmap with mandatory authentication upgrade as a gate criteria; include PAM tooling requirements in all new vendor contracts] | [Timeline] | [Owner] |
| [Issue description] | [Systems] | [Root cause] | [Recommendation] | [Timeline] | [Owner] |

---

## 9. Compliance and Enforcement

### 9.1 Enforcement Framework

*Describe the mechanisms by which [Organization Name] enforces adherence to the Password Policy and the consequences for non-compliance.*

[Organization Name] enforces the Password Policy through a combination of technical controls, process controls, and disciplinary measures. The enforcement framework is designed to ensure that non-compliance is identified promptly, escalated appropriately, and remediated in a timely manner.

**Technical Enforcement Controls:**

The following technical controls are deployed to enforce password policy requirements at the system level:

| Control | Description | Coverage |
|---|---|---|
| Identity and Access Management (IAM) Platform | Centrally enforces password complexity, expiry, history, and lockout policies | [Systems covered] |
| Active Directory Group Policy | Enforces password settings for Windows domain-joined systems | [Systems covered] |
| Privileged Access Management (PAM) Tool | Manages and rotates privileged account credentials; enforces session controls | [Systems covered] |
| Password Vault | Securely stores and manages service account credentials with automated rotation | [Systems covered] |
| Security Information and Event Management (SIEM) | Monitors for failed authentication events, lockout triggers, and policy bypass attempts | [Systems covered] |
| Multi-Factor Authentication Platform | Enforces MFA requirements for in-scope access scenarios | [Systems covered] |

**Process Enforcement Controls:**

- Periodic user access reviews validate that active accounts comply with password policy requirements.
- Onboarding and offboarding procedures include verification of password reset for new accounts and immediate disabling of accounts upon departure.
- Vendor and contractor access is subject to the same password policy requirements as employees, enforced through contractual obligations and access provisioning controls.
- Annual compliance assessments, as documented in this report, provide management oversight of technical control effectiveness.

### 9.2 Disciplinary Consequences for Non-Compliance

*Define the consequences for individuals who breach the Password Policy.*

Non-compliance with the Password Policy by employees, contractors, or vendors may result in the following consequences, applied proportionately to the nature and severity of the breach:

| Breach Type | Initial Response | Escalated Response |
|---|---|---|
| Accidental or minor breach (e.g., sharing password once) | Documented counselling; mandatory awareness training | Formal warning if repeated |
| Deliberate circumvention of technical controls | Formal warning; temporary suspension of system access | Disciplinary action up to and including termination |
| Sharing credentials with unauthorized parties | Immediate suspension of access; investigation | Disciplinary action; potential regulatory reporting |
| Deliberate bypass of MFA controls | Immediate suspension; investigation | Termination; potential legal action |
| Vendor/Contractor breach | Notice to vendor; access revocation | Contract termination; potential regulatory reporting |

### 9.3 Compliance Monitoring and Reporting

*Describe the ongoing monitoring activities that support continuous compliance between formal annual assessments.*

| Monitoring Activity | Frequency | Responsible Party | Reporting Destination |
|---|---|---|---|
| Automated password policy configuration scan | [e.g., Monthly] | IT Security Team | CISO |
| SIEM alert review — authentication anomalies | Daily | Security Operations Centre | IT Security Team |
| Privileged account access review | Quarterly | IT Security Team | CISO |
| Service account credential rotation verification | [e.g., Monthly / Per schedule] | IT Security Team | System Owners |
| User access review (all accounts) | Semi-annual | System Owners | IT Security Team |
| Exception register review | Quarterly | IT Security Team | CISO / CCO |
| Annual Password Policy Compliance Report | Annual | IT Security Team | CCO / Board Risk Committee |

### 9.4 Regulatory Reporting Obligations

*Summarize the organization's obligations to report password policy-related incidents or material non-compliance to BNM.*

In the event that a material breach of password policy results in, or is likely to result in, unauthorized access to customer data, financial systems, or other sensitive assets, [Organization Name] is obligated to assess its reporting obligations under the following instruments:

| Obligation | Trigger | Reporting Authority | Deadline |
|---|---|---|---|
| BNM Incident Reporting | Material technology incident resulting from authentication control failure | Bank Negara Malaysia | As per BNM incident reporting guidelines |
| PDPA Notification | Personal data breach resulting from credential compromise | Personal Data Protection Commissioner | As per PDPA requirements |
| [Other obligation] | [Trigger] | [Authority] | [Deadline] |

---

## 10. Review and Approval History

### 10.1 Document Version History

*Maintain a complete chronological record of all versions of this document, including the nature of changes made in each revision.*

| Version | Date | Author | Role | Changes Made | Reviewed By |
|---|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Role] | Initial document creation | [Reviewer Name] |
| [1.1] | [Date] | [Author Name] | [Role] | [Description of changes] | [Reviewer Name] |
| [2.0] | [Date] | [Author Name] | [Role] | [Description of major revision] | [Reviewer Name] |
| [Add rows as required] | | | | | |

### 10.2 Annual Review Schedule

*Document the scheduled review dates and the outcome of each annual review.*

| Review Cycle | Scheduled Review Date | Actual Review Date | Review Outcome | Reviewer | Approved For Release |
|---|---|---|---|---|---|
| [Year] Annual Review | [Date] | [Date] | [e.g., No material changes required / Updated — see version history] | [Name / Role] | Yes / No — [Reason if No] |
| [Year] Annual Review | [Date] | [Date] | [Outcome] | [Name / Role] | Yes / No |
| [Add rows as required] | | | | | |

### 10.3 Approval Sign-Off

*Record the formal approval of this document by all required signatories.*

*This section must be completed and signed prior to the document being issued or submitted for regulatory review.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name] — [Title] | _________________________ | [Date] |
| Reviewed By (IT Security) | [Name] — Chief Information Security Officer | _________________________ | [Date] |
| Reviewed By (Internal Audit) | [Name] — Head of Internal Audit | _________________________ | [Date] |
| Approved By | [Name] — Chief Compliance Officer | _________________________ | [Date] |
| Noted By | [Name] — Chief Executive Officer | _________________________ | [Date] |
| Board Acknowledgement | [Name] — Chairman, Board Risk Committee | _________________________ | [Date] |

---

## 11. References

*List all regulatory, standards, and internal documents referenced in this report.*

### 11.1 Regulatory References

| Reference | Title | Issuing Authority | Version / Date |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Applicable version/date] |
| BNM RMiT — Clause 10.55 | Authentication Controls | Bank Negara Malaysia | [Applicable version/date] |
| BNM RMiT — Clause 10.53–10.57 | Access Control and Authentication (full section) | Bank Negara Malaysia | [Applicable version/date] |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | 2010 (as amended) |
| NACSA Cybersecurity Framework | National Cybersecurity Framework | NACSA | [Applicable version/date] |

### 11.2 Standards References

| Reference | Title | Issuing Body | Version |
|---|---|---|---|
| ISO/IEC 27001:2022 | Information security management systems — Requirements | ISO/IEC | 2022 |
| ISO/IEC 27002:2022 — Control 5.17 | Authentication information | ISO/IEC | 2022 |
| NIST SP 800-63B | Digital Identity Guidelines: Authentication and Lifecycle Management | NIST | [Applicable revision] |
| PCI DSS v4.0 — Requirement 8 | Identify Users and Authenticate Access to System Components | PCI SSC | 4.0 |
| CIS Controls v8 — Control 5 | Account Management | CIS | 8 |

### 11.3 Internal Document References

| Document Title | Document ID | Version |
|---|---|---|
| [Organization Name] Password Policy | [Doc ID] | [Version] |
| [Organization Name] Access Control Policy | [Doc ID] | [Version] |
| [Organization Name] Privileged Access Management Policy | [Doc ID] | [Version] |
| [Organization Name] Information Security Policy | [Doc ID] | [Version] |
| [Organization Name] Incident Response Policy | [Doc ID] | [Version] |
| [Organization Name] Technology Risk Management Framework | [Doc ID] | [Version] |
| Prior Year Password Policy Compliance Report | [Doc ID] | [Version] |
| [Additional Reference] | [Doc ID] | [Version] |

---

## 12. Appendices

### Appendix A — Password Policy Technical Configuration Benchmarks

*This appendix documents the specific technical configuration benchmarks used as the assessment baseline for each system type assessed in this report.*

**A.1 Windows Active Directory — Group Policy Password Settings**

| Setting | Required Value | Assessment Basis |
|---|---|---|
| Minimum password length | [e.g., 12 characters] | RMiT 10.55; [Org] Password Policy |
| Password must meet complexity requirements | Enabled | RMiT 10.55; [Org] Password Policy |
| Maximum password age | [e.g., 90 days] | [Org] Password Policy |
| Minimum password age | [e.g., 1 day] | [Org] Password Policy |
| Enforce password history | [e.g., 12 passwords remembered] | [Org] Password Policy |
| Account lockout threshold | [e.g., 5 invalid attempts] | RMiT 10.55; [Org] Password Policy |
| Account lockout duration | [e.g., 30 minutes] | [Org] Password Policy |
| Reset account lockout counter after | [e.g., 30 minutes] | [Org] Password Policy |

**A.2 Linux / Unix Systems**

| Setting | Required Value | Configuration File / Parameter |
|---|---|---|
| Minimum password length | [e.g., 12 characters] | [e.g., /etc/security/pwquality.conf — minlen] |
| Password complexity (uppercase) | [e.g., 1 character minimum] | [e.g., ucredit parameter] |
| Password complexity (lowercase) | [e.g., 1 character minimum] | [e.g., lcredit parameter] |
| Password complexity (numeric) | [e.g., 1 character minimum] | [e.g., dcredit parameter] |
| Password complexity (special) | [e.g., 1 character minimum] | [e.g., ocredit parameter] |
| Password history | [e.g., 12 passwords] | [e.g., /etc/pam.d/common-password — remember] |
| Maximum password age | [e.g., 90 days] | [e.g., /etc/login.defs — PASS_MAX_DAYS] |
| Account lockout threshold | [e.g., 5 attempts] | [e.g., /etc/pam.d/common-auth — pam_tally2] |

**A.3 Cloud Platform Identity Configurations**

| Platform | Requirement | Configuration Setting |
|---|---|---|
| [e.g., Microsoft Azure AD] | Password complexity | [e.g., Azure AD Password Protection — enabled] |
| [e.g., Microsoft Azure AD] | MFA enforcement | [e.g., Conditional Access Policy — MFA required for all users] |
| [e.g., AWS IAM] | Password policy | [e.g., IAM Account Password Policy — configured per benchmark] |
| [e.g., GCP / Google Workspace] | Password requirements | [e.g., Admin Console — Password Policy settings] |

---

### Appendix B — Evidence Register

*This appendix records the evidence items collected during the assessment to support findings and compliance conclusions.*

*Evidence must be retained in accordance with [Organization Name]'s records management policy and made available upon request by Internal Audit or regulators.*

| Evidence ID | Description | System | Collection Date | Collected By | Storage Location | Retention Period |
|---|---|---|---|---|---|---|
| [EVD-001] | [e.g., Active Directory Group Policy export — Production Domain] | [System] | [Date] | [Name] | [e.g., [Shared drive path / Document management system]] | [e.g., 7 years] |
| [EVD-002] | [e.g., Nessus scan report — Core Banking System] | [System] | [Date] | [Name] | [Storage location] | [Retention period] |
| [EVD-003] | [e.g., Screenshot — password policy configuration, System XYZ] | [System] | [Date] | [Name] | [Storage location] | [Retention period] |
| [Add rows as required] | | | | | | |

---

### Appendix C — Exception Request Template

*This appendix provides the standard template to be used when submitting a formal exception request to the Password Policy.*

---

**PASSWORD POLICY EXCEPTION REQUEST**

| Field | Details |
|---|---|
| **Exception Request ID** | [To be assigned by IT Security Team] |
| **Date of Request** | [Date] |
| **Requested By** | [Name, Role, Business Unit] |
| **System / Application Name** | [System Name] |
| **System Tier** | [Tier 1 / 2 / 3 / 4] |
| **System Owner** | [Name, Role] |

**Policy Requirement(s) for Which Exception is Requested:**

[Describe the specific password policy requirement(s) that cannot be met, referencing the relevant section of the Password Policy.]

**Justification for Exception:**

[Provide a detailed business or technical justification for the exception. Include the nature of the constraint preventing compliance (e.g., vendor limitation, legacy architecture, operational necessity) and why alternative compliant solutions are not feasible at this time.]

**Risk Assessment:**

| Risk Dimension | Assessment |
|---|---|
| Likelihood of exploitation | [High / Medium / Low — with rationale] |
| Consequence of exploitation | [High / Medium / Low — with rationale] |
| Overall residual risk level | [Critical / High / Medium / Low] |
| Risk accepted by | [Name / Role] |

**Proposed Compensating Controls:**

[List all compensating controls that will be implemented to mitigate the risk created by the exception. Each control should include the control description, implementation date, and the party responsible for maintaining the control.]

| Compensating Control | Implementation Date | Responsible Party |
|---|---|---|
| [Control description] | [Date] | [Name / Role] |
| [Control description] | [Date] | [Name / Role] |

**Requested Exception Period:**

| Start Date | End Date | Justification for Duration |
|---|---|---|
| [Date] | [Date] | [e.g., Until vendor upgrade scheduled for Q[X] [Year] is completed] |

**Remediation Plan:**

[Describe the plan and timeline to achieve full compliance with the excepted requirement, or confirm that the exception is permanent and state the reason.]

**Approvals:**

| Role | Name | Decision | Date |
|---|---|---|---|
| IT Security Manager | [Name] | Approved / Rejected / Refer to CISO | [Date] |
| CISO | [Name] | Approved / Rejected / Refer to CCO | [Date] |
| CCO | [Name] | Approved / Rejected | [Date] |

---

### Appendix D — Glossary of Terms

*Definitions of key terms and abbreviations used in this document.*

| Term / Abbreviation | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| CCO | Chief Compliance Officer |
| CISO | Chief Information Security Officer |
| IAM | Identity and Access Management |
| MFA | Multi-Factor Authentication — an authentication method requiring two or more verification factors |
| NACSA | National Cyber Security Agency of Malaysia |
| PAM | Privileged Access Management — tools and processes to control, monitor, and audit privileged account access |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing personal data processing |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| SIEM | Security Information and Event Management — a platform aggregating and analysing security event data |
| SOC | Security Operations Centre |
| TLS | Transport Layer Security — cryptographic protocol for securing communications |
| Tier 1 / 2 / 3 / 4 | System risk classification tiers as defined in Section 4.5 of this document |

---

### Appendix E — Assessment Tool Output Summary

*This appendix summarises the outputs from automated assessment tools used during the compliance review. Full tool outputs are retained as evidence per Appendix B.*

| Tool | Scan Date | Systems Assessed | Total Checks | Passed | Failed | Not Applicable | Report Reference |
|---|---|---|---|---|---|---|---|
| [Tool Name] | [Date] | [Systems] | [n] | [n] | [n] | [n] | [EVD-XXX] |
| [Tool Name] | [Date] | [Systems] | [n] | [n] | [n] | [n] | [EVD-XXX] |
| [Add rows as required] | | | | | | | |

---

### Appendix F — Distribution List

*Record the authorized recipients of this document.*

| Recipient Name | Role | Distribution Date | Method |
|---|---|---|---|
| [Name] | Chief Compliance Officer | [Date] | [e.g., Secure document portal / Physical copy] |
| [Name] | Chief Information Security Officer | [Date] | [Method] |
| [Name] | Chief Executive Officer | [Date] | [Method] |
| [Name] | Chairman, Board Risk Committee | [Date] | [Method] |
| [Name] | Head of Internal Audit | [Date] | [Method] |
| [Add rows as required] | | | |

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document Title** | Password Policy Compliance Report |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Compliance Officer |
| **Organization** | [Organization Name] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) — Clause 10.55 |

*This document is subject to annual review. The next scheduled review date is [Next Review Date]. All queries regarding this document should be directed to the Chief Compliance Officer at [Contact Details].*