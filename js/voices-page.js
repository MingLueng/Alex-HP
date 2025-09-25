  (function($){
  'use strict';

  /* ================== DATA: JA / VI / EN (5 section mỗi voice) ================== */
  var VOICES_I18N = {
    ja: {
      ro: {
        dept: '映像制作部 CGデザイナー',
        name: 'R.Oさん',
        sections: [
          { // 1
            title: '現在の仕事内容について教えてください',
            body: 'CGデザイナーとして、映像制作におけるコンポジット業務を担当しています。主にAfter Effectsを使用し、パチンコ・パチスロの映像に使われるエフェクトの作成や、全体の<br>見た目をより魅力的に仕上げるためのコンポジット作業を行っています。具体的には、After Effectsで衝撃波や効果背景、ロゴアニメーション、モーショングラフィッ<br>クスなどを作成し、それらを組み合わせて、派手でインパクトのある演出や、スタイリッシュで洗練された表現を生み出しています。また、2D・3Dデザイナーから提供されたキャラクターの<br>イラストや文字素材に対して、オーラや炎のエフェクトを加えたり、撮影データに実写の炎や環境光を合成したりすることで、様々な方が没入できる映像表現を目指しています。'
          },
          { // 2
            title: '仕事のやりがい・魅力を教えてください',
            body: 'やりがいを感じるのは、チーム全体で話し合い映像やデザインを一つひとつ作り上げていき、誰も思いつかないような面白い発想が形となり、世の中に作品として反映<br>され、多くの方に見て楽しんでいただけるその過程で得られる達成感や充実感は、何ものにも代えがたいです。特にアミューズメント業界は、映像の「見せ方」が常に進<br>化し続けており、表現力と技術力の両方が求められます。そのため、学びが尽きることはなく、常に成長し続けられる点も、この仕事の大きなやりがいであり魅力です。<br>また、自分がこれまで培ってきたスキルや発想・感性を後輩に伝えることで、個人の成長だけでなくチーム全体のレベルアップにもつながりその積み重ねがALEX全体の力<br>となることにも喜びを感じています。'
          },
          { // 3
            title: 'ALEXの魅力を教えてください',
            body: 'アレックスの最大の魅力は、風通しの良いオープンな社風です。社員一人ひとりの挑戦や成長を全力でサポートし、チームワークを大切にしながらも個々の裁量を尊重する自由度の高い働き方が実現できる職場だと感じています。役職や年齢に関係なく意見を出し合える環境に支えられ、学び続けられることに大きなやりがいと感謝を感じています。変化を楽しめる方にとって非常に刺激的で、挑戦した分だけ確かな手応えを得られるのも魅力です。'
          },
          { // 4
            title: '今後の目標や挑戦したいことを教えてください',
            body: 'これまで培ってきた経験やスキルをさらに深め、変化し続ける映像表現に柔軟に対応できるクリエイターを目指しています。特にコミュニケーション力の向上に取り組み、発想や表現を的確に伝えて品質向上につなげたいと考えています。将来的にはALEXの映像クオリティを支える「基準」となる存在を目指し、まずは目の前の仕事に全力で向き合い、確実に成果と信頼を積み重ねていきます。'
          },
          { // 5
            title: '就職活動中の方、これから入社される方へのメッセージ',
            body: '「作ることが好き」「デザインを見ることが好き」その気持ちは、デザイナーにとって何よりの原動力です。自分にしかない発想や感性は唯一無二の武器。アミューズメント業界では多彩な表現手法が用いられ、常に「どうすればもっと良くなるか」「本当に心を動かすデザインとは何か」を問い続けます。私たちと一緒に、デザインへの熱い想いを映像に込めて、より良いクリエイティブを生み出していきましょう。'
          }
        ]
      },
      kn: {
        dept: '企画開発部 プロデューサー',
        name: 'K.Nさん',
        sections: [
          { // 1
            title: '現在の仕事内容について教えてください',
            body: 'プロジェクトリーダーとしてプロジェクト全体の管理業務、そして企画業務を行っています。プロジェクトを目標達成に導くための指揮・調整を担い、現場の実務を把握しつつチームをリードして成果を出すことが主な役割です。ゲーム性や演出設計、サウンドやランプの方向性など、台のトータル設計を行います。'
          },
          { // 2
            title: '仕事のやりがい・魅力を教えてください',
            body: 'クライアントやチームが一丸となって一つの台を完成させる過程にやりがいを感じます。遊技機は一人で作れません。各分野のプロが集まる中で企画は全体の軸となる存在。プレッシャーもありますが、山を越える度に達成感があり、プロジェクトを重ねるほど成長できます。'
          },
          { // 3
            title: 'ALEXの魅力を教えてください',
            body: 'ALEXは横の繋がりがとても良く、仕事上の協力体制やコミュニケーションが取りやすい環境です。自分では分からない事や不安な事が発生しても、他プロジェクトや別部署にも気軽に相談できます。社内全体として良い空気感が出来ているのも特徴です。'
          },
          { // 4
            title: '今後の目標や挑戦したいことを教えてください',
            body: '「余裕が無い中では良いアイデアは生まれない」。納期や作業に追われ余裕が失われがちなので、作業分担や効率化を進めています。まずは「余裕を持った遊技機作り」を実現し、「完璧にやりきった」と言い切れるプロジェクトで「大ヒットした」と言われる機種を作り上げることが目標です。'
          },
          { // 5
            title: '就職活動中の方、これから入社される方へのメッセージ',
            body: '開発側に回ると、ユーザー時とは違う視点で遊技機と向き合えます。楽しさ・やりがい・喜び・大変さ等すべてが詰まっていますが、「好きこそものの上手なれ」。情熱次第で比率を変えられる世界です。ALEXには経験豊富な先輩のサポート体制があり、将来はプロジェクトを任せられる人材へ。ご応募お待ちしています。'
          }
        ]
      }
    },

    vi: {
      ro: {
        dept: 'Bộ Sản xuất hình ảnh – CG Designer',
        name: 'Anh R.O',
        sections: [
          {
            title: 'Hãy cho biết công việc hiện tại',
            body: 'Tôi phụ trách compositing cho các video, chủ yếu dùng After Effects để tạo hiệu ứng cho pachinko/pachislo và hoàn thiện tổng thể khung hình cho hấp dẫn hơn.<br>Tôi tạo shockwave, nền hiệu ứng, logo animation, motion graphics… rồi kết hợp thành các màn trình diễn ấn tượng và hiện đại. Tôi cũng ghép aura/lửa vào nhân vật/chữ, hoặc compositing lửa/quang học thật vào footage để tăng tính nhập vai.'
          },
          {
            title: 'Điều thú vị & ý nghĩa của công việc',
            body: 'Cả đội cùng biến những ý tưởng “không ai nghĩ tới” thành sản phẩm cho nhiều người thưởng thức—cảm giác đạt được đó rất đã. Ngành amusement luôn đổi mới cách kể chuyện bằng hình, đòi hỏi vừa biểu đạt vừa kỹ thuật nên cơ hội học hỏi liên tục. Truyền lửa cho đàn em cũng giúp cả đội mạnh lên và trở thành sức mạnh chung của ALEX.'
          },
          {
            title: 'Điểm hấp dẫn của ALEX',
            body: 'Văn hoá cởi mở, tôn trọng quyền chủ động cá nhân và hỗ trợ mạnh mẽ cho thử thách & trưởng thành. Không phân biệt chức danh/tuổi tác khi nêu ý kiến, môi trường khích lệ học hỏi liên tục. Với người thích thay đổi, đây là nơi rất kích thích—càng dám làm càng có “hand-feel” rõ rệt.'
          },
          {
            title: 'Mục tiêu & thử thách sắp tới',
            body: 'Tôi muốn linh hoạt hơn nữa với các biểu đạt hình ảnh luôn đổi mới, đồng thời cải thiện khả năng truyền đạt để ý tưởng được hiểu đúng và nâng chất lượng. Mục tiêu xa hơn là trở thành “chuẩn mực chất lượng” cho hình ảnh của ALEX bằng cách tích luỹ thành quả và niềm tin qua từng dự án.'
          },
          {
            title: 'Thông điệp gửi ứng viên / người sắp vào công ty',
            body: '“Thích làm – thích ngắm thiết kế” là động lực lớn nhất của designer. Ý tưởng/cảm thụ riêng là vũ khí độc nhất—cái hay là cách bạn dùng nó. Ngành amusement dùng đa dạng phương pháp (2D/3D/composite), luôn tự hỏi “làm sao hay hơn” và “điều gì chạm cảm xúc”. Cùng chúng tôi biến đam mê thành những thước phim chạm tim nhé!'
          }
        ]
      },
      kn: {
        dept: 'Phòng Kế hoạch – Producer',
        name: 'Anh K.N',
        sections: [
          {
            title: 'Hãy cho biết công việc hiện tại',
            body: 'Tôi là Project Leader điều phối/kiểm soát tổng thể dự án và làm planning: thiết kế gameplay,演出, định hướng âm thanh/đèn… như một kiến trúc sư tổng thể của máy.'
          },
          {
            title: 'Điều thú vị & ý nghĩa của công việc',
            body: 'Cả đội và khách hàng cùng hoàn thiện một model—quá trình đó rất “đã”. Máy không thể làm bởi một người; trong tập thể chuyên gia, planning là cái trục của dự án. Áp lực có nhưng mỗi lần vượt núi lại có thành tựu và lớn lên rõ rệt.'
          },
          {
            title: 'Điểm hấp dẫn của ALEX',
            body: '“Liên kết ngang” rất tốt: dễ hợp tác/trao đổi công việc. Khi phát sinh điều ngoài chuyên môn, có thể hỏi thành viên dự án khác/bộ phận khác rất thoải mái—bầu khí tích cực là điểm mạnh của ALEX.'
          },
          {
            title: 'Mục tiêu & thử thách sắp tới',
            body: 'Không có “khoảng trống” thì khó nảy ý hay. Tôi đang cải thiện chia việc & hiệu suất cho cả đội. Mục tiêu trước mắt: làm máy trong trạng thái có headroom, hoàn thành những dự án có thể tự tin nói “đã làm hết sức” và tạo ra model “đại hit”.'
          },
          {
            title: 'Thông điệp gửi ứng viên / người sắp vào công ty',
            body: 'Nhìn từ phía phát triển, bạn sẽ có góc nhìn hoàn toàn khác về máy: vui – vất – lo – sướng đủ cả, nhưng “có đam mê sẽ làm nên”. ALEX có hệ sinh thái mentor vững, lộ trình để bạn trở thành người dẫn dắt dự án. Mong nhận được đơn ứng tuyển của bạn!'
          }
        ]
      }
    },

    en: {
      ro: {
        dept: 'Video Production – CG Designer',
        name: 'R.O',
        sections: [
          {
            title: 'Tell us about your current work',
            body: 'I handle compositing for video production using After Effects—creating effects for pachinko/pachislo and finishing the overall look. I build shockwaves, effect backgrounds, logo animations, motion graphics, and combine them into flashy yet stylish visuals. I also composite real flames or environmental lights and add aura/flame effects to assets to enhance immersion.'
          },
          {
            title: 'What is rewarding about your job?',
            body: 'Brainstorming as a team and turning unexpected ideas into works enjoyed by many is deeply fulfilling. The amusement industry constantly evolves how visuals are presented, so both expression and technique are required—learning never ends. Passing on skills and sensibilities to juniors lifts the whole team and becomes ALEX’s strength.'
          },
          {
            title: 'What is attractive about ALEX?',
            body: 'An open culture with good air flow—strong support for challenges and growth, high autonomy while valuing teamwork. Regardless of title/age, it’s easy to share opinions and keep learning. It’s exciting for those who enjoy change; the more you try, the clearer the payoff.'
          },
          {
            title: 'Your goals and future challenges',
            body: 'I aim to respond flexibly to ever-evolving visual expression while improving communication so ideas are conveyed precisely and raise quality. Ultimately I want to be a “quality benchmark” for ALEX visuals—by focusing on each project and steadily building results and trust.'
          },
          {
            title: 'Message for applicants / new joiners',
            body: '“Loving to make and to look at design” is the strongest fuel for designers. Your unique ideas and senses are one-of-a-kind weapons; the joy is how you wield them. Amusement uses multiple approaches (2D/3D/compositing) and keeps asking “how to make it better” and “what truly moves people.” Come turn your passion into moving images that resonate.'
          }
        ]
      },
      kn: {
        dept: 'Planning Div. – Producer',
        name: 'K.N',
        sections: [
          {
            title: 'Tell us about your current work',
            body: 'I lead projects end-to-end and handle planning: gameplay/production design plus directions for sound and lamps—acting as the machine’s total architect.'
          },
          {
            title: 'What is rewarding about your job?',
            body: 'Seeing clients and the team unite to complete a machine is rewarding. Development is never a one-person job; planning is the axis across specialists. There’s pressure, but every mountain crossed brings achievement and growth.'
          },
          {
            title: 'What is attractive about ALEX?',
            body: 'Excellent horizontal connections—easy collaboration and communication. When unknowns arise, we can readily consult across projects/departments. This fosters a positive company-wide atmosphere.'
          },
          {
            title: 'Your goals and future challenges',
            body: 'Without headroom, good ideas rarely emerge. Deadlines can squeeze that room, so I’m improving task split and efficiency. First goal: build with headroom, finish projects I can proudly call “fully done,” and create a true “big hit.”'
          },
          {
            title: 'Message for applicants / new joiners',
            body: 'From the developer side, you’ll see machines from a new angle—fun, rewarding, tough, frustrating—everything. With passion, the balance tilts your way. ALEX has strong mentoring; you can grow into leading projects. We look forward to your application!'
          }
        ]
      }
    }
  };

  /* ================== HELPERS ================== */
  function getLang(){
    var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    return /^(ja|vi|en)$/.test(v)? v : 'ja';
  }
  function getVoiceId(){
    var q=new URLSearchParams(location.search);
    var id=(q.get('id')||'').toLowerCase();
    if(!id){
      var first=document.querySelector('.staff-comment-section[data-voice]');
      id=first? first.getAttribute('data-voice') : 'ro';
    }
    return id;
  }

  /* ================== APPLY TO DOM (đổ đủ 5 box) ================== */
  function applyVoice(lang,id){
    var T = VOICES_I18N[lang] && VOICES_I18N[lang][id];
    var $all = $('.staff-comment-section[data-voice]');
    var $sec = $('.staff-comment-section[data-voice="'+id+'"]');

    $all.hide(); $sec.show();
    if(!T) return;

    // tên + phòng ban
    $sec.find('.staff-department').text(T.dept);
    $sec.find('.staff-name').text(T.name);

    // 5 box theo thứ tự xuất hiện trong DOM
    var $boxes = $sec.find('.staff-section-box');
    $boxes.each(function(i){
      var s=T.sections[i];
      if(!s) return;
      $(this).find('.staff-subtile').html(s.title);
      $(this).find('p').html(s.body);
    });
  }

  /* ================== BOOT ================== */
  $(function(){
    var lang=getLang(), id=getVoiceId();
    applyVoice(lang,id);

    // chuyển ngôn ngữ nhưng giữ cùng id
    $(document).on('click','.top-language .lang-btn',function(e){
      e.preventDefault();
      var next=String($(this).data('lang')||'').toLowerCase();
      if(!/^(ja|vi|en)$/.test(next)) return;
      var u=new URL(location.href);
      u.searchParams.set('lang',next);
      u.searchParams.set('id',id);
      location.href = u.pathname + '?' + u.searchParams.toString() + u.hash;
    });

    window.scrollTo({top:0,behavior:'smooth'});
  });

})(jQuery);