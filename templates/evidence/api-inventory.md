# API Inventory

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Relevant Department Head] |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

*This section describes the intent of this document and the organizational boundary it covers.*

This document serves as the authoritative inventory of all Application Programming Interfaces (APIs) deployed, managed, or consumed by **[Organization Name]**. It provides a structured record of API assets, their security classifications, ownership, operational status, and associated documentation, in support of technology risk governance obligations.

This inventory is maintained in accordance with **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, specifically:

- **Clause 12.3** — Technology asset identification, classification, and lifecycle management requirements for financial institutions.

**Scope** includes all APIs that:

- Expose or consume data classified as internal, confidential, or restricted;
- Integrate with core banking, payment, or customer-facing systems;
- Connect to third-party service providers, partners, or cloud platforms;
- Are subject to open banking, regulatory reporting, or data-sharing obligations.

This inventory is reviewed **quarterly** at minimum, or upon any of the following trigger events:

- Onboarding or decommissioning of an API;
- Change in API ownership, classification, or integration scope;
- Security incident involving an API endpoint;
- Material change to a connected system or third-party relationship.

---

## 2. Asset and Item Identification

*List every API asset in scope. Each entry must be uniquely identifiable and traceable to a system or business function.*

| API ID | API Name | Description | Version | Protocol | Endpoint Base URL / Path | Hosting Environment | Integrated Systems |
|---|---|---|---|---|---|---|---|
| API-001 | [API Name] | [Brief functional description] | [v1.0] | [REST / SOAP / GraphQL / gRPC] | [/api/v1/...] | [On-premise / Cloud / Hybrid] | [System A, System B] |
| API-002 | [API Name] | [Brief functional description] | [v2.1] | [REST] | [/api/v2/...] | [Cloud – [Provider Name]] | [System C] |
| API-003 | | | | | | | |

**Guidance notes:**

- Assign a unique, sequential API ID using the format `API-XXX`.
- Include both internally developed and third-party / vendor-managed APIs consumed by the organization.
- Document all versions currently in active use; deprecated versions must remain listed with status "Decommissioned" until formally retired from all environments.

---

## 3. Classification and Categorisation

*Assign a security and data sensitivity classification to each API. Classification determines applicable controls, access restrictions, and disclosure requirements.*

### 3.1 Classification Framework

All APIs are classified according to **[Organization Name]'s Information Classification Policy** and aligned to BNM RMiT Clause 12.3 asset classification principles:

| Classification Level | Definition | Examples |
|---|---|---|
| **Public** | API is intentionally exposed to external parties with no authentication; data is non-sensitive | Public product rates, branch locator |
| **Internal** | API is restricted to internal users and systems; data is not for external disclosure | Internal reporting, staff directory |
| **Confidential** | API processes sensitive business, customer, or operational data; access is role-controlled | Customer account data, transaction APIs |
| **Restricted** | API processes highly sensitive, regulated, or legally protected data; access is strictly controlled and audited | PII under PDPA, payment credentials, regulatory submissions |

### 3.2 API Classification Register

| API ID | API Name | Data Classification | API Category | Data Types Processed | Regulatory Relevance |
|---|---|---|---|---|---|
| API-001 | [API Name] | [Public / Internal / Confidential / Restricted] | [Core Banking / Payment / Customer / Partner / Internal / Regulatory] | [e.g., Customer PII, Account Data] | [PDPA / RMiT / FATF / None] |
| API-002 | [API Name] | | | | |
| API-003 | | | | | |

### 3.3 Third-Party and Open Banking APIs

*List all APIs shared with or consumed from external parties, including open banking interfaces and vendor-provided integrations.*

| API ID | API Name | Direction | External Party | Purpose | Agreement Reference | Classification |
|---|---|---|---|---|---|---|
| API-EXT-001 | [API Name] | [Inbound / Outbound / Bidirectional] | [Third-Party Name] | [Purpose] | [MOU / SLA / Contract Ref] | [Confidential] |

---

## 4. Owner and Custodian

*Every API must have an accountable business owner and a technical custodian responsible for its maintenance and security.*

