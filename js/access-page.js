 document.addEventListener('DOMContentLoaded', () => {
      // Click vào bất kỳ .arrow-icon nào
      document.addEventListener('click', (e) => {
        const icon = e.target.closest('.arrow-icon');
        if (!icon) return;

        // Lấy section chứa icon để thao tác đúng khung video của section đó
        const section = icon.closest('section.recruit-heading');
        if (!section) return;

        const wrapper = section.querySelector('.building-video .video-wrapper');
        if (!wrapper) return;

        const img = wrapper.querySelector('.default-building-img');
        const iframe = wrapper.querySelector('iframe');
        if (!iframe || !img) return;

        const videoId = icon.dataset.video;
        if (!videoId) return;

        const start = parseInt(icon.dataset.start || '0', 10);
        const url = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1${start ? `&start=${start}` : ''}`;

        // Ẩn ảnh, hiện video, set src (chỉ set khi khác để tránh reload không cần)
        img.style.display = 'none';
        iframe.style.display = 'block';
        if (iframe.src !== url) iframe.src = url;
      });
    });
