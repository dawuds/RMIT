# End-of-Life Asset Register

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

### 1.1 Purpose

This End-of-Life (EOL) Asset Register serves as the authoritative inventory of all technology assets — hardware, software, operating systems, middleware, firmware, and third-party components — that are approaching, at, or past their manufacturer or vendor-declared end-of-life or end-of-support date within [Organization Name].

This register supports [Organization Name]'s compliance obligations under Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.19**, which requires financial institutions to maintain a structured approach to identifying, tracking, and managing EOL technology risks to safeguard the integrity, availability, and confidentiality of systems and data.

### 1.2 Scope

This register applies to all technology assets owned, operated, leased, or managed by [Organization Name], including but not limited to:

- On-premises servers, workstations, and network devices
- Virtualisation platforms and hypervisors
- Operating systems (server and endpoint)
- Database management systems (DBMS)
- Application frameworks, middleware, and runtime environments
- Third-party software libraries and open-source components
- Network and security appliances (firewalls, IDS/IPS, switches, routers)
- Cloud-hosted infrastructure components under institutional control
- Operational Technology (OT) and Internet of Things (IoT) devices where applicable

Assets managed by third-party vendors under outsourcing arrangements remain subject to contractual EOL disclosure requirements and are included in this register where institutional risk exposure exists.

---

## 2. Regulatory Context

| Reference | Description |
|---|---|
| **BNM RMiT Clause 10.19** | Requires financial institutions to implement controls for identifying and managing end-of-life technology, including maintaining an inventory, assessing risk, and implementing compensating controls or migration plans where EOL assets cannot be immediately retired. |

*Refer to Section 8 (References) for the full list of applicable regulatory clauses and guidance documents.*

---

## 3. Asset Identification

*This section records the unique identity of each asset. Every asset entry in the register must be traceable to an authoritative source such as a CMDB, network scan, or vendor-supplied inventory. Complete all fields; use "N/A" where a field is genuinely not applicable.*

### 3.1 Asset Inventory Table

| Asset ID | Asset Name / Description | Asset Type | Hostname / IP Address | Serial Number / License Key | Version / Build | Location / Environment | Business System / Application |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Windows Server 2012 R2 — File Server] | [e.g., Operating System] | [e.g., SRVFIL01 / 10.10.1.5] | [e.g., N/A] | [e.g., 6.3.9600] | [e.g., Data Centre A — Production] | [e.g., Internal File Sharing] |
| [ASSET-002] | | | | | | | |
| [ASSET-003] | | | | | | | |

### 3.2 Asset Type Reference

*Use the following standardised asset type classifications when populating the Asset Type column above.*

| Code | Asset Type |
|---|---|
| OS-SRV | Server Operating System |
| OS-END | Endpoint Operating System |
| DB | Database Management System |
| MW | Middleware / Application Server |
| FW | Firmware |
| NET-HW | Network Hardware (Switch, Router, Firewall) |
| SEC-APP | Security Application / Appliance |
| APP-3P | Third-Party Application |
| LIB | Software Library / Open-Source Component |
| HW-SRV | Physical Server Hardware |
| HW-END | Endpoint Hardware (Desktop, Laptop) |
| OT-IOT | Operational Technology / IoT Device |
| CLOUD | Cloud-Managed Infrastructure Component |

---

## 4. Classification and Categorisation

*This section classifies each EOL asset by risk criticality and EOL status. Classification drives the urgency of remediation and the level of management oversight required. Refer to [Organization Name]'s IT Asset Classification Policy when assigning criticality ratings.*

### 4.1 EOL Status Classification

| Status Code | Definition |
|---|---|
| **EOL-IMM** | End-of-Life — Immediate: Vendor support has fully ceased; no security patches are issued. Asset is currently unsupported. |
| **EOL-EXT** | End-of-Life — Extended Support: Asset is within a paid or limited extended support window. Patches may be available at additional cost. |
| **EOL-APPR** | Approaching EOL: Vendor-declared EOL/EOS date is within 12 months. Planning and migration activities must be initiated. |
| **EOL-MON** | Monitoring: Vendor-declared EOL/EOS date is within 13–24 months. Asset is being actively monitored. |

