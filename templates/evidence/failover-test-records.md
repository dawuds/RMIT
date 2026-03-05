# Failover Test Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document records the results of full failover tests conducted between the primary production environment and the designated Disaster Recovery (DR) site, in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.32**.

BNM RMiT Clause 10.32 requires financial institutions to periodically test their disaster recovery capabilities to ensure that recovery time objectives (RTO) and recovery point objectives (RPO) can be met within defined thresholds. This record serves as primary audit evidence demonstrating that [Organization Name] maintains a tested and operational DR capability for critical technology systems.

**Scope:** This record applies to all technology assets and systems classified as Tier 1 (Mission Critical) and Tier 2 (Business Critical) within [Organization Name]'s IT asset inventory, including but not limited to core banking systems, payment infrastructure, customer-facing digital channels, and supporting middleware components.

---

## 2. Test Overview

*Provide a high-level summary of the failover test event, including its purpose, trigger, and general outcome. This section serves as the executive summary for audit and management review purposes.*

| Field | Details |
|---|---|
| **Test ID** | [TEST-YYYY-NNN] |
| **Test Type** | Full Failover / Partial Failover / Tabletop Exercise *(select one)* |
| **Test Trigger** | Scheduled Quarterly Test / Post-Incident Review / Regulatory Requirement / Unplanned Event *(select one)* |
| **Test Date** | [DD-MMM-YYYY] |
| **Test Start Time** | [HH:MM MYT] |
| **Test End Time** | [HH:MM MYT] |
| **DR Site Location** | [DR Site Name / Address] |
| **Primary Site Location** | [Primary Data Centre Name / Address] |
| **Test Coordinator** | [Full Name, Designation] |
| **Overall Test Result** | Pass / Fail / Partial Pass *(select one)* |
| **Next Scheduled Test** | [DD-MMM-YYYY] |

---

## 3. Asset and System Identification

*List all technology assets and systems that were included in the scope of this failover test. Each asset must be uniquely identified and traceable to the organization's Configuration Management Database (CMDB) or IT Asset Register.*

| Asset ID | Asset / System Name | Asset Type | Environment | CMDB Reference | Included in Test |
|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Core Banking System] | Application / Server / Database / Network *(select)* | Production | [CMDB-REF] | Yes / No |
| [ASSET-002] | [e.g., Payment Gateway] | Application / Server / Database / Network *(select)* | Production | [CMDB-REF] | Yes / No |
| [ASSET-003] | [e.g., Internet Banking Portal] | Application / Server / Database / Network *(select)* | Production | [CMDB-REF] | Yes / No |
| [ASSET-004] | [e.g., Core Banking Database Cluster] | Database | Production | [CMDB-REF] | Yes / No |
| [ASSET-005] | [e.g., Directory Services / Active Directory] | Infrastructure | Production | [CMDB-REF] | Yes / No |

> **Note:** Assets excluded from this test must be documented in Section 9 (Exceptions and Exclusions) with a justified rationale.

---

## 4. Classification and Categorisation

*Classify each in-scope asset according to the organization's IT asset classification framework and BNM RMiT criticality tiers. Classification drives RPO/RTO requirements and recovery prioritization.*

### 4.1 Classification Framework Reference

| Classification Level | Definition |
|---|---|
| **Confidential** | Highly sensitive data or systems whose compromise would cause severe regulatory, financial, or reputational harm |
| **Restricted** | Sensitive systems or data accessible only to authorized personnel on a need-to-know basis |
| **Internal** | Systems or data intended for internal use; not publicly disclosed |
| **Public** | Information or systems approved for external publication |

### 4.2 Asset Classification Register

| Asset ID | Asset Name | Data Classification | System Criticality | Regulatory Relevance | Custodian Department |
|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | Confidential | Mission Critical | BNM RMiT, PDPA | [IT Operations / Core Banking Team] |
| [ASSET-002] | [Payment Gateway] | Confidential | Mission Critical | BNM RMiT, PCI-DSS | [Payment Systems Team] |
| [ASSET-003] | [Internet Banking Portal] | Confidential | Business Critical | BNM RMiT, PDPA | [Digital Channels Team] |
| [ASSET-004] | [Core Banking Database] | Confidential | Mission Critical | BNM RMiT, PDPA | [Database Administration Team] |
| [ASSET-005] | [Directory Services] | Restricted | Business Critical | BNM RMiT | [Infrastructure Team] |

