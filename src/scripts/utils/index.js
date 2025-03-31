// src/scripts/utils/index.js
// Utility functions for JavaScript functionality

/**
 * Initialize base functionality that should run on all pages
 */
export function initializeBase() {
  // Common functionality like mobile menu toggle
  document.addEventListener("click", (event) => {
    if (event.target.closest(".navbar-toggler")) {
      document.documentElement.classList.toggle("show-menu");
      document.body.classList.toggle("show-menu");
    }
  });

  // Scroll to top functionality
  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Initialize dropdown toggles
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  if (dropdownToggles.length) {
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const parent = toggle.closest(".dropdown");
        if (parent) {
          parent.classList.toggle("show");
          const dropdownMenu = parent.querySelector(".dropdown-menu");
          if (dropdownMenu) {
            dropdownMenu.classList.toggle("show");
          }
        }
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown.show").forEach((dropdown) => {
          dropdown.classList.remove("show");
          const dropdownMenu = dropdown.querySelector(".dropdown-menu");
          if (dropdownMenu) {
            dropdownMenu.classList.remove("show");
          }
        });
      }
    });
  }
}

/**
 * Initialize Swiper sliders
 */
export function initializeSwiper() {
  if (typeof Swiper === "undefined") {
    console.warn("Swiper not loaded");
    return;
  }

  // Banner slider initialization
  const bannerSliders = document.querySelectorAll(".banner-slider");
  if (bannerSliders.length) {
    bannerSliders.forEach((slider) => {
      const options = slider.dataset.sliderOptions
        ? JSON.parse(slider.dataset.sliderOptions.replace(/'/g, '"'))
        : {};

      const swiper = new Swiper(slider, {
        modules: [
          Swiper.Navigation,
          Swiper.Pagination,
          Swiper.Autoplay,
          Swiper.EffectFade,
          Swiper.Keyboard,
        ],
        ...options,
      });

      // Handle pagination progress if needed
      if (slider.dataset.swiperNumberPaginationProgress === "true") {
        const progressEl = document.querySelector(".swiper-progress");
        const prevEl = document.querySelector(".number-prev");
        const nextEl = document.querySelector(".number-next");

        if (progressEl && prevEl && nextEl) {
          prevEl.textContent = `01`;
          nextEl.textContent = `0${swiper.slides.length}`;

          swiper.on("slideChange", () => {
            const progress =
              ((swiper.realIndex + 1) / swiper.slides.length) * 100;
            progressEl.style.width = `${progress}%`;
          });
        }
      }
    });
  }

  // Hero slider initialization
  const heroSliders = document.querySelectorAll(".hero-slider");
  if (heroSliders.length) {
    heroSliders.forEach((slider) => {
      new Swiper(slider, {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: slider.querySelector(".swiper-pagination"),
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      });
    });
  }

  // Testimonial slider initialization
  const testimonialSliders = document.querySelectorAll(".testimonial-slider");
  if (testimonialSliders.length) {
    testimonialSliders.forEach((slider) => {
      new Swiper(slider, {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: slider.querySelector(".swiper-button-next"),
          prevEl: slider.querySelector(".swiper-button-prev"),
        },
        pagination: {
          el: slider.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });
    });
  }
}

/**
 * Initialize animation effects
 */
export function initializeAnimations() {
  if (typeof anime === "undefined") {
    console.warn("Anime.js not loaded");
    return;
  }

  // Process data-anime elements
  const animeElements = document.querySelectorAll("[data-anime]");
  animeElements.forEach((element) => {
    try {
      const options = JSON.parse(element.getAttribute("data-anime"));

      // Apply animation when element appears in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              !element.classList.contains("animated")
            ) {
              element.classList.add("animated");

              if (options.el === "childs") {
                anime({
                  targets: element.children,
                  ...options,
                  delay: anime.stagger(options.staggervalue || 0),
                });
              } else {
                anime({
                  targets: element,
                  ...options,
                });
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(element);
    } catch (error) {
      console.error("Error parsing anime options for element:", element, error);
    }
  });

  // Process fancy text elements
  const fancyTextElements = document.querySelectorAll("[data-fancy-text]");
  if (fancyTextElements.length) {
    fancyTextElements.forEach((element) => {
      try {
        const options = JSON.parse(element.getAttribute("data-fancy-text"));
        if (!options.string) return;

        // Create wrapper for the text
        const textWrapper = document.createElement("span");
        textWrapper.className = "fancy-text-wrapper";
        element.appendChild(textWrapper);

        // Split text into characters
        const text = options.string[0];
        const chars = text.split("");

        // Create spans for each character
        chars.forEach((char, index) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.opacity = "0";
          span.style.transform = `translateY(${
            options.translateY ? options.translateY[0] : 0
          }px)`;
          if (options.filter) {
            span.style.filter = options.filter[0];
          }
          textWrapper.appendChild(span);

          // Animate each character
          setTimeout(() => {
            anime({
              targets: span,
              opacity: options.opacity ? options.opacity[1] : 1,
              translateY: options.translateY ? options.translateY[1] : 0,
              filter: options.filter ? options.filter[1] : "none",
              duration: options.duration || 500,
              easing: options.easing || "easeOutQuad",
            });
          }, (options.delay || 0) + index * (options.speed || 30));
        });
      } catch (error) {
        console.error(
          "Error parsing fancy text options for element:",
          element,
          error
        );
      }
    });
  }
}

/**
 * Initialize isotope filtering
 */
export function initializeIsotope() {
  if (typeof Isotope === "undefined") {
    console.warn("Isotope not loaded");
    return;
  }

  // Portfolio filtering
  const portfolioGrids = document.querySelectorAll(".portfolio-wrapper");

  portfolioGrids.forEach((grid) => {
    // Initialize isotope after images are loaded
    const imagesLoaded = () => {
      return new Promise((resolve) => {
        const images = grid.querySelectorAll("img");
        if (images.length === 0) {
          resolve();
          return;
        }

        let loadedCount = 0;
        const checkAllLoaded = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            resolve();
          }
        };

        images.forEach((img) => {
          if (img.complete) {
            checkAllLoaded();
          } else {
            img.addEventListener("load", checkAllLoaded);
            img.addEventListener("error", checkAllLoaded);
          }
        });
      });
    };

    imagesLoaded().then(() => {
      grid.classList.remove("grid-loading");

      const iso = new Isotope(grid, {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer",
        },
      });

      // Setup filter buttons
      const filterBtns = grid
        .closest("section")
        ?.querySelectorAll(".portfolio-filter li a");
      if (filterBtns) {
        filterBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from all buttons
            filterBtns.forEach((b) =>
              b.parentElement.classList.remove("active")
            );

            // Add active class to clicked button
            btn.parentElement.classList.add("active");

            // Apply filter
            const filterValue = btn.getAttribute("data-filter");
            iso.arrange({
              filter: filterValue,
            });
          });
        });
      }
    });
  });
}

