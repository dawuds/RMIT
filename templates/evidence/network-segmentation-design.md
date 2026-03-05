# Network Segmentation Design

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

---

## 1. Purpose and Scope

This document defines the network segmentation design and trust zone architecture for **[Organization Name]**, establishing the structural boundaries, controls, and policies governing the segregation of network environments. It serves as primary evidence of compliance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.37**, which mandates that financial institutions implement adequate network segmentation controls to limit unauthorized access, contain the impact of security incidents, and protect critical systems and sensitive data.

This document applies to all network infrastructure, systems, applications, and data assets owned or operated by [Organization Name], including on-premises environments, cloud deployments, hybrid networks, and third-party interconnections. It covers all trust zones from the public-facing perimeter to the most restricted internal segments.

---

## 2. Assessment Scope and Criteria

*Define the boundaries of the network segmentation assessment, including the systems, environments, and locations in scope, and the criteria used to determine segmentation requirements.*

### 2.1 Assessment Scope

| Scope Item | Description | Included (Y/N) |
|---|---|---|
| Corporate LAN | Internal office network and end-user systems | [Y/N] |
| Data Centre Network | Primary and DR data centre infrastructure | [Y/N] |
| DMZ / Perimeter Network | Internet-facing services and web tiers | [Y/N] |
| Management / Out-of-Band Network | Network device management plane | [Y/N] |
| Third-Party / Partner Interconnects | Dedicated links to vendors, partners, SWIFT, etc. | [Y/N] |
| Cloud Environments (IaaS/PaaS) | [Cloud Provider(s)] virtual networks and VPCs | [Y/N] |
| Operational Technology (OT) / IoT | Physical access systems, building management, etc. | [Y/N] |
| Remote Access Infrastructure | VPN concentrators, jump servers, PAM systems | [Y/N] |

### 2.2 Assessment Criteria

*List the risk-based and compliance-driven criteria used to determine how systems are assigned to network segments.*

Segmentation decisions are evaluated against the following criteria:

- **Data Sensitivity**: Classification level of data processed or stored within the segment (Public, Internal, Confidential, Restricted).
- **Regulatory Requirement**: Systems subject to BNM RMiT, PDPA, PCI-DSS, SWIFT CSP, or other applicable mandates.
- **System Criticality**: Designation as a Critical Information Infrastructure (CII) component or business-critical system.
- **Exposure Profile**: Level of external-facing access or internet connectivity required.
- **Lateral Movement Risk**: Potential for an attacker who compromises a host in this segment to pivot to higher-value targets.
- **Third-Party Access**: Whether the segment is accessible by external vendors, partners, or managed service providers.
- **Change Frequency**: Rate of change and deployment risk of systems within the segment.

### 2.3 Exclusions

*Document any systems or environments explicitly excluded from this assessment and the justification.*

| Excluded Item | Justification | Risk Acceptance Reference |
|---|---|---|
| [Excluded System/Environment] | [Reason for exclusion] | [Risk Acceptance ID / Owner] |

---

## 3. Methodology

*Describe the approach, tools, and processes used to design, validate, and assess the network segmentation architecture.*

### 3.1 Design Methodology

The network segmentation design follows a **defence-in-depth** and **least-privilege** approach, aligned to industry frameworks including:

- **NIST SP 800-41** (Guidelines on Firewalls and Firewall Policy)
- **CIS Controls v8** (Control 12: Network Infrastructure Management)
- **ISO/IEC 27001:2022** (Annex A 8.22 – Segregation of Networks)
- **BNM RMiT Policy Document** (Clause 10.37)

### 3.2 Assessment Activities