### 4.2 Asset Criticality Classification

| Criticality | Definition |
|---|---|
| **Critical** | Asset directly supports customer-facing systems, payment infrastructure, core banking, or regulatory reporting. Outage or compromise would have significant financial or reputational impact. |
| **High** | Asset supports internal operational systems with moderate external dependency. |
| **Medium** | Asset supports internal functions with limited external exposure. |
| **Low** | Asset is non-operational, isolated, or decommissioning is already in progress. |

### 4.3 Classification Register

| Asset ID | Asset Name | EOL / EOS Date | EOL Status Code | Asset Criticality | Data Classification | Regulatory / Compliance Relevance |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [DD/MM/YYYY] | [EOL-IMM / EOL-EXT / EOL-APPR / EOL-MON] | [Critical / High / Medium / Low] | [e.g., Confidential] | [e.g., In-scope for PCI DSS, PDPA, RMiT] |
| [ASSET-002] | | | | | | |
| [ASSET-003] | | | | | | |

---

## 5. Owner and Custodian

*Each asset must have a clearly designated Business Owner (accountable for the asset's purpose and risk acceptance) and a Technical Custodian (responsible for day-to-day management and compliance). Accountability must be formally acknowledged. Where ownership is unclear, escalate to the IT Governance function for resolution before the next review cycle.*

### 5.1 Asset Ownership Register

| Asset ID | Asset Name | Business Owner (Name / Role) | Technical Custodian (Name / Role) | Department | Contact Email | Ownership Acknowledged (Y/N) | Acknowledgement Date |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Name / Role] | [Name / Role] | [Department] | [email@organization.com] | [Y/N] | [DD/MM/YYYY] |
| [ASSET-002] | | | | | | | |
| [ASSET-003] | | | | | | | |

### 5.2 Escalation and Dispute Resolution

*Where Business Ownership is contested or unassigned, the following escalation path applies:*

1. Technical Custodian raises ownership gap to IT Operations Manager within **5 business days** of identification.
2. IT Operations Manager escalates to Head of IT / CIO if unresolved within **10 business days**.
3. Interim ownership defaults to IT Operations until formally resolved.

---

## 6. Patch Criticality Classification

*This section records the current patching posture of each EOL asset. Where vendor patches are no longer available (EOL-IMM), compensating controls must be documented. Patch criticality classifications must align with [Organization Name]'s Vulnerability and Patch Management Policy and the CVSS scoring framework.*

### 6.1 Patch Status Table

| Asset ID | Asset Name | Last Patch Applied | Last Patch Date | Known Unpatched CVEs | Highest CVSS Score | Patch Criticality | Compensating Controls (if patches unavailable) | Compensating Control Owner | Compensating Control Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Patch ID / Version] | [DD/MM/YYYY] | [CVE-YYYY-XXXXX, ...] | [e.g., 9.8 — Critical] | [Critical / High / Medium / Low / N/A] | [e.g., Network segmentation, enhanced monitoring, WAF rule deployment] | [Name / Role] | [DD/MM/YYYY] |
| [ASSET-002] | | | | | | | | | |
| [ASSET-003] | | | | | | | | | |

### 6.2 Patch Criticality Definitions

| Patch Criticality | CVSS Range | Required Remediation SLA |
|---|---|---|
| **Critical** | 9.0 – 10.0 | 72 hours (or immediate compensating control) |
| **High** | 7.0 – 8.9 | 7 calendar days |
| **Medium** | 4.0 – 6.9 | 30 calendar days |
| **Low** | 0.1 – 3.9 | 90 calendar days |
| **Informational** | 0.0 | Monitor; address in next scheduled maintenance |

### 6.3 Compensating Control Register

*Where compensating controls are implemented in lieu of patching, they must be formally documented, approved, and subject to periodic review. Compensating controls do not constitute permanent remediation and must be accompanied by an active migration or decommission plan.*

