/**
 * ==============================================================================
 * FOOTER COMPONENT (Footer.js)
 * Quick Access Navigation, Back-to-Top Trigger & Department Branding
 * ==============================================================================
 */

export class Footer {
  constructor(config) {
    this.config = config;
    this.backToTopBtn = document.getElementById('back-to-top-btn');
    this.footerLinks = document.querySelectorAll('.footer-link[href^="#"]');

    this.init();
  }

  init() {
    if (this.backToTopBtn) {
      this.backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    this.footerLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const navHeight = 76;
          window.scrollTo({
            top: targetEl.offsetTop - navHeight + 5,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}