| API ID | API Name | Business Owner (Role) | Business Owner (Name) | Technical Custodian (Role) | Technical Custodian (Name) | Department | Contact Email |
|---|---|---|---|---|---|---|---|
| API-001 | [API Name] | [Head of Digital Banking] | [Name] | [Lead API Engineer] | [Name] | [Department Name] | [email@organization.com] |
| API-002 | [API Name] | | | | | | |
| API-003 | | | | | | | |

**Definitions:**

- **Business Owner** — Accountable for the business purpose, access decisions, and data classification of the API. Typically a department head or product owner.
- **Technical Custodian** — Responsible for the operational integrity, patching, monitoring, and technical documentation of the API. Typically a senior engineer or team lead.

---

## 5. Status and Lifecycle Stage

*Track the operational status of each API across its full lifecycle, from development through to decommissioning.*

### 5.1 Lifecycle Definitions

| Lifecycle Stage | Definition |
|---|---|
| **Development** | API is under active development; not yet available in any production-equivalent environment |
| **Testing / UAT** | API is in user acceptance or integration testing; not yet production-ready |
| **Production – Active** | API is live and in active use |
| **Production – Deprecated** | API remains live for backward compatibility but is scheduled for retirement; no new integrations permitted |
| **Decommissioned** | API has been retired; endpoint is no longer accessible; records retained for audit purposes |

### 5.2 API Status Register

| API ID | API Name | Current Lifecycle Stage | Go-Live Date | Deprecation Date (if applicable) | Decommission Date (if applicable) | Sunset Plan Reference |
|---|---|---|---|---|---|---|
| API-001 | [API Name] | [Production – Active] | [DD/MM/YYYY] | [N/A] | [N/A] | [N/A] |
| API-002 | [API Name] | [Production – Deprecated] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Sunset Plan Ref] |
| API-003 | | | | | | |

### 5.3 Change Events Log

*Record material changes to any API entry since last review.*

| Change Reference | API ID | Change Type | Description | Date of Change | Approved By |
|---|---|---|---|---|---|
| CHG-001 | API-001 | [Classification Change / Ownership Change / Version Upgrade / Decommission] | [Description of change] | [DD/MM/YYYY] | [Name / Role] |

---

## 6. Last Review Date

*This section records when each API entry was last validated for accuracy, and captures any findings from the review process.*

### 6.1 Individual API Review Status

| API ID | API Name | Last Review Date | Reviewed By | Review Outcome | Outstanding Actions | Action Due Date |
|---|---|---|---|---|---|---|
| API-001 | [API Name] | [DD/MM/YYYY] | [Name, Role] | [No issues / Issues identified] | [Action description or N/A] | [DD/MM/YYYY or N/A] |
| API-002 | [API Name] | | | | | |
| API-003 | | | | | | |

### 6.2 Inventory-Level Review Summary

| Review Cycle | Review Date | Total APIs | Active | Deprecated | Decommissioned | Issues Identified | Reviewer |
|---|---|---|---|---|---|---|---|
| Q1 [YYYY] | [DD/MM/YYYY] | [n] | [n] | [n] | [n] | [n] | [Name] |
| Q2 [YYYY] | [DD/MM/YYYY] | | | | | | |
| Q3 [YYYY] | [DD/MM/YYYY] | | | | | | |
| Q4 [YYYY] | [DD/MM/YYYY] | | | | | | |

---

## 7. Roles and Responsibilities

