/**
 * ==============================================================================
 * EVENTS SECTION COMPONENT (EventsSection.js)
 * Dynamic 6-Event Grid with Category Filtering & 3D Tilt Hover Effects
 * ==============================================================================
 */

export class EventsSection {
  constructor(eventsData, onEventClick) {
    this.events = eventsData;
    this.onEventClick = onEventClick;
    this.currentFilter = 'ALL';
    this.gridContainer = document.getElementById('events-grid-container');
    this.filterBtns = document.querySelectorAll('.filter-btn');

    this.init();
  }

  init() {
    this.renderEvents();
    this.bindFilters();
  }

  getIconSvg(iconName) {
    switch (iconName) {
      case 'circuit':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/><path d="M10 7v3a2 2 0 0 1-2 2H3"/><path d="M14 7v3a2 2 0 0 0 2 2h5"/><path d="M10 17v-3a2 2 0 0 0-2-2H3"/><path d="M14 17v-3a2 2 0 0 1 2-2h5"/></svg>`;
      case 'zap':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
      case 'cpu':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`;
      case 'share2':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`;
      case 'camera':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`;
      case 'users':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
      default:
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    }
  }

  bindFilters() {
    this.filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        if (filter === this.currentFilter) return;

        this.filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        this.currentFilter = filter;
        this.renderEvents();
      });
    });
  }

  renderEvents() {
    if (!this.gridContainer) return;

    let filteredEvents = this.events;
    if (this.currentFilter === 'TECHNICAL') {
      filteredEvents = this.events.filter((e) => e.category === 'TECHNICAL');
    } else if (this.currentFilter === 'NON-TECHNICAL') {
      filteredEvents = this.events.filter((e) => e.category === 'NON-TECHNICAL');
    }

    this.gridContainer.innerHTML = '';

    filteredEvents.forEach((ev, idx) => {
      const card = document.createElement('div');
      card.className = 'event-card glass-panel';
      card.setAttribute('data-id', ev.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${ev.name}`);

      const categoryClass = ev.category === 'TECHNICAL' ? 'technical' : 'non-technical';
      const iconSvg = this.getIconSvg(ev.icon);

      card.innerHTML = `
        <div class="event-card-inner">
          <div class="event-card-top">
            <span class="event-category-tag ${categoryClass}">${ev.category}</span>
            <div class="event-icon-box">${iconSvg}</div>
          </div>
          <h3 class="event-card-title">${ev.name}</h3>
          <p class="event-card-tagline">${ev.tagline}</p>
          <p class="event-card-desc">${ev.shortDescription}</p>
        </div>

        <div>
          <div class="event-card-specs">
            <div class="event-spec-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${ev.venue}</span>
            </div>
          </div>

          <div class="event-card-action">
            <span>VIEW EVENT DETAILS</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </div>
      `;

      // 3D Tilt interaction on mouse move
      this.bindTilt(card);

      // Event click trigger
      card.addEventListener('click', () => {
        if (this.onEventClick) this.onEventClick(ev);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (this.onEventClick) this.onEventClick(ev);
        }
      });

      this.gridContainer.appendChild(card);
    });
  }

  bindTilt(card) {
    if (window.matchMedia('(hover: none)').matches) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  }
}
