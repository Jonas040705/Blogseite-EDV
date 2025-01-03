function removeImage() {
  const profilePicture = document.querySelector(".profile-picture");
  // Entfernt das Hintergrundbild
  profilePicture.style.backgroundImage = "";
  // Setzt die Initialen oder den Platzhaltertext zurück
  profilePicture.textContent = "JK";
}