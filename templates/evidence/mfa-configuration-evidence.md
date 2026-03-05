# MFA Configuration Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document serves as the formal evidence record for Multi-Factor Authentication (MFA) configuration and enforcement across [Organization Name]'s technology environment. It consolidates system-generated screenshots, audit logs, and configuration exports demonstrating compliance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, specifically **Clause 10.54**, which mandates the implementation of strong authentication controls for access to critical systems and sensitive data.

**Scope of Coverage:**

- All privileged and administrative accounts
- Remote access and VPN gateways
- Internet-facing applications and portals
- Critical internal systems as defined in the asset register
- Cloud service provider consoles and management planes
- Third-party vendor access channels

This evidence package is mandatory and subject to continuous monitoring with formal quarterly review by the IAM Manager. Evidence collected herein may be presented to Bank Negara Malaysia (BNM), internal audit, external auditors, or the National Cyber Security Agency (NACSA) upon request.

---

## 2. Asset / Item Identification

*List all in-scope systems, applications, and platforms for which MFA configuration evidence has been collected. Each asset entry must correspond to at least one evidence item referenced in Section 6.*

| Asset ID | System / Application Name | System Type | Hosting Model | Criticality | Evidence Reference |
|---|---|---|---|---|---|
| [ASSET-001] | [System Name, e.g., Active Directory / Entra ID] | Identity Provider | [On-Premises / Cloud / Hybrid] | [Critical / High / Medium] | [EVID-001] |
| [ASSET-002] | [System Name, e.g., Core Banking System] | Core Business Application | [On-Premises / Cloud / Hybrid] | [Critical / High / Medium] | [EVID-002] |
| [ASSET-003] | [System Name, e.g., VPN Gateway] | Remote Access | [On-Premises / Cloud / Hybrid] | [Critical / High / Medium] | [EVID-003] |
| [ASSET-004] | [System Name, e.g., Cloud Management Console] | Infrastructure Management | [On-Premises / Cloud / Hybrid] | [Critical / High / Medium] | [EVID-004] |
| [ASSET-005] | [Add rows as required] | | | | |

**Total Assets in Scope:** [Number]

**Assets with MFA Fully Enforced:** [Number]

**Assets with MFA Partially Enforced (Exception Registered):** [Number]

**Assets Pending MFA Rollout (Remediation Plan in Place):** [Number]

---

## 3. Classification and Categorisation

*Classify and categorise all MFA implementations by authentication factor type, enforcement mechanism, and user population. This section substantiates the technical adequacy of controls against RMiT requirements.*

### 3.1 MFA Factor Classification

| Factor Type | Description | Examples Deployed | In-Scope Assets |
|---|---|---|---|
| **Knowledge Factor (Something You Know)** | Password, PIN | [e.g., AD Password Policy] | [Asset IDs] |
| **Possession Factor (Something You Have)** | OTP token, authenticator app, hardware key | [e.g., Microsoft Authenticator, RSA SecurID, YubiKey] | [Asset IDs] |
| **Inherence Factor (Something You Are)** | Biometrics | [e.g., Fingerprint, Face ID] | [Asset IDs] |

### 3.2 MFA Enforcement Categorisation

| Category | Definition | Systems Applicable |
|---|---|---|
| **Mandatory — All Users** | MFA enforced for 100% of user accounts with no bypass permitted | [Asset IDs] |
| **Mandatory — Privileged Users Only** | MFA enforced for administrative and privileged roles; standard users exempted under approved exception | [Asset IDs] |
| **Conditional / Risk-Based** | MFA triggered based on risk signals (location, device compliance, anomaly detection) | [Asset IDs] |
| **Exempted (Approved Exception)** | MFA not enforced; documented risk acceptance and compensating controls in place | [Asset IDs] |

### 3.3 User Population Classification

