# SIEM Architecture Documentation

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

## 1. Purpose and Scope

This document provides the architecture and deployment documentation for [Organization Name]'s Security Information and Event Management (SIEM) system. It serves as a primary evidence artifact demonstrating compliance with **BNM Risk Management in Technology (RMiT) Policy Document, Clause 11.7**, which mandates that financial institutions implement and maintain appropriate security monitoring capabilities commensurate with their risk profile.

This document covers the logical and physical architecture of the SIEM platform, data ingestion sources, detection use cases, operational procedures, and integration points with adjacent security controls. It is intended for review by internal audit, the SOC Manager, and BNM examiners during regulatory assessments.

**Scope includes:**
- All production systems, network segments, and cloud environments within [Organization Name]'s defined security monitoring perimeter
- Third-party managed service components integrated into the SIEM pipeline
- Log sources mandated under RMiT Clause 11.7 and associated BNM circulars

**Out of Scope:**
- [Define any explicitly excluded systems or environments]

---

## 2. Assessment Scope and Criteria

*Describe the systems, environments, and asset categories within the SIEM monitoring scope. State the criteria used to determine inclusion (e.g., criticality classification, regulatory mandate, data sensitivity).*

### 2.1 In-Scope Systems and Environments

| Asset Category | Description | Criticality | Included in SIEM |
|---|---|---|---|
| Core Banking Systems | [System names / platforms] | Critical | Yes |
| Internet-Facing Applications | [Web portals, APIs] | High | Yes |
| Network Infrastructure | [Firewalls, routers, switches] | High | Yes |
| Endpoints | [Servers, privileged workstations] | Medium–High | Yes |
| Cloud Environments | [AWS / Azure / GCP tenants] | [Criticality] | [Yes/Partial] |
| Third-Party Integrations | [Payment gateways, vendors] | [Criticality] | [Yes/No] |

### 2.2 Scoping Criteria

- Assets classified as **Critical** or **High** under [Organization Name]'s Asset Classification Policy are mandatory inclusions.
- Systems processing personal data subject to **PDPA 2010** are included regardless of criticality tier.
- Scope is reviewed and updated **quarterly** or upon material change to the IT environment.

---

## 3. Methodology

*Describe the architectural design methodology, standards, and frameworks applied during the SIEM design and deployment. Reference relevant industry standards where applicable.*

### 3.1 Design Standards and Frameworks

- **BNM RMiT Policy Document** — Clause 11.7 (Security Event Monitoring)
- **NIST SP 800-92** — Guide to Computer Security Log Management
- **MITRE ATT&CK Framework** — Threat-informed detection engineering
- [Additional internal or industry standards]

### 3.2 Architecture Design Approach

| Design Principle | Application |
|---|---|
| Centralised log aggregation | All log sources forward to a single SIEM platform |
| Data integrity and non-repudiation | Logs are stored in immutable, tamper-evident format |
| High availability | [Active-active / active-passive] deployment with [RTO/RPO targets] |
| Least privilege access | Role-based access control applied to all SIEM console users |
| Retention compliance | Log retention set to minimum **[X] months** per RMiT requirements |

### 3.3 Deployment Model

- **Platform:** [SIEM Product Name and Version, e.g., Wazuh 4.x, Splunk Enterprise, Microsoft Sentinel]
- **Deployment Type:** [On-premises / Cloud-native / Hybrid]
- **Hosting Environment:** [Data centre location / Cloud region — must be within Malaysia for regulated data per BNM requirements]
- **Managed Service Component:** [Yes / No — if yes, identify MSSP and describe oversight arrangement]

---

## 4. Findings and Ratings

*Document the outcomes of the most recent SIEM health assessment or audit review. Include coverage gaps, detection effectiveness ratings, and log source completeness.*

### 4.1 SIEM Health Assessment Summary

| Assessment Area | Rating | Finding Summary | Remediation Status |
|---|---|---|---|
| Log Source Coverage | [Satisfactory / Needs Improvement / Critical Gap] | [Summary of finding] | [Open / In Progress / Closed] |
| Detection Rule Effectiveness | [Rating] | [Summary] | [Status] |
| Alert Fidelity (False Positive Rate) | [Rating] | [Summary] | [Status] |
| Retention Compliance | [Rating] | [Summary] | [Status] |
| SIEM Platform Availability (SLA) | [Rating] | [Summary] | [Status] |
| Access Control Review | [Rating] | [Summary] | [Status] |

### 4.2 Open Findings Tracker

| Finding ID | Description | Severity | Owner | Target Remediation Date |
|---|---|---|---|---|
| [F-001] | [Description of gap or deficiency] | [Critical/High/Medium/Low] | [Owner] | [Date] |

---

## 5. Evidence Reviewed

*List the supporting artefacts, configurations, logs, and documentation reviewed to validate the SIEM architecture and operational effectiveness.*

### 5.1 Documentation Evidence

| Document / Artefact | Version / Date | Source |
|---|---|---|
| SIEM Platform Configuration Baseline | [Version/Date] | SOC Team |
| Log Source Onboarding Register | [Version/Date] | SOC Team |
| Detection Use Case Catalogue | [Version/Date] | SOC Team |
| Incident Response Playbooks | [Version/Date] | CIRT / SOC |
| SIEM Access Control Matrix | [Version/Date] | IT Security |
| Platform Availability / Uptime Reports | [Date Range] | SIEM Admin |
| Previous Internal Audit Report | [Date] | Internal Audit |

