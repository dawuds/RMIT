# Wireless Security Assessment Report

---

| Field | Details |
|-------|---------|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Vulnerability Management Lead |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

> **Confidentiality Notice:** This document contains sensitive security assessment information and is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name] and must not be disclosed to unauthorized parties. Handling, storage, and disposal of this document must comply with [Organization Name]'s Information Classification and Handling Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Scanning Scope and Frequency](#5-scanning-scope-and-frequency)
6. [Severity Classification and SLA](#6-severity-classification-and-sla)
7. [Remediation Tracking](#7-remediation-tracking)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Wireless Security Assessment Report documents the findings, risk ratings, and remediation actions arising from the semi-annual wireless security assessment and penetration testing conducted across [Organization Name]'s wireless network infrastructure. The report supports [Organization Name]'s obligations under Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.40**, which mandates that financial institutions perform regular assessments of their wireless network environments to identify vulnerabilities, unauthorized access points, and misconfigurations that could expose the institution to cyber threats.

This report serves as a formal record for internal governance, audit, and regulatory review purposes, demonstrating [Organization Name]'s commitment to maintaining a secure wireless environment and managing technology risk in accordance with BNM RMiT requirements.

### 1.2 Scope

*Describe the boundaries of this assessment — which physical sites, network segments, business units, and wireless technologies were included or explicitly excluded.*

This assessment covers the following:

- **In-Scope Environments:**
  - [Site/Location 1] — [Description, e.g., Head Office, Kuala Lumpur]
  - [Site/Location 2] — [Description, e.g., Branch Network, Region]
  - [Site/Location N] — [Description]
- **In-Scope Wireless Technologies:**
  - Corporate Wi-Fi networks (SSIDs: [List SSIDs])
  - Guest Wi-Fi networks (SSIDs: [List SSIDs])
  - Wireless access points (WAPs) managed by [Network Team / Managed Service Provider]
  - Bluetooth and other short-range wireless communications (if applicable)
- **Out-of-Scope:**
  - [List explicitly excluded systems, locations, or technologies and the rationale]
  - [e.g., Wireless-enabled IoT devices managed under separate IoT Security Assessment]

### 1.3 Regulatory Context

| Regulatory Framework | Policy Document | Clause / Section | Requirement Summary |
|---------------------|----------------|-----------------|---------------------|
| BNM Risk Management in Technology (RMiT) | RMiT Policy Document | 10.40 | Financial institutions shall conduct regular assessments of their wireless network infrastructure to identify vulnerabilities and ensure appropriate security controls are in place. |
| [Additional Framework, e.g., NACSA] | [Policy/Standard Name] | [Clause] | [Requirement Summary] |
| [Additional Framework, e.g., ISO 27001] | [Control Reference] | [A.13.1.x] | [Requirement Summary] |

### 1.4 Assessment Period

| Field | Details |
|-------|---------|
| **Assessment Start Date** | [DD/MM/YYYY] |
| **Assessment End Date** | [DD/MM/YYYY] |
| **Report Date** | [DD/MM/YYYY] |
| **Assessment Cycle** | Semi-Annual (H[1/2] [YYYY]) |
| **Previous Assessment Date** | [DD/MM/YYYY] |
| **Conducted By** | [Internal Team / External Assessor Name] |
| **Authorized By** | [Name, Title] |

---

## 2. Assessment Scope and Criteria

### 2.1 Scope Definition

*Define the precise technical and organizational boundaries of the assessment, including the specific assets, systems, and environments evaluated. Reference any scoping agreements or rules of engagement documents.*

The scope of this wireless security assessment was formally agreed upon between [Organization Name]'s [IT Security / Vulnerability Management Team] and [Internal Assessor / External Assessor: Firm Name] prior to commencement of testing. The agreed scope is documented in the **Rules of Engagement (RoE)** referenced in **Appendix A**.

#### 2.1.1 Physical Sites Assessed

| Site ID | Site Name | Location | No. of WAPs | SSID(s) Assessed |
|---------|-----------|----------|-------------|-----------------|
| SITE-001 | [Head Office] | [Address / Floor / Zone] | [Number] | [SSID List] |
| SITE-002 | [Branch Name] | [Address / Floor / Zone] | [Number] | [SSID List] |
| SITE-003 | [Data Centre / DR Site] | [Address / Zone] | [Number] | [SSID List] |
| SITE-00N | [Location Name] | [Address] | [Number] | [SSID List] |

#### 2.1.2 Wireless Network Inventory

| Asset ID | Access Point Model | Firmware Version | Location | Network Segment | SSID | Encryption Protocol |
|----------|-------------------|-----------------|----------|----------------|------|-------------------|
| WAP-001 | [Vendor/Model] | [Version] | [Physical Location] | [Corporate/Guest/DMZ] | [SSID] | [WPA3/WPA2] |
| WAP-002 | [Vendor/Model] | [Version] | [Physical Location] | [Corporate/Guest/DMZ] | [SSID] | [WPA3/WPA2] |
| WAP-00N | [Vendor/Model] | [Version] | [Physical Location] | [Network Segment] | [SSID] | [Protocol] |

### 2.2 Assessment Criteria

*Specify the security standards, benchmarks, and internal policies used as the baseline against which the wireless environment was assessed.*

The wireless security assessment was conducted against the following criteria and benchmarks:

| Criteria | Standard / Benchmark | Version / Reference |
|----------|---------------------|-------------------|
| Wireless Security Hardening | CIS Benchmark for Wireless Networks | [Version] |
| Encryption Standards | WPA3 / WPA2-Enterprise (802.1X) | IEEE 802.11 |
| Authentication Controls | [Organization Name] Network Security Policy | [Doc ID] |
| Rogue Access Point Detection | [Organization Name] Wireless Security Standard | [Doc ID] |
| BNM RMiT Compliance | BNM RMiT Policy Document | Clause 10.40 |
| [Additional Criteria] | [Standard Name] | [Reference] |

### 2.3 Exclusions and Limitations

*Document any agreed exclusions, constraints, or limitations that may affect the completeness or representativeness of the assessment.*

The following exclusions and limitations apply to this assessment:

- **Exclusions:**
  - [Description of excluded asset/location and rationale — e.g., "WAPs at [Branch X] were excluded due to scheduled infrastructure upgrade in progress."]
  - [Additional exclusion]

- **Limitations:**
  - [Description of limitation — e.g., "Physical access to server room WAPs at [Site] was restricted; assessment was conducted remotely where possible."]
  - [Additional limitation]

- **Impact of Exclusions/Limitations:** [Describe whether exclusions/limitations materially affect the overall risk posture assessment.]

---

## 3. Methodology

### 3.1 Assessment Approach

*Describe the overall approach, phases, and techniques used during the wireless security assessment and penetration test. Reference any recognized industry frameworks (e.g., PTES, OWASP, OSSTMM) that guided the methodology.*

This assessment was conducted using a structured, risk-based methodology aligned with the **[Penetration Testing Execution Standard (PTES) / OSSTMM / OWASP Testing Guide]** and [Organization Name]'s internal **Vulnerability Management Procedure** ([Doc ID]). The assessment comprised the following phases:

### 3.2 Assessment Phases

| Phase | Activity | Description | Tools Used |
|-------|----------|-------------|-----------|
| 1 | Pre-Assessment Planning | Scope definition, RoE agreement, asset inventory review, legal authorization | [e.g., Internal documentation] |
| 2 | Passive Reconnaissance | Wireless network discovery, SSID enumeration, signal mapping | [e.g., Kismet, Wireshark] |
| 3 | Active Scanning | WAP enumeration, protocol analysis, configuration review | [e.g., Aircrack-ng Suite, WiFi Analyzer] |
| 4 | Vulnerability Identification | Misconfiguration detection, rogue AP detection, encryption weakness testing | [e.g., Nessus, OpenVAS, Aircrack-ng] |
| 5 | Exploitation / Penetration Testing | Controlled exploitation of identified vulnerabilities (with authorization) | [e.g., Metasploit, hashcat] |
| 6 | Post-Exploitation | Lateral movement testing, network segmentation validation | [e.g., Nmap, manual techniques] |
| 7 | Reporting | Findings documentation, risk rating, remediation recommendations | [Internal templates] |

### 3.3 Testing Techniques

*Detail the specific technical techniques employed during the assessment.*

The following testing techniques were employed:

- **Wireless Discovery and Enumeration:** Identification of all broadcasting SSIDs, hidden networks, and associated WAPs within range of assessed sites.
- **Rogue Access Point Detection:** Scanning for unauthorized WAPs that may have been connected to the corporate network without approval.
- **Evil Twin / SSID Spoofing Detection:** Testing for susceptibility to rogue access points mimicking legitimate SSIDs.
- **Encryption and Protocol Analysis:** Assessment of encryption strength (WEP/WPA/WPA2/WPA3) and identification of deprecated or insecure protocols.
- **Authentication Testing:** Evaluation of authentication mechanisms including PSK strength, 802.1X/RADIUS configuration, and certificate validation.
- **Network Segmentation Testing:** Validation that wireless network segments (Corporate, Guest, IoT) are appropriately isolated.
- **Client Isolation Testing:** Verification that client isolation is enforced on guest and public networks.
- **Denial of Service Testing:** [Include/Exclude based on RoE — assessment of susceptibility to deauthentication attacks.]
- **Configuration Review:** Review of WAP management interfaces, firmware versions, default credentials, and hardening baselines.

### 3.4 Tools and Technologies

| Tool Name | Version | Purpose | Licensed To |
|-----------|---------|---------|------------|
| [Aircrack-ng] | [Version] | WPA/WPA2 handshake capture and analysis | [Organization Name / Assessor] |
| [Kismet] | [Version] | Passive wireless network detection | [Organization Name / Assessor] |
| [Nessus / Tenable.io] | [Version] | Vulnerability scanning | [Organization Name] |
| [Wireshark] | [Version] | Packet capture and protocol analysis | [Organization Name / Assessor] |
| [Nmap] | [Version] | Network discovery and port scanning | [Organization Name / Assessor] |
| [Tool Name] | [Version] | [Purpose] | [License Holder] |

### 3.5 Pre-Assessment Authorization

| Document | Reference | Date Signed |
|----------|-----------|------------|
| Rules of Engagement (RoE) | Appendix A | [DD/MM/YYYY] |
| Authorization Letter | Appendix B | [DD/MM/YYYY] |
| Non-Disclosure Agreement (NDA) | Appendix C | [DD/MM/YYYY] |
| Change Advisory Board (CAB) Approval | [CAB Ref No.] | [DD/MM/YYYY] |

---

## 4. Findings and Ratings

### 4.1 Executive Summary of Findings

*Provide a high-level summary of the overall security posture of the wireless environment based on assessment findings. This section should be suitable for senior management and Board-level review.*

The wireless security assessment conducted for the period [Assessment Period] identified **[Total Number]** findings across [Organization Name]'s wireless infrastructure covering **[Number]** sites and **[Number]** wireless access points.

#### 4.1.1 Findings Overview

| Severity | Count | Change from Previous Assessment |
|----------|-------|--------------------------------|
| Critical | [N] | [+N / -N / No Change] |
| High | [N] | [+N / -N / No Change] |
| Medium | [N] | [+N / -N / No Change] |
| Low | [N] | [+N / -N / No Change] |
| Informational | [N] | [+N / -N / No Change] |
| **Total** | **[N]** | **[+N / -N / No Change]** |

#### 4.1.2 Overall Risk Rating

| Assessment | Overall Rating | Rationale |
|-----------|---------------|-----------|
| Current Assessment ([Period]) | **[Critical / High / Medium / Low]** | [Brief rationale for overall rating] |
| Previous Assessment ([Period]) | **[Rating]** | [Brief rationale] |

> **Overall Assessment:** [Provide 2-3 sentences summarizing the key security posture, most significant risks identified, and general trajectory (improving/deteriorating/stable).]

### 4.2 Detailed Findings

*Document each finding identified during the assessment with sufficient detail to enable risk owners to understand and act on the finding. Each finding should be uniquely identified.*

#### Finding [WSAF-YYYY-HH-001] — [Finding Title]

| Field | Details |
|-------|---------|
| **Finding ID** | WSAF-[YYYY]-[HH]-001 |
| **Title** | [Descriptive title of the finding] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **CVSS Score** | [Score] ([Vector String]) |
| **Affected Asset(s)** | [WAP ID / SSID / Site] |
| **Site(s) Affected** | [Site Name(s)] |
| **Category** | [e.g., Misconfiguration / Encryption Weakness / Rogue Device / Authentication] |
| **Discovery Date** | [DD/MM/YYYY] |
| **Status** | [Open / In Remediation / Remediated / Risk Accepted] |

**Description:**

[Provide a clear, technical description of the vulnerability or misconfiguration identified. Include evidence references (e.g., screenshots in Appendix D) and explain why this represents a security risk.]

**Evidence Reference:** Appendix D, Exhibit [D-001]

**Risk Impact:**

[Describe the potential business and technical impact if this vulnerability were exploited — including data confidentiality, integrity, availability, and regulatory implications.]

**Recommended Remediation:**

[Provide specific, actionable remediation steps. Include configuration changes, patching requirements, or procedural controls as applicable.]

**Remediation Deadline:** [DD/MM/YYYY] *(per SLA for [Severity] findings — refer to Section 6)*

---

#### Finding [WSAF-YYYY-HH-002] — [Finding Title]

| Field | Details |
|-------|---------|
| **Finding ID** | WSAF-[YYYY]-[HH]-002 |
| **Title** | [Descriptive title] |
| **Severity** | [Severity] |
| **CVSS Score** | [Score] |
| **Affected Asset(s)** | [Assets] |
| **Site(s) Affected** | [Sites] |
| **Category** | [Category] |
| **Discovery Date** | [DD/MM/YYYY] |
| **Status** | [Status] |

**Description:** [Finding description.]

**Evidence Reference:** Appendix D, Exhibit [D-002]

**Risk Impact:** [Impact description.]

**Recommended Remediation:** [Remediation steps.]

**Remediation Deadline:** [DD/MM/YYYY]

---

*[Repeat finding template for each identified finding. All findings must be documented regardless of severity.]*

### 4.3 Findings Summary Table

*Provide a consolidated reference table of all findings for ease of tracking and management review.*

| Finding ID | Title | Severity | Site(s) | Category | Status | Remediation Deadline | Owner |
|-----------|-------|----------|---------|----------|--------|---------------------|-------|
| WSAF-[YYYY]-[HH]-001 | [Title] | [Severity] | [Site] | [Category] | [Status] | [DD/MM/YYYY] | [Owner] |
| WSAF-[YYYY]-[HH]-002 | [Title] | [Severity] | [Site] | [Category] | [Status] | [DD/MM/YYYY] | [Owner] |
| WSAF-[YYYY]-[HH]-003 | [Title] | [Severity] | [Site] | [Category] | [Status] | [DD/MM/YYYY] | [Owner] |
| [Additional findings] | | | | | | | |

### 4.4 Positive Observations

*Document security controls that are operating effectively. Positive findings demonstrate maturity and provide a balanced view of the security posture.*

The following security controls were observed to be operating effectively during the assessment:

- [Positive observation 1 — e.g., "WPA3-Enterprise with 802.1X authentication is consistently implemented across all corporate SSIDs."]
- [Positive observation 2 — e.g., "Guest network is appropriately segmented from the corporate environment with no lateral movement possible."]
- [Positive observation 3]
- [Additional observations]

---

## 5. Scanning Scope and Frequency

### 5.1 Wireless Scanning Program

*Define the recurring scanning activities that form part of [Organization Name]'s wireless security monitoring program, distinguishing between scheduled assessments and continuous monitoring.*

[Organization Name] maintains a wireless security scanning program as part of its broader Vulnerability Management Program. The program incorporates both continuous monitoring and periodic assessment activities to ensure timely detection of unauthorized devices, configuration drift, and emerging vulnerabilities.

### 5.2 Scanning Schedule

| Scan Type | Frequency | Scope | Responsible Party | Tool Used | Output |
|-----------|-----------|-------|------------------|-----------|--------|
| Wireless Discovery Scan | [Weekly / Monthly] | All in-scope sites | [Network Operations / SOC] | [Tool] | [Report / Alert] |
| Rogue AP Detection Scan | [Continuous / Daily] | All corporate sites | [SOC / WIDS System] | [WIDS Platform] | Real-time alerts |
| Vulnerability Scan (Wireless) | [Monthly] | All in-scope WAPs | Vulnerability Management Team | [Nessus / OpenVAS] | Vulnerability report |
| Penetration Test (Wireless) | Semi-Annual | Full scope per RoE | [Internal / External Assessor] | Multiple (see Sec. 3.4) | This report |
| Compliance Configuration Review | [Quarterly] | WAP configurations | [Network Security Team] | [Configuration tool] | Compliance report |
| Post-Remediation Verification Scan | Ad hoc (post-fix) | Affected assets only | Vulnerability Management Team | [Tool] | Verification evidence |

### 5.3 Coverage by Site

*Confirm that all sites within scope are covered by the scanning schedule and document any gaps or compensating controls.*

| Site | Continuous Monitoring | Monthly Scan | Semi-Annual Pentest | Last Scan Date | Next Scan Date |
|------|--------------------|-------------|-------------------|---------------|---------------|
| [Head Office] | Yes / No | Yes / No | Yes / No | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [Branch Name] | Yes / No | Yes / No | Yes / No | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [Data Centre] | Yes / No | Yes / No | Yes / No | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [Site Name] | Yes / No | Yes / No | Yes / No | [DD/MM/YYYY] | [DD/MM/YYYY] |

### 5.4 Wireless Intrusion Detection System (WIDS)

*Describe the continuous monitoring capabilities in place for detecting rogue access points and wireless attacks.*

| WIDS Attribute | Details |
|----------------|---------|
| **Platform** | [WIDS Platform Name / Integrated WIPS in WAP Controller] |
| **Coverage** | [Number] of [Number] in-scope sites |
| **Detection Capabilities** | [Rogue AP / Evil Twin / Deauth Attack / SSID Spoofing / etc.] |
| **Alert Escalation** | [SIEM / SOC ticketing system] |
| **Last Configuration Review** | [DD/MM/YYYY] |
| **Monitoring Status** | [Active / Partially Active — describe gaps] |

---

## 6. Severity Classification and SLA

### 6.1 Severity Classification Framework

*Define the criteria used to classify wireless security findings by severity. Classifications must be consistently applied across all assessments to support trend analysis and SLA enforcement.*

[Organization Name] classifies wireless security assessment findings using a risk-based severity framework aligned with the **Common Vulnerability Scoring System (CVSS v3.1)** and [Organization Name]'s **Risk Appetite Statement** ([Doc ID]).

### 6.2 Severity Definitions

| Severity | CVSS Score Range | Definition | Example Wireless Findings |
|----------|----------------|------------|--------------------------|
| **Critical** | 9.0 – 10.0 | Vulnerabilities that could be immediately exploited to compromise the network, expose sensitive data, or cause significant operational disruption. Requires immediate escalation to CISO. | WEP encryption in use; default admin credentials on WAPs; complete network segmentation failure |
| **High** | 7.0 – 8.9 | Significant vulnerabilities that present a high likelihood of exploitation with major impact. Requires urgent remediation. | WPA2-PSK with weak passphrase; rogue access point detected on corporate network; 802.1X misconfiguration |
| **Medium** | 4.0 – 6.9 | Vulnerabilities that represent moderate risk. May require specific conditions to exploit or have limited impact. Requires planned remediation. | Outdated WAP firmware; management interface exposed on production VLAN; weak SSID naming convention exposing network information |
| **Low** | 0.1 – 3.9 | Minor vulnerabilities or misconfigurations with limited exploitability or impact. Should be remediated as part of routine maintenance. | SSID broadcast of organizational name; non-critical configuration deviation from baseline |
| **Informational** | N/A | Observations, best practice recommendations, or positive findings. No direct remediation SLA. | Recommendation to enhance logging; advisory on emerging wireless threats |

### 6.3 Remediation SLA

*Define the maximum allowable timeframes for remediation of identified findings by severity level, consistent with [Organization Name]'s Vulnerability Management Policy.*

| Severity | Remediation SLA | Escalation Point | Acceptance Authority |
|----------|----------------|-----------------|---------------------|
| **Critical** | [24–72 hours] from identification | CISO, CTO, Senior Management | CISO |
| **High** | [7–14 days] from report issuance | Head of IT Security | Head of IT Security |
| **Medium** | [30–60 days] from report issuance | Vulnerability Management Lead | Vulnerability Management Lead |
| **Low** | [90 days] from report issuance | Vulnerability Management Lead | IT Security Team |
| **Informational** | Addressed in next review cycle | Vulnerability Management Lead | Vulnerability Management Lead |

> **Note:** Remediation SLAs are measured from the date of this report unless the finding was identified during the assessment and communicated verbally prior to report issuance, in which case the SLA begins from the verbal notification date.

### 6.4 Risk Acceptance

*Define the process for formally accepting residual risk where remediation within SLA is not achievable.*

Where remediation cannot be completed within the defined SLA due to technical constraints, operational dependencies, or resource limitations, the relevant risk owner must submit a **Risk Acceptance Request** to the [Risk Management Committee / CISO] for approval. Risk acceptances must be:

- Documented in the **Risk Register** ([System/Tool Name]);
- Reviewed at each subsequent wireless security assessment;
- Approved by the appropriate authority as defined in the table above;
- Subject to compensating controls where the acceptance period exceeds [90 days].

---

## 7. Remediation Tracking

### 7.1 Remediation Status Overview

*Provide a current status view of all open and in-progress remediation activities arising from this assessment and any unresolved findings from previous assessments.*

| Status | Count (Current Assessment) | Count (Carried Over from Previous) | Total Open |
|--------|--------------------------|-----------------------------------|-----------|
| Open — Not Started | [N] | [N] | [N] |
| In Remediation | [N] | [N] | [N] |
| Pending Verification | [N] | [N] | [N] |
| Remediated and Verified | [N] | [N] | [N] |
| Risk Accepted | [N] | [N] | [N] |
| **Total** | **[N]** | **[N]** | **[N]** |

### 7.2 Remediation Action Plan

*Document the specific remediation actions, accountable owners, and target completion dates for all open findings. This table serves as the primary tracking artefact between assessments.*

| Finding ID | Title | Severity | Remediation Action | Responsible Owner | Target Date | Status | Completion Date | Verified By |
|-----------|-------|----------|--------------------|------------------|-------------|--------|----------------|------------|
| WSAF-[YYYY]-[HH]-001 | [Title] | [Severity] | [Specific action to be taken] | [Name / Team] | [DD/MM/YYYY] | [Open / In Progress / Done] | [DD/MM/YYYY] | [Name] |
| WSAF-[YYYY]-[HH]-002 | [Title] | [Severity] | [Specific action] | [Name / Team] | [DD/MM/YYYY] | [Status] | [DD/MM/YYYY] | [Name] |
| WSAF-[YYYY]-[HH]-003 | [Title] | [Severity] | [Specific action] | [Name / Team] | [DD/MM/YYYY] | [Status] | [DD/MM/YYYY] | [Name] |
| [Additional rows] | | | | | | | | |

### 7.3 Carry-Over Findings from Previous Assessment

*Track findings identified in the previous assessment cycle that remain open or have been re-opened.*

| Finding ID (Previous) | Title | Original Severity | Original Discovery Date | Previous SLA | Carry-Over Reason | Current Status | Revised Target Date | Risk Acceptance Ref. |
|----------------------|-------|-----------------|------------------------|-------------|-------------------|---------------|--------------------|--------------------|
| WSAF-[YYYY]-[HH]-001 | [Title] | [Severity] | [DD/MM/YYYY] | [DD/MM/YYYY] | [e.g., Awaiting vendor patch / Operational dependency] | [Status] | [DD/MM/YYYY] | [Risk Acceptance ID if applicable] |
| [Additional rows] | | | | | | | | |

### 7.4 Remediation Verification Process

*Describe the process for verifying that remediation actions have been completed effectively.*

Upon completion of remediation activities by the responsible owner, the Vulnerability Management Lead will:

1. **Review evidence** submitted by the remediation owner (e.g., configuration screenshots, change records, patch confirmation).
2. **Conduct verification scan** targeting the specific asset and vulnerability to confirm resolution.
3. **Update the finding status** in [Vulnerability Management System / Tracking Tool] to "Remediated and Verified."
4. **Update this report** or issue a remediation update addendum within [N] business days of verification completion.
5. **Escalate** any finding where evidence is insufficient or verification scanning confirms the vulnerability persists.

---

## 8. Roles and Responsibilities

### 8.1 RACI Matrix

*The following RACI matrix defines the roles and accountabilities for the wireless security assessment process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Vulnerability Management Lead | Network Security Team | IT Operations | Internal Audit | Risk Management | External Assessor | Business Unit Heads |
|----------|------|------------------------------|----------------------|--------------|---------------|----------------|------------------|-------------------|
| Define assessment scope and schedule | C | R | C | C | I | C | C | I |
| Approve Rules of Engagement | A | R | C | I | I | C | C | I |
| Conduct wireless security assessment | I | A | C | C | I | I | R | I |
| Manage active assessment (point of contact) | I | R | R | C | I | I | C | I |
| Provide access and logistical support | I | C | R | R | I | I | I | C |
| Review and validate findings | C | A | R | C | I | C | C | I |
| Prepare and issue assessment report | I | A | C | I | I | I | R | I |
| Distribute report to stakeholders | R | A | I | I | I | I | I | I |
| Assign remediation ownership | A | R | C | C | I | C | I | C |
| Execute remediation actions | I | C | R | R | I | I | I | C |
| Verify remediation completion | I | A | R | C | I | I | C | I |
| Escalate overdue findings | A | R | I | I | C | C | I | I |
| Maintain risk register entries | C | R | C | C | I | A | I | I |
| Report to Board / Senior Management | A | C | I | I | I | C | I | I |
| Conduct post-assessment review | C | A | R | C | C | C | I | I |

### 8.2 Key Contacts

| Role | Name | Department | Contact |
|------|------|-----------|--------|
| CISO | [Name] | [Department] | [Email / Extension] |
| Vulnerability Management Lead | [Name] | IT Security | [Email / Extension] |
| Network Security Manager | [Name] | IT Security | [Email / Extension] |
| IT Operations Lead | [Name] | IT Operations | [Email / Extension] |
| Internal Audit Representative | [Name] | Internal Audit | [Email / Extension] |
| External Assessor (Lead) | [Name] | [Firm Name] | [Email / Contact] |
| Risk Manager | [Name] | Risk Management | [Email / Extension] |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Role | Changes |
|---------|------|--------|------|---------|
| 1.0 | [DD/MM/YYYY] | [Name] | Vulnerability Management Lead | Initial document — [Assessment Period H1/H2 YYYY] |
| [1.1] | [DD/MM/YYYY] | [Name] | [Role] | [Description of change, e.g., Updated remediation status for findings WSAF-xxx-001 to 003] |
| [2.0] | [DD/MM/YYYY] | [Name] | [Role] | [Description of change, e.g., H2 YYYY assessment — full report refresh] |

### 9.2 Approval and Sign-Off

*This document requires formal approval by the following stakeholders prior to distribution and use for regulatory or governance purposes.*

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Prepared By — Vulnerability Management Lead | [Name] | __________________ | [DD/MM/YYYY] |
| Reviewed By — Network Security Manager | [Name] | __________________ | [DD/MM/YYYY] |
| Reviewed By — Internal Audit | [Name] | __________________ | [DD/MM/YYYY] |
| Approved By — CISO | [Name] | __________________ | [DD/MM/YYYY] |
| Noted By — Risk Management | [Name] | __________________ | [DD/MM/YYYY] |

### 9.3 Distribution List

| Recipient | Role | Distribution Date | Format |
|-----------|------|------------------|--------|
| [Name] | CISO | [DD/MM/YYYY] | [Encrypted PDF / Secure Portal] |
| [Name] | Head of IT Security | [DD/MM/YYYY] | [Format] |
| [Name] | Chief Risk Officer | [DD/MM/YYYY] | [Format] |
| [Name] | Internal Audit | [DD/MM/YYYY] | [Format] |
| [Name] | IT Operations Lead | [DD/MM/YYYY] | [Format] |
| [Name] | [Role — Regulatory Reporting if applicable] | [DD/MM/YYYY] | [Format] |

---

## 10. References

### 10.1 Regulatory References

| Reference | Document | Clause / Section | Relevance |
|-----------|----------|-----------------|-----------|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 10.40** | Wireless network security assessment requirements for financial institutions |
| BNM RMiT | Risk Management in Technology Policy Document | [Clause 10.x — Network Security] | Network segmentation and access control requirements applicable to wireless environments |
| BNM RMiT | Risk Management in Technology Policy Document | [Clause 10.x — Vulnerability Management] | Periodic vulnerability assessment requirements |
| [NACSA] | [NACSA Standard / Guideline Title] | [Section] | [Relevance to wireless security] |
| [PDPA 2010] | Personal Data Protection Act 2010 | [Section] | [Relevance — if wireless networks handle personal data] |

### 10.2 Internal Policy References

| Document Title | Document ID | Version | Owner |
|---------------|-------------|---------|-------|
| Information Security Policy | [Doc ID] | [Version] | CISO |
| Network Security Policy | [Doc ID] | [Version] | Network Security Manager |
| Vulnerability Management Policy | [Doc ID] | [Version] | Vulnerability Management Lead |
| Wireless Network Security Standard | [Doc ID] | [Version] | Network Security Manager |
| Penetration Testing Policy | [Doc ID] | [Version] | Vulnerability Management Lead |
| Risk Management Framework | [Doc ID] | [Version] | Chief Risk Officer |

### 10.3 Industry Standards and Frameworks

| Standard | Version | Reference |
|----------|---------|-----------|
| CIS Controls | v8 | Control 7: Continuous Vulnerability Management; Control 12: Network Infrastructure Management |
| ISO/IEC 27001:2022 | 2022 | A.8.20 Network Security; A.8.22 Segregation of Networks |
| NIST SP 800-153 | Rev 1 | Guidelines for Securing Wireless Local Area Networks (WLANs) |
| NIST SP 800-97 | — | Establishing Wireless Robust Security Networks |
| PCI DSS | v4.0 | Requirement 11: Test Security of Systems and Networks (wireless) |
| OWASP | — | OWASP Testing Guide — Wireless Security Testing |

---

## 11. Appendices

### Appendix A — Rules of Engagement (RoE)

*Attach or reference the signed Rules of Engagement document that governed the scope, authorized activities, emergency contacts, and permitted testing windows for this assessment.*

> **Reference:** [RoE Document ID] — signed [DD/MM/YYYY] by [Authorizing Officer Name, Title]
>
> [Attach signed RoE as embedded document or reference secure document repository location: [Repository Path / URL]]

---

### Appendix B — Authorization Letter

*Attach the formal written authorization from [Organization Name] senior management authorizing the conduct of the wireless security assessment and penetration testing.*

> **Reference:** [Authorization Letter Reference] — signed [DD/MM/YYYY] by [CISO / CTO / Authorizing Officer]
>
> [Attach authorization letter or reference: [Document Location]]

---

### Appendix C — Wireless Network Asset Inventory

*Provide the complete, current inventory of all wireless access points and related infrastructure within the assessment scope at the time of the assessment.*

| Asset ID | Vendor | Model | Serial Number | Firmware Version | Site | Location | Network Segment | SSID(s) | Encryption | Management IP | Last Config Review |
|----------|--------|-------|--------------|-----------------|------|----------|----------------|---------|-----------|--------------|-------------------|
| WAP-001 | [Vendor] | [Model] | [S/N] | [Firmware] | [Site] | [Location] | [Segment] | [SSID] | [WPA3/WPA2] | [IP] | [DD/MM/YYYY] |
| WAP-002 | [Vendor] | [Model] | [S/N] | [Firmware] | [Site] | [Location] | [Segment] | [SSID] | [Protocol] | [IP] | [DD/MM/YYYY] |

---

### Appendix D — Evidence and Screenshots

*This appendix contains supporting evidence for findings documented in Section 4. Each exhibit is cross-referenced to its corresponding finding.*

| Exhibit ID | Finding ID | Description | File Reference |
|-----------|-----------|-------------|---------------|
| D-001 | WSAF-[YYYY]-[HH]-001 | [Description of screenshot/output, e.g., "Aircrack-ng output showing WEP encryption on WAP-003"] | [Secure file path / Encrypted attachment] |
| D-002 | WSAF-[YYYY]-[HH]-002 | [Description] | [File reference] |
| D-003 | WSAF-[YYYY]-[HH]-003 | [Description] | [File reference] |
| [D-00N] | [Finding ID] | [Description] | [File reference] |

> **Note:** All evidence files containing sensitive technical data are stored in [Encrypted repository / secure file share location] and are accessible only to authorized personnel. Physical copies must be stored in a locked cabinet and disposed of in accordance with [Organization Name]'s document retention and disposal policy.

---

### Appendix E — Remediation Evidence Register

*Maintain a record of all evidence submitted by remediation owners to support finding closure and verification.*

| Finding ID | Remediation Action Taken | Evidence Type | Evidence Reference | Submitted By | Submission Date | Verified By | Verification Date |
|-----------|-------------------------|--------------|-------------------|-------------|----------------|------------|-----------------|
| WSAF-[YYYY]-[HH]-001 | [Description of action taken] | [Screenshot / Change Record / Scan Output] | [Reference] | [Name] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] |
| WSAF-[YYYY]-[HH]-002 | [Description] | [Type] | [Reference] | [Name] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] |

