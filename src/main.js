/* ═══════════════════════════════════════════════════════════════
   PINNACLE STUDIOS — Main JavaScript
   Handles: navigation, scroll animations, testimonials,
   statistics counters, form handling, intersection observers
   ═══════════════════════════════════════════════════════════════ */

import './style.css';

// ─── UTILITY: Detect reduced motion ───
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── NAVIGATION ───
(function initNavigation() {
  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('nav-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu-link, .mobile-menu-cta');

  let lastScrollY = 0;

  // Scroll behavior
  function onScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Detect dark sections for nav color switch
    const darkSections = document.querySelectorAll('.statistics, .services, .cta-section, .footer');
    let isOverDark = false;
    const navRect = nav.getBoundingClientRect();
    const navCenter = navRect.top + navRect.height / 2;

    darkSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= navCenter && rect.bottom >= navCenter) {
        isOverDark = true;
      }
    });

    if (isOverDark) {
      nav.classList.add('nav-dark');
      document.querySelectorAll('.menu-line').forEach(l => l.style.background = 'var(--off-white)');
      document.querySelector('.nav-logo').style.color = 'var(--off-white)';
      document.querySelectorAll('.nav-link').forEach(l => l.style.color = 'var(--off-white)');
    } else {
      nav.classList.remove('nav-dark');
      document.querySelectorAll('.menu-line').forEach(l => l.style.background = '');
      document.querySelector('.nav-logo').style.color = '';
      document.querySelectorAll('.nav-link').forEach(l => l.style.color = '');
    }

    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');

    if (isOpen) {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      mobileMenu.classList.add('open');
      menuBtn.classList.add('active');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  // Close mobile menu on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
})();


// ─── SCROLL ANIMATIONS ───
(function initScrollAnimations() {
  if (prefersReducedMotion) {
    // Show everything immediately
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });

  // Also observe projects, stat blocks, service items
  document.querySelectorAll('.project, .stat-block, .service-item').forEach(el => {
    observer.observe(el);
  });
})();


// ─── STATISTICS COUNTER ───
(function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');

  if (prefersReducedMotion) {
    statNumbers.forEach(el => {
      el.textContent = formatStatNumber(parseInt(el.dataset.count, 10));
    });
    return;
  }

  function formatStatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = formatStatNumber(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = formatStatNumber(target);
      }
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(el => observer.observe(el));
})();

// ─── SERVICES SCROLL-DRIVEN CARD STACK CONTROLLER (Jitter-free GPU smooth) ───
(function initServicesScrollDeck() {
  const pinContainer = document.querySelector('.services-pin-container');
  const cards = document.querySelectorAll('.service-card-node');
  const tabs = document.querySelectorAll('.stack-tab-btn');
  if (!pinContainer || !cards.length) return;

  let currentStep = -1;

  function setStep(step) {
    if (step === currentStep) return;
    currentStep = step;

    cards.forEach((card, i) => {
      card.classList.remove('card-active', 'card-peek-1', 'card-peek-2', 'card-exited-up');

      if (i < step) {
        // Exited upwards
        card.classList.add('card-exited-up');
      } else if (i === step) {
        // Active on top
        card.classList.add('card-active');
      } else if (i === step + 1) {
        // Peeking 1
        card.classList.add('card-peek-1');
      } else {
        // Peeking 2
        card.classList.add('card-peek-2');
      }
    });

    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === step);
    });
  }

  function onScroll() {
    const rect = pinContainer.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const totalScrollDistance = rect.height - viewportH;

    if (totalScrollDistance <= 0) return;

    // Calculate progress (0 to 1)
    const currentScroll = -rect.top;
    const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));

    // Determine current step based on progress threshold
    let step = 0;
    if (progress >= 0.32 && progress < 0.68) {
      step = 1;
    } else if (progress >= 0.68) {
      step = 2;
    }

    setStep(step);
  }

  // Bind scroll handler
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  // Tab click smooth scroll to corresponding card progress
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const rect = pinContainer.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const totalScrollDistance = pinContainer.offsetHeight - window.innerHeight;

      let targetRatio = 0;
      if (index === 1) targetRatio = 0.48;
      if (index === 2) targetRatio = 0.88;

      const targetY = containerTop + targetRatio * totalScrollDistance;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });

  // Clicking peeking card smoothly advances step
  cards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      if (index > currentStep) {
        const rect = pinContainer.getBoundingClientRect();
        const containerTop = rect.top + window.scrollY;
        const totalScrollDistance = pinContainer.offsetHeight - window.innerHeight;
        let targetRatio = index === 1 ? 0.48 : 0.88;
        window.scrollTo({ top: containerTop + targetRatio * totalScrollDistance, behavior: 'smooth' });
      }
    });
  });
})();






