# Segmentation Configuration Evidence

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

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology Used](#3-methodology-used)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Network Segmentation Zones](#5-network-segmentation-zones)
6. [Firewall Rule Review Schedule](#6-firewall-rule-review-schedule)
7. [Network Architecture Diagram](#7-network-architecture-diagram)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

This document provides verified configuration evidence that [Organization Name] has implemented network segmentation controls in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) policy, specifically **Clause 10.37**. It serves as an auditable record of VLAN configurations, firewall rules, and segmentation architecture designed to enforce access boundaries between network zones, minimize lateral movement risk, and protect critical systems and data.

### 1.1 Regulatory Basis

| Regulation | Clause / Section | Obligation |
|---|---|---|
| BNM RMiT | 10.37 | Network segmentation controls between system components |
| BNM RMiT | [Additional Clause] | [Additional Obligation] |
| NACSA CyberSecurity Framework | [Section] | [Obligation] |

### 1.2 Document Applicability

This document applies to:

- All production, staging, and development network environments operated by [Organization Name]
- All managed network infrastructure including switches, routers, firewalls, and virtual networking components
- Third-party managed segments where [Organization Name] retains network policy ownership
- Cloud and hybrid connectivity segments interfacing with on-premises environments

### 1.3 Exclusions

*List any systems, environments, or network segments explicitly excluded from this assessment, with justification.*

- [Excluded segment or environment] — *Reason: [Justification]*
- [Excluded segment or environment] — *Reason: [Justification]*

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the segmentation assessment and the criteria used to evaluate whether controls are adequate. Include the specific systems, segments, and interfaces assessed during this review cycle.*

### 2.1 Assessment Period

| Field | Detail |
|---|---|
| **Assessment Start Date** | [DD/MM/YYYY] |
| **Assessment End Date** | [DD/MM/YYYY] |
| **Review Type** | ☐ Scheduled Quarterly Review &nbsp;&nbsp; ☐ Post-Change Review &nbsp;&nbsp; ☐ Incident-Triggered Review |
| **Trigger Event (if applicable)** | [Description of triggering event, or "N/A"] |
| **Conducted By** | [Name], [Title] |

### 2.2 In-Scope Assets

| # | Asset / Segment Name | Type | Environment | Criticality |
|---|---|---|---|---|
| 1 | [Asset Name] | VLAN / Firewall / Switch | Production / Staging / Dev | Critical / High / Medium / Low |
| 2 | [Asset Name] | [Type] | [Environment] | [Criticality] |
| 3 | [Asset Name] | [Type] | [Environment] | [Criticality] |

### 2.3 Assessment Criteria

*Document the specific control objectives and compliance criteria applied during assessment. Criteria should align with BNM RMiT Clause 10.37 requirements.*

| Criteria ID | Control Objective | Basis |
|---|---|---|
| SC-01 | Network zones are logically separated by function and sensitivity | BNM RMiT 10.37 |
| SC-02 | Inter-zone traffic is controlled by explicit firewall rules with documented business justification | BNM RMiT 10.37 |
| SC-03 | Default-deny policy is enforced on all zone boundaries | BNM RMiT 10.37 |
| SC-04 | VLAN tagging and trunking configurations are hardened against VLAN hopping attacks | BNM RMiT 10.37 |
| SC-05 | Segmentation controls are reviewed following any network topology change | BNM RMiT 10.37 |
| SC-06 | [Additional Criterion] | [Source] |

---

## 3. Methodology Used

*Describe the techniques and tools used to gather configuration evidence and validate segmentation effectiveness. Include both automated and manual review activities.*

### 3.1 Review Approach

The assessment employed the following methodology:

1. **Configuration Extraction** — Running configurations were exported from all in-scope firewalls, switches, and routers using [Tool/Process Name].
2. **Automated Compliance Scan** — Configurations were scanned against the defined criteria baseline using [Tool Name, e.g., Nipper, CIS-CAT, custom script].
3. **Manual Rule Review** — Firewall rule bases were reviewed manually to identify overly permissive rules, shadowed rules, and rules without active business justification.
4. **Traffic Flow Validation** — Actual permitted traffic flows were compared against approved inter-zone communication matrices.
5. **Penetration / Segmentation Test (if applicable)** — [Describe test performed, or state "Not performed this cycle."]

### 3.2 Tools and Evidence Sources

| Tool / Source | Version | Purpose | Date of Use |
|---|---|---|---|
| [Firewall Management Console, e.g., Panorama, FMC] | [Version] | Configuration export and rule review | [Date] |
| [Network Management Platform, e.g., SolarWinds, PRTG] | [Version] | VLAN topology verification | [Date] |
| [Vulnerability / Compliance Scanner] | [Version] | Automated configuration compliance check | [Date] |
| [Manual Review] | N/A | Rule justification and ownership validation | [Date] |
| [Other Tool] | [Version] | [Purpose] | [Date] |

### 3.3 Evidence Artefacts

*List all raw evidence collected and stored in support of this document. Evidence should be archived per [Organization Name]'s document retention policy.*

| Artefact ID | Description | Location / Reference | Collected By | Date |
|---|---|---|---|---|
| EVD-001 | Exported firewall running configuration — [Device Name] | [File path / DMS reference] | [Name] | [Date] |
| EVD-002 | VLAN database export — [Switch/Cluster Name] | [File path / DMS reference] | [Name] | [Date] |
| EVD-003 | Automated scan report | [File path / DMS reference] | [Name] | [Date] |
| EVD-004 | Inter-zone traffic flow log sample | [File path / DMS reference] | [Name] | [Date] |
| EVD-005 | [Description] | [Reference] | [Name] | [Date] |

---

## 4. Findings and Ratings

*Summarize the results of the assessment. Assign a compliance rating to each criterion and document remediation actions for any gaps identified.*

### 4.1 Overall Compliance Rating

| Rating | Description |
|---|---|
| **Compliant** | All applicable criteria met with no material gaps |
| **Partially Compliant** | Minor gaps identified; remediation in progress |
| **Non-Compliant** | Material gaps identified; immediate remediation required |

**Overall Rating for this Review Cycle:** &nbsp; ☐ Compliant &nbsp;&nbsp; ☐ Partially Compliant &nbsp;&nbsp; ☐ Non-Compliant

### 4.2 Findings Detail

| Finding ID | Criteria Ref | Description of Finding | Risk Rating | Status | Remediation Action | Target Date | Owner |
|---|---|---|---|---|---|---|---|
| FND-001 | SC-01 | [Description of finding] | Critical / High / Medium / Low | Open / Closed / In Progress | [Remediation action] | [DD/MM/YYYY] | [Name] |
| FND-002 | SC-03 | [Description of finding] | [Rating] | [Status] | [Action] | [Date] | [Name] |
| FND-003 | SC-[n] | [Description of finding] | [Rating] | [Status] | [Action] | [Date] | [Name] |

### 4.3 Closed Findings from Prior Review

| Finding ID | Original Description | Closure Evidence | Closed By | Closure Date |
|---|---|---|---|---|
| [Prior FND-ID] | [Original finding] | [Evidence reference] | [Name] | [Date] |
| [Prior FND-ID] | [Original finding] | [Evidence reference] | [Name] | [Date] |

---

## 5. Network Segmentation Zones

*Document each defined network zone, its purpose, the assets it contains, its security classification, and the controls enforced at its boundary. This section forms the authoritative zone register for the organization.*

### 5.1 Zone Register

| Zone ID | Zone Name | Purpose | Security Classification | VLAN ID(s) | IP Subnet(s) | Enforcement Device |
|---|---|---|---|---|---|---|
| ZN-01 | Internet DMZ | Public-facing services, reverse proxies | Public | [VLAN ID] | [e.g., 10.0.1.0/24] | [Firewall Name] |
| ZN-02 | Application Tier | Internal application servers | Restricted | [VLAN ID] | [e.g., 10.0.2.0/24] | [Firewall Name] |
| ZN-03 | Database Tier | Database servers and data stores | Confidential | [VLAN ID] | [e.g., 10.0.3.0/24] | [Firewall Name] |
| ZN-04 | Management Network | Out-of-band management, jump hosts | Restricted | [VLAN ID] | [e.g., 10.0.4.0/24] | [Firewall Name] |
| ZN-05 | End-User Workstations | Corporate user devices | Internal | [VLAN ID] | [e.g., 10.0.5.0/24] | [Firewall Name] |
| ZN-06 | Payment / Core Banking | Critical payment processing systems | Confidential | [VLAN ID] | [e.g., 10.0.6.0/24] | [Firewall Name] |
| ZN-07 | Third-Party / Vendor | Vendor-managed systems, partner connections | Restricted | [VLAN ID] | [e.g., 10.0.7.0/24] | [Firewall Name] |
| ZN-08 | [Zone Name] | [Purpose] | [Classification] | [VLAN ID] | [Subnet] | [Device] |

### 5.2 Approved Inter-Zone Communication Matrix

*A "Y" indicates an approved and firewall-enforced communication path. All other zone pairs operate under a default-deny policy. Communication paths must have a documented business justification.*

| From \ To | ZN-01 Internet DMZ | ZN-02 Application | ZN-03 Database | ZN-04 Management | ZN-05 Workstations | ZN-06 Payment | ZN-07 Third-Party |
|---|---|---|---|---|---|---|---|
| **ZN-01 Internet DMZ** | — | Y | N | N | N | N | N |
| **ZN-02 Application** | N | — | Y | N | N | Y | N |
| **ZN-03 Database** | N | N | — | N | N | N | N |
| **ZN-04 Management** | N | Y | Y | — | N | Y | N |
| **ZN-05 Workstations** | N | Y | N | N | — | N | N |
| **ZN-06 Payment** | N | N | Y | N | N | — | N |
| **ZN-07 Third-Party** | N | Y | N | N | N | N | — |

### 5.3 VLAN Configuration Summary

| VLAN ID | Name | Native VLAN | Trunk Ports | Access Ports | Spanning Tree Priority | Last Verified |
|---|---|---|---|---|---|---|
| [VLAN ID] | [Name] | ☐ Yes ☐ No | [Port list / count] | [Port list / count] | [Priority] | [Date] |
| [VLAN ID] | [Name] | ☐ Yes ☐ No | [Port list / count] | [Port list / count] | [Priority] | [Date] |
| [VLAN ID] | [Name] | ☐ Yes ☐ No | [Port list / count] | [Port list / count] | [Priority] | [Date] |

---

## 6. Firewall Rule Review Schedule

*Document the formal schedule and outcomes of firewall rule base reviews. All rules must have documented ownership, business justification, and expiry or review dates.*

### 6.1 Review Calendar

| Review Cycle | Scheduled Date | Actual Completion Date | Reviewer | Status |
|---|---|---|---|---|
| Q1 [Year] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] | Completed / Pending |
| Q2 [Year] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] | Completed / Pending |
| Q3 [Year] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] | Completed / Pending |
| Q4 [Year] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] | Completed / Pending |
| Post-Change — [Change Ref] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] | Completed / Pending |

