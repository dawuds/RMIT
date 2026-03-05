# TIP Configuration

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Threat Intelligence Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document serves as the configuration evidence record for the Threat Intelligence Platform (TIP) deployed by [Organization Name] in support of Indicators of Compromise (IoC) management and operational threat intelligence capabilities. It documents the platform's configuration state, integration points, data source subscriptions, and operational parameters assessed at the time of review.

This artifact is maintained in compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT)**, specifically:

- **Clause 11.19** — Threat intelligence capabilities, including the ingestion, analysis, and operationalisation of IoC data to detect, respond to, and mitigate cyber threats targeting the institution's technology infrastructure and services.

This document applies to all components of the TIP environment, including but not limited to:

- The core TIP platform and hosting infrastructure
- Threat intelligence feed integrations (commercial, open-source, and sector-specific)
- IoC ingestion pipelines and enrichment workflows
- Integrations with downstream security controls (SIEM, SOAR, EDR, firewall, proxy)
- Access controls, retention policies, and data handling configurations

> **Scope Boundary:** [Define which environments, systems, or business units are within scope of this configuration review. State any explicit exclusions and the rationale.]

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the configuration assessment, the systems reviewed, and the criteria against which the TIP configuration is evaluated.*

### 2.1 Systems and Components in Scope

| Component | Description | Version / Release | Hosting Environment |
|---|---|---|---|
| [TIP Platform Name] | Core threat intelligence management platform | [Version] | [On-premise / Cloud / Hybrid] |
| [Feed Integration Module] | Connector for external intelligence feeds | [Version] | [Location] |
| [SIEM Integration] | Bi-directional IoC sharing with SIEM | [Version] | [Location] |
| [SOAR Integration] | Automated enrichment and response playbooks | [Version] | [Location] |
| [Enrichment Service] | IP/domain/hash reputation enrichment | [Version] | [Location] |

### 2.2 Assessment Criteria

*List the standards, baselines, and internal policies used to evaluate the TIP configuration. Reference both regulatory obligations and internal benchmarks.*

The configuration has been assessed against the following criteria:

- **BNM RMiT Clause 11.19** — Threat intelligence and IoC management requirements
- **[Organization Name] Threat Intelligence Policy** — [Policy Reference ID]
- **[Organization Name] Cyber Security Framework** — [Policy Reference ID]
- **CIS Controls v8** — Control 17 (Incident Response Management), as applicable
- **MITRE ATT&CK Framework** — Used as the reference taxonomy for threat actor TTPs
- **STIX/TAXII Standards** — For structured threat intelligence sharing and interoperability
- **[Additional internal or industry baseline]** — [Reference]

### 2.3 Review Trigger

*Indicate whether this review was triggered by a scheduled quarterly review or a specific event.*

| Trigger Type | Details |
|---|---|
| **Review Type** | [ ] Quarterly Scheduled Review &nbsp;&nbsp; [ ] Per-Event Review |
| **Trigger Event (if applicable)** | [Describe the event, e.g., new critical vulnerability, significant incident, threat actor campaign] |
| **Review Period** | [Start Date] to [End Date] |
| **Previous Review Date** | [Date of Prior Review] |

---

## 3. Methodology

*Describe the approach, tools, and processes used to review and validate the TIP configuration.*

### 3.1 Review Approach

The configuration review was conducted using a combination of the following methods:

- **Direct platform inspection** — Review of configuration settings, user accounts, feed subscriptions, and integration parameters via the TIP administrative console
- **Configuration file review** — Examination of exported configuration files, API keys, and integration manifests
- **Automated configuration scanning** — [Tool name, if applicable] used to validate settings against defined baselines
- **Interview and walkthrough** — Sessions conducted with the Threat Intelligence Lead and supporting analysts to validate operational use and confirm configuration intent
- **Log sampling** — Review of ingestion logs, enrichment outputs, and integration activity logs covering the period [Date Range]

