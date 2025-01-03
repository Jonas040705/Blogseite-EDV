function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          document.querySelector('.image-placeholder').style.backgroundImage = `url(${e.target.result})`;
          document.querySelector('.image-placeholder').style.backgroundSize = 'cover';
          document.querySelector('.image-placeholder').style.backgroundPosition = 'center';
          document.querySelector('.image-placeholder').textContent = ''; // Entfernt "Bild einfügen"-Text
      };
      reader.readAsDataURL(file);
  }
}
function removeImage() {
  const placeholder = document.querySelector('.image-placeholder');
  placeholder.style.backgroundImage = ''; // Entfernt das Hintergrundbild
  placeholder.textContent = 'Bild einfügen'; // Stellt den Platzhaltertext wieder her
  document.getElementById('imageUpload').value = ''; // Setzt das Input-Element zurück

  // Versteckt den "Bild entfernen"-Button
  document.getElementById('removeImageButton').style.display = 'none';
}