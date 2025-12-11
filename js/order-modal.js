/**
 * Order Modal with Square iframe integration
 * Provides seamless in-site ordering experience
 */

class OrderModal {
    constructor() {
        this.modal = null;
        this.overlay = null;
        this.iframe = null;
        this.isPreloaded = false;
        this.squareURL = 'https://pitamyshawarma.square.site/?location=J952PZN8F5KTY#DBDUDSBS4DE42IHGR6ZKKAPY';

        this.init();
    }

    init() {
        // Create modal structure
        this.createModal();

        // Setup event listeners
        this.setupEventListeners();

        // Preload iframe ASAP - start after just 500ms (don't wait for images)
        setTimeout(() => this.preloadIframe(), 500);
    }

    createModal() {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'order-modal-overlay';
        this.overlay.setAttribute('aria-hidden', 'true');

        // Create modal container
        this.modal = document.createElement('div');
        this.modal.className = 'order-modal';
        this.modal.setAttribute('role', 'dialog');
        this.modal.setAttribute('aria-modal', 'true');
        this.modal.setAttribute('aria-labelledby', 'order-modal-title');

        // Modal HTML structure - NO HEADER, just iframe + mobile close button
        this.modal.innerHTML = `
            <button class="order-modal-close-mobile" aria-label="Close ordering">
                <i class="fas fa-times"></i>
            </button>
            <div class="order-modal-body">
                <div class="order-modal-loading">
                    <div class="order-modal-spinner"></div>
                    <p class="order-modal-loading-text">Loading menu...</p>
                </div>
                <iframe 
                    class="order-iframe" 
                    title="Online Ordering"
                    allow="payment"
                    loading="eager"
                    style="opacity: 0; transition: opacity 0.3s ease;"
                ></iframe>
            </div>
        `;

        // Add to DOM
        document.body.appendChild(this.overlay);
        document.body.appendChild(this.modal);

        // Get references
        this.iframe = this.modal.querySelector('.order-iframe');
        this.loadingIndicator = this.modal.querySelector('.order-modal-loading');
    }

    setupEventListeners() {
        // Mobile close button
        const mobileCloseBtn = this.modal.querySelector('.order-modal-close-mobile');
        if (mobileCloseBtn) {
            mobileCloseBtn.addEventListener('click', () => this.close());
        }

        // Overlay click to close
        this.overlay.addEventListener('click', () => this.close());

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });

        // iframe load event
        this.iframe.addEventListener('load', () => {
            this.hideLoading();
            // Fade in iframe once loaded
            this.iframe.style.opacity = '1';
        });
    }

    preloadIframe() {
        if (this.isPreloaded) return;

        console.log('🚀 Preloading Square ordering iframe...');
        this.iframe.src = this.squareURL;
        this.isPreloaded = true;

        // Timeout warning if Square takes too long
        setTimeout(() => {
            if (this.loadingIndicator.style.display !== 'none') {
                console.warn('⚠️ Square site taking longer than expected to load...');
            }
        }, 5000);
    }

    open() {
        console.log('📂 Opening order modal...');

        // Ensure iframe is loaded
        if (!this.isPreloaded) {
            console.log('⏳ Iframe not preloaded, loading now...');
            this.showLoading();
            this.iframe.src = this.squareURL;
            this.isPreloaded = true;
        }

        // Prevent body scroll
        document.body.classList.add('order-modal-open');

        // Show modal IMMEDIATELY (don't use requestAnimationFrame delay)
        this.overlay.classList.add('active');
        this.modal.classList.add('active');

        // Track event (optional - for analytics)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'open_order_modal', {
                event_category: 'engagement',
                event_label: 'Order Modal Opened'
            });
        }
    }

    close() {
        // Remove active classes
        this.overlay.classList.remove('active');
        this.modal.classList.remove('active');

        // Re-enable body scroll
        document.body.classList.remove('order-modal-open');

        // Return focus to trigger button if available
        const orderButtons = document.querySelectorAll('[data-order-trigger]');
        if (orderButtons.length > 0) {
            orderButtons[0].focus();
        }
    }

    isOpen() {
        return this.modal.classList.contains('active');
    }

    showLoading() {
        this.loadingIndicator.style.display = 'block';
    }

    hideLoading() {
        this.loadingIndicator.style.display = 'none';
    }
}

// Global instance
let orderModal;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        orderModal = new OrderModal();
    });
} else {
    orderModal = new OrderModal();
}

// Global function to open modal (called by buttons)
function openOrderModal() {
    if (orderModal) {
        orderModal.open();
    }
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrderModal;
}
