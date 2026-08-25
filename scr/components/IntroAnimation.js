/**
 * ==============================================================================
 * INTRO ANIMATION COMPONENT (IntroAnimation.js)
 * High-voltage lightning strike & cinematic electrical power-up sequence
 * ==============================================================================
 */

export class IntroAnimation {
  constructor(onComplete) {
    this.onComplete = onComplete;
    this.overlay = document.getElementById('intro-overlay');
    this.canvas = document.getElementById('intro-lightning-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.flashLayer = document.querySelector('.intro-flash-layer');
    this.content = document.querySelector('.intro-content');
    this.skipBtn = document.getElementById('intro-skip-btn');
    this.hasCompleted = false;

    this.init();
  }

  init() {
    if (!this.overlay || !this.canvas) {
      if (this.onComplete) this.onComplete();
      return;
    }

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', () => this.finish());
    }

    // Check if prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.finish();
      return;
    }

    // Start Sequence
    this.startSequence();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  startSequence() {
    // 1. Initial dark delay (~800ms)
    setTimeout(() => {
      if (this.hasCompleted) return;
      this.triggerLightningStrike(() => {
        // 2. Power on Logo & System Status
        if (this.content) {
          this.content.classList.add('power-on');
        }

        // 3. Complete and smoothly fade into main site after brief impact
        setTimeout(() => {
          this.finish();
        }, 1200);
      });
    }, 800);
  }

  triggerLightningStrike(callback) {
    if (!this.ctx || !this.canvas) {
      if (callback) callback();
      return;
    }

    const width = this.canvas.width;
    const height = this.canvas.height;
    const startX = width * (0.3 + Math.random() * 0.4);
    const startY = 0;
    const endX = width * 0.5;
    const endY = height * 0.5;

    let flashes = 0;
    const maxFlashes = 4;

    const flashInterval = setInterval(() => {
      this.ctx.clearRect(0, 0, width, height);

      // Flash layer trigger
      if (this.flashLayer) {
        this.flashLayer.classList.toggle('active', flashes % 2 === 0);
      }

      // Draw Main Lightning Branch
      this.drawLightningBranch(startX, startY, endX, endY, '#ffffff', 4);
      this.drawLightningBranch(startX, startY, endX, endY, '#00f0ff', 8);

      // Draw sub-branches
      for (let i = 0; i < 3; i++) {
        const subStartX = startX + (Math.random() - 0.5) * 200;
        const subStartY = height * (0.2 + Math.random() * 0.3);
        const subEndX = subStartX + (Math.random() - 0.5) * 300;
        const subEndY = subStartY + 150 + Math.random() * 150;
        this.drawLightningBranch(subStartX, subStartY, subEndX, subEndY, '#00f0ff', 2);
      }

      flashes++;
      if (flashes >= maxFlashes) {
        clearInterval(flashInterval);
        if (this.flashLayer) this.flashLayer.classList.remove('active');
        this.ctx.clearRect(0, 0, width, height);
        if (callback) callback();
      }
    }, 90);
  }

  drawLightningBranch(x1, y1, x2, y2, color, lineWidth) {
    const ctx = this.ctx;
    const segments = 14;
    let currX = x1;
    let currY = y1;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.moveTo(currX, currY);

    for (let i = 1; i <= segments; i++) {
      const targetX = x1 + (x2 - x1) * (i / segments);
      const targetY = y1 + (y2 - y1) * (i / segments);
      const jitter = (Math.random() - 0.5) * 60 * (1 - i / segments);

      currX = targetX + jitter;
      currY = targetY;
      ctx.lineTo(currX, currY);
    }

    ctx.stroke();
    ctx.restore();
  }

  finish() {
    if (this.hasCompleted) return;
    this.hasCompleted = true;

    if (this.overlay) {
      this.overlay.classList.add('hidden');
    }

    if (this.onComplete) {
      this.onComplete();
    }
  }
}
