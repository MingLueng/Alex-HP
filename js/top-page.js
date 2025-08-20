const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("show");

  // Đổi icon giữa ☰ và ✕
  if (mobileNav.classList.contains("show")) {
    menuToggle.innerHTML = '&times;'; // ✕
  } else {
    menuToggle.innerHTML = '&#9776;'; // ☰
  }
});

// Handle submenu accordion logic
document.querySelectorAll('.mobile-toggle').forEach(button => {
  button.addEventListener('click', function () {
    const parent = this.closest('.mobile-nav-item');
    const submenu = parent.querySelector('.mobile-submenu');
    const icon = this.querySelector('.toggle-icon');

    // Close all other submenus
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
        item.querySelector('.mobile-submenu')?.classList.remove('show');
        item.querySelector('.toggle-icon').textContent = '＋';
      }
    });

    // Toggle current submenu
    const isOpen = parent.classList.contains('open');
    if (isOpen) {
      parent.classList.remove('open');
      submenu.classList.remove('show');
      icon.textContent = '＋';
    } else {
      parent.classList.add('open');
      submenu.classList.add('show');
      icon.textContent = '−';
    }
  });
});



// Scrollable news list with snap effect
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("newsList");
  if (!list) return;

  list.style.overflowY = "hidden";

  let items = [];
  let tops  = [];
  const COUNT = 2; // cửa sổ luôn thấy 2 item, nhưng bước nhảy = 1

  function measure() {
    items = Array.from(list.querySelectorAll(".news-item"));
    tops  = items.map(el => el.offsetTop);

    // đặt chiều cao viewport đúng bằng tổng chiều cao 2 item đầu (để “cửa sổ” cố định)
    if (items.length >= 2) {
      const h = (items[0].offsetTop + items[0].offsetHeight) - items[0].offsetTop
              + (items[1].offsetTop + items[1].offsetHeight) - items[1].offsetTop;
      list.style.maxHeight = h + "px";
    }
    updateButtons();
  }

  // tìm index item ở đỉnh cửa sổ (gần nhất với scrollTop)
  function headIndex() {
    const st = list.scrollTop;
    // binary search cho chắc ăn
    let l = 0, r = tops.length - 1, ans = 0;
    while (l <= r) {
      const m = (l + r) >> 1;
      if (tops[m] <= st + 1) { ans = m; l = m + 1; }
      else r = m - 1;
    }
    return ans;
  }

  // cuộn sao cho item index i nằm ở đỉnh
  function scrollToHead(i, smooth = true) {
    if (!tops.length) return;
    const maxHead = Math.max(0, items.length - COUNT);
    i = Math.max(0, Math.min(i, maxHead));
    list.scrollTo({ top: tops[i], behavior: smooth ? "smooth" : "auto" });
    // KHÔNG gọi snap sau khi cuộn — tránh nhảy 2 item
    setTimeout(updateButtons, 200);
  }

  // API cho nút ▲ / ▼ (dịch đúng 1 item)
  window.scrollNews = function(dir) {
    const i = headIndex();
    scrollToHead(i + (dir > 0 ? 1 : -1), true);
  };

  // cập nhật trạng thái nút khi chạm biên
  function updateButtons() {
    const upBtn   = document.querySelector(".scroll-btn.up");
    const downBtn = document.querySelector(".scroll-btn.down");
    if (!upBtn || !downBtn) return;
    const i = headIndex();
    const maxHead = Math.max(0, items.length - COUNT);
    upBtn.disabled   = (i <= 0);
    downBtn.disabled = (i >= maxHead);
  }

  // chỉ cập nhật nút khi người dùng tự cuộn (không snap)
  list.addEventListener("scroll", () => {
    updateButtons();
  }, { passive: true });

  // re-measure khi resize
  let rt = null;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(measure, 120);
  });

  measure();
});
