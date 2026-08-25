/**
 * ==============================================================================
 * MAIN APPLICATION ENTRYPOINT (app.js)
 * Orchestrates Components, State, Global Toast & Scroll Animations
 * ==============================================================================
 */

import { SYMPOSIUM_CONFIG } from './data/symposiumData.js';
import { IntroAnimation } from './components/IntroAnimation.js';
import { ElectricalBackground } from './components/ElectricalBackground.js';
import { CustomCursor } from './components/CustomCursor.js';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { EventsSection } from './components/EventsSection.js';
import { EventModal } from './components/EventModal.js';
import { BrochureViewer } from './components/BrochureViewer.js';
import { RegisterModal } from './components/RegisterModal.js';
import { Footer } from './components/Footer.js';

class App {
  constructor() {
    this.config = SYMPOSIUM_CONFIG;
    this.initToastSystem();
    this.initComponents();
    this.initScrollReveal();
  }

  initToastSystem() {
    window.showAppToast = (message, type = 'success') => {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${message}</span>
      `;

      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 4000);
    };
  }

  initComponents() {
    // 1. Live Electrical Background (60fps Canvas)
    new ElectricalBackground('electrical-canvas');

    // 2. Custom Electrical Cursor (Desktop only)
    new CustomCursor();

    // 3. Modals
    const eventModal = new EventModal((eventName) => {
      registerModal.open(eventName);
    });

    const brochureViewer = new BrochureViewer(this.config.brochure, this.config);
    const registerModal = new RegisterModal(this.config, this.config.events);

    // 4. Intro Power-Up Sequence
    new IntroAnimation(() => {
      console.log('⚡ ELECTRAX 2K26 System Online - Voltage Nominal');
    });

    // 5. Navbar
    new Navbar(this.config, () => {
      registerModal.open();
    });

    // 6. Hero Section
    new Hero(
      this.config,
      null, // explore action handled internally
      () => brochureViewer.open(),
      () => registerModal.open()
    );

    // 7. Events Section
    new EventsSection(this.config.events, (eventData) => {
      eventModal.open(eventData);
    });

    // 8. Brochure Section CTA Trigger
    const sectionBrochureBtn = document.getElementById('section-brochure-view-btn');
    const sectionBrochureImg = document.getElementById('brochure-image-main');
    const sectionBrochureMockup = document.getElementById('brochure-interactive-mockup');
    if (sectionBrochureBtn) {
      sectionBrochureBtn.addEventListener('click', () => brochureViewer.open());
    }
    if (sectionBrochureImg) {
      sectionBrochureImg.style.cursor = 'pointer';
      sectionBrochureImg.addEventListener('click', () => brochureViewer.open());
    }
    if (sectionBrochureMockup) {
      sectionBrochureMockup.addEventListener('click', () => brochureViewer.open());
    }

    const sectionBrochureDownloadBtn = document.getElementById('section-brochure-download-btn');
    if (sectionBrochureDownloadBtn) {
      sectionBrochureDownloadBtn.addEventListener('click', () => brochureViewer.triggerDownload());
    }

    // 9. Location Google Maps Action
    const gmapsBtn = document.getElementById('open-gmaps-btn');
    if (gmapsBtn) {
      gmapsBtn.addEventListener('click', () => {
        window.open(this.config.institution.googleMapsUrl, '_blank', 'noopener,noreferrer');
      });
    }

    // 10. Footer
    new Footer(this.config);
  }

  initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
  }
}

// Boot on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.__ELECTRAX_APP__ = new App();

  // -----------------------------------------------------------------------
  // REGISTRATION TICKER - Hide on scroll, show on scroll to top
  // -----------------------------------------------------------------------
  const ticker = document.getElementById('registration-ticker');
  const navbar = document.getElementById('main-navbar');
  const TICKER_HEIGHT = 36;
  let tickerVisible = true;

  const updateTickerState = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 150 && tickerVisible) {
      ticker.classList.add('hidden');
      navbar.style.top = '0px';
      tickerVisible = false;
    } else if (scrollY <= 80 && !tickerVisible) {
      ticker.classList.remove('hidden');
      navbar.style.top = TICKER_HEIGHT + 'px';
      tickerVisible = true;
    }
  };

  window.addEventListener('scroll', updateTickerState, { passive: true });
});
