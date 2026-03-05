# EDR Deployment Documentation

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document provides formal evidence of Endpoint Detection and Response (EDR) deployment coverage across all endpoints within [Organization Name]. It is maintained to demonstrate compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT)** policy requirements, specifically **Clause 11.8**, which mandates that financial institutions implement appropriate endpoint security controls, including continuous monitoring and threat detection capabilities.

This document serves as an audit-ready evidence artifact and must be reviewed **quarterly** or upon any significant change event (e.g., infrastructure expansion, EDR platform change, or a confirmed endpoint security incident).

### 1.1 Scope

*Define the boundaries of this documentation — include all endpoint categories in scope. Explicitly state any exclusions and provide justification.*

This documentation covers the following endpoint categories within [Organization Name]'s technology environment:

- **User Endpoints:** Corporate laptops, desktops, and workstations
- **Server Endpoints:** On-premises physical servers and virtual machines
- **Cloud Workloads:** Cloud-hosted virtual machines and container hosts (where applicable)
- **Privileged Access Workstations (PAWs):** Endpoints used by administrators and privileged users
- **OT/SCADA Endpoints:** [Include or exclude with justification]
- **Remote/Roaming Devices:** Endpoints used by remote workers and branch office staff

**Exclusions:**

| Excluded Asset Category | Justification |
|---|---|
| [Excluded Category 1] | [Reason — e.g., network-only device, no OS agent support] |
| [Excluded Category 2] | [Reason] |

---

## 2. Assessment Scope and Criteria

*Describe the specific assessment boundaries, the endpoint population assessed, and the criteria used to determine adequate EDR coverage. Reference internal standards and regulatory thresholds.*

### 2.1 Assessment Period

| Field | Details |
|---|---|
| **Assessment Start Date** | [DD/MM/YYYY] |
| **Assessment End Date** | [DD/MM/YYYY] |
| **Assessment Type** | ☐ Quarterly Review &nbsp;&nbsp; ☐ Per-Event Review &nbsp;&nbsp; ☐ Annual Audit |
| **Triggering Event (if per-event)** | [Describe event, e.g., new office onboarding, platform migration] |

### 2.2 Endpoint Population

*Provide a snapshot of the total managed endpoint estate against which coverage is measured.*

