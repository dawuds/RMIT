# Risk Monitoring Procedures

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of Technology Risk |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. This document must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Information Security Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Risk Monitoring Process Flow](#4-risk-monitoring-process-flow)
5. [Risk Monitoring Activities](#5-risk-monitoring-activities)
6. [Key Risk Indicators (KRIs) and Thresholds](#6-key-risk-indicators-kris-and-thresholds)
7. [Tools and Systems Used](#7-tools-and-systems-used)
8. [Reporting Requirements and Cadence](#8-reporting-requirements-and-cadence)
9. [Escalation Procedures](#9-escalation-procedures)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Update History](#11-review-and-update-history)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overarching purpose of this document, including what risk monitoring seeks to achieve and how it supports the organisation's technology risk management objectives.*

This document establishes the formal procedures for the continuous monitoring and reporting of technology risks at [Organization Name]. It provides a structured framework to ensure that technology risks are identified, measured, tracked, and reported in a timely and consistent manner, enabling informed risk-based decision making at all levels of the organisation.

These procedures support [Organization Name]'s compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Paragraph 9.4**, which mandates that financial institutions implement effective risk monitoring mechanisms commensurate with the nature, scale, and complexity of their technology operations.

The objectives of these procedures are to:

- Establish a continuous, systematic approach to monitoring technology risks across all in-scope systems, processes, and services.
- Define clear thresholds, triggers, and escalation pathways for technology risk events.
- Ensure timely and accurate reporting of technology risk information to the appropriate governance bodies.
- Support proactive risk treatment by identifying adverse trends before they materialise into significant incidents.
- Demonstrate accountability and auditability of the technology risk monitoring function to regulators, internal audit, and the Board.

### 1.2 Scope

*Specify the boundaries of these procedures — what is covered, what is explicitly excluded, and any conditions under which the scope may be extended.*

These procedures apply to:

- All technology assets, systems, and infrastructure owned, operated, or managed by [Organization Name], including but not limited to core banking systems, payment platforms, digital channels, data centres, and cloud environments.
- All third-party and outsourced technology services that support critical or important business functions.
- All employees, contractors, vendors, and third parties with responsibilities for technology risk management or operations at [Organization Name].
- All technology risk categories as defined in [Organization Name]'s Technology Risk Management Framework, including cybersecurity risk, operational technology risk, IT availability risk, change management risk, and third-party technology risk.

**Out of Scope:**

- Non-technology operational risks unless they directly arise from a technology failure or vulnerability.
- Physical security risks (covered separately under [Physical Security Policy Reference]).
- [Any other explicitly excluded domains — e.g., overseas subsidiaries governed by separate frameworks]

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Framework

*Reference all applicable regulatory instruments, BNM policy documents, and internal policies that govern these procedures. This section demonstrates regulatory alignment during examinations.*

These procedures are established in accordance with, and shall be read in conjunction with, the following regulatory and internal policy instruments:

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| BNM | Risk Management in Technology (RMiT) | Paragraph 9.4 | Technology risk monitoring requirements |
| BNM | Risk Management in Technology (RMiT) | Paragraph 9.1 – 9.3 | Technology risk identification and assessment |
| BNM | Risk Management in Technology (RMiT) | Paragraph 10 | Technology risk reporting to Board and Senior Management |
| BNM | Risk Management in Technology (RMiT) | Paragraph 11 | Outsourcing and third-party risk monitoring |
| BNM | Risk Management in Technology (RMiT) | Paragraph 13 | Cyber risk management |
| [Internal Policy] | [Organization Name] Technology Risk Management Framework | All | Parent framework governing these procedures |
| [Internal Policy] | [Organization Name] Information Security Policy | All | Information security monitoring requirements |
| [Internal Policy] | [Organization Name] Incident Management Policy | All | Escalation and incident response linkages |
| [Internal Policy] | [Organization Name] Business Continuity Management Policy | All | BCP/DR linkages to availability risk monitoring |

### 2.2 Key Regulatory Requirements (RMiT Paragraph 9.4)

*Summarise the specific obligations under RMiT Paragraph 9.4 to make these procedures directly traceable to the regulatory text.*

BNM RMiT Paragraph 9.4 requires that [Organization Name]:

- **9.4(a):** Implement a risk monitoring process that tracks changes in the organisation's technology risk profile on a continuous basis.
- **9.4(b):** Define and use Key Risk Indicators (KRIs) to provide early warning signals of increasing risk exposure.
- **9.4(c):** Establish clear escalation procedures when KRI thresholds are breached or when material technology risk events are identified.
- **9.4(d):** Ensure that risk monitoring outputs are reported to relevant governance bodies at appropriate frequencies.
- **9.4(e):** Maintain records of monitoring activities, findings, and actions taken to demonstrate accountability.

> **Note to Author:** *Review the current published RMiT policy document from BNM to verify clause numbering and reproduce the exact regulatory language where required for audit purposes. The sub-clauses above are indicative placeholders.*

---

## 3. Scope and Applicability

### 3.1 In-Scope Technology Domains

*List all technology domains, systems, and services subject to these monitoring procedures. Use the organisation's official asset register as the authoritative source.*

| Technology Domain | Description | Risk Category | Criticality |
|---|---|---|---|
| Core Banking System | [System Name / Vendor] — primary processing engine for deposits, loans, and payments | IT Availability, Change Risk | Critical |
| Internet Banking Platform | Customer-facing online banking portal and mobile application | Cybersecurity, Availability | Critical |
| Payment Gateway | Real-time payment processing infrastructure (IBG, FPX, DuitNow) | Availability, Operational | Critical |
| Data Centre Infrastructure | Primary and secondary data centres hosting all production workloads | Availability, Environmental | Critical |
| Cloud Services | [List cloud providers — e.g., AWS, Azure, GCP] hosting [specify workloads] | Third-Party, Cybersecurity | High |
| Network Infrastructure | WAN, LAN, firewall, and perimeter security infrastructure | Cybersecurity, Availability | Critical |
| End-User Computing | Workstations, laptops, mobile devices, and collaboration tools | Cybersecurity, Data Risk | Medium |
| Third-Party / Outsourced Services | [List critical outsourced services] | Third-Party Risk | High |
| [Additional Domain] | [Description] | [Category] | [Criticality] |

### 3.2 Risk Categories Monitored

*Define the technology risk categories that are within scope of monitoring under these procedures, aligned to the organisation's risk taxonomy.*

These procedures address the following technology risk categories:

- **Cybersecurity Risk:** Threats from malicious actors, including unauthorised access, malware, data breaches, denial-of-service attacks, and advanced persistent threats (APTs).
- **IT Availability Risk:** Risks to the continuous availability of critical technology systems, including hardware failures, software defects, capacity constraints, and power or network outages.
- **Change Management Risk:** Risks arising from poorly controlled or inadequately tested changes to technology systems, configurations, and infrastructure.
- **Third-Party and Outsourcing Risk:** Technology risks introduced by external service providers, vendors, and outsourcing arrangements.
- **Data Integrity Risk:** Risks to the accuracy, completeness, and consistency of data processed and stored within technology systems.
- **Emerging Technology Risk:** Risks associated with the adoption of new or evolving technologies, including artificial intelligence, cloud computing, and open-source software.
- **[Other Risk Category]:** [Description]

### 3.3 Applicability

*Identify the organisational units, roles, and personnel to whom these procedures apply.*

These procedures apply to:

| Stakeholder Group | Applicability |
|---|---|
| Technology Risk Management team | Primary owners and executors of these procedures |
| IT Operations and Infrastructure | Responsible for operational monitoring inputs |
| Information Security / Cybersecurity | Responsible for security monitoring inputs |
| Application Development and Change Management | Responsible for change risk monitoring inputs |
| Third-Party Risk / Vendor Management | Responsible for outsourcing risk monitoring inputs |
| Business Line Risk Officers | Consumers of technology risk monitoring outputs relevant to their business units |
| Internal Audit | Independent oversight of compliance with these procedures |
| Board Risk Committee / Technology Committee | Recipients of escalated risk monitoring reports |

---

## 4. Risk Monitoring Process Flow

### 4.1 Overview

*Provide a high-level description of the end-to-end technology risk monitoring process. A process flow diagram should be attached as Appendix A.*

The technology risk monitoring process at [Organization Name] follows a structured, continuous cycle comprising five stages:

1. **Risk Identification and Input Collection** — Gathering risk data from monitoring tools, system logs, incident reports, vendor communications, and business units.
2. **Risk Measurement and Analysis** — Assessing collected data against established KRI thresholds, risk appetite statements, and control effectiveness criteria.
3. **Risk Reporting** — Consolidating analysis outputs into standardised risk reports for distribution to relevant stakeholders at defined frequencies.
4. **Escalation and Response** — Triggering escalation actions when thresholds are breached or emerging risks are identified, and tracking remediation.
5. **Review and Feedback** — Evaluating the effectiveness of monitoring activities and updating procedures, KRIs, and thresholds based on lessons learned and changes in the risk environment.

> *A visual process flow diagram illustrating these five stages and their key inputs, outputs, and responsible parties is provided in **Appendix A: Risk Monitoring Process Flow Diagram**.*

### 4.2 Step-by-Step Process

*Detail each step in the monitoring process with sufficient granularity to enable consistent execution by any authorised staff member.*

#### Step 1: Risk Data Collection

| Step | Activity | Responsible | Frequency | Input | Output |
|---|---|---|---|---|---|
| 1.1 | Retrieve automated monitoring alerts from SIEM, ITSM, and network monitoring tools | Technology Risk Analyst | Continuous / Daily | System-generated alerts and logs | Consolidated alert log |
| 1.2 | Collect incident and problem management data from the IT service desk | Technology Risk Analyst | Daily | Incident tickets (P1–P4) | Incident risk data extract |
| 1.3 | Receive third-party risk inputs from vendor management team | Third-Party Risk Officer | Monthly | Vendor SLA reports, audit findings | Third-party risk dashboard update |
| 1.4 | Collect change management risk data from Change Advisory Board (CAB) | Change Manager | Weekly | CAB minutes, change success/failure rates | Change risk metrics |
| 1.5 | Gather cyber threat intelligence feeds | Information Security Analyst | Continuous / Daily | Threat intelligence platforms, NACSA advisories | Threat intelligence briefing |
| 1.6 | Compile business-unit reported technology risk events | Business Risk Officers | Monthly | BU risk registers, self-assessments | Business unit risk inputs |

#### Step 2: Risk Measurement and KRI Assessment

| Step | Activity | Responsible | Frequency | Input | Output |
|---|---|---|---|---|---|
| 2.1 | Map collected data to defined KRIs | Technology Risk Analyst | Daily / Weekly | Consolidated data inputs | KRI scores |
| 2.2 | Assess KRI scores against defined thresholds (Green / Amber / Red) | Senior Technology Risk Officer | Daily / Weekly | KRI scores | KRI threshold breach flags |
| 2.3 | Assess overall technology risk profile against risk appetite | Head of Technology Risk | Weekly / Monthly | KRI dashboard, incident trends | Risk profile assessment |
| 2.4 | Identify emerging risks not captured by existing KRIs | Head of Technology Risk | Monthly | Threat intelligence, regulatory updates | Emerging risk register entries |
| 2.5 | Evaluate control effectiveness for key technology controls | Technology Risk Analyst | Quarterly | Control testing results, audit findings | Control effectiveness ratings |

#### Step 3: Risk Reporting Preparation

| Step | Activity | Responsible | Frequency | Input | Output |
|---|---|---|---|---|---|
| 3.1 | Prepare daily technology risk dashboard | Technology Risk Analyst | Daily | KRI scores, incident data | Daily risk dashboard |
| 3.2 | Prepare monthly technology risk report | Senior Technology Risk Officer | Monthly | KRI trends, incidents, third-party risk | Monthly risk report |
| 3.3 | Prepare quarterly Board/Committee risk report | Head of Technology Risk | Quarterly | Monthly reports, risk appetite assessment | Board risk report |
| 3.4 | Prepare ad-hoc escalation reports for material risk events | Head of Technology Risk | As required | Escalation triggers | Escalation report |

#### Step 4: Distribution and Escalation

| Step | Activity | Responsible | Frequency | Input | Output |
|---|---|---|---|---|---|
| 4.1 | Distribute daily risk dashboard to IT Operations and Information Security leads | Technology Risk Analyst | Daily | Daily risk dashboard | Distributed dashboard |
| 4.2 | Present monthly risk report to Technology Risk Committee | Head of Technology Risk | Monthly | Monthly risk report | Committee minutes with actions |
| 4.3 | Present quarterly risk report to Board Risk Committee | Chief Risk Officer / Head of Technology Risk | Quarterly | Quarterly risk report | Board minutes with decisions |
| 4.4 | Escalate material risk events per escalation matrix (Section 9) | Technology Risk Analyst / Senior Officer | As required | Escalation trigger events | Escalation notification and action log |

#### Step 5: Review and Feedback Loop

| Step | Activity | Responsible | Frequency | Input | Output |
|---|---|---|---|---|---|
| 5.1 | Review KRI relevance and thresholds | Head of Technology Risk | Quarterly | KRI performance data, risk events | Updated KRI register |
| 5.2 | Review and update these procedures | Head of Technology Risk | Quarterly | Regulatory changes, audit findings, lessons learned | Updated procedures document |
| 5.3 | Conduct annual comprehensive review of the monitoring framework | Chief Risk Officer | Annually | Regulatory changes, industry benchmarks | Framework review report |

---

## 5. Risk Monitoring Activities

### 5.1 Continuous Monitoring Activities

*Describe the automated and manual monitoring activities conducted on a continuous or daily basis.*

The following monitoring activities are conducted continuously or on a daily basis to provide real-time or near-real-time visibility of the technology risk environment:

**Cybersecurity Monitoring:**

- Real-time SIEM alert monitoring and triage for security events including unauthorised access attempts, malware detections, data exfiltration indicators, and policy violations.
- Continuous network traffic analysis and anomaly detection using [Network Monitoring Tool].
- Daily review of privileged access activity logs for critical systems.
- Continuous monitoring of vulnerability management feeds and threat intelligence platforms.
- Daily review of web application firewall (WAF) and DDoS protection alerts.

**IT Availability and Performance Monitoring:**

- Continuous system availability monitoring for all Tier 1 and Tier 2 applications using [Availability Monitoring Tool].
- Real-time alerting for system outages, performance degradation, and SLA threshold breaches.
- Daily review of capacity utilisation metrics for compute, storage, and network resources.
- Continuous monitoring of backup job completion and data protection status.

**Change and Configuration Monitoring:**

- Daily review of change management records for emergency and unplanned changes.
- Continuous configuration drift detection for critical system components using [Configuration Management Tool].
- Monitoring of change-related incidents within 72 hours of significant change deployments.

**Third-Party and Outsourcing Monitoring:**

- Continuous monitoring of outsourced service provider availability dashboards where API or portal access is available.
- Daily review of critical vendor incident and outage notifications.

### 5.2 Weekly Monitoring Activities

*Describe monitoring activities conducted on a weekly basis.*

- Review of all open Amber and Red KRI items and status of associated remediation actions.
- Weekly IT Operations risk meeting to review open incidents, changes, and capacity concerns.
- Review of Change Advisory Board outputs and assessment of change-related risk for the upcoming week.
- Weekly aggregation of security monitoring metrics for trend analysis.
- Review of third-party SLA performance where weekly data is available.

### 5.3 Monthly Monitoring Activities

*Describe monitoring activities conducted on a monthly basis.*

- Preparation and distribution of the Monthly Technology Risk Report (see Section 8).
- Monthly review of all technology risk register entries — updating likelihood, impact, and control ratings.
- Formal review of KRI performance against thresholds for the preceding month.
- Assessment of third-party risk using vendor SLA reports, audit reports, and self-assessment questionnaires.
- Review of patch and vulnerability management status — tracking overdue patches against defined SLAs.
- Review of access rights management metrics including orphaned accounts, privileged access reviews, and access recertification status.
- Monthly review of business continuity and disaster recovery readiness indicators.

### 5.4 Quarterly Monitoring Activities

*Describe monitoring activities conducted on a quarterly basis.*

- Comprehensive review and update of these monitoring procedures.
- Formal KRI threshold review and recalibration as required.
- Technology risk appetite review and assessment of risk profile against appetite.
- Preparation of the Quarterly Technology Risk Report for the Board Risk Committee / Technology Committee.
- Quarterly control effectiveness assessment for key technology controls.
- Review of regulatory developments (BNM circulars, RMiT updates) for impact on monitoring scope or requirements.
- Quarterly third-party on-site or remote risk assessment for critical service providers (as applicable).

### 5.5 Annual Monitoring Activities

*Describe monitoring activities conducted on an annual basis.*

- Annual comprehensive review of the Technology Risk Management Framework and all associated procedures.
- Annual technology risk assessment covering all in-scope domains.
- Annual penetration testing and vulnerability assessment of critical systems.
- Annual business continuity management exercise incorporating technology recovery scenarios.
- Annual review and update of KRI library against industry benchmarks and regulatory guidance.

---

## 6. Key Risk Indicators (KRIs) and Thresholds

### 6.1 KRI Framework Overview

*Explain the KRI framework, how KRIs are selected, how thresholds are set, and how they are reviewed.*

Key Risk Indicators (KRIs) are quantitative or qualitative metrics used to provide early warning signals of changes in [Organization Name]'s technology risk exposure. KRIs are designed to be:

- **Predictive:** Indicating a potential increase in risk before a loss event occurs.
- **Measurable:** Capable of being objectively measured at the defined monitoring frequency.
- **Actionable:** Triggering a defined response when thresholds are breached.
- **Aligned:** Linked to [Organization Name]'s risk appetite and strategic objectives.

KRI thresholds are defined at three levels:

| Level | Colour | Meaning | Required Action |
|---|---|---|---|
| Within Appetite | **Green** | Risk is within acceptable levels; no immediate action required | Continue routine monitoring |
| Approaching Limit | **Amber** | Risk is approaching appetite limit; heightened monitoring and pre-emptive action required | Enhanced monitoring; notify Head of Technology Risk; prepare action plan |
| Breach | **Red** | Risk appetite is breached; immediate action and escalation required | Immediate escalation per Section 9; mandatory action plan; senior management notification |

### 6.2 Cybersecurity KRIs

*Define the specific KRIs, measurement methods, and thresholds applicable to cybersecurity risk.*

| KRI ID | KRI Name | Metric Definition | Measurement Frequency | Green | Amber | Red | Data Source |
|---|---|---|---|---|---|---|---|
| KRI-CYB-01 | Critical Vulnerability Age | Number of days critical (CVSS ≥9.0) vulnerabilities remain unpatched | Weekly | ≤7 days | 8–14 days | >14 days | Vulnerability Management System |
| KRI-CYB-02 | High Vulnerability Age | Number of days high (CVSS 7.0–8.9) vulnerabilities remain unpatched | Monthly | ≤30 days | 31–60 days | >60 days | Vulnerability Management System |
| KRI-CYB-03 | Security Incidents (Confirmed) | Number of confirmed security incidents per month | Monthly | [Green Threshold] | [Amber Threshold] | [Red Threshold] | SIEM / Incident Management System |
| KRI-CYB-04 | Privileged Access Violations | Number of unauthorised privileged access attempts detected | Weekly | 0 | 1–3 | >3 | PAM / SIEM |
| KRI-CYB-05 | Phishing Success Rate | Percentage of users who clicked simulated phishing emails | Monthly | <5% | 5–10% | >10% | Phishing Simulation Platform |
| KRI-CYB-06 | Mean Time to Detect (MTTD) | Average time from security event occurrence to detection | Monthly | [Green Threshold] | [Amber Threshold] | [Red Threshold] | SIEM |
| KRI-CYB-07 | Mean Time to Respond (MTTR) | Average time from detection to containment/resolution | Monthly | [Green Threshold] | [Amber Threshold] | [Red Threshold] | Incident Management System |
| [KRI-CYB-XX] | [KRI Name] | [Definition] | [Frequency] | [Green] | [Amber] | [Red] | [Source] |

### 6.3 IT Availability KRIs

*Define KRIs applicable to system availability and operational continuity.*

| KRI ID | KRI Name | Metric Definition | Measurement Frequency | Green | Amber | Red | Data Source |
|---|---|---|---|---|---|---|---|
| KRI-AVL-01 | Core System Availability | Monthly uptime percentage of Tier 1 critical systems | Monthly | ≥99.9% | 99.0–99.89% | <99.0% | Availability Monitoring Tool |
| KRI-AVL-02 | P1 Incident Frequency | Number of Priority 1 (service-affecting) incidents per month | Monthly | [Green Threshold] | [Amber Threshold] | [Red Threshold] | ITSM |
| KRI-AVL-03 | Mean Time to Restore (MTTR) — P1 | Average time to restore service for Priority 1 incidents | Monthly | [Green Threshold] | [Amber Threshold] | [Red Threshold] | ITSM |
| KRI-AVL-04 | Backup Success Rate | Percentage of scheduled backup jobs completing successfully | Weekly | ≥99% | 95–98.9% | <95% | Backup Management System |
| KRI-AVL-05 | DR Test Success Rate | Percentage of DR test objectives met in most recent DR exercise | Quarterly | 100% | 80–99% | <80% | DR Test Reports |
| KRI-AVL-06 | Capacity Utilisation | Peak utilisation of critical infrastructure components (CPU, storage, memory) | Weekly | <70% | 70–85% | >85% | Infrastructure Monitoring |
| [KRI-AVL-XX] | [KRI Name] | [Definition] | [Frequency] | [Green] | [Amber] | [Red] | [Source] |

### 6.4 Change Management KRIs

| KRI ID | KRI Name | Metric Definition | Measurement Frequency | Green | Amber | Red | Data Source |
|---|---|---|---|---|---|---|---|
| KRI-CHG-01 | Change-Related Incident Rate | Percentage of changes that result in an unplanned incident or rollback | Monthly | <5% | 5–10% | >10% | ITSM / CAB Records |
| KRI-CHG-02 | Emergency Change Rate | Percentage of changes classified as emergency | Monthly | <10% | 10–20% | >20% | ITSM / CAB Records |
| KRI-CHG-03 | Change Backlog | Number of overdue approved changes not yet implemented | Weekly | [Green] | [Amber] | [Red] | ITSM |
| [KRI-CHG-XX] | [KRI Name] | [Definition] | [Frequency] | [Green] | [Amber] | [Red] | [Source] |

### 6.5 Third-Party Risk KRIs

| KRI ID | KRI Name | Metric Definition | Measurement Frequency | Green | Amber | Red | Data Source |
|---|---|---|---|---|---|---|---|
| KRI-TPR-01 | Critical Vendor SLA Breaches | Number of SLA breaches by critical/important service providers | Monthly | 0 | 1–2 | >2 | Vendor SLA Reports |
| KRI-TPR-02 | Overdue Vendor Risk Assessments | Number of critical vendors with overdue periodic risk assessments | Quarterly | 0 | 1–2 | >2 | Vendor Risk Register |
| KRI-TPR-03 | Vendor Security Incidents | Number of security incidents reported by or attributed to key vendors | Monthly | 0 | 1 | >1 | Vendor Reports / SIEM |
| [KRI-TPR-XX] | [KRI Name] | [Definition] | [Frequency] | [Green] | [Amber] | [Red] | [Source] |

### 6.6 KRI Review and Maintenance

*Define how KRIs are maintained, updated, and retired over time.*

- KRI thresholds shall be reviewed **at minimum quarterly** by the Head of Technology Risk.
- Threshold adjustments shall be documented in the KRI Register and approved by the [Technology Risk Committee / Chief Risk Officer].
- New KRIs may be proposed by any team member and shall be reviewed and approved by the Head of Technology Risk prior to inclusion.
- KRIs that are no longer relevant or measurable shall be retired, with a record maintained in the KRI Register.

---

## 7. Tools and Systems Used

### 7.1 Monitoring Tool Inventory

*List all tools and systems used to support technology risk monitoring activities, including purpose, owner, and data feeds provided.*

| Tool / System | Category | Purpose | Owner | Data Output / Integration | Review Frequency |
|---|---|---|---|---|---|
| [SIEM Platform — e.g., Splunk / IBM QRadar / Microsoft Sentinel] | Security Monitoring | Centralised log collection, correlation, and alerting for security events | Information Security | Security event alerts, compliance reports | Continuous |
| [Vulnerability Management — e.g., Tenable Nessus / Qualys] | Vulnerability Management | Automated scanning and tracking of IT vulnerabilities | Information Security | Vulnerability reports, KRI-CYB-01/02 data | Weekly |
| [ITSM Platform — e.g., ServiceNow / Jira Service Management] | Incident & Change Management | Tracking and management of incidents, problems, and changes | IT Operations | Incident data, change records, KRI-AVL-02/03, KRI-CHG-01/02/03 | Daily |
| [Availability Monitoring — e.g., Dynatrace / Nagios / PRTG] | Infrastructure Monitoring | Real-time availability and performance monitoring of systems | IT Operations | Uptime metrics, performance alerts, KRI-AVL-01/06 | Continuous |
| [PAM Solution — e.g., CyberArk / BeyondTrust] | Privileged Access Management | Monitoring and control of privileged user access | Information Security | Access logs, KRI-CYB-04 data | Daily |
| [Backup Management — e.g., Veeam / Commvault] | Data Protection | Monitoring backup job completion and data integrity | IT Operations | Backup success/failure reports, KRI-AVL-04 data | Daily |
| [Threat Intelligence Platform — e.g., MISP / Recorded Future] | Threat Intelligence | Aggregation and analysis of cyber threat intelligence | Information Security | Threat feeds, indicators of compromise, emerging risk inputs | Continuous |
| [GRC Platform — e.g., ServiceNow GRC / Archer] | Risk Management | Technology risk register, KRI dashboard, and reporting | Technology Risk | Risk register, KRI dashboard, risk reports | Weekly |
| [Configuration Management — e.g., Puppet / Ansible / ServiceNow CMDB] | Configuration Management | Configuration baseline enforcement and drift detection | IT Operations | Configuration drift alerts, CMDB data | Continuous |
| [Cloud Security Posture Management — e.g., Prisma Cloud / AWS Security Hub] | Cloud Security | Monitoring of cloud environment security posture and compliance | Information Security / Cloud Operations | Cloud security findings, compliance posture | Continuous |
| [Phishing Simulation — e.g., KnowBe4 / Proofpoint Security Awareness] | Security Awareness | Simulated phishing campaigns and awareness tracking | Information Security | Phishing click rates, KRI-CYB-05 data | Monthly |
| [Additional Tool] | [Category] | [Purpose] | [Owner] | [Data Output] | [Frequency] |

### 7.2 Technology Risk Dashboard

*Describe the risk dashboard used to provide a consolidated, real-time view of the technology risk posture.*

[Organization Name] maintains a Technology Risk Dashboard hosted on [GRC Platform / SharePoint / Internal Portal], accessible to the Technology Risk Management team, Information Security, IT Operations leadership, and senior risk management stakeholders.

The dashboard provides:

- **Real-time KRI status** for all defined KRIs, displayed in Green / Amber / Red format.
- **Trend indicators** showing the direction of change for each KRI over the past 30 days.
- **Open action items** arising from Amber and Red KRI breaches, with owner and due date.
- **Incident summary** showing open P1 and P2 incidents and their current status.
- **Upcoming risk events** including scheduled changes, DR tests, and vendor reviews.

Dashboard access and maintenance responsibilities:

| Role | Access Level | Responsibility |
|---|---|---|
| Technology Risk Analyst | Read/Write | Maintain dashboard data daily |
| Head of Technology Risk | Read/Write | Approve threshold changes; review dashboard weekly |
| IT Operations Lead | Read | Review availability and change KRIs daily |
| Information Security Lead | Read | Review security KRIs daily |
| Chief Risk Officer | Read | Review aggregate risk posture weekly |
| Board Risk Committee | Read (via report extract) | Receive quarterly dashboard extract in Board report |

---

## 8. Reporting Requirements and Cadence

### 8.1 Reporting Framework Overview

*Describe the overall reporting structure — who reports what to whom, at what frequency, and through which channel.*

Technology risk monitoring outputs are reported through a structured governance hierarchy to ensure appropriate visibility and oversight at each level of the organisation.

| Report Name | Audience | Frequency | Preparation Owner | Distribution Method | Retention |
|---|---|---|---|---|---|
| Daily Technology Risk Dashboard | IT Operations Lead, Information Security Lead, Head of Technology Risk | Daily (Business Days) | Technology Risk Analyst | [Dashboard Portal / Email] | 12 months |
| Weekly KRI Summary | Head of Technology Risk, Senior Technology Risk Officers | Weekly | Senior Technology Risk Officer | Email / Dashboard | 12 months |
| Monthly Technology Risk Report | Technology Risk Committee, CRO, CIO | Monthly | Head of Technology Risk | Email / Committee Pack | 7 years |
| Quarterly Board Technology Risk Report | Board Risk Committee, Board Technology Committee | Quarterly | Head of Technology Risk / CRO | Board Pack | 7 years |
| Ad-Hoc Escalation Report | Relevant senior management / Board (per escalation matrix) | As required | Head of Technology Risk | Email / Out-of-cycle meeting | 7 years |
| Regulatory Reporting (BNM) | Bank Negara Malaysia | As required per RMiT / regulatory obligation | Head of Technology Risk / CRO | BNM FAST / Direct submission | 7 years |

### 8.2 Monthly Technology Risk Report — Content Requirements

*Specify the minimum content requirements for the Monthly Technology Risk Report.*

The Monthly Technology Risk Report shall include, at a minimum:

1. **Executive Summary:** Overall technology risk rating for the month, key risk events, and significant changes to the risk profile.
2. **KRI Dashboard:** Status of all defined KRIs for the reporting month, with comparison to the prior month and trend indicators.
3. **Incident Summary:** Summary of technology incidents classified by severity, including P1 incidents with root cause and resolution status.
4. **Cybersecurity Summary:** Key security events, vulnerability management status, and any material threat intelligence developments.
5. **Change Management Summary:** Change success rates, emergency change rate, and any significant change-related incidents.
6. **Third-Party Risk Summary:** Vendor SLA performance summary and status of overdue vendor risk assessments.
7. **Open Risk Actions:** Status of all open remediation actions arising from Amber and Red KRI breaches.
8. **Emerging Risks:** Any newly identified or escalating technology risks not yet captured in established KRIs.
9. **Regulatory Developments:** Any new or updated BNM circulars, advisories, or regulatory communications relevant to technology risk.

### 8.3 Quarterly Board Technology Risk Report — Content Requirements

*Specify the minimum content requirements for the quarterly Board-level report.*

The Quarterly Board Technology Risk Report shall include, at a minimum:

1. **Board-Level Summary:** Technology risk profile summary at a strategic level, including heat map showing overall risk ratings across all technology risk categories.
2. **Risk Appetite Assessment:** Assessment of [Organization Name]'s technology risk profile against the Board-approved risk appetite statement.
3. **KRI Trend Analysis:** Quarter-on-quarter trend analysis of key KRIs, highlighting sustained Amber or Red items.
4. **Significant Risk Events:** Summary of significant technology risk events during the quarter, including root causes, impact, and lessons learned.
5. **Regulatory Compliance Status:** Status of compliance with BNM RMiT and other applicable technology-related regulatory requirements.
6. **Remediation Programme Status:** Progress update on material remediation initiatives.
7. **Forward-Looking Risk Assessment:** Assessment of anticipated technology risks for the coming quarter, including planned major changes, new regulatory requirements, and emerging threats.

---

## 9. Escalation Procedures

### 9.1 Escalation Principles

*Describe the guiding principles for escalation to ensure timely and appropriate response to technology risk events.*

Escalation of technology risk events at [Organization Name] is governed by the following principles:

- **Timeliness:** Escalation shall occur within the timeframes specified in the escalation matrix. Speed of escalation is critical to limiting the impact of material risk events.
- **Completeness:** Escalation notifications shall include sufficient information to enable the recipient to make an informed decision (what happened, impact, actions taken, and recommended response).
- **No Blame:** The escalation process is designed to facilitate resolution, not to assign blame. Staff are encouraged to escalate proactively without fear of negative consequences.
- **Accountability:** Escalation recipients are accountable for acknowledging receipt, providing direction, and tracking resolution of escalated items.
- **Documentation:** All escalations and the actions taken in response shall be documented in the Incident / Risk Management system for audit purposes.

### 9.2 Escalation Triggers

*Define the specific events or conditions that trigger escalation, mapped to the escalation matrix.*

Escalation is triggered by any of the following conditions:

| Trigger Category | Trigger Condition | Escalation Level |
|---|---|---|
| KRI Breach | Any KRI rated Red (threshold breach) | Level 2 — Head of Technology Risk |
| KRI Trend | Two or more KRIs deteriorate from Green to Amber within a single week | Level 2 — Head of Technology Risk |
| Critical Incident | P1 technology incident affecting critical systems (e.g., core banking, payments) | Level 1 — immediate; Level 2 within 1 hour |
| Cybersecurity Incident | Confirmed or suspected material cybersecurity incident (e.g., data breach, ransomware) | Level 1 — immediate; Level 3 within 4 hours |
| Data Breach | Confirmed or suspected breach of customer personal data | Level 1 — immediate; Level 4 within 2 hours |
| Regulatory Breach | Identification of a breach or likely breach of BNM RMiT or other regulatory requirements | Level 3 — within 24 hours |
| Third-Party Failure | Critical outsourced service provider experiencing a major outage or security incident | Level 2 — within 2 hours |
| Emerging Threat | Credible threat intelligence indicating imminent or active threat to [Organization Name] | Level 2 — within 4 hours |
| [Other Trigger] | [Description] | [Level] |

### 9.3 Escalation Matrix

*Define the escalation levels, timeframes, notification recipients, and required actions for each level.*

#### Level 1 — Operational Escalation

| Attribute | Detail |
|---|---|
| **Escalation Target** | IT Operations Manager / Information Security Manager / On-Call Technology Risk Officer |
| **Notification Timeframe** | Immediate (within 15 minutes of trigger identification) |
| **Notification Method** | Phone call + ITSM ticket update + instant message ([Tool]) |
| **Responsible for Notification** | Technology Risk Analyst / IT Service Desk / Security Operations |
| **Required Actions** | Acknowledge trigger; initiate response; assess severity; determine if Level 2 escalation required |
| **Documentation** | Incident ticket created in ITSM; escalation log entry |

#### Level 2 — Senior Management Escalation

| Attribute | Detail |
|---|---|
| **Escalation Target** | Head of Technology Risk; CIO / CTO (as relevant) |
| **Notification Timeframe** | Within 1 hour of Level 1 escalation (or direct if Level 1 bypassed) |
| **Notification Method** | Phone call + email with preliminary escalation report |
| **Responsible for Notification** | IT Operations Manager / Information Security Manager |
| **Required Actions** | Assess business impact; mobilise response resources; determine if Level 3 escalation required; initiate crisis management if applicable |
| **Documentation** | Escalation report issued; management actions logged in ITSM |

#### Level 3 — Executive Escalation

| Attribute | Detail |
|---|---|
| **Escalation Target** | Chief Risk Officer; CEO; Other C-suite as relevant |
| **Notification Timeframe** | Within 4 hours of trigger (or per trigger-specific timeframe in Section 9.2) |
| **Notification Method** | Phone call + formal escalation report (email) |
| **Responsible for Notification** | Head of Technology Risk |
| **Required Actions** | Executive decision on risk response strategy; customer/stakeholder communication decisions; regulatory notification assessment |
| **Documentation** | Executive escalation report; decision log |

#### Level 4 — Board and Regulatory Escalation

| Attribute | Detail |
|---|---|
| **Escalation Target** | Board Risk Committee Chair; BNM (where regulatory notification obligation is triggered) |
| **Notification Timeframe** | Per regulatory obligation (refer to BNM incident reporting requirements) or within 24 hours for Board notification |
| **Notification Method** | Formal written report; BNM notification via prescribed channels |
| **Responsible for Notification** | CEO / CRO / Head of Technology Risk |
| **Required Actions** | Board notification and oversight; regulatory reporting; external communications (legal, PR) as required |
| **Documentation** | Board notification; regulatory submission; records retained per regulatory requirements |

### 9.4 Post-Escalation Actions

*Define the required follow-up actions after an escalation event is raised and resolved.*

Following resolution of any escalated risk event:

1. **Root Cause Analysis (RCA):** A formal RCA shall be completed within [5 / 10] business days for Level 2 and above escalations, identifying root causes, contributing factors, and recommended corrective actions.
2. **Lessons Learned Review:** Lessons learned shall be documented and shared with the Technology Risk Committee within [30] days of resolution.
3. **Risk Register Update:** The technology risk register shall be updated to reflect the risk event, its impact, and any new or amended risks identified.
4. **KRI Review:** The Head of Technology Risk shall assess whether the escalation event indicates a need to adjust existing KRI thresholds or add new KRIs.
5. **Procedure Update:** If the escalation revealed gaps in these procedures, the procedures shall be updated accordingly.
6. **Regulatory Reporting:** If a regulatory reporting obligation was triggered, confirm that all required submissions were made and retain records of same.

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix

*The RACI matrix below defines the accountability for each key activity in the risk monitoring process. R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (provides input), I = Informed (notified of outcomes).*

| Activity | Board Risk Committee | CRO | Head of Technology Risk | Senior Technology Risk Officer | Technology Risk Analyst | CIO / CTO | IT Operations Manager | Info Security Manager | Business Risk Officers | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|
| Define and approve KRI framework and thresholds | A | A | R | C | C | C | C | C | I | I |
| Maintain KRI library and threshold updates | I | I | A | R | C | C | C | C | I | I |
| Daily risk data collection and KRI measurement | I | I | I | C | R | I | C | C | I | I |
| Prepare and distribute daily risk dashboard | I | I | A | C | R | I | I | I | I | I |
| Prepare monthly technology risk report | I | C | A | R | C | C | C | C | C | I |
| Present to Technology Risk Committee | I | A | R | C | I | C | I | I | I | I |
| Prepare quarterly Board risk report | C | A | R | C | C | C | I | I | I | I |
| Present to Board Risk Committee | A | R | C | I | I | C | I | I | I | I |
| Level 1 escalation — initiation | I | I | I | C | R | I | C | C | I | I |
| Level 2 escalation — decision and response | I | I | R | A | C | C | R | C | I | I |
| Level 3 escalation — executive decision | I | A | C | I | I | C | I | I | I | I |
| Level 4 escalation — Board and regulator notification | A | R | C | I | I | C | I | I | I | I |
| Conduct post-escalation RCA | I | I | A | R | C | C | C | C | I | I |
| Quarterly review and update of these procedures | I | C | A | R | C | C | C | C | I | C |
| Independent review of monitoring effectiveness | I | I | C | C | I | I | I | I | I | A/R |

### 10.2 Key Role Descriptions

*Summarise the key responsibilities of each role in the context of technology risk monitoring.*

| Role | Key Responsibilities in Technology Risk Monitoring |
|---|---|
| **Board Risk Committee** | Provide oversight of technology risk; approve risk appetite; receive quarterly reports; escalation endpoint for material risks |
| **Chief Risk Officer (CRO)** | Executive accountability for technology risk management; approve KRI framework; receive escalated risk events; represent technology risk at Board level |
| **Head of Technology Risk** | Day-to-day ownership of monitoring procedures; KRI oversight; preparation of risk reports; management of escalations; quarterly procedure review |
| **Senior Technology Risk Officer** | Execution of monitoring activities; KRI analysis and reporting; preparation of monthly risk reports; Level 2 escalation support |
| **Technology Risk Analyst** | Daily data collection; KRI measurement; dashboard maintenance; Level 1 escalation initiation |
| **CIO / CTO** | Accountable for technology operations risk; recipient of risk reporting; decision maker for technology risk remediation |
| **IT Operations Manager** | Provides availability, incident, and change risk data; manages Level 1 operational response; implements remediation actions |
| **Information Security Manager** | Provides cybersecurity monitoring inputs; manages security monitoring tools; participates in escalation response |
| **Business Risk Officers** | Provide business unit technology risk inputs; communicate business impact of technology risk events to Technology Risk team |
| **Internal Audit** | Independent review of monitoring process effectiveness; audit of KRI methodology and reporting accuracy |

---

## 11. Review and Update History

### 11.1 Procedure Review Process

*Describe how these procedures are reviewed and updated to ensure they remain current and effective.*

These procedures shall be reviewed in accordance with the following schedule and triggers:

| Review Type | Frequency | Trigger | Responsible |
|---|---|---|---|
| Scheduled Review | Quarterly | Calendar-based | Head of Technology Risk |
| Triggered Review — Regulatory | As required | New or amended BNM regulatory requirements | Head of Technology Risk |
| Triggered Review — Incident | Within 30 days of material escalation event | Material incident revealing gaps in procedures | Head of Technology Risk |
| Triggered Review — Audit Finding | Within agreed remediation timeframe | Internal or external audit finding relating to monitoring procedures | Head of Technology Risk |
| Comprehensive Annual Review | Annually | Annual framework review cycle | CRO / Head of Technology Risk |

All updates to these procedures shall be:

- Reviewed and approved by the Head of Technology Risk and [Technology Risk Committee / CRO] prior to release.
- Version-controlled using the version history table below.
- Communicated to all affected stakeholders upon release.
- Archived in the [Document Management System] with the previous version retained for audit purposes.

### 11.2 Change Log

*Record all versions of this document, including the nature of changes made at each revision.*

| Version | Date | Author | Approved By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Effective Date] | [Author Name] | [Approved By] | Initial version — baseline document established |
| 1.1 | [Date] | [Author Name] | [Approved By] | [Description of changes] |
| 2.0 | [Date] | [Author Name] | [Approved By] | [Description of major revision] |
| [X.X] | [Date] | [Author Name] | [Approved By] | [Description] |

---

## 12. Review and Approval

### 12.1 Approval Requirements

*Define the approval requirements for this document and any future revisions.*

These procedures and any subsequent revisions require approval from the following parties prior to becoming effective:

| Approver Role | Approval Authority | Required For |
|---|---|---|
| Head of Technology Risk | Primary owner | All versions |
| Chief Risk Officer | Executive approval | All versions and major revisions (version X.0) |
| [Technology Risk Committee] | Committee endorsement | Annual comprehensive review |

### 12.2 Approval Sign-Off

*Obtain formal signatures from all required approvers for this version of the document.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Technology Risk | [Full Name] | _________________________ | [Date] |
| Chief Risk Officer | [Full Name] | _________________________ | [Date] |
| [Technology Risk Committee Chair] | [Full Name] | _________________________ | [Date] |
| [Additional Approver] | [Full Name] | _________________________ | [Date] |

---

## 13. References

### 13.1 Regulatory References

| Reference | Document Title | Issuing Authority | Relevant Clauses |
|---|---|---|---|
| BNM/RH/PD 028-109 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Paragraph 9.4 (Risk Monitoring); Paragraph 9.1–9.3 (Risk Identification and Assessment); Paragraph 10 (Reporting); Paragraph 11 (Outsourcing); Paragraph 13 (Cybersecurity) |
| [BNM Reference] | [Title of relevant BNM Circular or Policy] | Bank Negara Malaysia | [Relevant sections] |
| [NACSA Reference] | [NACSA Cybersecurity Framework or Advisory] | National Cyber Security Agency (NACSA) | [Relevant sections] |
| [PDPA Reference] | Personal Data Protection Act 2010 | Government of Malaysia | [Relevant sections relating to data security monitoring] |

### 13.2 Internal Policy References

| Document Title | Document ID | Owner | Relationship to These Procedures |
|---|---|---|---|
| Technology Risk Management Framework | [Doc ID] | Head of Technology Risk | Parent framework — these procedures implement the monitoring requirements |
| Information Security Policy | [Doc ID] | Head of Information Security | Governs cybersecurity monitoring requirements |
| Incident Management Policy | [Doc ID] | IT Operations Manager | Governs escalation and incident response linkages |
| Business Continuity Management Policy | [Doc ID] | Business Continuity Manager | Governs availability risk monitoring linkages |
| Change Management Policy | [Doc ID] | IT Operations Manager | Governs change risk monitoring requirements |
| Third-Party Risk Management Policy | [Doc ID] | Head of Third-Party Risk | Governs vendor risk monitoring requirements |
| Data Governance Policy | [Doc ID] | Chief Data Officer | Governs data integrity monitoring requirements |

### 13.3 Industry Standards and Frameworks

| Standard / Framework | Relevant Sections | Application |
|---|---|---|
| ISO/IEC 27001:2022 | Clause 9 (Performance Evaluation); Annex A Controls | Information security monitoring best practices |
| NIST Cybersecurity Framework (CSF) 2.0 | DE (Detect); RS (Respond) | Cybersecurity monitoring and response alignment |
| COBIT 2019 | MEA01 (Monitor, Evaluate and Assess Performance and Conformance) | IT risk monitoring governance |
| ITIL 4 | Service Management Practices | ITSM-based monitoring and incident management |

---

## 14. Appendices

### Appendix A: Risk Monitoring Process Flow Diagram

*Insert a visual process flow diagram here illustrating the five-stage risk monitoring process (Risk Identification → Measurement → Reporting → Escalation → Review). The diagram should show key inputs, outputs, responsible parties, and decision points at each stage.*

> **[INSERT PROCESS FLOW DIAGRAM — See [GRC Platform / Document Repository] for the current version of the process diagram. A Visio or equivalent diagram should be attached to this document.]**

---

### Appendix B: KRI Register — Full Listing

*The KRI Register provides the complete, authoritative list of all approved KRIs, including measurement methodology, data source, owner, and current threshold settings. The KRI Register is maintained separately in [GRC Platform / Document Location] and is incorporated into these procedures by reference.*

> **[REFERENCE: KRI Register — Document ID [KRI-REG-001] — maintained in [GRC Platform]. Current version as at [Date]. Summary KRI tables are provided in Section 6 of these procedures.]*

---

### Appendix C: Technology Risk Report Templates

*Standard report templates for all risk monitoring outputs defined in Section 8.*

#### Appendix C1: Daily Technology Risk Dashboard Template

> **[INSERT OR REFERENCE: Daily Technology Risk Dashboard template — available in [Dashboard Platform / SharePoint location]. Key fields: Date, Overall Risk Status, KRI Summary (Green/Amber/Red count), Open P1 Incidents, Cybersecurity Alerts, Open Actions.]**

#### Appendix C2: Monthly Technology Risk Report Template

> **[INSERT OR REFERENCE: Monthly Technology Risk Report template — available in [Document Repository]. Sections as defined in Section 8.2 of these procedures.]**

#### Appendix C3: Quarterly Board Technology Risk Report Template

> **[INSERT OR REFERENCE: Quarterly Board Technology Risk Report template — available in [Document Repository]. Sections as defined in Section 8.3 of these procedures.]**

#### Appendix C4: Escalation Report Template

> **[INSERT OR REFERENCE: Escalation Report template — available in [Document Repository]. Mandatory fields: Date/Time of Event, Trigger Category, Description of Risk Event, Immediate Impact Assessment, Actions Taken to Date, Recommended Response, Escalation Level, Next Review/Update Time.]**

---

### Appendix D: Escalation Contact Directory

*The escalation contact directory provides current contact details for all personnel listed in the escalation matrix in Section 9. This directory is subject to more frequent updates than the main procedures document and is maintained separately.*

> **[REFERENCE: Technology Risk Escalation Contact Directory — maintained in [IT Service Desk / HR System / Secure Contact List]. Must be reviewed monthly by the Head of Technology Risk to ensure accuracy.]**

| Role | Name | Primary Contact | Secondary Contact | Out-of-Hours Contact |
|---|---|---|---|---|
| Head of Technology Risk | [Name] | [Office Number] / [Email] | [Mobile] | [On-call number] |
| Chief Risk Officer | [Name] | [Office Number] / [Email] | [Mobile] | [On-call number] |
| CIO / CTO | [Name] | [Office Number] / [Email] | [Mobile] | [On-call number] |
| CEO | [Name] | [Office Number] / [Email] | [Mobile] | [On-call number] |
| IT Operations Manager | [Name] | [Office Number] / [Email] | [Mobile] | [On-call number] |
| Information Security Manager | [Name] | [Office Number] / [Email] | [Mobile] | [On-call number] |
| Board Risk Committee Chair | [Name] | [Office Number] / [Email] | [Mobile] | [On-call number] |
| BNM Supervisory Contact | [BNM Contact] | [BNM Published Contact] | [BNM Published Contact] | [BNM Published Contact] |

---

### Appendix E: Regulatory Reporting Obligations Summary

*Summarise the regulatory reporting obligations applicable to technology risk events, including BNM incident reporting timeframes.*

| Obligation | Regulatory Instrument | Reporting Trigger | Timeframe | Responsible | Submission Channel |
|---|---|---|---|---|---|
| Technology/Cybersecurity Incident Notification | BNM RMiT | Material technology or cybersecurity incident | [Per BNM prescribed timeframe — refer to current RMiT text] | CRO / Head of Technology Risk | [BNM FAST / Prescribed channel] |
| [Other BNM Reporting Obligation] | [Reference] | [Trigger] | [Timeframe] | [Responsible] | [Channel] |
| Personal Data Breach Notification | Personal Data Protection Act 2010 | Breach of personal data | [Per PDPA requirements] | [DPO / CRO] | [PDPC / Prescribed channel] |

> **Note to Author:** *Verify all regulatory reporting timeframes and channels against the current published BNM RMiT policy document and any applicable BNM circulars at the time of document preparation. BNM requirements are subject to update.*

---

### Appendix F: Glossary of Terms

| Term | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia |
| **CAB** | Change Advisory Board — a governance body responsible for reviewing and approving technology changes |
| **CMDB** | Configuration Management Database — a repository of configuration items and their relationships |
| **CRO** | Chief Risk Officer |
| **CVSS** | Common Vulnerability Scoring System — a standardised framework for rating the severity of security vulnerabilities |
| **DDoS** | Distributed Denial of Service — a type of cyberattack that attempts to disrupt service availability |
| **GRC** | Governance, Risk, and Compliance — typically refers to integrated platforms supporting these functions |
| **IOC** | Indicator of Compromise — forensic evidence that a system has been breached or attacked |
| **IT** | Information Technology |
| **ITSM** | IT Service Management — frameworks and tools for managing IT services, including incident and change management |
| **KRI** | Key Risk Indicator — a metric used to signal changes in risk exposure |
| **MTTR** | Mean Time to Restore — the average time taken to restore a service following a failure |
| **MTTD** | Mean Time to Detect — the average time between the occurrence of a security event and its detection |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PAM** | Privileged Access Management — tools and processes for controlling access to privileged accounts |
| **PDPA** | Personal Data Protection Act 2010 |
| **P1 / P2 / P3 / P4** | Priority levels for incidents — P1 is the most critical (service-affecting) and P4 is the least critical |
| **RACI** | Responsible, Accountable, Consulted, Informed — a matrix for defining roles in a process |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **RTO** | Recovery Time Objective — the maximum acceptable time for restoring a service after a disruption |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| **SIEM** | Security Information and Event Management — a platform that collects, correlates, and analyses security event data |
| **SLA** | Service Level Agreement — a formal agreement defining expected service performance levels |
| **WAF** | Web Application Firewall — a security control that monitors and filters HTTP/S traffic to web applications |

---

*End of Document*

---

**Document Control Footer**

| Field | Value |
|---|---|
| Document Title | Risk Monitoring Procedures |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Head of Technology Risk |
| Organisation | [Organization Name] |
| Last Updated | [Last Review Date] |

*This document is subject to periodic review. The current approved version is maintained in [Document Management System]. Printed copies are uncontrolled — verify currency before use.*