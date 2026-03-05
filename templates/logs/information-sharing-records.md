# Information Sharing Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the framework and record structure for **Information Sharing Records** maintained by [Organization Name] in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.17**, which mandates that financial institutions participate in and document threat intelligence sharing arrangements to strengthen the broader financial sector's cyber resilience posture.

These records serve as the authoritative log of all cyber threat information — including Indicators of Compromise (IOCs), threat actor profiles, vulnerability intelligence, and security advisories — shared with or received from trusted partners, industry groups, regulators, and national cybersecurity bodies.

### 1.2 Scope

This template applies to:

- All inbound threat intelligence received through formal sharing arrangements (e.g., FinCERT, NACSA CyberSAFE, ISACs, bilateral agreements)
- All outbound threat intelligence shared by [Organization Name] with authorized external parties
- Automated threat feed ingestion logs maintained within the Security Information and Event Management (SIEM) or Threat Intelligence Platform (TIP)
- Manual intelligence exchange records (emails, secure portals, meetings)

*This document is applicable to all personnel within the IT Operations, Cybersecurity, and Risk Management functions who participate in or oversee threat intelligence sharing activities.*

---

## 2. Regulatory and Policy Context

*This section maps the artifact to its governing regulatory obligations. Review and update whenever new circulars or policy updates are issued by BNM or NACSA.*

| Reference | Description |
|---|---|
| **BNM RMiT Clause 11.17** | Requires financial institutions to actively participate in threat information sharing arrangements and maintain records of information exchanged |
| **BNM RMiT Clause 11.1 – 11.5** | Overarching cyber risk management obligations informing the broader context of threat intelligence |
| **NACSA National Cyber Security Policy** | National-level requirements for Critical National Information Infrastructure (CNII) entities to report and share threat data |
| **PDPA 2010** | Governs handling of any personal data that may be incidentally included in threat intelligence records |
| **[Organization Name] Cyber Security Policy** | Internal policy governing classification and handling of threat intelligence |
| **[Organization Name] Information Sharing Agreement(s)** | Bilateral or multilateral agreements governing the terms of exchange with each sharing partner |

---

## 3. Asset and Item Identification

*Record the unique identifier, type, and source/destination for each information sharing event. System-generated records from the Threat Intelligence Platform (TIP) or SIEM should populate this section automatically; manual entries must be logged by the responsible analyst.*

### 3.1 Sharing Event Register

| Record ID | Event Type | Direction | Partner / Source | Platform / Channel | Event Timestamp (UTC) | Logged By |
|---|---|---|---|---|---|---|
| ISR-[YYYY]-[NNNN] | [Inbound / Outbound] | [Received / Shared] | [Partner Name / Feed Name] | [TIP / SIEM / Email / Portal / API] | [YYYY-MM-DD HH:MM:SS] | [Analyst Name / System] |
| ISR-[YYYY]-[NNNN] | | | | | | |

**Event Type Definitions:**

- **Inbound** — Threat intelligence received from an external party or automated feed
- **Outbound** — Threat intelligence or advisories shared by [Organization Name] with external parties
- **Bilateral** — Simultaneous exchange within a structured session (e.g., threat briefing, working group)

### 3.2 Intelligence Item Inventory

*Each discrete intelligence item (e.g., an individual IOC, a threat report, or a vulnerability advisory) exchanged within a sharing event must be individually catalogued below or in the system-generated export appended as Appendix A.*

| Item ID | Parent Record ID | Intelligence Type | Title / Description | TLP Marking | Date of Exchange | Expiry / Review Date |
|---|---|---|---|---|---|---|
| ITM-[YYYY]-[NNNN] | ISR-[YYYY]-[NNNN] | [IOC / Advisory / Report / Feed / Vulnerability] | [Brief description of the intelligence item] | [TLP:RED / AMBER / GREEN / CLEAR] | [YYYY-MM-DD] | [YYYY-MM-DD] |
| ITM-[YYYY]-[NNNN] | | | | | | |

---

## 4. Classification and Categorisation

*All shared intelligence must be classified using the Traffic Light Protocol (TLP) and categorised by threat type. This ensures appropriate handling, dissemination controls, and retention. Classification must be applied at the point of receipt or generation and must not be downgraded without explicit authorization from the originating party.*

### 4.1 Traffic Light Protocol (TLP) Classification

| TLP Level | Handling Requirement | Permitted Recipients |
|---|---|---|
| **TLP:RED** | Strictly restricted; not for disclosure beyond named recipients | Named individuals only |
| **TLP:AMBER** | Limited disclosure; shared within the organization and with trusted partners | Internal teams + direct partners |
| **TLP:AMBER+STRICT** | Internal use only; not to be shared with external parties without consent | Internal only |
| **TLP:GREEN** | Community use; may be shared within the financial sector community | Sector community |
| **TLP:CLEAR** | Unrestricted; publicly available | Unlimited |