// ─── TESTIMONIALS ───
(function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const currentEl = document.getElementById('testimonial-current');
  const totalEl = document.getElementById('testimonial-total');

  if (!slides.length) return;

  let activeIndex = 0;
  let isAnimating = false;
  let autoplayTimer;

  totalEl.textContent = slides.length;

  function goTo(index) {
    if (isAnimating || index === activeIndex) return;
    isAnimating = true;

    const outgoing = slides[activeIndex];
    const incoming = slides[index];

    // Animate out
    outgoing.style.transition = 'opacity 0.5s cubic-bezier(0.625, 0.05, 0, 1), transform 0.5s cubic-bezier(0.625, 0.05, 0, 1)';
    outgoing.style.opacity = '0';
    outgoing.style.transform = 'translateY(-20px)';

    setTimeout(() => {
      outgoing.classList.remove('active');

      // Animate in
      incoming.style.transition = 'none';
      incoming.style.opacity = '0';
      incoming.style.transform = 'translateY(20px)';
      incoming.classList.add('active');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          incoming.style.transition = 'opacity 0.6s cubic-bezier(0.625, 0.05, 0, 1), transform 0.6s cubic-bezier(0.625, 0.05, 0, 1)';
          incoming.style.opacity = '1';
          incoming.style.transform = 'translateY(0)';
        });
      });

      activeIndex = index;
      currentEl.textContent = activeIndex + 1;
      isAnimating = false;
    }, 400);
  }

  function next() {
    goTo((activeIndex + 1) % slides.length);
  }

  function prev() {
    goTo((activeIndex - 1 + slides.length) % slides.length);
  }

  prevBtn.addEventListener('click', () => {
    resetAutoplay();
    prev();
  });

  nextBtn.addEventListener('click', () => {
    resetAutoplay();
    next();
  });

  // Autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(next, 8000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    const testimonialSection = document.getElementById('testimonials');
    const rect = testimonialSection.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;

    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

    if (e.key === 'ArrowRight') {
      resetAutoplay();
      next();
    } else if (e.key === 'ArrowLeft') {
      resetAutoplay();
      prev();
    }
  });

  // Pause autoplay when not in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        resetAutoplay();
      } else {
        clearInterval(autoplayTimer);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(document.getElementById('testimonials'));
})();


// ─── PARALLAX EFFECT ON ABOUT IMAGES ───
(function initParallax() {
  if (prefersReducedMotion) return;

  const aboutSection = document.querySelector('.about');
  const img1 = document.querySelector('.about-image-1');
  const img2 = document.querySelector('.about-image-2');

  if (!aboutSection || !img1 || !img2) return;

  function onScroll() {
    const rect = aboutSection.getBoundingClientRect();
    const viewportH = window.innerHeight;

    if (rect.top < viewportH && rect.bottom > 0) {
      const progress = (viewportH - rect.top) / (viewportH + rect.height);
      const offset1 = (progress - 0.5) * 30;
      const offset2 = (progress - 0.5) * -20;
      img1.style.transform = `translateY(${offset1}px)`;
      img2.style.transform = `translateY(${offset2}px)`;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();


// ─── CONTACT FORM ───
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  const submitBtn = document.getElementById('form-submit');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const consent = form.querySelector('#consent');

    if (!name.value.trim() || !email.value.trim()) {
      // Shake the submit button
      submitBtn.style.animation = 'shake 0.4s ease';
      setTimeout(() => submitBtn.style.animation = '', 400);
      return;
    }

    if (!consent.checked) {
      submitBtn.style.animation = 'shake 0.4s ease';
      setTimeout(() => submitBtn.style.animation = '', 400);
      return;
    }

    // Show success
    form.style.display = 'none';
    success.classList.add('visible');
  });
})();


// ─── HERO GRADIENT BLOB MOUSE TRACKING ───
(function initBlobTracking() {
  if (prefersReducedMotion) return;

  const hero = document.querySelector('.hero');
  const blob1 = document.querySelector('.blob-1');

  if (hero && blob1) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      blob1.style.transform = `translate(${(x - 0.5) * 40}px, ${(y - 0.5) * 40}px)`;
    });
  }

  const aboutSection = document.querySelector('.about-hero-section');
  const aboutCurtain = document.querySelector('.about-curtain-img');
  const aboutAura = document.querySelector('.about-aura-glow');

  if (aboutSection && (aboutCurtain || aboutAura)) {
    aboutSection.addEventListener('mousemove', (e) => {
      const rect = aboutSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (aboutCurtain) {
        aboutCurtain.style.transform = `scale(1.04) translate(${x * 16}px, ${y * 12}px)`;
      }
      if (aboutAura) {
        aboutAura.style.transform = `translate(calc(-50% + ${x * 35}px), calc(-50% + ${y * 25}px)) scale(1.15)`;
      }
    });

    aboutSection.addEventListener('mouseleave', () => {
      if (aboutCurtain) {
        aboutCurtain.style.transform = 'scale(1) translate(0px, 0px)';
      }
      if (aboutAura) {
        aboutAura.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    });
  }

  const servicesSection = document.querySelector('.services-pin-container');
  const servicesRibbon = document.querySelector('.services-groovy-ribbon');

  if (servicesSection && servicesRibbon) {
    servicesSection.addEventListener('mousemove', (e) => {
      const rect = servicesSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      servicesRibbon.style.transform = `translate(${x * 20}px, ${y * 14}px) scale(1.01)`;
    });

    servicesSection.addEventListener('mouseleave', () => {
      servicesRibbon.style.transform = 'translate(0px, 0px) scale(1)';
    });
  }
})();


// ─── SHAKE ANIMATION (used by form) ───
const shakeKeyframes = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  50% { transform: translateX(6px); }
  75% { transform: translateX(-4px); }
}
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = shakeKeyframes;
document.head.appendChild(styleSheet);


// ─── PERFORMANCE: Use requestAnimationFrame for scroll listeners ───
(function optimizeScrollListeners() {
  let ticking = false;
  const scrollCallbacks = [];

  window._registerScroll = function(cb) {
    scrollCallbacks.push(cb);
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        scrollCallbacks.forEach(cb => cb());
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

// ─── Console branding ───
console.log(
  '%c✦ Pinnacle Studios %c— Making brands impossible to ignore',
  'color: #6420D6; font-weight: bold; font-size: 14px;',
  'color: #11131F; font-size: 12px;'
);
