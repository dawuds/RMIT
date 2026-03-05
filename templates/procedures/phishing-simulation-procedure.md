# Phishing Simulation Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of HR / CISO |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory Reference and Compliance Context](#3-regulatory-reference-and-compliance-context)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Step-by-Step Process Flow](#5-step-by-step-process-flow)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Target Audience and Completion Targets](#7-target-audience-and-completion-targets)
8. [Assessment Methodology and Pass Criteria](#8-assessment-methodology-and-pass-criteria)
9. [Content Update Schedule](#9-content-update-schedule)
10. [Reporting and Escalation](#10-reporting-and-escalation)
11. [Records Management](#11-records-management)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose

*Briefly state the intent of this procedure and the problem it addresses. Explain why phishing simulation is critical to the organization's security posture.*

This procedure establishes the formal process by which [Organization Name] conducts quarterly phishing simulation exercises to evaluate employee susceptibility to social engineering attacks, assess the effectiveness of existing security awareness training, and fulfil regulatory obligations under Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document.

Phishing simulations serve as a proactive mechanism to identify knowledge gaps among personnel and to strengthen the organization's human-layer defence against cyber threats. The results of each simulation exercise directly inform remedial training activities and future awareness programme content.

This procedure applies in conjunction with the [Organization Name] Information Security Awareness Programme and must be executed in a manner that is consistent with the organization's values of transparency, professional development, and continuous improvement.

---

## 2. Scope and Applicability

*Define who and what this procedure applies to. Specify any exclusions and the conditions under which exceptions may apply.*

### 2.1 In Scope

This procedure applies to:

- All permanent employees of [Organization Name], regardless of grade, function, or location
- Contract staff and third-party personnel with access to [Organization Name] systems, networks, or data
- Directors and members of senior management who are issued [Organization Name] email accounts
- Employees on secondment to or from [Organization Name]
- New joiners who have completed initial onboarding and have been issued active email credentials

### 2.2 Out of Scope

The following are excluded from phishing simulation exercises unless specifically directed by the CISO:

- Personnel on approved leave of absence exceeding [X] calendar days at the time of campaign execution
- Accounts that have been formally suspended or deprovisioned
- System or service accounts not associated with human users
- External auditors and regulators operating under guest access arrangements

### 2.3 Geographical Applicability

*Specify whether this procedure applies to all branches, subsidiaries, or offices.*

This procedure applies to all operational entities and branches of [Organization Name] operating within Malaysia, including:

| Entity / Branch | Location | Inclusion Status |
|---|---|---|
| [Entity / Branch Name] | [Location] | Included |
| [Entity / Branch Name] | [Location] | Included |
| [Entity / Branch Name] | [Location] | [Included / Excluded — state reason] |

### 2.4 Applicability Trigger

This procedure is triggered:

- Quarterly, in accordance with the annual phishing simulation calendar (see Appendix A)
- On an ad hoc basis following a confirmed or suspected social engineering incident
- Upon request by the CISO, Internal Audit, or BNM examination teams

---

## 3. Regulatory Reference and Compliance Context

*Explain the regulatory mandate driving this procedure. Reference specific clauses and articulate the compliance obligation in plain language.*

[Organization Name] operates under the supervisory purview of Bank Negara Malaysia (BNM). The BNM Risk Management in Technology (RMiT) Policy Document (issued [RMiT Issuance Date], effective [RMiT Effective Date]) establishes mandatory requirements for financial institutions to manage technology and cyber risks.

### 3.1 Primary Regulatory Basis

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 15.2 | Financial institutions must conduct periodic phishing simulation exercises to assess employee awareness and resilience against social engineering threats |
| BNM RMiT Policy Document | [Supporting Clause] | [Brief description of supporting obligation] |
| BNM RMiT Policy Document | [Supporting Clause] | [Brief description of supporting obligation] |

### 3.2 Related Internal Policies

This procedure is governed by and must be read in conjunction with:

- [Organization Name] Information Security Policy (Document ID: [Ref])
- [Organization Name] Acceptable Use Policy (Document ID: [Ref])
- [Organization Name] Human Resources Code of Conduct (Document ID: [Ref])
- [Organization Name] Incident Response Plan (Document ID: [Ref])
- [Organization Name] Security Awareness and Training Policy (Document ID: [Ref])

### 3.3 Compliance Obligation

Failure to conduct phishing simulations at the required frequency, or failure to remediate identified weaknesses, may constitute a breach of the BNM RMiT requirements and expose [Organization Name] to regulatory action, including the issuance of a Notice of Non-Compliance, supervisory directives, or financial penalties.

---

## 4. Definitions and Terminology

*Define key terms used throughout this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Phishing** | A form of social engineering attack in which a threat actor impersonates a trusted entity via electronic communication (typically email) to deceive recipients into disclosing credentials, installing malware, or performing unauthorized actions. |
| **Phishing Simulation** | A controlled, authorized exercise in which [Organization Name] sends simulated phishing emails to employees to measure susceptibility and evaluate awareness without causing actual harm. |
| **Simulation Campaign** | A single, time-bounded phishing simulation exercise targeting a defined group of recipients, executed using a designated simulation platform. |
| **Click Rate** | The percentage of simulation recipients who clicked the malicious link or opened the simulated malicious attachment within a given campaign. |
| **Susceptibility Rate** | The percentage of recipients who took a compromising action (e.g., clicked a link, submitted credentials) out of the total number of recipients targeted in a campaign. |
| **Remedial Training** | Targeted, mandatory training delivered to employees who fail a phishing simulation exercise, designed to address identified knowledge gaps. |
| **Simulation Platform** | The technology tool or service used to design, deliver, and track phishing simulation campaigns (e.g., [Platform Name]). |
| **Campaign Template** | A pre-designed phishing email scenario used as the basis for a simulation campaign. |
| **CISO** | Chief Information Security Officer of [Organization Name]. |
| **SOC** | Security Operations Centre. |
| **RACI** | A responsibility assignment matrix denoting who is Responsible, Accountable, Consulted, and Informed for a given activity. |

---

## 5. Step-by-Step Process Flow

*Document the end-to-end procedure for planning, executing, and closing a phishing simulation campaign. Each phase must be followed in sequence. Estimated timelines are indicative and may be adjusted by the CISO.*

### 5.1 Process Overview

The phishing simulation lifecycle consists of five phases:

```
Phase 1: Planning and Authorization
        ↓
Phase 2: Campaign Design and Preparation
        ↓
Phase 3: Campaign Execution
        ↓
Phase 4: Results Analysis and Reporting
        ↓
Phase 5: Remedial Action and Closure
```

### 5.2 Phase 1 — Planning and Authorization

**Timeline:** [X] weeks before campaign launch

**Objective:** Obtain formal authorization, define campaign parameters, and coordinate with relevant stakeholders to ensure operational readiness.

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 1.1 | Review the annual phishing simulation calendar and confirm the upcoming campaign date | Information Security Team | Confirmed campaign date |
| 1.2 | Draft the Campaign Brief document (see Appendix B) outlining campaign objectives, target audience, scenario theme, and success criteria | Information Security Analyst | Draft Campaign Brief |
| 1.3 | Submit Campaign Brief to CISO for review and approval | Information Security Analyst | Reviewed Campaign Brief |
| 1.4 | CISO approves the Campaign Brief and authorizes campaign execution | CISO | Signed Campaign Brief |
| 1.5 | Notify IT Operations and SOC of the planned campaign dates to prevent false-positive incident escalation | Information Security Team | SOC Notification Record |
| 1.6 | Confirm simulation platform availability and licensing | IT Operations | Platform Readiness Confirmation |
| 1.7 | Extract the current, active employee email list from HR systems for the defined target audience | HR / IT Operations | Recipient List |
| 1.8 | Apply exclusions in accordance with Section 2.2 of this procedure | Information Security Analyst | Finalized Recipient List |

**Authorization Gate:** Campaign must not proceed to Phase 2 without a signed Campaign Brief from the CISO.

---

### 5.3 Phase 2 — Campaign Design and Preparation

**Timeline:** [X] weeks before campaign launch

**Objective:** Design the phishing scenario, configure the simulation platform, and perform quality assurance checks prior to launch.

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 2.1 | Select the phishing scenario template from the approved template library (see Appendix C) or develop a new scenario | Information Security Analyst | Selected / Drafted Scenario |
| 2.2 | Ensure the scenario reflects current and realistic threat intelligence relevant to the Malaysian financial services sector | Information Security Analyst | Threat-relevant Scenario |
| 2.3 | Configure the simulation platform with the approved scenario, sender details, target recipient list, and campaign schedule | Information Security Analyst | Platform Configuration |
| 2.4 | Configure the landing page (credential harvest page or awareness notification page) to align with campaign objectives | Information Security Analyst | Landing Page Configuration |
| 2.5 | Conduct an internal test send to a designated test mailbox to verify deliverability, formatting, and tracking link functionality | Information Security Analyst | Test Results |
| 2.6 | Whitelist simulation platform sending domains and IP addresses with the email gateway to ensure delivery to recipient inboxes | IT Operations | Whitelist Confirmation |
| 2.7 | Peer-review the campaign configuration for accuracy and technical correctness | Information Security Team Lead | Review Sign-Off |
| 2.8 | Confirm phishing landing page does not collect or retain real credentials | Information Security Analyst | Technical Assurance Note |

**Quality Gate:** The campaign must not launch without successful test delivery and peer-review sign-off.

---

### 5.4 Phase 3 — Campaign Execution

**Timeline:** Campaign duration: [X] business days (default: [5–10] business days)

**Objective:** Execute the simulation campaign, monitor delivery and engagement metrics in real time, and manage any employee inquiries or escalations.

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 3.1 | Launch the campaign on the approved date and time via the simulation platform | Information Security Analyst | Campaign Launch Record |
| 3.2 | Monitor campaign delivery status and real-time engagement metrics throughout the active campaign window | Information Security Analyst | Interim Metrics Dashboard |
| 3.3 | Manage employee inquiries directed to the IT Help Desk regarding suspicious emails, in accordance with the SOC notification provided in Step 1.5 | IT Help Desk / SOC | Inquiry Log |
| 3.4 | Do not disclose campaign details to inquiring employees during the active campaign window; redirect to standard phishing reporting guidance | IT Help Desk | — |
| 3.5 | Monitor for and document any technical anomalies (delivery failures, platform errors, unintended recipients) | Information Security Analyst | Anomaly Log |
| 3.6 | Close the campaign on the scheduled end date | Information Security Analyst | Campaign Closure Record |

**Operational Note:** Under no circumstances should [Organization Name] personnel disclose the simulated nature of the campaign to employees prior to campaign closure.

---

### 5.5 Phase 4 — Results Analysis and Reporting

**Timeline:** Within [X] business days of campaign closure

**Objective:** Analyse campaign metrics, identify high-risk individuals and departments, and produce the Post-Campaign Report for management and audit purposes.

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 4.1 | Extract full campaign results from the simulation platform, including per-recipient action data | Information Security Analyst | Raw Results Dataset |
| 4.2 | Calculate campaign KPIs in accordance with Section 8 (Assessment Methodology) | Information Security Analyst | KPI Summary |
| 4.3 | Segment results by department, grade band, and employee category | Information Security Analyst | Segmented Results |
| 4.4 | Identify employees who failed the simulation (defined in Section 8.2) and generate the remedial training enrolment list | Information Security Analyst | Remedial Enrolment List |
| 4.5 | Draft the Post-Campaign Report (see Appendix D) | Information Security Team Lead | Draft Post-Campaign Report |
| 4.6 | Submit the Post-Campaign Report to the CISO for review | Information Security Team Lead | Reviewed Report |
| 4.7 | CISO presents aggregated, anonymized findings to [Governance Body, e.g., IT Risk Committee / Board Risk Committee] | CISO | Board / Committee Presentation |
| 4.8 | Retain results data in accordance with Section 11 (Records Management) | Information Security Analyst | Archived Records |

---

### 5.6 Phase 5 — Remedial Action and Closure

**Timeline:** Remedial training to commence within [X] business days of campaign closure; completion deadline: [X] calendar days from enrolment

**Objective:** Ensure all employees who failed the simulation complete mandatory remedial training, and that lessons learned are incorporated into the next campaign cycle.

| Step | Activity | Responsible Party | Output |
|---|---|---|---|
| 5.1 | Enrol identified employees in the mandatory remedial phishing awareness module via the Learning Management System (LMS) | HR / Information Security Team | LMS Enrolment Confirmation |
| 5.2 | Notify enrolled employees and their line managers of the mandatory training requirement and completion deadline | HR | Notification Records |
| 5.3 | Track remedial training completion rates via the LMS | HR | Training Completion Report |
| 5.4 | Escalate non-completion to line managers and HR for disciplinary action in accordance with the HR Code of Conduct | HR | Escalation Records |
| 5.5 | Conduct post-campaign review meeting to identify lessons learned and improvement opportunities | Information Security Team / HR | Lessons Learned Notes |
| 5.6 | Update the phishing scenario template library and campaign brief template based on lessons learned | Information Security Team | Updated Template Library |
| 5.7 | Formally close the campaign and record closure in the Phishing Simulation Register | Information Security Analyst | Closed Campaign Record |

---

## 6. Roles and Responsibilities

*Document who is responsible for each major activity in this procedure. Use the RACI model: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 6.1 RACI Matrix

| Activity | CISO | Head of HR | Info Sec Team | IT Operations | SOC | Line Managers | All Employees |
|---|---|---|---|---|---|---|---|
| Define annual simulation calendar | A | C | R | I | I | I | — |
| Draft and approve Campaign Brief | A | I | R | I | I | — | — |
| Whitelist simulation sending domains | I | — | C | R | C | — | — |
| Design phishing scenario | A | — | R | — | C | — | — |
| Execute campaign | A | — | R | C | I | — | — |
| Manage employee inquiries during campaign | I | — | C | C | R | — | — |
| Analyse campaign results | A | I | R | — | — | — | — |
| Prepare Post-Campaign Report | A | I | R | — | — | — | — |
| Present findings to governance body | R/A | I | C | — | — | — | — |
| Enrol employees in remedial training | C | A | R | — | — | I | — |
| Complete mandatory remedial training | I | A | I | — | — | C | R |
| Escalate non-completion | I | A | I | — | — | R | — |
| Maintain simulation records | A | I | R | — | — | — | — |
| Annual review of this procedure | A | C | R | C | C | — | — |

### 6.2 Role Descriptions

| Role | Responsibilities Under This Procedure |
|---|---|
| **CISO** | Ultimate accountability for the phishing simulation programme; approves Campaign Briefs; reviews Post-Campaign Reports; presents findings to governance bodies; ensures regulatory compliance |
| **Head of HR** | Accountable for employee training completion; coordinates disciplinary action for non-completion; provides employee data for targeting |
| **Information Security Team** | Day-to-day execution of simulation campaigns; scenario design; results analysis; report preparation; records management |
| **IT Operations** | Maintains simulation platform; manages email gateway whitelisting; provides technical support during campaigns |
| **Security Operations Centre (SOC)** | Receives advance notification of campaigns; manages employee escalations; monitors for genuine incidents during campaign windows |
| **Line Managers** | Notified of direct reports' remedial training enrolment; responsible for ensuring completion; escalate non-compliance to HR |
| **All Employees** | Subject to simulation campaigns; required to complete remedial training if enrolled; report suspected phishing via designated channels |

---

## 7. Target Audience and Completion Targets

*Define the intended simulation targets, segmentation approach, and the completion/participation benchmarks that the organization seeks to achieve.*

### 7.1 Target Audience Definition

Each quarterly campaign shall target the full in-scope population as defined in Section 2.1, subject to the exclusions in Section 2.2. The following segmentation framework shall be applied to enable meaningful comparison across campaigns:

| Segment | Definition | Targeting Approach |
|---|---|---|
| **All Staff** | All active, in-scope employees | Mandatory inclusion in every campaign |
| **Privileged Users** | IT administrators, system owners, senior management | May be targeted with higher-difficulty scenarios |
| **High-Risk Functions** | Finance, HR, Procurement, Executive Assistants | Targeted with business-email-compromise themed scenarios |
| **New Joiners (< 6 months)** | Employees onboarded within the preceding 6 months | Tracked separately to assess onboarding training effectiveness |
| **Prior Repeat Clickers** | Employees who failed two or more consecutive campaigns | Targeted with additional mid-cycle awareness interventions |

### 7.2 Annual Simulation Calendar

*Populate the calendar below at the beginning of each calendar year. The CISO must approve the calendar before the first campaign of the year.*

| Quarter | Campaign Window | Scenario Theme | Target Segment | CISO Approval Date |
|---|---|---|---|---|
| Q1 | [Start Date] – [End Date] | [e.g., BNM / Regulatory impersonation] | All Staff | [Date] |
| Q2 | [Start Date] – [End Date] | [e.g., IT Help Desk / Password reset] | All Staff + Privileged Users | [Date] |
| Q3 | [Start Date] – [End Date] | [e.g., Finance / Vendor invoice fraud] | All Staff + High-Risk Functions | [Date] |
| Q4 | [Start Date] – [End Date] | [e.g., HR / Benefits / Payroll] | All Staff + New Joiners | [Date] |

### 7.3 Participation and Completion Targets

The following benchmarks represent the minimum performance standards for the phishing simulation programme. Targets shall be reviewed annually by the CISO.

| Metric | Target | Rationale |
|---|---|---|
| **Campaign Delivery Rate** | ≥ 95% of targeted recipients receive the simulation email | Validates technical delivery infrastructure |
| **Susceptibility Rate (Maximum)** | ≤ [X]% in any given campaign | Organization-defined threshold; lower is better |
| **Year-on-Year Susceptibility Reduction** | ≥ [X]% reduction compared to same quarter prior year | Demonstrates programme effectiveness |
| **Remedial Training Completion Rate** | ≥ 95% within [X] days of enrolment | Ensures non-compliant employees receive corrective education |
| **Repeat Clicker Rate** | ≤ [X]% of campaign recipients are prior repeat clickers | Tracks persistence of high-risk behaviour |

---

## 8. Assessment Methodology and Pass Criteria

*Define how simulation results are measured, what constitutes a pass or fail outcome, and how results are used to grade organizational and individual performance.*

### 8.1 Simulation Metrics Framework

The following primary metrics shall be captured for every campaign and reported in the Post-Campaign Report:

| Metric | Definition | Calculation |
|---|---|---|
| **Emails Delivered** | Number of simulation emails successfully received by recipients | Count of delivered emails |
| **Emails Opened** | Number of recipients who opened the simulation email | Count of open events |
| **Link Clicked** | Number of recipients who clicked the simulated malicious link | Count of click events |
| **Credentials Submitted** | Number of recipients who entered data on the simulated phishing landing page | Count of submission events |
| **Attachment Opened** | Number of recipients who opened a simulated malicious attachment (where applicable) | Count of open events |
| **Reported as Phishing** | Number of recipients who correctly reported the simulation email using the designated reporting mechanism | Count of reports |
| **Susceptibility Rate** | Percentage of recipients who took any failing action | (Failing actions ÷ Emails Delivered) × 100 |
| **Reporting Rate** | Percentage of recipients who correctly reported the simulation | (Reports ÷ Emails Delivered) × 100 |

### 8.2 Pass and Fail Criteria

An individual employee is deemed to have **failed** the simulation if they perform any one of the following actions:

- Click the simulated malicious link
- Submit data (including credentials, personal information, or any other input) on the simulated landing page
- Open a simulated malicious attachment (where the campaign includes attachment-based testing)
- Forward the simulation email to external parties

An individual employee is deemed to have **passed** the simulation if they:

- Delete the email without clicking any links or opening attachments, **or**
- Report the email using the designated phishing reporting mechanism

**Note:** Simply opening the email, without taking a further compromising action, shall not constitute a failure.

### 8.3 Organizational Performance Ratings

At the conclusion of each campaign, [Organization Name] shall be assigned an overall performance rating based on the aggregate susceptibility rate:

| Susceptibility Rate | Organizational Rating | Required Action |
|---|---|---|
| 0% – [X]% | **Excellent** | Maintain programme; consider advanced scenarios for next campaign |
| [X+1]% – [Y]% | **Satisfactory** | Continue current programme; minor scenario enhancements recommended |
| [Y+1]% – [Z]% | **Needs Improvement** | Enhanced awareness campaign required; CISO to brief IT Risk Committee |
| > [Z]% | **Critical** | Immediate escalation to Board Risk Committee; mandatory organization-wide awareness intervention within [X] days |

*Note: [X], [Y], and [Z] thresholds are to be determined by the CISO in consultation with the Board Risk Committee, taking into account industry benchmarks and the organization's risk appetite.*

### 8.4 Departmental Benchmarking

Results shall be segmented by department and presented in the Post-Campaign Report using the following table format:

| Department | Recipients Targeted | Susceptibility Rate (%) | Reporting Rate (%) | Rating | Remedial Training Required |
|---|---|---|---|---|---|
| [Department Name] | [Number] | [%] | [%] | [Rating] | Yes / No |
| [Department Name] | [Number] | [%] | [%] | [Rating] | Yes / No |
| **Organization Total** | **[Number]** | **[%]** | **[%]** | **[Rating]** | — |

### 8.5 Trend Analysis

The Information Security Team shall maintain a Phishing Simulation Trend Register (see Appendix E) tracking the following metrics across all historical campaigns to demonstrate continuous improvement:

- Organization-wide susceptibility rate per campaign
- Department-level susceptibility rate per campaign
- Remedial training completion rate per campaign
- Reporting rate per campaign
- Number of repeat clickers per campaign

---

## 9. Content Update Schedule

*Define how phishing scenario content is kept current, realistic, and aligned with the evolving threat landscape.*

### 9.1 Content Governance Principles

Phishing simulation scenarios must reflect realistic, current threat tactics relevant to the Malaysian financial services sector to ensure the simulation accurately assesses employee resilience against genuine threats. Scenarios that are outdated, irrelevant, or implausible may produce misleading results and undermine the programme's value.

### 9.2 Scenario Template Library

[Organization Name] shall maintain an approved Phishing Scenario Template Library (see Appendix C) consisting of at least [X] approved templates across the following categories:

| Scenario Category | Description | Review Frequency |
|---|---|---|
| Credential Harvesting | Fake login pages impersonating internal or external services | Quarterly |
| Business Email Compromise (BEC) | CEO / CFO impersonation requesting financial action | Quarterly |
| Regulatory Impersonation | Emails purporting to be from BNM, NACSA, or other regulators | Bi-annually |
| IT Help Desk Impersonation | Fake password reset, system update, or access notification | Quarterly |
| Malicious Attachment | Emails with simulated infected Office documents or PDFs | Quarterly |
| Vendor / Supplier Fraud | Invoice fraud or payment redirection scenarios | Bi-annually |
| HR / Payroll Impersonation | Fake payslip, benefits, or policy notification emails | Bi-annually |

### 9.3 Scheduled Content Review Cycle

| Review Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| Review all existing scenario templates for continued relevance | Quarterly (aligned with campaign planning) | Information Security Analyst | Updated template notes |
| Incorporate new threat intelligence and attack techniques observed in the industry | Quarterly | Information Security Team / Threat Intelligence function | New scenario drafts |
| Retire scenarios deemed no longer realistic or effective | Quarterly | Information Security Team Lead | Retired template log |
| Full overhaul of the template library | Annually | CISO / Information Security Team | Revised Template Library |
| Peer review of all new or substantially modified scenarios | Per new/modified scenario | Information Security Team Lead | Reviewed scenario |

### 9.4 Threat Intelligence Sources

Scenario content shall be informed by intelligence from the following sources, at a minimum:

- BNM cybersecurity advisories and circulars
- NACSA National Cyber Security Agency alerts
- [Organization Name] SOC threat intelligence feeds
- [Threat Intelligence Platform Name] (if applicable)
- Industry sharing communities (e.g., FS-ISAC, CyberSecurity Malaysia advisories)
- Publicly reported phishing campaigns targeting Malaysian financial institutions

### 9.5 Scenario Approval Process

New or substantially revised phishing scenarios must undergo the following approval process before inclusion in a live campaign:

1. Drafted by Information Security Analyst
2. Peer-reviewed by Information Security Team Lead
3. Legal and HR review (to ensure scenarios do not violate employee rights or privacy obligations under the PDPA)
4. Approved by CISO
5. Added to the Approved Template Library with version and approval date

---

## 10. Reporting and Escalation

*Define how results are reported to management and the board, and the escalation path for critical outcomes.*

### 10.1 Reporting Hierarchy

| Report | Recipient | Frequency | Format | Responsible Party |
|---|---|---|---|---|
| Post-Campaign Summary | CISO | Per campaign (quarterly) | Written report | Information Security Team Lead |
| Remedial Training Status Update | Head of HR, CISO | [X] days post-campaign | Email summary | Information Security Analyst |
| Aggregated Trend Report | IT Risk Committee | Semi-annually | Presentation / Board paper | CISO |
| Annual Phishing Programme Review | Board Risk Committee / Audit Committee | Annually | Board paper | CISO |
| Regulatory Evidence Package | BNM (upon request / examination) | As required | Compiled records | CISO / Compliance |

### 10.2 Escalation Triggers

The following conditions require immediate escalation beyond standard reporting channels:

| Trigger Condition | Escalation Path | Timeline |
|---|---|---|
| Organizational susceptibility rate exceeds [Z]% (Critical threshold) | CISO → CEO → Board Risk Committee | Within [X] business days of campaign closure |
| Senior management (VP and above) fail rate exceeds [X]% | CISO → Board Risk Committee Chairperson | Within [X] business days |
| Employee reports genuine (non-simulated) phishing during campaign window | SOC → Incident Response Plan activated | Immediately |
| Simulation platform sends emails to unintended recipients | CISO → IT Operations → Affected parties notified | Immediately |
| Remedial training completion rate falls below [X]% | Information Security Team → Head of HR → CEO | [X] days post-enrolment deadline |

### 10.3 Regulatory Reporting

If a phishing simulation reveals systemic vulnerabilities that constitute a material technology risk, [Organization Name] shall assess the obligation to notify BNM in accordance with the RMiT reporting requirements and the [Organization Name] Incident Reporting Procedure (Document ID: [Ref]).

---

## 11. Records Management

*Define how phishing simulation records are stored, retained, and protected, consistent with PDPA and BNM requirements.*

### 11.1 Records to Be Retained

| Record Type | Description | Retention Period | Storage Location | Access Control |
|---|---|---|---|---|
| Campaign Brief | Approved campaign authorization document | [X] years | [System / Location] | Information Security Team, CISO |
| Recipient List | Full list of targeted employees per campaign | [X] years | [System / Location] | Information Security Team, CISO |
| Raw Campaign Results | Per-recipient action data from simulation platform | [X] years | [System / Location] | Information Security Team, CISO |
| Post-Campaign Report | Aggregated analysis and recommendations | [X] years | [System / Location] | Information Security Team, CISO, Internal Audit |
| Remedial Training Records | Enrolment and completion data per employee | [X] years | LMS / HR System | HR, Information Security Team |
| Escalation Records | Records of escalations triggered under Section 10.2 | [X] years | [System / Location] | CISO, Compliance |
| Phishing Simulation Register | Master log of all campaigns conducted | Indefinite | [System / Location] | Information Security Team |

### 11.2 Data Protection Obligations

All phishing simulation records that contain personally identifiable information (PII) — including individual employee click data — are subject to the Personal Data Protection Act 2010 (PDPA) and must be:

- Stored on systems located within Malaysia or in jurisdictions approved by the CISO and Compliance
- Accessible only to personnel with a legitimate need to know
- Not shared with third parties without the prior written approval of the CISO and Compliance
- Destroyed securely upon expiry of the applicable retention period

Individual-level simulation results must not be used for any purpose other than the administration of the phishing awareness programme, including but not limited to performance appraisals, disciplinary proceedings (except where an employee refuses to complete mandatory remedial training), or recruitment decisions.

---

## 12. Review and Approval

### 12.1 Procedure Review Schedule

This procedure shall be reviewed:

- Quarterly, in conjunction with the phishing simulation programme cycle, to assess procedural adequacy
- Following any significant change to BNM RMiT requirements or related regulatory guidance
- Following a major incident in which a phishing simulation procedure gap is identified
- At a minimum, annually, regardless of the above triggers

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version |
| [1.1] | [Date] | [Author Name], [Title] | [Description of change] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of major revision] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], Information Security Analyst | | [Date] |
| Reviewed By | [Name], Information Security Team Lead | | [Date] |
| Reviewed By | [Name], Head of Human Resources | | [Date] |
| Reviewed By | [Name], Legal / Compliance | | [Date] |
| Approved By | [Name], Chief Information Security Officer (CISO) | | [Date] |
| Noted By | [Name], Chief Executive Officer | | [Date] |

---

## 13. References

*List all regulatory instruments, internal policies, and standards that inform or are referenced by this procedure.*

### 13.1 Regulatory References

| Reference | Full Title | Issuing Authority | Clause / Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 15.2 |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | All provisions relating to processing of employee data |
| [BNM Circular Ref] | [Title of relevant BNM circular or advisory] | Bank Negara Malaysia | [Section] |
| [NACSA Advisory Ref] | [Title of NACSA advisory] | NACSA | [Section] |

### 13.2 Internal Policy References

| Document ID | Document Title | Owner |
|---|---|---|
| [Ref] | Information Security Policy | CISO |
| [Ref] | Security Awareness and Training Policy | CISO / Head of HR |
| [Ref] | Acceptable Use Policy | CISO |
| [Ref] | Incident Response Plan | CISO / SOC |
| [Ref] | Human Resources Code of Conduct | Head of HR |
| [Ref] | Data Protection and Privacy Policy | Compliance / DPO |
| [Ref] | Vendor and Third-Party Management Policy | CISO / Procurement |

### 13.3 Technical Standards

| Standard | Title | Relevance |
|---|---|---|
| NIST SP 800-50 | Building an Information Technology Security Awareness and Training Program | Awareness programme design |
| NIST SP 800-61 | Computer Security Incident Handling Guide | Incident escalation context |
| ISO/IEC 27001:2022 | Information Security Management Systems | Control A.6.3 — Information security awareness, education and training |

---

## 14. Appendices

### Appendix A — Annual Phishing Simulation Calendar Template

*Complete this calendar at the start of each calendar year. Obtain CISO approval before Q1 campaign launch.*

**Calendar Year: [YYYY]**

| Campaign | Quarter | Target Launch Date | Target Close Date | Scenario Theme | Primary Target Segment | Approved By | Approval Date |
|---|---|---|---|---|---|---|---|
| Campaign 1 | Q1 | [Date] | [Date] | [Theme] | [Segment] | [CISO Name] | [Date] |
| Campaign 2 | Q2 | [Date] | [Date] | [Theme] | [Segment] | [CISO Name] | [Date] |
| Campaign 3 | Q3 | [Date] | [Date] | [Theme] | [Segment] | [CISO Name] | [Date] |
| Campaign 4 | Q4 | [Date] | [Date] | [Theme] | [Segment] | [CISO Name] | [Date] |

---

### Appendix B — Campaign Brief Template

**[Organization Name] — Phishing Simulation Campaign Brief**

| Field | Details |
|---|---|
| Campaign ID | [Campaign ID] |
| Campaign Name | [Descriptive Name] |
| Quarter | [Q1 / Q2 / Q3 / Q4] [YYYY] |
| Target Launch Date | [Date] |
| Target Close Date | [Date] |
| Scenario Theme | [Theme Description] |
| Scenario Category | [Category from Section 9.2] |
| Difficulty Level | [Low / Medium / High] |
| Target Segment | [Segment Description] |
| Estimated Recipient Count | [Number] |
| Simulation Platform | [Platform Name] |
| Success Criterion | Susceptibility rate ≤ [X]% |
| SOC Notification Date | [Date] |
| IT Operations Notification Date | [Date] |

**Campaign Objectives:**

1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

**Authorization:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], Information Security Analyst | | [Date] |
| Approved By | [Name], CISO | | [Date] |

---

### Appendix C — Approved Phishing Scenario Template Library

*Maintained by the Information Security Team. Updated quarterly. Full scenario content stored in [System / Location].*

| Template ID | Scenario Name | Category | Difficulty | Last Reviewed | Status |
|---|---|---|---|---|---|
| PST-001 | [e.g., BNM Password Reset Request] | Credential Harvesting | Medium | [Date] | Active |
| PST-002 | [e.g., CEO Wire Transfer Request] | BEC | High | [Date] | Active |
| PST-003 | [e.g., IT Help Desk — Account Locked] | IT Impersonation | Low | [Date] | Active |
| PST-004 | [e.g., Vendor Invoice — Action Required] | Vendor Fraud | Medium | [Date] | Active |
| PST-005 | [e.g., HR — Updated Benefits Statement] | HR Impersonation | Low | [Date] | Active |
| PST-006 | [e.g., NACSA Security Alert] | Regulatory Impersonation | High | [Date] | Active |
| [PST-00X] | [Scenario Name] | [Category] | [Difficulty] | [Date] | [Active / Retired] |

---

### Appendix D — Post-Campaign Report Template

**[Organization Name] — Phishing Simulation Post-Campaign Report**

| Field | Details |
|---|---|
| Campaign ID | [Campaign ID] |
| Campaign Name | [Campaign Name] |
| Report Date | [Date] |
| Prepared By | [Name], [Title] |
| Reviewed By | [Name], CISO |
| Classification | Confidential |

**Executive Summary**

*Provide a 2–3 sentence summary of the campaign outcome, overall susceptibility rate, and key findings.*

[Executive Summary Text]

**Campaign Metrics Summary**

| Metric | Result | Target | Status |
|---|---|---|---|
| Emails Delivered | [Number] ([%] of targeted) | ≥ 95% delivery | Met / Not Met |
| Link Clicked (Susceptibility Rate) | [Number] ([%]) | ≤ [X]% | Met / Not Met |
| Credentials Submitted | [Number] ([%]) | — | — |
| Reported as Phishing | [Number] ([%]) | — | — |
| Overall Organizational Rating | [Rating] | Satisfactory or above | Met / Not Met |

**Departmental Results**

| Department | Recipients | Susceptibility Rate | Reporting Rate | Rating |
|---|---|---|---|---|
| [Department] | [N] | [%] | [%] | [Rating] |
| [Department] | [N] | [%] | [%] | [Rating] |
| **Total** | **[N]** | **[%]** | **[%]** | **[Rating]** |

**Key Findings**

1. [Finding 1]
2. [Finding 2]
3. [Finding 3]

**Recommendations**

1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

**Remedial Actions**

| Action | Owner | Target Date | Status |
|---|---|---|---|
| Enrol [N] employees in remedial training | Head of HR | [Date] | [Status] |
| [Additional action] | [Owner] | [Date] | [Status] |

---

### Appendix E — Phishing Simulation Trend Register

*Maintained by the Information Security Team. Updated after each campaign closure.*

| Campaign ID | Quarter | Launch Date | Scenario Theme | Recipients | Susceptibility Rate (%) | Reporting Rate (%) | Remedial Enrolments | Remedial Completion Rate (%) | Org Rating |
|---|---|---|---|---|---|---|---|---|---|
| [ID] | Q[X] [YYYY] | [Date] | [Theme] | [N] | [%] | [%] | [N] | [%] | [Rating] |
| [ID] | Q[X] [YYYY] | [Date] | [Theme] | [N] | [%] | [%] | [N] | [%] | [Rating] |

---

### Appendix F — Remedial Training Programme Overview

*Describe the remedial training content and delivery mechanism. Update annually or when training content changes.*

| Field | Details |
|---|---|
| Training Module Name | [Module Name] |
| Delivery Platform | [LMS / Platform Name] |
| Module Duration | [X] minutes |
| Content Topics | Recognizing phishing emails; Reporting suspected phishing; Safe link and attachment handling; Social engineering awareness |
| Assessment Included | Yes / No |
| Pass Score (if assessed) | [X]% |
| Completion Deadline | [X] calendar days from enrolment |
| Content Owner | Information Security Team |
| Last Content Review | [Date] |
| Next Scheduled Review | [Date] |

---

### Appendix G — Phishing Simulation Register (Master Log)

*Master record of all phishing simulation campaigns conducted by [Organization Name]. Maintained indefinitely.*

| Campaign ID | Quarter | Year | Scenario Template | Recipient Count | Susceptibility Rate | Org Rating | Report Reference | CISO Sign-Off | Date Closed |
|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Q] | [YYYY] | [PST-XXX] | [N] | [%] | [Rating] | [Report Ref] | [Name] | [Date] |

