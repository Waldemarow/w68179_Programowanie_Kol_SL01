    // Funkcja walidująca formularz
    function validateForm() {
        var login = document.forms["registrationForm"]["login"].value;
        var email = document.forms["registrationForm"]["email"].value;
        var password = document.forms["registrationForm"]["password"].value;
        var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
        var phoneCheckbox = document.getElementById("phoneCheckbox");
        var phone = document.forms["registrationForm"]["phone"].value;
        var birthday = document.forms["registrationForm"]["birthday"].value;
  
        // Walidacja loginu
        if (login.length < 3) {
          alert("Login musi zawierać co najmniej 3 znaki");
          return false;
        }
  
        // Walidacja adresu email
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(emailRegex)) {
          alert("Wprowadź poprawny adres email");
          return false;
        }
  
        // Walidacja hasła
        if (password.length < 6) {
          alert("Hasło musi zawierać co najmniej 6 znaków");
          return false;
        }
  
        // Sprawdzenie, czy hasło i powtórzone hasło są takie same
        if (password !== confirmPassword) {
          alert("Hasło i powtórzone hasło nie są identyczne");
          return false;
        }
  
        // Walidacja pola telefonu, jeśli checkbox jest zaznaczony
        if (phoneCheckbox.checked) {
          var phoneRegex = /^\d+$/;
          if (!phone.match(phoneRegex)) {
            alert("Pole telefonu może zawierać tylko cyfry");
            return false;
          }
        }
  
        // Walidacja pola data urodzenia
        var currentDate = new Date();
        var inputDate = new Date(birthday);
        var yearsDiff = currentDate.getFullYear() - inputDate.getFullYear();
        var isAdult = yearsDiff >= 18;
  
        if (!isAdult) {
          alert("Musisz być pełnoletni, aby się zarejestrować");
          return false;
        }
      }

function togglePhoneFields() {
    var phoneFields = document.getElementById("phoneFields");
    phoneFields.style.display = phoneCheckbox.checked ? "block" : "none";
  }
