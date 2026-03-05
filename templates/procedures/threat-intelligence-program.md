# Threat Intelligence Program

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Threat Intelligence Lead |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Clause(s)** | 11.16 |

---

> **Document Classification Notice:** This document is classified **Confidential**. It contains sensitive information relating to the cybersecurity posture and threat intelligence capabilities of [Organization Name]. Access is restricted to authorized personnel only. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may result in disciplinary action and/or regulatory consequences.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Alignment](#2-regulatory-and-policy-alignment)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Threat Intelligence Lifecycle](#5-threat-intelligence-lifecycle)
6. [Collection](#6-collection)
7. [Analysis](#7-analysis)
8. [Dissemination](#8-dissemination)
9. [Findings and Ratings](#9-findings-and-ratings)
10. [Evidence Reviewed](#10-evidence-reviewed)
11. [Recommendations](#11-recommendations)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and why the Threat Intelligence Program exists within the organization. Reference the regulatory obligation and the business risk context.*

This document establishes the formal **Threat Intelligence Program** (TIP) for [Organization Name]. It defines the policies, processes, procedures, and accountabilities governing the collection, processing, analysis, production, and dissemination of threat intelligence to support informed risk management and proactive defense of the organization's critical technology assets and infrastructure.

The program is designed to ensure that [Organization Name] maintains a current, actionable, and contextually relevant understanding of the cyber threat landscape applicable to the Malaysian financial services sector, in fulfilment of obligations under **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 11.16**.

This program enables [Organization Name] to:

- Anticipate and respond to emerging cyber threats before they materialize into incidents.
- Provide threat context to security operations, risk management, and executive stakeholders.
- Support strategic and tactical decision-making with evidence-based intelligence.
- Demonstrate regulatory compliance and due diligence to BNM and other relevant authorities.

### 1.2 Scope

*Define the boundaries of the program — which systems, data, business units, and threat domains are in scope.*

This program applies to:

- **Technology Assets:** All information systems, networks, applications, endpoints, cloud services, and operational technology (OT) environments owned, managed, or operated by [Organization Name], including those hosted by third-party service providers.
- **Business Units:** All divisions and subsidiaries of [Organization Name] that rely on technology systems to conduct financial services operations.
- **Threat Domains:** All threat actor categories, attack vectors, and vulnerability classes relevant to the Malaysian financial services sector, including but not limited to:
  - Advanced Persistent Threats (APT) targeting financial institutions
  - Financially motivated cybercriminal groups
  - Insider threats
  - Supply chain and third-party risks
  - Ransomware and destructive malware
  - Fraud-related threats (phishing, business email compromise, account takeover)
  - Nation-state sponsored cyber operations
- **Personnel:** All employees, contractors, and third-party personnel with access to [Organization Name] systems and information.
- **Regulatory Jurisdiction:** Primarily governed by BNM RMiT; with consideration for requirements under the **Personal Data Protection Act 2010 (PDPA)** and **National Cyber Security Agency (NACSA)** guidelines where applicable.

### 1.3 Out of Scope

The following are explicitly excluded from this program:

- [List any specific systems, business units, or threat domains that are excluded and the rationale]
- Physical security intelligence not directly related to cybersecurity operations
- Intelligence collection activities that are not compliant with Malaysian law

---

## 2. Regulatory and Policy Alignment

### 2.1 Regulatory Basis

*Identify the specific regulatory provisions that mandate or inform this program. This section demonstrates compliance lineage and is critical for regulatory examinations.*

| Regulation / Standard | Clause / Section | Requirement Summary |
|---|---|---|
| BNM RMiT | 11.16 | Financial institutions must establish a threat intelligence program to collect, analyze, and disseminate threat intelligence to support informed risk management decisions and enhance cyber resilience. |
| BNM RMiT | [Related Clause] | [Summary of related requirement] |
| PDPA 2010 | [Section] | [Relevant data handling obligations during intelligence collection] |
| NACSA CRP Framework | [Section] | [Relevant requirement] |
| [Internal Policy Reference] | [Section] | [Summary] |

### 2.2 Internal Policy Alignment

*Reference internal policies that this program supports or is governed by.*

This program operates in alignment with the following internal policies and frameworks:

- **[Organization Name] Information Security Policy** – [Document ID]
- **[Organization Name] Cyber Incident Response Policy** – [Document ID]
- **[Organization Name] Vulnerability Management Policy** – [Document ID]
- **[Organization Name] Third-Party Risk Management Policy** – [Document ID]
- **[Organization Name] Data Classification and Handling Policy** – [Document ID]
- **[Organization Name] Security Operations Center (SOC) Charter** – [Document ID]

---

## 3. Assessment Scope and Criteria

### 3.1 Program Assessment Scope

*Define what is evaluated as part of the threat intelligence program assessment, including the threat landscape dimensions covered and the criteria used to determine relevance and priority.*

The threat intelligence program encompasses assessment of threats across the following dimensions:

#### 3.1.1 Threat Landscape Dimensions

| Dimension | Description | Relevance Criteria |
|---|---|---|
| **Strategic Intelligence** | Long-term threat trends affecting the financial sector, geopolitical risks, and nation-state activity | Board and senior management decision-making, risk appetite setting |
| **Operational Intelligence** | Threat actor campaigns, TTPs (Tactics, Techniques, and Procedures), and active operations targeting the sector | Security operations, incident readiness, threat hunting |
| **Tactical Intelligence** | Specific indicators of compromise (IOCs), malware signatures, exploit code | Day-to-day defensive operations, SIEM tuning, EDR rules |
| **Technical Intelligence** | Vulnerability disclosures, zero-day exploits, patch intelligence | Vulnerability management, patching prioritization |

#### 3.1.2 Threat Actor Categories in Scope

| Category | Description | Priority Level |
|---|---|---|
| Nation-State Actors | State-sponsored groups targeting financial infrastructure | Critical |
| Financially Motivated Criminals | Organized cybercriminal groups, ransomware operators | Critical |
| Hacktivists | Ideologically motivated actors targeting financial institutions | High |
| Insider Threats | Malicious or negligent internal personnel | High |
| Supply Chain Actors | Threats introduced through third-party vendors or software | High |
| Opportunistic Attackers | Script kiddies, automated scanning, commodity malware | Medium |

#### 3.1.3 Scope Assessment Criteria

The following criteria are used to determine whether a threat falls within the active assessment scope of this program:

- **Relevance:** Does the threat target the financial services sector, Malaysian institutions, or [Organization Name]'s specific technology stack?
- **Credibility:** Is the intelligence sourced from a reliable, vetted source?
- **Timeliness:** Is the intelligence current and actionable within a reasonable operational timeframe?
- **Severity:** Does the threat pose potential for material harm to [Organization Name]'s operations, reputation, customers, or regulatory standing?
- **Actionability:** Can [Organization Name] take meaningful defensive action based on this intelligence?

### 3.2 Geographic and Sector Scope

| Scope Dimension | Coverage |
|---|---|
| **Primary Geography** | Malaysia |
| **Secondary Geography** | ASEAN region, jurisdictions with significant counterparty exposure |
| **Sector Focus** | Financial services (banking, insurance, capital markets) |
| **Technology Focus** | [List key technology platforms, e.g., core banking, internet banking, mobile banking, cloud services] |

---

## 4. Methodology

### 4.1 Intelligence Methodology Overview

*Describe the overall methodology used by the threat intelligence program, including the intelligence cycle and any formal frameworks adopted.*

[Organization Name]'s Threat Intelligence Program follows the **Intelligence Cycle**, a structured, iterative process for transforming raw data into actionable intelligence. The program is further aligned with industry-standard frameworks including:

- **MITRE ATT&CK Framework** – for threat actor TTP mapping and adversary behavior analysis
- **Diamond Model of Intrusion Analysis** – for structured adversary profiling
- **STIX/TAXII** – for structured threat information expression and exchange
- **Traffic Light Protocol (TLP)** – for classifying and controlling intelligence dissemination
- **F3EAD (Find, Fix, Finish, Exploit, Analyze, Disseminate)** – for operationalizing intelligence in support of incident response

### 4.2 The Intelligence Cycle

The program operates a continuous six-phase intelligence cycle:

| Phase | Description | Key Activities |
|---|---|---|
| **1. Planning & Direction** | Define intelligence requirements based on business context and stakeholder needs | Priority Intelligence Requirements (PIRs), stakeholder engagement |
| **2. Collection** | Gather raw data from internal and external sources | Feed ingestion, OSINT, vendor reports, ISAC participation |
| **3. Processing** | Normalize, deduplicate, and enrich raw data | IOC normalization, TTP mapping, confidence scoring |
| **4. Analysis** | Interpret processed data to produce intelligence products | Threat actor profiling, campaign analysis, trend identification |
| **5. Dissemination** | Distribute intelligence to appropriate stakeholders | Reports, briefings, platform integration, automated IOC feeds |
| **6. Feedback** | Evaluate effectiveness and refine requirements | Stakeholder feedback, PIR review, program improvement |

### 4.3 Priority Intelligence Requirements (PIRs)

*List the organization's current Priority Intelligence Requirements — the key questions that the threat intelligence program must answer for the organization.*

PIRs are formally reviewed and approved [quarterly/annually] by [Approving Authority]. The current PIRs for [Organization Name] are:

| PIR ID | Priority Intelligence Requirement | Stakeholder | Review Date |
|---|---|---|---|
| PIR-001 | What threat actor groups are actively targeting Malaysian financial institutions and what TTPs are they employing? | CISO, SOC Lead | [Date] |
| PIR-002 | What vulnerabilities in [Organization Name]'s technology stack are currently being actively exploited in the wild? | CISO, IT Operations | [Date] |
| PIR-003 | Are there any active or planned campaigns targeting [Organization Name]'s customers (phishing, fraud, account takeover)? | Fraud Team, Customer Operations | [Date] |
| PIR-004 | What is the current ransomware threat landscape for the financial sector in Southeast Asia? | CISO, BCP/DR Team | [Date] |
| PIR-005 | Are there indicators that [Organization Name]'s brand, credentials, or data are being traded or discussed in underground forums? | CISO, Legal, Communications | [Date] |
| PIR-006 | [Additional PIR] | [Stakeholder] | [Date] |

### 4.4 Confidence and Reliability Assessment

All intelligence produced by this program is assessed against the following confidence and reliability scales:

**Source Reliability Scale (Admiralty Scale)**

| Rating | Code | Description |
|---|---|---|
| Completely Reliable | A | No doubt about authenticity; trustworthy; competent; always reliable |
| Usually Reliable | B | Minor doubts; mostly reliable |
| Fairly Reliable | C | Some doubt; provided valid information in the past |
| Not Usually Reliable | D | Significant doubt; provided invalid information in the past |
| Unreliable | E | Lacking authenticity, trustworthiness, competence; historically unreliable |
| Reliability Unknown | F | No basis for evaluating reliability |

**Information Credibility Scale**

| Rating | Code | Description |
|---|---|---|
| Confirmed | 1 | Confirmed by other independent sources; logical; consistent |
| Probably True | 2 | Not confirmed; logical; consistent with other information |
| Possibly True | 3 | Not confirmed; reasonably logical; agrees with some other information |
| Doubtful | 4 | Not confirmed; possible but illogical; no other information |
| Improbable | 5 | Not confirmed; illogical; contradicted by other information |
| Truth Unknown | 6 | No basis for evaluating validity |

---

## 5. Threat Intelligence Lifecycle

### 5.1 Lifecycle Overview

*Provide a narrative and structured overview of how intelligence moves through the program from raw data to action.*

The Threat Intelligence Lifecycle at [Organization Name] is a continuous process that ensures threat data is systematically transformed into intelligence products that drive defensive action. The lifecycle is governed by defined SLAs and quality standards at each stage.

### 5.2 Lifecycle Stage SLAs

| Stage | Input | Output | Target SLA | Responsible Role |
|---|---|---|---|---|
| Collection | Intelligence requirements, source feeds | Raw data, unprocessed reports | Continuous / per feed schedule | Intelligence Analyst |
| Processing | Raw data | Normalized, enriched data records | Within 4 hours of collection | Intelligence Analyst |
| Analysis | Processed data | Draft intelligence product | Within 24 hours for tactical; 72 hours for operational | Senior Intelligence Analyst |
| Review & QA | Draft product | Reviewed, approved product | Within 4 business hours | Threat Intelligence Lead |
| Dissemination | Approved product | Distributed intelligence | Per stakeholder SLA (see Section 8) | Threat Intelligence Lead |
| Feedback & Archival | Disseminated product | Feedback records, archived product | Within 5 business days | Intelligence Analyst |

### 5.3 Intelligence Product Taxonomy

| Product Type | Audience | Frequency | Format | Classification |
|---|---|---|---|---|
| Threat Flash Report | SOC, Incident Response | As needed (within 2 hours of critical finding) | Short-form report (1-2 pages) | Confidential |
| Weekly Threat Digest | SOC, IT Security | Weekly | Summary report | Confidential |
| Monthly Threat Intelligence Report | CISO, Security Management | Monthly | Full report (5-10 pages) | Confidential |
| Quarterly Strategic Threat Assessment | Board, Executive Committee | Quarterly | Executive briefing | Confidential |
| Vulnerability Intelligence Advisory | IT Operations, Application Teams | As needed | Advisory notice | Internal |
| Threat Actor Profile | Incident Response, Threat Hunting | As needed / updated | Profile document | Confidential – Restricted |
| IOC Feed | SIEM, EDR, Firewall, Proxy | Continuous / Daily | Structured data (STIX/CSV) | Confidential |

---

## 6. Collection

### 6.1 Collection Strategy

*Describe the strategy and principles governing how threat data is collected, ensuring legal compliance and source diversity.*

[Organization Name]'s intelligence collection strategy is designed to ensure comprehensive coverage of the threat landscape while maintaining legal, ethical, and privacy compliance. All collection activities must be authorized, documented, and consistent with applicable Malaysian law, including the **Communications and Multimedia Act 1998**, **Computer Crimes Act 1997**, and **PDPA 2010**.

### 6.2 Intelligence Sources

#### 6.2.1 External Sources

| Source Category | Source Name / Description | Data Type | Frequency | TLP Classification | Approved |
|---|---|---|---|---|---|
| **Commercial Threat Intelligence Feeds** | [Vendor Name, e.g., Recorded Future, Mandiant, CrowdStrike] | IOCs, TTPs, Threat Actor Profiles | Continuous | TLP:WHITE / TLP:AMBER | [Yes/No] |
| **Information Sharing Communities** | Financial Services ISAC (FS-ISAC) | Sector-specific threats | As published | TLP:GREEN / TLP:AMBER | [Yes/No] |
| **National CERT** | CyberSecurity Malaysia (CSM) / MyCERT | National threat alerts | As published | TLP:WHITE | [Yes/No] |
| **Regulatory Body** | BNM Cybersecurity notifications | Regulatory alerts | As issued | TLP:AMBER | [Yes/No] |
| **OSINT** | Open-source news, blogs, social media, dark web monitoring | Threat trends, IOCs | Continuous | TLP:WHITE | [Yes/No] |
| **Vulnerability Databases** | CVE/NVD, vendor security advisories | Vulnerability data | Daily | TLP:WHITE | [Yes/No] |
| **Malware Repositories** | [e.g., VirusTotal, MalwareBazaar, ANY.RUN] | Malware samples, IOCs | As needed | TLP:WHITE | [Yes/No] |
| **Peer Intelligence Sharing** | [Partner institutions, bilateral sharing agreements] | Sector-specific IOCs | As shared | TLP:AMBER | [Yes/No] |
| **Dark Web / Underground Forums** | [Authorized monitoring service / vendor] | Data leaks, fraud tools, planned attacks | Continuous | TLP:RED | [Yes/No] |

#### 6.2.2 Internal Sources

| Source Category | Description | Data Type | Frequency |
|---|---|---|---|
| **Security Operations Center (SOC)** | SIEM alerts, incident data, hunting findings | Internal threat observations | Continuous |
| **Incident Response Team** | Post-incident findings, forensic artifacts | Adversary TTPs, IOCs | Per incident |
| **Vulnerability Management Team** | Scan results, patch compliance data | Internal vulnerability posture | Weekly |
| **Email Security Gateway** | Phishing attempts, malicious attachments | Email-based IOCs | Continuous |
| **Endpoint Detection & Response (EDR)** | Endpoint telemetry, detections | Endpoint-based IOCs | Continuous |
| **Fraud Operations Team** | Fraud case data, customer complaints | Fraud-related threats | Weekly |
| **Threat Hunting Team** | Proactive hunt findings | Novel TTPs, undetected threats | Per hunt cycle |

### 6.3 Collection Controls and Governance

- All commercial intelligence subscriptions must be approved by the [Approval Authority] and reviewed annually.
- Dark web and underground forum monitoring must be conducted exclusively through [authorized third-party vendor / dedicated isolated environment] and is prohibited on corporate infrastructure.
- Collection involving personal data must comply with PDPA 2010; a data privacy impact assessment must be conducted for any new collection activity involving personal data.
- Intelligence collected under TLP:AMBER or TLP:RED restrictions must not be shared beyond the designated audience without express permission from the originating source.
- Source access credentials and API keys for intelligence feeds must be managed in accordance with [Organization Name]'s Privileged Access Management policy.

---

## 7. Analysis

### 7.1 Analysis Framework

*Describe the analytical methods, tools, and standards used to transform collected data into finished intelligence.*

Intelligence analysis at [Organization Name] follows structured analytical techniques to minimize cognitive bias, ensure consistency, and produce defensible, high-quality intelligence products. Analysts are expected to apply the following core principles:

- **Evidence-based reasoning:** All analytical judgments must be supported by cited, traceable evidence.
- **Hypothesis-driven analysis:** Competing hypotheses are considered before reaching conclusions.
- **Confidence calibration:** All analytical assessments include explicit confidence levels (see Section 4.4).
- **Peer review:** All finished intelligence products above tactical level are subject to peer review before dissemination.
- **Structured Analytic Techniques (SATs):** Where appropriate, analysts apply SATs such as Analysis of Competing Hypotheses (ACH), Red Team Analysis, and Key Assumptions Check.

### 7.2 Analysis Tools and Platforms

| Tool / Platform | Purpose | Owner | License Status |
|---|---|---|---|
| [Threat Intelligence Platform, e.g., MISP, OpenCTI, ThreatConnect] | Central intelligence repository, IOC management, correlation | [Team] | [Licensed / Open Source] |
| MITRE ATT&CK Navigator | TTP mapping and gap analysis | [Team] | Open Source |
| [Malware Sandbox, e.g., Cuckoo, ANY.RUN] | Dynamic malware analysis | [Team] | [Licensed / Open Source] |
| [OSINT Platform, e.g., Maltego, SpiderFoot] | OSINT investigation and entity relationship mapping | [Team] | [Licensed] |
| SIEM Platform ([Vendor/Product]) | Log correlation, threat detection | SOC | [Licensed] |
| [Vulnerability Scanner] | Vulnerability correlation with threat data | IT Security | [Licensed] |

### 7.3 Threat Actor Profiling

*For each tracked threat actor group relevant to the organization, a profile is maintained. Profiles are stored in [Platform/Location] and reviewed [frequency].*

Threat actor profiles maintained by [Organization Name] include the following standard structure:

| Field | Description |
|---|---|
| **Actor Name / Aliases** | Known names and aliases |
| **Classification** | Nation-state / Cybercriminal / Hacktivist / Insider |
| **Suspected Origin** | [Country/Region] |
| **Motivation** | Financial / Espionage / Disruption / Ideological |
| **Target Sectors** | Financial services, government, etc. |
| **Target Geography** | Malaysia, ASEAN, global |
| **Known TTPs** | MITRE ATT&CK techniques (linked to Navigator layer) |
| **Known Infrastructure** | C2 domains, IP ranges (where declassifiable) |
| **Associated Malware** | Known malware families used |
| **Recent Activity** | Summary of latest observed campaigns |
| **Confidence Level** | Admiralty Scale rating |
| **Last Updated** | [Date] |
| **Source References** | Citations for the above |

### 7.4 IOC Management

All Indicators of Compromise (IOCs) are managed according to the following lifecycle:

| Stage | Description | Responsibility |
|---|---|---|
| **Ingestion** | IOCs received from internal/external sources and loaded into the TIP | Intelligence Analyst |
| **Enrichment** | IOCs enriched with context (threat actor attribution, malware association, sector relevance) | Intelligence Analyst |
| **Validation** | IOCs assessed for confidence, currency, and false positive risk | Senior Intelligence Analyst |
| **Activation** | Validated IOCs pushed to defensive tools (SIEM, EDR, firewall, proxy) | SOC / Intelligence Analyst |
| **Monitoring** | Detection hits from activated IOCs reviewed and triaged | SOC |
| **Expiry / Retirement** | IOCs retired when no longer reliable or actionable; based on TTL policy | Intelligence Analyst |

**IOC Time-to-Live (TTL) Policy:**

| IOC Type | Default TTL | Extended TTL Condition |
|---|---|---|
| IP Address | 7 days | Active campaign confirmed: 30 days |
| Domain | 30 days | Active campaign confirmed: 90 days |
| URL | 14 days | Active campaign confirmed: 30 days |
| File Hash (MD5/SHA1/SHA256) | 180 days | Persistent malware family: 365 days |
| Email Address | 30 days | Active phishing campaign: 60 days |
| CVE / Vulnerability | Until patched or mitigated | N/A |

---

## 8. Dissemination

### 8.1 Dissemination Principles

*Define the principles and controls governing how intelligence is shared internally and externally.*

Intelligence dissemination at [Organization Name] is governed by the following principles:

- **Need-to-know:** Intelligence is shared only with stakeholders who require it to perform their duties.
- **Classification compliance:** Intelligence is disseminated in accordance with its TLP classification and [Organization Name]'s data classification scheme.
- **Timeliness:** Intelligence is disseminated within defined SLAs to ensure it retains operational value.
- **Actionability:** Intelligence products are tailored to the needs and technical level of the intended audience.
- **Legal compliance:** External sharing complies with applicable Malaysian law and any sharing agreements in place.

### 8.2 Internal Dissemination Matrix

| Intelligence Product | Primary Recipients | Secondary Recipients | Dissemination Channel | SLA |
|---|---|---|---|---|
| Threat Flash Report | SOC Lead, Incident Response Lead | CISO | Secure email, TIP platform | Within 2 hours of trigger |
| Weekly Threat Digest | SOC Team, IT Security Team | CISO | TIP platform, email | Every Monday by 09:00 |
| Monthly Threat Report | CISO, Security Management | CTO, Risk Committee | Secure email, document management system | By 5th of each month |
| Quarterly Strategic Assessment | Board / Executive Committee | [Relevant Committees] | Formal board pack, presentation | 10 days before scheduled meeting |
| Vulnerability Intelligence Advisory | IT Operations, Application Owners | CISO | Email, ITSM ticket | Within 4 hours of critical CVE; 24 hours for high |
| IOC Feed | SIEM, EDR, Firewall, Proxy (automated) | SOC | TIP platform API integration | Continuous / maximum 4-hour lag |
| Threat Actor Profile (updated) | Threat Hunting, IR Team | SOC Lead | TIP platform, secure email | Within 24 hours of material update |

### 8.3 External Dissemination

External sharing of intelligence is subject to the following controls:

| External Recipient | Sharing Basis | Approval Required | Data Restrictions | Frequency |
|---|---|---|---|---|
| BNM | Regulatory obligation / voluntary disclosure | CISO + Legal | As directed by BNM | As required |
| CyberSecurity Malaysia (MyCERT) | Information sharing agreement | CISO | TLP:GREEN or above | As required |
| FS-ISAC | Membership agreement | Threat Intelligence Lead | Per FS-ISAC sharing rules | As required |
| Peer Financial Institutions | Bilateral sharing agreement | CISO | TLP:AMBER or above, anonymized where required | As agreed |
| Law Enforcement (PDRM/CyberSecurity Unit) | Legal obligation / voluntary reporting | CISO + Legal | As directed by legal counsel | As required |

### 8.4 Traffic Light Protocol (TLP) Definitions

| TLP Color | Sharing Restriction | Description |
|---|---|---|
| **TLP:RED** | Not for disclosure, restricted to participants only | Cannot be shared with any parties outside the specific exchange |
| **TLP:AMBER** | Limited disclosure, restricted to the organization | May be shared within the organization and with clients/customers on a need-to-know basis |
| **TLP:AMBER+STRICT** | Limited disclosure, restricted to named recipients | Shared only with specific named organizations or individuals |
| **TLP:GREEN** | Limited disclosure, not for public release | May be shared with peer organizations and trusted communities |
| **TLP:WHITE** | Unlimited disclosure | Subject only to standard copyright rules |

---

## 9. Findings and Ratings

### 9.1 Intelligence Findings Framework

*Define how intelligence findings are captured, rated, and tracked. Findings represent significant threat intelligence discoveries that require action or awareness.*

Intelligence findings are formal assessments of specific threats, vulnerabilities, or adversary activities that have been analyzed and require stakeholder awareness or action. All findings are recorded in [Platform/System] and assigned a unique Finding ID.

### 9.2 Threat Rating Methodology

All intelligence findings are rated using the following two-dimensional matrix combining **Likelihood** and **Impact**:

**Likelihood Scale**

| Rating | Score | Definition |
|---|---|---|
| Almost Certain | 5 | Highly likely to occur; strong evidence of intent and capability |
| Likely | 4 | More likely than not to occur |
| Possible | 3 | May occur; balanced evidence |
| Unlikely | 2 | Less likely than not; limited evidence |
| Rare | 1 | Highly unlikely; minimal evidence |

**Impact Scale**

| Rating | Score | Definition |
|---|---|---|
| Catastrophic | 5 | Severe disruption to critical operations; systemic customer harm; regulatory sanction; reputational crisis |
| Major | 4 | Significant operational disruption; material financial loss; regulatory attention |
| Moderate | 3 | Contained disruption; recoverable financial loss; manageable regulatory impact |
| Minor | 2 | Limited impact; quickly recoverable; no regulatory escalation |
| Negligible | 1 | Minimal impact; no operational disruption |

**Threat Rating Matrix**

| | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Catastrophic (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | Medium | High | Critical | Critical | Critical |
| **Likely (4)** | Low | Medium | High | Critical | Critical |
| **Possible (3)** | Low | Medium | High | High | Critical |
| **Unlikely (2)** | Low | Low | Medium | High | High |
| **Rare (1)** | Low | Low | Low | Medium | High |

### 9.3 Finding Record Structure

Each intelligence finding is documented with the following structure:

| Field | Description |
|---|---|
| **Finding ID** | Unique identifier (e.g., TIF-2024-001) |
| **Title** | Concise description of the finding |
| **Date Identified** | Date the finding was first identified |
| **Threat Category** | Malware / APT / Vulnerability / Fraud / Insider / Other |
| **Likelihood Rating** | 1–5 with justification |
| **Impact Rating** | 1–5 with justification |
| **Overall Threat Rating** | Critical / High / Medium / Low |
| **Affected Assets / Systems** | Systems, platforms, or business units potentially affected |
| **MITRE ATT&CK Mapping** | Relevant techniques and tactics |
| **Evidence Summary** | Summary of supporting evidence |
| **Intelligence Confidence** | Admiralty Scale rating (Source Reliability + Information Credibility) |
| **Recommended Actions** | Specific mitigations or response actions required |
| **Assigned To** | Team or individual responsible for action |
| **Status** | Open / In Progress / Closed / Accepted Risk |
| **Closure Date** | Date the finding was resolved or accepted |
| **Review Date** | Next scheduled review date |

### 9.4 Current Findings Register

*This register is maintained as a living document and updated as new findings are identified or existing findings are resolved. The current register is maintained in [Platform/Location].*

| Finding ID | Title | Date | Category | Likelihood | Impact | Rating | Status | Owner | Due Date |
|---|---|---|---|---|---|---|---|---|---|
| TIF-[YYYY]-001 | [Finding Title] | [Date] | [Category] | [Score] | [Score] | [Rating] | [Status] | [Owner] | [Date] |
| TIF-[YYYY]-002 | [Finding Title] | [Date] | [Category] | [Score] | [Score] | [Rating] | [Status] | [Owner] | [Date] |
| TIF-[YYYY]-003 | [Finding Title] | [Date] | [Category] | [Score] | [Score] | [Rating] | [Status] | [Owner] | [Date] |

---

## 10. Evidence Reviewed

### 10.1 Evidence Management Framework

*Describe how evidence supporting intelligence findings is captured, stored, and maintained for audit and regulatory review purposes.*

All evidence supporting intelligence findings and program assessments is managed in accordance with [Organization Name]'s Evidence Management Policy. Evidence is stored in [Platform/Location] with access restricted to authorized personnel.

Evidence integrity is maintained through:

- Cryptographic hashing of digital evidence files at time of collection
- Chain of custody documentation for all significant evidence items
- Immutable audit logging of all access to and modifications of evidence records
- Retention in accordance with [Organization Name]'s Records Retention Schedule (minimum [X] years for regulatory compliance purposes)

### 10.2 Evidence Categories

| Evidence Category | Description | Examples | Storage Location |
|---|---|---|---|
| **Technical Artifacts** | Raw technical data supporting IOCs or TTPs | Malware samples, PCAP files, log extracts, memory dumps | [Secure repository / TIP platform] |
| **Source Intelligence Reports** | External intelligence reports and advisories | Vendor threat reports, ISAC bulletins, CERT advisories | [Document management system] |
| **Internal Analysis Records** | Analyst workpapers and intermediate analysis products | Analysis notes, ATT&CK Navigator layers, hypothesis worksheets | [Analyst workbench / TIP platform] |
| **Incident Correlation Records** | Links between intelligence findings and security incidents | Incident report extracts, SIEM alert exports | [ITSM / SIEM / document management] |
| **Stakeholder Communications** | Records of intelligence dissemination and feedback | Email records, briefing acknowledgments, feedback forms | [Document management system] |
| **Regulatory Communications** | Correspondence with BNM, MyCERT, or other authorities | BNM advisory notices, formal notifications | [Compliance records system] |

### 10.3 Evidence Review Log

*For each intelligence program assessment cycle, the following evidence items were reviewed:*

| Evidence ID | Evidence Description | Source | Date Obtained | Analyst | Relevance to Finding(s) | Integrity Hash (SHA-256) |
|---|---|---|---|---|---|---|
| EVD-[YYYY]-001 | [Description] | [Source] | [Date] | [Analyst Name] | [Finding ID(s)] | [Hash or "N/A"] |
| EVD-[YYYY]-002 | [Description] | [Source] | [Date] | [Analyst Name] | [Finding ID(s)] | [Hash or "N/A"] |
| EVD-[YYYY]-003 | [Description] | [Source] | [Date] | [Analyst Name] | [Finding ID(s)] | [Hash or "N/A"] |

---

## 11. Recommendations

### 11.1 Recommendations Framework

*Describe how recommendations are generated, prioritized, tracked, and validated. Recommendations are the primary mechanism through which the threat intelligence program drives defensive improvement.*

Recommendations arising from intelligence findings are formally tracked and managed to ensure that identified threats result in tangible defensive action. The Threat Intelligence Lead is responsible for issuing recommendations; implementation ownership rests with the relevant technical or business team.

### 11.2 Recommendation Priority Levels

| Priority | Timeframe for Initial Action | Basis |
|---|---|---|
| **Critical** | Immediate (within 24 hours) | Critical threat rating; active exploitation observed |
| **High** | Within 5 business days | High threat rating; exploitation likely |
| **Medium** | Within 30 days | Medium threat rating; exploitation possible |
| **Low** | Next scheduled review cycle | Low threat rating; good practice improvement |

### 11.3 Recommendations Register

*All recommendations are tracked in [Platform/Location]. The following register summarizes recommendations arising from the current assessment period.*

| Rec ID | Finding ID | Recommendation | Priority | Assigned To | Target Date | Status | Completion Date | Validation Evidence |
|---|---|---|---|---|---|---|---|---|
| REC-[YYYY]-001 | TIF-[YYYY]-001 | [Recommendation description] | [Priority] | [Team/Individual] | [Date] | [Status] | [Date or N/A] | [Evidence reference or N/A] |
| REC-[YYYY]-002 | TIF-[YYYY]-002 | [Recommendation description] | [Priority] | [Team/Individual] | [Date] | [Status] | [Date or N/A] | [Evidence reference or N/A] |
| REC-[YYYY]-003 | TIF-[YYYY]-003 | [Recommendation description] | [Priority] | [Team/Individual] | [Date] | [Status] | [Date or N/A] | [Evidence reference or N/A] |

### 11.4 Strategic Recommendations

*Beyond individual findings, the Threat Intelligence Lead may issue strategic recommendations to improve the overall posture of the intelligence program or the organization's cyber resilience.*

| Strategic Recommendation | Rationale | Priority | Owner | Target Date |
|---|---|---|---|---|
| [Strategic recommendation] | [Rationale] | [Priority] | [Owner] | [Date] |
| [Strategic recommendation] | [Rationale] | [Priority] | [Owner] | [Date] |

### 11.5 Recommendation Closure and Validation

A recommendation is considered closed only when:

1. The assigned owner formally confirms implementation is complete.
2. The Threat Intelligence team has independently validated the implementation (e.g., configuration review, test detection against relevant IOCs, re-scan).
3. Closure is documented in the Recommendations Register with evidence references.
4. The Threat Intelligence Lead has reviewed and approved the closure.

---

## 12. Roles and Responsibilities

### 12.1 RACI Matrix

*This RACI matrix defines the Responsible, Accountable, Consulted, and Informed roles for key activities within the Threat Intelligence Program.*

**Key:**
- **R** = Responsible (performs the work)
- **A** = Accountable (owns the outcome; final sign-off authority)
- **C** = Consulted (provides input; two-way communication)
- **I** = Informed (receives updates; one-way communication)

| Activity | Threat Intel Lead | Senior Intel Analyst | Intel Analyst | CISO | SOC Lead | IR Lead | IT Operations | Risk & Compliance | Executive / Board | Legal |
|---|---|---|---|---|---|---|---|---|---|---|
| Define PIRs | A | C | C | C | C | C | I | C | I | I |
| Approve PIRs | I | I | I | A | I | I | I | C | I | I |
| Manage intelligence source subscriptions | A | C | R | I | I | I | I | C | I | I |
| Collect intelligence from external sources | A | R | R | I | I | I | I | I | I | I |
| Collect intelligence from internal sources | C | I | I | I | A | R | R | I | I | I |
| Process and normalize raw intelligence | A | R | R | I | I | I | I | I | I | I |
| Conduct threat analysis | A | R | R | C | C | C | I | I | I | I |
| Produce intelligence reports | A | R | R | I | I | I | I | I | I | I |
| Review and approve intelligence products | A | C | I | C | I | I | I | I | I | I |
| Disseminate intelligence to stakeholders | A | R | R | I | I | I | I | I | I | I |
| Maintain threat actor profiles | A | R | R | I | C | C | I | I | I | I |
| Manage IOC lifecycle | A | R | R | I | C | I | I | I | I | I |
| Activate IOCs in defensive tools | C | I | R | I | A | I | R | I | I | I |
| Issue recommendations | A | C | I | C | C | C | I | I | I | I |
| Track recommendation implementation | A | R | R | I | C | C | C | I | I | I |
| Conduct program review | A | C | C | A | C | C | I | C | I | I |
| Report to Board / Executive | I | I | I | A | I | I | I | C | I | I |
| Manage external intelligence sharing | A | I | I | C | I | I | I | C | I | A |
| Regulatory reporting (BNM) | C | I | I | A | I | I | I | C | I | A |
| Program audit | C | C | C | A | C | C | C | A | I | I |

### 12.2 Role Descriptions

| Role | Responsibilities within the TIP |
|---|---|
| **Threat Intelligence Lead** | Overall accountability for the program; approves intelligence products; manages external relationships; reports to CISO; chairs PIR review sessions; ensures regulatory compliance |
| **Senior Intelligence Analyst** | Conducts complex analysis; produces finished intelligence products; peer-reviews analyst work; maintains threat actor profiles; mentors junior analysts |
| **Intelligence Analyst** | Day-to-day collection, processing, and analysis; manages IOC lifecycle; produces tactical intelligence products; maintains evidence records |
| **CISO** | Executive sponsor of the TIP; approves strategic direction and PIRs; receives and acts on intelligence briefings; accountable for regulatory reporting |
| **SOC Lead** | Primary consumer of tactical and operational intelligence; provides internal collection data; activates IOCs in defensive tools; provides feedback on intelligence utility |
| **Incident Response Lead** | Consumer of intelligence during active incidents; contributes post-incident findings to the intelligence cycle; coordinates on threat actor attribution |
| **IT Operations** | Consumer of vulnerability intelligence; implements technical recommendations; provides asset inventory data to support intelligence enrichment |
| **Risk & Compliance** | Ensures TIP aligns with risk management framework; uses strategic intelligence for risk assessments; ensures regulatory compliance |
| **Legal** | Advises on legal constraints for intelligence collection and sharing; approves external sharing arrangements; reviews regulatory disclosures |
| **Executive / Board** | Consumers of strategic intelligence; receive quarterly threat briefings; provide strategic direction via risk appetite |

---

## 13. Review and Approval

### 13.1 Program Review Schedule

The Threat Intelligence Program is subject to the following review cadence:

| Review Type | Frequency | Trigger Condition | Responsible | Approver |
|---|---|---|---|---|
| Full Program Review | Annual | Scheduled | Threat Intelligence Lead | CISO |
| PIR Review | Quarterly | Scheduled or upon significant change | Threat Intelligence Lead | CISO |
| Intelligence Source Review | Annual | Scheduled or upon source compromise/change | Threat Intelligence Lead | CISO |
| Post-Incident Program Review | As required | Significant cybersecurity incident | CISO | [Executive Sponsor] |
| Regulatory Review | As required | BNM regulatory examination or material change in requirements | CISO + Compliance | Board Risk Committee |
| Ad Hoc Review | As required | Significant change to threat landscape, organizational structure, or technology | Threat Intelligence Lead | CISO |

### 13.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 13.3 Approval Sign-Off

*This document requires formal approval from the following designated approvers before it becomes effective. By signing below, approvers confirm that they have reviewed the document and that its contents are accurate, complete, and compliant with organizational policy and regulatory requirements.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Threat Intelligence Lead | [Full Name] | __________________ | [Date] |
| Chief Information Security Officer | [Full Name] | __________________ | [Date] |
| Chief Risk Officer | [Full Name] | __________________ | [Date] |
| Chief Information Officer / CTO | [Full Name] | __________________ | [Date] |
| Head of Compliance | [Full Name] | __________________ | [Date] |
| [Additional Approver if required] | [Full Name] | __________________ | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Document Title | Issuing Authority | Clause(s) | URL / Access |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | 11.16 | [BNM Official Portal] |
| BNM RMiT | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | [Related Clause(s)] | [BNM Official Portal] |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | [Relevant Sections] | [Official Gazette] |
| NACSA CRP | Cyber Risk Profile Framework | National Cyber Security Agency | [Relevant Sections] | [NACSA Portal] |
| [Additional Reference] | [Title] | [Authority] | [Clause] | [Access] |

### 14.2 Industry Standards and Frameworks

| Reference | Title | Version | Relevance |
|---|---|---|---|
| MITRE ATT&CK | ATT&CK Framework for Enterprise | [Current Version] | Threat actor TTP mapping and analysis |
| STIX 2.1 | Structured Threat Information eXpression | 2.1 | Structured threat data exchange |
| TAXII 2.1 | Trusted Automated eXchange of Intelligence Information | 2.1 | Automated threat intelligence sharing protocol |
| TLP | Traffic Light Protocol | 2.0 | Intelligence dissemination classification |
| NIST SP 800-150 | Guide to Cyber Threat Information Sharing | [Edition] | Intelligence sharing best practices |
| ISO/IEC 27001 | Information Security Management | 2022 | Broader ISMS framework alignment |
| FIRST CVSSv3.1 | Common Vulnerability Scoring System | 3.1 | Vulnerability severity scoring |

### 14.3 Internal References

| Document ID | Document Title | Owner | Location |
|---|---|---|---|
| [DOC-001] | Information Security Policy | CISO | [Document management system path] |
| [DOC-002] | Cyber Incident Response Plan | IR Lead | [Document management system path] |
| [DOC-003] | Vulnerability Management Procedure | IT Security | [Document management system path] |
| [DOC-004] | Security Operations Center Runbooks | SOC Lead | [Document management system path] |
| [DOC-005] | Third-Party Risk Management Policy | Risk & Compliance | [Document management system path] |
| [DOC-006] | Data Classification and Handling Policy | CISO | [Document management system path] |
| [DOC-007] | Records Retention Schedule | Compliance | [Document management system path] |

---

## 15. Appendices

### Appendix A: Priority Intelligence Requirements (PIR) Template

*Use the following template when defining or revising Priority Intelligence Requirements.*

**PIR Reference:** PIR-[YYYY]-[NNN]
**Date Established:** [Date]
**Established By:** [Name and Role]
**Approved By:** [Name and Role]

| Field | Content |
|---|---|
| **PIR Statement** | [The specific intelligence question the program must answer] |
| **Stakeholder(s)** | [Who needs this intelligence and why] |
| **Decision Supported** | [What decision or action this intelligence will inform] |
| **Collection Indicators** | [Specific data points or signals that would answer this PIR] |
| **Reporting Format** | [Flash report / digest / full report / briefing] |
| **Reporting Cadence** | [Frequency or trigger condition for reporting] |
| **Priority Level** | [Critical / High / Medium / Low] |
| **Review Date** | [Scheduled next review] |

---

### Appendix B: Threat Flash Report Template

*Use this template for rapid dissemination of time-critical intelligence findings.*

---

**THREAT FLASH REPORT**

| Field | Details |
|---|---|
| **Report ID** | TFR-[YYYY]-[NNN] |
| **Classification** | Confidential – TLP:[COLOR] |
| **Date/Time Issued** | [DD/MM/YYYY HH:MM MYT] |
| **Issued By** | [Analyst Name], [Organization Name] Threat Intelligence |
| **Severity** | [Critical / High / Medium / Low] |
| **Subject** | [One-line description of the threat] |

**EXECUTIVE SUMMARY**

[2-3 sentence summary of the threat, who it affects, and the recommended immediate action.]

**THREAT DESCRIPTION**

[Detailed description of the threat, including affected systems, observed TTPs, and any known IOCs.]

**INDICATORS OF COMPROMISE (IOCs)**

| Type | Value | Confidence | TLP |
|---|---|---|---|
| IP Address | [x.x.x.x] | [High/Medium/Low] | [TLP] |
| Domain | [malicious.example] | [High/Medium/Low] | [TLP] |
| File Hash (SHA-256) | [hash] | [High/Medium/Low] | [TLP] |

**RECOMMENDED IMMEDIATE ACTIONS**

1. [Action 1]
2. [Action 2]
3. [Action 3]

**CONTACT:** [Threat Intelligence team contact details]

---

### Appendix C: Threat Actor Profile Template

*Use this template for documenting and maintaining threat actor profiles in [TIP Platform/Location].*

| Field | Content |
|---|---|
| **Profile ID** | TAP-[NNN] |
| **Actor Name** | [Primary name] |
| **Known Aliases** | [Alias 1], [Alias 2], [Alias 3] |
| **Classification** | [Nation-State / Cybercriminal / Hacktivist / Insider / Unknown] |
| **Suspected Origin** | [Country / Region] |
| **First Observed** | [Year] |
| **Last Active** | [Date] |
| **Motivation** | [Financial / Espionage / Disruption / Ideological] |
| **Capability Level** | [Low / Medium / High / Advanced] |
| **Target Sectors** | [List] |
| **Target Geography** | [List] |
| **Known TTPs (MITRE)** | [List of ATT&CK technique IDs] |
| **Known Tools & Malware** | [List] |
| **Known Infrastructure** | [C2 domains, IP ranges — declassify as appropriate] |
| **Notable Campaigns** | [Campaign names / references] |
| **Relevance to [Org Name]** | [Assessment of specific relevance] |
| **Recommended Detections** | [Detection rules, IOC types, hunting queries] |
| **Source Reliability** | [Admiralty Scale] |
| **Confidence Level** | [Admiralty Scale] |
| **Last Updated** | [Date] |
| **Analyst** | [Name] |
| **References** | [Source citations] |

---

### Appendix D: Intelligence Source Evaluation Criteria

*Use this checklist when evaluating new intelligence sources for inclusion in the collection plan.*

| Evaluation Criterion | Weight | Score (1-5) | Weighted Score | Notes |
|---|---|---|---|---|
| **Relevance** – Does the source provide intelligence relevant to Malaysian financial services threats? | 25% | | | |
| **Reliability** – Does the source have a track record of accurate, timely information? | 20% | | | |
| **Coverage** – Does the source cover gaps not addressed by existing sources? | 15% | | | |
| **Timeliness** – How quickly does the source publish new intelligence? | 15% | | | |
| **Actionability** – How actionable is the intelligence (e.g., IOCs, TTPs, mitigations)? | 15% | | | |
| **Legal / Compliance** – Is use of the source legally and regulatorily compliant? | 10% | | | |
| **Total Weighted Score** | 100% | | | |

**Decision Threshold:** Sources scoring below 3.0 overall should not be onboarded. Sources scoring 3.0–3.9 require CISO approval. Sources scoring 4.0 and above may be approved by the Threat Intelligence Lead.

---

### Appendix E: Glossary of Terms

| Term | Definition |
|---|---|
| **APT (Advanced Persistent Threat)** | A sophisticated, long-term cyberattack typically conducted by nation-state or well-resourced criminal actors, characterized by stealth and persistence. |
| **ATT&CK** | MITRE Adversarial Tactics, Techniques, and Common Knowledge framework — a knowledge base of adversary behavior. |
| **C2 (Command and Control)** | Infrastructure used by threat actors to communicate with compromised systems. |
| **CVE** | Common Vulnerabilities and Exposures — a standardized identifier for publicly known cybersecurity vulnerabilities. |
| **Diamond Model** | A framework for analyzing intrusion events by examining four features: adversary, infrastructure, capability, and victim. |
| **IOC (Indicator of Compromise)** | Observable evidence that a system may have been compromised (e.g., malicious IP address, domain, file hash). |
| **ISAC** | Information Sharing and Analysis Center — a sector-specific body for sharing cybersecurity threat intelligence. |
| **PIR** | Priority Intelligence Requirement — the key questions that drive intelligence collection and analysis. |
| **STIX** | Structured Threat Information eXpression — a standardized language for representing CTI. |
| **TAXII** | Trusted Automated eXchange of Intelligence Information — a protocol for exchanging CTI over HTTPS. |
| **TIP** | Threat Intelligence Platform — software used to aggregate, correlate, and manage threat intelligence. |
| **TLP** | Traffic Light Protocol — a classification scheme for controlling the sharing of sensitive information. |
| **TTP** | Tactics, Techniques, and Procedures — the behavior patterns and methods used by threat actors. |
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia. |
| **MyCERT** | Malaysia Computer Emergency Response Team, operated by CyberSecurity Malaysia. |
| **NACSA** | National Cyber Security Agency of Malaysia. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk for financial institutions. |
| **[Additional Term]** | [Definition] |

---

### Appendix F: Program Metrics and KPIs

*The following metrics are used to measure the effectiveness and maturity of the Threat Intelligence Program. Metrics are reported [monthly/quarterly] to [reporting audience].*

| Metric | Description | Target | Current | Trend | Reporting Frequency |
|---|---|---|---|---|---|
| **PIR Coverage Rate** | % of active PIRs addressed by at least one intelligence product in the period | ≥ 90% | [X%] | [↑/↓/→] | Monthly |
| **IOC Activation Timeliness** | % of validated IOCs activated in defensive tools within SLA | ≥ 95% | [X%] | [↑/↓/→] | Weekly |
| **Intelligence Report Timeliness** | % of intelligence products delivered within SLA | ≥ 95% | [X%] | [↑/↓/→] | Monthly |
| **Recommendation Closure Rate** | % of Critical and High recommendations closed within target timeframe | ≥ 85% | [X%] | [↑/↓/→] | Monthly |
| **Stakeholder Satisfaction Score** | Average stakeholder rating of intelligence utility (1–5 scale) | ≥ 4.0 | [X] | [↑/↓/→] | Quarterly |
| **False Positive Rate (IOCs)** | % of activated IOCs that generate false positive alerts | ≤ 5% | [X%] | [↑/↓/→] | Monthly |
| **Source Coverage Gap** | Number of PIRs with insufficient source coverage | 0 | [X] | [↑/↓/→] | Quarterly |
| **Mean Time to Produce (MTTP)** | Average time from intelligence collection to finished product dissemination | ≤ [X hours] | [X hours] | [↑/↓/→] | Monthly |
| **Threat Landscape Coverage Score** | % of active threat actor groups (relevant to sector) with maintained profiles | ≥ 80% | [X%] | [↑/↓/→] | Quarterly |
| **External Sharing Contributions** | Number of intelligence items shared with external communities (FS-ISAC, MyCERT) | ≥ [X] per quarter | [X] | [↑/↓/→] | Quarterly |

---

*End of Document*

---

*This document was prepared by [Author Name], [Role], [Organization Name]. For queries regarding this document, contact [Threat Intelligence Team Contact Details].*

*[Organization Name] | [Organization Address] | [Organization Contact]*