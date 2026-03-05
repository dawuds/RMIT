# Session Configuration Evidence

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

---

## 1. Purpose and Scope

This document provides configuration evidence demonstrating that [Organization Name] has implemented and maintains appropriate session management controls across its technology systems in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.6**, which governs access control and session security requirements for financial institutions.

This artifact serves as audit evidence confirming that session timeout parameters, token configurations, and concurrent session controls are properly defined, enforced, and periodically reviewed to mitigate unauthorized access risks.

### 1.1 Scope

*Identify all systems, applications, and infrastructure components subject to session management controls. Include both internal and customer-facing systems.*

This evidence covers the following in-scope systems and environments:

| System / Application | Environment | System Owner | Criticality |
|---|---|---|---|
| [System Name 1] | [Production / UAT / DR] | [Owner Name] | [Critical / High / Medium / Low] |
| [System Name 2] | [Production / UAT / DR] | [Owner Name] | [Critical / High / Medium / Low] |
| [System Name 3] | [Production / UAT / DR] | [Owner Name] | [Critical / High / Medium / Low] |
| [Add rows as required] | | | |

### 1.2 Out of Scope

*List any systems explicitly excluded from this review and provide justification.*

- [System Name] — [Justification for exclusion]
- [System Name] — [Justification for exclusion]

---

## 2. Assessment Scope and Criteria

*Define the assessment boundaries, the specific configuration parameters evaluated, and the standards or thresholds applied to determine compliance.*

### 2.1 Assessment Period

| Field | Details |
|---|---|
| **Assessment Date** | [DD MMM YYYY] |
| **Evidence Collection Period** | [Start Date] to [End Date] |
| **Conducted By** | [Name / Team] |
| **Review Type** | [Scheduled Quarterly Review / Triggered Review / Post-Incident Review] |

### 2.2 Configuration Parameters Assessed

The following session management parameters were assessed across all in-scope systems:

| Parameter | Description | Required Standard |
|---|---|---|
| **Idle Session Timeout** | Maximum inactivity period before automatic session termination | [e.g., ≤ 15 minutes for privileged; ≤ 30 minutes for standard users] |
| **Absolute Session Timeout** | Maximum session duration regardless of activity | [e.g., ≤ 8 hours or as per system risk classification] |
| **Session Token Entropy** | Minimum bit-length and randomness of session tokens | [e.g., ≥ 128 bits, cryptographically secure PRNG] |
| **Token Expiry** | Validity period for authentication and session tokens (e.g., JWT, OAuth) | [e.g., Access token ≤ 15 minutes; Refresh token ≤ 24 hours] |
| **Concurrent Session Limit** | Maximum number of simultaneous active sessions per user | [e.g., 1 concurrent session for privileged accounts; ≤ 3 for standard] |
| **Session Invalidation on Logout** | Confirmation that server-side session tokens are destroyed upon logout | [Must be enforced] |
| **Session Fixation Protection** | New session token issued upon authentication | [Must be enforced] |
| **Secure Cookie Attributes** | HttpOnly, Secure, SameSite flags on session cookies | [All three flags must be set] |

### 2.3 Compliance Criteria

*State the pass/fail thresholds and the basis for each criterion.*

- Controls are assessed as **Compliant**, **Partially Compliant**, or **Non-Compliant** against the configuration standards defined in Section 2.2.
- Standards are derived from BNM RMiT Clause 12.6, [Organization Name] Access Control Policy ([Policy Reference]), and industry best practices (e.g., OWASP Session Management Cheat Sheet).
- Any deviation from defined standards constitutes a finding and must be accompanied by a remediation plan.

---

## 3. Methodology

*Describe the approach and techniques used to gather configuration evidence. Include tools, access methods, and sampling rationale.*

### 3.1 Evidence Collection Approach

The following methods were used to collect and validate session configuration evidence:

| Method | Description | Performed By |
|---|---|---|
| **Configuration Extract** | Direct extraction of session configuration files and parameter settings from application servers, web servers, and identity providers | [Name / Team] |
| **Admin Console Review** | Manual inspection of session settings via administrative consoles (e.g., IAM portals, application admin panels) | [Name / Team] |
| **Automated Scanning** | Automated tooling used to validate session security attributes (e.g., cookie flags, token validation) | [Tool Name / Team] |
| **Interview / Walkthrough** | Walkthrough sessions with system owners to confirm configurations reflect operational reality | [Name / Team] |
| **Log Sampling** | Review of authentication and session logs to verify timeout enforcement in practice | [Name / Team] |

### 3.2 Tools and Utilities Used

| Tool / Utility | Version | Purpose |
|---|---|---|
| [Tool Name, e.g., OWASP ZAP] | [Version] | [Purpose, e.g., automated session cookie analysis] |
| [Tool Name, e.g., Burp Suite] | [Version] | [Purpose] |
| [Tool Name, e.g., Internal Config Audit Script] | [Version] | [Purpose] |

