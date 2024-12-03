function validatePassword(inputId, circleId) {
    const passwordInput = document.getElementById(inputId);
    const circleIcon = document.getElementById(circleId);

    // Leerzeichen entfernen
    passwordInput.value = passwordInput.value.replace(/\s+/g, "");

    // Maximal 14 Zeichen erlauben
    if (passwordInput.value.length > 14) {
      passwordInput.value = passwordInput.value.slice(0, 14); // Zeichen auf 14 kürzen
      alert("Das Passwort darf maximal 14 Zeichen lang sein!");
    }

    // Wenn das Passwort mindestens 8 Zeichen hat, den Kreis ausfüllen
    if (passwordInput.value.length >= 8) {
      circleIcon.src =
        "icons/radio_button_checked_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"; // PNG für ausgefüllten Kreis
    } else {
      circleIcon.src =
        "icons/radio_button_unchecked_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"; // Leerer Kreis
    }
  }
  //JavaScript
  function togglePassword(passwordId, icon) {
    const passwordInput = document.getElementById(passwordId);

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.src =
        "icons/visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"; // Offenes Auge
    } else {
      passwordInput.type = "password";
      icon.src =
        "icons/visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"; // Geschlossenes Auge
    }
  }
  document.getElementById("changePasswordButton").addEventListener("click", function (event) {
    event.preventDefault(); // Verhindert das Standard-Formularverhalten (z. B. Weiterleitung)

    // Holen der Eingabewerte der Passwort-Felder
    const password = document.getElementById("newPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Überprüfen, ob beide Felder ausgefüllt sind
    if (password === "" || confirmPassword === "") {
        alert("Bitte füllen Sie beide Passwortfelder aus!");
        return; // Verhindert, dass die Funktion weiter ausgeführt wird
    }

    // Überprüfen, ob die Passwörter übereinstimmen
    if (password !== confirmPassword) {
        alert("Die Passwörter stimmen nicht überein!");
        return; // Funktion abbrechen, wenn die Passwörter unterschiedlich sind
    }

    // Überprüfen, ob die Passwörter zwischen 8 und 14 Zeichen lang sind
    if (password.length < 8 || password.length > 14) {
        alert("Das Passwort muss zwischen 8 und 14 Zeichen lang sein!");
        return; // Funktion abbrechen, wenn die Länge nicht stimmt
    }

    // Grüne Nachricht und "Back to Login"-Button einblenden
    document.querySelector(".confirm_text").style.display = "block";

    const backLoginButton = document.querySelector(".back_login");
    backLoginButton.style.display = "flex"; // Ändere "display" auf flex
    backLoginButton.style.justifyContent = "center"; // Zentriert den Button horizontal
    backLoginButton.style.alignItems = "center"; // Zentriert den Button vertikal

    // "Change Password"-Button ausblenden
    document.getElementById("changePasswordButton").style.display = "none";
});