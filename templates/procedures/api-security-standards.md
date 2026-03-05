# API Security Standards

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to any party outside [Organization Name] without prior written authorization from the document owner. This document is subject to annual review or upon significant change to technology infrastructure, regulatory requirements, or organizational structure.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Policy Statements and Requirements](#4-policy-statements-and-requirements)
   - 4.1 [API Governance and Inventory Management](#41-api-governance-and-inventory-management)
   - 4.2 [API Authentication and Authorisation](#42-api-authentication-and-authorisation)
   - 4.3 [Transport Security](#43-transport-security)
   - 4.4 [Rate Limiting and Throttling](#44-rate-limiting-and-throttling)
   - 4.5 [Input Validation and Output Encoding](#45-input-validation-and-output-encoding)
   - 4.6 [API Logging and Monitoring](#46-api-logging-and-monitoring)
   - 4.7 [Third-Party and Open Banking API Controls](#47-third-party-and-open-banking-api-controls)
   - 4.8 [API Vulnerability Management](#48-api-vulnerability-management)
   - 4.9 [API Key and Secret Management](#49-api-key-and-secret-management)
   - 4.10 [Secure API Development Lifecycle](#410-secure-api-development-lifecycle)
5. [Exceptions and Escalation Process](#5-exceptions-and-escalation-process)
6. [Compliance and Enforcement](#6-compliance-and-enforcement)
7. [Review and Approval History](#7-review-and-approval-history)
8. [References](#8-references)
9. [Appendices](#9-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*State the primary objective of this document and the security outcomes it is intended to achieve for the organisation.*

This document establishes the **API Security Standards** for [Organization Name] to ensure that all Application Programming Interfaces (APIs) — whether internally developed, third-party integrated, or externally exposed — are designed, implemented, operated, and retired in a secure manner consistent with regulatory obligations and industry best practices.

These standards are issued in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 12.3**, which mandates that financial institutions implement adequate controls to manage the security risks associated with internet-facing and internal technology systems, including APIs.

The objectives of these standards are to:

- Protect the confidentiality, integrity, and availability of data transmitted through APIs.
- Prevent unauthorised access, data leakage, injection attacks, and abuse of API endpoints.
- Ensure compliance with BNM RMiT, the Personal Data Protection Act 2010 (PDPA), and relevant NACSA cybersecurity frameworks.
- Establish clear accountability for API security across all business units and technology functions.
- Provide a consistent, repeatable framework for secure API design and operation throughout the API lifecycle.

### 1.2 Scope

*Define the boundaries of this document — what systems, teams, data types, and API categories are covered.*

These standards apply to:

**In-scope entities:**

- All APIs owned, operated, or consumed by [Organization Name], including but not limited to:
  - Internal APIs (service-to-service communication within the organisation's network perimeter)
  - External/Public APIs (exposed to third parties, customers, or the public internet)
  - Partner APIs (consumed from or exposed to regulated third-party financial service providers)
  - Open Finance / Open Banking APIs (where applicable under BNM Open Finance frameworks)
  - Mobile application backend APIs
  - Cloud-hosted APIs and microservices

**In-scope personnel:**

- All employees, contractors, vendors, and third parties who design, develop, test, deploy, operate, or consume APIs on behalf of [Organization Name].

**In-scope data:**

- All data classified as Confidential, Restricted, or above under [Organization Name]'s Data Classification Policy, including but not limited to:
  - Customer personal data (as defined under PDPA 2010)
  - Financial transaction data
  - Authentication credentials and tokens
  - Regulatory reporting data

**Out of scope:**

- APIs deployed exclusively in isolated development or sandbox environments with no connection to production systems or real customer data, provided such environments are governed under [Organization Name]'s Development Environment Security Policy.

### 1.3 Regulatory Basis

*Reference the specific regulatory instruments that mandate or inform this document.*

This document is issued to give effect to the following regulatory requirements:

| Regulatory Instrument | Relevant Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 12.3 | Security controls for internet-facing systems and APIs |
| BNM RMiT | Clause 10.1 – 10.5 | Identity and access management requirements |
| BNM RMiT | Clause 11.1 – 11.4 | Cryptographic controls and secure communications |
| Personal Data Protection Act 2010 (PDPA) | Section 9 – Security Principle | Protection of personal data during processing and transmission |
| NACSA Cybersecurity Framework | Domain 3: Protect | Technical controls for protecting systems and data |
| BNM Technology Risk Management Guidelines | [Section Reference] | [Applicable requirement] |

---

## 2. Definitions and Abbreviations

*Provide clear definitions of technical and regulatory terms used throughout this document to ensure consistent interpretation by all stakeholders.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **API (Application Programming Interface)** | A set of protocols, routines, and tools that allow software applications to communicate with each other by defining the methods and data formats for requests and responses. |
| **API Gateway** | A server-side component that acts as an entry point for API requests, providing capabilities such as routing, authentication, rate limiting, logging, and protocol translation. |
| **API Key** | A unique alphanumeric identifier issued to an API consumer used to authenticate API requests and track usage. |
| **Authentication** | The process of verifying the identity of a user, application, or system attempting to access an API. |
| **Authorisation** | The process of determining what resources or operations an authenticated identity is permitted to access or perform. |
| **Bearer Token** | A security token that grants the bearer access to protected resources, typically issued via OAuth 2.0 flows. |
| **Content Security Policy (CSP)** | An HTTP response header mechanism that restricts the sources from which content may be loaded, reducing attack surface. |
| **CRUD** | Create, Read, Update, Delete — the four basic operations in persistent storage, often mapped to HTTP methods in REST APIs. |
| **Denial of Service (DoS)** | An attack intended to make an API or service unavailable by overwhelming it with illegitimate requests. |
| **GraphQL** | A query language and runtime for APIs that allows clients to request exactly the data they need. |
| **IAM** | Identity and Access Management — policies, processes, and technology for managing digital identities and controlling access. |
| **Input Validation** | The process of ensuring that data submitted to an API conforms to expected format, type, length, and content constraints before processing. |
| **JSON** | JavaScript Object Notation — a lightweight data-interchange format widely used in REST APIs. |
| **JWT (JSON Web Token)** | A compact, URL-safe token format used to securely transmit information between parties as a JSON object, typically used for API authentication. |
| **mTLS (Mutual TLS)** | A form of TLS where both the client and server authenticate each other using certificates. |
| **OAuth 2.0** | An open authorisation framework that enables third-party applications to obtain limited access to resources on behalf of a resource owner. |
| **OWASP API Security Top 10** | A list published by the Open Web Application Security Project (OWASP) identifying the most critical API security risks. |
| **Rate Limiting** | A control mechanism that restricts the number of API requests a client can make within a defined time window. |
| **REST (Representational State Transfer)** | An architectural style for designing networked applications using standard HTTP methods. |
| **SOAP** | Simple Object Access Protocol — a messaging protocol using XML for exchanging structured information via APIs. |
| **TLS (Transport Layer Security)** | A cryptographic protocol that provides secure communication over a network. |
| **Throttling** | The practice of controlling the rate at which requests are processed, similar to rate limiting but applied at the processing layer. |
| **Zero Trust** | A security model based on the principle of "never trust, always verify," requiring strict identity verification for every entity regardless of location. |

### 2.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| API | Application Programming Interface |
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CSRF | Cross-Site Request Forgery |
| CVE | Common Vulnerabilities and Exposures |
| DLP | Data Loss Prevention |
| IAM | Identity and Access Management |
| ISMS | Information Security Management System |
| JSON | JavaScript Object Notation |
| JWT | JSON Web Token |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| OWASP | Open Web Application Security Project |
| PDPA | Personal Data Protection Act |
| PKI | Public Key Infrastructure |
| RBAC | Role-Based Access Control |
| RMiT | Risk Management in Technology |
| SDLC | Software Development Lifecycle |
| SIEM | Security Information and Event Management |
| SOC | Security Operations Centre |
| SQL | Structured Query Language |
| SSL | Secure Sockets Layer |
| TLS | Transport Layer Security |
| WAF | Web Application Firewall |
| XSS | Cross-Site Scripting |
| XXE | XML External Entity |

---

## 3. Roles and Responsibilities

*Define the accountabilities and responsibilities of key stakeholders involved in the governance, implementation, and enforcement of API security standards.*

### 3.1 RACI Matrix

*The RACI model defines: **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

| Activity | IAM Manager | CISO | API / Development Team | Security Architecture | SOC / Operations | Risk & Compliance | Business Owner | Third-Party Vendor |
|---|---|---|---|---|---|---|---|---|
| Maintain and update API Security Standards | A/R | A | C | C | I | C | I | I |
| Approve exceptions to API security standards | C | A | R | C | I | C | I | I |
| Define API authentication and authorisation controls | A/R | C | R | R | I | I | I | I |
| Enforce rate limiting and throttling policies | A/R | I | R | C | R | I | I | I |
| Conduct API security assessments and penetration tests | C | A | C | R | C | I | I | I |
| Maintain API inventory and register | A/R | I | R | C | I | C | I | I |
| Approve new external/partner API onboarding | A | A | R | R | I | C | R | C |
| Monitor API traffic for anomalies and threats | C | A | I | C | R | I | I | I |
| Review and remediate API vulnerabilities | C | A | R | R | R | I | I | C |
| Manage API keys and credential lifecycle | A/R | C | R | C | I | I | I | I |
| Conduct API security training for developers | A/R | C | R | C | I | I | I | I |
| Escalate and report API security incidents | I | A | R | C | R | C | I | I |
| Perform annual review of this document | A/R | A | C | C | I | C | I | I |
| Enforce contractual API security requirements on vendors | C | C | I | I | I | A/R | I | R |

### 3.2 Role Descriptions

*Briefly describe the key responsibilities of each role as they relate to API security.*

**IAM Manager**
- Primary document owner responsible for maintaining, updating, and enforcing these API Security Standards.
- Oversees the design and operation of API authentication and authorisation frameworks across the organisation.
- Manages the API credential lifecycle, including issuance, rotation, and revocation of API keys and tokens.
- Chairs the API Security Working Group (where applicable).

**Chief Information Security Officer (CISO)**
- Accountable for the overall information security posture of [Organization Name], including API security.
- Approves material changes to API security standards and exception requests that exceed defined risk thresholds.
- Reports API security risks and compliance status to the Board Risk Committee and relevant management forums.

**API / Development Teams**
- Responsible for implementing API security controls as defined in these standards during development and operations.
- Must comply with secure coding guidelines and integrate security testing into the API development lifecycle.
- Required to register all APIs in the central API inventory prior to deployment.

**Security Architecture**
- Defines technical security architecture patterns and reference implementations for API security.
- Reviews API designs for security compliance prior to production deployment.
- Advises development teams on secure API design, cryptographic controls, and integration patterns.

**Security Operations Centre (SOC) / Operations**
- Monitors API traffic in real time using SIEM and API gateway telemetry for anomalies and security events.
- Responds to API-related security incidents in accordance with the Incident Response Plan.
- Manages and tunes rate limiting, WAF rules, and API gateway security configurations in production.

**Risk and Compliance**
- Provides oversight of compliance with BNM RMiT, PDPA, and other applicable regulatory requirements.
- Facilitates periodic compliance assessments and regulatory reporting related to API security.
- Maintains the risk register entries associated with API security risks.

**Business Owners**
- Accountable for the business risk associated with APIs under their purview.
- Must approve and justify API exception requests within their domain.
- Ensure third-party vendors under their management comply with applicable API security requirements.

---

## 4. Policy Statements and Requirements

*This section defines the mandatory technical and procedural controls that apply to all in-scope APIs. Compliance with each requirement is mandatory unless a formal exception has been approved in accordance with Section 5.*

### 4.1 API Governance and Inventory Management

*Describe the organisation's requirements for maintaining visibility and control over all APIs in operation.*

#### 4.1.1 Policy Statement

[Organization Name] shall maintain a comprehensive, centralised inventory of all APIs, ensuring that no API is operated in a production environment without being formally registered, reviewed, and approved.

#### 4.1.2 Requirements

**API Registration**

- All APIs — internal, external, and partner-facing — **must** be registered in the organisation's API Inventory prior to production deployment.
- Registration must be completed by the responsible development team and validated by the IAM Manager.
- APIs discovered in production that are not registered (i.e., "shadow APIs") must be reported immediately to the SOC and IAM Manager and are subject to immediate review or decommissioning.

**API Inventory Minimum Data Elements**

The API inventory must capture, at minimum, the following attributes for each registered API:

| Field | Description | Required |
|---|---|---|
| API Identifier | Unique internal identifier for the API | Mandatory |
| API Name | Human-readable name | Mandatory |
| API Version | Current production version | Mandatory |
| API Type | REST / SOAP / GraphQL / gRPC / other | Mandatory |
| API Owner | Business and technical owner | Mandatory |
| Classification | Internal / External / Partner / Open Finance | Mandatory |
| Data Sensitivity | Classification of data handled (per Data Classification Policy) | Mandatory |
| Authentication Mechanism | OAuth 2.0 / API Key / mTLS / other | Mandatory |
| Exposed Endpoints | List of endpoint URLs | Mandatory |
| Deployment Environment | Production / UAT / Development | Mandatory |
| Third-Party Consumers | Names of authorised external consumers | If applicable |
| Last Security Assessment Date | Date of most recent security assessment | Mandatory |
| Deprecation / Retirement Date | Planned end-of-life date | If applicable |
| Regulatory Relevance | Applicable regulatory requirements | Mandatory |

**API Lifecycle Governance**

- APIs must follow a defined lifecycle: Design → Development → Testing → Approval → Production → Maintenance → Deprecation → Retirement.
- Deprecated APIs must have a documented end-of-life plan and consumer migration timeline.
- Retired APIs must have all credentials revoked and endpoints disabled within **[X] business days** of retirement.

---

### 4.2 API Authentication and Authorisation

*Specify the required mechanisms for verifying the identity of API consumers and enforcing access controls on API resources.*

#### 4.2.1 Policy Statement

All APIs exposed by [Organization Name] must implement strong authentication and least-privilege authorisation controls to prevent unauthorised access to data and functions.

#### 4.2.2 Authentication Requirements

**Standard Authentication Mechanisms**

| API Type | Minimum Required Authentication | Additional Controls |
|---|---|---|
| External / Customer-facing APIs | OAuth 2.0 with PKCE | MFA for high-risk operations |
| Partner / Third-Party APIs | OAuth 2.0 Client Credentials or mTLS | Certificate pinning recommended |
| Internal Service-to-Service APIs | OAuth 2.0 Client Credentials or mTLS | Network segmentation required |
| Open Finance / Open Banking APIs | OAuth 2.0 with FAPI profile | As mandated by BNM Open Finance framework |
| Administrative / Management APIs | OAuth 2.0 + MFA | Restricted to internal network |
| Legacy systems (exception only) | API Key (HTTPS only) | Requires formal exception approval; compensating controls mandatory |

**OAuth 2.0 Implementation Requirements**

- All OAuth 2.0 implementations must use **TLS 1.2 or higher** for all communication.
- Authorisation codes must expire within **10 minutes** of issuance.
- Access tokens must have a maximum lifetime of **[60 minutes]** for external APIs and **[24 hours]** for internal APIs.
- Refresh tokens must be rotated on each use (refresh token rotation).
- The `state` parameter must be used in all authorisation code flows to prevent CSRF attacks.
- Redirect URIs must be pre-registered and strictly validated; wildcard redirect URIs are **prohibited**.

**JWT Requirements**

- JWTs used for API authentication must:
  - Be signed using RS256 or ES256 (symmetric algorithms such as HS256 are **prohibited** for externally issued tokens).
  - Include the following standard claims: `iss`, `sub`, `aud`, `exp`, `iat`, `jti`.
  - Have a `jti` (JWT ID) claim to enable token revocation and prevent replay attacks.
  - Be validated on every request, including signature, expiry, audience, and issuer.
- JWTs must **not** contain sensitive data in the payload unless the JWT is encrypted (JWE).

**Prohibited Authentication Practices**

The following authentication practices are **strictly prohibited**:

- Transmitting credentials (API keys, passwords, tokens) in URL query parameters.
- Use of HTTP Basic Authentication over unencrypted connections.
- Hard-coding API credentials in source code, configuration files, or container images.
- Sharing API credentials across multiple consumers or environments.
- Use of self-signed certificates for production external-facing APIs (unless formally approved).

#### 4.2.3 Authorisation Requirements

- All APIs must implement **Role-Based Access Control (RBAC)** or **Attribute-Based Access Control (ABAC)** as appropriate to enforce least-privilege access.
- Authorisation decisions must be enforced **server-side**; client-side authorisation checks are not sufficient and must not be relied upon.
- Each API endpoint must define and enforce the minimum scope required for access.
- **Object-level authorisation** must be enforced for all resource endpoints: consumers must only be permitted to access objects they are explicitly authorised to access. Failure to enforce object-level authorisation (OWASP API1) is a **critical** finding.
- **Function-level authorisation** must be enforced: consumers must not be able to access endpoints or HTTP methods (e.g., DELETE, PUT) that exceed their assigned privilege level.
- Authorisation controls must be reviewed as part of every API change that modifies data access or user roles.

---

### 4.3 Transport Security

*Define the encryption and secure communication requirements for all API traffic.*

#### 4.3.1 Policy Statement

All API communications must be protected in transit using industry-standard cryptographic protocols to ensure the confidentiality and integrity of data.

#### 4.3.2 Requirements

**TLS Requirements**

| Requirement | Standard |
|---|---|
| Minimum TLS version | TLS 1.2 (TLS 1.3 preferred) |
| Prohibited protocols | SSL 2.0, SSL 3.0, TLS 1.0, TLS 1.1 |
| Certificate authority | Publicly trusted CA for external APIs; internal PKI for internal APIs |
| Certificate key strength | RSA 2048-bit minimum; ECC 256-bit recommended |
| Certificate validity | Maximum 1 year for externally facing; [X] years for internal |
| HTTP Strict Transport Security (HSTS) | Mandatory for all external APIs; `max-age` minimum 1 year |
| Certificate expiry monitoring | Automated alerts at 60, 30, and 7 days prior to expiry |

**Cipher Suite Requirements**

- Only strong cipher suites supporting **Forward Secrecy (FS)** must be enabled.
- The following cipher suite categories are **prohibited**:
  - NULL cipher suites
  - Export-grade cipher suites
  - Anonymous key exchange cipher suites
  - RC4, DES, 3DES-based cipher suites
- Cipher suite configuration must be reviewed annually against current NIST and BNM guidance.

**Additional Transport Controls**

- All APIs must redirect HTTP requests to HTTPS; API gateways must not accept unencrypted API traffic.
- For high-sensitivity APIs (Confidential or Restricted data), **mTLS** is the preferred transport security mechanism.
- Certificate pinning should be implemented for mobile application-to-API communications where technically feasible.

---

### 4.4 Rate Limiting and Throttling

*Specify the controls required to protect APIs from abuse, denial-of-service attacks, and excessive resource consumption.*

#### 4.4.1 Policy Statement

All production APIs must implement rate limiting and throttling controls to protect against abusive usage patterns, denial-of-service attacks, and resource exhaustion.

#### 4.4.2 Requirements

**Rate Limiting Standards**

| API Category | Default Rate Limit | Burst Allowance | Window |
|---|---|---|---|
| External / Public APIs (unauthenticated) | [X] requests | [X] requests | Per minute |
| External / Public APIs (authenticated) | [X] requests | [X] requests | Per minute |
| Partner / Third-Party APIs | [X] requests | [X] requests | Per minute |
| Internal Service APIs | [X] requests | [X] requests | Per minute |
| Administrative APIs | [X] requests | [X] requests | Per minute |
| High-volume batch operations | [X] requests | N/A | Per hour |

*Note: Rate limit values marked [X] must be defined by the IAM Manager in consultation with the relevant business and technology owners, based on expected usage patterns and infrastructure capacity assessments. Rate limits must be documented in the API inventory.*

**Rate Limiting Implementation Requirements**

- Rate limiting must be enforced at the **API gateway** layer, not solely within the application.
- Rate limits must be applied per **authenticated consumer identity** (e.g., client ID, API key, user token) and per **IP address** as a secondary control.
- When a rate limit is exceeded, the API must return an **HTTP 429 Too Many Requests** response with:
  - A `Retry-After` header indicating when the client may retry.
  - A response body with a machine-readable error code and human-readable message.
- Rate limit metrics must be exposed to monitoring systems and alert thresholds configured for anomalous spikes.
- Distributed rate limiting must be implemented for APIs deployed across multiple instances or regions.

**Throttling Requirements**

- Throttling controls must be applied to prevent individual consumers from monopolising shared infrastructure.
- Payload size limits must be enforced: request body sizes exceeding **[X] MB** must be rejected with an HTTP 413 response.
- Query complexity limits must be enforced for GraphQL APIs to prevent resource-intensive queries (e.g., deeply nested queries, large `first` parameters).
- Connection timeout and read timeout values must be configured at the API gateway layer:
  - Connection timeout: maximum **[X] seconds**
  - Read/idle timeout: maximum **[X] seconds**

**Denial-of-Service Protections**

- WAF rules must be configured to detect and block common DoS patterns including:
  - HTTP flood attacks
  - Slow HTTP attacks (Slowloris)
  - Malformed request floods
- Geo-blocking or geo-rate-limiting controls may be applied to high-risk endpoints as a risk-based control, subject to approval by the CISO.

---

### 4.5 Input Validation and Output Encoding

*Define the controls required to prevent injection attacks and ensure that all data processed by APIs conforms to expected formats.*

#### 4.5.1 Policy Statement

All APIs must implement robust input validation and output encoding controls to prevent injection attacks, data corruption, and unintended data disclosure.

#### 4.5.2 Input Validation Requirements

**General Validation Principles**

- All input received by an API — including headers, query parameters, path parameters, request bodies, and file uploads — must be validated **server-side** before processing.
- Input validation must follow a **allowlist (whitelist) approach**: only permit known-good input patterns; reject everything else.
- Validation logic must be applied at the API gateway and/or application layer; client-side validation alone is insufficient.
- Invalid input must result in an **HTTP 400 Bad Request** response with a descriptive but non-verbose error message (error messages must not reveal internal system details, stack traces, or implementation specifics).

**Data Type and Format Validation**

| Input Type | Validation Requirement |
|---|---|
| String fields | Enforce maximum length; validate against expected character set or regex pattern |
| Numeric fields | Enforce minimum/maximum value ranges; validate type (integer vs. decimal) |
| Date/time fields | Enforce ISO 8601 format; validate logical ranges |
| Email addresses | Validate against RFC 5322 format; enforce maximum length |
| URLs | Validate scheme, domain, and path structure; block internal/private IP ranges (SSRF prevention) |
| File uploads | Validate MIME type by content inspection (not extension); enforce maximum file size; scan for malware |
| JSON/XML bodies | Enforce schema validation; reject unexpected fields (strict mode); enforce maximum depth and array size |
| UUIDs / identifiers | Validate format; never expose sequential or predictable identifiers |
| Free-text fields | Strip or encode HTML entities; enforce maximum length |

**Injection Attack Prevention**

| Attack Type | Prevention Requirement |
|---|---|
| SQL Injection | Use parameterised queries / prepared statements exclusively; ORMs must use parameterised interfaces; no dynamic SQL construction from user input |
| Command Injection | Never pass user input to system commands; use safe API equivalents |
| XML Injection / XXE | Disable XML External Entity (XXE) processing in all XML parsers; use JSON where possible |
| LDAP Injection | Sanitise all input used in LDAP queries |
| XSS | HTML-encode all user-supplied content returned in API responses |
| Server-Side Request Forgery (SSRF) | Validate and restrict URLs provided in requests; block access to internal IP ranges and metadata services |
| Mass Assignment | Explicitly define accepted request fields; do not auto-bind request bodies to internal objects without allowlisting |

**GraphQL-Specific Validation**

- Query depth must be limited to a maximum of **[X]** levels.
- Query complexity scoring must be implemented and enforced.
- Introspection must be disabled on production external-facing GraphQL endpoints.
- Batching attack protections must be implemented.

#### 4.5.3 Output Encoding Requirements

- API responses must not include internal system details, stack traces, framework version information, or server technology identifiers.
- Sensitive data fields (e.g., full account numbers, passwords, PINs, full card numbers) must be **masked or tokenised** in API responses:
  - Account numbers: display last 4 digits only (e.g., `****1234`)
  - Card numbers: comply with PCI DSS masking requirements
  - Passwords: never returned in any API response
- API responses must include appropriate security headers:

| Header | Required Value |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Cache-Control` | `no-store` (for sensitive endpoints) |
| `Pragma` | `no-cache` (for sensitive endpoints) |
| `Content-Security-Policy` | Defined per API context |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `X-XSS-Protection` | `1; mode=block` |

---

### 4.6 API Logging and Monitoring

*Define the logging, monitoring, and alerting requirements to maintain visibility into API usage and detect security threats.*

#### 4.6.1 Policy Statement

[Organization Name] shall maintain comprehensive logging of all API activity and implement real-time monitoring to detect and respond to anomalous behaviour, security threats, and policy violations.

#### 4.6.2 Logging Requirements

**Mandatory Log Events**

The following events must be logged for all production APIs:

- All authentication attempts (successful and failed), including client identity, timestamp, and IP address.
- All authorisation decisions (grant and deny), including the resource accessed and the permission evaluated.
- All API requests: timestamp, HTTP method, endpoint path, consumer identity, source IP, response code, and response time.
- Rate limit and throttling events: consumer identity, endpoint, limit type, and timestamp.
- Input validation failures: sanitised input summary (must not log sensitive data verbatim), endpoint, and consumer identity.
- API key and token issuance, rotation, and revocation events.
- API configuration changes and deployments.
- All error responses (4xx and 5xx), excluding 404s from automated scanning (which should be aggregated).

**Log Content Requirements**

| Log Field | Required | Notes |
|---|---|---|
| Timestamp | Mandatory | UTC; millisecond precision |
| Log level | Mandatory | ERROR / WARN / INFO / DEBUG |
| Correlation / Trace ID | Mandatory | For end-to-end request tracing |
| Consumer Identity | Mandatory | Client ID / API Key hash / user subject (never log raw credentials) |
| Source IP Address | Mandatory | Preserve original IP through proxies (X-Forwarded-For) |
| HTTP Method | Mandatory | |
| Endpoint URL (path only) | Mandatory | Do not log query parameters containing sensitive data |
| HTTP Response Code | Mandatory | |
| Response Time (ms) | Mandatory | |
| Geolocation | Recommended | Derived from source IP |
| User Agent | Recommended | |
| Request / Response Size | Recommended | Bytes |

**Log Exclusions (Data Privacy)**

The following data categories must **never** be logged:

- Passwords, PINs, or security credentials.
- Full payment card numbers (PAN) or CVV values.
- Full authentication tokens or API keys (log hashed or truncated values only).
- Sensitive personal data fields (e.g., NRIC/passport numbers, full bank account numbers) unless explicitly required for audit and protected with additional access controls.

**Log Retention**

- API security logs must be retained for a minimum of **[X] years** in accordance with BNM RMiT requirements and [Organization Name]'s Log Retention Policy.
- Logs must be stored in a tamper-evident system; log integrity must be protected (e.g., write-once storage, cryptographic hashing).
- Log storage must be separate from the API systems being monitored to prevent tampering in the event of a compromise.

#### 4.6.3 Monitoring and Alerting Requirements

**SIEM Integration**

- All API gateway and application logs must be forwarded in real time to [Organization Name]'s SIEM platform.
- Log ingestion latency must not exceed **[X] minutes** for security-relevant events.

**Mandatory Alert Triggers**

The following conditions must generate automated alerts to the SOC:

| Alert Condition | Severity | Response SLA |
|---|---|---|
| Authentication failure rate exceeds [X]% over [X] minutes | High | [X] minutes |
| Successful authentication from a new or unusual geographic location | Medium | [X] minutes |
| Rate limit exceeded by more than [X]% above baseline | Medium | [X] minutes |
| API endpoint returning 5xx errors at elevated rate | High | [X] minutes |
| Detection of known attack signatures (SQLi, XSS, etc.) | Critical | [X] minutes |
| API key or token used after revocation | Critical | [X] minutes |
| Unusual data volume returned (potential data exfiltration) | High | [X] minutes |
| Access to administrative or management endpoints outside business hours | High | [X] minutes |
| Certificate expiry within 30 days | Medium | [X] hours |

*Note: SLA values must be defined by the SOC Manager in consultation with the CISO and aligned with [Organization Name]'s Incident Response Policy.*

---

### 4.7 Third-Party and Open Banking API Controls

*Specify the additional security requirements applicable to APIs shared with external partners and third-party service providers.*

#### 4.7.1 Policy Statement

[Organization Name] shall apply enhanced security controls to APIs exposed to or consumed from third parties, to manage the additional risk associated with external connectivity and data sharing.

#### 4.7.2 Third-Party API Onboarding Requirements

Before any API integration with a third party is activated in production, the following must be completed:

- [ ] Third-party vendor security assessment conducted and documented.
- [ ] Data Processing Agreement (DPA) executed (where personal data is shared).
- [ ] API-specific security requirements contractually agreed and embedded in the vendor agreement.
- [ ] Third-party API credentials provisioned through the approved credential management process.
- [ ] API access scope limited to the minimum required for the integration purpose.
- [ ] API traffic routing reviewed and approved by Security Architecture.
- [ ] Consumer onboarded to API gateway with appropriate rate limits and monitoring configured.
- [ ] SOC notified of new third-party API integration for monitoring baseline establishment.

#### 4.7.3 Contractual Security Requirements for Third Parties

Contracts with third-party API consumers or providers must include provisions addressing:

- Compliance with [Organization Name]'s API Security Standards (or equivalent standards acceptable to [Organization Name]).
- Prohibition on sharing API credentials with sub-processors without prior written approval.
- Obligation to report API security incidents to [Organization Name] within **[X] hours** of discovery.
- Right to audit or assess the third party's API security controls.
- Credential rotation obligations upon personnel changes or suspected compromise.
- Data residency and sovereignty requirements for data transmitted via the API.

#### 4.7.4 Open Finance / Open Banking API Controls

Where [Organization Name] operates Open Finance APIs in accordance with BNM's Open Finance framework:

- APIs must comply with the Financial-grade API (FAPI) security profile.
- Strong customer authentication (SCA) must be enforced for payment initiation and high-risk operations.
- Consumer consent management must be implemented, with granular scope controls and consent revocation capability.
- Third-party provider (TPP) registration and certificate validation must be enforced.
- Open Finance API activity must be subject to enhanced monitoring and regulatory reporting obligations.

---

### 4.8 API Vulnerability Management

*Define the requirements for identifying, assessing, and remediating security vulnerabilities in APIs.*

#### 4.8.1 Policy Statement

[Organization Name] shall implement a structured vulnerability management programme for APIs that ensures security weaknesses are identified and remediated in a timely manner.

#### 4.8.2 Security Testing Requirements

| Testing Type | Frequency | Scope | Responsible Party |
|---|---|---|---|
| Automated API security scanning (DAST) | Every deployment (CI/CD pipeline) | All API endpoints | Development Team |
| Manual API penetration testing | Annually (minimum); prior to major releases | External and high-risk internal APIs | Security Architecture / Approved Third-party |
| OWASP API Security Top 10 assessment | Annually | All production APIs | Security Architecture |
| Dependency vulnerability scanning (SCA) | Every build | API application dependencies | Development Team |
| TLS/cipher suite assessment | Annually | All externally facing APIs | Security Architecture |
| Third-party API security assessment | Upon onboarding; annually thereafter | Partner/vendor API integrations | Risk & Compliance |

**OWASP API Security Top 10 Mandatory Controls**

The following OWASP API Security Top 10 risks must be explicitly addressed in security testing:

| OWASP API Risk | Description | Control Requirement |
|---|---|---|
| API1: Broken Object Level Authorization | Insecure direct object references | Object-level authorisation enforced per Section 4.2.3 |
| API2: Broken Authentication | Weak authentication mechanisms | Authentication standards enforced per Section 4.2.2 |
| API3: Broken Object Property Level Authorization | Excessive data exposure / mass assignment | Output filtering and input allowlisting per Section 4.5 |
| API4: Unrestricted Resource Consumption | Lack of rate limiting | Rate limiting enforced per Section 4.4 |
| API5: Broken Function Level Authorization | Privilege escalation via HTTP methods | Function-level authorisation per Section 4.2.3 |
| API6: Unrestricted Access to Sensitive Business Flows | Business logic abuse | Business logic controls defined per API risk assessment |
| API7: Server-Side Request Forgery (SSRF) | Manipulating server-side requests | SSRF prevention per Section 4.5.2 |
| API8: Security Misconfiguration | Insecure default configurations | Hardening standards applied per Section 4.3 |
| API9: Improper Inventory Management | Shadow APIs, outdated documentation | API inventory maintained per Section 4.1 |
| API10: Unsafe Consumption of APIs | Trusting third-party API responses | Third-party API validation per Section 4.7 |

#### 4.8.3 Vulnerability Remediation SLAs

| Severity | CVSS Score Range | Remediation Deadline |
|---|---|---|
| Critical | 9.0 – 10.0 | Within **24 hours** of discovery; immediate escalation to CISO |
| High | 7.0 – 8.9 | Within **7 calendar days** of discovery |
| Medium | 4.0 – 6.9 | Within **30 calendar days** of discovery |
| Low | 0.1 – 3.9 | Within **90 calendar days** of discovery; or accepted as residual risk |
| Informational | N/A | Addressed in next planned release cycle |

- Vulnerabilities that cannot be remediated within the above SLAs must be subject to a formal risk acceptance process approved by the CISO.
- All identified vulnerabilities must be tracked in the organisation's vulnerability management system with status updates.

---

### 4.9 API Key and Secret Management

*Specify the requirements for securely managing API credentials, keys, and secrets throughout their lifecycle.*

#### 4.9.1 Policy Statement

All API credentials — including API keys, OAuth client secrets, certificates, and tokens — must be managed in accordance with [Organization Name]'s Cryptographic Key Management Policy and the specific requirements defined herein.

#### 4.9.2 Requirements

**Credential Storage**

- API keys and secrets must be stored in an approved **secrets management system** (e.g., [HashiCorp Vault / Azure Key Vault / AWS Secrets Manager / [Organisation's Approved Platform]]).
- API credentials must **never** be stored in:
  - Source code repositories (including private repositories)
  - Configuration files committed to version control
  - Container images or Kubernetes manifests in plaintext
  - Email, instant messaging, or collaboration platforms
  - Spreadsheets or documentation systems
- Secrets management systems must enforce access controls ensuring only authorised systems and personnel can retrieve credentials.

**Credential Rotation**

| Credential Type | Maximum Validity Period | Rotation Trigger Events |
|---|---|---|
| API Keys (external) | **[X] months** | Suspected compromise, personnel change, vendor termination |
| API Keys (internal) | **[X] months** | Suspected compromise, system decommission |
| OAuth Client Secrets | **[X] months** | Suspected compromise, application change |
| TLS Certificates | **12 months** (public) / **[X] months** (internal) | Compromise, CA policy change |
| JWT Signing Keys | **[X] months** | Suspected compromise |
| mTLS Client Certificates | **[X] months** | Compromise, personnel/system change |

- Automated credential rotation must be implemented where technically feasible.
- Emergency credential rotation (within **4 hours**) must be possible for all credential types in the event of confirmed or suspected compromise.

**Credential Issuance and Revocation**

- API credentials must only be issued following a formal request and approval process managed by the IAM team.
- All issued credentials must be recorded in the API inventory with the consumer identity, issuance date, and expiry date.
- Credentials must be immediately revoked upon:
  - Confirmed or suspected compromise.
  - Termination of the business relationship with a third-party consumer.
  - Decommissioning of the consumer system.
  - Employee or contractor departure (for individual credentials).
- Revoked credentials must be blocklisted at the API gateway and token validation layer to prevent use of revoked tokens.

---

### 4.10 Secure API Development Lifecycle

*Define the security requirements that must be integrated into the API development and release process.*

#### 4.10.1 Policy Statement

Security must be integrated throughout the API development lifecycle (API-SDLC), from design through to retirement, to ensure security controls are built in by design rather than applied retrospectively.

#### 4.10.2 Requirements

**Design Phase**

- APIs must be designed with a documented **threat model** that identifies potential attack vectors, data flows, and trust boundaries.
- API contracts (OpenAPI / Swagger specifications) must be produced and reviewed for security prior to development commencing.
- APIs handling personal data or financial data must undergo a **Privacy Impact Assessment (PIA)** prior to design approval.
- New external or partner APIs require **Security Architecture review and sign-off** prior to development.

**Development Phase**

- Developers must complete [Organization Name]'s API security training prior to working on production APIs.
- Secure coding standards (referencing OWASP API Security Top 10 and OWASP Secure Coding Practices) must be followed.
- No hardcoded credentials, secrets, or environment-specific configuration values in source code.
- Pre-commit hooks or IDE-integrated secret scanning must be implemented to prevent credential leakage into version control.
- All API code must pass automated security scanning (SAST and SCA) as a gate in the CI/CD pipeline.

**Testing Phase**

- API security testing must be completed and pass minimum acceptance criteria before production deployment.
- Test environments must not use production data (real customer data); data masking or synthetic data must be used.
- API documentation must be finalised and reviewed prior to production release.

**Production Release and Maintenance**

- APIs must not be deployed to production without completing the API Release Checklist (refer to Appendix A).
- Breaking changes to existing APIs must follow the versioning and deprecation process.
- API documentation must be kept current; outdated documentation is a compliance finding.

**Deprecation and Retirement**

- APIs scheduled for deprecation must notify registered consumers with a minimum of **[X] months** notice.
- All consumers must migrate off deprecated API versions before retirement.
- Upon retirement: credentials revoked, endpoints disabled, inventory updated, logs archived per retention policy.

---

## 5. Exceptions and Escalation Process

*Define the process by which deviations from these standards may be formally requested, assessed, approved, and monitored.*

### 5.1 Exception Principles

Exceptions to these API Security Standards are discouraged and should only be sought where:

- Strict compliance would prevent a legitimate and necessary business function.
- A compensating control can be implemented that achieves equivalent or acceptable risk reduction.
- The exception is time-limited with a defined remediation plan.

### 5.2 Exception Request Process

*Describe the end-to-end process for requesting and obtaining an approved exception to any requirement in these standards.*

**Step 1: Exception Identification**

The responsible team identifies a requirement within these standards that cannot be met and documents:

- The specific requirement from which an exception is sought (clause reference).
- The technical or business justification for the exception.
- The risk exposure created by the exception.
- The proposed compensating controls that will be implemented.
- The proposed duration of the exception.

**Step 2: Exception Submission**

The exception request is submitted to the IAM Manager using the **API Security Exception Request Form** (Appendix B).

**Step 3: Risk Assessment**

The IAM Manager, in consultation with the Security Architecture team and Risk & Compliance, will conduct a risk assessment of the exception request within **[X] business days**.

**Step 4: Approval**

| Exception Risk Level | Approval Authority | Approval Timeframe |
|---|---|---|
| Low (residual risk rated Low) | IAM Manager | [X] business days |
| Medium (residual risk rated Medium) | CISO | [X] business days |
| High (residual risk rated High) | CISO + CRO | [X] business days |
| Critical (residual risk rated Critical) | Board Risk Committee | [X] business days |

**Step 5: Exception Registration**

Approved exceptions are recorded in the **API Security Exception Register** with:

- Exception ID
- Date approved and expiry date
- Approval authority
- Compensating controls
- Review date

**Step 6: Exception Monitoring and Renewal**

- All exceptions must be reviewed at least **quarterly** to assess whether the underlying justification remains valid and compensating controls are operating effectively.
- Exception owners are responsible for seeking renewal prior to expiry; expired exceptions without renewal constitute a compliance breach.

### 5.3 Escalation Process

| Situation | Escalation Path | Timeframe |
|---|---|---|
| Exception request denied and requestor disagrees | IAM Manager → CISO | [X] business days |
| CISO decision contested | CISO → CRO | [X] business days |
| API security incident detected | Development Team / SOC → IAM Manager → CISO | Per Incident Response Plan |
| Regulatory query regarding API security | IAM Manager → Compliance → CISO | [X] business days |
| Identified critical vulnerability with no patch available | Security Architecture → CISO → CRO | Immediate |

---

## 6. Compliance and Enforcement

*Define how compliance with these standards will be measured, reported, and enforced.*

### 6.1 Compliance Measurement

**Compliance Metrics**

[Organization Name] will track the following key performance indicators (KPIs) to measure compliance with these standards:

| Metric | Target | Measurement Frequency | Reported To |
|---|---|---|---|
| Percentage of APIs registered in the API inventory | 100% | Monthly | IAM Manager, CISO |
| Percentage of APIs compliant with authentication standards | 100% | Quarterly | CISO |
| Mean time to remediate Critical API vulnerabilities | < 24 hours | Monthly | CISO |
| Mean time to remediate High API vulnerabilities | < 7 days | Monthly | CISO |
| Percentage of APIs with current security assessments | ≥ 95% | Quarterly | CISO |
| Number of open API security exceptions | Minimised; tracked | Monthly | CISO, Risk Committee |
| API security incidents (count and severity) | Tracked and trended | Monthly | CISO, Board |
| API credential rotation compliance rate | 100% | Quarterly | IAM Manager |
| Percentage of external APIs protected by WAF and rate limiting | 100% | Monthly | IAM Manager |

**Compliance Assessments**

- An internal compliance assessment against these standards must be conducted at least **annually** by the Risk & Compliance team, with results reported to the CISO.
- Findings from compliance assessments must be tracked and remediated in accordance with the vulnerability remediation SLAs defined in Section 4.8.3.
- External penetration testing results and regulatory examination findings related to API security must be incorporated into the compliance assessment.

### 6.2 Non-Compliance Consequences

Non-compliance with these standards — where no approved exception exists — will be treated as a control failure and may result in:

- Mandatory remediation within the timeframe specified in Section 4.8.3.
- Escalation to senior management and the Risk Committee.
- Temporary suspension of non-compliant API endpoints until remediation is confirmed.
- Disciplinary action for employees whose deliberate or negligent actions resulted in non-compliance, in accordance with [Organization Name]'s Human Resources Policy.
- Regulatory reporting obligations where non-compliance results in a material security incident or data breach reportable under BNM requirements or PDPA.

### 6.3 Policy Violations and Incident Reporting

- All confirmed or suspected violations of these standards must be reported to the IAM Manager and the SOC within **[X] hours** of discovery.
- Where a policy violation has resulted in or may result in a personal data breach, the PDPA Data Protection Officer (DPO) must be notified immediately.
- API security incidents must be managed in accordance with [Organization Name]'s Information Security Incident Response Plan.

---

## 7. Review and Approval History

*Maintain a complete and auditable record of all versions of this document, including changes made and approvals received.*

### 7.1 Version History

*Record all material changes to this document. Minor editorial corrections may be batched under a single version update.*

| Version | Date | Author | Change Description | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release | [Approver Name] |
| [1.1] | [Date] | [Author Name] | [Description of changes] | [Approver Name] |
| [2.0] | [Date] | [Author Name] | [Description of changes — major revision] | [Approver Name] |

### 7.2 Document Approval

*This section records the formal approval of the current version of this document by authorised signatories.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager (Document Owner) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |
| Chief Technology Officer | [Name] | [Signature] | [Date] |
| Head of Compliance | [Name] | [Signature] | [Date] |

### 7.3 Review Schedule

| Review Type | Trigger | Responsible Party |
|---|---|---|
| Scheduled Annual Review | 12 months from last review date | IAM Manager |
| Ad-hoc Review — Regulatory Change | New or amended BNM/NACSA/PDPA requirements | IAM Manager + Compliance |
| Ad-hoc Review — Significant Incident | Material API security incident | IAM Manager + CISO |
| Ad-hoc Review — Technology Change | Significant changes to API infrastructure or architecture | IAM Manager + Security Architecture |
| Ad-hoc Review — Major Threat Intelligence | Emergence of significant new API attack techniques | IAM Manager + SOC |

---

## 8. References

*List all regulatory instruments, standards, and internal documents referenced in or relevant to this document.*

### 8.1 Regulatory and Statutory References

| Reference | Description |
|---|---|
| BNM Risk Management in Technology (RMiT) Policy Document, Clause 12.3 | Security controls for internet-facing systems, APIs, and web services |
| BNM RMiT, Clauses 10.1–10.5 | Identity and access management requirements |
| BNM RMiT, Clauses 11.1–11.4 | Cryptographic controls and secure communication requirements |
| Personal Data Protection Act 2010 (PDPA), Section 9 | Security Principle — obligation to protect personal data |
| NACSA Cybersecurity Framework, Domain 3 | Technical controls for protecting systems and data |
| BNM Open Finance Policy Document | Requirements for Open Finance API security (where applicable) |
| Bank Negara Malaysia Guidelines on Technology Risk | Supplementary guidance on technology and operational risk |

### 8.2 Industry Standards and Frameworks

| Reference | Description |
|---|---|
| OWASP API Security Top 10 (Latest Edition) | Top 10 API security risks and mitigations |
| OWASP Secure Coding Practices | Secure coding guidelines for developers |
| OAuth 2.0 (RFC 6749) | Open authorisation framework specification |
| OAuth 2.0 Security Best Current Practice (RFC 9700) | Updated security guidance for OAuth 2.0 implementations |
| JSON Web Token (RFC 7519) | JWT specification |
| Financial-grade API (FAPI) Security Profile | OpenID Foundation specification for high-security OAuth 2.0 |
| NIST SP 800-204 Series | Security strategies for microservices-based systems |
| NIST SP 800-63B | Digital identity and authentication guidelines |
| ISO/IEC 27001:2022 | Information security management system requirements |
| ISO/IEC 27002:2022, Control 8.24 | Use of cryptography |
| PCI DSS v4.0 | Payment card industry data security standard (where applicable) |

### 8.3 Internal Referenced Documents

| Document | Description |
|---|---|
| [Organization Name] Information Security Policy | Overarching information security governance policy |
| [Organization Name] Data Classification Policy | Framework for classifying data sensitivity |
| [Organization Name] Cryptographic Key Management Policy | Standards for managing cryptographic keys and certificates |
| [Organization Name] Identity and Access Management Policy | IAM governance policy |
| [Organization Name] Incident Response Plan | Procedures for managing security incidents |
| [Organization Name] Vendor Management Policy | Requirements for third-party security assessments |
| [Organization Name] Secure Development Lifecycle Policy | Security requirements for software development |
| [Organization Name] Log Retention Policy | Requirements for log storage and retention |
| [Organization Name] Risk Acceptance Policy | Process for formal risk acceptance |
| [Organization Name] Privacy Impact Assessment Procedure | PIA process for personal data handling systems |

---

## 9. Appendices

### Appendix A: API Production Release Security Checklist

*Complete this checklist for every API or API version being released to production. All items must be confirmed prior to deployment. Retain completed checklists as evidence.*

**API Details**

| Field | Value |
|---|---|
| API Name | [API Name] |
| API Version | [Version] |
| Release Date | [Date] |
| Responsible Developer / Team | [Name / Team] |
| IAM Manager Sign-off | [Name] |

**Security Checklist**

| # | Checklist Item | Confirmed (Y/N) | Evidence / Notes |
|---|---|---|---|
| 1 | API registered in the central API inventory | | |
| 2 | API threat model reviewed and approved | | |
| 3 | OpenAPI / API contract specification reviewed for security | | |
| 4 | Authentication mechanism complies with Section 4.2 | | |
| 5 | Authorisation controls (RBAC/ABAC) implemented and tested | | |
| 6 | TLS 1.2 or higher enforced; weak cipher suites disabled | | |
| 7 | Rate limiting configured and tested | | |
| 8 | Input validation implemented for all endpoints | | |
| 9 | Output encoding and sensitive data masking implemented | | |
| 10 | Security headers configured per Section 4.5.3 | | |
| 11 | OWASP API Security Top 10 assessment completed | | |
| 12 | DAST / automated API security scan passed | | |
| 13 | SCA dependency scan completed; no Critical/High vulnerabilities unresolved | | |
| 14 | No hardcoded credentials or secrets in source code | | |
| 15 | API credentials provisioned via approved secrets management system | | |
| 16 | API logging and monitoring configured; SOC notified | | |
| 17 | WAF rules configured for new endpoints | | |
| 18 | Privacy Impact Assessment completed (if applicable) | | |
| 19 | Third-party consumer onboarding completed (if applicable) | | |
| 20 | API documentation published and current | | |

**Sign-off**

| Role | Name | Signature | Date |
|---|---|---|---|
| Lead Developer | | | |
| Security Architecture | | | |
| IAM Manager | | | |

---

### Appendix B: API Security Exception Request Form

*Use this form to request a formal exception to any requirement of these API Security Standards. Submit to the IAM Manager.*

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-generated / Leave blank] |
| **Date of Request** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Role** | [Role] |
| **Business Unit** | [Business Unit] |
| **Affected API(s)** | [API Name(s) and ID(s)] |
| **Standard Clause Reference** | [Clause number from this document] |
| **Requirement from which Exception is Sought** | [Exact text of requirement] |

**Section 1: Justification**

*Describe in detail why the requirement cannot be met. Include technical constraints, business justification, and timeline context.*

[Requestor to complete]

**Section 2: Risk Assessment**

*Describe the security risk created by the exception and the likelihood and impact of exploitation.*

[Requestor to complete]

**Section 3: Compensating Controls**

*Describe the compensating controls that will be implemented to reduce the residual risk to an acceptable level.*

[Requestor to complete]

**Section 4: Remediation Plan**

*If the exception is temporary, describe the plan and timeline for achieving full compliance.*

| Milestone | Target Date | Responsible Party |
|---|---|---|
| [Milestone 1] | [Date] | [Name] |
| [Milestone 2] | [Date] | [Name] |
| Full Compliance | [Date] | [Name] |

**Section 5: Requested Exception Duration**

| Field | Details |
|---|---|
| Exception Start Date | [Date] |
| Exception Expiry Date | [Date] |
| Maximum Duration | [X] months |

**Section 6: Approval**

| Role | Decision (Approve / Deny) | Comments | Signature | Date |
|---|---|---|---|---|
| IAM Manager | | | | |
| CISO (if required) | | | | |
| CRO (if required) | | | | |

---

### Appendix C: API Security Exception Register

*The IAM Manager maintains this register. All approved exceptions must be recorded here.*

| Exception ID | API Name | Clause Reference | Exception Summary | Requestor | Approval Authority | Approval Date | Expiry Date | Compensating Controls | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [EX-API-001] | [API Name] | [Clause] | [Summary] | [Name] | [Approver] | [Date] | [Date] | [Summary] | [Date] | Active / Expired / Remediated |

---

### Appendix D: API Security Incident Classification Guide

*Use this guide to classify API security incidents for response and escalation purposes.*

| Severity | Criteria | Examples | Notification Requirement |
|---|---|---|---|
| **Critical** | Confirmed data breach; active exploitation; systemic compromise | Mass data exfiltration via API; credential theft enabling account takeover at scale | Immediate: CISO, CRO, DPO; BNM within [X] hours per RMiT incident reporting |
| **High** | Suspected breach; confirmed vulnerability being exploited; significant service disruption | Single account takeover; active injection attack detected; API credential compromise | Within 1 hour: CISO, IAM Manager, SOC |
| **Medium** | Attempted attack detected and blocked; policy violation; non-exploited vulnerability | Blocked SQLi attempt; rate limit abuse; misconfigured authorisation | Within 4 hours: IAM Manager, SOC |
| **Low** | Policy violation with no breach; anomalous activity not confirmed as attack | Expired certificate (not yet expired); unregistered development API | Within 24 hours: IAM Manager |

---

### Appendix E: Glossary of API Security Standards — Quick Reference

*A single-page quick reference of the key technical standards mandated by this document, suitable for distribution to development teams.*

| Category | Standard | Reference |
|---|---|---|
| **TLS Version** | TLS 1.2 minimum; TLS 1.3 preferred | Section 4.3.2 |
| **Authentication (External APIs)** | OAuth 2.0 with PKCE | Section 4.2.2 |
| **Authentication (Service-to-Service)** | OAuth 2.0 Client Credentials or mTLS | Section 4.2.2 |
| **JWT Signing Algorithm** | RS256 or ES256 | Section 4.2.2 |
| **Access Token Lifetime (External)** | Maximum 60 minutes | Section 4.2.2 |
| **Rate Limit Response Code** | HTTP 429 with `Retry-After` header | Section 4.4.2 |
| **Input Validation Approach** | Allowlist (whitelist) | Section 4.5.2 |
| **SQL Injection Prevention** | Parameterised queries only | Section 4.5.2 |
| **Sensitive Data Masking** | Last 4 digits for account/card numbers | Section 4.5.3 |
| **Log Retention** | [X] years minimum | Section 4.6.2 |
| **Critical Vulnerability SLA** | 24 hours | Section 4.8.3 |
| **High Vulnerability SLA** | 7 calendar days | Section 4.8.3 |
| **Secrets Storage** | Approved secrets management system only | Section 4.9.2 |
| **Prohibited: Credentials in URLs** | Never transmit credentials in query parameters | Section 4.2.2 |
| **Prohibited: HTTP (unencrypted)** | All APIs must enforce HTTPS | Section 4.3.2 |
| **Prohibited: Hardcoded secrets** | No credentials in source code or container images | Section 4.9.2 |

---

*End of Document*

---

**Document Classification: Confidential**
**© [Organization Name] [Year]. All rights reserved.**
*This document is the property of [Organization Name]. Unauthorised reproduction or distribution is prohibited.*