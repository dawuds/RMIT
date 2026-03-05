# UAT Sign-off Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the formal sign-off record for User Acceptance Testing (UAT) conducted by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) policy, specifically Clause 10.9. It provides auditable evidence that business owners and relevant stakeholders have reviewed, validated, and formally accepted the completion of UAT prior to the deployment of technology systems, changes, or enhancements into the production environment.

### 1.2 Scope

This template applies to all technology systems, applications, platforms, and significant configuration changes subject to UAT within [Organization Name], including but not limited to:

- New system implementations
- System upgrades and major version releases
- Significant functional enhancements
- Critical patch deployments requiring business validation
- Regulatory-driven system changes

### 1.3 Regulatory Basis

This artifact is mandatory under the following regulatory framework:

| Framework | Clause | Requirement Summary |
|---|---|---|
| BNM RMiT | 10.9 | Requires formal testing and sign-off processes for technology changes before production deployment, including documented evidence of business owner acceptance |

---

## 2. Asset / Item Identification

*Provide complete identification details for the system, application, or change item that has undergone UAT. All fields must be populated to ensure traceability and audit readiness.*

| Field | Details |
|---|---|
| **UAT Record ID** | [UAT-YYYY-NNNN] |
| **Project / Change Reference** | [Project Name or Change Request ID] |
| **System / Application Name** | [System or Application Name] |
| **Module / Component** | [Module or Component Name, if applicable] |
| **Version / Release Number** | [Version Number, e.g., v2.3.1] |
| **UAT Environment** | [UAT Environment Name / URL / Server] |
| **UAT Start Date** | [DD/MM/YYYY] |
| **UAT End Date** | [DD/MM/YYYY] |
| **Production Deployment Target Date** | [DD/MM/YYYY] |
| **Change Ticket / JIRA Reference** | [Ticket Reference Number] |

### 2.1 UAT Scope Summary

*Describe the functional scope covered during UAT, including the key business processes tested and any explicitly excluded items.*

**In Scope:**

- [Business process or functional area 1]
- [Business process or functional area 2]
- [Business process or functional area 3]

**Out of Scope:**

- [Excluded item or area 1]
- [Excluded item or area 2]

### 2.2 Test Artefacts Reference

*List all supporting test documentation produced during the UAT cycle.*

| Artefact | Document Reference | Location / Repository |
|---|---|---|
| UAT Test Plan | [Document ID] | [Repository Path or Link] |
| UAT Test Cases | [Document ID] | [Repository Path or Link] |
| UAT Test Results Report | [Document ID] | [Repository Path or Link] |
| Defect Log | [Document ID] | [Repository Path or Link] |
| Regression Test Results | [Document ID] | [Repository Path or Link] |

---

## 3. Classification and Categorisation

*Classify the system and change according to organisational and regulatory criteria. This informs the level of scrutiny and approval required prior to sign-off.*

### 3.1 System Classification

| Attribute | Classification |
|---|---|
| **System Criticality** | [Critical / High / Medium / Low] |
| **System Type** | [Core Banking / Payment / Customer-Facing / Internal / Supporting] |
| **Data Sensitivity** | [Highly Confidential / Confidential / Internal / Public] |
| **Regulatory Designation** | [Regulated / Non-Regulated] |
| **Personal Data Involved (PDPA)** | [Yes / No] |

### 3.2 Change Categorisation

| Attribute | Details |
|---|---|
| **Change Type** | [New Implementation / Enhancement / Patch / Configuration Change / Data Migration] |
| **Change Category** | [Major / Minor / Emergency] |
| **Risk Rating** | [High / Medium / Low] |
| **Risk Rating Justification** | [Brief justification for the assigned risk rating] |

### 3.3 Testing Coverage Summary

*Summarise the overall testing coverage achieved during the UAT cycle.*

| Test Category | Total Test Cases | Passed | Failed | Deferred | Pass Rate (%) |
|---|---|---|---|---|---|
| Functional Testing | [N] | [N] | [N] | [N] | [N]% |
| Integration Testing | [N] | [N] | [N] | [N] | [N]% |
| Regression Testing | [N] | [N] | [N] | [N] | [N]% |
| Negative / Edge Case Testing | [N] | [N] | [N] | [N] | [N]% |
| Performance Testing | [N] | [N] | [N] | [N] | [N]% |
| **Total** | **[N]** | **[N]** | **[N]** | **[N]** | **[N]%** |