### 3.2 Evidence Collection

*Describe how configuration evidence was collected, preserved, and recorded.*

Evidence was collected on **[Evidence Collection Date]** by **[Reviewer Name / Role]**. All evidence artefacts are catalogued in Section 5 of this document. Screenshots, configuration exports, and supporting documentation are retained in **[Evidence Repository / Folder Path]** and are available for audit inspection.

### 3.3 Limitations and Constraints

*Document any constraints that affected the completeness or depth of the review.*

| Limitation | Impact | Mitigation |
|---|---|---|
| [e.g., Read-only access to production environment] | [Unable to test certain configuration changes] | [Review validated via log evidence] |
| [e.g., Third-party feed vendor documentation unavailable] | [Feed configuration could not be fully verified] | [Vendor confirmation email obtained and attached] |
| [Additional limitation] | [Impact] | [Mitigation] |

---

## 4. Findings and Ratings

*Document all configuration findings identified during the review, including positive observations, gaps, and areas requiring remediation.*

### 4.1 Summary Rating

| Domain | Rating | Observations |
|---|---|---|
| Feed Integration and Coverage | [ ] Compliant &nbsp; [ ] Partial &nbsp; [ ] Non-Compliant | [Summary] |
| IoC Ingestion and Enrichment | [ ] Compliant &nbsp; [ ] Partial &nbsp; [ ] Non-Compliant | [Summary] |
| Downstream Integration (SIEM/SOAR/Controls) | [ ] Compliant &nbsp; [ ] Partial &nbsp; [ ] Non-Compliant | [Summary] |
| Access Control and User Management | [ ] Compliant &nbsp; [ ] Partial &nbsp; [ ] Non-Compliant | [Summary] |
| Retention, Archival, and Data Handling | [ ] Compliant &nbsp; [ ] Partial &nbsp; [ ] Non-Compliant | [Summary] |
| Alerting and Notification Configuration | [ ] Compliant &nbsp; [ ] Partial &nbsp; [ ] Non-Compliant | [Summary] |
| **Overall Configuration Rating** | **[ ] Compliant &nbsp; [ ] Partial &nbsp; [ ] Non-Compliant** | [Overall summary] |

**Rating Scale:**
- **Compliant** — Configuration meets all applicable criteria with no material gaps identified
- **Partial** — Configuration meets most criteria; minor gaps identified that do not materially impair function
- **Non-Compliant** — Material gaps identified that impair the institution's ability to meet regulatory obligations or operational objectives

### 4.2 Detailed Findings

*For each finding, document the configuration item, observed state, expected state, gap analysis, risk rating, and remediation requirement.*

| Finding ID | Configuration Domain | Configuration Item | Observed State | Expected State | Gap / Issue | Risk Rating | Status |
|---|---|---|---|---|---|---|---|
| TIP-F001 | Feed Integration | [Feed name or parameter] | [Observed] | [Expected per baseline] | [Gap description] | [ ] Critical / High / Medium / Low | [ ] Open / Closed |
| TIP-F002 | Access Control | [User role / permission scope] | [Observed] | [Expected per policy] | [Gap description] | [ ] Critical / High / Medium / Low | [ ] Open / Closed |
| TIP-F003 | IoC Enrichment | [Enrichment source / parameter] | [Observed] | [Expected per baseline] | [Gap description] | [ ] Critical / High / Medium / Low | [ ] Open / Closed |
| TIP-F004 | Downstream Integration | [Integration target] | [Observed] | [Expected per design] | [Gap description] | [ ] Critical / High / Medium / Low | [ ] Open / Closed |
| [TIP-F00X] | [Domain] | [Item] | [Observed] | [Expected] | [Gap] | [ ] | [ ] |

