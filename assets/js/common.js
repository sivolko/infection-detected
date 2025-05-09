document.addEventListener("DOMContentLoaded", function() {
    'use strict';
  
    var html = document.querySelector('html'),
      globalWrap = document.querySelector('.global-wrap'),
      body = document.querySelector('body'),
      menuToggle = document.querySelector(".hamburger"),
      menuList = document.querySelector(".main-nav"),
      searchOpenIcon = document.querySelector(".icon__search"),
      searchCloseIcon = document.querySelector(".icon__search__close"),
      searchOverlay = document.querySelector(".search__overlay"),
      searchInput = document.querySelector(".search__text"),
      search = document.querySelector(".search"),
      toggleTheme = document.querySelector(".toggle-theme"),
      btnScrollToTop = document.querySelector(".top");

    let scrollPosition = 0;
  
    /* =======================================================
    // Menu + Search + Theme Switcher
    ======================================================= */
    // Menu Toggle
    if (menuToggle && menuList) {
      menuToggle.addEventListener("click", function() {
        this.classList.toggle("is-open");
        menuList.classList.toggle("is-visible");
        
        // Prevent body scroll when menu is open
        if (menuList.classList.contains("is-visible")) {
          body.style.overflow = "hidden";
        } else {
          body.style.overflow = "";
        }
      });

      // Close menu on ESC key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuList.classList.contains("is-visible")) {
          menuToggle.classList.remove("is-open");
          menuList.classList.remove("is-visible");
          body.style.overflow = "";
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
          menuToggle.classList.remove("is-open");
          menuList.classList.remove("is-visible");
          body.style.overflow = "";
        }
      });
    }

    // Search
    function searchOpen() {
      search.classList.add("is-visible");
      body.classList.add("search-is-visible");
      globalWrap.classList.add("is-active");
      menuToggle.classList.remove("is-open");
      menuList.classList.remove("is-visible");
      setTimeout(function () {
        searchInput.focus();
      }, 250);
    }

    function searchClose() {
      search.classList.remove("is-visible");
      body.classList.remove("search-is-visible");
      globalWrap.classList.remove("is-active");
    }
  
    if (searchOpenIcon) searchOpenIcon.addEventListener("click", searchOpen);
    if (searchCloseIcon) searchCloseIcon.addEventListener("click", searchClose);
    if (searchOverlay) searchOverlay.addEventListener("click", searchClose);

    // Theme Switcher
    if (toggleTheme) {
      toggleTheme.addEventListener("click", function() {
        darkMode();
      });
    }

    function darkMode() {
      if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        localStorage.removeItem("theme");
        document.documentElement.removeAttribute("dark");
      } else {
        html.classList.add('dark-mode');
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("dark", "");
      }
    }
  
  
    // =====================
    // Simple Jekyll Search
    // =====================
    SimpleJekyllSearch({
      searchInput: document.getElementById("js-search-input"),
      resultsContainer: document.getElementById("js-results-container"),
      json: "/search.json",
      searchResultTemplate: '<div class="search-results__item"><a href="{url}" class="search-results__image" style="background-image: url({image})"></a> <a href="{url}" class="search-results__link"><time class="search-results-date" datetime="{date}">{date}</time><div class="search-results-title">{title}</div></a></div>',
      noResultsText: '<h4 class="no-results">No results found</h4>',
      fuzzy: false,
      debounceTime: 300
    });
  
  
    /* ================================================================
    // Stop Animations During Window Resizing and Switching Theme Modes
    ================================================================ */
    let disableTransition;
  
    if (toggleTheme) {
      toggleTheme.addEventListener("click", () => {
        stopAnimation();
      });
  
      window.addEventListener("resize", () => {
        stopAnimation();
      });
  
      function stopAnimation() {
        document.body.classList.add("disable-animation");
        clearTimeout(disableTransition);
        disableTransition = setTimeout(() => {
          document.body.classList.remove("disable-animation");
        }, 100);
      }
    }
  
  
    /* =======================
    // Responsive Videos
    ======================= */
    reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");
  
  
    /* =======================
    // LazyLoad Images
    ======================= */
    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
    })
  
  
    /* =======================
    // Zoom Image
    ======================= */
    const lightense = document.querySelector(".page__content img, .post__content img, .gallery__image img"),
    imageLink = document.querySelectorAll(".page__content a img, .post__content a img, .gallery__image a img");
  
    if (imageLink) {
      for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
      for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
    }
  
    if (lightense) {
      Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
      padding: 60,
      offset: 30
      });
    }
  
  
    /* =======================
    // Scroll Top Button
    ======================= */
    if (btnScrollToTop) {
      btnScrollToTop.addEventListener("click", function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });

      // Show/Hide button based on scroll position
      window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
          btnScrollToTop.classList.add("is-active");
        } else {
          btnScrollToTop.classList.remove("is-active");
        }
      });
    }
  
  });