# Situational Awareness Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]
**Report Period:** [Report Period Start Date] to [Report Period End Date]

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorised recipients within [Organization Name] and must not be disclosed, reproduced, or distributed without prior written approval from the document owner. Unauthorised disclosure may constitute a breach of regulatory obligations under Bank Negara Malaysia (BNM) guidelines and applicable Malaysian law.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Target Audience and Completion Targets](#5-target-audience-and-completion-targets)
6. [Assessment Methodology and Pass Criteria](#6-assessment-methodology-and-pass-criteria)
7. [Content Update Schedule](#7-content-update-schedule)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Situational Awareness Report (SAR) is a mandatory quarterly compliance artifact produced by [Organization Name] in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.20**. The report provides a structured, evidence-based assessment of the current cyber threat landscape as it pertains to [Organization Name]'s technology environment, operational systems, and data assets.

The SAR serves as a primary mechanism through which [Organization Name]'s senior management, risk governance bodies, and technology leadership maintain informed situational awareness of emerging and persistent cyber threats, institutional exposure levels, and the effectiveness of existing controls. This document enables data-driven decision-making for risk treatment prioritisation and resource allocation.

### 1.2 Scope

*Define the organisational boundaries, technology assets, systems, and third-party relationships covered by this report. Clearly state what is in-scope and out-of-scope for this reporting period.*

**In-Scope:**

- [Organization Name]'s production technology infrastructure, including on-premises and cloud-hosted systems
- Internet-facing applications, services, and application programming interfaces (APIs)
- Internal networks, endpoints, and operational technology (OT) systems where applicable
- Critical third-party and vendor integrations classified as high or critical risk
- [List additional in-scope systems or environments]

**Out-of-Scope:**

- Decommissioned systems with no live data or connectivity as at [Report Period End Date]
- [List specific exclusions with justification]

### 1.3 Regulatory Basis

This report is produced in compliance with the following regulatory instruments:

| Regulation | Clause / Section | Requirement |
|---|---|---|
| BNM RMiT Policy Document | Clause 11.20 | Regular situational awareness reporting on cyber threat landscape and institutional exposure |
| [Additional Regulation] | [Clause] | [Requirement Summary] |
| [Additional Regulation] | [Clause] | [Requirement Summary] |

### 1.4 Report Frequency

This report is produced on a **quarterly** basis. The reporting schedule aligns with [Organization Name]'s technology risk governance calendar and is tabled at the [Relevant Committee Name, e.g., Technology Risk Committee / Board Risk Committee] within [X] business days of the close of each reporting quarter.

---

## 2. Executive Summary

*Provide a concise, non-technical summary of the most significant cyber threats observed during the reporting period, the organisation's assessed exposure, notable incidents, and the overall risk posture. This section is intended for senior management and board-level readers. Limit to one to two pages.*

### 2.1 Overall Risk Posture

| Risk Dimension | Current Quarter Rating | Prior Quarter Rating | Trend |
|---|---|---|---|
| Threat Landscape Severity | [Critical / High / Medium / Low] | [Critical / High / Medium / Low] | [↑ Increasing / → Stable / ↓ Decreasing] |
| Institutional Exposure Level | [Critical / High / Medium / Low] | [Critical / High / Medium / Low] | [↑ / → / ↓] |
| Control Effectiveness | [Strong / Adequate / Needs Improvement] | [Strong / Adequate / Needs Improvement] | [↑ / → / ↓] |
| Incident Activity | [High / Moderate / Low] | [High / Moderate / Low] | [↑ / → / ↓] |

**Overall Assessment:** [Provide a two to three sentence summary of the organisation's overall cybersecurity posture for the reporting period. State whether the risk posture has improved, deteriorated, or remained stable relative to the prior period and the primary contributing factors.]

### 2.2 Critical Highlights

*List the three to five most significant findings, threats, or incidents from this reporting period that require executive attention or action.*

- **[Highlight 1]:** [Brief description of the threat, exposure, or incident and its business impact or relevance.]
- **[Highlight 2]:** [Brief description.]
- **[Highlight 3]:** [Brief description.]
- **[Highlight 4 — if applicable]:** [Brief description.]
- **[Highlight 5 — if applicable]:** [Brief description.]

### 2.3 Management Actions Required

*Summarise any decisions, approvals, or resource commitments required from senior management or the board as a result of findings in this report.*

| Action Item | Owner | Priority | Due Date |
|---|---|---|---|
| [Action description] | [Role / Name] | [Critical / High / Medium] | [Date] |
| [Action description] | [Role / Name] | [Critical / High / Medium] | [Date] |
| [Action description] | [Role / Name] | [Critical / High / Medium] | [Date] |

---

## 3. Scope and Methodology

### 3.1 Reporting Period

*State the precise reporting period covered by this document and any material changes to scope since the prior report.*

- **Reporting Period:** [Start Date] to [End Date]
- **Report Issue Date:** [Date]
- **Changes to Scope Since Prior Report:** [Describe any additions, removals, or changes to the in-scope environment. State "No material changes" if applicable.]

### 3.2 Information Sources

*Describe all primary and secondary intelligence sources consulted during the preparation of this report. Cite sources without disclosing sensitive source identities where applicable.*

| Source Category | Source Description | Frequency of Input |
|---|---|---|
| Internal Security Operations | SIEM alerts, SOC incident logs, vulnerability scan outputs | Continuous / Weekly |
| Threat Intelligence Feeds | [Commercial / Open-source feed names, e.g., MISP, FS-ISAC, MyCERT advisories] | [Frequency] |
| BNM / Regulatory Advisories | BNM cybersecurity circulars and industry threat advisories | As issued |
| NACSA / CyberSecurity Malaysia | National-level threat bulletins and cyber threat landscape reports | [Frequency] |
| Peer Industry Intelligence | [Financial Services ISAC, peer-sharing arrangements] | [Frequency] |
| Penetration Testing & Red Team | Most recent assessment reports (refer to Appendix [X]) | [Per schedule] |
| Vendor Security Advisories | Critical patches and zero-day notifications from key vendors | As issued |
| [Additional Source] | [Description] | [Frequency] |

### 3.3 Analytical Methodology

*Describe the framework and methodology used to assess threats, evaluate institutional exposure, and rate risk levels. Reference any industry-standard frameworks applied.*

This report applies the following analytical frameworks and methodologies:

- **Threat Assessment:** [e.g., MITRE ATT&CK framework mapping; threat actor profiling against known TTPs]
- **Vulnerability Assessment:** [e.g., CVSS v3.1 scoring; asset criticality weighting per [Organization Name]'s IT Asset Classification Policy]
- **Risk Rating:** [e.g., Likelihood × Impact matrix aligned to [Organization Name]'s Enterprise Risk Management (ERM) framework]
- **Control Gap Analysis:** [Methodology for assessing current control effectiveness against identified threats]
- **[Additional Methodology]:** [Description]

### 3.4 Risk Rating Scale

*Define the rating scale used consistently throughout this report.*

| Rating | Criteria | Colour Code |
|---|---|---|
| **Critical** | Immediate threat with high likelihood of impact; existing controls insufficient | Red |
| **High** | Significant threat with credible indicators of targeting; partial controls in place | Orange |
| **Medium** | Moderate threat; controls are in place but gaps identified | Yellow |
| **Low** | Threat is present at industry level; controls are effective; minimal exposure | Green |
| **Informational** | No direct threat to organisation; noted for awareness and monitoring | Blue |

---

## 4. Key Findings and Observations

*Document all material findings from this reporting period. Findings should be evidence-based and cross-referenced to supporting data in the appendices where applicable. Organise findings by threat category.*

### 4.1 Threat Landscape Overview

*Provide a summary of the external cyber threat landscape relevant to Malaysian financial institutions during this reporting period. Reference national and sector-specific threat intelligence.*

[Organization Name] operates within a threat landscape characterised by [summarise dominant threat trends for the period, e.g., ransomware campaigns targeting financial sector, phishing-as-a-service proliferation, state-sponsored reconnaissance]. The following macro-level trends were observed during [Report Period]:

- **[Trend 1]:** [Description and relevance to organisation]
- **[Trend 2]:** [Description and relevance to organisation]
- **[Trend 3]:** [Description and relevance to organisation]

### 4.2 Threat Actor Activity

*Identify and describe threat actors assessed to pose a credible risk to the organisation or the Malaysian financial sector during the period.*

| Threat Actor | Category | Assessed Intent | Capability Level | Relevance to [Org] |
|---|---|---|---|---|
| [Actor / Group name or designation] | [Nation-state / Cybercriminal / Hacktivist / Insider] | [Financial gain / Espionage / Disruption] | [High / Medium / Low] | [Direct / Sector-wide / Indirect] |
| [Actor / Group name or designation] | [Category] | [Intent] | [Capability] | [Relevance] |
| [Actor / Group name or designation] | [Category] | [Intent] | [Capability] | [Relevance] |

### 4.3 Vulnerability and Exposure Findings

*Summarise critical and high-severity vulnerabilities identified within the in-scope environment during this reporting period. Include CVE references where applicable.*

| Finding ID | Vulnerability / Exposure | Affected System(s) | CVSS Score | Risk Rating | Remediation Status |
|---|---|---|---|---|---|
| SAR-[YYYY]-[NNN]-001 | [Vulnerability description] | [System / Asset name] | [Score] | [Critical/High/Med/Low] | [Open / In Progress / Remediated] |
| SAR-[YYYY]-[NNN]-002 | [Vulnerability description] | [System / Asset name] | [Score] | [Rating] | [Status] |
| SAR-[YYYY]-[NNN]-003 | [Vulnerability description] | [System / Asset name] | [Score] | [Rating] | [Status] |

**Total Findings This Period:**

| Severity | New | Carried Over | Remediated | Outstanding |
|---|---|---|---|---|
| Critical | [n] | [n] | [n] | [n] |
| High | [n] | [n] | [n] | [n] |
| Medium | [n] | [n] | [n] | [n] |
| Low | [n] | [n] | [n] | [n] |
| **Total** | **[n]** | **[n]** | **[n]** | **[n]** |

### 4.4 Security Incident Summary

*Summarise security incidents detected, investigated, or closed during the reporting period. Do not include incident details that are subject to separate restricted reporting obligations without appropriate cross-referencing.*

| Incident ID | Date Detected | Incident Category | Severity | Status | RCA Completed |
|---|---|---|---|---|---|
| INC-[YYYY]-[NNN] | [Date] | [Phishing / Malware / Unauthorised Access / DDoS / Other] | [Critical/High/Med/Low] | [Open / Contained / Closed] | [Yes / No / Pending] |
| INC-[YYYY]-[NNN] | [Date] | [Category] | [Severity] | [Status] | [Yes/No/Pending] |

**Incident Trend Summary:**

- Total incidents this quarter: [n]
- Change from prior quarter: [↑ +n / → No change / ↓ -n]
- Mean Time to Detect (MTTD): [X hours/days]
- Mean Time to Respond (MTTR): [X hours/days]
- Incidents escalated to BNM / NACSA / JPDP: [n] (refer to Appendix [X] for details)

### 4.5 Third-Party and Supply Chain Risk Observations

*Summarise any threat intelligence or observations relating to key third-party vendors, cloud service providers, or supply chain partners.*

| Third Party | Service Provided | Threat / Observation | Risk Rating | Action Taken / Planned |
|---|---|---|---|---|
| [Vendor / Partner Name] | [Service description] | [Observation] | [Rating] | [Action] |
| [Vendor / Partner Name] | [Service description] | [Observation] | [Rating] | [Action] |

### 4.6 Emerging Threats and Forward-Looking Intelligence

*Identify threats that have not yet materialised into incidents but are assessed as credible risks to the organisation or sector in the coming quarter.*

- **[Emerging Threat 1]:** [Description, source of intelligence, and recommended preparatory actions]
- **[Emerging Threat 2]:** [Description, source, and recommended actions]
- **[Emerging Threat 3]:** [Description, source, and recommended actions]

---

## 5. Target Audience and Completion Targets

### 5.1 Primary Audience

*Define the intended recipients of this report and their respective information needs.*

| Audience | Role / Function | Information Need | Sections of Primary Relevance |
|---|---|---|---|
| Board Risk Committee | Governance and oversight | Strategic risk posture, material exposures, management actions | Sections 2, 4.1, 4.4 |
| Chief Information Security Officer (CISO) | Operational accountability | All sections — comprehensive situational awareness | All sections |
| Technology Risk Committee | Second-line oversight | Risk ratings, control gaps, remediation progress | Sections 3, 4, 6 |
| Head of IT / CTO | Technical remediation ownership | Vulnerability and incident findings, remediation timelines | Sections 4.3, 4.4, 6 |
| Internal Audit | Independent assurance | Completeness, methodology, findings integrity | Sections 3, 4, 6, 9 |
| QA Lead | Report ownership and quality assurance | All sections | All sections |
| [Additional Audience] | [Role] | [Need] | [Sections] |

### 5.2 Distribution and Access Controls

*Specify how this report is to be distributed, stored, and accessed in accordance with its Confidential classification.*

- **Distribution Method:** [e.g., Secure document management system; encrypted email; restricted SharePoint / intranet portal]
- **Access Control:** Restricted to individuals listed in Section 5.1 and those with explicit written authorisation from [Document Owner / CISO]
- **Storage Location:** [System name and path / folder reference]
- **Retention Period:** [X years, in accordance with [Organization Name]'s Records Retention Policy and applicable BNM / JPDP requirements]
- **Destruction Method:** [Secure deletion / physical shredding per information classification policy]

### 5.3 Reporting Completion Targets

*Define the timeline requirements for production, review, approval, and tabling of this report each quarter.*

| Milestone | Target Completion | Responsible Party |
|---|---|---|
| Data collection and intelligence aggregation complete | [X] business days after quarter-end | SOC / Threat Intelligence Team |
| Draft report prepared | [X] business days after quarter-end | QA Lead |
| Internal peer review completed | [X] business days after quarter-end | [Reviewer Role] |
| Report approved by CISO | [X] business days after quarter-end | CISO |
| Report tabled at Technology Risk Committee | [X] business days after quarter-end | QA Lead / CISO |
| Report distributed to approved audience | [X] business days after tabling | QA Lead |
| Report filed in document management system | [X] business days after distribution | [Records / Document Control] |

---

## 6. Assessment Methodology and Pass Criteria

### 6.1 Threat Assessment Methodology

*Describe in detail how threats are identified, validated, rated, and documented within this report. This section provides auditable evidence of methodological rigour.*

**Step 1 — Threat Intelligence Collection**

All threat intelligence inputs are collected from the sources identified in Section 3.2. Raw intelligence is ingested into [Platform Name, e.g., MISP / ThreatConnect / internal SIEM] and correlated against [Organization Name]'s asset register and known indicators of compromise (IOCs).

**Step 2 — Threat Validation and Deduplication**

Collected intelligence is reviewed by [SOC Analyst / Threat Intelligence Analyst] to remove duplicates, validate source credibility, and assess relevance to [Organization Name]'s specific technology environment and business context.

**Step 3 — Risk Rating Assignment**

Each threat or finding is rated using the risk matrix defined in Section 3.4. Ratings are assigned based on:
- **Likelihood:** Probability of the threat materialising against [Organization Name], assessed on a [1–5 / qualitative] scale
- **Impact:** Potential business, financial, reputational, and regulatory impact, assessed on a [1–5 / qualitative] scale
- **Control Effectiveness:** Degree to which existing controls mitigate the threat

**Step 4 — Findings Documentation**

Validated, rated findings are documented in the format specified in Section 4. Each finding is assigned a unique Finding ID traceable across reporting periods.

**Step 5 — QA Review**

The QA Lead conducts a structured quality review of all findings prior to inclusion in the report, verifying:
- Completeness of required data fields
- Consistency of risk ratings with the defined scale
- Accuracy of supporting evidence references
- Compliance with this report's structure and regulatory requirements

### 6.2 Quality Assurance Pass Criteria

*Define the minimum quality thresholds that must be met before this report is approved for distribution. Reports that do not meet these criteria must be returned for remediation.*

| QA Criterion | Pass Threshold | Assessment Method |
|---|---|---|
| All mandatory sections completed | 100% of sections present and populated | Checklist review (Appendix [X]) |
| All Critical and High findings include remediation owner and due date | 100% compliance | Field validation |
| Risk ratings consistent with defined scale | Zero unexplained deviations | Peer review |
| Intelligence sources documented for all findings | 100% traceability | Source citation check |
| Incident data reconciled with SOC/SIEM records | Zero unreconciled discrepancies | Cross-reference to SOC log |
| Report completed within defined timeline | Approval obtained by Day [X] after quarter-end | Milestone tracking |
| Approved by CISO prior to distribution | Signature obtained | Approval record (Section 9) |
| Prior quarter's open items reviewed and status updated | 100% of carried-over items addressed | Prior report comparison |

### 6.3 Remediation Tracking and Closure Criteria

*Define the criteria for classifying a finding as remediated and removing it from the active findings register.*

A finding is classified as **Remediated** and eligible for closure when all of the following conditions are met:

1. The technical remediation action (e.g., patch applied, configuration changed, control implemented) has been completed and verified
2. A post-remediation verification test (e.g., rescan, retest) has confirmed closure of the vulnerability or exposure
3. Evidence of remediation (e.g., scan output, change ticket, test report) has been attached to the finding record in [Finding Management System]
4. The remediation has been reviewed and signed off by [Approving Role, e.g., CISO / IT Security Manager]
5. The closure is documented in the subsequent SAR under the relevant finding ID with status updated to "Remediated"

---

## 7. Content Update Schedule

### 7.1 Scheduled Review and Update Cycle

*Define the recurring schedule for updating, refreshing, and publishing this report. Identify triggers for out-of-cycle updates.*

| Update Type | Frequency | Trigger | Responsible Party |
|---|---|---|---|
| Full quarterly report | Every quarter (Q1: [Month], Q2: [Month], Q3: [Month], Q4: [Month]) | Calendar-driven | QA Lead |
| Interim threat advisory update | As required | Emergence of Critical threat or significant sector-wide incident | CISO / SOC Lead |
| Findings register update | Monthly | Remediation status changes | IT Security Team |
| Template and methodology review | Annually | Policy review cycle or regulatory change | QA Lead |
| Ad hoc update | As required | BNM / NACSA directive; material incident | QA Lead / CISO |

### 7.2 Annual Template Review

This report template is subject to an annual review to ensure continued alignment with:

- BNM RMiT policy requirements, including any amendments or new guidance issued during the year
- [Organization Name]'s internal technology risk framework and ERM methodology
- Evolving industry best practices in cyber threat intelligence and situational awareness reporting
- Feedback from internal audit, the Technology Risk Committee, and the Board Risk Committee

The annual template review shall be conducted by the **QA Lead** in consultation with the **CISO** and completed no later than [Month] of each calendar year, prior to the Q[X] reporting cycle.

### 7.3 Trigger-Based Updates

The following events shall trigger an out-of-cycle interim SAR or formal addendum to the most recent quarterly report:

- Detection of a Critical severity incident affecting [Organization Name]'s production environment
- Issuance of a BNM cybersecurity advisory or directive requiring immediate acknowledgement
- A significant supply chain or third-party compromise affecting a Tier 1 vendor
- A sector-wide attack campaign or zero-day vulnerability with direct applicability to [Organization Name]'s technology stack
- [Additional organisational trigger]

Interim updates shall be distributed to the primary audience defined in Section 5.1 and filed as a versioned addendum to the relevant quarterly SAR.

### 7.4 Historical Report Retention

| Report Version | Reporting Period | Issue Date | Storage Location |
|---|---|---|---|
| SAR-[YYYY]-Q[n] v[n] | [Period] | [Date] | [Location / System] |
| SAR-[YYYY]-Q[n] v[n] | [Period] | [Date] | [Location / System] |
| SAR-[YYYY]-Q[n] v[n] | [Period] | [Date] | [Location / System] |

---

## 8. Roles and Responsibilities

### 8.1 RACI Matrix

*The following RACI matrix defines accountability for the production, review, approval, and maintenance of this report. R = Responsible; A = Accountable; C = Consulted; I = Informed.*

| Activity | QA Lead | CISO | IT Security Team | SOC / Threat Intel | Technology Risk Committee | Internal Audit | Board Risk Committee |
|---|---|---|---|---|---|---|---|
| Define report scope and methodology | A/R | C | C | C | I | I | I |
| Collect and validate threat intelligence | C | A | C | R | I | I | I |
| Produce vulnerability and incident findings | C | A | R | R | I | I | I |
| Draft report content | R | A | C | C | I | I | I |
| Quality assurance review | A/R | C | I | I | I | C | I |
| Approve report prior to distribution | C | A/R | I | I | I | I | I |
| Table report at Technology Risk Committee | R | A | I | I | R/I | I | I |
| Distribute report to approved audience | R | A | I | I | I | I | I |
| Track and monitor remediation actions | R | A | R | C | I | C | I |
| Conduct annual template review | A/R | C | C | C | I | C | I |
| File and archive completed reports | R | A | I | I | I | I | I |

### 8.2 Key Role Descriptions

| Role | Responsibility in Context of This Report |
|---|---|
| **QA Lead** | Accountable for report production quality, completeness, and adherence to schedule. Owns the template and drives the quarterly reporting cycle. |
| **CISO** | Ultimate accountability for report accuracy and regulatory compliance. Provides final approval and is the primary point of contact for BNM regulatory enquiries relating to this report. |
| **IT Security Team** | Provides technical findings, vulnerability assessment outputs, and remediation status updates for inclusion in the report. |
| **SOC / Threat Intelligence** | Supplies raw threat intelligence, incident data, and IOC analysis. Responsible for the accuracy of threat actor and threat landscape sections. |
| **Technology Risk Committee** | Receives and reviews the report quarterly. Directs management actions and prioritisation of remediation activities. |
| **Internal Audit** | Conducts periodic independent review of the SAR process to assess compliance, completeness, and effectiveness. |
| **Board Risk Committee** | Receives executive summary; provides governance oversight of material cyber risks identified in the report. |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 9.2 Approval Sign-Off

*This report must be approved by all signatories below prior to distribution. Electronic signatures via [Signature Platform] are acceptable subject to [Organization Name]'s Digital Signature Policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| [Additional Approver Role] | [Name] | [Signature] | [Date] |
| [Additional Approver Role] | [Name] | [Signature] | [Date] |

**Date of Approval:** [Date]

---

## 10. References

### 10.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 11.20 |
| [PDPA 2010] | Personal Data Protection Act 2010 | Parliament of Malaysia | [Relevant sections] |
| [NACSA Framework] | National Cyber Security Policy / Framework | NACSA / NACSC | [Relevant sections] |
| [FSA 2013] | Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections] |
| [IFSA 2013] | Islamic Financial Services Act 2013 | Parliament of Malaysia | [Relevant sections] |
| [Additional Reference] | [Title] | [Issuing Authority] | [Clauses] |

### 10.2 Internal Policy References

| Document | Version | Owner |
|---|---|---|
| [Organization Name] Information Security Policy | [Version] | CISO |
| [Organization Name] Technology Risk Management Framework | [Version] | CRO / Head of Risk |
| [Organization Name] Incident Response Procedure | [Version] | CISO / SOC Lead |
| [Organization Name] IT Asset Classification Policy | [Version] | Head of IT |
| [Organization Name] Records Retention Policy | [Version] | [Owner] |
| [Organization Name] Third-Party Risk Management Policy | [Version] | [Owner] |
| [Additional Document] | [Version] | [Owner] |

### 10.3 Industry and Standards References

| Standard / Framework | Issuing Body | Applicability |
|---|---|---|
| MITRE ATT&CK Framework | MITRE Corporation | Threat actor TTP mapping |
| NIST Cybersecurity Framework (CSF) | NIST | Control assessment reference |
| ISO/IEC 27001:2022 | ISO / IEC | Information security management |
| CVSS v3.1 | FIRST | Vulnerability severity scoring |
| [Additional Standard] | [Body] | [Applicability] |

---

## 11. Appendices

### Appendix A — SAR Completion Checklist

*This checklist must be completed by the QA Lead prior to submitting the report for CISO approval. A completed, signed copy must be attached to the final approved report.*

| # | Checklist Item | Completed (Y/N) | Notes |
|---|---|---|---|
| 1 | All mandatory sections (1–9) present and fully populated | | |
| 2 | Report period and issue date confirmed | | |
| 3 | All Critical and High findings include owner, due date, and remediation plan | | |
| 4 | Prior quarter open findings reviewed; status updated | | |
| 5 | Incident data reconciled with SOC/SIEM records | | |
| 6 | All intelligence sources cited for threat findings | | |
| 7 | Risk ratings applied consistently per Section 3.4 scale | | |
| 8 | Distribution list reviewed; no unauthorised recipients | | |
| 9 | Report classified as Confidential and header/footer applied | | |
| 10 | CISO approval signature obtained prior to distribution | | |
| 11 | Completed report filed in [Document Management System] | | |
| 12 | Prior version archived per retention policy | | |

**QA Lead Sign-Off:** ________________________________ **Date:** _______________

---

### Appendix B — Threat Intelligence Source Register

*Maintain a current register of all approved threat intelligence sources used in the preparation of this report.*

| Source ID | Source Name / Description | Type | Frequency | Access Point | Last Updated |
|---|---|---|---|---|---|
| TI-001 | [Source name] | [Commercial / Open-source / Government / Peer] | [Frequency] | [URL / System] | [Date] |
| TI-002 | [Source name] | [Type] | [Frequency] | [Access Point] | [Date] |
| TI-003 | MyCERT Advisories | Government — CyberSecurity Malaysia | As issued | [URL] | [Date] |
| TI-004 | BNM Cybersecurity Circulars | Regulator | As issued | BNM Portal | [Date] |
| TI-005 | [Source name] | [Type] | [Frequency] | [Access Point] | [Date] |

---

### Appendix C — Open Findings Register (Carry-Forward)

*This appendix lists all findings from prior reporting periods that remain open or in-progress as at the close of the current reporting period.*

| Finding ID | Original Report | Vulnerability / Exposure | Risk Rating | Remediation Owner | Original Due Date | Revised Due Date | Current Status |
|---|---|---|---|---|---|---|---|
| SAR-[YYYY]-Q[n]-[NNN] | Q[n] [YYYY] | [Description] | [Rating] | [Name / Role] | [Date] | [Date] | [In Progress / Overdue / Escalated] |
| SAR-[YYYY]-Q[n]-[NNN] | Q[n] [YYYY] | [Description] | [Rating] | [Name / Role] | [Date] | [Date] | [Status] |

**Total Open Findings Carried Forward:** [n]
**Overdue Findings (past original due date):** [n]

---

### Appendix D — Glossary of Terms

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank of Malaysia and primary financial services regulator |
| CVE | Common Vulnerabilities and Exposures — a publicly disclosed list of cybersecurity vulnerabilities |
| CVSS | Common Vulnerability Scoring System — a framework for rating the severity of security vulnerabilities |
| IOC | Indicator of Compromise — artefacts observed on a network or system that indicate a security breach |
| MTTD | Mean Time to Detect — average time between occurrence and detection of a security incident |
| MTTR | Mean Time to Respond — average time to contain and remediate a security incident |
| NACSA | National Cyber Security Agency of Malaysia |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk for financial institutions |
| SAR | Situational Awareness Report — this document |
| SOC | Security Operations Centre |
| TTP | Tactics, Techniques and Procedures — the behaviour patterns and methods used by threat actors |
| [Additional Term] | [Definition] |

---

### Appendix E — Prior Quarter Summary (Trend Reference)

*Include a one-page comparative summary of the prior quarter's SAR findings for trend analysis purposes. Attach or cross-reference the approved prior quarter SAR.*

| Metric | Q[n-1] [YYYY] | Q[n] [YYYY] (Current) | Change |
|---|---|---|---|
| Total Critical Findings | [n] | [n] | [+n / -n / No change] |
| Total High Findings | [n] | [n] | [+n / -n / No change] |
| Total Incidents | [n] | [n] | [+n / -n / No change] |
| MTTD (hours) | [n] | [n] | [+n / -n / No change] |
| MTTR (hours) | [n] | [n] | [+n / -n / No change] |
| Open Findings Carried Forward | [n] | [n] | [+n / -n / No change] |
| Remediated Findings | [n] | [n] | [+n / -n / No change] |

---

*End of Document*

---

**Document Control:** This document is owned by the **QA Lead** at **[Organization Name]**. Queries regarding this document should be directed to [QA Lead Name] at [Contact Details]. This template is reviewed annually in accordance with Section 7.2.