| Activity | Description | Responsible Party | Date Completed |
|---|---|---|---|
| Asset Discovery & Inventory Review | Reconcile all systems against the asset register and confirm segment assignments | [Role/Team] | [Date] |
| Network Architecture Review | Review current logical and physical topology diagrams | [Role/Team] | [Date] |
| Firewall Policy Analysis | Analyse firewall rule sets for overly permissive rules and rule sprawl | [Role/Team] | [Date] |
| Traffic Flow Analysis | Validate that actual traffic flows conform to documented permitted flows | [Role/Team] | [Date] |
| Penetration Testing / Segmentation Testing | Technical validation that inter-zone controls prevent unauthorized traversal | [Role/Team] | [Date] |
| Interview & Documentation Review | Interviews with network and security operations teams | [Role/Team] | [Date] |

### 3.3 Tools and Technologies Used

| Tool / Technology | Purpose | Version |
|---|---|---|
| [Firewall Management Platform] | Firewall rule analysis and policy review | [Version] |
| [Network Scanning Tool] | Active topology discovery and host enumeration | [Version] |
| [SIEM / Flow Analysis Tool] | Network traffic flow validation and anomaly detection | [Version] |
| [Vulnerability Scanner] | Identification of misconfigured or exposed services | [Version] |

---

## 4. Findings and Ratings

*Summarise the results of the segmentation assessment, including identified gaps, risk ratings, and remediation actions.*

### 4.1 Overall Segmentation Maturity Rating

| Dimension | Rating | Justification |
|---|---|---|
| Zone Definition Completeness | [Adequate / Needs Improvement / Inadequate] | [Summary justification] |
| Firewall Rule Discipline | [Adequate / Needs Improvement / Inadequate] | [Summary justification] |
| Inter-Zone Traffic Controls | [Adequate / Needs Improvement / Inadequate] | [Summary justification] |
| Management Plane Isolation | [Adequate / Needs Improvement / Inadequate] | [Summary justification] |
| Third-Party Access Controls | [Adequate / Needs Improvement / Inadequate] | [Summary justification] |
| **Overall Rating** | **[Adequate / Needs Improvement / Inadequate]** | |

*Rating scale: **Adequate** — controls are in place and operating effectively; **Needs Improvement** — controls exist but have gaps requiring remediation; **Inadequate** — controls are absent or ineffective, immediate action required.*

### 4.2 Findings Register

| Finding ID | Zone / Area Affected | Description | Risk Rating | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| NSD-F-001 | [Zone Name] | [Description of finding or gap] | Critical / High / Medium / Low | [Recommended action] | [Owner] | [Date] | Open / In Progress / Closed |
| NSD-F-002 | [Zone Name] | [Description of finding or gap] | Critical / High / Medium / Low | [Recommended action] | [Owner] | [Date] | Open / In Progress / Closed |
| NSD-F-003 | [Zone Name] | [Description of finding or gap] | Critical / High / Medium / Low | [Recommended action] | [Owner] | [Date] | Open / In Progress / Closed |

### 4.3 Positive Observations

*Document controls and practices observed to be operating effectively, providing audit evidence of strengths.*

- [Positive observation 1 — e.g., "Management network is fully isolated with dedicated firewall policies and no shared rules with production segments."]
- [Positive observation 2]
- [Positive observation 3]

---

## 5. Network Segmentation Zones

*Define each network trust zone, its purpose, the systems it contains, the data classification it handles, and the controls applied at its boundaries.*

### 5.1 Trust Zone Framework

[Organization Name] operates a tiered trust zone model. Traffic flow between zones is permitted only where an explicit business requirement exists and is approved. All inter-zone traffic traverses a stateful inspection or next-generation firewall control point.

```
[ Internet / Untrusted ]
        |
   [ DMZ / Perimeter Zone ]
        |
   [ External Services Zone ]
        |
   [ Application Zone (Web / API Tier) ]
        |
   [ Application Zone (Business / Middle Tier) ]
        |
   [ Data Zone (Database / Storage Tier) ]
        |
   [ Restricted Zone (Core Banking / Payment Systems) ]

   [ Management Zone ] —— Out-of-band access to all zones
   [ Corporate LAN ] —— Controlled access to Application Zones
   [ Third-Party Access Zone ] —— Isolated partner / vendor connectivity
```

