(function ($) {
  /* =============== I18N (text + media) =============== */
  var ASSET = '../image/';  
  var EVENTS_I18N = {
    ja: {
      pageTitle: '社内イベント',
      sections: {
        'brillant-1': {
          subtitle: '社内イベント',
          title: '2024年 12月 冬納会',
          paras: [
            '今年も年末に納会を行いました！',
            '内容企画から社員一丸となって進めます<br>今年はピザにフライドチキン、お寿司に色々なお酒も飲めて最高でした！<br>'
          ],
          media: {
            big: '画像_ABOUT.png',
            thumbs: ['長方形 6001.png','長方形 6001.png','長方形 6001.png','長方形 6001.png']
          }
        },
        'brillant-2': {
          subtitle: '社内研修',
          title: '2024年 7月 海外研修',
          paras: [
            '選考された6名でフィリピンに行ってきました！',
            '日本にはまだないカジノ。圧巻でした！<br>昔懐かしのスロット～改造されていてexciting(笑)<br>'
          ],
          media: {
            big: '写真.png',
            thumbs: ['画像_SERVICE.png','画像_RECRUIT.png','画像_WORKS.png']
          }
        }
      }
    },
    vi: {
      pageTitle: 'Sự kiện nội bộ',
      sections: {
        'brillant-1': {
          subtitle: 'Sự kiện nội bộ',
          title: 'Tháng 12/2024 – Tiệc cuối năm',
          paras: [
            'Năm nay chúng tôi lại tổ chức tiệc tổng kết cuối năm!',
            'Từ khâu nội dung đến triển khai đều do tập thể cùng thực hiện.<br>Năm nay có pizza, gà rán, sushi và nhiều loại đồ uống—tuyệt vời!<br>'
          ],
          media: {
            big: '画像_ABOUT.png',
            thumbs: ['長方形 6001.png','長方形 6001.png','長方形 6001.png','長方形 6001.png']
          }
        },
        'brillant-2': {
          subtitle: 'Đào tạo nội bộ',
          title: 'Tháng 7/2024 – Đào tạo ở nước ngoài',
          paras: [
            '6 thành viên được chọn đã tới Philippines!',
            'Casino (ở Nhật chưa có) thật choáng ngợp!<br>Những máy slot cổ điển được “độ” trông rất… exciting (cười).<br>'
          ],
          media: {
            big: '写真.png',
            thumbs: ['画像_SERVICE.png','画像_RECRUIT.png','画像_WORKS.png']
          }
        }
      }
    },
    en: {
      pageTitle: 'Company Events',
      sections: {
        'brillant-1': {
          subtitle: 'Company Events',
          title: 'Dec 2024 – Year-end Party',
          paras: [
            'We held our year-end party again this year!',
            'From planning to execution, everyone pitched in as one team.<br>We had pizza, fried chicken, sushi, and plenty of drinks—awesome!<br>'
          ],
          media: {
            big: '画像_ABOUT.png',
            thumbs: ['長方形 6001.png','長方形 6001.png','長方形 6001.png','長方形 6001.png']
          }
        },
        'brillant-2': {
          subtitle: 'Internal Training',
          title: 'Jul 2024 – Overseas Training',
          paras: [
            'Six selected members traveled to the Philippines!',
            'A casino not yet in Japan—overwhelming!<br>Classic slot machines were modded and quite exciting (lol).<br>'
          ],
          media: {
            big: '写真.png',
            thumbs: ['画像_SERVICE.png','画像_RECRUIT.png','画像_WORKS.png']
          }
        }
      }
    }
  };

  /* =============== Helpers =============== */
  function curLang(){
    var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    return /^(ja|vi|en)$/.test(v)?v:'ja';
  }
  function setLangInUrl(lang){
    var u=new URL(location.href);
    u.searchParams.set('lang',lang);
    history.replaceState(null,'',u.pathname+'?'+u.searchParams.toString()+u.hash);
  }
  function fixedTop(){
    return ['#masthead','.header-wrapper','header','.submenu-tabs-2','.top-fixed','.site-toolbar']
      .reduce(function(h,s){
        var el=document.querySelector(s); if(!el) return h;
        var cs=getComputedStyle(el), r=el.getBoundingClientRect();
        return (/(fixed|sticky)/.test(cs.position) && r.top<=0) ? h+el.offsetHeight : h;
      },0);
  }
  function applyScrollMargin(){
    var m=fixedTop()+8;
    $('.interview-heading,.anchored-section').css('scroll-margin-top', m+'px');
  }
  function smoothGo(id,push){
    var $t=$('#'+id); if(!$t.length) return;
    var y=window.pageYOffset+$t[0].getBoundingClientRect().top-fixedTop()-8;
    $('html,body').stop(true).animate({scrollTop:Math.max(0,y)},350);
    if(push!==false){ try{ history.replaceState(null,'','#'+id);}catch(_){ } }
  }

  /* =============== Render (text + media) =============== */
  function renderEventsI18n(lang){
    var t = EVENTS_I18N[lang] || EVENTS_I18N.ja;

    // header title
    $('.submenu-tabs-2 .main-title').text(t.pageTitle);

    // từng section
    $('.interview-heading[id]').each(function(){
      var id=this.id, data=t.sections[id] || (EVENTS_I18N.ja.sections[id]||null);
      if(!data) return;

      // text
      $(this).find('.subtitle-text-interview').html(data.subtitle);
      $(this).find('.creation-interview-title').html(data.title);
      var htmlParas=(data.paras||[]).map(function(p){return '<p>'+p+'</p>';}).join('');
      $(this).find('.creation-interview-content').html(htmlParas);

      // media (ảnh lớn + dải thumb)
      var media=data.media||{};
      var bigSrc = media.big ? (ASSET + encodeURI(media.big)) : '';
      var thumbs = Array.isArray(media.thumbs) ? media.thumbs : [];

      // ảnh lớn bên trái
      var $big = $(this).find('.creation-interview-left img').first();
      if($big.length && bigSrc){ $big.attr('src', bigSrc); }

      // build lại dải thumb cho chắc khớp data
      var $wrap = $(this).find('.interview-overwhole').first();
      if($wrap.length){
        var thumbsHtml = thumbs.map(function(fn){
          var src = ASSET + encodeURI(fn);
          return '<div class="overwhole-item"><img loading="lazy" src="'+src+'" alt="thumb"></div>';
        }).join('');
        $wrap.html(thumbsHtml);
      }
    });

    // sau khi thay DOM -> re-init carousel
    initOverwholeCarousels();
  }

  /* =============== Carousel (giữ nguyên luồng cũ) =============== */
  function initOverwholeCarousels(){
    // tránh gắn lặp handler global
    $(window).off('resize.ev');

    $('.creation-interview-box').each(function () {
      var $box      = $(this);
      var $scroller = $box.find('.interview-overwhole');
      var $prev     = $box.find('.overwhole-btn.prev');
      var $next     = $box.find('.overwhole-btn.next');
      var $thumbs   = $box.find('.overwhole-item img');
      var $bigImage = $box.find('.creation-interview-left img');

      if (!$scroller.length) return;

      $scroller.css({ overflowX:'auto', display:'flex', flexWrap:'nowrap', WebkitOverflowScrolling:'touch' });

      function maxLeft(){ return Math.max(0, $scroller[0].scrollWidth - $scroller.innerWidth()); }
      function getStep(){
        var cs = getComputedStyle($scroller[0]);
        var gap = parseFloat(cs.gap || cs.columnGap || '0') || 0;
        var $first = $scroller.find('.overwhole-item').first();
        return $first.length ? $first.outerWidth() + gap : $scroller.innerWidth();
      }
      function updateButtons () {
        if (!$prev.length || !$next.length) return;
        var max = maxLeft() - 1;
        var atStart = $scroller.scrollLeft() <= 0;
        var atEnd   = $scroller.scrollLeft() >= max;
        $prev.prop('disabled', atStart).css('opacity', atStart ? .35 : 1);
        $next.prop('disabled', atEnd).css('opacity',   atEnd   ? .35 : 1);
      }
      function go(dir){
        var left = Math.min(Math.max($scroller.scrollLeft() + dir * getStep(), 0), maxLeft());
        $scroller.stop(true).animate({ scrollLeft: left }, 320, updateButtons);
      }

      $prev.off('click.ev').on('click.ev', function(e){ e.preventDefault(); pauseAuto(1000); go(-1); });
      $next.off('click.ev').on('click.ev', function(e){ e.preventDefault(); pauseAuto(1000); go(+1); });
      $scroller.off('scroll.ev').on('scroll.ev', updateButtons);

      $thumbs.off('click.ev').on('click.ev', function(){
        if (!$bigImage.length) return;
        var src = this.currentSrc || this.src;
        $bigImage.addClass('fade-out');
        setTimeout(function(){ $bigImage.attr('src', src).removeClass('fade-out'); }, 200);
      });

      var speed = 0.35, rafId = null, pausedUntil = 0;
      function tick(){
        rafId = requestAnimationFrame(tick);
        if (Date.now() < pausedUntil) return;
        var max = maxLeft(); if (max <= 1) return;
        var nextLeft = $scroller.scrollLeft() + speed;
        if (nextLeft >= max - 0.5) nextLeft = 0;
        $scroller.scrollLeft(nextLeft);
      }
      function startAuto(){ if (!rafId) rafId = requestAnimationFrame(tick); }
      function stopAuto(){ if (rafId){ cancelAnimationFrame(rafId); rafId = null; } }
      function pauseAuto(ms){ pausedUntil = Date.now() + (ms || 1200); }

      $box.off('mouseenter.ev touchstart.ev pointerdown.ev')
          .on('mouseenter.ev touchstart.ev pointerdown.ev', function(){ pauseAuto(3600000); });
      $box.off('mouseleave.ev touchend.ev pointerup.ev')
          .on('mouseleave.ev touchend.ev pointerup.ev', function(){ pausedUntil = 0; });

      $(window).on('resize.ev', function(){ pauseAuto(500); });

      function initAuto(){
        updateButtons();
        startAuto();
      }
      var $imgs = $scroller.find('img'), pending = $imgs.length;
      if (pending){
        $imgs.each(function(){
          if (this.complete) { if (--pending===0) initAuto(); }
          else $(this).one('load error', function(){ if (--pending===0) initAuto(); });
        });
        setTimeout(function(){ if (rafId===null) initAuto(); }, 1200);
      } else {
        initAuto();
      }

      // cleanup nếu SPA
      $box.on('remove', function(){ stopAuto(); });
    });
  }

  /* =============== Boot =============== */
  $(function(){
    applyScrollMargin();

    // render lần đầu
    var l = curLang();
    renderEventsI18n(l);

    // đổi ngôn ngữ -> render lại text + media (ảnh)
    $(document).off('click.eventsLang').on('click.eventsLang', '.lang-btn', function(e){
      e.preventDefault();
      var next=(String($(this).data('lang'))||'').toLowerCase();
      if(!/^(ja|vi|en)$/.test(next)) return;
      setLangInUrl(next);
      renderEventsI18n(next); // text + ảnh + re-init carousel
    });

    // nếu có hash (brillant-1/2) thì scroll tới
    var init=(location.hash||'').slice(1);
    if(init && document.getElementById(init)){
      setTimeout(function(){ smoothGo(init,false); },0);
    }

    $(window).on('resize', applyScrollMargin);
  });
})(jQuery);