---

## 5. Owner and Custodian

*Identify the accountable business owner and the technical custodian for each system in scope. The business owner is responsible for the asset from a risk and regulatory perspective; the custodian is responsible for day-to-day management and recovery execution.*

| Asset ID | Asset Name | Business Owner (Role) | Business Owner (Name) | Technical Custodian (Role) | Technical Custodian (Name) | Contact During DR |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | [Chief Operations Officer] | [Full Name] | [Head of Core Banking Systems] | [Full Name] | [Mobile Number] |
| [ASSET-002] | [Payment Gateway] | [Chief Financial Officer] | [Full Name] | [Payment Systems Lead] | [Full Name] | [Mobile Number] |
| [ASSET-003] | [Internet Banking Portal] | [Chief Digital Officer] | [Full Name] | [Digital Channels Lead] | [Full Name] | [Mobile Number] |
| [ASSET-004] | [Core Banking Database] | [Chief Operations Officer] | [Full Name] | [Lead Database Administrator] | [Full Name] | [Mobile Number] |
| [ASSET-005] | [Directory Services] | [Head of IT Operations] | [Full Name] | [Infrastructure Lead] | [Full Name] | [Mobile Number] |

---

## 6. RPO and RTO Definitions by Recovery Tier

*Define the approved Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO) for each recovery tier. These targets must be consistent with the approved Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP), and must meet or exceed BNM RMiT minimum requirements.*

### 6.1 Tier Definitions and Approved Objectives

| Recovery Tier | Tier Label | Description | Approved RPO | Approved RTO | BNM RMiT Reference |
|---|---|---|---|---|---|
| **Tier 1** | Mission Critical | Systems whose unavailability immediately halts core business operations or creates regulatory breach | ≤ 15 minutes | ≤ 2 hours | Clause 10.32 |
| **Tier 2** | Business Critical | Systems that significantly impair business operations but with manual workarounds possible | ≤ 1 hour | ≤ 4 hours | Clause 10.32 |
| **Tier 3** | Business Important | Systems that affect operational efficiency but can be deferred for limited periods | ≤ 4 hours | ≤ 24 hours | Clause 10.32 |
| **Tier 4** | Normal | Non-critical systems where extended downtime is acceptable | ≤ 24 hours | ≤ 72 hours | Clause 10.32 |

### 6.2 Asset-to-Tier Mapping

| Asset ID | Asset Name | Assigned Recovery Tier | Approved RPO | Approved RTO | Approved By | Approval Date |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | Tier 1 — Mission Critical | [≤ 15 minutes] | [≤ 2 hours] | [Name / Role] | [DD-MMM-YYYY] |
| [ASSET-002] | [Payment Gateway] | Tier 1 — Mission Critical | [≤ 15 minutes] | [≤ 2 hours] | [Name / Role] | [DD-MMM-YYYY] |
| [ASSET-003] | [Internet Banking Portal] | Tier 2 — Business Critical | [≤ 1 hour] | [≤ 4 hours] | [Name / Role] | [DD-MMM-YYYY] |
| [ASSET-004] | [Core Banking Database] | Tier 1 — Mission Critical | [≤ 15 minutes] | [≤ 2 hours] | [Name / Role] | [DD-MMM-YYYY] |
| [ASSET-005] | [Directory Services] | Tier 2 — Business Critical | [≤ 1 hour] | [≤ 4 hours] | [Name / Role] | [DD-MMM-YYYY] |

---

## 7. Backup Schedule and Retention Periods

*Document the backup configuration for each in-scope asset, including frequency, method, media, and retention policy. Backup schedules must align with the RPO defined for each asset's recovery tier.*

### 7.1 Backup Configuration Register

