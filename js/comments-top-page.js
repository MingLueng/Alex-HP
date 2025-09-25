/* ====== STAFF VOICES (submenu + slider + popup) — jQuery + i18n ====== */
(function ($) {
  'use strict';

  var IMG = '../image/';

  // --- i18n data ---
  var STAFF_I18N = {
    ja: {
      banner: { main: '社内イベント', sub: 'スタッフの声' },
      submenu: {
        jobsLabel: '募集職種', jobsHref: 'job-openings-page.html',
        voicesLabel: 'スタッフの声ＴＯＰ', voicesHref: 'comments-top-page.html'
      },
      items: [
        {
          id:'ro', dept: '企画開発部', role: 'プロデューサー', joined: '2011年入社',
          img: 'レイヤー 15.png', bg: 'レイヤー 15.png', link: 'voices-page.html'
        },
        {
          id:'kn', dept: '企画開発部', role: 'プロデューサー', joined: '2015年入社',
          img: 'レイヤー 9.png', bg: 'レイヤー 120.png', link: 'voices-page.html'
        },
      ]
    },
    vi: {
      banner: { main: 'Sự kiện nội bộ', sub: 'Tiếng nói nhân viên' },
      submenu: {
        jobsLabel: 'Vị trí tuyển dụng', jobsHref: 'job-openings-page.html',
        voicesLabel: 'Chia sẻ nhân viên (TOP)', voicesHref: 'comments-top-page.html'
      },
      items: [
        {
          id:'ro', dept: 'Phòng Kế hoạch', role: 'Nhà sản xuát', joined: 'Vào 2011',
          img: 'レイヤー 15.png', bg: 'レイヤー 15.png', link: 'voices-page.html'
        },
        {
          id:'kn', dept: 'Phòng Kế hoạch', role: 'Nhà sản xuất', joined: 'Vào 2015',
          img: 'レイヤー 9.png', bg: 'レイヤー 120.png', link: 'voices-page.html'
        },
      ]
    },
    en: {
      banner: { main: 'In-house Events', sub: 'Staff Voices' },
      submenu: {
        jobsLabel: 'Open Positions', jobsHref: 'job-openings-page.html',
        voicesLabel: 'Staff Voices (TOP)', voicesHref: 'comments-top-page.html'
      },
      items: [
        {
          id:'ro', dept: 'Planning Div.', role: 'Producer', joined: 'Joined 2011',
          img: 'レイヤー 15.png', bg: 'レイヤー 15.png', link: 'voices-page.html'
        },
        {
          id:'kn', dept: 'Planning Div.', role: 'Producer', joined: 'Joined 2015',
          img: 'レイヤー 9.png', bg: 'レイヤー 120.png', link: 'voices-page.html'
        },
      ]
    }
  };

  /* ---------- helpers ---------- */
function curLang(){
  var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
  return /^(ja|vi|en)$/.test(v)?v:'ja';
}
  function setLangInUrl (lang) {
    var u = new URL(location.href);
    u.searchParams.set('lang', lang);
    history.replaceState(null, '', u.pathname + '?' + u.searchParams.toString() + u.hash);
  }
  function markLang (lang) {
    $('.top-language .lang-item').removeClass('is-active');
    $('.top-language .lang-btn').removeAttr('aria-current');
    $('.top-language .lang-btn[data-lang="'+lang+'"]').attr('aria-current','true').closest('.lang-item').addClass('is-active');
  }
function withLang(href, lang){
  var u=new URL(href, location.href);
  u.searchParams.set('lang', lang);
  return u.pathname + '?' + u.searchParams.toString();
}
  /* ---------- render banner + submenu ---------- */
  function renderBanner (lang) {
    var b = (STAFF_I18N[lang]||STAFF_I18N.ja).banner;
    $('.submenu-tabs-3 .main-title-staff').text(b.main);
    $('.submenu-tabs-3 .subtitle-staff').text(b.sub);
  }
  function goAnchor(id){
    var el=document.getElementById(id); if(!el) return;
    var extra=parseFloat(el.getAttribute('data-anchor-offset')||'0')||0;
    var y=window.pageYOffset+el.getBoundingClientRect().top - fixedTop() - 8 - extra;
    $('html,body').stop(true).animate({scrollTop:Math.max(0,y)}, 350);
    try{ history.replaceState(null,'','#'+id); }catch(_){}
  }

  /* ================== RENDER SUBMENU ================== */
// === render submenu (sửa lại) ===
function renderRecruitSubmenu(lang){
  // NOTE: đổi RECRUIT_I18N thành đúng namespace của file hiện tại
  var t=(RECRUIT_I18N[lang]||RECRUIT_I18N.ja).submenu;

  var html =
    '<ul id="recruit-submenu">' +
      '<li><a class="sm-link sm-jobs"   href="'+ withLang(t.jobsHref,   lang) +'">'+ t.jobsLabel   +'</a></li>' +
      '<li><a class="sm-link sm-voices" href="'+ withLang(t.voicesHref, lang) +'">'+ t.voicesLabel +'</a></li>' +
    '</ul>';

  $('nav.submenu-tabs-1 .container').html(html);

  // nếu có anchor dạng #... thì cuộn (giữ nguyên logic cũ của bạn)
  $('nav.submenu-tabs-1').off('click.recruit').on('click.recruit','a.sm-jobs[href^="#"]',function(e){
    e.preventDefault();
    var id=(this.getAttribute('href')||'').slice(1); if(!id) return;
    goAnchor(id);
  });
}

// === gắn lang cho các nút trong hero/banner (nếu nút không phải <a>) ===
function wireCTAs(lang){
  // 1) Với các <a> hiện có trong trang: sửa href nếu trỏ tới 2 trang đích
  $('a[href]').each(function(){
    var href=this.getAttribute('href')||'';
    if (/comments-top-page\.html$/i.test(href)){
      this.href = withLang(href, lang);
    }
    if (/job-openings-page\.html$|recruit-page\.html$/i.test(href)){
      this.href = withLang(href, lang);
    }
  });

  // 2) Với button/div… dùng data-go (nếu bạn đang dùng button):
  //   - Thêm data-go="voices-top" cho nút “Chia sẻ nhân viên (TOP)”
  //   - Thêm data-go="jobs"       cho nút “Vị trí tuyển dụng”
  $(document)
    .off('click.goVoices').on('click.goVoices','[data-go="voices-top"]',function(e){
      e.preventDefault();
      location.href = withLang('comments-top-page.html', lang);
    })
    .off('click.goJobs').on('click.goJobs','[data-go="jobs"]',function(e){
      e.preventDefault();
      // chuyển sang trang jobs theo đúng ngôn ngữ (tùy bạn là recruit-page hay job-openings-page)
      location.href = withLang('job-openings-page.html', lang);
    });
}

  /* ---------- render slider + popup ---------- */
  function renderInterview (lang) {
    var L = (STAFF_I18N[lang] || STAFF_I18N.ja).items;

    // stack
    var stack = L.map(function(it,i){
      return '<div class="stack-item" data-popup="#interviewPopup-'+(i+1)+'">'
           +   '<div class="stack-name">'+it.dept+'</div>'
           +   '<img loading="lazy" src="'+encodeURI(IMG+it.img)+'" alt="">'
           + '</div>';
    }).join('');
    $('.creation-interview-section .interview-slider').html(
      '<button class="slide-interview-btn prev" type="button">&#10094;</button>'
      + '<div class="interview-stack">'+stack+'</div>'
      + '<button class="slide-interview-btn next" type="button">&#10095;</button>'
    );

    // popups
    var popupHtml = L.map(function (it, idx) {
      var link = new URL(it.link || 'voices-page.html', location.href);
      link.searchParams.set('lang', lang);
      if (it.id) link.searchParams.set('id', it.id);           // << thêm id
      return (
        '<div class="interview-popup-overlay" id="interviewPopup-' + (idx + 1) + '">' +
          '<div class="popup-content"><div class="popup-frame">' +
            '<div class="popup-title">' +
              '<a class="popup-name" href="' + link.pathname + '?' + link.searchParams.toString() + '">' + it.dept + '</a>' +
              '<p class="popup-producer">' + it.role + '</p>' +
              '<p class="popup-date">' + it.joined + '</p>' +
            '</div>' +
            '<img src="' + IMG + '長方形 437.png" class="popup-frame-top" alt="">' +
            '<img src="' + IMG + '長方形 438.png" class="popup-frame-bottom" alt="">' +
            '<img src="' + IMG + '長方形 439.png" class="popup-frame-left" alt="">' +
            '<img src="' + encodeURI(IMG + it.bg) + '" class="popup-frame-bg" alt="">' +
          '</div></div>' +
        '</div>'
      );
    }).join('');
    $('.creation-interview-section .interview-popup-overlay').remove();
    $('.creation-interview-section').append(popupHtml);

var $stack = $('.interview-stack');
var $prev  = $('.slide-interview-btn.prev');
var $next  = $('.slide-interview-btn.next');

$prev.add($next).css({display:'block',visibility:'visible',opacity:1,pointerEvents:'auto',zIndex:5});
$stack.css({overflowX:'auto',scrollBehavior:'smooth',WebkitOverflowScrolling:'touch'});
if (!document.getElementById('stack-hidebar')) {
  $('<style id="stack-hidebar">.interview-stack{-ms-overflow-style:none;scrollbar-width:none}.interview-stack::-webkit-scrollbar{display:none}</style>').appendTo(document.head);
}

var EPS = 2;
function step() {
  var $it = $stack.find('.stack-item').first();
  var gap = parseFloat($stack.css('gap')||0) || 0;
  return $it.length ? $it.outerWidth(true) + gap : $stack.width();
}
function maxLeft() {
  var s = $stack.get(0);
  return s ? Math.max(0, s.scrollWidth - s.clientWidth) : 0;
}
function curIndex() {
  var s = $stack.get(0);
  return s ? Math.round(s.scrollLeft / Math.max(1, step())) : 0;
}
function scrollToIndex(i, smooth) {
  var s = $stack.get(0); if (!s) return;
  var w = step();
  var maxI = Math.floor( maxLeft() / Math.max(1, w) );
  var idx  = Math.max(0, Math.min(i, maxI));
  var left = Math.max(0, Math.min(idx * w, maxLeft()));
  s.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  updateBtns();            // cập nhật ngay
  setTimeout(updateBtns, 320); // và sau khi smooth xong
}
function updateBtns() {
  var s = $stack.get(0); if (!s) return;
  var max = Math.max(0, maxLeft() - EPS);
  var atStart = s.scrollLeft <= EPS;
  var atEnd   = s.scrollLeft >= max;
  $prev.prop('disabled', atStart).css('opacity', atStart ? .45 : 1);
  $next.prop('disabled', atEnd)  .css('opacity', atEnd   ? .45 : 1);
}
$(document)
  .off('click.staffPrev').on('click.staffPrev', '.slide-interview-btn.prev', function (e) {
    e.preventDefault();
    scrollToIndex(curIndex() - 1, true);
  })
  .off('click.staffNext').on('click.staffNext', '.slide-interview-btn.next', function (e) {
    e.preventDefault();
    scrollToIndex(curIndex() + 1, true);
  })
  .off('scroll.staffStack').on('scroll.staffStack', '.interview-stack', updateBtns);

$(window).off('resize.staffStack').on('resize.staffStack', function () {
  // giữ nguyên index, căn lại theo bước & maxLeft mới
  scrollToIndex(curIndex(), false);
});

updateBtns();

// popup
$(document)
  .off('click.staffItem').on('click.staffItem', '.interview-stack .stack-item', function () {
    var sel = $(this).data('popup');
    $('.interview-popup-overlay').removeClass('active');
    $(sel).addClass('active');
    $('body').addClass('popup-open');
  })
  .off('click.staffPopup').on('click.staffPopup', '.interview-popup-overlay', function (e) {
    if (e.target !== this) return;
    $(this).removeClass('active');
    $('body').removeClass('popup-open');
  });

  }

  /* ---------- boot ---------- */
  $(function () {
    var lang = curLang();
    setLangInUrl(lang); markLang(lang);
    renderBanner(lang);  renderInterview(lang); renderRecruitHero(lang);      // nếu có
  renderRecruitSubmenu(lang);
    renderRecruitSection && renderRecruitSection(lang); // nếu có
  wireCTAs(l);  

     $(document).off('click.recruitLang').on('click.recruitLang','.lang-btn',function(e){
    e.preventDefault();
    var next=(String($(this).data('lang'))||'').toLowerCase();
    if(!/^(ja|vi|en)$/.test(next)) return;
    // cập nhật URL
    var u=new URL(location.href); u.searchParams.set('lang',next);
    history.replaceState(null,'',u.pathname+'?'+u.searchParams.toString()+u.hash);

    // re-render
    renderRecruitHero && renderRecruitHero(next);
     setLangInUrl(next); markLang(next);
    renderRecruitSubmenu(next);
    renderRecruitSection && renderRecruitSection(next);renderInterview(next);renderBanner(next);
    wireCTAs(next);          // <-- cập nhật lại các nút/link
  });
  });
})(jQuery);