### 5.2 Zone Definitions

| Zone ID | Zone Name | Trust Level | Data Classification | Primary Systems | Inbound From | Outbound To | Firewall / Control Device |
|---|---|---|---|---|---|---|---|
| Z-01 | Internet / Untrusted | 0 — Untrusted | N/A | External clients, internet | External | DMZ only | [Firewall ID/Name] |
| Z-02 | DMZ / Perimeter | 1 — Low | Public | WAF, Reverse Proxy, Load Balancer, DNS | Internet (Z-01) | External Services (Z-03) | [Firewall ID/Name] |
| Z-03 | External Services | 2 — Low-Medium | Public / Internal | Email gateway, API gateway, partner portals | DMZ (Z-02) | Application Web Tier (Z-04) | [Firewall ID/Name] |
| Z-04 | Application Web Tier | 3 — Medium | Internal | Web servers, frontend application servers | External Services (Z-03), Corporate LAN (Z-08) | App Business Tier (Z-05) | [Firewall ID/Name] |
| Z-05 | Application Business Tier | 3 — Medium | Internal / Confidential | Application servers, middleware, ESB | App Web Tier (Z-04) | Data Zone (Z-06) | [Firewall ID/Name] |
| Z-06 | Data Zone | 4 — High | Confidential / Restricted | Databases, file storage, data warehouses | App Business Tier (Z-05) | None (no outbound) | [Firewall ID/Name] |
| Z-07 | Restricted / Critical Systems | 5 — Highest | Restricted | Core banking, payment processing, SWIFT | Data Zone (Z-06) — limited | None | [Firewall ID/Name] |
| Z-08 | Corporate LAN | 2 — Low-Medium | Internal | End-user workstations, printers, phones | Internal / VPN | App Web Tier (Z-04), Management (Z-09) — restricted | [Firewall ID/Name] |
| Z-09 | Management / OOB | 4 — High | Confidential | Jump servers, PAM, network management systems | Authorised admins via PAM | All zones (management plane only) | [Firewall ID/Name] |
| Z-10 | Third-Party Access | 2 — Low-Medium | Internal | Vendor VPN termination, partner interconnects | Approved third parties | Specific target systems only — approved list | [Firewall ID/Name] |

### 5.3 Inter-Zone Traffic Matrix

*This matrix documents approved traffic flows between zones. All flows not listed are denied by default.*

| Source Zone | Destination Zone | Protocol / Port | Business Justification | Approval Reference | Review Date |
|---|---|---|---|---|---|
| Z-01 (Internet) | Z-02 (DMZ) | TCP/443, TCP/80 | Public web services | [Change/Approval ID] | [Date] |
| Z-02 (DMZ) | Z-03 (External Services) | TCP/443 | Proxied application traffic | [Change/Approval ID] | [Date] |
| Z-04 (App Web) | Z-05 (App Business) | TCP/[Port] | Application tier communication | [Change/Approval ID] | [Date] |
| Z-05 (App Business) | Z-06 (Data) | TCP/1433, TCP/5432 | Database queries | [Change/Approval ID] | [Date] |
| Z-08 (Corp LAN) | Z-09 (Management) — via PAM | TCP/22, TCP/3389 | Administrative access via PAM only | [Change/Approval ID] | [Date] |
| Z-10 (Third-Party) | Z-[X] | TCP/[Port] | [Specific third-party use case] | [Change/Approval ID] | [Date] |

### 5.4 Micro-Segmentation Controls

*Document any host-based or workload-level segmentation applied within zones, particularly for critical systems.*

| System / Application | Micro-Segmentation Technology | Policy Description | Owner |
|---|---|---|---|
| [System Name] | [Host-based firewall / SDN policy / NSG] | [Description of host-level isolation] | [Owner] |
| [System Name] | [Technology] | [Description] | [Owner] |

---

