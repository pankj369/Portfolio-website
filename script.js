document.addEventListener('DOMContentLoaded', () => {
  console.log("Portfolio loaded successfully!");
});
// Smooth Scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
  });
});
// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  console.log('Form Submitted:', { name, email, message });

  // Clear the form after submission
  e.target.reset();

  // Show a success alert
  alert('Thank you for reaching out! I will get back to you soon.');
});