/**
 * Initialize counter animations
 */
export function initializeCounters() {
  // Vertical counters
  const verticalCounters = document.querySelectorAll(".vertical-counter");

  if (verticalCounters.length) {
    verticalCounters.forEach((counter) => {
      const value = parseInt(counter.getAttribute("data-to") || "0");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              !counter.classList.contains("counted")
            ) {
              counter.classList.add("counted");

              // Create counter display
              counter.innerHTML = "";
              const valueStr = value.toString();

              for (let i = 0; i < valueStr.length; i++) {
                const digit = parseInt(valueStr[i]);
                const digitWrapper = document.createElement("div");
                digitWrapper.className = "vertical-counter-digit";

                const digitList = document.createElement("ul");

                // Create list of numbers 0-9
                for (let j = 0; j <= 9; j++) {
                  const li = document.createElement("li");
                  li.textContent = j.toString();
                  digitList.appendChild(li);
                }

                digitWrapper.appendChild(digitList);
                counter.appendChild(digitWrapper);

                // Animate to the target digit
                if (typeof anime !== "undefined") {
                  anime({
                    targets: digitList,
                    translateY: `-${digit * 100}%`,
                    duration: 2000,
                    easing: "easeOutExpo",
                    delay: i * 100,
                  });
                }
              }

              // Add the + sign if specified
              const suffix = counter.getAttribute("data-text");
              if (suffix) {
                const suffixSpan = document.createElement("span");
                suffixSpan.textContent = suffix;
                counter.appendChild(suffixSpan);
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(counter);
    });
  }

  // Regular counters
  const counters = document.querySelectorAll(".counter:not(.vertical-counter)");
  if (counters.length) {
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-to") || "0");
      const duration = parseInt(counter.getAttribute("data-speed") || "2000");
      let currentCount = 0;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              !counter.classList.contains("counted")
            ) {
              counter.classList.add("counted");

              const increment = target / (duration / 16); // 16ms is roughly 60fps
              const suffix = counter.getAttribute("data-text") || "";

              const updateCounter = () => {
                currentCount += increment;
                if (currentCount >= target) {
                  counter.textContent = target + suffix;
                  return;
                }

                counter.textContent = Math.round(currentCount) + suffix;
                requestAnimationFrame(updateCounter);
              };

              requestAnimationFrame(updateCounter);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(counter);
    });
  }
}

