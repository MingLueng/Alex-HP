// /js/access-page.js
(function ($) {
  'use strict';
  // if (window.PAGE && window.PAGE !== 'access') return;

  /* ================= I18N ================= */
  var ACCESS_I18N = {
    ja: {
      hero: { info: '会社案内', heading: 'ACCESS' },
      nav : [
        { id: '東京本社',       label: '東京本社' },
        { id: '島根支社',       label: '島根支社' },
        { id: 'ベトナムスタジオ', label: 'ベトナムスタジオ' }
      ],
      sections: {
        '東京本社':       { title: '東京本社' },
        '島根支社':       { title: '島根支社' },
        'ベトナムスタジオ': { title: 'ベトナムスタジオ' }
      },
      mapWide: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202.39831811366471!2d139.7428421!3d35.7416336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d06950226b7%3A0x3823e3ecc936f2d9!2z44ix44Ki44Os44OD44Kv44K5!5e0!3m2!1sja!2s!4v1754910212901!5m2!1sja!2s'
    },
    vi: {
      hero: { info: 'Giới thiệu công ty', heading: 'TRUY CẬP' },
      nav : [
        { id: '東京本社',       label: 'Trụ sở Tokyo' },
        { id: '島根支社',       label: 'Chi nhánh Shimane' },
        { id: 'ベトナムスタジオ', label: 'Studio Việt Nam' }
      ],
      sections: {
        '東京本社':       { title: 'Trụ sở Tokyo' },
        '島根支社':       { title: 'Chi nhánh Shimane' },
        'ベトナムスタジオ': { title: 'Studio Việt Nam' }
      },
      // cùng bản đồ nhưng đổi tham số ngôn ngữ sang 'vi'
      mapWide: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202.39831811366471!2d139.7428421!3d35.7416336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d06950226b7%3A0x3823e3ecc936f2d9!2z44ix44Ki44Os44OD44Kv44K5!5e0!3m2!1svi!2s!4v1754910212901!5m2!1svi!2s'
    },
    en: {
      hero: { info: 'Company Info', heading: 'ACCESS' },
      nav : [
        { id: '東京本社',       label: 'Tokyo HQ' },
        { id: '島根支社',       label: 'Shimane Office' },
        { id: 'ベトナムスタジオ', label: 'Vietnam Studio' }
      ],
      sections: {
        '東京本社':       { title: 'Tokyo HQ' },
        '島根支社':       { title: 'Shimane Office' },
        'ベトナムスタジオ': { title: 'Vietnam Studio' }
      },
      mapWide: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d202.39831811366471!2d139.7428421!3d35.7416336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d06950226b7%3A0x3823e3ecc936f2d9!2z44ix44Ki44Os44OD44Kv44K5!5e0!3m2!1sen!2s!4v1754910212901!5m2!1sen!2s'
    }
  };

  /* =============== helpers =============== */
  function curLang() {
    var v = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    return /^(ja|vi|en)$/.test(v) ? v : 'ja';
  }
  function setLangInUrl(lang) {
    var u = new URL(location.href);
    u.searchParams.set('lang', lang);
    history.replaceState(null, '', u.pathname + '?' + u.searchParams.toString() + u.hash);
  }
  function fixedTop() {
    var h = 0;
    ['#masthead', '.header-wrapper', 'header', '.submenu-tabs', '.submenu-tabs-1', '.top-fixed', '.site-toolbar']
      .forEach(function (s) {
        var el = $(s)[0]; if (!el) return;
        var cs = window.getComputedStyle(el), r = el.getBoundingClientRect();
        if ((cs.position === 'fixed' || cs.position === 'sticky') && r.top <= 0) h += el.offsetHeight;
      });
    return h;
  }
  function goAnchor(id) {
    var $el = $('#' + id); if (!$el.length) return;
    var y = $(window).scrollTop() + $el[0].getBoundingClientRect().top - fixedTop() - 8;
    $('html,body').stop(true).animate({ scrollTop: Math.max(0, y) }, 350);
    try { history.replaceState(null, '', '#' + id); } catch (_) {}
  }

  /* =============== renderers =============== */
  function renderHero(lang) {
    var t = (ACCESS_I18N[lang] || ACCESS_I18N.ja).hero;
    $('.access-company-info').text(t.info);
    $('.access-heading').text(t.heading);
  }

  function renderSubmenu(lang) {
    var list = (ACCESS_I18N[lang] || ACCESS_I18N.ja).nav;
    var html = '<ul>' + list.map(function (it) {
      return '<li><a href="#' + it.id + '">' + it.label + '</a></li>';
    }).join('') + '</ul>';
    $('nav.submenu-tabs .container').html(html);

    $('nav.submenu-tabs')
      .off('click.accessNav')
      .on('click.accessNav', 'a[href^="#"]', function (e) {
        e.preventDefault();
        var id = (this.getAttribute('href') || '').slice(1);
        if (id) goAnchor(id);
      });
  }

  // đổi các tiêu đề trong 3 section theo ngôn ngữ (giữ nguyên id)
  function renderSectionHeadings(lang) {
    var S = (ACCESS_I18N[lang] || ACCESS_I18N.ja).sections;
    Object.keys(S).forEach(function (id) {
      $('#' + CSS.escape(id) + ' .subtitle-text-recruit').text(S[id].title);
    });
  }

  // access-map (iframe to rộng trên cùng): thay src theo lang
  function renderAccessMap(lang) {
    var url = (ACCESS_I18N[lang] || ACCESS_I18N.ja).mapWide;
    var $iframe = $('.access-map iframe').first();
    if ($iframe.length) $iframe.attr('src', url);
  }

   if (!$('#東京本社').length) return; // chỉ chạy khi có section này

  /* ============== I18N ============== */
  var TOKYO_I18N = {
    ja: {
      title: '東京本社',
      address: '〒114-0024<br>東京都北区西ケ原1-46-13 横河駒込ビル1F',
      stations: [
        { line: '東京メトロ南北線', station: '西ケ原駅', time: '徒歩 7分', target: 'tyoVideo1', start: 0 },
        { line: 'JR京浜東北線',   station: '上中里駅', time: '徒歩10分', target: 'tyoVideo2' },
        { line: 'JR山手線',       station: '駒込駅',   time: '徒歩10分', target: 'tyoVideo3' }
      ],
      noteTop: '※ 当社ビルには駐車場のご用意がございません',
      noteBody: 'お車でお越しの際は、近隣のコインパーキングをご利用下さい。'
    },
    vi: {
      title: 'Trụ sở Tokyo',
      address: '〒114-0024<br>1F Yokogawa Komagome Bldg, 1-46-13 Nishigahara, Kita-ku, Tokyo',
      stations: [
        { line: 'Tokyo Metro Namboku', station: 'Nishigahara', time: 'Đi bộ 7 phút',  target: 'tyoVideo1', start: 0 },
        { line: 'JR Keihin–Tōhoku',    station: 'Kami-Nakazato', time: 'Đi bộ 10 phút', target: 'tyoVideo2' },
        { line: 'JR Yamanote',         station: 'Komagome',    time: 'Đi bộ 10 phút', target: 'tyoVideo3' }
      ],
      noteTop: '※ Toà nhà không có bãi đỗ xe',
      noteBody: 'Nếu đi ô tô, vui lòng sử dụng bãi đỗ (coin parking) gần đó.'
    },
    en: {
      title: 'Tokyo HQ',
      address: '1F Yokogawa Komagome Bldg, 1-46-13 Nishigahara, Kita-ku, Tokyo 114-0024',
      stations: [
        { line: 'Tokyo Metro Namboku Line', station: 'Nishigahara Sta.', time: '7 min on foot',  target: 'tyoVideo1', start: 0 },
        { line: 'JR Keihin–Tōhoku Line',    station: 'Kami-Nakazato Sta.', time: '10 min on foot', target: 'tyoVideo2' },
        { line: 'JR Yamanote Line',         station: 'Komagome Sta.',   time: '10 min on foot', target: 'tyoVideo3' }
      ],
      noteTop: '※ No parking available at our building',
      noteBody: 'If you drive, please use nearby coin-operated parking.'
    }
  };

  /* ============== helpers ============== */
  function curLang() {
    var v = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    return /^(ja|vi|en)$/.test(v) ? v : 'ja';
  }

  function renderTokyo(lang) {
    var t = (TOKYO_I18N[lang] || TOKYO_I18N.ja);
    var $root = $('#東京本社');

    // tiêu đề trong frame
    $root.find('.subtitle-text-recruit').text(t.title);

    // địa chỉ
    $root.find('.address-main').html(t.address);

    // danh sách trạm
    var htmlStations = t.stations.map(function (s) {
      var dataStart = (typeof s.start === 'number') ? (' data-start="' + s.start + '"') : '';
      return (
        '<div class="station-item">' +
          '<span class="linestream">' + s.line + '</span>' +
          '<span class="station">' + s.station + '</span>' +
          '<span class="time">' + s.time + '</span>' +
          '<img src="../image/グループ 213.png" alt="icon" class="arrow-icon" data-target="' + s.target + '"' + dataStart + '>' +
        '</div>'
      );
    }).join('');
    $root.find('.station-list').html(htmlStations);

    // ghi chú
    $root.find('.note .highlight').text(t.noteTop);
    $root.find('.note').contents().filter(function () {
      // Node text sau <span.highlight>
      return this.nodeType === 3;
    }).remove(); // xoá text cũ sau span

    // chèn <br> + note body
    $root.find('.note .highlight').after('<br>' + t.noteBody);
  }

  if (!$('#島根支社').length) return;

  /* ============== I18N ============== */
  var SHIMANE_I18N = {
    ja: {
      title: '島根支社',
      address: '〒690-0003<br>島根県松江市朝日町字伊勢宮477-17 松江SUNビル2F',
      stations: [
        { line: 'ＪＲ山陰本線',     station: '松江駅',     time: '徒歩 2分', target: 'officeVideo1', start: 0 },
        { line: '出雲縁結び空港',   station: '高速バス',   time: '40分',     target: 'officeVideo2', start: 15 },
        { line: '米子鬼太郎空港',   station: '高速バス',   time: '45分',     target: 'officeVideo3' }
      ],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406.1992811001661!2d133.06221558295513!3d35.46483833605955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355705c0e42c45dd%3A0xaf4da2ec82489406!2z5p2-5rGfU1VO44OT44Or!5e0!3m2!1sja!2s!4v1754984215155!5m2!1sja!2s'
    },
    vi: {
      title: 'Chi nhánh Shimane',
      address: '2F Matsue SUN Bldg, 477-17 Asahimachi Aza Isemiya, Matsue, Shimane 690-0003',
      stations: [
        { line: 'JR San’in Main',       station: 'Matsue',      time: 'Đi bộ 2 phút',  target: 'officeVideo1', start: 0 },
        { line: 'Sân bay Izumo Enmusubi', station: 'Xe buýt cao tốc', time: '40 phút',     target: 'officeVideo2', start: 15 },
        { line: 'Sân bay Yonago Kitaro',  station: 'Xe buýt cao tốc', time: '45 phút',     target: 'officeVideo3' }
      ],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406.1992811001661!2d133.06221558295513!3d35.46483833605955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355705c0e42c45dd%3A0xaf4da2ec82489406!2z5p2-5rGfU1VO44OT44Or!5e0!3m2!1svi!2s!4v1754984215155!5m2!1svi!2s'
    },
    en: {
      title: 'Shimane Office',
      address: '2F Matsue SUN Bldg, 477-17 Asahimachi Aza Isemiya, Matsue, Shimane 690-0003',
      stations: [
        { line: 'JR San’in Main Line', station: 'Matsue Sta.', time: '2 min on foot', target: 'officeVideo1', start: 0 },
        { line: 'Izumo Enmusubi Airport', station: 'Express Bus', time: '40 min',       target: 'officeVideo2', start: 15 },
        { line: 'Yonago Kitaro Airport',  station: 'Express Bus', time: '45 min',       target: 'officeVideo3' }
      ],
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406.1992811001661!2d133.06221558295513!3d35.46483833605955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355705c0e42c45dd%3A0xaf4da2ec82489406!2z5p2-5rGfU1VO44OT44Or!5e0!3m2!1sen!2s!4v1754984215155!5m2!1sen!2s'
    }
  };

  /* ============== helpers ============== */
  function curLang() {
    var v = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    return /^(ja|vi|en)$/.test(v) ? v : 'ja';
  }

  function renderShimane(lang) {
    var t = (SHIMANE_I18N[lang] || SHIMANE_I18N.ja);
    var $root = $('#島根支社');

    // tiêu đề
    $root.find('.subtitle-text-recruit').text(t.title);

    // địa chỉ
    $root.find('.address-main').html(t.address);

    // stations
    var htmlStations = t.stations.map(function (s) {
      var dataStart = (typeof s.start === 'number') ? (' data-start="' + s.start + '"') : '';
      return (
        '<div class="station-item">' +
          '<span class="linestream">' + s.line + '</span>' +
          '<span class="station">' + s.station + '</span>' +
          '<span class="time">' + s.time + '</span>' +
          '<img src="../image/グループ 213.png" alt="icon" class="arrow-icon" data-target="' + s.target + '"' + dataStart + '>' +
        '</div>'
      );
    }).join('');
    $root.find('.station-list').html(htmlStations);

    // Map embed bên trong Shimane section (khung nhỏ 350px)
    var $map = $root.find('.address-wrapper-001 iframe').first();
    if ($map.length) $map.attr('src', t.map);
  }

  var $root = $('#ベトナムスタジオ');
  if (!$root.length) return; // chỉ chạy khi section tồn tại

  /* ============== I18N ============== */
  var VNM_I18N = {
    ja: {
      title  : 'ベトナムスタジオ',
      address: 'ベトナム ハノイ市 カウザイ区 ディックヴォンハウ坊<br>Duy Tan通り78番路地3号 ACビル5F',
      // map embed đổi tham số ngôn ngữ ở cuối cho đúng locale
      map    : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0069106653827!2d105.78050717596975!3d21.03240948765185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4b44cd1fa1%3A0x128bd46360fd9b79!2sAC%20Building!5e0!3m2!1sja!2s!4v1754990366467!5m2!1sja!2s'
    },
    vi: {
      title  : 'Studio Việt Nam',
      address: 'Tầng 5, Tòa AC, Số 3, Ngõ 78 Duy Tân,<br>P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội, Việt Nam',
      map    : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0069106653827!2d105.78050717596975!3d21.03240948765185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4b44cd1fa1%3A0x128bd46360fd9b79!2sAC%20Building!5e0!3m2!1svi!2s!4v1754990366467!5m2!1svi!2s'
    },
    en: {
      title  : 'Vietnam Studio',
      address: '5F, AC Building, No.3, Lane 78, Duy Tan St.,<br>Dich Vong Hau Ward, Cau Giay Dist., Hanoi, Vietnam',
      map    : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0069106653827!2d105.78050717596975!3d21.03240948765185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4b44cd1fa1%3A0x128bd46360fd9b79!2sAC%20Building!5e0!3m2!1sen!2s!4v1754990366467!5m2!1sen!2s'
    }
  };

  /* ============== helpers ============== */
  function curLang () {
    var v = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    return /^(ja|vi|en)$/.test(v) ? v : 'ja';
  }

  function renderVietnam (lang) {
    var t = VNM_I18N[lang] || VNM_I18N.ja;

    // tiêu đề khung
    $root.find('.subtitle-text-recruit').text(t.title);

    // địa chỉ
    $root.find('.address-main').html(t.address);

    // map trong khối .address-wrapper-001
    var $map = $root.find('.address-wrapper-001 iframe').first();
    if ($map.length) $map.attr('src', t.map);

    // (tùy chọn) đảm bảo ảnh mặc định hiển thị, vì section này không có nút .arrow-icon
    var $wrap = $root.find('.building-video .video-wrapper');
    $wrap.find('iframe').hide();
    $wrap.find('.default-building-img').show();
  }



  // video click (jQuery)
  function bindVideoClicks() {
    $(document).off('click.accessVideo').on('click.accessVideo', '.arrow-icon', function () {
      var $btn = $(this);
      var $section = $btn.closest('section.recruit-heading');
      var $wrapper = $section.find('.building-video .video-wrapper');
      var $defaultImg = $wrapper.find('.default-building-img');
      var $iframes = $wrapper.find('iframe');

      var targetId = ($btn.data('target') || '').trim(); if (!targetId) return;
      var $target = $wrapper.find('#' + CSS.escape(targetId)); if (!$target.length) return;

      $defaultImg.hide();

      $iframes.each(function () {
        try {
          this.contentWindow && this.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'stopVideo', args: [] }), '*'
          );
        } catch (e) { }
        this.style.display = 'none';
      });

      $target.show();

      var start = parseInt($btn.data('start') || '0', 10);
      if (start > 0) {
        try {
          $target[0].contentWindow && $target[0].contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'seekTo', args: [start, true] }), '*'
          );
        } catch (e) { }
      }
      try {
        $target[0].contentWindow && $target[0].contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*'
        );
      } catch (e) { }
    });
  }

  /* =============== boot =============== */
  $(function () {
    var l = curLang();
    setLangInUrl(l);

    renderHero(l);
    renderSubmenu(l);
    renderSectionHeadings(l);
    renderAccessMap(l);
    bindVideoClicks();
    renderTokyo(curLang());
     renderShimane(curLang());
     renderVietnam(curLang());
    // đổi ngôn ngữ
    $(document).on('click', '.top-language .lang-btn', function (e) {
      e.preventDefault();
      var next = String($(this).data('lang') || '').toLowerCase();
      if (!/^(ja|vi|en)$/.test(next)) return;
      setLangInUrl(next);
      renderHero(next);
      renderSubmenu(next);
      renderSectionHeadings(next);
      renderAccessMap(next);
      renderTokyo(next);
      renderShimane(next);
      renderVietnam(next);
    });
  });

})(jQuery);
