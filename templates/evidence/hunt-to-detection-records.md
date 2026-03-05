# Hunt-to-Detection Records

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head, e.g., Head of Cyber Security / CISO] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section describes the intent of this document and the regulatory obligation it fulfills.*

This document serves as an evidence record capturing the lifecycle of threat hunting activities and their conversion into automated detection rules within [Organization Name]. It provides a structured audit trail demonstrating that threat intelligence findings derived from proactive threat hunts are operationalized into the Security Information and Event Management (SIEM) or equivalent detection platforms, in accordance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document.

This record supports [Organization Name]'s compliance with **RMiT Clause 11.18**, which requires financial institutions to establish threat hunting capabilities and ensure that identified threats are systematically transitioned into sustainable, automated detection mechanisms.

### 1.2 Scope

*Define the boundaries of this record — which systems, environments, and organizational units are covered.*

This document applies to:

- All threat hunting activities conducted by, or on behalf of, [Organization Name]
- All detection rules derived from threat hunting findings and deployed within the organization's security monitoring infrastructure
- The following environments and asset classes: [e.g., Core Banking Systems, Internet-Facing Applications, Internal Network Infrastructure, Cloud Workloads]
- All personnel within the Security Operations Centre (SOC), Cyber Threat Intelligence (CTI), and Cyber Defense teams

**Out of Scope:**

- Detection rules generated from sources other than proactive threat hunting (e.g., vendor-supplied rule packs, automated vulnerability scanner signatures)
- [Any other explicitly excluded systems or processes]

---

## 2. Asset / Item Identification

*This section uniquely identifies each threat hunt engagement and its associated detection artefact(s). Each row in the table below corresponds to a single hunt-to-detection conversion record.*

### 2.1 Hunt Engagement Registry

| Field | Value |
|---|---|
| **Hunt Record ID** | HTD-[YYYY]-[NNNN] |
| **Hunt Name / Title** | [Descriptive name, e.g., "Lateral Movement via Pass-the-Hash — Domain Controllers"] |
| **Originating Hunt Report ID** | [Reference to the parent Threat Hunt Report] |
| **Target Asset(s)** | [Asset name(s), hostname(s), IP range(s), or system classification] |
| **Asset Criticality** | [Critical / High / Medium / Low] |
| **Environment** | [Production / UAT / DR / Cloud — specify provider if applicable] |
| **Hunt Trigger** | [Hypothesis-driven / Intelligence-led / Anomaly-based / Periodic] |
| **Threat Actor / Campaign Reference** | [MITRE ATT&CK Group, known campaign name, or "Unknown"] |
| **MITRE ATT&CK Technique(s)** | [e.g., T1550.002 — Pass the Hash] |
| **Hunt Conducted By** | [Internal SOC / Managed Security Service Provider (MSSP) / Red Team] |
| **Hunt Start Date** | [DD/MM/YYYY] |
| **Hunt End Date** | [DD/MM/YYYY] |
| **Findings Summary** | [Brief description of what was found — or "No Malicious Activity Detected"] |

---

## 3. Classification and Categorisation

*Classify the threat hunting record and the derived detection artefact according to the organization's information classification scheme and threat taxonomy. This supports risk-proportionate handling and escalation.*

### 3.1 Information Classification

| Attribute | Value |
|---|---|
| **Record Classification** | [Confidential / Restricted / Internal / Public] |
| **Handling Caveat** | [e.g., "Security Operations — Need to Know Only"] |
| **Retention Period** | [e.g., 3 years — in accordance with [Organization Name] Records Retention Policy] |
| **Disposal Method** | [Secure deletion / Physical destruction / Archive] |

### 3.2 Threat Categorisation

| Attribute | Value |
|---|---|
| **Threat Category** | [e.g., Insider Threat / Advanced Persistent Threat (APT) / Ransomware / Supply Chain] |
| **Threat Severity** | [Critical / High / Medium / Low / Informational] |
| **Kill Chain Phase** | [e.g., Reconnaissance / Weaponization / Delivery / Exploitation / Installation / C2 / Actions on Objectives] |
| **MITRE ATT&CK Tactic(s)** | [e.g., TA0008 — Lateral Movement] |
| **MITRE ATT&CK Technique(s)** | [e.g., T1550.002] |
| **Affected Asset Type** | [Server / Endpoint / Network Device / Application / Identity / Data Store] |
| **Business Function Impacted** | [e.g., Treasury Operations / Retail Banking / Payment Processing / All] |

### 3.3 Detection Rule Classification

