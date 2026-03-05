# Scenario Analysis Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Evidence Reviewed](#5-evidence-reviewed)
6. [Recommendations](#6-recommendations)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*State the purpose of this report, including what disruption scenarios were analyzed and why this analysis was conducted. Reference the regulatory obligation.*

This Scenario Analysis Report documents the structured assessment of disruption scenarios affecting [Organization Name]'s critical technology services and supporting infrastructure. The report identifies potential impact pathways, assesses severity and likelihood, and provides actionable recommendations to enhance technology resilience.

This document is prepared in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.30**, which mandates that financial institutions conduct and document scenario analysis as part of their Technology Risk Management Framework.

### 1.2 Scope

*Define which systems, services, processes, and organizational units are covered by this analysis. Be explicit about what is included and excluded.*

**In Scope:**

- Critical technology systems and applications as defined in [Organization Name]'s Critical System Inventory
- Technology infrastructure supporting critical business functions
- Third-party technology service providers with material dependency
- IT and cybersecurity operational processes
- The following business units and functions: [List Business Units]

**Out of Scope:**

- Non-critical systems with an RTO exceeding [X] hours
- Systems currently undergoing decommissioning: [List if applicable]
- [Other exclusions as appropriate]

### 1.3 Reporting Period

| Field | Details |
|---|---|
| **Assessment Period** | [Start Date] to [End Date] |
| **Report Date** | [Report Date] |
| **Analysis Cycle** | Quarterly |
| **Previous Report Reference** | [Previous Document ID] |

---

## 2. Assessment Scope and Criteria

### 2.1 Critical Services in Scope

*List all critical services and systems evaluated in this scenario analysis. Align this list with the organization's approved Critical System Inventory and Business Impact Analysis (BIA) outputs.*

| # | System / Service | Business Function | Criticality Tier | System Owner | RTO | RPO |
|---|---|---|---|---|---|---|
| 1 | [System Name] | [e.g., Core Banking] | Tier 1 – Critical | [Owner Name] | [X hrs] | [X hrs] |
| 2 | [System Name] | [e.g., Internet Banking] | Tier 1 – Critical | [Owner Name] | [X hrs] | [X hrs] |
| 3 | [System Name] | [e.g., Payment Gateway] | Tier 2 – High | [Owner Name] | [X hrs] | [X hrs] |
| 4 | [System Name] | [e.g., HR Management] | Tier 3 – Medium | [Owner Name] | [X hrs] | [X hrs] |

> **Criticality Tier Definitions:**
> - **Tier 1 – Critical:** Disruption causes immediate financial, regulatory, or reputational harm within 2 hours.
> - **Tier 2 – High:** Disruption causes significant impact within 4–8 hours.
> - **Tier 3 – Medium:** Disruption manageable within 24 hours with manual workarounds.

### 2.2 Scenario Selection Criteria

*Explain the rationale for selecting the scenarios analyzed in this report. Criteria may include industry threat intelligence, past incidents, regulatory guidance, or residual risk profile.*

Scenarios were selected based on the following criteria:

- **Threat intelligence:** Emerging threats identified through [Threat Intelligence Sources, e.g., NACSA advisories, FS-ISAC, internal SOC reports]
- **Historical incidents:** Past disruption events experienced by [Organization Name] or peers in the Malaysian financial sector
- **Residual risk profile:** High-rated risks from the current Technology Risk Register
- **Regulatory guidance:** Scenarios referenced in BNM RMiT and associated supervisory expectations
- **Systemic dependency:** Concentration risk from shared infrastructure or third-party providers

### 2.3 Assessment Criteria

*Define the scoring or rating criteria used to assess impact and likelihood. These should align with the organization's enterprise risk management (ERM) framework.*

**Likelihood Scale:**

| Rating | Score | Description |
|---|---|---|
| Rare | 1 | May occur only in exceptional circumstances (< once in 10 years) |
| Unlikely | 2 | Could occur at some time (once in 5–10 years) |
| Possible | 3 | Might occur at some time (once in 2–5 years) |
| Likely | 4 | Will probably occur in most circumstances (once per 1–2 years) |
| Almost Certain | 5 | Expected to occur in most circumstances (more than once per year) |

**Impact Scale:**

| Rating | Score | Financial Impact | Operational Impact | Reputational Impact |
|---|---|---|---|---|
| Negligible | 1 | < MYR [Amount] | Minimal disruption, resolved < 1 hr | No media coverage |
| Minor | 2 | MYR [Amount–Amount] | Limited disruption, resolved < 4 hrs | Isolated complaints |
| Moderate | 3 | MYR [Amount–Amount] | Significant disruption, resolved < 24 hrs | Negative media coverage |
| Major | 4 | MYR [Amount–Amount] | Severe disruption, resolved < 72 hrs | Regulatory inquiry |
| Catastrophic | 5 | > MYR [Amount] | Extended disruption > 72 hrs | Regulatory action / legal proceedings |

**Risk Rating Matrix:**

| | **Rare (1)** | **Unlikely (2)** | **Possible (3)** | **Likely (4)** | **Almost Certain (5)** |
|---|---|---|---|---|---|
| **Catastrophic (5)** | Medium | High | Critical | Critical | Critical |
| **Major (4)** | Low | Medium | High | Critical | Critical |
| **Moderate (3)** | Low | Medium | High | High | Critical |
| **Minor (2)** | Low | Low | Medium | Medium | High |
| **Negligible (1)** | Low | Low | Low | Low | Medium |

---

## 3. Methodology

### 3.1 Analysis Framework

*Describe the overall framework and approach used to conduct the scenario analysis. Reference any established industry frameworks or internal methodologies applied.*

The scenario analysis was conducted using a structured methodology aligned with:

- **BNM RMiT Clause 10.30** requirements for technology risk scenario analysis
- **ISO 22301** Business Continuity Management principles
- **NIST SP 800-34** Contingency Planning Guide
- [Organization Name] Technology Risk Management Framework (Version [X.X])

### 3.2 Analysis Process

*Summarize the step-by-step process followed to complete this analysis, from scenario identification through to report finalization.*

The following process was applied:

1. **Scenario Identification:** Relevant disruption scenarios identified through threat landscape review, historical incident analysis, and regulatory guidance.
2. **Scenario Definition:** Each scenario was formally defined with a description, trigger event, and affected systems/services.
3. **Impact Assessment:** Structured impact assessment conducted across financial, operational, reputational, and regulatory dimensions.
4. **Likelihood Assessment:** Likelihood of each scenario rated using the approved likelihood scale and supported by threat intelligence data.
5. **Control Evaluation:** Existing controls assessed for effectiveness in preventing or mitigating each scenario.
6. **Residual Risk Determination:** Residual risk rating determined after accounting for control effectiveness.
7. **Recommendation Development:** Gap-based recommendations developed where residual risk exceeds appetite.
8. **Validation:** Findings validated through workshops with system owners and the Technology Risk Committee.

### 3.3 Stakeholder Engagement

*Identify the key stakeholders consulted during this assessment, including the dates of engagement.*

| Stakeholder | Role | Engagement Method | Date |
|---|---|---|---|
| [Name] | [Chief Information Officer] | Interview / Workshop | [Date] |
| [Name] | [Head of IT Operations] | Interview | [Date] |
| [Name] | [Head of Cybersecurity] | Workshop | [Date] |
| [Name] | [Business Continuity Manager] | Document Review | [Date] |
| [Name] | [Head of Internal Audit] | Consultation | [Date] |
| [Name] | [Third-Party Risk Manager] | Interview | [Date] |

### 3.4 Assumptions and Limitations

*Document any assumptions made during the analysis and acknowledge limitations that may affect the completeness or accuracy of findings.*

**Assumptions:**

- Information provided by system owners and stakeholders is accurate and complete as at the assessment date.
- The Critical System Inventory reflects the current operational state of the organization.
- Existing controls are implemented and operating as described in documented procedures.
- [Additional assumptions as applicable]

**Limitations:**

- This analysis is point-in-time and may not reflect changes in the threat environment after [Assessment Date].
- Third-party scenario analysis is based on contractual obligations and available audit reports; direct testing of third-party resilience was not in scope.
- [Additional limitations as applicable]

---

## 4. Findings and Ratings

### 4.1 Summary of Scenarios Analyzed

*Provide a high-level summary table of all scenarios assessed in this review cycle, including their overall risk ratings.*

| # | Scenario ID | Scenario Name | Category | Inherent Risk | Control Effectiveness | Residual Risk | Change vs Prior Quarter |
|---|---|---|---|---|---|---|---|
| 1 | SCN-[YY]-001 | [e.g., Ransomware Attack on Core Banking] | Cyber | Critical | Moderate | High | ↔ No Change |
| 2 | SCN-[YY]-002 | [e.g., Primary Data Centre Outage] | Infrastructure | Critical | Strong | Medium | ↓ Improved |
| 3 | SCN-[YY]-003 | [e.g., Critical Third-Party Provider Failure] | Third-Party | High | Weak | High | ↑ Deteriorated |
| 4 | SCN-[YY]-004 | [e.g., Prolonged Telecommunications Failure] | Infrastructure | High | Moderate | Medium | ↔ No Change |
| 5 | SCN-[YY]-005 | [e.g., Insider Threat – Data Exfiltration] | Cyber | High | Moderate | High | New |

### 4.2 Detailed Scenario Analysis

*For each scenario, complete the following detailed assessment template. Replicate this subsection for each scenario assessed.*

---

#### Scenario SCN-[YY]-001: [Scenario Name]

**Scenario Description:**

*Provide a detailed narrative description of the disruption scenario, including the trigger event, threat actor (if applicable), and the mechanism by which it manifests.*

[Provide a clear, specific description of the scenario. For example: "A sophisticated ransomware attack encrypts data across [Organization Name]'s core banking environment, rendering critical systems unavailable and disrupting all customer-facing services."]

**Scenario Parameters:**

| Parameter | Details |
|---|---|
| **Scenario Category** | [e.g., Cyber / Infrastructure / Third-Party / Environmental / Pandemic] |
| **Trigger Event** | [Description of the initiating event] |
| **Threat Actor** | [e.g., Financially motivated cybercriminal group / Insider / N/A] |
| **Attack Vector / Cause** | [e.g., Phishing email leading to ransomware deployment] |
| **Estimated Duration** | [e.g., 48–72 hours for full recovery] |

**Affected Systems and Services:**

| System / Service | Criticality | Estimated Downtime | Impact Type |
|---|---|---|---|
| [System Name] | Tier 1 | [X hrs] | Full Outage |
| [System Name] | Tier 1 | [X hrs] | Degraded Service |
| [System Name] | Tier 2 | [X hrs] | Full Outage |

**Impact Assessment:**

| Impact Dimension | Rating | Score | Rationale |
|---|---|---|---|
| Financial | [e.g., Major] | 4 | [Describe financial impact — revenue loss, penalties, remediation costs] |
| Operational | [e.g., Catastrophic] | 5 | [Describe operational impact — service unavailability, staff capacity] |
| Reputational | [e.g., Major] | 4 | [Describe reputational impact — customer trust, media coverage] |
| Regulatory / Legal | [e.g., Moderate] | 3 | [Describe regulatory impact — BNM reporting obligations, potential breach] |
| **Overall Impact** | **[e.g., Major]** | **4** | |

**Likelihood Assessment:**

| Factor | Assessment | Rationale |
|---|---|---|
| Threat Actor Capability | [High / Medium / Low] | [Supporting evidence] |
| Threat Actor Intent | [High / Medium / Low] | [Supporting evidence] |
| Vulnerability Exposure | [High / Medium / Low] | [Supporting evidence] |
| **Likelihood Rating** | **[e.g., Likely — 4]** | |

**Inherent Risk Rating:** **[Critical / High / Medium / Low]**

**Existing Controls:**

| Control ID | Control Description | Control Type | Effectiveness |
|---|---|---|---|
| [CTL-001] | [e.g., Email gateway with anti-phishing filters] | Preventive | [Strong / Moderate / Weak] |
| [CTL-002] | [e.g., Endpoint detection and response (EDR) solution] | Detective | [Strong / Moderate / Weak] |
| [CTL-003] | [e.g., Immutable offline backups with tested restoration] | Recovery | [Strong / Moderate / Weak] |
| [CTL-004] | [e.g., Cyber Incident Response Plan] | Response | [Strong / Moderate / Weak] |

**Residual Risk Rating:** **[High]**

**Control Gaps Identified:**

- [Gap 1: e.g., No regular tabletop exercise conducted for ransomware scenario within the last 12 months]
- [Gap 2: e.g., Backup restoration RTO of X hours exceeds approved RTO for Core Banking]
- [Gap 3: e.g., Third-party access controls not included in scope of last penetration test]

---

*(Repeat Section 4.2 for each scenario assessed in this report cycle)*

---

### 4.3 Aggregate Risk Profile

*Summarize the overall risk profile across all scenarios, noting any concentration of risk or systemic vulnerabilities.*

| Risk Rating | Number of Scenarios | Scenario IDs |
|---|---|---|
| Critical | [X] | [SCN-YY-00X, ...] |
| High | [X] | [SCN-YY-00X, ...] |
| Medium | [X] | [SCN-YY-00X, ...] |
| Low | [X] | [SCN-YY-00X, ...] |
| **Total** | **[X]** | |

**Key Observations:**

- [Observation 1: e.g., Cyber-related scenarios represent the highest concentration of residual risk, accounting for X of Y Critical-rated findings.]
- [Observation 2: e.g., Third-party dependency risk has deteriorated quarter-on-quarter due to X.]
- [Observation 3: e.g., Infrastructure scenarios show improvement following completion of the DR site upgrade project.]

---

## 5. Evidence Reviewed

*List all documentation, system outputs, reports, and other evidence reviewed in the course of this analysis. This section supports audit traceability.*

### 5.1 Internal Documents

| # | Document Title | Document ID / Reference | Version / Date | Source |
|---|---|---|---|---|
| 1 | Critical System Inventory | [Doc ID] | [Version / Date] | IT Asset Management |
| 2 | Business Impact Analysis | [Doc ID] | [Version / Date] | Business Continuity |
| 3 | Technology Risk Register | [Doc ID] | [Version / Date] | Technology Risk |
| 4 | IT Disaster Recovery Plan | [Doc ID] | [Version / Date] | IT Operations |
| 5 | Business Continuity Plan | [Doc ID] | [Version / Date] | Business Continuity |
| 6 | Most Recent DR Test Report | [Doc ID] | [Date] | IT Operations |
| 7 | Previous Scenario Analysis Report | [Doc ID] | [Date] | Technology Risk |
| 8 | Penetration Test Report | [Doc ID] | [Date] | Cybersecurity |
| 9 | Vulnerability Assessment Report | [Doc ID] | [Date] | Cybersecurity |
| 10 | [Additional document] | [Doc ID] | [Date] | [Source] |

### 5.2 External and Regulatory References

| # | Document Title | Issuing Body | Date / Version |
|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | [Date] |
| 2 | [Relevant NACSA Advisory / Alert] | NACSA | [Date] |
| 3 | [Relevant FS-ISAC Intelligence Report] | FS-ISAC | [Date] |
| 4 | [Other external reference] | [Body] | [Date] |

### 5.3 System and Tool Outputs

| # | Output Type | System / Tool | Date Generated |
|---|---|---|---|
| 1 | Vulnerability scan results | [e.g., Nessus / Qualys] | [Date] |
| 2 | SIEM alert summary | [e.g., Splunk / Wazuh] | [Date] |
| 3 | Access review report | [e.g., IAM System] | [Date] |
| 4 | [Other system output] | [System] | [Date] |

---

## 6. Recommendations

### 6.1 Summary of Recommendations

*List all recommendations arising from the scenario analysis, prioritized by risk rating and implementation urgency.*

| Rec. ID | Related Scenario | Recommendation | Priority | Target Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | SCN-[YY]-001 | [Brief recommendation title] | Critical | [Owner] | [Date] | [Open / In Progress / Closed] |
| REC-002 | SCN-[YY]-001 | [Brief recommendation title] | High | [Owner] | [Date] | [Open / In Progress / Closed] |
| REC-003 | SCN-[YY]-003 | [Brief recommendation title] | High | [Owner] | [Date] | [Open / In Progress / Closed] |
| REC-004 | SCN-[YY]-002 | [Brief recommendation title] | Medium | [Owner] | [Date] | [Open / In Progress / Closed] |
| REC-005 | SCN-[YY]-004 | [Brief recommendation title] | Medium | [Owner] | [Date] | [Open / In Progress / Closed] |

**Priority Definitions:**
- **Critical:** Immediate action required; present to Board Risk Committee within 30 days.
- **High:** Action required within 60 days.
- **Medium:** Action required within 90 days.
- **Low:** Action required within 180 days.

### 6.2 Detailed Recommendations

*For each recommendation, provide sufficient detail to enable the assigned owner to implement the required action.*

---

#### REC-001: [Recommendation Title]

**Related Scenario:** [SCN-YY-001]

**Finding:** *Describe the control gap or risk condition that this recommendation addresses.*

[Detailed description of the gap or finding that necessitates this recommendation.]

**Recommendation:** *State clearly and specifically what action is required.*

[Specific, actionable recommendation. For example: "Conduct a full ransomware tabletop exercise involving IT Operations, Cybersecurity, and senior management within 60 days, using the documented Cyber Incident Response Plan as the basis. Findings from the exercise should be used to update the plan."]

**Expected Outcome:** [Description of the risk reduction or control improvement expected upon implementation.]

**Effort Estimate:** [Low / Medium / High]

**Resource Requirements:** [e.g., Internal IT team, external specialist, budget of approximately MYR X]

**Success Metric:** [How will implementation and effectiveness be measured? e.g., Completion of tabletop exercise with documented lessons learned and updated CIRP.]

---

*(Repeat Section 6.2 for each recommendation)*

---

### 6.3 Status of Prior Quarter Recommendations

*Track the status of recommendations raised in the previous Scenario Analysis Report to demonstrate management follow-through.*

| Rec. ID (Prior) | Recommendation | Original Due Date | Current Status | Evidence of Closure / Update |
|---|---|---|---|---|
| REC-[Prior]-001 | [Prior recommendation] | [Date] | [Closed / In Progress / Overdue] | [Evidence reference or update note] |
| REC-[Prior]-002 | [Prior recommendation] | [Date] | [Closed / In Progress / Overdue] | [Evidence reference or update note] |
| REC-[Prior]-003 | [Prior recommendation] | [Date] | [Closed / In Progress / Overdue] | [Evidence reference or update note] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for the preparation, review, approval, and implementation activities associated with this Scenario Analysis Report.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Technology Risk | CIO / CTO | CISO | Head of IT Operations | Business Continuity Manager | Business Unit Heads | Internal Audit | Board Risk Committee |
|---|---|---|---|---|---|---|---|---|
| Define assessment scope and criteria | R | A | C | C | C | I | I | I |
| Conduct scenario analysis | R | I | C | C | C | C | I | I |
| Review and validate findings | C | A | C | R | C | R | C | I |
| Approve recommendations | C | A | C | C | C | C | I | I |
| Implement recommendations | C | A | C | R | C | R | I | I |
| Monitor recommendation progress | R | A | I | I | I | I | C | I |
| Present report to governance committee | R | A | I | I | I | I | C | R |
| Review and approve final report | C | A | I | I | I | I | C | I |
| File and retain documentation | R | I | I | I | I | I | I | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [Date] | [Name, Title] | Initial draft |
| 0.2 | [Date] | [Name, Title] | Incorporated feedback from IT Operations and Cybersecurity |
| 0.3 | [Date] | [Name, Title] | Updated following stakeholder validation workshop |
| 1.0 | [Date] | [Name, Title] | Final version approved for submission |

### 8.2 Review Sign-Off

*The following individuals confirm they have reviewed this Scenario Analysis Report and that the content accurately reflects their area of responsibility.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk (Preparer) | [Name] | | [Date] |
| Head of IT Operations | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Business Continuity Manager | [Name] | | [Date] |

### 8.3 Approval Sign-Off

*The following senior officers confirm their approval of this Scenario Analysis Report and the recommendations contained herein.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Officer / Chief Technology Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| [Additional approver as required by governance framework] | [Name] | | [Date] |

### 8.4 Governance Submission Record

| Committee / Body | Submission Date | Outcome / Resolution | Minutes Reference |
|---|---|---|---|
| Technology Risk Committee | [Date] | [e.g., Noted and approved with comments] | [Minutes Ref] |
| Board Risk Committee | [Date] | [e.g., Noted] | [Minutes Ref] |
| [Other governance body] | [Date] | [Outcome] | [Minutes Ref] |

---

## 9. References

*The following regulatory requirements, standards, and internal policies are directly addressed by this Scenario Analysis Report.*

### 9.1 Regulatory Requirements

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.30 |
| [BNM Additional Reference] | [Title] | Bank Negara Malaysia | [Clause(s)] |
| [PDPA Reference, if applicable] | Personal Data Protection Act 2010 | Government of Malaysia | [Section(s)] |
| [NACSA Reference, if applicable] | [Title] | NACSA | [Section(s)] |

### 9.2 Industry Standards

| Standard | Title | Relevant Section(s) |
|---|---|---|
| ISO 22301:2019 | Security and resilience — Business continuity management systems | [Relevant clauses] |
| ISO 27001:2022 | Information security management systems | [Relevant clauses] |
| NIST SP 800-34 Rev. 1 | Contingency Planning Guide for Federal Information Systems | [Relevant sections] |
| [Other standard] | [Title] | [Relevant sections] |

### 9.3 Internal Policies and Procedures

| Document ID | Document Title | Version |
|---|---|---|
| [Doc ID] | Technology Risk Management Framework | [Version] |
| [Doc ID] | Business Continuity Policy | [Version] |
| [Doc ID] | IT Disaster Recovery Policy | [Version] |
| [Doc ID] | Cybersecurity Policy | [Version] |
| [Doc ID] | [Other relevant internal policy] | [Version] |

---

## 10. Appendices

### Appendix A: Glossary of Terms

*Define key terms and acronyms used in this report to ensure consistent understanding across all readers.*

| Term / Acronym | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank of Malaysia |
| BCP | Business Continuity Plan |
| CISO | Chief Information Security Officer |
| CIO | Chief Information Officer |
| DR | Disaster Recovery |
| ERM | Enterprise Risk Management |
| FS-ISAC | Financial Services Information Sharing and Analysis Center |
| IAM | Identity and Access Management |
| NACSA | National Cyber Security Agency of Malaysia |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| RMiT | Risk Management in Technology |
| RPO | Recovery Point Objective — the maximum tolerable period of data loss |
| RTO | Recovery Time Objective — the target time for restoring a system after a disruption |
| SIEM | Security Information and Event Management |
| TRM | Technology Risk Management |

### Appendix B: Scenario Register

*A complete register of all scenarios assessed, including those not fully detailed in the body of this report. This register should be maintained as a living document and updated quarterly.*

| Scenario ID | Scenario Name | Category | Date First Assessed | Last Assessed | Current Residual Rating | Review Frequency |
|---|---|---|---|---|---|---|
| SCN-[YY]-001 | [Scenario Name] | Cyber | [Date] | [Date] | High | Quarterly |
| SCN-[YY]-002 | [Scenario Name] | Infrastructure | [Date] | [Date] | Medium | Quarterly |
| SCN-[YY]-003 | [Scenario Name] | Third-Party | [Date] | [Date] | High | Quarterly |
| SCN-[YY]-004 | [Scenario Name] | Infrastructure | [Date] | [Date] | Medium | Quarterly |
| SCN-[YY]-005 | [Scenario Name] | Cyber | [Date] | [Date] | High | Quarterly |

### Appendix C: Control Inventory

*A summary of controls assessed as part of this scenario analysis, cross-referenced to the scenarios in which they were evaluated.*

| Control ID | Control Description | Control Type | Control Owner | Related Scenarios | Effectiveness Rating | Last Tested |
|---|---|---|---|---|---|---|
| CTL-001 | [Control Description] | Preventive | [Owner] | SCN-[YY]-001, 005 | Moderate | [Date] |
| CTL-002 | [Control Description] | Detective | [Owner] | SCN-[YY]-001, 002 | Strong | [Date] |
| CTL-003 | [Control Description] | Recovery | [Owner] | SCN-[YY]-002, 004 | Weak | [Date] |
| CTL-004 | [Control Description] | Responsive | [Owner] | SCN-[YY]-001, 003 | Moderate | [Date] |

### Appendix D: Recommendation Tracking Log

*A detailed log for tracking the implementation status of all open recommendations across current and prior quarters. This log should be updated monthly by the respective recommendation owners.*

| Rec. ID | Quarter Raised | Related Scenario | Recommendation Summary | Priority | Owner | Target Date | Last Updated | Current Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| REC-001 | [Q / Year] | [SCN-ID] | [Summary] | Critical | [Owner] | [Date] | [Date] | Open | [Update notes] |
| REC-002 | [Q / Year] | [SCN-ID] | [Summary] | High | [Owner] | [Date] | [Date] | In Progress | [Update notes] |
| REC-003 | [Q / Year] | [SCN-ID] | [Summary] | Medium | [Owner] | [Date] | [Date] | Closed | [Closure evidence] |

### Appendix E: Threat Intelligence Summary

*Summarize the threat intelligence inputs used to inform scenario selection and likelihood ratings for this reporting period.*

| Source | Intelligence Summary | Date Received | Relevance to Scenarios |
|---|---|---|---|
| [e.g., NACSA Advisory XX-XXXX] | [Brief summary of advisory content] | [Date] | [SCN-IDs affected] |
| [e.g., FS-ISAC Alert] | [Brief summary] | [Date] | [SCN-IDs affected] |
| [Internal SOC Report] | [Brief summary of internally observed threat activity] | [Date] | [SCN-IDs affected] |
| [Industry Peer Incident] | [Brief anonymized summary of relevant industry incident] | [Date] | [SCN-IDs affected] |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution of this document is strictly prohibited. This document must be retained in accordance with [Organization Name]'s Records Management Policy and the minimum retention period prescribed under BNM RMiT.*

*Document ID: [Document ID] | Version: 1.0 | Last Review Date: [Last Review Date]*