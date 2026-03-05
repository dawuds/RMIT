# Situational Awareness Program

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | QA Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT 11.20 |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel and must not be disclosed, reproduced, or distributed without prior written approval from the document owner.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Scope and Applicability](#3-scope-and-applicability)
4. [Program Objectives and Goals](#4-program-objectives-and-goals)
5. [Situational Awareness Framework](#5-situational-awareness-framework)
6. [Attack Surface Monitoring](#6-attack-surface-monitoring)
7. [Step-by-Step Process Flow](#7-step-by-step-process-flow)
8. [Threat Intelligence Integration](#8-threat-intelligence-integration)
9. [Target Audience and Completion Targets](#9-target-audience-and-completion-targets)
10. [Assessment Methodology and Pass Criteria](#10-assessment-methodology-and-pass-criteria)
11. [Content Update Schedule](#11-content-update-schedule)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Tools, Technologies, and Data Sources](#13-tools-technologies-and-data-sources)
14. [Incident Escalation and Response Integration](#14-incident-escalation-and-response-integration)
15. [Metrics, KPIs, and Reporting](#15-metrics-kpis-and-reporting)
16. [Review and Approval](#16-review-and-approval)
17. [References](#17-references)
18. [Appendices](#18-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes [Organization Name]'s Situational Awareness Program (SAP), defining the procedures, responsibilities, and governance mechanisms required to maintain continuous, comprehensive visibility into the organization's cyber threat landscape and attack surface. The program is designed to ensure that [Organization Name] can anticipate, detect, and respond effectively to emerging threats that may impact the confidentiality, integrity, and availability of technology systems and financial services.

This program fulfills the requirements set forth under **Bank Negara Malaysia's Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.20**, which mandates that financial institutions maintain an active and structured situational awareness capability to monitor the evolving threat environment.

### 1.2 Document Scope

This procedure applies to:

- All technology assets owned, operated, or managed by [Organization Name], including on-premises infrastructure, cloud environments, and third-party managed services.
- All personnel involved in technology operations, information security, risk management, and compliance functions.
- All third-party service providers and vendors with access to [Organization Name]'s systems or data.
- All business units that rely on technology systems to deliver financial products and services.

### 1.3 Out of Scope

The following are explicitly excluded from this program unless otherwise stated:

- Physical security monitoring (governed under the Physical Security Policy [Document ID]).
- Business continuity and disaster recovery testing (governed under the BCP/DR Policy [Document ID]).
- Fraud detection systems operating at the transaction layer (governed under the Fraud Risk Management Framework [Document ID]).

---

## 2. Regulatory Context

*This section maps the program to specific regulatory obligations. Authors should verify clause references against the current version of the BNM RMiT Policy Document and update as needed following any regulatory amendments.*

### 2.1 BNM RMiT Policy Document

[Organization Name] is subject to the **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, issued under the Financial Services Act 2013 (FSA) and the Islamic Financial Services Act 2013 (IFSA). This program directly supports compliance with the following provisions:

| Clause | Description | Obligation Level |
|---|---|---|
| **11.20** | Financial institutions shall maintain situational awareness of the cyber threat environment, including monitoring of attack surfaces, threat intelligence feeds, and emerging vulnerabilities relevant to the institution's technology risk profile. | Mandatory |
| 11.1 | Technology risk management governance and oversight | Mandatory |
| 11.17 | Vulnerability and patch management | Mandatory |
| 11.18 | Security event monitoring and logging | Mandatory |
| 11.19 | Security incident management | Mandatory |
| 11.21 | Cyber resilience testing | Mandatory |

### 2.2 Related Legislation and Standards

| Reference | Description |
|---|---|
| Personal Data Protection Act 2010 (PDPA) | Data protection obligations for personal data processed during monitoring activities |
| NACSA National Cyber Security Policy | National cybersecurity framework alignment |
| ISO/IEC 27001:2022 | Clause A.5.7 (Threat intelligence), A.8.8 (Management of technical vulnerabilities) |
| NIST Cybersecurity Framework (CSF) 2.0 | Identify (ID), Detect (DE) functions |
| MITRE ATT&CK Framework | Adversary tactics, techniques, and procedures (TTPs) reference |

### 2.3 Internal Policy Alignment

This program is implemented in accordance with and subordinate to the following internal policy instruments:

- [Organization Name] Information Security Policy [Document ID]
- [Organization Name] Technology Risk Management Framework [Document ID]
- [Organization Name] Incident Response Plan [Document ID]
- [Organization Name] Vendor and Third-Party Risk Management Policy [Document ID]

---

## 3. Scope and Applicability

### 3.1 Organizational Applicability

*Define which business units, subsidiaries, and functional areas are covered. Authors should list all entities within the regulatory perimeter and clarify any carve-outs or phased applicability timelines.*

This program applies to the following organizational units and entities:

| Entity / Business Unit | Applicability | Notes |
|---|---|---|
| [Business Unit / Entity 1] | Full | [Notes] |
| [Business Unit / Entity 2] | Full | [Notes] |
| [Subsidiary Name] | Partial | [Specify scope limitations] |
| [Third-Party Provider Name] | Contractual | Subject to vendor obligations in MSA/SLA |

### 3.2 Technology Asset Scope

The following asset categories are in scope for situational awareness monitoring:

**Network Infrastructure**
- Internal LAN/WAN infrastructure
- DMZ and perimeter network segments
- VPN gateways and remote access infrastructure
- SD-WAN and network segmentation controls

**Endpoint Assets**
- Corporate workstations and laptops
- Mobile devices (BYOD and corporate-managed)
- Servers (on-premises and co-located)
- Operational technology (OT) and IoT devices where applicable

**Application Layer**
- Internet-facing web applications and APIs
- Mobile banking and digital channel applications
- Core banking systems and financial processing platforms
- Internal business applications

**Cloud Environments**
- [Cloud Provider 1] — [Environment/Account Description]
- [Cloud Provider 2] — [Environment/Account Description]
- SaaS applications with access to sensitive data

**Data Assets**
- Customer Personally Identifiable Information (PII)
- Financial transaction data
- Authentication credentials and cryptographic material
- Regulatory reporting data

### 3.3 Geographical Scope

*Specify the geographic jurisdictions covered, particularly relevant for organizations with cross-border operations.*

| Jurisdiction | Applicability |
|---|---|
| Malaysia (Primary) | Full — all RMiT obligations apply |
| [Other Jurisdiction, if applicable] | [Specify applicable local regulations] |

---

## 4. Program Objectives and Goals

### 4.1 Primary Objectives

The Situational Awareness Program is designed to achieve the following outcomes:

1. **Threat Landscape Visibility** — Maintain a current, accurate, and actionable picture of the cyber threat environment relevant to [Organization Name]'s sector, geographic location, and technology profile.

2. **Attack Surface Reduction** — Continuously identify, quantify, and remediate the external and internal attack surface to reduce exploitable exposure.

3. **Early Warning Capability** — Establish detection mechanisms that provide advance notice of threats before they materialize into incidents.

4. **Regulatory Compliance** — Demonstrate ongoing compliance with BNM RMiT Clause 11.20 and related obligations through documented evidence of program operation.

5. **Informed Decision-Making** — Provide senior management, the Board, and operational teams with timely and relevant threat intelligence to support risk-based decision-making.

### 4.2 Success Criteria

| Objective | Key Result | Target |
|---|---|---|
| Threat landscape visibility | Threat intelligence reports issued | Monthly minimum |
| Attack surface monitoring | External attack surface scans completed | Weekly |
| Vulnerability identification | Mean Time to Identify (MTTI) critical vulnerabilities | ≤ 24 hours from disclosure |
| Escalation effectiveness | Critical threats escalated to CISO within SLA | ≥ 95% |
| Regulatory evidence | Program review documentation completed | Quarterly |
| Coverage | Percentage of in-scope assets monitored | ≥ 98% |

---

## 5. Situational Awareness Framework

### 5.1 Framework Overview

*Describe the overarching conceptual framework used to structure the situational awareness program. This section should explain how the organization layers tactical, operational, and strategic intelligence.*

[Organization Name]'s Situational Awareness Program is structured across three intelligence levels, aligned with the organization's operational and strategic risk management needs:

```
┌─────────────────────────────────────────────────────────┐
│                 STRATEGIC INTELLIGENCE                  │
│   (Board / Executive Level — Quarterly / Trend-based)  │
├─────────────────────────────────────────────────────────┤
│                OPERATIONAL INTELLIGENCE                 │
│     (Management Level — Monthly / Campaign-based)      │
├─────────────────────────────────────────────────────────┤
│                  TACTICAL INTELLIGENCE                  │
│   (SOC / Engineering Level — Daily / Event-driven)     │
└─────────────────────────────────────────────────────────┘
```

### 5.2 Intelligence Levels

| Level | Audience | Cadence | Output Format | Examples |
|---|---|---|---|---|
| **Strategic** | Board, EXCO, CRO, CISO | Quarterly | Executive Threat Briefing | Geopolitical threat trends, regulatory changes, sector-wide risk themes |
| **Operational** | IT Management, Risk Committee, Dept Heads | Monthly | Threat Intelligence Report | Active threat actor campaigns, vulnerability trends, peer institution incidents |
| **Tactical** | SOC Analysts, Threat Hunters, IT Engineers | Daily / Real-time | Alerts, Indicators of Compromise (IOCs), Bulletins | Malware signatures, IP blocklists, CVE advisories, CERT-MY advisories |

### 5.3 Intelligence Lifecycle

The program follows a structured intelligence lifecycle:

1. **Direction** — Define priority intelligence requirements (PIRs) based on organizational risk appetite and threat profile.
2. **Collection** — Gather raw data from approved internal and external sources.
3. **Processing** — Normalize, deduplicate, and enrich raw data into structured formats.
4. **Analysis** — Apply analytical tradecraft to produce actionable intelligence products.
5. **Dissemination** — Distribute intelligence to appropriate stakeholders at the appropriate classification level.
6. **Feedback** — Collect stakeholder feedback to refine PIRs and improve collection strategies.

### 5.4 Priority Intelligence Requirements (PIRs)

*List the organization's current PIRs. These should be reviewed quarterly and updated to reflect the evolving threat landscape and business priorities.*

| PIR ID | Priority Intelligence Requirement | Relevance | Review Date |
|---|---|---|---|
| PIR-001 | What threat actors are actively targeting Malaysian financial institutions? | High | [Date] |
| PIR-002 | What vulnerabilities in [Organization Name]'s technology stack are being actively exploited in the wild? | High | [Date] |
| PIR-003 | What attack techniques are being used against internet banking and mobile banking platforms? | High | [Date] |
| PIR-004 | Are there active phishing or business email compromise (BEC) campaigns targeting [Organization Name] or its customers? | High | [Date] |
| PIR-005 | What supply chain risks affect [Organization Name]'s critical technology vendors? | Medium | [Date] |
| PIR-006 | [Additional PIR as applicable] | [Priority] | [Date] |

---

## 6. Attack Surface Monitoring

### 6.1 Attack Surface Definition

*Define what constitutes the organization's attack surface, covering both external-facing and internal exposure points. Authors should ensure this aligns with the current asset inventory.*

[Organization Name]'s attack surface encompasses all points of potential unauthorized access or exploitation across:

- **External Attack Surface** — Assets directly accessible from the internet, including public IP ranges, domain names, web applications, APIs, and email infrastructure.
- **Internal Attack Surface** — Lateral movement paths, privileged access points, misconfigured internal services, and insecure inter-system communications.
- **Supply Chain Attack Surface** — Third-party integrations, software dependencies, managed service provider access, and cloud service configurations.
- **Human Attack Surface** — Susceptibility of personnel to social engineering, phishing, and credential theft.

### 6.2 External Attack Surface Inventory

*Maintain a current registry of all external-facing assets. This table should be dynamically linked to or reconciled with the asset management system.*

| Asset Category | Asset / Identifier | Owner | Last Verified | Monitoring Status |
|---|---|---|---|---|
| Public IP Range | [x.x.x.x/xx] | [Team] | [Date] | Active |
| Domain Name | [domain.com] | [Team] | [Date] | Active |
| Subdomain | [sub.domain.com] | [Team] | [Date] | Active |
| Web Application | [Application Name] — [URL] | [Team] | [Date] | Active |
| API Endpoint | [API Name] — [Endpoint] | [Team] | [Date] | Active |
| Mobile Application | [App Name] — [iOS/Android] | [Team] | [Date] | Active |
| Certificate | [Certificate CN] — Expiry [Date] | [Team] | [Date] | Monitored |
| Email Domain | [domain.com] — SPF/DKIM/DMARC | [Team] | [Date] | Active |
| Cloud Storage (Public) | [Bucket/Container Name] | [Team] | [Date] | Active |

### 6.3 Attack Surface Monitoring Activities

| Activity | Description | Frequency | Responsible Team | Tool / Method |
|---|---|---|---|---|
| External port and service scan | Full TCP/UDP scan of registered external IP ranges | Weekly | [Team] | [Tool Name] |
| Subdomain enumeration | Discovery of active subdomains including shadow IT | Weekly | [Team] | [Tool Name] |
| SSL/TLS certificate monitoring | Certificate expiry, misconfiguration, and issuance alerts | Continuous | [Team] | [Tool Name] |
| Web application fingerprinting | Technology stack identification and version tracking | Monthly | [Team] | [Tool Name] |
| Exposed credential monitoring | Dark web and paste site monitoring for leaked credentials | Continuous | [Team] | [Tool Name] |
| Code repository scanning | Public repository exposure of secrets, API keys, or sensitive data | Continuous | [Team] | [Tool Name] |
| Cloud misconfiguration audit | Review of cloud storage permissions, public bucket exposure | Weekly | [Team] | [Tool Name] |
| Brand and domain monitoring | Typosquatting, lookalike domains, and phishing infrastructure | Continuous | [Team] | [Tool Name] |
| Vulnerability scanning | Authenticated and unauthenticated scans of in-scope assets | Weekly | [Team] | [Tool Name] |

### 6.4 Shadow IT Discovery

*Describe the process for identifying technology assets not formally registered in the asset inventory.*

Shadow IT and unmanaged assets represent a significant risk to the organization's attack surface posture. The following process shall be followed when unknown or unregistered assets are discovered:

1. **Detection** — Automated discovery tools identify assets not present in the Configuration Management Database (CMDB).
2. **Triage** — Security team verifies whether the asset belongs to [Organization Name] or is a false positive.
3. **Notification** — Identified asset owner or business unit is notified within [X] business days.
4. **Registration** — Asset is formally registered in the CMDB within [X] business days of confirmation.
5. **Remediation** — Security baseline and patching obligations are applied to newly registered assets.
6. **Escalation** — If no owner can be identified within [X] days, the asset is escalated to the CISO for decommissioning decision.

---

## 7. Step-by-Step Process Flow

### 7.1 Continuous Monitoring Workflow

*This section defines the day-to-day operational procedures for the situational awareness program. Each step should be supplemented with system-specific procedures maintained in the SOC runbooks.*

#### Phase 1 — Collection (Continuous)

| Step | Action | Responsible | System / Tool | SLA |
|---|---|---|---|---|
| 1.1 | Ingest threat intelligence feeds from subscribed sources | SOC Analyst (L1) | [SIEM / TIP Platform] | Automated — real-time |
| 1.2 | Collect vulnerability disclosures from NVD, vendor advisories, CERT-MY | Vulnerability Management Team | [Vulnerability Scanner] | Daily review |
| 1.3 | Execute scheduled external attack surface scans | Security Engineer | [ASM Tool] | Per schedule (see §6.3) |
| 1.4 | Monitor dark web and credential leak sources | SOC Analyst (L2) | [Dark Web Monitoring Tool] | Continuous — alert on trigger |
| 1.5 | Collect internal security event logs from SIEM | SOC Analyst (L1) | [SIEM Platform] | Real-time |
| 1.6 | Monitor threat actor forums and underground marketplaces | Threat Intelligence Analyst | [TI Platform] | Daily |

#### Phase 2 — Processing and Enrichment (Daily)

| Step | Action | Responsible | System / Tool | SLA |
|---|---|---|---|---|
| 2.1 | Deduplicate and normalize incoming IOCs | SOC Analyst (L2) | [TIP Platform] | Within 4 hours of receipt |
| 2.2 | Enrich IOCs with context (WHOIS, passive DNS, VirusTotal, etc.) | SOC Analyst (L2) | [Enrichment Tools] | Within 4 hours |
| 2.3 | Correlate new vulnerabilities against asset inventory | Vulnerability Management Team | [CMDB + Vuln Scanner] | Within 24 hours of advisory |
| 2.4 | Tag intelligence by relevance, confidence, and TLP classification | Threat Intelligence Analyst | [TIP Platform] | Before dissemination |
| 2.5 | Upload verified IOCs to defensive controls (firewall, EDR, proxy) | Security Engineer | [SOAR / Orchestration] | Within 2 hours of verification |

#### Phase 3 — Analysis (Daily / Weekly)

| Step | Action | Responsible | System / Tool | SLA |
|---|---|---|---|---|
| 3.1 | Conduct daily threat landscape review during SOC briefing | SOC Team Lead | [Dashboard / TIP] | Daily — 09:00 |
| 3.2 | Correlate threat actor TTPs against MITRE ATT&CK framework | Threat Intelligence Analyst | [TIP / ATT&CK Navigator] | Weekly |
| 3.3 | Analyse attack surface scan results and compare against prior baseline | Security Engineer | [ASM Tool] | Weekly |
| 3.4 | Identify new high-risk vulnerabilities relevant to in-scope assets | Vulnerability Management Team | [Vuln Scanner + CMDB] | Within 24 hours of scan |
| 3.5 | Review and update threat actor profiles for known adversary groups | Threat Intelligence Analyst | [TIP Platform] | Monthly |

#### Phase 4 — Dissemination (As Required)

| Step | Action | Responsible | Output | SLA |
|---|---|---|---|---|
| 4.1 | Publish daily threat summary to SOC and IT Operations teams | SOC Team Lead | Daily Sitrep | Daily — 10:00 |
| 4.2 | Issue critical threat advisory for high-severity, time-sensitive threats | CISO / Security Manager | Critical Advisory | Within 2 hours of identification |
| 4.3 | Produce monthly Threat Intelligence Report for management | Threat Intelligence Analyst | Monthly TI Report | By 5th of following month |
| 4.4 | Deliver quarterly Executive Threat Briefing to EXCO | CISO | Executive Briefing | Quarterly |
| 4.5 | Submit regulatory evidence package to Compliance team | QA Lead | Compliance Report | Quarterly |

#### Phase 5 — Feedback and Improvement (Quarterly)

| Step | Action | Responsible | Output | SLA |
|---|---|---|---|---|
| 5.1 | Solicit feedback from intelligence consumers on report quality and relevance | QA Lead | Feedback Survey Results | Quarterly |
| 5.2 | Review PIRs and update based on threat landscape and business changes | CISO / Threat Intelligence Analyst | Updated PIR Register | Quarterly |
| 5.3 | Evaluate effectiveness of deployed IOCs and defensive controls | Security Engineer | Effectiveness Report | Quarterly |
| 5.4 | Review tool performance and coverage gaps | Security Engineering Lead | Gap Assessment | Quarterly |
| 5.5 | Update this procedure document to reflect changes | QA Lead | Revised SAP Document | Quarterly |

### 7.2 Critical Threat Response Workflow

When a critical or high-severity threat is identified that requires immediate action, the following expedited process shall be followed:

**Trigger Criteria** — Any of the following conditions activate the critical threat response workflow:
- Active exploitation of a vulnerability affecting [Organization Name]'s in-scope assets is confirmed in the wild.
- Threat intelligence indicates [Organization Name] is a named or implied target of a specific threat actor campaign.
- A credential leak directly exposing [Organization Name] systems or customer data is detected.
- A zero-day vulnerability affecting critical banking infrastructure is publicly disclosed.

**Critical Threat Response Steps:**

1. **Immediate Notification** — SOC Analyst (L2 or above) notifies SOC Team Lead and Security Manager within **15 minutes** of identification.
2. **Rapid Assessment** — SOC Team Lead assesses exploitability, affected assets, and potential business impact within **1 hour**.
3. **CISO Escalation** — If impact is assessed as High or Critical, CISO is notified within **2 hours** of initial identification.
4. **Interim Controls** — Security Engineering team implements immediate compensating controls (IP blocking, WAF rules, access restrictions) within **4 hours**.
5. **Business Notification** — Affected business unit heads are notified within **4 hours** if service disruption is possible.
6. **Remediation Tracking** — Formal remediation ticket is raised in the vulnerability management system with defined SLA based on severity.
7. **Post-Action Review** — A post-action report is completed within **5 business days** of resolution.

---

## 8. Threat Intelligence Integration

### 8.1 Intelligence Sources

*List all approved threat intelligence sources. Authors should maintain this registry and review sources for relevance, reliability, and value at least annually.*

#### 8.1.1 External Intelligence Sources

| Source | Type | Classification | Feed Format | Subscription Status | Review Date |
|---|---|---|---|---|---|
| CERT-MY (CyberSecurity Malaysia) | Government / ISAC | TLP:WHITE | Advisory, Bulletins | Active | [Date] |
| BNM Financial Intelligence Unit | Regulatory | Restricted | Advisory | Active | [Date] |
| FS-ISAC (Financial Services ISAC) | Sector ISAC | TLP:AMBER | STIX/TAXII | [Active/Pending] | [Date] |
| MITRE ATT&CK | Framework | Public | Knowledge Base | Active | [Date] |
| National Vulnerability Database (NVD) | CVE Repository | Public | JSON Feed | Active | [Date] |
| [Commercial TI Vendor Name] | Commercial | Proprietary | API / STIX | Active | [Date] |
| [Threat Intelligence Platform] | Aggregator | Proprietary | API | Active | [Date] |
| [OSINT Source — e.g., AlienVault OTX] | OSINT | TLP:WHITE | TAXII | Active | [Date] |

#### 8.1.2 Internal Intelligence Sources

| Source | Type | Data Generated |
|---|---|---|
| SIEM Platform | Internal | Security events, anomaly detections, correlation alerts |
| Endpoint Detection and Response (EDR) | Internal | Endpoint telemetry, malware detections, behavioral alerts |
| Network Detection and Response (NDR) | Internal | Network flow anomalies, lateral movement indicators |
| Web Application Firewall (WAF) | Internal | Application attack attempts, bot activity |
| Email Security Gateway | Internal | Phishing attempts, malicious attachments, BEC indicators |
| Vulnerability Scanner | Internal | Asset vulnerability posture, scan results |
| Honeypots / Deception Assets | Internal | Adversary reconnaissance and lateral movement indicators |
| Incident Reports | Internal | Post-incident TTPs and lessons learned |

### 8.2 Intelligence Sharing

[Organization Name] participates in the following intelligence sharing arrangements:

| Sharing Arrangement | Counterparty | Classification | Sharing Protocol | Approval Authority |
|---|---|---|---|---|
| [Sector ISAC Membership] | FS-ISAC | TLP:AMBER | STIX/TAXII 2.1 | CISO |
| [Bilateral Arrangement] | [Partner Institution Name] | TLP:GREEN | Encrypted email / Secure portal | CISO |
| Regulatory Reporting | BNM | Restricted | BNM Reporting Portal | CISO + Chief Compliance Officer |

**Intelligence Sharing Obligations:**
- All shared intelligence must be reviewed and approved by the Threat Intelligence Lead before dissemination.
- Intelligence shared externally must not include [Organization Name]-specific identifiers unless explicitly authorized.
- The Traffic Light Protocol (TLP) classification assigned to received intelligence must be honoured in all downstream handling and sharing.

---

## 9. Target Audience and Completion Targets

### 9.1 Program Audience

*Define who this program applies to in terms of participation, awareness, and operational responsibility. Distinguish between operational participants (those who run the program) and awareness recipients (those who receive outputs).*

#### 9.1.1 Operational Participants

Personnel directly involved in executing the Situational Awareness Program:

| Role | Department | Participation Type | Required Competency |
|---|---|---|---|
| CISO | Information Security | Executive Sponsor | Strategic threat awareness, regulatory obligations |
| Security Manager | Information Security | Program Manager | Threat management, team coordination |
| Threat Intelligence Analyst | SOC / Threat Intelligence | Core Operator | TIP operation, TI tradecraft, MITRE ATT&CK |
| SOC Analyst (L1/L2/L3) | SOC | Core Operator | SIEM operation, alert triage, IOC handling |
| SOC Team Lead | SOC | Core Operator | Shift management, escalation procedures |
| Security Engineer | Security Engineering | Core Operator | Vulnerability management, tool configuration |
| Vulnerability Management Specialist | Security Engineering | Core Operator | Scanning tools, CVSS scoring, patch coordination |
| QA Lead | Quality Assurance | Program Owner | Documentation, compliance evidence, review coordination |

#### 9.1.2 Intelligence Recipients

Personnel who receive program outputs and must maintain situational awareness relevant to their role:

| Role / Group | Department | Intelligence Product | Frequency |
|---|---|---|---|
| EXCO Members | Executive | Executive Threat Briefing | Quarterly |
| Chief Risk Officer (CRO) | Risk Management | Executive Briefing + Monthly Report | Monthly + Quarterly |
| Chief Compliance Officer (CCO) | Compliance | Compliance Report, Critical Advisories | Monthly + Ad hoc |
| IT Department Heads | IT Operations | Monthly TI Report, Critical Advisories | Monthly + Ad hoc |
| Business Unit Heads | All Business Units | Critical Advisories (as applicable) | Ad hoc |
| All Staff | All | Security Awareness Bulletins (phishing, social engineering) | Quarterly minimum |

### 9.2 Competency and Training Requirements

| Role | Required Training | Training Provider | Completion Target | Recertification |
|---|---|---|---|---|
| Threat Intelligence Analyst | Threat Intelligence Professional certification (e.g., CTIA, GCTI) | [Internal / External Provider] | Within 6 months of appointment | Every 2 years |
| SOC Analyst (L1) | Security Operations fundamentals, SIEM operation | [Internal / External Provider] | Within 3 months of appointment | Annually |
| SOC Analyst (L2/L3) | Advanced threat hunting, MITRE ATT&CK proficiency | [Internal / External Provider] | Within 6 months of promotion | Annually |
| Security Engineer | Vulnerability management, cloud security | [Internal / External Provider] | Within 6 months of appointment | Annually |
| All Security Personnel | BNM RMiT awareness training | Internal | Upon onboarding + Annually | Annually |
| All Staff | Cyber security awareness (phishing, social engineering) | Internal | Upon onboarding + Annually | Annually |

### 9.3 Completion Targets and Tracking

| Audience Group | Training / Awareness Activity | Target Completion Rate | Measurement Method | Reporting Frequency |
|---|---|---|---|---|
| SOC Analysts | Mandatory TI platform training | 100% | LMS records | Quarterly |
| Security Engineering | Vulnerability management certification | 90% within role SLA | LMS + Certification records | Quarterly |
| All IT Personnel | BNM RMiT awareness | 100% | LMS records | Annually |
| All Staff | Cyber security awareness | 95% | LMS records | Annually |
| New Joiners | Onboarding security awareness | 100% within 30 days | LMS records | Monthly |

---

## 10. Assessment Methodology and Pass Criteria

### 10.1 Program Effectiveness Assessment

*Describe how the effectiveness of the Situational Awareness Program is measured and validated. This section supports the quarterly review obligation and provides evidence for regulatory examination.*

The effectiveness of [Organization Name]'s Situational Awareness Program is assessed through three complementary methods:

1. **Quantitative Metrics Assessment** — Measurement of operational KPIs against defined targets.
2. **Qualitative Review** — Structured review of intelligence quality, relevance, and consumer satisfaction.
3. **Capability Maturity Assessment** — Periodic evaluation of program maturity against an established framework.

### 10.2 Operational KPIs and Pass Criteria

| KPI | Metric | Target (Pass) | Warning Threshold | Fail Threshold | Measurement Frequency |
|---|---|---|---|---|---|
| Asset Coverage | % of in-scope assets included in active monitoring | ≥ 98% | 90–97% | < 90% | Monthly |
| Scan Cadence Compliance | % of scheduled scans completed on time | ≥ 95% | 85–94% | < 85% | Monthly |
| IOC Processing Time | Mean time from IOC receipt to deployment in defensive controls | ≤ 2 hours (critical) | 2–4 hours | > 4 hours | Per event |
| Critical Vulnerability MTTI | Mean Time to Identify critical CVEs affecting in-scope assets | ≤ 24 hours | 24–48 hours | > 48 hours | Per event |
| Critical Threat Escalation | % of critical threats escalated to CISO within 2-hour SLA | ≥ 95% | 85–94% | < 85% | Monthly |
| TI Report Delivery | % of scheduled TI reports delivered on time | ≥ 100% | 90–99% | < 90% | Monthly |
| Executive Briefing Delivery | Quarterly executive briefing delivered as scheduled | 100% | — | Any miss | Quarterly |
| Intelligence Consumer Satisfaction | Average satisfaction rating from intelligence consumers | ≥ 4.0 / 5.0 | 3.0–3.9 | < 3.0 | Quarterly |

### 10.3 Capability Maturity Assessment

[Organization Name] assesses the maturity of its Situational Awareness Program against the following capability maturity model on an annual basis:

| Maturity Level | Description | Target Achievement |
|---|---|---|
| **Level 1 — Initial** | Ad hoc awareness activities, no formal program structure | Baseline — all organizations |
| **Level 2 — Developing** | Defined processes, assigned roles, basic tooling in place | Minimum acceptable |
| **Level 3 — Defined** | Documented program, consistent execution, integration with incident response | **Current Target — [Organization Name]** |
| **Level 4 — Managed** | Quantitatively managed, metrics-driven, proactive threat hunting | Next target |
| **Level 5 — Optimizing** | Continuous improvement, advanced analytics, predictive capability | Long-term goal |

**Current Maturity Assessment:** Level [X] — assessed [Date] — Next assessment due [Date]

### 10.4 Assessment Schedule

| Assessment Type | Frequency | Responsible | Reviewer | Output |
|---|---|---|---|---|
| KPI Dashboard Review | Monthly | QA Lead | Security Manager | Monthly Metrics Report |
| Consumer Feedback Survey | Quarterly | QA Lead | CISO | Feedback Analysis Report |
| Capability Maturity Assessment | Annually | CISO | CRO | Maturity Assessment Report |
| Full Program Review | Quarterly | QA Lead | CISO | Program Review Report |
| Regulatory Compliance Assessment | Annually | Chief Compliance Officer | External Auditor | Compliance Assessment Report |

### 10.5 Pass / Fail Determination

The Situational Awareness Program is assessed as **Satisfactory** if:
- All KPIs are at or above the **Pass** threshold.
- No KPI has been at the **Fail** threshold for more than one consecutive reporting period.
- The quarterly program review has been completed and signed off.
- All critical threat escalation SLAs have been met.

The program is assessed as **Requiring Improvement** if:
- One or more KPIs are in the **Warning** threshold.
- A remediation plan has been developed and approved within 15 business days.

The program is assessed as **Unsatisfactory** if:
- One or more KPIs are at the **Fail** threshold.
- Mandatory regulatory reporting obligations have not been met.
- Critical escalation SLAs have been missed and no compensating control is in place.

An **Unsatisfactory** assessment requires immediate escalation to the CISO and Chief Risk Officer, with a formal remediation plan presented to the Technology Risk Committee within 10 business days.

---

## 11. Content Update Schedule

### 11.1 Document Review Cadence

*This section governs when and how the content of this program document and its associated procedures are reviewed and updated.*

| Review Type | Trigger | Frequency | Responsible | Approver |
|---|---|---|---|---|
| Scheduled Quarterly Review | Calendar — end of each quarter | Quarterly | QA Lead | CISO |
| Triggered Review — Regulatory Change | BNM policy amendment or new guidance issued | Within 60 days of change | Chief Compliance Officer + QA Lead | CISO + CCO |
| Triggered Review — Material Incident | Security incident classified Severity 1 or 2 | Within 30 days of incident closure | Security Manager + QA Lead | CISO |
| Triggered Review — Technology Change | New tool adoption, system decommission, or major architecture change | Within 30 days of change | Security Engineering Lead + QA Lead | CISO |
| Triggered Review — Organizational Change | Significant change in organizational structure or ownership | Within 30 days of change | QA Lead | CISO |
| Annual Comprehensive Review | Annual policy review cycle | Annually | QA Lead | Technology Risk Committee |

### 11.2 Intelligence Source Review

| Activity | Frequency | Responsible | Criteria for Change |
|---|---|---|---|
| Review subscribed intelligence feeds for relevance and value | Quarterly | Threat Intelligence Analyst | Low-quality feeds decommissioned, new relevant feeds added |
| Review PIRs against current threat landscape | Quarterly | CISO + Threat Intelligence Analyst | PIRs updated to reflect new business priorities or threat trends |
| Review intelligence sharing arrangements | Annually | CISO + Legal | Contractual obligations, confidentiality, and reciprocity assessed |
| Benchmark against peer institution practices | Annually | CISO | Industry best practice comparison |

### 11.3 Tool and Technology Review

| Activity | Frequency | Responsible |
|---|---|---|
| Review ASM tool coverage and configuration | Quarterly | Security Engineering Lead |
| Validate SIEM detection rule effectiveness | Monthly | SOC Team Lead |
| Review TIP platform feeds and enrichment sources | Quarterly | Threat Intelligence Analyst |
| Assess new tooling options in the market | Annually | Security Engineering Lead + CISO |

### 11.4 Update and Change Control

All updates to this document shall follow the [Organization Name] Document Management and Change Control Procedure [Document ID]:

1. **Proposed Change** — Author documents proposed change with justification.
2. **Peer Review** — At least one peer reviewer from a relevant team validates the change.
3. **Owner Approval** — QA Lead approves minor changes (typographical, formatting, minor procedural clarifications).
4. **CISO Approval** — CISO approval required for material changes to scope, process, or roles.
5. **Technology Risk Committee Approval** — Required for changes that affect regulatory obligations or compliance posture.
6. **Version Control** — Version number incremented per the versioning scheme in the Version History table (§16).
7. **Communication** — All stakeholders listed in §9.1 are notified of material changes within 5 business days of approval.

---

## 12. Roles and Responsibilities

### 12.1 RACI Matrix

*The RACI matrix below defines accountability for each activity within the Situational Awareness Program. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Security Manager | QA Lead | Threat Intelligence Analyst | SOC Team Lead | SOC Analyst | Security Engineer | Vulnerability Mgmt Specialist | Chief Compliance Officer | IT Management |
|---|---|---|---|---|---|---|---|---|---|---|
| **Program Governance** |
| Program ownership and strategic direction | A | C | R | I | I | I | I | I | C | I |
| Quarterly program review | A | C | R | C | C | I | C | C | C | I |
| Regulatory compliance reporting | A | C | R | I | I | I | I | I | C | I |
| **Collection and Processing** |
| Threat intelligence feed management | I | C | I | R/A | C | I | C | I | I | I |
| External attack surface scanning | I | C | I | I | C | I | R/A | C | I | I |
| Vulnerability scan execution | I | C | I | I | I | I | C | R/A | I | I |
| Dark web and credential monitoring | I | C | I | R/A | C | R | I | I | I | I |
| IOC collection and enrichment | I | C | I | R/A | C | R | C | I | I | I |
| **Analysis and Dissemination** |
| Daily SOC threat briefing | I | C | I | C | R/A | R | I | I | I | I |
| Critical threat advisory issuance | A | R | C | C | C | I | C | I | C | I |
| Monthly TI report production | I | C | R | R/A | C | I | I | I | I | I |
| Executive Threat Briefing | R/A | C | C | C | I | I | I | I | C | I |
| **Remediation and Response** |
| Critical threat escalation | A | R | I | C | R | C | C | C | I | I |
| IOC deployment to controls | I | C | I | C | C | I | R/A | I | I | I |
| Vulnerability remediation coordination | I | C | I | I | I | I | C | R/A | I | R |
| Post-incident threat review | A | R | C | R | C | C | C | C | C | I |
| **Assessment and Improvement** |
| KPI measurement and reporting | I | C | R/A | C | C | I | C | C | I | I |
| Consumer feedback collection | I | C | R/A | I | I | I | I | I | I | I |
| Capability maturity assessment | R/A | C | R | C | C | I | C | I | C | I |
| PIR review and update | R/A | C | C | R | C | I | C | I | I | I |
| Document review and update | A | C | R | C | C | I | C | I | C | I |

### 12.2 Role Descriptions

| Role | Key Responsibilities Under This Program |
|---|---|
| **CISO** | Executive accountability for program outcomes; approval of critical advisories and major program changes; executive threat briefing delivery; escalation recipient for critical threats. |
| **Security Manager** | Day-to-day program management; coordination between SOC, engineering, and intelligence teams; escalation management; operational reporting. |
| **QA Lead (Program Owner)** | Document ownership and maintenance; quarterly review coordination; KPI tracking; compliance evidence compilation; regulatory reporting support. |
| **Threat Intelligence Analyst** | TI platform management; intelligence production; PIR management; threat actor profiling; intelligence source evaluation. |
| **SOC Team Lead** | Shift management and quality oversight; daily threat briefing delivery; escalation decision-making; team training and performance. |
| **SOC Analyst (L1/L2/L3)** | Alert monitoring and triage; IOC collection and enrichment; dark web monitoring; threat intelligence integration into defensive tools. |
| **Security Engineer** | Attack surface monitoring tool operation; IOC deployment to defensive controls; vulnerability remediation support; tool configuration and maintenance. |
| **Vulnerability Management Specialist** | Vulnerability scanning and result analysis; asset-to-CVE correlation; remediation SLA tracking; patch coordination with IT Operations. |
| **Chief Compliance Officer** | Regulatory change monitoring; compliance posture oversight; regulatory reporting approval; external audit liaison. |
| **IT Management** | Vulnerability remediation execution; asset inventory maintenance; timely response to security advisories; cooperation with program activities. |

---

## 13. Tools, Technologies, and Data Sources

### 13.1 Approved Tool Register

*Maintain an accurate and current list of all tools used in the program. Authors should validate this register quarterly and ensure each tool is covered by an appropriate licence, security assessment, and vendor risk evaluation.*

| Tool Category | Tool Name | Version | Vendor | Purpose | Owner | Licence Expiry | Security Assessment Date |
|---|---|---|---|---|---|---|---|
| SIEM | [SIEM Platform Name] | [Version] | [Vendor] | Log aggregation, correlation, alerting | SOC Team Lead | [Date] | [Date] |
| Threat Intelligence Platform (TIP) | [TIP Name] | [Version] | [Vendor] | IOC management, TI lifecycle | Threat Intelligence Analyst | [Date] | [Date] |
| Attack Surface Management (ASM) | [ASM Tool Name] | [Version] | [Vendor] | External surface discovery and monitoring | Security Engineer | [Date] | [Date] |
| Vulnerability Scanner | [Scanner Name] | [Version] | [Vendor] | Authenticated/unauthenticated scanning | Vulnerability Mgmt Specialist | [Date] | [Date] |
| Endpoint Detection and Response (EDR) | [EDR Name] | [Version] | [Vendor] | Endpoint telemetry and detection | Security Engineer | [Date] | [Date] |
| Dark Web Monitoring | [Tool Name] | [Version] | [Vendor] | Credential and data leak monitoring | SOC Analyst (L2) | [Date] | [Date] |
| SOAR | [SOAR Platform Name] | [Version] | [Vendor] | Playbook automation, IOC deployment | Security Engineer | [Date] | [Date] |
| Threat Intelligence Feed | [Feed Name] | N/A | [Vendor] | Structured IOC and advisory feeds | Threat Intelligence Analyst | [Date] | [Date] |

### 13.2 Data Classification and Handling

All data collected, processed, and disseminated under this program must be handled in accordance with [Organization Name]'s Data Classification Policy [Document ID]:

| Data Type | Classification | Retention Period | Storage Location | Disposal Method |
|---|---|---|---|---|
| Raw IOCs (unverified) | Confidential | 12 months | [TIP Platform] | Automated deletion per retention policy |
| Verified IOCs (deployed) | Confidential | 24 months | [TIP Platform + SIEM] | Automated deletion |
| Threat Intelligence Reports | Confidential | 7 years | [Document Management System] | Secure deletion |
| Vulnerability Scan Results | Confidential | 3 years | [Vulnerability Management System] | Secure deletion |
| Incident-related intelligence | Restricted | 7 years | [Incident Management System] | Secure deletion |
| External advisory materials (TLP:WHITE) | Internal | 12 months | [SharePoint / Document Store] | Standard deletion |
| Regulatory submissions | Restricted | 7 years | [Compliance Document Store] | Secure deletion |

---

## 14. Incident Escalation and Response Integration

### 14.1 Integration with Incident Response

*The Situational Awareness Program feeds directly into the incident response lifecycle. This section defines integration points and escalation triggers.*

The Situational Awareness Program operates as the primary detection and early-warning mechanism feeding into [Organization Name]'s Incident Response Plan [Document ID]. Integration points include:

| SAP Output | IR Trigger | Escalation Path | SLA |
|---|---|---|---|
| Critical threat advisory | Potential active exploitation | SAP → SOC Team Lead → Incident Manager | Immediate |
| IOC match in SIEM | Potential compromise | SOC Alert → SOC Analyst Triage → IR Initiation | Per SIEM alert SLA |
| Credential leak detection | Active credential compromise risk | SAP → Security Manager → CISO → IR Initiation | 2 hours |
| Zero-day advisory (in-scope CVE) | Unpatched critical vulnerability | SAP → Vulnerability Mgmt → Security Manager → CISO | 4 hours |
| Anomalous attack surface change | Potential unauthorized exposure | SAP → Security Engineer → Security Manager | 24 hours |

### 14.2 Escalation Matrix

| Severity | Classification | Escalation Recipients | Notification SLA | Channel |
|---|---|---|---|---|
| **P1 — Critical** | Active compromise, data exfiltration likely, systemic risk | CISO, CRO, CCO, CEO (if material) | 2 hours | Phone + Email + Incident Bridge |
| **P2 — High** | Active exploitation of known vulnerability, credential compromise | CISO, Security Manager, IT Management | 4 hours | Phone + Email |
| **P3 — Medium** | Active campaigns targeting sector/region, unpatched critical CVE | Security Manager, Threat Intelligence Lead | 24 hours | Email |
| **P4 — Low** | General threat intelligence, informational advisories | SOC Team, IT Engineering | 48 hours | Email / Portal |

---

## 15. Metrics, KPIs, and Reporting

### 15.1 Reporting Structure

| Report | Audience | Frequency | Responsible | Distribution Method |
|---|---|---|---|---|
| Daily SOC Threat Sitrep | SOC, IT Operations | Daily | SOC Team Lead | Email / Internal Portal |
| Weekly Attack Surface Report | Security Manager, IT Engineering | Weekly | Security Engineer | Email / Internal Portal |
| Monthly Threat Intelligence Report | CISO, CRO, IT Management | Monthly | Threat Intelligence Analyst + QA Lead | Email / Document Management System |
| Quarterly SAP Program Review Report | CISO, Technology Risk Committee | Quarterly | QA Lead | Document Management System + Committee Papers |
| Quarterly Executive Threat Briefing | EXCO, Board Risk Committee | Quarterly | CISO | Board Papers |
| Annual Capability Maturity Report | CISO, CRO, External Auditors | Annually | CISO + QA Lead | Document Management System |
| Regulatory Compliance Evidence Package | CCO, BNM (on request) | Annually + On demand | QA Lead + CCO | Secure Submission |

### 15.2 Dashboard and Monitoring Requirements

The following real-time dashboards shall be maintained and accessible to designated personnel:

| Dashboard | Data Shown | Audience | Tool / Platform | Refresh Rate |
|---|---|---|---|---|
| SOC Threat Dashboard | Active alerts, IOC hits, threat level indicator | SOC Analysts | [SIEM Platform] | Real-time |
| Attack Surface Dashboard | External asset exposure, open ports, cert status | Security Engineering | [ASM Tool] | Daily |
| Vulnerability Posture Dashboard | Critical/high CVEs open, patching SLA compliance | Vulnerability Mgmt, IT Management | [Vuln Scanner] | Daily |
| Programme KPI Dashboard | All SAP KPIs vs. targets | QA Lead, Security Manager, CISO | [Dashboard Tool / SIEM] | Weekly |

### 15.3 KPI Summary Register

| KPI ID | KPI Name | Unit | Target | Owner | Reporting Frequency |
|---|---|---|---|---|---|
| SAP-KPI-001 | Asset Monitoring Coverage | % | ≥ 98% | Security Engineer | Monthly |
| SAP-KPI-002 | Scheduled Scan Compliance | % | ≥ 95% | Security Engineer | Monthly |
| SAP-KPI-003 | Mean Time to Identify Critical CVE | Hours | ≤ 24 hrs | Vulnerability Mgmt | Per event |
| SAP-KPI-004 | IOC Processing Time (Critical) | Hours | ≤ 2 hrs | SOC Team Lead | Per event |
| SAP-KPI-005 | Critical Threat Escalation SLA | % within SLA | ≥ 95% | Security Manager | Monthly |
| SAP-KPI-006 | TI Report On-time Delivery | % | 100% | QA Lead | Monthly |
| SAP-KPI-007 | Executive Briefing Delivery | Binary (Yes/No) | 100% | CISO | Quarterly |
| SAP-KPI-008 | Consumer Satisfaction Score | Rating (1–5) | ≥ 4.0 | QA Lead | Quarterly |
| SAP-KPI-009 | Capability Maturity Score | Level (1–5) | ≥ Level 3 | CISO | Annually |
| SAP-KPI-010 | Training Completion Rate (SOC) | % | 100% | QA Lead | Quarterly |

---

## 16. Review and Approval

### 16.1 Version History

| Version | Date | Author | Reviewed By | Changes Made |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name] | [Reviewer Name] | Initial draft |
| 0.2 | [Date] | [Author Name] | [Reviewer Name] | Incorporated review feedback from [team/reviewer] |
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Approved for release — first issue |
| [Future] | [Date] | [Author Name] | [Reviewer Name] | [Summary of changes] |

### 16.2 Approval Sign-Off

*All approvals must be obtained before this document is classified as current and distributed. Wet or digital signatures are required in accordance with [Organization Name]'s Document Approval Policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Author | [Author Name] | _________________________ | [Date] |
| QA Lead (Document Owner) | [Name] | _________________________ | [Date] |
| CISO | [Name] | _________________________ | [Date] |
| Chief Risk Officer | [Name] | _________________________ | [Date] |
| Chief Compliance Officer | [Name] | _________________________ | [Date] |
| Technology Risk Committee Chair | [Name] | _________________________ | [Date] |

### 16.3 Distribution List

| Name / Role | Department | Copy Type |
|---|---|---|
| CISO | Information Security | Controlled Master |
| Security Manager | Information Security | Controlled Copy |
| QA Lead | Quality Assurance | Controlled Copy |
| SOC Team Lead | SOC | Controlled Copy |
| Chief Risk Officer | Risk Management | Controlled Copy |
| Chief Compliance Officer | Compliance | Controlled Copy |
| [Additional Recipient] | [Department] | [Controlled/Uncontrolled] |

---

## 17. References

### 17.1 Regulatory References

| Reference | Document / Clause | Description |
|---|---|---|
| **Primary** | BNM RMiT Policy Document — **Clause 11.20** | Situational awareness of the cyber threat environment — mandatory for all financial institutions |
| Supporting | BNM RMiT Policy Document — Clause 11.1 | Technology risk management governance |
| Supporting | BNM RMiT Policy Document — Clause 11.17 | Vulnerability and patch management |
| Supporting | BNM RMiT Policy Document — Clause 11.18 | Security event monitoring and logging |
| Supporting | BNM RMiT Policy Document — Clause 11.19 | Security incident management |
| Supporting | BNM RMiT Policy Document — Clause 11.21 | Cyber resilience testing |
| Supporting | Personal Data Protection Act 2010 (PDPA) | Data protection obligations for personal data processed in monitoring activities |
| Supporting | NACSA National Cyber Security Policy | National cybersecurity alignment requirements |

### 17.2 Standards and Frameworks

| Reference | Version | Relevant Sections | Use in This Document |
|---|---|---|---|
| ISO/IEC 27001 | 2022 | A.5.7 Threat intelligence; A.8.8 Technical vulnerabilities | Threat intelligence program structure |
| ISO/IEC 27002 | 2022 | 5.7, 8.8 | Implementation guidance for threat intelligence |
| NIST Cybersecurity Framework | 2.0 | Identify (ID.RA), Detect (DE.CM, DE.AE) | Detection and monitoring controls |
| MITRE ATT&CK | v15 | All tactics and techniques | Adversary TTP mapping and analysis |
| NIST SP 800-61 | Rev 2 | Section 2 (Organizing a CIRT) | Incident integration |
| Traffic Light Protocol (TLP) | 2.0 | All | Intelligence classification and sharing |
| STIX / TAXII | 2.1 | All | Intelligence exchange format |

### 17.3 Internal Policy References

| Document ID | Document Title | Relationship |
|---|---|---|
| [Doc ID] | Information Security Policy | Parent policy |
| [Doc ID] | Technology Risk Management Framework | Governing framework |
| [Doc ID] | Incident Response Plan | Integration — escalation and response |
| [Doc ID] | Vulnerability Management Procedure | Integration — CVE and patch management |
| [Doc ID] | Data Classification Policy | Data handling requirements |
| [Doc ID] | Vendor Risk Management Policy | Third-party and supply chain risk |
| [Doc ID] | Document Management and Change Control Procedure | Document lifecycle governance |

---

## 18. Appendices

### Appendix A — Priority Intelligence Requirements (PIR) Register Template

*Use this template to maintain the current list of approved PIRs. The PIR Register is a living document reviewed quarterly.*

| PIR ID | Priority Intelligence Requirement | Strategic Driver | Owner | Date Added | Last Reviewed | Status |
|---|---|---|---|---|---|---|
| PIR-001 | [Intelligence question] | [Business risk or regulatory driver] | [Role] | [Date] | [Date] | Active |
| PIR-002 | [Intelligence question] | [Business risk or regulatory driver] | [Role] | [Date] | [Date] | Active |

---

### Appendix B — Threat Intelligence Feed Assessment Criteria

*Use this scorecard when evaluating new intelligence sources or reviewing existing subscriptions.*

| Criterion | Weighting | Score (1–5) | Notes |
|---|---|---|---|
| Relevance to Malaysian financial sector | 25% | [Score] | |
| Timeliness of intelligence delivery | 20% | [Score] | |
| Accuracy and low false-positive rate | 20% | [Score] | |
| Format compatibility (STIX/TAXII, API) | 15% | [Score] | |
| Cost and value for money | 10% | [Score] | |
| Vendor reputation and track record | 10% | [Score] | |
| **Weighted Total Score** | 100% | **[Total]** | Pass threshold: ≥ 3.5 |

---

### Appendix C — Critical Threat Advisory Template

*Use this template when issuing a Critical Threat Advisory under §7.2.*

---

**CRITICAL THREAT ADVISORY — [ADVISORY ID]**

| Field | Details |
|---|---|
| Advisory ID | CTA-[YYYY]-[NNN] |
| Classification | TLP:[Colour] |
| Severity | [Critical / High] |
| Issue Date/Time | [Date and Time (MYT)] |
| Issued By | [Name / Role] |
| Affected Systems | [List affected systems or asset categories] |

**Threat Summary:**
[Provide a 2–3 sentence summary of the threat, including what it is, who is responsible (if known), and what the potential impact is.]

**Technical Details:**
[IOCs, CVE IDs, TTPs (MITRE ATT&CK), indicators — as appropriate and at appropriate classification level.]

**Immediate Actions Required:**

1. [Action 1] — Owner: [Role] — Deadline: [Date/Time]
2. [Action 2] — Owner: [Role] — Deadline: [Date/Time]
3. [Action 3] — Owner: [Role] — Deadline: [Date/Time]

**Status Updates:** Updates will be issued every [X] hours until threat is contained.

---

### Appendix D — Attack Surface Change Log Template

*Record all material changes to the organization's attack surface, including new assets, decommissioned assets, and remediated exposures.*

| Entry ID | Date | Change Type | Asset Affected | Description | Risk Impact | Action Taken | Closed Date |
|---|---|---|---|---|---|---|---|
| ASC-[YYYY]-001 | [Date] | New Exposure | [Asset] | [Description of change] | [High/Med/Low] | [Action] | [Date] |
| ASC-[YYYY]-002 | [Date] | Remediation | [Asset] | [Description of change] | [High/Med/Low] | [Action] | [Date] |

---

### Appendix E — Quarterly Program Review Checklist

*Complete this checklist at each quarterly review. Retain completed checklists as evidence of ongoing program compliance for BNM RMiT Clause 11.20.*

**Review Period:** Q[X] [Year] — [Start Date] to [End Date]

**Completed By:** [Name], [Role] — [Date]

**Reviewed By:** [Name], CISO — [Date]

| # | Review Item | Status | Evidence Reference | Notes |
|---|---|---|---|---|
| 1 | All KPIs reviewed against targets | [ ] Complete | [Reference] | |
| 2 | PIR register reviewed and updated | [ ] Complete | [Reference] | |
| 3 | Intelligence source list reviewed | [ ] Complete | [Reference] | |
| 4 | Threat actor profiles updated | [ ] Complete | [Reference] | |
| 5 | Attack surface inventory validated against CMDB | [ ] Complete | [Reference] | |
| 6 | Consumer satisfaction survey distributed and results analysed | [ ] Complete | [Reference] | |
| 7 | Training completion records reviewed | [ ] Complete | [Reference] | |
| 8 | Document reviewed for required updates | [ ] Complete | [Reference] | |
| 9 | Critical threat advisories issued during period reviewed | [ ] Complete | [Reference] | |
| 10 | Integration with incident response tested or validated | [ ] Complete | [Reference] | |
| 11 | Regulatory change log reviewed for applicable updates | [ ] Complete | [Reference] | |
| 12 | Next quarter objectives and improvements documented | [ ] Complete | [Reference] | |

**Overall Program Assessment:** [ ] Satisfactory [ ] Requiring Improvement [ ] Unsatisfactory

**Actions Required:**

| Action | Owner | Deadline |
|---|---|---|
| [Action Item] | [Role] | [Date] |

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| ASM (Attack Surface Management) | The continuous discovery, monitoring, and assessment of all assets in an organization's attack surface that could be exploited by an adversary. |
| CVE (Common Vulnerabilities and Exposures) | A list of publicly disclosed cybersecurity vulnerabilities, each assigned a unique identifier. |
| CVSS (Common Vulnerability Scoring System) | A standardized scoring system for assessing the severity of security vulnerabilities. |
| IOC (Indicator of Compromise) | Forensic artifacts or patterns that indicate a system may have been breached or is under attack. |
| MITRE ATT&CK | A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. |
| PIR (Priority Intelligence Requirement) | Specific intelligence needs identified by senior decision-makers to support key decisions. |
| SIEM (Security Information and Event Management) | A platform that aggregates and correlates log data from multiple sources to detect security events. |
| SOAR (Security Orchestration, Automation and Response) | A platform that enables automated responses to security alerts and incidents. |
| STIX (Structured Threat Information eXpression) | A standardized language for representing and sharing cyber threat intelligence. |
| TAXII (Trusted Automated eXchange of Intelligence Information) | A protocol for exchanging cyber threat intelligence over HTTPS. |
| TIP (Threat Intelligence Platform) | A software solution for aggregating, correlating, and analysing threat intelligence data. |
| TLP (Traffic Light Protocol) | A classification scheme for sharing sensitive information based on colour-coded handling designations. |
| TTP (Tactics, Techniques and Procedures) | The behaviour of a threat actor, including the methods used to conduct an attack. |
| Zero-Day | A previously unknown vulnerability that has no available patch at the time of exploitation. |

---

*End of Document*

---

**Document Control:** This document is the property of [Organization Name]. Printed or downloaded copies are uncontrolled. The current controlled version is maintained in [Document Management System URL/Location]. Verify you are referencing the current version before use.