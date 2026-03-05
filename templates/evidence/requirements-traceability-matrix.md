# Requirements Traceability Matrix

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

*This section defines what this document covers and its regulatory basis. Update the scope to reflect the specific system or application release under review.*

This Requirements Traceability Matrix (RTM) documents the systematic tracing of security and functional requirements across all phases of the Software Development Life Cycle (SDLC), from initial specification through to production deployment validation. It provides auditable evidence that all security controls mandated by the applicable regulatory framework have been identified, implemented, tested, and formally accepted.

This document is maintained in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 10.5**, which requires financial institutions to ensure that technology risk management is embedded throughout the application development and change management lifecycle.

**Scope of this Matrix:**

- **System / Application Name:** [System / Application Name]
- **Release / Version:** [Release Version]
- **Project Reference:** [Project Code / Reference Number]
- **Development Methodology:** [Agile / Waterfall / DevSecOps / Hybrid]
- **In Scope:** [List of modules, components, or features included in this traceability exercise]
- **Out of Scope:** [List of components explicitly excluded, with justification]
- **Applicable Environments:** [Development / Staging / UAT / Production]

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the security assessment conducted, the criteria used to qualify requirements, and the risk thresholds applied. Be specific about which regulatory obligations, internal policies, and technical standards informed the requirement selection.*

### 2.1 Assessment Boundary

| Parameter | Details |
|---|---|
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessment Lead** | [Name, Role] |
| **System Classification** | [Critical / Non-Critical / Supporting] per RMiT Appendix |
| **Data Classification** | [Public / Internal / Confidential / Restricted] |
| **Regulatory Trigger** | [New Development / Major Change / Periodic Review / Incident-Driven] |

### 2.2 Requirement Sources

*List all sources from which security requirements were derived. This establishes the completeness of the requirement baseline.*

| Source | Reference | Description |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.5 | Technology risk controls in SDLC |
| BNM RMiT Policy Document | [Other applicable clauses] | [Description] |
| Internal IT Security Policy | [Policy ID] | [Description] |
| OWASP Application Security Verification Standard | ASVS v4.0 / [Version] | Application security baseline |
| ISO/IEC 27001 | [Control reference] | [Description] |
| PDPA 2010 | Section [X] | Personal data protection obligations |
| [Other standard / framework] | [Reference] | [Description] |

### 2.3 Acceptance Criteria

*Define the pass/fail thresholds that determine whether a requirement has been satisfactorily implemented and validated.*

| Criticality Level | Definition | Acceptance Threshold |
|---|---|---|
| **Critical** | Requirement whose failure results in material risk, regulatory breach, or data loss | 100% implementation and independent verification required before release |
| **High** | Requirement whose failure significantly elevates risk exposure | 100% implementation; testing evidence mandatory |
| **Medium** | Requirement whose failure introduces moderate, manageable risk | Implementation required; deviation requires documented risk acceptance |
| **Low** | Enhancement or best-practice control | Implementation recommended; documented rationale acceptable if deferred |

---

## 3. Methodology

*Describe how requirements were collected, assigned to SDLC phases, tracked, tested, and closed. This section gives the assessor and auditor confidence in the rigour of the traceability process.*

### 3.1 Traceability Approach

This matrix employs a **forward and backward traceability** methodology:

- **Forward Traceability:** Each requirement is traced from its source (regulatory clause, policy, or design specification) forward through design, development, testing, and deployment artefacts.
- **Backward Traceability:** Each test case, code review finding, or deployment gate is mapped back to at least one originating requirement, ensuring no orphaned controls exist.

### 3.2 Process Overview

1. **Requirement Elicitation** — Security requirements are extracted from regulatory obligations, internal policies, threat models, and risk assessments at project initiation.
2. **Requirement Baseline** — All requirements are catalogued with a unique identifier, owner, criticality, and target SDLC phase.
3. **Phase Assignment** — Each requirement is mapped to the SDLC phase(s) where it must be evidenced (design, code, test, deployment).
4. **Continuous Tracking** — Status is updated at each phase gate review. Deviations are logged and escalated per the Change Management process.
5. **Closure Verification** — Requirements are marked **Closed** only upon receipt of signed test evidence or independent verification artefact.
6. **Matrix Sign-Off** — The completed matrix is reviewed and approved by the Head of Application Development and the Information Security function prior to production deployment.

