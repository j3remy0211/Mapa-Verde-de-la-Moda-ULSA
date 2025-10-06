/**
 * Main JavaScript file for Mapa Verde de la Moda
 * Contains all interactive functionality for the website
 */

// Tailwind CSS configuration
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'ulsa-green': '#238935',
                    'ulsa-gray': '#333333'
                }
            }
        }
    };
}

// Image carousel logic
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const indicators = document.querySelectorAll("#indicators span");
  //const btnNext = document.getElementById("next");
  //const btnPrev = document.getElementById("prev");
  const totalSlides = carousel.children.length;
  let currentIndex = 0;
  let autoSlideInterval;

  const updateCarousel = (index) => {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((dot, i) => {
      dot.classList.toggle("bg-green-500", i === index);
      dot.classList.toggle("bg-gray-400", i !== index);
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel(currentIndex);
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 4000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  /**
  btnNext.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  btnPrev.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });
  */

  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel(currentIndex);
      resetAutoSlide();
    });
  });

  updateCarousel(currentIndex);
  startAutoSlide();
});

/**
 * Mobile menu toggle functionality
 * Used across all pages for responsive navigation
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

/**
 * Location filtering functionality for the map page
 * Filters location cards based on category
 * @param {string} category - The category to filter by ('all', 'segunda-mano', 'donacion', etc.)
 */
function filterLocations(category) {
    const cards = document.querySelectorAll('.location-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Reset button styles
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-ulsa-green', 'text-white');
        btn.classList.add('bg-white', 'text-ulsa-gray', 'border-2', 'border-gray-300');
    });
    
    // Activate selected button
    if (event && event.target) {
        event.target.classList.add('active', 'bg-ulsa-green', 'text-white');
        event.target.classList.remove('bg-white', 'text-ulsa-gray', 'border-2', 'border-gray-300');
    }
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Form management for participation page
 * Shows and hides different form types
 */
function showForm(formType) {
    // Hide all forms
    const forms = document.querySelectorAll('.form-content');
    forms.forEach(form => form.classList.add('hidden'));
    
    // Show container and specific form
    const container = document.getElementById('form-container');
    const specificForm = document.getElementById('form-' + formType);
    
    if (container && specificForm) {
        container.classList.remove('hidden');
        specificForm.classList.remove('hidden');
        
        // Scroll to form
        container.scrollIntoView({ behavior: 'smooth' });
    }
}

function hideForm() {
    const container = document.getElementById('form-container');
    const forms = document.querySelectorAll('.form-content');
    
    if (container) {
        container.classList.add('hidden');
    }
    
    forms.forEach(form => form.classList.add('hidden'));
}

/**
 * Counter animation for the impact page
 * Animates numbers from 0 to target value
 * @param {string} elementId - ID of the element to animate
 * @param {number} targetValue - Final value to count to
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounter(elementId, targetValue, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startValue = 0;
    const increment = targetValue / (duration / 16);
    let currentValue = startValue;

    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            element.textContent = targetValue.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue).toLocaleString();
        }
    }, 16);
}

/**
 * Initialize counters when page loads (for impact page)
 */
function initCounters() {
    // Check if we're on the impact page by looking for counter elements
    if (document.getElementById('counter-visitors')) {
        animateCounter('counter-visitors', 1247, 2000);
        animateCounter('counter-locations', 23, 1500);
        animateCounter('counter-downloads', 189, 1800);
        animateCounter('counter-participants', 67, 1600);
    }
}

/**
 * Form validation helper functions
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateRequired(fields) {
    let isValid = true;
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else if (field) {
            field.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

/**
 * Smooth scroll to section helper
 * @param {string} targetId - ID of target element
 */
function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Theme and accessibility helpers
 */
function getPreferredColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

function respectMotionPreference() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
    }
}

/**
 * Analytics helper functions (placeholder for future Google Analytics integration)
 */
function trackEvent(category, action, label = null) {
    // Placeholder for Google Analytics tracking
    console.log('Event tracked:', { category, action, label });
    
    // Future implementation:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         event_category: category,
    //         event_label: label
    //     });
    // }
}

function trackPageView(page) {
    console.log('Page view tracked:', page);
    
    // Future implementation:
    // if (typeof gtag !== 'undefined') {
    //     gtag('config', 'GA_MEASUREMENT_ID', {
    //         page_path: page
    //     });
    // }
}

/**
 * Utility functions
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Error handling
 */
function handleError(error, context = 'Unknown') {
    console.error(`Error in ${context}:`, error);
    // Future implementation: Send to error tracking service
}

/**
 * DOM ready and initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize accessibility preferences
        respectMotionPreference();
        
        // Initialize counters if on impact page
        initCounters();
        
        // Track page view
        trackPageView(window.location.pathname);
        
        // Add click tracking to important buttons
        const trackableButtons = document.querySelectorAll('[data-track]');
        trackableButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.trackCategory || 'Button';
                const action = this.dataset.trackAction || 'Click';
                const label = this.dataset.trackLabel || this.textContent.trim();
                trackEvent(category, action, label);
            });
        });
        
        console.log('Mapa Verde de la Moda website initialized successfully');
        
    } catch (error) {
        handleError(error, 'DOM initialization');
    }
});

/**
 * Window load event for additional initialization
 */
window.addEventListener('load', function() {
    try {
        // Any additional initialization that requires full page load
        
        // Remove loading states if any
        const loadingElements = document.querySelectorAll('.loading');
        loadingElements.forEach(el => el.classList.remove('loading'));
        
    } catch (error) {
        handleError(error, 'Window load');
    }
});

/**
 * Handle form submissions (generic handler)
 */
document.addEventListener('submit', function(e) {
    const form = e.target;
    
    // Check if this is one of our forms
    if (form.classList.contains('participation-form') || form.closest('.form-content')) {
        e.preventDefault();
        
        // Basic validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('border-red-500');
                isValid = false;
            } else {
                field.classList.remove('border-red-500');
            }
        });
        
        if (isValid) {
            // Track form submission
            trackEvent('Form', 'Submit', form.dataset.formType || 'Unknown');
            
            // Show success message (placeholder)
            alert('¡Gracias por tu participación! Tu información ha sido enviada correctamente.');
            
            // Future implementation: Send to Google Forms or backend
            console.log('Form data:', new FormData(form));
            
            // Reset form
            form.reset();
            hideForm();
        } else {
            alert('Por favor, completa todos los campos requeridos.');
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".shop-card, .animated-card, .feature-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));
});
