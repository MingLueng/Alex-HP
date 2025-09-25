/*! jobs-i18n.bundle.js (rewritten, all-in-one) */
(function($){
  'use strict';

  /* ========= 1) DATA =========
     Đưa LOCALES ra phạm vi global để các script khác (nếu có) cũng dùng được. */
  window.LOCALES = {
    
    ja: {
      __menu: {
        "producer-video-director": "プロデューサー・映像ディレクター",
        "effects-designer-compositor": "エフェクトデザイナー・コンポジター",
        "2DCG-designer": "2DCGデザイナー",
        "3DCG-designer": "3DCGデザイナー",
        "programmer": "プログラマー",
        "planning-design": "企画設計",
        "ball-output-design": "出玉設計"
      },
      'producer-video-director': {
        titleHtml: 'プロデューサー<br>映像ディレクター',
        images: { light: '画像-1.png', dark: '画像-19.png', table: '画像-46.png' },
        box: {
          head: '■業務内容',
          sections: [
            {
              subtitle: '【プロデューサー】',
              paragraphs: [
                '社外案件の予算・進行管理、社内外のリソース管理などプロデュース業務をお任せします。'
              ]
            },
            {
              subtitle: '【映像ディレクター】',
              paragraphs: [
                'ゲーム、CM、ぱちんこ・パチスロなどの映像企画・開発のディレクションをお任せします。'
              ],
              items: [
                '映像制作チームのまとめ、制作進行管理。',
                '協力会社とのディレクション。',
                '映像品質管理。'
              ]
            }
          ]
        },
        tableRows: [
          ['勤務時間','10：00 ～ 19：00<br>※リモートワーク可能'],
          ['必須スキル・経験','・Word、Excel、PowerPoint等の基本的なPCスキルをお持ちの方。'],
          ['求める人物像','・チームワークを大切にする方。<br>・コミュニケーションがしっかりと取れる方。<br>・何事 にも興味をもって様々な情報や技術を積極的に取り入れられる方。<br>・クライアントから求められるクオリティーを、複数のスタッフに指示し完成まで対応できる方。<br>'],
          ['歓迎するスキル・経験','・プロデューサー、ディレクターの経験がある方。<br>・ユーザーとしてぱちんこ・パチスロを遊技している方。<br>・Photoshop、Illustrator、After Effects、Maya、3ds Max、C4D、Zbrush等の知識のある方。<br>扱える方。<br>'],
          ['給与','経験・能力等を考慮の上、規定により優遇いたします。'],
          ['休日・休暇','完全週休2日制（土・日）、<br>祝日 夏季・年末年始休暇、有給休暇、慶弔休暇等<br>年間休日125日以上<br>'],
          ['待遇','試用期間6ヶ月あり（試用期間中の待遇面：本採用と同条件）<br>賞与/昇給制度あり（業績による）<br>各種社会保険完備<br>交通費支給（上限有）<br>ライフプラン給制度あり<br>確定拠出年金制度あり<br>社員旅行・社内イベント等実施<br>'],
          ['勤務地','【本社】<br>東京都北区西ケ原1-46-13 横河駒込ビル1F<br>【島根支社】<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F<br>【ベトナムスタジオ】<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
          ['提出書類','・履歴書<br>・職務経歴書<br>※映像企画書、ポートフォリオ等ある方、ご提出ください。<br>']
        ],
        process: {
          title: '採用プロセス',
          steps: [
            { title:'Step 1', main:'エントリー', sub:'募集要項、採用条件をご確認の上、応募してください。' },
            { title:'Step 2', main:'作品選考', sub:'エントリー受付後、3～5営業日で選考結果を通知させていただきます。' },
            { title:'Step 3', main:'面接',     sub:'中途採用は一次面接のみ、新卒採用は二次面接まで実施致します。' },
            { title:'Step 4', main:'内定',     sub:'面接を通過された方には、書面にて内定のご連絡を差し上げます。' }
          ]
        }
      },
      'effects-designer-compositor': {
        titleHtml: 'エフェクトデザイナー<br>コンポジター',
        images: { light: '画像-98.png', dark: '画像-19.png', table: '画像-46.png' },
        box: {
          head: '■業務内容',
          sections: [
            { paragraphs: [
              'ゲーム、CM、ぱちんこ・パチスロなどの映像制作をお任せします。',
              '2Dデザイナーや3Dデザイナーとも連携し、映像をより良く見せるためのエフェクト制作～',
              '最終コンポジットまでの仕上げの部分をメインに担当いただきます。'
            ]}
          ]
        },
        tableRows: [
          ['勤務時間','10：00 ～ 19：00<br>※リモートワーク可能'],
          ['必須スキル・経験','・After Effectsを扱える方。'],
          ['求める人物像','・チームワークを大切にする方。<br>・After Effectsのプラグインを扱える方。<br>・CG制作が大好きな方。<br>・自ら考えた映像を形にするのが好きな方。<br>・映像にこだわりを持っている方。<br>'],
          ['歓迎するスキル・経験','・Photoshop、Illustrator、Maya、3ds Max、C4D、Zbrush等の知識のある方。扱える方。<br>・After Effectsを使用したエフェクト制作の実務経験がある方。<br>'],
          ['給与','経験・能力等を考慮の上、規定により優遇いたします。'],
          ['休日・休暇','完全週休2日制（土・日）、祝日<br>夏季・年末年始休暇、有給休暇、慶弔休暇等<br>年間休日125日以上<br>'],
          ['待遇','試用期間6ヶ月あり（試用期間中の待遇面：本採用と同条件）<br>賞与/昇給制度あり（業績による）<br>各種社会保険完備<br>交通費支給（上限有）<br>ライフプラン給制度あり<br>確定拠出年金制度あり<br>社員旅行・社内イベント等実施<br>'],
          ['勤務地','【本社】<br>東京都北区西ケ原1-46-13 横河駒込ビル1F<br>【島根支社】<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F<br>【ベトナムスタジオ】<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
          ['提出書類','・履歴書<br>・職務経歴書<br>※ポートフォリオをご提出ください。<br>']
        ],
        process: {
          title: '採用プロセス',
          steps: [
            { title:'Step 1', main:'エントリー', sub:'募集要項、採用条件をご確認の上、応募してください。' },
            { title:'Step 2', main:'作品選考', sub:'エントリー受付後、3～5営業日で選考結果を通知させていただきます。' },
            { title:'Step 3', main:'面接',     sub:'中途採用は一次面接のみ、新卒採用は二次面接まで実施致します。' },
            { title:'Step 4', main:'内定',     sub:'面接を通過された方には、書面にて内定のご連絡を差し上げます。' }
          ]
        }
      },
      '2DCG-designer': {
        titleHtml: '2DCGデザイナー',
        images: { light: '画像-97.png', dark: '画像-19.png', table: '画像-46.png' },
        box: {
          head: '■業務内容',
          sections: [
            { paragraphs: [
              'ゲーム、CM、ぱちんこ・パチスロなどの映像制作をお任せします。',
              '背景、キャラ、インターフェイス、ロゴなど2D素材制作を担当いただきます。',
              '演出企画では絵コンテ制作や見せ方考案にも関わっていただく場合もあります。',
              '※どれか1つでも得意分野があれば問題ありません。'
            ]}
          ]
        },
        tableRows: [
          ['勤務時間','10：00 ～ 19：00<br>※リモートワーク可能'],
          ['必須スキル・経験','・Photoshop、Illustratorを扱える方。'],
          ['求める人物像','・チームワークを大切にする方。<br>・絵を描くことが大好きな方。<br>・デザイン、レイアウト考案など考えるのが好きな方。<br>・自らのデザインにこだわりを持っている方。<br>・アニメの世界観などデザインに落とし込むのが得意な方。<br>'],
          ['歓迎するスキル・経験','・After Effects、Maya、3ds Max、C4D、Zbrush等の知識のある方。扱える方。<br>・Photoshop、Illustrator 使用したデザイン制作の実務経験がある方。<br>・ぱちんこ、パチスロのデザイン経験がある方。<br>'],
          ['給与','経験・能力等を考慮の上、規定により優遇いたします。'],
          ['休日・休暇','完全週休2日制（土・日）、祝日<br>夏季・年末年始休暇、有給休暇、慶弔休暇等<br>年間休日125日以上<br>'],
          ['待遇','試用期間6ヶ月あり（試用期間中の待遇面：本採用と同条件）<br>賞与/昇給制度あり（業績による）<br>各種社会保険完備<br>交通費支給（上限有）<br>ライフプラン給制度あり<br>確定拠出年金制度あり<br>社員旅行・社内イベント等実施<br>'],
          ['勤務地','【本社】<br>東京都北区西ケ原1-46-13 横河駒込ビル1F<br>【島根支社】<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F<br>【ベトナムスタジオ】<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
          ['提出書類','・履歴書<br>・職務経歴書<br>※映像企画書、ポートフォリオ等ある方、ご提出ください。<br>']
        ],
        process: {
          title: '採用プロセス',
          steps: [
            { title:'Step 1', main:'エントリー', sub:'募集要項、採用条件をご確認の上、応募してください。' },
            { title:'Step 2', main:'作品選考', sub:'エントリー受付後、3～5営業日で選考結果を通知させていただきます。' },
            { title:'Step 3', main:'面接',     sub:'中途採用は一次面接のみ、新卒採用は二次面接まで実施致します。' },
            { title:'Step 4', main:'内定',     sub:'面接を通過された方には、書面にて内定のご連絡を差し上げます。' }
          ]
        }
      },
      '3DCG-designer': {
        titleHtml: '3DCGデザイナー',
        images: { light: 'レイヤー 105.png', dark: '画像-19.png', table: '画像-46.png' },
        box: {
          head: '■業務内容',
          sections: [
            { paragraphs: [
              'ゲーム、CM、ぱちんこ・パチスロなどの映像制作をお任せします。',
              '小物、キャラ、背景、ロゴなど3Dモデリングからコンポジットまで担当いただきます。',
              'コンテからのシーン構築など演出企画にも関わっていただくこともあります。',
              '※どれか1つでも得意分野があれば問題ありません。'
            ]}
          ]
        },
        tableRows: [
          ['勤務時間','10：00 ～ 19：00<br>※リモートワーク可能'],
          ['必須スキル・経験','・Maya、3ds Max、C4D、Zbrush等を扱える方。<br>・After Effectsを扱える方。'],
          ['求める人物像','・チームワークを大切にする方。<br>・CG制作が大好きな方。<br>・自ら考えた映像を形にするのが好きな方。<br>・映像にこだわりを持っている方。<br>'],
          ['歓迎するスキル・経験','・Photoshop、Illustrator、After Effectsの知識のある方。扱える方。<br>・Maya、3ds maxを使用したモデリング、セットアップ、アニメーションの<br>　一連の作業の実務経験がある方'],
          ['給与','経験・能力等を考慮の上、規定により優遇いたします。'],
          ['休日・休暇','完全週休2日制（土・日）、祝日<br>夏季・年末年始休暇、有給休暇、慶弔休暇等<br>年間休日125日以上<br>'],
          ['待遇','試用期間6ヶ月あり（試用期間中の待遇面：本採用と同条件）<br>賞与/昇給制度あり（業績による）<br>各種社会保険完備<br>交通費支給（上限有）<br>ライフプラン給制度あり<br>確定拠出年金制度あり<br>社員旅行・社内イベント等実施<br>'],
          ['勤務地','【本社】<br>東京都北区西ケ原1-46-13 横河駒込ビル1F<br>【島根支社】<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F<br>【ベトナムスタジオ】<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
          ['提出書類','・履歴書<br>・職務経歴書<br>※ポートフォリオをご提出ください。<br>']
        ],
        process: {
          title: '採用プロセス',
          steps: [
            { title:'Step 1', main:'エントリー', sub:'募集要項、採用条件をご確認の上、応募してください。' },
            { title:'Step 2', main:'作品選考', sub:'エントリー受付後、3～5営業日で選考結果を通知させていただきます。' },
            { title:'Step 3', main:'面接',     sub:'中途採用は一次面接のみ、新卒採用は二次面接まで実施致します。' },
            { title:'Step 4', main:'内定',     sub:'面接を通過された方には、書面にて内定のご連絡を差し上げます。' }
          ]
        }
      },
      'programmer': {
        titleHtml: 'プログラマー',
        images: { light: '画像-426.png', dark: '画像-19.png', table: '画像-46.png' },
        box: {
          head: '■業務内容',
          sections: [
            { paragraphs: [
              '大手メーカー様から直接ご依頼をいただき、演出企画、映像企画、出玉企画と連携しながら',
              'プログラム開発を担当していただきます。'
            ]}
          ]
        },
        tableRows: [
          ['勤務時間','10：00 ～ 19：00<br>※リモートワーク可能'],
          ['必須スキル・経験','・プログラミング経験者。<br>'],
          ['求める人物像','・モノづくりが好きな方。<br>・コミュニケーションが得意な方。<br>'],
          ['歓迎するスキル・経験','・C、C++、C#での実務経験者。<br>・アセンブラの実務経験者。<br>・ファームウェア、ゲーム開発、開発支援ツールの実務経験者。<br>・ぱちんこ・パチスロに興味のある人大歓迎！！<br>'],
          ['給与','経験・能力等を考慮の上、規定により優遇いたします。'],
          ['休日・休暇','完全週休2日制（土・日）、祝日<br>夏季・年末年始休暇、有給休暇、慶弔休暇等<br>年間休日125日以上<br>'],
          ['待遇','試用期間6ヶ月あり（試用期間中の待遇面：本採用と同条件）<br>賞与/昇給制度あり（業績による）<br>各種社会保険完備<br>交通費支給（上限有）<br>ライフプラン給制度あり<br>確定拠出年金制度あり<br>社員旅行・社内イベント等実施<br>'],
          ['勤務地','【本社】<br>東京都北区西ケ原1-46-13 横河駒込ビル1F<br>【島根支社】<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F<br>【ベトナムスタジオ】<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
          ['提出書類','・履歴書<br>・職務経歴書<br>※企画書は任意でご提出ください。<br>']
        ],
        process: {
          title: '採用プロセス',
          steps: [
            { title:'Step 1', main:'エントリー', sub:'募集要項、採用条件をご確認の上、応募してください。' },
            { title:'Step 2', main:'面接',     sub:'中途採用は一次面接のみ、新卒採用は二次面接まで実施致します。' },
            { title:'Step 3', main:'内定',     sub:'面接を通過された方には、書面にて内定のご連絡を差し上げます。' }
          ]
        }
      },
      'planning-design': {
        titleHtml: '企画設計',
        images: { light: '企画設計.png', dark: '画像-19.png', table: '画像-46.png' },
        box: {
          head: '■業務内容',
          sections: [
            { paragraphs: [
              'メーカーからの受託によるぱちんこ・パチスロ開発・管理に携わります。',
              '新しいアイディアを出すだけでなく、完成まで司令塔として各担当と連携して開発を進めていきます。',
              '情熱が命の仕事です。'
            ]}
          ]
        },
        tableRows: [
          ['勤務時間','10：00 ～ 19：00<br>※リモートワーク可能'],
          ['必須スキル・経験','・Word、Excel、PowerPoint等の基本的なPCスキルをお持ちの方。<br>'],
          ['求める人物像','・コミュニケーションがしっかりと取れる方。<br>・チームワークを大切にできる方。<br>・何事にも興味をもって様々な情報や技術を積極的に取り入れられる方。<br>'],
          ['歓迎するスキル・経験','・ぱちんこ・パチスロ好きの方。<br>・自分の熱い想いや情熱を相手に伝えられる方。<br>・ゲーム、アミューズメント等の開発経験のある方。<br>・遊技機開発経験のある方。<br>'],
          ['給与','経験・能力等を考慮の上、規定により優遇いたします。'],
          ['休日・休暇','完全週休2日制（土・日）、祝日<br>夏季・年末年始休暇、有給休暇、慶弔休暇等<br>年間休日125日以上<br>'],
          ['待遇','試用期間6ヶ月あり（試用期間中の待遇面：本採用と同条件）<br>賞与/昇給制度あり（業績による）<br>各種社会保険完備<br>交通費支給（上限有）<br>ライフプラン給制度あり<br>確定拠出年金制度あり<br>社員旅行・社内イベント等実施<br>'],
          ['勤務地','【本社】<br>東京都北区西ケ原1-46-13 横河駒込ビル1F<br>【島根支社】<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F<br>【ベトナムスタジオ】<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
          ['提出書類','・履歴書<br>・職務経歴書<br>※企画書は任意でご提出ください。<br>']
        ],
        process: {
          title: '採用プロセス',
          steps: [
            { title:'Step 1', main:'エントリー', sub:'募集要項、採用条件をご確認の上、応募してください。' },
            { title:'Step 2', main:'面接',     sub:'中途採用は一次面接のみ、新卒採用は二次面接まで実施致します。' },
            { title:'Step 3', main:'内定',     sub:'面接を通過された方には、書面にて内定のご連絡を差し上げます。' }
          ]
        }
      },
      'ball-output-design': {
        titleHtml: '出玉設計',
        images: { light: '画像-277.png', dark: '画像-19.png', table: '画像-46.png' },
        box: {
          head: '■業務内容',
          sections: [
            { paragraphs: [
              'パチスロ機の出玉数・機械割などの計算。',
              '数学的知識、統計学等の基礎知識のある方(数学に強い方)が最適です。'
            ]}
          ]
        },
        tableRows: [
          ['勤務時間','10：00 ～ 19：00<br>※リモートワーク可能'],
          ['必須スキル・経験','・Word、Excel、PowerPoint等の基本的なPCスキルをお持ちの方。<br>'],
          ['求める人物像','・コミュニケーションがしっかりと取れる方。<br>・チームワークを大切にできる方。<br>・何事にも興味をもって様々な情報や技術を積極的に取り入れられる方。<br>'],
          ['歓迎するスキル・経験','・ぱちんこ・パチスロ好きの方。<br>・自分の熱い想いや情熱を相手に伝えられる方。<br>・パチスロ出玉設計経験者の方。<br>'],
          ['給与','経験・能力等を考慮の上、規定により優遇いたします。'],
          ['休日・休暇','完全週休2日制（土・日）、祝日<br>夏季・年末年始休暇、有給休暇、慶弔休暇等<br>年間休日125日以上<br>'],
          ['待遇','試用期間6ヶ月あり（試用期間中の待遇面：本採用と同条件）<br>賞与/昇給制度あり（業績による）<br>各種社会保険完備<br>交通費支給（上限有）<br>ライフプラン給制度あり<br>確定拠出年金制度あり<br>社員旅行・社内イベント等実施<br>'],
          ['勤務地','【本社】<br>東京都北区西ケ原1-46-13 横河駒込ビル1F<br>【島根支社】<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F<br>【ベトナムスタジオ】<br>5F, AC Building, No.3, Lane 78, Duy Tan Str, Dich Vong Hau Ward, Cau Giay Dist, Hanoi, Vietnam'],
          ['提出書類','・履歴書<br>・職務経歴書<br>※企画書は任意でご提出ください。<br>']
        ],
        process: {
          title: '採用プロセス',
          steps: [
            { title:'Step 1', main:'エントリー', sub:'募集要項、採用条件をご確認の上、応募してください。' },
            { title:'Step 2', main:'面接',     sub:'適性検査あり' },
            { title:'Step 3', main:'内定',     sub:'面接を通過された方には、書面にて内定のご連絡を差し上げます。' }
          ]
        }
      }
    },
    /* ===== VI ===== */
    vi: {
      __menu: {
        "producer-video-director": "Nhà sản xuất・Đạo diễn hình ảnh",
        "effects-designer-compositor": "FX Designer・Compositor",
        "2DCG-designer": "Nhà thiết kế 2DCG",
        "3DCG-designer": "Nhà thiết kế 3DCG",
        "programmer": "Lập trình viên",
        "planning-design": "Thiết kế kế hoạch",
        "ball-output-design": "Thiết kế xuất thưởng"
      },
      "producer-video-director": {
        titleHtml: "Nhà sản xuất<br>Đạo diễn hình ảnh",
        box: {
          head: "■Nội dung công việc",
          sections: [
            { subtitle: "【Producer】", paragraphs: [
              "Phụ trách sản xuất: quản lý ngân sách/tiến độ cho dự án bên ngoài, điều phối nguồn lực trong/ngoài công ty."
            ]},
            { subtitle: "【Director】", paragraphs: [
              "Định hướng sản xuất video cho game, TVC, pachinko/pachislo."
            ], items: [
              "Điều phối team sản xuất, quản lý tiến độ.",
              "Chỉ đạo đối tác/nhà thầu.",
              "Quản lý chất lượng hình ảnh."
            ]}
          ]
        },
        tableRows: [
          ["Thời gian làm việc","10:00 – 19:00<br>※ Có thể làm từ xa"],
          ["Kỹ năng/Kinh nghiệm bắt buộc","• Thành thạo cơ bản Word/Excel/PowerPoint."],
          ["Tố chất mong đợi","• Teamwork tốt.<br>• Giao tiếp tốt.<br>• Chủ động học hỏi công nghệ/thông tin mới.<br>• Điều phối được nhiều thành viên để đạt chất lượng khách hàng yêu cầu."],
          ["Ưu tiên","• Có kinh nghiệm Producer/Director.<br>• Là người chơi pachinko/pachislo.<br>• Biết Photoshop/Illustrator/After Effects/Maya/3ds Max/C4D/ZBrush…"],
          ["Lương","Theo năng lực/kinh nghiệm."],
          ["Nghỉ ngơi","Nghỉ T7 & CN, nghỉ lễ, hè/đông, phép năm, hiếu hỉ… (>125 ngày/năm)."],
          ["Phúc lợi","Thử việc 6 tháng (chế độ như chính thức). Thưởng/tăng lương (theo hiệu quả). BH đầy đủ. Trợ cấp đi lại (giới hạn). Life-plan. Hưu trí DC. Du lịch/sự kiện công ty."],
          ["Địa điểm","Trụ sở Tokyo / Chi nhánh Shimane / Studio Hà Nội (như trong JA)."],
          ["Hồ sơ","• CV • Kinh nghiệm • (Nếu có) Đề án/Portfolio."]
        ],
        process: {
          title: "Quy trình tuyển dụng",
          steps: [
            { title:"Step 1", main:"Ứng tuyển", sub:"Đọc kỹ JD & điều kiện rồi gửi hồ sơ." },
            { title:"Step 2", main:"Xét tác phẩm", sub:"Phản hồi trong 3–5 ngày làm việc." },
            { title:"Step 3", main:"Phỏng vấn", sub:"Trung cấp 1 vòng / Mới tốt nghiệp tối đa 2 vòng." },
            { title:"Step 4", main:"Offer", sub:"Gửi thư mời chính thức." }
          ]
        }
      },
      "effects-designer-compositor": {
        titleHtml: "FX Designer<br>Compositor",
        box: {
          head: "■Nội dung công việc",
          sections: [
            { paragraphs: [
              "Sản xuất video cho game, TVC, pachinko/pachislo.",
              "Phối hợp 2D/3D để tạo hiệu ứng nâng chất lượng hình ảnh.",
              "Phụ trách phần hoàn thiện: compositing cuối."
            ]}
          ]
        },
        tableRows: [
          ["Thời gian làm việc","10:00 – 19:00<br>※ Có thể làm từ xa"],
          ["Kỹ năng/Kinh nghiệm bắt buộc","• Sử dụng After Effects."],
          ["Tố chất mong đợi","• Teamwork tốt.<br>• Dùng được plugin AE.<br>• Đam mê CG.<br>• Thích biến ý tưởng thành hình ảnh.<br>• Kỹ tính về chất lượng."],
          ["Ưu tiên","• Biết Photoshop/Illustrator/Maya/3ds Max/C4D/ZBrush…<br>• Có kinh nghiệm FX bằng AE."],
          ["Lương","Theo năng lực/kinh nghiệm."],
          ["Nghỉ ngơi","T7 & CN, nghỉ lễ, hè/đông, phép năm, hiếu hỉ… (>125 ngày/năm)."],
          ["Phúc lợi","Thử việc 6 tháng; thưởng/tăng lương; BH đầy đủ; trợ cấp đi lại; Life-plan; DC; du lịch/sự kiện."],
          ["Địa điểm","Tokyo / Shimane / Hà Nội."],
          ["Hồ sơ","• CV • Kinh nghiệm • Portfolio (bắt buộc)."]
        ],
        process: {
          title: "Quy trình tuyển dụng",
          steps: [
            { title:"Step 1", main:"Ứng tuyển", sub:"Nộp hồ sơ sau khi đọc JD." },
            { title:"Step 2", main:"Xét tác phẩm", sub:"Thông báo 3–5 ngày làm việc." },
            { title:"Step 3", main:"Phỏng vấn", sub:"Trung cấp 1 vòng / Fresher 2 vòng." },
            { title:"Step 4", main:"Offer", sub:"Gửi thư mời chính thức." }
          ]
        }
      },
      "2DCG-designer": {
        titleHtml: "Nhà thiết kế 2DCG",
        box: {
          head: "■Nội dung công việc",
          sections: [
            { paragraphs: [
              "Thiết kế visual cho game/CM/pachinko/pachislo.",
              "Làm asset 2D: background, nhân vật, UI, logo…",
              "Có thể tham gia storyboard/ý tưởng thể hiện.",
              "※ Chỉ cần mạnh 1 mảng là được."
            ]}
          ]
        },
        tableRows: [
          ["Thời gian làm việc","10:00 – 19:00<br>※ Có thể làm từ xa"],
          ["Kỹ năng/Kinh nghiệm bắt buộc","• Photoshop / Illustrator."],
          ["Tố chất mong đợi","• Yêu vẽ; thích tư duy bố cục/thẩm mỹ; cầu toàn; chuyển tải thế giới quan anime tốt; teamwork tốt."],
          ["Ưu tiên","• Biết AE/Maya/3ds Max/C4D/ZBrush…<br>• Kinh nghiệm thiết kế bằng PS/AI.<br>• Từng thiết kế pachinko/pachislo."],
          ["Lương","Theo năng lực/kinh nghiệm."],
          ["Nghỉ ngơi","T7 & CN, nghỉ lễ, hè/đông, phép năm, hiếu hỉ… (>125 ngày/năm)."],
          ["Phúc lợi","Thử việc 6 tháng; thưởng/tăng lương; BH đầy đủ; trợ cấp đi lại; Life-plan; DC; du lịch/sự kiện."],
          ["Địa điểm","Tokyo / Shimane / Hà Nội."],
          ["Hồ sơ","• CV • Kinh nghiệm • (Khuyến khích) Đề án/Portfolio."]
        ],
        process: {
          title: "Quy trình tuyển dụng",
          steps: [
            { title:"Step 1", main:"Ứng tuyển", sub:"Nộp hồ sơ sau khi đọc JD." },
            { title:"Step 2", main:"Xét tác phẩm", sub:"Thông báo 3–5 ngày làm việc." },
            { title:"Step 3", main:"Phỏng vấn", sub:"Trung cấp 1 vòng / Fresher 2 vòng." },
            { title:"Step 4", main:"Offer", sub:"Gửi thư mời chính thức." }
          ]
        }
      },
      "3DCG-designer": {
        titleHtml: "Nhà thiết kế 3DCG",
        box: {
          head: "■Nội dung công việc",
          sections: [
            { paragraphs: [
              "Sản xuất video cho game/CM/pachinko/pachislo.",
              "Phụ trách từ 3D modeling (props/nhân vật/bối cảnh/logo) đến compositing.",
              "Có thể dựng scene theo storyboard.",
              "※ Chỉ cần mạnh 1 mảng là được."
            ]}
          ]
        },
        tableRows: [
          ["Thời gian làm việc","10:00 – 19:00<br>※ Có thể làm từ xa"],
          ["Kỹ năng/Kinh nghiệm bắt buộc","• Maya/3ds Max/C4D/ZBrush…<br>• After Effects."],
          ["Tố chất mong đợi","• Đam mê CG; chú trọng chất lượng; chủ động hiện thực hóa ý tưởng; teamwork tốt."],
          ["Ưu tiên","• Biết PS/AI/AE.<br>• Kinh nghiệm modeling/rigging/animation bằng Maya/3ds Max."],
          ["Lương","Theo năng lực/kinh nghiệm."],
          ["Nghỉ ngơi",">125 ngày/năm."],
          ["Phúc lợi","Thử việc 6 tháng; thưởng/tăng lương; BH đầy đủ; trợ cấp đi lại; Life-plan; DC; du lịch/sự kiện."],
          ["Địa điểm","Tokyo / Shimane / Hà Nội."],
          ["Hồ sơ","• CV • Kinh nghiệm • Portfolio."]
        ],
        process: {
          title: "Quy trình tuyển dụng",
          steps: [
            { title:"Step 1", main:"Ứng tuyển", sub:"Nộp hồ sơ sau khi đọc JD." },
            { title:"Step 2", main:"Xét tác phẩm", sub:"Thông báo 3–5 ngày làm việc." },
            { title:"Step 3", main:"Phỏng vấn", sub:"Trung cấp 1 vòng / Fresher 2 vòng." },
            { title:"Step 4", main:"Offer", sub:"Gửi thư mời chính thức." }
          ]
        }
      },
      programmer: {
        titleHtml: "Lập trình viên",
        box: {
          head: "■Nội dung công việc",
          sections: [
            { paragraphs: [
              "Làm việc trực tiếp với hãng lớn; phối hợp đội diễn xuất/đồ họa/tính thưởng.",
              "Phụ trách phát triển chương trình."
            ]}
          ]
        },
        tableRows: [
          ["Thời gian làm việc","10:00 – 19:00<br>※ Có thể làm từ xa"],
          ["Kỹ năng/Kinh nghiệm bắt buộc","• Có kinh nghiệm lập trình."],
          ["Tố chất mong đợi","• Yêu làm sản phẩm; giao tiếp tốt."],
          ["Ưu tiên","• C/C++/C#; Assembly; Firmware/Game/Tool dev; yêu thích pachinko/pachislo."],
          ["Lương","Theo năng lực/kinh nghiệm."],
          ["Nghỉ ngơi",">125 ngày/năm (T7&CN, lễ, hè/đông, phép, hiếu hỉ…)."],
          ["Phúc lợi","Như trên."],
          ["Địa điểm","Tokyo / Shimane / Hà Nội."],
          ["Hồ sơ","• CV • Kinh nghiệm • (Tuỳ chọn) Đề án."]
        ],
        process: {
          title: "Quy trình tuyển dụng",
          steps: [
            { title:"Step 1", main:"Ứng tuyển", sub:"Đọc JD rồi nộp." },
            { title:"Step 2", main:"Phỏng vấn", sub:"Trung cấp 1 vòng / Fresher 2 vòng." },
            { title:"Step 3", main:"Offer", sub:"Gửi thư mời chính thức." }
          ]
        }
      },
      "planning-design": {
        titleHtml: "Thiết kế kế hoạch",
        box: {
          head: "■Nội dung công việc",
          sections: [
            { paragraphs: [
              "Phát triển/quản lý pachinko/pachislo theo đặt hàng.",
              "Không chỉ nghĩ ý tưởng, mà còn điều phối đến khi hoàn thành (vai trò ‘chỉ huy’).",
              "Công việc đòi hỏi nhiều đam mê."
            ]}
          ]
        },
        tableRows: [
          ["Thời gian làm việc","10:00 – 19:00<br>※ Có thể làm từ xa"],
          ["Kỹ năng/Kinh nghiệm bắt buộc","• Word/Excel/PowerPoint cơ bản."],
          ["Tố chất mong đợi","• Giao tiếp và teamwork tốt; ham học hỏi công nghệ mới."],
          ["Ưu tiên","• Yêu pachinko/pachislo; truyền đạt tốt đam mê/ý tưởng; từng làm game/amusement; kinh nghiệm máy chơi."],
          ["Lương","Theo năng lực/kinh nghiệm."],
          ["Nghỉ ngơi",">125 ngày/năm."],
          ["Phúc lợi","Như trên."],
          ["Địa điểm","Tokyo / Shimane / Hà Nội."],
          ["Hồ sơ","• CV • Kinh nghiệm • (Tuỳ chọn) Đề án."]
        ],
        process: {
          title: "Quy trình tuyển dụng",
          steps: [
            { title:"Step 1", main:"Ứng tuyển", sub:"Đọc JD rồi nộp." },
            { title:"Step 2", main:"Phỏng vấn", sub:"Trung cấp 1 vòng / Fresher 2 vòng." },
            { title:"Step 3", main:"Offer", sub:"Gửi thư mời chính thức." }
          ]
        }
      },
      "ball-output-design": {
        titleHtml: "Thiết kế xuất thưởng (Payout)",
        box: {
          head: "■Nội dung công việc",
          sections: [
            { paragraphs: [
              "Tính toán số lượng thưởng và hệ số máy cho pachislo.",
              "Ưu tiên nền tảng toán/thống kê tốt."
            ]}
          ]
        },
        tableRows: [
          ["Thời gian làm việc","10:00 – 19:00<br>※ Có thể làm từ xa"],
          ["Kỹ năng/Kinh nghiệm bắt buộc","• Word/Excel/PowerPoint cơ bản."],
          ["Tố chất mong đợi","• Giao tiếp tốt; teamwork; ham học hỏi."],
          ["Ưu tiên","• Yêu pachinko/pachislo; truyền đạt tốt; kinh nghiệm payout pachislo."],
          ["Lương","Theo năng lực/kinh nghiệm."],
          ["Nghỉ ngơi",">125 ngày/năm."],
          ["Phúc lợi","Như trên."],
          ["Địa điểm","Tokyo / Shimane / Hà Nội."],
          ["Hồ sơ","• CV • Kinh nghiệm • (Tuỳ chọn) Đề án."]
        ],
        process: {
          title: "Quy trình tuyển dụng",
          steps: [
            { title:"Step 1", main:"Ứng tuyển", sub:"Đọc JD rồi nộp." },
            { title:"Step 2", main:"Phỏng vấn", sub:"Có bài kiểm tra năng lực." },
            { title:"Step 3", main:"Offer", sub:"Gửi thư mời chính thức." }
          ]
        }
      }
    },
    /* ===== EN ===== */
    en: {
      __menu: {
        "producer-video-director": "Producer・Video Director",
        "effects-designer-compositor": "Effects Designer・Compositor",
        "2DCG-designer": "2DCG Designer",
        "3DCG-designer": "3DCG Designer",
        "programmer": "Programmer",
        "planning-design": "Planning & Design",
        "ball-output-design": "Payout Design"
      },
      "producer-video-director": {
        titleHtml: "Producer<br>Video Director",
        box: {
          head: "■Job Description",
          sections: [
            { subtitle: "[Producer]", paragraphs: [
              "Own external project producing: budget/schedule control and in/out-house resource coordination."
            ]},
            { subtitle: "[Director]", paragraphs: [
              "Direct planning and development of videos for games, commercials, pachinko/pachislo."
            ], items: [
              "Lead the video team and manage schedules.",
              "Coordinate and direct partner vendors.",
              "Oversee image quality."
            ]}
          ]
        },
        tableRows: [
          ["Working hours","10:00–19:00<br>* Remote work available"],
          ["Required skills/experience","• Basic PC skills: Word / Excel / PowerPoint."],
          ["Ideal profile","• Team player.<br>• Strong communication.<br>• Curiosity to adopt new tech/info.<br>• Able to direct multiple members to deliver client-required quality."],
          ["Preferred","• Producer/Director experience.<br>• Pachinko/pachislo player.<br>• Knowledge of Photoshop, Illustrator, After Effects, Maya, 3ds Max, C4D, ZBrush, etc."],
          ["Salary","Competitive, based on experience and ability."],
          ["Holidays","> 125 days/year (Sat/Sun off, public holidays, summer/winter, paid, condolence)."],
          ["Benefits","6-month probation (same conditions). Bonus/raise (performance-based). Full insurance. Commuting allowance (cap). Life-plan allowance. DC pension. Company trips/events."],
          ["Location","Tokyo HQ / Shimane Branch / Hanoi Studio (see JA)."],
          ["Documents","• Resume • Work history • (If any) Proposal/Portfolio."]
        ],
        process: {
          title: "Hiring Process",
          steps: [
            { title:"Step 1", main:"Entry", sub:"Apply after reviewing the job details." },
            { title:"Step 2", main:"Work screening", sub:"Results in 3–5 business days after entry." },
            { title:"Step 3", main:"Interview", sub:"Mid-career: 1 round / New grad: up to 2 rounds." },
            { title:"Step 4", main:"Offer", sub:"Written offer to successful candidates." }
          ]
        }
      },
      "effects-designer-compositor": {
        titleHtml: "Effects Designer<br>Compositor",
        box: {
          head: "■Job Description",
          sections: [
            { paragraphs: [
              "Create videos for games, TV commercials, pachinko/pachislo.",
              "Work with 2D/3D designers to craft effects that enhance visuals.",
              "Mainly responsible for final compositing/finishing."
            ]}
          ]
        },
        tableRows: [
          ["Working hours","10:00–19:00<br>* Remote work available"],
          ["Required skills/experience","• Proficient with After Effects."],
          ["Ideal profile","• Team-oriented.<br>• Comfortable with AE plugins.<br>• Passionate about CG.<br>• Enjoy turning ideas into visuals.<br>• Quality-driven."],
          ["Preferred","• Knowledge of PS/AI/Maya/3ds Max/C4D/ZBrush, etc.<br>• Professional FX experience in AE."],
          ["Salary","Competitive, based on experience and ability."],
          ["Holidays",">125 days/year (Sat/Sun, public holidays, summer/winter, paid, condolence)."],
          ["Benefits","6-month probation; performance bonus/raise; full insurance; commuting allowance; life-plan; DC pension; company trips/events."],
          ["Location","Tokyo / Shimane / Hanoi."],
          ["Documents","• Resume • Work history • Portfolio (required)."]
        ],
        process: {
          title: "Hiring Process",
          steps: [
            { title:"Step 1", main:"Entry", sub:"Apply after reviewing the JD." },
            { title:"Step 2", main:"Work screening", sub:"Results within 3–5 business days." },
            { title:"Step 3", main:"Interview", sub:"Mid-career: 1 / New grad: up to 2." },
            { title:"Step 4", main:"Offer", sub:"Written offer to successful candidates." }
          ]
        }
      },
      "2DCG-designer": {
        titleHtml: "2DCG Designer",
        box: {
          head: "■Job Description",
          sections: [
            { paragraphs: [
              "Produce visuals for games/CM/pachinko/pachislo.",
              "Create 2D assets: backgrounds, characters, UI, logos, etc.",
              "May join storyboard and presentation ideation.",
              "* Being strong in any single area is fine."
            ]}
          ]
        },
        tableRows: [
          ["Working hours","10:00–19:00<br>* Remote work available"],
          ["Required skills/experience","• Photoshop / Illustrator."],
          ["Ideal profile","• Loves drawing; enjoys design/layout thinking; strong ownership of visual quality; can translate anime worlds into design; team player."],
          ["Preferred","• Knowledge of AE/Maya/3ds Max/C4D/ZBrush…<br>• Professional design experience using PS/AI.<br>• Experience in pachinko/pachislo design."],
          ["Salary","Competitive, based on experience."],
          ["Holidays",">125 days/year (Sat/Sun, public holidays, summer/winter, paid, condolence)."],
          ["Benefits","6-month probation; performance bonus/raise; full insurance; commuting allowance; life-plan; DC pension; company trips/events."],
          ["Location","Tokyo / Shimane / Hanoi."],
          ["Documents","• Resume • Work history • (Optional) Proposal/Portfolio."]
        ],
        process: {
          title: "Hiring Process",
          steps: [
            { title:"Step 1", main:"Entry", sub:"Apply after reviewing the JD." },
            { title:"Step 2", main:"Work screening", sub:"Results within 3–5 business days." },
            { title:"Step 3", main:"Interview", sub:"Mid-career: 1 / New grad: up to 2." },
            { title:"Step 4", main:"Offer", sub:"Written offer to successful candidates." }
          ]
        }
      },
      "3DCG-designer": {
        titleHtml: "3DCG Designer",
        box: {
          head: "■Job Description",
          sections: [
            { paragraphs: [
              "Create videos for games/CM/pachinko/pachislo.",
              "Handle 3D from modeling (props/characters/backgrounds/logos) to compositing.",
              "May build scenes from storyboards.",
              "* Being strong in any single area is fine."
            ]}
          ]
        },
        tableRows: [
          ["Working hours","10:00–19:00<br>* Remote work available"],
          ["Required skills/experience","• Maya/3ds Max/C4D/ZBrush etc.; After Effects."],
          ["Ideal profile","• Passion for CG; quality focused; proactive; team player."],
          ["Preferred","• Knowledge of PS/AI/AE.<br>• Experience in modeling/rigging/animation with Maya/3ds Max."],
          ["Salary","Competitive, based on experience."],
          ["Holidays",">125 days/year."],
          ["Benefits","6-month probation; performance bonus/raise; full insurance; commuting allowance; life-plan; DC pension; company trips/events."],
          ["Location","Tokyo / Shimane / Hanoi."],
          ["Documents","• Resume • Work history • Portfolio."]
        ],
        process: {
          title: "Hiring Process",
          steps: [
            { title:"Step 1", main:"Entry", sub:"Apply after reviewing the JD." },
            { title:"Step 2", main:"Work screening", sub:"Results within 3–5 business days." },
            { title:"Step 3", main:"Interview", sub:"Mid-career: 1 / New grad: up to 2." },
            { title:"Step 4", main:"Offer", sub:"Written offer to successful candidates." }
          ]
        }
      },
      programmer: {
        titleHtml: "Programmer",
        box: {
          head: "■Job Description",
          sections: [
            { paragraphs: [
              "Work directly with major manufacturers; collaborate with direction/video/payout teams.",
              "Own program development."
            ]}
          ]
        },
        tableRows: [
          ["Working hours","10:00–19:00<br>* Remote work available"],
          ["Required skills/experience","• Programming experience."],
          ["Ideal profile","• Passion for making things; strong communication."],
          ["Preferred","• C/C++/C#; Assembly; Firmware/Game/DevTools; interest in pachinko/pachislo."],
          ["Salary","Competitive, based on experience."],
          ["Holidays",">125 days/year."],
          ["Benefits","Same as above."],
          ["Location","Tokyo / Shimane / Hanoi."],
          ["Documents","• Resume • Work history • (Optional) Proposal."]
        ],
        process: {
          title: "Hiring Process",
          steps: [
            { title:"Step 1", main:"Entry", sub:"Apply after reviewing the JD." },
            { title:"Step 2", main:"Interview", sub:"Mid-career: 1 round / New grad: up to 2." },
            { title:"Step 3", main:"Offer", sub:"Written offer to successful candidates." }
          ]
        }
      },
      "planning-design": {
        titleHtml: "Planning & Design",
        box: {
          head: "■Job Description",
          sections: [
            { paragraphs: [
              "Engage in pachinko/pachislo development/management under contract.",
              "Act as the “control tower,” driving from idea to completion with each team.",
              "A role that lives on passion."
            ]}
          ]
        },
        tableRows: [
          ["Working hours","10:00–19:00<br>* Remote work available"],
          ["Required skills/experience","• Basic PC skills: Word/Excel/PowerPoint."],
          ["Ideal profile","• Clear communicator and team player; curious and proactive."],
          ["Preferred","• Love for pachinko/pachislo; can convey passion; game/amusement background; gaming machine dev experience."],
          ["Salary","Competitive, based on experience."],
          ["Holidays",">125 days/year."],
          ["Benefits","Same as above."],
          ["Location","Tokyo / Shimane / Hanoi."],
          ["Documents","• Resume • Work history • (Optional) Proposal."]
        ],
        process: {
          title: "Hiring Process",
          steps: [
            { title:"Step 1", main:"Entry", sub:"Apply after reviewing the JD." },
            { title:"Step 2", main:"Interview", sub:"Mid-career: 1 round / New grad: up to 2." },
            { title:"Step 3", main:"Offer", sub:"Written offer to successful candidates." }
          ]
        }
      },
      "ball-output-design": {
        titleHtml: "Payout Design",
        box: {
          head: "■Job Description",
          sections: [
            { paragraphs: [
              "Calculate payout amounts and payout ratios for pachislo.",
              "Best fit for those with strong math/statistics foundation."
            ]}
          ]
        },
        tableRows: [
          ["Working hours","10:00–19:00<br>* Remote work available"],
          ["Required skills/experience","• Basic PC skills: Word/Excel/PowerPoint."],
          ["Ideal profile","• Strong communication and teamwork; curious and proactive."],
          ["Preferred","• Passion for pachinko/pachislo; can convey ideas; pachislo payout design experience."],
          ["Salary","Competitive, based on experience."],
          ["Holidays",">125 days/year."],
          ["Benefits","Same as above."],
          ["Location","Tokyo / Shimane / Hanoi."],
          ["Documents","• Resume • Work history • (Optional) Proposal."]
        ],
        process: {
          title: "Hiring Process",
          steps: [
            { title:"Step 1", main:"Entry", sub:"Apply after reviewing the JD." },
            { title:"Step 2", main:"Interview", sub:"Aptitude test included." },
            { title:"Step 3", main:"Offer", sub:"Written offer to successful candidates." }
          ]
        }
      }
    }
  };


  /* ========= 0) CONSTANTS ========= */
  const IMG_BASE      = '../image/';
  const SUPPORTED     = ['ja','vi','en'];
  const DEFAULT_LANG  = 'ja';

  /* ========= 1) STATE ========= */
  const state = {
    lang: DEFAULT_LANG,
    keys: [] // list id của các section job
  };

  /* ========= 2) HELPERS ========= */
  function getJobLocale(sectionId, lang) {
    const pool  = window.LOCALES || {};
    const order = [lang, 'en', 'vi', 'ja']; // fallback ưu tiên
    let merged  = {};
    for (const l of order) {
      if (pool[l] && pool[l][sectionId]) {
        merged = Object.assign({}, pool[l][sectionId], merged); // dữ liệu theo lang hiện tại sẽ đè
      }
    }
    return merged;
  }

  function setImg($img, fileName) {
    if (!$img.length || !fileName) return;
    const src = IMG_BASE + String(fileName || '');
    $img.attr('src', encodeURI(src));
  }

  function pickLang() {
    const urlLang = new URLSearchParams(location.search).get('lang') || '';
    const saved   = localStorage.getItem('siteLang') || '';
    const nav     = (navigator.language || '').slice(0,2);
    return [urlLang, saved, nav, DEFAULT_LANG]
      .map(s => (s||'').toLowerCase())
      .find(l => SUPPORTED.includes(l)) || DEFAULT_LANG;
  }

  function setURLParam(name, value) {
    const u = new URL(location.href);
    u.searchParams.set(name, value);
    history.replaceState({}, '', u);
  }

  function setHash(id) {
    if (!id) return;
    const u = new URL(location.href);
    u.hash = id;
    history.replaceState({}, '', u);
  }

  /* ========= 3) RENDERERS ========= */
  function renderMenu(lang) {
    const L = (window.LOCALES && window.LOCALES[lang]) || {};
    const map = L.__menu || {};
    $('.job-open-detail-btn').each(function(){
      const key = $(this).data('target');
      if (map[key]) $(this).text(map[key]);
    });
  }

  function renderSection(sectionId, lang) {
    const L   = getJobLocale(sectionId, lang);
    const $sec= $('#'+sectionId);
    if (!$sec.length) { console.warn('[jobs-i18n] Missing section:', sectionId); return; }
    if (!Object.keys(L).length) { console.warn('[jobs-i18n] No locale data for:', sectionId, lang); return; }

    // 1) images + title
    if (L.images){
      if (L.images.light) setImg($sec.find('.job-bg-light img'), L.images.light);
      if (L.images.dark)  setImg($sec.find('.job-bg-dark  img'), L.images.dark);
      if (L.images.table) setImg($sec.find('.job-bg-table img'), L.images.table);
    }
    if (L.titleHtml) $sec.find('.job-title').html(L.titleHtml);

    // 2) box
    const $box = $sec.find('.job-box');
    if ($box.length){
      $box.empty();
      if (L.box && L.box.head){
        $('<p class="job-head"/>').html(String(L.box.head)).appendTo($box);
      }
      if (L.box && Array.isArray(L.box.sections)){
        L.box.sections.forEach(sec => {
          if (sec.subtitle) $('<p class="job-sub"/>').html(String(sec.subtitle)).appendTo($box);
          (sec.paragraphs||[]).forEach(t => $('<p class="job-text"/>').html(String(t)).appendTo($box));
          (sec.items||[]).forEach(t => $('<p class="job-item"/>').html(String(t)).appendTo($box));
        });
      }
    }

    // 3) table
    const $tbody = $sec.find('.job-table tbody');
    if ($tbody.length && Array.isArray(L.tableRows)){
      $tbody.empty();
      L.tableRows.forEach(([th, td]) => {
        const $tr = $('<tr/>');
        $('<th/>').html(String(th)).appendTo($tr);
        $('<td/>').html(String(td)).appendTo($tr);
        $tbody.append($tr);
      });
    }

    // 4) process
    if (L.process){
      $sec.find('.subtitle-text-job').text(L.process.title || 'Process');
      const $flow = $sec.find('.job-process-flow');
      if ($flow.length){
        $flow.empty();
        (L.process.steps || []).forEach((st, i, arr) => {
          const $step = $('<div class="process-step"/>');
          const $hd   = $('<div class="step-header"/>').appendTo($step);
          $('<img class="step-bg" alt="Step BG">')
            .attr('src', encodeURI(IMG_BASE + '長方形 1140.png')).appendTo($hd);
          $('<span class="step-title"/>').text(st.title || ('Step '+(i+1))).appendTo($hd);
          const $ct = $('<div class="step-content"/>').appendTo($step);
          $('<p class="step-main"/>').text(st.main || '').appendTo($ct);
          $('<p class="step-sub"/>').text(st.sub || '').appendTo($ct);
          $flow.append($step);
          if (i < arr.length - 1){
            $flow.append('<div class="triangle-play"></div><div class="triangle-play-01"></div>');
          }
        });
      }
    }
  }

  function renderAll(lang, keys){
    renderMenu(lang);
    (keys || []).forEach(k => renderSection(k, lang));
  }

  /* ========= 4) UI STATES ========= */
  function openSection(sectionId, behavior='smooth'){
    // Active button
    $('.job-open-detail-btn').removeClass('active');
    $(`.job-open-detail-btn[data-target="${sectionId}"]`).addClass('active');

    // Active section (rất quan trọng vì CSS ẩn nếu không có .active)
    $('.section-job-heading').removeClass('active');
    const $sec = $('#'+sectionId).addClass('active');

    // Scroll & hash
    if ($sec.length){
      const top = $sec.offset().top - 20;
      $('html, body').stop().animate({ scrollTop: top }, (behavior==='auto'?0:300));
      setHash(sectionId);
    }
    return sectionId;
  }

  function markLangButtons(lang){
    $('.top-language .lang-item').removeClass('is-active');
    $('.top-language .lang-btn').removeAttr('aria-current');
    const $btn = $(`.top-language .lang-btn[data-lang="${lang}"]`);
    $btn.attr('aria-current','true').closest('.lang-item').addClass('is-active');
  }

  /* ========= 5) INIT ========= */
  $(function () {
    // Guard: chỉ chạy trên trang có khối job
    if (!$('.job-open-heading').length && !$('.section-job-heading').length) return;

    // Thu thập id section
    state.keys = $('.section-job-heading').map(function(){ return this.id; }).get();

    // Ngôn ngữ khởi tạo
    state.lang = pickLang();
    localStorage.setItem('siteLang', state.lang);
    setURLParam('lang', state.lang);
    markLangButtons(state.lang);

    // Render lần đầu
    renderAll(state.lang, state.keys);

    // Mở section theo hash nếu có, nếu không mở cái đầu
    const initialHash = (location.hash||'').replace(/^#/,'');
    const firstKey    = state.keys[0];
    const targetOpen  = state.keys.includes(initialHash) ? initialHash : firstKey;
    openSection(targetOpen, 'auto');

    // Click tab menu
    $(document).on('click', '.job-open-detail-btn[data-target]', function(e){
      e.preventDefault();
      const id = String($(this).data('target')||'');
      if (!id) return;
      openSection(id);
    });

    // Đổi ngôn ngữ
    $(document).on('click', '.top-language .lang-btn[data-lang]', function(e){
      e.preventDefault();
      const lang = String($(this).data('lang')||'').toLowerCase();
      if (!SUPPORTED.includes(lang)) return;
      state.lang = lang;
      localStorage.setItem('siteLang', state.lang);
      setURLParam('lang', state.lang);
      markLangButtons(state.lang);

      // Render lại theo ngôn ngữ mới
      renderAll(state.lang, state.keys);

      // Giữ nguyên section đang mở
      const activeId = $('.job-open-detail-btn.active').data('target')
                    || (location.hash||'').replace(/^#/, '')
                    || state.keys[0];
      openSection(activeId, 'auto');
    });

    // Người dùng đổi hash thủ công → cũng nhảy đúng section
    $(window).on('hashchange', function(){
      const h = (location.hash||'').replace(/^#/,'');
      if (state.keys.includes(h)) openSection(h);
    });

    // Expose (tuỳ dùng)
    window.jobsI18n = {
      setLang(l){ if (SUPPORTED.includes(l)) { state.lang = l; renderAll(l, state.keys); } return state.lang; },
      openSection,
      state
    };
  });

})(jQuery);