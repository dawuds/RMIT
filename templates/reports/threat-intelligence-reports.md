# Threat Intelligence Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Threat Intelligence Lead |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

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

*Provide a concise, high-level summary of the threat landscape, significant findings, and critical actions required during this reporting period. This section is intended for senior management and should be readable without reference to technical sections.*

**Reporting Period:** [Q1/Q2/Q3/Q4] [Year] — [Start Date] to [End Date]

**Overall Threat Level Assessment:** [Critical / High / Medium / Low]

During the reporting period, [Organization Name]'s threat intelligence function identified **[X]** significant threat indicators, **[X]** active campaigns targeting the Malaysian financial sector, and **[X]** vulnerabilities requiring immediate remediation.

### 1.1 Period Highlights

| # | Highlight | Severity | Status |
|---|---|---|---|
| 1 | [Key threat finding or incident summary] | [Critical/High/Medium/Low] | [Open/Mitigated/Closed] |
| 2 | [Key threat finding or incident summary] | [Critical/High/Medium/Low] | [Open/Mitigated/Closed] |
| 3 | [Key threat finding or incident summary] | [Critical/High/Medium/Low] | [Open/Mitigated/Closed] |

### 1.2 Threat Landscape Snapshot

- **Threat Actors Active in Region:** [Number and brief description]
- **New Malware Variants Observed:** [Number]
- **Critical Vulnerabilities Identified:** [Number]
- **Indicators of Compromise (IOCs) Collected:** [Number]
- **Actionable Intelligence Items:** [Number]

### 1.3 Priority Actions Required

> The following items require immediate attention from senior management and relevant business units:

1. **[Priority Action 1]** — Deadline: [Date] — Owner: [Business Unit / Role]
2. **[Priority Action 2]** — Deadline: [Date] — Owner: [Business Unit / Role]
3. **[Priority Action 3]** — Deadline: [Date] — Owner: [Business Unit / Role]

---

## 2. Purpose and Scope

### 2.1 Purpose

This Threat Intelligence Report is produced by [Organization Name]'s Threat Intelligence function in fulfilment of obligations under **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, specifically Clause **11.16**, which requires financial institutions to establish and maintain a threat intelligence capability that systematically collects, analyses, and disseminates intelligence to inform risk management decisions.

The report serves to:

- Provide senior management with a structured assessment of the current cyber threat landscape relevant to [Organization Name] and the broader Malaysian financial sector.
- Communicate actionable intelligence findings that inform defensive posture, security controls, and incident response priorities.
- Document evidence of an ongoing, intelligence-led approach to technology risk management in support of regulatory compliance.
- Enable timely escalation and response to emerging threats before they materialise into incidents.

### 2.2 Regulatory Basis

| Regulatory Framework | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 11.16 | Financial institutions must implement a threat intelligence process covering collection, analysis, and dissemination of relevant cyber threat information. |
| BNM RMiT | Clause 11.1 – 11.5 | Technology risk governance and oversight obligations applicable to the threat intelligence function. |
| Personal Data Protection Act 2010 (PDPA) | Part II, Section 5 | Data handling requirements applicable to personal data processed during intelligence gathering activities. |
| [Additional Framework] | [Clause] | [Description] |

### 2.3 Scope

*Define the organizational scope (entities, systems, geographies) and intelligence domains covered in this report. Exclude areas explicitly out of scope and provide rationale.*

**In Scope:**

- All technology systems, networks, and digital assets operated by [Organization Name] and its subsidiaries.
- Threat actors, campaigns, and vulnerabilities relevant to the Malaysian financial services sector.
- Intelligence feeds, open-source intelligence (OSINT), industry sharing groups, and vendor intelligence subscriptions active during the reporting period.
- [Additional scope item]

**Out of Scope:**

- Physical security threats not related to technology systems.
- Third-party vendor internal security posture (unless directly impacting [Organization Name]).
- [Additional exclusion]

### 2.4 Report Audience

