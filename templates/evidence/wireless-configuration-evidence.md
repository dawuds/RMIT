# Wireless Configuration Evidence

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CISO / Head of Cryptography |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Review Frequency** | Per-event or Quarterly |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document provides configuration evidence demonstrating that the wireless network infrastructure of [Organization Name] complies with Bank Negara Malaysia's (BNM) Risk Management in Technology (RMiT) Policy Document, specifically Clause 10.40. It captures the current state of wireless encryption controls, network segmentation, rogue access point (AP) detection mechanisms, and associated cryptographic governance, serving as an audit-ready artifact for internal reviews, regulatory examinations, and third-party assessments.

### 1.2 Scope

*Define the boundaries of this evidence document. Include all wireless infrastructure components, sites, and environments covered. Exclude any systems explicitly out of scope and provide justification.*

This evidence document covers the following scope:

- **In-Scope Environments:**
  - [ ] Corporate wireless network (SSID: [Corporate SSID])
  - [ ] Guest wireless network (SSID: [Guest SSID])
  - [ ] Operations / OT wireless network (SSID: [OT SSID], if applicable)
  - [ ] Branch office wireless networks (Sites: [Branch List])
  - [ ] Data centre wireless access points (if applicable)

- **Out-of-Scope Environments:**
  - [Description of excluded environments and rationale]

- **Evidence Collection Period:** [Start Date] to [End Date]

- **Regulatory Reference:** BNM RMiT Policy Document, Clause 10.40 — Wireless Network Security

---

## 2. Assessment Scope and Criteria

*Describe the specific wireless infrastructure components assessed and the criteria used to evaluate compliance. Reference internal standards, BNM RMiT requirements, and any industry benchmarks (e.g., IEEE 802.11, CIS Benchmarks) applied during the assessment.*

### 2.1 Assets in Scope

| Asset ID | Asset Type | Manufacturer / Model | Location / Site | SSID | IP / Management Address | Controller |
|---|---|---|---|---|---|---|
| [AP-001] | Access Point | [Manufacturer / Model] | [Location] | [SSID Name] | [IP Address] | [Controller Name] |
| [AP-002] | Access Point | [Manufacturer / Model] | [Location] | [SSID Name] | [IP Address] | [Controller Name] |
| [WLC-001] | Wireless LAN Controller | [Manufacturer / Model] | [Data Centre / Location] | N/A | [IP Address] | N/A |
| [WIDS-001] | Wireless IDS/IPS Sensor | [Manufacturer / Model] | [Location] | N/A | [IP Address] | [Controller Name] |

### 2.2 Assessment Criteria

| Criteria Reference | Criteria Description | Source Standard |
|---|---|---|
| RMiT 10.40(a) | Wireless networks shall use strong encryption protocols (minimum WPA2-Enterprise or equivalent) | BNM RMiT |
| RMiT 10.40(b) | Wireless networks shall be segmented from the internal corporate network | BNM RMiT |
| RMiT 10.40(c) | Rogue access point detection and response mechanisms shall be in place | BNM RMiT |
| [Internal Policy Ref] | [Organization Name] Wireless Security Standard, Section [X] | Internal Policy |
| CIS CSC 15 | Wireless Access Control | CIS Controls v8 |
| IEEE 802.11i | Robust Security Network (RSN) / WPA2 standards | IEEE |

### 2.3 Exclusion Criteria

*Document any wireless assets explicitly excluded from this assessment and the corresponding justification.*

| Excluded Asset | Reason for Exclusion | Approved By | Approval Date |
|---|---|---|---|
| [Asset Description] | [Justification] | [Approver Name] | [Date] |

---

## 3. Methodology

*Describe the methods, tools, and procedures used to collect and validate wireless configuration evidence. Include both automated tooling and manual inspection steps.*

### 3.1 Evidence Collection Approach

Evidence was collected using the following methods:

- **Configuration Export:** Wireless LAN Controller (WLC) configurations exported via CLI (`show running-config`, `show wlan all`) and management console on [Date].
- **Automated Scanning:** Wireless site survey and scanning conducted using [Tool Name / Version] on [Date].
- **Manual Inspection:** Physical inspection of access point placement and cabling conducted at [Sites] on [Date].
- **WIDS/WIPS Log Review:** Rogue AP detection logs extracted from [WIDS/WIPS Platform] covering the period [Start Date] to [End Date].
- **Policy and Configuration Comparison:** Exported configurations compared against [Organization Name] Wireless Security Baseline Standard v[X.X].

