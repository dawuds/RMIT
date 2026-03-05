# Authentication Configuration

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

### 1.1 Purpose

This document serves as configuration evidence for the implementation of risk-based authentication (RBA) and multi-factor authentication (MFA) controls applied to customer-facing and internal systems. It demonstrates compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.4**, which mandates robust and appropriately calibrated authentication mechanisms commensurate with the risk profile of the transaction or access event.

This artifact provides auditable evidence that authentication controls have been assessed, configured, tested, and approved in accordance with regulatory expectations, internal risk appetite, and prevailing cybersecurity standards.

### 1.2 Scope

*Describe the systems, channels, user populations, and transaction types covered by this authentication configuration. Include any explicit exclusions.*

This document applies to the following in-scope elements:

- **Systems / Applications:** [e.g., Internet Banking Platform, Mobile Banking Application, Internal Core Banking System, API Gateway]
- **User Populations:** [e.g., Retail Customers, Corporate Customers, Privileged Internal Users, Third-Party Integrators]
- **Authentication Channels:** [e.g., Web Browser, Mobile App, USSD, API/Open Banking]
- **Transaction Types:** [e.g., High-Value Transfers, Account Maintenance, Login, Enquiry-Only Access]
- **Exclusions:** [e.g., Internal legacy systems undergoing decommission — refer to [Document ID of exception]]

### 1.3 Regulatory Context

| Regulatory Reference | Requirement Summary |
|---|---|
| BNM RMiT Clause 12.4 | Risk-based and multi-factor authentication for customer access and transactions |
| BNM RMiT Clause 12.1 | General identity and access management governance |
| PDPA 2010 | Protection of personal data processed during authentication events |
| [Other applicable clause] | [Summary of requirement] |

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the authentication configuration assessment, the risk classification criteria applied to determine appropriate authentication strength, and the standards used as benchmarks.*

### 2.1 Assessment Scope

The following systems and authentication mechanisms were assessed as part of this configuration review:

| System / Application | Environment | Authentication Type | In Scope |
|---|---|---|---|
| [System Name] | Production / UAT / DR | Password + OTP / FIDO2 / Biometric | Yes / No |
| [System Name] | Production | Risk-Based Adaptive MFA | Yes |
| [System Name] | [Environment] | [Authentication Type] | [Yes / No] |

### 2.2 Risk Classification Criteria

Authentication strength requirements are determined by the risk classification of the access event or transaction:

| Risk Tier | Transaction / Access Type | Required Authentication Level |
|---|---|---|
| **Critical** | High-value fund transfers (> RM [Threshold]) | MFA mandatory — Step-up authentication required |
| **High** | Account profile changes, payee additions | MFA mandatory |
| **Medium** | Standard login, balance enquiry | Single-factor with risk scoring; MFA triggered on anomaly |
| **Low** | Read-only internal system access | Single-factor with strong password policy |

### 2.3 Assessment Criteria and Standards

*List the standards, internal policies, and regulatory guidelines used to evaluate authentication configuration adequacy.*

- BNM RMiT Policy Document (effective [Date])
- [Organization Name] Information Security Policy v[X.X]
- NIST SP 800-63B — Digital Identity Guidelines: Authentication and Lifecycle Management
- OWASP Authentication Cheat Sheet
- [Any other applicable internal or external standard]

---

## 3. Methodology

*Describe the approach used to review and validate authentication configurations, including tools used, sampling methodology, and the review process.*

### 3.1 Review Approach

The authentication configuration assessment was conducted using the following methodology:

1. **Documentation Review** — Examination of system architecture diagrams, authentication policy documents, and vendor configuration guides.
2. **Configuration Inspection** — Direct review of authentication settings via system consoles, Identity Provider (IdP) admin panels, and API gateway policies.
3. **Technical Testing** — Functional testing of authentication flows including MFA enrolment, step-up triggers, session management, and fallback mechanisms.
4. **Log and Evidence Sampling** — Review of authentication event logs to validate that configured rules operate as intended in production.
5. **Stakeholder Interviews** — Discussions with [IAM Team / Application Owners / Security Operations] to confirm operational context.

