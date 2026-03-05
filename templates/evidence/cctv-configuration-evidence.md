# CCTV Configuration Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document provides evidence of Closed-Circuit Television (CCTV) system coverage and retention configuration within [Organization Name], in compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy, specifically **Clause 10.24**. It demonstrates that physical security controls governing CCTV deployment, coverage adequacy, and the mandatory minimum 90-day footage retention policy are in place, operational, and subject to periodic verification.

### 1.1 Scope

This evidence artifact covers the following:

- All CCTV installations at premises under the management of [Organization Name], including data centres, server rooms, critical operations areas, and public-facing branches.
- CCTV recording system configurations, including storage capacity, retention settings, and overwrite policies.
- Access controls governing CCTV monitoring and recorded footage review.
- Compliance with BNM RMiT Clause 10.24 requirements for physical security surveillance.

### 1.2 Applicability

| Applies To | Details |
|---|---|
| **Business Units** | [List applicable business units, e.g., IT Infrastructure, Facilities Management, Branch Operations] |
| **Locations** | [List covered sites, e.g., Head Office, Data Centre A, Branch Network] |
| **Systems** | [List CCTV systems and NVR/DVR platforms in scope] |
| **Regulatory Basis** | BNM RMiT Policy Document (Revised [Year]), Clause 10.24 |

---

## 2. Assessment Scope and Criteria

*Define the boundaries of this evidence collection exercise, the regulatory criteria against which coverage and configuration are assessed, and any exclusions with justification.*

### 2.1 Assessment Scope

The following locations and systems were included in this evidence collection exercise:

| # | Site / Location | Area Covered | CCTV System / Platform | In Scope |
|---|---|---|---|---|
| 1 | [Head Office – Floor B1 Data Centre] | [Server room entry/exit, raised floor area] | [NVR Platform Name / Model] | Yes |
| 2 | [Head Office – Operations Floor] | [Trading floor, server racks, UPS room] | [NVR Platform Name / Model] | Yes |
| 3 | [Branch – [Branch Name]] | [Teller counters, vault access, ATM lobby] | [DVR Platform Name / Model] | Yes |
| 4 | [Disaster Recovery Site] | [DR data centre perimeter, access corridors] | [NVR Platform Name / Model] | Yes |
| [N] | [Additional Site] | [Area Description] | [System] | [Yes/No] |

### 2.2 Assessment Criteria

Compliance of each CCTV installation is assessed against the following criteria:

| Criterion | Regulatory Basis | Required Standard |
|---|---|---|
| Camera coverage of all critical ingress/egress points | BNM RMiT Clause 10.24 | 100% coverage with no blind spots at access points |
| Minimum footage retention period | BNM RMiT Clause 10.24 | 90 calendar days (minimum) |
| Recording continuity (24/7 operation) | BNM RMiT Clause 10.24 | Continuous recording; alerts on failure |
| Access control to recorded footage | BNM RMiT Clause 10.24 | Role-based; access log maintained |
| Storage health and overwrite policy | [Organization Name] Internal Policy [Ref] | No premature overwrite; alerts on low storage |
| Tamper detection / system integrity | [Organization Name] Internal Policy [Ref] | Alerts on camera tampering or feed loss |

### 2.3 Exclusions

| Excluded Item | Justification |
|---|---|
| [Excluded location/system] | [Reason for exclusion, e.g., under renovation, managed by third party under separate evidence] |

---

## 3. Methodology

*Describe the methods used to collect, verify, and validate CCTV configuration evidence, including tools, inspection approaches, and sampling rationale.*

### 3.1 Evidence Collection Approach

The following methods were used to collect and validate evidence for this artifact:

- **Configuration Screenshots / Exports** — Direct screenshots or configuration exports from each NVR/DVR management console, capturing retention settings, recording schedules, and storage parameters.
- **Physical Walkthrough Inspection** — On-site inspection of camera placement, coverage angles, and condition at each in-scope location.
- **Storage Calculation Review** — Verification that installed storage capacity is sufficient to sustain 90-day minimum retention at the configured bitrate and resolution.
- **Access Log Review** — Review of system access logs for the CCTV management platform to confirm role-based access is enforced.
- **Live Playback Test** — Spot-check retrieval of footage at the 89th or 90th day boundary to confirm retention is honoured in practice.
- **Alert / Notification Configuration Review** — Verification that automated alerts are configured for camera failures, storage thresholds, and recording interruptions.

