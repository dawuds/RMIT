# LEARNINGS.md — RMIT (Risk Management in Technology, BNM Policy Document)

## Summary

A GRC audit of this repo found **12 findings** across 12 files, but the severity was the highest of the three compliance repos. 100% of "verbatim" fields were AI-fabricated despite the source PDF being present in the repository. A destructive merge (`git checkout --ours`) then discarded 112 corrected translations from a fix branch, leaving the final state **worse than the best intermediate state**.

**Key metrics:** 8 commits across 2 branches + merge, 12 files modified, 3 of 6 critical findings fixed correctly, 1 critical regression (merge reverted 112 translations). 65,786 lines of derivative data built on fabricated base.

---

## Repo-Specific Lessons

### 1. 100% Fabricated "Verbatim" Text — Despite Source PDF in Repo

Every single "verbatim" field in the initial commit was AI-generated. The field name implied exact PDF text, and the README claimed "Exact text from the RMiT PD." Not one sentence matched the bundled source PDF in `source/`. The AI generated plausible BNM regulatory language from training data instead of extracting from the PDF that was physically present in the repository.

**Lesson:** The word "verbatim" in a field name does not make the content verbatim. When a source document exists, use a document extraction pipeline — not generation from memory. Verify at least a sample of "verbatim" fields by searching for exact phrases in the source PDF.

### 2. S/G Markers — Zero Overlap with Correct Set

The initial commit had 12 clauses marked "G" (guidance). The correct set is 10 different clauses. There was **zero overlap** — every G marker was wrong, and 10 clauses that should have been G were marked S (standard). This is not a partial error; it is a complete fabrication of the marker set.

**Lesson:** S/G classification has regulatory consequences (standards are mandatory, guidance is advisory). Verify the full marker set against the source document before building any compliance logic on top of it.

### 3. 65,786 Lines of Cascading Fabrication

Four data layers (requirements, evidence, artifacts, controls) were built on top of the fabricated verbatim text. Each layer was internally consistent with the fabricated base but described completely different obligations than the real PDF:

```
Fabricated verbatim text
  -> Fabricated translations (match fabricated verbatim, not real PDF)
    -> Fabricated evidence items (match fabricated translation, not real obligations)
      -> Fabricated audit artifacts (match fabricated evidence, not real audit needs)
```

**Lesson:** Never build derivative layers until the base layer is verified against the authoritative source. Internal consistency between layers is not evidence of correctness — it just means the fabrication is coherent.

### 4. Destructive Merge — 112 Corrected Translations Lost

Two branches independently fixed different aspects of the same clause files:
- **Branch A (ours/audit):** Rebuilt verbatim text and S/G markers from the PDF
- **Branch B (remote):** Fixed all 121 translations to match their verbatim text

The merge used `git checkout --ours` for clause files, keeping Branch A's correct verbatim but discarding Branch B's 121 corrected translations. Only 9 translations (clauses 15.2, 15.3, 16.1-16.7) that the audit branch had explicitly rebuilt survived. The final state was worse than commit 2305f90 on Branch B.

**Lesson:** Never use blanket merge resolution on structured data files. Each field within a JSON object may have a different "best" source. If forced to choose by file, at minimum inspect the diff to understand what each branch contributed.

### 5. Reverted Titles and Section Names

Branch B (commit 494ab24) had corrected clause titles (e.g., "Board Oversight of Technology Risk" changed to "Board Approval of Technology Risk Appetite") and section names. The merge reverted these to the initial fabricated versions.

**Lesson:** When merging fix branches, create a checklist of what each branch corrected. Verify post-merge that all corrections from both branches survived.

### 6. Framework Confusion — NIST SP 800-53 vs CSF 2.0

The controls library claimed "NIST CSF 2.0 mappings" but used SP 800-53 control codes (AC-1, CM-3) instead of CSF 2.0 function codes (GV.OV-01, ID.RA-01). A partial fix converted some codes but left 34 SP 800-53 codes in the final state.

**Lesson:** NIST SP 800-53 and NIST CSF 2.0 are different frameworks with different code formats. Validate the code format matches the claimed framework: CSF 2.0 uses `XX.YY-nn` format, SP 800-53 uses `XX-n` format.

---

## Audit Package — Best Practice Design Pattern

### What It Is

The "Audit Package" is a reusable UI component on the control detail view that links controls to their required artifacts and evidence items. It answers three questions an auditor asks when reviewing a control:

1. **What must I implement?** → Key Activities + Maturity Levels (existing)
2. **What documents must exist?** → Required Artifacts (new)
3. **How do I verify it works?** → Evidence Checklist (new)

### Architecture

