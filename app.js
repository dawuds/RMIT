/* ============================================
   BNM RMiT Explorer — Application
   ============================================ */

const state = {
  sections: null,
  clauses: null,      // keyed by id
  requirements: null,
  evidence: null,
  controls: null,     // { domains, library, clauseMap }
  artifacts: null,    // { inventory, clauseMap }
  riskMgmt: null,     // { methodology, matrix, register, checklist, treatment }
  templates: null,    // { categories, templates, totalCount, disclaimer }
  route: { view: 'overview' },
};

const cache = new Map();

async function fetchJSON(path) {
  if (cache.has(path)) return cache.get(path);
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    const data = await res.json();
    cache.set(path, data);
    return data;
  } catch (err) {
    console.warn(`fetchJSON(${path}):`, err);
    return null;
  }
}

// ---- Router ----
function parseHash() {
  const hash = location.hash.slice(1);
  if (!hash) return { view: 'overview' };
  if (hash.startsWith('search/')) return { view: 'search', query: decodeURIComponent(hash.slice(7)) };
  if (hash === 'controls') return { view: 'controls-browser' };
  if (hash.startsWith('control/')) return { view: 'control-detail', slug: hash.slice(8) };
  if (hash === 'risk-management') return { view: 'risk-management' };
  if (hash === 'templates') return { view: 'templates' };
  if (hash.includes('.')) return { view: 'clause', id: hash };
  return { view: 'section', id: hash };
}

function navigate(hash) { location.hash = hash; }

function escHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderBreadcrumbs(items) {
  return `<nav class="breadcrumbs">${items.map((item, i) => {
    if (i === items.length - 1) return `<span class="current">${escHtml(item.label)}</span>`;
    return `<a href="#${item.hash || ''}">${escHtml(item.label)}</a><span class="sep">›</span>`;
  }).join('')}</nav>`;
}

function renderLoading() {
  return '<div class="loading"><div class="spinner"></div><span>Loading data…</span></div>';
}

// ---- View: Overview ----
function renderOverview() {
  const sections = state.sections;
  const totalClauses = Object.keys(state.clauses).length;
  const totalSubsections = sections.reduce((s, sec) => s + sec.subsections.length, 0);

  return `
    <div class="disclaimer">
      This database is for educational and indicative purposes only. It does not constitute legal advice. The content represents a structured interpretation of BNM's Risk Management in Technology Policy Document (November 2025). Always consult the source PDF and qualified legal or regulatory counsel for compliance decisions.
    </div>
    <div class="stats-banner">
      <div class="stat"><div class="stat-value">${sections.length}</div><div class="stat-label">Sections</div></div>
      <div class="stat"><div class="stat-value">${totalSubsections}</div><div class="stat-label">Subsections</div></div>
      <div class="stat"><div class="stat-value">${totalClauses}</div><div class="stat-label">Clauses</div></div>
      <div class="stat"><div class="stat-value">${state.controls ? Object.values(state.controls.library).reduce((s, arr) => s + arr.length, 0) : '—'}</div><div class="stat-label">Controls</div></div>
      <div class="stat"><div class="stat-value">${state.artifacts ? Object.values(state.artifacts.inventory).reduce((s, arr) => s + arr.length, 0) : '—'}</div><div class="stat-label">Artifacts</div></div>
    </div>
    <div class="sec-grid">
      ${sections.map(sec => {
        const clauseCount = sec.subsections.reduce((s, ss) => s + ss.clauses.length, 0);
        return `
          <div class="sec-card sec-${sec.id}" data-nav="${sec.id}">
            <div class="sec-card-id">\u00A7${sec.id}</div>
            <div class="sec-card-name">${escHtml(sec.name)}</div>
            <div class="sec-card-counts">
              <div><span>${sec.subsections.length}</span> subsection${sec.subsections.length !== 1 ? 's' : ''}</div>
              <div><span>${clauseCount}</span> clause${clauseCount !== 1 ? 's' : ''}</div>
            </div>
          </div>`;
      }).join('')}
    </div>
    <div style="margin-top:2rem">
      <a href="#controls" style="font-size:0.875rem">Browse Common Controls Library (${state.controls ? Object.values(state.controls.library).reduce((s, arr) => s + arr.length, 0) : '—'} controls across ${state.controls ? Object.keys(state.controls.domains).length : '—'} domains) \u2192</a>
    </div>`;
}

// ---- View: Section Drilldown ----
function renderSection(secId) {
  const sec = state.sections.find(s => s.id === secId);
  if (!sec) return '<div class="error-state">Section not found.</div>';

  return `
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: `\u00A7${sec.id} ${sec.name}` }])}
    <div class="sec-header">
      <div class="sec-header-title">
        <span class="sec-badge sec-badge-${sec.id}">\u00A7${sec.id}</span>
        <h2>${escHtml(sec.name)}</h2>
      </div>
    </div>
    <div class="accordion">
      ${sec.subsections.map(ss => `
        <div class="accordion-item open">
          <button class="accordion-trigger" data-accordion>
            <span class="accordion-trigger-left">
              <span>${escHtml(ss.name)}</span>
              <span style="color:var(--text-muted);font-weight:400;font-size:0.8125rem">(${ss.clauses.length} clause${ss.clauses.length !== 1 ? 's' : ''})</span>
            </span>
            <span class="chevron">\u25B6</span>
          </button>
          <div class="accordion-content">
            <ul class="clause-list">
              ${ss.clauses.map(cid => {
                const cl = state.clauses[cid];
                if (!cl) return '';
                return `
                  <li>
                    <a class="clause-link" href="#${cid}">
                      <span class="clause-id">${cid}</span>
                      <span class="clause-title">${escHtml(cl.title)}</span>
                      <span class="clause-marker marker-${cl.marker}">${cl.marker === 'S' ? 'Shall' : 'Should'}</span>
                    </a>
                  </li>`;
              }).join('')}
            </ul>
          </div>
        </div>`).join('')}
    </div>`;
}

// ---- View: Clause Detail ----
function renderClause(clauseId) {
  const cl = state.clauses[clauseId];
  if (!cl) return '<div class="error-state">Clause not found.</div>';

  const secId = clauseId.split('.')[0];
  const sec = state.sections.find(s => s.id === secId);
  const tabs = ['Overview', 'Requirements', 'Evidence', 'Controls', 'Artifacts'];

  return `
    ${renderBreadcrumbs([
      { label: 'Home', hash: '' },
      { label: `\u00A7${sec.id} ${sec.name}`, hash: sec.id },
      { label: `Clause ${clauseId}` }
    ])}
    <div class="clause-detail-header">
      <h2>
        <span class="clause-id-badge" style="background:var(--sec-${secId}-bg);color:var(--sec-${secId})">${clauseId}</span>
        ${escHtml(cl.title)}
      </h2>
      <div class="clause-meta">
        <span class="badge badge-domain">${escHtml(cl.section)}</span>
        <span class="badge badge-type">${escHtml(cl.subsection)}</span>
        <span class="clause-marker marker-${cl.marker}">${cl.marker === 'S' ? 'Shall' : 'Should'}</span>
        <span class="badge badge-layer">${escHtml(cl.clauseType)}</span>
      </div>
      ${cl.verbatim ? `
        <div class="verbatim-block">
          <strong>Verbatim (BNM RMiT PD)</strong>
          ${escHtml(cl.verbatim)}
        </div>` : ''}
      ${cl.translation ? `
        <div class="translation-block">
          <strong>Plain English</strong> <span class="badge badge-ai" title="AI-generated interpretation — verify against verbatim BNM text and source PDF before relying on this">AI Generated</span>
          ${escHtml(cl.translation)}
        </div>` : ''}
    </div>
    <div class="tabs">
      <div class="tab-list" role="tablist">
        ${tabs.map((t, i) => `<button class="tab-btn${i === 0 ? ' active' : ''}" data-tab="${t.toLowerCase()}" role="tab">${t}</button>`).join('')}
      </div>
      <div class="tab-panel active" data-panel="overview">${renderOverviewTab(cl)}</div>
      <div class="tab-panel" data-panel="requirements">${renderLoading()}</div>
      <div class="tab-panel" data-panel="evidence">${renderLoading()}</div>
      <div class="tab-panel" data-panel="controls">${renderLoading()}</div>
      <div class="tab-panel" data-panel="artifacts">${renderLoading()}</div>
    </div>`;
}

