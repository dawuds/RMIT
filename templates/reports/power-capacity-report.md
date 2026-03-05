# Power Capacity Report

---

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

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Methodology](#3-methodology)
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

*Provide a concise, non-technical overview of the power capacity assessment findings, highlighting critical risks, current redundancy posture, and the organization's ability to sustain operations during a power failure. This section is intended for senior management and should be no longer than one page.*

### 1.1 Assessment Overview

| Field | Details |
|---|---|
| **Report Period** | [Q1/Q2/Q3/Q4 YYYY] |
| **Assessment Date** | [Assessment Date] |
| **Assessment Lead** | [Name, Title] |
| **Data Centre / Facility Assessed** | [Facility Name and Location] |
| **Overall Power Capacity Status** | [Adequate / At Risk / Critical] |
| **Overall Redundancy Rating** | [N / N+1 / 2N / 2N+1] |
| **Generator Fuel Autonomy** | [X hours at current load] |

### 1.2 Summary of Key Findings

*Summarise the most significant findings from this assessment period. Include capacity headroom, redundancy shortfalls, and fuel supply status.*

- **Power Capacity Headroom:** [X% remaining capacity across all power distribution units (PDUs)]
- **Redundancy Level:** [Current redundancy configuration and whether it meets the target architecture]
- **Generator Fuel Supply:** [Current fuel level and estimated runtime under full load]
- **Critical Issues Identified:** [Number of critical findings requiring immediate remediation]
- **High-Risk Issues Identified:** [Number of high-risk findings requiring remediation within 30 days]
- **Overall Assessment Outcome:** [Pass / Pass with Observations / Fail]

### 1.3 Immediate Actions Required

*List any actions that require urgent attention from senior management or the Board Risk Committee prior to the next scheduled review.*

| Priority | Action Required | Responsible Party | Target Date |
|---|---|---|---|
| Critical | [Action description] | [Owner] | [Date] |
| High | [Action description] | [Owner] | [Date] |
| [Priority] | [Action description] | [Owner] | [Date] |

---

## 2. Purpose and Scope

### 2.1 Purpose

This Power Capacity Report documents the assessment of electrical power infrastructure, redundancy configurations, and generator fuel supply status for [Organization Name]'s technology facilities. It is produced on a quarterly basis in accordance with the requirements of Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.26**, which mandates that financial institutions maintain adequate power capacity, redundancy, and backup power provisions to ensure the continuous availability of critical technology systems.

This report serves the following objectives:

- To verify that power infrastructure capacity is sufficient to support current and projected technology loads.
- To confirm that redundancy levels meet the organization's target architecture and BNM RMiT requirements.
- To validate that generator fuel supply provides adequate runtime to sustain operations during an extended utility power outage.
- To identify power-related risks and track remediation actions to closure.
- To provide an auditable record of power capacity management for regulatory examination purposes.

### 2.2 Regulatory Context

This document is produced in direct response to the following regulatory obligations:

| Regulation / Standard | Clause / Section | Requirement |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.26 | Adequate power capacity, redundancy, and backup power for critical technology systems |
| BNM RMiT | Clause 10.25 | Physical security and environmental controls for data centres |
| [ISO 27001 / TIA-942 / ASHRAE / Other] | [Relevant section] | [Relevant requirement] |
| [Internal Policy Reference] | [Policy name and section] | [Requirement] |

### 2.3 Scope

*Define the boundaries of this assessment. Include all facilities, systems, and infrastructure components covered. Explicitly state any exclusions and the rationale for exclusion.*

**In Scope:**

- Data centres and server rooms operated by [Organization Name] at the following locations:
  - [Primary Data Centre — Site Name, Address]
  - [Secondary / Disaster Recovery Data Centre — Site Name, Address]
  - [Branch / Regional Office Server Rooms — if applicable]
- Utility power supply infrastructure (incoming mains, main distribution boards, sub-distribution boards)
- Uninterruptible Power Supply (UPS) systems
- Power Distribution Units (PDUs)
- Backup generator systems and associated automatic transfer switches (ATS)
- Generator fuel tanks, fuel monitoring systems, and fuel supply contracts
- Precision cooling systems (insofar as they relate to power load calculations)

**Out of Scope:**

- End-user workstations and office power infrastructure (unless co-located with server rooms)
- [Any other explicitly excluded systems or locations — provide rationale]

### 2.4 Assessment Period

| Milestone | Date |
|---|---|
| Assessment Commencement Date | [Date] |
| On-Site Inspection Date(s) | [Date(s)] |
| Data Collection Cutoff Date | [Date] |
| Draft Report Issued | [Date] |
| Management Review Period | [Date to Date] |
| Final Report Approved | [Date] |
| Next Scheduled Assessment | [Date] |

---

## 3. Methodology

*Describe the methods, tools, and standards used to conduct the power capacity assessment. This section provides auditors with confidence that the assessment was conducted rigorously and consistently.*

### 3.1 Assessment Approach

The assessment was conducted using the following methods:

- **Physical Inspection:** On-site walkthrough of all in-scope data centre facilities to visually inspect power infrastructure, labelling, physical condition, and safety compliance.
- **Metered Load Measurement:** Real-time and trend-based power load data collected from intelligent PDUs, UPS management interfaces, and Building Management Systems (BMS).
- **Capacity Planning Analysis:** Review of current load against rated capacity to determine headroom percentages.
- **Documentation Review:** Review of maintenance records, service contracts, load testing reports, and prior assessment findings.
- **Interviews:** Discussions with [Data Centre Operations team / Facilities Management / relevant personnel] to validate findings and capture operational context.

### 3.2 Measurement Standards and References

| Standard | Application |
|---|---|
| TIA-942 Rated-4 / ANSI | Data centre infrastructure tiering classification |
| IEC 60364 / MS IEC 60364 | Electrical installation standards |
| [Uptime Institute Tier Standard] | Redundancy classification |
| [Organization's internal data centre standards] | Internal baseline requirements |

### 3.3 Capacity Thresholds

The following thresholds are applied to determine capacity risk ratings:

| Metric | Green (Adequate) | Amber (Monitor) | Red (Critical) |
|---|---|---|---|
| Power Load vs. Rated Capacity | < 60% | 60% – 79% | ≥ 80% |
| UPS Runtime at Full Load | > 30 minutes | 15 – 30 minutes | < 15 minutes |
| Generator Fuel Runtime | > 72 hours | 24 – 72 hours | < 24 hours |
| Redundancy Level | N+1 or better | N (single path) | Below N |

---

## 4. Key Findings and Observations

*Document all significant findings from the assessment period. Findings should be objective, evidence-based, and traceable to supporting data in the appendices.*

### 4.1 Power Capacity Assessment

#### 4.1.1 Utility Power Supply

*Summarise the status of incoming utility power supply, including supply authority, contracted capacity, and measured demand.*

| Parameter | Details |
|---|---|
| **Utility Provider** | [Tenaga Nasional Berhad (TNB) / Other] |
| **Contracted Capacity** | [X kVA] |
| **Peak Demand (Reporting Period)** | [X kW / X kVA] |
| **Average Demand (Reporting Period)** | [X kW / X kVA] |
| **Utility Supply Redundancy** | [Single feed / Dual feed / Ring main] |
| **Number of Utility Outages (Period)** | [X outages] |
| **Total Utility Outage Duration (Period)** | [X hours / minutes] |

**Observations:**

- [Observation 1: e.g., Utility supply is delivered via a single incoming feed with no diversity, representing a single point of failure at the building entry point.]
- [Observation 2: e.g., X utility supply interruptions were recorded during the reporting period, all of which were successfully managed by the UPS and generator systems.]
- [Observation 3 — if applicable]

#### 4.1.2 UPS System Assessment

*Assess each UPS system installed at in-scope facilities. Include capacity, current load, battery health, and last service date.*

| UPS ID | Location | Rated Capacity (kVA) | Current Load (kW) | Load % | Redundancy Config | Battery Last Replaced | Last Service Date | Status |
|---|---|---|---|---|---|---|---|---|
| UPS-01 | [Primary DC — Room A] | [X kVA] | [X kW] | [X%] | [N+1] | [Date] | [Date] | [Green/Amber/Red] |
| UPS-02 | [Primary DC — Room B] | [X kVA] | [X kW] | [X%] | [N+1] | [Date] | [Date] | [Green/Amber/Red] |
| UPS-03 | [DR Site] | [X kVA] | [X kW] | [X%] | [N] | [Date] | [Date] | [Green/Amber/Red] |
| [UPS-XX] | [Location] | [X kVA] | [X kW] | [X%] | [Config] | [Date] | [Date] | [Status] |

**Observations:**

- [Observation 1]
- [Observation 2]

#### 4.1.3 Power Distribution Unit (PDU) Assessment

*Summarise PDU load distribution across racks and rows. Highlight any PDUs approaching or exceeding capacity thresholds.*

| PDU ID | Location / Row | Rated Capacity (A) | Current Load (A) | Load % | Redundancy | Status |
|---|---|---|---|---|---|---|
| PDU-A01 | [Primary DC — Row A] | [X A] | [X A] | [X%] | [A+B feed] | [Green/Amber/Red] |
| PDU-A02 | [Primary DC — Row A] | [X A] | [X A] | [X%] | [A+B feed] | [Green/Amber/Red] |
| [PDU-XX] | [Location] | [X A] | [X A] | [X%] | [Config] | [Status] |

**Observations:**

- [Observation 1]
- [Observation 2]

### 4.2 Redundancy Assessment

*Assess the redundancy architecture across the power chain. Map the current configuration against the target architecture and identify any deviations.*

#### 4.2.1 Redundancy Architecture Summary

| Facility | Current Tier / Redundancy Level | Target Tier / Redundancy Level | Gap Identified | Comments |
|---|---|---|---|---|
| [Primary Data Centre] | [e.g., Tier III / N+1] | [e.g., Tier III / N+1] | [Yes / No] | [Comments] |
| [DR Data Centre] | [e.g., Tier II / N] | [e.g., Tier II / N] | [Yes / No] | [Comments] |
| [Branch Server Room] | [e.g., Tier I / N] | [e.g., Tier II / N] | [Yes] | [Comments] |

#### 4.2.2 Automatic Transfer Switch (ATS) Assessment

| ATS ID | Location | Utility-to-Generator Transfer Time | Last Test Date | Test Result | Status |
|---|---|---|---|---|---|
| ATS-01 | [Primary DC — MDB] | [X seconds] | [Date] | [Pass/Fail] | [Green/Amber/Red] |
| ATS-02 | [DR Site — MDB] | [X seconds] | [Date] | [Pass/Fail] | [Green/Amber/Red] |

### 4.3 Generator and Fuel Supply Assessment

*This section is critical for BNM RMiT Clause 10.26 compliance. Document the status of all backup generators and fuel supply arrangements.*

#### 4.3.1 Generator Asset Register

| Generator ID | Location | Rated Capacity (kVA) | Current Test Load | Last Load Test Date | Test Result | Maintenance Status | Status |
|---|---|---|---|---|---|---|---|
| GEN-01 | [Primary DC — External plant room] | [X kVA] | [X kW / X%] | [Date] | [Pass/Fail] | [Current/Overdue] | [Green/Amber/Red] |
| GEN-02 | [DR Site] | [X kVA] | [X kW / X%] | [Date] | [Pass/Fail] | [Current/Overdue] | [Green/Amber/Red] |

#### 4.3.2 Fuel Supply Status

| Generator ID | Fuel Type | Tank Capacity (Litres) | Current Fuel Level (Litres) | Current Fuel Level (%) | Estimated Runtime at Full Load | Minimum Required Runtime | Status |
|---|---|---|---|---|---|---|---|
| GEN-01 | [Diesel] | [X L] | [X L] | [X%] | [X hours] | [72 hours] | [Green/Amber/Red] |
| GEN-02 | [Diesel] | [X L] | [X L] | [X%] | [X hours] | [72 hours] | [Green/Amber/Red] |

#### 4.3.3 Fuel Supply Arrangements

| Parameter | Details |
|---|---|
| **Primary Fuel Supplier** | [Supplier Name] |
| **Emergency Fuel Supply Contract** | [Contract reference / Yes / No] |
| **Contracted Emergency Delivery Lead Time** | [X hours] |
| **Fuel Level Monitoring** | [Automated / Manual / BMS-integrated] |
| **Minimum Fuel Level Alert Threshold** | [X% / X litres] |
| **Last Fuel Delivery Date** | [Date] |
| **Fuel Quality Last Tested** | [Date] |
| **Fuel Polishing / Maintenance Contract** | [Yes / No — Provider name] |

**Observations:**

- [Observation 1: e.g., The primary data centre generator fuel tank is at X% capacity, providing an estimated runtime of X hours at current average load, which exceeds/falls short of the 72-hour minimum requirement.]
- [Observation 2]
- [Observation 3]

---

## 5. Risk Ratings and Prioritisation

*Classify all findings identified during this assessment using the organization's standard risk rating methodology. Findings should be prioritised to guide remediation effort.*

### 5.1 Risk Rating Methodology

| Risk Rating | Definition | Remediation Timeline |
|---|---|---|
| **Critical** | Immediate threat to availability of critical systems; potential BNM RMiT non-compliance | Immediate — within 7 days |
| **High** | Significant risk to power availability or redundancy; deviation from target architecture | Within 30 days |
| **Medium** | Moderate risk; controls exist but are insufficient or inconsistently applied | Within 90 days |
| **Low** | Minor risk or observation; controls are largely adequate | Within 180 days / next review cycle |
| **Informational** | No immediate risk; noted for awareness or future planning | To be considered in capacity planning |

### 5.2 Finding Register

| Finding ID | Finding Description | Affected Component | Root Cause | Risk Rating | Likelihood | Impact | Recommended Action |
|---|---|---|---|---|---|---|---|
| PWR-[YYYY]-[QQ]-001 | [e.g., Generator GEN-01 fuel level is below 50%, providing less than 36 hours of runtime] | GEN-01, Primary DC | [e.g., Scheduled fuel delivery delayed due to supplier capacity constraints] | **High** | [Likely] | [High] | [Immediate fuel top-up; review delivery SLA with supplier] |
| PWR-[YYYY]-[QQ]-002 | [Finding description] | [Component] | [Root cause] | **[Rating]** | [Likelihood] | [Impact] | [Action] |
| PWR-[YYYY]-[QQ]-003 | [Finding description] | [Component] | [Root cause] | **[Rating]** | [Likelihood] | [Impact] | [Action] |
| PWR-[YYYY]-[QQ]-004 | [Finding description] | [Component] | [Root cause] | **[Rating]** | [Likelihood] | [Impact] | [Action] |

### 5.3 Risk Summary Dashboard

| Risk Rating | Number of Findings | Change from Previous Quarter |
|---|---|---|
| Critical | [X] | [↑ / ↓ / → No change] |
| High | [X] | [↑ / ↓ / → No change] |
| Medium | [X] | [↑ / ↓ / → No change] |
| Low | [X] | [↑ / ↓ / → No change] |
| Informational | [X] | [↑ / ↓ / → No change] |
| **Total** | **[X]** | |

### 5.4 Prior Period Finding Status

*Track the status of findings raised in previous quarters to demonstrate remediation progress.*

| Finding ID | Quarter Raised | Original Finding | Risk Rating | Committed Remediation Date | Current Status | Evidence of Closure |
|---|---|---|---|---|---|---|
| PWR-[YYYY]-[QQ]-001 | [Q/YYYY] | [Finding description] | [Rating] | [Date] | [Closed / In Progress / Overdue] | [Reference to evidence] |
| PWR-[YYYY]-[QQ]-002 | [Q/YYYY] | [Finding description] | [Rating] | [Date] | [Closed / In Progress / Overdue] | [Reference to evidence] |

---

## 6. Recommendations and Action Items

*Provide specific, actionable recommendations for each finding. Recommendations should be practical, proportionate to the risk, and assigned to a named owner with a committed completion date.*

### 6.1 Critical and High Priority Recommendations

#### Recommendation 1: [Short Descriptive Title — e.g., Restore Generator GEN-01 Fuel to Minimum Level]

| Field | Details |
|---|---|
| **Finding Reference** | PWR-[YYYY]-[QQ]-001 |
| **Risk Rating** | Critical / High |
| **Recommendation** | [Detailed recommendation text. What should be done, how, and to what standard. Reference relevant BNM RMiT clause if applicable.] |
| **Expected Outcome** | [What the desired state looks like upon completion] |
| **Responsible Owner** | [Name, Title] |
| **Supporting Parties** | [Names / Teams] |
| **Target Completion Date** | [Date] |
| **Success Criteria** | [How completion will be measured and evidenced] |
| **Regulatory Reference** | BNM RMiT Clause 10.26 |

#### Recommendation 2: [Short Descriptive Title]

| Field | Details |
|---|---|
| **Finding Reference** | PWR-[YYYY]-[QQ]-002 |
| **Risk Rating** | [Rating] |
| **Recommendation** | [Detailed recommendation text] |
| **Expected Outcome** | [Desired state] |
| **Responsible Owner** | [Name, Title] |
| **Supporting Parties** | [Names / Teams] |
| **Target Completion Date** | [Date] |
| **Success Criteria** | [Measurable completion criteria] |
| **Regulatory Reference** | [BNM RMiT Clause X.XX] |

### 6.2 Medium and Low Priority Recommendations

| Rec. ID | Finding Reference | Recommendation Summary | Responsible Owner | Target Date | Priority |
|---|---|---|---|---|---|
| REC-[YYYY]-[QQ]-003 | PWR-[YYYY]-[QQ]-003 | [Summary of recommendation] | [Owner] | [Date] | Medium |
| REC-[YYYY]-[QQ]-004 | PWR-[YYYY]-[QQ]-004 | [Summary of recommendation] | [Owner] | [Date] | Low |

### 6.3 Capacity Planning Recommendations

*Provide forward-looking recommendations to support capacity planning based on current load trends and projected growth.*

- **Load Growth Projection:** Based on current trends, data centre power load is projected to reach [X%] of rated capacity by [Month YYYY]. It is recommended that capacity expansion planning commence no later than [Date] to avoid exceeding the [60%] load threshold.
- **UPS Battery Replacement:** UPS-[XX] battery strings are approaching end-of-life and should be scheduled for replacement in [Q/YYYY] to maintain warranty coverage and runtime guarantees.
- **Fuel Storage Expansion:** [If applicable] Current fuel tank capacity limits maximum runtime to [X hours]. Consider increasing tank capacity or establishing a consignment stock arrangement with the fuel supplier to achieve the [target X hours] runtime standard.
- [Additional capacity planning recommendation]

---

## 7. Management Response

*This section records the formal response of [Organization Name] management to the findings and recommendations contained in this report. Responses must be provided by the Responsible Owner for each finding prior to report finalisation.*

### 7.1 Management Response Template

*Management should indicate acceptance, rejection, or risk acceptance for each recommendation, and provide a committed remediation timeline.*

| Rec. ID | Recommendation Summary | Management Response | Response Detail | Committed Owner | Committed Date |
|---|---|---|---|---|---|
| REC-[YYYY]-[QQ]-001 | [Summary] | Accepted / Rejected / Risk Accepted | [Management comments, including rationale if rejected or risk accepted] | [Name, Title] | [Date] |
| REC-[YYYY]-[QQ]-002 | [Summary] | Accepted / Rejected / Risk Accepted | [Management comments] | [Name, Title] | [Date] |
| REC-[YYYY]-[QQ]-003 | [Summary] | Accepted / Rejected / Risk Accepted | [Management comments] | [Name, Title] | [Date] |
| REC-[YYYY]-[QQ]-004 | [Summary] | Accepted / Rejected / Risk Accepted | [Management comments] | [Name, Title] | [Date] |

### 7.2 Risk Acceptance Record

*Where management elects to accept a risk rather than implement a recommendation, the risk acceptance must be formally documented and approved at the appropriate authority level.*

| Finding ID | Risk Description | Risk Rating | Rationale for Acceptance | Approved By | Approval Date | Risk Review Date |
|---|---|---|---|---|---|---|
| PWR-[YYYY]-[QQ]-[XXX] | [Risk description] | [Rating] | [Business rationale for not remediating] | [Name, Title] | [Date] | [Date — when acceptance will be reviewed] |

### 7.3 Head of IT Operations Statement

*The Head of IT Operations must provide a formal statement attesting to the accuracy of the report and commitment to remediation.*

> I, **[Name]**, Head of IT Operations at [Organization Name], confirm that the findings and observations contained in this Power Capacity Report for the period **[Q/YYYY]** are accurate to the best of my knowledge. I commit to ensuring that all accepted recommendations are implemented within the agreed timelines and that any deviations will be escalated through the appropriate governance channels.
>
> **Signature:** ___________________________
>
> **Date:** [Date]

---

## 8. Roles and Responsibilities

*This section defines the roles and responsibilities of all parties involved in the production, review, and remediation activities associated with this report.*

### 8.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of IT Operations | Data Centre Operations Team | IT Risk & Compliance | Facilities Management | CIO / CTO | Senior Management / Board Risk Committee | External Auditor |
|---|---|---|---|---|---|---|---|
| Conduct power capacity assessment | R | R | C | C | I | I | I |
| Collect and validate metered data | C | R | I | C | I | I | — |
| Draft Power Capacity Report | A | R | C | C | I | I | — |
| Review draft report | A | C | R | C | C | I | — |
| Provide management response | A | C | C | I | C | I | — |
| Approve final report | A | I | C | I | A | I | — |
| Submit to Board / Committee | I | I | R | I | A | A | — |
| Implement remediation actions | A | R | I | R | I | I | — |
| Track remediation progress | A | R | R | C | I | I | — |
| Conduct follow-up assessment | A | R | R | C | I | I | I |
| Archive report per retention policy | C | R | R | I | I | I | — |

### 8.2 Escalation Path

| Condition | Escalation To | Timeframe |
|---|---|---|
| Critical finding identified | CIO / CTO and IT Risk & Compliance | Immediately upon identification |
| Generator or UPS failure | Head of IT Operations and Facilities Management | Immediately — 24/7 |
| Fuel level below minimum threshold | Data Centre Operations on-call | Immediately — automated alert |
| Management response not received within 5 business days | CIO / CTO | 5 business days after report issue |
| Remediation action overdue by > 14 days | IT Risk & Compliance for escalation to Board Risk Committee | 14 days post-due date |

---

## 9. Review and Approval

### 9.1 Document Review Schedule

This document shall be reviewed and updated on a **quarterly** basis, or in the event of:

- A significant change to data centre power infrastructure (e.g., new UPS installation, generator replacement, additional load);
- A power-related incident or outage affecting critical systems;
- A change in regulatory requirements relating to BNM RMiT Clause 10.26;
- A request by the Board Risk Committee or internal/external auditors.

### 9.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document creation |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes — e.g., Quarterly update Q2 YYYY] |

### 9.3 Approval Sign-Off

*This report requires the following approvals prior to distribution to Senior Management and the Board Risk Committee.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — Data Centre Operations Lead | [Name] | ___________________________ | [Date] |
| Reviewed By — IT Risk & Compliance | [Name] | ___________________________ | [Date] |
| Approved By — Head of IT Operations | [Name] | ___________________________ | [Date] |
| Endorsed By — Chief Information Officer / Chief Technology Officer | [Name] | ___________________________ | [Date] |

---

## 10. References

*The following regulatory documents, standards, and internal policies are referenced in the production of this report.*

| Reference | Description | Relevance |
|---|---|---|
| BNM Risk Management in Technology (RMiT) Policy Document | Issued by Bank Negara Malaysia | Primary regulatory framework governing technology risk management for licensed financial institutions in Malaysia |
| BNM RMiT **Clause 10.26** | Power supply and capacity management | Requires adequate power capacity, redundancy, and backup power provisions to support continuous availability of critical technology systems |
| BNM RMiT **Clause 10.25** | Physical and environmental controls | Environmental monitoring and physical security of data centre facilities |
| TIA-942 — Telecommunications Infrastructure Standard for Data Centers | ANSI/TIA | Data centre infrastructure tiering and redundancy classification methodology |
| IEC 60364 / MS IEC 60364 | Low Voltage Electrical Installations | Electrical installation standards applied during assessment |
| [Uptime Institute Tier Certification Standard] | Uptime Institute | Reference standard for data centre operational sustainability |
| [Organization Name] Data Centre Physical Security and Environmental Controls Policy | [Internal Policy Reference] | Internal policy governing data centre environmental standards |
| [Organization Name] IT Risk Management Framework | [Internal Policy Reference] | Risk rating methodology applied in this report |
| [Organization Name] Business Continuity Plan | [Internal Policy Reference] | Minimum power runtime requirements derived from BCP recovery time objectives |

---

## 11. Appendices

*Supporting data and evidence referenced throughout this report are contained in the following appendices.*

---

### Appendix A: Power Load Trend Data

*Attach or embed graphical trend data showing power consumption over the reporting period for each facility. Data should cover at minimum the preceding 12 months to enable trend analysis.*

- **Figure A-1:** [Primary Data Centre — Monthly average and peak kW load, [Month YYYY] to [Month YYYY]]
- **Figure A-2:** [DR Data Centre — Monthly average and peak kW load, [Month YYYY] to [Month YYYY]]
- **Figure A-3:** [PDU-level load heat map — Primary Data Centre, as at [Date]]
- **Data Source:** [BMS / Intelligent PDU management platform / DCIM system — system name and version]

---

### Appendix B: UPS System Test Records

*Attach copies of UPS load test reports and battery health assessment records for the reporting period.*

| UPS ID | Test Type | Test Date | Conducted By | Result | Report Reference |
|---|---|---|---|---|---|
| UPS-01 | Full load discharge test | [Date] | [Service Provider] | [Pass/Fail] | [Report Ref.] |
| UPS-02 | Battery health impedance test | [Date] | [Service Provider] | [Pass/Fail] | [Report Ref.] |
| UPS-03 | [Test type] | [Date] | [Service Provider] | [Pass/Fail] | [Report Ref.] |

---

### Appendix C: Generator Load Test Records

*Attach copies of generator load test reports and maintenance service records for the reporting period.*

| Generator ID | Test Type | Test Date | Duration | Load Applied | Conducted By | Result | Report Reference |
|---|---|---|---|---|---|---|---|
| GEN-01 | Full load test (100%) | [Date] | [X hours] | [X kVA] | [Service Provider] | [Pass/Fail] | [Report Ref.] |
| GEN-01 | Preventive maintenance | [Date] | N/A | N/A | [Service Provider] | [Completed] | [Report Ref.] |
| GEN-02 | [Test type] | [Date] | [Duration] | [Load] | [Service Provider] | [Pass/Fail] | [Report Ref.] |

---

### Appendix D: Fuel Delivery and Inventory Records

*Attach fuel delivery receipts, fuel level monitoring logs, and fuel quality test certificates for the reporting period.*

| Record Type | Date | Facility | Quantity / Details | Reference |
|---|---|---|---|---|
| Fuel delivery receipt | [Date] | [Primary DC] | [X litres delivered] | [Receipt/Invoice Ref.] |
| Fuel level log (weekly) | [Date range] | [All facilities] | [See attached log] | [Log reference] |
| Fuel quality test certificate | [Date] | [Primary DC] | [Passed / Results within specification] | [Certificate Ref.] |
| Emergency fuel supply contract | [Contract date] | All facilities | [Supplier: X; Lead time: Y hours] | [Contract Ref.] |

---

### Appendix E: Site Photos and Physical Inspection Evidence

*Attach photographs taken during the on-site physical inspection. Photos should be labelled with the location, date, and a brief description of what is depicted.*

- **Photo E-01:** [Description — e.g., UPS-01 front panel display showing load and battery status — Primary DC, Room A — [Date]]
- **Photo E-02:** [Description — e.g., Generator GEN-01 fuel gauge — Primary DC external plant room — [Date]]
- **Photo E-03:** [Description — e.g., PDU-A01 showing circuit breaker status — Primary DC Row A — [Date]]
- **[Photo E-XX]:** [Description]

---

### Appendix F: Power Infrastructure Asset Register

*Provide a complete register of all power infrastructure assets covered by this assessment.*

| Asset ID | Asset Type | Make / Model | Serial Number | Rated Capacity | Installation Date | Warranty Expiry | Maintenance Contract | Location |
|---|---|---|---|---|---|---|---|---|
| UPS-01 | UPS | [Make / Model] | [Serial No.] | [X kVA] | [Date] | [Date] | [Provider / Expiry] | [Location] |
| GEN-01 | Generator | [Make / Model] | [Serial No.] | [X kVA] | [Date] | [Date] | [Provider / Expiry] | [Location] |
| ATS-01 | Auto Transfer Switch | [Make / Model] | [Serial No.] | [X A] | [Date] | [Date] | [Provider / Expiry] | [Location] |
| PDU-A01 | PDU | [Make / Model] | [Serial No.] | [X A] | [Date] | [Date] | [Provider / Expiry] | [Location] |

---

### Appendix G: Glossary of Terms

| Term | Definition |
|---|---|
| ATS | Automatic Transfer Switch — a device that automatically switches the power source from utility mains to backup generator upon loss of utility supply |
| BMS | Building Management System — an integrated control system for monitoring and managing building infrastructure including power and cooling |
| DCIM | Data Centre Infrastructure Management — software for monitoring, managing, and optimising data centre assets and resources |
| kVA | Kilovolt-Ampere — unit of apparent electrical power |
| kW | Kilowatt — unit of active (real) electrical power |
| N+1 | Redundancy configuration where one additional component is available above the minimum required (N) to sustain full operations |
| PDU | Power Distribution Unit — a device that distributes electrical power to servers and equipment within a data centre rack or row |
| RMiT | Risk Management in Technology — Bank Negara Malaysia's policy document governing technology risk management for licensed financial institutions |
| UPS | Uninterruptible Power Supply — a battery-backed power system that provides immediate backup power upon utility supply failure, bridging the gap until generator startup |
| 2N | Full redundant configuration where two complete independent systems each capable of supporting the full load are available |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential** and is intended solely for the use of [Organization Name] personnel and authorised third parties with a legitimate need to access this information. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. All printed copies of this document are uncontrolled. The current approved version is maintained in [Document Management System / SharePoint / relevant system].