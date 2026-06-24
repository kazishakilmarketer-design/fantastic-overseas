document.addEventListener('DOMContentLoaded', () => {
  // Initialize Database state first
  if (window.FO_DB) {
    window.FO_DB.init();
  }

  // --- Dynamic Packages Rendering ---
  const renderDynamicPackages = () => {
    const pkgGrid = document.querySelector('.grid-3');
    if (!pkgGrid || !window.FO_DB) return;

    // Check if we are on the Home page or Services page
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const isServicesPage = window.location.pathname.endsWith('services.html');
    
    if (!isHomePage && !isServicesPage) return;

    const packages = window.FO_DB.getPackages();
    const currentLang = localStorage.getItem('fo_lang') || 'en';
    
    pkgGrid.innerHTML = '';

    packages.forEach(pkg => {
      const title = currentLang === 'en' ? pkg.titleEn : pkg.titleBn;
      const desc = currentLang === 'en' ? pkg.descEn : pkg.descBn;
      const price = currentLang === 'en' ? pkg.priceEn : pkg.priceBn;
      const features = currentLang === 'en' ? pkg.featuresEn : pkg.featuresBn;
      const labelText = currentLang === 'en' ? 'Learn More' : 'আরও জানুন';
      const contactText = currentLang === 'en' ? 'Contact via WhatsApp' : 'হোয়াটসঅ্যাপে যোগাযোগ করুন';

      const card = document.createElement('div');
      card.className = 'service-card';

      let iconSvg = '';
      if (pkg.id === 'pkg-1') {
        iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>`;
      } else if (pkg.id === 'pkg-2') {
        iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`;
      } else {
        iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`;
      }

      let innerContent = `
        <div class="service-icon-wrapper">${iconSvg}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
      `;

      if (isServicesPage) {
        innerContent += `<div class="service-bullets">`;
        features.forEach(f => {
          innerContent += `
            <div class="service-bullet-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>
              <span>${f}</span>
            </div>
          `;
        });
        innerContent += `</div>`;
        innerContent += `
          <div class="service-price">${price} <span>/ ${currentLang === 'en' ? 'Processing fee' : 'প্রসেসিং ফি'}</span></div>
          <a href="https://wa.me/8801747356707?text=Hi%20Fantastic%20Overseas,%20I'm%20interested%20in%20${encodeURIComponent(pkg.titleEn)}" target="_blank" class="btn btn-accent btn-sm" style="margin-top: auto;">${contactText}</a>
        `;
      } else {
        innerContent += `
          <div class="service-price">${price} <span>/ ${currentLang === 'en' ? 'Processing fee starts' : 'প্রসেসিং ফি শুরু'}</span></div>
          <a href="services.html" class="btn btn-primary btn-sm">${labelText}</a>
        `;
      }

      card.innerHTML = innerContent;
      pkgGrid.appendChild(card);
    });
  };

  // --- Dynamic About Content Rendering ---
  const renderAboutContent = () => {
    const aboutTitle = document.querySelector('.about-split h2.section-title');
    const aboutDesc = document.querySelectorAll('.about-split p');
    if (!window.FO_DB) return;
    const currentLang = localStorage.getItem('fo_lang') || 'en';
    const about = window.FO_DB.getAbout();
    if (aboutTitle && about) {
      aboutTitle.innerText = currentLang === 'en' ? about.titleEn : about.titleBn;
    }
    if (aboutDesc.length >= 2 && about) {
      aboutDesc[0].innerText = currentLang === 'en' ? about.desc1En : about.desc1Bn;
      aboutDesc[1].innerText = currentLang === 'en' ? about.desc2En : about.desc2Bn;
    }
  };

  // --- Dynamic Messages/Leadership Content Rendering ---
  const renderMessagesContent = () => {
    const proprietorBlockquote = document.querySelector('#proprietor blockquote');
    const proprietorCite = document.querySelector('#proprietor cite');
    const proprietorSpan = document.querySelector('#proprietor span');
    const proprietorImg = document.querySelector('#proprietor img');

    const directorBlockquote = document.querySelector('#director blockquote');
    const directorCite = document.querySelector('#director cite');
    const directorSpan = document.querySelector('#director span');
    const directorImg = document.querySelector('#director img');

    if (!window.FO_DB) return;
    const currentLang = localStorage.getItem('fo_lang') || 'en';
    const msg = window.FO_DB.getMessages();

    if (msg) {
      if (proprietorBlockquote) {
        proprietorBlockquote.innerText = `"${currentLang === 'en' ? msg.proprietorQuoteEn : msg.proprietorQuoteBn}"`;
      }
      if (proprietorCite) proprietorCite.innerText = msg.proprietorName;
      if (proprietorSpan) proprietorSpan.innerText = currentLang === 'en' ? msg.proprietorRoleEn : msg.proprietorRoleBn;
      if (proprietorImg) proprietorImg.src = msg.proprietorPhoto;

      if (directorBlockquote) {
        directorBlockquote.innerText = `"${currentLang === 'en' ? msg.directorQuoteEn : msg.directorQuoteBn}"`;
      }
      if (directorCite) directorCite.innerText = msg.directorName;
      if (directorSpan) directorSpan.innerText = currentLang === 'en' ? msg.directorRoleEn : msg.directorRoleBn;
      if (directorImg) directorImg.src = msg.directorPhoto;
    }
  };

  // --- Dynamic Gallery Content Rendering ---
  const renderGalleryGrid = () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid || !window.FO_DB) return;

    const gallery = window.FO_DB.getGallery();
    
    // Check if we are on the Home page (which only previews first 4 items)
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const itemsToRender = isHomePage ? gallery.slice(0, 4) : gallery;

    galleryGrid.innerHTML = '';

    itemsToRender.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.setAttribute('data-id', item.id);
      div.innerHTML = `
        <img src="${item.src}" alt="${item.alt}">
        <div class="gallery-overlay">
          <div class="gallery-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width:20px; height:20px;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
      `;
      galleryGrid.appendChild(div);
    });

    // Re-initialize lightbox since gallery nodes were populated dynamically
    initLightboxHooks();
  };

  // --- Dynamic Translation Logic ---
  const applyLanguage = (lang) => {
    localStorage.setItem('fo_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Apply translations on elements with data attributes
    document.querySelectorAll('[data-en]').forEach(el => {
      const translation = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-bn');
      if (translation !== null) {
        el.textContent = translation;
      }
    });

    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      const placeholder = lang === 'en' ? el.getAttribute('data-en-placeholder') : el.getAttribute('data-bn-placeholder');
      if (placeholder !== null) {
        el.setAttribute('placeholder', placeholder);
      }
    });

    // Update Language Toggle button label
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
      langBtn.textContent = lang === 'en' ? 'বাংলা' : 'English';
    }

    // Re-render components in current language
    renderDynamicPackages();
    renderAboutContent();
    renderMessagesContent();
    renderGalleryGrid();
  };

  // Bind translation switcher button
  const headerContainer = document.querySelector('.navbar');
  if (headerContainer && !document.querySelector('.lang-btn')) {
    const langBtn = document.createElement('button');
    langBtn.className = 'lang-btn';
    langBtn.textContent = 'বাংলা';
    
    // Insert before mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    headerContainer.insertBefore(langBtn, hamburger);

    langBtn.addEventListener('click', () => {
      const nextLang = localStorage.getItem('fo_lang') === 'bn' ? 'en' : 'bn';
      applyLanguage(nextLang);
    });
  }

  // Load language preference
  const savedLang = localStorage.getItem('fo_lang') || 'en';
  applyLanguage(savedLang);


  // --- Sticky Header ---
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Mobile Navigation Menu ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- FAQ Accordions ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(i => {
          if (i !== item) i.classList.remove('active');
        });
        
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // --- Tabs System ---
  const tabContainer = document.querySelector('.tab-container');
  if (tabContainer) {
    const tabButtons = tabContainer.querySelectorAll('.tab-btn');
    const tabPanes = tabContainer.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        const targetPane = tabContainer.querySelector(`#${targetId}`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // --- Lightbox Gallery System Init Helper ---
  function initLightboxHooks() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;

    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content-wrapper">
          <button class="lightbox-close" aria-label="Close Gallery">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img class="lightbox-img" src="" alt="Gallery Image">
          <button class="lightbox-nav lightbox-prev" aria-label="Previous Image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 24px; height: 24px;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button class="lightbox-nav lightbox-next" aria-label="Next Image">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 24px; height: 24px;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      `;
      document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    let currentIndex = 0;
    
    const images = Array.from(galleryItems).map(item => {
      const img = item.querySelector('img');
      return {
        src: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') || 'Gallery Image' : 'Gallery Image'
      };
    });

    const openLightbox = (index) => {
      currentIndex = index;
      updateLightboxImage();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    const updateLightboxImage = () => {
      if (images[currentIndex]) {
        lightboxImg.setAttribute('src', images[currentIndex].src);
        lightboxImg.setAttribute('alt', images[currentIndex].alt);
      }
    };

    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateLightboxImage();
    };

    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightboxImage();
    };

    // Re-bind click event to gallery items
    galleryItems.forEach((item, index) => {
      // Avoid adding duplicate event listeners
      const oldElement = item;
      const newElement = oldElement.cloneNode(true);
      if (oldElement.parentNode) {
        oldElement.parentNode.replaceChild(newElement, oldElement);
      }

      newElement.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
      });
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.onclick = (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    };

    nextBtn.onclick = (e) => {
      e.stopPropagation();
      nextImage();
    };
    
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      prevImage();
    };

    document.onkeydown = (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
  }

  // --- Statistics Counters Animation ---
  const stats = document.querySelectorAll('.stat-number');
  if (stats.length > 0) {
    const observerOptions = {
      root: null,
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute('data-count'), 10);
          let currentCount = 0;
          const duration = 1500;
          const stepTime = Math.max(Math.floor(duration / countTo), 15);
          
          const counter = setInterval(() => {
            currentCount += Math.ceil(countTo / 100);
            if (currentCount >= countTo) {
              target.innerText = countTo + (target.innerText.includes('+') ? '+' : '');
              clearInterval(counter);
            } else {
              target.innerText = currentCount + (target.innerText.includes('+') ? '+' : '');
            }
          }, stepTime);
          
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
  }
});
