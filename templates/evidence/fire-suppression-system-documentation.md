# Fire Suppression System Documentation

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology](#3-methodology)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Evidence Reviewed](#5-evidence-reviewed)
6. [Recommendations](#6-recommendations)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

This document provides the specifications, design details, and assessment records for the fire detection and suppression systems deployed within [Organization Name]'s data centres, server rooms, and critical technology infrastructure environments. It serves as a mandatory compliance artifact under Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically addressing the physical security and environmental controls requirements under **Clause 10.27**.

This documentation supports [Organization Name]'s obligation to demonstrate that adequate controls are in place to detect, contain, and suppress fire incidents in a manner that minimises damage to critical technology assets, ensures business continuity, and protects the safety of personnel.

### 1.1 Scope of Coverage

*List all physical locations, facilities, and infrastructure components covered by this document.*

- **Facilities Covered:**
  - [Primary Data Centre — Location/Building Name]
  - [Secondary / Disaster Recovery Site — Location/Building Name]
  - [Server Rooms / Network Closets — Building Name, Floor, Room Number]
  - [Other Critical Areas — e.g., UPS rooms, tape vaults]

- **Systems Covered:**
  - Fire detection systems (smoke, heat, flame detectors)
  - Automatic fire suppression systems (gaseous, sprinkler, or other)
  - Fire alarm and notification systems
  - Manual suppression equipment (portable extinguishers)
  - Integrated monitoring and alerting infrastructure

- **Out of Scope:**
  - [List any areas, buildings, or systems explicitly excluded and state the reason]

### 1.2 Regulatory Context

| Regulatory Framework | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | Clause 10.27 | Physical access and environmental controls including fire suppression in data centres |
| [Other Applicable Standard] | [Section] | [Summary] |

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the assessment, the specific systems evaluated, and the criteria against which compliance or adequacy is measured. Reference applicable standards and internal policies.*

### 2.1 Assessment Scope

This assessment covers the fire detection and suppression systems at the following locations during the assessment period **[Assessment Start Date]** to **[Assessment End Date]**:

| # | Location | Area (sqm) | System Type | Last Assessment Date |
|---|---|---|---|---|
| 1 | [Primary Data Centre] | [Area] | [Gaseous / Sprinkler / Combined] | [Date] |
| 2 | [DR Site] | [Area] | [System Type] | [Date] |
| 3 | [Server Room — Floor/Building] | [Area] | [System Type] | [Date] |
| 4 | [Add rows as required] | | | |

### 2.2 Assessment Criteria

*List the standards, benchmarks, and internal policies used to evaluate the adequacy and compliance of the systems.*

The following criteria were applied during this assessment:

- **Regulatory Requirements:**
  - BNM RMiT Clause 10.27 — Physical and environmental controls
  - [Any other BNM circular or guideline reference]

- **Industry Standards:**
  - [e.g., NFPA 75: Standard for the Fire Protection of Information Technology Equipment]
  - [e.g., ISO/IEC 27001:2022 Annex A — Physical and Environmental Security]
  - [e.g., BS EN 15004 / FM-200 / Novec 1230 design standards]
  - [e.g., SIRIM / Jabatan Bomba dan Penyelamat Malaysia (JBPM) requirements]

- **Internal Policies:**
  - [Organization Name] Physical Security Policy (Document ID: [Ref])
  - [Organization Name] Data Centre Operations Manual (Document ID: [Ref])
  - [Organization Name] Business Continuity Plan (Document ID: [Ref])

### 2.3 Assessment Criteria Thresholds

| Criteria Category | Satisfactory Threshold | Marginal Threshold | Unsatisfactory Threshold |
|---|---|---|---|
| Detection Coverage | ≥ 100% of critical area | 90–99% | < 90% |
| Suppression Agent Adequacy | Full design concentration met | Within 5% of design | > 5% below design |
| System Certification | Current and valid | Expiring within 60 days | Expired |
| Maintenance Compliance | All scheduled tasks completed | 1 overdue item | ≥ 2 overdue items |
| Staff Awareness | ≥ 90% trained | 75–89% trained | < 75% trained |

---

## 3. Methodology

*Describe the methods and processes used to assess, verify, and document the fire suppression systems. Include both technical inspection activities and document review processes.*

### 3.1 Assessment Approach

This assessment was conducted using a combination of the following methods:

| Method | Description | Performed By |
|---|---|---|
| Physical Site Inspection | On-site walkthrough and visual inspection of detection and suppression hardware | [Assessor Name / Team] |
| Document Review | Review of engineering drawings, certificates, maintenance logs, and vendor reports | [Assessor Name / Team] |
| Testing and Verification | Review of commissioning test reports and live/simulated activation records | [Assessor Name / Team] |
| Stakeholder Interviews | Interviews with facilities and IT operations staff | [Assessor Name / Team] |
| Third-Party Audit Results | Review of findings from licensed fire safety consultants / JBPM inspections | [Assessor Name / Team] |

### 3.2 System Specifications Review

*Document the core technical specifications of each system assessed. Complete one sub-table per location or system.*

**System: [System Name / Location]**

| Parameter | Specification | Actual / Installed Value | Compliant? |
|---|---|---|---|
| System Type | [e.g., Clean Agent — FM-200 / Novec 1230 / CO2] | [Value] | [Yes / No] |
| Design Concentration (%) | [Manufacturer / Standard Requirement] | [Value] | [Yes / No] |
| Discharge Time (seconds) | ≤ 10 seconds (typical) | [Value] | [Yes / No] |
| Detector Type | [Smoke / Heat / Multi-sensor] | [Value] | [Yes / No] |
| Detector Coverage (per unit) | [Design standard value] | [Value] | [Yes / No] |
| Alarm Integration | Connected to BMS / CCTV / SOC | [Yes / No] | [Yes / No] |
| Manual Override / Abort | Present and functional | [Yes / No] | [Yes / No] |
| Agent Cylinder Pressure | [Design pressure] | [Value] | [Yes / No] |
| Last Full Discharge Test | [Date] | [Date] | [Yes / No] |
| Certificate Validity | [Issuing Body — e.g., JBPM] | [Expiry Date] | [Yes / No] |

### 3.3 Assessment Timeline

| Activity | Planned Date | Actual Date | Status |
|---|---|---|---|
| Scope definition and criteria review | [Date] | [Date] | [Completed / Pending] |
| Document and evidence collection | [Date] | [Date] | [Completed / Pending] |
| Physical site inspection — [Location 1] | [Date] | [Date] | [Completed / Pending] |
| Physical site inspection — [Location 2] | [Date] | [Date] | [Completed / Pending] |
| Stakeholder interviews | [Date] | [Date] | [Completed / Pending] |
| Draft findings preparation | [Date] | [Date] | [Completed / Pending] |
| Management review and sign-off | [Date] | [Date] | [Completed / Pending] |

---

## 4. Findings and Ratings

*Summarise the findings from the assessment for each location and system. Assign an overall rating and document all identified gaps, non-conformances, or areas of concern.*

### 4.1 Overall Assessment Rating

| Location / System | Overall Rating | Summary |
|---|---|---|
| [Primary Data Centre] | [Satisfactory / Marginal / Unsatisfactory] | [Brief summary] |
| [DR Site] | [Satisfactory / Marginal / Unsatisfactory] | [Brief summary] |
| [Server Room — Location] | [Satisfactory / Marginal / Unsatisfactory] | [Brief summary] |

**Rating Scale:**

| Rating | Definition |
|---|---|
| **Satisfactory** | All criteria met; no material gaps identified |
| **Marginal** | Minor gaps identified; remediation required within agreed timeline |
| **Unsatisfactory** | Significant gaps identified; immediate remediation required |

### 4.2 Detailed Findings

*For each finding, complete one row in the table below. Assign a unique finding reference and link to supporting evidence where applicable.*

| Finding Ref | Location | System Component | Observation | Gap / Non-Conformance | Risk Level | Evidence Ref |
|---|---|---|---|---|---|---|
| F-001 | [Location] | [Component] | [Detailed observation] | [Gap description] | [High / Medium / Low] | [Doc / Photo Ref] |
| F-002 | [Location] | [Component] | [Detailed observation] | [Gap description] | [Risk Level] | [Ref] |
| F-003 | [Location] | [Component] | [Detailed observation] | [Gap description] | [Risk Level] | [Ref] |
| [Add rows as required] | | | | | | |

### 4.3 Compliance Status Summary

| RMiT Clause | Requirement | Status | Finding Ref |
|---|---|---|---|
| 10.27 | Fire detection systems installed in data centres | [Compliant / Partial / Non-Compliant] | [F-00x] |
| 10.27 | Automatic suppression systems operational | [Compliant / Partial / Non-Compliant] | [F-00x] |
| 10.27 | Systems tested and certified by authorised body | [Compliant / Partial / Non-Compliant] | [F-00x] |
| 10.27 | Maintenance schedule current and documented | [Compliant / Partial / Non-Compliant] | [F-00x] |
| 10.27 | Staff trained in fire emergency procedures | [Compliant / Partial / Non-Compliant] | [F-00x] |

---

## 5. Evidence Reviewed

*List all documents, records, certificates, and physical evidence reviewed during the assessment. Each item should be traceable and retained as part of the compliance file.*

### 5.1 Documentary Evidence

| # | Document Title | Document ID / Reference | Version / Date | Source | Reviewed By |
|---|---|---|---|---|---|
| E-001 | Fire Suppression System Engineering Drawing | [Ref] | [Date] | [Vendor / Internal] | [Name] |
| E-002 | System Commissioning Report | [Ref] | [Date] | [Vendor] | [Name] |
| E-003 | JBPM Fire Certificate / Occupation Certificate | [Cert No.] | [Expiry Date] | JBPM | [Name] |
| E-004 | Annual Maintenance Service Report | [Ref] | [Date] | [Service Provider] | [Name] |
| E-005 | Agent Cylinder Inspection Record | [Ref] | [Date] | [Service Provider] | [Name] |
| E-006 | Discharge Test Report | [Ref] | [Date] | [Service Provider] | [Name] |
| E-007 | Fire Drill / Emergency Evacuation Records | [Ref] | [Date] | Facilities Management | [Name] |
| E-008 | Staff Fire Safety Training Records | [Ref] | [Date] | HR / Facilities | [Name] |
| E-009 | BMS / Alarm Integration Configuration | [Ref] | [Date] | IT Operations | [Name] |
| E-010 | Previous Assessment / Audit Report | [Ref] | [Date] | [Internal / External Auditor] | [Name] |
| [Add rows as required] | | | | | |

### 5.2 Physical Evidence

| # | Evidence Type | Location | Observation | Photo Reference |
|---|---|---|---|---|
| PE-001 | Detector placement and coverage | [Location] | [Observation notes] | [Photo ID / File] |
| PE-002 | Suppression nozzle placement | [Location] | [Observation notes] | [Photo ID / File] |
| PE-003 | Agent cylinder bank condition | [Location] | [Observation notes] | [Photo ID / File] |
| PE-004 | Control panel and annunciator | [Location] | [Observation notes] | [Photo ID / File] |
| PE-005 | Manual call points and abort switches | [Location] | [Observation notes] | [Photo ID / File] |
| PE-006 | Signage and warning labels | [Location] | [Observation notes] | [Photo ID / File] |
| [Add rows as required] | | | | | |

### 5.3 Evidence Retention

All evidence listed above is retained in accordance with [Organization Name]'s Records Management Policy (Document ID: [Ref]). Physical evidence (photographs, copies of certificates) is archived at [storage location / system name] with a retention period of **[X] years** in line with regulatory requirements.

---

## 6. Recommendations

*For each gap or finding identified in Section 4, provide a specific, actionable recommendation with an assigned owner and target remediation date.*

### 6.1 Immediate Actions (Critical / High Risk)

*Items in this category require remediation within **[30 days]** or as determined by risk severity.*

| Rec Ref | Finding Ref | Recommendation | Responsible Party | Target Date | Status |
|---|---|---|---|---|---|
| R-001 | F-00x | [Specific remediation action required] | [Department / Role] | [Date] | [Open / In Progress / Closed] |
| R-002 | F-00x | [Specific remediation action required] | [Department / Role] | [Date] | [Status] |
| [Add rows as required] | | | | | |

### 6.2 Short-Term Actions (Medium Risk)

*Items in this category require remediation within **[90 days]**.*

| Rec Ref | Finding Ref | Recommendation | Responsible Party | Target Date | Status |
|---|---|---|---|---|---|
| R-003 | F-00x | [Specific remediation action required] | [Department / Role] | [Date] | [Status] |
| R-004 | F-00x | [Specific remediation action required] | [Department / Role] | [Date] | [Status] |
| [Add rows as required] | | | | | |

### 6.3 Long-Term / Strategic Actions (Low Risk / Improvement)

*Items in this category require remediation or implementation within **[12 months]** or as part of the next budget cycle.*

| Rec Ref | Finding Ref | Recommendation | Responsible Party | Target Date | Status |
|---|---|---|---|---|---|
| R-005 | F-00x | [Specific remediation action required] | [Department / Role] | [Date] | [Status] |
| [Add rows as required] | | | | | |

### 6.4 Recommendation Tracking

All recommendations are tracked via [Organization Name]'s issue tracking / risk management system (Reference: [System Name / Register ID]). Progress updates are reported to [Relevant Committee / Management Body] on a **[monthly / quarterly]** basis until closure.

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountabilities for the maintenance, review, and compliance of fire suppression system documentation.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | [Relevant Dept Head] | Facilities Management | IT Operations | Risk & Compliance | Information Security | Internal Audit | Senior Management |
|---|---|---|---|---|---|---|---|
| System design and specification approval | A | R | C | C | C | I | I |
| Routine maintenance scheduling | I | R/A | I | I | I | I | I |
| Annual system inspection coordination | A | R | C | I | I | I | I |
| JBPM certification renewal | A | R | I | C | I | I | I |
| Assessment execution | C | R | C | A | C | I | I |
| Finding remediation (facilities-related) | A | R | I | C | I | I | I |
| Finding remediation (IT-related) | C | I | R/A | C | C | I | I |
| Staff fire safety training | I | A/R | I | I | I | I | I |
| Document review and update | A | R | C | C | I | I | I |
| Escalation of critical findings | C | R | C | A | C | I | A |
| Regulatory reporting (BNM) | I | C | I | R/A | C | I | I |
| Board / Management reporting | I | C | C | R | C | I | A |

---

## 8. Review and Approval

### 8.1 Review Frequency

This document shall be reviewed in accordance with the following schedule:

| Trigger | Review Action |
|---|---|
| **Quarterly** | Scheduled review of system status, maintenance records, and open recommendations |
| **Per-event** | Following any fire incident, false activation, system failure, or significant infrastructure change |
| **Post-assessment** | Following completion of a formal fire suppression system assessment |
| **Regulatory change** | Upon issuance of new or revised BNM guidance affecting physical security controls |

### 8.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 8.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name, Title] | | [Date] |
| Reviewed By | [Name, Title — e.g., Head of Facilities] | | [Date] |
| Reviewed By | [Name, Title — e.g., Head of IT Operations] | | [Date] |
| Reviewed By | [Name, Title — e.g., Chief Risk Officer] | | [Date] |
| Approved By | [Name, Title — e.g., Chief Operating Officer] | | [Date] |

---

## 9. References

The following regulatory frameworks, standards, and internal policies are referenced in this document:

### 9.1 Regulatory References

| Reference | Title | Issuing Body | Clause / Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.27 |
| [PDPA 2010] | Personal Data Protection Act 2010 | Parliament of Malaysia | [Relevant section, if applicable] |
| [NACSA ISMS] | National Cyber Security Agency Guidelines | NACSA | [Relevant section, if applicable] |

### 9.2 Standards and Guidelines

| Reference | Title | Issuing Body |
|---|---|---|
| NFPA 75 | Standard for the Fire Protection of Information Technology Equipment | NFPA |
| ISO/IEC 27001:2022 | Information Security Management — Annex A (Physical Security) | ISO/IEC |
| MS 1580 / BS EN 15004 | Gaseous Fire Suppression System Design Standards | SIRIM / BSI |
| [JBPM Circular / Guideline] | [Title of applicable JBPM guideline] | Jabatan Bomba dan Penyelamat Malaysia |
| [FM Approvals / UL Standards] | [Applicable product/system certification standard] | [FM / UL] |

### 9.3 Internal References

| Document ID | Title |
|---|---|
| [Ref] | [Organization Name] Physical Security Policy |
| [Ref] | [Organization Name] Data Centre Operations Manual |
| [Ref] | [Organization Name] Business Continuity Plan |
| [Ref] | [Organization Name] Records Management Policy |
| [Ref] | [Organization Name] Incident Management Policy |

---

## 10. Appendices

### Appendix A — Site Floor Plans and System Layout Drawings

*Attach or reference engineering drawings showing the layout of fire detection and suppression systems for each covered location. Drawings should indicate detector positions, nozzle placements, zone boundaries, cylinder locations, and control panel positions.*

| Drawing Reference | Location | Description | Version | Date |
|---|---|---|---|---|
| [DWG-001] | [Primary Data Centre] | Fire suppression zone layout — Floor plan | [Rev X] | [Date] |
| [DWG-002] | [DR Site] | Detector and nozzle placement drawing | [Rev X] | [Date] |
| [Add rows as required] | | | | |

> *Drawings are maintained by [Facilities Management / Engineering Department] and are available at [storage location / document management system].*

---

### Appendix B — System Certificates and Approvals

*Attach copies or provide references to all current certifications, approvals, and inspection certificates.*

| Certificate Type | Issuing Authority | Certificate Number | Issue Date | Expiry Date | Location Covered |
|---|---|---|---|---|---|
| Fire Certificate | JBPM | [Cert No.] | [Date] | [Date] | [Location] |
| System Commissioning Certificate | [Vendor / Certifying Body] | [Cert No.] | [Date] | N/A | [Location] |
| Annual Maintenance Certificate | [Service Provider] | [Cert No.] | [Date] | [Date] | [Location] |
| [Other Certificate] | [Issuing Body] | [Cert No.] | [Date] | [Date] | [Location] |

---

### Appendix C — Maintenance and Inspection Schedule

*Document the recurring maintenance and inspection schedule for all covered systems.*

| Activity | Frequency | Last Completed | Next Due | Responsible Party | Service Provider |
|---|---|---|---|---|---|
| Visual inspection of detectors and nozzles | Monthly | [Date] | [Date] | Facilities Management | [In-house / Vendor] |
| Control panel functional test | Quarterly | [Date] | [Date] | Facilities Management | [Vendor] |
| Agent cylinder pressure check | Semi-annually | [Date] | [Date] | [Vendor] | [Vendor Name] |
| Full system discharge / flow test | Annually | [Date] | [Date] | [Vendor] | [Vendor Name] |
| JBPM inspection | Annually | [Date] | [Date] | Facilities Management | JBPM |
| Staff fire safety training | Annually | [Date] | [Date] | HR / Facilities | [Internal / External Trainer] |
| Fire drill | Bi-annually | [Date] | [Date] | Facilities Management | [Internal] |

---

### Appendix D — Incident and Activation Log

*Record all fire system activations, false alarms, and related incidents for audit trail purposes.*

| # | Date / Time | Location | Incident Type | Cause | System Response | Impact | Follow-Up Action | Closed Date |
|---|---|---|---|---|---|---|---|---|
| 1 | [Date/Time] | [Location] | [Real Fire / False Alarm / System Fault] | [Cause] | [Activated / Failed to Activate / Manual Intervention] | [Impact description] | [Action taken] | [Date] |
| [Add rows as required] | | | | | | | | |

---

### Appendix E — Glossary of Terms

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia — Central bank and financial regulator of Malaysia |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk |
| JBPM | Jabatan Bomba dan Penyelamat Malaysia — Malaysia Fire and Rescue Department |
| Clean Agent | A gaseous fire suppression agent (e.g., FM-200, Novec 1230) that leaves no residue and is safe for use around IT equipment |
| BMS | Building Management System — integrated system for monitoring and controlling building services |
| RACI | Responsible, Accountable, Consulted, Informed — responsibility assignment framework |
| SOC | Security Operations Centre |
| NFPA | National Fire Protection Association |
| SIRIM | Standards and Industrial Research Institute of Malaysia |

---

*This document is classified as **Confidential**. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. All queries regarding this document should be directed to [Document Owner Name] at [Contact Details].*

*[Organization Name] | [Department] | Document ID: [Document ID] | Version 1.0*