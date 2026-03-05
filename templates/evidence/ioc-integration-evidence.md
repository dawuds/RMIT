# IoC Integration Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
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

This document serves as formal evidence that [Organization Name] has integrated Indicators of Compromise (IoC) feeds into its security monitoring and detection infrastructure in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.19.

IoC integration evidence demonstrates the institution's capability to detect, correlate, and respond to known threat intelligence signals across its technology environment. This artifact supports the institution's Cyber Threat Intelligence (CTI) programme and provides auditable proof of continuous threat detection capabilities.

### 1.1 Scope Statement

*Define the boundary of systems, platforms, and data sources covered by this IoC integration evidence. Include in-scope and out-of-scope items clearly.*

**In Scope:**

- [Security Information and Event Management (SIEM) platform — e.g., name/version]
- [Endpoint Detection and Response (EDR) platform — e.g., name/version]
- [Network detection and monitoring tools — e.g., IDS/IPS, NDR]
- [Threat intelligence platform (TIP) — e.g., name/version]
- [Firewall and proxy platforms receiving IoC feeds]
- [Additional integrated tools — e.g., SOAR, email gateway]

**Out of Scope:**

- [List any systems explicitly excluded and the rationale]

### 1.2 Regulatory Basis

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | 11.19 | Financial institutions must implement mechanisms to detect and respond to cyber threats using up-to-date threat intelligence, including integration of IoCs into security monitoring tools. |
| [Additional Framework] | [Clause] | [Summary] |

---

## 2. Assessment Scope and Criteria

*Describe the scope of the IoC integration assessment, the specific evaluation criteria applied, and the thresholds used to determine adequacy of integration. This section should be updated at each quarterly review.*

### 2.1 Assessment Period

| Field | Details |
|---|---|
| **Assessment Start Date** | [DD/MM/YYYY] |
| **Assessment End Date** | [DD/MM/YYYY] |
| **Assessment Type** | [Initial / Periodic Quarterly Review / Ad-hoc] |
| **Conducted By** | [Team / Individual Name, Role] |

### 2.2 IoC Source Coverage

*List all IoC feed sources assessed during this period, including both commercial and open-source feeds.*

| # | IoC Feed Source | Feed Type | Frequency of Update | Integration Status |
|---|---|---|---|---|
| 1 | [e.g., MISP — Internal Threat Intel Platform] | [IP, Domain, Hash, URL] | [Real-time / Hourly / Daily] | [Active / Pending / Inactive] |
| 2 | [e.g., Commercial CTI Provider] | [IP, Domain, Hash] | [Daily] | [Active] |
| 3 | [e.g., Financial Services ISAC (FS-ISAC)] | [IP, Hash, TTPs] | [Weekly] | [Active] |
| 4 | [e.g., NACSA National CTI Feed] | [IP, Domain] | [Daily] | [Active] |
| 5 | [e.g., Open-source — CIRCL, AlienVault OTX] | [Multi-type] | [Daily] | [Active] |

### 2.3 Assessment Criteria

*Define the criteria used to evaluate the quality and effectiveness of IoC integration. Each criterion should be measurable and verifiable.*

| Criterion | Description | Target Threshold | Assessment Method |
|---|---|---|---|
| **Feed Freshness** | Age of IoCs being ingested and applied | ≤ 24 hours for critical feeds | Feed timestamp audit |
| **Coverage Breadth** | Percentage of in-scope tools receiving IoC feeds | ≥ 90% of in-scope tools | Configuration review |
| **Deduplication** | Duplicate IoC entries removed before distribution | ≤ 1% duplicate rate | Platform reporting |
| **False Positive Rate** | Alerts triggered by IoCs that are benign | ≤ [X]% per review period | SIEM alert analysis |
| **Detection Latency** | Time from IoC ingestion to active detection rule | ≤ [X] hours | Pipeline log review |
| **Feed Availability** | Uptime of IoC feed pipeline | ≥ 99% during review period | Monitoring dashboard |
| **Alert-to-Ticket Rate** | IoC-triggered alerts escalated to incident tickets | [Target %] | SOAR/ticketing audit |

---

## 3. Methodology

*Describe the technical and procedural methodology used to integrate IoCs into the security monitoring environment. Include the data flow, toolchain, and validation approach.*

### 3.1 IoC Integration Architecture

*Provide a narrative description of the IoC integration pipeline. Attach a network/data flow diagram in Appendix A.*

[Organization Name] employs a centralised threat intelligence platform to aggregate, normalise, and distribute IoC data to downstream detection tools. The integration follows the pipeline described below:

