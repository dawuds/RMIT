# Transaction Verification Procedure

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

> **Document Control Notice:** This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This document must be reviewed and updated at least annually or upon any significant change to technology systems, regulatory requirements, or organizational structure.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory Framework and References](#3-regulatory-framework-and-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Transaction Risk Classification](#5-transaction-risk-classification)
6. [Out-of-Band Verification Process Flow](#6-out-of-band-verification-process-flow)
7. [Roles and Responsibilities (RACI)](#7-roles-and-responsibilities-raci)
8. [Tools and Systems Used](#8-tools-and-systems-used)
9. [Escalation Procedures](#9-escalation-procedures)
10. [Exception Handling and Override Management](#10-exception-handling-and-override-management)
11. [Audit Logging and Evidence Retention](#11-audit-logging-and-evidence-retention)
12. [Review and Update History](#12-review-and-update-history)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*Provide a concise statement of why this document exists, the problem it addresses, and its intended outcome. Reference the regulatory obligation that necessitates this procedure.*

This procedure establishes the mandatory process for performing **out-of-band (OOB) verification** of high-value and high-risk transactions initiated through digital and electronic channels at [Organization Name]. Out-of-band verification requires the use of a separate, independent communication channel to authenticate and confirm a transaction, thereby preventing fraudulent activity, unauthorized access, and transaction manipulation.

This document ensures [Organization Name] meets its obligations under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.5**, which mandates robust authentication and verification controls for transactions that carry elevated financial or operational risk.

The objectives of this procedure are to:

- Define clear criteria for classifying transactions as high-value or high-risk, triggering mandatory OOB verification.
- Specify the step-by-step operational process for conducting OOB verification across all applicable channels and customer segments.
- Assign accountable roles and responsibilities to ensure consistent application of verification controls.
- Establish escalation paths for failed, suspicious, or inconclusive verification outcomes.
- Provide an auditable trail of verification activities that supports regulatory examination and internal audit.

---

## 2. Scope and Applicability

*Describe who and what this procedure applies to. Be explicit about which systems, channels, products, customer types, and organizational units are in scope. Also state what is explicitly out of scope to avoid ambiguity during audits.*

### 2.1 In-Scope

This procedure applies to:

**Channels:**
- Internet banking (retail and corporate)
- Mobile banking applications (iOS and Android)
- [Organization Name] API banking interfaces and open banking endpoints
- Telephone banking (IVR and agent-assisted)
- ATM networks operated by or on behalf of [Organization Name]
- Branch-initiated electronic transactions on behalf of customers

**Transaction Types:**
- Domestic interbank fund transfers (IBG, RENTAS, DuitNow)
- International wire transfers and remittances
- New payee or beneficiary registration above defined thresholds
- High-value bill payments
- Changes to transaction limits
- Loan drawdowns and credit facility activations above defined thresholds
- Account maintenance actions that affect transaction authorization (e.g., mobile number change, token re-provisioning)

**Customer Segments:**
- Retail (individual) customers
- Small and Medium Enterprise (SME) customers
- Corporate and Institutional customers

**Organizational Units:**
- [Operations Department / Transaction Banking]
- [Information Technology / Digital Banking]
- [Fraud Management Unit]
- [Compliance and Regulatory Affairs]
- [Customer Service and Contact Centre]
- [Internal Audit]

### 2.2 Out of Scope

The following are explicitly **not** covered by this procedure:

- Intrabank transfers between accounts held by the same customer within [Organization Name], unless exceeding defined high-value thresholds.
- Physical cash transactions conducted at teller counters without a digital channel component.
- Automated recurring standing instructions that have been pre-authorized through a separate OOB verification event.
- Internal treasury and interbank transactions conducted between financial institutions.

*Note: Transactions initially out of scope may become in scope if risk scoring models flag them as high-risk. Refer to Section 5 for risk classification criteria.*

---

## 3. Regulatory Framework and References

*List all regulatory instruments, BNM policy documents, and internal policies that provide the legal and policy basis for this procedure. This section anchors the document to its compliance obligations.*

### 3.1 Primary Regulatory Basis

| Reference | Document | Clause / Section | Requirement Summary |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 12.5** | Mandates out-of-band authentication and verification for high-value and high-risk transactions |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 12.1 – 12.4 | Authentication framework, multi-factor authentication requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11 | Cyber risk management and incident response |
| BNM | Guidelines on Electronic Money (e-money) | [Relevant Section] | [Summary] |
| BNM | Policy Document on Anti-Money Laundering | [Relevant Section] | Transaction monitoring obligations |

### 3.2 Supporting Regulations and Standards

| Reference | Document | Relevance |
|---|---|---|
| PDPA 2010 | Personal Data Protection Act 2010 | Customer data handling during verification |
| NACSA | National Cyber Security Agency Guidelines | Secure communication channel requirements |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | Where card transactions are in scope |
| ISO/IEC 27001:2022 | Information Security Management | Underpinning security controls |
| NIST SP 800-63B | Digital Identity Guidelines | Authentication assurance levels |

### 3.3 Internal Policy Linkages

| Internal Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy governing security controls |
| Authentication and Access Management Policy | [Doc ID] | Authentication framework policy |
| Fraud Management Policy | [Doc ID] | Fraud detection and response obligations |
| Data Classification and Handling Policy | [Doc ID] | Governs handling of verification data |
| Incident Response Procedure | [Doc ID] | Escalation to IR when verification indicates compromise |
| Customer Due Diligence Procedure | [Doc ID] | Identity verification linkage |

---

## 4. Definitions and Abbreviations

*Define all technical terms, regulatory terms, and abbreviations used in this document. This ensures consistent interpretation across departments and is essential for audit clarity.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Out-of-Band (OOB) Verification** | An authentication or verification process that uses a communication channel that is independent and separate from the channel through which the transaction was initiated. The independence of the two channels is critical to the security control. |
| **High-Value Transaction** | Any transaction that meets or exceeds the monetary thresholds defined in Section 5.1 of this procedure, which require mandatory OOB verification before processing. |
| **High-Risk Transaction** | Any transaction flagged by [Organization Name]'s risk scoring engine or rule-based fraud detection system as presenting an elevated probability of fraud, money laundering, or unauthorized access, regardless of monetary value. |
| **Verification Channel** | The independent communication channel used to deliver and receive the OOB verification code or confirmation. This includes, but is not limited to, SMS OTP, voice call, or registered hardware token. |
| **Transaction Channel** | The primary channel through which the customer initiates the transaction (e.g., internet banking portal, mobile app). |
| **OTP (One-Time Password)** | A single-use, time-limited numeric or alphanumeric code sent to a customer's registered device or number to authorize a specific transaction. |
| **Step-Up Authentication** | The process of requiring a higher level of authentication assurance for a specific transaction, triggered when risk thresholds are met. |
| **Friction** | Deliberate additional steps in the transaction flow intended to detect and deter automated attacks while providing a human decision point for verification. |
| **Trusted Beneficiary** | A payee previously registered and OOB-verified by the customer, which may be subject to reduced verification friction for subsequent transactions within defined limits. |
| **Risk Score** | A numerical value assigned by the fraud management system to a transaction, based on behavioral analytics, device fingerprinting, transaction history, and other risk factors. |
| **Transaction Hold** | A temporary suspension of transaction processing pending completion of OOB verification or manual review. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| OOB | Out-of-Band |
| OTP | One-Time Password |
| MFA | Multi-Factor Authentication |
| IBG | Interbank GIRO |
| RENTAS | Real-time Electronic Transfer of Funds and Securities |
| AML | Anti-Money Laundering |
| FMU | Fraud Management Unit |
| IVR | Interactive Voice Response |
| RACI | Responsible, Accountable, Consulted, Informed |
| SLA | Service Level Agreement |
| TAT | Turnaround Time |
| SOC | Security Operations Centre |
| CISO | Chief Information Security Officer |

---

## 5. Transaction Risk Classification

*This section defines the criteria that determine whether a transaction requires OOB verification. Thresholds must be reviewed annually and approved by the relevant risk committee. Insert actual approved thresholds once established.*

### 5.1 High-Value Transaction Thresholds

*Insert the approved monetary thresholds below. These thresholds must be reviewed annually by the Risk Management Committee and aligned to current fraud trends and regulatory guidance.*

| Transaction Type | Channel | High-Value Threshold (MYR) | Verification Required |
|---|---|---|---|
| Domestic IBG / DuitNow transfer | Internet Banking | ≥ [MYR Amount] | OOB Verification (SMS OTP + Confirmation) |
| Domestic IBG / DuitNow transfer | Mobile Banking | ≥ [MYR Amount] | OOB Verification (Push Notification + PIN) |
| International Wire Transfer | Internet Banking | ≥ [MYR Amount] | OOB Verification (SMS OTP + Call-Back) |
| International Wire Transfer | Mobile Banking | ≥ [MYR Amount] | OOB Verification (Push Notification + Call-Back) |
| New Payee Registration | All Digital Channels | Any amount | OOB Verification (SMS OTP) |
| Bill Payment | Internet Banking | ≥ [MYR Amount] | OOB Verification (SMS OTP) |
| Loan Drawdown | Internet Banking | ≥ [MYR Amount] | OOB Verification + Manual Review |
| Transaction Limit Change | All Digital Channels | N/A | OOB Verification (SMS OTP) |
| Corporate Bulk Payment | Corporate Internet Banking | ≥ [MYR Amount] | Dual Authorization + OOB Verification |

### 5.2 High-Risk Transaction Triggers

*The following conditions, as identified by the fraud management and transaction monitoring systems, trigger OOB verification regardless of transaction value.*

**Behavioral Risk Triggers:**
- Transaction initiated from a new, unregistered, or recently registered device.
- Transaction initiated from an IP address or geolocation inconsistent with the customer's historical profile.
- Multiple failed authentication attempts preceding the transaction request.
- Transaction velocity anomaly: frequency or cumulative value exceeds customer's established behavioral baseline within a defined period.
- Dormant account activity: account has had no transactions for ≥ [X] days.
- Login and transaction initiated from a Tor exit node, VPN, or anonymization proxy.
- Transaction initiated within [X] minutes of a change to authentication credentials, registered mobile number, or device.

**Transaction Pattern Risk Triggers:**
- Structuring pattern detected: multiple transactions just below reporting thresholds within a defined period.
- First-time transfer to a new payee that has been flagged on an AML watchlist.
- Transaction to a beneficiary account associated with previous fraud reports in the fraud intelligence database.
- Rapid fund movement: funds received and immediately transferred out within [X] hours.

**Account Maintenance Risk Triggers:**
- Request to change the registered mobile number used for OTP delivery.
- Request to deregister or re-provision a hardware or software authentication token.
- Reset of internet/mobile banking credentials from a new device.

### 5.3 Risk Score Decision Matrix

*The fraud management system assigns a composite risk score to each transaction. The following matrix defines the action to be taken based on the score.*

| Risk Score Range | Risk Category | Required Action | Processing Mode |
|---|---|---|---|
| 0 – [Score] | Low | Standard processing | Straight-through processing (STP) |
| [Score] – [Score] | Medium | OOB Verification (SMS OTP) | Held pending verification |
| [Score] – [Score] | High | OOB Verification (Call-Back or Push) | Held pending verification |
| [Score] – [Score] | Critical | Manual review by FMU + OOB Verification | Held pending FMU clearance |
| Watchlist Match | Blocked | Transaction blocked; AML team notified | Blocked; incident logged |

---

## 6. Out-of-Band Verification Process Flow

*This is the core operational section. Document each step in sufficient detail to allow consistent execution by all staff involved, regardless of prior experience. Include system names, timeouts, and decision points.*

### 6.1 OOB Verification Process Overview

*The following diagram description illustrates the end-to-end OOB verification flow. Replace this with an actual process diagram in the final document.*

```
[Customer Initiates Transaction]
          |
          v
[Transaction Monitoring System Evaluates Risk]
          |
     +----+----+
     |         |
  Low Risk   Medium/High/Critical Risk
     |         |
     v         v
  [STP]   [Transaction Hold Triggered]
              |
              v
     [OOB Verification Channel Selected]
     (SMS OTP / Push Notification / Call-Back / Manual Review)
              |
              v
     [Verification Delivered to Customer]
              |
         +----+----+
         |         |
    Verified    Not Verified / Timeout / Rejected
         |         |
         v         v
   [Transaction   [Escalation Procedure]
    Released]     (See Section 9)
```

### 6.2 Step-by-Step Procedure

#### Step 1: Transaction Initiation and Pre-Processing

| Step | Action | Actor | System | Notes |
|---|---|---|---|---|
| 1.1 | Customer initiates transaction through digital channel | Customer | [Internet/Mobile Banking Platform] | Standard authentication (MFA) already completed at login |
| 1.2 | Transaction details submitted to transaction processing system | [Platform Name] | [Core Banking System] | Details: amount, payee, account, timestamp |
| 1.3 | Transaction forwarded to real-time risk scoring engine | [Platform Name] | [Fraud Management System – Name] | Automatic, no human intervention |
| 1.4 | Risk score computed and risk category assigned | Fraud Management System | [Fraud Management System – Name] | See Section 5.3 for score thresholds |
| 1.5 | If Low Risk: proceed to STP; if Medium/High/Critical: proceed to Step 2 | System | Automated | |

#### Step 2: Transaction Hold and OOB Channel Selection

| Step | Action | Actor | System | Notes |
|---|---|---|---|---|
| 2.1 | Transaction placed on hold; processing suspended | [Platform Name] | [Core Banking System] | Customer sees pending/verification-required status |
| 2.2 | Customer notified on transaction channel that verification is required | [Platform Name] | [Internet/Mobile Banking Platform] | Display message: "[Standard notification message text]" |
| 2.3 | System retrieves customer's registered OOB channel details | Automated | [Customer Information System / CRM] | Registered mobile number, push notification token, or hardware token serial |
| 2.4 | OOB channel selected based on customer type and available channels | Automated | [Fraud Management System] | Priority order: [1. Push Notification → 2. SMS OTP → 3. Call-Back] |
| 2.5 | OTP or verification request generated with [X]-minute expiry | Automated | [OTP Generation System] | Time-limited; single-use; transaction-bound (includes amount and last 4 digits of payee account) |

#### Step 3: OOB Verification Delivery

##### 3a: SMS OTP Delivery

| Step | Action | Actor | System | Notes |
|---|---|---|---|---|
| 3a.1 | OTP SMS dispatched to customer's registered mobile number | Automated | [SMS Gateway – Name] | Message must include: amount, partial payee account, OTP, and expiry time |
| 3a.2 | SMS delivery receipt confirmed | Automated | [SMS Gateway – Name] | Log delivery status; if failed, proceed to fallback channel |
| 3a.3 | Customer receives SMS and enters OTP in transaction channel | Customer | [Internet/Mobile Banking Platform] | |
| 3a.4 | OTP validated against transaction context | Automated | [OTP Validation System] | Validate: OTP value, expiry, transaction binding, single-use flag |

##### 3b: Push Notification Delivery (Mobile Banking)

| Step | Action | Actor | System | Notes |
|---|---|---|---|---|
| 3b.1 | Push notification dispatched to customer's registered mobile device | Automated | [Push Notification Service – Name] | Notification displays: amount, partial payee account, and Approve/Reject buttons |
| 3b.2 | Customer reviews transaction details on mobile device | Customer | [Mobile Banking App] | Customer must review full transaction details before approving |
| 3b.3 | Customer taps Approve or Reject | Customer | [Mobile Banking App] | Response cryptographically signed by mobile device |
| 3b.4 | Approval/rejection received and validated | Automated | [Mobile Banking Backend] | |

##### 3c: Voice Call-Back (High-Risk / High-Value)

| Step | Action | Actor | System | Notes |
|---|---|---|---|---|
| 3c.1 | Automated or agent-initiated call placed to customer's registered phone number | [Contact Centre / Automated Dialler] | [IVR System / Contact Centre Platform] | Used for Critical-risk transactions or as fallback |
| 3c.2 | Customer identity verified by agent or IVR using pre-agreed security questions / knowledge-based authentication | Agent / Customer | [Contact Centre Platform] | Agent must follow the Customer Identity Verification Script (Appendix B) |
| 3c.3 | Transaction details read to customer verbatim: amount, payee name, account number last 4 digits, date | Agent / IVR | [Contact Centre Platform] | Customer must explicitly confirm all details |
| 3c.4 | Customer provides verbal confirmation (Yes/No) or IVR DTMF confirmation | Customer | [IVR / Call Recording System] | Call is recorded; recording retained per Section 11 |
| 3c.5 | Outcome (Confirmed / Rejected / No Answer) recorded in case management system | Agent | [Case Management System] | |

#### Step 4: Verification Outcome Processing

| Step | Action | Actor | System | Notes |
|---|---|---|---|---|
| 4.1 | **Successful Verification:** Transaction released for processing | Automated | [Core Banking System] | Customer notified via transaction channel and registered email/SMS |
| 4.2 | **Failed Verification (Wrong OTP/Rejection):** Attempt logged; retry offered | Automated | [Platform Name] | Maximum [X] retry attempts within expiry window |
| 4.3 | **Maximum Retries Exceeded:** Transaction declined; account flagged for review | Automated | [Fraud Management System] | FMU notified; customer notified of decline |
| 4.4 | **Timeout (No Response):** Transaction automatically declined after [X] minutes | Automated | [Platform Name] | Customer notified; transaction can be re-initiated |
| 4.5 | **Customer-Initiated Rejection:** Transaction cancelled; FMU alerted if risk score was High/Critical | Automated + FMU | [Fraud Management System] | May indicate fraudulent attempt by third party; proceed to Section 9 |
| 4.6 | All outcomes logged with full transaction details, timestamp, and verification method | Automated | [Audit Log System] | Immutable log; refer to Section 11 |

### 6.3 Corporate Transaction Dual Authorization Procedure

*For corporate customers subject to dual authorization requirements, the following additional steps apply after individual OOB verification is completed.*

| Step | Action | Actor | System | Notes |
|---|---|---|---|---|
| C.1 | First authorizer (Maker) completes OOB verification as per Section 6.2 | Maker (Corporate User) | [Corporate Internet Banking] | Transaction status: Pending Second Authorization |
| C.2 | Second authorizer (Checker) receives notification of pending transaction | Checker (Corporate User) | [Corporate Internet Banking] | Notification via email and in-platform alert |
| C.3 | Checker reviews transaction details independently | Checker | [Corporate Internet Banking] | Checker must not rely solely on Maker's representation |
| C.4 | Checker completes OOB verification using their own registered channel | Checker | [OOB Channel] | Independent OOB verification; separate channel |
| C.5 | Both authorizations recorded; transaction released | Automated | [Core Banking System] | Both verification events logged separately |
| C.6 | If Checker rejects or transaction times out, return to escalation procedure | Checker / System | [Core Banking System] | See Section 9 |

---

## 7. Roles and Responsibilities (RACI)

*This RACI matrix assigns accountability for each key activity in the transaction verification procedure. Ensure role titles match the current organizational structure. Update this matrix whenever organizational changes affect the roles listed.*

**RACI Legend:**
- **R** – Responsible: The role that performs the task.
- **A** – Accountable: The role that is ultimately answerable for the outcome (only one per task).
- **C** – Consulted: Roles that provide input or expertise before the task is completed.
- **I** – Informed: Roles notified of the outcome but not directly involved.

### 7.1 RACI Matrix

| Activity | [Department Head / Owner] | IT / Digital Banking | Fraud Management Unit (FMU) | Compliance | Contact Centre | Internal Audit | Customer |
|---|---|---|---|---|---|---|---|
| Define and maintain transaction risk thresholds | A | C | R | C | I | I | – |
| Operate and maintain fraud management / risk scoring system | I | A/R | C | I | – | I | – |
| Configure OOB channel parameters and OTP expiry settings | A | R | C | C | – | I | – |
| Operate OOB SMS gateway and push notification service | I | A/R | – | – | – | I | – |
| Process Medium-risk OOB verification (automated) | I | A/R | I | – | – | I | R |
| Process High-risk OOB verification (call-back) | I | I | A | I | R | I | R |
| Process Critical-risk transactions (manual review) | A | C | R | C | C | I | I |
| Investigate customer-reported OOB rejection (suspected fraud) | A | C | R | I | C | I | C |
| Block transaction upon confirmed fraud | A | C | R | I | I | I | – |
| File Suspicious Transaction Report (STR) | A | – | C | R | – | I | – |
| Maintain audit logs and evidence | I | A/R | C | C | – | C | – |
| Conduct periodic review of OOB verification procedure | A | C | C | R | C | R | – |
| Training of staff on this procedure | A | C | C | R | R | I | – |
| Report on OOB verification performance metrics | A | R | C | C | I | I | – |

### 7.2 Role Descriptions

| Role | Organizational Unit | Key Responsibilities under this Procedure |
|---|---|---|
| **[Department Head / Procedure Owner]** | [Department Name] | Ultimate accountability for procedure effectiveness, threshold approvals, annual review sign-off |
| **[IT / Digital Banking Manager]** | Information Technology | System configuration, OOB channel availability, platform maintenance, audit log integrity |
| **[Fraud Management Unit (FMU) Lead]** | Risk / Fraud Management | Risk scoring rule management, Critical-risk transaction manual review, fraud investigation, STR filing support |
| **[Compliance Officer]** | Compliance and Regulatory Affairs | Regulatory alignment, policy linkage, STR filing, regulatory examination support |
| **[Contact Centre Manager]** | Customer Service | Oversight of call-back verification execution, agent training, call recording compliance |
| **[Contact Centre Agent]** | Customer Service | Execution of voice call-back verification, identity validation, outcome recording |
| **[Internal Audit]** | Internal Audit | Independent testing of control effectiveness, gap identification, reporting to Audit Committee |

---

## 8. Tools and Systems Used

*Document every technology system that supports the execution of this procedure. Include system names, owners, and a brief description of their role. This section supports IT continuity planning and audit traceability.*

### 8.1 Systems Inventory

| System Name | System Owner | Function in this Procedure | Availability Requirement |
|---|---|---|---|
| [Internet/Mobile Banking Platform – Name] | [IT Department] | Primary transaction initiation channel; displays verification prompts; collects OTP input | 99.9% uptime |
| [Core Banking System – Name] | [IT Department] | Processes and holds transactions pending OOB verification outcome | 99.99% uptime |
| [Fraud Management System – Name] | [FMU / IT] | Real-time risk scoring, rule-based risk flagging, transaction hold trigger | 99.9% uptime |
| [OTP Generation and Validation System – Name] | [IT Department] | Generates time-limited, transaction-bound OTPs; validates customer submissions | 99.9% uptime |
| [SMS Gateway – Name] | [IT Department / Third-party Vendor] | Delivers OTP SMS to customer's registered mobile number | 99.5% uptime; <30 second delivery SLA |
| [Push Notification Service – Name] | [IT Department / Third-party Vendor] | Delivers push notifications to registered mobile devices | 99.5% uptime |
| [Contact Centre Platform – Name] | [Contact Centre / IT] | Manages inbound/outbound call-back verification calls; records calls | 99.5% uptime during business hours |
| [IVR System – Name] | [Contact Centre / IT] | Automated voice call-back for OOB verification | 99.5% uptime |
| [Case Management System – Name] | [FMU / Operations] | Logs manual review cases, outcomes, and investigation actions | 99.0% uptime |
| [Audit Log / SIEM – Name] | [IT / SOC] | Immutable logging of all verification events; supports forensic investigation | 99.9% uptime |
| [Customer Information System / CRM – Name] | [Operations / IT] | Stores and retrieves customer registered OOB channel details | 99.9% uptime |

### 8.2 System Availability and Fallback

*Define what happens when primary systems are unavailable to ensure business continuity while maintaining security controls.*

| Primary System | Fallback Procedure | Responsible Party |
|---|---|---|
| SMS Gateway unavailable | Escalate to voice call-back verification; if call-back also unavailable, suspend transaction and contact customer via registered email to re-initiate | [IT Operations / Contact Centre] |
| Push Notification Service unavailable | Fall back to SMS OTP; if SMS also unavailable, proceed to voice call-back | [IT Operations] |
| Fraud Management System unavailable | Apply blanket OOB verification to ALL transactions above [MYR Amount] until system is restored; incident raised with IT | [IT Operations / FMU] |
| Core Banking System unavailable | Standard IT Business Continuity Plan applies; refer to [BCP Document ID] | [IT Operations] |
| Contact Centre unavailable (call-back) | Defer high-risk transactions; customer notified to contact [Organization Name] via registered channel to re-initiate | [Contact Centre Manager] |

---

## 9. Escalation Procedures

*This section defines how staff should respond when verification outcomes are abnormal, when fraud is suspected, or when system failures prevent normal execution of the procedure.*

### 9.1 Escalation Triggers

| Scenario | Trigger Condition | Initial Action | Escalation Path |
|---|---|---|---|
| **Repeated OTP failures** | Customer fails OTP verification [X] times within a single session | System auto-declines transaction; account flagged | FMU reviews; if fraud suspected, proceed to 9.3 |
| **Customer-initiated rejection** | Customer rejects push notification or verbally rejects call-back | Transaction cancelled; alert sent to FMU | FMU assesses risk; may contact customer proactively |
| **Customer claims no OTP received** | Customer contacts Contact Centre claiming OTP not received | Agent verifies registered mobile number; resend OTP or offer call-back | If discrepancy in registered details, escalate to FMU |
| **Customer claims no transaction initiated** | Customer contacts Contact Centre reporting an OOB verification they did not initiate | Immediately hold all outgoing transactions from account | Escalate to FMU and Incident Response; follow Section 9.3 |
| **High-risk transaction cannot be verified** | Call-back unanswered / SMS undeliverable / push notification failed | Transaction held for [X] hours; attempt alternative OOB channel | After [X] failed attempts, transaction declined; FMU notified |
| **Suspected account takeover** | Combination of: new device + new location + high-value transaction + failed verification | Immediate account suspension | FMU + Incident Response; refer to [IR Procedure Doc ID] |
| **System-wide OOB failure** | SMS gateway or push service down for > [X] minutes | Blanket transaction hold for affected high-risk transactions | IT Incident escalated; [Crisis Management Protocol] activated |

### 9.2 Escalation Tiers and Contact Matrix

| Tier | Condition | Escalate To | Contact Method | Target Response Time |
|---|---|---|---|---|
| **Tier 1** | Standard failed verification (automated handling) | [Fraud Management System] – automated | Automated alert | Immediate (system action) |
| **Tier 2** | Customer-reported fraud suspicion or repeated failures | FMU Analyst on duty | [Ticketing System / Hotline] | ≤ [X] minutes |
| **Tier 3** | Confirmed fraud / account takeover / systemic issue | FMU Lead + [IT Security Manager] | Direct call + ticketing | ≤ [X] minutes |
| **Tier 4** | Significant security incident / regulatory notification threshold met | CISO + [Compliance Officer] + [CEO/COO] | Emergency contact list (Appendix C) | ≤ [X] minutes |
| **Regulatory** | Reportable incident under RMiT / BNM guidelines | Compliance Officer → BNM | Regulatory reporting channels | Per BNM reporting timeline |

### 9.3 Suspected Fraud and Account Compromise Response

Upon receiving a customer report of an unauthorized OOB verification attempt or upon FMU identifying a Critical-risk pattern:

1. **Immediate account protection:** Suspend all outgoing transactions from the affected account(s). Do not re-enable without FMU clearance.
2. **Customer contact:** Attempt to contact the customer via their registered contact details through a channel independent of the suspected compromise.
3. **Evidence preservation:** Preserve all logs related to the incident, including login events, device fingerprints, IP addresses, OOB delivery records, and transaction records. Refer to [Incident Response Procedure – Doc ID].
4. **Case creation:** Create a case in [Case Management System] and assign to an FMU analyst within [X] minutes.
5. **AML / STR assessment:** Compliance to assess whether a Suspicious Transaction Report (STR) is required under the Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLATFPUAA).
6. **Recovery:** Follow customer account recovery procedure in [Account Recovery Procedure – Doc ID].
7. **Post-incident review:** Complete within [X] business days; update fraud rules and thresholds as required.

---

## 10. Exception Handling and Override Management

*Exceptions to this procedure must be managed strictly to prevent the exception process itself from becoming a vulnerability. All exceptions require formal approval and time-bound authorization.*

### 10.1 Permissible Exceptions

*The following circumstances may justify a temporary exception to standard OOB verification requirements. All exceptions must be documented and approved in advance.*

| Exception Scenario | Condition | Approved Alternative Control | Approval Required |
|---|---|---|---|
| Customer registered mobile number is temporarily inaccessible (e.g., overseas travel, lost SIM) | Customer provides advance notification and supporting documentation | Branch walk-in identity verification + manual authorization | [Relevant Department Head] |
| OOB channel system outage | IT declares formal system outage | Blanket transaction suspension OR reduced limits enforced; BCP activated | [IT Manager] + [Department Head] |
| Accessibility requirement (customer with disability unable to use standard OOB channel) | Documented accessibility need | Alternative accessible verification method approved by [Compliance] | [Compliance Officer] |

### 10.2 Exception Process

1. Requestor submits exception request via [Exception Management System / Form Reference] with justification, affected accounts/transactions, proposed alternative control, and requested duration.
2. Exception reviewed and approved by [Relevant Department Head] (Tier 1) and [Compliance Officer] (if regulatory impact).
3. Approved exception documented with: approval date, approver, duration, alternative control, and review date.
4. Exception logged in the exceptions register (Appendix D).
5. Exception must not exceed [X] calendar days without formal renewal.
6. All exceptions reviewed at each quarterly management review meeting.

### 10.3 Override Prohibition

The following actions are **strictly prohibited** and constitute a policy violation:

- Disabling OOB verification requirements for any account without formal exception approval.
- Processing a transaction that has been placed on Critical-risk hold without FMU clearance.
- Accepting verbal or written instruction from a customer to bypass OOB verification without following the exception process.
- Modifying risk score thresholds without approval from [Risk Management Committee].

---

## 11. Audit Logging and Evidence Retention

*All OOB verification events must generate an immutable audit log entry. This section defines the minimum log data requirements and retention periods to support regulatory examination and forensic investigation.*

### 11.1 Mandatory Log Data Elements

Every OOB verification event must capture the following data elements in the audit log:

| Log Field | Description | Example |
|---|---|---|
| `event_id` | Unique identifier for the verification event | UUID |
| `transaction_id` | Unique identifier for the underlying transaction | [Core Banking Transaction Reference] |
| `timestamp` | Date and time of event (UTC + 8 / MYT) | 2025-06-15T14:32:11+08:00 |
| `customer_id` | Masked/tokenized customer identifier | [Tokenized ID – not raw IC/passport] |
| `account_number` | Masked source account number | XXXX-XXXX-1234 |
| `transaction_type` | Type of transaction | IBG Transfer |
| `transaction_amount` | Transaction amount (MYR) | 50,000.00 |
| `payee_account_masked` | Masked destination account | XXXX-XXXX-5678 |
| `risk_score` | System-assigned risk score at time of event | 87 |
| `risk_category` | Risk category assigned | High |
| `oob_channel_used` | OOB channel used for verification | SMS OTP |
| `oob_delivery_status` | Delivery status of OOB message | Delivered |
| `oob_delivery_timestamp` | Time OOB message was delivered | 2025-06-15T14:32:15+08:00 |
| `verification_outcome` | Outcome of the verification | Verified / Failed / Timeout / Rejected |
| `verification_timestamp` | Time of verification outcome | 2025-06-15T14:32:58+08:00 |
| `attempts_count` | Number of OTP entry attempts | 1 |
| `device_fingerprint` | Hashed device identifier | [Hash] |
| `ip_address_masked` | Masked originating IP address | 203.XXX.XXX.45 |
| `agent_id` | If manual (call-back), ID of the Contact Centre agent | [Agent ID] |

### 11.2 Log Integrity Requirements

- Audit logs must be **write-once, tamper-evident** and stored in a system separate from the transaction processing platform.
- Logs must be replicated to [SIEM System Name] in real-time.
- Any modification or deletion of audit log entries is prohibited and constitutes a security incident.
- Log integrity must be verified through cryptographic hashing at minimum on a [daily] basis.

### 11.3 Retention Periods

| Data Type | Minimum Retention Period | Basis |
|---|---|---|
| OOB verification audit logs | 7 years | BNM RMiT, AMLATFPUAA |
| Call recordings (call-back verification) | 7 years | BNM RMiT, Evidence Act 1950 |
| Transaction records | 7 years | Financial Services Act 2013 |
| Exception approvals | 7 years | Internal audit requirement |
| Fraud investigation case files | 7 years from case closure | AMLATFPUAA |
| System configuration change logs | 5 years | BNM RMiT |

### 11.4 Access to Audit Logs

| Role | Access Level | Purpose |
|---|---|---|
| FMU Analyst | Read (own case records) | Fraud investigation |
| FMU Lead | Read (all records) | Oversight and investigation |
| Internal Audit | Read (all records) | Independent audit |
| Compliance Officer | Read (all records) | Regulatory examination support |
| IT Security / SOC | Read (all records) | Security monitoring |
| External Auditor | Read (scoped, supervised) | External audit engagement |
| General IT Staff | No access | – |

---

## 12. Review and Update History

*This section tracks all changes made to this document since its initial issuance. The document owner is responsible for maintaining this table. All changes must be reviewed by Compliance prior to approval.*

### 12.1 Version History

| Version | Date | Author | Reviewed By | Description of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Department] | [Reviewer Name], [Compliance] | Initial issuance |
| [1.1] | [Date] | [Author Name] | [Reviewer Name] | [Description of change, e.g., Updated OTP retry limit from 3 to 5; revised by Risk Committee decision dated DD/MM/YYYY] |
| [2.0] | [Date] | [Author Name] | [Reviewer Name] | [Major revision – e.g., updated to reflect new fraud management system implementation] |

### 12.2 Trigger Events for Unscheduled Review

This procedure must be reviewed and updated, outside of the annual review cycle, upon the occurrence of any of the following:

- A change to BNM RMiT or any other applicable regulation or guideline that affects OOB verification requirements.
- Introduction of a new digital channel, product, or transaction type that falls within the scope of this procedure.
- A significant fraud event or near-miss incident that reveals gaps in the current procedure.
- A change in the technology systems used to execute OOB verification.
- A material change in the organization's risk appetite or fraud risk profile.
- Direction from Internal Audit or an external regulator (e.g., BNM examination finding).

---

## 13. Review and Approval

*Formal sign-off by all accountable parties is required before this document takes effect and at each review cycle.*

### 13.1 Document Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner – [Department Head] | [Full Name] | ________________ | [Date] |
| Reviewed By – Compliance Officer | [Full Name] | ________________ | [Date] |
| Reviewed By – Chief Information Security Officer | [Full Name] | ________________ | [Date] |
| Reviewed By – Head of Risk Management | [Full Name] | ________________ | [Date] |
| Approved By – [Chief Operating Officer / Relevant C-Suite] | [Full Name] | ________________ | [Date] |

### 13.2 Review Schedule

| Review Type | Frequency | Responsible Party | Next Due Date |
|---|---|---|---|
| Scheduled Annual Review | Annual | [Department Head] | [Next Review Date] |
| Risk Threshold Review | Annual (aligned to annual review) or upon trigger event | [FMU Lead] + [Department Head] | [Next Review Date] |
| Regulatory Alignment Check | Annual or upon new regulatory issuance | [Compliance Officer] | [Next Review Date] |
| Technical Controls Review | Annual or upon system change | [IT Manager] | [Next Review Date] |

---

## 14. References

*The following regulatory instruments, standards, and internal documents provide the authoritative basis for this procedure.*

### 14.1 Regulatory and Statutory References

| Reference | Issuing Body | Title | Relevant Section |
|---|---|---|---|
| BNM RMiT | Bank Negara Malaysia | Risk Management in Technology Policy Document | **Clause 12.5** – Out-of-band verification for high-value and high-risk transactions |
| BNM RMiT | Bank Negara Malaysia | Risk Management in Technology Policy Document | Clause 12.1–12.4 – Authentication framework |
| BNM RMiT | Bank Negara Malaysia | Risk Management in Technology Policy Document | Clause 11 – Cyber risk management |
| FSA 2013 | Parliament of Malaysia | Financial Services Act 2013 | Section 47 – Record-keeping obligations |
| AMLATFPUAA 2001 | Parliament of Malaysia | Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 | Section 14 – Suspicious transaction reporting |
| PDPA 2010 | Parliament of Malaysia | Personal Data Protection Act 2010 | Principle 4 – Security principle for personal data |
| Evidence Act 1950 | Parliament of Malaysia | Evidence Act 1950 (as amended) | Admissibility of electronic records and records |

### 14.2 Standards and Frameworks

| Standard | Body | Title | Relevance |
|---|---|---|---|
| ISO/IEC 27001:2022 | ISO/IEC | Information Security Management Systems | Security control framework |
| NIST SP 800-63B | NIST | Digital Identity Guidelines – Authentication and Lifecycle Management | Authenticator assurance levels |
| PCI DSS v4.0 | PCI SSC | Payment Card Industry Data Security Standard | Where card transactions are in scope |

### 14.3 Internal Policy and Procedure Cross-References

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy |
| Authentication and Access Management Policy | [Doc ID] | Authentication controls |
| Fraud Management Policy | [Doc ID] | Fraud risk framework |
| Incident Response Procedure | [Doc ID] | Security incident escalation |
| Business Continuity Plan | [Doc ID] | System outage fallback |
| Account Recovery Procedure | [Doc ID] | Post-compromise recovery |
| Customer Due Diligence Procedure | [Doc ID] | Identity verification linkage |
| AML Compliance Procedure | [Doc ID] | STR filing process |

---

## 15. Appendices

*Appendices provide supplementary operational detail, quick-reference materials, and templates referenced in the main body of this procedure.*

---

### Appendix A: OOB Verification Quick Reference Card

*This condensed reference card is intended for operational staff. It should be printed and kept at workstations used for manual verification activities.*

**Quick Decision Guide – When is OOB Verification Required?**

| IF the transaction… | THEN… |
|---|---|
| Exceeds the high-value threshold in Section 5.1 | Mandatory OOB Verification |
| Is flagged as Medium/High/Critical risk by the fraud system | Mandatory OOB Verification |
| Involves a new payee registration | Mandatory OOB Verification |
| Involves a change to authentication credentials | Mandatory OOB Verification |
| Is low-risk and below threshold | Straight-through processing (no OOB) |

**OOB Channel Priority Order:**
1. Push Notification (Mobile Banking App)
2. SMS OTP
3. Voice Call-Back (for High/Critical risk or fallback)

**Key Contacts:**
- FMU Duty Analyst: [Phone/Extension]
- IT Operations Hotline: [Phone/Extension]
- Compliance Duty Officer: [Phone/Extension]

---

### Appendix B: Contact Centre Agent – Identity Verification Script for Call-Back

*This script must be followed verbatim by Contact Centre agents conducting voice call-back OOB verification. Deviations from this script must be documented.*

---

**Script – Opening:**

> "Good [morning/afternoon/evening], I am calling from [Organization Name]'s Transaction Verification team. My name is [Agent Name] and my agent ID is [Agent ID]. I am calling to verify a transaction on your account. Before I proceed, I need to verify your identity. May I please have your full name?"

**Identity Verification Questions (select [X] from the list below):**

1. "Can you please confirm your IC number / Passport number?"
2. "Can you please confirm the last four digits of your account number?"
3. "Can you please confirm your date of birth?"
4. "Can you please confirm the mobile number registered to your account?"
5. "[Organization Name]-specific security question agreed at account opening]"

**Transaction Detail Confirmation:**

> "I am calling to verify a transaction initiated from your [Internet/Mobile] banking account. The details are as follows:
> - Amount: **[MYR Amount]**
> - To payee: **[Payee Name]** account ending in **[XXXX]**
> - Date/Time: **[Date and Time]**
>
> Did you authorize this transaction?"

**If Customer Confirms (Yes):**

> "Thank you for confirming. Your transaction has been authorized and will be processed. Is there anything else I can help you with today?"

**If Customer Denies (No) or is Uncertain:**

> "Thank you for letting us know. I am placing an immediate hold on this transaction and on your account to protect you. I am escalating this to our security team who will be in contact with you. Please do not share any passwords or OTPs with anyone. Is your current contact number [registered number] the best way for our security team to reach you?"

---

*[Record outcome in Case Management System immediately after the call. Do not end the call without logging the outcome.]*

---

### Appendix C: Emergency Escalation Contact List

*This list contains the contact details for key personnel to be notified in the event of a Tier 3 or Tier 4 escalation under Section 9.2. Maintain in a secure, offline copy accessible during system outages.*

| Role | Name | Primary Contact | Secondary Contact | After-Hours Contact |
|---|---|---|---|---|
| FMU Lead | [Name] | [Phone] | [Email] | [Mobile] |
| CISO | [Name] | [Phone] | [Email] | [Mobile] |
| Compliance Officer | [Name] | [Phone] | [Email] | [Mobile] |
| IT Operations Manager | [Name] | [Phone] | [Email] | [Mobile] |
| Contact Centre Manager | [Name] | [Phone] | [Email] | [Mobile] |
| [CEO / COO – Crisis escalation] | [Name] | [Phone] | [Email] | [Mobile] |
| BNM Regulatory Contact | [As per BNM Incident Reporting Guidelines] | [BNM Hotline] | [BNM Email] | [BNM Emergency] |

*This list must be reviewed quarterly and updated within 5 business days of any personnel change.*

---

### Appendix D: Exception Register Template

*All approved exceptions to this procedure must be recorded in the central exceptions register maintained by [Compliance / Department Owner]. A copy of each approved exception form must be attached.*

| Exception ID | Date Raised | Raised By | Account / Transaction Affected | Reason for Exception | Alternative Control | Approved By | Approval Date | Expiry Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| EX-001 | [Date] | [Name] | [Account/Transaction] | [Reason] | [Control] | [Approver] | [Date] | [Date] | [Date] | Open / Closed |

---

### Appendix E: Performance Metrics and KPIs

*The following metrics must be tracked monthly and reported to the [Risk Management Committee / relevant governance committee] to demonstrate the effectiveness of OOB verification controls.*

| Metric | Description | Target | Reporting Frequency |
|---|---|---|---|
| OOB Verification Success Rate | % of OOB verification requests successfully completed by customers | ≥ [X]% | Monthly |
| False Positive Rate | % of transactions held for OOB that were subsequently confirmed as legitimate | ≤ [X]% | Monthly |
| OTP Delivery Time (SMS) | Average time between OTP dispatch and delivery to customer | ≤ 30 seconds | Monthly |
| OOB System Availability | Uptime of SMS gateway, push notification service, and IVR | ≥ 99.5% | Monthly |
| Fraud Prevented by OOB | Estimated value of fraud prevented by OOB verification intervention | [Trend tracking] | Monthly |
| Transactions Blocked (OOB Failure) | Number of transactions declined due to failed OOB verification | [Trend tracking] | Monthly |
| Escalations to FMU (Tier 2+) | Number of OOB-related cases escalated to FMU | [Trend tracking] | Monthly |
| Exception Count | Number of active exceptions to this procedure | ≤ [X] | Monthly |
| Average Resolution Time (Tier 2) | Average time from FMU escalation to case resolution | ≤ [X] hours | Monthly |

---

### Appendix F: Glossary of OTP and Verification Error Codes

*The following error codes are generated by [OTP Validation System / Platform Name]. Contact Centre agents and FMU analysts must be familiar with these codes when reviewing case records.*

| Error Code | Description | Action Required |
|---|---|---|
| OTP-001 | OTP expired (exceeded [X]-minute validity window) | Customer must re-initiate transaction; new OTP issued |
| OTP-002 | OTP already used (replay attempt) | Log as security event; escalate if repeated |
| OTP-003 | OTP incorrect (mismatch) | Allow retry up to [X] attempts; after max, decline transaction |
| OTP-004 | OTP maximum retries exceeded | Transaction declined; account flagged; FMU notified |
| OTP-005 | OTP request rate limit exceeded | Block further OTP requests for [X] minutes; customer advised to wait |
| OTP-006 | OTP delivery failure (SMS undeliverable) | Trigger fallback channel; log delivery failure |
| OTP-007 | OTP delivery failure (push notification failed) | Trigger SMS OTP fallback |
| TRANS-001 | Transaction hold timeout (customer no response) | Transaction auto-declined; customer notified |
| TRANS-002 | Transaction blocked (watchlist match) | AML team notified; transaction cannot be processed without AML clearance |
| TRANS-003 | Dual authorization timeout (corporate) | Transaction declined; Maker and Checker notified |
| ACCT-001 | Account suspended pending FMU review | No transactions permitted; customer must contact branch or FMU |

---

*End of Document*

---

*This document is the property of [Organization Name] and is classified **Confidential**. It must be stored, handled, and disposed of in accordance with [Organization Name]'s Data Classification and Handling Policy [Doc ID]. Physical copies must be stored in a secured, access-controlled location. Electronic copies must be stored in the designated document management system with access restricted to authorized personnel only. Queries regarding this document should be directed to [Department Head / Document Owner] at [Contact Details].*