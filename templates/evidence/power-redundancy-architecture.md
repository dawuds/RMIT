# Power Redundancy Architecture

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document provides evidence of [Organization Name]'s redundant power supply architecture for critical IT infrastructure, demonstrating compliance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.26**, which requires financial institutions to implement resilient power infrastructure to ensure continuity of technology operations.

This document covers all data centre facilities, server rooms, and network equipment rooms operated or managed by [Organization Name], including primary and disaster recovery sites.

---

## 2. Assessment Scope and Criteria

*Identify the systems, facilities, and infrastructure components included in this assessment, and define the criteria used to evaluate adequacy of power redundancy.*

### 2.1 Facilities in Scope

| Facility Name | Location | Role | Criticality |
|---|---|---|---|
| [Primary Data Centre] | [Location] | Primary | Critical |
| [DR Site / Colocation] | [Location] | Disaster Recovery | Critical |
| [Branch Server Room] | [Location] | Branch Operations | High |

### 2.2 Assessment Criteria

- Compliance with BNM RMiT Clause 10.26 requirements for power redundancy
- Alignment with [Organization Name]'s IT Disaster Recovery and Business Continuity Policy
- Industry standards referenced: **TIA-942**, **Uptime Institute Tier Classification**, **IEC 62040** (UPS standards)
- Minimum redundancy requirement: **N+1** configuration for all critical systems; **2N** for Tier 1 infrastructure
- Maximum tolerable power outage (RTO for power restoration): [e.g., 0 minutes – continuous operation required]

---

## 3. Methodology

*Describe the approach, tools, and processes used to assess and document the power redundancy design.*

The assessment was conducted using the following methodology:

- **Site walkthrough and physical inspection** of power distribution units, UPS systems, and generator installations
- **Review of engineering diagrams** including single-line electrical diagrams and power distribution schematics
- **Load testing and capacity verification** against manufacturer specifications and actual operational loads
- **Interview with** [Facilities Manager / External Electrical Engineer / Data Centre Operations Team]
- **Review of maintenance and service records** for all power redundancy equipment
- **Testing records review** including scheduled UPS battery tests and generator run tests

Assessment Period: [Assessment Start Date] to [Assessment End Date]
Conducted By: [Assessor Name / Team]

---

## 4. Findings and Ratings

*Summarise the findings from the assessment for each power redundancy component. Assign a compliance rating and note any gaps.*

### 4.1 UPS Systems

| UPS Unit ID | Location | Capacity (kVA) | Current Load (kW) | Load % | Redundancy Config | Battery Runtime | Rating |
|---|---|---|---|---|---|---|---|
| [UPS-01] | [Primary DC – Room A] | [e.g., 200 kVA] | [e.g., 120 kW] | [60%] | [N+1] | [e.g., 15 min] | [Compliant / Non-Compliant] |
| [UPS-02] | [Primary DC – Room B] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| [UPS-DR-01] | [DR Site] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

**UPS Findings Summary:**
- [Finding 1: e.g., All UPS units at the primary data centre operate below 70% load threshold.]
- [Finding 2: e.g., Battery runtime supports operations until generator start-up within defined RTO.]
- [Gap identified, if any: e.g., UPS-02 battery replacement is overdue per maintenance schedule.]

### 4.2 Generator Systems

| Generator ID | Location | Capacity (kVA) | Fuel Type | Fuel Tank Capacity | Autonomy (hrs) | Auto-Transfer | Last Test Date | Rating |
|---|---|---|---|---|---|---|---|---|
| [GEN-01] | [Primary DC] | [e.g., 500 kVA] | [Diesel] | [e.g., 2,000 L] | [e.g., 72 hrs] | [Yes / No] | [Date] | [Compliant / Non-Compliant] |
| [GEN-DR-01] | [DR Site] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

**Generator Findings Summary:**
- [Finding 1: e.g., Automatic Transfer Switch (ATS) transfers load within 10 seconds of mains failure.]
- [Finding 2: e.g., Fuel supply agreement in place for emergency replenishment within 24 hours.]
- [Gap identified, if any: e.g., Fuel polishing has not been performed within the recommended 12-month cycle.]

