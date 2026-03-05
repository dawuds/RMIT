# Wireless Security Policy

---

| **Field** | **Details** |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Network Operations Manager |
| **Department** | [Department Name] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | BNM Risk Management in Technology (RMiT) |
| **Applicable RMiT Clauses** | 10.40 |

---

> **Document Classification Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of regulatory obligations under Bank Negara Malaysia (BNM) guidelines and the Personal Data Protection Act 2010 (PDPA).

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Acronyms](#4-definitions-and-acronyms)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Policy Statements and Requirements](#6-policy-statements-and-requirements)
7. [Network Segmentation Zones](#7-network-segmentation-zones)
8. [Firewall Rule Review Schedule](#8-firewall-rule-review-schedule)
9. [Network Architecture Diagram](#9-network-architecture-diagram)
10. [Compliance and Enforcement](#10-compliance-and-enforcement)
11. [Exceptions and Waivers](#11-exceptions-and-waivers)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose

*This section defines the intent and rationale for the Wireless Security Policy. Articulate why this policy exists, the risks it addresses, and its alignment with regulatory obligations.*

This Wireless Security Policy ("Policy") establishes the security requirements and standards governing the deployment, configuration, management, and monitoring of wireless networks within [Organization Name]. The Policy ensures that wireless infrastructure is secured against unauthorized access, eavesdropping, denial-of-service attacks, and other cyber threats that may compromise the confidentiality, integrity, and availability of [Organization Name]'s information assets and customer data.

This Policy is established in compliance with Bank Negara Malaysia's (BNM) **Risk Management in Technology (RMiT)** policy document, specifically **Clause 10.40**, which mandates that financial institutions implement robust controls over wireless network environments. Failure to comply with this Policy may expose [Organization Name] to regulatory sanctions, reputational damage, and financial loss.

The objectives of this Policy are to:

- Define minimum security requirements for all wireless network deployments.
- Ensure wireless networks are properly segmented to protect sensitive systems and data.
- Establish accountability for wireless network security across relevant functions.
- Provide a consistent and auditable framework for the governance of wireless technologies.
- Support [Organization Name]'s broader Information Security Management System (ISMS) and risk management obligations.

---

## 2. Scope

*This section identifies all systems, people, locations, and processes to which this policy applies. Be specific to avoid ambiguity during audits.*

### 2.1 In-Scope Systems and Assets

This Policy applies to all wireless network infrastructure owned, operated, leased, or managed by [Organization Name], including but not limited to:

- All Wi-Fi networks (IEEE 802.11 standards) deployed across [Organization Name] premises.
- Wireless access points (WAPs), wireless LAN controllers (WLCs), and associated management consoles.
- Bluetooth-enabled devices used for business purposes on [Organization Name] premises.
- Guest wireless networks and customer-facing Wi-Fi portals.
- Wireless networks deployed in data centres, branches, head offices, and disaster recovery sites.
- Temporary or event-based wireless deployments.
- Wireless networks extending to third-party managed facilities where [Organization Name] data transits.

### 2.2 In-Scope Personnel

This Policy applies to:

- All permanent employees of [Organization Name].
- Contract staff, vendors, and third-party service providers who access or manage wireless networks.
- System administrators, network engineers, and IT operations personnel.
- End users connecting personal or corporate devices to [Organization Name] wireless networks.

### 2.3 Geographic Scope

This Policy applies across all [Organization Name] locations within Malaysia, including:

| Location Type | Examples |
|---|---|
| Head Office | [Head Office Address] |
| Regional Offices | [List of Regional Offices] |
| Branch Network | [Number] branches nationwide |
| Data Centre(s) | [Primary DC Location], [DR Site Location] |
| Disaster Recovery Site | [DR Site Address] |

### 2.4 Out-of-Scope

The following are explicitly excluded from this Policy:

- Wired network infrastructure (governed by the Network Security Policy).
- Mobile data networks (4G/5G) accessed via personal SIM cards on employee devices, unless routed through organizational VPN.
- Home-based networks of remote workers (addressed under the Remote Working Policy).

---

## 3. Regulatory and Policy Context

*This section anchors the policy to its regulatory obligations and internal policy hierarchy. Reference all applicable external regulations and internal policies.*

### 3.1 Regulatory Obligations

[Organization Name] is subject to the following regulatory requirements that necessitate this Policy:

| Regulation / Guideline | Issuing Authority | Relevant Provision |
|---|---|---|
| Risk Management in Technology (RMiT) | Bank Negara Malaysia (BNM) | Clause 10.40 – Wireless Network Security |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Data Security Principles |
| Financial Services Act 2013 (FSA) / Islamic Financial Services Act 2013 (IFSA) | Parliament of Malaysia | Section 47 – Technology Risk |
| Guidelines on Operational Risk (as applicable) | BNM | Technology Risk Controls |
| NACSA National Cyber Security Policy | NACSA | Critical Information Infrastructure Protection |

### 3.2 Internal Policy Hierarchy

This Policy operates within [Organization Name]'s Information Security policy framework and must be read in conjunction with:

- Information Security Policy (Master Policy)
- Network Security Policy
- Access Control Policy
- Acceptable Use Policy
- Incident Response Policy
- Third-Party and Vendor Management Policy
- Data Classification Policy
- Remote Working Policy

### 3.3 Standards Alignment

Where applicable, this Policy is aligned with internationally recognized standards:

- **ISO/IEC 27001:2022** – Information Security Management Systems
- **ISO/IEC 27002:2022** – Information Security Controls (Control 8.20 – Network Security)
- **NIST SP 800-153** – Guidelines for Securing Wireless Local Area Networks (WLANs)
- **PCI DSS v4.0** – Requirement 1, 2, and 6 (where cardholder data environments are applicable)

---

## 4. Definitions and Acronyms

*Define all technical terms and abbreviations used in this document to ensure clarity for all readers, including auditors unfamiliar with internal terminology.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Wireless Network** | Any network that uses radio frequency (RF) transmission to enable devices to communicate without physical cable connections. |
| **Wireless Access Point (WAP)** | A hardware device that creates a wireless local area network (WLAN) by transmitting and receiving radio frequency signals. |
| **SSID (Service Set Identifier)** | The name of a wireless network broadcast by an access point. |
| **WPA3 (Wi-Fi Protected Access 3)** | The latest Wi-Fi security standard providing enhanced encryption and authentication. |
| **WLAN Controller** | A centralized device used to manage multiple wireless access points within an enterprise network. |
| **Rogue Access Point** | An unauthorized wireless access point connected to a network without the knowledge or approval of IT administration. |
| **Evil Twin Attack** | A type of wireless attack where a malicious access point mimics a legitimate SSID to intercept communications. |
| **Network Segmentation** | The practice of dividing a network into distinct segments to limit access and contain security breaches. |
| **DMZ (Demilitarized Zone)** | A network segment that acts as a buffer between an internal trusted network and an untrusted external network. |
| **VLAN (Virtual Local Area Network)** | A logical network segment created within a physical network to isolate traffic. |
| **MAC Address Filtering** | A security measure that restricts wireless access based on the hardware address of network interface cards. |
| **IDS/IPS** | Intrusion Detection System / Intrusion Prevention System – tools used to monitor and respond to malicious network activity. |
| **RADIUS** | Remote Authentication Dial-In User Service – a protocol used for centralized authentication, authorization, and accounting. |
| **VPN (Virtual Private Network)** | An encrypted tunnel that secures communications between a device and a network. |
| **Penetration Testing** | A simulated cyberattack conducted to identify vulnerabilities in a system or network. |

### 4.2 Acronyms

| Acronym | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |
| PDPA | Personal Data Protection Act |
| NACSA | National Cyber Security Agency |
| WAP | Wireless Access Point |
| WLC | Wireless LAN Controller |
| SSID | Service Set Identifier |
| VLAN | Virtual Local Area Network |
| DMZ | Demilitarized Zone |
| ISMS | Information Security Management System |
| IDS | Intrusion Detection System |
| IPS | Intrusion Prevention System |
| MFA | Multi-Factor Authentication |
| RBAC | Role-Based Access Control |
| SLA | Service Level Agreement |
| CISO | Chief Information Security Officer |
| IT | Information Technology |
| RF | Radio Frequency |

---

## 5. Roles and Responsibilities

*This section assigns accountability for wireless network security using a RACI framework. Ensure that every owner is a named role (not a person) to maintain continuity across personnel changes.*

### 5.1 RACI Matrix

The following RACI matrix defines responsibilities for key wireless security activities:

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Network Operations Manager | CISO / Head of IT Security | IT Security Team | System Administrators | End Users | Internal Audit | Risk & Compliance |
|---|---|---|---|---|---|---|---|
| Policy ownership and annual review | A/R | C | C | I | I | I | C |
| Wireless network design and architecture | A/R | C | C | R | I | I | I |
| Wireless access point deployment and configuration | A | R | C | R | I | I | I |
| SSID and VLAN segmentation configuration | A | C | R | R | I | I | I |
| Wireless encryption standard enforcement | A | C | R | R | I | I | I |
| User authentication and access control | C | A | R | R | I | I | C |
| Wireless intrusion detection monitoring | C | A | R | R | I | I | I |
| Rogue access point detection and response | A | C | R | R | I | I | I |
| Firewall rule review and management | A | C | R | R | I | I | I |
| Guest network provisioning and management | A | C | R | R | I | I | I |
| Annual wireless penetration testing | C | A | R | C | I | I | C |
| Compliance monitoring and reporting | C | A | R | C | I | R | R |
| Exception management and waivers | C | A | R | C | C | I | R |
| Incident response – wireless security events | A | C | R | R | I | I | I |
| Third-party wireless vendor oversight | A | C | C | R | I | I | C |
| Training and awareness | C | A | R | C | R | I | C |
| Policy compliance audit | I | C | I | I | I | A/R | C |

### 5.2 Role Descriptions

#### 5.2.1 Network Operations Manager

The Network Operations Manager holds primary accountability for this Policy and is responsible for:

- Owning and maintaining the Wireless Security Policy.
- Overseeing the design, deployment, and ongoing management of wireless network infrastructure.
- Ensuring all wireless deployments comply with this Policy and applicable regulatory requirements.
- Approving wireless network architecture changes.
- Coordinating the annual policy review and obtaining approval from the CISO.
- Reporting wireless security metrics to senior management.

#### 5.2.2 Chief Information Security Officer (CISO) / Head of IT Security

The CISO is accountable for:

- Approving this Policy and any material amendments.
- Providing strategic direction for wireless network security.
- Ensuring wireless security risk is appropriately captured in the organizational risk register.
- Reporting wireless security posture to the Board Risk Committee and relevant BNM touchpoints.

#### 5.2.3 IT Security Team

The IT Security Team is responsible for:

- Defining and enforcing wireless security standards and configurations.
- Monitoring wireless networks for security incidents and anomalies.
- Conducting or coordinating wireless vulnerability assessments and penetration tests.
- Reviewing and approving firewall rules applicable to wireless network segments.
- Managing wireless intrusion detection/prevention systems.

#### 5.2.4 System Administrators / Network Engineers

System Administrators and Network Engineers are responsible for:

- Implementing wireless configurations as specified in this Policy.
- Managing access points, wireless controllers, and associated infrastructure.
- Performing routine maintenance and patching of wireless systems.
- Responding to technical wireless security incidents as directed.

#### 5.2.5 End Users

All end users are responsible for:

- Complying with this Policy and the Acceptable Use Policy when connecting to wireless networks.
- Reporting suspected rogue access points or wireless anomalies to the IT Security Team.
- Not connecting unauthorized wireless devices to [Organization Name] networks.

#### 5.2.6 Internal Audit

Internal Audit is responsible for:

- Independently auditing compliance with this Policy on a scheduled basis.
- Reporting audit findings to the Audit Committee and relevant management.

#### 5.2.7 Risk and Compliance

The Risk and Compliance function is responsible for:

- Maintaining the regulatory mapping of this Policy to BNM RMiT obligations.
- Tracking exceptions and reporting compliance posture.
- Supporting the Network Operations Manager in regulatory submissions related to wireless security.

---

## 6. Policy Statements and Requirements

*This section is the core of the policy. Each subsection articulates a mandatory security requirement. Use clear, normative language (e.g., "must", "shall", "is prohibited"). Reference specific technical standards where applicable.*

### 6.1 General Wireless Security Principles

All wireless networks operated by [Organization Name] **must** adhere to the following overarching principles:

- **Defence in Depth:** Wireless security controls must be layered. No single control should be relied upon as the sole protection mechanism.
- **Least Privilege:** Access to wireless networks must be granted on a need-to-access basis and aligned with users' job functions.
- **Segregation of Duties:** Personnel responsible for configuring wireless networks must not be solely responsible for auditing those configurations.
- **Continuous Monitoring:** All wireless networks must be subject to real-time or near-real-time monitoring for security events.
- **Risk-Based Approach:** Security controls must be proportionate to the classification of data transmitted over the wireless network.

### 6.2 Wireless Network Encryption Standards

#### 6.2.1 Mandatory Encryption

All wireless networks operated by [Organization Name] **must** use strong encryption in accordance with the following requirements:

| Network Type | Minimum Encryption Standard | Preferred Standard |
|---|---|---|
| Corporate (Staff) Network | WPA2-Enterprise (AES/CCMP) | WPA3-Enterprise |
| Management Network | WPA3-Enterprise | WPA3-Enterprise |
| Guest Network | WPA2-Personal (AES/CCMP) | WPA3-SAE |
| IoT / Operational Network | WPA2-Enterprise (AES/CCMP) | WPA3-Enterprise |

#### 6.2.2 Prohibited Encryption Standards

The following encryption standards are **strictly prohibited** across all wireless networks:

- WEP (Wired Equivalent Privacy) – in all forms.
- WPA (Wi-Fi Protected Access) with TKIP encryption.
- Open (unencrypted) wireless networks, except where explicit compensating controls (e.g., captive portals with TLS) are in place and approved by the CISO.
- Any deprecated or vendor-proprietary encryption scheme not meeting the minimum standard above.

#### 6.2.3 Transition Timeline

Where existing deployments use protocols below the minimum standard, a remediation plan **must** be submitted to the CISO within **[30] days** of this Policy becoming effective. A remediation deadline of **[Date]** is mandated.

### 6.3 Wireless Authentication and Access Control

#### 6.3.1 Corporate Network Authentication

Access to the corporate wireless network **must** be controlled through:

- **IEEE 802.1X authentication** with a centralized RADIUS server.
- **Digital certificates** issued by [Organization Name]'s Certificate Authority (CA) for device authentication.
- **Multi-Factor Authentication (MFA)** for privileged wireless access (e.g., management VLANs).
- Integration with [Organization Name]'s Active Directory / Identity Provider for user authentication.

#### 6.3.2 Guest Network Authentication

Guest wireless networks **must** implement:

- A captive portal enforcing terms of use acceptance prior to granting access.
- Time-limited session tokens with a maximum session duration of **[8] hours**.
- Bandwidth throttling to prevent abuse: maximum **[X] Mbps** per user / **[X] Mbps** aggregate.
- No access to any internal network segment beyond internet egress.
- Logging of all guest access sessions, including MAC address, SSID, connection time, and session duration, retained for a minimum of **[90] days**.

#### 6.3.3 Device Registration

- All corporate devices connecting to the corporate wireless network **must** be registered in [Organization Name]'s Device Management System prior to connection.
- Unregistered or personal devices **must not** be permitted on corporate network SSIDs.
- BYOD (Bring Your Own Device) connections, where permitted under the BYOD Policy, **must** be isolated to a dedicated BYOD VLAN.

### 6.4 SSID Configuration and Management

#### 6.4.1 SSID Naming Conventions

- SSIDs **must** not reveal organizational identity, location, or network type (e.g., SSIDs such as "[Organization]-Corp-HQ" are prohibited).
- SSIDs **must** follow the approved naming convention: **[SSID Naming Standard – Reference Internal Standard]**.
- Hidden SSIDs **may** be used for management or sensitive networks but **must not** be used as a substitute for strong authentication.

#### 6.4.2 SSID Inventory

A current inventory of all authorized SSIDs **must** be maintained and reviewed quarterly. The following information **must** be recorded for each SSID:

| SSID Name | Network Segment / VLAN | Purpose | Authentication Method | Encryption | Status | Last Reviewed |
|---|---|---|---|---|---|---|
| [SSID 1] | [VLAN ID] | [Corporate Staff] | [802.1X / WPA3] | [AES-256] | [Active] | [Date] |
| [SSID 2] | [VLAN ID] | [Guest] | [Captive Portal] | [WPA3-SAE] | [Active] | [Date] |
| [SSID 3] | [VLAN ID] | [IoT / OT] | [802.1X] | [WPA2-AES] | [Active] | [Date] |
| [SSID 4] | [VLAN ID] | [BYOD] | [802.1X + MFA] | [WPA3] | [Active] | [Date] |

#### 6.4.3 Rogue SSID Detection

- [Organization Name] **must** deploy Wireless Intrusion Detection/Prevention System (WIDS/WIPS) capabilities to continuously scan for unauthorized SSIDs within its premises.
- Any detected rogue access point **must** be reported, investigated, and remediated within **[4] hours** of detection.
- WIDS/WIPS alerts **must** be integrated into [Organization Name]'s Security Operations Centre (SOC) or equivalent monitoring function.

### 6.5 Access Point (AP) Hardening

All wireless access points deployed by [Organization Name] **must** be configured in accordance with the following hardening requirements:

#### 6.5.1 Physical Security

- Access points **must** be physically secured and tamper-evident where possible.
- APs deployed in public-accessible areas **must** be secured to prevent unauthorized removal or physical access to the Ethernet port.
- A physical inventory of all access points **must** be maintained and reconciled quarterly.

#### 6.5.2 Logical Hardening

- Default credentials **must** be changed on all APs prior to deployment.
- Management interfaces **must** only be accessible from the designated network management VLAN.
- SNMP v3 with strong authentication and encryption **must** be used; SNMPv1 and SNMPv2c are **prohibited**.
- Unnecessary services and protocols **must** be disabled (e.g., Telnet, HTTP management interfaces).
- SSH or equivalent encrypted protocol **must** be used for all management access; Telnet is **prohibited**.
- Access point firmware **must** be kept current; critical patches **must** be applied within **[30] days** of release; critical/emergency patches within **[72] hours**.
- NTP synchronization **must** be configured to [Organization Name]'s authorized time servers.

#### 6.5.3 Centralized Management

- All wireless access points **must** be managed through a centralized Wireless LAN Controller (WLC) or equivalent management platform.
- Standalone or rogue management configurations are **prohibited** without CISO approval.
- Configuration changes to access points **must** be managed via the change management process.

### 6.6 Wireless Network Monitoring and Logging

#### 6.6.1 Log Requirements

The following events **must** be logged for all wireless network activity:

| Event Category | Specific Events | Minimum Retention |
|---|---|---|
| Authentication Events | Successful authentication, failed authentication, session termination | 90 days |
| Access Control Events | Unauthorized access attempts, MAC filtering blocks | 90 days |
| Administrative Events | AP configuration changes, SSID additions/removals | 1 year |
| Security Events | Rogue AP detected, WIDS/WIPS alerts, deauthentication floods | 1 year |
| Guest Network Events | Session start/stop, captive portal acceptance | 90 days |

#### 6.6.2 Monitoring Requirements

- Wireless logs **must** be forwarded to [Organization Name]'s centralized Security Information and Event Management (SIEM) system.
- Real-time alerting **must** be configured for the following events:
  - Detection of rogue or unauthorized access points.
  - Repeated authentication failures (threshold: **[X] failures within [Y] minutes**).
  - Detection of deauthentication or disassociation flood attacks.
  - Connection of an unregistered device to a corporate SSID.
  - Changes to AP configurations outside of approved change windows.

### 6.7 Wireless Penetration Testing

- [Organization Name] **must** conduct **annual wireless penetration testing** of all wireless networks.
- Testing **must** be performed by qualified personnel, either internal (holding relevant certifications such as OSCP, CEH) or an approved external provider.
- Penetration testing scope **must** include, at minimum:
  - Rogue access point detection.
  - Authentication bypass attempts.
  - Encryption weakness testing.
  - Evil twin attack simulation.
  - Client isolation verification.
- A penetration testing report **must** be produced, reviewed by the CISO, and findings tracked to remediation.
- Critical findings **must** be remediated within **[30] days**; high findings within **[60] days**; medium findings within **[90] days**.

### 6.8 Third-Party and Vendor Wireless Access

- Third-party vendors requiring wireless access to [Organization Name] networks **must** be subject to the Third-Party and Vendor Management Policy.
- Vendor wireless access **must** be:
  - Isolated to a dedicated vendor VLAN with no access to production systems without explicit approval.
  - Time-limited with access automatically revoked upon expiry.
  - Logged and monitored in the same manner as employee access.
- Vendors **must not** be permitted to deploy their own wireless access points on [Organization Name] premises without written approval from the Network Operations Manager and CISO.

---

## 7. Network Segmentation Zones

*This section defines the wireless network segmentation architecture. Segmentation is a critical control for limiting the blast radius of a wireless security incident. Define each zone clearly, including its purpose, permitted users, and allowed connectivity.*

### 7.1 Segmentation Principles

[Organization Name] **must** implement network segmentation for all wireless networks to ensure that:

- Compromise of one wireless segment does not directly expose other segments.
- Sensitive data environments (e.g., systems processing customer financial data) are not directly accessible from wireless networks without traversing a firewall.
- Guest and corporate wireless traffic is fully isolated at Layer 2 and Layer 3.

### 7.2 Wireless Network Zones

The following wireless network segmentation zones are defined and mandated:

#### Zone 1: Corporate Staff Network (High Trust)

| Attribute | Details |
|---|---|
| **Zone Name** | Corporate Staff Network |
| **Trust Level** | High |
| **SSID** | [Corporate SSID Name] |
| **VLAN ID** | [VLAN ID – e.g., VLAN 10] |
| **IP Subnet** | [e.g., 10.10.10.0/24] |
| **Permitted Users** | Permanent employees with registered corporate devices |
| **Authentication** | IEEE 802.1X, WPA3-Enterprise, RADIUS |
| **Internet Access** | Yes (via corporate proxy/firewall) |
| **Access to Internal Systems** | Yes (role-based, via firewall policy) |
| **Access to Other Zones** | Restricted; governed by firewall rules |
| **Monitoring** | Full SIEM integration; WIDS/WIPS active |

#### Zone 2: Management Network (Critical Trust)

| Attribute | Details |
|---|---|
| **Zone Name** | Management Network |
| **Trust Level** | Critical |
| **SSID** | [Management SSID – may be hidden] |
| **VLAN ID** | [VLAN ID – e.g., VLAN 99] |
| **IP Subnet** | [e.g., 10.99.99.0/28] |
| **Permitted Users** | Network administrators and IT security personnel only |
| **Authentication** | IEEE 802.1X, WPA3-Enterprise, MFA required |
| **Internet Access** | No |
| **Access to Internal Systems** | Management systems only (WLC, SIEM, NMS) |
| **Access to Other Zones** | No access to corporate or guest zones |
| **Monitoring** | Full SIEM integration; all activity logged |

#### Zone 3: Guest Network (Untrusted)

| Attribute | Details |
|---|---|
| **Zone Name** | Guest Network |
| **Trust Level** | Untrusted |
| **SSID** | [Guest SSID Name] |
| **VLAN ID** | [VLAN ID – e.g., VLAN 200] |
| **IP Subnet** | [e.g., 192.168.200.0/24] |
| **Permitted Users** | Visitors, contractors, non-employee guests |
| **Authentication** | Captive portal with terms acceptance |
| **Internet Access** | Yes (direct internet breakout, content filtered) |
| **Access to Internal Systems** | None |
| **Access to Other Zones** | No access to any internal zone |
| **Monitoring** | Session logging; WIDS/WIPS active |

#### Zone 4: BYOD Network (Low Trust)

| Attribute | Details |
|---|---|
| **Zone Name** | BYOD Network |
| **Trust Level** | Low |
| **SSID** | [BYOD SSID Name] |
| **VLAN ID** | [VLAN ID – e.g., VLAN 150] |
| **IP Subnet** | [e.g., 10.15.0.0/22] |
| **Permitted Users** | Employees using personal devices (BYOD-enrolled) |
| **Authentication** | IEEE 802.1X + MFA |
| **Internet Access** | Yes (via corporate proxy/firewall with content filtering) |
| **Access to Internal Systems** | Limited (approved applications via application gateway) |
| **Access to Other Zones** | No direct access; application-level gateway enforced |
| **Monitoring** | Full SIEM integration; WIDS/WIPS active |

#### Zone 5: IoT / Operational Technology Network (Restricted)

| Attribute | Details |
|---|---|
| **Zone Name** | IoT / Operational Technology Network |
| **Trust Level** | Restricted |
| **SSID** | [IoT SSID Name – hidden] |
| **VLAN ID** | [VLAN ID – e.g., VLAN 300] |
| **IP Subnet** | [e.g., 10.30.0.0/24] |
| **Permitted Users** | Approved IoT devices and OT systems (device certificates) |
| **Authentication** | 802.1X with device certificates; MAC-based fallback where applicable |
| **Internet Access** | No (outbound only to approved update servers via whitelist) |
| **Access to Internal Systems** | Restricted to designated IoT management servers |
| **Access to Other Zones** | No access to any other zone |
| **Monitoring** | Full SIEM integration; anomaly-based detection active |

### 7.3 Inter-Zone Traffic Rules

The following matrix governs traffic flows between wireless zones. All inter-zone traffic **must** traverse a next-generation firewall with application-level inspection:

| Source Zone | Destination Zone | Traffic Permitted | Control Mechanism |
|---|---|---|---|
| Corporate Staff | Internet | Yes | Firewall + Proxy |
| Corporate Staff | Internal Systems | Yes (role-based) | Firewall + RBAC |
| Corporate Staff | Guest | No | Firewall Block |
| Corporate Staff | BYOD | No | Firewall Block |
| Corporate Staff | IoT | No | Firewall Block |
| Guest | Internet | Yes | Firewall (restricted) |
| Guest | All Internal | No | Firewall Block |
| BYOD | Internet | Yes | Firewall + Proxy |
| BYOD | Approved Apps | Yes (via gateway) | Application Gateway |
| BYOD | Core Internal | No | Firewall Block |
| IoT | Internet | Restricted | Whitelist Firewall |
| IoT | Management | No | Firewall Block |
| Management | All Zones | Restricted (read-only) | Firewall + PAM |

---

## 8. Firewall Rule Review Schedule

*This section defines the schedule and process for reviewing firewall rules applicable to wireless network segments. Regular review prevents rule-base bloat and ensures that rules remain fit for purpose.*

### 8.1 Review Objectives

Firewall rule reviews for wireless network segments serve to:

- Remove obsolete, redundant, or overly permissive rules.
- Verify that all rules have a documented business justification.
- Confirm alignment with the network segmentation architecture defined in Section 7.
- Identify and remediate any rules that violate the principle of least privilege.
- Ensure compliance with BNM RMiT Clause 10.40 requirements.

### 8.2 Review Frequency and Scope

| Review Type | Frequency | Scope | Owner |
|---|---|---|---|
| Full Rule-Base Review | Annual | All firewall rules for wireless segments | Network Operations Manager |
| Targeted / Change-Triggered Review | After every significant change | Rules affected by network change | Network Engineer |
| Quarterly Spot Check | Quarterly | Random sample of 20% of rules | IT Security Team |
| Post-Incident Review | Within 5 business days of incident | All rules relevant to affected segment | CISO + Network Operations Manager |
| Regulatory Review | As required by BNM examination | Full rule-base | Network Operations Manager + Risk & Compliance |

### 8.3 Review Process

The firewall rule review process **must** follow these steps:

1. **Initiation:** The Network Operations Manager schedules the review and notifies relevant stakeholders at least **[14] days** in advance.

2. **Documentation Preparation:** Network Engineers export current firewall rule configurations and prepare a rule inventory report.

3. **Rule Analysis:** Each rule is evaluated against the following criteria:
   - Does the rule have a documented business justification?
   - Has the rule been triggered within the last **[90] days**? (Zero-hit rules require justification or removal.)
   - Is the rule aligned with the current network segmentation policy?
   - Does the rule adhere to the principle of least privilege?
   - Are source and destination addresses as specific as possible (no overly broad /8 or /16 ranges unless justified)?

4. **Risk Assessment:** Rules identified as potentially non-compliant or high-risk are escalated to the IT Security Team for risk assessment.

5. **Remediation:** Rules requiring modification or removal are updated via the Change Management process.

6. **Sign-Off:** The completed review is documented and signed off by the Network Operations Manager and CISO.

7. **Reporting:** A summary report is provided to the Risk and Compliance function for inclusion in the regulatory compliance register.

### 8.4 Firewall Rule Review Register

A Firewall Rule Review Register **must** be maintained, recording all reviews conducted. The register **must** include:

| Review ID | Review Date | Review Type | Segment Reviewed | Rules Reviewed (Count) | Rules Modified | Rules Removed | Reviewer | Approver | Sign-Off Date | Next Review Due |
|---|---|---|---|---|---|---|---|---|---|---|
| [FRR-001] | [Date] | [Annual] | [Corporate Staff VLAN] | [X] | [X] | [X] | [Name] | [Name] | [Date] | [Date] |
| [FRR-002] | [Date] | [Quarterly] | [Guest VLAN] | [X] | [X] | [X] | [Name] | [Name] | [Date] | [Date] |
| [FRR-003] | [Date] | [Change-Triggered] | [IoT VLAN] | [X] | [X] | [X] | [Name] | [Name] | [Date] | [Date] |

### 8.5 Firewall Rule Documentation Standard

Each firewall rule applicable to wireless segments **must** be documented with the following attributes:

| Field | Description |
|---|---|
| **Rule ID** | Unique identifier for the rule |
| **Rule Name** | Descriptive name indicating the rule's purpose |
| **Source Zone / IP** | Source network segment or IP address/range |
| **Destination Zone / IP** | Destination network segment or IP address/range |
| **Service / Port** | Protocol and port number(s) |
| **Action** | Permit / Deny / Log |
| **Business Justification** | Documented reason for the rule's existence |
| **Rule Owner** | Individual or team responsible for the rule |
| **Created Date** | Date the rule was created |
| **Last Modified Date** | Date of last modification |
| **Last Review Date** | Date of last compliance review |
| **Expiry Date** | Scheduled expiry date (if temporary rule) |
| **Hit Count (Last 90 days)** | Number of times the rule was matched |

### 8.6 Escalation and Exception Handling

- Rules identified as high-risk but not immediately remediable **must** be documented as exceptions and submitted for CISO approval within **[5] business days** of identification.
- Temporary rule exceptions **must** have a defined expiry date not exceeding **[90] days**.
- All exceptions **must** be tracked in the Firewall Exception Register and reviewed at the next scheduled rule review.

---

## 9. Network Architecture Diagram

*This section provides the documented wireless network architecture. The diagrams referenced here must be maintained in current versions and stored in the designated repository. Actual diagrams are attached as Appendices.*

### 9.1 Architecture Documentation Requirements

[Organization Name]'s wireless network architecture **must** be documented and maintained with the following characteristics:

- Architecture diagrams **must** be maintained at a current version and updated within **[30] days** of any significant network change.
- Diagrams **must** be stored in **[Document Repository Location]** and access-controlled to authorized personnel.
- Diagrams **must** clearly depict all wireless zones, VLANs, firewall boundaries, and connectivity paths.
- Diagrams **must** include version numbers and last-updated dates.

### 9.2 Required Architecture Diagram Types

The following diagrams **must** be maintained as part of this Policy:

| Diagram | Description | Location | Version | Last Updated |
|---|---|---|---|---|
| Wireless Network Overview | High-level diagram showing all wireless zones and their connectivity to the core network | [Repository Path] | [Version] | [Date] |
| Wireless Zone Segmentation Detail | Detailed VLAN and firewall boundary diagram per zone | [Repository Path] | [Version] | [Date] |
| Access Point Placement Map | Physical floor plan showing AP locations per site (per site) | [Repository Path] | [Version] | [Date] |
| Guest Network Architecture | Dedicated diagram showing guest network isolation and internet breakout | [Repository Path] | [Version] | [Date] |
| IoT Network Architecture | Diagram showing IoT/OT wireless isolation and management connectivity | [Repository Path] | [Version] | [Date] |
| Management Network Architecture | Diagram showing management VLAN and authorized management paths | [Repository Path] | [Version] | [Date] |

### 9.3 Architecture Description

*Replace the text below with a narrative description of [Organization Name]'s actual wireless architecture. The description must cover logical segmentation, physical topology, and security control placement.*

**[PLACEHOLDER – ARCHITECTURE NARRATIVE]**

The [Organization Name] wireless network architecture is designed on a defence-in-depth model, with dedicated wireless segments for each user population and use case. The architecture is summarized as follows:

- **Core Wireless Infrastructure:** [Describe the WLC/management platform, number of APs, and distribution across sites.]
- **Corporate Zone:** [Describe how corporate devices connect, authenticate, and reach internal systems.]
- **Guest Zone:** [Describe the isolated internet breakout path for guest users.]
- **BYOD Zone:** [Describe how BYOD devices are managed and what they can access.]
- **IoT Zone:** [Describe the isolation of IoT devices and their management connectivity.]
- **Management Zone:** [Describe how administrators access the wireless management infrastructure.]

> **See Appendix A** for high-level wireless network architecture diagrams.
> **See Appendix B** for detailed VLAN and firewall boundary diagrams.
> **See Appendix C** for physical access point placement maps.

---

## 10. Compliance and Enforcement

*This section explains how compliance with this Policy is monitored and what consequences apply for non-compliance. This is important for demonstrating an enforceable governance framework to auditors.*

### 10.1 Compliance Monitoring

Compliance with this Policy **must** be monitored through the following mechanisms:

| Monitoring Activity | Frequency | Owner | Output |
|---|---|---|---|
| Wireless configuration compliance scan | Monthly | IT Security Team | Compliance scan report |
| SSID inventory reconciliation | Quarterly | Network Operations Manager | Updated SSID register |
| AP firmware version audit | Monthly | System Administrators | Patch compliance report |
| Firewall rule review | Quarterly / Annual | Network Operations Manager | Rule review register |
| Wireless penetration test | Annual | IT Security Team / External Vendor | Penetration test report |
| Rogue AP scan | Continuous (WIDS/WIPS) | IT Security Team | SIEM alerts and monthly summary |
| Internal audit | Annual | Internal Audit | Audit report |
| Policy exception register review | Quarterly | Risk and Compliance | Exception status report |

### 10.2 Key Performance Indicators (KPIs)

The following KPIs **must** be reported to senior management on a **[quarterly]** basis:

| KPI | Target | Reporting Frequency |
|---|---|---|
| Percentage of APs running approved firmware | ≥ 98% | Monthly |
| Mean time to remediate rogue AP (hours) | ≤ 4 hours | Monthly |
| Percentage of wireless accounts with MFA enabled | 100% (management accounts) | Monthly |
| Number of policy exceptions open > 90 days | 0 | Quarterly |
| Percentage of firewall rules with documented justification | 100% | Quarterly |
| Wireless penetration test critical findings open > 30 days | 0 | Quarterly |
| Guest session log availability (%) | ≥ 99.5% | Monthly |

### 10.3 Non-Compliance and Disciplinary Action

Non-compliance with this Policy may result in:

- **Technical Controls:** Automatic disconnection from wireless networks for non-compliant devices.
- **Administrative Action:** Formal disciplinary proceedings in accordance with [Organization Name]'s Human Resources policies and employment agreements.
- **Access Revocation:** Immediate revocation of wireless network access pending investigation.
- **Escalation:** Escalation to the CISO and relevant senior management for severe or repeated violations.
- **Regulatory Reporting:** Where non-compliance constitutes a reportable incident under BNM RMiT or other regulatory obligations, mandatory reporting will be initiated in accordance with the Incident Response Policy.

---

## 11. Exceptions and Waivers

*This section defines the process for obtaining approved deviations from this Policy. A formal exception process is essential for audit purposes — it demonstrates that the organization manages risk deliberately rather than ignoring policy.*

### 11.1 Exception Principles

- No exception to this Policy is automatic or assumed.
- All exceptions **must** be formally documented, risk-assessed, and approved prior to implementation.
- Exceptions are temporary in nature and **must** not become de facto permanent deviations.

### 11.2 Exception Request Process

1. The requesting party submits a completed **Policy Exception Request Form** to the Network Operations Manager.
2. The Network Operations Manager conducts an initial review and risk assessment.
3. The exception is escalated to the CISO for approval.
4. For exceptions with material regulatory implications, the Risk and Compliance function **must** be consulted.
5. Approved exceptions are recorded in the Policy Exception Register.
6. The requesting party implements approved compensating controls as specified in the approval.
7. The exception is reviewed at expiry; continuation requires a fresh application.

### 11.3 Policy Exception Register

| Exception ID | Policy Section | Description of Exception | Requestor | Justification | Risk Assessment | Compensating Controls | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| [EXC-001] | [Section X.X] | [Description] | [Name / Team] | [Business reason] | [Low/Medium/High] | [Controls in place] | [CISO Name] | [Date] | [Date] | [Open / Closed] |

---

## 12. Review and Approval

*This section documents the governance history and current approval status of this Policy. It is critical for demonstrating regulatory compliance.*

### 12.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Reviewer Name] | Initial version – document created. |
| [1.1] | [Date] | [Author Name] | [Reviewer Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Reviewer Name] | [Major revision – description] |

### 12.2 Review Schedule

This Policy **must** be reviewed on an **annual** basis, or earlier in the event of:

- A significant change to [Organization Name]'s wireless network architecture.
- A material wireless security incident.
- Changes to BNM RMiT or other applicable regulatory requirements.
- A change in organizational structure that affects wireless security accountability.
- Findings from internal or external audits that require policy updates.

### 12.3 Approval Sign-Off

By signing below, the approvers confirm that they have reviewed this Policy and that it accurately reflects [Organization Name]'s wireless security requirements and is compliant with applicable regulatory obligations.

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Operations Manager | [Name] | __________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [Date] |
| Chief Risk Officer (CRO) | [Name] | __________________ | [Date] |
| Chief Information Officer (CIO) | [Name] | __________________ | [Date] |
| Head of Risk and Compliance | [Name] | __________________ | [Date] |
| Internal Audit Representative | [Name] | __________________ | [Date] |

---

## 13. References

*This section lists all regulatory, standards, and internal documents referenced in this Policy. Maintaining an accurate reference list supports regulatory examination and audit traceability.*

### 13.1 Regulatory References

| Reference | Issuing Body | Relevant Sections | Notes |
|---|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | **Clause 10.40** – Wireless Network Security | Primary regulatory driver for this Policy |
| Financial Services Act 2013 | Parliament of Malaysia | Section 47 | Technology risk obligations |
| Islamic Financial Services Act 2013 | Parliament of Malaysia | Section 57 | Technology risk obligations (Islamic FIs) |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Data Security Principle | Protection of personal data in transit over wireless |
| National Cyber Security Policy | NACSA | CII Protection Requirements | Critical Information Infrastructure obligations |
| BNM Guidelines on Management of Cyber Risk | Bank Negara Malaysia | Relevant sections | Supplementary cyber risk guidance |

### 13.2 Standards References

| Standard | Issuing Body | Relevant Sections |
|---|---|---|
| ISO/IEC 27001:2022 | ISO/IEC | Annex A Control 8.20 – Network Security |
| ISO/IEC 27002:2022 | ISO/IEC | 8.20 Network Security, 8.22 Segregation of Networks |
| NIST SP 800-153 | NIST | Guidelines for Securing WLANs |
| NIST SP 800-97 | NIST | Establishing Wireless Robust Security Networks |
| IEEE 802.11 (Wi-Fi Standards) | IEEE | WPA3, 802.1X specifications |
| PCI DSS v4.0 | PCI SSC | Requirements 1 (Network Controls), 2 (Secure Configurations) |
| CIS Benchmarks – Network Devices | CIS | Wireless infrastructure hardening |

### 13.3 Internal Policy References

| Document | Document ID | Owner |
|---|---|---|
| Information Security Policy | [DOC-ID] | CISO |
| Network Security Policy | [DOC-ID] | Network Operations Manager |
| Access Control Policy | [DOC-ID] | IT Security Team |
| Acceptable Use Policy | [DOC-ID] | HR / IT |
| Incident Response Policy | [DOC-ID] | CISO |
| Third-Party and Vendor Management Policy | [DOC-ID] | Risk and Compliance |
| Data Classification Policy | [DOC-ID] | CISO |
| Remote Working Policy | [DOC-ID] | HR / IT |
| Change Management Policy | [DOC-ID] | IT Operations |
| BYOD Policy | [DOC-ID] | IT Security Team |

---

## 14. Appendices

*Appendices contain supporting reference material that supplements the main policy body. Each appendix should be a separate controlled document or section with its own version tracking where appropriate.*

---

### Appendix A: Wireless Network Architecture Diagrams

*Insert or attach high-level wireless network architecture diagrams here. Diagrams must show all wireless zones, VLAN boundaries, firewall placement, and connectivity paths to the core network. Diagrams must be version-controlled and dated.*

**[PLACEHOLDER – INSERT WIRELESS NETWORK OVERVIEW DIAGRAM]**

> Diagram Reference: [Diagram ID] | Version: [X.X] | Last Updated: [Date] | Author: [Name]

**Diagram Legend:**

| Symbol | Meaning |
|---|---|
| [Symbol] | Wireless Access Point |
| [Symbol] | Firewall |
| [Symbol] | VLAN Boundary |
| [Symbol] | Wireless LAN Controller |
| [Symbol] | Internet Breakout |
| [Symbol] | Encrypted Tunnel |

---

### Appendix B: Detailed VLAN and Firewall Boundary Diagrams

*Insert or attach detailed network segmentation diagrams showing each wireless VLAN, its associated firewall rules, and inter-zone traffic paths.*

**[PLACEHOLDER – INSERT VLAN SEGMENTATION DIAGRAM]**

> Diagram Reference: [Diagram ID] | Version: [X.X] | Last Updated: [Date] | Author: [Name]

---

### Appendix C: Physical Access Point Placement Maps

*Insert or attach physical floor plan diagrams for each site showing the location of all deployed wireless access points. Maps must be updated within 30 days of any AP deployment, relocation, or decommissioning.*

**[PLACEHOLDER – INSERT AP PLACEMENT MAP: HEAD OFFICE]**

**[PLACEHOLDER – INSERT AP PLACEMENT MAP: [BRANCH / SITE NAME]]**

| Site | AP Count | Map Reference | Version | Last Updated |
|---|---|---|---|---|
| Head Office | [X] | [Map ID] | [Version] | [Date] |
| [Branch Name] | [X] | [Map ID] | [Version] | [Date] |
| Data Centre | [X] | [Map ID] | [Version] | [Date] |
| DR Site | [X] | [Map ID] | [Version] | [Date] |

---

### Appendix D: Wireless Device and SSID Inventory

*A complete, current inventory of all authorized wireless access points and SSIDs. This register must be reconciled quarterly and maintained in [Document Repository Location].*

#### D.1 Access Point Inventory

| AP ID | AP Model | Firmware Version | Location | Site | VLAN Assignment | Management IP | Installation Date | Last Reviewed |
|---|---|---|---|---|---|---|---|---|
| [AP-001] | [Model] | [Version] | [Floor/Room] | [Site Name] | [VLAN ID] | [IP Address] | [Date] | [Date] |
| [AP-002] | [Model] | [Version] | [Floor/Room] | [Site Name] | [VLAN ID] | [IP Address] | [Date] | [Date] |

#### D.2 Authorized SSID Register

| SSID | Zone | VLAN | Authentication | Encryption | Status | Owner | Last Reviewed |
|---|---|---|---|---|---|---|---|
| [SSID Name] | [Zone] | [VLAN ID] | [Method] | [Standard] | [Active/Inactive] | [Owner] | [Date] |

---

### Appendix E: Wireless Security Incident Response Runbook

*This appendix provides quick-reference procedures for common wireless security incidents. For full incident response procedures, refer to the Incident Response Policy.*

| Incident Type | Immediate Actions | Escalation Path | Target Response Time |
|---|---|---|---|
| Rogue Access Point Detected | Isolate via WIPS; identify physical location; remove or block | Network Operations Manager → CISO | 4 hours |
| Unauthorized Device Connected to Corporate SSID | Quarantine device via NAC; notify device owner; investigate | IT Security Team → Network Operations Manager | 2 hours |
| Wireless Authentication Brute Force | Block source MAC; review logs; assess if credentials compromised | IT Security Team → CISO | 1 hour |
| Evil Twin / Rogue SSID Detected | Alert users; block via WIPS; investigate source | IT Security Team → CISO | 1 hour |
| Deauthentication Flood (DoS Attack) | Enable WIPS mitigation; identify source; engage ISP if required | Network Operations Manager → CISO | 2 hours |
| Wireless Policy Non-Compliance | Document non-compliance; notify user; remediate | Network Operations Manager | 5 business days |

---

### Appendix F: Wireless Security Assessment Checklist

*This checklist is to be used by the IT Security Team during compliance assessments and by Internal Audit during wireless security audits.*

| # | Control Area | Checklist Item | Compliant (Y/N) | Evidence Reference | Assessor | Date |
|---|---|---|---|---|---|---|
| 1 | Encryption | All SSIDs using WPA2/WPA3 with AES | | | | |
| 2 | Encryption | WEP and TKIP disabled on all APs | | | | |
| 3 | Authentication | Corporate SSID using 802.1X/RADIUS | | | | |
| 4 | Authentication | Guest network using captive portal | | | | |
| 5 | Segmentation | Corporate and guest VLANs fully isolated | | | | |
| 6 | Segmentation | IoT VLAN has no access to corporate zone | | | | |
| 7 | Hardening | Default credentials changed on all APs | | | | |
| 8 | Hardening | AP management interface on management VLAN only | | | | |
| 9 | Hardening | AP firmware within approved version | | | | |
| 10 | Monitoring | WIDS/WIPS active and integrated with SIEM | | | | |
| 11 | Monitoring | Rogue AP detection active and tested | | | | |
| 12 | Logging | Authentication logs forwarded to SIEM | | | | |
| 13 | Logging | Guest session logs retained for ≥ 90 days | | | | |
| 14 | Access Control | SSID inventory current and reconciled | | | | |
| 15 | Access Control | Unregistered devices blocked from corporate SSID | | | | |
| 16 | Testing | Annual penetration test completed | | | | |
| 17 | Testing | All critical pen test findings remediated within 30 days | | | | |
| 18 | Governance | Firewall rules reviewed per schedule | | | | |
| 19 | Governance | Policy exceptions documented and approved | | | | |
| 20 | Governance | Architecture diagrams current and accessible | | | | |

---

### Appendix G: Glossary of Wireless Security Standards

*Reference guide to wireless security standards and protocols referenced in this Policy.*

| Standard | Description | Status |
|---|---|---|
| WPA3-Enterprise | Latest enterprise Wi-Fi security protocol; uses 192-bit minimum security and 802.1X | Preferred – mandated for new deployments |
| WPA2-Enterprise | Enterprise Wi-Fi security with 802.1X and AES-CCMP; minimum acceptable standard | Acceptable – legacy deployments pending upgrade |
| WPA3-SAE | Simultaneous Authentication of Equals; used in WPA3-Personal; resistant to offline dictionary attacks | Preferred for guest networks |
| WPA2-Personal (PSK) | Pre-shared key authentication; acceptable only for guest networks with compensating controls | Acceptable for guest only |
| 802.1X | IEEE port-based access control standard; requires RADIUS infrastructure | Mandatory for corporate and management networks |
| TKIP | Temporal Key Integrity Protocol; deprecated; known vulnerabilities | **Prohibited** |
| WEP | Wired Equivalent Privacy; fully broken; easily cracked | **Prohibited** |
| PEAP | Protected Extensible Authentication Protocol; common 802.1X EAP type | Acceptable |
| EAP-TLS | Extensible Authentication Protocol with TLS; certificate-based; strongest EAP method | Preferred |

---

*End of Document*

---

**Document Control:** This document is subject to [Organization Name]'s Document Management Policy. The master copy is maintained in **[Document Repository Location]**. Printed copies are uncontrolled. Users should verify they are referring to the current version before use.

| Field | Detail |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Next Review Date** | [Next Review Date] |
| **Document Owner** | Network Operations Manager |