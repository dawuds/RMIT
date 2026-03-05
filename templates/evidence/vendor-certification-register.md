# Vendor Certification Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Vendor Management |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

*This section defines the intent and boundaries of the Vendor Certification Register. Describe what the register covers and why it exists in the context of regulatory obligations.*

This Vendor Certification Register is maintained in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 14.2**, which requires financial institutions to exercise ongoing oversight of critical third-party service providers (CTSPs). The register serves as the authoritative record of the certification, compliance, and assurance status of all vendors classified as critical to [Organization Name]'s technology and operational landscape.

**Scope** covers all third-party providers that:

- Host, process, transmit, or provide access to customer or institutional data
- Provide critical technology infrastructure, platforms, or managed services
- Are classified as Critical Third-Party Service Providers (CTSPs) under BNM RMiT criteria
- Support regulated business functions or core banking operations

This register is **system-generated** and updated on a **per-event or quarterly** basis, whichever is sooner. Events triggering an update include vendor onboarding, certification renewal, audit findings, material service changes, or risk re-tiering decisions.

---

## 2. Asset and Item Identification

*Record each vendor as a distinct register entry. Each entry must have a unique identifier to enable traceability across risk assessments, contracts, and audit evidence.*

| Field | Description |
|---|---|
| **Register Entry ID** | Unique identifier assigned to each vendor record (e.g., VCR-2024-001) |
| **Vendor Name** | Full legal entity name of the third-party provider |
| **Trading Name / Brand** | Common or trading name if different from legal name |
| **Registered Address** | Principal place of business or registered office address |
| **Country of Incorporation** | Jurisdiction of legal registration |
| **Primary Contact** | Name and contact details of vendor relationship owner |
| **Date of Onboarding** | Date the vendor was formally engaged |
| **Contract Reference** | Reference number of the master services agreement or contract |
| **Services Provided** | Summary of services or systems provided to [Organization Name] |

### 2.1 Active Vendor Register

| Entry ID | Vendor Name | Country | Services Provided | Contract Ref | Onboarding Date | Status |
|---|---|---|---|---|---|---|
| VCR-[YYYY]-[NNN] | [Vendor Legal Name] | [Country] | [Service Description] | [Contract Ref] | [DD/MM/YYYY] | Active / Inactive / Under Review |
| VCR-[YYYY]-[NNN] | [Vendor Legal Name] | [Country] | [Service Description] | [Contract Ref] | [DD/MM/YYYY] | Active / Inactive / Under Review |

---

## 3. Classification and Categorisation

*Classify each vendor according to its criticality, data sensitivity, and operational dependency. This classification drives the depth of due diligence and oversight applied.*

### 3.1 Criticality Classification

| Classification | Definition |
|---|---|
| **Critical** | Vendor failure or compromise would materially disrupt regulated operations, customer data, or core banking functions |
| **Important** | Vendor supports significant business functions but substitution is feasible within defined recovery timeframes |
| **Standard** | Vendor provides non-critical services with low operational or data risk exposure |

### 3.2 Vendor Categorisation Table

| Entry ID | Vendor Name | Criticality Classification | Service Category | Data Sensitivity | Cloud/On-Premise | Regulatory Dependency |
|---|---|---|---|---|---|---|
| VCR-[YYYY]-[NNN] | [Vendor Name] | Critical / Important / Standard | [e.g., Cloud Hosting / Payment Processing / IT Support] | [Public / Internal / Confidential / Restricted] | [Cloud / On-Premise / Hybrid] | [Yes / No — cite regulation if applicable] |
| VCR-[YYYY]-[NNN] | [Vendor Name] | Critical / Important / Standard | [Service Category] | [Data Sensitivity] | [Deployment Model] | [Yes / No] |

### 3.3 Service Category Definitions

*Use the categories below consistently across all register entries to enable aggregated reporting and trend analysis.*

