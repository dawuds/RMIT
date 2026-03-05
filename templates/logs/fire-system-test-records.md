# Fire System Test Records

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

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## 1. Purpose and Scope

This document serves as the official record of annual fire detection and suppression system testing conducted by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document. Specifically, this artifact addresses the physical and environmental security controls mandated under **RMiT Clause 10.27**, which requires financial institutions to implement and maintain adequate controls to protect technology infrastructure from environmental hazards, including fire.

**Purpose:** To provide a structured, auditable log of all fire system tests performed on an annual basis, capturing test outcomes, deficiencies identified, remediation actions taken, and the overall operational status of fire protection assets across all applicable facilities.

**Scope:** This record applies to all fire detection and suppression systems installed within [Organization Name]'s premises, data centres, server rooms, and technology facilities, including but not limited to:

- Primary data centre(s)
- Disaster Recovery (DR) site(s)
- Head office server rooms and IT equipment areas
- Branch network technology closets (where applicable)
- Any co-location or managed hosting facilities under contractual obligations

**Out of Scope:** General office fire safety equipment not directly associated with technology infrastructure protection (e.g., portable extinguishers in common areas) unless tested as part of an integrated fire protection assessment.

---

## 2. Asset and Item Identification

*List each fire detection and suppression asset or system component subject to testing. Each entry should be uniquely identifiable and traceable to the organization's physical asset register or CMDB.*

| Asset ID | Asset / System Name | Location / Facility | Zone / Area | Manufacturer | Model / Type | Serial Number | Installation Date |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., FM-200 Suppression System] | [e.g., Primary Data Centre, Level B1] | [e.g., Zone A – Server Hall] | [Manufacturer Name] | [Model] | [Serial No.] | [DD/MM/YYYY] |
| [ASSET-002] | [e.g., Smoke Detection Panel] | [e.g., DR Site, Server Room 1] | [e.g., Zone B – Comms Room] | [Manufacturer Name] | [Model] | [Serial No.] | [DD/MM/YYYY] |
| [ASSET-003] | [e.g., Heat Detector Array] | [e.g., Head Office, IT Room] | [e.g., Zone C – UPS Bay] | [Manufacturer Name] | [Model] | [Serial No.] | [DD/MM/YYYY] |
| [ASSET-00N] | [Add rows as required] | | | | | | |

**Total Assets Under Test:** [Number]
**Asset Register Reference:** [Document ID / System Reference for the authoritative asset register]

---

## 3. Classification and Categorisation

*Categorise each fire system asset by its type, protection tier, and criticality to business operations. This supports risk-based prioritisation of remediation and ensures that critical technology assets receive appropriate fire protection coverage.*

### 3.1 System Type Classification

| Asset ID | System Category | System Sub-Type | Protection Mechanism | Coverage Area (sqm) |
|---|---|---|---|---|
| [ASSET-001] | [Suppression] | [Gaseous – Clean Agent] | [FM-200 / Novec 1230 / CO2] | [e.g., 150] |
| [ASSET-002] | [Detection] | [Smoke – Optical / Ionisation] | [Early Warning Alarm] | [e.g., 200] |
| [ASSET-003] | [Detection] | [Heat – Fixed Temp / Rate-of-Rise] | [Thermal Alarm] | [e.g., 50] |
| [ASSET-00N] | | | | |

### 3.2 Criticality Classification

| Asset ID | Business Criticality | Supports Critical System(s) | Regulatory Relevance | Priority Tier |
|---|---|---|---|---|
| [ASSET-001] | [Critical / High / Medium / Low] | [e.g., Core Banking, Payment Systems] | [BNM RMiT Clause 10.27] | [Tier 1 / 2 / 3] |
| [ASSET-002] | [Critical / High / Medium / Low] | [e.g., DR Infrastructure] | [BNM RMiT Clause 10.27] | [Tier 1 / 2 / 3] |
| [ASSET-00N] | | | | |

**Classification Criteria Reference:** [Link to or cite the organization's asset classification policy or BNM RMiT classification framework]

---

## 4. Owner and Custodian

*Identify the accountable owner and operational custodian for each fire system asset. The owner bears accountability for ensuring testing is conducted and records are maintained; the custodian is responsible for day-to-day operational oversight and physical access.*

| Asset ID | Asset Owner (Role) | Asset Owner (Name) | Custodian (Role) | Custodian (Name) | Vendor / Service Provider | Vendor Contact |
|---|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Head of IT Infrastructure] | [Name] | [e.g., Data Centre Manager] | [Name] | [Vendor/Contractor Name] | [Contact Details] |
| [ASSET-002] | [e.g., Head of IT Infrastructure] | [Name] | [e.g., Facilities Manager] | [Name] | [Vendor/Contractor Name] | [Contact Details] |
| [ASSET-00N] | | | | | | |

