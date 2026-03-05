# Risk Management Review Records

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

This document serves as the formal record of risk management reviews conducted on third-party assessment results in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 14.1**, which mandates that financial institutions maintain comprehensive oversight of third-party and outsourcing arrangements through structured risk assessment and ongoing monitoring.

These records are generated on a **per-event basis** (upon onboarding, significant contract changes, security incidents, or material risk events) and reviewed no less than **quarterly** by the Head of Vendor Management. This document applies to all third-party technology service providers, cloud service providers, outsourced technology functions, and critical IT vendors engaged by [Organization Name].

**Scope includes:**

- All technology-related third-party engagements classified as material outsourcing or critical services
- Vendors providing IT infrastructure, software-as-a-service (SaaS), platform-as-a-service (PaaS), or infrastructure-as-a-service (IaaS)
- Vendors with access to customer data, regulated systems, or critical technology assets
- Managed security service providers (MSSPs) and IT support contractors

**Out of Scope:**

- Non-technology procurement not touching regulated systems or customer data
- Intra-group arrangements governed by separate group-level agreements

---

## 2. Asset and Item Identification

*Record the specific technology asset, system, service, or item subject to this risk management review. Each entry must be uniquely identifiable and traceable to a contract or service agreement.*

| Field | Details |
|---|---|
| **Review Record ID** | [RMR-YYYY-NNN] |
| **Review Type** | ☐ Onboarding  ☐ Periodic (Quarterly)  ☐ Triggered (Event-Based)  ☐ Offboarding |
| **Review Date** | [DD/MM/YYYY] |
| **Trigger Event (if applicable)** | [Describe the triggering event, e.g., contract renewal, security incident, regulatory notification] |
| **Vendor / Third-Party Name** | [Vendor Legal Name] |
| **Vendor Registration No.** | [Business Registration Number] |
| **Service / System Name** | [Name of the service, platform, or technology asset provided] |
| **Service Description** | [Brief description of the technology service or asset] |
| **Contract Reference No.** | [Contract or MSA Reference Number] |
| **Contract Commencement Date** | [DD/MM/YYYY] |
| **Contract Expiry Date** | [DD/MM/YYYY] |
| **Renewal Terms** | [Auto-renew / Manual renewal — notice period] |
| **Engagement Country / Jurisdiction** | [Country where service is delivered or data is processed] |
| **Data Residency Location** | [Country/Region where data is stored or processed] |
| **Previous Review Record ID** | [RMR-YYYY-NNN or N/A if first review] |

---

## 3. Classification and Categorisation

*Assign the appropriate classification tier and service category to the vendor engagement. This classification drives the depth of due diligence, monitoring frequency, and contractual requirements applicable to this vendor.*

### 3.1 Service Category

| Category | Description | Applicable (Y/N) |
|---|---|---|
| Material Outsourcing | Involves outsourcing of a material function where disruption would significantly impact operations, customers, or regulatory obligations | ☐ Y  ☐ N |
| Critical IT System | Supports a critical business function or regulated activity | ☐ Y  ☐ N |
| Cloud Service Provider | Delivery of compute, storage, networking, or software via cloud infrastructure | ☐ Y  ☐ N |
| Data Processor | Processes, stores, or transmits customer personal data or regulated financial data | ☐ Y  ☐ N |
| Managed Security Service | Provides security operations, monitoring, or incident response functions | ☐ Y  ☐ N |
| IT Support / Maintenance | Provides break-fix, managed support, or professional services | ☐ Y  ☐ N |
| Other | [Specify] | ☐ Y  ☐ N |

### 3.2 Data Classification

| Data Type | Present in Engagement | Classification Level |
|---|---|---|
| Customer Personal Data (PDPA) | ☐ Y  ☐ N | ☐ Confidential  ☐ Internal  ☐ Public |
| Financial Account Data | ☐ Y  ☐ N | ☐ Confidential  ☐ Internal  ☐ Public |
| Payment Card Data (PCI-DSS) | ☐ Y  ☐ N | ☐ Confidential  ☐ Internal  ☐ Public |
| Authentication Credentials | ☐ Y  ☐ N | ☐ Confidential  ☐ Internal  ☐ Public |
| Business-Sensitive / Proprietary | ☐ Y  ☐ N | ☐ Confidential  ☐ Internal  ☐ Public |
| Publicly Available Data | ☐ Y  ☐ N | ☐ Confidential  ☐ Internal  ☐ Public |

