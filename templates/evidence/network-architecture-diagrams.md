# Network Architecture Diagrams

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Operations Manager |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

## 1. Purpose and Scope

This document provides complete network architecture diagrams and supporting evidence for [Organization Name]'s technology infrastructure, in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.36**. It documents network segmentation zones, data flows, interconnections, and firewall controls to demonstrate that the organization maintains a secure, well-governed network topology commensurate with its risk profile.

**Scope:** This document covers all network segments, perimeter controls, internal zones, third-party connections, and data flows within [Organization Name]'s production, development, and disaster recovery environments. Out-of-scope environments must be explicitly identified below.

**Out of Scope:**
- [List any explicitly excluded environments, subsidiaries, or segments]

---

## 2. Assessment Scope and Criteria

*Describe the boundaries of this network architecture review, the environments assessed, and the criteria used to determine compliance with RMiT requirements. Include applicable risk thresholds or benchmarks.*

### 2.1 Assessment Boundaries

| Environment | In Scope | Justification |
|---|---|---|
| Production Network | Yes | [Justification] |
| Development / UAT Network | [Yes/No] | [Justification] |
| Disaster Recovery Site | [Yes/No] | [Justification] |
| Cloud Environments | [Yes/No] | [Justification] |
| Third-Party / Vendor Connections | [Yes/No] | [Justification] |

### 2.2 Assessment Criteria

*List the standards, policies, and benchmarks used to evaluate the network architecture.*

- **Regulatory Requirement:** BNM RMiT Clause 10.36 — network segmentation and perimeter security controls
- **Internal Policy Reference:** [Organization Network Security Policy, Version X.X]
- **Technical Standard:** [e.g., ISO/IEC 27033, CIS Benchmarks for Network Devices]
- **Additional Criteria:** [e.g., PCI-DSS segmentation requirements where applicable]

---

## 3. Methodology

*Describe the approach used to produce and validate these network architecture diagrams. Include data collection methods, tools used, and validation steps.*

### 3.1 Documentation Approach

| Step | Activity | Tool / Method | Performed By |
|---|---|---|---|
| 1 | Network discovery and asset enumeration | [e.g., Nmap, IPAM system] | [Role] |
| 2 | Traffic flow analysis | [e.g., NetFlow, firewall logs] | [Role] |
| 3 | Diagram creation and validation | [e.g., draw.io, Visio] | [Role] |
| 4 | Peer review by network architect | Manual review | [Role] |
| 5 | Sign-off and version control | Document management system | [Role] |

### 3.2 Review Trigger Events

This document is updated upon any of the following events, or quarterly at minimum:

- Material changes to network topology or segmentation
- Introduction of new system interconnections or third-party links
- Post-incident remediation affecting network architecture
- Scheduled quarterly review cycle

---

## 4. Findings and Ratings

*Summarise the findings from the most recent review of this network architecture. Assign a rating to the overall security posture of the network topology and document any gaps or exceptions requiring remediation.*

### 4.1 Overall Network Security Rating

| Dimension | Rating | Basis |
|---|---|---|
| Perimeter Security | [Satisfactory / Needs Improvement / Critical] | [Brief rationale] |
| Internal Segmentation | [Satisfactory / Needs Improvement / Critical] | [Brief rationale] |
| Third-Party Connectivity Controls | [Satisfactory / Needs Improvement / Critical] | [Brief rationale] |
| Monitoring Coverage | [Satisfactory / Needs Improvement / Critical] | [Brief rationale] |
| **Overall Rating** | **[Satisfactory / Needs Improvement / Critical]** | |

### 4.2 Findings Register

| Finding ID | Description | Risk Level | Affected Zone | Recommended Action | Target Date | Status |
|---|---|---|---|---|---|---|
| F-001 | [Description of finding] | [High/Med/Low] | [Zone] | [Action] | [Date] | [Open/Closed] |
| F-002 | [Description of finding] | [High/Med/Low] | [Zone] | [Action] | [Date] | [Open/Closed] |

---

## 5. Network Segmentation Zones

*Document all defined network zones, their purpose, security controls applied, and the systems or assets residing within each zone. Each zone must be reflected in the diagrams in Section 6.*

