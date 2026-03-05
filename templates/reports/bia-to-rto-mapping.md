# BIA-to-RTO Mapping Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Technology Risk |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **Confidentiality Notice:** This document contains confidential information proprietary to [Organization Name]. It is intended solely for authorized personnel involved in technology risk management and regulatory compliance. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Impact Ratings](#4-findings-and-impact-ratings)
5. [Evidence Reviewed](#5-evidence-reviewed)
6. [BIA-to-RTO/RPO Mapping](#6-bia-to-rtorpo-mapping)
7. [Gap Analysis and Recommendations](#7-gap-analysis-and-recommendations)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the formal mapping between Business Impact Analysis (BIA) results and the corresponding Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for critical technology systems and services within [Organization Name]. It provides a structured, evidence-based basis for technology recovery planning in alignment with BNM's Risk Management in Technology (RMiT) Policy Document, specifically **Clause 10.33**.

This report supports the institution's obligations to ensure that recovery objectives are commensurate with the criticality and business impact of disrupted technology systems, and that these objectives are periodically validated against actual recovery capabilities.

### 1.2 Scope

*Describe the organizational units, systems, and technology services covered by this mapping exercise. Clearly define what is in and out of scope.*

**In Scope:**

- All Tier 1 and Tier 2 critical systems as classified under [Organization Name]'s Technology Asset Classification Policy
- Technology services supporting critical business functions as identified in the most recent Business Impact Analysis dated [BIA Reference Date]
- Infrastructure components, applications, and data repositories underpinning in-scope systems
- Business units: [List applicable business units, e.g., Retail Banking, Treasury, Payments, Core Banking Operations]

**Out of Scope:**

- Non-critical (Tier 3 and below) systems unless escalated during the BIA process
- Third-party hosted systems where [Organization Name] has no contractual RTO/RPO obligations
- [Any other exclusions]

### 1.3 Regulatory Context

This mapping report has been prepared to fulfil the requirements of:

- **BNM RMiT Policy Document, Clause 10.33** — which mandates that financial institutions establish and document recovery objectives that are aligned with business impact assessments and reflective of business criticality
- BNM RMiT Policy Document, Part G (Business Continuity Management) — broader BCM requirements underpinning this mapping
- [Organization Name]'s internal Technology Risk Management Framework

---

## 2. Assessment Scope and Criteria

### 2.1 Assessment Overview

*Provide a summary of the BIA exercise that forms the basis of this mapping. Reference the source BIA document and describe how systems were identified for inclusion.*

| Field | Details |
|---|---|
| **Source BIA Reference** | [BIA Document ID and Title] |
| **BIA Conducted By** | [Team / Function Name] |
| **BIA Completion Date** | [Date] |
| **Number of Systems Assessed** | [Number] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Previous Mapping Version** | [Previous Document ID / Version] |

### 2.2 System Criticality Classification Criteria

*Define the criteria used to classify the criticality of each system. This should be consistent with the BIA methodology and the institution's internal classification framework.*

Criticality tiers are assigned based on the following criteria:

| Criticality Tier | Description | Criteria |
|---|---|---|
| **Tier 1 — Mission Critical** | System failure causes immediate, severe business disruption or regulatory breach | Direct impact on customer-facing transactions, financial settlement, or regulatory reporting; maximum tolerable downtime ≤ 4 hours |
| **Tier 2 — Business Critical** | System failure causes significant operational disruption | Material impact on core business functions; maximum tolerable downtime between 4–24 hours |
| **Tier 3 — Important** | System failure causes moderate inconvenience | Operational workarounds available; maximum tolerable downtime between 24–72 hours |
| **Tier 4 — Standard** | System failure has minimal business impact | Manual processes can substitute; maximum tolerable downtime > 72 hours |

### 2.3 Impact Dimensions

*List the impact dimensions evaluated during the BIA. Each dimension should be rated and aggregated to determine overall criticality.*

The following impact dimensions were assessed for each system:

- **Financial Impact** — Direct revenue loss, transaction settlement failure, or liquidity risk
- **Regulatory and Compliance Impact** — Breach of BNM requirements, reporting obligations, or licensing conditions
- **Reputational Impact** — Customer confidence, media exposure, and public trust
- **Operational Impact** — Degradation or cessation of core business processes
- **Customer Impact** — Number of customers affected, severity of service disruption
- **Legal and Contractual Impact** — Breach of SLAs, contractual obligations, or legal liability

### 2.4 Impact Scoring Matrix

*Include the scoring scale used in the BIA for reference. This ensures consistency between the BIA ratings and the RTO/RPO targets established in this document.*

| Score | Rating | Financial Loss (MYR) | Customer Impact | Regulatory Exposure |
|---|---|---|---|---|
| 5 | Critical | > MYR [Threshold] | > [Number] customers | Likely regulatory action / fine |
| 4 | High | MYR [Threshold] – [Threshold] | [Number] – [Number] customers | Formal regulatory notification required |
| 3 | Medium | MYR [Threshold] – [Threshold] | [Number] – [Number] customers | Internal escalation required |
| 2 | Low | MYR [Threshold] – [Threshold] | < [Number] customers | Minor policy deviation |
| 1 | Negligible | < MYR [Threshold] | Minimal | No material exposure |

---

## 3. Methodology

### 3.1 Mapping Methodology Overview

*Describe the process and methodology used to derive RTO/RPO targets from BIA results. Explain the linkage between impact scores, criticality tiers, and the resulting recovery objectives.*

The BIA-to-RTO/RPO mapping methodology employed by [Organization Name] follows a structured, risk-based approach consisting of the following phases:

**Phase 1 — BIA Results Consolidation**
BIA results from all assessed systems are consolidated, validated, and normalized to ensure consistency across business units. Systems are cross-referenced against the Technology Asset Register.

**Phase 2 — Maximum Tolerable Downtime (MTD) Determination**
Business process owners confirm the Maximum Tolerable Downtime (MTD) for each business function dependent on the assessed system. MTD represents the absolute upper limit beyond which business continuity cannot be maintained.

**Phase 3 — RTO and RPO Derivation**
RTO and RPO targets are derived as a function of the BIA criticality tier and the confirmed MTD. RTOs are set at a defined margin below the MTD to allow adequate recovery buffer.

**Phase 4 — Technical Feasibility Validation**
Derived RTO/RPO targets are reviewed against current technical recovery capabilities (e.g., backup frequencies, replication mechanisms, DR site readiness) to identify feasibility gaps.

**Phase 5 — Approval and Sign-Off**
Finalized mappings are reviewed by the Head of Technology Risk and approved by [Approval Authority, e.g., Technology Risk Committee / CRO].

### 3.2 RTO/RPO Derivation Formula

*Document the formula or logic used to translate BIA scores into RTO/RPO values. This is important for audit traceability.*

| Criticality Tier | Maximum Tolerable Downtime (MTD) | Target RTO | Target RPO |
|---|---|---|---|
| Tier 1 — Mission Critical | ≤ 4 hours | ≤ 2 hours | ≤ 15 minutes |
| Tier 2 — Business Critical | 4–24 hours | ≤ 4 hours | ≤ 1 hour |
| Tier 3 — Important | 24–72 hours | ≤ 24 hours | ≤ 4 hours |
| Tier 4 — Standard | > 72 hours | ≤ 48 hours | ≤ 24 hours |

> **Note:** RTOs are set at a minimum 50% buffer below the confirmed MTD. Where technical constraints prevent this, exceptions are documented in Section 7.

### 3.3 Assumptions and Constraints

*List any assumptions made during the mapping exercise and constraints that may affect the accuracy or completeness of the results.*

**Assumptions:**

- BIA results as documented in [BIA Reference Document ID] are current and accurately reflect business requirements as of [Date]
- System owners have provided accurate and complete information regarding system dependencies
- MTD values have been confirmed by authorized business process owners

**Constraints:**

- [Constraint 1, e.g., DR testing results from [Date] may not reflect current production configuration changes]
- [Constraint 2, e.g., Legacy systems [System Names] have limited recovery capability due to vendor support constraints]
- [Constraint 3, e.g., Cloud-hosted systems are subject to vendor SLA limitations]

---

## 4. Findings and Impact Ratings

### 4.1 Summary of BIA Findings

*Summarize the key findings from the BIA, highlighting the distribution of systems across criticality tiers and any notable trends or changes from the previous assessment period.*

| Criticality Tier | Number of Systems | % of Total | Change from Previous Period |
|---|---|---|---|
| Tier 1 — Mission Critical | [Number] | [%] | [+/- Number] |
| Tier 2 — Business Critical | [Number] | [%] | [+/- Number] |
| Tier 3 — Important | [Number] | [%] | [+/- Number] |
| Tier 4 — Standard | [Number] | [%] | [+/- Number] |
| **Total** | **[Total]** | **100%** | |

### 4.2 Key Findings

*List the most significant findings from this mapping exercise, particularly where criticality has changed, new gaps have been identified, or risks have escalated.*

**Finding 1: [Finding Title]**
- **Description:** [Describe the finding]
- **Affected Systems:** [System Names]
- **Risk Level:** [Critical / High / Medium / Low]
- **Implication:** [Explain the impact or risk if not addressed]

**Finding 2: [Finding Title]**
- **Description:** [Describe the finding]
- **Affected Systems:** [System Names]
- **Risk Level:** [Critical / High / Medium / Low]
- **Implication:** [Explain the impact or risk if not addressed]

**Finding 3: [Finding Title]**
- **Description:** [Describe the finding]
- **Affected Systems:** [System Names]
- **Risk Level:** [Critical / High / Medium / Low]
- **Implication:** [Explain the impact or risk if not addressed]

> *Add additional findings as required. Each finding should be traceable to specific evidence and supported by the evidence register in Section 5.*

### 4.3 Changes from Previous Assessment

*Summarize material changes in BIA results or RTO/RPO targets since the previous review period. Document any systems that have been added, removed, or reclassified.*

| System Name | Previous Tier | Current Tier | Reason for Change | Effective Date |
|---|---|---|---|---|
| [System Name] | [Previous Tier] | [Current Tier] | [Reason] | [Date] |
| [System Name] | [Previous Tier] | [Current Tier] | [Reason] | [Date] |
| [System Name] | New | [Current Tier] | Newly onboarded system | [Date] |

---

## 5. Evidence Reviewed

### 5.1 Evidence Register

*List all evidence reviewed during the BIA and mapping exercise. Evidence should be sufficient to substantiate the criticality ratings, MTD values, and gap assessments documented in this report.*

| Ref | Evidence Document | Document ID / Reference | Date | Source | Reviewed By |
|---|---|---|---|---|---|
| E-01 | Business Impact Analysis Report | [BIA Document ID] | [Date] | [Department] | [Name] |
| E-02 | Technology Asset Register | [Document ID] | [Date] | IT Department | [Name] |
| E-03 | DR Test Report — [System Name] | [Document ID] | [Date] | Technology Operations | [Name] |
| E-04 | System Architecture Diagram — [System Name] | [Document ID] | [Date] | Enterprise Architecture | [Name] |
| E-05 | Backup and Recovery Policy | [Document ID] | [Date] | Technology Risk | [Name] |
| E-06 | Vendor SLA Agreement — [Vendor Name] | [Contract Reference] | [Date] | Procurement / Legal | [Name] |
| E-07 | Business Continuity Plan — [Business Unit] | [Document ID] | [Date] | [Business Unit] | [Name] |
| E-08 | Previous BIA-to-RTO Mapping Report | [Previous Document ID] | [Date] | Technology Risk | [Name] |
| E-09 | [Additional Evidence] | [Document ID] | [Date] | [Source] | [Name] |

### 5.2 Interviews and Consultations

*Document key stakeholders consulted during the mapping exercise to support evidence of due process.*

| Name | Title | Business Unit | Date of Consultation | Topics Covered |
|---|---|---|---|---|
| [Name] | [Title] | [Business Unit] | [Date] | [Topics, e.g., MTD confirmation, system criticality] |
| [Name] | [Title] | [Business Unit] | [Date] | [Topics] |
| [Name] | [Title] | [Business Unit] | [Date] | [Topics] |

---

## 6. BIA-to-RTO/RPO Mapping

### 6.1 Consolidated Mapping Table

*This is the primary output of this report. Document the mapping between each assessed system, its BIA results, and the assigned RTO/RPO targets. Include both target (required) and achieved (current capability) values to surface gaps.*

| System ID | System Name | Business Function | Criticality Tier | BIA Score | MTD | **Target RTO** | **Target RPO** | Achieved RTO | Achieved RPO | Gap Identified | Gap Ref |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SYS-001 | [System Name] | [e.g., Core Banking] | Tier 1 | [Score] | [e.g., 4 hrs] | **2 hrs** | **15 mins** | [Actual] | [Actual] | [Yes/No] | [GAP-001] |
| SYS-002 | [System Name] | [e.g., Internet Banking] | Tier 1 | [Score] | [e.g., 4 hrs] | **2 hrs** | **15 mins** | [Actual] | [Actual] | [Yes/No] | [GAP-002] |
| SYS-003 | [System Name] | [e.g., Treasury System] | Tier 2 | [Score] | [e.g., 12 hrs] | **4 hrs** | **1 hr** | [Actual] | [Actual] | [Yes/No] | — |
| SYS-004 | [System Name] | [e.g., HR System] | Tier 3 | [Score] | [e.g., 48 hrs] | **24 hrs** | **4 hrs** | [Actual] | [Actual] | [Yes/No] | — |
| SYS-005 | [System Name] | [e.g., Email Platform] | Tier 3 | [Score] | [e.g., 72 hrs] | **24 hrs** | **4 hrs** | [Actual] | [Actual] | [Yes/No] | — |

> *Extend this table to include all in-scope systems. System IDs should correspond to entries in the Technology Asset Register.*

### 6.2 Tier 1 — Mission Critical Systems (Detailed View)

*Provide a more detailed breakdown for all Tier 1 systems, including dependency mapping and recovery strategy.*

#### SYS-001: [System Name]

| Field | Details |
|---|---|
| **System Owner** | [Name / Role] |
| **Business Function** | [Description] |
| **BIA Score** | [Score] |
| **MTD** | [Value] |
| **Target RTO** | [Value] |
| **Target RPO** | [Value] |
| **Achieved RTO** | [Value] |
| **Achieved RPO** | [Value] |
| **Recovery Strategy** | [e.g., Active-Active DR / Active-Passive DR / Backup Restore] |
| **DR Site** | [Location] |
| **Dependencies** | [List dependent systems, e.g., SYS-002, SYS-007] |
| **Last DR Test Date** | [Date] |
| **Last DR Test Result** | [Pass / Fail / Partial — reference DR test report] |
| **Gap** | [None / Description of gap] |

> *Repeat this subsection for each Tier 1 system.*

### 6.3 Tier 2 — Business Critical Systems (Detailed View)

*Provide a summary-level view for all Tier 2 systems, noting any gaps between target and achieved recovery objectives.*

| System ID | System Name | Target RTO | Achieved RTO | Target RPO | Achieved RPO | Recovery Strategy | Last Test Date | Gap |
|---|---|---|---|---|---|---|---|---|
| SYS-003 | [System Name] | [Value] | [Value] | [Value] | [Value] | [Strategy] | [Date] | [Yes/No] |
| SYS-004 | [System Name] | [Value] | [Value] | [Value] | [Value] | [Strategy] | [Date] | [Yes/No] |

---

## 7. Gap Analysis and Recommendations

### 7.1 Gap Summary

*Summarize all identified gaps where the achieved RTO/RPO does not meet the target derived from the BIA. Each gap must be linked to a recommendation and tracked through to remediation.*

| Gap Ref | System ID | System Name | Gap Type | Target | Achieved | Variance | Risk Rating | Status |
|---|---|---|---|---|---|---|---|---|
| GAP-001 | SYS-001 | [System Name] | RTO | [Target] | [Actual] | [Variance] | [High/Med/Low] | [Open/In Progress/Closed] |
| GAP-002 | SYS-002 | [System Name] | RPO | [Target] | [Actual] | [Variance] | [High/Med/Low] | [Open/In Progress/Closed] |
| GAP-003 | SYS-003 | [System Name] | Both RTO & RPO | [Target] | [Actual] | [Variance] | [High/Med/Low] | [Open/In Progress/Closed] |

### 7.2 Detailed Recommendations

*For each identified gap, provide a specific, actionable recommendation with ownership and target resolution date.*

**Recommendation REC-001 — [Title]**

| Field | Details |
|---|---|
| **Gap Reference** | GAP-001 |
| **Affected System** | [System Name] (SYS-001) |
| **Current State** | [Describe the current recovery capability and why it falls short] |
| **Recommended Action** | [Describe the specific action required, e.g., upgrade replication to synchronous mode, procure additional DR capacity] |
| **Expected Outcome** | [Describe the expected RTO/RPO improvement upon implementation] |
| **Priority** | [Critical / High / Medium / Low] |
| **Responsible Owner** | [Name / Role] |
| **Target Completion Date** | [Date] |
| **Estimated Cost** | [MYR Amount / TBD] |
| **Dependencies** | [Any dependencies on other projects, vendors, or approvals] |

---

**Recommendation REC-002 — [Title]**

| Field | Details |
|---|---|
| **Gap Reference** | GAP-002 |
| **Affected System** | [System Name] (SYS-002) |
| **Current State** | [Describe the current recovery capability] |
| **Recommended Action** | [Describe the specific action required] |
| **Expected Outcome** | [Expected improvement] |
| **Priority** | [Critical / High / Medium / Low] |
| **Responsible Owner** | [Name / Role] |
| **Target Completion Date** | [Date] |
| **Estimated Cost** | [MYR Amount / TBD] |
| **Dependencies** | [Dependencies] |

> *Add a recommendation entry for each identified gap. Recommendations must be tracked through the Technology Risk Register.*

### 7.3 Remediation Tracking

*Provide a consolidated view of remediation progress for all open gaps from current and prior periods.*

| Rec Ref | Gap Ref | System | Recommendation Summary | Owner | Target Date | Completion Date | Status | Evidence of Completion |
|---|---|---|---|---|---|---|---|---|
| REC-001 | GAP-001 | [System] | [Summary] | [Owner] | [Date] | [Date / —] | [Open / Closed] | [Reference] |
| REC-002 | GAP-002 | [System] | [Summary] | [Owner] | [Date] | [Date / —] | [In Progress] | [Reference] |

---

## 8. Roles and Responsibilities

### 8.1 RACI Matrix

*The following RACI matrix defines the responsibilities of key stakeholders in the BIA-to-RTO mapping process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of Technology Risk | Chief Risk Officer | Chief Information Officer | Business Unit Heads | System Owners | Technology Operations | Internal Audit | Technology Risk Committee |
|---|---|---|---|---|---|---|---|---|
| Define assessment scope and criteria | R | A | C | C | I | I | I | I |
| Conduct Business Impact Analysis | C | I | C | R | R | C | I | I |
| Consolidate and validate BIA results | R | I | C | C | C | I | I | A |
| Derive RTO/RPO targets from BIA | R | C | C | I | C | C | I | A |
| Validate technical recovery capabilities | C | I | R | I | C | R | I | I |
| Perform gap analysis | R | C | C | I | C | C | I | A |
| Prepare BIA-to-RTO Mapping Report | R | I | C | I | I | C | I | A |
| Review and approve report | C | A | C | I | I | I | C | A |
| Track remediation of gaps | R | I | C | C | R | C | I | I |
| Communicate findings to stakeholders | R | A | C | I | I | I | I | I |
| Present to Board / Senior Management | C | R | C | I | I | I | C | A |

### 8.2 Key Roles

| Role | Responsibilities |
|---|---|
| **Head of Technology Risk** | Document owner; oversees the mapping process; accountable for the accuracy and completeness of this report |
| **Chief Risk Officer** | Executive sponsor; final approver; escalation point for critical findings |
| **Chief Information Officer** | Technology strategy alignment; approves technology remediation investments |
| **Business Unit Heads** | Confirm MTD values; validate business impact ratings for systems within their purview |
| **System Owners** | Provide technical recovery capability data; accountable for closing assigned remediation gaps |
| **Technology Operations** | Provide DR test results; validate achieved RTO/RPO figures |
| **Internal Audit** | Independent reviewer; validates process compliance with RMiT requirements |
| **Technology Risk Committee** | Governance oversight; approves report and accepts residual risk |

---

## 9. Review and Approval

### 9.1 Review Schedule

This document is subject to the following review cadence in accordance with BNM RMiT requirements and [Organization Name]'s Technology Risk Management Framework:

| Review Type | Frequency | Trigger |
|---|---|---|
| **Scheduled Review** | Quarterly | Calendar-driven; aligned to quarterly Technology Risk Committee cycle |
| **Triggered Review — BIA Update** | Ad hoc | Following any material update to the Business Impact Analysis |
| **Triggered Review — Significant Change** | Ad hoc | Following any major system change, acquisition, or technology refresh affecting Tier 1 or Tier 2 systems |
| **Triggered Review — Incident** | Ad hoc | Following a major technology incident or DR invocation where actual recovery times deviated from targets |
| **Annual Comprehensive Review** | Annual | Full re-baselining of all BIA inputs and RTO/RPO targets |

### 9.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [Date] | [Author Name], [Title] | Initial draft |
| 0.2 | [Date] | [Author Name], [Title] | Incorporated review comments from [Reviewer] |
| 1.0 | [Date] | [Author Name], [Title] | Approved and issued |

### 9.3 Approval Sign-Off

*This document requires the following approvals prior to official issuance. Electronic or wet signatures are acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Prepared By** | [Name], Head of Technology Risk | | [Date] |
| **Reviewed By** | [Name], Chief Information Officer | | [Date] |
| **Reviewed By** | [Name], Internal Audit | | [Date] |
| **Approved By** | [Name], Chief Risk Officer | | [Date] |
| **Endorsed By** | Technology Risk Committee Chair | | [Date] |

---

## 10. References

The following regulatory documents, policies, and standards are referenced in or form the basis for this compliance artifact:

### 10.1 Regulatory References

| Reference | Document | Clause / Section | Relevance |
|---|---|---|---|
| BNM-RMIT-10.33 | BNM Risk Management in Technology (RMiT) Policy Document | **Clause 10.33** | Primary regulatory basis for this mapping; requires recovery objectives to be commensurate with business criticality |
| BNM-RMIT-G | BNM Risk Management in Technology (RMiT) Policy Document | **Part G — Business Continuity Management** | Broader BCM requirements that contextualise this mapping |
| BNM-RMIT-10.31 | BNM Risk Management in Technology (RMiT) Policy Document | **Clause 10.31** | Business Impact Analysis requirements |
| BNM-RMIT-10.32 | BNM Risk Management in Technology (RMiT) Policy Document | **Clause 10.32** | Recovery strategy requirements |
| BNM-RMIT-10.34 | BNM Risk Management in Technology (RMiT) Policy Document | **Clause 10.34** | DR testing and validation requirements |

### 10.2 Internal Policy References

| Document | Document ID | Version | Relevance |
|---|---|---|---|
| Technology Risk Management Framework | [Document ID] | [Version] | Parent framework governing this document |
| Business Continuity Management Policy | [Document ID] | [Version] | BCM policy requirements |
| Backup and Recovery Policy | [Document ID] | [Version] | Technical standards for backup and recovery |
| Technology Asset Classification Policy | [Document ID] | [Version] | System criticality tiering methodology |
| Disaster Recovery Plan | [Document ID] | [Version] | Operational recovery procedures |

---

## 11. Appendices

### Appendix A — Glossary of Terms

| Term | Definition |
|---|---|
| **BIA (Business Impact Analysis)** | A systematic process to determine and evaluate the potential effects of an interruption to critical business operations |
| **RTO (Recovery Time Objective)** | The maximum acceptable length of time that a system or application can be offline following a disruption |
| **RPO (Recovery Point Objective)** | The maximum acceptable amount of data loss measured in time; defines the point in time to which data must be recovered |
| **MTD (Maximum Tolerable Downtime)** | The total amount of time a business process can be unavailable before the survival of the organization is threatened |
| **DR (Disaster Recovery)** | The process of restoring systems, data, and infrastructure following a disaster or major disruption |
| **RACI** | Responsibility assignment matrix — Responsible, Accountable, Consulted, Informed |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk for financial institutions |
| **Tier 1 System** | Mission-critical system whose failure would cause immediate, severe disruption to business operations or regulatory obligations |

### Appendix B — System Inventory Reference

*Attach or reference the full Technology Asset Register extract used as the basis for this mapping exercise.*

| Field | Details |
|---|---|
| **Reference Document** | Technology Asset Register |
| **Document ID** | [Document ID] |
| **Version / Date** | [Version / Date] |
| **Location** | [File path / Repository link] |
| **Extract Prepared By** | [Name], [Date] |

> *Attach the relevant extract as Appendix B-1.*

### Appendix C — DR Test Results Summary

*Attach or reference the most recent DR test results for all Tier 1 and Tier 2 systems. These results form the primary evidence base for the "Achieved RTO/RPO" figures in Section 6.*

| System ID | System Name | Test Date | Test Type | Achieved RTO | Achieved RPO | Result | Test Report Reference |
|---|---|---|---|---|---|---|---|
| SYS-001 | [System Name] | [Date] | [Full DR / Partial / Tabletop] | [Value] | [Value] | [Pass / Fail / Partial] | [Document ID] |
| SYS-002 | [System Name] | [Date] | [Full DR / Partial / Tabletop] | [Value] | [Value] | [Pass / Fail / Partial] | [Document ID] |

### Appendix D — Exception Register

*Document any approved exceptions where target RTO/RPO cannot be achieved within the current reporting period and where business risk acceptance has been formally granted.*

| Exception Ref | System Name | RTO/RPO Target | Current Capability | Reason for Exception | Risk Acceptance By | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|---|
| EXC-001 | [System Name] | [Target] | [Current] | [Reason, e.g., legacy system, vendor constraint] | [Approver Name / Role] | [Date] | [Date] |

### Appendix E — Stakeholder Acknowledgement Log

*Record acknowledgements from business unit heads and system owners confirming the accuracy of MTD values and BIA inputs attributed to their areas.*

| Business Unit / System | Stakeholder Name | Title | Acknowledgement Date | Notes |
|---|---|---|---|---|
| [Business Unit / System] | [Name] | [Title] | [Date] | [Any caveats or conditions noted] |
| [Business Unit / System] | [Name] | [Title] | [Date] | |

---

*End of Document*

---

**Document Control:** This document is classified **Confidential**. It must be stored in [Organization Name]'s approved document management system and must not be transmitted externally without explicit written authorization from the Chief Risk Officer. Physical copies must be disposed of via secure shredding.