| Asset ID | Compensating Control ID | Control Description | Control Type | Date Implemented | Approved By | Review Frequency | Next Review Date | Control Effectiveness Assessed (Y/N) |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [CC-001] | [e.g., Asset isolated to restricted VLAN with no internet access; IDS rules deployed for lateral movement detection] | [Preventive / Detective / Corrective] | [DD/MM/YYYY] | [Name / Role] | [Monthly / Quarterly] | [DD/MM/YYYY] | [Y/N] |
| [ASSET-002] | | | | | | | | |

---

## 7. Testing and Rollback Procedures

*This section documents the testing methodology and rollback procedures for remediation activities (patches, upgrades, migrations, or decommissions) associated with EOL assets. Each planned remediation must have a documented test plan and an approved rollback procedure before execution. Evidence of testing must be retained for audit purposes.*

### 7.1 Remediation Activity Plan

| Asset ID | Asset Name | Remediation Type | Target Date | Test Environment Available (Y/N) | Test Plan Reference | Change Request ID | Approved By | Planned Maintenance Window |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Patch / Upgrade / Migration / Decommission] | [DD/MM/YYYY] | [Y/N] | [Test Plan Doc ID] | [CR-XXXXX] | [Name / Role] | [DD/MM/YYYY HH:MM – HH:MM] |
| [ASSET-002] | | | | | | | | |

### 7.2 Pre-Remediation Testing Checklist

*Complete this checklist for each remediation activity prior to execution in the production environment.*

| # | Test Step | Expected Outcome | Test Result (Pass / Fail / N/A) | Tested By | Test Date |
|---|---|---|---|---|---|
| 1 | Verify patch / upgrade package integrity (checksum validation) | Checksum matches vendor-published value | | | |
| 2 | Deploy to non-production / staging environment | Successful installation without errors | | | |
| 3 | Validate core application functionality post-deployment | All critical application functions operate as expected | | | |
| 4 | Validate integration with dependent systems | No degradation of upstream or downstream system connectivity | | | |
| 5 | Conduct security scan post-remediation | No new critical or high vulnerabilities introduced | | | |
| 6 | Review system and application logs post-deployment | No anomalous errors or service interruptions observed | | | |
| 7 | Confirm backup of current configuration / snapshot taken | Backup / snapshot confirmed and verified restorable | | | |

### 7.3 Rollback Procedure

*Each remediation activity must have an approved rollback procedure. Complete the fields below for each planned remediation.*

| Asset ID | Rollback Method | Rollback Trigger Criteria | Estimated Rollback Duration | Rollback Owner | Rollback Tested (Y/N) | Rollback Test Date |
|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., VM snapshot revert / backup restoration / uninstall procedure] | [e.g., System instability, application failure, performance degradation exceeding X%] | [e.g., 30 minutes] | [Name / Role] | [Y/N] | [DD/MM/YYYY] |
| [ASSET-002] | | | | | | |

### 7.4 Post-Remediation Validation

| Asset ID | Post-Remediation Status | Date Completed | Validated By | Issues Encountered | Issue Resolution Notes | Register Updated (Y/N) |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Successful / Rolled Back / In Progress] | [DD/MM/YYYY] | [Name / Role] | [Y/N — describe if Yes] | [Description] | [Y/N] |
| [ASSET-002] | | | | | | |

---

## 8. EOL Technology Register

*This is the consolidated EOL Technology Register, providing a summary view across all EOL assets for executive reporting, risk committee review, and BNM supervisory purposes. This register must be updated upon any change to asset status and reviewed no less than quarterly. Where an asset has been retained beyond its EOL date without full remediation, a formally approved Risk Acceptance must be on file.*

### 8.1 Consolidated EOL Register

| Asset ID | Asset Name | Asset Type | Version | EOL / EOS Date | Days Past EOL | EOL Status | Criticality | Business Owner | Remediation Plan | Target Remediation Date | Risk Acceptance Reference | Current Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Type] | [Version] | [DD/MM/YYYY] | [Auto-calculated or manual] | [EOL-IMM / EOL-EXT / EOL-APPR / EOL-MON] | [Critical / High / Medium / Low] | [Name / Role] | [Upgrade / Migrate / Decommission / Accept Risk] | [DD/MM/YYYY] | [RA-XXXXX or N/A] | [Open / In Progress / Closed] |
| [ASSET-002] | | | | | | | | | | | | |
| [ASSET-003] | | | | | | | | | | | | |

