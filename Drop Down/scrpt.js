var navigate = document.getElementById("navigater");

navigate.addEventListener("change", function () {
  console.log(navigate.value);
  window.open(navigate.value);
});
