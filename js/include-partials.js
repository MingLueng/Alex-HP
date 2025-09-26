// js/include-partials.js
(function () {
  // ==== Tính prefix theo độ sâu URL (/, /ja/, /vi/about/ => "", "../", "../../") ====
  function computeBase() {
    var segs = location.pathname.replace(/(^\/+|\/+$)/g, '').split('/');
    if (segs.length === 1 && segs[0] === '') segs = [];
    return segs.map(function(){ return '..'; }).join('/') + (segs.length ? '/' : '');
  }
  var BASE = computeBase();

  // ==== Đọc config ====
  var cfgEl = document.getElementById('page-config');
  var cfg = {};
  try { cfg = cfgEl ? JSON.parse(cfgEl.textContent) : {}; } catch(e){ cfg = {}; }

  var PARTIALS_ROOT  = (cfg.partialsRoot || 'partials').replace(/\/+$/,''); // "partials"
  var PAGE           = (cfg.page || '').trim();
  var EXTRA_PAGE_CSS = Array.isArray(cfg.extraCss) ? cfg.extraCss : [];
  var EXTRA_PAGE_JS  = Array.isArray(cfg.extraJs)  ? cfg.extraJs  : [];

  // ==== Tài nguyên (đều tương đối từ gốc thư mục site, KHÔNG có "./") ====
  var COMMON_CSS = [
    "//fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900%7CRaleway:500",
    "css/bootstrap.css",
    "https://site-assets.fontawesome.com/releases/v6.0.0/css/all.css",
    "css/fonts.css",
    "css/site.css"
  ];
  var COMMON_JS = [
    "https://code.jquery.com/jquery-3.7.1.min.js",
    "https://code.jquery.com/jquery-migrate-3.4.1.min.js",
    "js/script.js",
    "js/lang.js",
    
  ];

  var PAGE_CSS_MAP = {
    top:   ["css/top-page.css"],
    about: ["css/about-page.css"],
    service: ["css/service-page.css"],
    works:  ["css/works-page.css"],
    recruit: ["css/recruit-page.css"],
    access: ["css/access-page.css"],
    contact:["css/contact-page.css"],
    results: ["css/results-page.css"],
    voices: ["css/voices-page.css"],
    "comments-top":["css/comments-top-page.css"],
    "company-events": ["css/company-events-page.css"],
    "job-openings": ["css/job-openings-page.css"],
    "production-library": ["css/production-library-page.css"]
  };
  var PAGE_JS_MAP = {
    top:   ["js/top-page.js"],
    about: ["js/about-page.js"],
    service: ["js/service-page.js"],
    works:  ["js/works-page.js"],
    recruit: ["js/recruit-page.js"],
    access: ["js/access-page.js"],
    contact:["js/contact-page.js"],
    results: ["js/results-page.js"],
    voices: ["js/voices-page.js"],
    "comments-top":["js/comments-top-page.js"],
    "company-events": ["js/company-events-page.js"],
    "job-openings": ["js/job-openings-page.js"],
    "production-library": ["js/production-library-page.js"]
  };

  // ==== Helpers ====
  function isAbs(u){ return /^https?:\/\//i.test(u) || u.startsWith('//') || u.startsWith('/'); }
  function withBase(u){ return isAbs(u) ? u : (BASE + u); }

  var loadedCSS = new Set();
  var loadedJS  = new Set();

  function ensureCSS(href){
    if (!href) return;
    var full = withBase(href);
    if (loadedCSS.has(full)) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = full;
    document.head.appendChild(link);
    loadedCSS.add(full);
  }

  function ensureJS(src){
    if (!src) return Promise.resolve();
    var full = withBase(src);
    if (loadedJS.has(full)) return Promise.resolve();
    return new Promise(function(res, rej){
      var s = document.createElement('script');
      s.src = full;
      s.defer = true;
      s.onload = function(){ loadedJS.add(full); res(); };
      s.onerror = function(){ rej(new Error('Load JS fail: ' + full)); };
      document.body.appendChild(s);
    });
  }

  function fetchHTML(url){
    var full = withBase(url);
    return fetch(full, { cache: 'no-cache' })
      .then(function(r){ if(!r.ok) throw new Error('Fetch failed: ' + full); return r.text(); });
  }

  function injectPartial(place, file){
    var host = document.querySelector('[data-include="'+place+'"]');
    if (!host) return;
    fetchHTML(PARTIALS_ROOT + '/' + file)
      .then(function(html){ host.innerHTML = html; })
      .catch(console.error);
  }

  // ==== Apply ====
  if (PAGE) document.documentElement.classList.add('page-' + PAGE);

  [].concat(COMMON_CSS, PAGE_CSS_MAP[PAGE] || [], EXTRA_PAGE_CSS).forEach(ensureCSS);

  injectPartial('header', 'header.html');
  injectPartial('footer', 'footer.html');

  (function loadAllJS(){
    var queue = [].concat(COMMON_JS, PAGE_JS_MAP[PAGE] || [], EXTRA_PAGE_JS);
    var p = Promise.resolve();
    queue.forEach(function(src){ p = p.then(function(){ return ensureJS(src); }); });
  })();
})();
