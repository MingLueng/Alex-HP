// ./js/access-page-videos.js
(function () {
  if (window.PAGE !== 'access') return;

  function init() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.arrow-icon');
      if (!btn) return;

      const section = btn.closest('section.recruit-heading');
      if (!section) return;

      const wrapper = section.querySelector('.building-video .video-wrapper');
      if (!wrapper) return;

      const defaultImg = wrapper.querySelector('.default-building-img');
      const iframes   = wrapper.querySelectorAll('iframe');
      if (!iframes.length) return;

      // Lấy id mục tiêu từ data-target (ví dụ: "tyoVideo1")
      const targetId = (btn.dataset.target || '').trim();
      if (!targetId) return;

      const target = wrapper.querySelector(`#${CSS.escape(targetId)}`);
      if (!target) return;

      // Ẩn ảnh mặc định
      if (defaultImg) defaultImg.style.display = 'none';

      // Dừng & ẩn tất cả video trong wrapper hiện tại
      iframes.forEach((f) => {
        try {
          f.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'stopVideo', args: [] }),
            '*'
          );
        } catch {}
        f.style.display = 'none';
      });

      // Hiện video mục tiêu
      target.style.display = 'block';

      // Seek nếu có start
      const start = parseInt(btn.dataset.start || '0', 10);
      if (start > 0) {
        try {
          target.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'seekTo', args: [start, true] }),
            '*'
          );
        } catch {}
      }

      // Auto play
      try {
        target.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*'
        );
      } catch {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();

