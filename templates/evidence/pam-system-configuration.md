# PAM System Configuration — Evidence Record

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

This document serves as formal evidence of the configuration state of the Privileged Access Management (PAM) system operated by [Organization Name]. It supports compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT)** policy, specifically **Clause 10.56**, which mandates that financial institutions implement and maintain adequate controls over privileged access to critical systems and infrastructure.

This evidence record is to be produced:

- **Per-event**: Following any significant change to the PAM system configuration, including upgrades, policy modifications, integration changes, or incident-driven remediation.
- **Quarterly**: As part of the scheduled privileged access management review cycle.

### 1.1 Systems in Scope

*List all systems, platforms, and environments covered by this PAM configuration review. Include both on-premises and cloud-hosted assets where applicable.*

| # | System / Platform | Environment | Asset Classification | PAM Coverage |
|---|---|---|---|---|
| 1 | [System Name] | [Production / UAT / DR] | [Critical / High / Medium] | [Full / Partial / Planned] |
| 2 | [System Name] | [Production / UAT / DR] | [Critical / High / Medium] | [Full / Partial / Planned] |
| 3 | [System Name] | [Production / UAT / DR] | [Critical / High / Medium] | [Full / Partial / Planned] |

### 1.2 Out of Scope

*Document any systems, accounts, or configurations explicitly excluded from this review, along with the rationale.*

- [Excluded system or component] — *Reason for exclusion*
- [Excluded system or component] — *Reason for exclusion*

---

## 2. Assessment Scope and Criteria

*Define the boundaries of this configuration assessment and the compliance criteria against which the PAM system is evaluated. Reference applicable regulatory requirements, internal policies, and industry standards.*

### 2.1 Assessment Objectives

This assessment verifies that the PAM system configuration satisfies the following objectives:

- Privileged accounts are inventoried, classified, and subject to appropriate access controls.
- Session recording and audit logging are enabled and functioning for all privileged activities.
- Credential vaulting and rotation mechanisms are correctly configured.
- Just-in-time (JIT) and least-privilege access policies are enforced where applicable.
- Multi-factor authentication (MFA) is enforced for all privileged access pathways.
- Integration with identity governance and directory services is correctly established.
- Alerts and monitoring thresholds are defined and operational.

### 2.2 Compliance Criteria

| Criterion | Source | Reference |
|---|---|---|
| Privileged access controls for critical systems | BNM RMiT | Clause 10.56 |
| Access rights management and review | BNM RMiT | [Related Clause] |
| Audit logging and monitoring | BNM RMiT | [Related Clause] |
| Multi-factor authentication | BNM RMiT | [Related Clause] |
| Internal Privileged Access Management Policy | [Organization Name] | [Policy ID] |
| [Applicable ISO/NIST standard] | [Standard Body] | [Control Reference] |

### 2.3 Assessment Scope Boundaries

| Dimension | Detail |
|---|---|
| **Time Period Covered** | [Start Date] to [End Date] |
| **PAM Platform** | [Vendor / Product Name, e.g., CyberArk PAS / BeyondTrust / Delinea] |
| **Platform Version** | [Version Number] |
| **Deployment Model** | [On-premises / Cloud / Hybrid] |
| **Number of Privileged Accounts in Scope** | [Count] |
| **Number of Target Systems in Scope** | [Count] |

---

## 3. Methodology

*Describe the approach, tools, and procedures used to assess and document the PAM system configuration. This section establishes the credibility and repeatability of the assessment.*

### 3.1 Assessment Approach

The configuration assessment was conducted using the following approach:

1. **Configuration Export and Review** — PAM system configuration was exported from [PAM Platform] and reviewed against the defined baseline and compliance criteria.
2. **Policy Verification** — Access control policies, session recording rules, and credential rotation schedules were reviewed within the PAM administrative console.
3. **Account Inventory Reconciliation** — The list of onboarded privileged accounts was reconciled against the authoritative HR and asset management sources.
4. **Integration Testing** — Connectivity and data flow between the PAM system and integrated platforms (Active Directory, SIEM, ticketing system) were verified.
5. **Sampling and Spot-Check** — A representative sample of privileged sessions and access requests were reviewed for policy adherence.

### 3.2 Tools and Techniques Used

| Tool / Technique | Purpose |
|---|---|
| [PAM Admin Console / API] | Configuration extraction and policy review |
| [SIEM Platform] | Log verification and alert validation |
| [Vulnerability Scanner] | Configuration drift and hardening check |
| [Spreadsheet / GRC Tool] | Evidence collation and gap tracking |
| Manual Interview | Validation with system owners and administrators |

