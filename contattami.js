const video = document.getElementById('second-video');
const contactButton = document.getElementById('contattami-btn');
const contactFormContainer = document.getElementById('contact-form-container');
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const successMessage = document.getElementById('success-message');

video.addEventListener('ended', function() {
  contactButton.classList.remove('hidden');
  contactButton.classList.add('show');
});

contactButton.addEventListener('click', function() {
  contactFormContainer.classList.remove('hidden');
});

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Reset dei messaggi di errore precedenti
  document.querySelectorAll('.error-message').forEach(el => el.remove());
  emailInput.style.borderColor = '';
  phoneInput.style.borderColor = '';
  
  let isValid = true;
  
  // Validazione email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, 'Inserisci un indirizzo email valido');
    isValid = false;
  }
  
  // Validazione telefono (formato italiano)
  const phoneRegex = /^(\+39)?[0-9]{9,10}$/;
  if (!phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
    showError(phoneInput, 'Inserisci un numero di telefono valido');
    isValid = false;
  }
  
  if (isValid) {
    // Form valido, mostra messaggio di successo
    contactForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
    // Qui potresti anche inviare i dati al server
  }
});

function showError(input, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.innerText = message;
  errorDiv.style.color = 'red';
  errorDiv.style.fontSize = '14px';
  errorDiv.style.marginTop = '-8px';
  errorDiv.style.marginBottom = '10px';
  input.parentNode.insertBefore(errorDiv, input.nextSibling);
  input.style.borderColor = 'red';
}