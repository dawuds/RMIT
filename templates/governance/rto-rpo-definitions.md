# RTO/RPO Definitions

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Risk Officer (CRO) |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Executive Summary

*Provide a concise overview of the organization's business continuity recovery objectives, the criticality of the systems covered, and the strategic intent behind the defined RTO and RPO targets. Summarize key approval decisions and any material changes from the prior review cycle.*

[Organization Name] has established Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for all critical technology systems in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.33. These targets reflect the organization's risk appetite, operational dependencies, and regulatory obligations applicable to licensed financial institutions.

This document has been reviewed and approved by the Chief Risk Officer and relevant business owners. It serves as the authoritative reference for business continuity planning, disaster recovery testing, and technology resilience governance.

---

## 2. Purpose and Scope

### 2.1 Purpose

This document defines the Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for all critical systems operated by [Organization Name]. It ensures that technology recovery capabilities are aligned with business continuity requirements and comply with BNM RMiT Clause 10.33, which mandates that financial institutions define, document, and test recovery time and recovery point objectives for critical systems.

### 2.2 Scope

*Define which systems, business units, and geographic locations are covered. Explicitly state any systems that are out of scope and provide justification.*

This document applies to:

- All **critical technology systems** as classified under [Organization Name]'s Technology Asset Classification Policy
- Systems hosted on-premises, in co-location facilities, and in cloud environments
- Third-party managed systems that support critical business functions
- All business units of [Organization Name] operating within Malaysia

**Out of Scope:**

- Non-critical systems classified as Tier 3 or below per the asset classification framework
- Development and test environments (unless used for live parallel processing)
- [Any other exclusions — specify with justification]

### 2.3 Regulatory Context

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | Clause 10.33 | Financial institutions must define RTO and RPO for critical systems and obtain business owner approval |
| BNM Business Continuity Management (BCM) | [Relevant Clause] | Recovery objectives must be validated through periodic testing |
| [Other applicable regulation] | [Clause] | [Summary] |

---

## 3. Governance Structure

*Describe the governance framework under which RTO/RPO definitions are established, approved, and maintained. Reference the relevant committees and escalation paths.*

The definition and approval of RTO/RPO targets is governed through the following structure:

- **Board Risk Committee (BRC):** Provides oversight and approves the organization's overall technology risk appetite, including acceptable recovery thresholds for critical systems.
- **Technology Risk Committee (TRC):** Reviews and endorses RTO/RPO targets proposed by system owners and the CRO prior to Board-level reporting.
- **Chief Risk Officer (CRO):** Accountable for the accuracy, completeness, and periodic review of this document.
- **Business Owners:** Responsible for defining and approving the business impact and recovery requirements for systems within their domain.
- **Chief Information Officer (CIO) / Chief Technology Officer (CTO):** Responsible for confirming that technical recovery capabilities meet or exceed the approved RTO/RPO targets.

### 3.1 Approval Authority

| RTO Category | Approval Authority |
|---|---|
| RTO ≤ 2 hours (Tier 1 Critical) | Board Risk Committee |
| RTO 2–24 hours (Tier 2 Important) | Technology Risk Committee |
| RTO > 24 hours (Tier 3 Standard) | Chief Risk Officer |

---

## 4. Methodology and Approach

### 4.1 System Criticality Classification

*Explain how systems are assessed and tiered for criticality, referencing the Business Impact Analysis (BIA) process.*

RTO and RPO targets are derived from the Business Impact Analysis (BIA) conducted by [Organization Name]. The BIA evaluates each system against the following dimensions:

- **Financial impact** of system unavailability over time
- **Regulatory and legal obligations** dependent on system availability
- **Reputational impact** on customers and counterparties
- **Operational dependencies** (upstream and downstream system linkages)

Systems are classified into tiers as follows:

| Tier | Classification | Description | Indicative RTO | Indicative RPO |
|---|---|---|---|---|
| 1 | Mission Critical | Supports core banking, payment processing, or regulatory reporting; outage causes immediate regulatory breach or financial loss | ≤ 2 hours | ≤ 15 minutes |
| 2 | Business Critical | Supports important business operations; outage causes significant operational disruption | 2–24 hours | ≤ 4 hours |
| 3 | Standard | Supports non-time-sensitive functions; outage causes inconvenience but limited financial or regulatory impact | 24–72 hours | ≤ 24 hours |

### 4.2 RTO/RPO Determination Process

1. Business owners complete the **System Recovery Requirements Form** (Appendix A) for each system under their domain.
2. IT/Technology validates technical feasibility of the stated recovery objectives.
3. The CRO reviews for alignment with organizational risk appetite.
4. The Technology Risk Committee endorses the consolidated RTO/RPO register.
5. Business owners provide formal written approval for their respective systems.
6. The approved register is submitted to the Board Risk Committee for noting.

