# RMiT PD November 2025 — Structured Compliance Database

**Live Site:** https://dawuds.github.io/RMIT/

Machine-readable extraction of the **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, November 2025 edition.

121 clauses across 11 sections (S8-S18), with six integrated data layers: verbatim clause text, requirement breakdowns, evidence guidance, audit artifacts, common controls, and risk management. Includes a browsable **Templates** view with 365 AI-generated document templates across 6 categories, category filtering, search, and GitHub links. Features dark mode (automatic via `prefers-color-scheme`), favicon, and an **Audit Package** on each control detail view linking controls to their required artifacts and evidence items.

> **Disclaimer**: This is an indicative/educational resource. It does not constitute legal advice. Always refer to the official BNM Policy Document and seek professional counsel for compliance decisions. See [LEARNINGS.md](LEARNINGS.md) for data quality audit history.

## Repository Structure

```
LICENSE                                    # CC-BY-4.0 license
LEARNINGS.md                               # Data quality audit findings and lessons
TODO.md                                    # Completed and pending feature tracking
validate.js                                # Data integrity checks (run: node validate.js)
source/
  pd-rmit-nov25.pdf                        # Original BNM policy document (80 pages)

clauses/                                   # Layer 1: Clause text (121 clauses)
  index.json                               # All 121 clauses in a single file
  sections.json                            # 11 section definitions with subsections
  by-section/
    S08-governance.json                    # 7 clauses
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

requirements/                              # Layer 2: Requirement breakdowns (121 entries)
  index.json                               # All requirements keyed by clause ID
  by-section/
    S08-governance.json … S18-assessment-gap-analysis.json

evidence/                                  # Layer 3: Evidence guidance (121 entries)
  index.json                               # All evidence keyed by clause ID
  by-section/
    S08-governance.json … S18-assessment-gap-analysis.json

artifacts/                                 # Layer 4: Audit artifacts (365 artifacts)
  inventory.json                           # All artifacts grouped by category
  clause-map.json                          # Bidirectional clause ↔ artifact mappings

controls/                                  # Layer 5: Common controls (93 controls)
  library.json                             # All controls grouped by domain
  domains.json                             # 15 domain definitions
  clause-map.json                          # Bidirectional clause ↔ control mappings

risk-management/                           # Layer 6: Risk Management (indicative)
  methodology.json                         # Risk assessment methodology and scoring scales
  risk-matrix.json                         # 5x5 likelihood x impact risk matrix
  risk-register.json                       # 20 technology risks with scores, controls, treatments
  checklist.json                           # 20-item risk assessment checklist by phase
  treatment-options.json                   # 4 risk treatment strategies with examples

templates/                                 # 365 document templates across 6 categories
  policies/                                # Policy document templates
  procedures/                              # Procedure document templates
  governance/                              # Governance document templates
  evidence/                                # Evidence document templates
  reports/                                 # Report document templates
  logs/                                    # Log document templates
  INDEX.md                                 # Template index and usage guide
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
| `verbatim` | string | Text extracted from the RMiT PD (audit-verified against source PDF) |
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

## Requirements Schema

Each requirement entry (keyed by clause ID in `requirements/index.json`):

| Field | Type | Description |
|-------|------|-------------|
| `clauseId` | string | Clause identifier |
| `section` | string | Parent section name |
| `subsection` | string | Subsection grouping |
| `title` | string | Clause title |
| `clauseType` | string | `"governance"`, `"technical"`, or `"regulatory"` |
| `marker` | string | `"S"` or `"G"` |
| `business` | object | Business requirement perspective |
| `technology` | object | Technology requirement perspective |
| `governance` | object | Governance requirement perspective |

Each perspective (`business`, `technology`, `governance`) contains:

| Field | Type | Description |
|-------|------|-------------|
| `summary` | string | Why this matters from this perspective |
| `requirements` | object[] | Specific requirements |

Each requirement item:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Requirement ID (e.g. `"8.1-B1"`) |
| `requirement` | string | What must be done |
| `rationale` | string | Why it matters |
| `owner` | string | Responsible role (e.g. `"Chief Financial Officer"`) |
| `frequency` | string | Review/execution frequency |
| `priority` | string | `"Critical"`, `"High"`, or `"Medium"` |

## Evidence Schema

Each evidence entry (keyed by clause ID in `evidence/index.json`):

| Field | Type | Description |
|-------|------|-------------|
| `clauseId` | string | Clause identifier |
| `section` | string | Parent section name |
| `subsection` | string | Subsection grouping |
| `title` | string | Clause title |
| `auditorFocus` | string | What BNM examiners specifically look for |
| `evidenceItems` | object[] | Detailed evidence items |
| `auditTips` | string[] | Actionable audit preparation tips |

Each evidence item:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Evidence ID (e.g. `"8.1-E1"`) |
| `name` | string | Evidence name |
| `description` | string | What this evidence demonstrates |
| `whatGoodLooksLike` | string[] | Indicators of strong evidence |
| `commonGaps` | string[] | Typical deficiencies examiners flag |
| `suggestedSources` | string[] | Where to obtain this evidence |
| `format` | string | Expected document format |
| `retentionPeriod` | string | How long to retain (e.g. `"7 years"`) |

## Artifact Inventory Schema

Artifacts in `artifacts/inventory.json` are grouped by category (`policies`, `procedures`, `governance`, `evidence`, `reports`, `logs`).

Each artifact:

| Field | Type | Description |
|-------|------|-------------|
| `slug` | string | Unique identifier (e.g. `"access-control-policy"`) |
| `name` | string | Artifact name |
| `category` | string | `"policies"`, `"procedures"`, `"governance"`, `"evidence"`, `"reports"`, or `"logs"` |
| `description` | string | Purpose and content |
| `format` | string | Expected format (e.g. `"PDF/DOCX, version-controlled"`) |
| `mandatory` | boolean | Whether required for compliance |
| `clauses` | string[] | Clause IDs this artifact serves |
| `owner` | string | Responsible role |
| `reviewFrequency` | string | How often to review/update |
| `typicalPages` | string | Expected document size (e.g. `"15-30"`) |
| `keyContents` | string[] | Expected sections/content |

`artifacts/clause-map.json` contains:

| Field | Type | Description |
|-------|------|-------------|
| `clauseToArtifacts` | object | Clause ID → artifact slug[] |
| `artifactToClauses` | object | Artifact slug → clause ID[] |

## Controls Schema

Controls in `controls/library.json` are grouped by domain. 93 controls across 15 domains.

Each control:

| Field | Type | Description |
|-------|------|-------------|
| `slug` | string | Unique identifier (e.g. `"board-technology-risk-oversight"`) |
| `name` | string | Control name |
| `domain` | string | Domain key (e.g. `"governance-and-oversight"`) |
| `type` | string | `"preventive"`, `"detective"`, `"corrective"`, or `"compensating"` |
| `layer` | string | `"policy"`, `"process"`, `"technical"`, or `"physical"` |
| `description` | string | What this control achieves |
| `clauses` | string[] | Clause IDs this control satisfies |
| `keyActivities` | string[] | Implementation activities |
| `maturity` | object | Three-tier maturity model |
| `toolExamples` | string[] | Example tools/products |
| `nist` | string[] | NIST CSF 2.0 mapping (e.g. `["GV.OV-01"]`) |
| `iso27001` | string[] | ISO 27001:2022 Annex A mapping (e.g. `["A.5.1"]`) |

Maturity levels:

| Field | Type | Description |
|-------|------|-------------|
| `basic` | string | Minimum acceptable state |
| `mature` | string | Structured, repeatable state |
| `advanced` | string | Optimized, metrics-driven state |

`controls/domains.json` — 15 domain definitions:

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Display name (e.g. `"Governance & Oversight"`) |
| `description` | string | Domain scope |

`controls/clause-map.json` contains:

| Field | Type | Description |
|-------|------|-------------|
| `clauseToControls` | object | Clause ID → control slug[] |
| `controlToClauses` | object | Control slug → clause ID[] |

## Sections Overview

| Section | Name | Clauses | Subsections |
|---------|------|---------|-------------|
| S8 | Governance | 7 | Responsibilities of the Board of Directors, Responsibilities of the senior management |
| S9 | Technology Risk Management | 5 | Risk Management Framework, Designated Chief Information Security Officer |
| S10 | Technology Operations Management | 57 | Technology Project Management, System Development and Acquisition, Patch and End-of-Life System Management, Cryptography, Data Centre Resilience, Service Availability, Network Resilience, System backup and restoration, Third Party Service Provider Management, Cloud Services, Access Control |
| S11 | Cybersecurity Management | 20 | Cyber Risk Management, Cybersecurity Operations, Cyber Response and Recovery, Cyber Reporting and Threat Information Sharing |
| S12 | Digital Services | 9 | Security of Digital Services, Digital Fraud Management and Customer Awareness |
| S13 | Technology Audits | 4 | Audit function |
| S14 | External Party Assurance | 2 | External Party Assurance |
| S15 | Security Awareness and Education | 3 | Security Awareness and Education |
| S16 | Notification for Technology-Related Applications | 7 | Introduction or enhancement to digital services |
| S17 | Consultation and Notification related to Cloud Services and Emerging Technology | 5 | Consultation and Notification related to Cloud Services and Emerging Technology |
| S18 | Assessment and Gap Analysis | 2 | Assessment and Gap Analysis |

## Clause Types

- **governance** — Oversight, policies, board-level requirements
- **technical** — Implementation controls, configurations, system requirements
- **regulatory** — BNM reporting, notifications, compliance obligations

## Markers

- **S** (Shall) — Mandatory requirement. Non-compliance is an examination finding.
- **G** (Should) — Guidance / best practice. Expected but may be addressed through compensating controls.

## Usage

### JavaScript / Node.js

```javascript
// Layer 1: Clauses
const clauses = require('./clauses/index.json');
const mfa = clauses.find(c => c.id === '10.54');
console.log(mfa.title);      // "Multi-Factor Authentication"
console.log(mfa.verbatim);   // Full BNM text

