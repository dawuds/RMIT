# DNS Security Standards

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
| **Regulatory Framework** | Bank Negara Malaysia – Risk Management in Technology (RMiT) |
| **Applicable RMiT Clause(s)** | 10.42 |
| **Status** | [Draft / Under Review / Approved] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may result in disciplinary or legal action.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Policy Statements and Requirements](#5-policy-statements-and-requirements)
6. [DNS Security Standards and Controls](#6-dns-security-standards-and-controls)
7. [DNSSEC Implementation Standards](#7-dnssec-implementation-standards)
8. [DNS Attack Prevention and Mitigation](#8-dns-attack-prevention-and-mitigation)
9. [DNS Monitoring and Logging](#9-dns-monitoring-and-logging)
10. [Incident Response for DNS Events](#10-incident-response-for-dns-events)
11. [Exceptions and Escalation Process](#11-exceptions-and-escalation-process)
12. [Compliance and Enforcement](#12-compliance-and-enforcement)
13. [Review and Approval History](#13-review-and-approval-history)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this document and what it aims to achieve. Explain why DNS security is critical to the organisation's technology risk posture.*

This document establishes the DNS Security Standards for [Organization Name] (hereinafter referred to as "the Organization") in accordance with the Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document, with specific reference to Clause 10.42. The purpose of this standard is to:

- Define minimum-security requirements for Domain Name System (DNS) infrastructure operated by or on behalf of the Organization;
- Establish mandatory controls for the deployment, configuration, and monitoring of DNS services, including DNS Security Extensions (DNSSEC);
- Prescribe technical and operational measures to prevent, detect, and respond to DNS-based attacks and abuses;
- Ensure the integrity, availability, and confidentiality of DNS resolution services supporting critical financial services operations;
- Provide a consistent and auditable baseline that satisfies BNM RMiT Clause 10.42 and supports the Organization's broader technology risk management framework.

### 1.2 Scope

*Define which systems, environments, personnel, and third parties are within scope of this standard.*

This standard applies to:

**In Scope:**

| Scope Category | Description |
|---|---|
| **Systems** | All internal authoritative DNS servers, recursive resolvers, DNS forwarders, and split-horizon DNS infrastructure operated by the Organization |
| **Environments** | Production, staging, disaster recovery (DR), and non-production environments that host or process DNS records for Organisation-owned domains |
| **Cloud DNS** | DNS services hosted on cloud platforms (e.g., [Cloud Provider Name]) managed by or on behalf of the Organization |
| **Third-Party Providers** | Managed DNS service providers, domain registrars, and internet service providers (ISPs) providing DNS services under contract with the Organization |
| **Personnel** | All employees, contractors, and vendors with administrative or operational access to DNS infrastructure |
| **Domains** | All domains and sub-domains registered to or managed by the Organization, including those used for internet-facing services, internal applications, and API endpoints |

**Out of Scope:**

- DNS resolution services operated solely by end-user devices with no administrative access by the Organization;
- Subsidiary or affiliated entities that maintain fully independent IT governance structures, unless contractually bound by this standard;
- [Specify any additional exclusions relevant to the Organization].

### 1.3 Applicability

This standard is mandatory for all personnel and third-party entities within the defined scope. Non-compliance will be managed in accordance with Section 12 (Compliance and Enforcement) of this document.

---

## 2. Definitions and Abbreviations

*List key technical and regulatory terms used throughout this document to ensure consistent interpretation.*

| Term / Abbreviation | Definition |
|---|---|
| **BNM** | Bank Negara Malaysia – the central bank of Malaysia and primary regulator for financial institutions |
| **RMiT** | Risk Management in Technology – BNM's policy document governing technology risk management for financial institutions |
| **DNS** | Domain Name System – a hierarchical and decentralised naming system used to resolve domain names to IP addresses |
| **DNSSEC** | DNS Security Extensions – a suite of Internet Engineering Task Force (IETF) specifications for securing DNS records through cryptographic signing |
| **Authoritative DNS Server** | A DNS server that holds the definitive records for a specific domain zone and responds to queries with authoritative answers |
| **Recursive Resolver** | A DNS server that processes DNS queries on behalf of clients by querying other DNS servers until it resolves the requested name |
| **DNS Forwarder** | A DNS server that forwards queries it cannot resolve to a designated upstream resolver |
| **DNS Cache Poisoning** | An attack in which forged DNS responses are injected into a resolver's cache, redirecting users to malicious destinations |
| **DNS Hijacking** | An attack that redirects DNS queries by compromising resolver settings, registrar accounts, or authoritative zone data |
| **DNS Tunnelling** | Misuse of DNS protocol to encode and transmit non-DNS data, commonly used for data exfiltration or command-and-control (C2) communication |
| **DGA** | Domain Generation Algorithm – an algorithm used by malware to generate large numbers of pseudo-random domain names for C2 communication |
| **DoH** | DNS over HTTPS – a protocol for DNS resolution via HTTPS, encrypting DNS traffic |
| **DoT** | DNS over TLS – a protocol for DNS resolution via TLS, encrypting DNS traffic |
| **RPZ** | Response Policy Zone – a DNS firewall mechanism allowing resolvers to override responses based on policy rules |
| **TSIG** | Transaction Signature – a mechanism for authenticating DNS messages between servers using a shared secret |
| **TTL** | Time to Live – a value in a DNS record specifying how long a resolver may cache the record |
| **Zone Transfer** | The process of replicating DNS zone data from a primary to a secondary name server (AXFR/IXFR) |
| **SOA** | Start of Authority – a DNS record type specifying authoritative information about a DNS zone |
| **CISO** | Chief Information Security Officer |
| **NOC** | Network Operations Centre |
| **SOC** | Security Operations Centre |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **PDPA** | Personal Data Protection Act 2010 |
| **ISMS** | Information Security Management System |
| [Add additional terms as required] | [Definition] |

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Basis

*Summarise the regulatory obligations that necessitate this standard, citing specific clauses.*

[Organization Name] is subject to the following regulatory requirements that directly mandate or inform DNS security controls:

| Regulation / Standard | Applicable Clause(s) | Relevance to DNS Security |
|---|---|---|
| BNM Risk Management in Technology (RMiT) | **Clause 10.42** | Prescribes specific controls for DNS infrastructure security, including DNSSEC and DNS attack prevention |
| BNM RMiT | Clause 10.1 – 10.5 | General network security principles that DNS security must satisfy |
| BNM RMiT | Clause 11 (Cyber Resilience) | DNS availability and integrity as a component of cyber resilience |
| Personal Data Protection Act 2010 (PDPA) | Section 9, 10 | Protection of personal data traversing DNS-resolved endpoints |
| NACSA National Cyber Security Policy | Critical Infrastructure Protection | DNS as critical infrastructure requiring protection |
| ISO/IEC 27001:2022 | Annex A – 8.20, 8.21, 8.22 | Network security controls applicable to DNS |
| [Organization Name] Information Security Policy | [Policy Reference] | Parent policy governing all security standards |
| [Organization Name] Network Security Policy | [Policy Reference] | Network-layer security requirements applicable to DNS |

### 3.2 Internal Policy Hierarchy

*Describe where this standard sits within the Organization's policy framework.*

This document is a **Tier 3 Standard** within [Organization Name]'s Policy Framework:

- **Tier 1:** Information Security Policy (Parent)
- **Tier 2:** Network Security Policy (Parent)
- **Tier 3:** DNS Security Standards *(this document)*
- **Tier 4:** DNS Security Procedures and Work Instructions (subordinate documents)

---

## 4. Roles and Responsibilities

### 4.1 Overview

*Describe the governance structure for DNS security and the general accountability model.*

The following roles are accountable and responsible for the implementation, operation, and oversight of DNS security controls within [Organization Name]. Role assignments are maintained in the Organisation's access management system and reviewed [quarterly / annually].

### 4.2 RACI Matrix

*Complete the RACI table below. Use R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Network Operations Manager | CISO / Head of Information Security | NOC / Network Operations Team | SOC / Cyber Security Team | IT Infrastructure Lead | Risk & Compliance | Internal Audit | Senior Management |
|---|---|---|---|---|---|---|---|---|
| DNS Security Standard ownership and approval | A | C | I | I | I | C | I | A |
| DNS infrastructure design and architecture | A | C | R | C | R | I | I | I |
| DNSSEC key management and rollover | A | I | R | C | R | I | I | I |
| DNS server hardening and patching | A | I | R | I | R | I | I | I |
| DNS monitoring and anomaly detection | C | C | R | R | I | I | I | I |
| DNS incident response | C | A | R | R | I | I | I | I |
| DNS firewall (RPZ) rule management | A | C | R | R | I | I | I | I |
| DNS change management | A | I | R | C | R | I | I | I |
| Third-party DNS provider oversight | A | C | R | I | I | C | I | I |
| DNS security exceptions approval | C | A | C | C | I | R | I | I |
| Compliance reporting to BNM | I | A | C | C | I | R | C | I |
| Annual DNS security assessment | C | A | C | C | C | R | R | I |
| Staff awareness and training | I | A | R | R | R | R | I | I |
| [Add activity as required] | | | | | | | | |

### 4.3 Role Descriptions

*Provide a brief description of each role's key DNS security responsibilities.*

**Network Operations Manager**
- Primary owner and accountable party for this DNS Security Standard;
- Oversees the operational integrity of all DNS infrastructure;
- Approves DNS architecture changes, exception requests, and third-party DNS service agreements;
- Escalates DNS security incidents and significant risks to CISO;
- Ensures DNS security controls are incorporated into operational run books and change management processes.

**CISO / Head of Information Security**
- Provides strategic oversight and approves DNS security standards and exceptions;
- Accountable for DNS security compliance reporting to BNM and senior management;
- Ensures DNS security is represented in the Organisation's cyber risk register;
- Reviews DNS security posture as part of the Organisation's broader ISMS.

**NOC / Network Operations Team**
- Day-to-day operation, configuration, and maintenance of DNS servers and resolvers;
- Executes DNSSEC key generation, signing, and rollover procedures;
- Implements DNS hardening checklists and applies security patches;
- Manages DNS change requests in accordance with the change management process;
- Responds to DNS operational incidents.

**SOC / Cyber Security Team**
- Monitors DNS traffic for anomalies, threats, and indicators of compromise;
- Operates and maintains DNS firewall (RPZ) rule sets;
- Investigates DNS-related security events and escalates confirmed incidents;
- Threat intelligence integration for DNS-based attack prevention.

**IT Infrastructure Lead**
- Ensures DNS infrastructure is provisioned and maintained to required security standards;
- Coordinates infrastructure changes affecting DNS with Network Operations Manager.

**Risk & Compliance**
- Maintains the DNS security exception register;
- Facilitates periodic DNS security compliance assessments;
- Reports DNS-related compliance findings to management and regulators.

**Internal Audit**
- Independently assesses adherence to this DNS Security Standard;
- Reports findings to the Audit Committee.

---

## 5. Policy Statements and Requirements

### 5.1 General DNS Security Policy

*State the high-level mandatory policy positions of the Organization with respect to DNS security.*

[Organization Name] adopts the following mandatory policy positions for DNS security:

1. **Integrity:** All DNS infrastructure operated by the Organization shall be protected against unauthorised modification, cache poisoning, and data forgery through the implementation of technical controls including DNSSEC, TSIG, and access controls.

2. **Availability:** DNS services shall be operated with sufficient redundancy, geographic distribution, and resilience to meet the availability requirements of critical financial services, consistent with the Organisation's defined Recovery Time Objectives (RTO).

3. **Confidentiality:** DNS query and response data shall be treated as sensitive operational information. Encrypted DNS protocols (DoH/DoT) shall be evaluated and deployed where appropriate to protect DNS traffic from interception.

4. **Authorised Use:** DNS infrastructure shall only be used for its intended purpose. DNS tunnelling, use of DNS for unauthorised data exfiltration, and circumvention of DNS security controls are strictly prohibited.

5. **Hardening:** All DNS servers and resolvers shall be hardened in accordance with documented baselines, with unnecessary services, open recursion, and zone transfer access restricted to authorised hosts.

6. **Patching:** DNS software shall be maintained at vendor-supported versions and patched in accordance with the Organisation's vulnerability management policy, with critical vulnerabilities remediated within [X] business days.

7. **DNSSEC:** DNSSEC shall be implemented for all Organisation-managed authoritative DNS zones where technically feasible and shall be validated at recursive resolvers.

8. **Monitoring:** DNS traffic shall be continuously monitored for anomalous patterns, malicious domain resolution, and indicators of DNS-based attacks. Logs shall be retained for a minimum of [12 months / as per regulatory requirement].

9. **Third Parties:** Third-party DNS service providers shall be contractually bound to security standards consistent with or exceeding this document.

10. **Change Management:** All changes to DNS configuration, zone data, and security controls shall follow the Organisation's formal change management process.

### 5.2 Mandatory Control Requirements Summary

*This table provides a consolidated view of mandatory control requirements. Reference the detailed sections for full specifications.*

| Control ID | Control Description | Mandatory | Reference Section |
|---|---|---|---|
| DNS-01 | DNS server hardening to approved baseline | Yes | 6.1 |
| DNS-02 | Restriction of open recursive resolution | Yes | 6.2 |
| DNS-03 | Zone transfer restriction (AXFR/IXFR) | Yes | 6.3 |
| DNS-04 | TSIG authentication for zone transfers | Yes | 6.3 |
| DNS-05 | DNSSEC signing for all authoritative zones | Yes | 7.1 |
| DNS-06 | DNSSEC validation at recursive resolvers | Yes | 7.2 |
| DNS-07 | DNSSEC key rollover procedure | Yes | 7.3 |
| DNS-08 | DNS firewall / RPZ deployment | Yes | 8.1 |
| DNS-09 | DNS cache poisoning prevention (0x20 encoding / port randomisation) | Yes | 8.2 |
| DNS-10 | DNS DDoS mitigation controls | Yes | 8.3 |
| DNS-11 | DNS tunnelling detection | Yes | 8.4 |
| DNS-12 | DNS query logging and retention | Yes | 9.1 |
| DNS-13 | Anomaly detection and alerting | Yes | 9.2 |
| DNS-14 | DNS incident response procedure | Yes | 10 |
| DNS-15 | Third-party DNS provider security assessment | Yes | 6.5 |
| DNS-16 | DNS change management integration | Yes | 6.6 |
| DNS-17 | DNS availability and redundancy | Yes | 6.4 |
| [DNS-XX] | [Additional control] | [Yes/No] | [Section] |

---

## 6. DNS Security Standards and Controls

### 6.1 DNS Server Hardening

*Specify the minimum hardening requirements for DNS servers and resolvers. Reference the Organisation's approved hardening baseline.*

All DNS servers (authoritative and recursive) operated by [Organization Name] shall be hardened in accordance with the following minimum requirements:

**Operating System Hardening:**
- The host operating system shall conform to [Organisation Name]'s approved server hardening baseline (Reference: [Hardening Baseline Document ID]);
- Only the DNS service and essential supporting services shall be enabled on dedicated DNS servers;
- Administrative access shall be restricted to designated management interfaces using multi-factor authentication (MFA);
- Root or administrator access shall not be used for routine DNS service operations; a dedicated service account with least privilege shall be used.

**DNS Software Hardening:**

| Hardening Requirement | Specification |
|---|---|
| Software version | Vendor-supported release; patch within [X] days of critical CVE publication |
| Bind version (if applicable) | [Specify minimum version] |
| Windows DNS Server (if applicable) | [Specify minimum OS/patch level] |
| Listening interfaces | Restrict to required interfaces only; disable listening on all interfaces where not necessary |
| Version disclosure | Disable DNS software version disclosure (`version "none";` in BIND) |
| Recursive queries | Restricted to authorised internal IP ranges only (see 6.2) |
| Rate limiting | Implement DNS Response Rate Limiting (RRL) to mitigate amplification attacks |
| EDNS0 | Enable with appropriate buffer size limits |
| Minimal Any responses | Enable minimal responses to ANY queries |
| CHAOS class | Disable CHAOS class queries (`hostname.bind`, `version.bind`) |
| Query logging | Enable per Section 9.1 |

**Network-Level Controls:**
- DNS servers shall be placed in a dedicated network segment (e.g., dedicated DNS VLAN or security zone) with access restricted by firewall rules;
- Firewall rules shall permit DNS (UDP/TCP port 53) only from authorised source IP ranges;
- DNS management traffic shall traverse a separate management network or VPN.

### 6.2 Open Recursion Prevention

*Specify controls to prevent the Organisation's resolvers from being used as open resolvers.*

- Recursive DNS resolution shall be restricted to authorised internal IP address ranges as defined in the Organisation's IP address management (IPAM) system;
- All internal recursive resolvers shall explicitly deny recursive queries from external IP addresses;
- The Network Operations Team shall periodically verify that no Organisation-operated resolver is accessible as an open resolver using tools such as [Specify tool, e.g., dig, nmap];
- External-facing authoritative DNS servers shall not be configured to perform recursive resolution;
- Results of open resolver checks shall be documented and retained as evidence for compliance purposes.

**Authorised Recursive Client Ranges:**

| Network Range | Description | Authorised |
|---|---|---|
| [IP Range / CIDR] | Internal corporate LAN | Yes |
| [IP Range / CIDR] | Internal server segment | Yes |
| [IP Range / CIDR] | Management network | Yes |
| [IP Range / CIDR] | Any external / internet | No |
| [Add rows as required] | | |

### 6.3 Zone Transfer Controls

*Specify requirements for securing DNS zone transfers between primary and secondary servers.*

Zone transfers (AXFR and IXFR) expose the complete contents of a DNS zone and shall be strictly controlled:

- Zone transfers shall be permitted only between explicitly authorised primary and secondary DNS servers;
- All zone transfers shall be authenticated using TSIG (Transaction Signature) with a minimum key length of 256-bit HMAC-SHA256;
- TSIG keys shall be unique per server pair and shall not be reused across different zone transfer relationships;
- Zone transfer ACLs (Access Control Lists) shall enumerate authorised secondary server IP addresses;
- Any attempt to perform an unauthorised zone transfer shall generate a security alert and be investigated;
- TSIG keys shall be rotated at least [annually / upon personnel change / upon compromise];
- TSIG key management shall follow the Organisation's cryptographic key management policy (Reference: [Key Management Policy Document ID]).

**Zone Transfer Authorisation Register:**

| Zone Name | Primary Server | Authorised Secondary Server(s) | TSIG Key Reference | Last Reviewed |
|---|---|---|---|---|
| [domain.com] | [Primary DNS FQDN/IP] | [Secondary DNS FQDN/IP] | [TSIG Key ID] | [Date] |
| [internal.domain] | [Primary DNS FQDN/IP] | [Secondary DNS FQDN/IP] | [TSIG Key ID] | [Date] |
| [Add rows as required] | | | | |

### 6.4 DNS Availability and Redundancy

*Define availability requirements and redundancy architecture for DNS services.*

- A minimum of [two (2)] geographically or logically separated authoritative DNS servers shall be maintained per zone, consistent with industry best practice and BNM RMiT availability requirements;
- Internal recursive resolvers shall be deployed in a high-availability configuration with no single point of failure;
- DNS infrastructure shall be included in the Organisation's Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP), with defined RTO and RPO as follows:

| DNS Service Tier | Description | RTO | RPO |
|---|---|---|---|
| Tier 1 – Critical | DNS for internet-facing banking services | [X minutes] | [Y minutes] |
| Tier 2 – Important | DNS for internal core banking systems | [X hours] | [Y hours] |
| Tier 3 – Standard | DNS for general internal services | [X hours] | [Y hours] |

- DNS availability shall be actively monitored with automated alerting upon service degradation or failure;
- DR failover for DNS shall be tested at least [semi-annually] and test results documented.

### 6.5 Third-Party DNS Service Provider Management

*Specify requirements for managing external DNS providers and registrars.*

Where the Organisation uses third-party providers for DNS hosting, domain registration, or DNS security services:

- Third-party DNS providers shall be assessed prior to onboarding against the Organisation's third-party risk management framework (Reference: [Third-Party Risk Policy Document ID]);
- Contractual agreements with DNS providers shall include:
  - Security requirements consistent with or exceeding this standard;
  - Incident notification requirements (maximum notification period: [X hours]);
  - Audit rights and evidence of compliance (e.g., SOC 2 Type II, ISO 27001 certification);
  - Data residency and handling obligations consistent with PDPA requirements;
- Domain registrar accounts shall be protected with MFA and shall implement registrar lock (Registry Lock where available) to prevent unauthorised domain transfer or modification;
- Third-party DNS provider security posture shall be reviewed at least [annually];
- A register of all third-party DNS providers shall be maintained:

| Provider Name | Services Provided | Domains / Zones Managed | Contract Reference | Last Security Review | Risk Rating |
|---|---|---|---|---|---|
| [Provider Name] | [Authoritative DNS / Registrar / DNS Security] | [List domains] | [Contract ID] | [Date] | [Low/Medium/High] |
| [Add rows as required] | | | | | |

### 6.6 DNS Change Management

*Define how DNS configuration changes are governed.*

- All changes to DNS configuration, including zone records, server configuration, DNSSEC keys, and security policies, shall be processed through the Organisation's formal IT Change Management process (Reference: [Change Management Policy Document ID]);
- DNS changes shall be categorised and approved as follows:

| Change Category | Examples | Approval Required | Testing Required |
|---|---|---|---|
| Standard | A/CNAME/MX record additions for known services | Network Operations Manager | Staging environment |
| Significant | New zone creation, DNSSEC implementation, resolver reconfiguration | Network Operations Manager + CISO | Full pre-production testing |
| Emergency | Response to DNS attack, critical service outage | Network Operations Manager (post-facto CISO notification) | Expedited |
| Major | DNS infrastructure replacement, provider migration | CTO / IT Steering Committee | Full DR and failover test |

- A pre-change DNS backup (zone file export) shall be taken before any significant or major change;
- Post-change validation shall include resolution testing, DNSSEC chain verification, and monitoring for anomalies.

---

## 7. DNSSEC Implementation Standards

### 7.1 DNSSEC Zone Signing Requirements

*Specify mandatory DNSSEC signing requirements for all Organisation-managed authoritative zones.*

DNSSEC provides cryptographic authentication of DNS data, preventing cache poisoning and ensuring the integrity of DNS responses. The following requirements are mandatory:

- DNSSEC shall be enabled on all Organisation-managed authoritative DNS zones for internet-facing domains;
- DNSSEC shall be evaluated for internal zones and implemented where technically feasible and operationally practical;
- The Organisation shall use the following cryptographic algorithm standards (minimum):

| Key Type | Algorithm | Key Length | Rationale |
|---|---|---|---|
| Zone Signing Key (ZSK) | ECDSA P-256 (Algorithm 13) or RSA SHA-256 (Algorithm 8) | 256-bit (ECDSA) / 2048-bit (RSA) | IETF recommended; balances security and performance |
| Key Signing Key (KSK) | ECDSA P-256 (Algorithm 13) or RSA SHA-256 (Algorithm 8) | 256-bit (ECDSA) / 2048-bit (RSA) | KSK signs ZSK; higher trust anchor |
| DS Record Hash | SHA-256 (Digest Type 2) | — | Minimum; SHA-256 or SHA-384 |

- NSEC3 (with opt-out disabled for zones without delegation) shall be used in preference to NSEC to prevent zone enumeration via authenticated denial of existence;
- NSEC3 iteration count shall be set to [0–100] in accordance with current IETF recommendations (RFC 9276);
- Signed zones shall have an appropriate RRSIG signature validity window, typically [14–30 days], with re-signing scheduled well before expiry.

**DNSSEC Zone Signing Register:**

| Zone Name | Algorithm | ZSK Key Tag | KSK Key Tag | Last Signed | Next Re-sign | DS Published at Registrar | Status |
|---|---|---|---|---|---|---|---|
| [domain.com] | [Algorithm 13] | [Key Tag] | [Key Tag] | [Date] | [Date] | [Yes/No] | [Active] |
| [Add rows as required] | | | | | | | |

### 7.2 DNSSEC Validation at Recursive Resolvers

*Specify requirements for DNSSEC validation on all Organisation-operated recursive resolvers.*

- All Organisation-operated recursive resolvers shall be configured to perform DNSSEC validation;
- Validation shall use the current IANA trust anchor (root zone KSK) and shall be updated automatically or manually upon IANA key rollover;
- Resolvers shall return SERVFAIL for queries where DNSSEC validation fails, preventing clients from receiving forged responses;
- DNSSEC validation failures shall be logged and generate security alerts (see Section 9.2);
- The Network Operations Team shall periodically verify DNSSEC validation is functioning correctly using tools such as [e.g., `dig +dnssec`, Verisign DNSSEC Debugger];
- Validation test results shall be documented at least quarterly.

### 7.3 DNSSEC Key Rollover Procedures

*Specify the mandatory process for DNSSEC key rollovers to maintain cryptographic hygiene.*

DNSSEC keys shall be subject to the following rollover schedule and procedures:

**Key Rollover Schedule:**

| Key Type | Rollover Frequency | Method | Notice Period |
|---|---|---|---|
| Zone Signing Key (ZSK) | Every [90 days] | Pre-publication or Double-Signature | [14 days] |
| Key Signing Key (KSK) | Every [12 months] or upon compromise | Double-KSK (RFC 6781) | [30 days] |
| Emergency rollover | Upon confirmed or suspected key compromise | Expedited Double-Signature | Immediate |

**ZSK Rollover Procedure (Pre-publication method):**

1. Generate new ZSK and add to the zone's DNSKEY RRset;
2. Wait for old ZSK TTL to expire (all caches have new ZSK);
3. Begin signing zone records with new ZSK;
4. Wait for RRSIG TTL to expire (all caches have new signatures);
5. Remove old ZSK from DNSKEY RRset;
6. Document rollover completion in the Key Rollover Log.

**KSK Rollover Procedure (Double-KSK method):**

1. Generate new KSK and add to the zone's DNSKEY RRset;
2. Sign DNSKEY RRset with both old and new KSK;
3. Publish DS record for new KSK at the parent zone / registrar;
4. Wait for DS TTL to expire (all resolvers have both DS records);
5. Retire old KSK – remove from DNSKEY RRset;
6. Request removal of old DS record at parent zone / registrar;
7. Document rollover completion.

**Key Compromise Response:**
- In the event of actual or suspected DNSSEC key compromise, an emergency rollover shall be initiated immediately;
- The CISO and Network Operations Manager shall be notified within [2 hours];
- Compromise shall be recorded as a security incident per Section 10.

### 7.4 DNSSEC Key Storage and Protection

- DNSSEC private keys shall be stored in a hardware security module (HSM) or equivalent secure key store where operationally feasible;
- Where HSM is not available, private keys shall be encrypted at rest and access restricted to authorised personnel only;
- DNSSEC key material shall not be stored in version control systems, ticketing systems, or unencrypted file shares;
- Access to DNSSEC key material shall be logged and reviewed [quarterly].

---

## 8. DNS Attack Prevention and Mitigation

### 8.1 DNS Firewall and Response Policy Zones (RPZ)

*Specify the mandatory requirements for DNS firewall deployment and management.*

- A DNS firewall utilising Response Policy Zones (RPZ) shall be deployed on all internal recursive resolvers;
- RPZ feeds shall include:

| RPZ Feed Category | Source | Update Frequency | Action on Match |
|---|---|---|---|
| Malware C2 domains | [Threat Intelligence Provider / NACSA feed] | [Daily / Real-time] | NXDOMAIN / NODATA |
| Phishing domains | [Threat Intelligence Provider] | [Daily / Real-time] | NXDOMAIN |
| Botnet infrastructure | [Threat Intelligence Provider] | [Daily / Real-time] | NXDOMAIN |
| Known DGA domains | [Threat Intelligence Provider / Internal detection] | [Daily] | NXDOMAIN |
| Newly registered domains (NRD) | [Optional - per risk appetite] | [Daily] | [Log / Block] |
| Custom internal block list | Internal SOC | As needed | NXDOMAIN |
| [Additional feed] | [Source] | [Frequency] | [Action] |

- RPZ rule additions and removals shall follow the DNS change management process (Section 6.6);
- RPZ block events shall be logged and reviewed by the SOC;
- False positive reports from users shall be investigated and actioned within [X] business days;
- The effectiveness of RPZ feeds shall be reviewed [quarterly].

### 8.2 DNS Cache Poisoning Prevention

*Specify technical controls to prevent DNS cache poisoning attacks.*

The following controls shall be implemented to prevent cache poisoning attacks (including Kaminsky-style attacks):

| Control | Requirement | Implementation |
|---|---|---|
| Source port randomisation | Full randomisation across ephemeral port range (1024–65535) | Enabled by default in modern DNS resolvers; verify in configuration |
| DNS query ID randomisation | Randomised 16-bit transaction IDs | Enabled by default; verify |
| 0x20 encoding (mixed-case) | Use case-randomisation in queries to detect spoofed responses | Enable where supported by resolver software |
| DNSSEC validation | Validates DNS response integrity cryptographically | Per Section 7.2 |
| Minimum TTL enforcement | Prevents short-TTL cache poisoning | Set minimum cache TTL to [300 seconds] |
| Negative caching | Cache NXDOMAIN responses to reduce attack surface | Enabled; maximum negative TTL [X seconds] |
| Forwarding security | Use DNSSEC-validating upstream resolvers for forwarded queries | Verify upstream resolver DNSSEC support |

- The Network Operations Team shall verify cache poisoning controls are correctly configured during quarterly DNS security reviews.

### 8.3 DNS Denial of Service (DoS) Mitigation

*Specify controls to protect DNS infrastructure from volumetric and application-layer DoS attacks.*

- DNS Response Rate Limiting (RRL) shall be enabled on all authoritative and recursive DNS servers to mitigate DNS amplification attacks;
- RRL parameters shall be tuned to balance protection against false-positive impact on legitimate traffic:

| RRL Parameter | Recommended Setting | Configured Value |
|---|---|---|
| `responses-per-second` | [5–20 per client] | [Value] |
| `referrals-per-second` | [5] | [Value] |
| `nodata-per-second` | [5] | [Value] |
| `nxdomains-per-second` | [5] | [Value] |
| `slip` | [2] | [Value] |

- Upstream DDoS protection (e.g., scrubbing service from ISP or cloud provider) shall be in place for internet-facing authoritative DNS servers;
- DNS Anycast deployment shall be considered for high-availability resilience against volumetric attacks;
- DNS DDoS mitigation capabilities shall be tested at least [annually] as part of the Organisation's DRP exercise;
- Thresholds for triggering DDoS incident response shall be defined:

| Threshold | Trigger Level | Action |
|---|---|---|
| Query rate per second | >[X] qps sustained for >[Y] seconds | Alert SOC; consider upstream mitigation activation |
| Error rate | >[X]% SERVFAIL / REFUSED rate | Alert NOC; investigate immediately |
| Amplification factor | >[X]x response-to-query size ratio | Enable RRL; alert SOC |

### 8.4 DNS Tunnelling Detection and Prevention

*Specify controls to detect and prevent misuse of DNS for data exfiltration or C2 communications.*

DNS tunnelling is a significant threat vector for data exfiltration and malware command-and-control. The following controls shall be implemented:

**Detection Controls:**

| Detection Method | Description | Implemented By |
|---|---|---|
| Query length analysis | Alert on DNS queries with abnormally long subdomains (>50 characters per label) | SOC / DNS monitoring |
| Query entropy analysis | Alert on high-entropy subdomain labels indicative of encoded data | SOC / DNS monitoring |
| Query volume per domain | Alert on unusually high query volume to a single domain from a single host | SOC / DNS monitoring |
| TXT record abuse detection | Alert on unusually large or frequent TXT record responses | SOC / DNS monitoring |
| Non-existent domain rate | Alert on high NXDOMAIN rates from a single host (DGA indicator) | SOC / DNS monitoring |
| Unusual record types | Alert on use of uncommon record types (NULL, PRIVATE) in queries | SOC / DNS monitoring |

**Prevention Controls:**
- DNS resolvers shall be configured to block resolution of known DNS tunnelling tool domains (e.g., iodine, dnscat2 default domains) via RPZ;
- Outbound DNS traffic from endpoints shall be restricted to Organisation-approved recursive resolvers only; direct external DNS queries (port 53 to non-approved resolvers) shall be blocked at the network firewall;
- Use of DNS over HTTPS (DoH) and DNS over TLS (DoT) to non-approved resolvers shall be blocked or inspected;
- Alerts generated from DNS tunnelling detection shall be investigated by the SOC within [X hours] and escalated per Section 10.

---

## 9. DNS Monitoring and Logging

### 9.1 DNS Logging Requirements

*Define mandatory logging requirements for DNS infrastructure.*

All DNS servers and resolvers operated by [Organization Name] shall maintain logs sufficient to support security monitoring, incident investigation, and regulatory compliance:

**Mandatory Log Fields:**

| Log Field | Description | Required |
|---|---|---|
| Timestamp | Date and time of query/response (UTC) | Mandatory |
| Source IP address | Client IP address issuing the query | Mandatory |
| Query name (QNAME) | The domain name queried | Mandatory |
| Query type (QTYPE) | Record type requested (A, AAAA, MX, TXT, etc.) | Mandatory |
| Query class (QCLASS) | DNS class (IN, etc.) | Mandatory |
| Response code (RCODE) | NOERROR, NXDOMAIN, SERVFAIL, REFUSED, etc. | Mandatory |
| Response data | Resolved IP address(es) or record data returned | Mandatory |
| DNSSEC status | AD (Authenticated Data) bit; validation outcome | Mandatory |
| RPZ action | If RPZ match, the policy action taken | Mandatory |
| Server ID | Identifier of the DNS server handling the query | Mandatory |
| Query duration | Response latency in milliseconds | Recommended |

**Log Retention and Protection:**

| Requirement | Specification |
|---|---|
| Minimum retention period | [12 months] or as required by BNM RMiT / internal policy |
| Log storage | Centralised SIEM / log management platform |
| Log integrity | Logs shall be write-protected and integrity-checked (e.g., hash chaining or SIEM ingestion) |
| Log access | Restricted to authorised NOC/SOC and audit personnel |
| Log transmission | DNS logs shall be forwarded to SIEM over encrypted transport (TLS) |
| Backup | DNS logs included in backup regime; offsite copy maintained |

### 9.2 DNS Monitoring and Alerting

*Define requirements for real-time monitoring and alerting on DNS security events.*

- DNS logs shall be ingested into the Organisation's centralised SIEM platform in near real-time;
- The SOC shall maintain detection rules and alerts for the following DNS security events as a minimum:

| Alert Name | Trigger Condition | Severity | Response SLA |
|---|---|---|---|
| DNS RPZ Block | DNS firewall blocked a malicious domain query | Medium | Investigate within [4 hours] |
| DNS Tunnelling Indicator | High entropy / long label / high TXT volume from single host | High | Investigate within [2 hours] |
| DNSSEC Validation Failure | Resolver returns SERVFAIL due to DNSSEC validation failure | High | Investigate within [1 hour] |
| Unauthorised Zone Transfer Attempt | AXFR/IXFR request from unauthorised IP | Critical | Escalate within [30 minutes] |
| DNS DDoS Threshold Exceeded | Query rate exceeds defined threshold | Critical | Escalate within [15 minutes] |
| Open Resolver Probe Detected | Recursive query received from external IP | High | Investigate within [2 hours] |
| DNS Server Unavailability | DNS service unresponsive for >[X] seconds | Critical | Escalate within [15 minutes] |
| DNS Configuration Change (Unplanned) | Zone file modification outside change window | Critical | Escalate within [30 minutes] |
| High NXDOMAIN Rate (DGA Indicator) | NXDOMAIN rate from single host exceeds [X] per minute | High | Investigate within [2 hours] |
| Suspicious TLD Resolution | Query for high-risk TLD (e.g., .tk, .xyz) from internal host | Low | Review in daily SOC report |
| TSIG Authentication Failure | Zone transfer TSIG mismatch | High | Investigate within [1 hour] |
| [Custom Alert] | [Trigger Condition] | [Severity] | [SLA] |

- DNS monitoring dashboards shall be reviewed by the SOC at least [daily] during business hours and on-call during non-business hours for critical systems;
- Quarterly trend analysis of DNS security metrics shall be conducted by the Network Operations Manager and SOC Lead, with findings reported to the CISO.

### 9.3 DNS Security Metrics and KPIs

*Define key performance indicators for DNS security to support management reporting.*

The following metrics shall be tracked and reported [monthly / quarterly]:

| Metric | Description | Target / Threshold |
|---|---|---|
| DNSSEC signing coverage | Percentage of Organisation-owned zones with active DNSSEC | 100% of internet-facing zones |
| DNSSEC validation success rate | Percentage of DNSSEC-validated queries returning AD=1 | >[X]% |
| RPZ block rate | Number of malicious domain queries blocked per period | Track trend; investigate spikes |
| DNS uptime | Availability of primary DNS services | >[99.95]% |
| Patch currency | Percentage of DNS servers on current or N-1 supported version | 100% |
| Open resolver checks passed | Result of periodic open resolver verification | 100% pass |
| DNS incidents (by severity) | Count of DNS-related security incidents per period | Track trend; target zero Critical |
| Zone transfer violations | Unauthorised zone transfer attempts detected | Zero successful |
| DNS key rollover compliance | ZSK/KSK rolled over per schedule | 100% on schedule |
| [Additional metric] | [Description] | [Target] |

---

## 10. Incident Response for DNS Events

### 10.1 DNS Incident Classification

*Define how DNS security incidents are classified.*

DNS security events shall be classified and responded to in accordance with the Organisation's Incident Response Policy (Reference: [IR Policy Document ID]) and the following DNS-specific classification guidance:

| Severity | Classification Criteria | Examples |
|---|---|---|
| **Critical (P1)** | Active DNS attack causing service outage or confirmed data exfiltration | DNS hijacking of production domain; confirmed DNS tunnelling exfiltration; DDoS causing DNS unavailability |
| **High (P2)** | DNS attack in progress or significant misconfiguration with material risk | DNSSEC key compromise; cache poisoning confirmed; unauthorised zone transfer successful |
| **Medium (P3)** | Indicators of DNS attack or policy violation with limited impact | DNS tunnelling suspected; RPZ blocks for sensitive internal host; open resolver discovered |
| **Low (P4)** | DNS security event with minimal impact or informational | Single RPZ block for unknown user; DNS configuration drift detected; expired RRSIG on non-critical zone |

### 10.2 DNS Incident Response Procedures

*Provide a high-level response workflow for DNS security incidents.*

**Phase 1 – Detection and Initial Triage**
1. SOC or NOC detects DNS anomaly via monitoring alert, user report, or threat intelligence;
2. Analyst reviews available DNS logs and SIEM data;
3. Incident classified per 10.1 and ticket opened in [Incident Management Platform];
4. Initial notification sent to Network Operations Manager;
5. If P1/P2: immediate escalation to CISO per the Escalation Matrix (Appendix C).

**Phase 2 – Containment**
6. Identify affected DNS servers, zones, or clients;
7. Apply immediate containment actions as appropriate:
   - Block malicious domains via RPZ emergency rule;
   - Isolate compromised DNS server from network;
   - Initiate emergency DNSSEC key rollover if key compromise suspected;
   - Activate backup/secondary DNS servers if primary unavailable;
   - Notify upstream providers (registrar, DNS hosting provider) if domain hijacking suspected.

**Phase 3 – Eradication and Recovery**
8. Identify root cause and remove malicious changes (e.g., restore zone file from backup);
9. Verify DNS resolution is correct and DNSSEC chain is valid post-recovery;
10. Restore affected DNS servers from known-good state if compromise confirmed;
11. Re-enable services and validate end-to-end functionality.

**Phase 4 – Post-Incident Review**
12. Conduct post-incident review within [5 business days] of incident closure;
13. Document root cause, timeline, impact, and lessons learned;
14. Update DNS security controls, monitoring rules, or procedures as required;
15. Report to CISO and Risk & Compliance per internal reporting requirements;
16. Assess BNM reporting obligations per RMiT incident reporting requirements.

### 10.3 BNM Incident Reporting Obligations

*Summarise the Organization's obligation to report DNS security incidents to BNM.*

In the event of a significant DNS security incident affecting financial services operations:

- The Organisation shall assess the incident against BNM RMiT incident reporting thresholds;
- Where reporting is triggered, the CISO shall coordinate notification to BNM within the timeframes specified in the RMiT Policy Document;
- All BNM notifications shall be documented and retained as evidence;
- NACSA reporting obligations shall also be assessed for incidents affecting critical national information infrastructure.

---

## 11. Exceptions and Escalation Process

### 11.1 Exception Policy

*Describe the conditions under which exceptions to this standard may be granted.*

Exceptions to any requirement of this DNS Security Standard may be granted only under the following conditions:

- The technical control is not feasible due to documented technical or operational constraints;
- A compensating control is identified that provides equivalent or greater protection;
- The exception is time-limited and includes a remediation plan with target date;
- The exception does not place the Organisation in breach of its BNM RMiT regulatory obligations.

No exception shall be granted solely on the basis of cost or convenience without risk assessment.

### 11.2 Exception Request Process

*Define the formal steps for requesting and approving a DNS security exception.*

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Complete DNS Security Exception Request Form (Appendix D) | Requestor | Prior to deviation |
| 2 | Submit to Network Operations Manager for initial review | Requestor | Prior to deviation |
| 3 | Network Operations Manager reviews technical justification and compensating controls | Network Operations Manager | [5 business days] |
| 4 | Risk & Compliance assess regulatory impact and risk rating | Risk & Compliance | [3 business days] |
| 5 | Exception submitted to CISO for approval decision | Network Operations Manager | Upon completion of steps 3–4 |
| 6 | CISO approves, conditionally approves, or rejects exception | CISO | [3 business days] |
| 7 | Approved exceptions recorded in the DNS Exception Register (Appendix D) | Risk & Compliance | Upon approval |
| 8 | Reminders sent at [30/60/90-day] intervals before exception expiry | Risk & Compliance | Automated |
| 9 | Exception reviewed at expiry; renewed, modified, or closed | Network Operations Manager | Prior to expiry |

### 11.3 DNS Security Exception Register

*Maintain a register of all active exceptions. A detailed register is maintained in Appendix D.*

| Exception ID | Control Reference | Description of Exception | Requestor | Risk Rating | Compensating Control | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| EXC-DNS-001 | [DNS-05] | [Exception description] | [Name/Team] | [Medium] | [Compensating control description] | [CISO Name] | [Date] | [Date] | [Active] |
| [Add rows as required] | | | | | | | | | |

### 11.4 Escalation Matrix

*Define escalation paths for DNS security issues and unresolved exceptions.*

| Scenario | First Escalation | Second Escalation | Third Escalation |
|---|---|---|---|
| DNS security exception rejected but operational need persists | Network Operations Manager → CISO | CISO → CTO | CTO → Risk Committee |
| DNS incident exceeding P2 severity | NOC/SOC → Network Operations Manager | Network Operations Manager → CISO | CISO → CEO / Regulators |
| Unresolved DNS vulnerability (past SLA) | Network Operations Manager → CISO | CISO → CTO | CTO → Board Risk Committee |
| Suspected DNS breach with customer impact | Network Operations Manager → CISO (immediate) | CISO → CEO + Legal (immediate) | Board notification + BNM notification |
| Third-party DNS provider non-compliance | Network Operations Manager → Third-Party Risk Team | → CISO | → Legal / Procurement |

---

## 12. Compliance and Enforcement

### 12.1 Compliance Assessment

*Describe how compliance with this standard is assessed.*

- The Network Operations Team shall conduct a self-assessment against this DNS Security Standard at least [quarterly], with results reviewed by the Network Operations Manager;
- Risk & Compliance shall conduct an independent compliance assessment at least [annually];
- Internal Audit shall include DNS security in the audit scope in accordance with the annual Internal Audit Plan;
- External penetration testing engagements shall include DNS security assessment at least [annually];
- Compliance findings shall be tracked in the Organisation's risk register with defined remediation owners and target dates.

**DNS Security Compliance Checklist:**

| Control Reference | Control Description | Last Assessment Date | Finding | Remediation Due | Status |
|---|---|---|---|---|---|
| DNS-01 | DNS server hardening | [Date] | [Compliant / Partial / Non-Compliant] | [Date if applicable] | [Open/Closed] |
| DNS-02 | Open recursion prevention | [Date] | | | |
| DNS-03 | Zone transfer restriction | [Date] | | | |
| DNS-04 | TSIG zone transfer authentication | [Date] | | | |
| DNS-05 | DNSSEC signing for all zones | [Date] | | | |
| DNS-06 | DNSSEC validation at resolvers | [Date] | | | |
| DNS-07 | DNSSEC key rollover | [Date] | | | |
| DNS-08 | DNS firewall / RPZ | [Date] | | | |
| DNS-09 | Cache poisoning prevention | [Date] | | | |
| DNS-10 | DNS DDoS mitigation | [Date] | | | |
| DNS-11 | DNS tunnelling detection | [Date] | | | |
| DNS-12 | DNS query logging and retention | [Date] | | | |
| DNS-13 | Anomaly detection and alerting | [Date] | | | |
| DNS-14 | DNS incident response | [Date] | | | |
| DNS-15 | Third-party DNS assessment | [Date] | | | |
| DNS-16 | DNS change management | [Date] | | | |
| DNS-17 | DNS availability and redundancy | [Date] | | | |

### 12.2 Non-Compliance and Enforcement

*Describe the consequences and process for addressing non-compliance.*

Non-compliance with this standard shall be managed as follows:

| Non-Compliance Severity | Definition | Response |
|---|---|---|
| **Minor** | Isolated, low-risk deviation with no material security impact | Documented finding; remediation within [30 days]; tracked in risk register |
| **Moderate** | Deviation with potential to increase security risk; compensating control absent | Risk acceptance by CISO required; remediation within [60 days]; escalated to management |
| **Major** | Significant deviation exposing the Organisation to material risk of DNS attack or regulatory breach | Immediate escalation to CISO and CTO; remediation plan within [5 business days]; potential disciplinary action |
| **Critical** | Wilful or repeated non-compliance or non-compliance contributing to a confirmed security incident | Escalation to HR, Legal and senior management; formal investigation; potential regulatory notification |

- Personnel found to have deliberately circumvented DNS security controls shall be subject to disciplinary proceedings under [Organization Name]'s Code of Conduct;
- Systemic non-compliance identified by Internal Audit shall be reported to the Audit Committee and Board Risk Committee.

### 12.3 Regulatory Reporting

- The CISO shall ensure DNS security compliance status is included in the Organisation's periodic technology risk reports to BNM, as required by the RMiT Policy Document;
- DNS security-related regulatory findings shall be tracked and remediated with priority, with status reported to the Board Risk Committee at each meeting.

---

## 13. Review and Approval History

### 13.1 Review Schedule

*Document the mandatory review triggers and scheduled review dates.*

This document shall be reviewed under the following conditions:

| Review Trigger | Description |
|---|---|
| **Per-event review** | Following a significant DNS security incident, material change to DNS architecture, or new BNM regulatory guidance |
| **Scheduled quarterly review** | DNS security metrics, threat landscape, and control effectiveness reviewed by Network Operations Manager and CISO |
| **Full document review** | Annual full review and update of this standard |
| **Ad hoc review** | Following significant changes to DNS technology landscape, vendor changes, or identified material gaps |

### 13.2 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name], Network Operations Manager | [Reviewer Name], CISO | Initial release |
| [1.1] | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Reviewer Name] | [Description of major revision] |
| [Add rows as required] | | | | |

### 13.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Owner – Network Operations Manager | [Name] | [Signature] | [Date] |
| Reviewer – CISO / Head of Information Security | [Name] | [Signature] | [Date] |
| Reviewer – Risk & Compliance | [Name] | [Signature] | [Date] |
| Approver – Chief Technology Officer | [Name] | [Signature] | [Date] |
| Ratified By – [Board / Risk Committee / IT Steering Committee] | [Name] | [Signature] | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Description |
|---|---|
| BNM RMiT – Clause 10.42 | DNS security controls – primary regulatory basis for this standard |
| BNM RMiT – Clause 10.1–10.5 | General network security principles |
| BNM RMiT – Clause 11 | Cyber resilience requirements |
| BNM RMiT – Clause 13 | Technology service provider management (relevant to third-party DNS) |
| Personal Data Protection Act 2010 (PDPA) | Sections 9, 10 – Security standards for personal data |
| NACSA National Cyber Security Policy | Critical information infrastructure protection guidance |
| BNM Incident Reporting Requirements | Cyber incident notification obligations |

### 14.2 Technical Standards and Frameworks

| Reference | Description |
|---|---|
| RFC 4033 / 4034 / 4035 | DNSSEC – DNS Security Extensions |
| RFC 6781 | DNSSEC Operational Practices |
| RFC 9276 | Guidance for NSEC3 parameter settings |
| RFC 5936 | DNS Zone Transfer Protocol (AXFR) |
| RFC 2845 | Secret Key Transaction Authentication for DNS (TSIG) |
| RFC 8767 | Serving Stale Data to Improve DNS Resiliency |
| RFC 8806 | Running a Root Server Local to a Resolver |
| CIS Benchmark – DNS | Center for Internet Security DNS hardening benchmark |
| NIST SP 800-81-2 | Secure Domain Name System (DNS) Deployment Guide |
| ISO/IEC 27001:2022 – Annex A 8.20–8.22 | Network security controls |
| OWASP DNS Security Cheat Sheet | DNS security implementation guidance |

### 14.3 Internal Policy References

| Document Title | Document ID | Description |
|---|---|---|
| Information Security Policy | [Policy ID] | Parent information security policy |
| Network Security Policy | [Policy ID] | Network security requirements |
| Vulnerability Management Policy | [Policy ID] | Patching and vulnerability remediation |
| Incident Response Policy | [Policy ID] | Security incident management |
| Change Management Policy | [Policy ID] | IT change management process |
| Third-Party Risk Management Policy | [Policy ID] | Vendor and supplier risk management |
| Cryptographic Key Management Policy | [Policy ID] | Key lifecycle management |
| Business Continuity and DR Plan | [BCP/DRP ID] | Availability and recovery requirements |
| [Additional Document] | [ID] | [Description] |

---

## 15. Appendices

### Appendix A – DNS Infrastructure Inventory

*Maintain a current inventory of all DNS servers, resolvers, and zones under the scope of this standard. The live inventory is maintained in [CMDB / IPAM System / reference document]. The table below is a template extract.*

**DNS Server Inventory:**

| Server Name | FQDN | IP Address | Role | OS / Software Version | Location / Environment | Owner | Last Hardening Review | Status |
|---|---|---|---|---|---|---|---|---|
| [DNS-PROD-01] | [dns1.domain.com] | [10.x.x.x] | Authoritative (Primary) | [BIND 9.18] | [Production – DC1] | NOC | [Date] | [Active] |
| [DNS-PROD-02] | [dns2.domain.com] | [10.x.x.x] | Authoritative (Secondary) | [BIND 9.18] | [Production – DC2] | NOC | [Date] | [Active] |
| [DNS-INT-01] | [resolver1.internal] | [10.x.x.x] | Recursive Resolver | [Unbound 1.17] | [Internal – Segment A] | NOC | [Date] | [Active] |
| [Add rows as required] | | | | | | | | |

**DNS Zone Register:**

| Zone Name | Type | Authoritative Server(s) | DNSSEC Enabled | DNSSEC Algorithm | Last Audit |
|---|---|---|---|---|---|
| [domain.com] | External authoritative | [DNS-PROD-01, DNS-PROD-02] | Yes | Algorithm 13 | [Date] |
| [internal.domain] | Internal authoritative | [DNS-INT-01] | Yes | Algorithm 13 | [Date] |
| [Add rows as required] | | | | | |

---

### Appendix B – DNS Server Hardening Checklist

*Use this checklist when deploying or reviewing DNS server configurations. Each item must be verified and signed off.*

**General OS Hardening:**

| # | Checklist Item | Status | Verified By | Date |
|---|---|---|---|---|
| B-01 | Operating system is at vendor-supported version and fully patched | [ ] Pass [ ] Fail [ ] N/A | | |
| B-02 | All non-essential OS services disabled | [ ] Pass [ ] Fail [ ] N/A | | |
| B-03 | Host-based firewall enabled and configured | [ ] Pass [ ] Fail [ ] N/A | | |
| B-04 | MFA enforced for administrative access | [ ] Pass [ ] Fail [ ] N/A | | |
| B-05 | Privileged access logged and forwarded to SIEM | [ ] Pass [ ] Fail [ ] N/A | | |
| B-06 | Root/Administrator direct login disabled | [ ] Pass [ ] Fail [ ] N/A | | |

**DNS Software Hardening:**

| # | Checklist Item | Status | Verified By | Date |
|---|---|---|---|---|
| B-07 | DNS software at supported version | [ ] Pass [ ] Fail [ ] N/A | | |
| B-08 | Version disclosure disabled | [ ] Pass [ ] Fail [ ] N/A | | |
| B-09 | Recursive queries restricted to authorised IP ranges | [ ] Pass [ ] Fail [ ] N/A | | |
| B-10 | Zone transfers restricted to authorised secondaries and TSIG-authenticated | [ ] Pass [ ] Fail [ ] N/A | | |
| B-11 | Response Rate Limiting (RRL) configured | [ ] Pass [ ] Fail [ ] N/A | | |
| B-12 | CHAOS class queries disabled | [ ] Pass [ ] Fail [ ] N/A | | |
| B-13 | DNS listening restricted to required interfaces | [ ] Pass [ ] Fail [ ] N/A | | |
| B-14 | Query logging enabled and forwarded to SIEM | [ ] Pass [ ] Fail [ ] N/A | | |
| B-15 | DNSSEC configured per Section 7 | [ ] Pass [ ] Fail [ ] N/A | | |
| B-16 | DNS firewall / RPZ configured per Section 8.1 | [ ] Pass [ ] Fail [ ] N/A | | |
| B-17 | Source port randomisation verified | [ ] Pass [ ] Fail [ ] N/A | | |

**Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Performed by | [Name] | | [Date] |
| Reviewed by | [Network Operations Manager] | | [Date] |

---

### Appendix C – DNS Incident Escalation Matrix

*Quick-reference escalation contacts for DNS security incidents.*

| Escalation Level | Role | Name | Primary Contact | Secondary Contact | Hours |
|---|---|---|---|---|---|
| L1 | NOC Engineer (On-call) | [Name] | [Phone / Email] | [Phone / Email] | 24x7 |
| L2 | Network Operations Manager | [Name] | [Phone / Email] | [Phone / Email] | Business hours; on-call for P1/P2 |
| L3 | SOC Lead | [Name] | [Phone / Email] | [Phone / Email] | Business hours; on-call for P1/P2 |
| L4 | CISO | [Name] | [Phone / Email] | [Phone / Email] | P1/P2 only |
| L5 | CTO | [Name] | [Phone / Email] | [Phone / Email] | P1 only |
| External | Domain Registrar Security Team | [Registrar Name] | [Contact Details] | — | [Hours] |
| External | DNS Hosting Provider NOC | [Provider Name] | [Contact Details] | — | 24x7 |
| External | BNM Reporting | BNM Supervision | [BNM Contact] | — | Per RMiT requirements |
| External | NACSA | National Cyber Coordination & Command Centre (NC4) | [NC4 Contact] | — | Per NACSA requirements |

---

### Appendix D – DNS Security Exception Register and Request Form

*Maintain the live exception register here or reference the location of the current register.*

**D.1 DNS Security Exception Request Form**

> *Complete this form and submit to the Network Operations Manager to initiate the exception approval process (Section 11.2).*

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-assigned / EXC-DNS-XXX] |
| **Date of Request** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Role / Department** | [Role / Department] |
| **Control Reference(s)** | [e.g., DNS-05] |
| **Control Description** | [Describe the specific control from which exception is sought] |
| **Nature of Deviation** | [Describe exactly what will not be implemented or how implementation differs from the standard] |
| **Technical / Operational Justification** | [Explain why the control cannot be implemented as specified] |
| **Risk Assessment** | [Assess the risk of the exception – what threats does the non-implementation expose the Organisation to?] |
| **Compensating Controls** | [Describe what alternative controls will be in place to mitigate the risk] |
| **Proposed Exception Duration** | [Start Date] to [End Date] – maximum [12 months] |
| **Remediation Plan** | [Describe the plan to achieve full compliance, with target date] |
| **Impact if Exception Not Granted** | [Describe operational or service impact] |
| **Regulatory Impact Assessment** | [Completed by Risk & Compliance – does this exception create a BNM RMiT compliance gap?] |

**D.2 DNS Security Exception Register**

| Exception ID | Control Ref | Description | Requestor | Date Raised | Risk Rating | Compensating Control | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| EXC-DNS-001 | [DNS-XX] | [Exception description] | [Name] | [Date] | [H/M/L] | [Description] | [CISO] | [Date] | [Date] | [Active/Expired/Closed] |
| [Add rows as required] | | | | | | | | | | |

---

### Appendix E – DNSSEC Key Rollover Log

*Maintain a log of all DNSSEC key rollovers to provide an auditable record of key lifecycle management.*

| Log ID | Zone Name | Key Type | Old Key Tag | New Key Tag | Algorithm | Rollover Type | Initiated By | Start Date | Completion Date | Reason | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| KR-001 | [domain.com] | ZSK | [Old Tag] | [New Tag] | Alg 13 | Scheduled | [Name] | [Date] | [Date] | Scheduled quarterly | Successful |
| KR-002 | [domain.com] | KSK | [Old Tag] | [New Tag] | Alg 13 | Annual | [Name] | [Date] | [Date] | Annual rotation | DS updated at registrar |
| [Add rows as required] | | | | | | | | | | | |

---

### Appendix F – DNS Security Assessment Template

*Use this template to document the results of periodic DNS security assessments.*

**Assessment Details:**

| Field | Details |
|---|---|
| **Assessment ID** | [ASSESS-DNS-YYYY-NN] |
| **Assessment Date** | [Date] |
| **Assessment Type** | [Self-Assessment / Internal Audit / External Penetration Test] |
| **Assessor(s)** | [Name(s) / Organisation] |
| **Scope** | [Describe systems and zones assessed] |
| **Assessment Period** | [Start Date] – [End Date] |

**Summary of Findings:**

| Finding ID | Control Reference | Severity | Finding Description | Recommended Action | Responsible Owner | Target Remediation Date | Status |
|---|---|---|---|---|---|---|---|
| FIND-001 | [DNS-XX] | [Critical/High/Medium/Low] | [Description of finding] | [Recommended remediation] | [Name/Team] | [Date] | [Open/In Progress/Closed] |
| [Add rows as required] | | | | | | | |

**Overall Assessment Outcome:**

| Metric | Result |
|---|---|
| Total controls assessed | [N] |
| Fully compliant | [N] ([%]) |
| Partially compliant | [N] ([%]) |
| Non-compliant | [N] ([%]) |
| Not applicable | [N] ([%]) |
| **Overall compliance rating** | **[Compliant / Partially Compliant / Non-Compliant]** |

**Assessor Signature:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Lead Assessor | [Name] | | [Date] |
| Reviewed By – Network Operations Manager | [Name] | | [Date] |
| Accepted By – CISO | [Name] | | [Date] |

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. Printed copies are uncontrolled. Always refer to the document management system for the current approved version. For queries regarding this document, contact the Document Owner: Network Operations Manager, [Organization Name] ([Contact Email]).