### 5.2 Technical Evidence

- SIEM console screenshots demonstrating active log ingestion from all in-scope sources
- Sample alert and case management records for the review period ([Date Range])
- Log retention verification confirming compliance with [X]-month requirement
- Backup and recovery test results dated [Date]
- Network diagram showing SIEM data flows (see **Appendix A**)

---

## 6. Recommendations

*Document remediation actions, enhancement recommendations, and strategic improvements arising from the assessment or review cycle.*

### 6.1 Priority Recommendations

| Ref | Recommendation | Priority | Responsible Party | Target Date | Status |
|---|---|---|---|---|---|
| R-001 | [e.g., Onboard remaining [X] servers currently missing from log collection] | High | SOC Manager | [Date] | [Open] |
| R-002 | [e.g., Tune detection rules to reduce false positive rate below 5%] | Medium | SOC Analyst | [Date] | [Open] |
| R-003 | [e.g., Implement automated SIEM health dashboards for management reporting] | Medium | SIEM Admin | [Date] | [Open] |
| R-004 | [e.g., Review and update log retention policy to align with revised RMiT guidance] | Low | SOC Manager | [Date] | [Open] |

### 6.2 Strategic Enhancements

- [Planned integration with SOAR platform for automated response]
- [Roadmap for UEBA (User and Entity Behaviour Analytics) capability]
- [Additional threat intelligence feed integrations]

---

## 7. Roles and Responsibilities

*The following RACI table defines accountability for the SIEM architecture, operation, and ongoing compliance of this document.*

| Activity | SOC Manager | SIEM Admin | SOC Analyst | CISO | IT Infrastructure | Internal Audit |
|---|---|---|---|---|---|---|
| SIEM architecture design and approval | A | R | I | C | C | I |
| Log source onboarding and configuration | A | R | C | I | C | I |
| Detection use case development and tuning | A | C | R | I | I | I |
| Alert triage and incident escalation | A | I | R | I | I | I |
| SIEM platform maintenance and patching | A | R | I | I | C | I |
| Access control review | A | R | I | C | I | C |
| Compliance reporting and evidence preparation | R | C | C | A | I | C |
| Quarterly architecture review | R | C | I | A | I | C |
| Document review and update | R | C | I | A | I | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 8. Sign-off and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |

### 8.2 Approval Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Manager | [Name] | | [Date] |
| CISO / Head of IT Security | [Name] | | [Date] |
| Internal Audit Representative | [Name] | | [Date] |
| [CTO / CIO (if required)] | [Name] | | [Date] |

> **Note:** This document is classified **Confidential**. Distribution is restricted to personnel with a legitimate business need. Unauthorised disclosure is prohibited under [Organization Name]'s Information Security Policy and may constitute a breach of the **Personal Data Protection Act 2010 (PDPA)**.

---

## 9. References

| Reference | Description |
|---|---|
| BNM RMiT — Clause 11.7 | Security event monitoring requirements for licensed financial institutions |
| BNM RMiT — Clause 11.1–11.6 | Broader cybersecurity controls context for SIEM deployment |
| NIST SP 800-92 | Guide to Computer Security Log Management |
| MITRE ATT&CK Framework | Threat-informed detection engineering methodology |
| ISO/IEC 27001:2022 — Annex A.8.15 | Logging requirements |
| NACSA CSAF | Cybersecurity framework applicability for critical information infrastructure |
| [Organization Name] Information Security Policy | v[X], dated [Date] |
| [Organization Name] Incident Response Policy | v[X], dated [Date] |

---

## Appendices

### Appendix A — SIEM Network Architecture Diagram

*Insert a network/data flow diagram illustrating log source connectivity, collection agents, aggregation points, SIEM platform components, and integration with adjacent security tools (e.g., ticketing, SOAR, threat intel feeds).*

[Attach diagram or embed image here]

### Appendix B — Log Source Register

*A complete inventory of all systems configured to forward logs to the SIEM, including log format, forwarding method, collection frequency, and onboarding date.*

| Log Source | System Type | IP / Hostname | Log Format | Forwarding Method | Onboarded Date | Status |
|---|---|---|---|---|---|---|
| [e.g., Firewall-01] | Network Firewall | [IP] | Syslog (CEF) | Syslog UDP/514 | [Date] | Active |
| [e.g., AD-DC-01] | Active Directory DC | [IP] | Windows Event Log | WinRM Agent | [Date] | Active |

### Appendix C — Detection Use Case Catalogue Summary

*Summary of active detection rules mapped to threat categories and regulatory requirements. Full catalogue maintained in [location/system].*

| Use Case ID | Name | MITRE Tactic | RMiT Relevance | Severity | Status |
|---|---|---|---|---|---|
| [UC-001] | Brute Force Login Detection | Credential Access (TA0006) | Clause 11.7 | High | Active |
| [UC-002] | Privileged Account After-Hours Access | Privilege Escalation (TA0004) | Clause 11.7 | High | Active |

### Appendix D — SIEM Platform SLA and Availability Report

*Insert the most recent quarterly availability report for the SIEM platform, confirming uptime against the defined SLA target of [X]%.*

[Attach report or summarise metrics here]

---

*End of Document — [Organization Name] | [Document ID] | Version 1.0 | Classification: Confidential*