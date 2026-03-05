# Power Failover Test Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

*This section describes the intent of this document and the boundaries of its application within the organisation.*

This document establishes the framework for recording, tracking, and reviewing power failover and generator testing activities conducted by **[Organization Name]**. It ensures that all testing events are systematically logged to demonstrate operational resilience and continuity of critical technology infrastructure.

This template supports compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT)**, specifically **Clause 10.26**, which mandates that financial institutions maintain documented evidence of regular testing of power continuity controls, including Uninterruptible Power Supplies (UPS), automatic transfer switches, and standby generators.

**Scope:** This record applies to all power failover tests and generator commissioning exercises conducted across [Organization Name]'s data centres, server rooms, and critical infrastructure environments, including but not limited to:

- Primary data centre facilities
- Disaster Recovery (DR) sites
- Co-location environments managed by or on behalf of [Organization Name]
- Network operations centres (NOC)

**Out of Scope:** Routine preventive maintenance activities not involving active failover simulation, and power infrastructure owned exclusively by third-party facility providers where [Organization Name] has no contractual obligation to test.

---

## 2. Asset and Item Identification

*Identify each asset or infrastructure component subject to power failover testing. Provide sufficient detail to uniquely reference each item within the organisation's asset management system.*

### 2.1 Asset Register Summary

| Asset ID | Asset Name | Asset Type | Location / Site | Serial Number / Tag | Manufacturer / Model |
|---|---|---|---|---|---|
| [ASSET-001] | [UPS Unit – Primary DC] | Uninterruptible Power Supply | [Primary Data Centre, Rack A] | [Serial No.] | [Manufacturer / Model] |
| [ASSET-002] | [Standby Generator – Building A] | Diesel Generator | [Building A, Level B1] | [Serial No.] | [Manufacturer / Model] |
| [ASSET-003] | [Automatic Transfer Switch – DC1] | Transfer Switch | [Primary Data Centre] | [Serial No.] | [Manufacturer / Model] |
| [ASSET-004] | [PDU – Rack Row 3] | Power Distribution Unit | [Primary Data Centre, Row 3] | [Serial No.] | [Manufacturer / Model] |

> Add additional rows for each asset or component included in scope. Asset IDs must correspond to entries in the organisation's authoritative CMDB or asset register.

### 2.2 Test Event Identification

| Test Record ID | Test Event Name | Test Date | Test Type | Associated Assets | Test Conducted By |
|---|---|---|---|---|---|
| [TR-2025-001] | [Q1 Generator Failover Test] | [DD/MM/YYYY] | [Planned Failover] | [ASSET-001, ASSET-002] | [Name / Team] |
| [TR-2025-002] | [DR Site UPS Load Test] | [DD/MM/YYYY] | [Load Simulation] | [ASSET-003] | [Name / Team] |

---

## 3. Classification and Categorisation

*Categorise each test event and the associated infrastructure to support risk-based prioritisation, audit traceability, and regulatory reporting.*

### 3.1 Asset Criticality Classification

| Asset ID | Criticality Tier | Supports Critical System(s) | Business Impact if Unavailable |
|---|---|---|---|
| [ASSET-001] | [Tier 1 – Critical] | [Core Banking, Payment Gateway] | [Immediate service disruption] |
| [ASSET-002] | [Tier 1 – Critical] | [Data Centre Power Continuity] | [Full DC outage within UPS runtime] |
| [ASSET-003] | [Tier 2 – High] | [Server Virtualisation Platform] | [Degraded capacity within 15 minutes] |
| [ASSET-004] | [Tier 3 – Medium] | [Development / Test Environment] | [Non-production impact only] |

**Criticality Tiers:**

- **Tier 1 – Critical:** Assets whose failure would directly and immediately impact customer-facing or regulated financial services.
- **Tier 2 – High:** Assets whose failure would result in significant degradation of operations within a short timeframe.
- **Tier 3 – Medium:** Assets supporting internal or non-customer-facing operations.
- **Tier 4 – Low:** Assets whose failure has minimal operational impact.

### 3.2 Test Type Classification

| Test Type | Description | Minimum Frequency |
|---|---|---|
| Full Failover Test | Complete simulation of mains power loss with automatic switchover to generator | Annually |
| Partial Failover Test | Controlled failover of selected systems or circuits | Semi-annually |
| Load Bank Test | Generator load testing without full failover to production systems | Quarterly |
| UPS Autonomy Test | Verification of UPS runtime under representative load | Quarterly |
| Transfer Switch Functional Test | Validation of ATS switching logic and timing | Quarterly |
| Post-Maintenance Verification | Functional check following maintenance or repair | As required |

---

## 4. Owner and Custodian

*Document the responsible parties for each asset and each test event to ensure clear accountability for testing obligations and record integrity.*

