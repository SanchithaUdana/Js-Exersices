var eye = document.getElementById("eye");
var password = document.getElementById("password");
var showPassword = false;

eye.addEventListener("click", function () {
  if (showPassword == false) {
    password.setAttribute("type", "text");
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
    showPassword = true;
  } else {
    password.setAttribute("type", "password");
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
    showPassword = false;
  }
});
