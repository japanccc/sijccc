/**
 * Main entry point for JavaScript functionality
 */

// Initialize site when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initBootstrapComponents();
  initSiteFeatures();
});

// Re-initialize after Astro view transitions
document.addEventListener("astro:page-load", function () {
  initBootstrapComponents();
});

/**
 * Initialize Bootstrap components
 */
function initBootstrapComponents() {
  // Initialize dropdowns
  const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
  if (dropdownElementList.length && typeof bootstrap !== "undefined") {
    dropdownElementList.forEach((el) => new bootstrap.Dropdown(el));
  }

  // Initialize mobile menu
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarNav = document.getElementById("navbarNav");
  if (navbarToggler && navbarNav && typeof bootstrap !== "undefined") {
    // Remove previous event listeners to prevent duplicates
    navbarToggler.replaceWith(navbarToggler.cloneNode(true));
    const newToggler = document.querySelector(".navbar-toggler");

    newToggler.addEventListener("click", function () {
      const bsCollapse = new bootstrap.Collapse(navbarNav, {
        toggle: false,
      });

      if (navbarNav.classList.contains("show")) {
        bsCollapse.hide();
      } else {
        bsCollapse.show();
      }
    });
  }
}

/**
 * Initialize other site features
 */
function initSiteFeatures() {
  // Initialize Swiper sliders
  initSliders();

  // Initialize animations
  initAnimations();

  // Initialize custom theme features
  initThemeFeatures();
}

/**
 * Initialize Swiper sliders
 */
function initSliders() {
  const swiperElements = document.querySelectorAll(".swiper");
  if (swiperElements.length && typeof Swiper !== "undefined") {
    swiperElements.forEach(function (swiperEl) {
      try {
        let options = {};
        if (swiperEl.dataset.sliderOptions) {
          options = JSON.parse(
            swiperEl.dataset.sliderOptions.replace(/'/g, '"')
          );
        }

        new Swiper(swiperEl, options);
      } catch (error) {
        console.error("Error initializing Swiper:", error);
      }
    });
  }
}

/**
 * Initialize animations
 */
function initAnimations() {
  const animeElements = document.querySelectorAll("[data-anime]");
  if (animeElements.length && typeof anime !== "undefined") {
    animeElements.forEach(function (element) {
      try {
        const options = JSON.parse(element.dataset.anime);

        let targets;
        if (options.el === "childs") {
          targets = element.children;
        } else {
          targets = element;
        }

        anime({
          targets: targets,
          ...options,
        });
      } catch (error) {
        console.error("Error initializing anime.js animation:", error);
      }
    });
  }
}

/**
 * Initialize theme-specific features
 */
function initThemeFeatures() {
  // Any other theme-specific initializations
  if (typeof $.fn.magnificPopup !== "undefined") {
    $(".popup-youtube").magnificPopup({
      type: "iframe",
    });
  }

  // Other custom initializations as needed
}

// Export functions for use in other files
export { initBootstrapComponents, initSiteFeatures };