- **Cloud Infrastructure** — IaaS, PaaS, or SaaS hosting of institutional or customer systems
- **Payment Processing** — Clearing, settlement, switching, or payment gateway services
- **Cybersecurity Services** — SOC, MSSP, vulnerability management, or identity services
- **Core Banking Platform** — CBS vendor or system integrator
- **Data and Analytics** — Business intelligence, reporting, or data processing
- **IT Support and Maintenance** — Managed IT services, helpdesk, or infrastructure support
- **Communications** — Email, messaging, or unified communications platforms
- **Other** — [Specify]

---

## 4. Owner and Custodian

*Assign accountability for each vendor relationship. Each vendor must have a named business owner and a designated IT custodian to ensure dual oversight.*

### 4.1 Ownership Framework

| Role | Responsibility |
|---|---|
| **Business Owner** | Accountable for the commercial relationship, service performance, and risk acceptance decisions |
| **IT Custodian** | Responsible for technical integration, access management, and system-level controls |
| **Vendor Manager** | Day-to-day management of the vendor relationship, escalation point, and register maintenance |
| **Risk Owner** | Accountable for accepting residual risks associated with the vendor engagement |

### 4.2 Owner and Custodian Register

| Entry ID | Vendor Name | Business Owner | Business Unit | IT Custodian | Vendor Manager | Risk Owner | Last Confirmed Date |
|---|---|---|---|---|---|---|---|
| VCR-[YYYY]-[NNN] | [Vendor Name] | [Name], [Title] | [Department] | [Name], [Title] | [Name], [Title] | [Name], [Title] | [DD/MM/YYYY] |
| VCR-[YYYY]-[NNN] | [Vendor Name] | [Name], [Title] | [Department] | [Name], [Title] | [Name], [Title] | [Name], [Title] | [DD/MM/YYYY] |

---

## 5. Vendor Risk Tiering Criteria

*Define the methodology and scoring criteria used to assign each vendor to a risk tier. Tiering must be documented, defensible, and consistently applied across all CTSPs.*

### 5.1 Risk Tiering Methodology

Risk tiering is conducted using a weighted scoring model across the following dimensions:

| Dimension | Weight | Description |
|---|---|---|
| **Operational Criticality** | 30% | Impact of vendor failure on service continuity and regulated functions |
| **Data Sensitivity** | 25% | Nature and volume of data accessed, processed, or stored by the vendor |
| **Substitutability** | 15% | Ease and speed of replacing the vendor in the event of failure or termination |
| **Concentration Risk** | 15% | Degree to which multiple critical functions depend on a single vendor |
| **Jurisdictional Risk** | 10% | Country risk, cross-border data transfer, and regulatory jurisdiction exposure |
| **Financial Stability** | 5% | Vendor's financial health and ability to sustain service delivery |

### 5.2 Risk Tier Definitions

| Tier | Score Range | Oversight Level | Review Frequency |
|---|---|---|---|
| **Tier 1 — High Risk** | 75–100 | Enhanced due diligence, on-site audit rights, quarterly review | Quarterly |
| **Tier 2 — Medium Risk** | 40–74 | Standard due diligence, annual audit, semi-annual review | Semi-Annual |
| **Tier 3 — Low Risk** | 0–39 | Baseline due diligence, biennial review | Annual |

### 5.3 Vendor Risk Tier Summary

| Entry ID | Vendor Name | Criticality Score | Risk Tier | Tier Assignment Date | Next Re-Tiering Date | Assigned By |
|---|---|---|---|---|---|---|
| VCR-[YYYY]-[NNN] | [Vendor Name] | [Score] | Tier 1 / 2 / 3 | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] |
| VCR-[YYYY]-[NNN] | [Vendor Name] | [Score] | Tier 1 / 2 / 3 | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] |

---

## 6. Due Diligence Checklist

*Record the due diligence activities completed for each vendor at onboarding and on each periodic review cycle. All evidence artefacts must be referenced and archived.*

