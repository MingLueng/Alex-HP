  const stack = document.querySelector('.interview-stack');
  const prevBtn = document.querySelector('.slide-interview-btn.prev');
  const nextBtn = document.querySelector('.slide-interview-btn.next');
  const items = stack.querySelectorAll('.stack-item');

  const gap = 15;
  let offset = 0;

  // Lấy chiều rộng 1 item
  function getItemWidth() {
    return items[0].getBoundingClientRect().width + gap;
  }

  // Số item hiển thị tùy màn hình
  function getItemsPerPage() {
    const w = window.innerWidth;
    if (w <= 768)  return 2;
    if (w <= 1200) return 3;
    if (w <= 1600) return 4;
    return 5;
  }

  // Offset tối đa (không để dư khoảng trắng)
  function getMaxOffset() {
    const itemWidth = getItemWidth();
    const itemsPerPage = getItemsPerPage();
    const totalItems = items.length;

    if (totalItems <= itemsPerPage) return 0;

    // Tổng chiều rộng item thực tế (trừ gap cuối cùng)
    const totalWidth = totalItems * itemWidth - gap;
    const containerWidth = stack.parentElement.getBoundingClientRect().width;

    // Scroll tối đa = totalWidth - containerWidth
    return Math.max(0, totalWidth - containerWidth);
  }

  function updateSliderStaff() {
    const containerWidth = stack.parentElement.getBoundingClientRect().width;
    const totalItems = items.length;
    const itemWidth = getItemWidth();
    const totalWidth = totalItems * itemWidth - gap;
    const maxOffset = getMaxOffset();

    // Nếu ít item hơn container → căn giữa
    if (totalWidth <= containerWidth) {
      const gapCenter = (containerWidth - totalWidth) / 2;
      stack.style.transform = `translateX(${gapCenter}px)`;
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      return;
    }

    // Giới hạn offset
    offset = Math.max(0, Math.min(offset, maxOffset));

    // Trượt
    stack.style.transform = `translateX(-${offset}px)`;
    stack.style.transition = "transform 0.4s ease";

    // Cập nhật nút
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    prevBtn.disabled = offset === 0;
    nextBtn.disabled = offset >= maxOffset;
    prevBtn.style.opacity = offset === 0 ? 0.3 : 1;
    nextBtn.style.opacity = offset >= maxOffset ? 0.3 : 1;
  }

  nextBtn.addEventListener('click', () => {
    offset += getItemWidth();
    updateSliderStaff();
  });

  prevBtn.addEventListener('click', () => {
    offset -= getItemWidth();
    updateSliderStaff();
  });

  window.addEventListener('resize', () => {
    offset = 0;
    updateSliderStaff();
  });

  updateSliderStaff();


document.querySelectorAll('.stack-item').forEach(item => {
  item.addEventListener('click', () => {
    const popupSelector = item.getAttribute('data-popup');
    const popup = document.querySelector(popupSelector);

    // Ẩn tất cả popup trước
    document.querySelectorAll('.interview-popup-overlay').forEach(p => p.classList.remove('active'));

    // Hiện popup tương ứng
    popup.classList.add('active');

    // Thêm class để ẩn thanh cuộn
    document.body.classList.add('popup-open');
  });
});

// Đóng popup khi click ra ngoài
document.querySelectorAll('.interview-popup-overlay').forEach(popup => {
  popup.addEventListener('click', e => {
    if (e.target === popup) {
      popup.classList.remove('active');
      
      // Gỡ class ẩn thanh cuộn
      document.body.classList.remove('popup-open');
    }
  });
});
