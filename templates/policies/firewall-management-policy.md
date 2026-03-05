# Firewall Management Policy

---

| Field | Details |
|-------|---------|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Network Security Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context and Obligations](#3-regulatory-context-and-obligations)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [Network Segmentation Zones](#7-network-segmentation-zones)
8. [Firewall Rule Management](#8-firewall-rule-management)
9. [Firewall Rule Review Schedule](#9-firewall-rule-review-schedule)
10. [Network Architecture Diagram](#10-network-architecture-diagram)
11. [Exceptions and Deviations](#11-exceptions-and-deviations)
12. [Compliance Monitoring and Audit](#12-compliance-monitoring-and-audit)
13. [Incident Response and Escalation](#13-incident-response-and-escalation)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the primary intent of this policy — why it exists, what problem it solves, and what organizational outcome it supports.*

This Firewall Management Policy establishes the requirements, standards, and governance framework governing the deployment, configuration, operation, review, and retirement of firewalls within [Organization Name]. The policy ensures that firewall controls are implemented and maintained in a manner consistent with the organization's risk appetite and the regulatory obligations imposed by Bank Negara Malaysia (BNM) under the Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.38.

This policy aims to:

- Protect [Organization Name]'s information assets, networks, and systems from unauthorized access, malicious traffic, and cyber threats by establishing robust perimeter and internal network controls.
- Ensure that firewall configurations are governed through a structured, auditable process that supports accountability and traceability.
- Define minimum security standards for firewall rule management, ensuring that rules are purposeful, authorized, reviewed, and retired when no longer required.
- Support compliance with applicable Malaysian regulatory frameworks, including BNM RMiT, the Personal Data Protection Act 2010 (PDPA), and NACSA cybersecurity guidelines.
- Provide a consistent operational baseline across all network boundaries managed by [Organization Name] and its third-party service providers.

---

## 2. Scope

*Define the boundaries of this policy — which systems, environments, people, and third parties it applies to.*

### 2.1 In-Scope

This policy applies to:

- **Systems and Infrastructure:** All firewall devices, next-generation firewalls (NGFWs), virtual firewalls, cloud-native firewall services, and host-based firewall software deployed within [Organization Name]'s technology environment, including on-premises data centres, co-location facilities, and cloud environments (public, private, and hybrid).
- **Network Environments:** All network segments managed or operated by [Organization Name], including but not limited to production networks, development and staging environments, management networks, demilitarized zones (DMZs), and third-party interconnects.
- **Personnel:** All employees, contractors, consultants, managed service providers, and third parties who have authority to request, approve, implement, or review firewall rules and configurations.
- **Connected Third Parties:** External entities with network connectivity to [Organization Name]'s infrastructure via dedicated links, VPNs, or peering arrangements.

### 2.2 Out-of-Scope

The following are explicitly excluded from this policy:

- Firewalls owned and operated solely by third-party service providers where [Organization Name] has no administrative access or contractual obligation to manage configurations. (Note: vendor obligations must be addressed in relevant Third-Party Risk Management agreements.)
- Personal devices used by employees for remote access, unless such devices are managed under [Organization Name]'s Mobile Device Management (MDM) program.
- Application-layer content filtering solutions where firewall functionality is incidental and managed under a separate Web Content Filtering Policy.

### 2.3 Applicability Statement

*Tailor this section to identify subsidiaries, branches, or business units specifically covered.*

This policy applies across all business units, subsidiaries, and branches of [Organization Name] operating within Malaysia and, where applicable, international offices that connect to [Organization Name]'s Malaysian network infrastructure. Subsidiary entities are expected to adopt this policy or implement equivalent controls subject to approval from the Group Chief Information Security Officer (GCISO).

---

## 3. Regulatory Context and Obligations

*Reference the specific regulatory instruments and clauses that mandate or inform this policy.*

[Organization Name] operates as a [licensed financial institution / payment service provider / digital bank] regulated by Bank Negara Malaysia (BNM). This policy is issued in fulfilment of obligations under the following regulatory frameworks:

### 3.1 Primary Regulatory Reference

| Regulation / Framework | Clause / Section | Obligation Summary |
|------------------------|------------------|--------------------|
| BNM Risk Management in Technology (RMiT) | Clause 10.38 | Financial institutions must implement and maintain firewall controls to protect network perimeters, enforce network segmentation, and subject firewall rules to periodic review to ensure continued appropriateness. |
| BNM RMiT | Clause 10.1 – 10.10 | General technology risk management requirements, including governance, accountability, and control ownership for technology assets. |
| BNM RMiT | Clause 10.30 – 10.37 | Network security controls, including logical access controls, encrypted communications, and monitoring of network traffic. |
| BNM RMiT | Clause 11 | Cyber risk management, including threat intelligence integration into network security controls. |

### 3.2 Supporting Regulatory and Standards References

| Reference | Applicability |
|-----------|---------------|
| Personal Data Protection Act 2010 (PDPA) | Protection of personal data traversing or stored within network segments governed by firewall policy. |
| NACSA Cybersecurity Policy and Guidelines | National cybersecurity baseline for critical information infrastructure (CII) operators. |
| ISO/IEC 27001:2022 – Annex A Control 8.20 | Network security controls including firewall implementation. |
| ISO/IEC 27001:2022 – Annex A Control 8.22 | Segregation of networks. |
| PCI DSS v4.0 – Requirement 1 | Install and maintain network security controls (applicable where payment card data is in scope). |
| NIST SP 800-41 Rev. 1 | Guidelines on firewalls and firewall policy. |

### 3.3 Internal Policy Hierarchy

This policy operates within [Organization Name]'s Information Security Policy framework and is subordinate to the overarching **Information Security Policy** and **Technology Risk Management Framework**. It is supported by the following related documents:

- Network Security Standard
- Change Management Policy
- Vulnerability Management Policy
- Third-Party Risk Management Policy
- Incident Response Policy
- Data Classification and Handling Policy

---

## 4. Definitions and Abbreviations

*Provide clear definitions for technical and regulatory terms used throughout this policy.*

### 4.1 Definitions

| Term | Definition |
|------|-----------|
| **Firewall** | A network security device (hardware, software, or cloud-based) that monitors and controls incoming and outgoing network traffic based on predetermined security rules. |
| **Next-Generation Firewall (NGFW)** | An advanced firewall that includes deep packet inspection, intrusion prevention, application awareness, and user identity tracking capabilities beyond traditional stateful inspection. |
| **Firewall Rule** | A specific configuration entry within a firewall policy that permits or denies network traffic based on defined criteria such as source IP, destination IP, port, protocol, and direction. |
| **DMZ (Demilitarized Zone)** | A network segment positioned between the internal trusted network and an external untrusted network (e.g., the internet), hosting publicly accessible services while isolating them from internal systems. |
| **Network Segmentation** | The practice of dividing a computer network into subnetworks (segments or zones) to improve security posture by limiting lateral movement and reducing the blast radius of security incidents. |
| **Rule Base** | The complete set of firewall rules configured on a firewall device or cluster. |
| **Implicit Deny** | A foundational firewall principle whereby all traffic not explicitly permitted by a rule is automatically denied. |
| **Rule Review** | A periodic examination of firewall rules to validate that each rule remains necessary, correctly configured, and aligned with current business and security requirements. |
| **Orphaned Rule** | A firewall rule that permits access to a system, service, or IP address that no longer exists or is no longer required. |
| **Change Request (CR)** | A formal request to modify firewall configurations, processed through the Change Management process. |
| **Stateful Inspection** | A firewall technique that tracks the state of active connections and makes filtering decisions based on the context of traffic flow. |
| **Zero Trust** | A security model based on the principle of "never trust, always verify," requiring strict verification for every user and device attempting to access resources. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|-------------|---------|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act 2010 |
| NACSA | National Cyber Security Agency |
| CISO | Chief Information Security Officer |
| GCISO | Group Chief Information Security Officer |
| DMZ | Demilitarized Zone |
| NGFW | Next-Generation Firewall |
| ACL | Access Control List |
| VLAN | Virtual Local Area Network |
| VPN | Virtual Private Network |
| IPS | Intrusion Prevention System |
| SOC | Security Operations Centre |
| CR | Change Request |
| CAB | Change Advisory Board |
| RACI | Responsible, Accountable, Consulted, Informed |
| PCI DSS | Payment Card Industry Data Security Standard |
| CII | Critical Information Infrastructure |

---

## 5. Roles and Responsibilities

*Define clear ownership and accountability for all activities governed by this policy. Use the RACI model.*

### 5.1 Role Descriptions

**Board of Directors / Board Risk Committee**
Provides oversight of technology and cyber risk management, ensuring that sufficient investment and governance structures support the effective management of network security risks.

**Chief Information Security Officer (CISO)**
Holds ultimate accountability for the information security posture of [Organization Name], including the effectiveness of firewall controls. The CISO approves this policy and any material exceptions.

**Network Security Manager (Policy Owner)**
Responsible for the day-to-day ownership, maintenance, and enforcement of this policy. The Network Security Manager leads periodic reviews, oversees the firewall rule management lifecycle, and reports on compliance status to the CISO.

**Network Security Engineer / Firewall Administrator**
Technically responsible for implementing, configuring, and maintaining firewall devices and rule bases in accordance with this policy. The Firewall Administrator executes approved change requests and documents all configuration changes.

**Security Operations Centre (SOC) Analyst**
Monitors firewall logs and alerts, identifies anomalous traffic patterns, and escalates potential security incidents in accordance with the Incident Response Policy.

**IT Change Advisory Board (CAB)**
Reviews and approves firewall change requests above a defined risk threshold, ensuring changes are assessed for security impact and business justification prior to implementation.

**Business / Application Owner**
Requests firewall rule changes to support business requirements, provides justification for connectivity needs, and approves the removal of rules associated with their systems during review cycles.

**Internal Audit**
Independently assesses the effectiveness and compliance of firewall management controls and reports findings to the Audit Committee.

**Compliance Officer**
Ensures this policy aligns with applicable regulatory requirements and coordinates regulatory submissions or responses to BNM inquiries related to network security.

**Third-Party / Managed Security Service Provider (MSSP)**
Where firewall operations are outsourced, the MSSP is responsible for implementing and maintaining firewall controls in accordance with this policy and the relevant service agreement.

---

### 5.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Board / BRC | CISO | Network Security Manager | Firewall Administrator | SOC Analyst | CAB | Business Owner | Internal Audit | Compliance |
|----------|------------|------|--------------------------|------------------------|-------------|-----|----------------|----------------|------------|
| Policy approval and issuance | I | A | R | I | I | I | I | C | C |
| Policy annual review | I | A | R | C | C | I | C | C | C |
| Firewall rule change request | I | I | A | R | I | C | R | I | I |
| Firewall change approval (standard) | I | I | A | R | I | C | C | I | I |
| Firewall change approval (significant) | I | C | A | R | I | R | C | I | C |
| Firewall rule implementation | I | I | A | R | I | I | I | I | I |
| Post-implementation review | I | I | A | R | C | I | I | I | I |
| Periodic firewall rule review | I | I | A | R | C | I | C | I | I |
| Emergency change authorization | I | C | A | R | I | I | I | I | I |
| Firewall log monitoring | I | I | C | C | R | I | I | I | I |
| Firewall incident escalation | I | C | C | C | R | I | I | I | I |
| Exception approval | I | A | R | C | I | C | C | I | C |
| Compliance reporting to BNM | C | C | C | I | I | I | I | C | A |
| Internal audit of firewall controls | A | C | C | C | I | I | I | R | C |
| Third-party firewall oversight | I | A | R | C | C | I | I | I | C |

---

## 6. Policy Statements and Requirements

*This section defines the mandatory requirements of the policy. Each statement represents a control obligation.*

### 6.1 General Principles

All firewalls deployed within [Organization Name]'s environment shall adhere to the following foundational principles:

- **Default Deny:** All firewall rule bases shall implement an implicit deny-all rule as the final rule in the rule base. All traffic shall be denied unless explicitly permitted by a documented and approved rule.
- **Least Privilege:** Firewall rules shall grant the minimum network access necessary for a defined business purpose. Overly permissive rules (e.g., "any-to-any") are prohibited.
- **Business Justification:** Every firewall rule must have a documented business justification, an identified rule owner, and an authorized approver. Rules without documented justification shall be treated as candidates for removal during the next review cycle.
- **Separation of Duties:** The individual who requests a firewall rule change shall not be the same individual who approves or implements the change.
- **Auditability:** All firewall configurations, change requests, approvals, and reviews shall be documented and retained in accordance with [Organization Name]'s records retention schedule.

### 6.2 Firewall Deployment Requirements

6.2.1 Firewalls shall be deployed at all network boundaries between zones of different trust levels, including but not limited to:

- Internet perimeter (external-facing boundary)
- DMZ to internal network boundary
- Production to development/staging network boundary
- Internal network to management network boundary
- Third-party and partner interconnects
- Cloud environments connecting to on-premises networks

6.2.2 Firewalls shall be deployed in high-availability (HA) configurations for all production and critical network boundaries to ensure resilience against hardware failure.

6.2.3 Firewall management interfaces (administrative consoles) shall be accessible only from the dedicated management network and shall not be reachable from production or internet-facing networks.

6.2.4 All firewall devices shall be enrolled in [Organization Name]'s asset management system and assigned a designated owner and custodian.

6.2.5 Firewall operating system software and firmware shall be maintained at vendor-supported versions. End-of-life firewall platforms that can no longer receive security patches shall be scheduled for replacement within a timeframe approved by the CISO.

### 6.3 Authentication and Access Control

6.3.1 Administrative access to firewall management consoles shall require multi-factor authentication (MFA).

6.3.2 Firewall administrator accounts shall be individual named accounts. Shared or generic administrative accounts are prohibited, except for documented break-glass emergency access accounts, which shall be subject to session recording and post-use review.

6.3.3 Administrative sessions shall time out after [X] minutes of inactivity.

6.3.4 All administrative actions on firewall devices shall be logged to a centralized log management system, with logs protected from modification or deletion by firewall administrators.

6.3.5 Remote administrative access to firewall consoles shall only be permitted via encrypted protocols (e.g., SSH, HTTPS) and shall be restricted to authorized source IP ranges.

### 6.4 Firewall Configuration Standards

6.4.1 Firewall configurations shall comply with [Organization Name]'s Network Security Standard and any applicable vendor hardening benchmarks (e.g., CIS Benchmarks).

6.4.2 All unused services, ports, and protocols on firewall devices shall be disabled.

6.4.3 Simple Network Management Protocol (SNMP) community strings shall be set to non-default values. SNMP v1 and v2c shall not be used; SNMP v3 with authentication and encryption is required.

6.4.4 Firewall rule bases shall not contain duplicate rules, shadowed rules (rules that can never be matched due to a preceding rule), or rules that conflict with the intended security policy.

6.4.5 Time-limited rules (e.g., for temporary vendor access) shall include an automatic expiry date. Rules that expire shall be automatically disabled and flagged for formal removal.

6.4.6 Firewall configurations shall be backed up at a minimum [daily / after every configuration change], and backups shall be stored in a location separate from the firewall device.

### 6.5 Rule Documentation Requirements

Every firewall rule shall be documented with the following metadata, maintained in [Organization Name]'s firewall rule management system / ITSM tool:

| Metadata Field | Description |
|----------------|-------------|
| Rule ID | Unique identifier for the rule |
| Rule Name / Description | Plain-language description of the rule's purpose |
| Business Justification | The business reason for the connectivity |
| Source IP / Network | Source address(es) permitted by the rule |
| Destination IP / Network | Destination address(es) permitted by the rule |
| Protocol / Port | Protocol and port(s) permitted |
| Direction | Inbound / Outbound / Both |
| Action | Permit / Deny / Log |
| Rule Owner | Business owner responsible for the rule |
| Approved By | Name and role of the approver |
| Approval Date | Date the rule was approved |
| Change Request Reference | Associated CR number |
| Expiry Date | Date after which the rule should be reviewed or removed (if applicable) |
| Last Reviewed Date | Date the rule was last reviewed during a periodic review |
| Review Outcome | Confirmed active / Modified / Removed |

### 6.6 Logging and Monitoring

6.6.1 All firewalls shall be configured to log, at a minimum:

- All traffic permitted or denied against the rule base
- All administrative login attempts (successful and failed)
- All configuration changes
- All firewall system events (e.g., failover, hardware alerts)

6.6.2 Firewall logs shall be forwarded in real time to [Organization Name]'s centralized Security Information and Event Management (SIEM) system.

6.6.3 Firewall log retention shall meet the minimum retention period required by BNM RMiT and [Organization Name]'s records management policy, currently defined as [minimum 3 years / as per regulatory requirement].

6.6.4 The SOC shall monitor firewall alerts and logs continuously (24x7) and shall have documented alert triage procedures for firewall-related events.

---

## 7. Network Segmentation Zones

*Define the network zones established by [Organization Name] and the trust levels assigned to each. Adjust zone names and descriptions to match the actual network architecture.*

### 7.1 Network Zone Framework

[Organization Name] implements a defence-in-depth network architecture based on clearly defined security zones. Each zone is assigned a trust level, and firewall policies govern the permitted traffic flows between zones. Traffic between zones of different trust levels shall pass through a firewall.

### 7.2 Zone Definitions

| Zone ID | Zone Name | Trust Level | Description |
|---------|-----------|-------------|-------------|
| Z01 | External / Internet Zone | Untrusted | The public internet and external networks with no inherent trust. All traffic originating from this zone is treated as potentially hostile. |
| Z02 | DMZ (Public Services Zone) | Low Trust | Hosts publicly accessible services such as web servers, API gateways, and email relay servers. Isolated from the internal network to limit exposure if a DMZ host is compromised. |
| Z03 | Partner / Third-Party Zone | Low-Medium Trust | Hosts connections from external business partners, vendors, and third-party service providers via dedicated VPN or MPLS links. Access is restricted to specific services. |
| Z04 | Internal User Network | Medium Trust | The corporate LAN hosting employee workstations, printers, and general-purpose internal services. Access to production systems is restricted. |
| Z05 | Production Application Zone | High Trust | Hosts core banking systems, business applications, and production databases. Strictly controlled access from all other zones. |
| Z06 | Database Zone | High Trust | Isolates database servers from application servers. Only application servers in Z05 are permitted to initiate connections to database servers in this zone. |
| Z07 | Management Zone | High Trust | Hosts network management systems, monitoring platforms, SIEM, and privileged access workstations (PAWs). Access restricted to authorized administrators only. |
| Z08 | Development / Staging Zone | Medium Trust | Hosts development and test environments. Strictly isolated from production zones (Z05, Z06). No live customer data permitted. |
| Z09 | Cloud Connectivity Zone | Variable | Governs traffic flows between on-premises networks and cloud environments. Trust level is enforced by firewall policy for each cloud service. |
| Z10 | Out-of-Band Management Network | High Trust | Dedicated network for out-of-band management of network and security devices. Isolated from all other zones. |

### 7.3 Inter-Zone Traffic Flow Policy

*Summarize the permitted traffic flows between zones. This table should reflect the organization's actual security requirements. Update to match the network architecture.*

| Source Zone | Destination Zone | Default Policy | Exceptions / Notes |
|-------------|-----------------|----------------|-------------------|
| Z01 (External) | Z02 (DMZ) | Deny all except explicitly permitted ports | HTTP (80), HTTPS (443), SMTP (25) permitted to specific hosts |
| Z02 (DMZ) | Z05 (Production) | Deny all except explicitly permitted | Only application-tier traffic; no direct DB access from DMZ |
| Z02 (DMZ) | Z01 (External) | Deny by default | Outbound permitted for defined update/email relay services only |
| Z03 (Partner) | Z05 (Production) | Deny all except explicitly permitted | Partner-specific rules governed by individual service agreements |
| Z04 (Internal User) | Z05 (Production) | Deny all except explicitly permitted | Access to specific application interfaces only; no direct DB access |
| Z04 (Internal User) | Z01 (External) | Permit HTTP/HTTPS via proxy | All internet traffic routed through web proxy with SSL inspection |
| Z05 (Production) | Z06 (Database) | Deny all except explicitly permitted | Application servers permitted to specific DB ports only |
| Z07 (Management) | All Zones | Permit management protocols to specific hosts | SSH, HTTPS, SNMP v3, RDP only to designated management interfaces |
| Z08 (Dev/Staging) | Z05 (Production) | Deny all | No exceptions permitted; separate environments required |
| Z08 (Dev/Staging) | Z01 (External) | Restricted | Access only via approved proxy; no direct internet access |
| All Zones | Z10 (OOB Mgmt) | Deny all | OOB network access only via Z07 |

### 7.4 Zone Ownership

Each network zone shall have a designated Zone Owner responsible for authorizing access requests to systems within their zone:

| Zone | Zone Owner | Deputy Zone Owner |
|------|-----------|-------------------|
| Z01 – External Zone | Network Security Manager | [Deputy Name / Role] |
| Z02 – DMZ | Network Security Manager | [Deputy Name / Role] |
| Z03 – Partner Zone | Network Security Manager | [Deputy Name / Role] |
| Z04 – Internal User Network | IT Infrastructure Manager | [Deputy Name / Role] |
| Z05 – Production Application Zone | [Application Owner / CTO] | [Deputy Name / Role] |
| Z06 – Database Zone | [DBA Manager / CTO] | [Deputy Name / Role] |
| Z07 – Management Zone | Network Security Manager | [Deputy Name / Role] |
| Z08 – Development / Staging Zone | [Development Manager] | [Deputy Name / Role] |
| Z09 – Cloud Connectivity Zone | Network Security Manager | [Deputy Name / Role] |
| Z10 – OOB Management Network | Network Security Manager | [Deputy Name / Role] |

---

## 8. Firewall Rule Management

*This section governs the lifecycle of firewall rules from initial request through implementation, monitoring, and removal.*

### 8.1 Rule Lifecycle Overview

All firewall rules shall follow a governed lifecycle consisting of the following stages:

```
Request → Review → Approval → Implementation → Testing → Documentation → Monitoring → Periodic Review → Modification or Removal
```

### 8.2 Rule Change Request Process

8.2.1 **Initiation:** Any request to add, modify, or remove a firewall rule shall be submitted through [Organization Name]'s IT Service Management (ITSM) system as a formal Change Request (CR). Verbal or informal requests shall not be actioned.

8.2.2 **Mandatory Information:** The requestor shall provide the following information as part of the CR:

- Business justification for the requested connectivity
- Source IP address(es) or network range(s)
- Destination IP address(es) or network range(s)
- Protocol and port(s) required
- Traffic direction
- Duration (permanent or time-limited; if time-limited, specify expiry date)
- Name of the Business/Application Owner authorizing the request
- Risk assessment (for high-risk or non-standard requests)

8.2.3 **Technical Review:** The Firewall Administrator shall review the CR for technical accuracy and completeness. The Firewall Administrator shall assess:

- Whether the requested rule conflicts with existing rules or the intended security architecture
- Whether the requested access violates inter-zone traffic flow policies (Section 7.3)
- Whether the requested rule can be implemented with more restrictive parameters without impacting the business requirement

8.2.4 **Security Review:** The Network Security Manager shall review all CRs involving:

- New inbound access from the internet (Z01) to any zone
- Access to production systems (Z05, Z06)
- Time-limited rules for external vendors or contractors
- Any rule requiring an exception to the inter-zone traffic flow policy

8.2.5 **Approval Authority:**

| Change Type | Approval Authority |
|-------------|-------------------|
| Standard rule (low risk, internal zones, pre-approved pattern) | Network Security Manager |
| Non-standard rule (production access, internet-facing) | Network Security Manager + CISO |
| Emergency rule (immediate security response) | CISO (retrospective CAB approval within 24 hours) |
| Exception to policy | CISO (documented exception log entry required) |

### 8.3 Implementation and Testing

8.3.1 Approved firewall rule changes shall be implemented by an authorized Firewall Administrator only.

8.3.2 All changes shall be implemented in accordance with [Organization Name]'s Change Management Policy. Changes shall be scheduled within approved maintenance windows unless designated as emergency changes.

8.3.3 Prior to implementation, the Firewall Administrator shall:

- Create a backup of the current firewall configuration.
- Document the pre-change and post-change rule base states.
- Verify the implementation against the approved CR.

8.3.4 Following implementation, the Firewall Administrator shall conduct a post-implementation review to confirm:

- The new rule functions as intended (permitted traffic is flowing).
- No unintended access has been introduced (spot-check denial of prohibited traffic).
- No existing rules have been inadvertently disrupted.

8.3.5 The CR shall be updated to reflect the implementation outcome, and the rule documentation table (Section 6.5) shall be updated accordingly.

### 8.4 Emergency Change Process

8.4.1 In circumstances where an urgent firewall change is required to respond to an active security incident or imminent threat, an emergency change may be implemented subject to:

- Verbal or written authorization from the CISO or delegate.
- Immediate documentation of the change in the ITSM system.
- Retrospective CAB review and approval within [24 / 48] hours.
- Review of the emergency rule within [5 / 7] business days to determine whether it should be made permanent or removed.

8.4.2 Emergency changes shall be logged and tracked separately. The Network Security Manager shall report all emergency changes to the CISO monthly.

### 8.5 Rule Removal

8.5.1 Firewall rules shall be removed when:

- The business requirement or system they support no longer exists.
- The rule has reached its defined expiry date.
- The rule is identified as orphaned, redundant, or incorrectly implemented during a periodic review.
- The associated application or system has been decommissioned.

8.5.2 Rule removal shall follow the standard change management process. Rules shall not be disabled and left indefinitely — disabled rules shall be formally reviewed and either re-enabled with updated documentation or permanently removed within [30] days.

---

## 9. Firewall Rule Review Schedule

*This section defines the mandatory schedule for reviewing firewall rule bases to ensure ongoing appropriateness and compliance with BNM RMiT Clause 10.38.*

### 9.1 Review Objectives

Periodic firewall rule reviews are conducted to:

- Verify that all active rules remain necessary and have a valid, documented business justification.
- Identify and remove orphaned, redundant, overly permissive, or incorrectly configured rules.
- Confirm that rules comply with the inter-zone traffic flow policy (Section 7.3).
- Verify that all rules are associated with an identifiable rule owner.
- Detect any unauthorized changes made outside the formal change management process.
- Produce evidence for internal audit and regulatory compliance purposes.

### 9.2 Review Schedule

| Review Type | Scope | Frequency | Responsible Party | Approver |
|-------------|-------|-----------|-------------------|---------|
| **Full Rule Base Review** | All rules on all production firewalls | Annually (minimum) | Network Security Manager + Firewall Administrator | CISO |
| **High-Risk Rule Review** | Rules permitting inbound internet access; rules granting access to Z05/Z06 | Semi-annually | Network Security Manager | CISO |
| **Time-Limited Rule Review** | All rules with defined expiry dates | Monthly | Firewall Administrator | Network Security Manager |
| **Third-Party Access Rule Review** | All rules associated with vendor or partner access | Quarterly | Network Security Manager + Business Owner | CISO |
| **Post-Incident Review** | Rules relevant to the incident scope | Following every material security incident | SOC Lead + Network Security Manager | CISO |
| **Configuration Drift Review** | Comparison of running configuration against approved baseline | Monthly (automated where possible) | Firewall Administrator | Network Security Manager |
| **Decommissioned System Review** | Rules associated with decommissioned systems | Upon each system decommission | Firewall Administrator + Application Owner | Network Security Manager |

### 9.3 Review Methodology

**Step 1 – Rule Inventory Export**
Export the complete rule base from all in-scope firewall devices. Compare the exported rule base against the official rule documentation register to identify any undocumented rules.

**Step 2 – Rule Validation**
For each rule, confirm the following:

- [ ] The source and destination IP addresses/ranges exist and are active.
- [ ] The permitted ports and protocols are still required.
- [ ] The rule has a documented business justification.
- [ ] The rule owner has been contacted and confirms the rule is still required.
- [ ] The rule complies with the inter-zone traffic flow policy.
- [ ] The rule does not duplicate or shadow another rule.
- [ ] The rule has not exceeded its expiry date.

**Step 3 – Risk Assessment**
Assess each rule for risk. Rules meeting any of the following criteria shall be escalated to the Network Security Manager for decision:

- Rules permitting "any" as source or destination
- Rules permitting well-known vulnerable ports (e.g., Telnet TCP/23, FTP TCP/21) inbound from the internet
- Rules without an identifiable owner
- Rules that have not been reviewed in more than 12 months

**Step 4 – Remediation**
For each rule identified for modification or removal, raise a Change Request per the process defined in Section 8.2.

**Step 5 – Documentation and Sign-Off**
Complete the Review Sign-Off Register (Appendix C) for each review cycle. The Network Security Manager shall sign off the completed review, and a summary report shall be submitted to the CISO.

### 9.4 Review Tracking Register

*The following register shall be maintained and updated after each review cycle.*

| Review Cycle | Review Type | Firewall Scope | Review Date | Reviewer | Rules Reviewed | Rules Modified | Rules Removed | Outstanding Actions | Sign-Off | Sign-Off Date |
|-------------|-------------|----------------|-------------|---------|---------------|---------------|--------------|--------------------|---------|----|
| [2026-H1] | Full Rule Base | [All Production] | [Date] | [Reviewer Name] | [#] | [#] | [#] | [Y/N] | [Manager Name] | [Date] |
| [2026-Q1] | Third-Party Access | [Perimeter FW] | [Date] | [Reviewer Name] | [#] | [#] | [#] | [Y/N] | [Manager Name] | [Date] |
| [2026-01] | Time-Limited Rules | [All] | [Date] | [Reviewer Name] | [#] | [#] | [#] | [Y/N] | [Manager Name] | [Date] |

---

## 10. Network Architecture Diagram

*This section provides a visual representation of [Organization Name]'s network security zones and the firewall placement within the architecture. Diagrams must be maintained as controlled documents and updated whenever significant network changes occur.*

### 10.1 Network Topology Overview

*Insert [Organization Name]'s network architecture diagram here. The diagram should illustrate all network security zones defined in Section 7, the placement of firewall devices at zone boundaries, and the primary traffic flows between zones. Diagrams should be maintained in a vector format (e.g., Visio, draw.io) and exported to PDF for inclusion in this document.*

**[PLACEHOLDER: Insert Network Architecture Diagram — see guidance below]**

The network architecture diagram shall depict, at minimum:

- All network security zones (Z01 through Z10 as defined in Section 7.2)
- The physical or logical placement of all production firewall devices and clusters
- Internet connectivity points and upstream ISP connections
- DMZ hosting and publicly accessible service placement
- Partner/third-party connection points (VPN concentrators, MPLS handoffs)
- Core internal network segmentation
- Cloud connectivity gateways and associated firewall controls
- Out-of-band management network isolation
- High-availability firewall cluster relationships

### 10.2 Firewall Device Inventory

*List all firewall devices within scope of this policy. This table shall be kept current and reconciled against the asset management system quarterly.*

| Device ID | Hostname | Device Type | Model / Platform | Location | Zone Boundary Protected | HA Pair | Firmware Version | Last Patched | Owner |
|-----------|---------|-------------|-----------------|----------|------------------------|---------|-----------------|-------------|-------|
| FW-001 | [hostname] | NGFW | [Vendor/Model] | [DC / Cloud] | Z01–Z02 (Internet Perimeter) | FW-002 | [Version] | [Date] | Network Security Manager |
| FW-002 | [hostname] | NGFW | [Vendor/Model] | [DC / Cloud] | Z01–Z02 (Internet Perimeter) | FW-001 | [Version] | [Date] | Network Security Manager |
| FW-003 | [hostname] | NGFW | [Vendor/Model] | [DC] | Z02–Z04/Z05 (DMZ–Internal) | FW-004 | [Version] | [Date] | Network Security Manager |
| FW-004 | [hostname] | NGFW | [Vendor/Model] | [DC] | Z02–Z04/Z05 (DMZ–Internal) | FW-003 | [Version] | [Date] | Network Security Manager |
| FW-005 | [hostname] | Virtual FW | [Vendor/Model] | [Cloud] | Z09 Cloud Connectivity | N/A | [Version] | [Date] | Network Security Manager |
| [FW-XXX] | [hostname] | [Type] | [Vendor/Model] | [Location] | [Zone boundary] | [Pair] | [Version] | [Date] | [Owner] |

### 10.3 Diagram Version Control

Architecture diagrams included in or referenced by this policy shall be maintained under version control:

| Diagram | Version | Last Updated | Updated By | Approved By |
|---------|---------|-------------|------------|-------------|
| Network Security Zone Overview | [1.0] | [Date] | [Name] | [Name] |
| Internet Perimeter Firewall Detail | [1.0] | [Date] | [Name] | [Name] |
| DMZ Architecture | [1.0] | [Date] | [Name] | [Name] |
| Cloud Connectivity Architecture | [1.0] | [Date] | [Name] | [Name] |

---

## 11. Exceptions and Deviations

*This section governs situations where compliance with this policy is not immediately achievable or where a legitimate business requirement necessitates a deviation.*

### 11.1 Exception Request Process

11.1.1 Any request to deviate from a requirement of this policy shall be submitted to the Network Security Manager using the Policy Exception Request Form (Appendix D).

11.1.2 The Network Security Manager shall assess the exception request and forward it to the CISO for approval. Exceptions with material risk implications shall be escalated to the Technology Risk Committee.

11.1.3 No exception shall be granted indefinitely. All exceptions shall be time-bound, with a maximum duration of [12 months], subject to renewal.

11.1.4 During the exception period, the requestor shall implement compensating controls to mitigate the risk introduced by the deviation.

### 11.2 Exception Register

All approved exceptions shall be recorded in the Exception Register:

| Exception ID | Date Raised | Policy Clause | Description of Deviation | Business Justification | Compensating Controls | Risk Level | Approved By | Approval Date | Expiry Date | Review Date |
|-------------|------------|--------------|--------------------------|------------------------|----------------------|-----------|------------|--------------|------------|------------|
| EXC-001 | [Date] | [Clause #] | [Description] | [Justification] | [Controls] | [H/M/L] | [Approver] | [Date] | [Date] | [Date] |

---

## 12. Compliance Monitoring and Audit

### 12.1 Key Performance Indicators

*Track the effectiveness of firewall management through measurable indicators.*

| KPI | Target | Measurement Frequency | Responsible Party |
|-----|--------|----------------------|-------------------|
| Percentage of firewall rules with documented business justification | 100% | Quarterly | Network Security Manager |
| Percentage of firewall rules reviewed within the scheduled cycle | 100% | Per review cycle | Network Security Manager |
| Number of unauthorized firewall changes detected | 0 | Monthly | Firewall Administrator |
| Time to implement approved firewall change requests | ≤ [X] business days (standard) | Monthly | Firewall Administrator |
| Percentage of time-limited rules removed by expiry date | 100% | Monthly | Firewall Administrator |
| Firewall uptime (HA pair availability) | ≥ 99.99% | Monthly | Network Security Manager |
| Percentage of firewall devices on supported firmware | 100% | Quarterly | Network Security Manager |
| Number of open policy exceptions | ≤ [X] | Monthly | Network Security Manager |

### 12.2 Internal Audit

Internal Audit shall conduct an independent review of firewall management controls at least annually. The review shall assess:

- Compliance of firewall configurations with this policy and applicable standards.
- Effectiveness of the change management process for firewall rules.
- Accuracy and completeness of firewall rule documentation.
- Adequacy of the periodic rule review program.
- Timeliness of remediation of identified issues.

Audit findings and management responses shall be tracked to closure and reported to the Audit Committee.

### 12.3 Regulatory Examination

In the event of a BNM examination or inquiry relating to network security controls, the Network Security Manager shall coordinate with the Compliance Officer to:

- Prepare evidence of firewall control effectiveness, including review records, change logs, and audit reports.
- Respond to information requests within required timelines.
- Implement any remediation actions required by BNM within agreed timeframes.

---

## 13. Incident Response and Escalation

### 13.1 Firewall-Related Security Incidents

In the event of a security incident involving firewall controls (e.g., unauthorized configuration change, exploitation of a firewall vulnerability, detected policy bypass), the following escalation path shall apply:

1. **Detection:** SOC Analyst detects and raises a security alert or incident ticket.
2. **Triage:** SOC Lead or Network Security Manager triages the incident to determine severity.
3. **Containment:** Firewall Administrator implements emergency containment rules if required (per Section 8.4).
4. **Escalation:** CISO is notified for all high-severity firewall incidents.
5. **BNM Notification:** Compliance Officer assesses whether the incident meets BNM's reporting threshold under RMiT and initiates regulatory notification if required.
6. **Post-Incident Review:** A post-incident review is conducted within [5 / 10] business days and findings are used to improve firewall controls.

### 13.2 Escalation Matrix

| Incident Severity | Initial Responder | Escalation Level 1 | Escalation Level 2 | Regulatory Notification |
|------------------|------------------|--------------------|--------------------|------------------------|
| Critical (P1) | SOC Analyst | Network Security Manager (≤ 15 min) | CISO (≤ 30 min) | BNM (assess within 1 hour) |
| High (P2) | SOC Analyst | Network Security Manager (≤ 1 hour) | CISO (≤ 4 hours) | BNM (assess within 24 hours) |
| Medium (P3) | SOC Analyst | Network Security Manager (≤ 4 hours) | — | Internal reporting only |
| Low (P4) | SOC Analyst | Firewall Administrator | — | Internal reporting only |

---

## 14. Review and Approval

### 14.1 Policy Review

This policy shall be reviewed at minimum annually, or earlier in the event of:

- Significant changes to [Organization Name]'s network architecture.
- Material changes to BNM RMiT or other applicable regulatory requirements.
- Significant security incidents involving firewall controls.
- Material changes to the threat landscape that affect network security risk.
- Organizational restructuring affecting the roles defined in Section 5.

### 14.2 Version History

| Version | Date | Author | Summary of Changes |
|---------|------|--------|--------------------|
| 1.0 | [Date] | [Author Name] | Initial issue of document. |
| [1.1] | [Date] | [Author Name] | [Description of changes made] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 14.3 Approval Sign-Off

*By signing below, the approvers confirm that they have reviewed this policy and that it is fit for purpose, compliant with applicable regulatory requirements, and approved for implementation.*

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Policy Owner – Network Security Manager | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Risk Officer (CRO) | [Name] | | [Date] |
| Compliance Officer | [Name] | | [Date] |
| Chief Technology Officer (CTO) | [Name] | | [Date] |

---

## 15. References

### 15.1 Regulatory References

| Reference | Document Title | Relevant Clause(s) | Issuing Body |
|-----------|---------------|-------------------|--------------|
| BNM RMiT | Risk Management in Technology | Clause 10.38 (Firewall controls), Clause 10.30–10.37 (Network security), Clause 11 (Cyber risk) | Bank Negara Malaysia |
| PDPA 2010 | Personal Data Protection Act 2010 | All provisions relating to protection of personal data processed within network environments | Parliament of Malaysia |
| NACSA Guidelines | National Cyber Security Policy and Cybersecurity Framework | CII protection requirements relating to network security | NACSA Malaysia |

### 15.2 Standards References

| Reference | Document Title | Relevant Section(s) |
|-----------|---------------|---------------------|
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A Control 8.20 (Network security), 8.22 (Segregation of networks), 8.15 (Logging) |
| ISO/IEC 27002:2022 | Information Security Controls | Section 8.20, 8.22 |
| PCI DSS v4.0 | Payment Card Industry Data Security Standard | Requirement 1 (Network security controls) |
| NIST SP 800-41 Rev. 1 | Guidelines on Firewalls and Firewall Policy | All sections |
| CIS Controls v8 | CIS Critical Security Controls | Control 12 (Network infrastructure management) |
| NIST SP 800-53 Rev. 5 | Security and Privacy Controls | SC-7 (Boundary protection) |

### 15.3 Internal Documents

| Document Title | Document ID |
|---------------|-------------|
| Information Security Policy | [Document ID] |
| Technology Risk Management Framework | [Document ID] |
| Network Security Standard | [Document ID] |
| Change Management Policy | [Document ID] |
| Vulnerability Management Policy | [Document ID] |
| Third-Party Risk Management Policy | [Document ID] |
| Incident Response Policy | [Document ID] |
| Data Classification and Handling Policy | [Document ID] |
| Access Control Policy | [Document ID] |
| Records Management Policy | [Document ID] |

---

## 16. Appendices

### Appendix A – Firewall Rule Request Form Template

*This form shall be completed by the requestor when submitting a firewall rule change request through the ITSM system.*

---

**FIREWALL RULE CHANGE REQUEST FORM**

| Field | Details |
|-------|---------|
| **Request Date** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Department** | [Department] |
| **Requestor Contact** | [Email / Phone] |
| **Business / Application Owner** | [Name and Title] |
| **Priority** | [ ] Standard [ ] Urgent [ ] Emergency |
| **Requested Implementation Date** | [Date] |

**Connectivity Requirements:**

| Field | Details |
|-------|---------|
| **Source IP / Hostname / Network** | [e.g., 10.10.1.0/24 / server-prod-01] |
| **Destination IP / Hostname / Network** | [e.g., 10.20.5.10 / api.partner.com] |
| **Protocol** | [TCP / UDP / ICMP / Other] |
| **Port(s)** | [e.g., 443 / 8080 / 3306] |
| **Direction** | [ ] Inbound [ ] Outbound [ ] Both |
| **Action** | [ ] Permit [ ] Deny |
| **Duration** | [ ] Permanent [ ] Time-Limited (specify expiry: [Date]) |

**Business Justification:**

[Requestor to provide a clear explanation of the business reason for the requested connectivity. Include the system or application name, the service or data being accessed, and why this connectivity is required.]

**Risk Considerations:**

[Requestor to identify any known risks associated with the request and any mitigating factors.]

**Approvals:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Business / Application Owner | | | |
| Network Security Manager | | | |
| CISO (if required) | | | |

---

### Appendix B – Firewall Rule Review Checklist

*Use this checklist during each periodic review cycle for each rule under review.*

**Rule Review Checklist**

| # | Review Item | Yes | No | N/A | Notes |
|---|-------------|-----|----|-----|-------|
| 1 | Does the rule have a documented business justification? | | | | |
| 2 | Has the rule owner been confirmed as active and aware of the rule? | | | | |
| 3 | Is the source IP/network range still valid and in use? | | | | |
| 4 | Is the destination IP/network range still valid and in use? | | | | |
| 5 | Are the protocol and port(s) still required? | | | | |
| 6 | Does the rule comply with the inter-zone traffic flow policy? | | | | |
| 7 | Is the rule implemented with the minimum required access (least privilege)? | | | | |
| 8 | Is the rule free from duplication with any other rule in the base? | | | | |
| 9 | Is the rule free from shadowing (reachable in the rule base)? | | | | |
| 10 | Has the rule passed its expiry date (if time-limited)? | | | | |
| 11 | Has the associated system/application been decommissioned? | | | | |
| 12 | Is the rule associated with an approved Change Request? | | | | |

**Review Outcome:** [ ] Confirmed Active (no change) [ ] Modify (raise CR) [ ] Remove (raise CR)

**Reviewer:** [Name] **Date:** [Date]

**Network Security Manager Sign-Off:** [Name] **Date:** [Date]

---

### Appendix C – Firewall Rule Review Sign-Off Register

*Completed at the conclusion of each scheduled review cycle.*

---

**FIREWALL RULE REVIEW SIGN-OFF REGISTER**

| Field | Details |
|-------|---------|
| **Review Period** | [e.g., H1 2026 / Q1 2026 / January 2026] |
| **Review Type** | [Full Rule Base / High-Risk / Third-Party / Time-Limited / Other] |
| **Firewalls Reviewed** | [List device IDs and hostnames] |
| **Review Start Date** | [Date] |
| **Review Completion Date** | [Date] |

**Review Summary:**

| Metric | Count |
|--------|-------|
| Total rules reviewed | [#] |
| Rules confirmed active (no change) | [#] |
| Rules modified (CR raised) | [#] |
| Rules removed (CR raised) | [#] |
| Orphaned rules identified | [#] |
| Rules pending owner confirmation | [#] |
| Rules escalated for exception review | [#] |

**Outstanding Actions:**

| Action | Rule ID | Responsible Party | Target Date | Status |
|--------|---------|-------------------|-------------|--------|
| [Description] | [Rule ID] | [Name] | [Date] | [Open/Closed] |

**Sign-Off:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Lead Reviewer (Firewall Administrator) | | | |
| Network Security Manager | | | |
| CISO | | | |

---

### Appendix D – Policy Exception Request Form

*Submit this form to request a documented exception to a requirement of this policy.*

---

**FIREWALL MANAGEMENT POLICY — EXCEPTION REQUEST FORM**

| Field | Details |
|-------|---------|
| **Exception ID** | [To be assigned by Network Security Manager] |
| **Date of Request** | [Date] |
| **Requestor Name and Title** | [Name / Title] |
| **Department / Business Unit** | [Department] |
| **Policy Clause Reference** | [e.g., Clause 6.2.2 — High-availability deployment requirement] |

**Description of Required Deviation:**

[Describe clearly what policy requirement cannot be met and the nature of the deviation being requested.]

**Business Justification:**

[Explain why compliance with the policy requirement is not currently feasible, including technical or business constraints.]

**Risk Assessment:**

| Risk | Likelihood | Impact | Inherent Risk Rating |
|------|-----------|--------|---------------------|
| [Description of risk introduced by the deviation] | [H/M/L] | [H/M/L] | [H/M/L] |

**Proposed Compensating Controls:**

[Describe the controls that will be implemented to mitigate the risk introduced by the deviation for the duration of the exception period.]

**Requested Exception Duration:** From [Date] to [Date]

**Approvals:**

| Role | Name | Signature | Date | Decision |
|------|------|-----------|------|---------|
| Network Security Manager | | | | [ ] Approve [ ] Reject |
| CISO | | | | [ ] Approve [ ] Reject |
| Technology Risk Committee (if required) | | | | [ ] Approve [ ] Reject |

---

### Appendix E – Glossary of Firewall Ports and Protocols Reference

*This appendix provides a quick reference for commonly used ports and protocols referenced in firewall rule management. It does not represent an approval to permit these services — all rules require formal approval per Section 8.*

| Port | Protocol | Service | Notes |
|------|----------|---------|-------|
| 22 | TCP | SSH | Secure Shell — remote administration |
| 25 | TCP | SMTP | Email relay — restrict to authorized mail gateways |
| 53 | TCP/UDP | DNS | Domain Name System — restrict to authorized DNS servers |
| 80 | TCP | HTTP | Web traffic — consider enforcing HTTPS redirect |
| 123 | UDP | NTP | Network Time Protocol — restrict to authorized NTP sources |
| 161/162 | UDP | SNMP | Network management — SNMPv3 only; restrict to management zone |
| 389 | TCP | LDAP | Directory services — prefer LDAPS (636) |
| 443 | TCP | HTTPS | Secure web traffic |
| 636 | TCP | LDAPS | Secure LDAP |
| 1433 | TCP | MS SQL | Microsoft SQL Server — restrict to application zone only |
| 1521 | TCP | Oracle DB | Oracle database — restrict to application zone only |
| 3306 | TCP | MySQL/MariaDB | MySQL database — restrict to application zone only |
| 3389 | TCP | RDP | Remote Desktop Protocol — restrict to management zone only; MFA required |
| 5432 | TCP | PostgreSQL | PostgreSQL database — restrict to application zone only |
| 8080/8443 | TCP | Alt HTTP/HTTPS | Alternate web ports — document justification |

---

*End of Document*

---

**Document Control**

| Field | Details |
|-------|---------|
| Document Title | Firewall Management Policy |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Network Security Manager |
| Next Review Date | [Next Review Date] |
| Framework Reference | BNM RMiT Clause 10.38 |

*This document is subject to annual review. Printed copies are uncontrolled. Always refer to the document management system for the current version.*