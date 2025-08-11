// NOOKSTRIDE GIFT SHOP - JavaScript Functionality

document.addEventListener("DOMContentLoaded", function () {
  // Parallax scrolling for hero
  let scrollY = 0;

  function updateParallax() {
    scrollY = window.scrollY;
    const heroBg = document.querySelector(".hero-bg");
    if (heroBg) {
      heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
  }

  window.addEventListener("scroll", updateParallax);

  // Fade-in animation observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  // Smooth scrolling for navigation
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // Hero buttons
  const exploreBtn = document.getElementById("explore-guides");
  const pricingBtn = document.getElementById("view-pricing");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => scrollToSection("guides"));
  }

  if (pricingBtn) {
    pricingBtn.addEventListener("click", () => scrollToSection("pricing"));
  }

  // Contact form functionality
  const contactForm = document.getElementById("contact-form");
  const modal = document.getElementById("success-modal");
  const modalOverlay = document.querySelector(".modal-overlay");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Show success modal
      showModal();

      // Reset form
      this.reset();
    });
  }

  // Modal functionality
  function showModal() {
    if (modalOverlay) {
      modalOverlay.classList.add("visible");
      document.body.style.overflow = "hidden";
    }
  }

  function hideModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove("visible");
      document.body.style.overflow = "auto";
    }
  }

  // Close modal on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        hideModal();
      }
    });
  }

  // Close modal on ESC key
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      modalOverlay &&
      modalOverlay.classList.contains("visible")
    ) {
      hideModal();
    }
  });

  // Close modal button
  const closeModalBtn = document.getElementById("close-modal");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", hideModal);
  }

  // Stagger animation delays for multiple elements
  function addStaggerDelay(elements, baseDelay = 100) {
    elements.forEach((el, index) => {
      el.style.transitionDelay = `${index * baseDelay}ms`;
    });
  }

  // Apply stagger delays to cards and other elements
  const guideCards = document.querySelectorAll(".guide-card");
  const benefitItems = document.querySelectorAll(".benefit-item");
  const pricingCards = document.querySelectorAll(".pricing-card");

  if (guideCards.length) addStaggerDelay(guideCards, 150);
  if (benefitItems.length) addStaggerDelay(benefitItems, 200);
  if (pricingCards.length) addStaggerDelay(pricingCards, 250);

  // Package button functionality
  document.querySelectorAll(".package-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const packageName = this.dataset.package;
      alert(
        `Thank you for your interest in the ${packageName}! Contact us at contact@nookstride.com to complete your purchase.`
      );
    });
  });

  // Initialize animations on page load
  setTimeout(() => {
    document.querySelectorAll(".fade-in").forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add("visible");
      }
    });
  }, 100);

  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Optimize scroll performance
  let ticking = false;

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener("scroll", () => {
    requestTick();
    ticking = false;
  });
});
