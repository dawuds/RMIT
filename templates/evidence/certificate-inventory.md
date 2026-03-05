# Certificate Inventory

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Digital Banking |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This Certificate Inventory serves as the authoritative record of all digital certificates deployed across [Organization Name]'s technology estate. It supports compliance with Bank Negara Malaysia's **Risk Management in Technology (RMiT)** policy document, specifically **Clause 10.23**, which requires financial institutions to maintain a current and comprehensive inventory of cryptographic certificates used to secure digital channels, authenticate customers, and protect data in transit.

This document provides evidence of:

- Active lifecycle management of all X.509 and other digital certificates
- Timely renewal and revocation processes
- Ownership accountability for each certificate
- Alignment with channel security architecture requirements

### 1.2 Scope

This inventory covers **all digital certificates** issued to or managed by [Organization Name], including but not limited to:

- TLS/SSL certificates for public-facing and internal web services
- Code-signing certificates
- Client authentication certificates
- Root and intermediate Certificate Authority (CA) certificates
- Email encryption (S/MIME) certificates
- API gateway and mutual TLS (mTLS) certificates
- HSM (Hardware Security Module) certificates
- Mobile application signing certificates

**In-scope systems and environments:**

- Production, staging, and disaster recovery environments
- All digital banking channels (web, mobile, API, ATM/kiosk)
- Internal systems handling customer data or financial transactions
- Third-party or vendor-managed certificates where [Organization Name] is the certificate owner of record

**Out of scope:**

- Certificates managed entirely by third parties with no [Organization Name] custodianship
- Certificates in decommissioned environments that have been formally retired

---

## 2. Asset and Item Identification

*This section provides the master record of all certificates. Each entry must uniquely identify a certificate instance. This inventory is intended to be system-generated from the certificate management platform (e.g., [Certificate Management System Name]) and exported on a per-event or quarterly basis.*

### 2.1 Certificate Register

| Cert ID | Common Name (CN) | Subject Alternative Names (SAN) | Serial Number | Thumbprint / Fingerprint (SHA-256) | Certificate Type | Issuing CA | Environment | System / Application | Hostname / Endpoint |
|---|---|---|---|---|---|---|---|---|---|
| [CERT-001] | [e.g., *.example.com.my] | [e.g., example.com.my, api.example.com.my] | [Serial Number] | [SHA-256 Hash] | [TLS/SSL / mTLS / Code Signing / S/MIME / Client Auth] | [e.g., DigiCert, Let's Encrypt, Internal CA] | [Production / Staging / DR] | [System Name] | [Hostname or IP] |
| [CERT-002] | | | | | | | | | |

### 2.2 Certificate Lifecycle Dates

| Cert ID | Common Name (CN) | Issued Date | Expiry Date | Days to Expiry | Auto-Renewal Enabled | Renewal Lead Time (Days) | Last Renewed Date | Status |
|---|---|---|---|---|---|---|---|---|
| [CERT-001] | [CN] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Auto-calculated] | [Yes / No] | [e.g., 30] | [YYYY-MM-DD] | [Active / Expiring Soon / Expired / Revoked] |
| [CERT-002] | | | | | | | | |

> **Alert Thresholds:** Certificates with fewer than **[30] days** to expiry must be flagged as **Expiring Soon**. Certificates with fewer than **[7] days** must be escalated to the Head of Digital Banking immediately.

---

## 3. Classification and Categorisation

*Certificates must be classified by their function, sensitivity, and criticality to ensure proportionate controls are applied. Use the categories below to populate the Classification column in the master register.*

### 3.1 Certificate Type Taxonomy