### 4.2 Threat Category Taxonomy

*Categorise each intelligence item according to the threat type taxonomy below. Multiple categories may apply to a single item.*

| Item ID | Threat Category | Sub-Category | MITRE ATT&CK Tactic(s) | Severity | Confidence Level |
|---|---|---|---|---|---|
| ITM-[YYYY]-[NNNN] | [Malware / Phishing / Ransomware / APT / Vulnerability / Fraud / DDoS / Insider Threat / Other] | [Sub-category as applicable] | [TA#### / N/A] | [Critical / High / Medium / Low / Informational] | [High / Medium / Low] |
| ITM-[YYYY]-[NNNN] | | | | | |

### 4.3 Information Sensitivity Assessment

*For each outbound sharing event, document the pre-sharing sensitivity assessment performed to ensure no proprietary, customer, or operationally sensitive information is inadvertently disclosed.*

| Record ID | Assessed By | Assessment Date | Sensitivity Findings | Approved for Sharing? | Approver |
|---|---|---|---|---|---|
| ISR-[YYYY]-[NNNN] | [Analyst Name] | [YYYY-MM-DD] | [None identified / [Detail redacted items]] | [Yes / No / Conditionally] | [Name, Role] |
| ISR-[YYYY]-[NNNN] | | | | | |

---

## 5. Owner and Custodian

*This section identifies the accountable owner and operational custodian for each information sharing relationship and for this records register. Ownership must be reviewed whenever organisational changes affect the relevant roles.*

### 5.1 Register Ownership

| Role | Name | Department | Contact | Effective Date |
|---|---|---|---|---|
| **Document Owner** | IT Operations Manager | IT Operations | [Email / Extension] | [YYYY-MM-DD] |
| **Records Custodian** | [Cybersecurity Analyst / SIEM Administrator] | Cybersecurity | [Email / Extension] | [YYYY-MM-DD] |
| **Data Protection Officer** | [DPO Name] | Compliance / Legal | [Email / Extension] | [YYYY-MM-DD] |

### 5.2 Sharing Relationship Ownership

*Each formal sharing arrangement must have a designated relationship owner responsible for managing the partnership, ensuring compliance with agreement terms, and reviewing intelligence quality.*

| Partner / Feed Name | Arrangement Type | Relationship Owner | Backup Owner | Agreement Reference | Review Frequency |
|---|---|---|---|---|---|
| [FinCERT / BNM] | [Regulatory / Bilateral / Multilateral / Automated Feed] | [Name, Role] | [Name, Role] | [Agreement ID / MOU Reference] | [Quarterly / Annual / Ad hoc] |
| [NACSA CyberSAFE] | | | | | |
| [Financial Services ISAC] | | | | | |
| [Commercial Threat Feed Provider] | | | | | |
| [Other Partner] | | | | | |

---

## 6. Status and Lifecycle Stage

*Each intelligence item and sharing record must reflect its current operational status and lifecycle stage. Automated platforms should update status fields in real time; manual records must be updated within 24 hours of a status change.*

### 6.1 Record Lifecycle Status Definitions

| Status | Definition | Action Required |
|---|---|---|
| **Active** | Intelligence is current and operationally relevant | Monitor; apply defensive controls if applicable |
| **Under Review** | Intelligence is being assessed for accuracy, relevance, or actionability | Complete triage within [X] business days |
| **Actioned** | Defensive or investigative action has been taken in response to the intelligence | Document outcome in Section 6.2 |
| **Expired** | Intelligence has reached its defined validity period with no further action required | Archive per retention schedule |
| **Revoked** | Originating party has retracted or invalidated the intelligence | Remove from active controls; log revocation |
| **Archived** | Record retained for compliance and audit purposes | Retain per Section 8 retention schedule |

### 6.2 Action and Disposition Log

*For each intelligence item that resulted in a defensive action, investigation, or escalation, document the outcome below.*

| Item ID | Status | Action Taken | Action Date | Actioned By | Outcome / Resolution | Escalated? | Escalation Reference |
|---|---|---|---|---|---|---|---|
| ITM-[YYYY]-[NNNN] | [Actioned] | [Block IOC / Patch / Alert / Investigate / No Action Required] | [YYYY-MM-DD] | [Name / Team] | [Brief outcome description] | [Yes / No] | [Incident ID / Change ID / N/A] |
| ITM-[YYYY]-[NNNN] | | | | | | | |

### 6.3 Feed and Arrangement Health Status

*Quarterly review of each sharing arrangement's operational health and intelligence quality.*

| Partner / Feed | Status | Last Successful Exchange | Uptime / Reliability | Intelligence Quality Rating | Issues Noted | Next Review |
|---|---|---|---|---|---|---|
| [Partner Name] | [Active / Suspended / Under Review / Terminated] | [YYYY-MM-DD HH:MM UTC] | [%] | [High / Medium / Low] | [None / Description] | [YYYY-MM-DD] |
| [Partner Name] | | | | | | |

---

## 7. Last Review Date

*This section captures the review history for each intelligence item and for this records register as a whole. Continuous automated review is supplemented by formal quarterly reviews conducted by the IT Operations Manager and the Cybersecurity team.*

### 7.1 Register-Level Review Log

| Review Period | Review Date | Reviewed By | Review Type | Findings | Actions Taken | Sign-Off |
|---|---|---|---|---|---|---|
| Q[N] [YYYY] | [YYYY-MM-DD] | [Name, Role] | [Quarterly / Ad hoc / Regulatory] | [Summary of findings] | [Actions / None required] | [Initials] |
| Q[N] [YYYY] | | | | | | |

### 7.2 Item-Level Review Tracker

*For intelligence items with extended validity periods, record each periodic review to confirm continued relevance.*

| Item ID | Original Receipt Date | Last Review Date | Reviewed By | Review Outcome | Next Review Due |
|---|---|---|---|---|---|
| ITM-[YYYY]-[NNNN] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Name / System] | [Still Active / Expired / Revoked / Downgraded] | [YYYY-MM-DD] |
| ITM-[YYYY]-[NNNN] | | | | | |