---

## 4. Owner and Custodian

*Identify all individuals accountable for and involved in the UAT process. All names and roles must be recorded to ensure accountability and traceability in line with RMiT ownership requirements.*

### 4.1 Business Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **Business Owner** | [Full Name] | [Department] | [Email Address] |
| **Business Process Owner** | [Full Name] | [Department] | [Email Address] |
| **UAT Coordinator** | [Full Name] | [Department] | [Email Address] |
| **End User Representative** | [Full Name] | [Department] | [Email Address] |

### 4.2 Technology Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **QA Lead** | [Full Name] | [Department / IT] | [Email Address] |
| **Project Manager** | [Full Name] | [Department / IT] | [Email Address] |
| **Solution Architect / Technical Lead** | [Full Name] | [Department / IT] | [Email Address] |
| **System Custodian** | [Full Name] | [Department / IT] | [Email Address] |

### 4.3 Risk and Compliance Oversight

| Role | Name | Department | Contact |
|---|---|---|---|
| **IT Risk Owner** | [Full Name] | [Risk / Compliance] | [Email Address] |
| **Information Security Representative** | [Full Name] | [Information Security] | [Email Address] |
| **Compliance Officer (if applicable)** | [Full Name] | [Compliance] | [Email Address] |

---

## 5. Status and Lifecycle Stage

*Document the current status of the UAT cycle and the system's position within the change lifecycle. This section must be updated to reflect the final outcome before formal sign-off is obtained.*

### 5.1 UAT Outcome

| Field | Details |
|---|---|
| **Overall UAT Status** | [Pass / Pass with Conditions / Fail] |
| **Defects Raised (Total)** | [Number] |
| **Defects Resolved (Pre Sign-off)** | [Number] |
| **Defects Deferred (Post-Deployment)** | [Number] |
| **Outstanding Critical / High Defects** | [Number — must be 0 for unconditional sign-off] |
| **Deferred Defect Risk Accepted By** | [Name, Role] |

### 5.2 Defect Summary

*List all outstanding or deferred defects at the time of sign-off. Critical and High severity defects must be resolved or have documented acceptance and mitigation.*

| Defect ID | Description | Severity | Status | Resolution / Workaround | Accepted By |
|---|---|---|---|---|---|
| [DEF-001] | [Defect description] | [Critical / High / Medium / Low] | [Open / Resolved / Deferred] | [Resolution or workaround description] | [Name, Role] |
| [DEF-002] | [Defect description] | [Critical / High / Medium / Low] | [Open / Resolved / Deferred] | [Resolution or workaround description] | [Name, Role] |
| [DEF-003] | [Defect description] | [Critical / High / Medium / Low] | [Open / Resolved / Deferred] | [Resolution or workaround description] | [Name, Role] |

### 5.3 Lifecycle Stage

| Stage | Status | Date Completed |
|---|---|---|
| Requirements Sign-off | [Completed / Pending / N/A] | [DD/MM/YYYY] |
| Development Complete | [Completed / Pending / N/A] | [DD/MM/YYYY] |
| SIT / System Testing Complete | [Completed / Pending / N/A] | [DD/MM/YYYY] |
| UAT Complete | [Completed / Pending / N/A] | [DD/MM/YYYY] |
| **UAT Sign-off** | **[Completed / Pending]** | **[DD/MM/YYYY]** |
| Change Advisory Board (CAB) Approval | [Completed / Pending / N/A] | [DD/MM/YYYY] |
| Production Deployment | [Completed / Pending / Scheduled] | [DD/MM/YYYY] |
| Post-Implementation Review (PIR) | [Completed / Pending / Scheduled] | [DD/MM/YYYY] |

### 5.4 Conditions of Sign-off

*Where UAT is signed off with conditions, all conditions must be explicitly documented below. Leave blank if sign-off is unconditional.*

| Condition ID | Condition Description | Responsible Party | Target Completion Date |
|---|---|---|---|
| [CON-001] | [Description of condition that must be met post sign-off] | [Name, Role] | [DD/MM/YYYY] |
| [CON-002] | [Description of condition that must be met post sign-off] | [Name, Role] | [DD/MM/YYYY] |

---

## 6. Last Review Date

*Record the review history of this UAT sign-off record. As a per-event artefact, this section captures the date of issuance and any subsequent reviews performed as part of periodic quality assurance or audit activities.*

