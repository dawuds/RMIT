# SIEM Rule Tuning Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official record of all Security Information and Event Management (SIEM) rule tuning activities and use case updates performed within [Organization Name]. It provides a traceable, auditable log of changes made to detection logic, correlation rules, alert thresholds, and threat use cases managed within the SIEM platform.

This artifact supports compliance with Bank Negara Malaysia's **Risk Management in Technology (RMiT)** Policy Document, specifically **Clause 11.7**, which mandates that financial institutions maintain effective monitoring controls, including the ongoing calibration of security monitoring tools to ensure detection efficacy and operational relevance.

### 1.2 Scope

This record applies to:

- All SIEM detection rules, correlation logic, and use cases deployed in [Organization Name]'s security monitoring environment
- Tuning activities performed in response to false positive reduction, threat landscape changes, new asset onboarding, or post-incident review
- Use case additions, modifications, disablements, and retirements managed by the Security Operations Centre (SOC)
- All SIEM platforms in scope, including but not limited to: [SIEM Platform Name, e.g., Splunk / Microsoft Sentinel / IBM QRadar]

*This record is maintained on a continuous basis by the SOC team and is subject to formal quarterly review by the SOC Manager.*

---

## 2. Asset and Item Identification

*Identify the SIEM platform(s) and the specific rule or use case being tuned. Each entry must correspond to a uniquely identifiable rule or detection use case within the SIEM.*

### 2.1 SIEM Platform Details

| Field | Details |
|---|---|
| **SIEM Platform Name** | [e.g., Splunk Enterprise Security / Microsoft Sentinel] |
| **Platform Version** | [e.g., 9.1.x] |
| **Deployment Environment** | [Production / UAT / DR] |
| **Hosting Location** | [On-Premises / Cloud / Hybrid] |
| **Platform Asset Tag / ID** | [Asset ID from CMDB] |

### 2.2 Rule / Use Case Identification

| Field | Details |
|---|---|
| **Rule ID** | [Unique Rule Identifier, e.g., UC-SOC-0042] |
| **Rule Name** | [Descriptive rule name] |
| **Use Case Category** | [e.g., Insider Threat / Brute Force / Data Exfiltration / Malware / Privilege Escalation] |
| **MITRE ATT&CK Mapping** | [e.g., T1078 – Valid Accounts / TA0001 – Initial Access] |
| **Detection Data Source(s)** | [e.g., Windows Event Logs, Firewall Logs, EDR Telemetry] |
| **Rule Type** | [Correlation Rule / Threshold Alert / Behavioural Baseline / Lookup-based] |
| **Severity Level** | [Critical / High / Medium / Low / Informational] |

---

## 3. Classification and Categorisation

*Classify the tuning record according to the type of change performed and the operational category of the affected rule. This enables trend analysis and supports prioritisation of tuning backlogs.*

### 3.1 Tuning Change Classification

| Field | Details |
|---|---|
| **Change Type** | [New Rule / Threshold Adjustment / Logic Modification / Exclusion Added / Rule Disabled / Rule Retired] |
| **Change Priority** | [Critical / High / Medium / Low] |
| **Change Trigger** | [False Positive Reduction / Threat Intelligence Update / Post-Incident Review / New Asset Onboarding / Compliance Requirement / Vendor Advisory] |
| **Change Request Reference** | [CR / Ticket Number, e.g., ITSM-2024-1138] |

### 3.2 Rule Category

| Field | Details |
|---|---|
| **Functional Domain** | [e.g., Identity & Access / Endpoint / Network / Cloud / Application] |
| **Regulatory Relevance** | [BNM RMiT / PDPA / PCI-DSS / ISO 27001 / NACSA / Internal Policy] |
| **Asset Class Covered** | [e.g., Internet-facing Systems / Core Banking / Internal Endpoints / Cloud Workloads] |
| **Environment Applicability** | [All Environments / Production Only / Internet-Facing Only] |

---

## 4. Owner and Custodian

*Record the individuals responsible for authorising, implementing, and verifying the tuning activity. Clear ownership is required for audit traceability and accountability under BNM RMiT Clause 11.7.*

### 4.1 Ownership Details

| Role | Name | Employee ID | Contact |
|---|---|---|---|
| **Rule Owner** | [SOC Analyst / Threat Detection Engineer Name] | [Employee ID] | [Email] |
| **Technical Custodian** | [SIEM Administrator Name] | [Employee ID] | [Email] |
| **Approving Authority** | [SOC Manager Name] | [Employee ID] | [Email] |
| **Secondary Approver (if applicable)** | [CISO / IT Security Lead] | [Employee ID] | [Email] |

