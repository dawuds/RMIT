# TLP Handling Procedures

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Threat Intelligence Lead |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Notice:** This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. Handle in accordance with the organization's information classification policy.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope and Applicability](#2-scope-and-applicability)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [TLP Framework Overview](#4-tlp-framework-overview)
5. [Step-by-Step Process Flow](#5-step-by-step-process-flow)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Tools and Systems Used](#7-tools-and-systems-used)
8. [Escalation Procedures](#8-escalation-procedures)
9. [Exceptions and Waivers](#9-exceptions-and-waivers)
10. [Compliance Monitoring and Audit](#10-compliance-monitoring-and-audit)
11. [Training and Awareness](#11-training-and-awareness)
12. [Review and Update History](#12-review-and-update-history)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*This section defines the intent and objective of the document. Describe why this procedure exists and what problem or regulatory obligation it addresses.*

This document establishes the formal procedures for handling shared threat intelligence at [Organization Name] in accordance with the Traffic Light Protocol (TLP). It defines how TLP-designated information is received, classified, processed, stored, shared, and disposed of to ensure that the confidentiality obligations attached to each TLP designation are consistently upheld across all threat intelligence activities.

The procedures contained herein are designed to:

- Protect the integrity and confidentiality of shared threat intelligence received from external parties, sector peers, and national cybersecurity bodies.
- Ensure [Organization Name] meets its obligations as a participant in formal and informal threat intelligence sharing communities.
- Support compliance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy, with specific reference to Clause 11.17 on threat intelligence and information sharing.
- Establish accountability and traceability for all TLP-designated information handled within the organization.

---

## 2. Scope and Applicability

*Define the boundaries of this procedure — which teams, systems, geographies, or information types are covered. Be explicit about what is out of scope to prevent ambiguity during audits.*

### 2.1 In Scope

This procedure applies to:

- All employees, contractors, consultants, and third-party service providers of [Organization Name] who receive, handle, process, or transmit threat intelligence information bearing a TLP designation.
- All threat intelligence received from or shared with the following sources:
  - Bank Negara Malaysia (BNM) and associated regulatory communications
  - National Cyber Security Agency (NACSA) and CyberSecurity Malaysia (CSM)
  - Financial Services Information Sharing and Analysis Center (FS-ISAC)
  - Association of Banks Malaysia (ABM) or Persatuan Bank-Bank Malaysia (PBBM)
  - Sector peers participating in bilateral or multilateral threat intelligence sharing arrangements
  - Managed Security Service Providers (MSSPs) and commercial threat intelligence vendors
  - INTERPOL, APNIC, and other international bodies where formal sharing agreements exist
- All communication channels used to transmit TLP-designated information, including but not limited to:
  - Email and secure email platforms
  - Threat intelligence platforms (TIPs)
  - Secure file transfer protocols
  - Encrypted messaging platforms approved by [Organization Name]
  - In-person briefings, workshops, and sector exercises

### 2.2 Out of Scope

The following are explicitly outside the scope of this procedure:

- Internally generated threat intelligence that has not been designated with a TLP label (refer to [Internal Threat Intelligence Classification Procedure]).
- Open-source intelligence (OSINT) that does not carry a TLP designation from the originating source.
- Customer data and personal data handling, which are governed by [Organization Name]'s Personal Data Protection Act (PDPA) 2010 Compliance Policy.
- Information security incident management and response procedures (refer to [Incident Response Plan]).

### 2.3 Applicability Matrix

| Business Unit / Function | Applicable? | Notes |
|---|---|---|
| Threat Intelligence Team | Yes | Primary owners and operators |
| Security Operations Centre (SOC) | Yes | Consumers and action takers |
| Information Security Management | Yes | Oversight and governance |
| Technology Risk Management | Yes | Policy alignment and reporting |
| Compliance and Legal | Yes | Regulatory obligations |
| IT Operations | Conditional | When operationalizing IOCs |
| Human Resources | No | Unless HR-specific social engineering campaigns are flagged |
| Business Units (General) | Conditional | When TLP:WHITE or TLP:GREEN content is disseminated |

---

## 3. Regulatory and Policy Context

*Summarize the specific regulatory obligations that make this procedure mandatory. Reference exact clause numbers and policy names. This section provides the auditable rationale for the document's existence.*

### 3.1 Regulatory Requirements

This procedure is established to comply with the following regulatory frameworks and obligations:

| Regulation / Framework | Clause / Section | Requirement Summary |
|---|---|---|
| BNM Risk Management in Technology (RMiT) Policy | Clause 11.17 | Financial institutions shall participate in threat intelligence sharing with relevant authorities and industry peers, and implement controls governing the receipt, handling, and dissemination of shared intelligence. |
| BNM RMiT Policy | Clause 11.1 – 11.5 | Establishment of a cybersecurity risk management framework, including threat monitoring and intelligence capabilities. |
| BNM RMiT Policy | Clause 11.14 | Security Operations Centre (SOC) capabilities shall include consumption and actioning of threat intelligence feeds. |
| Personal Data Protection Act (PDPA) 2010 | Section 5–7 (General Principles) | Where threat intelligence includes personal data, processing shall comply with PDPA General Principles. |
| NACSA National Cyber Security Policy | Principle 4 | Critical information infrastructure operators shall participate in national cyber threat information sharing programmes. |
| ISO/IEC 27001:2022 | Annex A 5.7 | Threat intelligence shall be collected and analyzed to produce actionable security awareness. |

### 3.2 Internal Policy Alignment

This procedure operates within and is governed by the following internal policies:

- [Organization Name] Information Security Policy (ISP) – Version [X.X]
- [Organization Name] Data Classification and Handling Policy – Version [X.X]
- [Organization Name] Third-Party and Vendor Risk Management Policy – Version [X.X]
- [Organization Name] Acceptable Use Policy – Version [X.X]
- [Organization Name] Incident Response Policy – Version [X.X]

---

## 4. TLP Framework Overview

*Provide a concise, authoritative description of the TLP standard as it applies within your organization. This serves as a reference baseline for all staff handling TLP-designated materials.*

### 4.1 What is TLP?

The Traffic Light Protocol (TLP) is a globally recognized standard developed by FIRST (Forum of Incident Response and Security Teams) for controlling the sharing and dissemination of sensitive information. TLP uses a color-coded system to communicate the intended audience and permissible distribution of shared information. All TLP labels presented in this document conform to **TLP Version 2.0** as published by FIRST.

### 4.2 TLP Designation Reference Table

| TLP Label | Color Code | Intended Audience | Permissible Sharing | Example Use Cases |
|---|---|---|---|---|
| **TLP:RED** | Red | Named recipients only (individuals or specific teams) | Not to be disclosed outside the named recipients | Highly sensitive, targeted threat actor TTPs; active exploitation details shared in closed briefings |
| **TLP:AMBER** | Amber | Organization-internal and clients/partners who need to know | Limited to the recipient organization; may be shared with clients/partners with a need to know | Vulnerabilities affecting specific product lines; sector-specific phishing campaigns |
| **TLP:AMBER+STRICT** | Amber + Strict | Organization-internal only | Must not be shared outside the recipient organization under any circumstances | Sensitive intelligence from law enforcement or regulatory bodies |
| **TLP:GREEN** | Green | Community-wide (sector, industry, ISAC members) | May be shared freely within the defined community but not publicly | General sector threat advisories; campaign indicators shared among ISAC members |
| **TLP:WHITE** | White | Unrestricted | No restrictions; may be shared publicly | Public threat advisories; published IOC feeds |
| **TLP:CLEAR** | Clear (equivalent to WHITE in TLP v2.0) | Unrestricted | No restrictions; may be shared publicly | Same as TLP:WHITE in legacy communications |

> **Note:** Where legacy communications use TLP:WHITE, treat as equivalent to TLP:CLEAR under TLP 2.0. Staff should apply TLP:WHITE handling procedures to both designations.

### 4.3 Organizational TLP Handling Hierarchy

*Illustrate how TLP designations map to your organization's internal access tiers. Customize the tier names and roles to match your organizational structure.*

```
TLP:RED       → Threat Intelligence Lead + Named Recipients only
TLP:AMBER+STRICT → Threat Intelligence Team + CISO
TLP:AMBER     → Threat Intelligence Team + SOC + Technology Risk + Compliance
TLP:GREEN     → All Information Security staff + designated Sector Participants
TLP:WHITE / TLP:CLEAR → All staff (as directed); external publication permitted
```

---

## 5. Step-by-Step Process Flow

*This section contains the core procedural content. Each sub-section maps to a specific operational phase in the TLP intelligence lifecycle. Authors should document specific tool names, system references, and named roles for each step.*

### 5.1 Process Overview

The TLP intelligence lifecycle at [Organization Name] consists of six phases:

| Phase | Name | Description |
|---|---|---|
| 1 | Receipt and Intake | Receiving TLP-designated intelligence from external sources |
| 2 | Triage and Classification Verification | Confirming the TLP designation and assessing relevance |
| 3 | Storage and Access Control | Ingesting intelligence into appropriate repositories with access controls |
| 4 | Dissemination and Sharing | Distributing intelligence to authorized internal and external recipients |
| 5 | Operationalization | Converting intelligence into actions, detections, or mitigations |
| 6 | Archival and Disposal | Retaining or securely disposing of intelligence per retention policy |

---

### 5.2 Phase 1 — Receipt and Intake

*Document every method by which TLP-designated intelligence enters the organization. Define accepted channels and reject unauthorized channels explicitly.*

#### 5.2.1 Authorized Intake Channels

TLP-designated threat intelligence may only be received through the following authorized channels:

| Channel | TLP Designations Accepted | System / Platform | Responsible Role |
|---|---|---|---|
| Secure email (PGP-encrypted) | TLP:RED, TLP:AMBER+STRICT, TLP:AMBER | [Secure email system, e.g., ProtonMail / S/MIME-enabled enterprise mail] | Threat Intelligence Lead |
| Threat Intelligence Platform (TIP) API Feed | TLP:AMBER, TLP:GREEN, TLP:WHITE | [TIP Name, e.g., MISP / OpenCTI / ThreatConnect] | Threat Intelligence Analyst |
| Secure portal / ISAC platform | TLP:AMBER, TLP:GREEN | [Portal Name, e.g., FS-ISAC portal / CyberSecurity Malaysia portal] | Threat Intelligence Analyst |
| Physical briefings (in-person or secure video) | TLP:RED | Meeting record logged in [Briefing Log System] | Threat Intelligence Lead |
| Encrypted messaging (approved platforms) | TLP:AMBER, TLP:GREEN | [Approved platform, e.g., Signal / Teams with E2E enabled] | Threat Intelligence Lead |

#### 5.2.2 Receipt Procedure

**Step 1.1 — Acknowledge Receipt**
Upon receiving TLP-designated intelligence, the recipient shall:
- Log the receipt in the Threat Intelligence Registry (see Appendix A for registry template).
- Record the following fields at minimum:

| Field | Description |
|---|---|
| Receipt Date and Time | [DD/MM/YYYY HH:MM (UTC+8)] |
| Source Organization | [Name of the originating organization or sharing community] |
| TLP Designation | [TLP:RED / TLP:AMBER+STRICT / TLP:AMBER / TLP:GREEN / TLP:WHITE] |
| Intake Channel | [Email / TIP / Portal / Physical Briefing] |
| Initial Subject Matter | [Brief description, one sentence] |
| Received By | [Name and designation of receiving staff member] |
| Unique Reference ID | [Auto-generated or manually assigned reference, e.g., TI-2026-0001] |

**Step 1.2 — Verify Source Authenticity**
- Confirm that the sending party is a recognized and authorized sharing partner per [Organization Name]'s approved sharing partner list (Appendix B).
- For TLP:RED and TLP:AMBER+STRICT content received via email, verify the sender's PGP signature or digital certificate before proceeding.
- If the source cannot be verified, quarantine the intelligence and escalate to the Threat Intelligence Lead within **2 business hours**.

**Step 1.3 — Reject Unauthorized Channels**
- If TLP-designated intelligence is received through an unauthorized channel (e.g., unencrypted personal email, public messaging app), do **not** forward or process the content.
- Notify the Threat Intelligence Lead and the originating source immediately.
- Document the incident in the Threat Intelligence Registry with status "Rejected — Unauthorized Channel."

---

### 5.3 Phase 2 — Triage and Classification Verification

*This phase ensures that the TLP designation assigned by the originator is acknowledged and that the intelligence is assessed for organizational relevance before resources are allocated.*

**Step 2.1 — Confirm TLP Designation**
- Review the TLP designation applied by the originator.
- Do not modify or downgrade the originator's TLP designation without explicit written authorization from the originator.
- If the TLP designation is ambiguous or missing from a document that otherwise warrants restricted handling, apply the most restrictive applicable designation and seek clarification from the source within **1 business day**.

**Step 2.2 — Relevance Assessment**
Assess the intelligence against the following criteria:

| Criteria | Assessment Questions |
|---|---|
| Sector Relevance | Does this threat target the Malaysian financial services sector or banking infrastructure? |
| Organizational Relevance | Does this threat target technologies, platforms, or vendors used by [Organization Name]? |
| Geographic Relevance | Is this threat active in Malaysia or the ASEAN region? |
| Temporal Relevance | Is this threat currently active, or is it historical/archival in nature? |
| Confidence Level | What confidence level has the originator assigned? (High / Medium / Low / Unknown) |

**Step 2.3 — Assign Priority**
Based on the relevance assessment, assign a handling priority:

| Priority | Criteria | Target Response Time |
|---|---|---|
| **Critical** | Imminent or active threat to [Organization Name] infrastructure | Immediate — within 1 hour |
| **High** | Active sector-wide threat with direct applicability | Within 4 business hours |
| **Medium** | Emerging threat with moderate applicability | Within 1 business day |
| **Low** | General awareness; low immediate applicability | Within 3 business days |
| **Informational** | Historical, archival, or TLP:WHITE content | As scheduled; no urgency |

---

### 5.4 Phase 3 — Storage and Access Control

*Define where each TLP designation is stored and who has access. Storage controls must enforce the sharing restrictions inherent in each TLP designation.*

**Step 3.1 — Ingest into Appropriate Repository**

| TLP Designation | Approved Storage Location | Access Control Requirement |
|---|---|---|
| TLP:RED | [Encrypted file store, e.g., VeraCrypt volume / HSM-backed secure enclave] | Named recipients only; access logged |
| TLP:AMBER+STRICT | [Threat Intelligence Platform — restricted compartment] | Threat Intelligence Team + CISO; MFA required |
| TLP:AMBER | [Threat Intelligence Platform — AMBER compartment] | Threat Intelligence Team + SOC + designated stakeholders |
| TLP:GREEN | [Threat Intelligence Platform — standard compartment] | All IS staff with TIP access |
| TLP:WHITE / TLP:CLEAR | [General knowledge base, e.g., Confluence / SharePoint] | All staff (read access) |

**Step 3.2 — Label and Tag**
- Apply the correct TLP label as a metadata tag in the TIP and in any associated documentation.
- Filename conventions for offline/exported documents shall follow the format:
  `[YYYY-MM-DD]_[TLP-DESIGNATION]_[Reference-ID]_[Brief-Subject].ext`
  Example: `2026-03-05_TLP-AMBER_TI-2026-0001_Phishing-Campaign-BankingTrojans.pdf`

**Step 3.3 — Apply Retention Rules**
Apply retention periods per the following schedule, unless directed otherwise by the originator:

| TLP Designation | Default Retention Period | Review Action at Expiry |
|---|---|---|
| TLP:RED | 12 months from receipt | Secure deletion unless extended by Threat Intelligence Lead |
| TLP:AMBER+STRICT | 24 months from receipt | Secure deletion unless extended by CISO |
| TLP:AMBER | 36 months from receipt | Archive or delete per scheduled review |
| TLP:GREEN | 36 months from receipt | Archive or delete per scheduled review |
| TLP:WHITE / TLP:CLEAR | As per general records retention policy | Standard archival |

---

### 5.5 Phase 4 — Dissemination and Sharing

*This is the highest-risk phase for TLP compliance. Unauthorized dissemination can constitute a breach of sharing agreements, damage sector relationships, and trigger regulatory consequences. Enforce strictly.*

**Step 4.1 — Pre-Dissemination Authorization**
Before sharing any TLP-designated intelligence, the disseminating staff member must:
1. Confirm that the intended recipient(s) fall within the TLP designation's permissible audience (refer to Section 4.2).
2. For TLP:RED: Obtain explicit written authorization from the Threat Intelligence Lead and confirm named recipient status.
3. For TLP:AMBER+STRICT: Obtain explicit written authorization from the Threat Intelligence Lead.
4. For TLP:AMBER: Confirm recipient is within [Organization Name] or is a named client/partner with a documented need-to-know.
5. For TLP:GREEN: Confirm recipient is within the defined community (sector, ISAC membership).
6. For TLP:WHITE / TLP:CLEAR: No authorization required.

**Step 4.2 — Internal Dissemination Procedure**

| TLP Designation | Permissible Internal Recipients | Approved Communication Method |
|---|---|---|
| TLP:RED | Named individuals only (as specified by originator) | Encrypted email (PGP) or in-person briefing; no digital copies unless essential |
| TLP:AMBER+STRICT | Threat Intelligence Team; CISO; specific named individuals | TIP secure share; encrypted email |
| TLP:AMBER | Threat Intelligence Team; SOC analysts; Technology Risk; Compliance; IT Operations (as needed) | TIP; encrypted email; secure internal portal |
| TLP:GREEN | All IS staff; designated business unit leads (with briefing) | TIP; internal email; intranet knowledge base |
| TLP:WHITE / TLP:CLEAR | All staff | Email; intranet; public channels as appropriate |

**Step 4.3 — External Dissemination Procedure**
External sharing of TLP-designated intelligence is only permissible under the following conditions:

- The external recipient is listed in [Organization Name]'s Approved Sharing Partners Register (Appendix B).
- A valid information sharing agreement (ISA) or memorandum of understanding (MOU) is in place and current.
- The TLP designation permits the intended audience (see Section 4.2).
- The Threat Intelligence Lead has authorized the specific sharing event in writing.
- The TLP label is preserved on all shared materials without modification.

**Step 4.4 — TLP Label Preservation**
- The originator's TLP designation must be reproduced on all copies, derivatives, and extracts of the intelligence.
- When creating derivative products (e.g., internal briefing slides, detection rules, reports), if the source material is TLP:AMBER, the derivative product must carry at minimum TLP:AMBER unless the originator explicitly permits downgrading.
- Stripping or modifying TLP labels without originator consent is a policy violation and must be reported to the Threat Intelligence Lead immediately.

---

### 5.6 Phase 5 — Operationalization

*Define how intelligence is converted from raw data into defensive actions. This phase links threat intelligence to concrete security outcomes and demonstrates value to regulators.*

**Step 5.1 — Intelligence-to-Action Mapping**
Following triage and classification, the Threat Intelligence Analyst shall translate applicable intelligence into one or more of the following operational outputs:

| Output Type | Description | Responsible Team | Platform / System |
|---|---|---|---|
| Indicator of Compromise (IOC) | IP addresses, domain names, file hashes, URLs for blocking or monitoring | SOC / Threat Intelligence | [SIEM Name, e.g., Wazuh / Splunk / Microsoft Sentinel] |
| Detection Rule | SIGMA / YARA / SNORT rule created from TTPs | SOC Engineer | [SIEM / EDR / IDS platform] |
| Threat Advisory | Internal advisory document for technology teams | Threat Intelligence Analyst | [Internal portal / email distribution] |
| Vulnerability Alert | CVE or product-specific advisory for patching | IT Operations / Patch Management | [ITSM / Patch Management Platform] |
| Tabletop / Exercise Scenario | Threat scenario developed from intelligence for use in DR/BCP exercises | Technology Risk / BC&DR Team | [Exercise management platform] |
| Regulatory Notification | Escalation to BNM, NACSA, or law enforcement | CISO / Compliance | As per regulatory notification procedures |

**Step 5.2 — IOC Deployment Procedure**
1. Threat Intelligence Analyst creates a change ticket in [ITSM Platform] referencing the TLP Reference ID.
2. IOCs are reviewed and approved by the SOC Lead before deployment.
3. SOC Engineer deploys IOCs to applicable detection/blocking platforms.
4. Deployment is confirmed and recorded in the Threat Intelligence Registry.
5. IOC effectiveness is reviewed after [30 / 60 / 90] days and stale indicators are retired.

**Step 5.3 — Feedback Loop**
- SOC analysts are required to provide feedback to the Threat Intelligence Team when IOCs generate confirmed alerts, false positives, or no detections after a review period.
- Feedback shall be recorded in the TIP to improve future prioritization and source reliability scoring.

---

### 5.7 Phase 6 — Archival and Disposal

*Secure disposal is as important as secure handling. Define what happens to TLP-designated materials at end of life, and how disposal is evidenced for audit purposes.*

**Step 6.1 — Archival**
- Intelligence that has passed its active relevance period but is within the retention period shall be moved to the archival compartment in the TIP or designated secure archive storage.
- Access to archived TLP:RED and TLP:AMBER+STRICT content remains restricted to the original authorized audience.

**Step 6.2 — Secure Disposal**
Upon reaching the end of the defined retention period, TLP-designated intelligence shall be disposed of as follows:

| Storage Medium | Disposal Method | Evidence Required |
|---|---|---|
| Digital files in TIP | Cryptographic deletion / secure wipe per platform procedure | System deletion log exported and retained for 3 years |
| Encrypted file store / offline storage | Secure deletion using [approved tool, e.g., BleachBit / DBAN] | Disposal certificate signed by Threat Intelligence Lead |
| Printed documents | Cross-cut shredding using minimum DIN 66399 Level P-4 shredder | Destruction log entry with date, staff member, and item description |
| Removable media (USB, encrypted drives) | Physical destruction or degaussing by authorized vendor | Vendor destruction certificate |

**Step 6.3 — Disposal Authorization**
All disposal of TLP:RED and TLP:AMBER+STRICT materials requires written authorization from the Threat Intelligence Lead and shall be witnessed by a second authorized staff member.

---

## 6. Roles and Responsibilities

*This section defines who is accountable for each key activity in the TLP handling lifecycle. The RACI model assigns one of four responsibility types: Responsible (R), Accountable (A), Consulted (C), or Informed (I).*

### 6.1 Role Definitions

| Role | Definition |
|---|---|
| **Chief Information Security Officer (CISO)** | Senior executive accountable for overall cybersecurity posture and regulatory compliance |
| **Threat Intelligence Lead** | [Organization Name] function head for all threat intelligence activities; primary owner of this procedure |
| **Threat Intelligence Analyst** | Operational staff responsible for day-to-day intelligence intake, triage, and dissemination |
| **SOC Lead** | Head of the Security Operations Centre; responsible for operationalizing intelligence into detections |
| **SOC Analyst** | SOC operational staff responsible for monitoring, detection, and IOC deployment |
| **Technology Risk Manager** | Responsible for technology risk reporting, including intelligence-driven risk assessments |
| **Compliance Officer** | Responsible for ensuring adherence to regulatory requirements including BNM RMiT |
| **IT Operations Lead** | Responsible for infrastructure-level implementation of mitigations derived from intelligence |
| **Legal Counsel** | Advises on information sharing agreements and regulatory disclosure obligations |
| **Business Unit Heads** | Senior management of individual business units; recipients of TLP:GREEN and TLP:WHITE advisories as relevant |

### 6.2 RACI Matrix

*R = Responsible, A = Accountable, C = Consulted, I = Informed. Only one A per activity row.*

| Activity | CISO | TI Lead | TI Analyst | SOC Lead | SOC Analyst | Tech Risk Mgr | Compliance Officer | IT Ops Lead | Legal Counsel |
|---|---|---|---|---|---|---|---|---|---|
| **Receipt and Intake** | I | A | R | I | — | — | I | — | — |
| **Source Authentication** | — | A | R | — | — | — | — | — | — |
| **Triage and Relevance Assessment** | I | A | R | C | — | C | — | — | — |
| **Priority Assignment** | I | A | R | C | — | — | — | — | — |
| **Storage and Access Control Setup** | — | A | R | C | — | — | — | C | — |
| **TLP Label Preservation** | — | A | R | R | R | — | — | — | — |
| **Internal Dissemination Authorization** | C | A | R | I | — | I | I | I | — |
| **External Dissemination Authorization (TLP:AMBER and above)** | C | A | R | — | — | — | C | — | C |
| **IOC Creation and Deployment** | — | A | R | R | R | — | — | C | — |
| **Detection Rule Development** | — | I | C | A | R | — | — | — | — |
| **Threat Advisory Production** | I | A | R | C | — | C | C | I | — |
| **Regulatory Notification** | A | R | C | — | — | C | R | — | C |
| **Archival** | — | A | R | — | — | — | — | — | — |
| **Secure Disposal Authorization** | C | A | R | — | — | — | — | — | — |
| **Policy and Procedure Review** | A | R | C | C | — | C | C | — | — |
| **Staff Training and Awareness** | I | A | R | I | I | I | I | I | — |
| **Sharing Partner Agreement Management** | C | C | — | — | — | — | A | — | R |
| **Compliance Monitoring and Reporting** | I | C | — | — | — | C | A | — | — |

---

## 7. Tools and Systems Used

*List all technology platforms, systems, and tools used in the execution of these procedures. Include system names, vendors, primary use, and access controls. This section supports audit traceability.*

### 7.1 Primary Technology Platforms

| System / Tool | Vendor / Type | Primary Function in TLP Handling | TLP Designations Handled | Access Control |
|---|---|---|---|---|
| [Threat Intelligence Platform (TIP) Name, e.g., MISP / OpenCTI / ThreatConnect] | [Vendor Name] | Central repository for all TLP-designated intelligence; IOC management; sharing workflows | TLP:AMBER+STRICT, TLP:AMBER, TLP:GREEN, TLP:WHITE | Role-based access; MFA required; compartments by TLP level |
| [SIEM Platform Name, e.g., Wazuh / Splunk / Microsoft Sentinel] | [Vendor Name] | Operationalization of IOCs and detection rules | TLP:AMBER, TLP:GREEN | SOC team access; restricted write permissions |
| [Secure Email Platform, e.g., Enterprise S/MIME / ProtonMail Business] | [Vendor Name] | Receipt of TLP:RED and TLP:AMBER+STRICT intelligence | TLP:RED, TLP:AMBER+STRICT | Named recipients; PGP or certificate-based encryption |
| [Encrypted File Storage, e.g., VeraCrypt / SharePoint with IRM / Azure Information Protection] | [Vendor Name] | Secure storage of TLP:RED materials | TLP:RED | Named recipient access; audit logging enabled |
| [ITSM Platform, e.g., ServiceNow / Jira Service Management] | [Vendor Name] | Change tickets for IOC deployment; audit trails | Reference only | IS staff access |
| [Internal Knowledge Base, e.g., Confluence / SharePoint Intranet] | [Vendor Name] | Publication of TLP:GREEN and TLP:WHITE advisories | TLP:GREEN, TLP:WHITE | Authenticated intranet users |
| [Encrypted Messaging Platform, e.g., Signal / Microsoft Teams with E2E] | [Vendor Name] | Secure communication for TLP:AMBER sharing with sector peers | TLP:AMBER, TLP:GREEN | Authorized TI team members only |
| [Sector Portal, e.g., FS-ISAC / CyberSecurity Malaysia eCybersecurity] | External platform | Receipt of sector intelligence | TLP:AMBER, TLP:GREEN | Named organizational account; managed by TI Lead |

### 7.2 Tool Access Review Schedule

- Access rights to all TLP-designated systems shall be reviewed on a **semi-annual basis** by the Threat Intelligence Lead in coordination with IT Operations.
- Joiners, movers, and leavers (JML) processes must trigger an immediate access review for all TLP-related systems.
- Access review records shall be retained for a minimum of **3 years** and made available to internal audit and regulatory examiners upon request.

### 7.3 System Integration and Automation

*Describe any automated integrations, such as STIX/TAXII feeds, API-based IOC ingestion, or automated playbooks. Document the automation logic briefly and identify who is responsible for maintaining it.*

| Integration | Source → Destination | Protocol / Format | Frequency | Responsible Role |
|---|---|---|---|---|
| [e.g., FS-ISAC TAXII Feed → TIP] | FS-ISAC → [TIP Name] | TAXII 2.1 / STIX 2.1 | Every [X] hours | Threat Intelligence Analyst |
| [e.g., CyberSecurity Malaysia Feed → SIEM] | CSM Portal → [SIEM Name] | [API / CSV / STIX] | Daily | SOC Engineer |
| [e.g., TIP IOC Export → SIEM] | [TIP Name] → [SIEM Name] | STIX / CEF / Custom API | Real-time / Scheduled | SOC Lead |
| [e.g., TIP → Firewall / Proxy Blocklist] | [TIP Name] → [Firewall/Proxy Name] | API / STIX | [Scheduled frequency] | IT Operations Lead |

---

## 8. Escalation Procedures

*Define clear escalation paths for situations requiring elevated authority or urgent response. Ambiguity in escalation paths leads to delayed responses during incidents.*

### 8.1 Escalation Triggers

The following situations require immediate escalation beyond standard handling procedures:

| Trigger | Initial Escalation Point | Secondary Escalation (if unresolved in SLA) | Target Response SLA |
|---|---|---|---|
| TLP:RED intelligence received indicating imminent active threat to [Organization Name] | Threat Intelligence Lead | CISO | 30 minutes |
| TLP:AMBER+STRICT intelligence received from BNM or NACSA requiring regulatory action | Threat Intelligence Lead + Compliance Officer | CISO + Legal Counsel | 2 hours |
| Suspected unauthorized disclosure or leakage of TLP:RED or TLP:AMBER+STRICT material | Threat Intelligence Lead | CISO + Compliance Officer + Legal Counsel | 1 hour |
| Receipt of intelligence through unauthorized channel | Threat Intelligence Lead | CISO | 2 business hours |
| Source authentication failure for high-priority intelligence | Threat Intelligence Lead | CISO | 2 business hours |
| Intelligence indicating active exploitation of [Organization Name] infrastructure | Threat Intelligence Lead + SOC Lead | CISO + Incident Response Team (IRT) | Immediate — trigger IRP |
| Request from BNM, NACSA, or law enforcement for intelligence sharing or disclosure | Compliance Officer + Legal Counsel | CISO + Board Risk Committee (as applicable) | As directed by authority; default 24 hours |
| Intelligence sharing partner reports a breach of TLP handling obligations by [Organization Name] | Threat Intelligence Lead | CISO + Legal Counsel + Compliance Officer | 4 hours |

### 8.2 Escalation Contact Directory

*Maintain this directory separately in a secure, access-controlled document and reference it here. Do not embed personal contact details in documents with wide distribution.*

| Role | Contact Reference |
|---|---|
| Threat Intelligence Lead | Refer to [Organization Name] On-Call Directory — [Reference ID] |
| CISO | Refer to [Organization Name] On-Call Directory — [Reference ID] |
| Compliance Officer | Refer to [Organization Name] On-Call Directory — [Reference ID] |
| Legal Counsel (Internal) | Refer to [Organization Name] On-Call Directory — [Reference ID] |
| Legal Counsel (External) | Refer to [Organization Name] Retained Legal Panel — [Reference ID] |
| SOC Lead (24/7) | Refer to [Organization Name] SOC Contact Sheet — [Reference ID] |
| BNM Supervisory Hotline | Refer to regulatory contact register maintained by Compliance |
| NACSA Incident Reporting | Refer to regulatory contact register maintained by Compliance |

### 8.3 Regulatory Escalation and Notification

Where TLP-designated intelligence indicates a cybersecurity incident or threat that meets BNM's reportable incident thresholds (as defined in BNM RMiT Clause 11.6 and related BNM guidance), the Compliance Officer shall initiate the regulatory notification process in accordance with [Organization Name]'s Regulatory Incident Reporting Procedure ([Document Reference]).

- Initial notification to BNM shall occur within the timeframe prescribed in current BNM guidelines.
- All regulatory communications related to TLP-designated intelligence shall be coordinated between the Threat Intelligence Lead, CISO, Compliance Officer, and Legal Counsel.
- A record of all regulatory notifications made in connection with TLP-designated intelligence shall be maintained by the Compliance function.

---

## 9. Exceptions and Waivers

*Define the process for managing requests to deviate from standard TLP handling procedures. All exceptions must be documented to maintain audit integrity.*

### 9.1 Exception Request Process

Requests to deviate from any requirement in this procedure shall follow the process below:

1. The requesting staff member documents the specific deviation required, the business justification, and the proposed risk mitigation measures using the Exception Request Form (Appendix C).
2. The request is submitted to the Threat Intelligence Lead for initial review.
3. The Threat Intelligence Lead assesses the risk impact and either approves, rejects, or escalates the request.
4. Exceptions involving TLP:RED or TLP:AMBER+STRICT content require CISO approval.
5. Exceptions that may affect regulatory obligations require Compliance Officer and Legal Counsel review.
6. Approved exceptions are time-limited (maximum duration: [90 days / as specified]) and subject to review at expiry.

### 9.2 Exception Register

All approved exceptions are logged in the TLP Exception Register, maintained by the Threat Intelligence Lead:

| Exception ID | Date Raised | Requesting Staff | Description of Deviation | Risk Mitigation Applied | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| EX-TLP-[YYYY]-[NNN] | [DD/MM/YYYY] | [Name] | [Description] | [Mitigating controls] | [Approver Name and Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Active / Expired / Revoked] |

---

## 10. Compliance Monitoring and Audit

*Define how adherence to these procedures is monitored, measured, and reported internally and to regulators.*

### 10.1 Key Compliance Indicators

The Threat Intelligence Lead shall monitor and report on the following compliance indicators on a **quarterly basis** to the CISO and Technology Risk Management:

| Indicator | Description | Target | Measurement Source |
|---|---|---|---|
| TLP Intake Compliance Rate | Percentage of TLP intelligence received through authorized channels | 100% | Threat Intelligence Registry |
| TLP Label Preservation Rate | Percentage of derivative products correctly carrying source TLP label | 100% | TIP audit log |
| Unauthorized Disclosure Incidents | Number of confirmed TLP handling violations in the period | 0 | Incident register |
| IOC Deployment Timeliness | Percentage of high/critical IOCs deployed within defined SLA | ≥ 95% | ITSM change log |
| Access Review Completion | Percentage of scheduled TLP system access reviews completed on time | 100% | IT access management records |
| Staff Training Completion | Percentage of TLP-handling staff completing annual awareness training | 100% | HR/LMS records |
| Exception Register Currency | Number of open exceptions beyond approved expiry date | 0 | Exception register |

### 10.2 Internal Audit

- Internal Audit shall include a review of TLP handling procedures and compliance evidence in the annual information security audit programme.
- Evidence requested by Internal Audit may include: Threat Intelligence Registry extracts, TIP audit logs, access review records, training completion records, and exception register.
- Audit findings shall be reported to the Audit Committee and tracked to remediation.

### 10.3 Regulatory Examination Readiness

- The Compliance Officer shall maintain a readiness package for BNM technology risk examinations, including evidence of TLP handling compliance.
- The readiness package shall include: this procedure document, Threat Intelligence Registry summary, access review records for the prior 12 months, training records, and any exception approvals.

---

## 11. Training and Awareness

*Ensure that all staff handling TLP-designated materials understand their obligations. Ignorance of TLP requirements does not constitute an acceptable defence in a regulatory examination or breach investigation.*

### 11.1 Training Requirements

| Role | Training Required | Frequency | Minimum Duration | Delivery Method |
|---|---|---|---|---|
| Threat Intelligence Lead | Advanced TLP handling; regulatory obligations; information sharing agreements | Annual | [X hours] | [In-person / eLearning / Workshop] |
| Threat Intelligence Analyst | TLP framework; intake procedures; dissemination controls; operationalization | Annual + upon new joining | [X hours] | [In-person / eLearning] |
| SOC Analysts | TLP awareness; IOC handling; escalation triggers | Annual | [X hours] | [eLearning / Briefing] |
| CISO and Technology Risk | TLP governance; regulatory escalation; exception authority | Annual | [X hours] | [Briefing / Workshop] |
| Compliance Officer | Regulatory implications of TLP; notification obligations | Annual | [X hours] | [Briefing] |
| All IS Staff | TLP awareness (general); recognizing and reporting TLP-labeled materials | Annual | [X hours] | [eLearning] |

### 11.2 Training Records

- Training completion records shall be maintained by [HR / Learning Management System (LMS)].
- The Threat Intelligence Lead shall verify training compliance for all TLP-handling staff prior to granting or renewing access to TLP-restricted systems.
- Training records are subject to review by Internal Audit and BNM examiners.

---

## 12. Review and Update History

*Maintain a complete version history of this document. Each version entry should be sufficient to explain what changed and why, without requiring access to previous versions.*

### 12.1 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Designation] | Initial release | [Approver Name, Designation] |
| [1.1] | [DD/MM/YYYY] | [Author Name, Designation] | [Brief description of changes, e.g., "Updated TLP:WHITE to TLP:CLEAR per FIRST TLP v2.0; revised Section 5.2 intake channels to add secure portal"] | [Approver Name, Designation] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Designation] | [Major revision description] | [Approver Name, Designation] |

### 12.2 Scheduled Review Cycle

| Review Trigger | Action Required | Responsible Party |
|---|---|---|
| Annual scheduled review | Full procedure review; update as necessary; re-approve | Threat Intelligence Lead |
| BNM RMiT policy update or new regulatory guidance | Review affected sections within 30 days of regulatory update | Threat Intelligence Lead + Compliance Officer |
| Material change to TIP or key technology platform | Review Sections 5, 7, and Appendix A within 14 days of change | Threat Intelligence Lead |
| Confirmed TLP handling violation | Immediate review of relevant procedure sections; corrective actions documented | Threat Intelligence Lead + CISO |
| New significant information sharing partnership established | Review Sections 5.4 and 5.5; update Appendix B | Threat Intelligence Lead + Legal Counsel |
| FIRST TLP framework version update | Review TLP classification table (Section 4.2) and all references | Threat Intelligence Lead |

---

## 13. Review and Approval

### 13.1 Current Version Approval Sign-Off

*All approvers must sign and date this table to indicate formal approval of this version of the document.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner (Threat Intelligence Lead) | [Full Name] | _________________________ | [DD/MM/YYYY] |
| Reviewed By (CISO) | [Full Name] | _________________________ | [DD/MM/YYYY] |
| Reviewed By (Technology Risk Manager) | [Full Name] | _________________________ | [DD/MM/YYYY] |
| Reviewed By (Compliance Officer) | [Full Name] | _________________________ | [DD/MM/YYYY] |
| Approved By ([Approving Authority, e.g., CTO / Board Risk Committee]) | [Full Name] | _________________________ | [DD/MM/YYYY] |

### 13.2 Distribution List

*Record who has received a copy of the current approved version.*

| Name | Role | Distribution Date | Version |
|---|---|---|---|
| [Name] | CISO | [DD/MM/YYYY] | 1.0 |
| [Name] | Threat Intelligence Lead | [DD/MM/YYYY] | 1.0 |
| [Name] | SOC Lead | [DD/MM/YYYY] | 1.0 |
| [Name] | Technology Risk Manager | [DD/MM/YYYY] | 1.0 |
| [Name] | Compliance Officer | [DD/MM/YYYY] | 1.0 |
| [Name] | Head of IT Operations | [DD/MM/YYYY] | 1.0 |
| [Name] | Internal Audit | [DD/MM/YYYY] | 1.0 |

---

## 14. References

*This section provides an authoritative list of all regulatory, standards, and internal documents referenced by this procedure.*

### 14.1 Regulatory References

| Reference | Title | Issuing Body | Relevant Clause(s) |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy | Bank Negara Malaysia | Clause 11.17 (Threat Intelligence and Information Sharing); Clause 11.1–11.5 (Cybersecurity Risk Management Framework); Clause 11.6 (Incident Reporting); Clause 11.14 (SOC Requirements) |
| PDPA 2010 | Personal Data Protection Act 2010 | Parliament of Malaysia | Sections 5–7 (General Principles) |
| NACSA NCSP | National Cyber Security Policy | National Cyber Security Agency (NACSA) | Principle 4 (CII Information Sharing) |
| CMA 1998 | Communications and Multimedia Act 1998 | Parliament of Malaysia | Section 234 (disclosure of communications) |
| FSA 2013 | Financial Services Act 2013 | Parliament of Malaysia | General obligations on licensed financial institutions |

### 14.2 Standards References

| Standard | Title | Issuing Body | Relevant Section(s) |
|---|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | ISO/IEC | Annex A 5.7 (Threat Intelligence) |
| ISO/IEC 27002:2022 | Information Security Controls | ISO/IEC | Control 5.7 (Threat Intelligence) |
| NIST SP 800-150 | Guide to Cyber Threat Information Sharing | NIST | Sections 2–5 |
| STIX 2.1 | Structured Threat Information Expression | OASIS / FIRST | All |
| TAXII 2.1 | Trusted Automated eXchange of Intelligence Information | OASIS / FIRST | All |
| TLP v2.0 | Traffic Light Protocol Version 2.0 | FIRST | All designations |
| MITRE ATT&CK | Adversarial Tactics, Techniques, and Common Knowledge | MITRE Corporation | Framework reference for TTP classification |

### 14.3 Internal Document References

| Document Title | Document ID | Version | Owner |
|---|---|---|---|
| Information Security Policy | [Document ID] | [X.X] | CISO |
| Data Classification and Handling Policy | [Document ID] | [X.X] | CISO |
| Incident Response Plan | [Document ID] | [X.X] | Threat Intelligence Lead / SOC Lead |
| Third-Party and Vendor Risk Management Policy | [Document ID] | [X.X] | Technology Risk Manager |
| Acceptable Use Policy | [Document ID] | [X.X] | CISO |
| Regulatory Incident Reporting Procedure | [Document ID] | [X.X] | Compliance Officer |
| Business Continuity and Disaster Recovery Plan | [Document ID] | [X.X] | BC&DR Lead |
| Information Sharing Agreement Template | [Document ID] | [X.X] | Legal Counsel |

---

## 15. Appendices

### Appendix A — Threat Intelligence Registry Template

*This registry is the master log for all TLP-designated intelligence received by [Organization Name]. It must be maintained in [designated secure system] and updated within [X hours] of each intake event.*

| Field | Description |
|---|---|
| **Reference ID** | Unique identifier (format: TI-[YYYY]-[NNN]) |
| **Receipt Date/Time** | DD/MM/YYYY HH:MM UTC+8 |
| **Source Organization** | Name of originating organization or community |
| **Sharing Channel** | Intake channel used (Secure Email / TIP Feed / Portal / Physical Briefing) |
| **TLP Designation** | TLP:RED / TLP:AMBER+STRICT / TLP:AMBER / TLP:GREEN / TLP:WHITE |
| **Subject / Title** | Brief description (one sentence) |
| **Threat Type** | [Malware / Phishing / Ransomware / APT / Vulnerability / DDoS / Insider / Other] |
| **Priority Assigned** | Critical / High / Medium / Low / Informational |
| **Received By** | Name and designation of staff member |
| **Relevance Assessment** | Relevant / Partially Relevant / Not Relevant |
| **Assigned To** | Name of analyst assigned for action |
| **Operational Outputs** | List of derivative actions created (IOC IDs, advisory references, rule IDs) |
| **Dissemination Log** | Record of all internal and external sharing events |
| **Storage Location** | System and compartment where intelligence is stored |
| **Disposal Date** | Date intelligence was archived or deleted |
| **Notes** | Any additional handling notes or flags |

---

### Appendix B — Approved Sharing Partners Register

*This register must be maintained by the Threat Intelligence Lead and reviewed semi-annually. It defines all organizations with whom [Organization Name] has active intelligence sharing arrangements.*

| Partner Organization | Relationship Type | Applicable TLP Levels | Agreement Reference | Agreement Expiry | Point of Contact | Status |
|---|---|---|---|---|---|---|
| Bank Negara Malaysia (BNM) | Regulatory | TLP:AMBER+STRICT, TLP:AMBER, TLP:GREEN | Regulatory Obligation (no separate agreement required) | N/A | [BNM Contact Reference] | Active |
| National Cyber Security Agency (NACSA) | Government / CII | TLP:AMBER, TLP:GREEN | [MOU Reference ID] | [DD/MM/YYYY] | [NACSA Contact Reference] | Active |
| CyberSecurity Malaysia (CSM) | Government | TLP:AMBER, TLP:GREEN | [MOU Reference ID] | [DD/MM/YYYY] | [CSM Contact Reference] | Active |
| FS-ISAC | Sector ISAC | TLP:AMBER, TLP:GREEN | [Membership Agreement Reference] | [DD/MM/YYYY] | [FS-ISAC Contact Reference] | Active |
| [Peer Bank / FI Name] | Bilateral Peer | TLP:AMBER, TLP:GREEN | [ISA Reference ID] | [DD/MM/YYYY] | [Contact Reference] | [Active / Inactive] |
| [MSSP / TI Vendor Name] | Commercial Vendor | TLP:AMBER, TLP:GREEN | [Contract Reference ID] | [DD/MM/YYYY] | [Contact Reference] | [Active / Inactive] |

---

### Appendix C — TLP Handling Exception Request Form

*Complete all fields. Submit to Threat Intelligence Lead. Incomplete forms will not be accepted.*

**Exception Request Form — TLP Handling Procedure**

| Field | Detail |
|---|---|
| **Exception Request ID** | EX-TLP-[YYYY]-[NNN] (assigned by Threat Intelligence Lead) |
| **Date of Request** | [DD/MM/YYYY] |
| **Requested By** | [Name, Designation, Business Unit] |
| **Procedure Reference** | [Section number(s) from this document] |
| **Description of Deviation Required** | [Describe exactly what standard procedure cannot be followed] |
| **Business Justification** | [Explain the business need or constraint driving the exception request] |
| **Risk Assessment** | [Describe the risk introduced by this deviation] |
| **Proposed Mitigating Controls** | [Describe compensating controls that will reduce the identified risk] |
| **Duration Requested** | [From DD/MM/YYYY to DD/MM/YYYY; maximum 90 days] |
| **Approval Required** | Threat Intelligence Lead [ ] / CISO [ ] / Compliance Officer [ ] |
| **Decision** | Approved [ ] / Rejected [ ] / Escalated [ ] |
| **Approver Name and Signature** | [Name] _________________________ Date: [DD/MM/YYYY] |
| **Conditions of Approval** | [Any conditions attached to the approval] |
| **Review Date** | [DD/MM/YYYY] |

---

### Appendix D — TLP Quick Reference Card

*This card may be printed and provided to all staff authorized to handle TLP-designated intelligence. It does not replace training.*

---

**TRAFFIC LIGHT PROTOCOL — QUICK REFERENCE**
*[Organization Name] | Classification: Internal Use*

| Label | Who Can Receive It? | Can I Forward It? | How Do I Store It? |
|---|---|---|---|
| 🔴 **TLP:RED** | Named individuals only | No — never | Encrypted storage; named access only |
| 🟠 **TLP:AMBER+STRICT** | [Organization Name] staff only (authorized) | No — internal only, no client/partner sharing | TIP restricted compartment; MFA required |
| 🟡 **TLP:AMBER** | [Organization Name] staff; named clients/partners with need-to-know | Only to named clients/partners with written authorization | TIP AMBER compartment |
| 🟢 **TLP:GREEN** | All sector community members (ISAC, peers) | Within community only; not publicly | TIP standard compartment; intranet |
| ⚪ **TLP:WHITE / TLP:CLEAR** | Anyone | Yes, freely | General knowledge base; public as appropriate |

**If in doubt — treat it as TLP:RED and escalate to the Threat Intelligence Lead.**

**Unauthorized disclosure?** Contact Threat Intelligence Lead immediately: Refer to On-Call Directory.

---

### Appendix E — Glossary of Terms

| Term | Definition |
|---|---|
| **APT** | Advanced Persistent Threat — a sophisticated, long-term targeted cyber intrusion campaign typically attributed to nation-state or organized criminal actors |
| **BNM** | Bank Negara Malaysia — the central bank of Malaysia and primary prudential regulator of Malaysian financial institutions |
| **CISO** | Chief Information Security Officer |
| **CTI** | Cyber Threat Intelligence — processed information about threats to an organization's information assets |
| **FIRST** | Forum of Incident Response and Security Teams — the international body that maintains the TLP standard |
| **FS-ISAC** | Financial Services Information Sharing and Analysis Center — a sector-specific threat intelligence sharing community |
| **IOC** | Indicator of Compromise — observable evidence (IP address, domain, file hash, URL) associated with a known threat |
| **ISA** | Information Sharing Agreement — a formal contract governing the terms under which two parties share sensitive information |
| **ISAC** | Information Sharing and Analysis Center — a sector-specific body facilitating cyber threat information sharing |
| **MOU** | Memorandum of Understanding — a non-binding agreement recording shared intent between parties |
| **MSSP** | Managed Security Service Provider — an external vendor providing outsourced security monitoring and management |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |
| **RMiT** | Risk Management in Technology — BNM's primary technology risk management policy for Malaysian financial institutions |
| **SIEM** | Security Information and Event Management — a platform aggregating security logs and alerts for monitoring and analysis |
| **SOC** | Security Operations Centre — the team responsible for continuous monitoring and response to security events |
| **STIX** | Structured Threat Information Expression — a standardized language for representing CTI |
| **TAXII** | Trusted Automated eXchange of Intelligence Information — a transport protocol for sharing STIX-based CTI |
| **TIP** | Threat Intelligence Platform — technology platform used to aggregate, analyze, and operationalize threat intelligence |
| **TLP** | Traffic Light Protocol — a standardized framework for communicating sharing restrictions on sensitive information |
| **TTP** | Tactics, Techniques, and Procedures — the behavioral profile of a threat actor's attack methodology |

---

*End of Document*

---

**Document Control Footer**

| | |
|---|---|
| **Document Title** | TLP Handling Procedures |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Threat Intelligence Lead, [Organization Name] |
| **Framework** | BNM Risk Management in Technology (RMiT) — Clause 11.17 |
| **Last Updated** | [DD/MM/YYYY] |

*This document is subject to annual review or upon significant organizational, technological, or regulatory change. Printed copies are uncontrolled. Always verify against the master copy held in [Document Management System].*