/**
 * Set overlap section position
 */
export function setOverlapPosition() {
  // Top overlap sections
  const overlapSections = document.querySelectorAll(
    ".overlap-section, .overlap-section-one-fourth, .overlap-section-three-fourth"
  );

  if (overlapSections.length) {
    overlapSections.forEach((section) => {
      const closestSection =
        section.closest("section") || section.closest("footer");
      if (!closestSection) return;

      const sectionPaddingTop = parseInt(
        window.getComputedStyle(closestSection).paddingTop
      );
      const areaHeight = section.offsetHeight;
      let overlayTop;

      if (section.classList.contains("overlap-section-one-fourth")) {
        overlayTop = areaHeight / 4 - (areaHeight + sectionPaddingTop);
      } else if (section.classList.contains("overlap-section-three-fourth")) {
        overlayTop = (areaHeight * 3) / 4 - (areaHeight + sectionPaddingTop);
      } else {
        overlayTop = areaHeight / 2 - (areaHeight + sectionPaddingTop);
      }

      section.style.marginTop = `${overlayTop}px`;

      const parentSection = closestSection.previousElementSibling;
      if (parentSection?.classList.contains("overlap-height")) {
        const overlapGap = parentSection.querySelector(".overlap-gap-section");
        if (overlapGap) {
          const gapSectionHeight =
            overlapGap.offsetHeight +
            (Math.abs(overlayTop) - sectionPaddingTop);
          parentSection.style.height = `${gapSectionHeight}px`;
        }
      }
    });
  }
}

/**
 * Initialize parallax effects
 */
export function initializeParallax() {
  if (typeof jarallax === "undefined") {
    console.warn("Jarallax/Parallax library not loaded");
    return;
  }

  // Initialize jarallax for elements with data-parallax attribute
  const parallaxElements = document.querySelectorAll("[data-parallax]");
  if (parallaxElements.length) {
    parallaxElements.forEach((element) => {
      jarallax(element, {
        speed: parseFloat(element.getAttribute("data-parallax-speed") || 0.5),
        imgPosition:
          element.getAttribute("data-parallax-position") || "center center",
      });
    });
  }

  // Initialize skrollr for elements with data-bottom-top or data-top-bottom attributes
  if (typeof skrollr !== "undefined") {
    const hasSkrollrElements = document.querySelector(
      "[data-bottom-top], [data-top-bottom]"
    );
    if (hasSkrollrElements) {
      skrollr.init({
        forceHeight: false,
        smoothScrolling: true,
      });
    }
  }
}

/**
 * Initialize particles background
 */
export function initializeParticles() {
  if (typeof particlesJS === "undefined") {
    console.warn("Particles.js not loaded");
    return;
  }

  const particleElements = document.querySelectorAll("[data-particle]");
  if (particleElements.length) {
    particleElements.forEach((element) => {
      const id = element.id;
      if (!id) {
        console.warn("Particle element must have an ID", element);
        return;
      }

      try {
        const options = element.getAttribute("data-particle-options");
        if (options) {
          const config = JSON.parse(options);
          particlesJS(id, config);
        } else {
          // Default particles configuration
          particlesJS(id, {
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: false,
              },
              size: {
                value: 3,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
            },
            retina_detect: true,
          });
        }
      } catch (error) {
        console.error(
          "Error initializing particles for element:",
          element,
          error
        );
      }
    });
  }
}

/**
 * Initialize Atropos 3D effect
 */
export function initializeAtropos() {
  if (typeof Atropos === "undefined") {
    console.warn("Atropos library not loaded");
    return;
  }

  const atroposElements = document.querySelectorAll("[data-atropos]");
  if (atroposElements.length) {
    atroposElements.forEach((element) => {
      Atropos({
        el: element,
        activeOffset: 40,
        shadowScale: 1.05,
        onEnter() {
          element.classList.add("atropos-active");
        },
        onLeave() {
          element.classList.remove("atropos-active");
        },
      });
    });
  }
}