### 6.1 Review Schedule

| Review Type | Frequency | Last Review Date | Next Review Date | Reviewed By |
|---|---|---|---|---|
| Initial Issuance (per-event) | Per deployment event | [DD/MM/YYYY] | N/A | [QA Lead Name] |
| Periodic Quality Review | Quarterly | [DD/MM/YYYY] | [DD/MM/YYYY] | [QA Lead Name] |
| Internal Audit Review | Annual / as required | [DD/MM/YYYY] | [DD/MM/YYYY] | [Internal Audit Representative] |
| Regulatory Review | As required by BNM | [DD/MM/YYYY] | [DD/MM/YYYY] | [Compliance Officer] |

### 6.2 Review Notes

*Record any observations or actions arising from periodic reviews of this record.*

| Review Date | Reviewer | Observations | Actions Required |
|---|---|---|---|
| [DD/MM/YYYY] | [Name, Role] | [Observation details] | [Action required, if any] |
| [DD/MM/YYYY] | [Name, Role] | [Observation details] | [Action required, if any] |

---

## 7. Formal UAT Sign-off

*This section constitutes the formal, legally binding acceptance of UAT completion by all required business and technology stakeholders. All signatories confirm they have reviewed the UAT test results, defect log, and conditions of sign-off (if any) and are satisfied that the system is ready for production deployment.*

### 7.1 Business Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Business Owner | [Full Name] | __________________ | [DD/MM/YYYY] |
| Business Process Owner | [Full Name] | __________________ | [DD/MM/YYYY] |
| UAT Coordinator | [Full Name] | __________________ | [DD/MM/YYYY] |

**Business Owner Declaration:**

> I, [Business Owner Full Name], as Business Owner for [System / Application Name], confirm that User Acceptance Testing has been completed in accordance with the agreed UAT scope and acceptance criteria. I formally accept the test results and authorise the progression of [System / Application Name] version [Version Number] to the production environment, subject to the conditions noted in Section 5.4 (if any).

### 7.2 Technology Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead | [Full Name] | __________________ | [DD/MM/YYYY] |
| Project Manager | [Full Name] | __________________ | [DD/MM/YYYY] |
| Solution Architect / Technical Lead | [Full Name] | __________________ | [DD/MM/YYYY] |

### 7.3 Risk and Compliance Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Risk Owner | [Full Name] | __________________ | [DD/MM/YYYY] |
| Information Security Representative | [Full Name] | __________________ | [DD/MM/YYYY] |
| Compliance Officer (if applicable) | [Full Name] | __________________ | [DD/MM/YYYY] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the creation, completion, review, and retention of UAT Sign-off Records.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Business Owner | QA Lead | Project Manager | IT Risk Owner | Information Security | Compliance Officer | IT Operations |
|---|---|---|---|---|---|---|---|
| Define UAT scope and acceptance criteria | A | R | C | C | C | I | I |
| Prepare UAT test cases | C | R | I | I | I | I | I |
| Execute UAT test cases | R | A | I | I | I | I | I |
| Log and manage defects | C | R | A | I | I | I | I |
| Validate defect resolution | R | A | C | I | I | I | I |
| Review UAT test results report | A | R | C | C | C | C | I |
| Assess deferred defect risk | A | C | C | R | C | C | I |
| Complete UAT sign-off record | R | R | C | C | I | I | I |
| Obtain all stakeholder signatures | C | A | R | C | C | C | I |
| Approve production deployment | A | C | R | C | C | C | I |
| Retain sign-off records for audit | I | A | I | C | C | C | R |
| Periodic review of sign-off records | I | A | I | C | I | C | I |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial version |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 9.2 Document Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead (Document Owner) | [Full Name] | __________________ | [DD/MM/YYYY] |
| IT Risk Owner | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Officer / Head of IT | [Full Name] | __________________ | [DD/MM/YYYY] |
| Compliance Officer | [Full Name] | __________________ | [DD/MM/YYYY] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.9 | Requires documented evidence of formal testing and business owner sign-off for technology changes prior to production deployment |
| BNM RMiT | Clause 10 (General) | Technology risk management requirements covering the system development lifecycle |
| [Organization Name] Change Management Policy | [Document ID] | Internal change management procedures governing deployment to production |
| [Organization Name] IT Risk Management Framework | [Document ID] | Internal framework for identifying, assessing, and accepting technology risk |
| [Organization Name] Quality Assurance Policy | [Document ID] | Internal QA standards and testing requirements |
| Personal Data Protection Act 2010 (PDPA) | Section 9 — Security | Data security obligations relevant to systems processing personal data |
| NACSA Cybersecurity Policy | [Applicable Section] | National cybersecurity requirements applicable to systems in scope |