### 3.2 Sampling Rationale

*Describe any sampling approach used if full population testing was not performed.*

| Site Type | Population | Sample Size | Sampling Method |
|---|---|---|---|
| Data Centres | [N] sites | [N] sites | 100% (full population) |
| Branch Network | [N] branches | [N] branches | [Random / Risk-based] sampling |
| Administrative Offices | [N] sites | [N] sites | [Random / Risk-based] sampling |

### 3.3 Evidence Collection Period

| Field | Details |
|---|---|
| **Evidence Collection Date(s)** | [DD Month YYYY] to [DD Month YYYY] |
| **Conducted By** | [Name, Role, Department] |
| **Assisted By** | [Name, Role — e.g., IT Infrastructure Team, Facilities Management] |
| **Tools / Platforms Used** | [e.g., NVR Management Console v[X], [System Name], MS Excel for storage calculations] |

---

## 4. Findings and Ratings

*Record the findings from the assessment of each location and system, including compliance ratings and identified gaps.*

### 4.1 Overall Compliance Summary

| Control Area | Sites Assessed | Compliant | Non-Compliant | Partial | Overall Rating |
|---|---|---|---|---|---|
| Camera Coverage Adequacy | [N] | [N] | [N] | [N] | [Compliant / Partial / Non-Compliant] |
| 90-Day Retention Configuration | [N] | [N] | [N] | [N] | [Compliant / Partial / Non-Compliant] |
| Recording Continuity (24/7) | [N] | [N] | [N] | [N] | [Compliant / Partial / Non-Compliant] |
| Access Control to Footage | [N] | [N] | [N] | [N] | [Compliant / Partial / Non-Compliant] |
| Storage Health & Overwrite Policy | [N] | [N] | [N] | [N] | [Compliant / Partial / Non-Compliant] |
| Tamper Detection / Alerts | [N] | [N] | [N] | [N] | [Compliant / Partial / Non-Compliant] |

**Rating Scale:** Compliant = All criteria met | Partial = Minor gaps identified; remediation in progress | Non-Compliant = Material gaps; immediate remediation required

### 4.2 Site-Level Findings

#### 4.2.1 [Site Name / Location 1]

| Field | Details |
|---|---|
| **Site** | [Location Name] |
| **CCTV System** | [NVR/DVR Model, Firmware Version] |
| **Number of Cameras** | [N] |
| **Configured Retention** | [N] days |
| **Storage Capacity** | [X] TB |
| **Estimated Storage at 90 Days** | [X] TB |
| **Storage Sufficiency** | [Sufficient / Insufficient] |
| **Recording Schedule** | [Continuous 24/7 / Motion-triggered — note if motion-only is a gap] |
| **Compliance Rating** | [Compliant / Partial / Non-Compliant] |

**Findings:**

- [Finding 1: e.g., Retention is configured at 92 days, exceeding the 90-day minimum requirement.]
- [Finding 2: e.g., Camera [Cam ID] covering [area] has a partial obstruction reducing coverage effectiveness.]
- [Finding 3: e.g., No automated alert configured for storage threshold. Manual monitoring only.]

#### 4.2.2 [Site Name / Location 2]

*Repeat subsection structure above for each site assessed.*

| Field | Details |
|---|---|
| **Site** | [Location Name] |
| **CCTV System** | [NVR/DVR Model, Firmware Version] |
| **Number of Cameras** | [N] |
| **Configured Retention** | [N] days |
| **Storage Capacity** | [X] TB |
| **Estimated Storage at 90 Days** | [X] TB |
| **Storage Sufficiency** | [Sufficient / Insufficient] |
| **Recording Schedule** | [Continuous 24/7] |
| **Compliance Rating** | [Compliant / Partial / Non-Compliant] |

**Findings:**

- [Finding 1]
- [Finding 2]

### 4.3 Gap Register

