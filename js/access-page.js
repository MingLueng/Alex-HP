
document.addEventListener("click", function (e) {
    const btn = e.target.closest(".arrow-icon");
    if (!btn) return;

    // Mỗi section hoạt động độc lập
    const section = btn.closest("section.recruit-heading");
    if (!section) return;

    const wrapper = section.querySelector(".building-video .video-wrapper");
    if (!wrapper) return;

    const defaultImg = wrapper.querySelector(".default-building-img");
    const iframes = wrapper.querySelectorAll("iframe"); // tất cả iframe video trong khung

    // Lấy ID iframe đích từ data-target (vd: data-target="officeVideo2")
    const targetId = (btn.dataset.target || "").replace(/^#/, "");
    if (!targetId) return;

    const target = wrapper.querySelector("#" + CSS.escape(targetId));
    if (!target) return;

    // Ẩn ảnh mặc định
    if (defaultImg) defaultImg.style.display = "none";

    // Dừng & ẩn tất cả iframe khác
    iframes.forEach((f) => {
      if (f === target) return;
      try {
        // Dừng video YouTube nếu có enablejsapi=1
        f.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "stopVideo", args: [] }),
          "*"
        );
      } catch {}
      f.style.display = "none";
    });

    // Hiện iframe đích
    target.style.display = "block";

    // Tua đến thời điểm chỉ định (tùy chọn)
    const start = parseInt(btn.dataset.start || "0", 10);
    if (start > 0) {
      try {
        target.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "seekTo", args: [start, true] }),
          "*"
        );
      } catch {}
    }

    // Tự động play (nếu muốn)
    try {
      target.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );
    } catch {}
  });



