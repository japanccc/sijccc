/**
 * Bootstrap Reinit for Astro View Transitions
 *
 * This script reinitializes Bootstrap components after Astro view transitions.
 * Add this to your project and include it in your layouts when using view transitions.
 */

// Run on DOMContentLoaded for first page load
document.addEventListener("DOMContentLoaded", function () {
  initBootstrapComponents();
});

// Run after each view transition
document.addEventListener("astro:page-load", function () {
  initBootstrapComponents();
});

// Run after view transition content swap
document.addEventListener("astro:after-swap", function () {
  initBootstrapComponents();
});

/**
 * Initialize all Bootstrap components
 */
function initBootstrapComponents() {
  // Check if Bootstrap is available
  if (typeof bootstrap === "undefined") {
    console.warn("Bootstrap not loaded - cannot initialize components");
    return;
  }

  // Initialize dropdowns
  const dropdowns = document.querySelectorAll(".dropdown-toggle");
  dropdowns.forEach(function (dropdown) {
    new bootstrap.Dropdown(dropdown);
  });

  // Initialize tooltips
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltips.forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip);
  });

  // Initialize popovers
  const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
  popovers.forEach(function (popover) {
    new bootstrap.Popover(popover);
  });

  // Mobile menu
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarNav = document.getElementById("navbarNav");

  if (navbarToggler && navbarNav) {
    // Remove existing listeners by cloning and replacing
    const newToggler = navbarToggler.cloneNode(true);
    navbarToggler.parentNode.replaceChild(newToggler, navbarToggler);

    // Add fresh event listener
    newToggler.addEventListener("click", function () {
      if (navbarNav.classList.contains("show")) {
        new bootstrap.Collapse(navbarNav).hide();
      } else {
        new bootstrap.Collapse(navbarNav).show();
      }
    });
  }

  // Custom theme components from original template
  initThemeSpecificComponents();
}

/**
 * Initialize theme-specific components from the original template
 */
function initThemeSpecificComponents() {
  // Sidebar menu
  if (document.querySelector(".sidebar-nav-link")) {
    const sidebarLinks = document.querySelectorAll(".sidebar-nav-link");
    sidebarLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains("submenu")) {
          e.preventDefault();
          submenu.classList.toggle("show");
        }
      });
    });
  }

  // Button animations
  const animatedButtons = document.querySelectorAll(".btn-switch-text");
  if (animatedButtons.length) {
    animatedButtons.forEach(function (btn) {
      btn.addEventListener("mouseenter", function () {
        this.classList.add("animate");
      });
      btn.addEventListener("mouseleave", function () {
        this.classList.remove("animate");
      });
    });
  }
}