### 3.3 Criticality Rating

*Assess the criticality of the engagement to organizational operations using the criteria below.*

| Criterion | Assessment |
|---|---|
| **Impact on Business Operations if Unavailable** | ☐ Critical (>50% of business impacted)  ☐ High (key processes impacted)  ☐ Medium  ☐ Low |
| **Recovery Time Objective (RTO) Dependency** | ☐ <4 hours  ☐ 4–24 hours  ☐ 24–72 hours  ☐ >72 hours |
| **Replaceability** | ☐ Not replaceable within 30 days  ☐ Replaceable within 30–90 days  ☐ Readily replaceable |
| **Regulatory Reporting Dependency** | ☐ Yes — required for statutory/regulatory submissions  ☐ No |
| **Overall Criticality Rating** | ☐ **Critical**  ☐ **High**  ☐ **Medium**  ☐ **Low** |

---

## 4. Owner and Custodian

*Identify the internal accountable parties for this vendor relationship and technology asset. All fields are mandatory. Ownership must be assigned to named individuals, not generic roles alone.*

### 4.1 Internal Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **Business Owner** (accountable for service outcomes) | [Full Name] | [Department] | [Email / Extension] |
| **Technical Custodian** (accountable for technical integration and controls) | [Full Name] | [Department] | [Email / Extension] |
| **Vendor Relationship Manager** | [Full Name] | Vendor Management | [Email / Extension] |
| **Data Owner** (if personal/regulated data involved) | [Full Name] | [Department] | [Email / Extension] |
| **Information Security Reviewer** | [Full Name] | Information Security | [Email / Extension] |
| **Legal / Compliance Reviewer** | [Full Name] | Legal / Compliance | [Email / Extension] |

### 4.2 Vendor Key Contacts

| Role | Name | Contact | Escalation Level |
|---|---|---|---|
| **Primary Account Manager** | [Name] | [Email / Phone] | Level 1 |
| **Technical Lead / Support Contact** | [Name] | [Email / Phone] | Level 1 |
| **Security Contact (CISO / Security Team)** | [Name] | [Email / Phone] | Level 2 |
| **Executive Escalation** | [Name] | [Email / Phone] | Level 3 |
| **24/7 Incident Hotline** | N/A | [Phone Number] | Emergency |

---

## 5. Vendor Risk Tiering

*Apply [Organization Name]'s vendor risk tiering framework to assign this vendor to a risk tier. The assigned tier determines the applicable due diligence depth, review frequency, contractual requirements, and monitoring intensity.*

### 5.1 Risk Tiering Criteria

| Risk Factor | Weight | Score (1–5) | Weighted Score |
|---|---|---|---|
| Criticality to business operations | 25% | [Score] | [Weighted] |
| Volume and sensitivity of data accessed | 20% | [Score] | [Weighted] |
| Degree of system access / integration | 20% | [Score] | [Weighted] |
| Vendor's geographic and jurisdictional risk | 10% | [Score] | [Weighted] |
| Vendor financial stability | 10% | [Score] | [Weighted] |
| Regulatory and compliance track record | 10% | [Score] | [Weighted] |
| Concentration risk (single point of failure) | 5% | [Score] | [Weighted] |
| Subcontracting / fourth-party risk | 5% | [Score] | [Weighted] |
| **Total Composite Risk Score** | **100%** | — | **[Total]** |

### 5.2 Tier Assignment

| Tier | Score Range | Description | Assigned |
|---|---|---|---|
| **Tier 1 — Critical** | 4.0 – 5.0 | Highest risk; material outsourcing or critical system; enhanced due diligence required | ☐ |
| **Tier 2 — High** | 3.0 – 3.9 | High risk; significant data exposure or business dependency; standard due diligence | ☐ |
| **Tier 3 — Medium** | 2.0 – 2.9 | Moderate risk; limited data or business exposure; streamlined due diligence | ☐ |
| **Tier 4 — Low** | 1.0 – 1.9 | Low risk; minimal access or impact; baseline due diligence only | ☐ |

