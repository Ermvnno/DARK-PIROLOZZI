// Attende che il DOM sia completamente caricato prima di eseguire il codice
document.addEventListener("DOMContentLoaded", function() {
    // Ottiene riferimenti agli elementi DOM necessari
    const video = document.getElementById('second-video'); // Il video nella pagina contattami
    const contactButton = document.getElementById('contattami-btn'); // Pulsante "Contattami"
    const contactFormContainer = document.getElementById('contact-form-container'); // Contenitore del form
    const contactForm = document.getElementById('contact-form'); // Il form di contatto
    
    // Mostra il pulsante "Contattami" quando il video termina
    video.addEventListener('ended', function() {
      contactButton.classList.remove('hidden'); // Rimuove la classe 'hidden' dal pulsante
      contactButton.classList.add('show'); // Aggiunge la classe 'show' per l'animazione
    });
    
    // Mostra il form quando si clicca sul pulsante "Contattami"
    contactButton.addEventListener('click', function() {
      contactFormContainer.classList.remove('hidden'); // Rende visibile il form
    });
    
    // Aggiunge la validazione del form se l'elemento esiste nella pagina
    if (contactForm) {
      // Gestisce l'invio del form
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene l'invio standard del form
        
        // Rimuove eventuali messaggi di errore precedenti
        const previousErrors = document.querySelectorAll('.error-message');
        previousErrors.forEach(error => error.remove());
        
        // Ottiene i riferimenti ai campi del form
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        let isValid = true; // Flag per tenere traccia della validità del form
        
        // Validazione dell'email
        if (!validateEmail(email.value)) {
          displayError(email, 'Inserisci un indirizzo email valido');
          isValid = false;
        }
        
        // Validazione del numero di telefono
        if (!validatePhone(phone.value)) {
          displayError(phone, 'Inserisci un numero di telefono valido');
          isValid = false;
        }
        
        // Se tutti i campi sono validi, procede con la sottomissione del form
        if (isValid) {
          contactForm.style.display = 'none'; // Nasconde il form
          // Mostra il messaggio di successo
          const successMessage = document.getElementById('success-message');
          successMessage.classList.remove('hidden');
        }
      });
    }
    
    // Funzione per validare l'indirizzo email
    function validateEmail(email) {
      // Espressione regolare per verificare il formato dell'email
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email); // Restituisce true se l'email è valida
    }
    
    // Funzione per validare il numero di telefono (versione corretta)
    function validatePhone(phone) {
        // Rimuove spazi, trattini, parentesi e altri caratteri non numerici eccetto il +
        const cleanPhone = phone.replace(/[^\d+]/g, '');
        
        // Verifica i formati italiani:
        // 1. Numeri con prefisso internazionale +39 seguiti da 9-10 cifre
        // 2. Numeri senza prefisso internazionale con 9-10 cifre (cellulari e fissi)
        // 3. Accetta anche numeri con spazi o formattazioni (già ripuliti da cleanPhone)
        
        if (cleanPhone.startsWith('+39')) {
        // Se inizia con +39, verifica che ci siano 9-10 cifre dopo il prefisso
        return cleanPhone.length >= 12 && cleanPhone.length <= 13;
        } else {
        // Altrimenti, verifica che ci siano 9-10 cifre in totale
        return cleanPhone.length >= 9 && cleanPhone.length <= 10;
        }
    }
    
    // Funzione per mostrare i messaggi di errore
    function displayError(inputElement, message) {
      // Crea un elemento div per il messaggio di errore
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message'; // Assegna la classe CSS
      errorDiv.textContent = message; // Imposta il testo del messaggio
      errorDiv.style.color = 'red'; // Imposta il colore del testo
      errorDiv.style.fontSize = '12px'; // Imposta la dimensione del testo
      errorDiv.style.marginTop = '4px'; // Aggiunge un margine superiore
      
      // Inserisce il messaggio di errore dopo l'input
      inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
      
      // Evidenzia il campo con errore cambiando il colore del bordo
      inputElement.style.borderColor = 'red';
    }
  });