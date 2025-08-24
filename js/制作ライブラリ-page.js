
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
  const grid   = document.querySelector(gridSelector);
  const pager  = document.querySelector(pagerSelector);
  if (!grid || !pager) return;

  const items = Array.from(grid.querySelectorAll(itemSelector));
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  let page = 1;

  // Ẩn/hiện item theo trang
  function renderPage(n) {
    page = Math.min(Math.max(1, n), pages);
    const start = (page - 1) * perPage;
    const end   = start + perPage;

    // dừng video đang phát, sau đó ẩn/hiện
    items.forEach((el, i) => {
      const v = el.querySelector('video');
      if (v && !v.paused) v.pause();
      el.style.display = (i >= start && i < end) ? '' : 'none';
    });

    renderPager();
    // cuộn về đỉnh lưới cho gọn mắt
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Tạo 1 nút
  function btn(label, targetPage, {disabled=false, active=false, aria='', isHtml=false} = {}) {
  const b = document.createElement('button');
  b.className = 'page-btn' + (active ? ' is-active' : '') + (disabled ? ' is-disabled' : '');
  b.type = 'button';
  if (isHtml) {
    b.innerHTML = label;
  } else {
    b.textContent = label;
  }
  if (aria) b.setAttribute('aria-label', aria);
  if (!disabled && !active) {
    b.addEventListener('click', () => renderPage(targetPage));
  } else {
    b.tabIndex = -1;
    b.disabled = true;
  }
  return b;
}

  // Vẽ thanh phân trang: « 1 2 3 »
function renderPager() {
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


  // Khởi tạo
  renderPage(1);
}


