document
          .getElementById("sendCodeButton")
          .addEventListener("click", function (event) {
            const emailInput = document.getElementById("emailInput"); // E-Mail-Feld auslesen
            const emailValue = emailInput.value.trim(); // Eingabe ohne Leerzeichen

            if (validateEmail(emailValue)) {
              // Weiterleitung mit E-Mail in der URL, wenn die E-Mail gültig ist
              window.location.href = `Enter_Code.html?email=${encodeURIComponent(
                emailValue
              )}`;
            } else {
              // Fehlermeldung anzeigen, wenn die E-Mail ungültig ist
              alert("Bitte geben Sie eine gültige E-Mail-Adresse ein!");
            }
          });

        // Funktion zur Validierung der E-Mail-Adresse
        function validateEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex für E-Mail-Validierung
          return re.test(email); // Rückgabe: true, wenn gültig; false, wenn ungültig
        }