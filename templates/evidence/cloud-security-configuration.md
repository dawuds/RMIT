# Cloud Security Configuration

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Security Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document provides configuration evidence demonstrating that [Organization Name]'s cloud environment meets the security requirements prescribed under Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, with specific reference to **Clause 17.2** (Cloud Services). It serves as a formal compliance artifact capturing the current state of Identity and Access Management (IAM), data protection controls, and network security configurations applied across all in-scope cloud deployments.

This document is mandatory evidence for RMiT compliance reviews, internal audits, and regulatory examinations. It must be updated following any material configuration change or at minimum on a quarterly basis.

**In-Scope Systems and Services:**

- [List cloud platforms, e.g., Microsoft Azure, AWS, Google Cloud Platform]
- [List in-scope workloads, environments, or business units]
- [Specify deployment environments: Production / UAT / Development]

**Out-of-Scope:**

- [List any systems or environments explicitly excluded and the rationale]

---

## 2. Assessment Scope and Criteria

*Define the boundaries of this configuration review, the regulatory and internal standards used as the assessment baseline, and the cloud environments evaluated.*

### 2.1 Assessment Scope

| Dimension | Details |
|---|---|
| **Cloud Provider(s)** | [e.g., Microsoft Azure / AWS / GCP] |
| **Subscription / Account IDs** | [List account or subscription identifiers] |
| **Environments Assessed** | [Production / Non-Production / DR] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Assessment Type** | [Per-Event / Quarterly / Ad-hoc] |
| **Triggered By** | [Change Reference / Scheduled Review / Incident] |

### 2.2 Assessment Criteria

The following standards and frameworks were applied as assessment benchmarks:

| Standard / Framework | Version / Edition | Applicability |
|---|---|---|
| BNM RMiT Policy Document | [Version / Issue Date] | Clause 17.2 — Cloud Services |
| CIS Benchmarks | [e.g., CIS Azure Foundations v2.0] | IAM, Network, Data Protection |
| ISO/IEC 27001:2022 | 2022 | Information Security Controls |
| [Organization Name] Cloud Security Policy | [Version] | Internal Baseline |
| [NACSA Cloud Security Framework] | [Version, if applicable] | National cybersecurity requirements |

---

## 3. Methodology

*Describe the techniques, tools, and procedures used to capture and validate the cloud security configuration evidence presented in this document.*

### 3.1 Evidence Collection Approach

- **Automated Configuration Scanning:** [Describe tools used, e.g., Microsoft Defender for Cloud, AWS Security Hub, Prisma Cloud]
- **Manual Review:** [Describe manual checks performed, e.g., console inspection, policy document review]
- **Export / API Pull:** [Describe any configuration exports, e.g., Azure Policy compliance reports, IAM role listings via CLI]
- **Interview / Attestation:** [Note any verbal or written attestations obtained from cloud administrators]

### 3.2 Tools and Utilities

| Tool | Version | Purpose |
|---|---|---|
| [e.g., Microsoft Defender for Cloud] | [Version] | Policy compliance and threat detection |
| [e.g., AWS Config] | [Version] | Resource configuration history and rules |
| [e.g., Terraform / Pulumi] | [Version] | Infrastructure-as-code configuration baseline |
| [e.g., Nessus / Qualys] | [Version] | Vulnerability and misconfiguration scanning |

### 3.3 Limitations and Assumptions

- [State any access constraints, tool limitations, or assumptions that may affect the completeness of this assessment]
- [Note any configurations that could not be validated and the reason]

---

## 4. Findings and Ratings

*Summarise the configuration findings identified during the assessment, their severity ratings, and remediation status. Attach detailed evidence in Appendix A.*

### 4.1 Executive Summary of Findings

