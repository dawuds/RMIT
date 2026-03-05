# Email Authentication Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document serves as the authoritative register of email authentication configuration records for **[Organization Name]**, covering all organisational domains. It captures the current state of Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication, Reporting and Conformance (DMARC) configurations as system-generated evidence of technical controls.

This artifact fulfils the evidence requirements under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, Clause 11.9**, which mandates that financial institutions implement and maintain effective controls over electronic communication channels to protect against spoofing, phishing, and unauthorised use of institutional domains.

**Scope:** All registered domains and subdomains owned or operated by [Organization Name], including production, staging, and third-party delegated domains used for business correspondence.

**Record Generation Method:** Records are system-generated via DNS query tools, email security platforms, or automated scanning utilities. Manual entries are permitted only where tooling is unavailable and must be clearly annotated.

---

## 2. Asset and Item Identification

*List every organisational domain and subdomain in scope. Each entry must be uniquely identifiable for tracking and audit purposes. Include both active and decommissioned domains during the transitional period.*

### 2.1 Domain Register

| Domain ID | Domain Name | Domain Type | Business Unit | Purpose | Date Registered | Status |
|---|---|---|---|---|---|---|
| DOM-001 | [primary-domain.com.my] | Primary | [Business Unit] | Corporate email and web | [Date] | Active |
| DOM-002 | [subdomain.primary-domain.com.my] | Subdomain | [Business Unit] | [Purpose] | [Date] | Active |
| DOM-003 | [legacy-domain.com] | Legacy | [Business Unit] | [Purpose] | [Date] | Decommissioned |
| [DOM-NNN] | [Domain Name] | [Primary / Subdomain / Third-party Delegated] | [Business Unit] | [Purpose] | [Date] | [Active / Inactive / Decommissioned] |

### 2.2 Email Service Providers and Authorised Senders

*List all services and platforms authorised to send email on behalf of organisational domains. These inform SPF record construction and DKIM key issuance.*

| Sender ID | Service / Platform | Provider | IP Range / Mechanism | Authorisation Basis | Domain(s) Applicable |
|---|---|---|---|---|---|
| SND-001 | Microsoft 365 / Exchange Online | Microsoft | `include:spf.protection.outlook.com` | Corporate email platform | All primary domains |
| SND-002 | [Marketing Automation Platform] | [Provider] | `include:[provider-spf-mechanism]` | [Authorisation basis, e.g., vendor contract] | [Domain(s)] |
| SND-003 | [Transactional Email Service] | [Provider] | `ip4:[IP Range]` | [Authorisation basis] | [Domain(s)] |
| [SND-NNN] | [Service Name] | [Provider] | [SPF Mechanism] | [Authorisation Basis] | [Domain(s)] |

---

## 3. Classification and Categorisation

*Classify each domain and its associated authentication controls according to criticality and data sensitivity. This informs the priority of remediation where gaps are identified.*

### 3.1 Domain Criticality Classification

| Domain ID | Domain Name | Criticality | Data Sensitivity | Authentication Maturity | Risk Tier |
|---|---|---|---|---|---|
| DOM-001 | [primary-domain.com.my] | Critical | Confidential | Enforced (p=reject) | Tier 1 |
| DOM-002 | [subdomain.primary-domain.com.my] | High | Internal | Monitoring (p=quarantine) | Tier 2 |
| DOM-003 | [legacy-domain.com] | Low | Public | None — decommissioned | Tier 3 |
| [DOM-NNN] | [Domain Name] | [Critical / High / Medium / Low] | [Confidential / Internal / Public] | [Enforced / Monitoring / Basic / None] | [Tier 1–3] |

**Criticality Definitions:**

- **Critical** — Domain used for regulated financial communications, customer-facing correspondence, or executive communications
- **High** — Domain used for internal business operations or third-party integrations
- **Medium** — Domain used for ancillary services (e.g., marketing, newsletters)
- **Low / Decommissioned** — Domain no longer in active use

