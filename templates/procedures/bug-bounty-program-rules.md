# Bug Bounty Program Rules

---

| Field | Details |
|-------|---------|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **RMiT Reference** | Clause 11.15 |

---

> **Document Classification Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel involved in the administration, oversight, and participation of the [Organization Name] Bug Bounty Program. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of Malaysian law, including the Personal Data Protection Act 2010 (PDPA) and relevant provisions of the Computer Crimes Act 1997.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Scope and Applicability](#4-scope-and-applicability)
5. [Program Eligibility and Researcher Registration](#5-program-eligibility-and-researcher-registration)
6. [Rules of Engagement](#6-rules-of-engagement)
7. [Submission and Reporting Process](#7-submission-and-reporting-process)
8. [Vulnerability Classification and Severity Ratings](#8-vulnerability-classification-and-severity-ratings)
9. [Reward and Recognition Structure](#9-reward-and-recognition-structure)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Escalation Procedures](#11-escalation-procedures)
12. [Tools and Systems Used](#12-tools-and-systems-used)
13. [Researcher Safe Harbour and Legal Protections](#13-researcher-safe-harbour-and-legal-protections)
14. [Confidentiality and Data Handling Obligations](#14-confidentiality-and-data-handling-obligations)
15. [Non-Compliance and Disqualification](#15-non-compliance-and-disqualification)
16. [Program Review and Governance](#16-program-review-and-governance)
17. [Review and Approval](#17-review-and-approval)
18. [References](#18-references)
19. [Appendices](#19-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document, why the Bug Bounty Program exists, and what it aims to achieve for the organization's security posture and regulatory compliance.*

This document establishes the official **Bug Bounty Program Rules** for [Organization Name] (hereinafter referred to as "the Organization"). It defines the rules of engagement, permissible testing scope, submission procedures, reward criteria, researcher obligations, and governance framework governing the program.

The Bug Bounty Program is established as part of the Organization's commitment to maintaining a robust cybersecurity posture in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.15, which requires financial institutions to proactively identify and remediate vulnerabilities in their technology systems.

The program provides a structured and legally protected mechanism for independent security researchers, ethical hackers, and authorized participants (hereinafter referred to as "Researchers") to identify and responsibly disclose security vulnerabilities in designated Organization assets.

### 1.2 Scope of This Document

*Specify which systems, entities, and personnel this document applies to.*

This document applies to:

- All technology systems, applications, and infrastructure assets explicitly listed in **Section 4** as in-scope for the program
- All internal and external Researchers who participate in the Bug Bounty Program
- All [Organization Name] staff with responsibilities for administering, reviewing, or acting upon bug bounty submissions
- Third-party vendors and managed service providers whose systems are included within the defined scope
- Any platform or service used to manage and facilitate the bug bounty process

This document does **not** apply to:

- Systems, assets, or entities explicitly listed as out-of-scope in **Section 4**
- Internal penetration testing exercises conducted by the Organization's own security team or contracted penetration testers operating under a separate statement of work
- Vulnerability disclosures received outside of the formal program submission channel

### 1.3 Organizational Context

*Provide a brief contextual statement on how this program fits within the broader security and compliance programme.*

[Organization Name] is a [licensed financial institution / financial holding company / designated payment institution] regulated by Bank Negara Malaysia. As a reporting institution under the RMiT Policy Document, the Organization is required to establish and maintain technology risk management practices commensurate with its risk profile, scale of operations, and systemic importance. This Bug Bounty Program constitutes one component of the Organization's broader **Vulnerability Management Programme** and **Third-Party Threat Intelligence Strategy**.

---

## 2. Definitions and Abbreviations

*Define all technical, legal, and regulatory terms used throughout this document to ensure clarity for all readers, including non-technical reviewers and auditors.*

### 2.1 Definitions

| Term | Definition |
|------|-----------|
| **Bug Bounty Program** | A structured program through which the Organization invites external or internal security researchers to identify and responsibly disclose security vulnerabilities in designated assets in exchange for recognition or monetary rewards. |
| **Researcher** | Any individual or team who registers and participates in the Bug Bounty Program under the terms set out in this document. |
| **Vulnerability** | A weakness or flaw in a system, application, configuration, or process that could be exploited by a threat actor to compromise the confidentiality, integrity, or availability of an asset. |
| **Proof of Concept (PoC)** | Evidence demonstrating the existence and exploitability of a reported vulnerability, typically in the form of a reproducible test case, code snippet, or screenshot. |
| **Safe Harbour** | Legal protection granted to Researchers who comply with program rules, shielding them from legal action in relation to activities conducted within the defined scope and rules of engagement. |
| **Responsible Disclosure** | The practice of reporting a discovered vulnerability to the affected organization through a designated channel, allowing the organization a reasonable period to remediate before any public disclosure. |
| **Triage** | The process of reviewing, validating, deduplicating, and classifying a submitted vulnerability report. |
| **In-Scope Asset** | A system, application, domain, or infrastructure component explicitly designated as eligible for testing under this program. |
| **Out-of-Scope Asset** | A system, application, domain, or infrastructure component not eligible for testing; any testing of out-of-scope assets is unauthorized and may result in legal action. |
| **Duplicate Submission** | A vulnerability report that describes a vulnerability already known to the Organization or previously submitted by another Researcher. |
| **Hall of Fame** | A public or internal acknowledgement list recognizing Researchers who have made valid and impactful vulnerability disclosures. |
| **CVSS** | Common Vulnerability Scoring System — a standardized framework for rating the severity of security vulnerabilities. |
| **CVE** | Common Vulnerabilities and Exposures — a publicly maintained catalogue of known security vulnerabilities. |

### 2.2 Abbreviations

| Abbreviation | Meaning |
|--------------|---------|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| CISO | Chief Information Security Officer |
| SOC | Security Operations Centre |
| NACSA | National Cyber Security Agency |
| CVSS | Common Vulnerability Scoring System |
| PoC | Proof of Concept |
| RACI | Responsible, Accountable, Consulted, Informed |
| SLA | Service Level Agreement |
| PII | Personally Identifiable Information |
| TLP | Traffic Light Protocol |
| API | Application Programming Interface |
| WAF | Web Application Firewall |
| MFA | Multi-Factor Authentication |

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Foundation

*Reference all applicable regulations, policy documents, and internal policies that mandate or support this program.*

This program is established in compliance with and support of the following regulatory and policy instruments:

| Reference | Issuing Authority | Relevant Provision |
|-----------|------------------|--------------------|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11.15 — Vulnerability Assessment and Penetration Testing |
| Personal Data Protection Act 2010 (Act 709) | Government of Malaysia | Sections 5–9 — Personal Data Processing Principles |
| Computer Crimes Act 1997 (Act 563) | Government of Malaysia | Sections 3–6 — Unauthorized Access and Computer Misuse |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | Sections on threat-led testing and red team exercises |
| [Organization Name] Information Security Policy | [Organization Name] | Section [X] — Vulnerability Management |
| [Organization Name] Technology Risk Management Policy | [Organization Name] | Section [X] — Threat Intelligence and Testing |
| [Organization Name] Incident Response Policy | [Organization Name] | Section [X] — Security Incident Classification and Response |

### 3.2 RMiT Clause 11.15 Alignment

*Summarize how this document directly addresses the requirements of RMiT Clause 11.15.*

RMiT Clause 11.15 requires financial institutions to conduct **vulnerability assessments and penetration tests** on a risk-proportionate basis to identify weaknesses before threat actors can exploit them. This Bug Bounty Program complements formal penetration testing by:

- Providing **continuous, crowd-sourced testing** of production and pre-production assets
- Enabling **real-world adversarial testing** that replicates genuine threat actor techniques
- Establishing a **structured responsible disclosure** mechanism that encourages prompt reporting
- Contributing findings to the Organization's **vulnerability register** and remediation tracking processes
- Supporting the Organization's obligations under RMiT to maintain an **up-to-date inventory of vulnerabilities** and to track remediation progress

### 3.3 Internal Policy Alignment

*List the internal policies and frameworks this document is subordinate to or aligned with.*

This document is a subordinate instrument to the following internal governance documents:

- [Organization Name] Cybersecurity Framework
- [Organization Name] Information Security Policy
- [Organization Name] Technology Risk Management Policy
- [Organization Name] Vulnerability Management Standard
- [Organization Name] Third-Party Risk Management Policy
- [Organization Name] Incident Response and Management Policy

In the event of any conflict between this document and a superior policy instrument, the superior instrument shall prevail. Conflicts should be escalated to the [CISO / Technology Risk Officer] for resolution.

---

## 4. Scope and Applicability

### 4.1 In-Scope Assets

*List all systems, applications, domains, and infrastructure components that are explicitly authorized for testing under this program. Be specific — vague scope creates legal and operational risk.*

The following assets are designated as **in-scope** for the Bug Bounty Program. Researchers may only test assets listed in this section. Testing of any asset not listed here is strictly prohibited.

| Asset Category | Asset Name / URL / IP Range | Notes |
|---------------|----------------------------|-------|
| Web Application | [Application Name] — [URL] | Production environment only; read-only test accounts available |
| Mobile Application (iOS) | [App Name] — App Store link | Version [X.X] and above |
| Mobile Application (Android) | [App Name] — Google Play link | Version [X.X] and above |
| Public API | [API Base URL] | See Appendix A for endpoint list |
| Internet-Facing Web Portal | [Portal URL] | Customer-facing portal |
| [Add additional assets] | | |

> **Note:** The Organization reserves the right to modify the in-scope asset list at any time. Researchers will be notified of changes via the [Bug Bounty Platform / designated communication channel] with a minimum of [X] days' notice before any reduction in scope takes effect.

### 4.2 Out-of-Scope Assets

*Explicitly list all assets that must not be tested. This protects operational systems and creates clear legal boundaries.*

The following assets are explicitly **out-of-scope**. Testing of out-of-scope assets constitutes unauthorized access under the Computer Crimes Act 1997 and may result in immediate disqualification, forfeiture of rewards, and legal action.

| Asset Category | Asset Name / Description | Reason for Exclusion |
|---------------|-------------------------|---------------------|
| Core Banking System | [System Name] | Operational criticality; separate testing regime applies |
| Payment Processing Infrastructure | [System Name] | Regulated under separate testing schedule |
| SWIFT / Interbank Network Interfaces | All SWIFT-connected systems | Governed by SWIFT CSCF; separate engagement required |
| Third-Party Vendor Systems | All systems not explicitly in scope | Not authorized by third parties under this program |
| Physical Security Systems | CCTV, access control, building management | Physical intrusion not in scope |
| Staff Personal Devices | Personal laptops, mobile phones | Not Organization-owned assets |
| Email Systems | [email domain] | Social engineering/phishing not permitted |
| [Add additional exclusions] | | |

### 4.3 Geographical Applicability

*Specify if the program has any geographical restrictions on researcher participation.*

This program is open to Researchers located in [all jurisdictions / the following jurisdictions: list]. The Organization reserves the right to exclude participants from specific jurisdictions where legal, regulatory, or sanctions obligations prohibit engagement. Researchers are responsible for ensuring their participation complies with the laws of their country of residence.

### 4.4 Temporal Scope

*Define any time-based restrictions on testing activities.*

- Testing is permitted [24 hours a day, 7 days a week / between the hours of [Time] and [Time], [Timezone]] unless otherwise communicated
- The Organization may declare **blackout periods** during which testing must be suspended (e.g., during scheduled maintenance windows, public holidays, major product releases, or financial year-end processing). Blackout periods will be communicated via [Bug Bounty Platform / email notification]
- Blackout periods do not affect submission of previously discovered findings

---

## 5. Program Eligibility and Researcher Registration

### 5.1 Eligibility Criteria

*Define who is permitted to participate in the program.*

Participation in the Bug Bounty Program is open to individuals who meet all of the following eligibility criteria:

- Are at least [18] years of age
- Have completed the program registration process via [Bug Bounty Platform Name / URL]
- Have read, understood, and agreed to these Program Rules in full
- Are not currently employed by, contracted to, or affiliated with [Organization Name] or any of its subsidiaries, unless participating under a designated internal researcher track
- Are not citizens or residents of any country subject to applicable sanctions restrictions
- Are not currently under investigation for, or have not been convicted of, any computer crime or cybersecurity-related offence
- Do not work for a competitor of [Organization Name] in a capacity that creates a conflict of interest

### 5.2 Registration Process

*Describe the steps a Researcher must complete before they are permitted to begin testing.*

**Step 1 — Platform Registration**
Researchers must create a verified account on [Bug Bounty Platform Name]. Account creation requires a valid email address, full name, and acceptance of the platform's terms of service.

**Step 2 — Identity Verification**
[Organization Name] requires identity verification prior to granting access to [certain in-scope assets / all in-scope assets]. Researchers must submit [government-issued photo identification / other verification documentation] via [Platform / specified process].

**Step 3 — Program Agreement Acceptance**
Researchers must explicitly accept these Program Rules, the Safe Harbour Agreement (Appendix B), and the Confidentiality Undertaking (Appendix C) before testing may commence.

**Step 4 — Test Account Provisioning (if applicable)**
Researchers requiring test accounts for authenticated testing may request credentials via [Bug Bounty Platform / designated request process]. Test accounts will be provisioned within [X] business days of request.

**Step 5 — Commencement of Testing**
Following successful completion of the above steps, Researchers are authorized to commence testing of in-scope assets in accordance with these rules.

### 5.3 Internal Researcher Track

*If applicable, define rules for employees or contractors who participate in a separate internal track.*

[Organization Name] employees and authorized contractors may participate in a separate **Internal Researcher Track** subject to:

- Written approval from their direct line manager and the [CISO / Head of Cybersecurity]
- Restriction to testing assets within their authorized access scope under their normal role
- The same submission and reward process as external Researchers, unless otherwise specified
- Additional confidentiality obligations as set out in their employment or contractor agreement

---

## 6. Rules of Engagement

### 6.1 Permitted Testing Activities

*Clearly define what types of testing activities Researchers are authorized to perform.*

Researchers are permitted to perform the following activities against in-scope assets only:

- Passive reconnaissance and open-source intelligence (OSINT) gathering relating to in-scope assets
- Active scanning and enumeration of in-scope web applications, APIs, and domains
- Exploitation of discovered vulnerabilities to the minimum extent necessary to demonstrate their existence and impact (Proof of Concept)
- Authentication and session management testing using Researcher-owned test accounts
- Input validation testing, including fuzzing, injection testing, and parameter manipulation
- Business logic vulnerability testing
- Client-side vulnerability testing (XSS, CSRF, clickjacking, etc.)
- API security testing against documented and undocumented endpoints within in-scope domains

### 6.2 Prohibited Testing Activities

*Define all activities that are strictly forbidden regardless of whether they relate to in-scope assets.*

The following activities are **strictly prohibited** under any circumstances:

- **Denial of Service (DoS) or Distributed Denial of Service (DDoS)** attacks against any Organization asset
- **Automated scanning** at rates that degrade service availability or performance for legitimate users
- **Accessing, exfiltrating, or retaining** real customer data, employee data, or any other Personally Identifiable Information (PII) discovered during testing
- **Modifying, deleting, or corrupting** any data in production systems beyond what is strictly necessary for PoC demonstration
- **Physical attacks** against Organization facilities, hardware, or personnel
- **Social engineering**, phishing, vishing, or pretexting of Organization employees, contractors, or customers
- **Testing of third-party services** integrated into in-scope assets unless those third-party services are explicitly listed as in-scope
- **Introducing malware, backdoors, persistent implants**, or any unauthorized software into Organization systems
- **Pivoting or lateral movement** beyond the immediate in-scope asset to other internal systems
- **Testing out-of-scope assets** under any circumstances
- **Publicly disclosing** any vulnerability details, including partial details, before the Organization has issued a remediation and granted written authorization for disclosure
- **Submitting fabricated or inflated findings** with artificially increased severity ratings
- **Conducting testing** from IP addresses, accounts, or infrastructure that could be attributed to a malicious actor or known threat group

### 6.3 Data Handling During Testing

*Specify how Researchers must handle any sensitive data encountered during testing.*

Researchers who inadvertently encounter or access real customer data, PII, financial records, or other sensitive information during testing must:

1. **Immediately cease** any activity that could result in further exposure
2. **Not attempt to access, copy, download, or retain** the data in any form
3. **Report the exposure** to the Organization immediately via the submission portal, noting that sensitive data was encountered
4. **Delete any local copies** of sensitive data and confirm deletion in writing to the Program Administrator
5. **Not disclose** the nature or content of the data to any third party

Failure to comply with these obligations constitutes a material breach of these Program Rules and may result in disqualification, forfeiture of rewards, and referral to relevant authorities.

### 6.4 Testing Environment Guidance

*Provide practical guidance to minimize impact on production systems.*

- Researchers should conduct testing during **off-peak hours** where possible to minimize impact on legitimate users
- Rate limiting of automated tools must be configured to avoid triggering service degradation
- Where a **staging or test environment** is designated as in-scope, Researchers should prefer testing in that environment over production
- Researchers must use **only Researcher-owned or Organization-provided test accounts** and must not test using other users' credentials
- All testing must be conducted from **identifiable Researcher infrastructure**; use of commercial VPN services or anonymizing proxies is [permitted / discouraged / prohibited — select appropriate position]

---

## 7. Submission and Reporting Process

### 7.1 Submission Channel

*Identify the official channel through which all vulnerability reports must be submitted.*

All vulnerability reports must be submitted exclusively through the official Bug Bounty Program portal at **[Bug Bounty Platform URL]**. Reports received via email, social media, telephone, or any other channel will not be accepted as formal program submissions and will not qualify for rewards.

### 7.2 Required Report Contents

*Define the minimum information a Researcher must provide for a report to be considered complete and eligible for triage.*

A complete vulnerability report must include all of the following elements:

| Field | Required | Description |
|-------|----------|-------------|
| **Vulnerability Title** | Mandatory | Concise, descriptive title of the vulnerability |
| **Affected Asset** | Mandatory | URL, IP address, or asset name of the affected system |
| **Vulnerability Type** | Mandatory | Classification (e.g., XSS, SQLi, IDOR, SSRF) |
| **Severity (Researcher Assessment)** | Mandatory | Researcher's assessment using CVSS v3.1 or equivalent |
| **Detailed Description** | Mandatory | Full technical description of the vulnerability |
| **Steps to Reproduce** | Mandatory | Clear, numbered, reproducible steps |
| **Proof of Concept (PoC)** | Mandatory | Screenshots, video, or code demonstrating exploitability |
| **Impact Assessment** | Mandatory | Researcher's assessment of the potential business and technical impact |
| **Suggested Remediation** | Optional | Researcher's recommendations for fixing the vulnerability |
| **Tools Used** | Optional | List of tools used during discovery |

### 7.3 Submission Process Flow

*Describe the end-to-end process from discovery to closure.*

```
[Researcher Discovers Vulnerability]
            |
            v
[Researcher Prepares Complete Report]
            |
            v
[Report Submitted via Bug Bounty Platform]
            |
            v
[Automated Acknowledgement — Within 24 Hours]
            |
            v
[Initial Triage by Program Administrator — Within 3 Business Days]
            |
     +------+------+
     |             |
[Valid]        [Invalid / Duplicate / Out-of-Scope]
     |             |
     v             v
[Severity     [Notification to Researcher
 Assessment]   with Reason — Within 5 Business Days]
     |
     v
[Assigned to Remediation Owner]
     |
     v
[Remediation Developed and Tested]
     |
     v
[Researcher Notified of Fix — Verification Window Offered]
     |
     v
[Reward Determination and Payment / Recognition]
     |
     v
[Submission Closed — Researcher Notified]
```

### 7.4 Response SLAs

*Define the timeframes within which the Organization commits to responding at each stage.*

| Stage | Commitment | Target Timeframe |
|-------|-----------|-----------------|
| Acknowledgement of receipt | Automated confirmation | Within 24 hours of submission |
| Initial triage response | Program Administrator | Within [3] business days |
| Severity classification | Security team | Within [5] business days |
| Remediation target notification | Remediation owner | Within [7] business days of validation |
| Remediation completion (Critical) | Engineering and Security | Within [7] calendar days |
| Remediation completion (High) | Engineering and Security | Within [30] calendar days |
| Remediation completion (Medium) | Engineering and Security | Within [60] calendar days |
| Remediation completion (Low) | Engineering and Security | Within [90] calendar days |
| Reward determination | Program Administrator | Within [14] business days of closure |

*Response SLAs are targets and may be extended in exceptional circumstances. Researchers will be notified of any extensions with reasons.*

### 7.5 Duplicate Submissions

*Define how duplicate reports are handled.*

A submission will be classified as a **duplicate** if the vulnerability was:

- Previously discovered and reported by another Researcher and is currently open or remediated
- Already known to the Organization's internal security team and documented in the vulnerability register
- Already submitted by the same Researcher in a prior report

In the case of a duplicate, the **first Researcher to submit a complete and valid report** for the vulnerability will receive the reward. Subsequent duplicate submissions will be acknowledged and closed without reward. Researchers whose submissions are classified as duplicates will be notified within [5] business days.

---

## 8. Vulnerability Classification and Severity Ratings

### 8.1 Severity Rating Framework

*Define the severity rating methodology used to classify submitted vulnerabilities.*

[Organization Name] uses the **Common Vulnerability Scoring System (CVSS) v3.1** as the primary framework for severity classification. The Organization's Security team will independently assess severity and may adjust the Researcher's rating based on the actual exploitability and impact in the Organization's environment.

| Severity | CVSS Score Range | Description | Examples |
|----------|-----------------|-------------|---------|
| **Critical** | 9.0 – 10.0 | Vulnerabilities with direct, immediate impact on confidentiality, integrity, or availability of critical systems or customer data | Unauthenticated remote code execution on production systems; complete authentication bypass; direct access to core banking data |
| **High** | 7.0 – 8.9 | Significant vulnerabilities that could lead to substantial data exposure, privilege escalation, or service disruption | SQL injection with data exfiltration potential; stored XSS in authenticated areas; IDOR exposing customer account data |
| **Medium** | 4.0 – 6.9 | Vulnerabilities with limited but real impact, often requiring specific conditions or authenticated access | Reflected XSS with limited impact; CSRF on non-sensitive functions; information disclosure of non-critical data |
| **Low** | 0.1 – 3.9 | Minor vulnerabilities with minimal exploitability or limited impact in the Organization's context | Missing security headers with limited impact; verbose error messages; low-impact information disclosure |
| **Informational** | N/A | Observations that represent best-practice deviations but pose no direct security risk | Missing optional security headers; outdated but non-vulnerable library versions; cosmetic issues |

### 8.2 Severity Adjustment Criteria

*Define circumstances under which the Organization may adjust a Researcher's severity rating.*

The Organization reserves the right to adjust severity ratings based on the following environmental factors:

- **Compensating controls:** Existing network segmentation, WAF rules, or other controls that materially reduce exploitability
- **Data classification of affected assets:** Vulnerabilities affecting higher-sensitivity data classifications may be rated higher
- **Authentication requirements:** Vulnerabilities requiring valid credentials may be rated lower than unauthenticated equivalents
- **Customer impact:** Vulnerabilities directly affecting customer-facing services may be rated higher
- **Regulatory impact:** Vulnerabilities with direct implications for regulatory compliance obligations may be elevated

All severity adjustment decisions will be communicated to the Researcher with a written explanation.

### 8.3 Out-of-Scope Vulnerability Types

*List vulnerability classes that will not be accepted under this program regardless of severity.*

The following vulnerability types are not accepted under this program:

- Vulnerabilities in third-party services not explicitly in scope
- Self-XSS requiring victim self-interaction without social engineering
- Missing DMARC, SPF, or DKIM records without demonstrated exploitation
- Clickjacking on pages without sensitive actions
- Theoretical vulnerabilities without demonstrable impact
- Findings from automated scanner output without manual validation
- SSL/TLS configuration issues below a [High] threshold without exploitation PoC
- Rate limiting issues without demonstrated credential stuffing or account takeover impact
- Open redirects without demonstrated phishing or token theft impact
- [Add organization-specific exclusions]

---

## 9. Reward and Recognition Structure

### 9.1 Monetary Reward Structure

*Define the reward amounts or ranges for each severity tier. Ensure reward ranges are reviewed regularly to remain competitive.*

| Severity | Minimum Reward (MYR) | Maximum Reward (MYR) | Notes |
|----------|---------------------|---------------------|-------|
| Critical | [MYR 5,000] | [MYR 20,000] | Board approval required above [MYR 15,000] |
| High | [MYR 1,500] | [MYR 5,000] | |
| Medium | [MYR 300] | [MYR 1,500] | |
| Low | [MYR 50] | [MYR 300] | |
| Informational | No monetary reward | — | Recognition only |

*Reward amounts are indicative and the final determination is at the Organization's discretion based on impact, quality of report, and novelty of finding.*

### 9.2 Reward Determination Factors

*Describe the criteria used to determine where within a range a reward will be set.*

Rewards within each severity tier will be determined based on:

- **Quality of the report:** Clarity, reproducibility, and completeness of the submission
- **Quality of the PoC:** Technical rigor and clarity of the proof of concept
- **Impact to the Organization:** Actual business and regulatory impact if exploited
- **Novelty:** Whether the vulnerability represents a novel or previously unknown class of finding
- **Remediation suggestions:** Value of the Researcher's remediation recommendations
- **Researcher cooperation:** Responsiveness and helpfulness during the triage and verification process

### 9.3 Non-Monetary Recognition

*Describe non-monetary rewards and recognition mechanisms.*

In addition to or in lieu of monetary rewards, the Organization may offer:

- Listing on the **Bug Bounty Hall of Fame** (public or internal, Researcher's choice)
- **Letter of Recognition** for high-quality submissions (on Organization letterhead)
- **Certificate of Appreciation** for significant findings
- [Add any other recognition mechanisms]

### 9.4 Tax and Legal Obligations

*Clarify the Researcher's obligations regarding taxes and legal compliance.*

Researchers are solely responsible for complying with all applicable tax obligations arising from rewards received under this program. [Organization Name] will [provide / not provide] a formal receipt or payment documentation upon request. Researchers receiving rewards above [MYR amount] may be subject to [applicable withholding tax obligations — consult with legal and finance teams].

### 9.5 Payment Process

*Describe the payment mechanics.*

Rewards will be paid via [bank transfer / platform payment mechanism] within [30] business days of the submission being formally closed. Researchers must provide valid bank details and, where required, identity documentation to receive payment. [Organization Name] will not be responsible for payment failures due to incorrect details provided by the Researcher.

---

## 10. Roles and Responsibilities

### 10.1 Roles Overview

*Describe each role involved in the Bug Bounty Program and their primary responsibilities.*

| Role | Position / Title | Primary Responsibilities |
|------|-----------------|------------------------|
| **Program Owner** | [Relevant Department Head / CISO] | Overall accountability for program governance, performance, and compliance |
| **Program Administrator** | [Security Operations Manager / Vulnerability Management Lead] | Day-to-day administration, triage, Researcher communication, SLA management |
| **Security Analyst** | [Cybersecurity Team Member] | Technical validation of submissions, severity assessment, PoC verification |
| **Remediation Owner** | [Application Owner / System Owner] | Accountable for remediation of validated findings within SLA |
| **Legal Counsel** | [Legal / Compliance Department] | Review of Safe Harbour agreements, dispute resolution, legal escalation |
| **Compliance Officer** | [Technology Risk / Compliance Department] | Regulatory reporting, RMiT compliance tracking |
| **CISO** | Chief Information Security Officer | Executive oversight, approval of Critical rewards, escalation authority |
| **Researcher** | External or internal security researcher | Testing of in-scope assets, submission of valid reports, compliance with rules |

### 10.2 RACI Matrix

*The RACI matrix defines who is Responsible (R), Accountable (A), Consulted (C), and Informed (I) for each key activity.*

| Activity | Program Owner | Program Administrator | Security Analyst | Remediation Owner | Legal Counsel | Compliance Officer | CISO |
|----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Define and update program scope | A | R | C | C | C | C | I |
| Maintain program rules documentation | A | R | C | — | C | C | I |
| Researcher registration and onboarding | I | R/A | — | — | C | — | — |
| Submission receipt and acknowledgement | I | R/A | — | — | — | — | — |
| Initial triage and validation | I | R | A | — | — | — | — |
| Severity classification | I | C | R/A | C | — | — | — |
| Escalation to incident response | A | R | C | I | — | I | I |
| Assign to remediation owner | A | R | C | I | — | — | — |
| Remediation and verification | I | C | C | R/A | — | — | — |
| Reward determination | A | R | C | — | C | — | C |
| Reward payment processing | I | R | — | — | C | I | A |
| Researcher communication | I | R/A | C | — | — | — | — |
| Regulatory reporting (RMiT) | I | C | C | — | — | R/A | C |
| Annual program review | A | R | C | C | C | C | I |
| Dispute resolution | I | R | C | — | C/A | — | A |
| Hall of Fame publication | I | R/A | — | — | C | — | — |

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

---

## 11. Escalation Procedures

### 11.1 Escalation Framework

*Define the conditions that trigger escalation and the corresponding escalation path.*

Not all submissions follow the standard process flow. The following escalation procedures govern situations requiring expedited or elevated handling.

### 11.2 Critical Vulnerability Escalation

**Trigger:** A submission is assessed or suspected to be of Critical severity, involving potential unauthorized access to customer data, core banking systems, payment infrastructure, or any asset with systemic financial stability implications.

**Escalation Path:**

| Step | Action | Responsible | Timeframe |
|------|--------|-------------|-----------|
| 1 | Program Administrator flags submission as Critical | Program Administrator | Within 1 hour of identification |
| 2 | Immediate notification to CISO and Head of Technology Risk | Program Administrator | Within 2 hours |
| 3 | Emergency triage meeting convened | CISO | Within 4 hours |
| 4 | Assess whether active exploitation is occurring | Security Analyst / SOC | Within 4 hours |
| 5 | If active exploitation suspected, activate Incident Response Plan | CISO | Immediately |
| 6 | Interim mitigating controls implemented if required | Remediation Owner / Security Team | Within 24 hours |
| 7 | Researcher contacted to provide additional technical information | Program Administrator | Within 24 hours |
| 8 | BNM notification assessed against regulatory reporting thresholds | Compliance Officer | Within 24 hours |

### 11.3 Active Exploitation Suspicion

**Trigger:** Evidence suggests that a reported vulnerability is, or has been, actively exploited in the wild or by a threat actor beyond the submitting Researcher.

**Escalation Path:**

1. Program Administrator immediately notifies the SOC and CISO
2. Incident Response Plan is activated per [Incident Response Policy, Section X]
3. Affected systems are isolated or access restricted where operationally feasible
4. Forensic evidence preservation is initiated
5. Regulatory notification obligations are assessed per BNM RMiT reporting requirements
6. Bug bounty submission is placed on hold pending incident investigation outcome

### 11.4 Data Exposure Notification

**Trigger:** A Researcher reports encountering real customer data, PII, or regulated financial information during testing.

**Escalation Path:**

1. Program Administrator notifies Data Protection Officer (DPO) and CISO within [2] hours
2. DPO assesses whether a personal data breach notification is required under PDPA
3. Researcher is contacted and instructed to confirm deletion of any retained data
4. Full impact assessment conducted within [24] hours
5. If PDPA notification threshold met, DPO initiates regulatory notification process

### 11.5 Researcher Dispute Escalation

**Trigger:** A Researcher disputes a severity classification, duplicate determination, or reward decision.

**Escalation Path:**

| Step | Action | Responsible | Timeframe |
|------|--------|-------------|-----------|
| 1 | Researcher submits written dispute via platform within [30] days of decision | Researcher | Within 30 days |
| 2 | Program Administrator reviews dispute and responds | Program Administrator | Within [5] business days |
| 3 | If unresolved, escalate to CISO for final determination | CISO | Within [10] business days |
| 4 | CISO decision is final and binding | CISO | — |

### 11.6 Legal Threat or Extortion

**Trigger:** A Researcher makes legal threats, demands payment under coercion, threatens public disclosure before authorized, or engages in any form of extortion.

**Escalation Path:**

1. Program Administrator immediately notifies Legal Counsel and CISO
2. All communication with the Researcher is suspended pending legal advice
3. Legal Counsel assesses options and prepares response
4. Law enforcement referral assessed if criminal conduct is involved
5. No rewards will be paid under coercive circumstances

---

## 12. Tools and Systems Used

### 12.1 Program Management Platform

*Identify the platform used to manage the bug bounty program.*

| Tool / System | Purpose | Vendor / Provider | Access |
|--------------|---------|-------------------|--------|
| [Bug Bounty Platform Name] | Submission portal, triage tracking, Researcher communication, reward management | [Platform Vendor] | [URL] |
| [Vulnerability Management System] | Internal tracking of validated findings and remediation status | [Vendor] | Internal only |
| [JIRA / ServiceNow / other ticketing] | Remediation task tracking and engineering workflow | [Vendor] | Internal only |
| [SIEM Platform] | Monitoring of testing activity against production systems | [Vendor] | SOC only |
| [Collaboration Platform] | Internal program team communication | [Vendor] | Internal only |

### 12.2 Permitted Researcher Tools

*Define the categories of tools Researchers are permitted to use. This is guidance; the Organization cannot control all tooling but should signal expectations.*

Researchers may use industry-standard security testing tools including but not limited to:

| Tool Category | Examples | Notes |
|--------------|---------|-------|
| Web Application Proxies | Burp Suite, OWASP ZAP | Standard community or professional editions |
| Network Scanners | Nmap | Rate-limited use only; aggressive scans prohibited |
| Subdomain Enumeration | Subfinder, Amass | Passive enumeration preferred |
| Fuzzing Tools | ffuf, wfuzz | Must be rate-limited |
| API Testing | Postman, Insomnia | Against in-scope API endpoints only |
| Static Analysis | [As applicable] | Against Organization-provided source code only if included in scope |

### 12.3 Prohibited Researcher Tools

*Identify specific tool categories or named tools that are prohibited.*

The following tool categories are prohibited:

- **DoS/stress testing tools** of any kind (e.g., LOIC, HOIC, Slowloris)
- **Automated exploitation frameworks** without prior written authorization (e.g., Metasploit used for automated mass exploitation rather than targeted PoC)
- **Credential stuffing tools** using real credential lists
- **Tools that generate traffic volumes** sufficient to degrade service availability
- **Any tool** whose output includes exfiltrated real customer data

### 12.4 Internal Monitoring During Testing

*Inform Researchers that testing activity is monitored.*

Researchers should be aware that [Organization Name] continuously monitors its production and staging environments for anomalous activity. **Testing activity will be logged and may trigger security alerts.** Researchers who are flagged by automated detection systems will be contacted by the Program Administrator to verify their activity before any enforcement action is taken against their participation. Researchers should submit their testing IP addresses via the platform to facilitate identification of legitimate testing traffic.

---

## 13. Researcher Safe Harbour and Legal Protections

### 13.1 Safe Harbour Commitment

*State the Organization's commitment to protecting good-faith Researchers from legal action.*

[Organization Name] will not initiate or support legal action against Researchers who:

- Comply fully with these Program Rules
- Conduct testing solely within the defined in-scope asset list
- Make good-faith efforts to avoid harm to the Organization, its customers, or third parties
- Submit all discovered vulnerabilities through the designated submission channel
- Do not publicly disclose vulnerabilities before authorized to do so
- Do not access, retain, or misuse customer data or PII encountered during testing
- Do not conduct testing for commercial advantage beyond the reward structure of this program

### 13.2 Scope of Safe Harbour

The safe harbour provided under this program:

- **Covers:** Civil and criminal claims that could be brought under the Computer Crimes Act 1997 (Act 563) for unauthorized access to in-scope assets
- **Covers:** Claims relating to authorized circumvention of technical security measures on in-scope assets for testing purposes
- **Does not cover:** Testing of out-of-scope assets under any circumstances
- **Does not cover:** Retention or misuse of customer data or PII
- **Does not cover:** Actions taken after program disqualification
- **Does not cover:** Violations of these Program Rules
- **Does not cover:** Activities that constitute criminal offences beyond the scope of security research

### 13.3 Third-Party Platforms

*Clarify safe harbour limitations regarding third-party services.*

Where in-scope assets interact with third-party services, safe harbour under this program only extends to [Organization Name]'s own systems. [Organization Name] cannot provide safe harbour protection for actions taken against third-party systems and does not authorize testing of third-party infrastructure. Researchers who identify third-party vulnerabilities through their testing should report these to [Organization Name] and may be directed to the third party's own responsible disclosure program.

### 13.4 Formal Safe Harbour Agreement

A formal Safe Harbour Agreement is provided at **Appendix B** of this document. Researchers are required to execute this agreement as part of the registration process. In the event of any conflict between the provisions of this Section and Appendix B, Appendix B shall prevail.

---

## 14. Confidentiality and Data Handling Obligations

### 14.1 Researcher Confidentiality Obligations

*Define what Researchers must keep confidential and for how long.*

Researchers are required to maintain strict confidentiality regarding:

- The existence of any vulnerability discovered during program participation, from the date of submission until [Organization Name] grants written authorization for disclosure
- The contents of any vulnerability report submitted under this program
- Any non-public technical information about [Organization Name]'s systems, architecture, or configuration encountered during testing
- Any customer data, employee data, or internal business information encountered during testing
- Any communications exchanged between the Researcher and [Organization Name] in connection with this program

### 14.2 Disclosure Authorization Process

*Define how Researchers may seek authorization to publicly disclose their findings.*

Researchers who wish to publicly disclose their findings (e.g., at a security conference, in a blog post, or via CVE submission) must:

1. Submit a written disclosure request via the bug bounty platform after the vulnerability has been remediated and the submission closed
2. Specify the proposed disclosure format, venue, and timeline
3. Provide the full proposed disclosure content for review
4. Await written approval from [Organization Name], which will not be unreasonably withheld for fully remediated findings
5. Submit any amended disclosure content if requested as a condition of approval

[Organization Name] will respond to disclosure requests within [15] business days. Conditional approval may specify redactions or modifications required to protect sensitive technical details or customer information.

### 14.3 Coordinated Vulnerability Disclosure

*Define the Organization's coordinated disclosure policy.*

[Organization Name] supports coordinated vulnerability disclosure in accordance with international best practices. For vulnerabilities that remain unmediated beyond the agreed SLA, Researchers may, after providing [30] days' written notice to the Program Administrator, proceed with limited public disclosure if:

- The full SLA period has elapsed without remediation or a reasonable extension being agreed
- The Researcher has made genuine good-faith efforts to work with the Organization during the remediation period
- The disclosure does not include customer data, PII, or specific exploitation details that would enable third parties to replicate the attack

### 14.4 PDPA Compliance

*Clarify the Organization's and Researcher's obligations under PDPA.*

Any customer personal data encountered during testing constitutes personal data under the Personal Data Protection Act 2010. Researchers who encounter such data must comply with the data handling obligations set out in **Section 6.3** of this document. [Organization Name] will, upon request, provide guidance on PDPA compliance obligations as they apply to the Researcher's specific circumstances.

---

## 15. Non-Compliance and Disqualification

### 15.1 Grounds for Disqualification

*Define the actions that will result in immediate disqualification from the program.*

The following actions will result in **immediate disqualification** from the Bug Bounty Program, forfeiture of any pending rewards, and may result in legal action:

- Testing of out-of-scope assets
- Conducting prohibited testing activities as defined in **Section 6.2**
- Accessing, retaining, or misusing customer data or PII
- Publicly disclosing a vulnerability without written authorization
- Making extortionate demands or threatening legal action to compel reward payment
- Providing false, fabricated, or misleading information in a submission
- Circumventing the program's submission process to contact Organization employees directly about vulnerability findings
- Violating the Confidentiality Undertaking (Appendix C)
- Breaching any applicable law in connection with program participation

### 15.2 Disqualification Process

*Define how disqualification decisions are made and communicated.*

| Step | Action | Responsible |
|------|--------|-------------|
| 1 | Suspected rule violation identified and documented | Program Administrator |
| 2 | CISO and Legal Counsel notified | Program Administrator |
| 3 | Researcher suspended from program pending investigation | Program Administrator |
| 4 | Investigation conducted; findings documented | Security Team / Legal |
| 5 | Disqualification decision made with written justification | CISO |
| 6 | Researcher notified in writing of disqualification and reasons | Program Administrator |
| 7 | Law enforcement referral assessed if criminal conduct identified | Legal Counsel / CISO |

### 15.3 Appeals Process

*Define the process for a Researcher to appeal a disqualification decision.*

A Researcher who believes their disqualification was in error may submit a written appeal to [appeals contact / email] within [30] days of the disqualification notice. The appeal must include specific grounds for the appeal and supporting evidence. Appeals will be reviewed by [CISO / designated senior officer not involved in the original decision] and a final determination communicated within [20] business days. The Organization's appeal determination is final.

---

## 16. Program Review and Governance

### 16.1 Review Cycle

*Define how and when this document and the program are reviewed.*

This document shall be reviewed:

- **Annually** on or before [Annual Review Month] by the Program Owner and Program Administrator
- **Upon significant change**, including but not limited to:
  - Material changes to the Organization's technology architecture or asset inventory
  - Changes to applicable regulatory requirements (BNM RMiT, PDPA, etc.)
  - Significant security incidents related to the program
  - Changes in the threat landscape materially affecting program relevance
  - Acquisition, divestiture, or structural change affecting in-scope assets

### 16.2 Program Performance Metrics

*Define the key metrics used to assess program effectiveness.*

The Program Administrator shall report the following metrics to the [Security Steering Committee / CISO] on a [quarterly / semi-annual] basis:

| Metric | Description | Target |
|--------|-------------|--------|
| Total Submissions | Number of reports received in period | — |
| Valid Submissions | Number of reports confirmed as valid vulnerabilities | — |
| Duplicate Submissions | Number of duplicate reports received | — |
| Submission to Triage SLA Adherence | % of submissions triaged within SLA | ≥ [95%] |
| Remediation SLA Adherence (Critical) | % of Critical findings remediated within SLA | [100%] |
| Remediation SLA Adherence (High) | % of High findings remediated within SLA | ≥ [95%] |
| Average Time to Triage | Average calendar days from submission to triage | ≤ [3] days |
| Average Time to Remediation | Average calendar days from validation to remediation | Benchmark |
| Researcher Satisfaction Score | Optional: post-submission feedback metric | ≥ [4/5] |
| Total Rewards Paid (MYR) | Total monetary rewards disbursed in period | — |

### 16.3 Regulatory Reporting

*Define obligations to report program activity to BNM or other regulators.*

Findings from the Bug Bounty Program shall be incorporated into:

- The Organization's **Vulnerability Register**, maintained per RMiT requirements
- **Technology Risk Reports** submitted to the Board Risk Committee
- **BNM Supervisory Returns** where applicable and required under RMiT reporting thresholds
- **NACSA notifications** for vulnerabilities classified as affecting critical national information infrastructure (CNII), where applicable

The Compliance Officer shall assess each Critical and High severity validated finding against BNM's regulatory reporting thresholds and initiate reporting where required.

---

## 17. Review and Approval

### 17.1 Version History

*Record all versions of this document, including the changes made and the author.*

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Author Name, Title] | Initial document creation |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] |

### 17.2 Scheduled Reviews

| Review Cycle | Next Review Date | Review Owner |
|-------------|-----------------|-------------|
| Annual | [Date] | [Program Owner] |
| Triggered Review | As required | [CISO] |

### 17.3 Approval Sign-Off

*All approvers must sign this section to confirm their review and approval of this document.*

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Document Author | [Name], [Title] | _________________ | [Date] |
| Program Administrator | [Name], [Title] | _________________ | [Date] |
| Head of Cybersecurity / CISO | [Name], [Title] | _________________ | [Date] |
| Chief Technology Officer | [Name], [Title] | _________________ | [Date] |
| Chief Risk Officer | [Name], [Title] | _________________ | [Date] |
| Legal Counsel | [Name], [Title] | _________________ | [Date] |
| Compliance Officer | [Name], [Title] | _________________ | [Date] |
| [Relevant Department Head] | [Name], [Title] | _________________ | [Date] |

---

## 18. References

### 18.1 Regulatory References

| Reference | Document Title | Issuing Authority | Relevant Sections |
|-----------|--------------|------------------|------------------|
| BNM/RH/PD 028-109 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Clause 11.15 — Vulnerability Assessment and Penetration Testing |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | Sections 5–9, 40–43 |
| Act 563 | Computer Crimes Act 1997 | Parliament of Malaysia | Sections 3–6 |
| — | Guidelines on Management of Cyber Risk | Bank Negara Malaysia | All applicable sections |
| — | Business Continuity Management (BCM) | Bank Negara Malaysia | As applicable to incident scenarios |

### 18.2 Internal Policy References

| Reference | Document Title | Document ID | Version |
|-----------|--------------|-------------|---------|
| — | [Organization Name] Information Security Policy | [Doc ID] | [Version] |
| — | [Organization Name] Technology Risk Management Policy | [Doc ID] | [Version] |
| — | [Organization Name] Vulnerability Management Standard | [Doc ID] | [Version] |
| — | [Organization Name] Incident Response Policy | [Doc ID] | [Version] |
| — | [Organization Name] Third-Party Risk Management Policy | [Doc ID] | [Version] |
| — | [Organization Name] Cybersecurity Framework | [Doc ID] | [Version] |

### 18.3 External Standards and Frameworks

| Standard | Title | Issuing Body |
|----------|-------|-------------|
| CVSS v3.1 | Common Vulnerability Scoring System | FIRST |
| OWASP Testing Guide | Web Security Testing Guide (WSTG) | OWASP Foundation |
| ISO/IEC 29147 | Vulnerability Disclosure | ISO/IEC |
| ISO/IEC 30111 | Vulnerability Handling Processes | ISO/IEC |
| [NACSA CSIRT Guidelines] | [As applicable] | NACSA |

---

## 19. Appendices

### Appendix A — In-Scope Asset Detailed List

*Provide a comprehensive, versioned list of all in-scope assets, including specific API endpoints, application versions, and any asset-specific testing restrictions. This appendix should be updated whenever scope changes occur.*

| Asset ID | Asset Name | Type | URL / Identifier | Version / Build | Special Restrictions | Last Updated |
|----------|-----------|------|-----------------|----------------|---------------------|-------------|
| A-001 | [Application Name] | Web Application | [URL] | [Version] | [Restrictions] | [Date] |
| A-002 | [API Name] | REST API | [Base URL] | [Version] | [Restrictions] | [Date] |
| A-003 | [Mobile App] | iOS Application | [App ID] | [Version] | [Restrictions] | [Date] |
| [Add rows as required] | | | | | | |

*Changes to this appendix are subject to the same review and approval process as the main document.*

---

### Appendix B — Safe Harbour Agreement

*This appendix contains the formal Safe Harbour Agreement that Researchers must execute prior to commencing testing. The full text should be drafted by [Organization Name]'s Legal Counsel.*

**SAFE HARBOUR AGREEMENT**

**Between:** [Organization Name] (Registered Company No. [XXX]), a company incorporated in Malaysia ("the Organization")

**And:** [Researcher Full Name], holding identity document number [IC/Passport Number] ("the Researcher")

**Date:** [Agreement Date]

This Safe Harbour Agreement forms part of the [Organization Name] Bug Bounty Program Rules. By executing this agreement, the Researcher acknowledges and agrees to the following:

1. **Authorization:** The Organization hereby grants the Researcher limited, conditional, and revocable authorization to access and test the in-scope assets defined in the Bug Bounty Program Rules solely for the purpose of identifying and reporting security vulnerabilities.

2. **Conditions:** This authorization is conditional upon the Researcher's full compliance with the Bug Bounty Program Rules at all times.

3. **Scope:** This authorization is limited to the assets listed as in-scope in the Bug Bounty Program Rules and does not extend to any other systems or assets.

4. **No Waiver:** This authorization does not constitute a waiver of any rights or remedies the Organization may have in respect of unauthorized access to out-of-scope systems or violations of Program Rules.

5. **Governing Law:** This agreement shall be governed by and construed in accordance with the laws of Malaysia.

[Full agreement text to be drafted by Legal Counsel]

| | Researcher | Organization Representative |
|--|------------|---------------------------|
| **Name** | [Researcher Name] | [Authorized Signatory Name] |
| **Title** | — | [Title] |
| **Signature** | _________________ | _________________ |
| **Date** | [Date] | [Date] |

---

### Appendix C — Researcher Confidentiality Undertaking

*This appendix contains the Confidentiality Undertaking that governs the Researcher's obligations regarding all information encountered or disclosed during program participation. Full text to be drafted by Legal Counsel.*

**CONFIDENTIALITY UNDERTAKING**

I, [Researcher Full Name], holding identity document number [IC/Passport Number], hereby undertake to:

1. Hold all information encountered during my participation in the [Organization Name] Bug Bounty Program in strict confidence
2. Not disclose any vulnerability, technical finding, or Organization information to any third party without prior written authorization from [Organization Name]
3. Promptly delete or destroy all copies of Organization data, including any PII, upon request or upon conclusion of my program participation
4. Comply with all applicable provisions of the Personal Data Protection Act 2010 (Act 709) in connection with any personal data encountered during testing

This undertaking shall remain in force for a period of [3 years / indefinitely] following the conclusion of my program participation.

| **Researcher Name** | [Name] |
|---------------------|--------|
| **Signature** | _________________ |
| **Date** | [Date] |
| **Witnessed By** | [Witness Name, Title] |
| **Witness Signature** | _________________ |

---

### Appendix D — Blackout Period Schedule

*Maintain a rolling schedule of blackout periods during which testing must be suspended.*

| Period | Start Date/Time | End Date/Time | Reason | Notified Via | Notification Date |
|--------|----------------|--------------|--------|-------------|------------------|
| [Year-End Processing] | [Date, Time MYT] | [Date, Time MYT] | Financial year-end batch processing | [Platform] | [Date] |
| [System Maintenance Window] | [Date, Time MYT] | [Date, Time MYT] | Scheduled infrastructure maintenance | [Platform] | [Date] |
| [Add rows as required] | | | | | |

---

### Appendix E — Submission Report Template

*Provide a standardized report template that Researchers may use when documenting their findings. This reduces incomplete submissions and improves triage efficiency.*

**Bug Bounty Submission Report**

---

**Vulnerability Title:** [Descriptive title]

**Submission Date:** [Date]

**Researcher ID / Handle:** [Platform handle]

**Affected Asset:** [URL / IP / Application name]

**Vulnerability Type:** [Classification, e.g., Stored XSS / SQL Injection / IDOR]

**Researcher Severity Assessment:** [Critical / High / Medium / Low / Informational]

**CVSS v3.1 Score:** [Score] — Vector: [AV:X/AC:X/PR:X/UI:X/S:X/C:X/I:X/A:X]

---

**Description:**

[Provide a clear, detailed description of the vulnerability. Include what the vulnerability is, where it exists, and why it is a security risk.]

---

**Steps to Reproduce:**

1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Continue as required]

---

**Proof of Concept:**

[Attach screenshots, video recording, or code. Describe what each piece of evidence demonstrates.]

---

**Impact Assessment:**

[Describe the potential business, technical, and regulatory impact if this vulnerability were exploited by a malicious actor. Consider confidentiality, integrity, and availability impacts.]

---

**Suggested Remediation (Optional):**

[Provide any recommendations for fixing the vulnerability. Reference industry standards (e.g., OWASP) where applicable.]

---

**Additional Notes:**

[Any other relevant information, including tools used, testing environment details, or unusual conditions observed.]

---

### Appendix F — Escalation Contact Directory

*Maintain current contact details for all roles involved in the escalation procedures. This appendix must be updated whenever personnel changes occur.*

| Role | Name | Email | Phone | Availability |
|------|------|-------|-------|-------------|
| Program Administrator | [Name] | [email] | [number] | Business hours |
| CISO | [Name] | [email] | [number] | 24/7 for Critical |
| Head of Technology Risk | [Name] | [email] | [number] | Business hours |
| Legal Counsel | [Name] | [email] | [number] | Business hours / On-call |
| Data Protection Officer | [Name] | [email] | [number] | Business hours |
| SOC (24/7) | — | [email] | [number] | 24/7 |
| [Add as required] | | | | |

*This appendix is classified as **Restricted**. Distribution is limited to program administrators and named escalation contacts.*

---

*End of Document*

---

*This document template has been prepared for [Organization Name] in accordance with the requirements of BNM Risk Management in Technology (RMiT), Clause 11.15. All placeholder text denoted by [brackets] must be completed by the document owner prior to formal issuance. This document should be reviewed by qualified Legal Counsel before execution of Appendices B and C.*