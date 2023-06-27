var selectAll = document.getElementById("selectall");
var checkbox = document.getElementsByClassName("chkbx");
var selectNone = document.getElementById("selectnone");

selectAll.addEventListener("click", function (event) {
  event.preventDefault();
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = true;
  }
});

selectNone.addEventListener("click", function (event) {
  event.preventDefault();
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = false;
  }
});
