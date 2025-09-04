// ./js/about-tabs-scroll.js
(function () {
  if (window.PAGE !== 'about' || window.PAGE !== 'access') return;

  function ready(fn){
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once:true });
    } else {
      fn();
    }
  }

  function getHeaderOffset() {
    const header = document.querySelector('.header-wrapper');
    return header ? header.getBoundingClientRect().height : 0;
  }

  function scrollToId(id, push = true) {
    const el = document.getElementById(id);
    if (!el) return;

    const y = window.scrollY + el.getBoundingClientRect().top - getHeaderOffset() - 12;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

    // set active tab
    const nav = document.querySelector('nav.submenu-tabs');
    if (nav) {
      nav.querySelectorAll('a[href^="#"]').forEach(a => {
        a.classList.toggle('active', decodeURIComponent(a.getAttribute('href').slice(1)) === id);
      });
    }

    if (push) {
      try { history.replaceState(null, '', '#' + encodeURIComponent(id)); } catch {}
    }
  }

  function init() {
    const nav = document.querySelector('nav.submenu-tabs');
    if (!nav) return;

    // Click trong khu vực nav
    nav.addEventListener('click', function (e) {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const id = decodeURIComponent(a.getAttribute('href').slice(1));
      if (!id) return;

      e.preventDefault();
      scrollToId(id, true);
    });

    // Nếu url có hash thì cuộn tới đúng section khi vào trang
    const hash = decodeURIComponent(location.hash || '').replace(/^#/, '');
    if (hash) {
      // đợi 1 tick để header/partials ổn định chiều cao
      setTimeout(() => scrollToId(hash, false), 0);
    }
  }

  // Đợi DOM sẵn sàng rồi chạy
  ready(init);
})();
