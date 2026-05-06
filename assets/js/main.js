/* assets/js/main.js */
/**
 * Care At Home - Core Application Logic
 * Modular vanilla JavaScript for DOM interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('#mobile-menu a');

    if (mobileMenuBtn && mobileMenu) {
        // Toggle menu visibility
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu automatically when a navigation link is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Premium Sticky Header Enhancement ---
    // Adds a soft, wide visual shadow to the navbar when the user scrolls down
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // --- Premium Scroll Reveal Interactions (Intersection Observer) ---
    // Select all elements that need to animate in
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade, .image-parallax');
    
    // Configuration for the observer
    // rootMargin '0px 0px -50px 0px' ensures the element is slightly above the bottom before triggering
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    // The observer callback
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                // Unobserve after animating so it only happens once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach observer to each element
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});