| Attribute | Value |
|---|---|
| **Detection Rule ID** | [DR-[YYYY]-[NNNN]] |
| **Detection Rule Type** | [Correlation Rule / Threshold Alert / Behavioural Baseline / Indicator Match (IOC)] |
| **Detection Platform** | [e.g., Wazuh / Microsoft Sentinel / Splunk ES / IBM QRadar] |
| **Rule Sensitivity** | [High Fidelity / Medium Fidelity / Low Fidelity / Tuning Required] |
| **Expected False Positive Rate** | [Low / Medium / High / Unknown — provide justification] |

---

## 4. Owner and Custodian

*Record the accountable and operationally responsible parties for both the threat hunt record and the resulting detection rule. This establishes clear ownership for ongoing maintenance and audit purposes.*

### 4.1 Hunt Record Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **Record Owner** | [Full Name] | [e.g., Head of Cyber Security] | [Email / Extension] |
| **Hunt Lead (Author)** | [Full Name] | [e.g., Threat Intelligence Analyst] | [Email / Extension] |
| **Technical Reviewer** | [Full Name] | [e.g., SOC Manager] | [Email / Extension] |
| **Compliance Reviewer** | [Full Name] | [e.g., Technology Risk Manager] | [Email / Extension] |

### 4.2 Detection Rule Ownership

| Role | Name | Department | Contact |
|---|---|---|---|
| **Detection Rule Owner** | [Full Name] | [e.g., SOC Manager / Security Engineering Lead] | [Email / Extension] |
| **Rule Custodian (Technical)** | [Full Name] | [e.g., SIEM Engineer / Detection Engineer] | [Email / Extension] |
| **Escalation Contact** | [Full Name] | [e.g., CISO / Head of Technology Risk] | [Email / Extension] |

### 4.3 Asset Owner (Hunted Asset)

| Asset | Asset Owner | Department | Custodian |
|---|---|---|---|
| [Asset Name / System] | [Full Name] | [Business Unit] | [Full Name / Team] |
| [Asset Name / System] | [Full Name] | [Business Unit] | [Full Name / Team] |

---

## 5. Status and Lifecycle Stage

*Track the current state of each hunt-to-detection record and its associated detection rule through the full lifecycle — from initial finding to active production deployment and eventual decommission.*

### 5.1 Hunt Record Status

| Status | Description |
|---|---|
| **Draft** | Threat hunt completed; findings documented but not yet reviewed |
| **Under Review** | Record submitted for technical and compliance review |
| **Approved** | Record reviewed, approved, and detection rule development authorized |
| **Converted** | Detection rule(s) derived and deployed to production |
| **Closed — No Finding** | Hunt completed; no actionable findings; record archived |
| **Superseded** | Record replaced by a newer version or consolidated record |

**Current Record Status:** [Select from above]

### 5.2 Detection Rule Lifecycle

| Stage | Description | Date | Actioned By |
|---|---|---|---|
| **Hunt Finding Identified** | Threat behaviour identified during hunt | [DD/MM/YYYY] | [Name] |
| **Detection Logic Drafted** | Detection rule logic written and documented | [DD/MM/YYYY] | [Name] |
| **Testing — Lab / UAT** | Rule tested in non-production environment | [DD/MM/YYYY] | [Name] |
| **False Positive Tuning** | Rule refined to reduce noise | [DD/MM/YYYY] | [Name] |
| **Change Advisory Board (CAB) Approval** | Change approved for production deployment | [DD/MM/YYYY] | [Name] |
| **Deployed to Production** | Rule active in production SIEM | [DD/MM/YYYY] | [Name] |
| **Post-Deployment Validation** | Rule confirmed firing correctly in production | [DD/MM/YYYY] | [Name] |
| **Periodic Review** | Rule reviewed for continued relevance and accuracy | [DD/MM/YYYY] | [Name] |
| **Retired / Decommissioned** | Rule removed; reason documented | [DD/MM/YYYY] | [Name] |

**Current Lifecycle Stage:** [Select from above]

### 5.3 Detection Rule Details

*Provide the technical specification of the detection rule derived from this hunt record.*

| Field | Value |
|---|---|
| **Detection Rule ID** | [DR-[YYYY]-[NNNN]] |
| **Rule Name** | [Descriptive rule name as deployed in SIEM] |
| **Rule Version** | [e.g., 1.0] |
| **Target Log Source(s)** | [e.g., Windows Security Event Log, Sysmon, Zeek/Bro, EDR telemetry] |
| **Key Detection Logic (Plain Language)** | [e.g., "Alert when LSASS memory access is observed from a non-system process within 60 seconds of a successful domain authentication event"] |
| **SIEM Query / Rule Reference** | [Rule ID in SIEM platform, or attach rule export as Appendix] |
| **Severity Level** | [Critical / High / Medium / Low] |
| **Alert Routing** | [e.g., SOC Tier 2 Queue / Incident Response Team / Automated Playbook] |
| **Linked Playbook / Runbook** | [Playbook ID or Name] |
| **Suppression / Exception Applied** | [Yes / No — if Yes, document justification in Appendix] |

