/**
 * Adnan Al Ramadani Trading - Animations, FAQ & Lightbox
 * Muscat, Sultanate of Oman
 */

(function () {
  'use strict';

  // 1. FAQ Accordion Logic
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!question || !answer) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close other items for neat single-open behavior
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherAns = otherItem.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });

    // Re-adjust heights when language changes
    window.addEventListener('adnanLanguageChanged', () => {
      document.querySelectorAll('.faq-item.active .faq-answer').forEach(ans => {
        ans.style.maxHeight = ans.scrollHeight + 'px';
      });
    });
  }

  // 2. Project Gallery Filter & Lightbox
  function initGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightboxModal');

    // Filter Logic
    if (filterBtns.length && galleryItems.length) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const filterVal = btn.getAttribute('data-filter');

          galleryItems.forEach(item => {
            const itemCat = item.getAttribute('data-category');
            if (filterVal === 'all' || itemCat === filterVal) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, 10);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.95)';
              setTimeout(() => {
                item.style.display = 'none';
              }, 250);
            }
          });
        });
      });
    }

    // Lightbox Logic
    if (lightbox && galleryItems.length) {
      const lightboxImg = lightbox.querySelector('.lightbox-img');
      const lightboxCaption = lightbox.querySelector('.lightbox-caption');
      const closeBtn = lightbox.querySelector('.lightbox-close');

      function openLightbox(item) {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-title');

        if (img && lightboxImg) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
        }
        if (title && lightboxCaption) {
          lightboxCaption.textContent = title.textContent;
        }

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }

      galleryItems.forEach(item => {
        item.addEventListener('click', () => openLightbox(item));
      });

      if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
          closeLightbox();
        }
      });
    }
  }

  // 3. Scroll Reveal via IntersectionObserver
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    const revealElements = document.querySelectorAll(
      '.service-card, .why-card, .process-card, .testi-card, .faq-item, .gallery-item, .intro-content, .intro-image-wrapper'
    );

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initGallery();
    initScrollReveal();
  });
})();
