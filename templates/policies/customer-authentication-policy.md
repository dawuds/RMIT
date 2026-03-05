# Customer Authentication Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Regulatory Reference** | BNM RMiT, Clause 12.4 |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may be subject to disciplinary and/or legal action.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Authentication Risk Classification](#5-authentication-risk-classification)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [Authentication Mechanisms and Controls](#7-authentication-mechanisms-and-controls)
8. [Multi-Factor Authentication Requirements](#8-multi-factor-authentication-requirements)
9. [Transaction Risk-Based Authentication](#9-transaction-risk-based-authentication)
10. [Authentication for Digital and Online Channels](#10-authentication-for-digital-and-online-channels)
11. [Privileged and Administrative Access Authentication](#11-privileged-and-administrative-access-authentication)
12. [Credential Management and Lifecycle](#12-credential-management-and-lifecycle)
13. [Authentication Monitoring and Anomaly Detection](#13-authentication-monitoring-and-anomaly-detection)
14. [Exceptions and Escalation Process](#14-exceptions-and-escalation-process)
15. [Compliance and Enforcement](#15-compliance-and-enforcement)
16. [Review and Approval History](#16-review-and-approval-history)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary intent of this policy — what problem it solves and what outcomes it is designed to achieve in the context of customer authentication security.*

This Customer Authentication Policy establishes the mandatory requirements, standards, and controls governing the authentication of customers accessing [Organization Name]'s digital services, internet banking platforms, mobile applications, and transaction processing systems. The policy is designed to ensure that authentication mechanisms are commensurate with the risk profile of transactions and access events, thereby protecting customers against unauthorized access, identity fraud, and financial crime.

This policy is issued in compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 12.4, which mandates that financial institutions implement robust customer authentication frameworks that are risk-proportionate, regularly reviewed, and aligned with evolving threat landscapes.

### 1.2 Scope

*Define the boundaries of this policy — which systems, channels, business units, user populations, and transaction types fall within scope.*

This policy applies to:

**In-Scope Systems and Channels:**
- Internet banking portals (personal and business)
- Mobile banking applications (iOS and Android)
- API-based open banking interfaces
- Interactive Voice Response (IVR) telephone banking
- Branch and contact centre-assisted transactions
- ATM and self-service terminal access
- Corporate treasury and payment platforms
- Third-party payment initiation services

**In-Scope Entities and Personnel:**
- All retail, SME, and corporate customers of [Organization Name]
- All staff involved in customer identity verification and authentication operations
- Technology, Operations, Compliance, Risk Management, and Fraud teams
- Third-party service providers processing authentication on behalf of [Organization Name]

**Out-of-Scope:**
- Internal employee system access (governed by the [Organization Name] Access Control Policy)
- Physical access to premises (governed by the Physical Security Policy)
- Authentication for non-customer-facing internal systems

### 1.3 Policy Statement

[Organization Name] is committed to implementing authentication mechanisms that:

- Protect customers from unauthorized access and fraudulent transactions
- Comply fully with BNM RMiT Clause 12.4 and all related regulatory obligations
- Apply risk-based authentication proportionate to the sensitivity and value of transactions
- Maintain a positive and frictionless customer experience where security permits
- Evolve continuously in response to emerging threats and technological advancements

---

## 2. Regulatory and Policy Framework

### 2.1 Regulatory Basis

*List the specific regulatory instruments, BNM policy documents, and applicable laws that mandate or inform the requirements in this policy.*

This policy has been developed in accordance with the following regulatory instruments and standards:

| Regulatory Instrument | Issuing Authority | Relevant Provisions |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 12.4 – Customer Authentication |
| Financial Services Act 2013 (FSA) | Parliament of Malaysia | Sections governing consumer protection and operational risk |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Processing and protection of customer personal data |
| Electronic Commerce Act 2006 | Parliament of Malaysia | Legal recognition of electronic transactions and authentication |
| Guidelines on Electronic Money (e-Money) | Bank Negara Malaysia | Authentication requirements for e-money transactions |
| Payment Systems Policy Document | Bank Negara Malaysia | Controls for payment system participants |
| Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLATFPUAA) | Parliament of Malaysia | Customer identification and verification |
| [Organization Name] Information Security Policy | [Organization Name] | Overarching information security governance |

### 2.2 BNM RMiT Clause 12.4 — Summary of Requirements

*Provide a concise summary of the key obligations imposed by BNM RMiT Clause 12.4 as they pertain to customer authentication. Authors should reference the current version of the RMiT Policy Document.*

BNM RMiT Clause 12.4 requires financial institutions to:

- Implement **multi-factor authentication (MFA)** for high-risk transactions and sensitive account operations
- Apply **risk-based authentication** that dynamically adjusts authentication strength based on assessed transaction risk
- Ensure authentication mechanisms are **resistant to known attack vectors** including phishing, man-in-the-middle attacks, SIM swapping, and credential stuffing
- Maintain **out-of-band authentication channels** for transaction authorization where feasible
- Conduct **regular reviews** of authentication controls to address emerging threats
- Implement **controls to detect and respond** to authentication anomalies and suspicious activity
- Ensure that authentication credentials are **protected throughout their lifecycle**

### 2.3 Relationship to Other Policies

*Describe how this policy interacts with and complements other organizational policies.*

This policy should be read in conjunction with the following [Organization Name] policies and standards:

- **Access Control Policy** — Governs authentication for internal systems and privileged access
- **Data Classification and Handling Policy** — Defines sensitivity levels of customer data requiring protection
- **Fraud Risk Management Policy** — Establishes fraud detection and response requirements
- **Incident Response Policy** — Defines procedures for responding to authentication breaches
- **Third-Party Risk Management Policy** — Governs authentication obligations of third-party providers
- **Business Continuity Policy** — Addresses authentication in disaster recovery scenarios
- **Customer Onboarding and eKYC Policy** — Defines initial identity verification requirements

---

## 3. Definitions and Abbreviations

### 3.1 Definitions

*Define all key terms used in this policy to ensure consistent interpretation. Add organization-specific terms as required.*

| Term | Definition |
|---|---|
| **Authentication** | The process of verifying the claimed identity of a customer or user before granting access to systems, accounts, or the ability to initiate transactions. |
| **Authorization** | The process of determining whether an authenticated customer has permission to perform a specific action or access specific resources. |
| **Credential** | Any piece of information used to authenticate a customer's identity, including passwords, PINs, one-time passwords (OTPs), biometric data, or cryptographic keys. |
| **Dynamic Authentication** | An authentication approach in which the required authentication factor(s) and strength are determined in real time based on assessed risk at the time of the request. |
| **Factor of Authentication** | A category of credential used in authentication: something you **know** (knowledge), something you **have** (possession), or something you **are** (inherence/biometrics). |
| **High-Risk Transaction** | A transaction that exceeds defined monetary thresholds, exhibits anomalous behavioral characteristics, or is assessed by the fraud risk engine as presenting elevated risk of fraud or unauthorized activity. |
| **Knowledge-Based Authentication (KBA)** | Authentication based on information only the customer should know, such as passwords, PINs, or security questions. |
| **Multi-Factor Authentication (MFA)** | Authentication requiring the customer to present credentials from two or more distinct authentication factor categories. |
| **One-Time Password (OTP)** | A password valid for a single authentication session or transaction, typically delivered via SMS, email, or authenticator application. |
| **Out-of-Band Authentication** | Authentication that uses a channel separate from the primary transaction channel to deliver or verify authentication credentials, reducing the risk of interception. |
| **Phishing** | A social engineering attack in which fraudsters impersonate legitimate entities to deceive customers into revealing authentication credentials. |
| **Risk-Based Authentication (RBA)** | An adaptive authentication approach that evaluates contextual risk signals to determine the appropriate level of authentication required for a given transaction or access event. |
| **Session** | An active, authenticated interaction between a customer and [Organization Name]'s systems, bounded by login and logout or timeout events. |
| **SIM Swap Fraud** | A fraudulent attack in which a criminal convinces a mobile network operator to transfer a victim's phone number to a SIM card under the criminal's control, enabling interception of SMS OTPs. |
| **Step-Up Authentication** | The process of requiring additional authentication factors during an active session when a higher-risk action is requested. |
| **Token** | A physical or software-based device or application that generates time-based or event-based one-time passwords used as authentication credentials. |

### 3.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| AML | Anti-Money Laundering |
| API | Application Programming Interface |
| ATM | Automated Teller Machine |
| BNM | Bank Negara Malaysia |
| CIAM | Customer Identity and Access Management |
| FIDO | Fast Identity Online |
| IAM | Identity and Access Management |
| IVR | Interactive Voice Response |
| KBA | Knowledge-Based Authentication |
| MFA | Multi-Factor Authentication |
| OTP | One-Time Password |
| PDPA | Personal Data Protection Act 2010 |
| PIN | Personal Identification Number |
| RBA | Risk-Based Authentication |
| RMiT | Risk Management in Technology |
| SMS | Short Message Service |
| SOC | Security Operations Centre |
| TLS | Transport Layer Security |
| TOTP | Time-Based One-Time Password |

---

## 4. Roles and Responsibilities

### 4.1 Overview

*Describe the governance structure for customer authentication policy ownership, implementation, and oversight. Ensure all key stakeholders are represented.*

Effective customer authentication requires collaboration across multiple functions. The following section defines the accountability and responsibility assignments for all parties involved in the design, implementation, monitoring, and governance of authentication controls.

### 4.2 RACI Matrix

*Complete the RACI matrix below for all key authentication activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IAM Manager | CISO | IT Security Team | Technology/Engineering | Fraud & Risk | Compliance | Internal Audit | Customer Service | Third-Party Providers |
|---|---|---|---|---|---|---|---|---|---|
| Policy ownership and maintenance | A/R | A | C | C | C | C | I | I | I |
| Authentication standards definition | R | A | R | C | C | C | I | I | I |
| Authentication system design and implementation | C | I | C | R | C | I | I | I | C |
| Risk-based authentication rule configuration | R | A | R | C | R | C | I | I | I |
| MFA enrollment and management | R | A | R | R | C | I | I | C | C |
| Authentication monitoring and alerting | C | A | R | C | R | I | I | I | C |
| Fraud investigation (authentication-related) | I | I | C | I | R | I | I | C | I |
| Authentication exception approval | A | A | C | I | C | C | I | I | I |
| Regulatory reporting (authentication incidents) | C | R | C | I | C | R | I | I | I |
| Annual policy review | R | A | C | C | C | C | C | I | I |
| Staff awareness and training | C | A | R | C | C | C | I | R | I |
| Third-party authentication oversight | R | A | R | C | C | C | I | I | R |
| Incident response (authentication breach) | C | A | R | R | R | C | I | C | C |

### 4.3 Detailed Role Descriptions

#### 4.3.1 IAM Manager (Policy Owner)

The IAM Manager is the designated Policy Owner and is accountable for:

- Maintaining this policy and ensuring it remains current with regulatory requirements and the threat landscape
- Overseeing the design and implementation of authentication controls across all customer channels
- Reporting on authentication control effectiveness to senior management and the Board Risk Committee
- Managing escalations and exceptions to authentication requirements
- Coordinating with Compliance to ensure BNM RMiT obligations are met
- Approving authentication technology solutions and vendor selections

#### 4.3.2 Chief Information Security Officer (CISO)

- Providing strategic direction for the customer authentication security program
- Approving major changes to authentication policy and standards
- Reporting authentication-related incidents and risk posture to executive management
- Ensuring adequate resources are allocated to authentication security

#### 4.3.3 IT Security Team

- Implementing and maintaining authentication security controls and configurations
- Conducting authentication security assessments and penetration testing
- Monitoring authentication systems for security events and anomalies
- Maintaining authentication-related security monitoring rules and alerting

#### 4.3.4 Technology and Engineering Teams

- Developing and maintaining authentication systems, APIs, and integrations
- Implementing authentication requirements specified by the IAM Manager and IT Security
- Ensuring authentication systems meet performance, availability, and security requirements
- Patching and updating authentication infrastructure

#### 4.3.5 Fraud and Financial Crime Risk

- Defining fraud risk thresholds that trigger step-up authentication
- Operating the fraud risk engine and behavioral analytics platform
- Investigating authentication-related fraud incidents
- Providing fraud intelligence to inform authentication rule updates

#### 4.3.6 Compliance Department

- Interpreting and communicating BNM RMiT and other regulatory requirements
- Reviewing this policy for regulatory accuracy prior to approval
- Monitoring regulatory developments that may require policy updates
- Supporting regulatory examinations and submissions relating to authentication

#### 4.3.7 Internal Audit

- Independently assessing the design and operating effectiveness of authentication controls
- Reporting audit findings to the Audit Committee
- Tracking remediation of authentication-related audit findings

#### 4.3.8 Customer Service

- Supporting customers with authentication-related inquiries and issues
- Escalating suspected account takeover or authentication fraud to Fraud Risk
- Applying this policy when assisting customers through alternative authentication channels

---

## 5. Authentication Risk Classification

### 5.1 Risk Classification Framework

*Define the risk tiers used to classify transactions and access events for the purpose of determining appropriate authentication requirements. Tiers should reflect both monetary value and behavioral/contextual risk signals.*

[Organization Name] classifies all customer authentication events into risk tiers based on a combination of quantitative and qualitative risk factors. The risk classification engine evaluates signals in real time and assigns each authentication event to one of four tiers.

### 5.2 Risk Tier Definitions

| Risk Tier | Label | Description | Authentication Requirement |
|---|---|---|---|
| **Tier 1** | Low Risk | Standard account access, balance inquiries, statement viewing, low-value transactions within normal behavioral profile | Single-factor authentication permitted; session-based trust applicable |
| **Tier 2** | Medium Risk | Transactions exceeding [RM X] but below [RM Y]; first-time payee additions; access from new devices or locations within acceptable parameters | Two-factor authentication required; one factor must be possession or inherence |
| **Tier 3** | High Risk | Transactions exceeding [RM Y]; changes to security settings or registered contact details; access from unrecognized devices or anomalous geographies | Strong MFA required; out-of-band authentication channel preferred |
| **Tier 4** | Critical Risk | Transactions exceeding [RM Z]; account closure or fund repatriation; access flagged by fraud risk engine with high-confidence anomaly score | MFA with additional step-up controls; manual review may be required |

### 5.3 Risk Signal Inputs

*List all contextual and behavioral signals evaluated by the risk-based authentication engine.*

The following risk signals are evaluated to determine the risk tier of each authentication event:

**Transactional Signals:**
- Transaction amount and currency
- Transaction type (e.g., interbank transfer, bill payment, overseas remittance)
- Payee characteristics (new, saved, high-risk jurisdiction)
- Transaction frequency and velocity

**Device and Network Signals:**
- Device fingerprint and registration status
- Geolocation and IP address reputation
- Use of VPN, proxy, or anonymizing services
- Operating system and browser/application version
- Device jailbreak or root detection

**Behavioral Signals:**
- Deviation from customer's established transaction patterns
- Typing cadence, swipe patterns, and interaction biometrics
- Time of access relative to customer's typical patterns
- Account dormancy or reactivation status

**Account and Identity Signals:**
- Recent password reset or credential changes
- Customer risk rating (from AML/KYC assessment)
- Previous fraud incidents associated with the account
- Customer complaint history related to unauthorized access

### 5.4 Risk Scoring and Threshold Calibration

*Describe the governance process for setting and reviewing risk thresholds.*

Risk scoring thresholds used in the risk-based authentication engine shall be:

- Defined and approved by the IAM Manager in consultation with the Fraud Risk team
- Documented in the **Authentication Risk Threshold Register** (Appendix A)
- Reviewed at minimum **semi-annually**, or immediately following a material fraud event
- Subject to back-testing against historical fraud and false-positive data
- Adjusted based on emerging threat intelligence and fraud typology changes

---

## 6. Policy Statements and Requirements

### 6.1 Core Policy Principles

*State the overarching policy principles that govern all authentication requirements in this document.*

The following principles govern all customer authentication requirements at [Organization Name]:

**Principle 1 — Risk Proportionality:** Authentication strength shall be proportionate to the assessed risk of the transaction or access event. Higher-risk activities shall require stronger and more robust authentication mechanisms.

**Principle 2 — Defense in Depth:** No single authentication control shall be relied upon as the sole safeguard. Authentication controls shall be layered with complementary fraud detection, monitoring, and response capabilities.

**Principle 3 — Phishing and Manipulation Resistance:** Authentication mechanisms for high-risk transactions shall be designed to be resistant to phishing, social engineering, man-in-the-middle, and real-time phishing attacks. Reliance on authentication factors susceptible to interception shall be minimized for high-risk use cases.

**Principle 4 — Customer-Centricity:** Authentication controls shall be designed to minimize friction for legitimate customers while maintaining effective security. Customer experience impacts shall be considered in the design and calibration of authentication requirements.

**Principle 5 — Continuous Improvement:** Authentication controls shall be reviewed and updated regularly to address the evolving threat landscape, technological advancements, and regulatory developments.

**Principle 6 — Accountability:** All authentication events shall be logged in a tamper-evident manner, and authentication-related decisions shall be attributable to accountable individuals or systems.

### 6.2 Mandatory Policy Requirements

*List the specific, enforceable requirements that all in-scope systems and channels must meet. Each requirement should be traceable to a regulatory obligation.*

#### 6.2.1 General Authentication Requirements

- **REQ-AUTH-001:** All customer-facing digital channels shall require authentication before granting access to account information or the ability to initiate transactions.
- **REQ-AUTH-002:** Authentication credentials shall be transmitted exclusively over encrypted channels using TLS 1.2 or higher.
- **REQ-AUTH-003:** Authentication systems shall enforce account lockout after **[N] consecutive failed authentication attempts** within a defined time window.
- **REQ-AUTH-004:** All authentication events (successful and unsuccessful) shall be logged with timestamp, device identifier, IP address, and channel information.
- **REQ-AUTH-005:** Authentication session tokens shall expire after **[N minutes]** of inactivity and shall not be reused after session termination.
- **REQ-AUTH-006:** [Organization Name] shall never request customers to reveal full passwords, PINs, or OTPs through any channel, including phone, email, or chat.
- **REQ-AUTH-007:** Authentication systems shall implement protections against automated credential stuffing, brute-force, and enumeration attacks, including rate limiting and CAPTCHA where appropriate.

#### 6.2.2 Password and PIN Requirements

- **REQ-CRED-001:** Customer passwords shall meet the following minimum complexity requirements:
  - Minimum length of **[N] characters**
  - Combination of uppercase letters, lowercase letters, numerals, and special characters
  - Not contain the customer's name, email address, or date of birth
  - Not be among the [N] most commonly used passwords (blocked list)
- **REQ-CRED-002:** Passwords shall be stored using approved cryptographic hashing algorithms (minimum: bcrypt, scrypt, or Argon2 with appropriate parameters). Passwords shall never be stored in plaintext or reversible encrypted form.
- **REQ-CRED-003:** Customer PINs shall be a minimum of **[N] digits** and shall not consist of sequential or repeated digits (e.g., 123456, 111111).
- **REQ-CRED-004:** Temporary passwords and PINs issued during account onboarding or credential reset shall expire within **[N hours]** of issuance.
- **REQ-CRED-005:** Customers shall be prompted to change passwords that have not been changed within **[N months]**, consistent with the organization's risk assessment.

#### 6.2.3 OTP and Token Requirements

- **REQ-OTP-001:** OTPs shall expire within **[N minutes]** of generation and shall be invalidated after first use.
- **REQ-OTP-002:** OTP delivery via SMS shall include a clear transaction summary to enable customers to verify the transaction before entering the OTP (transaction signing).
- **REQ-OTP-003:** OTPs shall be a minimum of **[N] digits** in length, generated using cryptographically secure random number generators.
- **REQ-OTP-004:** [Organization Name] shall implement controls to detect and mitigate SIM swap fraud before delivering OTPs to potentially compromised mobile numbers.
- **REQ-OTP-005:** Software authenticator tokens (TOTP) shall use approved algorithms (RFC 6238) with a time step not exceeding 30 seconds.

#### 6.2.4 Biometric Authentication Requirements

- **REQ-BIO-001:** Biometric authentication may be used as a factor of authentication, provided that biometric template data is stored locally on the customer's device and is not transmitted to or stored by [Organization Name]'s servers.
- **REQ-BIO-002:** Biometric authentication shall be backed by a knowledge or possession factor that can be used for account recovery or when biometric authentication fails.
- **REQ-BIO-003:** False acceptance rates (FAR) for biometric authentication shall not exceed **[X%]** as tested by [Organization Name] or a qualified third party.
- **REQ-BIO-004:** Biometric authentication implementations shall include liveness detection controls to prevent spoofing using photographs, masks, or recordings.

---

## 7. Authentication Mechanisms and Controls

### 7.1 Approved Authentication Mechanisms

*List all authentication mechanisms approved for use at [Organization Name], their applicable use cases, and any restrictions.*

| Authentication Mechanism | Category | Approved Use Cases | Risk Tier Applicability | Notes / Restrictions |
|---|---|---|---|---|
| Password / Passphrase | Knowledge | Login, account access | Tier 1, 2, 3, 4 (as one factor) | Must meet REQ-CRED-001 requirements |
| Numeric PIN | Knowledge | Mobile app login, ATM | Tier 1, 2 (as one factor) | Minimum [N] digits |
| SMS OTP | Possession | Transaction authorization, login MFA | Tier 2, 3 | Subject to SIM swap controls; not preferred for Tier 4 |
| Email OTP | Possession | Account recovery, low-risk MFA | Tier 2 | Not approved for high-value transactions |
| TOTP (Authenticator App) | Possession | Login MFA, transaction authorization | Tier 2, 3, 4 | Preferred over SMS OTP |
| FIDO2 / Passkeys | Possession / Inherence | Passwordless login, step-up authentication | Tier 2, 3, 4 | Phishing-resistant; preferred for high-risk channels |
| Device Biometrics (Face ID, Fingerprint) | Inherence | Mobile app login, step-up | Tier 2, 3 | Device-bound; must meet REQ-BIO requirements |
| Push Notification Approval | Possession | Out-of-band transaction signing | Tier 3, 4 | Must display transaction details for customer verification |
| Hardware Token (OATH TOTP) | Possession | Corporate banking, privileged access | Tier 3, 4 | For customers without capable mobile devices |
| Voice Biometrics | Inherence | IVR channel authentication | Tier 1, 2 | Must meet FAR/FRR thresholds |
| Knowledge-Based Questions | Knowledge | Account recovery only | Recovery only | Not approved as a primary authentication factor |

### 7.2 Deprecated and Prohibited Authentication Mechanisms

*List authentication mechanisms that are no longer approved or are prohibited, along with migration timelines.*

| Mechanism | Status | Reason | Migration Deadline |
|---|---|---|---|
| Static security questions (for primary authentication) | **Prohibited** | Susceptible to social engineering and data breaches | Immediate — not to be implemented |
| Unencrypted credential transmission (HTTP) | **Prohibited** | Credentials exposed to interception | Immediate |
| MD5 or SHA-1 password hashing | **Prohibited** | Cryptographically broken | [Remediation Date] |
| [Legacy OTP mechanism] | **Deprecated** | [Reason for deprecation] | [Migration Deadline] |

### 7.3 Channel-Specific Authentication Controls

*Describe authentication control requirements specific to each customer-facing channel.*

#### 7.3.1 Internet Banking (Web)

- Initial login shall require a minimum of two authentication factors
- Session timeout shall be enforced after **[N minutes]** of inactivity
- High-risk transactions initiated via internet banking shall require step-up authentication using an out-of-band channel
- Browser-based fingerprinting shall contribute to risk scoring
- Customers shall be shown their last login time and location upon authentication

#### 7.3.2 Mobile Banking Application

- Mobile application authentication shall support device binding, ensuring the application is bound to a specific registered device
- Biometric authentication may be used as a convenient secondary factor following initial device registration
- The application shall detect rooted or jailbroken devices and apply additional authentication friction or deny access as per the Mobile Security Standard
- Lost or stolen device reporting shall trigger immediate session invalidation and require re-enrollment

#### 7.3.3 ATM and Self-Service Terminals

- Card-based authentication (chip and PIN) is the primary authentication mechanism at ATMs
- PIN entry shall be protected by a certified PIN Entry Device (PED) compliant with applicable PCI standards
- ATM session shall terminate after **[N seconds]** of inactivity

#### 7.3.4 Telephone Banking and IVR

- Telephone banking shall authenticate customers using a combination of knowledge factors and/or voice biometrics
- Agents assisting customers shall follow the Identity Verification Procedure for Assisted Channels (Appendix C)
- Sensitive account changes initiated via telephone shall require additional verification

---

## 8. Multi-Factor Authentication Requirements

### 8.1 MFA Mandate

*State clearly which transactions and access events require MFA, consistent with BNM RMiT Clause 12.4.*

Multi-factor authentication is **mandatory** for the following:

- All initial customer logins to internet banking and mobile banking platforms
- All fund transfers exceeding **[RM amount]** to a third-party payee
- All interbank transfers and overseas remittances
- Addition of new payees or modification of saved payee details
- Changes to customer contact information (phone number, email address, mailing address)
- Changes to authentication credentials (password, PIN, registered authenticator)
- Activation of new devices or channels
- Changes to transaction limits
- Account closure or freezing requests

### 8.2 MFA Factor Combinations

*Specify which factor combinations are approved for MFA, taking into account the risk tier of the transaction.*

| Risk Tier | Required Factors | Approved Factor Combinations |
|---|---|---|
| Tier 1 | Single factor | Password or PIN |
| Tier 2 | Two factors (any two distinct categories) | Password + SMS OTP; Password + TOTP; PIN + Device Biometric |
| Tier 3 | Two factors (possession or inherence required) | Password + Push Notification; Password + FIDO2; Password + TOTP |
| Tier 4 | Two factors (phishing-resistant preferred) + additional controls | FIDO2 + Push Notification with transaction signing; Password + Hardware Token + manual review |

### 8.3 MFA Enrollment and Recovery

- MFA enrollment shall be completed during customer onboarding and shall be mandatory for internet banking registration
- Customers shall have the option to enroll in at least **two** MFA methods to ensure account access continuity
- MFA recovery (re-enrollment following loss of registered factor) shall require identity re-verification equivalent to the original onboarding standard
- MFA recovery events shall generate alerts reviewed by the Fraud team

---

## 9. Transaction Risk-Based Authentication

### 9.1 Risk-Based Authentication Engine

*Describe the risk-based authentication system, its inputs, outputs, and governance.*

[Organization Name] operates a real-time Risk-Based Authentication (RBA) engine that evaluates each authentication and transaction request against a defined set of risk signals. The engine outputs a risk score that maps to a risk tier and determines the authentication treatment applied to the transaction.

The RBA engine shall:

- Evaluate all risk signals defined in Section 5.3 within **[N milliseconds]** to avoid material customer experience impact
- Be operated and maintained by the IAM and Fraud Risk teams under a shared governance model
- Have all rule changes subject to the **Authentication Rule Change Control Process** (Appendix B)
- Maintain a comprehensive audit log of all risk scoring decisions

### 9.2 Authentication Treatments by Transaction Type

*Map common transaction types to their default authentication treatment based on risk classification.*

| Transaction Type | Default Risk Tier | Default Authentication Requirement | Override Conditions |
|---|---|---|---|
| Account login (recognized device) | Tier 1 | Password or PIN | Elevated if anomalous signals detected |
| Account login (unrecognized device) | Tier 3 | MFA with step-up | — |
| Balance inquiry / statement view | Tier 1 | Session-based (post-login) | — |
| Bill payment (saved biller, ≤ RM [X]) | Tier 2 | OTP confirmation | Amount increase triggers Tier 3 |
| Interbank transfer (saved payee, ≤ RM [X]) | Tier 2 | OTP confirmation | Velocity or amount triggers step-up |
| Interbank transfer (new payee) | Tier 3 | Strong MFA + new payee cooling period | — |
| Interbank transfer (> RM [X]) | Tier 3–4 | Strong MFA; fraud review for high amounts | — |
| Overseas remittance | Tier 3 | Strong MFA | High-risk jurisdiction triggers Tier 4 |
| Payee management (add/modify/delete) | Tier 3 | MFA + cooling period | — |
| Security settings change | Tier 3–4 | MFA; some changes require manual verification | — |
| Account closure | Tier 4 | MFA + manual review | — |

### 9.3 Transaction Signing

For Tier 3 and Tier 4 transactions, authentication shall incorporate **transaction signing**, whereby the OTP or push notification presented to the customer explicitly includes the following transaction details for verification:

- Transaction type
- Payee name and account number (masked where appropriate)
- Transaction amount and currency
- Date and time of request
- Reference number

Customers shall be clearly instructed not to approve a transaction they did not initiate.

### 9.4 Cooling-Off Periods

*Define mandatory cooling-off periods for high-risk account changes.*

The following cooling-off periods shall apply after designated account changes to protect customers from social engineering attacks:

| Account Change | Cooling-Off Period | Effect During Cooling-Off Period |
|---|---|---|
| Addition of new payee | [N hours / days] | Transfers to new payee limited to RM [X] |
| Change of registered mobile number | [N hours] | OTPs delivered to both old and new number |
| Change of registered email address | [N hours] | Notifications sent to both old and new address |
| Increase of transaction limit | [N hours] | New limit not effective until cooling-off expires |
| Re-enrollment of MFA factor | [N hours] | Restricted channel access |

---

## 10. Authentication for Digital and Online Channels

### 10.1 Open Banking and API Authentication

*Define authentication requirements for API-based and open banking channels.*

Where [Organization Name] exposes customer account data or payment initiation capabilities via APIs (including open banking under applicable BNM frameworks), the following authentication requirements shall apply:

- **OAuth 2.0 and OpenID Connect** shall be used as the authorization and authentication framework for API-based access
- Customers shall explicitly consent to third-party access, and consent shall be time-limited and revocable
- Strong customer authentication (SCA) equivalent to Tier 3 requirements shall apply for payment initiation via third-party providers
- API access tokens shall have defined expiry periods and shall be revoked upon customer consent withdrawal
- Third-party providers accessing customer data or initiating payments shall be registered and subject to the Third-Party Authentication Standard (Appendix D)

### 10.2 Session Management

*Define session management requirements across digital channels.*

| Parameter | Requirement |
|---|---|
| **Session timeout (inactivity)** | Internet banking: [N] minutes; Mobile app: [N] minutes |
| **Absolute session limit** | Maximum session duration: [N] hours regardless of activity |
| **Concurrent sessions** | Maximum [N] concurrent active sessions per customer |
| **Session token binding** | Session tokens shall be bound to device and IP where feasible |
| **Re-authentication trigger** | High-risk transactions within an active session shall require step-up authentication |
| **Logout** | Logout shall invalidate all session tokens server-side immediately |

### 10.3 "Remember This Device" Functionality

Where [Organization Name] offers device trust or "remember this device" functionality:

- Device trust shall be established only after successful MFA completion
- Device trust shall expire after a maximum of **[N days]** and require re-enrollment
- Customers shall be able to view and revoke trusted devices through their account settings
- Device trust shall not reduce the authentication requirement for Tier 3 or Tier 4 transactions
- Suspicious device activity shall trigger revocation of device trust status

---

## 11. Privileged and Administrative Access Authentication

### 11.1 Administrative Access to Authentication Systems

*Define authentication requirements for staff and administrators who manage authentication systems.*

Access to authentication system administration consoles, IAM platforms, and fraud rule management interfaces by [Organization Name] staff shall be subject to the following requirements:

- **MFA is mandatory** for all administrative access to authentication infrastructure
- Hardware tokens or FIDO2 authenticators shall be preferred over SMS OTP for privileged access
- Privileged sessions shall be recorded and subject to session management controls defined in the Privileged Access Management Policy
- Administrative access shall be granted on a least-privilege basis and reviewed quarterly
- Emergency access procedures shall be documented in the Emergency Access Runbook (Appendix E)

### 11.2 Third-Party and Vendor Access

- Third-party vendors with access to authentication systems shall be subject to [Organization Name]'s Third-Party Risk Management Policy
- Vendor authentication shall meet the same MFA standards as internal privileged access
- Vendor access sessions shall be monitored and time-limited
- Vendor access shall be reviewed at minimum quarterly and revoked immediately upon contract termination

---

## 12. Credential Management and Lifecycle

### 12.1 Credential Issuance

*Describe how credentials are issued to new customers and the controls in place at the point of issuance.*

- Initial credentials shall be issued to customers only after successful identity verification in accordance with the Customer Onboarding and eKYC Policy
- Temporary credentials shall be transmitted via a secure, out-of-band channel separate from the credential itself
- Customers shall be required to change temporary passwords and PINs on first use
- Credential issuance events shall be logged and may trigger fraud review for flagged accounts

### 12.2 Credential Reset and Recovery

- Self-service credential reset shall require the customer to authenticate using an alternative registered factor
- Agent-assisted credential reset shall require identity re-verification per the Assisted Channel Verification Procedure (Appendix C)
- Social engineering-resistant questions shall not be used as the sole mechanism for credential recovery
- Credential reset events shall generate notifications to the customer's registered contact details (email and/or SMS)
- Repeated credential reset requests within a short period shall trigger a fraud alert

### 12.3 Credential Expiry and Rotation

| Credential Type | Expiry / Rotation Policy |
|---|---|
| Customer password | Prompt after [N months] of non-rotation; hard expiry after [N months] |
| Customer PIN | Prompt after [N months]; no hard expiry |
| Temporary password | Expires after [N hours] or first use, whichever is earlier |
| OTP | Expires after [N minutes] or first use |
| Device trust token | Expires after [N days] |
| API access token | Expires after [N minutes/hours] |

### 12.4 Compromised Credential Response

When [Organization Name] determines or has reasonable belief that a customer's credentials have been compromised (e.g., through credential breach intelligence or fraud detection):

1. The affected credential(s) shall be immediately invalidated
2. Active sessions associated with the credential shall be terminated
3. The customer shall be notified through their registered contact channel
4. The customer shall be required to complete identity verification before new credentials are issued
5. The incident shall be logged and assessed by the Fraud and IT Security teams
6. A suspicious activity report shall be filed if warranted under AML obligations

---

## 13. Authentication Monitoring and Anomaly Detection

### 13.1 Authentication Logging Requirements

*Define what must be logged for all authentication events to support forensic investigation and regulatory reporting.*

All authentication events shall be logged in a centralized, tamper-evident log management system. The following information shall be captured for every authentication event:

| Log Field | Description |
|---|---|
| Event timestamp (UTC) | Date and time of the authentication attempt |
| Customer identifier | Masked customer account or reference number |
| Event type | Login, transaction authorization, step-up, failed attempt, lockout, etc. |
| Outcome | Success / Failure / Challenge issued |
| Authentication factor used | Type of factor(s) presented |
| Device identifier | Registered device ID or fingerprint |
| IP address | Source IP address (masked for privacy where required) |
| Geolocation | Derived geolocation of the authentication request |
| Channel | Internet banking, mobile app, ATM, IVR, etc. |
| Risk tier assigned | Risk tier determined by RBA engine |
| Risk score | Numerical risk score from RBA engine |
| Session identifier | Unique session reference |

Authentication logs shall be retained for a minimum of **[N years]** in accordance with the Data Retention Policy and BNM regulatory requirements.

### 13.2 Anomaly Detection and Alerting

*Describe the automated and manual controls used to detect authentication anomalies.*

[Organization Name] shall implement automated detection of the following authentication anomalies:

| Anomaly Type | Detection Method | Alert Severity | Response Action |
|---|---|---|---|
| Multiple failed authentication attempts | Rule-based threshold | High | Account lockout; fraud alert |
| Authentication from new/unknown device | Device fingerprint comparison | Medium | Step-up authentication required |
| Authentication from unusual geography | IP geolocation analysis | Medium–High | Step-up; Fraud team notification |
| Authentication from high-risk IP (VPN/Tor/proxy) | IP reputation feed | High | Additional friction; potential block |
| Credential stuffing pattern | Velocity and source analysis | Critical | Rate limiting; IP block; SOC alert |
| SIM swap indicator | Telco data feed integration | Critical | Suspend SMS OTP; Fraud team alert |
| Impossible travel (rapid geo-shift) | Session geolocation comparison | High | Session termination; re-authentication required |
| Mass account lockout event | Aggregate threshold monitoring | Critical | SOC escalation; incident response activation |

### 13.3 Security Operations Centre (SOC) Integration

- Authentication anomaly alerts shall be integrated with the [Organization Name] SOC SIEM platform
- High and Critical severity alerts shall be reviewed by SOC analysts within **[N minutes]** of generation
- Confirmed authentication attacks shall trigger the Incident Response Procedure
- Authentication monitoring dashboards shall be reviewed by the IAM Manager and Fraud team at minimum **[weekly]**

### 13.4 Fraud Intelligence Sharing

[Organization Name] shall participate in industry fraud intelligence sharing arrangements, including:

- Reporting confirmed authentication-related fraud to BNM as required
- Participating in [relevant industry consortium / FCCB] information sharing for authentication attack typologies
- Subscribing to credential breach intelligence feeds to proactively invalidate compromised customer credentials

---

## 14. Exceptions and Escalation Process

### 14.1 Exception Policy

*Define the circumstances under which exceptions to this policy may be granted and the controls required to manage exceptions safely.*

Exceptions to the requirements of this policy may only be granted in circumstances where:

- Technical or operational constraints make compliance with a specific requirement impractical in the short term
- An alternative compensating control provides equivalent or superior risk mitigation
- The exception is temporary and subject to a defined remediation timeline

Exceptions shall **not** be granted for requirements that are explicitly mandated by BNM RMiT or other applicable regulatory instruments without prior consultation with Compliance and, where required, BNM.

### 14.2 Exception Request Process

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Identify the specific policy requirement for which an exception is sought and document the business justification | Requesting Business Unit |
| 2 | Conduct a risk assessment of the exception, identifying the risk exposure and proposed compensating controls | IT Security / Risk Management |
| 3 | Complete the **Authentication Policy Exception Request Form** (Appendix F) | Requesting Business Unit |
| 4 | Submit the exception request to the IAM Manager for initial review | Requesting Business Unit |
| 5 | IAM Manager reviews the exception and escalates to CISO for approval of all Tier 3 or Tier 4 impact exceptions | IAM Manager |
| 6 | CISO reviews and approves or rejects the exception; exceptions affecting regulatory compliance are escalated to the Compliance Committee | CISO |
| 7 | Approved exceptions are documented in the **Exception Register** with defined expiry date | IAM Manager |
| 8 | Compensating controls are implemented and validated | IT Security |
| 9 | Exception is reviewed at minimum every **[N months]** or upon material change in risk | IAM Manager |
| 10 | Exception is remediated, renewed (with justification), or escalated to Board Risk Committee if unresolved after [N months] | IAM Manager / CISO |

### 14.3 Exception Approval Thresholds

| Exception Impact | Approval Authority |
|---|---|
| Low impact (Tier 1 requirements, compensating control available) | IAM Manager |
| Medium impact (Tier 2–3 requirements, compensating control available) | CISO |
| High impact (Tier 4 requirements or regulatory mandates) | CISO + Chief Risk Officer |
| Regulatory exception (BNM-mandated requirement) | Board Risk Committee; BNM notification may be required |

### 14.4 Escalation Process

| Escalation Trigger | Escalation Path |
|---|---|
| Exception request denied at IAM Manager level | Requesting unit may appeal to CISO with additional justification |
| Unresolved exception older than [N months] | Automatic escalation to Chief Risk Officer |
| Exception involves potential regulatory breach | Immediate escalation to Compliance and Chief Risk Officer |
| Authentication breach during exception period | Immediate incident response activation; exception reviewed |
| Exception cannot be remediated within 12 months | Board Risk Committee notification |

---

## 15. Compliance and Enforcement

### 15.1 Compliance Obligations

*State the compliance obligations of all parties subject to this policy.*

All personnel, systems, and third-party providers within the scope of this policy are required to comply with its requirements. Compliance with this policy contributes directly to [Organization Name]'s adherence to BNM RMiT Clause 12.4 and related regulatory obligations.

### 15.2 Compliance Monitoring and Assurance

| Assurance Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| Self-assessment against policy requirements | Annually | IAM Manager | Self-assessment report |
| Compliance review by Compliance Department | Annually | Compliance | Compliance assessment report |
| Internal audit of authentication controls | At minimum every [N months] | Internal Audit | Audit report to Audit Committee |
| Penetration testing of authentication systems | Annually and after material change | IT Security / External Assessor | Penetration test report |
| Authentication control effectiveness review | Quarterly | IAM Manager + Fraud Risk | Dashboard review minutes |
| BNM regulatory examination | As directed by BNM | All relevant departments | Regulatory submission |

### 15.3 Key Performance Indicators

*Define measurable indicators used to assess the effectiveness of authentication controls.*

| KPI | Target | Measurement Frequency |
|---|---|---|
| MFA enrollment rate for internet banking customers | ≥ [X]% | Monthly |
| Authentication-related fraud loss as % of transaction volume | < [X]% | Monthly |
| Account takeover incident rate | < [X] per [N] customers | Monthly |
| Mean time to detect (MTTD) for authentication anomalies | < [N minutes] | Monthly |
| Mean time to respond (MTTR) to authentication incidents | < [N hours] | Monthly |
| Percentage of Tier 3/4 transactions with MFA | 100% | Monthly |
| Open authentication-related audit findings (overdue) | 0 critical; < [N] moderate | Quarterly |
| Policy exceptions open beyond approved tenure | 0 | Quarterly |

### 15.4 Non-Compliance Consequences

Failure to comply with this policy may result in:

- **For internal staff:** Disciplinary action up to and including termination of employment, in accordance with [Organization Name]'s Human Resources Policy and applicable employment law
- **For third-party providers:** Remediation requirements, contractual penalties, suspension, or termination of vendor relationship
- **For the organization:** Regulatory sanctions, fines, reputational damage, and potential license implications under applicable BNM regulations

### 15.5 Regulatory Reporting Obligations

[Organization Name] shall report to BNM in accordance with applicable reporting obligations, including but not limited to:

- Reporting of significant authentication-related incidents and breaches as required under BNM RMiT
- Submission of data and information requested during regulatory examinations
- Notification of material changes to authentication systems or controls where required

---

## 16. Review and Approval History

### 16.1 Policy Review Schedule

This policy shall be reviewed at minimum **annually**, or in any of the following circumstances:

- Material change in BNM regulatory requirements or RMiT obligations
- Significant change in the threat landscape affecting customer authentication
- Material authentication-related security incident or breach
- Introduction of a new customer-facing channel or authentication technology
- Material change in [Organization Name]'s product or service offerings
- Direction from Internal Audit, Compliance, or Board Risk Committee

### 16.2 Version History

*Record all versions of this document, including the nature of changes made at each revision.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Initial policy issuance |
| [1.1] | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Reviewer Name] | [Description of major revision] |

### 16.3 Approval Sign-Off

*Obtain formal approval signatures from all required approvers before this policy is issued or revised.*

| Role | Name | Signature | Date of Approval |
|---|---|---|---|
| IAM Manager (Policy Owner) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |
| Chief Compliance Officer | [Name] | [Signature] | [Date] |
| Chief Technology Officer | [Name] | [Signature] | [Date] |
| Board Risk Committee Chairperson | [Name] | [Signature] | [Date] |

### 16.4 Distribution List

*Record the parties to whom this policy has been formally distributed.*

| Recipient | Role / Department | Distribution Date | Method |
|---|---|---|---|
| [Name] | [Role] | [Date] | [Email / Intranet / Hard Copy] |
| All Internet Banking Operations Staff | Operations | [Date] | Intranet |
| [Relevant Third-Party Providers] | Vendor | [Date] | Secure email |

---

## 17. References

*List all regulatory instruments, standards, and internal policies referenced in this document.*

### 17.1 Regulatory References

| Reference | Document Title | Issuing Authority | Applicable Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | **Clause 12.4 — Customer Authentication** |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10 — Cybersecurity |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 11 — Technology Operations |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Consumer protection provisions |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | All applicable sections |
| ECA 2006 | Electronic Commerce Act 2006 | Parliament of Malaysia | Authentication of electronic communications |
| AMLATFPUAA | Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 | Parliament of Malaysia | Customer identification requirements |
| BNM e-Money Guidelines | Guidelines on Electronic Money | Bank Negara Malaysia | Authentication requirements for e-money |

### 17.2 Standards and Frameworks

| Reference | Document Title | Body |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC |
| NIST SP 800-63B | Digital Identity Guidelines: Authentication and Lifecycle Management | NIST |
| FIDO2 / WebAuthn | Web Authentication Specification | W3C / FIDO Alliance |
| RFC 6238 | TOTP: Time-Based One-Time Password Algorithm | IETF |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | PCI SSC |
| OWASP ASVS | Application Security Verification Standard | OWASP |

### 17.3 Internal Policy References

| Document Title | Owner | Document ID |
|---|---|---|
| Information Security Policy | CISO | [Document ID] |
| Access Control Policy | IAM Manager | [Document ID] |
| Data Classification and Handling Policy | Data Protection Officer | [Document ID] |
| Fraud Risk Management Policy | Head of Fraud Risk | [Document ID] |
| Incident Response Policy | CISO | [Document ID] |
| Third-Party Risk Management Policy | Chief Risk Officer | [Document ID] |
| Business Continuity Policy | Chief Operating Officer | [Document ID] |
| Customer Onboarding and eKYC Policy | Head of Compliance | [Document ID] |
| Privileged Access Management Policy | IAM Manager | [Document ID] |
| Data Retention Policy | Data Protection Officer | [Document ID] |

---

## 18. Appendices

### Appendix A: Authentication Risk Threshold Register

*This appendix documents the specific monetary thresholds and risk scoring parameters used by the risk-based authentication engine. This register is a controlled document and must be approved by the IAM Manager and Head of Fraud Risk before any changes take effect.*

| Parameter | Current Value | Last Reviewed | Approved By |
|---|---|---|---|
| Tier 1 / Tier 2 transaction threshold | RM [X] | [Date] | [Name] |
| Tier 2 / Tier 3 transaction threshold | RM [Y] | [Date] | [Name] |
| Tier 3 / Tier 4 transaction threshold | RM [Z] | [Date] | [Name] |
| New payee cooling-off period | [N hours] | [Date] | [Name] |
| Failed login lockout threshold | [N attempts] | [Date] | [Name] |
| Session inactivity timeout (internet banking) | [N minutes] | [Date] | [Name] |
| Session inactivity timeout (mobile) | [N minutes] | [Date] | [Name] |
| Device trust token expiry | [N days] | [Date] | [Name] |
| OTP validity period | [N minutes] | [Date] | [Name] |
| Biometric FAR threshold | [X%] | [Date] | [Name] |
| Fraud risk score (Tier 3 trigger) | [Score threshold] | [Date] | [Name] |
| Fraud risk score (Tier 4 trigger) | [Score threshold] | [Date] | [Name] |

---

### Appendix B: Authentication Rule Change Control Process

*This appendix describes the change management process for modifications to authentication rules, thresholds, and RBA engine configurations.*

**Scope:** All changes to the RBA engine rules, fraud scoring thresholds, authentication mechanism configurations, and session management parameters.

**Process Steps:**

1. **Change Request:** The requesting team submits an Authentication Rule Change Request, documenting the proposed change, business justification, expected impact, and rollback plan.
2. **Risk Assessment:** IT Security and Fraud Risk jointly assess the potential impact of the change on security posture and customer experience.
3. **Testing:** Changes are tested in a non-production environment. Test results are documented.
4. **Approval:** Changes are approved by the IAM Manager (low risk) or CISO (high risk) prior to production deployment.
5. **Implementation:** Changes are deployed through the standard change management process with appropriate change advisory board (CAB) approval.
6. **Post-Change Review:** Authentication metrics and fraud indicators are monitored for [N days] following implementation to detect unintended consequences.
7. **Documentation:** The Authentication Risk Threshold Register (Appendix A) is updated to reflect approved changes.

---

### Appendix C: Identity Verification Procedure for Assisted Channels

*This appendix provides the step-by-step procedure for verifying customer identity when authentication is assisted by a contact centre agent or branch staff.*

*This procedure must be followed in full before any sensitive account action is performed or information is disclosed to the customer through an assisted channel.*

**Step 1 — Initial Identification**
- Request the customer's full name and account number / customer reference number.

**Step 2 — Primary Verification**
- Verify **[N]** of the following knowledge-based identifiers: date of birth, registered address, registered email, last [N] digits of NRIC/passport.

**Step 3 — Transaction History Verification (if required)**
- For Tier 3 or Tier 4 actions, additionally verify at least one recent transaction detail (amount, payee, date) from the customer's transaction history.

**Step 4 — OTP Verification (for account changes)**
- For account changes or credential resets, dispatch an OTP to the customer's registered mobile number and confirm receipt.

**Step 5 — Fraud Indicators Check**
- Before proceeding, check the customer's account against the current fraud watch list and any active fraud alerts.

**Step 6 — Documentation**
- Record the verification steps completed, the identity elements verified, and the outcome in the customer service interaction log.

*Agent Note: If you have any doubt about the customer's identity, do NOT proceed. Escalate immediately to your supervisor and the Fraud team.*

---

### Appendix D: Third-Party Authentication Standard

*This appendix sets out the authentication requirements that apply to third-party providers accessing [Organization Name] systems or customer data.*

*[To be completed with reference to [Organization Name]'s Open Banking framework and Third-Party Risk Management Policy.]*

| Requirement Area | Requirement |
|---|---|
| Registration | Third parties must be registered and approved prior to access |
| Authentication protocol | OAuth 2.0 with PKCE; OpenID Connect for customer authentication |
| Strong customer authentication | SCA equivalent to Tier 3 required for payment initiation |
| Token management | Access tokens expire after [N minutes]; refresh tokens expire after [N hours] |
| Customer consent | Explicit, time-limited, revocable consent required for each access scope |
| Monitoring | Third-party access events logged and monitored by [Organization Name] |
| Incident notification | Third parties must notify [Organization Name] within [N hours] of authentication-related incidents |
| Annual review | Third-party authentication controls reviewed annually |

---

### Appendix E: Emergency Access Runbook

*This appendix provides procedures for emergency access to authentication systems in the event of a system outage, incident response scenario, or other emergency.*

*[Restricted — Access limited to IAM Manager, CISO, and designated alternates.]*

**Trigger Conditions:**
- Authentication system outage affecting customer access
- Active authentication-related cyberattack requiring emergency response
- Key personnel unavailability during a critical incident

**Emergency Access Controls:**
- Emergency access credentials are stored in [Secure Vault Location] and require dual authorization to retrieve
- Emergency access is subject to session recording and post-incident review
- All emergency access events are logged and reported to the CISO and Chief Risk Officer within [N hours]
- Emergency access is time-limited to [N hours] and must be reviewed and extended by the CISO if required beyond that period

**Fallback Authentication Procedures:**
- In the event of MFA system outage, the following fallback authentication procedure applies: [Define fallback — e.g., temporary suspension of non-essential transactions; manual verification via branch only]
- Customer communications to be issued by [Communications Team] if authentication channels are unavailable for more than [N minutes]

---

### Appendix F: Authentication Policy Exception Request Form

*Complete this form in full and submit to the IAM Manager for review.*

| Field | Details |
|---|---|
| **Request Reference** | [Auto-generated / Sequential number] |
| **Date of Request** | [Date] |
| **Requesting Department** | [Department] |
| **Requestor Name and Title** | [Name], [Title] |
| **Policy Requirement(s) Affected** | [Cite specific policy requirement reference(s)] |
| **Description of Non-Compliance** | [Describe what requirement cannot be met and why] |
| **Business Justification** | [Explain the business or technical reason for the exception] |
| **Risk Assessment** | [Describe the increased risk exposure created by the exception] |
| **Proposed Compensating Controls** | [Describe controls that will mitigate the risk during the exception period] |
| **Requested Exception Duration** | [Start date] to [End date] |
| **Remediation Plan** | [Describe how full compliance will be achieved and by when] |
| **Requestor Signature** | [Signature] |
| **IAM Manager Decision** | Approved / Rejected / Escalated |
| **IAM Manager Comments** | [Comments] |
| **IAM Manager Signature** | [Signature and Date] |
| **CISO Decision (if required)** | Approved / Rejected |
| **CISO Signature** | [Signature and Date] |

---

### Appendix G: Glossary of Fraud Typologies Relevant to Customer Authentication

*This appendix provides a reference glossary of common fraud typologies that target customer authentication mechanisms, to support awareness and control design.*

| Fraud Typology | Description | Primary Authentication Risk |
|---|---|---|
| Account Takeover (ATO) | Fraudster gains unauthorized access to a customer's account using stolen credentials | All authentication channels |
| Credential Stuffing | Automated use of leaked username/password combinations against authentication systems | Knowledge-based authentication |
| SIM Swap Fraud | Fraudster hijacks a customer's mobile number to intercept SMS OTPs | SMS OTP delivery |
| Phishing | Deceptive communications to trick customers into revealing credentials | All credential types |
| Real-Time Phishing (Reverse Proxy) | Attacker proxies authentication session in real time to bypass MFA | OTP-based MFA |
| Social Engineering (Vishing) | Voice-based fraud to manipulate customers or staff into revealing credentials or resetting authentication | Assisted channel authentication |
| SIM Clone | Physical cloning of SIM card to intercept SMS | SMS OTP delivery |
| Malware / Banking Trojans | Malware on customer devices that intercepts credentials or manipulates transactions | Device-based authentication |
| Man-in-the-Browser (MitB) | Malware that manipulates browser sessions after authentication | Session integrity |

---

*End of Document*

---

**Document Control Notice**

This document is version-controlled. The master copy is maintained by the IAM Manager and stored in [Document Management System]. Printed copies are uncontrolled. Always verify you are referencing the current approved version before use.

| Policy Owner | IAM Manager |
|---|---|
| **Classification** | Confidential |
| **Next Scheduled Review** | [Next Review Date] |
| **Document Repository** | [Document Management System / SharePoint Path] |