---

## 4. Owner and Custodian

*Assign clear ownership and custodianship for each domain's email authentication records. Ownership determines accountability for configuration correctness; custodianship determines who performs operational maintenance.*

### 4.1 Ownership Register

| Domain ID | Domain Name | Record Owner | Record Custodian | DNS Administrator | Security Contact | Escalation Contact |
|---|---|---|---|---|---|---|
| DOM-001 | [primary-domain.com.my] | IAM Manager | [DNS / Infrastructure Team Lead] | [Name / Team] | [CISO / Security Team] | [CTO / IT Director] |
| [DOM-NNN] | [Domain Name] | [Owner Name / Role] | [Custodian Name / Role] | [DNS Admin Name / Team] | [Security Contact] | [Escalation Contact] |

### 4.2 Contact Details

| Role | Name | Email | Phone | Department |
|---|---|---|---|---|
| IAM Manager (Record Owner) | [Name] | [email@organization.com.my] | [+60-XX-XXXXXXX] | Information Security |
| DNS Administrator | [Name] | [email@organization.com.my] | [+60-XX-XXXXXXX] | Infrastructure / IT Operations |
| CISO / Security Oversight | [Name] | [email@organization.com.my] | [+60-XX-XXXXXXX] | Information Security |
| Vendor / MSSPContact (if applicable) | [Name] | [email@vendor.com] | [+60-XX-XXXXXXX] | [Vendor Organisation] |

---

## 5. Authentication Configuration Records

*This section captures the system-generated DNS record values for SPF, DKIM, and DMARC for each in-scope domain. Records should be extracted directly from DNS using authoritative query tools (e.g.,* `dig`, *MXToolbox, or an equivalent platform) and pasted verbatim. Do not paraphrase DNS record values.*

### 5.1 SPF Records

*SPF (Sender Policy Framework) records specify which mail servers are authorised to send email on behalf of the domain. A missing or overly permissive SPF record (+all) constitutes a critical finding.*

| Domain ID | Domain Name | SPF Record (verbatim) | Mechanism Summary | Hardness | Last Verified | Finding |
|---|---|---|---|---|---|---|
| DOM-001 | [primary-domain.com.my] | `v=spf1 include:spf.protection.outlook.com include:[provider] -all` | Microsoft 365 + [Provider]; hard fail | `-all` (recommended) | [Date] | None |
| DOM-002 | [subdomain.domain.com.my] | `v=spf1 include:spf.protection.outlook.com ~all` | Microsoft 365; soft fail | `~all` (improve to -all) | [Date] | Recommend hardening |
| DOM-003 | [legacy-domain.com] | `v=spf1 -all` | Null sender — domain sends no mail | `-all` | [Date] | None |
| [DOM-NNN] | [Domain Name] | [Verbatim SPF record or "NOT FOUND"] | [Summary] | [`-all` / `~all` / `+all` / None] | [Date] | [None / Finding description] |

### 5.2 DKIM Records

*DKIM (DomainKeys Identified Mail) records publish the public cryptographic key used to verify the digital signature applied to outgoing messages. Each selector corresponds to a signing key from an authorised mail service.*

| Domain ID | Domain Name | Selector | DKIM Record (verbatim) | Key Length | Algorithm | Expiry | Last Verified | Finding |
|---|---|---|---|---|---|---|---|---|
| DOM-001 | [primary-domain.com.my] | `selector1` | `v=DKIM1; k=rsa; p=[public-key-string]` | 2048-bit | RSA | No expiry | [Date] | None |
| DOM-001 | [primary-domain.com.my] | `selector2` | `v=DKIM1; k=rsa; p=[public-key-string]` | 2048-bit | RSA | No expiry | [Date] | None |
| DOM-002 | [subdomain.domain.com.my] | `[selector]` | [Verbatim DKIM record or "NOT FOUND"] | [Key Length] | [Algorithm] | [Expiry or N/A] | [Date] | [Finding] |
| [DOM-NNN] | [Domain Name] | [Selector] | [Verbatim DKIM record or "NOT FOUND"] | [Key Length] | [RSA / Ed25519] | [Expiry] | [Date] | [None / Finding] |