### 3.3 Assessment Team

| Role | Name | Department |
|---|---|---|
| Lead Assessor | [Name] | [Department] |
| Technical Reviewer | [Name] | [Department] |
| IAM Manager | [Name] | [Department] |
| Independent Reviewer | [Name] | [Department / Audit] |

---

## 4. Findings and Ratings

*Document all findings from the configuration assessment. Each finding must include a severity rating, description, and reference to the applicable compliance criterion. Use the rating scale defined below.*

### 4.1 Severity Rating Scale

| Rating | Definition |
|---|---|
| **Critical** | Immediate risk of unauthorized privileged access or material non-compliance with BNM RMiT. Remediation required within 24–72 hours. |
| **High** | Significant control gap with potential for privileged access abuse. Remediation required within 14 days. |
| **Medium** | Control weakness requiring corrective action. Remediation required within 30 days. |
| **Low** | Minor deviation or improvement opportunity. Remediation within 90 days or next review cycle. |
| **Informational** | Observation or best-practice recommendation with no immediate compliance impact. |

### 4.2 Summary of Findings

| Finding ID | Area | Description | Rating | Status | RMiT Reference |
|---|---|---|---|---|---|
| PAM-F-001 | [Area, e.g., Session Recording] | [Brief description of finding] | [Critical / High / Medium / Low] | [Open / Closed / In Remediation] | Clause 10.56 |
| PAM-F-002 | [Area] | [Brief description of finding] | [Rating] | [Status] | Clause 10.56 |
| PAM-F-003 | [Area] | [Brief description of finding] | [Rating] | [Status] | Clause 10.56 |

### 4.3 Detailed Findings

#### Finding PAM-F-001: [Finding Title]

| Field | Detail |
|---|---|
| **Finding ID** | PAM-F-001 |
| **Area** | [Configuration Area] |
| **Severity** | [Rating] |
| **Status** | [Open / Closed / In Remediation] |
| **RMiT Clause** | 10.56 |

**Description:**
[Detailed description of the finding, including what was observed, where it was observed, and why it constitutes a gap or non-conformance.]

**Risk Impact:**
[Describe the potential risk or harm if this finding is not remediated.]

**Evidence Reference:**
[Reference to screenshot, log extract, or configuration export that supports this finding — see Section 5.]

---

*Repeat the above subsection for each finding.*

---

### 4.4 Overall Configuration Compliance Rating

