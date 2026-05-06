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
                // Class defined in style.css for better performance than inline JS styling
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

});