### 3.2 Tools Used

| Tool / Platform | Version | Purpose | Used By |
|---|---|---|---|
| [WLC Management Console / CLI] | [Version] | Configuration export and verification | [Team / Role] |
| [Wireless Scanning Tool, e.g., Ekahau / NetSpot] | [Version] | Site survey, rogue AP detection | [Team / Role] |
| [WIDS/WIPS Platform, e.g., Cisco Prime, Aruba AirWave] | [Version] | Rogue AP and threat detection log review | [Team / Role] |
| [Vulnerability Scanner] | [Version] | Wireless security configuration assessment | [Team / Role] |
| [Packet Analyser, e.g., Wireshark] | [Version] | Protocol-level verification (if applicable) | [Team / Role] |

### 3.3 Limitations and Assumptions

*Document any constraints, gaps, or assumptions that may affect the completeness or accuracy of this evidence.*

- [Limitation 1: e.g., "Branch sites in [Location] were assessed remotely via configuration export only; physical inspection was not performed."]
- [Limitation 2: e.g., "Evidence reflects configuration at a point-in-time; dynamic changes post-collection are not captured."]
- [Assumption 1: e.g., "All access points are managed centrally by the WLC; unmanaged APs are assumed absent."]

---

## 4. Findings and Ratings

*Summarise the findings from the configuration review. Each finding should include a reference to the applicable criterion, observed state, compliance rating, and required remediation action where applicable.*

### 4.1 Summary of Findings

| Finding ID | Domain | Criterion Reference | Description | Rating | Remediation Required |
|---|---|---|---|---|---|
| [F-001] | Encryption | RMiT 10.40(a) | [Finding description] | [Compliant / Non-Compliant / Partial] | [Yes / No] |
| [F-002] | Segmentation | RMiT 10.40(b) | [Finding description] | [Compliant / Non-Compliant / Partial] | [Yes / No] |
| [F-003] | Rogue AP Detection | RMiT 10.40(c) | [Finding description] | [Compliant / Non-Compliant / Partial] | [Yes / No] |
| [F-004] | Cryptographic Controls | Internal Policy | [Finding description] | [Compliant / Non-Compliant / Partial] | [Yes / No] |

### 4.2 Overall Compliance Rating

| Domain | Rating | Supporting Evidence Reference |
|---|---|---|
| Wireless Encryption | [Compliant / Partial / Non-Compliant] | [Appendix / Evidence ID] |
| Network Segmentation | [Compliant / Partial / Non-Compliant] | [Appendix / Evidence ID] |
| Rogue AP Detection | [Compliant / Partial / Non-Compliant] | [Appendix / Evidence ID] |
| Cryptographic Key Management | [Compliant / Partial / Non-Compliant] | [Appendix / Evidence ID] |
| HSM Usage | [Compliant / Partial / Non-Compliant / N/A] | [Appendix / Evidence ID] |
| **Overall Assessment** | **[Compliant / Partial / Non-Compliant]** | |

**Rating Definitions:**

| Rating | Definition |
|---|---|
| **Compliant** | All controls are implemented as required and evidence is sufficient |
| **Partial** | Controls are partially implemented; residual risk accepted or remediation in progress |
| **Non-Compliant** | Controls are absent or ineffective; immediate remediation required |

### 4.3 Remediation Action Plan

*For each non-compliant or partial finding, document the remediation owner, target date, and current status.*

| Finding ID | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|
| [F-00X] | [Specific remediation steps] | [Team / Role] | [Date] | [Open / In Progress / Closed] |

---

## 5. Approved Algorithms and Key Lengths

*Document the cryptographic algorithms and minimum key lengths approved for use in the wireless infrastructure. This section must align with BNM RMiT cryptographic requirements and [Organization Name]'s Cryptographic Standards Policy.*

### 5.1 Approved Encryption Protocols