## 6. Firewall Rule Review Schedule

*Define the schedule and process for reviewing firewall rule sets to ensure rules remain current, justified, and aligned to the principle of least privilege.*

### 6.1 Review Schedule

| Zone / Firewall | Rule Set | Review Frequency | Last Reviewed | Next Review Due | Reviewer | Approver |
|---|---|---|---|---|---|---|
| Z-01/Z-02 Perimeter Firewall | Inbound internet rules | Quarterly | [Date] | [Date] | [Name/Role] | [Name/Role] |
| Z-02/Z-03 DMZ Firewall | DMZ egress rules | Quarterly | [Date] | [Date] | [Name/Role] | [Name/Role] |
| Z-06/Z-07 Restricted Zone Firewall | Core banking access rules | Monthly | [Date] | [Date] | [Name/Role] | [Name/Role] |
| Z-09 Management Firewall | OOB / Jump server rules | Quarterly | [Date] | [Date] | [Name/Role] | [Name/Role] |
| Z-10 Third-Party Firewall | Vendor / partner rules | Per-event + Quarterly | [Date] | [Date] | [Name/Role] | [Name/Role] |
| All zones | Emergency / temporary rules | Per-event (max 30-day expiry) | [Date] | Continuous | [Name/Role] | [Name/Role] |

### 6.2 Review Triggers (Per-Event)

In addition to the scheduled reviews above, an immediate firewall rule review shall be triggered upon any of the following events:

- Detection of a security incident involving network traversal or lateral movement.
- Introduction of a new system, application, or vendor interconnection.
- Decommissioning of a system, application, or vendor relationship.
- Discovery of an undocumented or unauthorised rule during audit or scanning activity.
- Significant change to the network topology or zone architecture.
- BNM supervisory examination, internal audit, or penetration test finding related to network controls.

### 6.3 Review Process

1. **Identify**: Export current rule set from firewall management platform for the zone under review.
2. **Map**: Cross-reference each rule against the approved Inter-Zone Traffic Matrix (Section 5.3) and active business justifications.
3. **Challenge**: Flag any rule with no documented owner, expired justification, overly broad source/destination, or use of `any/any`.
4. **Remediate**: Remove, tighten, or re-approve flagged rules via the Change Management process ([Reference Change Management Policy]).
5. **Document**: Update this document and the firewall management platform with the outcome of the review.
6. **Report**: Escalate any rule that cannot be justified or removed to the [CISO / Head of IT Risk] for risk acceptance or escalation.

### 6.4 Rule Hygiene Standards

| Standard | Requirement |
|---|---|
| Default Deny | All inter-zone firewalls must operate on an implicit deny-all baseline |
| Rule Ownership | Every rule must have a named business owner and an associated change/approval reference |
| Temporary Rules | Temporary rules must have an expiry date not exceeding 30 days; extensions require re-approval |
| Overly Broad Rules | Rules permitting `any` source or destination are prohibited except on the external perimeter (inbound deny only) |
| Logging | All inter-zone deny and permit events must be logged and forwarded to the SIEM |
| Redundant Rules | Shadowed, duplicate, or expired rules must be removed within [X] days of identification |

---

## 7. Network Architecture Diagram

*This section provides reference to the formal network architecture diagrams that support this document. Diagrams must be maintained under version control and updated whenever the architecture changes.*

### 7.1 Diagram Inventory

| Diagram ID | Title | Description | Version | Last Updated | Location |
|---|---|---|---|---|---|
| NSD-DIA-001 | Logical Network Segmentation Overview | High-level trust zone topology showing all zones and inter-zone control points | [Version] | [Date] | [Document Repository Path / URL] |
| NSD-DIA-002 | Physical Network Topology | Physical device layout, data centre rack placement, and cable plant | [Version] | [Date] | [Document Repository Path / URL] |
| NSD-DIA-003 | Data Centre Zone Detail | Detailed logical layout of Data Zone and Restricted Zone | [Version] | [Date] | [Document Repository Path / URL] |
| NSD-DIA-004 | Cloud Network Architecture | VPC / VNet design for [Cloud Provider] environments | [Version] | [Date] | [Document Repository Path / URL] |
| NSD-DIA-005 | Third-Party Interconnection Diagram | Dedicated link and VPN topology for all external partner connections | [Version] | [Date] | [Document Repository Path / URL] |

