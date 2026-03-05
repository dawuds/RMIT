# Security Checkpoint Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Application Development |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

*This section defines the intent of this document and the boundaries of the security checkpoint evidence it captures.*

This document records the evidence of security reviews conducted at each phase of the Software Development Life Cycle (SDLC) as required under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, Clause 10.4**. It serves as a formal, auditable record demonstrating that [Organization Name] has applied systematic security controls, assessments, and approval gates throughout the development and deployment lifecycle of technology systems and applications.

**Scope of Coverage:**

- All internally developed, outsourced, or third-party-integrated applications that process, store, or transmit regulated data within [Organization Name]
- All SDLC phases: Requirements, Design, Development, Testing, Staging/UAT, and Production Deployment
- New development, major enhancements, and significant changes to existing systems
- Systems in scope for BNM RMiT compliance and PDPA obligations

**Out of Scope:**

- Minor cosmetic changes and documentation-only updates as defined in the [Organization Name] Change Management Policy [Ref: [Document ID]]
- Infrastructure patching managed under the Patch Management Policy [Ref: [Document ID]]

---

## 2. Assessment Scope and Criteria

*Define the specific system or release being reviewed, the boundaries of this checkpoint exercise, and the criteria against which security posture will be evaluated.*

### 2.1 System / Release Information

| Field | Details |
|---|---|
| **Application / System Name** | [Application Name] |
| **Release / Build Version** | [Version Number] |
| **Project Reference** | [Project ID / Change Request ID] |
| **System Classification** | [Critical / High / Medium / Low] |
| **Data Classification** | [Confidential / Internal / Public] |
| **Checkpoint Review Date** | [Date] |
| **SDLC Phase** | [Requirements / Design / Development / Testing / UAT / Production] |
| **Reviewer(s)** | [Name(s) and Role(s)] |

### 2.2 Assessment Scope Boundaries

*Describe what is included within this security checkpoint: modules, interfaces, data flows, integrations, and infrastructure components reviewed.*

- **In Scope Components:**
  - [Module / Component Name] — [Brief description]
  - [API / Integration Point] — [Brief description]
  - [Data Store / Database] — [Brief description]

- **Out of Scope Components:**
  - [Component] — [Reason for exclusion]

### 2.3 Evaluation Criteria

*List the security standards, baselines, and organizational policies against which findings are assessed.*

| Criteria Reference | Standard / Baseline | Applicability |
|---|---|---|
| BNM RMiT Clause 10.4 | Secure SDLC Requirements | Mandatory |
| OWASP Top 10 | Web Application Security Risks | Mandatory |
| [Organization Name] Secure Coding Standard | Internal Policy [Document ID] | Mandatory |
| [Organization Name] Application Security Policy | Internal Policy [Document ID] | Mandatory |
| PDPA 2010 | Personal Data Protection | Mandatory where PII is processed |
| NACSA CSF | Cybersecurity Framework | Applicable to Critical Systems |
| [Additional Standard] | [Reference] | [Mandatory / Advisory] |

---

## 3. Methodology

*Describe the approach, tools, and techniques applied during this security checkpoint review.*

### 3.1 Review Approach

*Summarize the overall methodology used — e.g., threat modelling, manual code review, automated scanning, or a combination.*

The security checkpoint for this phase was conducted using the following methodology:

- [ ] **Threat Modelling** (STRIDE / PASTA / [Other Framework])
- [ ] **Manual Secure Code Review**
- [ ] **Automated Static Application Security Testing (SAST)**
- [ ] **Dynamic Application Security Testing (DAST)**
- [ ] **Software Composition Analysis (SCA) / Dependency Scanning**
- [ ] **Infrastructure-as-Code (IaC) Security Scan**
- [ ] **Penetration Testing** (for UAT / Pre-Production phases)
- [ ] **Configuration Review**
- [ ] **Data Flow and Privacy Impact Review**

### 3.2 Tools Used

