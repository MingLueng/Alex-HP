(function ($) {
  /* ====== i18n data ====== */
  var WORK_I18N = {
    ja: {
      hero: {
        left: '成長に終わりはない<br>常に先を見て<br>常に変わっていく<br>',
        info: '制作実績',
        heading: 'WORK',
        bg1: 'レイヤー 852.png',
        bg2: 'レイヤー 851.png',
        bg3: 'グループ 2.png'
      },
      tiles: {
        libTitle:'制作ライブラリ', 
        libAlt:'制作ライブラリ',
        libImg:'制作ライブラリ.png',
        libHref:'production-library-page.html',
        past:'≫≫ 過去開発実績はこちら',
        pastHref:'results-page.html',
        eventImg:'グループ 11.png',
        eventL1:'社内イベント', 
        eventL2:'ページはこちら',
        eventHref:'company-events-page.html'
      }
    },
    vi: {
      hero: {
        left: 'Không có điểm dừng cho tăng trưởng<br>luôn nhìn về phía trước<br>luôn đổi mới<br>',
        info: 'Sản phẩm',
        heading: 'WORK',
        bg1: 'レイヤー 852.png',
        bg2: 'レイヤー 851.png',
        bg3: 'グループ 2.png'
      },
      tiles: {
        libTitle:'Thư viện sản phẩm', libAlt:'Thư viện sản phẩm',
      libImg:'制作ライブラリ.png',
      libHref:'production-library-page.html',
      past:'≫≫ Xem thành tựu phát triển trước đây',
      pastHref:'results-page.html',
      eventImg:'グループ 11.png',
      eventL1:'Sự kiện nội bộ', eventL2:'Xem tại đây',
      eventHref:'company-events-page.html'
      }
    },
    en: {
      hero: {
        left: 'Growth never ends<br>Always looking ahead<br>Always evolving<br>',
        info: 'Portfolio',
        heading: 'WORK',
        bg1: 'レイヤー 852.png',
        bg2: 'レイヤー 851.png',
        bg3: 'グループ 2.png'
      },
      tiles: {
        libTitle:'Production Library', libAlt:'Production Library',
      libImg:'制作ライブラリ.png',
      libHref:'production-library-page.html',
      past:'≫≫ See past development results',
      pastHref:'results-page.html',
      eventImg:'グループ 11.png',
      eventL1:'Company Events', eventL2:'Go to page',
      eventHref:'company-events-page.html'
      }
    }
  };

  /* ====== helpers ====== */
  function curLang(){
    var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    return /^(ja|vi|en)$/.test(v)?v:'ja';
  }

  /* ====== Renders ====== */
  function renderWorkHero(lang){
    var t = (WORK_I18N[lang] || WORK_I18N.ja).hero;
    var ASSET = '../image/';

    // left slogan
    var $left = $('.about-left-text');
    if (!$left.find('h2').length) $left.append('<h2></h2>');
    $left.find('h2').html(t.left);

    // right labels
    $('.about-right-text .work-company-info').text(t.info);
    $('.about-right-text .work-heading').text(t.heading);

    // backgrounds
    $('.about-bg.bg1').css('background-image', 'url("'+ASSET+encodeURI(t.bg1)+'")');
    $('.about-bg.bg2').css('background-image', 'url("'+ASSET+encodeURI(t.bg2)+'")');
    $('.about-bg.bg3').css('background-image', 'url("'+ASSET+encodeURI(t.bg3)+'")');
  }

function withLang(href, lang){
  if (!href) return '#';
  try {
    var u = new URL(href, location.href);
    u.searchParams.set('lang', lang);
    return u.pathname + '?' + u.searchParams.toString() + u.hash;
  } catch(_) {
    // fallback cho href tương đối "thô"
    var sep = href.indexOf('?') === -1 ? '?' : '&';
    return href + sep + 'lang=' + encodeURIComponent(lang);
  }
}

function renderWorksSection(lang){
  var x = (WORK_I18N[lang] || WORK_I18N.ja).tiles;
  var ASSET2 = '../image/';

  // tile: Production Library
  $('.works-title').text(x.libTitle);
  $('.works-image-link')
    .attr('href', withLang(x.libHref, lang))                 // << gán href động
    .find('.works-main')
      .attr('alt', x.libAlt)
      .each(function(){ if (x.libImg) $(this).attr('src', ASSET2 + encodeURI(x.libImg)); });

  // text link: past results
  $('.works-text')
    .text(x.past)
    .attr('href', withLang(x.pastHref, lang));               // << gán href động

  // small button: Company Events
  $('.work-link.with-text')
    .attr('href', withLang(x.eventHref, lang))               // << gán href động
    .find('img').attr('src', ASSET2 + encodeURI(x.eventImg));
  $('.overlay-box-work .line5').text(x.eventL1);
  $('.overlay-box-work .line6').text(x.eventL2);
}

  /* ====== Boot ====== */
  $(function(){
    var l = curLang();
    renderWorkHero(l);
    renderWorksSection(l);

    // đổi ngôn ngữ
    $(document).on('click','.lang-btn',function(e){
      e.preventDefault();
      var next=(String($(this).data('lang'))||'').toLowerCase();
      if(!/^(ja|vi|en)$/.test(next)) return;

      var u=new URL(location.href);
      u.searchParams.set('lang', next);
      history.replaceState(null,'',u.pathname+'?'+u.searchParams+u.hash);

      renderWorkHero(next);
      renderWorksSection(next);
    });
  });
})(jQuery);












