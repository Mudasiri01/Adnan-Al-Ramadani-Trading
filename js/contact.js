/**
 * Adnan Al Ramadani Trading - Contact Form & Direct WhatsApp Integration
 * Muscat, Sultanate of Oman
 */

(function () {
  'use strict';

  function initContactForm() {
    const form = document.getElementById('adnanContactForm');
    if (!form) return;

    const nameInput = document.getElementById('formName');
    const phoneInput = document.getElementById('formPhone');
    const serviceSelect = document.getElementById('formService');
    const propertySelect = document.getElementById('formProperty');
    const areaInput = document.getElementById('formArea');
    const messageInput = document.getElementById('formMessage');
    const submitBtn = document.getElementById('formSubmitBtn');
    const waDirectBtn = document.getElementById('formWhatsAppBtn');
    const successBox = document.getElementById('formSuccessBox');

    function getLang() {
      return document.documentElement.lang || 'ar';
    }

    function getDict() {
      const l = getLang();
      return (translations && translations[l]) || {};
    }

    // Set error on field
    function setError(inputEl, errorKey) {
      const formGroup = inputEl.closest('.form-group');
      if (!formGroup) return;

      formGroup.classList.add('has-error');
      let feedback = formGroup.querySelector('.form-error-feedback');
      if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'form-error-feedback';
        formGroup.appendChild(feedback);
      }
      const dict = getDict();
      feedback.textContent = dict[errorKey] || 'Field required';
    }

    // Clear error
    function clearError(inputEl) {
      const formGroup = inputEl.closest('.form-group');
      if (!formGroup) return;
      formGroup.classList.remove('has-error');
      const feedback = formGroup.querySelector('.form-error-feedback');
      if (feedback) feedback.textContent = '';
    }

    // Live clearance on typing
    [nameInput, phoneInput, serviceSelect, areaInput].forEach(el => {
      if (!el) return;
      el.addEventListener('input', () => clearError(el));
      el.addEventListener('change', () => clearError(el));
    });

    // Validate form inputs
    function validateForm() {
      let isValid = true;
      const dict = getDict();

      // Name validation
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setError(nameInput, 'form_err_name');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Phone validation (at least 7 digits)
      const cleanPhone = phoneInput.value.replace(/[^0-9+]/g, '');
      if (!cleanPhone || cleanPhone.length < 7) {
        setError(phoneInput, 'form_err_phone');
        isValid = false;
      } else {
        clearError(phoneInput);
      }

      // Service selection
      if (!serviceSelect.value) {
        setError(serviceSelect, 'form_err_service');
        isValid = false;
      } else {
        clearError(serviceSelect);
      }

      // Area validation
      if (!areaInput.value.trim()) {
        setError(areaInput, 'form_err_area');
        isValid = false;
      } else {
        clearError(areaInput);
      }

      return isValid;
    }

    // Build structured WhatsApp message from form data
    function buildWhatsAppMessage() {
      const lang = getLang();
      const isArabic = lang === 'ar';
      
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const serviceName = serviceSelect.options[serviceSelect.selectedIndex]?.text || serviceSelect.value;
      const propType = propertySelect ? propertySelect.options[propertySelect.selectedIndex]?.text : '';
      const area = areaInput.value.trim();
      const notes = messageInput ? messageInput.value.trim() : '';

      if (isArabic) {
        return `مرحباً شركة عدنان الرمضاني للتجارة،
أود طلب استشارة وعرض سعر لخدمات مكافحة الآفات:
- الاسم: ${name}
- الهاتف: ${phone}
- الخدمة المطلوبة: ${serviceName}
- نوع العقار: ${propType || 'غير محدد'}
- المنطقة في مسقط: ${area}
${notes ? `- ملاحظات إضافية: ${notes}` : ''}`;
      } else {
        return `Hello Adnan Al Ramadani Trading,
I would like to request an inspection and quotation for pest control:
- Name: ${name}
- Phone: ${phone}
- Requested Service: ${serviceName}
- Property Type: ${propType || 'Not specified'}
- Location in Muscat: ${area}
${notes ? `- Additional Notes: ${notes}` : ''}`;
      }
    }

    // Direct WhatsApp send button
    if (waDirectBtn) {
      waDirectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!validateForm()) {
          const firstErr = form.querySelector('.has-error');
          if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }

        const msg = encodeURIComponent(buildWhatsAppMessage());
        const waUrl = `https://wa.me/96897045409?text=${msg}`;
        window.open(waUrl, '_blank');
      });
    }

    // Standard Form Submit Handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        const firstErr = form.querySelector('.has-error');
        if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const dict = getDict();
      const originalBtnText = submitBtn.innerHTML;

      // Loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="bi bi-arrow-repeat spin"></i> ${dict.form_sending || 'Sending...'}`;

      // Simulate reliable client verification and display immediate WhatsApp confirmation
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (successBox) {
          successBox.style.display = 'block';
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Also offer to forward to WhatsApp automatically or let user click
        const msg = encodeURIComponent(buildWhatsAppMessage());
        const forwardUrl = `https://wa.me/96897045409?text=${msg}`;
        
        // Populate or display forward link inside success box
        const forwardBtn = document.getElementById('forwardWhatsAppSuccess');
        if (forwardBtn) {
          forwardBtn.href = forwardUrl;
          forwardBtn.style.display = 'inline-flex';
        }

        form.reset();
      }, 750);
    });
  }

  document.addEventListener('DOMContentLoaded', initContactForm);
})();