*List all identified gaps, their severity, and current remediation status.*

| Gap ID | Site | Control Area | Gap Description | Severity | Remediation Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| GAP-001 | [Site Name] | [Control Area] | [Description of gap] | [High / Medium / Low] | [Name / Role] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| GAP-002 | [Site Name] | [Control Area] | [Description of gap] | [High / Medium / Low] | [Name / Role] | [DD/MM/YYYY] | [Open / In Progress / Closed] |
| GAP-[N] | | | | | | | |

---

## 5. Evidence Reviewed

*List all documentary and technical evidence reviewed and collected to support the findings in this artifact. Attach or reference each piece of evidence.*

| Evidence Ref | Evidence Type | Description | Location / Reference | Date Obtained | Obtained By |
|---|---|---|---|---|---|
| EV-001 | Configuration Screenshot | NVR retention setting — [Site Name] | [Appendix A / SharePoint Link / File Path] | [DD/MM/YYYY] | [Name] |
| EV-002 | Configuration Screenshot | NVR recording schedule — [Site Name] | [Appendix A] | [DD/MM/YYYY] | [Name] |
| EV-003 | Storage Calculation Worksheet | Storage sufficiency analysis — all sites | [Appendix B] | [DD/MM/YYYY] | [Name] |
| EV-004 | Physical Inspection Report | Camera placement walkthrough — [Site Name] | [Appendix C] | [DD/MM/YYYY] | [Name] |
| EV-005 | Access Log Export | CCTV system user access log — [Period] | [Appendix D / File Reference] | [DD/MM/YYYY] | [Name] |
| EV-006 | Live Playback Test Record | 90-day boundary footage retrieval test — [Site Name] | [Appendix E] | [DD/MM/YYYY] | [Name] |
| EV-007 | Alert Configuration Screenshot | Storage threshold and camera failure alerts — [Site Name] | [Appendix F] | [DD/MM/YYYY] | [Name] |
| EV-[N] | [Evidence Type] | [Description] | [Reference] | [DD/MM/YYYY] | [Name] |

---

## 6. Recommendations

*Provide specific, actionable recommendations to address identified gaps and strengthen the overall CCTV control environment.*

### 6.1 Priority Recommendations

| Rec. ID | Priority | Recommendation | Addresses Gap | Responsible Owner | Recommended Completion |
|---|---|---|---|---|---|
| REC-001 | **High** | [e.g., Configure automated storage threshold alerts on all NVR systems to trigger at 85% capacity, ensuring sufficient warning before storage exhaustion risks retention compliance.] | GAP-001 | [IT Infrastructure Manager] | [DD/MM/YYYY] |
| REC-002 | **High** | [e.g., Relocate / re-angle Camera [ID] at [Site] to eliminate the identified blind spot at [access point].] | GAP-002 | [Facilities Manager] | [DD/MM/YYYY] |
| REC-003 | **Medium** | [e.g., Formalise a quarterly CCTV compliance check procedure with standardised evidence capture templates to reduce reliance on ad-hoc reviews.] | — | [Information Security Manager] | [DD/MM/YYYY] |
| REC-004 | **Medium** | [e.g., Upgrade NVR firmware at [Site] to the current vendor-supported version to address known vulnerabilities and improve reliability.] | GAP-[N] | [IT Infrastructure Manager] | [DD/MM/YYYY] |
| REC-005 | **Low** | [e.g., Consider increasing retention beyond 90 days (e.g., 180 days) for data centre and critical infrastructure sites to support forensic investigations.] | — | [CISO / IT Manager] | [DD/MM/YYYY] |

### 6.2 Management Response

*Document management's formal response to each recommendation, including acceptance, rejection (with rationale), or proposed alternative control.*

