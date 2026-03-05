# Patch Deployment Timeline Standards

---

| **Field** | **Details** |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of regulatory obligations under the Personal Data Protection Act 2010 (PDPA) and applicable Bank Negara Malaysia (BNM) guidelines.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Roles and Responsibilities](#3-roles-and-responsibilities)
4. [Patch Criticality Classification](#4-patch-criticality-classification)
5. [Patch Deployment Timelines](#5-patch-deployment-timelines)
6. [Patch Management Procedures](#6-patch-management-procedures)
7. [Testing and Validation Procedures](#7-testing-and-validation-procedures)
8. [Rollback Procedures](#8-rollback-procedures)
9. [Exceptions and Risk Acceptance](#9-exceptions-and-risk-acceptance)
10. [EOL Technology Register](#10-eol-technology-register)
11. [Monitoring, Reporting, and Audit](#11-monitoring-reporting-and-audit)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document — why it exists and what problem it solves within the organization's technology risk management framework.*

This document establishes the **Patch Deployment Timeline Standards** for [Organization Name], defining mandatory timelines, processes, and accountabilities for the identification, testing, approval, and deployment of software and firmware patches across the organization's technology environment. These standards are designed to minimize exposure to vulnerabilities arising from unpatched systems and to ensure [Organization Name]'s technology infrastructure remains secure, resilient, and compliant with applicable regulatory obligations.

This document supports [Organization Name]'s obligations under **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 10.18**, which requires financial institutions to establish and maintain documented patch management procedures with defined deployment timelines commensurate with the criticality of identified vulnerabilities.

### 1.2 Scope

*Define which systems, environments, entities, and personnel fall within the scope of this procedure. Be specific about inclusions and exclusions to avoid ambiguity during audits.*

This policy applies to all technology assets owned, operated, leased, or managed by [Organization Name], including but not limited to:

**In Scope:**

- All production, development, test, and staging environments
- On-premises servers, workstations, and endpoint devices
- Network infrastructure including routers, firewalls, switches, and load balancers
- Virtualization platforms and hypervisors
- Cloud-hosted infrastructure and platform services (IaaS/PaaS) under [Organization Name]'s management responsibility
- Operational Technology (OT) and Industrial Control Systems (ICS), where applicable
- Third-party managed systems where contractual patch obligations exist
- Mobile devices enrolled in [Organization Name]'s Mobile Device Management (MDM) platform
- Database management systems and middleware platforms

**Out of Scope:**

- Software-as-a-Service (SaaS) platforms where patching is wholly managed by the vendor (subject to vendor patch management review under the Third-Party Risk Management Policy)
- Personal devices not enrolled in corporate MDM
- [Any other explicitly excluded systems — specify here]

### 1.3 Applicability

This document applies to all employees, contractors, vendors, and third parties who perform technology operations functions on behalf of [Organization Name]. Compliance with this standard is **mandatory** for all in-scope personnel and systems.

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Framework

*Reference the specific regulatory instruments and internal policies that mandate or inform this document. This section grounds the document in its compliance obligations and is critical for audit purposes.*

[Organization Name] operates as a [licensed financial institution / licensed insurer / payment system operator / other regulated entity] under the purview of Bank Negara Malaysia (BNM). This document is issued in response to, and must be read in conjunction with, the following regulatory instruments and internal policies:

| **Reference** | **Instrument** | **Relevant Clause(s)** | **Obligation Summary** |
|---|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Clause 10.18 | Patch management procedures with defined deployment timelines by criticality level |
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Clause 10.1–10.5 | General technology risk management principles |
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Clause 11 | Cyber risk management |
| Act 758 | Personal Data Protection Act 2010 (PDPA) | Section 9 (Security Principle) | Protection of personal data through security safeguards |
| NACSA | National Cyber Security Policy | [Applicable Control Reference] | Critical information infrastructure protection |
| Internal | Information Security Policy | [Internal Reference] | Overarching security governance |
| Internal | Change Management Policy | [Internal Reference] | Change control requirements for patch deployment |
| Internal | IT Risk Management Framework | [Internal Reference] | Risk classification and appetite |

### 2.2 RMiT Clause 10.18 — Key Requirements

*Summarize the specific regulatory requirements this document fulfills. This section should be updated whenever the RMiT policy document is revised by BNM.*

BNM RMiT Clause 10.18 requires financial institutions to implement patch management processes that include, at minimum:

- Defined timelines for deploying patches based on the **criticality and severity** of identified vulnerabilities
- A structured **testing process** prior to production deployment to prevent unintended disruption
- Clear **escalation and exception handling** procedures for cases where patches cannot be deployed within mandated timelines
- Maintenance of an **inventory** of all technology assets and their patch currency status
- **Monitoring and reporting** of patch compliance to senior management and the Board Risk Committee (BRC) as appropriate
- A register and remediation plan for **End-of-Life (EOL)** technology components that no longer receive vendor security updates

### 2.3 Internal Policy Hierarchy

*Describe how this document fits within the organization's broader policy and procedure framework.*

This document operates within the following policy hierarchy:

```
Board-Approved Policies
    └── Information Security Policy
            └── IT Risk Management Framework
                    └── Patch Deployment Timeline Standards [THIS DOCUMENT]
                            └── Patch Management Work Instructions / Runbooks
```

In the event of conflict between this document and a higher-order policy, the higher-order policy shall prevail. Where this document is more specific or restrictive than a higher-order policy, this document applies.

---

## 3. Roles and Responsibilities

### 3.1 Overview

*This section defines accountabilities for all activities related to patch management. Use the RACI matrix to assign clear ownership and prevent gaps in accountability.*

Effective patch management requires coordinated participation across multiple teams. The following roles are defined within this document:

| **Role** | **Position / Function** | **Description** |
|---|---|---|
| **IT Operations Manager** | Document Owner | Accountable for the overall patch management program and this document |
| **System Administrators** | IT Operations | Responsible for executing patch deployment activities |
| **Information Security Officer (ISO)** | Information Security | Responsible for vulnerability intelligence and patch prioritization |
| **Change Advisory Board (CAB)** | IT Governance | Reviews and approves non-emergency patch change requests |
| **Application Owners** | Business / IT | Accountable for business applications within their domain |
| **IT Risk Manager** | Risk Management | Maintains patch exception register and risk acceptance records |
| **Vendor / Third-Party Support** | External | Provides patches and technical support for managed components |
| **Chief Information Officer (CIO)** | Executive | Escalation authority for critical vulnerabilities; reports to EXCO/Board |
| **Internal Audit** | Audit | Independent assurance over patch management compliance |

### 3.2 RACI Matrix

*The RACI matrix defines who is Responsible (R), Accountable (A), Consulted (C), and Informed (I) for each key activity in the patch management lifecycle. Each activity must have exactly one Accountable party.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| **Activity** | **IT Ops Manager** | **System Admins** | **ISO** | **CAB** | **App Owners** | **IT Risk Mgr** | **CIO** | **Internal Audit** |
|---|---|---|---|---|---|---|---|---|
| Vulnerability intelligence monitoring | C | I | R/A | I | I | C | I | I |
| Patch criticality classification | A | C | R | I | C | C | I | I |
| Patch impact assessment | A | R | C | C | R | C | I | I |
| Patch testing (non-production) | A | R | C | I | C | I | I | I |
| Change request submission to CAB | R/A | R | C | I | C | I | I | I |
| CAB review and approval | C | I | C | A/R | C | I | I | I |
| Emergency patch approval | A | R | C | I | C | I | R | I |
| Production patch deployment | A | R | C | I | I | I | I | I |
| Post-deployment validation | A | R | C | I | R | I | I | I |
| Rollback execution | A | R | C | I | C | I | I | I |
| Exception documentation and approval | C | I | C | I | C | R/A | C | I |
| Patch compliance reporting | A | R | R | I | I | C | I | I |
| EOL register maintenance | A | R | C | I | C | C | I | I |
| Annual policy review | R/A | C | C | I | I | C | C | I |
| Audit support and evidence provision | A | R | C | I | C | R | I | R |

### 3.3 Detailed Responsibilities

#### 3.3.1 IT Operations Manager

- Owns and maintains this Patch Deployment Timeline Standards document
- Ensures adequate resources and tooling are available to meet patch deployment timelines
- Chairs the monthly patch management review meeting
- Escalates systemic patching failures or resource constraints to the CIO
- Approves patch exception requests within delegated authority limits
- Reports patch compliance status to senior management quarterly

#### 3.3.2 Information Security Officer (ISO)

- Monitors threat intelligence feeds, vendor advisories, and vulnerability databases (e.g., NVD, CISA KEV) for newly disclosed vulnerabilities
- Performs initial classification of vulnerabilities using the criteria defined in Section 4
- Issues Vulnerability Advisories to IT Operations for action
- Validates that patch deployment meets regulatory timelines
- Escalates zero-day or actively exploited vulnerabilities immediately

#### 3.3.3 System Administrators

- Execute patch deployment activities in accordance with approved change requests and defined timelines
- Maintain system patch currency records in the asset management tool
- Conduct pre- and post-deployment testing per defined runbooks
- Execute rollback procedures when required
- Report deployment outcomes to IT Operations Manager

#### 3.3.4 Change Advisory Board (CAB)

- Reviews and approves standard and major patch change requests
- Assesses deployment risk, scheduling conflicts, and business impact
- Maintains records of all approved and rejected change requests
- Convenes emergency CAB meetings for Critical/P1 patch situations as required

#### 3.3.5 Application Owners

- Participate in impact assessment for patches affecting their applications
- Coordinate user acceptance testing (UAT) where applicable
- Provide sign-off for post-deployment validation of business-critical applications
- Notify IT Operations of blackout periods and business-critical windows

---

## 4. Patch Criticality Classification

### 4.1 Classification Framework

*This section defines how vulnerabilities and patches are classified by severity. The classification directly drives the deployment timelines mandated in Section 5. Classifications should align with industry-standard scoring systems and BNM risk appetite.*

[Organization Name] adopts a **four-tier criticality classification** for vulnerabilities and their associated patches. Classification is performed by the Information Security Officer (ISO) in consultation with IT Operations, using the Common Vulnerability Scoring System (CVSS v3.1) as the primary input, supplemented by contextual threat intelligence.

### 4.2 Criticality Classification Criteria

| **Severity Level** | **Label** | **CVSS v3.1 Score** | **Contextual Triggers** | **Example Scenarios** |
|---|---|---|---|---|
| **Level 1** | Critical | 9.0 – 10.0 | Active exploitation in the wild; publicly available exploit code; affects core financial systems or customer data; designated by CISA KEV | Zero-day RCE on internet-facing systems; ransomware vulnerability actively exploited in financial sector |
| **Level 2** | High | 7.0 – 8.9 | High likelihood of exploitation; no current active exploitation confirmed; significant data exposure risk | Privilege escalation on production servers; authentication bypass on internal systems |
| **Level 3** | Medium | 4.0 – 6.9 | Moderate risk; requires user interaction or specific conditions for exploitation | Cross-site scripting (XSS) on internal applications; local privilege escalation |
| **Level 4** | Low | 0.1 – 3.9 | Low exploitability; limited impact; defense-in-depth benefit | Informational disclosure; denial-of-service with minimal business impact |

### 4.3 Contextual Adjustments to CVSS Score

*CVSS scores are a starting point, not a final determination. The ISO must apply contextual factors to adjust the effective severity level.*

The ISO shall apply the following contextual factors to adjust classification upward or downward from the base CVSS score:

**Factors that may increase effective severity:**

- The affected system is internet-facing or customer-accessible
- The vulnerability is listed on the CISA Known Exploited Vulnerabilities (KEV) catalog
- Threat intelligence indicates active targeting of Malaysian financial institutions
- The affected system processes, stores, or transmits sensitive customer or financial data
- Exploitation has been observed in the wild within the past 30 days
- The vulnerability affects a system with no compensating controls

**Factors that may decrease effective severity:**

- Compensating controls (e.g., WAF, network segmentation, MFA) demonstrably reduce exploitability
- The affected system is isolated with no network connectivity to production
- Exploitation requires physical access
- The vulnerability requires highly privileged access already controlled by existing PAM solutions

**Classification Override Authority:**

| **Adjustment** | **Authority** |
|---|---|
| Increase severity by one level | ISO |
| Decrease severity by one level | ISO with IT Operations Manager concurrence |
| Override to Critical regardless of CVSS | ISO with CIO notification |
| Decrease Critical classification | CIO with documented rationale |

### 4.4 Vendor Severity Ratings

Where vendor severity ratings differ from CVSS-derived classifications, the **higher** of the two ratings shall apply unless the ISO documents specific technical justification for applying the lower rating.

---

## 5. Patch Deployment Timelines

### 5.1 Mandatory Deployment Timeline Standards

*This is the core regulatory compliance section. Timelines must be defined, documented, and consistently enforced. BNM RMiT Clause 10.18 requires timelines to be commensurate with the criticality of vulnerabilities.*

The following mandatory deployment timelines apply to all in-scope systems and assets from the date of **patch availability** (i.e., the date on which a vendor-issued patch or mitigation is publicly available):

| **Severity Level** | **Label** | **Maximum Deployment Timeline** | **CAB Approval Required** | **Emergency CAB Applicable** |
|---|---|---|---|---|
| **Level 1** | Critical | **24 hours** (internet-facing systems) / **72 hours** (internal systems) | Emergency CAB or CIO approval | Yes |
| **Level 2** | High | **14 calendar days** | Yes (standard or emergency) | Where required |
| **Level 3** | Medium | **30 calendar days** | Yes (standard CAB cycle) | No |
| **Level 4** | Low | **90 calendar days** | Yes (standard CAB cycle or batch approval) | No |

> **Note:** For **Critical (Level 1)** vulnerabilities where no vendor patch is yet available, compensating controls (e.g., WAF rule updates, network ACL changes, service disablement) must be implemented within **24 hours** of vulnerability identification, and the situation must be escalated to the CIO immediately.

### 5.2 System Tier Classification

*Different systems carry different risk profiles. Deployment timelines for critical systems should be front-loaded. Define your system tiers here.*

To ensure priority deployment to the highest-risk systems, [Organization Name] classifies its technology environment into system tiers:

| **Tier** | **Description** | **Examples** | **Patching Priority** |
|---|---|---|---|
| **Tier 1 — Critical** | Systems directly supporting financial transactions, customer data, or regulatory reporting | Core banking system, payment gateways, customer portals, SWIFT infrastructure | Highest — patch first within any severity window |
| **Tier 2 — Important** | Systems supporting operational continuity but not directly customer-facing | Internal HR systems, ERP, email infrastructure, VPN gateways | Second priority |
| **Tier 3 — Standard** | General-purpose business systems | Internal collaboration tools, developer workstations, non-critical servers | Third priority |
| **Tier 4 — Non-Critical** | Systems with minimal business impact; isolated or decommission-pending | Test environments, archived systems | Lowest priority; may be patched within batch cycles |

### 5.3 Consolidated Deployment Timeline Matrix

| **Severity** | **Tier 1 (Critical Systems)** | **Tier 2 (Important Systems)** | **Tier 3 (Standard Systems)** | **Tier 4 (Non-Critical)** |
|---|---|---|---|---|
| **Critical (L1)** | 24 hours | 48 hours | 72 hours | 7 calendar days |
| **High (L2)** | 7 calendar days | 10 calendar days | 14 calendar days | 21 calendar days |
| **Medium (L3)** | 14 calendar days | 21 calendar days | 30 calendar days | 45 calendar days |
| **Low (L4)** | 30 calendar days | 60 calendar days | 90 calendar days | 90 calendar days |

### 5.4 Patch Deployment Freeze Periods

*Define periods during which normal patch deployments are restricted to protect business-critical operations. Critical security patches are typically exempt from freeze periods.*

The following deployment freeze periods apply, during which **standard patch deployments are suspended**. Critical (Level 1) and High (Level 2) patches remain deployable during freeze periods subject to CIO approval:

| **Period** | **Duration** | **Applicable Patch Levels** | **Exemptions** |
|---|---|---|---|
| Year-end financial close | [Specify dates, e.g., 20 Dec – 5 Jan] | Low and Medium suspended | Critical and High remain deployable |
| Core banking system upgrade windows | [Specify dates as declared by IT] | All standard patches suspended | Critical patches deployable with EXCO approval |
| Bank holidays and long weekends | As declared | Routine patches suspended | Critical patches deployable with on-call approvals |
| [Other business-critical periods] | [Specify] | [Specify] | [Specify] |

> **Regulatory Note:** Deployment freeze periods do not extend the regulatory compliance timelines for Critical and High severity patches. If a freeze period causes a timeline breach, this must be documented as an exception per Section 9.

---

## 6. Patch Management Procedures

### 6.1 Patch Management Lifecycle

*This section describes the end-to-end process for managing patches from identification through to post-deployment validation and closure. Each stage should be operationalized through detailed work instructions or runbooks referenced in the Appendices.*

The patch management lifecycle consists of the following stages:

```
[1] Identify → [2] Classify → [3] Assess → [4] Test → [5] Approve → [6] Deploy → [7] Validate → [8] Close
```

### 6.2 Stage 1 — Patch Identification and Discovery

*Define all the sources through which [Organization Name] identifies new vulnerabilities and patches. Relying on a single source is inadequate for regulatory compliance.*

[Organization Name] employs the following sources and mechanisms for identifying new vulnerabilities and available patches:

**Automated Discovery:**

- Vulnerability scanning tools (e.g., [Tool Name]) are run on a **[weekly/daily]** schedule across all in-scope systems
- Authenticated scans are used for servers and network infrastructure
- Endpoint agents provide continuous vulnerability telemetry for workstations

**Vendor and Intelligence Feeds:**

| **Source** | **Type** | **Frequency Monitored** | **Responsible Party** |
|---|---|---|---|
| Microsoft Patch Tuesday | Vendor Advisory | Monthly (2nd Tuesday) | ISO |
| CISA Known Exploited Vulnerabilities (KEV) | Threat Intelligence | Daily | ISO |
| National Vulnerability Database (NVD) | CVE Database | Daily | ISO |
| [Vendor Name] Security Advisories | Vendor Advisory | As published | System Administrators |
| [Vendor Name] Security Advisories | Vendor Advisory | As published | System Administrators |
| MyCERT / CyberSecurity Malaysia Advisories | National CERT | As published | ISO |
| Financial Services ISAC (FS-ISAC) | Sector Intelligence | As published | ISO |
| [Other threat intelligence feeds] | [Type] | [Frequency] | [Owner] |

**Minimum Actions Upon Identification:**

1. Log the vulnerability and patch in the **Patch Management Register** (refer Appendix A)
2. Record the CVE identifier(s), CVSS score, affected systems, and date of identification
3. Trigger classification process per Section 4 within **4 business hours** of identification

### 6.3 Stage 2 — Patch Prioritization and Scheduling

*After classification, patches must be prioritized and scheduled. This section describes how to manage the patch queue effectively.*

Following classification, the ISO shall issue a **Vulnerability Advisory** to IT Operations containing:

- CVE reference(s) and CVSS score
- Assigned severity classification (Level 1–4)
- List of affected systems (derived from asset inventory)
- Recommended patch or compensating control
- **Mandatory deployment deadline** (calculated per Section 5)
- Any vendor-specific deployment guidance or prerequisites

The IT Operations Manager shall assign a **Patch Deployment Owner** (System Administrator) for each vulnerability advisory and confirm scheduling within the following timeframes from receipt of the advisory:

| **Severity** | **Scheduling Confirmation Deadline** |
|---|---|
| Critical (L1) | 2 hours |
| High (L2) | 1 business day |
| Medium (L3) | 3 business days |
| Low (L4) | 7 business days |

### 6.4 Stage 3 — Impact Assessment

*Before any patch is deployed, its potential impact on system stability and business operations must be assessed.*

The assigned System Administrator, in consultation with the relevant Application Owner(s), shall conduct an **Impact Assessment** covering:

- [ ] Identification of all systems affected by the patch (direct and dependent)
- [ ] Review of vendor release notes and known issues
- [ ] Assessment of patch prerequisites and dependencies (e.g., OS version, library versions)
- [ ] Identification of potential service interruptions or downtime requirements
- [ ] Coordination with Application Owners for business-critical systems
- [ ] Confirmation of rollback availability (refer Section 8)
- [ ] Identification of testing requirements (refer Section 7)
- [ ] Estimated deployment duration and preferred maintenance window

The outcome of the Impact Assessment shall be documented in the **Change Request** submitted to CAB.

### 6.5 Stage 4 — Change Request and Approval

*All patch deployments must be processed through the Change Management process. Refer to [Organization Name]'s Change Management Policy for full change request requirements.*

**Standard Changes (Medium and Low Severity):**

- Submit Change Request to CAB via [Change Management Tool/Platform]
- Minimum **[X] business days** notice to CAB before intended deployment
- CAB review conducted at scheduled weekly/fortnightly CAB meeting
- CAB approval required before deployment to production

**Normal Changes (High Severity):**

- Submit Change Request to CAB marked as **expedited**
- Minimum **[X] business days** notice where operationally feasible
- CAB may convene emergency session for approval
- IT Operations Manager may provisionally approve with retrospective CAB ratification where timeline does not permit advance approval, subject to CIO endorsement

**Emergency Changes (Critical Severity):**

- **Emergency CAB** convened within **4 hours** of classification
- CIO holds authority to approve emergency patch deployments outside standard CAB schedule
- Change Request must be completed **within 24 hours post-deployment** (retrospective documentation)
- All emergency changes are reviewed at the next scheduled CAB meeting

---

## 7. Testing and Validation Procedures

### 7.1 Pre-Deployment Testing Requirements

*Testing before production deployment is a regulatory expectation under RMiT. The rigor of testing should be proportionate to the criticality of the patch and the system affected. Skipping testing for Critical patches increases operational risk but may be necessary — document the decision.*

All patches shall undergo testing in a **non-production environment** prior to production deployment. Exceptions to this requirement (e.g., for Critical patches with imminent exploitation risk) must be approved by the CIO and documented.

### 7.2 Testing Environments

| **Environment** | **Purpose** | **Owner** | **Parity with Production** |
|---|---|---|---|
| Development (DEV) | Initial patch functionality testing | Development Team | Low |
| User Acceptance Testing (UAT) | Business functionality validation | Application Owners | Medium |
| Staging / Pre-Production | Final pre-deployment validation | IT Operations | High — must mirror production configuration |
| Production | Live deployment | IT Operations | N/A |

### 7.3 Testing Requirements by Severity Level

| **Severity** | **Required Testing Stages** | **Minimum Test Duration** | **UAT Required** |
|---|---|---|---|
| Critical (L1) | Staging (may be abbreviated) | 2 hours (minimum) or as operationally feasible | No (expedited) |
| High (L2) | DEV / UAT / Staging | [X] business days | Yes (for Tier 1 systems) |
| Medium (L3) | DEV / UAT / Staging | [X] business days | Yes (for Tier 1 and 2 systems) |
| Low (L4) | DEV / Staging | [X] business days | No (unless specified by Application Owner) |

### 7.4 Pre-Deployment Testing Checklist

*System Administrators must complete the following checklist before submitting for production deployment approval. Evidence of testing should be retained and attached to the Change Request.*

**Functional Testing:**

- [ ] Patch successfully installed in staging environment
- [ ] System services start and operate normally post-patch
- [ ] Application functionality verified against [X] critical business workflows
- [ ] Integration points with dependent systems tested and functioning
- [ ] Performance benchmarks within acceptable thresholds (CPU, memory, response time)
- [ ] Security scan conducted post-patch confirms vulnerability remediation

**Regression Testing:**

- [ ] Regression test suite executed (automated where available)
- [ ] No critical defects introduced by patch
- [ ] Log review confirms no error events introduced by patch
- [ ] Database integrity checks passed (where applicable)
- [ ] User authentication and authorization functions verified

**Operational Readiness:**

- [ ] Rollback procedure documented and tested (refer Section 8)
- [ ] Deployment runbook reviewed and updated
- [ ] On-call support arrangements confirmed for deployment window
- [ ] Communication plan prepared (internal stakeholder notifications)
- [ ] Monitoring dashboards confirmed active for post-deployment period

### 7.5 Post-Deployment Validation

Following production deployment, the System Administrator shall conduct the following post-deployment validation within **[X] hours** of patch application:

- [ ] Confirm patch version installed correctly on all targeted systems (via automated scan or manual verification)
- [ ] Confirm system services operational and responding to health checks
- [ ] Review system and application logs for errors introduced by patch
- [ ] Conduct smoke testing of critical business functions
- [ ] Confirm vulnerability is no longer detected by vulnerability scanning tool
- [ ] Notify Application Owner and stakeholders of successful deployment
- [ ] Update Patch Management Register with deployment completion date and outcome
- [ ] Close the Change Request in the ITSM tool

**Post-Deployment Monitoring Period:**

| **Severity** | **Enhanced Monitoring Period** | **Monitoring Actions** |
|---|---|---|
| Critical (L1) | 48 hours | Continuous monitoring; System Administrator on standby |
| High (L2) | 24 hours | Hourly log review; on-call support available |
| Medium (L3) | 8 hours | Automated alerting; standard support available |
| Low (L4) | Standard | Routine automated monitoring |

---

## 8. Rollback Procedures

### 8.1 Rollback Principles

*Rollback capability is a prerequisite for patch deployment. A patch should not be deployed to production unless a tested rollback procedure exists. Document the conditions under which rollback is triggered and who has the authority to invoke it.*

[Organization Name] requires that a documented and **tested rollback procedure** exists for every patch deployment before production approval is granted. The purpose of rollback procedures is to restore the affected system to its pre-patch state with minimal downtime in the event that a deployed patch causes unacceptable service degradation or functional failure.

### 8.2 Rollback Trigger Conditions

Rollback shall be initiated when **any** of the following conditions are observed following patch deployment:

- System or application unavailability exceeding the agreed Maximum Tolerable Downtime (MTD) for the affected service
- Critical business functions failing or producing incorrect outputs attributable to the patch
- Security degradation introduced by the patch (e.g., new vulnerability introduced)
- Performance degradation beyond acceptable thresholds (defined per system in the relevant runbook)
- Data corruption or integrity loss attributable to the patch
- Explicit instruction from the Application Owner or CIO to roll back

### 8.3 Rollback Authority

| **Scenario** | **Rollback Authority** |
|---|---|
| Routine patch rollback (non-critical system) | System Administrator with IT Operations Manager notification |
| Rollback of Tier 1 (critical) system patch | IT Operations Manager with Application Owner and CIO notification |
| Emergency rollback of Critical (L1) patch | System Administrator may execute immediately; notify IT Operations Manager and CIO within 1 hour |
| Rollback affecting multiple systems | CIO authorization required |

### 8.4 Pre-Requisites for Rollback Readiness

Before any patch is deployed to production, the following rollback prerequisites must be confirmed:

| **Prerequisite** | **Action Required** | **Verified By** |
|---|---|---|
| System snapshot / backup | Full system snapshot taken immediately pre-deployment | System Administrator |
| Database backup | Database backup completed and verified restorable | DBA / System Administrator |
| Rollback runbook | Step-by-step rollback procedure documented | System Administrator |
| Rollback tested | Rollback procedure tested in staging environment | System Administrator |
| Rollback time estimate | Maximum time to complete rollback documented | System Administrator |
| Rollback approval authority | Rollback authority confirmed and contactable during deployment window | IT Operations Manager |

### 8.5 Rollback Procedure Template

*Each patch deployment runbook should include a rollback section following this template. Specific technical steps will vary by system and patch type.*

**Rollback Procedure for [System Name] — [Patch Reference]:**

1. **Trigger Rollback Decision** — [Responsible: System Administrator / IT Operations Manager]
   - Confirm rollback trigger condition is met
   - Notify IT Operations Manager and Application Owner immediately
   - Document timestamp and reason for rollback initiation

2. **Notify Stakeholders** — [Responsible: IT Operations Manager]
   - Notify [list of stakeholders] of rollback initiation
   - Activate incident management process if applicable

3. **Isolate Affected System (if required)** — [Responsible: System Administrator]
   - Temporarily remove system from load balancer / production traffic if applicable

4. **Execute Rollback** — [Responsible: System Administrator]
   - [Step-by-step technical procedure — e.g., restore from snapshot, uninstall patch, restore database backup]
   - Estimated duration: [X minutes/hours]

5. **Validate System Restoration** — [Responsible: System Administrator + Application Owner]
   - Confirm system services operational at pre-patch version
   - Confirm business functions restored
   - Conduct smoke testing

6. **Return to Production** — [Responsible: IT Operations Manager]
   - Restore system to production load / traffic
   - Confirm monitoring active

7. **Incident Documentation and Post-Incident Review** — [Responsible: IT Operations Manager]
   - Log rollback event as an incident in ITSM tool
   - Conduct root cause analysis within [X] business days
   - Document lessons learned and update runbook
   - Assess requirement for alternative patching approach or compensating control

---

## 9. Exceptions and Risk Acceptance

### 9.1 Exception Management Principles

*Exceptions to mandatory patch deployment timelines are inevitable but must be formally managed. An unmanaged exception is a compliance finding. A managed exception with documented risk acceptance is a controlled risk.*

Where it is not operationally feasible to deploy a patch within the mandated timeline (Section 5), [Organization Name] requires that exceptions be formally documented, risk-assessed, and approved by an appropriate authority. Undocumented timeline breaches are treated as **compliance violations** and must be reported accordingly.

### 9.2 Valid Exception Grounds

Exceptions to patch deployment timelines may only be granted on the following grounds:

- **Vendor patch unavailable:** No vendor-supplied patch exists; compensating controls must be applied
- **Patch incompatibility:** Patch has been assessed as incompatible with [Organization Name]'s environment (with evidence from testing)
- **Business continuity risk:** Deployment would create unacceptable risk of service disruption during a critical business period (must be supported by Business Impact Assessment)
- **Third-party dependency:** Deployment is blocked pending action by a vendor or third-party provider under a managed service contract
- **Testing failure:** Patch failed pre-production testing and alternative deployment approach is under development

### 9.3 Exception Approval Authority

| **Severity Level** | **Exception Period Requested** | **Approval Authority** | **Board Notification Required** |
|---|---|---|---|
| Low (L4) | Up to 30 additional days | IT Operations Manager | No |
| Medium (L3) | Up to 30 additional days | IT Operations Manager | No |
| High (L2) | Up to 14 additional days | CIO | No |
| Critical (L1) | Any period | CIO + Board Risk Committee | Yes |
| Any level | Beyond 90 days total | CIO + Board Risk Committee | Yes |

### 9.4 Compensating Controls Requirement

All approved exceptions must be accompanied by **documented compensating controls** that demonstrably reduce the exploitation risk during the exception period. Compensating controls may include:

- Web Application Firewall (WAF) rule deployment blocking exploitation vectors
- Network segmentation isolating the affected system
- Enhanced monitoring and alerting for exploitation indicators
- Temporary disablement of the vulnerable feature or service component
- Increased frequency of vulnerability scanning on the affected system
- [Other applicable controls — document specifically]

### 9.5 Exception Register

The IT Risk Manager shall maintain a **Patch Exception Register** recording all active exceptions. The register shall be reviewed at each monthly patch management review meeting and reported to the [Risk Management Committee / CIO] [quarterly / as required].

| **Column** | **Description** |
|---|---|
| Exception ID | Unique reference (e.g., PATCH-EX-2025-001) |
| System / Asset | Name and description of affected system |
| CVE Reference | CVE identifier(s) |
| Severity Level | Classification per Section 4 |
| Mandatory Deadline | Original compliance deadline |
| Exception Requested Date | Date exception was formally requested |
| Exception Granted Date | Date exception was approved |
| Extended Deadline | New target deployment date |
| Exception Justification | Documented rationale |
| Compensating Controls | Controls applied during exception period |
| Approval Authority | Name and role of approving party |
| Status | Open / Resolved / Escalated |
| Closure Date | Date patch deployed or risk formally accepted |

---

## 10. EOL Technology Register

### 10.1 End-of-Life Technology Management

*Systems running on End-of-Life (EOL) software or hardware no longer receive vendor security patches, creating permanent unresolvable vulnerabilities. BNM RMiT requires financial institutions to manage and remediate EOL technology.*

[Organization Name] recognizes that End-of-Life (EOL) technology components present a significant and ongoing security risk, as they no longer receive security patches from vendors. All EOL technology within the [Organization Name] environment must be formally registered, risk-assessed, and subject to a time-bound remediation or replacement plan.

### 10.2 EOL Definition

A technology component is considered End-of-Life (EOL) / End-of-Support (EOS) when:

- The vendor has ceased issuing security patches for the product version in use
- The product version has reached its vendor-defined "End of Extended Support" date
- The product is no longer covered by a vendor support agreement (including paid Extended Security Updates)
- The product is internally designated as obsolete with no replacement patch mechanism

### 10.3 EOL Technology Discovery and Registration

*EOL technology must be actively discovered — it is insufficient to rely on individual teams to self-report. Define your discovery mechanisms here.*

[Organization Name] identifies EOL technology through the following mechanisms:

- Automated discovery via vulnerability scanning tools (which flag EOL operating systems and applications)
- Annual technology asset inventory review comparing installed versions against vendor support lifecycle databases
- Proactive monitoring of vendor End-of-Support announcements (minimum 12 months before EOS date)
- Third-party managed service provider reports on EOL components under their management

### 10.4 EOL Technology Register

The IT Operations Manager shall maintain an **EOL Technology Register** as a living document. All EOL technology must be registered within **[X] business days** of identification.

| **Column** | **Description** |
|---|---|
| Asset ID | Reference to the asset in the CMDB |
| Asset Name / Description | System or component name |
| Technology Component | Software / OS / firmware in question |
| Current Version | Installed version |
| EOL / EOS Date | Date vendor support ceased |
| Business Function | What business purpose this system serves |
| Tier Classification | System tier (per Section 5.2) |
| Risk Rating | Assessed risk of continued operation |
| Compensating Controls | Controls applied to reduce exposure |
| Remediation Plan | Upgrade / migration / decommission plan |
| Target Remediation Date | Planned date for remediation completion |
| Responsible Owner | System / Application Owner |
| Approval Authority | Risk acceptance approval (for continued operation) |
| Status | Active / In Remediation / Decommissioned |

### 10.5 EOL Remediation Planning Requirements

Upon identification of EOL technology, the System or Application Owner shall develop a **Remediation Plan** within the following timeframes:

| **Tier** | **Remediation Plan Submission Deadline** | **Maximum Continued Operation Period** |
|---|---|---|
| Tier 1 — Critical | 30 calendar days from identification | 6 months (with compensating controls and BRC notification) |
| Tier 2 — Important | 60 calendar days from identification | 12 months (with compensating controls and CIO approval) |
| Tier 3 — Standard | 90 calendar days from identification | 18 months (with compensating controls and IT Ops Manager approval) |
| Tier 4 — Non-Critical | 90 calendar days from identification | Expedite decommission; no continued operation extensions |

### 10.6 EOL Technology Risk Acceptance

Where remediation cannot be completed within the timelines above, the relevant system owner must seek formal **Risk Acceptance** from the appropriate authority. Risk acceptance for EOL technology on Tier 1 systems requires **Board Risk Committee (BRC)** approval and must be reported to BNM if it relates to a material technology risk as defined under RMiT.

Risk acceptance for EOL technology is valid for a maximum period of **12 months** and must be renewed upon expiry. Continuous risk acceptance renewals without a credible remediation plan are not acceptable and must be escalated to the BRC.

### 10.7 Procurement Controls — Prevention of EOL Introduction

To prevent the introduction of new EOL technology into the environment:

- All technology procurement requests must include a confirmation that the product version being procured has a **minimum [3]-year vendor support lifecycle** remaining
- Application development teams must conduct dependency audits prior to project go-live, confirming no EOL libraries or frameworks are incorporated
- Vendor contracts for technology products must include notification requirements for product EOL announcements

---

## 11. Monitoring, Reporting, and Audit

### 11.1 Patch Compliance Metrics

*Define how compliance with this policy will be measured. Metrics provide the evidence base for management reporting and regulatory examination.*

[Organization Name] tracks the following Key Performance Indicators (KPIs) for patch management:

| **Metric** | **Description** | **Target** | **Reporting Frequency** |
|---|---|---|---|
| Patch Compliance Rate (Overall) | Percentage of in-scope assets with no outstanding overdue patches | ≥ 95% | Monthly |
| Critical Patch Compliance Rate | Percentage of Critical patches deployed within mandated timeline | 100% | Monthly |
| High Patch Compliance Rate | Percentage of High patches deployed within mandated timeline | ≥ 98% | Monthly |
| Mean Time to Patch (MTTP) — Critical | Average days from patch availability to production deployment (Critical) | ≤ 1 day | Monthly |
| Mean Time to Patch (MTTP) — High | Average days from patch availability to production deployment (High) | ≤ 14 days | Monthly |
| Active Exception Count | Number of open patch deployment exceptions | ≤ [X] | Monthly |
| EOL Asset Count | Number of EOL technology assets in production | Trend toward zero | Quarterly |
| Rollback Rate | Percentage of patch deployments requiring rollback | ≤ [X]% | Monthly |

### 11.2 Reporting Structure

| **Report** | **Audience** | **Frequency** | **Owner** |
|---|---|---|---|
| Patch Management Status Dashboard | IT Operations Manager | Real-time / Daily | System Administrators |
| Monthly Patch Compliance Report | CIO, IT Risk Manager | Monthly | IT Operations Manager |
| Quarterly Technology Risk Report | Risk Management Committee, EXCO | Quarterly | CIO / IT Risk Manager |
| Annual Patch Management Review | Board Risk Committee | Annual | CIO |
| Ad-hoc: Critical Vulnerability Advisory | CIO, Application Owners, BRC (if material) | As required | ISO |
| Regulatory Submission (if required) | Bank Negara Malaysia | As directed | CIO / Compliance |

### 11.3 Internal Audit

Internal Audit shall conduct an **independent review** of patch management compliance at least **annually**, or following a significant security incident attributable to unpatched vulnerabilities. The audit scope shall include:

- Verification that deployed patches meet the timelines mandated in Section 5
- Review of exception register completeness and approval compliance
- Assessment of EOL technology register accuracy and remediation progress
- Testing of rollback readiness for a sample of critical systems
- Verification that patch management reporting to management is accurate and timely

Internal Audit findings shall be reported to the [Audit Committee / BRC] and remediation tracked through [Organization Name]'s findings management process.

---

## 12. Review and Approval

### 12.1 Document Review Schedule

*This section documents when and how this policy is reviewed. Annual review is the minimum; review must also be triggered by significant changes.*

This document shall be reviewed:

- **Annually**, no later than the **Next Review Date** specified in the document header
- **Upon significant change**, including but not limited to:
  - Material revision to BNM RMiT or other applicable regulatory instruments
  - Significant change in [Organization Name]'s technology environment or risk profile
  - Following a material security incident involving unpatched vulnerabilities
  - Following a regulatory examination finding related to patch management

Reviews shall be conducted by the IT Operations Manager with input from the ISO and IT Risk Manager.

### 12.2 Version History

| **Version** | **Date** | **Author** | **Section(s) Changed** | **Summary of Changes** |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | All | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Section] | [Description of change] |
| [2.0] | [Date] | [Author Name] | [Section] | [Description of change] |

### 12.3 Approval Sign-Off

*All approvers must sign and date this document prior to it taking effect. Digital signatures are acceptable where supported by [Organization Name]'s document management system.*

| **Role** | **Name** | **Signature** | **Date** |
|---|---|---|---|
| IT Operations Manager (Document Owner) | [Name] | [Signature] | [Date] |
| Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Information Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer / IT Risk Manager | [Name] | [Signature] | [Date] |
| [Approving Authority — e.g., Management Risk Committee Chair] | [Name] | [Signature] | [Date] |

---

## 13. References

### 13.1 Regulatory References

| **Reference** | **Title** | **Issuing Body** | **Relevant Clause(s)** |
|---|---|---|---|
| BNM/RH/PD 028-107 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 10.18 (Patch Management); Clause 10.1–10.5 (Technology Risk Management); Clause 11 (Cyber Risk) |
| Act 758 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 — Security Principle |
| — | National Cyber Security Policy | NACSA / NACSA | Critical Information Infrastructure protection requirements |
| — | Guidelines on Business Continuity Management | Bank Negara Malaysia | BCM considerations for technology disruptions |
| — | [Other applicable BNM policy documents] | Bank Negara Malaysia | [Clauses] |

### 13.2 Standards and Frameworks

| **Reference** | **Title** | **Relevance** |
|---|---|---|
| NIST SP 800-40 Rev. 4 | Guide to Enterprise Patch Management Planning | Patch management best practice framework |
| ISO/IEC 27001:2022 | Information Security Management Systems | Control A.8.8 — Management of technical vulnerabilities |
| CVSS v3.1 | Common Vulnerability Scoring System | Vulnerability severity scoring methodology |
| CISA KEV Catalog | Known Exploited Vulnerabilities Catalog | Threat-informed patch prioritization |
| CIS Controls v8 | Center for Internet Security Controls | Control 7 — Continuous Vulnerability Management |

### 13.3 Internal References

| **Document** | **Document ID** | **Owner** |
|---|---|---|
| Information Security Policy | [Document ID] | CISO |
| IT Risk Management Framework | [Document ID] | IT Risk Manager |
| Change Management Policy | [Document ID] | IT Operations Manager |
| Business Continuity Management Policy | [Document ID] | BCM Manager |
| Third-Party Risk Management Policy | [Document ID] | Risk Manager |
| Incident Response Policy | [Document ID] | ISO |
| Asset Management Policy | [Document ID] | IT Operations Manager |

---

## 14. Appendices

### Appendix A — Patch Management Register Template

*The Patch Management Register is the central record of all patches identified, assessed, and deployed within [Organization Name]. This register should be maintained in [Organization Name]'s ITSM / GRC tool. A sample structure is provided below.*

| **Field** | **Description** |
|---|---|
| Patch Record ID | Unique identifier (e.g., PATCH-2025-001) |
| CVE Reference(s) | CVE identifier(s) |
| Patch Name / Description | Vendor patch name and description |
| Affected Technology | System / application / component |
| Affected Asset(s) | List of impacted assets from CMDB |
| CVSS Base Score | Base CVSS v3.1 score |
| Effective Severity (Internal) | Internal classification after contextual adjustment |
| System Tier | Tier 1–4 classification |
| Patch Source / Vendor Advisory | URL or reference to vendor advisory |
| Date Identified | Date vulnerability/patch was first identified |
| Date Classified | Date internal classification assigned |
| Mandatory Deployment Deadline | Calculated deadline per Section 5 |
| Change Request Reference | ITSM change request number |
| Test Environment Completion Date | Date testing completed in staging |
| CAB Approval Date | Date CAB approved production deployment |
| Production Deployment Date | Actual date deployed to production |
| Deployment Outcome | Successful / Failed / Rolled Back |
| Rollback Date (if applicable) | Date rollback executed |
| Validated by Scan | Yes / No / Date of confirming scan |
| Status | Pending / In Progress / Deployed / Exception / Closed |
| Exception Reference (if applicable) | Link to Exception Register entry |
| Comments | Any additional notes |

---

### Appendix B — Vulnerability Advisory Template

*The ISO shall issue a Vulnerability Advisory using the following template whenever a new vulnerability is classified as Critical (Level 1) or High (Level 2).*

---

**VULNERABILITY ADVISORY — [CONFIDENTIAL]**

| **Field** | **Detail** |
|---|---|
| Advisory Reference | VA-[YYYY]-[NNN] |
| Date Issued | [Date] |
| Issued By | Information Security Officer |
| Classification | [Critical / High] |

**Vulnerability Summary**

- **CVE Reference(s):** [CVE-YYYY-XXXXX]
- **Vulnerability Description:** [Brief description of the vulnerability]
- **Affected Products / Versions:** [Affected technology components and versions]
- **CVSS Base Score:** [X.X]
- **Internal Severity Classification:** [Level 1 – Critical / Level 2 – High]

**Threat Context**

- **Actively exploited in the wild:** [Yes / No / Unknown]
- **CISA KEV listed:** [Yes / No]
- **Exploit code publicly available:** [Yes / No / Unknown]
- **Threat actor activity observed:** [Yes / No / Details]

**Impact Assessment**

- **Affected [Organization Name] Systems:** [List or reference asset query]
- **Potential Business Impact:** [Description]

**Required Actions**

| **Action** | **Responsible Party** | **Deadline** |
|---|---|---|
| [Deploy patch / Apply compensating control] | System Administrators | [Deadline per Section 5] |
| [Additional action if required] | [Party] | [Deadline] |

**Compensating Controls (if patch unavailable)**

[Description of interim compensating controls to be applied immediately]

---

### Appendix C — Patch Exception Request Form

*Exception requests must be submitted using this form to the IT Risk Manager. Incomplete submissions will not be processed.*

---

**PATCH EXCEPTION REQUEST**

| **Field** | **Detail** |
|---|---|
| Exception Request ID | PATCH-EX-[YYYY]-[NNN] |
| Date of Request | [Date] |
| Requesting Party | [Name and Role] |

**Vulnerability Details**

- **CVE Reference(s):** [CVE-YYYY-XXXXX]
- **Patch Record ID:** [PATCH-YYYY-NNN]
- **Severity Classification:** [Level 1–4]
- **Mandatory Deployment Deadline:** [Date]

**Affected Systems**

[List of systems for which the exception is requested]

**Exception Justification**

*Provide detailed technical and/or business justification for the exception request. Generic or unsupported justifications will be rejected.*

[Detailed justification]

**Proposed Extended Deadline**

[Target date for patch deployment — must be as soon as operationally feasible]

**Compensating Controls**

*Detail the compensating controls that will be applied for the duration of the exception period to reduce exploitation risk.*

| **Control** | **Implementation Date** | **Owner** |
|---|---|---|
| [Control description] | [Date] | [Owner] |

**Risk Assessment**

*Provide an assessment of the residual risk during the exception period.*

[Risk assessment narrative]

**Approval Required From:** [Per Section 9.3 based on severity and duration]

| **Approver** | **Name** | **Decision** | **Date** | **Comments** |
|---|---|---|---|---|
| [Role] | [Name] | Approved / Rejected | [Date] | [Comments] |

---

### Appendix D — EOL Technology Register Template

*Refer to Section 10.4 for full column descriptions. This register shall be maintained in [Organization Name]'s CMDB / GRC platform and reviewed quarterly.*

| **Asset ID** | **Asset Name** | **Technology Component** | **Current Version** | **EOL Date** | **Business Function** | **Tier** | **Risk Rating** | **Compensating Controls** | **Remediation Plan** | **Target Date** | **Owner** | **Approval** | **Status** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Name] | [e.g., Windows Server 2012] | [Version] | [Date] | [Function] | [1-4] | [H/M/L] | [Controls] | [Plan] | [Date] | [Owner] | [Authority] | [Status] |

---

### Appendix E — Glossary of Terms

| **Term** | **Definition** |
|---|---|
| BNM | Bank Negara Malaysia — the central bank and financial regulator of Malaysia |
| CAB | Change Advisory Board — governance body responsible for reviewing and approving change requests |
| CMDB | Configuration Management Database — authoritative inventory of technology assets |
| CVSS | Common Vulnerability Scoring System — standardized framework for rating the severity of security vulnerabilities |
| CVE | Common Vulnerabilities and Exposures — public reference identifiers for known vulnerabilities |
| EOL / EOS | End-of-Life / End-of-Support — the date after which a vendor ceases providing security patches for a product |
| ICS | Industrial Control System — systems used to monitor and control industrial processes |
| ISO | Information Security Officer — the individual responsible for [Organization Name]'s information security function |
| ITSM | IT Service Management — the platform used to manage IT change, incident, and service requests |
| KEV | Known Exploited Vulnerabilities — the CISA catalog of vulnerabilities with confirmed active exploitation |
| MTD | Maximum Tolerable Downtime — the maximum period a system can be unavailable before unacceptable business impact occurs |
| NACSA | National Cyber Security Agency of Malaysia |
| NVD | National Vulnerability Database — the U.S. NIST database of CVE vulnerability information |
| PAM | Privileged Access Management — controls governing access to privileged accounts |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing personal data protection |
| RACI | Responsible, Accountable, Consulted, Informed — accountability matrix framework |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk for financial institutions |
| UAT | User Acceptance Testing — testing performed by business users to validate system functionality |
| WAF | Web Application Firewall — security control that filters and monitors HTTP traffic to web applications |

---

### Appendix F — Related Forms and Tools

| **Document / Tool** | **Purpose** | **Location / Reference** |
|---|---|---|
| Patch Management Register | Central tracking of all patches | [ITSM / GRC tool — URL or reference] |
| Change Request Form | Formal request for production change approval | [Change Management Tool — URL] |
| Vulnerability Advisory Template | ISO notification to IT Operations of new vulnerabilities | [Appendix B / Document Management System] |
| Patch Exception Request Form | Formal exception request submission | [Appendix C / Document Management System] |
| EOL Technology Register | Register of EOL assets and remediation plans | [CMDB / GRC tool — URL or reference] |
| Patch Deployment Runbook Template | Step-by-step deployment and rollback instructions | [IT Operations SharePoint / Wiki — URL] |

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained in [Organization Name]'s Document Management System at [DMS reference/URL]. Printed copies are uncontrolled. Always refer to the DMS for the current version.