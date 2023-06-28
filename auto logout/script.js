// setTimeout(logOutUser, 5000);

// function logOutUser() {
//   window.location = "logout.html";
// }

var timer = document.getElementById("timer");
var duration = 10;

setInterval(updateTimer, 1000);

function updateTimer() {
  if (duration < 1) {
    alert("logout");
    window.location = "logout.html";
  } else {
    duration--;
    timer.innerText = duration;
  }
}

window.addEventListener("mousemove", timerUpdate);

function timerUpdate() {
  duration = 10;
}