### 4.2 Team Accountability

| Team | Responsibility |
|---|---|
| **Security Operations Centre (SOC)** | Rule tuning execution, false positive review, use case development |
| **Threat Intelligence Team** | Threat-driven tuning inputs and MITRE ATT&CK alignment |
| **SIEM Platform Administrator** | Deployment of rule changes in SIEM environment |
| **IT Security Governance** | Quarterly review sign-off and escalation |
| **Internal Audit** | Independent review and compliance verification |

---

## 5. Status and Lifecycle Stage

*Document the current operational status of the rule and its position in the detection use case lifecycle. Rules should progress through defined stages from development to retirement.*

### 5.1 Rule Status

| Field | Details |
|---|---|
| **Current Status** | [Active / Disabled / Under Review / Retired / In Development] |
| **Activation Date** | [DD/MM/YYYY] |
| **Last Tuning Date** | [DD/MM/YYYY] |
| **Scheduled Review Date** | [DD/MM/YYYY] |
| **Retirement Date (if applicable)** | [DD/MM/YYYY or N/A] |

### 5.2 Lifecycle Stage

| Stage | Description | Applicable (Y/N) |
|---|---|---|
| **Development** | Rule drafted, not yet deployed | [Y/N] |
| **Testing / UAT** | Rule deployed in non-production for validation | [Y/N] |
| **Production – Active** | Rule deployed and generating alerts | [Y/N] |
| **Production – Suppressed** | Rule active but alerts suppressed pending tuning | [Y/N] |
| **Under Review** | Flagged for tuning or retirement | [Y/N] |
| **Retired** | Rule decommissioned and archived | [Y/N] |

### 5.3 Tuning Activity Log

*Record each individual tuning action as a line entry. This is the primary operational log for this artifact and should be updated continuously.*

| Entry # | Date | Rule ID | Rule Name | Change Type | Change Description | Trigger | Performed By | Approved By | Post-Change Status |
|---|---|---|---|---|---|---|---|---|---|
| 001 | [DD/MM/YYYY] | [Rule ID] | [Rule Name] | [Change Type] | [Detailed description of change made] | [Change Trigger] | [Analyst Name] | [SOC Manager Name] | [Active / Disabled] |
| 002 | [DD/MM/YYYY] | [Rule ID] | [Rule Name] | [Change Type] | [Detailed description of change made] | [Change Trigger] | [Analyst Name] | [SOC Manager Name] | [Active / Disabled] |
| 003 | | | | | | | | | |

---

## 6. Last Review Date

*Capture the outcomes of the most recent formal review of this rule set. Continuous monitoring is expected; however, structured quarterly reviews must be formally documented.*

### 6.1 Most Recent Review Summary

| Field | Details |
|---|---|
| **Review Date** | [DD/MM/YYYY] |
| **Review Type** | [Quarterly Formal Review / Post-Incident Review / Ad-hoc Review / Threat Intelligence-Driven Review] |
| **Reviewer(s)** | [Names and Roles] |
| **Review Scope** | [All rules / Specific use case category / Rules flagged for review] |
| **Total Rules Reviewed** | [Number] |
| **Rules Modified** | [Number] |
| **Rules Disabled / Retired** | [Number] |
| **New Rules Added** | [Number] |
| **Outstanding Actions** | [Summary of pending items or "None"] |
| **Next Scheduled Review** | [DD/MM/YYYY] |

### 6.2 Review Findings and Actions

| Finding # | Rule ID | Finding Description | Risk Level | Recommended Action | Action Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| F-001 | [Rule ID] | [Description of finding, e.g., excessive false positives observed] | [High / Medium / Low] | [Recommended remediation] | [Name] | [DD/MM/YYYY] | [Open / Closed] |
| F-002 | | | | | | | |

### 6.3 Rule Performance Metrics (Quarterly Snapshot)

*Include key performance indicators to support evidence-based tuning decisions.*

| Metric | Value | Period |
|---|---|---|
| Total alerts generated | [Number] | [Quarter / Month] |
| True positive rate | [%] | [Quarter / Month] |
| False positive rate | [%] | [Quarter / Month] |
| Mean time to triage (MTTT) | [Minutes] | [Quarter / Month] |
| Rules with >80% false positive rate (flagged for tuning) | [Number] | [Quarter / Month] |
| Rules not triggered in period (dormant review) | [Number] | [Quarter / Month] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for SIEM rule tuning activities across all relevant stakeholders.*