> **Note:** Where DKIM records are NOT FOUND, this constitutes a gap against RMiT Clause 11.9 requirements and must be remediated within [X] business days per the organisation's vulnerability management SLA.

### 5.3 DMARC Records

*DMARC (Domain-based Message Authentication, Reporting and Conformance) records specify the policy governing what receiving mail servers should do with messages that fail SPF and/or DKIM checks. The policy must be set to* `p=reject` *for Tier 1 (Critical) domains.*

| Domain ID | Domain Name | DMARC Record (verbatim) | Policy (p=) | Subdomain Policy (sp=) | Alignment Mode | Reporting URI (rua) | Forensic URI (ruf) | Last Verified | Finding |
|---|---|---|---|---|---|---|---|---|---|
| DOM-001 | [primary-domain.com.my] | `v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; rua=mailto:[dmarc-reports@org.com.my]; pct=100` | `reject` | `reject` | Strict | [dmarc-reports@org.com.my] | [dmarc-forensics@org.com.my] | [Date] | None |
| DOM-002 | [subdomain.domain.com.my] | `v=DMARC1; p=quarantine; rua=mailto:[dmarc-reports@org.com.my]; pct=100` | `quarantine` | Inherited | Relaxed | [dmarc-reports@org.com.my] | None | [Date] | Escalate to p=reject |
| [DOM-NNN] | [Domain Name] | [Verbatim DMARC record or "NOT FOUND"] | [`none` / `quarantine` / `reject`] | [Policy] | [Strict / Relaxed] | [Reporting URI] | [Forensic URI] | [Date] | [None / Finding] |

**DMARC Policy Maturity Levels:**

| Policy | Meaning | Acceptable For |
|---|---|---|
| `p=none` | Monitor only; no enforcement | Initial assessment phase only |
| `p=quarantine` | Failing messages sent to spam/junk | Transitional — not acceptable for Tier 1 |
| `p=reject` | Failing messages rejected outright | Required for all Tier 1 (Critical) domains |

---

## 6. Status and Lifecycle Stage

*Document the current compliance status and remediation lifecycle for each domain's email authentication posture. Unresolved gaps must be tracked through to closure.*

### 6.1 Compliance Status Summary

| Domain ID | Domain Name | SPF Status | DKIM Status | DMARC Status | Overall Compliance | Risk Rating | Remediation Target Date |
|---|---|---|---|---|---|---|---|
| DOM-001 | [primary-domain.com.my] | Compliant | Compliant | Compliant (p=reject) | **Compliant** | Low | N/A |
| DOM-002 | [subdomain.domain.com.my] | Partial | Compliant | Partial (p=quarantine) | **Partially Compliant** | Medium | [Date] |
| DOM-003 | [legacy-domain.com] | Compliant (null) | N/A | N/A | **Compliant** | Low | N/A |
| [DOM-NNN] | [Domain Name] | [Compliant / Partial / Non-Compliant / N/A] | [Compliant / Partial / Non-Compliant / N/A] | [Compliant / Partial / Non-Compliant / N/A] | [Overall Status] | [Low / Medium / High / Critical] | [Date or N/A] |

**Status Definitions:**

- **Compliant** — Record exists, is correctly configured, and meets minimum RMiT Clause 11.9 requirements
- **Partially Compliant** — Record exists but configuration does not meet the target state (e.g., DMARC p=quarantine instead of p=reject)
- **Non-Compliant** — Record is absent, misconfigured, or contains a critical weakness (e.g., SPF +all)
- **N/A** — Control not applicable (e.g., DKIM for a domain with no outbound email)

