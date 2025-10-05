/**
 * Unified Application JavaScript
 * Infection Detected Blog - Optimized Version
 */

(function() {
  'use strict';

  // ==========================================
  // Theme Management Module
  // ==========================================
  const ThemeManager = {
    storageKey: 'theme',
    darkClass: 'dark-mode',
    darkAttr: 'dark',

    init() {
      const savedTheme = localStorage.getItem(this.storageKey);
      if (savedTheme === 'dark') {
        this.enableDarkMode(false);
      }
    },

    enableDarkMode(save = true) {
      document.documentElement.classList.add(this.darkClass);
      document.documentElement.setAttribute(this.darkAttr, '');
      if (save) {
        localStorage.setItem(this.storageKey, 'dark');
      }
    },

    disableDarkMode() {
      document.documentElement.classList.remove(this.darkClass);
      document.documentElement.removeAttribute(this.darkAttr);
      localStorage.removeItem(this.storageKey);
    },

    toggle() {
      if (document.documentElement.classList.contains(this.darkClass)) {
        this.disableDarkMode();
      } else {
        this.enableDarkMode();
      }
    }
  };

  // ==========================================
  // UI Controller Module
  // ==========================================
  const UIController = {
    elements: {},

    init() {
      this.cacheElements();
      this.bindEvents();
    },

    cacheElements() {
      this.elements = {
        menuToggle: document.querySelector('.hamburger'),
        menuList: document.querySelector('.main-nav'),
        searchOpenIcon: document.querySelector('.icon__search'),
        searchCloseIcon: document.querySelector('.icon__search__close'),
        searchOverlay: document.querySelector('.search__overlay'),
        searchInput: document.querySelector('.search__text'),
        search: document.querySelector('.search'),
        toggleTheme: document.querySelector('.toggle-theme'),
        btnScrollToTop: document.querySelector('.top'),
        body: document.body,
        globalWrap: document.querySelector('.global-wrap')
      };
    },

    bindEvents() {
      const { menuToggle, menuList, searchOpenIcon, searchCloseIcon, 
              searchOverlay, toggleTheme, btnScrollToTop } = this.elements;

      // Menu events
      if (menuToggle && menuList) {
        menuToggle.addEventListener('click', () => this.toggleMenu());
        
        // Close menu on ESC
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && menuList.classList.contains('is-visible')) {
            this.closeMenu();
          }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
            this.closeMenu();
          }
        });
      }

      // Search events
      if (searchOpenIcon) searchOpenIcon.addEventListener('click', () => this.openSearch());
      if (searchCloseIcon) searchCloseIcon.addEventListener('click', () => this.closeSearch());
      if (searchOverlay) searchOverlay.addEventListener('click', () => this.closeSearch());

      // Theme toggle
      if (toggleTheme) {
        toggleTheme.addEventListener('click', () => {
          ThemeManager.toggle();
          this.stopAnimation();
        });
      }

      // Scroll to top
      if (btnScrollToTop) {
        btnScrollToTop.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
            btnScrollToTop.classList.add('is-active');
          } else {
            btnScrollToTop.classList.remove('is-active');
          }
        });
      }

      // Stop animation on resize
      window.addEventListener('resize', () => this.stopAnimation());
    },

    toggleMenu() {
      const { menuToggle, menuList, body } = this.elements;
      menuToggle.classList.toggle('is-open');
      menuList.classList.toggle('is-visible');
      body.style.overflow = menuList.classList.contains('is-visible') ? 'hidden' : '';
    },

    closeMenu() {
      const { menuToggle, menuList, body } = this.elements;
      menuToggle.classList.remove('is-open');
      menuList.classList.remove('is-visible');
      body.style.overflow = '';
    },

    openSearch() {
      const { search, body, globalWrap, menuToggle, menuList, searchInput } = this.elements;
      search.classList.add('is-visible');
      body.classList.add('search-is-visible');
      globalWrap.classList.add('is-active');
      this.closeMenu();
      setTimeout(() => searchInput?.focus(), 250);
    },

    closeSearch() {
      const { search, body, globalWrap } = this.elements;
      search.classList.remove('is-visible');
      body.classList.remove('search-is-visible');
      globalWrap.classList.remove('is-active');
    },

    stopAnimation() {
      document.body.classList.add('disable-animation');
      clearTimeout(this.disableTransitionTimer);
      this.disableTransitionTimer = setTimeout(() => {
        document.body.classList.remove('disable-animation');
      }, 100);
    }
  };

  // ==========================================
  // Search Module
  // ==========================================
  const SearchModule = {
    init() {
      if (typeof SimpleJekyllSearch === 'undefined') {
        console.warn('SimpleJekyllSearch is not loaded');
        return;
      }

      try {
        SimpleJekyllSearch({
          searchInput: document.getElementById('js-search-input'),
          resultsContainer: document.getElementById('js-results-container'),
          json: '/search.json',
          searchResultTemplate: `
            <div class="search-results__item">
              <a href="{url}" class="search-results__image" style="background-image: url({image})"></a>
              <a href="{url}" class="search-results__link">
                <time class="search-results-date" datetime="{date}">{date}</time>
                <div class="search-results-title">{title}</div>
              </a>
            </div>
          `,
          noResultsText: '<h4 class="no-results">No results found</h4>',
          fuzzy: false,
          debounceTime: 300
        });
      } catch (error) {
        console.error('Search initialization failed:', error);
      }
    }
  };

  // ==========================================
  // Image Optimization Module
  // ==========================================
  const ImageOptimizer = {
    init() {
      this.setupLazyLoading();
      this.setupImageZoom();
      this.setupResponsiveVideos();
    },

    setupLazyLoading() {
      if (typeof LazyLoad === 'undefined') {
        console.warn('LazyLoad is not loaded');
        return;
      }

      try {
        new LazyLoad({
          elements_selector: '.lazy',
          threshold: 0,
          callback_loaded: (el) => {
            el.classList.add('loaded');
          }
        });
      } catch (error) {
        console.error('LazyLoad initialization failed:', error);
      }
    },

    setupImageZoom() {
      if (typeof Lightense === 'undefined') {
        console.warn('Lightense is not loaded');
        return;
      }

      try {
        Lightense('.post__content img:not(.emoji), .page__content img:not(.emoji)', {
          time: 300,
          padding: 40,
          offset: 40,
          keyboard: true,
          cubicBezier: 'cubic-bezier(.2, 0, .1, 1)',
          background: 'var(--background-color, rgba(255, 255, 255, .98))',
          zIndex: 1000000
        });
      } catch (error) {
        console.error('Lightense initialization failed:', error);
      }
    },

    setupResponsiveVideos() {
      if (typeof reframe === 'undefined') {
        console.warn('reframe is not loaded');
        return;
      }

      try {
        reframe('.post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)');
      } catch (error) {
        console.error('reframe initialization failed:', error);
      }
    }
  };

  // ==========================================
  // Performance Monitoring
  // ==========================================
  const Performance = {
    init() {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
          }, 0);
        });
      }
    }
  };

  // ==========================================
  // Application Initialization
  // ==========================================
  const App = {
    init() {
      // Initialize theme before DOM content loads
      ThemeManager.init();

      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.initModules());
      } else {
        this.initModules();
      }
    },

    initModules() {
      UIController.init();
      SearchModule.init();
      ImageOptimizer.init();
      Performance.init();
    }
  };

  // Start the application
  App.init();

})();