| Asset ID | Asset Name | Backup Type | Backup Frequency | Backup Window | Backup Method | Backup Target | Retention Period | Last Verified |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | Full / Incremental / Differential *(select)* | [Daily / Hourly / Continuous] | [HH:MM – HH:MM MYT] | [Snapshot / Agent-based / Replication] | [DR Site / Cloud / Tape] | [30 / 60 / 90 days] | [DD-MMM-YYYY] |
| [ASSET-002] | [Payment Gateway] | Full / Incremental / Differential *(select)* | [Daily / Hourly / Continuous] | [HH:MM – HH:MM MYT] | [Snapshot / Agent-based / Replication] | [DR Site / Cloud / Tape] | [30 / 60 / 90 days] | [DD-MMM-YYYY] |
| [ASSET-003] | [Internet Banking Portal] | Full / Incremental / Differential *(select)* | [Daily / Hourly / Continuous] | [HH:MM – HH:MM MYT] | [Snapshot / Agent-based / Replication] | [DR Site / Cloud / Tape] | [30 / 60 / 90 days] | [DD-MMM-YYYY] |
| [ASSET-004] | [Core Banking Database] | Full / Incremental / Differential *(select)* | [Continuous / Every 15 min] | [N/A — continuous] | [Log Shipping / Synchronous Replication] | [DR Site] | [90 days] | [DD-MMM-YYYY] |
| [ASSET-005] | [Directory Services] | Full / Incremental / Differential *(select)* | [Daily] | [HH:MM – HH:MM MYT] | [Agent-based] | [DR Site / Tape] | [60 days] | [DD-MMM-YYYY] |

### 7.2 Backup Integrity and Offsite Storage

| Field | Details |
|---|---|
| **Offsite Backup Location** | [Location Name / Address] |
| **Encryption Standard** | [AES-256 / Other] |
| **Backup Integrity Check Frequency** | [Weekly / Monthly] |
| **Last Integrity Check Date** | [DD-MMM-YYYY] |
| **Integrity Check Result** | Pass / Fail |
| **Responsible Party** | [Role / Team Name] |

---

## 8. Restoration Testing Results

*Record the detailed results of each system's failover and restoration during this test event. Actual RPO and RTO achieved must be compared against approved targets. Any deviation must be flagged as a finding.*

### 8.1 Failover Test Execution Log

| # | Test Step | Asset / System | Planned Start | Actual Start | Planned End | Actual End | Responsible Party | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | Pre-test environment verification | All in-scope assets | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM] | [DR Test Coordinator] | Pass / Fail |
| 2 | Initiate replication pause / failover trigger | [ASSET-001, ASSET-004] | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM] | [Infrastructure Lead] | Pass / Fail |
| 3 | Bring up DR instances — database tier | [ASSET-004] | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM] | [Lead DBA] | Pass / Fail |
| 4 | Bring up DR instances — application tier | [ASSET-001, ASSET-002, ASSET-003] | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM] | [Application Teams] | Pass / Fail |
| 5 | DNS / load balancer cut-over to DR site | All in-scope assets | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM] | [Network Team] | Pass / Fail |
| 6 | User acceptance testing at DR site | [ASSET-001, ASSET-002, ASSET-003] | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM] | [Business UAT Team] | Pass / Fail |
| 7 | Failback to primary site | All in-scope assets | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM] | [DR Test Coordinator] | Pass / Fail |
| 8 | Post-test verification and reconciliation | All in-scope assets | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM] | [All Teams] | Pass / Fail |

### 8.2 RPO and RTO Achievement Summary

| Asset ID | Asset Name | Recovery Tier | Approved RPO | **Actual RPO Achieved** | RPO Met? | Approved RTO | **Actual RTO Achieved** | RTO Met? | Remarks |
|---|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | Tier 1 | ≤ 15 min | [X minutes] | Yes / No | ≤ 2 hrs | [X hrs Y min] | Yes / No | [Remarks] |
| [ASSET-002] | [Payment Gateway] | Tier 1 | ≤ 15 min | [X minutes] | Yes / No | ≤ 2 hrs | [X hrs Y min] | Yes / No | [Remarks] |
| [ASSET-003] | [Internet Banking Portal] | Tier 2 | ≤ 1 hr | [X minutes] | Yes / No | ≤ 4 hrs | [X hrs Y min] | Yes / No | [Remarks] |
| [ASSET-004] | [Core Banking Database] | Tier 1 | ≤ 15 min | [X minutes] | Yes / No | ≤ 2 hrs | [X hrs Y min] | Yes / No | [Remarks] |
| [ASSET-005] | [Directory Services] | Tier 2 | ≤ 1 hr | [X minutes] | Yes / No | ≤ 4 hrs | [X hrs Y min] | Yes / No | [Remarks] |

### 8.3 Data Integrity Verification

