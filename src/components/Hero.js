/**
 * ==============================================================================
 * HERO COMPONENT (Hero.js)
 * Hero Section with Responsive Typography & 3-Card Info Bar
 * ==============================================================================
 */

export class Hero {
  constructor(config, onExploreClick, onBrochureClick, onRegisterClick) {
    this.config = config;
    this.onExploreClick = onExploreClick;
    this.onBrochureClick = onBrochureClick;
    this.onRegisterClick = onRegisterClick;

    this.init();
  }

  init() {
    this.bindActions();
  }

  bindActions() {
    const exploreBtn = document.getElementById('hero-explore-btn');
    const brochureBtn = document.getElementById('hero-brochure-btn');
    const registerBtn = document.getElementById('hero-register-btn');

    if (exploreBtn) {
      exploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const eventsSec = document.getElementById('events');
        if (eventsSec) {
          const navHeight = 76;
          window.scrollTo({
            top: eventsSec.offsetTop - navHeight + 5,
            behavior: 'smooth'
          });
        }
      });
    }

    if (brochureBtn && this.onBrochureClick) {
      brochureBtn.addEventListener('click', () => this.onBrochureClick());
    }

    if (registerBtn && this.onRegisterClick) {
      registerBtn.addEventListener('click', () => this.onRegisterClick());
    }
  }
}