| Protocol | Status | Minimum Standard | Actual Configuration | Compliant |
|---|---|---|---|---|
| WPA3-Enterprise (802.11i + SAE) | **Preferred** | AES-256 / GCMP-256 | [Actual protocol configured] | [Yes / No] |
| WPA2-Enterprise (802.11i + CCMP) | **Approved** | AES-128 / CCMP | [Actual protocol configured] | [Yes / No] |
| WPA2-Personal (PSK) | **Restricted** | AES-128 — Guest only, isolated | [Actual protocol configured] | [Yes / No] |
| WPA / TKIP | **Prohibited** | — Not permitted — | [Actual protocol configured] | [Yes / No] |
| WEP | **Prohibited** | — Not permitted — | [Actual protocol configured] | [Yes / No] |

### 5.2 Approved Cryptographic Algorithms

| Algorithm Type | Approved Algorithm | Minimum Key Length | Usage Context | Approved By |
|---|---|---|---|---|
| Symmetric Encryption | AES | 128-bit (256-bit preferred) | WLAN data encryption (CCMP/GCMP) | [Approver] |
| Authentication (EAP) | EAP-TLS | RSA 2048-bit / ECDSA 256-bit | 802.1X authentication | [Approver] |
| Hashing | SHA-256 or above | N/A | Certificate integrity, PMK derivation | [Approver] |
| Key Exchange | Diffie-Hellman / ECDH | DH Group 14+ / P-256 | TLS handshake | [Approver] |
| Digital Certificate | X.509 | RSA 2048-bit minimum | RADIUS / EAP-TLS certificates | [Approver] |

### 5.3 Prohibited Algorithms

The following algorithms are explicitly prohibited within the wireless environment:

- WEP (RC4-based encryption) — cryptographically broken
- TKIP — deprecated, vulnerable to attacks
- MD5 — prohibited for authentication and integrity use cases
- SHA-1 — deprecated; certificates must not use SHA-1 signatures
- DH Groups below Group 14 (< 2048-bit) — insufficient key strength
- RC4 in any context

---

## 6. Key Lifecycle Management

*Document the processes governing the full lifecycle of cryptographic keys used in the wireless environment, from generation through to destruction. This section must align with [Organization Name]'s Key Management Policy.*

### 6.1 Key Lifecycle Overview

| Key Type | Key Material | Generation Method | Storage Location | Rotation Frequency | Destruction Method |
|---|---|---|---|---|---|
| Pre-Shared Key (PSK) — Guest | WPA2 PSK | [Generation method] | [Storage location] | [Frequency, e.g., Monthly] | [Destruction procedure] |
| RADIUS Server TLS Certificate Key | RSA 2048-bit / ECDSA | PKI-generated (CA) | [HSM / Secure vault] | [Frequency, e.g., Annual / Certificate expiry] | [Destruction procedure] |
| PMK (Pairwise Master Key) | 256-bit | Derived per session (EAP-TLS) | Volatile memory (WLC) | Per session | Automatic on session end |
| WLC Management Certificate Key | RSA 2048-bit | PKI-generated (CA) | [Storage location] | [Frequency] | [Destruction procedure] |
| AP Join Certificate Key | RSA 2048-bit | PKI-generated (CA) | [AP hardware / HSM] | [Frequency] | [Destruction procedure] |

### 6.2 Key Management Procedures

| Lifecycle Phase | Procedure | Responsible Party | Reference Document |
|---|---|---|---|
| **Key Generation** | [Description of key generation process, entropy source, and approval required] | [Role] | [Policy / Procedure Reference] |
| **Key Distribution** | [Description of secure key distribution method, e.g., encrypted channel, HSM-to-device] | [Role] | [Policy / Procedure Reference] |
| **Key Storage** | [Description of storage controls: HSM, encrypted vault, access restrictions] | [Role] | [Policy / Procedure Reference] |
| **Key Usage** | [Description of authorised use cases and restrictions on key usage] | [Role] | [Policy / Procedure Reference] |
| **Key Rotation / Renewal** | [Description of rotation schedule, trigger events, and process] | [Role] | [Policy / Procedure Reference] |
| **Key Revocation** | [Description of revocation triggers: compromise, personnel change, decommission] | [Role] | [Policy / Procedure Reference] |
| **Key Destruction** | [Description of destruction method: NIST SP 800-88 compliant, HSM zeroisation] | [Role] | [Policy / Procedure Reference] |

### 6.3 Certificate Inventory

*Maintain a current inventory of all certificates used in the wireless environment.*