### 3.3 Tools and Artefacts

| Tool / Artefact | Purpose |
|---|---|
| [JIRA / Azure DevOps / [Tool Name]] | Requirement and defect tracking |
| [SonarQube / Checkmarx / [Tool Name]] | Static Application Security Testing (SAST) |
| [OWASP ZAP / Burp Suite / [Tool Name]] | Dynamic Application Security Testing (DAST) |
| [Confluence / SharePoint / [Tool Name]] | Document repository |
| [Penetration Test Report Reference] | Independent security validation |
| This RTM | Master traceability record |

---

## 4. Findings and Ratings

*Summarise the overall compliance posture resulting from this traceability exercise. Individual requirement status is captured in Section 5. Use this section for aggregate reporting to management and the review committee.*

### 4.1 Summary Dashboard

| Metric | Count |
|---|---|
| Total Requirements Tracked | [X] |
| Requirements — Closed (Fully Evidenced) | [X] |
| Requirements — In Progress | [X] |
| Requirements — Open (Not Started) | [X] |
| Requirements — Deferred (Risk Accepted) | [X] |
| Requirements — Not Applicable | [X] |
| **Overall Compliance Rate (Closed / Total Applicable)** | **[X]%** |

### 4.2 Risk Rating Summary

| Criticality | Total | Closed | Open / In Progress | Deferred |
|---|---|---|---|---|
| Critical | [X] | [X] | [X] | [X] |
| High | [X] | [X] | [X] | [X] |
| Medium | [X] | [X] | [X] | [X] |
| Low | [X] | [X] | [X] | [X] |

### 4.3 Key Findings

*Document material findings, gaps, or observations arising from the traceability review. Each finding should link to the relevant requirement ID.*

| Finding ID | Requirement ID | Description | Criticality | Recommended Action | Target Resolution Date | Owner |
|---|---|---|---|---|---|---|
| F-001 | [REQ-ID] | [Description of gap or finding] | [Critical / High / Medium / Low] | [Recommended remediation action] | [Date] | [Name] |
| F-002 | [REQ-ID] | [Description of gap or finding] | [Critical / High / Medium / Low] | [Recommended remediation action] | [Date] | [Name] |
| [Add rows as required] | | | | | | |

### 4.4 Risk Acceptance Register

*All deferred requirements must be formally risk-accepted. List each instance below. Unsigned risk acceptances invalidate the release approval.*

| Requirement ID | Justification for Deferral | Residual Risk Rating | Risk Accepted By | Acceptance Date | Review Date |
|---|---|---|---|---|---|
| [REQ-ID] | [Justification] | [Rating] | [Name, Role] | [Date] | [Date] |

---

## 5. Security Requirements per SDLC Phase

*This is the master traceability table. Each row represents a single security requirement traced across all SDLC phases. Populate one row per requirement. Expand with additional rows as needed. Evidence artefact references (e.g., JIRA ticket IDs, document names) must be cited in the Evidence Reference column.*

### 5.1 Traceability Matrix

| Req ID | Requirement Description | Source | Criticality | Design (Artefact / Status) | Development (Artefact / Status) | Testing (Artefact / Status) | Deployment (Artefact / Status) | Overall Status | Evidence Reference | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|
| REQ-001 | Authentication shall enforce multi-factor authentication for all privileged access | BNM RMiT Cl. 10.5 / Internal Policy [ID] | Critical | [Design Doc Ref] / Approved | [Code Review Ref] / Passed | [Test Case Ref] / Passed | [Config Review Ref] / Verified | Closed | [Link / Reference] | |
| REQ-002 | All input fields must be validated server-side to prevent injection attacks | OWASP ASVS v4.0 §5.3 | Critical | [Design Doc Ref] / Approved | [Code Review Ref] / Passed | [DAST Report Ref] / Passed | [Config Review Ref] / Verified | Closed | [Link / Reference] | |
| REQ-003 | Sensitive data at rest must be encrypted using AES-256 or equivalent | BNM RMiT Cl. 10.5 / PDPA 2010 | Critical | [Design Doc Ref] / Approved | [Code Review Ref] / In Progress | [Test Case Ref] / Pending | Pending | In Progress | | Expected completion: [Date] |
| REQ-004 | [Description] | [Source] | [Criticality] | [Artefact / Status] | [Artefact / Status] | [Artefact / Status] | [Artefact / Status] | [Status] | [Reference] | |
| REQ-005 | [Description] | [Source] | [Criticality] | [Artefact / Status] | [Artefact / Status] | [Artefact / Status] | [Artefact / Status] | [Status] | [Reference] | |
| *[Add additional rows for each requirement]* | | | | | | | | | | |