### 3.3 Sampling Rationale

*If a sampling approach was used (e.g., not all user accounts were tested), document the rationale here.*

- [Describe sampling methodology, e.g., "All privileged accounts were included in scope. For standard user accounts, a random sample of [n] accounts representing [%] of the population was selected."]

---

## 4. Findings and Ratings

*Document the results of the configuration review for each in-scope system. Each finding should be clearly linked to a parameter and system.*

### 4.1 Summary of Findings

| Finding ID | System | Parameter | Observed Configuration | Required Standard | Status | Risk Rating |
|---|---|---|---|---|---|---|
| F-001 | [System Name] | [e.g., Idle Session Timeout] | [e.g., 60 minutes] | [e.g., ≤ 30 minutes] | [Compliant / Non-Compliant] | [Critical / High / Medium / Low] |
| F-002 | [System Name] | [e.g., Concurrent Sessions] | [e.g., Unlimited] | [e.g., ≤ 3] | [Non-Compliant] | [High] |
| F-003 | [System Name] | [e.g., Secure Cookie Flags] | [e.g., HttpOnly missing] | [All flags set] | [Non-Compliant] | [High] |
| [Add rows as required] | | | | | | |

**Summary Count:**

| Status | Count |
|---|---|
| Compliant | [n] |
| Partially Compliant | [n] |
| Non-Compliant | [n] |
| **Total Parameters Assessed** | **[n]** |

### 4.2 Detailed Findings

*For each non-compliant or partially compliant finding, provide a detailed description below.*

#### Finding F-001: [Short Title]

| Field | Details |
|---|---|
| **System Affected** | [System Name] |
| **Parameter** | [Parameter Name] |
| **Observed Value** | [Observed configuration value] |
| **Required Value** | [Expected configuration value] |
| **Risk Description** | [Describe the risk posed by this misconfiguration] |
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Evidence Reference** | [Reference to Appendix or evidence artifact, e.g., Appendix A, Screenshot 1] |
| **Remediation Owner** | [Name / Team] |
| **Target Remediation Date** | [DD MMM YYYY] |

> *Repeat this subsection for each non-compliant finding.*

---

## 5. Evidence Reviewed

*List all configuration artifacts, screenshots, logs, and documentation reviewed as part of this assessment.*

### 5.1 Configuration Artifacts

| Evidence ID | Description | System | File / Reference | Date Captured | Captured By |
|---|---|---|---|---|---|
| E-001 | [e.g., Application server session configuration file] | [System Name] | [File path / Appendix ref] | [DD MMM YYYY] | [Name] |
| E-002 | [e.g., IAM portal session policy screenshot] | [System Name] | [Appendix ref] | [DD MMM YYYY] | [Name] |
| E-003 | [e.g., Token expiry configuration — OAuth server] | [System Name] | [Appendix ref] | [DD MMM YYYY] | [Name] |
| E-004 | [e.g., Authentication log sample showing timeout enforcement] | [System Name] | [Appendix ref] | [DD MMM YYYY] | [Name] |
| [Add rows as required] | | | | | |

### 5.2 Supporting Documentation

| Document | Reference | Version / Date |
|---|---|---|
| [Organization Name] Access Control Policy | [Policy ID] | [Version / Date] |
| [Organization Name] Information Security Policy | [Policy ID] | [Version / Date] |
| System Security Architecture Document — [System Name] | [Document ID] | [Version / Date] |
| Previous Session Configuration Evidence | [Document ID] | [Date] |

---

## 6. Recommendations

*For each finding rated Non-Compliant or Partially Compliant, provide specific, actionable remediation recommendations.*

### 6.1 Remediation Plan

| Finding ID | Recommendation | Priority | Responsible Party | Target Date | Status |
|---|---|---|---|---|---|
| F-001 | [Specific remediation action, e.g., "Reduce idle session timeout from 60 to 15 minutes for privileged accounts in [System Name] by updating application.properties parameter session.idle.timeout."] | [Immediate / High / Medium / Low] | [Name / Team] | [DD MMM YYYY] | [Open / In Progress / Closed] |
| F-002 | [Specific remediation action] | [Priority] | [Name / Team] | [DD MMM YYYY] | [Open / In Progress / Closed] |
| F-003 | [Specific remediation action] | [Priority] | [Name / Team] | [DD MMM YYYY] | [Open / In Progress / Closed] |

### 6.2 Management Response

*Document the formal response from system or department owners regarding accepted findings and remediation commitments.*

> [Management Response Text — e.g., "[Department/System Owner Name] accepts the findings above and commits to remediating all High and Critical items by [Date]. Residual risk for items pending remediation has been acknowledged by [Name/Title]."]

**Acknowledged By:** [Name, Title]
**Date:** [DD MMM YYYY]

---

## 7. Roles and Responsibilities

*The following RACI table defines accountability for session configuration management and evidence activities.*

