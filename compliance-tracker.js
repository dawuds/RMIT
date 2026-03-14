/* ==========================================================================
   GRC Portfolio — Compliance Gap Tracker & Coverage Dashboard
   Version: 1.0

   Self-contained module for tracking per-control compliance state and
   rendering a coverage dashboard. Designed to be included in any SPA repo.

   Usage:
     <script src="compliance-tracker.js"></script>
     const tracker = new ComplianceTracker('rmit');
     tracker.init(controlsList);    // array of { slug, name, domain, domainName }
     tracker.renderBadge(slug);     // returns HTML string for inline badge
     tracker.renderDashboard(el);   // renders full dashboard into a DOM element
   ========================================================================== */

(function (root) {
  'use strict';

  // ---- Constants ----
  const STATUSES = {
    NOT_STARTED:    'not-started',
    IN_PROGRESS:    'in-progress',
    IMPLEMENTED:    'implemented',
    NOT_APPLICABLE: 'not-applicable',
  };

  const STATUS_META = {
    'not-started':    { label: 'Not Started',    icon: '\u25CB', color: 'var(--ct-not-started)',    bgColor: 'var(--ct-not-started-bg)' },
    'in-progress':    { label: 'In Progress',    icon: '\u25D4', color: 'var(--ct-in-progress)',    bgColor: 'var(--ct-in-progress-bg)' },
    'implemented':    { label: 'Implemented',    icon: '\u25CF', color: 'var(--ct-implemented)',    bgColor: 'var(--ct-implemented-bg)' },
    'not-applicable': { label: 'N/A',            icon: '\u2014', color: 'var(--ct-not-applicable)', bgColor: 'var(--ct-not-applicable-bg)' },
  };

  const STATUS_ORDER = ['not-started', 'in-progress', 'implemented', 'not-applicable'];

  // ---- Utility ----
  function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function slugify(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  // ---- ComplianceTracker class ----
  function ComplianceTracker(repoId) {
    this.repoId = repoId;
    this.storageKey = 'grc-compliance-' + repoId;
    this.controls = [];       // { slug, name, domain, domainName }
    this.domains = {};        // { domainId: { name, slugs: [] } }
    this._state = {};         // { slug: status }
    this._listeners = [];
  }

  // ---- localStorage persistence ----
  ComplianceTracker.prototype._load = function () {
    try {
      var raw = localStorage.getItem(this.storageKey);
      if (raw) {
        this._state = JSON.parse(raw);
      }
    } catch (e) {
      console.warn('ComplianceTracker: failed to load state', e);
      this._state = {};
    }
  };

  ComplianceTracker.prototype._save = function () {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this._state));
    } catch (e) {
      console.warn('ComplianceTracker: failed to save state', e);
    }
  };

  ComplianceTracker.prototype._notify = function () {
    for (var i = 0; i < this._listeners.length; i++) {
      try { this._listeners[i](); } catch (e) { /* ignore */ }
    }
  };

  // ---- Public API ----

  /**
   * Initialize the tracker with a list of controls.
   * @param {Array} controlsList - [{ slug, name, domain, domainName }]
   */
  ComplianceTracker.prototype.init = function (controlsList) {
    this.controls = controlsList || [];
    this.domains = {};
    for (var i = 0; i < this.controls.length; i++) {
      var c = this.controls[i];
      var d = c.domain || 'uncategorised';
      if (!this.domains[d]) {
        this.domains[d] = { name: c.domainName || d, slugs: [] };
      }
      this.domains[d].slugs.push(c.slug);
    }
    this._load();
    // Ensure every control has a state entry
    for (var j = 0; j < this.controls.length; j++) {
      if (!this._state[this.controls[j].slug]) {
        this._state[this.controls[j].slug] = STATUSES.NOT_STARTED;
      }
    }
    this._save();
  };

  ComplianceTracker.prototype.getState = function (slug) {
    return this._state[slug] || STATUSES.NOT_STARTED;
  };

  ComplianceTracker.prototype.setState = function (slug, status) {
    if (STATUS_ORDER.indexOf(status) === -1) return;
    this._state[slug] = status;
    this._save();
    this._notify();
  };

  ComplianceTracker.prototype.onChange = function (fn) {
    this._listeners.push(fn);
  };

  // ---- Bulk actions ----
  ComplianceTracker.prototype.setDomain = function (domainId, status) {
    var d = this.domains[domainId];
    if (!d) return;
    for (var i = 0; i < d.slugs.length; i++) {
      this._state[d.slugs[i]] = status;
    }
    this._save();
    this._notify();
  };

  ComplianceTracker.prototype.resetAll = function () {
    for (var slug in this._state) {
      this._state[slug] = STATUSES.NOT_STARTED;
    }
    this._save();
    this._notify();
  };

  ComplianceTracker.prototype.exportState = function () {
    return JSON.stringify({
      repoId: this.repoId,
      version: 1,
      exportedAt: new Date().toISOString(),
      state: this._state,
    }, null, 2);
  };

  ComplianceTracker.prototype.importState = function (jsonString) {
    try {
      var data = JSON.parse(jsonString);
      if (data.state && typeof data.state === 'object') {
        for (var slug in data.state) {
          if (STATUS_ORDER.indexOf(data.state[slug]) !== -1) {
            this._state[slug] = data.state[slug];
          }
        }
        this._save();
        this._notify();
        return true;
      }
      return false;
    } catch (e) {
      console.error('ComplianceTracker: import failed', e);
      return false;
    }
  };

  // ---- Statistics ----
  ComplianceTracker.prototype.getStats = function (scopeSlugs) {
    var slugs = scopeSlugs || this.controls.map(function (c) { return c.slug; });
    var counts = { 'not-started': 0, 'in-progress': 0, 'implemented': 0, 'not-applicable': 0 };
    for (var i = 0; i < slugs.length; i++) {
      var s = this._state[slugs[i]] || STATUSES.NOT_STARTED;
      counts[s]++;
    }
    var total = slugs.length;
    var applicable = total - counts['not-applicable'];
    var score = applicable > 0 ? Math.round((counts['implemented'] / applicable) * 100) : 0;
    return { total: total, counts: counts, applicable: applicable, score: score };
  };

  // ---- Render: inline badge (returns HTML string) ----
  ComplianceTracker.prototype.renderBadge = function (slug) {
    var status = this.getState(slug);
    var meta = STATUS_META[status];
    return '<span class="ct-badge ct-badge-' + status + '" title="' + escHtml(meta.label) + '">' +
      '<span class="ct-badge-icon">' + meta.icon + '</span>' +
      '<span class="ct-badge-label">' + escHtml(meta.label) + '</span>' +
      '</span>';
  };

  // ---- Render: status dropdown for a single control ----
  ComplianceTracker.prototype.renderStatusSelect = function (slug) {
    var current = this.getState(slug);
    var html = '<select class="ct-select" data-ct-slug="' + escHtml(slug) + '">';
    for (var i = 0; i < STATUS_ORDER.length; i++) {
      var s = STATUS_ORDER[i];
      var m = STATUS_META[s];
      html += '<option value="' + s + '"' + (s === current ? ' selected' : '') + '>' +
        m.icon + ' ' + m.label + '</option>';
    }
    html += '</select>';
    return html;
  };

  // ---- Render: full dashboard (writes into a container element) ----
  ComplianceTracker.prototype.renderDashboard = function (container) {
    var self = this;
    var stats = this.getStats();

    // Build domain stats
    var domainRows = '';
    var domainKeys = Object.keys(this.domains);
    for (var d = 0; d < domainKeys.length; d++) {
      var domId = domainKeys[d];
      var dom = this.domains[domId];
      var ds = this.getStats(dom.slugs);
      domainRows += this._renderDomainRow(domId, dom.name, ds);
    }

    // Build gap list (controls still Not Started)
    var gaps = [];
    for (var i = 0; i < this.controls.length; i++) {
      var c = this.controls[i];
      if (this.getState(c.slug) === STATUSES.NOT_STARTED) {
        gaps.push(c);
      }
    }

    var html = '' +
      '<div class="ct-dashboard" id="ct-dashboard">' +
        // --- Header row ---
        '<div class="ct-dashboard-header">' +
          '<h2 class="ct-dashboard-title">Compliance Coverage Dashboard</h2>' +
          '<div class="ct-dashboard-actions">' +
            '<button class="btn-export ct-btn" data-ct-action="export" title="Export compliance state as JSON">Export</button>' +
            '<button class="btn-export ct-btn" data-ct-action="import" title="Import compliance state from JSON">Import</button>' +
            '<button class="btn-export ct-btn ct-btn-danger" data-ct-action="reset" title="Reset all controls to Not Started">Reset All</button>' +
          '</div>' +
        '</div>' +

        // --- Overall score ---
        '<div class="ct-score-section">' +
          this._renderScoreRing(stats.score) +
          '<div class="ct-summary-cards">' +
            this._renderSummaryCard('Total Controls', stats.total, '--text-primary') +
            this._renderSummaryCard('Implemented', stats.counts['implemented'], '--ct-implemented') +
            this._renderSummaryCard('In Progress', stats.counts['in-progress'], '--ct-in-progress') +
            this._renderSummaryCard('Not Started', stats.counts['not-started'], '--ct-not-started') +
            this._renderSummaryCard('N/A', stats.counts['not-applicable'], '--ct-not-applicable') +
          '</div>' +
        '</div>' +

        // --- Status filter ---
        '<div class="ct-filters">' +
          '<span class="ct-filter-label">Filter:</span>' +
          '<button class="ct-filter-btn active" data-ct-filter="all">All</button>' +
          '<button class="ct-filter-btn" data-ct-filter="not-started">Not Started (' + stats.counts['not-started'] + ')</button>' +
          '<button class="ct-filter-btn" data-ct-filter="in-progress">In Progress (' + stats.counts['in-progress'] + ')</button>' +
          '<button class="ct-filter-btn" data-ct-filter="implemented">Implemented (' + stats.counts['implemented'] + ')</button>' +
          '<button class="ct-filter-btn" data-ct-filter="not-applicable">N/A (' + stats.counts['not-applicable'] + ')</button>' +
        '</div>' +

        // --- Domain breakdown ---
        '<div class="ct-domain-section">' +
          '<h3 class="ct-section-title">Coverage by Domain</h3>' +
          domainRows +
        '</div>' +

        // --- Gap analysis ---
        '<div class="ct-gap-section">' +
          '<h3 class="ct-section-title">Gap Analysis <span class="ct-gap-count">' + gaps.length + ' control' + (gaps.length !== 1 ? 's' : '') + ' not started</span></h3>' +
          (gaps.length > 0 ?
            '<div class="ct-gap-list" id="ct-gap-list">' +
              gaps.map(function (g) {
                return '<div class="ct-gap-item" data-ct-domain="' + escHtml(g.domain) + '">' +
                  '<span class="ct-gap-name">' + escHtml(g.name) + '</span>' +
                  '<span class="ct-gap-domain badge badge-category">' + escHtml(g.domainName || g.domain) + '</span>' +
                  '<button class="ct-btn ct-btn-sm" data-ct-quick="' + escHtml(g.slug) + '" data-ct-quick-status="in-progress" title="Mark as In Progress">Start</button>' +
                '</div>';
              }).join('') +
            '</div>' :
            '<p class="ct-gap-empty">All controls have been addressed.</p>'
          ) +
        '</div>' +

        // --- Hidden import input ---
        '<input type="file" id="ct-import-file" accept=".json" style="display:none">' +
      '</div>';

    container.innerHTML = html;
    this._bindDashboardEvents(container);
  };

  // ---- Internal render helpers ----

  ComplianceTracker.prototype._renderScoreRing = function (score) {
    // SVG-based ring chart
    var radius = 54;
    var circumference = 2 * Math.PI * radius;
    var offset = circumference - (score / 100) * circumference;
    var ringColor = score >= 75 ? 'var(--ct-implemented)' :
                    score >= 40 ? 'var(--ct-in-progress)' :
                    'var(--ct-not-started)';

    return '' +
      '<div class="ct-score-ring">' +
        '<svg viewBox="0 0 128 128" class="ct-ring-svg">' +
          '<circle cx="64" cy="64" r="' + radius + '" fill="none" stroke="var(--border)" stroke-width="10" />' +
          '<circle cx="64" cy="64" r="' + radius + '" fill="none" stroke="' + ringColor + '" stroke-width="10" ' +
            'stroke-dasharray="' + circumference + '" stroke-dashoffset="' + offset + '" ' +
            'stroke-linecap="round" transform="rotate(-90 64 64)" class="ct-ring-progress" />' +
        '</svg>' +
        '<div class="ct-score-text">' +
          '<span class="ct-score-value">' + score + '%</span>' +
          '<span class="ct-score-label">Compliance</span>' +
        '</div>' +
      '</div>';
  };

  ComplianceTracker.prototype._renderSummaryCard = function (label, value, colorVar) {
    return '' +
      '<div class="ct-summary-card">' +
        '<div class="ct-summary-value" style="color:var(' + colorVar + ')">' + value + '</div>' +
        '<div class="ct-summary-label">' + escHtml(label) + '</div>' +
      '</div>';
  };

  ComplianceTracker.prototype._renderDomainRow = function (domainId, domainName, stats) {
    var pctImplemented = stats.applicable > 0 ? Math.round((stats.counts['implemented'] / stats.applicable) * 100) : 0;
    var pctInProgress = stats.applicable > 0 ? Math.round((stats.counts['in-progress'] / stats.applicable) * 100) : 0;
    var pctNA = stats.total > 0 ? Math.round((stats.counts['not-applicable'] / stats.total) * 100) : 0;

    return '' +
      '<div class="ct-domain-row" data-ct-domain-id="' + escHtml(domainId) + '">' +
        '<div class="ct-domain-info">' +
          '<span class="ct-domain-name">' + escHtml(domainName) + '</span>' +
          '<span class="ct-domain-stats-text">' +
            stats.counts['implemented'] + '/' + stats.applicable + ' implemented' +
            (stats.counts['not-applicable'] > 0 ? ' (' + stats.counts['not-applicable'] + ' N/A)' : '') +
          '</span>' +
        '</div>' +
        '<div class="ct-domain-bar-wrap">' +
          '<div class="ct-domain-bar">' +
            '<div class="ct-bar-segment ct-bar-implemented" style="width:' + pctImplemented + '%"></div>' +
            '<div class="ct-bar-segment ct-bar-in-progress" style="width:' + pctInProgress + '%"></div>' +
            '<div class="ct-bar-segment ct-bar-na" style="width:' + pctNA + '%"></div>' +
          '</div>' +
          '<span class="ct-domain-pct">' + stats.score + '%</span>' +
        '</div>' +
        '<div class="ct-domain-actions">' +
          '<select class="ct-select ct-domain-bulk" data-ct-domain-bulk="' + escHtml(domainId) + '">' +
            '<option value="">Bulk set...</option>' +
            '<option value="not-started">All Not Started</option>' +
            '<option value="in-progress">All In Progress</option>' +
            '<option value="implemented">All Implemented</option>' +
            '<option value="not-applicable">All N/A</option>' +
          '</select>' +
        '</div>' +
      '</div>';
  };

  // ---- Dashboard event binding ----
  ComplianceTracker.prototype._bindDashboardEvents = function (container) {
    var self = this;

    container.addEventListener('click', function (e) {
      // Action buttons
      var actionBtn = e.target.closest('[data-ct-action]');
      if (actionBtn) {
        var action = actionBtn.dataset.ctAction;
        if (action === 'export') {
          self._doExport();
        } else if (action === 'import') {
          document.getElementById('ct-import-file').click();
        } else if (action === 'reset') {
          if (confirm('Reset all controls to "Not Started"? This cannot be undone.')) {
            self.resetAll();
            self.renderDashboard(container);
          }
        }
        return;
      }

      // Quick-action buttons in gap list
      var quickBtn = e.target.closest('[data-ct-quick]');
      if (quickBtn) {
        var slug = quickBtn.dataset.ctQuick;
        var status = quickBtn.dataset.ctQuickStatus;
        self.setState(slug, status);
        self.renderDashboard(container);
        return;
      }

      // Filter buttons
      var filterBtn = e.target.closest('[data-ct-filter]');
      if (filterBtn) {
        var filter = filterBtn.dataset.ctFilter;
        container.querySelectorAll('.ct-filter-btn').forEach(function (b) {
          b.classList.toggle('active', b === filterBtn);
        });
        // Filter gap list items
        var gapItems = container.querySelectorAll('.ct-gap-item');
        gapItems.forEach(function (item) {
          item.style.display = (filter === 'all' || filter === 'not-started') ? '' : 'none';
        });
        // Filter domain rows: show all unless a specific status is selected
        var domainRows = container.querySelectorAll('.ct-domain-row');
        domainRows.forEach(function (row) {
          row.style.display = '';
        });
        return;
      }
    });

    // Domain bulk select
    container.addEventListener('change', function (e) {
      var bulkSelect = e.target.closest('[data-ct-domain-bulk]');
      if (bulkSelect && bulkSelect.value) {
        var domId = bulkSelect.dataset.ctDomainBulk;
        self.setDomain(domId, bulkSelect.value);
        self.renderDashboard(container);
        return;
      }

      // Import file
      if (e.target.id === 'ct-import-file') {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (ev) {
          var success = self.importState(ev.target.result);
          if (success) {
            self.renderDashboard(container);
          } else {
            alert('Import failed. Please check the JSON file format.');
          }
        };
        reader.readAsText(file);
        return;
      }
    });
  };

  ComplianceTracker.prototype._doExport = function () {
    var json = this.exportState();
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'compliance-state-' + this.repoId + '-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ---- Render: inline status selector for control lists ----
  ComplianceTracker.prototype.renderInlineTracker = function (slug) {
    return '<span class="ct-inline-tracker">' +
      this.renderBadge(slug) +
      this.renderStatusSelect(slug) +
      '</span>';
  };

  // ---- Setup global event delegation for ct-select changes ----
  ComplianceTracker.prototype.setupGlobalEvents = function () {
    var self = this;
    document.addEventListener('change', function (e) {
      if (e.target.matches('.ct-select[data-ct-slug]')) {
        var slug = e.target.dataset.ctSlug;
        var status = e.target.value;
        self.setState(slug, status);
        // Update the associated badge
        var tracker = e.target.closest('.ct-inline-tracker');
        if (tracker) {
          var badge = tracker.querySelector('.ct-badge');
          if (badge) {
            var meta = STATUS_META[status];
            badge.className = 'ct-badge ct-badge-' + status;
            badge.title = meta.label;
            badge.querySelector('.ct-badge-icon').textContent = meta.icon;
            badge.querySelector('.ct-badge-label').textContent = meta.label;
          }
        }
      }
    });
  };

  // ---- Static references ----
  ComplianceTracker.STATUSES = STATUSES;
  ComplianceTracker.STATUS_META = STATUS_META;
  ComplianceTracker.STATUS_ORDER = STATUS_ORDER;

  // Export
  root.ComplianceTracker = ComplianceTracker;

})(window);