---

## 5. RTO and RPO Register

*This is the core section of the document. List all critical systems with their approved RTO, RPO, business owner, and last validation date. Ensure all Tier 1 and Tier 2 systems are included.*

### 5.1 Critical Systems Recovery Objectives

| System ID | System Name | Business Function | Tier | RTO Target | RPO Target | Business Owner | Technical Owner | Last DR Test Date | Business Owner Approval Date |
|---|---|---|---|---|---|---|---|---|---|
| SYS-001 | [Core Banking System] | Core banking operations | 1 | [e.g., 2 hours] | [e.g., 15 mins] | [Name / Role] | [Name / Role] | [Date] | [Date] |
| SYS-002 | [Payment Gateway] | Payment processing | 1 | [e.g., 1 hour] | [e.g., 0 — synchronous replication] | [Name / Role] | [Name / Role] | [Date] | [Date] |
| SYS-003 | [Internet Banking Portal] | Customer-facing digital services | 1 | [e.g., 4 hours] | [e.g., 30 mins] | [Name / Role] | [Name / Role] | [Date] | [Date] |
| SYS-004 | [Risk Management System] | Regulatory reporting & risk monitoring | 2 | [e.g., 8 hours] | [e.g., 4 hours] | [Name / Role] | [Name / Role] | [Date] | [Date] |
| SYS-005 | [HR & Payroll System] | Human resources & payroll processing | 3 | [e.g., 48 hours] | [e.g., 24 hours] | [Name / Role] | [Name / Role] | [Date] | [Date] |
| [SYS-XXX] | [System Name] | [Function] | [Tier] | [RTO] | [RPO] | [Name / Role] | [Name / Role] | [Date] | [Date] |

> **Note:** This register must be reviewed and re-approved by each business owner annually or following any material change to the system, its dependencies, or the organization's risk appetite.

### 5.2 Third-Party and Cloud-Hosted Systems

*List systems managed by third parties or hosted in cloud environments. Confirm that contractual SLAs support the stated RTO/RPO targets.*

| System ID | System Name | Service Provider | Hosting Model | Contractual RTO | Contractual RPO | Required RTO | Required RPO | Gap Identified | Remediation Plan |
|---|---|---|---|---|---|---|---|---|---|
| SYS-EXT-001 | [System Name] | [Provider Name] | [Cloud / Co-Lo / Managed] | [SLA RTO] | [SLA RPO] | [Required RTO] | [Required RPO] | [Yes / No] | [If yes, describe] |

---

## 6. Roles and Responsibilities

*Define accountability for RTO/RPO definition, maintenance, testing, and reporting. Use the RACI model (Responsible, Accountable, Consulted, Informed).*

### 6.1 RACI Matrix

| Activity | Board Risk Committee | CRO | CIO / CTO | Technology Risk Committee | Business Owner | IT Operations | Internal Audit |
|---|---|---|---|---|---|---|---|
| Define system criticality and tier classification | I | A | C | C | R | C | I |
| Determine RTO/RPO requirements per system | I | A | C | C | R | C | I |
| Validate technical feasibility of RTO/RPO | I | C | A | C | I | R | I |
| Approve RTO/RPO register | A | R | C | R | R | I | I |
| Conduct disaster recovery testing | I | I | A | C | C | R | I |
| Report DR test results against RTO/RPO | I | R | R | A | C | R | I |
| Annual review and re-approval of this document | I | A | C | R | R | I | C |
| Independent audit and validation | C | I | I | I | I | I | A |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 7. Implementation Roadmap

*Describe any planned improvements to close gaps between current recovery capabilities and approved RTO/RPO targets. Include milestones and target completion dates.*

### 7.1 Current State Assessment

| System ID | System Name | Current Achievable RTO | Current Achievable RPO | Approved Target RTO | Approved Target RPO | Gap |
|---|---|---|---|---|---|---|
| SYS-001 | [System Name] | [Current RTO] | [Current RPO] | [Target RTO] | [Target RPO] | [Yes / No] |
| [SYS-XXX] | [System Name] | [Current RTO] | [Current RPO] | [Target RTO] | [Target RPO] | [Yes / No] |

### 7.2 Gap Remediation Plan

| Item | System Affected | Gap Description | Proposed Action | Responsible Party | Target Completion | Status |
|---|---|---|---|---|---|---|
| 1 | [System Name] | [Describe gap] | [Remediation action] | [Owner] | [Date] | [On Track / At Risk / Complete] |
| 2 | [System Name] | [Describe gap] | [Remediation action] | [Owner] | [Date] | [On Track / At Risk / Complete] |

