(function($){
var heroText = {
  ja: {
    title: '想像×理念<br>無限の可能性',
    desc : '企画、映像制作、プログラム開発まで一貫して手掛ける当社は、<br>'
         + 'クリエイティブとテクノロジーの融合により常に新しい価値を生み出します。<br>'
         + '自由な発想と柔軟な働き方を大切にし、<br>'
         + 'クリエイター一人ひとりの成長を全力で支援。<br>',
    banner:{ 
      line4:'企画／映像制作／プログラマー', 
      line5:'積極採用中！', 
      line6:'採用ページはこちら' }
      },
  vi: {
    title: 'TƯỞNG TƯỢNG × LÝ NIỆM<br>KHẢ NĂNG VÔ HẠN',
    desc : 'Công ty chúng tôi thực hiện trọn gói từ lập kế hoạch, sản xuất video đến phát triển chương trình.<br>'
         + 'Sự kết hợp giữa sáng tạo và công nghệ luôn tạo ra giá trị mới.<br>'
         + 'Chúng tôi coi trọng ý tưởng tự do và cách làm việc linh hoạt,<br>'
         + 'luôn hỗ trợ hết mình cho sự phát triển của từng cá nhân sáng tạo.<br>',
    banner:{ 
      line4:'Lên kế hoạch／Sản xuất video／Lập trình viên', 
      line5:'Đang tích cực tuyển dụng!', 
      line6:'Trang tuyển dụng ở đây' 
      }
  },
  en: {
    title: 'IMAGINATION × VISION<br>INFINITE POSSIBILITIES',
    desc : 'Our company handles everything from planning, video production to program development.<br>'
         + 'The fusion of creativity and technology constantly creates new value.<br>'
         + 'We value free thinking and flexible working styles,<br>'
         + 'and fully support the growth of each creator.<br>',
    banner:{ 
      line4:'Planning / Video Production / Programmer', 
      line5:'We are hiring!', 
      line6:'Check out our recruitment page' 
    }
  }
};

/* --- 2. Helpers --- */
function getLang(){
  var u = new URL(window.location.href);
  var v = (u.searchParams.get('lang') || '').toLowerCase();
  return (v==='ja'||v==='vi'||v==='en') ? v : null;
}
function setLangOnCurrentUrl(lang){
  var u = new URL(window.location.href);
  u.searchParams.set('lang', lang);
  history.replaceState(null, '', u.pathname + '?' + u.searchParams.toString() + u.hash);
}
function urlWithLang(href, lang){
  var u = new URL(href, window.location.origin);
  u.searchParams.set('lang', lang);
  return u.pathname + '?' + u.searchParams.toString() + u.hash;
}

/* --- 3. Render hero theo lang + toggle đúng banner --- */
function renderHero(lang){
  var t = heroText[lang] || heroText.ja;

  // Title + mô tả
  $('.hero .title').html(t.title);
  $('.hero .description').html(t.desc);

  // Gán nội dung cho cả 3 box trước, để tránh rỗng
  ['','vi','en'].forEach(function(cls){
    var sel = '.recruit-banner .overlay-box-side' + (cls?'.'+cls:'');
    var $b = $(sel);
    $b.find('.line4').html(t.banner.line4);
    $b.find('.line5').html(t.banner.line5);
    $b.find('.line6').html(t.banner.line6);
  });

  // Chỉ hiển thị box đúng ngôn ngữ
  $('.recruit-banner .overlay-box-side').hide();        // ẩn hết
  if (lang === 'vi') {
    $('.recruit-banner .overlay-box-side.vi').show();
  } else if (lang === 'en') {
    $('.recruit-banner .overlay-box-side.en').show();
  } else {
    // ja mặc định
    $('.recruit-banner .overlay-box-side').not('.vi,.en').show();
  }
}

/* --- 4. Boot --- */
$(function(){
  var lang = getLang();

  // Nếu thiếu ?lang → mặc định ja và ghi vào URL (không reload)
  if (!lang){
    lang = 'ja';
    setLangOnCurrentUrl(lang);
  }

  renderHero(lang);

  // Click cờ → đổi lang, cập nhật URL & nội dung (không reload)
  $(document).on('click', '.lang-btn', function(e){
    e.preventDefault();
    var next = ($(this).data('lang') || '').toLowerCase();
    if (!heroText[next]) return;
    setLangOnCurrentUrl(next);
    renderHero(next);
  });
});

var newsI18n = {
  ja: {
    title: 'ニュース',
    items: [
      { date: '2025.04.01', content: '白いエリア内で縦スクロール<br>更新履歴<br>更新履歴' },
      { date: '2025.03.01', content: '下に行くほど古い内容' },
      { date: '2025.03.02', content: '白いエリア内で縦スクロール<br>更新履歴<br>更新履歴' },
      { date: '2025.03.03', content: '下に行くほど古い内容' },
      { date: '2025.03.04', content: '白いエリア内で縦スクロール<br>更新履歴<br>更新履歴' }
    ],
    side: {
      events: { line1: '社内イベント', line2: 'ページはこちら' },
      voices: { line1: 'スタッフの声', line2: 'ページはこちら' }
    }
  },
  vi: {
    title: 'TIN TỨC',
    items: [
      { date: '2025.04.01', content: 'Cuộn dọc trong vùng trắng<br>Lịch sử cập nhật<br>Lịch sử cập nhật' },
      { date: '2025.03.01', content: 'Càng xuống dưới càng cũ' },
      { date: '2025.03.02', content: 'Cuộn dọc trong vùng trắng<br>Lịch sử cập nhật<br>Lịch sử cập nhật' },
      { date: '2025.03.03', content: 'Càng xuống dưới càng cũ' },
      { date: '2025.03.04', content: 'Cuộn dọc trong vùng trắng<br>Lịch sử cập nhật<br>Lịch sử cập nhật' }
    ],
    side: {
      events: { line1: 'Sự kiện nội bộ', line2: 'Xem tại đây' },
      voices: { line1: 'Tiếng nói nhân viên', line2: 'Xem tại đây' }
    }
  },
  en: {
    title: 'NEWS',
    items: [
      { date: '2025.04.01', content: 'Vertical scroll in the white area<br>Update log<br>Update log' },
      { date: '2025.03.01', content: 'Older items as you go down' },
      { date: '2025.03.02', content: 'Vertical scroll in the white area<br>Update log<br>Update log' },
      { date: '2025.03.03', content: 'Older items as you go down' },
      { date: '2025.03.04', content: 'Vertical scroll in the white area<br>Update log<br>Update log' }
    ],
    side: {
      events: { line1: 'Company events', line2: 'See page' },
      voices: { line1: 'Staff voices',    line2: 'See page' }
    }
  }
};

/* --- NEWS: renderer --- */
function renderNews(lang){
  var d = newsI18n[lang] || newsI18n.ja;

  // Tiêu đề
  $('.news-title').text(d.title);

  // Danh sách
  var html = d.items.map(function(it){
    return (
      '<div class="news-item">' +
        '<div class="news-date">'+ it.date +'</div>' +
        '<div class="news-content">'+ it.content +'</div>' +
      '</div>'
    );
  }).join('');
  $('#newsList').html(html);

  // Box bên phải
  var $links = $('.news-side .side-link.with-text');
  // Link 1: Company events
  $links.eq(0)
    .attr('href', urlWithLang('company-events-page.html', lang))
    .find('.line1').text(d.side.events.line1).end()
    .find('.line2').text(d.side.events.line2);
  // Link 2: Staff voices
  $links.eq(1)
    .attr('href', urlWithLang('comments-top-page.html', lang))
    .find('.line1').text(d.side.voices.line1).end()
    .find('.line2').text(d.side.voices.line2);
}

/* --- Boot: gọi cùng với renderHero --- */
$(function(){
  var lang = getLang() || 'ja';
  setLangOnCurrentUrl(lang); // đảm bảo có ?lang= ngay cả ở trang con

  renderHero(lang);
  renderNews(lang);

  // Đổi cờ → cập nhật cả Hero + News (không reload)
  $(document).off('click.flag').on('click.flag', '.lang-btn', function(e){
    e.preventDefault();
    var next = ($(this).data('lang')||'').toLowerCase();
    if (next!=='ja' && next!=='vi' && next!=='en') return;

    setLangOnCurrentUrl(next);
    renderHero(next);
    renderNews(next);
  });
});

/* ===== Top Page Menu I18n ===== */
var topMenuI18n = {
  ja: {
    about:   { sub: '会社情報',   title: 'について'   },
    service: { sub: '事業内容',   title: 'サービス' },
    works:   { sub: '制作実績',   title: '製品'   },
    recruit: { sub: '採用情報',   title: 'リクルート' },
    access:  { sub: '会社案内',   title: 'アクセス'  },
    contact: { sub: 'お問い合わせ', title: '接触' }
  },
  vi: {
    about:   { sub: 'Thông tin công ty', title: 'Giới thiệu'  },
    service: { sub: 'Dịch vụ',           title: 'Dịch vụ'     },
    works:   { sub: 'Dự án',             title: 'Dự án'       },
    recruit: { sub: 'Tuyển dụng',        title: 'Tuyển dụng'  },
    access:  { sub: 'Hướng dẫn',         title: 'Truy cập'    },
    contact: { sub: 'Liên hệ',           title: 'Liên hệ'     }
  },
  en: {
    about:   { sub: 'Company Info',     title: 'ABOUT'   },
    service: { sub: 'Our Services',     title: 'SERVICE' },
    works:   { sub: 'Portfolio',        title: 'WORKS'   },
    recruit: { sub: 'Careers',          title: 'RECRUIT' },
    access:  { sub: 'Access / Guide',   title: 'ACCESS'  },
    contact: { sub: 'Contact Us',       title: 'CONTACT' }
  }
};

/* Map theo thứ tự các thẻ <a.menu-item> trong .menu-grid */
var topMenuOrder = [
  { key: 'about',   file: 'about-page.html'   },
  { key: 'service', file: 'service-page.html' },
  { key: 'works',   file: 'works-page.html'    },
  { key: 'recruit', file: 'recruit-page.html' },
  { key: 'access',  file: 'access-page.html'  },
  { key: 'contact', file: 'contact-page.html' }
];

function renderTopMenu(lang){
  var dict = topMenuI18n[lang] || topMenuI18n.ja;

  $('.top-page-menu .menu-grid > a.menu-item').each(function(i){
    var def = topMenuOrder[i];
    if (!def) return;

    // Cập nhật nhãn
    var info = dict[def.key] || {};
    $(this).find('.sub-title').text(info.sub || '');
    $(this).find('.menu-title').text(info.title || '');

    // Gắn ?lang= vào link
    var href = def.file; // dùng file chuẩn theo mapping trên
    $(this).attr('href', urlWithLang(href, lang));

    // (tuỳ chọn) cập nhật alt ảnh cho chuẩn i18n
    var $img = $(this).find('.about-avatar');
    if ($img.length && info.title){
      $img.attr('alt', info.title);
    }
  });
}

/* --- Boot / hoặc nơi bạn đổi ngôn ngữ --- */
$(function(){
  var lang = (function(){
    var u = new URL(location.href);
    var v = (u.searchParams.get('lang')||'').toLowerCase();
    return (v==='ja'||v==='vi'||v==='en') ? v : 'ja';
  })();

  renderTopMenu(lang);

  // Nếu bạn đã có handler đổi cờ, chỉ cần gọi lại:
  $(document).off('click.topmenuFlag').on('click.topmenuFlag', '.lang-btn', function(e){
    e.preventDefault();
    var next = ($(this).data('lang')||'').toLowerCase();
    if (next!=='ja' && next!=='vi' && next!=='en') return;

    // cập nhật URL hiện tại để có ?lang=next (không reload nếu bạn muốn)
    var u = new URL(location.href);
    u.searchParams.set('lang', next);
    history.replaceState(null, '', u.pathname + '?' + u.searchParams.toString() + u.hash);

    // render lại top menu (và các khối khác nếu có)
    renderTopMenu(next);
  });
});
  if (!$('html').hasClass('page-top')) return;

  var $list  = $('#newsList');
  if (!$list.length) return;

  var step = 0;
  var max  = 0;

  function layout() {
    var $items = $list.children('.news-item');
    step = ($items.eq(0).outerHeight(true) || 0);
    max  = Math.max(0, $items.length - 2); // hiển thị 2 item
    // vùng cuộn là chính #newsList
    $list.css({ height: step * 2, overflowY: 'hidden' });
  }

  // expose cho lang.js gọi lại sau khi render tin
  window.relayoutNewsBox = function(){
    // reset về đầu rồi đo lại
    $list.scrollTop(0);
    layout();
  };

  function idx() {
    return Math.round(($list.scrollTop() || 0) / (step || 1));
  }

  function go(i) {
    i = Math.max(0, Math.min(i, max));
    $list.stop(true).animate({ scrollTop: i * step }, 400);
  }

  // Nút ▲ ▼
  $('.scroll-btn.up').on('click',   function (e) { e.preventDefault(); go(idx() - 1); });
  $('.scroll-btn.down').on('click', function (e) { e.preventDefault(); go(idx() + 1); });

  // Khởi tạo + re-layout khi resize / ảnh load
  layout();
  $(window).on('load resize', function () { setTimeout(layout, 50); });
  $list.find('img').one('load', layout);

  // AUTO SLIDE
  var dir = 1; // 1 = xuống, -1 = lên
  setInterval(function () {
    var i = idx() + dir;
    if (i >= max) { i = max; dir = -1; }
    else if (i <= 0) { i = 0; dir = 1; }
    go(i);
  }, 3000);
})(jQuery);