### 5.1 Zone Definitions

| Zone ID | Zone Name | Classification | Purpose | Key Assets | Primary Controls |
|---|---|---|---|---|---|
| Z-01 | Internet / Untrusted Zone | Public | External-facing services, DMZ boundary | [Assets] | Perimeter firewall, IPS/IDS |
| Z-02 | DMZ (Demilitarised Zone) | Semi-Trusted | Web servers, API gateways, reverse proxies | [Assets] | WAF, segmentation firewall |
| Z-03 | Application Zone | Internal | Core business application servers | [Assets] | Host-based firewall, access controls |
| Z-04 | Database Zone | Restricted | Production databases, data stores | [Assets] | Database firewall, encryption at rest |
| Z-05 | Management / Out-of-Band Zone | Restricted | Network device management, jump hosts | [Assets] | MFA, PAM solution, restricted access |
| Z-06 | User Workstation Zone | Internal | End-user devices | [Assets] | NAC, endpoint protection |
| Z-07 | Third-Party / Partner Zone | Controlled | Vendor access, B2B connections | [Assets] | Dedicated VLAN, VPN, time-limited access |
| Z-08 | [Additional Zone] | [Classification] | [Purpose] | [Assets] | [Controls] |

### 5.2 Inter-Zone Traffic Policy

*Define the permitted communication paths between zones. Deny-all with explicit permit is the expected baseline.*

| Source Zone | Destination Zone | Protocol/Port | Direction | Permitted | Justification |
|---|---|---|---|---|---|
| Z-01 (Internet) | Z-02 (DMZ) | TCP/443, TCP/80 | Inbound | Yes | Customer-facing web services |
| Z-02 (DMZ) | Z-03 (Application) | TCP/[Port] | Inbound | Yes | API backend communication |
| Z-03 (Application) | Z-04 (Database) | TCP/[Port] | Inbound | Yes | Application-to-DB queries |
| Z-06 (User) | Z-04 (Database) | Any | Inbound | No | Direct user DB access prohibited |
| [Source] | [Destination] | [Protocol] | [Direction] | [Yes/No] | [Justification] |

---

## 6. Network Architecture Diagram

*Attach or embed the current network architecture diagrams below. Diagrams must be dated, versioned, and clearly legible. Each diagram should include a legend. Multiple diagrams may be used to represent different layers or environments.*

### 6.1 Logical Network Architecture

> **[ATTACH DIAGRAM — Logical Network Architecture v[X.X], dated [Date]]**
>
> *The logical diagram must illustrate all network zones (as defined in Section 5), trust boundaries, security controls (firewalls, IDS/IPS, WAF), and primary data flows between zones.*

**Diagram Legend:**

| Symbol | Meaning |
|---|---|
| Rectangle (solid border) | Network zone / segment |
| Dashed line | Trust boundary |
| Arrow (→) | Permitted data flow direction |
| Shield icon | Security control (firewall / WAF / IPS) |
| Lock icon | Encrypted channel (TLS/IPSec) |

### 6.2 Physical / Infrastructure Architecture

> **[ATTACH DIAGRAM — Physical Network Architecture v[X.X], dated [Date]]**
>
> *The physical diagram must show data centre layout, rack placement, network device interconnections, ISP links, and DR site connectivity.*

### 6.3 Cloud / Hybrid Architecture (if applicable)

> **[ATTACH DIAGRAM — Cloud / Hybrid Architecture v[X.X], dated [Date]]**
>
> *If cloud services are in scope, illustrate connectivity between on-premises and cloud environments, including VPN/ExpressRoute links, cloud security groups, and shared responsibility boundaries.*

---

## 7. Firewall Rule Review Schedule

*Document the schedule and process for reviewing firewall rulesets to ensure rules remain current, authorised, and aligned with the network zone policy defined in Section 5.*

### 7.1 Firewall Inventory