**Status Key:**

| Status | Definition |
|---|---|
| Closed | Requirement fully implemented and independently verified with evidence on file |
| Passed | Phase-specific activity completed satisfactorily |
| In Progress | Activity underway; completion expected by [Date] |
| Pending | Activity not yet started |
| Failed | Activity did not meet acceptance criteria; remediation required |
| Deferred | Requirement deferred with formal risk acceptance on file |
| N/A | Requirement not applicable to this phase |

---

## 6. Code Review and Testing Gates

*Document each formal gate checkpoint in the SDLC pipeline. Gates must be passed sequentially; progression to the next phase without gate sign-off requires documented escalation and approval.*

### 6.1 Gate Definitions

| Gate ID | Gate Name | SDLC Phase | Gate Owner | Entry Criteria | Exit Criteria | Applicable Requirements |
|---|---|---|---|---|---|---|
| GATE-01 | Security Design Review | Design | Head of Application Development | Threat model completed; architecture diagram finalised | All Critical and High security design requirements approved | [REQ-IDs] |
| GATE-02 | Secure Code Review | Development | [Application Security Lead / CISO Delegate] | Feature branch merged to development branch | SAST scan with zero Critical findings; peer review completed | [REQ-IDs] |
| GATE-03 | Security Testing Sign-Off | Testing / QA | [QA Lead / Security Team] | Deployment to UAT environment completed | DAST scan passed; all Critical and High test cases passed; penetration test findings remediated | [REQ-IDs] |
| GATE-04 | Pre-Production Approval | Staging | [Change Advisory Board / CISO] | GATE-03 exit criteria met; change request raised | RTM sign-off received; no open Critical or High findings | [REQ-IDs] |
| GATE-05 | Production Deployment Approval | Deployment | Head of Application Development | GATE-04 approval obtained | Post-deployment verification completed; monitoring confirmed active | [REQ-IDs] |

### 6.2 Gate Status Record

| Gate ID | Gate Name | Scheduled Date | Actual Date | Outcome | Evidence Reference | Signed Off By |
|---|---|---|---|---|---|---|
| GATE-01 | Security Design Review | [Date] | [Date] | [Pass / Fail / Pending] | [Reference] | [Name, Role] |
| GATE-02 | Secure Code Review | [Date] | [Date] | [Pass / Fail / Pending] | [Reference] | [Name, Role] |
| GATE-03 | Security Testing Sign-Off | [Date] | [Date] | [Pass / Fail / Pending] | [Reference] | [Name, Role] |
| GATE-04 | Pre-Production Approval | [Date] | [Date] | [Pass / Fail / Pending] | [Reference] | [Name, Role] |
| GATE-05 | Production Deployment Approval | [Date] | [Date] | [Pass / Fail / Pending] | [Reference] | [Name, Role] |

### 6.3 Testing Evidence Summary

*Reference all formal testing artefacts relied upon in this matrix. Each artefact must be retrievable from the document repository.*

| Test Type | Test Tool / Method | Report Reference | Test Date | Tester | Outcome |
|---|---|---|---|---|---|
| Static Application Security Testing (SAST) | [Tool Name] | [Report ID / Link] | [Date] | [Name / Vendor] | [Pass / Fail] |
| Dynamic Application Security Testing (DAST) | [Tool Name] | [Report ID / Link] | [Date] | [Name / Vendor] | [Pass / Fail] |
| Penetration Testing | [Internal / External — Vendor Name] | [Report ID / Link] | [Date] | [Name / Vendor] | [Pass / Fail] |
| Software Composition Analysis (SCA) | [Tool Name] | [Report ID / Link] | [Date] | [Name / Vendor] | [Pass / Fail] |
| Functional Security Testing | [Test Case Suite Reference] | [Report ID / Link] | [Date] | [Name] | [Pass / Fail] |
| User Acceptance Testing (UAT) | [UAT Plan Reference] | [Report ID / Link] | [Date] | [Name] | [Pass / Fail] |

