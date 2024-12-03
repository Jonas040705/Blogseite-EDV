//JavaScript
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.src =
        "icons/visibility_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"; // Pfad zum offenen Auge
    } else {
      passwordInput.type = "password";
      toggleIcon.src =
        "icons/visibility_off_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"; // Pfad zum geschlossenen Auge
    }
  }