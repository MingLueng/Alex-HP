$(function () {
  $('.interview-slider').each(function () {
    var $slider   = $(this);
    var $scroller = $slider.find('.interview-stack');
    if (!$scroller.length) return;

    // đảm bảo style cuộn (phòng khi thiếu CSS)
    $scroller.css({
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      display: 'flex',
      flexWrap: 'nowrap'
    });

    function getGapPx () {
      var el = $scroller[0];
      var cs = el ? window.getComputedStyle(el) : null;
      var g  = cs ? parseFloat(cs.gap || cs.columnGap || '0') : 0;
      return isNaN(g) ? 0 : g;
    }
    function getStep () {
      var $item = $scroller.find('.stack-item').first();
      if (!$item.length) return $scroller.innerWidth();
      return $item.outerWidth() + getGapPx();
    }
    function maxLeft () {
      return Math.max(0, $scroller[0].scrollWidth - $scroller.innerWidth());
    }
    function clamp (v, min, max) { return Math.min(Math.max(v, min), max); }

    // tự động cuộn
    function autoSlideOnce () {
      var max = maxLeft();
      if (max <= 1) return; // không có gì để cuộn
      var next = $scroller.scrollLeft() + getStep();
      if (next >= max - 1) next = 0; // quay về đầu
      $scroller.stop(true).animate({ scrollLeft: clamp(next, 0, max) }, 500);
    }

    // khởi động timer sau khi chắc chắn tính được kích thước
    var timer = null;
    function startAuto(){
      if (timer) return;
      if (maxLeft() > 1) {
        timer = setInterval(autoSlideOnce, 3000);
      }
    }
    function stopAuto(){
      if (timer){ clearInterval(timer); timer = null; }
    }

    // dừng khi hover/chạm – rời ra chạy tiếp
    $slider.on('mouseenter touchstart', stopAuto);
    $slider.on('mouseleave touchend', startAuto);

    // khi resize/ảnh load xong -> tính lại & (re)start
    var relaunch = function(){
      stopAuto();
      // delay nhỏ để browser layout xong
      setTimeout(startAuto, 100);
    };
    $(window).on('resize', relaunch);

    // nếu có ảnh trong slide, chờ ảnh load xong rồi chạy
    var $imgs = $scroller.find('img');
    var pending = $imgs.length;
    if (pending) {
      $imgs.each(function(){
        if (this.complete) { if (--pending === 0) relaunch(); }
        else $(this).one('load error', function(){ if (--pending === 0) relaunch(); });
      });
    } else {
      relaunch();
    }

    // ===== Popup mở khi click vào item =====
    $slider.on('click', function (e) {
      var $item = $(e.target).closest('.stack-item');
      if (!$item.length || !$slider.has($item).length) return;
      var sel = $item.data('popup');
      var $popup = sel ? $(sel) : $();
      if (!$popup.length) return;
      $('.interview-popup-overlay').removeClass('active');
      $popup.addClass('active');
      $('body').addClass('popup-open');
    });
  });

  $('.interview-popup-overlay').on('click', function (e) {
    if (e.target === this) {
      $(this).removeClass('active');
      $('body').removeClass('popup-open');
    }
  });
});