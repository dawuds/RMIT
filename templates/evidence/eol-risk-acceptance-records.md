# EOL Risk Acceptance Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document serves as the formal **End-of-Life (EOL) Risk Acceptance Record** for [Organization Name], providing structured evidence of risk acceptance decisions and compensating controls applied to technology assets that have reached or exceeded their vendor-supported end-of-life date.

This record is maintained in compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically:

- **Clause 10.19** — which requires financial institutions to manage risks associated with unsupported or obsolete technology, including the documentation of formal risk acceptance and the implementation of compensating controls where immediate remediation or decommissioning is not feasible.

**Scope:** This record applies to all technology assets — including hardware, operating systems, middleware, applications, databases, and network components — operated by [Organization Name] that have passed their vendor-announced EOL date and remain in active or standby production use. Assets managed by third parties on behalf of [Organization Name] are also in scope where [Organization Name] retains operational accountability.

---

## 2. Asset / Item Identification

*Record the full identification details of each technology asset that has reached end-of-life status. Each entry in this register must correspond to a single distinct asset or asset group with a shared EOL profile. Use the asset register reference where applicable.*

| Field | Details |
|---|---|
| **EOL Record Reference** | [EOL-YYYY-NNN] |
| **Asset Register ID** | [Asset ID from CMDB / Asset Register] |
| **Asset / System Name** | [Full descriptive name of the system or component] |
| **Asset Type** | [Hardware / Operating System / Application / Database / Middleware / Network Device / Other] |
| **Vendor / Manufacturer** | [Vendor Name] |
| **Product / Model / Version** | [Product name, model number, and version string] |
| **Serial Number / License Key** | [Where applicable] |
| **Hosted Environment** | [On-premises / Private Cloud / Public Cloud / Co-location / Hybrid] |
| **Physical / Logical Location** | [Data centre, rack, server hostname, IP address range, or cloud region] |
| **Number of Instances** | [Count of affected instances, nodes, or units] |
| **Business System Supported** | [Name of the business application or service this asset underpins] |

---

## 3. Classification and Categorisation

*Classify the asset according to its criticality to the organisation's operations and the sensitivity of data it processes. This classification directly informs the risk tolerance and the adequacy of compensating controls required. Use [Organization Name]'s information classification policy as the authoritative reference.*

### 3.1 Criticality Classification

| Dimension | Rating | Basis |
|---|---|---|
| **System Criticality** | [Critical / High / Medium / Low] | [Justification, e.g., core banking, payment processing, regulatory reporting] |
| **Data Sensitivity** | [Restricted / Confidential / Internal / Public] | [Type of data processed: customer PII, financial data, credentials, etc.] |
| **Availability Requirement** | [24×7 / Business Hours / Scheduled] | [SLA or RTO/RPO target for dependent services] |
| **Regulatory / Compliance Relevance** | [Yes / No] | [If yes, specify applicable regulations: RMiT, PDPA, AMLA, etc.] |
| **Overall Risk Rating** | [Critical / High / Medium / Low] | [Derived from the above dimensions per [Organization Name] risk matrix] |

### 3.2 Technology Category

*Select the category that best describes the nature of the EOL asset to assist in routing for appropriate technical review.*

- [ ] End-of-Life Operating System
- [ ] End-of-Life Database Engine
- [ ] End-of-Life Application / Software
- [ ] End-of-Life Hardware (server, appliance, network device)
- [ ] End-of-Life Middleware / Integration Platform
- [ ] End-of-Life Security Tool or Appliance
- [ ] Other: [Specify]

---

## 4. Owner and Custodian

*Identify the accountable and responsible parties for this EOL asset. The Asset Owner holds business accountability; the Asset Custodian is responsible for day-to-day technical management. Both parties must sign off on this record.*

