# Fraud Detection Architecture

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Fraud Management |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document describes the architecture, configuration, and operational procedures of [Organization Name]'s real-time fraud detection systems. It serves as formal evidence of compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.7**, which mandates that financial institutions implement robust controls to detect and respond to fraudulent activity affecting technology-enabled financial services.

This document is applicable to all transaction channels, payment systems, and digital banking services operated by [Organization Name]. It is maintained by the Head of Fraud Management and subject to continuous monitoring with formal quarterly reviews.

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the fraud detection assessment, specifying which systems, channels, and transaction types are in scope, along with the criteria used to evaluate detection effectiveness.*

### 2.1 In-Scope Systems and Channels

| # | System / Channel | Description | Coverage |
|---|---|---|---|
| 1 | [e.g., Internet Banking] | [Brief description] | [e.g., Full] |
| 2 | [e.g., Mobile Banking Application] | [Brief description] | [e.g., Full] |
| 3 | [e.g., ATM Network] | [Brief description] | [e.g., Partial] |
| 4 | [e.g., Card Payment Network] | [Brief description] | [e.g., Full] |
| 5 | [e.g., Interbank Fund Transfer (IBG/RENTAS)] | [Brief description] | [e.g., Full] |

### 2.2 Out-of-Scope Items

*List any systems, channels, or transaction types explicitly excluded from the scope, with justification.*

- [Out-of-scope item 1] — Reason: [Justification]
- [Out-of-scope item 2] — Reason: [Justification]

### 2.3 Assessment Criteria

| Criterion | Threshold / Standard | Reference |
|---|---|---|
| Detection Rate | [e.g., ≥ 95% of confirmed fraud cases flagged] | RMiT 12.7 |
| False Positive Rate | [e.g., ≤ 5% of alerts] | Internal Policy |
| Alert Response Time (P1) | [e.g., ≤ 15 minutes] | [SLA Reference] |
| System Availability | [e.g., 99.9% uptime] | RMiT 10.x |
| Customer Notification SLA | [e.g., Within 24 hours of confirmed fraud] | [Regulatory Reference] |

---

## 3. Methodology

*Describe the technical and procedural approach used to design, implement, and validate the fraud detection architecture, including any standards, models, or frameworks applied.*

### 3.1 Detection Architecture Overview

*Provide a high-level description or diagram reference of the fraud detection system architecture, including data flows, integration points, and key components.*

- **Architecture Type:** [e.g., Real-time streaming with batch supplementation]
- **Core Engine:** [e.g., Vendor Name / In-house system name]
- **Deployment Model:** [e.g., On-premises / Cloud / Hybrid]
- **Architecture Diagram Reference:** [See Appendix A]

### 3.2 Detection Methodologies Employed

| Method | Description | Application |
|---|---|---|
| Rule-Based Detection | [Describe static rule engine usage] | [e.g., High-value transfers, velocity checks] |
| Machine Learning / AI Models | [Describe ML model usage, e.g., anomaly detection] | [e.g., Behavioural profiling] |
| Device Fingerprinting | [Describe device intelligence approach] | [e.g., New device logins] |
| Geolocation Analysis | [Describe geo-based detection] | [e.g., Impossible travel detection] |
| Network Analysis | [Describe graph/link analysis if applicable] | [e.g., Mule account detection] |
| Third-Party Threat Intelligence | [Describe external feeds used] | [e.g., Blacklisted IPs, compromised credentials] |

### 3.3 Data Sources and Integration

| Data Source | Type | Frequency | Integration Method |
|---|---|---|---|
| [Core Banking System] | Transaction data | Real-time | [e.g., API / Message queue] |
| [Customer Identity Store] | Customer profile | Near real-time | [e.g., DB replication] |
| [Device Management System] | Device attributes | Real-time | [e.g., SDK / API] |
| [External Threat Feed] | IOC / Blacklists | [e.g., Hourly] | [e.g., REST API] |

---

## 4. Findings and Ratings

*Summarise the outcomes of the most recent fraud detection effectiveness review, including identified gaps, risk ratings, and remediation status.*

### 4.1 Review Summary

| Review Period | Reviewer | Review Date | Overall Rating |
|---|---|---|---|
| [Q1 2026 / Jan–Mar 2026] | [Name / Team] | [Date] | [e.g., Satisfactory] |

### 4.2 Key Findings

| Finding ID | Description | Severity | Status | Remediation Owner | Target Date |
|---|---|---|---|---|---|
| FD-F-001 | [Description of finding] | [High / Medium / Low] | [Open / Closed / In Progress] | [Name / Team] | [Date] |
| FD-F-002 | [Description of finding] | [High / Medium / Low] | [Open / Closed / In Progress] | [Name / Team] | [Date] |
| FD-F-003 | [Description of finding] | [High / Medium / Low] | [Open / Closed / In Progress] | [Name / Team] | [Date] |

### 4.3 Performance Metrics (Latest Quarter)

