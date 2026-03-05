# Remote Access Configuration — Evidence Record

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document serves as an evidence record demonstrating that [Organization Name]'s remote access infrastructure — including Virtual Private Network (VPN) gateways, Multi-Factor Authentication (MFA) systems, and endpoint compliance controls — is configured and maintained in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT)** policy document, specifically **Clause 10.41**.

It is used to provide auditable evidence during internal reviews, external assessments, and regulatory examinations that remote access pathways are properly secured, monitored, and governed. This record is mandatory and must be produced per-event (following any significant configuration change or security incident) or at minimum on a **quarterly basis**.

**Scope of this record covers:**

- All VPN endpoints and concentrators in production use by [Organization Name]
- MFA mechanisms enforced across remote access channels
- Endpoint compliance posture checks applied prior to or during remote session establishment
- All user populations granted remote access privileges, including staff, contractors, and third parties

**Out of Scope:**

- Internal network access not traversing a remote access gateway
- [Any other explicitly excluded systems or user groups]

---

## 2. Assessment Scope and Criteria

*Define the specific systems, user groups, time periods, and compliance benchmarks evaluated in this evidence collection exercise. Reference applicable internal policies and regulatory thresholds.*

### 2.1 Systems and Components in Scope

| Component | System / Platform | Version | Environment | Custodian |
|---|---|---|---|---|
| VPN Gateway | [e.g., Cisco ASA / Palo Alto GlobalProtect / OpenVPN] | [Version] | Production | [Team/Owner] |
| MFA Provider | [e.g., Microsoft Authenticator / RSA SecurID / Duo Security] | [Version] | Production | [Team/Owner] |
| Endpoint Compliance Engine | [e.g., Microsoft Intune / CrowdStrike / Jamf] | [Version] | Production | [Team/Owner] |
| Identity Provider (IdP) | [e.g., Azure AD / Okta / AD FS] | [Version] | Production | [Team/Owner] |
| [Additional Component] | [System Name] | [Version] | [Environment] | [Team/Owner] |

### 2.2 User Populations in Scope

| User Category | Approximate Count | Access Method | MFA Required |
|---|---|---|---|
| Full-time employees (remote) | [Number] | [VPN / Zero Trust / etc.] | Yes / No |
| Contractors and vendors | [Number] | [VPN / Privileged Access / etc.] | Yes / No |
| Privileged / administrative users | [Number] | [Jump host / PAM / etc.] | Yes / No |
| Third-party service providers | [Number] | [Method] | Yes / No |

### 2.3 Compliance Criteria and Benchmarks

*List the specific configuration standards, baselines, or policy requirements against which evidence was collected.*

- **RMiT Clause 10.41** — Remote access controls and authentication requirements
- [Organization Name] Remote Access Policy v[X.X], dated [Date]
- [Organization Name] Information Security Policy v[X.X], dated [Date]
- [CIS Benchmark / NIST SP 800-46 / ISO 27001 Annex A.6.2 / Other applicable standard]
- BNM Operational Risk integrated requirements as applicable
- [Any additional internal or regulatory standard]

### 2.4 Assessment Period

| Parameter | Value |
|---|---|
| Evidence Collection Start Date | [DD MMM YYYY] |
| Evidence Collection End Date | [DD MMM YYYY] |
| Configuration Snapshot Date | [DD MMM YYYY] |
| Trigger for This Review | [Quarterly Schedule / Change Event / Incident / Audit Request] |

---

## 3. Methodology

*Describe how evidence was gathered, which tools or techniques were used, and how configuration data was validated. This section establishes the reliability and repeatability of the evidence collection process.*

### 3.1 Evidence Collection Approach

The following methodology was applied to gather and validate configuration evidence:

1. **Configuration Export** — Automated or manual export of running configuration files from VPN gateway, MFA provider, and endpoint compliance platforms.
2. **Screenshot Capture** — UI-based screenshots taken from administrative consoles to corroborate exported configuration data.
3. **Log Review** — Analysis of authentication and access logs over the review period to identify anomalies or policy deviations.
4. **Interview / Walkthrough** — Technical walkthrough conducted with the system custodian(s) to confirm operational settings align with documented configuration.
5. **Automated Compliance Scan** — [Tool name, e.g., Qualys / Nessus / Microsoft Secure Score] used to assess endpoint posture compliance.
6. **Policy Comparison** — Exported configurations cross-referenced against [Organization Name]'s Remote Access Policy and RMiT Clause 10.41 requirements.

### 3.2 Tools and Platforms Used

| Tool / Platform | Purpose | Version / Access Date |
|---|---|---|
| [VPN Admin Console / CLI] | Configuration export | [Date] |
| [MFA Admin Portal] | MFA policy and enrollment review | [Date] |
| [Endpoint MDM/EDR Console] | Compliance posture assessment | [Date] |
| [SIEM / Log Management Platform] | Authentication log analysis | [Date] |
| [Vulnerability Scanner] | Endpoint security baseline check | [Date] |
| [Screenshot Tool / Screen Recording] | UI evidence capture | [Date] |

### 3.3 Sampling Approach

*If a full population review was not conducted, describe sampling rationale.*

- **Full population review** conducted for: [e.g., all VPN gateway configurations]
- **Risk-based sampling** applied to: [e.g., endpoint compliance — [X]% of endpoints sampled, [N] devices]
- Sampling rationale: [Describe basis — e.g., random selection, highest-risk devices, or highest-privilege users]

---

## 4. Findings and Ratings

*Document each configuration area reviewed, the expected control state, the observed state, any gaps identified, and the assigned risk rating. Each finding must be traceable to evidence.*

### 4.1 Rating Scale

| Rating | Definition |
|---|---|
| **Compliant** | Configuration meets all applicable requirements. No gaps identified. |
| **Minor Gap** | Minor deviation noted; does not materially increase risk. Remediation recommended. |
| **Moderate Gap** | Partial non-compliance identified; elevated risk. Remediation required within defined timeframe. |
| **Critical Gap** | Significant non-compliance; material risk exposure. Immediate remediation required. |
| **Not Applicable** | Control is not applicable to this system or user population in scope. |

### 4.2 VPN Configuration Findings

| Control Area | Requirement | Observed Configuration | Rating | Finding Reference |
|---|---|---|---|---|
| Encryption protocol | TLS 1.2 or above enforced | [Observed value] | [Rating] | [EVD-001] |
| Split tunnelling | Disabled or restricted by policy | [Observed value] | [Rating] | [EVD-002] |
| Session timeout | Idle timeout ≤ [X] minutes | [Observed value] | [Rating] | [EVD-003] |
| Concurrent session limits | Max [N] sessions per user | [Observed value] | [Rating] | [EVD-004] |
| IP allowlisting / geo-restriction | Enforced / Not enforced | [Observed value] | [Rating] | [EVD-005] |
| VPN gateway patching | Current within [X] days of release | [Observed value] | [Rating] | [EVD-006] |
| Logging and monitoring enabled | All sessions logged to SIEM | [Observed value] | [Rating] | [EVD-007] |

### 4.3 Multi-Factor Authentication (MFA) Findings

| Control Area | Requirement | Observed Configuration | Rating | Finding Reference |
|---|---|---|---|---|
| MFA enforcement coverage | 100% of remote access users | [X]% enrolled and enforced | [Rating] | [EVD-008] |
| MFA method strength | TOTP / Hardware token / Push — phishing-resistant preferred | [Observed method(s)] | [Rating] | [EVD-009] |
| Fallback / bypass mechanisms | No SMS-only fallback; break-glass process documented | [Observed value] | [Rating] | [EVD-010] |
| MFA for privileged accounts | Enforced for all admin accounts | [Observed value] | [Rating] | [EVD-011] |
| Failed MFA lockout policy | Account lock after [N] failures | [Observed value] | [Rating] | [EVD-012] |
| MFA exemption process | Formal approval and time-bound | [Observed value] | [Rating] | [EVD-013] |