| Type Code | Certificate Type | Description | Examples |
|---|---|---|---|
| TLS-EXT | External TLS/SSL | Secures public-facing HTTPS endpoints | Customer web portal, mobile API gateway |
| TLS-INT | Internal TLS/SSL | Secures internal service-to-service communication | Microservices, internal APIs |
| mTLS | Mutual TLS | Both parties authenticate via certificate | Partner API integrations, backend services |
| CODESIGN | Code Signing | Authenticates software builds and releases | Mobile app binaries, firmware |
| SMIME | S/MIME Email | Email encryption and signing | Executive and compliance email |
| CLIENTAUTH | Client Authentication | End-entity or device authentication | Device certificates, operator workstations |
| CA-ROOT | Root CA | Trust anchor certificate | Internal PKI root |
| CA-INT | Intermediate CA | Issues end-entity certificates | Internal PKI hierarchy |
| HSM | HSM Certificate | Bound to Hardware Security Module | Cryptographic key operations |

### 3.2 Criticality Classification

| Criticality Level | Definition | Examples |
|---|---|---|
| **Critical** | Certificate failure causes immediate customer-facing outage or security breach | Internet banking TLS, payment gateway mTLS |
| **High** | Certificate failure causes significant degradation or compliance gap | Internal API TLS, code signing |
| **Medium** | Certificate failure causes limited impact; fallback available | Non-customer-facing services |
| **Low** | Certificate failure has negligible business impact | Test or non-production certificates |

### 3.3 Classification Register

| Cert ID | Common Name (CN) | Type Code | Criticality | Data Sensitivity | Regulatory Relevance |
|---|---|---|---|---|---|
| [CERT-001] | [CN] | [Type Code] | [Critical / High / Medium / Low] | [Public / Internal / Confidential / Restricted] | [RMiT 10.23 / PDPA / PCI-DSS / None] |
| [CERT-002] | | | | | |

---

## 4. Owner and Custodian

*Each certificate must have a clearly assigned owner (accountable) and custodian (operationally responsible). This ensures accountability for renewal, revocation, and lifecycle management.*

### 4.1 Ownership Register

| Cert ID | Common Name (CN) | Certificate Owner (Role) | Certificate Owner (Name) | Technical Custodian (Role) | Technical Custodian (Name) | Business Unit | Contact Email | Escalation Contact |
|---|---|---|---|---|---|---|---|---|
| [CERT-001] | [CN] | Head of Digital Banking | [Name] | [e.g., Platform Engineer] | [Name] | [Business Unit] | [email@organization.com.my] | [Escalation Name / Role] |
| [CERT-002] | | | | | | | | |

### 4.2 Ownership Definitions

| Role | Responsibility |
|---|---|
| **Certificate Owner** | Accountable for the certificate's existence, purpose, and compliance. Authorises issuance and revocation. |
| **Technical Custodian** | Operationally responsible for installation, renewal, monitoring, and incident response for the certificate. |
| **CA / PKI Administrator** | Manages the Certificate Authority relationship and certificate signing request (CSR) process. |

---

## 5. Channel Security Architecture

*Certificates must be mapped to the digital channel security architecture to demonstrate that all customer-facing and internal channels are appropriately secured in accordance with RMiT Clause 10.23 and the overall technology risk framework.*

### 5.1 Channel-to-Certificate Mapping

| Channel | Channel Type | Protocol | Certificate(s) Applied | Cert ID(s) | TLS Version | Cipher Suites | Load Balancer / WAF | Notes |
|---|---|---|---|---|---|---|---|---|
| [Internet Banking Portal] | External Web | HTTPS | [*.example.com.my] | [CERT-001] | [TLS 1.2, TLS 1.3] | [e.g., TLS_AES_256_GCM_SHA384] | [Yes / No] | |
| [Mobile Banking App (iOS)] | Mobile | HTTPS + Certificate Pinning | [Mobile API cert] | [CERT-002] | [TLS 1.3] | | [Yes / No] | Certificate pinning enforced |
| [Mobile Banking App (Android)] | Mobile | HTTPS + Certificate Pinning | [Mobile API cert] | [CERT-002] | [TLS 1.3] | | [Yes / No] | Certificate pinning enforced |
| [Payment Gateway API] | API (mTLS) | mTLS | [mTLS cert] | [CERT-003] | [TLS 1.2, TLS 1.3] | | [Yes / No] | |
| [Internal Microservices] | Internal API | HTTPS/mTLS | [Internal TLS cert] | [CERT-004] | [TLS 1.2, TLS 1.3] | | N/A | |
| [ATM / Kiosk Network] | Dedicated Network | [Protocol] | [Cert] | [CERT-00X] | | | | |

