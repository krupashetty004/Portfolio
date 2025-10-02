// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('show');
  });
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('🌌 Thank you for your message! I will get back to you soon.');
  e.target.reset();
});