**Assigned Tier:** ☐ Tier 1  ☐ Tier 2  ☐ Tier 3  ☐ Tier 4

**Justification for Tier Assignment:**

> [Provide a brief narrative justification for the assigned tier, referencing the dominant risk factors identified above.]

### 5.3 Tier Change History

| Date | Previous Tier | New Tier | Reason for Change | Approved By |
|---|---|---|---|---|
| [DD/MM/YYYY] | [Tier] | [Tier] | [Reason] | [Name] |

---

## 6. Due Diligence Checklist

*Document the due diligence activities completed for this review cycle. All Tier 1 and Tier 2 items are mandatory for Tier 1 and Tier 2 vendors. Tier 3 and Tier 4 vendors may apply a risk-based subset.*

### 6.1 Legal and Regulatory Compliance

| # | Due Diligence Item | Required For | Status | Evidence Reference | Remarks |
|---|---|---|---|---|---|
| 1.1 | Verified vendor's business registration and legal standing | All Tiers | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 1.2 | Confirmed vendor's jurisdiction of incorporation and data processing locations | All Tiers | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 1.3 | Reviewed vendor's PDPA compliance posture (if personal data involved) | All Tiers | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 1.4 | Confirmed no sanctions or debarment listings (OFAC, UN, local) | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 1.5 | Obtained and reviewed Data Processing Agreement (DPA) | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 1.6 | Reviewed subprocessor / fourth-party disclosure | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |

### 6.2 Information Security

| # | Due Diligence Item | Required For | Status | Evidence Reference | Remarks |
|---|---|---|---|---|---|
| 2.1 | Reviewed latest third-party security assessment or penetration test report | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 2.2 | Reviewed ISO 27001 / SOC 2 Type II certification (or equivalent) | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 2.3 | Completed vendor security questionnaire (VSQ) | Tier 1, 2, 3 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 2.4 | Reviewed vendor's incident response and breach notification procedures | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 2.5 | Assessed vendor's vulnerability management and patch cadence | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 2.6 | Reviewed access control and privileged access management practices | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 2.7 | Reviewed encryption standards for data at rest and in transit | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |

### 6.3 Operational Resilience

| # | Due Diligence Item | Required For | Status | Evidence Reference | Remarks |
|---|---|---|---|---|---|
| 3.1 | Reviewed vendor's Business Continuity Plan (BCP) and test results | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 3.2 | Reviewed vendor's Disaster Recovery Plan (DRP) and RTO/RPO capabilities | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 3.3 | Confirmed redundancy and failover architecture | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 3.4 | Reviewed historical uptime and availability track record | Tier 1, 2, 3 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |

### 6.4 Financial Viability

| # | Due Diligence Item | Required For | Status | Evidence Reference | Remarks |
|---|---|---|---|---|---|
| 4.1 | Reviewed vendor's latest audited financial statements | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 4.2 | Assessed vendor's financial stability rating (credit rating or equivalent) | Tier 1 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |
| 4.3 | Confirmed vendor's insurance coverage (cyber, professional indemnity) | Tier 1, 2 | ☐ Completed  ☐ In Progress  ☐ N/A | [Doc Ref] | [Remarks] |

### 6.5 Overall Due Diligence Outcome

| Field | Details |
|---|---|
| **Outstanding Items** | [List any items not completed and provide a remediation plan with target dates] |
| **Residual Risk from Gaps** | ☐ Acceptable  ☐ Conditionally Acceptable (with mitigations)  ☐ Not Acceptable |
| **Due Diligence Conclusion** | ☐ **Approved to Proceed**  ☐ **Approved with Conditions**  ☐ **Deferred Pending Remediation**  ☐ **Rejected** |
| **Conditions / Mitigations Required** | [List any conditions that must be met before or after engagement] |

---

## 7. SLA and KPI Definitions

