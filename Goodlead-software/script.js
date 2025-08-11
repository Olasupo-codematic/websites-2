// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeAnimations();
  initializeNavigation();
  initializeForm();
  initializeScrollEffects();
});

// GSAP Animations
function initializeAnimations() {
  // Set initial states and animate from there
  gsap.set(".hero-title", { opacity: 0, y: 30 });
  gsap.set(".hero-subtitle", { opacity: 0, y: 30 });
  gsap.set(".btn-accent", { opacity: 0, y: 30 });

  // Hero animations
  gsap
    .timeline()
    .to(".hero-title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
    .to(
      ".hero-subtitle",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .to(
      ".btn-accent",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    );

  // Services animation
  gsap.set(".service-card", { opacity: 0, y: 50 });
  gsap.to(".service-card", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Projects animation
  gsap.set(".project-card", { opacity: 0, y: 50 });
  gsap.to(".project-card", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".projects-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Pricing cards animation
  gsap.set(".pricing-card", { opacity: 0, scale: 0.9 });
  gsap.to(".pricing-card", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".pricing-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Contact section animations
  gsap.set(".contact-info", { opacity: 0, x: -50 });
  gsap.set(".contact-form", { opacity: 0, x: 50 });

  gsap.to(".contact-info", {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-content",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".contact-form", {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-content",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // What We Offer animations
  gsap.set(".offer-video", { opacity: 0, x: -50 });
  gsap.set(".offer-text", { opacity: 0, x: 50 });

  gsap.to(".offer-video", {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".offer-content",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".offer-text", {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".offer-content",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Footer animation
  gsap.set(".footer", { opacity: 0, y: 30 });
  gsap.to(".footer", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  // Parallax effect for hero background
  gsap.to(".hero-bg", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

// Navigation functionality
function initializeNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Add scrolled class to navbar on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Get Started buttons
  const getStartedButtons = document.querySelectorAll('a[href="#contact"]');
  getStartedButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const contactSection = document.querySelector("#contact");

      if (contactSection) {
        const headerOffset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Form handling
function initializeForm() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const projectDetails = formData.get("projectDetails");

    // Validate form
    if (!name || !email || !projectDetails) {
      alert("Please fill in all required fields.");
      return;
    }

    // Show success modal with GSAP animation
    showModal();

    // Reset form
    form.reset();
  });
}

// Modal functions
function showModal() {
  const modal = document.getElementById("successModal");
  modal.style.display = "flex";

  gsap
    .timeline()
    .to(modal, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    })
    .to(
      ".modal-content",
      {
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      },
      "-=0.1"
    );
}

function closeModal() {
  const modal = document.getElementById("successModal");

  gsap
    .timeline()
    .to(".modal-content", {
      scale: 0.7,
      duration: 0.3,
      ease: "power2.in",
    })
    .to(
      modal,
      {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          modal.style.display = "none";
        },
      },
      "-=0.1"
    );
}

// Close modal when clicking outside or pressing ESC
document.addEventListener("click", function (e) {
  const modal = document.getElementById("successModal");
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modal = document.getElementById("successModal");
    if (modal.style.display === "flex") {
      closeModal();
    }
  }
});

// Additional scroll effects
function initializeScrollEffects() {
  // Section fade-ins
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    gsap.from(section.querySelector(".section-header"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true,
      },
    });
  });

  // Button hover effects enhancement
  const buttons = document.querySelectorAll(
    ".btn-primary, .btn-accent, .btn-secondary"
  );

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", function () {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Card hover effects
  const cards = document.querySelectorAll(
    ".service-card, .project-card, .pricing-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      gsap.to(this, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", function () {
      gsap.to(this, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

// Smooth reveal on scroll for better performance
function createScrollReveal(selector, options = {}) {
  const defaultOptions = {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
  };

  const finalOptions = { ...defaultOptions, ...options };

  gsap.from(selector, {
    ...finalOptions,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      once: true,
    },
  });
}

// Initialize scroll reveals for various elements
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    createScrollReveal(".contact-item", { stagger: 0.1 });
    createScrollReveal(".footer-section", { stagger: 0.2 });
  }, 100);
});