| Role | Name | Department | Contact |
|---|---|---|---|
| **Asset Owner** (Business Accountable) | [Full Name] | [Department / Business Unit] | [Email / Extension] |
| **Asset Custodian** (Technical Responsible) | [Full Name] | IT Operations / [Team Name] | [Email / Extension] |
| **Risk Acceptor** | [Full Name — must be at appropriate authority level] | [Department] | [Email / Extension] |
| **IT Operations Manager** | [Full Name] | IT Operations | [Email / Extension] |
| **Information Security Officer** | [Full Name] | Information Security | [Email / Extension] |

> **Note:** The Risk Acceptor must hold delegated authority commensurate with the Overall Risk Rating assigned in Section 3. For Critical or High-rated assets, acceptance must be escalated to [CIO / CTO / Risk Committee — specify per [Organization Name] policy].

---

## 5. Status and Lifecycle Stage

*Document the full lifecycle context of the asset, including the official vendor EOL date, the organisation's planned disposition, and the projected timeline for remediation. This section provides the factual basis for the risk acceptance decision.*

### 5.1 Lifecycle Dates

| Milestone | Date | Source / Reference |
|---|---|---|
| **Vendor End of Sale (EoS) Date** | [Date or N/A] | [Vendor advisory, URL, or document reference] |
| **Vendor End of Support (EoL) Date** | [Date] | [Vendor advisory, URL, or document reference] |
| **Vendor Extended Support Expiry** | [Date or N/A] | [If extended/paid support was procured] |
| **Date Organisation Identified EOL Status** | [Date] | [Source: vulnerability scan, vendor notification, IT review] |
| **Date This Record Raised** | [Date] | [Auto-populated or manual] |
| **Planned Remediation / Decommission Date** | [Date] | [Target date for upgrade, migration, or decommission] |
| **Expected Risk Acceptance Expiry** | [Date] | [Maximum duration of this acceptance — not to exceed [90/180] days without re-review] |

### 5.2 Current Operational Status

| Field | Details |
|---|---|
| **Current Status** | [Active Production / Standby / Decommissioning in Progress / Isolated] |
| **Can Asset Be Immediately Decommissioned?** | [Yes / No] |
| **Reason Immediate Action Is Not Feasible** | [e.g., vendor migration timeline, budget cycle, dependency on unsupported integration, ongoing regulatory audit freeze] |
| **Remediation Approach** | [Upgrade in-place / Migrate to new platform / Decommission / Replace with SaaS / Other] |
| **Remediation Project Reference** | [Project ID or change record number, if applicable] |

### 5.3 Known Vulnerabilities

*List any publicly disclosed vulnerabilities (CVEs) applicable to this asset at the time of record creation. Where a vulnerability scanner has been run, attach the report as an appendix.*

| CVE ID | Severity (CVSS) | Description | Mitigated by Compensating Control? |
|---|---|---|---|
| [CVE-YYYY-NNNNN] | [Critical / High / Medium / Low] | [Brief description] | [Yes / Partial / No] |
| [CVE-YYYY-NNNNN] | [Critical / High / Medium / Low] | [Brief description] | [Yes / Partial / No] |
| [Add rows as required] | | | |

> If no CVEs are currently applicable, state: *"No publicly disclosed CVEs applicable to this version at the date of record creation. Ongoing monitoring is in place as documented in Section 6."*

---

## 6. Risk Assessment and Compensating Controls

*Articulate the specific risks arising from continued operation of this EOL asset and document the compensating controls implemented to reduce residual risk to an acceptable level. Controls must be specific, measurable, and verifiable by audit.*

### 6.1 Risk Statement

> [Provide a concise narrative risk statement. Example: "Continued operation of [Asset Name] beyond its vendor EOL date of [Date] exposes [Organization Name] to the risk of unpatched security vulnerabilities, as the vendor will no longer release security updates. This may result in exploitation of the system, leading to unauthorized data access, service disruption, or regulatory non-compliance under RMiT Clause 10.19."]

### 6.2 Inherent Risk Rating

| Dimension | Rating |
|---|---|
| **Likelihood (without controls)** | [Very High / High / Medium / Low / Very Low] |
| **Impact (without controls)** | [Critical / High / Medium / Low] |
| **Inherent Risk** | [Critical / High / Medium / Low] |