---

## 6. Last Review Date

*Record all review and validation activities performed on this hunt-to-detection record and its associated detection rule. Periodic reviews are required to ensure ongoing relevance of the detection logic.*

### 6.1 Review Schedule

| Review Type | Frequency | Last Review Date | Next Review Date | Reviewer |
|---|---|---|---|---|
| **Triggered Review** (Post-Incident / New Intelligence) | Per-event | [DD/MM/YYYY] | N/A — As required | [Name / Role] |
| **Periodic Review** | Quarterly | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name / Role] |
| **Annual Effectiveness Review** | Annually | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name / Role] |

### 6.2 Review Log

| Review Date | Review Type | Reviewer | Findings / Outcome | Action Taken | Next Review Date |
|---|---|---|---|---|---|
| [DD/MM/YYYY] | [Periodic / Triggered] | [Name, Role] | [e.g., Rule remains effective; no tuning required] | [e.g., No change / Rule updated — see v1.1] | [DD/MM/YYYY] |
| [DD/MM/YYYY] | [Periodic / Triggered] | [Name, Role] | [e.g., Increased false positive rate observed] | [e.g., Threshold adjusted; Rule version incremented] | [DD/MM/YYYY] |

### 6.3 Effectiveness Metrics

*Where available, capture operational metrics to demonstrate the detection rule's real-world effectiveness.*

| Metric | Value | Reporting Period |
|---|---|---|
| **Total Alerts Generated** | [Number] | [DD/MM/YYYY – DD/MM/YYYY] |
| **True Positive Alerts** | [Number] | [As above] |
| **False Positive Alerts** | [Number] | [As above] |
| **True Positive Rate (%)** | [%] | [As above] |
| **Incidents Escalated from Rule** | [Number] | [As above] |
| **Mean Time to Detect (MTTD)** | [Hours / Minutes] | [As above] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for the Hunt-to-Detection Records process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO / Head of Cyber Security | SOC Manager | Detection Engineer / SIEM Analyst | Threat Intelligence Analyst | Technology Risk Manager | Asset Owner | Compliance / Audit |
|---|---|---|---|---|---|---|---|
| Authorize and scope threat hunt | A | R | I | C | C | C | I |
| Conduct threat hunt and document findings | I | A | C | R | I | I | I |
| Draft detection rule logic from hunt findings | I | A | R | C | I | I | I |
| Test detection rule in UAT environment | I | A | R | C | I | I | I |
| Submit rule for CAB approval | I | R | A | I | C | I | I |
| Deploy detection rule to production | A | R | R | I | I | I | I |
| Validate post-deployment rule effectiveness | I | A | R | I | I | I | I |
| Conduct periodic review of hunt record | A | R | C | C | C | I | C |
| Maintain and update hunt-to-detection records | I | A | R | I | I | I | I |
| Report on hunt-to-detection metrics | A | R | C | C | C | I | I |
| Retire / decommission obsolete detection rules | A | R | R | C | I | I | I |
| Provide record for regulatory audit or examination | A | C | C | I | R | I | R |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Title] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Name, Title] | [e.g., Detection rule logic updated following false positive tuning] |
| [2.0] | [DD/MM/YYYY] | [Name, Title] | [e.g., Significant revision following annual effectiveness review] |

### 8.2 Approval Sign-Off

*This record requires approval from the roles identified below prior to the detection rule being deployed to the production environment.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Relevant Department Head / Record Owner | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| SOC Manager | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| Technology Risk Manager | [Full Name] | ___________________________ | [DD/MM/YYYY] |
| CISO (where rule classified Critical/High) | [Full Name] | ___________________________ | [DD/MM/YYYY] |

---

## 9. References

*The following regulatory instruments, standards, and internal policies govern this document.*

