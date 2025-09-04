(function () {
  if (window.PAGE !== 'production-library') return;

  // helpers
  const $  = (s, sc=document) => sc.querySelector(s);
  const $$ = (s, sc=document) => Array.from(sc.querySelectorAll(s));

  function init() {
    // ===== Collapse sidebar =====
    const app = $('#app');
    const collapseBtn = $('#collapseBtn');
    if (app && collapseBtn) {
      collapseBtn.addEventListener('click', () => {
        app.classList.toggle('is-collapsed');
        const icon = collapseBtn.firstElementChild;
        if (icon) {
          icon.className = app.classList.contains('is-collapsed')
            ? 'fas fa-angle-double-right'
            : 'fas fa-angle-double-left';
        }
      });
    }

    // ===== Filter + Pager =====
    const grid  = $('.grid');
    const pager = $('#pager');
    const items = $$('.video-card');
    if (!grid || !pager || !items.length) return;

    let cat='*', sub='*', page=1, per=9;

    const cur = $('#catNav .sub-link.is-active');
    if (cur) { cat = cur.dataset.cat || '*'; sub = cur.dataset.sub || '*'; }

    $('#catNav')?.addEventListener('click', (e) => {
      const t = e.target.closest('.cat-toggle, .sub-link');
      if (!t) return;

      if (t.classList.contains('cat-toggle')) {
        const li = t.closest('.cat');
        if (!li) return;
        li.classList.toggle('is-open');
        t.setAttribute('aria-expanded', li.classList.contains('is-open'));
      } else {
        cat = t.dataset.cat || '*';
        sub = t.dataset.sub || '*';
        page = 1;
        $$('#catNav .sub-link').forEach(b => b.classList.toggle('is-active', b === t));
        t.closest('.cat')?.classList.add('is-open');
        render();
      }
    });

    function render() {
      const list = items.filter(el =>
        (cat === '*' || el.dataset.cat === cat) &&
        (sub === '*' || el.dataset.sub === sub)
      );
      const pages = Math.max(1, Math.ceil(list.length / per));
      page = Math.min(page, pages);

      items.forEach(el => { el.querySelector('video')?.pause(); el.style.display = 'none'; });
      list.slice((page - 1) * per, page * per).forEach(el => el.style.display = '');

      drawPager(pages);
    }

    function drawPager(pages) {
      pager.innerHTML = '';

      const add = (label, p, disabled=false, active=false, iconClass='') => {
        const btn = document.createElement('button');
        btn.className = 'page-btn' + (active ? ' is-active' : '');
        if (iconClass) {
          const i = document.createElement('i');
          i.className = iconClass;          // Font Awesome
          btn.appendChild(i);
        } else {
          btn.textContent = label;
        }
        if (!disabled && !active) {
          btn.addEventListener('click', () => {
            page = p; render();
            const header = document.querySelector('.header-wrapper');
            const offset = header ? header.offsetHeight : 0;
            const y = window.scrollY + grid.getBoundingClientRect().top - offset - 8;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          });
        } else {
          btn.disabled = true;
        }
        pager.appendChild(btn);
      };

      add('', 1, page === 1, false, 'fas fa-angle-double-left');
      for (let i = 1; i <= pages; i++) add(String(i), i, false, i === page);
      add('', pages, page === pages, false, 'fas fa-angle-double-right');
    }

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
