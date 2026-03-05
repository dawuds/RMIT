# IDS/IPS Deployment Documentation

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

This document provides architecture and deployment documentation for the Intrusion Detection System (IDS) and Intrusion Prevention System (IPS) deployed within [Organization Name]. It serves as evidence of compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.39**, which requires financial institutions to implement detective controls capable of identifying and responding to anomalous network behaviour and potential security incidents.

**Scope:** This document covers all IDS/IPS components deployed across [Organization Name]'s network perimeter, internal network segments, and critical system boundaries, including cloud-hosted and on-premises environments as applicable.

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the IDS/IPS deployment and the criteria used to determine coverage requirements. Include network zones, asset classifications, and regulatory thresholds that drove design decisions.*

### 2.1 Deployment Scope

| Zone | Description | IDS/IPS Coverage | Justification |
|---|---|---|---|
| Internet Perimeter | External-facing DMZ | [Yes / No] | [Rationale] |
| Internal Network | Core LAN segments | [Yes / No] | [Rationale] |
| Critical Systems Segment | Core banking, payment systems | [Yes / No] | [Rationale] |
| Cloud Environment | [Cloud Provider / Region] | [Yes / No] | [Rationale] |
| Third-Party Connections | Vendor and partner links | [Yes / No] | [Rationale] |

### 2.2 Coverage Criteria

*List the criteria applied to determine where IDS/IPS controls are required, referencing asset criticality, data sensitivity, and regulatory obligations.*

- **Asset Criticality:** All Tier 1 and Tier 2 systems as classified under [Organization Name]'s Asset Classification Policy
- **Data Sensitivity:** All segments handling Personally Identifiable Information (PII), financial data, or payment card data
- **Regulatory Threshold:** Compliance with BNM RMiT Clause 10.39 and applicable NACSA requirements
- **Risk Appetite:** [Reference to applicable risk appetite statement or threshold]

---

## 3. Methodology

*Describe the approach used to design, select, and deploy the IDS/IPS solution, including evaluation frameworks, vendor selection criteria, and implementation methodology.*

### 3.1 Solution Selection Methodology

| Criterion | Weight | Selected Solution Score | Rationale |
|---|---|---|---|
| Detection Capability | [%] | [Score] | [Rationale] |
| Performance Impact | [%] | [Score] | [Rationale] |
| Integration with SIEM | [%] | [Score] | [Rationale] |
| Vendor Support & Patching | [%] | [Score] | [Rationale] |
| Total Cost of Ownership | [%] | [Score] | [Rationale] |

### 3.2 Deployment Methodology

- **Implementation Standard:** [e.g., NIST SP 800-94, vendor best practice]
- **Deployment Mode:** [Inline (IPS) / Passive (IDS) / Hybrid]
- **Traffic Inspection Method:** [Signature-based / Anomaly-based / Hybrid]
- **Change Management Reference:** [Change Request ID / CAB Approval Reference]
- **Testing Approach:** [e.g., pre-production validation, red team simulation, signature tuning period]

---

## 4. Architecture and Deployment Findings

*Document the current as-deployed architecture, including component placement, traffic flow, and integration points. Attach network diagrams as appendices.*

### 4.1 Deployed Components

| Component | Vendor / Product | Version | Deployment Location | Mode | Last Updated |
|---|---|---|---|---|---|
| Perimeter IPS | [Vendor] [Product] | [Version] | [Location / Host] | Inline | [Date] |
| Internal IDS | [Vendor] [Product] | [Version] | [Location / Host] | Passive | [Date] |
| Management Console | [Vendor] [Product] | [Version] | [Location / Host] | N/A | [Date] |
| SIEM Integration | [SIEM Platform] | [Version] | [Location / Host] | Log forwarding | [Date] |

### 4.2 Deployment Ratings

*Assess each deployment area against defined criteria. Use the ratings: **Compliant**, **Partially Compliant**, **Non-Compliant**, or **Not Applicable**.*

| Area | Rating | Findings | Risk Level |
|---|---|---|---|
| Perimeter Coverage | [Rating] | [Finding summary] | [High / Medium / Low] |
| Internal Segmentation Coverage | [Rating] | [Finding summary] | [High / Medium / Low] |
| Signature Currency | [Rating] | [Finding summary] | [High / Medium / Low] |
| Alert Tuning & False Positive Rate | [Rating] | [Finding summary] | [High / Medium / Low] |
| SIEM / SOC Integration | [Rating] | [Finding summary] | [High / Medium / Low] |
| Incident Response Linkage | [Rating] | [Finding summary] | [High / Medium / Low] |

### 4.3 Network Architecture Summary

*Provide a high-level description of the IDS/IPS placement within the network topology. Attach the detailed network diagram in Appendix A.*

[Describe traffic flow, tap/span configurations, inline placement points, and management network segregation. Reference Appendix A for the network diagram.]

---

## 5. Evidence Reviewed

