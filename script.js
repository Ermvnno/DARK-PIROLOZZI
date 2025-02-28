const video = document.getElementById('portfolio-video');
const avantiBtn = document.getElementById('avanti-btn');

video.addEventListener('ended', function() {
  avantiBtn.classList.remove('disabled');
  avantiBtn.classList.add('green');
});

avantiBtn.addEventListener('click', function() {
  // Redirect to the next section or page
  window.location.href = 'contattami.html';
});