| Audience | Distribution Level |
|---|---|
| Board Risk Committee | Executive Summary (Section 1) |
| Senior Management / EXCO | Full Report |
| Chief Information Security Officer (CISO) | Full Report |
| Threat Intelligence Team | Full Report including Appendices |
| Incident Response Team | Sections 4, 5, 6, and Appendices |
| Technology Risk Management | Full Report |
| External Regulators (BNM) | Upon request — Full Report |

---

## 3. Scope and Methodology

*Describe the intelligence collection and analysis methodology used during this reporting period, including sources, tools, frameworks applied, and any limitations encountered.*

### 3.1 Intelligence Collection Sources

| Source Category | Source / Feed | Description | Reliability |
|---|---|---|---|
| Commercial Threat Feeds | [Vendor Name] | [Description of intelligence feed] | [High/Medium/Low] |
| Industry Sharing | Financial Sector CERT (FinSAC) | Malaysian financial sector threat sharing | High |
| Industry Sharing | [ISAC / Sharing Group] | [Description] | [High/Medium/Low] |
| Open Source Intelligence (OSINT) | [OSINT Tool/Source] | [Description] | [High/Medium/Low] |
| Dark Web Monitoring | [Tool/Vendor] | Monitoring of criminal forums, marketplaces, and paste sites | Medium |
| Internal Telemetry | SIEM / EDR / Firewall Logs | Internal detection and log correlation | High |
| Vulnerability Intelligence | [NVD / Vendor Advisories] | CVE and vendor security bulletin monitoring | High |
| Human Intelligence (HUMINT) | [Industry Networks / Contacts] | [Description] | Medium |

### 3.2 Intelligence Analysis Framework

*State the structured analytical framework used to process and assess intelligence during this reporting period.*

Intelligence analysis was conducted using the following frameworks:

- **MITRE ATT&CK Framework** (Version [X.X]): Used to map observed adversary tactics, techniques, and procedures (TTPs) to a common taxonomy.
- **Diamond Model of Intrusion Analysis**: Applied to characterise threat actor relationships and campaign attribution.
- **Traffic Light Protocol (TLP)**: Used to classify and control the dissemination of sensitive threat intelligence.
- **[Additional Framework]**: [Description of use]

### 3.3 Intelligence Cycle

```
Collection → Processing → Analysis → Dissemination → Feedback
```

| Phase | Activities Performed | Tools Used |
|---|---|---|
| **Collection** | Automated feed ingestion, manual OSINT collection, internal telemetry aggregation | [SIEM Platform], [TIP Platform], [OSINT Tools] |
| **Processing** | IOC normalisation, deduplication, enrichment, false positive filtering | [Tool/Platform] |
| **Analysis** | Correlation, TTP mapping, adversary profiling, risk assessment | MITRE ATT&CK Navigator, [Analyst Tools] |
| **Dissemination** | Report generation, IOC sharing, alert notifications | [Reporting Tool], Email, [Ticketing System] |
| **Feedback** | Stakeholder review, effectiveness measurement, source calibration | [Process/Tool] |

### 3.4 Methodology Limitations

*Document any limitations in the intelligence collected or analytical conclusions that stakeholders should be aware of.*

- [Limitation 1]: e.g., "Coverage of [specific threat category] was limited due to [reason]. This may result in incomplete visibility into [specific threat domain]."
- [Limitation 2]: [Description of limitation and its impact on findings]
- [Limitation 3]: [Description of limitation and its impact on findings]

---

## 4. Key Findings and Observations

*Present the significant threat findings identified during the reporting period. Organise by threat category and provide sufficient detail to enable informed decision-making. Each finding should be traceable to supporting evidence in the Appendices.*

### 4.1 Threat Landscape Overview

*Provide a brief narrative of the overall threat environment relevant to [Organization Name] during this reporting period.*

[Provide 2–4 paragraphs describing the macro threat environment, key shifts from the previous reporting period, and overarching themes observed in threat intelligence during this quarter.]

### 4.2 Active Threat Actors

*Document threat actor groups observed actively targeting the Malaysian financial sector or organisations with a similar profile.*

