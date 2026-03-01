# RMiT PD November 2025 — Structured Clause Database

Machine-readable extraction of the **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, November 2025 edition.

121 clauses across 11 sections (S8–S18), extracted with verbatim text, plain-language translations, expected evidence, and audit artifacts.

## Repository Structure

```
source/
  pd-rmit-nov25.pdf              # Original BNM policy document (80 pages)

clauses/
  index.json                     # All 121 clauses in a single file
  sections.json                  # 11 section definitions with subsections
  by-section/
    S08-governance.json          # 7 clauses
    S09-technology-risk-management.json    # 5 clauses
    S10-technology-operations-management.json  # 57 clauses
    S11-cybersecurity-management.json      # 20 clauses
    S12-digital-services.json              # 9 clauses
    S13-technology-audits.json             # 4 clauses
    S14-external-party-assurance.json      # 2 clauses
    S15-security-awareness-education.json  # 3 clauses
    S16-regulatory-notifications.json      # 7 clauses
    S17-cloud-emerging-technology.json     # 5 clauses
    S18-assessment-gap-analysis.json       # 2 clauses
```

## Clause Schema

Each clause object:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Clause identifier (e.g. `"10.54"`) |
| `section` | string | Parent section name |
| `subsection` | string | Subsection grouping (e.g. `"Access Control"`) |
| `title` | string | Short descriptive title |
| `clauseType` | string | `"governance"`, `"technical"`, or `"regulatory"` |
| `marker` | string | `"S"` (shall — mandatory) or `"G"` (should — guidance) |
| `verbatim` | string | Exact text from the RMiT PD |
| `translation` | string | Plain-language interpretation |
| `evidence` | string[] | List of expected evidence items |
| `artifacts` | object[] | Audit artifacts with category, name, description, format, mandatory flag |

### Artifact Schema

| Field | Type | Description |
|-------|------|-------------|
| `category` | string | `"governance"`, `"evidence"`, `"reports"`, `"procedures"`, `"logs"` |
| `name` | string | Artifact name |
| `description` | string | Purpose and content |
| `format` | string | Expected format (e.g. `"PDF/DOCX, version-controlled"`) |
| `mandatory` | boolean | Whether the artifact is required |

## Sections Overview

| Section | Name | Clauses | Subsections |
|---------|------|---------|-------------|
| S8 | Governance | 7 | Board of Directors, Senior Management |
| S9 | Technology Risk Management | 5 | Risk Management Framework |
| S10 | Technology Operations Management | 57 | Project Management, System Development, Patch & End-of-Life, Cryptography, Data Centre & Facilities, Service Availability, Network Security, Backup & Recovery, Third-Party Management, Cloud Services, Access Control |
| S11 | Cybersecurity Management | 20 | Cybersecurity Framework, Security Operations, Vulnerability Management, Threat Intelligence |
| S12 | Digital Services | 9 | Digital Channels |
| S13 | Technology Audits | 4 | Audit Framework |
| S14 | External Party Assurance | 2 | Third-Party Assurance |
| S15 | Security Awareness & Education | 3 | Training & Awareness |
| S16 | Regulatory Notifications | 7 | BNM Notifications |
| S17 | Cloud & Emerging Technology | 5 | Cloud & Innovation |
| S18 | Assessment & Gap Analysis | 2 | Self-Assessment |

## Clause Types

- **governance** — Oversight, policies, board-level requirements
- **technical** — Implementation controls, configurations, system requirements
- **regulatory** — BNM reporting, notifications, compliance obligations

## Markers

- **S** (Shall) — Mandatory requirement. Non-compliance is an examination finding.
- **G** (Should) — Guidance / best practice. Expected but may be addressed through compensating controls.

## Usage

```javascript
// Load all clauses
const clauses = require('./clauses/index.json');

// Find a specific clause
const mfa = clauses.find(c => c.id === '10.54');
console.log(mfa.title);     // "Multi-Factor Authentication"
console.log(mfa.verbatim);  // Full BNM text
console.log(mfa.evidence);  // ["PAM policy document", ...]

// Load a section
const cyber = require('./clauses/by-section/S11-cybersecurity-management.json');
console.log(cyber.length);  // 20

// Filter by type
const technical = clauses.filter(c => c.clauseType === 'technical');
const mandatory = clauses.filter(c => c.marker === 'S');
```

```python
import json

with open('clauses/index.json') as f:
    clauses = json.load(f)

# All mandatory technical controls
controls = [c for c in clauses if c['clauseType'] == 'technical' and c['marker'] == 'S']
print(f"{len(controls)} mandatory technical controls")
```

## Source

Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document, November 2025.

Available at: `source/pd-rmit-nov25.pdf`
