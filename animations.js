// ================================
// QUANTUMCODE GSAP ANIMATIONS
// ================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ================================
// PAGE LOAD ANIMATIONS
// ================================

// Initialize page load sequence
document.addEventListener('DOMContentLoaded', function() {
    initPageAnimations();
    initScrollAnimations();
    initButtonAnimations();
    initInteractiveElements();
});

function initPageAnimations() {
    // Create master timeline for page load
    const tl = gsap.timeline();

    // 1. NAVBAR SLIDE-IN ANIMATION (Required)
    tl.to('#navbar', {
        duration: 1,
        y: 0,
        ease: 'power3.out',
        delay: 0.5
    })

    // 2. Hero title glitch reveal
    .fromTo('#hero-title', {
        opacity: 0,
        y: 50,
        scale: 0.8
    }, {
        duration: 1.2,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'power3.out'
    }, '-=0.3')

    // 3. Hero subtitle fade up
    .fromTo('#hero-subtitle', {
        opacity: 0,
        y: 30
    }, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    }, '-=0.8')

    // 4. Stats grid staggered animation
    .fromTo('.stat-item', {
        opacity: 0,
        y: 40,
        scale: 0.8
    }, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)'
    }, '-=0.4')

    // 5. CTA buttons with bounce
    .fromTo('#hero-cta .cta-button', {
        opacity: 0,
        y: 30,
        scale: 0.9
    }, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)'
    }, '-=0.3')

    // 6. Feature tags floating in
    .fromTo('.feature-tag', {
        opacity: 0,
        y: 20
    }, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power2.out'
    }, '-=0.4');

    // Animate floating code snippets
    gsap.fromTo('.code-snippet', {
        opacity: 0,
        scale: 0.5,
        rotation: -10
    }, {
        duration: 1,
        opacity: 0.6,
        scale: 1,
        rotation: 0,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        delay: 2
    });

    // Animate particles with enhanced motion
    gsap.fromTo('.particle', {
        scale: 0,
        opacity: 0
    }, {
        duration: 1.5,
        scale: 1,
        opacity: 0.7,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 1.5
    });
}

// ================================
// SCROLL-TRIGGERED ANIMATIONS (Required)
// ================================

function initScrollAnimations() {
    // 1. FEATURES SECTION FADE-IN (Required Section 1)
    gsap.fromTo('#features .section-header', {
        opacity: 0,
        y: 60
    }, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#features',
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Features cards staggered reveal
    gsap.fromTo('.feature-card', {
        opacity: 0,
        y: 80,
        scale: 0.8
    }, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // 2. DEMO SECTION FADE-IN (Required Section 2)
    gsap.fromTo('#demo .demo-text', {
        opacity: 0,
        x: -60
    }, {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#demo',
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo('#demo .demo-visual', {
        opacity: 0,
        x: 60,
        scale: 0.9
    }, {
        duration: 1,
        opacity: 1,
        x: 0,
        scale: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#demo',
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse'
        }
    });

    // Demo code typing effect
    gsap.fromTo('.demo-code .code-line', {
        opacity: 0,
        x: -20
    }, {
        duration: 0.6,
        opacity: 1,
        x: 0,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.demo-screen',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    });

    // AI suggestion popup
    gsap.fromTo('.demo-ai-suggestion', {
        opacity: 0,
        y: 20,
        scale: 0.9
    }, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'back.out(1.7)',
        delay: 1.2,
        scrollTrigger: {
            trigger: '.demo-screen',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        }
    });

    // 3. PRICING SECTION FADE-IN (Required Section 3)
    gsap.fromTo('#pricing .section-header', {
        opacity: 0,
        y: 50
    }, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#pricing',
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        }
    });

    // Pricing cards with special attention to featured card
    gsap.fromTo('.pricing-card', {
        opacity: 0,
        y: 60,
        scale: 0.9
    }, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Featured card special glow effect
    gsap.to('.pricing-card.featured', {
        boxShadow: '0 20px 60px rgba(0, 255, 136, 0.4)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        scrollTrigger: {
            trigger: '.pricing-card.featured',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play pause resume reverse'
        }
    });
}

// ================================
// BUTTON HOVER ANIMATIONS (Required)
// ================================

function initButtonAnimations() {
    // Main CTA Button Pulse on Hover (Required)
    const mainCTA = document.getElementById('main-cta');
    const demoCTA = document.getElementById('demo-cta');
    const navCTA = document.getElementById('nav-cta');
    const demoPlayBtn = document.getElementById('demo-play');

    // Enhanced pulse animation for primary buttons
    function createPulseAnimation(button, scaleValue = 1.05, shadowIntensity = 0.6) {
        const pulseTimeline = gsap.timeline({ paused: true });

        pulseTimeline
            .to(button, {
                duration: 0.3,
                scale: scaleValue,
                boxShadow: `0 8px 30px rgba(0, 255, 136, ${shadowIntensity})`,
                ease: 'power2.out'
            })
            .to(button, {
                duration: 0.6,
                scale: scaleValue * 0.98,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            });

        button.addEventListener('mouseenter', () => {
            pulseTimeline.play();

            // Add shine effect
            gsap.to(button.querySelector('.button-shine'), {
                duration: 0.6,
                left: '100%',
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            pulseTimeline.reverse();

            // Reset shine
            gsap.set(button.querySelector('.button-shine'), {
                left: '-100%'
            });
        });
    }

    // Apply pulse animations to different button types
    if (mainCTA) createPulseAnimation(mainCTA, 1.08, 0.7);
    if (demoCTA) createPulseAnimation(demoCTA, 1.05, 0.4);
    if (navCTA) createPulseAnimation(navCTA, 1.06, 0.5);
    if (demoPlayBtn) createPulseAnimation(demoPlayBtn, 1.07, 0.6);

    // Pricing buttons with bounce effect
    const pricingButtons = document.querySelectorAll('.plan-button');
    pricingButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                y: -3,
                boxShadow: '0 10px 25px rgba(0, 255, 136, 0.3)',
                ease: 'back.out(1.7)'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                y: 0,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                ease: 'power2.out'
            });
        });
    });

    // Feature tags hover animation
    const featureTags = document.querySelectorAll('.feature-tag');
    featureTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            gsap.to(tag, {
                duration: 0.3,
                scale: 1.1,
                y: -5,
                ease: 'back.out(1.7)'
            });
        });

        tag.addEventListener('mouseleave', () => {
            gsap.to(tag, {
                duration: 0.3,
                scale: 1,
                y: 0,
                ease: 'power2.out'
            });
        });
    });
}

