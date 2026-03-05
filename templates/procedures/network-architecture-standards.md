# Network Architecture Standards

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

---

## 1. Purpose and Scope

This document establishes the Network Architecture Standards for [Organization Name] in accordance with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.36. It defines the minimum requirements for designing, implementing, and maintaining a secure network architecture based on defence-in-depth principles to protect the confidentiality, integrity, and availability of information assets and technology systems.

**Scope:** These standards apply to:

- All internal networks, segments, and zones managed or operated by [Organization Name]
- All third-party and outsourced network infrastructure connected to [Organization Name] systems
- All personnel responsible for the design, operation, administration, and audit of network infrastructure
- All environments, including production, staging, development, and disaster recovery

**Out of Scope:**

- [Define any exclusions, e.g., end-user device configuration covered under separate policy]

---

## 2. Roles and Responsibilities

*This section defines accountability for network architecture governance and operations. Assign RACI codes (R = Responsible, A = Accountable, C = Consulted, I = Informed) to each role for key activities.*

| Activity | Network Operations Manager | Chief Information Security Officer (CISO) | IT Infrastructure Team | Internal Audit | Risk Management |
|---|---|---|---|---|---|
| Define and maintain network architecture standards | A | C | R | I | C |
| Review and approve network architecture changes | A | C | R | I | I |
| Implement and configure network segments and firewalls | I | I | R | I | I |
| Conduct periodic firewall rule reviews | A | C | R | I | I |
| Monitor network security events and anomalies | I | A | R | I | I |
| Perform annual standards review | A | C | R | R | C |
| Report non-compliance to management | I | A | R | R | C |
| Approve exceptions to network architecture standards | A | R | I | I | C |

---

## 3. Policy Statements and Requirements

*Enumerate the mandatory requirements that govern network architecture at [Organization Name]. Each statement should be unambiguous and auditable. Add or remove statements as appropriate for your environment.*

### 3.1 General Principles

- All network infrastructure must be designed in accordance with **defence-in-depth** principles, employing multiple layers of security controls such that the compromise of a single layer does not result in a system-wide breach.
- Network architecture must support the **least-privilege** principle — traffic is denied by default and permitted only where a documented business justification exists.
- All network architecture designs must be formally documented, version-controlled, and approved by the Network Operations Manager prior to implementation.
- Production network environments must be logically and/or physically separated from non-production environments (development, staging, UAT).

### 3.2 Perimeter Security

- A **next-generation firewall (NGFW)** or equivalent control must be deployed at all network perimeters, including internet-facing boundaries and connections to third-party networks.
- All inbound and outbound internet traffic must traverse at least one firewall and one web application firewall (WAF) where applicable.
- Direct connections between the internet and internal networks are strictly prohibited; a **Demilitarized Zone (DMZ)** must be used for all externally accessible services.

### 3.3 Internal Network Controls

- Intrusion Detection/Prevention Systems (IDS/IPS) must be deployed to monitor traffic at critical network boundaries.
- Network access control (NAC) must be enforced for all devices connecting to the internal network.
- Administrative access to network devices must be restricted to a dedicated management network segment and require multi-factor authentication (MFA).
- Wireless networks must be segregated from wired internal networks and subject to equivalent security controls.

### 3.4 Encryption

- All sensitive data in transit across network segments must be encrypted using industry-standard protocols (minimum TLS 1.2; TLS 1.3 preferred).
- Deprecated protocols (SSL, TLS 1.0, TLS 1.1, Telnet, FTP) are prohibited on all network segments.

### 3.5 Remote Access

- Remote access to internal systems must be established exclusively through an approved VPN solution with MFA enforced.
- All remote access sessions must be logged and subject to monitoring.

---

## 4. Network Segmentation Zones

*Define the network zones relevant to [Organization Name]'s environment. The table below provides a standard zone model — adjust zone names, descriptions, and permitted traffic flows to reflect your actual architecture.*

### 4.1 Zone Definitions