| Asset ID | Asset Name | Last Transaction at Primary (Pre-Failover) | First Transaction at DR (Post-Failover) | Data Loss (if any) | Data Integrity Confirmed | Verified By |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | [Timestamp / Transaction Ref] | [Timestamp / Transaction Ref] | [None / X records] | Yes / No | [Name, Role] |
| [ASSET-002] | [Payment Gateway] | [Timestamp / Transaction Ref] | [Timestamp / Transaction Ref] | [None / X records] | Yes / No | [Name, Role] |
| [ASSET-004] | [Core Banking Database] | [Timestamp / Transaction Ref] | [Timestamp / Transaction Ref] | [None / X records] | Yes / No | [Name, Role] |

### 8.4 Test Findings and Observations

*Document all issues, anomalies, near-misses, and observations identified during the test. Each finding must be assigned a severity rating and a remediation owner.*

| Finding ID | Asset Affected | Description of Finding | Severity | Root Cause (if known) | Remediation Action | Owner | Target Completion | Status |
|---|---|---|---|---|---|---|---|---|
| [FIND-001] | [Asset Name] | [Description of issue encountered] | Critical / High / Medium / Low | [Root cause analysis] | [Corrective action to be taken] | [Name / Role] | [DD-MMM-YYYY] | Open / In Progress / Closed |
| [FIND-002] | [Asset Name] | [Description of issue encountered] | Critical / High / Medium / Low | [Root cause analysis] | [Corrective action to be taken] | [Name / Role] | [DD-MMM-YYYY] | Open / In Progress / Closed |

---

## 9. Business Impact Analysis

*Summarise the assessed business impact for each system during the DR test window, including the financial, operational, reputational, and regulatory consequences of the simulated outage. This section must align with the organization's current Business Impact Analysis (BIA) document.*

### 9.1 Impact Assessment Summary

| Asset ID | Asset Name | Business Process Supported | Simulated Outage Duration | Financial Impact (Estimated) | Operational Impact | Customer Impact | Regulatory Reporting Required? | BIA Document Reference |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | [e.g., Deposits, Loans, Transfers] | [X hrs Y min] | [MYR X,XXX per hour / Total MYR X,XXX] | [High / Medium / Low] | [High / Medium / Low] | Yes / No | [BIA-YYYY-NNN] |
| [ASSET-002] | [Payment Gateway] | [e.g., Interbank Transfers, IBG, RENTAS] | [X hrs Y min] | [MYR X,XXX per hour / Total MYR X,XXX] | [High / Medium / Low] | [High / Medium / Low] | Yes / No | [BIA-YYYY-NNN] |
| [ASSET-003] | [Internet Banking Portal] | [e.g., Retail Online Banking] | [X hrs Y min] | [MYR X,XXX per hour / Total MYR X,XXX] | [Medium / Low] | [High / Medium / Low] | Yes / No | [BIA-YYYY-NNN] |

### 9.2 Maximum Tolerable Downtime (MTD) Compliance

| Asset ID | Asset Name | Approved MTD | Actual Simulated Downtime | MTD Breached? | Remarks |
|---|---|---|---|---|---|
| [ASSET-001] | [Core Banking System] | [4 hours] | [X hrs Y min] | Yes / No | [Remarks if MTD breached] |
| [ASSET-002] | [Payment Gateway] | [2 hours] | [X hrs Y min] | Yes / No | [Remarks if MTD breached] |
| [ASSET-003] | [Internet Banking Portal] | [8 hours] | [X hrs Y min] | Yes / No | [Remarks if MTD breached] |

---

## 10. Recovery Priority Tiers

*Document the sequence in which systems were recovered during the failover test, confirming alignment with the approved Disaster Recovery Plan (DRP). Recovery sequencing must respect inter-system dependencies to avoid cascading failures during actual DR activation.*

### 10.1 Recovery Sequence Executed