| Domain | Controls Assessed | Compliant | Non-Compliant | Compliance Rate |
|---|---|---|---|---|
| Account Inventory & Classification | [#] | [#] | [#] | [%] |
| Credential Vaulting & Rotation | [#] | [#] | [#] | [%] |
| Session Recording & Monitoring | [#] | [#] | [#] | [%] |
| MFA Enforcement | [#] | [#] | [#] | [%] |
| Least Privilege & JIT Access | [#] | [#] | [#] | [%] |
| SIEM / Alert Integration | [#] | [#] | [#] | [%] |
| **Total** | **[#]** | **[#]** | **[#]** | **[%]** |

**Overall Assessment Outcome:** [Compliant / Partially Compliant / Non-Compliant]

---

## 5. Evidence Reviewed

*List all documentary, system-generated, and interview-based evidence reviewed during this assessment. Each evidence item must be traceable and retained in accordance with [Organization Name]'s records management policy.*

### 5.1 Configuration Evidence

| Evidence ID | Evidence Type | Description | Source | Date Obtained | Retained By |
|---|---|---|---|---|---|
| EVD-001 | Configuration Export | Full PAM platform configuration export | [PAM Platform] | [Date] | [Name / Location] |
| EVD-002 | Policy Screenshot | Privileged account access policy settings | [PAM Admin Console] | [Date] | [Name / Location] |
| EVD-003 | Account Inventory | List of all onboarded privileged accounts | [PAM Platform] | [Date] | [Name / Location] |
| EVD-004 | Session Recording Log | Sample of recorded privileged sessions | [PAM Platform / SIEM] | [Date] | [Name / Location] |
| EVD-005 | Credential Rotation Report | Credential rotation history for last 90 days | [PAM Platform] | [Date] | [Name / Location] |
| EVD-006 | MFA Enforcement Report | MFA policy enforcement status per account | [PAM Platform / IdP] | [Date] | [Name / Location] |
| EVD-007 | SIEM Alert Configuration | Alert rules configured for privileged access events | [SIEM Platform] | [Date] | [Name / Location] |
| EVD-008 | Change Records | Change requests for PAM configurations in scope period | [Change Management System] | [Date] | [Name / Location] |

### 5.2 Policy and Procedural Evidence

| Evidence ID | Document Title | Version | Date |
|---|---|---|---|
| EVD-P-001 | Privileged Access Management Policy | [Version] | [Date] |
| EVD-P-002 | IAM Governance Framework | [Version] | [Date] |
| EVD-P-003 | IT Security Baseline Standard | [Version] | [Date] |

### 5.3 Evidence Retention

All evidence collected for this assessment is retained at:

- **Location:** [Document Management System / Shared Drive path / GRC Tool]
- **Retention Period:** [Minimum 5 years, or as defined by BNM RMiT and internal records policy]
- **Access Control:** Restricted to IAM Manager, IT Audit, and Compliance team

---

## 6. Recommendations

*For each finding raised in Section 4, provide a specific, actionable recommendation. Recommendations must include an owner, priority, and target remediation date.*

### 6.1 Remediation Recommendations

| Finding ID | Recommendation | Priority | Owner | Target Date | Acceptance Risk Owner |
|---|---|---|---|---|---|
| PAM-F-001 | [Specific remediation action] | [Critical / High / Medium / Low] | [Name / Role] | [Date] | [CISO / Risk Owner] |
| PAM-F-002 | [Specific remediation action] | [Priority] | [Name / Role] | [Date] | [CISO / Risk Owner] |
| PAM-F-003 | [Specific remediation action] | [Priority] | [Name / Role] | [Date] | [CISO / Risk Owner] |

### 6.2 Strategic Recommendations

*Document broader improvements to the PAM programme that go beyond immediate remediation of specific findings.*

1. **[Recommendation Title]** — [Description of strategic improvement, business justification, and expected outcome.]
2. **[Recommendation Title]** — [Description of strategic improvement, business justification, and expected outcome.]
3. **[Recommendation Title]** — [Description of strategic improvement, business justification, and expected outcome.]

### 6.3 Remediation Tracking

Remediation progress will be tracked through [Organization Name]'s [GRC Tool / Issue Tracker] under project reference **[Project ID]**. The IAM Manager is responsible for providing status updates at the following intervals:

- **Critical / High findings**: Weekly status update until closure.
- **Medium findings**: Fortnightly status update.
- **Low / Informational**: Monthly status update or at next scheduled review.

---

## 7. Roles and Responsibilities

*This RACI matrix defines accountability for the PAM System Configuration evidence process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IAM Manager | CISO | IT Operations | Compliance | Internal Audit | Risk Management |
|---|---|---|---|---|---|---|
| Initiate and schedule assessment | R | A | I | I | I | I |
| Define assessment scope and criteria | R | A | C | C | C | C |
| Conduct configuration review | R | I | C | I | I | I |
| Collate and retain evidence | R | A | C | I | I | I |
| Document findings and ratings | R | A | I | C | C | I |
| Prepare recommendations | R | A | C | C | C | C |
| Review and validate findings | C | A | C | C | R | C |
| Approve final evidence record | I | A | I | C | I | I |
| Track and verify remediation | R | A | R | I | C | C |
| Report to governance committee | I | R | I | R | I | A |
| Retain document per retention schedule | R | I | I | A | I | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [Date] | [Author Name] | Initial draft |
| 0.2 | [Date] | [Author Name] | Incorporated review comments from [Reviewer] |
| 1.0 | [Date] | [Author Name] | Final version approved for release |

### 8.2 Review Sign-Off

*This document has been reviewed and approved by the following individuals. Signature confirms that the content is accurate, complete, and meets the requirements of BNM RMiT Clause 10.56.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager (Owner) | [Name] | _________________________ | [Date] |
| CISO | [Name] | _________________________ | [Date] |
| Head of IT Operations | [Name] | _________________________ | [Date] |
| Compliance Officer | [Name] | _________________________ | [Date] |
| Internal Audit Representative | [Name] | _________________________ | [Date] |

### 8.3 Next Review Trigger

This evidence record is subject to review upon the earliest of:

- [ ] A material change to the PAM system configuration (per-event trigger)
- [ ] A security incident involving privileged access (per-event trigger)
- [ ] The scheduled quarterly review date: **[Next Review Date]**
- [ ] A regulatory inspection or internal audit request

---

## 9. References

The following regulatory instruments, standards, and internal policies are referenced in this document:

| Reference | Title | Issuing Body | Clause / Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.56 |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Additional Clause] |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | [Applicable Section] |
| [ISO/IEC 27001] | Information Security Management Systems | ISO/IEC | [Control Reference] |
| [NIST SP 800-53] | Security and Privacy Controls for Information Systems | NIST | [Control ID, e.g., AC-2, AC-6] |
| [Internal Policy ID] | Privileged Access Management Policy | [Organization Name] | [Section] |
| [Internal Policy ID] | Identity and Access Management Governance Framework | [Organization Name] | [Section] |
| [Internal Standard ID] | IT Security Baseline Standard | [Organization Name] | [Section] |

---

## Appendices

### Appendix A: PAM System Configuration Baseline Checklist

*Attach or reference the configuration baseline checklist used during this assessment. The checklist must map each control to the applicable RMiT clause and internal policy requirement.*

| Control ID | Control Description | Expected State | Observed State | Compliant | Finding Ref |
|---|---|---|---|---|---|
| PAM-CTL-001 | Session recording enabled for all privileged sessions | Enabled | [Observed] | [Y/N] | [PAM-F-XXX] |
| PAM-CTL-002 | Credential rotation configured for all vaulted accounts | Enabled; rotation ≤ 90 days | [Observed] | [Y/N] | [PAM-F-XXX] |
| PAM-CTL-003 | MFA enforced for all PAM access pathways | Enforced | [Observed] | [Y/N] | [PAM-F-XXX] |
| PAM-CTL-004 | Least-privilege policy applied to all onboarded accounts | Configured | [Observed] | [Y/N] | [PAM-F-XXX] |
| PAM-CTL-005 | Alert rules configured in SIEM for privileged access events | Active | [Observed] | [Y/N] | [PAM-F-XXX] |
| PAM-CTL-006 | PAM platform hardened per vendor baseline | Hardened | [Observed] | [Y/N] | [PAM-F-XXX] |
| PAM-CTL-007 | Privileged account inventory reconciled with HR/CMDB | Reconciled | [Observed] | [Y/N] | [PAM-F-XXX] |
| PAM-CTL-008 | Access request and approval workflow enforced | Enforced | [Observed] | [Y/N] | [PAM-F-XXX] |

### Appendix B: Privileged Account Inventory Summary

*Attach a redacted or summarised version of the privileged account inventory reviewed during this assessment. Full account details should be stored securely and referenced by Evidence ID EVD-003.*

| Account Category | Count | Accounts with MFA | Accounts Vaulted | Accounts with Active Session Recording |
|---|---|---|---|---|
| Domain Administrator | [#] | [#] | [#] | [#] |
| Database Administrator | [#] | [#] | [#] | [#] |
| Network Administrator | [#] | [#] | [#] | [#] |
| Cloud Privileged Role | [#] | [#] | [#] | [#] |
| Application Service Account | [#] | [#] | [#] | [#] |
| Emergency / Break-Glass Account | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** |

### Appendix C: Configuration Screenshots and Exports

*Reference all configuration screenshots and system-generated exports retained as evidence. Physical copies or digital files should be stored at the location specified in Section 5.3.*

| Exhibit | Description | Evidence ID | Stored Location |
|---|---|---|---|
| Exhibit C-1 | PAM platform configuration export (XML/JSON) | EVD-001 | [Location] |
| Exhibit C-2 | Session recording policy screenshot | EVD-002 | [Location] |
| Exhibit C-3 | MFA enforcement policy screenshot | EVD-006 | [Location] |
| Exhibit C-4 | SIEM alert rule configuration | EVD-007 | [Location] |

### Appendix D: Glossary

| Term | Definition |
|---|---|
| **PAM** | Privileged Access Management — a category of solutions that safeguard, monitor, detect, and terminate privileged access across human and machine identities. |
| **JIT Access** | Just-in-Time Access — a model where privileged access is granted only for the duration required to complete a specific task. |
| **Credential Vaulting** | Secure storage and management of privileged account credentials within the PAM platform, including automated rotation. |
| **Break-Glass Account** | An emergency privileged account used when normal access mechanisms are unavailable. Subject to strict post-use review. |
| **RMiT** | Risk Management in Technology — BNM's principal policy document governing technology risk management for regulated financial institutions. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles and responsibilities. |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure is prohibited under [Organization Name]'s Information Classification Policy and applicable Malaysian law.*

*Document ID: [Document ID] | Version: 1.0 | Owner: IAM Manager | [Organization Name]*