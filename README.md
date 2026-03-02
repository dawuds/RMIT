# RMiT PD November 2025 — Structured Compliance Database

Machine-readable extraction of the **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**, November 2025 edition.

121 clauses across 11 sections (S8–S18), with five integrated data layers: verbatim clause text, requirement breakdowns, evidence guidance, audit artifacts, and common controls.

## Repository Structure

```
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

## Statistics

| Layer | Count | Description |
|-------|-------|-------------|
| Clauses | 121 | Across 11 sections (S8–S18) |
| Requirements | 121 | Business, technology, and governance breakdowns per clause |
| Evidence | 121 | Auditor focus, evidence items, audit tips per clause |
| Artifacts | 365 | Across 6 categories (policies, procedures, governance, evidence, reports, logs) |
| Controls | 93 | Across 15 domains with NIST CSF 2.0 + ISO 27001:2022 mappings |

## Source

Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document, November 2025.

Available at: `source/pd-rmit-nov25.pdf`
