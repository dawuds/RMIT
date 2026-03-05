# KRI Dashboard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Board of Directors / Company Secretary |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## 1. Purpose and Scope

This document presents the Key Risk Indicator (KRI) Dashboard for [Organization Name], providing a consolidated view of technology risk indicators, trend analysis, and threshold breach status in accordance with **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 8.5**. The dashboard supports the Board of Directors and senior management in exercising ongoing oversight of technology risks, enabling timely escalation and informed decision-making. It covers all critical technology systems, processes, and third-party arrangements within [Organization Name]'s operational perimeter.

---

## 2. Assessment Scope and Criteria

*Define the boundaries of this KRI monitoring cycle, including the systems, domains, and risk categories in scope, and the criteria used to select and evaluate each indicator.*

**Reporting Period:** [Q1/Q2/Q3/Q4] [YYYY] | Continuous monitoring with quarterly consolidated review

**Domains in Scope:**

- [ ] Information Security
- [ ] IT Availability & Resilience
- [ ] Change Management
- [ ] Third-Party / Vendor Risk
- [ ] Data Management & Privacy
- [ ] Cyber Threat & Incident Management
- [ ] Business Continuity

**KRI Selection Criteria:**

| Criterion | Description |
|---|---|
| Materiality | Indicator reflects a risk with potential financial, operational, or reputational impact |
| Measurability | Quantifiable and consistently measurable over time |
| Timeliness | Data can be collected and reported within required reporting cycle |
| Regulatory Alignment | Linked to RMiT obligations or internal risk appetite statements |

**Exclusions:** [Describe any systems, processes, or risk categories explicitly excluded from this reporting cycle and the rationale.]

---

## 3. Methodology

*Describe the data collection approach, threshold-setting methodology, rating scale, and escalation logic applied to each KRI.*

### 3.1 Data Collection

| Source | Data Owner | Collection Frequency | Method |
|---|---|---|---|
| [SIEM / Log Management Platform] | [IT Security Team] | Continuous / Daily | Automated feed |
| [IT Service Management System] | [IT Operations] | Weekly | System export |
| [Vendor Performance Reports] | [Procurement / IT] | Monthly | Manual submission |
| [Business Continuity Records] | [BCM Team] | Quarterly | Document review |

### 3.2 Threshold Definition

Each KRI operates with three threshold levels:

| Level | Colour | Meaning |
|---|---|---|
| **Green** | 🟢 | Within appetite — no action required |
| **Amber** | 🟡 | Approaching threshold — management attention required |
| **Red** | 🔴 | Threshold breached — immediate escalation to Board/ERMC |

### 3.3 Trend Analysis Approach

*Trends are assessed over a rolling [3/6/12]-month window. Directional arrows (↑ ↓ →) indicate whether the metric is worsening, improving, or stable relative to the prior period.*

---

## 4. KRI Findings and Ratings

*Populate each row with current period values, status ratings, and directional trends. Add or remove rows to reflect the organization's approved KRI register.*

### 4.1 Dashboard Summary

**Reporting Period:** [Month/Quarter YYYY]
**Total KRIs Monitored:** [N] | 🟢 Green: [N] | 🟡 Amber: [N] | 🔴 Red: [N]

### 4.2 KRI Detail Table

| # | KRI Name | RMiT Clause | Target / Threshold | Current Value | Prior Period | Trend | Status | Owner |
|---|---|---|---|---|---|---|---|---|
| 1 | Unresolved Critical Vulnerabilities (>30 days) | 8.5 | ≤ 5 | [Value] | [Value] | [↑/↓/→] | [🟢/🟡/🔴] | [IT Security] |
| 2 | Mean Time to Detect (MTTD) — Security Incidents | 8.5 | ≤ [X] hours | [Value] | [Value] | [↑/↓/→] | [🟢/🟡/🔴] | [SOC Team] |
| 3 | Mean Time to Resolve (MTTR) — P1/P2 Incidents | 8.5 | ≤ [X] hours | [Value] | [Value] | [↑/↓/→] | [🟢/🟡/🔴] | [IT Operations] |
| 4 | System Availability — Core Banking Platform | 8.5 | ≥ 99.9% | [Value]% | [Value]% | [↑/↓/→] | [🟢/🟡/🔴] | [IT Operations] |
| 5 | Failed Change Implementations | 8.5 | ≤ [X]% | [Value]% | [Value]% | [↑/↓/→] | [🟢/🟡/🔴] | [Change Manager] |
| 6 | Third-Party SLA Breaches | 8.5 | 0 | [Value] | [Value] | [↑/↓/→] | [🟢/🟡/🔴] | [Vendor Manager] |
| 7 | Overdue IT Risk Treatment Actions | 8.5 | ≤ [X] | [Value] | [Value] | [↑/↓/→] | [🟢/🟡/🔴] | [CRO / IT Risk] |
| 8 | IT Staff Security Awareness Training Completion | 8.5 | ≥ 95% | [Value]% | [Value]% | [↑/↓/→] | [🟢/🟡/🔴] | [HR / IT Security] |
| 9 | Successful Phishing Simulation Click Rate | 8.5 | ≤ [X]% | [Value]% | [Value]% | [↑/↓/→] | [🟢/🟡/🔴] | [IT Security] |
| 10 | BCP / DR Test Success Rate | 8.5 | 100% | [Value]% | [Value]% | [↑/↓/→] | [🟢/🟡/🔴] | [BCM Team] |

### 4.3 Threshold Breach Summary