### 5.2 Certificate Pinning Register

*List all applications or services that implement certificate pinning. Pinned certificates require coordinated renewal to avoid application outages.*

| Application | Platform | Pinned Cert ID | Pinned Common Name | Pin Type | App Version at Last Pin Update | Planned Next Pin Update |
|---|---|---|---|---|---|---|
| [Mobile Banking App] | [iOS / Android] | [CERT-002] | [CN] | [Leaf / Intermediate / Public Key] | [v1.x.x] | [YYYY-MM-DD] |

---

## 6. Customer Authentication Requirements

*This section documents certificates that directly support customer authentication mechanisms, in line with RMiT requirements for strong customer authentication and the protection of digital banking channels.*

### 6.1 Authentication Certificate Register

| Cert ID | Common Name (CN) | Authentication Use Case | Authentication Factor Supported | User Population | MFA Integration | Applicable Channel | Regulatory Basis |
|---|---|---|---|---|---|---|---|
| [CERT-001] | [CN] | [e.g., TLS for Internet Banking Login Page] | [e.g., Something You Have — server identity] | [Retail / Corporate / Staff] | [Yes / No] | [Internet Banking] | [RMiT 10.23 / RMiT 10.x] |
| [CERT-00X] | [CN] | [e.g., Client Certificate for Corporate Banking API] | [e.g., Client Certificate Authentication] | [Corporate Customers] | [Yes / No] | [Corporate API] | |

### 6.2 Customer-Facing Certificate Standards

*Document the minimum standards applied to certificates used in customer authentication flows.*

| Parameter | Requirement | Current Configuration | Compliant |
|---|---|---|---|
| Minimum Key Length (RSA) | [e.g., 2048-bit minimum, 4096-bit preferred] | [Configured Value] | [Yes / No] |
| Minimum Key Length (ECC) | [e.g., 256-bit minimum] | [Configured Value] | [Yes / No] |
| Minimum TLS Version | [e.g., TLS 1.2 minimum] | [Configured Value] | [Yes / No] |
| Certificate Validity Period | [e.g., Maximum 397 days per CA/Browser Forum] | [Configured Value] | [Yes / No] |
| HSTS Enforcement | [e.g., max-age=31536000; includeSubDomains] | [Configured Value] | [Yes / No] |
| OCSP Stapling | [e.g., Enabled] | [Configured Value] | [Yes / No] |
| Certificate Transparency (CT) Logging | [e.g., Required for publicly-trusted certs] | [Configured Value] | [Yes / No] |

---

## 7. Session Management Controls

*Certificates must be evaluated in the context of session management to ensure that cryptographic sessions established using these certificates are appropriately controlled, monitored, and terminated. This section maps certificates to session security controls.*

### 7.1 Session Security Configuration

| Cert ID | Common Name (CN) | Channel | Session Timeout (Idle) | Session Timeout (Absolute) | Session Token Binding | Forward Secrecy (PFS) Enabled | Session Renegotiation Policy | Monitoring / SIEM Integration |
|---|---|---|---|---|---|---|---|---|
| [CERT-001] | [CN] | [Internet Banking] | [e.g., 5 minutes] | [e.g., 30 minutes] | [Yes / No] | [Yes / No] | [e.g., Disabled / Server-initiated only] | [Yes / No — SIEM Name] |
| [CERT-002] | [CN] | [Mobile Banking] | [e.g., 5 minutes] | [e.g., 30 minutes] | [Yes / No] | [Yes / No] | | |

### 7.2 Certificate Revocation and Session Invalidation

*Document the procedures and configurations for certificate revocation and the downstream impact on active sessions.*

