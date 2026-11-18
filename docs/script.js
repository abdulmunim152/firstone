// 1. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update button icon based on active theme
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// 2. Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (event) => {
    // Prevent the page from reloading on submit
    event.preventDefault();

    const name = document.getElementById('name').value.trim();

    // Display confirmation message
    formStatus.textContent = `Thanks, ${name}! Your message has been received.`;

    // Clear the form fields
    contactForm.reset();

    // Hide the message after 5 seconds
    setTimeout(() => {
        formStatus.textContent = '';
    }, 5000);
});