*Document the service level commitments and key performance indicators agreed with this vendor. These metrics form the basis for ongoing performance monitoring and are reviewed at each periodic review cycle.*

### 7.1 Service Level Agreements (SLAs)

*Define the contractually agreed service levels. Flag any SLAs below [Organization Name]'s minimum acceptable thresholds.*

| SLA ID | Metric | Definition | Agreed Target | Minimum Threshold | Measurement Period | Breach Consequence |
|---|---|---|---|---|---|---|
| SLA-01 | Service Availability / Uptime | Percentage of time the service is available and operational | [e.g., 99.9%] | [e.g., 99.5%] | Monthly | [e.g., Service credit, escalation] |
| SLA-02 | Incident Response Time (P1) | Time from incident report to vendor acknowledgement | [e.g., 15 minutes] | [e.g., 30 minutes] | Per incident | [e.g., Escalation to account exec] |
| SLA-03 | Incident Resolution Time (P1) | Time from incident report to service restoration | [e.g., 4 hours] | [e.g., 8 hours] | Per incident | [e.g., Financial penalty, board reporting] |
| SLA-04 | Incident Response Time (P2) | Time from incident report to vendor acknowledgement | [e.g., 1 hour] | [e.g., 2 hours] | Per incident | [e.g., Escalation] |
| SLA-05 | Planned Maintenance Window | Maximum allowable duration per maintenance event | [e.g., 4 hours] | [e.g., 8 hours] | Per event | [Notification & approval required] |
| SLA-06 | Security Incident Notification | Time from vendor's detection to notification to [Organization Name] | [e.g., 1 hour] | [e.g., 4 hours] | Per incident | [Contractual breach, regulatory notification risk] |
| SLA-07 | Patch Application — Critical | Time to apply critical security patches | [e.g., 72 hours] | [e.g., 7 days] | Per patch cycle | [Escalation, compensating controls required] |
| SLA-08 | Data Recovery (RPO) | Maximum data loss acceptable in a recovery scenario | [e.g., 1 hour] | [e.g., 4 hours] | Per incident | [Escalation, review of DR plan] |
| SLA-09 | [Custom SLA] | [Definition] | [Target] | [Threshold] | [Period] | [Consequence] |

### 7.2 Key Performance Indicators (KPIs)

*Track operational and security performance metrics beyond contractual SLAs. KPIs provide early warning signals for vendor performance deterioration.*

| KPI ID | KPI Name | Description | Target | Reporting Frequency | Data Source |
|---|---|---|---|---|---|
| KPI-01 | Monthly Uptime Achieved | Actual uptime percentage reported by vendor | ≥ [Target]% | Monthly | Vendor dashboard / Portal |
| KPI-02 | Number of P1 Incidents (Monthly) | Count of Priority 1 incidents in the period | ≤ [Target] per quarter | Monthly | Incident log |
| KPI-03 | SLA Breach Rate | Percentage of SLA obligations breached in the period | ≤ [e.g., 2%] | Monthly | SLA tracking register |
| KPI-04 | Patch Compliance Rate | Percentage of critical patches applied within SLA | ≥ [e.g., 95%] | Monthly | Vendor patch report |
| KPI-05 | Security Audit Finding Closure Rate | Percentage of agreed audit findings closed on time | ≥ [e.g., 90%] | Quarterly | Audit tracking log |
| KPI-06 | Subcontractor Compliance Confirmation | Vendor confirms subprocessors remain compliant | 100% confirmed | Quarterly | Vendor attestation |
| KPI-07 | Customer Complaints Attributable to Vendor | Number of customer complaints linked to vendor performance | ≤ [Target] | Monthly | Complaints register |
| KPI-08 | BCP/DR Test Completion | Confirmation that annual BCP/DR test was completed | 100% annually | Annual | Test report |
| KPI-09 | [Custom KPI] | [Description] | [Target] | [Frequency] | [Source] |

### 7.3 SLA and KPI Review Summary

