/**
 * ==============================================================================
 * REGISTER MODAL COMPONENT (RegisterModal.js)
 * "Registration Opening Soon" Modal with Interactive Pre-Registration Notification Form
 * ==============================================================================
 */

export class RegisterModal {
  constructor(config, eventsData) {
    this.config = config;
    this.eventsData = eventsData;
    this.overlay = document.getElementById('register-modal-overlay');
    this.closeBtn = document.getElementById('register-modal-close');
    this.form = document.getElementById('register-notification-form');
    this.eventSelect = document.getElementById('register-event-select');

    this.init();
  }

  init() {
    if (!this.overlay) return;

    this.populateEventsDropdown();

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

    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }
  }

  populateEventsDropdown() {
    if (!this.eventSelect) return;
    this.eventSelect.innerHTML = `<option value="all">All Events / General Pass (₹250)</option>`;
    this.eventsData.forEach((ev) => {
      const opt = document.createElement('option');
      opt.value = ev.id;
      opt.textContent = `${ev.name} [${ev.eventCode}] (${ev.category})`;
      this.eventSelect.appendChild(opt);
    });
  }

  open(preferredEventName = null) {
    if (!this.overlay) return;

    if (preferredEventName && this.eventSelect) {
      for (let i = 0; i < this.eventSelect.options.length; i++) {
        if (this.eventSelect.options[i].text.toLowerCase().includes(preferredEventName.toLowerCase())) {
          this.eventSelect.selectedIndex = i;
          break;
        }
      }
    }

    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  handleSubmit() {
    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const collegeInput = document.getElementById('reg-college');

    const name = nameInput ? nameInput.value.trim() : 'Delegate';
    
    // Close modal
    this.close();

    // Reset form
    if (this.form) this.form.reset();

    // Show simulated toast confirmation
    if (window.showAppToast) {
      window.showAppToast(`⚡ Thank you, ${name}! You will be notified the instant registrations open.`);
    }
  }
}
