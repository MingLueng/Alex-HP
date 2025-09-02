
/* Thu gọn/mở rộng sidebar */
collapseBtn.addEventListener('click', () => {
  app.classList.toggle('is-collapsed');
  
  const icon = collapseBtn.firstElementChild;
  
  if (app.classList.contains('is-collapsed')) {
    icon.className = 'fas fa-angle-double-right'; // icon khi collapse
  } else {
    icon.className = 'fas fa-angle-double-left';  // icon khi expand
  }
});

/* Nút trợ giúp (nếu dùng) */
document.getElementById('helpBtn')?.addEventListener('click', ()=> {
  alert('Mở trang trợ giúp hoặc popup ở đây');
});

document.addEventListener('DOMContentLoaded', () => {
  makeGridPager({
    gridSelector: '.grid',          // nơi chứa các thẻ item
    itemSelector: '.video-card',    // mỗi item
    pagerSelector: '#pager',        // thanh phân trang
    perPage: 9                      // mỗi trang bao nhiêu item
  });
});

function makeGridPager({gridSelector, itemSelector, pagerSelector, perPage = 9}) {
  const grid  = document.querySelector(gridSelector);
  const pager = document.querySelector(pagerSelector);
  if (!grid || !pager) return;

  const allItems = Array.from(grid.querySelectorAll(itemSelector));
  let filtered   = allItems.slice();   // danh sách đang được lọc
  let page       = 1;

  // ===== helpers
  const pause = (el) => {
    const v = el.querySelector('video');
    if (v) { try { v.pause(); } catch(_){} }
  };

  // Ẩn/hiện item theo TRANG trên TẬP ĐANG LỌC
  function renderPage(n, {scroll=true} = {}) {
    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / perPage));
    page = Math.min(Math.max(1, n), pages);

    const start = (page - 1) * perPage;
    const end   = start + perPage;

    // Ẩn tất cả trước
    allItems.forEach(el => { pause(el); el.style.display = 'none'; });

    // Hiện các item thuộc trang hiện tại trong TẬP LỌC
    filtered.slice(start, end).forEach(el => { el.style.display = ''; });

    renderPager(pages);
    if (scroll) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Tạo 1 nút
  function btn(label, targetPage, {disabled=false, active=false, aria='', isHtml=false} = {}) {
    const b = document.createElement('button');
    b.className = 'page-btn' + (active ? ' is-active' : '') + (disabled ? ' is-disabled' : '');
    b.type = 'button';
    if (isHtml) b.innerHTML = label; else b.textContent = label;
    if (aria) b.setAttribute('aria-label', aria);
    if (!disabled && !active) b.addEventListener('click', () => renderPage(targetPage));
    else { b.tabIndex = -1; b.disabled = true; }
    return b;
  }

  // Vẽ thanh phân trang: « 1 2 3 »
  function renderPager(pages) {
    pager.innerHTML = '';
    pager.appendChild(
      btn('<i class="fas fa-angle-double-left"></i>', 1, {
        disabled: page === 1,
        aria: 'Trang đầu',
        isHtml: true
      })
    );
    for (let i = 1; i <= pages; i++) {
      pager.appendChild(
        btn(String(i), i, {
          active: i === page,
          aria: 'Tới trang ' + i
        })
      );
    }
    pager.appendChild(
      btn('<i class="fas fa-angle-double-right"></i>', pages, {
        disabled: page === pages,
        aria: 'Trang cuối',
        isHtml: true
      })
    );
  }

  // ===== LỌC THEO HASH: #all / #gases / #solids / #gases-smoke-sd ...
  function highlightNav(hash) {
    document.querySelectorAll('.tree-item').forEach(a => {
      a.classList.toggle('is-active', a.getAttribute('href') === '#'+hash);
    });
  }

  function applyHash() {
    const raw = decodeURIComponent((location.hash || '#all').slice(1)); // bỏ '#'
    if (!raw || raw === 'all') {
      filtered = allItems.slice();          // toàn bộ
      renderPage(1);
      highlightNav('all');
      return;
    }

    // 1) Nếu raw trùng ID CỤ THỂ -> chỉ hiện đúng item đó (kể cả có bản ghi trùng id "không hợp lệ")
    const exactMatches = allItems.filter(el => el.id === raw);
    if (exactMatches.length) {
      filtered = exactMatches;              // chỉ các item có id đúng
      renderPage(1, {scroll:false});
      // focus nhẹ
      const el = exactMatches[0];
      el.scrollIntoView({behavior:'smooth', block:'center'});
      el.classList.add('is-highlight');
      setTimeout(() => el.classList.remove('is-highlight'), 1200);
      highlightNav(raw);
      return;
    }

    // 2) Nếu là NHÓM (ví dụ #gases, #solids) -> lọc theo tiền tố id "gases-"
    filtered = allItems.filter(el => el.id && el.id.startsWith(raw + '-'));

    // Fallback: nếu không khớp gì thì trả về toàn bộ để tránh trắng trang
    if (filtered.length === 0) filtered = allItems.slice();

    renderPage(1);
    highlightNav(raw);
  }

  // Khởi tạo theo hash hiện tại + lắng nghe đổi hash
  window.addEventListener('hashchange', applyHash);
  applyHash();
}



