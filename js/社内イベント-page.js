document.querySelectorAll('.creation-interview-box').forEach(box => {
  const scroller = box.querySelector('.interview-overwhole');
  const prevBtn  = box.querySelector('.overwhole-btn.prev');
  const nextBtn  = box.querySelector('.overwhole-btn.next');
  const thumbs   = box.querySelectorAll('.overwhole-item img');
  const bigImage = box.querySelector('.creation-interview-left img');
  if (!scroller || !prevBtn || !nextBtn) return;

  // TÍNH BƯỚC CUỘN THEO THỰC TẾ (responsive)
  const getStep = () => {
    const item = scroller.querySelector('.overwhole-item');
    if (!item) return scroller.clientWidth;
    const rect = item.getBoundingClientRect();
    const gap  = parseFloat(getComputedStyle(scroller).gap || 0);
    return rect.width + gap; // đúng ở mọi breakpoint
  };

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const maxLeft = () => Math.max(0, scroller.scrollWidth - scroller.clientWidth);

  const updateButtons = () => {
    const max = maxLeft() - 1; // trừ epsilon để tránh nhấp nháy
    prevBtn.disabled = scroller.scrollLeft <= 0;
    nextBtn.disabled = scroller.scrollLeft >= max;
    prevBtn.style.opacity = prevBtn.disabled ? 0.3 : 1;
    nextBtn.style.opacity = nextBtn.disabled ? 0.3 : 1;
  };

  // Nút điều hướng
  prevBtn.addEventListener('click', () => {
    const left = clamp(scroller.scrollLeft - getStep(), 0, maxLeft());
    scroller.scrollTo({ left, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    const left = clamp(scroller.scrollLeft + getStep(), 0, maxLeft());
    scroller.scrollTo({ left, behavior: 'smooth' });
  });

  // Cập nhật trạng thái khi scroll / resize
  scroller.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);

  // Click thumbnail -> đổi ảnh lớn (fade)
  thumbs.forEach(img => {
    img.addEventListener('click', () => {
      bigImage.classList.add('fade-out');
      const src = img.currentSrc || img.src;
      setTimeout(() => {
        bigImage.src = src;
        bigImage.classList.remove('fade-out');
      }, 200);
    });
  });

  // Khởi tạo
  updateButtons();
});