| Metric | Target | Actual | Status |
|---|---|---|---|
| Total Alerts Generated | — | [Value] | — |
| Confirmed Fraud Cases | — | [Value] | — |
| Detection Rate | ≥ [Target]% | [Actual]% | [Met / Not Met] |
| False Positive Rate | ≤ [Target]% | [Actual]% | [Met / Not Met] |
| Mean Time to Detect (MTTD) | ≤ [Target] mins | [Actual] mins | [Met / Not Met] |
| Mean Time to Respond (MTTR) | ≤ [Target] mins | [Actual] mins | [Met / Not Met] |
| Financial Loss Prevented (Estimated) | — | [MYR Value] | — |

---

## 5. Transaction Monitoring Rules

*Document the active transaction monitoring rules deployed within the fraud detection engine, including rule logic, thresholds, and the risk scenarios each rule addresses.*

### 5.1 Rule Inventory

| Rule ID | Rule Name | Description | Trigger Condition | Risk Scenario | Severity | Status |
|---|---|---|---|---|---|---|
| TMR-001 | [e.g., High-Value Single Transfer] | [Brief description] | [e.g., Single transfer > MYR 50,000] | [e.g., Account takeover] | High | Active |
| TMR-002 | [e.g., Velocity Check — Outbound] | [Brief description] | [e.g., > 5 transfers within 1 hour] | [e.g., Mule account activity] | High | Active |
| TMR-003 | [e.g., New Beneficiary + High Value] | [Brief description] | [e.g., First transfer to new payee > MYR 10,000] | [e.g., Social engineering fraud] | Medium | Active |
| TMR-004 | [e.g., Off-Hours Transaction] | [Brief description] | [e.g., Transfer between 11 PM – 5 AM above threshold] | [e.g., Compromised credentials] | Medium | Active |
| TMR-005 | [e.g., Impossible Travel] | [Brief description] | [e.g., Login from geographically distant location within short interval] | [e.g., Account takeover] | High | Active |
| TMR-006 | [Add rule] | [Brief description] | [Trigger condition] | [Risk scenario] | [Severity] | [Status] |

### 5.2 Rule Governance

- **Rule Review Cycle:** [e.g., Monthly tuning review by Fraud Analytics team]
- **Rule Change Approval:** [e.g., Head of Fraud Management sign-off required]
- **Rule Change Log Location:** [Reference to change management system / document]
- **Tuning Methodology:** [e.g., Precision-recall optimisation, backtesting against historical fraud cases]

---

## 6. Alert Triage Procedures

*Describe the end-to-end process for receiving, prioritising, investigating, and resolving fraud alerts generated by the transaction monitoring system.*

### 6.1 Alert Lifecycle

*Reference the alert workflow diagram in Appendix B. The standard alert lifecycle is as follows:*

1. **Alert Generation** — Fraud engine raises an alert based on triggered rule or model score.
2. **Automated Pre-Screening** — System applies secondary filters and enrichment (e.g., customer risk score, prior fraud history).
3. **Queue Assignment** — Alert routed to appropriate analyst queue based on severity and channel.
4. **Analyst Investigation** — Fraud analyst reviews alert within defined SLA.
5. **Decision** — Alert classified as True Positive, False Positive, or Inconclusive.
6. **Action** — Appropriate action taken (see Section 6.3).
7. **Case Closure and Documentation** — Case logged and closed in case management system.

### 6.2 Alert Priority and SLA

| Priority | Criteria | Investigation SLA | Escalation SLA |
|---|---|---|---|
| P1 — Critical | [e.g., Active transaction in-flight; confirmed ATO] | 15 minutes | Immediate to [Role] |
| P2 — High | [e.g., High-value alert, pattern matches known fraud typology] | 1 hour | 2 hours to [Role] |
| P3 — Medium | [e.g., Moderate risk score, single rule trigger] | 4 hours | 8 hours to [Role] |
| P4 — Low | [e.g., Low-risk anomaly, informational only] | 24 hours | Next business day |

### 6.3 Triage Decision Matrix

| Decision | Criteria | Action Required |
|---|---|---|
| True Positive | Fraud confirmed | Block account / transaction; initiate customer notification; file SAR if applicable |
| False Positive | Legitimate activity confirmed | Close alert; log for rule tuning |
| Inconclusive | Insufficient evidence | Escalate to senior analyst / Fraud Investigations team |
| Pending Customer Verification | Requires customer confirmation | Trigger outbound customer contact; apply temporary hold if warranted |

### 6.4 Escalation Path

- **Level 1:** Fraud Monitoring Analyst
- **Level 2:** Senior Fraud Analyst / Team Lead
- **Level 3:** Head of Fraud Management
- **Level 4 (Critical Incidents):** [CISO / COO / Incident Response Team]

---

## 7. Customer Notification Process

*Define the procedures for notifying affected customers upon detection of suspected or confirmed fraudulent activity, including communication channels, timing, and content requirements.*

### 7.1 Notification Triggers