### 6.2 Open Findings and Remediation Tracker

*Track all identified gaps through to resolution. Each finding must have an assigned owner and target closure date.*

| Finding ID | Domain ID | Control | Finding Description | Severity | Assigned To | Target Date | Status | Resolution Evidence |
|---|---|---|---|---|---|---|---|---|
| FND-001 | DOM-002 | DMARC | Policy set to p=quarantine; must be escalated to p=reject | Medium | [DNS Administrator] | [Date] | In Progress | [Link to change record / ticket] |
| FND-002 | [DOM-NNN] | SPF | SPF record not found | High | [DNS Administrator] | [Date] | Open | Pending |
| [FND-NNN] | [DOM-NNN] | [SPF / DKIM / DMARC] | [Finding Description] | [Critical / High / Medium / Low] | [Assignee] | [Target Date] | [Open / In Progress / Resolved] | [Evidence Reference] |

---

## 7. Last Review Date and Review History

*Record the date and outcome of each periodic or event-triggered review of these authentication records. Reviews must occur at minimum quarterly, or upon any of the following trigger events: domain registration/deregistration, email platform migration, security incident, or BNM audit notification.*

### 7.1 Review Trigger Events

*The following events must trigger an out-of-cycle review of this register:*

- Addition or deregistration of an organisational domain
- Migration or change of email service provider or sending platform
- Discovery of email spoofing or phishing incident involving organisational domains
- Change in authorised third-party senders (e.g., new marketing or transactional email vendor)
- BNM examination, regulatory audit, or internal audit request
- Key rotation for DKIM signing keys (recommended annually or upon suspected compromise)

### 7.2 Review Log

| Review ID | Review Date | Review Type | Domains Reviewed | Reviewer | Findings Summary | Actions Raised | Next Review Date |
|---|---|---|---|---|---|---|---|
| REV-001 | [Date] | Quarterly | All (DOM-001 to DOM-NNN) | [IAM Manager Name] | [e.g., 1 medium finding — DMARC policy upgrade required for DOM-002] | FND-001 | [Date + 3 months] |
| REV-002 | [Date] | Per-Event (Domain Addition) | DOM-003 | [IAM Manager Name] | No findings — null SPF configured correctly | None | [Next quarterly date] |
| [REV-NNN] | [Date] | [Quarterly / Per-Event] | [Domain IDs reviewed] | [Reviewer Name / Role] | [Findings Summary or "No findings"] | [Finding IDs or "None"] | [Date] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for email authentication record management across [Organization Name].*

| Activity | IAM Manager | DNS / Infrastructure Administrator | CISO / Head of Information Security | IT Governance / Compliance | Vendor / MSSP (if applicable) |
|---|---|---|---|---|---|
| Maintain domain register | **A** | R | I | I | I |
| Configure and update SPF records | A | **R** | I | I | C |
| Configure and update DKIM records | A | **R** | I | I | C |
| Configure and update DMARC records | A | **R** | C | I | C |
| Conduct periodic review of records | **A/R** | C | I | I | — |
| Investigate and remediate findings | A | **R** | C | I | R (if applicable) |
| Monitor DMARC aggregate reports | **A** | R | I | — | R (if applicable) |
| Approve changes to authentication configuration | — | — | **A** | I | — |
| Report compliance status to governance bodies | — | — | R | **A** | — |
| Maintain this register | **A/R** | C | I | I | — |