---

## 7. Production Deployment Approval

*This section constitutes the formal production deployment approval record. All sign-offs must be obtained before the release is promoted to the production environment. Incomplete sign-offs render this matrix non-compliant with BNM RMiT Clause 10.5.*

### 7.1 Pre-Deployment Checklist

| Item | Required | Completed | Evidence Reference | Verified By |
|---|---|---|---|---|
| All Critical and High requirements status: Closed | Yes | [ ] Yes / [ ] No | [Reference] | [Name] |
| All SDLC gates (GATE-01 to GATE-04) passed | Yes | [ ] Yes / [ ] No | [Reference] | [Name] |
| Open findings formally risk-accepted and logged | Yes | [ ] Yes / [ ] No | [Reference] | [Name] |
| Penetration test report reviewed and findings addressed | Yes | [ ] Yes / [ ] No | [Reference] | [Name] |
| Change Advisory Board (CAB) approval obtained | Yes | [ ] Yes / [ ] No | [CAB Ticket Reference] | [Name] |
| Rollback plan documented and tested | Yes | [ ] Yes / [ ] No | [Reference] | [Name] |
| Production monitoring and alerting confirmed active | Yes | [ ] Yes / [ ] No | [Reference] | [Name] |
| Data backup verified prior to deployment | Yes | [ ] Yes / [ ] No | [Reference] | [Name] |
| Third-party / vendor components verified and approved | [Yes / No] | [ ] Yes / [ ] No | [Reference] | [Name] |

### 7.2 Deployment Approval Sign-Off

*All designated approvers must sign. A single missing signature blocks deployment.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Application Development | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| IT Risk Manager | [Name] | [Signature] | [Date] |
| Business Owner / System Owner | [Name] | [Signature] | [Date] |
| Change Advisory Board Chairperson | [Name] | [Signature] | [Date] |

### 7.3 Post-Deployment Verification

*To be completed within [24 / 48] hours of production deployment.*

| Verification Item | Expected Outcome | Actual Outcome | Verified By | Date |
|---|---|---|---|---|
| Application accessible and functional | All services operational | [Outcome] | [Name] | [Date] |
| Security controls confirmed active in production | Controls verified via configuration audit | [Outcome] | [Name] | [Date] |
| Monitoring alerts firing correctly | Test alerts received by SOC / Operations | [Outcome] | [Name] | [Date] |
| No critical incidents within [48]-hour observation window | Zero P1/P2 incidents | [Outcome] | [Name] | [Date] |
| Post-deployment gate (GATE-05) signed off | GATE-05 status: Closed | [Outcome] | [Name] | [Date] |

---

## 8. Roles and Responsibilities

*This RACI table defines accountability for the creation, maintenance, and approval of this matrix. Ensure named individuals are current at the time of each review.*

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | Head of App Development | CISO / Security Team | IT Risk Manager | Project Manager | Development Team | QA / Test Team | Business Owner | Internal Audit |
|---|---|---|---|---|---|---|---|---|
| Define security requirements baseline | A | R | C | C | C | I | C | I |
| Assign requirements to SDLC phases | A | C | C | R | C | C | I | I |
| Conduct secure code review | A | C | I | I | R | C | I | I |
| Execute security testing (SAST/DAST/PenTest) | C | R/A | C | I | C | R | I | I |
| Maintain and update RTM | R/A | C | C | C | R | R | I | I |
| Review and validate gate outcomes | A | R | C | C | I | R | I | I |
| Risk acceptance for deferred requirements | A | R | A | I | I | I | C | I |
| Production deployment approval | A | R | C | C | I | I | R | I |
| Periodic RTM review | A | C | R | C | I | I | C | R |
| Regulatory audit support | C | C | R | C | I | I | C | A |

---

## 9. Review and Approval

### 9.1 Review Schedule

This document shall be reviewed:

