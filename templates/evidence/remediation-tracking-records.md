# Remediation Tracking Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Vulnerability Management Lead |
| **Department** | [Department / Business Unit] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT Paragraph 11.12 |

---

> **CONFIDENTIALITY NOTICE:** This document contains confidential information belonging to [Organization Name]. It must not be disclosed, reproduced, or distributed to any third party without the prior written consent of [Organization Name]. Unauthorised disclosure may constitute a breach of regulatory obligations and internal policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives](#2-objectives)
3. [Scope of Remediation Coverage](#3-scope-of-remediation-coverage)
4. [Scanning Scope and Frequency](#4-scanning-scope-and-frequency)
5. [Severity Classification and SLA Framework](#5-severity-classification-and-sla-framework)
6. [Remediation Actions and Milestones](#6-remediation-actions-and-milestones)
7. [Accountable Owners](#7-accountable-owners)
8. [Remediation Tracking Register](#8-remediation-tracking-register)
9. [Exception and Risk Acceptance Management](#9-exception-and-risk-acceptance-management)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Metrics and Reporting](#11-metrics-and-reporting)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section explains why this document exists and what regulatory obligation it fulfils. Describe the intent of the remediation tracking process and its relationship to BNM RMiT requirements.*

This document establishes the formal Remediation Tracking Records for [Organization Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document. It provides a structured, auditable record of all findings identified through penetration testing, vulnerability scanning, and technology risk assessments, together with the corresponding remediation actions, responsible owners, target completion dates, and evidence of closure.

The Remediation Tracking Records serve as the primary evidence artifact demonstrating [Organization Name]'s compliance with RMiT Paragraph 11.12, which requires financial institutions to remediate vulnerabilities and technology weaknesses within agreed timeframes commensurate with their severity and associated risk.

This document supports [Organization Name]'s commitment to maintaining a resilient and secure technology environment that protects customer data, critical systems, and the integrity of financial services operations.

### 1.2 Scope

*Define which systems, environments, engagements, and organisational units fall within the scope of this remediation tracking record. Be specific about what is included and excluded.*

This Remediation Tracking Record applies to:

**In Scope:**

- All findings arising from internal and external penetration tests conducted against [Organization Name]'s systems, networks, and applications
- Vulnerability scan findings from automated scanning tools covering infrastructure, cloud environments, and endpoints
- Technology risk findings raised through BNM regulatory inspections, internal audits, or third-party assessments where remediation has been assigned
- All critical, high, medium, and low severity findings as classified in Section 5 of this document
- Production, staging, and development environments where findings have been assessed as carrying material risk
- All business units, subsidiaries, and technology service providers operating under [Organization Name]'s technology risk framework

**Out of Scope:**

- Informational or advisory findings with no associated remediation action required
- Findings related to non-technology operational risks managed under a separate risk register
- Third-party vendor findings that are entirely within the vendor's remediation control, unless contractually obligated for tracking

**Organisational Coverage:**

| Business Unit / System | Included | Remarks |
|---|---|---|
| Core Banking System | Yes | [Remarks] |
| Internet Banking Platform | Yes | [Remarks] |
| Mobile Banking Application | Yes | [Remarks] |
| Payment Gateway | Yes | [Remarks] |
| Internal Corporate Network | Yes | [Remarks] |
| Cloud Infrastructure ([Provider]) | Yes | [Remarks] |
| [Other System] | [Yes / No] | [Remarks] |

---

## 2. Objectives

*State the specific objectives of maintaining this remediation tracking record. These should align directly with the RMiT requirement and the organisation's internal vulnerability management programme.*

The objectives of this Remediation Tracking Record are to:

1. **Ensure timely remediation** of all identified vulnerabilities and technology weaknesses in accordance with severity-based SLAs defined in Section 5 of this document.

2. **Provide regulatory evidence** that [Organization Name] has implemented a structured and auditable process for tracking and closing penetration test and vulnerability scan findings, as required under BNM RMiT Paragraph 11.12.

3. **Assign clear accountability** by identifying a named owner for each finding and escalating overdue items through the appropriate governance chain.

4. **Facilitate risk-based prioritisation** so that critical and high-severity findings are addressed with appropriate urgency while medium and low findings are remediated in an orderly and documented manner.

5. **Support management oversight** by providing accurate, up-to-date metrics on the organisation's vulnerability remediation posture for reporting to the Technology Risk Committee (TRC) and Board Risk Committee (BRC).

6. **Enable exception management** by providing a formal process for recording, approving, and monitoring risk acceptances or remediation deferrals where immediate closure is not technically or operationally feasible.

7. **Demonstrate continuous improvement** in technology risk management by tracking remediation trends over time and informing future security investment decisions.

---

## 3. Scope of Remediation Coverage

*Define the categories of assessments and engagements whose findings are tracked in this document. Include the types of tests, the testing bodies (internal or external), and the frequency of each.*

### 3.1 Assessment Types Covered

| Assessment Type | Conducted By | Frequency | Latest Engagement | Reference Report |
|---|---|---|---|---|
| External Penetration Test | [External Vendor / Internal Red Team] | Annual | [Date] | [Report Reference] |
| Internal Penetration Test | [External Vendor / Internal Red Team] | Annual | [Date] | [Report Reference] |
| Web Application Penetration Test | [External Vendor / Internal Team] | Annual / Per Release | [Date] | [Report Reference] |
| Mobile Application Penetration Test | [External Vendor / Internal Team] | Annual / Per Release | [Date] | [Report Reference] |
| Infrastructure Vulnerability Scan | [Internal Team / Tool Name] | [Frequency] | [Date] | [Scan Report Reference] |
| Cloud Security Posture Assessment | [Internal Team / Vendor] | [Frequency] | [Date] | [Report Reference] |
| API Security Assessment | [Internal Team / Vendor] | [Frequency] | [Date] | [Report Reference] |
| BNM / Regulatory Inspection Findings | BNM / [Regulatory Body] | Ad hoc | [Date] | [Reference] |
| Internal Audit Technology Review | Internal Audit | [Frequency] | [Date] | [Audit Report Reference] |
| [Other Assessment Type] | [Conducted By] | [Frequency] | [Date] | [Reference] |

### 3.2 Environment Coverage

*List all technology environments included in the scope of remediation tracking.*

- **Production Environment:** All internet-facing and internal production systems hosting customer data or critical financial services.
- **Staging / UAT Environment:** Pre-production environments where material vulnerabilities with production equivalence are identified.
- **Development Environment:** Where findings represent systemic security weaknesses that are likely to persist into production.
- **Cloud Environments:** All cloud-hosted workloads including [Cloud Provider] accounts, containers, and serverless functions under [Organization Name]'s management.
- **Network Infrastructure:** Core switches, routers, firewalls, VPN gateways, and network segmentation controls.
- **Endpoints:** [Scope of endpoint inclusion, e.g., corporate workstations, privileged access workstations, servers].

---

## 4. Scanning Scope and Frequency

*Define the technical scope of vulnerability scanning activities that feed findings into this remediation tracking record. Specify tools, target ranges, and scanning schedules.*

### 4.1 Vulnerability Scanning Programme

*Describe the automated scanning programme, including the tools used, the IP ranges or application inventories in scope, and the frequency of each scan type.*

[Organization Name] operates a continuous vulnerability scanning programme as part of its technology risk management framework. Scanning activities are governed by the [Vulnerability Management Policy / Procedure Document Reference] and produce findings that are ingested into this remediation tracking record.

### 4.2 Scanning Tools and Coverage

| Scan Type | Tool | Target Scope | Scan Mode | Frequency |
|---|---|---|---|---|
| Network Vulnerability Scan | [Tool, e.g., Tenable Nessus / Qualys] | [IP Range / CIDR] | Authenticated | [Weekly / Monthly] |
| Web Application Scan | [Tool, e.g., Burp Suite Enterprise / OWASP ZAP] | [Application URLs / Inventory] | Authenticated | [Frequency] |
| Container Image Scan | [Tool, e.g., Trivy / Snyk] | [Container Registry] | Automated CI/CD | Per build |
| Cloud Misconfiguration Scan | [Tool, e.g., Prisma Cloud / AWS Security Hub] | [Cloud Account IDs] | Continuous | Continuous |
| Database Vulnerability Scan | [Tool] | [Database Servers] | Authenticated | [Frequency] |
| Endpoint Vulnerability Scan | [Tool, e.g., CrowdStrike / Defender for Endpoint] | [Endpoint Fleet] | Agent-based | Continuous |
| [Other Scan Type] | [Tool] | [Scope] | [Mode] | [Frequency] |

### 4.3 Scanning Schedule

| Activity | Schedule | Responsible Team | Next Scheduled Date |
|---|---|---|---|
| Full internal network scan | [e.g., First Monday of each month] | [Team] | [Date] |
| External perimeter scan | [e.g., Weekly, Sundays 02:00] | [Team] | [Date] |
| Web application scan — production | [e.g., Bi-weekly] | [Team] | [Date] |
| Cloud posture review | [e.g., Weekly automated] | [Team] | [Date] |
| Annual external penetration test | [e.g., Q3 each year] | [External Vendor] | [Date] |
| Annual internal penetration test | [e.g., Q4 each year] | [Internal Red Team / Vendor] | [Date] |

### 4.4 Asset Inventory Alignment

*Describe how scanning scope is kept aligned with the current technology asset inventory. Reference the asset management process or CMDB.*

Scanning scope is maintained in alignment with [Organization Name]'s Technology Asset Inventory / Configuration Management Database (CMDB), managed by the [IT Asset Management Team / IT Operations]. Changes to the asset inventory, including newly commissioned systems, decommissioned assets, or changes in network addressing, are communicated to the Vulnerability Management team within [X] business days of change approval.

| Asset Inventory Source | System / Document | Owner | Review Frequency |
|---|---|---|---|
| Server and infrastructure inventory | [CMDB / Asset Register] | [Owner] | [Frequency] |
| Application inventory | [Application Register] | [Owner] | [Frequency] |
| Cloud asset inventory | [Cloud Console / CSPM Tool] | [Owner] | Continuous |
| Network topology diagram | [Network Diagram Reference] | [Owner] | [Frequency] |

---

## 5. Severity Classification and SLA Framework

*Define the severity rating methodology applied to classify findings and the corresponding remediation SLAs. This section is critical for demonstrating compliance with RMiT 11.12's requirement for remediation within agreed timeframes.*

### 5.1 Severity Rating Methodology

[Organization Name] applies the following severity classification framework, informed by the Common Vulnerability Scoring System (CVSS v3.1) and contextual risk factors including asset criticality, data sensitivity, exploitability, and business impact.

| Severity Level | CVSS Score Range | Description |
|---|---|---|
| **Critical** | 9.0 – 10.0 | Vulnerability with high exploitability that could result in complete system compromise, significant data breach, or direct impact on critical financial services. Immediate risk to customer data or regulatory obligations. |
| **High** | 7.0 – 8.9 | Vulnerability that could result in significant system compromise, unauthorised access to sensitive data, or material disruption to services if exploited. |
| **Medium** | 4.0 – 6.9 | Vulnerability that could be exploited under specific conditions, resulting in partial system compromise, limited unauthorised access, or indirect exposure of sensitive information. |
| **Low** | 0.1 – 3.9 | Vulnerability with limited exploitability or impact, typically requiring significant attacker preconditions or providing minimal gain to an attacker. |
| **Informational** | N/A | Observations or best practice recommendations that do not represent an exploitable vulnerability. No remediation SLA applies; findings are tracked for awareness and continuous improvement. |

### 5.2 Contextual Risk Adjustment

*Where CVSS alone does not adequately reflect the business risk of a finding, risk owners may apply contextual adjustments. Document the criteria and approval process for severity adjustments here.*

CVSS scores may be adjusted upward or downward based on the following contextual factors:

| Factor | Potential Adjustment | Approval Required |
|---|---|---|
| Asset is classified as Critical IT System under RMiT | Up to +1 severity level | Vulnerability Management Lead |
| Asset stores or processes customer Personal Data (PDPA) | Up to +1 severity level | Vulnerability Management Lead |
| Active exploitation evidence in threat intelligence feeds | Up to +1 severity level (max Critical) | CISO |
| Finding is in isolated non-production environment with no production path | Down to -1 severity level | Vulnerability Management Lead |
| Compensating control demonstrably mitigates material risk | Down to -1 severity level | CISO approval required |

All severity adjustments must be documented in the Remediation Tracking Register (Section 8) with a justification note and approver recorded.

### 5.3 Remediation SLA Table

*Define the maximum timeframes within which each severity of finding must be remediated or formally risk-accepted. These timeframes must be consistent with [Organization Name]'s Vulnerability Management Policy and aligned to BNM RMiT expectations.*

| Severity | Initial Acknowledgement | Remediation Deadline | Escalation Trigger | SLA Breach Action |
|---|---|---|---|---|
| **Critical** | Within 24 hours | Within **7 calendar days** | At 3 days if no remediation plan confirmed | Immediate escalation to CISO and CTO; daily status update required |
| **High** | Within 48 hours | Within **30 calendar days** | At 14 days if less than 50% progress | Escalation to Vulnerability Management Lead and System Owner; weekly status update |
| **Medium** | Within 5 business days | Within **90 calendar days** | At 60 days if no confirmed remediation | Escalation to System Owner; inclusion in monthly risk report |
| **Low** | Within 10 business days | Within **180 calendar days** | At 150 days | Reminder issued to System Owner; noted in next vulnerability management report |
| **Informational** | N/A | No SLA; address in next scheduled review cycle | N/A | Carried forward to next assessment cycle |

> **Note:** SLA clock commences from the date the finding is formally communicated to the System Owner / Accountable Owner, not from the date of discovery by the scanning tool or penetration tester.

### 5.4 SLA Extension and Deferral

Where remediation cannot be completed within the defined SLA due to technical, operational, or resource constraints, a formal SLA extension or risk acceptance must be submitted and approved prior to the SLA deadline. Refer to Section 9 (Exception and Risk Acceptance Management) for the full process.

---

## 6. Remediation Actions and Milestones

*This section provides the structured framework for defining, planning, and tracking the remediation actions associated with each finding. It should capture the planned approach, phased milestones, and verification steps.*

### 6.1 Remediation Planning Requirements

For each finding tracked in the Remediation Tracking Register, a remediation plan must be developed and documented within the timelines specified in Section 5.3. Remediation plans must include:

- **Root Cause Analysis:** A clear statement of why the vulnerability exists, beyond the surface-level symptom.
- **Remediation Approach:** The specific technical action(s) to be taken to close the finding (e.g., patch application, configuration change, architecture modification, code fix).
- **Milestone Breakdown:** For complex remediations, a phased milestone plan with intermediate deliverables and dates.
- **Testing and Verification:** The method by which remediation will be validated, including retest requirements.
- **Evidence of Closure:** The artefacts that will be produced to demonstrate that the finding has been closed (e.g., scan output, retest report, configuration screenshot, change record).

### 6.2 Standard Remediation Action Types

*Reference table for common remediation action types to support consistent recording.*

| Action Type | Description | Example |
|---|---|---|
| Patch / Update | Application of vendor-supplied security patch or software update | OS patch, library upgrade, firmware update |
| Configuration Change | Modification of system or application configuration to address security weakness | Disabling unnecessary service, enforcing TLS 1.2+, enabling MFA |
| Architecture Change | Structural change to system design or network topology | Network segmentation, removal of direct internet exposure |
| Code Fix | Remediation of application-level vulnerability through code change | SQL injection fix, XSS sanitisation, insecure direct object reference fix |
| Access Control Change | Modification of permissions, roles, or access policies | Removal of excessive privileges, enforcing least privilege |
| Process / Procedure Change | Change to an operational or administrative process | Introducing patch management procedure, enforcing secure coding standard |
| Compensating Control | Implementation of a mitigating control where root cause cannot be addressed within SLA | WAF rule, additional monitoring, manual review process |
| Decommission | Removal of a vulnerable system or component from the environment | Retiring legacy server, removing deprecated API endpoint |

### 6.3 Milestone Tracking Template

*For Critical and High findings requiring a phased remediation approach, use the following milestone structure.*

**Finding Reference:** [Finding ID]
**Finding Title:** [Brief Description of Finding]
**Severity:** [Critical / High / Medium / Low]
**SLA Deadline:** [Date]

| Milestone No. | Milestone Description | Target Date | Responsible Owner | Status | Completion Date | Evidence |
|---|---|---|---|---|---|---|
| M1 | Root cause analysis completed and remediation plan approved | [Date] | [Owner] | [Not Started / In Progress / Completed] | [Date] | [Document Reference] |
| M2 | [e.g., Patch tested in staging environment / Fix deployed to non-production] | [Date] | [Owner] | [Status] | [Date] | [Evidence Reference] |
| M3 | [e.g., Change request approved and scheduled for production deployment] | [Date] | [Owner] | [Status] | [Date] | [Change Reference] |
| M4 | [e.g., Remediation deployed to production] | [Date] | [Owner] | [Status] | [Date] | [Change Reference] |
| M5 | Retest / verification scan completed and finding confirmed closed | [Date] | [Owner] | [Status] | [Date] | [Retest Report Reference] |

---

## 7. Accountable Owners

*Define the ownership model for findings. Each finding must have a named accountable owner. This section defines the ownership framework and documents the current ownership assignments.*

### 7.1 Ownership Framework

[Organization Name] applies a two-tier ownership model for remediation accountability:

- **System Owner / Business Owner:** The senior individual accountable for the system or application in which the finding was identified. Responsible for approving remediation plans, accepting risk where applicable, and ensuring adequate resources are allocated for remediation.
- **Technical Remediation Owner:** The individual or team technically responsible for executing the remediation action. Reports progress to the System Owner and Vulnerability Management Lead.

Ownership is assigned at the time of finding communication and is recorded in the Remediation Tracking Register (Section 8).

### 7.2 System / Application Ownership Register

*List the primary and technical owners for each system in scope. This enables rapid ownership assignment when new findings are identified.*

| System / Application | System Owner | Technical Remediation Owner | Department | Contact |
|---|---|---|---|---|
| Core Banking System | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |
| Internet Banking Platform | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |
| Mobile Banking Application | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |
| Payment Gateway | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |
| Corporate Network Infrastructure | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |
| Active Directory / IAM | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |
| Cloud Infrastructure | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |
| Email and Collaboration | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |
| [Other System] | [Name / Role] | [Name / Role] | [Department] | [Email / Contact] |

### 7.3 Escalation Path

*Define the escalation chain when SLA breaches occur or when ownership disputes arise.*

| Scenario | First Escalation | Second Escalation | Final Escalation |
|---|---|---|---|
| SLA at risk (50% of SLA elapsed, no confirmed plan) | Technical Remediation Owner | System Owner | Vulnerability Management Lead |
| SLA breach — Critical finding | Vulnerability Management Lead | CISO | CTO / CEO |
| SLA breach — High finding | Vulnerability Management Lead | CISO | CTO |
| SLA breach — Medium / Low finding | Vulnerability Management Lead | System Owner | Department Head |
| Ownership dispute | Vulnerability Management Lead | CISO | CTO |
| Risk acceptance required — Critical / High | System Owner | CISO | Board Risk Committee (via CRO) |

---

## 8. Remediation Tracking Register

*This is the core operational section of this document. The Remediation Tracking Register is the master record of all open, in-progress, and closed findings. It must be maintained in real-time and reviewed at least semi-annually.*

### 8.1 Register Metadata

| Field | Value |
|---|---|
| Register Period | [e.g., 1 January 2025 – 30 June 2025] |
| Register Version | [Version] |
| Last Updated | [Date] |
| Updated By | [Name / Role] |
| Total Open Findings | [Number] |
| Total In Progress | [Number] |
| Total Closed (Period) | [Number] |
| Total Overdue | [Number] |
| Total Risk-Accepted | [Number] |

### 8.2 Active Findings Register

*Complete one row per finding. Findings should be sorted by severity (Critical first) and then by SLA deadline (earliest first). Linked evidence artefacts should be stored in [Document Management System / SharePoint Path].*

| Finding ID | Source Assessment | Assessment Date | System / Asset | Finding Title | CVE / Reference | Severity | CVSS Score | Adjusted Severity | Adjustment Justification | SLA Deadline | System Owner | Technical Owner | Remediation Action | Milestone Plan Ref | Status | % Complete | Last Update | Actual Closure Date | Closure Evidence Ref | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [FIND-2025-001] | [External Pentest] | [Date] | [System Name] | [Finding Title] | [CVE-YYYY-XXXXX / N/A] | [Critical] | [9.8] | [Critical] | [N/A] | [Date] | [Name] | [Name] | [e.g., Apply vendor patch KB123456] | [MS-001] | [Open / In Progress / Closed / Risk Accepted] | [0%] | [Date] | [N/A] | [N/A] | [Notes] |
| [FIND-2025-002] | [Infrastructure Scan] | [Date] | [System Name] | [Finding Title] | [CVE-YYYY-XXXXX] | [High] | [8.1] | [High] | [N/A] | [Date] | [Name] | [Name] | [e.g., Disable SSLv3 and TLS 1.0 on all web servers] | [N/A] | [In Progress] | [50%] | [Date] | [N/A] | [N/A] | [Notes] |
| [FIND-2025-003] | [Web App Pentest] | [Date] | [Application Name] | [Finding Title] | [N/A] | [High] | [7.5] | [Critical] | [Asset contains customer PII; adjusted per Section 5.2] | [Date] | [Name] | [Name] | [e.g., Implement parameterised queries; code fix in Sprint 42] | [MS-003] | [In Progress] | [75%] | [Date] | [N/A] | [N/A] | [Notes] |
| [FIND-2025-004] | [Internal Pentest] | [Date] | [System Name] | [Finding Title] | [N/A] | [Medium] | [5.4] | [Medium] | [N/A] | [Date] | [Name] | [Name] | [e.g., Enforce password complexity policy via GPO] | [N/A] | [Closed] | [100%] | [Date] | [Date] | [Evidence Ref] | [Notes] |
| [FIND-2025-005] | [Cloud Scan] | [Date] | [Cloud Resource] | [Finding Title] | [N/A] | [Medium] | [6.1] | [Medium] | [N/A] | [Date] | [Name] | [Name] | [e.g., Enable S3 bucket versioning and block public access] | [N/A] | [Risk Accepted] | [N/A] | [Date] | [N/A] | [Exception Ref: EXC-2025-001] | [Risk accepted pending migration; see Section 9] |

> **Note:** This register is maintained as a living document. Rows must be updated within **2 business days** of any status change. The Vulnerability Management Lead is responsible for the accuracy of this register at all times.

### 8.3 Closed Findings Archive

*Findings that have been verified as closed are retained in this archive for a minimum of [3 / 5] years in accordance with [Organization Name]'s Records Retention Policy. Closed findings are moved from the Active Register to this archive upon successful retest verification.*

| Finding ID | Source Assessment | System / Asset | Finding Title | Severity | Original SLA | Closure Date | Days to Close | SLA Met | Closure Evidence | Closed By | Verified By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [FIND-2024-001] | [External Pentest] | [System Name] | [Finding Title] | [High] | [Date] | [Date] | [X days] | [Yes / No] | [Evidence Ref] | [Name] | [Name] |
| [FIND-2024-002] | [Infrastructure Scan] | [System Name] | [Finding Title] | [Medium] | [Date] | [Date] | [X days] | [Yes / No] | [Evidence Ref] | [Name] | [Name] |

---

## 9. Exception and Risk Acceptance Management

*Define the process for managing findings that cannot be remediated within the agreed SLA. This section is critical for demonstrating that SLA non-compliance is managed through a governed risk acceptance process rather than ignored.*

### 9.1 Exception Categories

| Exception Type | Description | Maximum Duration | Approval Authority |
|---|---|---|---|
| **Remediation Deferral** | Remediation technically feasible but operationally delayed (e.g., change freeze, dependency) | 30 days extension | Vulnerability Management Lead + System Owner |
| **Compensating Control** | Root cause cannot be addressed; compensating control implemented to reduce residual risk | Up to 90 days; renewable with review | CISO + System Owner |
| **Risk Acceptance** | Organisation accepts residual risk without full remediation | Up to 12 months; non-renewable for Critical | CISO for High; CRO + Board Risk Committee for Critical |
| **Vendor Dependency** | Remediation dependent on vendor patch not yet available | Duration of vendor patch release cycle | CISO; reviewed monthly |

### 9.2 Exception Request Register

| Exception ID | Finding ID | Finding Title | Severity | Exception Type | Justification | Compensating Controls | Risk Owner | Approval Authority | Approval Date | Expiry Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [EXC-2025-001] | [FIND-2025-005] | [Finding Title] | [Medium] | [Risk Acceptance] | [Brief justification for exception] | [Description of compensating controls in place] | [Name / Role] | [Approver Name / Role] | [Date] | [Date] | [Date] | [Active / Expired] |
| [EXC-2025-002] | [FIND-2025-XXX] | [Finding Title] | [High] | [Vendor Dependency] | [Patch not yet available from vendor; monitoring CVE advisory] | [WAF rule implemented; network segmentation reviewed] | [Name / Role] | [Name / Role] | [Date] | [Date] | [Date] | [Active] |

### 9.3 Exception Process

*Describe the workflow for submitting, reviewing, and approving exceptions.*

1. **Initiation:** System Owner or Technical Remediation Owner submits an Exception Request Form (Appendix C) to the Vulnerability Management Lead no later than **5 business days before SLA expiry**.
2. **Assessment:** Vulnerability Management Lead reviews the justification, assesses the adequacy of compensating controls, and determines the appropriate exception type and duration.
3. **Approval:** Exception is escalated to the approval authority per the table in Section 9.1 for sign-off.
4. **Recording:** Approved exception is recorded in the Exception Request Register above and cross-referenced in the Active Findings Register (Section 8.2).
5. **Monitoring:** Vulnerability Management Lead reviews all active exceptions monthly and ensures renewal or closure prior to expiry.
6. **Escalation:** Exceptions approaching expiry without a confirmed remediation path are escalated to the CISO for review and potential reporting to the Technology Risk Committee.

---

## 10. Roles and Responsibilities

*Define all stakeholders involved in the remediation tracking process and their responsibilities. The RACI table provides a clear accountability framework.*

### 10.1 RACI Matrix

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Vulnerability Management Lead | System Owner | Technical Remediation Owner | IT Security Operations | Internal Audit | Technology Risk Committee |
|---|---|---|---|---|---|---|---|
| Define and maintain SLA framework | A | R | C | — | C | C | I |
| Conduct vulnerability scanning | I | A | I | R | R | — | — |
| Manage penetration test engagements | A | R | C | C | C | I | I |
| Communicate findings to system owners | I | R/A | I | — | R | — | — |
| Develop remediation plan per finding | I | C | A | R | C | — | — |
| Execute remediation actions | I | I | A | R | C | — | — |
| Approve SLA extension / deferral | C | A | R | — | — | — | — |
| Approve compensating controls | A | R | C | C | C | — | I |
| Approve risk acceptance (High) | A | R | C | — | — | — | I |
| Approve risk acceptance (Critical) | A | C | C | — | — | C | A |
| Maintain Remediation Tracking Register | I | A/R | I | I | C | — | — |
| Verify and close findings (retest) | I | A | I | C | R | — | — |
| Produce remediation metrics report | I | R | I | — | C | I | I |
| Present findings to TRC | A | C | — | — | — | I | I |
| Conduct semi-annual register review | A | R | C | C | — | C | I |
| Escalate overdue Critical/High findings | A | R | C | — | I | — | I |
| Record exception requests | I | A | R | C | — | — | — |

### 10.2 Key Role Descriptions

| Role | Key Responsibilities for Remediation Tracking |
|---|---|
| **CISO** | Ultimate accountability for the organisation's vulnerability management programme; approves risk acceptances for High and Critical findings; presents remediation posture to Board Risk Committee. |
| **Vulnerability Management Lead** | Day-to-day ownership of the Remediation Tracking Register; drives remediation progress; manages SLA compliance; coordinates retests; escalates overdue findings; produces management reports. |
| **System Owner** | Accountable for remediating findings within their systems; approves remediation plans and exceptions; allocates resources for remediation; escalation point for their systems. |
| **Technical Remediation Owner** | Executes the technical remediation actions; provides status updates; produces evidence of closure; coordinates with change management for production deployments. |
| **IT Security Operations** | Conducts vulnerability scanning; performs retests on remediated findings; maintains scanning tools and asset scope; supports Technical Remediation Owners with technical guidance. |
| **Internal Audit** | Provides independent assurance on the effectiveness of the remediation tracking process; reviews a sample of closed findings for completeness and accuracy; reports findings to Audit Committee. |
| **Technology Risk Committee** | Reviews remediation posture at each TRC meeting; approves risk acceptances for Critical findings; oversees the overall technology risk management framework. |

---

## 11. Metrics and Reporting

*Define the key performance indicators (KPIs) and reporting obligations associated with the remediation tracking programme.*

### 11.1 Key Performance Indicators

| KPI | Metric Definition | Target | Reporting Frequency | Owner |
|---|---|---|---|---|
| Critical Finding SLA Compliance Rate | % of Critical findings remediated within 7 calendar days | 100% | Monthly | Vulnerability Management Lead |
| High Finding SLA Compliance Rate | % of High findings remediated within 30 calendar days | ≥ 95% | Monthly | Vulnerability Management Lead |
| Medium Finding SLA Compliance Rate | % of Medium findings remediated within 90 calendar days | ≥ 90% | Monthly | Vulnerability Management Lead |
| Mean Time to Remediate (MTTR) — Critical | Average days to close Critical findings | ≤ 7 days | Monthly | Vulnerability Management Lead |
| Mean Time to Remediate (MTTR) — High | Average days to close High findings | ≤ 30 days | Monthly | Vulnerability Management Lead |
| Total Open Critical / High Findings | Count of open Critical and High findings at point-in-time | Decreasing trend | Monthly | Vulnerability Management Lead |
| Findings Aged > SLA (no exception) | Count of findings past SLA without approved exception | 0 | Monthly | CISO |
| Risk Acceptance Rate | % of total findings managed via risk acceptance rather than remediation | ≤ 5% | Quarterly | CISO |
| Retest Coverage | % of remediated findings that have undergone formal retest verification | 100% for Critical/High; ≥ 80% overall | Monthly | Vulnerability Management Lead |

### 11.2 Reporting Obligations

| Report | Content | Frequency | Audience | Produced By |
|---|---|---|---|---|
| Vulnerability Management Dashboard | Summary of open, in-progress, and closed findings by severity; SLA compliance rates; MTTR trend | Monthly | CISO, IT Leadership | Vulnerability Management Lead |
| Technology Risk Committee Report | Remediation posture summary; overdue findings; risk acceptances; trend analysis | Quarterly | Technology Risk Committee | CISO / Vulnerability Management Lead |
| Internal Audit Report | Sample-based review of remediation evidence and register accuracy | Annual | Audit Committee | Internal Audit |
| BNM Regulatory Submission | Technology risk posture including vulnerability remediation compliance | As required by BNM | BNM | CTO / CISO |
| Semi-Annual Register Review Report | Comprehensive review of register completeness, accuracy, and SLA compliance | Semi-annual | CISO, TRC | Vulnerability Management Lead |

---

## 12. Review and Approval

### 12.1 Document Review Schedule

This document shall be reviewed on a semi-annual basis, or earlier in the event of:

- A material change to [Organization Name]'s technology environment or risk profile
- A BNM regulatory inspection or significant audit finding relating to vulnerability management
- A material change to the BNM RMiT Policy Document or associated guidelines
- A significant security incident attributable to an unresolved vulnerability
- Change in document ownership or organisational structure affecting the roles defined in this document

### 12.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name / Role] | Initial document creation |
| [1.1] | [Date] | [Author Name / Role] | [Description of changes, e.g., Updated SLA framework in Section 5; added cloud scanning scope] |
| [2.0] | [Date] | [Author Name / Role] | [Major revision description] |

### 12.3 Approval Sign-Off

*All reviewers and approvers must sign and date this table prior to the document becoming effective. This sign-off constitutes formal acceptance of the document content and the responsibilities assigned herein.*

| Role | Name | Department | Signature | Date |
|---|---|---|---|---|
| Document Owner — Vulnerability Management Lead | [Full Name] | [Department] | __________________ | [Date] |
| Reviewer — IT Security Operations Manager | [Full Name] | [Department] | __________________ | [Date] |
| Reviewer — Chief Information Security Officer (CISO) | [Full Name] | [Department] | __________________ | [Date] |
| Reviewer — Chief Risk Officer (CRO) | [Full Name] | [Department] | __________________ | [Date] |
| Approver — Chief Technology Officer (CTO) | [Full Name] | [Department] | __________________ | [Date] |

---

## 13. References

*List all regulatory, standards, and internal policy documents that this Remediation Tracking Record is aligned with or derived from.*

### 13.1 Regulatory References

| Reference | Document | Issuing Authority | Applicable Clauses |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Paragraph 11.12 — Penetration Testing and Vulnerability Assessment |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Paragraph 11.1–11.5 — Cybersecurity Risk Management Framework |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Paragraph 10.1–10.4 — Technology Risk Management |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 — Security Principle (protection of personal data) |
| NACSA | National Cyber Security Policy | National Cyber Security Agency (NACSA) | Critical Information Infrastructure protection requirements |

### 13.2 Standards References

| Standard | Title | Version / Year | Applicable Sections |
|---|---|---|---|
| CVSS | Common Vulnerability Scoring System | v3.1 | Severity scoring methodology |
| PTES | Penetration Testing Execution Standard | Current | Penetration testing methodology |
| OWASP | OWASP Testing Guide | v4.2 | Web application vulnerability assessment |
| ISO/IEC 27001 | Information Security Management Systems | 2022 | Annex A.8.8 — Management of technical vulnerabilities |
| NIST SP 800-40 | Guide to Enterprise Patch Management Planning | Rev. 4 | Patch and vulnerability management guidance |
| MAS TRM | Technology Risk Management Guidelines | 2021 | Comparable regional regulatory reference |

### 13.3 Internal Policy References

| Document | Title | Document ID | Owner |
|---|---|---|---|
| [Internal Policy] | Vulnerability Management Policy | [Doc ID] | [Owner] |
| [Internal Policy] | Technology Risk Management Framework | [Doc ID] | [Owner] |
| [Internal Policy] | Information Security Policy | [Doc ID] | [Owner] |
| [Internal Policy] | Change Management Policy | [Doc ID] | [Owner] |
| [Internal Policy] | Records Retention Policy | [Doc ID] | [Owner] |
| [Internal Policy] | Incident Response Policy | [Doc ID] | [Owner] |
| [Internal Procedure] | Penetration Testing Procedure | [Doc ID] | [Owner] |

---

## 14. Appendices

### Appendix A — Severity Classification Worked Examples

*This appendix provides worked examples of severity classification to guide consistent application of the framework defined in Section 5. Authors should update these examples to reflect [Organization Name]'s specific technology environment.*

| Finding Example | Initial CVSS | Initial Severity | Contextual Factor | Adjusted Severity | Rationale |
|---|---|---|---|---|---|
| Remote code execution in internet-facing web application | 9.8 | Critical | Processes customer payment data | Critical (no adjustment needed) | Adjustment not required; already Critical |
| SQL injection in internal reporting tool, no internet exposure | 8.2 | High | Tool only accessible from internal network; no direct customer data path | High (maintained) | Internal exposure limits exploitability, but High maintained due to data sensitivity |
| Expired TLS certificate on customer-facing portal | 6.5 | Medium | Customer authentication relies on this service; brand and trust impact | High (adjusted up) | Customer trust and service availability impact elevates practical risk |
| Open redirect on marketing website | 4.3 | Medium | Static marketing site, no authentication, no customer data | Medium (maintained) | Standard classification applies |
| Default credentials on decommissioned test server (isolated VLAN) | 9.0 | Critical | Isolated test VLAN, no production connectivity confirmed | High (adjusted down) | Isolation confirmed; compensating control documented; requires CISO approval |

### Appendix B — Retest Verification Checklist

*This checklist must be completed by the IT Security Operations team for each finding undergoing retest verification prior to formal closure in the Remediation Tracking Register.*

**Finding ID:** [Finding ID]
**Finding Title:** [Title]
**Original Assessment:** [Source and Date]
**Retest Date:** [Date]
**Retested By:** [Name / Role]

| Verification Step | Completed | Notes |
|---|---|---|
| Confirmed remediation action matches approved plan in register | ☐ Yes / ☐ No | [Notes] |
| Change record or deployment evidence reviewed | ☐ Yes / ☐ No / ☐ N/A | [Change Reference] |
| Technical retest performed using same methodology as original assessment | ☐ Yes / ☐ No | [Notes] |
| Vulnerability no longer present in retest output | ☐ Yes / ☐ No | [Notes] |
| Retest output / scan evidence saved to document repository | ☐ Yes / ☐ No | [Repository Path / Reference] |
| No new findings of equal or higher severity introduced by remediation | ☐ Yes / ☐ No | [Notes] |
| System Owner / Technical Owner informed of closure | ☐ Yes / ☐ No | [Date notified] |
| Remediation Tracking Register updated to "Closed" status | ☐ Yes / ☐ No | [Date updated] |

**Retest Outcome:** ☐ Finding Closed ☐ Finding Partially Remediated — Remains Open ☐ Finding Not Remediated — Escalation Required

**Retested By:** [Name] **Date:** [Date]
**Reviewed By (Vulnerability Management Lead):** [Name] **Date:** [Date]

---

### Appendix C — Exception / Risk Acceptance Request Form

*This form must be completed and submitted to the Vulnerability Management Lead at least 5 business days before the finding's SLA deadline.*

**Exception Request Reference:** [EXC-YYYY-NNN]
**Submission Date:** [Date]
**Submitted By:** [Name / Role]

| Field | Detail |
|---|---|
| **Finding ID** | [Reference from Remediation Tracking Register] |
| **Finding Title** | [Title] |
| **Severity** | [Critical / High / Medium / Low] |
| **SLA Deadline** | [Date] |
| **Exception Type Requested** | ☐ Remediation Deferral ☐ Compensating Control ☐ Risk Acceptance ☐ Vendor Dependency |
| **Justification** | [Detailed explanation of why the finding cannot be remediated within the SLA. Include technical, operational, or resource constraints.] |
| **Residual Risk Assessment** | [Assessment of the residual risk if the exception is granted. What is the likelihood and impact of exploitation during the exception period?] |
| **Compensating Controls in Place** | [List any compensating controls currently mitigating the risk of exploitation. Include implementation date and owner.] |
| **Proposed Extension Period / Revised Target Date** | [Proposed new SLA date or exception period end date] |
| **Remediation Plan (if deferral)** | [If requesting a deferral, provide the updated remediation plan and milestone dates] |
| **System Owner Name** | [Name] |
| **System Owner Approval** | [Signature / Name] **Date:** [Date] |

**Vulnerability Management Lead Decision:**
☐ Approved ☐ Approved with conditions ☐ Rejected

**Conditions / Comments:** [If approved with conditions, state the conditions]
**Vulnerability Management Lead:** [Name] **Date:** [Date]

**CISO / Approval Authority Decision (where required per Section 9.1):**
☐ Approved ☐ Approved with conditions ☐ Rejected

**Comments:** [Comments]
**Approver:** [Name / Role] **Date:** [Date]

---

### Appendix D — Remediation Tracking Register Summary Dashboard

*This appendix provides a summary view suitable for management reporting and Technology Risk Committee presentations. It should be updated each time the register is reviewed.*

**Reporting Period:** [Period Start Date] to [Period End Date]
**Report Prepared By:** [Name / Role]
**Report Date:** [Date]

**Finding Summary by Severity and Status:**

| Severity | Total Open | In Progress | Overdue (No Exception) | Risk Accepted | Closed (Period) | Total (Period) |
|---|---|---|---|---|---|---|
| Critical | [#] | [#] | [#] | [#] | [#] | [#] |
| High | [#] | [#] | [#] | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] | [#] | [#] | [#] |
| Low | [#] | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

**SLA Compliance Summary:**

| Severity | Findings Due (Period) | Closed on Time | SLA Compliance Rate |
|---|---|---|---|
| Critical | [#] | [#] | [%] |
| High | [#] | [#] | [%] |
| Medium | [#] | [#] | [%] |
| Low | [#] | [#] | [%] |
| **Overall** | **[#]** | **[#]** | **[%]** |

**Top 5 Overdue or At-Risk Findings:**

| Rank | Finding ID | System | Title | Severity | SLA Deadline | Days Overdue / At Risk | Owner | Action Required |
|---|---|---|---|---|---|---|---|---|
| 1 | [ID] | [System] | [Title] | [Severity] | [Date] | [# Days] | [Owner] | [Action] |
| 2 | [ID] | [System] | [Title] | [Severity] | [Date] | [# Days] | [Owner] | [Action] |
| 3 | [ID] | [System] | [Title] | [Severity] | [Date] | [# Days] | [Owner] | [Action] |
| 4 | [ID] | [System] | [Title] | [Severity] | [Date] | [# Days] | [Owner] | [Action] |
| 5 | [ID] | [System] | [Title] | [Severity] | [Date] | [# Days] | [Owner] | [Action] |

---

*End of Document*

---

**Document Control Notice**

This document is classified **Confidential**. It must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy. Printed copies are considered uncontrolled. Always refer to the document management system for the current version.

| Attribute | Detail |
|---|---|
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Vulnerability Management Lead |
| Review Frequency | Semi-annual |
| Retention Period | [Minimum 5 years / per Records Retention Policy] |
| Storage Location | [Document Management System Path / SharePoint URL] |