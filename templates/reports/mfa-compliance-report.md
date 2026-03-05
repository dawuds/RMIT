# MFA Compliance Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., IAM-RPT-MFA-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Organization** | [Organization Name] |
| **Reporting Period** | [Quarter, e.g., Q1 2026 — 1 January 2026 to 31 March 2026] |
| **Last Review Date** | [DD Month YYYY] |
| **Next Review Date** | [DD Month YYYY] |
| **Approved By** | [Approved By — Name and Title] |

---

> **Handling Caveat:** This document is classified **Confidential**. It contains sensitive information regarding authentication controls and security posture. Distribution is restricted to authorised personnel on a need-to-know basis. Unauthorised disclosure is prohibited under [Organization Name]'s Information Security Policy and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Risk Ratings and Prioritisation](#5-risk-ratings-and-prioritisation)
6. [Recommendations and Action Items](#6-recommendations-and-action-items)
7. [Management Response](#7-management-response)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Executive Summary

*Provide a concise, senior-management-facing summary of the MFA compliance posture for the reporting period. Highlight overall adoption rates, material gaps, critical risks, and the trajectory since the last reporting cycle. This section should be self-contained and readable without reference to subsequent sections.*

### 1.1 Overall Compliance Status

| Indicator | Current Period | Previous Period | Trend |
|---|---|---|---|
| Overall MFA Adoption Rate (Critical Systems) | [XX]% | [XX]% | [↑ / ↓ / →] |
| Number of Critical Systems in Scope | [N] | [N] | [↑ / ↓ / →] |
| Number of Systems Fully MFA-Compliant | [N] | [N] | [↑ / ↓ / →] |
| Number of Systems with Exceptions | [N] | [N] | [↑ / ↓ / →] |
| Open High/Critical Risk Items | [N] | [N] | [↑ / ↓ / →] |
| Overdue Remediation Actions | [N] | [N] | [↑ / ↓ / →] |

### 1.2 Compliance Verdict

*State the overall compliance verdict for the reporting period. Use one of the following ratings and justify the selection.*

**Compliance Rating:** [Compliant / Substantially Compliant / Partially Compliant / Non-Compliant]

> [Provide 3–5 sentences summarising why this rating was assigned. Reference the most significant findings that influenced the verdict, including any systemic or high-risk gaps. Example: "For Q1 2026, [Organization Name] is assessed as Substantially Compliant with RMiT Clause 10.54. MFA adoption across Tier-1 critical systems stands at 94%, exceeding the internal target of 90%. However, two legacy core banking subsystems remain without MFA enforcement pending migration, representing a residual risk that is being managed under an approved exception framework."]

### 1.3 Key Highlights

- **Achievements:** [Summarise positive developments, e.g., new systems onboarded to MFA, reduced exceptions, completed remediations.]
- **Material Gaps:** [Summarise the most significant non-compliance areas identified this quarter.]
- **Escalations Required:** [List any items requiring Board/EXCO-level awareness or decision.]
- **Next Period Priorities:** [Briefly state the top 2–3 focus areas for the next quarter.]

---

## 2. Purpose and Scope

### 2.1 Purpose

This report documents the status of Multi-Factor Authentication (MFA) adoption and compliance across critical systems within [Organization Name] for the reporting period ending **[DD Month YYYY]**. It is prepared on a quarterly basis in accordance with the requirements of Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.54**, which mandates the implementation of strong authentication controls for access to critical systems and sensitive data.

The report serves the following purposes:

- To provide senior management and the Board with an accurate and current view of MFA compliance posture.
- To identify gaps, risks, and non-conformances against RMiT requirements and [Organization Name]'s internal MFA Policy.
- To track the status of remediation actions and drive accountability for outstanding items.
- To support internal audit, regulatory examination, and third-party assurance activities.
- To satisfy quarterly reporting obligations under [Organization Name]'s Technology Risk Management Framework.

### 2.2 Regulatory Context

This report is prepared with reference to the following regulatory instruments:

| Instrument | Issuing Authority | Relevant Clause(s) |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.54 |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia (BNM) | [Applicable Clauses] |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Communications and Digital | [Applicable Sections] |
| National Cyber Security Policy (NCSP) | NACSA / National Security Council | [Applicable Provisions] |
| [Organization Name] MFA Policy | [Organization Name] | [Internal Policy Reference] |
| [Organization Name] Access Control Policy | [Organization Name] | [Internal Policy Reference] |

### 2.3 Audience

This report is intended for the following audiences:

- Chief Information Security Officer (CISO)
- Chief Technology Officer (CTO) / Chief Information Officer (CIO)
- IAM Manager and IAM Team
- Technology Risk Management Committee
- Internal Audit
- Board Risk Committee (summary escalation where applicable)

---

## 3. Scope and Methodology

### 3.1 Reporting Period

*Specify the exact period covered by this report and any boundary conditions.*

- **Reporting Period:** [DD Month YYYY] to [DD Month YYYY] (e.g., 1 January 2026 to 31 March 2026)
- **Report Preparation Date:** [DD Month YYYY]
- **Prepared By:** [Name, Title, Team]

### 3.2 Systems in Scope

*List all critical systems assessed during this reporting period. "Critical systems" are defined per [Organization Name]'s System Criticality Classification Framework, aligned to RMiT Clause 10.54.*

The following system tiers are included in this report:

| Tier | Definition | Examples |
|---|---|---|
| Tier 1 — Critical | Systems whose failure or compromise would have severe financial, operational, or reputational impact | Core banking, payment switching, treasury systems |
| Tier 2 — Important | Systems supporting significant business functions | CRM, HR systems, reporting platforms |
| Tier 3 — Standard | General business systems | Productivity tools, collaboration platforms |

**In-scope systems for this period:**

| System ID | System Name | Owner | Tier | MFA Applicable | Assessment Completed |
|---|---|---|---|---|---|
| [SYS-001] | [Core Banking System] | [System Owner] | Tier 1 | Yes | Yes |
| [SYS-002] | [Internet Banking Portal] | [System Owner] | Tier 1 | Yes | Yes |
| [SYS-003] | [Treasury Management System] | [System Owner] | Tier 1 | Yes | Yes |
| [SYS-004] | [SWIFT / Payment Gateway] | [System Owner] | Tier 1 | Yes | Yes |
| [SYS-005] | [Active Directory / IAM Platform] | [System Owner] | Tier 1 | Yes | Yes |
| [SYS-006] | [Data Loss Prevention (DLP)] | [System Owner] | Tier 2 | Yes | Yes |
| [SYS-007] | [HR Management System] | [System Owner] | Tier 2 | Yes | [Yes/No] |
| [Add rows as required] | | | | | |

**Out-of-scope systems (with justification):**

| System ID | System Name | Reason for Exclusion | Approved By |
|---|---|---|---|
| [SYS-XXX] | [System Name] | [e.g., Decommissioned during period / Covered under separate assessment] | [Name, Date] |

### 3.3 Assessment Methodology

*Describe how compliance data was collected, validated, and assessed. Include data sources, tools used, and any limitations.*

The assessment was conducted using the following approach:

**Data Collection Methods:**

- **Automated telemetry:** MFA enforcement data extracted from [Identity Provider / IAM Platform, e.g., Microsoft Entra ID, Okta, CyberArk] via automated reports for the assessment period.
- **Configuration review:** Manual review of authentication configuration for systems where automated telemetry was unavailable or incomplete.
- **Privileged access review:** Targeted review of administrative and privileged accounts to verify MFA enforcement at elevated access levels.
- **Exception log review:** Review of the MFA Exception Register to validate all active exceptions are current, approved, and within their approved duration.
- **User attestation sampling:** [Describe any sampling of users or access logs for verification purposes.]

**Assessment Criteria:**

Compliance is assessed against:

1. RMiT Clause 10.54 — Strong authentication requirements.
2. [Organization Name] MFA Policy [Policy Reference] — Internal controls and thresholds.
3. Approved MFA Configuration Baseline [Baseline Document Reference].

**Limitations and Caveats:**

- [e.g., Automated telemetry from [System X] was unavailable for [period] due to [reason]. Manual review was substituted.]
- [e.g., Assessment of third-party-operated systems was based on vendor attestation letters; independent verification was not performed this period.]
- [Add any other material limitations that affect the completeness or accuracy of this report.]

---

## 4. Key Findings and Observations

*Document all material findings identified during the assessment period. Each finding should be clearly described, categorised, and linked to the applicable regulatory or policy requirement. Use one subsection per finding or group related findings by theme.*

### 4.1 Findings Summary

| Finding ID | Title | Affected System(s) | Risk Rating | Status | Finding Category |
|---|---|---|---|---|---|
| [FND-001] | [Finding Title] | [SYS-001] | Critical | Open | MFA Not Enforced |
| [FND-002] | [Finding Title] | [SYS-003, SYS-004] | High | In Remediation | Weak MFA Method |
| [FND-003] | [Finding Title] | [SYS-007] | Medium | Open | Exception Expired |
| [FND-004] | [Finding Title] | [Multiple] | Low | Closed | Policy Gap |
| [Add rows as required] | | | | | |

### 4.2 Detailed Findings

*For each finding, complete the structured finding record below. Copy the template block for each additional finding.*

---

**Finding ID:** [FND-001]

**Title:** [Descriptive title of the finding]

**Date Identified:** [DD Month YYYY]

**Regulatory Reference:** RMiT Clause 10.54 / [Organization Name] MFA Policy [Section]

**Affected System(s):** [System Name(s) and ID(s)]

**Finding Description:**
> [Provide a factual, precise description of the non-conformance or gap. Describe what was observed, what was expected per policy/regulation, and the delta between the two. Avoid speculative language.]

**Evidence / Basis of Finding:**
- [e.g., Configuration review on DD Month YYYY showed MFA enforcement policy was set to "Disabled" for the [Admin Accounts] group in [System Name].]
- [e.g., Authentication logs for the period showed [N] successful logins without a second factor being presented for [N] users.]

**Root Cause:**
> [State the root cause or contributing factors, where known. e.g., "Legacy application does not support modern authentication protocols; MFA enforcement relies on network-level controls which were misconfigured during a change window on [Date]."]

**Potential Impact:**
> [Describe the realistic adverse outcome if this gap is exploited or persists. Quantify where possible — e.g., number of privileged accounts exposed, sensitivity of data accessible.]

**Risk Rating:** [Critical / High / Medium / Low] — see Section 5 for rating criteria.

**Status:** [Open / In Remediation / Closed / Exception Approved]

---

### 4.3 Positive Observations

*Document noteworthy positive findings and control improvements observed during the period. Recognising good practice supports a balanced assurance view.*

- [e.g., MFA rollout to all Tier-1 privileged accounts was completed ahead of schedule, reducing the privileged account MFA gap from 12% to 0%.]
- [e.g., Phishing-resistant FIDO2/WebAuthn tokens were deployed to [N] users in the Internet Banking team, materially improving the strength of authentication factors in use.]
- [e.g., The MFA Exception Register was fully reviewed and reconciled, resulting in 3 previously stale exceptions being closed.]

---

## 5. Risk Ratings and Prioritisation

### 5.1 Risk Rating Criteria

*All findings are rated using the following standardised risk matrix, consistent with [Organization Name]'s Technology Risk Management Framework and RMiT risk management principles.*

#### Likelihood

| Rating | Description |
|---|---|
| **5 — Almost Certain** | Likely to occur within the current reporting period given existing controls |
| **4 — Likely** | Expected to occur within the next 12 months |
| **3 — Possible** | Could occur within the next 1–3 years |
| **2 — Unlikely** | Low probability; requires specific conditions to materialise |
| **1 — Rare** | Exceptional circumstances only |

#### Impact

| Rating | Description |
|---|---|
| **5 — Catastrophic** | Severe financial loss, regulatory sanction, systemic failure, or critical data breach |
| **4 — Major** | Significant financial loss, regulatory breach, or widespread service disruption |
| **3 — Moderate** | Moderate financial impact, partial service disruption, or localised data exposure |
| **2 — Minor** | Limited financial impact, minor service degradation |
| **1 — Negligible** | Minimal impact; no significant financial or operational consequence |

#### Risk Matrix

| | **1 — Rare** | **2 — Unlikely** | **3 — Possible** | **4 — Likely** | **5 — Almost Certain** |
|---|---|---|---|---|---|
| **5 — Catastrophic** | High | High | Critical | Critical | Critical |
| **4 — Major** | Medium | High | High | Critical | Critical |
| **3 — Moderate** | Low | Medium | High | High | Critical |
| **2 — Minor** | Low | Low | Medium | Medium | High |
| **1 — Negligible** | Low | Low | Low | Medium | Medium |

#### Risk Rating Thresholds

| Rating | Score Range | Required Action |
|---|---|---|
| **Critical** | 20–25 | Immediate escalation to CISO/CTO. Remediation plan required within 5 business days. Board Risk Committee notification. |
| **High** | 12–16 | Escalation to IAM Manager and Technology Risk. Remediation plan required within 15 business days. |
| **Medium** | 6–9 | Managed via the standard remediation tracker. Remediation within 30 business days. |
| **Low** | 1–4 | Logged and monitored. Remediation within 90 business days or next review cycle. |

### 5.2 Prioritised Risk Register

*All open findings are ranked below by risk rating and likelihood of exploitation to support prioritised remediation.*

| Priority | Finding ID | Title | Risk Rating | Likelihood | Impact | Risk Score | Target Remediation Date | Owner |
|---|---|---|---|---|---|---|---|---|
| 1 | [FND-001] | [Title] | Critical | [5] | [5] | [25] | [DD Month YYYY] | [Name] |
| 2 | [FND-002] | [Title] | High | [4] | [4] | [16] | [DD Month YYYY] | [Name] |
| 3 | [FND-003] | [Title] | Medium | [3] | [3] | [9] | [DD Month YYYY] | [Name] |
| 4 | [FND-004] | [Title] | Low | [2] | [2] | [4] | [DD Month YYYY] | [Name] |

### 5.3 Exception Register Summary

*List all active MFA exceptions as at the reporting date. All exceptions must be formally approved and subject to compensating controls.*

| Exception ID | System / User Group | Reason for Exception | Compensating Controls | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|
| [EXC-001] | [System / Group Name] | [e.g., Legacy system; MFA not technically supported] | [e.g., Network isolation, enhanced monitoring, PAM controls] | [Name, Title] | [DD Month YYYY] | [DD Month YYYY] | [Active / Expired / Pending Renewal] |
| [Add rows] | | | | | | | |

---

## 6. Recommendations and Action Items

*Provide specific, actionable recommendations for each open finding. Recommendations should be risk-based, technically feasible, and tied to clear ownership and timelines. Where multiple findings share a root cause, consolidate recommendations where appropriate.*

### 6.1 Recommendations Summary

| Rec. ID | Related Finding(s) | Recommendation | Priority | Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| [REC-001] | [FND-001] | [Brief recommendation title] | Critical | [Name/Team] | [DD Month YYYY] | [Not Started / In Progress / Completed] |
| [REC-002] | [FND-002, FND-003] | [Brief recommendation title] | High | [Name/Team] | [DD Month YYYY] | [Not Started / In Progress / Completed] |
| [REC-003] | [FND-004] | [Brief recommendation title] | Medium | [Name/Team] | [DD Month YYYY] | [Not Started / In Progress / Completed] |

### 6.2 Detailed Recommendations

*For each recommendation, provide the detail required for successful implementation.*

---

**Recommendation ID:** [REC-001]

**Related Finding(s):** [FND-001]

**Recommendation Title:** [Descriptive title]

**Detailed Recommendation:**
> [Describe the recommended action in full. Be specific about what must be done, by whom, and how success will be measured. Include technical specifics where relevant, e.g., "Enable MFA enforcement via Conditional Access Policy [Policy Name] in [IAM Platform] for all accounts with access to [System Name]. Configure the policy to require phishing-resistant authentication methods (FIDO2 or Certificate-Based Authentication) for administrative roles and TOTP as a minimum for standard users."]

**Acceptance Criteria:**
- [ ] [Measurable criterion 1, e.g., MFA enforcement confirmed active for 100% of accounts in [System Name] via automated policy report.]
- [ ] [Measurable criterion 2, e.g., No accounts with active access found in exception register without valid approval.]
- [ ] [Measurable criterion 3]

**Assigned To:** [Name, Title, Team]

**Target Completion Date:** [DD Month YYYY]

**Escalation Path (if delayed):** [Name and Title of escalation contact]

---

### 6.3 Remediation Progress — Prior Period Actions

*Track the status of recommendations and actions raised in previous quarterly reports.*

| Rec. ID (Original) | Original Report Period | Recommendation | Original Target Date | Revised Target Date | Current Status | Evidence of Completion |
|---|---|---|---|---|---|---|
| [REC-P1-001] | [Q4 2025] | [Recommendation title] | [DD Month YYYY] | [DD Month YYYY] | [In Progress / Completed / Overdue] | [Reference to evidence, e.g., Change ticket, screenshot, attestation] |
| [Add rows] | | | | | | |

---

## 7. Management Response

*This section records the formal response from system and process owners to the findings and recommendations raised in this report. Responses must be completed prior to report finalisation and sign-off.*

### 7.1 Response Summary

*IAM Manager's commentary on the overall findings and organisational commitment to remediation.*

> [IAM Manager to provide a concise management response, typically 1–2 paragraphs. Should acknowledge the findings, provide context where relevant, confirm organisational commitment to the remediation plan, and note any material constraints (resource, budget, technical complexity) that may affect timelines. Example: "Management accepts all findings raised in this report. The Critical finding [FND-001] is under active remediation with a dedicated project team assigned as at [Date]. A temporary compensating control — enhanced privileged session monitoring — has been activated in the interim. We are confident that the remediation plan for all High and Critical findings will be executed within the agreed timelines."]

### 7.2 Individual Finding Responses

| Finding ID | Management Response | Agreed Remediation Date | Responsible Owner | Response Date |
|---|---|---|---|---|
| [FND-001] | [Management agrees with the finding. Remediation is [in progress/planned]. [Additional context if applicable.]] | [DD Month YYYY] | [Name, Title] | [DD Month YYYY] |
| [FND-002] | [Management agrees / partially agrees / disagrees with the finding. [Rationale and planned response.]] | [DD Month YYYY] | [Name, Title] | [DD Month YYYY] |
| [FND-003] | | [DD Month YYYY] | [Name, Title] | [DD Month YYYY] |

### 7.3 Escalations and Decisions Required

*List any items where a management decision, resource allocation, or formal risk acceptance is required to progress remediation.*

| Item | Description | Decision Required | Submitted To | Target Decision Date |
|---|---|---|---|---|
| [ESC-001] | [e.g., Legacy system MFA exception renewal for [System Name] — technical remediation requires budget approval for migration project.] | [e.g., Approval of MYR [X] migration budget / Extension of exception for 2 quarters.] | [Name, Committee] | [DD Month YYYY] |
| [Add rows] | | | | |

---

## 8. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in MFA compliance monitoring, reporting, and remediation.*

### 8.1 RACI Matrix

*Key: **R** — Responsible (does the work) | **A** — Accountable (owns the outcome) | **C** — Consulted (provides input) | **I** — Informed (kept up to date)*

| Activity | IAM Manager | CISO | System Owners | Technology Risk | Internal Audit | IT Operations | CTO / CIO |
|---|---|---|---|---|---|---|---|
| Define MFA Policy and Standards | C | A/R | C | C | I | I | A |
| Maintain MFA Configuration Baselines | R | A | C | C | I | C | I |
| Conduct quarterly MFA compliance assessment | R | A | C | C | I | C | I |
| Remediate findings within their systems | I | I | A/R | I | I | R | I |
| Maintain and review Exception Register | R | A | C | C | I | I | I |
| Approve MFA exceptions | C | A | R | C | I | I | I |
| Review and sign off quarterly report | R | A | C | C | I | I | A |
| Escalate Critical/High findings to EXCO | C | A/R | I | C | I | I | I |
| Report to Board Risk Committee | I | A/R | I | C | I | I | C |
| Provide assurance on MFA controls | I | I | I | C | A/R | I | I |

### 8.2 Contact Directory

| Role | Name | Department | Contact |
|---|---|---|---|
| IAM Manager (Report Owner) | [Name] | [Department] | [Email / Contact] |
| CISO | [Name] | [Department] | [Email / Contact] |
| Technology Risk Manager | [Name] | [Department] | [Email / Contact] |
| Internal Audit Lead | [Name] | [Department] | [Email / Contact] |
| [System Owner — SYS-001] | [Name] | [Department] | [Email / Contact] |
| [Add rows for each system owner] | | | |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD Month YYYY] | [Name, Title] | Initial issue |
| [1.1] | [DD Month YYYY] | [Name, Title] | [Description of changes] |
| [2.0] | [DD Month YYYY] | [Name, Title] | [Description of major revision] |

### 9.2 Review Schedule

This report is subject to **quarterly review**, aligned to [Organization Name]'s quarterly Technology Risk Management reporting cycle.

| Review Cycle | Review Due Date | Completed Date | Reviewer |
|---|---|---|---|
| Q1 [YYYY] | [DD Month YYYY] | [DD Month YYYY] | [Name] |
| Q2 [YYYY] | [DD Month YYYY] | [DD Month YYYY] | [Name] |
| Q3 [YYYY] | [DD Month YYYY] | [DD Month YYYY] | [Name] |
| Q4 [YYYY] | [DD Month YYYY] | [DD Month YYYY] | [Name] |

### 9.3 Approval Sign-Off

*This report is approved by the following authorised signatories. Approval confirms that the contents have been reviewed, findings are agreed, and the remediation plan is authorised.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — IAM Manager | [Name] | __________________ | [DD Month YYYY] |
| Reviewed By — Technology Risk Manager | [Name] | __________________ | [DD Month YYYY] |
| Reviewed By — Internal Audit | [Name] | __________________ | [DD Month YYYY] |
| Approved By — CISO | [Name] | __________________ | [DD Month YYYY] |
| Noted By — CTO / CIO | [Name] | __________________ | [DD Month YYYY] |

---

## 10. References

The following regulatory instruments, standards, and internal policies form the normative basis of this report:

### 10.1 Regulatory References

| Reference | Title | Issuing Body | Applicable Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | **Clause 10.54** (Strong Authentication), Clause 10.51–10.53 (Access Control), Clause 11 (Cyber Risk Management) |
| BNM Cyber Risk Guidelines | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Applicable Clauses] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 (Security), Section 10 (Retention) |
| NACSA CSOP | Cyber Security Operations Policy | NACSA | [Applicable Provisions] |

