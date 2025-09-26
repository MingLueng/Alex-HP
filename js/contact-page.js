/* contact-page.all-in-one.js */
(function ($) {
  'use strict';

  /* ============ CONFIG ============ */
  var GAS_URL = 'https://script.google.com/macros/s/AKfycbzE0sMTUkt-meVI4VqjD6f3zfTtnA68lpkxo7EeGQySKBus5xdjTisIqeuLsGZVIoQ/exec'; 

  /* ============ I18N ============ */
  var HERO_I18N = {
    ja:{ leftHTML:'枠にとらわれない <br>創造力で<br>未来をデザイン<br>', info:'お問い合わせ', heading:'CONTACT',
      bgs:["../image/レイヤー 853.png","../image/レイヤー 851.png"] },
    vi:{ leftHTML:'Vượt khỏi khuôn khổ,<br>bằng sức sáng tạo<br>để thiết kế tương lai<br>', info:'Liên hệ', heading:'Liên hệ',
      bgs:["../image/レイヤー 853.png","../image/レイヤー 851.png"] },
    en:{ leftHTML:'Design the future<br>with creativity<br>beyond boundaries<br>', info:'Contact', heading:'CONTACT',
      bgs:["../image/レイヤー 853.png","../image/レイヤー 851.png"] }
  };

  var FORM_I18N = {
    ja: {
      intro: '以下のフォームにお問い合わせ内容をご記入いただき、送信してください',
      steps: ['STEP1　内容入力','STEP2　内容確認','STEP3　受付完了'],
      name: 'お名前', kana: 'フリガナ', phone: '電話番号',
      email: 'メールアドレス', email2: 'メールアドレス確認用',
      message: 'お問い合わせ内容',
      required: '※必須',
      emailNote:
        'ドメイン指定受信の設定をされている方は、「alex7.co.jp」を<br>' +
        '指定メールアドレスに追加してください。<br>【ドメイン指定の方法】<br>' +
        '■<a href="https://www.nttdocomo.co.jp/info/spam_mail/measure/url/index.html" target="_blank">docomoをご使用の方</a> ' +
        '■<a href="http://www.au.kddi.com/support/mobile/trouble/forestalling/mail/anti-spam/fillter/" target="_blank">auをご使用の方</a>　　' +
        '■<a href="http://www.softbank.jp/mobile/support/antispam/settings/indivisual/whiteblack/" target="_blank">SoftBankをご使用の方</a>',
      btnCheck: '入力内容を確認する',
      btnBack: '入力画面に戻る',
      confirmIntro: '以下の内容で間違いがなければ、「送信」ボタンを押してください。',
      btnSend: '送信する',
      thanks: 'お問い合わせありがとうございました。<br>送信は無事に完了しました。',
      phEmail: 'info@example.com',
      sending:'送信中…',
      ok:'お問い合わせありがとうございました。送信は無事に完了しました。',
      ng:'送信に失敗しました。時間をおいて再度お試しください。',
      errors:{
        name:'「お名前」は必須入力項目です。',
        email:'「メールアドレス」は必須入力項目です。',
        email2:'「メールアドレス：確認用」は必須入力項目です。',
        message:'「お問い合わせ内容」は必須入力項目です。',
        emailFmt:'メールアドレスの形式が正しくありません。',
        emailNotMatch:'メールアドレス確認用が一致しません。',
        phoneLen:'電話番号は9〜11桁の数字で入力してください。'
      }
    },
    vi: {
      intro: 'Vui lòng điền nội dung liên hệ vào mẫu dưới đây và gửi cho chúng tôi.',
      steps: ['STEP1 Nhập nội dung','STEP2 Xác nhận','STEP3 Hoàn tất'],
      name: 'Họ và tên', kana: 'Furigana', phone: 'Số điện thoại',
      email: 'Email', email2: 'Xác nhận email',
      message: 'Nội dung liên hệ',
      required: '※bắt buộc',
      emailNote:
        'Nếu bạn chặn thư theo tên miền, hãy thêm “alex7.co.jp” vào danh sách cho phép.<br>' +
        'Hướng dẫn: ' +
        '■<a href="https://www.nttdocomo.co.jp/info/spam_mail/measure/url/index.html" target="_blank">docomo</a> ' +
        '■<a href="http://www.au.kddi.com/support/mobile/trouble/forestalling/mail/anti-spam/fillter/" target="_blank">au</a> ' +
        '■<a href="http://www.softbank.jp/mobile/support/antispam/settings/indivisual/whiteblack/" target="_blank">SoftBank</a>',
      btnCheck: 'Kiểm tra nội dung',
      btnBack: 'Quay lại màn hình nhập',
      confirmIntro: 'Nếu thông tin bên dưới chính xác, vui lòng bấm “Gửi”.',
      btnSend: 'Gửi đi',
      thanks: 'Cảm ơn bạn. Gửi thành công.',
      phEmail: 'info@vidu.com',
      sending:'Đang gửi…',
      ok:'Cảm ơn bạn. Gửi thành công.',
      ng:'Gửi thất bại. Vui lòng thử lại sau.',
      errors:{
        name:'“Họ và tên” là bắt buộc.',
        email:'“Email” là bắt buộc.',
        email2:'“Xác nhận email” là bắt buộc.',
        message:'“Nội dung liên hệ” là bắt buộc.',
        emailFmt:'Định dạng email không hợp lệ.',
        emailNotMatch:'Email xác nhận không khớp.',
        phoneLen:'Số điện thoại phải 9–11 chữ số.'
      }
    },
    en: {
      intro: 'Please fill in the form below and send your inquiry.',
      steps: ['STEP1 Input','STEP2 Confirm','STEP3 Completed'],
      name: 'Name', kana: 'Furigana', phone: 'Phone',
      email: 'Email address', email2: 'Confirm email',
      message: 'Message',
      required: '*required',
      emailNote:
        'If you use domain filtering, please add “alex7.co.jp” to your allow list.<br>' +
        'How to set up: ' +
        '■<a href="https://www.nttdocomo.co.jp/info/spam_mail/measure/url/index.html" target="_blank">docomo</a> ' +
        '■<a href="http://www.au.kddi.com/support/mobile/trouble/forestalling/mail/anti-spam/fillter/" target="_blank">au</a> ' +
        '■<a href="http://www.softbank.jp/mobile/support/antispam/settings/indivisual/whiteblack/" target="_blank">SoftBank</a>',
      btnCheck: 'Review your input',
      btnBack: 'Back to input',
      confirmIntro: 'If everything is correct, click “Send”.',
      btnSend: 'Send',
      thanks: 'Thank you. Your message has been sent.',
      phEmail: 'info@example.com',
      sending:'Sending…',
      ok:'Thank you. Your message has been sent.',
      ng:'Failed to send. Please try again later.',
      errors:{
        name:'“Name” is required.',
        email:'“Email address” is required.',
        email2:'“Confirm email” is required.',
        message:'“Message” is required.',
        emailFmt:'Invalid email format.',
        emailNotMatch:'Emails do not match.',
        phoneLen:'Phone number must be 9–11 digits.'
      }
    }
  };

  /* ============ helpers ============ */
  function curLang(){
    var v=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
    return /^(ja|vi|en)$/.test(v)?v:'ja';
  }
  function setLangInUrl(lang){
    var u=new URL(location.href);
    u.searchParams.set('lang',lang);
    history.replaceState(null,'',u.pathname+'?'+u.searchParams.toString()+u.hash);
  }
  function show($el, vis){ if(!$el || !$el.length) return; $el.css('display', vis ? '' : 'none'); }
  function emailOK(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function onlyDigits(v){ return String(v||'').replace(/\D/g,''); }
  function scrollTo($wrap){ $('html,body').animate({scrollTop: Math.max(0, $wrap.offset().top - 20)}, 300); }

  function applyHeroI18n($root, lang){
    if(!$root.length) return;
    var t = HERO_I18N[lang] || HERO_I18N.ja;
    $root.find('.contact-left-text h2').html(t.leftHTML);
    $root.find('.contact-company-info').text(t.info);
    $root.find('.contact-heading-info').text(t.heading);
    var $bgs=$root.find('.about-bg');
    if(t.bgs && t.bgs.length){
      $bgs.eq(0).css('background-image','url("'+t.bgs[0]+'")');
      if($bgs.eq(1).length && t.bgs[1]) $bgs.eq(1).css('background-image','url("'+t.bgs[1]+'")');
    }
  }

  function applyFormI18n(lang){
    var t = FORM_I18N[lang] || FORM_I18N.ja;
    function txt($sel, s){ if($sel.length) $sel.text(s); }
    function html($sel, s){ if($sel.length) $sel.html(s); }

    // Intro
    html($('.contact-intro'), t.intro);
    // Step
    txt($('.step-label-1'), t.steps[0]);
    txt($('.step-label-2'), t.steps[1]);
    txt($('.step-label-3'), t.steps[2]);
    // Labels (form + confirm table use same class names)
    txt($('.label-name'), t.name);
    txt($('.label-kana'), t.kana);
    txt($('.label-phone'), t.phone);
    txt($('.label-email'), t.email);
    txt($('.label-email2'), t.email2);
    txt($('.label-message'), t.message);
    // Required flags
    txt($('.req-name'), t.required);
    txt($('.req-email'), t.required);
    txt($('.req-email2'), t.required);
    txt($('.req-body'), t.required);
    // Email note + placeholders
    html($('.email-note'), t.emailNote);
    $('[name="email"]').attr({ title:t.phEmail, placeholder:t.phEmail });
    $('[name="email2"]').attr({ title:t.phEmail, placeholder:t.phEmail });
    // Buttons, messages
    txt($('#sub_btn .submit'), t.btnCheck);
    txt($('#confirm_btn .h_back').first(), t.btnBack);
    txt($('.submittable .h_back'), t.btnBack);
    txt($('.submittable .submit-a'), t.btnSend);
    html($('.submittable .confirm-intro'), t.confirmIntro);
    html($('.thanks-text'), t.thanks);
  }

  /* ============ boot ============ */
  $(function () {
    if (window.PAGE && window.PAGE !== 'contact') return;

    var lang = curLang();
    setLangInUrl(lang);

    // HERO
    var $heroRoot = $('.contact-heading-info').closest('.about');
    applyHeroI18n($heroRoot, lang);
    $(document).on('click', '.top-language .lang-btn', function (e) {
      e.preventDefault();
      var next = String($(this).data('lang')||'').toLowerCase();
      if(!/^(ja|vi|en)$/.test(next)) return;
      setLangInUrl(next);
      applyHeroI18n($heroRoot, next);
      applyFormI18n(next);
    });

    // FORM I18N render
    applyFormI18n(lang);

    // ===== DOM form =====
    var $stepLis   = $("#position_box li");
    var $formBox   = $("#form_box");
    var $form      = $("#applyform");
    if (!$formBox.length || !$form.length) return;

    var $submitBtn      = $form.find('button.submit[type="button"]');
    var $errBox         = $(".errm");
    var $errBackWrap    = $errBox.next('#confirm_btn'); // cụm nút ngay sau .errm
    var $confirmBox     = $(".submittable");
    var $confirmForm    = $confirmBox.find("form");
    var $confirmSendBtn = $confirmBox.find('button.submit-a[type="button"]');
    var $thanksP        = $formBox.find(".thanks-text");
    var MSG             = FORM_I18N[lang] || FORM_I18N.ja;

    function setStep(n){
      $stepLis.each(function(i){ $(this).toggleClass('active', i === n - 1); });
      show($form,    n === 1);
      show($thanksP, n === 3);
      if (n !== 2){ show($errBox, false); show($errBackWrap, false); show($confirmBox, false); }
    }
    function values(){
      return {
        name :  ($form.find('input[name="お名前"]').val() || '').trim(),
        kana :  ($form.find('input[name="フリガナ"]').val() || '').trim(),
        phone:  onlyDigits($form.find('input[name="電話番号"]').val() || ''),
        email:  ($form.find('input[name="email"]').val() || '').trim(),
        email2: ($form.find('input[name="email2"]').val() || '').trim(),
        message:($form.find('textarea[name="お問い合わせ内容"]').val() || '').trim(),
        lang :  lang,
        userAgent: navigator.userAgent
      };
    }
    function renderErrors(list){
      if (!$errBox.length) return;
      var html = '<h4 class="err-title">'+ (MSG.errorsTitle || '未入力項目があります') +'</h4>' +
                 list.map(function(t){ return '<font color="#ff0000">'+t+'</font><br>'; }).join('');
      $errBox.html(html);
    }
    function fillConfirm(nameAttr, val){
      if (!$confirmBox.length) return;
      var $hidden = $confirmBox.find('input[name="'+nameAttr+'"]');
      if ($hidden.length) $hidden.val(val);
      var $td = $hidden.closest('td');
      if ($td.length){
        $td.contents().filter(function(){ return this.nodeType === 3; }).remove();
        $td.prepend(document.createTextNode(val || '—'));
      }
    }

    // Init visibility
    show($errBox, false);
    show($errBackWrap, false);
    show($confirmBox, false);
    show($thanksP, false);
    setStep(1);

    // Back buttons
    $('.h_back').removeAttr('onclick').off('click.contactBack').on('click.contactBack', function(e){
      e.preventDefault();
      setStep(1);
      scrollTo($formBox);
    });

    // Validate → Step2
    function handleConfirm(e){
      e.preventDefault();
      var v = values(), errs = [];
      if (!v.name)    errs.push(MSG.errors.name);
      if (!v.email)   errs.push(MSG.errors.email);
      if (!v.email2)  errs.push(MSG.errors.email2);
      if (!v.message) errs.push(MSG.errors.message);
      if (v.email && !emailOK(v.email)) errs.push(MSG.errors.emailFmt);
      if (v.email && v.email2 && v.email !== v.email2) errs.push(MSG.errors.emailNotMatch);
      if (v.phone && (v.phone.length < 9 || v.phone.length > 11)) errs.push(MSG.errors.phoneLen);

      if (errs.length){
        renderErrors(errs);
        setStep(2);
        show($confirmBox, false);
        show($errBox, true);
        show($errBackWrap, true);
        scrollTo($formBox);
        return;
      }

      // Fill confirm table
      show($errBox, false);
      show($errBackWrap, false);
      fillConfirm('お名前', v.name);
      fillConfirm('フリガナ', v.kana);
      fillConfirm('電話番号', v.phone);
      fillConfirm('email',   v.email);
      fillConfirm('お問い合わせ内容', v.message);
      var $hEmail2 = $confirmBox.find('input[name="email2"]');
      if ($hEmail2.length) $hEmail2.val(v.email2);

      setStep(2);
      show($confirmBox, true);
      scrollTo($formBox);
    }
    if ($submitBtn.length) $submitBtn.off('click.contactConfirm').on('click.contactConfirm', handleConfirm);
    $form.off('submit.contactConfirm').on('submit.contactConfirm', handleConfirm);

    // Step2 → AJAX → Step3
    function handleFinalSend(e){
      e.preventDefault();
      var data = values();
      var oldText = $confirmSendBtn.text();
      $confirmSendBtn.prop('disabled', true).text(MSG.sending);
      $.ajax({
        url: GAS_URL,
        method: 'POST',
        data: data,
        timeout: 20000
      }).done(function(respText){
        var ok=false, err='';
        try{
          var obj=(typeof respText==='string')?JSON.parse(respText):respText;
          ok=!!(obj && obj.ok); err=obj&&obj.error?obj.error:'';
        }catch(_){
          ok=String(respText||'').toLowerCase().indexOf('"ok":true')!==-1;
        }
        if(ok){
          $('.submittable').hide();
          $thanksP.html(MSG.ok).show();
          setStep(3);
        }else{
          alert(MSG.ng + (err?('\n[Server] '+err):''));
        }
      }).fail(function(xhr){
        var msg = MSG.ng + '\n[HTTP] ' + (xhr && xhr.status ? xhr.status : 'network');
        if(xhr && xhr.responseText) msg += '\n' + xhr.responseText;
        alert(msg);
      }).always(function(){
        $confirmSendBtn.prop('disabled', false).text(oldText);
        scrollTo($formBox);
      });
    }
    if ($confirmSendBtn.length) $confirmSendBtn.off('click.contactSend').on('click.contactSend', handleFinalSend);
    if ($confirmForm.length)    $confirmForm.off('submit.contactSend').on('submit.contactSend', handleFinalSend);
  });

})(jQuery);


