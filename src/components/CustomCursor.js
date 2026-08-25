/**
 * ==============================================================================
 * CUSTOM ELECTRICAL CURSOR (CustomCursor.js)
 * High-voltage spark crosshair cursor with hover physics for mouse devices
 * Touch ripple effect for mobile/tablet devices
 * ==============================================================================
 */

export class CustomCursor {
  constructor() {
    this.dot = document.querySelector('.custom-cursor-dot');
    this.ring = document.querySelector('.custom-cursor-ring');
    this.mouse = { x: -100, y: -100 };
    this.ringPos = { x: -100, y: -100 };
    this.lerpFactor = 0.18;
    this.isEnabled = false;

    this.init();
  }

  init() {
    // Check if device supports fine hover (mouse)
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (hasFinePointer && this.dot && this.ring) {
      // Desktop: use custom cursor
      this.isEnabled = true;

      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;

        // Direct instant position for the center spark dot
        this.dot.style.transform = `translate(${this.mouse.x}px, ${this.mouse.y}px) translate(-50%, -50%)`;
      });

      // Detect interactive elements for hover amplification
      const interactiveSelectors = 'a, button, .event-card, .btn, .filter-btn, .brochure-mockup-frame, input';
      document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
          document.body.classList.add('cursor-hover');
        }
      });

      document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelectors)) {
          document.body.classList.remove('cursor-hover');
        }
      });

      this.render();
    } else {
      // Mobile/Touch: add electric ripple effect on touch
      this.initTouchRipple();
    }
  }

  initTouchRipple() {
    // Hide desktop cursor elements on touch devices
    if (this.dot) this.dot.style.display = 'none';
    if (this.ring) this.ring.style.display = 'none';

    document.addEventListener('touchstart', (e) => {
      const touches = e.changedTouches;
      for (let i = 0; i < touches.length; i++) {
        this.createRipple(touches[i].clientX, touches[i].clientY);
      }
    }, { passive: true });

    // Also on tap/click for touch devices using pointer events
    document.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') {
        this.createRipple(e.clientX, e.clientY);
      }
    }, { passive: true });
  }

  createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'touch-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);

    // Remove after animation completes
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });

    // Failsafe cleanup
    setTimeout(() => {
      if (ripple.parentNode) ripple.remove();
    }, 700);
  }

  render() {
    if (!this.isEnabled) return;

    // Smooth lerp physics for outer ring
    this.ringPos.x += (this.mouse.x - this.ringPos.x) * this.lerpFactor;
    this.ringPos.y += (this.mouse.y - this.ringPos.y) * this.lerpFactor;

    this.ring.style.transform = `translate(${this.ringPos.x}px, ${this.ringPos.y}px) translate(-50%, -50%)`;

    requestAnimationFrame(() => this.render());
  }
}
