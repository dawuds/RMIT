# Indicators of Compromise (IoC) Management Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Indicators of Compromise (IoC) Management Procedure |
| **Owner** | [Relevant Department Head — e.g., Head of Cyber Security / CISO] |
| **Department** | [Department Name — e.g., Information Security / Cyber Security Operations] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — typically 12 months from Last Review Date] |
| **Approved By** | [Approved By — Name and Designation] |
| **Regulatory Reference** | Bank Negara Malaysia Risk Management in Technology (RMiT) Policy — Clause 11.19 |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy References](#3-regulatory-and-policy-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [IoC Management Process Overview](#5-ioc-management-process-overview)
6. [Step-by-Step Process Flow](#6-step-by-step-process-flow)
   - 6.1 [IoC Collection and Ingestion](#61-ioc-collection-and-ingestion)
   - 6.2 [IoC Validation](#62-ioc-validation)
   - 6.3 [IoC Enrichment](#63-ioc-enrichment)
   - 6.4 [IoC Classification and Prioritisation](#64-ioc-classification-and-prioritisation)
   - 6.5 [IoC Operationalisation and Deployment](#65-ioc-operationalisation-and-deployment)
   - 6.6 [IoC Monitoring and Detection](#66-ioc-monitoring-and-detection)
   - 6.7 [IoC Review, Expiry, and Retirement](#67-ioc-review-expiry-and-retirement)
7. [Roles and Responsibilities (RACI)](#7-roles-and-responsibilities-raci)
8. [Tools and Systems](#8-tools-and-systems)
9. [Escalation Procedures](#9-escalation-procedures)
10. [Quality Assurance and Metrics](#10-quality-assurance-and-metrics)
11. [Exceptions and Waivers](#11-exceptions-and-waivers)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose

*Describe the intent of this procedure and why it is necessary for the organization's security posture and regulatory compliance. This section should be 2–4 sentences.*

This procedure establishes a structured and repeatable approach for [Organization Name] to collect, validate, enrich, classify, operationalise, and retire Indicators of Compromise (IoCs). It ensures that threat intelligence derived from internal observations and external sources is systematically applied to strengthen detection, containment, and response capabilities across the organization's technology infrastructure.

This procedure supports compliance with Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy, specifically Clause 11.19, which requires financial institutions to implement threat intelligence capabilities including the management of IoCs. Adherence to this procedure reduces the risk of undetected breaches and supports timely incident response.

---

## 2. Scope and Applicability

*Define the boundaries of this procedure — what systems, entities, data, and personnel it applies to. Be explicit about what is out of scope to avoid ambiguity during audits.*

### 2.1 In Scope

This procedure applies to:

- All technology assets owned, operated, or managed by [Organization Name], including but not limited to:
  - On-premises infrastructure (servers, endpoints, networking devices)
  - Cloud environments and hosted services (IaaS, PaaS, SaaS)
  - Internet-facing systems and applications
  - Internal networks and operational technology (OT) environments, where applicable
- All personnel responsible for cyber security operations, threat intelligence, and incident response, including:
  - Employees of [Organization Name]
  - Third-party managed security service providers (MSSPs) operating under contract
  - Contracted technology vendors with system access
- All IoC types managed by [Organization Name], including:
  - IP addresses (IPv4 and IPv6)
  - Domain names and fully qualified domain names (FQDNs)
  - URLs and URI patterns
  - File hashes (MD5, SHA-1, SHA-256)
  - Email addresses and sender headers
  - Registry keys and artefact paths
  - YARA rules and Sigma rules
  - MITRE ATT&CK Tactics, Techniques, and Procedures (TTPs)
  - Certificates (e.g., SSL/TLS thumbprints)

### 2.2 Out of Scope

The following are explicitly excluded from this procedure:

- Vulnerability management and patch prioritisation (refer to [Vulnerability Management Procedure — Document ID])
- Penetration testing artefacts and red team indicators (refer to [Red Team Engagement Procedure — Document ID])
- Fraud indicators managed by the Fraud Risk Management team (refer to [Fraud Risk Management Framework — Document ID])
- IoCs relating solely to physical security incidents

### 2.3 Applicability Statement

This procedure is mandatory for all staff and third parties involved in the collection, analysis, deployment, or review of threat intelligence artefacts within [Organization Name]. Non-compliance may result in disciplinary action in accordance with [Organization Name]'s HR policies and contractual obligations.

---

## 3. Regulatory and Policy References

*List all applicable regulatory frameworks, internal policies, and industry standards that this procedure supports. Include clause numbers where possible to demonstrate traceability during regulatory examinations.*

| Reference | Document / Standard | Relevant Clause / Section |
|---|---|---|
| BNM RMiT | Risk Management in Technology Policy (BNM/RH/PD 028-119) | Clause 11.19 — Cyber Threat Intelligence |
| BNM RMiT | Risk Management in Technology Policy | Clause 11.1 — Cyber Security Risk Management |
| BNM RMiT | Risk Management in Technology Policy | Clause 11.18 — Security Event Monitoring |
| BNM RMiT | Risk Management in Technology Policy | Clause 11.20 — Cyber Security Incident Management |
| Internal | [Organization Name] Information Security Policy | [Section Reference] |
| Internal | [Organization Name] Incident Response Procedure | [Document ID] |
| Internal | [Organization Name] Threat Intelligence Framework | [Document ID] |
| Internal | [Organization Name] SIEM Operational Procedure | [Document ID] |
| Industry | MITRE ATT&CK Framework | All applicable TTPs |
| Industry | STIX/TAXII Standard (OASIS) | Structured Threat Information Expression |
| Industry | NIST SP 800-61 Rev. 2 | Computer Security Incident Handling Guide |
| Industry | ISO/IEC 27035 | Information Security Incident Management |

---

## 4. Definitions and Abbreviations

*Define all technical terms and acronyms used in this document to ensure consistent interpretation across all readers, including auditors who may not have a technical background.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Indicator of Compromise (IoC)** | An artefact or observable evidence that a system has been compromised or is under active attack. IoCs may be technical (e.g., IP addresses, file hashes) or behavioural (e.g., TTPs). |
| **Threat Intelligence** | Evidence-based knowledge about existing or emerging threats that can be used to inform decisions about how to respond to those threats. |
| **Enrichment** | The process of adding contextual information to a raw IoC (e.g., geolocation, WHOIS data, malware family association) to improve its actionability. |
| **Operationalisation** | The act of deploying a validated IoC into security controls (e.g., SIEM rules, firewall blocklists, EDR signatures) so that it actively contributes to detection or prevention. |
| **False Positive** | An IoC that triggers a security alert but does not represent a genuine threat or malicious activity. |
| **True Positive** | An IoC that correctly identifies a genuine threat or malicious activity. |
| **IoC Lifecycle** | The complete process from IoC collection through validation, enrichment, operationalisation, monitoring, and eventual retirement. |
| **TTP** | Tactics, Techniques, and Procedures — the behavioural patterns used by threat actors, as categorised by frameworks such as MITRE ATT&CK. |
| **STIX** | Structured Threat Information Expression — a standardised language for representing cyber threat intelligence. |
| **TAXII** | Trusted Automated eXchange of Intelligence Information — a protocol for sharing cyber threat intelligence over HTTPS. |
| **Feed** | An automated or semi-automated stream of IoCs provided by an external threat intelligence provider or sharing community. |
| **Confidence Score** | A numerical or qualitative rating assigned to an IoC reflecting the reliability and accuracy of the intelligence. |
| **Expiry Date** | The date after which an IoC is considered stale and should be reviewed for retirement from active security controls. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| IoC | Indicator of Compromise |
| SIEM | Security Information and Event Management |
| EDR | Endpoint Detection and Response |
| TIP | Threat Intelligence Platform |
| TI | Threat Intelligence |
| SOC | Security Operations Centre |
| CSIRT | Computer Security Incident Response Team |
| MSSP | Managed Security Service Provider |
| TTPs | Tactics, Techniques, and Procedures |
| STIX | Structured Threat Information Expression |
| TAXII | Trusted Automated eXchange of Intelligence Information |
| PDNS | Passive DNS |
| IR | Incident Response |
| CISO | Chief Information Security Officer |
| RACI | Responsible, Accountable, Consulted, Informed |
| MD5 | Message Digest Algorithm 5 (hash function) |
| SHA | Secure Hash Algorithm |
| FQDN | Fully Qualified Domain Name |
| URL | Uniform Resource Locator |

---

## 5. IoC Management Process Overview

*Provide a high-level narrative of the end-to-end IoC lifecycle. This section should orient readers before they encounter the detailed steps in Section 6. Include a process flow diagram reference if one exists.*

[Organization Name] manages IoCs through a defined lifecycle that spans seven phases: **Collection → Validation → Enrichment → Classification → Operationalisation → Monitoring → Review/Retirement**. Each phase has defined inputs, outputs, responsible parties, and quality criteria.

The IoC management process is designed to ensure that:

- All IoCs entering [Organization Name]'s security controls are assessed for accuracy and relevance before deployment.
- IoCs are enriched with sufficient context to enable meaningful detection and triage.
- Deployed IoCs are actively monitored for efficacy and tuned to minimise false positives.
- Stale or expired IoCs are systematically retired to prevent alert fatigue and maintain control quality.
- The process is repeatable, auditable, and aligned with BNM RMiT Clause 11.19 requirements.

**Figure 1 — IoC Management Lifecycle (Reference)**

*Insert process flow diagram here. The diagram should illustrate the seven phases listed above, with decision points for validation failures and escalation triggers. Maintain this diagram in [Diagram Reference Location / Confluence Page / SharePoint Path].*

```
[IoC Source] → Collection → Validation → Enrichment → Classification
                                  ↓ (Invalid)                        ↓
                              [Rejection Log]               Operationalisation
                                                                    ↓
                                                   Monitoring & Detection
                                                                    ↓
                                                     Review / Retirement
```

---

## 6. Step-by-Step Process Flow

### 6.1 IoC Collection and Ingestion

*Detail all sources from which IoCs are collected, the mechanisms used to ingest them, and the initial logging requirements. Authors should list all active feeds and internal collection sources currently in use.*

#### 6.1.1 IoC Sources

[Organization Name] collects IoCs from the following source categories:

**External Commercial and Open-Source Feeds:**

| Feed Name | Provider | Feed Type | Format | Ingestion Frequency | Licence / Subscription |
|---|---|---|---|---|---|
| [Feed Name 1] | [Provider Name] | [e.g., IP Reputation] | [STIX, CSV, JSON] | [e.g., Every 1 hour] | [Commercial / Open-source] |
| [Feed Name 2] | [Provider Name] | [e.g., Malware Hash] | [STIX, CSV, JSON] | [e.g., Every 4 hours] | [Commercial / Open-source] |
| [Feed Name 3] | [Provider Name] | [e.g., Phishing URL] | [STIX, CSV, JSON] | [e.g., Daily] | [Commercial / Open-source] |
| [Feed Name 4] | [Provider Name] | [e.g., Domain Blocklist] | [STIX, CSV, JSON] | [e.g., Daily] | [Commercial / Open-source] |

**Information Sharing Communities and Government Sources:**

| Source | Organisation | Sharing Mechanism | Membership Basis |
|---|---|---|---|
| [e.g., FinanceISAC] | [Organisation Name] | [TAXII / Email / Portal] | [Membership / MOU] |
| [e.g., CyberSecurity Malaysia (CSM) alerts] | CyberSecurity Malaysia | [Portal / Email] | [Government Sector] |
| [e.g., BNM Cyber Intelligence Sharing] | Bank Negara Malaysia | [Designated Channel] | [Regulated Entity] |
| [e.g., FIRST (Forum of Incident Response)] | FIRST.org | [TLP-Restricted Feeds] | [Membership] |

**Internal Sources:**

- Security incident investigations and post-incident analysis
- SIEM alert triage outputs from the SOC
- Endpoint Detection and Response (EDR) telemetry
- Email security gateway analysis (phishing submissions)
- Honeypot and deception technology observations
- Threat hunting activities
- Penetration test findings (with appropriate tagging to distinguish from production IoCs)
- Dark web and open-source intelligence (OSINT) research conducted by the Threat Intelligence team

#### 6.1.2 Ingestion Procedure

1. All automated feeds shall be configured to ingest into the designated **Threat Intelligence Platform (TIP)**: [TIP System Name — e.g., OpenCTI, MISP, ThreatConnect].
2. Automated feed connectors shall be reviewed and confirmed operational by the Threat Intelligence Analyst at least [Weekly / Monthly].
3. Manual IoCs (e.g., from incident investigations or information sharing) shall be submitted via [Submission Method — e.g., TIP web interface, designated email alias, ticketing system].
4. All ingested IoCs shall be automatically tagged with:
   - **Source** — the originating feed or analyst
   - **Ingestion timestamp** — date and time of ingestion (UTC)
   - **Raw confidence score** — as provided by the source, or "Unassessed" if not provided
   - **IoC type** — one of the types listed in Section 2.1
5. IoCs ingested from internal incidents shall additionally be tagged with the relevant incident ticket reference number.

#### 6.1.3 Ingestion Logging Requirements

- All ingestion events (automated and manual) shall be logged in the TIP with a minimum retention period of **[X] months**, in alignment with [Organization Name]'s log retention policy ([Policy Reference]).
- Feed ingestion failures shall generate automated alerts to the Threat Intelligence team via [Alerting Mechanism — e.g., email, SIEM rule, ticketing].

---

### 6.2 IoC Validation

*Describe the process for determining whether an ingested IoC is accurate, relevant, and suitable for use within [Organization Name]'s environment. Include criteria for rejection and the handling of rejected IoCs.*

#### 6.2.1 Validation Objectives

Validation ensures that IoCs meet minimum quality thresholds before consuming analytical or operational resources. An IoC shall be considered valid if it meets all mandatory criteria below.

#### 6.2.2 Validation Criteria

| Criterion | Description | Mandatory / Recommended |
|---|---|---|
| **Accuracy** | The IoC is syntactically correct (e.g., valid IP format, valid hash length) | Mandatory |
| **Relevance** | The IoC is associated with threats relevant to the financial sector or [Organization Name]'s specific threat profile | Mandatory |
| **Uniqueness** | The IoC does not duplicate an existing active entry in the TIP | Mandatory |
| **Source Credibility** | The originating source has a documented reliability rating of [Threshold — e.g., Medium or above] | Mandatory |
| **Non-Whitelisted** | The IoC does not match any entry on [Organization Name]'s approved allowlist (e.g., CDN IPs, internal IP ranges) | Mandatory |
| **Timeliness** | The IoC was observed or reported within the past [X] days (configurable by IoC type) | Recommended |
| **Contextual Support** | The IoC is accompanied by at least minimal context (e.g., associated malware family, threat actor) | Recommended |

#### 6.2.3 Validation Steps

1. Upon ingestion, the TIP shall automatically perform syntactic validation checks against the applicable IoC type schema.
2. The TIP shall automatically cross-reference each IoC against the active allowlist maintained by [Responsible Team].
3. The Threat Intelligence Analyst shall perform manual triage on IoCs flagged for human review (e.g., IoCs from lower-confidence sources, novel IoC types).
4. IoCs that **pass** all mandatory criteria shall be promoted to the **Enrichment** queue (see Section 6.3).
5. IoCs that **fail** one or more mandatory criteria shall be:
   - Marked with status **"Rejected"** in the TIP
   - Logged with the rejection reason
   - Notified to the submitting analyst or feed owner (for manual submissions)
   - Retained in the TIP in rejected status for [X] months for audit purposes

#### 6.2.4 Allowlist Management

- [Organization Name]'s IoC allowlist shall be maintained in [System/Location].
- The allowlist shall include: internal IP address ranges, corporate domain names, approved third-party service provider IP ranges, and CDN provider IP ranges.
- Updates to the allowlist require approval from [Role — e.g., Senior Threat Intelligence Analyst or SOC Manager] and shall be documented with a change rationale.
- The allowlist shall be reviewed [Quarterly / Semi-annually].

---

### 6.3 IoC Enrichment

*Describe how validated IoCs are supplemented with contextual information to improve their analytical and operational value. Specify which enrichment sources and tools are used.*

#### 6.3.1 Enrichment Objectives

Enrichment transforms a raw IoC into an actionable intelligence artefact by adding contextual data. Enriched IoCs enable faster and more accurate analyst decision-making and more effective detection rule tuning.

#### 6.3.2 Enrichment Data Points

The following contextual data points shall be sought for each validated IoC, subject to availability:

| Data Point | Description | Applicable IoC Types | Enrichment Source |
|---|---|---|---|
| **Geolocation** | Country, city, ASN of the IP address | IP addresses | [Tool/Source — e.g., MaxMind, ipinfo.io] |
| **WHOIS Data** | Registrant information, registration date, registrar | IP addresses, Domains | [Tool/Source] |
| **Passive DNS** | Historical DNS resolutions | IP addresses, Domains | [Tool/Source — e.g., SecurityTrails, VirusTotal] |
| **Malware Family** | Associated malware family or campaign name | File hashes, IPs, Domains | [Tool/Source — e.g., VirusTotal, Hybrid Analysis] |
| **Threat Actor Attribution** | Known threat group association | All types | [Tool/Source — e.g., MISP, MITRE ATT&CK] |
| **MITRE ATT&CK Mapping** | Mapped TTPs | All types | [Tool/Source — e.g., MITRE ATT&CK Navigator] |
| **Multi-Source Corroboration** | Number of independent sources reporting the same IoC | All types | TIP aggregation |
| **First/Last Seen** | Dates of first and most recent observation | All types | TIP, external feeds |
| **Associated Campaigns** | Linked threat campaigns or incidents | All types | TIP, MISP |
| **Related IoCs** | Other IoCs observed in conjunction with this one | All types | TIP graph view |
| **Sandbox Analysis** | Dynamic analysis results | File hashes, URLs | [Tool/Source — e.g., Cuckoo, Any.run, Joe Sandbox] |
| **VirusTotal Score** | Detection ratio across AV engines | File hashes, URLs, IPs | VirusTotal API |

#### 6.3.3 Enrichment Procedure

1. Validated IoCs shall be automatically enriched via TIP integrations with the tools listed in Section 8.
2. For high-priority IoCs (as defined in Section 6.4), a Threat Intelligence Analyst shall conduct **manual enrichment** to supplement automated results.
3. Enrichment data shall be stored within the TIP record for the IoC, versioned with each update.
4. If enrichment reveals that an IoC is likely benign (e.g., a CDN IP with no malicious associations confirmed across multiple sources), it shall be flagged for re-validation and potentially retired.
5. Enrichment activities shall be completed within the SLA defined in the table below:

| IoC Priority | Enrichment SLA |
|---|---|
| Critical | [X] hours |
| High | [X] hours |
| Medium | [X] business days |
| Low | [X] business days |

---

### 6.4 IoC Classification and Prioritisation

*Explain the criteria used to assign a priority level to each IoC. Classification drives the urgency of operationalisation and the intensity of monitoring applied.*

#### 6.4.1 Classification Criteria

IoCs shall be classified based on the following factors:

| Factor | Description |
|---|---|
| **Threat Severity** | The potential impact of the associated threat (e.g., ransomware, APT, credential theft) |
| **Confidence Score** | The assessed reliability of the IoC, considering source credibility and multi-source corroboration |
| **Relevance to [Organization Name]** | Whether the IoC targets the financial sector, Malaysian entities, or [Organization Name] specifically |
| **Recency** | How recently the IoC was observed |
| **Operational Context** | Whether the IoC has been observed in [Organization Name]'s environment |

#### 6.4.2 Priority Classification Table

| Priority Level | Criteria | Operationalisation Target | Review Frequency |
|---|---|---|---|
| **Critical** | Confirmed active exploitation in [Organization Name]'s environment; or active campaign targeting Malaysian financial institutions with high confidence | Immediate — within [X] hours | Daily during active campaign |
| **High** | Associated with known APT groups or ransomware targeting the financial sector; high confidence score; recently observed | Within [X] hours | Weekly |
| **Medium** | Associated with known malware families; moderate confidence; relevant to sector | Within [X] business days | Monthly |
| **Low** | Low confidence; limited context; potentially relevant but not confirmed | Within [X] business days | Quarterly |
| **Informational** | For awareness only; not suitable for immediate operationalisation | Documented in TIP only | Upon next review cycle |

#### 6.4.3 Confidence Score Assignment

*Define the scale used to assess IoC confidence. Align this with the TIP's built-in scoring if applicable.*

| Confidence Level | Score Range | Description |
|---|---|---|
| **Very High** | 85–100 | Multiple independent high-credibility sources; confirmed in [Organization Name]'s environment |
| **High** | 70–84 | Multiple sources; strong contextual support |
| **Medium** | 50–69 | Single credible source or multiple lower-tier sources; partial context |
| **Low** | 25–49 | Single lower-credibility source; minimal context |
| **Very Low** | 0–24 | Unverified; single untrustworthy source |

---

### 6.5 IoC Operationalisation and Deployment

*Describe the process for deploying classified IoCs into active security controls. Include the approval process for deployment and the controls into which IoCs are deployed.*

#### 6.5.1 Deployment Targets

Validated and classified IoCs shall be deployed into the following security controls, subject to the control capabilities and IoC type compatibility:

| Security Control | IoC Types Supported | Deployment Mechanism | Responsible Team |
|---|---|---|---|
| SIEM (Security Information and Event Management) | All types | Detection rules / watchlists | SOC / TI Team |
| Endpoint Detection and Response (EDR) | File hashes, IP, domains | EDR console / policy push | SOC / Endpoint Team |
| Firewall / Next-Generation Firewall (NGFW) | IP addresses, domains, URLs | Firewall blocklist / FQDN objects | Network Security Team |
| Web Proxy / Secure Web Gateway | Domains, URLs | Category / blocklist update | Network Security Team |
| Email Security Gateway | IP addresses, domains, email addresses | Blocklist / reputation update | Email Security Team |
| Intrusion Detection / Prevention System (IDS/IPS) | IP addresses, signatures | Rule / signature update | Network Security Team |
| Threat Intelligence Platform (TIP) | All types | Native TIP storage and sharing | TI Team |
| DNS Security / DNS Firewall | Domains, FQDNs | DNS policy update | Network Security Team |
| Deception Technology / Honeypots | All types | Alert rule configuration | SOC |

#### 6.5.2 Deployment Approval Process

1. IoCs classified as **Critical** or **High** priority shall be approved for deployment by [Approver Role — e.g., SOC Manager / Senior TI Analyst] before activation in production controls.
2. IoCs classified as **Medium** or **Low** priority may be deployed by a Threat Intelligence Analyst without additional approval, subject to peer review within [X] business days.
3. All deployments shall be recorded in the TIP with:
   - Deployment target(s)
   - Deployment timestamp (UTC)
   - Approver name (for Critical/High)
   - Expected expiry or review date

4. For deployments that may impact business operations (e.g., blocking a domain that may be used by a business application), a **change impact assessment** shall be conducted prior to deployment and documented in [Change Management System Reference].

#### 6.5.3 Deployment Checklist

Before deploying an IoC to production controls, the responsible analyst shall confirm the following:

- [ ] IoC has been validated and enriched per Sections 6.2 and 6.3
- [ ] IoC is not present on the organization's allowlist
- [ ] Classification and confidence score have been assigned
- [ ] Deployment targets have been identified
- [ ] Impact to legitimate business activity has been assessed
- [ ] Approval obtained (for Critical/High priority IoCs)
- [ ] Expiry/review date has been set
- [ ] Deployment recorded in TIP with all required metadata

---

### 6.6 IoC Monitoring and Detection

*Describe how deployed IoCs are monitored for hits, how hits are triaged, and how detection efficacy is assessed over time.*

#### 6.6.1 Detection Monitoring

- The SOC shall monitor all security controls for IoC hits (alerts/matches) on a continuous basis during operational hours, as defined in the [SOC Operating Procedure — Document ID].
- IoC hits shall automatically generate alerts in [Alert Platform — e.g., SIEM, ticketing system].
- All IoC hits shall be investigated and classified as **True Positive**, **False Positive**, or **Benign True Positive** within the SLA defined in the [Incident Response Procedure — Document ID].

#### 6.6.2 Hit Triage Process

1. Upon receiving an IoC hit alert, the SOC Analyst shall:
   - Confirm the alert is not a known false positive or maintenance-related event.
   - Retrieve the full IoC record from the TIP (including enrichment context and confidence score).
   - Assess the context of the hit (source asset, user, network segment, time of day).
2. If the hit is classified as a **True Positive**, the analyst shall:
   - Escalate in accordance with Section 9 (Escalation Procedures).
   - Initiate an incident ticket in [Ticketing System] referencing the IoC.
   - Update the IoC record in the TIP with the hit event details.
3. If the hit is classified as a **False Positive**, the analyst shall:
   - Document the false positive rationale in the TIP IoC record.
   - Assess whether the IoC should be retired or its confidence score reduced.
   - Update the false positive counter for that IoC in the TIP.
4. IoCs with a **False Positive Rate exceeding [X]%** shall be automatically flagged for senior analyst review and possible retirement.

#### 6.6.3 Efficacy Metrics

The following metrics shall be tracked per IoC and in aggregate for reporting purposes:

| Metric | Definition | Target |
|---|---|---|
| True Positive Rate | % of hits confirmed as genuine threats | > [X]% |
| False Positive Rate | % of hits confirmed as non-threatening | < [X]% |
| Mean Time to Detection (MTTD) | Avg. time from IoC deployment to first hit | [Target Value] |
| IoC Coverage | % of IoCs with at least one active deployment | > [X]% |
| Feed Contribution Rate | % of actionable IoCs per feed | Reviewed quarterly |

---

### 6.7 IoC Review, Expiry, and Retirement

*Describe the process for reviewing active IoCs, determining when they should be retired, and how retirement is executed across all deployed controls.*

#### 6.7.1 IoC Expiry Policy

All IoCs shall be assigned an expiry date at the time of classification. Default expiry windows are as follows:

| IoC Type | Default Expiry Window | Rationale |
|---|---|---|
| IP Addresses | [X] days | IP addresses are frequently reassigned |
| Domains | [X] days | Domain ownership can change |
| URLs | [X] days | URLs may become inactive or repurposed |
| File Hashes (MD5/SHA) | [X] months | File hashes remain relevant longer |
| Email Addresses | [X] months | Malicious email infrastructure changes frequently |
| YARA / Sigma Rules | [X] months | Reviewed with each major platform update |
| TTPs (ATT&CK) | [X] months | Behavioural patterns change slowly |

Expiry windows may be extended for IoCs that continue to generate confirmed true positive hits, subject to analyst review.

#### 6.7.2 Review Process

1. The TIP shall generate automated notifications to the Threat Intelligence team [X] days before an IoC's expiry date.
2. The assigned Threat Intelligence Analyst shall review the IoC and determine one of the following dispositions:
   - **Renew** — IoC remains active; expiry date extended by [X] days
   - **Update** — IoC metadata updated (e.g., confidence score revised, enrichment refreshed)
   - **Retire** — IoC removed from all active security controls
3. For IoCs that have generated no hits within their active period, retirement shall be the default disposition unless specific intelligence justifies continued deployment.
4. All review decisions shall be documented in the TIP IoC record.

#### 6.7.3 Retirement Procedure

1. The Threat Intelligence Analyst shall update the IoC status to **"Retired"** in the TIP.
2. Automated TIP integrations shall push retirement signals to all connected security controls to remove the IoC from active blocklists and detection rules.
3. For manually managed controls (e.g., static firewall blocklists), the analyst shall raise a change ticket with the relevant team to remove the IoC within [X] business days of retirement.
4. Retired IoCs shall be retained in the TIP in **"Retired"** status for a minimum of **[X] months** to support incident retrospection and audit requirements.
5. Retirement shall be recorded with:
   - Retirement date
   - Retiring analyst
   - Retirement rationale
   - List of controls from which the IoC was removed

---

## 7. Roles and Responsibilities (RACI)

*Define who is responsible, accountable, consulted, and informed for each key activity in the IoC management lifecycle. Update role names to match [Organization Name]'s actual organizational structure.*

**RACI Key:**
- **R** — Responsible (performs the activity)
- **A** — Accountable (owns the outcome; approves)
- **C** — Consulted (provides input; two-way communication)
- **I** — Informed (receives updates; one-way communication)

| Activity | Threat Intelligence Analyst | Senior TI Analyst / TI Lead | SOC Analyst | SOC Manager | CISO / Head of Cyber Security | IT / Network Security Team | Business / Risk Owner |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Maintain and review IoC feeds and sources | R | A | C | I | I | I | — |
| Ingest IoCs into the TIP | R | A | C | I | I | — | — |
| Perform automated IoC validation | R | A | I | I | I | — | — |
| Perform manual IoC triage and validation | R | A | C | I | I | — | — |
| Maintain the IoC allowlist | C | R | C | A | I | C | — |
| Perform IoC enrichment (automated) | R | A | I | I | I | — | — |
| Perform IoC enrichment (manual, high priority) | R | A | C | I | I | — | — |
| Assign IoC classification and priority | R | A | C | I | I | — | — |
| Approve deployment of Critical/High IoCs | C | R | — | A | C | — | — |
| Deploy IoCs to SIEM | R | A | R | I | I | C | — |
| Deploy IoCs to network controls (firewall, proxy) | C | A | C | I | I | R | — |
| Deploy IoCs to endpoint controls (EDR) | R | A | C | I | I | C | — |
| Monitor IoC hits and investigate alerts | R | C | R | A | I | C | — |
| Triage and classify IoC hits (TP/FP) | R | C | R | A | I | — | — |
| Escalate confirmed true positives | R | C | R | A | C | C | I |
| Review IoCs approaching expiry | R | A | C | I | I | — | — |
| Approve IoC renewal or retirement | C | R | — | A | I | — | — |
| Remove retired IoCs from security controls | C | A | C | I | I | R | — |
| Report on IoC programme metrics | R | A | I | C | I | — | — |
| Conduct annual procedure review | C | R | C | A | I | C | C |

### 7.1 Role Descriptions

| Role | Responsibilities in IoC Management |
|---|---|
| **Threat Intelligence Analyst** | Day-to-day operation of the IoC lifecycle: ingestion, validation, enrichment, classification, and monitoring. First point of contact for IoC-related queries. |
| **Senior TI Analyst / TI Lead** | Oversight of IoC programme quality; approves deployments; manages feed relationships; conducts complex manual enrichment; produces threat intelligence reports. |
| **SOC Analyst** | Monitors alerts generated by deployed IoCs; triages hits; escalates confirmed true positives; provides operational feedback to the TI team on IoC efficacy. |
| **SOC Manager** | Accountable for day-to-day SOC operations; approves escalation decisions; ensures SLA adherence; reports to CISO on programme status. |
| **CISO / Head of Cyber Security** | Ultimate accountability for the IoC Management Programme; approves this procedure; receives executive reporting on threat intelligence and IoC programme performance. |
| **IT / Network Security Team** | Responsible for deploying and removing IoCs in network and endpoint controls (firewalls, proxies, IDS/IPS, DNS security); provides operational feedback on deployment impacts. |
| **Business / Risk Owner** | Consulted on potential business impact of IoC deployments; informed of high-severity incidents triggered by IoC hits. |

---

## 8. Tools and Systems

*List all tools and systems used to support the IoC management process. Include system names, vendors, versions (or version range), and their specific role in the process. Keep this section updated as tooling changes.*

### 8.1 Core IoC Management Tooling

| System | Vendor / Product | Version | Role in IoC Management | Administrator |
|---|---|---|---|---|
| Threat Intelligence Platform (TIP) | [Vendor — e.g., OpenCTI / MISP / ThreatConnect] | [Version] | Central repository for IoC storage, enrichment, workflow, and sharing | [Team/Role] |
| SIEM | [Vendor — e.g., Splunk / Microsoft Sentinel / QRadar] | [Version] | IoC-based detection rule management and alert generation | [Team/Role] |
| EDR Platform | [Vendor — e.g., CrowdStrike / SentinelOne / Microsoft Defender] | [Version] | Endpoint-level IoC detection and response | [Team/Role] |
| Next-Generation Firewall | [Vendor — e.g., Palo Alto / Fortinet / Check Point] | [Version] | Network-level IP and domain blocking | [Team/Role] |
| Web Proxy / SWG | [Vendor — e.g., Zscaler / BlueCoat / Cisco Umbrella] | [Version] | URL and domain filtering | [Team/Role] |
| Email Security Gateway | [Vendor — e.g., Proofpoint / Mimecast / Microsoft Defender for O365] | [Version] | Email-based IoC detection and blocking | [Team/Role] |
| DNS Security | [Vendor — e.g., Cisco Umbrella / Infoblox / NextDNS] | [Version] | DNS-level domain blocking | [Team/Role] |
| Sandbox / Malware Analysis | [Vendor — e.g., Any.run / Joe Sandbox / Cuckoo] | [Version] | Dynamic analysis of file and URL IoCs | [Team/Role] |
| Ticketing / ITSM | [Vendor — e.g., ServiceNow / Jira / Freshservice] | [Version] | Incident and change ticket management | [Team/Role] |

### 8.2 Enrichment Sources and Integrations

| Enrichment Source | Provider | Data Provided | API Integration |
|---|---|---|---|
| VirusTotal | Google / VirusTotal | Multi-AV scanning, reputation, PDNS | Yes — API v3 |
| [Threat Intel Provider 1] | [Vendor Name] | [Data Type — e.g., Malware family, campaign association] | [Yes/No] |
| [Threat Intel Provider 2] | [Vendor Name] | [Data Type — e.g., Geolocation, ASN data] | [Yes/No] |
| MITRE ATT&CK | MITRE Corporation | TTP mapping, threat actor profiles | Yes — ATT&CK API |
| WHOIS / RDAP | [Provider — e.g., ARIN, APNIC] | Registrant data, registration dates | [Yes/No] |
| Passive DNS | [Provider — e.g., SecurityTrails, DomainTools] | Historical DNS resolution data | [Yes/No] |

### 8.3 Access Control Requirements

- Access to the TIP shall be role-based and aligned with the RACI table in Section 7.
- API keys and integration credentials for external enrichment sources shall be stored in [Secrets Management System — e.g., HashiCorp Vault / CyberArk].
- Access reviews for TIP user accounts shall be conducted [Quarterly / Semi-annually] in accordance with [Access Review Policy — Document ID].

---

## 9. Escalation Procedures

*Define the escalation matrix for IoC-related events, including the triggers, escalation paths, communication requirements, and timeframes. Align with the organization's broader incident response escalation framework.*

### 9.1 Escalation Triggers

The following events shall trigger escalation:

| Trigger | Description | Escalation Level |
|---|---|---|
| **Confirmed True Positive — Critical IoC** | A Critical-priority IoC has generated a confirmed hit in [Organization Name]'s environment | Level 2 — Immediate |
| **Confirmed True Positive — High IoC** | A High-priority IoC has generated a confirmed hit | Level 2 — Urgent |
| **Active Campaign Targeting Financial Sector** | Credible intelligence received indicating an imminent or active campaign against Malaysian financial institutions | Level 2 — Urgent |
| **IoC Matching [Organization Name]-Specific Infrastructure** | An IoC has been identified that explicitly references [Organization Name]'s assets (e.g., brand impersonation domain, credential theft targeting named staff) | Level 3 — Executive |
| **Feed Failure — Extended Outage** | A critical IoC feed has been unavailable for more than [X] hours | Level 1 — Standard |
| **TIP System Unavailability** | The Threat Intelligence Platform is unavailable, preventing IoC deployment | Level 1 — Standard |
| **High False Positive Volume** | False positive rate for a deployed IoC or control exceeds [X]% within a 24-hour period | Level 1 — Standard |

### 9.2 Escalation Matrix

| Level | Scenario | Primary Escalation Contact | Secondary Escalation Contact | Response Timeframe | Communication Channel |
|---|---|---|---|---|---|
| **Level 1 — Standard** | Operational issues (feed failure, TIP outage, false positive spike) | Senior TI Analyst / TI Lead | SOC Manager | Within [X] hours | [Channel — e.g., Teams/Email] |
| **Level 2 — Urgent** | Confirmed TP for High/Critical IoC; active campaign | SOC Manager | CISO | Within [X] hours | [Channel — e.g., Phone/Teams] |
| **Level 3 — Executive** | IoC directly targeting [Organization Name]; potential breach confirmed | CISO | CEO / Risk Committee | Within [X] hours | [Channel — e.g., Phone/Secure Comms] |
| **Level 4 — Regulatory** | Incident meeting BNM reportable criteria | CISO + Legal/Compliance | BNM (via designated channel) | As per BNM reporting timelines | BNM Designated Reporting Mechanism |

### 9.3 BNM Regulatory Notification

Where an IoC hit results in a cyber security incident that meets the reporting threshold defined in BNM's Cyber Resilience and Management Policy or other applicable BNM guidelines:

1. The CISO shall be notified immediately upon confirmation of a reportable incident.
2. The Compliance / Legal team shall be engaged to prepare the regulatory notification.
3. Notification to BNM shall be made within the timeframe stipulated in the applicable BNM policy.
4. All communication with BNM shall be coordinated through [Designated Liaison Role / Function].
5. Documentation supporting the notification shall be retained for a minimum of **[X] years** in accordance with BNM record-keeping requirements.

### 9.4 After-Action Review

Following any Level 2, Level 3, or Level 4 escalation:

1. A post-incident or after-action review shall be conducted within [X] business days.
2. Lessons learned shall be documented and reviewed by the SOC Manager and CISO.
3. Where the IoC management process contributed to or failed to prevent the incident, this procedure shall be updated accordingly.
4. Updated IoCs, rules, or controls resulting from the incident shall be deployed per the standard process in Section 6.5.

---

## 10. Quality Assurance and Metrics

*Define how the IoC management programme is measured, monitored, and continuously improved. Include reporting frequency and accountable roles.*

### 10.1 Programme Metrics

The following Key Performance Indicators (KPIs) and Key Risk Indicators (KRIs) shall be tracked and reported:

| Metric | Type | Definition | Reporting Frequency | Owner | Target |
|---|---|---|---|---|---|
| Total Active IoCs | KPI | Number of IoCs currently deployed in active security controls | Monthly | TI Lead | > [X] |
| IoC Feed Availability | KPI | % uptime of automated IoC feeds during reporting period | Monthly | TI Lead | > [X]% |
| Enrichment SLA Compliance | KPI | % of IoCs enriched within defined SLA (per priority tier) | Monthly | TI Lead | > [X]% |
| True Positive Rate | KPI | % of IoC hits classified as confirmed true positives | Monthly | SOC Manager | > [X]% |
| False Positive Rate | KRI | % of IoC hits classified as false positives | Monthly | SOC Manager | < [X]% |
| IoC Coverage Rate | KPI | % of active IoCs deployed to at least one security control | Monthly | TI Lead | > [X]% |
| Mean Time to Deploy (Critical/High) | KPI | Avg. time from IoC classification to deployment | Monthly | TI Lead | < [X] hours |
| Expired IoC Backlog | KRI | Number of IoCs past their expiry date awaiting review | Weekly | TI Lead | 0 |
| Rejected IoC Rate by Feed | KRI | % of IoCs from each feed rejected during validation | Quarterly | TI Lead | < [X]% per feed |

### 10.2 Reporting

- A monthly IoC Management Report shall be prepared by the TI Lead and submitted to the SOC Manager and CISO.
- The report shall include a summary of metrics from the table above, notable threat intelligence findings, and programme improvement actions.
- An annual IoC Programme Review shall be conducted in conjunction with the procedure's annual review cycle (see Section 12).

### 10.3 Continuous Improvement

- Lessons learned from incident after-action reviews (see Section 9.4) shall be incorporated into process improvements.
- Feed performance reviews shall be conducted quarterly to assess value and cost-effectiveness of commercial subscriptions.
- The TI team shall participate in relevant information sharing communities (see Section 6.1.1) to stay current with emerging threats and IoC management best practices.

---

## 11. Exceptions and Waivers

*Document the process for handling deviations from this procedure. This is important for audit purposes and demonstrates governance maturity.*

### 11.1 Exception Criteria

An exception to this procedure may be requested where strict adherence would:

- Conflict with a time-critical business or operational requirement
- Create a disproportionate business impact relative to the security risk mitigated
- Conflict with another approved procedure or policy

### 11.2 Exception Process

1. The requesting party shall submit an exception request to [Exception Approver Role — e.g., SOC Manager / CISO] via [Submission Mechanism].
2. The exception request shall include:
   - Description of the exception required
   - Justification and business rationale
   - Duration of exception (temporary exceptions only)
   - Proposed compensating controls
   - Risk assessment of proceeding with the exception
3. The approver shall review and document their decision within [X] business days.
4. Approved exceptions shall be logged in [Exception Register / GRC System] and reviewed at each procedure review cycle.
5. Exceptions exceeding [X] months in duration shall require re-approval.

### 11.3 Exception Register

| Exception ID | Description | Requestor | Approver | Date Approved | Expiry Date | Compensating Control | Status |
|---|---|---|---|---|---|---|---|
| EXC-IOC-001 | [Description] | [Name/Role] | [Name/Role] | [Date] | [Date] | [Description] | [Active/Closed] |

---

## 12. Review and Approval

### 12.1 Review Schedule

This procedure shall be reviewed:

- **Annually** — at minimum, on or before the Next Review Date stated in the document header
- **Upon significant change** — including but not limited to:
  - Material changes to [Organization Name]'s technology infrastructure
  - Significant changes to the threat landscape
  - New or revised BNM regulatory requirements
  - Major changes to tooling (TIP, SIEM, EDR, feeds)
  - Post-incident recommendations requiring procedural updates
  - Organisational restructuring affecting roles defined in Section 7

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial release |
| [Version] | [Date] | [Author Name, Role] | [Description of Changes] |
| [Version] | [Date] | [Author Name, Role] | [Description of Changes] |

### 12.3 Approval Sign-Off

*All approvers must sign and date this table prior to the procedure being considered effective. Digital signatures are acceptable where supported by [Organization Name]'s document management system.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Author | [Name] | | [Date] |
| Reviewer — TI Lead / Senior TI Analyst | [Name] | | [Date] |
| Reviewer — SOC Manager | [Name] | | [Date] |
| Reviewer — IT / Network Security | [Name] | | [Date] |
| Reviewer — Compliance / Legal | [Name] | | [Date] |
| Approver — CISO / Head of Cyber Security | [Name] | | [Date] |
| Endorser — CTO / CIO (if required) | [Name] | | [Date] |

---

## 13. References

*List all external regulatory documents, internal policies, and industry standards referenced in this procedure.*

### 13.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Clause(s) |
|---|---|---|---|
| BNM/RH/PD 028-119 | Risk Management in Technology (RMiT) Policy | Bank Negara Malaysia | Clause 11.19 (Cyber Threat Intelligence), Clause 11.1 (Cyber Security Risk Management), Clause 11.18 (Security Event Monitoring), Clause 11.20 (Cyber Security Incident Management) |
| [BNM Reference] | Cyber Resilience and Management Policy | Bank Negara Malaysia | [Relevant Clauses] |
| [PDPA Reference] | Personal Data Protection Act 2010 | Government of Malaysia | [Relevant Sections, if applicable] |

### 13.2 Internal Policy References

| Document ID | Document Title | Owner |
|---|---|---|
| [Document ID] | Information Security Policy | [Owner] |
| [Document ID] | Incident Response Procedure | [Owner] |
| [Document ID] | Threat Intelligence Framework | [Owner] |
| [Document ID] | SIEM Operational Procedure | [Owner] |
| [Document ID] | Vulnerability Management Procedure | [Owner] |
| [Document ID] | Access Control Policy | [Owner] |
| [Document ID] | Log Management and Retention Policy | [Owner] |
| [Document ID] | Change Management Procedure | [Owner] |

### 13.3 Industry Standards and Frameworks

| Standard / Framework | Title | Version / Date |
|---|---|---|
| MITRE ATT&CK | MITRE ATT&CK Enterprise Matrix | [Current Version] |
| NIST SP 800-61 Rev. 2 | Computer Security Incident Handling Guide | August 2012 |
| NIST SP 800-150 | Guide to Cyber Threat Information Sharing | October 2016 |
| ISO/IEC 27035 | Information Technology — Information Security Incident Management | [Current Version] |
| STIX 2.1 / TAXII 2.1 | Structured Threat Information Expression / Trusted Automated eXchange | OASIS Standard |
| TLP (Traffic Light Protocol) | Sharing and Handling Protocols for Sensitive Information | FIRST.org — Current Version |

---

## 14. Appendices

### Appendix A — IoC Submission Form Template

*This appendix provides a standardised form for analysts or third parties to submit IoCs manually for ingestion into the TIP. Use this form for IoCs that cannot be automatically ingested via a feed.*

| Field | Value |
|---|---|
| **Submitter Name** | [Name] |
| **Submitter Role** | [Role] |
| **Submission Date (UTC)** | [YYYY-MM-DD HH:MM] |
| **Source of IoC** | [e.g., Incident Investigation / External Partner / OSINT] |
| **IoC Type** | [IP / Domain / URL / File Hash / Email / Other] |
| **IoC Value** | [Exact value of the IoC] |
| **Associated Incident Ticket** | [Ticket Reference, if applicable] |
| **Confidence Level (Initial Assessment)** | [Very High / High / Medium / Low / Very Low] |
| **Context / Description** | [Brief description of how this IoC was identified and why it is considered malicious] |
| **Supporting Evidence** | [Attach or reference evidence — e.g., log excerpts, screenshots, sandbox reports] |
| **Recommended Deployment Targets** | [Suggested controls — e.g., SIEM, Firewall, EDR] |
| **Sensitivity / Handling Restrictions** | [TLP designation — e.g., TLP:RED, TLP:AMBER, TLP:GREEN] |

---

### Appendix B — IoC Feed Onboarding Checklist

*Use this checklist when evaluating and onboarding a new external IoC feed or threat intelligence provider.*

**Feed / Provider Details:**

| Field | Value |
|---|---|
| Feed / Provider Name | [Name] |
| Commercial or Open Source | [Commercial / Open Source / Community] |
| Proposed Contract / Subscription Start Date | [Date] |
| Feed Format(s) | [STIX / TAXII / CSV / JSON / Other] |
| Delivery Method | [Pull API / Push / Email / Portal] |
| Coverage (IoC Types) | [IP / Domain / URL / Hash / Email / TTP / Other] |
| Update Frequency | [Frequency] |
| Coverage Geography / Sector Focus | [e.g., Global / Financial Sector / Southeast Asia] |
| Estimated Daily IoC Volume | [Number] |
| Data Retention / Licence Terms | [Summary] |

**Assessment Checklist:**

- [ ] Vendor credibility assessment completed
- [ ] Feed overlap analysis with existing feeds conducted (avoid duplication)
- [ ] Integration with TIP technically validated (test ingestion performed)
- [ ] Data quality assessment completed (sample validation)
- [ ] Legal and contractual review completed (data usage rights, confidentiality)
- [ ] TLP and handling requirements understood and documented
- [ ] Cost-benefit assessment completed and approved by [Role]
- [ ] Feed added to feed registry in Section 6.1.1
- [ ] Approval obtained from [Approver Role]

---

### Appendix C — IoC Lifecycle Workflow Summary

*This appendix summarises the IoC lifecycle in a condensed reference format for use by SOC and TI analysts during day-to-day operations.*

| Phase | Input | Key Activities | Output | SLA |
|---|---|---|---|---|
| **1. Collection** | Raw IoC data from feeds / internal sources | Automated and manual ingestion into TIP; tagging with source and type | Ingested, unvalidated IoC record | Automated — near real-time; Manual — within [X] hours of receipt |
| **2. Validation** | Ingested IoC record | Syntactic check; allowlist check; source credibility assessment; manual triage | Validated IoC (promoted) or Rejected IoC (logged) | Automated — near real-time; Manual — within enrichment SLA |
| **3. Enrichment** | Validated IoC | Automated API enrichment; manual contextual research (high-priority) | Enriched IoC with confidence score and contextual metadata | Per priority SLA in Section 6.3.3 |
| **4. Classification** | Enriched IoC | Priority assignment (Critical/High/Medium/Low/Informational) | Classified IoC ready for deployment decision | Within enrichment SLA |
| **5. Operationalisation** | Classified IoC | Deployment approval; control selection; IoC pushed to security controls | Active IoC deployed across target controls; deployment logged | Per priority SLA in Section 6.4.2 |
| **6. Monitoring** | Active deployed IoC | Continuous monitoring of hits; hit triage (TP/FP); incident escalation | Hit records; incident tickets; false positive feedback to TIP | Continuous; triage per IR SLA |
| **7. Review / Retirement** | IoC approaching expiry or with high FP rate | Analyst review; renew / update / retire decision; removal from controls | Renewed, updated, or retired IoC record | Per expiry notification and review SLA |

---

### Appendix D — Traffic Light Protocol (TLP) Reference

*TLP is used to govern the sharing of threat intelligence received from external partners. Analysts must respect TLP designations when handling and sharing IoC data.*

| TLP Designation | Colour | Handling Requirement |
|---|---|---|
| **TLP:RED** | Red | Not for disclosure; restricted to named recipients only. Do not share beyond the specific individuals or organisations identified. |
| **TLP:AMBER+STRICT** | Amber | Restricted to the recipient organisation only; do not share with third parties or subsidiaries. |
| **TLP:AMBER** | Amber | Limited disclosure within the recipient organisation and its clients on a need-to-know basis. |
| **TLP:GREEN** | Green | May be shared within the community or sector but not publicly. |
| **TLP:CLEAR** | White / Clear | No restriction on disclosure; unrestricted sharing. |

*Refer to the FIRST.org TLP standard for the authoritative definitions: https://www.first.org/tlp/*

---

### Appendix E — Glossary of IoC Types

*Quick reference for analysts when classifying IoCs during ingestion.*

| IoC Type | Description | Example |
|---|---|---|
| IPv4 Address | A 32-bit internet address associated with malicious infrastructure | `198.51.100.42` |
| IPv6 Address | A 128-bit internet address associated with malicious infrastructure | `2001:db8::1` |
| Domain Name / FQDN | A malicious or compromised domain name | `malicious-domain.example.com` |
| URL | A specific URL used for command-and-control, phishing, or malware delivery | `http://malicious-domain.example.com/payload.exe` |
| MD5 Hash | 32-character hexadecimal hash of a malicious file | `d41d8cd98f00b204e9800998ecf8427e` |
| SHA-1 Hash | 40-character hexadecimal hash of a malicious file | `da39a3ee5e6b4b0d3255bfef95601890afd80709` |
| SHA-256 Hash | 64-character hexadecimal hash of a malicious file | `e3b0c44298fc1c149afbf4c8996fb924...` |
| Email Address | A sender address associated with phishing or malware campaigns | `attacker@malicious-domain.com` |
| Email Subject | A subject line pattern associated with phishing campaigns | `Urgent: Your account requires verification` |
| Registry Key | A Windows registry key used for persistence by malware | `HKCU\Software\Microsoft\Windows\CurrentVersion\Run\[MalwareName]` |
| File Path | A file system path used by malware | `C:\Users\Public\malware.exe` |
| Mutex | A mutex name used by malware to prevent duplicate execution | `[Mutex string]` |
| SSL/TLS Certificate | Thumbprint or serial number of a certificate used by malicious infrastructure | `[Certificate thumbprint]` |
| YARA Rule | A pattern-matching rule for identifying malware artefacts | `rule MalwareName { ... }` |
| Sigma Rule | A detection rule for SIEM platforms | `title: MalwareName Detection ... ` |
| TTP | A behavioural pattern mapped to MITRE ATT&CK | `T1059.001 — PowerShell` |

---

*End of Document*

---

**Document Control:** This document is subject to [Organization Name]'s document management policy. The master copy is maintained in [Document Management System / SharePoint / Confluence]. Printed copies are uncontrolled. Please verify you are reading the current version before use.