**Document Owner:** QA Lead — [Name], [Department]
**Document Custodian:** [Name], [Role], [Department]

---

## 5. Status and Lifecycle Stage

*Record the current operational status and lifecycle stage of each fire system asset following the test exercise. Status must reflect post-test findings and any active remediation.*

### 5.1 Current Operational Status

| Asset ID | Pre-Test Status | Test Result | Post-Test Status | Deficiency Identified | Remediation Required | Remediation Deadline |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Operational / Degraded / Offline] | [Pass / Fail / Partial Pass] | [Operational / Degraded / Offline / Under Repair] | [Yes / No] | [Yes / No] | [DD/MM/YYYY or N/A] |
| [ASSET-002] | [Operational / Degraded / Offline] | [Pass / Fail / Partial Pass] | [Operational / Degraded / Offline / Under Repair] | [Yes / No] | [Yes / No] | [DD/MM/YYYY or N/A] |
| [ASSET-00N] | | | | | | |

### 5.2 Lifecycle Stage

| Asset ID | Lifecycle Stage | Year of Last Certification | Expected End-of-Life | Replacement / Upgrade Planned |
|---|---|---|---|---|
| [ASSET-001] | [Active / Ageing / End-of-Life / Decommissioning] | [YYYY] | [YYYY] | [Yes / No / Under Review] |
| [ASSET-002] | [Active / Ageing / End-of-Life / Decommissioning] | [YYYY] | [YYYY] | [Yes / No / Under Review] |
| [ASSET-00N] | | | | |

### 5.3 Deficiency and Remediation Log

*For each deficiency identified during testing, a separate remediation entry must be raised and tracked to closure.*

| Deficiency ID | Asset ID | Description of Deficiency | Severity | Assigned To | Target Closure Date | Actual Closure Date | Closure Evidence |
|---|---|---|---|---|---|---|---|
| [DEF-001] | [ASSET-00X] | [Description] | [Critical / High / Medium / Low] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY or Open] | [Reference / Document] |
| [DEF-00N] | | | | | | | |

**Total Deficiencies Identified:** [Number]
**Total Open Deficiencies:** [Number]
**Total Closed Deficiencies:** [Number]

---

## 6. Last Review Date

*This section records the history of testing and review events for fire system assets, providing a continuous audit trail.*

### 6.1 Testing Event Summary

| Test Event ID | Test Date | Test Type | Conducted By | Witnessed By | Location(s) Covered | Overall Outcome |
|---|---|---|---|---|---|---|
| [TEST-2025-001] | [DD/MM/YYYY] | [Annual / Ad-Hoc / Post-Incident] | [Vendor / Internal Team] | [Name, Role] | [Facility Names] | [Pass / Fail / Conditional Pass] |
| [TEST-00N] | | | | | | |

### 6.2 Testing Methodology

*Describe the testing methods employed during the annual test exercise.*

- **Detection System Test Method:** [e.g., Aerosol smoke simulation, functional alarm panel test, visual inspection of detector heads]
- **Suppression System Test Method:** [e.g., Functional simulation (no agent discharge), pressure gauge check, cylinder weight verification, discharge test (where applicable)]
- **Alarm Linkage Test:** [e.g., Verification of alarm signal transmission to monitoring station / BMS / security control room]
- **Contractor Certification Standard:** [e.g., BOMBA requirements, NFPA 72 / NFPA 2001, manufacturer service protocol]

### 6.3 Previous Review History