### 6.2 Firewall Rule Base Summary

| Firewall Device | Total Rules | Active Rules | Unused Rules (>90 days) | Any-Any Rules | Rules Pending Review | Last Full Review |
|---|---|---|---|---|---|---|
| [Firewall Name / ID] | [#] | [#] | [#] | [#] | [#] | [Date] |
| [Firewall Name / ID] | [#] | [#] | [#] | [#] | [#] | [Date] |
| [Firewall Name / ID] | [#] | [#] | [#] | [#] | [#] | [Date] |

### 6.3 Rule Recertification Status

*Each rule owner must recertify that their rules remain necessary and correctly scoped. Rules not recertified within the review period are flagged for removal.*

| Rule ID | Description | Source Zone | Destination Zone | Protocol / Port | Business Justification | Owner | Last Recertified | Next Recertification | Status |
|---|---|---|---|---|---|---|---|---|---|
| [Rule ID] | [Description] | [ZN-XX] | [ZN-XX] | [e.g., TCP/443] | [Justification] | [Name] | [Date] | [Date] | Active / Expired / Pending |
| [Rule ID] | [Description] | [ZN-XX] | [ZN-XX] | [Protocol] | [Justification] | [Name] | [Date] | [Date] | Active / Expired / Pending |
| [Rule ID] | [Description] | [ZN-XX] | [ZN-XX] | [Protocol] | [Justification] | [Name] | [Date] | [Date] | Active / Expired / Pending |

### 6.4 Rule Cleanup Actions

| Action ID | Rule ID | Device | Action Required | Approved By | Target Date | Completed Date |
|---|---|---|---|---|---|---|
| RCA-001 | [Rule ID] | [Device] | Remove — unused >180 days | [Name] | [Date] | [Date] |
| RCA-002 | [Rule ID] | [Device] | Restrict scope — overly broad source | [Name] | [Date] | [Date] |
| RCA-003 | [Rule ID] | [Device] | [Action] | [Name] | [Date] | [Date] |

---

## 7. Network Architecture Diagram

*Provide or reference the current approved network segmentation architecture diagram. The diagram must illustrate all zones defined in Section 5, inter-zone enforcement points, and trust boundaries.*

### 7.1 Current Architecture Diagram

*Insert the current network segmentation diagram below, or reference the approved diagram held in the document management system. The diagram must be version-controlled and approved by the Network Security Manager.*

> **Diagram Reference:** [DMS Document ID / File Name]
> **Diagram Version:** [Version]
> **Last Updated:** [DD/MM/YYYY]
> **Approved By:** [Name], [Title]

[INSERT NETWORK SEGMENTATION DIAGRAM — showing all zones, VLANs, firewall enforcement points, trust boundaries, and inter-zone communication paths]

### 7.2 Diagram Change History

| Version | Change Description | Updated By | Approved By | Date |
|---|---|---|---|---|
| [v1.0] | Initial baseline diagram | [Name] | [Name] | [Date] |
| [v1.1] | [Description of change] | [Name] | [Name] | [Date] |
| [v1.x] | [Description of change] | [Name] | [Name] | [Date] |

### 7.3 Architecture Validation Checklist

| # | Validation Item | Status | Notes |
|---|---|---|---|
| 1 | All production zones depicted with correct VLAN IDs | ☐ Confirmed ☐ Discrepancy | [Notes] |
| 2 | All firewall enforcement points accurately shown | ☐ Confirmed ☐ Discrepancy | [Notes] |
| 3 | Internet-facing perimeter correctly represented | ☐ Confirmed ☐ Discrepancy | [Notes] |
| 4 | Third-party / partner connectivity accurately depicted | ☐ Confirmed ☐ Discrepancy | [Notes] |
| 5 | Diagram reflects post-change topology from last change record | ☐ Confirmed ☐ Discrepancy | [Notes] |
| 6 | Diagram reviewed and approved within current review cycle | ☐ Confirmed ☐ Discrepancy | [Notes] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for activities related to the maintenance and review of segmentation configuration evidence.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Network Security Manager | CISO | IT Infrastructure Team | Compliance Officer | Internal Audit | Third-Party / Vendor |
|---|---|---|---|---|---|---|
| Define and maintain network zone register | R/A | C | C | I | I | — |
| Implement VLAN and firewall configurations | C | I | R | I | I | C |
| Conduct quarterly firewall rule review | R/A | I | C | I | I | — |
| Approve inter-zone communication requests | A | C | R | I | I | C |
| Perform post-change segmentation review | R/A | I | C | I | I | C |
| Recertify firewall rules | C | I | R | I | I | C |
| Maintain and version network diagrams | R/A | I | C | I | I | — |
| Compile and submit this evidence document | R/A | C | C | I | I | — |
| Review and approve this document | C | A | I | C | I | — |
| Archive evidence artefacts | R | I | C | I | I | — |
| Report non-compliant findings to management | R | A | I | C | I | — |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name], [Title] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name], [Title] | [Description of changes] |
| [1.x] | [DD/MM/YYYY] | [Author Name], [Title] | [Description of changes] |

### 9.2 Review Record

| Review Cycle | Review Date | Reviewer | Outcome | Comments |
|---|---|---|---|---|
| Quarterly — Q[n] [Year] | [DD/MM/YYYY] | [Name], [Title] | No Change Required / Updated | [Comments] |
| Post-Event — [Event Description] | [DD/MM/YYYY] | [Name], [Title] | Updated | [Comments] |
| [Review type] | [DD/MM/YYYY] | [Name], [Title] | [Outcome] | [Comments] |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], Network Security Manager | | [DD/MM/YYYY] |
| Reviewed By | [Name], IT Security Lead | | [DD/MM/YYYY] |
| Approved By | [Name], CISO | | [DD/MM/YYYY] |
| Endorsed By | [Name], Compliance Officer | | [DD/MM/YYYY] |