### 4.1 Asset Ownership

| Asset ID | Asset Owner (Business) | Technical Custodian | Department | Contact Email | Contact Phone |
|---|---|---|---|---|---|
| [ASSET-001] | [CTO / IT Director] | [Infrastructure Team Lead] | [IT / Technology] | [email@organization.com] | [+60X-XXXXXXXX] |
| [ASSET-002] | [Head of Facilities] | [Facilities Engineer] | [Facilities & Operations] | [email@organization.com] | [+60X-XXXXXXXX] |
| [ASSET-003] | [CTO / IT Director] | [Data Centre Manager] | [IT / Technology] | [email@organization.com] | [+60X-XXXXXXXX] |

### 4.2 Test Event Ownership

| Test Record ID | Test Owner | Test Lead (Executor) | Witness / Observer | QA Reviewer |
|---|---|---|---|---|
| [TR-2025-001] | [QA Lead] | [Infrastructure Engineer – Name] | [Facilities Manager – Name] | [QA Lead – Name] |
| [TR-2025-002] | [QA Lead] | [Data Centre Technician – Name] | [IT Manager – Name] | [QA Lead – Name] |

> The **Test Owner** bears accountability for ensuring the test is conducted on schedule and results are recorded accurately. The **Test Lead** is responsible for executing the test plan. The **QA Reviewer** validates the completeness and accuracy of the test record.

---

## 5. Status and Lifecycle Stage

*Record the current operational status of each asset and the lifecycle stage of each test event to support audit readiness and ongoing risk monitoring.*

### 5.1 Asset Operational Status

| Asset ID | Operational Status | Last Maintenance Date | Next Scheduled Maintenance | Maintenance Provider | Notes |
|---|---|---|---|---|---|
| [ASSET-001] | [Operational] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Vendor / Internal] | [Any relevant notes] |
| [ASSET-002] | [Operational] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Vendor / Internal] | [e.g., fuel level verified] |
| [ASSET-003] | [Under Maintenance] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Vendor / Internal] | [e.g., capacitor replacement in progress] |

**Asset Status Definitions:**

| Status | Description |
|---|---|
| Operational | Asset is fully functional and available for production use |
| Degraded | Asset is partially functional; failover capability may be impaired |
| Under Maintenance | Asset is temporarily removed from service for planned maintenance |
| Decommissioned | Asset is no longer in active use; records retained for audit purposes |
| Failed | Asset has experienced an unplanned failure; incident ticket raised |

### 5.2 Test Record Lifecycle Status

| Test Record ID | Lifecycle Stage | Completion Date | Record Verified By | Verification Date | Outstanding Actions |
|---|---|---|---|---|---|
| [TR-2025-001] | [Completed – Verified] | [DD/MM/YYYY] | [QA Lead – Name] | [DD/MM/YYYY] | [None / Link to JIRA/ticket] |
| [TR-2025-002] | [In Progress] | [—] | [—] | [—] | [Awaiting load bank results] |
| [TR-2025-003] | [Scheduled] | [—] | [—] | [—] | [Planned for DD/MM/YYYY] |

**Test Record Lifecycle Stages:**

| Stage | Description |
|---|---|
| Scheduled | Test is planned and assigned but not yet commenced |
| In Progress | Test is currently being executed |
| Completed – Pending Review | Test execution complete; awaiting QA review |
| Completed – Verified | Test record reviewed, approved, and filed |
| Failed – Remediation Required | Test did not meet acceptance criteria; remediation plan raised |
| Cancelled | Test was cancelled; reason and rescheduled date documented |

---

## 6. Power Failover Test Records Log

*This is the primary system-generated or manually maintained log of all power failover and generator test events. Each row represents a discrete test execution. All fields must be completed within 24 hours of test completion.*

### 6.1 Test Execution Log

| Test Record ID | Asset ID(s) | Test Type | Test Date | Start Time | End Time | Duration | Location / Site | Test Result | Pass / Fail | Defects Identified | Remediation Ticket | Test Lead | Reviewed By | Review Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [TR-2025-001] | [ASSET-001, ASSET-002] | [Full Failover] | [DD/MM/YYYY] | [HH:MM] | [HH:MM] | [HH:MM] | [Primary DC] | [Generator started; switchover in 12s; all systems maintained] | [Pass] | [None] | [N/A] | [Name] | [QA Lead Name] | [DD/MM/YYYY] |
| [TR-2025-002] | [ASSET-003] | [UPS Autonomy Test] | [DD/MM/YYYY] | [HH:MM] | [HH:MM] | [HH:MM] | [DR Site] | [UPS sustained load for 18 minutes; below 20-minute SLA] | [Fail] | [UPS battery degradation] | [INC-2025-0042] | [Name] | [QA Lead Name] | [DD/MM/YYYY] |

