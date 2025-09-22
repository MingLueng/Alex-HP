
(function ($) {
  /* ========== helpers ========== */
  function readLang() {
    var p = new URLSearchParams(location.search);
    var v = (p.get('lang') || '').toLowerCase();
    return (v === 'ja' || v === 'vi' || v === 'en') ? v : null;
  }

  function setLangInUrl(rawHref, lang) {
    // Trả về href với đúng 1 tham số ?lang=
    var u = new URL(rawHref, location.origin);
    u.searchParams.set('lang', lang);
    return u.pathname + '?' + u.searchParams.toString() + u.hash;
  }

  function isInternal(href) {
    return href && href[0] !== '#' && !/^https?:\/\//i.test(href);
  }

  /* ========== boot ========== */
  $(function () {
    var currentLang = readLang();

    // 1) Mặc định tiếng Nhật trên trang chủ nếu thiếu ?lang=
    var path = location.pathname.replace(/^\/+/, '');
    var onHome = (path === '' || path === 'index.html');
    if (!currentLang && onHome) {
      location.replace(setLangInUrl('/index.html', 'ja'));
      return; // dừng ở đây vì sẽ chuyển trang
    }
    // Nếu vẫn không có lang (vào trang khác không có lang) → mặc định 'ja'
    if (!currentLang) currentLang = 'ja';

    // 2) Luôn hiển thị 2 cờ & trạng thái active
    var $flags = $('#polylang-2 .lang-item');
    $flags.show().removeClass('current-lang is-active')
          .filter('.lang-item-' + currentLang).addClass('is-active');

    // 3) Logo → về đúng trang chủ theo lang
    $('.logo-link').attr('href', setLangInUrl('/index.html', currentLang));

    // 4) Gắn lang duy nhất cho toàn bộ link menu (desktop + mobile)
    function applyLangToLinks($scope) {
      $scope.find('a').each(function () {
        var h = $(this).attr('href') || '';
        if (!isInternal(h)) return;
        $(this).attr('href', setLangInUrl(h, currentLang));
      });
      // Ẩn/hiện nhãn theo ngôn ngữ
      $scope.find('[data-lang]').each(function () {
        $(this).toggle($(this).data('lang') === currentLang);
      });
    }
    applyLangToLinks($('#primary-menu'));
    // Nếu mobile menu chưa có nội dung → copy từ desktop rồi set lang
    if (!$('#menu-main').children().length) {
      $('#menu-main').html($('#primary-menu').html());
    }
    applyLangToLinks($('#menu-main'));

    // 5) Click cờ: thay lang, giữ nguyên trang hiện tại (chỉ replace tham số)
    $(document).off('click.flag').on('click.flag', '.lang-btn', function (e) {
      e.preventDefault();
      var next = $(this).data('lang');
      if (next !== 'ja' && next !== 'vi' && next !== 'en') return;
      location.href = setLangInUrl(location.href, next);
    });
  });
})(jQuery);