> **Risk Rating Definitions:**
> - **Critical** — Immediate risk to confidentiality, integrity, or availability; remediation required within 24–72 hours
> - **High** — Significant risk; remediation required within 30 days
> - **Medium** — Moderate risk; remediation required within 90 days
> - **Low** — Minor risk; remediation at next scheduled maintenance window

### 4.3 Positive Observations

*Document configuration elements that are well-implemented and represent good practice.*

- [Positive observation 1 — e.g., Multi-factor authentication enforced for all TIP user accounts]
- [Positive observation 2 — e.g., IoC retention policy aligned with institutional data classification requirements]
- [Positive observation 3]

---

## 5. Evidence Reviewed

*List all evidence artefacts reviewed during this configuration assessment. Ensure all referenced items are retained and accessible for audit.*

### 5.1 Configuration Evidence

| Evidence ID | Evidence Type | Description | Source / Location | Date Obtained | Reviewed By |
|---|---|---|---|---|---|
| EV-001 | Configuration Export | TIP platform configuration export (JSON/XML) | [Repository Path] | [Date] | [Reviewer] |
| EV-002 | Screenshot | Feed subscription settings — active feeds and ingestion parameters | [Repository Path] | [Date] | [Reviewer] |
| EV-003 | Screenshot | User account and role assignments | [Repository Path] | [Date] | [Reviewer] |
| EV-004 | Log Extract | IoC ingestion logs — [Date Range] | [SIEM / Log Repository] | [Date] | [Reviewer] |
| EV-005 | Integration Manifest | SIEM integration configuration (API endpoint, field mappings) | [Repository Path] | [Date] | [Reviewer] |
| EV-006 | Policy Document | Threat Intelligence Policy — [Policy ID] | [Policy Repository] | [Date] | [Reviewer] |
| EV-007 | Interview Record | Walkthrough session with Threat Intelligence Lead | [Meeting Notes Path] | [Date] | [Reviewer] |
| [EV-00X] | [Type] | [Description] | [Location] | [Date] | [Reviewer] |

### 5.2 Active Intelligence Feed Inventory

*Document all active threat intelligence feed subscriptions configured within the TIP at the time of review.*

| Feed Name | Provider | Feed Type | Format | Ingestion Frequency | IoC Types | Status |
|---|---|---|---|---|---|---|
| [Feed Name] | [Vendor / Source] | [ ] Commercial / Open-Source / ISAC / Internal | STIX / TAXII / CSV / API | [Real-time / Hourly / Daily] | IP, Domain, Hash, URL | [ ] Active / Inactive |
| [Feed Name] | [Vendor / Source] | [ ] Commercial / Open-Source / ISAC / Internal | [Format] | [Frequency] | [IoC Types] | [ ] Active / Inactive |
| [Feed Name] | [Vendor / Source] | [ ] Commercial / Open-Source / ISAC / Internal | [Format] | [Frequency] | [IoC Types] | [ ] Active / Inactive |

### 5.3 Downstream Integration Evidence

*Confirm the configuration state of each downstream integration at the time of review.*

| Integration Target | Integration Method | Direction | Last Validated | Configuration Status |
|---|---|---|---|---|
| SIEM ([Product Name]) | API / Syslog / STIX-TAXII | Bidirectional / Push / Pull | [Date] | [ ] Configured / Degraded / Not Configured |
| SOAR ([Product Name]) | API / Webhook | [Direction] | [Date] | [ ] Configured / Degraded / Not Configured |
| EDR ([Product Name]) | API | [Direction] | [Date] | [ ] Configured / Degraded / Not Configured |
| Firewall / Proxy ([Product Name]) | API / Blocklist Export | Push | [Date] | [ ] Configured / Degraded / Not Configured |
| Email Gateway ([Product Name]) | API / Blocklist Export | Push | [Date] | [ ] Configured / Degraded / Not Configured |

---

## 6. Recommendations

*Document all recommended actions arising from this configuration review, prioritised by risk and mapped to findings.*

### 6.1 Immediate Actions (Critical / High)