### 6.2 Test Parameters and Acceptance Criteria

| Test Type | Key Parameter | Acceptance Threshold | Measurement Method |
|---|---|---|---|
| Full Failover Test | Generator start-to-transfer time | ≤ 30 seconds | Automated monitoring timestamp |
| Full Failover Test | All critical systems online post-switchover | 100% within 5 minutes | System availability dashboard |
| UPS Autonomy Test | Runtime at full load | ≥ [X] minutes (per SLA) | UPS management console |
| Load Bank Test | Generator sustained output | ≥ [X] kVA for ≥ 2 hours | Generator controller log |
| Transfer Switch Test | ATS switching time | ≤ [X] ms | Transfer switch controller log |

### 6.3 Defect and Remediation Tracking

*Document all deficiencies identified during testing. Each defect must be assigned a ticket reference and tracked to resolution before the next scheduled test.*

| Defect ID | Test Record ID | Asset ID | Defect Description | Severity | Date Identified | Assigned To | Remediation Action | Target Resolution Date | Actual Resolution Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [DEF-001] | [TR-2025-002] | [ASSET-003] | [UPS battery capacity below threshold] | [High] | [DD/MM/YYYY] | [Facilities Engineer] | [Replace UPS battery bank] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Open / Closed] |

---

## 7. Last Review Date

*Record the most recent formal review of this document and all associated test records. Reviews must occur at least quarterly in accordance with the organisation's review schedule.*

### 7.1 Quarterly Review Summary

| Review Period | Review Date | Reviewer Name | Reviewer Role | Records Reviewed (Count) | Issues Identified | Actions Raised | Review Outcome |
|---|---|---|---|---|---|---|---|
| [Q1 2025 (Jan–Mar)] | [DD/MM/YYYY] | [Name] | [QA Lead] | [X] | [Y] | [Z] | [Satisfactory / Requires Action] |
| [Q2 2025 (Apr–Jun)] | [DD/MM/YYYY] | [Name] | [QA Lead] | [X] | [Y] | [Z] | [Satisfactory / Requires Action] |
| [Q3 2025 (Jul–Sep)] | [DD/MM/YYYY] | [Name] | [QA Lead] | [X] | [Y] | [Z] | [Satisfactory / Requires Action] |
| [Q4 2025 (Oct–Dec)] | [DD/MM/YYYY] | [Name] | [QA Lead] | [X] | [Y] | [Z] | [Satisfactory / Requires Action] |

### 7.2 Continuous Monitoring Indicators

*The following indicators are monitored on an ongoing basis between formal quarterly reviews.*

| Indicator | Target | Current Status | Monitoring Source | Last Updated |
|---|---|---|---|---|
| Tests completed on schedule | 100% | [X%] | [Test management system] | [DD/MM/YYYY] |
| Open defects older than 30 days | 0 | [X] | [ITSM / Ticketing system] | [DD/MM/YYYY] |
| Assets with overdue maintenance | 0 | [X] | [CMDB / Asset management] | [DD/MM/YYYY] |
| Test records pending QA review | 0 | [X] | [Document management system] | [DD/MM/YYYY] |
| Failed tests without remediation plan | 0 | [X] | [Defect register] | [DD/MM/YYYY] |

---

## 8. Roles and Responsibilities

*This section defines the roles involved in power failover testing activities. The RACI matrix below assigns accountability for each key activity.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | QA Lead | IT / Infra Manager | Data Centre Manager | Facilities Manager | CISO / Risk | CTO | Internal Audit |
|---|---|---|---|---|---|---|---|
| Define test schedule and plan | R | C | C | C | C | A | I |
| Execute power failover test | I | R | R | R | I | I | I |
| Record test results | R | R | R | R | I | I | I |
| Review and verify test records | A | C | C | I | C | I | I |
| Raise and track defect tickets | R | A | R | R | I | I | I |
| Escalate failed tests | R | R | I | I | A | A | I |
| Conduct quarterly record review | A | C | C | C | C | I | I |
| Report to governance / board | I | I | I | I | R | A | I |
| Maintain asset register | I | A | R | R | I | I | I |
| Approve document updates | I | C | C | C | C | A | I |
| Independent audit of records | I | I | I | I | I | I | A |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Role | Changes Description |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | [QA Lead] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Role] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Role] | [Description of major revision] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead (Owner) | [Name] | __________________ | [DD/MM/YYYY] |
| IT / Infrastructure Manager | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Technology Officer | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Security Officer | [Name] | __________________ | [DD/MM/YYYY] |
| Compliance Officer | [Name] | __________________ | [DD/MM/YYYY] |

---

## 10. References

*This document has been prepared with reference to the following regulatory frameworks, standards, and internal policies.*