### 6.1 Due Diligence Framework

Due diligence is conducted at two stages:

- **Pre-Engagement Due Diligence** — Completed before contract execution
- **Periodic Due Diligence** — Conducted per the vendor's assigned risk tier review frequency

### 6.2 Pre-Engagement Due Diligence Checklist

| # | Due Diligence Item | Required For | Completed | Evidence Reference | Completed By | Date |
|---|---|---|---|---|---|---|
| DD-01 | Vendor financial stability assessment (audited financial statements) | All Tiers | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-02 | Legal and regulatory standing verification (company registration, licences) | All Tiers | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-03 | Information security policy review | Tier 1 & 2 | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-04 | Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP) review | Tier 1 & 2 | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-05 | ISO 27001 or equivalent certification verification | Tier 1 | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-06 | SOC 2 Type II report review | Tier 1 | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-07 | Personal data protection compliance review (PDPA 2010) | All Tiers (data processing) | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-08 | Sub-contractor and fourth-party risk disclosure | Tier 1 & 2 | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-09 | On-site or virtual audit / assessment | Tier 1 | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-10 | Penetration test results or security assessment report | Tier 1 | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-11 | Data residency and cross-border transfer confirmation | All Tiers (data processing) | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |
| DD-12 | Conflict of interest and sanctions screening | All Tiers | Yes / No / N/A | [Doc Ref] | [Name] | [DD/MM/YYYY] |

### 6.3 Certification Status Tracker

*Record each active certification held by the vendor. Certifications must be validated against issuing body records where possible.*

| Entry ID | Vendor Name | Certification / Standard | Issuing Body | Certificate Number | Issue Date | Expiry Date | Verification Status | Evidence Ref |
|---|---|---|---|---|---|---|---|---|
| VCR-[YYYY]-[NNN] | [Vendor Name] | ISO 27001:2022 | [Certification Body] | [Cert No.] | [DD/MM/YYYY] | [DD/MM/YYYY] | Verified / Pending / Expired | [Doc Ref] |
| VCR-[YYYY]-[NNN] | [Vendor Name] | SOC 2 Type II | [Audit Firm] | [Report Ref] | [DD/MM/YYYY] | [DD/MM/YYYY] | Verified / Pending / Expired | [Doc Ref] |
| VCR-[YYYY]-[NNN] | [Vendor Name] | PCI DSS v4.0 | [QSA Firm] | [AOC Ref] | [DD/MM/YYYY] | [DD/MM/YYYY] | Verified / Pending / Expired | [Doc Ref] |
| VCR-[YYYY]-[NNN] | [Vendor Name] | [Other Certification] | [Issuing Body] | [Cert No.] | [DD/MM/YYYY] | [DD/MM/YYYY] | Verified / Pending / Expired | [Doc Ref] |

---

## 7. SLA and KPI Definitions

*Document the contractually agreed service levels and key performance indicators for each vendor. These metrics form the basis of ongoing performance monitoring and evidence of vendor oversight.*

### 7.1 SLA and KPI Framework

Service Level Agreements (SLAs) and Key Performance Indicators (KPIs) are established at contract execution and reviewed no less than annually. Breaches must be reported to the Head of Vendor Management and escalated to the Risk Committee where thresholds are exceeded for two consecutive periods.

### 7.2 SLA Register