| Severity | Count | Remediated | Open | Risk Accepted |
|---|---|---|---|---|
| Critical | [#] | [#] | [#] | [#] |
| High | [#] | [#] | [#] | [#] |
| Medium | [#] | [#] | [#] | [#] |
| Low | [#] | [#] | [#] | [#] |
| Informational | [#] | [#] | [#] | [#] |
| **Total** | **[#]** | **[#]** | **[#]** | **[#]** |

### 4.2 Detailed Findings Register

| Finding ID | Control Domain | Finding Description | Severity | Affected Resource | Status | Remediation Action | Target Date | Owner |
|---|---|---|---|---|---|---|---|---|
| F-001 | IAM | [e.g., MFA not enforced for privileged accounts] | Critical | [Resource ID] | Open | [Enforce MFA via Conditional Access Policy] | [Date] | [Name] |
| F-002 | Network Security | [e.g., Unrestricted inbound access on port 22] | High | [Resource ID] | Remediated | [NSG rule updated] | [Date] | [Name] |
| F-003 | Data Protection | [e.g., Storage bucket encryption not enabled] | High | [Resource ID] | In Progress | [Enable SSE-KMS] | [Date] | [Name] |
| [F-00n] | [Domain] | [Description] | [Severity] | [Resource] | [Status] | [Action] | [Date] | [Owner] |

### 4.3 Overall Configuration Compliance Rating

| Control Domain | Compliant | Partially Compliant | Non-Compliant | Overall Rating |
|---|---|---|---|---|
| Identity and Access Management | [%] | [%] | [%] | [Rating] |
| Data Protection | [%] | [%] | [%] | [Rating] |
| Network Security | [%] | [%] | [%] | [Rating] |
| Logging and Monitoring | [%] | [%] | [%] | [Rating] |
| **Overall** | **[%]** | **[%]** | **[%]** | **[Rating]** |

> **Rating Scale:** Satisfactory | Needs Improvement | Unsatisfactory

---

## 5. Identity and Access Management (IAM)

*Document the current IAM configuration, policies, and controls governing user access to cloud resources, including privileged access controls.*

### 5.1 Access Provisioning and Deprovisioning Workflow

*Describe the end-to-end process for granting and revoking cloud access, including approvals, tooling, and timelines.*

**Provisioning Steps:**

1. Access request submitted via [Ticketing System, e.g., ServiceNow] — Reference: [Ticket ID format]
2. Line Manager approval obtained
3. Information Security review and approval (for privileged roles)
4. Cloud Administrator provisions access with minimum necessary permissions
5. Access confirmation notification sent to user and manager
6. Record updated in [Access Management Register / ITSM]

**Deprovisioning Steps:**

1. Trigger event identified: [Resignation / Role Change / Project Completion / Periodic Review]
2. HR / Line Manager notifies IT Security via [Process / System]
3. Cloud Administrator revokes access within [Timeframe, e.g., 24 hours for standard, immediate for terminations]
4. Access removal confirmed and logged in [System]
5. Confirmation communicated to HR and Line Manager

**Provisioning and Deprovisioning SLAs:**

| Event Type | Maximum Provisioning Time | Maximum Deprovisioning Time |
|---|---|---|
| New Joiner (Standard) | [e.g., 2 business days] | N/A |
| New Joiner (Privileged) | [e.g., 5 business days] | N/A |
| Role Change | [e.g., 3 business days] | [e.g., Same day] |
| Resignation / Termination | N/A | [e.g., Immediate / same day] |
| Contract Expiry | N/A | [e.g., Automatic on contract end date] |

### 5.2 Privileged Access Controls

| Control | Configuration Status | Evidence Reference |
|---|---|---|
| Multi-Factor Authentication (MFA) enforced for all users | [Enabled / Disabled] | [Appendix A — Screenshot/Export] |
| MFA enforced for privileged/administrator accounts | [Enabled / Disabled] | [Appendix A] |
| Privileged Identity Management (PIM) / Just-in-Time access | [Enabled / Disabled] | [Appendix A] |
| No shared/generic administrative accounts | [Compliant / Non-Compliant] | [Appendix A] |
| Break-glass accounts secured and monitored | [Compliant / Non-Compliant] | [Appendix A] |
| Service account permissions reviewed and least-privilege applied | [Compliant / Non-Compliant] | [Appendix A] |

---

## 6. Segregation of Duties Matrix

*Define and document the separation of incompatible duties within the cloud environment to prevent fraud, error, and misuse of privileged access.*

### 6.1 Segregation of Duties Policy Statement

[Organization Name] enforces segregation of duties (SoD) across cloud administration functions to ensure that no single individual can complete a high-risk transaction without involvement from another authorized party. The following matrix defines incompatible role combinations that must not be assigned to the same individual.

### 6.2 Cloud Role Conflict Matrix

| Function A | Function B | Conflict Level | Compensating Control (if combined) |
|---|---|---|---|
| Cloud Identity Administrator | Cloud Security Auditor | **High** | Dual approval for any IAM change; automated audit log review |
| Provisioning Access | Approving Access Requests | **High** | Mandatory separate approver in ticketing workflow |
| Key Management (KMS) Administrator | Data Administrator | **High** | Separate personnel; reviewed in quarterly access certification |
| Network Security Rule Administration | Firewall Change Approver | **High** | Change Advisory Board (CAB) approval required |
| Application Deployment | Production Environment Administrator | **Medium** | Deployment pipeline enforces automated approval gates |
| Billing / Cost Management | Procurement Approval | **Medium** | Finance sign-off required for cloud spend above [threshold] |

### 6.3 Role Assignment Summary

| Cloud Role | Assigned To (Count) | Named Individuals | Last Reviewed |
|---|---|---|---|
| Global Administrator / Root | [#] | [Name(s)] | [Date] |
| Security Administrator | [#] | [Name(s)] | [Date] |
| Network Administrator | [#] | [Name(s)] | [Date] |
| IAM Administrator | [#] | [Name(s)] | [Date] |
| Read-Only / Auditor | [#] | [Name(s)] | [Date] |
| Developer / Contributor | [#] | [Name(s)] | [Date] |

---

## 7. Periodic Access Certification Process

*Describe the recurrent review process used to validate that existing cloud access rights remain appropriate, authorized, and consistent with current job functions.*

### 7.1 Access Certification Schedule

| Review Type | Frequency | Scope | Responsible Party |
|---|---|---|---|
| Privileged Access Review | Quarterly | All privileged and administrative roles | CISO / Network Security Manager |
| Standard User Access Review | Semi-Annually | All cloud user accounts | Line Managers + IT Security |
| Service Account Review | Quarterly | All non-human / service identities | Cloud Operations Team |
| Third-Party / Vendor Access Review | Quarterly | External contractor and vendor accounts | Vendor Manager + IT Security |
| Emergency / Break-Glass Account Review | Post-use + Monthly | Break-glass accounts | CISO |

### 7.2 Certification Workflow

1. **Initiation:** Access certification campaign launched via [Tool/Platform, e.g., Azure AD Access Reviews, SailPoint] by [Role]
2. **Notification:** Account owners and line managers notified with access listing for review
3. **Review Period:** [e.g., 14 calendar days] for reviewers to certify, modify, or revoke access
4. **Escalation:** Non-responses escalated to [Role] after [e.g., 7 days]
5. **Remediation:** Access revocations actioned within [e.g., 5 business days] of certification decision
6. **Reporting:** Certification completion report submitted to [CISO / Audit Committee] and retained as evidence

### 7.3 Most Recent Certification Results

| Review Cycle | Period Covered | Total Accounts Reviewed | Access Confirmed | Access Revoked | Completion Rate | Conducted By |
|---|---|---|---|---|---|---|
| Privileged Access Q[n] [Year] | [Date Range] | [#] | [#] | [#] | [%] | [Name / Team] |
| Standard User [H1/H2] [Year] | [Date Range] | [#] | [#] | [#] | [%] | [Name / Team] |

---

## 8. Cloud Service Model and Deployment Type

*Identify the cloud service and deployment models in use, and describe the associated security responsibilities and risk considerations.*

### 8.1 Cloud Deployment Classification

| Environment | Cloud Provider | Service Model | Deployment Type | Business Function |
|---|---|---|---|---|
| [e.g., Core Banking Integration] | [e.g., Microsoft Azure] | PaaS | Private / Hybrid | [Description] |
| [e.g., Analytics Platform] | [e.g., AWS] | IaaS | Public | [Description] |
| [e.g., Collaboration Tools] | [e.g., Microsoft 365] | SaaS | Public | [Description] |

### 8.2 Shared Responsibility Model

*The table below documents the division of security responsibilities between [Organization Name] and the cloud service provider(s) for each service model in use.*

| Security Responsibility | IaaS | PaaS | SaaS |
|---|---|---|---|
| Physical infrastructure security | CSP | CSP | CSP |
| Hypervisor / Host OS security | CSP | CSP | CSP |
| Network controls (virtual) | **Shared** | CSP | CSP |
| Operating system patching | **[Org Name]** | CSP | CSP |
| Application security | **[Org Name]** | **[Org Name]** | CSP |
| Data classification and protection | **[Org Name]** | **[Org Name]** | **[Org Name]** |
| Identity and access management | **[Org Name]** | **[Org Name]** | **Shared** |
| Incident detection and response | **Shared** | **Shared** | **Shared** |

> **CSP** = Cloud Service Provider | **[Org Name]** = [Organization Name] | **Shared** = Joint responsibility

### 8.3 Cloud Service Provider Agreements

| CSP | Contract Type | Agreement Reference | Expiry Date | BNM Notification Status |
|---|---|---|---|---|
| [CSP Name] | [Enterprise Agreement / MCCA / etc.] | [Reference Number] | [Date] | [Notified / Pending / N/A] |

---

## 9. Data Residency Requirements

*Document the data residency obligations applicable to cloud-hosted data, including regulatory requirements and technical enforcement controls.*

### 9.1 Regulatory Data Residency Position

Under BNM RMiT Clause 17.2 and the **Personal Data Protection Act 2010 (PDPA)**, [Organization Name] is required to ensure that data classified as sensitive customer data, financial data, or personal data is stored and processed within approved jurisdictions unless explicit approval has been obtained.

| Requirement | Regulatory Reference | [Organization Name] Position |
|---|---|---|
| Customer financial data must reside in Malaysia | RMiT Clause 17.2 | [Compliant — all financial data stored in Malaysian data centres] |
| Cross-border data transfer requires safeguards | PDPA Section 129 | [Data transfer agreements in place for [jurisdiction]] |
| BNM approval for offshore storage of material systems | RMiT Clause 17.2(g) | [Approval reference: [Reference Number]] |

### 9.2 Data Classification and Residency Register

| Data Classification | Description | Approved Storage Region(s) | Current Storage Location | Compliant? |
|---|---|---|---|---|
| Secret / Restricted | Core banking data, cryptographic keys | Malaysia only | [e.g., Azure Malaysia South] | [Yes / No] |
| Confidential | Customer PII, financial transactions | Malaysia; approved jurisdictions | [Location] | [Yes / No] |
| Internal | Operational data, logs | Malaysia; DR region [specify] | [Location] | [Yes / No] |
| Public | Marketing materials | Unrestricted | [Location] | [Yes / No] |

### 9.3 Data Residency Enforcement Controls

| Control | Implementation | Status |
|---|---|---|
| Azure Policy / AWS SCP restricting resource creation to approved regions | [Policy Name / ID] | [Enabled / Disabled] |
| Data Loss Prevention (DLP) policies for cross-border transfer prevention | [Tool / Platform] | [Enabled / Disabled] |
| Encryption in transit enforced (TLS 1.2 minimum) | [Certificate Manager / Policy] | [Enforced] |
| Encryption at rest enforced using managed keys | [KMS / Key Vault] | [Enforced] |
| Customer-managed encryption keys (CMEK) for sensitive workloads | [Key Vault Reference] | [Yes / No] |

---

## 10. Network Security Configuration

*Document the network security controls applied to the cloud environment, including segmentation, firewall rules, and monitoring.*

### 10.1 Network Architecture Summary

- **Virtual Network / VPC Configuration:** [Describe VNet/VPC layout, address spaces, and segmentation approach]
- **Subnet Segmentation:** [e.g., Separate subnets for application, data, management, and DMZ tiers]
- **Connectivity to On-Premises:** [e.g., ExpressRoute / VPN Gateway / Direct Connect — Circuit ID: [Reference]]
- **Internet-Facing Resources:** [List any public-facing endpoints and their protection controls]

### 10.2 Network Security Controls Evidence

| Control | Configuration | Evidence Reference | Status |
|---|---|---|---|
| Network Security Groups (NSG) / Security Groups applied to all subnets | [Policy / Config Reference] | [Appendix B] | [Compliant] |
| Default deny-all inbound rule enforced | [Rule Reference] | [Appendix B] | [Compliant] |
| Web Application Firewall (WAF) deployed for internet-facing applications | [WAF Policy Reference] | [Appendix B] | [Compliant] |
| DDoS Protection enabled | [Standard / Basic] | [Appendix B] | [Compliant] |
| Network traffic logging / Flow Logs enabled | [Log Analytics Workspace] | [Appendix B] | [Compliant] |
| Private Endpoints used for PaaS service connectivity | [Endpoint Reference] | [Appendix B] | [Compliant] |
| Bastion Host / Jump Server enforced for administrative access | [Bastion Host Reference] | [Appendix B] | [Compliant] |

---

## 11. Roles and Responsibilities

*This RACI matrix defines accountability for the maintenance, review, and approval of this document and its associated controls.*

| Activity | CISO | Network Security Manager | Cloud Operations Team | IT Audit | Line Manager | Compliance Officer |
|---|---|---|---|---|---|---|
| Define cloud security policy and standards | A | R | C | C | I | C |
| Configure and maintain IAM controls | I | A | R | I | I | I |
| Conduct access provisioning / deprovisioning | I | A | R | I | C | I |
| Perform segregation of duties review | C | R | I | A | I | C |
| Execute periodic access certification | I | A | R | C | R | I |
| Monitor network security configurations | I | A | R | I | I | I |
| Maintain data residency compliance | C | R | C | I | I | A |
| Review and approve this document | A | R | C | C | I | C |
| Report findings to senior management | A | R | I | C | I | C |

> **R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Role] | Initial document creation |
| [1.1] | [Date] | [Author Name], [Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Role] | [Description of major revision] |

### 12.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Security Manager | [Name] | _________________ | [Date] |
| Chief Information Security Officer (CISO) | [Name] | _________________ | [Date] |
| Chief Information Officer (CIO) | [Name] | _________________ | [Date] |
| Compliance Officer | [Name] | _________________ | [Date] |

---

## 13. References

| Reference | Description |
|---|---|
| BNM RMiT Policy Document, Clause 17.2 | Cloud Services — security requirements for financial institutions using cloud computing |
| Personal Data Protection Act 2010 (PDPA), Section 129 | Transfer of personal data to places outside Malaysia |
| NACSA Cloud Security Framework | National cybersecurity requirements for cloud adoption in Malaysia |
| ISO/IEC 27001:2022, Annex A Controls 5.15–5.18 | Access control and identity management |
| ISO/IEC 27017:2015 | Code of practice for information security controls for cloud services |
| CIS Benchmarks — [Platform, e.g., CIS Azure Foundations v2.0] | Technical security configuration baseline |
| [Organization Name] Cloud Security Policy, v[X.X] | Internal policy governing cloud adoption and security controls |
| [Organization Name] Information Classification Policy, v[X.X] | Internal data classification framework |

---

## Appendices

### Appendix A — IAM Configuration Evidence

*Attach or embed the following evidence artefacts:*

- [ ] Screenshot or export of IAM role assignments — exported [Date] from [Platform]
- [ ] MFA enforcement policy configuration — Policy ID: [Reference]
- [ ] Privileged Identity Management (PIM) / Just-in-Time access configuration — exported [Date]
- [ ] Service account inventory and permission summary
- [ ] Access certification completion report — Period: [Date Range]

### Appendix B — Network Security Configuration Evidence

*Attach or embed the following evidence artefacts:*

- [ ] Network Security Group (NSG) / Security Group rule exports — exported [Date]
- [ ] WAF policy configuration summary
- [ ] Network topology diagram — Version: [Version], Date: [Date]
- [ ] Flow Logs and traffic monitoring configuration screenshots
- [ ] Private Endpoint configuration listing

### Appendix C — Data Protection Configuration Evidence

*Attach or embed the following evidence artefacts:*

- [ ] Encryption at rest configuration — Key Vault / KMS settings, exported [Date]
- [ ] TLS/SSL policy configuration confirming minimum TLS 1.2 enforcement
- [ ] Data residency policy / Azure Policy / AWS SCP export confirming region restrictions
- [ ] DLP policy configuration summary
- [ ] Customer-managed encryption key (CMEK) configuration, if applicable

### Appendix D — Compliance Scan Reports

*Attach or embed the following evidence artefacts:*

- [ ] Microsoft Defender for Cloud / AWS Security Hub full compliance report — Run Date: [Date]
- [ ] CIS Benchmark assessment report — Tool: [Tool Name], Date: [Date]
- [ ] Vulnerability scan results relevant to cloud configuration — Scan ID: [Reference]

### Appendix E — Regulatory Correspondence

*Attach copies of any regulatory notifications, approvals, or correspondence relevant to cloud usage:*

- [ ] BNM notification of cloud adoption — Reference: [Reference Number], Date: [Date]
- [ ] BNM approval for offshore storage (if applicable) — Reference: [Reference Number]
- [ ] Cloud Service Provider Data Processing Agreement (DPA) — CSP: [Name], Date: [Date]

---

*This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. All printed copies are uncontrolled. Refer to the document management system for the current version.*