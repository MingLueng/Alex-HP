/* ===== SERVICE page i18n (ja | vi | en) ===== */
(function ($) {
  /* ---------- i18n data ---------- */
  var ASSET = '../image/';
  var SERVICE_I18N = {
    ja: {
      hero: {
        left: '枠にとらわれない<br>創造力で<br>未来をデザイン<br>',
        info: '事業内容',
        heading: 'サービス',
        bg: 'レイヤー 735.png'
      },
      creation: {
        title: 'CREATION<span class="symbol">X</span>TECHNOLOGY',
        desc: 'ALEXは企画立案から映像制作、プログラムまで全ての作業をワンストップで対応できます。<br>'
            + 'しがらみにとらわれない自由な発想と作業効率を考えたシステム・アプリ開発。<br>'
            + 'クリエイティブとテクノロジーの融合により、常に新しい価値を生み出し続けます。'
      },
      blocks: [
        { title:'映像制作',
          html: '映像・演出提案含め映像完成まで全ての工程において対応可能です。<br>'
              + '2Dアニメーション制作のみ協力会社様と連携し制作いたします。'
        },
        { title:'実装・プログラミング',
          html: '市場動向に応じて仕様が頻繁に変更されるプログラム開発において、実装スピードと品質確保の両立が極めて重要です。<br>'
              + '効率的な役割分担とツール活用による柔軟な開発体制、<br>'
              + 'そして多層的な品質管理プロセスによって、迅速かつ不具合のない実装を実現します。'
        },
        { title:'システム・ツール開発',
          html: '高品質な製品開発の実現に向けツール活用による効率化と人的ミス低減に注力しています。<br>'
              + 'その取り組みとして、先進的なツールを開発しています。'
        },
        { title:'企画',
          html: '豊富な経験に裏打ちされた企画力で、ゲーム性・演出・出玉設計から仕様・申請書類の作成まで、すべての工程に対応可能。<br>'
              + '市場動向やユーザー志向をふまえた提案で、確実な開発と高い完成度を実現します。<br>'
              + 'リリースまで一貫してお任せいただける安心の体制で、ヒット機種づくりをサポートします。'
        }
      ]
    },
    vi: {
      hero: {
        left: 'Thoát khỏi khuôn khổ<br>sáng tạo để<br>thiết kế tương lai<br>',
        info: 'Dịch vụ',
        heading: 'DỊCH VỤ',
        bg: 'レイヤー 735.png'
      },
      creation: {
        title: 'CREATION<span class="symbol">X</span>TECHNOLOGY',
        desc: 'ALEX có thể xử lý trọn gói từ lập kế hoạch đến sản xuất video và lập trình.<br>'
            + 'Phát triển hệ thống/ứng dụng với tư duy tự do và tối ưu hiệu suất.<br>'
            + 'Sự kết hợp giữa sáng tạo và công nghệ liên tục tạo ra giá trị mới.'
      },
      blocks: [
        { title:'Sản xuất video',
          html: 'Chúng tôi có thể đảm nhiệm tất cả các công đoạn cho đến khi hoàn thiện video, bao gồm cả đề xuất dàn dựng/diễn xuất.<br>'
              + 'Riêng 2D animation sẽ phối hợp cùng đối tác.'
        },
        { title:'Lập trình & triển khai',
          html: 'Trong phát triển phần mềm với yêu cầu thay đổi thường xuyên, tốc độ triển khai và đảm bảo chất lượng là tối quan trọng.<br>'
              + 'Chúng tôi tổ chức vai trò hiệu quả, tận dụng công cụ và quy trình đảm bảo chất lượng đa tầng để triển khai nhanh, ổn định.'
        },
        { title:'Phát triển hệ thống & công cụ',
          html: 'Tập trung tự động hoá và giảm lỗi do con người nhằm nâng cao chất lượng sản phẩm.<br>'
              + 'Chúng tôi phát triển các công cụ tiên tiến phục vụ mục tiêu đó.'
        },
        { title:'Lên ý tưởng (Planning)',
          html: 'Với năng lực lên kế hoạch dày dặn, chúng tôi bao quát từ gameplay,演出, thiết kế payout tới đặc tả/k hồ sơ xin phép.<br>'
              + 'Đề xuất dựa trên xu hướng thị trường và người dùng để đạt độ hoàn thiện cao, hỗ trợ trọn vẹn đến khi ra mắt.'
        }
      ]
    },
    en: {
      hero: {
        left: 'Think beyond the box<br>create with vision<br>and design the future<br>',
        info: 'Services',
        heading: 'SERVICE',
        bg: 'レイヤー 735.png'
      },
      creation: {
        title: 'CREATION<span class="symbol">X</span>TECHNOLOGY',
        desc: 'ALEX handles everything end-to-end—from planning to video production and programming.<br>'
            + 'We develop systems/apps with free thinking and efficiency in mind.<br>'
            + 'By fusing creativity with technology, we continuously deliver new value.'
      },
      blocks: [
        { title:'Video Production',
          html: 'We cover the entire pipeline through delivery, including direction proposals.<br>'
              + '2D animation is produced in collaboration with partner studios.'
        },
        { title:'Implementation & Programming',
          html: 'In fast-changing environments, speed and quality must coexist.<br>'
              + 'With clear role separation, smart tool usage, and multi-layer QA, we ship quickly and reliably.'
        },
        { title:'System & Tool Development',
          html: 'We emphasize efficiency and reduction of human error to achieve high-quality products.<br>'
              + 'As part of this effort, we build advanced internal tools.'
        },
        { title:'Planning',
          html: 'Backed by experience, we handle all steps—from gameplay/production/payout design to specs and application documents.<br>'
              + 'Market-aware proposals ensure solid development and high completeness, supporting you through release.'
        }
      ]
    }
  };

  /* ---------- helpers ---------- */
  function curLang(){
    var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    return /^(ja|vi|en)$/.test(v)?v:'ja';
  }

  /* ---------- renders ---------- */
  function renderServiceHero(lang){
    var t = SERVICE_I18N[lang] || SERVICE_I18N.ja;
    
    $('.service-left-text h2').html(t.hero.left);
    $('.service-right-text .service-company-info').text(t.hero.info);
    $('.service-right-text .service-heading').text(t.hero.heading);
    $('.service-bg').css('background-image','url("'+ASSET+(t.hero.bg)+'")');
  }

  function renderCreationTech(lang){
    var t = SERVICE_I18N[lang] || SERVICE_I18N.ja;
    $('.creation-title').html(t.creation.title);
    $('.creation-description').html(t.creation.desc);
  }

  // map theo thứ tự 4 box; có thể đổi sang data-key nếu bạn thêm data-key="video|programming|tools|planning"
  function renderServiceBlocks(lang){
    var blocks = (SERVICE_I18N[lang] || SERVICE_I18N.ja).blocks;
    // tất cả .video-section theo thứ tự xuất hiện
    $('.video-section').each(function(i){
      var b = blocks[i]; if(!b) return;
      $(this).find('.subtitle-text').text(b.title);
      $(this).find('.info-content > p').html(b.html);
    });
  }

  /* ---------- boot ---------- */
  $(function(){
    var l = curLang();
    renderServiceHero(l);
    renderCreationTech(l);
    renderServiceBlocks(l);

    // đổi ngôn ngữ
    $(document).on('click','.lang-btn',function(e){
      e.preventDefault();
      var next=(String($(this).data('lang'))||'').toLowerCase();
      if(!/^(ja|vi|en)$/.test(next)) return;
      var u=new URL(location.href);
      u.searchParams.set('lang', next);
      history.replaceState(null,'',u.pathname+'?'+u.searchParams+u.hash);

      renderServiceHero(next);
      renderCreationTech(next);
      renderServiceBlocks(next);
    });
  });
})(jQuery);