| Entry ID | Vendor Name | SLA Category | SLA Description | Target Level | Measurement Period | Reporting Method | Consequence of Breach |
|---|---|---|---|---|---|---|---|
| VCR-[YYYY]-[NNN] | [Vendor Name] | Availability | System uptime | ≥ 99.9% monthly | Monthly | Automated dashboard | Service credit + escalation |
| VCR-[YYYY]-[NNN] | [Vendor Name] | Incident Response | P1 incident acknowledgement | ≤ 15 minutes | Per-incident | Ticketing system | Escalation to account director |
| VCR-[YYYY]-[NNN] | [Vendor Name] | Recovery Time | RTO for critical services | ≤ 4 hours | Per-incident | Post-incident report | Formal breach notice |
| VCR-[YYYY]-[NNN] | [Vendor Name] | Data Reporting | Compliance report submission | Quarterly, by day 10 | Quarterly | Email / portal | Penalty per contract |
| VCR-[YYYY]-[NNN] | [Vendor Name] | Security Patching | Critical vulnerability remediation | ≤ 72 hours | Per-event | Vulnerability report | Escalation + risk acceptance |

### 7.3 KPI Performance Summary

*Updated quarterly or per-event. Indicates whether the vendor is meeting agreed performance targets.*

| Entry ID | Vendor Name | Review Period | Availability (%) | Incident Response Compliance (%) | Patch Compliance (%) | Overall Performance Rating | Action Required |
|---|---|---|---|---|---|---|---|
| VCR-[YYYY]-[NNN] | [Vendor Name] | [Q1/Q2/Q3/Q4 YYYY] | [%] | [%] | [%] | Green / Amber / Red | [Action or None] |
| VCR-[YYYY]-[NNN] | [Vendor Name] | [Q1/Q2/Q3/Q4 YYYY] | [%] | [%] | [%] | Green / Amber / Red | [Action or None] |

---

## 8. Exit Strategy Requirements

*Document the exit strategy for each critical vendor to ensure [Organization Name] can maintain operational continuity in the event of contract termination, vendor failure, or regulatory direction to exit.*

### 8.1 Exit Strategy Policy

In accordance with BNM RMiT Clause 14.2, [Organization Name] must maintain a documented, tested, and executable exit strategy for all Tier 1 vendors and for Tier 2 vendors providing services with no direct substitutes. Exit strategies must be reviewed at least annually and upon any material change to the vendor relationship.

### 8.2 Exit Strategy Register

| Entry ID | Vendor Name | Risk Tier | Exit Trigger Scenarios | Alternative Provider(s) Identified | Estimated Transition Period | Last Exit Strategy Review | Exit Plan Document Ref | Exit Plan Tested |
|---|---|---|---|---|---|---|---|---|
| VCR-[YYYY]-[NNN] | [Vendor Name] | Tier 1 | Contract expiry; Vendor insolvency; Regulatory direction; Performance failure; Security breach | [Provider Name(s)] | [e.g., 6 months] | [DD/MM/YYYY] | [Doc Ref] | Yes / No / Partial |
| VCR-[YYYY]-[NNN] | [Vendor Name] | Tier 1 | [Triggers] | [Provider Name(s)] | [Timeline] | [DD/MM/YYYY] | [Doc Ref] | Yes / No / Partial |
| VCR-[YYYY]-[NNN] | [Vendor Name] | Tier 2 | [Triggers] | [Provider Name(s)] | [Timeline] | [DD/MM/YYYY] | [Doc Ref] | Yes / No / Partial |

### 8.3 Exit Readiness Checklist

| # | Exit Readiness Requirement | Applicable Tiers | Status | Evidence Reference | Last Validated |
|---|---|---|---|---|---|
| EX-01 | Data portability and return procedures documented in contract | All Tiers | Complete / In Progress / Not Started | [Doc Ref] | [DD/MM/YYYY] |
| EX-02 | Data deletion and sanitisation obligations confirmed | All Tiers | Complete / In Progress / Not Started | [Doc Ref] | [DD/MM/YYYY] |
| EX-03 | Transition support obligations defined in contract | Tier 1 & 2 | Complete / In Progress / Not Started | [Doc Ref] | [DD/MM/YYYY] |
| EX-04 | Alternative vendor or in-sourcing option identified and assessed | Tier 1 | Complete / In Progress / Not Started | [Doc Ref] | [DD/MM/YYYY] |
| EX-05 | Exit plan tested via tabletop exercise or simulation | Tier 1 | Complete / In Progress / Not Started | [Doc Ref] | [DD/MM/YYYY] |
| EX-06 | Regulatory notification obligations on exit confirmed | Tier 1 | Complete / In Progress / Not Started | [Doc Ref] | [DD/MM/YYYY] |
| EX-07 | Knowledge transfer plan documented | Tier 1 & 2 | Complete / In Progress / Not Started | [Doc Ref] | [DD/MM/YYYY] |
| EX-08 | Intellectual property and licence reversion terms confirmed | Tier 1 & 2 | Complete / In Progress / Not Started | [Doc Ref] | [DD/MM/YYYY] |

