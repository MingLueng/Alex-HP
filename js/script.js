(function () {
  // Toggle mobile menu
  document.addEventListener('click', function(e){
    const toggle = e.target.closest('#menuToggle');
    if (!toggle) return;
    const mobile = document.getElementById('mobileNav');
    if (mobile) mobile.classList.toggle('show');
  });

  // Toggle mobile submenus
  document.addEventListener('click', function(e){
    const btn = e.target.closest('.mobile-toggle');
    if (!btn) return;
    const item = btn.closest('.mobile-nav-item');
    const sub  = item && item.querySelector('.mobile-submenu');
    if (sub) sub.classList.toggle('show');
    item && item.classList.toggle('open');
  });
})();
