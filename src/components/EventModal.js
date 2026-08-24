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

    const roundsHtml = eventData.rounds.map((r, i) => `
      <div class="round-box">
        <h5 class="round-name">${r.name}</h5>
        <p class="round-desc">${r.details}</p>
      </div>
    `).join('');

    const rulesHtml = eventData.rules.map((rule) => `
      <li>${rule}</li>
    `).join('');

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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div class="event-chip-text">
              <span class="event-chip-label">TIMING</span>
              <span class="event-chip-val">${eventData.time}</span>
            </div>
          </div>

          <div class="event-chip">
            <div class="event-chip-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <div class="event-chip-text">
              <span class="event-chip-label">TEAM SIZE</span>
              <span class="event-chip-val">${eventData.members}</span>
            </div>
          </div>

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

        <!-- Cash Prize Pool Banner -->
        <div class="prize-banner">
          <div class="prize-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7.5a2.5 2.5 0 0 0-2.5 2.5v.5H19v-.5A2.5 2.5 0 0 0 16.5 18H15c-.55 0-1-.45-1-1v-2.34"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
            <span>CASH PRIZES</span>
          </div>
          <div class="prize-amounts">
            <span>1st: ${eventData.prizePool.first}</span> | <span>2nd: ${eventData.prizePool.second}</span>
          </div>
        </div>

        <!-- Event Description -->
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1rem; color: #fff; margin-bottom: 0.5rem;">Event Overview</h4>
          <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">${eventData.shortDescription}</p>
        </div>

        <!-- Rounds Structure -->
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1rem; color: #fff; margin-bottom: 0.75rem;">Rounds Breakdown</h4>
          <div class="rounds-timeline">${roundsHtml}</div>
        </div>

        <!-- Rules & Guidelines -->
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1rem; color: #fff; margin-bottom: 0.75rem;">Rules & Eligibility</h4>
          <ul class="modal-rules-list">${rulesHtml}</ul>
        </div>

        <!-- Event Coordinators -->
        <div style="background: rgba(0, 240, 255, 0.03); border: 1px solid rgba(0, 240, 255, 0.15); border-radius: var(--border-radius-sm); padding: 1rem;">
          <h4 style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-electric-cyan); text-transform: uppercase; margin-bottom: 0.4rem;">Event Coordinators</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; font-size: 0.85rem; color: var(--text-secondary);">
            <div><strong>Faculty:</strong> ${eventData.coordinators.faculty}</div>
            <div><strong>Student:</strong> ${eventData.coordinators.student}</div>
          </div>
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
