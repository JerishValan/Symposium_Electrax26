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
    // Generate a downloadable HTML/PDF summary file for the prototype
    const brochureText = `
======================================================================
ELECTRAX 2K26 - NATIONAL LEVEL TECHNICAL SYMPOSIUM
Presented by Department of Electrical and Electronics Engineering (EEE)
${this.config.institution.collegeName}
======================================================================

Date: ${this.config.brand.dateFormatted}
Venue: ${this.config.institution.address.fullAddress}
Website: ${this.config.contacts.general.website}
Email: ${this.config.contacts.general.email}
Phone: ${this.config.contacts.general.phone}

FEATURED EVENTS:
----------------------------------------------------------------------
1. EVENT NAME (Technical 01) - Circuit Debugging & Troubleshooting
2. EVENT NAME (Technical 02) - Technical Quiz & Core Conclave
3. EVENT NAME (Technical 03) - Embedded Systems, IoT & Hardware Pitch
4. EVENT NAME (Non-Technical 01) - Visual Connections & Clues
5. EVENT NAME (Non-Technical 02) - Campus Photography Showcase
6. EVENT NAME (Non-Technical 03) - Tactical Team Scavenger Challenge

REGISTRATION & PRIZES:
----------------------------------------------------------------------
Registration Fee: ${this.config.registration.feePerHead}
Total Cash Pool: ${this.config.registration.totalCashPool}
Certificates & Welcome Delegate Kits for all attendees!

COORDINATORS DIRECTORY:
----------------------------------------------------------------------
Faculty Convener: ${this.config.contacts.facultyCoordinators[0].name} (${this.config.contacts.facultyCoordinators[0].phone})
Student President: ${this.config.contacts.studentCoordinators[0].name} (${this.config.contacts.studentCoordinators[0].phone})

======================================================================
`;

    const blob = new Blob([brochureText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ELECTRAX_2K26_Information_Brochure.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Show toast
    if (window.showAppToast) {
      window.showAppToast('Brochure summary downloaded successfully!');
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
