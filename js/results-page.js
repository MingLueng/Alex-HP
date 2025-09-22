/* ===== Works Schedule i18n (ja | vi | en) – full table ===== */
(function($){
  var WORKS_I18N = {
    ja: {
      title: '開発実績',
      note : 'その他、一部お手伝いした案件も多数ございます。',
      scope: '担当箇所',
      cols : {
        main  : 'メイン',
        sub1  : 'サブ<br>メイン',
        sub2  : 'サブ<br>サブ',
        plan  : '企画',
        payout: '出玉',
        reel_pc: 'リール<br>制御',
        reel_sp: 'リ<br>｜<br>ル<br>制<br>御',
        effect: '演出<br>抽せん',
        sound : 'サウンド',
        lamp  : 'ランプ',
        video : '映像'
      },
      types: { 'パチスロ':'パチスロ', 'ぱちんこ':'ぱちんこ' },
      rights:{ 'アニメ版権':'アニメ版権','オリジナル版権':'オリジナル版権','実写版権':'実写版権','ゲーム版権':'ゲーム版権','マンガ版権':'マンガ版権' },
      yearEarlier: function(y){ return y + '年<br>以前'; },
      year: function(y){ return y + '年'; }
    },
    vi: {
      title: 'Thành tựu phát triển',
      note : 'Ngoài ra, chúng tôi còn hỗ trợ nhiều dự án khác.',
      scope: 'Hạng mục phụ trách',
      cols : {
        main  : 'Chính',
        sub1  : 'Phụ<br>Chính',
        sub2  : 'Phụ<br>Phụ',
        plan  : 'Lên ý tưởng',
        payout: 'Payout',
        reel_pc: 'Điều khiển<br>Reel',
        reel_sp: 'Đi<br>ề<br>u<br>k<br>h<br>i<br>ể<br>n',
        effect: 'Quay thưởng<br>hiệu ứng',
        sound : 'Âm thanh',
        lamp  : 'Đèn',
        video : 'Hình ảnh'
      },
      types: { 'パチスロ':'Máy slot', 'ぱちんこ':'Pachinko' },
      rights:{ 'アニメ版権':'Bản quyền anime','オリジナル版権':'Bản quyền gốc','実写版権':'Bản quyền live-action','ゲーム版権':'Bản quyền game','マンガ版権':'Bản quyền manga' },
      yearEarlier: function(y){ return 'Năm ' + y + '<br>trở về trước'; },
      year: function(y){ return 'Năm ' + y; }
    },
    en: {
      title: 'Development Achievements',
      note : 'We have also assisted with many other projects.',
      scope: 'Responsibilities',
      cols : {
        main  : 'Main',
        sub1  : 'Sub<br>Main',
        sub2  : 'Sub<br>Sub',
        plan  : 'Planning',
        payout: 'Payout',
        reel_pc: 'Reel<br>Control',
        reel_sp: 'Re<br>e<br>l<br><br>C<br>t<br>r<br>l',
        effect: 'Effect<br>Lottery',
        sound : 'Sound',
        lamp  : 'Lamp',
        video : 'Video'
      },
      types: { 'パチスロ':'Pachislot', 'ぱちんこ':'Pachinko' },
      rights:{ 'アニメ版権':'Anime license','オリジナル版権':'Original license','実写版権':'Live-action license','ゲーム版権':'Game license','マンガ版権':'Manga license' },
      yearEarlier: function(y){ return y + '<br>and earlier'; },
      year: function(y){ return String(y); }
    }
  };

  function curLang(){
    var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    return /^(ja|vi|en)$/.test(v)?v:'ja';
  }

  function applyReelLabelResponsive(){
    var isSp = window.matchMedia('(max-width: 575px)').matches;
    $('#real_pc').css('display', isSp ? 'none':'inline');
    $('#real_sp').css('display', isSp ? 'inline':'none');
  }

  function parseYearCellHTML(html){
    // '2008年<br>以前' | '2019年'
    var txt = $('<div/>').html(html).text().replace(/\s+/g,'');
    var m = txt.match(/(\d{4})年?(以前)?/);
    return m ? { y: m[1], earlier: !!m[2] } : null;
  }

  function renderWorksTable(lang){
    var t = WORKS_I18N[lang] || WORKS_I18N.ja;

    // Title + note
    $('.schedule-heading h3').text(t.title);
    $('.schedule-heading p').first().text(t.note);

    // Header row 1 label
    $('#headline1 th').last().html(t.scope);

    // Header row 2 labels
    var $h2 = $('#headline2 th');
    if ($h2.length >= 10){
      $h2.eq(0).html(t.cols.main);
      $h2.eq(1).html(t.cols.sub1);
      $h2.eq(2).html(t.cols.sub2);
      $h2.eq(3).html(t.cols.plan);
      $h2.eq(4).html(t.cols.payout);
      $('#real_pc').html(t.cols.reel_pc);
      $('#real_sp').html(t.cols.reel_sp);
      $h2.eq(6).html(t.cols.effect);
      $h2.eq(7).html(t.cols.sound);
      $h2.eq(8).html(t.cols.lamp);
      $h2.eq(9).html(t.cols.video);
    }

    // Body translations
    var typeMap  = t.types;
    var rightMap = t.rights;

    $('#works_table tbody tr').each(function(){
      var $tr = $(this);
      if ($tr.is('#headline1, #headline2, .separate')) return;

      // Translate year cell if present
      var $first = $tr.children().first();
      if ($first.is('th')) {
        var info = parseYearCellHTML($first.html());
        if (info){
          $first.html(info.earlier ? t.yearEarlier(info.y) : t.year(info.y));
        }
      }

      // Translate type + rights (first two TDs in row)
      var $tds = $tr.find('td');
      if ($tds.length >= 2){
        var typeTxt = $.trim($tds.eq(0).text());
        var rightTxt= $.trim($tds.eq(1).text());
        if (typeMap[typeTxt])  $tds.eq(0).text(typeMap[typeTxt]);
        if (rightMap[rightTxt])$tds.eq(1).text(rightMap[rightTxt]);
      }
    });

    applyReelLabelResponsive();
  }

  // Boot
  $(function(){
    var l = curLang();
    renderWorksTable(l);

    $(document).on('click', '.lang-btn', function(e){
      e.preventDefault();
      var next=(String($(this).data('lang'))||'').toLowerCase();
      if(!/^(ja|vi|en)$/.test(next)) return;

      var u=new URL(location.href);
      u.searchParams.set('lang', next);
      history.replaceState(null,'',u.pathname+'?'+u.searchParams+u.hash);

      renderWorksTable(next);
    });

    $(window).on('resize', applyReelLabelResponsive);
  });
})(jQuery);