---

## 10. References

| Reference | Document / Standard | Clause / Section | Description |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy, Bank Negara Malaysia | **10.37** | Network segmentation controls between system components with different security classifications |
| BNM RMiT | Risk Management in Technology Policy, Bank Negara Malaysia | [Supporting clause] | [Description] |
| NACSA | National Cyber Security Agency — Cyber Security Framework | [Section] | [Description] |
| ISO/IEC 27001 | Information Security Management Systems | Annex A 8.22 | Segregation of networks |
| PCI DSS | Payment Card Industry Data Security Standard | Requirement 1 | Network security controls, segmentation requirements |
| [Internal Policy] | [Organization Name] Network Security Policy | [Section] | [Description] |
| [Internal Standard] | [Organization Name] Firewall Management Standard | [Section] | [Description] |

---

## 11. Appendices

### Appendix A — Firewall Device Inventory

*List all firewall devices in scope, including management details and firmware versions verified during this review.*

| Device ID | Hostname | Model | Firmware Version | Management IP | Location | HA Pair | Last Config Backup | Backup Location |
|---|---|---|---|---|---|---|---|---|
| FW-001 | [Hostname] | [Make/Model] | [Version] | [IP] | [DC/Location] | [Pair device] | [Date] | [Location] |
| FW-002 | [Hostname] | [Make/Model] | [Version] | [IP] | [DC/Location] | [Pair device] | [Date] | [Location] |
| FW-003 | [Hostname] | [Make/Model] | [Version] | [IP] | [DC/Location] | [Pair device] | [Date] | [Location] |

