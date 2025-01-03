function updateProfilePicture(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const profilePicture = document.querySelector('.profile-picture');
          profilePicture.style.backgroundImage = `url(${e.target.result})`;
          profilePicture.style.backgroundSize = 'cover';
          profilePicture.style.backgroundPosition = 'center';
          profilePicture.textContent = ''; // Entfernt Text "Profilbild" oder Initialen
      };
      reader.readAsDataURL(file);
  }
}