| Review Period | SLA Breaches | KPI Below Threshold | Trend | Action Required |
|---|---|---|---|---|
| [Q1 YYYY] | [Count] | [Count] | ☐ Improving  ☐ Stable  ☐ Deteriorating | [Action] |
| [Q2 YYYY] | [Count] | [Count] | ☐ Improving  ☐ Stable  ☐ Deteriorating | [Action] |
| [Q3 YYYY] | [Count] | [Count] | ☐ Improving  ☐ Stable  ☐ Deteriorating | [Action] |
| [Q4 YYYY] | [Count] | [Count] | ☐ Improving  ☐ Stable  ☐ Deteriorating | [Action] |

---

## 8. Exit Strategy Requirements

*Document the exit strategy for this vendor engagement. An approved exit strategy must be in place before engagement commencement and must be reviewed at each periodic risk review. The exit strategy ensures [Organization Name] can transition away from this vendor without operational disruption or data loss.*

### 8.1 Exit Trigger Conditions

*Identify the conditions that would initiate the exit strategy for this vendor.*

| # | Trigger Condition | Probability | Impact | Pre-approved Response |
|---|---|---|---|---|
| 1 | Vendor insolvency or cessation of business | ☐ Low  ☐ Med  ☐ High | ☐ Low  ☐ Med  ☐ High | [Describe response] |
| 2 | Material breach of contract (unresolved within cure period) | ☐ Low  ☐ Med  ☐ High | ☐ Low  ☐ Med  ☐ High | [Describe response] |
| 3 | Regulatory direction to terminate engagement | ☐ Low  ☐ Med  ☐ High | ☐ Low  ☐ Med  ☐ High | [Describe response] |
| 4 | Sustained SLA failure (>3 consecutive months below threshold) | ☐ Low  ☐ Med  ☐ High | ☐ Low  ☐ Med  ☐ High | [Describe response] |
| 5 | Security breach attributable to vendor | ☐ Low  ☐ Med  ☐ High | ☐ Low  ☐ Med  ☐ High | [Describe response] |
| 6 | Strategic business decision / service consolidation | ☐ Low  ☐ Med  ☐ High | ☐ Low  ☐ Med  ☐ High | [Describe response] |
| 7 | [Custom Trigger] | ☐ Low  ☐ Med  ☐ High | ☐ Low  ☐ Med  ☐ High | [Describe response] |

### 8.2 Exit Plan Summary

| Field | Details |
|---|---|
| **Minimum Notice Period (Contractual)** | [e.g., 90 days] |
| **Target Exit Duration (Planned)** | [e.g., 6 months from decision to full transition] |
| **Target Exit Duration (Emergency)** | [e.g., 30 days minimum viable capability] |
| **Alternative Provider(s) Identified** | ☐ Yes — [Name alternative provider(s)]  ☐ No — [Provide justification and interim plan] |
| **In-house Fallback Capability** | ☐ Yes — [Describe capability]  ☐ No — [Explain dependency and risk acceptance] |
| **Data Portability Confirmed** | ☐ Yes — [Format and method confirmed in contract]  ☐ No — [Escalation required] |
| **Data Deletion / Return SLA** | [e.g., Vendor must return or certifiably destroy all data within 30 days of termination] |
| **Knowledge Transfer Requirements** | [Describe documentation, access, and knowledge transfer obligations on vendor] |
| **Transition Testing Completed** | ☐ Yes — [Date of last test]  ☐ No — [Target date for testing] |

### 8.3 Exit Readiness Assessment

| Readiness Criterion | Status | Notes |
|---|---|---|
| Exit provisions included in contract (termination for cause and convenience) | ☐ Confirmed  ☐ Not Confirmed | [Notes] |
| Data portability and format confirmed with vendor | ☐ Confirmed  ☐ Not Confirmed | [Notes] |
| Alternative provider or capability identified | ☐ Confirmed  ☐ Not Confirmed | [Notes] |
| Staff and operational runbooks documented for transition | ☐ Confirmed  ☐ Not Confirmed | [Notes] |
| Exit costs and financial obligations assessed | ☐ Confirmed  ☐ Not Confirmed | [Notes] |
| Regulatory notification obligations on exit reviewed | ☐ Confirmed  ☐ Not Confirmed | [Notes] |
| **Overall Exit Readiness Rating** | ☐ **Ready**  ☐ **Partially Ready**  ☐ **Not Ready** | [Notes] |