### 8.2 EOL Summary Dashboard

*Populate the following summary statistics at each review cycle for inclusion in management reporting.*

| Metric | Value |
|---|---|
| Total EOL Assets (all statuses) | [Number] |
| EOL-IMM (Fully Unsupported) | [Number] |
| EOL-EXT (Extended Support) | [Number] |
| EOL-APPR (Approaching EOL — <12 months) | [Number] |
| EOL-MON (Monitoring — 12–24 months) | [Number] |
| Critical Criticality EOL Assets | [Number] |
| High Criticality EOL Assets | [Number] |
| Assets with Formal Risk Acceptance | [Number] |
| Assets with Remediation Plans in Progress | [Number] |
| Assets Remediated This Quarter | [Number] |
| Register Last Updated | [DD/MM/YYYY] |
| Updated By | [Name / Role] |

### 8.3 Risk Acceptance Register

*Where an EOL asset cannot be immediately remediated, a formal Risk Acceptance must be completed and approved by the appropriate authority in accordance with [Organization Name]'s Risk Acceptance Policy. Risk Acceptances are time-limited and subject to mandatory review.*

| Risk Acceptance ID | Asset ID | Asset Name | Risk Description | Risk Rating | Justification for Acceptance | Compensating Controls Reference | Accepted By | Accepted Date | Acceptance Expiry Date | Review Date |
|---|---|---|---|---|---|---|---|---|---|---|
| [RA-001] | [ASSET-001] | [Asset Name] | [Description of risk posed by retaining this EOL asset] | [Critical / High / Medium / Low] | [Business or technical justification] | [CC-001, ...] | [Name / Role — must be appropriately authorised] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [RA-002] | | | | | | | | | | |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for the maintenance and governance of the End-of-Life Asset Register. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations Manager | System / Asset Owners | IT Security Manager | CISO / Head of IT | Risk & Compliance | Internal Audit | Change Advisory Board (CAB) |
|---|---|---|---|---|---|---|---|
| Maintain and update the EOL Asset Register | R | C | C | A | I | I | I |
| Classify asset criticality and EOL status | R | C | C | A | C | I | I |
| Assign and confirm asset ownership | C | R | I | A | I | I | I |
| Assess patch criticality and vulnerability exposure | C | R | R | A | C | I | I |
| Define and implement compensating controls | R | R | R | A | C | I | C |
| Approve Risk Acceptances (High / Critical assets) | C | C | C | A | C | I | I |
| Develop and approve remediation plans | R | R | C | A | C | I | C |
| Review and approve change and test plans | R | C | C | C | I | I | A |
| Conduct quarterly register review | R | C | C | A | C | I | I |
| Report EOL metrics to management / board | C | I | C | R | C | I | I |
| Audit register completeness and accuracy | I | I | I | I | C | R | I |

---

## 10. Review and Approval

### 10.1 Review Schedule

This register is subject to the following review obligations:

- **Per-Event Review**: The register must be updated within **5 business days** of any of the following trigger events:
  - A vendor announces an EOL or end-of-support date for any asset in scope.
  - A new asset is onboarded that is already at or approaching EOL.
  - A remediation activity (patch, upgrade, migration, or decommission) is completed.
  - A material change in risk exposure is identified (e.g., new CVE published against an EOL asset).
- **Quarterly Review**: A full review of the register must be conducted at the end of each calendar quarter to validate completeness, accuracy, and currency of all entries.
- **Annual Review**: A comprehensive review of the register, classification framework, and associated procedures must be completed annually and submitted to the IT Risk Committee.

### 10.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name / Role] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Name / Role] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Name / Role] | [Description of changes] |

### 10.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | [Signature] | [DD/MM/YYYY] |
| IT Security Manager | [Name] | [Signature] | [DD/MM/YYYY] |
| CISO / Head of IT | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Risk Officer / Compliance Officer | [Name] | [Signature] | [DD/MM/YYYY] |

---

