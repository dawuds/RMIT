# Patch Management Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws and internal policies.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Patch Criticality Classification](#5-patch-criticality-classification)
6. [Patch Management Process Flow](#6-patch-management-process-flow)
7. [Patch Identification and Discovery](#7-patch-identification-and-discovery)
8. [Patch Evaluation and Risk Assessment](#8-patch-evaluation-and-risk-assessment)
9. [Testing and Validation Procedures](#9-testing-and-validation-procedures)
10. [Patch Deployment and Change Management](#10-patch-deployment-and-change-management)
11. [Rollback Procedures](#11-rollback-procedures)
12. [Exceptions and Risk Acceptance](#12-exceptions-and-risk-acceptance)
13. [End-of-Life Technology Register](#13-end-of-life-technology-register)
14. [Roles and Responsibilities](#14-roles-and-responsibilities)
15. [Monitoring, Reporting, and Metrics](#15-monitoring-reporting-and-metrics)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose

*This section states the intent of the policy and the business and regulatory problem it addresses. Describe why patch management is critical to the organization's security posture and regulatory obligations.*

This Patch Management Policy establishes the formal requirements, procedures, and responsibilities for the identification, evaluation, testing, approval, deployment, and verification of software patches and firmware updates across the technology environment of [Organization Name].

Effective patch management is a foundational control for maintaining the confidentiality, integrity, and availability of information systems. Unpatched vulnerabilities represent one of the most significant and exploitable attack vectors in the threat landscape. This policy ensures that [Organization Name] maintains a proactive, risk-based approach to vulnerability remediation that is consistent with regulatory obligations, industry standards, and internal risk appetite.

This policy supports [Organization Name]'s compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** policy document, specifically **Clause 10.17**, which mandates that financial institutions implement and maintain effective patch management controls to address technology vulnerabilities in a timely and structured manner.

---

## 2. Scope and Applicability

*Define the boundaries of this policy — which systems, environments, business units, and personnel it applies to. Be specific to avoid ambiguity during audits.*

### 2.1 In-Scope Systems and Assets

This policy applies to all technology assets owned, operated, managed, or maintained by [Organization Name] or on its behalf, including but not limited to:

| Asset Category | Examples | Applicability |
|---|---|---|
| **Server Infrastructure** | Physical servers, virtual machines, hypervisors | In Scope |
| **End-User Devices** | Laptops, desktops, workstations | In Scope |
| **Network Devices** | Routers, switches, firewalls, load balancers | In Scope |
| **Operating Systems** | Windows Server, Linux distributions, macOS | In Scope |
| **Databases** | Oracle, Microsoft SQL Server, PostgreSQL, MySQL | In Scope |
| **Applications** | Core banking systems, internet banking, middleware | In Scope |
| **Security Appliances** | IDS/IPS, WAF, endpoint protection platforms | In Scope |
| **Cloud Workloads** | IaaS, PaaS instances managed by [Organization Name] | In Scope |
| **Mobile Devices** | Corporate-issued smartphones and tablets | In Scope |
| **OT/SCADA Systems** | Industrial control systems (where applicable) | In Scope (with exceptions per Section 12) |
| **Third-Party Managed Systems** | Outsourced or vendor-managed infrastructure | In Scope (contractual obligations apply) |

### 2.2 Out-of-Scope Systems

The following are explicitly excluded from this policy:

- **Software-as-a-Service (SaaS) platforms** where patch management is the sole responsibility of the SaaS vendor, provided that contractual SLAs for patching are documented and monitored.
- **Personal devices** not enrolled in [Organization Name]'s Mobile Device Management (MDM) solution.
- **Decommissioned systems** that have been formally retired, isolated from production networks, and documented in the asset register.

### 2.3 Applicability to Personnel

This policy applies to:

- All employees of [Organization Name] involved in the management, administration, or operation of technology assets.
- Third-party vendors, contractors, and managed service providers (MSPs) with access to or responsibility for [Organization Name]'s technology environment, as governed by applicable service agreements.
- Outsourced technology service providers subject to BNM's outsourcing requirements under RMiT.

### 2.4 Environments Covered

| Environment | Description | Patch Priority |
|---|---|---|
| **Production** | Live systems serving customers or business operations | Highest |
| **Pre-Production / Staging** | Near-identical mirror of production for final testing | High |
| **Development** | Systems used for application development | Medium |
| **Test / QA** | Systems used for quality assurance and patch validation | Medium |
| **Disaster Recovery (DR)** | Hot or warm standby environments | High (synchronized with Production) |

---

## 3. Regulatory and Policy Framework

*List all regulatory obligations, standards, and internal policies that this document fulfills or relates to. This section is critical for audit traceability.*

### 3.1 Regulatory Requirements

| Regulation / Standard | Issuing Body | Relevant Clause / Section | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 10.17 | Patch management controls for technology vulnerabilities |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 10.1 – 10.5 | General technology risk management framework |
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 11 | Cyber risk management |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Section 9 (Security Principle) | Protection of personal data through adequate security measures |
| National Cyber Security Policy (NCSP) | NACSA | [Applicable Control Domain] | Vulnerability and patch management for critical information infrastructure |
| ISO/IEC 27001:2022 | ISO / IEC | Annex A 8.8 | Management of technical vulnerabilities |
| Payment Card Industry DSS (PCI DSS) | PCI SSC | Requirement 6 | Developing and maintaining secure systems |

### 3.2 Internal Policy Hierarchy

This policy operates within [Organization Name]'s broader policy framework:

- **[Organization Name] Information Security Policy** — Parent policy
- **[Organization Name] Change Management Policy** — Governs the change process through which patches are deployed
- **[Organization Name] Vulnerability Management Policy** — Governing policy for overall vulnerability identification and remediation
- **[Organization Name] IT Asset Management Policy** — Defines the asset inventory that informs patch scope
- **[Organization Name] Incident Response Policy** — Invoked where patching is triggered by an active security incident
- **[Organization Name] Business Continuity Plan (BCP)** — Considered during patch scheduling to avoid disruption
- **[Organization Name] Third-Party Risk Management Policy** — Governs vendor patching obligations

---

## 4. Definitions and Terminology

*Define all technical and regulatory terms used in this document to ensure consistent interpretation across teams and during audits.*

| Term | Definition |
|---|---|
| **Patch** | A software update issued by a vendor or developer to correct a security vulnerability, functional defect, or performance issue. |
| **Security Patch** | A patch specifically designed to remediate a confirmed or potential security vulnerability. |
| **Hotfix** | An emergency patch released outside the normal release cycle to address a critical vulnerability or system failure. |
| **Service Pack** | A cumulative collection of patches, updates, and fixes packaged together for deployment. |
| **Firmware Update** | An update to the low-level software embedded in hardware devices such as routers, switches, or storage systems. |
| **Vulnerability** | A weakness or flaw in a system, software, or configuration that could be exploited to compromise confidentiality, integrity, or availability. |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed identifier for a known cybersecurity vulnerability. |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the characteristics and severity of software vulnerabilities on a scale of 0.0–10.0. |
| **EPSS** | Exploit Prediction Scoring System — a probability score estimating the likelihood that a vulnerability will be exploited in the wild. |
| **Zero-Day Vulnerability** | A vulnerability that is publicly known or actively exploited before the vendor has released an official patch. |
| **End-of-Life (EOL)** | The state of a technology component for which the vendor no longer provides support, security updates, or patches. |
| **Patch Window** | A scheduled time period during which patches may be deployed to production systems with minimal business disruption. |
| **SLA** | Service Level Agreement — defines the maximum permissible time between patch release and deployment based on criticality. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles in a process. |
| **Rollback** | The process of reverting a system to its pre-patch state following a failed or problematic deployment. |
| **Compensating Control** | A security measure implemented to mitigate risk when a patch cannot be applied within the required timeframe. |
| **Change Advisory Board (CAB)** | A committee responsible for reviewing, approving, and overseeing changes to production systems. |

---

## 5. Patch Criticality Classification

*Define the organization's patch classification tiers, the criteria for each tier, and the remediation SLAs. This section directly supports RMiT Clause 10.17 requirements for timely patching.*

### 5.1 Classification Framework

[Organization Name] classifies patches according to a four-tier framework based on CVSS score, vendor severity rating, exploitability, and business impact. All patches must be classified upon discovery and re-evaluated if new threat intelligence changes the risk profile.

### 5.2 Classification Tiers and SLAs

| Tier | Classification | CVSS Score Range | Vendor Rating | Description | Identification SLA | Remediation SLA |
|---|---|---|---|---|---|---|
| **P1** | **Critical** | 9.0 – 10.0 | Critical | Actively exploited or publicly disclosed vulnerability with high likelihood of severe business impact. Zero-day vulnerabilities automatically classified as P1. | Immediate (within 4 hours of disclosure) | **72 hours** (production); emergency CAB approval required |
| **P2** | **High** | 7.0 – 8.9 | High | Significant vulnerability not yet exploited in the wild but with a high EPSS score or exposed attack surface. | Within 24 hours of disclosure | **7 calendar days** |
| **P3** | **Medium** | 4.0 – 6.9 | Medium | Vulnerability requiring specific conditions or prior access for exploitation. Limited likelihood of immediate exploitation. | Within 5 business days | **30 calendar days** |
| **P4** | **Low / Informational** | 0.1 – 3.9 | Low / Info | Minor vulnerability or informational finding with negligible risk to business operations. | Within 10 business days | **90 calendar days** |

> **Note:** CVSS scores provide a baseline; the final classification must consider contextual factors including asset criticality, internet exposure, data sensitivity, and active threat intelligence. A P3-classified patch may be escalated to P2 or P1 if threat intelligence indicates active exploitation.

### 5.3 Classification Adjustment Factors

The following factors may escalate a patch's classification tier:

| Factor | Escalation Trigger | Example |
|---|---|---|
| **Active Exploitation** | Confirmed in-the-wild exploitation (e.g., CISA KEV listing) | CVE with known ransomware exploitation |
| **Internet-Facing Asset** | Asset is directly accessible from the public internet | Web application server, VPN gateway |
| **Critical Business System** | Asset supports core banking, payment, or customer-facing services | Core banking application server |
| **Regulatory Data Exposure** | Asset processes or stores personal data subject to PDPA | Customer database |
| **No Compensating Control** | No alternative mitigation is technically feasible | Legacy system with no WAF or network segmentation |
| **Vendor Advisory Severity** | Vendor rates vulnerability higher than CVSS baseline | Oracle Critical Patch Update advisory |

---

## 6. Patch Management Process Flow

*Provide a high-level overview of the end-to-end patch management lifecycle. This process view helps auditors understand the workflow and confirms that all required controls are embedded.*

### 6.1 Process Overview

The [Organization Name] Patch Management process comprises six sequential phases:

```
Phase 1: Identification & Discovery
           ↓
Phase 2: Evaluation & Risk Assessment
           ↓
Phase 3: Testing & Validation
           ↓
Phase 4: Approval & Scheduling
           ↓
Phase 5: Deployment & Verification
           ↓
Phase 6: Documentation & Closure
```

### 6.2 Phase Summary Table

| Phase | Activity | Owner | Output |
|---|---|---|---|
| **1. Identification** | Discover applicable patches via automated scanning, vendor advisories, and threat intelligence feeds. | Vulnerability Management Team | Patch candidate list |
| **2. Evaluation** | Classify each patch by criticality tier, assess risk and business impact, and determine applicability. | QA Lead / Security Team | Risk-assessed patch register |
| **3. Testing** | Deploy patch in non-production environment; validate functionality, performance, and compatibility. | QA Lead / System Owners | Test completion report |
| **4. Approval** | Submit for CAB approval (or emergency approval for P1). Assign deployment window. | Change Manager / CAB | Approved change record |
| **5. Deployment** | Deploy approved patch to production within SLA. Verify successful application. | IT Operations / System Owners | Deployment completion record |
| **6. Documentation** | Update asset register, patch log, and vulnerability register. Close change record. | QA Lead | Closed patch record |

### 6.3 SLA Tracking and Escalation

*Define how SLA compliance is tracked and the escalation path when deadlines are at risk.*

- SLA compliance is tracked in [Organization Name]'s **[Patch Management Tool / ITSM Platform]**.
- Patches approaching 75% of their SLA with no active deployment plan trigger an automatic escalation notification to the **QA Lead**.
- Patches breaching their SLA escalate to the **Head of IT / CISO** within **[X] business hours**.
- All SLA breaches must be documented with a root cause and remediation timeline in the patch register.

---

## 7. Patch Identification and Discovery

*Describe how patches are discovered and tracked. This section should cover all detection channels — automated tools, vendor advisories, and threat intelligence.*

### 7.1 Discovery Channels

[Organization Name] employs a multi-channel approach to ensure comprehensive patch identification:

| Channel | Description | Frequency | Responsible Party |
|---|---|---|---|
| **Automated Vulnerability Scanning** | Authenticated scans using [Vulnerability Scanner Tool, e.g., Tenable, Qualys] against all in-scope assets. | Weekly (minimum); daily for internet-facing assets | Vulnerability Management Team |
| **Vendor Security Advisories** | Subscriptions to vendor security bulletin mailing lists and advisory portals. | Continuous monitoring; reviewed daily | System Owners / QA Lead |
| **National Vulnerability Database (NVD)** | Monitoring of NIST NVD and CVE feeds for newly disclosed vulnerabilities affecting in-scope software. | Daily automated feed | Security Operations |
| **CISA Known Exploited Vulnerabilities (KEV)** | Real-time monitoring of CISA KEV catalogue for confirmed exploited vulnerabilities. | Continuous | Security Operations |
| **Threat Intelligence Feeds** | Commercial or industry threat intelligence sources (e.g., FS-ISAC, [Organization Name]'s threat intel platform). | Continuous | Security Operations |
| **Penetration Testing Results** | Vulnerabilities identified during scheduled or ad hoc penetration testing engagements. | Per engagement schedule | QA Lead / External Assessors |
| **BNM / NACSA Advisories** | Security alerts and advisories issued by Bank Negara Malaysia or the National Cyber Coordination and Command Centre (NC4). | As issued | CISO / IT Management |
| **Internal Incident Findings** | Vulnerabilities discovered during the investigation of security incidents. | Per incident | Incident Response Team |

### 7.2 Asset Inventory Prerequisite

*Patch identification is only effective when based on a complete and accurate asset inventory.*

Patch identification relies on a current and accurate **IT Asset Register** maintained in accordance with the [Organization Name] IT Asset Management Policy. The asset register must include, at minimum:

- Asset name and unique identifier
- Asset category and criticality rating
- Operating system name and version
- Installed software applications and versions
- Firmware version (for network and hardware devices)
- Asset owner / responsible team
- Network exposure (internet-facing / internal / air-gapped)
- Business function supported

Asset inventory must be reviewed and reconciled with vulnerability scan results on a **[monthly / quarterly]** basis.

### 7.3 Patch Register

All identified patches are recorded in the **Patch Register**, maintained in [Organization Name]'s [ITSM / Patch Management Platform]. Each entry must capture:

| Field | Description |
|---|---|
| Patch ID | Unique identifier for tracking |
| CVE / Advisory Reference | Vendor advisory number or CVE identifier |
| Affected Asset(s) | System(s) or application(s) requiring the patch |
| Vendor | Software or hardware vendor |
| Patch Release Date | Date the vendor released the patch |
| Discovery Date | Date [Organization Name] identified the patch requirement |
| CVSS Score | Base score from NVD or vendor |
| Criticality Tier | P1 / P2 / P3 / P4 per Section 5 |
| Remediation SLA Due Date | Calculated from discovery date per classification |
| Status | Identified / In Evaluation / In Testing / Approved / Deployed / Closed / Excepted |

---

## 8. Patch Evaluation and Risk Assessment

*Define how each identified patch is assessed for risk, applicability, and priority before it proceeds to testing or deployment.*

### 8.1 Applicability Assessment

Upon identification, each patch must be assessed to determine whether it applies to [Organization Name]'s environment. The following questions must be answered:

1. Is the affected software or hardware present in [Organization Name]'s asset inventory?
2. Is the specific version or configuration affected by the vulnerability present?
3. Is the affected asset within the scope of this policy?
4. Has the vendor confirmed applicability to the specific platform or configuration in use?

Patches confirmed as **not applicable** must be documented in the patch register with the rationale for exclusion and retained for audit evidence.

### 8.2 Risk Assessment Criteria

For applicable patches, a formal risk assessment must be conducted considering the following:

| Assessment Factor | Guidance |
|---|---|
| **CVSS Base Score** | Use NVD published score as a baseline; note if vendor score differs. |
| **CVSS Temporal Score** | Adjust for exploit code maturity and remediation level. |
| **CVSS Environmental Score** | Adjust for asset criticality, data classification, and network exposure within [Organization Name]'s environment. |
| **EPSS Score** | Consider exploit prediction score to inform urgency. |
| **Asset Criticality** | Is the affected asset rated as critical, high, medium, or low? |
| **Business Impact** | What is the potential business impact if the vulnerability is exploited? |
| **Data Sensitivity** | Does the affected asset process or store personal data or regulated financial data? |
| **Network Exposure** | Is the asset internet-facing or internally accessible only? |
| **Existing Controls** | Are compensating controls (WAF, network segmentation, EDR) in place that reduce exploitability? |
| **Vendor Recommendation** | Has the vendor explicitly recommended immediate patching? |

### 8.3 Prioritization and Scheduling

Based on the risk assessment outcome:

- **P1 (Critical) patches** are escalated immediately to the QA Lead and CISO. Emergency change procedures are initiated.
- **P2 (High) patches** are fast-tracked through the testing and approval process with a 7-day deployment SLA.
- **P3 (Medium) patches** are included in the next scheduled patch cycle.
- **P4 (Low) patches** are batched for deployment within the quarterly patch cycle.

---

## 9. Testing and Validation Procedures

*Describe the testing methodology applied to patches before production deployment. Robust testing is critical for preventing outages while maintaining security posture.*

### 9.1 Testing Principles

All patches, regardless of criticality, must undergo testing before production deployment **unless** an emergency exception is formally approved per Section 12. Testing must verify:

1. The patch successfully installs without error.
2. The targeted vulnerability is remediated (where technically verifiable).
3. System functionality is not degraded or broken.
4. No adverse impact on dependent systems, applications, or integrations.
5. System performance is within acceptable thresholds.
6. Rollback procedures have been validated and documented.

### 9.2 Testing Environments

| Environment | Usage | Applicability |
|---|---|---|
| **Development / Lab** | Initial patch compatibility testing; low-fidelity environment. | P3, P4 patches; initial P1/P2 rapid triage |
| **Test / QA Environment** | Functional and regression testing against representative configuration. | All patches before pre-production |
| **Pre-Production / Staging** | High-fidelity replica of production; final validation before deployment. | Mandatory for P1, P2; recommended for P3 |
| **Production (controlled rollout)** | Phased deployment to a small subset of production assets. | P1 emergency deployments with monitoring |

### 9.3 Testing Procedure

**Step 1 — Environment Preparation**
- Verify that the test environment reflects the current production configuration and software versions.
- Take a snapshot or backup of the test environment prior to patch application.
- Document the pre-patch state: software version, configuration baseline, and open service ports.

**Step 2 — Patch Application in Test**
- Apply the patch following the vendor's installation instructions.
- Record any installation errors, warnings, or required reboots.
- Document the post-patch software version to confirm successful application.

**Step 3 — Functional Testing**
- Execute the applicable test cases from the **[Test Case Repository / Test Management Tool]**.
- Conduct regression testing on business-critical application functions.
- Validate integration points with upstream and downstream systems.
- Perform performance benchmarking if the patch modifies system-level components.

**Step 4 — Security Validation**
- Run a targeted vulnerability scan post-patch to confirm the vulnerability is remediated.
- Confirm no new vulnerabilities have been introduced by the patch.
- Validate that security configuration baselines remain intact.

**Step 5 — Rollback Test**
- Simulate a rollback using the documented rollback procedure (Section 11).
- Confirm the system returns to the pre-patch state without data loss or service disruption.
- Document rollback test results.

**Step 6 — Test Sign-Off**
- The QA Lead reviews and signs off on the test results.
- A **Test Completion Report** is prepared and attached to the change record.
- Patches that fail testing are returned to evaluation; the test failure is documented with root cause analysis.

### 9.4 Testing SLAs

| Criticality Tier | Maximum Testing Duration |
|---|---|
| P1 — Critical | **4 hours** (abbreviated testing protocol); emergency CAB post-deployment review |
| P2 — High | **2 business days** |
| P3 — Medium | **5 business days** |
| P4 — Low | **10 business days** |

### 9.5 Test Completion Report

*The Test Completion Report must be completed for all P1 and P2 patches. P3 and P4 patches may use a simplified sign-off.*

| Field | Details |
|---|---|
| Patch ID | [Patch ID] |
| CVE / Advisory | [CVE Reference] |
| Test Environment | [Environment Name] |
| Test Start Date | [Date] |
| Test Completion Date | [Date] |
| Test Lead | [Name] |
| Functional Test Result | Pass / Fail / Partial |
| Security Validation Result | Pass / Fail |
| Rollback Test Result | Pass / Fail |
| Issues Identified | [Description or "None"] |
| Recommendation | Proceed to Deployment / Return to Evaluation |
| QA Lead Sign-Off | [Name / Date] |

---

## 10. Patch Deployment and Change Management

*Define how approved patches are deployed into production, covering scheduling, change management integration, and deployment verification.*

### 10.1 Change Management Integration

All patch deployments to production systems are subject to [Organization Name]'s **Change Management Policy** and must be raised as formal change requests in the **[ITSM Platform]**.

| Patch Tier | Change Type | Approval Requirement |
|---|---|---|
| P1 — Critical | **Emergency Change** | Emergency CAB approval (verbal/email approval permissible; formal documentation within 24 hours) |
| P2 — High | **Normal Change (Expedited)** | Standard CAB approval; expedited review within [X] business days |
| P3 — Medium | **Normal Change** | Standard CAB approval at next scheduled CAB meeting |
| P4 — Low | **Standard Change** | Pre-approved standard change template; CAB notification only |

### 10.2 Patch Windows

*Define the scheduled maintenance windows during which patches are deployed to minimize business disruption.*

[Organization Name] maintains defined patch windows to balance security SLAs with business continuity requirements:

| Environment | Patch Window | Frequency | Notes |
|---|---|---|---|
| **Production — Non-Critical Systems** | [Day, e.g., Sunday] [Time, e.g., 02:00–06:00 MYT] | Monthly | Standard patch cycle |
| **Production — Critical Systems** | [Day, e.g., Saturday] [Time, e.g., 00:00–04:00 MYT] | Monthly | Requires extended downtime notification |
| **Internet-Facing Systems** | [Day] [Time] | Monthly (minimum) | Coordinated with Security Operations |
| **Emergency (P1)** | As required | As required | Any time; business impact assessment required |
| **DR Environment** | Within 48 hours of Production | Following Production patch cycle | Synchronized with Production |

> Business units must be notified of scheduled patch windows at least **[X] business days** in advance. Notification must be issued via **[Communication Channel, e.g., email, IT service portal]**.

### 10.3 Deployment Procedure

**Step 1 — Pre-Deployment Preparation**
- Confirm change record is approved and deployment window is confirmed.
- Notify affected business units and stakeholders per the communication plan.
- Create a full backup or snapshot of the target system.
- Confirm rollback procedure and rollback point are in place.
- Ensure monitoring is active and alerting thresholds are appropriate.

**Step 2 — Patch Deployment**
- Deploy the patch following the approved deployment runbook.
- Document the exact start time, commands executed, and any observed events.
- Record the post-installation version to confirm patch application.
- Conduct immediate post-deployment health checks (service availability, error logs).

**Step 3 — Post-Deployment Verification**
- Execute post-deployment test cases defined in the change record.
- Run a targeted vulnerability scan to confirm remediation.
- Monitor system logs and performance metrics for **[minimum observation period, e.g., 24–48 hours]** post-deployment.
- Verify dependent systems and integrations are functioning normally.

**Step 4 — Change Closure**
- Record deployment outcome (Success / Partial / Failed) in the change record.
- Update the Patch Register status to "Deployed" or "Failed".
- Update the IT Asset Register with new software version information.
- Close the change record upon confirmation of successful deployment and stability.

### 10.4 Phased Deployment for High-Risk Patches

For patches affecting a large number of systems or critical infrastructure, a **phased rollout** approach must be used:

| Phase | Target | Approval Gate |
|---|---|---|
| **Phase 1 — Pilot** | 5–10% of affected systems (non-critical) | QA Lead sign-off on Phase 1 results |
| **Phase 2 — Limited Rollout** | 25–50% of affected systems | QA Lead + System Owner sign-off |
| **Phase 3 — Full Deployment** | Remaining 100% of affected systems | CAB confirmation |

---

## 11. Rollback Procedures

*Rollback capability is a mandatory control. This section must define a clear, tested procedure for reverting a failed patch deployment.*

### 11.1 Rollback Decision Criteria

A rollback must be initiated if any of the following conditions are observed following patch deployment:

- Application or system service failure or significant performance degradation.
- Critical business functions are unavailable or impaired.
- Data corruption or integrity issues are detected.
- Integration failures with upstream or downstream systems.
- Security regression — new vulnerabilities introduced by the patch.
- Deployment error that cannot be resolved within the defined **Maximum Tolerable Downtime (MTD)** for the affected system.

### 11.2 Rollback Authorization

| Scenario | Rollback Authorization |
|---|---|
| **Within patch window, system unavailable** | Deploying engineer may initiate rollback immediately; notify QA Lead. |
| **Outside patch window, critical system impaired** | QA Lead or on-call IT Manager authorization required. |
| **Extended outage, major incident declared** | Incident Commander authorization; Incident Response Policy governs. |

### 11.3 Rollback Procedure

**Step 1 — Rollback Decision and Notification**
- Document the trigger condition and time of rollback decision.
- Notify QA Lead, System Owner, and Change Manager.
- Raise a major incident if business impact warrants (per Incident Response Policy).

**Step 2 — System Restoration**
- Execute the pre-approved rollback plan documented in the change record.
- Restore from pre-deployment backup or snapshot, or uninstall the patch per vendor instructions.
- Confirm system is restored to pre-patch version.

**Step 3 — Post-Rollback Verification**
- Verify all services and business functions are restored to normal operation.
- Confirm no data loss has occurred.
- Run health checks and notify stakeholders of service restoration.

**Step 4 — Root Cause Analysis and Documentation**
- Complete a **Post-Implementation Review (PIR)** within **[X] business days** of rollback.
- Document root cause, contributing factors, and corrective actions.
- Update the patch register with rollback outcome and lessons learned.
- Determine revised approach for the failed patch; escalate to the vendor if required.

### 11.4 Rollback Requirements by Asset Type

| Asset Type | Rollback Method | Rollback Time Objective |
|---|---|---|
| **Virtual Machines** | VM snapshot restore | [e.g., < 2 hours] |
| **Physical Servers** | Backup restore / uninstall procedure | [e.g., < 4 hours] |
| **Databases** | Pre-patch database backup restore | [e.g., < 4 hours] |
| **Network Devices** | Configuration rollback / firmware downgrade | [e.g., < 2 hours] |
| **End-User Devices** | System image restore / patch uninstall | [e.g., < 24 hours] |
| **Applications** | Application backup restore / version rollback | [e.g., < 4 hours] |

---

## 12. Exceptions and Risk Acceptance

*Define the process for managing situations where patches cannot be deployed within the required SLA. All exceptions must be formally documented and approved.*

### 12.1 Exception Grounds

An exception to this policy's patching SLAs may be considered only where:

1. **Technical Incompatibility** — The patch is incompatible with a critical dependent system or application, and remediation requires vendor support or significant redevelopment.
2. **Vendor Withdrawal / Delayed Patch** — The vendor has not yet released a patch for a known vulnerability (zero-day scenario).
3. **Business Continuity Risk** — Applying the patch within the SLA would cause unacceptable disruption to critical business services, and no alternative maintenance window is available within the period.
4. **EOL Technology** — The affected system is in an approved EOL transition plan (see Section 13) and a compensating control is in place.

### 12.2 Exception Request and Approval

*All exceptions must be formally documented. No verbal or undocumented exceptions are permitted.*

| Step | Action | Owner |
|---|---|---|
| **1. Request Submission** | System Owner submits exception request to QA Lead using the Exception Request Form (Appendix B). | System Owner |
| **2. Risk Assessment** | QA Lead and Security team assess the residual risk of the exception. Compensating controls are identified. | QA Lead / Security Team |
| **3. Approval** | Exception approval authority is determined by the criticality tier of the unpatched vulnerability. | See table below |
| **4. Compensating Controls** | Approved compensating controls are implemented and documented before the exception is granted. | System Owner / IT Operations |
| **5. Review and Closure** | Exception is reviewed at each defined review interval and closed upon patch deployment or system decommission. | QA Lead |

### 12.3 Exception Approval Authority

| Patch Tier | Exception Approval Authority | Maximum Exception Period |
|---|---|---|
| P1 — Critical | **CISO + CIO joint approval** | 30 days (renewable with Board Risk Committee notification) |
| P2 — High | **CISO approval** | 60 days (renewable with CIO approval) |
| P3 — Medium | **QA Lead + IT Manager approval** | 90 days |
| P4 — Low | **QA Lead approval** | 180 days |

### 12.4 Compensating Controls

When an exception is approved, compensating controls must be implemented immediately to reduce the residual risk. Appropriate compensating controls include, but are not limited to:

- **Network segmentation or isolation** of the affected asset.
- **Enhanced monitoring and alerting** for indicators of exploitation.
- **Web Application Firewall (WAF) rules** targeting the specific vulnerability.
- **Disabling of the vulnerable service or feature** if not operationally required.
- **Increased frequency of vulnerability scanning** on the affected asset.
- **Endpoint Detection and Response (EDR) rule tuning** for known exploit signatures.
- **Temporary access restrictions** to reduce the attack surface.

### 12.5 Exception Register

All approved exceptions are recorded in the **Exception Register**, which forms part of the Patch Register. The Exception Register is reviewed monthly by the QA Lead and presented to the **[Risk Committee / IT Security Committee]** quarterly.

---

## 13. End-of-Life Technology Register

*Managing EOL technology is a specific requirement under RMiT. This section defines how [Organization Name] identifies, manages, and remediates EOL technology risk.*

### 13.1 Definition and Risk

**End-of-Life (EOL)** technology refers to any hardware, software, operating system, or firmware component for which the vendor has ceased to provide:

- Security patches and vulnerability updates.
- Technical support and bug fixes.
- Compliance with current security standards.

EOL technology poses significant risk to [Organization Name] as vulnerabilities cannot be remediated through patching, and continued use may violate regulatory requirements under BNM RMiT.

### 13.2 EOL Technology Register

The QA Lead maintains an **EOL Technology Register** tracking all technology components approaching or past their End-of-Life date. The register must be reviewed quarterly and updated continuously as vendor EOL announcements are made.

| Register ID | Asset / Component | Version | Vendor EOL Date | Current Status | Risk Rating | Compensating Controls | Remediation Plan | Target Remediation Date | Owner |
|---|---|---|---|---|---|---|---|---|---|
| EOL-001 | [OS / Application Name] | [Version] | [EOL Date] | In Use / Transitioning / Decommissioned | Critical / High / Medium / Low | [Description] | [Upgrade / Migrate / Decommission] | [Target Date] | [System Owner] |
| EOL-002 | [OS / Application Name] | [Version] | [EOL Date] | In Use / Transitioning / Decommissioned | Critical / High / Medium / Low | [Description] | [Upgrade / Migrate / Decommission] | [Target Date] | [System Owner] |

### 13.3 EOL Management Process

**Proactive Identification (Pre-EOL)**
- System Owners are responsible for monitoring vendor lifecycle announcements for their systems.
- The QA Lead maintains subscriptions to vendor lifecycle information portals and End-of-Support notification services.
- Assets reaching EOL within **12 months** must be flagged in the EOL register with an approved remediation plan.

**Remediation Options**
Remediation options for EOL technology, in order of preference:

1. **Upgrade** to a supported version of the same product.
2. **Migration** to an alternative supported product providing equivalent functionality.
3. **Decommission** the asset if no longer operationally required.
4. **Extended Support Agreement** — Where the vendor offers paid extended support, this may be approved as a time-limited interim measure pending full remediation.

**Risk Acceptance for EOL Technology**
- EOL technology without an approved remediation plan must be treated as a **P1 risk** requiring CISO and CIO joint approval for continued use.
- All EOL technology in production must have documented compensating controls regardless of remediation plan status.
- Continued use of EOL technology beyond **[Organization Name]'s defined tolerance period of [X] months]** post-EOL date requires escalation to the **Board Risk Committee**.

### 13.4 EOL Reporting

The EOL Technology Register is reported to the **[IT Security Committee / Risk Committee]** on a **quarterly** basis, including:

- Count of assets currently in EOL status.
- Count of assets approaching EOL within 12 months.
- Status of remediation plans.
- Compensating controls in place.
- Exception approvals granted.

---

## 14. Roles and Responsibilities

*This section defines the roles involved in the patch management process and their responsibilities. The RACI matrix provides clarity for audit and operational purposes.*

### 14.1 Role Definitions

| Role | Description |
|---|---|
| **QA Lead** | Primary owner of the Patch Management Policy and process. Responsible for policy governance, SLA tracking, exception management, and reporting. |
| **CISO (Chief Information Security Officer)** | Executive accountability for information security risk, including patching. Approves high-risk exceptions; escalates material risk to Board. |
| **CIO (Chief Information Officer)** | Executive accountability for technology operations. Joint approval authority for P1 exceptions. |
| **System Owner** | Individual responsible for a specific technology asset or application. Accountable for ensuring patches are applied to their systems within SLA. |
| **IT Operations Team** | Technical team responsible for patch deployment, infrastructure maintenance, and rollback execution. |
| **Security Operations Centre (SOC)** | Monitors threat intelligence feeds, vulnerability scanning results, and post-deployment anomaly detection. |
| **Vulnerability Management Team** | Responsible for vulnerability scanning, patch identification, CVSS scoring, and patch register maintenance. |
| **Change Manager** | Manages the change management lifecycle for patch deployments; chairs or coordinates CAB reviews. |
| **Change Advisory Board (CAB)** | Reviews and approves patch-related change requests. Includes IT, Security, Business, and Risk representation. |
| **Business Unit Heads** | Consulted on patch scheduling to avoid business-critical periods; receive notification of planned patch windows. |
| **Third-Party / Managed Service Providers** | Responsible for patching managed assets per contractual SLAs; provide patch status reports to [Organization Name]. |
| **Internal Audit** | Independent review of patch management compliance; reports findings to Audit Committee. |

### 14.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | QA Lead | CISO | CIO | System Owner | IT Operations | SOC | Vuln. Mgmt | Change Manager | CAB | Business Units | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Policy ownership and maintenance | A/R | C | C | I | I | I | I | I | I | I | I |
| Asset inventory maintenance | C | I | I | R | R | I | C | I | I | I | I |
| Vulnerability scanning | C | I | I | I | C | C | A/R | I | I | I | I |
| Patch identification and classification | A/R | C | I | C | C | C | R | I | I | I | I |
| Risk assessment and prioritization | A/R | C | I | C | I | C | R | I | I | I | I |
| Patch testing | A/R | I | I | C | R | C | C | I | I | C | I |
| Change request submission | C | I | I | C | R | I | I | A/R | I | I | I |
| Change approval (P3/P4) | C | I | I | C | I | I | I | R | A | I | I |
| Change approval (P2 expedited) | C | R | C | C | I | I | I | R | A | I | I |
| Change approval (P1 emergency) | C | A/R | R | C | I | I | I | R | C | I | I |
| Patch deployment | C | I | I | R | A/R | C | I | C | I | I | I |
| Post-deployment verification | A/R | I | I | R | R | R | C | C | I | I | I |
| Rollback execution | A/R | I | I | R | R | C | I | C | I | I | I |
| SLA monitoring and reporting | A/R | C | I | C | I | C | R | I | I | I | I |
| Exception request submission | I | I | I | A/R | C | I | C | I | I | I | I |
| Exception approval (P1) | C | A/R | A/R | I | I | I | C | I | I | I | I |
| Exception approval (P2) | C | A/R | C | I | I | I | C | I | I | I | I |
| Exception approval (P3/P4) | A/R | C | I | I | I | I | I | I | I | I | I |
| EOL register maintenance | A/R | C | I | R | C | I | C | I | I | I | I |
| Regulatory reporting | C | A/R | C | I | I | I | C | I | I | I | I |
| Internal audit of patch compliance | I | I | I | I | I | I | I | I | I | I | A/R |
| Policy annual review | A/R | C | C | C | C | C | C | C | I | C | C |

---

## 15. Monitoring, Reporting, and Metrics

*Define how patch management effectiveness is measured, reported, and used to drive continuous improvement.*

### 15.1 Key Performance Indicators (KPIs)

The following KPIs are used to monitor the effectiveness of the patch management program. Results are reported to the **[IT Security Committee]** on a monthly basis and to the **[Risk Committee / Board]** on a quarterly basis.

| KPI | Definition | Target | Reporting Frequency |
|---|---|---|---|
| **P1 Patch SLA Compliance Rate** | Percentage of P1 patches deployed within 72-hour SLA. | **100%** | Monthly |
| **P2 Patch SLA Compliance Rate** | Percentage of P2 patches deployed within 7-day SLA. | **≥ 95%** | Monthly |
| **P3 Patch SLA Compliance Rate** | Percentage of P3 patches deployed within 30-day SLA. | **≥ 90%** | Monthly |
| **P4 Patch SLA Compliance Rate** | Percentage of P4 patches deployed within 90-day SLA. | **≥ 90%** | Monthly |
| **Open Critical Vulnerabilities** | Total count of P1/P2 vulnerabilities currently unpatched and outside SLA. | **0** | Weekly |
| **Mean Time to Patch (MTTP)** | Average time from patch discovery to successful production deployment, by criticality tier. | Trending downward | Monthly |
| **Patch Exception Count** | Number of active exceptions by criticality tier. | Trending downward | Monthly |
| **EOL Asset Count** | Number of in-production assets with no vendor support. | **0 (or time-bound plan in place)** | Quarterly |
| **Rollback Rate** | Percentage of patch deployments requiring rollback. | **< 2%** | Monthly |
| **Patch Coverage Rate** | Percentage of in-scope assets covered by the most recent vulnerability scan. | **≥ 98%** | Monthly |
| **Failed Patch Deployments** | Count of patch deployments that failed and required re-scheduling. | Trending toward zero | Monthly |

### 15.2 Reporting Structure

| Report | Audience | Frequency | Owner |
|---|---|---|---|
| **Patch Management Dashboard** | QA Lead, IT Operations, Security Team | Weekly | Vulnerability Management Team |
| **Monthly Patch Compliance Report** | IT Security Committee, CISO, CIO | Monthly | QA Lead |
| **Quarterly Vulnerability Posture Report** | Risk Committee, Audit Committee | Quarterly | CISO |
| **Annual Patch Management Review** | Board Risk Committee, Internal Audit | Annual | CISO / QA Lead |
| **BNM Supervisory Reporting** | BNM (as required) | Per regulatory requirement | CISO |

### 15.3 Continuous Improvement

Findings from the following activities must feed into continuous improvement of the patch management process:

- Internal audit reviews and findings.
- Post-Implementation Reviews (PIR) following P1 and P2 deployments.
- Root cause analysis of SLA breaches and rollbacks.
- Industry threat intelligence on emerging vulnerability trends.
- Regulatory guidance updates from BNM, NACSA, and other applicable bodies.
- Annual policy review outcomes.

---

## 16. Review and Approval

### 16.1 Policy Review Cycle

This policy is reviewed on an **annual** basis, or earlier if triggered by:

- A material change in [Organization Name]'s technology environment.
- A significant security incident related to unpatched vulnerabilities.
- Updates to BNM RMiT or other applicable regulatory requirements.
- Recommendations from Internal Audit or an external assessor.
- Significant changes to [Organization Name]'s risk appetite or IT strategy.

### 16.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial policy release. |
| [1.1] | [Date] | [Author Name] | [Description of changes made] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 16.3 Approval and Sign-Off

*This policy requires approval from the following roles before it becomes effective. The signed approval record must be retained as audit evidence.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **QA Lead (Policy Owner)** | [Name] | [Signature] | [Date] |
| **CISO** | [Name] | [Signature] | [Date] |
| **CIO** | [Name] | [Signature] | [Date] |
| **Head of Risk Management** | [Name] | [Signature] | [Date] |
| **Chief Executive Officer (if required by governance framework)** | [Name] | [Signature] | [Date] |

---

## 17. References

*List all regulatory documents, standards, and internal policies referenced in this document. This section must be maintained to reflect the current version of each reference.*

### 17.1 Regulatory References

| Reference | Issuing Body | Version / Date | Relevant Section |
|---|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia | [Version / Effective Date] | Clause 10.17 — Patch Management; Clause 10.1–10.5 — Technology Risk Management; Clause 11 — Cyber Risk |
| Personal Data Protection Act 2010 (PDPA) | Parliament of Malaysia | 2010 (as amended) | Section 9 — Security Principle |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Version / Effective Date] | [Applicable sections] |
| National Cyber Security Policy | NACSA / Ministry of Digital | [Version / Effective Date] | [Applicable sections] |
| Financial Services Act 2013 | Parliament of Malaysia | 2013 | Section 47, Section 58 |
| Islamic Financial Services Act 2013 | Parliament of Malaysia | 2013 | [Applicable sections] |

### 17.2 Standards References

| Standard | Issuing Body | Version | Relevant Section |
|---|---|---|---|
| ISO/IEC 27001:2022 | ISO / IEC | 2022 | Annex A 8.8 — Management of Technical Vulnerabilities |
| ISO/IEC 27002:2022 | ISO / IEC | 2022 | Control 8.8 — Management of Technical Vulnerabilities |
| NIST SP 800-40 Rev. 4 | NIST | Rev. 4 | Guide to Enterprise Patch Management Planning |
| NIST SP 800-53 Rev. 5 | NIST | Rev. 5 | SI-2 — Flaw Remediation |
| CIS Controls v8 | Center for Internet Security | v8 | Control 7 — Continuous Vulnerability Management |
| PCI DSS v4.0 | PCI Security Standards Council | v4.0 | Requirement 6 — Develop and Maintain Secure Systems |

### 17.3 Internal References

| Document | Owner | Location |
|---|---|---|
| Information Security Policy | CISO | [Document Repository Path] |
| Change Management Policy | Change Manager | [Document Repository Path] |
| Vulnerability Management Policy | QA Lead | [Document Repository Path] |
| IT Asset Management Policy | IT Manager | [Document Repository Path] |
| Incident Response Policy | CISO | [Document Repository Path] |
| Business Continuity Plan | BCM Manager | [Document Repository Path] |
| Third-Party Risk Management Policy | Risk Manager | [Document Repository Path] |

---

## 18. Appendices

### Appendix A — Patch Management Process Flowchart

*Insert or attach a visual process flowchart depicting the end-to-end patch management lifecycle from identification through closure. The flowchart should include decision points for criticality classification, exception handling, and rollback triggers.*

**[Attach Flowchart — Patch Management Lifecycle]**

Key decision points to illustrate:
- Patch identified → Applicable to environment? (Yes/No)
- Applicable → Classify criticality tier (P1/P2/P3/P4)
- P1? → Emergency CAB → Deploy within 72 hours → Post-deployment verification
- P2/P3/P4 → Standard testing → CAB approval → Deploy within SLA
- Deployment successful? → Yes: Close; No: Initiate rollback → Root cause analysis

---

### Appendix B — Patch Exception Request Form

*This form must be completed by the System Owner and submitted to the QA Lead for all requests to extend patching SLAs.*

---

**PATCH MANAGEMENT EXCEPTION REQUEST**

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-generated / Sequential] |
| **Date of Request** | [Date] |
| **Requesting System Owner** | [Name and Title] |
| **Business Unit** | [Business Unit] |
| **Affected Asset(s)** | [Asset Name / ID] |
| **CVE / Patch Reference** | [CVE or Advisory Number] |
| **Patch Criticality Tier** | P1 / P2 / P3 / P4 |
| **Original SLA Due Date** | [Date] |
| **Reason for Exception** | [Technical incompatibility / Business continuity / Vendor delay / EOL system] |
| **Detailed Justification** | [Description — minimum 3 sentences explaining why the patch cannot be applied within SLA] |
| **Proposed Compensating Controls** | [List all compensating controls to be implemented] |
| **Compensating Controls Implementation Date** | [Date] |
| **Proposed Extended Remediation Date** | [Date] |
| **Risk Acceptance Statement** | I acknowledge that by requesting this exception, [Organization Name] accepts residual risk of exploitation. I confirm that compensating controls will be implemented as described. |
| **System Owner Signature** | [Name / Date] |
| **QA Lead Review** | Approved / Rejected — [Name / Date] |
| **CISO Approval (P1/P2)** | Approved / Rejected — [Name / Date] |
| **CIO Approval (P1)** | Approved / Rejected — [Name / Date] |

---

### Appendix C — Patch Deployment Runbook Template

*Each patch deployment to production must be supported by a runbook. This template is used as the basis for all deployment runbooks.*

---

**PATCH DEPLOYMENT RUNBOOK**

| Field | Details |
|---|---|
| **Runbook ID** | [ID] |
| **Patch ID / Change Reference** | [Patch ID / Change Record Number] |
| **CVE / Advisory** | [Reference] |
| **Target System(s)** | [System Name and IP/Hostname] |
| **Patch Criticality** | P1 / P2 / P3 / P4 |
| **Deployment Date** | [Date] |
| **Deployment Window** | [Start Time] – [End Time] MYT |
| **Deploying Engineer** | [Name] |
| **QA Lead Oversight** | [Name] |

**Pre-Deployment Checklist**

- [ ] Change record approved in [ITSM Platform]
- [ ] Stakeholder notification sent [Date/Time]
- [ ] System backup / snapshot completed [Date/Time / Snapshot ID]
- [ ] Test environment validation completed and signed off
- [ ] Rollback procedure reviewed and ready
- [ ] Monitoring alerts configured
- [ ] Support team on standby (if required for P1/P2)

**Deployment Steps**

| Step | Action | Expected Output | Completed (Y/N) | Notes |
|---|---|---|---|---|
| 1 | [e.g., Log in to target server via [method]] | [Successful authentication] | | |
| 2 | [e.g., Download patch from [approved source]] | [Patch file downloaded and checksum verified] | | |
| 3 | [e.g., Execute patch installation command] | [Installation completes without error] | | |
| 4 | [e.g., Reboot system if required] | [System restarts and services resume] | | |
| 5 | [e.g., Verify installed version] | [Version reflects patched state] | | |
| 6 | [e.g., Run post-deployment test cases] | [All tests pass] | | |
| 7 | [e.g., Run targeted vulnerability scan] | [Vulnerability no longer detected] | | |

**Rollback Procedure**

| Step | Action | Expected Output |
|---|---|---|
| 1 | [e.g., Halt application services] | [Services stopped] |
| 2 | [e.g., Restore from pre-deployment snapshot] | [System restored to pre-patch state] |
| 3 | [e.g., Verify pre-patch version] | [Version reflects pre-patch state] |
| 4 | [e.g., Restart services and verify functionality] | [Services operational] |
| 5 | [e.g., Notify QA Lead and Change Manager] | [Notifications sent] |

**Deployment Outcome**

| Field | Details |
|---|---|
| **Deployment Result** | Success / Partial / Failed / Rolled Back |
| **Completion Time** | [Time] MYT |
| **Post-Deployment Version** | [Version] |
| **Issues Encountered** | [Description or "None"] |
| **Deploying Engineer Sign-Off** | [Name / Date] |
| **QA Lead Sign-Off** | [Name / Date] |

---

### Appendix D — Patch Management SLA Quick Reference Card

*Summary reference for operations teams.*

| Criticality | CVSS Range | Discovery SLA | Deployment SLA | Change Type | Testing Required |
|---|---|---|---|---|---|
| **P1 — Critical** | 9.0–10.0 | 4 hours | **72 hours** | Emergency Change | Abbreviated (≤ 4 hrs) |
| **P2 — High** | 7.0–8.9 | 24 hours | **7 days** | Expedited Normal Change | Standard (≤ 2 days) |
| **P3 — Medium** | 4.0–6.9 | 5 business days | **30 days** | Normal Change | Standard (≤ 5 days) |
| **P4 — Low** | 0.1–3.9 | 10 business days | **90 days** | Standard Change | Standard (≤ 10 days) |

---

### Appendix E — EOL Technology Assessment Worksheet

*Completed by System Owners for each technology component entering the 12-month pre-EOL window.*

| Field | Details |
|---|---|
| **Asset / Component Name** | [Name] |
| **Current Version** | [Version] |
| **Vendor** | [Vendor Name] |
| **Vendor EOL Date** | [Date] |
| **Asset Criticality Rating** | Critical / High / Medium / Low |
| **Business Functions Supported** | [Description] |
| **Data Classification of Processed Data** | Confidential / Internal / Public |
| **Current Compensating Controls** | [List controls] |
| **Remediation Option Selected** | Upgrade / Migrate / Decommission / Extended Support |
| **Remediation Plan Summary** | [Description] |
| **Dependencies / Integration Points** | [List dependent systems] |
| **Estimated Remediation Effort** | [Person-days / Project size] |
| **Target Remediation Completion Date** | [Date] |
| **Budget Allocated** | [Yes / No / Pending Approval] |
| **System Owner** | [Name] |
| **Assessment Date** | [Date] |
| **QA Lead Review** | [Name / Date] |

---

### Appendix F — Glossary of Patch Sources and Advisory Portals

*Reference list of approved patch sources and vendor advisory portals for use by IT Operations and Vulnerability Management teams.*

| Vendor / Platform | Advisory Portal | Patch Download Source | Update Mechanism |
|---|---|---|---|
| Microsoft | Microsoft Security Response Center (MSRC) — msrc.microsoft.com | Microsoft Update / WSUS / SCCM | Automatic / WSUS |
| Oracle | Oracle Security Alerts — oracle.com/security-alerts | Oracle Support Portal | Oracle CPU Quarterly |
| Red Hat / CentOS | Red Hat Security Advisories — access.redhat.com | Red Hat Satellite / yum | RHSA subscription |
| Ubuntu / Debian | Ubuntu Security Notices — ubuntu.com/security | apt / Landscape | Unattended-upgrades |
| Cisco | Cisco Security Advisories — tools.cisco.com/security | Cisco.com Software Centre | Cisco PSIRT |
| VMware / Broadcom | VMware Security Advisories — vmware.com/security | VMware Customer Connect | vSphere Update Manager |
| [Application Vendor] | [Advisory Portal URL — to be provided] | [Download Source] | [Method] |
| NIST NVD | nvd.nist.gov | N/A — Reference only | Daily NVD feed |
| CISA KEV | cisa.gov/known-exploited-vulnerabilities-catalog | N/A — Reference only | Daily feed / RSS |

---

*End of Document*

---

**Document Control:** This document is subject to version control. Only the version held in [Organization Name]'s official document management system is authoritative. Printed copies are uncontrolled. Verify the current version before use.

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Title** | Patch Management Policy |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | QA Lead |
| **Next Review Date** | [Next Review Date] |