1. **Collection** — IoC feeds are ingested from [list sources] into [Threat Intelligence Platform name].
2. **Normalisation** — Raw IoC data is parsed into STIX 2.1 / [format] and deduplicated.
3. **Enrichment** — IoCs are contextualised with [confidence score / TLP marking / expiry date].
4. **Distribution** — Enriched IoCs are pushed to integrated tools via [TAXII / API / Syslog / Native connector].
5. **Detection** — Integrated tools generate alerts when observed activity matches active IoCs.
6. **Response** — Alerts are triaged by the [SOC / Cybersecurity Team] and escalated per the Incident Response Procedure [Document ID].

### 3.2 Integration Methods by Tool

| Security Tool | Integration Method | IoC Types Supported | Update Frequency | Responsible Team |
|---|---|---|---|---|
| [SIEM Platform] | [API / Syslog / Native] | [IP, Domain, Hash, URL] | [Real-time / Daily] | [Team Name] |
| [EDR Platform] | [API / Agent Policy] | [File Hash, Domain, IP] | [Real-time] | [Team Name] |
| [IDS/IPS] | [STIX/TAXII / Manual Import] | [IP, Domain, Signature] | [Daily] | [Team Name] |
| [Firewall / Proxy] | [Blocklist API / Policy Push] | [IP, URL, Domain] | [Hourly / Daily] | [Team Name] |
| [Email Gateway] | [API / Feed Subscription] | [Domain, IP, Hash] | [Daily] | [Team Name] |
| [SOAR Platform] | [Native TIP Connector] | [All types] | [Real-time] | [Team Name] |

### 3.3 Validation Methodology

*Describe how IoC integration effectiveness was validated. Include any test exercises, simulations, or log reviews conducted.*

- **Pipeline Validation** — [e.g., End-to-end test IoCs were injected to verify detection across all integrated tools]
- **Alert Correlation Review** — [e.g., SIEM alert logs were reviewed for IoC-triggered detections over the review period]
- **Configuration Audit** — [e.g., Tool configurations were reviewed to confirm IoC feed subscriptions were active and current]
- **Coverage Gap Analysis** — [e.g., Comparison of in-scope assets against tools receiving IoC feeds]

---

## 4. Findings and Ratings

*Summarise the findings from the assessment. Assign an overall integration maturity rating and document specific findings with associated risk ratings.*

### 4.1 Overall Integration Maturity Rating

| Dimension | Rating | Rationale |
|---|---|---|
| **Feed Coverage** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief justification] |
| **Detection Latency** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief justification] |
| **Feed Quality & Freshness** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief justification] |
| **False Positive Management** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Brief justification] |
| **Overall Rating** | [Satisfactory / Needs Improvement / Unsatisfactory] | [Overall summary] |

> **Rating Scale:** Satisfactory — meets or exceeds all thresholds; Needs Improvement — partially meets thresholds with remediation in progress; Unsatisfactory — fails to meet thresholds, immediate remediation required.

### 4.2 Detailed Findings

*Document each specific finding. Assign a unique finding ID, risk rating, and link to a recommendation.*

| Finding ID | Description | Affected Tool/Process | Risk Rating | Recommendation Ref |
|---|---|---|---|---|
| FIND-001 | [e.g., Feed X has not been updated in 72 hours due to connectivity issue] | [Tool/Process Name] | [Critical / High / Medium / Low] | REC-001 |
| FIND-002 | [e.g., EDR platform not subscribed to hash-based IoC feed] | [Tool/Process Name] | [High] | REC-002 |
| FIND-003 | [e.g., High false positive rate for specific IP range IoCs] | [Tool/Process Name] | [Medium] | REC-003 |
| FIND-004 | [Add as required] | | | |

### 4.3 IoC Detection Statistics (Review Period)

*Populate the following metrics from SIEM / TIP reporting for the review period.*

| Metric | Value | Notes |
|---|---|---|
| Total IoCs Active in Environment | [Number] | As at [Date] |
| Total IoC-Triggered Alerts | [Number] | During review period |
| Alerts Escalated to Incidents | [Number] | |
| True Positive Rate | [%] | |
| False Positive Rate | [%] | |
| Average Detection Latency | [Hours] | From ingestion to active rule |
| IoC Feed Availability (Uptime) | [%] | |
| IoCs Expired / Retired | [Number] | |

---

## 5. Evidence Reviewed

*List all documentary, technical, and system-generated evidence that was reviewed to support the findings in this document. Each evidence item should be retrievable for audit purposes.*

### 5.1 Documentary Evidence

