document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('second-video');
    const contactButton = document.getElementById('contattami-btn');
    const contactFormContainer = document.getElementById('contact-form-container');
    const contactForm = document.getElementById('contact-form');
    
    video.addEventListener('ended', function() {
      contactButton.classList.remove('hidden');
      contactButton.classList.add('show');
    });
    
    contactButton.addEventListener('click', function() {
      contactFormContainer.classList.remove('hidden');
    });
    
    // Aggiungiamo la validazione del form
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Rimuovi messaggi di errore precedenti
        const previousErrors = document.querySelectorAll('.error-message');
        previousErrors.forEach(error => error.remove());
        
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        let isValid = true;
        
        // Validazione email
        if (!validateEmail(email.value)) {
          displayError(email, 'Inserisci un indirizzo email valido');
          isValid = false;
        }
        
        // Validazione telefono
        if (!validatePhone(phone.value)) {
          displayError(phone, 'Inserisci un numero di telefono valido');
          isValid = false;
        }
        
        if (isValid) {
          // Nascondi il form
          contactForm.style.display = 'none';
          // Mostra il messaggio di successo
          const successMessage = document.getElementById('success-message');
          successMessage.classList.remove('hidden');
        }
      });
    }
    
    // Funzione per validare email
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    // Funzione per validare numero di telefono italiano
    function validatePhone(phone) {
      // Rimuovi spazi e caratteri non numerici eccetto il +
      const cleanPhone = phone.replace(/[^\d+]/g, '');
      // Controlla formati italiani comuni
      return /^(\+39)?\d{9,10}$/.test(cleanPhone);
    }
    
    // Funzione per mostrare errori
    function displayError(inputElement, message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      errorDiv.style.color = 'red';
      errorDiv.style.fontSize = '12px';
      errorDiv.style.marginTop = '4px';
      
      // Inseriamo l'errore dopo l'input
      inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
      
      // Evidenziamo il campo errato
      inputElement.style.borderColor = 'red';
    }
  });