### 7.2 Diagram Maintenance Requirements

- All diagrams are maintained in **[Diagram Tool, e.g., draw.io / Visio / Lucidchart]** and stored in **[Version-Controlled Repository]**.
- Diagrams must be updated within **[X] business days** of any approved network change.
- Updated diagrams require review and approval by the Network Operations Manager before publication.
- Printed or exported copies are considered uncontrolled documents and must be marked as such.

> **Note to document author**: Embed or attach the current version of NSD-DIA-001 (Logical Network Segmentation Overview) directly into this document for submission to audit or regulatory review. All embedded diagrams must carry a version stamp and date.

*[INSERT DIAGRAM NSD-DIA-001 HERE]*

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the design, operation, and maintenance of the network segmentation controls described in this document.*

**Key**: R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Network Operations Manager | CISO / Head of IT Risk | IT Security Analyst | System / Application Owner | Internal Audit | Change Advisory Board |
|---|---|---|---|---|---|---|
| Network segmentation design and review | R | A | C | C | I | I |
| Firewall policy definition and approval | R | A | C | C | I | A |
| Firewall rule change implementation | R | I | C | I | I | A |
| Quarterly firewall rule review | R | A | C | I | I | I |
| Per-event firewall rule review | R | A | R | C | I | I |
| Network architecture diagram maintenance | R | I | C | I | I | I |
| Segmentation assessment and testing | C | A | R | I | C | I |
| Findings remediation tracking | R | A | C | C | I | I |
| Third-party access provisioning | R | A | R | C | I | A |
| Incident response — network isolation | R | A | R | C | I | I |
| Regulatory reporting on network controls | C | A | C | I | C | I |
| Annual policy review and update | R | A | C | I | C | I |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial document creation |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] |

### 9.2 Review Schedule

This document shall be reviewed:

- **Quarterly** — as part of the standard network security review cycle, or
- **Per-event** — upon any material change to the network architecture, a significant security incident, a new regulatory directive from BNM, or a finding from internal or external audit.

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], Network Operations Manager | | [Date] |
| Reviewed By | [Name], IT Security Analyst | | [Date] |
| Reviewed By | [Name], Internal Audit | | [Date] |
| Approved By | [Name], CISO / Head of IT Risk | | [Date] |
| Endorsed By | [Name], CTO / Head of Technology | | [Date] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.37 | Network segmentation and trust zone controls for technology risk management |
| BNM RMiT | Clause 10.30 – 10.36 | Broader network security and perimeter control requirements |
| PDPA 2010 | Section 9 — Security of Personal Data | Requirement to protect personal data through appropriate technical safeguards, including network controls |
| NACSA CII Framework | Network Security Controls | Applicable where systems are designated as Critical National Information Infrastructure |
| NIST SP 800-41 Rev 1 | Guidelines on Firewalls and Firewall Policy | Technical guidance on firewall design and rule management |
| ISO/IEC 27001:2022 | Annex A 8.22 — Segregation of Networks | Information security control for network segmentation |
| CIS Controls v8 | Control 12 — Network Infrastructure Management | Governance and operational controls for network infrastructure |
| PCI DSS v4.0 | Requirement 1 — Install and Maintain Network Security Controls | Applicable where cardholder data environments are in scope |
| [Organization Name] | Information Security Policy [Policy ID] | Parent information security policy governing this document |
| [Organization Name] | Change Management Policy [Policy ID] | Change management process applicable to firewall rule changes |
| [Organization Name] | Incident Response Plan [Policy ID] | Incident procedures referenced in Section 6.2 |

