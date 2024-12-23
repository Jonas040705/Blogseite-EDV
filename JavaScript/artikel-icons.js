// Wähle die Daumen-hoch- und Daumen-runter-Icons
const likeIcon = document.querySelector('.like-icon');
const dislikeIcon = document.querySelector('.dislike-icon');

// Event Listener für Daumen hoch
likeIcon.addEventListener('click', function () {
  // Wenn Daumen hoch aktiv ist, deaktiviere Daumen runter
  this.classList.toggle('active');
  if (this.classList.contains('active')) {
    dislikeIcon.classList.remove('active');
  }
});

// Event Listener für Daumen runter
dislikeIcon.addEventListener('click', function () {
  // Wenn Daumen runter aktiv ist, deaktiviere Daumen hoch
  this.classList.toggle('active');
  if (this.classList.contains('active')) {
    likeIcon.classList.remove('active');
  }
});