### 7.3 Quarterly Review Checklist

*Complete this checklist at each formal quarterly review and retain as evidence for audit purposes.*

- [ ] All sharing arrangements confirmed active and agreements current
- [ ] Automated feed ingestion verified and feed health reviewed
- [ ] All intelligence items reviewed for continued relevance and validity
- [ ] Expired or revoked items archived per retention schedule
- [ ] Action disposition log reviewed; all open items have assigned owners
- [ ] PDPA compliance check: no unredacted personal data present in shared intelligence without basis
- [ ] New sharing arrangements reviewed and documented
- [ ] Terminated arrangements removed from active register
- [ ] Review findings reported to [CISO / Risk Committee]
- [ ] Register signed off by IT Operations Manager

---

## 8. Data Retention and Handling

*All records in this register are subject to [Organization Name]'s data retention policy and applicable regulatory requirements.*

| Record Type | Minimum Retention Period | Storage Location | Access Control | Disposal Method |
|---|---|---|---|---|
| Sharing event logs (automated) | 5 years | [SIEM / TIP Platform] | Restricted to Cybersecurity team | Secure automated purge |
| Manual sharing records | 5 years | [Secure document repository] | Restricted to IT Operations / Cybersecurity | Secure deletion per data disposal SOP |
| Quarterly review sign-offs | 7 years | [Document management system] | Restricted to IT Operations Manager | Secure deletion |
| Intelligence items (TLP:RED / AMBER) | Duration of validity + 1 year | [Isolated TIP environment] | Named recipients only | Secure deletion; notify originating party |

*Retention periods are subject to revision in accordance with any BNM or NACSA regulatory guidance issued subsequent to this document's effective date.*

---

## 9. Roles and Responsibilities

*This RACI matrix defines accountability for maintaining, reviewing, and acting upon Information Sharing Records. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations Manager | Cybersecurity Analyst | CISO | Risk & Compliance | DPO | Senior Management |
|---|---|---|---|---|---|---|
| Maintain automated sharing logs | R | R | I | I | — | — |
| Log manual sharing events | C | R | I | I | — | — |
| Classify and categorise intelligence items | C | R | A | C | C | — |
| Perform pre-sharing sensitivity assessment | A | R | C | C | C | — |
| Review and action intelligence | A | R | C | I | — | — |
| Manage sharing partner relationships | A | R | C | C | — | I |
| Conduct quarterly register review | A | R | C | C | — | — |
| Escalate critical intelligence | R | R | A | C | — | I |
| Approve new sharing arrangements | C | C | A | C | C | R |
| Report to Board / Risk Committee | C | — | R | A | — | I |
| Ensure PDPA compliance | C | C | C | C | A | — |
| Archive and dispose of expired records | A | R | I | C | C | — |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial document creation |
| | | | |
| | | | |

### 10.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | | [YYYY-MM-DD] |
| Chief Information Security Officer (CISO) | [Name] | | [YYYY-MM-DD] |
| Chief Risk Officer / Risk & Compliance Head | [Name] | | [YYYY-MM-DD] |
| [Board IT / Risk Committee Representative] | [Name] | | [YYYY-MM-DD] |