| Rec. ID | Management Response | Response Owner | Response Date |
|---|---|---|---|
| REC-001 | [Accepted / Accepted with Modification / Rejected — provide rationale] | [Name, Role] | [DD/MM/YYYY] |
| REC-002 | [Accepted / Accepted with Modification / Rejected] | [Name, Role] | [DD/MM/YYYY] |
| REC-003 | [Accepted / Accepted with Modification / Rejected] | [Name, Role] | [DD/MM/YYYY] |
| REC-004 | [Accepted / Accepted with Modification / Rejected] | [Name, Role] | [DD/MM/YYYY] |
| REC-005 | [Accepted / Accepted with Modification / Rejected] | [Name, Role] | [DD/MM/YYYY] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines the roles and responsibilities for the creation, maintenance, review, and approval of this artifact.*

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | [Relevant Department Head] | [IT Infrastructure Manager] | [Facilities Manager] | [Information Security Manager] | [Internal Audit] | [CISO] |
|---|---|---|---|---|---|---|
| Define CCTV coverage requirements | C | R | R | C | I | A |
| Configure and maintain CCTV systems | I | R | R | C | I | A |
| Conduct evidence collection (configuration) | I | R | C | C | C | A |
| Conduct physical inspection | I | C | R | C | C | A |
| Prepare this evidence artifact | C | R | C | C | I | A |
| Review findings and ratings | A | C | C | R | C | I |
| Approve this artifact | A | I | I | C | I | R |
| Remediate identified gaps | C | R | R | C | I | A |
| Retain and archive this document | I | C | I | R | I | A |
| Report compliance status to governance | I | I | I | R | C | A |

---

## 8. Review and Approval

### 8.1 Review Frequency

This artifact is subject to review on the following basis:

- **Scheduled Review:** Quarterly, or as required by the [Organization Name] RMiT compliance review calendar.
- **Event-Triggered Review:** Upon any of the following trigger events:
  - Installation or decommissioning of CCTV cameras or recording systems.
  - Change in retention configuration or storage infrastructure.
  - Identification of a recording failure or footage gap exceeding 24 hours.
  - Material change to in-scope premises (e.g., new branch opening, data centre relocation).
  - BNM regulatory examination, internal audit finding, or incident investigation.

### 8.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Role] | Initial document created. |
| [1.1] | [DD/MM/YYYY] | [Name, Role] | [Description of changes, e.g., Added findings for Q2 review cycle; updated gap register.] |
| [2.0] | [DD/MM/YYYY] | [Name, Role] | [Description of changes] |

### 8.3 Approval Sign-Off

*By signing below, the approver confirms that the contents of this document have been reviewed and are accurate to the best of their knowledge.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], [Title] | _________________ | [DD/MM/YYYY] |
| Reviewed By | [Name], [Information Security Manager] | _________________ | [DD/MM/YYYY] |
| Reviewed By | [Name], [IT Infrastructure Manager] | _________________ | [DD/MM/YYYY] |
| Approved By | [Name], [Relevant Department Head] | _________________ | [DD/MM/YYYY] |
| Endorsed By | [Name], [Chief Information Security Officer] | _________________ | [DD/MM/YYYY] |

---

## 9. References

The following regulatory documents and internal policies are referenced by this artifact:

| Reference | Document | Clause / Section | Description |
|---|---|---|---|
| [REF-01] | BNM Risk Management in Technology (RMiT) Policy Document | **Clause 10.24** | Physical security controls, including CCTV surveillance requirements and minimum 90-day footage retention. |
| [REF-02] | BNM Risk Management in Technology (RMiT) Policy Document | [Related Clause, e.g., 10.20–10.23] | Broader physical access and environmental controls applicable to data centres and critical areas. |
| [REF-03] | [Organization Name] Physical Security Policy | [Section/Ref] | Internal policy governing physical security standards across all premises. |
| [REF-04] | [Organization Name] Information Security Policy | [Section/Ref] | Overarching information security requirements applicable to surveillance systems. |
| [REF-05] | [Organization Name] Data Retention and Disposal Policy | [Section/Ref] | Internal retention and secure disposal requirements applicable to recorded CCTV footage. |
| [REF-06] | Personal Data Protection Act 2010 (PDPA) | [Relevant Sections] | Obligations regarding the collection, storage, and use of personal data captured via CCTV. |
| [REF-07] | [Vendor NVR/DVR System Documentation] | [Reference] | Technical documentation for the CCTV recording platforms in scope. |

---

## 10. Appendices

### Appendix A — CCTV Retention Configuration Screenshots