| Certificate CN | Issuing CA | Key Algorithm | Key Length | Valid From | Valid To | Managed By | Renewal Alert |
|---|---|---|---|---|---|---|---|
| [RADIUS Server FQDN] | [CA Name] | RSA / ECDSA | [2048 / 256-bit] | [Date] | [Date] | [Team] | [X days before expiry] |
| [WLC Management FQDN] | [CA Name] | RSA / ECDSA | [2048 / 256-bit] | [Date] | [Date] | [Team] | [X days before expiry] |
| [AP Join Certificate] | [CA Name] | RSA / ECDSA | [2048 / 256-bit] | [Date] | [Date] | [Team] | [X days before expiry] |

---

## 7. HSM Usage Requirements

*Document the Hardware Security Module (HSM) deployment, configuration, and operational requirements supporting the wireless cryptographic infrastructure. Reference applicable BNM RMiT requirements for HSM use where cryptographic key material is classified as sensitive.*

### 7.1 HSM Deployment

| HSM Asset ID | HSM Model | Firmware Version | Location | FIPS Level | Function | Status |
|---|---|---|---|---|---|---|
| [HSM-001] | [Manufacturer / Model] | [Version] | [Location] | [FIPS 140-2/3 Level X] | [e.g., RADIUS key storage, CA private key] | [Active / Standby] |
| [HSM-002] | [Manufacturer / Model] | [Version] | [Location] | [FIPS 140-2/3 Level X] | [e.g., DR / Backup HSM] | [Active / Standby] |

### 7.2 HSM Operational Controls

| Control | Requirement | Current Implementation | Compliant |
|---|---|---|---|
| FIPS 140-2/3 Certification | Level 2 minimum (Level 3 for CA keys) | [Actual FIPS level] | [Yes / No] |
| Dual Control / Split Knowledge | Required for master key loading | [Implementation description] | [Yes / No] |
| HSM Access Control | Role-based, multi-factor authentication | [Implementation description] | [Yes / No] |
| Tamper Evidence / Response | Physical tamper detection and automatic zeroisation | [Implementation description] | [Yes / No] |
| Audit Logging | All HSM operations logged and retained per policy | [Retention period] | [Yes / No] |
| Key Backup and Recovery | Encrypted key backup to secondary HSM or secure offline media | [Implementation description] | [Yes / No] |
| Network Isolation | HSM accessible only via dedicated management network | [Implementation description] | [Yes / No] |

### 7.3 Keys Stored in HSM

| Key Material | Key Type | Algorithm | Key Length | HSM Asset ID | Access Roles |
|---|---|---|---|---|---|
| RADIUS EAP-TLS Private Key | Asymmetric | RSA / ECDSA | [2048 / 256-bit] | [HSM-001] | [Role list] |
| Wireless PKI CA Private Key | Asymmetric | RSA / ECDSA | [4096 / 384-bit] | [HSM-001] | [Role list] |
| [Additional key material] | [Type] | [Algorithm] | [Length] | [HSM ID] | [Role list] |

---

## 8. Wireless Network Segmentation Evidence

*Document the network segmentation controls separating wireless networks from core infrastructure. Include VLAN assignments, firewall rule references, and confirmation of isolation between wireless segments.*

### 8.1 VLAN and Segmentation Configuration

| Wireless Network | SSID | VLAN ID | Subnet | Segment Purpose | Routing Restriction |
|---|---|---|---|---|---|
| Corporate Wi-Fi | [SSID] | [VLAN ID] | [Subnet/CIDR] | Employee devices | [Firewall zone: e.g., CORP] |
| Guest Wi-Fi | [SSID] | [VLAN ID] | [Subnet/CIDR] | Visitor internet access only | [Firewall zone: e.g., GUEST] |
| IoT / OT Wi-Fi | [SSID] | [VLAN ID] | [Subnet/CIDR] | Operational technology devices | [Firewall zone: e.g., OT] |

### 8.2 Firewall and ACL Controls

| Rule Reference | Source Zone | Destination Zone | Action | Purpose |
|---|---|---|---|---|
| [Rule ID / Policy Name] | Guest WLAN | Corporate LAN | **DENY** | Prevent guest lateral movement |
| [Rule ID / Policy Name] | Corporate WLAN | Internet | PERMIT (filtered) | Employee internet access |
| [Rule ID / Policy Name] | Corporate WLAN | Internal Servers | PERMIT (restricted) | Business application access |
| [Rule ID / Policy Name] | IoT WLAN | Corporate LAN | **DENY** | IoT isolation |