| Tool | Version | Purpose | Operated By |
|---|---|---|---|
| [SAST Tool, e.g., SonarQube] | [Version] | Static code analysis | [Team / Vendor] |
| [DAST Tool, e.g., OWASP ZAP] | [Version] | Dynamic scanning | [Team / Vendor] |
| [SCA Tool, e.g., Dependency-Check] | [Version] | Open source vulnerability scan | [Team / Vendor] |
| [Secrets Scanner, e.g., Gitleaks] | [Version] | Hardcoded credential detection | [Team / Vendor] |
| [Other Tool] | [Version] | [Purpose] | [Team / Vendor] |

### 3.3 Sampling Rationale

*If only a subset of code, modules, or test cases were reviewed, document the sampling rationale here.*

> [Describe sampling approach or state "Full coverage — all in-scope components were reviewed."]

---

## 4. Findings and Ratings

*Document all security findings identified during this checkpoint, their severity ratings, and their current remediation status.*

### 4.1 Severity Rating Scale

| Severity | Definition | Required Action |
|---|---|---|
| **Critical** | Exploitable vulnerability with severe business or data impact | Block deployment; immediate remediation required |
| **High** | Significant vulnerability with substantial risk of exploitation | Block deployment; remediation required before sign-off |
| **Medium** | Vulnerability that requires remediation within agreed timeline | Accepted risk with approved remediation plan |
| **Low** | Minor weakness; limited exploitability or impact | Remediate in next release cycle |
| **Informational** | Advisory item or best-practice recommendation | Log and review at discretion |

### 4.2 Findings Register

| ID | Component | Vulnerability / Finding | Severity | CWE / Reference | Status | Remediation Owner | Target Date | Evidence Ref |
|---|---|---|---|---|---|---|---|---|
| SCE-[ID]-001 | [Component] | [Description of finding] | [Critical / High / Medium / Low / Info] | [CWE-XXX] | [Open / Remediated / Accepted / Deferred] | [Name] | [Date] | [Attachment Ref] |
| SCE-[ID]-002 | [Component] | [Description of finding] | [Severity] | [Reference] | [Status] | [Name] | [Date] | [Attachment Ref] |
| SCE-[ID]-003 | [Component] | [Description of finding] | [Severity] | [Reference] | [Status] | [Name] | [Date] | [Attachment Ref] |

### 4.3 Findings Summary

