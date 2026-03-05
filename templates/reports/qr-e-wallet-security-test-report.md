# QR/E-Wallet Security Test Report

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
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for the use of authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Risk Ratings and Prioritisation](#5-risk-ratings-and-prioritisation)
6. [Recommendations and Action Items](#6-recommendations-and-action-items)
7. [Management Response](#7-management-response)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document presents the results of security testing conducted on the QR code payment and e-wallet features of [Organization Name]'s digital financial services platform. It is produced in accordance with the Bank Negara Malaysia (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.9**, which mandates that financial institutions implement and maintain rigorous security testing practices for payment and transaction services.

The report serves to:

- Document all security vulnerabilities, weaknesses, and observations identified during testing
- Provide a risk-based prioritisation of findings to guide remediation efforts
- Demonstrate compliance with BNM RMiT security testing requirements for digital payment channels
- Serve as an auditable record for regulatory review and internal governance purposes

### 1.2 Scope

*Define the boundaries of the security assessment, including the systems, features, environments, and time period covered.*

**In Scope:**

- QR code generation, scanning, and payment processing modules
- E-wallet account management functions (registration, top-up, withdrawal, transfer)
- Mobile application components (iOS and Android) interfacing with QR/e-wallet services
- Backend APIs and microservices supporting QR/e-wallet transactions
- Authentication and authorisation mechanisms for e-wallet access
- Tokenisation and encryption of payment credentials
- Third-party integrations and payment gateway connectors
- [Additional scope items as applicable]

**Out of Scope:**

- Core banking systems beyond the defined integration points
- Physical ATM and point-of-sale terminal hardware
- Network infrastructure not directly supporting QR/e-wallet services
- [Additional out-of-scope items as applicable]

**Test Environment:**

| Parameter | Details |
|---|---|
| **Environment** | [Production / Staging / UAT / Dedicated Test Environment] |
| **Application Version** | [Version Number] |
| **Test Period** | [Start Date] to [End Date] |
| **Testing Conducted By** | [Internal Team / Appointed Third-Party Assessor] |
| **Assessment Type** | [Penetration Test / Vulnerability Assessment / Code Review / Combination] |

### 1.3 Regulatory Context

This report is prepared in fulfilment of the following regulatory obligations:

| Regulation | Clause / Section | Requirement |
|---|---|---|
| BNM RMiT Policy Document | Clause 12.9 | Security testing for payment systems and digital financial services |
| BNM RMiT Policy Document | [Additional Clauses] | [Requirement Description] |
| PDPA 2010 | [Section] | Personal data protection in payment processing |
| [Other applicable regulation] | [Clause] | [Requirement] |

---

## 2. Executive Summary

*Provide a concise, non-technical overview of the security assessment, suitable for senior management and board-level review. Summarise the overall security posture, the number and severity of findings, and the recommended course of action.*

### 2.1 Assessment Overview

[Organization Name] engaged [Internal Security Team / Name of Third-Party Assessor] to conduct a security assessment of its QR code and e-wallet platform during the period of **[Start Date]** to **[End Date]**. The assessment was commissioned to satisfy BNM RMiT Clause 12.9 requirements and forms part of the organisation's quarterly security testing programme.

The assessment covered **[number]** systems and **[number]** functional areas, including [briefly list key areas assessed].

### 2.2 Overall Security Posture

*State the overall risk rating of the assessed platform. Use a clear, consistent rating aligned to the organisation's risk framework.*

| Overall Security Rating | [Critical / High / Medium / Low / Informational] |
|---|---|
| **Total Findings** | [Total Number] |
| **Critical** | [Number] |
| **High** | [Number] |
| **Medium** | [Number] |
| **Low** | [Number] |
| **Informational** | [Number] |

### 2.3 Key Highlights

*Summarise the most significant findings and their business impact in three to five bullet points.*

- **[Finding Category]:** [Brief description of the most critical finding and its potential impact.]
- **[Finding Category]:** [Brief description of a high-severity finding.]
- **[Finding Category]:** [Brief description of a notable medium-severity finding.]
- **[Finding Category]:** [Any significant positive observations or security controls found to be operating effectively.]

### 2.4 Summary Recommendation

*State the primary recommended action. For example, whether the platform should proceed to production, requires immediate remediation before go-live, or can continue operating subject to mitigating controls.*

[Provide one to two sentences summarising the overall recommendation and urgency of remediation activities.]

---

## 3. Scope and Methodology

### 3.1 Testing Approach

*Describe the methodology used to conduct the security assessment, including the testing framework, types of testing performed, and any constraints encountered.*

The security assessment was conducted using the following methodology:

| Testing Phase | Description | Duration |
|---|---|---|
| Reconnaissance & Information Gathering | [Description] | [Duration] |
| Threat Modelling | [Description] | [Duration] |
| Automated Vulnerability Scanning | [Description] | [Duration] |
| Manual Penetration Testing | [Description] | [Duration] |
| Source Code Review | [Description] | [Duration] |
| API Security Testing | [Description] | [Duration] |
| Reporting & Verification | [Description] | [Duration] |

### 3.2 Testing Standards and Frameworks

*List the industry standards and testing frameworks applied during the assessment.*

The assessment was conducted in alignment with the following frameworks and standards:

- **OWASP Mobile Application Security Verification Standard (MASVS)** – Mobile application security controls
- **OWASP API Security Top 10** – API-specific vulnerability testing
- **OWASP Testing Guide (OTG)** – Web application security testing
- **PCI DSS v4.0** – Payment Card Industry security requirements
- **NIST SP 800-115** – Technical guide to information security testing
- **[Additional standards as applicable]**

### 3.3 Tools Used

*List the tools and technologies used during the assessment.*

| Tool | Version | Purpose |
|---|---|---|
| [Tool Name] | [Version] | [e.g., Automated vulnerability scanning] |
| [Tool Name] | [Version] | [e.g., Dynamic application security testing (DAST)] |
| [Tool Name] | [Version] | [e.g., Static application security testing (SAST)] |
| [Tool Name] | [Version] | [e.g., API fuzzing and testing] |
| [Tool Name] | [Version] | [e.g., Network traffic interception and analysis] |

### 3.4 Testing Constraints and Assumptions

*Document any limitations, constraints, or assumptions that may affect the completeness or accuracy of the findings.*

- [Constraint 1: e.g., Testing was limited to non-production environment; findings may not fully reflect production configuration.]
- [Constraint 2: e.g., Third-party payment gateway APIs were excluded from active testing per contractual restrictions.]
- [Assumption 1: e.g., Source code provided was assumed to be representative of the deployed build.]
- [Additional constraints or assumptions as applicable]

### 3.5 QR Code Security Test Coverage

*Detail the specific QR code and e-wallet security test cases executed.*

| Test Case ID | Test Area | Description | Result |
|---|---|---|---|
| QR-001 | QR Code Generation | Verify uniqueness and non-predictability of generated QR codes | [Pass / Fail / N/A] |
| QR-002 | QR Code Expiry | Validate time-bound validity and expiry enforcement | [Pass / Fail / N/A] |
| QR-003 | QR Code Tampering | Test resistance to QR payload manipulation and injection | [Pass / Fail / N/A] |
| QR-004 | QR Code Replay Attack | Verify single-use enforcement to prevent replay attacks | [Pass / Fail / N/A] |
| QR-005 | QR Code Amount Manipulation | Test integrity of transaction amount embedded in QR payload | [Pass / Fail / N/A] |
| EW-001 | Authentication – Login | Test e-wallet login for brute force, credential stuffing controls | [Pass / Fail / N/A] |
| EW-002 | Session Management | Validate session token security, expiry, and invalidation | [Pass / Fail / N/A] |
| EW-003 | Transaction Authorisation | Test multi-factor authorisation for high-value transactions | [Pass / Fail / N/A] |
| EW-004 | Balance Manipulation | Verify server-side validation of transaction amounts and balances | [Pass / Fail / N/A] |
| EW-005 | API Authorisation | Test for broken object-level and function-level authorisation in APIs | [Pass / Fail / N/A] |
| EW-006 | Data Encryption | Verify encryption of sensitive data in transit and at rest | [Pass / Fail / N/A] |
| EW-007 | Data Leakage | Check for sensitive data exposure in logs, responses, and error messages | [Pass / Fail / N/A] |
| EW-008 | Jailbreak / Root Detection | Verify mobile app resistance on compromised devices | [Pass / Fail / N/A] |
| [Additional test cases] | | | |

---

## 4. Key Findings and Observations

*Present each security finding identified during the assessment in a structured format. Each finding should include sufficient detail to enable the remediation team to understand, reproduce, and address the issue.*

### 4.1 Findings Register

*List all findings below. Group by severity or functional area as appropriate.*

| Finding ID | Title | Affected Component | Severity | Status |
|---|---|---|---|---|
| FIND-001 | [Finding Title] | [Component/Module] | Critical | [Open / In Remediation / Closed] |
| FIND-002 | [Finding Title] | [Component/Module] | High | [Open / In Remediation / Closed] |
| FIND-003 | [Finding Title] | [Component/Module] | Medium | [Open / In Remediation / Closed] |
| FIND-004 | [Finding Title] | [Component/Module] | Low | [Open / In Remediation / Closed] |
| FIND-005 | [Finding Title] | [Component/Module] | Informational | [Open / In Remediation / Closed] |

### 4.2 Detailed Finding Descriptions

*For each finding in the register above, provide a full detailed description using the template below. Repeat this subsection for each finding.*

---

#### Finding FIND-001: [Finding Title]

| Field | Details |
|---|---|
| **Finding ID** | FIND-001 |
| **Title** | [Descriptive title of the vulnerability] |
| **Severity** | Critical |
| **Affected Component** | [e.g., QR Payment API – /api/v1/qr/generate endpoint] |
| **OWASP Category** | [e.g., OWASP API3:2023 – Broken Object Property Level Authorization] |
| **CWE Reference** | [e.g., CWE-284: Improper Access Control] |
| **CVSSv3 Score** | [e.g., 9.1 (AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N)] |
| **Status** | Open |
| **Date Identified** | [Date] |
| **Target Remediation Date** | [Date] |

**Description:**

*Provide a clear, technical description of the vulnerability, including how it was discovered and the conditions required to exploit it.*

[Describe the vulnerability in detail. Include the specific endpoint, parameter, or functionality affected. Explain the root cause.]

**Evidence:**

*Include screenshots, request/response samples, or log excerpts as evidence. Reference Appendix items where full evidence is stored.*

[Reference to Appendix [X] – Screenshot / HTTP Request / Log Sample]

```
[Sanitised HTTP request/response or code snippet demonstrating the vulnerability]
```

**Business Impact:**

*Describe the potential impact on the organisation, its customers, and regulatory standing if this vulnerability were exploited.*

[Describe the specific business, financial, reputational, and/or regulatory impact. e.g., "An attacker could manipulate QR code payment amounts, resulting in financial loss to customers and potential regulatory penalties under BNM RMiT."]

**Recommendation:**

[Provide a specific, actionable recommendation for remediation. Include references to relevant standards or secure coding guidance.]

---

#### Finding FIND-002: [Finding Title]

*[Repeat the above structure for each finding.]*

---

### 4.3 Positive Observations

*Document security controls and practices that were found to be operating effectively. Acknowledging good security practices provides a balanced assessment and supports audit evidence.*

- **[Control Area]:** [Description of effective security control observed, e.g., "Strong encryption (AES-256) was confirmed to be applied to all e-wallet data at rest."]
- **[Control Area]:** [Description of effective security control.]
- **[Control Area]:** [Description of effective security control.]

---

## 5. Risk Ratings and Prioritisation

### 5.1 Risk Rating Methodology

*Explain the risk rating framework applied to classify findings. Align this with the organisation's enterprise risk management (ERM) framework and BNM RMiT risk appetite guidance.*

Findings are rated using a risk matrix that considers both the **Likelihood** of exploitation and the **Impact** to the organisation. Ratings are assigned as follows:

| Severity | CVSS Score Range | Description | Remediation Target |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Exploitable with immediate, severe impact on confidentiality, integrity, or availability of payment systems. Regulatory breach likely. | Immediate (within 24–72 hours) |
| **High** | 7.0 – 8.9 | Significant exploitability with major potential impact. Could lead to financial loss or data breach. | Within 7–14 days |
| **Medium** | 4.0 – 6.9 | Moderate risk. Exploitable under specific conditions with limited or contained impact. | Within 30 days |
| **Low** | 0.1 – 3.9 | Minor risk with low likelihood of exploitation or minimal impact. | Within 90 days |
| **Informational** | N/A | Security observations, best practice deviations, or informational notes. No immediate risk. | Next release cycle |

### 5.2 Risk Distribution Summary

*Provide a visual or tabular summary of the distribution of findings by severity.*

| Severity | Count | Percentage |
|---|---|---|
| Critical | [Number] | [%] |
| High | [Number] | [%] |
| Medium | [Number] | [%] |
| Low | [Number] | [%] |
| Informational | [Number] | [%] |
| **Total** | **[Total]** | **100%** |

### 5.3 Risk Heat Map

*Plot findings on a likelihood vs. impact matrix to support visual risk communication.*

| | **Low Impact** | **Medium Impact** | **High Impact** | **Critical Impact** |
|---|---|---|---|---|
| **High Likelihood** | Medium | High | Critical | Critical |
| **Medium Likelihood** | Low | Medium | High | Critical |
| **Low Likelihood** | Informational | Low | Medium | High |
| **Very Low Likelihood** | Informational | Informational | Low | Medium |

*[Map each Finding ID to its corresponding cell in the heat map above, or attach a graphical heat map as Appendix [X].]*

### 5.4 Prioritised Remediation List

*Rank all findings in recommended order of remediation, considering severity, business impact, and remediation complexity.*

| Priority | Finding ID | Title | Severity | Business Impact | Estimated Effort |
|---|---|---|---|---|---|
| 1 | FIND-001 | [Title] | Critical | [Impact Description] | [Low / Medium / High] |
| 2 | FIND-002 | [Title] | High | [Impact Description] | [Low / Medium / High] |
| 3 | FIND-003 | [Title] | Medium | [Impact Description] | [Low / Medium / High] |
| 4 | FIND-004 | [Title] | Low | [Impact Description] | [Low / Medium / High] |
| 5 | FIND-005 | [Title] | Informational | [Impact Description] | [Low / Medium / High] |

---

## 6. Recommendations and Action Items

*Provide specific, actionable remediation guidance for each identified finding. Where appropriate, group related recommendations by theme or system component.*

### 6.1 Remediation Action Plan

*Define concrete remediation tasks, owners, and target completion dates for each finding.*

| Action ID | Finding ID | Recommended Action | Owner | Priority | Target Date | Status |
|---|---|---|---|---|---|---|
| ACT-001 | FIND-001 | [Specific remediation action, e.g., "Implement server-side validation of QR payload integrity using HMAC-SHA256 signing."] | [Team/Individual] | Critical | [Date] | [Not Started / In Progress / Complete] |
| ACT-002 | FIND-002 | [Specific remediation action] | [Team/Individual] | High | [Date] | [Not Started / In Progress / Complete] |
| ACT-003 | FIND-003 | [Specific remediation action] | [Team/Individual] | Medium | [Date] | [Not Started / In Progress / Complete] |
| ACT-004 | FIND-004 | [Specific remediation action] | [Team/Individual] | Low | [Date] | [Not Started / In Progress / Complete] |
| ACT-005 | FIND-005 | [Specific remediation action] | [Team/Individual] | Informational | [Date] | [Not Started / In Progress / Complete] |

### 6.2 Strategic Recommendations

*Beyond immediate remediation, provide broader strategic recommendations to improve the long-term security posture of the QR/e-wallet platform.*

**6.2.1 Security by Design**

- [Recommendation, e.g., "Integrate threat modelling as a mandatory activity in the SDLC for all new QR/e-wallet features prior to development commencement."]
- [Recommendation]

**6.2.2 Continuous Security Testing**

- [Recommendation, e.g., "Implement automated SAST/DAST scanning in the CI/CD pipeline to detect vulnerabilities at the point of code commit."]
- [Recommendation]

**6.2.3 Third-Party Risk Management**

- [Recommendation, e.g., "Mandate security attestations from all third-party payment gateway providers on an annual basis."]
- [Recommendation]

**6.2.4 Security Awareness and Training**

- [Recommendation, e.g., "Conduct targeted secure coding training for development teams, with emphasis on OWASP Mobile Top 10 and API Security Top 10."]
- [Recommendation]

**6.2.5 Monitoring and Incident Response**

- [Recommendation, e.g., "Enhance real-time anomaly detection rules in SIEM for QR payment transaction patterns indicative of replay or enumeration attacks."]
- [Recommendation]

---

## 7. Management Response

*This section is to be completed by the relevant business and technology owners upon receipt of this report. Management response should address each finding and confirm remediation commitments.*

### 7.1 Management Acknowledgement

*Business and technology owners confirm receipt and review of this security test report.*

| Role | Name | Acknowledgement Date | Signature |
|---|---|---|---|
| Chief Technology Officer / Chief Information Officer | [Name] | [Date] | [Signature] |
| Head of Digital Banking / Payments | [Name] | [Date] | [Signature] |
| Head of Information Security | [Name] | [Date] | [Signature] |
| QA Lead | [Name] | [Date] | [Signature] |

### 7.2 Management Response to Findings

*For each finding, management should provide their response, including acceptance of risk, remediation plan, or dispute of finding.*

| Finding ID | Severity | Management Response | Remediation Plan | Committed Date | Accountable Owner |
|---|---|---|---|---|---|
| FIND-001 | Critical | [Accept / Remediate / Risk Accept with Justification / Dispute] | [Brief description of remediation plan] | [Date] | [Name/Role] |
| FIND-002 | High | [Accept / Remediate / Risk Accept with Justification / Dispute] | [Brief description of remediation plan] | [Date] | [Name/Role] |
| FIND-003 | Medium | [Accept / Remediate / Risk Accept with Justification / Dispute] | [Brief description of remediation plan] | [Date] | [Name/Role] |
| FIND-004 | Low | [Accept / Remediate / Risk Accept with Justification / Dispute] | [Brief description of remediation plan] | [Date] | [Name/Role] |
| FIND-005 | Informational | [Accept / Remediate / Risk Accept with Justification / Dispute] | [Brief description of remediation plan] | [Date] | [Name/Role] |

### 7.3 Risk Acceptance Register

*Where management elects to accept a risk rather than remediate, a formal risk acceptance must be documented and authorised by an appropriate level of authority.*

| Finding ID | Risk Description | Justification for Acceptance | Compensating Controls | Risk Owner | Approval Authority | Expiry Date |
|---|---|---|---|---|---|---|
| [FIND-XXX] | [Risk description] | [Business justification] | [Description of compensating controls in place] | [Name/Role] | [Name/Role] | [Date] |

---

## 8. Roles and Responsibilities

*Define the roles and responsibilities for security testing activities, finding remediation, and ongoing management of the QR/e-wallet security posture.*

### 8.1 RACI Matrix

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

| Activity | CIO / CTO | Head of InfoSec | QA Lead | Development Team | Risk & Compliance | Business Owner | Third-Party Assessor |
|---|---|---|---|---|---|---|---|
| Commission security testing | A | C | R | I | C | C | — |
| Define testing scope and objectives | A | C | R | C | C | C | C |
| Execute security testing | I | C | A | C | I | I | R |
| Review and validate findings | I | A | R | C | C | I | R |
| Prepare security test report | I | C | A | I | I | I | R |
| Present findings to management | A | R | R | I | C | I | C |
| Approve remediation plan | A | C | I | I | C | A | — |
| Execute remediation activities | I | C | C | R | I | I | — |
| Verify remediation effectiveness | I | A | R | I | I | I | C |
| Escalate unresolved critical findings | A | R | R | I | R | I | — |
| Maintain findings register | I | A | R | I | C | I | — |
| Report to Board / Risk Committee | A | C | I | I | R | C | — |
| Archive test report for regulatory purposes | I | R | A | I | R | I | — |

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Report Owner (QA Lead) | [Name] | [Department] | [Email] |
| Information Security Lead | [Name] | Information Security | [Email] |
| Development Team Lead | [Name] | [Department] | [Email] |
| Risk & Compliance Officer | [Name] | Risk & Compliance | [Email] |
| Third-Party Assessor Contact | [Name] | [Organisation] | [Email] |

---

## 9. Review and Approval

### 9.1 Review Schedule

*This report is reviewed on a quarterly basis or following any significant change to the QR/e-wallet platform, whichever occurs first.*

| Review Trigger | Frequency | Next Scheduled Review |
|---|---|---|
| Periodic Review | Quarterly | [Date] |
| Post-Significant Change | As required | [Date / Event Trigger] |
| Post-Incident | Within 30 days of incident resolution | [Date / N/A] |
| Regulatory Request | As directed | [Date / N/A] |

### 9.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version |
| [Version] | [Date] | [Author Name] | [Description of changes] |
| [Version] | [Date] | [Author Name] | [Description of changes] |

### 9.3 Approval Sign-Off

*This document requires approval from the following roles prior to distribution and submission for regulatory purposes.*

| Role | Name | Signature | Date Approved |
|---|---|---|---|
| QA Lead | [Name] | [Signature] | [Date] |
| Head of Information Security | [Name] | [Signature] | [Date] |
| Head of Digital Banking / Payments | [Name] | [Signature] | [Date] |
| Chief Information Officer / Chief Technology Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer (for Critical/High findings) | [Name] | [Signature] | [Date] |

---

## 10. References

*This document is produced in compliance with and with reference to the following regulatory instruments, standards, and internal policies.*

### 10.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause / Section |
|---|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 12.9 – Security Testing |
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | [Other applicable clauses] |
| Act 709 | Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | [Relevant sections] |
| [Reference] | [Title] | [Issuing Body] | [Relevant section] |

### 10.2 Industry Standards

| Standard | Title | Version / Year |
|---|---|---|
| OWASP MASVS | Mobile Application Security Verification Standard | [Version] |
| OWASP API Security Top 10 | API Security Top 10 | [Version/Year] |
| PCI DSS | Payment Card Industry Data Security Standard | v4.0 |
| NIST SP 800-115 | Technical Guide to Information Security Testing and Assessment | [Version] |
| ISO/IEC 27001 | Information Security Management Systems | 2022 |
| [Standard] | [Title] | [Version] |

### 10.3 Internal Policy References

| Document ID | Document Title | Owner |
|---|---|---|
| [Doc ID] | Information Security Policy | [Owner] |
| [Doc ID] | Secure Software Development Lifecycle (SSDLC) Policy | [Owner] |
| [Doc ID] | Vulnerability Management Policy | [Owner] |
| [Doc ID] | Digital Payment Security Standard | [Owner] |
| [Doc ID] | [Other relevant internal policy] | [Owner] |

---

## 11. Appendices

*Supporting evidence, detailed technical data, and supplementary materials are included in the appendices below. Appendices should be classified at the same level as the main report unless stated otherwise.*

### Appendix A – Detailed Test Evidence

*Repository of full screenshots, HTTP request/response captures, proof-of-concept code, and log extracts referenced in Section 4. Each item should be labelled with its corresponding Finding ID.*

| Exhibit | Finding Reference | Description | Location |
|---|---|---|---|
| A-001 | FIND-001 | [Description of evidence, e.g., "HTTP request demonstrating QR payload tampering"] | [File reference / Attachment] |
| A-002 | FIND-002 | [Description of evidence] | [File reference / Attachment] |
| A-003 | FIND-003 | [Description of evidence] | [File reference / Attachment] |

### Appendix B – Full Test Case Execution Results

*Complete log of all test cases executed, including pass/fail status, tester notes, and execution timestamps.*

| Test Case ID | Test Area | Test Objective | Steps | Expected Result | Actual Result | Status | Tester | Date |
|---|---|---|---|---|---|---|---|---|
| QR-001 | QR Generation | [Objective] | [Steps] | [Expected] | [Actual] | [Pass/Fail] | [Tester] | [Date] |
| QR-002 | QR Expiry | [Objective] | [Steps] | [Expected] | [Actual] | [Pass/Fail] | [Tester] | [Date] |
| EW-001 | Authentication | [Objective] | [Steps] | [Expected] | [Actual] | [Pass/Fail] | [Tester] | [Date] |
| [Additional rows] | | | | | | | | |

### Appendix C – Vulnerability Scan Raw Output

*Unedited output from automated vulnerability scanning tools. This appendix contains technical data and is intended for InfoSec and engineering teams.*

> [Attach or reference automated scan reports here. Ensure sensitive system details are appropriately controlled.]

- [Tool Name] Scan Report – [Date] – [File Reference]
- [Tool Name] Scan Report – [Date] – [File Reference]

### Appendix D – Third-Party Assessor Credentials and Engagement Details

*Details of the third-party security assessor engaged to conduct this assessment, including qualifications, engagement letter reference, and non-disclosure agreement (NDA) confirmation.*

| Field | Details |
|---|---|
| **Assessor Organisation** | [Name of Third-Party Firm] |
| **Lead Assessor** | [Name] |
| **Certifications** | [e.g., CREST, OSCP, CEH, CISSP] |
| **Engagement Reference** | [Contract / Purchase Order Number] |
| **NDA Confirmed** | [Yes / No] |
| **Rules of Engagement Agreed** | [Yes / No] |
| **Date of Engagement Letter** | [Date] |

### Appendix E – Remediation Verification Evidence

*Evidence collected during re-testing to confirm that identified findings have been successfully remediated. To be completed after remediation activities are finalised.*

| Finding ID | Original Severity | Remediation Action Taken | Re-Test Date | Re-Test Result | Verified By |
|---|---|---|---|---|---|
| FIND-001 | Critical | [Description of fix applied] | [Date] | [Closed / Partially Remediated / Not Remediated] | [Name] |
| FIND-002 | High | [Description of fix applied] | [Date] | [Closed / Partially Remediated / Not Remediated] | [Name] |
| FIND-003 | Medium | [Description of fix applied] | [Date] | [Closed / Partially Remediated / Not Remediated] | [Name] |

### Appendix F – Glossary

| Term | Definition |
|---|---|
| **CVSSv3** | Common Vulnerability Scoring System version 3 – an industry standard for rating the severity of security vulnerabilities |
| **DAST** | Dynamic Application Security Testing – testing a running application for vulnerabilities |
| **E-Wallet** | Electronic wallet; a digital payment instrument enabling storage and transfer of monetary value |
| **MASVS** | Mobile Application Security Verification Standard – OWASP standard for mobile application security |
| **OWASP** | Open Web Application Security Project – a non-profit foundation producing guidance on software security |
| **QR Code** | Quick Response code – a machine-readable two-dimensional barcode used for payment initiation |
| **RACI** | Responsibility Assignment Matrix (Responsible, Accountable, Consulted, Informed) |
| **RMiT** | Risk Management in Technology – BNM policy document governing technology risk for financial institutions |
| **SAST** | Static Application Security Testing – analysis of source code or compiled code for vulnerabilities |
| **SDLC** | Software Development Lifecycle |
| **SIEM** | Security Information and Event Management |
| **[Term]** | [Definition] |

---

*End of Document*

---

| Field | Value |
|---|---|
| **Document Title** | QR/E-Wallet Security Test Report |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead – [Name], [Organization Name] |
| **Last Updated** | [Date] |