---

## 11. Appendices

### Appendix A — UAT Acceptance Criteria Checklist

*Complete this checklist prior to obtaining signatures to confirm all acceptance criteria have been validated.*

| # | Acceptance Criterion | Met (Y/N) | Evidence Reference | Notes |
|---|---|---|---|---|
| 1 | All critical and high-severity defects resolved | [Y/N] | [Reference] | [Notes] |
| 2 | Overall test pass rate meets or exceeds [X]% threshold | [Y/N] | [Reference] | [Notes] |
| 3 | All in-scope business processes tested and validated | [Y/N] | [Reference] | [Notes] |
| 4 | Integration points with dependent systems verified | [Y/N] | [Reference] | [Notes] |
| 5 | Performance benchmarks met under expected load | [Y/N] | [Reference] | [Notes] |
| 6 | Security and access control requirements validated | [Y/N] | [Reference] | [Notes] |
| 7 | Data integrity checks completed and passed | [Y/N] | [Reference] | [Notes] |
| 8 | Rollback / backout plan reviewed and confirmed | [Y/N] | [Reference] | [Notes] |
| 9 | User training completed (if applicable) | [Y/N] | [Reference] | [Notes] |
| 10 | Regulatory-specific requirements validated (if applicable) | [Y/N] | [Reference] | [Notes] |

### Appendix B — Deferred Defect Risk Acceptance Form

*Complete one entry per deferred defect where the Business Owner formally accepts residual risk of deploying with a known defect.*

| Field | Details |
|---|---|
| **Defect ID** | [DEF-XXX] |
| **Defect Description** | [Description of the defect being deferred] |
| **Severity** | [Medium / Low — Critical and High should not be deferred without executive approval] |
| **Reason for Deferral** | [Business justification for proceeding with deployment despite this defect] |
| **Business Impact** | [Description of impact if defect manifests in production] |
| **Interim Mitigation / Workaround** | [Steps to mitigate or work around the defect until resolved] |
| **Target Fix Date** | [DD/MM/YYYY] |
| **Risk Accepted By (Name)** | [Full Name] |
| **Risk Accepted By (Role)** | [Role] |
| **Signature** | __________________ |
| **Date** | [DD/MM/YYYY] |

### Appendix C — Glossary

| Term | Definition |
|---|---|
| UAT | User Acceptance Testing — the final phase of software testing in which actual users validate that the system meets business requirements before production deployment |
| Sign-off | Formal written acknowledgement by an authorised business or technology stakeholder that testing is complete and the system is approved for promotion to production |
| Defect | A deviation from expected system behaviour identified during testing |
| Deferred Defect | A known defect for which business has accepted the risk of deploying to production, with a documented plan to resolve post-deployment |
| QA Lead | The individual responsible for overseeing the quality assurance and testing process and maintaining this record |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| CAB | Change Advisory Board — the governance body responsible for approving changes to production environments |
| PIR | Post-Implementation Review — a structured assessment conducted after production deployment to evaluate the success of a change |
| SIT | System Integration Testing — a phase of testing that verifies interactions between system components prior to UAT |

### Appendix D — Document Retention

*Retain this record in accordance with the following requirements.*

| Requirement | Details |
|---|---|
| **Minimum Retention Period** | 7 years from date of sign-off, or as required by BNM examination notice, whichever is longer |
| **Storage Location** | [Document Management System Name / Repository Path] |
| **Access Control** | Restricted to QA Lead, Compliance, Internal Audit, IT Risk, and authorised BNM examiners |
| **Disposal Method** | Secure deletion in accordance with [Organization Name] Data Disposal Policy [Document ID] |
| **Regulatory Basis** | BNM RMiT Clause 10.9; Financial Services Act 2013; PDPA 2010 |

---

*This document is classified as **Confidential**. Unauthorised disclosure is prohibited. For queries regarding this template, contact the QA Lead at [QA Lead Email Address].*