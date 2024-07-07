"use script";
// count town anti clock
// 1 day change in 24 hours
// 1 hours change in 60 minutes
// 1 minutes change in 60 seconds

let daysClock = document.getElementById("dayBox");
let hoursClock = document.getElementById("hoursBox");
let minutesClock = document.getElementById("minutesBox");
let secondsClock = document.getElementById("secondsBox");
let msg = document.getElementById("msg");

let day = 1;
daysClock.innerHTML = day;
let hours = 23;
hoursClock.innerHTML = hours;
let minutes = 59;
minutes.innerHTML = minutes;
let seconds = 59;
secondsClock.innerHTML = seconds;

setInterval(() => {
  seconds--;
  secondsClock.innerHTML = seconds;
  if (seconds === 0) {
    minutes--;
    minutesClock.innerHTML = minutes;
    seconds = 59;

    if (minutes === 0) {
      hours--;
      hoursClock.innerHTML = hours;
      minutes = 59;

      if (hours === 0) {
        daysClock.innerHTML = day--;
        day = 0;
      }
    }

    if (day === 0) {
      msg.innerHTML = "You Offer Is Gone";
    }
  }
}, 1000);
