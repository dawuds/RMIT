# Corrected RMiT Clause Map (Based on Nov 28, 2025 PDF)

This document serves as the "Source of Truth" for re-aligning the repository's data structure with the official BNM RMiT document. The repository currently exhibits hallucinated/shifted numbering (e.g., claiming 10.63 exists).

## PART B: POLICY REQUIREMENTS

### 8 Governance
*   **Responsibilities of the Board of Directors:** 8.1 - 8.5
*   **Responsibilities of the senior management:** 8.6 - 8.7

### 9 Technology Risk Management
*   **Risk Management Framework:** 9.1 - 9.3
*   **Designated Chief Information Security Officer:** 9.4 - 9.5

### 10 Technology Operations Management (Ends at 10.57)
*   **Technology Project Management:** 10.1 - 10.3
*   **System Development and Acquisition:** 10.4 - 10.16
*   **Patch and End-of-Life System Management:** 10.17 - 10.19
*   **Cryptography:** 10.20 - 10.23
*   **Data Centre Resilience:** 10.24 - 10.28
*   **Service Availability:** 10.29 - 10.35
*   **Network Resilience:** 10.36 - 10.43
*   **System backup and restoration:** 10.44 - 10.45
*   **Third Party Service Provider Management:** 10.46 - 10.49
*   **Cloud Services:** 10.50 - 10.52
*   **Access Control:** 10.53 - 10.57

*(Note: The current repository references clauses 10.58-10.65 which do not exist in the official document).*

### 11 Cybersecurity Management
*   **Cyber Risk Management:** 11.1 - 11.7
*   **Cybersecurity Operations:** 11.8 - 11.11
*   **Cyber Response and Recovery:** 11.12 - 11.17
*   **Cyber Reporting and Threat Information Sharing:** 11.18 - 11.20

### 12 Digital Services
*   **Security of Digital Services:** 12.1 - 12.2
*   **Digital Fraud Management and Customer Awareness:** 12.3 - 12.9

### 13 Technology Audits
*   **Audit function:** 13.1 - 13.4

### 14 External Party Assurance
*   14.1 - 14.2

### 15 Security Awareness and Education
*   15.1 - 15.3

## PART C: REGULATORY PROCESS

### 16 Notification for Technology-Related Applications
*   **Introduction or enhancement to digital services:** 16.1 - 16.7

### 17 Consultation and Notification related to Cloud Services and Emerging Technology
*   17.1 - 17.5

### 18 Assessment and Gap Analysis
*   18.1 - 18.2

---

### Immediate Action Plan for RMIT Repo
1. **Scrub Hallucinations:** Delete references to any 10.58+ clauses in `index.json`, `requirements/index.json`, and `library.json`.
2. **Re-align Section 10:** Shift the mappings back to their correct subsections as outlined above. For example, "Change Management" must be placed back under the appropriate sub-section (it actually falls under *System Development and Acquisition* or related processes according to the text, and not as a standalone top-level 10.2 as currently modeled). Wait, looking closely at the PDF, "Change Management" specifically is embedded within "System Development and Acquisition" (e.g. 10.11: "establish appropriate procedures to independently review and approve system changes").
3. **Template References:** Update `templates/` markdown files to point to the corrected numbers.
