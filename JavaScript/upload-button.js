function validateForm() {
  const title = document.getElementById("title").value.trim();
  const category = document.getElementById("category").value.trim();
  const content = document.getElementById("post-content").value.trim();

  // Überprüfen: Titel ausgefüllt
  if (!title) {
    alert("Bitte geben Sie einen Titel ein.");
    return;
  }

  // Überprüfen: Kategorie hat mindestens ein Wort
  if (category.length === 0) {
    alert(
      "Bitte geben Sie mindestens ein Wort in das Kategorie-Feld ein."
    );
    return;
  }

  // Überprüfen: Post-Inhalt mindestens 150 Zeichen
  if (content.length < 150) {
    alert("Der Blog-Post muss mindestens 150 Zeichen enthalten.");
    return;
  }

  // Wenn alle Bedingungen erfüllt sind
  alert("Blog erfolgreich veröffentlicht!");
  window.location.href = "/Homepage.html"; // Weiterleitung zur Homepage
}