## 11. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.19 | End-of-life technology — requirements for financial institutions to identify, track, and manage EOL technology assets and implement compensating controls or migration plans. |
| BNM RMiT | Clause 10.1 – 10.18 | Broader technology risk management framework context, including asset inventory, vulnerability management, and patch management. |
| [Organization Name] | IT Asset Management Policy | Internal policy governing the lifecycle management of all technology assets. |
| [Organization Name] | Vulnerability and Patch Management Policy | Internal policy governing patch criticality classification and remediation SLAs. |
| [Organization Name] | Risk Acceptance Policy | Internal policy governing the process for formally accepting residual risk associated with EOL or unpatched assets. |
| [Organization Name] | Change Management Policy | Internal policy governing the testing, approval, and rollback requirements for all changes to production systems. |
| NIST SP 800-161 | Supply Chain Risk Management | Supplementary guidance on managing risks from end-of-life components in the technology supply chain. |
| ISO/IEC 27001:2022 | Annex A — 8.8 | Management of technical vulnerabilities, including EOL asset considerations. |

---

## Appendices

### Appendix A: EOL Notification and Escalation Procedure

*Provide a step-by-step procedure for how EOL notifications (from vendors, vulnerability scanners, or manual identification) are received, validated, recorded in this register, and escalated for action. Include workflow diagram reference if available.*

[Insert EOL Notification and Escalation Procedure or reference to [Document ID]]

### Appendix B: Vendor EOL Notification Sources

*List the authoritative vendor sources and monitoring mechanisms used to identify EOL dates for assets in scope.*

| Vendor | Asset Type | EOL Notification Source | Monitoring Method | Monitored By |
|---|---|---|---|---|
| [e.g., Microsoft] | [e.g., OS-SRV, OS-END] | [e.g., Microsoft Product Lifecycle — https://learn.microsoft.com/lifecycle] | [e.g., Automated feed / Manual quarterly check] | [Name / Role] |
| [e.g., Oracle] | [e.g., DB] | [e.g., Oracle Lifetime Support Policy] | [e.g., Manual quarterly check] | [Name / Role] |
| [e.g., Cisco] | [e.g., NET-HW] | [e.g., Cisco EoL Bulletins] | [e.g., Vendor email subscription] | [Name / Role] |

### Appendix C: Glossary

| Term | Definition |
|---|---|
| **EOL (End-of-Life)** | The date after which a vendor ceases all development, maintenance, and support for a product, including security patches. |
| **EOS (End-of-Support)** | The date after which a vendor no longer provides technical support or security updates. May coincide with or differ from EOL. |
| **Extended Support** | A paid or limited vendor support arrangement available after the standard EOL date, typically providing critical security patches only. |
| **Compensating Control** | A security measure implemented to mitigate risk arising from an EOL asset where patching or replacement is not immediately feasible. |
| **Risk Acceptance** | A formal, time-limited management decision to accept the residual risk posed by an EOL asset, documented and approved in accordance with institutional policy. |
| **CMDB** | Configuration Management Database — the authoritative repository of configuration items (CIs) and their relationships within the IT environment. |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the characteristics and severity of software vulnerabilities. |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed list of known cybersecurity vulnerabilities. |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document. |

### Appendix D: Register Change Log

*This appendix captures individual record-level changes to the register entries outside of formal version updates, for traceability and audit purposes.*

| Date | Asset ID | Field Changed | Previous Value | New Value | Changed By | Reason |
|---|---|---|---|---|---|---|
| [DD/MM/YYYY] | [ASSET-001] | [e.g., EOL Status] | [e.g., EOL-APPR] | [e.g., EOL-IMM] | [Name] | [e.g., Vendor confirmed full EOL effective DD/MM/YYYY] |
| | | | | | | |

---

*This document is classified as **Confidential** and is intended solely for the use of [Organization Name] personnel with a legitimate business need. Unauthorised disclosure, reproduction, or distribution is prohibited. This template is to be maintained and updated in accordance with [Organization Name]'s Document Management Policy.*

*Document ID: [Document ID] | Version: 1.0 | Owner: IT Operations Manager | [Organization Name]*