### 8.3 Evidence of Segmentation

*Attach or reference the following evidence artefacts confirming segmentation is operational.*

| Evidence Item | Description | Reference / Attachment |
|---|---|---|
| WLC VLAN Configuration Export | CLI output confirming VLAN-to-SSID mapping | [Appendix A] |
| Firewall Policy Export | Relevant firewall rules enforcing WLAN segmentation | [Appendix B] |
| Network Diagram | Logical topology showing WLAN segment isolation | [Appendix C] |
| Penetration Test Result | Confirmation that cross-segment access is blocked | [Appendix D / Reference] |

---

## 9. Rogue Access Point Detection

*Document the mechanisms deployed to detect, alert on, and respond to unauthorised or rogue access points within the wireless environment.*

### 9.1 Rogue AP Detection Capability

| Control | Implementation | Tool / Platform | Detection Mode | Status |
|---|---|---|---|---|
| WIDS/WIPS Deployment | [Description of deployment coverage] | [Platform Name] | [Passive / Active / Both] | [Enabled / Disabled] |
| Rogue AP Classification | [Auto-contained / Manual review] | [Platform Name] | [Classification criteria] | [Enabled / Disabled] |
| Alert and Notification | [SIEM integration, email, SOC ticketing] | [Platform Name] | Real-time | [Enabled / Disabled] |
| Rogue AP Containment | [Deauthentication frames / physical removal] | [Platform Name] | [Automatic / Manual] | [Enabled / Disabled] |

### 9.2 Rogue AP Detection Events (Review Period)

*Summarise rogue AP detection events occurring within the evidence collection period. Full logs to be retained per the log retention policy.*

| Event Date | Event ID | AP MAC Address | SSID (if known) | Classification | Action Taken | Resolved Date |
|---|---|---|---|---|---|---|
| [Date] | [Event ID] | [MAC Address] | [SSID] | [Rogue / Neighbour / Interferer] | [Contained / Investigated / Cleared] | [Date] |
| [Date] | [Event ID] | [MAC Address] | [SSID] | [Rogue / Neighbour / Interferer] | [Contained / Investigated / Cleared] | [Date] |

### 9.3 Detection Coverage Validation

| Validation Activity | Frequency | Last Performed | Performed By | Result |
|---|---|---|---|---|
| Wireless site survey (coverage validation) | [Quarterly] | [Date] | [Team / Vendor] | [Pass / Fail / Exceptions] |
| Rogue AP simulation test | [Annual / Per-event] | [Date] | [Team / Vendor] | [Pass / Fail] |
| WIDS alert verification | [Quarterly] | [Date] | [Team] | [Pass / Fail] |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for wireless configuration evidence activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Head of Cryptography | Network / Infrastructure Team | SOC / Security Operations | IT Audit | Risk Management | Branch IT |
|---|---|---|---|---|---|---|---|
| Wireless security policy approval | A | C | I | I | C | C | I |
| Cryptographic algorithm and key length approval | C | A/R | C | I | C | I | I |
| WLC and AP configuration management | I | C | A/R | I | I | I | R (branch APs) |
| HSM administration and key management | A | R | C | I | I | I | I |
| WIDS/WIPS monitoring and response | I | I | C | A/R | I | I | I |
| Rogue AP incident response | A | C | R | R | I | I | R (on-site) |
| Certificate lifecycle management | C | A/R | R | I | I | I | I |
| Evidence collection and documentation | C | A | R | C | I | I | I |
| Quarterly compliance review | A | R | C | C | C | C | I |
| Regulatory submission / audit support | A | C | C | C | R | C | I |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document created |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 11.2 Review Schedule

| Review Type | Trigger | Responsible | Next Scheduled Date |
|---|---|---|---|
| Scheduled Review | Quarterly | Head of Cryptography / Network Team | [Date] |
| Per-Event Review | Wireless infrastructure change, security incident, new AP deployment | CISO / Head of Cryptography | As required |
| Regulatory Review | BNM RMiT update or regulatory directive | CISO | As directed |

### 11.3 Approval Sign-Off

*This document requires the following approvals prior to issue and upon each revision.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Cryptography / Wireless Security | [Name] | | [Date] |
| CISO | [Name] | | [Date] |
| Head of IT / Infrastructure | [Name] | | [Date] |
| Head of IT Audit (for review) | [Name] | | [Date] |

