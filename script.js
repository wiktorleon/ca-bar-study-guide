/* ===== CA Bar Study Guide — Script ===== */

(function () {
  'use strict';

  // Subject data for search and navigation
  const subjects = [
    { name: 'Torts', file: 'subjects/torts.html', keywords: 'negligence intentional torts strict liability defamation' },
    { name: 'Remedies', file: 'subjects/remedies.html', keywords: 'damages injunction restitution equitable' },
    { name: 'Contracts', file: 'subjects/contracts.html', keywords: 'ucc offer acceptance consideration breach' },
    { name: 'Business Associations', file: 'subjects/business-associations.html', keywords: 'agency partnership corporation llc fiduciary' },
    { name: 'Criminal Law', file: 'subjects/criminal-law.html', keywords: 'homicide theft assault battery inchoate' },
    { name: 'Criminal Procedure', file: 'subjects/criminal-procedure.html', keywords: 'fourth amendment search seizure miranda' },
    { name: 'Evidence', file: 'subjects/evidence.html', keywords: 'hearsay relevance privilege character' },
    { name: 'Constitutional Law', file: 'subjects/constitutional-law.html', keywords: 'due process equal protection first amendment commerce' },
    { name: 'Civil Procedure', file: 'subjects/civil-procedure.html', keywords: 'jurisdiction venue pleading discovery summary judgment' },
    { name: 'Real Property', file: 'subjects/real-property.html', keywords: 'estates easements covenants landlord tenant recording' },
    { name: 'Community Property', file: 'subjects/community-property.html', keywords: 'marital separate quasi community' },
    { name: 'Wills & Succession', file: 'subjects/wills-succession.html', keywords: 'intestate testate probate will codicil' },
    { name: 'Trusts', file: 'subjects/trusts.html', keywords: 'trustee beneficiary revocable irrevocable' },
    { name: 'Professional Responsibility', file: 'subjects/professional-responsibility.html', keywords: 'ethics conflict duty competence confidentiality' },
    { name: 'Exam Approach', file: 'exam-approach.html', keywords: 'irac essay strategy writing' },
  ];

  /* ---------- Theme Toggle ---------- */
  function initTheme() {
    const saved = localStorage.getItem('bar-theme');
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    updateThemeBtn(btn);
    btn.addEventListener('click', function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('bar-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('bar-theme', 'dark');
      }
      updateThemeBtn(btn);
    });
  }

  function updateThemeBtn(btn) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }

  /* ---------- Sidebar Toggle (mobile) ---------- */
  function initSidebar() {
    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('active');
    });

    if (overlay) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      });
    }
  }

  /* ---------- Progress Tracking ---------- */
  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem('bar-progress') || '{}');
    } catch { return {}; }
  }

  function saveProgress(p) {
    localStorage.setItem('bar-progress', JSON.stringify(p));
  }

  function initProgress() {
    const progress = getProgress();

    // Update sidebar checks
    document.querySelectorAll('.sidebar-nav a[data-subject]').forEach(function (a) {
      const key = a.getAttribute('data-subject');
      const check = a.querySelector('.check');
      if (check && progress[key]) check.classList.add('done');
    });

    // Update card checks on index
    document.querySelectorAll('.subject-card[data-subject]').forEach(function (card) {
      const key = card.getAttribute('data-subject');
      const check = card.querySelector('.card-check');
      if (check && progress[key]) check.classList.add('done');
    });

    // Update progress bar
    const totalSubjects = 15;
    const completed = Object.values(progress).filter(Boolean).length;
    const fill = document.querySelector('.progress-bar .fill');
    if (fill) fill.style.width = Math.round((completed / totalSubjects) * 100) + '%';
    const label = document.querySelector('.progress-count');
    if (label) label.textContent = completed + '/' + totalSubjects;

    // Mark-complete button on subject pages
    const btn = document.querySelector('.mark-complete');
    if (btn) {
      const subjectKey = btn.getAttribute('data-subject');
      if (progress[subjectKey]) {
        btn.classList.add('completed');
        btn.textContent = 'Completed';
      }
      btn.addEventListener('click', function () {
        const p = getProgress();
        if (p[subjectKey]) {
          delete p[subjectKey];
          btn.classList.remove('completed');
          btn.textContent = 'Mark as Complete';
        } else {
          p[subjectKey] = true;
          btn.classList.add('completed');
          btn.textContent = 'Completed';
        }
        saveProgress(p);
        initProgress(); // refresh sidebar
      });
    }
  }

  /* ---------- Search ---------- */
  function initSearch() {
    const input = document.querySelector('.header-search input');
    const results = document.querySelector('.search-results');
    if (!input || !results) return;

    // Determine base path prefix
    const isSubpage = window.location.pathname.includes('/subjects/') ||
                      window.location.pathname.endsWith('exam-approach.html');
    const prefix = isSubpage ? '../' : '';

    input.addEventListener('input', function () {
      const q = this.value.trim().toLowerCase();
      if (q.length < 2) { results.classList.remove('active'); results.innerHTML = ''; return; }

      const matches = subjects.filter(function (s) {
        return s.name.toLowerCase().includes(q) || s.keywords.includes(q);
      });

      if (matches.length === 0) {
        results.innerHTML = '<div style="padding:0.75rem;color:var(--text-muted);font-size:0.85rem;">No results</div>';
      } else {
        results.innerHTML = matches.map(function (s) {
          return '<a href="' + prefix + s.file + '">' + s.name + '</a>';
        }).join('');
      }
      results.classList.add('active');
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.header-search')) results.classList.remove('active');
    });
  }

  /* ---------- Active Nav Highlighting ---------- */
  function initActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.sidebar-nav a').forEach(function (a) {
      const href = a.getAttribute('href');
      if (href && path.endsWith(href.replace('../', '').replace('./', ''))) {
        a.classList.add('active');
      }
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initSidebar();
    initProgress();
    initSearch();
    initActiveNav();
  });
})();
