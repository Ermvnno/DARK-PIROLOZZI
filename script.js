document.addEventListener("DOMContentLoaded", function() {
    const primoVideo = document.getElementById('primo-video');
    const avantiBtn = document.getElementById('avanti-btn');
    const secondoVideoContainer = document.getElementById('secondo-video-container');
    const secondoVideo = document.getElementById('secondo-video');
    const contattamiBtn = document.getElementById('contattami-btn');
    const contactFormContainer = document.getElementById('contact-form-container');
  
    // Timer sul primo video
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
      secondoVideoContainer.classList.remove("hidden");
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
  