### 10.2 Standards References

| Standard | Title | Applicable Sections |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | A.8.5 (Secure Authentication) |
| ISO/IEC 27002:2022 | Information Security Controls | 8.5 (Secure Authentication) |
| NIST SP 800-63B | Digital Identity Guidelines — Authentication | Levels of Assurance (AAL1, AAL2, AAL3) |
| CIS Controls v8 | Center for Internet Security Controls | Control 6 (Access Control Management) |

### 10.3 Internal Policy References

| Document ID | Title | Version | Location |
|---|---|---|---|
| [POL-IAM-001] | [Organization Name] MFA Policy | [Version] | [Document Repository Link / Path] |
| [POL-IAM-002] | [Organization Name] Access Control Policy | [Version] | [Document Repository Link / Path] |
| [POL-SEC-003] | [Organization Name] Information Security Policy | [Version] | [Document Repository Link / Path] |
| [STD-IAM-001] | MFA Configuration Baseline Standard | [Version] | [Document Repository Link / Path] |
| [FRM-TRM-001] | Technology Risk Management Framework | [Version] | [Document Repository Link / Path] |

---

## 11. Appendices

### Appendix A — MFA Adoption Data by System

*Attach or embed the full MFA adoption data extract for all in-scope systems for the reporting period. Data should be sourced from the IAM platform and should include per-system, per-user-group adoption rates.*