---

## 11. References

| Reference | Description |
|---|---|
| **BNM RMiT Policy Document, Clause 11.17** | Primary mandate for threat information sharing records maintenance |
| **BNM RMiT Policy Document, Clause 11.1 – 11.16** | Broader cyber risk management framework context |
| **NACSA National Cyber Security Policy (NCSP)** | CNII entity obligations for threat information sharing and reporting |
| **Personal Data Protection Act 2010 (PDPA)** | Personal data handling requirements applicable to intelligence records |
| **FIRST Traffic Light Protocol (TLP) Standard** | Classification framework applied to shared intelligence items |
| **MITRE ATT&CK Framework** | Threat categorisation taxonomy referenced in Section 4.2 |
| **[Organization Name] Cyber Security Policy** | [Internal policy reference / version] |
| **[Organization Name] Information Classification Policy** | [Internal policy reference / version] |
| **[Organization Name] Incident Response Plan** | [Internal policy reference / version] — governs escalation of actionable intelligence |
| **[Information Sharing Agreement — Partner Name]** | [Agreement reference / execution date] |
| **[Information Sharing Agreement — Partner Name]** | [Agreement reference / execution date] |

---

## 12. Appendices

### Appendix A — System-Generated Sharing Log Export

*Attach or reference the system-generated export from the Threat Intelligence Platform (TIP) or SIEM for the review period. Exports should be in a tamper-evident format (e.g., signed PDF or hash-verified CSV) and retained alongside this document.*

> **[ATTACH: TIP/SIEM Export — Period: YYYY-MM-DD to YYYY-MM-DD]**

### Appendix B — Active Sharing Arrangement Register

*Maintain a current list of all formal information sharing arrangements, including regulatory mandated memberships and voluntary bilateral/multilateral agreements.*

| Arrangement Name | Type | Governing Body | Agreement Date | Expiry / Renewal Date | Status | Relationship Owner |
|---|---|---|---|---|---|---|
| FinCERT (BNM) | Regulatory / Mandatory | Bank Negara Malaysia | [Date] | Ongoing | Active | [Name] |
| NACSA CyberSAFE | Regulatory / Mandatory | NACSA | [Date] | [Date] | Active | [Name] |
| [Financial Services ISAC] | Voluntary / Multilateral | [ISAC Body] | [Date] | [Date] | Active | [Name] |
| [Bilateral Partner] | Voluntary / Bilateral | [Partner Organization] | [Date] | [Date] | [Active / Pending] | [Name] |

### Appendix C — Approved Sharing Partners and Authorized Contacts

*This appendix lists all individuals authorized to receive TLP:RED or TLP:AMBER intelligence on behalf of each partner organization. Access to this appendix is restricted to the IT Operations Manager and CISO.*

> **[RESTRICTED — Refer to secure contacts register maintained by IT Operations Manager]**

### Appendix D — Intelligence Sharing Escalation Matrix

*Defines thresholds and escalation paths for intelligence items that may require immediate action, regulatory notification, or Board-level awareness.*

| Intelligence Severity | Time to Triage | Time to Action | Escalation Path | Regulatory Notification Required? |
|---|---|---|---|---|
| **Critical** | Immediate (< 1 hour) | < 4 hours | Analyst → CISO → CRO → Board | Assess for BNM / NACSA notification |
| **High** | < 4 hours | < 24 hours | Analyst → CISO | Assess for BNM / NACSA notification |
| **Medium** | < 24 hours | < 5 business days | Analyst → IT Operations Manager | Generally not required |
| **Low / Informational** | < 5 business days | As scheduled | Analyst | Not required |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **IOC** | Indicator of Compromise — observable evidence that a system may have been breached (e.g., malicious IP, file hash, domain) |
| **TIP** | Threat Intelligence Platform — system used to aggregate, analyse, and disseminate threat intelligence |
| **TLP** | Traffic Light Protocol — standardized framework for classifying and controlling the distribution of sensitive information |
| **SIEM** | Security Information and Event Management — platform for real-time monitoring and logging of security events |
| **FinCERT** | Financial Sector Computer Emergency Response Team, operated by BNM |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **ISAC** | Information Sharing and Analysis Centre |
| **CNII** | Critical National Information Infrastructure |
| **APT** | Advanced Persistent Threat — sophisticated, long-term cyber intrusion campaign |
| **MITRE ATT&CK** | Globally accessible knowledge base of adversary tactics and techniques based on real-world observations |

---

*This document is classified **Confidential** and is subject to [Organization Name]'s Information Classification Policy. Unauthorised disclosure is prohibited. For queries regarding this document, contact the IT Operations Manager at [contact details].*