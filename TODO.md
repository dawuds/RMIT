# TODO — RMIT Compliance Database

## Completed

- [x] Extract verbatim clause text from BNM RMiT PD PDF (121 clauses)
- [x] Verify S/G markers against source PDF (100% correct)
- [x] Build requirements layer (121 entries, business/technology/governance breakdowns)
- [x] Build evidence layer (121 entries, 726 evidence items)
- [x] Build artifacts layer (365 artifacts across 6 categories)
- [x] Build controls layer (93 controls across 15 domains)
- [x] Fix NIST CSF 2.0 mappings (converted from SP 800-53 format)
- [x] Add risk management section (20 risks, methodology, 5x5 matrix, checklist, treatment options)
- [x] Add 365 document templates across 6 categories
- [x] Add Templates browser UI with category filtering and search
- [x] Add dark mode support (automatic via `prefers-color-scheme`)
- [x] Add favicon
- [x] Implement Audit Package UI on control detail views
- [x] Add `controlSlugs[]` to all 365 artifacts
- [x] Add `artifactSlugs[]` to all 726 evidence items
- [x] Recover translations from field-level merge (112 translations restored)
- [x] Regenerate evidence/artifacts from corrected verbatim base layer
- [x] Deploy via GitHub Actions (GitHub Pages)
- [x] Add `validate.js` for data integrity checks (JSON parsing, cross-reference resolution, risk math, duplicate detection)
- [x] Add LICENSE file (CC-BY-4.0)

## Pending

### High Priority
- [ ] **Factual Accuracy Check** — Conduct a thorough mapping and verification of the JSON data (e.g. clauses, requirement numbers, descriptions) against the official BNM RMiT Nov 2025 PDF to eliminate hallucinations.
- [ ] Export functionality — PDF and CSV export for clauses, controls, evidence, and audit packages
- [ ] Compliance gap tracker with localStorage — track implementation status per clause/control
- [ ] ARIA accessibility audit — ensure all interactive elements are keyboard-navigable and screen-reader friendly

### Medium Priority
- [ ] Compliance chain visualization — graph view showing clause-to-control-to-artifact-to-evidence relationships
- [ ] Cross-repo data sync — `compliance` and `compliance-cloud` repos embed stale RMIT clause data (100% of verbatim texts, titles, translations differ from corrected source)

### Low Priority
- [ ] Refine individual evidence/artifact items based on ongoing review
- [ ] Add print-friendly stylesheet for audit package output