| Reference | Title | Clause / Section | Applicability |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | **Clause 11.18** | Primary regulatory obligation — threat hunting and detection operationalization |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 11.1 – 11.5 | General cyber risk management and security monitoring requirements |
| BNM RMiT | Risk Management in Technology Policy Document | Clause 10.x | Technology risk governance and oversight |
| MITRE ATT&CK | Enterprise ATT&CK Framework | Applicable Tactics / Techniques | Threat classification and detection rule mapping |
| NIST SP 800-61 Rev. 2 | Computer Security Incident Handling Guide | All | Incident response integration |
| NIST SP 800-137 | Information Security Continuous Monitoring | All | Continuous monitoring context |
| [Organization Name] | Cyber Security Policy | [Section] | Internal policy alignment |
| [Organization Name] | Security Incident Response Plan | [Section] | Escalation and response procedures |
| [Organization Name] | Information Classification Policy | [Section] | Record classification requirements |
| [Organization Name] | Change Management Policy | [Section] | CAB process for production rule deployment |

---

## 10. Appendices

### Appendix A — Detection Rule Export

*Attach or embed the exported detection rule in its native format (e.g., Sigma rule YAML, Splunk SPL, KQL for Microsoft Sentinel, Wazuh XML rule). Where the rule cannot be embedded, provide the SIEM rule ID and confirm the rule export is stored in [Organization Name]'s secure detection rule repository.*

| Rule ID | Platform | Rule Format | Repository Location | Export Attached |
|---|---|---|---|---|
| [DR-YYYY-NNNN] | [SIEM Platform] | [Sigma / SPL / KQL / XML] | [Repository path or URL] | [Yes / No — see attached] |

```
[Paste or embed detection rule logic here, or mark as "Refer to attached file: DR-YYYY-NNNN_export.[ext]"]
```

---

### Appendix B — Threat Hunt Report Reference

*Provide a summary reference to the parent Threat Hunt Report from which this detection record was derived. The full Threat Hunt Report is a separate controlled document.*

| Field | Value |
|---|---|
| **Parent Threat Hunt Report ID** | [THR-YYYY-NNNN] |
| **Hunt Report Title** | [Title of parent report] |
| **Report Classification** | [Confidential / Restricted] |
| **Report Location** | [Secure document repository path] |
| **Key Finding(s) Driving This Record** | [Brief summary — 1 to 3 sentences] |

---

### Appendix C — Exception and Suppression Register

*If any suppression or exception has been applied to the detection rule (e.g., whitelisted processes, excluded subnets, reduced alert volume for known noisy assets), document the justification and approval here. Exceptions must be reviewed at each periodic review cycle.*

| Exception ID | Description | Justification | Approved By | Approval Date | Expiry Date | Review Date |
|---|---|---|---|---|---|---|
| [EXC-YYYY-NNNN] | [e.g., Excluded host: SCCM-SRV01 from LSASS access rule] | [e.g., SCCM requires LSASS access for patch deployment; confirmed benign via asset owner] | [Name, Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] |

---

### Appendix D — Related Incidents and Investigations

*Record any security incidents or formal investigations that were detected by, or relate to, the detection rule documented in this record. This linkage supports audit trail integrity and demonstrates the operational value of the threat hunting programme.*

| Incident ID | Incident Title | Date | Outcome | Detection Rule Contribution |
|---|---|---|---|---|
| [INC-YYYY-NNNN] | [Incident title] | [DD/MM/YYYY] | [e.g., Contained / Escalated to BNM / False Positive] | [e.g., Rule triggered initial alert; confirmed true positive by Tier 2] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Threat Hunt** | A proactive, analyst-led activity to search for evidence of adversary behaviour within an environment that has not yet triggered automated alerts |
| **Hunt-to-Detection** | The process of formalizing a threat hunting finding into a persistent, automated detection rule deployed within a SIEM or equivalent platform |
| **Detection Rule** | A logical expression or query configured within a security monitoring platform to automatically identify and alert on specific patterns of malicious or anomalous behaviour |
| **SIEM** | Security Information and Event Management — a platform that aggregates, correlates, and alerts on security event data |
| **MITRE ATT&CK** | A globally accessible knowledge base of adversary tactics and techniques based on real-world observations |
| **True Positive** | An alert generated by a detection rule that correctly identifies genuine malicious or anomalous activity |
| **False Positive** | An alert generated by a detection rule that incorrectly flags benign activity as malicious |
| **RACI** | Responsible, Accountable, Consulted, Informed — a matrix used to define roles and responsibilities |
| **CAB** | Change Advisory Board — the governance body responsible for approving changes to production systems |
| **RMiT** | Risk Management in Technology — Bank Negara Malaysia's policy document governing technology risk for licensed financial institutions |

---

*This document is classified as **Confidential**. It must be handled, stored, and disposed of in accordance with [Organization Name]'s Information Classification and Handling Policy. Unauthorized disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Last Review Date] | Owner: [Relevant Department Head]*