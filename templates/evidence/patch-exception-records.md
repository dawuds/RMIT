# Patch Exception Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset and Item Identification](#2-asset-and-item-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Patch Criticality Classification](#5-patch-criticality-classification)
6. [Compensating Controls and Risk Acceptance](#6-compensating-controls-and-risk-acceptance)
7. [Testing and Rollback Procedures](#7-testing-and-rollback-procedures)
8. [End-of-Life (EOL) Technology Register](#8-end-of-life-eol-technology-register)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official register for recording all approved patch exceptions within [Organization Name]. A patch exception is raised when a security or system patch cannot be applied within the organisation's standard patching timeline, necessitating formal risk acceptance and the implementation of documented compensating controls.

This register supports [Organization Name]'s obligations under **Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.18**, which requires financial institutions to maintain a disciplined and auditable approach to patch management, including formal governance over deviations from standard patching timelines.

### 1.2 Scope

This register applies to all IT assets, systems, and technology components within the scope of [Organization Name]'s technology estate, including but not limited to:

- On-premises servers and infrastructure
- Network devices (routers, switches, firewalls, load balancers)
- End-user computing devices (desktops, laptops, mobile devices)
- Cloud-hosted workloads and platform services
- Operational Technology (OT) and Industrial Control Systems (ICS) where applicable
- Third-party and vendor-managed systems under [Organization Name]'s oversight

*This document does not cover patches that are applied within the standard patching window. Only exceptions — defined as patches deferred beyond the approved SLA — are recorded here.*

### 1.3 Regulatory Alignment

| Regulatory Reference | Requirement Summary |
|---|---|
| BNM RMiT, Clause 10.18 | Patch management controls, exception handling, and risk acceptance for unpatched vulnerabilities |
| BNM RMiT, Clause 10.17 | Vulnerability management and timely remediation |
| [Organization Name] Patch Management Policy v[X.X] | Internal policy governing patch SLAs and exception processes |
| [Organization Name] Information Security Policy v[X.X] | Overarching security governance framework |

---

## 2. Asset and Item Identification

*This section captures the specific asset or technology item for which a patch exception is being raised. Each exception record must uniquely identify the affected asset to ensure traceability during audits. Complete a separate record for each asset or logical grouping of identically configured assets.*

### 2.1 Exception Record Details

| Field | Details |
|---|---|
| **Exception Record ID** | EXC-[YYYY]-[NNN] |
| **Date Exception Raised** | [DD/MM/YYYY] |
| **Exception Raised By** | [Name, Designation] |
| **Related Change Request / Ticket ID** | [CR/INC/PRB-XXXXXXX] |
| **Patch / Advisory Reference** | [CVE-YYYY-NNNNN / Vendor Advisory ID] |
| **Exception Status** | [ ] Pending Approval &nbsp; [ ] Approved &nbsp; [ ] Rejected &nbsp; [ ] Closed |
| **Exception Expiry Date** | [DD/MM/YYYY] |

### 2.2 Affected Asset Details

| Field | Details |
|---|---|
| **Asset Name / Hostname** | [Asset Name / Hostname] |
| **Asset ID / CMDB Reference** | [Asset ID] |
| **IP Address(es)** | [IP Address / Range] |
| **Asset Type** | [ ] Server &nbsp; [ ] Network Device &nbsp; [ ] Endpoint &nbsp; [ ] Application &nbsp; [ ] Database &nbsp; [ ] Cloud Workload &nbsp; [ ] OT/ICS &nbsp; [ ] Other: [Specify] |
| **Operating System / Platform** | [OS Name and Version, e.g., Windows Server 2019 21H2] |
| **Application / Service Hosted** | [Application or Service Name and Version] |
| **Environment** | [ ] Production &nbsp; [ ] Staging &nbsp; [ ] Development &nbsp; [ ] DR |
| **Physical / Logical Location** | [Data Centre / Cloud Region / Branch] |
| **Network Zone / Segment** | [DMZ / Internal / Restricted / PCI Zone] |

### 2.3 Patch Details

| Field | Details |
|---|---|
| **Patch Name / Description** | [Patch name or KB article, e.g., MS KB5023698 – Windows CU March 2023] |
| **Vulnerability / CVE Reference** | [CVE-YYYY-NNNNN] |
| **Affected Component** | [Component or software affected by the patch, e.g., OpenSSL 3.0.x] |
| **Patch Release Date (Vendor)** | [DD/MM/YYYY] |
| **Standard Patching Deadline (per SLA)** | [DD/MM/YYYY] |
| **Proposed Deferred Date** | [DD/MM/YYYY] |
| **Reason for Exception** | [ ] Operational Impact / Compatibility &nbsp; [ ] Testing Required &nbsp; [ ] Vendor Delay &nbsp; [ ] Business Freeze &nbsp; [ ] EOL/Unsupported System &nbsp; [ ] Other: [Specify] |
| **Detailed Justification** | [Provide a clear and concise explanation of why the patch cannot be applied within the standard SLA, including any dependencies, compatibility issues, or business constraints] |

---

## 3. Classification and Categorisation

*This section categorises the exception based on the nature of the affected asset and the sensitivity of the data or services it supports. Classification informs the level of compensating controls required and the escalation path for approval.*

### 3.1 Asset Criticality Classification

| Classification | Definition | Assigned Classification |
|---|---|---|
| **Critical** | Directly supports core banking, payment systems, or regulatory reporting; compromise would have systemic impact | [ ] |
| **High** | Supports significant business operations; compromise would cause material operational disruption | [ ] |
| **Medium** | Supports non-core business functions; limited systemic impact if compromised | [ ] |
| **Low** | Non-production or isolated system with minimal business impact | [ ] |

**Assigned Asset Criticality:** [Critical / High / Medium / Low]
**Classification Rationale:** [Provide justification for the assigned criticality level]

### 3.2 Data Classification

| Field | Details |
|---|---|
| **Data Classification** | [ ] Restricted &nbsp; [ ] Confidential &nbsp; [ ] Internal &nbsp; [ ] Public |
| **Data Types Processed / Stored** | [e.g., Customer PII, Financial Transaction Data, Credentials, Internal Only] |
| **Personal Data (PDPA)** | [ ] Yes — Subject to PDPA 2010 &nbsp; [ ] No |
| **Payment Card Data (PCI-DSS)** | [ ] Yes — In-scope for PCI-DSS &nbsp; [ ] No |

### 3.3 Exception Risk Category

*Select the primary risk category most applicable to this exception. This drives the required compensating controls and review frequency.*

| Risk Category | Description | Applicable |
|---|---|---|
| **Security Vulnerability** | Exception exposes a known exploitable vulnerability | [ ] |
| **Compliance Risk** | Exception creates a gap against a regulatory or policy requirement | [ ] |
| **Operational Risk** | Patch deferral is driven by operational constraints (compatibility, availability) | [ ] |
| **Vendor / Supply Chain Risk** | Patch is not yet available from the vendor or third party | [ ] |
| **EOL / Legacy Risk** | System is end-of-life and no patch is available from the vendor | [ ] |

---

## 4. Owner and Custodian

*This section establishes clear accountability for the excepted asset throughout the lifecycle of the exception. All named individuals must be informed of their responsibilities prior to exception approval.*

### 4.1 Accountability Matrix

| Role | Name | Department | Contact / Email | Responsibilities |
|---|---|---|---|---|
| **Asset Owner** | [Name] | [Department] | [email@organization.com] | Accountable for risk acceptance and business justification; signs off on the exception |
| **Asset Custodian / System Administrator** | [Name] | [IT Operations / Department] | [email@organization.com] | Responsible for implementing compensating controls and applying the patch upon approval |
| **Information Security Representative** | [Name] | [Information Security] | [email@organization.com] | Reviews the exception from a security risk perspective; recommends approval or rejection |
| **IT Operations Manager** | [Name] | [IT Operations] | [email@organization.com] | Primary owner of this register; coordinates exception lifecycle |
| **CISO / Head of IT Security** | [Name] | [Information Security] | [email@organization.com] | Approves exceptions classified as Critical or High risk |
| **Vendor / Third-Party Contact** (if applicable) | [Name] | [Vendor Name] | [email@vendor.com] | Provides patch availability updates and technical support for vendor-managed components |

### 4.2 Escalation Path

| Condition | Escalation Level |
|---|---|
| Asset Criticality: Low or Medium | IT Operations Manager approval |
| Asset Criticality: High | CISO approval required |
| Asset Criticality: Critical | CISO + Board Risk Committee notification |
| Exception duration exceeds 90 days | Mandatory re-assessment and executive notification |
| Active exploitation of the vulnerability detected | Immediate escalation to CISO and Incident Response Team |

---

## 5. Patch Criticality Classification

*This section documents the severity of the patch being deferred, based on the associated vulnerability rating. Patch criticality directly determines the maximum allowable exception period and the minimum compensating controls required.*

### 5.1 Vulnerability Severity Rating

| Severity | CVSS Score Range | Maximum Exception Period | Minimum Compensating Control Requirement |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | 7 days (subject to CISO waiver) | Network isolation or system shutdown; continuous monitoring |
| **High** | 7.0 – 8.9 | 30 days | Enhanced monitoring; compensating controls mandatory |
| **Medium** | 4.0 – 6.9 | 90 days | Standard monitoring; compensating controls recommended |
| **Low** | 0.1 – 3.9 | 180 days | Standard monitoring |
| **Informational** | N/A | Next scheduled maintenance window | No additional controls required |

### 5.2 Vulnerability Assessment for This Exception

| Field | Details |
|---|---|
| **CVE Identifier** | [CVE-YYYY-NNNNN] |
| **CVSS Base Score** | [X.X] |
| **CVSS Vector String** | [CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H] |
| **Assigned Severity** | [ ] Critical &nbsp; [ ] High &nbsp; [ ] Medium &nbsp; [ ] Low &nbsp; [ ] Informational |
| **Exploitability** | [ ] Actively Exploited (CISA KEV Listed) &nbsp; [ ] Proof-of-Concept Available &nbsp; [ ] Theoretical |
| **Attack Vector** | [ ] Network &nbsp; [ ] Adjacent Network &nbsp; [ ] Local &nbsp; [ ] Physical |
| **Authentication Required** | [ ] None &nbsp; [ ] Low Privilege &nbsp; [ ] High Privilege |
| **Vendor Severity Rating** | [Vendor's own severity rating, e.g., Critical, Important] |
| **Threat Intelligence Assessment** | [Summary of any known threat actor exploitation or active campaigns targeting this vulnerability, as assessed by [Organization Name]'s threat intelligence function] |

### 5.3 Exploitability in Current Environment

*Assess whether the vulnerability is exploitable given the specific configuration and network exposure of the affected asset.*

| Factor | Assessment |
|---|---|
| **Is the affected service/port exposed to the internet?** | [ ] Yes &nbsp; [ ] No &nbsp; [ ] Partially (via [gateway/proxy]) |
| **Is the affected service accessible from untrusted networks?** | [ ] Yes &nbsp; [ ] No |
| **Are there existing controls that reduce exploitability?** | [ ] Yes — [Specify: e.g., WAF, network ACL, MFA] &nbsp; [ ] No |
| **Contextual Risk Assessment Summary** | [Summarise the effective risk level in the context of [Organization Name]'s environment, considering existing controls and network segmentation] |

---

## 6. Compensating Controls and Risk Acceptance

*This section is the core of the exception record. It documents the specific compensating controls that will be implemented to reduce the risk exposure during the exception period, and formally records the organisation's acceptance of residual risk.*

### 6.1 Compensating Controls

*Compensating controls must be implemented before the exception is approved. They should reduce the likelihood or impact of exploitation to an acceptable level. List all controls that will be applied.*

| # | Control Type | Control Description | Implementation Date | Responsible Party | Verification Method |
|---|---|---|---|---|---|
| 1 | [Preventive / Detective / Corrective] | [e.g., Restrict access to the affected service via firewall ACL to authorised source IPs only] | [DD/MM/YYYY] | [Name / Team] | [e.g., Firewall rule review / Penetration test] |
| 2 | [Preventive / Detective / Corrective] | [e.g., Enable enhanced audit logging on the affected system and alert on anomalous access patterns via SIEM] | [DD/MM/YYYY] | [Name / Team] | [e.g., Log review / SIEM alert validation] |
| 3 | [Preventive / Detective / Corrective] | [e.g., Deploy Intrusion Detection System (IDS) signature for known exploit patterns] | [DD/MM/YYYY] | [Name / Team] | [e.g., IDS rule test] |
| 4 | [Preventive / Detective / Corrective] | [e.g., Increase vulnerability scan frequency to daily for the affected asset] | [DD/MM/YYYY] | [Name / Team] | [e.g., Scan report review] |
| 5 | [Preventive / Detective / Corrective] | [Additional control as applicable] | [DD/MM/YYYY] | [Name / Team] | [Verification method] |

**Are compensating controls verified as implemented?** [ ] Yes — Evidence Reference: [Ticket ID / Screenshot / Log Reference] &nbsp; [ ] No — Pending implementation by: [DD/MM/YYYY]

### 6.2 Residual Risk Assessment

| Field | Details |
|---|---|
| **Inherent Risk Level (before compensating controls)** | [ ] Critical &nbsp; [ ] High &nbsp; [ ] Medium &nbsp; [ ] Low |
| **Residual Risk Level (after compensating controls)** | [ ] Critical &nbsp; [ ] High &nbsp; [ ] Medium &nbsp; [ ] Low |
| **Residual Risk Justification** | [Explain how the compensating controls reduce the risk and why the residual risk is acceptable] |
| **Risk Appetite Alignment** | [ ] Within [Organization Name]'s defined risk appetite &nbsp; [ ] Exceeds risk appetite — requires Board notification |

### 6.3 Formal Risk Acceptance

*Formal risk acceptance must be signed by the appropriate authority based on the asset criticality and residual risk level (refer to the escalation path in Section 4.2).*

> By signing below, the Risk Acceptor acknowledges that:
> 1. They have reviewed and understood the risk associated with deferring this patch.
> 2. The compensating controls listed in Section 6.1 are adequate and have been verified as implemented.
> 3. The exception will be re-assessed upon expiry or upon any material change in the threat landscape.
> 4. They accept responsibility for any risk events that occur during the exception period.

| Field | Details |
|---|---|
| **Risk Acceptor Name** | [Full Name] |
| **Designation** | [Job Title] |
| **Signature** | __________________________ |
| **Date of Acceptance** | [DD/MM/YYYY] |
| **Exception Valid Until** | [DD/MM/YYYY] |

---

## 7. Testing and Rollback Procedures

*This section documents the test plan that must be executed before patch deployment and the rollback procedure to be followed in the event the patch causes system instability. Thorough testing and a defined rollback plan are prerequisites for patch deployment scheduling.*

### 7.1 Pre-Patch Testing Plan

*Describe the testing activities that must be completed in a non-production environment before the patch is applied to the production system. Tests must validate both the patch effectiveness and the continued operation of business-critical functions.*

| # | Test Step | Test Environment | Expected Outcome | Test Responsible | Scheduled Date | Status |
|---|---|---|---|---|---|---|
| 1 | [e.g., Apply patch to staging/UAT environment that mirrors production configuration] | [Staging / UAT] | [Patch applies without error; system restarts successfully] | [Name / Team] | [DD/MM/YYYY] | [ ] Pending &nbsp; [ ] Pass &nbsp; [ ] Fail |
| 2 | [e.g., Execute regression test suite for all applications hosted on the affected system] | [Staging / UAT] | [All critical application functions operate as expected] | [Name / Team] | [DD/MM/YYYY] | [ ] Pending &nbsp; [ ] Pass &nbsp; [ ] Fail |
| 3 | [e.g., Validate that the patch remediates the target vulnerability using a vulnerability scanner] | [Staging / UAT] | [Vulnerability no longer reported by scanner] | [Name / Team] | [DD/MM/YYYY] | [ ] Pending &nbsp; [ ] Pass &nbsp; [ ] Fail |
| 4 | [e.g., Perform connectivity and integration testing with dependent upstream/downstream systems] | [Staging / UAT] | [All integrations function without errors] | [Name / Team] | [DD/MM/YYYY] | [ ] Pending &nbsp; [ ] Pass &nbsp; [ ] Fail |
| 5 | [e.g., Conduct performance baseline comparison pre- and post-patch] | [Staging / UAT] | [No material degradation in system performance] | [Name / Team] | [DD/MM/YYYY] | [ ] Pending &nbsp; [ ] Pass &nbsp; [ ] Fail |

**Overall Test Result:** [ ] All Tests Passed — Cleared for Production Deployment &nbsp; [ ] Tests Failed — Production deployment on hold pending resolution

**Test Sign-Off:**
- Name: [Name]
- Designation: [Designation]
- Date: [DD/MM/YYYY]

### 7.2 Production Patch Deployment Plan

| Field | Details |
|---|---|
| **Scheduled Production Patch Date** | [DD/MM/YYYY] |
| **Scheduled Maintenance Window** | [HH:MM – HH:MM MYT] |
| **Change Request Reference** | [CR-XXXXXXX] |
| **Deployment Method** | [ ] Manual &nbsp; [ ] WSUS / SCCM &nbsp; [ ] Ansible / Puppet &nbsp; [ ] Cloud-native (e.g., AWS SSM) &nbsp; [ ] Vendor-led |
| **Deployment Lead** | [Name, Designation] |
| **Post-Patch Verification Steps** | [List the verification steps to confirm the patch has been successfully applied and the system is functioning normally, e.g., health checks, smoke tests] |
| **Stakeholder Notification Plan** | [Identify who must be notified before and after the patch is applied, e.g., business application owners, NOC team, service desk] |

### 7.3 Rollback Procedure

*A rollback procedure must be defined and validated before production patch deployment is approved. The rollback plan must be rehearsed or peer-reviewed and a go/no-go decision point must be identified.*

| Field | Details |
|---|---|
| **Rollback Decision Authority** | [Name / Role responsible for making the rollback decision, e.g., IT Operations Manager] |
| **Go / No-Go Decision Point** | [Define the time or checkpoint at which the rollback decision will be made, e.g., 30 minutes after patch application if critical errors are observed] |
| **Rollback Trigger Conditions** | [Define the specific conditions that will trigger a rollback, e.g., application failure, inability to connect to dependent systems, critical service unavailability exceeding X minutes] |

| # | Rollback Step | Responsible Party | Estimated Duration |
|---|---|---|---|
| 1 | [e.g., Halt all production transactions and notify the service desk to log the incident] | [Name / Team] | [X minutes] |
| 2 | [e.g., Restore system from pre-patch snapshot / backup (reference: Backup ID [XXXXXXXX])] | [Name / Team] | [X minutes] |
| 3 | [e.g., Validate system restoration and re-run smoke tests to confirm baseline operation] | [Name / Team] | [X minutes] |
| 4 | [e.g., Notify all affected stakeholders of rollback and estimated timeline for re-attempt] | [Name / Team] | [X minutes] |
| 5 | [e.g., Re-activate compensating controls from Section 6.1 and notify Information Security] | [Name / Team] | [X minutes] |
| 6 | [e.g., Update this exception record and the incident log with rollback details and post-incident actions] | [Name / Team] | [X minutes] |

| Field | Details |
|---|---|
| **Pre-patch Snapshot / Backup Reference** | [Backup ID / Snapshot ID taken prior to patch deployment] |
| **Backup Verified and Restorable** | [ ] Yes — Verified by: [Name] on [DD/MM/YYYY] &nbsp; [ ] No — Do not proceed with deployment |
| **Estimated Total Rollback Time** | [X minutes / hours] |
| **Maximum Tolerable Downtime (MTD)** | [X minutes / hours — sourced from BIA for this system] |

---

## 8. End-of-Life (EOL) Technology Register

*This section specifically addresses assets that are operating on end-of-life (EOL) or end-of-support (EOS) technology where the vendor no longer provides security patches. EOL technology represents a heightened and persistent risk. Each entry requires a defined migration or decommission roadmap. This register is reviewed quarterly.*

> **Note:** BNM RMiT Clause 10.18 requires financial institutions to maintain a register of EOL technology and to implement enhanced compensating controls where migration is not immediately feasible.

### 8.1 EOL / EOS Technology Register

| # | Asset ID | Asset Name / Hostname | Technology / OS / Application | EOL / EOS Date | Days Since EOL | Business Justification for Continued Use | Migration / Decommission Plan | Target Migration Date | Risk Level | Approved By |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [Asset ID] | [Hostname] | [e.g., Windows Server 2008 R2] | [DD/MM/YYYY] | [X days] | [e.g., Vendor application dependency; vendor roadmap expected Q3 YYYY] | [e.g., Migrate to Windows Server 2022 on new hardware] | [DD/MM/YYYY] | [ ] Critical [ ] High [ ] Medium | [Name] |
| 2 | [Asset ID] | [Hostname] | [Technology] | [DD/MM/YYYY] | [X days] | [Justification] | [Plan] | [DD/MM/YYYY] | [ ] | [Name] |
| 3 | [Asset ID] | [Hostname] | [Technology] | [DD/MM/YYYY] | [X days] | [Justification] | [Plan] | [DD/MM/YYYY] | [ ] | [Name] |

### 8.2 EOL Technology — Enhanced Compensating Controls

*For each EOL technology entry in Section 8.1, the following additional compensating controls must be implemented as a minimum standard. Controls must be verified quarterly.*

| Control | Requirement | Implemented (Y/N) | Evidence Reference |
|---|---|---|---|
| **Network Isolation** | EOL systems must be placed in a dedicated, isolated network segment with strict firewall rules permitting only required traffic | [Y/N] | [Firewall rule reference / ticket] |
| **Extended Security Updates (ESU)** | Where available from the vendor, ESU must be procured and applied (e.g., Microsoft ESU for Windows Server 2008/2012) | [Y/N / Not Available] | [ESU licence reference] |
| **Enhanced Vulnerability Scanning** | EOL systems must be included in weekly or more frequent vulnerability scans | [Y/N] | [Scan schedule reference] |
| **Privileged Access Controls** | Administrative access to EOL systems must be restricted to named individuals via Privileged Access Management (PAM) | [Y/N] | [PAM policy reference] |
| **Application Whitelisting** | Where technically feasible, application whitelisting must be enforced on EOL endpoints | [Y/N / Not Feasible — justification: [reason]] | [Control reference] |
| **Increased SOC Monitoring** | EOL systems must be monitored by the SOC with enhanced detection rules and reduced alert thresholds | [Y/N] | [SIEM rule reference] |
| **Formal Migration Roadmap** | A board-approved migration or decommission roadmap with defined milestones must exist for each EOL system | [Y/N] | [Project reference / Board minute reference] |

### 8.3 EOL Technology Quarterly Review Summary

| Review Period | Total EOL Assets | Assets with Approved Roadmap | Assets Migrated/Decommissioned This Quarter | Outstanding High/Critical EOL Assets | Reviewed By | Date |
|---|---|---|---|---|---|---|
| [Q1 YYYY] | [N] | [N] | [N] | [N] | [Name] | [DD/MM/YYYY] |
| [Q2 YYYY] | [N] | [N] | [N] | [N] | [Name] | [DD/MM/YYYY] |
| [Q3 YYYY] | [N] | [N] | [N] | [N] | [Name] | [DD/MM/YYYY] |
| [Q4 YYYY] | [N] | [N] | [N] | [N] | [Name] | [DD/MM/YYYY] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountabilities for the patch exception management process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations Manager | System/Asset Owner | Information Security | CISO | Internal Audit | Vendor / Third Party | Board / Risk Committee |
|---|---|---|---|---|---|---|---|
| Identify and raise patch exception | R | C | C | I | — | C | — |
| Assess vulnerability severity and residual risk | C | I | R | C | — | C | — |
| Define and implement compensating controls | R | A | C | I | — | R (if vendor asset) | — |
| Approve exception (Medium/Low risk) | A | I | C | I | — | — | — |
| Approve exception (High risk) | C | I | R | A | — | — | — |
| Approve exception (Critical risk) | C | I | R | A | I | — | I |
| Maintain patch exception register | R | — | C | I | I | — | — |
| Monitor compensating controls effectiveness | R | C | A | I | — | — | — |
| Test patches and validate rollback plans | R | C | C | — | — | C | — |
| Execute production patch deployment | R | A | I | I | — | R (if vendor-led) | — |
| Maintain EOL technology register | R | C | C | I | I | — | — |
| Quarterly exception register review | A | C | R | C | I | — | — |
| Escalate active exploitation events | R | I | A | I | — | — | I |
| Report exception metrics to management | R | — | C | A | I | — | I |

---

## 10. Review and Approval

### 10.1 Individual Exception Review

Each exception record in this register must be reviewed at the following intervals or trigger events:

- **Upon expiry of the approved exception period:** The exception must either be closed (patch applied), renewed with updated justification, or escalated.
- **Upon material change in threat landscape:** If the vulnerability is added to CISA KEV or active exploitation is confirmed, the exception must be immediately re-assessed.
- **Quarterly:** All active exceptions must be reviewed as part of the quarterly patch management review cycle, regardless of individual expiry dates.

### 10.2 Exception Closure

| Field | Details |
|---|---|
| **Patch Successfully Applied** | [ ] Yes &nbsp; [ ] No |
| **Date Patch Applied (Production)** | [DD/MM/YYYY] |
| **Post-Patch Verification Completed** | [ ] Yes — Reference: [Ticket / Scan Report ID] &nbsp; [ ] No |
| **Exception Closed By** | [Name, Designation] |
| **Date Exception Closed** | [DD/MM/YYYY] |
| **Closure Notes** | [Any relevant notes regarding the patch application, issues encountered, or follow-up actions] |

### 10.3 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial document creation |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 10.4 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | __________________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Name] | __________________________ | [DD/MM/YYYY] |
| Chief Risk Officer (CRO) | [Name] | __________________________ | [DD/MM/YYYY] |
| Head of Internal Audit *(for information)* | [Name] | __________________________ | [DD/MM/YYYY] |

---

## 11. References

The following regulatory instruments, standards, and internal policies are referenced by this document:

| Reference | Title | Clause / Section | Relevance |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 10.18** | Patch management exception handling and risk acceptance requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.17 | Vulnerability management and timely remediation |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.13 | Security monitoring and detection requirements |
| BNM RMIT | Risk Management in Technology Policy Document | Clause 11.1 – 11.3 | Incident management and escalation (relevant to active exploitation scenarios) |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A, Control 8.8 | Management of technical vulnerabilities |
| NIST SP 800-40 Rev. 4 | Guide to Enterprise Patch Management Planning | Section 3 | Patch management lifecycle and exception handling |
| PDPA 2010 | Personal Data Protection Act 2010 | Section 9 | Security principle for personal data processed on patched/unpatched systems |
| [Organization Name] | Information Security Policy | [Section X.X] | Overarching security governance obligations |
| [Organization Name] | Patch Management Policy | [Section X.X] | Internal patch SLAs, classification, and exception process |
| [Organization Name] | IT Risk Management Framework | [Section X.X] | Risk acceptance authority and escalation thresholds |
| [Organization Name] | Business Impact Analysis (BIA) | — | Source of MTD and RTO values used in rollback planning |

---

## 12. Appendices

### Appendix A — Patch Exception Request Form

*This appendix contains the standardised form to be submitted by system administrators or asset owners when initiating a patch exception request. The completed form initiates the workflow documented in this register.*

> [Attach or reference: [Organization Name] Patch Exception Request Form — Form No. [FORM-ID]]

### Appendix B — Patch Criticality and SLA Reference Table

*This appendix provides the organisation's standard patch SLA timelines by criticality level, as defined in [Organization Name]'s Patch Management Policy.*

| Criticality | CVSS Score | Standard Patch SLA | Extended SLA (with approved exception) |
|---|---|---|---|
| Critical | 9.0 – 10.0 | Within 7 days | Up to 14 days (CISO approval required) |
| High | 7.0 – 8.9 | Within 30 days | Up to 60 days (CISO approval required) |
| Medium | 4.0 – 6.9 | Within 90 days | Up to 180 days (IT Operations Manager approval) |
| Low | 0.1 – 3.9 | Within 180 days | Next scheduled maintenance window |

### Appendix C — Active Exception Register Summary

*This appendix provides a consolidated summary view of all currently active exceptions for management reporting purposes. It is generated from this register and refreshed monthly.*

| Exception ID | Asset Name | CVE / Patch Reference | Severity | Exception Expiry | Asset Owner | Compensating Controls in Place | Days Outstanding |
|---|---|---|---|---|---|---|---|
| EXC-[YYYY]-[NNN] | [Asset Name] | [CVE / Patch ID] | [Critical/High/Medium/Low] | [DD/MM/YYYY] | [Name] | [ ] Yes &nbsp; [ ] Partial &nbsp; [ ] No | [N] |

### Appendix D — EOL Technology Notification Log

*This appendix records all formal notifications issued to asset owners and senior management regarding end-of-life technology. BNM RMiT requires that management is kept informed of material technology risks.*

| Notification Date | Recipient | EOL Technology Referenced | Notification Method | Acknowledgement Received | Acknowledged By / Date |
|---|---|---|---|---|---|
| [DD/MM/YYYY] | [Name / Role] | [Technology] | [ ] Email &nbsp; [ ] Meeting &nbsp; [ ] Report | [ ] Yes &nbsp; [ ] Pending | [Name / DD/MM/YYYY] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Compensating Control** | An alternative security control implemented to reduce risk when a standard control (such as patching) cannot be applied within the required timeframe |
| **CVE** | Common Vulnerabilities and Exposures — a standardised identifier for publicly known cybersecurity vulnerabilities |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the characteristics and severity of software vulnerabilities |
| **EOL / EOS** | End-of-Life / End-of-Support — the date after which a vendor ceases to provide security patches or technical support for a product |
| **Exception** | A formal, approved deviation from [Organization Name]'s standard patch management SLA, subject to documented risk acceptance and compensating controls |
| **Patch** | A software update released by a vendor to fix security vulnerabilities, bugs, or functional deficiencies |
| **Residual Risk** | The level of risk remaining after compensating controls have been applied |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions in Malaysia |

---

*This document is classified as **Confidential**. It must not be distributed outside [Organization Name] without the prior written approval of the CISO. Physical copies must be stored securely and destroyed in accordance with [Organization Name]'s Records Retention Policy.*

*Document ID: [Document ID] | Version: 1.0 | Owner: IT Operations Manager | © [Organization Name] [YYYY]*