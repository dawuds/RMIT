# Identity Verification Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IAM Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology Used](#3-methodology-used)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Access Provisioning and Deprovisioning Workflow](#5-access-provisioning-and-deprovisioning-workflow)
6. [Segregation of Duties Matrix](#6-segregation-of-duties-matrix)
7. [Periodic Access Certification Process](#7-periodic-access-certification-process)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the formal evidence record for identity verification activities conducted by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 12.8**, governing identity verification, liveness detection, and document authenticity checks for customer and user onboarding processes.

This evidence package demonstrates [Organization Name]'s compliance with the requirements for robust digital identity verification, including:

- Verification of customer and user identities through approved identity document checks
- Liveness detection to prevent spoofing and presentation attacks
- Document authenticity verification against authoritative sources
- Ongoing integrity of access provisioning and deprovisioning workflows

### 1.2 Scope

*Define the boundaries of this evidence record — specify which systems, processes, user populations, or onboarding channels are covered. Exclude any out-of-scope areas with justification.*

This evidence record applies to the following:

- **In Scope:**
  - [System/Application Name(s)] — [Brief description, e.g., digital onboarding portal, mobile banking application]
  - [User Population] — [e.g., retail customers, corporate clients, privileged internal users]
  - [Onboarding Channels] — [e.g., eKYC, face-to-face, video-based verification]
  - [Identity Verification Service Provider(s)] — [Vendor/Platform Name]

- **Out of Scope:**
  - [Excluded system or process] — [Justification]
  - [Excluded system or process] — [Justification]

### 1.3 Regulatory Context

This artifact is produced to satisfy requirements under:

| Regulation | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | 12.8 | Identity verification, liveness detection, and document checks for digital services |
| [Other Regulation, e.g., PDPA 2010] | [Section] | [Summary] |
| [BNM eKYC Policy] | [Section] | [Summary] |

---

## 2. Assessment Scope and Criteria

### 2.1 Assessment Scope

*Describe the specific assessment exercise this evidence relates to — whether it is a per-event review (e.g., triggered by an incident, system change, or new product launch) or a scheduled quarterly review. State the assessment period covered.*

| Field | Details |
|---|---|
| **Assessment Type** | [Per-Event / Quarterly Review] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Trigger / Reason** | [e.g., Quarterly scheduled review / New eKYC system deployment / Post-incident review] |
| **Assessed By** | [Assessor Name and Role] |
| **Assessment Date** | [Date of Assessment] |
| **Systems Assessed** | [System/Platform Names] |

### 2.2 Assessment Criteria

*List the specific criteria against which the identity verification controls were evaluated. Criteria should map directly to RMiT Clause 12.8 requirements and internal policy standards.*

The following criteria were applied during this assessment:

| # | Criterion | Regulatory Basis | Internal Policy Reference |
|---|---|---|---|
| C1 | Identity documents must be verified against government-issued records or authoritative databases | RMiT 12.8 | [Internal Policy Ref] |
| C2 | Liveness detection must be performed to confirm the physical presence of the individual | RMiT 12.8 | [Internal Policy Ref] |
| C3 | Document authenticity checks must detect tampering, forgery, or expired documents | RMiT 12.8 | [Internal Policy Ref] |
| C4 | Verification outcomes must be logged with sufficient audit trail | RMiT 12.8 | [Internal Policy Ref] |
| C5 | Failed verification attempts must trigger defined escalation procedures | RMiT 12.8 | [Internal Policy Ref] |
| C6 | Third-party identity verification providers must meet minimum security and accuracy standards | RMiT 12.8 | [Internal Policy Ref] |
| [C7] | [Additional criterion as applicable] | [Reference] | [Reference] |

### 2.3 Acceptance Thresholds

*State the minimum pass/fail thresholds that define satisfactory compliance for each criterion category.*

| Criterion Category | Target Threshold | Minimum Acceptable Threshold |
|---|---|---|
| Document Verification Accuracy | [e.g., ≥ 99.5%] | [e.g., ≥ 98.0%] |
| Liveness Detection True Acceptance Rate | [e.g., ≥ 99.0%] | [e.g., ≥ 97.0%] |
| Liveness Detection False Acceptance Rate | [e.g., ≤ 0.1%] | [e.g., ≤ 0.5%] |
| Audit Log Completeness | [e.g., 100%] | [e.g., 100%] |
| Escalation Response Time (Failed Verification) | [e.g., ≤ 24 hours] | [e.g., ≤ 48 hours] |

---

## 3. Methodology Used

### 3.1 Identity Verification Approach

*Describe the technical and procedural methodology used to perform identity verification. Include the tools, platforms, or third-party services used, and explain how they satisfy RMiT Clause 12.8 requirements.*

[Organization Name] employs the following methodology for identity verification:

**Document Verification:**
- [Describe method, e.g., Optical Character Recognition (OCR) of MyKad / passport data fields]
- [e.g., Machine Readable Zone (MRZ) extraction and cross-validation]
- [e.g., Real-time verification against JPNi (National Registration Department) database or equivalent]
- [e.g., Hologram and security feature detection using AI/ML-based document analysis]

**Liveness Detection:**
- [Describe method, e.g., Active liveness detection requiring randomized user actions (e.g., blink, turn head)]
- [e.g., Passive liveness detection using 3D depth analysis and texture mapping]
- [e.g., Anti-spoofing checks against printed photos, screen replay, and deepfake attacks]

**Biometric Matching:**
- [Describe method, e.g., Face matching between live capture and document photo using ISO/IEC 30107-compliant algorithm]
- [e.g., Matching confidence threshold set at [X]%]

### 3.2 Tools and Platforms

| Component | Vendor / Tool | Version | Certification / Standard |
|---|---|---|---|
| eKYC Platform | [Vendor Name] | [Version] | [e.g., ISO/IEC 30107-3, iBeta Level 2] |
| Document Verification Engine | [Vendor Name] | [Version] | [Certification] |
| Liveness Detection Module | [Vendor Name] | [Version] | [Certification] |
| Biometric Matching Algorithm | [Vendor Name] | [Version] | [Standard] |
| Audit Logging System | [Platform Name] | [Version] | [Standard] |

### 3.3 Data Handling During Verification

*Describe how personal data collected during verification is handled, stored, and retained, in compliance with PDPA 2010 and BNM data governance requirements.*

- **Data Collected:** [e.g., Document images, facial biometric data, verification transaction logs]
- **Data Retention Period:** [e.g., 7 years from account closure, per BNM guidelines]
- **Data Storage Location:** [e.g., Encrypted at rest in [System Name], hosted in Malaysia]
- **Access Controls on Verification Data:** [e.g., Role-based access limited to IAM Manager and Compliance team]
- **Data Minimisation Measures:** [e.g., Biometric templates discarded post-matching; only verification outcome retained]

---

## 4. Findings and Ratings

### 4.1 Summary of Findings

*Provide a high-level summary of the assessment outcomes. Use this section to communicate the overall compliance posture for identity verification controls during the assessment period.*

| Assessment Area | Criterion | Result | Rating | Evidence Reference |
|---|---|---|---|---|
| Document Verification | C1 — Document authenticity check | [Pass / Fail / Partial] | [Satisfactory / Requires Improvement / Unsatisfactory] | [Appendix Ref] |
| Liveness Detection | C2 — Liveness check performed | [Pass / Fail / Partial] | [Rating] | [Appendix Ref] |
| Document Authenticity | C3 — Tampering/forgery detection | [Pass / Fail / Partial] | [Rating] | [Appendix Ref] |
| Audit Logging | C4 — Audit trail completeness | [Pass / Fail / Partial] | [Rating] | [Appendix Ref] |
| Escalation Procedures | C5 — Failed verification escalation | [Pass / Fail / Partial] | [Rating] | [Appendix Ref] |
| Third-Party Providers | C6 — Provider standards compliance | [Pass / Fail / Partial] | [Rating] | [Appendix Ref] |

**Overall Assessment Rating:** [Satisfactory / Requires Improvement / Unsatisfactory]

### 4.2 Performance Metrics (Assessment Period)

*Record the quantitative performance metrics for the identity verification system during the assessment period. Source data from system logs and verification platform reports.*

| Metric | Target | Actual | Status |
|---|---|---|---|
| Total Verification Attempts | — | [Number] | — |
| Successful Verifications | — | [Number / %] | [Within target / Below target] |
| Failed Verifications | — | [Number / %] | [Within threshold / Exceeds threshold] |
| Liveness True Acceptance Rate | ≥ [X]% | [Actual %] | [Pass / Fail] |
| Liveness False Acceptance Rate | ≤ [X]% | [Actual %] | [Pass / Fail] |
| Document Verification Accuracy | ≥ [X]% | [Actual %] | [Pass / Fail] |
| Average Verification Processing Time | ≤ [X] seconds | [Actual] seconds | [Pass / Fail] |
| Fraud Cases Detected via eKYC | — | [Number] | — |

### 4.3 Identified Issues and Observations

*Document any control gaps, exceptions, or observations identified during the assessment. Each finding should include a risk rating, recommended remediation, and assigned owner.*

| Issue ID | Description | Risk Rating | Root Cause | Recommended Action | Owner | Target Resolution Date | Status |
|---|---|---|---|---|---|---|---|
| [ISS-001] | [Description of issue] | [Critical / High / Medium / Low] | [Root cause] | [Recommended action] | [Owner] | [Date] | [Open / In Progress / Closed] |
| [ISS-002] | [Description of issue] | [Rating] | [Root cause] | [Recommended action] | [Owner] | [Date] | [Status] |

### 4.4 Exceptions and Waivers

*Document any approved exceptions to identity verification controls, including the business justification, risk acceptance, and expiry date of the exception.*

| Exception ID | Description | Business Justification | Risk Accepted By | Approval Date | Expiry Date |
|---|---|---|---|---|---|
| [EXC-001] | [Exception description] | [Justification] | [Name / Role] | [Date] | [Date] |

---

## 5. Access Provisioning and Deprovisioning Workflow

### 5.1 Provisioning Workflow

*Describe the end-to-end process for provisioning access upon successful identity verification. Include the systems, approvals, and timeframes involved.*

The following workflow governs access provisioning following successful identity verification:

**Step 1 — Identity Verification Trigger**
- [e.g., Customer initiates onboarding via [Channel Name]]
- [e.g., System submits identity documents and biometric data to eKYC platform]

**Step 2 — Verification Processing**
- [e.g., eKYC platform performs document check, liveness detection, and biometric matching]
- [e.g., Verification result (Pass / Fail / Refer) returned to [System Name] within [X] seconds]

**Step 3 — Outcome Handling**
- **Pass:** [e.g., Account provisioning initiated automatically / Sent to maker-checker approval queue]
- **Fail:** [e.g., Customer notified, case logged, escalation triggered per Section 5.3]
- **Refer:** [e.g., Case escalated to manual review queue within [X] hours]

**Step 4 — Access Grant**
- [e.g., Access rights assigned per the approved role profile in [IAM System Name]]
- [e.g., Provisioning event logged in audit trail with timestamp, operator ID, and verification reference]

**Step 5 — Notification**
- [e.g., Customer / user notified via [Channel] upon successful account activation]

### 5.2 Provisioning Timeframes

| Event | Target Timeframe | Escalation Timeframe |
|---|---|---|
| Automated verification decision | [e.g., ≤ 60 seconds] | [e.g., Auto-retry after 30 seconds] |
| Manual review referral decision | [e.g., ≤ 24 business hours] | [e.g., Escalate to supervisor after 48 hours] |
| Access grant post-approval | [e.g., ≤ 1 business hour] | [e.g., IAM Manager notified after 4 hours] |

### 5.3 Deprovisioning Workflow

*Describe the process for revoking access when an account is closed, a user leaves the organisation, or access is no longer required. Emphasise timelines and audit trail requirements.*

The following workflow governs access deprovisioning:

| Trigger Event | Deprovisioning Action | Responsible Party | Timeframe | Verification Required |
|---|---|---|---|---|
| Customer account closure | Revoke all system access; archive verification records | [Role] | [e.g., Immediate / Within 24 hours] | [Yes / No] |
| Employee resignation / termination | Disable account; remove all access rights | [Role] | [e.g., Same day as exit] | [Yes / No] |
| Role change (internal transfer) | Remove old role access; provision new role access | [Role] | [e.g., Within 1 business day] | [Yes / No] |
| Dormant account (no login ≥ [X] days) | Suspend account; notify account owner | [Role] | [e.g., Automated at [X] day threshold] | [Yes / No] |
| Fraud / suspicious activity | Immediate access suspension; refer to security team | [Role] | [e.g., Immediate] | [Yes / No] |

### 5.4 Orphan Account Controls

*Describe controls in place to detect and remediate orphan accounts — accounts that remain active after the associated identity or entitlement is no longer valid.*

- [e.g., Automated reconciliation between HR system and IAM system runs [daily / weekly]]
- [e.g., Accounts with no matching HR record flagged for review within [X] business days]
- [e.g., Reconciliation report reviewed by IAM Manager and escalated to CISO if unresolved after [X] days]

---

## 6. Segregation of Duties Matrix

### 6.1 Purpose of SoD Controls

*Explain the rationale for segregation of duties within the identity verification and access management process. Reference the specific risks that SoD controls are designed to mitigate.*

Segregation of duties (SoD) controls ensure that no single individual has the ability to perform conflicting actions within the identity verification and access management lifecycle, reducing the risk of fraud, error, and unauthorised access.

### 6.2 SoD Matrix — Identity Verification and Access Management

*Map each key function across roles to identify where duties are separated. Use R = Responsible, A = Approver, and P = Prohibited to indicate SoD conflicts.*

| Function | IAM Manager | Compliance Officer | IT Operations | Business Owner | Auditor | Customer Service |
|---|---|---|---|---|---|---|
| Configure eKYC verification rules | R | A | — | — | — | — |
| Approve eKYC configuration changes | A | R | — | — | — | — |
| Process customer verification (automated) | — | — | R | — | — | — |
| Manually review referred verification cases | — | — | — | — | — | R |
| Approve manual verification override | A | — | — | R | — | P |
| Provision customer / user access | — | — | R | A | — | — |
| Approve access provisioning | A | — | P | R | — | — |
| Deprovision access | — | — | R | — | — | — |
| Approve deprovisioning | A | — | P | R | — | — |
| Perform periodic access review | — | R | — | — | A | — |
| Approve access review outcomes | A | — | — | R | — | — |
| Review audit logs | — | R | — | — | A | — |
| Modify audit logs | P | P | P | P | P | P |

**Legend:** R = Responsible | A = Approver | P = Prohibited | — = Not Applicable

### 6.3 SoD Conflict Register

*Document any known SoD conflicts that exist due to resource constraints or system limitations, along with the compensating controls in place.*

| Conflict ID | Conflicting Functions | Roles Affected | Risk Level | Compensating Control | Review Date |
|---|---|---|---|---|---|
| [SoD-001] | [Function A] and [Function B] | [Role] | [High / Medium / Low] | [Compensating control description] | [Date] |
| [SoD-002] | [Function A] and [Function B] | [Role] | [Rating] | [Compensating control description] | [Date] |

---

## 7. Periodic Access Certification Process

### 7.1 Access Certification Schedule

*Describe the frequency and trigger conditions for periodic access certification reviews. Align with the per-event or quarterly review frequency applicable to this artifact.*

| Review Type | Frequency | Trigger | Owner | Due Date |
|---|---|---|---|---|
| Quarterly Access Review | Every 3 months | Scheduled | IAM Manager | [Next Due Date] |
| Per-Event Review | As triggered | [e.g., System change, security incident, regulatory request] | IAM Manager | [Per event] |
| Annual Privileged Access Review | Annually | Scheduled | CISO | [Next Due Date] |
| Ad-hoc Review | As required | Risk-based or management request | IAM Manager | [Per request] |

### 7.2 Access Certification Workflow

*Outline the steps followed during each access certification cycle, from data extraction to remediation of identified issues.*

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Extract current access rights report from [IAM System Name] | IT Operations | Day 1 of review cycle |
| 2 | Distribute access report to Business Owners for review | IAM Manager | Day 2 |
| 3 | Business Owners confirm, modify, or revoke access for each user | Business Owner | Days 3–7 |
| 4 | IAM Manager reviews certification responses; escalates non-responses | IAM Manager | Days 8–10 |
| 5 | Approved revocations actioned in [IAM System Name] | IT Operations | Within 2 business days of approval |
| 6 | Remediation actions documented and evidence retained | IAM Manager | Upon completion |
| 7 | Certification report finalised and filed | Compliance Officer | End of review cycle |
| 8 | Summary report presented to [Governance Body, e.g., IT Risk Committee] | IAM Manager | [Next committee meeting] |

### 7.3 Certification Metrics and Reporting

*Record the outcomes of the most recent access certification cycle. This section should be updated after each review.*

| Metric | Value |
|---|---|
| **Review Period** | [Start Date] to [End Date] |
| **Total Accounts Reviewed** | [Number] |
| **Access Confirmed (No Change)** | [Number / %] |
| **Access Modified** | [Number / %] |
| **Access Revoked** | [Number / %] |
| **Non-Responses (Escalated)** | [Number / %] |
| **Orphan Accounts Identified** | [Number] |
| **Orphan Accounts Remediated** | [Number] |
| **Certification Completion Rate** | [%] |
| **Outstanding Remediations** | [Number] |

### 7.4 Escalation Procedures

*Define the escalation path when certification deadlines are missed or high-risk findings are identified.*

| Scenario | Escalation Action | Escalated To | Timeframe |
|---|---|---|---|
| Business Owner does not respond within certification window | IAM Manager issues reminder; escalates to department head | Department Head / CISO | After [X] business days |
| High-risk access finding identified | Immediate notification and expedited remediation | CISO / IT Risk Committee | Within 24 hours |
| Certification completion rate falls below [X]% | Escalation to IT Risk Committee; remediation plan required | IT Risk Committee | Within [X] business days |
| Repeated non-compliance by a business unit | Formal notification to COO / Board Risk Committee | COO / Board | [Per governance policy] |

---

## 8. Roles and Responsibilities

*This section defines the accountability and responsibility structure for the identity verification evidence process using a RACI framework.*

### 8.1 RACI Matrix

**R** = Responsible (does the work) | **A** = Accountable (owns the outcome) | **C** = Consulted | **I** = Informed

| Activity | IAM Manager | CISO | Compliance Officer | IT Operations | Business Owner | Internal Audit | Legal / DPO |
|---|---|---|---|---|---|---|---|
| Maintain identity verification policy | R | A | C | — | I | I | C |
| Oversee eKYC platform and controls | R | A | I | C | — | I | — |
| Conduct periodic access certification | R | A | C | I | R | I | — |
| Approve access provisioning requests | A | — | — | R | C | — | — |
| Perform SoD review | R | A | C | — | I | I | — |
| Investigate failed/flagged verifications | R | I | C | I | — | — | I |
| Manage third-party eKYC vendor | R | A | C | I | — | — | C |
| Produce compliance evidence records | R | A | R | I | I | C | I |
| Review and approve this document | A | C | R | — | — | — | — |
| Submit evidence to regulators | — | A | R | — | — | — | C |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 9.2 Document Review Schedule

| Review Type | Frequency | Next Review Date |
|---|---|---|
| Scheduled Review | Quarterly | [Next Review Date] |
| Per-Event Review | Upon trigger | As applicable |
| Regulatory Change Review | As required | As applicable |

### 9.3 Approval Sign-Off

*This document requires the following approvals before it is considered effective. Electronic signatures or approval records from the document management system are acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager (Owner) | [Name] | [Signature / Reference] | [Date] |
| Chief Information Security Officer | [Name] | [Signature / Reference] | [Date] |
| Compliance Officer | [Name] | [Signature / Reference] | [Date] |
| [Additional Approver Role] | [Name] | [Signature / Reference] | [Date] |

---

## 10. References

The following regulatory instruments, standards, and internal policies are referenced in this document:

| # | Reference | Issuing Body | Relevant Clause / Section | Description |
|---|---|---|---|---|
| 1 | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 12.8 | Identity verification, liveness detection, and document checks requirements |
| 2 | Personal Data Protection Act 2010 (PDPA) | Government of Malaysia | [Relevant Sections] | Personal data processing and protection obligations |
| 3 | [BNM eKYC Policy / Guideline] | Bank Negara Malaysia (BNM) | [Sections] | Electronic Know Your Customer requirements |
| 4 | [Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 (AMLA)] | Government of Malaysia | [Sections] | Customer due diligence and identification obligations |
| 5 | ISO/IEC 30107-3 | ISO/IEC | Part 3 | Biometric presentation attack detection — Testing and reporting |
| 6 | [Organization Name] Identity and Access Management Policy | [Organization Name] | [Version / Reference] | Internal IAM standards and procedures |
| 7 | [Organization Name] Data Classification Policy | [Organization Name] | [Version / Reference] | Data handling and classification standards |
| 8 | [Organization Name] Third-Party Risk Management Policy | [Organization Name] | [Version / Reference] | Vendor assessment and oversight requirements |

---

## 11. Appendices

### Appendix A — Sample Verification Transaction Log Extract

*Attach or reference a redacted extract from the identity verification platform's audit log, demonstrating the completeness of event logging for the assessment period. Personal data must be anonymised or pseudonymised before inclusion.*

| Field | Description |
|---|---|
| **Appendix Reference** | Appendix A |
| **Source System** | [eKYC Platform Name] |
| **Log Period** | [Start Date] to [End Date] |
| **Record Count** | [Number of records] |
| **Location** | [File path / document management reference] |
| **Prepared By** | [Name / Role] |

> *[Attach redacted log extract or provide document management system reference here.]*

---

### Appendix B — eKYC Vendor Compliance Certificate

*Attach the most recent compliance certificate or attestation from the identity verification service provider, confirming adherence to applicable standards (e.g., ISO/IEC 30107-3 iBeta Level 2, SOC 2 Type II).*

| Field | Description |
|---|---|
| **Appendix Reference** | Appendix B |
| **Vendor Name** | [Vendor Name] |
| **Certificate Type** | [e.g., ISO/IEC 30107-3 iBeta Level 2 Attestation] |
| **Certificate Validity** | [Issue Date] to [Expiry Date] |
| **Location** | [File path / document management reference] |

> *[Attach vendor certificate or provide document management system reference here.]*

---

### Appendix C — Access Certification Report (Most Recent Cycle)

*Attach the most recently completed access certification report, including the full list of reviewed accounts, certification outcomes, and remediation actions taken.*

| Field | Description |
|---|---|
| **Appendix Reference** | Appendix C |
| **Review Period** | [Start Date] to [End Date] |
| **Certified By** | [IAM Manager Name] |
| **Approved By** | [Approver Name / Role] |
| **Location** | [File path / document management reference] |

> *[Attach access certification report or provide document management system reference here.]*

---

### Appendix D — SoD Conflict Compensating Controls Evidence

*Attach evidence of compensating controls in place for any documented SoD conflicts listed in Section 6.3. Evidence may include enhanced monitoring reports, secondary approval records, or supervisory review logs.*

| Field | Description |
|---|---|
| **Appendix Reference** | Appendix D |
| **Conflict Reference(s)** | [SoD-001, SoD-002, …] |
| **Evidence Type** | [e.g., Enhanced monitoring report, supervisory approval records] |
| **Period Covered** | [Start Date] to [End Date] |
| **Location** | [File path / document management reference] |

> *[Attach evidence or provide document management system reference here.]*

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **eKYC** | Electronic Know Your Customer — digital identity verification process using technology to confirm customer identity |
| **Liveness Detection** | A biometric security measure that verifies a biometric sample is from a live person and not a spoof (e.g., photo, mask, deepfake) |
| **IAM** | Identity and Access Management — policies, processes, and technologies used to manage digital identities and access rights |
| **SoD** | Segregation of Duties — an internal control that ensures no single individual can execute conflicting business functions |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **Orphan Account** | An active user account with no associated active user (e.g., belonging to a former employee or closed customer) |
| **MRZ** | Machine Readable Zone — the two- or three-line zone at the bottom of passports and identity cards containing encoded identity data |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk management for financial institutions |
| **BNM** | Bank Negara Malaysia — Malaysia's central bank and primary financial services regulator |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |

---

*This document is classified as **Confidential**. Unauthorised disclosure, reproduction, or distribution is prohibited. Handle in accordance with [Organization Name]'s Data Classification Policy.*

*Document ID: [Document ID] | Version: 1.0 | Owner: IAM Manager | Last Updated: [Last Review Date]*