| Review Date | Review Type | Findings Summary | Action Status |
|---|---|---|---|
| [DD/MM/YYYY] | [Annual Test / Audit / Spot Check] | [Brief summary] | [Closed / Open / Partially Closed] |
| [DD/MM/YYYY] | | | |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability and participation across all activities associated with fire system testing and record maintenance.*

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | QA Lead | Head of IT Infrastructure | Data Centre / Facilities Manager | IT Security / Risk | Fire System Vendor / Contractor | Senior Management / EXCO | Internal Audit |
|---|---|---|---|---|---|---|---|
| Schedule annual fire system test | R | C | C | I | I | I | I |
| Engage and coordinate with vendor/contractor | C | R | A | I | R | I | I |
| Conduct physical fire system testing | I | I | C | I | R | I | I |
| Witness and validate test results | A | C | R | C | R | I | I |
| Document test records and findings | R | I | C | C | I | I | I |
| Review and approve test records | A | C | I | C | I | A | I |
| Raise deficiency remediation actions | R | A | C | C | R | I | I |
| Track and close deficiencies | R | A | R | C | R | I | C |
| Report status to senior management | A | C | I | I | I | I | I |
| Retain records per policy | R | I | I | C | I | I | I |
| Periodic compliance review / audit | C | C | C | A | I | I | R |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes / Description |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Role] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Name, Role] | [Description of changes] |
| [N.N] | [DD/MM/YYYY] | [Name, Role] | [Description of changes] |

### 8.2 Approval Sign-Off

*This document requires formal approval from the roles listed below prior to being considered effective. Physical or digital signatures are acceptable subject to [Organization Name]'s document management policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead (Document Owner) | [Name] | | [DD/MM/YYYY] |
| Head of IT Infrastructure | [Name] | | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Name] | | [DD/MM/YYYY] |
| Chief Risk Officer (CRO) / Risk Management | [Name] | | [DD/MM/YYYY] |

---

## 9. References

The following regulatory documents, standards, and internal policies are referenced by or are relevant to this compliance artifact:

| Reference | Document Title | Issuing Body | Clause / Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.27 – Physical and Environmental Security |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 10.25 – 10.30 (Physical Security Controls, broader context) |
| [Internal Policy] | Physical and Environmental Security Policy | [Organization Name] | [Section Reference] |
| [Internal Policy] | Asset Management Policy | [Organization Name] | [Section Reference] |
| [Internal Policy] | IT Risk Management Framework | [Organization Name] | [Section Reference] |
| NFPA 72 | National Fire Alarm and Signaling Code | NFPA | [Applicable Sections] |
| NFPA 2001 | Standard on Clean Agent Fire Extinguishing Systems | NFPA | [Applicable Sections] |
| [Local Standard] | Fire Services Act 1988 / BOMBA Requirements | Jabatan Bomba dan Penyelamat Malaysia | [Applicable Sections] |
| [Vendor Doc] | [Fire System Manufacturer Service Manual] | [Manufacturer Name] | [Applicable Sections] |

---

## 10. Appendices

### Appendix A – Fire System Test Checklist

*Attach or reference the standardized checklist used by the vendor/contractor during the annual test. This checklist should capture each test item, pass/fail result, and inspector sign-off.*

**Reference:** [Attach checklist document or insert Document ID: APPENDIX-A-[Document ID]]

---

### Appendix B – Vendor / Contractor Certification and Service Report

*Attach the official service report and certification issued by the appointed fire system contractor following completion of the annual test. This report serves as primary evidence for audit purposes.*

**Reference:** [Attach vendor report or insert Document ID: APPENDIX-B-[Document ID]]

---

### Appendix C – Photographic / Video Evidence Log

*Where photographic or video evidence has been captured during the test exercise, reference the evidence repository location and access path.*

| Evidence ID | Asset ID | Description | File Format | Storage Location | Captured By | Capture Date |
|---|---|---|---|---|---|---|
| [EVID-001] | [ASSET-00X] | [Description of evidence] | [JPG / MP4 / PDF] | [Network path / SharePoint / DMS reference] | [Name] | [DD/MM/YYYY] |
| [EVID-00N] | | | | | | |

---

### Appendix D – BOMBA / Fire Authority Correspondence

*Attach any official correspondence, permits, or compliance certificates issued by Jabatan Bomba dan Penyelamat Malaysia (BOMBA) or other relevant local authorities in connection with the fire system test or facility fire safety compliance.*

**Reference:** [Attach correspondence or insert Document ID: APPENDIX-D-[Document ID]]

---

### Appendix E – Remediation Tracking Evidence

*For all deficiencies raised in Section 5.3, attach supporting evidence of remediation completion (e.g., work order closure reports, re-test results, vendor confirmation).*

| Deficiency ID | Evidence Description | Document Reference | Closure Date |
|---|---|---|---|
| [DEF-001] | [Description of closure evidence] | [Document ID / attachment] | [DD/MM/YYYY] |
| [DEF-00N] | | | |

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. Retain this record in accordance with [Organization Name]'s Records Retention Policy and BNM regulatory requirements.*

*Document ID: [Document ID] | Version: 1.0 | Owner: QA Lead | Classification: Confidential*