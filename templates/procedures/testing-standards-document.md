# Testing Standards Document

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., IT-POL-TST-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Head of IT Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date, typically 12 months from Last Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Regulatory Framework** | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) |
| **Applicable RMiT Clauses** | 10.8 |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name] and must not be disclosed to unauthorized parties without prior written approval from the document owner. Unauthorized disclosure may constitute a breach of regulatory obligations under BNM guidelines and applicable Malaysian law.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Testing Policy Statements and Requirements](#4-testing-policy-statements-and-requirements)
5. [Functional Testing Standards](#5-functional-testing-standards)
6. [Integration Testing Standards](#6-integration-testing-standards)
7. [Performance Testing Standards](#7-performance-testing-standards)
8. [Security Testing Standards](#8-security-testing-standards)
9. [Test Environment Management](#9-test-environment-management)
10. [Test Data Management](#10-test-data-management)
11. [Defect Management](#11-defect-management)
12. [Test Completion and Exit Criteria](#12-test-completion-and-exit-criteria)
13. [Exceptions and Escalation Process](#13-exceptions-and-escalation-process)
14. [Compliance and Enforcement](#14-compliance-and-enforcement)
15. [Review and Approval History](#15-review-and-approval-history)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and the problems it addresses. Explain why formalised testing standards are necessary for the organisation's technology risk posture.*

This Testing Standards Document establishes the mandatory requirements, methodologies, and minimum acceptance criteria governing all technology testing activities conducted by [Organization Name]. It provides a structured framework to ensure that information systems, applications, and infrastructure are subjected to rigorous and consistent testing prior to deployment into production environments, thereby protecting the integrity, availability, and confidentiality of [Organization Name]'s technology assets and the financial data entrusted to it.

This document directly supports [Organization Name]'s obligations under BNM's Risk Management in Technology (RMiT) Policy Document, particularly Clause 10.8, which mandates that financial institutions maintain comprehensive technology testing standards to manage technology risks arising from system changes and new deployments.

### 1.2 Scope

*Define which systems, teams, projects, and activities fall within the boundary of this document. Be specific about inclusions and exclusions.*

This document applies to:

**In Scope:**

- All internally developed, third-party procured, and outsourced information systems and applications deployed or operated by [Organization Name]
- All technology change initiatives including new system implementations, major upgrades, patches, and configuration changes
- All technology infrastructure components including servers, networks, databases, cloud services, and middleware
- All IT personnel, project teams, vendors, and third-party service providers involved in testing activities on behalf of [Organization Name]
- All technology environments (development, system integration testing, user acceptance testing, staging, and production)
- APIs, microservices, batch processes, and automated workflows forming part of [Organization Name]'s technology landscape

**Out of Scope:**

- [List any explicitly excluded systems, environments, or activities, e.g., legacy systems under decommission plans, isolated research environments]
- Informal proof-of-concept or sandbox activities that do not feed into production pipelines

### 1.3 Definitions

*Provide definitions for key technical and regulatory terms used throughout this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **Functional Testing** | Testing that validates whether a system or component performs its intended functions correctly against specified requirements |
| **Integration Testing** | Testing that verifies the interactions and data exchange between integrated systems, modules, or components |
| **Performance Testing** | Testing that evaluates system behaviour under expected and peak load conditions, including stress, load, and volume testing |
| **Security Testing** | Testing activities designed to identify vulnerabilities, weaknesses, and security control gaps within systems and applications |
| **User Acceptance Testing (UAT)** | End-user validation of a system against business requirements prior to production deployment |
| **Regression Testing** | Retesting of previously validated functionality to confirm that changes have not introduced unintended defects |
| **Test Environment** | A controlled infrastructure environment dedicated to testing activities, isolated from production |
| **Test Data** | Data used to execute test cases; may be synthesised, anonymised, or masked from production data |
| **Exit Criteria** | Pre-defined conditions that must be satisfied before testing is deemed complete and deployment is approved |
| **Defect** | Any deviation between expected and actual behaviour identified during testing |
| **Critical Defect** | A defect that causes system failure, data corruption, security breach, or regulatory non-compliance |
| **RMiT** | Risk Management in Technology — BNM Policy Document outlining technology risk management requirements for financial institutions |
| **VAPT** | Vulnerability Assessment and Penetration Testing — formal security testing methodology |
| **SLA** | Service Level Agreement — documented performance commitments between parties |
| **CI/CD** | Continuous Integration / Continuous Deployment — automated software development pipeline practices |

---

## 2. Regulatory Context

### 2.1 Regulatory Basis

*Reference the specific regulatory instruments that mandate this document. Include clause references to facilitate audit traceability.*

[Organization Name] is a financial institution licensed and regulated by Bank Negara Malaysia (BNM). This document is established in compliance with the following regulatory requirements:

| Regulatory Instrument | Issuing Authority | Relevant Clause(s) | Requirement Summary |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | **10.8** | Financial institutions must establish and maintain comprehensive technology testing standards covering functional, integration, performance, and security testing prior to production deployment |
| RMiT | Bank Negara Malaysia | 10.1 – 10.7 | Technology change management framework within which testing standards operate |
| RMiT | Bank Negara Malaysia | 11 | Cyber risk management, including security testing obligations |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Section 9 | Security principle requiring appropriate safeguards, informed by security testing |
| [Other applicable BNM policy documents] | Bank Negara Malaysia | [Clause reference] | [Requirement summary] |

### 2.2 Alignment with Industry Standards

*Note any international frameworks or standards that inform this document's content, demonstrating best-practice alignment.*

This document is further informed by the following internationally recognised standards and frameworks:

- **ISO/IEC 29119** — Software and Systems Engineering: Software Testing
- **OWASP Testing Guide** — Open Web Application Security Project testing methodology
- **NIST SP 800-115** — Technical Guide to Information Security Testing and Assessment
- **ISTQB** — International Software Testing Qualifications Board foundational and advanced testing principles
- **[Organization Name] Information Security Policy** — [Document ID]
- **[Organization Name] Change Management Policy** — [Document ID]

---

## 3. Roles and Responsibilities

### 3.1 Overview

*Define all roles that participate in testing activities and their respective accountabilities. This section must be kept current as the organisation evolves.*

The following roles are accountable for the planning, execution, oversight, and governance of testing activities within [Organization Name].

### 3.2 RACI Matrix

*A RACI matrix clarifies who is Responsible (does the work), Accountable (owns the outcome), Consulted (provides input), and Informed (kept up to date). Each activity should have exactly one Accountable party.*

| Testing Activity | Head of IT Operations | IT Project Manager | Test Manager / Lead | QA / Test Engineers | Business Analyst | System / Application Owner | Information Security Officer | Internal Audit | Vendor / Third Party |
|---|---|---|---|---|---|---|---|---|---|
| Define and maintain testing standards | A | C | R | C | C | C | C | I | I |
| Develop test strategy and plan | I | A | R | C | C | C | C | I | C |
| Design test cases and scripts | I | I | A | R | C | I | C | I | C |
| Functional testing execution | I | I | A | R | C | I | I | I | C |
| Integration testing execution | I | I | A | R | C | I | I | I | C |
| Performance testing execution | C | I | A | R | I | I | C | I | C |
| Security / VAPT execution | C | I | C | C | I | C | A/R | I | C |
| UAT facilitation and sign-off | I | C | C | I | R | A | I | I | I |
| Defect triage and prioritisation | I | C | A | R | C | C | C | I | C |
| Test environment provisioning | C | I | A | R | I | I | C | I | C |
| Test data management | I | I | A | R | C | I | C | I | I |
| Test completion sign-off | A | C | R | I | C | C | C | I | I |
| Exception approval | A | C | R | I | I | C | C | I | I |
| Annual standards review | A | I | R | C | I | C | C | C | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 3.3 Role Descriptions

*Provide a brief narrative description of each role's testing-specific responsibilities.*

**Head of IT Operations**
- Serves as document owner and is ultimately accountable for the implementation and enforcement of this Testing Standards Document
- Approves exceptions to mandatory testing requirements
- Ensures adequate resources are allocated for testing activities
- Escalates systemic non-compliance to the Chief Technology Officer / Chief Information Officer

**IT Project Manager**
- Integrates testing activities into project plans and schedules
- Ensures testing milestones and exit criteria are met before deployment approvals are sought
- Coordinates between development, QA, business, and security teams

**Test Manager / Lead**
- Develops and maintains the Test Strategy and Test Plan for each project or release
- Oversees all testing phases and ensures adherence to this document
- Reports test progress and defect status to project stakeholders
- Signs off test completion reports

**QA / Test Engineers**
- Design, develop, and execute test cases, test scripts, and automated test suites
- Document test results, raise defects, and verify defect resolution
- Maintain test documentation to the standards prescribed herein

**Business Analyst**
- Provides business requirements and acceptance criteria to inform test case design
- Participates in UAT planning and facilitates business user testing activities

**System / Application Owner**
- Provides UAT sign-off on behalf of the business unit
- Accepts residual risk associated with any approved exceptions within their system boundary

**Information Security Officer (ISO)**
- Defines security testing requirements and minimum security acceptance criteria
- Reviews security test results, including VAPT reports
- Approves deployment of systems subject to outstanding security defects

**Internal Audit**
- Independently assesses compliance with this Testing Standards Document
- Reviews testing documentation during audit engagements
- Reports observations and recommendations to the Audit Committee

**Vendor / Third Party**
- Complies with [Organization Name]'s testing standards when conducting testing on behalf of [Organization Name]
- Provides test evidence, reports, and documentation as required by contract

---

## 4. Testing Policy Statements and Requirements

### 4.1 Mandatory Testing Policy

*State the overarching policy positions that govern all testing at the organisation. These statements should be unambiguous and auditable.*

[Organization Name] establishes the following mandatory policy requirements for all technology testing activities:

**4.1.1** All information systems, applications, and infrastructure components must undergo formal, documented testing prior to deployment into the production environment. No system change may be promoted to production without satisfying the exit criteria defined in this document and the applicable Test Plan.

**4.1.2** Testing must be conducted across all four mandatory categories established by BNM RMiT Clause 10.8: functional testing, integration testing, performance testing, and security testing. Omission of any category requires a formal exception approved by the Head of IT Operations.

**4.1.3** Testing activities must be conducted in a dedicated, isolated test environment that reflects the production architecture. Use of the production environment for testing is strictly prohibited except in explicitly approved and controlled circumstances.

**4.1.4** All test activities, results, defects, and sign-offs must be documented and retained in accordance with [Organization Name]'s records retention policy. Testing documentation must be available for inspection by BNM, internal audit, and other authorised parties.

**4.1.5** Production data must not be used in test environments without prior written approval from the Information Security Officer and appropriate data masking or anonymisation applied in accordance with the Test Data Management Standard (Appendix C).

**4.1.6** All critical and high-severity defects must be resolved and verified before a system proceeds to production. Medium-severity defects must be documented with a documented remediation plan agreed prior to deployment. Exceptions require formal approval.

**4.1.7** Security testing, including vulnerability assessment and penetration testing (VAPT), must be conducted by qualified personnel who are independent of the development team. External VAPT must be conducted by an independent, accredited third party at intervals prescribed in Section 8.

**4.1.8** Automated testing tools and scripts used in CI/CD pipelines must be validated and version-controlled. Automated test results carry the same evidentiary weight as manual test results for compliance purposes.

**4.1.9** Testing standards must be reviewed annually and upon any significant change to [Organization Name]'s technology architecture, testing methodology, or applicable regulatory requirements.

### 4.2 Minimum Testing Requirements by Change Type

*Different change types carry different risk profiles. This table defines the minimum testing required for each.*

| Change Type | Functional | Integration | Performance | Security (VAPT) | UAT | Regression |
|---|---|---|---|---|---|---|
| New system implementation | Mandatory | Mandatory | Mandatory | Mandatory (Full) | Mandatory | N/A |
| Major system upgrade (version change) | Mandatory | Mandatory | Mandatory | Mandatory (Full) | Mandatory | Mandatory |
| Minor enhancement / patch | Mandatory | Mandatory (where interfaces affected) | Risk-based | Mandatory (Targeted) | Risk-based | Mandatory |
| Emergency / hotfix | Mandatory (expedited) | Risk-based | Risk-based | Mandatory (Targeted) | Risk-based | Mandatory |
| Infrastructure change | N/A | Mandatory (where services affected) | Mandatory | Mandatory (Targeted) | N/A | Mandatory |
| Configuration change | Mandatory | Risk-based | Risk-based | Mandatory (Targeted) | Risk-based | Mandatory |
| Third-party / vendor patch | Mandatory | Risk-based | Risk-based | Mandatory (Targeted) | Risk-based | Mandatory |

**Note:** "Risk-based" indicates that the Test Manager must document a risk assessment justifying the testing approach applied.

---

## 5. Functional Testing Standards

### 5.1 Objective

*State what functional testing seeks to achieve in the context of this organisation and its regulatory obligations.*

Functional testing validates that a system or component behaves in accordance with its specified functional requirements and business rules. The objective is to confirm that all intended features operate correctly, completely, and consistently across expected usage scenarios, prior to user acceptance testing and production deployment.

### 5.2 Functional Testing Requirements

*Enumerate the specific requirements that must be met for functional testing to satisfy this organisation's standards.*

- A formally documented **Test Plan** must be created for all functional testing activities, referencing the applicable requirements specification or user stories
- **Test cases** must achieve a minimum requirements traceability coverage of **[X]%** (recommended: 95%) against all documented functional requirements
- Test cases must cover **positive**, **negative**, and **boundary** scenarios for all critical functionality
- Functional testing must be completed before integration and user acceptance testing phases commence
- All test cases must be stored in the approved test management tool: **[Tool Name, e.g., Jira / Azure DevOps / Zephyr]**
- Test results must be formally recorded for each test case, with pass/fail status, tester identification, and date of execution

### 5.3 Test Case Structure

*Each test case documented in the test management system must conform to the following minimum structure.*

| Field | Requirement |
|---|---|
| **Test Case ID** | Unique identifier following the convention [Project Code]-TC-[Sequence] |
| **Test Case Name** | Descriptive name indicating the function being tested |
| **Requirements Reference** | Traceability link to the requirement(s) being validated |
| **Pre-conditions** | System state and data conditions required before execution |
| **Test Steps** | Step-by-step instructions for executing the test |
| **Expected Result** | Clearly defined expected outcome for each step |
| **Actual Result** | Recorded outcome upon execution |
| **Pass / Fail Status** | Determination against expected result |
| **Tested By** | Name and role of the tester |
| **Date Executed** | Date of test execution |
| **Defect Reference** | Reference to any defect raised (if applicable) |

### 5.4 Functional Testing Entry and Exit Criteria

**Entry Criteria (before functional testing may commence):**

- [ ] Approved Test Plan in place
- [ ] Test environment provisioned and stable
- [ ] Test data prepared and loaded
- [ ] System under test deployed to the test environment
- [ ] Test cases reviewed and approved by Test Manager
- [ ] Requirements specification baselined and signed off

**Exit Criteria (before functional testing may be deemed complete):**

- [ ] Minimum [X]% of test cases executed
- [ ] Minimum [X]% of executed test cases passed (recommended: 95%)
- [ ] All critical and high-severity defects resolved and verified
- [ ] Medium-severity defects documented with agreed remediation plan
- [ ] Test Completion Report produced and signed off by Test Manager

---

## 6. Integration Testing Standards

### 6.1 Objective

*Explain the purpose of integration testing and its relevance to the organisation's interconnected technology landscape.*

Integration testing validates the interactions, data flows, and interfaces between discrete system components, modules, services, and third-party systems. Given the complex and interconnected nature of [Organization Name]'s technology ecosystem — including core banking systems, payment gateways, regulatory reporting interfaces, and third-party data providers — integration testing is critical to ensure that end-to-end processes function correctly and that data integrity is maintained across system boundaries.

### 6.2 Integration Testing Requirements

- An **Integration Test Plan** must identify all interfaces and integration points within the scope of the change
- Integration testing must cover all **inbound and outbound data flows**, including API calls, file transfers, messaging queues, and database interactions
- Testing must validate **data mapping, transformation, and integrity** across all integration points
- Both **happy path** and **error/exception path** scenarios must be tested for each interface
- Integration testing must include scenarios covering **system unavailability** of downstream or upstream components (e.g., timeout handling, retry logic, fallback behaviour)
- Where third-party systems are involved, integration test evidence must be obtained and retained

### 6.3 Integration Points Register

*Maintain a register of all integration points within scope for each testing engagement. The table below provides the minimum required structure.*

| Integration ID | Source System | Target System | Interface Type | Data / Service Description | Test Scenarios | Status |
|---|---|---|---|---|---|---|
| INT-001 | [System A] | [System B] | REST API | [e.g., Customer KYC data retrieval] | [Positive / Error / Timeout] | [Pass / Fail / Pending] |
| INT-002 | [System B] | [System C] | SFTP File Transfer | [e.g., Daily transaction file] | [Positive / Missing file / Malformed data] | [Pass / Fail / Pending] |
| INT-003 | [System A] | [Regulatory Reporting Gateway] | SOAP/XML | [e.g., BNM regulatory submission] | [Positive / Rejection / Network failure] | [Pass / Fail / Pending] |
| [INT-XXX] | [Source] | [Target] | [Type] | [Description] | [Scenarios] | [Status] |

### 6.4 Integration Testing Entry and Exit Criteria

**Entry Criteria:**

- [ ] Functional testing of individual components completed with acceptable results
- [ ] Integration Test Plan approved
- [ ] All integrated systems and stubs/mocks available in the test environment
- [ ] Interface specifications and data contracts documented and baselined

**Exit Criteria:**

- [ ] All documented integration scenarios executed
- [ ] All critical interface defects resolved
- [ ] Data integrity validated end-to-end across all in-scope integration points
- [ ] Integration Test Completion Report signed off

---

## 7. Performance Testing Standards

### 7.1 Objective

*Articulate why performance testing is mandatory and what risks it mitigates for the organisation.*

Performance testing evaluates the behaviour, responsiveness, stability, and resource utilisation of systems under expected and extreme workload conditions. For [Organization Name], performance failures directly impact customer experience, business operations, and the institution's ability to meet regulatory and contractual service level obligations. Performance testing must be conducted to validate that systems can sustain peak loads such as month-end processing, festive period transaction spikes, and regulatory reporting deadlines.

### 7.2 Performance Testing Types

*The following performance testing types are recognised and must be applied as required by the risk profile of the system under test.*

| Testing Type | Description | When Required |
|---|---|---|
| **Load Testing** | Validates system behaviour under expected normal and peak load conditions | All new systems and major upgrades |
| **Stress Testing** | Determines system breaking point by subjecting it to loads beyond design capacity | New systems, systems handling critical transactions |
| **Soak / Endurance Testing** | Assesses system stability and resource behaviour over extended periods | Systems with continuous operation requirements |
| **Spike Testing** | Validates system response to sudden, sharp increases in load | Customer-facing systems, payment systems |
| **Volume Testing** | Evaluates system behaviour when processing large volumes of data | Batch processing systems, reporting systems |
| **Scalability Testing** | Assesses the system's ability to scale horizontally or vertically under increasing load | Cloud-hosted systems, microservice architectures |

### 7.3 Performance Acceptance Criteria

*Performance criteria must be defined and agreed in the Test Plan before testing commences. The thresholds below represent minimum requirements; project-specific criteria may be more stringent.*

| Metric | Minimum Acceptable Threshold | Notes |
|---|---|---|
| **Response Time (average)** | ≤ [X] seconds under normal load | Define per transaction type |
| **Response Time (95th percentile)** | ≤ [X] seconds under peak load | Recommended: ≤ 3 seconds |
| **Throughput** | ≥ [X] transactions per second | Define per system requirement |
| **Error Rate** | ≤ [X]% under normal load | Recommended: ≤ 1% |
| **CPU Utilisation (peak)** | ≤ [X]% under peak load | Recommended: ≤ 80% |
| **Memory Utilisation (peak)** | ≤ [X]% under peak load | Recommended: ≤ 80% |
| **System Availability** | ≥ [X]% during test window | Aligned to production SLA |
| **Recovery Time** | ≤ [X] minutes after failure injection | Define per RTO requirement |

### 7.4 Performance Testing Tools

*List approved performance testing tools. Unapproved tools must be authorised by the Head of IT Operations before use.*

| Tool | Approved Use | Version / Licence |
|---|---|---|
| [e.g., Apache JMeter] | Load, stress, and volume testing | [Version] |
| [e.g., k6] | Load and spike testing, CI/CD integration | [Version] |
| [e.g., Gatling] | High-throughput load testing | [Version] |
| [Tool Name] | [Use Case] | [Version] |

### 7.5 Performance Testing Entry and Exit Criteria

**Entry Criteria:**

- [ ] Performance acceptance criteria defined and agreed in the Test Plan
- [ ] Performance test environment provisioned to a specification representative of production
- [ ] Performance test scripts developed and reviewed
- [ ] Baseline performance metrics established (for regression performance testing)

**Exit Criteria:**

- [ ] All mandatory performance test scenarios executed
- [ ] All defined acceptance criteria met or exceptions approved
- [ ] Performance test report produced, reviewed, and signed off
- [ ] Performance bottlenecks identified and remediated or risk-accepted with documented rationale

---

## 8. Security Testing Standards

### 8.1 Objective

*State the security testing mandate and its connection to BNM RMiT cyber risk management requirements.*

Security testing identifies vulnerabilities, weaknesses, and security control gaps within systems, applications, and infrastructure that could be exploited by malicious actors to compromise the confidentiality, integrity, or availability of [Organization Name]'s systems and data. Security testing is mandatory under BNM RMiT and forms a critical control within [Organization Name]'s broader cyber risk management framework.

### 8.2 Security Testing Types

| Testing Type | Description | Frequency / Trigger |
|---|---|---|
| **Static Application Security Testing (SAST)** | Automated analysis of source code to identify security vulnerabilities | Integrated into CI/CD pipeline; every build |
| **Dynamic Application Security Testing (DAST)** | Automated testing of running applications for security vulnerabilities | Pre-UAT; all web-facing applications |
| **Vulnerability Assessment (VA)** | Systematic identification and classification of vulnerabilities in systems and network | Quarterly; prior to major deployments |
| **Penetration Testing (PT)** | Simulated adversarial attack to exploit identified vulnerabilities | Annually (minimum); major new systems; post significant breach |
| **Web Application Penetration Testing** | OWASP-aligned penetration testing of web applications | Prior to new web application launch; annually thereafter |
| **API Security Testing** | Assessment of API security controls including authentication, authorisation, and data validation | All new or significantly changed APIs |
| **Network Penetration Testing** | Assessment of network segmentation, firewall rules, and network-level vulnerabilities | Annually; post significant network change |
| **Social Engineering / Phishing Assessment** | Simulation of human-vector attacks | [Frequency as determined by the ISO] |
| **Red Team Exercise** | Full-scope adversarial simulation | [As determined by the Board Risk Committee] |

### 8.3 VAPT Requirements

- External VAPT must be conducted by an **independent, accredited third-party provider** with recognised certifications (e.g., CREST, OSCP, CEH)
- VAPT scope, methodology, and rules of engagement must be documented and approved by the Information Security Officer before testing commences
- VAPT reports must be provided to the ISO within **[X] business days** of test completion
- All findings must be classified using the **CVSS v3.1** scoring framework or equivalent
- Remediation timelines must be adhered to per Section 8.4
- Proof-of-exploitation artefacts (screenshots, logs) must be securely retained by the ISO

### 8.4 Security Defect Remediation Timelines

*The following timelines are mandatory unless a formal exception is approved by the Information Security Officer.*

| CVSS Score | Severity | Remediation Deadline |
|---|---|---|
| 9.0 – 10.0 | **Critical** | Within **24 hours** of identification; immediate escalation to CISO/CTO |
| 7.0 – 8.9 | **High** | Within **7 calendar days** of identification |
| 4.0 – 6.9 | **Medium** | Within **30 calendar days** of identification |
| 0.1 – 3.9 | **Low** | Within **90 calendar days** of identification |
| 0.0 | **Informational** | Address in next scheduled release cycle |

### 8.5 Security Testing Minimum Scope

*For all web and mobile applications, security testing must cover at minimum the following OWASP Top 10 categories:*

- [ ] A01: Broken Access Control
- [ ] A02: Cryptographic Failures
- [ ] A03: Injection (SQL, LDAP, OS Command, etc.)
- [ ] A04: Insecure Design
- [ ] A05: Security Misconfiguration
- [ ] A06: Vulnerable and Outdated Components
- [ ] A07: Identification and Authentication Failures
- [ ] A08: Software and Data Integrity Failures
- [ ] A09: Security Logging and Monitoring Failures
- [ ] A10: Server-Side Request Forgery (SSRF)

### 8.6 Security Testing Entry and Exit Criteria

**Entry Criteria:**

- [ ] Security Test Plan and VAPT Rules of Engagement approved by ISO
- [ ] SAST integrated into build pipeline and baseline scan completed
- [ ] System deployed to the test environment with production-representative security configuration

**Exit Criteria:**

- [ ] All Critical and High vulnerabilities remediated and verified
- [ ] Medium and Low vulnerabilities documented with remediation plan
- [ ] Security Test Report / VAPT Report issued by the testing party
- [ ] ISO sign-off obtained on security test results

---

## 9. Test Environment Management

### 9.1 Environment Standards

*Define the requirements for establishing and maintaining test environments.*

- Test environments must be **isolated from the production environment** at the network level
- Test environment configurations must be **representative of production** in terms of operating system versions, middleware, and security controls; deviations must be documented and risk-assessed
- Test environments must be managed under the **configuration management framework** ([Reference to Configuration Management Policy, Document ID])
- Access to test environments must be controlled and restricted to authorised personnel; access rights must be reviewed at least quarterly
- Test environments must be **provisioned and decommissioned** through the formal change management process
- Cloud-based test environments must comply with [Organization Name]'s Cloud Security Policy ([Document ID])

### 9.2 Environment Types

| Environment | Purpose | Owner | Data Classification |
|---|---|---|---|
| Development (DEV) | Developer unit testing and builds | Development Lead | Synthetic / anonymised data only |
| System Integration Testing (SIT) | Functional and integration testing | Test Manager | Synthetic / anonymised data only |
| User Acceptance Testing (UAT) | Business user acceptance validation | Business System Owner | Synthetic / anonymised data (production data requires ISO approval) |
| Performance Testing (PERF) | Load, stress, and volume testing | Test Manager | Synthetic / anonymised data only |
| Staging / Pre-Production | Final validation prior to production release | Head of IT Operations | Synthetic / anonymised data only |
| Production (PROD) | Live operational environment | Head of IT Operations | Production data |

---

## 10. Test Data Management

### 10.1 Test Data Requirements

*Specify how test data must be created, managed, and protected to ensure testing validity and data privacy compliance.*

- Test data must be **sufficient, representative, and controlled** to enable comprehensive test coverage
- **Production data must not be used** in any test environment without the prior written approval of the Information Security Officer and the application of approved data masking or anonymisation techniques
- Synthetic test data generation tools used must be approved: **[List approved tools]**
- Data masking and anonymisation procedures must be documented in **Appendix C**
- Test data must be refreshed or regenerated prior to each major test cycle to prevent data drift
- Sensitive test data (e.g., masked customer records) must be stored in the test environment only and must not be retained beyond the conclusion of the testing phase
- Test data management must comply with the **Personal Data Protection Act 2010 (PDPA)** and [Organization Name]'s Data Classification Policy ([Document ID])

### 10.2 Test Data Inventory

| Data Set ID | Description | Source | Masking Applied | Approved By | Expiry Date |
|---|---|---|---|---|---|
| TD-001 | [e.g., Customer demographic records] | [Synthetic / Masked production] | [Yes / No] | [ISO Name] | [Date] |
| TD-002 | [e.g., Transaction history sample] | [Synthetic / Masked production] | [Yes / No] | [ISO Name] | [Date] |
| [TD-XXX] | [Description] | [Source] | [Yes / No] | [Approver] | [Date] |

---

## 11. Defect Management

### 11.1 Defect Classification

*All defects identified during testing must be classified, tracked, and managed through the approved defect management tool.*

| Severity | Definition | Resolution Requirement |
|---|---|---|
| **Critical (S1)** | System crash, data loss, security breach, regulatory non-compliance, or complete loss of critical functionality | Must be resolved before deployment; immediate escalation required |
| **High (S2)** | Major functionality impaired with no acceptable workaround; significant impact on business operations | Must be resolved before deployment |
| **Medium (S3)** | Functionality impaired but an acceptable workaround exists; moderate business impact | Must be resolved or have an agreed remediation plan before deployment |
| **Low (S4)** | Minor defect with minimal business impact; cosmetic or non-functional | May be deferred to a future release with documented approval |

### 11.2 Defect Lifecycle

*All defects must progress through the following lifecycle states within the approved defect management tool.*

```
New → Assigned → In Progress → Fixed → Re-Test → Closed
                                  ↓
                               Rejected / Deferred
```

### 11.3 Defect Record Requirements

Each defect record must capture the following minimum information:

| Field | Requirement |
|---|---|
| **Defect ID** | Unique identifier |
| **Title** | Concise description of the defect |
| **Severity** | S1 / S2 / S3 / S4 per Section 11.1 |
| **Priority** | P1 / P2 / P3 / P4 (business priority) |
| **System / Module** | Affected system or component |
| **Test Case Reference** | Test case that identified the defect |
| **Steps to Reproduce** | Detailed reproduction steps |
| **Expected Result** | Expected system behaviour |
| **Actual Result** | Observed system behaviour |
| **Environment** | Test environment in which defect was identified |
| **Attachments** | Screenshots, logs, or other supporting evidence |
| **Raised By** | Tester name and date |
| **Assigned To** | Developer / team responsible for resolution |
| **Resolution Date** | Actual or target date of resolution |
| **Resolution Notes** | Description of fix applied |
| **Verification Date** | Date of re-test by QA |
| **Status** | Current lifecycle state |

### 11.4 Defect Escalation

- **S1 (Critical)** defects must be escalated immediately to the Test Manager, IT Project Manager, and Head of IT Operations
- Unresolved S1 defects must be escalated to the **[CTO / CIO]** within **[X] hours** if not remediated within the defined timeline
- Defect status must be reviewed at **daily stand-ups** during active testing phases
- A **Defect Ageing Report** must be produced weekly and distributed to the Head of IT Operations and IT Project Manager

---

## 12. Test Completion and Exit Criteria

### 12.1 Test Completion Requirements

*A formal test completion process must be followed for each testing phase and for the overall release. Informal or verbal sign-offs are not acceptable for audit purposes.*

Upon completion of each testing phase, the Test Manager must produce a **Test Completion Report** containing:

- [ ] Summary of testing scope and objectives
- [ ] Test execution metrics (total test cases, executed, passed, failed, blocked)
- [ ] Defect summary (by severity, status, and age)
- [ ] Outstanding defects and their agreed disposition
- [ ] Assessment of exit criteria achievement
- [ ] Recommendation (Proceed / Do Not Proceed / Conditional Proceed)
- [ ] Test Manager sign-off

### 12.2 Overall Release Exit Criteria

*The following conditions must ALL be satisfied before a change is approved for deployment to production:*

| Exit Criterion | Mandatory | Status |
|---|---|---|
| All functional test cases executed and exit criteria met | Yes | [ ] Met / [ ] Not Met |
| All integration test scenarios executed and exit criteria met | Yes | [ ] Met / [ ] Not Met |
| Performance testing completed and acceptance criteria met | Yes | [ ] Met / [ ] Not Met |
| Security testing completed; Critical and High findings resolved | Yes | [ ] Met / [ ] Not Met |
| UAT sign-off obtained from System / Application Owner | Yes | [ ] Met / [ ] Not Met |
| All Critical (S1) and High (S2) defects resolved and verified | Yes | [ ] Met / [ ] Not Met |
| All medium defects have documented remediation plans | Yes | [ ] Met / [ ] Not Met |
| Test Completion Reports produced and signed off | Yes | [ ] Met / [ ] Not Met |
| Change Management approval obtained | Yes | [ ] Met / [ ] Not Met |
| Rollback plan documented and tested | Yes | [ ] Met / [ ] Not Met |

### 12.3 Conditional Deployment

Where a conditional deployment is recommended (i.e., outstanding medium or low defects), the following must be documented:

- Nature and severity of all outstanding defects
- Business risk acceptance rationale
- Remediation commitment dates
- Named approval from the System / Application Owner and Head of IT Operations

---

## 13. Exceptions and Escalation Process

### 13.1 Exception Policy

*An exception is any deviation from the mandatory requirements of this Testing Standards Document. Exceptions are not approvals to bypass risk — they are formal risk acceptances.*

Exceptions to the requirements of this document may be granted in the following circumstances:

- Expedited change is required to respond to a critical production incident or regulatory directive
- A specific testing type is genuinely inapplicable to the nature of the change (with documented justification)
- Resource or technology constraints make full compliance impractical within a defined timeframe

Exceptions are **not** granted for:

- Routine convenience or schedule pressure without demonstrable business justification
- Repeated or systemic non-compliance with testing requirements

### 13.2 Exception Request Process

*All exception requests must follow this process. Verbal exceptions are not valid.*

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Complete the **Exception Request Form** (Appendix D) | IT Project Manager / Test Manager | Before bypassing any requirement |
| 2 | Obtain preliminary review and recommendation | Test Manager | Within [X] business days |
| 3 | Submit exception request for approval | IT Project Manager | Per approval authority below |
| 4 | Approval decision communicated | Approving Authority | Within [X] business days |
| 5 | If approved, implement compensating controls | IT Project Manager | As specified in approved exception |
| 6 | Document exception in Test Completion Report | Test Manager | At completion of test phase |
| 7 | Report exception to Head of IT Operations | IT Project Manager | Monthly exception summary |

### 13.3 Exception Approval Authority

| Exception Type | Approval Authority |
|---|---|
| Deferral of low-severity testing requirements | Test Manager |
| Deferral of medium-severity testing requirements | Head of IT Operations |
| Omission of a mandatory testing type (functional / integration / performance) | Head of IT Operations + System Owner |
| Omission of security testing (VAPT) | Head of IT Operations + Information Security Officer |
| Use of production data in test environment | Information Security Officer |
| Emergency exception (critical incident response) | [CTO / CIO] (ratified post-facto by Head of IT Operations) |

### 13.4 Escalation Matrix

| Escalation Trigger | Escalation Path | Target Resolution |
|---|---|---|
| Critical defect unresolved after [X] hours | Test Manager → Head of IT Operations → [CTO/CIO] | Immediate |
| Testing blocked by environment failure | Test Manager → Head of IT Operations | Within [X] business hours |
| Vendor non-compliance with testing standards | IT Project Manager → Head of IT Operations → Legal/Procurement | Within [X] business days |
| Systemic non-compliance identified by Internal Audit | Head of IT Operations → [CTO/CIO] → Board Risk Committee | Per audit management process |
| Regulatory inspection request for test evidence | Head of IT Operations → Compliance Officer → Legal | Immediate |

---

## 14. Compliance and Enforcement

### 14.1 Compliance Monitoring

*Describe how compliance with this document is monitored and measured on an ongoing basis.*

Compliance with this Testing Standards Document is monitored through the following mechanisms:

- **Project-level compliance:** The IT Project Manager is responsible for ensuring all testing requirements are met for each project or release. Test Completion Reports serve as the primary evidence of compliance.
- **Portfolio-level compliance:** The Head of IT Operations reviews testing compliance as part of the monthly IT Governance review, including exception reports and defect ageing summaries.
- **Independent assurance:** Internal Audit conducts periodic assessments of testing practices against this document's requirements. Findings are reported to the Audit Committee.
- **Regulatory examination:** [Organization Name] will make testing documentation available to BNM examiners upon request. The Compliance Officer coordinates regulatory examination responses.
- **Metrics and KPIs:** The following metrics are reported monthly to the IT Governance Committee:

| KPI | Description | Target |
|---|---|---|
| Test execution rate | % of planned test cases executed | ≥ 95% |
| Test pass rate | % of executed test cases passed | ≥ 95% |
| Critical defect resolution time | Average time to resolve S1 defects | ≤ 24 hours |
| Security finding remediation compliance | % of VAPT findings remediated within mandated timelines | 100% Critical/High within SLA |
| Exception volume | Number of testing exceptions raised per quarter | Trend monitored; escalated if increasing |
| Test documentation completeness | % of deployments with complete test documentation | 100% |

### 14.2 Non-Compliance Consequences

*Clearly state the consequences of non-compliance to reinforce the seriousness of these obligations.*

Non-compliance with this Testing Standards Document may result in:

- **Deployment hold:** Deployment approval will be withheld until compliance is achieved or a formal exception is granted
- **Escalation:** Non-compliance will be escalated to the Head of IT Operations, and if unresolved, to the [CTO / CIO]
- **Disciplinary action:** Deliberate or repeated non-compliance by individuals may result in disciplinary action in accordance with [Organization Name]'s HR policies
- **Audit finding:** Non-compliance identified by Internal Audit will be raised as an audit observation and tracked through the audit management process
- **Regulatory consequence:** Failure to maintain testing standards in accordance with BNM RMiT may expose [Organization Name] to regulatory action by BNM, including supervisory findings, remediation directions, or financial penalties

### 14.3 Policy Waivers

Waivers to this policy, as distinct from operational exceptions (Section 13), require approval from the [Board Risk Committee / Technology Risk Committee] and must be documented with:

- The specific policy requirement being waived
- The business justification and risk assessment
- The duration of the waiver
- Compensating controls in place during the waiver period
- A remediation plan to achieve full compliance

---

## 15. Review and Approval History

### 15.1 Version History

*This table records all revisions to this document. All versions must be retained in accordance with the records retention policy.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | [Reviewer Name, Role] | Initial release |
| [1.1] | [Date] | [Author Name, Role] | [Reviewer Name, Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Role] | [Reviewer Name, Role] | [Description of major revision] |

### 15.2 Scheduled Review

This document must be reviewed:

- **Annually**, within 12 months of the last approval date
- **Upon significant change** to [Organization Name]'s technology architecture, testing toolchain, or methodology
- **Upon regulatory change** that affects testing obligations under BNM RMiT or related frameworks
- **Following a material testing failure** or significant security incident attributable to inadequate testing

### 15.3 Approval Sign-Off

*The signatures below confirm that the named individuals have reviewed and approved this document in their respective capacities.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Document Owner** — Head of IT Operations | [Name] | __________________ | [Date] |
| **Reviewer** — Information Security Officer | [Name] | __________________ | [Date] |
| **Reviewer** — IT Project Management Lead | [Name] | __________________ | [Date] |
| **Reviewer** — Internal Audit Representative | [Name] | __________________ | [Date] |
| **Approver** — Chief Technology Officer / Chief Information Officer | [Name] | __________________ | [Date] |
| **Endorser** — Chief Risk Officer (if applicable) | [Name] | __________________ | [Date] |

---

## 16. References

*The following regulatory instruments, standards, and internal policies inform or are addressed by this document.*

### 16.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-119 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | **10.8** (Testing Standards); 10.1–10.7 (Technology Change Management); 11 (Cyber Risk) |
| [BNM Policy Document] | [Title] | Bank Negara Malaysia | [Clause] |
| Act 709 | Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | Section 9 (Security Principle) |
| [Other Malaysian legislation] | [Title] | [Authority] | [Section] |

### 16.2 Standards and Frameworks

| Reference | Title | Version / Edition |
|---|---|---|
| ISO/IEC 29119-1 to 29119-5 | Software and Systems Engineering — Software Testing | [Current edition] |
| OWASP Testing Guide | Open Web Application Security Project Testing Guide | v4.2 (or current) |
| NIST SP 800-115 | Technical Guide to Information Security Testing and Assessment | [Current edition] |
| CVSS v3.1 | Common Vulnerability Scoring System | v3.1 |
| ISTQB | Foundation Level Syllabus | [Current edition] |

### 16.3 Internal Policy References

| Document ID | Document Title | Owner |
|---|---|---|
| [Doc ID] | Information Security Policy | Information Security Officer |
| [Doc ID] | Change Management Policy and Procedures | Head of IT Operations |
| [Doc ID] | Data Classification Policy | Information Security Officer |
| [Doc ID] | Cloud Security Policy | Information Security Officer |
| [Doc ID] | Vendor and Third-Party Risk Management Policy | [Owner] |
| [Doc ID] | Business Continuity and Disaster Recovery Plan | [Owner] |
| [Doc ID] | Incident Response Policy | Information Security Officer |

---

## 17. Appendices

### Appendix A — Test Plan Template

*A standardised test plan template must be used for all testing engagements. The template must capture, at minimum, the following sections:*

- A.1 Document Information (project, system, version, author, date)
- A.2 Test Objectives and Scope
- A.3 Test Strategy (approach for each applicable testing type)
- A.4 Test Schedule and Milestones
- A.5 Resources and Responsibilities
- A.6 Test Environment Requirements
- A.7 Test Data Requirements
- A.8 Entry and Exit Criteria
- A.9 Risk and Mitigation
- A.10 Defect Management Approach
- A.11 Reporting Requirements
- A.12 Approvals

*[Attach or hyperlink to the current approved Test Plan template: [Template Location / Document ID]]*

---

### Appendix B — Test Completion Report Template

*A standardised test completion report template must be produced at the conclusion of each testing phase and for the overall release. The template must capture, at minimum:*

- B.1 Document Information
- B.2 Executive Summary
- B.3 Test Scope and Objectives
- B.4 Test Execution Summary

| Testing Type | Total Cases | Executed | Passed | Failed | Blocked | Pass Rate |
|---|---|---|---|---|---|---|
| Functional | | | | | | |
| Integration | | | | | | |
| Performance | | | | | | |
| Security | | | | | | |
| UAT | | | | | | |
| **Total** | | | | | | |

- B.5 Defect Summary

| Severity | Raised | Resolved | Deferred | Outstanding |
|---|---|---|---|---|
| Critical (S1) | | | | |
| High (S2) | | | | |
| Medium (S3) | | | | |
| Low (S4) | | | | |

- B.6 Exit Criteria Assessment
- B.7 Recommendations
- B.8 Approval Sign-Off

*[Attach or hyperlink to the current approved Test Completion Report template: [Template Location / Document ID]]*

---

### Appendix C — Test Data Management Procedures

*This appendix details the approved procedures for creating, managing, and disposing of test data.*

- C.1 Approved data masking techniques and tools
- C.2 Anonymisation standards for personally identifiable information (PII)
- C.3 Process for obtaining ISO approval for masked production data use
- C.4 Test data storage and access controls
- C.5 Test data disposal procedures at end of test cycle
- C.6 PDPA compliance checklist for test data management

*[Attach or hyperlink to the current Test Data Management Procedures: [Document Location / Document ID]]*

---

### Appendix D — Exception Request Form

*Complete this form for all exceptions to the requirements of this Testing Standards Document.*

**Section 1: Request Details**

| Field | Detail |
|---|---|
| Request Date | [Date] |
| Requested By | [Name, Role] |
| Project / System | [Project Name, System Name] |
| Change Reference | [Change ID] |

**Section 2: Exception Details**

| Field | Detail |
|---|---|
| Policy Requirement Being Excepted | [Reference the specific section and requirement] |
| Reason for Exception | [Detailed business and technical justification] |
| Risk Assessment | [Impact and likelihood assessment of proceeding without full compliance] |
| Compensating Controls | [Controls in place to mitigate risk during the exception period] |
| Exception Duration | [From date] to [To date] |
| Remediation Plan | [Steps and timeline to achieve full compliance] |

**Section 3: Approval**

| Role | Name | Decision (Approve / Reject) | Conditions | Date |
|---|---|---|---|---|
| Test Manager | [Name] | | | |
| Head of IT Operations | [Name] | | | |
| Information Security Officer (if applicable) | [Name] | | | |

---

### Appendix E — Approved Testing Tools Register

*Only tools listed in this register are approved for use in testing activities. Use of unapproved tools requires prior written authorisation from the Head of IT Operations.*

| Tool Name | Category | Approved Use | Version(s) | Licence Type | Approval Date | Review Date |
|---|---|---|---|---|---|---|
| [e.g., Selenium] | Functional / Automation | Web UI test automation | [Version] | Open source | [Date] | [Date] |
| [e.g., Postman] | Integration / API | API testing and documentation | [Version] | Commercial | [Date] | [Date] |
| [e.g., Apache JMeter] | Performance | Load and stress testing | [Version] | Open source | [Date] | [Date] |
| [e.g., OWASP ZAP] | Security / DAST | Web application vulnerability scanning | [Version] | Open source | [Date] | [Date] |
| [e.g., SonarQube] | Security / SAST | Static code analysis | [Version] | Commercial | [Date] | [Date] |
| [e.g., Nessus] | Security / VA | Vulnerability assessment | [Version] | Commercial | [Date] | [Date] |
| [Tool Name] | [Category] | [Use] | [Version] | [Licence] | [Date] | [Date] |

---

### Appendix F — Glossary of Testing Terms

*[Expand the definitions table in Section 1.3 with additional technical terms specific to [Organization Name]'s technology environment and testing practices.]*

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. The master copy is maintained in [Document Management System / SharePoint / Confluence]. Printed copies are uncontrolled. Always verify you are reading the current version before relying on this document.

| Document ID | [Document ID] | Version | 1.0 | Classification | Confidential |
|---|---|---|---|---|---|
| Owner | Head of IT Operations | Last Reviewed | [Date] | Next Review | [Date] |