# Environment Architecture Diagram

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document provides the Environment Architecture Diagram for **[Organization Name]**, demonstrating the logical and physical separation between technology environments in accordance with Bank Negara Malaysia's **Risk Management in Technology (RMiT) Policy Document**, specifically **Clause 10.13**.

The diagram and supporting documentation serve as primary evidence that [Organization Name] maintains appropriate segregation between development, staging/user acceptance testing (UAT), and production environments, thereby minimising the risk of unauthorised change, data contamination, and service disruption.

**Scope of Coverage:**

- All technology environments hosting systems classified as critical or significant under [Organization Name]'s IT asset classification policy
- Network segments, access control boundaries, and data flow paths between environments
- Cloud, on-premises, and hybrid infrastructure components as applicable

---

## 2. Assessment Scope and Criteria

*Define the boundaries of this architecture review, specifying which systems, environments, and infrastructure tiers are included, and list the criteria used to evaluate adequacy of separation.*

### 2.1 In-Scope Environments

| Environment | Description | Hosting Model | System(s) Covered |
|---|---|---|---|
| Production (PROD) | Live customer-facing systems | [On-Premises / Cloud / Hybrid] | [System Name(s)] |
| User Acceptance Testing (UAT) | Pre-production validation | [On-Premises / Cloud / Hybrid] | [System Name(s)] |
| Staging / Pre-PROD | Release candidate testing | [On-Premises / Cloud / Hybrid] | [System Name(s)] |
| Development (DEV) | Active development workloads | [On-Premises / Cloud / Hybrid] | [System Name(s)] |
| Disaster Recovery (DR) | Business continuity environment | [On-Premises / Cloud / Hybrid] | [System Name(s)] |

### 2.2 Evaluation Criteria

- Logical network segregation (VLANs, subnets, security groups)
- Physical or virtual infrastructure isolation
- Access control separation (separate credentials, roles, and privilege sets per environment)
- Data flow controls (no direct production data replication to lower environments without masking)
- Change management enforcement at environment boundaries
- Monitoring and alerting coverage per environment

---

## 3. Methodology

*Describe the approach used to develop, validate, and maintain this architecture diagram, including tools, data sources, and review processes.*

### 3.1 Documentation Approach

The environment architecture was documented using the following methodology:

1. **Discovery** — Infrastructure inventory collected from [CMDB / Asset Register / Cloud Console] as at [Discovery Date]
2. **Mapping** — Network topology and environment boundaries mapped using [Tool/Method, e.g., draw.io, Lucidchart, Visio]
3. **Validation** — Diagram reviewed against live configuration by [Infrastructure Team / Cloud Team] on [Validation Date]
4. **Gap Analysis** — Actual environment boundaries compared against RMiT Clause 10.13 requirements
5. **Sign-Off** — Reviewed and approved by [Relevant Department Head]

### 3.2 Diagramming Standards

| Standard | Value |
|---|---|
| Notation | [e.g., UML Network Diagram / TOGAF / Custom] |
| Tooling | [e.g., draw.io, Lucidchart, Visio] |
| Version Control | [e.g., Confluence, SharePoint, Git] |
| Reference File Location | [Link or File Path to Diagram Source File] |

---

## 4. Findings and Ratings

*Summarise the findings from the architecture review, rating the adequacy of environment separation controls. Assign an overall rating and detail any identified gaps.*

### 4.1 Overall Rating

| Domain | Rating | Remarks |
|---|---|---|
| Network Segregation | [Satisfactory / Needs Improvement / Unsatisfactory] | [Remarks] |
| Access Control Separation | [Satisfactory / Needs Improvement / Unsatisfactory] | [Remarks] |
| Data Isolation Controls | [Satisfactory / Needs Improvement / Unsatisfactory] | [Remarks] |
| Change Control at Boundaries | [Satisfactory / Needs Improvement / Unsatisfactory] | [Remarks] |
| Monitoring Coverage | [Satisfactory / Needs Improvement / Unsatisfactory] | [Remarks] |
| **Overall** | **[Satisfactory / Needs Improvement / Unsatisfactory]** | |

### 4.2 Architecture Diagram

*Embed or attach the environment architecture diagram below. Ensure the diagram clearly labels each environment tier, network boundaries, access control points, and data flows.*

> **[INSERT ENVIRONMENT ARCHITECTURE DIAGRAM HERE]**
>
> *Diagram must show: environment tiers (PROD, UAT, DEV, DR), network segmentation boundaries, firewall/security group positions, access paths, and any shared services with controls annotated.*

### 4.3 Key Observations

- [Observation 1: e.g., Production and UAT environments are segregated across separate VLANs with firewall rules enforced]
- [Observation 2: e.g., Developer access to production environment is restricted via privileged access management (PAM)]
- [Observation 3: e.g., Production data used in UAT is masked in accordance with the Data Masking Standard]
- [Observation 4 — Gap if any: e.g., DR environment does not have equivalent monitoring coverage as PROD]

---

## 5. Evidence Reviewed

*List all evidence artefacts reviewed to validate the accuracy and completeness of the architecture diagram and separation controls.*