| Firewall ID | Hostname / Identifier | Location / Zone Boundary | Vendor / Model | Managed By |
|---|---|---|---|---|
| FW-01 | [Hostname] | Internet → DMZ | [Vendor/Model] | [Team] |
| FW-02 | [Hostname] | DMZ → Application Zone | [Vendor/Model] | [Team] |
| FW-03 | [Hostname] | Application → Database Zone | [Vendor/Model] | [Team] |
| FW-04 | [Hostname] | [Zone boundary] | [Vendor/Model] | [Team] |

### 7.2 Review Schedule and Process

| Review Type | Frequency | Scope | Responsible Party | Evidence Produced |
|---|---|---|---|---|
| Full ruleset review | Quarterly | All firewalls | Network Operations Manager | Firewall Review Report |
| Change-triggered review | Per change request | Affected firewall | Change requester + Network Ops | Change record + approval |
| Privileged access rule audit | Semi-annually | Management zone firewalls | Security Operations | Audit log export |
| Dormant rule clean-up | Annually | All firewalls | Network Operations | Remediation log |

### 7.3 Firewall Rule Review Status

| Firewall ID | Last Review Date | Reviewed By | Outstanding Issues | Next Review Date |
|---|---|---|---|---|
| FW-01 | [Date] | [Name] | [None / Description] | [Date] |
| FW-02 | [Date] | [Name] | [None / Description] | [Date] |
| FW-03 | [Date] | [Name] | [None / Description] | [Date] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the creation, maintenance, review, and approval of this document and the controls it describes.*

| Activity | Network Ops Manager | IT Security | CISO | Internal Audit | Technology Risk | Business Owner |
|---|---|---|---|---|---|---|
| Maintain network architecture diagrams | **A/R** | C | I | I | I | — |
| Define and enforce zone segmentation policy | R | **A** | I | — | C | — |
| Conduct firewall ruleset reviews | **A/R** | C | I | I | — | — |
| Approve changes to network architecture | C | R | **A** | — | C | I |
| Perform independent review of this document | — | — | I | **R** | C | — |
| Escalate critical network findings to Board | — | — | **A/R** | — | C | — |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [X.X] | [Date] | [Author Name] | [Description] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Operations Manager | [Name] | ________________ | [Date] |
| Chief Information Security Officer | [Name] | ________________ | [Date] |
| Technology Risk Officer | [Name] | ________________ | [Date] |
| [Additional Approver Role] | [Name] | ________________ | [Date] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.36 | Network segmentation, perimeter security, and architecture documentation requirements |
| BNM RMiT | Clause 10.33–10.35 | Network security controls and monitoring |
| PDPA 2010 | — | Personal data protection obligations relevant to data flows depicted in diagrams |
| [Internal Policy] | [Policy Name, Version] | [Organization Name] Network Security Policy |
| [Internal Standard] | [Standard Name, Version] | [Organization Name] Change Management Procedure |
| ISO/IEC 27033 | Network Security | International standard for IT network security |

---

## Appendices

### Appendix A — Data Flow Register

*Attach or summarise the complete data flow register showing all data assets traversing each network zone, classification, and encryption status.*

> **[ATTACH: Data Flow Register — [Organization Name], as of [Date]]**

### Appendix B — Third-Party Connection Register

*List all external or vendor connections that traverse the network perimeter, including connection type, business justification, and access controls.*

| Connection ID | Third Party | Connection Type | Business Purpose | Authorised By | Expiry / Review Date |
|---|---|---|---|---|---|
| TP-001 | [Vendor Name] | [VPN/MPLS/API] | [Purpose] | [Approver] | [Date] |

### Appendix C — Historical Diagram Archive Index

*Maintain an index of superseded network diagrams for audit trail purposes.*

| Diagram Version | Date Superseded | Archived Location | Archived By |
|---|---|---|---|
| v[X.X] | [Date] | [Location / Document ID] | [Name] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| DMZ | Demilitarised Zone — a network segment that provides a buffer between the public internet and internal networks |
| IDS/IPS | Intrusion Detection / Prevention System |
| PAM | Privileged Access Management |
| RMiT | Risk Management in Technology — BNM policy document governing technology risk |
| WAF | Web Application Firewall |
| VLAN | Virtual Local Area Network |
| NAC | Network Access Control |

---

*This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure is prohibited. For queries, contact the Network Operations Manager at [Contact Details].*