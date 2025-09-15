// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const hamburger = document.querySelector('.hamburger');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Particle animation for hero section
function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 30; // Reduced for subtlety

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay
        particle.style.animationDelay = Math.random() * 8 + 's';

        // Random size (smaller for subtlety)
        const size = Math.random() * 2 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particlesContainer.appendChild(particle);
    }
}

// Hero section animations - more organic
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    const heroText = document.querySelector('#home .grid');

    // Stagger the hero content elements
    const heroElements = heroText.querySelectorAll('div, h1, h2, p, .flex');

    gsap.fromTo(heroElements,
        {
            opacity: 0,
            y: 30,
            rotation: -1
        },
        {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power2.out"
        }
    );

    // Animate the accent blob
    const accentBlob = document.querySelector('.accent-blob');
    if (accentBlob) {
        gsap.fromTo(accentBlob,
            {
                opacity: 0,
                scale: 0.8,
                rotation: -10
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 2,
                ease: "power2.out",
                delay: 0.5
            }
        );
    }

    // Animate floating shapes
    const floatingShapes = document.querySelectorAll('.floating-shape');
    gsap.fromTo(floatingShapes,
        {
            opacity: 0,
            scale: 0,
            rotation: 180
        },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "back.out(1.7)",
            delay: 1
        }
    );
}