### 4.3 Power Distribution and Redundancy Configuration

| Component | Standard | Actual Configuration | Gap | Rating |
|---|---|---|---|---|
| Power Distribution Units (PDUs) | Dual-feed, separate circuits | [e.g., Dual-feed PDUs installed] | [None / Gap] | [ ] |
| Network Equipment Power | Dual PSU with separate UPS feeds | [e.g., All core switches dual-homed] | [None / Gap] | [ ] |
| Server Power Supplies | Dual PSU | [e.g., 95% of servers dual PSU] | [5% single PSU] | [ ] |
| Cooling (power dependency) | Redundant CRAC/CRAH | [e.g., N+1 cooling units] | [None / Gap] | [ ] |

### 4.4 Overall Compliance Rating

| Area | Rating | Remarks |
|---|---|---|
| UPS Redundancy | [Compliant / Partially Compliant / Non-Compliant] | [ ] |
| Generator Capacity and Autonomy | [ ] | [ ] |
| Power Distribution | [ ] | [ ] |
| Testing and Maintenance | [ ] | [ ] |
| **Overall** | **[ ]** | [ ] |

---

## 5. Evidence Reviewed

*List all documents, records, test results, and artefacts reviewed during the assessment to support findings above.*

| # | Evidence Item | Document Reference | Date | Source |
|---|---|---|---|---|
| 1 | Single-line electrical diagram – Primary DC | [Ref No.] | [Date] | [Facilities / External Engineer] |
| 2 | UPS load and capacity reports | [Ref No.] | [Date] | [UPS Management Software / Vendor] |
| 3 | Generator service and maintenance records | [Ref No.] | [Date] | [Generator Vendor / Facilities] |
| 4 | UPS battery test results | [Ref No.] | [Date] | [IT Operations] |
| 5 | Generator load test results (monthly run logs) | [Ref No.] | [Date] | [Facilities] |
| 6 | Fuel supply agreement / SLA | [Ref No.] | [Date] | [Procurement] |
| 7 | Data centre floor plan with power zone layout | [Ref No.] | [Date] | [Facilities] |
| 8 | IT asset inventory with PSU configuration | [Ref No.] | [Date] | [IT Operations] |
| 9 | [Additional Evidence] | [ ] | [ ] | [ ] |

---

## 6. Recommendations

*List all recommendations arising from gaps or weaknesses identified in the assessment. Each recommendation should be actionable and assigned an owner and target date.*

| # | Finding / Gap | Recommendation | Priority | Owner | Target Completion Date | Status |
|---|---|---|---|---|---|---|
| 1 | [e.g., UPS-02 battery overdue for replacement] | [Replace UPS-02 battery cells per manufacturer schedule] | High | [Head of IT Operations] | [Date] | [Open / In Progress / Closed] |
| 2 | [e.g., Fuel polishing not performed] | [Engage fuel polishing contractor and establish annual schedule] | Medium | [Facilities Manager] | [Date] | [ ] |
| 3 | [e.g., 5% of servers on single PSU] | [Prioritise dual PSU upgrade for remaining single-PSU critical servers] | Medium | [Head of IT Operations] | [Date] | [ ] |
| 4 | [e.g., No formal fuel resupply SLA] | [Formalise emergency fuel delivery SLA with minimum 2 suppliers] | High | [Procurement] | [Date] | [ ] |

---

## 7. Sign-off and Approval

*This section records the formal review and approval of this document by accountable personnel.*

### 7.1 Prepared and Reviewed By

| Role | Name | Department | Date | Signature |
|---|---|---|---|---|
| Prepared By | [Name] | IT Operations | [Date] | |
| Reviewed By | [Name] | IT Risk / Information Security | [Date] | |
| Facilities Review | [Name] | Facilities / Data Centre Management | [Date] | |

### 7.2 Approval

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of IT Operations | [Name] | | [Date] |
| Chief Information Officer (CIO) | [Name] | | [Date] |
| Chief Risk Officer (CRO) / IT Risk Committee | [Name] | | [Date] |

> **Note:** This document is subject to the approval workflow defined in [Organization Name]'s Document Management Policy. Approved copies are maintained in the central compliance document repository.

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the creation, maintenance, and review of this document and the underlying power redundancy controls.*

