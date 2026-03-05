# End-of-Life (EOL) Migration Plans

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

> **Confidentiality Notice:** This document contains confidential information intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Objectives and Scope of Migration](#2-objectives-and-scope-of-migration)
3. [EOL Technology Register](#3-eol-technology-register)
4. [Patch Criticality Classification](#4-patch-criticality-classification)
5. [Migration Actions and Milestones](#5-migration-actions-and-milestones)
6. [Accountable Owners](#6-accountable-owners)
7. [Testing and Rollback Procedures](#7-testing-and-rollback-procedures)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the End-of-Life (EOL) Migration Plan for [Organization Name], providing a structured framework for the identification, assessment, planning, and execution of migrations or replacements of technology systems, software, hardware, and components that have reached or are approaching end-of-life, end-of-support (EOS), or end-of-extended-support (EOES) status.

This plan is prepared in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.19**, which requires financial institutions to maintain and execute formal migration plans for EOL technology to mitigate associated operational, security, and regulatory risks.

### 1.2 Scope

*Describe the boundaries of this plan — which systems, business units, geographies, and technology categories are covered. Include both in-scope and explicitly out-of-scope items to prevent ambiguity during audits.*

**In Scope:**

- All production systems, applications, middleware, operating systems, databases, and firmware operated by [Organization Name]
- Third-party and vendor-managed technology components where [Organization Name] assumes operational risk
- Infrastructure components including networking equipment, storage systems, and end-user devices
- Cloud-hosted and on-premises environments
- Technology components with a confirmed or anticipated EOL date within the next **[X] months**

**Out of Scope:**

- [Define exclusions, e.g., systems under active decommissioning managed by a separate project plan]
- [Define exclusions, e.g., non-production or sandbox environments unless they share dependencies with production systems]
- [Other exclusions as applicable]

### 1.3 Regulatory Context

| Requirement | Regulatory Reference | Obligation |
|---|---|---|
| EOL technology migration planning | BNM RMiT, Clause 10.19 | Mandatory |
| Technology risk management | BNM RMiT, Clause 10.1 – 10.5 | Mandatory |
| Patch and vulnerability management | BNM RMiT, Clause 10.17 | Mandatory |
| Business continuity considerations | BNM RMiT, Clause 11 | Mandatory |
| Incident management linkage | BNM RMiT, Clause 12 | Mandatory |

---

## 2. Objectives and Scope of Migration

*State the strategic and operational objectives driving each migration initiative. Articulate why the migration is necessary and what outcomes are expected, linking each objective to risk reduction or regulatory compliance.*

### 2.1 Migration Objectives

The following objectives govern all EOL migration activities undertaken by [Organization Name]:

1. **Risk Elimination:** Remove operational, security, and compliance risk arising from the continued use of technology components that no longer receive vendor security patches or support.
2. **Regulatory Compliance:** Ensure full compliance with BNM RMiT Clause 10.19 by maintaining an up-to-date EOL register and executing time-bound migration plans.
3. **Business Continuity Assurance:** Prevent unplanned outages or degraded service levels attributable to unsupported technology failures.
4. **Cost Optimisation:** Reduce the cost of extended support contracts, compensating controls, and reactive incident remediation associated with EOL systems.
5. **Security Posture Improvement:** Eliminate attack surfaces created by unpatched or unsupported system components.

### 2.2 Migration Scope Definition

*For each active migration initiative, complete the table below. Add rows as required. Each migration should reference the corresponding entry in the EOL Technology Register (Section 3).*

| Migration ID | System / Component | Migration Type | Business Unit | Priority | Target Completion |
|---|---|---|---|---|---|
| MIG-[YYYY]-001 | [System Name] | [Upgrade / Replace / Decommission] | [Business Unit] | [Critical / High / Medium] | [DD/MM/YYYY] |
| MIG-[YYYY]-002 | [System Name] | [Upgrade / Replace / Decommission] | [Business Unit] | [Critical / High / Medium] | [DD/MM/YYYY] |
| MIG-[YYYY]-003 | [System Name] | [Upgrade / Replace / Decommission] | [Business Unit] | [Critical / High / Medium] | [DD/MM/YYYY] |

### 2.3 Migration Strategy Options

*Document the selected migration strategy for each initiative. The following standard strategies should be evaluated prior to selection:*

| Strategy | Description | Typical Use Case |
|---|---|---|
| **Lift and Shift** | Move workload to new infrastructure without modification | Hardware EOL where software remains supported |
| **In-Place Upgrade** | Upgrade the existing system to a supported version | OS or database version upgrades |
| **Re-platform** | Migrate to a new platform with minimal application changes | Legacy OS migration to cloud or containerised environment |
| **Re-architect** | Redesign the application or system for a modern architecture | Legacy monolith replacement |
| **Decommission** | Retire the system without replacement | Redundant or obsolete systems with no ongoing business need |
| **Vendor Extended Support** | Procure paid extended support as a time-limited interim measure | Where migration cannot be completed prior to EOL date |

> **Note:** Vendor Extended Support (paid ESU/ELT arrangements) is not an acceptable long-term substitute for migration. Such arrangements must be documented with a firm migration completion date and approved by the [Chief Information Officer / Chief Technology Officer].

---

## 3. EOL Technology Register

*Maintain a comprehensive and current register of all technology components approaching or past their end-of-life dates. This register must be reviewed and updated at minimum on a quarterly basis. Source EOL data from vendor advisories, the National Vulnerability Database (NVD), and authoritative EOL tracking resources.*

### 3.1 EOL Register — Active Items

| Register ID | Asset Name | Asset Type | Vendor | Current Version | EOL / EOS Date | Days to EOL | Compensating Controls in Place | Migration ID | Status |
|---|---|---|---|---|---|---|---|---|---|
| EOL-001 | [e.g., Windows Server 2012 R2] | Operating System | [Microsoft] | [2012 R2] | [DD/MM/YYYY] | [###] | [Yes / No — describe if Yes] | MIG-[YYYY]-001 | [Active / Planned / Overdue] |
| EOL-002 | [e.g., Oracle Database 12c] | Database | [Oracle] | [12.1.0.2] | [DD/MM/YYYY] | [###] | [Yes / No] | MIG-[YYYY]-002 | [Active / Planned / Overdue] |
| EOL-003 | [e.g., Cisco Catalyst 2960] | Network Equipment | [Cisco] | [IOS 15.x] | [DD/MM/YYYY] | [###] | [Yes / No] | MIG-[YYYY]-003 | [Active / Planned / Overdue] |
| EOL-004 | [Component Name] | [Type] | [Vendor] | [Version] | [DD/MM/YYYY] | [###] | [Yes / No] | [MIG-ID] | [Status] |

### 3.2 EOL Register — Completed Migrations

*Record all successfully completed migrations for audit trail and historical reference.*

| Register ID | Asset Name | Replaced By | Completion Date | Verified By | Sign-Off Date |
|---|---|---|---|---|---|
| EOL-[ID] | [System Name] | [Replacement System/Version] | [DD/MM/YYYY] | [Name, Role] | [DD/MM/YYYY] |

### 3.3 EOL Horizon Watch (12–24 Months)

*Identify technology components approaching EOL within the next 12 to 24 months to enable proactive planning.*

| Asset Name | Asset Type | Vendor | Anticipated EOL Date | Business Criticality | Planned Action | Owner |
|---|---|---|---|---|---|---|
| [Component Name] | [Type] | [Vendor] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [Upgrade / Replace / Monitor] | [Name] |

---

## 4. Patch Criticality Classification

*Define the classification framework used to prioritise patch and update activities across all technology assets. Classifications must align with recognized industry standards (e.g., CVSS scoring) and BNM RMiT patch management obligations under Clause 10.17.*

### 4.1 Criticality Classification Framework

| Classification | CVSS Score Range | Description | Maximum Remediation Timeframe |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Remote code execution, active exploitation in the wild, or direct impact on core banking systems | **24 hours** (or immediate isolation) |
| **High** | 7.0 – 8.9 | Significant vulnerability with high likelihood of exploitation; impacts confidentiality, integrity, or availability | **7 calendar days** |
| **Medium** | 4.0 – 6.9 | Moderate risk; exploitation requires specific conditions or user interaction | **30 calendar days** |
| **Low** | 0.1 – 3.9 | Minimal risk; limited exploitability with negligible impact | **90 calendar days** |
| **Informational** | N/A | No direct security impact; configuration or best practice advisory | **Next scheduled maintenance window** |

### 4.2 EOL-Specific Criticality Uplift

*Systems operating in an EOL state are subject to automatic criticality uplift due to the absence of vendor-issued patches. The following uplift rules apply:*

- Any EOL system classified as **business-critical** or processing **regulated data** is automatically escalated to **Critical** priority for migration purposes, irrespective of known CVE scores.
- EOL systems with no compensating controls in place must be reported to the [Chief Information Security Officer (CISO)] within **[X] business days** of identification.
- Systems past their EOL date by more than **[90 days]** without an approved migration plan require escalation to the [Board Risk Committee / IT Steering Committee].

### 4.3 Compensating Controls for EOL Systems

*Where migration cannot be completed before the EOL date, the following compensating controls must be formally approved and documented:*

| Control Type | Description | Approval Required | Maximum Duration |
|---|---|---|---|
| Network Segmentation | Isolate EOL system on restricted VLAN with strict ACLs | IT Security Manager | [Duration] |
| Enhanced Monitoring | Increase SIEM alerting thresholds and log review frequency | IT Operations Manager | [Duration] |
| Access Restriction | Limit access to named administrators only | IT Operations Manager | [Duration] |
| Vulnerability Scanning | Increase scan frequency to weekly or daily | IT Security Manager | [Duration] |
| Vendor Extended Support | Procure paid extended support from vendor | CIO / CTO | [Duration — max 12 months] |

---

## 5. Migration Actions and Milestones

*Detail the specific actions, deliverables, and milestones for each active migration initiative. Use one subsection per migration project. Milestone dates must be realistic, approved, and monitored quarterly.*

### 5.1 Migration Project: [MIG-YYYY-001] — [System Name]

**Overview:**

| Field | Detail |
|---|---|
| **Migration ID** | MIG-[YYYY]-001 |
| **System / Component** | [System Name and Version] |
| **EOL Register ID** | EOL-[###] |
| **EOL Date** | [DD/MM/YYYY] |
| **Target Replacement** | [Replacement System/Version] |
| **Migration Lead** | [Name, Role] |
| **Sponsor** | [Name, Role] |
| **Target Completion Date** | [DD/MM/YYYY] |
| **Budget Approved** | [Yes / No — RM [Amount]] |

**Milestone Schedule:**

| # | Milestone | Description | Responsible Party | Target Date | Completion Date | Status |
|---|---|---|---|---|---|---|
| 1 | Project Initiation | Confirm scope, assign resources, obtain formal approval | [IT Operations Manager] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Not Started / In Progress / Complete] |
| 2 | Current State Assessment | Document current architecture, dependencies, and integration points | [System Owner] | [DD/MM/YYYY] | | |
| 3 | Target State Design | Define target architecture and technical specifications | [Solutions Architect] | [DD/MM/YYYY] | | |
| 4 | Procurement / Licensing | Procure replacement hardware, software, or cloud services | [Procurement] | [DD/MM/YYYY] | | |
| 5 | Development / Configuration | Build and configure replacement environment | [IT Operations] | [DD/MM/YYYY] | | |
| 6 | Integration Testing | Validate integrations with dependent systems in test environment | [QA / Testing Team] | [DD/MM/YYYY] | | |
| 7 | User Acceptance Testing (UAT) | Business user validation of functionality and performance | [Business Owner] | [DD/MM/YYYY] | | |
| 8 | Cutover Planning | Finalise cutover runbook, rollback procedures, and communication plan | [Migration Lead] | [DD/MM/YYYY] | | |
| 9 | Production Cutover | Execute migration to production environment | [IT Operations Manager] | [DD/MM/YYYY] | | |
| 10 | Post-Migration Validation | Verify system stability, performance, and security posture | [IT Security / Operations] | [DD/MM/YYYY] | | |
| 11 | EOL System Decommission | Safely decommission legacy system and update asset register | [IT Operations Manager] | [DD/MM/YYYY] | | |
| 12 | Project Closure | Issue completion report and update EOL register | [IT Operations Manager] | [DD/MM/YYYY] | | |

**Known Dependencies and Risks:**

| Dependency / Risk | Description | Mitigation |
|---|---|---|
| [Dependency 1] | [e.g., Integration with Core Banking System] | [Coordinate with vendor during maintenance window] |
| [Risk 1] | [e.g., Vendor delivery delay] | [Identify alternative vendor; escalate to CIO if delay exceeds 2 weeks] |
| [Risk 2] | [e.g., Data migration integrity] | [Implement checksum validation pre and post migration] |

---

*Repeat Section 5.1 structure for each active migration project (MIG-YYYY-002, MIG-YYYY-003, etc.)*

---

## 6. Accountable Owners

*Assign clear ownership for every EOL asset and each migration initiative. Accountability must be unambiguous — each system must have exactly one accountable owner. This section supports audit evidence requirements.*

### 6.1 System Ownership Register

| System / Component | EOL Register ID | Business Owner | Technical Owner | Migration Lead | Escalation Contact |
|---|---|---|---|---|---|
| [System Name] | EOL-001 | [Name, Department] | [Name, IT Ops] | [Name] | [CIO / CTO] |
| [System Name] | EOL-002 | [Name, Department] | [Name, IT Ops] | [Name] | [CIO / CTO] |
| [System Name] | EOL-003 | [Name, Department] | [Name, IT Ops] | [Name] | [CIO / CTO] |

### 6.2 Ownership Accountability Framework

*Define the obligations of each owner type:*

**Business Owner:**
- Confirm business criticality classification of the system
- Approve migration timelines and planned service interruptions
- Provide resources for UAT activities
- Accept residual risk during transition periods

**Technical Owner / System Owner:**
- Maintain accurate system documentation and dependency mapping
- Execute or coordinate technical migration activities
- Ensure compensating controls are implemented and effective
- Report migration status at each quarterly review

**Migration Lead:**
- Own the end-to-end delivery of the assigned migration project
- Manage project plan, risks, issues, and dependencies
- Coordinate across business, IT, and vendor stakeholders
- Provide progress updates to IT Steering Committee

**IT Operations Manager:**
- Maintain the EOL Technology Register
- Ensure all EOL systems have approved migration plans
- Report EOL status to the [Board Risk Committee / IT Steering Committee] quarterly
- Escalate overdue or at-risk migrations per the escalation framework

### 6.3 Escalation Framework

| Scenario | Escalation Level | Escalation Timeline |
|---|---|---|
| EOL system identified without migration plan | IT Security Manager → CISO | Within [5] business days |
| Migration milestone delayed by > [30] days | IT Operations Manager → CIO | Immediately upon identification |
| EOL system past EOL date without compensating controls | CISO → Board Risk Committee | Within [2] business days |
| Migration budget overrun > [X]% | IT Operations Manager → CFO / CIO | Immediately upon identification |
| Security incident on EOL system | CISO → Incident Response Team | Per Incident Response Plan |

---

## 7. Testing and Rollback Procedures

*Define the mandatory testing and rollback requirements that must be completed for every migration. Testing must be sufficiently rigorous to validate that the replacement system meets all functional, performance, and security requirements before production cutover is approved.*

### 7.1 Testing Requirements

*All migration projects must complete the following testing phases. Evidence of testing completion must be retained for a minimum of [3] years for regulatory audit purposes.*

#### 7.1.1 Pre-Migration Testing Checklist

| Test Category | Test Description | Pass Criteria | Responsible | Evidence Required |
|---|---|---|---|---|
| Functional Testing | Validate all core business functions operate correctly on replacement system | Zero critical defects outstanding | [Testing Team] | Test results report |
| Integration Testing | Verify all upstream and downstream integrations function as expected | All integration points validated | [IT Operations] | Integration test report |
| Performance Testing | Confirm replacement system meets or exceeds baseline performance benchmarks | Meets SLA thresholds under peak load | [IT Operations] | Performance test report |
| Security Testing | Conduct vulnerability scan and penetration test on replacement system | No Critical or High findings unresolved | [IT Security] | Security assessment report |
| User Acceptance Testing (UAT) | Business users validate end-to-end workflows | Signed UAT sign-off by Business Owner | [Business Owner] | UAT sign-off document |
| Data Integrity Testing | Verify data migration completeness and accuracy | 100% record count match; checksum validated | [Data Management] | Data validation report |
| Backup and Recovery Testing | Confirm backup and recovery procedures function on new platform | Recovery meets RPO/RTO targets | [IT Operations] | Recovery test report |
| Cutover Rehearsal | Execute full cutover simulation in staging environment | Cutover completed within planned window | [Migration Lead] | Rehearsal completion log |

#### 7.1.2 Testing Sign-Off Requirements

All testing phases must be formally signed off before production cutover approval is granted:

| Testing Phase | Sign-Off Authority | Sign-Off Date | Comments |
|---|---|---|---|
| Functional & Integration Testing | [IT Operations Manager] | [DD/MM/YYYY] | |
| Security Testing | [CISO / IT Security Manager] | [DD/MM/YYYY] | |
| User Acceptance Testing | [Business Owner] | [DD/MM/YYYY] | |
| Cutover Rehearsal | [IT Operations Manager] | [DD/MM/YYYY] | |

### 7.2 Cutover Procedure

*Describe the standard cutover procedure. A detailed Cutover Runbook must be prepared for each migration and appended to this plan as Appendix B.*

**Pre-Cutover (T-[X] hours):**
- [ ] Confirm all testing phases are signed off
- [ ] Notify affected stakeholders and business units of planned maintenance window
- [ ] Confirm rollback decision point and rollback trigger criteria
- [ ] Ensure rollback environment is prepared and validated
- [ ] Brief all team members on their roles during cutover
- [ ] Confirm monitoring and alerting are active

**During Cutover:**
- [ ] Execute cutover runbook steps sequentially
- [ ] Log all actions with timestamps
- [ ] Confirm each step against success criteria before proceeding
- [ ] Maintain communication bridge for all stakeholders
- [ ] Apply rollback immediately if rollback trigger criteria are met

**Post-Cutover (T+[X] hours):**
- [ ] Execute post-migration validation checklist
- [ ] Monitor system performance and error logs for minimum [24] hours
- [ ] Confirm business operations are functioning normally
- [ ] Obtain formal post-migration sign-off from Business Owner and IT Operations Manager
- [ ] Update CMDB and asset register

### 7.3 Rollback Procedures

*Rollback procedures must be defined, tested, and approved before any production cutover is initiated. The rollback decision must be made by the designated authority within the agreed decision window.*

#### 7.3.1 Rollback Trigger Criteria

A rollback must be initiated if any of the following conditions are met during or immediately after cutover:

| Trigger | Description |
|---|---|
| Critical system failure | Replacement system fails to start or remains unavailable beyond [X] minutes |
| Data integrity breach | Evidence of data loss, corruption, or inconsistency identified post-migration |
| Integration failure | One or more critical integrations fail and cannot be resolved within [X] minutes |
| Performance degradation | System response times exceed [X]% above agreed SLA thresholds |
| Security event | A security incident is detected on the replacement system during the migration window |
| Business impact | Business Owner confirms unacceptable impact on critical business operations |

#### 7.3.2 Rollback Decision Authority

| Migration Priority | Rollback Decision Authority | Maximum Decision Time |
|---|---|---|
| Critical | IT Operations Manager + CISO | [30] minutes from trigger identification |
| High | IT Operations Manager | [60] minutes from trigger identification |
| Medium / Low | Migration Lead | [2] hours from trigger identification |

#### 7.3.3 Rollback Steps

1. **Declare rollback** — Rollback decision authority confirms rollback activation; notify all stakeholders.
2. **Isolate replacement system** — Remove replacement system from production traffic.
3. **Restore legacy system** — Bring legacy (pre-migration) environment back to production state.
4. **Validate legacy system** — Confirm legacy system is operating correctly and serving production traffic.
5. **Notify stakeholders** — Communicate rollback completion and estimated timeline for root cause analysis.
6. **Conduct post-rollback review** — Document root cause, lessons learned, and revised migration approach.
7. **Reschedule migration** — Submit revised migration plan for approval before reattempting.

---

## 8. Roles and Responsibilities

*The following RACI matrix defines the accountability structure for all EOL migration activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 8.1 RACI Matrix

| Activity | Board / Board Risk Committee | CIO / CTO | CISO | IT Operations Manager | IT Security Manager | System / Business Owner | Migration Lead | IT Operations Team | Compliance Officer |
|---|---|---|---|---|---|---|---|---|---|
| Approve EOL Migration Policy | A | R | C | C | C | I | I | I | C |
| Maintain EOL Technology Register | I | I | C | A/R | C | C | I | R | I |
| Classify EOL asset criticality | I | C | C | A | R | R | C | C | I |
| Approve migration plan and timeline | I | A | C | R | C | C | R | C | C |
| Define compensating controls | I | I | A | R | R | C | I | C | I |
| Approve compensating controls | I | A | R | C | C | I | I | I | C |
| Execute migration project | I | I | C | A | C | C | R | R | I |
| Conduct security testing | I | I | A | C | R | C | C | R | I |
| Conduct UAT sign-off | I | I | I | C | I | A/R | C | I | I |
| Approve production cutover | I | A | C | R | C | R | C | I | I |
| Monitor post-migration stability | I | I | C | A | C | I | R | R | I |
| Quarterly EOL status reporting | I | A | C | R | C | C | C | I | C |
| Escalate overdue migrations | A | R | R | R | C | C | C | I | C |
| Regulatory reporting to BNM | A | C | C | C | C | I | I | I | R |

---

## 9. Review and Approval

### 9.1 Document Review Schedule

*This document must be reviewed on a quarterly basis, or immediately following any of the following trigger events:*

- Identification of a new EOL system not previously captured in the register
- A security incident attributable to an EOL or unpatched system
- A material change in regulatory requirements issued by BNM
- Completion of a significant migration project
- A failed migration or rollback event

### 9.2 Version History

| Version | Date | Author | Reviewed By | Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Role] | [Reviewer Name, Role] | Initial document creation |
| 1.1 | [DD/MM/YYYY] | [Author Name, Role] | [Reviewer Name, Role] | [Description of changes] |
| [X.X] | [DD/MM/YYYY] | [Author Name, Role] | [Reviewer Name, Role] | [Description of changes] |

### 9.3 Approval Sign-Off

*This document requires formal sign-off from the following authorities prior to issuance and following each review:*

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager (Document Owner) | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Officer (CIO) / Chief Technology Officer (CTO) | [Full Name] | __________________ | [DD/MM/YYYY] |
| Compliance Officer | [Full Name] | __________________ | [DD/MM/YYYY] |
| Board Risk Committee Chairperson | [Full Name] | __________________ | [DD/MM/YYYY] |

---

## 10. References

| Reference | Document / Clause | Relevance |
|---|---|---|
| BNM RMiT Policy Document | **Clause 10.19** — EOL Technology Migration | Primary regulatory obligation for this document |
| BNM RMiT Policy Document | Clause 10.1–10.5 — Technology Risk Management Framework | Overarching technology risk governance |
| BNM RMiT Policy Document | Clause 10.17 — Patch and Vulnerability Management | Patch criticality classification and remediation timelines |
| BNM RMiT Policy Document | Clause 11 — Business Continuity Management | Migration impact on business continuity |
| BNM RMiT Policy Document | Clause 12 — Incident Management | Incidents arising from EOL systems |
| [Organization Name] Technology Risk Policy | [Internal Document ID] | Internal technology risk governance framework |
| [Organization Name] Change Management Policy | [Internal Document ID] | Change management requirements for production migrations |
| [Organization Name] Business Continuity Plan | [Internal Document ID] | BCP considerations during migration cutover |
| [Organization Name] Incident Response Plan | [Internal Document ID] | Incident management during migration events |
| NIST SP 800-40 | Guide to Enterprise Patch Management | Industry best practice for patch and EOL management |
| CVSS v3.1 Specification | Common Vulnerability Scoring System | Patch criticality scoring standard |
| ISO/IEC 27001:2022 | Annex A.8 — Technology Controls | Alignment with international security management standards |

---

## 11. Appendices

### Appendix A: EOL Technology Register (Full Export)

*Attach a complete export of the EOL Technology Register maintained in [CMDB / Asset Management System Name] as at the date of this document's review. The register export must include all fields defined in Section 3.1.*

> **[ATTACH: EOL_Technology_Register_[YYYYMMDD].xlsx]**

---

### Appendix B: Migration Cutover Runbooks

*A separate, detailed Cutover Runbook must be prepared and approved for each active migration project. Runbooks must include step-by-step instructions, responsible parties, estimated durations, and go/no-go decision points.*

| Migration ID | Runbook Document | Version | Last Updated |
|---|---|---|---|
| MIG-[YYYY]-001 | [ATTACH: Cutover_Runbook_MIG-[YYYY]-001_v[X.X].docx] | [X.X] | [DD/MM/YYYY] |
| MIG-[YYYY]-002 | [ATTACH: Cutover_Runbook_MIG-[YYYY]-002_v[X.X].docx] | [X.X] | [DD/MM/YYYY] |

---

### Appendix C: Testing Evidence Register

*Retain evidence of all completed testing activities. The following table summarises testing evidence on file for each active migration:*

| Migration ID | Test Type | Evidence Document | Date Completed | Sign-Off By |
|---|---|---|---|---|
| MIG-[YYYY]-001 | Functional Testing | [ATTACH: Test_Report_MIG-001_Functional.pdf] | [DD/MM/YYYY] | [Name] |
| MIG-[YYYY]-001 | Security Testing | [ATTACH: Test_Report_MIG-001_Security.pdf] | [DD/MM/YYYY] | [Name] |
| MIG-[YYYY]-001 | UAT Sign-Off | [ATTACH: UAT_SignOff_MIG-001.pdf] | [DD/MM/YYYY] | [Name] |

---

### Appendix D: Compensating Controls Register

*For all EOL systems where migration has not yet been completed, document approved compensating controls and their review status:*

| EOL Register ID | System Name | Control Type | Control Description | Approval Date | Approved By | Review Date | Status |
|---|---|---|---|---|---|---|---|
| EOL-001 | [System Name] | Network Segmentation | [VLAN isolation with restricted ACL rules] | [DD/MM/YYYY] | [Name, Role] | [DD/MM/YYYY] | [Active / Expired] |
| EOL-002 | [System Name] | Enhanced Monitoring | [Daily SIEM review; weekly vulnerability scan] | [DD/MM/YYYY] | [Name, Role] | [DD/MM/YYYY] | [Active / Expired] |

---

### Appendix E: Vendor EOL Notification Log

*Maintain a log of official EOL notifications received from technology vendors. This log supports the audit trail demonstrating proactive identification of EOL risk.*

| Log ID | Date Received | Vendor | Product / Component | EOL Date Announced | Notification Method | Received By | Actioned By | Action Taken |
|---|---|---|---|---|---|---|---|---|
| VEN-001 | [DD/MM/YYYY] | [Vendor Name] | [Product Name] | [DD/MM/YYYY] | [Email / Advisory / Portal] | [Name] | [Name] | [EOL Register updated; migration plan initiated] |

---

### Appendix F: Glossary of Terms

| Term | Definition |
|---|---|
| **EOL (End-of-Life)** | The date after which a vendor no longer releases security patches, bug fixes, or technical support for a product |
| **EOS (End-of-Support)** | The date after which a vendor ceases all support activities for a product or version |
| **EOES (End-of-Extended-Support)** | The date after which paid extended support arrangements with a vendor expire |
| **Compensating Control** | A security measure implemented to reduce risk associated with an EOL system where immediate migration is not feasible |
| **CVSS** | Common Vulnerability Scoring System — an industry standard for assessing the severity of security vulnerabilities |
| **CMDB** | Configuration Management Database — the authoritative repository of IT asset and configuration data |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk management for financial institutions |
| **RACI** | Responsible, Accountable, Consulted, Informed — a matrix framework for defining roles and responsibilities |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss measured in time |
| **RTO** | Recovery Time Objective — the maximum acceptable system downtime following an incident |
| **UAT** | User Acceptance Testing — formal testing conducted by business users to validate that a system meets their requirements |
| **Cutover** | The transition from a legacy system to its replacement in a production environment |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | IT Operations | EOL Migration Plans**
**Document ID: [Document ID] | Version: 1.0 | Last Reviewed: [Last Review Date]**