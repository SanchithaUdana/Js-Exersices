// setInterval() function is used to run a function in given delay
setInterval(updateClock, 1000);

function updateClock() {
  var myDate = new Date();

  var hour = myDate.getHours();
  var minutes = myDate.getMinutes();
  var seconds = myDate.getSeconds();



  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }



  var clock = `${hour}:${minutes}:${seconds}`;

  document.getElementById("clock").innerText = clock;
}