| Procedure | Details |
|---|---|
| **Revocation Method** | [e.g., OCSP / CRL / Both] |
| **OCSP Responder URL** | [URL] |
| **CRL Distribution Point** | [URL] |
| **Session Invalidation on Revocation** | [Describe how active sessions are invalidated when a certificate is revoked, e.g., WAF rule triggers, service restart procedure] |
| **Emergency Revocation RTO** | [e.g., Target: < 4 hours from incident declaration] |
| **Revocation Notification Process** | [Describe internal notification chain — Custodian → Owner → CISO → BNM if material] |

---

## 8. Certificate Alerts and Expiry Management

*This section documents the operational controls for proactive certificate lifecycle management to prevent certificate-related outages or security incidents.*

### 8.1 Alerting Configuration

| Alert Type | Threshold | Notification Channel | Recipients | Escalation Path |
|---|---|---|---|---|
| Expiry Warning — Advance Notice | [e.g., 90 days before expiry] | [e.g., Email / ITSM Ticket] | [Technical Custodian] | |
| Expiry Warning — Action Required | [e.g., 30 days before expiry] | [e.g., Email + ITSM] | [Technical Custodian, Owner] | |
| Expiry Critical | [e.g., 7 days before expiry] | [e.g., PagerDuty / SMS / Email] | [Technical Custodian, Owner, Head of Digital Banking] | Immediate escalation to CISO |
| Certificate Expired | Expiry date passed | [e.g., P1 Incident Alert] | [Head of Digital Banking, CISO] | Incident Management process |
| Certificate Revoked | On revocation event | [e.g., SIEM Alert] | [CISO, SOC] | Security Incident Response |

### 8.2 Renewal Tracking

| Cert ID | Common Name (CN) | Expiry Date | Renewal Initiated Date | Renewal Completed Date | New Cert ID | Renewed By | Notes |
|---|---|---|---|---|---|---|---|
| [CERT-001] | [CN] | [YYYY-MM-DD] | [YYYY-MM-DD] | [YYYY-MM-DD] | [New CERT-ID] | [Name] | |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability and responsibility for certificate inventory management activities.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Digital Banking | CISO / CTO | Platform / PKI Engineer | Technical Custodian | IT Risk & Compliance | Internal Audit | BNM (Regulatory) |
|---|---|---|---|---|---|---|---|
| Maintain and update certificate inventory | C | I | R | R | I | I | — |
| Approve new certificate issuance | A | C | R | R | C | — | — |
| Authorize certificate revocation | A | C | R | R | I | — | — |
| Monitor certificate expiry and alerts | I | I | R | R | I | — | — |
| Conduct quarterly inventory review | A | C | R | R | R | I | — |
| Escalate expiry incidents | I | A | R | R | I | — | I (if material) |
| Approve changes to certificate standards | A | A | C | C | C | I | — |
| Submit regulatory evidence (RMiT audit) | A | C | C | C | R | C | I |
| Perform annual PKI architecture review | C | A | R | C | C | C | — |

---

## 10. Exceptions and Deviations

*Any certificate that does not meet the defined standards (e.g., weak key length, expired but still operational under a waiver, non-standard CA) must be documented here with an approved exception.*

| Exception ID | Cert ID | Common Name (CN) | Nature of Deviation | Risk Assessment | Compensating Controls | Exception Approved By | Approval Date | Exception Expiry Date |
|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [CERT-00X] | [CN] | [e.g., RSA 1024-bit key — legacy system constraint] | [High / Medium / Low] | [Describe compensating controls] | [Approver Name / Role] | [YYYY-MM-DD] | [YYYY-MM-DD] |

---

## 11. Review and Approval

### 11.1 Review Triggers

This inventory must be reviewed and updated upon any of the following events (per-event review), and in any case no less than **quarterly**:

- Issuance of a new certificate
- Renewal or replacement of an existing certificate
- Revocation of a certificate
- Decommissioning of a system or channel
- Change in certificate ownership or custodianship
- Discovery of a certificate not previously recorded
- Security incident involving cryptographic material
- Scheduled quarterly compliance review cycle

