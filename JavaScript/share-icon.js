function copyToClipboard() {
  const articleLink = "https://yourwebsite.com/Artikel-anzeigen.html"; // Ersetze durch den tatsächlichen Link
  navigator.clipboard.writeText(articleLink)
      .then(() => {
          alert("Link wurde in die Zwischenablage kopiert!"); // Optionale Benachrichtigung
      })
      .catch(err => {
          console.error("Fehler beim Kopieren des Links: ", err);
      });
}
function navigateToArticle(event) {
  // Prüfen, ob der Klick auf ein Icon innerhalb der `icons-container` war
  if (event.target.closest('.icons-container')) {
      // Verhindert, dass der `onclick`-Event des `div` ausgelöst wird
      event.stopPropagation();
      return;
  }
  // Andernfalls zur Artikel-Seite navigieren
  window.location.href = 'Artikel-anzeigen.html';
}

function likePost(event) {
  event.stopPropagation(); // Verhindert das Auslösen des Eltern-Events
  console.log("Like wurde geklickt!");
  // Füge hier die Like-Logik hinzu
}

function dislikePost(event) {
  event.stopPropagation(); // Verhindert das Auslösen des Eltern-Events
  console.log("Dislike wurde geklickt!");
  // Füge hier die Dislike-Logik hinzu
}
