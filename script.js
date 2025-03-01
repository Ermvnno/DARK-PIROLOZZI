// Attende che il DOM sia completamente caricato prima di eseguire il codice
document.addEventListener("DOMContentLoaded", function() {
    // Ottiene riferimenti agli elementi DOM necessari
    const primoVideo = document.getElementById('primo-video'); // Il primo video
    const avantiBtn = document.getElementById('avanti-btn'); // Pulsante "Avanti"
    const secondoVideoContainer = document.getElementById('secondo-video-container'); // Contenitore del secondo video
    const secondoVideo = document.getElementById('secondo-video'); // Il secondo video
    const contattamiBtn = document.getElementById('contattami-btn'); // Pulsante "Contattami"
    const contactFormContainer = document.getElementById('contact-form-container'); // Contenitore del form di contatto
  
    // Definisce una funzione per abilitare l'audio quando l'utente interagisce con la pagina
    function enableAudio() {
        primoVideo.muted = false; // Riattiva l'audio del video
        // Rimuove gli event listener per evitare che la funzione venga chiamata più volte
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('touchstart', enableAudio);
        document.removeEventListener('keydown', enableAudio);
    }
    
    // Aggiunge event listener per diversi tipi di interazione utente
    document.addEventListener('click', enableAudio); // Attiva l'audio al click
    document.addEventListener('touchstart', enableAudio); // Attiva l'audio al tocco (dispositivi mobili)
    document.addEventListener('keydown', enableAudio); // Attiva l'audio alla pressione di un tasto
    
    // Avvia il video in modalità muta (questa è l'unica modalità consentita automaticamente dai browser)
    primoVideo.muted = true; // Imposta il video come muto
    primoVideo.play().catch(error => {
      // Gestisce eventuali errori nell'avvio automatico del video
      console.warn("Autoplay bloccato:", error);
    });
  
    // Aggiorna il testo del pulsante "Avanti" con il tempo rimanente del video
    primoVideo.addEventListener("timeupdate", function() {
      // Calcola i secondi rimanenti e arrotonda per eccesso
      let remainingTime = Math.ceil(primoVideo.duration - primoVideo.currentTime);
      // Aggiorna il testo del pulsante
      avantiBtn.innerText = `Avanti (${remainingTime}s)`;
    });
  
    // Attiva il pulsante "Avanti" quando il primo video termina
    primoVideo.addEventListener("ended", function() {
      avantiBtn.classList.remove("disabled"); // Rimuove la classe disabled per renderlo cliccabile
      avantiBtn.classList.add("green"); // Aggiunge la classe green per cambiarne l'aspetto
      avantiBtn.innerText = "Avanti"; // Rimuove il contatore e mostra solo "Avanti"
    });
  
    // Gestisce il click sul pulsante "Avanti"
    avantiBtn.addEventListener("click", function() {
      document.querySelector(".video-container").classList.add("hidden"); // Nasconde il primo video
      avantiBtn.style.display = "none"; // Nasconde il pulsante "Avanti" impostando direttamente la proprietà display
      secondoVideoContainer.classList.remove("hidden"); // Mostra il contenitore del secondo video
      secondoVideo.muted = false; // Assicura che il secondo video non sia muto
      secondoVideo.play(); // Avvia la riproduzione del secondo video
    });
  
    // Mostra il pulsante "Contattami" quando il secondo video termina
    secondoVideo.addEventListener("ended", function() {
      contattamiBtn.classList.remove("hidden"); // Rende visibile il pulsante
      contattamiBtn.classList.add("show"); // Aggiunge la classe show per l'animazione
    });
  
    // Mostra il form di contatto quando si clicca sul pulsante "Contattami"
    contattamiBtn.addEventListener("click", function() {
      contactFormContainer.classList.remove("hidden"); // Rende visibile il form
    });
});