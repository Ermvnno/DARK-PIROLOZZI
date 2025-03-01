const contactButton = document.getElementById('contattami-btn');
const contactFormContainer = document.getElementById('contact-form-container');

contactButton.addEventListener('click', function() {
  contactFormContainer.classList.remove('hidden');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('success-message').classList.remove('hidden');
});