| Recovery Wave | Wave Label | Systems in Wave | Dependency (Must Follow) | Planned Recovery Start | Actual Recovery Start | Wave Completion Status |
|---|---|---|---|---|---|---|
| Wave 1 | Infrastructure Foundation | [Directory Services, DNS, Network Services] | None | [HH:MM] | [HH:MM] | Complete / Partial / Failed |
| Wave 2 | Data Tier | [Core Banking Database, Middleware MQ] | Wave 1 complete | [HH:MM] | [HH:MM] | Complete / Partial / Failed |
| Wave 3 | Core Application Tier | [Core Banking System, Payment Gateway] | Wave 2 complete | [HH:MM] | [HH:MM] | Complete / Partial / Failed |
| Wave 4 | Customer-Facing Channels | [Internet Banking Portal, Mobile Banking] | Wave 3 complete | [HH:MM] | [HH:MM] | Complete / Partial / Failed |
| Wave 5 | Supporting Systems | [Reporting Systems, Audit Logging] | Wave 3 complete | [HH:MM] | [HH:MM] | Complete / Partial / Failed |

### 10.2 Dependency Matrix Validation

*Confirm that all known inter-system dependencies were respected during the recovery sequence and that no dependency violations were observed.*

| Upstream System | Downstream Dependent System | Dependency Type | Dependency Respected During Test? | Observations |
|---|---|---|---|---|
| [Directory Services] | [Core Banking System] | Authentication | Yes / No | [Remarks] |
| [Core Banking Database] | [Core Banking System] | Data | Yes / No | [Remarks] |
| [Core Banking System] | [Internet Banking Portal] | API | Yes / No | [Remarks] |
| [Payment Gateway] | [Core Banking System] | Transaction Processing | Yes / No | [Remarks] |

### 10.3 Deviations from Approved DRP Recovery Sequence

*Document any deviations from the recovery sequence defined in the approved Disaster Recovery Plan. All deviations must be reviewed and, where appropriate, fed back into DRP updates.*

| Deviation ID | DRP-Approved Sequence | Actual Sequence Executed | Reason for Deviation | Impact of Deviation | DRP Update Required? |
|---|---|---|---|---|---|
| [DEV-001] | [Planned step description] | [Actual step executed] | [Justification] | [None / Minor delay / Significant impact] | Yes / No |

---

## 11. Exceptions and Exclusions

*Document all systems or assets that were originally in scope but excluded from this test, with a formal justification. Excluded items must be tracked and incorporated into the next available test cycle.*

| Asset ID | Asset Name | Reason for Exclusion | Risk Accepted By | Risk Acceptance Date | Planned Test Date |
|---|---|---|---|---|---|
| [ASSET-XXX] | [System Name] | [e.g., System undergoing maintenance, vendor unavailability, regulatory change freeze] | [Name / Role] | [DD-MMM-YYYY] | [DD-MMM-YYYY] |

---

## 12. Test Conclusion and Overall Assessment

*Provide the overall assessment of the failover test, including a declaration of whether the organization's DR capability meets BNM RMiT Clause 10.32 requirements.*

**Overall Test Result:** Pass / Fail / Conditional Pass *(select one)*

**Summary Narrative:**

> *[Provide a 2–4 paragraph executive summary of the test outcome, covering: (1) whether RPO and RTO objectives were met for all Tier 1 and Tier 2 systems; (2) the severity and volume of findings raised; (3) the overall readiness of the DR site; and (4) any immediate actions required before the next test cycle or before this test can be certified as compliant.]*

**Certification Statement:**

> I, the undersigned, certify that the failover test described in this record was conducted in accordance with [Organization Name]'s approved Disaster Recovery Plan [DRP-YYYY-NNN] and that the results documented herein are accurate and complete to the best of my knowledge.

| Role | Name | Signature | Date |
|---|---|---|---|
| Test Coordinator | [Full Name] | ___________________________ | [DD-MMM-YYYY] |
| Head of IT Operations | [Full Name] | ___________________________ | [DD-MMM-YYYY] |
| Chief Information Security Officer (CISO) | [Full Name] | ___________________________ | [DD-MMM-YYYY] |

---

## 13. Roles and Responsibilities