### 3.2 Review Period

| Parameter | Detail |
|---|---|
| **Review Trigger** | [Per-Event: e.g., New System Deployment / Quarterly Scheduled Review] |
| **Review Commenced** | [Date] |
| **Review Completed** | [Date] |
| **Reviewed By** | [Reviewer Name, Title] |

### 3.3 Tools and Techniques

| Tool / Technique | Purpose |
|---|---|
| [IdP Admin Console — e.g., Azure AD, Okta, ForgeRock] | Configuration parameter inspection |
| [SIEM / Log Analytics Platform] | Authentication log sampling and anomaly review |
| [Vulnerability Scanner / Pentest Report Reference] | Identification of authentication weaknesses |
| [Automated Configuration Compliance Tool] | Benchmark comparison against policy |

---

## 4. Findings and Ratings

*Summarise the findings from the assessment. Each finding should reference the specific configuration reviewed, the expected configuration, the observed configuration, the resulting risk rating, and the disposition.*

### 4.1 Summary of Findings

| Finding ID | System | Configuration Parameter | Expected State | Observed State | Risk Rating | Status |
|---|---|---|---|---|---|---|
| AUTH-F001 | [System Name] | MFA enforcement for high-value transfers | Mandatory | Mandatory | Compliant | Closed |
| AUTH-F002 | [System Name] | Step-up authentication threshold | RM [Value] | RM [Value] | Compliant | Closed |
| AUTH-F003 | [System Name] | Session timeout for authenticated sessions | ≤ 15 minutes idle | [Observed Value] | [Rating] | [Open / Closed] |
| AUTH-F004 | [System Name] | OTP expiry duration | ≤ 5 minutes | [Observed Value] | [Rating] | [Open / Closed] |
| [AUTH-FXXX] | [System Name] | [Parameter] | [Expected] | [Observed] | [Rating] | [Status] |

**Risk Rating Legend:**

| Rating | Definition |
|---|---|
| **Critical** | Immediate remediation required; direct regulatory non-compliance |
| **High** | Significant control gap; remediation required within [e.g., 30 days] |
| **Medium** | Control deficiency; remediation required within [e.g., 60 days] |
| **Low** | Minor gap or enhancement opportunity; remediation within [e.g., 90 days] |
| **Compliant** | Configuration meets or exceeds required standard |

### 4.2 Overall Configuration Compliance Rating

| System | Overall Rating | Justification |
|---|---|---|
| [System Name] | [Compliant / Non-Compliant / Partially Compliant] | [Brief justification] |
| [System Name] | [Compliant / Non-Compliant / Partially Compliant] | [Brief justification] |

**Aggregate Assessment Outcome:** [Compliant / Partially Compliant / Non-Compliant]

*Provide a brief narrative summarising the overall authentication configuration posture and any systemic issues identified.*

[Overall assessment narrative — e.g., "The majority of in-scope systems demonstrate a compliant authentication configuration. Two findings of medium severity were identified relating to session timeout parameters on [System X], which have been escalated to the application owner for remediation."]

---

## 5. Evidence Reviewed

*List all artefacts, documents, screenshots, configuration exports, and logs reviewed during this assessment. Each item should be sufficiently referenced to support independent verification during an audit.*

### 5.1 Documentary Evidence

| Evidence ID | Evidence Type | Description | Source | Date Obtained |
|---|---|---|---|---|
| EVD-001 | Configuration Export | IAM platform authentication policy export | [IdP Admin Console] | [Date] |
| EVD-002 | Architecture Diagram | Customer authentication flow diagram | [Document Repository] | [Date] |
| EVD-003 | Policy Document | [Organization Name] Authentication and Access Control Policy v[X.X] | [Document Repository] | [Date] |
| EVD-004 | Vendor Documentation | [Vendor] MFA configuration guide | [Vendor Portal] | [Date] |
| EVD-005 | Test Evidence | MFA step-up authentication functional test results | [Test Management Tool] | [Date] |
| EVD-006 | Log Sample | Authentication event log extract — [Date Range] | [SIEM / Log Platform] | [Date] |
| EVD-007 | Incident/Change Record | [Change Ticket ID] — Authentication configuration change | [ITSM Platform] | [Date] |
| [EVD-XXX] | [Type] | [Description] | [Source] | [Date] |

