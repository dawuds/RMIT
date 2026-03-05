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
  route: { view: 'overview' },
};

const cache = new Map();

async function fetchJSON(path) {
  if (cache.has(path)) return cache.get(path);
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  const data = await res.json();
  cache.set(path, data);
  return data;
}

// ---- Router ----
function parseHash() {
  const hash = location.hash.slice(1);
  if (!hash) return { view: 'overview' };
  if (hash.startsWith('search/')) return { view: 'search', query: decodeURIComponent(hash.slice(7)) };
  if (hash === 'controls') return { view: 'controls-browser' };
  if (hash.startsWith('control/')) return { view: 'control-detail', slug: hash.slice(8) };
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
      <div class="stat"><div class="stat-value">93</div><div class="stat-label">Controls</div></div>
      <div class="stat"><div class="stat-value">365</div><div class="stat-label">Artifacts</div></div>
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
      <a href="#controls" style="font-size:0.875rem">Browse Common Controls Library (93 controls across 15 domains) \u2192</a>
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
      93 controls across 15 domains. Each control maps to one or more RMiT clauses.
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

function updateNav() {
  document.querySelectorAll('.nav-link').forEach(el => {
    const view = el.dataset.view;
    el.classList.toggle('active', view === state.route.view ||
      (view === 'overview' && state.route.view === 'section') ||
      (view === 'overview' && state.route.view === 'clause') ||
      (view === 'controls-browser' && state.route.view === 'control-detail')
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
      const [sections, clausesArr] = await Promise.all([
        fetchJSON('clauses/sections.json'),
        fetchJSON('clauses/index.json'),
      ]);
      state.sections = sections;
      // Convert array to keyed object
      state.clauses = {};
      for (const cl of clausesArr) state.clauses[cl.id] = cl;
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
    if (tab) { activateTab(tab.dataset.tab, state.route.id); return; }
  });

  let searchTimeout;
  document.addEventListener('input', (e) => {
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