---

### Appendix B — Switch and VLAN Device Inventory

*List all network switches and devices enforcing VLAN segmentation.*

| Device ID | Hostname | Model | Firmware Version | Management IP | VLANs Carried | Location | Last Config Backup |
|---|---|---|---|---|---|---|---|
| SW-001 | [Hostname] | [Make/Model] | [Version] | [IP] | [VLAN list] | [Location] | [Date] |
| SW-002 | [Hostname] | [Make/Model] | [Version] | [IP] | [VLAN list] | [Location] | [Date] |

---

### Appendix C — Change Record Cross-Reference

*Cross-reference change records that triggered a post-event segmentation review during the period covered by this document.*

| Change Record ID | Change Description | Affected Zones / VLANs | Post-Change Review Date | Reviewer | Findings |
|---|---|---|---|---|---|
| CHG-[XXXX] | [Description] | [ZN-XX, VLAN XX] | [Date] | [Name] | No material change / [Finding] |
| CHG-[XXXX] | [Description] | [ZN-XX, VLAN XX] | [Date] | [Name] | No material change / [Finding] |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — Malaysia's central bank and financial services regulator |
| RMiT | Risk Management in Technology — BNM policy governing technology risk in financial institutions |
| VLAN | Virtual Local Area Network — logical network segmentation at Layer 2 |
| DMZ | Demilitarized Zone — a network segment that sits between an untrusted external network and a trusted internal network |
| Default-Deny | A firewall policy posture in which all traffic is blocked unless explicitly permitted by an approved rule |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| NACSA | National Cyber Security Agency Malaysia |
| IOC | Indicator of Compromise |
| HA | High Availability — a redundant configuration to ensure continuous operation |

---

### Appendix E — Evidence Archive Index

*Maintain an index of all raw evidence artefacts collected in support of this document. Archive location should comply with [Organization Name]'s records retention policy (minimum [X] years).*

| Artefact ID | Type | Description | Format | Archive Location | Retention Period | Archived By | Archived Date |
|---|---|---|---|---|---|---|---|
| EVD-001 | Configuration | [Description] | [e.g., .txt, .xlsx] | [Path / DMS Ref] | [e.g., 7 years] | [Name] | [Date] |
| EVD-002 | Scan Report | [Description] | [Format] | [Path / DMS Ref] | [Retention] | [Name] | [Date] |
| EVD-003 | Diagram | [Description] | [Format] | [Path / DMS Ref] | [Retention] | [Name] | [Date] |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name] and relevant regulatory bodies. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. For queries regarding this document, contact the Network Security Manager at [contact details].*