function renderOverviewTab(cl) {
  let html = '';
  if (cl.evidence && cl.evidence.length > 0) {
    html += `<h3 style="font-size:1rem;margin-bottom:0.75rem">Evidence Summary</h3>
      <ul style="list-style:disc;padding-left:1.25rem;margin-bottom:1.5rem">
        ${cl.evidence.map(e => `<li style="font-size:0.875rem;color:var(--text-secondary);padding:0.25rem 0">${escHtml(e)}</li>`).join('')}
      </ul>`;
  }
  if (cl.artifacts && cl.artifacts.length > 0) {
    html += `<h3 style="font-size:1rem;margin-bottom:0.75rem">Required Artifacts</h3>
      ${cl.artifacts.map(a => `
        <div style="display:flex;gap:0.5rem;align-items:baseline;padding:0.375rem 0;border-bottom:1px solid var(--border)">
          <span class="badge badge-category">${escHtml(a.category)}</span>
          <span style="font-size:0.875rem;font-weight:500">${escHtml(a.name)}</span>
          ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : ''}
        </div>`).join('')}`;
  }
  return html || '<p class="empty-state">No overview data available.</p>';
}

// ---- Requirements Tab ----
function renderRequirementsTab(clauseId) {
  const req = state.requirements?.[clauseId];
  if (!req) return '<p class="empty-state">No requirements data available for this clause.</p>';

  const dims = [
    { key: 'business', label: 'Business', color: 'var(--sec-8)' },
    { key: 'technology', label: 'Technology', color: 'var(--sec-10)' },
    { key: 'governance', label: 'Governance', color: 'var(--sec-9)' },
  ];

  return dims.map(({ key, label, color }) => {
    const d = req[key];
    if (!d) return '';
    return `
      <div class="req-dimension">
        <h4 style="color:${color}">${label} Requirements</h4>
        <p class="req-summary">${escHtml(d.summary)} <span class="badge badge-ai" title="AI-generated interpretive summary">AI Generated</span></p>
        ${d.requirements && d.requirements.length > 0 ? `
          <div style="overflow-x:auto">
            <table class="data-table">
              <thead><tr><th>ID</th><th>Requirement</th><th>Owner</th><th>Frequency</th><th>Priority</th></tr></thead>
              <tbody>
                ${d.requirements.map(r => `
                  <tr>
                    <td class="mono" style="white-space:nowrap">${escHtml(r.id)}</td>
                    <td>
                      ${escHtml(r.requirement)}
                      ${r.rationale ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem"><span class="badge badge-ai" title="AI-generated rationale">AI Generated</span> ${escHtml(r.rationale)}</div>` : ''}
                    </td>
                    <td style="white-space:nowrap">${escHtml(r.owner)}</td>
                    <td style="white-space:nowrap;font-size:0.8125rem">${escHtml(r.frequency)}</td>
                    <td><span class="badge ${r.priority === 'Critical' ? 'badge-mandatory' : 'badge-domain'}">${escHtml(r.priority)}</span></td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>` : ''}
      </div>`;
  }).join('');
}

// ---- Evidence Tab ----
function renderEvidenceTab(clauseId) {
  const ev = state.evidence?.[clauseId];
  if (!ev) return '<p class="empty-state">No evidence guidance available for this clause.</p>';

  return `
    ${ev.auditorFocus ? `<div class="auditor-focus"><strong>Auditor Focus</strong> <span class="badge badge-ai" title="AI-generated — verify against official BNM examination guidance">AI Generated</span>${escHtml(ev.auditorFocus)}</div>` : ''}
    ${(ev.evidenceItems || []).map(item => `
      <div class="evidence-card">
        <h4>${escHtml(item.name)}</h4>
        <div class="ev-id">${escHtml(item.id)}</div>
        ${item.description ? `<div class="ev-desc">${escHtml(item.description)}</div>` : ''}
        ${item.whatGoodLooksLike && item.whatGoodLooksLike.length > 0 ? `
          <div class="ev-section"><div class="ev-section-title">What Good Looks Like <span class="badge badge-example" title="AI-generated illustrative examples — not exhaustive or prescriptive">Example</span></div>
            <ul class="ev-list good">${item.whatGoodLooksLike.map(w => `<li>${escHtml(w)}</li>`).join('')}</ul>
          </div>` : ''}
        ${item.commonGaps && item.commonGaps.length > 0 ? `
          <div class="ev-section"><div class="ev-section-title">Common Gaps <span class="badge badge-example" title="AI-generated illustrative examples — not exhaustive">Example</span></div>
            <ul class="ev-list gap">${item.commonGaps.map(g => `<li>${escHtml(g)}</li>`).join('')}</ul>
          </div>` : ''}
        <div class="ev-meta">
          ${item.suggestedSources ? `<div>Sources: <span>${escHtml(item.suggestedSources.join(', '))}</span></div>` : ''}
          ${item.format ? `<div>Format: <span>${escHtml(item.format)}</span></div>` : ''}
          ${item.retentionPeriod ? `<div>Retention: <span>${escHtml(item.retentionPeriod)}</span></div>` : ''}
        </div>
      </div>`).join('')}
    ${ev.auditTips && ev.auditTips.length > 0 ? `
      <div class="audit-tips"><h4>Audit Tips <span class="badge badge-ai" title="AI-generated guidance — verify against official BNM examination criteria">AI Generated</span></h4>
        <ul>${ev.auditTips.map(t => `<li>${escHtml(t)}</li>`).join('')}</ul>
      </div>` : ''}`;
}

// ---- Controls Tab ----
function renderControlsTab(clauseId) {
  if (!state.controls) return '<p class="empty-state">No controls data available.</p>';
  const slugs = state.controls.clauseMap[clauseId];
  if (!slugs || slugs.length === 0) return '<p class="empty-state">No controls mapped to this clause.</p>';

  const lookup = {};
  for (const [domain, controls] of Object.entries(state.controls.library)) {
    for (const ctrl of controls) lookup[ctrl.slug] = { ...ctrl, domainId: domain };
  }

  const matched = slugs.map(s => lookup[s]).filter(Boolean);
  if (matched.length === 0) return '<p class="empty-state">No control details found.</p>';

  return matched.map(ctrl => {
    const domainInfo = state.controls.domains[ctrl.domainId];
    return `
      <div class="control-card">
        <h4>${escHtml(ctrl.name)}</h4>
        <div class="control-meta">
          <span class="badge badge-domain">${escHtml(domainInfo?.name || ctrl.domainId)}</span>
          <span class="badge badge-type">${escHtml(ctrl.type)}</span>
          <span class="badge badge-layer">${escHtml(ctrl.layer)}</span>
        </div>
        <p class="control-desc">${escHtml(ctrl.description)}</p>
        ${ctrl.keyActivities && ctrl.keyActivities.length > 0 ? `
          <div class="key-activities"><h5>Key Activities</h5>
            <ul>${ctrl.keyActivities.map(a => `<li>${escHtml(a)}</li>`).join('')}</ul>
          </div>` : ''}
        ${ctrl.maturity ? `
          <div class="maturity-grid">
            <div class="maturity-card maturity-basic"><h5>Basic</h5><p>${escHtml(ctrl.maturity.basic)}</p></div>
            <div class="maturity-card maturity-mature"><h5>Mature</h5><p>${escHtml(ctrl.maturity.mature)}</p></div>
            <div class="maturity-card maturity-advanced"><h5>Advanced</h5><p>${escHtml(ctrl.maturity.advanced)}</p></div>
          </div>` : ''}
        ${(ctrl.nist || ctrl.iso27001) ? `
          <div class="fw-mappings">
            ${ctrl.nist && ctrl.nist.length > 0 ? `<div>NIST CSF: <span>${ctrl.nist.map(n => escHtml(n)).join(', ')}</span></div>` : ''}
            ${ctrl.iso27001 && ctrl.iso27001.length > 0 ? `<div>ISO 27001: <span>${ctrl.iso27001.map(n => escHtml(n)).join(', ')}</span></div>` : ''}
          </div>` : ''}
        ${ctrl.toolExamples && ctrl.toolExamples.length > 0 ? `
          <div style="margin-top:0.5rem;font-size:0.75rem;color:var(--text-muted)">
            Tools: <span style="font-weight:600;color:var(--text-secondary)">${ctrl.toolExamples.map(t => escHtml(t)).join(', ')}</span>
          </div>` : ''}
      </div>`;
  }).join('');
}

// ---- Artifacts Tab ----
function renderArtifactsTab(clauseId) {
  if (!state.artifacts) return '<p class="empty-state">No artifacts data available.</p>';
  const slugs = state.artifacts.clauseMap[clauseId];
  if (!slugs || slugs.length === 0) return '<p class="empty-state">No artifacts mapped to this clause.</p>';

  const lookup = {};
  for (const [category, items] of Object.entries(state.artifacts.inventory)) {
    for (const item of items) lookup[item.slug] = { ...item, categoryLabel: category };
  }

  const matched = slugs.map(s => lookup[s]).filter(Boolean);
  if (matched.length === 0) return '<p class="empty-state">No artifact details found.</p>';

  return matched.map(a => `
    <div class="artifact-card">
      <h4>${escHtml(a.name)}</h4>
      <div class="artifact-meta">
        <span class="badge badge-category">${escHtml(a.categoryLabel)}</span>
        ${a.owner ? `<span class="badge badge-owner">${escHtml(a.owner)}</span>` : ''}
        ${a.reviewFrequency ? `<span class="badge badge-frequency">${escHtml(a.reviewFrequency)}</span>` : ''}
        ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : ''}
      </div>
      ${a.description ? `<p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem">${escHtml(a.description)}</p>` : ''}
      ${a.keyContents && a.keyContents.length > 0 ? `
        <div class="artifact-contents"><h5>Key Contents</h5>
          <ul>${a.keyContents.map(k => `<li>${escHtml(k)}</li>`).join('')}</ul>
        </div>` : ''}
    </div>`).join('');
}

// ---- View: Search ----
function renderSearch(query) {
  if (!query) return '<p class="empty-state">Enter a search term to find clauses.</p>';
  const q = query.toLowerCase();
  const results = [];
  for (const [id, cl] of Object.entries(state.clauses)) {
    if (id.toLowerCase().includes(q) || cl.title.toLowerCase().includes(q) ||
        (cl.verbatim && cl.verbatim.toLowerCase().includes(q)) ||
        (cl.translation && cl.translation.toLowerCase().includes(q))) {
      results.push({ id, cl });
    }
  }
  if (results.length === 0) return `<p class="empty-state">No clauses match "${escHtml(query)}".</p>`;

  results.sort((a, b) => {
    const pa = a.id.split('.').map(Number), pb = b.id.split('.').map(Number);
    return pa[0] - pb[0] || pa[1] - pb[1];
  });

  const grouped = {};
  for (const r of results) {
    const secId = r.id.split('.')[0];
    if (!grouped[secId]) grouped[secId] = { sec: state.sections.find(s => s.id === secId), items: [] };
    grouped[secId].items.push(r);
  }

  return `
    <div class="search-results-header">${results.length} result${results.length !== 1 ? 's' : ''} for "${escHtml(query)}"</div>
    ${Object.values(grouped).map(g => `
      <div class="search-group">
        <div class="search-group-title">
          <span class="sec-pill sec-pill-${g.sec.id}">\u00A7${g.sec.id}</span>
          <span style="font-weight:600">${escHtml(g.sec.name)}</span>
        </div>
        <ul class="clause-list">
          ${g.items.map(r => `
            <li><a class="clause-link" href="#${r.id}">
              <span class="clause-id">${r.id}</span>
              <span class="clause-title">${escHtml(r.cl.title)}</span>
              <span class="clause-marker marker-${r.cl.marker}">${r.cl.marker === 'S' ? 'Shall' : 'Should'}</span>
            </a></li>`).join('')}
        </ul>
      </div>`).join('')}`;
}

// ---- View: Controls Browser ----
function renderControlsBrowser() {
  if (!state.controls) return renderLoading();
  const { domains, library } = state.controls;

  return `
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: 'Controls Library' }])}
    <h2 style="font-size:1.25rem;margin-bottom:0.5rem">Common Controls Library</h2>
    <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:1.5rem">
      ${Object.values(library).reduce((s, arr) => s + arr.length, 0)} controls across ${Object.keys(domains).length} domains. Each control maps to one or more RMiT clauses.
    </p>
    <div class="accordion">
      ${Object.entries(domains).map(([domainId, domain]) => {
        const controls = library[domainId] || [];
        return `
          <div class="accordion-item">
            <button class="accordion-trigger" data-accordion>
              <span class="accordion-trigger-left">
                <span>${escHtml(domain.name)}</span>
                <span style="color:var(--text-muted);font-weight:400;font-size:0.8125rem">(${controls.length})</span>
              </span>
              <span class="chevron">\u25B6</span>
            </button>
            <div class="accordion-content">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;padding-bottom:0.75rem;border-bottom:1px solid var(--border)">${escHtml(domain.description)}</p>
              <ul class="clause-list">
                ${controls.map(ctrl => `
                  <li><a class="clause-link" href="#control/${ctrl.slug}">
                    <span class="clause-title">${escHtml(ctrl.name)}</span>
                    <span class="badge badge-type">${escHtml(ctrl.type)}</span>
                    <span style="font-size:0.75rem;color:var(--text-muted)">${ctrl.clauses.length} clause${ctrl.clauses.length !== 1 ? 's' : ''}</span>
                  </a></li>`).join('')}
              </ul>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

// ---- View: Control Detail ----
function renderControlDetail(slug) {
  if (!state.controls) return renderLoading();
  let ctrl = null, domainId = null;
  for (const [did, controls] of Object.entries(state.controls.library)) {
    const found = controls.find(c => c.slug === slug);
    if (found) { ctrl = found; domainId = did; break; }
  }
  if (!ctrl) return '<div class="error-state">Control not found.</div>';
  const domain = state.controls.domains[domainId];

  // ---- Audit Package: linked artifacts ----
  const controlSlug = ctrl.slug;
  const clauses = ctrl.clauses || [];
  const artifactIndex = {};
  if (state.artifacts && state.artifacts.inventory) {
    Object.values(state.artifacts.inventory).forEach(arr => {
      if (Array.isArray(arr)) arr.forEach(a => { artifactIndex[a.slug] = a; });
    });
  }
  const linkedArtifacts = Object.values(artifactIndex)
    .filter(a => Array.isArray(a.controlSlugs) && a.controlSlugs.includes(controlSlug))
    .sort((a, b) => (b.mandatory ? 1 : 0) - (a.mandatory ? 1 : 0));

  // ---- Audit Package: linked evidence ----
  const linkedArtifactSlugs = new Set(linkedArtifacts.map(a => a.slug));
  const linkedEvidence = [];
  clauses.forEach(c => {
    const ev = state.evidence?.[c];
    if (ev && ev.evidenceItems) {
      ev.evidenceItems.forEach(item => {
        if (linkedEvidence.find(e => e.id === item.id)) return;
        const itemArtifacts = item.artifactSlugs || [];
        if (!itemArtifacts.length || itemArtifacts.some(sl => linkedArtifactSlugs.has(sl))) {
          linkedEvidence.push(item);
        }
      });
    }
  });

  // ---- Audit Package HTML ----
  const auditPackageHTML = (linkedArtifacts.length || linkedEvidence.length) ? `
    <div class="audit-package">
      <div class="audit-package-title">Audit Package</div>
      <div class="audit-package-summary">${linkedArtifacts.length} artifact${linkedArtifacts.length !== 1 ? 's' : ''} &middot; ${linkedEvidence.length} evidence item${linkedEvidence.length !== 1 ? 's' : ''}</div>
      <div class="template-ai-note">Templates are AI-generated starting points — review and customize before use.</div>
      ${linkedArtifacts.length ? `
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion>
          <span class="accordion-trigger-left">
            <span>Required Artifacts</span>
            <span style="color:var(--text-muted);font-weight:400;font-size:0.8125rem">(${linkedArtifacts.length})</span>
          </span>
          <span class="chevron">&#9654;</span>
        </button>
        <div class="accordion-content">
          ${linkedArtifacts.map(a => `
            <div class="artifact-link-card">
              <div class="artifact-link-header">
                <span class="artifact-link-name">${escHtml(a.name)}</span>
                ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : ''}
              </div>
              <div class="artifact-link-meta">
                ${a.category ? `<span class="badge badge-category">${escHtml(a.category)}</span>` : ''}
                ${a.owner ? `<span class="badge badge-owner">${escHtml(a.owner)}</span>` : ''}
                ${a.reviewFrequency ? `<span class="badge badge-frequency">${escHtml(a.reviewFrequency)}</span>` : ''}
              </div>
              ${a.keyContents && a.keyContents.length ? `
                <ul class="artifact-link-contents">
                  ${a.keyContents.map(k => `<li>${escHtml(k)}</li>`).join('')}
                </ul>` : ''}
            </div>`).join('')}
        </div>
      </div>` : ''}
      ${linkedEvidence.length ? `
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion>
          <span class="accordion-trigger-left">
            <span>Evidence Checklist</span>
            <span style="color:var(--text-muted);font-weight:400;font-size:0.8125rem">(${linkedEvidence.length})</span>
          </span>
          <span class="chevron">&#9654;</span>
        </button>
        <div class="accordion-content">
          ${linkedEvidence.map(item => `
            <div class="evidence-checklist-item">
              <div class="evidence-checklist-header">
                <span class="evidence-checklist-name">${escHtml(item.name)}</span>
                ${item.format ? `<span class="badge badge-category">${escHtml(item.format)}</span>` : ''}
              </div>
              <p class="evidence-checklist-desc">${escHtml(item.description || '')}</p>
              ${item.retentionPeriod ? `<div class="evidence-checklist-retention">Retention: <strong>${escHtml(item.retentionPeriod)}</strong></div>` : ''}
              ${item.suggestedSources && item.suggestedSources.length ? `<div class="evidence-checklist-sources">Sources: ${item.suggestedSources.map(s => escHtml(s)).join(', ')}</div>` : ''}
              ${item.whatGoodLooksLike && item.whatGoodLooksLike.length ? `
              <div class="accordion-item">
                <button class="accordion-trigger" data-accordion>
                  <span class="accordion-trigger-left"><span>What Good Looks Like</span></span>
                  <span class="chevron">&#9654;</span>
                </button>
                <div class="accordion-content">
                  <ul class="evidence-good">${item.whatGoodLooksLike.map(w => `<li>${escHtml(w)}</li>`).join('')}</ul>
                </div>
              </div>` : ''}
              ${item.commonGaps && item.commonGaps.length ? `
              <div class="accordion-item">
                <button class="accordion-trigger" data-accordion>
                  <span class="accordion-trigger-left"><span>Common Gaps</span></span>
                  <span class="chevron">&#9654;</span>
                </button>
                <div class="accordion-content">
                  <ul class="evidence-gap">${item.commonGaps.map(g => `<li>${escHtml(g)}</li>`).join('')}</ul>
                </div>
              </div>` : ''}
            </div>`).join('')}
        </div>
      </div>` : ''}
    </div>` : '';

  return `
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: 'Controls Library', hash: 'controls' }, { label: ctrl.name }])}
    ${renderComplianceToggle(slug)}
    <div class="control-card" style="margin-bottom:1.5rem">
      <h2 style="font-size:1.25rem;margin-bottom:0.5rem">${escHtml(ctrl.name)}</h2>
      <div class="control-meta">
        <span class="badge badge-domain">${escHtml(domain?.name || domainId)}</span>
        <span class="badge badge-type">${escHtml(ctrl.type)}</span>
        <span class="badge badge-layer">${escHtml(ctrl.layer)}</span>
      </div>
      <p class="control-desc">${escHtml(ctrl.description)}</p>
      ${ctrl.keyActivities && ctrl.keyActivities.length > 0 ? `
        <div class="key-activities"><h5>Key Activities</h5>
          <ul>${ctrl.keyActivities.map(a => `<li>${escHtml(a)}</li>`).join('')}</ul>
        </div>` : ''}
      ${ctrl.maturity ? `
        <div class="maturity-grid">
          <div class="maturity-card maturity-basic"><h5>Basic</h5><p>${escHtml(ctrl.maturity.basic)}</p></div>
          <div class="maturity-card maturity-mature"><h5>Mature</h5><p>${escHtml(ctrl.maturity.mature)}</p></div>
          <div class="maturity-card maturity-advanced"><h5>Advanced</h5><p>${escHtml(ctrl.maturity.advanced)}</p></div>
        </div>` : ''}
      ${(ctrl.nist || ctrl.iso27001) ? `
        <div class="fw-mappings" style="margin-top:1rem">
          ${ctrl.nist && ctrl.nist.length > 0 ? `<div>NIST CSF: <span>${ctrl.nist.map(n => escHtml(n)).join(', ')}</span></div>` : ''}
          ${ctrl.iso27001 && ctrl.iso27001.length > 0 ? `<div>ISO 27001: <span>${ctrl.iso27001.map(n => escHtml(n)).join(', ')}</span></div>` : ''}
        </div>` : ''}
      ${ctrl.toolExamples && ctrl.toolExamples.length > 0 ? `
        <div style="margin-top:0.75rem;font-size:0.8125rem;color:var(--text-muted)">
          Tools: <span style="font-weight:600;color:var(--text-secondary)">${ctrl.toolExamples.map(t => escHtml(t)).join(', ')}</span>
        </div>` : ''}
    </div>
    <h3 style="font-size:1rem;margin-bottom:0.75rem">Mapped Clauses</h3>
    <ul class="clause-list" style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:0.5rem 1rem">
      ${ctrl.clauses.map(cid => {
        const cl = state.clauses[cid];
        if (!cl) return `<li><a class="clause-link" href="#${cid}"><span class="clause-id">${cid}</span></a></li>`;
        return `<li><a class="clause-link" href="#${cid}">
          <span class="clause-id">${cid}</span>
          <span class="clause-title">${escHtml(cl.title)}</span>
          <span class="clause-marker marker-${cl.marker}">${cl.marker === 'S' ? 'Shall' : 'Should'}</span>
        </a></li>`;
      }).join('')}
    </ul>
    ${auditPackageHTML}`;
}

// ---- View: Risk Management ----
function getRiskBand(score) {
  if (score >= 16) return { label: 'Critical', color: '#ef4444', bg: '#FEF2F2' };
  if (score >= 10) return { label: 'High', color: '#f97316', bg: '#FFF7ED' };
  if (score >= 5)  return { label: 'Medium', color: '#f59e0b', bg: '#FFFBEB' };
  return { label: 'Low', color: '#22c55e', bg: '#F0FDF4' };
}

function getMatrixCellColor(score) {
  const band = getRiskBand(score);
  return band.color;
}

function renderRiskManagement() {
  const { methodology, matrix, register, checklist, treatment } = state.riskMgmt;
  const tabs = ['Methodology', 'Risk Register', 'Checklist', 'Treatment Options'];

  // Count risks by band
  const riskCounts = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  for (const r of register.risks) {
    riskCounts[getRiskBand(r.inherentRisk).label]++;
  }
  const residualCounts = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  for (const r of register.risks) {
    residualCounts[getRiskBand(r.residualRisk).label]++;
  }

  return `
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: 'Risk Management' }])}
    <h2 style="font-size:1.25rem;margin-bottom:0.5rem">Technology Risk Management</h2>
    <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:0.5rem">
      Risk assessment framework and register for Malaysian financial institutions under BNM RMiT.
    </p>
    <div class="disclaimer">
      This section contains AI-generated indicative content aligned to BNM RMiT requirements. Risk scores, controls, and treatment plans are illustrative and must be adapted to each organization's specific risk appetite, threat landscape, and board-approved frameworks. Always consult qualified risk and regulatory professionals.
    </div>
    <div class="stats-banner">
      <div class="stat"><div class="stat-value">${register.risks.length}</div><div class="stat-label">Risks</div></div>
      <div class="stat"><div class="stat-value" style="color:#ef4444">${riskCounts.Critical}</div><div class="stat-label">Critical (Inherent)</div></div>
      <div class="stat"><div class="stat-value" style="color:#f97316">${riskCounts.High}</div><div class="stat-label">High (Inherent)</div></div>
      <div class="stat"><div class="stat-value" style="color:#f59e0b">${riskCounts.Medium}</div><div class="stat-label">Medium (Inherent)</div></div>
      <div class="stat"><div class="stat-value" style="color:#22c55e">${riskCounts.Low}</div><div class="stat-label">Low (Inherent)</div></div>
    </div>
    <div class="tabs">
      <div class="tab-list" role="tablist">
        ${tabs.map((t, i) => `<button class="tab-btn${i === 0 ? ' active' : ''}" data-rmtab="${t.toLowerCase().replace(/ /g, '-')}" role="tab">${t}</button>`).join('')}
      </div>
      <div class="tab-panel active" data-rmpanel="methodology">${renderMethodologyTab(methodology, matrix)}</div>
      <div class="tab-panel" data-rmpanel="risk-register">${renderRiskRegisterTab(register)}</div>
      <div class="tab-panel" data-rmpanel="checklist">${renderChecklistTab(checklist)}</div>
      <div class="tab-panel" data-rmpanel="treatment-options">${renderTreatmentOptionsTab(treatment)}</div>
    </div>`;
}

function renderMethodologyTab(methodology, matrix) {
  const { scales, riskRating } = methodology;

  // Build 5x5 matrix HTML
  const yLabels = matrix.axes.y.values;
  const xLabels = matrix.axes.x.values;
  const matrixData = matrix.matrix;

  let matrixHtml = `
    <h3 style="font-size:1rem;margin-bottom:0.75rem">Risk Assessment Methodology</h3>
    <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:0.5rem">${escHtml(methodology.description)}</p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem">
      <span class="badge badge-domain">Framework: ${escHtml(methodology.framework)}</span>
      <span class="badge badge-type">Approach: ${escHtml(methodology.approach)}</span>
      <span class="badge badge-layer">Review: ${escHtml(methodology.reviewCycle)}</span>
    </div>

    <h4 style="font-size:0.9375rem;margin-bottom:0.75rem">5 x 5 Risk Matrix</h4>
    <div style="overflow-x:auto;margin-bottom:1.5rem">
      <table class="risk-matrix-table">
        <thead>
          <tr>
            <th class="risk-matrix-corner">${escHtml(matrix.axes.y.label)} \\ ${escHtml(matrix.axes.x.label)}</th>
            ${xLabels.map(l => `<th class="risk-matrix-header">${escHtml(l)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${matrixData.map((row, yi) => `
            <tr>
              <td class="risk-matrix-row-label">${escHtml(yLabels[yi])}</td>
              ${row.map(score => {
                const band = getRiskBand(score);
                return `<td class="risk-matrix-cell" style="background:${band.bg};color:${band.color};font-weight:700;border:2px solid ${band.color}22">${score}<div class="risk-matrix-cell-label">${band.label}</div></td>`;
              }).join('')}
            </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:2rem">
      ${riskRating.bands.map(b => `
        <div style="display:flex;align-items:center;gap:0.375rem;font-size:0.8125rem">
          <span style="width:12px;height:12px;border-radius:3px;background:${b.color};display:inline-block"></span>
          <strong>${escHtml(b.label)}</strong> (${b.range[0]}-${b.range[1]}):
          <span style="color:var(--text-secondary)">${escHtml(b.action)}</span>
        </div>`).join('')}
    </div>`;

  // Likelihood scale
  matrixHtml += `
    <div class="accordion">
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion>
          <span class="accordion-trigger-left"><span>Likelihood Scale</span></span>
          <span class="chevron">\u25B6</span>
        </button>
        <div class="accordion-content">
          <div style="overflow-x:auto">
            <table class="data-table">
              <thead><tr><th>Score</th><th>Label</th><th>Description</th><th>Frequency</th></tr></thead>
              <tbody>
                ${scales.likelihood.levels.map(l => `
                  <tr>
                    <td style="font-weight:700;text-align:center">${l.score}</td>
                    <td style="font-weight:600">${escHtml(l.label)}</td>
                    <td>${escHtml(l.description)}</td>
                    <td style="white-space:nowrap;font-size:0.8125rem">${escHtml(l.frequency)}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger" data-accordion>
          <span class="accordion-trigger-left"><span>Impact Scale</span></span>
          <span class="chevron">\u25B6</span>
        </button>
        <div class="accordion-content">
          <div style="overflow-x:auto">
            <table class="data-table">
              <thead><tr><th>Score</th><th>Label</th><th>Description</th><th>Examples</th></tr></thead>
              <tbody>
                ${scales.impact.levels.map(l => `
                  <tr>
                    <td style="font-weight:700;text-align:center">${l.score}</td>
                    <td style="font-weight:600">${escHtml(l.label)}</td>
                    <td>${escHtml(l.description)}</td>
                    <td style="font-size:0.8125rem">${l.examples.map(e => escHtml(e)).join(', ')}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;

  return matrixHtml;
}

function renderRiskRegisterTab(register) {
  const risks = register.risks;
  const categories = [...new Set(risks.map(r => r.category))];

  return `
    <h3 style="font-size:1rem;margin-bottom:0.5rem">Technology Risk Register <span class="badge badge-ai" title="AI-generated indicative risk register">AI Generated</span></h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:1rem">${escHtml(register.description)}. ${risks.length} risks across ${categories.length} categories.</p>
    <div class="risk-register-filters" style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem">
      <button class="risk-filter-btn active" data-risk-filter="all">All (${risks.length})</button>
      ${categories.map(cat => {
        const count = risks.filter(r => r.category === cat).length;
        return `<button class="risk-filter-btn" data-risk-filter="${escHtml(cat)}">${escHtml(cat)} (${count})</button>`;
      }).join('')}
    </div>
    <div style="overflow-x:auto">
      <table class="data-table risk-register-table">
        <thead>
          <tr>
            <th data-sort="id" class="sortable" style="cursor:pointer">ID</th>
            <th data-sort="title" class="sortable" style="cursor:pointer">Risk</th>
            <th data-sort="category" class="sortable" style="cursor:pointer">Category</th>
            <th>RMiT</th>
            <th data-sort="inherentRisk" class="sortable" style="cursor:pointer">Inherent</th>
            <th data-sort="residualRisk" class="sortable" style="cursor:pointer">Residual</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          ${risks.map(r => {
            const iBand = getRiskBand(r.inherentRisk);
            const rBand = getRiskBand(r.residualRisk);
            return `
              <tr class="risk-row" data-category="${escHtml(r.category)}" data-risk-id="${escHtml(r.id)}">
                <td class="mono" style="white-space:nowrap;font-weight:600">${escHtml(r.id)}</td>
                <td>
                  <div style="font-weight:500">${escHtml(r.title)}</div>
                  <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.125rem">${escHtml(r.description)}</div>
                </td>
                <td><span class="badge badge-domain">${escHtml(r.category)}</span></td>
                <td style="font-size:0.75rem;white-space:nowrap">${escHtml(r.rmitSection)}</td>
                <td>
                  <span class="risk-score-badge" style="background:${iBand.bg};color:${iBand.color};border:1px solid ${iBand.color}33">
                    ${r.inherentRisk} ${iBand.label}
                  </span>
                </td>
                <td>
                  <span class="risk-score-badge" style="background:${rBand.bg};color:${rBand.color};border:1px solid ${rBand.color}33">
                    ${r.residualRisk} ${rBand.label}
                  </span>
                </td>
                <td><span class="badge badge-type" style="text-transform:capitalize">${escHtml(r.treatment)}</span></td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    <div id="risk-detail-panel" class="risk-detail-panel" style="display:none"></div>`;
}

function renderRiskDetailPanel(riskId) {
  const r = state.riskMgmt.register.risks.find(r => r.id === riskId);
  if (!r) return '';
  const iBand = getRiskBand(r.inherentRisk);
  const rBand = getRiskBand(r.residualRisk);

  return `
    <div class="risk-detail-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem">
        <h4 style="font-size:1rem">
          <span class="mono" style="color:var(--accent)">${escHtml(r.id)}</span>
          ${escHtml(r.title)}
        </h4>
        <button class="risk-detail-close" data-close-risk style="background:none;border:1px solid var(--border);border-radius:4px;padding:0.25rem 0.5rem;cursor:pointer;font-size:0.75rem;color:var(--text-muted)">Close</button>
      </div>
      <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:1rem">${escHtml(r.description)}</p>
      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-bottom:1rem">
        <span class="badge badge-domain">${escHtml(r.category)}</span>
        <span class="badge badge-layer">${escHtml(r.rmitSection)}</span>
        <span class="badge badge-owner">Owner: ${escHtml(r.owner)}</span>
        <span class="badge badge-frequency">Review: ${escHtml(r.reviewDate)}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
        <div style="background:${iBand.bg};border:1px solid ${iBand.color}33;border-radius:var(--radius);padding:1rem">
          <div style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:${iBand.color};margin-bottom:0.375rem">Inherent Risk</div>
          <div style="font-size:1.5rem;font-weight:700;color:${iBand.color}">${r.inherentRisk} <span style="font-size:0.875rem">${iBand.label}</span></div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem">Likelihood ${r.likelihood} x Impact ${r.impact}</div>
        </div>
        <div style="background:${rBand.bg};border:1px solid ${rBand.color}33;border-radius:var(--radius);padding:1rem">
          <div style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:${rBand.color};margin-bottom:0.375rem">Residual Risk</div>
          <div style="font-size:1.5rem;font-weight:700;color:${rBand.color}">${r.residualRisk} <span style="font-size:0.875rem">${rBand.label}</span></div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem">Likelihood ${r.residualLikelihood} x Impact ${r.residualImpact}</div>
        </div>
      </div>
      <div style="margin-bottom:1rem">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.375rem">Existing Controls</h5>
        <ul style="list-style:disc;padding-left:1.25rem">
          ${r.existingControls.map(c => `<li style="font-size:0.8125rem;color:var(--text-secondary);padding:0.125rem 0">${escHtml(c)}</li>`).join('')}
        </ul>
      </div>
      <div style="background:var(--bg);border-radius:var(--radius);padding:1rem">
        <h5 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.375rem">
          Treatment Plan
          <span class="badge badge-type" style="text-transform:capitalize;margin-left:0.5rem">${escHtml(r.treatment)}</span>
        </h5>
        <p style="font-size:0.8125rem;color:var(--text-secondary)">${escHtml(r.treatmentPlan)}</p>
      </div>
    </div>`;
}

function renderChecklistTab(checklist) {
  return `
    <h3 style="font-size:1rem;margin-bottom:0.5rem">${escHtml(checklist.title)} <span class="badge badge-ai" title="AI-generated indicative checklist">AI Generated</span></h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:1rem">${escHtml(checklist.description)}</p>
    <div class="checklist-progress">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.375rem">
        <span style="font-size:0.8125rem;font-weight:600;color:var(--text-secondary)">Progress</span>
        <span class="checklist-progress-text" style="font-size:0.8125rem;color:var(--text-muted)">0 / ${checklist.phases.reduce((s, p) => s + p.items.length, 0)} completed</span>
      </div>
      <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden">
        <div class="checklist-progress-bar"></div>
      </div>
    </div>
    <div class="accordion">
      ${checklist.phases.map(phase => `
        <div class="accordion-item open">
          <button class="accordion-trigger" data-accordion>
            <span class="accordion-trigger-left">
              <span>${escHtml(phase.phase)}</span>
              <span style="color:var(--text-muted);font-weight:400;font-size:0.8125rem">(${phase.items.length} items)</span>
            </span>
            <span class="chevron">\u25B6</span>
          </button>
          <div class="accordion-content">
            ${phase.items.map(item => `
              <label class="checklist-item" style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.625rem 0;border-bottom:1px solid var(--border);cursor:pointer">
                <input type="checkbox" class="checklist-checkbox" data-checklist-id="${escHtml(item.id)}">
                <div style="flex:1">
                  <div style="display:flex;align-items:baseline;gap:0.5rem;flex-wrap:wrap">
                    <span class="mono" style="font-size:0.75rem;color:var(--accent);font-weight:600">${escHtml(item.id)}</span>
                    <span style="font-size:0.875rem;color:var(--text-primary)">${escHtml(item.item)}</span>
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.125rem">RMiT Ref: ${escHtml(item.rmitRef)}</div>
                </div>
              </label>`).join('')}
          </div>
        </div>`).join('')}
    </div>`;
}

function renderTreatmentOptionsTab(treatment) {
  const strategyColors = {
    'Mitigate': { bg: '#EFF6FF', border: '#2563EB', text: '#1E40AF' },
    'Transfer': { bg: '#F5F3FF', border: '#7C3AED', text: '#5B21B6' },
    'Accept': { bg: '#FFFBEB', border: '#D97706', text: '#92400E' },
    'Avoid': { bg: '#FEF2F2', border: '#DC2626', text: '#991B1B' },
  };

  return `
    <h3 style="font-size:1rem;margin-bottom:0.5rem">${escHtml(treatment.title)}</h3>
    <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:1.5rem">${escHtml(treatment.description)}</p>
    <div class="treatment-grid">
      ${treatment.options.map(opt => {
        const colors = strategyColors[opt.strategy] || { bg: 'var(--bg)', border: 'var(--border)', text: 'var(--text-primary)' };
        return `
          <div class="treatment-card" style="background:${colors.bg};border:1px solid ${colors.border}33;border-left:4px solid ${colors.border}">
            <h4 style="color:${colors.text};font-size:1rem;margin-bottom:0.375rem">${escHtml(opt.strategy)}</h4>
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem">${escHtml(opt.description)}</p>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.75rem;padding:0.5rem;background:rgba(255,255,255,0.5);border-radius:4px">
              <strong>When to use:</strong> ${escHtml(opt.when)}
            </div>
            <div style="margin-bottom:0.75rem">
              <div style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.25rem">Examples</div>
              <ul style="list-style:disc;padding-left:1.25rem">
                ${opt.examples.map(e => `<li style="font-size:0.8125rem;color:var(--text-secondary);padding:0.125rem 0">${escHtml(e)}</li>`).join('')}
              </ul>
            </div>
            <div style="font-size:0.75rem;color:var(--text-muted);padding-top:0.5rem;border-top:1px solid ${colors.border}22">
              <strong>RMiT Alignment:</strong> ${escHtml(opt.rmitAlignment)}
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

// ---- View: Templates ----
function renderTemplates() {
  if (!state.templates) return renderLoading();
  const { categories, templates, totalCount, disclaimer } = state.templates;

  const mandatoryCount = templates.filter(t => t.mandatory).length;

  return `
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: 'Templates' }])}
    <h2 style="font-size:1.25rem;margin-bottom:0.5rem">Document Templates</h2>
    <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:1rem">
      ${totalCount} document templates across ${categories.length} categories for BNM RMiT compliance.
    </p>
    <div class="template-disclaimer">
      <strong>AI-Generated Templates</strong>
      These document templates were generated using AI and are provided as indicative starting points only. They must be reviewed, customized, and validated by qualified compliance, legal, and risk professionals before use. Templates do not constitute legal advice. Organizations must adapt all content to their specific context, policies, regulatory obligations, and risk appetite. No template should be used as-is without thorough review and approval through your organization's document governance process.
    </div>
    <div class="template-stats">
      <div class="template-stat">
        <div class="template-stat-value">${totalCount}</div>
        <div class="template-stat-label">Total</div>
      </div>
      <div class="template-stat">
        <div class="template-stat-value">${mandatoryCount}</div>
        <div class="template-stat-label">Mandatory</div>
      </div>
      ${categories.map(c => `
        <div class="template-stat">
          <div class="template-stat-value">${c.count}</div>
          <div class="template-stat-label">${escHtml(c.id)}</div>
        </div>`).join('')}
    </div>
    <div class="template-search">
      <input type="text" id="template-search-input" placeholder="Search templates by name, owner, or category..." autocomplete="off" aria-label="Search templates">
    </div>
    <div class="template-filters">
      <button class="template-filter-btn active" data-tmpl-filter="all">All (${totalCount})</button>
      ${categories.map(c => `<button class="template-filter-btn" data-tmpl-filter="${escHtml(c.id)}">${escHtml(c.id.charAt(0).toUpperCase() + c.id.slice(1))} (${c.count})</button>`).join('')}
    </div>
    <div class="template-results-count" id="template-results-count">Showing ${totalCount} templates</div>
    <div style="overflow-x:auto">
      <table class="template-table">
        <thead>
          <tr>
            <th>Template</th>
            <th>Category</th>
            <th>Owner</th>
            <th>Mandatory</th>
            <th>Review</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="template-table-body">
          ${templates.map(t => `
            <tr class="tmpl-row" data-tmpl-category="${escHtml(t.category)}" data-tmpl-search="${escHtml((t.name + ' ' + t.category + ' ' + t.owner).toLowerCase())}">
              <td class="tmpl-name">${escHtml(t.name)}</td>
              <td><span class="template-category-badge cat-${escHtml(t.category)}">${escHtml(t.category)}</span></td>
              <td class="tmpl-owner">${escHtml(t.owner)}</td>
              <td class="${t.mandatory ? 'tmpl-mandatory-yes' : 'tmpl-mandatory-no'}">${t.mandatory ? 'Yes' : 'No'}</td>
              <td class="tmpl-review">${escHtml(t.reviewFrequency)}</td>
              <td><a href="${escHtml(t.githubUrl)}" target="_blank" rel="noopener noreferrer" class="tmpl-view-link">View on GitHub</a></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function filterTemplates() {
  const searchInput = document.getElementById('template-search-input');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const activeFilter = document.querySelector('.template-filter-btn.active');
  const category = activeFilter ? activeFilter.dataset.tmplFilter : 'all';

  let visible = 0;
  document.querySelectorAll('.tmpl-row').forEach(row => {
    const matchesCategory = category === 'all' || row.dataset.tmplCategory === category;
    const matchesSearch = !query || row.dataset.tmplSearch.includes(query);
    const show = matchesCategory && matchesSearch;
    row.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  const countEl = document.getElementById('template-results-count');
  if (countEl) countEl.textContent = `Showing ${visible} template${visible !== 1 ? 's' : ''}`;
}

function updateNav() {
  document.querySelectorAll('.nav-link').forEach(el => {
    const view = el.dataset.view;
    el.classList.toggle('active', view === state.route.view ||
      (view === 'overview' && state.route.view === 'section') ||
      (view === 'overview' && state.route.view === 'clause') ||
      (view === 'controls-browser' && state.route.view === 'control-detail') ||
      (view === 'risk-management' && state.route.view === 'risk-management') ||
      (view === 'templates' && state.route.view === 'templates')
    );
  });
}

// ---- Main Render ----
async function render() {
  const app = document.getElementById('app');
  const route = state.route;
  updateNav();

  if (!state.sections || !state.clauses) {
    app.innerHTML = renderLoading();
    try {
      const [sections, clausesArr, controlDomains, controlLibrary, controlClauseMap, artifactInventory, artifactClauseMap] = await Promise.all([
        fetchJSON('clauses/sections.json'),
        fetchJSON('clauses/index.json'),
        fetchJSON('controls/domains.json'),
        fetchJSON('controls/library.json'),
        fetchJSON('controls/clause-map.json'),
        fetchJSON('artifacts/inventory.json'),
        fetchJSON('artifacts/clause-map.json'),
      ]);
      state.sections = sections;
      // Convert array to keyed object
      state.clauses = {};
      for (const cl of clausesArr) state.clauses[cl.id] = cl;
      if (controlDomains && controlLibrary && controlClauseMap) {
        state.controls = { domains: controlDomains, library: controlLibrary, clauseMap: controlClauseMap.clauseToControls };
      }
      if (artifactInventory && artifactClauseMap) {
        state.artifacts = { inventory: artifactInventory, clauseMap: artifactClauseMap.clauseToArtifacts };
      }
    } catch (err) {
      app.innerHTML = `<div class="error-state">Failed to load data: ${escHtml(err.message)}</div>`;
      return;
    }
  }

  let content = '';
  switch (route.view) {
    case 'overview': content = renderOverview(); break;
    case 'section': content = renderSection(route.id); break;
    case 'clause': content = renderClause(route.id); break;
    case 'search': content = renderSearch(route.query); break;
    case 'controls-browser':
    case 'control-detail':
      if (!state.controls) {
        app.innerHTML = `<div class="main">${renderLoading()}</div>`;
        try {
          const [domains, library, clauseMap] = await Promise.all([
            fetchJSON('controls/domains.json'),
            fetchJSON('controls/library.json'),
            fetchJSON('controls/clause-map.json'),
          ]);
          state.controls = { domains, library, clauseMap: clauseMap.clauseToControls };
        } catch (err) {
          app.innerHTML = `<div class="main"><div class="error-state">Failed to load controls: ${escHtml(err.message)}</div></div>`;
          return;
        }
      }
      if (route.view === 'control-detail') {
        if (!state.artifacts) {
          const [inventory, clauseMap] = await Promise.all([
            fetchJSON('artifacts/inventory.json'),
            fetchJSON('artifacts/clause-map.json'),
          ]);
          state.artifacts = { inventory, clauseMap: clauseMap.clauseToArtifacts };
        }
        if (!state.evidence) {
          state.evidence = await fetchJSON('evidence/index.json');
        }
      }
      content = route.view === 'controls-browser' ? renderControlsBrowser() : renderControlDetail(route.slug);
      break;
    case 'risk-management':
      if (!state.riskMgmt) {
        app.innerHTML = `<div class="main">${renderLoading()}</div>`;
        try {
          const [methodology, matrix, register, checklist, treatment] = await Promise.all([
            fetchJSON('risk-management/methodology.json'),
            fetchJSON('risk-management/risk-matrix.json'),
            fetchJSON('risk-management/risk-register.json'),
            fetchJSON('risk-management/checklist.json'),
            fetchJSON('risk-management/treatment-options.json'),
          ]);
          state.riskMgmt = { methodology, matrix, register, checklist, treatment };
        } catch (err) {
          app.innerHTML = `<div class="main"><div class="error-state">Failed to load risk management data: ${escHtml(err.message)}</div></div>`;
          return;
        }
      }
      content = renderRiskManagement();
      break;
    case 'templates':
      if (!state.templates) {
        app.innerHTML = `<div class="main">${renderLoading()}</div>`;
        try {
          state.templates = await fetchJSON('templates/index.json');
        } catch (err) {
          app.innerHTML = `<div class="main"><div class="error-state">Failed to load templates: ${escHtml(err.message)}</div></div>`;
          return;
        }
      }
      content = renderTemplates();
      break;
    default: content = renderOverview();
  }

  app.innerHTML = `<div class="main">${content}</div>`;

  const searchInput = document.getElementById('search-input');
  if (searchInput && route.view === 'search') searchInput.value = route.query || '';
}

// ---- Tab Lazy Loading ----
async function activateTab(tabName, clauseId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tabName));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === tabName));

  const panel = document.querySelector(`[data-panel="${tabName}"]`);
  if (!panel || !panel.querySelector('.loading')) return;

  try {
    switch (tabName) {
      case 'requirements':
        if (!state.requirements) state.requirements = await fetchJSON('requirements/index.json');
        panel.innerHTML = renderRequirementsTab(clauseId);
        break;
      case 'evidence':
        if (!state.evidence) state.evidence = await fetchJSON('evidence/index.json');
        panel.innerHTML = renderEvidenceTab(clauseId);
        break;
      case 'controls':
        if (!state.controls) {
          const [domains, library, clauseMap] = await Promise.all([
            fetchJSON('controls/domains.json'),
            fetchJSON('controls/library.json'),
            fetchJSON('controls/clause-map.json'),
          ]);
          state.controls = { domains, library, clauseMap: clauseMap.clauseToControls };
        }
        panel.innerHTML = renderControlsTab(clauseId);
        break;
      case 'artifacts':
        if (!state.artifacts) {
          const [inventory, clauseMap] = await Promise.all([
            fetchJSON('artifacts/inventory.json'),
            fetchJSON('artifacts/clause-map.json'),
          ]);
          state.artifacts = { inventory, clauseMap: clauseMap.clauseToArtifacts };
        }
        panel.innerHTML = renderArtifactsTab(clauseId);
        break;
    }
  } catch (err) {
    panel.innerHTML = `<div class="error-state">Failed to load: ${escHtml(err.message)}</div>`;
  }
}

// ---- Events ----
function setupEvents() {
  window.addEventListener('hashchange', () => { state.route = parseHash(); render(); });

  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-nav]');
    if (card) { e.preventDefault(); navigate(card.dataset.nav); return; }
    const acc = e.target.closest('[data-accordion]');
    if (acc) { const item = acc.closest('.accordion-item'); if (item) item.classList.toggle('open'); return; }
    const tab = e.target.closest('.tab-btn');
    if (tab) {
      if (tab.dataset.rmtab) {
        // Risk management tabs
        document.querySelectorAll('[data-rmtab]').forEach(b => b.classList.toggle('active', b.dataset.rmtab === tab.dataset.rmtab));
        document.querySelectorAll('[data-rmpanel]').forEach(p => p.classList.toggle('active', p.dataset.rmpanel === tab.dataset.rmtab));
        return;
      }
      activateTab(tab.dataset.tab, state.route.id);
      return;
    }

    // Risk register row click
    const riskRow = e.target.closest('.risk-row');
    if (riskRow) {
      const riskId = riskRow.dataset.riskId;
      const panel = document.getElementById('risk-detail-panel');
      if (panel) {
        if (panel.style.display === 'block' && panel.dataset.currentRisk === riskId) {
          panel.style.display = 'none';
          panel.dataset.currentRisk = '';
        } else {
          panel.innerHTML = renderRiskDetailPanel(riskId);
          panel.style.display = 'block';
          panel.dataset.currentRisk = riskId;
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
      return;
    }

    // Risk detail close button
    if (e.target.closest('[data-close-risk]')) {
      const panel = document.getElementById('risk-detail-panel');
      if (panel) { panel.style.display = 'none'; panel.dataset.currentRisk = ''; }
      return;
    }

    // Template filter buttons
    const tmplFilterBtn = e.target.closest('.template-filter-btn');
    if (tmplFilterBtn) {
      document.querySelectorAll('.template-filter-btn').forEach(b => b.classList.toggle('active', b === tmplFilterBtn));
      filterTemplates();
      return;
    }

    // Risk filter buttons
    const filterBtn = e.target.closest('.risk-filter-btn');
    if (filterBtn) {
      const filter = filterBtn.dataset.riskFilter;
      document.querySelectorAll('.risk-filter-btn').forEach(b => b.classList.toggle('active', b === filterBtn));
      document.querySelectorAll('.risk-row').forEach(row => {
        row.style.display = (filter === 'all' || row.dataset.category === filter) ? '' : 'none';
      });
      // Close detail panel when filtering
      const panel = document.getElementById('risk-detail-panel');
      if (panel) { panel.style.display = 'none'; panel.dataset.currentRisk = ''; }
      return;
    }
  });

  // Checklist checkbox change
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('checklist-checkbox')) {
      const total = document.querySelectorAll('.checklist-checkbox').length;
      const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
      const progressText = document.querySelector('.checklist-progress-text');
      const progressBar = document.querySelector('.checklist-progress-bar');
      if (progressText) progressText.textContent = `${checked} / ${total} completed`;
      if (progressBar) progressBar.style.width = `${total > 0 ? (checked / total) * 100 : 0}%`;
      // Toggle visual styling on the label
      const label = e.target.closest('.checklist-item');
      if (label) label.style.opacity = e.target.checked ? '0.6' : '1';
    }
  });

  let searchTimeout;
  document.addEventListener('input', (e) => {
    if (e.target.id === 'template-search-input') {
      filterTemplates();
      return;
    }
    if (e.target.id === 'search-input') {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        const val = e.target.value.trim();
        navigate(val ? `search/${encodeURIComponent(val)}` : '');
      }, 300);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.target.id === 'search-input' && e.key === 'Enter') {
      e.preventDefault();
      clearTimeout(searchTimeout);
      const val = e.target.value.trim();
      if (val) navigate(`search/${encodeURIComponent(val)}`);
    }
  });
}

function init() {
  state.route = parseHash();
  setupEvents();
  render();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

// === Export Functions ===

function exportToPDF() {
  window.print();
}

function exportToCSV() {
  const view = state.route.view;
  let data = [];
  let filename = `export-${view}-${new Date().toISOString().slice(0,10)}.csv`;

  if (view === 'controls') {
    const list = state.controls.library || state.controls;
    data = list.map(c => ({
      ID: c.id || '',
      Name: c.name,
      Domain: c.domain,
      Description: c.description.replace(/\n/g, ' ')
    }));
  } else if (view === 'risk-management') {
    const list = state.riskManagement?.register || [];
    data = list.map(r => ({
      ID: r.id,
      Risk: r.risk,
      Impact: r.impact,
      Likelihood: r.likelihood,
      Level: r.inherentRiskLevel
    }));
  } else {
    alert('CSV export only supported for Controls and Risk Register views.');
    return;
  }

  if (data.length === 0) {
    alert('No data found to export.');
    return;
  }

  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(h => `"${(row[h] || '').toString().replace(/"/g, '""')}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// === Compliance Gap Tracker Logic ===

function getComplianceStatus(slug) {
  const data = JSON.parse(localStorage.getItem('rmit_compliance_status') || '{}');
  return data[slug] || 'pending';
}

function setComplianceStatus(slug, status) {
  const data = JSON.parse(localStorage.getItem('rmit_compliance_status') || '{}');
  data[slug] = status;
  localStorage.setItem('rmit_compliance_status', JSON.stringify(data));
  router(); // Use the existing router() or render() function to refresh
}

function renderComplianceToggle(slug) {
  const status = getComplianceStatus(slug);
  const options = [
    { id: 'pending', label: 'Pending', color: '#64748b' },
    { id: 'compliant', label: 'Compliant', color: '#22c55e' },
    { id: 'gap', label: 'Gap (Non-Compliant)', color: '#ef4444' },
    { id: 'na', label: 'Not Applicable', color: '#94a3b8' }
  ];

  const current = options.find(o => o.id === status);

  return `
    <div class="compliance-tracker-box" style="background:var(--bg-card); border:1px solid var(--border); border-radius:12px; padding:1.25rem; margin-bottom:1.5rem; display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap">
      <div>
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--text-dim); margin-bottom:0.35rem">Compliance Status</div>
        <div style="font-size:1.1rem; font-weight:700; color:${current.color}">
          ${current.label}
        </div>
      </div>
      <div style="margin-left:auto; display:flex; gap:0.5rem; flex-wrap:wrap">
        ${options.map(o => `
          <button 
            onclick="setComplianceStatus('${slug}', '${o.id}')"
            style="cursor:pointer; border:1px solid ${status === o.id ? o.color : 'var(--border)'}; background:${status === o.id ? o.color + '15' : 'var(--bg-card)'}; color:${status === o.id ? o.color : 'var(--text-secondary)'}; padding:0.4rem 0.75rem; border-radius:6px; font-size:0.75rem; font-weight:600; transition:all 0.2s"
          >${o.label}</button>
        `).join('')}
      </div>
    </div>
  `;
}