**RACI Legend:** R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Role | Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | IAM Manager | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Role] | [Description of changes] |
| [N.N] | [Date] | [Author Name] | [Role] | [Description of changes] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager (Owner) | [Name] | _________________ | [Date] |
| CISO / Head of Information Security | [Name] | _________________ | [Date] |
| Chief Information Officer / IT Director | [Name] | _________________ | [Date] |
| [Additional Approver, if required] | [Name] | _________________ | [Date] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 11.9 | Electronic communication security controls, including email authentication requirements for financial institutions |
| RFC 7208 | Sender Policy Framework (SPF) | Technical specification for SPF DNS record construction and validation |
| RFC 6376 | DomainKeys Identified Mail (DKIM) | Technical specification for DKIM signing and verification |
| RFC 7489 | Domain-based Message Authentication, Reporting and Conformance (DMARC) | Technical specification for DMARC policy enforcement and reporting |
| [Organization Name] Information Security Policy | [Policy Reference] | Parent information security policy governing email security controls |
| [Organization Name] IT Change Management Procedure | [Procedure Reference] | Change management process applicable to DNS record modifications |
| [Organization Name] Incident Response Plan | [Document Reference] | Governing procedure for email spoofing or phishing incidents |
| NIST SP 800-177r1 | Trustworthy Email | Guidelines for implementing email authentication protocols in an enterprise context |

---

## 11. Appendices

### Appendix A — DNS Query Reference Commands

*Use the following commands to extract verbatim DNS record values for population of Section 5. Commands should be executed against the authoritative DNS server for the domain.*

```
# SPF Record Query
dig TXT [domain.com.my] +short

# DKIM Record Query (replace 'selector1' with the actual selector name)
dig TXT selector1._domainkey.[domain.com.my] +short

# DMARC Record Query
dig TXT _dmarc.[domain.com.my] +short
```

*Alternatively, use approved third-party tooling such as MXToolbox (mxtoolbox.com), DMARC Analyser, or the organisation's approved email security platform to generate system-exported records.*

### Appendix B — Minimum Configuration Standards

*The following table defines the minimum acceptable configuration for each authentication control, aligned to BNM RMiT Clause 11.9 and industry best practice.*

| Control | Minimum Requirement | Recommended Standard | Non-Compliant Indicator |
|---|---|---|---|
| SPF | Record exists; ends in `-all` or `~all` | `-all` (hard fail); no more than 10 DNS lookups | Missing record; `+all` (pass all); exceeds DNS lookup limit |
| DKIM | At least one valid selector per active sending service; minimum 1024-bit key | 2048-bit RSA or Ed25519; rotate keys annually | Missing record; weak key (<1024-bit); `p=` tag empty (revoked key) |
| DMARC | `p=none` minimum at onboarding | `p=reject`; `pct=100`; reporting URI configured; strict alignment | Missing record; `p=none` beyond initial 30-day monitoring phase for Tier 1 domains |

### Appendix C — DMARC Aggregate Report Log

*DMARC aggregate reports (rua) received from receiving mail servers must be monitored and reviewed. Attach or reference exported report summaries below.*

| Report Period | Source (Receiving Server) | Volume (Total Messages) | SPF Pass % | DKIM Pass % | DMARC Pass % | Anomalies Identified | Report Reference |
|---|---|---|---|---|---|---|---|
| [Month YYYY] | [e.g., Google / Microsoft] | [Count] | [%] | [%] | [%] | [Description or "None"] | [File reference / attachment] |
| [Month YYYY] | [Receiving Server] | [Count] | [%] | [%] | [%] | [Description or "None"] | [File reference / attachment] |

### Appendix D — Change Record Reference Log

*All changes to SPF, DKIM, and DMARC records must be made via the organisation's formal change management process. Reference the relevant change records below.*

| Change Record ID | Date | Domain Affected | Control Modified | Change Description | Authorised By | Post-Change Verification Date |
|---|---|---|---|---|---|---|
| [CHG-XXXXXX] | [Date] | [Domain] | [SPF / DKIM / DMARC] | [Description] | [Approver Name / Role] | [Verification Date] |
| [CHG-XXXXXX] | [Date] | [Domain] | [SPF / DKIM / DMARC] | [Description] | [Approver Name / Role] | [Verification Date] |

---

*This document is classified as **Confidential** and is subject to [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited. For queries regarding this document, contact the IAM Manager at [email@organization.com.my].*