| User Class | Definition | MFA Requirement | Evidence Status |
|---|---|---|---|
| Privileged / Administrative Accounts | Accounts with elevated system rights | Mandatory | [Compliant / Partial / Non-Compliant] |
| Standard Internal Users | Regular employees | [Mandatory / Conditional] | [Compliant / Partial / Non-Compliant] |
| Remote / Off-Site Users | Users accessing via VPN or remote desktop | Mandatory | [Compliant / Partial / Non-Compliant] |
| Third-Party / Vendor Accounts | External parties with system access | Mandatory | [Compliant / Partial / Non-Compliant] |
| Service / System Accounts | Non-human accounts | [Not Applicable / Compensating Control] | [N/A / Compliant] |

---

## 4. Owner and Custodian

*Identify the accountable owner and operational custodian for each MFA-enabled system. This section establishes clear accountability for configuration maintenance and evidence collection.*

### 4.1 Ownership Register

| Asset ID | System Name | Business Owner | Technical Custodian | IAM Contact | Last Verified |
|---|---|---|---|---|---|
| [ASSET-001] | [System Name] | [Name / Role] | [Name / Role] | [Name / Role] | [Date] |
| [ASSET-002] | [System Name] | [Name / Role] | [Name / Role] | [Name / Role] | [Date] |
| [ASSET-003] | [System Name] | [Name / Role] | [Name / Role] | [Name / Role] | [Date] |

### 4.2 IAM Function Ownership

| Responsibility | Owner | Contact |
|---|---|---|
| MFA Policy Governance | [CISO / Head of IT Security] | [Email / Extension] |
| MFA Configuration Management | [IAM Manager] | [Email / Extension] |
| Evidence Collection and Retention | [IAM Manager] | [Email / Extension] |
| MFA Incident Response | [Security Operations Centre Lead] | [Email / Extension] |
| Quarterly Review Sign-Off | [IAM Manager] | [Email / Extension] |

---

## 5. Audit Universe and Risk-Based Plan

*Define the full population of systems subject to MFA audit and the risk-based prioritisation applied to evidence collection and configuration review cycles.*

### 5.1 Audit Universe

The MFA audit universe encompasses all systems identified in Section 2. The universe is derived from [Organization Name]'s approved IT Asset Register (Ref: [Asset Register Document ID]) and is reviewed quarterly to incorporate newly onboarded systems.

| Audit Universe Component | Count | Last Updated |
|---|---|---|
| Total in-scope systems | [Number] | [Date] |
| Critical-rated systems (Priority 1) | [Number] | [Date] |
| High-rated systems (Priority 2) | [Number] | [Date] |
| Medium-rated systems (Priority 3) | [Number] | [Date] |

### 5.2 Risk-Based Review Plan

*Summarise the risk-tiered schedule for evidence collection and configuration verification. Higher-criticality systems are reviewed more frequently.*

| Priority Tier | Criticality Rating | Review Frequency | Evidence Collection Method | Next Review Due |
|---|---|---|---|---|
| Priority 1 | Critical | Monthly automated + Quarterly manual | Automated log export, policy screenshots | [Date] |
| Priority 2 | High | Quarterly automated + Semi-annual manual | Automated log export, configuration report | [Date] |
| Priority 3 | Medium | Semi-annual | Manual configuration screenshot | [Date] |

### 5.3 Continuous Monitoring Controls

- **[Control 1]:** [e.g., SIEM alerting on MFA bypass events — monitored continuously via [SIEM Platform Name]]
- **[Control 2]:** [e.g., Identity governance platform enforcement reports — exported [Weekly / Daily] to IAM team]
- **[Control 3]:** [e.g., Conditional Access policy compliance dashboard — reviewed [Frequency]]
- **[Control 4]:** [Add additional monitoring controls as applicable]

---

## 6. Audit Methodology and Standards

*Describe the methodology used to collect, validate, and retain MFA configuration evidence. This section demonstrates that evidence has been gathered systematically and can withstand scrutiny in an audit.*