| Zone | Name | Description | Typical Hosts |
|---|---|---|---|
| Z1 | Internet / Untrusted Zone | External, public internet — fully untrusted | External users, internet |
| Z2 | Demilitarized Zone (DMZ) | Hosts externally accessible services; isolated from internal network | Web servers, API gateways, mail relays |
| Z3 | Application Zone | Hosts internal application servers and middleware | Application servers, ESB, integration platforms |
| Z4 | Data Zone | Houses databases and sensitive data repositories; highest trust required | Database servers, data warehouses |
| Z5 | Management Zone | Dedicated out-of-band management network for infrastructure devices | Network devices, servers, hypervisors |
| Z6 | User / Workstation Zone | End-user computing environment | Desktops, laptops, printers |
| Z7 | Development / Test Zone | Non-production environments; isolated from production | Dev servers, test environments |
| Z8 | Third-Party / Partner Zone | Connections to external partners or outsourced service providers | [Partner/vendor systems] |

### 4.2 Permitted Traffic Matrix

*Document approved traffic flows between zones. All unlisted inter-zone traffic is denied by default.*

| Source Zone | Destination Zone | Permitted Protocols / Ports | Justification | Approved By |
|---|---|---|---|---|
| Z1 (Internet) | Z2 (DMZ) | HTTPS (443), SMTP (587) | Public-facing web and mail services | [Approver Name] |
| Z2 (DMZ) | Z3 (Application) | HTTPS (443), [Custom Port] | Application tier communication | [Approver Name] |
| Z3 (Application) | Z4 (Data) | [DB Port, e.g., 1433/5432] | Application-to-database queries | [Approver Name] |
| Z6 (User) | Z3 (Application) | HTTPS (443), RDP (3389) via VPN | Internal user access to applications | [Approver Name] |
| Z5 (Management) | All Zones | SSH (22), HTTPS (443), SNMP (161) | Infrastructure administration | [Approver Name] |
| [Source Zone] | [Destination Zone] | [Protocol/Port] | [Business justification] | [Approver Name] |

---

## 5. Firewall Rule Review Schedule

*Maintain a regular schedule for reviewing firewall rulesets to identify and remove obsolete, overly permissive, or unauthorized rules. Reviews must be documented and findings tracked to closure.*

### 5.1 Review Frequency

| Firewall / Boundary | Review Frequency | Responsible Party | Review Method |
|---|---|---|---|
| Internet perimeter firewall | Quarterly | Network Operations Team | Manual ruleset review + automated analysis |
| DMZ firewall(s) | Quarterly | Network Operations Team | Manual ruleset review |
| Internal zone firewalls | Semi-annually | Network Operations Team | Manual ruleset review |
| Third-party / partner firewall rules | Semi-annually | Network Operations Manager | Joint review with vendor |
| All firewalls (full audit) | Annually | Internal Audit (with Network Ops) | Independent audit against approved baseline |

### 5.2 Review Procedure

1. Export current firewall ruleset and compare against the approved baseline ruleset.
2. Identify all rules not referenced in the approved Traffic Matrix (Section 4.2).
3. Validate each rule against documented business justifications; escalate undocumented rules to the Network Operations Manager.
4. Remove or disable all rules deemed obsolete, redundant, or unauthorized.
5. Document findings in the **Firewall Rule Review Log** (Appendix A).
6. Obtain sign-off from the Network Operations Manager upon completion.
7. Retain review records for a minimum of **[X] years** in accordance with [Organization Name]'s records retention policy.

### 5.3 Firewall Rule Review Log

*Maintain an ongoing log of each review. A sample record format is provided below.*

| Review Date | Firewall / Boundary | Reviewer | Rules Reviewed | Rules Removed | Findings | Sign-Off | Closure Date |
|---|---|---|---|---|---|---|---|
| [Date] | [Firewall Name] | [Reviewer Name] | [Count] | [Count] | [Summary of findings] | [Network Ops Manager] | [Date] |

---

## 6. Network Architecture Diagram

*Maintain current, version-controlled network architecture diagrams as a mandatory artefact. Diagrams must be updated within [30] days of any significant network change and stored in the approved document repository.*

### 6.1 Diagram Requirements

All network architecture diagrams must depict:

- All defined network zones (Section 4.1) with clearly labelled boundaries
- Firewall placement at each zone boundary
- IDS/IPS sensor placement
- Key host types within each zone (without exposing sensitive IP details in documents with broad distribution)
- External connectivity points (internet, third-party connections, WAN links)
- Management network paths
- Legend and version information

### 6.2 Current Diagram Reference

| Diagram | Version | Location | Last Updated | Approved By |
|---|---|---|---|---|
| High-Level Network Architecture | [Version] | [Repository Path / SharePoint Link] | [Date] | [Approver Name] |
| Detailed Zone Topology | [Version] | [Repository Path / SharePoint Link] | [Date] | [Approver Name] |
| DMZ Architecture | [Version] | [Repository Path / SharePoint Link] | [Date] | [Approver Name] |
| Management Network | [Version] | [Repository Path / SharePoint Link] | [Date] | [Approver Name] |

