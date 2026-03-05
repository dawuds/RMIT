# DNS Infrastructure Design

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of IT Operations |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Assessment Scope and Criteria](#2-assessment-scope-and-criteria)
3. [Methodology Used](#3-methodology-used)
4. [Findings and Ratings](#4-findings-and-ratings)
5. [Evidence Reviewed](#5-evidence-reviewed)
6. [Recommendations](#6-recommendations)
7. [Roles and Responsibilities](#7-roles-and-responsibilities)
8. [Review and Approval](#8-review-and-approval)
9. [References](#9-references)
10. [Appendices](#10-appendices)

---

## 1. Purpose and Scope

This document defines the DNS (Domain Name System) infrastructure design for [Organization Name], with particular emphasis on redundancy, resilience, and security controls implemented to ensure the continuous and reliable resolution of domain names for internal and externally facing services.

This design document is maintained as a mandatory compliance artefact in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.42**, which requires financial institutions to ensure critical network infrastructure components are designed with sufficient redundancy and resilience to prevent single points of failure and to support business continuity objectives.

**This document applies to:**

- All DNS infrastructure components (authoritative and recursive resolvers) operated by or on behalf of [Organization Name]
- Internal DNS zones supporting corporate, application, and management networks
- External DNS zones supporting customer-facing and partner-facing services
- Third-party or cloud-based DNS services procured by [Organization Name]
- DNS security controls including DNSSEC, DNS filtering, and monitoring

**Out of Scope:**

- [Define any explicitly excluded systems, environments, or geographic locations]
- [Third-party infrastructure not under the direct operational control of [Organization Name]]

**Review Frequency:** This document is subject to review **per-event** (i.e., following any material change to DNS infrastructure) or at a minimum **quarterly**, whichever occurs sooner.

---

## 2. Assessment Scope and Criteria

*This section defines the boundaries of the DNS infrastructure assessment and the specific criteria used to evaluate design adequacy, redundancy, and resilience. Authors should document all DNS components in scope, the assessment period, and the standards or benchmarks applied.*

### 2.1 Assessment Scope

| # | Component | Environment | Description | In Scope |
|---|---|---|---|---|
| 1 | Primary Authoritative DNS Server | Production | [e.g., BIND 9 / Microsoft DNS / AWS Route 53] | Yes / No |
| 2 | Secondary Authoritative DNS Server | Production | [e.g., Redundant node in secondary data centre] | Yes / No |
| 3 | Internal Recursive Resolver (Primary) | Corporate LAN | [e.g., Unbound / Windows DNS Forwarder] | Yes / No |
| 4 | Internal Recursive Resolver (Secondary) | Corporate LAN | [e.g., Failover resolver node] | Yes / No |
| 5 | External DNS / CDN-based DNS | DMZ / Internet | [e.g., Cloudflare / Akamai / AWS Route 53] | Yes / No |
| 6 | DNS Security Extensions (DNSSEC) | All zones | [Signing and validation controls] | Yes / No |
| 7 | DNS Firewall / RPZ (Response Policy Zone) | Perimeter | [Threat intelligence-based blocking] | Yes / No |
| 8 | DNS Monitoring and Alerting | All | [SIEM integration / dedicated DNS monitoring] | Yes / No |

**Assessment Period:** [Start Date] to [End Date]
**Assessed By:** [Name / Team]
**Assessment Date:** [Date of Assessment]

### 2.2 Assessment Criteria

*Authors should list the specific standards, internal policies, and regulatory requirements used as evaluation benchmarks.*

The DNS infrastructure design was assessed against the following criteria:

- **BNM RMiT Clause 10.42** — Network infrastructure resilience and redundancy requirements
- **[Organization Name] IT Infrastructure Policy** — [Policy Reference Number], Version [X.X]
- **[Organization Name] Business Continuity Policy** — [Policy Reference Number], Version [X.X]
- **NIST SP 800-81-2** — Secure Domain Name System (DNS) Deployment Guide
- **CIS Benchmark for DNS Servers** — Version [X.X]
- **ISO/IEC 27001:2022** — Annex A Control 8.20 (Network Security)
- **NACSA Cybersecurity Framework** — [Relevant control reference, if applicable]

**Minimum Resilience Thresholds Applied:**

| Parameter | Minimum Standard | Rationale |
|---|---|---|
| DNS Availability (RTO) | [e.g., ≤ 5 minutes] | Critical infrastructure classification |
| DNS Availability (RPO) | [e.g., Zone data replication ≤ 15 minutes] | Business continuity requirement |
| Number of Authoritative Name Servers | Minimum 2 (geographically separated) | Eliminate single point of failure |
| TTL for Critical Records | [e.g., ≤ 300 seconds] | Enable rapid failover |
| DNSSEC Signing | Mandatory for all public zones | BNM RMiT / NACSA requirement |

---

## 3. Methodology Used

*This section describes the approach, tools, and techniques used to assess and design the DNS infrastructure. Authors should document both the design review methodology and any active testing or validation techniques applied.*

### 3.1 Design Review Approach

The DNS infrastructure design review was conducted using a combination of:

1. **Documentation Review** — Review of existing network architecture diagrams, DNS zone configuration files, IP addressing plans, and change management records
2. **Configuration Audit** — Direct inspection of DNS server configurations against hardening benchmarks
3. **Topology Validation** — Verification that the logical design matches the physical and virtual infrastructure as deployed
4. **Resilience Testing** — Simulated failure scenarios to validate failover mechanisms and recovery times
5. **Security Control Assessment** — Evaluation of access controls, DNSSEC implementation, logging, and monitoring

### 3.2 Tools and Techniques

| Tool / Technique | Purpose | Applied By |
|---|---|---|
| [e.g., dig / nslookup] | DNS query testing and zone validation | [Team / Role] |
| [e.g., DNSViz] | DNSSEC chain validation and visualisation | [Team / Role] |
| [e.g., Nagios / Zabbix / Datadog] | Availability and performance monitoring review | [Team / Role] |
| [e.g., Nessus / Qualys] | Vulnerability assessment of DNS server hosts | [Team / Role] |
| [e.g., Manual configuration review] | Hardening and access control verification | [Team / Role] |
| [e.g., Wireshark / packet capture] | DNS traffic analysis and anomaly detection | [Team / Role] |

### 3.3 Design Architecture Overview

*Provide a high-level narrative description of the DNS architecture. Attach detailed architecture diagrams in Appendix A.*

[Organization Name]'s DNS infrastructure follows a **[describe topology, e.g., multi-tier, anycast, hybrid on-premises and cloud]** architecture comprising the following tiers:

- **Tier 1 — External Authoritative DNS:** [Describe external DNS provider/nodes and how they are distributed]
- **Tier 2 — Internal Authoritative DNS:** [Describe internal authoritative servers, zone structure, and replication]
- **Tier 3 — Recursive Resolvers:** [Describe internal recursive resolvers used by end-user devices and servers]
- **Tier 4 — DNS Security Layer:** [Describe DNS firewall, RPZ, DNSSEC, and filtering controls]

> **Note:** Refer to **Appendix A** for the full DNS Architecture Diagram and **Appendix B** for the DNS Zone Map.

---

## 4. Findings and Ratings

*This section documents the results of the assessment across key resilience and security domains. Authors should complete each finding with the current state observed, assign a risk rating, and link each finding to the relevant assessment criteria.*

### 4.1 Overall Assessment Rating

| Domain | Rating | Summary |
|---|---|---|
| Redundancy and High Availability | [Compliant / Partially Compliant / Non-Compliant] | [Brief summary] |
| Failover and Recovery Capability | [Compliant / Partially Compliant / Non-Compliant] | [Brief summary] |
| DNSSEC Implementation | [Compliant / Partially Compliant / Non-Compliant] | [Brief summary] |
| DNS Security Controls | [Compliant / Partially Compliant / Non-Compliant] | [Brief summary] |
| Monitoring and Alerting | [Compliant / Partially Compliant / Non-Compliant] | [Brief summary] |
| Change Management and Documentation | [Compliant / Partially Compliant / Non-Compliant] | [Brief summary] |

**Rating Legend:**

| Rating | Description |
|---|---|
| **Compliant** | Control is fully implemented and meets or exceeds the required standard |
| **Partially Compliant** | Control is partially implemented; gaps exist that require remediation |
| **Non-Compliant** | Control is absent or materially deficient; immediate remediation required |

### 4.2 Detailed Findings

#### Finding 1: [Finding Title]

| Attribute | Detail |
|---|---|
| **Finding ID** | [F-001] |
| **Domain** | [e.g., Redundancy and High Availability] |
| **RMiT Clause** | 10.42 |
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Current State** | [Describe what was observed] |
| **Required State** | [Describe what the standard requires] |
| **Gap Description** | [Describe the gap between current and required state] |
| **Evidence Reference** | [Reference to supporting evidence in Section 5] |

---

#### Finding 2: [Finding Title]

| Attribute | Detail |
|---|---|
| **Finding ID** | [F-002] |
| **Domain** | [e.g., DNSSEC Implementation] |
| **RMiT Clause** | 10.42 |
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Current State** | [Describe what was observed] |
| **Required State** | [Describe what the standard requires] |
| **Gap Description** | [Describe the gap between current and required state] |
| **Evidence Reference** | [Reference to supporting evidence in Section 5] |

---

*[Repeat the finding block for each additional finding. Number findings sequentially: F-001, F-002, etc.]*

### 4.3 Finding Summary Register

| Finding ID | Title | Domain | Risk Rating | Status |
|---|---|---|---|---|
| F-001 | [Title] | [Domain] | [Rating] | [Open / In Progress / Closed] |
| F-002 | [Title] | [Domain] | [Rating] | [Open / In Progress / Closed] |
| F-003 | [Title] | [Domain] | [Rating] | [Open / In Progress / Closed] |

---

## 5. Evidence Reviewed

*This section catalogues all artefacts and evidence items reviewed during the assessment. Authors should list each piece of evidence with sufficient detail for an auditor to locate and verify it independently.*

| # | Evidence Item | Description | Source / Location | Date Obtained | Reviewed By |
|---|---|---|---|---|---|
| E-001 | DNS Architecture Diagram | Network diagram showing DNS component topology and interconnections | [Document Management System / SharePoint path] | [Date] | [Reviewer Name] |
| E-002 | DNS Zone Configuration Files | Exported zone files for all authoritative zones | [Location / ticket reference] | [Date] | [Reviewer Name] |
| E-003 | DNS Server Hardening Checklist | Completed CIS Benchmark hardening checklist for each DNS server | [Document Management System path] | [Date] | [Reviewer Name] |
| E-004 | DNSSEC Signing Records | Signed zone files and key management records (KSK / ZSK rotation logs) | [Location] | [Date] | [Reviewer Name] |
| E-005 | Failover Test Results | Results of DNS failover simulation exercise | [Incident / Change ticket reference] | [Date] | [Reviewer Name] |
| E-006 | DNS Monitoring Dashboard Screenshots | Evidence of real-time DNS availability and query monitoring | [Monitoring platform / SIEM reference] | [Date] | [Reviewer Name] |
| E-007 | Change Management Records | DNS-related change requests reviewed in the assessment period | [ITSM platform reference] | [Date] | [Reviewer Name] |
| E-008 | Third-Party DNS SLA Documentation | SLA and uptime commitments from external DNS provider | [Vendor management repository] | [Date] | [Reviewer Name] |
| E-009 | Vulnerability Scan Reports | Latest vulnerability scan results for DNS server hosts | [Vulnerability management platform] | [Date] | [Reviewer Name] |
| E-010 | [Additional Evidence Item] | [Description] | [Location] | [Date] | [Reviewer Name] |

---

## 6. Recommendations

*This section provides prioritised, actionable recommendations to address identified gaps. Authors should link each recommendation to a specific finding and assign ownership and target remediation dates.*

### 6.1 Immediate Actions (Critical / High — within 30 days)

| Rec. ID | Linked Finding | Recommendation | Owner | Target Date | Status |
|---|---|---|---|---|---|
| R-001 | F-001 | [Describe specific corrective action required] | [Role / Team] | [Date] | [Open] |
| R-002 | F-002 | [Describe specific corrective action required] | [Role / Team] | [Date] | [Open] |

### 6.2 Short-Term Actions (Medium — within 90 days)

| Rec. ID | Linked Finding | Recommendation | Owner | Target Date | Status |
|---|---|---|---|---|---|
| R-003 | F-003 | [Describe specific corrective action required] | [Role / Team] | [Date] | [Open] |
| R-004 | F-004 | [Describe specific corrective action required] | [Role / Team] | [Date] | [Open] |

### 6.3 Long-Term Actions (Low — within 180 days)

| Rec. ID | Linked Finding | Recommendation | Owner | Target Date | Status |
|---|---|---|---|---|---|
| R-005 | F-005 | [Describe specific corrective action required] | [Role / Team] | [Date] | [Open] |

### 6.4 DNS Resilience Design Recommendations

*The following represent architectural best practices applicable to [Organization Name]'s DNS environment regardless of specific findings:*

- **Geographic Redundancy:** Authoritative DNS servers should be hosted in at least two geographically separated data centres to withstand site-level failures.
- **Anycast Routing:** Consider implementing anycast addressing for recursive resolvers to improve availability and latency resilience.
- **DNSSEC Key Rotation:** Enforce automated key signing key (KSK) and zone signing key (ZSK) rotation schedules per NIST SP 800-81-2 recommendations.
- **DNS over HTTPS / DNS over TLS:** Evaluate adoption of encrypted DNS transport protocols for sensitive internal queries.
- **DNS Traffic Logging:** Ensure full query logging is enabled and integrated with the SIEM platform for anomaly detection and forensic capability.
- **TTL Optimisation for Failover:** Review and reduce TTL values for critical A and CNAME records to minimise propagation delays during failover events.
- **Regular Failover Drills:** Schedule DNS failover testing at minimum annually, with results documented and reviewed by IT Operations and IT Risk.

---

## 7. Roles and Responsibilities

*This section defines accountabilities for DNS infrastructure design, operation, and compliance across relevant stakeholders using a RACI framework.*

**RACI Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of IT Operations | IT Infrastructure Team | IT Security / CISO | IT Risk & Compliance | Vendor / MSP | Senior Management |
|---|---|---|---|---|---|---|
| DNS architecture design and approval | A | R | C | C | C | I |
| DNS server provisioning and configuration | A | R | I | I | C | — |
| DNSSEC key management and rotation | A | R | C | I | — | — |
| DNS security policy enforcement | C | R | A | C | I | I |
| DNS monitoring and alerting | A | R | C | I | C | — |
| DNS failover testing and validation | A | R | C | C | C | I |
| Third-party DNS vendor management | A | C | C | C | R | I |
| DNS-related incident response | A | R | C | I | C | I |
| DNS compliance assessment and reporting | C | C | C | A/R | I | I |
| Document review and sign-off | A | C | C | C | — | I |

**Key Contacts:**

| Role | Name | Email | Contact Number |
|---|---|---|---|
| Head of IT Operations | [Name] | [Email] | [Contact] |
| Lead Infrastructure Engineer | [Name] | [Email] | [Contact] |
| Chief Information Security Officer (CISO) | [Name] | [Email] | [Contact] |
| IT Risk & Compliance Manager | [Name] | [Email] | [Contact] |
| External DNS Vendor Contact | [Name] | [Email] | [Contact] |

---

## 8. Review and Approval

### 8.1 Review Triggers

This document must be reviewed and updated under the following conditions:

- **Quarterly scheduled review** — at minimum once every three (3) months
- **Material infrastructure change** — following any significant modification to DNS infrastructure components, zones, or providers
- **Security incident** — following any DNS-related security incident or outage
- **Regulatory update** — following issuance of new or revised BNM RMiT guidance affecting DNS controls
- **Post-audit remediation** — following closure of audit findings related to DNS infrastructure

### 8.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes made] |
| [2.0] | [Date] | [Author Name] | [Description of changes made] |

### 8.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — Lead Infrastructure Engineer | [Name] | __________________ | [Date] |
| Reviewed By — IT Security / CISO | [Name] | __________________ | [Date] |
| Reviewed By — IT Risk & Compliance | [Name] | __________________ | [Date] |
| Approved By — Head of IT Operations | [Name] | __________________ | [Date] |

---

## 9. References

The following regulatory instruments, standards, and internal policies are referenced in or applicable to this document:

| Reference | Title | Issuing Body | Clause / Section |
|---|---|---|---|
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.42 |
| BNM RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Clause 10.40–10.43 (Network Security) |
| PDPA 2010 | Personal Data Protection Act 2010 | Government of Malaysia | Section 9 (Security of Personal Data) |
| NACSA Cybersecurity Framework | National Cybersecurity Framework | NACSA Malaysia | [Applicable control domain] |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO / IEC | Annex A, Control 8.20 |
| NIST SP 800-81-2 | Secure Domain Name System (DNS) Deployment Guide | NIST | All |
| CIS Benchmark — DNS | CIS Benchmark for DNS Servers | Center for Internet Security | [Version X.X] |
| [Internal Policy] | [Organization Name] IT Infrastructure Security Policy | [Organization Name] | [Reference Number] |
| [Internal Policy] | [Organization Name] Business Continuity and DR Policy | [Organization Name] | [Reference Number] |
| [Internal Policy] | [Organization Name] Change Management Policy | [Organization Name] | [Reference Number] |

---

## 10. Appendices

### Appendix A — DNS Architecture Diagram

*Attach or embed the current DNS infrastructure topology diagram showing all authoritative servers, recursive resolvers, security layers, network segments, and interconnections. The diagram should clearly indicate primary and secondary/failover components and geographic distribution.*

> **[ATTACH: DNS_Architecture_Diagram_v[X.X]_[Date].pdf / .vsdx / .png]**

Diagram should include:
- All DNS server nodes (primary and secondary) with hostnames and IP addresses
- Network segments (internal, DMZ, external/internet-facing)
- Replication and synchronisation flows between authoritative servers
- Recursive resolver placement and forwarding paths
- DNS security controls (firewall, RPZ, DNSSEC validation points)
- External DNS provider integration points
- Data centre / availability zone labels

---

### Appendix B — DNS Zone Map

*Provide a complete listing of all DNS zones managed by [Organization Name], including zone type, authoritative servers, DNSSEC status, and zone owner.*

| Zone Name | Zone Type | Primary Server | Secondary Server(s) | DNSSEC Signed | Zone Owner | Last Updated |
|---|---|---|---|---|---|---|
| [example.com.my] | External Authoritative | [Server/Provider] | [Server(s)/Provider] | Yes / No | [Team] | [Date] |
| [internal.example.local] | Internal Authoritative | [Server] | [Server] | Yes / No | [Team] | [Date] |
| [mgmt.example.local] | Internal Authoritative | [Server] | [Server] | Yes / No | [Team] | [Date] |
| [app.example.local] | Internal Authoritative | [Server] | [Server] | Yes / No | [Team] | [Date] |

---

### Appendix C — DNS Server Inventory

*List all DNS server instances in scope with their current configuration baseline details.*

| Server Name | Role | OS / Platform | IP Address | Location / Zone | Hosting Model | Last Patched | Hardening Verified |
|---|---|---|---|---|---|---|---|
| [dns-auth-01] | Primary Authoritative | [e.g., RHEL 9 / BIND 9.18] | [IP] | [DC1 / AZ-East] | On-premises | [Date] | Yes / No |
| [dns-auth-02] | Secondary Authoritative | [e.g., RHEL 9 / BIND 9.18] | [IP] | [DC2 / AZ-West] | On-premises | [Date] | Yes / No |
| [dns-rec-01] | Internal Recursive | [e.g., Ubuntu / Unbound] | [IP] | [Corporate LAN] | On-premises | [Date] | Yes / No |
| [dns-rec-02] | Internal Recursive | [e.g., Ubuntu / Unbound] | [IP] | [Corporate LAN] | On-premises | [Date] | Yes / No |
| [External Provider] | External Authoritative | [e.g., Cloudflare DNS] | N/A | Cloud / Global | SaaS | N/A | Per SLA |

---

### Appendix D — DNS Failover Test Results

*Document the results of the most recent DNS failover simulation or business continuity test. Each test cycle should be recorded here.*

**Test Date:** [Date]
**Test Conducted By:** [Name / Team]
**Test Scenario:** [e.g., Simulated primary authoritative server failure]

| Test Step | Expected Outcome | Actual Outcome | Pass / Fail | Notes |
|---|---|---|---|---|
| Shutdown primary authoritative DNS | Secondary takes over zone authority | [Actual result] | Pass / Fail | [Notes] |
| DNS query resolution during failover | All queries resolved via secondary | [Actual result] | Pass / Fail | [Notes] |
| Failover detection time (RTO) | ≤ [X] minutes | [Actual time] | Pass / Fail | [Notes] |
| Zone data integrity post-failover | Zone data matches primary snapshot | [Actual result] | Pass / Fail | [Notes] |
| Restoration of primary server | Primary resumes authority without data loss | [Actual result] | Pass / Fail | [Notes] |

**Overall Test Result:** [Pass / Fail / Conditional Pass]
**Remediation Required:** [Yes / No] — [If yes, reference Finding and Recommendation IDs]

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Authoritative DNS** | A DNS server that holds the original, definitive records for a DNS zone |
| **BNM RMiT** | Bank Negara Malaysia Risk Management in Technology Policy Document |
| **DNSSEC** | DNS Security Extensions — a suite of IETF specifications for securing DNS data |
| **KSK** | Key Signing Key — the top-level DNSSEC signing key used to sign the DNSKEY record set |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |
| **RPO** | Recovery Point Objective — maximum tolerable data loss expressed as time |
| **RPZ** | Response Policy Zone — DNS firewall mechanism using curated block lists |
| **RTO** | Recovery Time Objective — maximum tolerable time to restore a service |
| **Recursive Resolver** | A DNS server that resolves queries on behalf of clients by querying authoritative servers |
| **TTL** | Time to Live — duration (in seconds) a DNS record may be cached by resolvers |
| **ZSK** | Zone Signing Key — the DNSSEC key used to sign individual resource records within a zone |

---

*This document is classified as **Confidential**. Distribution is restricted to authorised personnel with a legitimate business need. Unauthorised disclosure, reproduction, or transmission of this document is prohibited.*

*© [Year] [Organization Name]. All rights reserved.*