# Configuration Management Database (CMDB)

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset/Item Identification](#2-assetitem-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Status and Lifecycle Stage](#5-status-and-lifecycle-stage)
6. [Last Review Date](#6-last-review-date)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Configuration Management Database (CMDB) serves as the authoritative inventory of technology assets, their configurations, and interdependencies within [Organization Name]. It supports the management, monitoring, and control of Configuration Items (CIs) throughout their lifecycle to ensure the integrity, availability, and security of the organisation's technology environment.

This document fulfils the requirements of Bank Negara Malaysia's **Risk Management in Technology (RMiT)** policy, specifically **Clause 10.15**, which mandates that financial institutions maintain a comprehensive and up-to-date record of technology assets and their configurations.

### 1.2 Scope

This CMDB covers all technology assets owned, operated, or managed by [Organization Name], including but not limited to:

- Physical and virtual servers (on-premises and cloud-hosted)
- Network infrastructure (routers, switches, firewalls, load balancers)
- Endpoints (workstations, laptops, mobile devices)
- Applications and software (commercial off-the-shelf, bespoke, and SaaS)
- Databases and data stores
- Security tools and platforms
- Third-party and outsourced technology components
- Supporting infrastructure (data centres, UPS, HVAC systems critical to IT operations)

**Out of Scope:** [List any asset categories explicitly excluded, e.g., personal devices not enrolled in MDM, non-IT office equipment]

### 1.3 Regulatory Context

| Requirement | Reference |
|---|---|
| Risk Management in Technology (RMiT) | BNM/RH/PD 028-2, Clause 10.15 |
| Technology Risk Management | RMiT Paragraph 10.15 — Configuration and Asset Management |

---

## 2. Asset/Item Identification

*Record each Configuration Item (CI) with a unique identifier and sufficient descriptive information to distinguish it from all other assets. Every CI in this CMDB must be traceable to a business function or service.*

### 2.1 Asset Register

| CI ID | Asset Name | Asset Type | Description | Serial Number / Instance ID | Hostname / IP Address | Location / Environment | Associated Service/System |
|---|---|---|---|---|---|---|---|
| CI-[XXXX]-001 | [Asset Name] | [Server / Network / Endpoint / Application / Database / Other] | [Brief description of asset purpose] | [Serial No. / Cloud Instance ID] | [Hostname or IP] | [DC Rack / Cloud Region / Remote Site] | [Business service or application this CI supports] |
| CI-[XXXX]-002 | | | | | | | |
| CI-[XXXX]-003 | | | | | | | |

### 2.2 Asset Identification Standards

*Define the naming conventions and ID formats used to uniquely identify assets within this CMDB.*

- **CI ID Format:** `CI-[DEPT CODE]-[SEQUENTIAL NUMBER]` (e.g., CI-INFRA-001, CI-APP-042)
- **Naming Convention:** [Describe hostname/asset naming standards adopted by the organisation]
- **Unique Identifier Source:** [CMDB Tool Name, e.g., ServiceNow, ManageEngine, Freshservice]
- **Auto-Discovery Method:** [Describe any automated discovery tools or agents used, e.g., SCCM, Qualys, Nessus Agent]

---

## 3. Classification and Categorisation

*Classify each asset by type, criticality, and sensitivity to enable appropriate risk-based controls. Classification must align with the organisation's Information Classification Policy and RMiT critical system designations.*

### 3.1 Classification Framework

| Classification Level | Description | Examples |
|---|---|---|
| **Critical** | Systems whose failure would cause significant disruption to core banking operations or regulatory obligations | Core banking system, payment gateway, SWIFT infrastructure |
| **High** | Systems supporting significant business functions with moderate recovery tolerance | Internet banking, internal ERP, AD/LDAP |
| **Medium** | Systems supporting business operations, recoverable within standard RTO/RPO | Internal collaboration tools, HR systems |
| **Low** | Non-critical systems with minimal business impact if unavailable | Internal intranet, test environments |

### 3.2 Asset Classification Register

| CI ID | Asset Name | Asset Type | Criticality | Data Sensitivity | Business Function | Regulatory Relevance |
|---|---|---|---|---|---|---|
| CI-[XXXX]-001 | [Asset Name] | [Type] | [Critical / High / Medium / Low] | [Public / Internal / Confidential / Restricted] | [Business function supported] | [BNM RMiT / PDPA / NACSA / Other] |
| CI-[XXXX]-002 | | | | | | |

### 3.3 Technology Asset Categories

*Select the applicable category for each CI using the standardised taxonomy below.*

- **HW-SRV** — Physical Server
- **HW-NET** — Network Device (Router, Switch, Firewall)
- **HW-END** — Endpoint Device (Workstation, Laptop)
- **HW-MOB** — Mobile Device
- **HW-INF** — Infrastructure Hardware (UPS, KVM, Storage Array)
- **SW-APP** — Business Application
- **SW-OS** — Operating System
- **SW-DB** — Database Management System
- **SW-SEC** — Security Software/Platform
- **SW-MW** — Middleware
- **CLD-IaaS** — Cloud Infrastructure (IaaS)
- **CLD-PaaS** — Cloud Platform (PaaS)
- **CLD-SaaS** — Software as a Service (SaaS)
- **3P-SVC** — Third-Party / Outsourced Service

---

## 4. Owner and Custodian

*Assign clear accountability for each CI by designating both a business owner (accountable for the asset's purpose and data) and a technical custodian (responsible for day-to-day management and configuration). Every CI must have at least one named owner.*

### 4.1 Ownership Register

| CI ID | Asset Name | Business Owner (Role) | Business Owner (Name) | Technical Custodian (Role) | Technical Custodian (Name) | Department | Vendor / Supplier | Vendor Contact |
|---|---|---|---|---|---|---|---|---|
| CI-[XXXX]-001 | [Asset Name] | [e.g., Head of IT Infrastructure] | [Name] | [e.g., Systems Administrator] | [Name] | [Department] | [Vendor Name] | [Contact Email / Phone] |
| CI-[XXXX]-002 | | | | | | | | |

### 4.2 Ownership Definitions

| Role | Accountability |
|---|---|
| **Business Owner** | Accountable for the business use, data classification, and risk acceptance related to the CI. Approves changes to the asset's purpose or classification. |
| **Technical Custodian** | Responsible for the operational management, patching, configuration, and technical upkeep of the CI. Implements changes approved by the Business Owner. |
| **Third-Party Custodian** | Where management is outsourced, the named vendor or managed service provider contact responsible for the CI under SLA. |

---

## 5. Status and Lifecycle Stage

*Track the operational status and lifecycle stage of each CI to ensure that only authorised, production-ready assets are deployed and that decommissioned assets are properly retired. This supports change management, vulnerability management, and asset disposal processes.*

### 5.1 Lifecycle Status Definitions

| Status | Description |
|---|---|
| **Planned** | Asset has been approved for procurement or deployment; not yet in service |
| **In Procurement** | Purchase order raised; asset not yet received |
| **In Testing** | Asset received and undergoing acceptance testing or UAT |
| **Active** | Asset is deployed and operational in its target environment |
| **Maintenance** | Asset is temporarily offline for scheduled maintenance |
| **Decommissioning** | Asset is being phased out; services being migrated |
| **Retired** | Asset has been decommissioned and physically/logically removed |
| **Disposed** | Asset has been securely disposed of in accordance with the Media Disposal Policy |

### 5.2 Lifecycle and Status Register

| CI ID | Asset Name | Current Status | Environment | Date Deployed | Scheduled Retirement Date | Last Patch Date | Last Config Baseline Date | Baseline Config Reference |
|---|---|---|---|---|---|---|---|---|
| CI-[XXXX]-001 | [Asset Name] | [Active / Planned / Retired / etc.] | [Production / UAT / Development / DR] | [DD/MM/YYYY] | [DD/MM/YYYY or N/A] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Config Baseline Doc ID or link] |
| CI-[XXXX]-002 | | | | | | | | |

### 5.3 Configuration Baseline Details

*For each active CI, record its approved baseline configuration. Deviations from the baseline must be formally approved via the Change Management process.*

| CI ID | Asset Name | OS / Firmware Version | Software Version | Approved Hardening Standard | CIS Benchmark Level | Known Exceptions | Exception Reference |
|---|---|---|---|---|---|---|---|
| CI-[XXXX]-001 | [Asset Name] | [OS version, firmware rev] | [Application version] | [CIS / NIST / Internal Standard Name] | [Level 1 / Level 2 / Custom] | [Brief description or "None"] | [Exception approval doc ID] |
| CI-[XXXX]-002 | | | | | | | |

### 5.4 Interdependency Mapping

*Document the relationships between CIs to support impact assessment for changes, incidents, and vulnerability management.*

| CI ID | Asset Name | Depends On (CI ID) | Depended Upon By (CI ID) | Nature of Dependency | Criticality of Dependency |
|---|---|---|---|---|---|
| CI-[XXXX]-001 | [Asset Name] | [CI ID of upstream dependency] | [CI ID of downstream dependent] | [Application-to-DB / Network-to-Server / API / Authentication] | [Critical / High / Medium / Low] |
| CI-[XXXX]-002 | | | | | |

---

## 6. Last Review Date

*Record when each CI was last reviewed for accuracy of its CMDB record, configuration compliance, and continued business relevance. All CIs must be reviewed at minimum quarterly as required by RMiT Clause 10.15, with critical assets subject to continuous monitoring.*

### 6.1 Review Schedule

| Asset Criticality | Minimum Review Frequency | Monitoring Approach |
|---|---|---|
| Critical | Continuous (automated) + Quarterly (manual validation) | SIEM integration, automated config drift detection |
| High | Monthly (automated) + Quarterly (manual validation) | Automated scanning with quarterly manual reconciliation |
| Medium | Quarterly | Scheduled reconciliation review |
| Low | Semi-Annual | Manual review |

### 6.2 Review Tracker

| CI ID | Asset Name | Criticality | Last CMDB Review Date | Reviewed By | Review Outcome | Next Scheduled Review | Outstanding Actions |
|---|---|---|---|---|---|---|---|
| CI-[XXXX]-001 | [Asset Name] | [Critical / High / Medium / Low] | [DD/MM/YYYY] | [Name / Role] | [No Changes / Updated / Discrepancy Found] | [DD/MM/YYYY] | [Action item or "None"] |
| CI-[XXXX]-002 | | | | | | | |

### 6.3 CMDB Accuracy Metrics

*Track the overall accuracy and completeness of the CMDB as part of quarterly reporting. This metric should be reported to the Technology Risk Committee.*

| Metric | Target | [Quarter/Date] Actual | Status |
|---|---|---|---|
| CMDB Record Completeness | ≥ 95% | [X]% | [On Track / At Risk / Breached] |
| Auto-Discovery Coverage | ≥ 90% | [X]% | |
| Records Reviewed (within period) | 100% of due records | [X]% | |
| Unauthorised CIs Detected | 0 | [Count] | |
| Config Drift Incidents Raised | [Track] | [Count] | |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountabilities for CMDB management activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | [Relevant Department Head] | IT Infrastructure Manager | Systems Administrator | IT Security / GRC Team | Change Advisory Board (CAB) | Internal Audit | Vendor / Third Party |
|---|---|---|---|---|---|---|---|
| CMDB Policy Ownership and Approval | A | C | I | C | I | I | — |
| CI Discovery and Registration | I | A | R | C | I | I | C |
| CI Classification and Criticality Assignment | A | R | C | R | C | I | — |
| Configuration Baseline Definition | C | A | R | R | C | I | C |
| Configuration Baseline Review | I | A | R | R | C | I | C |
| Ownership Assignment and Updates | A | R | R | C | I | I | — |
| Lifecycle Status Updates | I | A | R | C | I | I | R |
| Interdependency Mapping | I | A | R | R | C | I | C |
| Quarterly CMDB Accuracy Review | A | R | C | C | I | C | — |
| CMDB Audit and Compliance Reporting | C | C | I | R | I | A | I |
| Change Impact Assessment using CMDB | I | R | C | C | A | I | I |
| Decommission and Disposal Recording | I | A | R | C | C | I | — |
| Exception Management and Approval | A | R | C | R | C | I | — |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Role | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | [Role] | Initial release |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Role] | [Description of changes] |

### 8.2 Approval Sign-Off

*This document requires the following approvals before it is considered effective. Digital signatures or documented email approvals are acceptable in lieu of wet signatures, subject to the organisation's Document Management Policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| [Relevant Department Head] (Owner) | [Name] | | [DD/MM/YYYY] |
| Chief Information Officer / Head of IT | [Name] | | [DD/MM/YYYY] |
| Chief Information Security Officer | [Name] | | [DD/MM/YYYY] |
| Technology Risk Manager | [Name] | | [DD/MM/YYYY] |
| Internal Audit Representative | [Name] | | [DD/MM/YYYY] |

### 8.3 Review Trigger Conditions

In addition to the scheduled quarterly review, this CMDB shall be reviewed and updated upon occurrence of any of the following events:

- Procurement and deployment of new technology assets
- Decommissioning or disposal of existing assets
- Material changes to system configurations or interdependencies
- Post-incident review identifying CMDB inaccuracies
- Change in business ownership or technical custodianship
- Audit findings or regulatory examination requiring CMDB updates
- Significant changes to the organisation's technology architecture

---

## 9. References

| Reference | Document / Clause | Issuing Authority |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.15 — Configuration and Asset Management | Bank Negara Malaysia |
| BNM RMiT | Paragraph 10.14 — Change Management (interdependency with CMDB) | Bank Negara Malaysia |
| BNM RMiT | Paragraph 10.52 — Outsourcing (third-party CI management) | Bank Negara Malaysia |
| [Organisation] IT Asset Management Policy | [Document ID] | [Organization Name] |
| [Organisation] Change Management Policy | [Document ID] | [Organization Name] |
| [Organisation] Information Classification Policy | [Document ID] | [Organization Name] |
| [Organisation] Media Disposal and Sanitisation Procedure | [Document ID] | [Organization Name] |
| ISO/IEC 27001:2022 | Annex A Control 8.8 — Management of Technical Vulnerabilities | ISO/IEC |
| NIST SP 800-128 | Guide for Security-Focused Configuration Management of IS | NIST |
| CIS Controls v8 | Control 1 — Inventory and Control of Enterprise Assets | CIS |

---

## 10. Appendices

### Appendix A — CI Type Taxonomy and Naming Conventions

*Provide the complete reference table of all CI type codes, descriptions, and naming convention rules used within this organisation's CMDB.*

| CI Type Code | Full Name | Naming Convention | Example |
|---|---|---|---|
| HW-SRV | Physical Server | [SITE]-SRV-[FUNCTION]-[SEQ] | KL-SRV-DB-001 |
| HW-NET-FW | Firewall | [SITE]-FW-[ZONE]-[SEQ] | KL-FW-DMZ-001 |
| SW-APP | Business Application | [DEPT]-APP-[NAME]-[ENV] | RETL-APP-CBS-PRD |
| [Add rows as required] | | | |

### Appendix B — Configuration Baseline Templates

*Maintain links or references to the approved configuration baseline documents for each standard CI type. Baselines should be reviewed when patches or new versions are applied.*

| CI Type | Baseline Document Title | Document ID | Version | Last Updated |
|---|---|---|---|---|
| Windows Server 2022 | Windows Server Hardening Standard | [Doc ID] | [X.X] | [DD/MM/YYYY] |
| Ubuntu Linux 22.04 LTS | Linux Server Hardening Standard | [Doc ID] | [X.X] | [DD/MM/YYYY] |
| Cisco IOS Firewall | Network Device Configuration Baseline | [Doc ID] | [X.X] | [DD/MM/YYYY] |
| [Add rows as required] | | | | |

### Appendix C — Decommissioned and Retired Asset Archive

*Maintain a historical record of all retired CIs for audit trail and forensic purposes. Retired records must be retained for a minimum of [X] years in accordance with the organisation's Records Retention Policy.*

| CI ID | Asset Name | Date Retired | Reason for Retirement | Disposal Method | Disposal Reference | Retired By | Approved By |
|---|---|---|---|---|---|---|---|
| CI-[XXXX]-RET-001 | [Asset Name] | [DD/MM/YYYY] | [End-of-life / Migration / Consolidation] | [Certified Destruction / Secure Wipe / Returned to Vendor] | [Disposal Certificate No.] | [Name] | [Name] |

### Appendix D — CMDB Integration Points

*Document all systems and tools that read from or write to this CMDB to support configuration integrity and change management workflows.*

| Integrated System | Direction | Data Exchanged | Integration Method | Responsible Team | Last Validated |
|---|---|---|---|---|---|
| [ITSM Tool, e.g., ServiceNow] | Bidirectional | Full CI record | [API / Native Connector] | [Team] | [DD/MM/YYYY] |
| [Vulnerability Scanner, e.g., Qualys] | Read (pulls CI list) | Hostname, IP, OS | [API] | [Team] | [DD/MM/YYYY] |
| [SIEM, e.g., Wazuh] | Read | Asset criticality, owner | [API / Syslog] | [Team] | [DD/MM/YYYY] |
| [Patch Management Tool] | Read / Write | Patch status, last patch date | [API] | [Team] | [DD/MM/YYYY] |
| [Network Discovery Tool] | Write (feeds discovered assets) | IP, MAC, hostname, OS | [API] | [Team] | [DD/MM/YYYY] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **CI (Configuration Item)** | Any component that needs to be managed in order to deliver an IT service, including hardware, software, documentation, and processes |
| **CMDB** | Configuration Management Database — a repository containing all relevant information about CIs and their relationships |
| **Configuration Baseline** | A snapshot of the approved, known-good configuration of a CI at a specific point in time |
| **Configuration Drift** | An unplanned or unauthorised deviation from the approved configuration baseline |
| **Custodian** | The individual or team responsible for the day-to-day technical management of a CI |
| **Owner** | The individual accountable for a CI's business purpose, data classification, and risk acceptance |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for financial institutions in Malaysia |
| **Auto-Discovery** | Automated scanning and inventory tools that detect CIs on the network without manual input |

---

*This document is classified as **Confidential**. Unauthorised disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact [Relevant Department Head] at [Contact Email].*

*Document ID: [Document ID] | Version: 1.0 | [Organization Name] | © [Year]*