---

## 9. Roles and Responsibilities

*This section defines accountability for maintaining, reviewing, and acting upon the Vendor Certification Register. All roles are mapped using the RACI model.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Vendor Management | Business Owner | IT Custodian | Chief Risk Officer | CISO / IT Risk | Internal Audit | Board / Risk Committee |
|---|---|---|---|---|---|---|---|
| Maintain and update the register | R | C | C | I | C | I | I |
| Approve risk tier assignments | A | C | C | A | R | I | I |
| Conduct pre-engagement due diligence | R | C | C | I | C | I | I |
| Review and validate certifications | R | I | R | I | C | I | I |
| Monitor SLA and KPI performance | R | A | C | I | I | I | I |
| Escalate SLA breaches | R | A | I | C | C | I | I |
| Maintain and test exit strategies | R | A | C | C | C | I | I |
| Approve material vendor changes | C | R | C | A | C | I | I |
| Conduct periodic register review | R | C | C | A | C | R | I |
| Report to Board / Risk Committee | C | I | I | R | C | I | A |
| Provide regulatory submissions (BNM) | C | I | I | R | C | I | A |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name], [Title] | Initial version — established Vendor Certification Register template in accordance with BNM RMiT Clause 14.2 |
| [X.X] | [DD/MM/YYYY] | [Author Name], [Title] | [Description of changes] |

### 10.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Vendor Management | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Risk Officer | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Security Officer | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Technology Officer | [Name] | __________________ | [DD/MM/YYYY] |
| [Board Risk Committee Representative] | [Name] | __________________ | [DD/MM/YYYY] |

---

## 11. References

*The following regulatory instruments and standards govern the requirements documented in this register.*

| Reference | Document | Clause / Section | Description |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Clause 14.2 | Requirements for oversight and management of Critical Third-Party Service Providers (CTSPs) |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Clause 14.1 | General third-party risk management framework obligations |
| PDPA 2010 | Personal Data Protection Act 2010 | Sections 6, 9, 11 | Data processor obligations, security principle, and data subject rights applicable to vendor data handling |
| NACSA | National Cyber Security Agency — Cybersecurity Framework | [Applicable control domains] | Cybersecurity baseline requirements for critical national information infrastructure |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A 5.19–5.22 | Information security in supplier relationships |
| ISO/IEC 27036 | Information Security for Supplier Relationships | All Parts | Guidance on ICT supply chain security |
| BNM/RH/PD 028-107 | Guidelines on Outsourcing | All sections | BNM outsourcing requirements for financial institutions |
| DORA (reference only) | Digital Operational Resilience Act (EU) | Articles 28–30 | Reference framework for ICT third-party risk management best practice |

---

## 12. Appendices

### Appendix A — Vendor Risk Scoring Worksheet

*Complete one worksheet per vendor at initial onboarding and at each periodic re-tiering review. Archive completed worksheets with the relevant register entry.*

