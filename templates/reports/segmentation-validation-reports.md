# Segmentation Validation Report

---

| Field | Details |
|---|---|
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

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel involved in technology risk management and regulatory compliance activities. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Network Segmentation Zones](#4-network-segmentation-zones)
5. [Firewall Rule Review](#5-firewall-rule-review)
6. [Scanning Scope and Frequency](#6-scanning-scope-and-frequency)
7. [Severity Classification and SLA](#7-severity-classification-and-sla)
8. [Key Findings and Observations](#8-key-findings-and-observations)
9. [Remediation Tracking](#9-remediation-tracking)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

*Provide a concise, non-technical summary of the segmentation validation exercise, highlighting the overall security posture of network segmentation controls, critical findings, and the current remediation status. This section should be suitable for review by senior management and the Board Risk Committee.*

### 1.1 Assessment Overview

| Field | Details |
|---|---|
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessment Type** | Semi-Annual Segmentation Validation |
| **Conducted By** | [Internal Team / External Vendor Name] |
| **Report Date** | [Report Date] |
| **Overall Risk Rating** | [Critical / High / Medium / Low] |
| **Total Findings** | [Number] |
| **Open Findings** | [Number] |
| **Closed Findings** | [Number] |

### 1.2 Summary Statement

[Organization Name] conducted a segmentation validation exercise for the period [Start Date] to [End Date] in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.37. The assessment evaluated the effectiveness of network boundary controls, inter-zone traffic flows, and firewall rule sets across [number] defined network segments.

**Overall Assessment:** [Provide 2–4 sentences summarizing the effectiveness of segmentation controls, the most critical risks identified, and confidence in the current segmentation architecture.]

### 1.3 Key Highlights

- **Zones Assessed:** [Number] network segmentation zones validated
- **Firewall Rules Reviewed:** [Number] rule sets reviewed across [Number] firewall devices
- **Critical/High Findings:** [Number] findings requiring immediate remediation
- **Repeat Findings:** [Number] findings carried over from previous assessment cycle
- **Remediation Rate (Prior Cycle):** [X]% of findings from [Previous Period] have been remediated

---

## 2. Purpose and Scope

### 2.1 Purpose

This Segmentation Validation Report documents the results of penetration testing and technical validation activities performed to assess the effectiveness of network segmentation controls implemented at [Organization Name]. The report fulfils the mandatory semi-annual reporting obligation under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, Clause 10.37**, which requires financial institutions to validate that network segmentation controls are operating as intended and that unauthorized lateral movement between network zones is prevented.

The objectives of this assessment are to:

- Verify that network segmentation boundaries are technically enforced and functioning as designed
- Identify misconfigurations, excessive trust relationships, or unintended communication pathways between zones
- Validate that firewall rule sets are aligned with the principle of least privilege
- Confirm that critical systems (e.g., core banking, payment infrastructure) are adequately isolated from general corporate and internet-facing networks
- Provide management with an evidenced assurance opinion on the state of network segmentation controls

### 2.2 Regulatory Basis

*Reference the specific BNM RMiT clauses and any related Malaysian regulatory obligations that mandate this artifact.*

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.37 | Financial institutions must implement and validate network segmentation to limit the propagation of security incidents and protect critical systems |
| BNM RMiT Policy Document | Clause 10.36 | Network architecture must enforce segmentation between zones of different sensitivity levels |
| Personal Data Protection Act 2010 (PDPA) | Part III | Personal data processed on segmented systems must remain protected and segregated from unauthorized access |
| [Additional Standard, e.g., ISO 27001] | [Clause] | [Requirement Summary] |

### 2.3 Scope

*Define the boundaries of this assessment, including which systems, network zones, and infrastructure components are in scope. Explicitly state any exclusions and the rationale.*

**In Scope:**

- [Network Zone 1, e.g., DMZ / Internet-Facing Zone]
- [Network Zone 2, e.g., Core Banking Zone]
- [Network Zone 3, e.g., Payment Processing Zone]
- [Network Zone 4, e.g., Management / Out-of-Band Zone]
- [Network Zone 5, e.g., User / Corporate LAN Zone]
- [Network Zone 6, e.g., Development / Test Zone]
- All firewall devices and network access control (NAC) systems enforcing zone boundaries
- Relevant network devices: routers, switches, load balancers with ACL responsibilities

**Out of Scope:**

| Excluded Component | Rationale for Exclusion |
|---|---|
| [System / Zone Name] | [e.g., Undergoing major infrastructure migration — separate assessment scheduled] |
| [System / Zone Name] | [e.g., Managed by third-party provider — covered under separate vendor assurance program] |
| [System / Zone Name] | [e.g., Decommissioning in progress] |

### 2.4 Assessment Period

| Milestone | Date |
|---|---|
| Assessment Commencement | [Date] |
| Active Testing Window | [Start Date] to [End Date] |
| Draft Report Issued | [Date] |
| Management Response Deadline | [Date] |
| Final Report Issued | [Date] |
| Next Assessment Due | [Date] |

---

## 3. Scope and Methodology

### 3.1 Testing Approach

*Describe the technical methodology used to validate segmentation effectiveness, including penetration testing techniques, tools, and assessment frameworks applied.*

The segmentation validation was conducted using a combination of automated scanning, manual penetration testing, and configuration review techniques. The assessment followed the methodology defined in [Organization Name]'s **Vulnerability Management Policy** and is aligned with industry-standard frameworks including **PTES (Penetration Testing Execution Standard)** and **OWASP Testing Guide**.

The testing approach comprised the following phases:

| Phase | Activity | Description |
|---|---|---|
| 1 | Reconnaissance & Planning | Review of network architecture diagrams, firewall rule sets, and prior assessment findings |
| 2 | Automated Scanning | Deployment of network scanners to identify accessible hosts, open ports, and services across zone boundaries |
| 3 | Manual Penetration Testing | Attempt to traverse zone boundaries using known techniques (e.g., pivot attacks, VLAN hopping, firewall bypass) |
| 4 | Firewall Rule Review | Analysis of firewall configurations against approved rule sets and the principle of least privilege |
| 5 | Configuration Review | Review of network device configurations (routers, switches, load balancers) for segmentation weaknesses |
| 6 | Findings Validation | Confirmation and proof-of-concept development for identified weaknesses |
| 7 | Reporting | Documentation of findings, risk ratings, and remediation recommendations |

### 3.2 Testing Tools and Technologies

*List the tools used during the assessment. Ensure tool versions are documented for audit trail purposes.*

| Tool | Version | Purpose |
|---|---|---|
| [e.g., Nmap] | [Version] | Network discovery and port scanning across zone boundaries |
| [e.g., Nessus / Tenable.sc] | [Version] | Vulnerability scanning and configuration assessment |
| [e.g., Metasploit Framework] | [Version] | Manual exploitation and pivot testing |
| [e.g., Wireshark] | [Version] | Traffic analysis and protocol inspection |
| [e.g., Firewall Analyzer Tool] | [Version] | Firewall rule set review and optimization analysis |
| [e.g., Nipper] | [Version] | Network device configuration audit |
| [Additional Tool] | [Version] | [Purpose] |

### 3.3 Testing Credentials and Access

| Access Type | Details |
|---|---|
| **Testing Account(s) Used** | [Account names / types, e.g., unprivileged domain user, no-access DMZ host] |
| **Starting Network Position** | [e.g., Corporate LAN — simulating an insider threat or compromised endpoint] |
| **Privileged Access Granted** | [Yes / No — specify if any pre-authorized elevated access was used for specific phases] |
| **Production System Impact** | [e.g., Read-only testing; no production systems modified] |

### 3.4 Testing Authorization

All testing activities were conducted under formal written authorization in accordance with [Organization Name]'s Change Management and Security Testing policies.

| Field | Details |
|---|---|
| **Authorization Reference** | [Change Request / Authorization Document ID] |
| **Authorized By** | [Name, Title] |
| **Authorization Date** | [Date] |
| **Change Window** | [Date/Time range for testing] |

---

## 4. Network Segmentation Zones

### 4.1 Segmentation Architecture Overview

*Provide a description of the overall network segmentation architecture, including the logical design principles and the trust model applied. Include or reference a network diagram.*

[Organization Name]'s network is segmented into distinct zones based on data sensitivity, system criticality, and regulatory requirements. The segmentation architecture enforces the principle of **zero implicit trust between zones**, requiring all inter-zone traffic to traverse a security control point (firewall, proxy, or NAC) with explicit permit rules.

**Reference:** Network Architecture Diagram — [Document ID / Diagram Reference]

### 4.2 Zone Definitions and Trust Levels

*Document each network zone, its purpose, trust level, and the systems it contains. This table should reflect the current state of the network and be updated at each assessment cycle.*

| Zone ID | Zone Name | Trust Level | Description | Key Systems / Assets | Data Classification |
|---|---|---|---|---|---|
| Z1 | Internet / Untrusted Zone | Untrusted | External-facing systems and DMZ entry points | Web application firewall, reverse proxy, public DNS | Public |
| Z2 | DMZ / Perimeter Zone | Low | Internet-accessible services with controlled inbound access | Public web servers, API gateways, email relay | Public / Internal |
| Z3 | Corporate LAN / User Zone | Medium | Standard end-user workstations and productivity systems | User endpoints, printers, collaboration tools | Internal / Confidential |
| Z4 | Application Zone | High | Internal business application servers | Core banking application servers, middleware, ERP | Confidential |
| Z5 | Core Banking / Critical Zone | Critical | Mission-critical financial processing systems | Core banking engine, payment switch, SWIFT infrastructure | Restricted |
| Z6 | Database Zone | Critical | Centralized data stores for core systems | Production databases, data warehouse | Restricted |
| Z7 | Management / OOB Zone | Restricted | Out-of-band network management infrastructure | Jump servers, SIEM, network management systems | Restricted |
| Z8 | Development / Test Zone | Medium | Non-production environments | Dev/test/staging servers | Internal / Confidential |
| [Zn] | [Zone Name] | [Level] | [Description] | [Key Systems] | [Classification] |

### 4.3 Permitted Inter-Zone Traffic Matrix

*Document the approved communication flows between zones. Any traffic not listed here should be denied by default. This matrix should be validated against actual firewall rules during each assessment cycle.*

| Source Zone | Destination Zone | Protocol / Port | Justification | Control Point | Status |
|---|---|---|---|---|---|
| Z2 (DMZ) | Z4 (Application) | HTTPS/443 | Application tier communication | Firewall FW-01 | Permitted |
| Z3 (Corporate LAN) | Z4 (Application) | HTTPS/443, RDP/3389 (jump server only) | User access to applications | Firewall FW-02 | Permitted |
| Z4 (Application) | Z6 (Database) | TCP/1433 (MSSQL) | Application-to-database queries | Firewall FW-03 | Permitted |
| Z7 (Management) | All Zones | SSH/22, HTTPS/443 (management interfaces only) | Centralized management access | Firewall FW-07, ACLs | Permitted |
| Z3 (Corporate LAN) | Z5 (Core Banking) | **Denied** | No direct user access to core banking | Firewall FW-02 | Denied |
| Z2 (DMZ) | Z6 (Database) | **Denied** | DMZ must not reach database zone directly | Firewall FW-01 | Denied |
| [Source] | [Destination] | [Protocol/Port] | [Justification] | [Control Point] | [Status] |

### 4.4 Segmentation Validation Results by Zone

*Summarize the results of segmentation validation testing for each zone boundary tested during this assessment cycle.*

| Zone Boundary Tested | Test Performed | Expected Result | Actual Result | Pass / Fail | Finding Ref |
|---|---|---|---|---|---|
| Z2 → Z5 (DMZ to Core Banking) | Attempted direct TCP connection to core banking ports | Connection blocked | [Result] | [Pass/Fail] | [Finding ID or N/A] |
| Z3 → Z6 (Corporate LAN to Database) | Attempted direct database query from workstation | Connection blocked | [Result] | [Pass/Fail] | [Finding ID or N/A] |
| Z2 → Z6 (DMZ to Database) | Port scan and connection attempt from DMZ host | All ports blocked | [Result] | [Pass/Fail] | [Finding ID or N/A] |
| Z8 → Z5 (Dev to Core Banking) | Attempted lateral movement from dev environment | Connection blocked | [Result] | [Pass/Fail] | [Finding ID or N/A] |
| Z1 → Z4 (Internet to Application) | Direct inbound connection attempt bypassing DMZ | Connection blocked | [Result] | [Pass/Fail] | [Finding ID or N/A] |
| [Zone Boundary] | [Test] | [Expected] | [Actual] | [Pass/Fail] | [Finding ID] |

---

## 5. Firewall Rule Review

### 5.1 Firewall Inventory

*List all firewall devices and network access control systems reviewed during this assessment cycle.*

| Device ID | Hostname / IP | Type / Model | Firmware Version | Location | Zones Protected | Last Rule Review |
|---|---|---|---|---|---|---|
| FW-01 | [Hostname] | [e.g., Palo Alto PA-3220] | [Version] | [Location, e.g., DC1 Perimeter] | Z1 ↔ Z2 | [Date] |
| FW-02 | [Hostname] | [e.g., Cisco ASA 5545-X] | [Version] | [Location] | Z2 ↔ Z3, Z2 ↔ Z4 | [Date] |
| FW-03 | [Hostname] | [e.g., FortiGate 600E] | [Version] | [Location] | Z4 ↔ Z6 | [Date] |
| [Device ID] | [Hostname] | [Type/Model] | [Version] | [Location] | [Zones] | [Date] |

### 5.2 Firewall Rule Review Schedule

*Document the schedule and cadence for firewall rule reviews, aligned with RMiT requirements and [Organization Name]'s internal policy.*

| Review Type | Frequency | Responsible Party | Last Completed | Next Due |
|---|---|---|---|---|
| Full Firewall Rule Audit | Semi-Annual | Vulnerability Management Lead / Network Security Team | [Date] | [Date] |
| Rule Recertification (Rule Owner Sign-off) | Annual | Business / Application Owners | [Date] | [Date] |
| Ad-hoc Review (post-incident or change) | As required | Network Security Team | [Date] | N/A |
| Firewall Configuration Backup Verification | Monthly | Network Operations | [Date] | [Date] |

### 5.3 Firewall Rule Review Findings

*Summarize the results of the firewall rule review, including overly permissive rules, stale rules, shadow rules, and rules without documented business justification.*

| Finding ID | Device | Rule Description | Issue Type | Risk Rating | Recommendation |
|---|---|---|---|---|---|
| FW-001 | FW-02 | [Rule description, e.g., "Any-Any permit rule on VLAN 10"] | Overly Permissive | High | Restrict to specific source/destination and required ports |
| FW-002 | FW-01 | [Rule description, e.g., "Permit rule last matched 18 months ago"] | Stale Rule | Medium | Review with rule owner; decommission if no longer required |
| FW-003 | FW-03 | [Rule description] | Missing Justification | Low | Obtain business justification or remove rule |
| [Finding ID] | [Device] | [Description] | [Issue Type] | [Rating] | [Recommendation] |

### 5.4 Firewall Rule Summary Statistics

| Metric | FW-01 | FW-02 | FW-03 | Total |
|---|---|---|---|---|
| Total Rules Reviewed | [#] | [#] | [#] | [#] |
| Rules with Business Justification | [#] | [#] | [#] | [#] |
| Overly Permissive Rules | [#] | [#] | [#] | [#] |
| Stale Rules (>12 months, no hits) | [#] | [#] | [#] | [#] |
| Rules Without Owner | [#] | [#] | [#] | [#] |
| Rules Recommended for Removal | [#] | [#] | [#] | [#] |

---

## 6. Scanning Scope and Frequency

### 6.1 Vulnerability Scanning Programme

*Describe the vulnerability scanning programme supporting the segmentation validation exercise, including the types of scans performed, coverage, and scheduling.*

[Organization Name] maintains a continuous vulnerability scanning programme that feeds directly into the segmentation validation process. Scanning activities are categorized as follows:

| Scan Type | Description | Scope | Frequency | Tool Used |
|---|---|---|---|---|
| Internal Network Scan (Unauthenticated) | Identifies exposed services and open ports across zone boundaries | All internal zones | Weekly | [Tool Name] |
| Internal Network Scan (Authenticated) | Deep vulnerability assessment of hosts with agent or credential-based access | All servers and critical endpoints | Monthly | [Tool Name] |
| Perimeter / External Scan | Assessment of internet-facing attack surface | Z1/Z2 (DMZ and perimeter) | Weekly | [Tool Name] |
| Firewall Configuration Scan | Automated review of firewall rule sets for compliance and best practice | All firewall devices | Monthly | [Tool Name] |
| Segmentation Penetration Test | Manual testing of zone boundary controls | All zone boundaries | Semi-Annual | Manual + Tools |
| Red Team Exercise | Adversary simulation including segmentation bypass attempts | Full environment | Annual | [Vendor/Team] |

### 6.2 Scan Coverage for This Assessment Period

*Document the actual scan coverage achieved during this assessment cycle, noting any gaps.*

| Zone | Scan Type | Hosts Targeted | Hosts Scanned | Coverage % | Reason for Gap (if any) |
|---|---|---|---|---|---|
| Z1 — Internet Zone | External Unauthenticated | [#] | [#] | [%] | [N/A or Reason] |
| Z2 — DMZ | Internal Unauthenticated | [#] | [#] | [%] | [N/A or Reason] |
| Z3 — Corporate LAN | Internal Authenticated | [#] | [#] | [%] | [N/A or Reason] |
| Z4 — Application Zone | Internal Authenticated | [#] | [#] | [%] | [N/A or Reason] |
| Z5 — Core Banking | Internal Authenticated | [#] | [#] | [%] | [N/A or Reason] |
| Z6 — Database Zone | Internal Authenticated | [#] | [#] | [%] | [N/A or Reason] |
| Z7 — Management Zone | Internal Authenticated | [#] | [#] | [%] | [N/A or Reason] |
| Z8 — Dev/Test Zone | Internal Unauthenticated | [#] | [#] | [%] | [N/A or Reason] |

---

## 7. Severity Classification and SLA

### 7.1 Severity Classification Framework

*Define the severity ratings used to classify findings in this report, aligned with [Organization Name]'s vulnerability management policy and industry standards (e.g., CVSS).*

| Severity | CVSS Score Range | Description | Example Finding Types |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Exploitable vulnerability allowing unauthorized traversal of a critical zone boundary with no compensating controls. Immediate risk to core banking or payment systems. | Direct unauthenticated access from DMZ to Core Banking zone; complete firewall bypass |
| **High** | 7.0 – 8.9 | Significant segmentation weakness that could allow lateral movement between zones with limited effort or privilege escalation. | Overly permissive firewall rules allowing broad inter-zone access; VLAN hopping vulnerability |
| **Medium** | 4.0 – 6.9 | Segmentation weakness that increases risk but requires multiple steps or conditions to exploit. | Stale firewall rules with potential for misuse; weak network device credentials; unnecessary trust relationships |
| **Low** | 0.1 – 3.9 | Minor misconfiguration or deviation from best practice with limited direct exploitability. | Informational exposure; missing logging on firewall rules; documentation gaps |
| **Informational** | N/A | Observation that does not represent a current vulnerability but warrants attention or monitoring. | Architectural recommendations; improvement opportunities |

### 7.2 Remediation SLA

*Define the required remediation timeframes for each severity level, as mandated by [Organization Name]'s Vulnerability Management Policy.*

| Severity | Remediation Deadline | Escalation Trigger | Compensating Control Accepted? |
|---|---|---|---|
| **Critical** | Within **24 hours** of identification (isolation or compensating control); full remediation within **7 calendar days** | Immediate escalation to CISO and Head of Technology Risk | Yes — with documented approval and defined remediation plan |
| **High** | Full remediation within **30 calendar days** | Escalate to Technology Risk Committee if not remediated within SLA | Yes — with documented approval and timeline |
| **Medium** | Full remediation within **90 calendar days** | Flag in monthly vulnerability management report | Yes — with documented rationale |
| **Low** | Full remediation within **180 calendar days** | Include in quarterly review | Yes |
| **Informational** | Reviewed and actioned within **next assessment cycle** | N/A | N/A |

### 7.3 SLA Compliance — Current Cycle

| Severity | Total Findings | Remediated Within SLA | Remediated Outside SLA | Open (Within SLA) | Open (SLA Breached) |
|---|---|---|---|---|---|
| Critical | [#] | [#] | [#] | [#] | [#] |
| High | [#] | [#] | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] | [#] | [#] |
| Low | [#] | [#] | [#] | [#] | [#] |
| Informational | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

---

## 8. Key Findings and Observations

### 8.1 Findings Summary

*Summarize all findings identified during the segmentation validation exercise. Each finding must be assigned a unique identifier, severity rating, and remediation owner. Findings should be ordered by severity (Critical to Informational).*

| Finding ID | Title | Zone / Component | Severity | CVSS Score | Status | Remediation Owner | Target Date |
|---|---|---|---|---|---|---|---|
| SVR-2025-001 | [e.g., Direct TCP Access from DMZ to Core Banking VLAN] | Z2 → Z5 | Critical | [Score] | [Open / In Progress / Closed] | [Owner Name] | [Date] |
| SVR-2025-002 | [e.g., Overly Permissive Any-Any Rule on FW-02] | Z3 / FW-02 | High | [Score] | [Open / In Progress / Closed] | [Owner Name] | [Date] |
| SVR-2025-003 | [e.g., VLAN Hopping Possible via Double-Tagging on Access Switch] | Z3 → Z4 | High | [Score] | [Open / In Progress / Closed] | [Owner Name] | [Date] |
| SVR-2025-004 | [e.g., Stale Firewall Rules — 23 Rules with No Hits in 12+ Months] | FW-01, FW-03 | Medium | [Score] | [Open / In Progress / Closed] | [Owner Name] | [Date] |
| SVR-2025-005 | [e.g., Missing Egress Filtering in Application Zone] | Z4 | Medium | [Score] | [Open / In Progress / Closed] | [Owner Name] | [Date] |
| [Finding ID] | [Title] | [Zone/Component] | [Severity] | [Score] | [Status] | [Owner] | [Date] |

### 8.2 Detailed Findings

*For each finding identified in Section 8.1, provide a detailed description. Use the template below for each finding.*

---

#### Finding SVR-2025-001: [Finding Title]

| Field | Details |
|---|---|
| **Finding ID** | SVR-2025-001 |
| **Title** | [Full Finding Title] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **CVSS Score** | [Score] |
| **CVSS Vector** | [CVSS:3.1/AV:.../AC:.../PR:.../UI:.../S:.../C:.../I:.../A:...] |
| **Zone / Component Affected** | [Zone Name(s) / System(s) / Device(s)] |
| **Status** | [Open / In Progress / Closed] |
| **Remediation Owner** | [Name, Title] |
| **Target Remediation Date** | [Date] |
| **Repeat Finding?** | [Yes — previously identified in [Prior Report ID] / No] |

**Description:**
[Provide a clear, technical description of the vulnerability or misconfiguration identified. Explain what was found, where it exists, and why it represents a risk to the organization.]

**Evidence:**
[Describe the evidence collected to substantiate this finding. Reference screenshots, packet captures, or tool output included in the appendices. Do not include raw credentials or sensitive data in the report body.]

- Evidence Reference: Appendix [X] — [Description of evidence]
- Tool Output Reference: Appendix [Y] — [Description]

**Risk Impact:**
[Describe the potential business and security impact if this finding were exploited. Consider confidentiality, integrity, and availability implications, and reference relevant data classifications or systems at risk.]

**Recommendation:**
[Provide specific, actionable remediation steps. Include technical guidance where appropriate (e.g., specific firewall rule changes, configuration settings). Distinguish between immediate mitigations and long-term remediation.]

*Immediate Mitigation (if Critical/High):*
- [Step 1]
- [Step 2]

*Long-Term Remediation:*
- [Step 1]
- [Step 2]

**Management Response:**
> [To be completed by the Remediation Owner. Confirm acceptance of the finding, proposed remediation approach, responsible party, and target completion date. If the finding is disputed, provide justification.]

**Remediation Status Update:**
[To be completed at time of report finalization or follow-up review.]

---

*(Repeat Section 8.2 template for each finding)*

---

### 8.3 Comparison with Previous Assessment

*Compare the current assessment findings with the prior cycle to identify trends, repeat findings, and overall improvement or degradation in the segmentation posture.*

| Metric | [Prior Period] | [Current Period] | Trend |
|---|---|---|---|
| Total Findings | [#] | [#] | [↑ / ↓ / →] |
| Critical Findings | [#] | [#] | [↑ / ↓ / →] |
| High Findings | [#] | [#] | [↑ / ↓ / →] |
| Medium Findings | [#] | [#] | [↑ / ↓ / →] |
| Repeat Findings | [#] | [#] | [↑ / ↓ / →] |
| SLA Breach Rate | [%] | [%] | [↑ / ↓ / →] |
| Overall Risk Rating | [Rating] | [Rating] | [↑ / ↓ / →] |

---

## 9. Remediation Tracking

### 9.1 Open Findings Register

*This register tracks all open findings across current and prior assessment cycles until closure. It serves as the authoritative record for remediation status and is reviewed at each Technology Risk Committee meeting.*

| Finding ID | Assessment Cycle | Title | Severity | Remediation Owner | Original Target Date | Revised Target Date | Current Status | Days Open | Escalated? |
|---|---|---|---|---|---|---|---|---|---|
| SVR-2025-001 | H1 2025 | [Title] | Critical | [Owner] | [Date] | [Date] | In Progress | [#] | [Yes/No] |
| SVR-2025-002 | H1 2025 | [Title] | High | [Owner] | [Date] | [Date] | Open | [#] | [Yes/No] |
| SVR-2024-003 | H2 2024 | [Title — carried over] | Medium | [Owner] | [Date] | [Date] | In Progress | [#] | [Yes/No] |
| [Finding ID] | [Cycle] | [Title] | [Severity] | [Owner] | [Date] | [Date] | [Status] | [#] | [Yes/No] |

### 9.2 Closed Findings — Current Cycle

*Document findings that have been fully remediated and verified closed during this assessment cycle.*

| Finding ID | Title | Severity | Closure Date | Verified By | Verification Method | Notes |
|---|---|---|---|---|---|---|
| SVR-2024-001 | [Title] | High | [Date] | [Name] | Re-scan / Manual Verification | [Notes] |
| SVR-2024-002 | [Title] | Medium | [Date] | [Name] | Configuration Review | [Notes] |
| [Finding ID] | [Title] | [Severity] | [Date] | [Name] | [Method] | [Notes] |

### 9.3 Remediation Exceptions and Risk Acceptances

*Document any findings for which a formal risk acceptance has been approved in lieu of remediation. Risk acceptances must be reviewed and renewed at each assessment cycle.*

| Finding ID | Title | Severity | Risk Acceptance Rationale | Compensating Controls | Accepted By | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|---|
| [Finding ID] | [Title] | [Severity] | [Business/Technical rationale for accepting risk rather than remediating] | [Describe any compensating controls in place] | [Name, Title] | [Date] | [Date — must be ≤12 months] |

---

## 10. Roles and Responsibilities

*This section defines the roles and responsibilities for the segmentation validation programme, using a RACI model (Responsible, Accountable, Consulted, Informed).*

### 10.1 RACI Matrix

| Activity | Vulnerability Mgmt Lead | CISO / Head of Tech Risk | Network Security Team | IT Infrastructure Team | Internal Audit | Business / App Owners | Technology Risk Committee |
|---|---|---|---|---|---|---|---|
| Define segmentation architecture and zone design | C | A | R | C | I | C | I |
| Approve segmentation policy and standards | C | A | C | I | I | I | R |
| Plan and schedule segmentation validation exercise | R | A | C | I | I | I | I |
| Conduct penetration testing and technical validation | R | I | C | C | I | I | I |
| Conduct firewall rule review | R | I | R | C | I | C | I |
| Review and validate findings | R | A | C | C | C | I | I |
| Assign and track remediation owners | R | A | C | R | I | C | I |
| Implement firewall rule changes and remediations | C | I | C | R | I | R | I |
| Verify and close findings post-remediation | R | I | C | C | C | I | I |
| Approve risk acceptances for open findings | C | R | C | C | C | C | A |
| Report to Technology Risk Committee | R | R | I | I | I | I | A |
| Submit evidence to Internal Audit / BNM | C | R | C | I | A | I | I |
| Review and approve this report | R | A | C | C | C | I | A |

> **RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 10.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Vulnerability Management Lead | [Name] | Technology Risk | [Email] |
| CISO | [Name] | Information Security | [Email] |
| Network Security Team Lead | [Name] | IT Infrastructure | [Email] |
| Internal Audit Representative | [Name] | Internal Audit | [Email] |
| Penetration Test Lead (Internal/External) | [Name / Vendor] | [Department / Vendor] | [Email] |

---

## 11. Review and Approval

### 11.1 Version History

*Record all versions of this document, including draft and final iterations.*

| Version | Date | Author | Changes / Remarks |
|---|---|---|---|
| 0.1 | [Date] | [Author Name] | Initial draft — assessment findings collated |
| 0.2 | [Date] | [Author Name] | Incorporated management responses |
| 0.3 | [Date] | [Author Name] | Addressed review comments from Network Security Team |
| 1.0 | [Date] | [Author Name] | Final version — approved for issue |

### 11.2 Approval Sign-Off

*This report requires formal sign-off from the following stakeholders before it is considered final and submitted for regulatory purposes.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Vulnerability Management Lead (Preparer) | [Name] | [Signature] | [Date] |
| Head of Network Security / IT Infrastructure | [Name] | [Signature] | [Date] |
| CISO / Head of Technology Risk (Approver) | [Name] | [Signature] | [Date] |
| Internal Audit (Reviewer) | [Name] | [Signature] | [Date] |
| Technology Risk Committee Chair (Endorser) | [Name] | [Signature] | [Date] |

### 11.3 Distribution List

| Recipient | Role | Copy Type |
|---|---|---|
| [Name] | CISO | Controlled Copy |
| [Name] | Head of IT Infrastructure | Controlled Copy |
| [Name] | Technology Risk Committee | Controlled Copy |
| [Name] | Internal Audit | Controlled Copy |
| [Name] | External Auditors (if applicable) | Controlled Copy — upon request |
| [Name] | BNM Examination Team (if applicable) | Controlled Copy — upon request |

---

## 12. References

*List all regulatory documents, internal policies, and industry standards referenced in this report.*

| Reference | Document / Clause | Title | Issuing Body | Effective Date |
|---|---|---|---|---|
| 1 | BNM RMiT — Clause 10.37 | Risk Management in Technology — Network Segmentation Validation | Bank Negara Malaysia | [Date] |
| 2 | BNM RMiT — Clause 10.36 | Risk Management in Technology — Network Segmentation Architecture | Bank Negara Malaysia | [Date] |
| 3 | BNM RMiT — Clause 10.33–10.35 | Risk Management in Technology — Network Security Controls | Bank Negara Malaysia | [Date] |
| 4 | PDPA 2010 — Part III | Personal Data Protection Act 2010 — Processing of Personal Data | Parliament of Malaysia | 2013 |
| 5 | [Organization Name] Vulnerability Management Policy | [Document ID] | [Organization Name] | [Date] |
| 6 | [Organization Name] Network Security Standards | [Document ID] | [Organization Name] | [Date] |
| 7 | [Organization Name] Firewall Management Policy | [Document ID] | [Organization Name] | [Date] |
| 8 | NIST SP 800-115 | Technical Guide to Information Security Testing and Assessment | NIST | September 2008 |
| 9 | PTES — Penetration Testing Execution Standard | Penetration Testing Methodology | PTES | [Version] |
| 10 | ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | ISO/IEC | 2022 |

---

## 13. Appendices

### Appendix A — Network Architecture Diagram

*Include or attach the current approved network architecture diagram showing all segmentation zones, zone boundaries, firewall placement, and inter-zone trust flows. The diagram must be dated and version-controlled.*

**Reference Diagram:** [Network Architecture Diagram — Document ID / File Reference]
**Diagram Version:** [Version]
**Last Updated:** [Date]
**Approved By:** [Name, Title]

> *Attach diagram here or reference secure document repository location: [Repository Path / SharePoint Link]*

---

### Appendix B — Penetration Test Evidence

*Include screenshots, tool outputs, and proof-of-concept evidence for findings documented in Section 8. Evidence must be clearly labelled with the corresponding Finding ID.*

| Evidence ID | Finding ID | Description | File / Attachment Reference |
|---|---|---|---|
| EVD-001 | SVR-2025-001 | [e.g., Screenshot of successful TCP connection from DMZ host to Core Banking port 8443] | [File Reference] |
| EVD-002 | SVR-2025-002 | [e.g., Nmap output showing open ports accessible across zone boundary] | [File Reference] |
| EVD-003 | SVR-2025-003 | [e.g., Firewall rule export showing Any-Any permit rule] | [File Reference] |
| [EVD-ID] | [Finding ID] | [Description] | [File Reference] |

> *Detailed evidence files are stored in the secure evidence repository at: [Repository Path / Encrypted Evidence Package Reference]*

---

### Appendix C — Firewall Rule Export Summary

*Attach or reference the raw firewall rule exports reviewed during this assessment. Exports must be sanitized to remove sensitive IP addresses or credentials before inclusion in this report body; full exports are stored in the secure evidence repository.*

| Device | Rule Count | Export Date | Location |
|---|---|---|---|
| FW-01 | [#] | [Date] | [Repository Reference] |
| FW-02 | [#] | [Date] | [Repository Reference] |
| FW-03 | [#] | [Date] | [Repository Reference] |
| [Device] | [#] | [Date] | [Repository Reference] |

---

### Appendix D — Vulnerability Scan Raw Results

*Reference the raw vulnerability scan outputs for each zone assessed during this cycle. Full scan reports are stored in the vulnerability management platform.*

| Scan ID | Zone Scanned | Scan Type | Date | Tool | Platform Reference |
|---|---|---|---|---|---|
| SCN-2025-001 | Z2 — DMZ | Unauthenticated | [Date] | [Tool] | [Platform / Ticket Reference] |
| SCN-2025-002 | Z3 — Corporate LAN | Authenticated | [Date] | [Tool] | [Platform / Ticket Reference] |
| SCN-2025-003 | Z5 — Core Banking | Authenticated | [Date] | [Tool] | [Platform / Ticket Reference] |
| [Scan ID] | [Zone] | [Type] | [Date] | [Tool] | [Reference] |

---

### Appendix E — Remediation Evidence

*For findings closed during this assessment cycle, document the evidence of remediation (re-scan results, change records, configuration screenshots). Evidence must be referenced by Finding ID.*

| Finding ID | Remediation Action Taken | Change Reference | Verification Method | Verified By | Closure Date |
|---|---|---|---|---|---|
| SVR-2024-001 | [Description of remediation, e.g., Firewall rule updated to restrict source to specific host] | [Change Ticket ID] | Re-scan confirmed port blocked | [Name] | [Date] |
| [Finding ID] | [Remediation Description] | [Change Ref] | [Verification Method] | [Verifier] | [Date] |

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — the central bank of Malaysia |
| CVSS | Common Vulnerability Scoring System — an industry standard for assessing the severity of security vulnerabilities |
| DMZ | Demilitarized Zone — a network segment that acts as a buffer between untrusted external networks and internal networks |
| NACSA | National Cyber Security Agency of Malaysia |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| RMiT | Risk Management in Technology — BNM Policy Document governing technology risk for financial institutions |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| Segmentation | The practice of dividing a network into distinct zones with controlled communication pathways between them |
| SIEM | Security Information and Event Management — a platform for aggregating and analysing security event data |
| VLAN | Virtual Local Area Network — a logical network segment created within a physical network infrastructure |
| Zero Trust | A security model that assumes no implicit trust between systems, regardless of network location |
| [Term] | [Definition] |

---

*End of Document*

---

**Document Control:** This document is classified **Confidential** and is subject to [Organization Name]'s Information Classification and Handling Policy. It must be stored in the designated secure document management system and disposed of in accordance with the data retention schedule. Physical copies must be shredded when no longer required.