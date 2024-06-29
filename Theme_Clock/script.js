const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let modeBtn = document.querySelector(".mode-btn");
let body = document.querySelector("body");
let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".min");
let secHand = document.querySelector(".sec");
let time = document.querySelector(".time");
let dateCont = document.querySelector(".date-cont");
let fullTime, fullDate, hourRotation, minRotation, secRotation;

modeBtn.onclick = function () {
  body.classList.toggle("dark");
};

setInterval(function () {
  let d = new Date();
  let month = monthNames[d.getMonth()].slice(0, 3);
  let date = d.getDate();
  let day = weekday[d.getDay()];
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let timeNotation = "AM";

  if (hour > 12) {
    hour -= 12;
    timeNotation = "PM";
  }

  let paddedMin = min.toString().padStart(2, 0);

  fullTime = `${hour}:${paddedMin} ${timeNotation}`;
  time.innerText = fullTime;

  fullDate = `
        <span class="day-month">${day}, ${month}</span>
        <span class="date">${date}</span>
    `;
  dateCont.innerHTML = fullDate;

  secRotation = sec * 6;
  minRotation = min * 6;
  hourRotation = hour * 30 + min / 2;

  secHand.style.transform = `translate(0%, -50%) rotate(${secRotation}deg)`;
  minHand.style.transform = `translate(0%, -50%) rotate(${minRotation}deg)`;
  hourHand.style.transform = `translate(0%, -50%) rotate(${hourRotation}deg)`;
}, 1000);