---

## 8. Monitoring and Review Mechanisms

### 8.1 Disaster Recovery Testing

RTO/RPO targets must be validated through periodic DR testing in accordance with BNM RMiT requirements. The following testing schedule applies:

| System Tier | Minimum Testing Frequency | Test Type |
|---|---|---|
| Tier 1 — Mission Critical | Annual (at minimum) | Full failover exercise |
| Tier 2 — Business Critical | Annual | Tabletop or partial failover |
| Tier 3 — Standard | Every 2 years | Tabletop exercise |

All test results must be documented and reported to the Technology Risk Committee. Where a system fails to meet its approved RTO or RPO during testing, a remediation plan must be submitted within **[30] business days**.

### 8.2 Trigger-Based Reviews

In addition to the annual review cycle, this document must be reviewed and updated upon:

- Material changes to any covered system (architecture, hosting, vendor)
- A declared business continuity or disaster recovery event
- Changes to BNM RMiT or related regulatory requirements
- Merger, acquisition, or significant organizational restructuring
- Failure of a system to meet its RTO/RPO during a DR test or actual incident

### 8.3 Reporting

| Report | Frequency | Prepared By | Submitted To |
|---|---|---|---|
| RTO/RPO Compliance Status Report | Quarterly | CIO / IT Risk | Technology Risk Committee |
| DR Test Results Summary | Post-test (within 30 days) | IT Operations | CRO, Technology Risk Committee |
| Annual RTO/RPO Register Review | Annual | CRO | Board Risk Committee |
| Regulatory Reporting (if applicable) | As required | CRO | Bank Negara Malaysia |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Risk Officer | [Name] | __________________ | [Date] |
| Chief Information Officer | [Name] | __________________ | [Date] |
| Chief Technology Officer | [Name] | __________________ | [Date] |
| Board Risk Committee Chair | [Name] | __________________ | [Date] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.33 | Requirement to define, document, and obtain business owner approval for RTO and RPO of critical systems |
| BNM RMiT | Clause 10.30–10.32 | Technology service continuity planning requirements |
| BNM Business Continuity Management | [Relevant Clause] | BCM framework requirements for licensed financial institutions |
| [Organization Name] BCM Policy | [Document ID] | Internal business continuity management policy |
| [Organization Name] Technology Asset Classification Policy | [Document ID] | System criticality tiering methodology |
| ISO 22301 | Section [X] | International standard for business continuity management systems |
| ISO/IEC 27031 | Section [X] | Guidelines for ICT readiness for business continuity |

---

## Appendices

### Appendix A: System Recovery Requirements Form

*This form is to be completed by the business owner for each system and submitted to the CRO for consolidation into the RTO/RPO register.*

| Field | Response |
|---|---|
| System Name | |
| System ID | |
| Business Function Supported | |
| Business Owner (Name & Role) | |
| Technical Owner (Name & Role) | |
| Maximum Tolerable Downtime (MTD) | |
| Proposed RTO | |
| Proposed RPO | |
| Justification for Proposed Targets | |
| Key Dependencies (upstream/downstream systems) | |
| Business Owner Signature | |
| Date | |

### Appendix B: Glossary

| Term | Definition |
|---|---|
| **RTO (Recovery Time Objective)** | The maximum acceptable duration of time within which a system must be restored following a disruption |
| **RPO (Recovery Point Objective)** | The maximum acceptable amount of data loss measured in time; the point in time to which data must be recovered |
| **MTD (Maximum Tolerable Downtime)** | The total time a business can sustain the loss of a critical function before it causes unacceptable business impact |
| **BIA (Business Impact Analysis)** | A process to assess the consequences of a disruption to business functions and determine recovery priorities |
| **Disaster Recovery (DR)** | The process and set of policies and procedures to enable recovery of critical IT infrastructure and systems |
| **Critical System** | A system whose unavailability would result in significant financial, operational, reputational, or regulatory impact |

### Appendix C: DR Test Results Summary Log

*Attach or reference the most recent DR test results for each Tier 1 and Tier 2 system.*

| System ID | System Name | Test Date | Test Type | Achieved RTO | Achieved RPO | Target RTO | Target RPO | Result | Remediation Required |
|---|---|---|---|---|---|---|---|---|---|
| SYS-001 | [System Name] | [Date] | [Full Failover] | [Actual RTO] | [Actual RPO] | [Target RTO] | [Target RPO] | [Pass / Fail] | [Yes / No] |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This document must be stored and handled in accordance with [Organization Name]'s Information Classification and Handling Policy.*