| System ID | System Name | Total Accounts in Scope | MFA-Enabled Accounts | MFA-Exempt (Approved Exception) | MFA Not Enabled (Non-Compliant) | Adoption Rate (%) |
|---|---|---|---|---|---|---|
| [SYS-001] | [System Name] | [N] | [N] | [N] | [N] | [XX%] |
| [SYS-002] | [System Name] | [N] | [N] | [N] | [N] | [XX%] |
| [SYS-003] | [System Name] | [N] | [N] | [N] | [N] | [XX%] |
| [SYS-004] | [System Name] | [N] | [N] | [N] | [N] | [XX%] |
| [SYS-005] | [System Name] | [N] | [N] | [N] | [N] | [XX%] |
| **Total** | | **[N]** | **[N]** | **[N]** | **[N]** | **[XX%]** |

### Appendix B — Privileged Account MFA Status

*Provide a breakdown of MFA status specifically for privileged and administrative accounts, which carry a heightened risk profile under RMiT Clause 10.54.*

| Account Type | Total Count | MFA Enforced | MFA Not Enforced | MFA Exception (Approved) | Compliance Rate |
|---|---|---|---|---|---|
| Domain Administrators | [N] | [N] | [N] | [N] | [XX%] |
| Local Administrators | [N] | [N] | [N] | [N] | [XX%] |
| Database Administrators | [N] | [N] | [N] | [N] | [XX%] |
| Application Administrators | [N] | [N] | [N] | [N] | [XX%] |
| Network / Security Administrators | [N] | [N] | [N] | [N] | [XX%] |
| Service Accounts (MFA-applicable) | [N] | [N] | [N] | [N] | [XX%] |
| **Total** | **[N]** | **[N]** | **[N]** | **[N]** | **[XX%]** |

