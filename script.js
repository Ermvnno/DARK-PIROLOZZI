document.addEventListener("DOMContentLoaded", function() {
    const primoVideo = document.getElementById('primo-video');
    const avantiBtn = document.getElementById('avanti-btn');
    const secondoVideoContainer = document.getElementById('secondo-video-container');
    const secondoVideo = document.getElementById('secondo-video');
    const contattamiBtn = document.getElementById('contattami-btn');
    const contactFormContainer = document.getElementById('contact-form-container');
  
    // Tenta l'autoplay con audio
    primoVideo.muted = false;
    primoVideo.play().catch(error => {
      console.warn("Autoplay con audio bloccato, provo in modalità muta");
      primoVideo.muted = true;
      primoVideo.play().catch(err => {
        console.error("Anche l'autoplay muto è stato bloccato:", err);
      });
    });
  
    // Se l'utente tocca il video, attiva l'audio (rimane come fallback)
    primoVideo.addEventListener("click", function() {
      primoVideo.muted = false;
    });
  
    // Timer per pulsante "Avanti"
    primoVideo.addEventListener("timeupdate", function() {
      let remainingTime = Math.ceil(primoVideo.duration - primoVideo.currentTime);
      avantiBtn.innerText = `Avanti (${remainingTime}s)`;
    });
  
    // Sblocca il pulsante dopo il primo video
    primoVideo.addEventListener("ended", function() {
      avantiBtn.classList.remove("disabled");
      avantiBtn.classList.add("green");
      avantiBtn.innerText = "Avanti";
    });
  
    avantiBtn.addEventListener("click", function() {
      document.querySelector(".video-container").classList.add("hidden");
      avantiBtn.classList.add("hidden"); // Nasconde il pulsante "Avanti"
      secondoVideoContainer.classList.remove("hidden");
      secondoVideo.muted = false;
      secondoVideo.play();
    });
  
    // Mostra il pulsante "Contattami" dopo il secondo video
    secondoVideo.addEventListener("ended", function() {
      contattamiBtn.classList.remove("hidden");
      contattamiBtn.classList.add("show");
    });
  
    contattamiBtn.addEventListener("click", function() {
      contactFormContainer.classList.remove("hidden");
    });

    // Validazione form
    if (document.getElementById('contact-form')) {
      const contactForm = document.getElementById('contact-form');
      const emailInput = document.getElementById('email');
      const phoneInput = document.getElementById('phone');
      const successMessage = document.getElementById('success-message');

      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset dei messaggi di errore precedenti
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        
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
    }
  });