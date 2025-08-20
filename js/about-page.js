  document.querySelectorAll('nav.submenu-tabs a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetID);

      if (targetEl) {
        const yOffset = -100; // khoảng cách bù trừ cho header fixed
        const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });