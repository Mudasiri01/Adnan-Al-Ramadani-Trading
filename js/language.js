/**
 * Adnan Al Ramadani Trading - Bilingual Controller
 * Handles real-time Arabic (RTL) & English (LTR) switching without page reload.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'adnan_pest_lang';
  const DEFAULT_LANG = 'ar';

  // Get current language from URL parameter or localStorage or default
  function getInitialLanguage() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'ar' || urlLang === 'en') {
        localStorage.setItem(STORAGE_KEY, urlLang);
        return urlLang;
      }
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ar' || stored === 'en') {
        return stored;
      }
    } catch (e) {
      console.warn('LocalStorage not available, falling back to default language', e);
    }
    return DEFAULT_LANG;
  }

  // Update dynamic year
  function interpolate(text) {
    if (!text) return '';
    return text.replace('{year}', new Date().getFullYear().toString());
  }

  // Apply translations to DOM
  function applyTranslations(lang) {
    if (!translations || !translations[lang]) {
      console.error('Translation bundle missing for:', lang);
      return;
    }

    const dict = translations[lang];

    // 1. Update HTML tag attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.body.classList.remove('lang-ar', 'lang-en');
    document.body.classList.add(`lang-${lang}`);

    // 2. Elements with text / HTML content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        const val = interpolate(dict[key]);
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // 3. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = interpolate(dict[key]);
      }
    });

    // 4. Titles / Tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.title = interpolate(dict[key]);
      }
    });

    // 5. Image Alt text
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) {
        el.alt = interpolate(dict[key]);
      }
    });

    // 6. Update language switcher triggers
    document.querySelectorAll('.js-lang-btn').forEach(btn => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) {
        btn.classList.toggle('active', targetLang === lang);
      }
    });

    // Toggle language switcher button label if single toggle button
    document.querySelectorAll('.js-lang-toggle-label').forEach(lbl => {
      lbl.textContent = (lang === 'ar') ? 'English' : 'العربية';
    });

    // 7. Update Floating WhatsApp Links
    updateWhatsAppLinks(lang);

    // 8. Fire custom event for other modules
    window.dispatchEvent(new CustomEvent('adnanLanguageChanged', { detail: { lang } }));
  }

  // Update WhatsApp links with language-specific prefilled messages
  function updateWhatsAppLinks(lang) {
    const dict = translations[lang] || translations.ar;
    const phone = dict.whatsapp_number;
    const msg = encodeURIComponent(dict.whatsapp_default_msg);
    const waUrl = `https://wa.me/${phone}?text=${msg}`;

    document.querySelectorAll('.js-whatsapp-link').forEach(link => {
      link.href = waUrl;
    });

    const floatingTooltip = document.querySelector('.whatsapp-floating-tooltip');
    if (floatingTooltip && dict.whatsapp_floating_tooltip) {
      floatingTooltip.textContent = dict.whatsapp_floating_tooltip;
    }
  }

  // Public switcher
  function setLanguage(lang) {
    if (lang !== 'ar' && lang !== 'en') return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyTranslations(lang);
  }

  function toggleLanguage() {
    const current = document.documentElement.lang === 'en' ? 'en' : 'ar';
    const next = current === 'ar' ? 'en' : 'ar';
    setLanguage(next);
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getInitialLanguage();
    applyTranslations(currentLang);

    // Bind click events on switcher buttons
    document.querySelectorAll('.js-lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-lang');
        if (target) {
          setLanguage(target);
        } else {
          toggleLanguage();
        }
      });
    });

    document.querySelectorAll('.js-lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleLanguage();
      });
    });
  });

  // Expose to window
  window.adnanLang = {
    setLanguage,
    toggleLanguage,
    getCurrent: () => document.documentElement.lang || DEFAULT_LANG,
    t: (key) => {
      const current = document.documentElement.lang || DEFAULT_LANG;
      return (translations[current] && translations[current][key]) || key;
    }
  };
})();
