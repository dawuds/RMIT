# Red Team Exercise Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Exercise Reference** | [Exercise Reference Number] |
| **Exercise Period** | [Start Date] to [End Date] |
| **Report Date** | [Report Date] |

> **Classification Notice:** This document is classified **Confidential**. It contains sensitive information regarding the security posture of [Organization Name] and must not be disclosed to unauthorised parties. Handle in accordance with [Organization Name]'s Information Classification Policy.

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

*Provide a concise, non-technical summary of the red team exercise, its objectives, overall outcomes, and the most critical findings. This section should be suitable for senior leadership and board-level readers who require a high-level understanding without detailed technical content.*

### 1.1 Exercise Overview

| Field | Details |
|---|---|
| **Exercise Name** | [Red Team Exercise Name / Code Name] |
| **Exercise Type** | [Full-Scope Red Team / Assumed Breach / Targeted Scenario / Threat-Led Penetration Testing (TLPT)] |
| **Conducted By** | [Internal Red Team / External Party Name] |
| **Exercise Period** | [Start Date] – [End Date] |
| **Authorised By** | [Name, Title] |
| **Overall Risk Rating** | [Critical / High / Medium / Low] |

### 1.2 Summary of Outcomes

*Summarise the overall security posture observed during the exercise. Highlight whether critical objectives were achieved by the red team and what this implies for the organisation's resilience.*

[Provide a 2–4 paragraph narrative summary of the exercise outcomes, including whether the red team successfully achieved their primary objectives, the overall maturity of defensive controls observed, and any systemic weaknesses identified.]

### 1.3 Critical Findings at a Glance

*List the most significant findings requiring immediate attention. Full details are provided in Section 4.*

| # | Finding | Severity | Affected System/Area | Remediation Priority |
|---|---|---|---|---|
| F-01 | [Finding Title] | Critical | [System/Area] | Immediate |
| F-02 | [Finding Title] | High | [System/Area] | Within 30 Days |
| F-03 | [Finding Title] | High | [System/Area] | Within 30 Days |
| F-04 | [Finding Title] | Medium | [System/Area] | Within 90 Days |
| F-05 | [Finding Title] | Low | [System/Area] | Within 180 Days |

### 1.4 Findings Summary by Severity