// Layer 2: Requirements
const requirements = require('./requirements/index.json');
const req = requirements['10.54'];
console.log(req.business.summary);
req.technology.requirements.forEach(r =>
  console.log(`[${r.priority}] ${r.requirement} — Owner: ${r.owner}`)
);

// Layer 3: Evidence
const evidence = require('./evidence/index.json');
const ev = evidence['10.54'];
console.log(ev.auditorFocus);
ev.evidenceItems.forEach(e => {
  console.log(e.name);
  console.log('  Good:', e.whatGoodLooksLike[0]);
  console.log('  Gap:', e.commonGaps[0]);
});

// Layer 4: Artifacts
const { inventory, clauseMap } = {
  inventory: require('./artifacts/inventory.json'),
  clauseMap: require('./artifacts/clause-map.json'),
};
const slugs = clauseMap.clauseToArtifacts['10.54'];
// Resolve slugs to full artifact objects
const flat = Object.values(inventory).flat();
const arts = slugs.map(s => flat.find(a => a.slug === s));
arts.forEach(a => console.log(`${a.name} (${a.owner}, ${a.reviewFrequency})`));

// Layer 5: Controls
const controls = require('./controls/library.json');
const controlMap = require('./controls/clause-map.json');
const ctrlSlugs = controlMap.clauseToControls['10.54'];
const allCtrls = Object.values(controls).flat();
ctrlSlugs.forEach(slug => {
  const ctrl = allCtrls.find(c => c.slug === slug);
  console.log(`${ctrl.name} [${ctrl.type}/${ctrl.layer}]`);
  console.log(`  Maturity: ${ctrl.maturity.mature}`);
  console.log(`  NIST: ${ctrl.nist.join(', ')}`);
});
```

### Python

```python
import json

