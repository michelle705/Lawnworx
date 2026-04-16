/* LawnWorx LLC — Shared Navigation Script */
(function () {
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');
  if (hamburger && navMobile) {
    hamburger.addEventListener('click', function () {
      const isOpen = navMobile.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close mobile nav when a link is tapped
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Jobs Well Done filter tabs
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.photo-card');
  if (tabs.length && cards.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        var filter = this.dataset.filter;
        cards.forEach(function (card) {
          card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
        });
      });
    });
  }
})();