### 4.4 Endpoint Compliance Findings

| Control Area | Requirement | Observed Configuration | Rating | Finding Reference |
|---|---|---|---|---|
| Endpoint compliance check at connection | Pre-connect posture check enforced | [Observed value] | [Rating] | [EVD-014] |
| Antivirus / EDR active and current | Definitions ≤ [X] days old | [Observed value] | [Rating] | [EVD-015] |
| OS patching status | Critical patches applied within [X] days | [% compliant] | [Rating] | [EVD-016] |
| Disk encryption enforced | Full-disk encryption active | [% compliant] | [Rating] | [EVD-017] |
| Unmanaged / BYOD device handling | Blocked or restricted access profile | [Observed value] | [Rating] | [EVD-018] |
| Device certificate authentication | Certificates issued and validated | [Observed value] | [Rating] | [EVD-019] |

### 4.5 Overall Configuration Compliance Summary

| Domain | Total Controls Assessed | Compliant | Minor Gap | Moderate Gap | Critical Gap | Compliance Rate |
|---|---|---|---|---|---|---|
| VPN Configuration | [N] | [N] | [N] | [N] | [N] | [X]% |
| MFA Controls | [N] | [N] | [N] | [N] | [N] | [X]% |
| Endpoint Compliance | [N] | [N] | [N] | [N] | [N] | [X]% |
| **Overall** | **[N]** | **[N]** | **[N]** | **[N]** | **[N]** | **[X]%** |

---

## 5. Evidence Reviewed

*List all evidence artefacts collected and referenced in this record. Each item should include sufficient detail to allow an auditor to locate or reproduce the evidence.*

| Evidence ID | Description | Source System | Date Captured | Format | Retained By |
|---|---|---|---|---|---|
| EVD-001 | VPN gateway running configuration export | [System Name] | [DD MMM YYYY] | .txt / .pdf | [Location / DMS Reference] |
| EVD-002 | VPN encryption settings screenshot | [Admin Console] | [DD MMM YYYY] | .png / .pdf | [Location / DMS Reference] |
| EVD-003 | MFA enrollment and enforcement policy export | [MFA Platform] | [DD MMM YYYY] | .json / .pdf | [Location / DMS Reference] |
| EVD-004 | MFA coverage report — all users | [MFA Platform] | [DD MMM YYYY] | .csv / .pdf | [Location / DMS Reference] |
| EVD-005 | Endpoint compliance dashboard export | [MDM / EDR Platform] | [DD MMM YYYY] | .pdf / .xlsx | [Location / DMS Reference] |
| EVD-006 | Patch compliance status report | [Patch Management Tool] | [DD MMM YYYY] | .xlsx / .pdf | [Location / DMS Reference] |
| EVD-007 | Authentication log sample (30-day period) | [SIEM Platform] | [DD MMM YYYY] | .csv / .pdf | [Location / DMS Reference] |
| EVD-008 | Failed MFA attempt and lockout event log | [SIEM / IdP] | [DD MMM YYYY] | .csv / .pdf | [Location / DMS Reference] |
| EVD-009 | VPN session log sample | [VPN Platform / SIEM] | [DD MMM YYYY] | .csv / .pdf | [Location / DMS Reference] |
| EVD-010 | Disk encryption compliance report | [MDM Platform] | [DD MMM YYYY] | .pdf / .xlsx | [Location / DMS Reference] |
| [EVD-0XX] | [Additional evidence description] | [Source] | [Date] | [Format] | [Location] |

**Evidence Retention:** All evidence listed above is retained for a minimum of **[X] years** in accordance with [Organization Name]'s Records Retention Policy and BNM regulatory requirements.

---

## 6. Recommendations

*For each gap or risk identified, document a specific, actionable recommendation, an assigned owner, a target remediation date, and a priority level. This section drives the remediation workflow.*