### 5.2 System Configuration Parameters Captured

*Attach or reference screenshots and configuration exports as appendices. Cross-reference to Appendix A.*

| Parameter | System | Configured Value | Reference |
|---|---|---|---|
| MFA Enforcement Policy | [System] | [Value] | Appendix A-1 |
| Risk Score Threshold for Step-Up | [System] | [Value] | Appendix A-2 |
| OTP Channel and Expiry | [System] | [Channel; Duration] | Appendix A-3 |
| Biometric Authentication Settings | [System] | [Enabled / Disabled; Type] | Appendix A-4 |
| Failed Authentication Lockout Policy | [System] | [Threshold; Duration] | Appendix A-5 |
| Session Timeout Configuration | [System] | [Duration] | Appendix A-6 |

---

## 6. Recommendations

*For each finding rated Medium or above, provide a specific, actionable recommendation. Recommendations should reference the responsible owner and include a target remediation date.*

### 6.1 Remediation Recommendations

| Rec. ID | Related Finding | Recommendation | Priority | Responsible Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | AUTH-F003 | Reduce idle session timeout on [System] to ≤ 15 minutes to align with BNM RMiT Clause 12.4 and internal policy | Medium | [Application Owner Name] | [Date] | [Open / In Progress / Closed] |
| REC-002 | AUTH-F004 | Reduce OTP validity window to 5 minutes or less; disable OTP reuse | Medium | IAM Manager | [Date] | [Open / In Progress / Closed] |
| [REC-XXX] | [Finding ID] | [Recommendation description] | [Priority] | [Owner] | [Date] | [Status] |

### 6.2 Strategic Recommendations

*List any broader improvements beyond specific findings — e.g., technology upgrades, process enhancements, training.*

- **[REC-S001]** [Strategic recommendation — e.g., "Evaluate adoption of FIDO2 passwordless authentication for internet banking to reduce phishing risk and improve customer experience, aligned with BNM's digital financial services direction."]
- **[REC-S002]** [Strategic recommendation]
- **[REC-S003]** [Strategic recommendation]

---

## 7. Roles and Responsibilities

*This section defines accountability for the authentication configuration process using a RACI framework.*

| Activity | IAM Manager | CISO / Head of IT Security | Application Owner | IT Operations | Internal Audit | Risk Management |
|---|---|---|---|---|---|---|
| Define authentication policy and standards | A/R | C | I | I | I | C |
| Configure and implement authentication controls | R | I | C | R | I | I |
| Conduct configuration review and assessment | A/R | C | C | I | I | I |
| Review and approve configuration findings | A | A | C | I | I | C |
| Remediate identified findings | I | I | A/R | R | I | I |
| Report compliance status to Board / Management | I | A/R | I | I | C | C |
| Maintain evidence and documentation | A/R | I | C | I | I | I |
| Perform independent review | I | I | I | I | A/R | I |

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 8. Review and Approval

### 8.1 Review Triggers

This document shall be reviewed:

- **Quarterly** — Scheduled periodic review of authentication configurations
- **Per-Event** — Upon any of the following triggers:
  - Deployment of a new customer-facing system or channel
  - Material change to authentication architecture or IdP platform
  - Post-incident review following an authentication-related security event
  - Regulatory update or new BNM guidance affecting authentication requirements
  - Risk reassessment resulting in a change to transaction risk thresholds

### 8.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document creation |
| [X.X] | [Date] | [Author Name, Title] | [Description of changes] |
| [X.X] | [Date] | [Author Name, Title] | [Description of changes] |

### 8.3 Approval Sign-Off