| Threat Actor | Classification | Motivation | Observed TTPs | Relevance to [Org] | Confidence Level |
|---|---|---|---|---|---|
| [Actor Name / APT Group] | [Nation-State / Criminal / Hacktivist] | [Financial / Espionage / Disruption] | [MITRE ATT&CK Techniques] | [High/Medium/Low] | [High/Medium/Low] |
| [Actor Name / APT Group] | [Nation-State / Criminal / Hacktivist] | [Financial / Espionage / Disruption] | [MITRE ATT&CK Techniques] | [High/Medium/Low] | [High/Medium/Low] |
| [Actor Name / APT Group] | [Nation-State / Criminal / Hacktivist] | [Financial / Espionage / Disruption] | [MITRE ATT&CK Techniques] | [High/Medium/Low] | [High/Medium/Low] |

### 4.3 Active Campaigns and Attack Trends

#### 4.3.1 Finding [F-001]: [Campaign or Trend Name]

- **Category:** [Malware / Phishing / Ransomware / DDoS / Supply Chain / Insider Threat / Other]
- **Detection Date / Period:** [Date or Period]
- **Affected Sector(s):** [Financial Services / Specific Sub-Sector]
- **Threat Actor Attribution:** [Actor Name or Unattributed]
- **MITRE ATT&CK Techniques:** [T1566.001 – Spearphishing Attachment], [T1059 – Command and Scripting Interpreter]
- **TLP Classification:** [TLP:RED / TLP:AMBER / TLP:GREEN / TLP:CLEAR]

**Description:**
[Provide a detailed description of the campaign, attack pattern, or trend. Include technical details sufficient for the security operations team to act upon. Reference supporting IOCs and evidence in the Appendices.]

**Observable Indicators:**
- [IOC Type]: `[IOC Value]` — [Description]
- [IOC Type]: `[IOC Value]` — [Description]
- [IOC Type]: `[IOC Value]` — [Description]