// ================================
// INTERACTIVE ELEMENTS
// ================================

function initInteractiveElements() {
    // Feature cards hover animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        const icon = card.querySelector('.feature-icon');

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.4,
                y: -15,
                scale: 1.02,
                ease: 'power3.out'
            });

            gsap.to(icon, {
                duration: 0.4,
                scale: 1.2,
                rotation: 5,
                ease: 'back.out(1.7)'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.4,
                y: 0,
                scale: 1,
                ease: 'power2.out'
            });

            gsap.to(icon, {
                duration: 0.4,
                scale: 1,
                rotation: 0,
                ease: 'power2.out'
            });
        });
    });

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            gsap.to(stat, {
                duration: 0.3,
                scale: 1.1,
                ease: 'back.out(1.7)'
            });
        });

        stat.addEventListener('mouseleave', () => {
            gsap.to(stat, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // Navbar links hover effect
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.3,
                y: -2,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                y: 0,
                ease: 'power2.out'
            });
        });
    });

    // Smooth scroll for navbar links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ================================
// PERFORMANCE OPTIMIZATIONS
// ================================

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Preload animations for better performance
gsap.set([
    '#navbar',
    '#hero-title',
    '#hero-subtitle',
    '.stat-item',
    '.cta-button',
    '.feature-tag',
    '.code-snippet',
    '.particle'
], {
    willChange: 'transform, opacity'
});

// ================================
// UTILITY FUNCTIONS
// ================================

// Create a reusable fade-in animation
function createFadeIn(element, options = {}) {
    const defaults = {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        start: 'top 80%',
        end: 'top 20%'
    };

    const settings = { ...defaults, ...options };

    return gsap.fromTo(element, {
        opacity: settings.opacity,
        y: settings.y
    }, {
        duration: settings.duration,
        opacity: 1,
        y: 0,
        ease: settings.ease,
        scrollTrigger: {
            trigger: element,
            start: settings.start,
            end: settings.end,
            toggleActions: 'play none none reverse'
        }
    });
}

// Add loading state management
window.addEventListener('load', () => {
    // Remove any loading states
    document.body.classList.add('loaded');

    // Trigger any additional load animations
    gsap.delayedCall(0.5, () => {
        console.log('QuantumCode animations initialized successfully!');
    });
});

console.log('QuantumCode GSAP animations loaded and ready!');