```
Control (slug)
  └─ controlSlugs[] on artifacts → direct semantic mapping
       │
       ├─ artifacts/inventory.json → full artifact objects
       │    └─ each with keyContents[], mandatory flag
       │
       └─ evidence/index.json[clause] → evidenceItems[]
            └─ each with artifactSlugs[], whatGoodLooksLike[], commonGaps[]
```

**RMIT-specific join key:** BNM clause (8.1, 10.3, etc.) via `clauses[]` on each control. But artifacts and evidence use **direct `controlSlugs[]`** mapping, not clause-based joins.

### Why Direct Mapping Over Section-Based Joins

Section-based joins (via provision maps) explode on broad provisions. In the PDPA-MY repo, s6 (General Principle) mapped to 19 of 60 artifacts — producing 20 results for a single control. The same problem applies to RMIT's broad clauses. Direct `controlSlugs[]` on each artifact provides curated, semantically relevant mappings (median 2 per control, max 6).

**Rule of thumb:** If a join key can match >5 items, the join is too broad and needs direct curation.

### Implementation Checklist

1. Ensure the repo has `controls/`, `artifacts/`, `evidence/` directories with the standard structure
2. Add `controlSlugs[]` to each artifact in `artifacts/inventory.json` — curate 1-4 control slugs per artifact
3. Add `artifactSlugs[]` to each evidence item in `evidence/index.json` — link 1-2 artifact slugs per item
4. In `renderControlDetail()`, load artifacts + evidence data (use existing state cache)
5. Filter artifacts where `controlSlugs` includes the current control's slug
6. Filter evidence items by artifact overlap (evidence linked to artifacts that are linked to the control)
7. Sort artifacts mandatory-first
8. Render the Audit Package HTML using the shared CSS classes
9. Ensure nested accordion click handlers work (reuse existing `[data-accordion]` handler)

### UI Components (CSS classes — shared across all repos)

| Class | Purpose |
|-------|---------|
| `.audit-package` | Wrapper — accent top border, light blue background |
| `.audit-package-title` | "AUDIT PACKAGE" uppercase label |
| `.audit-package-summary` | "N artifacts required, M evidence items" |
| `.artifact-link-card` | Compact artifact card with hover |
| `.artifact-link-card-checklist` | Checkbox-styled keyContents list |
| `.evidence-checklist-item` | Evidence item card |
| `.evidence-good` | Green-bordered "What Good Looks Like" list |
| `.evidence-gap` | Red-bordered "Common Gaps" list |

### Design Decisions

- **Direct `controlSlugs[]` mapping chosen over clause-based joins:** Curated semantic mappings prevent broad clauses from flooding results.
- **`artifactSlugs[]` on evidence items:** Evidence filtered by artifact overlap ensures only relevant evidence appears per control.
- **Mandatory artifacts sorted first:** Auditors prioritize mandatory items.
- **Evidence sub-accordions collapsed by default:** "What Good Looks Like" and "Common Gaps" are verbose — show on demand.
- **Checkbox-styled artifact contents:** Makes artifact cards feel like an auditor's checklist.

### Current State (RMIT)

The Audit Package data layer is **complete** in this repo. UI rendering is implemented in `app.js` `renderControlDetail()`.

- `artifacts/inventory.json`: 365 artifacts with `controlSlugs[]` added (median 2, max 4, mean 2.8 per artifact). All 365 artifacts have at least 1 control slug. Distribution: 15x1, 169x2, 73x3, 108x4.
- `evidence/index.json`: 726 evidence items across 121 clauses with `artifactSlugs[]` added. All 726 items have at least 1 artifact slug.
- `requirements/index.json`: All 121 requirements regenerated from corrected verbatim text with business/tech/governance breakdowns.
- `controls/library.json`: 93 controls across 15 domains — structure ready
- `controls/clause-map.json`: Bidirectional clause-control mapping exists and is intact
- `app.js`: Audit Package UI implemented in `renderControlDetail()` with accordion-based artifact cards and evidence checklist

**All cross-references are valid** — every `controlSlugs[]` entry references a valid control slug, every `artifactSlugs[]` entry references a valid artifact slug. No broken links detected.

### Reference Implementation

See `dawuds/pdpa-my` repo — `app.js` `renderControlDetail()` and `style.css` Audit Package section. Pattern is designed for copy-adapt across all compliance repos.

---

## Common Patterns (Shared Across All 3 Compliance Repos)

### Pattern 1: AI Confabulation

AI generates structurally correct, plausible-sounding legal/regulatory data that has no basis in the actual source material. The output is confident, internally consistent, and correctly formatted — making it extremely difficult to detect without checking the authoritative source. The most dangerous fabrications are the most plausible ones.