| Scoring Dimension | Weight | Raw Score (1–5) | Weighted Score | Notes |
|---|---|---|---|---|
| Operational Criticality | 30% | [1–5] | [Score × 0.30] | [Justification] |
| Data Sensitivity | 25% | [1–5] | [Score × 0.25] | [Justification] |
| Substitutability | 15% | [1–5] | [Score × 0.15] | [Justification] |
| Concentration Risk | 15% | [1–5] | [Score × 0.15] | [Justification] |
| Jurisdictional Risk | 10% | [1–5] | [Score × 0.10] | [Justification] |
| Financial Stability | 5% | [1–5] | [Score × 0.05] | [Justification] |
| **Total Weighted Score** | **100%** | | **[Sum]** | |
| **Assigned Risk Tier** | | | **Tier 1 / 2 / 3** | |

**Scoring Guide:** 1 = Negligible | 2 = Low | 3 = Moderate | 4 = High | 5 = Critical

---

### Appendix B — Accepted Certifications and Standards

*Reference list of certifications recognised by [Organization Name] as evidence of vendor security and compliance maturity.*

| Certification / Standard | Issuing / Governing Body | Minimum Acceptable Version / Type | Applicable Vendor Category |
|---|---|---|---|
| ISO/IEC 27001 | ISO / Accredited CB | 2022 edition or later | All Tier 1 vendors |
| SOC 2 Type II | AICPA | Type II (not Type I) | Cloud and data processing vendors |
| PCI DSS | PCI Security Standards Council | v4.0 or current | Payment processing vendors |
| CSA STAR | Cloud Security Alliance | Level 2 (Certified) | Cloud infrastructure vendors |
| ISO 22301 | ISO / Accredited CB | Current edition | All Tier 1 vendors |
| ISO/IEC 20000-1 | ISO / Accredited CB | Current edition | Managed IT service providers |
| CREST Accreditation | CREST | Current | Penetration testing providers |
| [Other Standard] | [Body] | [Version] | [Applicability] |

---

### Appendix C — Escalation and Breach Notification Matrix

*Defines the escalation path and notification obligations when vendor performance or certification status falls below acceptable thresholds.*

| Trigger | Severity | Immediate Action | Escalation Path | Regulatory Notification Required | Timeframe |
|---|---|---|---|---|---|
| Certification expired without renewal | High | Suspend data sharing; engage vendor | Head of Vendor Management → CRO → Board Risk Committee | Assess against BNM RMiT notification obligations | Within 24 hours of discovery |
| SLA breach — two consecutive periods | Medium | Issue formal breach notice | Vendor Manager → Head of Vendor Management → Business Owner | No (unless material operational impact) | Within 5 business days |
| Vendor security incident affecting [Org] data | Critical | Activate Incident Response Plan | CISO → CRO → CEO → Board | Yes — notify BNM per RMiT incident reporting requirements | Per BNM RMiT incident reporting timelines |
| Vendor financial distress or insolvency | High | Initiate exit strategy | Head of Vendor Management → CRO → Board | Assess on a case-by-case basis | Within 48 hours of notification |
| Failed due diligence at periodic review | Medium–High | Suspend renewal; escalate risk | Vendor Manager → CRO → Risk Committee | No (unless material) | Within 10 business days |

---

### Appendix D — Register Maintenance Log

*Record all updates made to the register outside of scheduled review cycles. All per-event updates must be logged here.*

| Log ID | Date of Update | Entry ID(s) Affected | Nature of Update | Updated By | Approved By | Notes |
|---|---|---|---|---|---|---|
| LOG-[YYYY]-[NNN] | [DD/MM/YYYY] | VCR-[YYYY]-[NNN] | [e.g., Certification renewal recorded] | [Name] | [Name] | [Additional context] |
| LOG-[YYYY]-[NNN] | [DD/MM/YYYY] | VCR-[YYYY]-[NNN] | [e.g., Vendor re-tiered following audit finding] | [Name] | [Name] | [Additional context] |

---

*This document is classified **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact the Head of Vendor Management at [Contact Details].*

---

*End of Document — [Organization Name] Vendor Certification Register v1.0*