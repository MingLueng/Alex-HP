document.querySelectorAll('.creation-interview-box').forEach(box => {
  const overwhole = box.querySelector('.interview-overwhole');
  const prevBtn = box.querySelector('.overwhole-btn.prev');
  const nextBtn = box.querySelector('.overwhole-btn.next');
  const items = overwhole.querySelectorAll('.overwhole-item img');
  const bigImage = box.querySelector('.creation-interview-left img');

  const itemsPerPage = 3;
  const gap = 15;
  const itemWidth = items[0].getBoundingClientRect().width + gap;
  const totalItems = items.length;
  const maxOffset = Math.max(0, (totalItems - itemsPerPage) * itemWidth - gap);

  let offset = 0;

  // Thêm transition mượt cho slider
  overwhole.style.transition = "transform 0.4s ease";

  function updateSlider() {
    if (offset > maxOffset) offset = maxOffset;
    if (offset < 0) offset = 0;
    overwhole.style.transform = `translateX(-${offset}px)`;
    
    // Update trạng thái nút
    prevBtn.disabled = offset === 0;
    nextBtn.disabled = offset >= maxOffset;
    prevBtn.style.opacity = offset === 0 ? 0.3 : 1;
    nextBtn.style.opacity = offset >= maxOffset ? 0.3: 1;
  }

  // Sự kiện click ảnh nhỏ -> đổi ảnh lớn kèm hiệu ứng fade
  items.forEach(img => {
    img.addEventListener('click', () => {
      // Thêm class fade-out
      bigImage.classList.add('fade-out');

      // Sau 400ms thì đổi ảnh và remove fade-out để fade-in
      setTimeout(() => {
        bigImage.src = img.src;
        bigImage.classList.remove('fade-out');
      }, 400);
    });
  });

  // Sự kiện click nút next / prev
  nextBtn.addEventListener('click', () => {
    offset += itemWidth;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    offset -= itemWidth;
    updateSlider();
  });

  // Khởi tạo
  updateSlider();
});
