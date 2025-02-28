const video = document.getElementById('portfolio-video');
const avantiBtn = document.getElementById('avanti-btn');

video.addEventListener('timeupdate', function() {
  if (video.ended) {
    avantiBtn.classList.remove('disabled');
    avantiBtn.classList.add('green');
  }
});

avantiBtn.addEventListener('click', function() {
  window.location.href = 'contattami.html';
});