| Trigger Event | Notification Type | Channel | Timing |
|---|---|---|---|
| Suspicious transaction detected (unconfirmed) | Fraud alert / verification prompt | [e.g., SMS, In-app push] | Real-time |
| Transaction temporarily blocked pending review | Proactive advisory | [e.g., SMS, Email] | Within [X] minutes |
| Fraud confirmed — customer impacted | Formal notification | [e.g., Email, Phone call, Secure message] | Within [X] hours |
| Account suspended due to fraud risk | Suspension notice | [e.g., SMS, Email] | Immediate |
| Fraud case resolved | Case closure communication | [e.g., Email, Secure message] | Within [X] business days |

### 7.2 Notification Content Requirements

All customer notifications must include, where applicable:

- Clear identification of [Organization Name] as the sender
- Description of the suspicious activity or action taken
- Steps the customer should take (e.g., confirm, dispute, or contact the bank)
- Fraud hotline number: [Hotline Number]
- Assurance statement regarding account security
- Reference/case number for follow-up
- Compliance with BNM and PDPA requirements on data disclosure

### 7.3 Customer Communication Templates

*Refer to Appendix C for approved notification templates. All templates must be reviewed by Compliance and Legal prior to use.*

| Template ID | Use Case | Channel | Last Reviewed |
|---|---|---|---|
| NOTIF-001 | Suspicious activity alert — verification request | SMS | [Date] |
| NOTIF-002 | Transaction block notification | SMS + Email | [Date] |
| NOTIF-003 | Confirmed fraud — customer impact notification | Email + Phone | [Date] |
| NOTIF-004 | Account suspension notice | SMS + Email | [Date] |
| NOTIF-005 | Case closure and outcome summary | Secure message | [Date] |

### 7.4 Regulatory Reporting Obligations

| Obligation | Threshold / Trigger | Reporting Body | Deadline |
|---|---|---|---|
| Suspicious Activity Report (SAR) | [Per internal policy / AML thresholds] | [e.g., Financial Intelligence Unit (FIAU)] | [e.g., Within 3 business days of suspicion] |
| Technology Incident Report | [Per RMiT criteria — significant fraud event] | Bank Negara Malaysia | [Per RMiT timeline requirements] |
| PDPA Breach Notification | Personal data compromised | [PDPC / Affected individuals] | [As per PDPA requirements] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for key activities related to fraud detection architecture and operations.*

| Activity | Head of Fraud Mgmt | Fraud Monitoring Analyst | Fraud Analytics & Engineering | CISO / IT Security | Compliance | Internal Audit |
|---|---|---|---|---|---|---|
| Define fraud detection strategy | A | — | C | C | C | I |
| Design and maintain detection architecture | A | — | R | C | I | I |
| Develop and tune monitoring rules | A | C | R | C | I | I |
| Operate alert triage and investigation | A | R | C | I | I | I |
| Escalate critical fraud incidents | R | R | I | C | C | I |
| Customer fraud notification | A | R | I | I | C | I |
| Regulatory reporting (SAR, incident reports) | R | C | I | C | A | I |
| Quarterly fraud detection review | A | C | R | C | C | R |
| Document review and approval | A | — | C | C | C | I |
| Independent audit of fraud controls | I | I | I | I | I | R |

**Key:** R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Fraud Management | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Compliance Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |

---

## 10. References

| Reference | Description |
|---|---|
| BNM RMiT Policy Document (2020) — Clause 12.7 | Fraud risk controls and real-time fraud detection requirements |
| BNM RMiT Policy Document (2020) — Clause 10.x | Technology availability and resilience requirements applicable to fraud systems |
| Personal Data Protection Act 2010 (PDPA) | Obligations governing customer data used in fraud detection and notification |
| BNM Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA) | SAR filing obligations arising from fraud detection outcomes |
| [Organization Name] Fraud Risk Management Policy | Internal policy governing fraud risk appetite, controls, and escalation |
| [Organization Name] Incident Response Procedure | Procedures triggered when fraud events meet the definition of a technology incident |
| [Organization Name] Technology Change Management Policy | Governing rule and configuration changes to the fraud detection system |

---

## Appendices

### Appendix A — Fraud Detection System Architecture Diagram

*Insert or attach a current architecture diagram depicting the end-to-end fraud detection data flow, system components, integration points, and network topology. Diagram must reflect the production environment as of the Last Review Date stated on the cover page.*

[Attach: FD-Architecture-Diagram-v[X.X]-[Date].pdf]

---

### Appendix B — Alert Triage Workflow Diagram

*Insert or attach a process flowchart illustrating the alert lifecycle from generation through closure, including decision points, escalation paths, and responsible roles.*

[Attach: FD-Alert-Triage-Workflow-v[X.X]-[Date].pdf]

---

### Appendix C — Customer Notification Templates

*Attach the approved communication templates referenced in Section 7.3. Templates must have evidence of review by Compliance and Legal.*

[Attach: FD-Customer-Notification-Templates-v[X.X]-[Date].pdf]

---

### Appendix D — Fraud Detection Rule Change Log

*Attach or reference the change log for all monitoring rule additions, modifications, and retirements, including approval records.*

[Reference: [Change Management System] — Project/Change Reference [ID]]

---

*This document is classified as **Confidential**. Distribution is restricted to authorised personnel with a legitimate business need. Unauthorised disclosure is prohibited and may constitute a breach of [Organization Name]'s information security policies and applicable law.*