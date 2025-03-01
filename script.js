document.addEventListener("DOMContentLoaded", function() {
    const primoVideo = document.getElementById('primo-video');
    const avantiBtn = document.getElementById('avanti-btn');
    const secondoVideoContainer = document.getElementById('secondo-video-container');
    const secondoVideo = document.getElementById('secondo-video');
    const contattamiBtn = document.getElementById('contattami-btn');
    const contactFormContainer = document.getElementById('contact-form-container');
  
    // Soluzione per l'autoplay con audio
    // Nota: questa è una soluzione che tenta di aggirare le restrizioni del browser
    // utilizzando l'interazione dell'utente con la pagina
    
    // Imposta una funzione che tenta di attivare l'audio quando l'utente interagisce con la pagina
    function enableAudio() {
        primoVideo.muted = false;
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('touchstart', enableAudio);
        document.removeEventListener('keydown', enableAudio);
    }
    
    // Aggiungi listener per vari tipi di interazione utente
    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
    document.addEventListener('keydown', enableAudio);
    
    // Avvia il video muto (questo dovrebbe funzionare)
    primoVideo.muted = true;
    primoVideo.play().catch(error => {
      console.warn("Autoplay bloccato:", error);
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
  
    // Corretto il problema del pulsante Avanti che non scompare
    avantiBtn.addEventListener("click", function() {
      document.querySelector(".video-container").classList.add("hidden");
      // Aggiungiamo anche l'occultamento esplicito del pulsante
      avantiBtn.style.display = "none"; // Utilizziamo style.display invece della classe
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
  });