*Actions required within 30 days to remediate critical or high-risk findings.*

| Recommendation ID | Finding Reference | Recommended Action | Owner | Target Completion | Priority |
|---|---|---|---|---|---|
| REC-001 | TIP-F001 | [Specific remediation action] | [Role / Team] | [Date] | Critical / High |
| REC-002 | TIP-F002 | [Specific remediation action] | [Role / Team] | [Date] | Critical / High |

### 6.2 Short-Term Actions (Medium)

*Actions to be completed within 90 days.*

| Recommendation ID | Finding Reference | Recommended Action | Owner | Target Completion | Priority |
|---|---|---|---|---|---|
| REC-003 | TIP-F003 | [Specific remediation action] | [Role / Team] | [Date] | Medium |
| REC-004 | TIP-F004 | [Specific remediation action] | [Role / Team] | [Date] | Medium |

### 6.3 Long-Term Improvements

*Strategic improvements recommended for future planning cycles, not tied to specific findings.*

- [Recommendation — e.g., Evaluate ISAC membership for financial sector-specific threat intelligence]
- [Recommendation — e.g., Implement automated TIP configuration drift detection]
- [Recommendation — e.g., Expand IoC enrichment sources to include dark web monitoring feeds]

### 6.4 Remediation Tracking

Remediation progress is tracked in **[Ticketing System / GRC Platform]** under project reference **[Tracking Reference]**. The Threat Intelligence Lead is responsible for confirming remediation closure prior to the next scheduled review.

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for the TIP configuration, its ongoing management, and the conduct of this review.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Threat Intelligence Lead | CISO | SOC Manager | IT Security Operations | Compliance / Risk | Internal Audit |
|---|---|---|---|---|---|---|
| TIP platform configuration management | R | A | C | R | I | I |
| Intelligence feed subscription management | R | A | I | C | I | I |
| IoC ingestion pipeline operation | R | I | A | R | I | I |
| Downstream integration configuration | C | A | R | R | I | I |
| Quarterly configuration review | R | A | C | C | C | I |
| Per-event configuration review | R | A | R | R | I | I |
| Remediation of configuration findings | R | A | C | R | C | I |
| Escalation of critical findings | R | A | C | I | R | I |
| Reporting to BNM (if required) | I | R | I | I | A | C |
| Document review and sign-off | R | A | C | C | C | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Role | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | [Role] | Initial draft |
| 1.0 | [Date] | [Author Name] | Threat Intelligence Lead | Approved for release |
| [1.x] | [Date] | [Author Name] | [Role] | [Description of changes] |

### 8.2 Approval Sign-Off

*This document requires review and sign-off by the following parties prior to submission as a compliance artefact.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Threat Intelligence Lead | [Name] | | [Date] |
| SOC Manager | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Compliance / Risk Officer | [Name] | | [Date] |

> By signing this document, the approving parties confirm that the TIP configuration review has been conducted in accordance with [Organization Name]'s Threat Intelligence Policy, applicable internal standards, and the requirements of BNM RMiT Clause 11.19, and that the findings, evidence, and recommendations contained herein are accurate to the best of their knowledge.

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 11.19 | Threat intelligence requirements for licensed financial institutions, including IoC ingestion, management, operationalisation, and integration with security monitoring functions |
| BNM RMiT | Clause 11.1–11.18 | Broader cyber risk management context within which threat intelligence operates |
| [Organization Name] | Threat Intelligence Policy — [Policy ID] | Internal policy governing the acquisition, management, and use of threat intelligence |
| [Organization Name] | Cyber Security Framework — [Policy ID] | Overarching institutional cyber security governance framework |
| [Organization Name] | Incident Response Plan — [Policy ID] | Procedures for IoC-triggered incident response actions |
| MITRE | ATT&CK Framework (Enterprise) | Reference taxonomy for threat actor tactics, techniques, and procedures (TTPs) |
| OASIS | STIX 2.1 / TAXII 2.1 Standards | Structured threat intelligence expression and transport standards |
| CIS | CIS Controls v8, Control 17 | Incident Response Management guidance |
| NIST | SP 800-150 | Guide to Cyber Threat Information Sharing |

