document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Smooth Scroll Behavior for Navigation Anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Contact Form Submission Handling
  const leadForm = document.getElementById('leadForm');
  const formFeedback = document.getElementById('formFeedback');

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(leadForm);
      const payload = {
        fullName: formData.get('fullName'),
        workEmail: formData.get('workEmail'),
        website: formData.get('website'),
        monthlySpend: formData.get('monthlySpend')
      };

      // Visual feedback on submission
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerText = 'Submitting...';

      // Example local handler: replace with your CRM or Formspree endpoint
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Claim Strategy Call';
        leadForm.reset();

        formFeedback.style.color = '#10b981'; // Green status
        formFeedback.innerText = 'Thank you! Your submission has been received. We will be in touch shortly.';
      }, 1000);
    });
  }
});
