document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.product-card, .benefit-card').forEach((card) => {
    observer.observe(card);
  });
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach((button) => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    const isOpen = button.classList.contains('active');

    // Close all accordions
    document.querySelectorAll('.accordion-header').forEach((b) => {
      b.classList.remove('active');
      b.nextElementSibling.style.maxHeight = null;
      b.querySelector('.toggle-icon').textContent = '+';
    });

    // Open clicked if not active
    if (!isOpen) {
      button.classList.add('active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      button.querySelector('.toggle-icon').textContent = '-';
    }
  });
});

// FAQ search functionality
if (document.getElementById('faqSearch')) {
  document.getElementById('faqSearch').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();

    document.querySelectorAll('.accordion-item').forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
  });
}