### 6.3 Compensating Controls

*For each compensating control, specify the control type, implementation status, responsible party, and evidence of effectiveness. Controls must collectively reduce residual risk to an acceptable level.*

| # | Control Description | Control Type | Status | Responsible Party | Evidence / Verification Method |
|---|---|---|---|---|---|
| 1 | [e.g., Network segmentation — asset isolated to dedicated VLAN with firewall rules restricting inbound/outbound traffic to approved sources only] | [Preventive] | [Implemented / Planned — by Date] | [Team / Name] | [Firewall rule review, network diagram] |
| 2 | [e.g., Enhanced monitoring — SIEM alerts configured for all authentication events and anomalous traffic on this asset, reviewed daily] | [Detective] | [Implemented / Planned — by Date] | [Team / Name] | [SIEM alert configuration, daily log review record] |
| 3 | [e.g., Privileged access restriction — access limited to named administrators via PAM solution; no direct internet access permitted] | [Preventive] | [Implemented / Planned — by Date] | [Team / Name] | [PAM access review report] |
| 4 | [e.g., Vulnerability scanning — weekly authenticated scans with results reviewed by InfoSec within 48 hours] | [Detective] | [Implemented / Planned — by Date] | [Team / Name] | [Scan reports, review records] |
| 5 | [e.g., Incident response playbook — specific playbook developed for compromise scenarios involving this asset] | [Corrective] | [Implemented / Planned — by Date] | [Team / Name] | [Playbook reference number] |
| [Add rows as required] | | | | | |

### 6.4 Residual Risk Rating

| Dimension | Rating |
|---|---|
| **Likelihood (with compensating controls)** | [High / Medium / Low / Very Low] |
| **Impact (with compensating controls)** | [Critical / High / Medium / Low] |
| **Residual Risk** | [High / Medium / Low] |
| **Risk Acceptance Decision** | [Accepted / Conditionally Accepted / Not Accepted — escalate] |

### 6.5 Conditions of Acceptance

*List any specific conditions that must be maintained for this risk acceptance to remain valid. Breach of any condition invalidates the acceptance and requires immediate escalation.*

1. [Condition 1 — e.g., Compensating controls listed in Section 6.3 remain fully operational at all times]
2. [Condition 2 — e.g., No new Critical or High CVEs are published without immediate reassessment]
3. [Condition 3 — e.g., Remediation milestone dates in Section 5.1 are not deferred without formal re-acceptance]
4. [Add conditions as required]

---

## 7. Last Review Date and Review History

*Record each periodic or event-driven review of this EOL Risk Acceptance Record. Reviews must occur at least quarterly or upon any material change to the asset's risk profile, vulnerability landscape, or remediation timeline.*

| Review # | Review Date | Review Type | Reviewed By | Outcome | Next Review Date |
|---|---|---|---|---|---|
| 1 | [Date] | [Initial / Quarterly / Event-driven] | [Name, Role] | [Accepted / Controls updated / Escalated] | [Date] |
| 2 | [Date] | [Initial / Quarterly / Event-driven] | [Name, Role] | [Accepted / Controls updated / Escalated] | [Date] |
| [Add rows as required] | | | | | |

### 7.1 Event-Driven Review Triggers

*This record must be immediately reviewed upon any of the following events:*

- [ ] Publication of a new Critical or High severity CVE affecting this asset
- [ ] Failure or degradation of any compensating control listed in Section 6.3
- [ ] Change to the asset's network exposure or access profile
- [ ] Breach or security incident involving this or a similar asset
- [ ] Deferral of the planned remediation date beyond the accepted expiry date
- [ ] Change of Asset Owner or Asset Custodian
- [ ] Change in applicable regulatory requirements

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for EOL risk acceptance activities across [Organization Name].*

