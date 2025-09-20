// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check for saved theme preference or use system preference
const currentTheme =
  localStorage.getItem("theme") ||
  (prefersDarkScheme.matches ? "dark" : "light");

// Set initial theme
document.documentElement.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIcon.className = "fas fa-sun";
  } else {
    themeIcon.className = "fas fa-moon";
  }
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Gallery functionality
const galleryTabs = document.querySelectorAll(".gallery-tab");
const galleryGrids = document.querySelectorAll(".gallery-grid");

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab;

    // Remove active class from all tabs and grids
    galleryTabs.forEach((t) => t.classList.remove("active"));
    galleryGrids.forEach((g) => g.classList.remove("active"));

    // Add active class to clicked tab and corresponding grid
    tab.classList.add("active");
    document.getElementById(tabName).classList.add("active");
  });
});

// Lightbox functionality
function openLightbox(itemId) {
  const lightbox = document.getElementById("lightbox");
  const lightboxItem = document.getElementById("lightbox-item");

  // Create placeholder content for images
  const imageContent = {
    img1: {
      icon: "fas fa-shield-alt",
      title: "Nano-coating Application Process",
      desc: "Professional application of invisible protection",
    },
    img2: {
      icon: "fas fa-mobile-alt",
      title: "Before & After Protection",
      desc: "See the difference our coating makes",
    },
    img3: {
      icon: "fas fa-tools",
      title: "Professional Repairs",
      desc: "Expert repair services for all devices",
    },
    img4: {
      icon: "fas fa-droplet",
      title: "Water Resistance Test",
      desc: "Demonstrating superior water protection",
    },
    img5: {
      icon: "fas fa-industry",
      title: "Nano-coating Machine",
      desc: "State-of-the-art coating equipment",
    },
    img6: {
      icon: "fas fa-certificate",
      title: "Quality Results",
      desc: "Premium protection guaranteed",
    },
  };

  if (imageContent[itemId]) {
    const content = imageContent[itemId];
    lightboxItem.innerHTML = `
                    <div class="video-placeholder">
                        <i class="${content.icon}"></i>
                        <h3 style="color: var(--text-primary); margin-bottom: 1rem;">${content.title}</h3>
                        <p style="color: var(--text-secondary);">${content.desc}</p>
                        <p style="color: var(--accent); margin-top: 2rem; font-size: 0.9rem;">
                            <i class="fas fa-info-circle"></i> Upload your images to replace this placeholder
                        </p>
                    </div>
                `;
  }

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function playVideo(videoId) {
  const lightbox = document.getElementById("lightbox");
  const lightboxItem = document.getElementById("lightbox-item");

  // Create placeholder content for videos
  const videoContent = {
    vid1: {
      title: "Nano-coating Process Demo",
      duration: "2:30",
      desc: "Step-by-step coating application",
    },
    vid2: {
      title: "Water Test Results",
      duration: "1:45",
      desc: "Real-time water resistance testing",
    },
    vid3: {
      title: "Customer Reviews",
      duration: "3:15",
      desc: "Hear from satisfied customers",
    },
    vid4: {
      title: "Repair Process",
      duration: "4:20",
      desc: "Professional device repair walkthrough",
    },
  };

  if (videoContent[videoId]) {
    const content = videoContent[videoId];
    lightboxItem.innerHTML = `
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <h3 style="color: var(--text-primary); margin-bottom: 1rem;">${content.title}</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">${content.desc}</p>
                        <div style="background: var(--primary-gradient); color: white; padding: 0.5rem 1rem; border-radius: 20px; display: inline-block; margin-bottom: 2rem;">
                            <i class="fas fa-clock"></i> ${content.duration}
                        </div>
                        <p style="color: var(--accent); font-size: 0.9rem;">
                            <i class="fas fa-info-circle"></i> Upload your videos to replace this placeholder
                        </p>
                    </div>
                `;
  }

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close lightbox on background click
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});

// Close lightbox on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Back to top functionality
const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Show/hide back to top button based on scroll position
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.style.background =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "rgba(10, 14, 26, 0.95)"
        : "rgba(240, 242, 245, 0.95)";
    backToTopButton.classList.add("visible");
  } else {
    header.style.background =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "rgba(10, 14, 26, 0.9)"
        : "rgba(240, 242, 245, 0.9)";
    backToTopButton.classList.remove("visible");
  }
});

// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitText = document.getElementById("submitText");
  const submitLoader = document.getElementById("submitLoader");

  // Show loading state
  submitText.style.display = "none";
  submitLoader.style.display = "block";

  // Simulate form submission (replace with actual form submission code)
  setTimeout(() => {
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();

    // Hide loading state
    submitText.style.display = "block";
    submitLoader.style.display = "none";
  }, 1500);
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards
document
  .querySelectorAll(
    ".service-card, .product-card, .contact-item, .gallery-item"
  )
  .forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