### Appendix C — MFA Methods Inventory

*Document the MFA methods currently in use across the organisation, their assessed strength, and the systems they are applied to. This supports analysis of authentication assurance levels.*

| MFA Method | Authentication Assurance Level | Systems Applied To | User Count | Phishing Resistant | Notes |
|---|---|---|---|---|---|
| FIDO2 / WebAuthn Hardware Token | AAL3 | [System list] | [N] | Yes | [e.g., YubiKey 5 Series] |
| Certificate-Based Authentication (CBA) | AAL3 | [System list] | [N] | Yes | [e.g., Smart card / PIV] |
| Microsoft Authenticator (Passwordless) | AAL2 | [System list] | [N] | Yes | [e.g., Number matching enabled] |
| TOTP Authenticator App | AAL2 | [System list] | [N] | No | [e.g., Google Authenticator, Authy] |
| Push Notification (without number match) | AAL2 | [System list] | [N] | No | [Vulnerable to MFA fatigue attacks] |
| SMS OTP | AAL1 | [System list] | [N] | No | [Deprecated — subject to phase-out plan] |
| Voice Call OTP | AAL1 | [System list] | [N] | No | [Deprecated — subject to phase-out plan] |

### Appendix D — MFA Exception Register (Full Detail)

*Full exception register as at the end of the reporting period. Summarised in Section 5.3; full detail provided here.*

