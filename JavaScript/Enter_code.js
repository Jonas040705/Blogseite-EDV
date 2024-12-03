const inputs = document.querySelectorAll(".code-input");

      inputs.forEach((input, index) => {
        // Eingabe überprüfen, nur Zahlen zulassen
        input.addEventListener("input", (e) => {
          const value = e.target.value;

          // Wenn die Eingabe keine Zahl ist, wird das Feld geleert
          if (!/^\d$/.test(value)) {
            input.value = "";
            return;
          }

          // Zum nächsten Feld wechseln, wenn eine gültige Zahl eingegeben wird
          if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        });

        // Wechsel zurück zum vorherigen Feld bei Backspace
        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && index > 0 && input.value === "") {
            inputs[index - 1].focus();
          }
        });

        // Verhindern, dass Buchstaben oder Sonderzeichen eingegeben werden
        input.addEventListener("keypress", (e) => {
          if (!/^\d$/.test(e.key)) {
            e.preventDefault();
          }
        });
      });
      // URL-Parameter lesen
      const params = new URLSearchParams(window.location.search);
      const email = params.get("email"); // E-Mail aus URL holen

      if (email) {
        document.getElementById("emailDisplay").textContent = email; // E-Mail anzeigen
      } else {
        document.getElementById("emailDisplay").textContent =
          "No email provided"; // Fallback
      }
      // Funktion, um zu prüfen, ob alle Eingabefelder ausgefüllt sind und einen gültigen fünfstelligen Code bilden
      function validateCodeInput() {
        const inputs = document.querySelectorAll(".code-input"); // Alle Eingabefelder auswählen
        const confirmButton = document.querySelector(".confirm-button button"); // Button auswählen

        let code = ""; // Variable, um den vollständigen Code zu speichern

        // Schleife durch alle Eingabefelder, um die Werte zu sammeln
        inputs.forEach((input) => {
          code += input.value.trim(); // Werte aus den Feldern hinzufügen
        });

        // Überprüfen, ob der Code 5-stellig ist und nur Zahlen enthält
        if (code.length === 5 && /^\d+$/.test(code)) {
          confirmButton.disabled = false; // Button aktivieren
        } else {
          confirmButton.disabled = true; // Button deaktivieren
        }
      }

      // Event Listener für alle Eingabefelder hinzufügen
      document.querySelectorAll(".code-input").forEach((input) => {
        input.addEventListener("input", validateCodeInput); // Bei jeder Eingabe überprüfen
      });

      // Button beim Laden der Seite deaktivieren
      document.addEventListener("DOMContentLoaded", () => {
        const confirmButton = document.querySelector(".confirm-button button");
        confirmButton.disabled = true; // Standardmäßig deaktivieren
      });