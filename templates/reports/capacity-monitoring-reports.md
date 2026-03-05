# Capacity Monitoring Reports

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

## Document Control Notice

This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name] and relevant regulatory bodies. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This document shall be maintained in accordance with [Organization Name]'s document retention policy and BNM RMiT requirements.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and Obligations](#2-regulatory-framework-and-obligations)
3. [Executive Summary](#3-executive-summary)
4. [Scope and Methodology](#4-scope-and-methodology)
5. [Key Findings and Observations](#5-key-findings-and-observations)
6. [Risk Ratings and Prioritisation](#6-risk-ratings-and-prioritisation)
7. [Recommendations and Action Items](#7-recommendations-and-action-items)
8. [Management Response](#8-management-response)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Capacity Monitoring Report documents the continuous monitoring and quarterly review of IT infrastructure and system capacity utilisation across [Organization Name]. The report assesses whether capacity levels remain within defined thresholds, identifies trends that may indicate emerging risk, and supports informed decision-making for capacity planning and procurement.

This report is prepared in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.16**, which mandates that financial institutions establish processes to monitor and manage technology capacity to ensure the availability and performance of critical systems.

### 1.2 Scope

*Define the boundaries of this report — the systems, environments, and time period covered. Specify any systems explicitly excluded and the rationale for exclusion.*

**Reporting Period:** [Reporting Period Start Date] to [Reporting Period End Date]

**In-Scope Systems and Infrastructure:**

| System / Component | Environment | Criticality | System Owner |
|---|---|---|---|
| [System Name 1] | Production | Critical | [Owner Name] |
| [System Name 2] | Production | High | [Owner Name] |
| [System Name 3] | DR / Staging | High | [Owner Name] |
| [System Name 4] | Production | Medium | [Owner Name] |
| [Network Infrastructure] | All | Critical | [Owner Name] |
| [Storage Infrastructure] | All | Critical | [Owner Name] |

**Out-of-Scope Systems:**

| System / Component | Reason for Exclusion |
|---|---|
| [Excluded System 1] | [Reason, e.g., decommissioned during period] |
| [Excluded System 2] | [Reason, e.g., managed by third party under separate SLA] |

### 1.3 Reporting Cadence

| Activity | Frequency | Responsible Party |
|---|---|---|
| Real-time capacity monitoring | Continuous (24/7) | [IT Operations Team] |
| Automated threshold alerts | As triggered | [Monitoring System / NOC] |
| Operational capacity review | Monthly | [IT Operations Manager] |
| Formal Capacity Monitoring Report | Quarterly | Head of IT Operations |
| Management committee presentation | Quarterly | Head of IT Operations |
| Annual capacity plan review | Annually | CTO / Head of IT |

---

## 2. Regulatory Framework and Obligations

### 2.1 Applicable Regulatory Requirements

*Summarise the specific regulatory obligations that this document addresses. Reference all applicable BNM policies, guidelines, and clauses directly.*

This report is prepared in compliance with the following regulatory instruments:

| Regulatory Reference | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.16 | Financial institutions must establish capacity management processes to ensure technology resources are sufficient to support business operations, including monitoring against defined thresholds and taking timely remediation actions. |
| BNM RMiT Policy Document | [Related Clause] | [Related Requirement] |
| [Other BNM Guideline, if applicable] | [Clause] | [Requirement] |

### 2.2 Internal Policy Alignment

*List internal policies and standards that govern capacity management within the organization.*

- [Organization Name] IT Governance Policy — [Policy Reference]
- [Organization Name] Technology Risk Management Framework — [Policy Reference]
- [Organization Name] Business Continuity Management Policy — [Policy Reference]
- [Organization Name] IT Operations Procedures Manual — [Procedure Reference]
- [Organization Name] Incident Management Policy — [Policy Reference]

---

## 3. Executive Summary

### 3.1 Overall Capacity Health Status

*Provide a concise, management-level summary of the overall capacity posture for the reporting period. Highlight the most critical findings and whether the organization is within acceptable thresholds. This section should be readable standalone by senior management and the Board.*

**Overall Capacity Status:** [GREEN / AMBER / RED]

| Status Indicator | Description |
|---|---|
| GREEN | All monitored systems operating within defined capacity thresholds. No immediate action required. |
| AMBER | One or more systems approaching defined thresholds. Monitoring intensified; remediation planning underway. |
| RED | One or more systems have breached defined thresholds. Immediate escalation and remediation required. |

**Reporting Period Summary:**

During the quarter ending **[Reporting Period End Date]**, [Organization Name]'s IT capacity monitoring function reviewed **[X]** systems and **[Y]** infrastructure components across **[Z]** environments. The overall capacity health status for this period is assessed as **[GREEN / AMBER / RED]**.

Key highlights for this reporting period:

- **[X] systems** are operating within defined thresholds with no immediate concerns.
- **[X] systems** are operating in the AMBER zone, requiring management attention and remediation planning.
- **[X] systems** have breached defined RED thresholds, requiring immediate action.
- **[X] capacity-related incidents** were recorded during the period, of which **[X]** were resolved and **[X]** remain open.
- **[X] capacity upgrade actions** were completed during the reporting period.
- **[X] new capacity risks** were identified and added to the Technology Risk Register.

**Key Actions Required:**

1. [High-priority action 1]
2. [High-priority action 2]
3. [High-priority action 3]

### 3.2 Period-on-Period Comparison

*Summarise how the capacity posture has changed compared to the previous reporting period.*

| Metric | Previous Quarter | Current Quarter | Trend |
|---|---|---|---|
| Systems in GREEN status | [X] | [X] | [Improving / Stable / Deteriorating] |
| Systems in AMBER status | [X] | [X] | [Improving / Stable / Deteriorating] |
| Systems in RED status | [X] | [X] | [Improving / Stable / Deteriorating] |
| Capacity-related incidents | [X] | [X] | [Improving / Stable / Deteriorating] |
| Open remediation actions | [X] | [X] | [Improving / Stable / Deteriorating] |

---

## 4. Scope and Methodology

### 4.1 Monitoring Methodology

*Describe how capacity data is collected, aggregated, and assessed. Include the tools, processes, and personnel involved. This section provides the auditor with confidence in the integrity and reliability of the findings.*

Capacity monitoring at [Organization Name] is conducted using the following methodology:

**4.1.1 Data Collection**

Capacity utilisation data is collected via automated monitoring tools deployed across all in-scope systems and infrastructure. The following tools and mechanisms are used:

| Tool / Mechanism | Purpose | Data Collection Interval |
|---|---|---|
| [Monitoring Tool, e.g., Zabbix, Prometheus] | CPU, memory, and process monitoring | Every [X] minutes |
| [Monitoring Tool, e.g., Grafana] | Dashboard visualisation and trending | Real-time |
| [Storage Management Tool] | Storage capacity and growth trending | Hourly |
| [Network Management Tool] | Bandwidth and link utilisation | Every [X] minutes |
| [Database Monitoring Tool] | Database tablespace and connection pool monitoring | Every [X] minutes |
| Manual Reporting | Vendor-managed or offline systems | Monthly |

**4.1.2 Threshold Definitions**

Capacity thresholds are defined and reviewed annually by the Head of IT Operations, with approval from [Approving Authority]. The standard threshold framework applied is as follows:

| Threshold Level | Utilisation Range | Status | Required Action |
|---|---|---|---|
| Normal | 0% – [X]% | GREEN | Routine monitoring continues |
| Warning | [X]% – [X]% | AMBER | Increased monitoring frequency; remediation planning initiated |
| Critical | [X]% – [X]% | RED | Immediate escalation to Head of IT Operations; emergency remediation |
| Breach | Above [X]% | RED (Critical) | Incident raised; P1 response initiated; BCP consideration |

*Note: Thresholds may vary by system type and criticality. Refer to Appendix A for system-specific threshold definitions.*

**4.1.3 Alert and Escalation Process**

Automated alerts are generated when utilisation crosses AMBER or RED thresholds. The escalation path is as follows:

1. **AMBER Alert:** Automated notification to [IT Operations Team] and assigned system owner. Logged in the capacity tracking register.
2. **RED Alert:** Automated notification to Head of IT Operations, [IT Operations Team], and system owner. Incident ticket raised. Escalation to [CTO / IT Risk Officer] if not resolved within [X] hours.
3. **Sustained RED / Breach:** Formal incident declared. Executive notification issued. BCP team engaged if business impact is imminent.

**4.1.4 Data Validation**

*Describe any quality checks applied to ensure data accuracy.*

- Monitoring agent availability is checked [daily / weekly]; gaps in data collection are investigated and documented.
- Monthly reconciliation between monitoring tool data and manual spot-checks is performed for Tier 1 critical systems.
- Data anomalies are flagged and reviewed before inclusion in this report.

---

## 5. Key Findings and Observations

### 5.1 Compute Capacity (CPU and Memory)

*Report on CPU and memory utilisation across all in-scope servers and virtual machines. Highlight any systems at or approaching thresholds.*

#### 5.1.1 CPU Utilisation Summary

| System / Host | Average Utilisation | Peak Utilisation | Peak Date/Time | Threshold | Status |
|---|---|---|---|---|---|
| [Server / VM Name 1] | [X]% | [X]% | [Date/Time] | [X]% | GREEN |
| [Server / VM Name 2] | [X]% | [X]% | [Date/Time] | [X]% | AMBER |
| [Server / VM Name 3] | [X]% | [X]% | [Date/Time] | [X]% | RED |
| [Server / VM Name 4] | [X]% | [X]% | [Date/Time] | [X]% | GREEN |

**Observations:**

- [Observation 1: e.g., "[Server Name] experienced sustained CPU utilisation above the AMBER threshold during peak transaction periods on [dates], likely attributed to [root cause]."]
- [Observation 2]
- [Observation 3]

#### 5.1.2 Memory Utilisation Summary

| System / Host | Average Utilisation | Peak Utilisation | Peak Date/Time | Threshold | Status |
|---|---|---|---|---|---|
| [Server / VM Name 1] | [X]% | [X]% | [Date/Time] | [X]% | GREEN |
| [Server / VM Name 2] | [X]% | [X]% | [Date/Time] | [X]% | AMBER |
| [Server / VM Name 3] | [X]% | [X]% | [Date/Time] | [X]% | GREEN |

**Observations:**

- [Observation 1]
- [Observation 2]

---

### 5.2 Storage Capacity

*Report on storage utilisation across all storage systems, including SAN, NAS, object storage, and database storage. Include growth rate trends and projected time-to-full estimates.*

#### 5.2.1 Storage Utilisation Summary

| Storage System | Total Capacity | Used Capacity | Utilisation | Growth Rate (MoM) | Projected Full Date | Status |
|---|---|---|---|---|---|---|
| [Storage System 1] | [X] TB | [X] TB | [X]% | [X]% | [Date] | GREEN |
| [Storage System 2] | [X] TB | [X] TB | [X]% | [X]% | [Date] | AMBER |
| [Storage System 3] | [X] TB | [X] TB | [X]% | [X]% | [Date] | GREEN |
| [Database Storage 1] | [X] GB | [X] GB | [X]% | [X]% | [Date] | GREEN |

**Observations:**

- [Observation 1: e.g., "[Storage System 2] is projected to reach capacity within [X] months at the current growth rate. Storage expansion procurement is recommended."]
- [Observation 2]

---

### 5.3 Network Capacity

*Report on bandwidth utilisation across critical network links, WAN connections, and internet egress points.*

#### 5.3.1 Network Link Utilisation Summary

| Link / Circuit | Provisioned Bandwidth | Average Utilisation | Peak Utilisation | Peak Date/Time | Threshold | Status |
|---|---|---|---|---|---|---|
| [Link Description, e.g., HQ Internet Egress] | [X] Mbps | [X]% | [X]% | [Date/Time] | [X]% | GREEN |
| [Link Description, e.g., DC Primary WAN] | [X] Mbps | [X]% | [X]% | [Date/Time] | [X]% | AMBER |
| [Link Description, e.g., Branch MPLS – Branch A] | [X] Mbps | [X]% | [X]% | [Date/Time] | [X]% | GREEN |

**Observations:**

- [Observation 1]
- [Observation 2]

---

### 5.4 Database Capacity

*Report on database-specific capacity metrics, including tablespace, connection pools, transaction throughput, and query response times.*

#### 5.4.1 Database Capacity Summary

| Database Instance | Tablespace Used | Max Connections | Active Connections | Avg Connection Pool Utilisation | Status |
|---|---|---|---|---|---|
| [DB Instance 1] | [X]% | [X] | [X] | [X]% | GREEN |
| [DB Instance 2] | [X]% | [X] | [X] | [X]% | AMBER |
| [DB Instance 3] | [X]% | [X] | [X] | [X]% | GREEN |

**Observations:**

- [Observation 1]
- [Observation 2]

---

### 5.5 Application and Transaction Capacity

*Report on application-level capacity indicators including transaction volumes, response times, and queue depths.*

#### 5.5.1 Application Capacity Summary

| Application | Peak TPS (This Quarter) | Peak TPS (Threshold) | Average Response Time | SLA Threshold | Availability | Status |
|---|---|---|---|---|---|---|
| [Application 1] | [X] TPS | [X] TPS | [X] ms | [X] ms | [X]% | GREEN |
| [Application 2] | [X] TPS | [X] TPS | [X] ms | [X] ms | [X]% | AMBER |
| [Application 3] | [X] TPS | [X] TPS | [X] ms | [X] ms | [X]% | GREEN |

**Observations:**

- [Observation 1]
- [Observation 2]

---

### 5.6 Capacity-Related Incidents

*List any incidents during the reporting period that were caused by or contributed to by capacity constraints.*

| Incident ID | Date | System Affected | Description | Impact | Root Cause | Resolution Status |
|---|---|---|---|---|---|---|
| [INC-XXXX] | [Date] | [System] | [Brief description] | [Business impact] | [Capacity-related root cause] | [Resolved / Open] |
| [INC-XXXX] | [Date] | [System] | [Brief description] | [Business impact] | [Capacity-related root cause] | [Resolved / Open] |

---

## 6. Risk Ratings and Prioritisation

### 6.1 Capacity Risk Assessment Methodology

*Explain the risk rating methodology used to classify capacity findings. Align with the organization's existing Technology Risk Management Framework.*

Each identified capacity finding is assessed against a risk matrix considering **Likelihood** (probability of capacity breach causing a service disruption) and **Impact** (severity of potential business and regulatory consequences).

**Likelihood Scale:**

| Rating | Score | Description |
|---|---|---|
| Rare | 1 | Unlikely to occur within 12 months |
| Unlikely | 2 | May occur within 12 months |
| Possible | 3 | Likely to occur within 6 months at current trend |
| Likely | 4 | Likely to occur within 3 months at current trend |
| Almost Certain | 5 | Breach imminent or already occurring |

**Impact Scale:**

| Rating | Score | Description |
|---|---|---|
| Negligible | 1 | Minimal impact; no customer or regulatory consequence |
| Minor | 2 | Limited impact; minor SLA degradation |
| Moderate | 3 | Moderate impact; partial service disruption; potential customer complaints |
| Major | 4 | Significant impact; service outage; regulatory reporting threshold approached |
| Critical | 5 | Severe impact; prolonged outage; regulatory reporting required; reputational damage |

**Risk Rating Matrix:**

| | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Critical (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium | High | High | Critical | Critical |
| **Likely (4)** | Low | Medium | High | High | Critical |
| **Possible (3)** | Low | Medium | Medium | High | High |
| **Unlikely (2)** | Low | Low | Medium | Medium | High |
| **Rare (1)** | Low | Low | Low | Medium | Medium |

### 6.2 Consolidated Capacity Risk Register

*List all identified capacity risks for the reporting period, rated according to the methodology above.*

| Risk ID | System / Component | Finding | Likelihood | Impact | Risk Rating | Target Resolution Date | Status |
|---|---|---|---|---|---|---|---|
| CAP-[YYYY]-[XXX] | [System Name] | [Description of capacity risk] | [Score] | [Score] | **Critical** | [Date] | [Open / In Progress / Closed] |
| CAP-[YYYY]-[XXX] | [System Name] | [Description of capacity risk] | [Score] | [Score] | **High** | [Date] | [Open / In Progress / Closed] |
| CAP-[YYYY]-[XXX] | [System Name] | [Description of capacity risk] | [Score] | [Score] | **Medium** | [Date] | [Open / In Progress / Closed] |
| CAP-[YYYY]-[XXX] | [System Name] | [Description of capacity risk] | [Score] | [Score] | **Low** | [Date] | [Open / In Progress / Closed] |

### 6.3 Risk Prioritisation Summary

| Risk Rating | Count | % of Total |
|---|---|---|
| Critical | [X] | [X]% |
| High | [X] | [X]% |
| Medium | [X] | [X]% |
| Low | [X] | [X]% |
| **Total** | **[X]** | **100%** |

---

## 7. Recommendations and Action Items

### 7.1 Recommendations

*For each identified risk or finding, provide a clear, actionable recommendation. Recommendations should be specific, measurable, and assigned to a named owner with a defined target completion date.*

**Priority 1 — Critical and High Risk Items (Immediate Action Required)**

| Recommendation ID | System / Area | Recommendation | Rationale | Linked Risk ID |
|---|---|---|---|---|
| REC-[YYYY]-[XXX] | [System Name] | [Specific recommendation, e.g., "Provision additional [X] vCPU and [X] GB RAM on [Server Name] by [Date]."] | [Rationale linked to risk/finding] | CAP-[YYYY]-[XXX] |
| REC-[YYYY]-[XXX] | [System Name] | [Specific recommendation] | [Rationale] | CAP-[YYYY]-[XXX] |

**Priority 2 — Medium Risk Items (Action Required within Quarter)**

| Recommendation ID | System / Area | Recommendation | Rationale | Linked Risk ID |
|---|---|---|---|---|
| REC-[YYYY]-[XXX] | [System Name] | [Specific recommendation] | [Rationale] | CAP-[YYYY]-[XXX] |
| REC-[YYYY]-[XXX] | [System Name] | [Specific recommendation] | [Rationale] | CAP-[YYYY]-[XXX] |

**Priority 3 — Low Risk Items and Process Improvements (Action within 6 Months)**

| Recommendation ID | System / Area | Recommendation | Rationale | Linked Risk ID |
|---|---|---|---|---|
| REC-[YYYY]-[XXX] | [System Name] | [Specific recommendation] | [Rationale] | CAP-[YYYY]-[XXX] |
| REC-[YYYY]-[XXX] | Capacity Management Process | [Process improvement recommendation] | [Rationale] | N/A |

### 7.2 Consolidated Action Plan

*This table provides a single consolidated view of all actions arising from this report for tracking purposes.*

| Action ID | Recommendation ID | Action Description | Owner | Target Date | Priority | Status | Evidence of Completion |
|---|---|---|---|---|---|---|---|
| ACT-[YYYY]-[XXX] | REC-[YYYY]-[XXX] | [Specific action step] | [Name / Role] | [Date] | Critical | [Not Started / In Progress / Completed] | [e.g., Change request reference, screenshot] |
| ACT-[YYYY]-[XXX] | REC-[YYYY]-[XXX] | [Specific action step] | [Name / Role] | [Date] | High | [Not Started / In Progress / Completed] | [Evidence] |
| ACT-[YYYY]-[XXX] | REC-[YYYY]-[XXX] | [Specific action step] | [Name / Role] | [Date] | Medium | [Not Started / In Progress / Completed] | [Evidence] |
| ACT-[YYYY]-[XXX] | REC-[YYYY]-[XXX] | [Specific action step] | [Name / Role] | [Date] | Low | [Not Started / In Progress / Completed] | [Evidence] |

### 7.3 Carry-Forward Actions from Previous Quarter

*List any actions from the previous quarter's report that remain open, and provide a status update.*

| Action ID (Previous) | Description | Original Target Date | Updated Target Date | Current Status | Reason for Delay (if applicable) |
|---|---|---|---|---|---|
| ACT-[YYYY]-[XXX] | [Description] | [Original Date] | [Updated Date] | [Status] | [Reason] |
| ACT-[YYYY]-[XXX] | [Description] | [Original Date] | [Updated Date] | [Status] | [Reason] |

---

## 8. Management Response

### 8.1 Head of IT Operations Response

*The Head of IT Operations must formally respond to the findings and recommendations in this report. This section documents management's acceptance, rejection, or proposed alternative to each recommendation.*

**Date of Response:** [Date]
**Respondent:** [Name], Head of IT Operations

| Recommendation ID | Management Position | Response Details | Revised Target Date (if applicable) |
|---|---|---|---|
| REC-[YYYY]-[XXX] | Accepted / Accepted with Modification / Rejected | [Management's response and rationale] | [Date if revised] |
| REC-[YYYY]-[XXX] | Accepted / Accepted with Modification / Rejected | [Management's response and rationale] | [Date if revised] |
| REC-[YYYY]-[XXX] | Accepted / Accepted with Modification / Rejected | [Management's response and rationale] | [Date if revised] |

*Where a recommendation is rejected or modified, management must provide a documented rationale and confirm acceptance of residual risk.*

### 8.2 Management Acceptance of Residual Risk

*Where management has chosen not to fully remediate a finding, document the formal acceptance of residual risk below.*

| Risk ID | System | Description | Residual Risk Rating | Accepted By | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|
| CAP-[YYYY]-[XXX] | [System] | [Description of accepted residual risk] | [Rating] | [Name / Title] | [Date] | [Date] |

### 8.3 Escalation to Risk Committee / Board

*Record any capacity risks that have been escalated to the Technology Risk Committee, Risk Management Committee, or Board, as required by [Organization Name]'s risk governance framework.*

| Escalation Reference | Risk ID | Date Escalated | Escalated To | Outcome / Decision |
|---|---|---|---|---|
| [ESC-XXXX] | CAP-[YYYY]-[XXX] | [Date] | [Technology Risk Committee / Board] | [Decision or pending] |

---

## 9. Roles and Responsibilities

### 9.1 RACI Matrix — Capacity Monitoring and Reporting

*This RACI matrix defines accountability for capacity monitoring activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of IT Ops | IT Ops Team | System Owners | IT Risk Officer | CTO / CIO | Audit / Compliance | Risk Committee |
|---|---|---|---|---|---|---|---|
| Define and review capacity thresholds | A | R | C | C | I | I | I |
| Operate continuous monitoring tools | I | R | C | I | I | I | I |
| Respond to automated AMBER alerts | C | R | A | I | I | I | I |
| Respond to automated RED alerts | A | R | C | C | I | I | I |
| Raise capacity-related incidents | C | R | A | I | I | I | I |
| Conduct monthly operational review | A | R | I | C | I | I | I |
| Prepare quarterly Capacity Monitoring Report | A | R | C | C | I | I | I |
| Review and approve quarterly report | A | I | I | C | R | I | I |
| Implement remediation actions | C | R | A | I | I | I | I |
| Track action item completion | A | R | C | C | I | I | I |
| Escalate Critical / High risks | A | I | C | R | A | I | I |
| Present report to Risk Committee | A | I | I | C | R | I | I |
| Review and accept residual risk | C | I | C | R | A | I | A |
| File report for regulatory purposes | I | I | I | R | I | A | I |

### 9.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Head of IT Operations | [Name] | IT Operations | [Email] |
| IT Operations Manager | [Name] | IT Operations | [Email] |
| Senior Systems Administrator | [Name] | IT Operations | [Email] |
| IT Risk Officer | [Name] | Risk Management | [Email] |
| Chief Technology Officer | [Name] | Technology | [Email] |
| Business Continuity Manager | [Name] | Operations / Risk | [Email] |
| Compliance Officer | [Name] | Compliance | [Email] |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 10.2 Approval Sign-Off

*This report requires formal sign-off from the designated approving authorities prior to distribution and filing.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by | [Name], [Title] | _____________________ | [Date] |
| Reviewed by | [Name], IT Operations Manager | _____________________ | [Date] |
| Approved by | [Name], Head of IT Operations | _____________________ | [Date] |
| Endorsed by | [Name], Chief Technology Officer | _____________________ | [Date] |
| Noted by | [Name], IT Risk Officer | _____________________ | [Date] |

### 10.3 Distribution List

| Name | Role | Department | Copy Type |
|---|---|---|---|
| [Name] | Head of IT Operations | IT Operations | Original |
| [Name] | Chief Technology Officer | Technology | Controlled Copy |
| [Name] | IT Risk Officer | Risk Management | Controlled Copy |
| [Name] | Chief Risk Officer | Risk Management | Controlled Copy |
| [Name] | Head of Compliance | Compliance | Controlled Copy |
| [Name] | Internal Audit (as required) | Internal Audit | Controlled Copy |

---

## 11. References

### 11.1 Regulatory References

| Reference | Document | Clause / Section | Description |
|---|---|---|---|
| BNM/RH/PD 028-119 | Risk Management in Technology (RMiT) Policy Document | Clause 10.16 | Capacity management — requirement to monitor technology resource utilisation against defined thresholds and plan for future capacity needs |
| BNM/RH/PD 028-119 | Risk Management in Technology (RMiT) Policy Document | [Related Clause] | [Description] |
| [Reference] | [Document Name] | [Clause] | [Description] |

### 11.2 Internal Policy References

| Reference | Document Title | Version | Date |
|---|---|---|---|
| [POL-IT-XXX] | IT Governance Policy | [Version] | [Date] |
| [POL-IT-XXX] | Technology Risk Management Framework | [Version] | [Date] |
| [POL-IT-XXX] | Business Continuity Management Policy | [Version] | [Date] |
| [PROC-OPS-XXX] | Capacity Management Procedure | [Version] | [Date] |
| [PROC-OPS-XXX] | Incident Management Procedure | [Version] | [Date] |
| [PROC-OPS-XXX] | IT Change Management Procedure | [Version] | [Date] |

### 11.3 Related Documents

| Document Title | Document ID | Relationship |
|---|---|---|
| Technology Risk Register | [Doc ID] | Capacity risks are recorded and tracked in the Technology Risk Register |
| Business Impact Analysis | [Doc ID] | BIA defines criticality ratings used in this report |
| Disaster Recovery Plan | [Doc ID] | Capacity breaches on critical systems may trigger DR invocation |
| Annual Capacity Plan | [Doc ID] | This report feeds into the annual capacity planning and budgeting cycle |
| Previous Capacity Monitoring Report | [Doc ID] | Basis for period-on-period comparison |

---

## 12. Appendices

### Appendix A — System-Specific Capacity Thresholds

*List the approved capacity thresholds for each in-scope system. These thresholds are reviewed and approved annually.*

| System / Component | Metric | AMBER Threshold | RED Threshold | Approved By | Approval Date |
|---|---|---|---|---|---|
| [System Name] | CPU Utilisation | [X]% | [X]% | [Name / Title] | [Date] |
| [System Name] | Memory Utilisation | [X]% | [X]% | [Name / Title] | [Date] |
| [System Name] | Disk / Storage | [X]% | [X]% | [Name / Title] | [Date] |
| [System Name] | Network Bandwidth | [X]% | [X]% | [Name / Title] | [Date] |
| [System Name] | DB Tablespace | [X]% | [X]% | [Name / Title] | [Date] |
| [System Name] | DB Connection Pool | [X]% | [X]% | [Name / Title] | [Date] |
| [System Name] | Transaction Queue Depth | [X] | [X] | [Name / Title] | [Date] |

---

### Appendix B — Capacity Utilisation Trend Charts

*Attach or embed graphical trend charts for all key capacity metrics. Charts should cover the full reporting quarter and include threshold lines for visual reference.*

- **Figure B-1:** CPU Utilisation — [System Name] — [Reporting Period]
  *[Insert chart or attach as separate exhibit]*

- **Figure B-2:** Memory Utilisation — [System Name] — [Reporting Period]
  *[Insert chart or attach as separate exhibit]*

- **Figure B-3:** Storage Capacity Growth Trend — [Storage System Name] — [Last 12 Months]
  *[Insert chart or attach as separate exhibit]*

- **Figure B-4:** Network Bandwidth Utilisation — [Link Name] — [Reporting Period]
  *[Insert chart or attach as separate exhibit]*

- **Figure B-5:** Application Transaction Throughput — [Application Name] — [Reporting Period]
  *[Insert chart or attach as separate exhibit]*

---

### Appendix C — Capacity-Related Incident Log

*Full listing of all capacity-related incidents raised during the reporting period, extracted from the incident management system.*

| Incident ID | Date/Time Raised | System | Severity | Description | Duration | Root Cause | Resolution | Linked Recommendation |
|---|---|---|---|---|---|---|---|---|
| [INC-XXXX] | [Date/Time] | [System] | P[1/2/3] | [Description] | [X] hrs [X] min | [Root cause] | [Resolution] | [REC-ID if applicable] |
| [INC-XXXX] | [Date/Time] | [System] | P[1/2/3] | [Description] | [X] hrs [X] min | [Root cause] | [Resolution] | [REC-ID if applicable] |

---

### Appendix D — Action Items Tracker (Full Detail)

*Detailed tracker for all open and recently closed action items, including evidence references and escalation history.*

| Action ID | Description | Owner | Raised Date | Target Date | Actual Completion Date | Status | Evidence Reference | Notes |
|---|---|---|---|---|---|---|---|---|
| ACT-[YYYY]-[XXX] | [Description] | [Owner] | [Date] | [Date] | [Date or N/A] | [Status] | [Reference] | [Notes] |
| ACT-[YYYY]-[XXX] | [Description] | [Owner] | [Date] | [Date] | [Date or N/A] | [Status] | [Reference] | [Notes] |

---

### Appendix E — Monitoring Tool Configuration Summary

*Summarise the configuration of monitoring tools in use, including version information, coverage gaps, and any known monitoring limitations.*

| Tool Name | Version | Systems Monitored | Monitoring Interval | Known Gaps / Limitations |
|---|---|---|---|---|
| [Tool Name] | [Version] | [Systems] | [Interval] | [Gaps, or "None identified"] |
| [Tool Name] | [Version] | [Systems] | [Interval] | [Gaps, or "None identified"] |

---

### Appendix F — Glossary of Terms

| Term | Definition |
|---|---|
| AMBER Threshold | The utilisation level at which heightened monitoring and remediation planning is initiated, as defined in the approved threshold framework. |
| Capacity Breach | The exceedance of a defined RED threshold, triggering incident management procedures. |
| Capacity Planning | The process of determining the technology resources required to meet current and projected future business demand. |
| RED Threshold | The critical utilisation level at which immediate escalation and remediation are required. |
| Residual Risk | The remaining risk after control measures have been applied. |
| RMiT | Risk Management in Technology — the BNM policy document governing technology risk management for Malaysian financial institutions. |
| TPS | Transactions Per Second — a measure of application throughput capacity. |
| [Additional Term] | [Definition] |

---

*End of Document*

---
**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential | **Owner:** Head of IT Operations
**[Organization Name]** | Last Updated: [Last Review Date]