---

## 9. Overall Risk Assessment and Decision

*Summarise the overall risk posture of this vendor engagement based on the findings of this review record.*

| Field | Details |
|---|---|
| **Inherent Risk Rating** | ☐ Critical  ☐ High  ☐ Medium  ☐ Low |
| **Control Effectiveness** | ☐ Strong  ☐ Adequate  ☐ Weak  ☐ Insufficient |
| **Residual Risk Rating** | ☐ Critical  ☐ High  ☐ Medium  ☐ Low |
| **Risk Acceptance** | ☐ Accepted by Business Owner  ☐ Accepted with Conditions  ☐ Escalated to Risk Committee  ☐ Not Accepted |
| **Required Follow-up Actions** | [List all remediation, monitoring, or escalation actions with owners and due dates] |
| **Next Scheduled Review Date** | [DD/MM/YYYY] |
| **Recommendation** | ☐ Continue Engagement  ☐ Continue with Enhanced Monitoring  ☐ Engage Alternative Provider  ☐ Initiate Exit Strategy |

### 9.1 Risk Action Log

| Action ID | Description | Risk Addressed | Owner | Due Date | Status |
|---|---|---|---|---|---|
| ACT-001 | [Action description] | [Risk reference] | [Name] | [DD/MM/YYYY] | ☐ Open  ☐ In Progress  ☐ Closed |
| ACT-002 | [Action description] | [Risk reference] | [Name] | [DD/MM/YYYY] | ☐ Open  ☐ In Progress  ☐ Closed |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for risk management review activities related to third-party assessments.*

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Vendor Mgmt | Business Owner | InfoSec Team | Legal / Compliance | IT / Technical Custodian | Chief Risk Officer | Board / Risk Committee |
|---|---|---|---|---|---|---|---|
| Initiate and schedule risk management review | R | I | I | I | I | I | — |
| Complete vendor risk tiering assessment | R/A | C | C | C | C | I | — |
| Conduct information security due diligence | C | — | R/A | — | C | I | — |
| Conduct legal and regulatory due diligence | C | — | — | R/A | — | I | — |
| Review and validate SLA/KPI performance | R | A | C | — | C | I | — |
| Assess and update exit strategy | R | A | C | C | C | I | — |
| Review and approve risk assessment findings | C | C | C | C | C | A | I |
| Escalate critical/high residual risks | R | C | C | C | — | A | I |
| Approve continued engagement (Tier 1 vendors) | R | C | C | C | — | A | R/A |
| Maintain vendor register and review records | R/A | I | I | I | I | I | — |
| Report to Board / Risk Committee (Tier 1) | I | I | I | I | — | R | A |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name], [Title] | Initial document creation |
| [X.X] | [DD/MM/YYYY] | [Author Name], [Title] | [Description of changes] |

### 11.2 Approval Sign-Off

*This Risk Management Review Record requires the following approvals prior to filing. Electronic or wet signatures are acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], Vendor Management | [Signature] | [DD/MM/YYYY] |
| Reviewed By (InfoSec) | [Name], Information Security | [Signature] | [DD/MM/YYYY] |
| Reviewed By (Legal) | [Name], Legal & Compliance | [Signature] | [DD/MM/YYYY] |
| Approved By | [Name], Head of Vendor Management | [Signature] | [DD/MM/YYYY] |
| Noted By (Tier 1 only) | [Name], Chief Risk Officer | [Signature] | [DD/MM/YYYY] |

---

## 12. References

The following regulatory instruments, standards, and internal policies are referenced by or govern this document.

