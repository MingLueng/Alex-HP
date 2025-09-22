/*!
 * Production Library – i18n + Filter + Pager (ja/vi/en)
 * Yêu cầu: jQuery đã được tải trước.
 */
(function ($) {
  /* ===================== I18N ===================== */
  const I18N = {
    ja: {
      title: '制作ライブラリ',
      helpTitle: 'ヘルプ',
      cats: { gases:'気体系', solids:'固体系', crush:'粉砕系', others:'その他', alexlib:'アレックスライブラリ' },
      subs: {
        '*':'すべて', smoke:'Smoke', z_smoke:'Z_smoke', smoke_injection:'Smoke_injection', explosion_clouds:'Explosion_clouds',
        dust:'Dust', falling_stone:'Falling_stone', dosha:'Dosha', fragment:'Fragment', wind:'Wind',
        digital_vision_video:'Digital Vision Video', controlpanels:'ControlPanels', effect:'Effect', sky:'Sky',
        promotion:'Promotion', '3d_sozai':'3D_sozai', night_view:'Night_view',
        emupri:'えむぷり', tipri:'てぃーぷり', haipri:'はいぷり', sgp3:'SGP3'
      },
      video: {
        // Tên sub "đẹp" (ưu tiên dùng tên này cho tiêu đề thẻ video)
        names: {
          smoke:'スモーク', z_smoke:'Zスモーク', smoke_injection:'スモーク注入', explosion_clouds:'爆発雲',
          dust:'ダスト', falling_stone:'落石', dosha:'土砂', fragment:'フラグメント', wind:'風',
          digital_vision_video:'デジタルビジョン', controlpanels:'コントロールパネル', effect:'エフェクト',
          sky:'空', promotion:'プロモーション', '3d_sozai':'3D素材', night_view:'夜景',
          emupri:'えむぷり', tipri:'てぃーぷり', haipri:'はいぷり', sgp3:'SGP3'
        },
        // Nhãn chất lượng
        qual: { sd:'SD', hd:'HD', fhd:'FHD', '4k':'4K' },
        // Override tiêu đề hoàn chỉnh cho 1 cặp sub:qual (nếu cần)
        overrides: { /* 'z_smoke:hd': 'Zスモーク HD' */ }
      }
    },
    vi: {
      title: 'Thư viện sản phẩm',
      helpTitle: 'Trợ giúp',
      cats: { gases:'Nhóm khí', solids:'Nhóm rắn', crush:'Nghiền/Phá hủy', others:'Khác', alexlib:'Thư viện Alex' },
      subs: {
        '*':'Tất cả', smoke:'Khói (Smoke)', z_smoke:'Khói Z', smoke_injection:'Bơm khói', explosion_clouds:'Mây vụ nổ',
        dust:'Bụi', falling_stone:'Đá rơi', dosha:'Đất đá', fragment:'Mảnh vỡ', wind:'Gió',
        digital_vision_video:'Digital Vision Video', controlpanels:'Bảng điều khiển', effect:'Hiệu ứng', sky:'Bầu trời',
        promotion:'Quảng bá', '3d_sozai':'Vật liệu 3D', night_view:'Cảnh đêm',
        emupri:'Emupri', tipri:'Tipri', haipri:'Haipri', sgp3:'SGP3'
      },
      video: {
        names: {
          smoke:'Khói', z_smoke:'Khói Z', smoke_injection:'Bơm khói', explosion_clouds:'Mây vụ nổ',
          dust:'Bụi', falling_stone:'Đá rơi', dosha:'Đất đá', fragment:'Mảnh vỡ', wind:'Gió',
          digital_vision_video:'Digital Vision', controlpanels:'Bảng điều khiển', effect:'Hiệu ứng',
          sky:'Bầu trời', promotion:'Quảng bá', '3d_sozai':'Vật liệu 3D', night_view:'Cảnh đêm',
          emupri:'Emupri', tipri:'Tipri', haipri:'Haipri', sgp3:'SGP3'
        },
        qual: { sd:'SD', hd:'HD', fhd:'FHD', '4k':'4K' },
        overrides: { }
      }
    },
    en: {
      title: 'Production Library',
      helpTitle: 'Help',
      cats: { gases:'Gases', solids:'Solids', crush:'Crushing', others:'Others', alexlib:'Alex Library' },
      subs: {
        '*':'All', smoke:'Smoke', z_smoke:'Z_smoke', smoke_injection:'Smoke injection', explosion_clouds:'Explosion clouds',
        dust:'Dust', falling_stone:'Falling stone', dosha:'Debris flow', fragment:'Fragment', wind:'Wind',
        digital_vision_video:'Digital Vision Video', controlpanels:'Control Panels', effect:'Effect', sky:'Sky',
        promotion:'Promotion', '3d_sozai':'3D materials', night_view:'Night view',
        emupri:'Emupri', tipri:'Tipri', haipri:'Haipri', sgp3:'SGP3'
      },
      video: {
        names: {
          smoke:'Smoke', z_smoke:'Z_smoke', smoke_injection:'Smoke injection', explosion_clouds:'Explosion clouds',
          dust:'Dust', falling_stone:'Falling stone', dosha:'Debris flow', fragment:'Fragment', wind:'Wind',
          digital_vision_video:'Digital Vision', controlpanels:'Control Panels', effect:'Effect',
          sky:'Sky', promotion:'Promotion', '3d_sozai':'3D materials', night_view:'Night view',
          emupri:'Emupri', tipri:'Tipri', haipri:'Haipri', sgp3:'SGP3'
        },
        qual: { sd:'SD', hd:'HD', fhd:'FHD', '4k':'4K' },
        overrides: { }
      }
    }
  };

  /* ===================== Helpers ===================== */
  const curLang = () => {
    const v = (new URLSearchParams(location.search).get('lang') || '').toLowerCase();
    return /^(ja|vi|en)$/.test(v) ? v : 'ja';
  };
  const setLangInUrl = (l) => {
    const u = new URL(location.href);
    u.searchParams.set('lang', l);
    history.replaceState(null, '', u);
  };
  const fixedTop = () => (
    ['#masthead', '.header-wrapper', 'header', '.submenu-tabs-3', 'nav.submenu-tabs-1', '.top-fixed', '.site-toolbar']
      .reduce((h, s) => {
        const el = document.querySelector(s); if (!el) return h;
        const cs = getComputedStyle(el), r = el.getBoundingClientRect();
        return (/(fixed|sticky)/.test(cs.position) && r.top <= 0) ? h + el.offsetHeight : h;
      }, 0)
  );

  /* ===================== i18n render ===================== */
  function renderI18n(lang) {
    const t = I18N[lang] || I18N.ja;

    // Tiêu đề trên thanh header nhỏ
    $('.submenu-tabs-3 .main-title-staff').text(t.title);
    // Tooltip nút trợ giúp
    $('#helpBtn').attr('title', t.helpTitle);

    // Sidebar: danh mục + sub
    $('.cat[data-cat]').each(function () {
      const $cat = $(this);
      const key = String($cat.data('cat') || '');
      $cat.find('> .cat-toggle .label').text(t.cats[key] || key);

      $cat.find('.sub .sub-link').each(function () {
        const $b = $(this);
        const sub = String($b.data('sub') || '');
        // sub === '*' → “tất cả” nhưng nên hiển thị theo danh mục?
        const label = sub === '*' ? (t.cats[key] || t.subs['*']) : (t.subs[sub] || sub.replace(/_/g, ' '));
        $b.text(label);
      });
    });
  }

  /* ===================== Video title i18n ===================== */
  function renderVideoTitles(lang) {
    const pack = I18N[lang] || I18N.ja;
    const names = (pack.video && pack.video.names) || {};
    const quals = (pack.video && pack.video.qual) || { sd: 'SD', hd: 'HD', fhd: 'FHD', '4k': '4K' };
    const overrides = (pack.video && pack.video.overrides) || {};

    $('.video-card').each(function () {
      const $card = $(this);
      const sub = String($card.data('sub') || '').toLowerCase();
      const qual = String($card.data('qual') || '').toLowerCase();

      // 1) override full
      const key = `${sub}:${qual}`;
      if (overrides[key]) {
        $card.find('.video-card__title').text(overrides[key]);
        $card.attr('aria-label', overrides[key]);
        return;
      }

      // 2) label sub: ưu tiên video.names → subs → fallback
      let subLabel = names[sub] || (I18N[lang]?.subs?.[sub]) || sub.replace(/_/g, ' ');
      // 3) nhãn chất lượng
      let qualLabel = quals[qual] || qual.toUpperCase();

      const title = `${subLabel} ${qualLabel}`;
      $card.find('.video-card__title').text(title);
      $card.attr('aria-label', title);
    });
  }

  /* ===================== Filter + Pager ===================== */
  function runLibrary() {
    const $app = $('#app'); if (!$app.length) return;
    const $grid = $('.grid'), $pager = $('#pager'), $items = $('.video-card');
    if (!$grid.length || !$pager.length || !$items.length) return;

    // Collapse sidebar
    $('#collapseBtn').off('click.lib').on('click.lib', function () {
      $app.toggleClass('is-collapsed');
      $(this).children('i').first().attr('class',
        $app.hasClass('is-collapsed') ? 'fas fa-angle-double-right' : 'fas fa-angle-double-left'
      );
    });

    // State
    let cat = '*', sub = '*', page = 1, per = 9;

    const $cur = $('#catNav .sub-link.is-active').first();
    if ($cur.length) { cat = $cur.data('cat') || '*'; sub = $cur.data('sub') || '*'; }

    // Sidebar click: mở/đóng + chọn filter
    $('#catNav').off('click.lib').on('click.lib', '.cat-toggle, .sub-link', function () {
      const $t = $(this);
      if ($t.hasClass('cat-toggle')) {
        const $li = $t.closest('.cat');
        $li.toggleClass('is-open');
        $t.attr('aria-expanded', $li.hasClass('is-open'));
      } else {
        cat = $t.data('cat') || '*';
        sub = $t.data('sub') || '*';
        page = 1;
        $('#catNav .sub-link').removeClass('is-active');
        $t.addClass('is-active').closest('.cat').addClass('is-open');
        render();
      }
    });

    const scrollToGridTop = () => {
      $('html,body').stop(true).animate({
        scrollTop: Math.max(0, window.pageYOffset + $grid[0].getBoundingClientRect().top - fixedTop() - 8)
      }, 300);
    };

    function drawPager(pages) {
      $pager.empty();
      const add = (label, p, disabled = false, active = false, icon = '') => {
        const $b = $('<button/>', { 'class': 'page-btn' + (active ? ' is-active' : '') });
        if (icon) $('<i/>', { 'class': icon }).appendTo($b); else $b.text(label);
        if (!disabled && !active) $b.on('click', () => { page = p; render(); scrollToGridTop(); });
        else $b.prop('disabled', true);
        $pager.append($b);
      };
      add('', 1, page === 1, false, 'fas fa-angle-double-left');
      for (let i = 1; i <= pages; i++) add(String(i), i, false, i === page);
      add('', pages, page === pages, false, 'fas fa-angle-double-right');
    }

    function render() {
      const list = $items.filter(function () {
        const $el = $(this);
        return (cat === '*' || $el.data('cat') === cat) &&
               (sub === '*' || $el.data('sub') === sub);
      });

      const pages = Math.max(1, Math.ceil(list.length / per));
      page = Math.min(page, pages);

      // Pause video + ẩn/hiện theo trang
      $items.each(function () { this.querySelector('video')?.pause(); }).hide();
      list.slice((page - 1) * per, page * per).show();

      drawPager(pages);
    }

    render();
  }

  /* ===================== Boot ===================== */
  $(function () {
    const l = curLang();
    renderI18n(l);
    runLibrary();
    renderVideoTitles(l);

    // Đổi ngôn ngữ (giữ filter/pager hiện tại)
    $(document).off('click.libLang').on('click.libLang', '.lang-btn', function (e) {
      e.preventDefault();
      const next = String($(this).data('lang') || '').toLowerCase();
      if (!/^(ja|vi|en)$/.test(next)) return;

      setLangInUrl(next);
      renderI18n(next);
      renderVideoTitles(next);
      // Không cần re-run filter/pager vì state DOM không đổi
    });

    // Re-render tiêu đề video nếu danh sách thay đổi động (SPA…)
    // -> bạn có thể gọi renderVideoTitles(curLang()) sau khi append thêm .video-card
  });
})(jQuery);