| Activity | SOC Analyst | SOC Manager | SIEM Administrator | Threat Intel Analyst | CISO / IT Security Lead | Internal Audit |
|---|---|---|---|---|---|---|
| Identify tuning requirement | R | A | I | C | I | I |
| Draft rule change / tuning proposal | R | A | C | C | I | — |
| Review and approve tuning change | C | A | I | C | C | I |
| Implement rule change in SIEM | C | I | R | — | I | — |
| Validate and test rule post-change | R | A | C | C | I | — |
| Update tuning log / this record | R | A | I | — | — | — |
| Conduct quarterly review | C | R | C | C | A | I |
| Provide independent assurance | — | I | — | — | C | R/A |
| Escalate critical tuning failures | I | R | I | I | A | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial document creation |
| 1.1 | | | |
| 1.2 | | | |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Manager | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [DD/MM/YYYY] |
| Head of IT / CTO | [Name] | [Signature] | [DD/MM/YYYY] |
| Compliance Officer | [Name] | [Signature] | [DD/MM/YYYY] |

---

## 9. References

The following regulatory frameworks, policy documents, and standards are referenced by this artifact:

| Reference | Title | Clause / Section |
|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 11.7** – Security Event Monitoring |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.1 – Technology Risk Management Framework |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.6 – Cyber Resilience |
| NACSA | National Cyber Security Policy | Security Operations & Incident Management |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A – 8.15 (Logging), 8.16 (Monitoring) |
| ISO/IEC 27035 | Information Security Incident Management | Detection and Reporting Phase |
| MITRE ATT&CK | Adversarial Tactics, Techniques & Common Knowledge | All applicable TTPs mapped per rule |
| [Organization Name] | Information Security Policy | [Internal Policy Reference] |
| [Organization Name] | SOC Operations Manual | [Internal Document Reference] |
| [Organization Name] | SIEM Use Case Management Procedure | [Internal Document Reference] |

---

## 10. Appendices

### Appendix A – SIEM Rule Tuning Change Request Template

*Use this template when submitting a formal change request for rule tuning through the ITSM system.*

| Field | Details |
|---|---|
| **Request Date** | [DD/MM/YYYY] |
| **Requestor** | [Name and Role] |
| **Rule ID** | [Rule ID] |
| **Rule Name** | [Rule Name] |
| **Current Behaviour** | [Describe current alert behaviour or issue] |
| **Proposed Change** | [Describe the specific change to be made] |
| **Business Justification** | [Reason for change — e.g., false positive reduction, new threat coverage] |
| **Risk of Change** | [Potential impact if change introduces coverage gaps] |
| **Rollback Plan** | [How to revert if the change causes issues] |
| **Testing Evidence** | [Reference to UAT / test environment validation results] |
| **Approver** | [SOC Manager Name] |

---

### Appendix B – Rule Status Definitions

| Status | Definition |
|---|---|
| **Active** | Rule is deployed and generating alerts in production |
| **Disabled** | Rule is deployed but alerts are suppressed; under review or pending tuning |
| **Under Review** | Rule has been flagged for assessment; no changes implemented yet |
| **In Development** | Rule is being drafted or tested in non-production environment |
| **Retired** | Rule has been decommissioned; retained in archive for audit purposes |

---

### Appendix C – Change Type Definitions

| Change Type | Definition |
|---|---|
| **New Rule** | A previously non-existent detection rule added to the SIEM |
| **Threshold Adjustment** | Modification of numeric thresholds (e.g., login attempt count, data volume) |
| **Logic Modification** | Change to the rule query, field logic, or correlation conditions |
| **Exclusion Added** | A whitelist or suppression entry added to reduce false positives |
| **Rule Disabled** | Rule set to inactive without deletion |
| **Rule Retired** | Rule permanently removed from active deployment and archived |

---

### Appendix D – Tuning Record Retention Schedule

*Retention of tuning records must comply with BNM RMiT and internal data retention policy.*

| Record Type | Minimum Retention Period | Storage Location | Owner |
|---|---|---|---|
| SIEM Rule Tuning Log | 7 years | [Document Management System / GRC Platform] | SOC Manager |
| Quarterly Review Reports | 7 years | [Document Management System] | SOC Manager |
| Change Request Records | 7 years | [ITSM Platform] | SIEM Administrator |
| Approval Sign-Off Records | 7 years | [Document Management System] | Compliance Officer |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Last Review Date]*