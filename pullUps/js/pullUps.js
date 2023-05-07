const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");
let startButton = document.getElementById("startButtonButton");

//input
const hr = 0;
const min = 0;
const sec = 10;

const hours = hr * 360000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;

let futureTime;
let startTime;
let timerLoop;


startButton.onclick = function () {
  countDownTimer();
  startTime = Date.now();
  timerLoop = setInterval(countDownTimer);
  futureTime = startTime + setTime;
  console.log("clicked");
};

function countDownTimer() {
  const currentTime = Date.now();
  const remainintTime = futureTime - currentTime;
  const angle = (remainintTime / setTime) * 360;

  if (angle > 180) {
    semicircles[2].style.display = "none";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }

  const hrs = Math.floor(
    (remainintTime / (1000 * 60 * 60)) % 24
  ).toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const mins = Math.floor((remainintTime / (1000 * 60)) % 60).toLocaleString(
    "en-US",
    { minimumIntegerDigits: 2, useGrouping: false }
  );
  const secs = Math.floor((remainintTime / 1000) % 24).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  timer.innerHTML = `
  <div>${mins}</div>
  <div class="colon">:<div>
  <div>${secs}</div>
  `;

  if (remainintTime <= 6000) {
    semicircles[0].style.backgroundColor = "#1d1d16";
    semicircles[1].style.backgroundColor = "#1d1d16";
    timer.style.color = "red";
  }

  if (remainintTime < 0) {
    clearInterval(timerLoop);
    semicircles[0].style.display = "none";
    semicircles[1].style.display = "none";
    semicircles[2].style.display = "none";

    timer.innerHTML = `
    <div>00</div>
    <div class="colon">:<div>
    <div>00</div>
  `;
    timer.style.color = "lightgray";
  }
}
