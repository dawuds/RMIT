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

The merge regression was fixed via a field-level merge recovery:

1. Extracted titles, translations, and subsection names from the remote branch (commit 2305f90)
2. Kept verbatim text and S/G markers from the audit branch (PDF-verified)
3. Excluded 9 clauses (15.2, 15.3, 16.1-16.7) that were explicitly rebuilt during the audit
4. Synced corrected data to by-section files, requirements, and evidence layers
5. Result: 105 titles, 112 translations, 67 subsections recovered

| Field | Correctness |
|-------|-------------|
| Verbatim text | ~98% (rebuilt from PDF) |
| S/G markers | 100% correct |
| Translations | ~100% (recovered from remote branch + 9 audit-rebuilt) |
| Titles | ~100% (recovered from remote branch + 9 audit-rebuilt) |
| Evidence/artifacts | **~7%** (only 9/121 rebuilt — derivative layers still need work) |
| NIST mappings | 100% (converted to CSF 2.0 format) |

**Remaining work:** Evidence and artifact layers for 112 clauses still describe the fabricated verbatim text, not the corrected PDF text. These are lower priority since the base layer (verbatim + translations) is now correct.

### Cross-Repo Data Sync Issue (2026-03-05)

The `compliance` and `compliance-cloud` application repos embed RMIT clause data in `frontend/app/data/clauses.js`. Audit found this embedded data predates all corrections — **100% of verbatim texts, titles, and translations differ from the corrected RMIT source of truth**, plus 22 wrong S/G markers and 99 wrong subsection names. These repos require a full data sync from the corrected RMIT data.