### 11.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial document creation |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Description of changes] |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Digital Banking | [Name] | | [YYYY-MM-DD] |
| Chief Information Security Officer (CISO) | [Name] | | [YYYY-MM-DD] |
| IT Risk & Compliance | [Name] | | [YYYY-MM-DD] |

---

## 12. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.23 | Requirements for digital certificate management, lifecycle controls, and inventory maintenance for financial institutions |
| BNM RMiT | Clause 10.x | [Reference additional applicable RMiT clauses, e.g., channel security, cryptographic controls] |
| CA/Browser Forum | Baseline Requirements | Industry standards for publicly-trusted TLS certificate validity periods and issuance practices |
| NIST SP 800-57 | Key Management Recommendation | Guidance on cryptographic key length and algorithm selection |
| ISO/IEC 27001:2022 | Annex A — Cryptography | Control A.8.24: Use of cryptography |
| [Organization Name] | Cryptographic Controls Policy | [Internal policy reference] |
| [Organization Name] | IT Risk Management Framework | [Internal policy reference] |
| [Organization Name] | Digital Banking Security Policy | [Internal policy reference] |

---

## Appendices

### Appendix A: Certificate Management System Details

*Provide details of the automated certificate management platform used to generate and maintain this inventory.*

| Parameter | Details |
|---|---|
| System Name | [e.g., Venafi / DigiCert CertCentral / HashiCorp Vault / [Internal System]] |
| System Version | [Version] |
| Data Export Date/Time | [YYYY-MM-DD HH:MM:SS UTC+8] |
| Export Generated By | [System / User] |
| Data Completeness Confirmation | [Confirmed complete / Partial — see exclusions] |

### Appendix B: Certificate Authority (CA) Trust Store

*List all trusted Certificate Authorities whose certificates are explicitly trusted within [Organization Name]'s systems.*

| CA Name | CA Type | Root / Intermediate | Trust Store Location | Trusted Since | Review Date |
|---|---|---|---|---|---|
| [e.g., DigiCert Global Root CA] | [Public] | [Root] | [OS Trust Store / Browser / Custom] | [YYYY-MM-DD] | [YYYY-MM-DD] |
| [Organization Name] Internal Root CA | [Private] | [Root] | [Enterprise Trust Store] | [YYYY-MM-DD] | [YYYY-MM-DD] |

### Appendix C: Glossary

| Term | Definition |
|---|---|
| **Certificate** | A digitally signed document binding a public key to an entity's identity, issued by a Certificate Authority |
| **CA (Certificate Authority)** | A trusted entity that issues digital certificates |
| **CSR (Certificate Signing Request)** | A request sent to a CA to issue a certificate, containing the subject's public key |
| **CRL (Certificate Revocation List)** | A list of certificates that have been revoked before their expiry |
| **OCSP** | Online Certificate Status Protocol — a real-time method for checking certificate revocation status |
| **mTLS (Mutual TLS)** | A TLS variant where both client and server authenticate using certificates |
| **PFS (Perfect Forward Secrecy)** | A cryptographic property ensuring session keys are not compromised if long-term keys are later exposed |
| **PKI (Public Key Infrastructure)** | The framework of policies, hardware, software, and procedures for managing digital certificates |
| **HSM (Hardware Security Module)** | A physical device that safeguards and manages cryptographic keys |
| **Certificate Pinning** | A technique that associates a host with an expected certificate or public key, rejecting others |
| **TLS (Transport Layer Security)** | A cryptographic protocol providing secure communication over a network |

### Appendix D: Related Documents

| Document | Location | Owner |
|---|---|---|
| Cryptographic Controls Policy | [Document Repository Path] | [Owner Role] |
| Digital Banking Security Policy | [Document Repository Path] | Head of Digital Banking |
| PKI Architecture Design Document | [Document Repository Path] | [Owner Role] |
| Incident Response Plan — Cryptographic Incidents | [Document Repository Path] | CISO |
| Change Management Policy | [Document Repository Path] | [Owner Role] |

---

*This document is classified as **Confidential**. It must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorized disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Head of Digital Banking | [Organization Name]*