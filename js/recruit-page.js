(function($){
  /* ===== i18n RECRUIT ===== */
  var ASSET = '../image/'; // đổi nếu thư mục ảnh khác
  var RECRUITBANNER_I18N = {
    ja: {
      left   : 'あなたの想像を超える未来を<br>私たちと共に創りませんか？<br>',
      info   : '事業内容',
      heading: 'リクルート',
      bg     : '画像_RECRUIT.png'
    },
    vi: {
      left   : 'Cùng chúng tôi<br>tạo nên tương lai vượt xa tưởng tượng của bạn<br>',
      info   : 'Tuyển dụng',
      heading: 'TUYỂN DỤNG',
      bg     : '画像_RECRUIT.png'
    },
    en: {
      left   : 'Ready to build a future<br>beyond imagination—together?<br>',
      info   : 'Recruit',
      heading: 'RECRUIT',
      bg     : '画像_RECRUIT.png'
    }
  };

  /* ===== helpers chung (giống luồng trước) ===== */
  function curLang(){
    var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    return /^(ja|vi|en)$/.test(v)?v:'ja';
  }
  function setLangInUrl(lang){
    var u=new URL(location.href);
    u.searchParams.set('lang',lang);
    history.replaceState(null,'',u.pathname+'?'+u.searchParams.toString()+u.hash);
  }

  /* ===== render RECRUIT hero ===== */
  function renderRecruitHero(lang){
    var t = RECRUITBANNER_I18N[lang] || RECRUITBANNER_I18N.ja;

    // text
    $('.recruit-left-text h2').html(t.left);
    $('.about-right-text .recruit-company-info').text(t.info);
    $('.about-right-text .recruit-heading-info').text(t.heading);

    // bg
    if (t.bg){
      $('.service-bg').css('background-image','url("'+ ASSET + encodeURI(t.bg) +'")');
    }
  }

  /* ===== boot ===== */
  $(function(){
    var l = curLang();
    renderRecruitHero(l);

    // đổi ngôn ngữ: giữ nguyên hash, chỉ thay lang và re-render
    $(document).off('click.recruitLang').on('click.recruitLang','.lang-btn',function(e){
      e.preventDefault();
      var next=(String($(this).data('lang'))||'').toLowerCase();
      if(!/^(ja|vi|en)$/.test(next)) return;
      setLangInUrl(next);
      renderRecruitHero(next);
    });
  });

    var ASSET = '../image/';

  // i18n submenu + section + danh sách job (render ảnh + text + link)
  var RECRUIT_I18N = {
    ja: {
      submenu: {
        jobsLabel: '募集職種', jobsHref: 'recruit-page.html',
        voicesLabel: 'スタッフの声ＴＯＰ', voicesHref: 'comments-top-page.html'
      },
      subtitle: '募集職種',
      jobs: [
        {
          img: '写真.png', alt: 'Alex',
          title: 'プロデューサー・映像ディレクター',
          html: '<p><strong>プロデューサー</strong><br>社外案件の予算・進行管理、社内外のリソース管理などプロデュース業務をお任せします。</p>'
              + '<p><strong>映像ディレクター</strong><br>ゲーム、CM、ぱちんこ・パチスロなどの映像企画・開発のディレクションをお任せします。</p>'
              + '<ul><li>映像制作チームのまとめ、制作進行管理。</li><li>協力会社とのディレクション。</li><li>映像品質管理</li></ul>',
          btnText: '詳細はこちら', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-301.png', alt: 'Alex',
          title: 'エフェクトデザイナー・コンポジター',
          html: '<p>ゲーム、CM、ぱちんこ・パチスロなどの映像制作をお任せします。<br>2D/3Dデザイナーと連携し、より良く見せるためのエフェクト制作～最終コンポジットを担当します。</p>',
          btnText: '詳細はこちら', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-205.png', alt: 'Alex',
          title: '2DCGデザイナー',
          html: '<p>ゲーム、CM、ぱちんこ・パチスロなどの映像制作。<br>背景・キャラ・UI・ロゴなど2D素材制作を担当。<br>絵コンテや見せ方検討に関わる場合もあります。※得意分野が1つあればOK。</p>',
          btnText: '詳細はこちら', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-501.png', alt: 'Alex',
          title: '3DCGデザイナー',
          html: '<p>小物・キャラ・背景・ロゴなどの3Dモデリングからコンポジットまで。<br>コンテからのシーン構築など演出企画に関わることも。※得意分野が1つあればOK。</p>',
          btnText: '詳細はこちら', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-220.png', alt: 'Alex',
          title: 'プログラマー',
          html: '<p>大手メーカー様からの直依頼案件で、演出企画/映像企画/出玉企画と連携しながらプログラム開発を担当します。</p>',
          btnText: '詳細はこちら', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-491.png', alt: 'Alex',
          title: '企画設計',
          html: '<p>受託によるぱちんこ・パチスロ開発/管理に携わります。<br>新アイデア創出だけでなく、完成まで司令塔として各担当と連携して進行。情熱が命の仕事です。</p>',
          btnText: '詳細はこちら', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-500.png', alt: 'Alex',
          title: '出玉設計',
          html: '<p>パチスロ機の出玉数・機械割などの計算。<br>数学/統計の基礎知識がある方（数学に強い方）に最適です。</p>',
          btnText: '詳細はこちら', btnHref: 'job-openings-page.html'
        }
      ]
    },
    vi: {
      submenu: {
        jobsLabel: 'Vị trí tuyển dụng', jobsHref: 'recruit-page.html',
        voicesLabel: 'Chia sẻ nhân viên (TOP)', voicesHref: 'comments-top-page.html'
      },
      subtitle: 'Vị trí tuyển dụng',
      jobs: [
        {
          img: '写真.png', alt: 'Alex',
          title: 'Producer / Director hình ảnh',
          html: '<p><strong>Producer</strong><br>Quản lý ngân sách & tiến độ dự án, điều phối nguồn lực trong/ngoài công ty.</p>'
              + '<p><strong>Director hình ảnh</strong><br>Lên kế hoạch & chỉ đạo sản xuất cho game, TVC, pachinko/pachislot.</p>'
              + '<ul><li>Quản lý tiến độ & đội ngũ sản xuất video</li><li>Làm việc với đối tác</li><li>Kiểm soát chất lượng hình ảnh</li></ul>',
          btnText: 'Xem chi tiết', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-301.png', alt: 'Alex',
          title: 'Effect Designer / Compositor',
          html: '<p>Tham gia sản xuất video cho game, TVC, pachinko/pachislot.<br>Phối hợp 2D/3D để làm hiệu ứng và compositing hoàn thiện.</p>',
          btnText: 'Xem chi tiết', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-205.png', alt: 'Alex',
          title: '2D CG Designer',
          html: '<p>Sản xuất 2D (background, nhân vật, UI, logo).<br>Có thể tham gia storyboard & cách trình bày. Chỉ cần mạnh một mảng là được.</p>',
          btnText: 'Xem chi tiết', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-501.png', alt: 'Alex',
          title: '3D CG Designer',
          html: '<p>Modeling đồ vật/nhân vật/bối cảnh/logo đến compositing.<br>Đôi lúc tham gia dựng cảnh theo storyboard. Chỉ cần mạnh một mảng là được.</p>',
          btnText: 'Xem chi tiết', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-220.png', alt: 'Alex',
          title: 'Lập trình viên',
          html: '<p>Làm việc trực tiếp với hãng lớn; phát triển chương trình phối hợp team kế hoạch/ảnh/điểm thưởng.</p>',
          btnText: 'Xem chi tiết', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-491.png', alt: 'Alex',
          title: 'Thiết kế/điều phối kế hoạch',
          html: '<p>Tham gia phát triển & quản lý dự án pachinko/pachislot theo hợp đồng.<br>Không chỉ ý tưởng mà còn điều phối đến khi hoàn thành.</p>',
          btnText: 'Xem chi tiết', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-500.png', alt: 'Alex',
          title: 'Thiết kế payout',
          html: '<p>Tính toán payout/tỷ lệ máy pachislot.<br>Phù hợp với người có nền tảng Toán & Thống kê.</p>',
          btnText: 'Xem chi tiết', btnHref: 'job-openings-page.html'
        }
      ]
    },
    en: {
      submenu: {
        jobsLabel: 'Open Positions', jobsHref: 'recruit-page.html',
        voicesLabel: 'Staff Voices (TOP)', voicesHref: 'comments-top-page.html'
      },
      subtitle: 'Open Positions',
      jobs: [
        {
          img: '写真.png', alt: 'Alex',
          title: 'Producer / Video Director',
          html: '<p><strong>Producer</strong><br>Own budget & schedule control, coordinate internal/external resources.</p>'
              + '<p><strong>Video Director</strong><br>Lead planning & production for games, TVCs, and pachinko/pachislot visuals.</p>'
              + '<ul><li>Manage video team & timeline</li><li>Coordinate partner studios</li><li>Visual quality control</li></ul>',
          btnText: 'See details', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-301.png', alt: 'Alex',
          title: 'Effect Designer / Compositor',
          html: '<p>Create effects & final compositing for games, TVCs, pachinko/pachislot, in collaboration with 2D/3D teams.</p>',
          btnText: 'See details', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-205.png', alt: 'Alex',
          title: '2D CG Designer',
          html: '<p>Produce backgrounds, characters, UI, logos. May join storyboarding & presentation. One strong area is enough.</p>',
          btnText: 'See details', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-501.png', alt: 'Alex',
          title: '3D CG Designer',
          html: '<p>From modeling (props/characters/backgrounds/logos) to compositing. Sometimes build scenes from storyboards.</p>',
          btnText: 'See details', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-220.png', alt: 'Alex',
          title: 'Programmer',
          html: '<p>Work directly with major manufacturers; develop programs in sync with planning/visual/payout teams.</p>',
          btnText: 'See details', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-491.png', alt: 'Alex',
          title: 'Planning / Spec Design',
          html: '<p>Contract-based pachinko/pachislot development & management. Drive the project as a hub until completion.</p>',
          btnText: 'See details', btnHref: 'job-openings-page.html'
        },
        {
          img: '写真-500.png', alt: 'Alex',
          title: 'Payout Design',
          html: '<p>Calculate payout / machine rate for pachislot. Best for those strong in math and statistics.</p>',
          btnText: 'See details', btnHref: 'job-openings-page.html'
        }
      ]
    }
  };

  /* ================== HELPERS (giống luồng trước) ================== */
  function curLang(){ var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase(); return /^(ja|vi|en)$/.test(v)?v:'ja'; }
  function withLang(href, lang){
  var u=new URL(href, location.href);
  u.searchParams.set('lang', lang);
  return u.pathname + '?' + u.searchParams.toString();
}
  function setLangInUrl(lang){
    var u=new URL(location.href);
    u.searchParams.set('lang',lang);
    history.replaceState(null,'',u.pathname+'?'+u.searchParams.toString()+u.hash);
  }
  function fixedTop(){
    var h=0;
    ['#masthead','.header-wrapper','header','.submenu-tabs-2','.submenu-tabs-1','.top-fixed','.site-toolbar'].forEach(function(s){
      var el=document.querySelector(s); if(!el) return;
      var cs=getComputedStyle(el), r=el.getBoundingClientRect();
      if((cs.position==='fixed'||cs.position==='sticky') && r.top<=0) h+=el.offsetHeight;
    });
    return h;
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

  /* ================== RENDER SECTION ================== */
function renderRecruitSection(lang){
  // Thứ tự key của trang job-openings-page (hash đích), giữ nguyên thứ tự như danh sách ở recruit-page
  var DETAIL_KEYS = [
    'producer-video-director',
    'effects-designer-compositor',
    '2DCG-designer',
    '3DCG-designer',
    'programmer',
    'planning-design',
    'ball-output-design'
  ];

  var t = RECRUIT_I18N[lang] || RECRUIT_I18N.ja;
  var $sec = $('.recruit-heading').first();
  if(!$sec.length) return;

  // đảm bảo id + scroll margin
  $sec.attr('id','jobs').addClass('anchored-section');
  var m = fixedTop()+8;
  $sec.css('scroll-margin-top', m+'px');

  // Subtitle i18n
  $('.subtitle-text-recruit').text(t.subtitle);

  // Build boxes từ data (ảnh + text + link)
  var boxesHtml = t.jobs.map(function(j, idx){
    var img = j.img ? (ASSET + encodeURI(j.img)) : '';

    // ---> TẠO LINK CHI TIẾT ĐÚNG NGÔN NGỮ + HASH ID CẦN ĐẾN
    var baseHref = j.btnHref || 'job-openings-page.html';
    var u = new URL(baseHref, location.href);
    u.searchParams.set('lang', lang);
    var hashKey = DETAIL_KEYS[idx] || '';
    if (hashKey) u.hash = hashKey;

    return ''
      + '<div class="creation-recruit-box">'
      + '  <div class="creation-recruit-left">'
      + '    <div class="image-frame">'
      + '      <img loading="lazy" src="'+img+'" alt="'+(j.alt||'')+'">'
      + '    </div>'
      + '  </div>'
      + '  <div class="creation-recruit-right">'
      + '    <h4 class="creation-recruit-title">'+ j.title +'</h4>'
      + '    <div class="creation-recruit-content">'+ j.html +'</div>'
      +      (j.btnHref ? ('<a href="'+ u.pathname + (u.search?('?'+u.searchParams.toString()):'') + (u.hash?('#'+hashKey):'') +'" class="recruit-detail-btn" data-target="'+hashKey+'">'+ j.btnText +'</a>') : '')
      + '  </div>'
      + '</div>';
  }).join('');

  $sec.find('> .container').html(boxesHtml);
}

  /* ================== BOOT ================== */
  $(function(){
  var l = curLang();
  renderRecruitSubmenu(l);
  renderRecruitSection(l);
  renderRecruitSection && renderRecruitSection(l); // nếu có
  wireCTAs(l);               // <-- quan trọng

  // đổi ngôn ngữ (giữ hash, đồng thời cập nhật link chi tiết trong danh sách)
  $(document).off('click.recruitLang').on('click.recruitLang','.lang-btn',function(e){
    e.preventDefault();
    var next=(String($(this).data('lang'))||'').toLowerCase();
    if(!/^(ja|vi|en)$/.test(next)) return;
        var u=new URL(location.href); u.searchParams.set('lang',next);
    history.replaceState(null,'',u.pathname+'?'+u.searchParams.toString()+u.hash);

    // re-render
    renderRecruitHero && renderRecruitHero(next);
    wireCTAs(next);
    setLangInUrl(next);
    renderRecruitSection(next); // <-- re-render để các nút "詳細はこちら" mang ?lang=next và hash đúng
  });

  // nếu có hash #jobs khi mở trang -> cuộn chuẩn (sau render)
  var init=(location.hash||'').slice(1);
  if(init==='jobs'){ setTimeout(function(){ goAnchor('jobs'); }, 0); }

  // update scroll-margin khi resize (đổi chiều cao header)
  $(window).on('resize', function(){
    var m=fixedTop()+8;
    $('.recruit-heading.anchored-section').css('scroll-margin-top', m+'px');
  });
});
})(jQuery);