### 6.1 Evidence Collection Methodology

Evidence for MFA configuration is collected through the following methods:

1. **System-Generated Audit Logs**
   - Source: [e.g., Azure Active Directory Sign-In Logs, Okta System Log, RSA Authentication Manager]
   - Export Format: [e.g., CSV, JSON, PDF report]
   - Collection Trigger: Automated scheduled export / Manual pull at review date
   - Retention Period: [e.g., 12 months online, 7 years archived — per RMiT and PDPA requirements]

2. **Configuration Screenshots**
   - Scope: MFA policy settings, Conditional Access rules, enforcement toggles
   - Captured By: [IAM Engineer / System Administrator]
   - Naming Convention: `[AssetID]_MFA_Config_[YYYYMMDD].[png/pdf]`
   - Storage Location: [e.g., SharePoint Evidence Repository / Controlled Document Management System]

3. **Automated Policy Compliance Reports**
   - Tool: [e.g., Microsoft Secure Score, Tenable.io, CyberArk]
   - Report Type: [e.g., MFA Enrollment Report, Authentication Methods Policy Export]
   - Frequency: [Daily / Weekly / Monthly]

4. **Penetration Test and Red Team Findings**
   - Frequency: [Annual / As-Required]
   - Scope Includes MFA: [Yes / No]
   - Latest Test Reference: [Pentest Report ID, Date]

### 6.2 Standards and Frameworks Referenced

| Standard / Framework | Version / Edition | Applicable Requirement |
|---|---|---|
| BNM RMiT Policy Document | [2020 / Latest Amendment] | Clause 10.54 — Authentication Controls |
| NIST Special Publication 800-63B | Rev 3 | Digital Identity Guidelines — Authentication |
| ISO/IEC 27001 | 2022 | Control A.9.4 — System and Application Access Control |
| NACSA Cybersecurity Policy | [Version] | [Applicable Clause] |
| [Internal Policy Reference] | [Version] | [e.g., Information Security Policy, Section X] |

### 6.3 Evidence Validation Criteria

For each piece of evidence, the following quality checks are applied before acceptance:

- [ ] Evidence clearly identifies the system and date/time of capture
- [ ] MFA enforcement status is explicitly visible (enabled / enforced / required)
- [ ] Screenshot or log is unaltered and captured from a production environment
- [ ] Evidence covers the correct review period
- [ ] File naming convention complies with the IAM Evidence Naming Standard
- [ ] Evidence is stored in the approved repository with restricted access

---

## 7. Finding Severity Classification

*Define the severity classification framework applied to gaps or deficiencies identified during MFA configuration reviews. Findings documented here must be tracked through the remediation process.*

### 7.1 Severity Classification Matrix

| Severity Level | Definition | Example MFA Finding | Required Response Time | Escalation Path |
|---|---|---|---|---|
| **Critical** | MFA completely absent on a critical or high-risk system with no compensating control; immediate regulatory or operational risk | MFA disabled on Core Banking System admin portal | Immediate (same business day) | CISO, CTO, Risk Committee |
| **High** | MFA not enforced for privileged accounts; compensating controls insufficient or absent | Privileged accounts bypassing MFA via legacy authentication protocol | 5 business days | CISO, IAM Manager |
| **Medium** | MFA enforced but configuration is suboptimal or does not fully meet policy requirements | MFA enrolled but not enforced (user can skip); weak second factor in use | 30 calendar days | IAM Manager, IT Security |
| **Low** | Minor configuration deviation with negligible risk; compensating controls adequate | MFA policy documentation out of date; naming convention non-compliance | 90 calendar days | IAM Manager |
| **Informational** | Observation or improvement opportunity; no current control gap | Opportunity to implement phishing-resistant MFA (FIDO2) for additional assurance | Next review cycle | IAM Manager |

### 7.2 Open Findings Register