| # | Evidence Item | Document ID / Reference | Date | Source |
|---|---|---|---|---|
| 1 | Threat Intelligence Platform configuration export | [Ref/ID] | [Date] | [Platform Name] |
| 2 | SIEM IoC feed subscription configuration | [Ref/ID] | [Date] | [SIEM Name] |
| 3 | IoC feed update logs (review period) | [Ref/ID] | [Date] | [System/Log Source] |
| 4 | EDR policy configuration — IoC enforcement settings | [Ref/ID] | [Date] | [EDR Platform] |
| 5 | Firewall/proxy blocklist configuration | [Ref/ID] | [Date] | [Firewall Platform] |
| 6 | IoC-triggered alert report (SIEM) | [Ref/ID] | [Date] | [SIEM Name] |
| 7 | Incident tickets linked to IoC detections | [Ref/ID] | [Date] | [Ticketing System] |
| 8 | Feed provider service confirmation / subscription records | [Ref/ID] | [Date] | [Provider Name] |

### 5.2 Technical Evidence (Screenshots / Exports)

*Attach or reference system-generated screenshots and exports that demonstrate active IoC integration. Store originals in [Document Repository Path].*

| # | Evidence Description | File Reference | Date Captured | Captured By |
|---|---|---|---|---|
| 1 | TIP dashboard — active feed status | [File/Path] | [Date] | [Name] |
| 2 | SIEM rule list — IoC-based detection rules active | [File/Path] | [Date] | [Name] |
| 3 | EDR console — IoC enforcement policy screenshot | [File/Path] | [Date] | [Name] |
| 4 | Sample IoC-triggered alert — true positive example | [File/Path] | [Date] | [Name] |
| 5 | Pipeline health monitoring dashboard | [File/Path] | [Date] | [Name] |

### 5.3 Evidence Gaps

*Document any evidence that could not be retrieved and the reason.*

| # | Evidence Item | Reason Not Available | Risk Implication | Mitigation |
|---|---|---|---|---|
| 1 | [Description of missing evidence] | [Reason] | [Low / Medium / High] | [Action taken] |

---

## 6. Recommendations

*Provide specific, actionable recommendations to address findings and improve IoC integration maturity. Each recommendation must be assigned an owner and target completion date.*

| Rec ID | Finding Ref | Recommendation | Priority | Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | FIND-001 | [e.g., Restore connectivity to Feed X and implement automated feed health alerting to detect outages within 1 hour] | Critical | [Name / Role] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| REC-002 | FIND-002 | [e.g., Subscribe EDR platform to organisation's hash-based IoC feed via API connector] | High | [Name / Role] | [DD/MM/YYYY] | [Open] |
| REC-003 | FIND-003 | [e.g., Review and refine IP range IoC blocklist to reduce false positives; implement confidence scoring threshold of ≥ 75%] | Medium | [Name / Role] | [DD/MM/YYYY] | [Open] |
| REC-004 | — | [e.g., Conduct quarterly IoC integration exercise to validate end-to-end detection pipeline with test indicators] | Low | [Name / Role] | [DD/MM/YYYY] | [Open] |

### 6.1 Recommendation Tracking

*Recommendations from this document are tracked in [Recommendation/Risk Register Name, Document ID]. The [Relevant Department Head] is responsible for ensuring all open recommendations are reviewed at the next quarterly assessment.*

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for IoC integration activities across [Organization Name].*

> **RACI Key:** **R** = Responsible (performs the work) | **A** = Accountable (owns the outcome) | **C** = Consulted (provides input) | **I** = Informed (notified of outcome)

| Activity | [CISO / Head of Cybersecurity] | [SOC Manager] | [Threat Intel Analyst] | [IT Operations] | [System Owner] | [Risk & Compliance] |
|---|---|---|---|---|---|---|
| Define IoC integration strategy and policy | A | C | C | I | I | C |
| Manage and maintain IoC feed subscriptions | I | A | R | C | I | I |
| Operate and maintain TIP platform | I | A | R | R | I | I |
| Distribute IoCs to security tools | I | A | R | R | I | I |
| Monitor IoC feed health and pipeline availability | I | A | R | R | I | I |
| Triage and investigate IoC-triggered alerts | I | A | R | I | I | I |
| Conduct quarterly IoC integration review | A | R | R | C | C | C |
| Maintain IoC integration evidence documentation | A | R | R | I | I | C |
| Report IoC integration status to governance | A | C | I | I | I | R |
| Approve IoC Integration Evidence document | A | C | I | I | I | C |

---

## 8. Review and Approval

### 8.1 Review Schedule

| Review Type | Frequency | Trigger Conditions | Responsible Party |
|---|---|---|---|
| Continuous Monitoring | Ongoing | Automated pipeline health alerts | [SOC / Threat Intel Team] |
| Operational Review | Monthly | Scheduled | [SOC Manager] |
| Formal Quarterly Review | Quarterly | Scheduled | [Relevant Department Head] |
| Ad-hoc Review | As required | Significant threat landscape change, major incident, new tool onboarding | [CISO] |

### 8.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Role] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name, Role] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Role] | [Description of changes] |

### 8.3 Approval Sign-Off

*This document requires formal approval prior to use. Approvers confirm that the content accurately reflects the IoC integration posture of [Organization Name] and that it meets the requirements of BNM RMiT Clause 11.19.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name, Title] | _________________ | [DD/MM/YYYY] |
| Reviewed By | [SOC Manager / Threat Intel Lead] | _________________ | [DD/MM/YYYY] |
| Reviewed By | [Risk & Compliance Officer] | _________________ | [DD/MM/YYYY] |
| Approved By | [Relevant Department Head / CISO] | _________________ | [DD/MM/YYYY] |