---

## 12. References

| Reference | Description |
|---|---|
| BNM RMiT Policy Document, Clause 10.40 | Wireless Network Security — encryption, segmentation, and rogue AP detection requirements |
| BNM RMiT Policy Document, Clause 10.38–10.39 | Network Security and perimeter controls (contextual reference) |
| [Organization Name] Wireless Security Standard v[X.X] | Internal standard governing wireless network configuration |
| [Organization Name] Cryptographic Standards Policy v[X.X] | Approved algorithms, key lengths, and key management requirements |
| [Organization Name] Key Management Policy v[X.X] | Key lifecycle governance, HSM requirements, and custodian responsibilities |
| [Organization Name] Incident Response Policy v[X.X] | Rogue AP incident classification and response procedures |
| NIST SP 800-97 | Establishing Wireless Robust Security Networks: A Guide to IEEE 802.11i |
| NIST SP 800-121 Rev 2 | Guide to Bluetooth Security (if applicable) |
| NIST SP 800-188 | Department of Homeland Security Wireless Security Guidelines |
| IEEE 802.11i-2004 | Wireless LAN Medium Access Control (MAC) and Physical Layer Specifications — Security |
| FIPS 140-2 / FIPS 140-3 | Security Requirements for Cryptographic Modules (HSM certification standard) |
| NIST SP 800-88 Rev 1 | Guidelines for Media Sanitisation (applicable to key destruction) |
| CIS Controls v8, Control 15 | Wireless Access Control |

---

## Appendices

### Appendix A — WLC Configuration Export

*Attach or embed the full Wireless LAN Controller (WLC) configuration export confirming encryption protocol, SSID-to-VLAN mappings, authentication settings, and management controls. Sanitise sensitive values (PSK, SNMP community strings) before inclusion.*

**Evidence Reference:** [WLC-CONFIG-YYYYMMDD]
**Date Collected:** [Date]
**Collected By:** [Name / Role]

> [WLC configuration export or reference to secure artefact repository location: e.g., SharePoint / GRC Platform / Appendix attachment]

---

### Appendix B — Firewall Policy Export (WLAN Segments)

*Attach the relevant firewall or ACL rules confirming segmentation between wireless VLANs and internal network zones.*

**Evidence Reference:** [FW-POLICY-WLAN-YYYYMMDD]
**Date Collected:** [Date]
**Collected By:** [Name / Role]

> [Firewall policy export or reference to secure artefact repository location]

---

### Appendix C — Wireless Network Topology Diagram

*Attach the current logical and/or physical network diagram illustrating WLAN segments, VLAN boundaries, AP placement, WLC connectivity, and WIDS/WIPS sensor locations.*

**Evidence Reference:** [NETDIAG-WLAN-YYYYMMDD]
**Date Issued:** [Date]
**Issued By:** [Name / Role]

> [Network diagram or reference to diagram repository: e.g., draw.io / Visio / Lucidchart export]

---

### Appendix D — WIDS/WIPS Rogue AP Detection Logs

*Attach or reference the WIDS/WIPS event logs for the review period confirming rogue AP detection events, classifications, and response actions.*

**Evidence Reference:** [WIDS-LOG-YYYYMMDD]
**Log Period:** [Start Date] to [End Date]
**Collected By:** [Name / Role]

> [WIDS/WIPS log export or reference to SIEM/log management platform query]

---

### Appendix E — Certificate Inventory and Expiry Report

*Attach the current certificate inventory report confirming validity periods, algorithm compliance, and renewal status for all certificates used in the wireless environment.*

**Evidence Reference:** [CERT-INV-YYYYMMDD]
**Report Date:** [Date]
**Generated By:** [Name / Role]

> [Certificate inventory export from PKI management platform or HSM]

---

### Appendix F — HSM Audit Log Extract

*Attach an extract of the HSM audit log for the review period confirming key management operations, access events, and tamper detection status.*

**Evidence Reference:** [HSM-LOG-YYYYMMDD]
**Log Period:** [Start Date] to [End Date]
**Collected By:** [Name / Role]

> [HSM audit log extract or reference to secure log repository]

---

*End of Document*

*Document ID: [Document ID] | Version: 1.0 | Classification: Confidential | Owner: CISO / Head of Cryptography*
*© [Organization Name] — [Year]. This document is intended for authorised personnel only.*