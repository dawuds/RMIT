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

function renderError(path, error) {
  return '<div class="error-state">' +
    '<h2>Failed to load data</h2>' +
    '<p class="error-message">Could not fetch ' + escHtml(path) + '</p>' +
    (error ? '<p class="error-detail">' + escHtml(String(error)) + '</p>' : '') +
    '<button onclick="location.reload()">Retry</button>' +
    '</div>';
}

async function fetchJSON(path) {
  if (cache.has(path)) return cache.get(path);
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    cache.set(path, data);
    return data;
  } catch (e) {
    console.error(`Failed to load ${path}:`, e);
    const app = document.getElementById('app');
    if (app) app.innerHTML = renderError(path, e);
    return null;
  }
}

// ---- Router ----
function parseHash() {
  const hash = location.hash.slice(1);
  if (!hash) return { view: 'overview' };
  if (hash.startsWith('search/')) return { view: 'search', query: decodeURIComponent(hash.slice(7)) };
  if (hash === 'framework') return { view: 'framework' };
  if (hash.startsWith('framework/')) return { view: 'framework-detail', id: hash.slice(10) };
  if (hash === 'controls') return { view: 'controls' };
  if (hash.startsWith('control/')) return { view: 'control-detail', slug: hash.slice(8) };
  if (hash === 'risk-management') return { view: 'risk-management' };
  if (hash === 'risk' ) return { view: 'risk-management' };
  if (hash.startsWith('risk/')) return { view: 'risk-management', sub: hash.slice(5) };
  if (hash === 'reference') return { view: 'reference' };
  if (hash.startsWith('reference/')) return { view: 'reference', sub: hash.slice(10) };
  if (hash === 'templates') return { view: 'reference' };
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

// Transform raw library.json into { domains, library, clauseMap } where
// library is domain-keyed: { "governance-and-oversight": [ctrl1, ctrl2], ... }
function buildControlsState(rawDomains, rawLibrary, rawClauseMap) {
  // rawDomains = domains.json (already domain-keyed dict)
  // rawLibrary = library.json with { _meta, domains: [...], controls: [...] }
  // rawClauseMap = clause-map.json

  // Build domain-keyed library from flat controls array
  const library = {};
  const controls = rawLibrary.controls || rawLibrary;
  if (Array.isArray(controls)) {
    for (const ctrl of controls) {
      const domainId = ctrl.domain || ctrl.domainId || 'uncategorised';
      if (!library[domainId]) library[domainId] = [];
      library[domainId].push(ctrl);
    }
  } else if (typeof controls === 'object') {
    // Already domain-keyed — use as-is
    Object.assign(library, controls);
  }

  return {
    domains: rawDomains,
    library,
    clauseMap: rawClauseMap ? (rawClauseMap.clauseToControls || rawClauseMap) : {},
  };
}

// ---- View: Overview ----
function renderOverview() {
  const sections = state.sections;
  const totalClauses = Object.keys(state.clauses).length;
  const totalSubsections = sections.reduce((s, sec) => s + sec.subsections.length, 0);
  const controlCount = state.controls ? Object.values(state.controls.library).reduce((s, arr) => s + arr.length, 0) : '—';
  const artifactCount = state.artifacts ? Object.values(state.artifacts.inventory).reduce((s, arr) => s + arr.length, 0) : '—';
  const domainCount = state.controls ? Object.keys(state.controls.domains).length : '—';

  return `
    <div class="disclaimer">
      This database is for educational and indicative purposes only. It does not constitute legal advice. The content represents a structured interpretation of BNM's Risk Management in Technology Policy Document (November 2025). Always consult the source PDF and qualified legal or regulatory counsel for compliance decisions.
    </div>
    <div class="stats-banner">
      <div class="stat"><div class="stat-value">${sections.length}</div><div class="stat-label">Sections</div></div>
      <div class="stat"><div class="stat-value">${totalSubsections}</div><div class="stat-label">Subsections</div></div>
      <div class="stat"><div class="stat-value">${totalClauses}</div><div class="stat-label">Clauses</div></div>
      <div class="stat"><div class="stat-value">${controlCount}</div><div class="stat-label">Controls</div></div>
      <div class="stat"><div class="stat-value">${artifactCount}</div><div class="stat-label">Artifacts</div></div>
    </div>
    <div class="control-grid">
      ${sections.slice(0, 6).map(sec => {
        const clauseCount = sec.subsections.reduce((s, ss) => s + ss.clauses.length, 0);
        return `
          <div class="control-card sec-${sec.id}" onclick="navigate('framework/${sec.id}')">
            <div class="control-card-header">
              <span class="control-id">\u00A7${sec.id}</span>
            </div>
            <h3 class="control-card-title">${escHtml(sec.name)}</h3>
            <div class="control-card-meta">
              <span class="badge badge-artifacts">${sec.subsections.length} subsections</span>
              <span class="badge badge-evidence">${clauseCount} clauses</span>
            </div>
          </div>`;
      }).join('')}
    </div>
    <div style="margin-top:1.5rem;display:flex;gap:1.5rem;flex-wrap:wrap">
      <a href="#framework" style="font-size:0.875rem">Browse all ${sections.length} RMiT sections \u2192</a>
      <a href="#controls" style="font-size:0.875rem">Browse Controls Library (${controlCount} controls across ${domainCount} domains) \u2192</a>
    </div>`;
}

// ---- View: Framework (section browsing) ----
function renderFramework() {
  const sections = state.sections;

  return `
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: 'Framework' }])}
    <h2 style="font-size:1.25rem;margin-bottom:0.5rem">RMiT Framework</h2>
    <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:1.5rem">
      Browse all ${sections.length} sections of BNM's Risk Management in Technology policy document.
    </p>
    <div class="control-grid">
      ${sections.map(sec => {
        const clauseCount = sec.subsections.reduce((s, ss) => s + ss.clauses.length, 0);
        return `
          <div class="control-card sec-${sec.id}" onclick="navigate('framework/${sec.id}')">
            <div class="control-card-header">
              <span class="control-id">\u00A7${sec.id}</span>
            </div>
            <h3 class="control-card-title">${escHtml(sec.name)}</h3>
            <div class="control-card-meta">
              <span class="badge badge-artifacts">${sec.subsections.length} subsections</span>
              <span class="badge badge-evidence">${clauseCount} clauses</span>
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

// ---- View: Section Drilldown ----
function renderSection(secId) {
  const sec = state.sections.find(s => s.id === secId);
  if (!sec) return '<div class="error-state">Section not found.</div>';

  return `
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: 'Framework', hash: 'framework' }, { label: `\u00A7${sec.id} ${sec.name}` }])}
    <div class="sec-header">
      <div class="sec-header-title">
        <span class="badge sec-badge-${sec.id}" style="font-family:var(--mono);font-weight:700;font-size:1.25rem;padding:0.25rem 0.75rem;color:white">\u00A7${sec.id}</span>
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
      { label: 'Framework', hash: 'framework' },
      { label: `\u00A7${sec.id} ${sec.name}`, hash: 'framework/' + sec.id },
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
        ${(item.whatGoodLooksLike && item.whatGoodLooksLike.length > 0) || (item.commonGaps && item.commonGaps.length > 0) ? `
          <div class="evidence-detail-grid">
            ${item.whatGoodLooksLike && item.whatGoodLooksLike.length > 0 ? `
            <div class="evidence-block evidence-good">
              <div class="evidence-block-label">What Good Looks Like</div>
              <ul>${item.whatGoodLooksLike.map(w => `<li>${escHtml(w)}</li>`).join('')}</ul>
            </div>` : ''}
            ${item.commonGaps && item.commonGaps.length > 0 ? `
            <div class="evidence-block evidence-gap">
              <div class="evidence-block-label">Common Gaps</div>
              <ul>${item.commonGaps.map(g => `<li>${escHtml(g)}</li>`).join('')}</ul>
            </div>` : ''}
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

  // (Audit package HTML built below after requirements)

  // ---- Build requirements from clause data ----
  const reqLegal = [];
  const reqTechnical = [];
  const reqGovernance = [];
  if (state.requirements) {
    clauses.forEach(cid => {
      const req = state.requirements[cid];
      if (!req) return;
      if (req.business && req.business.requirements) req.business.requirements.forEach(r => reqLegal.push(r.requirement));
      if (req.technology && req.technology.requirements) req.technology.requirements.forEach(r => reqTechnical.push(r.requirement));
      if (req.governance && req.governance.requirements) req.governance.requirements.forEach(r => reqGovernance.push(r.requirement));
    });
  }
  const hasRequirements = reqLegal.length || reqTechnical.length || reqGovernance.length;

  // ---- Build audit package HTML (Evidence FIRST, then Artifacts) ----
  const auditPackageHTML = (linkedArtifacts.length || linkedEvidence.length) ? `
    <section class="audit-package">
      <h2 class="audit-package-title">
        Audit Package
        <span class="audit-package-counts">
          <span class="badge badge-evidence">${linkedEvidence.length} evidence item${linkedEvidence.length !== 1 ? 's' : ''}</span>
          <span class="badge badge-artifacts">${linkedArtifacts.length} artifact${linkedArtifacts.length !== 1 ? 's' : ''}</span>
        </span>
      </h2>
      ${linkedEvidence.length ? `
      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-trigger" data-accordion>
            <span>Evidence Checklist (${linkedEvidence.length})</span>
            <span class="accordion-icon">&#9660;</span>
          </button>
          <div class="accordion-content">
            ${linkedEvidence.map(item => `
              <div class="evidence-item">
                <div class="evidence-item-header">
                  <span class="evidence-id">${escHtml(item.id)}</span>
                  <span class="evidence-item-name">${escHtml(item.name)}</span>
                </div>
                ${item.description ? `<p class="evidence-item-desc">${escHtml(item.description)}</p>` : ''}
                ${(item.whatGoodLooksLike && item.whatGoodLooksLike.length) || (item.commonGaps && item.commonGaps.length) ? `
                <div class="evidence-detail-grid">
                  ${item.whatGoodLooksLike && item.whatGoodLooksLike.length ? `
                  <div class="evidence-block evidence-good">
                    <div class="evidence-block-label">What Good Looks Like</div>
                    <ul>${item.whatGoodLooksLike.map(w => `<li>${escHtml(w)}</li>`).join('')}</ul>
                  </div>` : ''}
                  ${item.commonGaps && item.commonGaps.length ? `
                  <div class="evidence-block evidence-gap">
                    <div class="evidence-block-label">Common Gaps</div>
                    <ul>${item.commonGaps.map(g => `<li>${escHtml(g)}</li>`).join('')}</ul>
                  </div>` : ''}
                </div>` : ''}
                <div class="evidence-item-meta">
                  ${item.format ? `<span class="meta-item"><strong>Format:</strong> ${escHtml(item.format)}</span>` : ''}
                  ${item.retentionPeriod ? `<span class="meta-item"><strong>Retention:</strong> ${escHtml(item.retentionPeriod)}</span>` : ''}
                  ${item.suggestedSources && item.suggestedSources.length ? `<span class="meta-item"><strong>Source:</strong> ${item.suggestedSources.map(s => escHtml(s)).join(', ')}</span>` : ''}
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>` : ''}
      ${linkedArtifacts.length ? `
      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-trigger" data-accordion>
            <span>Required Artifacts (${linkedArtifacts.length})</span>
            <span class="accordion-icon">&#9660;</span>
          </button>
          <div class="accordion-content">
            ${linkedArtifacts.map(a => `
              <div class="artifact-card">
                <div class="artifact-card-header">
                  <span class="artifact-card-name">${escHtml(a.name)}</span>
                  <div class="artifact-card-badges">
                    ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : '<span class="badge badge-optional">Optional</span>'}
                    ${a.category ? `<span class="badge badge-category">${escHtml(a.category)}</span>` : ''}
                  </div>
                </div>
                ${a.description ? `<p class="artifact-card-desc">${escHtml(a.description)}</p>` : ''}
                <div class="artifact-card-meta">
                  ${a.owner ? `<span class="meta-item"><strong>Owner:</strong> ${escHtml(a.owner)}</span>` : ''}
                  ${a.reviewFrequency ? `<span class="meta-item"><strong>Review:</strong> ${escHtml(a.reviewFrequency)}</span>` : ''}
                </div>
                ${a.keyContents && a.keyContents.length ? `
                  <div class="artifact-card-contents">
                    <strong>Key Contents:</strong>
                    <ul>${a.keyContents.map(k => `<li>${escHtml(k)}</li>`).join('')}</ul>
                  </div>` : ''}
              </div>`).join('')}
          </div>
        </div>
      </div>` : ''}
    </section>` : '';

  return `
    <article class="control-detail">
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: 'Controls', hash: 'controls' }, { label: ctrl.name }])}
    ${renderComplianceToggle(slug)}

    <!-- Header -->
    <header class="control-detail-header">
      <div class="control-detail-id-row">
        <span class="badge badge-domain">${escHtml(domain?.name || domainId)}</span>
        <span class="badge badge-type-${ctrl.type === 'Preventive' ? 'preventive' : ctrl.type === 'Detective' ? 'detective' : 'corrective'}">${escHtml(ctrl.type)}</span>
        ${ctrl.layer ? `<span class="badge badge-category">${escHtml(ctrl.layer)}</span>` : ''}
      </div>
      <h1 class="control-detail-title">${escHtml(ctrl.name)}</h1>
      <p class="control-detail-desc">${escHtml(ctrl.description)}</p>
    </header>

    <!-- Section 1: Requirements -->
    ${hasRequirements ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Requirements</h2>
      <div class="requirements-grid">
        ${reqLegal.length ? `
        <div class="requirement-block requirement-legal">
          <div class="requirement-block-label">Legal / Regulatory</div>
          <ul>${reqLegal.map(r => `<li>${escHtml(r)}</li>`).join('')}</ul>
        </div>` : ''}
        ${reqTechnical.length ? `
        <div class="requirement-block requirement-technical">
          <div class="requirement-block-label">Technical</div>
          <ul>${reqTechnical.map(r => `<li>${escHtml(r)}</li>`).join('')}</ul>
        </div>` : ''}
        ${reqGovernance.length ? `
        <div class="requirement-block requirement-governance">
          <div class="requirement-block-label">Governance</div>
          <ul>${reqGovernance.map(r => `<li>${escHtml(r)}</li>`).join('')}</ul>
        </div>` : ''}
      </div>
    </section>` : ''}

    <!-- Section 2: Key Activities -->
    ${ctrl.keyActivities && ctrl.keyActivities.length > 0 ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Key Activities</h2>
      <ul class="activity-list">${ctrl.keyActivities.map(a => `<li>${escHtml(a)}</li>`).join('')}</ul>
    </section>` : ''}

    <!-- Section 3: Maturity Levels -->
    ${ctrl.maturity ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Maturity Levels</h2>
      <div class="maturity-grid">
        <div class="maturity-card maturity-basic"><div class="maturity-label">Basic</div><p>${escHtml(ctrl.maturity.basic)}</p></div>
        <div class="maturity-card maturity-mature"><div class="maturity-label">Mature</div><p>${escHtml(ctrl.maturity.mature)}</p></div>
        <div class="maturity-card maturity-advanced"><div class="maturity-label">Advanced</div><p>${escHtml(ctrl.maturity.advanced)}</p></div>
      </div>
    </section>` : ''}

    <!-- Section 4: Audit Package -->
    ${auditPackageHTML}

    <!-- Section 5: Framework Mappings -->
    ${(ctrl.nist || ctrl.iso27001) ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Framework Mappings</h2>
      <div class="fw-mappings">
        ${ctrl.nist && ctrl.nist.length > 0 ? `<div class="fw-mapping-row"><span class="fw-label">NIST CSF 2.0</span><span class="fw-codes">${ctrl.nist.map(n => escHtml(n)).join(', ')}</span></div>` : ''}
        ${ctrl.iso27001 && ctrl.iso27001.length > 0 ? `<div class="fw-mapping-row"><span class="fw-label">ISO 27001</span><span class="fw-codes">${ctrl.iso27001.map(n => escHtml(n)).join(', ')}</span></div>` : ''}
      </div>
    </section>` : ''}

    <!-- Section 6: Source Provisions -->
    ${ctrl.clauses && ctrl.clauses.length > 0 ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Source Provisions</h2>
      <div class="provision-links">
        ${ctrl.clauses.map(cid => {
          const cl = state.clauses[cid];
          return `<a href="#${cid}" class="provision-link">
            <span class="provision-id">${escHtml(cid)}</span>
            <span class="provision-title">${cl ? escHtml(cl.title) : ''}</span>
          </a>`;
        }).join('')}
      </div>
    </section>` : ''}

    ${ctrl.toolExamples && ctrl.toolExamples.length > 0 ? `
      <div style="margin-top:0.75rem;font-size:0.8125rem;color:var(--text-muted)">
        Tools: <span style="font-weight:600;color:var(--text-secondary)">${ctrl.toolExamples.map(t => escHtml(t)).join(', ')}</span>
      </div>` : ''}
    </article>`;
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

// ---- View: Reference (wraps Templates + cross-references) ----
function renderReference() {
  return `
    ${renderBreadcrumbs([{ label: 'Home', hash: '' }, { label: 'Reference' }])}
    <h2 style="font-size:1.25rem;margin-bottom:0.5rem">Reference</h2>
    <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:1rem">
      Document templates, cross-framework mappings, and supplementary references for BNM RMiT compliance.
    </p>
    <div class="sub-tabs">
      <button class="sub-tab active" data-sub="templates">Templates${state.templates ? ' (' + state.templates.totalCount + ')' : ''}</button>
      <button class="sub-tab" data-sub="cross-references">Cross-References</button>
      <button class="sub-tab" data-sub="compliance-chain">Compliance Chain</button>
    </div>
    <div class="sub-panel active" data-subpanel="templates">${renderTemplatesPanel()}</div>
    <div class="sub-panel" data-subpanel="cross-references">${renderCrossReferencesPanel()}</div>
    <div class="sub-panel" data-subpanel="compliance-chain">${renderComplianceChain()}</div>`;
}

function renderTemplatesPanel() {
  if (!state.templates) return '<p class="empty-state">No templates data available.</p>';
  const { categories, templates, totalCount } = state.templates;
  const mandatoryCount = templates.filter(t => t.mandatory).length;

  return `
    <div class="template-disclaimer">
      <strong>AI-Generated Templates</strong>
      These document templates were generated using AI and are provided as indicative starting points only. They must be reviewed, customized, and validated by qualified compliance, legal, and risk professionals before use.
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

function renderCrossReferencesPanel() {
  if (!state.controls) return '<p class="empty-state">No cross-reference data available.</p>';
  const mappings = [];
  for (const [domainId, controls] of Object.entries(state.controls.library)) {
    for (const ctrl of controls) {
      if (ctrl.nist && ctrl.nist.length) {
        ctrl.nist.forEach(n => mappings.push({ source: ctrl.name, target: n, framework: 'NIST CSF 2.0' }));
      }
      if (ctrl.iso27001 && ctrl.iso27001.length) {
        ctrl.iso27001.forEach(n => mappings.push({ source: ctrl.name, target: n, framework: 'ISO 27001' }));
      }
    }
  }

  if (!mappings.length) return '<p class="empty-state">No cross-framework mappings available.</p>';

  return `
    <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:1rem">${mappings.length} cross-framework mappings found.</p>
    ${mappings.slice(0, 50).map(m => `
      <div class="xref-card">
        <span class="xref-source">${escHtml(m.source)}</span>
        <span class="xref-target">${escHtml(m.framework)}: ${escHtml(m.target)}</span>
      </div>`).join('')}
    ${mappings.length > 50 ? `<p style="font-size:0.8125rem;color:var(--text-muted);margin-top:0.75rem">${mappings.length - 50} more mappings available.</p>` : ''}`;
}

function renderComplianceChain() {
  if (!state.controls) return '<p class="empty-state">Controls data not loaded. Browse a clause first to load controls.</p>';
  const allControls = [];
  for (const [domainId, controls] of Object.entries(state.controls.library)) {
    for (const ctrl of controls) {
      allControls.push(ctrl);
    }
  }
  if (!allControls.length) return '<p class="empty-state">No controls available for compliance chain visualization.</p>';

  const options = allControls.map(c =>
    `<option value="${escHtml(c.slug)}">${escHtml(c.name)}</option>`
  ).join('');

  return `
    <div class="compliance-chain">
      <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:0.75rem">
        Select a control to see how it maps across compliance frameworks: RMiT, NIST CSF 2.0, and ISO 27001.
      </p>
      <div class="compliance-chain-select">
        <select id="chain-control-select" onchange="updateComplianceChain()">
          <option value="">-- Select a control --</option>
          ${options}
        </select>
      </div>
      <div id="chain-visualization"></div>
      <div class="chain-legend">
        <div class="chain-legend-item"><div class="chain-legend-swatch" style="background:#1E40AF"></div>BNM RMiT</div>
        <div class="chain-legend-item"><div class="chain-legend-swatch" style="background:#0E7490"></div>NIST CSF 2.0</div>
        <div class="chain-legend-item"><div class="chain-legend-swatch" style="background:#7C3AED"></div>ISO 27001</div>
      </div>
    </div>`;
}

function updateComplianceChain() {
  const select = document.getElementById('chain-control-select');
  const viz = document.getElementById('chain-visualization');
  if (!select || !viz) return;
  const slug = select.value;
  if (!slug) { viz.innerHTML = '<p class="chain-empty">Select a control above to view its compliance chain.</p>'; return; }

  let ctrl = null;
  for (const controls of Object.values(state.controls.library)) {
    ctrl = controls.find(c => c.slug === slug);
    if (ctrl) break;
  }
  if (!ctrl) { viz.innerHTML = '<p class="chain-empty">Control not found.</p>'; return; }

  const nodes = [];

  // Source node: RMiT control
  nodes.push({
    fw: 'rmit', fwLabel: 'BNM RMiT', id: ctrl.name,
    title: ctrl.description ? ctrl.description.slice(0, 120) + (ctrl.description.length > 120 ? '...' : '') : '',
    detail: 'Clauses: ' + (ctrl.clauses || []).join(', ') + (ctrl.type ? ' | Type: ' + ctrl.type : '') + (ctrl.layer ? ' | Layer: ' + ctrl.layer : ''),
  });

  // NIST CSF mappings
  if (ctrl.nist && ctrl.nist.length) {
    for (const nistId of ctrl.nist) {
      nodes.push({
        fw: 'nist', fwLabel: 'NIST CSF 2.0', id: nistId,
        title: getNistTitle(nistId),
        detail: 'NIST Cybersecurity Framework 2.0 subcategory',
      });
    }
  }

  // ISO 27001 mappings
  if (ctrl.iso27001 && ctrl.iso27001.length) {
    for (const isoId of ctrl.iso27001) {
      nodes.push({
        fw: 'iso', fwLabel: 'ISO 27001', id: isoId,
        title: getIsoTitle(isoId),
        detail: 'ISO/IEC 27001:2022 Annex A control',
      });
    }
  }

  if (nodes.length <= 1) {
    viz.innerHTML = '<p class="chain-empty">This control has no cross-framework mappings.</p>';
    return;
  }

  viz.innerHTML = '<div class="chain-flow">' + nodes.map((n, i) =>
    '<div class="chain-step">' +
      (i > 0 ? '<div class="chain-arrow"></div>' : '') +
      '<div class="chain-node fw-' + n.fw + '" onclick="this.classList.toggle(\'expanded\')">' +
        '<div class="chain-node-framework">' + escHtml(n.fwLabel) + '</div>' +
        '<div class="chain-node-id">' + escHtml(n.id) + '</div>' +
        '<div class="chain-node-title">' + escHtml(n.title) + '</div>' +
        '<div class="chain-node-detail">' + escHtml(n.detail) + '</div>' +
      '</div>' +
    '</div>'
  ).join('') + '</div>';
}

function getNistTitle(id) {
  const nistTitles = {
    'GV.OV-01': 'Cybersecurity risk management strategy objectives are established',
    'GV.OV-02': 'Cybersecurity risk management activities and outcomes are reviewed',
    'GV.OC-01': 'Organizational context for risk management is understood',
    'GV.OC-02': 'Internal and external stakeholders are understood',
    'GV.OC-03': 'Legal, regulatory, and contractual requirements are understood',
    'GV.OC-04': 'Critical objectives, capabilities, and services are understood',
    'GV.RM-01': 'Risk management objectives are established and expressed',
    'GV.RM-02': 'Risk appetite and tolerance statements are established',
    'GV.RR-01': 'Organizational leadership is responsible and accountable',
    'GV.SC-01': 'Supply chain risk management program is established',
    'ID.AM-01': 'Hardware asset inventories are maintained',
    'ID.AM-02': 'Software and services inventories are maintained',
    'ID.AM-03': 'Representations of authorized network communication are maintained',
    'ID.RA-01': 'Vulnerabilities in assets are identified',
    'ID.RA-02': 'Cyber threat intelligence is received',
    'ID.RA-03': 'Internal and external threats are identified',
    'ID.RA-05': 'Risks are used to determine likelihood and impact',
    'PR.AA-01': 'Identities and credentials are managed',
    'PR.AA-02': 'Identities are proofed and bound to credentials',
    'PR.AA-03': 'Users, services, and hardware are authenticated',
    'PR.AA-05': 'Access permissions and authorizations are defined',
    'PR.DS-01': 'Data-at-rest is protected',
    'PR.DS-02': 'Data-in-transit is protected',
    'PR.PS-01': 'Configuration baselines are established',
    'PR.PS-02': 'Software is maintained and replaced',
    'PR.IR-01': 'Incident response plans are established',
    'PR.IR-02': 'Incident response is performed',
    'DE.CM-01': 'Networks are monitored for anomalies',
    'DE.CM-02': 'Physical environment is monitored',
    'DE.AE-02': 'Adverse events are analyzed',
    'RS.MA-01': 'Incident response plan is executed',
    'RS.CO-02': 'Stakeholders are notified of incidents',
    'RS.CO-03': 'Information is shared with designated parties',
    'RC.RP-01': 'Recovery plan is executed',
  };
  return nistTitles[id] || '';
}

function getIsoTitle(id) {
  const isoTitles = {
    'A.5.1': 'Policies for information security',
    'A.5.2': 'Information security roles and responsibilities',
    'A.5.3': 'Segregation of duties',
    'A.5.4': 'Management responsibilities',
    'A.5.9': 'Inventory of information and other associated assets',
    'A.5.10': 'Acceptable use of information and assets',
    'A.5.12': 'Classification of information',
    'A.5.15': 'Access control',
    'A.5.17': 'Authentication information',
    'A.5.19': 'Information security in supplier relationships',
    'A.5.22': 'Monitoring, review and change management of supplier services',
    'A.5.23': 'Information security for use of cloud services',
    'A.5.24': 'Incident management planning and preparation',
    'A.5.25': 'Assessment and decision on information security events',
    'A.5.26': 'Response to information security incidents',
    'A.5.29': 'Information security during disruption',
    'A.5.30': 'ICT readiness for business continuity',
    'A.5.36': 'Compliance with policies, rules and standards',
    'A.6.6': 'Confidentiality or non-disclosure agreements',
    'A.7.1': 'Physical security perimeters',
    'A.7.4': 'Physical security monitoring',
    'A.8.1': 'User endpoint devices',
    'A.8.3': 'Information access restriction',
    'A.8.7': 'Protection against malware',
    'A.8.8': 'Management of technical vulnerabilities',
    'A.8.9': 'Configuration management',
    'A.8.12': 'Data leakage prevention',
    'A.8.13': 'Information backup',
    'A.8.14': 'Redundancy of information processing facilities',
    'A.8.15': 'Logging',
    'A.8.16': 'Monitoring activities',
    'A.8.20': 'Networks security',
    'A.8.21': 'Security of network services',
    'A.8.24': 'Use of cryptography',
    'A.8.25': 'Secure development life cycle',
    'A.8.26': 'Application security requirements',
    '5.1': 'Leadership and commitment',
    '6.1.2': 'Information security risk assessment',
    '6.1.3': 'Information security risk treatment',
    '9.2': 'Internal audit',
    '9.3': 'Management review',
  };
  return isoTitles[id] || '';
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
      (view === 'framework' && state.route.view === 'framework') ||
      (view === 'framework' && state.route.view === 'framework-detail') ||
      (view === 'framework' && state.route.view === 'section') ||
      (view === 'framework' && state.route.view === 'clause') ||
      (view === 'controls' && state.route.view === 'control-detail') ||
      (view === 'risk-management' && state.route.view === 'risk-management') ||
      (view === 'reference' && state.route.view === 'reference')
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
        state.controls = buildControlsState(controlDomains, controlLibrary, controlClauseMap);
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
    case 'framework': content = renderFramework(); break;
    case 'framework-detail': content = renderSection(route.id); break;
    case 'section': content = renderSection(route.id); break;
    case 'clause': content = renderClause(route.id); break;
    case 'search': content = renderSearch(route.query); break;
    case 'controls':
    case 'control-detail':
      if (!state.controls) {
        app.innerHTML = `<div class="main">${renderLoading()}</div>`;
        try {
          const [domains, library, clauseMap] = await Promise.all([
            fetchJSON('controls/domains.json'),
            fetchJSON('controls/library.json'),
            fetchJSON('controls/clause-map.json'),
          ]);
          state.controls = buildControlsState(domains, library, clauseMap);
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
          if (inventory && clauseMap) {
            state.artifacts = { inventory, clauseMap: clauseMap.clauseToArtifacts };
          }
        }
        if (!state.evidence) {
          state.evidence = await fetchJSON('evidence/index.json');
        }
        if (!state.requirements) {
          state.requirements = await fetchJSON('requirements/index.json');
        }
      }
      content = route.view === 'controls' ? renderControlsBrowser() : renderControlDetail(route.slug);
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
    case 'reference':
      if (!state.templates) {
        app.innerHTML = `<div class="main">${renderLoading()}</div>`;
        state.templates = await fetchJSON('templates/index.json');
        if (!state.templates) {
          renderError('templates/index.json');
          return;
        }
      }
      content = renderReference();
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
          state.controls = buildControlsState(domains, library, clauseMap);
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

    // Sub-tab clicks
    const subTab = e.target.closest('.sub-tab');
    if (subTab) {
      const subName = subTab.dataset.sub;
      subTab.closest('.sub-tabs').querySelectorAll('.sub-tab').forEach(b => b.classList.toggle('active', b === subTab));
      document.querySelectorAll('.sub-panel').forEach(p => p.classList.toggle('active', p.dataset.subpanel === subName));
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
  document.body.classList.add('printing');
  window.print();
  document.body.classList.remove('printing');
}

function exportToCSV() {
  const view = state.route.view;
  let data = [];
  let filename = `export-${view}-${new Date().toISOString().slice(0,10)}.csv`;

  if (view === 'controls') {
    const lib = state.controls ? state.controls.library : {};
    for (const [domainId, controls] of Object.entries(lib)) {
      for (const c of controls) {
        data.push({
          ID: c.id || c.slug || '',
          Name: c.name,
          Domain: domainId,
          Description: (c.description || '').replace(/\n/g, ' ')
        });
      }
    }
  } else if (view === 'risk-management') {
    const list = state.riskMgmt?.register || [];
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
  render();
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