*The table below defines accountability, responsibility, consultation, and information-sharing requirements for failover test planning, execution, and documentation under BNM RMiT Clause 10.32.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of IT Operations | DR Test Coordinator | IT Infrastructure Team | Application / System Custodians | Business Continuity Manager | CISO / Head of InfoSec | Internal Audit | Senior Management |
|---|---|---|---|---|---|---|---|---|
| Define DR test scope and objectives | A | R | C | C | C | C | I | I |
| Develop DR test plan and scripts | A | R | C | C | C | C | I | I |
| Obtain approval for test execution | A | R | I | I | C | C | I | A |
| Execute technical failover steps | C | R | R | R | I | I | I | I |
| Conduct UAT at DR site | I | R | I | R | R | I | I | I |
| Monitor and log test execution | C | R | R | I | I | I | I | I |
| Document RPO / RTO results | A | R | C | C | I | C | I | I |
| Identify and log test findings | A | R | R | R | C | C | I | I |
| Assign and track remediation actions | A | R | R | R | C | C | I | I |
| Review and approve test records | A | R | I | I | C | C | C | I |
| Submit test evidence to regulators | A | C | I | I | C | R | C | I |
| Archive test records per retention policy | A | R | I | I | I | C | I | I |

---

## 14. Review and Approval

### 14.1 Document Version History

| Version | Date | Author | Role | Description of Changes |
|---|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Full Name] | [Role] | Initial document creation |
| [1.1] | [DD-MMM-YYYY] | [Full Name] | [Role] | [Description of changes made] |
| [2.0] | [DD-MMM-YYYY] | [Full Name] | [Role] | [Description of changes made] |

### 14.2 Approval Sign-Off

*This document requires formal approval from the roles listed below before it is considered an authoritative compliance record. Electronic signatures are acceptable provided they comply with [Organization Name]'s electronic signature policy.*

| Role | Name | Signature | Date Approved |
|---|---|---|---|
| Head of IT Operations | [Full Name] | ___________________________ | [DD-MMM-YYYY] |
| Chief Information Security Officer (CISO) | [Full Name] | ___________________________ | [DD-MMM-YYYY] |
| Chief Operating Officer (COO) | [Full Name] | ___________________________ | [DD-MMM-YYYY] |
| Business Continuity Manager | [Full Name] | ___________________________ | [DD-MMM-YYYY] |
| Head of Internal Audit *(for noting)* | [Full Name] | ___________________________ | [DD-MMM-YYYY] |

### 14.3 Distribution List

| Name | Role | Department | Distribution Method |
|---|---|---|---|
| [Full Name] | [Head of IT Operations] | IT Operations | [Secure Document Repository / Email] |
| [Full Name] | [CISO] | Information Security | [Secure Document Repository / Email] |
| [Full Name] | [Internal Audit Lead] | Internal Audit | [Secure Document Repository / Email] |
| [Full Name] | [Business Continuity Manager] | Risk & Compliance | [Secure Document Repository / Email] |

---

## 15. References

The following regulatory instruments, internal policies, and standards are referenced by or applicable to this document:

| Reference | Document / Clause | Description |
|---|---|---|
| **BNM RMiT** | Clause 10.32 | Disaster recovery testing requirements — full failover test to DR site |
| **BNM RMiT** | Clause 10.28 – 10.31 | Business continuity and disaster recovery planning requirements |
| **BNM RMiT** | Clause 10.18 – 10.21 | IT asset management and classification requirements |
| **BNM BCP Guidelines** | Section [X] | BNM Business Continuity Management Policy |
| **PDPA 2010** | Section 9 — Security Principle | Personal data security requirements applicable to DR environments |
| **ISO/IEC 22301:2019** | — | Business Continuity Management Systems standard |
| **ISO/IEC 27031:2011** | — | ICT readiness for business continuity standard |
| **[Organization Name] DRP** | [DRP-YYYY-NNN] | Approved internal Disaster Recovery Plan |
| **[Organization Name] BCP** | [BCP-YYYY-NNN] | Approved internal Business Continuity Plan |
| **[Organization Name] IT Asset Policy** | [POL-IT-XXX] | Internal IT asset classification and management policy |
| **[Organization Name] BIA** | [BIA-YYYY-NNN] | Current approved Business Impact Analysis |

---

## Appendices

### Appendix A — DR Test Pre-Conditions Checklist

*Complete this checklist before commencing the failover test to confirm all prerequisites are satisfied.*