*This document requires formal sign-off from the roles listed below prior to submission as regulatory evidence.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Name] | __________________ | [Date] |
| CISO / Head of IT Security | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| [Other Approver Role] | [Name] | __________________ | [Date] |

---

## 9. References

| Reference | Document / Standard | Clause / Section | Relevance |
|---|---|---|---|
| 1 | BNM Risk Management in Technology (RMiT) Policy Document | Clause 12.4 | Risk-based and multi-factor customer authentication requirements |
| 2 | BNM Risk Management in Technology (RMiT) Policy Document | Clause 12.1 | Identity and access management governance framework |
| 3 | Personal Data Protection Act 2010 (PDPA) | Section 5 — Security Principle | Protection of personal data processed during authentication |
| 4 | NIST Special Publication 800-63B | All sections | Digital identity guidelines — authentication and lifecycle management |
| 5 | OWASP Authentication Cheat Sheet | All sections | Technical authentication implementation best practices |
| 6 | [Organization Name] Information Security Policy | [Section Reference] | Internal authentication and access control standards |
| 7 | [Organization Name] IT Risk Management Framework | [Section Reference] | Risk classification methodology and thresholds |
| 8 | [Other Reference] | [Section] | [Relevance] |

---

## Appendices

### Appendix A — Configuration Screenshots and Exports

*Attach or embed screenshots, configuration file exports, and system-generated reports as supporting evidence. Each item should correspond to an evidence entry in Section 5.*

| Appendix Ref | Description | System | Date Captured |
|---|---|---|---|
| A-1 | MFA enforcement policy configuration screenshot | [System Name] | [Date] |
| A-2 | Risk score threshold configuration — step-up authentication | [System Name] | [Date] |
| A-3 | OTP channel and expiry settings | [System Name] | [Date] |
| A-4 | Biometric authentication configuration | [System Name] | [Date] |
| A-5 | Account lockout policy settings | [System Name] | [Date] |
| A-6 | Session management and timeout configuration | [System Name] | [Date] |

*[Attach screenshots or configuration exports here, or reference an accompanying evidence package with document ID: [Evidence Package Document ID]]*

---

### Appendix B — Authentication Flow Diagrams

*Include or reference system architecture and authentication flow diagrams illustrating how risk-based and multi-factor authentication is implemented across in-scope channels.*

- **B-1:** Customer Internet Banking Authentication Flow — [Attach or reference diagram]
- **B-2:** Mobile Banking MFA Step-Up Flow — [Attach or reference diagram]
- **B-3:** Risk Scoring Decision Logic — [Attach or reference diagram]

---

### Appendix C — Exceptions and Risk Acceptances

*Document any approved exceptions to standard authentication configuration requirements. Each exception must be formally risk-accepted and time-bound.*

| Exception ID | System | Requirement Waived | Justification | Risk Acceptance Level | Approved By | Expiry Date |
|---|---|---|---|---|---|---|
| EXC-001 | [System Name] | [Requirement] | [Business / Technical Justification] | [CISO / CRO / Board] | [Name] | [Date] |

*If no exceptions exist, state: "No authentication configuration exceptions are currently in effect as at [Review Date]."*

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **MFA** | Multi-Factor Authentication — the use of two or more authentication factors from different categories (knowledge, possession, inherence) |
| **RBA** | Risk-Based Authentication — dynamic adjustment of authentication requirements based on real-time risk scoring of the access event |
| **IdP** | Identity Provider — a system responsible for creating, maintaining, and managing identity information and providing authentication services |
| **OTP** | One-Time Password — a time-limited, single-use authentication code delivered via SMS, email, or authenticator application |
| **FIDO2** | Fast Identity Online 2 — a passwordless authentication standard using public-key cryptography |
| **Step-Up Authentication** | The process of requiring additional authentication factors when a transaction or event exceeds a defined risk threshold |
| **[Term]** | [Definition] |

---

*This document is classified as **Confidential** and is intended solely for internal use and regulatory submission by [Organization Name]. Unauthorised disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Classification: Confidential*