| Severity | Total Identified | Remediated | Accepted (Risk Accepted) | Outstanding |
|---|---|---|---|---|
| Critical | [#] | [#] | [#] | [#] |
| High | [#] | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] | [#] |
| Low | [#] | [#] | [#] | [#] |
| Informational | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** |

### 4.4 Overall Security Rating

*Assign an overall checkpoint rating based on the findings profile and residual risk level.*

| Rating | Definition |
|---|---|
| **Pass — No Issues** | No findings at High or above; all findings addressed |
| **Pass with Conditions** | No Critical findings; High findings have approved remediation plans |
| **Fail — Remediation Required** | One or more Critical or unmitigated High findings remain open |

**Overall Checkpoint Rating for This Phase:** [Pass — No Issues / Pass with Conditions / Fail — Remediation Required]

**Rationale:** *[Provide a brief narrative justifying the rating assigned above, referencing key findings and risk acceptance decisions.]*

---

## 5. Security Requirements per SDLC Phase

*Record the security activities, artefacts, and gates applicable to each SDLC phase, and confirm whether they were completed for this release.*

### 5.1 SDLC Security Gate Checklist

| SDLC Phase | Security Requirement | Applicable (Y/N) | Completed (Y/N) | Evidence Reference | Reviewer Sign-Off |
|---|---|---|---|---|---|
| **Requirements** | Security requirements defined and documented | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Requirements** | Privacy Impact Assessment (PIA) initiated (if PII in scope) | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Requirements** | Threat modelling initiated | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Design** | Security architecture review completed | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Design** | Data classification and data flow diagram reviewed | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Design** | Authentication and authorisation design reviewed | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Design** | Encryption requirements identified and approved | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Development** | Secure coding guidelines followed and acknowledged | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Development** | SAST scan executed; critical/high findings resolved | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Development** | Secrets scanning executed; no hardcoded credentials | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Development** | SCA / dependency scan executed | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Testing** | Security test cases included in test plan | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Testing** | DAST / vulnerability scan executed | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Testing** | Negative testing / boundary testing performed | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **UAT / Staging** | Penetration testing completed (Critical/High systems) | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **UAT / Staging** | Security regression testing completed | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **UAT / Staging** | All High and Critical findings remediated or formally accepted | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Production** | Production deployment checklist completed | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Production** | Change Advisory Board (CAB) approval obtained | [Y/N] | [Y/N] | [Ref] | [Initials] |
| **Production** | Post-deployment security verification performed | [Y/N] | [Y/N] | [Ref] | [Initials] |

### 5.2 Security Requirements Traceability

*Map security requirements to their corresponding test evidence to demonstrate coverage.*

| Security Requirement ID | Requirement Description | Source (Policy / Clause) | Test Case / Evidence ID | Result |
|---|---|---|---|---|
| SR-001 | [e.g., All API endpoints must enforce authentication] | [Policy Ref] | [TC-XXX] | [Pass / Fail / N/A] |
| SR-002 | [e.g., Sensitive data must be encrypted at rest using AES-256] | [Policy Ref] | [TC-XXX] | [Pass / Fail / N/A] |
| SR-003 | [Security Requirement Description] | [Policy Ref] | [TC-XXX] | [Pass / Fail / N/A] |

---

## 6. Code Review and Testing Gates

*Document the outcomes of formal code review and security testing gates that must be passed before progression to the next SDLC phase.*

### 6.1 Peer Code Review Gate

| Field | Details |
|---|---|
| **Review Date** | [Date] |
| **Reviewed By** | [Name, Role] |
| **Repository / Branch** | [Repo URL / Branch Name] |
| **Commit Range / PR Reference** | [Commit Hash Range / Pull Request ID] |
| **Lines of Code Reviewed** | [Number] |
| **Review Tool / Platform** | [e.g., GitHub Pull Request, Crucible, Bitbucket] |
| **Security-Focused Review Completed** | [Yes / No] |
| **Gate Outcome** | [Approved / Approved with Comments / Rejected] |

**Key Code Review Observations:**

- [Observation 1: e.g., Input validation present on all user-facing fields]
- [Observation 2: e.g., Parameterised queries used throughout data access layer]
- [Observation 3]

### 6.2 SAST Gate

| Field | Details |
|---|---|
| **Scan Date** | [Date] |
| **Tool** | [Tool Name and Version] |
| **Scan Profile / Ruleset** | [Profile Name] |
| **Total Issues Identified** | [Number] |
| **Critical / High Remaining** | [Number] |
| **Gate Threshold** | Zero Critical; Zero High |
| **Gate Outcome** | [Pass / Fail] |
| **Scan Report Reference** | [Attachment ID / Link] |

### 6.3 DAST Gate

| Field | Details |
|---|---|
| **Scan Date** | [Date] |
| **Tool** | [Tool Name and Version] |
| **Target Environment** | [Test / Staging URL or Description] |
| **Total Issues Identified** | [Number] |
| **Critical / High Remaining** | [Number] |
| **Gate Threshold** | Zero Critical; Zero High |
| **Gate Outcome** | [Pass / Fail] |
| **Scan Report Reference** | [Attachment ID / Link] |

### 6.4 Penetration Test Gate (UAT / Pre-Production)

*Complete this section for Critical and High-classified systems undergoing UAT or pre-production review.*

| Field | Details |
|---|---|
| **Test Date(s)** | [Date Range] |
| **Conducted By** | [Internal Team / Approved Third-Party Vendor] |
| **Vendor / Tester Name** | [Name and Accreditation, e.g., CREST, CEH] |
| **Methodology** | [OWASP WSTG / PTES / OWASP MSTG / Custom] |
| **Scope** | [In-scope targets, URLs, APIs, network ranges] |
| **Critical Findings** | [Number] |
| **High Findings** | [Number] |
| **All Critical/High Remediated** | [Yes / No / Accepted with Approval] |
| **Gate Outcome** | [Pass / Fail] |
| **Report Reference** | [Attachment ID] |

---

## 7. Production Deployment Approval

*Document the formal authorisation for production deployment following the completion of all security gates.*

### 7.1 Pre-Deployment Security Checklist

| Checklist Item | Status | Verified By | Date |
|---|---|---|---|
| All security checkpoint gates passed or exceptions formally approved | [Complete / Incomplete] | [Name] | [Date] |
| All Critical and High findings remediated or risk-accepted with sign-off | [Complete / Incomplete] | [Name] | [Date] |
| Penetration test completed and findings addressed (Critical systems) | [Complete / N/A] | [Name] | [Date] |
| Security configuration baseline applied to production environment | [Complete / Incomplete] | [Name] | [Date] |
| Production secrets / credentials rotated from non-production | [Complete / Incomplete] | [Name] | [Date] |
| Rollback plan documented and tested | [Complete / Incomplete] | [Name] | [Date] |
| Security monitoring and alerting confirmed active in production | [Complete / Incomplete] | [Name] | [Date] |
| Change Advisory Board (CAB) approval reference obtained | [Complete / Incomplete] | [Name] | [Date] |

### 7.2 Risk Acceptance Register

*Document any residual risks formally accepted by authorised personnel prior to production deployment.*

| Risk ID | Finding Reference | Risk Description | Severity | Business Justification | Risk Owner | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|---|
| RA-[ID]-001 | SCE-[ID]-[XX] | [Description of accepted risk] | [Severity] | [Business justification for acceptance] | [Name, Role] | [Date] | [Date] |

### 7.3 Production Deployment Authorisation

*This section records the formal approval by the designated authority to proceed with production deployment.*

**Deployment authorisation is granted based on:**

- Completion of all mandatory security checkpoint gates as documented in this record
- Resolution or formal acceptance of all Critical and High severity findings
- Confirmation that residual risks are within [Organization Name]'s approved risk tolerance

| Role | Name | Decision | Date | Signature |
|---|---|---|---|---|
| **Head of Application Development** | [Name] | [Approved / Rejected] | [Date] | _________________ |
| **Information Security Officer** | [Name] | [Approved / Rejected] | [Date] | _________________ |
| **Application Owner / Business Owner** | [Name] | [Approved / Rejected] | [Date] | _________________ |
| **Risk Manager** | [Name] | [Approved / Rejected] | [Date] | _________________ |

**Deployment Window Approved:** [Date and Time]

**CAB Reference Number:** [CAB-XXXXXXXX]

---

## 8. Roles and Responsibilities

*This section defines accountability for security checkpoint activities in alignment with the RACI model.*

| Activity | Head of App Dev | Info Security Officer | App Developer | Security Engineer | Risk Manager | Business Owner | IT Auditor |
|---|---|---|---|---|---|---|---|
| Define security requirements per SDLC phase | A | C | R | C | C | I | I |
| Conduct threat modelling | C | A | R | R | I | C | I |
| Execute SAST / DAST scans | I | A | R | R | I | I | I |
| Conduct peer code review (security focus) | A | C | R | C | I | I | I |
| Conduct penetration testing | I | A | I | R | I | I | C |
| Review and triage security findings | A | C | R | R | I | I | I |
| Approve risk acceptance decisions | C | C | I | I | A | R | I |
| Grant production deployment authorisation | A | R | I | C | C | R | I |
| Maintain security checkpoint evidence records | R | C | I | C | I | I | A |
| Periodic review and update of this template | A | R | I | C | I | I | C |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial document creation |
| [1.1] | [Date] | [Author Name, Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Role] | [Major revision description] |

### 9.2 Document Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Application Development | [Name] | _________________ | [Date] |
| Information Security Officer | [Name] | _________________ | [Date] |
| Chief Risk Officer / Risk Manager | [Name] | _________________ | [Date] |
| Chief Information Officer | [Name] | _________________ | [Date] |

### 9.3 Review Schedule

*This document shall be reviewed per-event (upon each deployment checkpoint) and formally reviewed on a quarterly basis, or following any of the following triggers:*

- A material change to the SDLC process or toolchain
- Issuance of revised BNM RMiT guidance or related circulars
- A security incident attributable to a failure in the SDLC security process
- Findings from an internal or external audit

---

## 10. References

| Reference | Document / Standard | Clause / Section |
|---|---|---|
| [1] | BNM Risk Management in Technology (RMiT) Policy Document | Clause 10.4 — Application Development and Maintenance |
| [2] | BNM Risk Management in Technology (RMiT) Policy Document | Clause 10.1 — Technology Risk Management |
| [3] | Personal Data Protection Act 2010 (PDPA) | Part II — General Principles |
| [4] | NACSA Cybersecurity Framework | Domain 4 — Secure Development |
| [5] | OWASP Software Assurance Maturity Model (SAMM) | Stream B — Security Testing |
| [6] | OWASP Application Security Verification Standard (ASVS) | Level 2 / Level 3 (per system classification) |
| [7] | [Organization Name] Application Security Policy | [Document ID] |
| [8] | [Organization Name] Secure Coding Standard | [Document ID] |
| [9] | [Organization Name] Change Management Policy | [Document ID] |
| [10] | [Organization Name] Information Security Policy | [Document ID] |

---

## 11. Appendices

### Appendix A — Security Scan Report Attachments

*Attach or reference all tool-generated scan reports supporting the findings documented in Section 4.*

| Attachment ID | Description | Tool | Date Generated | File Reference |
|---|---|---|---|---|
| ATT-A-001 | SAST Scan Report — [Application Name] v[X.X] | [Tool Name] | [Date] | [Filename / SharePoint Path] |
| ATT-A-002 | DAST Scan Report — [Application Name] v[X.X] | [Tool Name] | [Date] | [Filename / SharePoint Path] |
| ATT-A-003 | SCA / Dependency Scan Report | [Tool Name] | [Date] | [Filename / SharePoint Path] |
| ATT-A-004 | Penetration Test Report | [Vendor / Tester] | [Date] | [Filename / SharePoint Path] |
| ATT-A-005 | Secrets Scan Report | [Tool Name] | [Date] | [Filename / SharePoint Path] |

### Appendix B — Security Requirements Catalogue

*Reference or attach the full security requirements catalogue used as the baseline for this review, including authentication, authorisation, encryption, logging, and input validation requirements.*

> [Insert or reference the applicable security requirements catalogue document: [Document ID]]

### Appendix C — Threat Model Artefacts

*Attach or reference the threat model produced during the Design phase, including data flow diagrams (DFDs), threat enumeration (STRIDE or equivalent), and mitigation mapping.*

| Artefact | Description | Date Produced | Reference |
|---|---|---|---|
| Data Flow Diagram (DFD) | Level 0 / Level 1 DFD for [Application Name] | [Date] | [Ref] |
| Threat Register | STRIDE threat enumeration and mitigations | [Date] | [Ref] |
| Attack Surface Analysis | Documented attack surface and reduction measures | [Date] | [Ref] |

### Appendix D — Exception and Deviation Log

*Record any approved deviations from the standard security checkpoint process, along with the authorisation obtained.*

| Exception ID | SDLC Phase | Deviation Description | Business Justification | Approver | Approval Date | Expiry Date |
|---|---|---|---|---|---|---|
| EXC-[ID]-001 | [Phase] | [Description of deviation from standard process] | [Justification] | [Name, Role] | [Date] | [Date] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| DAST | Dynamic Application Security Testing — runtime security scanning of a running application |
| SAST | Static Application Security Testing — source code analysis for security vulnerabilities |
| SCA | Software Composition Analysis — scanning of third-party libraries and dependencies for known vulnerabilities |
| SDLC | Software Development Life Cycle |
| STRIDE | Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege — threat modelling methodology |
| CAB | Change Advisory Board — governance body that approves production changes |
| RACI | Responsible, Accountable, Consulted, Informed — accountability assignment matrix |
| PIA | Privacy Impact Assessment — assessment of risks to personal data under PDPA 2010 |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk in financial institutions |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. Retain this record in accordance with [Organization Name]'s Records Retention Policy [Document ID].*