- **Per-event:** Upon any major application release, significant change, or security incident affecting the in-scope system.
- **Quarterly:** As part of the periodic technology risk review cycle, regardless of whether a release has occurred.

The next scheduled review date is **[Next Review Date]**.

### 9.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial document creation |
| [1.1] | [Date] | [Author Name, Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Role] | [Description of changes] |

### 9.3 Document Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Application Development | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| IT Risk Manager | [Name] | [Signature] | [Date] |
| Chief Technology Officer (CTO) | [Name] | [Signature] | [Date] |

---

## 10. References

*The following regulatory instruments, standards, and internal policies are directly referenced by or inform the content of this document.*

| Reference | Document Title | Issuing Body | Clause / Section | Relevance |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.5 | Security requirements traceability across SDLC |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Other applicable clauses] | [Relevance] |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section [X] | Personal data protection obligations in system development |
| NACSA | National Cyber Security Policy | NACSA / MOSTI | [Reference] | Cyber security baseline for critical information infrastructure |
| ISO/IEC 27001 | Information Security Management Systems | ISO / IEC | Annex A.14 | Secure system acquisition, development and maintenance |
| OWASP ASVS | Application Security Verification Standard | OWASP Foundation | Level [1/2/3] | Application security controls baseline |
| [Internal Policy ID] | [Internal IT Security Policy Title] | [Organization Name] | Section [X] | [Relevance] |
| [Internal Policy ID] | [Secure SDLC Procedure Title] | [Organization Name] | Section [X] | [Relevance] |

---

## Appendices

### Appendix A — Requirement ID Naming Convention

*Document the naming convention used for requirement identifiers in this matrix to ensure consistency across releases and projects.*

| Segment | Format | Example | Description |
|---|---|---|---|
| Prefix | REQ | REQ | Denotes a traceable requirement |
| System Code | [3-letter code] | CAS | Abbreviated system identifier |
| Sequence | [3-digit number] | 001 | Sequential requirement number |
| **Full Example** | **REQ-CAS-001** | | |

### Appendix B — SDLC Phase Definitions

*Reference definitions for the SDLC phases used in the traceability matrix, aligned with [Organization Name]'s approved SDLC framework.*

| Phase | Description | Key Security Activities |
|---|---|---|
| **Requirements** | Capture and baseline security and functional requirements | Threat modelling, regulatory mapping, security requirement elicitation |
| **Design** | Architecture and detailed design, including security architecture | Security design review, data flow analysis, control selection |
| **Development** | Coding and unit testing | Secure coding, peer review, SAST scanning |
| **Testing** | Integration, system, and UAT | DAST, penetration testing, security test case execution |
| **Deployment** | Release to production | Change management, pre-deployment checklist, post-deployment verification |
| **Operations** | Ongoing production operation | Monitoring, vulnerability management, incident response |

### Appendix C — Glossary

| Term | Definition |
|---|---|
| DAST | Dynamic Application Security Testing — testing of a running application for vulnerabilities |
| RTM | Requirements Traceability Matrix — this document |
| SAST | Static Application Security Testing — analysis of source code for vulnerabilities without execution |
| SDLC | Software Development Life Cycle |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk at financial institutions |
| CAB | Change Advisory Board — governance body that approves changes to production systems |
| CISO | Chief Information Security Officer |
| SCA | Software Composition Analysis — scanning of third-party and open-source components for known vulnerabilities |

### Appendix D — Supporting Evidence Index

*Maintain a register of all evidence artefacts cited in this matrix. This index facilitates rapid retrieval during audits.*

| Evidence ID | Description | Document Location | Date Created | Retention Period |
|---|---|---|---|---|
| EV-001 | [SAST scan report for Release X] | [Repository path / URL] | [Date] | [e.g., 7 years] |
| EV-002 | [Penetration test report] | [Repository path / URL] | [Date] | [e.g., 7 years] |
| EV-003 | [Gate-01 Security Design Review minutes] | [Repository path / URL] | [Date] | [e.g., 7 years] |
| EV-004 | [UAT sign-off record] | [Repository path / URL] | [Date] | [e.g., 7 years] |
| [Add rows as required] | | | | |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. Retain this document for a minimum of **[7] years** in accordance with BNM record-keeping requirements.*