---

### Appendix F — Glossary

| Term | Definition |
|------|-----------|
| **802.1X** | An IEEE standard for port-based network access control, commonly used for wireless authentication via a RADIUS server. |
| **BSSID** | Basic Service Set Identifier — the MAC address of a wireless access point. |
| **CVSS** | Common Vulnerability Scoring System — an industry-standard framework for rating the severity of security vulnerabilities. |
| **Evil Twin** | A rogue wireless access point that mimics a legitimate SSID to intercept network traffic. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions. |
| **Rogue AP** | An unauthorized wireless access point connected to the network without explicit approval. |
| **SSID** | Service Set Identifier — the name broadcast by a wireless network. |
| **WAP** | Wireless Access Point — network hardware that creates a wireless local area network. |
| **WIDS/WIPS** | Wireless Intrusion Detection / Prevention System — a system that monitors wireless networks for unauthorized activity. |
| **WPA2/WPA3** | Wi-Fi Protected Access versions 2 and 3 — security certification programs for wireless networks. |
| [Term] | [Definition] |

---

*End of Document*

---

**Document Control:** This document is subject to [Organization Name]'s Document Management Policy ([Doc ID]). Printed copies are uncontrolled. Always refer to [Document Repository Name] for the current version. For queries regarding this document, contact the Vulnerability Management Lead at [contact details].