*List all artifacts, logs, configuration exports, and documentation reviewed as evidence of deployment and operational effectiveness.*

| Evidence Item | Document / Reference | Date Obtained | Reviewed By |
|---|---|---|---|
| Network topology diagram | [Document ID / Title] | [Date] | [Reviewer Name] |
| IDS/IPS configuration export | [System / Reference] | [Date] | [Reviewer Name] |
| Signature update logs | [System / Reference] | [Date] | [Reviewer Name] |
| Alert and incident logs (sample) | [System / Reference] | [Date] | [Reviewer Name] |
| SIEM integration configuration | [Document ID / Title] | [Date] | [Reviewer Name] |
| Change management records | [CAB Reference] | [Date] | [Reviewer Name] |
| Vendor support agreement | [Contract Reference] | [Date] | [Reviewer Name] |
| Previous audit or assessment report | [Document ID / Title] | [Date] | [Reviewer Name] |

---

## 6. Recommendations

*Document all remediation actions, improvements, and follow-up items arising from findings. Link each recommendation to its corresponding finding.*

| Ref | Finding | Recommendation | Priority | Responsible Owner | Target Completion Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | [Finding description] | [Recommended action] | [High / Medium / Low] | [Owner] | [Date] | [Open / In Progress / Closed] |
| REC-002 | [Finding description] | [Recommended action] | [High / Medium / Low] | [Owner] | [Date] | [Open / In Progress / Closed] |
| REC-003 | [Finding description] | [Recommended action] | [High / Medium / Low] | [Owner] | [Date] | [Open / In Progress / Closed] |

---

## 7. Roles and Responsibilities

*The table below defines accountability for the IDS/IPS deployment and ongoing management using the RACI model (R = Responsible, A = Accountable, C = Consulted, I = Informed).*

| Activity | [CISO / Head of IT Security] | [IT Operations] | [SOC / Security Analyst] | [Risk & Compliance] | [Internal Audit] |
|---|---|---|---|---|---|
| IDS/IPS architecture design | C | R | C | I | I |
| Deployment and configuration | I | R | C | I | I |
| Signature and rule management | A | R | R | I | I |
| Alert monitoring and triage | A | I | R | I | I |
| Incident escalation | A | C | R | I | I |
| Compliance evidence maintenance | C | I | C | R | I |
| Periodic review and audit | A | C | C | R | R |
| Document approval | A | I | I | C | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document created |
| [x.x] | [Date] | [Author Name] | [Description of changes] |

### 8.2 Review Schedule

- **Review Trigger:** Per-event (material changes to network architecture, new threats, significant incidents) or quarterly, whichever occurs first
- **Next Scheduled Review:** [Next Review Date]

### 8.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| [Relevant Department Head] | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Risk Officer / Risk Manager | [Name] | __________________ | [Date] |
| Head of IT Operations | [Name] | __________________ | [Date] |

---

## 9. References

| Reference | Description |
|---|---|
| BNM RMiT, Clause 10.39 | Requirement for detective controls, including IDS/IPS, to identify anomalous behaviour and potential intrusions |
| BNM RMiT, Clause 10.38 | Network security architecture and segmentation controls |
| Personal Data Protection Act 2010 (PDPA) | Data protection obligations relevant to monitoring personal data in transit |
| NACSA Security Standards | National Cyber Security Agency requirements applicable to Critical National Information Infrastructure (CNII) operators |
| NIST SP 800-94 | Guide to Intrusion Detection and Prevention Systems |
| [Organization Name] Information Security Policy | [Document ID] |
| [Organization Name] Incident Response Plan | [Document ID] |
| [Organization Name] Network Security Architecture Policy | [Document ID] |

---

## Appendices

### Appendix A — Network Architecture Diagram

*Attach the approved network topology diagram showing IDS/IPS sensor and enforcement point placement, traffic flow directions, management interfaces, and SIEM log forwarding paths.*

[Diagram attached / Reference: [Diagram ID and Version]]

### Appendix B — IDS/IPS Rule and Signature Baseline

*Attach or reference the approved baseline ruleset, including custom rules, suppressed signatures, and tuning rationale.*

[Reference: [Configuration Baseline Document ID]]

### Appendix C — Alert Thresholds and Escalation Matrix

*Document alert severity thresholds, automated response actions, and the escalation path from SOC analyst through to incident commander.*

[Reference: [SOC Runbook / Escalation Matrix Document ID]]

### Appendix D — Vendor and Support Information

| Item | Details |
|---|---|
| Vendor Name | [Vendor Name] |
| Product Name | [Product Name] |
| Support Contract Reference | [Contract ID] |
| Support Expiry Date | [Date] |
| Patch / Update SLA | [e.g., Critical patches applied within 72 hours] |
| Vendor Contact | [Name / Email / Phone] |

---

*This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. Retain in accordance with [Organization Name]'s Records Retention Policy.*