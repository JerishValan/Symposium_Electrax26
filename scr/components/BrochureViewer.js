/**
 * ==============================================================================
 * BROCHURE VIEWER COMPONENT (BrochureViewer.js)
 * Fullscreen Interactive Digital Brochure Viewer with Zoom, Print & Download
 * ==============================================================================
 */

export class BrochureViewer {
  constructor(brochureData, config) {
    this.brochureData = brochureData;
    this.config = config;
    this.overlay = document.getElementById('brochure-modal-overlay');
    this.dialog = document.querySelector('.brochure-modal-dialog');
    this.closeBtn = document.getElementById('brochure-modal-close');
    this.zoomLevel = 1.0;

    this.init();
  }

  init() {
    if (!this.overlay) return;

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.close();
      }
    });

    this.bindToolbar();
  }

  bindToolbar() {
    const zoomInBtn = document.getElementById('brochure-zoom-in');
    const zoomOutBtn = document.getElementById('brochure-zoom-out');
    const fullScreenBtn = document.getElementById('brochure-fullscreen');
    const downloadBtn = document.getElementById('brochure-download');
    const printBtn = document.getElementById('brochure-print');
    const paperEl = document.querySelector('.digital-brochure-paper');

    if (zoomInBtn && paperEl) {
      zoomInBtn.addEventListener('click', () => {
        if (this.zoomLevel < 1.6) {
          this.zoomLevel += 0.15;
          paperEl.style.transform = `scale(${this.zoomLevel})`;
        }
      });
    }

    if (zoomOutBtn && paperEl) {
      zoomOutBtn.addEventListener('click', () => {
        if (this.zoomLevel > 0.7) {
          this.zoomLevel -= 0.15;
          paperEl.style.transform = `scale(${this.zoomLevel})`;
        }
      });
    }

    if (fullScreenBtn && this.dialog) {
      fullScreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          this.dialog.requestFullscreen().catch((err) => {
            console.warn(`Error attempting fullscreen: ${err.message}`);
          });
        } else {
          document.exitFullscreen();
        }
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        this.triggerDownload();
      });
    }

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  triggerDownload() {
    const a = document.createElement('a');
    a.href = 'Broucher Final.jpeg';
    a.download = 'ElectraX_2026_Brochure.jpeg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    if (window.showAppToast) {
      window.showAppToast('Brochure downloaded successfully!');
    }
  }

  open() {
    if (!this.overlay) return;
    this.zoomLevel = 1.0;
    const paperEl = document.querySelector('.digital-brochure-paper');
    if (paperEl) paperEl.style.transform = 'scale(1)';

    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.overlay) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