---

## Appendices

### Appendix A — Glossary

| Term | Definition |
|---|---|
| Trust Zone | A logical network segment to which a defined level of trust is assigned, with controls enforced at its boundary |
| DMZ (Demilitarised Zone) | A perimeter network segment that exposes external-facing services while isolating internal networks |
| Firewall Rule Set | The ordered collection of access control rules applied to a firewall or security device |
| Micro-Segmentation | Host-level or workload-level network isolation applied within a zone, in addition to zone boundary controls |
| Management Plane | The network used exclusively for administrative access to infrastructure devices, isolated from production traffic |
| Lateral Movement | An attack technique where a threat actor who has compromised one host navigates to other hosts within the network |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| CII | Critical Information Infrastructure — systems designated as essential to national security or the economy |
| PAM | Privileged Access Management — technology and process controls governing administrative access to systems |
| OOB | Out-of-Band — a dedicated management network physically or logically separate from production networks |

### Appendix B — Firewall Change Request Template

*Use the following fields when submitting a change request for firewall rule additions or modifications through the Change Management process.*

- **Change Request ID**: [CR-XXXX]
- **Requestor**: [Name / Team]
- **Date of Request**: [Date]
- **Firewall / Zone Affected**: [Zone ID and firewall device]
- **Rule Type**: New Rule / Modification / Removal / Temporary
- **Source**: [IP Address / Subnet / Zone]
- **Destination**: [IP Address / Subnet / Zone]
- **Protocol / Port**: [TCP/UDP/ICMP — Port Number]
- **Direction**: Inbound / Outbound / Both
- **Business Justification**: [Detailed justification]
- **System / Application Owner Approval**: [Name / Date]
- **Security Review**: [Security Analyst Name / Date]
- **Expiry Date (temporary rules only)**: [Date — max 30 days]
- **CAB Approval**: [Name / Date]
- **Implementation Date**: [Date]

### Appendix C — Third-Party Network Access Register

*Maintain a register of all active third-party network connections. This register is reviewed as part of the quarterly firewall rule review.*

| Third Party | Connection Type | Source IP / Range | Destination Zone | Permitted Ports | Business Purpose | Contract Reference | Access Start Date | Access Expiry / Review Date | Approver |
|---|---|---|---|---|---|---|---|---|---|
| [Vendor Name] | Dedicated MPLS / VPN | [IP Range] | Z-10 → Z-[X] | [Ports] | [Purpose] | [Contract ID] | [Date] | [Date] | [Name] |

### Appendix D — Compliance Evidence Checklist

*This checklist is used by the Network Operations Manager and Internal Audit to confirm that all required evidence for BNM RMiT Clause 10.37 is current and available.*

| Evidence Item | Document / Reference | Status | Last Verified | Verified By |
|---|---|---|---|---|
| Current network segmentation design document | This document — [Document ID] | Current / Expired | [Date] | [Name] |
| Up-to-date logical network architecture diagram | NSD-DIA-001 | Current / Expired | [Date] | [Name] |
| Firewall rule review records (last 4 quarters) | [Firewall Review Reports — IDs] | Available / Missing | [Date] | [Name] |
| Inter-zone traffic matrix (approved flows) | Section 5.3 of this document | Current / Expired | [Date] | [Name] |
| Firewall change request records | [ITSM / Change System Reference] | Available / Missing | [Date] | [Name] |
| Segmentation testing / penetration test results | [Pentest Report ID] | Available / Missing | [Date] | [Name] |
| Third-party access register | Appendix C of this document | Current / Expired | [Date] | [Name] |
| RACI and ownership documentation | Section 8 of this document | Current / Expired | [Date] | [Name] |

---

*This document is classified as **Confidential**. It must not be distributed outside [Organization Name] without the written approval of the [CISO / Head of IT Risk]. Printed copies are uncontrolled — refer to [Document Repository Name] for the current version.*