*Record all open findings from MFA configuration reviews. Findings must remain tracked until formally closed and evidenced.*

| Finding ID | Date Identified | Asset ID | Description | Severity | Owner | Target Remediation Date | Status |
|---|---|---|---|---|---|---|---|
| [MFA-FIND-001] | [Date] | [ASSET-ID] | [Brief description of finding] | [Critical / High / Medium / Low] | [Name] | [Date] | [Open / In Progress / Closed] |
| [MFA-FIND-002] | [Date] | [ASSET-ID] | [Brief description of finding] | [Critical / High / Medium / Low] | [Name] | [Date] | [Open / In Progress / Closed] |

### 7.3 Exception Register

*Document any approved exceptions to the MFA enforcement policy, including business justification, compensating controls, and expiry date.*

| Exception ID | Asset ID | Justification | Compensating Controls | Risk Accepted By | Approval Date | Expiry Date |
|---|---|---|---|---|---|---|
| [MFA-EXC-001] | [ASSET-ID] | [Business justification for MFA exemption] | [e.g., IP whitelisting, dedicated device policy, enhanced monitoring] | [CISO / Risk Committee] | [Date] | [Date] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for MFA configuration evidence management. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | IAM Manager | IT Security Team | System / Asset Owner | Internal Audit | Risk & Compliance | IT Operations |
|---|---|---|---|---|---|---|---|
| Define MFA policy and enforcement standards | A | R | C | I | I | C | I |
| Configure MFA on in-scope systems | I | A | C | R | I | I | R |
| Collect and store configuration evidence | I | A | R | C | I | I | C |
| Perform quarterly MFA configuration review | A | R | C | C | C | I | I |
| Assess and classify findings | A | R | R | I | C | C | I |
| Approve exceptions and risk acceptances | A | R | C | I | I | C | I |
| Remediate identified findings | I | A | C | R | I | I | R |
| Escalate critical/high findings | R | R | C | I | I | A | I |
| Present evidence to BNM / external auditors | A | R | C | I | I | C | I |
| Maintain evidence retention and archival | I | A | R | I | I | I | C |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 9.2 Quarterly Review Record

| Review Period | Review Date | Reviewed By | Outcome | Next Review |
|---|---|---|---|---|
| Q[X] [Year] | [Date] | [IAM Manager Name] | [No findings / Findings raised — refer to Section 7.2] | [Date] |
| Q[X] [Year] | [Date] | [IAM Manager Name] | [No findings / Findings raised — refer to Section 7.2] | [Date] |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Name] | __________________ | [Date] |
| CISO / Head of IT Security | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| [Additional Approver] | [Name] | __________________ | [Date] |

---

## 10. References

| Reference | Document / Standard | Clause / Section | Description |
|---|---|---|---|
| [REF-01] | BNM Risk Management in Technology (RMiT) Policy Document | **Clause 10.54** | Requirement for the implementation of multi-factor authentication for access to critical systems, privileged accounts, and sensitive data |
| [REF-02] | BNM Risk Management in Technology (RMiT) Policy Document | Clause 10.49 – 10.53 | Supporting access control and identity management requirements |
| [REF-03] | BNM Guidelines on Management of Cyber Risk | [Applicable Section] | Cyber resilience and authentication governance requirements for financial institutions |
| [REF-04] | NIST SP 800-63B | Section 4–5 | Authenticator assurance levels and MFA technical requirements |
| [REF-05] | ISO/IEC 27001:2022 | Control A.9.4 | System and application access control |
| [REF-06] | [Organization Name] Information Security Policy | Section [X] | Internal MFA and access control policy |
| [REF-07] | [Organization Name] IT Asset Register | [Document ID] | Source registry for in-scope asset identification |
| [REF-08] | Personal Data Protection Act 2010 (PDPA) | Section [X] | Data security obligations relevant to authentication and access controls protecting personal data |

---

## 11. Appendices

### Appendix A — MFA Configuration Evidence Index

