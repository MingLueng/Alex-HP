(function($){
  var MENU = [
    {id:'message', label:{ja:'社長メッセージ', vi:'Thông điệp CEO', en:'CEO Message'}},
    {id:'company', label:{ja:'会社概要',       vi:'Giới thiệu công ty', en:'Company Overview'}},
    {id:'history', label:{ja:'沿革',           vi:'Lịch sử',            en:'History'}},
    {id:'org',     label:{ja:'組織図',         vi:'Sơ đồ tổ chức',      en:'Organization Chart'}},
    {id:'clients', label:{ja:'主要取引先',     vi:'Khách hàng tiêu biểu',en:'Key Clients'}}
  ];
  var $nav = $('nav.submenu-tabs');

  function lang(){ var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase(); return /^(ja|vi|en)$/.test(v)?v:'ja'; }
  function fixedTop(){
    var h=0; ['#masthead','.header-wrapper','header','nav.submenu-tabs','.top-fixed','.site-toolbar'].forEach(function(s){
      var e=document.querySelector(s); if(!e) return; var cs=getComputedStyle(e), r=e.getBoundingClientRect();
      if((cs.position==='fixed'||cs.position==='sticky') && r.top<=0) h+=e.offsetHeight;
    }); return h;
  }
  function render(){
    $('#submenu-list').html(MENU.map(function(m){return `<li><a href="#${m.id}">${m.label[lang()]}</a></li>`;}).join(''));
    applyScrollMargin();
  }
  function setActive(id){ $nav.find('a,li').removeClass('active'); var $a=$nav.find(`a[href="#${id}"]`); $a.addClass('active').parent().addClass('active'); }
  function go(id, push){
    var el=document.getElementById(id); if(!el) return;
    var extra=parseFloat(el.getAttribute('data-anchor-offset')||'0')||0;
    var y=window.pageYOffset+el.getBoundingClientRect().top - fixedTop() - 8 - extra;
    $('html,body').stop(true).animate({scrollTop:Math.max(0,y)}, 350);
    setActive(id); if(push!==false) try{history.replaceState(null,'','#'+id);}catch(_){}
  }
  function applyScrollMargin(){ var m=fixedTop()+8; $('#message,#company,#history,#org,#clients,.anchored-section').css('scroll-margin-top', m+'px'); }

  $(function(){
    render();

    // click
    $nav.on('click','a[href^="#"]',function(e){
      var href=this.getAttribute('href')||''; if(!href||href==='#') return;
      e.preventDefault(); go(href.slice(1), true);
    });

    // scroll sync
    var ids = MENU.map(m=>m.id), secs = ids.map(id=>document.getElementById(id));
    $(window).on('scroll resize', function(){
      applyScrollMargin();
      var pos=window.scrollY+fixedTop()+24, cur='';
      for(var i=0;i<secs.length;i++){ var s=secs[i]; if(s && pos>=s.offsetTop) cur=s.id; }
      if(cur) setActive(cur);
    });

    // init from hash
    var init=(location.hash||'').slice(1);
    setActive(init && document.getElementById(init)? init : MENU[0].id);
    if(init) setTimeout(function(){ go(init,false); },0);

    // change language (giữ tab)
    $(document).on('click','.lang-btn',function(e){
      e.preventDefault();
      var nxt=(String($(this).data('lang'))||'').toLowerCase(); if(!/^(ja|vi|en)$/.test(nxt)) return;
      var u=new URL(location.href); u.searchParams.set('lang',nxt); history.replaceState(null,'',u.pathname+'?'+u.searchParams+u.hash);
      var keep=(location.hash||'').slice(1) || MENU[0].id; render(); setActive(keep);
    });
  });


var ASSET = '../image/';
var aboutI18n = {
  ja: {
    leftText: '成長に終わりはない<br>常に先を見て<br>常に変わっていく<br>',
    info:     '会社情報',
    heading:  'について',
    bg1: 'レイヤー 854.png',
    bg2: 'レイヤー 851.png'
  },
  vi: {
    leftText: 'Không có điểm dừng cho tăng trưởng<br>luôn nhìn về phía trước<br>luôn đổi mới<br>',
    info:     'Thông tin công ty',
    heading:  'GIỚI THIỆU',
    bg1: 'レイヤー 854.png',
    bg2: 'レイヤー 851.png'
  },
  en: {
    leftText: 'Growth never ends<br>Always looking ahead<br>Always evolving<br>',
    info:     'Company Info',
    heading:  'ABOUT',
    bg1: 'レイヤー 854.png',
    bg2: 'レイヤー 851.png'
  }
};
function curLang(){
  var v = (new URLSearchParams(location.search).get('lang')||'').toLowerCase();
  return /^(ja|vi|en)$/.test(v) ? v : 'ja';
}
/* Render ABOUT + set background động */
function renderAbout(lang){
  var t = aboutI18n[lang] || aboutI18n.ja;
  $('.about-left-text h2').html(t.leftText);
  $('.about-right-text .company-info').text(t.info);
  $('.about-right-text .about-heading').text(t.heading);

 
  $('.about-bg.bg1').css('background-image',
      'url("' + ASSET + encodeURI(t.bg1) + '")');
  $('.about-bg.bg2').css('background-image',
      'url("' + ASSET + encodeURI(t.bg2) + '")');
}

/* ---------- Boot ---------- */
$(function(){
  var lang = curLang();

  renderAbout(lang);


  // đổi cờ → đổi lang + re-render
  $(document).on('click','.lang-btn',function(e){
    e.preventDefault();
    var next = ($(this).data('lang')||'').toLowerCase();
    if(!/^(ja|vi|en)$/.test(next)) return;
    var u = new URL(location.href);
    u.searchParams.set('lang',next);
    history.replaceState(null,'',u.pathname+'?'+u.searchParams+u.hash);

    renderAbout(next);
  });
});

  /* ====== i18n data for CEO Message ====== */
var CEO_I18N = {
  ja: {
    title: '代表メッセージ',
    role : '代表取締役社長',
    name : '阿出川 敏朗',
    text : [
      '企画立案・プログラム開発・映像制作・音響制作を一貫して行います。<br>それぞれの部門にはプロフェッショナルな社員ばかりなので、<br>完成度はどれを取っても業界トップレベル。<br>',
      'その精度の高さが評価され<br>現在では大手メーカーからも絶大な信頼を獲得しています。<br>アレックスの商品レベルと会社の成長スピードに<br>業界の中では驚異だと恐れられています。<br><br>',
      '<span class="highlight">「私達にはまだまだやるべきことがあり、<br>私達アレックスにしか出来ない事がある！！」</span><br><br>',
      '今までの実績が私たちの自信に繋がっています!!<br>まだまだ私達には無限大の可能性が待っています!!<br><br>',
      '現在日本で100年以上続いている企業は一万は越えています。<br>アレックスの技術レベルを100年後も世に伝え続ける為、<br>世に愛される会社をこの仲間達と共に創り上げます！'
    ].join('')
  },
  vi: {
    title: 'Thông điệp đại diện',
    role : 'Chủ tịch kiêm CEO',
    name : 'ADEGAWA Toshiro',
    text : [
      'Chúng tôi đảm nhiệm mọi việc, từ lập kế hoạch và phát triển đến sản xuất video và âm thanh.<br>Mỗi bộ phận đều có đội ngũ chuyên gia,<br>và mức độ hoàn thiện của chúng tôi thuộc hàng tốt nhất trong ngành.<br><br>',
      'Độ chính xác cao của chúng tôi đã mang lại sự tin tưởng từ các nhà sản xuất lớn.<br>Chất lượng sản phẩm của Alex và tốc độ phát triển nhanh chóng của công ty<br>được coi là một kỳ quan trong ngành.<br><br>',
      '<span class="highlight">"Chúng tôi vẫn còn nhiều việc phải làm,<br>có những điều chỉ Alex mới có thể làm được!!"</span><br><br>',
      'Những thành tích đạt được cho đến nay là nguồn tự tin của chúng tôi!!<br>Vẫn còn vô vàn tiềm năng đang chờ đón chúng tôi!!<br><br>',
      'Hiện có hơn 10.000 công ty ở Nhật Bản hoạt động trên 100 năm.<br>Để truyền lại năng lực kỹ thuật của Alex trong 100 năm tới,<br>chúng tôi sẽ xây dựng một công ty được mọi người yêu mến cùng các đồng nghiệp!'
    ].join('')
  },
  en: {
    title: 'CEO Message',
    role : 'President & CEO',
    name : 'Toshiro ADEGAWA',
    text : [
      'We handle everything from planning and program development to video and audio production.<br>Each division is staffed with professionals,<br>and the level of completion is among the best in the industry.<br><br>',
      'Thanks to this precision, we have earned strong trust from major manufacturers.<br>The quality of Alex’s products and the company’s rapid growth<br>are regarded as remarkable within the industry.<br><br>',
      '<span class="highlight">"There is still much we must accomplish—<br>and there are things only Alex can do!!"</span><br><br>',
      'Our track record fuels our confidence!!<br>Infinite possibilities still await us!!<br><br>',
      'In Japan, over ten thousand companies have lasted more than 100 years.<br>To carry Alex’s technical excellence forward for the next century,<br>we will build a company loved by society together with our teammates!'
    ].join('')
  }
};

/* ====== Helpers lang ====== */
function getLangParam(){
  var p = new URLSearchParams(location.search);
  var v = (p.get('lang') || '').toLowerCase();
  return /^(ja|vi|en)$/.test(v) ? v : 'ja';
}
function setLangInUrl(lang){
  var u = new URL(location.href);
  u.searchParams.set('lang', lang);
  history.replaceState(null, '', u.pathname + '?' + u.searchParams.toString() + u.hash);
}


function renderCeoSection(lang){
  var t = CEO_I18N[lang] || CEO_I18N.ja;


  var $sec = $('.section-heading').first();
  if ($sec.length){
    $sec.attr('id','message').addClass('anchored-section');
  }


  $('.section-heading .section-title').html(t.title);


  var ASSET = '../image/';
  $('.section-heading .section-header .section-bg').attr('src', ASSET + '帯.png');
  $('.message-photo').attr('src', ASSET + '社長写真.png');
  $('.overlay-decor.overlay-bottom').attr('src', ASSET + '長方形 5.png');
  $('.overlay-decor-top.overlay-top').attr('src', ASSET + '長方形 6.png');

  // Vai trò + Tên
  $('.message-role').html(t.role);
  $('.message-name strong').text(t.name);

  // Nội dung
  $('.message-text').html(t.text);
}

function initAnchorScroll(){
  var $nav = $('nav.submenu-tabs');
  if(!$nav.length) return;
  var $header = $('#masthead, .header-wrapper, header').first();
  var headerH = $header.length ? $header.outerHeight() : 0;
  $('html').css('scroll-behavior','smooth');
  $('.anchored-section').css('scroll-margin-top', headerH + 'px');

  $nav.off('click.ceo').on('click.ceo','a[href^="#"]', function(e){
    e.preventDefault();
    var id = this.hash.slice(1);
    var $t = $('#'+id);
    if(!$t.length) return;
    window.scrollTo({top:$t.offset().top-1, behavior:'smooth'});
    $nav.find('a').removeClass('active');
    $(this).addClass('active');
    try{ history.replaceState(null,'','#'+id); }catch(e){}
  });
}


$(function(){
  var lang = getLangParam();
  renderCeoSection(lang);
  initAnchorScroll();


  $(document).off('click.ceoFlag').on('click.ceoFlag','.lang-btn',function(e){
    e.preventDefault();
    var next = ($(this).data('lang')||'').toLowerCase();
    if(!/^(ja|vi|en)$/.test(next)) return;
    setLangInUrl(next);
    renderCeoSection(next);
  });
});

/* ========= i18n data ========= */
var COMPANY_I18N = {
  ja: {
    title: '会社概要',
    rows: [
      ['名称','株式会社 ALEX'],
      ['設立','2003年 4月'],
      ['代表','阿出川 敏朗'],
      ['所在地','【本社】<br>東京都北区西ケ原1-46-13 横河駒込ビル1F<br><br>'
             + '【島根支社】<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F<br><br>'
             + '【ベトナムスタジオ】<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
      ['TEL','03-5972-1888（本社）<br>0852-25-7775（島根支社）'],
      ['FAX','03-5972-1890'],
      ['資本金','3000万円'],
      ['社員数','68人'],
      ['取引先銀行','三菱東京UFJ銀行<br>巣鴨信用金庫大塚支店']
    ]
  },
  vi: {
    title: 'Tổng quan công ty',
    rows: [
      ['Tên','Công ty Cổ phần ALEX'],
      ['Thành lập','Tháng 4 năm 2003'],
      ['Đại diện','ADEGAWA Toshiro'],
      ['Địa chỉ','【Trụ sở chính】<br>1F, Yokogawa Komagome Bldg, 1-46-13 Nishigahara, Kita-ku, Tokyo<br><br>'
              + '【Chi nhánh Shimane】<br>2F, Matsue SUN Bldg, 477-17 Isemiya, Asahimachi, Matsue, Shimane<br><br>'
              + '【Studio Việt Nam】<br>5F, AC Building, No.3, Lane 78, Duy Tan, Dich Vong Hau, Cau Giay, Hà Nội, Việt Nam'],
      ['Điện thoại','03-5972-1888 (Trụ sở)<br>0852-25-7775 (Shimane)'],
      ['FAX','03-5972-1890'],
      ['Vốn điều lệ','30 triệu yên'],
      ['Số nhân viên','68 người'],
      ['Ngân hàng giao dịch','Ngân hàng MUFG Tokyo<br>Ngân hàng Suido Suginami Otsuka']
    ]
  },
  en: {
    title: 'Company Overview',
    rows: [
      ['Name','ALEX Corporation'],
      ['Established','April 2003'],
      ['Representative','Toshiro ADEGAWA'],
      ['Location','[Head Office]<br>1F, Yokogawa Komagome Bldg, 1-46-13 Nishigahara, Kita-ku, Tokyo, Japan<br><br>'
               + '[Shimane Branch]<br>2F, Matsue SUN Bldg, 477-17 Isemiya, Asahimachi, Matsue, Shimane, Japan<br><br>'
               + '[Vietnam Studio]<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
      ['TEL','03-5972-1888 (Head Office)<br>0852-25-7775 (Shimane)'],
      ['FAX','03-5972-1890'],
      ['Capital','30 million yen'],
      ['Employees','68'],
      ['Main Banks','MUFG Bank<br>Sugamo Shinkin Bank Otsuka Branch']
    ]
  }
};

var HISTORY_I18N = {
  ja: {
    title: '沿革',
    rows: [
      ['2003年<br>（平成15年）','4月','浅草橋にて有限会社アレックス設立'],
      ['2004年<br>（平成16年）','3月','大塚事務所に業務拡張のため、移転'],
      ['2005年<br>（平成17年）','7月','巣鴨事務所に業務拡張のため、移転'],
      ['2007年<br>（平成19年）','8月','西日暮里事務所に業務拡張のため、移転'],
      ['2007年<br>（平成19年）','10月','株式会社に登記変更'],
      ['2011年<br>（平成23年）','2月','大塚事務所に業務拡張のため、移転'],
      ['2013年<br>（平成25年）','2月','島根支社設立'],
      ['2017年<br>（平成29年）','8月','業務拡張のため、島根支社を朝日町に移転'],
      ['2019年<br>（令和1年）','6月','駒込事務所に業務拡張のため、移転']
    ]
  },
  vi: {
    title: 'Lịch sử',
    rows: [
      ['Năm 2003 <br>(Heisei 15)','Tháng 4','Thành lập Công ty TNHH Alex tại Asakusabashi'],
      ['Năm 2004 <br>(Heisei 16)','Tháng 3','Mở rộng và chuyển trụ sở tới Otsuka'],
      ['Năm 2005 <br>(Heisei 17)','Tháng 7','Mở rộng và chuyển trụ sở tới Sugamo'],
      ['Năm 2007 <br>(Heisei 19)','Tháng 8','Mở rộng và chuyển trụ sở tới Nishinippori'],
      ['Năm 2007 <br>(Heisei 19)','Tháng 10','Chuyển đổi thành Công ty Cổ phần'],
      ['Năm 2011 <br>(Heisei 23)','Tháng 2','Mở rộng và chuyển trụ sở tới Otsuka'],
      ['Năm 2013 (Heisei 25)','Tháng 2','Thành lập chi nhánh Shimane'],
      ['Năm 2017 (Heisei 29)','Tháng 8','Mở rộng và chuyển chi nhánh Shimane tới Asahimachi'],
      ['Năm 2019 (Reiwa 1)','Tháng 6','Mở rộng và chuyển trụ sở tới Komagome']
    ]
  },
  en: {
    title: 'History',
    rows: [
      ['2003 Year <br>(Heisei 15)','April','Established Alex Co., Ltd. in Asakusabashi'],
      ['2004 Year <br>(Heisei 16)','March','Expanded and moved office to Otsuka'],
      ['2005 Year <br>(Heisei 17)','July','Expanded and moved office to Sugamo'],
      ['2007 Year <br>(Heisei 19)','August','Expanded and moved office to Nishinippori'],
      ['2007 Year <br>(Heisei 19)','October','Reorganized as a corporation'],
      ['2011 Year <br>(Heisei 23)','February','Expanded and moved office to Otsuka'],
      ['2013 Year <br>(Heisei 25)','February','Established Shimane Branch'],
      ['2017 Year <br>(Heisei 29)','August','Expanded and relocated Shimane Branch to Asahimachi'],
      ['2019 Year <br>(Reiwa 1)','June','Expanded and moved office to Komagome']
    ]
  }
};

/* ========= Helpers ========= */
function currentLang(){
  var v = new URLSearchParams(location.search).get('lang');
  return /^(ja|vi|en)$/.test(v) ? v : 'ja';
}
function setLangParam(lang){
  var u = new URL(location.href);
  u.searchParams.set('lang', lang);
  history.replaceState(null,'',u.pathname+'?'+u.searchParams.toString());
}

/* ========= Render Company Table ========= */
function renderCompany(lang){
  var t = COMPANY_I18N[lang] || COMPANY_I18N.ja;
  $('.section-heading-table .section-title').html(t.title);
  var html = t.rows.map(function(r){
    return '<tr><th>'+r[0]+'</th><td>'+r[1]+'</td></tr>';
  }).join('');
  $('.company-table tbody').html(html);
}

/* ========= Render History Table ========= */
function renderHistory(lang){
  var t = HISTORY_I18N[lang] || HISTORY_I18N.ja;
  $('.section-heading-history .section-title').html(t.title);
  var html = t.rows.map(function(r){
    return '<tr>'
         + '<td class="year"><strong>'+r[0]+'</strong></td>'
         + '<td class="month">'+r[1]+'</td>'
         + '<td class="content">'+r[2]+'</td>'
         + '</tr>';
  }).join('');
  $('.history-table tbody').html(html);
}

/* ========= Boot ========= */
$(function(){
  var lang = currentLang();
  renderCompany(lang);
  renderHistory(lang);


  $(document).on('click','.lang-btn',function(e){
    e.preventDefault();
    var next = ($(this).data('lang')||'').toLowerCase();
    if(!/^(ja|vi|en)$/.test(next)) return;
    setLangParam(next);
    renderCompany(next);
    renderHistory(next);
  });
});
/* ========= i18n data ========= */
var ORG_I18N = {
  ja: {
    title: '組織図',
    ceo: '代表取締役',
    top:   ['総務部', '事業推進部'],
    lower: ['企画開発部','ソフト開発部','映像開発部','映像制作部']
  },
  vi: {
    title: 'Sơ đồ tổ chức',
    ceo: 'Tổng giám đốc',
    top:   ['Phòng Tổng vụ','Phòng Thúc đẩy kinh doanh'],
    lower: ['Phòng Hoạch định & Phát triển','Phòng Phát triển Phần mềm','Phòng Phát triển Hình ảnh','Phòng Sản xuất Hình ảnh']
  },
  en: {
    title: 'Organization Chart',
    ceo: 'President & CEO',
    top:   ['General Affairs Dept','Business Promotion Dept'],
    lower: ['Planning & Development Dept','Software Development Dept','Video Development Dept','Video Production Dept']
  }
};

/* ========= helpers ========= */
 function currentLang(){
    var v = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    return /^(ja|vi|en)$/.test(v) ? v : 'ja';
  }
  function setLangParam(lang){
    var u = new URL(location.href);
    u.searchParams.set('lang', lang);
    history.replaceState(null, '', u.pathname + '?' + u.searchParams.toString() + u.hash);
  }


  function renderOrgChart(lang){
    var t = ORG_I18N[lang] || ORG_I18N.ja;


    var suf = (lang === 'ja') ? '' : ' ' + lang;  // ' vi' | ' en' | ''

    var html =
      '<div class="org-chart">' +
        // CEO
        '<div class="org-node ceo' + suf + '">' + t.ceo + '</div>' +

        // (higher)
        '<div class="org-branches higher' + suf + '">' +
          t.top.map(function(n){
            return '<div class="org-node mid' + suf + '">' + n + '</div>';
          }).join('') +
        '</div>' +

        // (lower)
        '<div class="org-branches lower' + suf + '">' +
          t.lower.map(function(n){
            return '<div class="org-node' + suf + '">' + n + '</div>';
          }).join('') +
        '</div>' +
      '</div>';

    var $sec = $('.section-orgchart').attr('id','org').addClass('anchored-section');
    $sec.find('.section-title').text(t.title);

    
    $sec.find('.route-block-wrapper').empty().html(html);
  }

  /* ===== Boot ===== */
  $(function(){
    var lang = currentLang();

    
    $('body').removeClass('lang-ja lang-vi lang-en').addClass('lang-' + lang);

    renderOrgChart(lang);

   
    $(document).off('click.orgi18n').on('click.orgi18n', '.lang-btn', function(e){
      e.preventDefault();
      var next = (String($(this).data('lang')) || '').toLowerCase();
      if (!/^(ja|vi|en)$/.test(next) || next === lang) return;

      lang = next;
      setLangParam(next);
      $('body').removeClass('lang-ja lang-vi lang-en').addClass('lang-' + next);
      renderOrgChart(next);
    });
  });
  var CLIENTS_I18N = {
    ja: { title:'主要取引先' },
    vi: { title:'Khách hàng tiêu biểu' },
    en: { title:'Key Clients' }
  };

  // (danh sách demo – thay bằng data thật của bạn)
  // var CLIENTS = [
  //   { name:'A Company', logo:'../image/clients/a.png' },
  //   { name:'B Holdings', logo:'../image/clients/b.png' },
  //   { name:'C Group',    logo:'../image/clients/c.png' },
  //   { name:'D Corp',     logo:'../image/clients/d.png' }
  // ];

  // helpers mini, tránh đụng tên hàm khác
  function _lang(){
    var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    return /^(ja|vi|en)$/.test(v)?v:'ja';
  }

  function renderClients(lang){
    var t = CLIENTS_I18N[lang] || CLIENTS_I18N.ja;
    var $sec = $('.section-customer').first();
    if (!$sec.length) return;

    // đảm bảo id + anchored-section để scroll đúng
    $sec.attr('id','clients').addClass('anchored-section');

    // tiêu đề
    $sec.find('.section-title').text(t.title);

    // grid logo ngắn gọn
    // var html = '<div class="clients-grid">'
    //   + CLIENTS.map(function(c){
    //       return '<div class="client-item">'
    //            +   '<img loading="lazy" src="'+c.logo+'" alt="'+c.name+'">'
    //            +   '<p class="client-name">'+c.name+'</p>'
    //            + '</div>';
    //     }).join('')
    //   + '</div>';

    // $sec.find('.route-blender-wrapper').html(html);
  }

  $(function () {
    // render lần đầu
    renderClients(_lang());

    // đổi ngôn ngữ -> render lại
    $(document).on('click', '.lang-btn', function(e){
      e.preventDefault();
      var next=(String($(this).data('lang'))||'').toLowerCase();
      if(!/^(ja|vi|en)$/.test(next)) return;

      // cập nhật URL (giữ hash)
      var u=new URL(location.href);
      u.searchParams.set('lang', next);
      history.replaceState(null,'',u.pathname+'?'+u.searchParams+u.hash);

      renderClients(next);
    });
  });


})(jQuery);