---

### Appendix H — Employee Communication Templates

*The following communication templates are to be used when notifying employees of remedial training enrolment. These templates must be approved by HR and Legal prior to use.*

**H.1 — Remedial Training Enrolment Notification (to Employee)**

> Subject: Mandatory Security Awareness Training — Action Required
>
> Dear [Employee Name],
>
> As part of [Organization Name]'s ongoing commitment to cybersecurity, you have been enrolled in a mandatory phishing awareness training module. This training is required to be completed by **[Completion Deadline]**.
>
> Please log in to [LMS Platform] at [LMS URL] to access your training.
>
> If you have any questions, please contact [Contact Name / Team] at [Contact Email].
>
> Regards,
> [HR / Information Security Team]

**H.2 — Remedial Training Non-Completion Escalation (to Line Manager)**

> Subject: Mandatory Security Training — Non-Completion Alert: [Employee Name]
>
> Dear [Manager Name],
>
> This is to inform you that [Employee Name] ([Employee ID]) has not completed their mandatory phishing awareness training, which was due by [Completion Deadline].
>
> Please ensure your direct report completes this training by **[Revised Deadline]**. Continued non-completion will be escalated to Human Resources for action in accordance with the [Organization Name] Code of Conduct.
>
> Please contact [Contact Name] at [Contact Email] if you have questions.
>
> Regards,
> [HR]

---

*End of Document*

---

**Document Control Notice:** This document is classified as **Confidential**. It must not be distributed outside of [Organization Name] without the prior written approval of the CISO. Printed copies are uncontrolled. The master version is maintained in [Document Management System] at [Document Location / URL].