# Load all layers
with open('clauses/index.json') as f:
    clauses = json.load(f)
with open('requirements/index.json') as f:
    requirements = json.load(f)
with open('evidence/index.json') as f:
    evidence = json.load(f)
with open('controls/clause-map.json') as f:
    control_map = json.load(f)
with open('controls/library.json') as f:
    control_lib = json.load(f)

# All mandatory technical clauses with their controls
mandatory = [c for c in clauses if c['clauseType'] == 'technical' and c['marker'] == 'S']
print(f"{len(mandatory)} mandatory technical clauses")

all_controls = [c for ctrls in control_lib.values() for c in ctrls]
for clause in mandatory[:3]:
    cid = clause['id']
    ev = evidence.get(cid, {})
    slugs = control_map['clauseToControls'].get(cid, [])
    ctrls = [c for c in all_controls if c['slug'] in slugs]
    print(f"\n{cid} {clause['title']}")
    print(f"  Auditor focus: {ev.get('auditorFocus', 'N/A')[:80]}...")
    print(f"  Controls: {len(ctrls)}")
    for ctrl in ctrls:
        print(f"    - {ctrl['name']} ({ctrl['type']}/{ctrl['layer']})")
```

## Risk Management

An indicative technology risk management framework aligned to BNM RMiT, providing a structured approach to identifying, assessing, and treating technology risks in Malaysian financial institutions.

**All content in this section is AI-generated and indicative.** Organizations must adapt risk scores, controls, and treatment plans to their specific environment, risk appetite, and board-approved frameworks.

### Contents

| File | Description |
|------|-------------|
| `risk-management/methodology.json` | Risk assessment methodology with 5-level likelihood and impact scales, risk rating bands (Low/Medium/High/Critical), and review cycle guidance |
| `risk-management/risk-matrix.json` | 5x5 scoring matrix mapping likelihood x impact to risk scores (1-25) |
| `risk-management/risk-register.json` | 20 technology risks specific to Malaysian FIs — ransomware, core banking outage, cloud concentration, third-party vendor failure, insider threat, data breach, change management failure, API security, mobile banking fraud, IT obsolescence, DDoS, unauthorized access, backup failure, regulatory non-compliance, supply chain compromise, AI/ML model risk, crypto key compromise, shadow IT, social engineering, payment system fraud |
| `risk-management/checklist.json` | 20-item risk assessment checklist across 5 phases (Preparation, Risk Identification, Risk Analysis, Risk Treatment, Reporting & Monitoring) with RMiT cross-references |
| `risk-management/treatment-options.json` | 4 standard treatment strategies (Mitigate, Transfer, Accept, Avoid) with RMiT-specific examples and alignment notes |

### Risk Register Schema

Each risk in `risk-register.json`:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Risk identifier (e.g. `"TR-001"`) |
| `title` | string | Short risk name |
| `description` | string | 1-2 sentence risk description |
| `category` | string | Risk category (Cybersecurity, Operations, Outsourcing, Data, Change Management, Compliance, Emerging Technology) |
| `rmitSection` | string | Relevant RMiT section reference |
| `likelihood` | number | Inherent likelihood score (1-5) |
| `impact` | number | Inherent impact score (1-5) |
| `inherentRisk` | number | Likelihood x Impact before controls |
| `existingControls` | string[] | 2-3 existing control descriptions |
| `residualLikelihood` | number | Likelihood after controls (1-5) |
| `residualImpact` | number | Impact after controls (1-5) |
| `residualRisk` | number | Residual likelihood x residual impact |
| `treatment` | string | Treatment strategy (mitigate, accept, transfer, avoid) |
| `treatmentPlan` | string | Brief treatment plan description |
| `owner` | string | Responsible role title |
| `reviewDate` | string | Next review date (e.g. `"2026-Q2"`) |

## Statistics

| Layer | Count | Description |
|-------|-------|-------------|
| Clauses | 121 | Across 11 sections (S8-S18) |
| Requirements | 121 | Business, technology, and governance breakdowns per clause |
| Evidence | 121 | Auditor focus, evidence items, audit tips per clause (726 individual evidence items total) |
| Artifacts | 365 | Across 6 categories (policies, procedures, governance, evidence, reports, logs) |
| Controls | 93 | Across 15 domains with NIST CSF 2.0 + ISO 27001:2022 mappings |
| Templates | 365 | Document templates across 6 categories (policies, procedures, governance, evidence, reports, logs) |
| Risk Management | 20 | Technology risks with methodology, 5x5 matrix, checklist, and treatment options |

## AI-Generated Content — Important Disclaimer

**This database contains two distinct types of content. They must not be confused.**

### Authoritative Content (extracted from official BNM source)
The following fields are extracted from the official BNM RMiT Policy Document and should be treated as authoritative:
- `verbatim` — Text extracted from the BNM RMiT Policy Document (November 2025), audit-verified against source PDF (~98% coverage)
- `marker` (S/G) — Standard/Guidance classification, 100% verified against source PDF
- `id`, `section`, `subsection`, `clauseType` — Structural metadata
- Clause IDs and section numbering (S8–S18)

### AI-Generated Content (interpretive — not authoritative)
The following fields are **AI-generated interpretations or illustrative examples**. They are provided to assist understanding only and **must not be treated as authoritative BNM guidance or legal advice**:

| Field | Location | Nature |
|-------|----------|--------|
| `translation` | `clauses/` | AI-generated plain-language interpretation — **verify against verbatim text** |
| `summary` | `requirements/` | AI-generated interpretive summary of requirements |
| `rationale` | `requirements/` | AI-generated explanation of why a requirement matters |
| `auditorFocus` | `evidence/` | AI-generated view of BNM examiner priorities |
| `evidenceItems[].description` | `evidence/` | AI-generated guidance |
| `whatGoodLooksLike` | `evidence/` | AI-generated illustrative examples |
| `commonGaps` | `evidence/` | AI-generated illustrative examples |
| `auditTips` | `evidence/` | AI-generated guidance |
| `description`, `keyActivities`, `maturity` | `controls/` | AI-generated guidance |

> **Data quality note (2026-03-05):** An initial audit found 100% of verbatim fields and S/G markers were AI-fabricated. These have since been rebuilt from the source PDF. Translation fields were recovered via a field-level merge from a corrected branch. Evidence, requirements, and artifact layers still contain AI-generated content based on the original fabricated text — treat these as illustrative only. See [LEARNINGS.md](LEARNINGS.md) for the full audit history.
>
> The web explorer labels all AI-generated fields with an **AI Generated** indicator and illustrative examples with an **Example** indicator.

**Always consult the source PDF and qualified legal or regulatory counsel before acting on any interpretation in this database.**

## Development

To run locally:

```bash
python3 -m http.server 8888
```

Then open `http://localhost:8888` in your browser.

## Source

Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document, November 2025.

Available at: `source/pd-rmit-nov25.pdf`
