# Data Loss Prevention (DLP) Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |

---

> **Regulatory Alignment:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 11.10
> **Related Frameworks:** Personal Data Protection Act 2010 (PDPA), NACSA Cybersecurity Policy, ISO/IEC 27001:2022

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Data Classification Framework](#5-data-classification-framework)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Policy Statements and Requirements](#7-policy-statements-and-requirements)
8. [DLP Controls by Data Classification](#8-dlp-controls-by-data-classification)
9. [DLP Technology and Tooling Requirements](#9-dlp-technology-and-tooling-requirements)
10. [Monitoring, Detection, and Alerting](#10-monitoring-detection-and-alerting)
11. [Incident Response for Data Loss Events](#11-incident-response-for-data-loss-events)
12. [Exceptions and Escalation Process](#12-exceptions-and-escalation-process)
13. [Compliance and Enforcement](#13-compliance-and-enforcement)
14. [Training and Awareness](#14-training-and-awareness)
15. [Review and Approval History](#15-review-and-approval-history)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*Provide a concise statement of why this policy exists, what problem it addresses, and its intended outcome. Reference the regulatory obligation that necessitates this document.*

This Data Loss Prevention (DLP) Policy establishes the requirements, controls, and governance framework for [Organization Name] to prevent unauthorised disclosure, exfiltration, or loss of sensitive data assets. The policy ensures that data handling practices across all channels — including endpoints, networks, cloud platforms, email, and removable media — are aligned with the organisation's data classification scheme and comply with applicable regulatory obligations.

This policy is issued in fulfilment of the requirements under **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, Clause 11.10**, which mandates that financial institutions implement controls to prevent the unauthorised transmission of sensitive data. It further supports compliance with the **Personal Data Protection Act 2010 (PDPA)** and national cybersecurity standards prescribed by **NACSA**.

The objectives of this policy are to:

- Define the organisation's approach to identifying, monitoring, and protecting sensitive data in motion, at rest, and in use.
- Establish mandatory DLP controls commensurate with data classification levels.
- Assign clear accountability for DLP implementation, monitoring, and governance.
- Provide a structured process for managing DLP policy violations, exceptions, and incidents.
- Demonstrate to regulators, auditors, and stakeholders that [Organization Name] exercises appropriate stewardship over sensitive financial and personal data.

---

## 2. Scope

*Define the boundaries of this policy — which systems, people, data types, and locations are covered. Be explicit about what is included and excluded.*

### 2.1 In-Scope

This policy applies to:

**Personnel:**
- All permanent employees, contract staff, secondees, and temporary workers of [Organization Name].
- Third-party service providers, vendors, consultants, and outsourced personnel who access, process, transmit, or store [Organization Name] data.
- Board members and senior management insofar as they handle organisational data.

**Data:**
- All data owned, processed, or custodied by [Organization Name], regardless of format (structured, unstructured, physical, or digital).
- Data classified as **Restricted**, **Confidential**, or **Internal** under [Organization Name]'s Data Classification Policy.
- Customer personal data as defined under the PDPA 2010.
- Financial data, transactional records, and regulatory reporting data.
- Intellectual property, proprietary algorithms, and strategic business information.

**Systems and Channels:**
- Endpoint devices (laptops, desktops, mobile devices) whether corporate-owned or BYOD.
- Network infrastructure including internal LAN, WAN, internet-facing systems, and VPN connections.
- Email systems (inbound and outbound), instant messaging platforms, and collaboration tools.
- Cloud platforms, SaaS applications, and third-party portals used in business operations.
- Removable media including USB drives, optical media, and external hard drives.
- Printing, scanning, and physical document handling processes.

**Locations:**
- All [Organization Name] premises and branch offices.
- Remote working environments including home offices and public locations.
- Co-location facilities and data centres hosting [Organization Name] systems.

### 2.2 Out of Scope

- Publicly available data with no confidentiality classification.
- Data that has been formally declassified and approved for public release through the appropriate process.
- [Specify any other exclusions relevant to the organisation]

---

## 3. Regulatory and Policy Context

*Summarise the regulatory landscape and internal policy hierarchy that this document sits within. This provides auditors with traceability.*

### 3.1 Regulatory Requirements

| Regulation / Standard | Relevant Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 11.10 | Implementation of controls to prevent unauthorised transmission of sensitive data |
| BNM RMiT Policy Document | Clause 11.1 – 11.9 | Broader data management and cybersecurity requirements |
| Personal Data Protection Act 2010 (PDPA) | Section 5 – General Principle | Lawful and secure processing of personal data |
| Personal Data Protection Act 2010 (PDPA) | Section 9 – Security Principle | Implementation of practical steps to protect personal data against loss, misuse, or disclosure |
| NACSA Cybersecurity Policy | [Relevant Section] | National cybersecurity baseline controls |
| ISO/IEC 27001:2022 | Annex A, Control 8.12 | Data leakage prevention |
| ISO/IEC 27001:2022 | Annex A, Control 5.12 | Classification of information |
| [Other applicable regulation] | [Clause] | [Summary] |

### 3.2 Internal Policy Hierarchy

*List the parent policies and related internal documents that this policy sits beneath or relates to.*

This policy is issued under the authority of the following [Organization Name] governance documents:

- **Information Security Policy** — Parent policy establishing the overall information security governance framework.
- **Data Classification Policy** — Defines classification tiers and handling requirements that DLP controls enforce.
- **Acceptable Use Policy** — Governs permissible use of organisational systems and data.
- **Incident Management Policy** — Governs the response to DLP-related security incidents.
- **Third-Party Risk Management Policy** — Governs DLP obligations imposed on vendors and service providers.
- **[Other relevant internal policy]**

---

## 4. Definitions and Abbreviations

*Define all technical terms, acronyms, and regulatory concepts used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Data Loss Prevention (DLP)** | A set of tools, processes, and policies designed to detect and prevent the unauthorised use, transmission, or exfiltration of sensitive data. |
| **Data in Motion** | Data actively being transmitted across a network, including email, web traffic, file transfers, and API calls. |
| **Data at Rest** | Data stored on any medium including databases, file servers, endpoints, cloud storage, and backup media. |
| **Data in Use** | Data being actively processed or accessed by an application or user, including data on screen, in memory, or being copied. |
| **Sensitive Data** | Any data classified as Restricted or Confidential under [Organization Name]'s Data Classification Policy, or personal data as defined by the PDPA 2010. |
| **Exfiltration** | The unauthorised transfer of data from within the organisation's control boundary to an external or unauthorised location. |
| **Data Owner** | The business unit head or designated individual accountable for a specific dataset's classification, access, and protection. |
| **Data Custodian** | The IT or operational team responsible for the technical controls protecting a dataset. |
| **False Positive** | A DLP alert triggered for a legitimate, authorised data transfer that was incorrectly identified as a policy violation. |
| **Policy Exception** | A formally approved, time-limited deviation from a DLP policy control. |
| **Endpoint DLP** | DLP controls deployed at the device level to monitor and control data activity on workstations and laptops. |
| **Network DLP** | DLP controls deployed at network egress points to inspect and block unauthorised data transmissions. |
| **Cloud DLP** | DLP controls applied to cloud storage, SaaS applications, and cloud-based communication platforms. |
| **Personal Data** | Any information that directly or indirectly identifies a natural person, as defined under the PDPA 2010. |
| **[Other term]** | [Definition] |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| DLP | Data Loss Prevention |
| DPO | Data Protection Officer |
| CISO | Chief Information Security Officer |
| SOC | Security Operations Centre |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| PII | Personally Identifiable Information |
| PCI-DSS | Payment Card Industry Data Security Standard |
| BYOD | Bring Your Own Device |
| CASB | Cloud Access Security Broker |
| SIEM | Security Information and Event Management |
| MFA | Multi-Factor Authentication |
| API | Application Programming Interface |
| SaaS | Software as a Service |

---

## 5. Data Classification Framework

*Summarise the data classification tiers relevant to DLP controls. This section should be consistent with the organisation's standalone Data Classification Policy.*

### 5.1 Classification Tiers

*Describe each classification level and the types of data that typically fall within it. DLP rules must be mapped to these tiers.*

| Classification Level | Label | Description | Examples |
|---|---|---|---|
| **Tier 1 – Restricted** | RESTRICTED | Highest sensitivity. Unauthorised disclosure would cause severe harm, regulatory penalty, or reputational damage. | Customer financial data, credentials, cryptographic keys, BNM regulatory filings, board-level strategic decisions |
| **Tier 2 – Confidential** | CONFIDENTIAL | Sensitive business or personal data. Disclosure limited to authorised personnel with a need-to-know. | Employee personal data, internal audit reports, vendor contracts, system architecture documents |
| **Tier 3 – Internal** | INTERNAL | Not intended for public release. General operational information for internal use only. | Internal memos, policies, meeting minutes, non-sensitive process documentation |
| **Tier 4 – Public** | PUBLIC | Approved for public release. No confidentiality controls required, but integrity must be maintained. | Marketing materials, published annual reports, regulatory disclosures |

### 5.2 DLP Coverage Requirement by Classification

| Classification | DLP Coverage Required | Justification |
|---|---|---|
| Restricted | Mandatory — full coverage across all channels | Regulatory requirement; highest risk of harm |
| Confidential | Mandatory — coverage across email, cloud, and endpoint | Business sensitivity and PDPA obligations |
| Internal | Recommended — monitoring without blocking | Baseline visibility and insider threat detection |
| Public | Optional — integrity monitoring only | Low confidentiality risk |

---

## 6. Roles and Responsibilities

*Define who is accountable, responsible, consulted, and informed for DLP governance and operations. Use the RACI model.*

### 6.1 RACI Matrix

*The RACI model assigns: **R** = Responsible (does the work), **A** = Accountable (owns the outcome), **C** = Consulted (input required), **I** = Informed (kept up to date).*

| Activity | DPO | CISO | IT Security / SOC | IT Operations | Business Unit Heads | Legal & Compliance | Internal Audit | HR |
|---|---|---|---|---|---|---|---|---|
| DLP policy ownership and annual review | **A** | C | C | I | C | C | I | I |
| DLP policy approval | C | C | I | I | I | C | I | I |
| DLP technology strategy and roadmap | C | **A** | R | C | I | I | I | I |
| DLP tool deployment and configuration | I | A | **R** | R | I | I | I | I |
| DLP rule definition and tuning | A | C | **R** | C | C | C | I | I |
| DLP alert monitoring (real-time) | I | I | **R/A** | I | I | I | I | I |
| DLP incident investigation | C | A | **R** | C | C | C | I | I |
| DLP incident escalation to regulator | **A/R** | C | C | I | I | R | I | I |
| Policy exception review and approval | **A** | C | C | I | R | C | I | I |
| Employee DLP awareness training | C | C | I | I | C | I | I | **R/A** |
| Third-party DLP compliance assurance | A | C | C | I | C | **R** | I | I |
| Quarterly DLP trend reporting | C | A | **R** | I | I | C | C | I |
| Annual DLP effectiveness review | C | A | R | C | I | C | **R** | I |
| Disciplinary action for violations | I | I | I | I | A | C | I | **R** |

### 6.2 Role Descriptions

*Provide a narrative description of each key role's DLP obligations.*

**Data Protection Officer (DPO)**
- Serves as the primary owner of this policy and is accountable for its currency, compliance, and effectiveness.
- Oversees DLP governance, approves policy exceptions, and acts as the escalation point for high-severity data loss events.
- Liaises with BNM and other regulators on DLP-related compliance matters.
- Reviews quarterly DLP trend reports and directs remediation of systemic issues.

**Chief Information Security Officer (CISO)**
- Accountable for the overall DLP technology strategy and its alignment with the organisation's information security programme.
- Approves significant changes to DLP tool configurations, rule sets, and coverage scope.
- Reports DLP programme performance to the Board Risk Committee and senior management.

**IT Security / Security Operations Centre (SOC)**
- Operationally responsible for deploying, configuring, monitoring, and tuning DLP tools.
- Investigates DLP alerts, triages incidents, and escalates confirmed data loss events in accordance with the Incident Management Policy.
- Maintains DLP rule libraries and ensures detection rules remain current with emerging data loss vectors.
- Produces quarterly DLP trend reports for DPO and CISO review.

**IT Operations**
- Supports deployment and maintenance of DLP agents on endpoint devices and network infrastructure.
- Coordinates with IT Security on changes to network topology or cloud environments that affect DLP coverage.

**Business Unit Heads**
- Ensure staff within their units comply with this policy and complete mandatory DLP awareness training.
- Serve as the primary requestor for policy exceptions applicable to their business processes.
- Accountable for data owned by their business unit and for communicating classification obligations to their teams.

**Legal and Compliance**
- Ensures DLP policy requirements align with applicable legal obligations, including PDPA 2010 and contractual commitments.
- Advises on regulatory notification obligations following data loss incidents.
- Reviews exception requests with legal or contractual implications.

**Internal Audit**
- Conducts periodic independent assessments of DLP policy compliance and control effectiveness.
- Reports findings to the Audit Committee and tracks remediation of identified gaps.

**Human Resources**
- Administers disciplinary procedures for confirmed DLP policy violations in accordance with the organisation's disciplinary framework.
- Ensures DLP obligations are embedded in employee onboarding and offboarding processes.

---

## 7. Policy Statements and Requirements

*This is the core normative section of the policy. Each statement should be clear, measurable, and auditable.*

### 7.1 General Principles

*State the overarching principles that govern DLP at the organisation.*

[Organization Name] is committed to safeguarding the data entrusted to it by customers, employees, regulators, and business partners. The following principles govern the organisation's approach to data loss prevention:

1. **Data Protection by Default:** Sensitive data must be protected at all times — in motion, at rest, and in use — without requiring explicit opt-in from data handlers.
2. **Proportionality:** DLP controls shall be proportionate to the classification level and risk profile of the data being protected.
3. **Least Privilege:** Access to sensitive data shall be restricted to individuals with a documented business need.
4. **Visibility and Accountability:** All data movement across monitored channels shall be logged, and accountability for data handling shall be clearly assigned.
5. **Continuous Improvement:** DLP controls shall be regularly reviewed and updated in response to emerging threats, regulatory changes, and audit findings.

### 7.2 Mandatory DLP Requirements

*List specific, enforceable requirements. Use SHALL for mandatory requirements, SHOULD for recommended, and MAY for permitted.*

#### 7.2.1 Coverage Requirements

- **[Req-DLP-001]** [Organization Name] **SHALL** deploy DLP controls across all data channels handling Restricted or Confidential data, including: endpoint devices, email gateways, web proxies, cloud platforms, and file transfer mechanisms.
- **[Req-DLP-002]** DLP coverage **SHALL** extend to all corporate-managed endpoint devices, including laptops, desktops, and mobile devices issued to employees or contractors.
- **[Req-DLP-003]** DLP controls **SHALL** be applied to all internet-egress points, including web gateways, email relays, and cloud access points.
- **[Req-DLP-004]** BYOD devices used to access [Organization Name] data **SHALL** be enrolled in Mobile Device Management (MDM) and subject to applicable DLP controls prior to being granted access.
- **[Req-DLP-005]** Cloud-based DLP controls (CASB) **SHALL** be implemented for all cloud platforms approved for Restricted or Confidential data storage or processing.

#### 7.2.2 Detection and Prevention Requirements

- **[Req-DLP-006]** DLP rules **SHALL** be configured to detect and, for Restricted data, block the transmission of sensitive data based on content inspection, including: financial account numbers, national identification numbers (NRIC/Passport), customer personal data fields, and cryptographic credentials.
- **[Req-DLP-007]** DLP tools **SHALL** support detection methods including: keyword matching, regular expressions, data fingerprinting, machine learning-based classification, and file metadata inspection.
- **[Req-DLP-008]** Transfers of Restricted data to personal email accounts, consumer cloud storage, or unauthorised external recipients **SHALL** be automatically blocked.
- **[Req-DLP-009]** Transfers of Restricted data to removable media **SHALL** be blocked by default. Exceptions must be approved through the process defined in Section 12.
- **[Req-DLP-010]** Printing of Restricted data **SHALL** be logged and, where technically feasible, restricted to authorised printers with access controls.

#### 7.2.3 Logging and Retention Requirements

- **[Req-DLP-011]** All DLP events — including alerts, blocks, and user overrides — **SHALL** be logged with sufficient detail to support forensic investigation. Log fields **SHALL** include: timestamp, user identity, device identifier, data type detected, channel, action taken (blocked/allowed/alerted), and policy rule triggered.
- **[Req-DLP-012]** DLP logs **SHALL** be retained for a minimum of **[X years]** in accordance with the organisation's Log Management Policy and BNM record retention requirements.
- **[Req-DLP-013]** DLP logs **SHALL** be forwarded to the organisation's SIEM platform for correlation, alerting, and audit purposes.
- **[Req-DLP-014]** DLP logs **SHALL NOT** be accessible for modification or deletion by the personnel whose activities they record.

#### 7.2.4 Configuration and Change Management Requirements

- **[Req-DLP-015]** All changes to DLP rules, policies, or tool configurations **SHALL** be subject to the organisation's Change Management process and require approval by the CISO or delegated authority.
- **[Req-DLP-016]** DLP rules **SHALL** be reviewed and updated at minimum on a **quarterly** basis or following any material change to the data landscape, threat environment, or regulatory requirements.
- **[Req-DLP-017]** A baseline DLP ruleset **SHALL** be documented and maintained as a configuration baseline. Deviations from baseline **SHALL** be formally tracked and approved.

#### 7.2.5 Encryption Requirements

- **[Req-DLP-018]** Restricted data transmitted over public or untrusted networks **SHALL** be encrypted using [Organization Name]-approved cryptographic standards (refer to the Cryptography Policy).
- **[Req-DLP-019]** Removable media used for the authorised transfer of Confidential or Restricted data **SHALL** be encrypted prior to use.

### 7.3 Prohibited Actions

*Explicitly state what personnel must never do. Prohibited actions should be unambiguous.*

The following actions are **strictly prohibited** for all personnel within scope:

| # | Prohibited Action |
|---|---|
| 1 | Transmitting Restricted or Confidential data to personal email accounts (e.g., Gmail, Yahoo, Hotmail) |
| 2 | Uploading Restricted or Confidential data to unauthorised cloud storage services (e.g., personal Dropbox, Google Drive) |
| 3 | Copying Restricted data to unencrypted removable media |
| 4 | Deliberately circumventing, disabling, or tampering with DLP controls |
| 5 | Sharing credentials or authentication tokens that would allow others to bypass DLP monitoring |
| 6 | Printing Restricted data on printers located in unsecured public or shared areas |
| 7 | Transmitting Restricted data via unencrypted channels (e.g., plain HTTP, unencrypted FTP, SMS) |
| 8 | Storing Restricted or Confidential data on non-approved personal devices |
| 9 | Using screen capture, photography, or recording to capture Restricted data displayed on authorised systems |
| 10 | Providing DLP-monitored credentials to third parties without prior authorisation |

---

## 8. DLP Controls by Data Classification

*Provide a comprehensive mapping of required DLP controls to each data classification level. This section serves as the operational reference for DLP configuration.*

### 8.1 Control Matrix

*This matrix defines the minimum required DLP controls for each classification level and channel. Controls marked ✓ are mandatory; controls marked ○ are recommended; controls marked — are not required.*

| DLP Control | Restricted | Confidential | Internal | Public |
|---|---|---|---|---|
| **Endpoint Controls** | | | | |
| Block copy to removable media | ✓ | ✓ | ○ | — |
| Encrypt removable media transfers (with approval) | ✓ | ✓ | — | — |
| Block screen capture of sensitive data | ✓ | ○ | — | — |
| Prevent print screen / clipboard export | ✓ | ○ | — | — |
| Block access from unmanaged devices | ✓ | ✓ | ○ | — |
| **Email Controls** | | | | |
| Block outbound to personal email | ✓ | ✓ | ○ | — |
| Encrypt outbound email containing sensitive data | ✓ | ✓ | — | — |
| Alert on external forwarding rules | ✓ | ✓ | ○ | — |
| Block bulk export of customer data records | ✓ | ✓ | — | — |
| **Web / Proxy Controls** | | | | |
| Block upload to unauthorised cloud storage | ✓ | ✓ | ○ | — |
| Inspect HTTPS traffic (SSL inspection) | ✓ | ✓ | ○ | — |
| Block submission via web forms to unapproved sites | ✓ | ✓ | — | — |
| **Cloud / CASB Controls** | | | | |
| Enforce data residency rules | ✓ | ✓ | ○ | — |
| Restrict sharing permissions (internal only) | ✓ | ✓ | ○ | — |
| Block download to unmanaged devices | ✓ | ✓ | ○ | — |
| Scan cloud storage for misclassified data | ✓ | ✓ | ○ | — |
| **Network Controls** | | | | |
| Network-level content inspection at egress | ✓ | ✓ | ○ | — |
| Block transfer via unapproved file transfer protocols | ✓ | ✓ | — | — |
| **Physical Controls** | | | | |
| Restrict printing to authorised secure printers | ✓ | ✓ | — | — |
| Cross-cut shredding of physical documents | ✓ | ✓ | ✓ | — |

### 8.2 High-Risk Data Types

*Define specific data patterns that DLP tools must be configured to detect. These patterns should be loaded as detection rules in the DLP platform.*

| Data Type | Classification | Detection Method | Example Pattern |
|---|---|---|---|
| NRIC / MyKad Number | Restricted | Regex | `\d{6}-\d{2}-\d{4}` |
| Passport Number | Restricted | Regex | `[A-Z]{1,2}[0-9]{6,9}` |
| Bank Account Number | Restricted | Regex + Luhn | [Format per institution] |
| Credit / Debit Card Number | Restricted | Luhn algorithm | 16-digit PAN format |
| SWIFT / BIC Code | Restricted | Keyword + Regex | 8–11 character SWIFT format |
| Customer Financial Data | Restricted | Data fingerprinting | Structured data matching |
| Employee Payroll Data | Confidential | Keyword + data pattern | [Payroll field patterns] |
| BNM Regulatory Reports | Restricted | Document fingerprinting | [Report templates] |
| Encryption Keys / Certificates | Restricted | Pattern matching | PEM headers, key material |
| Source Code (Proprietary) | Confidential | File type + fingerprinting | [Codebase fingerprints] |
| [Other high-risk data type] | [Classification] | [Method] | [Pattern] |

---

## 9. DLP Technology and Tooling Requirements

*Specify requirements for the DLP technology stack, including vendor-agnostic capability requirements and operational standards.*

### 9.1 DLP Platform Capability Requirements

*Specify the minimum capabilities that any DLP platform deployed by [Organization Name] must provide.*

The organisation's DLP platform(s) **SHALL** provide, at minimum, the following capabilities:

- **Content Inspection:** Deep content inspection of files, emails, and data streams, supporting structured and unstructured data formats.
- **Policy Engine:** Rule-based and machine learning-based policy enforcement with configurable actions (block, quarantine, alert, encrypt, log).
- **Channel Coverage:** Coverage across endpoint (DLP agent), email gateway, web proxy, and cloud (CASB integration).
- **Optical Character Recognition (OCR):** Detection of sensitive data within images, scanned documents, and screenshots.
- **Integration:** API integration with the organisation's SIEM, ticketing system, and identity management platform.
- **Reporting:** Dashboards and scheduled reports supporting operational monitoring and executive-level trend analysis.
- **Audit Logging:** Tamper-evident audit logs of all policy decisions, administrative changes, and alert handling actions.
- **Multi-tenancy Support:** [If applicable — specify any multi-environment or group entity requirements]

### 9.2 Approved DLP Tools

*List the approved DLP tools deployed by the organisation. This section should be maintained and updated when tooling changes.*

| Tool / Platform | Function | Coverage Scope | Version / Licence | Review Date |
|---|---|---|---|---|
| [DLP Tool Name] | Endpoint DLP | All corporate endpoints | [Version] | [Date] |
| [DLP Tool Name] | Email DLP | Inbound and outbound email | [Version] | [Date] |
| [DLP Tool Name] | Network DLP | Internet egress | [Version] | [Date] |
| [CASB Tool Name] | Cloud DLP | Approved SaaS and IaaS | [Version] | [Date] |
| [Other tool] | [Function] | [Scope] | [Version] | [Date] |

### 9.3 Tool Configuration Standards

- DLP tools **SHALL** be configured in accordance with the DLP Configuration Baseline Document (refer to **Appendix B**).
- DLP agents on endpoint devices **SHALL** remain active and tamper-protected at all times. Disabling or uninstalling agents requires change management approval.
- DLP tool configurations **SHALL** be version-controlled and backed up in accordance with the organisation's Change Management and Configuration Management policies.
- Credentials and administrative access to DLP management consoles **SHALL** be protected by MFA and restricted to authorised personnel only.

---

## 10. Monitoring, Detection, and Alerting

*Define how DLP monitoring is operationalised, including alert severity levels, response timeframes, and escalation thresholds.*

### 10.1 Monitoring Approach

*Describe the operational monitoring model — who monitors, when, and at what frequency.*

[Organization Name] operates a **continuous monitoring model** for DLP events, integrated into the Security Operations Centre (SOC) workflow. All DLP alerts are ingested into the SIEM and triaged by SOC analysts in accordance with severity thresholds defined in Section 10.2.

The SOC monitors DLP events:
- **Real-time:** High and Critical severity alerts trigger immediate investigation.
- **Daily:** Medium severity alerts are reviewed in the daily SOC briefing.
- **Weekly:** Low severity alerts and informational events are reviewed in weekly trend analysis.
- **Quarterly:** Aggregate DLP metrics are compiled and reported to the DPO and CISO for trend review.

### 10.2 Alert Severity Classification

*Define severity levels to enable consistent prioritisation and response.*

| Severity | Trigger Criteria | Response Timeframe | Escalation |
|---|---|---|---|
| **Critical** | Confirmed or probable exfiltration of Restricted data; mass data export; exfiltration to known malicious destinations | Immediate (< 15 minutes) | SOC Lead → CISO → DPO within 1 hour |
| **High** | Blocked transmission of Restricted data; suspected insider threat activity; DLP agent tampering detected | < 1 hour | SOC Analyst → SOC Lead within 2 hours |
| **Medium** | Blocked transmission of Confidential data; repeated policy violations by the same user; unusual transfer volumes | < 4 hours | SOC Analyst; escalate to SOC Lead if pattern persists |
| **Low** | Policy alerts on Internal data; isolated first-time violations; benign false positives pending review | < 24 hours | SOC Analyst; no escalation unless pattern identified |
| **Informational** | Audit log entries; configuration changes; policy exception usage | Reviewed weekly | No escalation unless anomalous |

### 10.3 False Positive Management

*Define the process for identifying and managing false positives to maintain DLP effectiveness without disrupting legitimate operations.*

- SOC analysts **SHALL** document all false positive determinations in the DLP case management system, including the rule triggered, the data involved, and the justification for false positive classification.
- False positives recurring with a frequency exceeding **[X occurrences per week]** for a given rule **SHALL** be escalated to the DLP Operations team for rule refinement.
- Rule changes made in response to false positive trends **SHALL** be subject to change management approval.
- A false positive rate exceeding **[X%]** for any critical or high rule **SHALL** trigger an urgent rule review within **[X business days]**.

### 10.4 Quarterly Trend Review

*Define the scope and outputs of the mandatory quarterly trend review.*

In accordance with the review frequency for this policy, the SOC **SHALL** produce a **Quarterly DLP Trend Report** for review by the DPO and CISO. The report **SHALL** include, at minimum:

- Total DLP events by severity, channel, and data type.
- Top policy violations by rule, user group, and business unit.
- False positive rates by rule.
- Summary of confirmed data loss incidents and outcomes.
- Status of open exception approvals.
- Recommendations for rule additions, retirements, or tuning.
- Trend comparison against the prior quarter.

A template for the Quarterly DLP Trend Report is provided in **Appendix D**.

---

## 11. Incident Response for Data Loss Events

*Define how confirmed or suspected data loss events are handled, escalated, and reported.*

### 11.1 DLP Incident Classification

*Define what constitutes a DLP incident (as distinct from a policy alert) and the classification of incidents by severity.*

A **DLP Incident** is defined as a confirmed or highly probable unauthorised disclosure, exfiltration, or loss of sensitive data, where a DLP alert has been investigated and determined to represent a genuine data loss event rather than a false positive or authorised transfer.

| Incident Class | Description | Regulatory Notification Trigger |
|---|---|---|
| **Class 1 – Critical** | Confirmed exfiltration of Restricted customer data; potential compromise of large volumes of personal data | Likely — notify DPO immediately for BNM/PDPA assessment |
| **Class 2 – Major** | Confirmed exfiltration of Confidential data; significant insider threat activity | Possible — DPO assessment required |
| **Class 3 – Moderate** | Limited disclosure of Confidential data; accidental transmission to wrong recipient | Unlikely — internal investigation required |
| **Class 4 – Minor** | Policy violation without confirmed data loss; blocked events with no confirmed exfiltration | Not required — remediation and awareness |

### 11.2 Incident Response Steps

*Provide a high-level, sequential response process for DLP incidents.*

1. **Detection** — DLP tool generates alert; SIEM correlates and assigns severity.
2. **Triage** — SOC analyst reviews alert, confirms whether it represents genuine data loss or false positive.
3. **Containment** — If genuine, SOC initiates containment: disable user account/session, isolate device, block egress channel as applicable.
4. **Notification** — Escalate to SOC Lead, CISO, and DPO per severity thresholds in Section 10.2.
5. **Investigation** — Conduct forensic investigation to determine: data involved, quantity, recipient, method, and intent.
6. **Regulatory Assessment** — DPO and Legal assess notification obligations to BNM, PDPA Commissioner, and affected individuals.
7. **Remediation** — Address root cause: technical controls, user remediation, process changes.
8. **Post-Incident Review** — Document lessons learned; update DLP rules and policies as required.
9. **Closure** — Close incident in case management system with full documentation.

### 11.3 Regulatory Notification Obligations

*Summarise the circumstances and timelines under which incidents must be reported to regulators.*

| Regulator | Trigger | Notification Timeline | Reporting Contact |
|---|---|---|---|
| Bank Negara Malaysia (BNM) | Material cybersecurity incident affecting customer data or critical systems | As per BNM RMiT requirements — **within [X hours]** of confirmation | [BNM Reporting Channel] |
| PDPA Commissioner | Breach involving personal data that is likely to cause harm | [Per PDPA notification requirements] | [PDPA Commissioner Contact] |
| NACSA | Significant national cybersecurity incidents | [Per NACSA requirements] | [NACSA Contact] |
| Board / Senior Management | Class 1 and Class 2 incidents | Within **[X hours]** of confirmation | [Internal escalation path] |
| Affected Individuals | Where personal data breach likely to cause harm | [Per regulatory guidance] | Via approved communication channel |

---

## 12. Exceptions and Escalation Process

*Define a structured, auditable process for granting temporary exceptions to DLP policy controls.*

### 12.1 Grounds for Exception

*Specify the legitimate business reasons for which DLP policy exceptions may be considered.*

DLP policy exceptions may be considered where a DLP control prevents a **legitimate and necessary business activity** and no alternative compliant method exists. Examples include:

- Secure transfer of Restricted data to a regulatory body via an approved but DLP-flagged channel.
- Authorised transfer of large volumes of customer data to an approved outsourcing partner.
- Business continuity scenarios requiring temporary use of a normally blocked channel.
- Technology migration activities requiring bulk data movement under controlled conditions.

Exceptions are **not** granted to accommodate user convenience or to bypass controls for activities that have compliant alternatives.

### 12.2 Exception Request and Approval Process

*Provide a step-by-step process for requesting, reviewing, and approving exceptions.*

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Business unit submits DLP Exception Request Form (Appendix C) | Business Unit Head | As required |
| 2 | Initial review: confirm business justification and risk assessment | IT Security | 2 business days |
| 3 | DPO review: assess impact on data protection obligations | DPO | 2 business days |
| 4 | Risk acceptance: CISO approves or rejects with rationale | CISO | 1 business day |
| 5 | Approved exception logged in the Exception Register | IT Security | Same day as approval |
| 6 | Compensating controls implemented (where required) | IT Security / IT Ops | Prior to exception activation |
| 7 | Exception activated with defined expiry date | IT Security | Per approved timeline |
| 8 | Exception reviewed and renewed or expired | IT Security / DPO | On expiry date |

### 12.3 Exception Conditions

All approved DLP exceptions **SHALL** be:

- **Time-limited:** Exceptions must have a defined expiry date, not to exceed **[X months]** per approval cycle. Renewals require fresh approval.
- **Scoped:** Exceptions apply only to the specific data type, channel, user, and business activity described in the request.
- **Logged:** All approved exceptions must be recorded in the DLP Exception Register maintained by IT Security.
- **Monitored:** Enhanced monitoring **SHALL** be applied to activities covered by an active exception.
- **Reviewed:** All active exceptions are reviewed as part of the quarterly DLP trend review process.

### 12.4 Exception Register

*Maintain a current register of all active DLP policy exceptions.*

| Exception ID | Requestor | Business Unit | Data Type / Channel | Justification | Approver | Approval Date | Expiry Date | Status | Compensating Controls |
|---|---|---|---|---|---|---|---|---|---|
| EXC-DLP-[YYYY-NNN] | [Name] | [BU] | [Data / Channel] | [Summary] | [CISO Name] | [Date] | [Date] | Active / Expired | [Description] |

### 12.5 Escalation Path for Urgent Exceptions

In scenarios where a DLP control is causing an urgent business disruption that cannot await standard processing:

1. Business Unit Head contacts CISO or DPO directly by phone.
2. Verbal approval may be granted for a maximum of **[X hours]** pending formal documentation.
3. DLP Exception Request Form must be submitted within **[X hours]** of verbal approval.
4. If formal approval is not obtained within the defined period, the exception is automatically revoked.

---

## 13. Compliance and Enforcement

*Define how compliance with this policy is measured, enforced, and what consequences apply to violations.*

### 13.1 Compliance Monitoring

[Organization Name] monitors compliance with this policy through the following mechanisms:

| Mechanism | Frequency | Conducted By | Output |
|---|---|---|---|
| Automated DLP alert monitoring | Continuous (real-time) | SOC | Alert queue; incident tickets |
| DLP configuration compliance review | Quarterly | IT Security | Configuration audit report |
| DLP policy compliance audit | Annual | Internal Audit | Audit findings report |
| Penetration testing (DLP controls) | Annual | [Internal / External] | Pen test report |
| Third-party compliance assessment | Annual / Per contract | Vendor Management | Third-party compliance report |
| Employee training completion tracking | Quarterly | HR / Learning & Development | Training completion report |
| Exception register review | Quarterly | DPO / IT Security | Exception status report |

### 13.2 Key Performance Indicators

*Define measurable KPIs to track DLP programme effectiveness.*

| KPI | Target | Measurement Source | Reporting Frequency |
|---|---|---|---|
| DLP coverage (% of in-scope endpoints with active DLP agent) | ≥ 99% | DLP management console | Monthly |
| Mean time to detect DLP incident (MTTD) | < [X hours] | SIEM / Incident tickets | Quarterly |
| Mean time to respond to Critical/High alerts (MTTR) | < [X hours] | SOC case management | Quarterly |
| False positive rate (Critical/High rules) | < [X%] | DLP platform | Quarterly |
| DLP awareness training completion rate | ≥ 95% of all staff | LMS | Quarterly |
| Open exceptions exceeding approved term | 0 | Exception register | Monthly |
| DLP rule update cycle compliance | 100% updated quarterly | Change management log | Quarterly |
| Confirmed data loss incidents (Class 1/2) | 0 target | Incident register | Monthly |

### 13.3 Non-Compliance and Disciplinary Action

*Define the consequences of policy violations, including the range of sanctions.*

Non-compliance with this policy is taken seriously and may result in disciplinary action, up to and including termination of employment or engagement and/or legal proceedings.

**Unintentional Violations (e.g., accidental data transfer):**
- First occurrence: Remedial DLP awareness training; documented counselling.
- Repeated occurrence: Formal written warning; enhanced monitoring; management escalation.

**Intentional or Reckless Violations (e.g., deliberate exfiltration attempt):**
- Immediate suspension of system access pending investigation.
- Formal disciplinary proceedings under [Organization Name]'s Disciplinary Policy.
- Potential civil and/or criminal referral under applicable law.
- Notification to relevant regulators where required.

**Third-Party Violations:**
- Formal notification to the third party's management.
- Audit rights exercised.
- Contract review and potential termination.
- Regulatory notification if customer data is affected.

All disciplinary actions **SHALL** be documented and retained in accordance with the organisation's HR records policy.

---

## 14. Training and Awareness

*Define DLP training obligations for all personnel within scope.*

### 14.1 Mandatory Training Requirements

| Training Programme | Target Audience | Delivery Method | Frequency | Minimum Completion Rate |
|---|---|---|---|---|
| DLP Awareness — Foundation | All employees and contractors | e-Learning (LMS) | Upon onboarding, then annually | 100% within 30 days of joining |
| DLP Policy Update Briefing | All employees | e-Learning or Town Hall | Upon material policy change | ≥ 95% within 60 days of update |
| DLP Operations — Advanced | IT Security, SOC, IT Operations | Instructor-led training | Annual | 100% |
| DLP for Data Owners | Business Unit Heads, Data Owners | Instructor-led workshop | Annual | 100% |
| Incident Response — DLP Scenarios | SOC, IT Security, DPO | Tabletop exercise | Annual | 100% of incident response team |

### 14.2 Training Content Requirements

Foundation DLP awareness training **SHALL** cover, at minimum:

- The importance of data protection and the organisation's classification scheme.
- How to identify sensitive data and apply correct handling procedures.
- Prohibited actions under this policy.
- How to recognise and report a suspected data loss event.
- The consequences of non-compliance.

### 14.3 Awareness Channels

In addition to formal training, DLP awareness **SHALL** be reinforced through:

- Regular security awareness communications (newsletters, intranet articles, posters).
- Just-in-time user notifications delivered by the DLP tool at the point of a policy alert (user education mode).
- Inclusion of DLP topics in team meetings and business unit risk discussions.
- Annual phishing and data handling simulation exercises.

---

## 15. Review and Approval History

*Maintain an auditable record of all reviews, updates, and approvals for this policy document.*

### 15.1 Review Schedule

| Review Type | Trigger | Responsible Party | Action Required |
|---|---|---|---|
| Per-event review | Material DLP incident; significant regulatory change; major change to data landscape or technology environment | DPO | Assess whether policy update is required; update and re-approve if necessary |
| Quarterly trend review | Quarterly DLP trend report issued | DPO, CISO | Review KPI performance; assess whether rule or policy changes are required |
| Annual full review | Calendar-based — due annually on [Review Month] | DPO | Full policy review against regulatory requirements, technology landscape, and operational experience |

### 15.2 Version History

*Record all versions of this document, including the nature of changes made.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Initial release |
| [x.x] | [Date] | [Author Name] | [Reviewer Name] | [Summary of changes] |
| [x.x] | [Date] | [Author Name] | [Reviewer Name] | [Summary of changes] |

### 15.3 Approval Sign-Off

*Record formal approval of this policy version by authorised signatories.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [DPO Name] | __________________ | [Date] |
| Chief Information Security Officer | [CISO Name] | __________________ | [Date] |
| Chief Risk Officer | [CRO Name] | __________________ | [Date] |
| Chief Executive Officer / Managing Director | [CEO Name] | __________________ | [Date] |
| [Other approver as required] | [Name] | __________________ | [Date] |

> *This policy is effective from the date of signature by the Data Protection Officer and is subject to the review cycle defined in Section 15.1.*

---

## 16. References

*List all regulatory documents, standards, and internal policies referenced or relied upon in this document.*

### 16.1 Regulatory and Statutory References

| Reference | Document Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 11.10 (Data Loss Prevention); Clauses 11.1–11.9 (Data Management and Security) |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 5 (General Principle), Section 9 (Security Principle) |
| [NACSA Ref] | National Cybersecurity Policy | NACSA | [Relevant Section] |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO / IEC | Annex A Control 5.12 (Classification of information), Control 8.12 (Data leakage prevention) |
| ISO/IEC 27002:2022 | Information Security Controls | ISO / IEC | 5.12, 8.12 |
| PCI-DSS v4.0 | Payment Card Industry Data Security Standard | PCI SSC | Requirement 3 (Protect stored account data), Requirement 4 (Protect cardholder data in transit) |
| [Other reference] | [Document Title] | [Authority] | [Clause] |

### 16.2 Internal Policy References

| Document Title | Document ID | Owner | Relationship to This Policy |
|---|---|---|---|
| Information Security Policy | [Doc ID] | CISO | Parent policy |
| Data Classification Policy | [Doc ID] | DPO | Defines classification tiers enforced by DLP |
| Acceptable Use Policy | [Doc ID] | CISO | Governs permitted use of systems covered by DLP |
| Incident Management Policy | [Doc ID] | CISO | Governs response to DLP incidents |
| Third-Party Risk Management Policy | [Doc ID] | CRO | Governs DLP obligations for vendors |
| Cryptography Policy | [Doc ID] | CISO | Governs encryption standards referenced in Section 7.2.5 |
| Log Management Policy | [Doc ID] | IT Security | Governs DLP log retention referenced in Section 7.2.3 |
| Change Management Policy | [Doc ID] | IT Operations | Governs DLP configuration changes |
| Disciplinary Policy | [Doc ID] | HR | Referenced in Section 13.3 |

---

## 17. Appendices

*Attach supporting materials, templates, and reference documents that support the implementation of this policy.*

---

### Appendix A — Data Classification Quick Reference Card

*Provide a one-page summary of data classification tiers and DLP handling requirements for distribution to all staff.*

**[Organization Name] — Data Handling Quick Reference**

| If your data is... | Examples | You MUST... | You MUST NOT... |
|---|---|---|---|
| **RESTRICTED** | Customer account data, NRIC, card numbers, regulatory filings | Store only in approved systems; encrypt in transit; never email externally without encryption; log all transfers | Send to personal email; copy to USB; share with unapproved parties; print on unsecured printers |
| **CONFIDENTIAL** | Employee data, internal audit reports, contracts | Share on a need-to-know basis; use secure channels; apply email encryption for external recipients | Upload to personal cloud; forward to unauthorised parties; leave unattended on desks |
| **INTERNAL** | Policies, meeting minutes, non-sensitive memos | Mark appropriately; do not share publicly | Post on social media or external forums |
| **PUBLIC** | Marketing materials, published reports | No special handling required | Modify without authorisation |

**Not sure of the classification?** Treat it as CONFIDENTIAL and check with your Data Owner or the DPO.

---

### Appendix B — DLP Configuration Baseline

*This appendix contains the approved baseline configuration for [Organization Name]'s DLP platform(s). This is a controlled document maintained by IT Security.*

**[Refer to separate controlled document: DLP Configuration Baseline — Document ID: [Doc ID]]**

The baseline covers:
- Approved detection rule library (content patterns, regex, fingerprints).
- Default policy actions by severity and channel.
- Alert routing and escalation configuration.
- Integration parameters (SIEM, ticketing, email).
- Approved whitelist entries and justifications.
- Agent deployment standards and tamper-protection configuration.

*Note: The DLP Configuration Baseline is classified as RESTRICTED and is available to authorised IT Security personnel only.*

---

### Appendix C — DLP Policy Exception Request Form

*Reproduced below is the standard form to be completed by all exception requestors. Electronic submission is preferred via [System/Portal Name].*

---

**DLP Policy Exception Request**

**Section 1 — Requestor Details**

| Field | Detail |
|---|---|
| Requestor Name | [Name] |
| Job Title | [Title] |
| Business Unit | [Business Unit] |
| Date of Request | [Date] |
| Contact Email | [Email] |
| Contact Phone | [Phone] |

**Section 2 — Exception Details**

| Field | Detail |
|---|---|
| DLP Control to be Excepted | [Describe the specific DLP control or rule] |
| Data Type / Classification | [Specify data type and classification level] |
| Affected Channel(s) | ☐ Email ☐ Web ☐ Removable Media ☐ Cloud ☐ Print ☐ Other: [specify] |
| Specific Users / Systems Affected | [List user accounts, groups, or systems] |
| Business Justification | [Provide a detailed explanation of why this exception is required and why no compliant alternative exists] |
| Requested Start Date | [Date] |
| Requested Expiry Date | [Date — maximum [X months] from start date] |
| Compensating Controls Proposed | [Describe any compensating controls to mitigate the risk of this exception] |
| Risk Assessment Completed | ☐ Yes — attached ☐ No — justification: [explain] |

**Section 3 — Supporting Documentation**

*Attach any relevant supporting documents, including: risk assessments, vendor agreements, regulatory correspondence, or technical justifications.*

| Document | Attached |
|---|---|
| Risk Assessment | ☐ Yes ☐ N/A |
| Third-Party Agreement | ☐ Yes ☐ N/A |
| Technical Justification | ☐ Yes ☐ N/A |
| Other | [Specify] |

**Section 4 — Approval**

| Role | Name | Decision | Date | Comments |
|---|---|---|---|---|
| IT Security Review | [Name] | ☐ Approved ☐ Rejected | [Date] | [Comments] |
| DPO Review | [Name] | ☐ Approved ☐ Rejected | [Date] | [Comments] |
| CISO Approval | [Name] | ☐ Approved ☐ Rejected | [Date] | [Comments] |

---

### Appendix D — Quarterly DLP Trend Report Template

*This template is used by the SOC to produce the mandatory quarterly DLP Trend Report.*

---

**[Organization Name] — Quarterly DLP Trend Report**

**Reporting Period:** [Quarter and Year]
**Prepared By:** [SOC Lead / Analyst Name]
**Date Prepared:** [Date]
**Distribution:** DPO, CISO, IT Security Management

---

**Executive Summary**

*[2–3 sentence narrative summarising the quarter's DLP activity, notable incidents, and any significant trends.]*

---

**1. DLP Alert Volume Summary**

| Metric | This Quarter | Prior Quarter | Trend |
|---|---|---|---|
| Total DLP alerts generated | [N] | [N] | ↑ / ↓ / → |
| Critical severity alerts | [N] | [N] | ↑ / ↓ / → |
| High severity alerts | [N] | [N] | ↑ / ↓ / → |
| Medium severity alerts | [N] | [N] | ↑ / ↓ / → |
| Low / Informational alerts | [N] | [N] | ↑ / ↓ / → |
| Confirmed data loss incidents | [N] | [N] | ↑ / ↓ / → |
| False positives | [N] ([X%]) | [N] ([X%]) | ↑ / ↓ / → |

**2. Top Policy Violations by Rule**

| Rank | Rule Name | Alert Count | Action Taken | Notes |
|---|---|---|---|---|
| 1 | [Rule name] | [N] | [Blocked / Alerted] | [Notes] |
| 2 | [Rule name] | [N] | [Blocked / Alerted] | [Notes] |

**3. Top Violations by Business Unit**

| Rank | Business Unit | Alert Count | Incident Count | Notes |
|---|---|---|---|---|
| 1 | [BU Name] | [N] | [N] | [Notes] |

**4. Incident Summary**

| Incident ID | Class | Data Type | Channel | Status | Regulatory Notification | Outcome |
|---|---|---|---|---|---|---|
| [INC-ID] | [Class] | [Type] | [Channel] | [Status] | ☐ Yes ☐ No | [Summary] |

**5. KPI Performance**

| KPI | Target | This Quarter | Status |
|---|---|---|---|
| DLP endpoint coverage | ≥ 99% | [X%] | ☐ Met ☐ Not Met |
| MTTD (Critical/High) | < [X hrs] | [X hrs] | ☐ Met ☐ Not Met |
| MTTR (Critical/High) | < [X hrs] | [X hrs] | ☐ Met ☐ Not Met |
| False positive rate | < [X%] | [X%] | ☐ Met ☐ Not Met |
| Training completion | ≥ 95% | [X%] | ☐ Met ☐ Not Met |

**6. Exception Register Status**

| Active Exceptions | Exceptions Expiring This Quarter | Overdue Renewals |
|---|---|---|
| [N] | [N] | [N] |

**7. Recommendations**

*[List recommended actions for the next quarter, including rule additions, retractions, process improvements, or escalations.]*

1. [Recommendation 1]
2. [Recommendation 2]
3. [Recommendation 3]

---

**Report Reviewed By:**

| Role | Name | Date |
|---|---|---|
| DPO | [Name] | [Date] |
| CISO | [Name] | [Date] |

---

### Appendix E — Glossary of DLP Technical Terms

*Provide additional technical definitions for users who may be less familiar with DLP technology concepts.*

| Term | Definition |
|---|---|
| **Content Fingerprinting** | A technique that creates a unique digital signature of a sensitive document or dataset, allowing DLP tools to detect copies or derivatives of that content even if the file name or format has changed. |
| **Regular Expression (Regex)** | A sequence of characters that defines a search pattern, used by DLP tools to identify structured sensitive data such as NRIC numbers, account numbers, or card numbers. |
| **SSL/TLS Inspection** | The process by which a network DLP or proxy device decrypts HTTPS traffic to inspect its content for policy violations before re-encrypting and forwarding it. |
| **User and Entity Behaviour Analytics (UEBA)** | Analytics capabilities that establish behavioural baselines for users and systems, enabling detection of anomalous data transfer patterns indicative of insider threats. |
| **Data Discovery** | The process of scanning data repositories (file servers, databases, cloud storage, endpoints) to identify and classify sensitive data that may be at risk. |
| **Optical Character Recognition (OCR)** | Technology that converts scanned documents, images, and screenshots into machine-readable text, enabling DLP tools to inspect image-based content for sensitive data. |
| **CASB (Cloud Access Security Broker)** | A security policy enforcement point between cloud service consumers and cloud service providers, providing visibility and control over data in cloud environments. |
| **Endpoint Agent** | A software component installed on an endpoint device (laptop, desktop) that monitors and enforces DLP policies at the device level, including local file operations, printing, and removable media transfers. |

---

### Appendix F — Contact Directory

*Provide key contact details for personnel involved in DLP governance and incident response.*

| Role | Name | Contact Email | Phone | Escalation Level |
|---|---|---|---|---|
| Data Protection Officer | [DPO Name] | [Email] | [Phone] | Primary — policy and incidents |
| Chief Information Security Officer | [CISO Name] | [Email] | [Phone] | Secondary — technology and strategy |
| SOC Lead (24/7) | [SOC Lead Name] | [Email] | [Phone] | Primary — operational alerts |
| IT Security Manager | [Manager Name] | [Email] | [Phone] | DLP operations |
| Legal and Compliance | [Name] | [Email] | [Phone] | Regulatory matters |
| BNM Regulatory Reporting | [Name] | [Email] | [Phone] | External regulatory notification |
| [Other key contact] | [Name] | [Email] | [Phone] | [Role] |

---

*End of Document*

---

> **Document Classification:** CONFIDENTIAL
> **[Organization Name] | Data Protection Office**
> **Document ID:** [Document ID] | **Version:** 1.0 | **Effective Date:** [Effective Date]
> *This document is subject to version control. Printed copies are uncontrolled. Always refer to the document management system for the current version.*