| Exception ID | System / Scope | Account(s) Affected | Exception Reason | Risk Assessment | Compensating Controls | Approved By | Approval Date | Expiry Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [System Name] | [Accounts] | [Reason] | [Risk Rating] | [Controls] | [Name, Title] | [Date] | [Date] | [Date] | [Status] |
| [Add rows] | | | | | | | | | | |

### Appendix E — Trend Analysis

*Include charts or tabular trend data showing MFA adoption and open findings over the past four quarters. Trend data supports identification of systemic issues and improvement trajectories.*

**Quarterly Adoption Trend — Tier 1 Critical Systems:**

| Quarter | Systems in Scope | Fully Compliant | Partially Compliant | Non-Compliant | Exceptions | Adoption Rate |
|---|---|---|---|---|---|---|
| Q1 [YYYY-1] | [N] | [N] | [N] | [N] | [N] | [XX%] |
| Q2 [YYYY-1] | [N] | [N] | [N] | [N] | [N] | [XX%] |
| Q3 [YYYY-1] | [N] | [N] | [N] | [N] | [N] | [XX%] |
| Q4 [YYYY-1] | [N] | [N] | [N] | [N] | [N] | [XX%] |
| **Q[X] [YYYY] (Current)** | **[N]** | **[N]** | **[N]** | **[N]** | **[N]** | **[XX%]** |