*List all KRIs currently rated Amber or Red, with a brief explanatory note.*

| KRI Name | Status | Breach Description | Date Breached | Escalated To | Escalation Date |
|---|---|---|---|---|---|
| [KRI Name] | 🔴 Red | [Brief description of why threshold was breached] | [DD/MM/YYYY] | [Board / ERMC / CRO] | [DD/MM/YYYY] |
| [KRI Name] | 🟡 Amber | [Brief description] | [DD/MM/YYYY] | [Management Committee] | [DD/MM/YYYY] |

---

## 5. Evidence Reviewed

*List the supporting evidence, data sources, and artefacts reviewed in compiling this dashboard. This section supports audit traceability.*

| # | Evidence / Artefact | Source System / Owner | Reference / Location | Period Covered |
|---|---|---|---|---|
| 1 | Vulnerability scan report | [Tenable / Qualys / other] | [Repository path / link] | [MM/YYYY] |
| 2 | Incident register extract | [ITSM Platform] | [Repository path / link] | [Quarter YYYY] |
| 3 | Change advisory board (CAB) minutes | [Change Manager] | [Repository path / link] | [Quarter YYYY] |
| 4 | Vendor performance scorecards | [Procurement] | [Repository path / link] | [Quarter YYYY] |
| 5 | BCP/DR test completion report | [BCM Team] | [Repository path / link] | [Date of last test] |
| 6 | IT risk register | [IT Risk / CRO office] | [Repository path / link] | [Current] |
| 7 | Training completion report | [HR / LMS Platform] | [Repository path / link] | [Quarter YYYY] |

---

## 6. Recommendations

*For each Amber or Red KRI, provide a structured remediation or management action. Green KRIs with worsening trends should also be assessed for pre-emptive action.*

### 6.1 Priority Actions

| Priority | KRI | Recommended Action | Responsible Owner | Target Completion | Status |
|---|---|---|---|---|---|
| High | [KRI Name — Red] | [Specific remediation action] | [Named owner / role] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| Medium | [KRI Name — Amber] | [Specific action] | [Named owner / role] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| Low | [KRI Name — Green, worsening trend] | [Monitoring / preventive action] | [Named owner / role] | [DD/MM/YYYY] | [Open / In Progress / Closed] |

### 6.2 Management Commentary

*Provide a concise narrative summary (3–5 sentences) of the overall technology risk posture this period, key concerns, and positive developments.*

> [Insert management commentary here. Include context for any material changes from the prior period, emerging threats or operational pressures, and the overall direction of travel for the technology risk profile.]

---

## 7. Roles and Responsibilities

*The following RACI table defines accountability for the production, review, and governance of the KRI Dashboard.*

| Activity | Board of Directors | CRO / IT Risk | CISO / IT Security | IT Operations | Business Units | Company Secretary |
|---|---|---|---|---|---|---|
| Approve KRI definitions and thresholds | A | R | C | C | I | I |
| Collect and validate KRI data | I | C | R | R | R | I |
| Prepare KRI Dashboard report | I | A | R | C | I | I |
| Review dashboard and escalations | A | R | C | I | I | C |
| Present to Board / ERMC | I | R | C | I | I | A |
| Archive and maintain records | I | I | I | I | I | R |
| Implement remediation actions | I | A | R | R | R | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial release |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of change] |

### 8.2 Approval Sign-Off

*This dashboard requires review and endorsement at the management level and ratification at the Board level on a quarterly basis.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Risk Officer | [Name] | ________________ | [DD/MM/YYYY] |
| Chief Information Security Officer | [Name] | ________________ | [DD/MM/YYYY] |
| Chief Information Officer | [Name] | ________________ | [DD/MM/YYYY] |
| Board Risk Committee Chairperson | [Name] | ________________ | [DD/MM/YYYY] |
| Company Secretary (for records) | [Name] | ________________ | [DD/MM/YYYY] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 8.5 | Key Risk Indicators — ongoing monitoring and board reporting of technology risks |
| BNM RMiT | Clause 8.1–8.4 | Technology risk governance, appetite, and management framework |
| BNM RMiT | Clause 11 | Technology service provider risk management |
| BNM RMiT | Clause 14 | Cyber resilience requirements |
| Internal Policy | [IT Risk Management Policy v[X.X]] | Organization's internal risk appetite and KRI framework |
| Internal Policy | [Information Security Policy v[X.X]] | Baseline security controls and monitoring requirements |
| PDPA 2010 | Section 9–10 | Data security obligations relevant to data-related KRIs |

---

## Appendices

### Appendix A — KRI Register and Threshold Justification

*Full KRI register including the rationale for each indicator's inclusion, threshold values, and alignment to risk appetite statements. Maintained by the CRO / IT Risk function.*

[Attach or reference: KRI Register — [Organization Name] — v[X.X] — [Date]]

### Appendix B — Trend Charts and Visualizations

*Graphical trend charts for each KRI over the trailing [12]-month period. Generated from [BI Tool / Dashboard Platform] and attached as supporting exhibits.*

[Attach: KRI Trend Charts — [Quarter YYYY]]

### Appendix C — Prior Period Comparison

*Side-by-side comparison of current and prior quarter KRI values and status ratings to support trend narrative.*

[Attach or insert table as required]

### Appendix D — Escalation and Incident Log

*Log of all threshold breaches, escalation notifications, and management responses during the reporting period.*

[Attach: Escalation Log — [Quarter YYYY]]

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure is prohibited. Maintain in accordance with the organization's records retention policy.*