### 6.1 Remediation Tracker

| Rec. ID | Finding Reference | Recommendation | Priority | Assigned Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | [EVD-XXX] | [Specific corrective action — e.g., "Disable split tunnelling on VPN profile [X] for contractor group"] | Critical / High / Medium / Low | [Name / Team] | [DD MMM YYYY] | Open / In Progress / Closed |
| REC-002 | [EVD-XXX] | [Specific corrective action] | [Priority] | [Name / Team] | [DD MMM YYYY] | [Status] |
| REC-003 | [EVD-XXX] | [Specific corrective action] | [Priority] | [Name / Team] | [DD MMM YYYY] | [Status] |
| REC-004 | [EVD-XXX] | [Specific corrective action] | [Priority] | [Name / Team] | [DD MMM YYYY] | [Status] |
| [REC-00X] | [EVD-XXX] | [Specific corrective action] | [Priority] | [Name / Team] | [DD MMM YYYY] | [Status] |

### 6.2 Strategic Recommendations

*Beyond point-in-time remediation, note any systemic improvements or longer-term enhancements recommended.*

- **[REC-STR-01]** — [e.g., "Migrate all VPN authentication to phishing-resistant MFA (FIDO2/hardware token) by [Target Date] to align with emerging BNM guidance on strong authentication."]
- **[REC-STR-02]** — [e.g., "Implement a continuous endpoint compliance monitoring dashboard integrated with SIEM to reduce reliance on periodic manual evidence collection."]
- **[REC-STR-03]** — [Additional strategic recommendation]

---

## 7. Roles and Responsibilities

*This RACI table defines accountability for the production, review, approval, and remediation activities associated with this evidence record.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Security Operations Manager | IT Infrastructure Team | Information Security / CISO | Internal Audit | Risk Management | Business Unit Heads | Compliance Officer |
|---|---|---|---|---|---|---|---|
| Define assessment scope and criteria | A/R | C | C | I | C | I | I |
| Collect configuration evidence | R | R | C | I | I | I | I |
| Perform gap analysis against RMiT 10.41 | A/R | C | C | I | C | I | C |
| Assign risk ratings to findings | A/R | C | A | C | C | I | C |
| Prepare draft evidence record | R | C | C | I | I | I | I |
| Review and validate evidence record | C | C | A | R | C | I | C |
| Approve evidence record | I | I | A | C | C | I | R |
| Implement remediation actions | C | R | C | I | I | I | I |
| Track and verify remediation closure | A/R | C | C | C | C | I | C |
| Retain evidence artefacts | R | C | C | I | I | I | I |
| Submit to regulator / external audit (if required) | C | I | C | C | I | I | A/R |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Author Name] | Initial document created |
| [X.X] | [DD MMM YYYY] | [Author Name] | [Description of changes] |
| [X.X] | [DD MMM YYYY] | [Author Name] | [Description of changes] |

### 8.2 Approval Sign-Off

*This evidence record requires formal sign-off from the designated approvers below before it is considered final and submitted for regulatory or audit purposes.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — Security Operations Manager | [Full Name] | __________________ | [DD MMM YYYY] |
| Reviewed By — Information Security / CISO | [Full Name] | __________________ | [DD MMM YYYY] |
| Approved By — Chief Risk Officer / CRO | [Full Name] | __________________ | [DD MMM YYYY] |
| Noted By — Compliance Officer | [Full Name] | __________________ | [DD MMM YYYY] |

---

## 9. References