| Endpoint Category | Total Count | Managed by MDM/ITSM | In Scope for EDR |
|---|---|---|---|
| Corporate Laptops | [#] | [#] | [#] |
| Corporate Desktops | [#] | [#] | [#] |
| Windows Servers (On-Prem) | [#] | [#] | [#] |
| Linux Servers (On-Prem) | [#] | [#] | [#] |
| Cloud VMs (IaaS) | [#] | [#] | [#] |
| Privileged Access Workstations | [#] | [#] | [#] |
| Remote/Branch Endpoints | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** |

### 2.3 Coverage Criteria

*State the minimum coverage thresholds adopted by the organization. These should align with internal security policy and any BNM supervisory expectations.*

The following criteria define satisfactory EDR deployment coverage for [Organization Name]:

| Criterion | Threshold | Basis |
|---|---|---|
| Overall endpoint EDR coverage | ≥ [X]% (e.g., 98%) | [Organization Name] Information Security Policy v[X] |
| Coverage for privileged endpoints | 100% | BNM RMiT Clause 11.8; Zero-exception policy |
| Coverage for production servers | ≥ [X]% | [Internal Standard Reference] |
| Agent health (active, reporting) | ≥ [X]% of deployed agents | [Internal Standard Reference] |
| Policy compliance (correct policy applied) | ≥ [X]% | [Internal Standard Reference] |
| Threat detection response time (mean) | ≤ [X] minutes | [SLA / OLA Reference] |

---

## 3. Methodology

*Describe the process and tools used to collect, verify, and validate EDR deployment data. Include data sources, validation steps, and any sampling approach used.*

### 3.1 Data Collection Method

Coverage data was gathered using the following approach:

1. **EDR Console Report Export:** Coverage and agent health data was exported directly from the EDR platform console ([EDR Platform Name, e.g., CrowdStrike Falcon / Microsoft Defender for Endpoint / SentinelOne]) on [Date of Export].
2. **Asset Inventory Reconciliation:** EDR-reported endpoints were reconciled against the authoritative asset inventory sourced from [CMDB / MDM Platform Name] as of [Date of Inventory Snapshot].
3. **Active Directory Cross-Reference:** Domain-joined device counts were verified against Active Directory / [Identity Platform] to identify endpoints not appearing in either the EDR console or the asset register.
4. **Manual Verification (Sampling):** A random sample of [X]% of total endpoints was manually verified by the Security Operations team to confirm agent status, policy assignment, and active reporting.
5. **Cloud Workload Verification:** Cloud VM coverage was verified via [Cloud Security Posture Management tool / Cloud provider console] API query on [Date].

### 3.2 Tools and Platforms Used

| Tool / Platform | Purpose | Version / Instance |
|---|---|---|
| [EDR Platform Name] | Primary EDR coverage source of truth | [Version / Tenant ID] |
| [CMDB / ITSM Platform] | Authoritative asset inventory | [Version] |
| [MDM Platform, e.g., Intune / JAMF] | Endpoint management validation | [Version] |
| [Active Directory / Entra ID] | Domain device count reference | [Version] |
| [CSPM Tool, if applicable] | Cloud workload coverage validation | [Version] |

### 3.3 Limitations and Assumptions

*Document any known limitations in the methodology that may affect the accuracy of reported coverage figures.*

- [Limitation 1 — e.g., OT endpoints were excluded due to absence of supported OS agent]
- [Limitation 2 — e.g., Contractor-owned devices not enrolled in MDM were not captured in scope]
- [Assumption 1 — e.g., CMDB was assumed current as of the inventory snapshot date]

---

## 4. Findings and Ratings

*Summarise the EDR deployment coverage findings. Include overall coverage percentages, gaps identified, and a risk rating for each gap area.*

### 4.1 Overall Coverage Summary

| Metric | Target | Actual | Status |
|---|---|---|---|
| Total In-Scope Endpoints | — | [#] | — |
| EDR Agent Deployed | ≥ [X]% | [#] ([X]%) | ☐ Met &nbsp; ☐ Not Met |
| EDR Agent Active & Reporting | ≥ [X]% | [#] ([X]%) | ☐ Met &nbsp; ☐ Not Met |
| Correct Policy Applied | ≥ [X]% | [#] ([X]%) | ☐ Met &nbsp; ☐ Not Met |
| Privileged Endpoints — 100% Coverage | 100% | [#] ([X]%) | ☐ Met &nbsp; ☐ Not Met |
| Production Servers — Coverage | ≥ [X]% | [#] ([X]%) | ☐ Met &nbsp; ☐ Not Met |

**Overall Compliance Rating:**

| Rating | Description | Assigned Rating |
|---|---|---|
| **Compliant** | All thresholds met, no critical gaps | ☐ |
| **Compliant with Observations** | Thresholds met, minor gaps noted for remediation | ☐ |
| **Partially Compliant** | One or more thresholds not met; remediation plan in place | ☐ |
| **Non-Compliant** | Critical gaps identified; immediate remediation required | ☐ |

> **Assigned Rating:** [Compliant / Compliant with Observations / Partially Compliant / Non-Compliant]
>
> **Rationale:** [Brief narrative explaining the rating decision]

### 4.2 Gap Analysis

*List all endpoints or endpoint categories where EDR is not deployed, not reporting, or incorrectly configured. Assign a risk rating to each gap.*

| Gap ID | Endpoint Category | Gap Description | Affected Count | Risk Rating | Gap Owner | Target Remediation Date |
|---|---|---|---|---|---|---|
| GAP-001 | [Category] | [e.g., EDR agent not installed] | [#] | Critical / High / Medium / Low | [Name / Team] | [DD/MM/YYYY] |
| GAP-002 | [Category] | [e.g., Agent deployed but not reporting] | [#] | Critical / High / Medium / Low | [Name / Team] | [DD/MM/YYYY] |
| GAP-003 | [Category] | [e.g., Outdated agent version below minimum] | [#] | Critical / High / Medium / Low | [Name / Team] | [DD/MM/YYYY] |

### 4.3 Coverage by Business Unit / Department

*Break down EDR coverage by organisational unit to identify any concentration of gaps.*

| Business Unit / Department | Total Endpoints | EDR Deployed | Coverage % | Notes |
|---|---|---|---|---|
| [Business Unit 1] | [#] | [#] | [X]% | [Any relevant note] |
| [Business Unit 2] | [#] | [#] | [X]% | [Any relevant note] |
| [Business Unit 3] | [#] | [#] | [X]% | [Any relevant note] |
| **Total** | **[#]** | **[#]** | **[X]%** | |

### 4.4 Agent Health Status

*Summarise the health and operational status of deployed EDR agents to confirm active protection.*

| Health Status | Count | Percentage |
|---|---|---|
| Active & Reporting | [#] | [X]% |
| Deployed but Not Reporting (Stale) | [#] | [X]% |
| Deployed but Disabled | [#] | [X]% |
| Incorrect Policy / Misconfigured | [#] | [X]% |
| Agent Version Below Minimum Supported | [#] | [X]% |

---

## 5. Evidence Reviewed

*List all evidence artefacts referenced, reviewed, or attached in support of this documentation. Evidence must be sufficient to satisfy an external auditor or BNM examiner.*

### 5.1 Evidence Register

| Evidence ID | Evidence Description | Source System | Date Obtained | Retained In | Obtained By |
|---|---|---|---|---|---|
| EVD-001 | EDR console full endpoint coverage report | [EDR Platform Name] | [DD/MM/YYYY] | [SharePoint / GRC Platform / Appendix A] | [Name] |
| EVD-002 | Asset inventory export (CMDB/MDM) | [CMDB / MDM Platform] | [DD/MM/YYYY] | [Location] | [Name] |
| EVD-003 | Active Directory / Entra ID device list | [AD / Entra ID] | [DD/MM/YYYY] | [Location] | [Name] |
| EVD-004 | EDR policy configuration screenshot | [EDR Platform Name] | [DD/MM/YYYY] | [Location] | [Name] |
| EVD-005 | Cloud workload coverage report | [CSPM / Cloud Console] | [DD/MM/YYYY] | [Location] | [Name] |
| EVD-006 | Manual sampling verification log | Security Operations | [DD/MM/YYYY] | [Appendix B] | [Name] |
| EVD-007 | Previous quarter's EDR deployment report | [GRC Platform / Document Store] | [DD/MM/YYYY] | [Location] | [Name] |
| EVD-008 | Incident tickets for EDR-related gaps (if any) | [ITSM Platform] | [DD/MM/YYYY] | [Location] | [Name] |

### 5.2 Evidence Retention

All evidence artefacts are retained in accordance with [Organization Name]'s Records Management Policy and BNM RMiT requirements. Evidence is stored in **[Designated Repository — e.g., SharePoint / GRC Platform / Secure File Server]** under the path **[/Path/To/Evidence/Folder]** and is accessible to authorised personnel only.

Retention period: **[X] years** from the date of this document, or as mandated by BNM, whichever is longer.

---

## 6. Recommendations

*Provide actionable recommendations to address identified gaps and improve overall EDR deployment posture. Each recommendation should be prioritised and assigned to an owner.*

### 6.1 Immediate Actions (Critical / High Risk)

*Address within [X] business days from the date of this report.*

| Rec. ID | Recommendation | Priority | Assigned To | Target Date | Status |
|---|---|---|---|---|---|
| REC-001 | [e.g., Deploy EDR agent to all privileged access workstations identified in GAP-001 immediately] | Critical | [Name / Team] | [DD/MM/YYYY] | Open |
| REC-002 | [e.g., Investigate and remediate stale/non-reporting agents identified in GAP-002] | High | [Name / Team] | [DD/MM/YYYY] | Open |

### 6.2 Short-Term Actions (Medium Risk)

*Address within [X] weeks from the date of this report.*

| Rec. ID | Recommendation | Priority | Assigned To | Target Date | Status |
|---|---|---|---|---|---|
| REC-003 | [e.g., Upgrade all EDR agents below minimum supported version] | Medium | [Name / Team] | [DD/MM/YYYY] | Open |
| REC-004 | [e.g., Reconcile CMDB to remove decommissioned assets causing false gap counts] | Medium | [Name / Team] | [DD/MM/YYYY] | Open |

### 6.3 Strategic / Long-Term Recommendations

*Address within [X] months; may require budget or project approval.*

| Rec. ID | Recommendation | Priority | Assigned To | Target Date | Status |
|---|---|---|---|---|---|
| REC-005 | [e.g., Evaluate EDR agent support for OT/SCADA endpoints currently excluded from scope] | Low | [Name / Team] | [DD/MM/YYYY] | Open |
| REC-006 | [e.g., Implement automated coverage alerting in SIEM when EDR coverage drops below threshold] | Low | [Name / Team] | [DD/MM/YYYY] | Open |

### 6.4 Recommendation Tracking

*All recommendations are tracked in [GRC Platform / Ticketing System — e.g., JIRA / ServiceNow / Risk Register]. Reference IDs:*

| Rec. ID | Tracking Reference | Platform |
|---|---|---|
| REC-001 | [Ticket / Risk Item ID] | [Platform Name] |
| REC-002 | [Ticket / Risk Item ID] | [Platform Name] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for EDR deployment documentation and associated activities.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Security Operations Manager | SOC Analyst / Engineer | IT Infrastructure Team | Chief Information Security Officer (CISO) | Internal Audit | Risk & Compliance Team |
|---|---|---|---|---|---|---|
| EDR coverage data collection | R | R | C | I | I | I |
| Asset inventory reconciliation | C | R | R | I | I | I |
| Gap analysis and risk rating | A/R | R | C | C | I | C |
| Recommendation development | A/R | C | C | C | I | C |
| Remediation execution | C | R | R | I | I | I |
| Document preparation and review | A/R | C | I | C | C | C |
| Document approval | C | I | I | A | I | C |
| Evidence retention | R | R | I | I | I | A |
| Reporting to risk committee | C | I | I | R | I | R |
| Follow-up on open recommendations | A/R | R | R | I | I | C |

---

## 8. Sign-off and Approval

*This section documents the formal review and approval of this EDR Deployment Documentation. All signatories confirm that the content is accurate, complete, and fit for regulatory submission.*

### 8.1 Preparer Attestation

By signing below, the preparer attests that the information contained in this document is accurate and complete to the best of their knowledge, and that all evidence referenced herein has been collected, reviewed, and retained appropriately.

| Role | Name | Signature | Date |
|---|---|---|---|
| Preparer (SOC Analyst / Engineer) | [Name] | | [DD/MM/YYYY] |

### 8.2 Reviewer Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Security Operations Manager | [Name] | | [DD/MM/YYYY] |
| Risk & Compliance Manager | [Name] | | [DD/MM/YYYY] |

### 8.3 Approver Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | | [DD/MM/YYYY] |
| [Additional Approver, if required] | [Name] | | [DD/MM/YYYY] |

> **By approving this document, the signatories confirm that the EDR Deployment Documentation has been reviewed for accuracy and completeness, and that any identified gaps are subject to the remediation actions recorded in Section 6.**

---

## 9. Review and Approval History

### 9.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Name] | [Description of change] |
| [2.0] | [DD/MM/YYYY] | [Name] | [Description of major revision] |

### 9.2 Review Schedule

| Review Type | Frequency | Next Due Date | Responsible Party |
|---|---|---|---|
| Quarterly Coverage Review | Quarterly | [DD/MM/YYYY] | Security Operations Manager |
| Per-Event Review | Upon triggering event | As required | Security Operations Manager |
| Annual Comprehensive Audit | Annual | [DD/MM/YYYY] | Internal Audit / CISO |

---

## 10. References

*This document addresses and provides evidence for the following regulatory requirements and internal standards.*

### 10.1 Regulatory References

| Reference | Description | Relevance |
|---|---|---|
| **BNM RMiT Clause 11.8** | Endpoint security controls — financial institutions must implement appropriate endpoint protection, including continuous monitoring, threat detection, and response capabilities across all endpoints. | Primary regulatory basis for this document |
| BNM RMiT (General) | Risk Management in Technology Policy — overarching framework for technology risk management in Malaysian financial institutions | Supporting framework |
| [NACSA Reference, if applicable] | [Relevant NACSA guideline or standard] | [Relevance to endpoint security] |
| [PDPA Reference, if applicable] | Personal Data Protection Act 2010 — endpoint protection reduces risk of personal data breach | Supporting compliance |

### 10.2 Internal References

| Document | Document ID | Version |
|---|---|---|
| Information Security Policy | [Doc ID] | [Version] |
| Endpoint Security Standard | [Doc ID] | [Version] |
| Asset Management Policy | [Doc ID] | [Version] |
| Incident Response Plan | [Doc ID] | [Version] |
| Vulnerability Management Policy | [Doc ID] | [Version] |
| Records Management Policy | [Doc ID] | [Version] |

---

## Appendices

### Appendix A — EDR Console Coverage Report Export

*Attach or reference the full EDR platform coverage report exported for this assessment period.*

> **Attachment:** [EDR Platform Name] — Full Coverage Report — [Assessment Period]
> **File Name:** `[YYYY-MM-DD]_EDR_Coverage_Report_[Assessment Period].csv / .pdf`
> **Location:** [SharePoint / GRC Platform path]
> **Date of Export:** [DD/MM/YYYY]
> **Exported By:** [Name]

---

### Appendix B — Manual Sampling Verification Log

*Document the results of the manual endpoint verification sample conducted to validate automated coverage data.*

**Sample Size:** [X] endpoints ([X]% of total in-scope population)
**Sampling Method:** [Random / Stratified random by category]
**Verification Date:** [DD/MM/YYYY]
**Verified By:** [Name]

| Sample # | Hostname / Asset ID | Endpoint Category | EDR Agent Present | Agent Status | Policy Correct | Notes |
|---|---|---|---|---|---|---|
| 1 | [Hostname] | [Category] | ☐ Yes &nbsp; ☐ No | Active / Stale / Disabled | ☐ Yes &nbsp; ☐ No | [Note] |
| 2 | [Hostname] | [Category] | ☐ Yes &nbsp; ☐ No | Active / Stale / Disabled | ☐ Yes &nbsp; ☐ No | [Note] |
| 3 | [Hostname] | [Category] | ☐ Yes &nbsp; ☐ No | Active / Stale / Disabled | ☐ Yes &nbsp; ☐ No | [Note] |
| … | … | … | … | … | … | … |

**Sampling Summary:**

| Metric | Count | Percentage |
|---|---|---|
| Endpoints sampled | [#] | 100% |
| EDR agent confirmed present | [#] | [X]% |
| Agent confirmed active & reporting | [#] | [X]% |
| Policy confirmed correct | [#] | [X]% |
| Discrepancies found vs. console report | [#] | [X]% |

---

### Appendix C — EDR Policy Configuration Summary

*Summarise the EDR policy profiles applied across the endpoint estate to confirm appropriate security posture.*

| Policy Name | Endpoint Category Covered | Real-Time Protection | Behavioural Detection | Threat Intelligence | Automatic Quarantine | Last Modified |
|---|---|---|---|---|---|---|
| [Policy Name 1] | [e.g., Corporate Laptops] | ☐ Enabled | ☐ Enabled | ☐ Enabled | ☐ Enabled | [DD/MM/YYYY] |
| [Policy Name 2] | [e.g., Servers] | ☐ Enabled | ☐ Enabled | ☐ Enabled | ☐ Enabled | [DD/MM/YYYY] |
| [Policy Name 3] | [e.g., PAWs] | ☐ Enabled | ☐ Enabled | ☐ Enabled | ☐ Enabled | [DD/MM/YYYY] |

---

### Appendix D — Remediation Tracker (Open Items)

*Tracks open gaps and recommendations from the current assessment period through to closure.*

| Item ID | Description | Risk Rating | Owner | Target Date | Completion Date | Status | Evidence of Closure |
|---|---|---|---|---|---|---|---|
| GAP-001 / REC-001 | [Description] | Critical | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | Open / In Progress / Closed | [Reference] |
| GAP-002 / REC-002 | [Description] | High | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | Open / In Progress / Closed | [Reference] |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name] and designated regulatory bodies. Unauthorised disclosure, reproduction, or distribution is strictly prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Last Review Date]*