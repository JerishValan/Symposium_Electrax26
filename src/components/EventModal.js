/**
 * ==============================================================================
 * EVENT MODAL COMPONENT (EventModal.js)
 * Comprehensive Details Modal for Individual Symposium Events
 * ==============================================================================
 */

export class EventModal {
  constructor(onRegisterClick) {
    this.onRegisterClick = onRegisterClick;
    this.overlay = document.getElementById('event-modal-overlay');
    this.modalContent = document.getElementById('event-modal-content');
    this.closeBtn = document.getElementById('event-modal-close');

    this.init();
  }

  init() {
    if (!this.overlay) return;

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(eventData) {
    if (!this.overlay || !this.modalContent) return;



    this.modalContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-badge">${eventData.category} EVENT</div>
        <h2 class="modal-title">${eventData.name}</h2>
        <p class="modal-tagline">${eventData.tagline}</p>
      </div>

      <div class="modal-body">
        <!-- Key Metadata Chips -->
        <div class="event-info-chips">
          <div class="event-chip">
            <div class="event-chip-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div class="event-chip-text">
              <span class="event-chip-label">VENUE</span>
              <span class="event-chip-val">${eventData.venue}</span>
            </div>
          </div>
        </div>

        <!-- Event Description -->
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1rem; color: #fff; margin-bottom: 0.5rem;">Event Overview</h4>
          <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">${eventData.shortDescription}</p>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-outline modal-cancel-btn">CLOSE</button>
        <button class="btn btn-primary modal-action-btn">
          <span>REGISTER FOR THIS EVENT</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>
    `;

    // Bind footer buttons
    const cancelBtn = this.modalContent.querySelector('.modal-cancel-btn');
    const actionBtn = this.modalContent.querySelector('.modal-action-btn');

    if (cancelBtn) cancelBtn.addEventListener('click', () => this.close());
    if (actionBtn) {
      actionBtn.addEventListener('click', () => {
        this.close();
        if (this.onRegisterClick) this.onRegisterClick(eventData.name);
      });
    }

    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