> **Note:** Network architecture diagrams containing IP addressing schemes or detailed device configurations are classified **Restricted** and stored separately with access limited to the Network Operations and Information Security teams.

---

## 7. Exception Management

*Exceptions to these standards must be formally approved and subject to compensating controls and time-limited validity.*

- All exceptions must be submitted to the Network Operations Manager using the **Network Architecture Exception Request Form** (Appendix B).
- Exceptions require approval from the CISO and, where material, the Chief Risk Officer.
- Approved exceptions must be reviewed at least **every [6] months** or upon expiry, whichever is earlier.
- An exceptions register must be maintained and reported to the [Risk Committee / IT Steering Committee] on a [quarterly] basis.

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [Version] | [Date] | [Author Name] | [Description of changes] |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Operations Manager | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Risk Officer / Head of Risk | [Name] | | [Date] |
| [Additional Approver] | [Name] | | [Date] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.36 | Network security architecture and defence-in-depth requirements |
| BNM RMiT | Clause 10.1–10.5 | General technology risk management principles |
| [Internal Policy] | [Document ID] | [Organization Name] Information Security Policy |
| [Internal Policy] | [Document ID] | [Organization Name] IT Change Management Policy |
| [Internal Policy] | [Document ID] | [Organization Name] Third-Party Risk Management Policy |
| NIST SP 800-41 | Rev. 1 | Guidelines on Firewalls and Firewall Policy |
| ISO/IEC 27001:2022 | Annex A, Control 8.20–8.22 | Network security controls |

---

## Appendices

### Appendix A — Firewall Rule Review Log Template

*Use this template to record each firewall rule review. Completed logs must be retained for [X] years.*

| Field | Details |
|---|---|
| Review Reference No. | [REF-XXXX] |
| Firewall / Boundary | [Name] |
| Review Date | [Date] |
| Reviewer(s) | [Names] |
| Total Rules Reviewed | [Count] |
| Rules Removed / Disabled | [Count] |
| Rules Modified | [Count] |
| Findings Summary | [Narrative description] |
| Compensating Controls Applied | [If applicable] |
| Sign-Off (Network Ops Manager) | [Name / Date] |

---

### Appendix B — Network Architecture Exception Request Form

*Submit this form to the Network Operations Manager for any requested deviation from these standards.*

| Field | Details |
|---|---|
| Request Reference No. | [REF-XXXX] |
| Requestor Name & Department | [Name] / [Department] |
| Date of Request | [Date] |
| Standard / Requirement Affected | [Reference clause/section] |
| Description of Exception | [Detail the deviation requested] |
| Business Justification | [Explain why the exception is necessary] |
| Risk Assessment | [Identify risks introduced by the exception] |
| Proposed Compensating Controls | [Detail mitigating measures] |
| Requested Validity Period | [e.g., 6 months, expiry date] |
| Network Ops Manager Approval | [Name / Signature / Date] |
| CISO Approval | [Name / Signature / Date] |
| Exception Status | [ ] Approved &nbsp;&nbsp; [ ] Rejected &nbsp;&nbsp; [ ] Deferred |

---

### Appendix C — Glossary

| Term | Definition |
|---|---|
| Defence-in-Depth | A layered security approach where multiple independent security controls protect against threats, ensuring no single point of failure. |
| DMZ (Demilitarized Zone) | A network segment that exposes external-facing services to the internet while isolating them from the internal network. |
| NGFW (Next-Generation Firewall) | A firewall that incorporates deep packet inspection, application awareness, and integrated intrusion prevention. |
| IDS/IPS | Intrusion Detection System / Intrusion Prevention System — monitors and/or blocks malicious network traffic. |
| NAC (Network Access Control) | A security solution that enforces policy on devices attempting to connect to a network. |
| TLS | Transport Layer Security — a cryptographic protocol for securing data in transit. |
| RACI | Responsible, Accountable, Consulted, Informed — a framework for defining roles in processes and decisions. |
| RMiT | Risk Management in Technology — BNM's policy document governing technology risk for financial institutions. |

---

*This document is subject to annual review or upon significant change to network architecture, regulatory requirements, or organizational structure. All previous versions are superseded upon approval of this document.*