// Get backend URL from environment or use default
const BACKEND_URL = window.location.origin;
const API = `${BACKEND_URL}/api`;

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      
      // Toggle icon
      const icon = navbarToggle.querySelector('svg');
      if (navbarMenu.classList.contains('active')) {
        icon.innerHTML = '<path d="M6 18L18 6M6 6l12 12"></path>';
      } else {
        icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"></path>';
      }
    });
    
    // Close menu when clicking a link
    const navLinks = navbarMenu.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        const icon = navbarToggle.querySelector('svg');
        icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"></path>';
      });
    });
  }
  
  // Set active nav link based on current page
  setActiveNavLink();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Set active navigation link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const formMessage = document.getElementById('form-message');
    const originalBtnText = submitBtn.textContent;
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formMessage.textContent = '';
    formMessage.className = 'form-message hidden';
    
    try {
      const response = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Success
        formMessage.textContent = "Thank you for reaching out! We'll get back to you within 24 hours.";
        formMessage.className = 'form-message success';
        contactForm.reset();
      } else {
        // Error
        formMessage.textContent = 'Something went wrong. Please try again or contact us directly.';
        formMessage.className = 'form-message error';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      formMessage.textContent = 'Something went wrong. Please try again or contact us directly.';
      formMessage.className = 'form-message error';
    } finally {
      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

// Scroll animations (fade in on scroll)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.card, .process-step, .service-detail').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