| Reference | Description |
|---|---|
| BNM RMiT, Clause 10.41 | Remote access controls — authentication, encryption, and endpoint security requirements for financial institutions |
| BNM RMiT, Clause 10.1–10.5 | General Technology Risk Management obligations and governance framework |
| [Organization Name] Remote Access Policy v[X.X] | Internal policy governing permitted remote access methods, user obligations, and configuration standards |
| [Organization Name] Information Security Policy v[X.X] | Overarching information security governance document |
| [Organization Name] Acceptable Use Policy v[X.X] | User obligations for remote access and corporate device usage |
| NIST SP 800-46 Rev. 2 | Guide to Enterprise Telework, Remote Access, and BYOD Security |
| CIS Benchmark — [Relevant platform, e.g., CIS Cisco ASA Benchmark] | Industry configuration baseline used as supplementary assessment criteria |
| ISO/IEC 27001:2022, Annex A.8.20 / A.8.21 | Network security and security of network services |
| PDPA 2010 (Malaysia) | Personal data protection obligations relevant to remote access logging and data in transit |

---

## Appendices

### Appendix A — VPN Configuration Baseline Checklist

*Complete this checklist for each VPN gateway in scope. Retain the completed checklist as part of this evidence record.*

| # | Configuration Item | Expected State | Actual State | Pass / Fail | Notes |
|---|---|---|---|---|---|
| A1 | TLS version enforced | TLS 1.2 minimum | | | |
| A2 | Weak cipher suites disabled | No RC4, DES, 3DES, MD5 | | | |
| A3 | Perfect Forward Secrecy (PFS) enabled | Enabled | | | |
| A4 | Split tunnelling disabled | Disabled | | | |
| A5 | Idle session timeout | ≤ [X] minutes | | | |
| A6 | Maximum session duration | ≤ [X] hours | | | |
| A7 | Failed authentication lockout | After [N] attempts | | | |
| A8 | Logging to centralised SIEM | Enabled | | | |
| A9 | Administrative access restricted | IP allowlist / jump host | | | |
| A10 | Firmware / software current | ≤ [X] days post-release | | | |

---

### Appendix B — MFA Enrollment Status Summary

*Attach a redacted or aggregated export from the MFA platform confirming enrollment status across all in-scope user populations.*

| User Group | Total Users | MFA Enrolled | MFA Not Enrolled | Enrollment Rate | Exceptions Approved |
|---|---|---|---|---|---|
| Full-time employees | [N] | [N] | [N] | [X]% | [N] |
| Contractors | [N] | [N] | [N] | [X]% | [N] |
| Privileged users | [N] | [N] | [N] | [X]% | [N] |
| Third-party vendors | [N] | [N] | [N] | [X]% | [N] |
| **Total** | **[N]** | **[N]** | **[N]** | **[X]%** | **[N]** |

*[Attach: MFA Platform Enrollment Export — dated DD MMM YYYY]*

---

### Appendix C — Endpoint Compliance Posture Summary

*Attach a redacted export from the endpoint compliance or MDM platform. Summarise key posture metrics below.*

| Metric | Value | Threshold | Compliant? |
|---|---|---|---|
| Endpoints with active AV / EDR | [X]% | 100% | Yes / No |
| Endpoints with OS patch currency | [X]% | ≥ 95% | Yes / No |
| Endpoints with full-disk encryption | [X]% | 100% | Yes / No |
| Endpoints passing pre-connect posture check | [X]% | 100% | Yes / No |
| Non-compliant endpoints blocked from access | [N] | N/A | Yes / No |

*[Attach: Endpoint Compliance Dashboard Export — dated DD MMM YYYY]*

---

### Appendix D — MFA Exemption Register

*All active MFA exemptions must be documented here. No permanent exemptions are permitted. All exemptions require CISO approval and must be time-bound.*

| Exemption ID | User / Account | Business Justification | Approved By | Approval Date | Expiry Date | Compensating Controls |
|---|---|---|---|---|---|---|
| EXP-001 | [User / Account ID] | [Justification] | [Approver Name] | [Date] | [Date] | [Description] |
| [EXP-00X] | [User / Account ID] | [Justification] | [Approver Name] | [Date] | [Date] | [Description] |

---

*End of Document*

---

**Document Classification: Confidential**
*This document contains sensitive security configuration information. It must be handled, stored, and transmitted in accordance with [Organization Name]'s Information Classification Policy. Unauthorised disclosure is prohibited.*