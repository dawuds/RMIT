#!/usr/bin/env node
/**
 * validate.js — RMIT (BNM Risk Management in Technology) data integrity validator
 *
 * Checks:
 *   1.  All JSON files parse without errors
 *   2.  Controls library — slug uniqueness and required fields
 *   3.  Controls library — every domain has at least one control
 *   4.  Artifact controlSlugs resolve to controls/library.json slugs
 *   5.  Evidence artifactSlugs resolve to artifacts/inventory.json slugs
 *   6.  Clause key consistency — evidence & requirements keys exist in clauses/index.json
 *   7.  Risk register math — inherent/residual calculations
 *   8.  Templates have required fields
 *   9.  Clause-map references valid clauses and artifact slugs
 *   10. No empty arrays or empty strings where data is expected
 *   11. Cross-reference IDs resolve in both directions
 *   12. Domains.json keys match library.json domain slugs
 *
 * Usage: node validate.js [--verbose]
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const REPO_ROOT = __dirname;
const verbose   = process.argv.includes('--verbose');

let pass = 0;
let fail = 0;
let warn = 0;

function ok(msg)      { pass++; if (verbose) console.log(`  PASS  ${msg}`); }
function bad(msg)     { fail++; console.log(`  FAIL  ${msg}`); }
function warning(msg) { warn++; console.log(`  WARN  ${msg}`); }

function loadJson(relPath) {
  const abs = path.join(REPO_ROOT, relPath);
  if (!fs.existsSync(abs)) return null;
  try {
    return JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    return null;
  }
}

// ── 1. JSON Parse Check ─────────────────────────────────────────────

console.log('\n=== 1. JSON Parse Check ===');

function findJsonFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...findJsonFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(path.relative(REPO_ROOT, full));
    }
  }
  return results;
}

const jsonFiles = findJsonFiles(REPO_ROOT);
const parsed = {};
let parseErrors = 0;

for (const file of jsonFiles) {
  try {
    parsed[file] = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, file), 'utf8'));
    ok(`Parsed: ${file}`);
  } catch (e) {
    bad(`JSON parse error: ${file} — ${e.message}`);
    parseErrors++;
  }
}

if (parseErrors === 0) {
  ok(`All ${jsonFiles.length} JSON files parse correctly`);
}

// ── Load core data ──────────────────────────────────────────────────

const controlsLib   = loadJson('controls/library.json');
const domainsFile   = loadJson('controls/domains.json');
const artifactsInv  = loadJson('artifacts/inventory.json');
const clauseMap     = loadJson('artifacts/clause-map.json');
const clausesIndex  = loadJson('clauses/index.json');
const evidence      = loadJson('evidence/index.json');
const requirements  = loadJson('requirements/index.json');
const riskRegister  = loadJson('risk-management/risk-register.json');
const templates     = loadJson('templates/index.json');
const sections      = loadJson('clauses/sections.json');

// Build control slug set from library.json
const libraryDomains = (controlsLib && controlsLib.domains) || [];
const libraryControls = (controlsLib && controlsLib.controls) || [];
const controlSlugSet = new Set(libraryControls.map(c => c.slug));
const domainSlugSet = new Set(libraryDomains.map(d => d.slug));

// Build artifact slug set from inventory.json (keyed by category)
let allArtifacts = [];
if (artifactsInv) {
  for (const [key, val] of Object.entries(artifactsInv)) {
    if (Array.isArray(val)) allArtifacts.push(...val);
  }
}
const artifactSlugSet = new Set(allArtifacts.map(a => a.slug));

// Build clause ID set
const clauseIdSet = new Set();
if (Array.isArray(clausesIndex)) {
  for (const c of clausesIndex) { if (c.id) clauseIdSet.add(c.id); }
} else if (clausesIndex && typeof clausesIndex === 'object') {
  for (const key of Object.keys(clausesIndex)) clauseIdSet.add(key);
}

// ── 2. Controls Library — Slug Uniqueness & Required Fields ─────────

console.log('\n=== 2. Control Slug Uniqueness & Required Fields ===');

const slugCounts = {};
for (const ctrl of libraryControls) {
  if (!ctrl.slug) {
    bad(`Control missing "slug": ${(ctrl.name || '').slice(0, 60)}`);
  } else {
    slugCounts[ctrl.slug] = (slugCounts[ctrl.slug] || 0) + 1;
  }
  if (!ctrl.name || ctrl.name.trim() === '') {
    bad(`Control "${ctrl.slug}" has empty or missing "name"`);
  }
  if (!ctrl.domain) {
    bad(`Control "${ctrl.slug}" missing "domain" field`);
  }
}

const duplicates = Object.entries(slugCounts).filter(([, c]) => c > 1);
if (duplicates.length === 0) {
  ok(`No duplicate control slugs (${libraryControls.length} controls)`);
} else {
  for (const [slug, count] of duplicates) {
    bad(`Duplicate control slug "${slug}" appears ${count} times`);
  }
}

// ── 3. Every Domain Has Controls ─────────────────────────────────────

console.log('\n=== 3. Controls Library — Domain Coverage ===');

const controlsByDomain = {};
for (const ctrl of libraryControls) {
  if (ctrl.domain) {
    controlsByDomain[ctrl.domain] = (controlsByDomain[ctrl.domain] || 0) + 1;
  }
}

for (const dom of libraryDomains) {
  if (!controlsByDomain[dom.slug]) {
    bad(`Domain "${dom.slug}" has zero controls in library.json`);
  } else {
    ok(`Domain "${dom.slug}" has ${controlsByDomain[dom.slug]} control(s)`);
  }
}

// Check domains.json keys match library.json domain slugs
if (domainsFile) {
  const domainsKeys = Object.keys(domainsFile);
  for (const key of domainsKeys) {
    if (!domainSlugSet.has(key)) {
      warning(`domains.json key "${key}" not found in library.json domains`);
    } else {
      ok(`domains.json key "${key}" matches library.json`);
    }
  }
  for (const dom of libraryDomains) {
    if (!domainsFile[dom.slug]) {
      warning(`library.json domain "${dom.slug}" not found in domains.json`);
    }
  }
}

// ── 4. controlSlugs Resolution (Artifacts → Controls) ────────────────

console.log('\n=== 4. controlSlugs Resolution (Artifacts) ===');

let controlSlugErrors = 0;
let controlSlugTotal = 0;

for (const artifact of allArtifacts) {
  if (!artifact.controlSlugs) continue;
  for (const slug of artifact.controlSlugs) {
    controlSlugTotal++;
    if (!controlSlugSet.has(slug)) {
      bad(`Artifact "${artifact.slug}" references unknown control slug "${slug}"`);
      controlSlugErrors++;
    }
  }
}

if (controlSlugErrors === 0) {
  ok(`All ${controlSlugTotal} controlSlug references in artifacts resolve correctly`);
}

// ── 5. artifactSlugs Resolution (Evidence → Artifacts) ───────────────

console.log('\n=== 5. artifactSlugs Resolution (Evidence) ===');

let artifactSlugErrors = 0;
let artifactSlugTotal = 0;

if (evidence && typeof evidence === 'object') {
  for (const key of Object.keys(evidence)) {
    const entry = evidence[key];
    if (!entry || !entry.evidenceItems) continue;
    for (const item of entry.evidenceItems) {
      if (!item.artifactSlugs) continue;
      for (const slug of item.artifactSlugs) {
        artifactSlugTotal++;
        if (!artifactSlugSet.has(slug)) {
          bad(`Evidence "${item.id}" references unknown artifact slug "${slug}"`);
          artifactSlugErrors++;
        }
      }
    }
  }
}

if (artifactSlugErrors === 0) {
  ok(`All ${artifactSlugTotal} artifactSlug references in evidence resolve correctly`);
}

// ── 6. Clause Key Consistency ────────────────────────────────────────

console.log('\n=== 6. Clause Key Consistency ===');

if (evidence && clauseIdSet.size > 0) {
  let evidenceKeyErrors = 0;
  for (const key of Object.keys(evidence)) {
    if (!clauseIdSet.has(key)) {
      bad(`Evidence key "${key}" not found in clauses/index.json`);
      evidenceKeyErrors++;
    }
  }
  if (evidenceKeyErrors === 0) {
    ok(`All ${Object.keys(evidence).length} evidence keys match clause IDs`);
  }
}

if (requirements && clauseIdSet.size > 0) {
  let reqKeyErrors = 0;
  const reqKeys = Array.isArray(requirements) ? [] : Object.keys(requirements);
  for (const key of reqKeys) {
    if (!clauseIdSet.has(key)) {
      bad(`Requirement key "${key}" not found in clauses/index.json`);
      reqKeyErrors++;
    }
  }
  if (reqKeyErrors.length !== undefined && reqKeyErrors === 0 && reqKeys.length > 0) {
    ok(`All ${reqKeys.length} requirement keys match clause IDs`);
  }
}

// ── 7. Risk Register Math ────────────────────────────────────────────

console.log('\n=== 7. Risk Register Math ===');

if (riskRegister && riskRegister.risks) {
  let mathErrors = 0;
  for (const risk of riskRegister.risks) {
    const expectedInherent = risk.likelihood * risk.impact;
    if (risk.inherentRisk !== expectedInherent) {
      bad(`${risk.id}: inherentRisk ${risk.inherentRisk} != ${risk.likelihood} x ${risk.impact} = ${expectedInherent}`);
      mathErrors++;
    }
    const expectedResidual = risk.residualLikelihood * risk.residualImpact;
    if (risk.residualRisk !== expectedResidual) {
      bad(`${risk.id}: residualRisk ${risk.residualRisk} != ${risk.residualLikelihood} x ${risk.residualImpact} = ${expectedResidual}`);
      mathErrors++;
    }
  }
  if (mathErrors === 0) {
    ok(`All ${riskRegister.risks.length} risk register entries have correct math`);
  }
}

// ── 8. Templates Required Fields ─────────────────────────────────────

console.log('\n=== 8. Templates Required Fields ===');

if (templates && templates.templates) {
  let templateErrors = 0;
  for (const tmpl of templates.templates) {
    const missing = [];
    if (!tmpl.filename)  missing.push('filename');
    if (!tmpl.name)      missing.push('name');
    if (!tmpl.category)  missing.push('category');
    if (missing.length > 0) {
      bad(`Template "${tmpl.filename || tmpl.name || '(unknown)'}" missing fields: ${missing.join(', ')}`);
      templateErrors++;
    }
  }
  if (templateErrors === 0) {
    ok(`All ${templates.templates.length} templates have required fields`);
  }

  // Validate template categories match declared categories
  if (templates.categories) {
    const validCategories = new Set(templates.categories.map(c => c.id));
    for (const tmpl of templates.templates) {
      if (tmpl.category && !validCategories.has(tmpl.category)) {
        bad(`Template "${tmpl.filename}" has unknown category "${tmpl.category}"`);
      }
    }
  }
}

// ── 9. Clause-Map Cross-References ───────────────────────────────────

console.log('\n=== 9. Clause-Map Cross-References ===');

if (clauseMap && clauseMap.clauseToArtifacts) {
  let mapErrors = 0;
  for (const [clauseId, slugs] of Object.entries(clauseMap.clauseToArtifacts)) {
    if (clauseIdSet.size > 0 && !clauseIdSet.has(clauseId)) {
      bad(`Clause-map references unknown clause "${clauseId}"`);
      mapErrors++;
    }
    for (const slug of slugs) {
      if (!artifactSlugSet.has(slug)) {
        bad(`Clause-map clause "${clauseId}" references unknown artifact slug "${slug}"`);
        mapErrors++;
      }
    }
  }
  if (mapErrors === 0) {
    ok(`All clause-map entries resolve correctly (${Object.keys(clauseMap.clauseToArtifacts).length} clauses)`);
  }
}

// ── 10. No Empty Arrays / Empty Strings ──────────────────────────────

console.log('\n=== 10. Data Completeness ===');

let emptyIssues = 0;

for (const ctrl of libraryControls) {
  if (ctrl.clauses && ctrl.clauses.length === 0) {
    warning(`Control "${ctrl.slug}" has empty clauses array`);
    emptyIssues++;
  }
  if (ctrl.keyActivities && ctrl.keyActivities.length === 0) {
    warning(`Control "${ctrl.slug}" has empty keyActivities array`);
    emptyIssues++;
  }
  if (ctrl.description && ctrl.description.trim() === '') {
    bad(`Control "${ctrl.slug}" has empty description`);
    emptyIssues++;
  }
}

for (const artifact of allArtifacts) {
  if (artifact.name && artifact.name.trim() === '') {
    bad(`Artifact "${artifact.slug}" has empty name`);
    emptyIssues++;
  }
  if (artifact.slug && artifact.slug.trim() === '') {
    bad('Artifact has empty slug');
    emptyIssues++;
  }
}

if (emptyIssues === 0) {
  ok('No empty arrays or empty strings detected in core data');
}

// ── 11. Sections ↔ Clauses Consistency ───────────────────────────────

console.log('\n=== 11. Sections ↔ Clauses Consistency ===');

if (Array.isArray(sections) && clauseIdSet.size > 0) {
  let sectionErrors = 0;
  for (const section of sections) {
    if (!section.subsections) continue;
    for (const sub of section.subsections) {
      if (!sub.clauses) continue;
      for (const clauseId of sub.clauses) {
        if (!clauseIdSet.has(clauseId)) {
          bad(`Sections.json references clause "${clauseId}" not in clauses/index.json`);
          sectionErrors++;
        }
      }
    }
  }
  if (sectionErrors === 0) {
    ok('All section clause references resolve correctly');
  }
}

// ── 12. Control Domain References ────────────────────────────────────

console.log('\n=== 12. Control Domain References ===');

let domainRefErrors = 0;
for (const ctrl of libraryControls) {
  if (ctrl.domain && !domainSlugSet.has(ctrl.domain)) {
    bad(`Control "${ctrl.slug}" references unknown domain "${ctrl.domain}"`);
    domainRefErrors++;
  }
}

if (domainRefErrors === 0) {
  ok(`All ${libraryControls.length} controls reference valid domains`);
}

// ── Summary ──────────────────────────────────────────────────────────

console.log('\n' + '='.repeat(60));
console.log('Validation complete:');
console.log(`  Pass: ${pass}`);
console.log(`  Fail: ${fail}`);
console.log(`  Warn: ${warn}`);
console.log(`  Total: ${pass + fail + warn}`);
console.log('='.repeat(60));

if (fail > 0) {
  console.error(`\nValidation FAILED with ${fail} error(s).`);
  process.exit(1);
} else if (warn > 0) {
  console.log(`\nValidation passed with ${warn} warning(s).`);
  process.exit(0);
} else {
  console.log('\nAll checks passed.');
  process.exit(0);
}
