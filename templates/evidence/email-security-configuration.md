# Email Security Configuration

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
| **RMiT Reference** | Clause 11.9 |

---

> **Handling Instructions:** This document is classified **Confidential**. It must not be shared outside the organization without prior written authorization from the document owner. Physical copies must be stored securely and destroyed in accordance with the organization's data retention policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Email Security Configuration Findings and Ratings](#5-email-security-configuration-findings-and-ratings)
6. [Evidence Reviewed](#6-evidence-reviewed)
7. [Recommendations](#7-recommendations)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

This document establishes and records the configuration of email security controls and filtering mechanisms deployed by **[Organization Name]** to protect its messaging infrastructure from threats including phishing, malware, spoofing, and unauthorized data exfiltration.

This artifact serves as evidence of compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy**, specifically **Clause 11.9**, which mandates that financial institutions implement robust controls over electronic communications. The document supports the organization's broader Technology Risk Management (TRM) framework and may be presented during BNM supervisory examinations, internal audits, or third-party assessments.

### 1.1 Scope of Coverage

*List the systems, domains, user populations, and organizational units covered by this email security configuration document.*

- **In Scope:**
  - Email domains: `[domain1.com.my]`, `[domain2.com.my]`
  - Email platforms: [e.g., Microsoft Exchange Online / Google Workspace / On-premises Exchange]
  - User population: [e.g., All employees, contractors, and third-party users with institutional email accounts — approximately [X] mailboxes]
  - Business units: [e.g., All business units and subsidiaries of [Organization Name]]
  - Mail flow paths: Inbound, outbound, and internal relay

- **Out of Scope:**
  - Personal email accounts used by staff on personal devices (unless accessing corporate resources)
  - [Any other explicitly excluded systems or domains]

### 1.2 Document Objectives

- Provide a structured record of email security controls configured and operational within [Organization Name]
- Serve as an audit-ready evidence artifact for BNM RMiT compliance assessments
- Establish a baseline configuration against which future changes and deviations can be measured
- Support incident response activities by documenting expected email control behavior

---

## 2. Regulatory Context

*Summarize the specific BNM RMiT clauses and any related regulatory obligations that this document satisfies.*

### 2.1 BNM RMiT Policy — Clause 11.9

**Clause 11.9** of the BNM RMiT Policy addresses the security requirements for electronic communications systems. [Organization Name] is required to implement controls that:

- Protect email infrastructure against unauthorized access, interception, and misuse
- Filter malicious content including spam, phishing, and malware-laden attachments
- Enforce authentication mechanisms to prevent email spoofing and domain impersonation
- Ensure email communications are monitored and logged for security and compliance purposes
- Establish data loss prevention (DLP) measures to restrict unauthorized disclosure of sensitive information via email

### 2.2 Related Regulatory and Standards Obligations

| Regulation / Standard | Relevant Section | Obligation |
|---|---|---|
| BNM RMiT Policy | Clause 11.9 | Electronic communications security |
| BNM RMiT Policy | Clause 10.x | Cyber threat management |
| Personal Data Protection Act 2010 (PDPA) | Part III | Protection of personal data in transit |
| NACSA National Cyber Security Policy | [Relevant Section] | Critical information infrastructure protection |
| ISO/IEC 27001:2022 | Annex A.8.22, A.8.23 | Web filtering and segregation of networks |
| [Internal Policy Reference] | [Section] | [Internal obligation description] |

---

## 3. Assessment Scope and Criteria

*Define the boundaries of the email security assessment and the criteria used to evaluate control effectiveness. This section should clearly articulate what was assessed, why, and against what standard.*

### 3.1 Assessment Scope

| Scope Element | Details |
|---|---|
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessment Type** | [e.g., Configuration Review / Periodic Assessment / Post-Incident Review / Change-Driven Review] |
| **Systems Assessed** | [List email gateway, filtering platform, mail server, archiving system] |
| **Assessed By** | [Name / Team / Third Party] |
| **Review Trigger** | [e.g., Quarterly scheduled review / Post-change verification / Security incident] |

### 3.2 Assessment Criteria

*State the benchmarks, baselines, and standards against which email security controls were evaluated.*

The email security configuration has been assessed against the following criteria:

| Criterion | Standard / Benchmark | Acceptable Threshold |
|---|---|---|
| Anti-spam filtering effectiveness | [Vendor SLA / Internal Policy] | [e.g., ≥ 99% spam detection rate] |
| Anti-malware detection capability | [Vendor SLA / NIST SP 800-177] | [e.g., ≥ 99.9% known malware detection] |
| SPF record configuration | RFC 7208 | Hard fail (`-all`) enforced |
| DKIM signing | RFC 6376 | All outbound messages signed |
| DMARC policy | RFC 7489 | Policy set to `reject` or `quarantine` |
| TLS encryption in transit | RFC 8314 | TLS 1.2 minimum; TLS 1.3 preferred |
| DLP policy coverage | [Internal DLP Policy Ref] | 100% of sensitive data categories covered |
| Email archiving retention | [Internal Retention Policy Ref] | [e.g., Minimum 7 years for regulated communications] |
| Phishing simulation pass rate | [Internal KPI] | [e.g., ≥ 90% of users do not click simulated phishing links] |

---

## 4. Methodology

*Describe how the assessment was conducted, including tools used, testing methods, data sources, and any limitations.*

### 4.1 Assessment Approach

The email security configuration review was conducted using the following approach:

1. **Configuration Inspection** — Direct review of email gateway and mail server configuration settings, policies, and rule sets via administrative console and exported configuration files
2. **Authentication Record Verification** — DNS lookup and validation of SPF, DKIM, and DMARC records for all in-scope domains
3. **Log Review** — Analysis of mail flow logs, quarantine reports, and threat intelligence feeds for the assessment period
4. **Policy Document Review** — Cross-referencing operational configurations against documented policies and standards
5. **Vendor Report Analysis** — Review of threat protection reports and dashboards provided by the email security platform
6. **Interview / Walkthrough** — Technical walkthrough with [e.g., IT Infrastructure Team / Cybersecurity Team] to validate configuration intent and operational procedures

### 4.2 Tools and Resources Used

| Tool / Resource | Purpose | Version / Date |
|---|---|---|
| [Email Security Platform Admin Console] | Configuration review | [Version] |
| [DNS Lookup Tool, e.g., MXToolbox] | SPF/DKIM/DMARC verification | N/A |
| [SIEM / Log Management Platform] | Mail flow and event log review | [Version] |
| [Phishing Simulation Platform] | User susceptibility baseline | [Version] |
| [Vulnerability Scanner] | Email infrastructure vulnerability assessment | [Version] |

### 4.3 Limitations and Assumptions

*Note any constraints that may affect the completeness or reliability of the assessment.*

- [e.g., Assessment was limited to configuration review; penetration testing of email infrastructure was out of scope for this cycle]
- [e.g., Log data was available only for the preceding [X] days due to retention settings at the time of assessment]
- [e.g., Assessment assumes that documented configurations accurately reflect the production environment as at the assessment date]

---

## 5. Email Security Configuration Findings and Ratings

*Document the current state of each email security control domain, including configuration details and a compliance/effectiveness rating.*

### 5.1 Overall Rating Summary

| Control Domain | Configuration Status | Compliance Rating | Risk Level |
|---|---|---|---|
| Anti-Spam Filtering | [Configured / Partially Configured / Not Configured] | [Compliant / Partial / Non-Compliant] | [Low / Medium / High / Critical] |
| Anti-Malware / Anti-Phishing | [Configured / Partially Configured / Not Configured] | [Compliant / Partial / Non-Compliant] | [Low / Medium / High / Critical] |
| Email Authentication (SPF/DKIM/DMARC) | [Configured / Partially Configured / Not Configured] | [Compliant / Partial / Non-Compliant] | [Low / Medium / High / Critical] |
| Transport Encryption (TLS) | [Configured / Partially Configured / Not Configured] | [Compliant / Partial / Non-Compliant] | [Low / Medium / High / Critical] |
| Data Loss Prevention (DLP) | [Configured / Partially Configured / Not Configured] | [Compliant / Partial / Non-Compliant] | [Low / Medium / High / Critical] |
| Email Archiving and Retention | [Configured / Partially Configured / Not Configured] | [Compliant / Partial / Non-Compliant] | [Low / Medium / High / Critical] |
| Monitoring and Alerting | [Configured / Partially Configured / Not Configured] | [Compliant / Partial / Non-Compliant] | [Low / Medium / High / Critical] |
| User Awareness Controls | [Configured / Partially Configured / Not Configured] | [Compliant / Partial / Non-Compliant] | [Low / Medium / High / Critical] |

**Rating Scale:**
- **Compliant** — Control is fully configured and meets all defined criteria
- **Partial** — Control is partially configured; gaps exist but risk is mitigated
- **Non-Compliant** — Control is absent or materially deficient; remediation required

---

### 5.2 Detailed Configuration Findings

#### 5.2.1 Anti-Spam and Content Filtering

*Document the spam filtering configuration, including filter sensitivity levels, quarantine settings, and whitelist/blacklist management.*

| Parameter | Configured Value | Recommended Value | Status |
|---|---|---|---|
| Spam confidence threshold | [Value] | [e.g., SCL ≥ 5] | [Met / Not Met] |
| Bulk mail threshold | [Value] | [e.g., BCL ≥ 4] | [Met / Not Met] |
| Quarantine retention period | [Value] | [e.g., 30 days] | [Met / Not Met] |
| Allow/block list management | [Managed / Unmanaged] | Centrally managed with review cycle | [Met / Not Met] |
| Safe attachment scanning | [Enabled / Disabled] | Enabled with detonation | [Met / Not Met] |

**Findings:** [Describe the current state, any gaps, and deviations from expected configuration]

---

#### 5.2.2 Anti-Malware and Anti-Phishing Controls

*Document malware scanning, sandboxing, safe links, and impersonation protection settings.*

| Parameter | Configured Value | Recommended Value | Status |
|---|---|---|---|
| Attachment malware scanning | [Enabled / Disabled] | Enabled | [Met / Not Met] |
| Dynamic sandboxing (detonation) | [Enabled / Disabled] | Enabled | [Met / Not Met] |
| Safe Links (URL rewriting) | [Enabled / Disabled] | Enabled | [Met / Not Met] |
| Anti-impersonation protection | [Enabled / Disabled] | Enabled with custom domains | [Met / Not Met] |
| Spoofing intelligence | [Enabled / Disabled] | Enabled | [Met / Not Met] |
| Mailbox intelligence | [Enabled / Disabled] | Enabled | [Met / Not Met] |

**Findings:** [Describe current state and any deviations]

---

#### 5.2.3 Email Authentication (SPF, DKIM, DMARC)

*Document DNS authentication record configuration for all in-scope domains.*

| Domain | SPF Record | SPF Status | DKIM Configured | DKIM Status | DMARC Policy | DMARC Status |
|---|---|---|---|---|---|---|
| [domain1.com.my] | `v=spf1 ... -all` | [Valid / Invalid / Missing] | [Yes / No] | [Valid / Invalid / Missing] | `p=reject` | [Compliant / Non-Compliant] |
| [domain2.com.my] | `v=spf1 ... -all` | [Valid / Invalid / Missing] | [Yes / No] | [Valid / Invalid / Missing] | `p=quarantine` | [Compliant / Non-Compliant] |

**Findings:** [Describe any misconfigured records, missing policies, or domains with suboptimal DMARC enforcement levels]

---

#### 5.2.4 Transport Layer Security (TLS) Configuration

*Document TLS enforcement settings for inbound and outbound mail flow.*

| Parameter | Configured Value | Recommended Value | Status |
|---|---|---|---|
| Minimum TLS version (inbound) | [TLS 1.x] | TLS 1.2 | [Met / Not Met] |
| Minimum TLS version (outbound) | [TLS 1.x] | TLS 1.2 | [Met / Not Met] |
| Opportunistic TLS | [Enabled / Disabled] | Enabled | [Met / Not Met] |
| Enforced TLS (specific partners) | [List of partners] | Enforced for regulated partners | [Met / Not Met] |
| MTA-STS policy | [Enforced / Testing / None] | Enforced | [Met / Not Met] |
| Certificate validity | [Valid / Expired] | Valid with monitoring | [Met / Not Met] |

**Findings:** [Describe TLS configuration state and any weak cipher or protocol findings]

---

#### 5.2.5 Data Loss Prevention (DLP)

*Document DLP policy rules, sensitive data categories covered, and enforcement actions.*

| DLP Policy | Sensitive Data Category | Trigger Condition | Action | Status |
|---|---|---|---|---|
| [Policy Name 1] | [e.g., Credit Card Numbers] | [e.g., ≥ 1 instance outbound] | [Block / Encrypt / Notify] | [Active / Inactive] |
| [Policy Name 2] | [e.g., MyKad / NRIC] | [e.g., ≥ 1 instance outbound] | [Block / Notify Manager] | [Active / Inactive] |
| [Policy Name 3] | [e.g., SWIFT/BIC codes] | [e.g., ≥ 1 instance external] | [Block / Quarantine] | [Active / Inactive] |
| [Policy Name 4] | [e.g., Customer account data] | [e.g., Bulk send > 50 recipients] | [Block / Encrypt] | [Active / Inactive] |

**Findings:** [Describe DLP coverage gaps, false positive rates, or policy enforcement issues]

---

#### 5.2.6 Email Archiving and Retention

*Document email archiving configuration, retention periods, and legal hold capabilities.*

| Parameter | Configured Value | Policy Requirement | Status |
|---|---|---|---|
| Archiving enabled | [Yes / No] | Yes | [Met / Not Met] |
| Retention period | [X years] | [e.g., 7 years per BNM guidance] | [Met / Not Met] |
| Archive immutability | [Immutable / Mutable] | Immutable | [Met / Not Met] |
| Legal hold capability | [Available / Unavailable] | Available | [Met / Not Met] |
| Archive encryption at rest | [Enabled / Disabled] | Enabled | [Met / Not Met] |
| eDiscovery / search capability | [Available / Unavailable] | Available | [Met / Not Met] |

**Findings:** [Describe archiving configuration and any retention gaps]

---

#### 5.2.7 Monitoring, Logging, and Alerting

*Document email security monitoring coverage, log retention, and alert configurations.*

| Parameter | Configured Value | Recommended Value | Status |
|---|---|---|---|
| Mail flow logging | [Enabled / Disabled] | Enabled | [Met / Not Met] |
| Log retention period | [X days/years] | [e.g., Minimum 1 year online] | [Met / Not Met] |
| SIEM integration | [Integrated / Not Integrated] | Integrated | [Met / Not Met] |
| Real-time threat alerts | [Enabled / Disabled] | Enabled | [Met / Not Met] |
| Threat reporting dashboards | [Available / Not Available] | Available | [Met / Not Met] |
| Alert recipients | [Role / Team] | Cybersecurity Operations | [Met / Not Met] |

**Findings:** [Describe monitoring gaps, alert coverage, or SIEM integration status]

---

## 6. Evidence Reviewed

*List all evidence items reviewed during the assessment. Each item should be traceable to its source and the control domain it supports.*

| Evidence ID | Evidence Description | Source / Location | Date Obtained | Control Domain Supported |
|---|---|---|---|---|
| EV-001 | Email gateway configuration export | [Admin Console / File Path] | [Date] | Anti-spam, Anti-malware |
| EV-002 | SPF, DKIM, DMARC DNS record screenshots | [DNS Tool / MXToolbox] | [Date] | Email Authentication |
| EV-003 | TLS configuration report | [Platform Admin Console] | [Date] | Transport Encryption |
| EV-004 | DLP policy rule export | [DLP Platform Console] | [Date] | Data Loss Prevention |
| EV-005 | Email threat protection summary report ([Period]) | [Vendor Dashboard / Export] | [Date] | Anti-spam, Anti-malware |
| EV-006 | Mail flow log sample — [Date Range] | [SIEM / Log Management Platform] | [Date] | Monitoring and Logging |
| EV-007 | Email archiving configuration screenshot | [Archive Platform Console] | [Date] | Archiving and Retention |
| EV-008 | Quarantine management report | [Email Platform Console] | [Date] | Anti-spam, Content Filtering |
| EV-009 | Phishing simulation results — [Period] | [Simulation Platform] | [Date] | User Awareness |
| EV-010 | Email security policy document | [Internal Document Repository] | [Date] | All control domains |
| EV-011 | Change management records — email security changes ([Period]) | [ITSM Platform] | [Date] | Configuration integrity |
| [EV-XXX] | [Additional evidence description] | [Source] | [Date] | [Control Domain] |

> **Note:** Physical evidence artifacts are stored in **[Evidence Repository Location / SharePoint Path / ITSM Attachment Reference]** and are available for inspection upon request.

---

## 7. Recommendations

*Document remediation actions, enhancement recommendations, and any accepted risks identified during the assessment. Prioritize findings by risk level.*

### 7.1 Remediation Actions Required

*List findings that must be addressed to achieve compliance. Include a target completion date and assigned owner.*

| Rec ID | Finding Reference | Recommendation | Priority | Assigned To | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | [Finding reference] | [Specific remediation action] | Critical | [Owner Name / Team] | [Date] | [Open / In Progress / Closed] |
| REC-002 | [Finding reference] | [Specific remediation action] | High | [Owner Name / Team] | [Date] | [Open / In Progress / Closed] |
| REC-003 | [Finding reference] | [Specific remediation action] | Medium | [Owner Name / Team] | [Date] | [Open / In Progress / Closed] |
| REC-004 | [Finding reference] | [Specific remediation action] | Low | [Owner Name / Team] | [Date] | [Open / In Progress / Closed] |

**Priority Definitions:**
- **Critical** — Immediate remediation required; active exposure to regulatory breach or material security risk
- **High** — Remediation required within 30 days; significant control gap
- **Medium** — Remediation required within 90 days; partial control gap
- **Low** — Best practice enhancement; remediation within next review cycle

### 7.2 Enhancement Recommendations

*List improvements that, while not strictly required for compliance, would strengthen the email security posture.*

| Rec ID | Recommendation | Rationale | Suggested Timeline |
|---|---|---|---|
| ENH-001 | [Enhancement description] | [Business / security rationale] | [Suggested timeframe] |
| ENH-002 | [Enhancement description] | [Business / security rationale] | [Suggested timeframe] |
| ENH-003 | [Enhancement description] | [Business / security rationale] | [Suggested timeframe] |

### 7.3 Accepted Risks

*Document any identified gaps that have been formally accepted by management, including rationale and compensating controls.*

| Risk ID | Description | Rationale for Acceptance | Compensating Controls | Accepted By | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|
| AR-001 | [Risk description] | [Acceptance rationale] | [Compensating controls in place] | [Name / Role] | [Date] | [Date] |

---

## 8. Roles and Responsibilities

*Define accountability for the email security configuration, its review, and ongoing management.*

### 8.1 RACI Matrix

| Activity | [CTO / CISO] | [IT Infrastructure Lead] | [Cybersecurity Team] | [Compliance Team] | [Internal Audit] | [Business Unit Heads] |
|---|---|---|---|---|---|---|
| Define email security policy and standards | A | C | R | C | I | I |
| Configure and maintain email security controls | I | R | C | I | I | I |
| Monitor email threat reports and dashboards | I | R | R | I | I | I |
| Conduct periodic email security configuration review | A | C | R | C | R | I |
| Manage DLP policies and sensitive data rules | I | C | R | C | I | C |
| Respond to email security incidents | I | R | R | I | I | I |
| Maintain email archiving and legal hold | I | R | C | C | I | I |
| Approve email security exceptions and accepted risks | A | C | R | C | I | I |
| Report email security status to senior management | A | C | R | R | I | I |
| Prepare and maintain this document | I | C | R | R | I | I |

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Document Owner | [Name] | [Department] | [Email] |
| Primary Author | [Name] | [Department / Cybersecurity] | [Email] |
| IT Infrastructure Lead | [Name] | IT Infrastructure | [Email] |
| Compliance Officer | [Name] | Compliance | [Email] |
| Data Protection Officer | [Name] | [Department] | [Email] |

---

## 9. Review and Approval

### 9.1 Review Cycle

This document shall be reviewed:

- **Quarterly** as part of the scheduled Technology Risk Management review cycle
- **Per-event**, upon any of the following triggers:
  - Significant changes to email infrastructure or platform
  - Email security incidents classified as High or Critical severity
  - Changes to BNM RMiT or related regulatory requirements
  - Findings from internal or external audits requiring configuration updates
  - Addition of new email domains or significant changes to user population

### 9.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 9.3 Approval Sign-Off

*All named approvers must review and sign this document before it is considered effective. Digital signatures or documented email approvals are acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner — [Relevant Department Head] | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Technology Officer (CTO) | [Name] | | [Date] |
| Compliance Officer | [Name] | | [Date] |
| [Additional Approver if required] | [Name] | | [Date] |

---

## 10. References

The following regulatory frameworks, standards, and internal policies are referenced in or inform the content of this document:

| Reference | Title | Relevant Clause / Section |
|---|---|---|
| BNM RMiT Policy | Risk Management in Technology | **Clause 11.9** — Electronic communications security |
| BNM RMiT Policy | Risk Management in Technology | Clause 10.x — Cyber threat management |
| Personal Data Protection Act 2010 | PDPA Malaysia | Part III — Security of personal data |
| NACSA | National Cyber Security Policy | Critical Information Infrastructure protection |
| ISO/IEC 27001:2022 | Information Security Management | Annex A.8.22 — Web filtering; A.8.23 — Segregation |
| NIST SP 800-177 Rev.1 | Trustworthy Email | Email authentication and security guidance |
| RFC 7208 | SPF | Sender Policy Framework |
| RFC 6376 | DKIM | DomainKeys Identified Mail |
| RFC 7489 | DMARC | Domain-based Message Authentication |
| RFC 8314 | SMTP TLS | Use of TLS for email submission and access |
| [Internal Ref] | [Organization Name] Email Security Policy | [Section] |
| [Internal Ref] | [Organization Name] Information Classification Policy | [Section] |
| [Internal Ref] | [Organization Name] Data Retention Policy | [Section] |
| [Internal Ref] | [Organization Name] Incident Response Plan | [Section] |

---

## 11. Appendices

### Appendix A — Email Security Platform Architecture Diagram

*Insert or attach a network/architecture diagram illustrating mail flow, email gateway placement, filtering layers, and integration points with SIEM and archiving systems.*

> **[Attach Diagram: Email Security Architecture — as at [Date]]**

---

### Appendix B — Full DNS Authentication Record Listings

*Provide the complete text of all SPF, DKIM, and DMARC DNS records for all in-scope domains as at the assessment date.*

**Domain: [domain1.com.my]**

```
SPF:   [Full SPF TXT record]
DKIM:  [Full DKIM TXT record — selector._domainkey.domain]
DMARC: [Full DMARC TXT record — _dmarc.domain]
```

**Domain: [domain2.com.my]**

```
SPF:   [Full SPF TXT record]
DKIM:  [Full DKIM TXT record]
DMARC: [Full DMARC TXT record]
```

---

### Appendix C — Email Security Metrics Summary

*Provide a statistical summary of email security performance for the assessment period, sourced from the email security platform and SIEM.*

| Metric | Value ([Period]) | Trend vs. Prior Period |
|---|---|---|
| Total inbound messages processed | [X,XXX,XXX] | [↑ / ↓ / → +X%] |
| Spam messages blocked | [X,XXX,XXX] ([X]%) | [Trend] |
| Malware/phishing messages blocked | [XX,XXX] ([X]%) | [Trend] |
| Messages quarantined — false positive rate | [X]% | [Trend] |
| DLP policy violations triggered | [XXX] | [Trend] |
| DLP violations resulting in block action | [XXX] ([X]%) | [Trend] |
| Email security incidents (High/Critical) | [X] | [Trend] |
| Phishing simulation click rate | [X]% | [Trend] |

---

### Appendix D — Email Security Exception Register

*List all current approved exceptions to the standard email security configuration, including the business justification and compensating controls.*

| Exception ID | Description | Business Justification | Compensating Control | Approved By | Expiry Date |
|---|---|---|---|---|---|
| EX-001 | [Exception description] | [Justification] | [Compensating control] | [Approver] | [Date] |
| [EX-XXX] | [Exception description] | [Justification] | [Compensating control] | [Approver] | [Date] |

---

### Appendix E — Glossary of Terms

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank of Malaysia |
| DKIM | DomainKeys Identified Mail — email authentication method using cryptographic signatures |
| DMARC | Domain-based Message Authentication, Reporting and Conformance |
| DLP | Data Loss Prevention — controls to prevent unauthorized disclosure of sensitive data |
| MTA-STS | Mail Transfer Agent Strict Transport Security |
| NACSA | National Cyber Security Agency of Malaysia |
| PDPA | Personal Data Protection Act 2010 (Malaysia) |
| RMiT | Risk Management in Technology — BNM policy framework |
| SPF | Sender Policy Framework — DNS-based email sender validation |
| TLS | Transport Layer Security — cryptographic protocol for secure communications |

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. Printed copies are uncontrolled. Always refer to the document management system for the current approved version. For queries regarding this document, contact **[Document Owner Name]** at **[Contact Details]**.