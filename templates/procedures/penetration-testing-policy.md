# Penetration Testing Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Vulnerability Management Lead |
| **Department** | [Department Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Regulatory Alignment:** Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document — Clause 11.12

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Policy Statements and Requirements](#5-policy-statements-and-requirements)
6. [Penetration Testing Scope and Frequency](#6-penetration-testing-scope-and-frequency)
7. [Tester Qualification Requirements](#7-tester-qualification-requirements)
8. [Engagement Planning and Pre-Test Activities](#8-engagement-planning-and-pre-test-activities)
9. [Testing Methodology and Standards](#9-testing-methodology-and-standards)
10. [Severity Classification and SLA](#10-severity-classification-and-sla)
11. [Remediation Tracking](#11-remediation-tracking)
12. [Reporting Requirements](#12-reporting-requirements)
13. [Exceptions and Waivers](#13-exceptions-and-waivers)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section states why this policy exists, what it is designed to achieve, and the regulatory obligation it fulfils. It should articulate the organization's commitment to proactive security validation.*

This policy establishes the requirements, standards, and procedures governing penetration testing activities undertaken by or on behalf of [Organization Name]. It is designed to ensure that penetration testing is conducted in a systematic, authorized, and risk-informed manner to identify vulnerabilities in technology systems before they can be exploited by malicious actors.

This policy fulfils the obligation of [Organization Name] as a [licensed financial institution / licensed insurer / payment system operator / other regulated entity] under the Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 11.12, which mandates that financial institutions conduct regular penetration testing of technology infrastructure, applications, and network components.

The outcomes of penetration testing activities conducted under this policy shall directly inform the institution's vulnerability management programme, risk remediation priorities, and annual cyber risk posture assessments reported to senior management and the Board.

### 1.2 Scope

*This section defines the boundaries of this policy — which systems, environments, business units, and third parties are covered. Be explicit about what is in scope and what is out of scope.*

#### 1.2.1 In-Scope

This policy applies to:

- All technology assets owned, operated, or managed by [Organization Name], including but not limited to:
  - Internet-facing applications and APIs
  - Internal web applications and portals
  - Core banking systems and critical financial processing platforms
  - Network infrastructure (routers, switches, firewalls, load balancers)
  - Wireless network infrastructure
  - Cloud-hosted environments and Software-as-a-Service (SaaS) platforms where [Organization Name] holds primary data responsibility
  - Mobile applications (iOS and Android) developed or commissioned by [Organization Name]
  - Operational Technology (OT) and Industrial Control Systems (ICS) where applicable
  - Third-party hosted systems processing [Organization Name] customer or financial data
- All personnel responsible for commissioning, executing, overseeing, or remediating penetration tests
- All third-party vendors and service providers engaged to conduct penetration testing on behalf of [Organization Name]
- All business units, subsidiaries, and branches of [Organization Name] operating under a Malaysian regulatory licence

#### 1.2.2 Out of Scope

The following are excluded from the scope of this policy unless explicitly included via written authorization:

- Production systems during business-critical periods (as defined in the Change Management Policy)
- Third-party systems where [Organization Name] does not hold contractual authorization to conduct security testing
- Systems owned by regulators, government agencies, or external payment networks unless governed by a specific testing agreement
- [Any other exclusions specific to the organization]

---

## 2. Regulatory and Policy Context

*This section situates the policy within the broader regulatory and internal policy framework. Reference the specific clauses that mandate the controls defined in this document.*

### 2.1 Regulatory Basis

[Organization Name] is subject to the following regulatory instruments that mandate or inform the requirements of this policy:

| Regulatory Instrument | Issuing Authority | Relevant Clause(s) | Obligation |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 11.12 | Mandatory penetration testing of technology infrastructure and applications |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Clause 11.1 – 11.11 | Broader vulnerability and patch management obligations |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Part III | Data security obligations for personal data processors |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia (BNM) | [Clause Reference] | Cyber risk management framework requirements |
| [Additional Regulation] | [Issuing Authority] | [Clause] | [Obligation] |

### 2.2 Internal Policy Hierarchy

This policy is issued under and must be read in conjunction with the following internal policy documents:

| Policy / Standard | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy |
| Vulnerability Management Policy | [Doc ID] | Complementary — governs patch and remediation lifecycle |
| Change Management Policy | [Doc ID] | Governs pre- and post-test change controls |
| Third-Party Risk Management Policy | [Doc ID] | Governs external tester engagement and due diligence |
| Incident Response Policy | [Doc ID] | Governs escalation if active exploitation is discovered during testing |
| Data Classification Policy | [Doc ID] | Governs handling of test data and findings |
| [Additional Policy] | [Doc ID] | [Relationship] |

### 2.3 Relationship to Risk Management Framework

*Describe how this policy links to the institution's overall IT Risk Management Framework and risk appetite.*

Penetration testing findings shall be recorded in [Organization Name]'s risk register and managed in accordance with the IT Risk Management Framework. Unresolved critical or high vulnerabilities identified through penetration testing shall be treated as open risk items requiring escalation to the [Risk Management Committee / Chief Information Security Officer (CISO)] within the timeframes defined in Section 10 of this policy.

---

## 3. Definitions and Abbreviations

*This section provides precise definitions for all technical and regulatory terms used throughout the document. Consistent terminology is important for audit purposes.*

### 3.1 Definitions

| Term | Definition |
|---|---|
| **Penetration Testing** | A simulated cyberattack conducted by authorized security professionals against an organization's technology assets to identify exploitable vulnerabilities, assess security controls, and evaluate the potential impact of a successful attack. |
| **Black-Box Testing** | A penetration testing approach where the tester has no prior knowledge of the target environment, simulating an external threat actor. |
| **White-Box Testing** | A penetration testing approach where the tester is provided with full knowledge of the target environment, including architecture diagrams, source code, and credentials. |
| **Grey-Box Testing** | A penetration testing approach where the tester is provided with partial knowledge of the target environment. |
| **Vulnerability** | A weakness in a technology asset, security control, or operational procedure that could be exploited to compromise confidentiality, integrity, or availability. |
| **Exploit** | A technique, code, or methodology used to take advantage of a vulnerability to gain unauthorized access or cause unintended behaviour. |
| **Scope Creep** | The unauthorized expansion of penetration testing activities beyond the boundaries defined in the Statement of Work or Rules of Engagement. |
| **Rules of Engagement (RoE)** | A formal document defining the authorized boundaries, methodologies, timing, and communication protocols for a penetration testing engagement. |
| **Statement of Work (SoW)** | A contractual document specifying the deliverables, timelines, and responsibilities of an external penetration testing engagement. |
| **Critical System** | Any technology asset whose compromise would materially impact [Organization Name]'s ability to deliver core financial services, as defined in the Business Impact Analysis. |
| **Red Team Exercise** | An advanced, adversary-simulation exercise designed to test the effectiveness of the organization's detection and response capabilities against realistic threat scenarios. |
| **Threat-Led Penetration Testing (TLPT)** | Intelligence-driven penetration testing that models tactics, techniques, and procedures (TTPs) of specific threat actors relevant to the financial sector. |
| **Retesting** | A targeted re-assessment of previously identified vulnerabilities following remediation to confirm that the fix is effective. |
| **CVSS** | Common Vulnerability Scoring System — an open industry standard for assessing the severity of security vulnerabilities. |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed list of known cybersecurity vulnerabilities. |

### 3.2 Abbreviations

| Abbreviation | Expansion |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| CISO | Chief Information Security Officer |
| CIO | Chief Information Officer |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| ISMS | Information Security Management System |
| SLA | Service Level Agreement |
| RoE | Rules of Engagement |
| SoW | Statement of Work |
| TLPT | Threat-Led Penetration Testing |
| CVSS | Common Vulnerability Scoring System |
| CVE | Common Vulnerabilities and Exposures |
| OWASP | Open Web Application Security Project |
| PTES | Penetration Testing Execution Standard |
| OSSTMM | Open Source Security Testing Methodology Manual |
| POC | Proof of Concept |
| API | Application Programming Interface |
| DMZ | Demilitarized Zone |
| WAF | Web Application Firewall |
| IDS/IPS | Intrusion Detection / Intrusion Prevention System |
| OT | Operational Technology |
| ICS | Industrial Control Systems |
| RACI | Responsible, Accountable, Consulted, Informed |

---

## 4. Roles and Responsibilities

*This section defines who is responsible for each aspect of the penetration testing programme. The RACI matrix below provides a clear accountability structure for audit purposes. Expand or modify roles to match the organization's structure.*

### 4.1 Role Descriptions

**Board of Directors / Board Risk Committee**
Provides strategic oversight of the institution's cyber risk posture. Reviews and approves the annual penetration testing programme and accepts residual risk where remediation is deferred.

**Chief Information Security Officer (CISO)**
Holds ultimate accountability for the penetration testing programme. Approves scope, budget, and remediation timelines for critical findings. Escalates material unresolved findings to the Board Risk Committee.

**Vulnerability Management Lead**
Owns this policy. Responsible for the day-to-day management of the penetration testing programme, including scheduling, vendor management, finding tracking, and reporting.

**Information Security Team**
Supports the execution of penetration testing activities. Provides technical oversight during engagements, reviews findings, and validates remediation.

**IT Operations / Infrastructure Team**
Responsible for remediating infrastructure-level findings within defined SLA timeframes. Coordinates testing windows with the Vulnerability Management Lead.

**Application Development / DevSecOps Team**
Responsible for remediating application-level findings. Ensures that application security testing is integrated into the Software Development Lifecycle (SDLC).

**Risk Management Function**
Reviews penetration testing findings as risk items. Ensures that unresolved findings are reflected in the IT risk register and reported to the appropriate governance committees.

**Legal and Compliance Function**
Reviews engagement contracts, Non-Disclosure Agreements (NDAs), and Rules of Engagement for legal sufficiency. Ensures regulatory reporting obligations are met where required.

**Third-Party Penetration Testing Provider**
Conducts authorized penetration testing within the agreed scope and Rules of Engagement. Delivers findings reports and supports remediation verification.

**System / Application Owners**
Provide written authorization for testing of systems under their ownership. Support the testing team with environment access and documentation as required.

### 4.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Board / BRC | CISO | Vuln Mgmt Lead | InfoSec Team | IT Ops | AppDev / DevSecOps | Risk Mgmt | Legal & Compliance | System Owner | 3rd Party Tester |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve annual penetration testing programme | A | R | C | C | I | I | C | C | I | — |
| Define and approve testing scope per engagement | I | A | R | C | C | C | C | C | C | I |
| Review and sign Rules of Engagement | I | A | R | C | C | C | I | C | R | R |
| Conduct penetration testing activities | I | I | C | C | I | I | I | I | I | R |
| Monitor testing activities during engagement | I | I | R | R | C | C | I | I | I | A |
| Review and validate findings report | I | A | R | R | C | C | C | I | C | I |
| Assign remediation tasks and owners | I | A | R | C | R | R | C | I | C | — |
| Remediate infrastructure findings | I | I | C | C | R | I | I | I | A | — |
| Remediate application findings | I | I | C | C | I | R | I | I | A | — |
| Conduct remediation retesting | I | I | R | R | I | I | I | I | I | C |
| Report findings to senior management | I | R | C | I | I | I | C | I | I | — |
| Record findings in risk register | I | C | C | I | I | I | R | I | I | — |
| Escalate critical unresolved findings | A | R | C | I | I | I | C | C | I | — |
| Manage third-party vendor due diligence | I | A | R | C | I | I | I | C | I | — |
| Policy review and update | I | A | R | C | C | C | C | C | I | — |

---

## 5. Policy Statements and Requirements

*This section contains the binding policy statements that [Organization Name] commits to. Each statement should be clear, measurable, and directly traceable to a regulatory or risk obligation.*

### 5.1 General Policy Statements

5.1.1 [Organization Name] shall conduct penetration testing of its technology assets on a regular basis as defined in this policy, in compliance with BNM RMiT Clause 11.12.

5.1.2 All penetration testing activities shall be formally authorized in advance. No penetration testing activity, whether conducted by internal staff or external parties, shall commence without a signed Rules of Engagement document and written authorization from the relevant System Owner and the CISO (or designated authority).

5.1.3 Penetration testing shall be conducted by qualified individuals or organizations meeting the requirements defined in Section 7 of this policy.

5.1.4 All penetration testing findings shall be documented, classified by severity, assigned to responsible owners, and tracked to closure within the timeframes defined in Section 10 of this policy.

5.1.5 Penetration testing results shall be reported to senior management at least annually, and critical findings shall be escalated immediately in accordance with the procedures defined in Section 12.

5.1.6 Penetration testing findings shall not be used to exploit production systems beyond what is necessary to demonstrate the existence and impact of a vulnerability. Any proof-of-concept exploitation shall be proportionate and shall cease immediately upon demonstration of impact.

5.1.7 [Organization Name] shall retain penetration testing reports and associated evidence for a minimum of **[X] years** in accordance with the institution's records retention schedule and regulatory requirements.

5.1.8 Penetration testing shall be integrated into the Software Development Lifecycle for new and significantly modified applications prior to production deployment.

5.1.9 The penetration testing programme shall be reviewed semi-annually by the Vulnerability Management Lead and updated to reflect changes in the threat landscape, technology environment, and regulatory requirements.

### 5.2 Independence Requirements

5.2.1 Penetration testing of critical systems shall be conducted by parties independent of those responsible for developing or operating the systems under test.

5.2.2 Internal staff conducting penetration tests shall not hold operational responsibility for the systems they are testing.

5.2.3 Where an external penetration testing provider is engaged, the provider shall be free of conflicts of interest with respect to [Organization Name]'s technology environment.

### 5.3 Confidentiality and Data Handling

5.3.1 All penetration testing findings, reports, and supporting evidence shall be classified as **Confidential** and handled in accordance with [Organization Name]'s Data Classification Policy.

5.3.2 External penetration testing providers shall execute a Non-Disclosure Agreement (NDA) prior to commencing any engagement.

5.3.3 Penetration testing providers shall not retain any data, credentials, or findings obtained during an engagement beyond the period required to deliver the final report, unless otherwise agreed in writing.

5.3.4 Test data containing personal data (as defined under the PDPA 2010) shall not be used in penetration testing without the explicit authorization of the Data Protection Officer and appropriate anonymization or pseudonymization controls.

### 5.4 Prohibited Activities

The following activities are prohibited during penetration testing engagements unless explicitly authorized in writing by the CISO:

- Exfiltration of customer data, financial data, or personal data from production systems
- Deployment of persistent backdoors or unauthorized remote access tools in production environments
- Denial-of-service attacks against production systems or network infrastructure
- Testing of systems outside the agreed scope
- Disclosure of findings to any party other than [Organization Name] without written consent
- Use of zero-day exploits against production systems without prior written authorization
- [Additional prohibited activities]

---

## 6. Penetration Testing Scope and Frequency

*This section defines what must be tested and how often. The scope and frequency schedule must be reviewed each time the technology environment changes materially.*

### 6.1 Penetration Testing Types

[Organization Name] shall conduct the following types of penetration testing as part of its annual programme:

| Testing Type | Description | Primary Methodology |
|---|---|---|
| **External Network Penetration Test** | Testing of internet-facing infrastructure and systems to identify vulnerabilities exploitable by external threat actors | Black-box / Grey-box |
| **Internal Network Penetration Test** | Testing of internal network infrastructure to identify vulnerabilities exploitable by an insider threat or a threat actor with initial network access | Grey-box / White-box |
| **Web Application Penetration Test** | Assessment of web applications for OWASP Top 10 and other application-layer vulnerabilities | Grey-box / White-box |
| **Mobile Application Penetration Test** | Assessment of iOS and Android applications for mobile-specific vulnerabilities | Grey-box / White-box |
| **API Security Assessment** | Assessment of exposed APIs for authentication, authorization, and data exposure vulnerabilities | Grey-box / White-box |
| **Social Engineering Assessment** | Simulation of phishing, vishing, or physical intrusion attempts to assess human and procedural controls | Black-box |
| **Red Team Exercise** | Advanced adversary simulation testing detection and response capabilities | Black-box (covert) |
| **Wireless Network Assessment** | Assessment of wireless network infrastructure for unauthorized access points and configuration weaknesses | Black-box / Grey-box |
| **Cloud Security Assessment** | Assessment of cloud environments for misconfigurations, excessive permissions, and insecure architectures | White-box |

### 6.2 Mandatory Testing Schedule

*The frequencies below represent the minimum requirements derived from BNM RMiT Clause 11.12. Critical systems may require more frequent testing based on risk assessment.*

| Asset Category | Testing Type | Minimum Frequency | Trigger-Based Testing |
|---|---|---|---|
| Internet-facing critical systems | External Network Penetration Test | **Annually** | Major change, new exposure, threat intelligence alert |
| All internet-facing applications | Web Application Penetration Test | **Annually** | Pre-production deployment, significant feature change |
| Internal network infrastructure | Internal Network Penetration Test | **Annually** | Major infrastructure change, merger/acquisition |
| Mobile applications | Mobile Application Penetration Test | **Annually** | Major version release |
| Exposed APIs | API Security Assessment | **Annually** | New API deployment, significant change |
| Wireless infrastructure | Wireless Network Assessment | **Annually** | New access point deployment, facility change |
| Cloud environments | Cloud Security Assessment | **Annually** | New cloud workload, significant configuration change |
| Social engineering resilience | Phishing / Vishing Simulation | **Semi-annually** | Post-security incident, regulatory direction |
| Advanced threat simulation | Red Team Exercise | **Every [2] years** or as directed by CISO | Post-significant incident, regulatory direction |

### 6.3 Trigger-Based Testing Requirements

In addition to the scheduled programme, penetration testing shall be conducted when any of the following triggers occur:

- **Significant system changes:** Any material change to an in-scope system's architecture, technology stack, or security controls
- **New production deployments:** All new applications or infrastructure components prior to first production use (or within [30] days of deployment where pre-deployment testing is not feasible)
- **Security incidents:** Following a confirmed security incident where the affected system is in scope, to identify the attack vector and any residual vulnerabilities
- **Acquisition or merger:** Prior to integrating any acquired entity's systems into [Organization Name]'s environment
- **Regulatory direction:** At the direction of BNM or other competent authority
- **Significant threat intelligence:** When credible intelligence indicates active exploitation of vulnerabilities affecting [Organization Name]'s technology stack
- **Third-party assessment:** Where a third-party security assessment identifies material gaps warranting targeted penetration testing

### 6.4 Scope Documentation

*For each penetration testing engagement, the scope must be formally documented before testing begins. Use the template in Appendix A.*

Each engagement shall be documented with a scope definition that includes at minimum:

- **Target systems:** IP address ranges, URLs, application names, API endpoints, mobile application identifiers
- **Testing environment:** Production, Staging, Development, or dedicated test environment
- **Testing type:** Black-box, grey-box, or white-box
- **Testing approach:** External, internal, or both
- **Excluded systems:** Any systems within the IP range or application portfolio explicitly excluded from testing
- **Testing window:** Approved dates and times for testing activity
- **Emergency contacts:** Contact details for aborting the engagement if required
- **Critical system handling:** Any special procedures for systems with low tolerance for disruption

---

## 7. Tester Qualification Requirements

*This section defines the minimum qualifications for individuals and organizations conducting penetration testing on behalf of [Organization Name]. These requirements apply to both internal staff and external vendors.*

### 7.1 Internal Tester Qualifications

Internal personnel authorized to conduct penetration testing activities shall meet the following minimum requirements:

| Requirement Category | Minimum Requirement |
|---|---|
| **Professional Certification** | One or more of: OSCP (Offensive Security Certified Professional), CEH (Certified Ethical Hacker), GPEN (GIAC Penetration Tester), CREST CRT, or equivalent as approved by the CISO |
| **Experience** | Minimum [2] years of hands-on penetration testing experience |
| **Training** | Annual security skills training covering emerging vulnerabilities and attack techniques |
| **Background Screening** | Cleared background check in accordance with [Organization Name]'s HR policy |
| **Independence** | Must not hold operational responsibility for systems under test |
| **Confidentiality** | Must have a signed confidentiality agreement on file |

### 7.2 External Penetration Testing Provider Qualifications

*External providers must be vetted through [Organization Name]'s Third-Party Risk Management process before engagement. This section defines the minimum bar for approval.*

External penetration testing providers engaged by [Organization Name] shall meet the following minimum requirements:

#### 7.2.1 Organizational Requirements

| Requirement | Detail |
|---|---|
| **Industry Recognition** | CREST Member Organization, or equivalent recognized body (e.g., CHECK, STAR, CBEST-qualified provider) |
| **Track Record** | Demonstrable experience conducting penetration testing for regulated financial institutions in Malaysia or the APAC region |
| **Insurance** | Professional indemnity insurance of minimum [RM X million] and cyber liability insurance of minimum [RM X million] |
| **References** | Minimum [2] verifiable references from financial sector clients |
| **Due Diligence** | Cleared [Organization Name]'s third-party due diligence process as required by the Third-Party Risk Management Policy |
| **NDA** | Executed Non-Disclosure Agreement with [Organization Name] prior to engagement |
| **Regulatory Standing** | No adverse regulatory findings or sanctions in any jurisdiction within the preceding [3] years |

#### 7.2.2 Individual Tester Requirements

Individual testers assigned to [Organization Name] engagements by an external provider shall hold at minimum one of the following certifications:

- OSCP (Offensive Security Certified Professional)
- CREST CRT (Certified Registered Tester) or CREST CCT (Certified Consultant Tester)
- GPEN (GIAC Penetration Tester) or GWAPT (GIAC Web Application Penetration Tester)
- CEH (Certified Ethical Hacker) — with demonstrated hands-on experience
- PNPT (Practical Network Penetration Tester)
- [Additional certifications as approved by the CISO]

All individual testers must undergo identity verification prior to being granted any access to [Organization Name] systems or networks.

### 7.3 Red Team and Advanced Assessment Qualifications

For Red Team exercises and Threat-Led Penetration Testing (TLPT), providers shall additionally demonstrate:

- Experience conducting TLPT or equivalent TIBER-EU/CBEST/iCAST framework assessments
- Access to current and credible threat intelligence capabilities
- Staff holding advanced certifications (e.g., CRTO, CRTE, OSED, or equivalent)
- [Additional requirements as specified by the CISO for each engagement]

### 7.4 Qualification Verification

The Vulnerability Management Lead shall:

- Verify tester qualifications prior to each engagement by reviewing certification evidence
- Maintain a register of approved internal and external testers
- Review and update qualification requirements at minimum semi-annually
- Notify the CISO if a tester's qualifications lapse or if concerns are raised about a tester's conduct

---

## 8. Engagement Planning and Pre-Test Activities

*This section defines the mandatory steps that must be completed before any penetration testing activity commences.*

### 8.1 Engagement Authorization

Before any penetration testing engagement commences, the following authorizations must be obtained in writing:

| Authorization | Obtained From | Document |
|---|---|---|
| System / Application Owner approval | Relevant System Owner(s) | System Owner Authorization Form (Appendix B) |
| CISO approval | Chief Information Security Officer | Engagement Approval Sign-off |
| Rules of Engagement sign-off | System Owner, CISO, and Tester | Rules of Engagement Document (Appendix C) |
| Network / firewall rule adjustments | IT Operations Lead | Change Request (as per Change Management Policy) |
| NDA execution (external testers) | External Testing Provider | Executed NDA |
| SoW / Contract sign-off (external testers) | Legal & Compliance, CISO | Signed Statement of Work |

### 8.2 Pre-Engagement Checklist

*The Vulnerability Management Lead shall complete the following checklist for each engagement prior to commencement.*

- [ ] Scope defined and documented
- [ ] System Owner authorization obtained
- [ ] CISO approval obtained
- [ ] Rules of Engagement document drafted and signed by all parties
- [ ] Emergency contacts identified and communicated to testing team
- [ ] IT Operations notified of testing window
- [ ] Security Operations Center (SOC) / monitoring team notified (or excluded from notification for covert Red Team exercises)
- [ ] Critical system handling procedures confirmed
- [ ] NDA executed (external providers)
- [ ] Tester qualifications verified
- [ ] Statement of Work / contract signed (external providers)
- [ ] Testing environment connectivity confirmed
- [ ] Incident escalation procedure reviewed with testing team
- [ ] Data handling requirements communicated to testing team
- [ ] Test data approved (where applicable)

### 8.3 Rules of Engagement

The Rules of Engagement document shall define at minimum:

- Authorized IP addresses, URLs, and target systems
- Prohibited actions and explicitly out-of-scope systems
- Testing window (start and end date/time)
- Authorized testing techniques and tools
- Escalation and emergency abort contacts
- Communication protocol during engagement (frequency and method of status updates)
- Incident reporting requirements during engagement
- Data handling and evidence disposal requirements post-engagement
- Deliverables and report format expectations

---

## 9. Testing Methodology and Standards

*This section defines the approved methodologies and frameworks that penetration testers must follow when conducting engagements for [Organization Name].*

### 9.1 Approved Methodologies

Penetration testing conducted under this policy shall follow one or more of the following recognized frameworks, as appropriate for the engagement type:

| Framework / Standard | Applicable Testing Type |
|---|---|
| PTES (Penetration Testing Execution Standard) | General penetration testing |
| OWASP Testing Guide (current version) | Web application and API testing |
| OWASP Mobile Security Testing Guide (MSTG) | Mobile application testing |
| OSSTMM (Open Source Security Testing Methodology Manual) | Network and infrastructure testing |
| NIST SP 800-115 (Technical Guide to IS Testing and Assessment) | General framework reference |
| MITRE ATT&CK Framework | Red team and advanced adversary simulation |
| Cloud Security Alliance (CSA) Cloud Controls Matrix | Cloud security assessment |
| [Additional framework as required] | [Applicable type] |

### 9.2 Minimum Testing Coverage

*The following areas must be assessed as part of each relevant testing type. Testers must document their coverage and rationale for any areas not assessed.*

#### 9.2.1 Web Application Testing (Minimum Coverage)

- [ ] OWASP Top 10 (current edition) — all categories
- [ ] Authentication and session management
- [ ] Authorization and access control (horizontal and vertical privilege escalation)
- [ ] Input validation (SQL injection, command injection, XSS, XXE, SSTI)
- [ ] Sensitive data exposure and cryptographic weaknesses
- [ ] Security misconfiguration
- [ ] Business logic vulnerabilities
- [ ] API security (if applicable)
- [ ] File upload vulnerabilities
- [ ] Clickjacking and UI redress attacks

#### 9.2.2 Network Penetration Testing (Minimum Coverage)

- [ ] Network discovery and enumeration
- [ ] Service version identification
- [ ] Known CVE exploitation attempts (non-destructive)
- [ ] Default and weak credential testing
- [ ] Network segmentation validation
- [ ] Firewall and ACL bypass techniques
- [ ] Man-in-the-middle susceptibility
- [ ] Privilege escalation (local and domain)
- [ ] Lateral movement assessment

#### 9.2.3 Mobile Application Testing (Minimum Coverage)

- [ ] OWASP Mobile Top 10 (current edition)
- [ ] Certificate pinning implementation
- [ ] Local data storage security
- [ ] Inter-process communication vulnerabilities
- [ ] Binary analysis and reverse engineering resistance
- [ ] Runtime tampering and hooking resistance
- [ ] Authentication and session handling on mobile

---

## 10. Severity Classification and SLA

*This section defines how vulnerabilities are classified by severity and the timeframes within which they must be remediated. Clear SLAs are essential for regulatory compliance and risk management.*

### 10.1 Severity Classification Framework

[Organization Name] uses the following severity classification for penetration testing findings, aligned with CVSS v3.1 base scores and contextual factors specific to the financial services environment:

| Severity Level | CVSS Score Range | Description | Example |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Vulnerabilities that allow immediate, unauthenticated, or easily exploitable access to sensitive data, critical systems, or could cause severe financial or reputational damage. Active exploitation likely or confirmed. | Unauthenticated RCE on internet-facing system; direct access to core banking database |
| **High** | 7.0 – 8.9 | Vulnerabilities that allow authenticated or chained exploitation to access sensitive data or critical systems. Significant risk of financial loss, data breach, or regulatory breach. | SQL injection enabling customer data extraction; authentication bypass on internal application |
| **Medium** | 4.0 – 6.9 | Vulnerabilities that require multiple conditions to exploit, provide limited access, or present moderate risk to confidentiality, integrity, or availability. | Reflected XSS; insecure direct object reference with limited data exposure; outdated TLS version |
| **Low** | 0.1 – 3.9 | Vulnerabilities with limited exploitability or impact. Generally require significant attacker advantage or result in minimal access. | Information disclosure of non-sensitive data; missing security headers; weak password policy on low-risk system |
| **Informational** | N/A | Observations, best practice recommendations, or configuration weaknesses that do not directly represent a security risk but should be reviewed. | Missing security header (informational); verbose error messages without exploitable data |

### 10.2 Contextual Severity Adjustment

CVSS scores shall serve as the baseline for severity classification. The Vulnerability Management Lead, in consultation with the CISO, may adjust severity ratings based on the following contextual factors:

| Factor | Adjustment |
|---|---|
| Vulnerability is on a critical financial system (e.g., core banking, payment processing) | Increase severity by one level |
| Vulnerability involves personal data as defined under PDPA | Increase severity by one level |
| Active exploitation of the vulnerability is confirmed in the wild | Increase severity to Critical |
| Effective compensating controls are in place that materially reduce exploitability | Decrease severity by one level (requires documented justification) |
| System is not internet-facing and access requires strong authentication | Decrease severity by one level (requires documented justification) |

*Any severity adjustment must be documented in the finding record with a clear rationale and approved by the CISO.*

### 10.3 Remediation SLA

*The following SLAs represent maximum permissible timeframes from the date of finding notification to confirmed remediation or accepted risk. SLAs are non-negotiable for Critical and High findings without CISO approval.*

| Severity Level | Initial Notification SLA | Remediation Target SLA | Maximum Extension (with CISO Approval) |
|---|---|---|---|
| **Critical** | Immediate (within 4 hours of finding) | **[3] business days** | Up to [7] business days with compensating control and CISO sign-off |
| **High** | Within 1 business day of finding | **[30] calendar days** | Up to [60] calendar days with documented justification and CISO sign-off |
| **Medium** | Within 3 business days of finding | **[90] calendar days** | Up to [180] calendar days with risk acceptance |
| **Low** | Within 5 business days of finding | **[180] calendar days** | Risk acceptance permissible with System Owner and CISO approval |
| **Informational** | Within report delivery | No mandatory remediation SLA — reviewed in next scheduled assessment | N/A |

### 10.4 Escalation Triggers

The following conditions shall trigger immediate escalation to the CISO:

- Discovery of a Critical finding during testing
- Evidence that a vulnerability has already been exploited (active compromise)
- Discovery of unexpected sensitive data exposures during testing
- Any finding that may trigger a regulatory notification obligation
- System Owner refusal to remediate a Critical or High finding within SLA

---

## 11. Remediation Tracking

*This section defines how penetration testing findings are tracked from identification through to confirmed closure. Effective tracking is essential for demonstrating regulatory compliance.*

### 11.1 Finding Registration

All penetration testing findings shall be registered in [Organization Name]'s [Vulnerability Management System / GRC Platform / Tracking Tool: specify system name] within [1] business day of the findings report being delivered.

Each finding record shall capture at minimum:

| Field | Description |
|---|---|
| **Finding ID** | Unique identifier (format: [PT-YYYY-###]) |
| **Engagement Reference** | Reference to the penetration testing engagement |
| **Finding Title** | Concise description of the vulnerability |
| **Severity** | Critical / High / Medium / Low / Informational |
| **CVSS Score** | Base CVSS v3.1 score |
| **Affected System(s)** | Hostname, IP address, URL, or application name |
| **Description** | Detailed description of the vulnerability |
| **Evidence** | Screenshots, logs, or proof-of-concept references |
| **Impact Assessment** | Business and regulatory impact of exploitation |
| **Recommended Remediation** | Tester-recommended fix |
| **Assigned Owner** | Name and role of remediation owner |
| **Date Identified** | Date finding was confirmed |
| **SLA Due Date** | Date by which remediation must be completed |
| **Status** | Open / In Progress / Remediated / Retesting / Closed / Risk Accepted |
| **Risk Acceptance** | Reference to risk acceptance if applicable |
| **Closure Date** | Date confirmed as remediated and closed |

### 11.2 Remediation Workflow

```
Finding Identified
       │
       ▼
Registered in Tracking System (within 1 business day)
       │
       ▼
Assigned to Remediation Owner
       │
       ▼
Remediation Plan Developed (within [5] business days for Critical/High)
       │
       ▼
Remediation Implemented
       │
       ▼
Remediation Evidence Submitted
       │
       ▼
Retest Conducted by InfoSec Team or Original Tester
       │
       ├──── Vulnerability Confirmed Remediated ──────► Finding Closed
       │
       └──── Vulnerability Persists ──────► Remediation Owner Notified
                                                  │
                                                  ▼
                                         Revised Remediation Plan
                                         (Escalated if SLA Breached)
```

### 11.3 Retesting

- Retesting shall be conducted for all Critical and High findings following remediation
- Retesting for Medium findings shall be conducted at the discretion of the Vulnerability Management Lead
- Retesting may be conducted by the original external tester (preferred for critical findings) or by the internal Information Security Team
- Retesting scope shall be limited to the specific vulnerability remediated
- Retesting results shall be documented and appended to the original finding record

### 11.4 Risk Acceptance

Where a finding cannot be remediated within the defined SLA, the System Owner may request a risk acceptance subject to the following conditions:

| Severity | Risk Acceptance Authority | Required Documentation |
|---|---|---|
| Critical | CISO + Board Risk Committee notification | Risk acceptance form, compensating controls documented, remediation roadmap, escalation to BRC |
| High | CISO approval | Risk acceptance form, compensating controls documented, remediation roadmap |
| Medium | System Owner + CISO awareness | Risk acceptance form, compensating controls documented |
| Low | System Owner | Risk acceptance form |
| Informational | System Owner | Documented decision in tracking system |

*Risk acceptances shall be time-limited to a maximum of [12] months and shall be subject to review at each subsequent penetration test of the affected system.*

### 11.5 Metrics and Reporting

The Vulnerability Management Lead shall track and report the following metrics on a [monthly / quarterly] basis:

| Metric | Description | Target |
|---|---|---|
| **Finding Closure Rate** | Percentage of findings closed within SLA | ≥ [90]% |
| **Mean Time to Remediate (MTTR) — Critical** | Average days to close Critical findings | ≤ [3] business days |
| **Mean Time to Remediate (MTTR) — High** | Average days to close High findings | ≤ [30] calendar days |
| **Open Critical Findings** | Number of open Critical findings at reporting date | Zero (or justified with CISO approval) |
| **Repeat Findings Rate** | Percentage of findings that recur in subsequent tests | ≤ [10]% |
| **Risk Acceptance Rate** | Percentage of findings accepted rather than remediated | ≤ [5]% |
| **Engagement Completion Rate** | Percentage of scheduled tests completed on time | ≥ [95]% |

---

## 12. Reporting Requirements

*This section defines the deliverables expected from each engagement and the reporting chain for findings.*

### 12.1 Engagement Deliverables

For each penetration testing engagement, the following deliverables are required:

| Deliverable | Required For | Timeline | Recipient |
|---|---|---|---|
| **Preliminary Findings Brief** | Critical/High findings only | Within 24 hours of discovery | CISO, Vulnerability Management Lead, System Owner |
| **Technical Report (Draft)** | All engagements | Within [10] business days of test completion | Vulnerability Management Lead, InfoSec Team |
| **Technical Report (Final)** | All engagements | Within [5] business days of draft review | CISO, System Owners, Risk Management |
| **Executive Summary** | All engagements | Included in Final Report | CISO, CIO, Risk Management Committee |
| **Retest Report** | Critical/High findings | Within [5] business days of retest | Vulnerability Management Lead, CISO, System Owner |
| **Remediation Status Report** | All engagements | [Quarterly / as required] | CISO, Risk Management Committee |

### 12.2 Report Structure

*All penetration testing reports (technical) shall include at minimum the following sections:*

1. **Executive Summary** — Non-technical summary for senior management, including overall risk rating, critical findings, and remediation status
2. **Engagement Overview** — Scope, methodology, dates, and testing team
3. **Findings Summary** — Aggregate finding count by severity
4. **Detailed Findings** — For each finding: description, evidence, impact, CVSS score, and recommended remediation
5. **Remediation Roadmap** — Prioritized list of recommended remediation actions
6. **Appendices** — Tool outputs, screenshots, and supporting evidence

### 12.3 Management Reporting

| Report | Frequency | Content | Recipient |
|---|---|---|---|
| Penetration Testing Status Report | Quarterly | Programme completion status, open findings summary, SLA compliance metrics | CISO, CIO, Risk Management Committee |
| Annual Penetration Testing Summary | Annually | Programme outcomes, year-on-year trend analysis, residual risk posture | Board Risk Committee, CISO, CIO |
| Critical Finding Alert | As required (within 4 hours) | Finding details, impact assessment, immediate recommended actions | CISO, CIO, System Owner |
| Regulatory Report | As required by BNM | Material penetration testing findings as required by regulatory direction | CISO, Legal & Compliance → BNM |

---

## 13. Exceptions and Waivers

*This section defines how exceptions to this policy are managed. All exceptions must be documented and time-limited.*

### 13.1 Exception Process

13.1.1 Any request to deviate from the requirements of this policy must be submitted to the Vulnerability Management Lead using the Exception Request Form (Appendix D).

13.1.2 Exception requests must include:

- The specific policy requirement for which an exception is sought
- Business justification for the exception
- Risk assessment of the proposed deviation
- Proposed compensating controls
- Proposed duration of the exception
- Name and role of the requestor

13.1.3 Exception requests shall be reviewed and approved (or rejected) in accordance with the following authority matrix:

| Exception Type | Approval Authority |
|---|---|
| Testing frequency reduction — non-critical system | CISO |
| Testing frequency reduction — critical system | CISO + Risk Management Committee |
| Tester qualification waiver | CISO |
| SLA extension — High findings | CISO |
| SLA extension — Critical findings | CISO + Board Risk Committee notification |
| Scope exclusion | CISO + System Owner |

13.1.4 Approved exceptions shall be:

- Documented in the exception register
- Time-limited to a maximum of [12] months
- Subject to review prior to expiry
- Reported to the Risk Management Committee at the next scheduled meeting

13.1.5 Exceptions shall not be granted if doing so would place [Organization Name] in direct breach of a mandatory BNM RMiT requirement.

---

## 14. Review and Approval

### 14.1 Policy Review Schedule

This policy shall be reviewed:

- **Semi-annually** by the Vulnerability Management Lead as a scheduled review
- **On material change** to the technology environment, threat landscape, or regulatory requirements
- **Following a significant security incident** where this policy's requirements were implicated
- **On direction** from the CISO, Board Risk Committee, or BNM

### 14.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 14.3 Approval Sign-Off

*This policy is approved by the following authorized signatories:*

| Role | Name | Signature | Date |
|---|---|---|---|
| Vulnerability Management Lead (Policy Owner) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Information Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer | [Name] | [Signature] | [Date] |
| Board Risk Committee Representative | [Name] | [Signature] | [Date] |

---

## 15. References

*This section lists all regulatory instruments, standards, and internal documents referenced in or relevant to this policy.*

### 15.1 Regulatory References

| Reference | Issuing Body | Relevant Section | URL / Source |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11.12 — Penetration Testing | BNM Official Portal |
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Clause 11.1–11.11 — Vulnerability Management | BNM Official Portal |
| Guidelines on Management of Cyber Risk | Bank Negara Malaysia | [Relevant Sections] | BNM Official Portal |
| Personal Data Protection Act 2010 | Parliament of Malaysia | Part III — Security of Personal Data | Attorney General's Chambers |
| National Cyber Security Policy | NACSA / MOSTI | [Relevant Sections] | NACSA Official Portal |
| [Additional Regulation / Guideline] | [Authority] | [Section] | [Source] |

### 15.2 Standards and Frameworks

| Standard / Framework | Version | Applicable Section |
|---|---|---|
| OWASP Testing Guide | Current (v4.2+) | Web application testing methodology |
| OWASP Mobile Security Testing Guide | Current | Mobile application testing |
| PTES (Penetration Testing Execution Standard) | Current | General penetration testing methodology |
| OSSTMM | v3 | Network and infrastructure testing |
| NIST SP 800-115 | Current | Technical security testing and assessment |
| MITRE ATT&CK | Current | Adversary simulation and red team planning |
| CVSS v3.1 | 3.1 | Vulnerability severity scoring |
| ISO/IEC 27001:2022 | 2022 | Annex A — Information security controls |
| Cloud Security Alliance CCM | Current | Cloud security assessment |

### 15.3 Internal Policy References

| Document | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Doc ID] | CISO |
| Vulnerability Management Policy | [Doc ID] | Vulnerability Management Lead |
| Change Management Policy | [Doc ID] | [Owner] |
| Third-Party Risk Management Policy | [Doc ID] | [Owner] |
| Incident Response Policy | [Doc ID] | [Owner] |
| Data Classification Policy | [Doc ID] | [Owner] |
| IT Risk Management Framework | [Doc ID] | Chief Risk Officer |

---

## 16. Appendices

### Appendix A — Penetration Test Scope Definition Template

*This template must be completed and approved before each penetration testing engagement commences.*

---

**PENETRATION TEST SCOPE DEFINITION**

| Field | Details |
|---|---|
| **Engagement ID** | [PT-YYYY-###] |
| **Engagement Name** | [e.g., Annual External Network Penetration Test 2025] |
| **Testing Type** | [External Network / Web Application / Internal Network / etc.] |
| **Testing Approach** | [Black-box / Grey-box / White-box] |
| **Target Environment** | [Production / Staging / Development] |
| **Planned Start Date** | [Date] |
| **Planned End Date** | [Date] |
| **System Owner** | [Name, Role] |
| **Vulnerability Management Lead** | [Name] |
| **Testing Team / Provider** | [Name of team or external provider] |

**In-Scope Systems:**

| System Name | IP Address / URL | System Type | Owner | Notes |
|---|---|---|---|---|
| [System Name] | [IP / URL] | [Web App / Server / Network / etc.] | [Owner] | [Any special handling] |
| [System Name] | [IP / URL] | [Type] | [Owner] | [Notes] |

**Explicitly Out-of-Scope Systems:**

| System Name | IP Address / URL | Reason for Exclusion |
|---|---|---|
| [System Name] | [IP / URL] | [Reason] |

**Emergency Contacts:**

| Role | Name | Phone | Email |
|---|---|---|---|
| Engagement Abort Authority | [Name] | [Phone] | [Email] |
| IT Operations Emergency Contact | [Name] | [Phone] | [Email] |
| CISO / Security Contact | [Name] | [Phone] | [Email] |

---

### Appendix B — System Owner Authorization Form

*System Owners must complete and sign this form before any penetration testing of systems under their ownership.*

---

**SYSTEM OWNER AUTHORIZATION FOR PENETRATION TESTING**

I, **[System Owner Name]**, in my capacity as System Owner for the systems listed below, hereby authorize **[Testing Team / Provider Name]** to conduct penetration testing of the following systems in accordance with the [Organization Name] Penetration Testing Policy and the Rules of Engagement for Engagement ID **[PT-YYYY-###]**.

**Systems Authorized for Testing:**

| System Name | IP Address / URL | Testing Window |
|---|---|---|
| [System Name] | [IP / URL] | [Dates/Times] |

I confirm that I have reviewed and understood the Rules of Engagement for this engagement and that I am authorized to provide this consent on behalf of [Organization Name].

| Field | Details |
|---|---|
| **System Owner Name** | [Name] |
| **Role / Title** | [Title] |
| **Department** | [Department] |
| **Signature** | [Signature] |
| **Date** | [Date] |

---

### Appendix C — Rules of Engagement Template

*This template must be completed, reviewed by Legal & Compliance, and signed by all parties before testing commences.*

---

**RULES OF ENGAGEMENT**
**Engagement ID:** [PT-YYYY-###]
**Engagement Name:** [Engagement Name]
**Date Prepared:** [Date]

**Parties:**
- [Organization Name] (Client)
- [Testing Provider / Internal Team] (Tester)

**1. Authorized Scope:** [Reference Appendix A Scope Definition for this engagement]

**2. Authorized Testing Techniques:**
- [List authorized techniques: e.g., network scanning, vulnerability exploitation, password testing, etc.]

**3. Explicitly Prohibited Actions:**
- Denial-of-service attacks against any target
- Exfiltration of customer or personal data
- Deployment of persistent backdoors
- Testing of out-of-scope systems
- [Additional prohibitions]

**4. Testing Window:**
- Start: [Date/Time/Timezone]
- End: [Date/Time/Timezone]
- After-hours testing: [Permitted / Not Permitted / As Directed]

**5. Communication Protocol:**
- Daily status updates to be provided by: [Time] via [Method]
- Immediate notification required for: [Critical findings, unexpected system impact, suspected active compromise]

**6. Emergency Abort Procedure:**
- Testing shall be immediately suspended if directed by [Abort Authority Name/Role]
- Emergency abort contact: [Phone Number]

**7. Evidence Handling:**
- All evidence to be stored in [encrypted container / approved tool]
- Evidence to be transferred to [Organization Name] and deleted from tester systems within [X] days of final report delivery

**Signatures:**

| Role | Name | Signature | Date |
|---|---|---|---|
| System Owner | [Name] | | [Date] |
| CISO / Authorized Representative | [Name] | | [Date] |
| Lead Tester | [Name] | | [Date] |
| Testing Provider Representative | [Name] | | [Date] |

---

### Appendix D — Exception Request Form

*Use this form to request a formal exception to any requirement within this policy.*

---

**PENETRATION TESTING POLICY — EXCEPTION REQUEST**

| Field | Details |
|---|---|
| **Exception Request ID** | [EXC-YYYY-###] |
| **Date of Request** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Role** | [Role] |
| **Department** | [Department] |
| **Policy Reference** | [Section and clause for which exception is sought] |
| **Exception Description** | [Describe the deviation from policy requirements] |
| **Business Justification** | [Explain why this exception is necessary] |
| **Risk Assessment** | [Describe the risk introduced by this deviation] |
| **Proposed Compensating Controls** | [Describe controls that will mitigate the risk during the exception period] |
| **Requested Exception Duration** | [Start Date] to [End Date] — Maximum 12 months |
| **Approval Required From** | [Determined by Section 13.3 of this policy] |

**Approval Decision:**

| Approver Role | Name | Decision (Approved/Rejected) | Conditions | Signature | Date |
|---|---|---|---|---|---|
| [Role] | [Name] | [Decision] | [Conditions if any] | | [Date] |

---

### Appendix E — Penetration Testing Finding Record Template

*Use this template for each individual finding identified during a penetration testing engagement.*

---

**FINDING RECORD**

| Field | Details |
|---|---|
| **Finding ID** | [PT-YYYY-###-F##] |
| **Engagement ID** | [PT-YYYY-###] |
| **Finding Title** | [Short descriptive title] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **CVSS v3.1 Base Score** | [X.X] |
| **CVSS Vector String** | [CVSS:3.1/AV:.../AC:.../...] |
| **Contextual Severity Adjustment** | [None / Upgraded to [Severity] because [Reason] / Downgraded to [Severity] because [Reason]] |
| **Final Severity** | [Final assigned severity] |
| **Affected System(s)** | [Hostname / IP / URL / Application name] |
| **Date Identified** | [Date] |
| **SLA Due Date** | [Date — calculated per Section 10.3] |
| **Assigned Remediation Owner** | [Name, Role] |
| **Status** | [Open / In Progress / Remediated / Retesting / Closed / Risk Accepted] |

**Description:**
[Detailed description of the vulnerability, how it was discovered, and what conditions allow it to be exploited.]

**Evidence:**
[Screenshots, log extracts, proof-of-concept code or references — attach as separate evidence package where appropriate.]

**Impact Assessment:**
[Description of the potential business, operational, financial, and regulatory impact if this vulnerability were exploited.]

**Recommended Remediation:**
[Specific, actionable remediation guidance provided by the tester.]

**Remediation Actions Taken:**
[To be completed by the remediation owner — describe the fix implemented, date applied, and any supporting change request reference.]

**Retest Result:**
[To be completed by InfoSec Team following retest — confirm whether vulnerability has been successfully remediated, with evidence.]

**Closure:**

| Field | Details |
|---|---|
| **Closure Date** | [Date] |
| **Closed By** | [Name, Role] |
| **Closure Method** | [Remediated / Risk Accepted / Duplicate / False Positive] |
| **Risk Acceptance Reference** | [If applicable] |

---

### Appendix F — Approved Penetration Testing Tools Register

*This appendix lists tools that are pre-approved for use in penetration testing engagements. Testers wishing to use tools not on this list must obtain prior written approval from the CISO.*

*[Note: Tool approval is at the discretion of the CISO and the Vulnerability Management Lead. This list should be reviewed and updated semi-annually.]*

| Tool Name | Category | Approved Use Case | Restrictions |
|---|---|---|---|
| Nmap | Network scanning | Host discovery, port scanning, service enumeration | Production scanning must be scheduled during approved window |
| Nessus / Tenable.sc | Vulnerability scanning | Authenticated and unauthenticated vulnerability scanning | Credentialed scans require prior System Owner approval |
| Burp Suite Professional | Web application testing | Web application and API security testing | — |
| Metasploit Framework | Exploitation | Vulnerability validation (with restrictions) | No persistent payloads on production; exploit use requires pre-approval for production |
| Cobalt Strike | Red team / C2 simulation | Authorized red team engagements only | Red team engagements only; requires CISO approval |
| Wireshark / tcpdump | Traffic analysis | Packet capture and network traffic analysis | Must not capture production traffic containing customer data without DPO approval |
| Hashcat / John the Ripper | Credential testing | Password hash cracking (offline, on captured hashes only) | Hashes must not contain live customer credentials |
| Nikto | Web server scanning | Web server misconfiguration detection | — |
| SQLMap | SQL injection | Automated SQL injection testing (controlled) | Use with caution on production — requires System Owner approval |
| OWASP ZAP | Web application testing | Web application security scanning | — |
| [Additional Tool] | [Category] | [Use Case] | [Restrictions] |

---

### Appendix G — Annual Penetration Testing Programme Template

*The Vulnerability Management Lead shall prepare and obtain CISO approval for the annual penetration testing programme at the start of each calendar year.*

---

**ANNUAL PENETRATION TESTING PROGRAMME — [YEAR]**

| Engagement # | Engagement Name | Testing Type | Target Systems | Planned Quarter | Testing Approach | Provider | Status |
|---|---|---|---|---|---|---|---|
| PT-[YEAR]-001 | Annual External Network Penetration Test | External Network | [Target IPs/URLs] | Q1 | Grey-box | [Provider Name] | [Planned / In Progress / Completed] |
| PT-[YEAR]-002 | Core Banking Web Application Assessment | Web Application | [Application Name] | Q1 | White-box | [Provider Name] | [Status] |
| PT-[YEAR]-003 | Internal Network Penetration Test | Internal Network | [Target Scope] | Q2 | Grey-box | [Provider Name] | [Status] |
| PT-[YEAR]-004 | Mobile Application Assessment | Mobile Application | [App Names] | Q2 | Grey-box | [Provider Name] | [Status] |
| PT-[YEAR]-005 | Cloud Environment Security Assessment | Cloud | [Cloud Account/Scope] | Q3 | White-box | [Provider Name] | [Status] |
| PT-[YEAR]-006 | Social Engineering — Phishing Simulation | Social Engineering | All staff | Q1 & Q3 | Black-box | [Provider Name] | [Status] |
| PT-[YEAR]-007 | [Additional Engagement] | [Type] | [Target] | [Quarter] | [Approach] | [Provider] | [Status] |

**Programme Approval:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Vulnerability Management Lead | [Name] | | [Date] |
| CISO | [Name] | | [Date] |

---

*End of Document*

---

**Document Control Notice**

*This document is classified as **Confidential**. It shall not be reproduced, disclosed, or distributed outside of [Organization Name] without the written authorization of the Chief Information Security Officer. Physical copies of this document must be stored securely and destroyed in accordance with [Organization Name]'s records management procedures when superseded or no longer required.*

*© [Year] [Organization Name]. All rights reserved.*