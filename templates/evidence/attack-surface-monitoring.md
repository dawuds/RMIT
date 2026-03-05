# Attack Surface Monitoring — Evidence of Continuous External Attack Surface Monitoring

---

| Field | Details |
|---|---|
| **Document ID** | [DOC-ID-ASM-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head — e.g., Head of Information Security / CISO] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Quarterly] |
| **Approved By** | [Approved By] |
| **RMiT Clause(s)** | 11.20 |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Evidence Reviewed](#5-evidence-reviewed)
6. [Recommendations](#6-recommendations)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as formal evidence that [Organization Name] maintains a continuous attack surface monitoring programme in compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.20. It records the scope, methodology, findings, and remediation activities associated with the ongoing monitoring of the institution's external-facing technology assets and exposure points.

This artifact is produced on a continuous monitoring basis and formally reviewed and consolidated on a **quarterly** cycle. It is maintained by [Relevant Department Head] and made available for internal audit, regulatory examination, and senior management oversight.

### 1.2 Scope

*Define the boundaries of the attack surface monitoring programme. Specify which systems, environments, and asset types are included and excluded.*

The scope of this attack surface monitoring programme encompasses:

- **Included Assets:**
  - All externally resolvable IP addresses and domains owned or operated by [Organization Name]
  - Internet-facing web applications, APIs, and portals
  - Cloud-hosted workloads with public endpoints (IaaS, PaaS, SaaS with direct exposure)
  - Remote access infrastructure (VPN gateways, jump hosts, RDP/SSH endpoints)
  - Email infrastructure (MX records, SPF/DKIM/DMARC posture)
  - Third-party and vendor-managed assets within the institution's namespace or supply chain
  - Shadow IT and unmanaged assets discovered through reconnaissance

- **Excluded Assets:**
  - Purely internal systems with no external network path (unless identified during reconnaissance)
  - [List any other explicitly excluded systems with documented rationale]

- **Regulatory Basis:** BNM RMiT Clause 11.20 — Financial institutions are required to maintain continuous visibility over their external attack surface to identify and remediate vulnerabilities before they can be exploited.

- **Review Period Covered:** [Start Date] to [End Date]

---

## 2. Assessment Scope and Criteria

### 2.1 Asset Inventory and Classification

*List the asset categories and individual assets subject to monitoring during this review period. Assets should be classified by criticality and exposure level.*

| Asset ID | Asset Name / Description | Asset Type | Criticality | External Exposure | Responsible Team |
|---|---|---|---|---|---|
| AST-001 | [e.g., Customer Internet Banking Portal] | Web Application | Critical | Yes | [Team Name] |
| AST-002 | [e.g., Public-Facing API Gateway] | API Endpoint | Critical | Yes | [Team Name] |
| AST-003 | [e.g., Corporate Website] | Web Application | Medium | Yes | [Team Name] |
| AST-004 | [e.g., VPN Concentrator] | Network Infrastructure | High | Yes | [Team Name] |
| AST-005 | [e.g., Mail Gateway (MX)] | Email Infrastructure | High | Yes | [Team Name] |
| AST-006 | [e.g., Cloud Storage Buckets] | Cloud Asset | High | Conditional | [Team Name] |
| [AST-XXX] | [Asset Description] | [Type] | [Critical/High/Medium/Low] | [Yes/No/Conditional] | [Team Name] |

**Total Assets in Scope:** [Number]

### 2.2 Assessment Criteria

*Define the criteria and thresholds used to evaluate exposure risk. These criteria should align with the institution's risk appetite.*

Assessments are evaluated against the following criteria:

| Criterion | Description | Threshold / Standard |
|---|---|---|
| **Exposure Severity** | Degree to which an asset is publicly accessible without authentication | All unauthenticated services must be documented and justified |
| **Vulnerability Criticality** | CVSS score of identified vulnerabilities | Critical (9.0–10.0): remediate within 24 hours; High (7.0–8.9): 7 days; Medium (4.0–6.9): 30 days |
| **Configuration Hygiene** | Presence of misconfigurations (open ports, default credentials, expired certificates) | Zero tolerance for known-default credentials; certificates must not be within 30 days of expiry |
| **Data Exposure Risk** | Risk of sensitive data (PII, financial records) being accessible externally | All data classified Confidential or above must not be externally accessible without MFA |
| **Third-Party Risk** | Exposure introduced via vendor or supply-chain assets | Vendor assets within scope must meet equivalent controls |
| **Compliance Alignment** | Adherence to BNM RMiT, PDPA, and internal security standards | Full compliance required; exceptions require documented risk acceptance |

---

## 3. Methodology

### 3.1 Monitoring Approach

*Describe the tools, techniques, and processes used to continuously monitor the external attack surface. Include both automated and manual components.*

[Organization Name] employs a layered, continuous monitoring approach comprising automated tooling, scheduled scans, and analyst-driven threat intelligence activities.

#### 3.1.1 Automated Continuous Monitoring

| Tool / Platform | Function | Frequency | Managed By |
|---|---|---|---|
| [Tool Name — e.g., Shodan Monitor / Censys] | Internet-wide asset discovery and exposure detection | Continuous (real-time alerts) | [Team] |
| [Tool Name — e.g., Qualys / Tenable.io] | External vulnerability scanning | Weekly automated scans | [Team] |
| [Tool Name — e.g., SecurityTrails / RiskIQ] | DNS and subdomain monitoring, certificate transparency | Continuous | [Team] |
| [Tool Name — e.g., UpGuard / BitSight] | Third-party and vendor attack surface rating | Weekly | [Team] |
| [Tool Name — e.g., SIEM Platform] | Correlation of external threat indicators with internal telemetry | Continuous | [Team] |

#### 3.1.2 Scheduled Assessments

| Assessment Type | Frequency | Performed By | Last Conducted |
|---|---|---|---|
| External Penetration Test | Annual (minimum) | [Internal Red Team / Named Third Party] | [Date] |
| External Vulnerability Scan | Weekly | [Team Name] | [Date] |
| Certificate Expiry Audit | Monthly | [Team Name] | [Date] |
| DNS / Subdomain Enumeration | Weekly | [Team Name] | [Date] |
| Cloud Posture Assessment | Monthly | [Team Name] | [Date] |

#### 3.1.3 Threat Intelligence Integration

*Describe how external threat intelligence feeds inform the monitoring process.*

- Threat feeds consumed: [e.g., BNM FSI-ISAC, NACSA CERT feeds, commercial CTI platform]
- Integration method: [e.g., STIX/TAXII into SIEM, manual IOC ingestion]
- Indicators actioned this period: [Number]

### 3.2 Asset Discovery Process

*Describe how new or previously unknown assets are discovered and onboarded into the monitoring scope.*

1. Automated domain and IP reconnaissance performed against [Organization Name]'s registered namespaces
2. Certificate Transparency logs monitored for new certificates issued under owned domains
3. Cloud provider APIs queried for newly provisioned public-facing resources
4. Discovered assets reviewed by [Team] and classified within [X] business days
5. Unrecognised assets escalated to asset owners for validation or removal

---

## 4. Findings and Ratings

### 4.1 Summary Dashboard

*Provide a high-level summary of the attack surface posture for the review period. This section should be suitable for senior management reporting.*

| Metric | Current Period | Previous Period | Trend |
|---|---|---|---|
| Total External Assets Monitored | [Number] | [Number] | [↑ / ↓ / →] |
| New Assets Discovered (unregistered) | [Number] | [Number] | [↑ / ↓ / →] |
| Open Critical Vulnerabilities | [Number] | [Number] | [↑ / ↓ / →] |
| Open High Vulnerabilities | [Number] | [Number] | [↑ / ↓ / →] |
| Expired / Expiring Certificates (<30 days) | [Number] | [Number] | [↑ / ↓ / →] |
| Misconfigured Services Identified | [Number] | [Number] | [↑ / ↓ / →] |
| Findings Remediated This Period | [Number] | [Number] | [↑ / ↓ / →] |
| Mean Time to Remediate (Critical) | [X days] | [X days] | [↑ / ↓ / →] |
| Overall Attack Surface Risk Rating | [Critical / High / Medium / Low] | [Rating] | [↑ / ↓ / →] |

**Overall Risk Rating Rationale:** *[Provide a brief narrative justification for the overall rating assigned above.]*

### 4.2 Detailed Findings

*List all findings identified during this review period. Each finding must include a severity rating, impacted asset, description, and current status.*

| Finding ID | Asset ID | Finding Title | Severity | CVSS Score | Discovery Date | Status | Target Remediation Date |
|---|---|---|---|---|---|---|---|
| FIND-001 | AST-001 | [e.g., Exposed Admin Interface Without MFA] | Critical | [Score] | [Date] | [Open / In Progress / Remediated / Risk Accepted] | [Date] |
| FIND-002 | AST-004 | [e.g., Outdated TLS 1.0 Supported on VPN] | High | [Score] | [Date] | [Status] | [Date] |
| FIND-003 | AST-006 | [e.g., Public S3 Bucket with Non-Public Data] | Critical | [Score] | [Date] | [Status] | [Date] |
| FIND-004 | AST-003 | [e.g., SSL Certificate Expiring in 15 Days] | Medium | N/A | [Date] | [Status] | [Date] |
| [FIND-XXX] | [AST-XXX] | [Finding Description] | [Severity] | [Score] | [Date] | [Status] | [Date] |

### 4.3 Risk Ratings Explanation

| Rating | CVSS Range | Description | Required Remediation SLA |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Immediate exploitation risk; active exploitation may be in progress | 24 hours |
| **High** | 7.0 – 8.9 | Significant exposure; likely to be exploited if not remediated | 7 calendar days |
| **Medium** | 4.0 – 6.9 | Moderate exposure; exploitation requires specific conditions | 30 calendar days |
| **Low** | 0.1 – 3.9 | Minimal direct risk; remediation as part of regular patching | 90 calendar days |
| **Informational** | N/A | No direct risk; noted for awareness and best-practice alignment | Next scheduled maintenance window |

---

## 5. Evidence Reviewed

*List all evidence sources, scan outputs, reports, and artefacts reviewed in producing this document. Evidence must be retained and available for audit.*

### 5.1 Evidence Register

| Evidence ID | Evidence Type | Description | Source System / Tool | Date Generated | Retention Location | Retained By |
|---|---|---|---|---|---|---|
| EVD-001 | Scan Report | External vulnerability scan output — [Date] | [Tool Name] | [Date] | [Repository Path / ISMS Reference] | [Team] |
| EVD-002 | Asset Discovery Log | Subdomain enumeration results | [Tool Name] | [Date] | [Location] | [Team] |
| EVD-003 | Certificate Report | TLS certificate inventory and expiry status | [Tool Name] | [Date] | [Location] | [Team] |
| EVD-004 | Threat Intelligence Report | CTI feed summary and actioned indicators | [CTI Platform] | [Date] | [Location] | [Team] |
| EVD-005 | Penetration Test Report | External penetration test final report | [Testing Entity] | [Date] | [Location] | [Team] |
| EVD-006 | Cloud Posture Report | Cloud security configuration assessment | [Tool Name] | [Date] | [Location] | [Team] |
| EVD-007 | Remediation Tickets | Vulnerability remediation tracking records | [Ticketing System — e.g., Jira / ServiceNow] | [Date] | [Location] | [Team] |
| [EVD-XXX] | [Type] | [Description] | [Source] | [Date] | [Location] | [Team] |

### 5.2 Evidence Retention

All evidence referenced in this document is retained in accordance with [Organization Name]'s Records Management Policy [POLICY-REF] for a minimum period of **[X years]**, consistent with BNM RMiT and PDPA requirements. Evidence is stored in [Document Management System / ISMS Repository] and access is restricted to authorized personnel.

---

## 6. Recommendations

### 6.1 Immediate Actions Required

*List findings that require urgent action. These should correspond to Critical and High severity findings from Section 4.*

| Recommendation ID | Related Finding | Recommended Action | Priority | Responsible Owner | Target Date |
|---|---|---|---|---|---|
| REC-001 | FIND-001 | [e.g., Disable public access to admin interface; enforce MFA immediately] | Critical | [Owner Name / Role] | [Date] |
| REC-002 | FIND-003 | [e.g., Set S3 bucket ACL to private; review IAM policies] | Critical | [Owner Name / Role] | [Date] |
| REC-003 | FIND-002 | [e.g., Disable TLS 1.0 and 1.1 on all external endpoints; enforce TLS 1.2 minimum] | High | [Owner Name / Role] | [Date] |
| [REC-XXX] | [FIND-XXX] | [Recommended Action] | [Priority] | [Owner] | [Date] |

### 6.2 Strategic Recommendations

*Describe longer-term programme improvements identified during this review period.*

1. **Attack Surface Management Platform Enhancement:** *[e.g., Evaluate and procure a dedicated EASM platform to replace manual tooling; consolidate asset discovery and vulnerability correlation into a single pane of glass.]*

2. **Shadow IT Governance:** *[e.g., Implement a formal process for cloud asset registration to prevent unmanaged assets from being provisioned with external exposure.]*

3. **Third-Party Attack Surface:** *[e.g., Extend monitoring scope to cover critical third-party vendors; incorporate vendor security ratings into the quarterly reporting cycle.]*

4. **Remediation SLA Compliance:** *[e.g., Current Mean Time to Remediate for High severity findings exceeds the 7-day SLA. Recommend process review and executive escalation path for overdue items.]*

5. **[Additional Recommendation]:** *[Description and rationale.]*

### 6.3 Risk Acceptance Register

*Document any findings for which remediation has been formally deferred and risk accepted by an authorised approver.*

| Finding ID | Risk Description | Business Justification | Risk Owner | Acceptance Date | Expiry Date | Approved By |
|---|---|---|---|---|---|---|
| [FIND-XXX] | [Description of residual risk] | [Business reason for deferral] | [Risk Owner] | [Date] | [Date] | [Approver Name / Role] |

---

## 7. Roles and Responsibilities

*This section defines accountability for attack surface monitoring activities in accordance with BNM RMiT governance requirements.*

### 7.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO / Head of IS | Security Operations | IT Infrastructure | Risk Management | Internal Audit | Senior Management |
|---|---|---|---|---|---|---|
| Define monitoring scope and criteria | A | R | C | C | I | I |
| Operate continuous monitoring tools | I | R | C | I | I | I |
| Conduct external vulnerability scans | C | R | C | I | I | I |
| Asset discovery and classification | A | R | R | I | I | I |
| Analyse and triage findings | A | R | C | C | I | I |
| Assign and track remediation actions | A | R | R | C | I | I |
| Perform remediation activities | I | C | R | I | I | I |
| Produce quarterly consolidated report | A | R | C | C | I | I |
| Review and approve quarterly report | A | I | I | C | C | I |
| Escalate critical findings | R | R | C | A | I | I |
| Present findings to Board / EXCO | A | C | I | C | I | R |
| Maintain evidence archive | C | R | C | I | A | I |

### 7.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Document Owner | [Name] | [Department] | [Email] |
| CISO | [Name] | Information Security | [Email] |
| Head of Security Operations | [Name] | Information Security | [Email] |
| IT Infrastructure Lead | [Name] | IT | [Email] |
| Risk Management Representative | [Name] | Risk | [Email] |
| Internal Audit Representative | [Name] | Internal Audit | [Email] |

---

## 8. Review and Approval

### 8.1 Review Cycle

This document is subject to:

- **Continuous Monitoring:** Automated tooling operates on a real-time or near-real-time basis; findings are updated in the evidence register as they arise.
- **Quarterly Formal Review:** A consolidated review is conducted every quarter by [Relevant Department Head] and presented to [Governance Committee — e.g., IT Risk Committee / EXCO].
- **Ad Hoc Review:** This document must be reviewed immediately upon discovery of a Critical severity finding, a significant change to the external attack surface, or a material cyber security incident.

### 8.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document created |
| [X.X] | [Date] | [Author Name] | [Description of changes] |

### 8.3 Approval Sign-Off

*This document requires formal sign-off from the following roles prior to submission for regulatory purposes or distribution to senior governance committees.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], [Title] | _________________________ | [Date] |
| Reviewed By | [Name], [Title — e.g., Head of Security Operations] | _________________________ | [Date] |
| Approved By | [Name], [Title — e.g., CISO] | _________________________ | [Date] |
| Endorsed By | [Name], [Title — e.g., CRO / CTO] | _________________________ | [Date] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 11.20 | Requirement for financial institutions to maintain continuous monitoring of the external attack surface, including identification and timely remediation of vulnerabilities |
| BNM RMiT | Clause 11.1 – 11.5 | General technology risk management principles underpinning the monitoring programme |
| BNM RMiT | Clause 11.17 – 11.19 | Vulnerability and patch management requirements complementary to attack surface monitoring |
| PDPA 2010 | Part II, Section 5 | General data protection principles relevant to handling of PII identified during monitoring activities |
| NACSA | National Cyber Security Policy | National-level requirements for cyber threat monitoring applicable to Critical National Information Infrastructure (CNII) entities |
| ISO/IEC 27001:2022 | Annex A, Control 8.8 | Management of technical vulnerabilities |
| [Internal Policy] | [Policy ID] | [Organization Name] Information Security Policy |
| [Internal Policy] | [Policy ID] | [Organization Name] Vulnerability Management Standard |
| [Internal Policy] | [Policy ID] | [Organization Name] Risk Acceptance Policy |

---

## 10. Appendices

### Appendix A — Asset Inventory (Full)

*Attach or reference the complete asset inventory maintained by [Team Name]. The inventory must include all externally-facing assets within the defined scope, their classification, responsible owner, and monitoring status.*

> **Reference:** [Asset Inventory Document ID / Repository Link]

### Appendix B — Scan Tool Configuration and Evidence

*Provide configuration details for all automated monitoring tools used during this review period, including scan profiles, target IP ranges/domains, and authenticated vs. unauthenticated scan settings. Attach scan output files or reference their location in the evidence repository.*

> **Reference:** [EVD-001, EVD-002, EVD-006 — see Section 5.1]

### Appendix C — Remediation Tracker

*Attach or reference the live remediation tracking register maintained in [Ticketing System]. The tracker must show all open, in-progress, and closed findings with current status, assigned owner, and target/actual remediation dates.*

> **Reference:** [Ticketing System Project Link / Report Export ID]

### Appendix D — Penetration Test Executive Summary

*Attach the Executive Summary of the most recent external penetration test report. The full report is classified **Restricted** and held separately by [Team Name].*

> **Reference:** [EVD-005 — Penetration Test Report, [Testing Entity], [Date]]

### Appendix E — Risk Acceptance Approvals

*Attach signed risk acceptance forms for all findings listed in Section 6.3 where remediation has been formally deferred. Each form must bear the signature of the authorised risk acceptor and specify the acceptance expiry date.*

> **Reference:** [Risk Acceptance Register — [System / Document Reference]]

### Appendix F — Glossary

| Term | Definition |
|---|---|
| **Attack Surface** | The sum of all externally accessible points (attack vectors) where an unauthorized user could attempt to enter or extract data from an environment |
| **EASM** | External Attack Surface Management — the continuous discovery, inventory, classification, and monitoring of an organisation's externally-facing digital assets |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the severity of software vulnerabilities |
| **Shadow IT** | Technology systems, solutions, or software used within an organisation without explicit organisational approval |
| **CTI** | Cyber Threat Intelligence — evidence-based knowledge about existing or emerging threats to information assets |
| **MTTR** | Mean Time to Remediate — the average time taken to fully remediate an identified vulnerability from the date of discovery |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |
| **NACSA** | National Cyber Security Agency (Malaysia) |

---

*This document is classified **Confidential** and intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. Queries regarding this document should be directed to [Document Owner Name] at [Contact Email].*

*Document ID: [DOC-ID-ASM-001] | Version: 1.0 | Last Updated: [Last Review Date]*