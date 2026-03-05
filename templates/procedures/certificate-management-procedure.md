# Certificate Management Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Digital Banking |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]
**Document Category:** Procedure

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Certificate Lifecycle Process Flow](#5-certificate-lifecycle-process-flow)
6. [Certificate Issuance and Enrollment](#6-certificate-issuance-and-enrollment)
7. [Certificate Renewal and Reissuance](#7-certificate-renewal-and-reissuance)
8. [Certificate Revocation and Suspension](#8-certificate-revocation-and-suspension)
9. [Certificate Inventory and Repository Management](#9-certificate-inventory-and-repository-management)
10. [Channel Security Architecture](#10-channel-security-architecture)
11. [Customer Authentication Requirements](#11-customer-authentication-requirements)
12. [Session Management Controls](#12-session-management-controls)
13. [Roles and Responsibilities](#13-roles-and-responsibilities)
14. [Monitoring, Alerting, and Reporting](#14-monitoring-alerting-and-reporting)
15. [Exceptions and Escalation](#15-exceptions-and-escalation)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

This document establishes the Certificate Management Procedure for [Organization Name] ("the Organization"), defining the end-to-end lifecycle management of digital certificates used across all technology infrastructure, applications, and communication channels. This procedure ensures that digital certificates are issued, maintained, monitored, and revoked in a controlled, auditable, and consistent manner in accordance with regulatory obligations and internal security standards.

This procedure supports the confidentiality, integrity, and authenticity of digital communications by ensuring that cryptographic certificates are properly governed throughout their operational lifecycle — from initial request and issuance through to expiry or revocation.

---

## 2. Scope and Applicability

*Describe the boundaries of this procedure, specifying which systems, environments, entities, and certificate types are within scope. Clearly state any exclusions.*

### 2.1 In-Scope

This procedure applies to:

- All **digital certificates** issued, managed, or consumed by [Organization Name], including but not limited to:
  - **TLS/SSL certificates** (public-facing websites, APIs, internal services)
  - **Code signing certificates**
  - **Client authentication certificates**
  - **Email signing and encryption certificates (S/MIME)**
  - **Device and machine identity certificates**
  - **Root and Intermediate CA certificates** (internal PKI)
  - **Wildcard and Subject Alternative Name (SAN) certificates**
- All **environments**: Production, Staging, User Acceptance Testing (UAT), Development
- All **business units and subsidiaries** of [Organization Name] operating under the same technology infrastructure
- **Third-party and vendor-managed certificates** hosted on behalf of [Organization Name] or integrated into its systems
- **Internet-facing and internal certificate authorities (CA)** used by the Organization

### 2.2 Out of Scope

The following are explicitly excluded from this procedure:

| Exclusion | Reason / Alternative Reference |
|---|---|
| SSH keys and key-pair management | Refer to [SSH Key Management Policy/Procedure] |
| Hardware Security Module (HSM) key management | Refer to [Cryptographic Key Management Policy] |
| PGP keys used for file transfers | Refer to [Data Transfer Security Procedure] |
| [Any other exclusions] | [Reference applicable document] |

### 2.3 Applicability by Role

This procedure is mandatory for all personnel who:

- Request, approve, or provision digital certificates
- Administer certificate infrastructure (CA, OCSP, CRL)
- Operate or maintain systems that consume or expose certificates
- Conduct audits or compliance reviews related to certificate management

---

## 3. Regulatory and Policy Framework

*List all regulatory obligations, internal policies, and standards that this procedure implements or supports. Reference specific clauses where possible.*

### 3.1 Regulatory Requirements

This procedure is established in direct response to the following regulatory requirements:

| Regulation / Framework | Clause / Section | Requirement Summary |
|---|---|---|
| **BNM Risk Management in Technology (RMiT)** | **10.23** | Management of digital certificates to ensure authenticity, integrity, and secure communication channels |
| BNM RMiT | 10.1 – 10.5 | Technology risk management principles and governance |
| BNM RMiT | 11.1 – 11.18 | Cloud services and third-party technology risk |
| Personal Data Protection Act 2010 (PDPA) | Section 9 – Security Principle | Security of personal data transmitted over networks |
| [Additional regulation] | [Clause] | [Summary] |

### 3.2 Internal Policy Alignment

This procedure operates within the following internal policy and standards hierarchy:

| Document | Type | Relationship |
|---|---|---|
| [Information Security Policy] | Policy | Parent policy |
| [Cryptographic Key Management Policy] | Policy | Related policy |
| [Network Security Policy] | Policy | Related policy |
| [Change Management Procedure] | Procedure | Prerequisite process |
| [Vendor and Third-Party Risk Management Policy] | Policy | Applicable for third-party CAs |
| [IT Asset Management Procedure] | Procedure | Certificate inventory alignment |

### 3.3 Standards Compliance

- **NIST SP 800-57**: Recommendation for Key Management
- **NIST SP 800-52**: Guidelines for TLS Implementations
- **RFC 5280**: Internet X.509 Public Key Infrastructure Certificate and CRL Profile
- **CA/Browser Forum Baseline Requirements**: For publicly trusted TLS certificates
- [Additional standards as applicable]

---

## 4. Definitions and Abbreviations

*Define all technical terms and acronyms used in this document to ensure clarity for all audiences including auditors and non-technical reviewers.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Certificate** | An electronic document that binds a public key to an identity, signed by a Certificate Authority |
| **Certificate Authority (CA)** | An entity that issues digital certificates and is trusted to verify the identity of certificate holders |
| **Certificate Revocation List (CRL)** | A list of certificates that have been revoked by the issuing CA before their scheduled expiry date |
| **Certificate Signing Request (CSR)** | A message sent to a CA to apply for a digital identity certificate, containing the applicant's public key and identifying information |
| **Common Name (CN)** | The fully qualified domain name (FQDN) or entity name for which the certificate is issued |
| **Intermediate CA** | A CA that sits between a root CA and end-entity certificates in the certificate chain |
| **Key Pair** | A public key and its corresponding private key generated together for asymmetric cryptographic operations |
| **OCSP (Online Certificate Status Protocol)** | A protocol used to obtain the revocation status of a digital certificate in real time |
| **PKI (Public Key Infrastructure)** | A framework of policies, procedures, hardware, software, and people used to create, manage, distribute, use, store, and revoke digital certificates |
| **Private Key** | The secret component of a key pair used for decryption and digital signing |
| **Public Key** | The non-secret component of a key pair used for encryption and signature verification |
| **Root CA** | The top-level CA in a PKI hierarchy whose certificate is self-signed and implicitly trusted |
| **SAN (Subject Alternative Name)** | An extension to X.509 certificates allowing multiple domain names to be secured under a single certificate |
| **TLS (Transport Layer Security)** | A cryptographic protocol designed to provide secure communication over a network |
| **Wildcard Certificate** | A certificate that secures a domain and all of its immediate subdomains (e.g., *.example.com) |
| [Additional term] | [Definition] |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| CA | Certificate Authority |
| CN | Common Name |
| CRL | Certificate Revocation List |
| CSR | Certificate Signing Request |
| FQDN | Fully Qualified Domain Name |
| HSM | Hardware Security Module |
| ISMS | Information Security Management System |
| IT | Information Technology |
| OCSP | Online Certificate Status Protocol |
| OTP | One-Time Password |
| PDPA | Personal Data Protection Act |
| PKI | Public Key Infrastructure |
| RACI | Responsible, Accountable, Consulted, Informed |
| RMiT | Risk Management in Technology |
| SAN | Subject Alternative Name |
| TLS | Transport Layer Security |
| UAT | User Acceptance Testing |

---

## 5. Certificate Lifecycle Process Flow

*Describe the end-to-end lifecycle of a digital certificate from request through decommissioning. Use the stage descriptions below as structural guidance for the process flow.*

### 5.1 Lifecycle Overview

All digital certificates managed by [Organization Name] must progress through the following defined lifecycle stages:

```
[Request] → [Approval] → [CSR Generation] → [Issuance] → [Deployment]
     ↓                                                          ↓
[Decommission] ← [Revocation] ← [Expiry/Renewal Trigger] ← [Monitoring]
```

| Stage | Description | Responsible Party | SLA / Timeframe |
|---|---|---|---|
| **1. Request** | System/service owner submits certificate request via [ticketing system / portal] | Certificate Requestor | Immediate |
| **2. Assessment & Approval** | Security team reviews request for compliance with standards | Information Security Team | [X] business days |
| **3. CSR Generation** | Private key and CSR generated in accordance with key standards | PKI Administrator / System Owner | [X] business days |
| **4. CA Submission & Issuance** | CSR submitted to approved CA; certificate issued upon validation | PKI Administrator | [X – X] business days |
| **5. Certificate Delivery** | Certificate delivered securely to requesting system/owner | PKI Administrator | Same day as issuance |
| **6. Deployment** | Certificate installed and validated in target environment | System/Application Owner | [X] business days |
| **7. Monitoring** | Automated monitoring for expiry, status, and anomalies | Security Operations | Continuous |
| **8. Renewal** | Renewal initiated no later than [X] days before expiry | Certificate Owner / PKI Admin | [X] days before expiry |
| **9. Revocation** | Certificate revoked upon compromise, change of ownership, or decommission | PKI Administrator | Within [X] hours |
| **10. Decommission** | Certificate and associated private key securely deleted/archived | System Owner / PKI Admin | Upon service decommission |

### 5.2 Certificate Request Process

*Detail the steps for submitting a new certificate request, including the information that must be provided.*

To initiate a certificate request, the requesting party must:

1. **Identify the need** for a certificate (new service, renewal, replacement)
2. **Submit a request** via [Ticketing System / Self-Service Portal] with the following information:
   - Certificate type (TLS, Code Signing, Client Auth, etc.)
   - Common Name (FQDN or entity name)
   - Subject Alternative Names (SANs), if applicable
   - Target environment (Production / UAT / Dev)
   - Justification and business purpose
   - Requested validity period
   - Name and contact of certificate owner
3. **Obtain line manager approval** for the request before PKI team processing
4. **Receive acknowledgement** from the PKI Administrator with an estimated completion date

---

## 6. Certificate Issuance and Enrollment

*Define the standards and controls for generating key pairs, creating CSRs, and obtaining certificates from approved CAs. Include approved algorithms, key lengths, and validation requirements.*

### 6.1 Approved Certificate Authorities

[Organization Name] shall only use certificate authorities from the following approved list:

| CA Name | Type | Use Cases | Approval Date |
|---|---|---|---|
| [Internal CA Name] | Internal PKI | Internal systems, intranet, APIs | [Date] |
| [Public CA Name – e.g., DigiCert, Sectigo] | Public CA | Internet-facing TLS, code signing | [Date] |
| [Additional CA] | [Type] | [Use Case] | [Date] |

> **Note:** Use of any CA not listed above requires prior written approval from the [Chief Information Security Officer / Head of Information Security].

### 6.2 Cryptographic Standards

All certificates issued or managed by [Organization Name] must conform to the following minimum cryptographic standards:

| Parameter | Minimum Standard | Recommended Standard | Prohibited |
|---|---|---|---|
| **Algorithm** | RSA-2048 | RSA-4096 or ECDSA P-256/P-384 | MD5, SHA-1, RSA < 2048 |
| **Signature Hash** | SHA-256 | SHA-384 or SHA-512 | MD5, SHA-1 |
| **Key Length (RSA)** | 2048-bit | 4096-bit | < 2048-bit |
| **Key Length (ECC)** | P-256 | P-384 | < P-256 |
| **Validity Period (TLS – Public)** | N/A | ≤ 398 days | > 398 days (per CA/B Forum) |
| **Validity Period (Internal)** | ≤ 2 years | ≤ 1 year | > 3 years |
| **Validity Period (Code Signing)** | ≤ 3 years | ≤ 1 year | > 3 years |

### 6.3 Key Generation Requirements

- Private keys **must be generated** on the system or HSM where they will be used
- Private keys **must never** be transmitted in plaintext
- Where an HSM is available, private keys for critical certificates **must be generated and stored** within the HSM
- Key generation must be performed using a cryptographically secure random number generator (CSPRNG)
- The CSR must be generated alongside the private key and must accurately reflect the intended certificate subject

### 6.4 Domain Validation and Identity Verification

| Certificate Type | Validation Level | Verification Method |
|---|---|---|
| Public TLS (Internet-facing) | Organization Validated (OV) minimum | Domain control verification + organization identity check |
| Extended Validation | EV (for customer-facing portals) | Full EV vetting by public CA |
| Internal Services | Internal validation | Internal CA — identity verified via [LDAP/AD/internal directory] |
| Code Signing | OV or EV | Per CA/Browser Forum requirements |

### 6.5 Certificate Issuance Controls

- All certificate issuance must be logged in the **Certificate Inventory** (see Section 9)
- Certificates must be delivered to the requestor via a secure channel (e.g., encrypted email, secure portal, secrets management vault)
- The private key **must not be transmitted** alongside the certificate unless technically unavoidable (e.g., PKCS#12 export with strong passphrase)
- Issued certificates must be deployed within **[X] business days** of issuance; unused certificates must be revoked

---

## 7. Certificate Renewal and Reissuance

*Define the procedure for renewing certificates before expiry and for reissuing certificates when information changes. Establish the renewal notification schedule and responsibilities.*

### 7.1 Renewal Schedule and Notification

[Organization Name] shall maintain a proactive certificate renewal schedule to prevent service disruptions caused by certificate expiry:

| Days to Expiry | Action | Responsible Party | Notification Method |
|---|---|---|---|
| **90 days** | Initial expiry alert issued | Automated Monitoring System | Email to Certificate Owner + IT Manager |
| **60 days** | Renewal request must be initiated | Certificate Owner | Ticket raised in [Ticketing System] |
| **30 days** | Escalation if renewal not in progress | PKI Administrator | Email escalation to [Head of Digital Banking] |
| **14 days** | Critical escalation | PKI Administrator | Email + phone escalation to CISO |
| **7 days** | Emergency renewal procedures invoked | PKI Administrator + CISO | Incident raised |
| **0 days (Expiry)** | Certificate expired — service impact imminent | Incident Response Team | Major incident declared |

> **Prohibition:** Certificates **must not** be allowed to expire in Production environments. Expiry events in Production shall be treated as a **security incident** and subject to post-incident review.

### 7.2 Renewal Procedure

1. Certificate Owner receives expiry notification from the automated monitoring system
2. Certificate Owner raises a renewal request in [Ticketing System]
3. PKI Administrator generates a new CSR (with updated or same details as required)
4. New certificate obtained from the approved CA
5. Certificate tested in [UAT/Staging] environment prior to Production deployment
6. Certificate deployed to Production during a scheduled maintenance window
7. Old certificate revoked following successful deployment and verification
8. Certificate inventory updated with new certificate details

### 7.3 Certificate Reissuance

Reissuance (replacing a certificate without waiting for expiry) is required in the following circumstances:

- Change to the Common Name or SANs
- Change of certificate owner or responsible team
- Compromise or suspected compromise of the private key
- Change in cryptographic algorithm or key length requirements
- CA distrust event affecting the issuing CA
- [Other organizational triggers]

Reissuance follows the same process as new issuance (Section 6), with the addition of revoking the replaced certificate upon successful deployment of the replacement.

---

## 8. Certificate Revocation and Suspension

*Define the triggers, procedures, and timelines for revoking certificates. Establish emergency revocation procedures for compromised certificates.*

### 8.1 Revocation Triggers

A certificate **must** be revoked when any of the following conditions are met:

| Trigger | Priority | Revocation Timeframe |
|---|---|---|
| Private key compromise or suspected compromise | **Critical** | Within **4 hours** |
| Certificate information is incorrect or fraudulent | High | Within **24 hours** |
| System or service decommissioned | Medium | Within **[X] business days** |
| CA distrust event | High | Per CA/BNM guidance |
| Employee departure (for personal/client certificates) | Medium | Within **24 hours** of departure |
| Organizational or domain name change | Medium | Within **[X] business days** |
| Certificate no longer required | Low | Within **[X] business days** |

### 8.2 Revocation Procedure

**Standard Revocation:**

1. Revocation request submitted by Certificate Owner or PKI Administrator via [Ticketing System]
2. Request reviewed and approved by [Information Security Manager / PKI Lead]
3. PKI Administrator submits revocation request to the issuing CA
4. CA confirms revocation and updates CRL / OCSP
5. Affected systems updated to remove or replace the revoked certificate
6. Certificate inventory updated with revocation date and reason
7. Confirmation communicated to requesting party

**Emergency Revocation (Key Compromise):**

1. Reporting party immediately notifies [Security Operations Centre / CISO] via [emergency contact channel]
2. Incident raised in [Incident Management System]
3. PKI Administrator performs emergency revocation without waiting for standard approval chain
4. Affected systems isolated or certificate removed within **[X] hours**
5. Root cause investigation initiated
6. Post-incident review completed within **[X] business days**

### 8.3 CRL and OCSP Management

- [Organization Name]'s internal CA must publish an updated **CRL at minimum every [24 hours]**
- **OCSP responders** must maintain availability of **[99.X]%** to support real-time certificate status checking
- CRL Distribution Points (CDP) and OCSP URLs must be embedded in all issued certificates
- CRL and OCSP availability is monitored as part of PKI infrastructure monitoring (see Section 14)

---

## 9. Certificate Inventory and Repository Management

*Describe the requirements for maintaining a complete, accurate, and current inventory of all digital certificates. Define the minimum data fields and update obligations.*

### 9.1 Certificate Inventory Requirements

[Organization Name] shall maintain a centralized **Certificate Inventory Register** containing a record of all digital certificates. The inventory must be:

- **Complete**: All in-scope certificates recorded, regardless of CA or environment
- **Current**: Updated within **[X] business days** of any certificate lifecycle event
- **Accurate**: Certificate metadata verified at least [quarterly / annually]
- **Accessible**: Available to the PKI Administrator and Information Security team at all times

### 9.2 Certificate Inventory Data Fields

The Certificate Inventory Register must capture the following minimum data fields for each certificate:

| Field | Description | Example |
|---|---|---|
| **Certificate ID** | Unique internal identifier | CERT-2024-001 |
| **Common Name (CN)** | Primary domain or entity name | www.example.com.my |
| **Subject Alternative Names** | Additional FQDNs secured | api.example.com.my |
| **Certificate Type** | TLS, Code Signing, Client Auth, etc. | TLS/SSL |
| **Serial Number** | Unique serial number from CA | [Serial] |
| **Issuing CA** | Name of the Certificate Authority | [CA Name] |
| **Validation Level** | DV / OV / EV / Internal | OV |
| **Environment** | Production / UAT / Dev / Staging | Production |
| **Issue Date** | Date certificate was issued | [Date] |
| **Expiry Date** | Date certificate expires | [Date] |
| **Key Algorithm** | Algorithm and key length | RSA-4096 |
| **Certificate Owner** | Responsible individual or team | [Name / Team] |
| **System / Application** | System(s) where certificate is deployed | [Application Name] |
| **Deployment Location** | Server hostname, load balancer, CDN | [Hostname / IP] |
| **Private Key Location** | Where the private key is stored | [HSM / Vault / Server] |
| **Status** | Active / Expired / Revoked / Pending | Active |
| **Last Updated** | Date record was last updated | [Date] |
| **Notes** | Additional information | [Notes] |

### 9.3 Certificate Repository

- The authoritative certificate inventory must be stored in **[Inventory Tool / System Name]**
- Access to the inventory system must be restricted to authorized personnel (see Section 13)
- The inventory system must be backed up in accordance with the [Backup and Recovery Policy]
- Discovery scans must be performed [quarterly] to identify unregistered or rogue certificates

---

## 10. Channel Security Architecture

*Document the security architecture requirements for all communication channels that use digital certificates. Describe how certificates underpin the confidentiality and integrity of each channel type.*

### 10.1 Channel Classification

[Organization Name] classifies communication channels as follows for the purpose of certificate management:

| Channel Type | Description | Certificate Requirement |
|---|---|---|
| **Internet-Facing Web (Customer)** | Public website, internet banking portal, mobile banking backend | Public TLS (OV or EV), ≤ 398-day validity |
| **Internet-Facing API** | Open Banking APIs, payment gateway integrations | Public TLS (OV minimum) + mutual TLS (mTLS) where applicable |
| **Internal Application Channels** | Intranet, internal portals, staff applications | Internal CA TLS certificate |
| **Service-to-Service (Internal)** | Microservices, backend integrations | Internal mTLS certificates |
| **Third-Party Integrations** | BNM connectivity, payment networks, SWIFT, correspondent banks | Certificates per counterparty requirements + internal controls |
| **Admin / Management Channels** | Administrative consoles, SSH, RDP over TLS | Internal CA certificates; MFA required |
| **Email (Encrypted)** | Encrypted email for sensitive communications | S/MIME certificates |

### 10.2 TLS Configuration Standards

All TLS-enabled channels must adhere to the following minimum configuration:

| Parameter | Minimum Requirement | Notes |
|---|---|---|
| **TLS Version** | TLS 1.2 | TLS 1.3 strongly recommended |
| **Prohibited Protocols** | SSL 2.0, SSL 3.0, TLS 1.0, TLS 1.1 | Must be explicitly disabled |
| **Cipher Suites (TLS 1.2)** | ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-GCM-SHA256 | Weak ciphers must be disabled |
| **Perfect Forward Secrecy** | Required (ECDHE or DHE key exchange) | — |
| **HSTS** | Required for all customer-facing HTTPS | min-age: 31536000 |
| **Certificate Pinning** | Required for mobile banking applications | Per BNM RMiT guidance |
| **OCSP Stapling** | Required for public-facing TLS | Reduces latency and privacy risk |

### 10.3 Mutual TLS (mTLS) Requirements

Mutual TLS must be implemented for the following integration scenarios:

| Scenario | mTLS Required | Certificate Type |
|---|---|---|
| Payment gateway connections | Yes | Client authentication certificate |
| Open Banking API (third-party access) | Yes | Client authentication certificate |
| Inter-system service mesh communications | Yes | Internal client authentication certificate |
| [Additional scenario] | [Yes/No] | [Type] |

### 10.4 Channel Security Review

- All channel security configurations must be reviewed **[annually]** or upon significant change
- TLS configuration scans must be performed using [approved tool, e.g., SSL Labs, internal scanner] on a **[quarterly]** basis
- Any channel configuration rated below **[A / A+]** on the SSL Labs scale (or equivalent internal standard) must be remediated within **[X] business days**
- Scan results must be retained and made available upon audit request

---

## 11. Customer Authentication Requirements

*Define how digital certificates are used to support strong customer authentication, particularly for internet banking, mobile banking, and digital onboarding channels. Reference applicable BNM guidance.*

### 11.1 Authentication Framework

[Organization Name] implements a layered customer authentication framework that utilizes digital certificates as a key trust anchor for:

- **Server Authentication**: Proving to customers that they are communicating with a legitimate [Organization Name] server
- **Extended Validation (EV) Signals**: Providing additional identity assurance for high-value transactions
- **Mobile Application Integrity**: Certificate pinning to prevent man-in-the-middle attacks targeting mobile banking customers

### 11.2 Server-Side Certificate Requirements for Customer Channels

| Channel | Certificate Type | Validation Level | Pinning Required |
|---|---|---|---|
| Internet Banking Portal ([URL]) | Public TLS | EV (recommended) / OV (minimum) | N/A (browser-based) |
| Mobile Banking Application (iOS) | Public TLS + Certificate Pin | OV minimum | **Yes** |
| Mobile Banking Application (Android) | Public TLS + Certificate Pin | OV minimum | **Yes** |
| Mobile Banking API Backend | Public TLS | OV minimum | **Yes** (app-level) |
| Customer Onboarding Portal | Public TLS | EV (recommended) | N/A |
| Payment Confirmation Page | Public TLS | EV (recommended) | N/A |

### 11.3 Certificate Pinning for Mobile Applications

Certificate pinning must be implemented in all [Organization Name] mobile banking applications:

- **Pin Type**: Public key pinning (SPKI) preferred over certificate pinning to support certificate renewal without application updates
- **Backup Pins**: A minimum of **two (2) backup pins** must be configured to prevent loss of connectivity during certificate rotation
- **Pin Update Procedure**: Pin updates must be coordinated between the mobile application team and PKI Administrator, with adequate lead time before production certificate changes
- **Failure Handling**: Pinning failures must be logged, alerted, and treated as a potential security event
- **[Additional pin management controls as applicable]**

### 11.4 Certificate Transparency Monitoring

- [Organization Name] must monitor **Certificate Transparency (CT) logs** for unauthorized certificate issuance for its domains
- Monitoring frequency: [Daily / Real-time via CT monitoring service]
- Tool used: [CT monitoring tool / service name]
- Unauthorized certificate issuance detected via CT monitoring must be escalated as a **security incident**

### 11.5 Customer Communication on Certificate Security

- [Organization Name]'s website and mobile app must display valid certificate information accessible to customers
- Customer-facing communications must not instruct customers to bypass certificate warnings
- Incident communications related to certificate issues must be coordinated with the [Communications / PR team]

---

## 12. Session Management Controls

*Define how digital certificates and TLS sessions are managed to protect customer and internal sessions. Address session establishment, duration, re-authentication, and termination controls.*

### 12.1 TLS Session Management

| Control | Requirement | Rationale |
|---|---|---|
| **Session Resumption** | TLS session tickets enabled with rotation every [24 hours] | Balance performance and forward secrecy |
| **Session Ticket Key Rotation** | Session ticket encryption keys rotated every [24 hours] | Limit exposure window |
| **TLS Session Cache Timeout** | Maximum [300 seconds / 5 minutes] | Reduce replay attack window |
| **Renegotiation** | Client-initiated renegotiation disabled | Prevent DoS via renegotiation |
| **0-RTT (TLS 1.3)** | Disabled for authenticated / transactional endpoints | Prevent replay attacks on sensitive operations |

### 12.2 Application Session Controls Supported by TLS

*These controls apply to sessions established over TLS-secured channels and are governed in conjunction with the Application Security Policy.*

| Control | Requirement |
|---|---|
| **Session Token Entropy** | Minimum [128-bit] cryptographically random session token |
| **Session Timeout (Internet Banking – Idle)** | Maximum [10 minutes] idle timeout per BNM guidelines |
| **Session Timeout (Mobile Banking – Idle)** | Maximum [5 minutes] idle timeout |
| **Absolute Session Timeout** | Maximum [60 minutes] regardless of activity |
| **Concurrent Session Restriction** | Maximum [1] concurrent authenticated session per customer (configurable) |
| **Session Invalidation on Logout** | Session token invalidated server-side upon logout |
| **Secure Cookie Flags** | All session cookies must include `Secure`, `HttpOnly`, and `SameSite=Strict` flags |

### 12.3 Certificate-Bound Sessions (mTLS)

Where mutual TLS is used for session establishment:

- Session must be bound to the client certificate presented during the TLS handshake
- Session invalidated upon certificate expiry or revocation
- Certificate revocation status must be checked at session establishment and periodically during long-lived sessions
- OCSP must be used for real-time revocation status checks

### 12.4 Session Anomaly Detection

- Abnormal session behavior (e.g., session token reuse from multiple IP addresses, session duration anomalies) must be detected and alerted via [SIEM / Security Monitoring Platform]
- Certificate-related session anomalies (e.g., mismatched client certificates, revoked certificate used for session establishment) must be treated as security incidents
- Session monitoring events must be logged and retained per the [Log Management Policy]

---

## 13. Roles and Responsibilities

*Define the roles involved in certificate management and their specific responsibilities. Use the RACI matrix to clarify accountability.*

### 13.1 Role Definitions

| Role | Description |
|---|---|
| **Certificate Requestor** | Any staff member who initiates a request for a new or renewed certificate on behalf of a system or service they own |
| **Certificate Owner** | The individual or team responsible for a certificate throughout its lifecycle; accountable for renewal and revocation activities |
| **PKI Administrator** | The technical specialist responsible for operating the PKI infrastructure, issuing certificates, and maintaining the certificate inventory |
| **Information Security Manager** | Responsible for overseeing certificate management policy compliance and approving high-risk requests |
| **Head of Digital Banking** | Document owner; accountable for the overall certificate management program |
| **Chief Information Security Officer (CISO)** | Executive sponsor; ultimate accountability for information security controls including certificate management |
| **System / Application Owner** | Responsible for deploying certificates to their systems and maintaining correct configuration |
| **Security Operations Centre (SOC)** | Responsible for monitoring certificate expiry alerts and certificate-related security events |
| **Internal Audit** | Independent assurance review of certificate management controls |
| **Vendor / Third Party** | External parties who may manage certificates on behalf of [Organization Name] under contractual obligations |

### 13.2 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Certificate Requestor | Certificate Owner | PKI Admin | IS Manager | Head of Digital Banking | CISO | SOC | System Owner |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Define certificate requirements | R | A | C | C | I | I | — | C |
| Submit certificate request | R | A | I | I | I | — | — | C |
| Approve certificate request | I | C | I | A/R | I | — | — | — |
| Generate CSR / key pair | — | C | R | A | — | — | — | C |
| Submit CSR to CA | — | I | R | A | — | — | — | — |
| Deploy certificate to system | — | C | C | I | — | — | — | R/A |
| Update certificate inventory | — | C | R | A | — | — | I | — |
| Monitor certificate expiry | — | I | R | C | I | — | A/R | — |
| Initiate certificate renewal | — | R | A | C | I | — | I | C |
| Approve emergency revocation | — | — | R | A | I | C | — | — |
| Execute certificate revocation | — | I | R | A | I | I | — | — |
| Investigate certificate incidents | — | C | C | R | I | A | R | C |
| Conduct certificate inventory audit | — | C | R | A | I | I | — | C |
| Review and update this procedure | C | C | C | R | A | C | — | — |
| Approve procedure updates | — | — | — | C | R | A | — | — |

---

## 14. Monitoring, Alerting, and Reporting

*Describe the monitoring controls and reporting obligations associated with certificate management. Define KPIs and escalation paths.*

### 14.1 Certificate Monitoring Requirements

[Organization Name] must implement automated monitoring for certificate lifecycle events:

| Monitoring Type | Requirement | Tool / Platform |
|---|---|---|
| **Expiry Monitoring** | Automated alerts at 90, 60, 30, 14, and 7 days before expiry | [Monitoring Tool Name] |
| **Certificate Discovery** | Periodic scan of all network-accessible endpoints for undiscovered certificates | [Discovery Tool Name] |
| **CRL / OCSP Availability** | Continuous monitoring of internal CA CRL and OCSP responder availability | [Monitoring Tool Name] |
| **Certificate Transparency Monitoring** | Real-time monitoring of CT logs for unauthorized issuance on [Organization Name] domains | [CT Monitoring Service] |
| **Configuration Compliance** | Regular TLS configuration scans against [Organization Name] cipher/protocol standards | [SSL Scanner Tool] |
| **Inventory Completeness** | Automated reconciliation between discovered certificates and inventory register | [CMDB / Inventory Tool] |

### 14.2 Key Performance Indicators (KPIs)

| KPI | Target | Measurement Frequency |
|---|---|---|
| Certificates expiring without timely renewal (Production) | **0** | Monthly |
| Time to revoke compromised certificates | **< 4 hours** (critical) | Per incident |
| Certificate inventory completeness | **≥ 98%** | Quarterly |
| TLS configuration compliance rate | **100%** | Quarterly |
| Certificate-related incidents per quarter | **Track & trend** | Quarterly |
| Mean time to renew certificate | **< [X] business days** | Monthly |

### 14.3 Reporting Obligations

| Report | Frequency | Audience | Format |
|---|---|---|---|
| Certificate Expiry Status Report | Monthly | Head of Digital Banking, IS Manager | [Dashboard / Email Report] |
| Certificate Inventory Summary | Quarterly | Information Security Committee | [Report Template] |
| Certificate Incident Summary | Per incident + Quarterly | CISO, Head of Digital Banking | Incident Report |
| Annual Certificate Management Review | Annual | Board IT Committee / BRMC | Summary Report |
| BNM Regulatory Reporting (if applicable) | As required | BNM | Per BNM format |

---

## 15. Exceptions and Escalation

*Define the process for managing exceptions to this procedure and escalating non-compliance or unresolved risks.*

### 15.1 Exception Management

Where strict compliance with this procedure is not technically feasible or would cause undue business disruption, an exception may be sought through the following process:

1. **Exception Request**: Submitted by the Certificate Owner / System Owner using the **[Exception Request Form / Template]**
2. **Required Information**:
   - Specific control(s) from which exception is sought
   - Business justification
   - Risk assessment including likelihood and impact
   - Proposed compensating controls
   - Requested exception duration (maximum [12 months])
3. **Review and Approval**: Exception requests must be reviewed by the Information Security Manager and approved by the [CISO / Head of Digital Banking]
4. **Risk Acceptance**: Approved exceptions must be recorded in the [Risk Register]
5. **Review**: Exceptions must be reviewed at the specified expiry date or upon change in circumstances

### 15.2 Non-Compliance Escalation

| Non-Compliance Scenario | Escalation Path | Timeframe |
|---|---|---|
| Unrenewed certificate approaching 14 days to expiry | Automatic escalation to CISO | Immediate (automated alert) |
| Certificate expired in Production | Major incident declared; CISO notified | Immediate |
| Unauthorized certificate discovered | Security incident raised; IS Manager notified | Within [X] hours |
| Refusal to revoke compromised certificate | Escalate to CISO and Head of Digital Banking | Immediate |
| Repeated non-compliance by a team or individual | HR and line management involvement | Per [Disciplinary Policy] |

---

## 16. Review and Approval

### 16.1 Review Schedule

This procedure must be reviewed:

- **Annually** as part of the scheduled ISMS review cycle
- **Upon significant change**, including but not limited to:
  - Material changes to BNM RMiT or related regulations
  - Significant changes to the Organization's PKI infrastructure
  - Material security incidents related to certificate management
  - Changes to the Organization's digital channel architecture
  - CA/Browser Forum Baseline Requirement updates affecting the Organization

### 16.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 16.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** | [Author Name], [Title] | | [Date] |
| **Reviewed By** | [Information Security Manager Name] | | [Date] |
| **Reviewed By** | [PKI Lead / Infrastructure Lead Name] | | [Date] |
| **Approved By** | Head of Digital Banking | | [Date] |
| **Endorsed By** | Chief Information Security Officer | | [Date] |

---

## 17. References

*List all regulatory documents, standards, and internal policies referenced in or applicable to this procedure.*

### 17.1 Regulatory References

| Reference | Document | Clause / Section |
|---|---|---|
| 1 | Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document | **10.23** — Certificate Management |
| 2 | Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document | 10.1–10.5 — Technology Risk Governance |
| 3 | Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document | 10.15–10.22 — Identity and Access Management |
| 4 | Personal Data Protection Act 2010 (Act 709) | Section 9 — Security Principle |
| 5 | [BNM Policy Document on Internet Insurance / Internet Banking (if applicable)] | [Clause] |
| 6 | [Additional regulatory reference] | [Clause] |

### 17.2 Standards References

| Reference | Standard | Relevance |
|---|---|---|
| 7 | NIST SP 800-57 Rev. 5 — Recommendation for Key Management | Key generation and lifecycle standards |
| 8 | NIST SP 800-52 Rev. 2 — Guidelines for TLS Implementations | TLS configuration standards |
| 9 | RFC 5280 — Internet X.509 PKI Certificate and CRL Profile | Certificate format and extensions |
| 10 | CA/Browser Forum Baseline Requirements for TLS Certificates | Public TLS certificate issuance requirements |
| 11 | ISO/IEC 27001:2022 — Annex A Control 8.24 | Use of cryptography |
| 12 | OWASP TLS Cheat Sheet | TLS configuration best practices |

### 17.3 Internal Document References

| Reference | Document Title | Document ID |
|---|---|---|
| 13 | Information Security Policy | [Doc ID] |
| 14 | Cryptographic Key Management Policy | [Doc ID] |
| 15 | Network Security Policy | [Doc ID] |
| 16 | Incident Management Procedure | [Doc ID] |
| 17 | Change Management Procedure | [Doc ID] |
| 18 | IT Asset Management Procedure | [Doc ID] |
| 19 | Third-Party / Vendor Risk Management Policy | [Doc ID] |
| 20 | Log Management and Monitoring Policy | [Doc ID] |

---

## 18. Appendices

### Appendix A — Certificate Request Form Template

*This appendix provides the standard form to be completed when requesting a new or renewed digital certificate.*

---

**Certificate Request Form**

| Field | Details |
|---|---|
| **Request Date** | [Date] |
| **Request Reference** | [Ticket / Reference Number] |
| **Requestor Name** | [Full Name] |
| **Requestor Department** | [Department] |
| **Requestor Email** | [Email] |
| **Line Manager (Approver)** | [Full Name] |
| **Certificate Owner** | [Full Name / Team] |
| **Certificate Type** | TLS / Code Signing / Client Auth / S/MIME / Other: [Specify] |
| **Common Name (FQDN / Entity)** | [e.g., www.example.com.my] |
| **Subject Alternative Names (SANs)** | [List all SANs, if applicable] |
| **Environment** | Production / UAT / Staging / Development |
| **Issuing CA** | [Internal CA / Public CA Name] |
| **Key Algorithm** | RSA-4096 / ECDSA P-384 / Other: [Specify] |
| **Validity Period Requested** | [e.g., 1 year / 2 years] |
| **Business Justification** | [Description of why the certificate is needed] |
| **Target Deployment System(s)** | [Hostname / Application Name] |
| **Private Key Storage** | HSM / Key Vault / Server Keystore / Other: [Specify] |
| **HSM / Vault Reference** | [Reference, if applicable] |
| **Is this a replacement?** | Yes / No — If yes, Certificate ID of certificate being replaced: [ID] |
| **Attachments** | [CSR file, architecture diagram, approval email, etc.] |

---

### Appendix B — Certificate Inventory Register Template

*This appendix provides the column structure for the certificate inventory register. The live register is maintained in [Inventory Tool / Location].*

| Certificate ID | Common Name | SANs | Type | Serial Number | Issuing CA | Validation Level | Environment | Issue Date | Expiry Date | Key Algorithm | Certificate Owner | System / App | Deployment Location | Private Key Location | Status | Last Updated | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CERT-[YYYY]-[NNN] | [CN] | [SANs] | [Type] | [Serial] | [CA] | [DV/OV/EV] | [Env] | [Date] | [Date] | [Algorithm] | [Owner] | [App] | [Host/IP] | [Location] | [Active] | [Date] | [Notes] |

---

### Appendix C — Approved Cipher Suites Reference

*This appendix lists the approved and prohibited cipher suites for [Organization Name] TLS implementations.*

**TLS 1.3 — Approved Cipher Suites (All mandatory-compliant):**

- `TLS_AES_256_GCM_SHA384`
- `TLS_CHACHA20_POLY1305_SHA256`
- `TLS_AES_128_GCM_SHA256`

**TLS 1.2 — Approved Cipher Suites:**

- `ECDHE-RSA-AES256-GCM-SHA384`
- `ECDHE-ECDSA-AES256-GCM-SHA384`
- `ECDHE-RSA-AES128-GCM-SHA256`
- `ECDHE-ECDSA-AES128-GCM-SHA256`
- `DHE-RSA-AES256-GCM-SHA384`
- `DHE-RSA-AES128-GCM-SHA256`

**Prohibited Cipher Suites (must be explicitly disabled):**

- All RC4-based cipher suites
- All NULL cipher suites
- All EXPORT cipher suites
- All DES and 3DES cipher suites
- All MD5-based cipher suites
- `TLS_RSA_*` suites (no forward secrecy)
- [Additional prohibited suites per [Organization Name] hardening standard]

---

### Appendix D — Emergency Certificate Revocation Checklist

*Use this checklist when a certificate compromise is suspected or confirmed.*

| Step | Action | Responsible | Completed |
|---|---|---|---|
| 1 | Confirm and document the nature of the suspected compromise | Security Analyst | ☐ |
| 2 | Notify CISO and IS Manager immediately via [emergency channel] | First Responder | ☐ |
| 3 | Raise a P1 security incident in [Incident Management System] | SOC | ☐ |
| 4 | Identify all systems using the compromised certificate | PKI Administrator | ☐ |
| 5 | Assess customer or business impact of immediate revocation | IS Manager | ☐ |
| 6 | Prepare replacement certificate (new CSR, new key pair) | PKI Administrator | ☐ |
| 7 | Execute revocation with issuing CA | PKI Administrator | ☐ |
| 8 | Deploy replacement certificate to affected systems | System Owner | ☐ |
| 9 | Verify revocation via CRL / OCSP | PKI Administrator | ☐ |
| 10 | Update certificate inventory | PKI Administrator | ☐ |
| 11 | Notify affected stakeholders and third parties (if applicable) | IS Manager | ☐ |
| 12 | Conduct post-incident review within [X] business days | IS Manager | ☐ |
| 13 | Update procedure if process gaps identified | IS Manager | ☐ |

---

### Appendix E — Certificate Monitoring Alert Response Procedures

*This appendix provides guidance for SOC analysts responding to automated certificate monitoring alerts.*

| Alert Type | Severity | Immediate Action | Escalation |
|---|---|---|---|
| Certificate expiring in 90 days | Low | Notify Certificate Owner; confirm renewal is planned | None if renewal confirmed |
| Certificate expiring in 30 days | Medium | Verify renewal ticket exists; escalate if no action taken | IS Manager if no renewal in progress |
| Certificate expiring in 14 days | High | Confirm renewal in progress; escalate if not | IS Manager + Head of Digital Banking |
| Certificate expiring in 7 days | Critical | Emergency renewal; CISO notified | CISO; P1 incident if Production |
| Certificate expired | Critical | P1 Incident declared; emergency replacement | CISO; Head of Digital Banking; BNM notification if customer impacted |
| Unauthorized CT log entry | High | Security incident raised; investigate issuing CA | CISO; IS Manager |
| OCSP / CRL unavailable | High | Investigate CA infrastructure; assess impact | PKI Lead; IS Manager |
| Revoked certificate still in use | Critical | Immediate removal; security incident | CISO; IS Manager |
| Weak cipher detected on scan | Medium | Raise change request for remediation | IS Manager |

---

*End of Document*

---

*This document template was prepared for [Organization Name] in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.23. All placeholder values enclosed in [square brackets] must be completed by the document owner prior to official issuance. This template does not constitute legal or regulatory advice.*