| Severity | Count | % of Total |
|---|---|---|
| Critical | [#] | [%] |
| High | [#] | [%] |
| Medium | [#] | [%] |
| Low | [#] | [%] |
| Informational | [#] | [%] |
| **Total** | **[#]** | **100%** |

---

## 2. Purpose and Scope

### 2.1 Purpose

This Red Team Exercise Report documents the planning, execution, findings, and recommended remediation actions arising from the red team exercise conducted at **[Organization Name]** during the period **[Exercise Period]**.

This report is produced in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.13**, which requires financial institutions to conduct adversarial testing activities to evaluate the effectiveness of their cybersecurity defences, detection capabilities, and incident response procedures.

The objectives of this report are to:

- Provide a structured account of all vulnerabilities, weaknesses, and security gaps identified during the exercise;
- Present a risk-rated prioritisation of findings to support informed remediation planning;
- Document management's formal response and commitment to remediation;
- Demonstrate to regulators, internal audit, and governance bodies that [Organization Name] conducts rigorous, evidence-based adversarial security testing; and
- Support continuous improvement of [Organization Name]'s cybersecurity posture.

### 2.2 Regulatory Context

This document directly supports compliance with the following regulatory requirements:

| Regulation | Clause / Section | Requirement |
|---|---|---|
| BNM RMiT | Clause 11.13 | Red team exercises and adversarial testing |
| BNM RMiT | Clause 11.1–11.3 | Cybersecurity risk management framework |
| BNM RMiT | Clause 11.9 | Security monitoring and detection |
| BNM RMiT | Clause 11.10 | Incident response and management |
| [Other Framework, e.g. PDPA 2010] | [Section] | [Requirement] |
| [Other Framework, e.g. ISO 27001] | [Control Reference] | [Requirement] |

### 2.3 Intended Audience

| Audience | Purpose |
|---|---|
| Board / Board Risk Committee | Governance oversight and awareness |
| Senior Management | Strategic decision-making and resource allocation |
| Head of Technology Risk | Owner accountability and remediation oversight |
| Chief Information Security Officer (CISO) | Operational response and control improvement |
| Internal Audit | Independent assurance and follow-up |
| Technology & Cybersecurity Teams | Technical remediation |
| Regulators (BNM) | Regulatory examination and supervisory review |

---

## 3. Scope and Methodology

*Detail the boundaries of the exercise, the systems and processes included or excluded, the methodologies and frameworks applied, and any constraints or limitations that affected the exercise. This section provides the context necessary to interpret findings accurately.*

### 3.1 Exercise Objectives

The primary objectives of this red team exercise were to:

1. [Objective 1 — e.g., Assess the organisation's ability to detect and respond to an advanced persistent threat (APT) targeting critical banking systems]
2. [Objective 2 — e.g., Test the effectiveness of privileged access management controls across core banking infrastructure]
3. [Objective 3 — e.g., Evaluate the maturity of the Security Operations Centre (SOC) detection and alerting capabilities]
4. [Objective 4 — e.g., Simulate a targeted attack on internet-facing applications to assess resilience against external threat actors]

### 3.2 Scope of Exercise

#### 3.2.1 In-Scope Systems and Assets

| Asset Category | Specific Systems / Components | Justification for Inclusion |
|---|---|---|
| Internet-Facing Applications | [System Name, URL/IP Range] | [Rationale] |
| Internal Network Segment | [Network Range / VLAN] | [Rationale] |
| Core Banking System | [System Name] | [Rationale] |
| Active Directory / Identity | [Domain Name / System] | [Rationale] |
| Cloud Infrastructure | [Cloud Platform / Account] | [Rationale] |
| End-User Workstations | [Scope Description] | [Rationale] |
| [Other Asset Category] | [Detail] | [Rationale] |

#### 3.2.2 Out-of-Scope Systems and Assets

| Asset Category | Specific Systems / Components | Reason for Exclusion |
|---|---|---|
| [System Category] | [System Name] | [Rationale — e.g., Active maintenance window] |
| [System Category] | [System Name] | [Rationale — e.g., Third-party managed, separate authorisation required] |
| [System Category] | [System Name] | [Rationale — e.g., Production systems with zero-tolerance downtime] |

#### 3.2.3 Geographic and Organisational Scope

- **Business Units Included:** [List Business Units]
- **Geographic Locations:** [List Locations / Data Centres]
- **Third Parties Involved:** [List any third-party service providers included in scope, if any]

### 3.3 Methodology

#### 3.3.1 Framework and Standards Applied

*Describe the attack simulation framework and industry standards used to guide the red team activities.*

| Framework / Standard | Application |
|---|---|
| MITRE ATT&CK Framework | Tactics, techniques, and procedures (TTPs) mapping |
| CBEST / TIBER-EU | Threat-led penetration testing methodology |
| PTES (Penetration Testing Execution Standard) | Overall exercise structure |
| OWASP Testing Guide | Web application assessment |
| [Other Framework] | [Application] |

#### 3.3.2 Phases of the Exercise

| Phase | Description | Duration | Key Activities |
|---|---|---|---|
| **Phase 1: Reconnaissance** | Intelligence gathering and attack surface mapping | [Duration] | OSINT, passive reconnaissance, target profiling |
| **Phase 2: Initial Access** | Gaining a foothold within the target environment | [Duration] | Phishing simulation, exploitation of external vulnerabilities |
| **Phase 3: Lateral Movement** | Expanding access and escalating privileges | [Duration] | Credential harvesting, privilege escalation, pivoting |
| **Phase 4: Objective Completion** | Achieving primary exercise objectives | [Duration] | Data exfiltration simulation, critical system access |
| **Phase 5: Reporting** | Documentation and debrief | [Duration] | Finding documentation, evidence compilation, debrief sessions |

#### 3.3.3 Threat Actor Profile Simulated

*Describe the threat actor profile that the red team was instructed to emulate, including motivation, capability level, and known TTPs.*

- **Threat Actor Type:** [e.g., Nation-State Actor / Organised Cybercriminal Group / Insider Threat]
- **Motivation:** [e.g., Financial gain / Espionage / Disruption]
- **Assumed Capability Level:** [e.g., Advanced / Intermediate]
- **TTPs Simulated:** [Reference MITRE ATT&CK Techniques, e.g., T1566 – Phishing, T1078 – Valid Accounts]

### 3.4 Rules of Engagement

| Parameter | Detail |
|---|---|
| **Authorisation Letter Reference** | [Document Reference] |
| **Emergency Contact (Blue Team)** | [Name, Contact Number] |
| **Emergency Contact (Red Team Lead)** | [Name, Contact Number] |
| **Prohibited Actions** | [List any techniques explicitly prohibited, e.g., Denial-of-Service attacks] |
| **Production System Constraints** | [Any restrictions on production environment interactions] |
| **Data Handling Requirements** | [Requirements for handling sensitive data accessed during exercise] |
| **Exercise Termination Criteria** | [Conditions under which the exercise must be halted] |

### 3.5 Limitations and Constraints

*Document any factors that limited the scope or effectiveness of the exercise, so that findings are interpreted in proper context.*

- [Limitation 1 — e.g., Testing window restricted to business hours, limiting assessment of after-hours monitoring effectiveness]
- [Limitation 2 — e.g., Certain legacy systems were excluded due to fragility concerns]
- [Limitation 3 — e.g., Third-party cloud environment required separate authorisation not obtained within the exercise window]

---

## 4. Key Findings and Observations

*Document each finding identified during the exercise in a structured, consistent format. Each finding should include sufficient technical detail for the remediation team while remaining comprehensible to management readers. Observations (non-vulnerability issues of note) should be documented separately.*

### 4.1 Findings Register

#### Finding F-01: [Finding Title]

| Attribute | Detail |
|---|---|
| **Finding ID** | F-01 |
| **Title** | [Short descriptive title] |
| **Severity** | Critical |
| **CVSS Score** | [Score] / 10.0 |
| **MITRE ATT&CK Technique** | [Technique ID and Name, e.g., T1078 – Valid Accounts] |
| **Affected Asset(s)** | [System / Application / Component] |
| **Discovery Method** | [Method used to identify the vulnerability] |
| **Date Discovered** | [Date] |

**Description:**

[Provide a clear, factual description of the vulnerability or weakness identified. Explain what was found, where it exists, and what conditions allow it to be exploited. Avoid jargon where possible to ensure management readability.]

**Evidence:**

*Reference supporting evidence in the appendices. Do not embed raw exploit code or sensitive credentials in this section.*

- Evidence Item 1: [Description — e.g., Screenshot of successful privilege escalation — see Appendix C, Figure C-1]
- Evidence Item 2: [Description — e.g., Network capture demonstrating lateral movement — see Appendix C, Figure C-2]

**Attack Path Summary:**

1. [Step 1 — e.g., Red team identified an internet-facing login portal with no account lockout mechanism]
2. [Step 2 — e.g., Password spraying attack yielded valid credentials for a privileged service account]
3. [Step 3 — e.g., Service account used to authenticate to internal Active Directory]
4. [Step 4 — e.g., Privilege escalation achieved via Kerberoasting, yielding domain administrator credentials]

**Business Impact:**

[Describe the potential business impact if this vulnerability were exploited by a malicious actor. Include impact on confidentiality, integrity, and availability of data and services, and any potential regulatory, reputational, or financial consequences.]

**Recommended Remediation:**

[Provide specific, actionable remediation guidance. Where applicable, reference vendor advisories, patches, or configuration hardening guides.]

---

#### Finding F-02: [Finding Title]

| Attribute | Detail |
|---|---|
| **Finding ID** | F-02 |
| **Title** | [Short descriptive title] |
| **Severity** | High |
| **CVSS Score** | [Score] / 10.0 |
| **MITRE ATT&CK Technique** | [Technique ID and Name] |
| **Affected Asset(s)** | [System / Application / Component] |
| **Discovery Method** | [Method] |
| **Date Discovered** | [Date] |

**Description:**

[Finding description]

**Evidence:**

- Evidence Item 1: [Description — see Appendix C, Figure C-X]

**Attack Path Summary:**

1. [Step 1]
2. [Step 2]
3. [Step 3]

**Business Impact:**

[Business impact description]

**Recommended Remediation:**

[Remediation guidance]

---

*[Repeat the finding template above for each additional finding identified. Assign sequential Finding IDs: F-03, F-04, etc.]*

---

### 4.2 Observations

*Observations are security weaknesses or process gaps noted during the exercise that do not constitute directly exploitable vulnerabilities but nonetheless represent areas for improvement.*

| Obs. ID | Observation | Area Affected | Recommended Improvement |
|---|---|---|---|
| O-01 | [Observation description] | [Area] | [Suggested improvement] |
| O-02 | [Observation description] | [Area] | [Suggested improvement] |
| O-03 | [Observation description] | [Area] | [Suggested improvement] |

### 4.3 Positive Observations

*Document security controls that functioned effectively during the exercise. Recognising effective controls is important for a balanced assessment and for sustaining investment in controls that are working well.*

| # | Positive Observation | Control Area | Notes |
|---|---|---|---|
| P-01 | [Description of effective control or response] | [Control Area] | [Additional context] |
| P-02 | [Description of effective control or response] | [Control Area] | [Additional context] |

---

## 5. Risk Ratings and Prioritisation

*Present a consolidated risk view of all findings, including the risk rating methodology applied, a risk matrix, and a prioritised remediation roadmap. This section enables management to make informed, risk-based decisions on remediation sequencing and resource allocation.*

### 5.1 Risk Rating Methodology

*Describe the risk rating framework applied to findings. Reference the organisation's enterprise risk management framework and any industry-standard scoring methodologies used.*

Risk ratings in this report are assigned using the following methodology:

| Component | Methodology Applied |
|---|---|
| **Vulnerability Severity** | Common Vulnerability Scoring System (CVSS) v3.1 |
| **Likelihood Assessment** | Based on observed attacker success rate and environmental factors |
| **Business Impact Assessment** | Aligned to [Organization Name]'s Risk Appetite Statement and Enterprise Risk Framework |
| **Overall Risk Rating** | Combined assessment of severity, likelihood, and business impact |

**Risk Rating Definitions:**

| Rating | CVSS Score Range | Description | Expected Response |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Exploitation likely to result in critical data breach, system compromise, or significant regulatory breach | Immediate remediation; escalate to senior management |
| **High** | 7.0 – 8.9 | Significant risk to confidentiality, integrity, or availability of critical systems or data | Remediate within 30 calendar days |
| **Medium** | 4.0 – 6.9 | Moderate risk; exploitation requires favourable conditions or results in limited impact | Remediate within 90 calendar days |
| **Low** | 0.1 – 3.9 | Minimal risk; limited impact or very low likelihood of exploitation | Remediate within 180 calendar days |
| **Informational** | N/A | No direct security risk; provided for awareness and best-practice improvement | Address as resources permit |

### 5.2 Consolidated Risk Register

| Finding ID | Finding Title | Likelihood | Impact | Inherent Risk | Existing Controls | Residual Risk | Priority |
|---|---|---|---|---|---|---|---|
| F-01 | [Title] | High | Critical | Critical | [Control Summary] | Critical | 1 |
| F-02 | [Title] | High | High | High | [Control Summary] | High | 2 |
| F-03 | [Title] | Medium | High | High | [Control Summary] | High | 3 |
| F-04 | [Title] | Medium | Medium | Medium | [Control Summary] | Medium | 4 |
| F-05 | [Title] | Low | Medium | Medium | [Control Summary] | Low | 5 |

### 5.3 Risk Heatmap

*The following matrix illustrates the distribution of findings across likelihood and impact dimensions.*

| | **Critical Impact** | **High Impact** | **Medium Impact** | **Low Impact** |
|---|---|---|---|---|
| **High Likelihood** | F-01 | F-02 | — | — |
| **Medium Likelihood** | — | F-03 | F-04 | — |
| **Low Likelihood** | — | — | — | F-05 |

### 5.4 Findings Distribution by Attack Phase

| Attack Phase | Number of Findings | Severity Breakdown |
|---|---|---|
| Reconnaissance | [#] | [e.g., 0 Critical, 1 High, 2 Medium] |
| Initial Access | [#] | [e.g., 1 Critical, 2 High, 1 Medium] |
| Lateral Movement | [#] | [e.g., 1 Critical, 1 High, 0 Medium] |
| Privilege Escalation | [#] | [e.g., 0 Critical, 2 High, 1 Medium] |
| Objective Achievement | [#] | [e.g., 1 Critical, 0 High, 1 Medium] |

### 5.5 Comparison with Previous Exercise

*Where a prior red team exercise has been conducted, compare findings to assess improvement or regression in the organisation's security posture.*

| Metric | Previous Exercise ([Date]) | Current Exercise ([Date]) | Trend |
|---|---|---|---|
| Total Findings | [#] | [#] | [↑ / ↓ / →] |
| Critical Findings | [#] | [#] | [↑ / ↓ / →] |
| High Findings | [#] | [#] | [↑ / ↓ / →] |
| Repeat Findings | [#] | [#] | [↑ / ↓ / →] |
| Red Team Objectives Achieved | [#] / [Total] | [#] / [Total] | [↑ / ↓ / →] |

---

## 6. Recommendations and Action Items

*Provide a consolidated, prioritised list of all recommended remediation actions, mapped to specific findings. Each recommendation should be specific, actionable, and assigned a clear owner and target completion date. This section forms the basis of the remediation tracking register.*

### 6.1 Remediation Principles

*Remediation activities should be prioritised based on residual risk rating and should follow [Organization Name]'s vulnerability management and change management processes. Critical and High findings must be reported to the Technology Risk Committee within [X] business days of this report being issued.*

### 6.2 Remediation Action Plan

| Rec. ID | Related Finding(s) | Recommendation | Priority | Responsible Owner | Target Completion Date | Estimated Effort |
|---|---|---|---|---|---|---|
| R-01 | F-01 | [Specific remediation action] | Immediate | [Owner Name / Team] | [Date] | [High / Medium / Low] |
| R-02 | F-02 | [Specific remediation action] | Within 30 Days | [Owner Name / Team] | [Date] | [High / Medium / Low] |
| R-03 | F-02, F-03 | [Specific remediation action] | Within 30 Days | [Owner Name / Team] | [Date] | [High / Medium / Low] |
| R-04 | F-04 | [Specific remediation action] | Within 90 Days | [Owner Name / Team] | [Date] | [Medium / Low] |
| R-05 | F-05 | [Specific remediation action] | Within 180 Days | [Owner Name / Team] | [Date] | [Low] |
| R-06 | O-01, O-02 | [Process improvement recommendation] | Best Practice | [Owner Name / Team] | [Date] | [Low] |

### 6.3 Strategic Recommendations

*Beyond individual finding remediation, provide strategic recommendations to address systemic or structural weaknesses in the organisation's cybersecurity posture.*

1. **[Strategic Recommendation Title]:** [Description — e.g., Implement a privileged access management (PAM) solution to centralise control, monitoring, and rotation of all privileged credentials across the enterprise.]

2. **[Strategic Recommendation Title]:** [Description — e.g., Enhance SOC detection capabilities with additional MITRE ATT&CK-aligned detection rules and improve mean-time-to-detect (MTTD) for lateral movement techniques.]

3. **[Strategic Recommendation Title]:** [Description — e.g., Establish a formal purple team programme to enable continuous collaboration between red and blue teams for iterative control improvement.]

4. **[Strategic Recommendation Title]:** [Description — e.g., Review and update the Cyber Incident Response Plan (CIRP) to incorporate scenarios aligned with threat actor TTPs identified in this exercise.]

### 6.4 Retesting Requirements

| Finding ID | Retesting Required | Target Retest Date | Retesting Approach |
|---|---|---|---|
| F-01 | Yes | [Date] | [Targeted retest / Next full exercise] |
| F-02 | Yes | [Date] | [Targeted retest / Next full exercise] |
| F-03 | Yes | [Date] | [Next full exercise] |
| F-04 | Optional | [Date] | [Next full exercise] |
| F-05 | Optional | [Date] | [Next full exercise] |

---

## 7. Management Response

*This section records the formal response of [Organization Name]'s management to the findings and recommendations in this report. Management must formally accept, remediate, or risk-accept each finding. This section is critical for demonstrating governance accountability to BNM and internal audit.*

### 7.1 Management Statement

*A formal statement from the Head of Technology Risk or equivalent, acknowledging receipt of the report, committing to remediation of findings, and noting any accepted risks.*

> [Organization Name] acknowledges the findings and observations documented in this Red Team Exercise Report. Management is committed to remediating all Critical and High severity findings within the prescribed timeframes and will report remediation progress to the Technology Risk Committee at each meeting. Where risk acceptance is sought for any finding, a formal Risk Acceptance Request will be submitted in accordance with [Organization Name]'s Enterprise Risk Management Framework.
>
> **[Name]**
> **Head of Technology Risk**
> **[Date]**

### 7.2 Management Response by Finding

| Finding ID | Severity | Management Response | Action Committed | Responsible Owner | Target Date | Risk Accepted (Y/N) |
|---|---|---|---|---|---|---|
| F-01 | Critical | [Accept / Remediate / Mitigate] | [Specific action] | [Owner] | [Date] | No |
| F-02 | High | [Accept / Remediate / Mitigate] | [Specific action] | [Owner] | [Date] | No |
| F-03 | High | [Accept / Remediate / Mitigate] | [Specific action] | [Owner] | [Date] | No |
| F-04 | Medium | [Accept / Remediate / Mitigate] | [Specific action] | [Owner] | [Date] | No |
| F-05 | Low | [Accept / Remediate / Mitigate] | [Specific action] | [Owner] | [Date] | [Y/N] |

### 7.3 Risk Acceptance Register

*Where management elects to accept a finding rather than remediate, a formal risk acceptance must be documented and approved by an authorised risk owner.*

| Finding ID | Rationale for Risk Acceptance | Risk Level Accepted | Accepted By (Name / Title) | Acceptance Date | Review Date |
|---|---|---|---|---|---|
| [Finding ID] | [Justification for accepting the residual risk] | [Risk Level] | [Name, Title] | [Date] | [Date] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines the accountabilities for red team exercise activities across relevant stakeholder groups.*

**RACI Key:** **R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Board / BRC | CEO / Senior Mgmt | Head of Tech Risk (Owner) | CISO | Red Team | SOC / Blue Team | IT Operations | Internal Audit | Compliance |
|---|---|---|---|---|---|---|---|---|---|
| Approve exercise scope and rules of engagement | I | A | R | C | C | I | I | C | I |
| Issue authorisation letter | I | A | R | C | — | — | — | I | I |
| Execute red team exercise | — | I | I | C | R | — | — | I | — |
| Monitor and respond (Blue Team) | — | I | I | R | — | A | C | I | — |
| Compile and review findings | — | I | R | C | A | C | I | I | I |
| Issue draft report | — | I | A | C | R | C | I | I | — |
| Review and validate findings | I | I | A | R | C | C | I | I | I |
| Issue final report | I | A | A | R | I | I | I | I | I |
| Approve management response | I | A | R | C | — | — | — | I | I |
| Implement remediation actions | — | I | A | R | — | C | R | I | — |
| Track and report remediation progress | I | A | R | C | — | — | C | C | I |
| Conduct retesting of findings | — | I | A | C | R | C | C | I | — |
| Archive report and evidence | — | I | R | A | I | — | C | I | I |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Role | Description of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | [Role] | Initial draft |
| 0.2 | [Date] | [Author Name] | [Role] | Incorporated CISO review comments |
| 0.3 | [Date] | [Author Name] | [Role] | Management response incorporated |
| 1.0 | [Date] | [Author Name] | [Role] | Final version approved for issuance |

### 9.2 Document Review

| Reviewer | Role | Review Date | Comments / Sign-off |
|---|---|---|---|
| [Name] | CISO | [Date] | [Approved / Comments provided] |
| [Name] | Head of Technology Risk | [Date] | [Approved / Comments provided] |
| [Name] | Head of Internal Audit | [Date] | [Approved / Comments provided] |
| [Name] | Chief Risk Officer | [Date] | [Approved / Comments provided] |

### 9.3 Approval Sign-Off

*By signing below, the approving parties confirm that this report accurately reflects the findings of the red team exercise and that the management response represents a formal organisational commitment to the stated remediation actions.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk | [Name] | ___________________________ | [Date] |
| Chief Information Security Officer | [Name] | ___________________________ | [Date] |
| Chief Risk Officer | [Name] | ___________________________ | [Date] |
| Chief Executive Officer | [Name] | ___________________________ | [Date] |

### 9.4 Distribution List

| Name | Role | Clearance | Date Distributed |
|---|---|---|---|
| [Name] | [Role] | Confidential | [Date] |
| [Name] | [Role] | Confidential | [Date] |
| [Name] | Head of Internal Audit | Confidential | [Date] |

---

## 10. References

The following regulatory instruments, standards, and internal policies are referenced in or applicable to this document:

| Reference | Title | Issuing Body | Relevant Clause / Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11.13 — Red Team Exercises |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11.1–11.3 — Cybersecurity Risk Management |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11.9 — Security Monitoring |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11.10 — Incident Response |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Part II — General Principles |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO / IEC | Annex A, Controls A.8.8, A.8.29 |
| MITRE ATT&CK | Adversarial Tactics, Techniques and Common Knowledge Framework | MITRE Corporation | Enterprise Matrix v14+ |
| CVSS v3.1 | Common Vulnerability Scoring System | FIRST.org | Scoring Specification |
| [Internal Policy] | Cybersecurity Policy | [Organization Name] | [Section Reference] |
| [Internal Policy] | Technology Risk Management Framework | [Organization Name] | [Section Reference] |
| [Internal Policy] | Vulnerability Management Procedure | [Organization Name] | [Section Reference] |
| [Internal Policy] | Incident Response Plan | [Organization Name] | [Section Reference] |

---

## 11. Appendices

### Appendix A: Authorisation and Scoping Documentation

*Attach or reference the formal authorisation letter, signed rules of engagement, and scoping agreement that governed this exercise.*

- **A-1:** Authorisation Letter — [Reference Number, Date]
- **A-2:** Signed Rules of Engagement — [Reference Number, Date]
- **A-3:** Scope Agreement — [Reference Number, Date]
- **A-4:** Non-Disclosure Agreement (Red Team / External Party) — [Reference Number, Date]

---

### Appendix B: Technical Finding Details

*This appendix contains detailed technical information for each finding, including full proof-of-concept details, raw tool output, and technical configuration data. Access to this appendix should be restricted to technical remediation teams.*

**B-1: Finding F-01 — Technical Detail**

| Item | Detail |
|---|---|
| Vulnerability Type | [e.g., Credential Stuffing / Misconfiguration / Unpatched CVE] |
| CVE Reference | [CVE-YYYY-XXXXX, if applicable] |
| Affected Software / Version | [Software Name, Version] |
| Patch / Fix Available | [Yes — Vendor Advisory Reference / No / Configuration Change Required] |

[Technical narrative and reproduction steps]

```
[Sanitised tool output or command examples — redact credentials, IP addresses as appropriate]
```

*[Repeat B-X entries for each finding requiring detailed technical documentation.]*

---

### Appendix C: Evidence and Screenshots

*This appendix contains screenshots, log extracts, and other evidence supporting the findings documented in this report. Evidence has been sanitised to remove live credentials and sensitive personal data.*

- **C-1:** [Description of Screenshot / Evidence Item] — [Related Finding ID]
- **C-2:** [Description of Screenshot / Evidence Item] — [Related Finding ID]
- **C-3:** [Description of Screenshot / Evidence Item] — [Related Finding ID]
- **C-4:** [Description of Log Extract / Network Capture] — [Related Finding ID]

---

### Appendix D: MITRE ATT&CK Technique Mapping

*Map all techniques employed during the exercise to the MITRE ATT&CK Enterprise framework to support threat-informed defence and detection engineering.*

| Tactic | Technique ID | Technique Name | Sub-Technique | Finding ID(s) | Detected by Blue Team (Y/N) |
|---|---|---|---|---|---|
| Initial Access | T1566 | Phishing | T1566.001 – Spearphishing Attachment | F-02 | No |
| Credential Access | T1110 | Brute Force | T1110.003 – Password Spraying | F-01 | No |
| Lateral Movement | T1021 | Remote Services | T1021.002 – SMB/Windows Admin Shares | F-03 | Partial |
| Privilege Escalation | T1558 | Steal or Forge Kerberos Tickets | T1558.003 – Kerberoasting | F-01 | No |
| Exfiltration | T1041 | Exfiltration Over C2 Channel | — | F-04 | Yes |
| [Tactic] | [ID] | [Technique Name] | [Sub-technique] | [Finding ID] | [Y/N/Partial] |

---

### Appendix E: Remediation Tracking Template

*This appendix provides a template for tracking remediation progress following issuance of this report. Owners should update this register at each reporting cycle.*

| Rec. ID | Finding ID | Recommendation | Owner | Target Date | Status | Last Updated | Evidence of Completion |
|---|---|---|---|---|---|---|---|
| R-01 | F-01 | [Recommendation] | [Owner] | [Date] | Not Started / In Progress / Complete | [Date] | [Reference] |
| R-02 | F-02 | [Recommendation] | [Owner] | [Date] | Not Started / In Progress / Complete | [Date] | [Reference] |
| R-03 | F-03 | [Recommendation] | [Owner] | [Date] | Not Started / In Progress / Complete | [Date] | [Reference] |

---

### Appendix F: Glossary

| Term | Definition |
|---|---|
| APT | Advanced Persistent Threat — a sophisticated, long-term cyberattack typically conducted by nation-state or organised criminal actors |
| ATT&CK | Adversarial Tactics, Techniques and Common Knowledge — a MITRE framework cataloguing real-world adversary behaviours |
| Blue Team | The defensive security team responsible for detecting and responding to red team activities during the exercise |
| CVSS | Common Vulnerability Scoring System — an industry standard for rating the severity of security vulnerabilities |
| Kerberoasting | An attack technique targeting service accounts in Active Directory by requesting Kerberos service tickets and cracking them offline |
| Lateral Movement | Techniques used by attackers to progressively move through a network after gaining initial access |
| OSINT | Open Source Intelligence — intelligence gathered from publicly available sources |
| PAM | Privileged Access Management — controls and tools for managing privileged accounts and credentials |
| Purple Team | A collaborative exercise combining red and blue team activities in real time to iteratively improve detection and response |
| RACI | Responsible, Accountable, Consulted, Informed — a matrix used to clarify roles and responsibilities |
| Red Team | The offensive security team that simulates adversary behaviour to test the organisation's defences |
| RMiT | Risk Management in Technology — a BNM policy document governing technology and cybersecurity risk for financial institutions |
| SOC | Security Operations Centre — the team responsible for monitoring, detecting, and responding to security events |
| TTP | Tactics, Techniques, and Procedures — the methods and behaviours used by threat actors to achieve their objectives |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | [Document ID] | Version 1.0 | [Report Date]**
*This document must be stored and transmitted in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited.*