| # | Pre-Condition | Required State | Confirmed State | Confirmed By | Date/Time |
|---|---|---|---|---|---|
| 1 | DR site infrastructure operational and verified | Operational | [Operational / Not Ready] | [Name] | [DD-MMM-YYYY HH:MM] |
| 2 | Most recent backup successfully replicated to DR site | Replicated | [Replicated / Pending] | [Name] | [DD-MMM-YYYY HH:MM] |
| 3 | DR test plan approved and distributed to all participants | Approved | [Approved / Pending] | [Name] | [DD-MMM-YYYY HH:MM] |
| 4 | Test notification issued to affected business units | Issued | [Issued / Pending] | [Name] | [DD-MMM-YYYY HH:MM] |
| 5 | DR test team on-site or connected to DR environment | Ready | [Ready / Not Ready] | [Name] | [DD-MMM-YYYY HH:MM] |
| 6 | Change freeze or maintenance window approved | Approved | [Approved / Pending] | [Name] | [DD-MMM-YYYY HH:MM] |
| 7 | Monitoring and alerting tools active at DR site | Active | [Active / Inactive] | [Name] | [DD-MMM-YYYY HH:MM] |
| 8 | Rollback / failback plan reviewed and confirmed | Confirmed | [Confirmed / Pending] | [Name] | [DD-MMM-YYYY HH:MM] |

---

### Appendix B — Participant Attendance Register

*All personnel participating in or observing the failover test must sign in below.*

| Full Name | Role / Designation | Department | Organization | Arrival Time | Departure Time | Signature |
|---|---|---|---|---|---|---|
| [Full Name] | [Role] | [Department] | [Org Name] | [HH:MM] | [HH:MM] | _______________ |
| [Full Name] | [Role] | [Department] | [Org Name] | [HH:MM] | [HH:MM] | _______________ |
| [Full Name] | [Role] | [Department] | [Org Name] | [HH:MM] | [HH:MM] | _______________ |

---

### Appendix C — Screenshot and Evidence Log

*List all screenshots, logs, and evidence artefacts captured during the test. Evidence files must be stored in the designated compliance evidence repository.*

| Evidence ID | Description | Captured By | Capture Date/Time | File Name / Repository Path | Linked Finding (if any) |
|---|---|---|---|---|---|
| [EVD-001] | [e.g., DR site login screen confirming system availability] | [Name] | [DD-MMM-YYYY HH:MM] | [/path/to/evidence/file.png] | [FIND-XXX / N/A] |
| [EVD-002] | [e.g., Database replication status — lag metrics at failover point] | [Name] | [DD-MMM-YYYY HH:MM] | [/path/to/evidence/file.png] | [FIND-XXX / N/A] |
| [EVD-003] | [e.g., Application health check output post-failover] | [Name] | [DD-MMM-YYYY HH:MM] | [/path/to/evidence/file.log] | [FIND-XXX / N/A] |

---

### Appendix D — Remediation Tracking Summary

*This appendix provides a consolidated tracker for all open remediation actions arising from this test. Status must be updated at each subsequent review until all items are closed.*

| Finding ID | Asset Affected | Severity | Remediation Action | Owner | Target Date | Status | Evidence of Closure |
|---|---|---|---|---|---|---|---|
| [FIND-001] | [Asset Name] | Critical / High / Medium / Low | [Action description] | [Name / Role] | [DD-MMM-YYYY] | Open / In Progress / Closed | [Evidence reference / N/A] |
| [FIND-002] | [Asset Name] | Critical / High / Medium / Low | [Action description] | [Name / Role] | [DD-MMM-YYYY] | Open / In Progress / Closed | [Evidence reference / N/A] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **BCP** | Business Continuity Plan — a documented plan for maintaining business operations during and after a disruptive event |
| **BIA** | Business Impact Analysis — an assessment of the operational and financial effects of a system or process disruption |
| **CMDB** | Configuration Management Database — a repository of information about IT assets and their relationships |
| **DR** | Disaster Recovery — the process of restoring IT systems and data following a disruptive event |
| **DRP** | Disaster Recovery Plan — a documented plan for recovering IT systems and services following a disaster |
| **MTD** | Maximum Tolerable Downtime — the maximum period a system can be unavailable before causing unacceptable business consequences |
| **RPO** | Recovery Point Objective — the maximum acceptable age of data that can be recovered following an outage |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **RTO** | Recovery Time Objective — the maximum acceptable duration for restoring a system or service following an outage |
| **UAT** | User Acceptance Testing — business user verification that a system is functioning correctly following recovery |

---

*End of Document — [Organization Name] | [Document ID] | Version 1.0 | Classification: Confidential*