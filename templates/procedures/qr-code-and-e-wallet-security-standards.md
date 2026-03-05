# QR Code and E-Wallet Security Standards

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
| **Regulatory Reference** | BNM Risk Management in Technology (RMiT) — Clause 12.9 |

---

> **Document Control Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. All printed copies are considered uncontrolled unless stamped "CONTROLLED COPY."

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [QR Code Security Standards](#4-qr-code-security-standards)
5. [E-Wallet Security Standards](#5-e-wallet-security-standards)
6. [Transaction Security and Fraud Controls](#6-transaction-security-and-fraud-controls)
7. [Customer Authentication and Verification](#7-customer-authentication-and-verification)
8. [Data Protection and Privacy Requirements](#8-data-protection-and-privacy-requirements)
9. [Third-Party and Merchant Risk Management](#9-third-party-and-merchant-risk-management)
10. [Incident Management and Reporting](#10-incident-management-and-reporting)
11. [Exceptions and Escalation Process](#11-exceptions-and-escalation-process)
12. [Compliance and Enforcement](#12-compliance-and-enforcement)
13. [Review and Approval History](#13-review-and-approval-history)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe why this document exists, what problem it addresses, and the overarching objective it supports within the organization's technology risk management framework.*

This document establishes the security standards and procedural requirements governing the use, deployment, and management of QR code payment mechanisms and e-wallet services at [Organization Name]. It is intended to ensure that all QR code and e-wallet operations are conducted in a manner consistent with applicable regulatory obligations, industry best practices, and the organization's internal risk appetite.

These standards are established in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.9**, which mandates that financial institutions implement adequate controls for digital payment channels, including mechanisms to protect the integrity, authenticity, and confidentiality of QR code transactions and e-wallet services.

### 1.2 Scope

*Define the boundaries of this document — which systems, teams, processes, and entities are covered, and which are explicitly excluded.*

These standards apply to:

- All QR code payment systems operated, hosted, or maintained by [Organization Name], including static and dynamic QR code implementations
- All e-wallet products and services offered to retail customers, corporate clients, and merchants
- All internal systems, platforms, APIs, and infrastructure components that generate, process, validate, or store QR code data or e-wallet transaction data
- All employees, contractors, vendors, and third-party service providers who design, develop, operate, or maintain QR code or e-wallet systems on behalf of [Organization Name]
- All merchants and payment acceptance points onboarded to [Organization Name]'s QR payment network

**Out of Scope:**

- Physical point-of-sale (POS) terminal security (refer to [POS Terminal Security Standard, Document ID: TBD])
- Card-based payment security (refer to [Card Payment Security Standard, Document ID: TBD])
- General internet banking security (refer to [Internet Banking Security Policy, Document ID: TBD])

### 1.3 Applicability

| Entity Type | Applicability |
|---|---|
| Retail Banking Division | Applicable |
| Digital Banking and Payments Unit | Applicable |
| Technology and Operations | Applicable |
| Information Security Division | Applicable |
| Risk Management Division | Applicable |
| Compliance Division | Applicable |
| Internal Audit | Applicable (oversight) |
| External Vendors / Third Parties | Applicable (contractual obligation) |
| Corporate and Investment Banking | Applicable where e-wallet services are offered |

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Framework

*Summarize the key regulatory instruments that this document is designed to satisfy. Reference specific clauses and explain their relevance to QR code and e-wallet security.*

[Organization Name] operates within a regulated financial services environment and is subject to the following regulatory requirements relevant to QR code and e-wallet security:

| Regulatory Instrument | Issuing Authority | Relevant Clauses | Applicability |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 12.9 | Mandatory |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Sections 5–7 (Data Principles) | Mandatory |
| Electronic Commerce Act 2006 | Ministry of Digital | Sections on electronic records and transactions | Mandatory |
| Financial Services Act 2013 (FSA) | BNM | Section 47 (Technology Risk) | Mandatory |
| Payment Systems Policy Document | BNM | Relevant payment system standards | Mandatory |
| MyDebit and DuitNow Technical Standards | Payments Network Malaysia (PayNet) | Latest published version | Mandatory |
| ISO/IEC 18004:2015 | ISO | QR Code specification | Reference |
| EMV QR Code Specification | EMVCo | EMV QRCPS Merchant Presented Mode | Reference |

### 2.2 Internal Policy Alignment

*List the internal policies and standards that this document supports or is derived from. Link each item to its document ID where available.*

This document is aligned with and supplements the following internal policies:

- **[Organization Name] Information Security Policy** — [Document ID]
- **[Organization Name] Technology Risk Management Framework** — [Document ID]
- **[Organization Name] Data Classification and Handling Policy** — [Document ID]
- **[Organization Name] Third-Party Risk Management Policy** — [Document ID]
- **[Organization Name] Fraud Risk Management Framework** — [Document ID]
- **[Organization Name] Incident Management and Response Policy** — [Document ID]
- **[Organization Name] Business Continuity and Disaster Recovery Policy** — [Document ID]

### 2.3 RMiT Clause 12.9 Summary

*Provide a brief plain-language summary of RMiT Clause 12.9 and explain how this document operationalizes its requirements.*

BNM RMiT Clause 12.9 requires financial institutions that offer QR code payments and e-wallet services to implement controls that address:

- **QR code integrity:** Ensuring that QR codes presented to customers cannot be tampered with or replaced by fraudulent codes
- **Transaction authentication:** Applying appropriate customer authentication mechanisms proportionate to transaction risk
- **E-wallet lifecycle management:** Securing the provisioning, operation, suspension, and deprovisioning of e-wallets
- **Fraud monitoring:** Implementing real-time or near-real-time transaction monitoring to detect and respond to suspicious activity
- **Customer protection:** Providing adequate disclosures and recourse mechanisms for customers affected by QR code or e-wallet fraud

This document operationalizes these requirements through specific technical and procedural controls described in Sections 4 through 10.

---

## 3. Roles and Responsibilities

### 3.1 Overview

*Describe the governance structure for QR code and e-wallet security, including who owns, approves, implements, and monitors these standards.*

Effective implementation of these standards requires clear accountability across multiple functions. The following section defines the roles and responsibilities of key stakeholders using a RACI model.

**RACI Key:**
- **R** = Responsible (performs the activity)
- **A** = Accountable (owns the outcome; approves)
- **C** = Consulted (provides input; two-way communication)
- **I** = Informed (receives updates; one-way communication)

### 3.2 RACI Matrix

*Review and update this matrix to reflect your organization's actual structure. Add or remove rows as needed to reflect all relevant activities.*

| Activity | [Relevant Dept Head] | Information Security | Technology & Ops | Risk Management | Compliance | Internal Audit | External Vendors |
|---|---|---|---|---|---|---|---|
| Define and maintain QR/e-wallet security standards | A | R | C | C | C | I | I |
| Approve QR code and e-wallet security standards | A | C | I | C | C | I | — |
| Implement technical security controls | C | C | R | I | I | I | R (where applicable) |
| Conduct QR code and e-wallet risk assessments | C | R | C | A | C | I | C |
| Monitor transactions for fraud and anomalies | I | C | R | A | I | I | R (where applicable) |
| Manage merchant onboarding and due diligence | A | C | R | C | I | I | R (where applicable) |
| Investigate and resolve security incidents | A | R | R | C | C | I | C |
| Report security incidents to BNM | A | C | I | C | R | I | — |
| Conduct annual standards review | A | R | C | C | C | I | I |
| Train staff on QR/e-wallet security procedures | A | C | R | I | C | I | — |
| Manage exceptions to these standards | A | R | C | C | C | I | — |
| Conduct independent audit of controls | I | I | I | I | I | A/R | — |

### 3.3 Key Roles Description

*Provide a brief description of each role's responsibilities in the context of QR code and e-wallet security.*

**[Relevant Department Head] — Document Owner**
- Accountable for the overall integrity and currency of this document
- Approves exceptions and escalations in accordance with Section 11
- Ensures adequate resources are allocated to implement and maintain these standards
- Reports on the status of QR code and e-wallet security controls to senior management

**Head of Information Security / CISO**
- Responsible for defining the technical security requirements in this document
- Reviews and approves security architectures for QR code and e-wallet systems
- Oversees the organization's response to QR code and e-wallet security incidents
- Ensures compliance with RMiT Clause 12.9 and other applicable regulatory requirements

**Head of Technology & Operations**
- Responsible for implementing the technical controls specified in this document
- Manages the operational security of QR code generation, processing, and validation systems
- Ensures system availability and resilience for e-wallet services

**Head of Risk Management**
- Maintains the risk register for QR code and e-wallet services
- Approves risk treatment plans for identified threats and vulnerabilities
- Oversees the fraud monitoring framework for digital payment channels

**Head of Compliance**
- Monitors regulatory developments affecting QR code and e-wallet security
- Ensures timely regulatory reporting obligations are fulfilled
- Supports internal audit in assessing compliance with this document

**Head of Internal Audit**
- Conducts independent assessments of QR code and e-wallet security controls
- Reports audit findings to the Board Audit Committee
- Verifies remediation of identified control deficiencies

---

## 4. QR Code Security Standards

### 4.1 QR Code Generation Standards

*Specify the technical requirements for generating secure QR codes, including format, encoding, and integrity controls.*

All QR codes generated by or on behalf of [Organization Name] for payment purposes shall comply with the following standards:

#### 4.1.1 Technical Specifications

| Parameter | Requirement |
|---|---|
| **Standard** | EMV QR Code Specification (EMV QRCPS) and/or ISO/IEC 18004:2015 |
| **Code Type** | Dynamic QR code preferred for consumer-presented mode; static QR code permitted for merchant-presented mode subject to additional controls |
| **Error Correction Level** | Minimum Level M (15% recovery capability); Level Q or H recommended for physical displays |
| **Minimum Module Size** | 1mm per module for printed codes; as per EMVCo specifications for digital display |
| **Data Integrity** | Checksum (CRC-16/CCITT) as per EMV QRCPS mandatory fields |
| **Encoding** | UTF-8 or as specified in the applicable PayNet DuitNow technical standard |
| **Maximum Validity Period (Dynamic)** | [Define period, e.g., 5 minutes] from time of generation |
| **Maximum Transaction Amount** | As per current BNM and PayNet limits; configurable per customer risk profile |

#### 4.1.2 Dynamic QR Code Requirements

- Dynamic QR codes **shall** embed a unique transaction reference that cannot be reused
- Dynamic QR codes **shall** include an expiry timestamp and shall be invalidated server-side upon expiry
- Dynamic QR codes **shall** be generated with a minimum of [X]-bit cryptographic entropy
- The transaction amount, currency, and payee details embedded in the QR code **shall** be validated server-side upon scan to detect tampering
- Dynamic QR codes **shall not** be cacheable at any intermediary layer

#### 4.1.3 Static QR Code Requirements

- Static QR codes used for merchant payment acceptance **shall** be registered in [Organization Name]'s merchant management system prior to activation
- Physical static QR codes displayed at merchant premises **shall** include tamper-evident features such as holographic overlays or void-on-removal stickers where feasible
- [Organization Name] **shall** implement transaction amount limits for static QR code payments, consistent with BNM guidance
- Static QR code merchant records **shall** be reviewed at minimum [annually / every 6 months] to verify continued legitimacy

### 4.2 QR Code Validation and Processing

*Define the controls for validating QR codes presented for payment, including server-side checks and anti-tampering measures.*

#### 4.2.1 Validation Requirements

All QR code scans processed through [Organization Name]'s systems shall undergo the following validation checks before transaction authorization:

| Validation Check | Description | Pass Criteria |
|---|---|---|
| **Format Validation** | Verify QR code conforms to EMV QRCPS or applicable standard | Compliant format; reject if malformed |
| **Checksum Verification** | Verify CRC-16/CCITT integrity value | Checksum matches; reject on mismatch |
| **Expiry Check** | Verify dynamic QR code has not expired | Within validity window; reject if expired |
| **Merchant/Payee Verification** | Verify payee identifier against registered merchant/payee database | Active and verified record exists |
| **Amount Limit Check** | Verify transaction amount does not exceed applicable limits | Within configured limits |
| **Duplicate Transaction Check** | Verify transaction reference has not been previously processed | No duplicate found within lookback window |
| **Blacklist/Watchlist Screening** | Screen payee against fraud and sanctions watchlists | No matches; flag for review if match found |
| **Domain/URL Validation** | Where QR codes contain URLs, validate against allowlist | URL matches pre-approved domains |

#### 4.2.2 Anti-Substitution Controls

- [Organization Name] **shall** implement controls to detect and alert on the substitution of legitimate QR codes with fraudulent codes at merchant premises
- Transaction monitoring rules **shall** be configured to flag unusual patterns indicative of QR code substitution fraud (e.g., sudden spike in disputes for a specific merchant QR code)
- Customers **shall** be educated to verify payee details displayed on their device screen before confirming payment

### 4.3 QR Code Display and Distribution Security

*Specify requirements for the secure display and distribution of QR codes to prevent fraudulent substitution or interception.*

- QR codes for payment purposes **shall** only be generated and distributed through [Organization Name]-approved channels and applications
- QR codes embedded in email or digital communications **shall** be protected against manipulation in transit using [Organization Name]'s approved email security controls
- Physical QR code materials (e.g., merchant standees, countertop displays) **shall** be produced through [Organization Name]'s approved procurement process with appropriate tamper-evident features
- Merchant-displayed QR codes **shall** include visible branding and reference numbers to enable customer verification

---

## 5. E-Wallet Security Standards

### 5.1 E-Wallet Provisioning and Onboarding

*Define the security requirements for customer onboarding and e-wallet provisioning, including identity verification and Know Your Customer (KYC) controls.*

#### 5.1.1 Customer Identity Verification

All customers onboarding to [Organization Name]'s e-wallet service shall be subject to identity verification in accordance with the following requirements:

| Customer Tier | KYC Level | Transaction Limit | Required Verification |
|---|---|---|---|
| **Tier 1 (Basic)** | Simplified Due Diligence | [Amount per BNM guidance, e.g., RM 500/day] | MyKad / Passport scan; selfie verification |
| **Tier 2 (Standard)** | Standard Due Diligence | [Amount per BNM guidance, e.g., RM 5,000/day] | MyKad / Passport scan; selfie with liveness detection; address verification |
| **Tier 3 (Enhanced)** | Enhanced Due Diligence | [Amount per BNM guidance] | Full KYC; in-person or video verification; source of funds |
| **Corporate / Business** | Enhanced Due Diligence | [As agreed per business account] | Business registration; authorized signatory verification |

- Identity verification **shall** use liveness detection to prevent spoofing using photographs or pre-recorded video
- Customer onboarding data **shall** be retained in accordance with the organization's data retention policy and applicable regulatory requirements
- Watchlist screening (sanctions, PEP, adverse media) **shall** be performed at onboarding and on an ongoing basis

#### 5.1.2 Device Binding and Registration

- Each e-wallet account **shall** support binding to a maximum of [X] devices simultaneously; exceeding this limit shall require explicit customer authorization and re-authentication
- Device binding **shall** use a combination of device fingerprinting and cryptographic attestation (e.g., Android SafetyNet/Play Integrity, Apple DeviceCheck)
- Re-binding to a new device **shall** require step-up authentication as defined in Section 7.2
- Jailbroken or rooted devices **shall** be detected and flagged; access **may** be denied based on current risk policy settings

### 5.2 E-Wallet Lifecycle Management

*Specify the controls covering the full lifecycle of an e-wallet account, from activation through suspension and deactivation.*

#### 5.2.1 Lifecycle Stages and Controls

| Lifecycle Stage | Required Controls |
|---|---|
| **Provisioning** | Identity verification; device binding; initial PIN/biometric setup; welcome notification to registered contact |
| **Active** | Continuous transaction monitoring; periodic re-authentication; balance and transaction limits enforcement |
| **Suspended (Customer-Initiated)** | Immediate suspension upon request; notification sent; re-activation requires re-authentication |
| **Suspended (Security-Initiated)** | Automatic suspension on breach detection; customer notification; escalation per incident response procedure |
| **Dormant** | Account flagged after [X months] inactivity; customer notification; reduced transaction limits until re-activation |
| **Deactivation / Closure** | Customer identity re-verification; outstanding balance handling; data retention per policy; notification sent |

#### 5.2.2 Balance and Limit Controls

- E-wallet balances **shall** not exceed the maximum permitted under applicable BNM regulations at any point in time
- Daily transaction limits shall be configured per customer tier (refer to Section 5.1.1) and **shall** be enforced server-side
- Customers **shall** have the ability to set their own sub-limits below the tier maximum via self-service controls
- Limit changes that increase the customer's exposure above default tier limits **shall** require step-up authentication and a cooling-off period of [X hours]

#### 5.2.3 Top-Up and Fund Transfer Controls

| Control | Requirement |
|---|---|
| **Top-Up Source Verification** | Top-up sources (linked bank accounts, cards) shall be verified and registered before use |
| **Top-Up Limits** | Per-transaction and daily top-up limits as per BNM guidance and tier configuration |
| **Outbound Transfer Screening** | All outbound transfers screened against fraud rules and beneficiary watchlists |
| **New Beneficiary Cooling-Off** | Transfers to newly registered beneficiaries subject to a cooling-off period of [X hours] and reduced limit of [Amount] |
| **Unusual Funding Pattern Detection** | Automated detection and alerting of structuring or layering behavior |

### 5.3 E-Wallet Application Security

*Define the security requirements for the mobile application or platform through which customers access e-wallet services.*

#### 5.3.1 Mobile Application Security Requirements

- The e-wallet application **shall** be developed and maintained in accordance with [Organization Name]'s **Secure Software Development Lifecycle (SSDLC) Policy** — [Document ID]
- Security testing (SAST, DAST, penetration testing) **shall** be conducted prior to each major release and at minimum annually
- The application **shall** implement the following runtime protections:
  - Anti-tampering and code obfuscation
  - Certificate pinning for all API communications
  - Root/jailbreak detection with configurable response (warn, restrict, or block)
  - Screen overlay attack detection
  - Clipboard protection for sensitive fields (PINs, card numbers)
  - Debug mode detection and prevention in production builds

#### 5.3.2 API Security Requirements

| Requirement | Standard |
|---|---|
| **Transport Security** | TLS 1.2 minimum; TLS 1.3 preferred; weak cipher suites disabled |
| **API Authentication** | OAuth 2.0 with short-lived access tokens; refresh token rotation |
| **Request Signing** | All payment API requests shall be signed with HMAC-SHA256 or equivalent |
| **Rate Limiting** | Per-client rate limits enforced at API gateway layer |
| **Input Validation** | All inputs validated server-side; reject malformed or unexpected payloads |
| **Output Encoding** | All responses properly encoded to prevent injection attacks |
| **Sensitive Data in Transit** | No sensitive data (PAN, CVV, PIN) in URL parameters; use encrypted request body |

---

## 6. Transaction Security and Fraud Controls

### 6.1 Real-Time Transaction Monitoring

*Describe the requirements for monitoring QR code and e-wallet transactions in real time to detect fraud and suspicious activity.*

[Organization Name] **shall** implement a real-time transaction monitoring system capable of evaluating each QR code and e-wallet transaction against a set of configurable fraud detection rules prior to, or immediately upon, authorization.

#### 6.1.1 Monitoring Scope

The transaction monitoring system **shall** cover, at minimum:

- All QR code payment transactions (consumer-presented and merchant-presented)
- All e-wallet top-up transactions
- All e-wallet outbound transfers and payments
- All e-wallet account management events (device binding, limit changes, beneficiary registration)

#### 6.1.2 Fraud Detection Rule Categories

| Rule Category | Description | Examples |
|---|---|---|
| **Velocity Rules** | Detect unusual frequency of transactions | >X transactions in Y minutes; multiple failed attempts |
| **Amount Rules** | Detect unusual transaction amounts | Amount significantly above customer historical average; just-below-limit structuring |
| **Geographic Rules** | Detect impossible or unusual geographic patterns | Transactions from two distant locations within short timeframe |
| **Behavioral Rules** | Detect deviation from established customer behavior profile | Unusual transaction time; new merchant category; unusual beneficiary |
| **Device Rules** | Detect unusual device behavior | New device; device associated with multiple accounts |
| **Merchant Rules** | Detect fraud signals at merchant level | Multiple disputes; sudden spike in transaction volume |
| **Account Takeover (ATO) Rules** | Detect signs of account compromise | Multiple failed logins followed by successful login; rapid account setting changes post-login |

#### 6.1.3 Rule Management

- Fraud detection rules **shall** be reviewed and updated at minimum [quarterly] and whenever new fraud patterns are identified
- Rule performance metrics (detection rate, false positive rate) **shall** be tracked and reported monthly to [Risk Management / Fraud Risk Committee]
- Rule changes **shall** be subject to a change management process including testing in a non-production environment

### 6.2 Fraud Case Management

*Describe the process for managing fraud cases identified through transaction monitoring, including investigation, customer notification, and escalation.*

| Stage | Action | Responsible | Timeframe |
|---|---|---|---|
| **Detection** | Transaction flagged by monitoring system; case created | Automated system | Real-time |
| **Triage** | Case reviewed by fraud analyst; initial classification | Fraud Operations Team | Within [X hours] |
| **Customer Notification** | Customer notified of suspicious activity if appropriate | Fraud Operations Team | Within [X hours] of detection |
| **Investigation** | Evidence gathered; transaction reviewed; customer contacted | Fraud Operations Team | Within [X business days] |
| **Resolution** | Transaction confirmed as fraud or false positive; account action taken | Fraud Operations Team | Within [X business days] |
| **Regulatory Reporting** | Report to BNM if threshold met or required | Compliance | Per BNM reporting obligations |
| **Post-Incident Review** | Root cause analysis; rule tuning; preventive action | Risk Management / InfoSec | Within [X days] of case closure |

### 6.3 Transaction Limits and Controls

*Specify the maximum transaction limits applicable to QR code and e-wallet payments, consistent with BNM guidance.*

| Transaction Type | Individual Limit | Daily Aggregate Limit | Monthly Aggregate Limit | Notes |
|---|---|---|---|---|
| QR Code Payment (Consumer-Presented) | [Amount] | [Amount] | [Amount] | Subject to BNM-prescribed limits |
| QR Code Payment (Merchant-Presented) | [Amount] | [Amount] | [Amount] | Subject to BNM-prescribed limits |
| E-Wallet Top-Up | [Amount] | [Amount] | [Amount] | Per BNM e-money guidelines |
| E-Wallet Outbound Transfer | [Amount] | [Amount] | [Amount] | Per BNM guidelines |
| E-Wallet to Bank Account Withdrawal | [Amount] | [Amount] | [Amount] | Per BNM guidelines |

*Note: All limits are subject to current BNM and PayNet regulations. This table must be reviewed and updated whenever regulatory limits change.*

---

## 7. Customer Authentication and Verification

### 7.1 Authentication Requirements

*Define the authentication requirements for QR code and e-wallet transactions, including minimum standards for each transaction type and risk tier.*

Authentication requirements for QR code and e-wallet transactions shall comply with BNM's requirements for strong authentication in digital financial services.

#### 7.1.1 Authentication Factor Definitions

| Factor Type | Examples |
|---|---|
| **Knowledge (Something You Know)** | PIN, password, security questions |
| **Possession (Something You Have)** | Registered mobile device, OTP via SMS/email, hardware token |
| **Inherence (Something You Are)** | Fingerprint, facial recognition, voice biometrics |

#### 7.1.2 Authentication Requirements by Transaction Type

| Transaction Type | Minimum Authentication | Step-Up Trigger | Notes |
|---|---|---|---|
| E-Wallet Login | 2FA (Knowledge + Possession or Inherence) | Anomaly detected; new device | |
| QR Code Payment ≤ [Low Amount Threshold] | 1FA (PIN or Biometric) | Velocity breach | |
| QR Code Payment > [Low Amount Threshold] | 2FA | Always | |
| E-Wallet Top-Up | 2FA | Always | |
| Outbound Transfer — Existing Beneficiary | 1FA or 2FA based on amount | Amount/velocity threshold | |
| Outbound Transfer — New Beneficiary | 2FA with OTP | Always | |
| Account Settings Change | 2FA with OTP | Always | |
| Device Binding | 2FA + Out-of-Band Confirmation | Always | |
| Limit Increase | 2FA + OTP to registered contact | Always | |

### 7.2 Step-Up Authentication

*Define the conditions under which step-up authentication is required and the process for triggering and completing it.*

Step-up authentication shall be automatically triggered and enforced in the following circumstances:

- Transaction amount exceeds [configurable threshold]
- Transaction to new or unregistered beneficiary
- Access from new or unregistered device
- Fraud monitoring system assigns elevated risk score to transaction
- Multiple failed authentication attempts preceding the transaction
- Account dormancy period exceeded before transaction
- Customer-initiated limit increase requests

Step-up authentication **shall** require at minimum two authentication factors, at least one of which is out-of-band (e.g., OTP sent to registered mobile number or email address).

### 7.3 Biometric Authentication Standards

*Specify the minimum standards for biometric authentication used in e-wallet and QR code payment flows.*

- Biometric authentication **shall** comply with FIDO2/WebAuthn standards where applicable
- Facial recognition systems **shall** implement liveness detection to prevent spoofing using photographs or pre-recorded video, meeting a minimum ISO/IEC 30107-3 Presentation Attack Detection (PAD) standard of [Level 2]
- Biometric templates **shall not** be stored on [Organization Name]'s servers; device-bound biometrics using platform secure enclaves (e.g., Android TEE, Apple Secure Enclave) are the preferred approach
- Fallback to PIN or password **shall** be available when biometric authentication is unavailable; fallback events **shall** be logged and monitored for anomalies

### 7.4 OTP and Notification Standards

| Requirement | Standard |
|---|---|
| **OTP Length** | Minimum 6 digits |
| **OTP Validity Period** | Maximum [3 minutes] |
| **OTP Delivery Channel** | SMS to registered number; push notification to registered device; email as fallback only |
| **OTP Retry Limit** | Maximum [3 attempts]; account lockout on breach |
| **OTP Content** | Must include transaction reference and amount; must not include full account details |
| **Push Notification Security** | Encrypted push notifications via APNS/FCM; notifications must not include sensitive data in notification body |

---

## 8. Data Protection and Privacy Requirements

### 8.1 Data Classification

*Classify the data types associated with QR code and e-wallet services and specify the handling requirements for each classification.*

All data generated, processed, or stored in connection with QR code and e-wallet services shall be classified in accordance with [Organization Name]'s **Data Classification Policy** — [Document ID]. The following classifications apply to data types specific to QR code and e-wallet services:

| Data Type | Classification | Examples |
|---|---|---|
| Customer Identity Data | **Confidential** | Name, MyKAD/Passport number, biometric data |
| Account Credentials | **Highly Confidential** | PINs, passwords, authentication tokens |
| Transaction Data | **Confidential** | Transaction amount, timestamp, merchant details, beneficiary |
| Device Identifiers | **Confidential** | Device fingerprint, device binding tokens |
| QR Code Payload Data | **Confidential** | Encoded transaction details |
| Fraud Detection Data | **Confidential** | Risk scores, fraud rules, watchlist data |
| Audit Logs | **Confidential** | System and user activity logs |
| Aggregated Statistical Data | **Internal** | Non-attributable transaction statistics |

### 8.2 Data Minimization and Retention

*Specify data minimization principles and retention periods applicable to QR code and e-wallet data.*

- QR code and e-wallet systems **shall** collect only the minimum data necessary for the intended transaction or compliance purpose
- Dynamic QR code payloads **shall not** contain more customer data than required by the applicable payment standard
- Transaction data **shall** be retained for a minimum of [7 years] in accordance with BNM examination requirements and [Organization Name]'s records management policy
- Biometric data **shall** be retained only for the duration of the customer relationship; deletion **shall** occur within [X days] of account closure
- Audit logs **shall** be retained for a minimum of [3 years] in a tamper-evident format

### 8.3 Data Encryption Standards

| Data State | Encryption Standard | Key Management |
|---|---|---|
| **Data in Transit** | TLS 1.2 minimum (TLS 1.3 preferred) | Certificate management per PKI policy |
| **Data at Rest (Database)** | AES-256 or equivalent | Hardware Security Module (HSM) managed keys |
| **Data at Rest (Backups)** | AES-256 or equivalent | Separate key from production keys |
| **QR Code Payload (sensitive fields)** | Encrypted as per EMV QRCPS | HSM-managed keys |
| **Biometric Templates** | Device-bound; not stored centrally | Platform secure enclave |
| **Cryptographic Keys** | Stored and managed in HSM | Key rotation per cryptographic policy |

### 8.4 PDPA Compliance Requirements

*Summarize the PDPA obligations relevant to e-wallet and QR code data processing, including consent, access rights, and data subject requests.*

In accordance with the **Personal Data Protection Act 2010 (PDPA)**, [Organization Name] shall:

- Obtain explicit consent from customers for the collection and processing of personal data for e-wallet and QR code payment services
- Provide customers with clear privacy notices at the point of e-wallet registration
- Respond to data subject access requests within [21 days] as required by PDPA
- Implement the right to correction as required under PDPA Section 34
- Maintain a record of all data processing activities related to e-wallet and QR code services
- Ensure any third parties processing personal data on behalf of [Organization Name] are bound by PDPA-compliant data processing agreements

---

## 9. Third-Party and Merchant Risk Management

### 9.1 Third-Party Service Provider Requirements

*Define the security requirements that must be imposed on third-party service providers involved in QR code and e-wallet services.*

Any third-party service provider that processes, stores, or transmits QR code or e-wallet data on behalf of [Organization Name] shall be subject to the following requirements:

#### 9.1.1 Vendor Due Diligence Requirements

| Assessment Area | Requirement | Frequency |
|---|---|---|
| **Security Posture Assessment** | Security questionnaire and evidence review | At onboarding; annually |
| **Penetration Testing Results** | Evidence of annual penetration testing by qualified third party | Annually |
| **Certifications** | PCI DSS compliance (where applicable); ISO 27001 certification preferred | At onboarding; annually |
| **BNM Compliance** | Evidence of compliance with applicable BNM requirements | At onboarding; as required |
| **Right to Audit** | Contractual right to audit or inspect vendor's relevant controls | As exercised per Third-Party Risk Policy |
| **Incident Reporting SLA** | Vendor must report security incidents involving [Organization Name] data within [24 hours] | Contractual obligation |
| **Subcontractor Disclosure** | Vendor must disclose and obtain approval for subcontractors handling [Organization Name] data | At onboarding and upon change |

#### 9.1.2 Contractual Security Requirements

All third-party service provider contracts related to QR code and e-wallet services **shall** include, at minimum:

- Data processing agreement compliant with PDPA requirements
- Security requirements schedule specifying minimum technical controls
- Incident notification obligations and timeframes
- Right to audit or third-party certification acceptance
- Data return and deletion obligations upon contract termination
- Compliance with applicable BNM requirements for outsourced functions

### 9.2 Merchant Onboarding and Management

*Define the security requirements for onboarding and managing merchants participating in [Organization Name]'s QR payment network.*

#### 9.2.1 Merchant Onboarding Requirements

| Requirement | Description |
|---|---|
| **Business Verification** | Verify SSM registration, business address, and operating licenses |
| **Beneficial Owner Identification** | Identify and verify ultimate beneficial owners per AML/CFT requirements |
| **Watchlist Screening** | Screen merchant and beneficial owners against sanctions, PEP, and adverse media lists |
| **Industry Risk Assessment** | Assess merchant's industry risk category; apply enhanced due diligence for high-risk categories |
| **QR Code Registration** | Register all merchant QR codes in [Organization Name]'s merchant management system |
| **Terms and Conditions Acceptance** | Merchant must accept [Organization Name]'s Merchant Agreement including security obligations |
| **Training** | Provide merchant with guidance on protecting QR code displays and reporting suspicious activity |

#### 9.2.2 Ongoing Merchant Monitoring

- Merchant transaction activity **shall** be monitored for unusual patterns indicative of fraud, money laundering, or QR code substitution
- Merchant accounts with elevated risk indicators **shall** be subject to periodic review at minimum [annually] and on an event-driven basis
- Merchants with sustained high dispute or chargeback rates **shall** be subject to enhanced monitoring and may be suspended pending investigation
- QR code registrations **shall** be reviewed annually or upon change in merchant details

---

## 10. Incident Management and Reporting

### 10.1 Security Incident Classification

*Define the classification of security incidents relevant to QR code and e-wallet services, and the corresponding response obligations.*

Security incidents affecting QR code or e-wallet services shall be classified as follows:

| Severity | Definition | Examples | Initial Response SLA |
|---|---|---|---|
| **Critical (P1)** | Systemic breach or fraud event; widespread customer impact; potential regulatory breach | Mass QR code substitution fraud; e-wallet platform breach; unauthorized access to customer funds | Immediate; [2 hours] escalation to senior management |
| **High (P2)** | Significant fraud event; limited but material customer impact | Targeted account takeover campaign; QR code fraud affecting multiple customers | [4 hours] response; [24 hours] containment |
| **Medium (P3)** | Isolated fraud or security event; limited customer impact | Individual account compromise; single merchant QR code tampering | [1 business day] response; [3 business days] resolution |
| **Low (P4)** | Security event with no immediate customer financial impact | Failed brute-force attempt; suspicious but unconfirmed activity | [3 business days] response; routine investigation |

### 10.2 Incident Response Procedure

*Summarize the incident response steps specific to QR code and e-wallet security incidents.*

1. **Detection and Identification:** Security incident detected via automated monitoring, customer report, or staff observation
2. **Initial Assessment:** On-call security/fraud analyst assesses severity and scope
3. **Containment:** Appropriate containment measures activated (e.g., suspend affected accounts, disable compromised QR codes, block suspicious IPs)
4. **Notification:** Affected customers notified; internal escalation per severity classification
5. **Investigation:** Root cause analysis conducted; evidence preserved for forensics and regulatory purposes
6. **Eradication:** Underlying vulnerability or attack vector addressed
7. **Recovery:** Services restored; enhanced monitoring activated
8. **Regulatory Reporting:** Report to BNM if required under applicable reporting obligations (refer to 10.3)
9. **Post-Incident Review:** Lessons learned documented; control improvements implemented

### 10.3 Regulatory Reporting Obligations

*Specify the regulatory reporting obligations for QR code and e-wallet security incidents, including reporting thresholds and timeframes.*

[Organization Name] shall report QR code and e-wallet security incidents to BNM in accordance with the following obligations:

| Reporting Obligation | Trigger | Timeframe | Regulatory Reference |
|---|---|---|---|
| **Technology Risk Event Report** | Any technology risk event that materially impacts e-wallet or QR services | Within [1 business day] of identification | BNM RMiT |
| **Fraud Incident Report** | Fraud losses exceeding BNM-prescribed threshold | Per BNM guidelines | BNM guidelines |
| **Material Outsourcing Incident** | Significant security incident at a material outsourced service provider | Per BNM outsourcing requirements | BNM guidelines |
| **Data Breach Notification** | Breach of personal data involving e-wallet or QR code data | As required by PDPA and BNM | PDPA; BNM RMiT |

---

## 11. Exceptions and Escalation Process

### 11.1 Exception Management Policy

*Describe the process for requesting, approving, documenting, and reviewing exceptions to this standard. Emphasize that exceptions should be rare, time-limited, and risk-accepted.*

Exceptions to any requirement in this document are discouraged and shall only be granted where strict compliance would result in a disproportionate operational burden, technical infeasibility, or where a compensating control provides an equivalent or superior level of risk mitigation.

All exceptions **shall** be:
- Formally documented using the **Exception Request Form** (Appendix C)
- Reviewed and risk-assessed by the Information Security Division
- Approved by the [Relevant Department Head] and, for high or critical risk exceptions, by the [CISO / CRO / relevant committee]
- Time-limited with a defined expiry date not exceeding [12 months]
- Monitored for compliance with compensating controls throughout the exception period
- Reviewed upon expiry; extension requires a new exception request

### 11.2 Exception Request and Approval Workflow

| Step | Activity | Responsible | Timeframe |
|---|---|---|---|
| 1 | Submit Exception Request Form with business justification, risk assessment, and proposed compensating controls | Requesting Business Unit | Before implementing non-compliant activity |
| 2 | Review request; assess risk of exception and adequacy of compensating controls | Information Security | [5 business days] |
| 3 | Approve or reject exception; document rationale | [Relevant Department Head] / [CISO] | [3 business days] after InfoSec review |
| 4 | Communicate decision to requesting unit; register exception in exception register | Compliance / InfoSec | [2 business days] |
| 5 | Implement compensating controls; monitor compliance | Requesting Business Unit | Ongoing during exception period |
| 6 | Review exception prior to expiry; extend or close | Information Security | [30 days] before expiry |

### 11.3 Exception Register

*A centralized exception register shall be maintained by [Compliance / Information Security] and reviewed [quarterly] by [relevant governance committee].*

| Exception ID | Standard Reference | Business Justification Summary | Compensating Control | Approval Date | Expiry Date | Approved By | Status |
|---|---|---|---|---|---|---|---|
| [EXC-001] | [Section X.X] | [Summary] | [Control description] | [Date] | [Date] | [Name/Role] | [Active/Expired/Closed] |

### 11.4 Escalation Process

*Define the escalation path for unresolved compliance issues, unapproved exceptions, or situations where this standard cannot be met within acceptable risk parameters.*

Where an exception request is rejected and the requesting business unit believes the decision is incorrect, or where an unmitigated compliance gap is identified that cannot be resolved within normal channels, the following escalation path applies:

1. **Level 1:** Escalate to [Relevant Department Head] for review and decision
2. **Level 2:** Escalate to [CISO / CRO] if Level 1 decision is contested or involves material risk
3. **Level 3:** Escalate to [Technology and Cybersecurity Risk Committee / Board Risk Committee] for material or unresolved issues
4. **Regulatory Escalation:** Where a compliance gap may constitute a regulatory breach, Compliance must be notified immediately and BNM notification may be required

---

## 12. Compliance and Enforcement

### 12.1 Compliance Monitoring

*Describe how compliance with this standard will be monitored on an ongoing basis, including who is responsible and what mechanisms are used.*

Compliance with this standard shall be monitored through the following mechanisms:

| Mechanism | Description | Frequency | Responsible |
|---|---|---|---|
| **Self-Assessment** | Business units complete compliance self-assessment against this standard | Annually | [Relevant Department Head] |
| **Technical Control Testing** | Information Security conducts technical testing of QR code and e-wallet security controls | Annually or upon significant change | Information Security |
| **Penetration Testing** | Independent penetration testing of QR code and e-wallet systems | Annually; after major releases | Information Security / appointed vendor |
| **Internal Audit** | Independent audit of controls against this standard | As per internal audit plan | Internal Audit |
| **Fraud Monitoring Review** | Review of fraud detection rule performance and coverage | Quarterly | Risk Management |
| **Regulatory Examination** | BNM supervisory examination | As directed by BNM | Compliance |
| **Management Reporting** | Compliance status reported to senior management | Quarterly | Compliance |

### 12.2 Non-Compliance Consequences

*Describe the consequences of non-compliance with this standard for individuals, business units, and the organization as a whole.*

Non-compliance with this standard may result in:

**For Individuals:**
- Disciplinary action up to and including termination of employment, in accordance with [Organization Name]'s HR policies
- Civil or criminal liability where non-compliance constitutes a legal violation

**For Business Units:**
- Mandatory remediation with defined timelines and enhanced monitoring
- Restriction or suspension of QR code or e-wallet service operations pending remediation
- Escalation to senior management and governance committees

**For [Organization Name]:**
- Regulatory action by BNM, including financial penalties, directions, or license conditions
- Reputational damage and customer trust impact
- Financial losses from fraud, regulatory penalties, or litigation

### 12.3 Annual Compliance Attestation

*Require annual sign-off from relevant stakeholders confirming awareness of and compliance with this standard.*

[Relevant Department Head] and heads of all in-scope business units shall complete an annual compliance attestation confirming:

- Awareness of the requirements in this standard
- Confirmation that controls within their area of responsibility are operating effectively
- Disclosure of any known gaps or exceptions

Attestations shall be coordinated by [Compliance Division] and records retained for audit purposes.

---

## 13. Review and Approval History

### 13.1 Version History

*Maintain a complete history of all versions of this document, including the nature of each change.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | Initial release |
| [1.1] | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Reviewer Name], [Title] | [Description of major revision] |

### 13.2 Approval Sign-Off

*This document requires approval from the following roles before it becomes effective. All approvals must be obtained before the document is published to its intended audience.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner — [Relevant Department Head] | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Head of Compliance | [Name] | __________________ | [Date] |
| Head of Technology & Operations | [Name] | __________________ | [Date] |

### 13.3 Scheduled Review

*This document shall be reviewed in accordance with the following schedule. Unscheduled reviews shall be triggered by the events listed below.*

**Scheduled Review Frequency:** Annual — Next review due: [Next Review Date]

**Unscheduled Review Triggers:**
- Significant change to QR code or e-wallet technology or services
- Material change to applicable BNM regulations or PayNet technical standards
- Major security incident affecting QR code or e-wallet services
- Significant change in the organization's risk profile or business model
- Recommendation from Internal Audit or external review

---

## 14. References

### 14.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 12.9 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Sections 5–7, 34 |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Section 47 |
| Electronic Commerce Act 2006 | Electronic Commerce Act 2006 | Parliament of Malaysia | All relevant sections |
| BNM Payment Systems Policy | Payment Systems Policy Document | Bank Negara Malaysia | As applicable |

### 14.2 Industry Standards References

| Reference | Title | Issuing Body | Version |
|---|---|---|---|
| EMV QRCPS | EMV QR Code Payment Specification — Merchant-Presented Mode | EMVCo | Latest published |
| ISO/IEC 18004 | Information Technology — Automatic identification and data capture techniques — QR Code bar code symbology specification | ISO/IEC | 2015 |
| PCI DSS | Payment Card Industry Data Security Standard | PCI SSC | Latest published |
| FIDO2 | FIDO2: Web Authentication (WebAuthn) | FIDO Alliance / W3C | Latest published |
| ISO/IEC 27001 | Information Security Management Systems | ISO/IEC | 2022 |
| ISO/IEC 30107-3 | Biometric Presentation Attack Detection | ISO/IEC | Latest published |
| OWASP Mobile Security | OWASP Mobile Application Security Verification Standard | OWASP | Latest published |

### 14.3 Internal References

| Document ID | Title | Owner |
|---|---|---|
| [Doc ID] | Information Security Policy | [CISO] |
| [Doc ID] | Technology Risk Management Framework | [CRO] |
| [Doc ID] | Data Classification and Handling Policy | [CISO] |
| [Doc ID] | Third-Party Risk Management Policy | [CRO] |
| [Doc ID] | Fraud Risk Management Framework | [Risk Management] |
| [Doc ID] | Incident Management and Response Policy | [CISO] |
| [Doc ID] | Secure Software Development Lifecycle (SSDLC) Policy | [Head of Technology] |
| [Doc ID] | Business Continuity and Disaster Recovery Policy | [Head of Technology] |
| [Doc ID] | Records Management and Data Retention Policy | [Compliance] |
| [Doc ID] | Cryptographic Standards Policy | [CISO] |

---

## 15. Appendices

### Appendix A: QR Code Security Checklist

*This checklist is provided to assist technical teams and auditors in verifying compliance with the QR code security requirements in this document. Mark each item as Compliant, Non-Compliant, or Not Applicable with supporting evidence references.*

| # | Requirement | Reference | Status | Evidence / Notes |
|---|---|---|---|---|
| A1 | QR codes comply with EMV QRCPS or ISO/IEC 18004 | Section 4.1.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A2 | Dynamic QR codes include expiry timestamp and are invalidated server-side | Section 4.1.2 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A3 | Dynamic QR codes use minimum [X]-bit cryptographic entropy | Section 4.1.2 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A4 | Static QR codes registered in merchant management system | Section 4.1.3 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A5 | QR code validation checks all required fields before authorization | Section 4.2.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A6 | Certificate pinning implemented in mobile application | Section 5.3.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A7 | Root/jailbreak detection implemented | Section 5.3.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A8 | Real-time transaction monitoring in place | Section 6.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A9 | Transaction limits enforced server-side per regulatory requirements | Section 6.3 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A10 | Step-up authentication triggers correctly configured | Section 7.2 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A11 | Data encrypted at rest and in transit per standards | Section 8.3 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A12 | Third-party vendors subject to annual due diligence | Section 9.1.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| A13 | Incident response procedure tested within last 12 months | Section 10.2 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |

---

### Appendix B: E-Wallet Security Checklist

*This checklist is provided to assist technical teams and auditors in verifying compliance with the e-wallet security requirements in this document.*

| # | Requirement | Reference | Status | Evidence / Notes |
|---|---|---|---|---|
| B1 | Customer identity verification meets KYC tier requirements | Section 5.1.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B2 | Liveness detection implemented for biometric onboarding | Section 5.1.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B3 | Device binding uses cryptographic attestation | Section 5.1.2 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B4 | E-wallet lifecycle controls implemented for all stages | Section 5.2.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B5 | New beneficiary cooling-off period enforced | Section 5.2.3 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B6 | Annual penetration testing completed | Section 5.3.1 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B7 | API authentication using OAuth 2.0 with short-lived tokens | Section 5.3.2 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B8 | OTP validity period does not exceed 3 minutes | Section 7.4 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B9 | Biometric templates not stored on central servers | Section 7.3 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B10 | PDPA consent obtained at e-wallet registration | Section 8.4 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |
| B11 | Annual compliance attestation completed | Section 12.3 | [ ] Compliant / [ ] Non-Compliant / [ ] N/A | |

---

### Appendix C: Exception Request Form

*Complete this form in full when requesting an exception to any requirement in this document. Incomplete forms will be returned without review.*

---

**EXCEPTION REQUEST FORM — QR Code and E-Wallet Security Standards**

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-assigned by Compliance] |
| **Date of Request** | [Date] |
| **Requesting Business Unit** | [Business Unit Name] |
| **Requestor Name and Title** | [Name], [Title] |
| **Requestor Contact** | [Email] / [Phone] |

**Standard Reference:**
> Identify the specific section(s) of this document from which an exception is being requested.

[Section number and requirement text]

**Business Justification:**
> Provide a clear explanation of why strict compliance is not feasible or would be disproportionate. Include technical, operational, or business constraints.

[Justification text]

**Risk Assessment:**
> Describe the risk created by this exception. Reference the relevant threat and the likelihood and impact if the non-compliant situation results in an adverse event.

[Risk description]

**Proposed Compensating Controls:**
> Describe the alternative controls that will be implemented to reduce the risk created by this exception to an acceptable level.

[Compensating control description]

**Requested Exception Period:**
> State the start and end date of the exception. Maximum 12 months; must be renewed if continuation is required.

Start Date: [Date] — End Date: [Date]

**Review and Approval:**

| Role | Name | Decision (Approve / Reject) | Comments | Date |
|---|---|---|---|---|
| Information Security Reviewer | [Name] | | | |
| [Relevant Department Head] | [Name] | | | |
| CISO (if High/Critical risk) | [Name] | | | |

---

### Appendix D: Glossary of Terms

*This glossary defines key terms used in this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Dynamic QR Code** | A QR code generated for a specific transaction that includes a unique transaction reference and expiry timestamp; cannot be reused |
| **Static QR Code** | A fixed QR code typically used by merchants for payment acceptance; contains merchant identification but not transaction-specific data |
| **EMV QRCPS** | EMV QR Code Payment Specification — the technical standard published by EMVCo for QR code-based payments |
| **E-Wallet** | A digital financial account that stores electronic money and enables digital payments, transfers, and other financial transactions |
| **Two-Factor Authentication (2FA)** | Authentication using two distinct factors from: something you know, something you have, and something you are |
| **Step-Up Authentication** | An additional authentication challenge triggered by elevated risk conditions, requiring a higher assurance level than standard login |
| **Liveness Detection** | A biometric security technique that verifies that the biometric sample is being provided by a live person rather than a recording or photograph |
| **Device Binding** | The process of associating an e-wallet account with a specific physical device through cryptographic means |
| **OTP** | One-Time Password — a password that is valid for a single login session or transaction |
| **KYC** | Know Your Customer — the process of verifying the identity of customers as required by AML/CFT regulations |
| **RACI** | Responsible, Accountable, Consulted, Informed — a matrix used to assign roles and responsibilities |
| **TLS** | Transport Layer Security — a cryptographic protocol that provides secure communications over a network |
| **HSM** | Hardware Security Module — a physical computing device that safeguards and manages digital keys |
| **SSDLC** | Secure Software Development Lifecycle — a framework for integrating security practices into all phases of software development |
| **Compensating Control** | An alternative security measure implemented when a primary control cannot be met, providing equivalent risk reduction |
| **PayNet** | Payments Network Malaysia Sdn Bhd — the national payment network operator responsible for DuitNow and related payment infrastructure |
| **DuitNow** | Malaysia's national real-time payment and QR code payment platform operated by PayNet |

---

### Appendix E: Related Forms and Templates

*The following forms and templates support the implementation of this standard. Obtain current versions from [Intranet location / SharePoint link].*

| Form / Template | Purpose | Location |
|---|---|---|
| Exception Request Form | Request exception to this standard | Appendix C of this document; also available at [Intranet link] |
| Annual Compliance Attestation Form | Annual sign-off on compliance with this standard | [Intranet link] |
| Merchant Onboarding Checklist | Due diligence checklist for new QR payment merchants | [Intranet link] |
| Third-Party Security Assessment Questionnaire | Security questionnaire for QR/e-wallet service providers | [Intranet link] |
| Security Incident Report Form | Report QR code or e-wallet security incidents | [Intranet link] |
| Data Subject Access Request Form | PDPA data access and correction requests | [Intranet link] |

---

*End of Document*

---

**Document Footer**

| | |
|---|---|
| **Document Title** | QR Code and E-Wallet Security Standards |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head], [Organization Name] |
| **Last Updated** | [Date] |

*This document is subject to [Organization Name]'s document management policy. The master version is maintained at [Document Management System location]. Printed copies are uncontrolled unless stamped "CONTROLLED COPY".*