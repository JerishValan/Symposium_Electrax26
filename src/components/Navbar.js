/**
 * ==============================================================================
 * NAVBAR COMPONENT (Navbar.js)
 * Fixed Glassmorphism Navigation with Dynamic Active Indicator Dot & Mobile Drawer
 * ==============================================================================
 */

export class Navbar {
  constructor(config, onRegisterClick) {
    this.config = config;
    this.onRegisterClick = onRegisterClick;
    this.navbar = document.getElementById('main-navbar');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.mobileLinks = document.querySelectorAll('.mobile-nav-link');
    this.mobileToggle = document.getElementById('mobile-nav-toggle');
    this.mobileDrawer = document.getElementById('mobile-menu-drawer');
    this.navRegisterBtns = document.querySelectorAll('.nav-btn-register, .mobile-btn-register');
    this.activeSection = 'home';

    this.init();
  }

  init() {
    this.bindScrollEffects();
    this.bindSectionObserver();
    this.bindClickHandlers();
    this.bindMobileMenu();
  }

  bindScrollEffects() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  bindSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => observer.observe(sec));
  }

  setActiveLink(sectionId) {
    this.activeSection = sectionId;

    this.navLinks.forEach((link) => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === sectionId) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });

    this.mobileLinks.forEach((link) => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  bindClickHandlers() {
    // Smooth scrolling for desktop nav links
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const navHeight = this.navbar.offsetHeight;
          const targetPos = targetEl.offsetTop - navHeight + 5;
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      });
    });

    // Mobile nav links
    this.mobileLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetEl = document.getElementById(targetId);
        this.closeMobileMenu();
        if (targetEl) {
          setTimeout(() => {
            const navHeight = this.navbar.offsetHeight;
            const targetPos = targetEl.offsetTop - navHeight + 5;
            window.scrollTo({
              top: targetPos,
              behavior: 'smooth'
            });
          }, 200);
        }
      });
    });

    // Register button triggers
    this.navRegisterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.closeMobileMenu();
        if (this.onRegisterClick) this.onRegisterClick();
      });
    });
  }

  bindMobileMenu() {
    if (!this.mobileToggle || !this.mobileDrawer) return;

    this.mobileToggle.addEventListener('click', () => {
      const isOpen = this.mobileDrawer.classList.contains('open');
      if (isOpen) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (
        this.mobileDrawer.classList.contains('open') &&
        !this.mobileDrawer.contains(e.target) &&
        !this.mobileToggle.contains(e.target)
      ) {
        this.closeMobileMenu();
      }
    });
  }

  openMobileMenu() {
    this.mobileToggle.classList.add('active');
    this.mobileToggle.setAttribute('aria-expanded', 'true');
    this.mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    this.mobileToggle.classList.remove('active');
    this.mobileToggle.setAttribute('aria-expanded', 'false');
    this.mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}