**Open Findings Trend by Risk Rating:**

| Quarter | Critical | High | Medium | Low | Total Open |
|---|---|---|---|---|---|
| Q1 [YYYY-1] | [N] | [N] | [N] | [N] | [N] |
| Q2 [YYYY-1] | [N] | [N] | [N] | [N] | [N] |
| Q3 [YYYY-1] | [N] | [N] | [N] | [N] | [N] |
| Q4 [YYYY-1] | [N] | [N] | [N] | [N] | [N] |
| **Q[X] [YYYY] (Current)** | **[N]** | **[N]** | **[N]** | **[N]** | **[N]** |

### Appendix F — Assessment Evidence Index

*List all evidence artefacts collected during the assessment, to support audit traceability.*

| Evidence ID | Description | Source System / Tool | Collection Date | Collected By | Storage Location |
|---|---|---|---|---|---|
| [EVD-001] | [e.g., Conditional Access Policy report — Microsoft Entra ID] | [IAM Platform] | [DD Month YYYY] | [Name] | [Evidence repository path / reference] |
| [EVD-002] | [e.g., Privileged account listing with MFA status — CyberArk] | [PAM Platform] | [DD Month YYYY] | [Name] | [Evidence repository path / reference] |
| [EVD-003] | [e.g., Authentication log extract — [System Name]] | [SIEM / Log Platform] | [DD Month YYYY] | [Name] | [Evidence repository path / reference] |
| [Add rows] | | | | | |

