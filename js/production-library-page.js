
/* Thu gọn/mở rộng sidebar */
collapseBtn.addEventListener('click', () => {
  app.classList.toggle('is-collapsed');
  
  const icon = collapseBtn.firstElementChild;
  
  if (app.classList.contains('is-collapsed')) {
    icon.className = 'fas fa-angle-double-right'; // icon khi collapse
  } else {
    icon.className = 'fas fa-angle-double-left';  // icon khi expand
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const grid   = $(".grid");
  const pager  = $("#pager");
  const items  = [...$$(".video-card")];

  let cat="*", sub="*", page=1, per=9;

  // 1. Lấy filter mặc định
  initDefaultFilter();

  // 2. Lắng nghe click menu
  $("#catNav")?.addEventListener("click", handleNavClick);

  // 3. Render lần đầu
  render();

  // ====== FUNCTIONS ======
  function initDefaultFilter(){
    const cur = $("#catNav .sub-link.is-active");
    if (cur){ cat = cur.dataset.cat || "*"; sub = cur.dataset.sub || "*"; }
  }

  function handleNavClick(e){
    const t = e.target.closest(".cat-toggle, .sub-link");
    if (!t) return;

    if (t.classList.contains("cat-toggle")) {
      toggleCat(t);
    } else {
      selectSub(t);
    }
  }

  function toggleCat(btn){
    const li = btn.closest(".cat");
    li.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", li.classList.contains("is-open"));
  }

  function selectSub(btn){
    cat = btn.dataset.cat || "*";
    sub = btn.dataset.sub || "*";
    page = 1;
    $$("#catNav .sub-link").forEach(b=>b.classList.toggle("is-active", b===btn));
    btn.closest(".cat")?.classList.add("is-open");
    render();
  }

  function render(){
    // lọc theo cat/sub
    const list = items.filter(el =>
      (cat==="*"||el.dataset.cat===cat) &&
      (sub==="*"||el.dataset.sub===sub)
    );

    // phân trang
    const pages = Math.max(1, Math.ceil(list.length/per));
    page = Math.min(page, pages);

    // reset & show
    items.forEach(el => { el.querySelector("video")?.pause(); el.style.display="none"; });
    list.slice((page-1)*per, page*per).forEach(el => el.style.display="");

    renderPager(pages);
  }

  function renderPager(pages){
  pager.innerHTML = "";

  const btn = (content, p, dis=false, act=false, isIcon=false)=>{
    const b = document.createElement("button");
    b.className = "page-btn" + (act ? " is-active" : "");

    if(isIcon){
      const i = document.createElement("i");
      i.className = content;   // gán class Font Awesome
      b.appendChild(i);
    } else {
      b.textContent = content; // số trang
    }

    if(dis || act) {
      b.disabled = true;
    } else {
      b.onclick = ()=>{ page = p; render(); };
    }

    pager.appendChild(b);
  };

  btn("fas fa-angle-double-left", 1, page===1, false, true);
  for(let i=1;i<=pages;i++) btn(i, i, false, i===page);
  btn("fas fa-angle-double-right", pages, page===pages, false, true);
}

});

// helpers
const $  = (s,sc=document)=>sc.querySelector(s);
const $$ = (s,sc=document)=>sc.querySelectorAll(s);



