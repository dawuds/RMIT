# Firewall Rule Review Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Security Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organisation Name]
**Department:** [Department Name]
**Prepared By:** [Prepared By]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset and Item Identification](#2-asset-and-item-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Network Segmentation Zones](#5-network-segmentation-zones)
6. [Firewall Rule Review Schedule](#6-firewall-rule-review-schedule)
7. [Network Architecture Diagram](#7-network-architecture-diagram)
8. [Review Findings and Actions](#8-review-findings-and-actions)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official record of semi-annual firewall rule reviews conducted by [Organisation Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.38. These records demonstrate [Organisation Name]'s ongoing commitment to maintaining a secure, well-governed network perimeter and provide an auditable trail of all firewall rule assessments, findings, and remediation actions taken.

### 1.2 Scope

*Define the boundaries of this review — specify which firewall devices, network segments, and business units are covered. Exclude any systems that are managed under a separate review process and document the rationale.*

This record covers all firewall assets and associated rule sets within [Organisation Name]'s production, staging, and disaster recovery (DR) environments, including:

- **In Scope:**
  - All perimeter firewalls at internet-facing boundaries
  - Internal network firewalls enforcing segmentation between trust zones
  - Cloud-hosted security groups and virtual firewall appliances managed by [Organisation Name]
  - Firewall rules governing third-party and vendor connectivity

- **Out of Scope:**
  - Firewall assets under full management of a third-party service provider (reviewed separately under vendor oversight records)
  - [Any other exclusions — specify with rationale]

### 1.3 Regulatory Basis

This artifact is mandatory under the following regulatory obligation:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT Policy Document | Clause 10.38 | Financial institutions shall review firewall rules at least semi-annually to identify and remove or disable rules that are redundant, overly permissive, or no longer aligned with business requirements. |

---

## 2. Asset and Item Identification

*List every firewall device or logical firewall instance subject to this review. Each entry must be uniquely identifiable and traceable to the organisation's asset register. Include both physical appliances and virtual/cloud-native firewall constructs.*

### 2.1 Firewall Asset Register

| Asset ID | Firewall Hostname / Identifier | Make / Model | Firmware / OS Version | Location / Data Centre | Environment | Asset Register Reference |
|---|---|---|---|---|---|---|
| [FW-001] | [fw-perimeter-01] | [e.g., Palo Alto PA-5260] | [e.g., PAN-OS 11.x] | [e.g., Primary DC, Cyberjaya] | Production | [Asset Register Ref] |
| [FW-002] | [fw-perimeter-02] | [e.g., Palo Alto PA-5260] | [e.g., PAN-OS 11.x] | [e.g., DR Site, Kuala Lumpur] | DR | [Asset Register Ref] |
| [FW-003] | [fw-internal-core] | [e.g., Cisco Firepower 4140] | [e.g., FTD 7.x] | [e.g., Primary DC, Cyberjaya] | Production | [Asset Register Ref] |
| [FW-004] | [cloud-sg-prod-vpc] | [e.g., AWS Security Group] | [N/A — managed service] | [e.g., AWS ap-southeast-1] | Production | [Asset Register Ref] |
| [FW-00X] | [Add rows as required] | | | | | |

### 2.2 Total Assets in Scope

| Metric | Count |
|---|---|
| Physical Firewall Appliances | [Number] |
| Virtual / Cloud Firewall Instances | [Number] |
| **Total Firewall Assets Reviewed** | **[Total]** |
| Total Firewall Rules Reviewed | [Number] |

---

## 3. Classification and Categorisation

*Classify each firewall asset by its function and criticality. This categorisation determines the risk priority of findings and the urgency of remediation. Align criticality ratings with the organisation's IT asset classification policy.*

### 3.1 Criticality Classification Criteria

| Criticality Level | Definition |
|---|---|
| **Critical** | Firewall protecting payment systems, core banking, or internet perimeter. Breach would have severe financial, reputational, or regulatory impact. |
| **High** | Firewall protecting sensitive internal segments (e.g., staff intranet, internal APIs, administrative networks). |
| **Medium** | Firewall protecting non-sensitive internal systems or development/test environments with access to production data. |
| **Low** | Firewall protecting isolated development or sandbox environments with no production data access. |

### 3.2 Asset Classification Register

| Asset ID | Firewall Hostname | Primary Function | Data Classification | Criticality | Justification |
|---|---|---|---|---|---|
| [FW-001] | [fw-perimeter-01] | [e.g., Internet perimeter — inbound/outbound traffic control] | [e.g., Restricted] | [e.g., Critical] | [e.g., Controls all internet-facing traffic; breach impacts all services] |
| [FW-002] | [fw-perimeter-02] | [e.g., DR internet perimeter] | [e.g., Restricted] | [e.g., Critical] | [e.g., Mirrors primary perimeter; activated during DR events] |
| [FW-003] | [fw-internal-core] | [e.g., Internal zone segmentation] | [e.g., Confidential] | [e.g., High] | [e.g., Enforces trust boundary between core banking and staff networks] |
| [FW-004] | [cloud-sg-prod-vpc] | [e.g., Cloud workload protection] | [e.g., Confidential] | [e.g., High] | [e.g., Protects production cloud workloads and APIs] |
| [FW-00X] | [Add rows as required] | | | | |

---

## 4. Owner and Custodian

*Identify the accountable owner and operational custodian for each firewall asset. The Owner holds business accountability for the asset's security posture. The Custodian is the technical team or individual responsible for day-to-day management, configuration changes, and rule maintenance.*

### 4.1 Asset Ownership Register

| Asset ID | Firewall Hostname | Asset Owner (Role) | Asset Owner (Name) | Technical Custodian (Team / Role) | Technical Custodian (Name) | Escalation Contact |
|---|---|---|---|---|---|---|
| [FW-001] | [fw-perimeter-01] | [e.g., Network Security Manager] | [Name] | [e.g., Network Operations Team] | [Name] | [Name / Contact] |
| [FW-002] | [fw-perimeter-02] | [e.g., Network Security Manager] | [Name] | [e.g., Network Operations Team] | [Name] | [Name / Contact] |
| [FW-003] | [fw-internal-core] | [e.g., Network Security Manager] | [Name] | [e.g., Network Operations Team] | [Name] | [Name / Contact] |
| [FW-004] | [cloud-sg-prod-vpc] | [e.g., Cloud Infrastructure Manager] | [Name] | [e.g., Cloud Operations Team] | [Name] | [Name / Contact] |
| [FW-00X] | [Add rows as required] | | | | | |

### 4.2 Reviewer Details for This Review Cycle

| Role | Name | Employee ID | Department | Contact |
|---|---|---|---|---|
| Lead Reviewer | [Name] | [EMP-ID] | [Department] | [Email / Extension] |
| Secondary Reviewer | [Name] | [EMP-ID] | [Department] | [Email / Extension] |
| Independent Reviewer / Approver | [Name] | [EMP-ID] | [Department] | [Email / Extension] |

---

## 5. Network Segmentation Zones

*Document the network segmentation architecture that the reviewed firewalls enforce. Each zone should be clearly defined with its trust level, purpose, and the assets it contains. This section provides context for evaluating whether firewall rules correctly implement the intended segmentation policy.*

### 5.1 Network Zone Definitions

| Zone ID | Zone Name | Trust Level | Description | Typical Assets / Systems |
|---|---|---|---|---|
| [Z-01] | [e.g., Internet / Untrusted Zone] | [Untrusted] | [External internet-facing boundary. All inbound traffic is untreated and subject to full inspection.] | [e.g., Public IP space, external users, third-party partners] |
| [Z-02] | [e.g., DMZ / Perimeter Zone] | [Semi-Trusted] | [Hosts internet-facing services that require limited external access but must not have direct access to internal networks.] | [e.g., Web servers, API gateways, reverse proxies, MFA portals] |
| [Z-03] | [e.g., Core Banking Zone] | [Highly Trusted] | [Houses the most sensitive core banking systems. Strictly limited inbound access; no direct internet egress.] | [e.g., Core banking application servers, payment processing systems, mainframes] |
| [Z-04] | [e.g., Internal / User Zone] | [Trusted] | [General staff workstations and office network. Access to core systems governed by strict firewall rules.] | [e.g., Staff endpoints, printers, VoIP devices] |
| [Z-05] | [e.g., Management / Out-of-Band Zone] | [Highly Trusted] | [Dedicated zone for network device management interfaces. No user workstations permitted.] | [e.g., Firewall management interfaces, switch consoles, SIEM, network monitoring tools] |
| [Z-06] | [e.g., DR / Failover Zone] | [Trusted] | [Replicates primary environment for disaster recovery. Activated during DR events only.] | [e.g., DR replicas of core banking and infrastructure] |
| [Z-07] | [e.g., Third-Party / Vendor Zone] | [Untrusted / Semi-Trusted] | [Segregated zone for vendor remote access and third-party integrations. Strictly controlled.] | [e.g., Vendor VPN endpoints, third-party payment network connections] |
| [Z-0X] | [Add zones as required] | | | |

### 5.2 Zone-to-Zone Traffic Policy Summary

*Document the permitted traffic flows between zones at a high level. Indicate whether inter-zone traffic is permitted, denied by default, or permitted with conditions (e.g., via application proxy).*

| Source Zone | Destination Zone | Default Policy | Permitted Traffic (High Level) | Firewall Asset Enforcing |
|---|---|---|---|---|
| [Z-01] Internet | [Z-02] DMZ | Permit (restricted) | [e.g., HTTPS/443, HTTP/80 to published web services only] | [FW-001] |
| [Z-02] DMZ | [Z-03] Core Banking | Deny by default | [e.g., API calls on port 8443 from approved DMZ hosts only] | [FW-003] |
| [Z-04] Internal | [Z-03] Core Banking | Permit (restricted) | [e.g., Banking application access on port 9443 from staff VLANs] | [FW-003] |
| [Z-04] Internal | [Z-01] Internet | Permit (inspected) | [e.g., HTTP/HTTPS via web proxy; DNS via internal resolver] | [FW-001] |
| [Z-07] Vendor | [Z-03] Core Banking | Deny by default | [e.g., No direct access; requires jump server in Management Zone] | [FW-003] |
| [Any Zone] | [Z-05] Management | Deny by default | [e.g., SSH/22 and HTTPS/443 from Management Zone hosts only] | [All] |
| [Add rows as required] | | | | |

---

## 6. Firewall Rule Review Schedule

*Document the schedule for this and future review cycles. BNM RMiT Clause 10.38 requires reviews at least semi-annually. Record the planned and actual review dates, the scope of each cycle, and the sign-off status.*

### 6.1 Review Cycle Calendar

| Review Cycle | Scheduled Start Date | Scheduled Completion Date | Actual Completion Date | Lead Reviewer | Assets in Scope | Status |
|---|---|---|---|---|---|---|
| [e.g., 2025 H1 — Cycle 1] | [Date] | [Date] | [Date] | [Name] | [e.g., All — FW-001 to FW-004] | [e.g., Completed / In Progress / Planned] |
| [e.g., 2025 H2 — Cycle 2] | [Date] | [Date] | [Date] | [Name] | [e.g., All — FW-001 to FW-004] | [e.g., Planned] |
| [e.g., 2026 H1 — Cycle 1] | [Date] | [Date] | [Date] | [Name] | [e.g., All — FW-001 to FW-004] | [e.g., Planned] |

### 6.2 Current Review Cycle Details

| Field | Details |
|---|---|
| **Review Cycle Reference** | [e.g., 2025 H1 — Cycle 1] |
| **Review Period** | [Start Date] to [End Date] |
| **Review Trigger** | [e.g., Scheduled semi-annual review / Ad-hoc triggered by: specify reason] |
| **Total Rules Reviewed** | [Number] |
| **Review Methodology** | [e.g., Manual review of exported rule sets against business justification register; automated rule analysis via [tool name]; comparison against previous cycle baseline] |
| **Tools Used** | [e.g., Palo Alto Panorama, Cisco FMC, AWS Config, AlgoSec, FireMon — specify as applicable] |
| **Baseline Rule Set Date** | [Date of rule export used as review baseline] |
| **Review Completed By** | [Name, Role] |
| **Review Approved By** | [Name, Role] |
| **Date of Approval** | [Date] |

### 6.3 Rule Review Checklist

*For each review cycle, confirm that the following checks have been performed across all in-scope firewall assets. Check all that apply and record the reviewer's initials.*

| Check | Description | Completed | Reviewer Initials |
|---|---|---|---|
| Rule Necessity Review | All rules have a documented and current business justification | [ ] Yes / [ ] No | [Initials] |
| Redundant Rule Identification | Rules that duplicate the effect of other rules have been identified | [ ] Yes / [ ] No | [Initials] |
| Overly Permissive Rules | Rules using "Any" for source, destination, or service have been reviewed and justified or remediated | [ ] Yes / [ ] No | [Initials] |
| Unused Rule Identification | Rules with zero or very low hit counts (configurable threshold) over the review period have been flagged | [ ] Yes / [ ] No | [Initials] |
| Temporary Rule Expiry | Time-limited rules that have passed their expiry date have been identified and disabled/removed | [ ] Yes / [ ] No | [Initials] |
| Zone Segmentation Compliance | Rules are consistent with the documented zone-to-zone traffic policy in Section 5 | [ ] Yes / [ ] No | [Initials] |
| Least Privilege Principle | Rules permit only the minimum ports, protocols, and IP ranges required | [ ] Yes / [ ] No | [Initials] |
| Shadow / Shadowed Rule Review | Rules that are fully overridden by preceding rules (and thus never matched) have been identified | [ ] Yes / [ ] No | [Initials] |
| Logging and Alerting Verification | All rules for critical traffic flows have logging enabled; deny rules generate alerts where required | [ ] Yes / [ ] No | [Initials] |
| Change Management Reconciliation | All rule changes since the last review cycle are traceable to approved change requests | [ ] Yes / [ ] No | [Initials] |
| Third-Party / Vendor Rule Review | Rules permitting vendor or third-party access remain contractually required and appropriately scoped | [ ] Yes / [ ] No | [Initials] |
| DR Rule Set Parity | DR firewall rule sets are consistent with production (or deviations are documented and justified) | [ ] Yes / [ ] No | [Initials] |

---

## 7. Network Architecture Diagram

*Attach or embed the current network architecture diagram that depicts the firewall placement, network segmentation zones, and traffic flows reviewed in this cycle. The diagram must be version-controlled and current as of the review date. If the diagram is maintained in a separate system (e.g., Visio, draw.io, network documentation platform), provide a reference and confirm it has been reviewed.*

### 7.1 Current Architecture Diagram

*Embed or attach the network architecture diagram below. If embedding is not feasible in this document format, insert the diagram reference and confirm review.*

> **[ATTACH: Network Architecture Diagram — [Diagram Reference / Version / Date]]**
>
> *If diagram is maintained separately, confirm here that it has been reviewed as part of this exercise.*

| Field | Details |
|---|---|
| **Diagram Reference** | [e.g., NET-ARCH-DIAGRAM-v3.2] |
| **Diagram Version** | [Version Number] |
| **Diagram Last Updated** | [Date] |
| **Diagram Maintained By** | [Name / Team] |
| **Diagram Location** | [e.g., SharePoint / Network Documentation Repository — [Link or Path]] |
| **Confirmed Current as of Review Date** | [ ] Yes / [ ] No — If No, explain: [Explanation] |
| **Diagram Reviewed By** | [Name, Role] |

### 7.2 Architecture Changes Since Last Review

*Document any changes to the network architecture that have occurred since the previous review cycle and confirm that firewall rules have been updated accordingly.*

| Change Reference | Description of Architectural Change | Date Implemented | Impact on Firewall Rules | Rules Updated | Change Approved By |
|---|---|---|---|---|---|
| [CHG-XXXX] | [e.g., Addition of new cloud VPC for digital banking platform] | [Date] | [e.g., New security group rules added for inter-VPC traffic; see Appendix B] | [ ] Yes / [ ] No | [Name] |
| [CHG-XXXX] | [e.g., Decommission of legacy DMZ server segment] | [Date] | [e.g., 12 rules referencing decommissioned IPs removed] | [ ] Yes / [ ] No | [Name] |
| [Add rows as required] | | | | | |

---

## 8. Review Findings and Actions

*This section records all findings from the current review cycle and the actions taken or planned. Each finding must be assigned a severity rating, an owner, and a target remediation date. Findings must be tracked to closure.*

### 8.1 Severity Rating Criteria

| Severity | Definition | Remediation Timeline |
|---|---|---|
| **Critical** | Rule creates an immediate, exploitable security risk (e.g., permits unrestricted access to core banking from the internet). | Immediate — within 24 hours |
| **High** | Rule significantly exceeds least-privilege requirements or violates segmentation policy with material risk. | Within 7 calendar days |
| **Medium** | Rule is overly permissive, redundant, or lacks current business justification, with moderate risk. | Within 30 calendar days |
| **Low** | Minor hygiene issue — unused rule, missing documentation, or minor policy deviation with low risk. | Within 90 calendar days |
| **Informational** | Observation requiring no immediate action; noted for awareness or future review. | Next review cycle |

### 8.2 Findings Register

| Finding ID | Asset ID | Firewall Hostname | Rule ID / Name | Finding Description | Severity | Zone(s) Affected | Recommended Action | Action Owner | Target Date | Status | Closure Evidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [FIND-001] | [FW-001] | [fw-perimeter-01] | [Rule-ID / Name] | [e.g., Rule permits inbound TCP/any from 0.0.0.0/0 to DMZ web server pool — overly permissive; should be restricted to HTTPS/443 only] | [High] | [Z-01 to Z-02] | [e.g., Modify rule to restrict to port 443 only; remove 'any' service object] | [Name] | [Date] | [Open / In Progress / Closed] | [e.g., Change reference CHG-XXXX; rule modified DD/MM/YYYY] |
| [FIND-002] | [FW-003] | [fw-internal-core] | [Rule-ID / Name] | [e.g., Rule has recorded zero hits in the past 180 days; no current business justification on file] | [Low] | [Z-04 to Z-03] | [e.g., Obtain business justification or disable and remove rule after 30-day observation period] | [Name] | [Date] | [Open] | |
| [FIND-003] | [FW-004] | [cloud-sg-prod-vpc] | [Rule-ID / Name] | [e.g., Temporary vendor access rule created for incident response has not been removed; vendor engagement concluded 45 days ago] | [High] | [Z-07 to Z-03] | [e.g., Immediately remove temporary vendor rule; verify no residual access exists] | [Name] | [Date] | [Closed] | [e.g., Rule removed DD/MM/YYYY; confirmed by [Name]] |
| [FIND-00X] | [Add rows as required] | | | | | | | | | | |

### 8.3 Findings Summary

| Severity | Total Findings | Open | In Progress | Closed |
|---|---|---|---|---|
| Critical | [Number] | [Number] | [Number] | [Number] |
| High | [Number] | [Number] | [Number] | [Number] |
| Medium | [Number] | [Number] | [Number] | [Number] |
| Low | [Number] | [Number] | [Number] | [Number] |
| Informational | [Number] | [Number] | [Number] | [Number] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** |

### 8.4 Rules Removed or Disabled This Cycle

*Document all rules that were removed or disabled as a result of this review. This provides an auditable record of rule set reductions.*

| Asset ID | Firewall Hostname | Rule ID / Name | Reason for Removal / Disablement | Date Removed / Disabled | Removed By | Approved By | Change Reference |
|---|---|---|---|---|---|---|---|
| [FW-001] | [fw-perimeter-01] | [Rule-ID / Name] | [e.g., Redundant — superseded by Rule-ID; duplicate effect] | [Date] | [Name] | [Name] | [CHG-XXXX] |
| [FW-003] | [fw-internal-core] | [Rule-ID / Name] | [e.g., No business justification; zero hits for 180 days] | [Date] | [Name] | [Name] | [CHG-XXXX] |
| [Add rows as required] | | | | | | | |

**Total Rules Removed / Disabled This Cycle:** [Number]

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for firewall rule review activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Network Security Manager | Network Operations Team | CISO / Head of IT Security | IT Audit | Business Unit Owner | Third-Party / Vendor |
|---|---|---|---|---|---|---|
| Define review schedule and scope | A/R | C | C | I | I | — |
| Export and baseline firewall rule sets | C | R | — | — | — | — |
| Conduct rule-by-rule review | A | R | — | — | — | — |
| Validate business justification for rules | C | R | — | — | A | — |
| Identify and log findings | A | R | I | — | — | — |
| Assign and communicate remediation actions | A/R | I | I | I | I | I |
| Implement approved rule changes | C | R | — | — | — | — |
| Approve rule changes via change management | A | C | C | — | — | — |
| Review and approve completed findings register | C | C | A/R | I | — | — |
| Conduct independent verification of closure | I | I | C | A/R | — | — |
| Report outcomes to management / board | C | — | A/R | I | I | — |
| Maintain archive of review records | R | C | A | I | — | — |
| Vendor rule validation (where applicable) | A | R | C | — | — | C |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Name, Role] | Initial version created. |
| [1.1] | [Date] | [Name, Role] | [e.g., Updated to reflect new cloud firewall assets in scope; revised Zone definitions in Section 5.] |
| [Add rows as required] | | | |

### 10.2 Approval Sign-Off

*This document must be reviewed and approved by the designated authorities prior to being treated as an official compliance record. Signatures confirm that the review has been conducted in accordance with [Organisation Name]'s firewall management policy and BNM RMiT requirements.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Lead Reviewer — Network Security Manager | [Name] | [Signature / Digital Signature Reference] | [Date] |
| Independent Reviewer | [Name] | [Signature / Digital Signature Reference] | [Date] |
| CISO / Head of IT Security | [Name] | [Signature / Digital Signature Reference] | [Date] |
| IT Audit Representative (where applicable) | [Name] | [Signature / Digital Signature Reference] | [Date] |

---

## 11. References

The following regulatory instruments, internal policies, and standards are referenced by this document:

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.38 | Requires financial institutions to review firewall rules at least semi-annually to identify and remove rules that are redundant, overly permissive, or no longer aligned with business requirements. |
| BNM RMiT | Clause 10.30–10.37 | Network security controls, segmentation requirements, and perimeter defence obligations under RMiT. |
| [Internal Policy] | [e.g., [Organisation Name] Network Security Policy, v[X.X]] | Internal policy governing firewall management, change control, and network segmentation standards. |
| [Internal Policy] | [e.g., [Organisation Name] IT Asset Management Policy, v[X.X]] | Defines asset classification, ownership, and custodianship requirements referenced in Sections 2–4. |
| [Internal Policy] | [e.g., [Organisation Name] Change Management Policy, v[X.X]] | Governs the approval and implementation of changes to firewall rule sets. |
| ISO/IEC 27001:2022 | Annex A Control 8.20 | Networks security — supplementary reference for network control implementation. |
| ISO/IEC 27001:2022 | Annex A Control 8.22 | Segregation of networks — supplementary reference for zone segmentation requirements. |
| NIST SP 800-41 Rev 1 | Section 4 | Guidelines on Firewalls and Firewall Policy — supplementary technical reference. |

---

## 12. Appendices

### Appendix A — Firewall Rule Export (Current Baseline)

*Attach or reference the full exported firewall rule set for each in-scope asset reviewed in this cycle. This export serves as the baseline evidence for the review. Rule exports should be stored in the designated secure evidence repository.*

| Asset ID | Firewall Hostname | Export File Reference | Export Date | Export Location | Exported By |
|---|---|---|---|---|---|
| [FW-001] | [fw-perimeter-01] | [e.g., FW001-rules-export-YYYYMMDD.csv] | [Date] | [e.g., Secure Evidence Repository — [Path / Reference]] | [Name] |
| [FW-002] | [fw-perimeter-02] | [e.g., FW002-rules-export-YYYYMMDD.csv] | [Date] | [e.g., Secure Evidence Repository — [Path / Reference]] | [Name] |
| [FW-003] | [fw-internal-core] | [e.g., FW003-rules-export-YYYYMMDD.csv] | [Date] | [e.g., Secure Evidence Repository — [Path / Reference]] | [Name] |
| [FW-004] | [cloud-sg-prod-vpc] | [e.g., FW004-sg-export-YYYYMMDD.json] | [Date] | [e.g., Secure Evidence Repository — [Path / Reference]] | [Name] |

### Appendix B — Change Records for This Review Cycle

*List all change management tickets raised as a result of findings from this review cycle. Each change must be traceable back to a finding in Section 8.*

| Change Reference | Finding ID(s) | Description | Priority | Status | Completion Date |
|---|---|---|---|---|---|
| [CHG-XXXX] | [FIND-001] | [Description of change implemented] | [e.g., High] | [e.g., Completed] | [Date] |
| [CHG-XXXX] | [FIND-002, FIND-003] | [Description of change implemented] | [e.g., Medium] | [e.g., In Progress] | [Target Date] |
| [Add rows as required] | | | | | |

### Appendix C — Previous Review Cycle Comparison

*Summarise outstanding findings from the previous review cycle and confirm their current status. This demonstrates continuity of remediation tracking.*

| Finding ID (Prior Cycle) | Prior Cycle Reference | Description | Prior Severity | Agreed Remediation Date | Current Status | Notes |
|---|---|---|---|---|---|---|
| [FIND-P-001] | [e.g., 2024 H2 — Cycle 2] | [Description] | [Severity] | [Date] | [e.g., Closed — see CHG-XXXX] | [Notes] |
| [FIND-P-002] | [e.g., 2024 H2 — Cycle 2] | [Description] | [Severity] | [Date] | [e.g., Carried forward — revised target: [Date]] | [Notes] |
| [Add rows as required] | | | | | | |

### Appendix D — Automated Tool Output References

*Where automated firewall analysis tools were used (e.g., AlgoSec, FireMon, Panorama Security Policy Optimiser), reference the output reports here.*

| Tool Name | Version | Report Reference | Report Date | Report Location |
|---|---|---|---|---|
| [e.g., AlgoSec FireFlow] | [Version] | [Report Reference / File Name] | [Date] | [Repository Path / Reference] |
| [e.g., Palo Alto Panorama — Policy Optimiser] | [Version] | [Report Reference / File Name] | [Date] | [Repository Path / Reference] |
| [Add rows as required] | | | | |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| DMZ | Demilitarised Zone — a network segment that exposes an organisation's external-facing services to an untrusted network (typically the internet) while keeping internal networks isolated. |
| Firewall Rule | A configured policy entry on a firewall device that permits or denies network traffic based on defined criteria (source, destination, port, protocol, application). |
| Hit Count | The number of times a firewall rule has been matched by network traffic within a defined observation period. A zero or very low hit count may indicate a redundant rule. |
| Least Privilege | The principle that network access rules should permit only the minimum traffic necessary to support a defined business function. |
| Rule Set | The complete ordered collection of firewall rules configured on a firewall device or logical firewall instance. |
| Segmentation | The practice of dividing a network into distinct zones with controlled, policy-enforced traffic flows between them, limiting the blast radius of a security incident. |
| Shadow Rule | A firewall rule that is never matched because a preceding rule already handles all traffic that would otherwise reach it. Shadow rules are a hygiene finding and should be reviewed for removal. |
| Trust Zone | A defined network segment assigned a trust level that governs the default behaviour of traffic entering or leaving it. |

---

*End of Document — [Organisation Name] — Firewall Rule Review Records — [Document ID] — Version 1.0*

*This document is classified **Confidential**. It must be handled, stored, and transmitted in accordance with [Organisation Name]'s information classification and handling policy. Unauthorised disclosure is prohibited.*