### Pattern 2: Cascading Errors

Derivatives inherit base fabrications. Fabricated verbatim text cascades to translations, evidence items, and audit artifacts — 65,786 lines of internally consistent but factually wrong data. Each layer validates against the layer above it rather than against the authoritative source.

### Pattern 3: Incomplete Remediation

Fixing the source but not all derivatives. When verbatim text was rebuilt from the PDF, translations, titles, evidence, and artifacts still described the fabricated content. Only 9 of 121 clauses had their full derivative chain updated.

### Pattern 4: Distributed State

The same clause data stored in clauses/index.json, clauses/by-section/S*.json, and requirements/index.json. When one is updated, the others drift. Without a single source of truth and a build step, synchronization failures are inevitable.

### Pattern 5: Fix Oscillation

The merge is the most severe example: choosing "ours" for all clause files was correct for verbatim/markers but catastrophically wrong for translations/titles. The fix (merge) introduced a worse regression than the original errors it resolved. The final state was worse than the best intermediate state.

### Pattern 6: Status Misrepresentation

Fields named "verbatim" containing 100% AI-generated text. README claiming "Exact text from the RMiT PD" when no text was extracted from the PD. The AI optimizes for appearing authoritative rather than accurately representing provenance.

### Pattern 7: Premature Productization

An interactive browser with section navigation, search, and filtering was built to display 100% fabricated "verbatim" text. The polished UI made the fabricated content look authoritative and reduced the perceived urgency of verifying the underlying data.

---

## Prevention Checklist

For any future AI-generated compliance data in this repo:

- [ ] Verify every fact against the authoritative source (BNM RMiT PD PDF) before publishing
- [ ] Use extraction (from documents) not generation (from memory) for legal text
- [ ] Label AI-generated content explicitly at the field level (`sourceType`, `verificationStatus`)
- [ ] Track dependency graphs between fields — know what breaks when a base field changes
- [ ] Run validation script (`validate.py`) after every change
- [ ] Never use blanket merge resolution (`git checkout --ours`) on data files
- [ ] Check README/app.js counts match actual JSON data array lengths
- [ ] Test cross-references resolve in both directions
- [ ] Verify base layer (verbatim) before building any derivative layers (translations, evidence, artifacts)
- [ ] Post-merge: verify all corrections from both branches survived
- [ ] Validate framework code formats match claimed framework (CSF 2.0: `XX.YY-nn`, SP 800-53: `XX-n`)
- [ ] Never symlink to files outside the repo — GitHub Pages (Jekyll) fails on broken symlinks with `No such file or directory @ rb_check_realpath_internal`
- [ ] Keep shared tooling (e.g., cross-repo validation scripts) in a parent directory or separate repo, not symlinked into each sub-repo

---

## Outstanding Critical Issue — RESOLVED

The merge regression was fixed via a field-level merge recovery, followed by a full derivative regeneration:

1. Extracted titles, translations, and subsection names from the remote branch (commit 2305f90)
2. Kept verbatim text and S/G markers from the audit branch (PDF-verified)
3. Excluded 9 clauses (15.2, 15.3, 16.1-16.7) that were explicitly rebuilt during the audit
4. Synced corrected data to by-section files, requirements, and evidence layers
5. Result: 105 titles, 112 translations, 67 subsections recovered
6. Regenerated all 121 requirements (business/tech/governance) from corrected verbatim text (commit 75df569)
7. Regenerated all 121 evidence entries (726 items, up from 487) from corrected verbatim text (commit 75df569)

| Field | Correctness |
|-------|-------------|
| Verbatim text | ~98% (rebuilt from PDF) |
| S/G markers | 100% correct |
| Translations | ~100% (recovered from remote branch + 9 audit-rebuilt) |
| Titles | ~100% (recovered from remote branch + 9 audit-rebuilt) |
| Requirements | ~100% (regenerated from corrected verbatim — commit 75df569) |
| Evidence/artifacts | **100%** (all 121 clauses regenerated with corrected base layer, 726 items) |
| Artifacts (inventory) | 365 artifacts with cross-references intact |
| NIST mappings | 100% (converted to CSF 2.0 format) |

### Cross-Repo Data Sync Issue (2026-03-05)

The `compliance` and `compliance-cloud` application repos embed RMIT clause data in `frontend/app/data/clauses.js`. Audit found this embedded data predates all corrections — **100% of verbatim texts, titles, and translations differ from the corrected RMIT source of truth**, plus 22 wrong S/G markers and 99 wrong subsection names. These repos require a full data sync from the corrected RMIT data.
