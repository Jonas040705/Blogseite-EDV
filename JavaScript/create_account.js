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
      document;
      // Event Listener für den "Create Account"-Button
      document
        .getElementById("createAccountButton")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Verhindert die standardmäßige Formularübermittlung

          // Eingabewerte abrufen
          const email = document.getElementById("emailInput").value.trim();
          const password = document.getElementById("newPassword").value.trim();
          const confirmPassword = document
            .getElementById("confirmPassword")
            .value.trim();
          const username = document.getElementById("usernameInput").value.trim();

          // E-Mail-Validierung mit Regex
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Einfache E-Mail-Validierung
          if (!emailRegex.test(email)) {
            alert("Bitte geben Sie eine gültige E-Mail-Adresse ein!");
            return; // Verhindert die Weiterleitung
          }

          // Überprüfen, ob alle Felder ausgefüllt sind
          if (email === "" || password === "" || confirmPassword === "") {
            alert("Bitte füllen Sie alle Felder aus!"); // Warnmeldung ausgeben
            return; // Weiterleitung verhindern
          }

          // Überprüfen, ob die Passwörter übereinstimmen
          if (password !== confirmPassword) {
            alert("Die Passwörter stimmen nicht überein!"); // Warnmeldung ausgeben
            return; // Weiterleitung verhindern
          }

          // Überprüfen, ob die Passwortlänge korrekt ist (mindestens 8 Zeichen)
          if (password.length < 8) {
            alert("Das Passwort muss mindestens 8 Zeichen lang sein!"); // Warnmeldung ausgeben
            return; // Weiterleitung verhindern
          }

          // Optional: Überprüfen, ob der Benutzername bestimmte Kriterien erfüllt
          if (username.length < 3) {
            alert("Der Benutzername muss mindestens 3 Zeichen lang sein!");
            return; // Warnmeldung ausgeben
          }

          // Formular absenden, wenn alle Bedingungen erfüllt sind
          document.querySelector("form").submit();
        });