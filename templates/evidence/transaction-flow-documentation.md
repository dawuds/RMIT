# Transaction Flow Documentation

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head], [Department Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified **Confidential** and is intended solely for authorized personnel within [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. Handle in accordance with [Organization Name]'s Information Classification Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Transaction Flow Architecture](#5-transaction-flow-architecture)
6. [Independent Channel Verification](#6-independent-channel-verification)
7. [Findings and Ratings](#7-findings-and-ratings)
8. [Evidence Reviewed](#8-evidence-reviewed)
9. [Recommendations](#9-recommendations)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document provides a formal record of the transaction verification flow implemented by [Organization Name], demonstrating compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** Policy Document, specifically Clause **12.5**, which mandates the use of independent channels for transaction verification and authorization controls.

This artifact serves as primary evidence for internal audits, regulatory examinations, and technology risk assessments. It documents the end-to-end flow of a transaction from initiation through verification, confirmation, and settlement, with explicit reference to the independent channel controls in place.

### 1.2 Scope

*Define the boundaries of this documentation. Specify which transaction types, systems, channels, and business units are covered.*

This document covers the following in-scope elements:

- **Transaction Types:** [e.g., Interbank Fund Transfers (IBG/DuitNow), Bill Payments, High-Value Transactions above RM [Threshold Amount]]
- **Channels:** [e.g., Internet Banking, Mobile Banking Application, Branch Terminals, API-connected Third-Party Platforms]
- **Systems:** [e.g., Core Banking System, Payment Gateway, Transaction Monitoring System, OTP/Authentication Service]
- **Business Units:** [e.g., Retail Banking, Corporate Banking, Digital Channels]
- **Customer Segments:** [e.g., Individual Retail Customers, SME, Corporate]

The following are explicitly **out of scope**:

- [Out-of-scope item 1, e.g., Internal ledger postings not customer-facing]
- [Out-of-scope item 2, e.g., ATM transactions covered under separate documentation ref: [Document ID]]
- [Out-of-scope item 3]

---

## 2. Regulatory Context

### 2.1 Applicable Framework

| Regulatory Instrument | Issuing Authority | Clause / Section | Requirement Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 12.5 | Implementation of independent channel for transaction verification to mitigate risk of unauthorized or fraudulent transactions |
| RMiT Policy Document | BNM | [Additional Clause, e.g., 10.3] | [Related requirement, e.g., Strong Customer Authentication] |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Communications | [Applicable Section] | Data protection obligations for customer transaction data |
| [Other Applicable Standard] | [Authority] | [Section] | [Requirement] |

### 2.2 Interpretation of Clause 12.5

*Summarize the specific obligations imposed by RMiT Clause 12.5 as they apply to your organization's transaction verification architecture.*

RMiT Clause 12.5 requires [Organization Name] to ensure that:

- Transaction verification is conducted through a channel **independent** of the channel used to initiate the transaction;
- The independent channel verification mechanism is resistant to compromise of the primary transaction channel;
- Controls are in place to detect and prevent man-in-the-browser, man-in-the-middle, and session hijacking attacks;
- Adequate logging and audit trails are maintained for all transaction verification events.

**Compliance Position:** [e.g., Compliant / Partially Compliant / Non-Compliant — see Section 7]

---

## 3. Assessment Scope and Criteria

### 3.1 Assessment Objectives

*State the specific objectives of this assessment. What questions is this documentation intended to answer?*

This transaction flow assessment was conducted to:

1. Map and validate the end-to-end transaction processing flow for all in-scope transaction types;
2. Verify that independent channel controls are implemented as designed and functioning effectively;
3. Identify any gaps between documented controls and actual operational implementation;
4. Provide assurance evidence to support [Organization Name]'s RMiT self-assessment submission / external audit.

### 3.2 Assessment Criteria

*List the specific standards, thresholds, and benchmarks used to evaluate adequacy of transaction flow controls.*

| Criterion | Standard / Threshold | Source |
|---|---|---|
| Independent channel separation | Verification channel must be technically distinct from initiation channel (e.g., SMS OTP for web-initiated transactions) | RMiT Clause 12.5 |
| Authentication strength | Multi-factor authentication (MFA) required for transactions above RM [Amount] | RMiT / [Internal Policy Ref] |
| OTP validity window | OTP must expire within [X] minutes of issuance | [Internal Security Standard Ref] |
| Transaction timeout | Sessions must time out after [X] minutes of inactivity | [Internal Policy Ref] |
| Audit log retention | Transaction logs retained for minimum [X] years | [Regulatory / Internal Policy Ref] |
| Fraud detection response time | Suspicious transaction alerts actioned within [X] minutes | [SLA / Policy Ref] |
| [Additional Criterion] | [Standard] | [Source] |

### 3.3 Assessment Period

| Field | Details |
|---|---|
| **Assessment Trigger** | [e.g., Quarterly Review / System Change Event / Incident Post-Mortem / Regulatory Examination Preparation] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Transaction Volume Reviewed** | [Number of transactions sampled / Full population] |
| **Assessment Conducted By** | [Name], [Title], [Department] |
| **Assessment Date** | [Date] |

---

## 4. Methodology

### 4.1 Assessment Approach

*Describe how this assessment was conducted, including the techniques and tools used to gather and validate evidence.*

The assessment employed the following methodology:

1. **Document Review** — Review of existing architecture diagrams, security policies, and prior assessment reports to establish baseline understanding of the transaction flow design.

2. **Technical Walkthrough** — Step-by-step walkthrough of each transaction type with the [Technology / Digital Channels] team to trace the flow from customer initiation through to settlement confirmation.

3. **Control Testing** — Functional testing of independent channel controls in [Environment: UAT / Production] to verify that verification mechanisms operate as designed.

4. **Log Analysis** — Sampling and analysis of transaction logs from [System Name] for the period [Date Range] to confirm audit trail completeness and integrity.

5. **Interview** — Structured interviews with [e.g., Head of Digital Channels, IT Security, Fraud Management] to validate operational procedures.

6. **Gap Analysis** — Comparison of current state against RMiT Clause 12.5 requirements and [Organization Name]'s internal [Policy/Standard Name].

### 4.2 Sampling Methodology

*If a sample of transactions was reviewed rather than the full population, document the sampling approach here.*

| Parameter | Details |
|---|---|
| **Population Size** | [Total number of transactions in scope period] |
| **Sample Size** | [Number of transactions sampled] |
| **Sampling Method** | [e.g., Random Sampling / Risk-Based Sampling / Stratified Sampling] |
| **Sampling Rationale** | [Justification for sample size and method] |
| **Confidence Level** | [e.g., 95%] |

### 4.3 Tools and Systems Used

| Tool / System | Purpose | Version / Environment |
|---|---|---|
| [Core Banking System Name] | Transaction record source of truth | [Version] / [Environment] |
| [Transaction Monitoring System] | Log extraction and fraud alert review | [Version] |
| [Authentication Platform, e.g., RSA, Entrust] | OTP and MFA verification logs | [Version] |
| [SIEM Platform, e.g., Wazuh, Splunk] | Consolidated audit log review | [Version] |
| [Testing Tool, e.g., Postman, Browser DevTools] | Control functional testing | [Version] |

---

## 5. Transaction Flow Architecture

### 5.1 High-Level Transaction Flow Overview

*Provide a narrative description of the end-to-end transaction flow. Attach or embed a flow diagram in Appendix A.*

The [Organization Name] transaction verification flow follows a **[X]-stage** process that incorporates an independent channel at the verification stage. The flow is summarized below. For a detailed process diagram, refer to **Appendix A**.

**Stage 1 — Transaction Initiation (Primary Channel)**

- Customer authenticates to [Channel, e.g., Mobile Banking App] via [Authentication Method, e.g., biometric/PIN];
- Customer inputs transaction details: recipient, amount, reference;
- System performs pre-authorization checks: [e.g., daily limit check, beneficiary validation, account status check];
- Transaction is placed in **pending** status pending verification.

**Stage 2 — Independent Channel Verification**

- System triggers a [Verification Mechanism, e.g., SMS OTP / Push Notification via separate app / Hardware Token] to the customer's [Registered Contact Method];
- Verification request is transmitted via [Independent Channel Name], which is technically separate from the [Primary Channel Name];
- Customer receives and enters the [OTP/Confirmation Code] within [X] minutes;
- System validates the verification response.

**Stage 3 — Authorization and Settlement**

- Upon successful verification, transaction is submitted to [Core Banking / Payment Rail];
- Transaction authorization is logged with a unique [Transaction Reference ID];
- Customer receives confirmation via [Notification Channel, e.g., push notification, SMS, email];
- Settlement is completed within [Timeframe] in accordance with [Payment Rail SLA].

**Stage 4 — Post-Transaction Monitoring**

- Transaction is passed to [Fraud Monitoring System] for real-time and batch behavioral analysis;
- Any anomalies trigger alerts to [Fraud Operations Team] for review within [SLA timeframe];
- Audit log entry is written to [Log System] with full transaction metadata.

### 5.2 Transaction Flow Summary Table

*Map each transaction type to its specific initiation channel, verification channel, and key controls.*

| Transaction Type | Initiation Channel | Verification Channel | Verification Mechanism | Threshold Applies |
|---|---|---|---|---|
| DuitNow Transfer | Mobile Banking App | SMS / Registered Mobile | 6-digit OTP (valid [X] mins) | All amounts |
| IBG Transfer | Internet Banking Portal | SMS / Registered Mobile | 6-digit OTP (valid [X] mins) | > RM [Amount] |
| Bill Payment | Mobile Banking App | In-App Push Notification | Biometric re-authentication | > RM [Amount] |
| High-Value Transfer | Internet Banking Portal | TAC via [Method] | TAC + SMS confirmation | > RM [Amount] |
| New Payee Registration | Mobile / Internet | SMS OTP | 6-digit OTP | Always |
| [Other Transaction Type] | [Channel] | [Channel] | [Mechanism] | [Threshold] |

### 5.3 Channel Independence Validation

*Document the technical basis for asserting that the verification channel is independent of the initiation channel.*

| Control | Implementation | Independence Basis |
|---|---|---|
| SMS OTP delivery | [Telco/SMS Gateway Provider Name] API, separate from app infrastructure | SMS delivered via [Telco] mobile network, independent of internet banking infrastructure |
| Push Notification | [Push Notification Service, e.g., Firebase/APNs] with separate app signing | Uses OS-level notification channel, not in-app communication |
| Hardware Token | [Token Provider, e.g., RSA SecurID] physical device | Fully out-of-band; no internet connectivity required |
| Email OTP | [Email Service Provider] with dedicated domain | Separate credential set from banking portal |

---

## 6. Independent Channel Verification

### 6.1 Independent Channel Control Design

*Describe the design principles and security architecture of the independent channel verification system.*

The independent channel verification mechanism for [Organization Name] is designed to satisfy the following security properties:

- **Channel Separation:** The verification channel operates on a separate network path, system, and credential set from the transaction initiation channel, ensuring that compromise of the primary channel does not automatically compromise the verification channel.
- **Binding to Registered Identity:** Verification is delivered exclusively to the customer's [pre-registered mobile number / email / hardware device] on record, validated during customer onboarding.
- **Time-Bound Validity:** Verification codes expire after [X] minutes, limiting the window of opportunity for interception or replay attacks.
- **Single Use:** Each verification code is valid for a single transaction only and is invalidated upon use or expiry.
- **Rate Limiting and Lockout:** A maximum of [X] failed verification attempts is permitted before the transaction is cancelled and the account flagged for review.

### 6.2 Threat Scenarios and Control Mitigations

*Map identified threat scenarios to the specific independent channel controls that mitigate them.*

| Threat Scenario | Likelihood | Impact | Mitigating Control | Residual Risk |
|---|---|---|---|---|
| Man-in-the-Browser (MitB) attack compromises primary channel session | [High/Medium/Low] | High | Independent SMS/OTP channel unaffected by browser compromise | [Low/Medium] |
| Man-in-the-Middle (MitM) interception of transaction data | [Medium] | High | Transaction details echoed in OTP message for customer validation | [Low] |
| SIM Swap fraud — attacker gains control of customer mobile number | [Medium] | High | SIM swap detection via [Telco API / Internal Control]; delay on new SIM | [Medium] |
| OTP phishing — customer deceived into sharing OTP | [High] | High | Customer education; OTP messages include "DO NOT SHARE" warning | [Medium] |
| Replay attack — OTP intercepted and reused | [Low] | High | Single-use OTP with [X]-minute expiry | [Low] |
| [Other Threat] | [Rating] | [Rating] | [Control] | [Residual] |

---

## 7. Findings and Ratings

### 7.1 Summary of Findings

*Provide an executive summary of the key findings from this assessment.*

The assessment of [Organization Name]'s transaction verification flow against RMiT Clause 12.5 requirements identified **[X] findings**, rated as follows:

| Rating | Count | Description |
|---|---|---|
| **Critical** | [X] | Control failure or absence presenting immediate regulatory or operational risk |
| **High** | [X] | Significant gap requiring remediation within [e.g., 30 days] |
| **Medium** | [X] | Moderate gap requiring remediation within [e.g., 90 days] |
| **Low** | [X] | Minor improvement opportunity; advisory in nature |
| **Informational** | [X] | Observation for awareness; no action required |

**Overall Compliance Rating:** [Compliant / Substantially Compliant / Partially Compliant / Non-Compliant]

### 7.2 Detailed Findings

*Document each finding with sufficient detail to support remediation and audit trail requirements.*

#### Finding [F-001]

| Field | Details |
|---|---|
| **Finding ID** | F-001 |
| **Rating** | [Critical / High / Medium / Low] |
| **RMiT Clause** | 12.5 |
| **Affected System / Process** | [System or Process Name] |
| **Finding Description** | [Detailed description of the gap, weakness, or non-conformance observed] |
| **Evidence Reference** | [Reference to supporting evidence in Section 8, e.g., EV-003] |
| **Risk Impact** | [Description of the risk if not remediated] |
| **Root Cause** | [e.g., Design gap / Configuration error / Operational deviation / Resource constraint] |
| **Recommendation** | [Specific, actionable remediation step — see Section 9 for full recommendations] |
| **Target Remediation Date** | [Date] |
| **Responsible Owner** | [Name / Role] |

---

#### Finding [F-002]

| Field | Details |
|---|---|
| **Finding ID** | F-002 |
| **Rating** | [Rating] |
| **RMiT Clause** | [Clause] |
| **Affected System / Process** | [System or Process Name] |
| **Finding Description** | [Description] |
| **Evidence Reference** | [Evidence ID] |
| **Risk Impact** | [Impact description] |
| **Root Cause** | [Root cause] |
| **Recommendation** | [Recommendation] |
| **Target Remediation Date** | [Date] |
| **Responsible Owner** | [Name / Role] |

*[Replicate finding block for each additional finding]*

### 7.3 Control Effectiveness Summary

*Rate the effectiveness of each key control reviewed during this assessment.*

| Control | Design Adequacy | Operating Effectiveness | Overall Rating | Finding Reference |
|---|---|---|---|---|
| Independent channel (SMS OTP) for fund transfers | [Adequate / Inadequate] | [Effective / Ineffective / Partially Effective] | [Satisfactory / Unsatisfactory] | [F-XXX or N/A] |
| OTP expiry and single-use enforcement | [Adequate / Inadequate] | [Effective / Ineffective] | [Satisfactory / Unsatisfactory] | [F-XXX or N/A] |
| New payee verification workflow | [Adequate / Inadequate] | [Effective / Ineffective] | [Satisfactory / Unsatisfactory] | [F-XXX or N/A] |
| Transaction audit logging completeness | [Adequate / Inadequate] | [Effective / Ineffective] | [Satisfactory / Unsatisfactory] | [F-XXX or N/A] |
| Fraud monitoring integration | [Adequate / Inadequate] | [Effective / Ineffective] | [Satisfactory / Unsatisfactory] | [F-XXX or N/A] |
| [Additional Control] | [Rating] | [Rating] | [Rating] | [Ref] |

---

## 8. Evidence Reviewed

*List all evidence items reviewed during this assessment. Each item should be traceable to a specific finding or control validation.*

| Evidence ID | Description | Source System / Location | Date / Period Covered | Reviewed By | Notes |
|---|---|---|---|---|---|
| EV-001 | Transaction audit log extract — [Transaction Type] | [System Name] | [Date Range] | [Reviewer Name] | [e.g., Full population / Sample of [X] records] |
| EV-002 | OTP delivery confirmation logs | [SMS Gateway / Auth Platform] | [Date Range] | [Reviewer Name] | [Notes] |
| EV-003 | Authentication system configuration screenshots | [System Name] — [Environment] | [Date of capture] | [Reviewer Name] | [Notes] |
| EV-004 | Transaction flow architecture diagram | [Document Repository / SharePoint Path] | Version [X], dated [Date] | [Reviewer Name] | [Notes] |
| EV-005 | Penetration test report (if applicable) | [Vendor / Internal Team] | [Date] | [Reviewer Name] | Ref: [Report ID] |
| EV-006 | Prior assessment report | [Document ID] | [Date] | [Reviewer Name] | Used as baseline comparison |
| EV-007 | Interview notes — [Interviewee Role] | [Name, Title] | [Interview Date] | [Reviewer Name] | Notes filed at [Location] |
| EV-008 | System change request / approval record (if triggered by change event) | [Change Management System] | [Date] | [Reviewer Name] | Change Ref: [ID] |
| [EV-XXX] | [Description] | [Source] | [Period] | [Reviewer] | [Notes] |

---

## 9. Recommendations

### 9.1 Summary of Recommendations

*Provide actionable, prioritized recommendations to address findings and strengthen the transaction verification control environment.*

| Rec. ID | Priority | Finding Ref. | Recommendation | Responsible Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| R-001 | [Critical/High/Medium/Low] | F-001 | [Concise recommendation statement] | [Name / Role] | [Date] | [Open / In Progress / Closed] |
| R-002 | [Priority] | F-002 | [Recommendation] | [Owner] | [Date] | [Status] |
| R-003 | [Priority] | [Ref] | [Recommendation] | [Owner] | [Date] | [Status] |
| [R-XXX] | [Priority] | [Ref] | [Recommendation] | [Owner] | [Date] | [Status] |

### 9.2 Detailed Recommendations

#### Recommendation R-001: [Recommendation Title]

*Provide a detailed description of the recommended action, including implementation guidance and expected outcome.*

- **Priority:** [Critical / High / Medium / Low]
- **Finding Reference:** [F-XXX]
- **Recommendation:** [Full description of recommended action. Include specific configuration changes, process modifications, or policy updates required.]
- **Expected Outcome:** [What will be achieved upon implementation, including the specific control gap or risk that will be addressed.]
- **Implementation Steps:**
  1. [Step 1]
  2. [Step 2]
  3. [Step 3]
- **Success Criteria:** [How completion and effectiveness of the remediation will be verified]
- **Responsible Owner:** [Name], [Title], [Department]
- **Target Completion Date:** [Date]

---

#### Recommendation R-002: [Recommendation Title]

- **Priority:** [Priority]
- **Finding Reference:** [F-XXX]
- **Recommendation:** [Description]
- **Expected Outcome:** [Outcome]
- **Implementation Steps:**
  1. [Step 1]
  2. [Step 2]
- **Success Criteria:** [Criteria]
- **Responsible Owner:** [Name / Role]
- **Target Completion Date:** [Date]

*[Replicate recommendation block for each additional recommendation]*

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix — Transaction Flow Documentation and Control

*Defines accountability for the activities associated with maintaining and reviewing transaction flow documentation and independent channel controls.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | [Dept Head, e.g., Head of Digital Channels] | [IT Security / CISO] | [Compliance / Risk] | [Technology Operations] | [Internal Audit] | [Fraud Management] |
|---|---|---|---|---|---|---|
| Maintain transaction flow documentation | R | C | C | R | I | I |
| Approve transaction flow documentation | A | C | C | I | I | I |
| Design independent channel controls | C | R | C | R | I | I |
| Implement and configure verification systems | I | C | I | R | I | I |
| Conduct periodic assessment (quarterly) | R | C | R | C | I | I |
| Review and validate findings | A | R | R | C | C | C |
| Approve remediation plans | A | R | A | C | I | I |
| Implement remediation actions | I | C | I | R | I | I |
| Verify remediation effectiveness | I | C | R | I | R | I |
| Report to Senior Management / Board | A | C | R | I | R | I |
| Submit evidence to regulators (BNM) | I | I | R | I | C | I |
| Monitor fraud alerts from transaction flow | I | I | I | C | I | R |

### 10.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Document Owner | [Name] | [Department] | [Email] |
| Primary Author / Assessor | [Name] | [Department] | [Email] |
| IT Security Lead | [Name] | Information Security | [Email] |
| Compliance Officer | [Name] | Risk & Compliance | [Email] |
| Technology Operations Lead | [Name] | Technology | [Email] |
| Internal Audit Contact | [Name] | Internal Audit | [Email] |

---

## 11. Review and Approval

### 11.1 Review Cycle

This document shall be reviewed:

- **Periodically:** Quarterly, or as scheduled in [Organization Name]'s Compliance Calendar;
- **Event-Triggered:** Upon any material change to the transaction processing system, independent channel mechanism, or authentication platform;
- **Post-Incident:** Following any security incident or fraud event affecting the transaction verification flow;
- **Regulatory Request:** Upon request from BNM or other relevant regulatory authority.

### 11.2 Version History

| Version | Date | Author | Change Description | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document creation | [Approver Name] |
| [1.1] | [Date] | [Author Name] | [Description of changes, e.g., Updated OTP expiry threshold per new security standard] | [Approver Name] |
| [2.0] | [Date] | [Author Name] | [Major revision description] | [Approver Name] |

### 11.3 Approval Sign-Off

*This document requires formal sign-off from the following roles prior to publication and submission as regulatory evidence.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner / Department Head | [Name], [Title] | _________________________ | [Date] |
| Chief Information Security Officer (CISO) / Head of IT Security | [Name], [Title] | _________________________ | [Date] |
| Chief Risk Officer / Head of Compliance | [Name], [Title] | _________________________ | [Date] |
| Chief Technology Officer (CTO) / Head of Technology | [Name], [Title] | _________________________ | [Date] |
| Internal Audit (for noted findings) | [Name], [Title] | _________________________ | [Date] |

---

## 12. References

### 12.1 Regulatory References

| Reference | Document Title | Issuing Authority | Version / Date | Relevant Clause(s) |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Effective Date of RMiT] | **Clause 12.5** — Independent channel for transaction verification |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Effective Date] | [Additional Clause, e.g., Clause 10.3 — Strong Customer Authentication] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | 2010, amended [Year] | [Section] — Processing and protection of customer transaction data |
| BNM/RH/PD 029-9 | [Other BNM Policy, e.g., Electronic Know-Your-Customer] | Bank Negara Malaysia | [Date] | [Section] |
| [MS ISO/IEC 27001] | Information Security Management Systems | SIRIM / ISO | [Version] | [Clause — if applicable] |

### 12.2 Internal References

| Document ID | Document Title | Owner | Location |
|---|---|---|---|
| [Doc ID] | Information Security Policy | [Owner] | [Document Repository Path] |
| [Doc ID] | Authentication and Access Control Standard | [Owner] | [Path] |
| [Doc ID] | Fraud Risk Management Policy | [Owner] | [Path] |
| [Doc ID] | Technology Change Management Procedure | [Owner] | [Path] |
| [Doc ID] | Incident Management and Response Plan | [Owner] | [Path] |
| [Doc ID] | Data Retention and Archival Policy | [Owner] | [Path] |

---

## 13. Appendices

### Appendix A — Transaction Flow Diagram

*Attach or embed the end-to-end transaction verification flow diagram below. The diagram must clearly illustrate: (1) the primary initiation channel, (2) the point at which the independent verification channel is engaged, (3) the verification response path, and (4) the final authorization and settlement path. Diagrams should be produced using [Organization Name]'s approved diagramming tool, e.g., draw.io / Visio / Lucidchart, and version-controlled.*

**[ATTACH: Transaction Flow Diagram — [Transaction Type] — Version [X] — Dated [Date]]**

**[ATTACH: Transaction Flow Diagram — [Additional Transaction Type] — Version [X] — Dated [Date]]**

---

### Appendix B — Control Testing Evidence

*Attach screenshots, log extracts, or test results that provide direct evidence of independent channel controls operating as described in Section 5 and Section 6.*

| Evidence Item | Description | File Name / Reference |
|---|---|---|
| B-01 | Screenshot: OTP delivery confirmation for [Transaction Type] | [Filename.png / EV-002] |
| B-02 | Log extract: Authentication platform showing independent channel verification events | [Filename.csv / EV-001] |
| B-03 | Screenshot: OTP expiry enforcement — expired OTP rejected | [Filename.png] |
| B-04 | Screenshot: Rate limiting — account lockout after [X] failed OTP attempts | [Filename.png] |
| [B-XX] | [Description] | [Reference] |

---

### Appendix C — Findings Tracking Register

*A consolidated register of all findings from this and prior assessments, maintained as a living record for management review and regulatory reference.*

| Finding ID | Assessment Date | RMiT Clause | Rating | Description | Owner | Target Date | Completion Date | Status |
|---|---|---|---|---|---|---|---|---|
| F-001 | [Date] | 12.5 | [Rating] | [Summary] | [Owner] | [Date] | [Date or Blank] | [Open/Closed] |
| F-002 | [Date] | [Clause] | [Rating] | [Summary] | [Owner] | [Date] | [Date or Blank] | [Open/Closed] |
| [Prior finding carried forward] | [Prior Date] | [Clause] | [Rating] | [Summary] | [Owner] | [Date] | [Date or Blank] | [Status] |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Independent Channel** | A communication or authentication channel that is technically and operationally separate from the primary transaction initiation channel, such that compromise of one does not affect the other |
| **OTP (One-Time Password)** | A single-use, time-limited numeric or alphanumeric code used for transaction verification |
| **TAC (Transaction Authorisation Code)** | As defined in BNM guidelines; a unique code generated to authorise a specific transaction |
| **MFA (Multi-Factor Authentication)** | Authentication requiring two or more verification factors: something you know, something you have, something you are |
| **MitB (Man-in-the-Browser)** | An attack where malware intercepts and manipulates web transactions within the browser |
| **MitM (Man-in-the-Middle)** | An attack where a threat actor intercepts communications between two parties |
| **RMiT** | Risk Management in Technology — BNM Policy Document governing technology risk management for financial institutions |
| **RACI** | Responsibility Assignment Matrix: Responsible, Accountable, Consulted, Informed |
| **SIM Swap** | A fraudulent technique where an attacker convinces a telco to transfer a victim's phone number to a new SIM card controlled by the attacker |
| **[Additional Term]** | [Definition] |

---

### Appendix E — Change Event Log (For Event-Triggered Reviews)

*Complete this appendix only when this document is produced or updated as a result of a specific system change or incident event.*

| Field | Details |
|---|---|
| **Change / Event Reference** | [Change Request ID / Incident Report ID] |
| **Event Description** | [Brief description of the change or incident that triggered this review] |
| **Event Date** | [Date] |
| **Systems Affected** | [System names] |
| **Impact on Transaction Verification Flow** | [Description of how the event affected or potentially affected the transaction flow] |
| **Assessment Trigger Date** | [Date this assessment was initiated] |
| **Post-Event Compliance Status** | [Compliant / Non-Compliant — describe] |

---

*End of Document*

---

> **Document Classification: CONFIDENTIAL**
> This document contains sensitive operational and compliance information belonging to [Organization Name]. Retention, disposal, and access must comply with [Organization Name]'s Information Classification and Handling Policy. Disposal by secure shredding (physical) or certified deletion (electronic).