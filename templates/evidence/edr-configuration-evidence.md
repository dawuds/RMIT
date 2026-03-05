# EDR Configuration Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | EDR Configuration Evidence |
| **Owner** | Security Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **RMiT Reference** | Clause 11.8 |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It contains sensitive configuration and security policy information pertaining to [Organization Name]'s endpoint detection and response infrastructure. Distribution is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure, reproduction, or transmission of this document is strictly prohibited and may constitute a breach of [Organization Name]'s Information Security Policy and applicable Malaysian law.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [EDR Solution Overview](#4-edr-solution-overview)
5. [EDR Policy Statements and Requirements](#5-edr-policy-statements-and-requirements)
6. [EDR Configuration Standards](#6-edr-configuration-standards)
7. [Detection Rules and Response Policies](#7-detection-rules-and-response-policies)
8. [Monitoring and Alerting Configuration](#8-monitoring-and-alerting-configuration)
9. [Incident Response Integration](#9-incident-response-integration)
10. [Exceptions and Escalation Process](#10-exceptions-and-escalation-process)
11. [Compliance and Enforcement](#11-compliance-and-enforcement)
12. [Review and Approval History](#12-review-and-approval-history)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section explains the intent of this document and the regulatory obligation it satisfies. Authors should clearly articulate why the EDR configuration evidence document exists and its role in demonstrating compliance.*

This document serves as the formal evidence artifact demonstrating that [Organization Name] has implemented, configured, and maintains an Endpoint Detection and Response (EDR) solution in accordance with the requirements of Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.8, which mandates the deployment of advanced endpoint security controls across all critical and non-critical information assets.

This document provides a structured record of the EDR solution's configuration settings, policy parameters, detection logic, response automation, and governance controls. It is intended to serve as primary evidence during BNM regulatory examinations, internal audits, and third-party assessments to demonstrate that [Organization Name] maintains effective endpoint threat detection and response capabilities commensurate with its risk profile and operational environment.

### 1.2 Scope

*This section defines the boundaries of what is covered by this document — which systems, endpoints, business units, and network segments are included or explicitly excluded. Authors should be precise and reference asset inventories where applicable.*

This document applies to all endpoints within [Organization Name]'s technology environment, including but not limited to:

**In Scope:**

- All Windows-based workstations and laptops issued to employees, contractors, and third-party vendors with access to [Organization Name]'s network
- All Windows and Linux-based servers, including on-premises servers and virtual machines hosted within [Organization Name]'s data centres
- Cloud-hosted virtual machines and compute instances within [Organization Name]'s managed cloud environments ([Cloud Provider Name], e.g., AWS, Azure, GCP)
- All endpoints connecting to production, staging, and development environments that process, store, or transmit customer data or financial transaction data
- Mobile Device Management (MDM)-enrolled corporate mobile devices, where applicable
- Point-of-sale (POS) terminals and dedicated financial transaction processing endpoints, where applicable

**Out of Scope:**

- Personally owned devices operating under a Bring Your Own Device (BYOD) policy, unless explicitly enrolled in the EDR programme
- Operational Technology (OT) and Industrial Control Systems (ICS), which are governed under a separate OT security framework
- Network infrastructure devices (routers, switches, firewalls), which are covered under the Network Security Configuration Evidence document
- Third-party managed systems where [Organization Name] does not have administrative control, unless governed by contractual EDR requirements

**Geographic Scope:**

This document covers all [Organization Name] operations within Malaysia, including all branches, regional offices, and subsidiaries under the regulatory jurisdiction of Bank Negara Malaysia. Operations in other jurisdictions are subject to equivalent local regulatory requirements and are separately documented.

### 1.3 Objectives

*List the specific measurable objectives this EDR configuration evidence is intended to demonstrate. This helps auditors quickly assess the document's coverage.*

The specific objectives of this EDR Configuration Evidence document are to:

1. Demonstrate deployment of an approved EDR solution across all in-scope endpoints meeting or exceeding a defined coverage threshold
2. Evidence that EDR configuration settings align with [Organization Name]'s information security policies and industry best practices
3. Document the detection capabilities and response policies configured within the EDR platform
4. Provide traceability between EDR configuration decisions and RMiT Clause 11.8 requirements
5. Record the governance controls, review cadence, and approval processes governing EDR configuration management
6. Serve as a reference for incident response teams, auditors, and regulatory examiners

---

## 2. Regulatory and Policy Framework

### 2.1 Regulatory Basis

*This section maps this document to its regulatory origins. Authors should confirm the exact clause references against the current version of the RMiT Policy Document and update accordingly upon regulatory revisions.*

This document is prepared in response to and compliance with the following regulatory requirements:

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 11.8 | Endpoint security controls including EDR deployment and configuration |
| BNM RMiT Policy Document | Clause 11.1 | Technology risk management framework and controls |
| BNM RMiT Policy Document | Clause 11.2 | Security patch management for endpoints |
| BNM RMiT Policy Document | Clause 11.6 | Security monitoring and threat detection |
| BNM RMiT Policy Document | Clause 10.1 | Cyber resilience requirements |
| Personal Data Protection Act 2010 (PDPA) | Section 9 | Security principle — protection of personal data processed on endpoints |
| NACSA Cyber Security Framework | Domain 3 | Detect — endpoint monitoring and detection capabilities |
| [ISO/IEC 27001:2022] | Annex A 8.7, 8.16 | Protection against malware; monitoring activities |
| [PCI DSS v4.0] | Requirement 5 | Protect all systems against malware (if applicable) |

### 2.2 Internal Policy Alignment

*List the internal policies and standards that this EDR configuration must align with. Cross-reference document IDs from your document management system.*

This document is consistent with and subordinate to the following [Organization Name] internal policies and standards:

| Internal Policy / Standard | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Doc ID] | Chief Information Security Officer |
| Endpoint Security Standard | [Doc ID] | Security Operations Manager |
| Acceptable Use Policy | [Doc ID] | Head of Human Resources |
| Incident Response Policy | [Doc ID] | Security Operations Manager |
| Change Management Policy | [Doc ID] | Head of IT Operations |
| Vendor Risk Management Policy | [Doc ID] | Head of IT / Procurement |
| Data Classification Policy | [Doc ID] | Data Protection Officer |
| Business Continuity Plan | [Doc ID] | Head of Business Continuity |

### 2.3 Interpretation of RMiT Clause 11.8

*Authors should document their organization's specific interpretation of how RMiT Clause 11.8 is implemented. This narrative is important for regulatory examinations.*

RMiT Clause 11.8 requires financial institutions to implement endpoint security measures that provide comprehensive threat detection and response capabilities. [Organization Name] interprets and implements this requirement through the following key controls:

- **Deployment Coverage:** EDR agents are deployed on all in-scope endpoints with a target coverage rate of [e.g., 99%] or greater across managed endpoints
- **Behavioural Detection:** The EDR solution employs behavioural analysis and machine learning to detect known and unknown threats beyond signature-based detection
- **Automated Response:** Automated containment and remediation actions are configured for high-severity threat classifications to minimize dwell time
- **Centralized Visibility:** A centralized EDR management console provides unified visibility across all protected endpoints for the Security Operations Centre (SOC)
- **Continuous Monitoring:** The EDR platform operates on a 24/7 basis with real-time telemetry ingestion and alert generation
- **Evidence Preservation:** The EDR solution retains endpoint telemetry and forensic artefacts for a minimum of [X months] in accordance with BNM data retention requirements

---

## 3. Roles and Responsibilities

### 3.1 RACI Matrix

*This section defines accountability for all aspects of EDR configuration management. Populate each row with the actual role titles from your organization's structure. Definitions: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Security Operations Manager | SOC Analyst (L1/L2) | IT Operations | CISO | Internal Audit | Vendor / MSP |
|---|---|---|---|---|---|---|
| EDR Strategy and Roadmap | A | I | C | C | I | C |
| EDR Vendor Selection and Procurement | C | I | C | A | I | R |
| EDR Platform Architecture Design | A | C | R | C | I | C |
| EDR Agent Deployment and Rollout | A | I | R | I | I | C |
| EDR Policy and Rule Configuration | A | R | C | C | I | C |
| Detection Rule Development and Tuning | A | R | I | C | I | C |
| Response Policy Configuration | A | R | C | C | I | C |
| Day-to-Day Alert Triage and Investigation | I | R | C | I | I | A |
| EDR Configuration Change Management | A | C | R | C | I | I |
| EDR Coverage Reporting | A | R | I | I | I | C |
| EDR Performance and Health Monitoring | C | R | A | I | I | R |
| Compliance Reporting to BNM | C | C | C | A | R | I |
| Annual Configuration Review | A | R | C | C | R | C |
| Exception Approval (Standard) | A | I | C | I | I | I |
| Exception Approval (Critical Systems) | C | I | C | A | I | I |
| EDR Policy Document Maintenance | A | C | C | C | I | I |
| Incident Escalation and Response | A | R | C | C | I | C |
| EDR Vendor SLA Management | A | I | C | C | I | R |

### 3.2 Role Descriptions

*Provide a brief description of each role's responsibilities in relation to EDR configuration and management.*

**Security Operations Manager**
The Security Operations Manager is the document owner and holds overall accountability for the EDR programme. This role is responsible for ensuring EDR configuration aligns with organizational risk appetite, regulatory requirements, and industry best practices. The Security Operations Manager approves configuration changes and exception requests, and reports EDR programme status to the CISO and senior management.

**SOC Analyst (Level 1 / Level 2)**
SOC Analysts are the primary operators of the EDR platform on a day-to-day basis. They are responsible for monitoring alerts, triaging detections, investigating incidents, tuning detection rules to reduce false positives, and executing response actions within their delegated authority. L2 analysts handle escalated investigations and configuration recommendations.

**IT Operations**
IT Operations is responsible for the technical deployment and maintenance of EDR agents across the endpoint estate, including integration with endpoint management platforms (e.g., SCCM, Intune, Ansible). IT Operations ensures agents are current and operational and coordinates deployment scheduling with business units.

**Chief Information Security Officer (CISO)**
The CISO provides strategic oversight of the EDR programme as part of the broader cybersecurity framework. The CISO approves exceptions for critical systems, reviews programme performance metrics, and is accountable for regulatory reporting and engagement with BNM on matters relating to endpoint security.

**Internal Audit**
Internal Audit performs independent assessments of the EDR programme's effectiveness, configuration integrity, and compliance with RMiT requirements. Internal Audit reviews this document annually and provides findings and recommendations to the Audit Committee.

**Vendor / Managed Security Service Provider (MSSP)**
[Vendor Name / MSSP Name] provides the EDR platform and, where applicable, co-managed SOC services. The vendor is responsible for platform availability, threat intelligence updates, and technical support. All vendor access to [Organization Name]'s EDR console is governed by the Vendor Access Management Policy.

---

## 4. EDR Solution Overview

### 4.1 Solution Identification

*Document the specific EDR product deployed. This information is critical for regulatory evidence — examiners will want to confirm the specific solution and its capabilities.*

| Field | Details |
|---|---|
| **EDR Product Name** | [EDR Product Name, e.g., CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne Singularity] |
| **Vendor / Developer** | [Vendor Name] |
| **Product Version / Build** | [Version Number] |
| **Licensing Model** | [e.g., Per-endpoint annual subscription] |
| **License Count** | [Number of licensed endpoints] |
| **Deployment Model** | [Cloud-managed / On-premises / Hybrid] |
| **Management Console URL** | [Internal URL or SaaS Console URL — redact if sensitive] |
| **Deployment Date (Initial)** | [Date] |
| **Last Major Upgrade** | [Date] |
| **Support Contract Expiry** | [Date] |
| **Vendor Account Manager** | [Name and Contact] |
| **Technical Support Contact** | [Support Portal / Phone / Email] |
| **SLA — Platform Availability** | [e.g., 99.9% uptime SLA] |
| **SLA — Response Time (Critical)** | [e.g., 4 hours] |

### 4.2 Architecture Overview

*Describe the high-level architecture of the EDR deployment. Include references to architecture diagrams stored in the appendices.*

[Organization Name]'s EDR solution is deployed in a [cloud-managed / hybrid] architecture. The EDR agent is installed on all in-scope endpoints and communicates with the [vendor] cloud management platform / on-premises management server via encrypted channels over port [port number] using TLS [version].

**Key Architectural Components:**

| Component | Description | Location |
|---|---|---|
| EDR Management Console | Centralized web-based console for policy management, alert triage, and reporting | [Cloud SaaS / On-premises at [Data Centre Name]] |
| EDR Agent | Lightweight endpoint agent providing telemetry collection, detection, and response | Deployed on all in-scope endpoints |
| Threat Intelligence Feed | Real-time threat intelligence integrated into the EDR platform | [Vendor cloud / Third-party feed: [Feed Name]] |
| SIEM Integration | Log forwarding and alert integration with [SIEM Product Name] | [SIEM Location] |
| Proxy / Relay Server | Internal communication relay for endpoints without direct internet access | [Location / IP Range] |
| API Integration | EDR API endpoints for SOAR integration and automated response | [API Gateway URL — internal] |

*Reference: See **Appendix A** for the EDR Architecture Diagram.*

### 4.3 Endpoint Coverage Summary

*Provide a summary of EDR deployment coverage. This table should be updated at each review cycle and reflects coverage as of the Last Review Date.*

| Endpoint Category | Total Endpoints | EDR Deployed | Coverage % | Notes |
|---|---|---|---|---|
| Windows Workstations | [Number] | [Number] | [%] | |
| Windows Laptops | [Number] | [Number] | [%] | |
| Windows Servers (On-premises) | [Number] | [Number] | [%] | |
| Linux Servers (On-premises) | [Number] | [Number] | [%] | |
| Windows Servers (Cloud VMs) | [Number] | [Number] | [%] | |
| Linux Servers (Cloud VMs) | [Number] | [Number] | [%] | |
| macOS Endpoints | [Number] | [Number] | [%] | |
| **Total** | **[Total]** | **[Total]** | **[%]** | Target: ≥99% |

**Coverage Exceptions:** [Number] endpoints are currently excluded from EDR coverage. All exclusions are documented in the Exception Register (Section 10.3 and Appendix D).

---

## 5. EDR Policy Statements and Requirements

### 5.1 Policy Statements

*Document the formal policy statements governing EDR deployment and usage. These statements should align with your Information Security Policy and be written in mandatory language ("shall", "must").*

[Organization Name] establishes the following policy statements governing the deployment and operation of the Endpoint Detection and Response solution:

**PS-01: Mandatory Deployment**
All endpoints within the defined scope of this document **shall** have an operational EDR agent installed and reporting to the central management console. Any endpoint without an active EDR agent constitutes a security risk that **must** be remediated within [e.g., 5 business days] or subject to an approved exception.

**PS-02: Agent Operational Status**
EDR agents **shall** maintain continuous operation in active protection mode. Disabling, tampering with, or uninstalling the EDR agent without explicit written authorization from the Security Operations Manager is prohibited. Any unauthorized agent tampering **must** be treated as a security incident and investigated accordingly.

**PS-03: Detection Mode**
The EDR solution **shall** be configured to operate in active detection and prevention mode across all production endpoints. Test or passive/audit-only modes are restricted to non-production environments and require documented approval.

**PS-04: Threat Intelligence Currency**
Threat intelligence, detection signatures, and machine learning models within the EDR platform **shall** be maintained in a current state through automated updates from the vendor's threat intelligence network. Manual intervention to defer or disable updates requires written approval from the Security Operations Manager.

**PS-05: Alert Response SLA**
Security alerts generated by the EDR platform **shall** be triaged in accordance with the defined alert severity SLA:

| Severity | Triage SLA | Escalation SLA | Resolution Target |
|---|---|---|---|
| Critical | 15 minutes | 1 hour | 4 hours |
| High | 1 hour | 4 hours | 24 hours |
| Medium | 4 hours | 24 hours | 72 hours |
| Low | 24 hours | 72 hours | 14 days |
| Informational | Best effort | N/A | Best effort |

**PS-06: Configuration Change Control**
All changes to EDR configuration, detection rules, response policies, and exclusions **shall** be managed through [Organization Name]'s Change Management Policy. Emergency changes may be implemented with verbal approval from the Security Operations Manager but **must** be documented retroactively within [e.g., 24 hours].

**PS-07: Data Retention**
EDR telemetry, alert data, and forensic artefacts **shall** be retained for a minimum of [12 / 24] months in accordance with BNM requirements and [Organization Name]'s Data Retention Policy. Data pertaining to confirmed security incidents **shall** be retained for a minimum of [5 years] or as directed by legal counsel.

**PS-08: Integration with SOC**
EDR alerts **shall** be integrated with [SIEM Product Name] to provide unified visibility within the Security Operations Centre. The integration **shall** ensure that all Critical and High severity EDR alerts generate corresponding SIEM cases for investigation tracking.

**PS-09: Exclusion Management**
All EDR exclusions (process, file path, network, folder) **shall** be documented, business-justified, approved, and reviewed annually. Broad or wildcard exclusions that materially reduce detection capability are prohibited without CISO approval.

**PS-10: Privileged Account Protection**
EDR policies **shall** include specific detection rules and response actions for threats targeting privileged accounts, domain controllers, and critical financial transaction systems, consistent with the sensitivity of these assets.

### 5.2 Compliance Requirements

*Document the specific technical and operational requirements derived from RMiT Clause 11.8 and internal policy. These requirements form the basis for compliance assessment.*

| Requirement ID | Requirement Description | Priority | Verification Method |
|---|---|---|---|
| EDR-REQ-01 | EDR agent deployed on ≥99% of in-scope endpoints | Mandatory | Coverage report from EDR console |
| EDR-REQ-02 | EDR agent version within [N] major versions of current release | Mandatory | Agent version report |
| EDR-REQ-03 | Threat intelligence updated within past [24 hours] | Mandatory | Console status dashboard |
| EDR-REQ-04 | All Critical alerts acknowledged within 15 minutes | Mandatory | SIEM/SOAR SLA report |
| EDR-REQ-05 | EDR alerts integrated with SIEM | Mandatory | Integration health check |
| EDR-REQ-06 | EDR exclusion list reviewed annually | Mandatory | Exclusion review sign-off |
| EDR-REQ-07 | No unauthorized agent tampering events | Mandatory | Tamper protection log review |
| EDR-REQ-08 | EDR configuration changes via Change Management | Mandatory | Change log review |
| EDR-REQ-09 | EDR telemetry retained for minimum [12] months | Mandatory | Retention policy verification |
| EDR-REQ-10 | Monthly EDR coverage report to Security Operations Manager | Mandatory | Report distribution log |
| EDR-REQ-11 | Annual EDR configuration review and recertification | Mandatory | This document (annual review) |
| EDR-REQ-12 | Automated response actions for defined critical threat categories | Mandatory | Response policy configuration review |

---

## 6. EDR Configuration Standards

### 6.1 Agent Configuration Settings

*This section documents the core configuration settings applied to EDR agents. Authors should populate all fields with the actual configured values as verified in the EDR management console at the time of this document's review.*

#### 6.1.1 General Agent Settings

| Configuration Parameter | Configured Value | Recommended Value | Notes |
|---|---|---|---|
| Agent Mode | [Active Prevention / Detection Only] | Active Prevention | Production endpoints |
| Tamper Protection | [Enabled / Disabled] | Enabled | Prevents unauthorized agent removal |
| Auto-Update | [Enabled / Disabled] | Enabled | Agent auto-updates |
| Update Channel | [Stable / Beta / Delayed] | Stable | Production endpoints |
| Communication Interval | [e.g., Every 5 minutes] | ≤5 minutes | Heartbeat to management console |
| Offline Protection | [Enabled / Disabled] | Enabled | Protection without network connectivity |
| Kernel-Level Protection | [Enabled / Disabled] | Enabled | Deep kernel visibility |
| Memory Protection | [Enabled / Disabled] | Enabled | Memory injection detection |
| Script Control | [Enabled / Disabled / Audit] | Enabled | PowerShell/script execution control |
| Device Control | [Enabled / Disabled / Audit] | Enabled | USB and removable media control |
| Network Control | [Enabled / Disabled] | Enabled | Network connection inspection |

#### 6.1.2 Prevention and Detection Configuration

| Feature | Configuration | Threshold / Sensitivity | Notes |
|---|---|---|---|
| Signature-based Detection | [Enabled] | N/A | Traditional AV signatures |
| Behavioural AI / ML Detection | [Enabled] | [Aggressive / Moderate / Cautious] | |
| Exploit Prevention | [Enabled] | [Aggressive / Moderate] | Exploit technique blocking |
| Ransomware Protection | [Enabled] | [Enabled] | Ransomware behavioural detection |
| Fileless Malware Detection | [Enabled] | N/A | Memory-resident threat detection |
| Credential Theft Prevention | [Enabled] | N/A | LSASS protection, credential dumping |
| Lateral Movement Detection | [Enabled] | N/A | Pass-the-hash, lateral tool transfer |
| Suspicious Network Connections | [Enabled] | N/A | C2 beaconing, DNS tunnelling |
| Malicious PowerShell Execution | [Enabled / Block] | N/A | |
| Malicious Macro Execution | [Enabled / Block] | N/A | Office document macros |
| Process Injection Detection | [Enabled] | N/A | Code injection techniques |
| Privilege Escalation Detection | [Enabled] | N/A | UAC bypass, token manipulation |

#### 6.1.3 Response Action Configuration

*Document the automated response actions configured for each detection category.*

| Detection Category | Severity | Automated Action | Manual Escalation |
|---|---|---|---|
| Ransomware Execution | Critical | Isolate endpoint immediately | SOC L2, Security Operations Manager, CISO |
| Active C2 Communication | Critical | Isolate endpoint, kill process | SOC L2, Security Operations Manager |
| Credential Dumping (LSASS) | Critical | Kill process, alert SOC | SOC L2 |
| Lateral Movement Detected | High | Alert SOC, optional containment | SOC L2 |
| Malware (High Confidence) | High | Quarantine file, alert SOC | SOC L1/L2 |
| Malware (Medium Confidence) | Medium | Quarantine file, alert SOC | SOC L1 |
| Suspicious Script Execution | High | Block execution, alert SOC | SOC L1 |
| Exploit Technique Detected | High | Block, alert SOC | SOC L1/L2 |
| PUP / Adware | Low | Quarantine, log | SOC L1 |
| Unauthorized USB Device | Medium | Block device, alert SOC | SOC L1 |
| Tamper Attempt on Agent | Critical | Alert SOC, security incident | SOC L2, Security Operations Manager |

### 6.2 Policy Group Configuration

*Document the EDR policy groups applied to different endpoint categories. Different endpoint types may have different configuration profiles based on risk and operational requirements.*

| Policy Group Name | Applied To | Key Differences from Default | Approved By | Date |
|---|---|---|---|---|
| [Policy Group: Standard Workstation] | All standard employee workstations and laptops | Standard prevention settings | [Approver] | [Date] |
| [Policy Group: Server — Critical] | Domain controllers, financial transaction servers | Heightened sensitivity, strict response actions, no exclusions | [Approver] | [Date] |
| [Policy Group: Server — Standard] | General purpose servers | Standard server profile, balanced sensitivity | [Approver] | [Date] |
| [Policy Group: Developer Workstation] | Developer and IT staff endpoints | Specific exclusions for development tools (documented) | [Approver] | [Date] |
| [Policy Group: POS / Kiosk] | Point-of-sale terminals, ATM companion endpoints | Locked-down profile, application whitelisting | [Approver] | [Date] |
| [Policy Group: Legacy System] | [Legacy system type] | Reduced prevention (compatibility), increased monitoring | CISO | [Date] |

### 6.3 Exclusion Configuration

*Document all EDR exclusions in force. Each exclusion must have a documented justification, approval, and expiry date. This section is subject to annual review and recertification.*

> **Warning:** Overly broad exclusions materially reduce EDR effectiveness. Each exclusion below has been individually reviewed and approved. Wildcard exclusions (`*`) require CISO approval.

| Exclusion ID | Exclusion Type | Exclusion Value | Business Justification | Approved By | Approval Date | Expiry Date | Review Status |
|---|---|---|---|---|---|---|---|
| EXC-001 | File Path | [e.g., C:\Program Files\[App]\] | [Legitimate application causing false positive — [Application Name] version [X]] | [Approver] | [Date] | [Date] | [Current / Requires Review] |
| EXC-002 | Process | [e.g., backup_agent.exe] | [Backup agent process triggers behavioural detection; vendor-confirmed false positive] | [Approver] | [Date] | [Date] | [Current] |
| EXC-003 | Network | [IP Range / Domain] | [Internal scanning tool — authorized vulnerability scanner] | [Approver] | [Date] | [Date] | [Current] |
| [EXC-00N] | [Type] | [Value] | [Justification] | [Approver] | [Date] | [Date] | [Status] |

**Total Active Exclusions:** [Number]
**Exclusions Pending Review:** [Number]
**Exclusions Expired:** [Number] — *Immediate remediation required*

*Reference: Full exclusion register with technical details is maintained in **Appendix E**.*

---

## 7. Detection Rules and Response Policies

### 7.1 Custom Detection Rules

*This section documents any custom detection rules developed by [Organization Name]'s security team in addition to vendor-provided out-of-the-box detection content. Custom rules address organization-specific threats, applications, and environments.*

| Rule ID | Rule Name | Detection Logic Summary | Severity | Response Action | Author | Date Created | Last Reviewed |
|---|---|---|---|---|---|---|---|
| CUST-001 | [Rule Name] | [Brief description of what behaviour this rule detects, e.g., "Detects execution of [internal application] from non-standard path, indicative of application hijacking"] | [Critical/High/Medium/Low] | [Alert / Block / Isolate] | [Author] | [Date] | [Date] |
| CUST-002 | [Rule Name] | [Description] | [Severity] | [Action] | [Author] | [Date] | [Date] |
| CUST-003 | [Rule Name] | [Description] | [Severity] | [Action] | [Author] | [Date] | [Date] |
| [CUST-00N] | [Rule Name] | [Description] | [Severity] | [Action] | [Author] | [Date] | [Date] |

**Total Custom Rules:** [Number]

*Full rule logic and YARA/Sigma rule definitions are stored in [Organization Name]'s detection engineering repository at [repository location] and are protected as Highly Confidential.*

### 7.2 Threat Hunting Policies

*Document scheduled and ad-hoc threat hunting activities conducted using EDR telemetry.*

| Hunt ID | Hunt Name / Objective | Frequency | Hunt Lead | Last Executed | Findings Summary |
|---|---|---|---|---|---|
| HUNT-001 | [e.g., Living-off-the-land binary (LOLBin) abuse detection] | [Monthly] | [SOC L2 Analyst] | [Date] | [e.g., No anomalous findings / [N] suspicious events investigated, [N] escalated] |
| HUNT-002 | [e.g., Unusual scheduled task creation] | [Monthly] | [SOC L2 Analyst] | [Date] | [Findings] |
| HUNT-003 | [e.g., Credential access technique hunting] | [Quarterly] | [SOC L2 Analyst] | [Date] | [Findings] |
| HUNT-004 | [e.g., Lateral movement pattern analysis] | [Quarterly] | [SOC L2 Analyst] | [Date] | [Findings] |
| HUNT-005 | [e.g., Persistence mechanism review] | [Quarterly] | [SOC L2 Analyst] | [Date] | [Findings] |

### 7.3 MITRE ATT&CK Coverage Mapping

*Map EDR detection capabilities to MITRE ATT&CK tactics and techniques. This demonstrates the breadth of detection coverage to auditors and examiners.*

| ATT&CK Tactic | Key Techniques Covered | Detection Coverage | Response Capability | Notes |
|---|---|---|---|---|
| Initial Access | T1566 (Phishing), T1190 (Exploit Public-Facing App) | [High / Medium / Low] | [Block / Alert] | Email gateway provides complementary coverage |
| Execution | T1059 (Command and Scripting Interpreter), T1204 (User Execution) | [High] | [Block / Alert] | Script control enabled |
| Persistence | T1547 (Boot/Logon Autostart), T1053 (Scheduled Task) | [High] | [Alert] | |
| Privilege Escalation | T1548 (Abuse Elevation Control), T1134 (Access Token Manipulation) | [High] | [Block / Alert] | |
| Defence Evasion | T1562 (Impair Defences), T1055 (Process Injection) | [High] | [Block / Alert] | Tamper protection active |
| Credential Access | T1003 (OS Credential Dumping), T1555 (Credentials from Password Stores) | [High] | [Block / Alert] | LSASS protection enabled |
| Discovery | T1082 (System Info Discovery), T1083 (File and Directory Discovery) | [Medium] | [Alert] | Context-dependent detection |
| Lateral Movement | T1021 (Remote Services), T1570 (Lateral Tool Transfer) | [High] | [Alert / Block] | |
| Collection | T1005 (Data from Local System), T1056 (Input Capture) | [Medium] | [Alert] | |
| Command & Control | T1071 (App Layer Protocol), T1095 (Non-App Layer Protocol) | [High] | [Block / Alert] | Network inspection enabled |
| Exfiltration | T1041 (Exfil over C2 Channel), T1048 (Exfil Over Alt Protocol) | [Medium] | [Alert] | DLP provides complementary coverage |
| Impact | T1486 (Data Encrypted for Impact), T1490 (Inhibit System Recovery) | [High] | [Block / Isolate] | Ransomware protection enabled |

---

## 8. Monitoring and Alerting Configuration

### 8.1 Alert Pipeline Configuration

*Document the alert routing and processing pipeline from EDR detection to analyst action.*

The EDR alert pipeline for [Organization Name] operates as follows:

1. **Detection:** EDR agent on endpoint detects suspicious activity and generates an alert
2. **Local Response:** Automated response action executed on endpoint (if configured for the detection type)
3. **Telemetry Transmission:** Alert telemetry transmitted to EDR management console via encrypted channel
4. **SIEM Forwarding:** EDR alert forwarded to [SIEM Product Name] via [syslog / API / connector]
5. **Correlation:** SIEM applies correlation rules to enrich and contextualize the EDR alert
6. **Case Creation:** Critical and High severity alerts automatically generate cases in [SOAR / Ticketing System]
7. **SOC Notification:** SOC analysts notified via [email / Slack / PagerDuty / on-screen alert] based on severity
8. **Triage and Investigation:** SOC analyst triages the alert within the defined SLA
9. **Escalation:** If required, escalation follows the Incident Response escalation path

### 8.2 Alerting Thresholds and Notification Configuration

| Alert Category | Severity | Notification Channel | Recipients | SLA — Notification Delivery |
|---|---|---|---|---|
| Active Threat / Intrusion | Critical | [PagerDuty / SMS / Phone] | SOC On-Call, Security Operations Manager | Immediate (automated) |
| Malware Detection (High Confidence) | High | [Email / SOAR Ticket] | SOC L1/L2 Queue | Within 5 minutes |
| Malware Detection (Medium Confidence) | Medium | [SOAR Ticket] | SOC L1 Queue | Within 15 minutes |
| Agent Tamper Attempt | Critical | [PagerDuty / Email] | Security Operations Manager, CISO | Immediate (automated) |
| Agent Offline (>2 hours) | Medium | [Email] | IT Operations, SOC | Within 30 minutes |
| Agent Offline (>24 hours) | High | [Email / Ticket] | Security Operations Manager | Within 1 hour |
| EDR Coverage Below Threshold | High | [Email] | Security Operations Manager | Daily report |
| Threat Intelligence Update Failure | Medium | [Email] | IT Operations, SOC | Within 1 hour |
| Compliance Policy Violation | Medium | [Email / Ticket] | Security Operations Manager | Within 4 hours |

### 8.3 Reporting and Metrics

*Document the regular reporting outputs generated from the EDR platform to support governance and oversight.*

| Report Name | Frequency | Distribution | Content Summary |
|---|---|---|---|
| EDR Coverage Dashboard | Daily (automated) | Security Operations Manager, IT Operations | Agent deployment status, offline agents, version compliance |
| Alert Volume and SLA Report | Weekly | Security Operations Manager | Alert counts by severity, SLA adherence, top detection categories |
| Threat Detection Summary | Monthly | Security Operations Manager, CISO | Top threats detected, trends, notable incidents |
| EDR Configuration Compliance Report | Monthly | Security Operations Manager, Internal Audit | Configuration drift detection, policy compliance |
| Executive Endpoint Security Summary | Quarterly | CISO, Risk Committee | High-level programme metrics, risk posture summary |
| Annual EDR Programme Review | Annual | CISO, Board Risk Committee | Full programme review, coverage, effectiveness, recommendations |
| Regulatory Compliance Evidence Package | Annual / On Demand | CISO, Compliance, BNM (if requested) | This document and supporting evidence |

---

## 9. Incident Response Integration

### 9.1 EDR-Driven Incident Response Workflow

*This section describes how EDR detections integrate into [Organization Name]'s broader Incident Response framework. Cross-reference the Incident Response Policy [Document ID].*

When the EDR platform generates an alert that escalates to a confirmed security incident, the following integration points apply:

**Automated Containment Actions (EDR-Initiated):**
- Network isolation of the affected endpoint is triggered automatically for Critical detections classified as active intrusions or ransomware
- Isolation persists until explicitly lifted by a SOC L2 analyst or Security Operations Manager
- Isolated endpoints retain EDR agent connectivity to the management console to permit remote forensic investigation
- Automated forensic data collection (process tree, memory dump, file artefacts) is triggered on Critical detections

**SOC Escalation to Incident Response:**

| EDR Trigger Condition | IR Severity | IR Team Notification | IR Plan Reference |
|---|---|---|---|
| Active ransomware execution confirmed | P1 — Critical | Immediate: Security Operations Manager, CISO, IT Operations, Legal | IR-PLAN-001 |
| Confirmed data exfiltration attempt | P1 — Critical | Immediate: Security Operations Manager, CISO, DPO, Legal | IR-PLAN-002 |
| Active C2 communication confirmed | P1 — Critical | Immediate: Security Operations Manager, CISO | IR-PLAN-003 |
| Domain controller compromise indicators | P1 — Critical | Immediate: Security Operations Manager, CISO, IT Operations | IR-PLAN-004 |
| Multiple high-severity alerts, single host | P2 — High | Within 1 hour: Security Operations Manager | IR-PLAN-005 |
| Insider threat indicators | P2 — High | Security Operations Manager, HR, Legal | IR-PLAN-006 |
| PUP / Adware (isolated endpoint) | P4 — Low | SOC ticket, no immediate escalation | Standard SOC process |

### 9.2 Forensic Preservation via EDR

*Document the forensic preservation capabilities available through the EDR platform for use in incident investigations and potential legal proceedings.*

The [EDR Product Name] platform provides the following forensic capabilities available to SOC analysts during incident investigations:

| Forensic Capability | Availability | Data Retention | Notes |
|---|---|---|---|
| Process execution history | [Real-time / [N]-day lookback] | [X months] | Full process tree with parent-child relationships |
| Network connection history | [Real-time / [N]-day lookback] | [X months] | Source/destination IPs, ports, process associations |
| File creation/modification history | [Real-time / [N]-day lookback] | [X months] | Hash values, timestamps, associated processes |
| Registry modification history | [Real-time / [N]-day lookback] | [X months] | Windows endpoints only |
| Memory snapshot / dump | On-demand | Incident record | Requires SOC L2 or above authorization |
| Remote shell / live response | On-demand | Session logs retained [X months] | Requires SOC L2 authorization; session logged |
| File retrieval | On-demand | N/A | Pull files from endpoint for analysis |
| Timeline reconstruction | On-demand | N/A | Chronological event reconstruction |

**Chain of Custody:** All forensic data retrieved from the EDR platform during an incident investigation must be documented in the incident record in [ticketing system]. Evidence handling follows [Organization Name]'s Digital Forensics and Evidence Handling Procedure [Document ID].

---

## 10. Exceptions and Escalation Process

### 10.1 Exception Policy

*This section governs the process for requesting, approving, and managing exceptions to EDR policy requirements. All exceptions represent an accepted increase in risk and must be formally managed.*

Exceptions to any EDR policy requirement documented in this document may be granted only under the following conditions:

1. **Business Justification:** A compelling, documented business justification exists that cannot be addressed through alternative compensating controls
2. **Risk Assessment:** A formal risk assessment has been completed documenting the risk accepted by the exception
3. **Compensating Controls:** Where possible, compensating controls are implemented to mitigate the risk created by the exception
4. **Time-Bounded:** All exceptions are time-bounded with a maximum initial term of [12 months], after which they must be re-evaluated and re-approved
5. **Formal Approval:** Exceptions are approved at the appropriate authority level as defined in Section 10.2
6. **Registered:** All exceptions are recorded in the Exception Register maintained by the Security Operations Manager

### 10.2 Exception Approval Authority

| Exception Category | Risk Level | Approval Authority | Maximum Duration |
|---|---|---|---|
| Agent not deployed — non-critical endpoint | Low | Security Operations Manager | 12 months |
| Agent not deployed — critical endpoint | High | CISO | 6 months |
| Agent operating in Detection-Only mode | Medium | Security Operations Manager | 6 months |
| EDR exclusion — specific process/file | Low–Medium | Security Operations Manager | 12 months |
| EDR exclusion — broad/wildcard | High | CISO | 6 months |
| Response action downgrade (e.g., Alert instead of Block) | Medium | Security Operations Manager | 6 months |
| Legacy system — reduced configuration | Medium–High | CISO | 12 months |
| Emergency configuration change (retroactive) | N/A | Security Operations Manager (retroactive 24hr) | N/A |

### 10.3 Exception Register Summary

*The full Exception Register is maintained as a controlled document by the Security Operations Manager. The following table provides a summary as of the Last Review Date.*

| Exception ID | System / Endpoint | Exception Description | Risk Level | Compensating Control | Approval Authority | Approved Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| EXP-001 | [System Name] | [Brief description] | [Risk Level] | [Compensating control description] | [Approver Role] | [Date] | [Date] | [Active / Expired / Under Review] |
| EXP-002 | [System Name] | [Description] | [Risk Level] | [Control] | [Approver] | [Date] | [Date] | [Status] |
| [EXP-00N] | [System] | [Description] | [Risk] | [Control] | [Approver] | [Date] | [Date] | [Status] |

**Total Active Exceptions:** [Number]
**Exceptions Expiring within 90 days:** [Number] — *Renewal action required*
**Overdue Exceptions (Expired, not renewed):** [Number] — *Immediate remediation or re-approval required*

### 10.4 Escalation Process

*Document the escalation path for unresolved exceptions, disputes, or situations where the standard process is insufficient.*

**Standard Escalation Path:**

1. **SOC Analyst** identifies a potential exception requirement and documents the business justification
2. **SOC Analyst** submits exception request via [ticketing system / email to] Security Operations Manager
3. **Security Operations Manager** reviews request, conducts risk assessment, and either approves, rejects, or escalates
4. If exception impacts a critical system or requires CISO approval: **Security Operations Manager** forwards to CISO with recommendation
5. **CISO** reviews and approves or rejects; decision communicated to requester within [5 business days]
6. Approved exceptions are recorded in the Exception Register and this document updated at next review cycle

**Escalation for Unresolved Disputes:**
- Disputes regarding exception decisions may be escalated to the **Chief Risk Officer** for final determination
- Systemic issues with the EDR policy that generate recurring exceptions should be escalated to the **Information Security Steering Committee** for policy review

---

## 11. Compliance and Enforcement

### 11.1 Compliance Monitoring

*Describe how compliance with EDR policy requirements is monitored on an ongoing basis.*

[Organization Name] employs the following mechanisms to monitor ongoing compliance with the EDR policy requirements documented in this artifact:

| Monitoring Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| EDR agent coverage check | Daily (automated) | SOC / EDR platform | Coverage dashboard alert if below threshold |
| Agent version compliance check | Weekly | IT Operations | Non-compliant agent report |
| Threat intelligence currency check | Daily (automated) | SOC / EDR platform | Alert if TI updates fail |
| Alert SLA adherence review | Weekly | Security Operations Manager | SLA compliance report |
| Configuration drift detection | [Daily / Weekly] | Security Operations Manager | Configuration variance report |
| Exclusion list review | Annual (or upon change) | Security Operations Manager | Exclusion recertification record |
| Exception register review | Quarterly | Security Operations Manager | Exception status report |
| Integration health check (SIEM/SOAR) | Weekly | SOC / IT Operations | Integration status report |
| Full compliance assessment | Annual | Internal Audit | Audit report |

### 11.2 Non-Compliance Handling

*Define how non-compliance with EDR policy requirements is handled, including escalation and remediation timelines.*

Non-compliance with EDR policy requirements is handled as follows:

| Non-Compliance Type | Severity | Remediation Timeframe | Escalation |
|---|---|---|---|
| Endpoint without EDR agent (unscheduled) | High | Remediate within 5 business days | Security Operations Manager notified immediately |
| EDR agent disabled or tampered | Critical | Security incident raised immediately; restore within 24 hours | Security Operations Manager, CISO |
| Agent out-of-date (>2 versions behind) | Medium | Remediate within 10 business days | IT Operations escalation |
| Alert SLA breach (Critical) | High | Root cause analysis within 24 hours | Security Operations Manager review |
| Unauthorized configuration change | High | Revert within 4 hours; investigation initiated | Security Operations Manager, Change Management |
| Expired exception — no renewal | Medium | Remediate or renew within 5 business days | Security Operations Manager |
| SIEM integration failure | High | Restore within 4 hours | IT Operations, SOC |

**Repeated Non-Compliance:** Repeated non-compliance by the same team or for the same system will be escalated to the CISO and reported to the Risk Committee. Persistent non-compliance may result in formal disciplinary action in accordance with [Organization Name]'s Human Resources Policy.

### 11.3 Audit and Regulatory Examination Support

*Describe how this document and associated evidence are made available to auditors and regulators.*

This document, together with supporting evidence listed in Section 14 (Appendices), constitutes the primary evidence package for BNM regulatory examinations and internal audits relating to EDR controls under RMiT Clause 11.8.

**Evidence Package Contents for Regulatory Examination:**

| Evidence Item | Source | Retention Location | Classification |
|---|---|---|---|
| This EDR Configuration Evidence Document | Security Operations | [Document Management System] | Confidential |
| EDR Coverage Report (point-in-time) | EDR Console | [Document Management System] | Confidential |
| EDR Alert SLA Report | SIEM / SOAR | [Document Management System] | Confidential |
| Exception Register | Security Operations | [Document Management System] | Highly Confidential |
| Change Management Log (EDR-related) | ITSM System | [Document Management System] | Confidential |
| Internal Audit Report (most recent) | Internal Audit | [Document Management System] | Confidential |
| Vendor Support Contract | Procurement | [Document Management System] | Confidential |

**Examination Coordination:** All requests for EDR-related evidence from BNM examiners are coordinated through the **CISO** in conjunction with the **Compliance function**. Direct examiner access to EDR systems requires CISO authorization and is accompanied by a [Organization Name] representative at all times.

---

## 12. Review and Approval History

### 12.1 Version History

*Maintain a complete record of all revisions to this document. This table is critical for demonstrating document governance to auditors.*

| Version | Date | Author | Reviewed By | Changes Description |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | [Reviewer Name, Title] | Initial document creation |
| [1.1] | [Date] | [Author] | [Reviewer] | [e.g., Updated agent coverage statistics for Q[X] [Year]] |
| [2.0] | [Date] | [Author] | [Reviewer] | [e.g., Annual review — updated for EDR platform upgrade to version [X]; revised policy statements PS-04 and PS-07] |
| [N.N] | [Date] | [Author] | [Reviewer] | [Description of changes] |

### 12.2 Approval Sign-Off

*This table records formal approval of the current version of this document. All approvers must sign or provide electronic authorization before this document is considered approved.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Security Operations Manager (Document Owner) | [Name] | [Signature / Electronic Approval Reference] | [Date] |
| Chief Information Security Officer | [Name] | [Signature / Electronic Approval Reference] | [Date] |
| Head of IT Operations | [Name] | [Signature / Electronic Approval Reference] | [Date] |
| Head of Internal Audit (Review Acknowledgement) | [Name] | [Signature / Electronic Approval Reference] | [Date] |
| [Additional Approver, if required] | [Name] | [Signature / Electronic Approval Reference] | [Date] |

### 12.3 Scheduled Review

| Review Type | Due Date | Responsible | Status |
|---|---|---|---|
| Annual Policy Review | [Next Review Date] | Security Operations Manager | [Pending / In Progress / Complete] |
| Post-Incident Review | [If applicable] | Security Operations Manager | [N/A / Pending / Complete] |
| Regulatory Update Review | [Upon RMiT revision] | CISO, Compliance | [N/A / Pending] |
| Post-Platform Upgrade Review | [Upon EDR version upgrade] | Security Operations Manager | [N/A / Pending] |

---

## 13. References

### 13.1 Regulatory References

| Reference | Title | Clause / Section | Issuing Body | Date |
|---|---|---|---|---|
| BNM/RH/PD 028-116 | Risk Management in Technology (RMiT) | Clause 11.8 — Endpoint Security | Bank Negara Malaysia | [Effective Date of Current Version] |
| BNM/RH/PD 028-116 | Risk Management in Technology (RMiT) | Clause 11.1 — Technology Risk Management | Bank Negara Malaysia | [Effective Date] |
| BNM/RH/PD 028-116 | Risk Management in Technology (RMiT) | Clause 11.6 — Security Monitoring | Bank Negara Malaysia | [Effective Date] |
| BNM/RH/PD 028-116 | Risk Management in Technology (RMiT) | Clause 10.1 — Cyber Resilience | Bank Negara Malaysia | [Effective Date] |
| Personal Data Protection Act 2010 | PDPA — Security Principle | Section 9 | Parliament of Malaysia | 2010 |
| NACSA Cyber Security Framework | Detect Domain — Endpoint Monitoring | Domain 3 | NACSA | [Version / Date] |

### 13.2 Standards References

| Standard | Title | Relevant Section | Version |
|---|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A 8.7 (Protection against malware), 8.16 (Monitoring activities) | 2022 |
| NIST SP 800-61 Rev. 2 | Computer Security Incident Handling Guide | Section 3 (Handling an Incident) | Rev. 2 |
| NIST SP 800-83 Rev. 1 | Guide to Malware Incident Prevention and Handling | All | Rev. 1 |
| MITRE ATT&CK Framework | Adversarial Tactics, Techniques and Common Knowledge | All Tactics and Techniques | [Current Version] |
| CIS Controls | CIS Critical Security Controls | Control 10 (Malware Defences), Control 13 (Network Monitoring) | [Version] |
| PCI DSS | Payment Card Industry Data Security Standard | Requirement 5 (Protect all systems against malware) | [Version, if applicable] |

### 13.3 Internal Document References

| Document ID | Title | Owner | Location |
|---|---|---|---|
| [Doc ID] | Information Security Policy | CISO | [Document Management System] |
| [Doc ID] | Endpoint Security Standard | Security Operations Manager | [Document Management System] |
| [Doc ID] | Incident Response Policy and Procedures | Security Operations Manager | [Document Management System] |
| [Doc ID] | Change Management Policy | Head of IT Operations | [Document Management System] |
| [Doc ID] | Acceptable Use Policy | Head of Human Resources | [Document Management System] |
| [Doc ID] | Vendor Risk Management Policy | Head of IT / Procurement | [Document Management System] |
| [Doc ID] | Data Retention and Disposal Policy | Data Protection Officer | [Document Management System] |
| [Doc ID] | Digital Forensics and Evidence Handling Procedure | Security Operations Manager | [Document Management System] |
| [Doc ID] | SOC Operating Procedures | Security Operations Manager | [Document Management System] |

---

## 14. Appendices

### Appendix A: EDR Architecture Diagram

*Insert or attach the current EDR architecture diagram. The diagram should show agent-to-console communication paths, SIEM integration, proxy/relay infrastructure, and network segmentation. Diagrams should be version-controlled and dated.*

**[Insert EDR Architecture Diagram — Version [X.X], dated [Date]]**

> *This appendix contains a technical architecture diagram classified as Highly Confidential. Access is restricted to the Security Operations team, IT Operations, and authorized auditors. The diagram must not be reproduced or transmitted outside of secure channels.*

---

### Appendix B: EDR Agent Deployment Evidence

*This appendix provides point-in-time evidence of EDR agent deployment coverage, exported from the EDR management console at the time of this document's annual review.*

**Evidence Export Date:** [Date]
**Exported By:** [Name, Title]
**EDR Console Version:** [Version]

**[Insert or attach EDR console coverage report / screenshot with total agent count, status, version distribution, and last-seen timestamps]**

| Endpoint Hostname | IP Address | Operating System | Agent Version | Last Seen | Status | Policy Group |
|---|---|---|---|---|---|---|
| [HOSTNAME-001] | [IP] | [OS Version] | [Agent Version] | [Timestamp] | [Online / Offline] | [Policy Group] |
| [HOSTNAME-002] | [IP] | [OS Version] | [Agent Version] | [Timestamp] | [Online / Offline] | [Policy Group] |
| *[Full list attached as separate controlled spreadsheet — [Document ID]]* | | | | | | |

---

### Appendix C: EDR Configuration Baseline Export

*This appendix documents the baseline configuration settings as exported or captured from the EDR management console. This serves as the authoritative configuration state record for this review period.*

**Configuration Captured Date:** [Date]
**Captured By:** [Name, Title]
**EDR Console Version:** [Version]
**Method:** [Console export / Screenshot / API report]

**[Insert configuration export. Where the EDR platform provides a configuration export function (e.g., JSON/CSV export of policy settings), attach the export. Where screenshots are used, number and label each screenshot clearly.]**

**Configuration Screenshots / Exports:**

- **C-01:** General Agent Settings — Policy Group: Standard Workstation — *[Screenshot / Export dated [Date]]*
- **C-02:** Prevention Settings — Policy Group: Standard Workstation — *[Screenshot / Export dated [Date]]*
- **C-03:** Response Policy — Policy Group: Standard Workstation — *[Screenshot / Export dated [Date]]*
- **C-04:** General Agent Settings — Policy Group: Server — Critical — *[Screenshot / Export dated [Date]]*
- **C-05:** Prevention Settings — Policy Group: Server — Critical — *[Screenshot / Export dated [Date]]*
- **C-06:** Response Policy — Policy Group: Server — Critical — *[Screenshot / Export dated [Date]]*
- **C-07:** Custom Detection Rules List — *[Screenshot / Export dated [Date]]*
- **C-08:** SIEM Integration Configuration — *[Screenshot / Export dated [Date]]*
- **C-09:** Threat Intelligence Update Status — *[Screenshot / Export dated [Date]]*
- **C-10:** Tamper Protection Status — All Groups — *[Screenshot / Export dated [Date]]*

---

### Appendix D: Exception Register (Full)

*The full Exception Register is maintained as a separate controlled document referenced here. Access is restricted.*

**Document Reference:** [Document ID — Exception Register]
**Owner:** Security Operations Manager
**Last Updated:** [Date]
**Classification:** Highly Confidential

*[Attach or cross-reference the full Exception Register. The summary is provided in Section 10.3 of this document.]*

---

### Appendix E: Exclusion Register (Full)

*The full Exclusion Register with detailed technical justification for each configured exclusion is maintained as a separate controlled document. The summary is provided in Section 6.3.*

**Document Reference:** [Document ID — EDR Exclusion Register]
**Owner:** Security Operations Manager
**Last Updated:** [Date]
**Classification:** Highly Confidential

*[Attach or cross-reference the full Exclusion Register.]*

---

### Appendix F: EDR Alert Volume and SLA Compliance Report

*This appendix contains the most recent EDR alert volume and SLA compliance report, demonstrating operational performance against the defined response SLAs in Section 5.1 (PS-05).*

**Reporting Period:** [Month/Year] to [Month/Year]
**Report Generated:** [Date]
**Generated By:** [SIEM / SOAR Platform Name]

| Metric | Target | Actual | Compliance Status |
|---|---|---|---|
| Critical Alert — Triage within 15 minutes | 100% | [%] | [Compliant / Non-Compliant] |
| High Alert — Triage within 1 hour | 100% | [%] | [Compliant / Non-Compliant] |
| Medium Alert — Triage within 4 hours | 100% | [%] | [Compliant / Non-Compliant] |
| Total Alerts (Period) | N/A | [Number] | N/A |
| False Positive Rate | <[X]% | [%] | [Within Target / Exceeds Target] |
| Alerts Escalated to Incident | N/A | [Number] | N/A |

*[Attach full report from SIEM / SOAR platform]*

---

### Appendix G: Vendor SLA and Support Contract Summary

*This appendix summarises the key commercial and SLA terms of the EDR vendor agreement, demonstrating that [Organization Name] has contractual protections for platform availability and support.*

**Vendor:** [Vendor Name]
**Contract Reference:** [Contract ID / PO Number]
**Contract Period:** [Start Date] to [End Date]
**Commercial Owner:** [Name, Title]

| SLA Metric | Contracted Target | Measurement Period | Penalty / Remedy |
|---|---|---|---|
| Platform Availability (SaaS Console) | [e.g., 99.9%] | Monthly | [Credit / Remediation clause] |
| Threat Intelligence Update Frequency | [e.g., Every 15 minutes] | Continuous | [Credit / Remediation] |
| Critical Support Response | [e.g., 4 hours] | Per incident | [Credit / Escalation] |
| High Support Response | [e.g., 8 hours] | Per incident | [Credit] |
| Patch / Update Availability | [e.g., Within 48 hours of release] | Per release | [Remediation] |

*[Attach relevant excerpt from vendor contract or SLA schedule. Redact commercially sensitive pricing information.]*

---

### Appendix H: Annual Review Checklist

*This checklist is completed by the Security Operations Manager as part of the annual EDR configuration review process. Completion of this checklist, signed off by the CISO, constitutes evidence of the annual review.*

**Review Period:** [Year]
**Review Completed By:** [Name, Title]
**Review Date:** [Date]

| Review Item | Completed | Finding / Notes | Action Required |
|---|---|---|---|
| Verify EDR agent coverage against asset inventory | [Yes / No] | [Notes] | [Action / None] |
| Verify agent version currency across all endpoints | [Yes / No] | [Notes] | [Action / None] |
| Review and recertify all active exclusions | [Yes / No] | [Notes] | [Action / None] |
| Review and recertify all active exceptions | [Yes / No] | [Notes] | [Action / None] |
| Review custom detection rules for accuracy and relevance | [Yes / No] | [Notes] | [Action / None] |
| Review MITRE ATT&CK coverage mapping | [Yes / No] | [Notes] | [Action / None] |
| Verify SIEM/SOAR integration health | [Yes / No] | [Notes] | [Action / None] |
| Review alert SLA performance for the year | [Yes / No] | [Notes] | [Action / None] |
| Review threat hunting programme outputs | [Yes / No] | [Notes] | [Action / None] |
| Confirm data retention settings meet BNM requirements | [Yes / No] | [Notes] | [Action / None] |
| Review vendor SLA performance | [Yes / No] | [Notes] | [Action / None] |
| Confirm tamper protection is active on all agents | [Yes / No] | [Notes] | [Action / None] |
| Review policy group assignments for new/changed endpoint types | [Yes / No] | [Notes] | [Action / None] |
| Review and update RACI and role descriptions | [Yes / No] | [Notes] | [Action / None] |
| Update document metadata and version history | [Yes / No] | [Notes] | [Action / None] |
| Submit for approval and re-sign off | [Yes / No] | [Notes] | [Action / None] |

**Annual Review Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Security Operations Manager | [Name] | [Signature] | [Date] |
| CISO | [Name] | [Signature] | [Date] |

---

*End of Document*

---

| Field | Value |
|---|---|
| **Document ID** | [Document ID] |
| **Document Title** | EDR Configuration Evidence |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations Manager, [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **RMiT Reference** | Clause 11.8 |

*This document is subject to the confidentiality notice stated on page 1. If found, please return to [Organization Name] Information Security, [Contact Details].*