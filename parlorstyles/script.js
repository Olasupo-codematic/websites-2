// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeAnimations();
  initializeContactForm();
});

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Handle Buy Now button clicks
function handleBuyNow(productName) {
  // For demo purposes, scroll to contact section
  // In a real implementation, this would handle the purchase process
  scrollToSection("contact");

  // Optional: Pre-fill the contact form with product interest
  const messageField = document.getElementById("message");
  if (messageField) {
    messageField.value = `Hi! I'm interested in purchasing "${productName}". Could you please provide more information about the purchase process?`;
    messageField.focus();
  }
}

// Initialize all GSAP animations
function initializeAnimations() {
  // Hero section animations
  const heroTl = gsap.timeline();

  heroTl
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
      ".btn-hero",
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    );

  // Parallax effect for hero background
  gsap.to(".hero-background", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Section headers animation
  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.utils.toArray(".section-subtitle").forEach((subtitle) => {
    gsap.to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: subtitle,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Benefits cards staggered animation
  gsap.to(".benefit-card", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".benefits-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Why Choose Us section animations
  gsap.to(".feature-item", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".why-choose-features",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".feature-img", {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".feature-img",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Product cards animation
  gsap.to(".product-card", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".products-grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Contact form animation
  gsap.to(".contact-form-container", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-form-container",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  // Footer fade-in
  gsap.to(".footer-section", {
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });

  // Add hover animations for interactive elements
  addHoverAnimations();
}

// Add hover animations for interactive elements
function addHoverAnimations() {
  // Button hover effects
  document.querySelectorAll(".btn-hero, .btn-secondary").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Card hover effects
  document.querySelectorAll(".benefit-card, .product-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        boxShadow: "0 20px 40px -10px rgba(212, 106, 106, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

// Initialize contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate form submission
      setTimeout(() => {
        showSuccessModal();
        contactForm.reset();
      }, 500);
    });
  }
}

// Show success modal with GSAP animation
function showSuccessModal() {
  const modal = document.getElementById("successModal");

  if (modal) {
    modal.classList.add("active");

    // Animate modal entrance
    gsap.fromTo(
      ".modal-content",
      {
        scale: 0.7,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      }
    );

    // Animate modal icon
    gsap.fromTo(
      ".modal-icon",
      {
        scale: 0,
        rotation: -180,
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.2,
      }
    );
  }
}

// Close modal function
function closeModal() {
  const modal = document.getElementById("successModal");

  if (modal) {
    // Animate modal exit
    gsap.to(".modal-content", {
      scale: 0.7,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        modal.classList.remove("active");
      },
    });
  }
}

// Close modal when clicking outside
document.addEventListener("click", function (e) {
  const modal = document.getElementById("successModal");
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Smooth scrolling for footer links
document.querySelectorAll(".footer-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      scrollToSection(targetId);
    }
  });
});

// Add scroll progress indicator (optional enhancement)
function addScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #d46a6a, #f4b860);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrolled =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    progressBar.style.width = scrolled + "%";
  });
}

// Initialize scroll progress indicator
addScrollProgress();

// Lazy loading for images (performance optimization)
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });
}

// Initialize lazy loading when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeLazyLoading);
} else {
  initializeLazyLoading();
}