| Activity | IT Security / CISO | System Owner | Application Dev / Ops | IT Audit / Compliance | Risk Management | [Other] |
|---|---|---|---|---|---|---|
| Define session management standards | A | C | C | C | C | |
| Implement session configurations | C | A | R | I | I | |
| Conduct periodic configuration review | R | C | C | A | I | |
| Collect and maintain configuration evidence | R | C | C | A | I | |
| Review and validate findings | A | R | C | R | C | |
| Approve remediation plans | A | R | I | C | C | |
| Track remediation to closure | C | R | R | A | I | |
| Submit evidence to regulators / auditors | R | C | I | A | I | |
| Approve this document | I | I | I | C | C | A (CISO / DH) |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Author Name] | Initial document |
| [1.1] | [DD MMM YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD MMM YYYY] | [Author Name] | [Description of changes] |

### 8.2 Approval Sign-Off

*This document requires formal sign-off from the designated approvers prior to submission as regulatory evidence.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Preparer | [Name, Title] | | [DD MMM YYYY] |
| Reviewer — IT Security | [Name, Title] | | [DD MMM YYYY] |
| Reviewer — IT Audit / Compliance | [Name, Title] | | [DD MMM YYYY] |
| Approver — [Relevant Department Head] | [Name, Title] | | [DD MMM YYYY] |
| Noted By — Chief Information Security Officer | [Name, Title] | | [DD MMM YYYY] |

---

## 9. References

The following regulatory frameworks, policy documents, and standards inform the requirements addressed by this artifact:

| Reference | Clause / Section | Description |
|---|---|---|
| BNM Risk Management in Technology (RMiT) Policy Document | **Clause 12.6** | Access control requirements including session management, timeout controls, and authentication token governance for financial institutions |
| BNM RMiT Policy Document | Clause 12.1 – 12.5 | Broader access control and identity management requirements providing context for session controls |
| Personal Data Protection Act 2010 (PDPA) | Section 9 (Security Principle) | Obligation to protect personal data from unauthorized access, including through session management |
| NACSA Cybersecurity Framework | [Relevant Section] | National cybersecurity baseline controls applicable to Critical National Information Infrastructure (CNII) |
| OWASP Session Management Cheat Sheet | N/A | Industry best practice reference for session configuration standards |
| ISO/IEC 27001:2022 | Annex A, Control 8.3 | Information access restriction including session and access controls |
| [Organization Name] Access Control Policy | [Policy ID] | Internal policy defining organization-specific session management requirements |
| [Organization Name] Information Security Policy | [Policy ID] | Overarching information security obligations |

---

## Appendices

### Appendix A — Configuration Screenshots and Extracts

*Attach or embed screenshots and configuration file extracts referenced in Section 5. Each exhibit should be clearly labelled with an Evidence ID corresponding to the table in Section 5.1.*

| Exhibit | Description | System | Date |
|---|---|---|---|
| Exhibit A-1 | [Description of screenshot/extract] | [System Name] | [Date] |
| Exhibit A-2 | [Description of screenshot/extract] | [System Name] | [Date] |
| [Add as required] | | | |

---

### Appendix B — Session Configuration Baseline Standards

*Attach the approved baseline configuration standard document or table referenced during this assessment, if maintained separately from this evidence record.*

> [Reference to [Organization Name] Session Management Baseline Standard, [Document ID], [Version], or reproduce the baseline table here if no standalone document exists.]

---

### Appendix C — Remediation Evidence (Post-Closure)

*Upon completion of remediation activities, attach supporting evidence confirming corrective actions have been implemented for each finding.*

| Finding ID | Remediation Evidence Description | Date Closed | Verified By |
|---|---|---|---|
| F-001 | [e.g., Updated configuration file, post-change screenshot] | [DD MMM YYYY] | [Name] |
| F-002 | [Description] | [DD MMM YYYY] | [Name] |
| F-003 | [Description] | [DD MMM YYYY] | [Name] |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Idle Session Timeout** | The period of user inactivity after which an active session is automatically terminated by the system. |
| **Absolute Session Timeout** | The maximum duration a session may remain active regardless of user activity. |
| **Session Token** | A unique identifier issued by the server to maintain session state for an authenticated user. |
| **Concurrent Session** | A scenario in which the same user account has more than one active session simultaneously. |
| **Session Fixation** | An attack where an adversary sets or predicts a session token prior to authentication; mitigated by issuing a new token upon login. |
| **HttpOnly Flag** | A cookie attribute preventing client-side scripts from accessing the session cookie, mitigating XSS-based session hijacking. |
| **Secure Flag** | A cookie attribute ensuring the session cookie is only transmitted over HTTPS connections. |
| **RMiT** | Risk Management in Technology — the BNM policy document governing technology risk management for licensed financial institutions in Malaysia. |
| **CISO** | Chief Information Security Officer. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework. |

---

*This document is classified **Confidential** and is intended solely for internal use and regulatory submission by [Organization Name]. Unauthorized disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Last Review Date]*