/**
 * ==============================================================================
 * HERO COMPONENT (Hero.js)
 * Hero Section with Responsive Typography, 3-Card Info Bar & Circular Roman Clock
 * ==============================================================================
 */

export class Hero {
  constructor(config, onExploreClick, onBrochureClick, onRegisterClick) {
    this.config = config;
    this.onExploreClick = onExploreClick;
    this.onBrochureClick = onBrochureClick;
    this.onRegisterClick = onRegisterClick;
    this.clockAnimationId = null;

    this.init();
  }

  init() {
    this.startCircularRomanClock();
    this.bindActions();
  }

  startCircularRomanClock() {
    const hourHand = document.getElementById('clock-hand-hour');
    const minHand = document.getElementById('clock-hand-minute');
    const secHand = document.getElementById('clock-hand-second');
    const digitalTimeEl = document.getElementById('clock-digital-time');
    const countdownDaysEl = document.getElementById('roman-clock-days');

    const targetDate = new Date(this.config.brand.eventDateISO).getTime();

    const updateClock = () => {
      const now = new Date();
      
      // Real-time analog clock hands
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();

      const secDeg = (seconds + milliseconds / 1000) * 6; // 360 / 60 = 6
      const minDeg = (minutes + seconds / 60) * 6;
      const hourDeg = ((hours % 12) + minutes / 60) * 30; // 360 / 12 = 30

      if (secHand) secHand.style.transform = `rotate(${secDeg}deg)`;
      if (minHand) minHand.style.transform = `rotate(${minDeg}deg)`;
      if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;

      // Digital time readout
      if (digitalTimeEl) {
        const hStr = String(hours % 12 || 12).padStart(2, '0');
        const mStr = String(minutes).padStart(2, '0');
        const sStr = String(seconds).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        digitalTimeEl.textContent = `${hStr}:${mStr}:${sStr} ${ampm}`;
      }

      // Live countdown days to symposium
      if (countdownDaysEl) {
        const distance = targetDate - now.getTime();
        const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
        countdownDaysEl.textContent = String(days);
      }

      this.clockAnimationId = requestAnimationFrame(updateClock);
    };

    updateClock();
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

  destroy() {
    if (this.clockAnimationId) {
      cancelAnimationFrame(this.clockAnimationId);
    }
  }
}