| # | Evidence Item | Source | Date / Version | Reviewed By |
|---|---|---|---|---|
| 1 | Network topology diagram | [Infrastructure Team] | [Date] | [Name] |
| 2 | Firewall ruleset / Security group policies | [Network / Cloud Team] | [Date] | [Name] |
| 3 | VLAN / Subnet allocation register | [Network Team] | [Date] | [Name] |
| 4 | Access control matrix (per environment) | [IAM / Security Team] | [Date] | [Name] |
| 5 | Data masking procedure / evidence | [DBA / Data Team] | [Date] | [Name] |
| 6 | Change management records | [Change Advisory Board] | [Date] | [Name] |
| 7 | Privileged access review report | [Security Team] | [Date] | [Name] |
| 8 | Cloud console configuration export | [Cloud / Infrastructure Team] | [Date] | [Name] |

---

## 6. Recommendations

*List any remediation actions identified during the review, including responsible party, priority, and target resolution date.*

| # | Recommendation | Priority | Responsible Party | Target Date | Status |
|---|---|---|---|---|---|
| R01 | [e.g., Implement equivalent monitoring for DR environment] | [High / Medium / Low] | [Team/Role] | [Date] | [Open / In Progress / Closed] |
| R02 | [e.g., Enforce MFA for all developer access to UAT environment] | [High / Medium / Low] | [Team/Role] | [Date] | [Open / In Progress / Closed] |
| R03 | [e.g., Document and formalise data masking procedures for UAT data loads] | [High / Medium / Low] | [Team/Role] | [Date] | [Open / In Progress / Closed] |

---

## 7. Roles and Responsibilities

*The following RACI matrix defines accountability for maintaining and reviewing the environment architecture diagram.*

| Activity | [Dept Head / CISO] | [Infrastructure Lead] | [Security Team] | [Audit / Compliance] | [Change Advisory Board] |
|---|---|---|---|---|---|
| Own and approve this document | A | R | C | I | I |
| Maintain architecture diagram accuracy | I | R | C | I | I |
| Review environment separation controls | A | R | R | C | I |
| Approve changes affecting environment boundaries | A | C | C | I | R |
| Conduct periodic review (quarterly or per-event) | A | R | C | I | I |
| Report findings to senior management | R | C | C | I | I |
| Remediate identified gaps | I | R | R | I | C |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 8. Review and Approval

### 8.1 Review Triggers

This document shall be reviewed:

- **Periodically** — At a minimum, quarterly
- **Per-event** — Upon any material change to the technology environment, including infrastructure upgrades, cloud migrations, introduction of new systems, or significant architectural changes
- **Post-incident** — Following any incident involving unauthorised access between environments or environment boundary breach

### 8.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [x.x] | [Date] | [Author Name] | [Description of changes] |

### 8.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| [Relevant Department Head] | [Name] | __________________ | [Date] |
| [Chief Information Security Officer] | [Name] | __________________ | [Date] |
| [Chief Information Officer / CTO] | [Name] | __________________ | [Date] |
| [Internal Audit Representative] | [Name] | __________________ | [Date] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 10.13 | Requirement for separation of development, testing, and production environments |
| [Organization Name] IT Policy | [Policy ID] | Internal IT Security Policy — Environment Management |
| [Organization Name] Change Management Policy | [Policy ID] | Change control requirements at environment boundaries |
| [Organization Name] Data Classification Policy | [Policy ID] | Data handling requirements per environment tier |
| ISO/IEC 27001 | Annex A.12.1.4 | Separation of development, testing, and operational environments |

---

## Appendices

### Appendix A — Detailed Network Segmentation Table

*Provide a tabular breakdown of all network segments, corresponding VLAN IDs, IP ranges, and associated environments.*

| Environment | VLAN ID | Subnet / IP Range | Associated Systems | Firewall Zone |
|---|---|---|---|---|
| PROD | [VLAN ID] | [e.g., 10.10.1.0/24] | [System Names] | [Zone Name] |
| UAT | [VLAN ID] | [e.g., 10.10.2.0/24] | [System Names] | [Zone Name] |
| DEV | [VLAN ID] | [e.g., 10.10.3.0/24] | [System Names] | [Zone Name] |
| DR | [VLAN ID] | [e.g., 10.10.4.0/24] | [System Names] | [Zone Name] |

### Appendix B — Access Control Summary

*Summarise the access control configurations enforcing environment separation, including authentication methods and privileged access controls.*

| Environment | Authentication Method | Privileged Access Control | MFA Required | Admin Access Restricted To |
|---|---|---|---|---|
| PROD | [e.g., AD + PAM] | [e.g., CyberArk / BeyondTrust] | Yes | [Role(s)] |
| UAT | [e.g., AD] | [e.g., Local PAM] | [Yes / No] | [Role(s)] |
| DEV | [e.g., AD] | [e.g., Standard RBAC] | [Yes / No] | [Role(s)] |
| DR | [e.g., AD + PAM] | [e.g., CyberArk / BeyondTrust] | Yes | [Role(s)] |

### Appendix C — Glossary

| Term | Definition |
|---|---|
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology Policy Document issued by BNM |
| PROD | Production environment — live, customer-facing systems |
| UAT | User Acceptance Testing environment |
| DEV | Development environment |
| DR | Disaster Recovery environment |
| VLAN | Virtual Local Area Network |
| PAM | Privileged Access Management |
| RACI | Responsible, Accountable, Consulted, Informed |
| CMDB | Configuration Management Database |