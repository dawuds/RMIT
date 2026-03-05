# Firewall Audit Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Security Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

> **Confidentiality Notice:** This document contains confidential information intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws including the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Audit Methodology and Standards](#3-audit-methodology-and-standards)
4. [Audit Universe and Risk-Based Plan](#4-audit-universe-and-risk-based-plan)
5. [Network Architecture Overview](#5-network-architecture-overview)
6. [Network Segmentation Zones](#6-network-segmentation-zones)
7. [Firewall Rule Review Schedule](#7-firewall-rule-review-schedule)
8. [Key Findings and Observations](#8-key-findings-and-observations)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Executive Summary

*Provide a high-level summary of the audit engagement, overall firewall posture, significant findings, and recommended actions. This section should be concise enough for senior management consumption without requiring technical expertise.*

**Audit Period:** [Audit Start Date] to [Audit End Date]

**Audit Lead:** [Audit Lead Name], [Title]

**Overall Risk Rating:** [Critical / High / Medium / Low]

### 1.1 Audit Overview

[Organization Name] conducted a quarterly Firewall Audit in accordance with Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document requirements, specifically Clause 10.38. This audit examined the firewall rule base across [number] firewall devices covering [number] network segments.

### 1.2 Summary of Findings

| Risk Rating | Number of Findings | Remediated | Outstanding |
|---|---|---|---|
| Critical | [#] | [#] | [#] |
| High | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] |
| Low | [#] | [#] | [#] |
| Informational | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** |

### 1.3 Overall Assessment

*State the auditor's overall conclusion on the organization's firewall security posture, compliance with internal policy, and alignment with RMiT requirements.*

> [Provide 2–3 sentences summarizing the overall security posture, whether controls are operating effectively, and the organization's general compliance status with BNM RMiT Clause 10.38.]

### 1.4 Key Recommendations

*List the top three to five priority actions arising from this audit.*

1. **[Recommendation 1]** — [Brief description and expected outcome]
2. **[Recommendation 2]** — [Brief description and expected outcome]
3. **[Recommendation 3]** — [Brief description and expected outcome]
4. **[Recommendation 4]** — [Brief description and expected outcome]
5. **[Recommendation 5]** — [Brief description and expected outcome]

---

## 2. Purpose and Scope

### 2.1 Purpose

This Firewall Audit Report documents the findings, observations, and recommendations arising from the quarterly review of [Organization Name]'s firewall rule base. The audit is conducted to:

- Identify unused, redundant, or overly permissive firewall rules that may increase the organization's attack surface.
- Assess alignment of firewall configurations with the principle of least privilege and defence-in-depth.
- Verify compliance with BNM RMiT Policy Document (Ref: BNM/RH/PD 028-2), specifically **Clause 10.38**, which mandates that financial institutions maintain adequate network security controls, including periodic review of firewall rule sets.
- Support the organization's obligations under **NACSA Cyber Security Framework** and **ISO/IEC 27001:2022 Annex A Control 8.20 (Networks Security)**.

### 2.2 Scope

*Define the boundaries of this audit engagement, including which firewall devices, network zones, and business systems are in scope and explicitly noting any exclusions.*

**In Scope:**

| # | Asset / System | Type | Location | Owner |
|---|---|---|---|---|
| 1 | [Firewall Device Name / Model] | Perimeter Firewall | [Data Centre / Cloud Region] | [Owner Team] |
| 2 | [Firewall Device Name / Model] | Internal Segmentation Firewall | [Location] | [Owner Team] |
| 3 | [Firewall Device Name / Model] | DMZ Firewall | [Location] | [Owner Team] |
| 4 | [Next-Generation Firewall / WAF] | Application Layer | [Location] | [Owner Team] |

**Out of Scope:**

- [List any firewall devices, systems, or network segments explicitly excluded from this audit and the rationale for exclusion.]
- [e.g., Firewall devices under third-party managed service agreements subject to separate SLA review.]
- [e.g., Cloud-native security groups reviewed under a separate Cloud Security Audit.]

### 2.3 Regulatory Context

This audit directly supports compliance with the following regulatory and framework requirements:

| Regulation / Framework | Clause / Control | Requirement Summary |
|---|---|---|
| BNM RMiT | Clause 10.38 | Periodic review of firewall rules and network access controls |
| BNM RMiT | Clause 10.30–10.37 | Network security architecture and segmentation requirements |
| PDPA 2010 | Part III, Section 9 | Security standard for personal data in transit across network boundaries |
| NACSA | CSF Control NS-3 | Network security monitoring and access control review |
| ISO/IEC 27001:2022 | A.8.20, A.8.22 | Networks security; segregation of networks |

---

## 3. Audit Methodology and Standards

*Describe the approach, techniques, and standards used to conduct this audit. This section provides transparency and reproducibility for future audits.*

### 3.1 Audit Approach

This audit followed a **risk-based audit methodology** comprising the following phases:

| Phase | Activity | Duration |
|---|---|---|
| **Planning** | Scope confirmation, audit plan preparation, evidence request | [Date range] |
| **Fieldwork** | Rule base extraction, automated analysis, manual review, interviews | [Date range] |
| **Analysis** | Finding classification, risk rating, management response | [Date range] |
| **Reporting** | Draft report, management review, final issuance | [Date range] |

### 3.2 Techniques Employed

- **Rule base extraction** — Configuration files exported from firewall management consoles for offline analysis.
- **Automated rule analysis** — [Tool Name, e.g., Tufin / AlgoSec / Firemon / Nipper Studio] used to identify unused rules, shadowed rules, overly broad rules (e.g., `ANY/ANY`), and duplicate rules.
- **Manual rule review** — Targeted manual inspection of high-risk rule categories including inbound internet-facing rules, administrative access rules, and rules permitting inter-zone lateral movement.
- **Traffic log correlation** — Firewall traffic logs from the preceding [90 days / quarter] correlated against rule usage to identify rules with zero hit counts.
- **Interviews** — Structured interviews conducted with [Network Security Manager], [Firewall Administrator], and [Application Owner representatives] to validate business justification for flagged rules.
- **Comparison against baseline** — Current rule base compared against the approved baseline configuration documented in [Reference Baseline Document ID].

### 3.3 Standards and References Applied

| Standard | Version / Edition | Relevance |
|---|---|---|
| BNM RMiT Policy Document | [Effective Date of Policy] | Primary regulatory requirement |
| NIST SP 800-41 Rev. 1 | September 2009 | Guidelines on Firewalls and Firewall Policy |
| CIS Benchmark for [Firewall Vendor] | [Version] | Firewall hardening benchmarks |
| ISO/IEC 27001:2022 | 2022 | Information security management controls |
| SANS Critical Security Controls | CSC 12 (Boundary Defence) | Industry best practice |
| PCI DSS | v4.0, Requirement 1 | Network access controls (where applicable) |

### 3.4 Risk Rating Criteria

| Rating | Description | Response Timeline |
|---|---|---|
| **Critical** | Immediate exploitation risk; direct threat to confidentiality, integrity, or availability of critical systems | Immediate (within 24 hours) |
| **High** | Significant control weakness; elevated risk of unauthorized access or data exfiltration | 7 calendar days |
| **Medium** | Moderate control gap; exploitable under specific conditions | 30 calendar days |
| **Low** | Minor deviation from best practice; limited direct risk | 90 calendar days |
| **Informational** | Observation for awareness; no immediate risk | Next scheduled review cycle |

---

## 4. Audit Universe and Risk-Based Plan

*Document all firewall assets within the audit universe and the risk-based rationale for prioritizing specific devices or rule sets for detailed review.*

### 4.1 Audit Universe

*List all firewall and network access control assets within the organization's environment, regardless of whether they were included in this audit cycle.*

| Asset ID | Device Name | Model / Vendor | Function | Criticality | Environment |
|---|---|---|---|---|---|
| FW-001 | [Device Name] | [Vendor / Model] | Internet Perimeter | Critical | Production |
| FW-002 | [Device Name] | [Vendor / Model] | DMZ Boundary | High | Production |
| FW-003 | [Device Name] | [Vendor / Model] | Internal Segmentation | High | Production |
| FW-004 | [Device Name] | [Vendor / Model] | Branch Office | Medium | Production |
| FW-005 | [Device Name] | [Vendor / Model] | Development Environment | Low | Non-Production |
| FW-006 | [Device Name] | [Vendor / Model] | Disaster Recovery Site | High | DR |

### 4.2 Risk-Based Selection

*Explain the criteria used to select audit targets for the current quarter and the risk factors that informed prioritization.*

The following risk factors were considered when determining audit priority for this cycle:

- **Change frequency** — Devices with the highest volume of rule changes in the preceding quarter.
- **Criticality of protected assets** — Devices guarding systems classified as critical under the organization's Business Impact Assessment.
- **Last audit date** — Devices not audited within the past 12 months are escalated to higher priority.
- **Known incidents or near-misses** — Devices associated with prior security incidents or anomalous traffic patterns.
- **Regulatory designation** — Devices protecting systems in scope for BNM RMiT, PCI DSS, or PDPA.

| Asset ID | Last Audited | Change Volume (Qtr) | Criticality | Selected This Cycle | Justification |
|---|---|---|---|---|---|
| FW-001 | [Date] | [#] changes | Critical | Yes | Internet-facing; highest attack surface |
| FW-002 | [Date] | [#] changes | High | Yes | DMZ hosts customer-facing services |
| FW-003 | [Date] | [#] changes | High | Yes | Segments core banking systems |
| FW-004 | [Date] | [#] changes | Medium | No | Low change volume; reviewed last quarter |
| FW-005 | [Date] | [#] changes | Low | No | Non-production; lower risk priority |
| FW-006 | [Date] | [#] changes | High | Yes | DR activation test scheduled |

### 4.3 Rule Base Statistics

*Provide quantitative data on the total rule base reviewed to contextualize findings.*

| Device | Total Rules | Rules Reviewed | Unused Rules Identified | Overly Permissive Rules | Duplicate Rules | Rules Recommended for Removal |
|---|---|---|---|---|---|---|
| FW-001 | [#] | [#] | [#] | [#] | [#] | [#] |
| FW-002 | [#] | [#] | [#] | [#] | [#] | [#] |
| FW-003 | [#] | [#] | [#] | [#] | [#] | [#] |
| FW-006 | [#] | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

---

## 5. Network Architecture Overview

*Provide a description and diagram reference for the organization's network architecture. This section establishes context for understanding how firewall devices are positioned and what they protect.*

### 5.1 Architecture Description

[Organization Name]'s network architecture is structured around a **defence-in-depth** model comprising [number] distinct security zones, enforced through a combination of perimeter, DMZ, and internal segmentation firewalls. The architecture is designed to:

- Isolate internet-facing services in a controlled DMZ.
- Restrict lateral movement between internal network segments.
- Enforce granular access controls between user, server, and management zones.
- Provide dedicated isolation for critical financial systems including [Core Banking System / Payment Switches / SWIFT / etc.].

### 5.2 Network Architecture Diagram

*Insert or reference the current approved network architecture diagram. The diagram should show all firewall positions, network zones, trust boundaries, and key system groupings.*

> **[INSERT NETWORK ARCHITECTURE DIAGRAM HERE]**
> *Diagram Reference: [Diagram ID / Version / Date Approved]*
> *Note: If the diagram cannot be embedded, reference the approved network diagram stored at [Document Repository Path / System].*

### 5.3 Key Network Boundaries

| Boundary | Controlling Device | From Zone | To Zone | Primary Purpose |
|---|---|---|---|---|
| Internet to DMZ | FW-001 | Untrusted (Internet) | DMZ | Publish internet-facing services |
| DMZ to Internal | FW-002 | DMZ | Internal LAN | Controlled inbound application traffic |
| User LAN to Server | FW-003 | User VLAN | Server Zone | Restrict user access to servers |
| Server to Core Banking | FW-003 | General Server Zone | Core Banking Zone | Protect critical financial systems |
| Management Access | FW-003 | Management VLAN | All Zones | Privileged administrative access |
| [Additional Boundary] | [Device] | [Zone] | [Zone] | [Purpose] |

---

## 6. Network Segmentation Zones

*Document the network segmentation model, defining each security zone, its purpose, trust level, and the systems it contains. Segmentation is a core RMiT control requirement.*

### 6.1 Zone Definitions

| Zone ID | Zone Name | Trust Level | Description | Key Systems / Assets |
|---|---|---|---|---|
| Z-01 | Internet / Untrusted | None | External untrusted network | N/A |
| Z-02 | DMZ | Low | Perimeter zone for internet-facing services | Web servers, API gateways, Reverse proxies |
| Z-03 | User LAN | Medium | End-user workstation network | User endpoints, VDI |
| Z-04 | General Server Zone | Medium-High | Internal application and file servers | Application servers, file servers |
| Z-05 | Core Banking Zone | High | Critical financial system isolation | Core banking platform, payment switches |
| Z-06 | Database Zone | High | Database server isolation | Production databases, data warehouses |
| Z-07 | Management Zone | High | Out-of-band management access | Jump servers, network management systems |
| Z-08 | Security Zone | High | Security tooling and monitoring | SIEM, vulnerability scanners, PAM |
| Z-09 | DR / BCP Zone | High | Disaster recovery environment | DR replicas, backup systems |
| Z-10 | [Zone Name] | [Trust Level] | [Description] | [Systems] |

### 6.2 Inter-Zone Communication Matrix

*Define the approved communication flows between zones. Traffic not listed in this matrix should be denied by default (implicit deny).*

| Source Zone | Destination Zone | Permitted Traffic | Protocol / Port | Business Justification | Approval Reference |
|---|---|---|---|---|---|
| Z-02 (DMZ) | Z-04 (General Server) | Application tier communication | TCP/[Port] | [Justification] | [Change Ref] |
| Z-03 (User LAN) | Z-04 (General Server) | Internal application access | TCP/443, TCP/[Port] | [Justification] | [Change Ref] |
| Z-04 (General Server) | Z-06 (Database) | Database queries | TCP/[DB Port] | [Justification] | [Change Ref] |
| Z-07 (Management) | All Zones | Administrative access | TCP/22, TCP/3389 | [Justification] | [Change Ref] |
| Z-08 (Security) | All Zones | Security monitoring and scanning | ICMP, TCP/[Port] | [Justification] | [Change Ref] |
| [Source] | [Destination] | [Traffic Type] | [Protocol/Port] | [Justification] | [Change Ref] |

### 6.3 Segmentation Control Assessment

*Summarize the effectiveness of current network segmentation controls against RMiT requirements.*

| Control Objective | RMiT Clause | Status | Observations |
|---|---|---|---|
| Critical systems isolated in dedicated zones | 10.38 | [Compliant / Partial / Non-Compliant] | [Observation] |
| Internet-facing services hosted in DMZ | 10.38 | [Compliant / Partial / Non-Compliant] | [Observation] |
| Default deny posture enforced | 10.38 | [Compliant / Partial / Non-Compliant] | [Observation] |
| Least-privilege rule set applied | 10.38 | [Compliant / Partial / Non-Compliant] | [Observation] |
| Management traffic isolated to dedicated zone | 10.38 | [Compliant / Partial / Non-Compliant] | [Observation] |
| Outbound traffic filtering enforced | 10.38 | [Compliant / Partial / Non-Compliant] | [Observation] |

---

## 7. Firewall Rule Review Schedule

*Document the formal schedule for ongoing firewall rule reviews, demonstrating a structured and repeatable control process as required by BNM RMiT.*

### 7.1 Review Cadence

| Review Type | Frequency | Scope | Responsible Party | Trigger Condition |
|---|---|---|---|---|
| Full Rule Base Audit | Quarterly | All in-scope firewall devices | Network Security Manager / Internal Audit | Scheduled; also triggered by material architecture change |
| Emergency Rule Review | As required | Affected device(s) | Firewall Administrator | Security incident, critical vulnerability, or regulatory directive |
| Change-Triggered Review | Per change | Modified device | Firewall Administrator | Any firewall rule modification |
| Annual Comprehensive Review | Annually | All firewall devices including DR | Internal Audit + External Auditor | Annual audit cycle |

### 7.2 Quarterly Review Schedule — Current Year

| Quarter | Scheduled Date | Completed Date | Devices Reviewed | Findings | Report Reference | Status |
|---|---|---|---|---|---|---|
| Q1 [Year] | [Date] | [Date] | [Device list] | [#] | [Report ID] | [Complete / In Progress / Scheduled] |
| Q2 [Year] | [Date] | [Date] | [Device list] | [#] | [Report ID] | [Complete / In Progress / Scheduled] |
| Q3 [Year] | [Date] | [Date] | [Device list] | [#] | [Report ID] | [Complete / In Progress / Scheduled] |
| Q4 [Year] | [Date] | [Date] | [Device list] | [#] | [Report ID] | [Complete / In Progress / Scheduled] |

### 7.3 Rule Lifecycle Management

*Describe the process for managing firewall rules from creation through to retirement to prevent rule bloat.*

Rules are managed through the following lifecycle stages:

1. **Request** — All rule change requests are submitted via [ITSM Tool / Change Management System] using the Firewall Change Request Form [Form ID].
2. **Review and Approval** — Requests are reviewed by the Network Security Manager and approved by [Approver Role] prior to implementation. Changes to rules protecting critical systems (Z-05, Z-06) require additional sign-off from [CISO / IT Risk Committee].
3. **Implementation** — Changes are implemented during approved change windows with rollback procedures documented.
4. **Documentation** — All approved rules are logged in the Firewall Rule Register [Document ID] with business justification, approval reference, and expiry date where applicable.
5. **Periodic Review** — All rules are subject to quarterly review. Rules with a zero hit-count over [90 days] are flagged for justification or removal.
6. **Expiry and Retirement** — Temporary rules must carry an expiry date. Permanent rules are subject to annual re-justification by the respective business owner.

---

## 8. Key Findings and Observations

*Document all audit findings with sufficient detail to enable remediation. Each finding must include a risk rating, evidence reference, and recommended action.*

### 8.1 Summary Dashboard

| Finding ID | Title | Device | Risk Rating | Status | Owner | Target Resolution Date |
|---|---|---|---|---|---|---|
| FAR-[Year]-[Qtr]-001 | [Finding Title] | [Device] | Critical | [Open / Closed] | [Owner] | [Date] |
| FAR-[Year]-[Qtr]-002 | [Finding Title] | [Device] | High | [Open / Closed] | [Owner] | [Date] |
| FAR-[Year]-[Qtr]-003 | [Finding Title] | [Device] | Medium | [Open / Closed] | [Owner] | [Date] |
| FAR-[Year]-[Qtr]-004 | [Finding Title] | [Device] | Medium | [Open / Closed] | [Owner] | [Date] |
| FAR-[Year]-[Qtr]-005 | [Finding Title] | [Device] | Low | [Open / Closed] | [Owner] | [Date] |

### 8.2 Detailed Findings

---

#### Finding FAR-[Year]-[Qtr]-001

| Field | Detail |
|---|---|
| **Finding ID** | FAR-[Year]-[Qtr]-001 |
| **Title** | [Descriptive Finding Title] |
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Device Affected** | [Firewall Device Name / ID] |
| **Rule ID(s) Affected** | [Rule ID(s)] |
| **RMiT Clause** | 10.38 |

**Observation:**

*Describe what was found, including objective evidence. Be specific — reference rule IDs, source/destination addresses, ports, and protocols where relevant.*

[Detailed description of the finding. Example: Rule ID [#] on [Device] permits unrestricted inbound traffic (ANY source) to destination [IP Range] on TCP port [Port]. Log analysis covering [date range] indicates this rule recorded zero hits over 90 days, suggesting the rule serves no active business function while presenting an unnecessary attack surface.]

**Evidence:**

- [Evidence item 1: e.g., Rule base export dated [Date], Rule ID [#]]
- [Evidence item 2: e.g., Firewall traffic log analysis — zero hit count for rule [#] from [Date] to [Date]]
- [Evidence item 3: e.g., Interview with [Name], [Role], conducted [Date] — no business justification provided]

**Risk Impact:**

[Describe the potential business, operational, or regulatory impact if this finding is not remediated. Example: An adversary exploiting this permissive rule could gain unauthorized access to [System/Zone], potentially leading to data exfiltration, regulatory breach under BNM RMiT, and reputational damage.]

**Recommendation:**

[Specific, actionable remediation instruction. Example: Remove Rule ID [#] from [Device] after confirming no dependent business process requires the permitted traffic. If a legitimate requirement exists, scope the rule to the minimum required source addresses and destination ports, and document business justification in the Firewall Rule Register.]

**Management Response:**

> [Management's formal response to this finding, including acceptance, remediation plan, and responsible owner.]
> **Responsible Owner:** [Name, Role]
> **Target Resolution Date:** [Date]

---

#### Finding FAR-[Year]-[Qtr]-002

| Field | Detail |
|---|---|
| **Finding ID** | FAR-[Year]-[Qtr]-002 |
| **Title** | [Descriptive Finding Title] |
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Device Affected** | [Firewall Device Name / ID] |
| **Rule ID(s) Affected** | [Rule ID(s)] |
| **RMiT Clause** | 10.38 |

**Observation:**

[Detailed description of the finding.]

**Evidence:**

- [Evidence item 1]
- [Evidence item 2]

**Risk Impact:**

[Describe the potential impact.]

**Recommendation:**

[Specific remediation action.]

**Management Response:**

> [Management response.]
> **Responsible Owner:** [Name, Role]
> **Target Resolution Date:** [Date]

---

*Repeat the finding template above for all identified findings. Additional findings should be numbered sequentially: FAR-[Year]-[Qtr]-003, FAR-[Year]-[Qtr]-004, etc.*

---

### 8.3 Observations (Non-Finding)

*Document noteworthy observations that do not constitute formal findings but merit management awareness for continuous improvement.*

| Observation ID | Description | Recommended Action | Priority |
|---|---|---|---|
| OBS-001 | [Observation description] | [Recommended action] | [High / Medium / Low] |
| OBS-002 | [Observation description] | [Recommended action] | [High / Medium / Low] |
| OBS-003 | [Observation description] | [Recommended action] | [High / Medium / Low] |

### 8.4 Positive Observations

*Acknowledge areas where controls are operating effectively. This provides a balanced view and recognizes good practice.*

- [Positive observation 1: e.g., The firewall change management process is well-documented and consistently followed, with all reviewed changes traceable to approved change requests.]
- [Positive observation 2: e.g., Critical systems in Z-05 and Z-06 are effectively isolated with no direct internet access paths identified.]
- [Positive observation 3: e.g., Management zone access is restricted to dedicated jump hosts with MFA enforced.]

---

## 9. Roles and Responsibilities

*This RACI matrix defines accountability for firewall audit activities across the organization.*

### 9.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | IT Risk Manager | Network Security Manager | Firewall Administrator | Internal Audit | Business Unit Heads | External Auditor |
|---|---|---|---|---|---|---|---|
| Define audit scope and schedule | C | C | R | I | A | I | I |
| Execute firewall rule base review | I | I | R | R | A | I | C |
| Conduct automated rule analysis | I | I | C | R | A | I | I |
| Conduct manual rule review | I | I | R | C | A | I | C |
| Classify and rate findings | I | C | R | C | A | I | C |
| Prepare draft audit report | I | I | C | I | R | I | C |
| Review and validate findings | C | C | R | R | A | I | C |
| Provide management response | I | I | R | R | A | A | I |
| Approve final audit report | A | C | C | I | R | I | I |
| Implement remediation actions | I | I | A | R | I | C | I |
| Track remediation to closure | C | R | C | I | A | I | I |
| Report status to Board / Risk Committee | A | R | C | I | C | I | I |
| Maintain firewall rule register | I | I | A | R | I | I | I |
| Review and update zone definitions | C | C | A | R | I | C | I |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Reviewed By | Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | [Reviewer Name] | Initial draft |
| 0.2 | [Date] | [Author Name] | [Reviewer Name] | Incorporated management responses |
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Final version — issued for approval |

### 10.2 Approval Sign-Off

*This document requires the following approvals before it is considered final and issued.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Security Manager | [Name] | __________________ | [Date] |
| IT Risk Manager | [Name] | __________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [Date] |
| Head of Internal Audit | [Name] | __________________ | [Date] |

### 10.3 Distribution List

| Name | Role | Department | Copy Type |
|---|---|---|---|
| [Name] | CISO | Information Security | Controlled |
| [Name] | IT Risk Manager | IT Risk & Compliance | Controlled |
| [Name] | Network Security Manager | Network Operations | Controlled |
| [Name] | Head of Internal Audit | Internal Audit | Controlled |
| [Name] | [Role] | [Department] | Controlled |

---

## 11. References

*The following regulatory documents, standards, and internal policies were referenced in the preparation of this audit report.*

### 11.1 Regulatory and Statutory References

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-2 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | **Clause 10.38**, 10.30–10.37 |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Part III, Section 9 |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | Section 57, Schedule 7 |
| IFSA 2013 | Islamic Financial Services Act 2013 | Parliament of Malaysia | Section 57, Schedule 7 |
| NACSA CSF | Cybersecurity Framework | NACSA | NS-3, NS-4 |

### 11.2 Standards and Frameworks

| Reference | Title | Issuing Body | Relevant Section(s) |
|---|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC | A.8.20, A.8.22 |
| NIST SP 800-41 Rev. 1 | Guidelines on Firewalls and Firewall Policy | NIST | All |
| NIST SP 800-53 Rev. 5 | Security and Privacy Controls | NIST | SC-7 (Boundary Protection) |
| CIS Benchmark | [Applicable Firewall Vendor Benchmark] | CIS | All |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | PCI SSC | Requirement 1 |

### 11.3 Internal Policy References

| Document ID | Title | Owner | Version |
|---|---|---|---|
| [POL-IS-001] | Information Security Policy | CISO | [Version] |
| [POL-NS-001] | Network Security Policy | Network Security Manager | [Version] |
| [STD-FW-001] | Firewall Configuration Standard | Network Security Manager | [Version] |
| [PRO-CHG-001] | Change Management Procedure | IT Operations Manager | [Version] |
| [REG-FW-001] | Firewall Rule Register | Network Security Manager | [Version] |
| [DIA-NET-001] | Network Architecture Diagram | Network Security Manager | [Version] |

---

## 12. Appendices

### Appendix A — Firewall Rule Base Extract

*Attach or reference the sanitized rule base configuration export used as the primary evidence for this audit. Sensitive IP addresses and credentials must be redacted before inclusion.*

> **[ATTACH SANITIZED RULE BASE EXPORT]**
> *File Reference: [Filename / Document Repository Path]*
> *Date of Export: [Date]*
> *Extracted By: [Name, Role]*

---

### Appendix B — Automated Analysis Tool Output

*Attach the raw output from the automated rule analysis tool (e.g., Tufin / AlgoSec / Firemon / Nipper Studio) summarizing detected anomalies prior to manual review and classification.*

> **[ATTACH AUTOMATED ANALYSIS REPORT]**
> *Tool Used: [Tool Name and Version]*
> *Analysis Date: [Date]*
> *Report Reference: [Report ID / Filename]*

---

### Appendix C — Firewall Rule Register (Current Quarter)

*Include or reference the complete Firewall Rule Register documenting all active rules, their business justification, approving authority, and last review date.*

| Rule ID | Device | Source | Destination | Port / Protocol | Action | Business Justification | Approved By | Approval Date | Last Hit Date | Expiry Date | Review Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [Rule ID] | [Device] | [Source] | [Destination] | [Port/Proto] | [Allow/Deny] | [Justification] | [Name] | [Date] | [Date] | [Date / Permanent] | [Active / Under Review / Pending Removal] |

---

### Appendix D — Remediation Tracking Log

*Track all open findings to closure. This log should be updated at least monthly and reviewed at each subsequent quarterly audit.*

| Finding ID | Risk Rating | Description | Assigned To | Target Date | Actual Close Date | Verification Method | Status |
|---|---|---|---|---|---|---|---|
| FAR-[Year]-[Qtr]-001 | [Rating] | [Brief description] | [Name] | [Date] | [Date] | [Method] | [Open / In Progress / Closed] |
| FAR-[Year]-[Qtr]-002 | [Rating] | [Brief description] | [Name] | [Date] | [Date] | [Method] | [Open / In Progress / Closed] |

---

### Appendix E — Audit Interview Log

*Record all interviews conducted during the audit fieldwork phase, including participants, date, and topics discussed.*

| Interview # | Date | Interviewee Name | Role | Topics Discussed | Key Points Noted |
|---|---|---|---|---|---|
| INT-001 | [Date] | [Name] | Network Security Manager | Rule justification, change process, recent changes | [Notes] |
| INT-002 | [Date] | [Name] | Firewall Administrator | Technical rule review, unused rule analysis | [Notes] |
| INT-003 | [Date] | [Name] | [Application Owner] | Business justification for application-specific rules | [Notes] |

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| ACL | Access Control List — a set of rules that control network traffic |
| ANY/ANY Rule | A firewall rule permitting all source addresses to communicate with all destination addresses, considered a critical misconfiguration |
| Defence-in-Depth | A security strategy employing multiple layers of controls to protect assets |
| DMZ | Demilitarised Zone — a network segment isolating internet-facing services from internal networks |
| Hit Count | The number of times a firewall rule has matched network traffic over a defined period |
| Implicit Deny | A default firewall behaviour that blocks all traffic not explicitly permitted by a rule |
| Least Privilege | The principle of granting only the minimum access rights required for a function |
| NGFW | Next-Generation Firewall — a firewall with advanced features including application awareness and IPS |
| Rule Bloat | The accumulation of unused, redundant, or poorly documented firewall rules over time |
| Shadowed Rule | A firewall rule that is never reached because a preceding rule matches the same traffic |
| Zero Hit Rule | A firewall rule that has not matched any traffic over a defined observation period |
| BNM | Bank Negara Malaysia — the central bank and primary financial regulator of Malaysia |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk |
| NACSA | National Cyber Security Agency of Malaysia |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing personal data |

---

*End of Document*

---

**Document Control:** This document is classified **Confidential**. Recipients are responsible for maintaining its confidentiality and must not copy, distribute, or disclose its contents without written authorization from [Organization Name]. All printed copies are uncontrolled. The current version is maintained in [Document Repository System].