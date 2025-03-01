const video = document.getElementById('second-video');
const contactButton = document.getElementById('contattami-btn');
const contactFormContainer = document.getElementById('contact-form-container');

video.addEventListener('ended', function() {
  contactButton.classList.remove('hidden');
  contactButton.classList.add('show');
});

contactButton.addEventListener('click', function() {
  contactFormContainer.classList.remove('hidden');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('success-message').classList.remove('hidden');
});
