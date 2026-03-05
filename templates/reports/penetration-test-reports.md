# Penetration Test Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Vulnerability Management Lead |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for the use of authorized personnel within [Organization Name] and its designated third-party assessors. Unauthorized disclosure, reproduction, or distribution of this document, in whole or in part, is strictly prohibited and may be subject to legal action. If you have received this document in error, please notify [Contact Name] at [Contact Email] immediately and destroy all copies.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Engagement Overview](#2-engagement-overview)
3. [Scope and Methodology](#3-scope-and-methodology)
4. [Key Findings and Observations](#4-key-findings-and-observations)
5. [Scanning Scope and Frequency](#5-scanning-scope-and-frequency)
6. [Severity Classification and SLA](#6-severity-classification-and-sla)
7. [Remediation Tracking](#7-remediation-tracking)
8. [Technical Findings — Detailed](#8-technical-findings--detailed)
9. [Risk Register Integration](#9-risk-register-integration)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

*This section provides a concise, non-technical overview of the penetration test engagement intended for senior management and board-level readers. Summarize the overall security posture, the most critical findings, and the recommended remediation priorities.*

### 1.1 Purpose of This Report

This Penetration Test Report documents the findings, observations, and recommendations arising from an independent penetration testing engagement conducted on behalf of [Organization Name] in accordance with Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.12, which mandates that licensed financial institutions conduct regular penetration testing performed by qualified independent testers.

The engagement was commissioned to evaluate the resilience of [Organization Name]'s technology infrastructure, applications, and supporting systems against realistic adversarial attack scenarios. This report is intended for use by [Organization Name]'s senior management, technology leadership, risk management function, and internal audit.

### 1.2 Engagement at a Glance

| Parameter | Details |
|---|---|
| **Engagement Title** | [Engagement Title / Reference Number] |
| **Testing Period** | [Start Date] to [End Date] |
| **Report Date** | [Report Issue Date] |
| **Conducting Organization** | [Penetration Testing Firm Name] |
| **Lead Tester** | [Lead Tester Name], [Certification(s)] |
| **Testing Type** | [Black Box / Grey Box / White Box] |
| **Engagement Type** | [Internal / External / Web Application / Mobile / API / Red Team / Combined] |
| **Test Environment** | [Production / Staging / Dedicated Test Environment] |
| **BNM RMiT Reference** | Clause 11.12 |
| **Assessment Year** | [Year] |

### 1.3 Overall Risk Rating

*Provide a single aggregate risk rating for the engagement based on the totality of findings. Justify the rating with reference to the distribution of severity findings.*

**Overall Risk Rating: [CRITICAL / HIGH / MEDIUM / LOW]**

| Severity Level | Count | % of Total |
|---|---|---|
| Critical | [#] | [%] |
| High | [#] | [%] |
| Medium | [#] | [%] |
| Low | [#] | [%] |
| Informational | [#] | [%] |
| **Total** | **[#]** | **100%** |

### 1.4 Key Findings Summary

*List the three to five most significant findings identified during the engagement. For each finding, provide the finding title, affected system, and severity. Avoid technical jargon in this section.*

1. **[Finding Title 1]** — Severity: [Critical/High/Medium/Low] — Affected System: [System/Component]
   *Brief non-technical description of the finding and its potential business impact.*

2. **[Finding Title 2]** — Severity: [Critical/High/Medium/Low] — Affected System: [System/Component]
   *Brief non-technical description of the finding and its potential business impact.*

3. **[Finding Title 3]** — Severity: [Critical/High/Medium/Low] — Affected System: [System/Component]
   *Brief non-technical description of the finding and its potential business impact.*

4. **[Finding Title 4]** — Severity: [Critical/High/Medium/Low] — Affected System: [System/Component]
   *Brief non-technical description of the finding and its potential business impact.*

5. **[Finding Title 5]** — Severity: [Critical/High/Medium/Low] — Affected System: [System/Component]
   *Brief non-technical description of the finding and its potential business impact.*

### 1.5 Comparison to Previous Engagement

*Where applicable, compare the findings of the current engagement to those of the previous penetration test to demonstrate progress in remediation and identify any regression in security posture.*

| Metric | Previous Engagement ([Year]) | Current Engagement ([Year]) | Trend |
|---|---|---|---|
| Total Findings | [#] | [#] | [↑ / ↓ / →] |
| Critical Findings | [#] | [#] | [↑ / ↓ / →] |
| High Findings | [#] | [#] | [↑ / ↓ / →] |
| Medium Findings | [#] | [#] | [↑ / ↓ / →] |
| Low Findings | [#] | [#] | [↑ / ↓ / →] |
| Remediated from Prior Cycle | N/A | [#] | — |
| Recurrent (Unresolved) Findings | N/A | [#] | — |

### 1.6 Management Response

*Senior management or the CTO/CISO should provide a brief formal response to the findings, confirming awareness and commitment to remediation. This section should be completed after management review of the full report.*

> [Organization Name] management has reviewed the findings presented in this Penetration Test Report. We acknowledge the identified vulnerabilities and are committed to implementing the recommended remediation actions in accordance with the severity-based SLA timelines defined in Section 6 of this report. A formal remediation plan has been initiated and will be tracked through [Remediation Tracking System / Vulnerability Management Platform].
>
> **Signed:**
> [Name], [Title]
> [Date]

---

## 2. Engagement Overview

*This section provides full context for the engagement, including the contractual basis, personnel involved, rules of engagement, and any constraints or limitations that affected the scope or depth of testing.*

### 2.1 Engagement Authorization

*Document the formal authorization for the penetration test. All penetration tests must be formally authorized before commencement. Attach the signed Authorization Letter or Rules of Engagement document in Appendix A.*

| Authorization Parameter | Details |
|---|---|
| **Authorization Letter Reference** | [Reference Number] |
| **Date of Authorization** | [Date] |
| **Authorized By (Organization)** | [Name, Title] |
| **Authorized By (Testing Firm)** | [Name, Title] |
| **Statement of Work Reference** | [SOW Reference Number] |
| **Contract / Purchase Order Number** | [PO Number] |

This engagement was formally authorized in writing by [Authorized Signatory Name], [Title], of [Organization Name] on [Date]. The testing firm, [Testing Firm Name], was engaged through [Procurement Process] in accordance with [Organization Name]'s vendor management and third-party risk management policies.

### 2.2 Testing Team

*List all personnel from the testing firm who participated in the engagement. Include relevant certifications to demonstrate competence as required by BNM RMiT Clause 11.12.*

| Name | Role | Certifications | Organization |
|---|---|---|---|
| [Tester Name 1] | Engagement Lead | [e.g., OSCP, CREST CRT, CEH] | [Testing Firm] |
| [Tester Name 2] | Web Application Tester | [e.g., OSCP, GWEB] | [Testing Firm] |
| [Tester Name 3] | Network Penetration Tester | [e.g., OSCP, GPEN] | [Testing Firm] |
| [Tester Name 4] | Mobile Application Tester | [e.g., GWAPT, CMPT] | [Testing Firm] |
| [Tester Name 5] | Report Author / QA | [e.g., CISM, CISSP] | [Testing Firm] |

**Independence Confirmation:** The testing organization and all named testers confirm that they have no conflicts of interest with [Organization Name] and that this engagement was conducted with full independence as required by BNM RMiT Clause 11.12.

### 2.3 Internal Stakeholders

*List the key internal stakeholders from [Organization Name] who were involved in the engagement.*

| Name | Role | Department | Responsibility in Engagement |
|---|---|---|---|
| [Name] | [Title] | IT Security / Vulnerability Management | Engagement Owner |
| [Name] | [Title] | IT Infrastructure | Technical Point of Contact |
| [Name] | [Title] | Application Development | Application Context & Support |
| [Name] | [Title] | IT Operations | Environment Access |
| [Name] | [Title] | Risk Management | Risk Register Integration |
| [Name] | [Title] | Internal Audit | Oversight and Assurance |

### 2.4 Engagement Timeline

*Document the key milestones of the engagement from initiation to report delivery.*

| Phase | Activity | Start Date | End Date | Status |
|---|---|---|---|---|
| 1 | Pre-engagement Planning & Scoping | [Date] | [Date] | [Complete / In Progress] |
| 2 | Rules of Engagement Finalization | [Date] | [Date] | [Complete / In Progress] |
| 3 | Reconnaissance / Information Gathering | [Date] | [Date] | [Complete / In Progress] |
| 4 | Active Testing — External Perimeter | [Date] | [Date] | [Complete / In Progress] |
| 5 | Active Testing — Internal Network | [Date] | [Date] | [Complete / In Progress] |
| 6 | Active Testing — Web Applications | [Date] | [Date] | [Complete / In Progress] |
| 7 | Active Testing — Mobile Applications | [Date] | [Date] | [Complete / In Progress] |
| 8 | Active Testing — APIs | [Date] | [Date] | [Complete / In Progress] |
| 9 | Post-exploitation / Privilege Escalation | [Date] | [Date] | [Complete / In Progress] |
| 10 | Clean-up & Remediation of Test Artefacts | [Date] | [Date] | [Complete / In Progress] |
| 11 | Draft Report Preparation | [Date] | [Date] | [Complete / In Progress] |
| 12 | Draft Report Review (Internal) | [Date] | [Date] | [Complete / In Progress] |
| 13 | Final Report Issuance | [Date] | [Date] | [Complete / In Progress] |

### 2.5 Rules of Engagement

*Summarize the agreed rules of engagement (RoE) that governed the conduct of the test. The full RoE document should be attached as Appendix B.*

The following rules of engagement were agreed upon prior to commencement of testing:

- **Testing Window:** Active testing was permitted between [Time] and [Time] on [Days of Week] to minimize operational impact.
- **Out-of-Scope Systems:** The following systems were explicitly excluded from testing: [List of excluded systems, IP ranges, or domains].
- **Destructive Testing:** Destructive or denial-of-service testing was [permitted / not permitted] during this engagement.
- **Data Handling:** Testers were prohibited from exfiltrating, retaining, or transmitting any live customer or sensitive organizational data discovered during testing. Any discovered sensitive data was documented by reference only.
- **Notification Protocol:** In the event of discovery of a Critical vulnerability, the testing team was required to notify [Contact Name] at [Contact Email/Phone] immediately, prior to continued exploitation.
- **Emergency Stop Procedure:** Testing could be halted immediately upon request by [Authorized Contacts]. The designated emergency contact was [Name] at [Phone Number].
- **Credential Handling:** All credentials provided or discovered during testing were handled in accordance with [Testing Firm]'s data handling policy and were not retained beyond the engagement.
- **Physical Access:** Physical access to [Organization Name] facilities was [granted / not granted] for this engagement.

### 2.6 Limitations and Constraints

*Document any limitations, constraints, or deviations from the original scope that may affect the completeness of the assessment. These should be considered when interpreting the findings.*

| Constraint | Description | Impact on Assessment |
|---|---|---|
| [Constraint 1] | [Description of constraint, e.g., certain systems unavailable during testing window] | [Impact, e.g., limited coverage of X systems] |
| [Constraint 2] | [Description] | [Impact] |
| [Constraint 3] | [Description] | [Impact] |

> **Note:** The findings in this report represent the vulnerabilities and weaknesses identified within the defined scope and testing window. The absence of a finding for a particular system or component does not constitute a guarantee of security for that system or component.

---

## 3. Scope and Methodology

*This section defines exactly what was tested and how testing was conducted. A well-defined scope is critical for regulatory compliance and for ensuring reproducibility of findings in subsequent engagements.*

### 3.1 Testing Scope

#### 3.1.1 In-Scope Systems and Assets

*List all systems, applications, IP ranges, domains, and components that were explicitly included in the scope of this engagement.*

**External Perimeter:**

| Asset | Type | IP Address / URL | Notes |
|---|---|---|---|
| [Asset Name] | [Web Application / API / Network Device] | [IP or URL] | [Any relevant notes] |
| [Asset Name] | [Type] | [IP or URL] | [Notes] |
| [Asset Name] | [Type] | [IP or URL] | [Notes] |

**Internal Network:**

| Asset | Type | IP Range / VLAN | Notes |
|---|---|---|---|
| [Asset Name] | [Server / Network Device / Endpoint] | [IP Range] | [Any relevant notes] |
| [Asset Name] | [Type] | [IP Range] | [Notes] |
| [Asset Name] | [Type] | [IP Range] | [Notes] |

**Web Applications:**

| Application Name | URL / Endpoint | Technology Stack | User Roles Tested |
|---|---|---|---|
| [App Name] | [URL] | [e.g., React, Node.js, PostgreSQL] | [e.g., Unauthenticated, Customer, Admin] |
| [App Name] | [URL] | [Stack] | [Roles] |

**Mobile Applications:**

| Application Name | Platform | Version | App Store ID |
|---|---|---|---|
| [App Name] | [iOS / Android / Both] | [Version] | [ID] |

**APIs:**

| API Name | Endpoint Base URL | Authentication Method | API Specification Provided |
|---|---|---|---|
| [API Name] | [Base URL] | [OAuth2 / API Key / JWT] | [Yes / No] |

#### 3.1.2 Out-of-Scope Systems and Assets

*Explicitly document systems and assets that were excluded from testing to avoid any ambiguity.*

The following assets were explicitly excluded from the scope of this engagement:

| Asset | Reason for Exclusion |
|---|---|
| [Asset Name] | [e.g., Shared infrastructure managed by third party; testing requires separate authorization] |
| [Asset Name] | [e.g., Production payment processing systems; dedicated separate engagement scheduled] |
| [Asset Name] | [Reason] |

### 3.2 Testing Methodology

*Describe the testing methodology, frameworks, and standards applied during the engagement. Reference recognized industry standards to demonstrate the rigor of the approach.*

This engagement was conducted in accordance with the following industry-recognized methodologies and standards:

| Standard / Framework | Version / Edition | Application in This Engagement |
|---|---|---|
| OWASP Testing Guide (OTG) | [Version] | Web application and API testing |
| PTES (Penetration Testing Execution Standard) | [Version] | Overall engagement structure |
| OWASP Mobile Security Testing Guide (MSTG) | [Version] | Mobile application testing |
| NIST SP 800-115 | [Edition] | Technical information security testing |
| CVSS (Common Vulnerability Scoring System) | [v3.1 / v4.0] | Vulnerability severity scoring |
| [Additional Standard] | [Version] | [Application] |

#### 3.2.1 Testing Phases

The engagement followed a structured multi-phase approach:

**Phase 1 — Reconnaissance and Information Gathering**

*Describe the reconnaissance activities performed, including passive and active information gathering techniques.*

- Passive reconnaissance: Open-source intelligence (OSINT) gathering, DNS enumeration, certificate transparency log analysis, public code repository review.
- Active reconnaissance: Port scanning, service enumeration, banner grabbing, technology fingerprinting.
- Tools used: [List tools, e.g., Nmap, Shodan, theHarvester, Amass]

**Phase 2 — Vulnerability Identification**

*Describe how vulnerabilities were identified, including automated scanning and manual testing.*

- Automated vulnerability scanning using [Tool Names].
- Manual testing for logic flaws, authentication weaknesses, authorization bypass, and business logic vulnerabilities.
- Configuration review for identified services and platforms.

**Phase 3 — Exploitation**

*Describe the controlled exploitation of identified vulnerabilities to demonstrate actual risk.*

- Controlled exploitation of identified vulnerabilities to validate findings and assess exploitability.
- Exploitation was conducted with care to avoid system disruption or data loss.
- All exploitation activities were logged and are detailed in the findings sections.

**Phase 4 — Post-Exploitation and Lateral Movement**

*Describe any post-exploitation activities conducted to assess the depth of access achievable following initial compromise.*

- Following successful exploitation of entry points, post-exploitation activities were conducted to assess the potential for lateral movement and privilege escalation.
- Activities included: [e.g., credential harvesting from memory, pivoting to internal network segments, Active Directory enumeration].

**Phase 5 — Reporting**

- Findings were documented, validated, and risk-rated using CVSS v[Version].
- Draft report was prepared and shared with [Organization Name] for technical review prior to final issuance.

#### 3.2.2 Testing Approach

| Test Type | Approach Used | Justification |
|---|---|---|
| External Network | Black Box | Simulates external attacker with no prior knowledge |
| Internal Network | Grey Box | Simulates insider threat or compromised account scenario |
| Web Application | Grey Box | Authenticated and unauthenticated testing |
| Mobile Application | Grey Box | Application binary and runtime analysis |
| API | White Box | API documentation and credentials provided |

### 3.3 Tools and Technologies

*List the primary tools used during the engagement. This information supports reproducibility and demonstrates the technical rigor of the assessment.*

| Tool | Version | Purpose | Phase Used |
|---|---|---|---|
| Nmap | [Version] | Network discovery and port scanning | Reconnaissance |
| Nessus / Qualys / OpenVAS | [Version] | Automated vulnerability scanning | Vulnerability Identification |
| Burp Suite Professional | [Version] | Web application testing and proxy | Exploitation |
| Metasploit Framework | [Version] | Exploitation framework | Exploitation |
| Nikto | [Version] | Web server scanning | Vulnerability Identification |
| SQLMap | [Version] | SQL injection testing | Exploitation |
| OWASP ZAP | [Version] | Web application scanning | Vulnerability Identification |
| Hydra / Medusa | [Version] | Credential brute-forcing | Exploitation |
| John the Ripper / Hashcat | [Version] | Password cracking | Post-Exploitation |
| Mimikatz | [Version] | Credential extraction (Windows) | Post-Exploitation |
| BloodHound / SharpHound | [Version] | Active Directory enumeration | Post-Exploitation |
| Frida | [Version] | Mobile application dynamic analysis | Exploitation |
| MobSF | [Version] | Mobile application static analysis | Vulnerability Identification |
| [Additional Tool] | [Version] | [Purpose] | [Phase] |

---

## 4. Key Findings and Observations

*This section presents a consolidated summary of all findings and observations identified during the engagement. Detailed technical write-ups for each finding are provided in Section 8.*

### 4.1 Findings Summary Dashboard

*Provide a visual or tabular overview of the distribution and nature of findings to aid management understanding.*

**Finding Distribution by Severity:**

| Severity | Count | Percentage | Status |
|---|---|---|---|
| Critical | [#] | [%] | [Findings list by ID] |
| High | [#] | [%] | [Findings list by ID] |
| Medium | [#] | [%] | [Findings list by ID] |
| Low | [#] | [%] | [Findings list by ID] |
| Informational | [#] | [%] | [Findings list by ID] |
| **Total** | **[#]** | **100%** | |

**Finding Distribution by Asset Category:**

| Asset Category | Critical | High | Medium | Low | Info | Total |
|---|---|---|---|---|---|---|
| External Perimeter | [#] | [#] | [#] | [#] | [#] | [#] |
| Internal Network | [#] | [#] | [#] | [#] | [#] | [#] |
| Web Applications | [#] | [#] | [#] | [#] | [#] | [#] |
| Mobile Applications | [#] | [#] | [#] | [#] | [#] | [#] |
| APIs | [#] | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

**Finding Distribution by Vulnerability Category (OWASP Top 10 / CWE):**

| Vulnerability Category | Count | Severity (Highest) |
|---|---|---|
| Injection (SQL, Command, LDAP) | [#] | [Severity] |
| Broken Authentication | [#] | [Severity] |
| Sensitive Data Exposure | [#] | [Severity] |
| XML External Entities (XXE) | [#] | [Severity] |
| Broken Access Control | [#] | [Severity] |
| Security Misconfiguration | [#] | [Severity] |
| Cross-Site Scripting (XSS) | [#] | [Severity] |
| Insecure Deserialization | [#] | [Severity] |
| Using Components with Known Vulnerabilities | [#] | [Severity] |
| Insufficient Logging and Monitoring | [#] | [Severity] |
| [Other Category] | [#] | [Severity] |

### 4.2 Consolidated Findings Table

*This table provides a single reference for all findings identified during the engagement. Each finding is cross-referenced to its detailed write-up in Section 8.*

| Finding ID | Title | Severity | CVSS Score | Affected Asset | Category | Section Ref | Remediation SLA |
|---|---|---|---|---|---|---|---|
| PT-[YYYY]-001 | [Finding Title] | Critical | [Score] | [Asset] | [Category] | §8.1 | [SLA per §6] |
| PT-[YYYY]-002 | [Finding Title] | Critical | [Score] | [Asset] | [Category] | §8.2 | [SLA per §6] |
| PT-[YYYY]-003 | [Finding Title] | High | [Score] | [Asset] | [Category] | §8.3 | [SLA per §6] |
| PT-[YYYY]-004 | [Finding Title] | High | [Score] | [Asset] | [Category] | §8.4 | [SLA per §6] |
| PT-[YYYY]-005 | [Finding Title] | High | [Score] | [Asset] | [Category] | §8.5 | [SLA per §6] |
| PT-[YYYY]-006 | [Finding Title] | Medium | [Score] | [Asset] | [Category] | §8.6 | [SLA per §6] |
| PT-[YYYY]-007 | [Finding Title] | Medium | [Score] | [Asset] | [Category] | §8.7 | [SLA per §6] |
| PT-[YYYY]-008 | [Finding Title] | Medium | [Score] | [Asset] | [Category] | §8.8 | [SLA per §6] |
| PT-[YYYY]-009 | [Finding Title] | Low | [Score] | [Asset] | [Category] | §8.9 | [SLA per §6] |
| PT-[YYYY]-010 | [Finding Title] | Informational | N/A | [Asset] | [Category] | §8.10 | Best Effort |

### 4.3 Key Observations

*In addition to specific exploitable vulnerabilities, document broader observations about [Organization Name]'s security posture that emerged during the engagement. These do not necessarily constitute individual findings but provide important context.*

#### 4.3.1 Security Strengths Observed

*Document positive security controls and practices observed during the engagement. Acknowledging strengths provides a balanced assessment and recognizes effective security investments.*

- **[Strength 1]:** [Description of a security control or practice that was found to be effective, e.g., "Multi-factor authentication was consistently enforced across all externally facing applications."]
- **[Strength 2]:** [Description]
- **[Strength 3]:** [Description]
- **[Strength 4]:** [Description]

#### 4.3.2 Security Weaknesses and Risk Areas

*Document recurring themes, systemic weaknesses, or risk areas that cut across multiple findings. These should inform strategic remediation planning.*

- **[Weakness Theme 1]:** [Description of a systemic issue, e.g., "Patch management processes appear inconsistent across server classes, with multiple critical patches outstanding on production systems."]
- **[Weakness Theme 2]:** [Description]
- **[Weakness Theme 3]:** [Description]

#### 4.3.3 Notable Attack Chains

*Describe any multi-step attack chains identified where the combination of lower-severity vulnerabilities could result in a higher-impact outcome.*

**Attack Chain 1: [Attack Chain Title]**

*Example: Unauthenticated access to administrative interface via [Finding PT-[YYYY]-00X] combined with default credentials [Finding PT-[YYYY]-00X] enabled full administrative compromise of [System].*

| Step | Finding ID | Action | Outcome |
|---|---|---|---|
| 1 | PT-[YYYY]-00X | [Action taken] | [Intermediate outcome] |
| 2 | PT-[YYYY]-00X | [Action taken] | [Intermediate outcome] |
| 3 | PT-[YYYY]-00X | [Action taken] | [Final outcome] |
| **Impact** | — | — | [Business impact of full chain] |

---

## 5. Scanning Scope and Frequency

*This section documents the scanning activities performed as part of the engagement and places the penetration test within the broader context of [Organization Name]'s vulnerability management programme, including ongoing scanning cadence as required under BNM RMiT.*

### 5.1 Scanning Programme Overview

*Describe how penetration testing fits within [Organization Name]'s overall vulnerability scanning programme. BNM RMiT Clause 11.12 requires both penetration testing and regular vulnerability scanning as complementary activities.*

[Organization Name] maintains an ongoing vulnerability management programme that includes both continuous automated vulnerability scanning and periodic manual penetration testing. The relationship between these activities is as follows:

| Activity | Frequency | Scope | Automated / Manual | Owner |
|---|---|---|---|---|
| External Vulnerability Scanning | [Daily / Weekly / Monthly] | All external-facing assets | Automated | [Team] |
| Internal Vulnerability Scanning | [Weekly / Monthly] | All internal assets | Automated | [Team] |
| Web Application Scanning (DAST) | [Monthly / Per Release] | All web applications | Automated | [Team] |
| Penetration Testing — External | Annual (minimum) | Defined scope per RoE | Manual (Independent) | Vulnerability Management |
| Penetration Testing — Internal | Annual (minimum) | Defined scope per RoE | Manual (Independent) | Vulnerability Management |
| Red Team Exercise | [Biennial / As required] | Full estate | Manual (Independent) | CISO |

### 5.2 Scope of This Engagement's Scanning Activities

#### 5.2.1 Network Scanning

*Document the IP ranges and network segments subjected to scanning during this engagement.*

| Network Segment | IP Range / CIDR | Scan Type | Scan Date | Hosts Discovered | Hosts Scanned |
|---|---|---|---|---|---|
| [Segment Name] | [IP Range] | [Full / SYN / UDP] | [Date] | [#] | [#] |
| [Segment Name] | [IP Range] | [Scan Type] | [Date] | [#] | [#] |
| [Segment Name] | [IP Range] | [Scan Type] | [Date] | [#] | [#] |

**Network Scanning Coverage:**
- **Total in-scope IP addresses:** [#]
- **Total hosts discovered (responding):** [#]
- **Total hosts successfully scanned:** [#]
- **Scan coverage rate:** [%]
- **Hosts not reachable / excluded:** [#] — Reason: [Reason]

#### 5.2.2 Web Application Scanning

*Document the web applications subjected to automated scanning.*

| Application | URL | Scanner Used | Scan Date | Authenticated | Findings Generated |
|---|---|---|---|---|---|
| [App Name] | [URL] | [Scanner] | [Date] | [Yes / No] | [#] |
| [App Name] | [URL] | [Scanner] | [Date] | [Yes / No] | [#] |

#### 5.2.3 Scanning Frequency Against BNM RMiT Requirements

*Confirm compliance with the scanning frequency requirements prescribed by BNM RMiT and [Organization Name]'s internal vulnerability management policy.*

| Requirement | Frequency Required | [Organization Name] Frequency | Compliant? | Evidence |
|---|---|---|---|---|
| External Penetration Test | Annually | [Frequency] | [Yes / No / Partial] | [Reference] |
| Internal Penetration Test | Annually | [Frequency] | [Yes / No / Partial] | [Reference] |
| External Vulnerability Scan | [Per policy] | [Frequency] | [Yes / No / Partial] | [Reference] |
| Internal Vulnerability Scan | [Per policy] | [Frequency] | [Yes / No / Partial] | [Reference] |
| Application Security Testing | Per major release | [Frequency] | [Yes / No / Partial] | [Reference] |

### 5.3 Coverage Gaps

*Document any systems or network segments that were not covered by scanning activities during this or previous engagements, and provide a rationale and plan to address gaps.*

| Coverage Gap | System / Segment | Reason for Gap | Planned Resolution | Target Date |
|---|---|---|---|---|
| [Gap 1] | [System] | [Reason] | [Resolution] | [Date] |
| [Gap 2] | [System] | [Reason] | [Resolution] | [Date] |

---

## 6. Severity Classification and SLA

*This section defines the severity rating framework applied to findings in this report and the associated remediation SLAs. Adherence to these SLAs is required for compliance with BNM RMiT Clause 11.12 and [Organization Name]'s vulnerability management policy.*

### 6.1 Severity Classification Framework

*All findings in this report are rated using the Common Vulnerability Scoring System (CVSS) v[3.1 / 4.0] as the primary scoring mechanism, supplemented by qualitative assessment of business context and exploitability.*

#### 6.1.1 CVSS Score Ranges and Severity Mapping

| Severity Level | CVSS Score Range | Colour Code | Definition |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Red | Vulnerabilities that can be exploited remotely without authentication, result in full system compromise, significant data breach, or direct financial impact. Immediate escalation required. |
| **High** | 7.0 – 8.9 | Orange | Vulnerabilities that are relatively easy to exploit and could result in significant data exposure, loss of confidentiality, integrity, or availability of critical systems. |
| **Medium** | 4.0 – 6.9 | Yellow | Vulnerabilities that require some conditions to exploit or result in limited impact. These should be addressed within the standard remediation cycle. |
| **Low** | 0.1 – 3.9 | Blue | Vulnerabilities with limited exploitability or impact, often requiring significant pre-conditions. These should be addressed as part of ongoing maintenance. |
| **Informational** | N/A | Grey | Observations and best-practice recommendations that do not represent an exploitable vulnerability but may contribute to improved security posture. |

#### 6.1.2 Business Context Adjustment

*Where the CVSS score does not fully reflect the business impact due to [Organization Name]'s specific context, the severity may be adjusted upward or downward. All adjustments must be documented with justification.*

| Adjustment Factor | Description | Effect on Rating |
|---|---|---|
| Data Classification | Finding affects systems processing customer financial data, PII, or regulated data | May increase severity |
| Regulatory Exposure | Exploitation could directly result in regulatory breach (BNM RMiT, PDPA) | May increase severity |
| Business Criticality | Affected system is mission-critical (e.g., core banking, payment processing) | May increase severity |
| Compensating Controls | Effective compensating controls reduce exploitability or impact | May decrease severity |
| Network Isolation | Affected system is in isolated network segment with limited exposure | May decrease severity |

### 6.2 Remediation SLA Framework

*Remediation SLAs define the maximum permissible time from finding notification to confirmed remediation. These SLAs apply from the date of this report's formal issuance.*

| Severity Level | Remediation SLA | Escalation Point | Acceptance Criteria |
|---|---|---|---|
| **Critical** | 24 hours (temporary mitigation) / 7 calendar days (full remediation) | CISO + Senior Management immediately | Vulnerability confirmed remediated by independent verification or evidence-based closure |
| **High** | 30 calendar days | Vulnerability Management Lead + IT Manager | Vulnerability confirmed remediated or formally risk-accepted with compensating controls |
| **Medium** | 90 calendar days | Vulnerability Management Lead | Vulnerability confirmed remediated or formally risk-accepted |
| **Low** | 180 calendar days | IT Security Team | Vulnerability confirmed remediated or scheduled in maintenance backlog |
| **Informational** | Best effort / Next scheduled maintenance | IT Security Team | Addressed at discretion of system owner |

> **Note:** Where remediation within the prescribed SLA is not feasible due to technical or operational constraints, a formal **Risk Acceptance** must be completed and approved in accordance with [Organization Name]'s Risk Management Policy. Unapproved SLA breaches must be escalated to the CISO and reported to the Board Risk Committee.

### 6.3 Temporary Mitigation vs. Full Remediation

*For Critical and High findings where full remediation cannot be achieved within the SLA, a temporary mitigation may be accepted as an interim measure. The following criteria apply.*

| Finding Severity | Temporary Mitigation Acceptable? | Requirements for Temporary Mitigation Acceptance |
|---|---|---|
| Critical | Yes, for maximum 7 days pending full remediation | Written approval from CISO; compensating control must demonstrably reduce exploitability; full remediation plan with date required |
| High | Yes, for maximum 30 days pending full remediation | Written approval from Vulnerability Management Lead; documented compensating controls; full remediation plan with date required |
| Medium | No — direct to full remediation | N/A |
| Low | No — direct to full remediation or risk acceptance | N/A |

### 6.4 Risk Acceptance Process

*Where remediation is not technically or commercially feasible, findings may be formally risk-accepted.*

Formal risk acceptance requires:

1. Written justification from the system/application owner documenting the reason remediation is not feasible.
2. Documentation of compensating controls currently in place.
3. Approval from [Approval Authority based on severity, e.g., CISO for Critical/High; IT Manager for Medium/Low].
4. Recording in the [Organization Name] Risk Register with a defined review date (maximum 12 months).
5. Communication to Internal Audit for tracking purposes.

Risk acceptance does NOT remove the finding from active tracking. All risk-accepted findings remain in the remediation register with a status of **"Risk Accepted"** and are subject to re-assessment at the next penetration test.

### 6.5 SLA Compliance Status — Current Findings

*Provide the SLA compliance status for all current-cycle findings.*

| Finding ID | Severity | SLA (Days) | Report Issue Date | SLA Due Date | Current Status | Days to SLA / Overdue |
|---|---|---|---|---|---|---|
| PT-[YYYY]-001 | Critical | 7 | [Date] | [Date] | [Open / In Progress / Remediated] | [#] |
| PT-[YYYY]-002 | Critical | 7 | [Date] | [Date] | [Open / In Progress / Remediated] | [#] |
| PT-[YYYY]-003 | High | 30 | [Date] | [Date] | [Open / In Progress / Remediated] | [#] |
| PT-[YYYY]-004 | High | 30 | [Date] | [Date] | [Open / In Progress / Remediated] | [#] |
| PT-[YYYY]-005 | Medium | 90 | [Date] | [Date] | [Open / In Progress / Remediated] | [#] |

---

## 7. Remediation Tracking

*This section provides the master remediation tracking register for all findings identified in this report. It serves as the primary tool for managing the remediation lifecycle from identification to closure and is subject to regular review by the Vulnerability Management Lead.*

### 7.1 Remediation Tracking Register

*Update this register at each review cycle to reflect current remediation status. The register must be reviewed at minimum monthly and submitted to the CISO quarterly until all Critical and High findings are closed.*

| Finding ID | Title | Severity | Assigned To | Target Remediation Date | Current Status | Last Updated | Verification Method | Verified By | Close Date |
|---|---|---|---|---|---|---|---|---|---|
| PT-[YYYY]-001 | [Title] | Critical | [Name/Team] | [Date] | [Open / In Progress / Pending Verification / Closed / Risk Accepted] | [Date] | [Re-test / Evidence Review] | [Name] | [Date] |
| PT-[YYYY]-002 | [Title] | Critical | [Name/Team] | [Date] | [Status] | [Date] | [Method] | [Name] | [Date] |
| PT-[YYYY]-003 | [Title] | High | [Name/Team] | [Date] | [Status] | [Date] | [Method] | [Name] | [Date] |
| PT-[YYYY]-004 | [Title] | High | [Name/Team] | [Date] | [Status] | [Date] | [Method] | [Name] | [Date] |
| PT-[YYYY]-005 | [Title] | Medium | [Name/Team] | [Date] | [Status] | [Date] | [Method] | [Name] | [Date] |
| PT-[YYYY]-006 | [Title] | Medium | [Name/Team] | [Date] | [Status] | [Date] | [Method] | [Name] | [Date] |
| PT-[YYYY]-007 | [Title] | Low | [Name/Team] | [Date] | [Status] | [Date] | [Method] | [Name] | [Date] |
| PT-[YYYY]-008 | [Title] | Informational | [Name/Team] | Best Effort | [Status] | [Date] | [Method] | [Name] | [Date] |

**Register Status Key:**

| Status | Definition |
|---|---|
| Open | Finding has been acknowledged; remediation work has not yet commenced |
| In Progress | Remediation work is actively underway |
| Pending Verification | Remediation has been completed by the owner; awaiting independent verification |
| Closed | Remediation has been independently verified as complete |
| Risk Accepted | Formal risk acceptance has been approved; finding remains open as risk-accepted |
| Deferred | Remediation has been formally deferred with CISO approval and a revised target date |

### 7.2 Remediation Status Summary

*Provide a snapshot of the current remediation status across all findings.*

| Status | Critical | High | Medium | Low | Informational | Total |
|---|---|---|---|---|---|---|
| Open | [#] | [#] | [#] | [#] | [#] | [#] |
| In Progress | [#] | [#] | [#] | [#] | [#] | [#] |
| Pending Verification | [#] | [#] | [#] | [#] | [#] | [#] |
| Closed | [#] | [#] | [#] | [#] | [#] | [#] |
| Risk Accepted | [#] | [#] | [#] | [#] | [#] | [#] |
| Deferred | [#] | [#] | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

### 7.3 Carryover Findings from Previous Engagement

*Document any findings from the previous penetration test engagement that remain unresolved and have been re-identified in the current engagement. Repeated findings represent elevated risk and must be escalated.*

| Prior Finding ID | Current Finding ID | Title | Original Severity | Current Severity | Periods Open | Escalated? | Justification for Non-Remediation |
|---|---|---|---|---|---|---|---|
| PT-[YYYY-1]-00X | PT-[YYYY]-00X | [Title] | [Severity] | [Severity] | [#] | [Yes / No] | [Justification] |
| PT-[YYYY-1]-00X | PT-[YYYY]-00X | [Title] | [Severity] | [Severity] | [#] | [Yes / No] | [Justification] |

> **Escalation Requirement:** Any finding that has remained unresolved for two or more consecutive annual penetration tests (regardless of risk acceptance) must be escalated to the Board Risk Committee for awareness and formal disposition.

### 7.4 Remediation Verification Approach

*Describe the process by which remediation of findings will be verified.*

Remediation of findings will be verified through one of the following methods, dependent on finding severity:

| Severity | Verification Method | Verifier | Documentation Required |
|---|---|---|---|
| Critical | Independent re-test by penetration testing firm or internal red team | [Testing Firm / Internal Red Team] | Re-test report; confirmation evidence |
| High | Independent re-test or documented evidence review | [Testing Firm / Vulnerability Management Lead] | Evidence package (screenshots, configuration export, patch records) |
| Medium | Evidence review by Vulnerability Management Lead | Vulnerability Management Lead | Evidence package |
| Low | Self-attestation with evidence | System / Application Owner | Screenshot or configuration evidence |
| Informational | Self-attestation | System / Application Owner | Brief written confirmation |

### 7.5 Remediation Reporting Schedule

*Define the schedule for remediation status reporting to ensure management oversight.*

| Report | Frequency | Recipient | Prepared By |
|---|---|---|---|
| Critical Finding Status Update | Daily until resolved | CISO, IT Manager | Vulnerability Management Lead |
| Remediation Status Report | Monthly | CISO, IT Management | Vulnerability Management Lead |
| Quarterly Penetration Test Status Summary | Quarterly | Board Risk Committee | CISO |
| Annual Penetration Test Completion Report | Annual | Board Audit Committee | CISO / Head of IT |

---

## 8. Technical Findings — Detailed

*This section contains the full technical write-up for each finding identified during the engagement. Each finding is documented according to a standardized template to support consistent communication, remediation, and audit review.*

> **Note to Authors:** Duplicate the finding template below (§8.X) for each individual finding identified. Number findings sequentially as PT-[YYYY]-001, PT-[YYYY]-002, etc. Organize findings within each section by descending severity.

---

### 8.1 Finding PT-[YYYY]-001: [Finding Title]

#### Finding Identification

| Field | Details |
|---|---|
| **Finding ID** | PT-[YYYY]-001 |
| **Title** | [Finding Title] |
| **Severity** | **[CRITICAL / HIGH / MEDIUM / LOW / INFORMATIONAL]** |
| **CVSS Score** | [Score] (CVSS:3.1/AV:[]/AC:[]/PR:[]/UI:[]/S:[]/C:[]/I:[]/A:[]) |
| **CWE Reference** | CWE-[Number]: [CWE Name] |
| **CVE Reference** | CVE-[YYYY-NNNNN] (if applicable) |
| **Affected Asset(s)** | [System / Application / Component Name] |
| **Affected URL / IP** | [URL or IP Address] |
| **Discovery Date** | [Date] |
| **Remediation SLA** | [Date based on §6.2] |

#### Description

*Provide a clear, technically precise description of the vulnerability. Explain what the vulnerability is, where it exists, and why it is a security risk. Include the root cause if known.*

[Detailed description of the vulnerability. Explain the technical nature of the issue, the root cause, and why it represents a security risk. Reference applicable CWE, CVE, or OWASP category where relevant.]

#### Evidence

*Provide reproducible evidence of the vulnerability. Include screenshots, request/response captures, command output, or other artefacts that demonstrate the finding. Redact or mask any sensitive data (e.g., actual credentials, PII) in evidence.*

**Step 1: [Description of step]**

```
[Command or request used]
```

**Output / Response:**

```
[Relevant output or response demonstrating the vulnerability. Redact sensitive data.]
```

**Figure [X]:** [Description of screenshot — attach screenshot in Appendix D]

**Step 2: [Description of step]**

```
[Command or request used]
```

#### Impact

*Describe the potential business, technical, and regulatory impact of exploitation. Quantify impact where possible.*

- **Confidentiality Impact:** [Description, e.g., "Exploitation could allow an unauthenticated attacker to access all customer account data stored in the database."]
- **Integrity Impact:** [Description]
- **Availability Impact:** [Description]
- **Business Impact:** [Description, e.g., financial loss, reputational damage, regulatory penalty]
- **Regulatory Impact:** [Reference applicable regulatory obligations that could be breached, e.g., PDPA Section [X], BNM RMiT Clause [X]]

#### Likelihood of Exploitation

| Factor | Assessment |
|---|---|
| Attack Complexity | [Low / Medium / High] |
| Authentication Required | [None / Low Privilege / High Privilege] |
| User Interaction Required | [None / Required] |
| Attack Vector | [Network / Adjacent / Local / Physical] |
| Exploits Available in the Wild | [Yes / No / Unknown] |
| **Overall Exploitation Likelihood** | **[High / Medium / Low]** |

#### Recommended Remediation

*Provide clear, actionable remediation guidance. Where possible, include specific configuration changes, patch references, or code examples.*

**Immediate Actions (if Critical/High):**

1. [Immediate containment action, e.g., "Disable the affected feature / block the affected endpoint at the WAF."]
2. [Additional immediate action]

**Full Remediation:**

1. [Primary remediation step with specific technical guidance]
2. [Additional remediation step]
3. [Verification step]

**References:**
- [Vendor advisory URL]
- [OWASP guidance URL]
- [CVE detail URL]

#### Remediation Tracking

| Field | Details |
|---|---|
| **Assigned To** | [Name / Team] |
| **Target Remediation Date** | [Date] |
| **Current Status** | [Open / In Progress / Pending Verification / Closed / Risk Accepted] |
| **Status Last Updated** | [Date] |
| **Verified By** | [Name] |
| **Verification Date** | [Date] |
| **Closure Evidence Reference** | [Reference to evidence document / ticket] |

---

### 8.2 Finding PT-[YYYY]-002: [Finding Title]

*[Duplicate the finding template from §8.1 for each additional finding. Complete all fields for each finding.]*

---

### 8.3 Finding PT-[YYYY]-003: [Finding Title]

*[Duplicate the finding template from §8.1 for each additional finding. Complete all fields for each finding.]*

---

> **[Continue adding findings as PT-[YYYY]-004 through PT-[YYYY]-NNN following the template in §8.1]**

---

## 9. Risk Register Integration

*This section documents the integration of penetration test findings into [Organization Name]'s enterprise risk register, as required by BNM RMiT and [Organization Name]'s risk management framework.*

### 9.1 Risk Register Updates

*For each Critical and High finding, a formal risk entry must be created or updated in [Organization Name]'s enterprise risk register. Medium findings may also be registered at the discretion of the Risk Manager.*

| Finding ID | Risk Register Entry ID | Risk Category | Risk Statement | Likelihood (1–5) | Impact (1–5) | Inherent Risk Score | Existing Controls | Residual Risk Score | Risk Owner | Review Date |
|---|---|---|---|---|---|---|---|---|---|---|
| PT-[YYYY]-001 | RR-[YYYY]-[NNN] | Technology Risk | [Risk statement, e.g., "Risk of unauthorized access to customer data due to SQL injection vulnerability in [Application]"] | [1-5] | [1-5] | [L×I] | [Current controls] | [Residual score] | [Name/Title] | [Date] |
| PT-[YYYY]-002 | RR-[YYYY]-[NNN] | Technology Risk | [Risk statement] | [1-5] | [1-5] | [Score] | [Controls] | [Residual] | [Owner] | [Date] |
| PT-[YYYY]-003 | RR-[YYYY]-[NNN] | Technology Risk | [Risk statement] | [1-5] | [1-5] | [Score] | [Controls] | [Residual] | [Owner] | [Date] |

### 9.2 Risk Treatment Plan

*For each risk registered, document the agreed treatment approach.*

| Risk Register Entry ID | Treatment Approach | Treatment Actions | Target Risk Score Post-Treatment | Target Date |
|---|---|---|---|---|
| RR-[YYYY]-[NNN] | [Mitigate / Transfer / Accept / Avoid] | [Description of treatment actions] | [Target score] | [Date] |
| RR-[YYYY]-[NNN] | [Approach] | [Actions] | [Score] | [Date] |

---

## 10. Roles and Responsibilities

*This section defines the roles and responsibilities for the penetration testing process and the remediation of findings, presented in a RACI format (Responsible, Accountable, Consulted, Informed).*

### 10.1 RACI Matrix — Penetration Testing Process

| Activity | CISO | Vulnerability Management Lead | IT Manager | System / App Owner | Internal Audit | Testing Firm | Board / Risk Committee |
|---|---|---|---|---|---|---|---|
| Approve penetration test scope and RoE | A | R | C | C | I | C | I |
| Commission penetration testing firm | A | R | C | — | I | — | — |
| Provide technical access and support | I | R | R | R | — | C | — |
| Monitor testing activities | I | R | R | C | I | R | — |
| Receive and review draft findings | C | R | C | C | C | R | — |
| Validate technical accuracy of findings | C | R | C | R | — | R | — |
| Issue final penetration test report | A | R | I | I | I | R | — |
| Assign remediation owners | A | R | C | R | I | — | — |
| Execute remediation actions | I | C | C | R | — | — | — |
| Verify remediation completion | A | R | C | C | I | C | — |
| Update risk register | A | C | I | C | I | — | I |
| Report status to Board / BNM | A | C | C | — | I | — | I |

**RACI Key:** R = Responsible, A = Accountable, C = Consulted, I = Informed

### 10.2 Role Definitions

| Role | Individual / Title | Department | Key Responsibilities in Context of This Report |
|---|---|---|---|
| **CISO** | [Name] | Information Security | Ultimate accountability for information security posture; approves risk acceptance; reports to Board |
| **Vulnerability Management Lead** | [Name] | IT Security | Day-to-day ownership of penetration testing programme; manages remediation tracking; coordinates testing firm |
| **IT Manager** | [Name] | IT Operations | Provides operational support during testing; ensures infrastructure teams execute remediation |
| **System / Application Owner(s)** | [Name(s)] | [Department(s)] | Responsible for remediating findings on systems they own; approves risk acceptance for owned systems |
| **Internal Audit** | [Name] | Internal Audit | Independent oversight of penetration testing programme; validates process compliance with BNM RMiT |
| **Testing Firm Lead** | [Name] | [Firm Name] | Responsible for technical conduct of the engagement; quality of findings and report |
| **Board Risk Committee** | [Chair Name] | Board | Receives quarterly summary; approves escalated risk acceptances |

### 10.3 Escalation Matrix

*Define escalation paths for key scenarios.*

| Scenario | First Escalation Point | Second Escalation Point | Timeframe |
|---|---|---|---|
| Critical finding identified during testing | Vulnerability Management Lead | CISO | Immediate (within 1 hour) |
| SLA breach — Critical finding | CISO | Board Risk Committee Chair | Same day |
| SLA breach — High finding | CISO | — | Within 24 hours |
| Finding with potential regulatory reporting obligation | CISO | Board Risk Committee | Within 24 hours |
| Discovery of active exploitation or breach during testing | CISO + IT Manager | Board + BNM (if reportable) | Immediate |
| Testing firm unable to complete agreed scope | Vulnerability Management Lead | CISO | Same day |

---

## 11. Review and Approval

### 11.1 Document Review Schedule

*This document is subject to review in accordance with the schedule below. Reviews must be conducted regardless of whether changes to the document content are required.*

| Review Trigger | Frequency | Next Scheduled Review |
|---|---|---|
| Scheduled periodic review | Semi-annual | [Next Review Date] |
| Completion of penetration test engagement | After each engagement | [Date of next test] |
| Material change to IT infrastructure or applications | Event-driven | As triggered |
| Regulatory update (BNM RMiT amendment) | Event-driven | As triggered |
| Significant security incident | Event-driven | As triggered |

### 11.2 Version History

| Version | Date | Author | Changes Description |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document creation |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of changes] |

### 11.3 Approval Sign-Off

*This document requires formal approval from the signatories listed below prior to distribution. Electronic signature is acceptable provided it is captured in the organization's approved document management system.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Vulnerability Management Lead (Author) | [Name] | __________________ | [Date] |
| IT Manager (Reviewer) | [Name] | __________________ | [Date] |
| CISO (Approver) | [Name] | __________________ | [Date] |
| Internal Audit (Acknowledgement) | [Name] | __________________ | [Date] |
| [Additional Approver Role] | [Name] | __________________ | [Date] |

### 11.4 Distribution List

*This report is classified **Confidential** and must only be distributed to the individuals listed below. Recipients are responsible for ensuring the document is stored and handled in accordance with [Organization Name]'s Information Classification and Handling Policy.*

| Recipient Name | Title | Department | Copy Type |
|---|---|---|---|
| [Name] | CISO | Information Security | Full Report |
| [Name] | IT Manager | IT Operations | Full Report |
| [Name] | Vulnerability Management Lead | IT Security | Full Report |
| [Name] | Head of Internal Audit | Internal Audit | Full Report |
| [Name] | Chief Risk Officer | Risk Management | Executive Summary Only |
| [Name] | CEO | Executive Management | Executive Summary Only |
| [Name] | Board Risk Committee Chair | Board | Executive Summary Only |

---

## 12. References

*This section lists the regulatory, standards, and policy documents that this penetration test report is designed to address or has been prepared in accordance with.*

### 12.1 Regulatory References

| Reference | Document Title | Issuing Authority | Relevant Clause(s) | Notes |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia (BNM) | Clause 11.12 | Primary regulatory requirement for annual independent penetration testing |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia (BNM) | Clause 11 (Vulnerability Management) | Broader vulnerability management requirements |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 (Security Principle) | Data security obligations relevant to findings involving personal data |
| NACSA | National Cyber Security Agency Guidelines | NACSA Malaysia | [Relevant sections] | National cybersecurity requirements applicable to financial institutions |
| FSA 2013 | Financial Services Act 2013 | Government of Malaysia | [Relevant sections] | Broader statutory framework for licensed financial institutions |
| IFSA 2013 | Islamic Financial Services Act 2013 | Government of Malaysia | [Relevant sections] | Applicable for Islamic financial institutions |

### 12.2 Internal Policy References

| Document Title | Document ID | Owner | Relevance |
|---|---|---|---|
| Vulnerability Management Policy | [Doc ID] | Vulnerability Management Lead | Governs vulnerability scanning and penetration testing programme |
| Information Security Policy | [Doc ID] | CISO | Overarching information security requirements |
| Risk Management Policy | [Doc ID] | Chief Risk Officer | Risk register integration requirements |
| Third Party Risk Management Policy | [Doc ID] | [Owner] | Governs engagement of external penetration testing firms |
| Incident Response Policy | [Doc ID] | CISO | Applicable if findings indicate active compromise |
| Information Classification and Handling Policy | [Doc ID] | CISO | Governs distribution of this report |
| Change Management Policy | [Doc ID] | IT Manager | Governs implementation of remediation changes |

### 12.3 Industry Standards and Frameworks Referenced

| Standard | Version | Issuing Body | Application in This Report |
|---|---|---|---|
| OWASP Testing Guide | [Version] | OWASP Foundation | Web application testing methodology |
| OWASP Mobile Security Testing Guide | [Version] | OWASP Foundation | Mobile application testing methodology |
| OWASP API Security Top 10 | [Version] | OWASP Foundation | API testing reference |
| PTES | [Version] | PTES | Penetration testing execution standard |
| NIST SP 800-115 | [Edition] | NIST | Technical information security testing and assessment |
| CVSS | v[3.1 / 4.0] | FIRST | Vulnerability severity scoring |
| CWE | [Version] | MITRE | Vulnerability classification |
| CVE | Current | MITRE / NVD | Known vulnerability reference |
| ISO/IEC 27001:2022 | 2022 | ISO / IEC | Information security management reference |

---

## 13. Appendices

### Appendix A — Engagement Authorization Letter

*Attach the signed Engagement Authorization Letter or Rules of Engagement document issued by [Organization Name] authorizing the conduct of this penetration test. The document must be signed by an appropriate authority (CISO or delegate) and must pre-date the commencement of testing.*

> **[Attach signed Engagement Authorization Letter here]**
>
> Document Reference: [Reference Number]
> Date of Authorization: [Date]
> Authorized By: [Name, Title]

---

### Appendix B — Rules of Engagement Document

*Attach the agreed Rules of Engagement (RoE) document, signed by both [Organization Name] and [Testing Firm Name], defining the testing boundaries, constraints, and conduct requirements for this engagement.*

> **[Attach signed Rules of Engagement document here]**
>
> Document Reference: [Reference Number]
> Date of Agreement: [Date]
> [Organization Name] Signatory: [Name, Title]
> [Testing Firm] Signatory: [Name, Title]

---

### Appendix C — Penetration Tester Qualification Evidence

*Provide evidence of the qualifications and independence of the lead penetration tester(s) as required by BNM RMiT Clause 11.12, which specifies that penetration testing must be performed by qualified independent testers.*

**C.1 Tester Qualification Summary**

| Tester Name | Certifications Held | Certification Body | Certification Expiry | Years of Experience |
|---|---|---|---|---|
| [Name] | [e.g., OSCP] | Offensive Security | [Date] | [#] |
| [Name] | [e.g., CREST CRT] | CREST | [Date] | [#] |
| [Name] | [e.g., GPEN, GWAPT] | GIAC | [Date] | [#] |

**C.2 Independence Attestation**

*Attach the signed Independence Attestation from [Testing Firm Name] confirming that no conflicts of interest exist between the testing firm, its personnel, and [Organization Name].*

> **[Attach signed Independence Attestation here]**

---

### Appendix D — Evidence Screenshots and Artefacts

*This appendix contains supporting evidence screenshots, packet captures, and other technical artefacts referenced in Section 8. All evidence has been reviewed to ensure no live customer data, credentials, or sensitive personal information is included in unredacted form.*

**D.1 Index of Evidence Artefacts**

| Artefact ID | Description | Related Finding ID | File Reference |
|---|---|---|---|
| EVD-001 | [Description of screenshot/artefact] | PT-[YYYY]-001 | [File name or location] |
| EVD-002 | [Description] | PT-[YYYY]-001 | [File reference] |
| EVD-003 | [Description] | PT-[YYYY]-002 | [File reference] |
| EVD-004 | [Description] | PT-[YYYY]-003 | [File reference] |

> **[Attach evidence screenshots and artefacts here, organized by finding ID]**

---

### Appendix E — Network and Asset Discovery Results

*This appendix contains the full output of network scanning and asset discovery activities conducted during the reconnaissance phase, including host discovery results, open port summaries, and service banners.*

**E.1 Host Discovery Summary**

| IP Address | Hostname | Operating System | Open Ports | Services Identified | In Scope? |
|---|---|---|---|---|---|
| [IP] | [Hostname] | [OS] | [Ports] | [Services] | [Yes / No] |
| [IP] | [Hostname] | [OS] | [Ports] | [Services] | [Yes / No] |

> **[Attach full Nmap / scanner output here as sub-appendix E.2]**

---

### Appendix F — Vulnerability Scan Raw Output

*This appendix contains the raw output from automated vulnerability scanning tools used during the engagement, including Nessus / Qualys / OpenVAS reports. The automated scan findings have been reviewed and correlated with manual testing findings.*

**F.1 Automated Scan Summary**

| Scanner | Scan Date | Target Scope | Total Vulnerabilities Identified | Correlated to Manual Findings | False Positives Identified |
|---|---|---|---|---|---|
| [Scanner Name] | [Date] | [Scope] | [#] | [#] | [#] |
| [Scanner Name] | [Date] | [Scope] | [#] | [#] | [#] |

> **[Attach automated scanner reports here as sub-appendix F.2 onward]**

---

### Appendix G — OWASP Top 10 Mapping

*This appendix maps the findings from this engagement to the OWASP Top 10 (current edition) to facilitate benchmarking and trend analysis.*

**G.1 OWASP Web Application Top 10 Mapping**

| OWASP Category | OWASP ID | Finding IDs | Total Findings |
|---|---|---|---|
| Broken Access Control | A01:2021 | PT-[YYYY]-00X, PT-[YYYY]-00X | [#] |
| Cryptographic Failures | A02:2021 | PT-[YYYY]-00X | [#] |
| Injection | A03:2021 | PT-[YYYY]-00X | [#] |
| Insecure Design | A04:2021 | PT-[YYYY]-00X | [#] |
| Security Misconfiguration | A05:2021 | PT-[YYYY]-00X | [#] |
| Vulnerable and Outdated Components | A06:2021 | PT-[YYYY]-00X | [#] |
| Identification and Authentication Failures | A07:2021 | PT-[YYYY]-00X | [#] |
| Software and Data Integrity Failures | A08:2021 | PT-[YYYY]-00X | [#] |
| Security Logging and Monitoring Failures | A09:2021 | PT-[YYYY]-00X | [#] |
| Server-Side Request Forgery (SSRF) | A10:2021 | PT-[YYYY]-00X | [#] |

---

### Appendix H — Previous Engagement Remediation Closure Status

*This appendix documents the final closure status of all findings from the previous penetration test engagement, demonstrating the effectiveness of [Organization Name]'s remediation programme.*

**H.1 Prior Engagement Findings — Closure Status**

| Prior Finding ID | Title | Severity | Status at Time of Prior Report | Current Status | Verification Date | Verified By | Notes |
|---|---|---|---|---|---|---|---|
| PT-[YYYY-1]-001 | [Title] | [Severity] | [Prior Status] | [Closed / Risk Accepted / Carried Over] | [Date] | [Name] | [Notes] |
| PT-[YYYY-1]-002 | [Title] | [Severity] | [Prior Status] | [Status] | [Date] | [Name] | [Notes] |
| PT-[YYYY-1]-003 | [Title] | [Severity] | [Prior Status] | [Status] | [Date] | [Name] | [Notes] |

**H.2 Prior Engagement Remediation Metrics**

| Metric | Value |
|---|---|
| Total findings from prior engagement | [#] |
| Findings fully remediated and closed | [#] ([ %]) |
| Findings risk-accepted | [#] ([ %]) |
| Findings carried over to current engagement | [#] ([ %]) |
| Regression findings (previously closed, re-introduced) | [#] |

---

### Appendix I — Glossary

*This glossary defines key technical and regulatory terms used in this report to support readability by non-technical stakeholders.*

| Term | Definition |
|---|---|
| **Attack Vector** | The path or means by which an attacker gains access to a vulnerable system. |
| **Black Box Testing** | Penetration testing conducted without prior knowledge of the target systems' internal architecture or credentials. |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the characteristics and severity of software vulnerabilities. |
| **CWE** | Common Weakness Enumeration — a community-developed list of software and hardware weakness types maintained by MITRE. |
| **CVE** | Common Vulnerabilities and Exposures — a list of publicly disclosed computer security flaws maintained by MITRE and the NVD. |
| **Grey Box Testing** | Penetration testing conducted with partial knowledge of the target systems, typically including some credentials or architecture documentation. |
| **Lateral Movement** | Techniques used by an attacker to progressively move through a network after gaining initial access, seeking additional systems and data. |
| **OSCP** | Offensive Security Certified Professional — a widely recognized penetration testing certification. |
| **OWASP** | Open Web Application Security Project — a nonprofit foundation that works to improve the security of software. |
| **Penetration Testing** | A simulated cyberattack against computer systems to check for exploitable vulnerabilities. |
| **Post-Exploitation** | Activities conducted by a penetration tester following successful exploitation of a vulnerability to assess the extent of access achievable. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| **Reconnaissance** | The information-gathering phase of a penetration test, in which the tester collects data about the target. |
| **Risk Acceptance** | A formal decision by management to acknowledge a risk and accept the potential consequences without implementing additional controls. |
| **RMiT** | Risk Management in Technology — a BNM policy document prescribing technology risk management requirements for licensed financial institutions in Malaysia. |
| **SLA** | Service Level Agreement — in the context of vulnerability management, the maximum permissible time from finding identification to remediation. |
| **White Box Testing** | Penetration testing conducted with full knowledge of the target systems, including source code, architecture diagrams, and credentials. |
| **Zero-Day** | A previously unknown vulnerability for which no patch is available at the time of discovery. |

---

### Appendix J — Regulatory Compliance Checklist

*This appendix provides a checklist confirming that the penetration testing programme and this report satisfy the specific requirements of BNM RMiT Clause 11.12 and related provisions.*

| BNM RMiT Requirement | Clause | Requirement Description | Satisfied? | Evidence Reference |
|---|---|---|---|---|
| Annual penetration test conducted | 11.12 | Penetration test performed at least annually | [Yes / No / Partial] | Section 2.1 — Engagement Authorization |
| Testing performed by qualified independent tester | 11.12 | Testers are independent and possess relevant qualifications | [Yes / No / Partial] | Appendix C |
| External and internal testing covered | 11.12 | Both external perimeter and internal testing addressed | [Yes / No / Partial] | Section 3.1 |
| Critical applications and infrastructure tested | 11.12 | Critical systems are within scope | [Yes / No / Partial] | Section 3.1 |
| Findings documented with remediation actions | 11.12 | All findings include remediation recommendations | [Yes / No / Partial] | Sections 8 and 7 |
| Remediation tracked and verified | 11.12 | Remediation tracking register maintained | [Yes / No / Partial] | Section 7 |
| Results reported to senior management | 11.12 | Report distributed to CISO and management | [Yes / No / Partial] | Section 11.4 |
| Vulnerability management programme maintained | 11 | Ongoing scanning programme in place | [Yes / No / Partial] | Section 5 |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**Owner:** Vulnerability Management Lead | **Organization:** [Organization Name]
**Last Review:** [Last Review Date] | **Next Review:** [Next Review Date]