| Activity | Head of IT Ops | IT Risk / CISO | Facilities Manager | CIO | External Auditor |
|---|---|---|---|---|---|
| Define power redundancy requirements | A/R | C | C | I | I |
| Design and implement redundancy architecture | A/R | I | R | I | — |
| Conduct periodic testing (UPS / generator) | R | I | A/R | I | — |
| Maintain service and maintenance records | R | I | A/R | I | — |
| Review and update this document | A/R | C | C | I | — |
| Approve this document | C | C | I | A | — |
| Independent review / audit | I | R | I | I | A/R |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 9. References

| Reference | Description |
|---|---|
| BNM RMiT, Clause 10.26 | Requires financial institutions to implement redundant power supply arrangements for critical IT infrastructure to ensure continuous availability. |
| [Organization Name] IT Disaster Recovery Policy | Internal policy governing RTO/RPO targets and infrastructure resilience requirements. |
| [Organization Name] Business Continuity Plan (BCP) | Documents power failure as a credible threat scenario and defines response procedures. |
| TIA-942 | Data centre telecommunications infrastructure standard, including power redundancy tier classifications. |
| Uptime Institute Tier Classification Standard | Defines Tier I–IV infrastructure requirements including power path redundancy. |
| IEC 62040-3 | Performance requirements and test methods for UPS systems. |

---

## 10. Review and Approval History

### 10.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation. |
| [1.1] | [Date] | [Author Name] | [e.g., Updated UPS capacity figures following hardware refresh.] |

### 10.2 Review Schedule

This document shall be reviewed:
- **Per-event**: Following any significant change to power infrastructure, a UPS or generator failure, a power outage incident, or a data centre move/expansion.
- **Quarterly**: As part of the scheduled IT operations and technology risk review cycle.
- **Ad hoc**: As directed by the IT Risk Committee, internal audit, or BNM examination.

---

## Appendices

### Appendix A – Power Architecture Diagrams

*Attach or reference the current single-line electrical diagram(s) showing UPS topology, generator connections, automatic transfer switches, and power distribution paths for each in-scope facility.*

| Diagram | Reference | Version | Date |
|---|---|---|---|
| Primary DC – Single-Line Electrical Diagram | [Ref No.] | [Version] | [Date] |
| DR Site – Single-Line Electrical Diagram | [Ref No.] | [Version] | [Date] |
| UPS Topology Diagram | [Ref No.] | [Version] | [Date] |

### Appendix B – UPS and Generator Test Logs

*Attach or reference the most recent test records for all UPS battery discharge tests and generator load/run tests. Tests should be conducted at least [quarterly / semi-annually] per [Organization Name]'s maintenance schedule.*

- UPS Battery Test Report – [Period]: [Reference / Attachment]
- Generator Monthly Run Log – [Period]: [Reference / Attachment]
- Generator Full-Load Test Report – [Period]: [Reference / Attachment]

### Appendix C – Maintenance and Service Contracts

*List active maintenance contracts for all UPS and generator equipment, including vendor SLA terms relevant to response time for critical failures.*

| Equipment | Vendor | Contract Ref | SLA Response Time | Contract Expiry |
|---|---|---|---|---|
| [UPS-01, UPS-02] | [Vendor Name] | [Contract No.] | [e.g., 4 hours on-site] | [Date] |
| [GEN-01] | [Vendor Name] | [Contract No.] | [e.g., 8 hours on-site] | [Date] |

### Appendix D – Glossary

| Term | Definition |
|---|---|
| UPS | Uninterruptible Power Supply – provides emergency power when the main supply fails. |
| ATS | Automatic Transfer Switch – automatically switches load to an alternative power source. |
| N+1 | Redundancy configuration providing one additional component beyond the minimum required. |
| 2N | Full redundancy configuration with two complete, independent power paths. |
| RTO | Recovery Time Objective – maximum tolerable time to restore a system or service. |
| CRAC/CRAH | Computer Room Air Conditioning / Computer Room Air Handler. |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name] and relevant regulatory bodies. Unauthorised disclosure is prohibited.*