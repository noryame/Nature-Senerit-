   // script.js

document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle for mobile view
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }

            // Close the nav menu on link click (mobile)
            if (menuToggle.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Hero section background animation
    const heroSection = document.querySelector('.hero');
    let currentHue = 0;

    function animateBackground() {
        currentHue += 0.5;
        heroSection.style.background = `linear-gradient(to bottom, hsl(${currentHue}, 70%, 80%), hsl(${(currentHue + 50) % 360}, 70%, 90%))`;
        requestAnimationFrame(animateBackground);
    }

    if (heroSection) animateBackground();

    // Fade-in effect on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
});