*A consolidated index of all evidence artefacts collected for this review period. Each entry maps to an asset in Section 2.*

| Evidence ID | Asset ID | System Name | Evidence Type | File Name | Date Captured | Captured By | Storage Location | Retention Expiry |
|---|---|---|---|---|---|---|---|---|
| [EVID-001] | [ASSET-001] | [System Name] | [Screenshot / Audit Log / Policy Export] | [Filename.pdf] | [Date] | [Name] | [Repository Path] | [Date] |
| [EVID-002] | [ASSET-002] | [System Name] | [Screenshot / Audit Log / Policy Export] | [Filename.pdf] | [Date] | [Name] | [Repository Path] | [Date] |
| [EVID-003] | [ASSET-003] | [System Name] | [Screenshot / Audit Log / Policy Export] | [Filename.pdf] | [Date] | [Name] | [Repository Path] | [Date] |

### Appendix B — MFA Enrollment Summary Report

*Attach or embed the system-generated MFA enrollment summary report for each in-scope identity provider or IAM platform for the current review period.*

| Platform | Report Date | Total Accounts | MFA Enrolled | MFA Not Enrolled | Enrollment Rate (%) | Report Reference |
|---|---|---|---|---|---|---|
| [e.g., Microsoft Entra ID] | [Date] | [Number] | [Number] | [Number] | [%] | [EVID-ID] |
| [e.g., Okta] | [Date] | [Number] | [Number] | [Number] | [%] | [EVID-ID] |
| [e.g., On-Premises AD + MFA Server] | [Date] | [Number] | [Number] | [Number] | [%] | [EVID-ID] |

> *Target: 100% MFA enrollment and enforcement for all privileged accounts. For standard user accounts, refer to the approved rollout roadmap (Ref: [Document ID]).*

### Appendix C — MFA Exception Summary

*Summary of all active exceptions to the MFA enforcement policy as at the review date. Full exception details are maintained in the Exception Register (Section 7.3).*

| Exception ID | Asset Affected | Expiry Date | Risk Level | Status |
|---|---|---|---|---|
| [MFA-EXC-001] | [Asset Name] | [Date] | [High / Medium / Low] | [Active / Expired / Under Review] |

### Appendix D — Remediation Tracker

*Track the remediation of all open findings from Section 7.2. This appendix is updated at each quarterly review.*

| Finding ID | Remediation Steps | Responsible Party | % Complete | Evidence of Remediation | Closed Date |
|---|---|---|---|---|---|
| [MFA-FIND-001] | [Step 1; Step 2; Step 3] | [Name / Team] | [%] | [Evidence Reference or N/A if open] | [Date / Open] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **MFA** | Multi-Factor Authentication: An authentication method requiring two or more verification factors from independent categories (knowledge, possession, inherence) |
| **IAM** | Identity and Access Management: The framework of policies and technologies ensuring appropriate access to technology resources |
| **Privileged Account** | An account with elevated permissions beyond standard user rights, including administrative, root, and service accounts |
| **RMiT** | Risk Management in Technology: Bank Negara Malaysia's policy document governing technology risk management for financial institutions |
| **Conditional Access** | A policy-driven control mechanism that enforces MFA or other access requirements based on contextual risk signals |
| **FIDO2** | Fast IDentity Online 2: A phishing-resistant authentication standard using cryptographic credentials; the highest assurance MFA factor |
| **OTP** | One-Time Password: A time-limited or event-driven password delivered via authenticator app, SMS, or hardware token |
| **SIEM** | Security Information and Event Management: A platform for real-time monitoring, correlation, and alerting on security events |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name] and designated regulatory, audit, and oversight bodies. Unauthorised disclosure is prohibited under [Organization Name]'s Information Security Policy and applicable Malaysian law.*

*Document ID: [Document ID] | Version: 1.0 | Owner: IAM Manager | [Organization Name]*