*Attach screenshots of the NVR/DVR management console for each in-scope site, clearly showing the configured retention period and recording schedule. Each screenshot should be labelled with the site name, system name, date captured, and the name of the person who captured it.*

| Appendix Ref | Site | System | Date Captured | Captured By | Attached |
|---|---|---|---|---|---|
| A-01 | [Site Name] | [NVR/DVR System] | [DD/MM/YYYY] | [Name] | [Yes / See attached file] |
| A-02 | [Site Name] | [NVR/DVR System] | [DD/MM/YYYY] | [Name] | [Yes / See attached file] |
| A-[N] | | | | | |

---

### Appendix B — Storage Sufficiency Calculation

*Provide a storage calculation for each site demonstrating that installed storage capacity is sufficient to sustain the minimum 90-day retention period at the configured recording resolution and bitrate.*

**Formula:** Required Storage (TB) = (Number of Cameras × Bitrate (Mbps) × 86,400 seconds × 90 days) ÷ (8 × 1,000,000)

| Site | No. of Cameras | Resolution | Avg. Bitrate (Mbps) | Required Storage (TB) | Installed Storage (TB) | Sufficient? |
|---|---|---|---|---|---|---|
| [Site Name] | [N] | [1080p / 720p] | [X] Mbps | [X.X] TB | [X.X] TB | [Yes / No] |
| [Site Name] | [N] | [Resolution] | [X] Mbps | [X.X] TB | [X.X] TB | [Yes / No] |
| **Total** | | | | **[X.X] TB** | **[X.X] TB** | |

---

### Appendix C — Physical Inspection Checklist and Camera Placement Records

*Attach completed physical inspection checklists for each site, including camera placement diagrams or floor plan overlays showing camera positions and coverage zones.*

| Appendix Ref | Site | Inspection Date | Inspector | Floor Plan Attached |
|---|---|---|---|---|
| C-01 | [Site Name] | [DD/MM/YYYY] | [Name, Role] | [Yes / No] |
| C-[N] | | | | |

---

### Appendix D — CCTV System Access Log Extract

*Attach an extract of the CCTV system access log for the review period, covering user logins, footage retrieval events, and configuration changes. Sensitive personal data should be minimised in accordance with PDPA obligations.*

| Appendix Ref | Site / System | Log Period | Date Extracted | Extracted By |
|---|---|---|---|---|
| D-01 | [Site / NVR System] | [DD/MM/YYYY] to [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] |

---

### Appendix E — Live Playback Test Records

*Document the results of spot-check footage retrieval tests conducted at or near the 90-day retention boundary, confirming that footage is accessible and has not been prematurely overwritten.*

| Test Ref | Site | Test Date | Footage Requested (Date/Time) | Days Ago | Retrieval Successful | Tested By |
|---|---|---|---|---|---|---|
| E-01 | [Site Name] | [DD/MM/YYYY] | [DD/MM/YYYY HH:MM] | [89 / 90] | [Yes / No] | [Name] |
| E-02 | [Site Name] | [DD/MM/YYYY] | [DD/MM/YYYY HH:MM] | [90] | [Yes / No] | [Name] |

---

### Appendix F — Alert and Notification Configuration Evidence

*Attach screenshots or configuration exports demonstrating that automated alerts are configured for CCTV system events including camera failure, recording interruption, and storage threshold warnings.*

| Appendix Ref | Site / System | Alert Type | Configured Threshold | Recipient(s) | Screenshot Attached |
|---|---|---|---|---|---|
| F-01 | [Site / System] | Storage threshold warning | [85% capacity] | [IT Team Distribution List] | [Yes] |
| F-02 | [Site / System] | Camera feed loss | [Immediate on loss] | [IT On-Call, Security Ops] | [Yes] |
| F-03 | [Site / System] | Recording failure | [Immediate] | [IT On-Call] | [Yes] |

---

*This document is classified **Confidential** and is intended solely for use by authorised personnel of [Organization Name] and relevant regulatory bodies. Unauthorised disclosure, reproduction, or distribution is prohibited.*

*Document ID: [Document ID] | Version 1.0 | [Organization Name] | © [Year]*