| # | Reference | Description |
|---|---|---|
| 1 | **BNM RMiT, Clause 14.1** | Requirements for the management of outsourcing and third-party technology risk, including ongoing monitoring, assessment, and review of third-party arrangements |
| 2 | **BNM RMiT, Clause 14** | Overarching outsourcing risk management framework requirements, including classification, due diligence, contractual protections, and exit planning |
| 3 | **BNM RMiT, Clause 10** | Technology risk management governance requirements applicable to third-party technology risks |
| 4 | **Personal Data Protection Act 2010 (PDPA)** | Malaysian data protection legislation; applicable to all vendor engagements involving personal data processing |
| 5 | **BNM Outsourcing Policy** | BNM policy document on outsourcing arrangements for financial institutions (where separately applicable) |
| 6 | **ISO/IEC 27001:2022** | International standard for information security management; referenced for security due diligence benchmarking |
| 7 | **ISO/IEC 27036** | Information security for supplier relationships; guidance on third-party information security |
| 8 | **[Organization Name] Vendor Management Policy** | Internal policy governing third-party and outsourcing risk management | 
| 9 | **[Organization Name] Information Security Policy** | Internal information security requirements applicable to vendors |
| 10 | **[Organization Name] Data Classification Policy** | Internal data classification framework referenced in Section 3.2 |

---

## Appendices

### Appendix A — Vendor Security Questionnaire (VSQ)

*Attach or reference the completed Vendor Security Questionnaire submitted by the vendor for this review cycle.*

| Field | Details |
|---|---|
| **VSQ Reference** | [VSQ-YYYY-NNN] |
| **Date Submitted by Vendor** | [DD/MM/YYYY] |
| **Date Reviewed by InfoSec** | [DD/MM/YYYY] |
| **VSQ Version Used** | [Version] |
| **Document Location** | [File path / Document management system reference] |

---

### Appendix B — Third-Party Assessment Reports

*List all third-party assessment reports (penetration tests, SOC 2, ISO 27001 audit reports, etc.) reviewed during this assessment cycle.*

| Report Type | Issuer | Report Date | Coverage Period | Validity Expiry | Location |
|---|---|---|---|---|---|
| [e.g., SOC 2 Type II] | [Audit Firm] | [DD/MM/YYYY] | [Period] | [DD/MM/YYYY] | [Doc Ref] |
| [e.g., Penetration Test] | [Testing Firm] | [DD/MM/YYYY] | [Scope] | [DD/MM/YYYY] | [Doc Ref] |
| [e.g., ISO 27001 Certificate] | [Certifying Body] | [DD/MM/YYYY] | [Scope] | [DD/MM/YYYY] | [Doc Ref] |

---

### Appendix C — SLA Performance History

*Attach the SLA performance reports for the review period, or reference the location of the performance dashboard.*

| Field | Details |
|---|---|
| **Reporting Period** | [Start Date] to [End Date] |
| **Report Source** | ☐ Vendor-provided  ☐ Internal monitoring  ☐ Third-party monitoring tool |
| **Report Location** | [File path / Dashboard URL / Document management system reference] |

---

### Appendix D — Incident Log (Review Period)

*Summarise all incidents attributable to or involving this vendor during the review period.*

| Incident ID | Date | Severity | Description | Root Cause | Resolution | SLA Breached (Y/N) | Lessons Learned |
|---|---|---|---|---|---|---|---|
| [INC-YYYY-NNN] | [DD/MM/YYYY] | ☐ P1  ☐ P2  ☐ P3 | [Brief description] | [Root cause] | [Resolution] | ☐ Y  ☐ N | [Lessons learned] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **BCP** | Business Continuity Plan |
| **BNM** | Bank Negara Malaysia |
| **DPA** | Data Processing Agreement |
| **DRP** | Disaster Recovery Plan |
| **KPI** | Key Performance Indicator |
| **MSSP** | Managed Security Service Provider |
| **PDPA** | Personal Data Protection Act 2010 |
| **RMiT** | Risk Management in Technology (BNM Policy Document) |
| **RPO** | Recovery Point Objective |
| **RTO** | Recovery Time Objective |
| **SLA** | Service Level Agreement |
| **VSQ** | Vendor Security Questionnaire |
| **Material Outsourcing** | As defined under BNM's outsourcing policy — outsourcing of a function where its disruption would have a significant impact on the financial institution's business operations, reputation, or ability to comply with applicable laws and regulations |

---

*This document is classified as **Confidential**. It must be handled, stored, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorised disclosure is prohibited.*

*© [Organization Name] | [Year] | Document ID: [Document ID]*