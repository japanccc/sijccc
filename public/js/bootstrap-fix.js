/**
 * Bootstrap Component Fixer
 * This script ensures Bootstrap components are properly initialized
 * even when the page loads asynchronously or through Astro's view transitions
 */

(function () {
  // Function to initialize all Bootstrap components
  function initializeBootstrapComponents() {
    // Check if Bootstrap is loaded
    if (typeof bootstrap === "undefined") {
      console.warn("Bootstrap not found. Components will not be initialized.");
      return;
    }

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    // Initialize dropdowns
    var dropdownElementList = [].slice.call(
      document.querySelectorAll(".dropdown-toggle")
    );
    dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });

    // Initialize collapses
    var collapseElementList = [].slice.call(
      document.querySelectorAll(".collapse")
    );
    collapseElementList.map(function (collapseEl) {
      return new bootstrap.Collapse(collapseEl, {
        toggle: false,
      });
    });

    // Handle navbar toggler
    var navbarTogglers = document.querySelectorAll(".navbar-toggler");
    navbarTogglers.forEach(function (toggler) {
      toggler.addEventListener("click", function () {
        var target = document.querySelector(
          this.getAttribute("data-bs-target")
        );
        if (target) {
          if (target.classList.contains("show")) {
            new bootstrap.Collapse(target).hide();
          } else {
            new bootstrap.Collapse(target).show();
          }
        }
      });
    });
  }

  // Run on initial page load
  document.addEventListener("DOMContentLoaded", initializeBootstrapComponents);

  // Run when content changes (for Astro view transitions)
  document.addEventListener("astro:page-load", initializeBootstrapComponents);
  document.addEventListener("astro:after-swap", initializeBootstrapComponents);

  // Expose the function globally for manual initialization
  window.initBootstrapComponents = initializeBootstrapComponents;
})();
