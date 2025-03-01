const video = document.getElementById('portfolio-video');
const avantiBtn = document.getElementById('avanti-btn');

video.addEventListener('timeupdate', function() {
  if (video.ended) {
    avantiBtn.classList.remove('disabled');
    avantiBtn.classList.add('green');
  }
});

video.addEventListener('play', function() {
  video.controls = false; // Disabilita i controlli quando il video parte
});

avantiBtn.addEventListener('click', function() {
  window.location.href = 'contattami.html';
});
