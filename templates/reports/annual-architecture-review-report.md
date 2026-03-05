# Annual Architecture Review Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Operations Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Review Frequency** | Annual |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable Clauses** | RMiT 10.36 |

---

> **Confidentiality Notice:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for the use of authorized personnel. Unauthorized disclosure, copying, distribution, or use of this document or its contents is strictly prohibited and may be unlawful. If you have received this document in error, please notify the issuing department immediately and destroy all copies.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Assessment Scope and Criteria](#3-assessment-scope-and-criteria)
4. [Methodology](#4-methodology)
5. [Findings and Ratings](#5-findings-and-ratings)
6. [Network Segmentation Zones](#6-network-segmentation-zones)
7. [Firewall Rule Review Schedule](#7-firewall-rule-review-schedule)
8. [Network Architecture Diagram](#8-network-architecture-diagram)
9. [Remediation and Action Plan](#9-remediation-and-action-plan)
10. [Risk Register Update](#10-risk-register-update)
11. [Compliance Posture Summary](#11-compliance-posture-summary)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Executive Summary

*Provide a concise, senior-leadership-facing summary of the annual architecture review. Highlight the overall assessment outcome, critical findings, remediation priorities, and any changes to the organization's risk posture since the last review cycle. This section should be self-contained and readable without reference to the technical sections below.*

### 1.1 Review Overview

| Field | Details |
|---|---|
| **Review Period** | [Start Date] to [End Date] |
| **Report Date** | [Report Date] |
| **Review Lead** | [Review Lead Name], [Title] |
| **Overall Architecture Rating** | [Satisfactory / Requires Improvement / Unsatisfactory] |
| **Total Findings** | [Number] |
| **Critical Findings** | [Number] |
| **High Findings** | [Number] |
| **Medium Findings** | [Number] |
| **Low Findings** | [Number] |
| **Informational Observations** | [Number] |
| **Findings Closed from Prior Review** | [Number] |
| **Findings Carried Forward** | [Number] |

### 1.2 Key Observations

*Summarize the three to five most significant observations arising from this review. Each observation should reference the relevant finding ID for traceability.*

- **Observation 1:** [Description of key observation referencing Finding ID, e.g., AARR-2025-001]
- **Observation 2:** [Description of key observation referencing Finding ID]
- **Observation 3:** [Description of key observation referencing Finding ID]
- **Observation 4:** [Description of key observation referencing Finding ID]
- **Observation 5:** [Description of key observation referencing Finding ID]

### 1.3 Strategic Risk Implications

*Describe how the findings from this review affect the organization's overall technology risk posture. Reference relevant risk appetite statements or board-approved risk tolerance thresholds where applicable.*

[Provide a paragraph-level narrative on strategic risk implications, linking architecture vulnerabilities or gaps to business risk impact. Note any systemic risks, concentration risks, or single points of failure identified during the review.]

### 1.4 Summary of Recommendations

| Priority | Recommendation | Target Date | Owner |
|---|---|---|---|
| Critical | [Recommendation summary] | [Date] | [Owner] |
| High | [Recommendation summary] | [Date] | [Owner] |
| High | [Recommendation summary] | [Date] | [Owner] |
| Medium | [Recommendation summary] | [Date] | [Owner] |
| Medium | [Recommendation summary] | [Date] | [Owner] |
| Low | [Recommendation summary] | [Date] | [Owner] |

### 1.5 Management Response

*Include a brief statement from the Chief Information Officer (CIO) or Chief Technology Officer (CTO) acknowledging the findings and affirming commitment to the remediation plan.*

> [Insert management response statement. This should be authored by the CIO/CTO and signed off prior to submission to the Board Risk Committee or relevant governance body.]

---

## 2. Purpose and Scope

### 2.1 Purpose

*State the purpose of this document, its role within the organization's technology risk management framework, and its relationship to the regulatory obligations under BNM RMiT.*

This Annual Architecture Review Report documents the findings, assessments, and recommendations arising from the annual review of [Organization Name]'s network architecture, conducted in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT)** Policy Document (Issued: [BNM RMiT Issue Date]). Specifically, this report addresses the requirements set out in **RMiT Clause 10.36**, which mandates that financial institutions conduct periodic reviews of network architecture to ensure adequacy, security, and alignment with the institution's risk management objectives.

This report serves the following purposes:

- To provide a comprehensive and documented assessment of the current state of [Organization Name]'s network architecture.
- To evaluate the adequacy of network segmentation, perimeter controls, access control mechanisms, and related security configurations.
- To identify gaps, weaknesses, and areas of non-conformance against regulatory requirements, internal standards, and industry best practices.
- To propose a prioritized remediation plan and assign accountability for the resolution of identified findings.
- To support the annual technology risk reporting obligations to the Board Risk Committee, Senior Management, and Bank Negara Malaysia where applicable.
- To demonstrate continuous improvement in the organization's network security posture over successive review cycles.

### 2.2 Regulatory Context

*Explain the regulatory basis for this document and its linkage to specific BNM RMiT clauses.*

[Organization Name] is subject to the BNM Risk Management in Technology (RMiT) Policy Document as a **[licensed bank / licensed investment bank / insurance company / takaful operator / payment system operator / other licensed entity]** regulated by Bank Negara Malaysia. RMiT establishes binding requirements for the governance, management, and oversight of technology risk across all regulated financial institutions in Malaysia.

**RMiT Clause 10.36** specifically requires that:

> *[Insert verbatim text of RMiT Clause 10.36 or a precise paraphrase of the clause requirement as published by BNM. Do not paraphrase in a manner that weakens the regulatory obligation.]*

This review has been structured to address each sub-element of Clause 10.36 and to generate evidence of compliance suitable for regulatory examination.

In addition, this report is informed by the following related regulatory and standards frameworks:

| Framework | Clause / Section | Relevance |
|---|---|---|
| BNM RMiT | Clause 10.36 | Network architecture review obligation |
| BNM RMiT | Clause 10.30 – 10.35 | Network security controls and segmentation |
| BNM RMiT | Clause 10.1 – 10.10 | Technology risk governance |
| BNM PDPA Guidelines | [Section Reference] | Data protection and network boundary controls |
| NACSA Cybersecurity Framework | [Reference] | Critical information infrastructure protection |
| ISO/IEC 27001:2022 | Annex A, Control 8.22 | Network segregation |
| ISO/IEC 27001:2022 | Annex A, Control 8.20 | Networks security |
| NIST Cybersecurity Framework | PR.AC, PR.PT | Network access control and protective technology |
| PCI DSS v4.0 | Requirement 1 | Network security controls (where applicable) |
| [Other Internal Policy] | [Reference] | [Relevance] |

### 2.3 Scope of Review

*Define clearly what is included and excluded from the scope of this review. Scope boundaries must be sufficiently precise to allow an auditor to determine whether all relevant systems and environments have been assessed.*

#### 2.3.1 In-Scope Components

The following components of [Organization Name]'s technology environment are within the scope of this annual architecture review:

**Network Infrastructure:**

- Core switching and routing infrastructure (headquarters, data centres, and branch networks)
- Wide Area Network (WAN) and Software-Defined WAN (SD-WAN) architecture
- Wireless Local Area Network (WLAN) infrastructure
- Internet connectivity and ingress/egress points
- Virtual Private Network (VPN) infrastructure (site-to-site and remote access)
- Out-of-band management networks
- [Other in-scope network components]

**Security Controls:**

- Perimeter firewall infrastructure (all tiers and environments)
- Web Application Firewalls (WAF)
- Intrusion Detection and Prevention Systems (IDS/IPS)
- Network Access Control (NAC) systems
- Demilitarised Zones (DMZ) configurations
- Zero Trust Network Access (ZTNA) components (if applicable)
- [Other in-scope security controls]

**Environments:**

- Production environment
- Disaster Recovery (DR) environment
- User Acceptance Testing (UAT) environment
- Development environment (where connected to production networks)
- Cloud environments (public, private, hybrid) — [List specific cloud providers and environments]
- [Other in-scope environments]

**Data Centre and Hosting:**

- Primary Data Centre: [Location/Name]
- Secondary / DR Data Centre: [Location/Name]
- Colocation facilities: [Location/Name] (if applicable)
- Public cloud tenancies: [Provider and Account/Subscription details]

#### 2.3.2 Out-of-Scope Components

The following are explicitly excluded from the scope of this review:

| Excluded Component | Reason for Exclusion | Covered By |
|---|---|---|
| [Component Name] | [Reason] | [Alternative review/assessment] |
| [Component Name] | [Reason] | [Alternative review/assessment] |
| [Component Name] | [Reason] | [Alternative review/assessment] |
| Third-party managed networks (fully outsourced) | Covered under vendor assurance programme | Vendor Assurance Review [Reference] |
| [Component Name] | [Reason] | [Alternative review/assessment] |

#### 2.3.3 Scope Change from Prior Year

*Document any changes in scope from the previous annual review cycle.*

| Change | Description | Reason |
|---|---|---|
| Added | [New in-scope component] | [Reason, e.g., new system commissioned] |
| Added | [New in-scope component] | [Reason] |
| Removed | [Previously in-scope component] | [Reason, e.g., system decommissioned] |
| Modified | [Modified scope boundary] | [Reason] |

### 2.4 Objectives of the Review

*List the specific objectives that this review was designed to achieve.*

The objectives of this annual architecture review are to:

1. Assess whether the current network architecture remains adequate to support [Organization Name]'s business operations, risk appetite, and regulatory obligations.
2. Evaluate the effectiveness of network segmentation in isolating critical systems, sensitive data, and high-risk environments.
3. Review the completeness, currency, and accuracy of network architecture documentation.
4. Assess the alignment of firewall rule sets with the principle of least privilege and the organization's network access policy.
5. Identify single points of failure, redundancy gaps, and capacity constraints within the network architecture.
6. Evaluate the adequacy of controls at network boundaries, including perimeter, internal, and cloud-to-on-premises boundaries.
7. Assess compliance with BNM RMiT requirements pertaining to network security and architecture.
8. Track the status of remediation actions arising from the prior year's annual architecture review.
9. Provide senior management with an evidence-based assessment of the organization's network security posture.
10. [Additional objective specific to this review cycle]

---

## 3. Assessment Scope and Criteria

*This section defines the precise boundaries of the assessment, the criteria against which the network architecture has been evaluated, and the baseline standards used to determine compliance and adequacy. Reviewers should ensure that criteria are traceable to regulatory requirements, internal policies, or recognized industry standards.*

### 3.1 Assessment Boundary Definition

*Provide a precise technical description of the assessment boundary. This should be sufficiently detailed for an auditor or independent reviewer to verify that the scope has been correctly applied.*

#### 3.1.1 Physical Boundary

| Site | Address | Role | In Scope |
|---|---|---|---|
| [Site Name] | [Address] | Primary Data Centre | Yes |
| [Site Name] | [Address] | Secondary / DR Data Centre | Yes |
| [Site Name] | [Address] | Head Office | Yes |
| [Site Name] | [Address] | Regional Office | Yes |
| [Site Name] | [Address] | Branch | Yes / Partial / No |
| [Site Name] | [Address] | [Role] | [Yes/No] |

#### 3.1.2 Logical Boundary

| Environment | Description | Criticality | In Scope |
|---|---|---|---|
| Production (Internet-facing) | Systems accessible from the public internet | Critical | Yes |
| Production (Internal) | Internal business systems not internet-facing | High | Yes |
| Disaster Recovery | DR failover environment | Critical | Yes |
| UAT / Staging | Pre-production testing environment | Medium | Yes |
| Development | Development environment | Low–Medium | Partial |
| Management Network | Out-of-band management | Critical | Yes |
| Cloud (IaaS/PaaS) | [Provider] — [Environment description] | [Criticality] | Yes |
| Third-Party / Partner | Network segments connecting third parties | High | Partial |

#### 3.1.3 Systems and Assets Boundary

| Asset Category | Examples | Count (Approx.) | In Scope |
|---|---|---|---|
| Core network devices | Routers, Layer-3 switches | [Number] | Yes |
| Access layer switches | Distribution and access switches | [Number] | Yes |
| Firewalls | Perimeter, internal, DMZ firewalls | [Number] | Yes |
| Load balancers | Application and network load balancers | [Number] | Yes |
| Intrusion detection/prevention | IDS/IPS sensors and management consoles | [Number] | Yes |
| VPN concentrators | Remote access and site-to-site VPN | [Number] | Yes |
| WAF appliances/services | Web Application Firewalls | [Number] | Yes |
| NAC systems | Network Access Control | [Number] | Yes |
| DNS infrastructure | Internal and external DNS | [Number] | Yes |
| DHCP infrastructure | DHCP servers and relays | [Number] | Yes |
| Wireless infrastructure | Access points, controllers | [Number] | Yes |
| SDN/SD-WAN controllers | Software-defined networking | [Number] | Yes |
| Cloud network components | VPC, security groups, NACLs, virtual firewalls | [Number] | Yes |

### 3.2 Assessment Criteria

*Define the specific criteria and standards against which the architecture is assessed. Each criterion should be traceable to a regulatory requirement, internal policy, or recognized standard.*

#### 3.2.1 Regulatory Criteria

| Criterion ID | Description | Source | Clause/Section |
|---|---|---|---|
| RC-001 | Network architecture shall be reviewed at least annually for adequacy and security | BNM RMiT | 10.36 |
| RC-002 | Network segmentation shall isolate critical systems from non-critical systems | BNM RMiT | 10.30 |
| RC-003 | Firewall rules shall be reviewed and approved on a defined schedule | BNM RMiT | 10.31 |
| RC-004 | All network access, including remote access, shall be subject to appropriate controls | BNM RMiT | 10.32 |
| RC-005 | Network architecture diagrams shall be maintained and kept current | BNM RMiT | 10.33 |
| RC-006 | DMZ shall be implemented for systems exposed to external networks | BNM RMiT | 10.34 |
| RC-007 | Intrusion detection and prevention capabilities shall be deployed at critical network points | BNM RMiT | 10.35 |
| RC-008 | [Additional regulatory criterion] | [Source] | [Reference] |

#### 3.2.2 Internal Policy Criteria

| Criterion ID | Description | Source Document | Version |
|---|---|---|---|
| IP-001 | [Internal criterion description] | [Policy name, e.g., Network Security Policy] | [Version] |
| IP-002 | [Internal criterion description] | [Policy name] | [Version] |
| IP-003 | [Internal criterion description] | [Policy name] | [Version] |
| IP-004 | [Internal criterion description] | [Policy name] | [Version] |
| IP-005 | Network change management process must be followed for all architectural changes | IT Change Management Policy | [Version] |

#### 3.2.3 Industry Standard Criteria

| Criterion ID | Description | Standard | Reference |
|---|---|---|---|
| IS-001 | Network zones shall be defined based on trust levels and data sensitivity | ISO/IEC 27001:2022 | A.8.22 |
| IS-002 | Network services, protocols, and ports used shall be documented and justified | ISO/IEC 27001:2022 | A.8.20 |
| IS-003 | Wireless networks shall be segregated from wired production networks | ISO/IEC 27001:2022 | A.8.22 |
| IS-004 | Network traffic between zones shall be filtered by stateful inspection or equivalent | NIST SP 800-41 | Section 3 |
| IS-005 | Default deny posture shall be applied at network boundaries | CIS Controls v8 | Control 12 |
| IS-006 | [Additional standard criterion] | [Standard] | [Reference] |

### 3.3 Rating Scale

*Define the rating scale used to assess individual criteria and overall architecture components. Consistent use of this scale ensures comparability across review cycles.*

#### 3.3.1 Finding Severity Ratings

| Severity | Definition | Remediation Timeline |
|---|---|---|
| **Critical** | A finding that represents an immediate and significant threat to the confidentiality, integrity, or availability of critical systems or data. Exploitation could result in material financial loss, regulatory breach, or reputational damage. | Immediate — within 30 days |
| **High** | A finding that represents a significant weakness in the control environment. If left unaddressed, it could materially increase risk exposure. | Short-term — within 90 days |
| **Medium** | A finding that represents a moderate weakness. It may not immediately elevate risk but indicates a gap that should be addressed to maintain a strong control posture. | Medium-term — within 180 days |
| **Low** | A finding that represents a minor weakness or deviation from best practice. Risk impact is limited in isolation. | Long-term — within 12 months |
| **Informational** | An observation or recommendation that does not represent a control weakness but is noted to support continuous improvement. | As per management discretion |

#### 3.3.2 Component Maturity Ratings

| Rating | Description |
|---|---|
| **Optimised** | Architecture component meets all criteria, evidence of continuous improvement is present, and the component is proactively managed. |
| **Managed** | Architecture component meets all mandatory criteria. Processes are defined and consistently followed. Minor improvement opportunities exist. |
| **Defined** | Architecture component meets most criteria. Processes are documented but may not be consistently applied. Some gaps exist. |
| **Developing** | Architecture component meets some criteria. Significant gaps are present. Improvement is in progress but not yet complete. |
| **Initial** | Architecture component does not meet mandatory criteria. Processes are ad hoc or absent. Immediate remediation is required. |

#### 3.3.3 Overall Architecture Adequacy Rating

| Rating | Description | Threshold |
|---|---|---|
| **Satisfactory** | No critical or high findings. Architecture adequately supports business and regulatory requirements. | Zero critical findings; zero or one high finding |
| **Requires Improvement** | One or more high findings, or multiple medium findings. Architecture generally adequate but material improvements are necessary. | One or more high findings; or three or more medium findings |
| **Unsatisfactory** | One or more critical findings. Architecture does not adequately support business or regulatory requirements. Immediate management escalation required. | One or more critical findings |

---

## 4. Methodology

*Describe the methodology used to conduct the architecture review. This section provides the procedural basis for the assessment and ensures that findings are reproducible and defensible.*

### 4.1 Review Approach

*Summarize the overall approach to the review, including whether it was conducted internally, by a third party, or as a hybrid engagement.*

This annual architecture review was conducted using a **[internal / third-party / hybrid]** approach. The review team comprised:

| Name | Title | Organization | Role in Review |
|---|---|---|---|
| [Name] | [Title] | [Organization Name / Third Party] | Review Lead |
| [Name] | [Title] | [Organization Name / Third Party] | Network Architecture Assessor |
| [Name] | [Title] | [Organization Name / Third Party] | Security Controls Assessor |
| [Name] | [Title] | [Organization Name] | Internal Subject Matter Expert |
| [Name] | [Title] | [Organization Name] | Internal Subject Matter Expert |

The review was conducted between **[Start Date]** and **[End Date]**, comprising [Number] business days of active assessment activity.

### 4.2 Data Collection Methods

*Describe the methods used to collect evidence and information for the assessment.*

The following data collection methods were employed:

#### 4.2.1 Documentation Review

*List the documentation reviewed as part of this assessment.*

| Document | Version / Date | Purpose |
|---|---|---|
| Network Architecture Diagram (Production) | [Version / Date] | Baseline architecture understanding |
| Network Architecture Diagram (DR) | [Version / Date] | DR architecture assessment |
| Network Security Policy | [Version / Date] | Policy compliance assessment |
| Firewall Rule Sets (all applicable firewalls) | [Date extracted] | Firewall rule review |
| Network Change Management Log | [Period] | Architecture change history |
| Previous Annual Architecture Review Report | [Date] | Findings tracking and trend analysis |
| Vulnerability Assessment Reports (network) | [Date(s)] | Integration with vulnerability findings |
| Penetration Test Reports (network) | [Date(s)] | Integration with penetration testing findings |
| BCP/DR Network Architecture Documentation | [Version / Date] | Resilience and availability assessment |
| Cloud Architecture Documentation | [Version / Date] | Cloud network assessment |
| [Other document] | [Version / Date] | [Purpose] |

#### 4.2.2 Technical Assessment Activities

*Describe the technical activities conducted, specifying tools and techniques used.*

| Activity | Description | Tools Used | Scope |
|---|---|---|---|
| Network topology discovery | Automated and manual discovery of network devices and topology | [Tools, e.g., network management system, SNMP polling] | [Scope] |
| Firewall configuration review | Manual review of firewall rule bases against least-privilege and policy requirements | [Tools, e.g., FireMon, AlgoSec, manual review] | [Scope] |
| Network segmentation validation | Technical validation that network zones are correctly implemented and enforced | [Tools, e.g., packet capture, route analysis] | [Scope] |
| Network device configuration review | Review of router, switch, and network device configurations against hardening standards | [Tools, e.g., CIS-CAT, manual review] | [Scope] |
| Traffic flow analysis | Analysis of permitted and actual traffic flows between network zones | [Tools, e.g., NetFlow analysis, firewall log review] | [Scope] |
| Wireless security assessment | Assessment of wireless network segregation and security controls | [Tools] | [Scope] |
| Cloud network assessment | Review of cloud network configurations, security groups, and virtual network controls | [Tools, e.g., cloud-native tools, CSPM platform] | [Scope] |
| Architecture diagram validation | Comparison of documented architecture diagrams against discovered topology | Manual | [Scope] |

#### 4.2.3 Interviews and Workshops

*List the key interviews and workshops conducted as part of the review.*

| Date | Participants | Topic |
|---|---|---|
| [Date] | [Names/Roles] | Network architecture overview and recent changes |
| [Date] | [Names/Roles] | Firewall management processes and rule review procedures |
| [Date] | [Names/Roles] | Network segmentation design rationale |
| [Date] | [Names/Roles] | Cloud network architecture and controls |
| [Date] | [Names/Roles] | DR and resilience architecture |
| [Date] | [Names/Roles] | [Topic] |

### 4.3 Assessment Framework

*Describe the structured framework applied to assess the architecture, including the control domains assessed.*

The assessment was structured around the following control domains:

| Domain | Description | Criteria Applied |
|---|---|---|
| **D1: Architecture Governance** | Assessment of processes for managing and documenting network architecture | RC-001, RC-005, IP-001, IP-005 |
| **D2: Network Segmentation** | Assessment of zone design, isolation effectiveness, and trust level alignment | RC-002, IS-001, IS-002 |
| **D3: Perimeter Security** | Assessment of perimeter controls, DMZ architecture, and internet boundary controls | RC-003, RC-006, IS-004, IS-005 |
| **D4: Internal Network Controls** | Assessment of east-west traffic controls, micro-segmentation, and internal boundary controls | RC-002, RC-004, IS-001 |
| **D5: Remote Access Controls** | Assessment of VPN, ZTNA, and other remote access mechanisms | RC-004, IP-002 |
| **D6: Intrusion Detection and Prevention** | Assessment of IDS/IPS coverage, tuning, and alerting | RC-007, IS-006 |
| **D7: Wireless Network Security** | Assessment of wireless architecture segregation and security | IS-003 |
| **D8: Cloud Network Architecture** | Assessment of cloud network controls, virtual network design, and hybrid connectivity | RC-002, IS-001 |
| **D9: Resilience and Redundancy** | Assessment of network resilience, redundancy, and single points of failure | IP-003 |
| **D10: Change Management** | Assessment of change management controls applied to network architecture | IP-005 |

### 4.4 Limitations and Constraints

*Document any limitations or constraints that affected the assessment and may affect the completeness or reliability of findings.*

| Limitation | Impact | Mitigating Action |
|---|---|---|
| [Description of limitation, e.g., access to certain network segments was restricted] | [Impact on assessment completeness] | [Mitigating action taken] |
| [Description of limitation] | [Impact] | [Mitigating action] |
| [Time constraints] | [Impact] | [Mitigating action] |
| [Limited documentation availability for legacy systems] | [Impact] | [Mitigating action] |

### 4.5 Assumptions

*State the key assumptions made during the review.*

The following assumptions have been made in conducting this review:

1. Documentation provided by [Organization Name] for review is accurate, current, and complete as of the date provided.
2. The network topology discovered during the assessment is representative of the in-scope environment at the time of the review.
3. No significant network architecture changes were made during the active review period ([Start Date] to [End Date]) that would materially alter the assessment findings.
4. Third-party managed network segments excluded from scope are subject to equivalent review under [Organization Name]'s vendor assurance programme.
5. [Additional assumption]
6. [Additional assumption]

---

## 5. Findings and Ratings

*This section presents the detailed findings arising from the annual architecture review. Each finding is described with sufficient detail to enable the responsible owner to understand the issue, its risk implications, and the recommended remediation actions. Findings are cross-referenced to the assessment criteria defined in Section 3.*

### 5.1 Findings Summary Dashboard

*Provide a summary of all findings by severity, domain, and status.*

#### 5.1.1 Findings by Severity

| Severity | New | Carried Forward | Total | Closed from Prior Review |
|---|---|---|---|---|
| Critical | [Number] | [Number] | [Number] | [Number] |
| High | [Number] | [Number] | [Number] | [Number] |
| Medium | [Number] | [Number] | [Number] | [Number] |
| Low | [Number] | [Number] | [Number] | [Number] |
| Informational | [Number] | [Number] | [Number] | [Number] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** |

#### 5.1.2 Findings by Assessment Domain

| Domain | Critical | High | Medium | Low | Info | Total | Domain Rating |
|---|---|---|---|---|---|---|---|
| D1: Architecture Governance | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D2: Network Segmentation | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D3: Perimeter Security | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D4: Internal Network Controls | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D5: Remote Access Controls | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D6: Intrusion Detection and Prevention | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D7: Wireless Network Security | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D8: Cloud Network Architecture | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D9: Resilience and Redundancy | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| D10: Change Management | [#] | [#] | [#] | [#] | [#] | [#] | [Rating] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[Overall]** |

#### 5.1.3 Findings Status Tracking (Carry-Forward from Prior Review)

| Finding ID (Prior) | Description | Prior Severity | Status | Evidence of Closure | Notes |
|---|---|---|---|---|---|
| [AARR-YYYY-001] | [Description] | [Severity] | Closed / Open / Partially Remediated | [Reference to evidence] | [Notes] |
| [AARR-YYYY-002] | [Description] | [Severity] | Closed / Open / Partially Remediated | [Reference to evidence] | [Notes] |
| [AARR-YYYY-003] | [Description] | [Severity] | Closed / Open / Partially Remediated | [Reference to evidence] | [Notes] |

### 5.2 Detailed Findings

*Provide full detail for each finding. Replicate the finding template below for each individual finding identified during the review.*

---

#### Finding AARR-[YYYY]-001

| Field | Details |
|---|---|
| **Finding ID** | AARR-[YYYY]-001 |
| **Title** | [Concise, descriptive finding title] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **Assessment Domain** | [Domain reference, e.g., D2: Network Segmentation] |
| **Criteria Reference** | [Criterion ID(s), e.g., RC-002, IS-001] |
| **Regulatory Reference** | [RMiT Clause, e.g., RMiT 10.30] |
| **Finding Type** | [New / Repeated / Carried Forward] |
| **Affected Component(s)** | [System, network segment, device(s) affected] |
| **Finding Owner** | [Name / Role responsible for remediation] |
| **Target Remediation Date** | [Date] |

**Observation:**

*Describe the finding factually and objectively. Include specific evidence observed during the assessment. Avoid ambiguity — state exactly what was found, where it was found, and when.*

[Provide a detailed factual description of the finding. Include specific device names, segment names, or configuration details where applicable. Avoid named individuals unless directly relevant. Reference supporting evidence by appendix reference.]

**Risk Impact:**

*Describe the potential business and security impact if the finding is not remediated. Quantify the impact in terms of confidentiality, integrity, and availability where possible.*

[Describe the risk impact. Consider threat scenarios, likelihood of exploitation, and potential business consequences. Link to relevant risk appetite statements where applicable.]

**Root Cause:**

*Identify the underlying root cause of the finding. Root causes are typically process, people, or technology failures.*

[Describe the root cause. Is this a process failure (e.g., inadequate change management), a technology gap (e.g., missing capability), or a governance failure (e.g., absence of defined ownership)?]

**Recommendation:**

*Provide a specific, actionable, and prioritized recommendation to remediate the finding. Where applicable, reference specific configuration guidance, standards, or best practices.*

[Provide a specific recommendation. Where technical configuration changes are required, reference the relevant hardening standard or configuration guide. Include immediate mitigation actions if the finding is Critical or High severity.]

**Evidence Reference:**

| Evidence ID | Description | Location |
|---|---|---|
| EVD-001 | [Evidence description, e.g., Firewall rule export] | [Appendix reference or file path] |
| EVD-002 | [Evidence description] | [Location] |

**Management Response:**

*To be completed by the Finding Owner following review of this finding.*

> [Finding Owner's response, including agreed remediation action, responsible party, and committed completion date. Management responses must be approved by the Network Operations Manager.]

| Field | Details |
|---|---|
| **Agreed Action** | [Description of agreed remediation action] |
| **Responsible Party** | [Name / Role] |
| **Committed Date** | [Date] |
| **Management Response Author** | [Name, Title, Date] |

---

#### Finding AARR-[YYYY]-002

| Field | Details |
|---|---|
| **Finding ID** | AARR-[YYYY]-002 |
| **Title** | [Concise, descriptive finding title] |
| **Severity** | [Critical / High / Medium / Low / Informational] |
| **Assessment Domain** | [Domain reference] |
| **Criteria Reference** | [Criterion ID(s)] |
| **Regulatory Reference** | [RMiT Clause] |
| **Finding Type** | [New / Repeated / Carried Forward] |
| **Affected Component(s)** | [Affected components] |
| **Finding Owner** | [Name / Role] |
| **Target Remediation Date** | [Date] |

**Observation:**

[Provide a detailed factual description of the finding.]

**Risk Impact:**

[Describe the risk impact.]

**Root Cause:**

[Describe the root cause.]

**Recommendation:**

[Provide a specific recommendation.]

**Evidence Reference:**

| Evidence ID | Description | Location |
|---|---|---|
| EVD-003 | [Evidence description] | [Location] |

**Management Response:**

> [Finding Owner's response]

| Field | Details |
|---|---|
| **Agreed Action** | [Description] |
| **Responsible Party** | [Name / Role] |
| **Committed Date** | [Date] |
| **Management Response Author** | [Name, Title, Date] |

---

*[Continue repeating the finding template above for all identified findings. Findings should be ordered by severity (Critical first, then High, Medium, Low, Informational) and numbered sequentially.]*

---

### 5.3 Trend Analysis

*Compare findings from the current review cycle with findings from prior review cycles to identify trends. Trend analysis demonstrates whether the organization's security posture is improving, stable, or deteriorating.*

#### 5.3.1 Year-on-Year Finding Count Comparison

| Review Year | Critical | High | Medium | Low | Info | Total |
|---|---|---|---|---|---|---|
| [YYYY-3] | [#] | [#] | [#] | [#] | [#] | [#] |
| [YYYY-2] | [#] | [#] | [#] | [#] | [#] | [#] |
| [YYYY-1] | [#] | [#] | [#] | [#] | [#] | [#] |
| **[YYYY] (Current)** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

#### 5.3.2 Trend Observations

*Describe the key trends observed in the finding data above. Note any areas of improvement, deterioration, or persistence.*

- **Trend 1:** [Description of trend, e.g., "Critical findings have decreased year-on-year, indicating sustained progress in addressing high-severity architectural weaknesses."]
- **Trend 2:** [Description of trend]
- **Trend 3:** [Description of trend]

#### 5.3.3 Repeat Findings Analysis

*Identify findings that have persisted across multiple review cycles. Repeat findings warrant escalation and additional scrutiny.*

| Finding Title | First Identified | Repeat Count | Current Severity | Notes |
|---|---|---|---|---|
| [Finding title] | [Year] | [Number of times repeated] | [Severity] | [Notes, e.g., partially remediated] |
| [Finding title] | [Year] | [Number] | [Severity] | [Notes] |

---

## 6. Network Segmentation Zones

*This section documents the network segmentation architecture of [Organization Name], assesses the adequacy of zone design, and evaluates whether segmentation effectively enforces the principle of least-privilege access between zones. Network segmentation is a critical control for limiting the lateral movement of threats and for protecting sensitive data and critical systems.*

### 6.1 Segmentation Design Principles

*Document the design principles that underpin [Organization Name]'s network segmentation architecture. These principles should be aligned with regulatory requirements and approved risk appetite.*

[Organization Name]'s network segmentation architecture is designed and maintained in accordance with the following principles:

1. **Trust-Based Zoning:** Network zones are defined based on the trust level of the systems and users within each zone. Higher trust is granted to zones containing verified, managed, and hardened assets.
2. **Data Sensitivity Alignment:** Network zones align with data classification levels. Zones containing sensitive, confidential, or regulated data are subject to stricter access controls.
3. **Principle of Least Privilege:** Traffic flows between zones are limited to only those flows necessary for legitimate business purposes. All other traffic is denied by default.
4. **Defence in Depth:** Multiple layers of network controls are applied at zone boundaries. No single control is relied upon in isolation.
5. **Explicit Permit, Implicit Deny:** All firewall and access control policies implement a default-deny posture. Traffic is only permitted where an explicit business justification exists and has been approved.
6. **Segmentation of Critical Systems:** Systems classified as critical to business operations or subject to regulatory protection are isolated in dedicated network zones.
7. **Auditability:** All network zone boundaries and traffic flows are logged and monitorable.
8. [Additional design principle]

### 6.2 Zone Architecture Overview

*Provide an overview of the network zone architecture. This should be a text-based description supplemented by the architecture diagram in Section 8.*

[Organization Name]'s network architecture is structured as a multi-zone architecture comprising [Number] defined network zones. The zones are arranged in a hierarchical trust model, with the highest trust zones at the core and the lowest trust zones at the perimeter. Zone-to-zone traffic is controlled by [firewall / access control list / software-defined security policy] at each boundary.

### 6.3 Zone Register

*Maintain a complete register of all defined network zones. This register is the authoritative source of zone definitions and must be updated whenever a zone is added, modified, or decommissioned.*

| Zone ID | Zone Name | Zone Type | Trust Level | VLAN/Subnet Range | Description | Owner | Systems/Services Hosted |
|---|---|---|---|---|---|---|---|
| Z-001 | Internet Zone | External | Untrusted | N/A (external) | Public internet — not managed by [Organization Name] | N/A | External users, third parties |
| Z-002 | External DMZ | DMZ | Low | [Subnet range] | Internet-facing services requiring controlled external access | [Owner] | Web servers, load balancers, WAF |
| Z-003 | Internal DMZ | DMZ | Low-Medium | [Subnet range] | Services requiring controlled access from external DMZ to internal zones | [Owner] | Application servers, API gateways |
| Z-004 | Production — Core Banking | Production | High | [Subnet range] | Core banking and payment systems | [Owner] | [Systems hosted] |
| Z-005 | Production — Business Applications | Production | High | [Subnet range] | Internal business application servers | [Owner] | [Systems hosted] |
| Z-006 | Production — Databases | Production | Critical | [Subnet range] | Database servers hosting sensitive and regulated data | [Owner] | [Systems hosted] |
| Z-007 | User Workstation Network | User | Medium | [Subnet range] | Standard user workstations and endpoints | [Owner] | User PCs, domain joined devices |
| Z-008 | Privileged Access Network | Privileged | Very High | [Subnet range] | Privileged access workstations and jump servers | [Owner] | PAW, jump servers |
| Z-009 | Management Network | Management | Critical | [Subnet range] | Out-of-band management of network and security infrastructure | [Owner] | Network device management interfaces |
| Z-010 | Remote Access | Remote | Low-Medium | [Subnet range] | Remote access VPN termination zone | [Owner] | VPN concentrators |
| Z-011 | Wireless — Corporate | Wireless | Medium | [Subnet range] | Corporate wireless for managed devices | [Owner] | Managed mobile devices |
| Z-012 | Wireless — Guest | Wireless | Untrusted | [Subnet range] | Guest wireless — internet access only | [Owner] | Unmanaged visitor devices |
| Z-013 | UAT / Staging | Non-Production | Low-Medium | [Subnet range] | Pre-production testing environment | [Owner] | UAT servers |
| Z-014 | Development | Non-Production | Low | [Subnet range] | Development environment | [Owner] | Dev servers, dev workstations |
| Z-015 | DR Environment | DR | High | [Subnet range] | Disaster recovery environment | [Owner] | DR replicas of critical systems |
| Z-016 | Third-Party / Partner | Partner | Low-Medium | [Subnet range] | Dedicated zone for third-party connectivity | [Owner] | Partner integration systems |
| Z-017 | Cloud — Production | Cloud | High | [Cloud VPC/VNet CIDR] | Cloud-hosted production workloads | [Owner] | [Cloud-hosted systems] |
| Z-018 | OT / Industrial | OT (if applicable) | High | [Subnet range] | Operational technology network (if applicable) | [Owner] | [OT systems] |
| Z-019 | [Zone Name] | [Zone Type] | [Trust Level] | [Subnet range] | [Description] | [Owner] | [Systems] |

### 6.4 Zone-to-Zone Traffic Matrix

*Document the permitted traffic flows between network zones. This matrix is a critical control document and must be reviewed and approved at least annually.*

*Note: This matrix represents intended/approved traffic flows. Technical validation of actual flows should be conducted during the review process. Discrepancies between intended and actual flows should be raised as findings.*

| Source Zone | Destination Zone | Permitted | Protocol/Port | Business Justification | Control Point | Last Reviewed |
|---|---|---|---|---|---|---|
| Z-001 (Internet) | Z-002 (External DMZ) | Yes | TCP/443, TCP/80 | Web services access | Perimeter Firewall FW-01 | [Date] |
| Z-001 (Internet) | Z-003 (Internal DMZ) | No | N/A | Blocked by policy | Perimeter Firewall FW-01 | [Date] |
| Z-001 (Internet) | Z-004 (Core Banking) | No | N/A | Blocked by policy | Perimeter Firewall FW-01 | [Date] |
| Z-002 (External DMZ) | Z-003 (Internal DMZ) | Yes | TCP/[Port] | Application tier communication | DMZ Firewall FW-02 | [Date] |
| Z-002 (External DMZ) | Z-004 (Core Banking) | No | N/A | Blocked by policy — no direct DMZ-to-core access | DMZ Firewall FW-02 | [Date] |
| Z-003 (Internal DMZ) | Z-004 (Core Banking) | Restricted | TCP/[Port] | API calls from application tier to core banking | Internal Firewall FW-03 | [Date] |
| Z-003 (Internal DMZ) | Z-006 (Databases) | No | N/A | Database access only from application zone, not DMZ | Internal Firewall FW-03 | [Date] |
| Z-004 (Core Banking) | Z-006 (Databases) | Yes | TCP/[Port] | Core banking database access | Internal Firewall FW-03 | [Date] |
| Z-005 (Business Apps) | Z-006 (Databases) | Yes | TCP/[Port] | Application database access | Internal Firewall FW-03 | [Date] |
| Z-007 (User Network) | Z-004 (Core Banking) | Restricted | TCP/[Port] | Business user access via application interface only | Internal Firewall FW-03 | [Date] |
| Z-007 (User Network) | Z-006 (Databases) | No | N/A | Direct user access to database servers prohibited | Internal Firewall FW-03 | [Date] |
| Z-008 (Privileged Access) | Z-009 (Management) | Yes | TCP/22, TCP/443 | Privileged admin access to network management | Privilege Firewall FW-04 | [Date] |
| Z-010 (Remote Access) | Z-007 (User Network) | Yes | [Protocol/Port] | Remote users accessing user network resources | VPN Gateway | [Date] |
| Z-010 (Remote Access) | Z-004 (Core Banking) | No | N/A | Remote access to core banking requires additional MFA step | VPN Gateway | [Date] |
| Z-011 (Wireless Corp) | Z-007 (User Network) | Yes | [Protocol/Port] | Corporate wireless device access | Wireless Firewall | [Date] |
| Z-012 (Wireless Guest) | Z-001 (Internet) | Yes | TCP/443, TCP/80 | Guest internet access only | Guest WLAN Controller | [Date] |
| Z-012 (Wireless Guest) | Z-007 (User Network) | No | N/A | Guest network isolated from internal networks | Guest WLAN Controller | [Date] |
| Z-013 (UAT) | Z-004 (Core Banking) | No | N/A | UAT must not access production core banking | Internal Firewall FW-03 | [Date] |
| Z-014 (Dev) | Z-013 (UAT) | Restricted | [Protocol/Port] | Controlled promotion path from dev to UAT | Dev Firewall | [Date] |
| Z-016 (Partner) | Z-003 (Internal DMZ) | Restricted | TCP/[Port] | API integration with partner | Partner Firewall FW-05 | [Date] |
| Z-017 (Cloud) | Z-004 (Core Banking) | Restricted | TCP/[Port] | Hybrid cloud integration — specific approved flows | SD-WAN / VPN | [Date] |
| [Source] | [Destination] | [Yes/No/Restricted] | [Protocol/Port] | [Justification] | [Control Point] | [Date] |

### 6.5 Segmentation Assessment Results

*Document the findings from the technical assessment of network segmentation against the design documented in Sections 6.3 and 6.4.*

| Assessment Area | Rating | Key Observations | Finding References |
|---|---|---|---|
| Zone definition completeness | [Rating] | [Observations] | [Finding IDs] |
| Zone boundary enforcement | [Rating] | [Observations] | [Finding IDs] |
| Traffic matrix accuracy | [Rating] | [Observations] | [Finding IDs] |
| Unauthorized flows identified | [Rating] | [Observations] | [Finding IDs] |
| Non-production / production isolation | [Rating] | [Observations] | [Finding IDs] |
| Database zone isolation | [Rating] | [Observations] | [Finding IDs] |
| Management network isolation | [Rating] | [Observations] | [Finding IDs] |
| Cloud / on-premises boundary | [Rating] | [Observations] | [Finding IDs] |
| Guest / corporate wireless isolation | [Rating] | [Observations] | [Finding IDs] |

### 6.6 Segmentation Adequacy Assessment

*Provide a narrative assessment of the overall adequacy of the network segmentation architecture, including alignment with BNM RMiT requirements and organizational risk appetite.*

[Provide a paragraph-level narrative assessment. Address whether the segmentation architecture is fit for purpose given the current business environment, threat landscape, and regulatory requirements. Note any areas where the architecture requires enhancement and reference supporting findings where applicable.]

**Overall Segmentation Rating:** [Satisfactory / Requires Improvement / Unsatisfactory]

---

## 7. Firewall Rule Review Schedule

*This section documents the firewall estate, the formal review schedule for firewall rule sets, the results of rule reviews conducted during this annual review cycle, and the management process for maintaining firewall rules in alignment with the principle of least privilege.*

### 7.1 Firewall Estate Register

*Maintain a complete inventory of all firewalls within the scope of this review. This register is the authoritative source of the firewall estate and must be updated whenever a firewall is added, modified, or decommissioned.*

| Firewall ID | Firewall Name | Make / Model | Version / OS | Role | Location | Zone Boundary Protected | Owner | Review Frequency |
|---|---|---|---|---|---|---|---|---|
| FW-01 | [Firewall Name] | [Make/Model] | [Version] | Perimeter Firewall | [Location] | Internet → External DMZ | [Owner] | Quarterly |
| FW-02 | [Firewall Name] | [Make/Model] | [Version] | DMZ Firewall | [Location] | External DMZ → Internal DMZ | [Owner] | Quarterly |
| FW-03 | [Firewall Name] | [Make/Model] | [Version] | Internal Firewall | [Location] | Internal zone separation | [Owner] | Semi-annual |
| FW-04 | [Firewall Name] | [Make/Model] | [Version] | Privileged Access Firewall | [Location] | Privileged Access → Management | [Owner] | Quarterly |
| FW-05 | [Firewall Name] | [Make/Model] | [Version] | Partner Firewall | [Location] | Partner zone → Internal DMZ | [Owner] | Semi-annual |
| FW-06 | [Firewall Name] | [Make/Model] | [Version] | DR Perimeter Firewall | DR Site | Internet → DR DMZ | [Owner] | Semi-annual |
| FW-07 | [Firewall Name] | [Make/Model] | [Version] | Cloud Virtual Firewall (WAF) | [Cloud Provider] | [Zone boundary] | [Owner] | Quarterly |
| FW-08 | [Firewall Name] | [Make/Model] | [Version] | [Role] | [Location] | [Zone boundary] | [Owner] | [Frequency] |

### 7.2 Firewall Rule Review Schedule

*Define the formal schedule for reviewing firewall rule sets. The schedule must align with the risk level of the firewall, the sensitivity of the zones it protects, and regulatory requirements.*

#### 7.2.1 Review Schedule by Firewall

| Firewall ID | Risk Level | Review Frequency | Last Review Date | Next Review Date | Review Method | Reviewer |
|---|---|---|---|---|---|---|
| FW-01 | Critical | Quarterly | [Date] | [Date] | Automated + Manual | [Role] |
| FW-02 | Critical | Quarterly | [Date] | [Date] | Automated + Manual | [Role] |
| FW-03 | High | Semi-annual | [Date] | [Date] | Manual | [Role] |
| FW-04 | Critical | Quarterly | [Date] | [Date] | Manual | [Role] |
| FW-05 | High | Semi-annual | [Date] | [Date] | Manual | [Role] |
| FW-06 | High | Semi-annual | [Date] | [Date] | Manual | [Role] |
| FW-07 | High | Quarterly | [Date] | [Date] | Automated + Manual | [Role] |
| FW-08 | [Risk Level] | [Frequency] | [Date] | [Date] | [Method] | [Role] |

#### 7.2.2 Annual Review Calendar

| Quarter | Month | Firewall(s) Scheduled for Review | Review Type | Responsible Team |
|---|---|---|---|---|
| Q1 | [Month] | FW-01, FW-02, FW-04, FW-07 | Full rule base review | Network Operations |
| Q1 | [Month] | FW-03, FW-05 | Full rule base review | Network Operations |
| Q2 | [Month] | FW-01, FW-02, FW-04, FW-07 | Full rule base review | Network Operations |
| Q3 | [Month] | FW-01, FW-02, FW-04, FW-07 | Full rule base review | Network Operations |
| Q3 | [Month] | FW-03, FW-05, FW-06 | Full rule base review | Network Operations |
| Q4 | [Month] | FW-01, FW-02, FW-04, FW-07 | Full rule base review | Network Operations |
| Q4 | [Month] | Annual Architecture Review — all firewalls | Comprehensive annual review | Network Operations + [Review Body] |

### 7.3 Firewall Rule Review Methodology

*Describe the methodology used for firewall rule reviews, including the criteria applied and the evidence collected.*

Firewall rule reviews are conducted in accordance with [Organization Name]'s [Firewall Management Policy / Network Security Policy — Reference]. Each rule review assesses rule sets against the following criteria:

| Review Criterion | Description |
|---|---|
| **Business Justification** | Every rule must have a documented business justification. Rules without justification are flagged for removal or investigation. |
| **Least Privilege** | Rules are assessed to determine whether they are more permissive than necessary for the stated business purpose. Overly broad rules are flagged for tightening. |
| **Rule Owner** | Every rule must have an identified owner. Orphaned rules are flagged for review and removal. |
| **Expiry and Temporariness** | Temporary rules (e.g., those created for specific projects or incidents) are checked for expiry. Rules past their expiry date are flagged for removal. |
| **Redundant and Shadowed Rules** | Rules that are shadowed by broader rules (and therefore never matched) are identified and flagged for clean-up. |
| **Any/Any Rules** | Rules with source or destination of "Any" are individually reviewed and must have documented exceptional justification. |
| **Logging** | Rules for high-risk traffic flows must have logging enabled. Rules without logging are flagged. |
| **Protocol and Port Justification** | Rules permitting broad protocol or port ranges are reviewed to confirm the full range is necessary. |

### 7.4 Annual Firewall Review Results

*Document the results of firewall rule reviews conducted during this annual review cycle.*

#### 7.4.1 Rule Count Summary

| Firewall ID | Total Rules | Rules Reviewed | Rules Approved | Rules Flagged | Rules Removed | Rules Modified | Rules Added |
|---|---|---|---|---|---|---|---|
| FW-01 | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| FW-02 | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| FW-03 | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| FW-04 | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| FW-05 | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| FW-06 | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| FW-07 | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** |

#### 7.4.2 Rule Review Findings Summary

| Finding Category | FW-01 | FW-02 | FW-03 | FW-04 | FW-05 | FW-06 | FW-07 | Total |
|---|---|---|---|---|---|---|---|---|
| Rules without business justification | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Overly permissive rules | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Orphaned rules (no owner) | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Expired temporary rules | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Redundant / shadowed rules | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Any/Any rules requiring justification | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| Rules without logging | [#] | [#] | [#] | [#] | [#] | [#] | [#] | [#] |
| **Total flagged rules** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** | **[#]** |

#### 7.4.3 Any/Any Rule Register

*All rules with source or destination of "Any" must be individually documented and justified. This register serves as the authoritative record of approved broad-access rules.*

| Firewall ID | Rule ID | Rule Description | Source | Destination | Protocol/Port | Business Justification | Risk Acceptance | Approved By | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [FW-ID] | [Rule ID] | [Description] | Any | [Specific destination] | [Protocol/Port] | [Justification] | [Yes/No] | [Name, Title] | [Date] |
| [FW-ID] | [Rule ID] | [Description] | [Specific source] | Any | [Protocol/Port] | [Justification] | [Yes/No] | [Name, Title] | [Date] |

### 7.5 Firewall Review Process Assessment

*Assess the maturity and effectiveness of the firewall rule review process.*

| Process Area | Rating | Observations | Finding References |
|---|---|---|---|
| Review schedule adherence | [Rating] | [Observations] | [Finding IDs] |
| Documentation completeness | [Rating] | [Observations] | [Finding IDs] |
| Rule justification coverage | [Rating] | [Observations] | [Finding IDs] |
| Orphaned rule management | [Rating] | [Observations] | [Finding IDs] |
| Temporary rule expiry management | [Rating] | [Observations] | [Finding IDs] |
| Change management integration | [Rating] | [Observations] | [Finding IDs] |
| Tooling and automation | [Rating] | [Observations] | [Finding IDs] |

**Overall Firewall Review Process Rating:** [Satisfactory / Requires Improvement / Unsatisfactory]

---

## 8. Network Architecture Diagram

*This section provides a description of the network architecture diagrams that form part of this report. Actual diagrams are attached as Appendices to this report. The text in this section provides a narrative description of each diagram and notes any significant changes from the prior year.*

### 8.1 Diagram Inventory

*Maintain a register of all network architecture diagrams that form part of this review. Diagrams must be maintained as accurate, current representations of the actual network architecture.*

| Diagram ID | Diagram Title | Description | Version | Date | Owner | Location | Format |
|---|---|---|---|---|---|---|---|
| DGM-001 | Logical Network Architecture — Overview | High-level logical overview of the entire network architecture, showing all zones and primary inter-zone connectivity | [Version] | [Date] | [Owner] | Appendix A | [Visio / Draw.io / Lucidchart / PDF] |
| DGM-002 | Logical Network Architecture — Production Environment | Detailed logical diagram of the production network environment | [Version] | [Date] | [Owner] | Appendix B | [Format] |
| DGM-003 | Logical Network Architecture — DMZ | Detailed diagram of the DMZ architecture, including internet-facing services | [Version] | [Date] | [Owner] | Appendix C | [Format] |
| DGM-004 | Physical Network Architecture | Physical cabling, rack layout, and physical device placement at primary data centre | [Version] | [Date] | [Owner] | Appendix D | [Format] |
| DGM-005 | Network Architecture — DR Site | Logical network architecture for the disaster recovery environment | [Version] | [Date] | [Owner] | Appendix E | [Format] |
| DGM-006 | Cloud Network Architecture | Logical diagram of cloud-hosted network architecture, including VPC/VNet design, security groups, and hybrid connectivity | [Version] | [Date] | [Owner] | Appendix F | [Format] |
| DGM-007 | Firewall Architecture | Diagram showing the placement of all firewalls, the zones they protect, and traffic flow directions | [Version] | [Date] | [Owner] | Appendix G | [Format] |
| DGM-008 | WAN / SD-WAN Architecture | Wide area network topology, including branch connectivity, MPLS/SD-WAN design | [Version] | [Date] | [Owner] | Appendix H | [Format] |
| DGM-009 | Remote Access Architecture | Remote access architecture, including VPN and ZTNA components | [Version] | [Date] | [Owner] | Appendix I | [Format] |
| DGM-010 | Wireless Network Architecture | Wireless network design, including corporate and guest SSID topology | [Version] | [Date] | [Owner] | Appendix J | [Format] |

### 8.2 Diagram Currency Assessment

*Assess the currency and accuracy of each network architecture diagram. Diagrams that do not accurately reflect the current state of the network are a compliance risk and a finding.*

| Diagram ID | Last Validated | Validation Method | Accuracy Assessment | Issues Identified | Finding Reference |
|---|---|---|---|---|---|
| DGM-001 | [Date] | [Method, e.g., comparison with network management system] | [Accurate / Minor discrepancies / Major discrepancies] | [Description of discrepancies] | [Finding ID if applicable] |
| DGM-002 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |
| DGM-003 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |
| DGM-004 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |
| DGM-005 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |
| DGM-006 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |
| DGM-007 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |
| DGM-008 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |
| DGM-009 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |
| DGM-010 | [Date] | [Method] | [Accuracy Assessment] | [Issues] | [Finding ID] |

### 8.3 Significant Architecture Changes Since Prior Review

*Document all significant changes to the network architecture that occurred since the prior annual review. Changes should be cross-referenced to the change management records.*

| Change ID | Description of Change | Date Implemented | Change Request Reference | Impact on Security Posture | Assessed in This Review |
|---|---|---|---|---|---|
| CHG-[YYYY]-001 | [Description of architectural change] | [Date] | [CR Number] | [Impact description] | Yes |
| CHG-[YYYY]-002 | [Description of architectural change] | [Date] | [CR Number] | [Impact description] | Yes |
| CHG-[YYYY]-003 | [Description of architectural change] | [Date] | [CR Number] | [Impact description] | Yes |
| CHG-[YYYY]-004 | [Description of architectural change] | [Date] | [CR Number] | [Impact description] | Yes |

### 8.4 Architecture Diagram Narrative

*Provide a narrative description of the current network architecture based on the diagrams in the appendices. This description enables readers without access to diagram tools to understand the architecture.*

#### 8.4.1 Overall Architecture Description

*Describe the overarching network architecture topology at a high level.*

[Organization Name]'s network architecture follows a **[description of topology, e.g., tiered DMZ / hub-and-spoke / flat / micro-segmented / zero trust]** design. The architecture is organized into [Number] logical zones as detailed in Section 6. The primary data centre is located at [Location] and serves as the central point of the architecture. A fully redundant disaster recovery environment is maintained at [Location].

Internet connectivity is provided by [Number] diverse internet service providers: [ISP 1 Name] (primary, [Capacity] Gbps) and [ISP 2 Name] (secondary, [Capacity] Gbps), providing redundancy at the internet ingress/egress boundary.

[Continue with description of core architecture elements, key design decisions, and any notable features or constraints.]

#### 8.4.2 Internet Boundary Architecture

*Describe the internet boundary architecture.*

[Describe the internet boundary architecture, including ISP connectivity, BGP routing, perimeter firewall placement, DDoS protection, and public IP management.]

#### 8.4.3 DMZ Architecture

*Describe the DMZ architecture.*

[Describe the DMZ design, including the external and internal DMZ tiers, the systems hosted in each tier, and the controls at each DMZ boundary. Note any single-tier vs. multi-tier design decisions and their rationale.]

#### 8.4.4 Internal Network Architecture

*Describe the internal network architecture.*

[Describe the internal network topology, including core switching, VLAN design, internal segmentation, and routing architecture. Note the design rationale for key segmentation decisions.]

#### 8.4.5 Cloud and Hybrid Architecture

*Describe the cloud and hybrid connectivity architecture.*

[Describe the cloud network architecture, including VPC/VNet design, subnet allocation, security groups, NACLs, hybrid connectivity (Direct Connect, ExpressRoute, or VPN), and the trust model applied to cloud-to-on-premises traffic flows.]

#### 8.4.6 Remote Access Architecture

*Describe the remote access architecture.*

[Describe the remote access architecture, including VPN technology, authentication requirements, split vs. full tunnel policy, and access segmentation for remote users.]

---

## 9. Remediation and Action Plan

*This section consolidates all remediation actions arising from the findings documented in Section 5. The action plan assigns clear ownership, target dates, and priority for each action. This plan will form the basis for tracking remediation progress in the next annual review cycle.*

### 9.1 Consolidated Action Register

| Action ID | Finding ID | Finding Title | Severity | Agreed Action | Responsible Owner | Target Date | Status | Evidence Required |
|---|---|---|---|---|---|---|---|---|
| ACT-001 | AARR-[YYYY]-001 | [Finding title] | [Severity] | [Action description] | [Owner] | [Date] | Not Started / In Progress / Completed | [Description of evidence required to close] |
| ACT-002 | AARR-[YYYY]-002 | [Finding title] | [Severity] | [Action description] | [Owner] | [Date] | Not Started / In Progress / Completed | [Evidence required] |
| ACT-003 | AARR-[YYYY]-003 | [Finding title] | [Severity] | [Action description] | [Owner] | [Date] | Not Started / In Progress / Completed | [Evidence required] |
| ACT-004 | AARR-[YYYY]-004 | [Finding title] | [Severity] | [Action description] | [Owner] | [Date] | Not Started / In Progress / Completed | [Evidence required] |
| ACT-005 | AARR-[YYYY]-005 | [Finding title] | [Severity] | [Action description] | [Owner] | [Date] | Not Started / In Progress / Completed | [Evidence required] |

### 9.2 Remediation Timeline Overview

*Provide a visual or tabular representation of the remediation timeline showing the schedule for completing all actions.*

| Priority | Quarter 1 | Quarter 2 | Quarter 3 | Quarter 4 |
|---|---|---|---|---|
| Critical actions | [Action IDs due in Q1] | [Action IDs due in Q2] | [Action IDs due in Q3] | [Action IDs due in Q4] |
| High actions | [Action IDs due in Q1] | [Action IDs due in Q2] | [Action IDs due in Q3] | [Action IDs due in Q4] |
| Medium actions | [Action IDs due in Q1] | [Action IDs due in Q2] | [Action IDs due in Q3] | [Action IDs due in Q4] |
| Low actions | [Action IDs due in Q1] | [Action IDs due in Q2] | [Action IDs due in Q3] | [Action IDs due in Q4] |

### 9.3 Escalation Framework

*Define the escalation framework for actions that are not progressing on schedule.*

| Overdue Period | Escalation Action | Escalated To |
|---|---|---|
| 0–14 days overdue | Email reminder to action owner | Network Operations Manager |
| 15–30 days overdue | Formal escalation notice | Chief Information Officer / CTO |
| 31–60 days overdue | Senior management review | EXCO / Board Risk Committee |
| > 60 days overdue (Critical/High) | Regulatory notification assessment | Chief Risk Officer / Chief Compliance Officer |

---

## 10. Risk Register Update

*This section documents the updates to [Organization Name]'s technology risk register arising from findings in this annual architecture review. Risk register updates must be completed in conjunction with the Risk Management function.*

### 10.1 New Risks Identified

*Document new risks identified during this review that should be added to the technology risk register.*

| Risk ID | Risk Description | Risk Category | Inherent Likelihood | Inherent Impact | Inherent Rating | Controls in Place | Residual Likelihood | Residual Impact | Residual Rating | Risk Owner | Review Finding Reference |
|---|---|---|---|---|---|---|---|---|---|---|---|
| RISK-[YYYY]-001 | [Description of risk] | [Network / Cyber / Operational] | [1-5] | [1-5] | [1-25] | [Control description] | [1-5] | [1-5] | [1-25] | [Owner] | AARR-[YYYY]-00X |
| RISK-[YYYY]-002 | [Description of risk] | [Category] | [#] | [#] | [#] | [Controls] | [#] | [#] | [#] | [Owner] | AARR-[YYYY]-00X |

### 10.2 Updated Existing Risks

*Document changes to existing risks in the risk register arising from this review.*

| Risk ID | Risk Description | Previous Residual Rating | Updated Residual Rating | Reason for Change | Updated By | Date |
|---|---|---|---|---|---|---|
| [Existing Risk ID] | [Description] | [Previous rating] | [Updated rating] | [Reason, e.g., new finding increases likelihood] | [Name] | [Date] |
| [Existing Risk ID] | [Description] | [Previous rating] | [Updated rating] | [Reason] | [Name] | [Date] |

### 10.3 Closed Risks

*Document risks that have been closed or accepted following remediation.*

| Risk ID | Risk Description | Closure Reason | Evidence of Closure | Closed By | Date |
|---|---|---|---|---|---|
| [Risk ID] | [Description] | [Closure reason, e.g., control implemented] | [Evidence reference] | [Name] | [Date] |

---

## 11. Compliance Posture Summary

*This section provides a structured summary of [Organization Name]'s compliance posture against the regulatory and policy requirements assessed in this review. This section is designed to support regulatory reporting and board-level governance reporting.*

### 11.1 BNM RMiT Compliance Mapping

| RMiT Clause | Requirement Summary | Compliance Status | Assessment Notes | Finding References |
|---|---|---|---|---|
| 10.36 | Annual network architecture review | [Compliant / Partially Compliant / Non-Compliant] | [Assessment notes] | [Finding IDs] |
| 10.30 | Network segmentation controls | [Compliant / Partially Compliant / Non-Compliant] | [Assessment notes] | [Finding IDs] |
| 10.31 | Firewall rule review schedule | [Compliant / Partially Compliant / Non-Compliant] | [Assessment notes] | [Finding IDs] |
| 10.32 | Network access controls | [Compliant / Partially Compliant / Non-Compliant] | [Assessment notes] | [Finding IDs] |
| 10.33 | Network architecture documentation | [Compliant / Partially Compliant / Non-Compliant] | [Assessment notes] | [Finding IDs] |
| 10.34 | DMZ implementation | [Compliant / Partially Compliant / Non-Compliant] | [Assessment notes] | [Finding IDs] |
| 10.35 | Intrusion detection and prevention | [Compliant / Partially Compliant / Non-Compliant] | [Assessment notes] | [Finding IDs] |

**Overall BNM RMiT Compliance Status:** [Compliant / Partially Compliant / Non-Compliant]

### 11.2 Internal Policy Compliance Summary

| Policy | Version | Compliance Status | Key Gaps | Finding References |
|---|---|---|---|---|
| [Network Security Policy] | [Version] | [Status] | [Description of gaps] | [Finding IDs] |
| [IT Change Management Policy] | [Version] | [Status] | [Gaps] | [Finding IDs] |
| [Remote Access Policy] | [Version] | [Status] | [Gaps] | [Finding IDs] |
| [Data Classification Policy] | [Version] | [Status] | [Gaps] | [Finding IDs] |
| [Cloud Security Policy] | [Version] | [Status] | [Gaps] | [Finding IDs] |

### 11.3 Compliance Trend

| Compliance Area | Prior Year Status | Current Year Status | Trend |
|---|---|---|---|
| BNM RMiT overall | [Status] | [Status] | [Improving / Stable / Deteriorating] |
| Network segmentation | [Status] | [Status] | [Trend] |
| Firewall management | [Status] | [Status] | [Trend] |
| Architecture documentation | [Status] | [Status] | [Trend] |
| Remote access | [Status] | [Status] | [Trend] |
| Cloud network controls | [Status] | [Status] | [Trend] |

---

## 12. Roles and Responsibilities

*This section defines the roles and responsibilities for the creation, maintenance, review, and approval of this report, as well as the ongoing governance of network architecture adequacy.*

### 12.1 RACI Matrix — Annual Architecture Review Process

*The following RACI matrix defines accountability for each stage of the Annual Architecture Review process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Network Ops Manager | CISO | CIO / CTO | IT Audit | Risk Management | System Owners | External Reviewer | Board Risk Committee |
|---|---|---|---|---|---|---|---|---|
| Define review scope and criteria | R | C | A | C | C | I | C | I |
| Appoint review team | A/R | C | A | I | I | I | — | — |
| Collect technical evidence | R | I | I | C | I | C | R | — |
| Review documentation | R | I | I | C | I | C | R | — |
| Conduct technical assessments | R | C | I | C | I | C | R | — |
| Draft findings | R | C | I | C | C | C | R | — |
| Review and validate findings | A | R | C | R | C | C | R | — |
| Obtain management responses | R | I | C | C | I | R | I | — |
| Draft final report | R | C | I | C | C | I | R | — |
| Review and approve final report | C | A | A | C | C | I | I | I |
| Submit to Board Risk Committee | I | A | A | I | C | I | I | R |
| Track remediation actions | R | C | A | C | C | R | I | I |
| Escalate overdue actions | R | C | A | C | C | I | I | C |
| Update risk register | C | C | C | I | R/A | I | I | I |
| Prepare regulatory evidence package | R | A | C | C | C | I | I | — |

### 12.2 Role Descriptions

*Provide a brief description of each role referenced in the RACI matrix.*

| Role | Description | Current Incumbent |
|---|---|---|
| **Network Operations Manager** | Owns this report and is accountable for the annual architecture review process. Responsible for coordinating the review, managing the review team, and ensuring that findings are addressed. | [Name] |
| **Chief Information Security Officer (CISO)** | Provides strategic oversight of the review and approves the final report. Accountable for the overall security posture of the organization's network architecture. | [Name] |
| **Chief Information Officer / CTO** | Senior technology executive accountable for the overall technology environment. Approves the final report and is accountable for ensuring adequate resources are allocated for remediation. | [Name] |
| **IT Audit** | Provides independent assurance over the review process and validates the completeness and accuracy of findings. | [Name / Team] |
| **Risk Management** | Responsible for updating the technology risk register based on findings and for ensuring risks are appropriately quantified and tracked. | [Name / Team] |
| **System Owners** | Responsible for providing technical information about their systems, validating findings related to their systems, and owning remediation actions. | [Various] |
| **External Reviewer** | Where engaged, provides independent third-party assessment capability. Responsible for technical assessment activities and drafting findings. | [External Firm Name / N/A] |
| **Board Risk Committee** | Receives the final report for noting and exercises oversight over the remediation of critical and high findings. | [Committee Reference] |

---

## 13. Review and Approval

### 13.1 Version History

*Maintain a complete version history of this document. All revisions must be recorded.*

| Version | Date | Author | Description of Changes | Reviewed By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name, Title] | Initial draft — review scope and methodology sections | [Reviewer] |
| 0.2 | [Date] | [Author Name, Title] | Added findings — Sections 5 and 6 | [Reviewer] |
| 0.3 | [Date] | [Author Name, Title] | Added management responses and action plan | [Reviewer] |
| 0.4 | [Date] | [Author Name, Title] | Incorporated review comments from CISO and IT Audit | [Reviewer] |
| 0.5 | [Date] | [Author Name, Title] | Final draft — pre-approval | [Reviewer] |
| 1.0 | [Date] | [Author Name, Title] | Approved and issued | [Approver] |

### 13.2 Approval Sign-Off

*This report requires the following approvals before it is considered final and suitable for submission to the Board Risk Committee or regulatory bodies.*

| Role | Name | Signature | Date | Notes |
|---|---|---|---|---|
| Network Operations Manager | [Name] | _________________________ | [Date] | Report Owner — confirms accuracy and completeness |
| Chief Information Security Officer | [Name] | _________________________ | [Date] | Security posture endorsement |
| Chief Information Officer / CTO | [Name] | _________________________ | [Date] | Final report approval |
| Head of IT Audit | [Name] | _________________________ | [Date] | Independent assurance sign-off |
| Head of Risk Management | [Name] | _________________________ | [Date] | Risk register alignment confirmation |

### 13.3 Distribution List

*Record the authorized recipients of this document.*

| Recipient Name | Title | Distribution Date | Copy Type (Electronic / Physical) | Acknowledgement Date |
|---|---|---|---|---|
| [Name] | Board Risk Committee Chairman | [Date] | Electronic (encrypted) | [Date] |
| [Name] | Chief Executive Officer | [Date] | Electronic (encrypted) | [Date] |
| [Name] | Chief Information Officer | [Date] | Electronic (encrypted) | [Date] |
| [Name] | Chief Information Security Officer | [Date] | Electronic (encrypted) | [Date] |
| [Name] | Head of IT Audit | [Date] | Electronic (encrypted) | [Date] |
| [Name] | Head of Risk Management | [Date] | Electronic (encrypted) | [Date] |
| [Name] | Network Operations Manager | [Date] | Electronic (encrypted) | [Date] |
| [Name] | [Title] | [Date] | [Copy Type] | [Date] |

---

## 14. References

*This section lists the regulatory documents, industry standards, internal policies, and other references that underpin this Annual Architecture Review Report.*

### 14.1 Regulatory References

| Reference | Title | Issuing Authority | Version / Date | Relevant Clauses |
|---|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | [Issue Date / Version] | Clause 10.36 (primary); Clauses 10.30–10.35 |
| BNM PDPA Guidelines | [Full title of applicable BNM data protection guideline] | Bank Negara Malaysia | [Issue Date] | [Applicable sections] |
| NACSA Cybersecurity Framework | [Full title] | National Cyber Security Agency (NACSA) | [Version / Date] | [Applicable sections] |
| [Other BNM Policy Document] | [Title] | Bank Negara Malaysia | [Issue Date] | [Sections] |
| [Other Regulatory Reference] | [Title] | [Authority] | [Version / Date] | [Sections] |

### 14.2 Industry Standards and Frameworks

| Standard | Title | Version | Publisher | Relevant Sections |
|---|---|---|---|---|
| ISO/IEC 27001:2022 | Information Security, Cybersecurity and Privacy Protection — ISMS Requirements | 2022 | ISO/IEC | Annex A: 8.20, 8.22 |
| ISO/IEC 27002:2022 | Information Security Controls | 2022 | ISO/IEC | 8.20, 8.22 |
| NIST SP 800-41 Rev 1 | Guidelines on Firewalls and Firewall Policy | Rev 1 | NIST | Section 3, 4 |
| NIST SP 800-125B | Secure Virtual Network Configuration for Virtual Machine (VM) Protection | [Version] | NIST | [Sections] |
| NIST Cybersecurity Framework | Cybersecurity Framework | 2.0 | NIST | PR.AC, PR.PT, DE.CM |
| CIS Controls | CIS Critical Security Controls | v8 | CIS | Control 12, 13 |
| PCI DSS | Payment Card Industry Data Security Standard | v4.0 | PCI SSC | Requirement 1 (if applicable) |
| [Other Standard] | [Title] | [Version] | [Publisher] | [Sections] |

### 14.3 Internal Policy and Procedure References

| Document ID | Title | Version | Last Review Date | Owner |
|---|---|---|---|---|
| [POL-NET-001] | Network Security Policy | [Version] | [Date] | [Owner] |
| [POL-NET-002] | Firewall Management Policy | [Version] | [Date] | [Owner] |
| [POL-CHG-001] | IT Change Management Policy | [Version] | [Date] | [Owner] |
| [POL-ACC-001] | Remote Access Policy | [Version] | [Date] | [Owner] |
| [POL-CLO-001] | Cloud Security Policy | [Version] | [Date] | [Owner] |
| [POL-DAT-001] | Data Classification Policy | [Version] | [Date] | [Owner] |
| [STD-NET-001] | Network Hardening Standard | [Version] | [Date] | [Owner] |
| [STD-FW-001] | Firewall Rule Management Standard | [Version] | [Date] | [Owner] |
| [PRO-NET-001] | Network Architecture Review Procedure | [Version] | [Date] | [Owner] |
| [PRO-FW-001] | Firewall Rule Review Procedure | [Version] | [Date] | [Owner] |

### 14.4 Prior Year Reports

| Report Title | Year | Document Reference | Key Themes |
|---|---|---|---|
| Annual Architecture Review Report | [YYYY-1] | [Document Reference] | [Summary of prior year key themes] |
| Annual Architecture Review Report | [YYYY-2] | [Document Reference] | [Summary] |
| Annual Architecture Review Report | [YYYY-3] | [Document Reference] | [Summary] |

---

## 15. Appendices

*Appendices contain supporting evidence, detailed technical data, and supplementary information referenced in the body of this report. All appendices are subject to the same confidentiality classification as the main report.*

### Appendix A — Logical Network Architecture Diagram (Overview)

*[Attach or embed the high-level logical network architecture diagram here. The diagram should show all network zones, primary inter-zone connectivity, and key security controls. Diagram reference: DGM-001.]*

**Diagram:** [DGM-001 — Insert or attach diagram here]

**Diagram Notes:**

- Version: [Version]
- Date Last Updated: [Date]
- Validated Against: [Network management system / manual topology discovery]
- Known Discrepancies: [None / Description of discrepancies if any]

---

### Appendix B — Logical Network Architecture Diagram (Production Environment)

*[Attach or embed the detailed production network architecture diagram. Diagram reference: DGM-002.]*

**Diagram:** [DGM-002 — Insert or attach diagram here]

**Diagram Notes:**

- Version: [Version]
- Date Last Updated: [Date]
- Validated Against: [Reference]
- Known Discrepancies: [None / Description]

---

### Appendix C — DMZ Architecture Diagram

*[Attach or embed the DMZ architecture diagram. Diagram reference: DGM-003.]*

**Diagram:** [DGM-003 — Insert or attach diagram here]

**Diagram Notes:**

- Version: [Version]
- Date Last Updated: [Date]
- Validated Against: [Reference]
- Known Discrepancies: [None / Description]

---

### Appendix D — Physical Network Architecture Diagram

*[Attach or embed the physical network architecture diagram. Diagram reference: DGM-004.]*

**Diagram:** [DGM-004 — Insert or attach diagram here]

**Diagram Notes:**

- Version: [Version]
- Date Last Updated: [Date]

---

### Appendix E — DR Site Network Architecture Diagram

*[Attach or embed the DR site network architecture diagram. Diagram reference: DGM-005.]*

**Diagram:** [DGM-005 — Insert or attach diagram here]

**Diagram Notes:**

- Version: [Version]
- Date Last Updated: [Date]

---

### Appendix F — Cloud Network Architecture Diagram

*[Attach or embed the cloud network architecture diagram. Diagram reference: DGM-006.]*

**Diagram:** [DGM-006 — Insert or attach diagram here]

**Diagram Notes:**

- Version: [Version]
- Date Last Updated: [Date]
- Cloud Provider(s): [Provider name(s)]
- Account/Subscription ID(s): [IDs]

---

### Appendix G — Firewall Architecture Diagram

*[Attach or embed the firewall architecture diagram showing all firewalls, the zones they protect, and traffic flow directions. Diagram reference: DGM-007.]*

**Diagram:** [DGM-007 — Insert or attach diagram here]

---

### Appendix H — WAN / SD-WAN Architecture Diagram

*[Attach or embed the WAN/SD-WAN architecture diagram. Diagram reference: DGM-008.]*

**Diagram:** [DGM-008 — Insert or attach diagram here]

---

### Appendix I — Remote Access Architecture Diagram

*[Attach or embed the remote access architecture diagram. Diagram reference: DGM-009.]*

**Diagram:** [DGM-009 — Insert or attach diagram here]

---

### Appendix J — Wireless Network Architecture Diagram

*[Attach or embed the wireless network architecture diagram. Diagram reference: DGM-010.]*

**Diagram:** [DGM-010 — Insert or attach diagram here]

---

### Appendix K — Full Findings Evidence Package

*[This appendix contains the detailed technical evidence supporting each finding in Section 5. Evidence items are referenced by their Evidence ID (EVD-XXX) in the finding details.]*

| Evidence ID | Finding Reference | Description | Date Collected | Collected By | File Reference |
|---|---|---|---|---|---|
| EVD-001 | AARR-[YYYY]-001 | [Evidence description] | [Date] | [Collector] | [File name / path] |
| EVD-002 | AARR-[YYYY]-001 | [Evidence description] | [Date] | [Collector] | [File name / path] |
| EVD-003 | AARR-[YYYY]-002 | [Evidence description] | [Date] | [Collector] | [File name / path] |
| [EVD-N] | [Finding ID] | [Description] | [Date] | [Collector] | [File reference] |

*Note: Detailed evidence files are maintained in the secure evidence repository at [Repository Path / System]. Access is restricted to authorized personnel.*

---

### Appendix L — Firewall Rule Set Exports

*[This appendix contains or references the firewall rule set exports reviewed as part of this annual architecture review. Due to the sensitive nature of firewall rule sets, this appendix is classified RESTRICTED and is distributed only to personnel with a need to know.]*

| Firewall ID | Export Date | File Reference | Export Method | Reviewed By | Review Date |
|---|---|---|---|---|---|
| FW-01 | [Date] | [File reference] | [Export method] | [Reviewer] | [Date] |
| FW-02 | [Date] | [File reference] | [Export method] | [Reviewer] | [Date] |
| FW-03 | [Date] | [File reference] | [Export method] | [Reviewer] | [Date] |
| FW-04 | [Date] | [File reference] | [Export method] | [Reviewer] | [Date] |
| FW-05 | [Date] | [File reference] | [Export method] | [Reviewer] | [Date] |
| FW-06 | [Date] | [File reference] | [Export method] | [Reviewer] | [Date] |
| FW-07 | [Date] | [File reference] | [Export method] | [Reviewer] | [Date] |

*Rule set export files are maintained in the secure evidence repository. Hard copies are not retained.*

---

### Appendix M — Network Device Configuration Review Results

*[This appendix documents the results of network device configuration reviews against hardening standards, where applicable.]*

| Device Type | Device ID | Hardening Standard Applied | Review Date | Total Controls | Compliant | Non-Compliant | Compliance % | Finding Reference |
|---|---|---|---|---|---|---|---|---|
| Core Router | [Device ID] | [Standard, e.g., CIS Benchmark] | [Date] | [#] | [#] | [#] | [%] | [Finding IDs] |
| Distribution Switch | [Device ID] | [Standard] | [Date] | [#] | [#] | [#] | [%] | [Finding IDs] |
| Firewall | FW-01 | [Standard] | [Date] | [#] | [#] | [#] | [%] | [Finding IDs] |
| Wireless Controller | [Device ID] | [Standard] | [Date] | [#] | [#] | [#] | [%] | [Finding IDs] |

---

### Appendix N — Network Vulnerability Assessment Summary

*[This appendix summarizes the network-related findings from the most recent vulnerability assessment, where these are relevant to the architecture review.]*

| Assessment Date | Scope | Conducted By | Report Reference | Critical Vulnerabilities | High Vulnerabilities | Medium Vulnerabilities | Low Vulnerabilities |
|---|---|---|---|---|---|---|---|
| [Date] | [Scope, e.g., Production network devices] | [Internal / Third-party name] | [Report ID] | [#] | [#] | [#] | [#] |
| [Date] | [Scope] | [Internal / Third-party] | [Report ID] | [#] | [#] | [#] | [#] |

*Full vulnerability assessment reports are available in [Repository / System]. Architecture-related vulnerability findings have been incorporated into the findings in Section 5 where applicable.*

---

### Appendix O — Penetration Testing — Network Architecture Findings

*[This appendix summarizes relevant findings from the most recent network penetration test that have implications for the architecture review.]*

| Test Date | Scope | Conducted By | Report Reference | Architecture-Relevant Findings | Finding Reference in This Report |
|---|---|---|---|---|---|
| [Date] | [Scope] | [Third-party firm] | [Report ID] | [Description] | [AARR Finding ID] |
| [Date] | [Scope] | [Third-party firm] | [Report ID] | [Description] | [AARR Finding ID] |

---

### Appendix P — Glossary of Terms

*[Provide definitions for technical and regulatory terms used in this report to ensure consistent interpretation by all readers.]*

| Term | Definition |
|---|---|
| ACL | Access Control List — a set of rules that defines the traffic permitted or denied at a network boundary. |
| BNM | Bank Negara Malaysia — the central bank of Malaysia. |
| CIDR | Classless Inter-Domain Routing — a method for allocating IP addresses and routing Internet Protocol packets. |
| CISO | Chief Information Security Officer — the senior executive responsible for information security. |
| DMZ | Demilitarised Zone — a perimeter network segment that provides a buffer between a trusted internal network and an untrusted external network. |
| IDS | Intrusion Detection System — a system that monitors network traffic for suspicious activity and known threats. |
| IPS | Intrusion Prevention System — an IDS that can also take action to block or prevent detected intrusions. |
| NAC | Network Access Control — a technology that enforces policy on devices seeking to access a network. |
| NACSA | National Cyber Security Agency — the Malaysian government agency responsible for national cybersecurity. |
| PDPA | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data. |
| RMiT | Risk Management in Technology — BNM's Policy Document governing technology risk management for regulated financial institutions. |
| SD-WAN | Software-Defined Wide Area Network — a virtual WAN architecture that enables enterprises to leverage any combination of transport services. |
| SIEM | Security Information and Event Management — a system that provides real-time analysis of security alerts generated by network hardware and applications. |
| VLAN | Virtual Local Area Network — a logical grouping of network devices that appear to be on the same LAN segment regardless of their physical location. |
| VPN | Virtual Private Network — a technology that creates a secure, encrypted connection over a less secure network. |
| WAF | Web Application Firewall — a specific form of application firewall that filters, monitors, and blocks HTTP/HTTPS traffic to and from web applications. |
| ZTNA | Zero Trust Network Access — a security framework that requires all users to be authenticated and authorized before being granted access to applications and data. |
| [Term] | [Definition] |

---

### Appendix Q — Interviewee and Stakeholder Register

*[Document the individuals interviewed or consulted as part of this review. This provides an audit trail of the information-gathering process.]*

| Name | Title | Department | Date(s) Engaged | Method | Topics Covered |
|---|---|---|---|---|---|
| [Name] | [Title] | [Department] | [Date(s)] | Interview / Workshop / Email | [Topics] |
| [Name] | [Title] | [Department] | [Date(s)] | Interview / Workshop / Email | [Topics] |
| [Name] | [Title] | [Department] | [Date(s)] | Interview / Workshop / Email | [Topics] |
| [Name] | [Title] | [Department] | [Date(s)] | Interview / Workshop / Email | [Topics] |

---

### Appendix R — Prior Year Findings Closure Evidence

*[This appendix contains the evidence submitted to support the closure of findings from the prior annual architecture review cycle.]*

| Prior Finding ID | Prior Finding Title | Closure Evidence Description | Evidence Date | Reviewed and Accepted By | Acceptance Date |
|---|---|---|---|---|---|
| AARR-[YYYY-1]-001 | [Finding title] | [Evidence description] | [Date] | [Reviewer, Title] | [Date] |
| AARR-[YYYY-1]-002 | [Finding title] | [Evidence description] | [Date] | [Reviewer, Title] | [Date] |
| AARR-[YYYY-1]-003 | [Finding title] | [Evidence description] | [Date] | [Reviewer, Title] | [Date] |

---

### Appendix S — Board Risk Committee Submission Summary

*[This appendix contains a condensed version of the report suitable for submission to the Board Risk Committee. It focuses on executive-level content — overall rating, critical and high findings, and the remediation plan timeline.]*

**For Board Risk Committee — [Date]**

**Annual Architecture Review — Key Points:**

1. **Overall Architecture Rating:** [Satisfactory / Requires Improvement / Unsatisfactory]
2. **Critical Findings:** [Number] — [Brief description]
3. **High Findings:** [Number] — [Brief description]
4. **Compliance Status — BNM RMiT Clause 10.36:** [Compliant / Partially Compliant / Non-Compliant]
5. **Most Significant Finding:** [Brief description of the most significant finding and agreed remediation]
6. **Remediation Investment Required:** [Summary of any significant investment or resource requirements to remediate findings]
7. **Board-Level Actions Required:** [List any decisions or approvals required from the Board Risk Committee]

---

*End of Document*

---

| Document ID | [Document ID] |
|---|---|
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Operations Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |

*This document is the property of [Organization Name]. Unauthorized reproduction or distribution is prohibited. For queries regarding this document, contact the Network Operations Manager.*