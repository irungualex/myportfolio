// script.js
document.getElementById('learn-more').addEventListener('click', () => {
    alert('Thank you for your interest! Check out the sections below.');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent! Thank you for reaching out.');
});
