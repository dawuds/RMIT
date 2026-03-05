# DNS Security Configuration

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Operations Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Asset and Item Identification](#2-asset-and-item-identification)
3. [Classification and Categorisation](#3-classification-and-categorisation)
4. [Owner and Custodian](#4-owner-and-custodian)
5. [Status and Lifecycle Stage](#5-status-and-lifecycle-stage)
6. [Last Review Date](#6-last-review-date)
7. [DNS Security Configuration Evidence](#7-dns-security-configuration-evidence)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as configuration evidence for DNS (Domain Name System) security controls implemented by [Organization Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document. It provides auditable records of DNSSEC deployment, DNS query and response logging, and preventive controls against DNS-based attacks including DNS hijacking, cache poisoning, DNS tunnelling, and distributed denial-of-service (DDoS) attacks targeting DNS infrastructure.

This document supports the organization's compliance obligations under BNM RMiT Clause 10.42, demonstrating that DNS security configurations are appropriately implemented, monitored, and maintained to protect the integrity and availability of DNS resolution services.

### 1.2 Scope

This document applies to:

- All DNS servers (authoritative, recursive, and forwarders) operated by or on behalf of [Organization Name]
- DNS security controls deployed across production, staging, and disaster recovery environments
- Third-party DNS service providers and managed DNS platforms used by [Organization Name]
- All internal and external DNS zones owned and administered by [Organization Name]

### 1.3 Regulatory Context

| Regulation | Reference | Requirement Summary |
|---|---|---|
| BNM RMiT | Clause 10.42 | DNS security controls including DNSSEC, logging, and DNS attack prevention |
| BNM RMiT | [Additional Clauses] | [Additional Requirement Summary] |
| PDPA 2010 | [Section Reference] | Personal data protection considerations for DNS log data |
| [Other Framework] | [Reference] | [Requirement Summary] |

---

## 2. Asset and Item Identification

*List all DNS infrastructure components in scope for this configuration evidence record. Include all physical and virtual DNS servers, DNS appliances, and third-party DNS services. Each entry should have a unique asset identifier traceable to the organization's asset register.*

### 2.1 DNS Infrastructure Inventory

| Asset ID | Hostname / FQDN | IP Address | Asset Type | Environment | Location / Data Centre |
|---|---|---|---|---|---|
| [ASSET-DNS-001] | [dns-primary.domain.com] | [x.x.x.x] | Authoritative DNS | Production | [DC Name / Cloud Region] |
| [ASSET-DNS-002] | [dns-secondary.domain.com] | [x.x.x.x] | Authoritative DNS | Production | [DC Name / Cloud Region] |
| [ASSET-DNS-003] | [dns-recursive.domain.com] | [x.x.x.x] | Recursive Resolver | Production | [DC Name / Cloud Region] |
| [ASSET-DNS-004] | [dns-forwarder.domain.com] | [x.x.x.x] | DNS Forwarder | Production | [DC Name / Cloud Region] |
| [ASSET-DNS-005] | [Managed DNS Provider] | N/A | Third-Party SaaS DNS | Production | [Provider Name / Region] |
| [ASSET-DNS-006] | [dns-primary.domain.com] | [x.x.x.x] | Authoritative DNS | DR | [DC Name / Cloud Region] |

### 2.2 DNS Zones in Scope

| Zone Name | Zone Type | Hosting Platform | Registrar | Expiry Date |
|---|---|---|---|---|
| [domain.com] | External / Public | [Platform Name] | [Registrar Name] | [YYYY-MM-DD] |
| [internal.domain.com] | Internal / Private | [Platform Name] | N/A | N/A |
| [subdomain.domain.com] | External / Delegated | [Platform Name] | [Registrar Name] | [YYYY-MM-DD] |

### 2.3 DNS Software and Versions

| Asset ID | Software | Version | Patch Level | Last Patched |
|---|---|---|---|---|
| [ASSET-DNS-001] | [BIND / Unbound / Windows DNS / Other] | [x.x.x] | [Patch ID] | [YYYY-MM-DD] |
| [ASSET-DNS-002] | [BIND / Unbound / Windows DNS / Other] | [x.x.x] | [Patch ID] | [YYYY-MM-DD] |

---

## 3. Classification and Categorisation

*Classify each DNS asset and zone according to the organization's information classification policy and criticality tiering. This section supports risk-based prioritisation of security controls and should align with BNM RMiT requirements for critical system identification.*

### 3.1 Information Classification

| Asset / Zone | Data Sensitivity | Business Criticality | Regulatory Sensitivity | Overall Classification |
|---|---|---|---|---|
| [dns-primary.domain.com] | [Confidential / Internal / Public] | [Critical / High / Medium / Low] | [Yes / No] | [Confidential / Restricted / Internal / Public] |
| [domain.com Zone] | [Confidential / Internal / Public] | [Critical / High / Medium / Low] | [Yes / No] | [Confidential / Restricted / Internal / Public] |
| [DNS Log Data] | Confidential | High | Yes — PDPA Applicable | Confidential |

### 3.2 System Criticality Classification

*Indicate whether DNS infrastructure is classified as a Critical Information Infrastructure (CII) or critical system under BNM RMiT, NACSA, or internal policy.*

| Classification Criterion | Status | Justification |
|---|---|---|
| BNM RMiT Critical System | [Yes / No / Under Assessment] | [Justification] |
| NACSA CII Designation | [Yes / No / Under Assessment] | [Justification] |
| Internal Tier Classification | [Tier 1 / Tier 2 / Tier 3] | [Justification] |
| Single Point of Failure Risk | [Yes / No / Mitigated] | [Justification] |

### 3.3 DNS Attack Surface Categorisation

| Threat Category | Applicability | Risk Level | Mitigating Control Reference |
|---|---|---|---|
| DNS Cache Poisoning | [Applicable / Not Applicable] | [Critical / High / Medium / Low] | [Control ID / Section Reference] |
| DNS Hijacking | [Applicable / Not Applicable] | [Critical / High / Medium / Low] | [Control ID / Section Reference] |
| DNS Tunnelling (Data Exfiltration) | [Applicable / Not Applicable] | [Critical / High / Medium / Low] | [Control ID / Section Reference] |
| DNS DDoS / Amplification Attack | [Applicable / Not Applicable] | [Critical / High / Medium / Low] | [Control ID / Section Reference] |
| DNS Zone Transfer Abuse | [Applicable / Not Applicable] | [Critical / High / Medium / Low] | [Control ID / Section Reference] |
| Typosquatting / Domain Spoofing | [Applicable / Not Applicable] | [Critical / High / Medium / Low] | [Control ID / Section Reference] |

---

## 4. Owner and Custodian

*Define clear ownership and custodianship for all DNS assets. Ownership implies accountability for security posture and compliance, while custodianship implies day-to-day operational responsibility. Both roles must be named individuals or designated positions.*

### 4.1 Asset Ownership

| Asset / Zone | Business Owner | Technical Owner | Custodian (Operational) | Third-Party Contact |
|---|---|---|---|---|
| DNS Infrastructure (All) | [Name / Title] | Network Operations Manager | [Name / Title] | [Vendor Name / Contact] |
| [domain.com Zone] | [Name / Title] | [Name / Title] | [Name / Title] | [Registrar Contact] |
| [internal.domain.com Zone] | [Name / Title] | [Name / Title] | [Name / Title] | N/A |
| DNS Log Data | [Name / Title — CISO or equivalent] | [Name / Title] | [Name / Title] | N/A |

### 4.2 Escalation and Contact Matrix

| Role | Name | Contact | Escalation Trigger |
|---|---|---|---|
| Network Operations Manager | [Name] | [Email / Phone] | Primary escalation for all DNS incidents |
| Chief Information Security Officer (CISO) | [Name] | [Email / Phone] | Confirmed DNS attack or data breach |
| Domain Registrar Account Manager | [Name / Team] | [Email / Phone] | Domain hijacking, unauthorized registrar change |
| Managed DNS Provider Support | [Team Name] | [Email / Phone / Ticket URL] | DNS service outage or provider-side anomaly |
| BNM Liaison (if CII) | [Name / Title] | [Email / Phone] | Mandatory reporting threshold breached |

---

## 5. Status and Lifecycle Stage

*Document the current operational status of each DNS asset and its position in the asset lifecycle. This section supports decommissioning planning and ensures that legacy DNS infrastructure does not persist with inadequate security controls.*

### 5.1 Operational Status

| Asset ID | Asset Name | Current Status | Lifecycle Stage | Planned Action | Target Date |
|---|---|---|---|---|---|
| [ASSET-DNS-001] | [Hostname] | [Active / Standby / Decommissioning / Decommissioned] | [Design / Deployment / Operations / End-of-Life] | [No action / Upgrade / Migrate / Decommission] | [YYYY-MM-DD] |
| [ASSET-DNS-002] | [Hostname] | [Active / Standby / Decommissioning / Decommissioned] | [Design / Deployment / Operations / End-of-Life] | [No action / Upgrade / Migrate / Decommission] | [YYYY-MM-DD] |

### 5.2 End-of-Life and Support Status

| Asset ID | Vendor Support Status | Extended Support Available | EOL Date | Migration / Replacement Plan |
|---|---|---|---|---|
| [ASSET-DNS-001] | [Supported / Extended Support / End-of-Life] | [Yes / No] | [YYYY-MM-DD / N/A] | [Plan Reference or N/A] |
| [ASSET-DNS-002] | [Supported / Extended Support / End-of-Life] | [Yes / No] | [YYYY-MM-DD / N/A] | [Plan Reference or N/A] |

### 5.3 Change History Summary

*Reference the organization's change management system for full change records. List significant configuration changes below.*

| Change Reference | Date | Description | Approved By | Impact |
|---|---|---|---|---|
| [CHG-XXXX] | [YYYY-MM-DD] | [Description of change] | [Approver Name / Title] | [High / Medium / Low] |
| [CHG-XXXX] | [YYYY-MM-DD] | [Description of change] | [Approver Name / Title] | [High / Medium / Low] |

---

## 6. Last Review Date

*Record all formal reviews of DNS security configuration, including periodic scheduled reviews, event-triggered reviews, and audit-initiated reviews. Continuous monitoring activity should be referenced here but detailed in Section 7.*

### 6.1 Review History

| Review Cycle | Review Date | Reviewed By | Review Type | Outcome | Next Review Date |
|---|---|---|---|---|---|
| Q[X] [YYYY] | [YYYY-MM-DD] | [Name / Title] | Scheduled Quarterly Review | [No findings / [N] findings raised — see Appendix] | [YYYY-MM-DD] |
| [Ad-Hoc] | [YYYY-MM-DD] | [Name / Title] | Post-Incident Review | [No findings / [N] findings raised] | N/A |
| [Ad-Hoc] | [YYYY-MM-DD] | [Name / Title] | Internal Audit | [No findings / [N] findings raised] | N/A |
| [Annual] | [YYYY-MM-DD] | [Name / Title] | Annual Security Assessment | [No findings / [N] findings raised] | [YYYY-MM-DD] |

### 6.2 Continuous Monitoring Summary

*Summarise ongoing automated monitoring activities. Detailed monitoring evidence should be attached as appendices or referenced from the Security Operations Centre (SOC) log archive.*

| Monitoring Control | Tool / Platform | Monitoring Frequency | Alert Threshold | Last Alert Date | Status |
|---|---|---|---|---|---|
| DNS Query Volume Anomaly Detection | [SIEM / Tool Name] | Real-time | [Threshold — e.g., >10,000 queries/min] | [YYYY-MM-DD / None] | [Active / Inactive] |
| DNSSEC Validation Failure Alerting | [Tool Name] | Real-time | Any DNSSEC validation failure | [YYYY-MM-DD / None] | [Active / Inactive] |
| Unauthorised Zone Transfer Attempt | [Tool Name] | Real-time | Any unapproved AXFR/IXFR request | [YYYY-MM-DD / None] | [Active / Inactive] |
| DNS Log Integrity Monitoring | [SIEM / Tool Name] | Real-time | Log gap or tampering detected | [YYYY-MM-DD / None] | [Active / Inactive] |
| Domain Registration Monitoring | [Tool Name] | Daily | New registrations of similar domains | [YYYY-MM-DD / None] | [Active / Inactive] |

---

## 7. DNS Security Configuration Evidence

*This is the primary technical evidence section. Each subsection should include configuration screenshots, exported configuration files (redacted of sensitive values where required), and test results. All evidence should be dated and version-stamped.*

### 7.1 DNSSEC Implementation

#### 7.1.1 DNSSEC Status by Zone

| Zone Name | DNSSEC Enabled | Algorithm | Key Tag (KSK) | DS Record Published at Registrar | Last Key Rollover | Next Key Rollover |
|---|---|---|---|---|---|---|
| [domain.com] | [Yes / No] | [RSASHA256 / ECDSAP256SHA256 / Other] | [Key Tag Value] | [Yes / No / Pending] | [YYYY-MM-DD] | [YYYY-MM-DD] |
| [subdomain.domain.com] | [Yes / No] | [Algorithm] | [Key Tag Value] | [Yes / No / N/A] | [YYYY-MM-DD] | [YYYY-MM-DD] |

#### 7.1.2 DNSSEC Key Management

*Document the key management lifecycle for DNSSEC signing keys. Include key generation procedures, storage controls, and rollover schedules.*

- **Key Signing Key (KSK) Algorithm:** [e.g., ECDSAP256SHA256 / RSA-2048]
- **Zone Signing Key (ZSK) Algorithm:** [e.g., ECDSAP256SHA256 / RSA-2048]
- **KSK Rollover Frequency:** [e.g., Annual]
- **ZSK Rollover Frequency:** [e.g., Monthly / Quarterly]
- **Key Storage Location:** [e.g., HSM, Encrypted Vault — specify platform]
- **Key Generation Procedure Reference:** [Document ID / Procedure Name]
- **Evidence Reference:** [Appendix A — DNSSEC Configuration Screenshots]

#### 7.1.3 DNSSEC Validation Configuration

| DNS Resolver | DNSSEC Validation Enabled | Validation Mode | Negative Trust Anchors | Last Validated |
|---|---|---|---|---|
| [Hostname / IP] | [Yes / No] | [Full Validation / Opportunistic] | [None / List if applicable] | [YYYY-MM-DD] |

### 7.2 DNS Logging Configuration

#### 7.2.1 Logging Scope and Configuration

*Detail what DNS events are logged, the log destination, retention period, and log integrity controls. DNS logs containing query data may be subject to PDPA obligations — confirm with the DPO.*

| Log Category | Logged | Log Destination | Retention Period | Log Integrity Control |
|---|---|---|---|---|
| All DNS Queries (Inbound) | [Yes / No] | [SIEM / Log Server / Path] | [e.g., 12 months] | [Hash / Immutable Storage / WORM] |
| All DNS Responses | [Yes / No] | [SIEM / Log Server / Path] | [e.g., 12 months] | [Hash / Immutable Storage / WORM] |
| DNSSEC Validation Events | [Yes / No] | [SIEM / Log Server / Path] | [e.g., 12 months] | [Hash / Immutable Storage / WORM] |
| Zone Transfer Requests | [Yes / No] | [SIEM / Log Server / Path] | [e.g., 12 months] | [Hash / Immutable Storage / WORM] |
| Dynamic DNS Updates | [Yes / No] | [SIEM / Log Server / Path] | [e.g., 12 months] | [Hash / Immutable Storage / WORM] |
| DNS Service Start / Stop Events | [Yes / No] | [SIEM / Log Server / Path] | [e.g., 12 months] | [Hash / Immutable Storage / WORM] |
| Configuration Change Events | [Yes / No] | [SIEM / Log Server / Path] | [e.g., 12 months] | [Hash / Immutable Storage / WORM] |
| Failed Authentication Attempts | [Yes / No] | [SIEM / Log Server / Path] | [e.g., 12 months] | [Hash / Immutable Storage / WORM] |

#### 7.2.2 Log Format and Standards

- **Log Format:** [e.g., Syslog RFC 5424 / CEF / JSON / BIND query log format]
- **Timestamp Format:** [e.g., UTC ISO 8601]
- **Log Forwarding Protocol:** [e.g., Syslog-TLS / Encrypted Syslog / Agent-Based]
- **SIEM Integration:** [Yes / No — Platform Name if Yes]
- **Log Backup Procedure Reference:** [Document ID / Procedure Name]

### 7.3 DNS Attack Prevention Controls

#### 7.3.1 DNS Cache Poisoning Prevention

| Control | Implemented | Configuration Detail | Evidence Reference |
|---|---|---|---|
| Source Port Randomisation | [Yes / No] | [e.g., Ports 1024–65535 randomised] | [Appendix Reference] |
| Query ID Randomisation | [Yes / No] | [Built-in / Explicit configuration] | [Appendix Reference] |
| 0x20 Bit Encoding (Case Randomisation) | [Yes / No / N/A] | [Configuration detail] | [Appendix Reference] |
| Response Rate Limiting (RRL) | [Yes / No] | [e.g., 10 responses/sec per client] | [Appendix Reference] |
| DNSSEC Validation (Anti-Poisoning) | [Yes / No] | [See Section 7.1] | [Section 7.1] |
| Negative Caching (NXDOMAIN) | [Yes / No] | [TTL configuration] | [Appendix Reference] |

#### 7.3.2 DNS Hijacking Prevention

| Control | Implemented | Configuration Detail | Evidence Reference |
|---|---|---|---|
| Registry Lock / Registrar Lock Enabled | [Yes / No] | [Registrar Name, Lock Type] | [Appendix Reference] |
| Multi-Factor Authentication on Registrar Account | [Yes / No] | [MFA Method] | [Appendix Reference] |
| DNSSEC DS Record Published (Chain of Trust) | [Yes / No] | [See Section 7.1] | [Section 7.1] |
| DNS-over-HTTPS (DoH) or DNS-over-TLS (DoT) | [Yes / No / Partial] | [Implementation scope] | [Appendix Reference] |
| DMARC / SPF / DKIM Records Configured | [Yes / No] | [Record details or reference] | [Appendix Reference] |
| DNS CAA Records Configured | [Yes / No] | [Authorised CA list] | [Appendix Reference] |

#### 7.3.3 DNS Tunnelling Prevention

| Control | Implemented | Configuration Detail | Evidence Reference |
|---|---|---|---|
| DNS Tunnelling Detection (Behavioral Analysis) | [Yes / No] | [Tool Name / SIEM Rule Reference] | [Appendix Reference] |
| Maximum DNS Payload Size Enforcement | [Yes / No] | [e.g., 512 bytes UDP / 4096 bytes EDNS] | [Appendix Reference] |
| Suspicious Domain Blocking (Threat Intel Feed) | [Yes / No] | [Feed Source / Update Frequency] | [Appendix Reference] |
| Recursive DNS Restrictions (Internal Only) | [Yes / No] | [Access control configuration] | [Appendix Reference] |
| DNS Exfiltration Detection Rules (SIEM) | [Yes / No] | [Rule IDs / References] | [Appendix Reference] |

#### 7.3.4 DNS DDoS and Amplification Attack Prevention

| Control | Implemented | Configuration Detail | Evidence Reference |
|---|---|---|---|
| Response Rate Limiting (RRL) | [Yes / No] | [e.g., 50 responses/sec, 10 nxdomain/sec] | [Appendix Reference] |
| Recursive Query Restrictions (ACL) | [Yes / No] | [Allowed source IP ranges] | [Appendix Reference] |
| ANY Query Type Restriction / Redirection | [Yes / No] | [e.g., ANY returns HINFO or truncated] | [Appendix Reference] |
| DNS Firewall / RPZ (Response Policy Zone) | [Yes / No] | [Policy zone details / Feed source] | [Appendix Reference] |
| Upstream DDoS Mitigation Service | [Yes / No] | [Provider Name, Contract Reference] | [Appendix Reference] |
| Anycast DNS Deployment | [Yes / No] | [Provider / Configuration details] | [Appendix Reference] |
| Connection Rate Limiting (Firewall) | [Yes / No] | [Firewall rule reference] | [Appendix Reference] |

#### 7.3.5 DNS Zone Transfer Controls

| Control | Implemented | Configuration Detail | Evidence Reference |
|---|---|---|---|
| Zone Transfer Restricted by ACL | [Yes / No] | [Permitted secondary IPs listed] | [Appendix Reference] |
| TSIG Authentication for Zone Transfers | [Yes / No] | [Algorithm, Key name] | [Appendix Reference] |
| Zone Transfer over TLS (XFR-over-TLS) | [Yes / No / Planned] | [Configuration detail] | [Appendix Reference] |
| Unauthorised AXFR/IXFR Alerting | [Yes / No] | [Alerting tool / SIEM rule] | [Appendix Reference] |

### 7.4 Evidence Summary

*List all configuration screenshots, exported files, and test results attached as appendices to this document.*

| Evidence ID | Description | Date Captured | Captured By | Appendix Reference |
|---|---|---|---|---|
| [EV-DNS-001] | [DNSSEC status output — dig +dnssec domain.com] | [YYYY-MM-DD] | [Name / System] | Appendix A |
| [EV-DNS-002] | [DNS server configuration file (redacted)] | [YYYY-MM-DD] | [Name / System] | Appendix B |
| [EV-DNS-003] | [SIEM DNS alerting rules screenshot] | [YYYY-MM-DD] | [Name / System] | Appendix C |
| [EV-DNS-004] | [DNS RRL configuration output] | [YYYY-MM-DD] | [Name / System] | Appendix D |
| [EV-DNS-005] | [Registrar account MFA configuration screenshot] | [YYYY-MM-DD] | [Name / System] | Appendix E |
| [EV-DNS-006] | [Quarterly review checklist — Q[X] [YYYY]] | [YYYY-MM-DD] | [Name / System] | Appendix F |

---

## 8. Roles and Responsibilities

*The RACI matrix below defines accountability for DNS security configuration activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Network Ops Manager | System Administrator | CISO / InfoSec Team | IT Audit | Data Protection Officer | Senior Management |
|---|---|---|---|---|---|---|
| DNS security policy definition | C | I | A/R | C | C | I |
| DNS configuration implementation | A | R | C | I | I | I |
| DNSSEC key generation and management | A | R | C | I | I | I |
| DNS log management and retention | A | R | C | I | C | I |
| Continuous DNS monitoring | A | R | R | I | I | I |
| DNS incident response | A | R | R | I | C | I |
| Quarterly DNS security review | A | R | C | I | I | I |
| Third-party DNS provider management | A | R | C | I | I | I |
| BNM RMiT compliance reporting | C | I | A/R | R | C | I |
| DNS change management approval | A | C | C | I | I | I |
| Evidence collection and documentation | R | R | C | A | I | I |
| Annual security assessment | C | C | R | A | C | I |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name / Title] | Initial document creation |
| [1.1] | [YYYY-MM-DD] | [Author Name / Title] | [Description of changes] |
| [2.0] | [YYYY-MM-DD] | [Author Name / Title] | [Description of changes] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Operations Manager | [Name] | __________________ | [YYYY-MM-DD] |
| Chief Information Security Officer | [Name] | __________________ | [YYYY-MM-DD] |
| Chief Technology Officer / Head of IT | [Name] | __________________ | [YYYY-MM-DD] |
| [Additional Approver as required] | [Name] | __________________ | [YYYY-MM-DD] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.42 | DNS security controls — DNSSEC, logging, DNS attack prevention |
| BNM RMiT | [Other Clauses] | [Description] |
| PDPA 2010 | Section 40 | Security of personal data — applicable to DNS log data containing personal information |
| NACSA | [Reference] | Critical Information Infrastructure (CII) security obligations |
| RFC 4033, 4034, 4035 | IETF | DNS Security Extensions (DNSSEC) standards |
| RFC 5936 | IETF | DNS Zone Transfer Protocol (AXFR) |
| RFC 8484 | IETF | DNS Queries over HTTPS (DoH) |
| RFC 7858 | IETF | Specification for DNS over TLS (DoT) |
| NIST SP 800-81-2 | NIST | Secure Domain Name System (DNS) Deployment Guide |
| [Organization Name] DNS Security Policy | [Document ID] | Internal DNS security standards and requirements |
| [Organization Name] Information Security Policy | [Document ID] | Overarching information security policy |
| [Organization Name] Incident Response Procedure | [Document ID] | DNS incident escalation and response procedures |

---

## 11. Appendices

### Appendix A — DNSSEC Configuration Evidence

*Attach DNSSEC validation test outputs (e.g., `dig +dnssec`, `dig +sigchase`, DNSSEC analyser reports), DNSSEC status screenshots from the DNS management platform, and DS record publication confirmation from the domain registrar.*

[Attach evidence as per Section 7.4 — EV-DNS-001]

---

### Appendix B — DNS Server Configuration (Redacted)

*Attach exported DNS server configuration files with sensitive values (e.g., TSIG keys, internal IP ranges) appropriately redacted. Configurations should be dated and version-stamped. Full unredacted configurations should be stored in a restricted access repository.*

[Attach evidence as per Section 7.4 — EV-DNS-002]

---

### Appendix C — SIEM DNS Alerting Rules and Evidence

*Attach screenshots of SIEM alert rules configured for DNS threat detection, including rule IDs, descriptions, and severity thresholds. Include a sample alert log demonstrating rule function.*

[Attach evidence as per Section 7.4 — EV-DNS-003]

---

### Appendix D — Response Rate Limiting (RRL) Configuration

*Attach exported RRL configuration parameters and, where available, RRL statistics showing the feature is active and functioning.*

[Attach evidence as per Section 7.4 — EV-DNS-004]

---

### Appendix E — Registrar Account Security Controls

*Attach screenshots demonstrating MFA enablement on the domain registrar account, registry lock status, and authorised user access controls.*

[Attach evidence as per Section 7.4 — EV-DNS-005]

---

### Appendix F — Quarterly DNS Security Review Checklist

*Attach the completed quarterly review checklist, including all control checks performed, findings identified, and remediation actions agreed.*

[Attach evidence as per Section 7.4 — EV-DNS-006]

---

### Appendix G — Exception and Remediation Register

*List any controls identified as not implemented or partially implemented, along with the accepted risk rationale, risk owner, and remediation target date.*

| Exception ID | Control Reference | Description | Risk Level | Risk Acceptance By | Remediation Plan | Target Date |
|---|---|---|---|---|---|---|
| [EXC-DNS-001] | [Section / Control ID] | [Description of exception] | [High / Medium / Low] | [Name / Title] | [Remediation plan detail] | [YYYY-MM-DD] |

---

*This document is classified as **Confidential**. Reproduction, distribution, or disclosure outside of [Organization Name] without prior written approval from the document owner is prohibited. This document should be reviewed in its entirety before each quarterly review cycle and updated to reflect the current configuration state.*

*Document Owner: Network Operations Manager, [Organization Name]*
*For queries regarding this document, contact: [contact email / internal reference]*