**Potential Impact to [Organization Name]:**
[Describe the potential business and technical impact if this threat were to materialise against [Organization Name]'s assets.]

---

#### 4.3.2 Finding [F-002]: [Campaign or Trend Name]

- **Category:** [Category]
- **Detection Date / Period:** [Date or Period]
- **Affected Sector(s):** [Sector]
- **Threat Actor Attribution:** [Attribution or Unattributed]
- **MITRE ATT&CK Techniques:** [Techniques]
- **TLP Classification:** [TLP Level]

**Description:**
[Description]

**Observable Indicators:**
- [IOC]: `[Value]`

**Potential Impact to [Organization Name]:**
[Impact description]

---

*[Repeat Finding sections as required for all significant findings during the reporting period.]*

### 4.4 Vulnerability Intelligence

*Summarise critical and high-severity vulnerabilities identified during the reporting period that are relevant to [Organization Name]'s technology environment.*

| CVE ID | CVSS Score | Severity | Affected Component | Exploitation Status | Patch Available | Priority |
|---|---|---|---|---|---|---|
| CVE-[YYYY]-[XXXXX] | [Score] | Critical | [System/Software] | [Actively Exploited / PoC Available / No Known Exploit] | [Yes/No/Partial] | [P1/P2/P3] |
| CVE-[YYYY]-[XXXXX] | [Score] | High | [System/Software] | [Actively Exploited / PoC Available / No Known Exploit] | [Yes/No/Partial] | [P1/P2/P3] |
| CVE-[YYYY]-[XXXXX] | [Score] | Medium | [System/Software] | [Actively Exploited / PoC Available / No Known Exploit] | [Yes/No/Partial] | [P1/P2/P3] |

### 4.5 Dark Web and Underground Forum Activity

*Summarise relevant observations from dark web monitoring and underground criminal forums that may indicate targeting of [Organization Name] or sector-wide threats.*

| Observation | Source | Date Observed | Relevance | Action Taken |
|---|---|---|---|---|
| [Description of dark web observation] | [Forum/Marketplace] | [Date] | [High/Medium/Low] | [Action] |
| [Description of dark web observation] | [Forum/Marketplace] | [Date] | [High/Medium/Low] | [Action] |

### 4.6 Sector-Specific Intelligence

*Summarise threat intelligence sourced from financial sector sharing groups, FinSAC, and BNM advisories relevant to the Malaysian financial services industry.*

- **FinSAC Advisory [Ref]:** [Summary of advisory and relevance to [Organization Name]]
- **BNM Circular [Ref]:** [Summary and required actions]
- **[Industry ISAC] Alert [Ref]:** [Summary]
- **[Other Sector Intelligence]:** [Summary]

---

## 5. Risk Ratings and Prioritisation

*Assess and prioritise all findings identified in Section 4 using a consistent risk rating methodology. Ratings should consider both likelihood and potential impact to [Organization Name].*

### 5.1 Risk Rating Methodology

*Describe the risk rating framework applied to findings in this report.*

Risk ratings are assigned using a **5×5 risk matrix** combining **Likelihood** and **Impact** dimensions:

| Likelihood \ Impact | Insignificant (1) | Minor (2) | Moderate (3) | Major (4) | Catastrophic (5) |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium | High | High | Critical | Critical |
| **Likely (4)** | Low | Medium | High | High | Critical |
| **Possible (3)** | Low | Medium | Medium | High | High |
| **Unlikely (2)** | Low | Low | Medium | Medium | High |
| **Rare (1)** | Low | Low | Low | Medium | Medium |

**Rating Definitions:**

| Rating | Score | Response Timeline | Escalation |
|---|---|---|---|
| **Critical** | 20–25 | Immediate (within 24 hours) | CISO and Senior Management |
| **High** | 12–19 | Within 72 hours | CISO |
| **Medium** | 6–11 | Within 30 days | Threat Intelligence Lead |
| **Low** | 1–5 | Next scheduled review cycle | Documented and monitored |

### 5.2 Consolidated Risk Register — Current Period

| Finding ID | Finding Title | Likelihood | Impact | Risk Rating | Previous Rating | Trend | Owner |
|---|---|---|---|---|---|---|---|
| F-001 | [Finding Name] | [1–5] | [1–5] | [Critical/High/Medium/Low] | [Previous Rating] | [↑ Increasing / → Stable / ↓ Decreasing] | [Role/Team] |
| F-002 | [Finding Name] | [1–5] | [1–5] | [Critical/High/Medium/Low] | [Previous Rating] | [↑ / → / ↓] | [Role/Team] |
| F-003 | [Finding Name] | [1–5] | [1–5] | [Critical/High/Medium/Low] | [Previous Rating] | [↑ / → / ↓] | [Role/Team] |
| F-004 | [Finding Name] | [1–5] | [1–5] | [Critical/High/Medium/Low] | [Previous Rating] | [↑ / → / ↓] | [Role/Team] |

### 5.3 Risk Distribution Summary

| Risk Rating | Count (Current Period) | Count (Previous Period) | Change |
|---|---|---|---|
| Critical | [Number] | [Number] | [+/-/No Change] |
| High | [Number] | [Number] | [+/-/No Change] |
| Medium | [Number] | [Number] | [+/-/No Change] |
| Low | [Number] | [Number] | [+/-/No Change] |
| **Total** | **[Total]** | **[Total]** | |

### 5.4 Residual Risk Assessment

*Identify findings where residual risk remains elevated after existing controls are considered, and where additional mitigation is urgently required.*

| Finding ID | Existing Controls | Control Effectiveness | Residual Risk | Justification |
|---|---|---|---|---|
| F-001 | [Existing controls in place] | [Effective/Partially Effective/Ineffective] | [Rating] | [Rationale for residual risk level] |
| F-002 | [Existing controls in place] | [Effective/Partially Effective/Ineffective] | [Rating] | [Rationale for residual risk level] |

---

## 6. Recommendations and Action Items

*Provide specific, actionable recommendations for each significant finding. Each recommendation must be assigned an owner, priority, and target completion date to enable tracking and accountability.*

### 6.1 Immediate Actions (Critical Priority — Within 24–72 Hours)

| Action ID | Recommendation | Finding Ref | Owner | Target Date | Status |
|---|---|---|---|---|---|
| ACT-001 | [Specific, actionable recommendation] | F-001 | [Role/Team] | [Date] | [Not Started/In Progress/Completed] |
| ACT-002 | [Specific, actionable recommendation] | F-002 | [Role/Team] | [Date] | [Not Started/In Progress/Completed] |

### 6.2 Short-Term Actions (High Priority — Within 30 Days)

| Action ID | Recommendation | Finding Ref | Owner | Target Date | Status |
|---|---|---|---|---|---|
| ACT-003 | [Specific, actionable recommendation] | F-003 | [Role/Team] | [Date] | [Not Started/In Progress/Completed] |
| ACT-004 | [Specific, actionable recommendation] | F-004 | [Role/Team] | [Date] | [Not Started/In Progress/Completed] |
| ACT-005 | [Specific, actionable recommendation] | F-001 | [Role/Team] | [Date] | [Not Started/In Progress/Completed] |

### 6.3 Medium-Term Actions (Medium Priority — Within 90 Days)

| Action ID | Recommendation | Finding Ref | Owner | Target Date | Status |
|---|---|---|---|---|---|
| ACT-006 | [Specific, actionable recommendation] | F-005 | [Role/Team] | [Date] | [Not Started/In Progress/Completed] |
| ACT-007 | [Specific, actionable recommendation] | F-006 | [Role/Team] | [Date] | [Not Started/In Progress/Completed] |

### 6.4 Strategic Recommendations (Next Review Cycle)

*Provide forward-looking recommendations to improve threat intelligence capability, coverage, or institutional resilience based on trends observed during this period.*

1. **[Strategic Recommendation 1]:** [Detailed description of the recommendation, including rationale based on findings, expected outcome, and resource requirements.]

2. **[Strategic Recommendation 2]:** [Detailed description of the recommendation, including rationale based on findings, expected outcome, and resource requirements.]

3. **[Strategic Recommendation 3]:** [Detailed description of the recommendation, including rationale, expected outcome, and resource requirements.]

### 6.5 Carry-Forward Actions from Previous Period

*Track the status of recommendations raised in the previous Threat Intelligence Report that have not yet been fully remediated.*

| Action ID | Original Recommendation | Original Due Date | Current Status | Updated Due Date | Notes |
|---|---|---|---|---|---|
| [Prev-ACT-001] | [Description from prior report] | [Original Date] | [In Progress/Overdue/Partially Complete] | [New Date] | [Explanation for delay or update] |
| [Prev-ACT-002] | [Description from prior report] | [Original Date] | [In Progress/Overdue/Partially Complete] | [New Date] | [Explanation for delay or update] |

---

## 7. Management Response

*This section is to be completed by the relevant business unit owners and senior management in response to the findings and recommendations presented in this report. Responses must be provided within [X] business days of report distribution.*

### 7.1 Response Instructions

*Each business unit receiving a recommendation in Section 6 is required to provide a formal response below. Responses must include acceptance or rejection of the recommendation, a committed remediation timeline, and the name of the accountable executive.*

### 7.2 Management Response Table

| Action ID | Recommendation Summary | Business Unit | Response (Accept/Reject/Partially Accept) | Committed Completion Date | Accountable Executive | Response Comments |
|---|---|---|---|---|---|---|
| ACT-001 | [Brief summary] | [Business Unit] | [Accept/Reject/Partially Accept] | [Date] | [Name, Title] | [Comments or rationale if rejecting/modifying] |
| ACT-002 | [Brief summary] | [Business Unit] | [Accept/Reject/Partially Accept] | [Date] | [Name, Title] | [Comments] |
| ACT-003 | [Brief summary] | [Business Unit] | [Accept/Reject/Partially Accept] | [Date] | [Name, Title] | [Comments] |
| ACT-004 | [Brief summary] | [Business Unit] | [Accept/Reject/Partially Accept] | [Date] | [Name, Title] | [Comments] |

### 7.3 Risk Acceptance Declarations

*Where management elects to accept residual risk rather than remediate, a formal risk acceptance declaration must be completed and approved at the appropriate authority level.*

| Finding ID | Risk Description | Risk Rating | Accepting Authority | Date of Acceptance | Rationale | Review Date |
|---|---|---|---|---|---|---|
| [Finding ID] | [Brief risk description] | [Rating] | [Name, Title] | [Date] | [Reason for risk acceptance] | [Date for next review of acceptance] |

### 7.4 CISO Sign-Off

By signing below, the Chief Information Security Officer acknowledges receipt of this Threat Intelligence Report and confirms that the findings, risk ratings, and management responses have been reviewed.

| Name | Title | Signature | Date |
|---|---|---|---|
| [CISO Name] | Chief Information Security Officer | | [Date] |

---

## 8. Roles and Responsibilities

*Defines accountability for activities related to the production, review, distribution, and actioning of this Threat Intelligence Report.*

### 8.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Threat Intelligence Lead | CISO | Technology Risk Management | Incident Response Team | Business Unit Heads | Board Risk Committee |
|---|---|---|---|---|---|---|
| Intelligence collection and processing | R | I | C | C | I | I |
| Threat analysis and TTP mapping | R | C | C | C | I | I |
| Report drafting and compilation | R | A | C | I | I | I |
| Risk rating and prioritisation | R | A | C | I | I | I |
| Recommendation formulation | R | A | C | R | C | I |
| Internal distribution of report | R | A | I | I | I | I |
| Management response coordination | C | R | A | I | R | I |
| Action item tracking and follow-up | A | A | R | C | R | I |
| Report approval | C | R | C | I | I | A |
| BNM regulatory submission (if required) | C | R | A | I | I | C |
| Quarterly review and update | R | A | C | C | I | I |
| Risk acceptance approval | C | C | R | I | C | A |

### 8.2 Key Roles and Definitions

| Role | Responsibilities |
|---|---|
| **Threat Intelligence Lead** | Owns the intelligence cycle end-to-end; responsible for collection, analysis, and report production. Primary author of this document. |
| **Chief Information Security Officer (CISO)** | Accountable for the overall threat intelligence programme; reviews and approves this report before distribution; escalates critical findings to senior management. |
| **Technology Risk Management** | Reviews findings against the technology risk register; ensures alignment with the enterprise risk management framework; coordinates risk acceptance where applicable. |
| **Incident Response Team** | Receives actionable IOCs and threat intelligence to inform detection and response playbooks; provides feedback on intelligence utility. |
| **Business Unit Heads** | Accountable for implementing remediation actions assigned to their business units; provide formal management responses within the required timeframe. |
| **Board Risk Committee** | Receives executive-level summary of significant threat findings; approves material risk acceptance decisions. |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document created |
| [X.X] | [Date] | [Author Name, Title] | [Description of changes made] |
| [X.X] | [Date] | [Author Name, Title] | [Description of changes made] |

### 9.2 Review Schedule

This document is reviewed and reissued on a **quarterly** basis in accordance with BNM RMiT Clause 11.16 requirements and [Organization Name]'s Technology Risk Management Policy.

| Review Cycle | Review Due Date | Completed Date | Reviewer |
|---|---|---|---|
| Q1 [Year] | [Date] | [Date] | [Name, Title] |
| Q2 [Year] | [Date] | [Date] | [Name, Title] |
| Q3 [Year] | [Date] | [Date] | [Name, Title] |
| Q4 [Year] | [Date] | [Date] | [Name, Title] |

### 9.3 Approval Sign-Off

*The following individuals confirm that they have reviewed this Threat Intelligence Report and that it accurately represents the findings, risk assessments, and recommendations for the reporting period stated herein.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Threat Intelligence Lead (Author) | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Risk Officer / Technology Risk Management Head | [Name] | | [Date] |
| Chief Technology Officer / Chief Information Officer | [Name] | | [Date] |
| [Additional Approver as required] | [Name] | | [Date] |

---

## 10. References

*The following regulatory documents, standards, and frameworks inform the requirements addressed by this Threat Intelligence Report.*

### 10.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) | Version / Date |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 11.16 | [Version / Effective Date] |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clauses 11.1–11.5 (Technology Risk Governance) | [Version / Effective Date] |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.1–10.5 (Security Operations) | [Version / Effective Date] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Part II, Section 5 | 2010 (as amended) |
| [NACSA Reference] | [NACSA Guideline Title] | National Cyber Security Agency (NACSA) | [Relevant Section] | [Version / Date] |
| [Additional Reference] | [Title] | [Authority] | [Section] | [Version / Date] |

### 10.2 Internal References

| Document | Document ID | Owner | Location |
|---|---|---|---|
| Technology Risk Management Policy | [Doc ID] | Technology Risk Management | [Document Repository Link / Location] |
| Information Security Policy | [Doc ID] | CISO | [Document Repository Link / Location] |
| Incident Response Plan | [Doc ID] | Incident Response Team | [Document Repository Link / Location] |
| Vulnerability Management Procedure | [Doc ID] | [Owner] | [Document Repository Link / Location] |
| Third Party Risk Management Policy | [Doc ID] | [Owner] | [Document Repository Link / Location] |

### 10.3 Standards and Frameworks

| Standard / Framework | Version | Application |
|---|---|---|
| MITRE ATT&CK Framework | [Version] | TTP mapping for threat actor characterisation |
| NIST Cybersecurity Framework (CSF) | [Version] | Alignment of security controls with intelligence findings |
| ISO/IEC 27001 | 2022 | Information security management alignment |
| Traffic Light Protocol (TLP) | TLP 2.0 | Intelligence sharing and dissemination classification |
| Diamond Model of Intrusion Analysis | — | Adversary campaign analysis |
| STIX/TAXII | [Version] | Structured threat intelligence format for IOC sharing |

---

## 11. Appendices

### Appendix A — Indicators of Compromise (IOC) Master List

*Provides a comprehensive, machine-readable list of all Indicators of Compromise collected and validated during this reporting period. This appendix supports automated ingestion into SIEM, firewall, and EDR platforms.*

**TLP Classification of this Appendix:** [TLP:AMBER / TLP:RED]

| IOC ID | IOC Type | IOC Value | Threat Actor / Campaign | Confidence | First Seen | Last Seen | Status |
|---|---|---|---|---|---|---|---|
| IOC-001 | [IP Address / Domain / Hash / URL / Email] | `[Value]` | [Actor/Campaign] | [High/Medium/Low] | [Date] | [Date] | [Active/Inactive] |
| IOC-002 | [Type] | `[Value]` | [Actor/Campaign] | [Confidence] | [Date] | [Date] | [Active/Inactive] |
| IOC-003 | [Type] | `[Value]` | [Actor/Campaign] | [Confidence] | [Date] | [Date] | [Active/Inactive] |

*[Full IOC list to be attached as a separate CSV/STIX file for operational use. Reference: [Filename / Repository Location]]*

---

### Appendix B — MITRE ATT&CK TTP Mapping

*Maps findings from this report to MITRE ATT&CK tactics, techniques, and sub-techniques for integration with detection engineering and red team planning.*

| Finding Ref | Tactic | Technique ID | Technique Name | Sub-Technique | Observed Behaviour |
|---|---|---|---|---|---|
| F-001 | [Initial Access] | T[XXXX] | [Technique Name] | [Sub-Technique if applicable] | [Description of observed behaviour] |
| F-001 | [Execution] | T[XXXX] | [Technique Name] | [Sub-Technique if applicable] | [Description] |
| F-002 | [Persistence] | T[XXXX] | [Technique Name] | [Sub-Technique if applicable] | [Description] |

*[ATT&CK Navigator layer file available at: [Repository Location]]*

---

### Appendix C — Intelligence Source Assessment

*Documents the performance and reliability assessment of intelligence sources used during this reporting period to inform source calibration and procurement decisions.*

| Source | Category | Intelligence Items Received | Items Validated | Items Actioned | Overall Reliability | Cost Justification |
|---|---|---|---|---|---|---|
| [Source Name] | [Commercial/OSINT/ISAC/Internal] | [Number] | [Number] | [Number] | [High/Medium/Low] | [Notes on value delivered] |
| [Source Name] | [Category] | [Number] | [Number] | [Number] | [High/Medium/Low] | [Notes] |

---

### Appendix D — Threat Actor Profiles

*Provides detailed profiles for threat actors assessed as posing a significant and active risk to [Organization Name] during this reporting period.*

#### D.1 [Threat Actor Name]

- **Classification:** [Nation-State / Cybercriminal / Hacktivist / Insider]
- **Country of Origin / Attribution:** [Country or Region]
- **Active Since:** [Year]
- **Primary Motivation:** [Financial Gain / Espionage / Disruption / Ideology]
- **Known Targets:** [Target Sectors / Geographies]
- **Known Tooling:** [Malware families, exploit frameworks, tools]
- **Key TTPs:** [MITRE ATT&CK references]
- **Recent Activity:** [Summary of recent campaigns relevant to this period]
- **Relevance to [Organization Name]:** [Assessment of targeting likelihood and potential impact]
- **Recommended Detections:** [Detection strategies, SIEM rules, or controls]

---

### Appendix E — Vulnerability Detail Sheets

*Provides expanded technical detail for critical and high severity vulnerabilities listed in Section 4.4, supporting patch management prioritisation and technical remediation.*

#### E.1 CVE-[YYYY]-[XXXXX] — [Vulnerability Name]

- **CVE ID:** CVE-[YYYY]-[XXXXX]
- **CVSS v3.1 Score:** [Score] ([Critical/High/Medium/Low])
- **CVSS Vector:** `[CVSS:3.1/AV:.../AC:.../PR:.../UI:.../S:.../C:.../I:.../A:...]`
- **Affected Vendors / Products:** [Vendor] — [Product] versions [X.X to Y.Y]
- **Vulnerability Description:** [Technical description of the vulnerability]
- **Exploitation Status:** [Actively Exploited in the Wild / PoC Published / No Known Exploit]
- **Affected [Organization Name] Assets:** [List of systems or confirm assessment pending]
- **Remediation:** [Patch version, workaround, or compensating control]
- **Patch Available:** [Yes — [Patch/Version] / No / Vendor Working on Fix]
- **Recommended Action:** [Specific action for [Organization Name]'s environment]
- **References:** [NVD Link], [Vendor Advisory], [Additional references]

---

### Appendix F — Historical Trend Analysis

*Tracks threat intelligence metrics across reporting periods to identify macro-level trends and measure programme effectiveness.*

| Metric | Q[X] [Year-1] | Q[X-1] [Year] | Q[X] [Year] | Trend |
|---|---|---|---|---|
| Total Findings Reported | [Number] | [Number] | [Number] | [↑ / → / ↓] |
| Critical Findings | [Number] | [Number] | [Number] | [↑ / → / ↓] |
| High Findings | [Number] | [Number] | [Number] | [↑ / → / ↓] |
| IOCs Collected | [Number] | [Number] | [Number] | [↑ / → / ↓] |
| IOCs Actioned | [Number] | [Number] | [Number] | [↑ / → / ↓] |
| Recommendations Issued | [Number] | [Number] | [Number] | [↑ / → / ↓] |
| Recommendations Completed on Time | [%] | [%] | [%] | [↑ / → / ↓] |
| Mean Time to Action (Critical) | [Hours] | [Hours] | [Hours] | [↑ / → / ↓] |
| Intelligence Sources Active | [Number] | [Number] | [Number] | [↑ / → / ↓] |

---

### Appendix G — Distribution List

*Documents all individuals and groups to whom this report was distributed, and the classification level distributed.*

| Recipient Name | Title | Business Unit | Distribution Level | Date Distributed | Method |
|---|---|---|---|---|---|
| [Name] | [Title] | [Business Unit] | [Full Report / Executive Summary] | [Date] | [Secure Email / Portal / Physical] |
| [Name] | [Title] | [Business Unit] | [Full Report / Executive Summary] | [Date] | [Method] |
| [Name] | [Title] | [Business Unit] | [Full Report / Executive Summary] | [Date] | [Method] |

---

*End of Document*

---

**Document Classification: Confidential**
**© [Organization Name] [Year] — All Rights Reserved**
*This document contains proprietary and regulatory-sensitive information. Distribution is restricted to authorised recipients only. Unauthorised disclosure is prohibited under [Organization Name]'s Information Security Policy and applicable Malaysian law.*