// Section animations - more natural
function initSectionAnimations() {
    // About section - staggered entrance
    gsap.fromTo('.about-content',
        {
            opacity: 0,
            x: -40,
            rotation: -1
        },
        {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#about',
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        }
    );

    gsap.fromTo('.skills-content',
        {
            opacity: 0,
            x: 40,
            rotation: 1
        },
        {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#about',
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Skills badges - organic entrance
    gsap.fromTo('.skill-badge',
        {
            opacity: 0,
            scale: 0.3,
            rotation: 15
        },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "back.out(1.4)",
            scrollTrigger: {
                trigger: '.skills-content',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Projects section - varied entrance
    const projectCards = document.querySelectorAll('.project-card');
    gsap.fromTo(projectCards,
        {
            opacity: 0,
            y: 60,
            rotation: 2
        },
        {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#projects',
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Experience timeline - flowing entrance
    gsap.fromTo('.timeline-item',
        {
            opacity: 0,
            x: -50,
            rotation: -1
        },
        {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#experience',
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Contact section - gentle entrance
    gsap.fromTo('#contact .card-hover',
        {
            opacity: 0,
            y: 40,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '#contact',
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Form handling with better UX
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Build mailto link to open user's default email client
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Animate button
        gsap.to(submitButton, {
            scale: 0.95,
            duration: 0.1,
            ease: "power2.out"
        });

        submitButton.textContent = 'Preparing...';
        submitButton.disabled = true;

        const recipient = 'arryanmalhotra2@gmail.com';
        const subject = encodeURIComponent(`New message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

        // Try to open the user's email client
        window.location.href = mailtoLink;

        // Provide quick UI feedback
        showNotification('Opening your email app to send the message...', 'success');

        // Show a confirmation modal after opening the mail app
        setTimeout(() => {
            showSendConfirmationModal({
                onConfirm: () => {
                    showNotification('Thanks! Your message has been marked as sent.', 'success');
                }
            });

            // Reset UI state
            contactForm.reset();
            gsap.to(submitButton, {
                scale: 1,
                duration: 0.2,
                ease: "back.out(1.7)"
            });
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1200);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-24 right-6 z-50 p-4 rounded-xl shadow-2xl transform translate-x-full transition-all duration-300 ${type === 'success' ? 'bg-green-500/90 backdrop-blur-md' :
        type === 'error' ? 'bg-red-500/90 backdrop-blur-md' :
            'bg-blue-500/90 backdrop-blur-md'
        }`;

    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} text-white"></i>
            <span class="text-white font-medium text-sm">${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    gsap.to(notification, {
        x: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        gsap.to(notification, {
            x: '100%',
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => notification.remove()
        });
    }, 5000);
}

// Simple confirmation modal after opening the user's email app
function showSendConfirmationModal(options = {}) {
    const { onConfirm } = options;

    // Remove existing modal if any
    const existing = document.querySelector('.send-confirmation-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'send-confirmation-modal fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6';

    const panel = document.createElement('div');
    panel.className = 'bg-gray-900 rounded-2xl border border-gray-700/50 p-6 max-w-md w-full text-center shadow-2xl';
    panel.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-green-400/10 mx-auto">
                <i class="fas fa-envelope text-green-400"></i>
            </div>
            <h4 class="text-white text-lg font-semibold">Did your email app open?</h4>
            <p class="text-gray-400 text-sm">Once you hit Send in your email app, click Confirm below.</p>
            <div class="flex items-center justify-center gap-3 pt-2">
                <button id="confirm-send" class="btn-primary text-black font-semibold py-3 px-5 rounded-xl">Confirm sent</button>
                <a href="mailto:arryanmalhotra2@gmail.com" class="btn-secondary text-green-400 font-semibold py-3 px-5 rounded-xl">Try again</a>
            </div>
        </div>
    `;

    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    function close() {
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => overlay.remove()
        });
    }

    document.getElementById('confirm-send').addEventListener('click', () => {
        if (typeof onConfirm === 'function') onConfirm();
        close();
    });

    // Animate in
    gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
}

// Subtle parallax effect
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.getElementById('home');
        const particlesContainer = document.querySelector('.particles-container');
        const accentBlob = document.querySelector('.accent-blob');

        if (heroSection && particlesContainer) {
            const rate = scrolled * -0.3; // Reduced for subtlety
            particlesContainer.style.transform = `translateY(${rate}px)`;
        }

        if (accentBlob) {
            const blobRate = scrolled * 0.2;
            accentBlob.style.transform = `translateY(${blobRate}px)`;
        }
    });
}

// Dynamic text rotation effect
function initTextRotation() {
    const textElements = document.querySelectorAll('.typing-text');
    const firstText = document.querySelector('h2 .text-gradient:first-child');

    if (!textElements.length) return;

    let currentIndex = 0;
    const texts = [firstText, ...textElements];

    function rotateText() {
        // Hide current text
        if (texts[currentIndex]) {
            texts[currentIndex].classList.remove('active');
            texts[currentIndex].style.display = 'none';
        }

        // Move to next text
        currentIndex = (currentIndex + 1) % texts.length;

        // Show next text
        if (texts[currentIndex]) {
            texts[currentIndex].style.display = 'inline';
            setTimeout(() => {
                texts[currentIndex].classList.add('active');
            }, 50);
        }
    }

    // Initialize first text
    if (firstText) {
        firstText.classList.add('active');
    }

    // Start rotation after initial delay
    setTimeout(() => {
        setInterval(rotateText, 3000); // Change every 3 seconds
    }, 2000);
}

// Organic typing effect (keeping for compatibility)
function initTypingEffect() {
    const heroTitle = document.querySelector('.text-gradient');
    if (!heroTitle) return;

    const text = heroTitle.textContent;
    heroTitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            // Vary the typing speed slightly for organic feel
            const delay = Math.random() * 50 + 80;
            setTimeout(typeWriter, delay);
        }
    };

    // Start typing effect after hero animation
    setTimeout(typeWriter, 1800);
}

// Initialize all animations and functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    createParticles();

    // Initialize animations
    initHeroAnimations();
    initSectionAnimations();

    // Initialize functionality
    initContactForm();
    initParallaxEffect();
    initTextRotation();

    // Add loading animation
    gsap.to('body', {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Project data with hosted URLs and preview information
const projectData = {
    'erpify': {
        url: 'https://github.com/PixVenom/ERPIFY',
        preview: {
            title: 'ERPIFY',
            description: 'Full-Stack ERP System',
            icon: 'fas fa-chart-line',
            color: 'green'
        }
    },
    'task-manager': {
        url: 'https://task-manager-demo.netlify.app', // Replace with actual hosted URL
        preview: {
            title: 'Task Manager',
            description: 'Real-time Collaboration',
            icon: 'fas fa-tasks',
            color: 'blue'
        }
    },
    'weather-dashboard': {
        url: 'https://weather-dashboard-demo.netlify.app', // Replace with actual hosted URL
        preview: {
            title: 'Weather Dashboard',
            description: 'Interactive Weather App',
            icon: 'fas fa-cloud-sun',
            color: 'orange'
        }
    }
};

// Enhanced hover effects for project cards with preview functionality
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const projectId = card.getAttribute('data-project');
        const previewOverlay = card.querySelector('.project-preview');
        const originalOverlay = card.querySelector('.project-overlay');

        // Hover enter - show preview
        card.addEventListener('mouseenter', () => {
            // Animate card lift
            gsap.to(card, {
                y: -8,
                rotation: 0.5,
                duration: 0.4,
                ease: "power2.out"
            });

            // Show preview overlay
            if (previewOverlay) {
                gsap.to(previewOverlay, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }

            // Hide original overlay
            if (originalOverlay) {
                gsap.to(originalOverlay, {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });

        // Hover leave - hide preview
        card.addEventListener('mouseleave', () => {
            // Animate card back
            gsap.to(card, {
                y: 0,
                rotation: 0,
                duration: 0.4,
                ease: "power2.out"
            });

            // Hide preview overlay
            if (previewOverlay) {
                gsap.to(previewOverlay, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }

            // Show original overlay
            if (originalOverlay) {
                gsap.to(originalOverlay, {
                    opacity: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        });

        // Click handler to open hosted project
        card.addEventListener('click', (e) => {
            e.preventDefault();

            if (projectData[projectId] && projectData[projectId].url) {
                // Add click animation
                gsap.to(card, {
                    scale: 0.95,
                    duration: 0.1,
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.to(card, {
                            scale: 1,
                            duration: 0.2,
                            ease: "back.out(1.7)"
                        });
                    }
                });

                // Open project URL in new tab
                setTimeout(() => {
                    window.open(projectData[projectId].url, '_blank', 'noopener,noreferrer');
                }, 150);
            } else {
                // Show notification if no URL is available
                showNotification('Project URL not available yet', 'info');
            }
        });
    });

    // Add subtle hover effects to skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            gsap.to(badge, {
                scale: 1.05,
                rotation: 2,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });

        badge.addEventListener('mouseleave', () => {
            gsap.to(badge, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});

// Smooth reveal animation for sections
gsap.utils.toArray('section').forEach((section, index) => {
    gsap.fromTo(section,
        {
            opacity: 0,
            y: 40,
            rotation: 0.5
        },
        {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Add scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-indicator fixed top-0 left-0 z-50';
    progressBar.style.height = '0px';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        gsap.to(progressBar, {
            height: `${scrollPercent * 100}%`,
            duration: 0.1,
            ease: "none"
        });
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', initScrollProgress);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
        }
    }
});

// Add touch gesture support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// Add micro-interactions for buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');

    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseup', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.1,
                ease: "back.out(1.7)"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.1,
                ease: "power2.out"
            });
        });
    });
});

// Add subtle cursor effects
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a, button');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });

        link.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    });
});