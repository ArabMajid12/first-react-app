const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = Math.abs(days);
  hoursEl.innerHTML = Math.abs(hours);
  minsEl.innerHTML = Math.abs(mins);
  secondsEl.innerHTML = Math.abs(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