| Reference | Document Title | Issuing Body | Relevant Section / Clause |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.26 – Business Continuity Management (Power and Environmental Controls) |
| BNM RMiT | Risk Management in Technology | Bank Negara Malaysia | Clause 10.1–10.5 – Technology Risk Governance |
| [ISO 22301] | Business Continuity Management Systems | ISO / IEC | [Clause 8.5 – Business Continuity Plans and Procedures] |
| [ISO 27001] | Information Security Management Systems | ISO / IEC | [Annex A.17 – Information Security Aspects of BCM] |
| [TIA-942] | Telecommunications Infrastructure Standard for Data Centres | TIA | [Section on Power Redundancy and Testing] |
| [Internal Policy] | [IT Business Continuity and Disaster Recovery Policy] | [Organization Name] | [Section X – Power and Environmental Controls] |
| [Internal Policy] | [IT Asset Management Policy] | [Organization Name] | [Section X – Asset Classification] |
| [Internal SOP] | [Power Failover Test Procedure – SOP-IT-XXX] | [Organization Name] | [All sections] |

---

## 11. Appendices

### Appendix A – Power Failover Test Checklist

*Attach or reference the standard pre-test, during-test, and post-test checklist used for each failover exercise. The checklist must be completed and signed by the Test Lead for every test event.*

> **[Attach: SOP-IT-XXX Power Failover Test Checklist – Version X.X]**
>
> *Or reproduce checklist inline below if no separate SOP exists:*

| # | Checklist Item | Pre-Test | During Test | Post-Test | Completed By | Time |
|---|---|---|---|---|---|---|
| 1 | Notify all affected teams and stakeholders | ✓ | — | — | [Name] | [HH:MM] |
| 2 | Confirm fuel level ≥ [X]% of tank capacity | ✓ | — | — | [Name] | [HH:MM] |
| 3 | Verify UPS charge status ≥ [X]% | ✓ | — | — | [Name] | [HH:MM] |
| 4 | Confirm monitoring and logging tools are active | ✓ | — | — | [Name] | [HH:MM] |
| 5 | Simulate mains power interruption | — | ✓ | — | [Name] | [HH:MM] |
| 6 | Record generator start time and transfer time | — | ✓ | — | [Name] | [HH:MM] |
| 7 | Confirm all critical systems remain online | — | ✓ | — | [Name] | [HH:MM] |
| 8 | Restore mains power and confirm switchback | — | — | ✓ | [Name] | [HH:MM] |
| 9 | Verify all systems normal post-restoration | — | — | ✓ | [Name] | [HH:MM] |
| 10 | Complete test record and submit for QA review | — | — | ✓ | [Name] | [HH:MM] |

---

### Appendix B – Asset Location Map

*Attach a floor plan or rack diagram indicating the physical location of all UPS units, generators, transfer switches, and PDUs within scope of this document.*

> **[Attach: Data Centre Floor Plan – Revision X, dated DD/MM/YYYY]**
> **[Attach: DR Site Infrastructure Diagram – Revision X, dated DD/MM/YYYY]**

---

### Appendix C – Escalation and Notification Matrix

*Defines who must be notified in the event of a test failure, extended outage during testing, or identification of a critical defect.*

| Scenario | Immediate Notification (within 1 hour) | Escalation (within 4 hours) | Regulatory Notification Required? |
|---|---|---|---|
| Test failure – non-critical asset | [IT Manager] | [QA Lead] | No |
| Test failure – Tier 1 critical asset | [QA Lead, CTO, CISO] | [Board Risk Committee] | [Assess per BNM incident reporting threshold] |
| Unplanned power outage during test | [All IT staff, Facilities Manager, CTO] | [CISO, CEO] | [Assess per BNM RMiT incident reporting requirements] |
| Generator failure to start | [Facilities Manager, CTO] | [QA Lead, CISO] | [Assess per BNM RMiT Clause 11.x] |
| UPS runtime below SLA | [Infrastructure Manager] | [QA Lead, CTO] | No |

---

### Appendix D – Glossary

| Term | Definition |
|---|---|
| ATS | Automatic Transfer Switch – a device that automatically transfers electrical load from the primary power source to a standby generator upon detection of a mains failure |
| BCM | Business Continuity Management |
| BNM | Bank Negara Malaysia – the central bank and financial regulator of Malaysia |
| CMDB | Configuration Management Database – the authoritative register of IT assets and their relationships |
| DR | Disaster Recovery |
| PDU | Power Distribution Unit |
| RMiT | Risk Management in Technology – BNM's policy document governing technology risk management for financial institutions |
| SLA | Service Level Agreement |
| UPS | Uninterruptible Power Supply – a battery-backed device that provides emergency power when mains supply fails |

---

*This document is classified as **Confidential**. It must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: QA Lead | [Organization Name]*