| Activity | IT Operations Manager | Asset Owner | Asset Custodian | Information Security | Chief Information Officer | Risk & Compliance |
|---|---|---|---|---|---|---|
| Identify and flag EOL assets | A/R | I | R | C | I | I |
| Complete EOL Risk Acceptance Record | A | C | R | C | I | C |
| Assess compensating controls adequacy | C | I | R | A | I | C |
| Approve risk acceptance (Medium/Low) | A | R | I | C | I | C |
| Approve risk acceptance (High/Critical) | R | R | I | C | A | C |
| Implement compensating controls | A | I | R | C | I | I |
| Conduct quarterly / event-driven review | A | C | R | C | I | C |
| Report EOL status to Risk Committee | R | I | I | C | A | R |
| Escalate breached conditions | R | I | R | A | I | C |
| Maintain record in asset register / CMDB | A | I | R | I | I | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial version |
| [x.x] | [Date] | [Author Name, Role] | [Description of changes] |

### 9.2 Approval Sign-Off

*By signing below, the approvers confirm that the risk assessment is accurate, compensating controls are adequate and in place, and the residual risk is accepted in accordance with [Organization Name]'s risk appetite.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Full Name] | _________________ | [Date] |
| Asset Owner | [Full Name] | _________________ | [Date] |
| Information Security Officer | [Full Name] | _________________ | [Date] |
| Chief Information Officer | [Full Name] | _________________ | [Date] |
| [Risk Acceptor — if escalated] | [Full Name] | _________________ | [Date] |

---

## 10. References

The following regulatory documents and internal policies govern this artifact:

| Reference | Document | Clause / Section |
|---|---|---|
| BNM RMiT | Bank Negara Malaysia — Risk Management in Technology Policy Document | **Clause 10.19** — Technology Obsolescence and End-of-Life Management |
| BNM RMiT | Bank Negara Malaysia — Risk Management in Technology Policy Document | Clause 10.1 — Technology Risk Management Framework |
| BNM RMiT | Bank Negara Malaysia — Risk Management in Technology Policy Document | Clause 10.3 — Technology Asset Management |
| Internal | [Organization Name] Information Security Policy | [Section reference] |
| Internal | [Organization Name] Technology Asset Management Procedure | [Section reference] |
| Internal | [Organization Name] Risk Acceptance and Escalation Framework | [Section reference] |
| Internal | [Organization Name] Technology Risk Appetite Statement | [Section reference] |

---

## 11. Appendices

### Appendix A — Vulnerability Scan Report

*Attach the most recent authenticated vulnerability scan report for this asset. The report must be dated within [30] days of this record's creation or last review date.*

> **Attachment:** [Scan Report filename / reference — e.g., VULN-SCAN-[AssetID]-[YYYYMMDD].pdf]

### Appendix B — Network Segmentation Diagram

*Where network isolation is cited as a compensating control, attach a current network diagram clearly showing the asset's placement, VLAN boundaries, and applicable firewall or ACL rules.*

> **Attachment:** [Network diagram filename / reference]

### Appendix C — Compensating Control Evidence

*Attach supporting evidence for each compensating control listed in Section 6.3. Evidence may include firewall rule exports, PAM access reports, SIEM alert configuration screenshots, or log review records.*

> **Attachment:** [Evidence bundle filename / reference — e.g., EOL-[AssetID]-Controls-Evidence-[YYYYMMDD].zip]

### Appendix D — Remediation Project Plan

*Where a formal remediation project exists, attach or reference the project plan, including key milestones and the committed go-live date for the replacement or upgraded system.*

> **Attachment / Reference:** [Project plan filename or project management system reference — e.g., Project ID: [PROJ-NNNN]]

### Appendix E — Vendor EOL Advisory

*Attach or cite the vendor's official communication confirming the end-of-life date for the affected product version.*

> **Attachment / Reference:** [Vendor advisory document, URL archived on [Date], or internal ticket reference]

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure is prohibited. Retain in accordance with [Organization Name]'s Records Retention Policy — minimum retention period: [7 years] from the date of asset decommission.*