---

## Appendices

### Appendix A — TIP Platform Configuration Summary

*Attach or embed a sanitised export of the TIP platform's current configuration settings. Remove sensitive values (API keys, passwords) before inclusion in this document; reference the secure evidence repository for full configuration artefacts.*

> **[Attach: TIP Configuration Export — [Platform Name] — [Date]]**

| Configuration Parameter | Configured Value | Baseline / Expected Value | Compliant |
|---|---|---|---|
| Authentication Method | [Value] | MFA enforced | [ ] Y / N |
| Session Timeout (minutes) | [Value] | ≤ 15 minutes | [ ] Y / N |
| API Rate Limiting | [Value] | Enabled | [ ] Y / N |
| Audit Logging | [Value] | Enabled, forwarded to SIEM | [ ] Y / N |
| IoC Retention Period | [Value] | [Per policy, e.g., 12 months] | [ ] Y / N |
| TLS Version (API/UI) | [Value] | TLS 1.2 minimum | [ ] Y / N |
| Data Classification Tagging | [Value] | Enabled | [ ] Y / N |

### Appendix B — IoC Volume and Coverage Statistics

*Provide a statistical summary of IoC inventory and ingestion activity for the review period. This supports assessment of feed coverage and platform effectiveness.*

> **Review Period:** [Start Date] to [End Date]

| IoC Type | Total Active IoCs | New IoCs (Period) | Expired / Revoked (Period) | Downstream Blocks Triggered |
|---|---|---|---|---|
| IP Address | [Count] | [Count] | [Count] | [Count] |
| Domain / FQDN | [Count] | [Count] | [Count] | [Count] |
| URL | [Count] | [Count] | [Count] | [Count] |
| File Hash (MD5/SHA) | [Count] | [Count] | [Count] | [Count] |
| Email Address | [Count] | [Count] | [Count] | [Count] |
| CVE / Vulnerability | [Count] | [Count] | [Count] | [Count] |
| **Total** | **[Count]** | **[Count]** | **[Count]** | **[Count]** |

### Appendix C — Remediation Action Plan

*A detailed tracking table for all open remediation items raised in Section 6. This appendix should be updated at each subsequent review until all items are closed.*

| Rec. ID | Finding ID | Remediation Action | Assigned To | Target Date | Status | Closure Evidence | Closed Date |
|---|---|---|---|---|---|---|---|
| REC-001 | TIP-F001 | [Action] | [Owner] | [Date] | [ ] Open / In Progress / Closed | [Evidence Reference] | [Date] |
| REC-002 | TIP-F002 | [Action] | [Owner] | [Date] | [ ] Open / In Progress / Closed | [Evidence Reference] | [Date] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| IoC | Indicator of Compromise — observable artefacts (IP, domain, hash, etc.) that indicate a potential security incident |
| TIP | Threat Intelligence Platform — a system for aggregating, managing, and operationalising threat intelligence |
| STIX | Structured Threat Information Expression — a standardised language for cyber threat intelligence |
| TAXII | Trusted Automated eXchange of Intelligence Information — a transport protocol for sharing STIX data |
| TTP | Tactics, Techniques, and Procedures — categorisation of adversary behaviour per MITRE ATT&CK |
| SIEM | Security Information and Event Management |
| SOAR | Security Orchestration, Automation, and Response |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk for Malaysian financial institutions |
| BNM | Bank Negara Malaysia — the central bank and primary financial regulator of Malaysia |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name] and regulatory bodies with lawful access. Unauthorised disclosure, reproduction, or distribution is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Threat Intelligence Lead | [Organization Name]*