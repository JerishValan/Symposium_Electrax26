/**
 * ==============================================================================
 * ELECTRICAL BACKGROUND COMPONENT (ElectricalBackground.js)
 * 60fps Dynamic HTML5 Canvas Background with Bezier Arcs, Nodes & Particles
 * ==============================================================================
 */

export class ElectricalBackground {
  constructor(canvasId = 'electrical-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.particles = [];
    this.nodes = [];
    this.arcs = [];
    this.mouse = { x: this.width / 2, y: this.height / 2, active: false };
    this.animationFrameId = null;
    this.isMobile = window.innerWidth < 768;
    this.maxParticles = this.isMobile ? 25 : 55;
    this.maxNodes = this.isMobile ? 12 : 24;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      this.maxParticles = this.isMobile ? 25 : 55;
      this.maxNodes = this.isMobile ? 12 : 24;
      this.resize();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
    });

    document.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });

    this.createParticles();
    this.createNodes();
    this.startArcGenerator();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: Math.random() > 0.3 ? '#00f0ff' : '#0088ff'
      });
    }
  }

  createNodes() {
    this.nodes = [];
    for (let i = 0; i < this.maxNodes; i++) {
      this.nodes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        baseX: Math.random() * this.width,
        baseY: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        energy: Math.random()
      });
    }
  }

  startArcGenerator() {
    // Generate subtle electrical energy arc pulses periodically
    const spawnArc = () => {
      if (this.nodes.length >= 2) {
        const idxA = Math.floor(Math.random() * this.nodes.length);
        let idxB = Math.floor(Math.random() * this.nodes.length);
        if (idxA === idxB) idxB = (idxB + 1) % this.nodes.length;

        const nodeA = this.nodes[idxA];
        const nodeB = this.nodes[idxB];
        const dist = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);

        if (dist < 350) {
          this.arcs.push({
            x1: nodeA.x,
            y1: nodeA.y,
            x2: nodeB.x,
            y2: nodeB.y,
            life: 1.0,
            decay: Math.random() * 0.08 + 0.04
          });
        }
      }
      setTimeout(spawnArc, Math.random() * 800 + 400);
    };

    spawnArc();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Render & update nodes
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > this.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.height) node.vy *= -1;

      // Draw Node
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
      this.ctx.shadowColor = '#00f0ff';
      this.ctx.shadowBlur = 8;
      this.ctx.fill();

      // Connect nearby nodes with subtle electrical grid lines
      for (let j = i + 1; j < this.nodes.length; j++) {
        const other = this.nodes[j];
        const dist = Math.hypot(node.x - other.x, node.y - other.y);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.15;
          this.ctx.beginPath();
          this.ctx.moveTo(node.x, node.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    // 2. Render active electrical discharge arcs
    for (let i = this.arcs.length - 1; i >= 0; i--) {
      const arc = this.arcs[i];
      arc.life -= arc.decay;

      if (arc.life <= 0) {
        this.arcs.splice(i, 1);
        continue;
      }

      this.drawElectricArc(arc.x1, arc.y1, arc.x2, arc.y2, arc.life);
    }

    // 3. Render and update ionized particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Subtle mouse attraction
      if (this.mouse.active) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150) {
          p.x += (dx / dist) * 0.4;
          p.y += (dy / dist) * 0.4;
        }
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 6;
      this.ctx.fill();
      this.ctx.globalAlpha = 1.0;
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  drawElectricArc(x1, y1, x2, y2, opacity) {
    const ctx = this.ctx;
    const segments = 8;
    let currX = x1;
    let currY = y1;

    ctx.save();
    ctx.strokeStyle = `rgba(0, 240, 255, ${opacity * 0.8})`;
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(currX, currY);

    for (let i = 1; i <= segments; i++) {
      const targetX = x1 + (x2 - x1) * (i / segments);
      const targetY = y1 + (y2 - y1) * (i / segments);
      const jitter = (Math.random() - 0.5) * 20;

      currX = targetX + jitter;
      currY = targetY + jitter;
      ctx.lineTo(currX, currY);
    }

    ctx.stroke();
    ctx.restore();
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