### Appendix G — Glossary

| Term | Definition |
|---|---|
| **AAL** | Authentication Assurance Level — defined in NIST SP 800-63B. Levels range from AAL1 (single-factor) to AAL3 (phishing-resistant hardware-bound). |
| **BNM** | Bank Negara Malaysia — the central bank and principal financial regulatory authority of Malaysia. |
| **CISO** | Chief Information Security Officer |
| **Critical System** | A system whose compromise or failure would result in significant financial, operational, reputational, or regulatory harm to [Organization Name], as classified per the System Criticality Classification Framework. |
| **FIDO2** | Fast IDentity Online 2 — a set of open authentication standards supporting phishing-resistant hardware-bound authentication. |
| **IAM** | Identity and Access Management |
| **MFA** | Multi-Factor Authentication — the use of two or more authentication factors from different categories (knowledge, possession, inherence) to verify a user's identity. |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **OTP** | One-Time Password |
| **PAM** | Privileged Access Management |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework. |
| **RMiT** | Risk Management in Technology — BNM Policy Document issued under section 143B(1) of the Financial Services Act 2013 and the Islamic Financial Services Act 2013. |
| **TOTP** | Time-based One-Time Password — an OTP algorithm (RFC 6238) used in authenticator applications. |

---

*End of Document*

---

*This template was prepared for compliance with BNM RMiT Clause 10.54. It should be reviewed by [Organization Name]'s legal, compliance, and technology risk functions before first use to ensure alignment with internal policies and the current version of applicable regulatory instruments.*