*This RACI table defines accountability for maintaining, reviewing, and acting on this inventory.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | [CTO / Head of Technology] | [Head of Information Security] | [API / Platform Engineering] | [Business Unit Owner] | [Compliance / Risk] | [Internal Audit] |
|---|---|---|---|---|---|---|
| Approve API Inventory Policy and Framework | A | C | I | I | C | I |
| Onboard new API entry to inventory | I | C | R | C | I | I |
| Assign and validate API classification | C | A | R | C | C | I |
| Assign Business Owner and Technical Custodian | A | I | C | R | I | I |
| Conduct quarterly inventory review | A | C | R | C | C | I |
| Approve classification changes | A | R | C | C | C | I |
| Initiate and approve API decommissioning | A | C | R | A | I | I |
| Review inventory for audit / regulatory purposes | I | C | C | I | R | A |
| Escalate unresolved inventory gaps | I | R | C | C | A | I |

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Role] | Initial document created |
| 1.1 | | | |
| 1.2 | | | |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| [Relevant Department Head] | [Name] | | [DD/MM/YYYY] |
| [Head of Information Security] | [Name] | | [DD/MM/YYYY] |
| [Chief Technology Officer] | [Name] | | [DD/MM/YYYY] |
| [Chief Risk Officer / Compliance] | [Name] | | [DD/MM/YYYY] |

---

## 9. References

| Reference | Document / Clause | Description |
|---|---|---|
| BNM RMiT | Clause 12.3 | Technology asset identification, classification, and lifecycle management |
| BNM RMiT | Clause 12 (General) | Technology risk management and governance framework |
| PDPA 2010 | Sections 5–8 | Personal data protection principles applicable to APIs processing customer PII |
| NACSA | Critical Information Infrastructure Guidelines | API security requirements for CII-designated systems |
| [Organization Name] | Information Classification Policy [Ref] | Internal data classification framework governing API categories |
| [Organization Name] | API Security Standard [Ref] | Internal technical standards for API authentication, encryption, and monitoring |
| [Organization Name] | Technology Asset Management Policy [Ref] | Parent policy governing this inventory |

---

## 10. Appendices

### Appendix A — API Documentation Index

*Link to or reference the technical documentation for each API. This appendix provides traceability between this inventory and full API specifications.*

| API ID | API Name | Documentation Type | Document Reference / URL | Version | Last Updated |
|---|---|---|---|---|---|
| API-001 | [API Name] | [OpenAPI Spec / Swagger / Internal Wiki] | [Reference or path] | [v1.0] | [DD/MM/YYYY] |
| API-002 | [API Name] | | | | |

### Appendix B — Security Controls Summary

*Summarise the security controls applied to each API. Detailed control evidence is maintained in the API Security Assessment Register.*

| API ID | API Name | Authentication Method | Authorisation Model | Transport Encryption | Rate Limiting | API Gateway Managed | Last Pen Test Date |
|---|---|---|---|---|---|---|---|
| API-001 | [API Name] | [OAuth 2.0 / mTLS / API Key / None] | [RBAC / ABAC / Scope-based] | [TLS 1.2 / TLS 1.3] | [Yes / No] | [Yes / No] | [DD/MM/YYYY] |
| API-002 | [API Name] | | | | | | |

### Appendix C — Decommissioned APIs Archive

*Retain records of decommissioned APIs for a minimum of **[7 years]** in accordance with [Organization Name]'s Records Retention Policy and BNM audit trail requirements.*

| API ID | API Name | Decommission Date | Reason | Decommissioned By | Approved By | Archive Reference |
|---|---|---|---|---|---|---|
| API-DCM-001 | [API Name] | [DD/MM/YYYY] | [End of life / System replacement / Vendor contract ended] | [Name] | [Name] | [Archive Ref] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **API** | Application Programming Interface — a defined interface allowing two systems to communicate |
| **REST** | Representational State Transfer — a stateless HTTP-based API architectural style |
| **mTLS** | Mutual Transport Layer Security — bidirectional certificate-based authentication |
| **OAuth 2.0** | Open Authorization 2.0 — industry-standard protocol for API access delegation |
| **RMiT** | Risk Management in Technology — BNM policy document governing technology risk in financial institutions |
| **CII** | Critical Information Infrastructure — systems designated as critical under national cybersecurity frameworks |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **NACSA** | National Cyber Security Agency — Malaysia's lead agency for national cybersecurity policy |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |

---

*This document is classified as **Confidential**. Unauthorized disclosure is prohibited. Retain in accordance with [Organization Name]'s Records Retention Policy.*

*Document ID: [Document ID] | Version: 1.0 | Owner: [Relevant Department Head] | [Organization Name]*