# Secure Coding Standards

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Application Development |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |

---

> **Regulatory Reference:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 10.6
>
> **Document Status:** [Draft / Under Review / Approved]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Secure Coding Policy Statements](#4-secure-coding-policy-statements)
5. [Secure Coding Requirements and Standards](#5-secure-coding-requirements-and-standards)
6. [Secure Development Lifecycle Integration](#6-secure-development-lifecycle-integration)
7. [Code Review and Static Analysis](#7-code-review-and-static-analysis)
8. [Dependency and Third-Party Component Management](#8-dependency-and-third-party-component-management)
9. [Secrets and Credential Management](#9-secrets-and-credential-management)
10. [Logging, Monitoring, and Error Handling Standards](#10-logging-monitoring-and-error-handling-standards)
11. [Exceptions and Escalation Process](#11-exceptions-and-escalation-process)
12. [Compliance and Enforcement](#12-compliance-and-enforcement)
13. [Review and Approval History](#13-review-and-approval-history)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and the security objectives it is designed to achieve.*

This document establishes the **Secure Coding Standards** for [Organization Name] and defines the minimum-security requirements that all software developers, vendors, and third-party contractors must adhere to when designing, developing, testing, and maintaining applications on behalf of [Organization Name].

These standards are designed to:

- Reduce the introduction of security vulnerabilities during the software development lifecycle (SDLC).
- Ensure all application code produced for or on behalf of [Organization Name] meets industry-accepted security baselines.
- Support [Organization Name]'s compliance obligations under Bank Negara Malaysia's **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 10.6**, which requires financial institutions to implement secure coding practices.
- Align with internationally recognized security frameworks including the **OWASP Top 10**, **OWASP Application Security Verification Standard (ASVS)**, **SANS CWE Top 25**, and **NIST Secure Software Development Framework (SSDF)**.
- Protect the confidentiality, integrity, and availability of customer data and financial systems.

### 1.2 Scope

*Define the systems, teams, and contexts to which this document applies. Be explicit about what is included and excluded.*

This document applies to:

**In Scope:**

- All internally developed software, applications, APIs, scripts, and automation tools produced by [Organization Name] employees, contractors, or third-party vendors.
- All programming languages and technology stacks used in production environments, including but not limited to: Java, Python, JavaScript/TypeScript, .NET (C#), Go, SQL, Shell scripting, and Infrastructure-as-Code (IaC) configurations.
- All application tiers: front-end (web and mobile), back-end services, batch processing, middleware, and database interaction layers.
- Cloud-native and on-premises applications.
- New development projects, enhancements, and significant changes to existing systems as defined by the [Organization Name] Change Management Policy.
- Third-party software development performed under contract or managed service agreements with [Organization Name].

**Out of Scope:**

- Commercial off-the-shelf (COTS) software where [Organization Name] does not have access to or control over the source code. (Refer to the Vendor Risk Management Policy for COTS security assessment requirements.)
- Open-source software consumed as a dependency (governed by Section 8 of this document).

### 1.3 Regulatory Context

*Reference the specific BNM RMiT clauses and any related regulatory instruments that mandate these standards.*

This document is issued in accordance with and supports compliance with the following regulatory obligations:

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.6 | Secure coding practices must be established and enforced for all application development. |
| BNM RMiT Policy Document | Clause 10.1 | Technology risk management framework requirements for application development. |
| BNM RMiT Policy Document | Clause 10.5 | System acquisition and development security requirements. |
| Personal Data Protection Act 2010 (PDPA) | Part III | Protection of personal data through appropriate technical safeguards in applications. |
| [Other applicable regulation] | [Clause] | [Summary] |

---

## 2. Definitions and Abbreviations

*List key terms and acronyms used throughout this document to ensure consistent interpretation.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Application** | Any software system, web application, mobile application, API, microservice, script, or automated process developed, maintained, or commissioned by [Organization Name]. |
| **Secure Coding** | The practice of writing software in a manner that guards against the unintentional introduction of security vulnerabilities. |
| **Vulnerability** | A weakness in an application that could be exploited by a threat actor to gain unauthorized access, modify data, or disrupt service. |
| **Static Application Security Testing (SAST)** | Automated analysis of source code, bytecode, or binaries for security vulnerabilities without executing the program. |
| **Dynamic Application Security Testing (DAST)** | Automated testing of a running application by simulating external attacks against the application interface. |
| **Software Composition Analysis (SCA)** | Automated identification and analysis of open-source and third-party components used within an application for known vulnerabilities and license risks. |
| **Threat Modelling** | A structured process for identifying, quantifying, and addressing the security risks associated with an application. |
| **SDLC** | Software Development Lifecycle — the end-to-end process of planning, creating, testing, deploying, and maintaining software. |
| **Input Validation** | The process of verifying that supplied data meets defined criteria before processing. |
| **Secrets** | Sensitive configuration values including passwords, API keys, tokens, certificates, and cryptographic keys embedded in or used by an application. |
| **Dependency** | An external library, framework, module, or package that an application relies upon to function. |
| **Production Environment** | The live operational environment in which software serves end users or processes real financial transactions. |

### 2.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| API | Application Programming Interface |
| ASVS | Application Security Verification Standard (OWASP) |
| BNM | Bank Negara Malaysia |
| COTS | Commercial Off-the-Shelf |
| CVE | Common Vulnerabilities and Exposures |
| CVSS | Common Vulnerability Scoring System |
| DAST | Dynamic Application Security Testing |
| IAM | Identity and Access Management |
| IaC | Infrastructure as Code |
| MFA | Multi-Factor Authentication |
| OWASP | Open Web Application Security Project |
| PDPA | Personal Data Protection Act 2010 |
| RMiT | Risk Management in Technology |
| SAST | Static Application Security Testing |
| SCA | Software Composition Analysis |
| SDLC | Software Development Lifecycle |
| SSDF | Secure Software Development Framework (NIST SP 800-218) |
| TLS | Transport Layer Security |
| WAF | Web Application Firewall |

---

## 3. Roles and Responsibilities

*Define accountability and ownership for secure coding practices across all relevant stakeholders. Use the RACI model: Responsible (R), Accountable (A), Consulted (C), Informed (I).*

### 3.1 RACI Matrix

| Activity | Head of Application Development | Application Developers / Engineers | Security Champions | Information Security Team | IT Risk & Compliance | QA / Testing Team | Project / Product Manager | CIO / CTO |
|---|---|---|---|---|---|---|---|---|
| Own and maintain Secure Coding Standards | A | C | C | C | C | I | I | I |
| Implement secure coding practices in daily development | C | R | C | I | I | R | I | I |
| Conduct peer code reviews for security | A | R | R | C | I | I | I | I |
| Operate and configure SAST tools | A | R | R | R | C | I | I | I |
| Operate and configure DAST tools | C | I | R | R | C | R | I | I |
| Perform Software Composition Analysis (SCA) | A | R | R | R | C | I | I | I |
| Define and maintain threat models | A | R | R | R | C | I | C | I |
| Approve exceptions to this standard | A | I | C | C | R | I | C | I |
| Conduct security training for developers | C | R | R | R | C | I | C | I |
| Report and track security defects | A | R | R | R | C | R | C | I |
| Conduct annual review of this document | A | C | C | C | R | I | I | C |
| Escalate critical security defects | R | R | R | A | C | I | C | I |
| Approve deployment to production | A | I | C | C | C | R | R | I |

### 3.2 Role Descriptions

| Role | Responsibilities under this Standard |
|---|---|
| **Head of Application Development** | Owns this document; ensures developer compliance; escalates systemic non-compliance to CIO/CTO; approves exceptions in conjunction with Information Security. |
| **Application Developers / Engineers** | Apply secure coding practices per this standard; participate in code reviews; remediate identified vulnerabilities within defined SLAs; complete mandatory security training. |
| **Security Champions** | Act as embedded security advocates within development teams; review code for security issues; liaise with the Information Security team; promote awareness of evolving threats. |
| **Information Security Team** | Provide security advisory services; maintain SAST/DAST/SCA tooling; define vulnerability remediation SLAs; review and co-approve exceptions. |
| **IT Risk & Compliance** | Monitor compliance with this standard; report findings to Risk Committees; manage exception register; support regulatory examinations. |
| **QA / Testing Team** | Integrate security testing into test plans; execute DAST scans; validate remediation of reported security defects. |
| **Project / Product Manager** | Ensure security activities are included in project plans and timelines; escalate resource constraints that may impact compliance. |
| **CIO / CTO** | Executive accountability for technology risk; approves high-risk exceptions; receives escalated critical vulnerability reports. |

---

## 4. Secure Coding Policy Statements

*State the overarching policy positions of [Organization Name] with respect to secure application development. These are binding statements that underpin all requirements in subsequent sections.*

### 4.1 General Policy Statements

[Organization Name] is committed to developing and maintaining applications that are secure by design. The following policy statements apply to all in-scope development activities:

**PS-1: Security by Design**
All applications shall incorporate security considerations from the earliest stages of design. Security requirements shall be defined alongside functional requirements and shall not be deferred to later phases of the SDLC.

**PS-2: OWASP Top 10 Compliance**
All web-facing applications developed by or on behalf of [Organization Name] shall, as a minimum, address all vulnerabilities identified in the current OWASP Top 10 Web Application Security Risks. Mobile applications shall additionally address the OWASP Mobile Top 10.

**PS-3: Least Privilege**
Applications shall be designed and implemented to operate with the minimum set of permissions and access rights necessary to fulfill their functional requirements.

**PS-4: Defence in Depth**
Security controls shall be implemented at multiple layers of the application stack. No single control shall be relied upon as the sole safeguard against a given threat category.

**PS-5: Fail Securely**
Applications shall be designed to fail in a secure state. Error conditions shall not expose sensitive information, grant elevated privileges, or leave the system in an insecure configuration.

**PS-6: No Security Through Obscurity**
The security of an application shall not rely on the secrecy of its implementation, architecture, or source code. All security controls shall remain effective even if the design is known to an attacker.

**PS-7: Mandatory Security Testing**
No application or significant change shall be promoted to a production environment without having undergone the security testing activities defined in this standard.

**PS-8: Timely Remediation**
Security vulnerabilities identified through any means — automated scanning, code review, penetration testing, or incident response — shall be remediated within the timeframes defined in Section 12.2 of this document.

**PS-9: Separation of Duties**
Developers shall not be the sole approvers of their own code changes. Peer review is mandatory for all changes deployed to production environments.

**PS-10: Vendor and Third-Party Code**
All externally sourced code, libraries, and components integrated into [Organization Name] applications shall be assessed for security risk prior to use and monitored continuously for newly identified vulnerabilities.

---

## 5. Secure Coding Requirements and Standards

*Provide specific, actionable technical requirements organized by vulnerability category. Reference OWASP and industry standards where applicable.*

### 5.1 Input Validation and Output Encoding

*Reference: OWASP Top 10 — A03: Injection; OWASP ASVS V5*

All data received from external sources — including user input, API payloads, file uploads, query parameters, HTTP headers, and environment variables — shall be treated as untrusted.

**Requirements:**

- **IV-1:** All input data shall be validated against a defined allowlist (whitelist) of acceptable values, formats, lengths, and character sets before processing. Blocklist (blacklist) validation shall not be used as the primary control.
- **IV-2:** Input validation shall occur server-side. Client-side validation may be used for user experience purposes but shall not be relied upon for security.
- **IV-3:** All user-supplied data rendered in HTML responses shall be contextually encoded to prevent Cross-Site Scripting (XSS). This includes HTML entity encoding, JavaScript encoding, CSS encoding, and URL encoding as appropriate to the output context.
- **IV-4:** Parameterized queries or prepared statements shall be used for all database interactions. Dynamic SQL construction using string concatenation with user-supplied input is prohibited.
- **IV-5:** All XML processing shall be configured to disable external entity (XXE) resolution.
- **IV-6:** File upload functionality shall validate file type by content inspection (magic bytes), not filename extension alone. Uploaded files shall be stored outside the web root and served through a controlled mechanism.
- **IV-7:** JSON and XML deserialization shall be performed with type constraints. Deserializing untrusted data into arbitrary object types is prohibited.

| Vulnerability Category | Prohibited Pattern | Required Alternative |
|---|---|---|
| SQL Injection | `"SELECT * FROM users WHERE id = " + userId` | Parameterized query: `WHERE id = ?` with bound parameter |
| XSS (Reflected) | `response.write(request.getParameter("name"))` | HTML-encode output: `HtmlEncoder.encode(input)` |
| Path Traversal | `File.open("/data/" + userInput)` | Canonicalize and validate path against allowed base directory |
| Command Injection | `exec("ping " + userIp)` | Use library APIs; never pass user input to shell commands |
| XXE | Default XML parser with DTD enabled | Disable DTD processing: `factory.setFeature(DISALLOW_DOCTYPE_DECL, true)` |

### 5.2 Authentication and Session Management

*Reference: OWASP Top 10 — A07: Identification and Authentication Failures; OWASP ASVS V2, V3*

- **AU-1:** All authentication mechanisms shall enforce a minimum password complexity policy aligned with [Organization Name]'s Password Policy ([Policy Reference]).
- **AU-2:** Multi-Factor Authentication (MFA) shall be implemented for all administrative interfaces, privileged access functions, and internet-facing applications that process customer or financial data.
- **AU-3:** Session tokens shall be generated using a cryptographically secure pseudo-random number generator (CSPRNG) with a minimum entropy of 128 bits.
- **AU-4:** Session tokens shall be transmitted only over encrypted channels (TLS). The `Secure` attribute shall be set on all session cookies.
- **AU-5:** The `HttpOnly` attribute shall be set on all session cookies to prevent access via client-side scripts.
- **AU-6:** Session tokens shall be invalidated server-side upon logout. Client-side token deletion alone is insufficient.
- **AU-7:** Session expiry shall be enforced: absolute timeout of [X hours], idle timeout of [Y minutes] for customer-facing applications.
- **AU-8:** Account lockout or progressive delay mechanisms shall be implemented after [N] consecutive failed authentication attempts.
- **AU-9:** Password reset and account recovery flows shall use time-limited, single-use tokens delivered via a verified out-of-band channel.
- **AU-10:** Authentication credentials shall never be logged, included in URLs, or transmitted in HTTP GET parameters.

### 5.3 Access Control and Authorisation

*Reference: OWASP Top 10 — A01: Broken Access Control; OWASP ASVS V4*

- **AC-1:** Access control decisions shall be enforced server-side for every request. Client-side access control checks (e.g., hidden UI elements) shall not be the sole enforcement mechanism.
- **AC-2:** Applications shall implement the principle of least privilege: each user, service account, and component shall have only the minimum permissions required.
- **AC-3:** All access control checks shall be centralized in a single, reusable authorisation component. Distributed, ad-hoc permission checks are prohibited.
- **AC-4:** Insecure Direct Object References (IDOR) shall be prevented by validating that the authenticated user has explicit permission to access the requested resource, not merely by checking that the object ID is valid.
- **AC-5:** Horizontal and vertical privilege escalation paths shall be identified during threat modelling and explicitly mitigated.
- **AC-6:** Directory listing shall be disabled on all web servers and application servers.
- **AC-7:** Administrative functions shall be segregated from user-facing functions and protected by additional authentication controls.

### 5.4 Cryptography

*Reference: OWASP Top 10 — A02: Cryptographic Failures; OWASP ASVS V6; NIST SP 800-131A*

- **CR-1:** All data classified as Confidential or above that is stored at rest shall be encrypted using approved algorithms (see table below).
- **CR-2:** All data in transit between system components, including internal service-to-service communication, shall be encrypted using TLS 1.2 or higher. TLS 1.0 and 1.1 are prohibited.
- **CR-3:** Cryptographic keys shall never be hardcoded in source code or configuration files committed to version control. Key management shall follow the [Organization Name] Key Management Standard ([Reference]).
- **CR-4:** Hashing of passwords shall use adaptive, salted algorithms designed for password storage. MD5, SHA-1, and unsalted SHA-2 are prohibited for password hashing.
- **CR-5:** Random number generation for security-sensitive purposes (e.g., tokens, nonces, session IDs) shall use OS-provided CSPRNG functions.

| Use Case | Approved Algorithm | Minimum Key Length | Prohibited Algorithms |
|---|---|---|---|
| Symmetric Encryption (Data at Rest) | AES-GCM, AES-CBC with HMAC | 256-bit | DES, 3DES, RC4, Blowfish |
| Asymmetric Encryption / Key Exchange | RSA-OAEP, ECDH | RSA: 2048-bit; EC: P-256 | RSA PKCS#1 v1.5 padding |
| Digital Signatures | ECDSA, RSA-PSS | RSA: 2048-bit; EC: P-256 | MD5withRSA, SHA1withRSA |
| Password Hashing | bcrypt, Argon2id, scrypt | Work factor: bcrypt ≥12 | MD5, SHA-1, SHA-256 (unsalted) |
| Message Authentication | HMAC-SHA256, HMAC-SHA512 | 256-bit | HMAC-MD5, HMAC-SHA1 |
| TLS Protocol Version | TLS 1.2, TLS 1.3 | — | SSL 2.0, SSL 3.0, TLS 1.0, TLS 1.1 |

### 5.5 API Security

*Reference: OWASP API Security Top 10; OWASP ASVS V13*

- **API-1:** All APIs shall require authentication. Unauthenticated endpoints shall be explicitly approved and documented.
- **API-2:** API authorisation shall be enforced at the object level (BOLA/IDOR) and function level for every request.
- **API-3:** APIs shall enforce rate limiting and throttling to prevent abuse and denial-of-service conditions.
- **API-4:** API responses shall not expose more data than required by the consuming client (avoid excessive data exposure). Response schemas shall be explicitly defined.
- **API-5:** All API inputs shall be validated against a defined schema. Unexpected fields shall be rejected or stripped.
- **API-6:** API keys and tokens shall not be transmitted in URL query strings. Use HTTP headers (e.g., `Authorization: Bearer`) exclusively.
- **API-7:** GraphQL APIs shall implement query depth limiting, query complexity limits, and introspection shall be disabled in production environments.

### 5.6 Security Headers and Browser Security

*Reference: OWASP Secure Headers Project*

All HTTP responses from web applications shall include the following security headers:

| Header | Required Value / Configuration | Purpose |
|---|---|---|
| `Content-Security-Policy` | Defined per-application allowlist | Prevent XSS and data injection |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | Enforce HTTPS |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `X-Frame-Options` | `DENY` or `SAMEORIGIN` | Prevent clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Control referrer information |
| `Permissions-Policy` | Defined per-application | Restrict browser feature access |
| `Cache-Control` | `no-store` (for sensitive responses) | Prevent caching of sensitive data |

The `Server` and `X-Powered-By` headers shall be suppressed or set to a non-informative value in all production environments.

### 5.7 Mobile Application Security

*Reference: OWASP Mobile Application Security Verification Standard (MASVS); OWASP Mobile Top 10*

- **MOB-1:** Mobile applications shall not store sensitive data (credentials, tokens, PII, financial data) in plaintext in local storage, shared preferences, SQLite databases, or application logs.
- **MOB-2:** Mobile applications shall implement certificate pinning for communication with [Organization Name] backend services to prevent man-in-the-middle attacks.
- **MOB-3:** Sensitive data shall be cleared from memory and the UI when an application enters the background.
- **MOB-4:** Mobile applications shall not log sensitive user data to device logs.
- **MOB-5:** Reverse engineering protections (e.g., code obfuscation) shall be applied to release builds of mobile applications.
- **MOB-6:** Root/jailbreak detection shall be implemented, and application functionality shall be appropriately restricted on compromised devices.

---

## 6. Secure Development Lifecycle Integration

*Describe how secure coding practices are embedded into each phase of the SDLC to ensure security is not bolted on at the end.*

### 6.1 SDLC Security Gate Summary

| SDLC Phase | Security Activity | Responsible | Gate Criteria |
|---|---|---|---|
| **Requirements** | Define security requirements; conduct initial threat modelling | Developer, Security Champion | Security requirements documented and reviewed |
| **Design** | Threat modelling (STRIDE/DREAD); architecture security review | Developer, Security Champion, InfoSec | Threat model approved; critical risks mitigated |
| **Development** | Apply secure coding standards; use approved libraries; developer self-review | Developer | Standards compliance; no use of prohibited patterns |
| **Code Review** | Peer review for security; Security Champion review for high-risk changes | Developer, Security Champion | At least one reviewer; critical findings resolved |
| **Build / CI** | Automated SAST scan; SCA scan | Developer, CI Pipeline | No Critical/High findings (or approved exceptions) |
| **Testing / QA** | DAST scan; security test cases execution | QA, InfoSec | No Critical/High DAST findings; security test cases passed |
| **Pre-Production** | Penetration test (for significant changes); final security sign-off | InfoSec | Pentest findings addressed; InfoSec sign-off obtained |
| **Deployment** | Secure configuration review; secrets scan | DevOps, Security Champion | No hardcoded secrets; security configurations verified |
| **Post-Deployment** | Continuous monitoring; vulnerability patching | DevOps, InfoSec | Monitoring active; patch SLAs met |

### 6.2 Threat Modelling Requirements

*Specify when threat modelling is mandatory and what methodology shall be used.*

Threat modelling shall be conducted:

- For all new applications prior to development commencing.
- For significant changes to existing applications, including architectural changes, new authentication flows, new data types processed, and new external integrations.
- On an annual basis as part of the security review cycle.

The threat modelling process shall:

1. Define the application's assets, entry points, trust boundaries, and data flows using a Data Flow Diagram (DFD).
2. Enumerate threats using the **STRIDE** methodology (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege).
3. Rate each threat using **CVSS v3.1** or equivalent risk scoring.
4. Document mitigating controls for each accepted threat.
5. Be reviewed and approved by the Information Security team prior to design sign-off.

**Threat model outputs shall be retained as project artefacts and stored in [Document Repository Location].**

---

## 7. Code Review and Static Analysis

*Define mandatory code review practices and the use of automated security scanning tools.*

### 7.1 Peer Code Review

All code changes destined for production environments shall undergo peer review prior to merging. The following requirements apply:

- **CR-R1:** Every pull request / merge request shall require approval from at least one peer reviewer who did not author the change.
- **CR-R2:** For changes to authentication, authorisation, cryptography, or payment processing modules, review by a designated **Security Champion** is mandatory.
- **CR-R3:** Reviewers shall specifically check for compliance with Section 5 of this standard, including but not limited to: injection vulnerabilities, insecure direct object references, hardcoded credentials, and insecure use of cryptography.
- **CR-R4:** Code review findings shall be documented within the version control system's review tooling (e.g., pull request comments). Verbal-only reviews are not acceptable.
- **CR-R5:** Critical or High security findings identified during code review shall block the merge until resolved.

### 7.2 Static Application Security Testing (SAST)

| Requirement | Detail |
|---|---|
| **Tooling** | [Approved SAST Tool — e.g., Semgrep, Checkmarx, SonarQube SAST, Veracode] |
| **Integration Point** | CI/CD pipeline; executed automatically on every pull request and on every merge to main/release branches |
| **Coverage** | All production source code; IaC configurations |
| **Blocking Threshold** | Findings rated Critical or High shall block the build pipeline |
| **Baseline Management** | Existing findings at project inception shall be documented as a baseline; net-new findings above threshold shall block deployment |
| **Suppression Policy** | Finding suppressions require documented justification and approval from InfoSec; review within 90 days |
| **Retention** | SAST reports shall be retained for a minimum of [3 years] |

### 7.3 Secrets Scanning

- Automated secrets scanning shall be integrated into the CI/CD pipeline to detect hardcoded credentials, API keys, and tokens in source code and configuration files.
- **Approved tool:** [e.g., GitGuardian, truffleHog, detect-secrets]
- Pre-commit hooks shall be configured on all developer workstations to prevent secrets from being committed to version control.
- If a secret is inadvertently committed to a repository, the following incident response steps shall be taken immediately:
  1. Revoke and rotate the exposed credential immediately.
  2. Assume the credential has been compromised and investigate for unauthorized use.
  3. Report the incident per the [Incident Response Policy Reference].
  4. Remove the credential from version control history using approved tooling; **do not** rely solely on a follow-up commit.

---

## 8. Dependency and Third-Party Component Management

*Govern the selection, use, and ongoing monitoring of open-source and third-party libraries.*

### 8.1 Approved Use of Open-Source and Third-Party Libraries

*Reference: OWASP Top 10 — A06: Vulnerable and Outdated Components*

- **DEP-1:** Developers shall only use third-party libraries that are actively maintained and have a documented security response process.
- **DEP-2:** Before introducing a new library or framework dependency, developers shall verify it is free of known Critical or High CVEs using an approved SCA tool.
- **DEP-3:** Pinning of dependency versions is required in all package manifests (e.g., `package-lock.json`, `requirements.txt`, `go.sum`). Floating version ranges that could silently pull in compromised updates are prohibited for production builds.
- **DEP-4:** A Software Bill of Materials (SBOM) shall be maintained for all production applications and updated with each release.

### 8.2 Software Composition Analysis (SCA)

| Requirement | Detail |
|---|---|
| **Tooling** | [Approved SCA Tool — e.g., OWASP Dependency-Check, Snyk, Black Duck] |
| **Integration Point** | CI/CD pipeline; nightly scheduled scans against main branches |
| **Blocking Threshold** | Critical CVEs (CVSS ≥ 9.0) shall block the build pipeline |
| **Remediation SLA** | Per Section 12.2 |
| **License Compliance** | SCA tooling shall also flag high-risk open-source licenses (e.g., AGPL, GPL in commercial contexts) for legal review |

### 8.3 Vulnerability Patching for Dependencies

| Severity (CVSS Score) | Remediation Timeframe |
|---|---|
| Critical (9.0–10.0) | Within 72 hours of disclosure |
| High (7.0–8.9) | Within 7 calendar days |
| Medium (4.0–6.9) | Within 30 calendar days |
| Low (0.1–3.9) | Within 90 calendar days or next scheduled release |

---

## 9. Secrets and Credential Management

*Define requirements for the secure handling of application credentials, API keys, and cryptographic material.*

### 9.1 Secrets Management Requirements

- **SM-1:** Application credentials, API keys, database passwords, TLS certificates, and encryption keys shall **never** be hardcoded in source code, configuration files, IaC templates, or committed to any version control system.
- **SM-2:** All secrets required by applications running in production shall be retrieved at runtime from an approved secrets management system.
- **SM-3:** Approved secrets management solutions for [Organization Name] include: [e.g., HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, CyberArk] — as applicable to the deployment environment.
- **SM-4:** Each application shall use a dedicated service account or identity for accessing the secrets management system. Shared credentials between applications are prohibited.
- **SM-5:** Secrets access shall be logged and monitored. Alerts shall be configured for unusual access patterns.
- **SM-6:** Secrets shall have defined rotation schedules:

| Secret Type | Maximum Rotation Period |
|---|---|
| Database credentials | 90 days |
| API keys (external services) | 180 days |
| Service account passwords | 90 days |
| TLS/SSL certificates | Prior to expiry (alert at 30 days before expiry) |
| Encryption keys | Per Key Management Standard ([Reference]) |

### 9.2 Environment Separation

- **SM-7:** Separate credentials shall be used for Development, Staging/UAT, and Production environments. Production credentials shall never be used in non-production environments.
- **SM-8:** Developers shall not have access to production secrets unless explicitly required for an approved operational task, governed by the Privileged Access Management Policy ([Reference]).

---

## 10. Logging, Monitoring, and Error Handling Standards

*Define requirements for application-level logging, error handling, and security event generation.*

### 10.1 Security Logging Requirements

All production applications shall generate security-relevant log events sufficient to support incident detection and forensic investigation:

| Event Category | Events to Log | Data to Capture |
|---|---|---|
| **Authentication** | Login success, login failure, logout, MFA events, account lockout | Timestamp, user ID, source IP, user agent, outcome |
| **Authorisation** | Access denied events, privilege escalation attempts | Timestamp, user ID, resource requested, outcome |
| **Session Management** | Session creation, session termination, session expiry | Timestamp, session ID (truncated/hashed), user ID |
| **Data Access** | Access to sensitive data (PII, financial records) | Timestamp, user ID, record type, action |
| **Administrative Actions** | Configuration changes, user account management, permission changes | Timestamp, admin user ID, change detail, before/after state |
| **Input Validation Failures** | Repeated validation failures suggesting attack activity | Timestamp, source IP, field name, failure type |
| **Security Control Events** | WAF blocks, rate limit triggers, CSRF failures | Timestamp, source IP, rule triggered |

### 10.2 Logging Prohibitions

The following data shall **never** be written to application logs:

- Passwords or password hashes.
- Full payment card numbers (PAN). Logs may record the last four digits only.
- Full credentials or authentication tokens.
- Sensitive personal data beyond what is strictly necessary for the logged event (minimization principle, PDPA compliance).
- Encryption keys or cryptographic material.
- Session tokens or cookies.

### 10.3 Error Handling Standards

- **EH-1:** Applications shall implement a global exception handler to catch unhandled errors and return a generic, user-safe error message. Stack traces, internal error codes, server paths, and database schema information shall never be exposed to end users.
- **EH-2:** Detailed error information shall be written to server-side logs with a unique error reference ID. The user-facing message shall contain only the error reference ID, enabling support investigation without disclosing internals.
- **EH-3:** Error handling code shall not silently swallow exceptions. All caught exceptions shall be logged at the appropriate severity level.
- **EH-4:** Applications shall handle resource exhaustion, timeout conditions, and external service failures gracefully without entering an insecure state.

### 10.4 Log Integrity and Retention

- Application logs shall be forwarded to a centralized, tamper-resistant log management system ([e.g., Wazuh/SIEM reference]) in near real-time.
- Logs shall be retained for a minimum period aligned with the [Organization Name] Log Management Policy and BNM RMiT requirements (minimum [7 years] for financial transaction logs).
- Write access to production logs shall be restricted to authorized system accounts only. Developers shall not have direct write or delete access to production log stores.

---

## 11. Exceptions and Escalation Process

*Define the process for requesting, approving, and tracking deviations from this standard.*

### 11.1 Exception Principles

Exceptions to this standard may be necessary in limited circumstances due to technical constraints, legacy system limitations, or business justification. All exceptions shall be:

- Formally documented and approved prior to implementation.
- Assessed for residual risk with compensating controls identified.
- Time-limited and subject to periodic review.
- Tracked in the [Organization Name] Exception Register maintained by IT Risk & Compliance.

### 11.2 Exception Request Process

```
Developer / Team identifies need for exception
          │
          ▼
Complete Exception Request Form ([Form Reference])
including: rationale, affected system, impacted clause,
risk assessment, proposed compensating controls
          │
          ▼
Security Champion reviews and provides initial assessment
          │
          ▼
Head of Application Development endorses (or rejects)
          │
          ▼
Information Security Team conducts risk review
          │
          ▼
IT Risk & Compliance records in Exception Register
          │
          ▼
Final approval based on risk rating:
   Low / Medium Risk → Head of Application Development + InfoSec
   High Risk         → CIO / CTO approval required
   Critical Risk     → Risk Committee approval required
          │
          ▼
Exception logged, time-bounded, added to next review cycle
```

### 11.3 Exception Register Fields

Exceptions shall be recorded with the following minimum information:

| Field | Description |
|---|---|
| Exception ID | Unique identifier (e.g., EX-SCS-2025-001) |
| Date Raised | Date the exception request was submitted |
| Requestor | Name and team of the requesting developer/team |
| Affected System | System or application name |
| Standard Clause | The specific clause of this document being excepted |
| Business Justification | Explanation of why compliance is not feasible |
| Risk Assessment | Risk rating (Critical / High / Medium / Low) and rationale |
| Compensating Controls | Controls in place to mitigate the residual risk |
| Approval Authority | Name and role of approver |
| Approval Date | Date exception was approved |
| Expiry Date | Date by which the exception must be resolved or renewed |
| Review Status | Current status (Active / Expired / Resolved) |

### 11.4 Escalation Process

*Define escalation paths for unresolved vulnerabilities and situations where compliance cannot be achieved.*

| Scenario | Escalation Path | Timeframe |
|---|---|---|
| Critical vulnerability cannot be remediated within SLA | Developer → Head of Application Development → CIO/CTO | Immediate notification; risk acceptance within 24 hours |
| Exception request denied but team believes exception is necessary | Head of Application Development → CIO/CTO → Risk Committee | Within 5 business days |
| Systemic non-compliance identified across multiple projects | Information Security → Head of Application Development → CIO/CTO | Report within 10 business days; remediation plan within 30 days |
| Security incident linked to a secure coding failure | Incident Response process ([IR Policy Reference]); post-incident review of this standard | Per IR Policy timelines |

---

## 12. Compliance and Enforcement

*Define how compliance with this standard is measured, monitored, and enforced.*

### 12.1 Compliance Monitoring Activities

| Activity | Frequency | Responsible | Output |
|---|---|---|---|
| SAST scan results review | Per CI/CD pipeline run | Security Champion, InfoSec | Pipeline status; defect tickets |
| SCA vulnerability report review | Weekly | Security Champion | Patching backlog update |
| DAST scan execution and review | Per release / monthly | InfoSec, QA | DAST findings report |
| Penetration testing | Annually for all significant applications; at each major release | InfoSec (external vendor) | Pentest report; remediation plan |
| Developer security training completion | Annually | Head of Application Development | Training completion records |
| Exception register review | Quarterly | IT Risk & Compliance | Exception status report |
| Compliance dashboard review | Monthly | Head of Application Development | Compliance metrics report |
| Annual standards review | Annually | Head of Application Development + InfoSec | Revised document version |

### 12.2 Vulnerability Remediation SLAs

All security vulnerabilities identified through any mechanism (SAST, DAST, SCA, code review, penetration testing, bug bounty, or incident) shall be remediated within the following timeframes from the date of identification:

| Severity | CVSS Score | Remediation SLA | Re-test SLA |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | 72 hours (emergency patch) | 24 hours post-fix |
| **High** | 7.0 – 8.9 | 7 calendar days | 5 business days post-fix |
| **Medium** | 4.0 – 6.9 | 30 calendar days | 14 calendar days post-fix |
| **Low** | 0.1 – 3.9 | 90 calendar days or next planned release | Next scheduled scan cycle |
| **Informational** | N/A | Next planned release at team discretion | N/A |

Failures to meet remediation SLAs shall be escalated per Section 11.4 and reported to the IT Risk Committee.

### 12.3 Non-Compliance Consequences

Non-compliance with this standard may result in:

- Blocking of deployment to production environments pending remediation.
- Mandatory security remediation training for the non-compliant team.
- Escalation to the IT Risk Committee and relevant line management.
- Formal documentation of non-compliance in the IT Risk Register.
- In cases of repeated or wilful non-compliance: formal HR disciplinary process per [Organization Name]'s Code of Conduct and relevant employment policies.

Refer also to the [Organization Name] Technology Acceptable Use Policy ([Reference]) for the broader framework governing non-compliance with technology policies.

### 12.4 Metrics and Reporting

The following key metrics shall be tracked and reported to the Technology Risk Committee on a [Monthly / Quarterly] basis:

| Metric | Description | Target |
|---|---|---|
| Mean Time to Remediate (MTTR) — Critical | Average days to close Critical vulnerabilities | ≤ 3 days |
| Mean Time to Remediate (MTTR) — High | Average days to close High vulnerabilities | ≤ 7 days |
| SAST Finding Trend | Month-over-month change in open SAST findings | Downward trend |
| Open Exceptions | Number of active exceptions to this standard | ≤ [N] active at any time |
| Developer Training Compliance | % of in-scope developers with current security training | 100% |
| SCA Critical CVE Backlog | Number of open Critical CVEs in dependencies | 0 at release gate |
| Pentest Findings Closed on Time | % of pentest findings remediated within SLA | ≥ 95% |

---

## 13. Review and Approval History

### 13.1 Version History

*Record all versions of this document, including the nature of changes made.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name], [Title] | [Reviewer Name] | Initial draft for review |
| 0.2 | [Date] | [Author Name], [Title] | [Reviewer Name] | Incorporated feedback from Information Security review |
| 0.3 | [Date] | [Author Name], [Title] | [Reviewer Name] | Incorporated feedback from IT Risk & Compliance review |
| 1.0 | [Date] | [Author Name], [Title] | [Approver Name] | Approved and published |

### 13.2 Approval Sign-Off

*Obtain formal approval signatures prior to publishing this document.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Document Owner:** Head of Application Development | [Name] | ___________________________ | [Date] |
| **Reviewer:** Chief Information Security Officer / Head of Information Security | [Name] | ___________________________ | [Date] |
| **Reviewer:** IT Risk & Compliance Manager | [Name] | ___________________________ | [Date] |
| **Approver:** Chief Information Officer / Chief Technology Officer | [Name] | ___________________________ | [Date] |

### 13.3 Scheduled Review

This document shall be reviewed:

- **Annually** on or before: [Next Review Date]
- **Upon** any significant change to [Organization Name]'s development technology stack, SDLC process, or regulatory requirements.
- **Following** any material security incident linked to application-layer vulnerabilities.
- **Upon** publication of a new version of the OWASP Top 10 or OWASP ASVS that materially changes applicable requirements.

---

## 14. References

*List all regulatory, standards, and internal policy documents referenced by this standard.*

### 14.1 Regulatory and Statutory References

| Document | Issuing Body | Relevant Clause(s) |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.6 (Secure Coding); Clause 10.5 (System Development); Clause 10.1 (Technology Risk Management) |
| Personal Data Protection Act 2010 | Parliament of Malaysia | Part III (Security of Personal Data); Section 9 |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia (BNM) | [Relevant Section] |
| [Other BNM Policy Document] | Bank Negara Malaysia (BNM) | [Clause Reference] |

### 14.2 Industry Standards and Frameworks

| Standard / Framework | Version | Reference |
|---|---|---|
| OWASP Top 10 Web Application Security Risks | 2021 (current) | https://owasp.org/Top10/ |
| OWASP Application Security Verification Standard (ASVS) | 4.0.3 | https://owasp.org/www-project-application-security-verification-standard/ |
| OWASP API Security Top 10 | 2023 (current) | https://owasp.org/www-project-api-security/ |
| OWASP Mobile Application Security Verification Standard (MASVS) | 2.0 | https://mas.owasp.org/MASVS/ |
| OWASP Secure Coding Practices — Quick Reference Guide | Latest | https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/ |
| NIST Secure Software Development Framework (SSDF) | SP 800-218 | https://csrc.nist.gov/publications/detail/sp/800-218/final |
| NIST Cybersecurity Framework | 2.0 | https://www.nist.gov/cyberframework |
| SANS CWE Top 25 Most Dangerous Software Weaknesses | Latest | https://cwe.mitre.org/top25/ |
| ISO/IEC 27001:2022 | 2022 | Annex A.8 (Technological Controls) |
| ISO/IEC 27034 (Application Security) | Latest | Parts 1–7 |

### 14.3 Internal Policy References

| Document Title | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Doc ID] | [Owner] |
| Technology Risk Management Framework | [Doc ID] | [Owner] |
| Software Development Lifecycle (SDLC) Policy | [Doc ID] | [Owner] |
| Change Management Policy | [Doc ID] | [Owner] |
| Vulnerability Management Policy | [Doc ID] | [Owner] |
| Incident Response Policy | [Doc ID] | [Owner] |
| Key Management Standard | [Doc ID] | [Owner] |
| Password Policy | [Doc ID] | [Owner] |
| Privileged Access Management Policy | [Doc ID] | [Owner] |
| Log Management Policy | [Doc ID] | [Owner] |
| Vendor Risk Management Policy | [Doc ID] | [Owner] |
| Technology Acceptable Use Policy | [Doc ID] | [Owner] |

---

## 15. Appendices

### Appendix A: Prohibited Coding Patterns Quick Reference

*This appendix provides a condensed reference card for developers, summarizing the most critical prohibited patterns and their secure alternatives. It is intended as a daily reference, not as a substitute for the full standard.*

| # | Prohibited Pattern | Risk | Secure Alternative |
|---|---|---|---|
| 1 | Dynamic SQL with string concatenation | SQL Injection | Parameterized queries / prepared statements |
| 2 | Rendering unencoded user input in HTML | XSS | Context-appropriate output encoding |
| 3 | Storing passwords with MD5 or SHA-1 | Credential theft | bcrypt / Argon2id with appropriate work factor |
| 4 | Hardcoded credentials in source code | Credential exposure | Secrets management system (runtime retrieval) |
| 5 | Using HTTP for any data in transit | Man-in-the-middle | TLS 1.2+ for all connections |
| 6 | Exposing stack traces in error responses | Information disclosure | Generic user error message + server-side logging |
| 7 | Trusting client-supplied role/permission claims | Privilege escalation | Server-side authorisation check on every request |
| 8 | Deserializing untrusted data without type constraints | Remote code execution | Strict type-constrained deserialization |
| 9 | Disabled certificate validation in HTTP clients | Man-in-the-middle | Always validate server certificates; use certificate pinning where required |
| 10 | Using `eval()` or equivalent with user input | Code injection | Eliminate use of dynamic code evaluation |
| 11 | Accepting file uploads without content-type validation | Malicious file upload | Validate by magic bytes; store outside web root |
| 12 | Using `Math.random()` for security tokens | Weak randomness | CSPRNG (e.g., `SecureRandom`, `os.urandom`, `crypto.getRandomValues`) |
| 13 | XML parsing with external entities enabled | XXE | Disable DTD/external entity processing |
| 14 | Directory traversal via unsanitized file paths | Unauthorized file access | Canonicalize and validate against allowed base path |
| 15 | Logging sensitive data (passwords, PANs, tokens) | Data exposure | Mask or exclude sensitive fields from logs |

---

### Appendix B: Mandatory Security Training Requirements

*This appendix defines the minimum security training requirements for all development staff.*

| Training Module | Target Audience | Frequency | Minimum Duration | Approved Providers |
|---|---|---|---|---|
| Secure Coding Fundamentals (OWASP Top 10) | All Developers, QA Engineers | Annual | 4 hours | [Approved Provider(s)] |
| Threat Modelling Fundamentals | Developers, Architects, Security Champions | Annual | 2 hours | [Approved Provider(s)] |
| Advanced Secure Coding (ASVS Level 2) | Security Champions, Senior Developers | Annual | 8 hours | [Approved Provider(s)] |
| Mobile Application Security (MASVS) | Mobile Developers | Annual | 4 hours | [Approved Provider(s)] |
| API Security Fundamentals | API Developers | Annual | 2 hours | [Approved Provider(s)] |
| Security Awareness (General) | All Staff | Annual | 1 hour | [Approved Provider(s)] |

Training completion records shall be maintained by [HR / Learning Management System] and reported to the Head of Application Development quarterly. Developers who have not completed mandatory training within the required timeframe shall have production deployment privileges suspended until training is complete.

---

### Appendix C: Security Testing Toolchain Register

*This appendix documents the approved security testing tools in use at [Organization Name]. Use of unapproved tools for security testing against [Organization Name] systems requires prior written authorization from the Information Security team.*

| Tool Category | Approved Tool(s) | Purpose | Licensing | Owner |
|---|---|---|---|---|
| SAST | [Tool Name, e.g., Semgrep / Checkmarx / SonarQube] | Static code analysis | [License Type] | Information Security |
| DAST | [Tool Name, e.g., OWASP ZAP / Burp Suite Enterprise] | Dynamic application scanning | [License Type] | Information Security |
| SCA | [Tool Name, e.g., OWASP Dependency-Check / Snyk] | Dependency vulnerability scanning | [License Type] | Information Security |
| Secrets Scanning | [Tool Name, e.g., GitGuardian / detect-secrets] | Credential detection in code | [License Type] | Information Security |
| Container Scanning | [Tool Name, e.g., Trivy / Grype] | Container image vulnerability scanning | [License Type] | DevOps / InfoSec |
| IaC Scanning | [Tool Name, e.g., Checkov / tfsec] | Infrastructure-as-Code security scanning | [License Type] | DevOps / InfoSec |
| Penetration Testing | [External Vendor / Internal tooling] | Manual adversarial testing | [License Type] | Information Security |
| SBOM Generation | [Tool Name, e.g., Syft / CycloneDX tools] | Software Bill of Materials generation | [License Type] | Information Security |

---

### Appendix D: Exception Request Form Template

*Complete this form when requesting a formal exception to any clause of this standard. Submit to your Security Champion for initial review.*

**Exception Request — Secure Coding Standards**

| Field | Response |
|---|---|
| Exception ID | *(Assigned by IT Risk & Compliance)* |
| Date Submitted | [DD/MM/YYYY] |
| Requestor Name | [Name] |
| Requestor Title | [Title] |
| Business Unit / Team | [Business Unit] |
| Affected Application / System | [System Name] |
| Environment | ☐ Development ☐ Staging ☐ Production |
| Standard Clause(s) Affected | [e.g., Section 5.4, CR-4] |
| Description of Non-Compliance | *[Describe what requirement cannot be met and why]* |
| Business Justification | *[Explain the business or technical reason compliance is not feasible]* |
| Risk Assessment | Risk Rating: ☐ Critical ☐ High ☐ Medium ☐ Low |
| Risk Description | *[Describe the risk created by this exception]* |
| Proposed Compensating Controls | *[Describe controls that mitigate the residual risk]* |
| Requested Exception Period | From: [Date] To: [Date] |
| Resolution Plan | *[Describe how full compliance will be achieved by the expiry date]* |

**Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Requestor | | | |
| Security Champion | | | |
| Head of Application Development | | | |
| Information Security Team | | | |
| IT Risk & Compliance | | | |
| *(If High/Critical)* CIO / CTO | | | |

---

### Appendix E: Glossary of Common Vulnerability Types

*A brief reference glossary of vulnerability types referenced throughout this standard, for use by developers who may be less familiar with the terminology.*

| Vulnerability | Description | OWASP / CWE Reference |
|---|---|---|
| SQL Injection | Insertion of malicious SQL code through unsanitized input to manipulate database queries. | OWASP A03:2021; CWE-89 |
| Cross-Site Scripting (XSS) | Injection of malicious scripts into web pages viewed by other users. | OWASP A03:2021; CWE-79 |
| Broken Access Control | Failure to enforce restrictions on authenticated users, allowing unauthorized access to resources. | OWASP A01:2021; CWE-284 |
| Cryptographic Failures | Use of weak or deprecated cryptographic algorithms, or misconfiguration of cryptographic controls. | OWASP A02:2021; CWE-327 |
| Insecure Deserialization | Deserializing attacker-controlled data, enabling remote code execution or object injection. | OWASP A08:2021; CWE-502 |
| XML External Entity (XXE) | Exploitation of XML processors that parse external entity references in XML input. | OWASP A05:2021; CWE-611 |
| Server-Side Request Forgery (SSRF) | Tricking a server into making requests to internal resources on behalf of an attacker. | OWASP A10:2021; CWE-918 |
| Insecure Direct Object Reference (IDOR) | Direct reference to internal objects (e.g., database keys) without proper authorization check. | OWASP A01:2021; CWE-639 |
| Cross-Site Request Forgery (CSRF) | Tricking an authenticated user's browser into making unwanted state-changing requests. | CWE-352 |
| Path Traversal | Using `../` sequences in file path inputs to access files outside the intended directory. | CWE-22 |
| Command Injection | Embedding operating system commands in user-supplied input that is passed to a system shell. | CWE-78 |
| Open Redirect | Using unvalidated user-supplied URLs in redirect responses to send users to malicious sites. | CWE-601 |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It may not be reproduced, distributed, or disclosed outside [Organization Name] without the prior written approval of the document owner. Printed copies are uncontrolled. Refer to [Document Repository Location] for the current approved version.