---

## 9. References

| # | Document / Regulation | Issuing Body | Clause / Section | Relevance |
|---|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 11.19 | Primary regulatory requirement for IoC integration into security monitoring and detection tools |
| 2 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 11.1–11.5 (Cyber Risk Management) | Broader cyber risk management context |
| 3 | [Organization Name] Cyber Threat Intelligence Policy | [Organization Name] | [Section Reference] | Internal policy governing threat intelligence operations |
| 4 | [Organization Name] Incident Response Plan | [Organization Name] | [Section Reference] | Defines escalation procedures for IoC-triggered incidents |
| 5 | [Organization Name] Security Operations Procedures | [Organization Name] | [Section Reference] | SOC operating procedures for IoC management |
| 6 | STIX/TAXII 2.1 Specification | OASIS Open | — | Technical standard for IoC representation and exchange |
| 7 | NIST SP 800-150 — Guide to Cyber Threat Information Sharing | NIST | — | Best practice guidance for threat intelligence integration |

---

## 10. Appendices

### Appendix A — IoC Integration Architecture Diagram

*Insert or attach a data flow diagram illustrating the end-to-end IoC integration pipeline, from feed ingestion through normalisation, distribution, and detection. The diagram should clearly show all integrated tools, data flows, and integration methods.*

> [Attach diagram — File Reference: [File Name / Path]]

---

### Appendix B — Active IoC Feed Inventory

*A complete listing of all active IoC feed subscriptions, including provider details, feed types, TLP classifications, and renewal dates.*

| # | Provider | Feed Name | IoC Types | TLP Classification | Subscription Expiry | Contact |
|---|---|---|---|---|---|---|
| 1 | [Provider Name] | [Feed Name] | [Types] | [WHITE / GREEN / AMBER / RED] | [DD/MM/YYYY] | [Contact] |
| 2 | [Provider Name] | [Feed Name] | [Types] | [TLP] | [DD/MM/YYYY] | [Contact] |

---

### Appendix C — IoC Detection Rule Index

*A reference index of detection rules currently active in the SIEM that are sourced from or correlated with IoC feeds.*

| Rule ID | Rule Name | IoC Type | Source Feed | Platform | Status | Last Updated |
|---|---|---|---|---|---|---|
| [RULE-001] | [Rule Description] | [IP / Hash / Domain] | [Feed Name] | [SIEM / EDR] | [Active] | [Date] |
| [RULE-002] | [Rule Description] | [Type] | [Feed Name] | [Platform] | [Active] | [Date] |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **IoC** | Indicator of Compromise — artefacts observed on a network or system that indicate a potential security breach (e.g., malicious IP addresses, file hashes, domain names). |
| **TIP** | Threat Intelligence Platform — a system used to aggregate, normalise, and distribute cyber threat intelligence data. |
| **SIEM** | Security Information and Event Management — a platform that collects and analyses security event data for threat detection. |
| **EDR** | Endpoint Detection and Response — security tooling that monitors and responds to threats on endpoint devices. |
| **STIX** | Structured Threat Information eXpression — a standardised language for representing cyber threat intelligence. |
| **TAXII** | Trusted Automated eXchange of Indicator Information — a protocol for sharing STIX-formatted threat intelligence. |
| **TLP** | Traffic Light Protocol — a set of designations used to control the sharing of sensitive information. |
| **SOC** | Security Operations Centre — a team responsible for monitoring, detecting, and responding to security incidents. |
| **CTI** | Cyber Threat Intelligence — evidence-based knowledge about existing or emerging threats used to inform security decisions. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. Queries regarding this document should be directed to [Relevant Department Head] at [Contact Details].*

*Document ID: [Document ID] | Version: 1.0 | [Organization Name] | [Effective Date]*