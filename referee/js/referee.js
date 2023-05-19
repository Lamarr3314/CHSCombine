export function baseCreateCounter() {
  //use for broad jump only
}
var timer;
var stopWatchTime;
export function baseCreateTimer(events, id) {
  let count = 0;
  let stopped = true;
  let mainContainer = document.getElementById("mainContainer");
  let container = document.createElement("div");
  container.className = "container";
  mainContainer.appendChild(container);
  let fullTimeContainer = document.createElement("div");
  fullTimeContainer.id = "fullTimeContainer";
  let timerRef = document.createElement("div");
  timerRef.className = "timerDisplay";
  timerRef.id = "timeDisplayStop";
  let addContainer = document.createElement("div");
  addContainer.id = "addContainer";
  let addButton = document.createElement("img");
  addButton.id = "addButton";
  addButton.src = "../../images/plus.png";
  addContainer.appendChild(addButton);
  let minusContainer = document.createElement("div");
  minusContainer.id = "minustContainer";
  let minusButton = document.createElement("img");
  minusButton.id = "minusButton";
  minusButton.src = "../../images/minus.png";
  minusContainer.appendChild(minusButton);
  fullTimeContainer.appendChild(minusContainer);
  fullTimeContainer.appendChild(timerRef);
  fullTimeContainer.appendChild(addContainer);
  let counterDiv = document.createElement("div");
  counterDiv.id = "counterDiv";
  let counterHeader = document.createElement("h1");
  counterHeader.id = "counterHeader";
  counterHeader.innerHTML = count;
  counterDiv.appendChild(counterHeader);
  container.appendChild(counterDiv);
  container.appendChild(fullTimeContainer);
  let buttons = document.createElement("div");
  buttons.className = "buttons";
  let startTimer = document.createElement("button");
  startTimer.id = "startTimer";
  startTimer.innerHTML = "Start";
  buttons.appendChild(startTimer);
  let glowingButton = document.createElement("button");
  glowingButton.className = "glowing-btn";
  glowingButton.type = "submit";
  glowingButton.id = "submit";
  glowingButton.name = "submit";
  glowingButton.innerHTML =
    '<span class="glowing-txt">SU<span class="faulty-letter">BM</span>IT</span>';
  container.appendChild(buttons);
  container.appendChild(glowingButton);

  addContainer.onclick = function () {
    count++;
    counterHeader.innerHTML = count;
  };
  minusContainer.onclick = function () {
    count--;
    counterHeader.innerHTML = count;
  };
  timerRef.innerHTML = "60";

  document.getElementById("startTimer").addEventListener("click", () => {
    if (!stopped) {
      startTimer.innerHTML = "Start";
      startTimer.style.backgroundColor = "#e75100";
      count = 0;
      counterHeader.innerHTML = count;
      stopTimer();
    } else {
      startCountTimer();
      count = 0;
      startTimer.innerHTML = "Reset";
      startTimer.style.backgroundColor = "rgb(83, 81, 81)";
      counterHeader.innerHTML = count;
    }
    stopped = !stopped;
  });

  document.getElementById("submit").addEventListener("click", () => {
    addGame(scoringAlgorithm(count, events), events, count + " reps", id);
    console.log(events);
  });
}
function startCountTimer() {
  let seconds = 59;

  timer = setInterval(function () {
    seconds--;
    document.getElementById("timeDisplayStop").innerHTML = "" + seconds;

    if (seconds <= 0) {
      stopTimer();
      console.log("Countdown finished!");
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(timer);
}

function startStopWatchTimer() {
  let seconds = 0;
  let milliseconds = 0;

  timer = setInterval(function () {
    milliseconds += 10;
    document.querySelector(".timerDisplay").innerHTML =
      "" + seconds + ":" + milliseconds / 10;
    if (milliseconds >= 1000) {
      seconds++;
      milliseconds = 0;
    }
    stopWatchTime = seconds + milliseconds / 1000;
  }, 10);
}
function stopStopWatchTimer() {
  clearInterval(timer);
}
export function baseCreateStopWatch(events, id) {
  let stopped = true;
  let mainContainer = document.getElementById("mainContainer");
  let container = document.createElement("div");
  container.className = "container";
  mainContainer.appendChild(container);
  let timerRef = document.createElement("div");
  timerRef.style.marginLeft = "10%";
  timerRef.className = "timerDisplay";
  container.appendChild(timerRef);
  let buttons = document.createElement("div");
  buttons.className = "buttons";
  let startTimer = document.createElement("button");
  startTimer.id = "startTimer";
  startTimer.innerHTML = "Start";
  let resetTimer = document.createElement("button");
  resetTimer.id = "resetTimer";
  resetTimer.innerHTML = "Reset";
  buttons.appendChild(resetTimer);
  buttons.appendChild(startTimer);
  let glowingButton = document.createElement("button");
  glowingButton.className = "glowing-btn";
  glowingButton.type = "submit";
  glowingButton.id = "submit";
  glowingButton.name = "submit";
  glowingButton.innerHTML =
    '<span class="glowing-txt">SU<span class="faulty-letter">BM</span>IT</span>';
  container.appendChild(buttons);
  container.appendChild(glowingButton);

  timerRef.innerHTML = "00 : 00 ";

  document.getElementById("startTimer").addEventListener("click", () => {
    if (!stopped) {
      stopStopWatchTimer();
      startTimer.innerHTML = "Start";
    } else {
      startStopWatchTimer();
      startTimer.innerHTML = "Stop";
    }
    stopped = !stopped;
  });
  console.log(stopped);
  if (stopped) {
    console.log("STOPPED");
  }

  document.getElementById("resetTimer").addEventListener("click", () => {
    stopStopWatchTimer();
    timerRef.innerHTML = "00 : 00 ";
    stopWatchTime = 0;
  });

  glowingButton.addEventListener("click", () =>
    addGame(
      scoringAlgorithm(stopWatchTime, events),
      events,
      stopWatchTime + " seconds",
      id
    )
  );
}
function addGame(scores, names, measures, id) {
  let url = "http://localhost:9191/addGame";
  var d = new Date();
  const data = {
    score: scores,
    name: names,
    measure: measures,
    entry_time: d.toLocaleString(),
    user_id: id,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }
      alert("Your data has been recorded");
      location.reload();
    })
    .catch((error) => {
      console.log("Error: " + error);
      alert("Please see Lamarr for assistance");
    });
}
function scoringAlgorithm(score, event) {
  let max;
  switch (event) {
    case "pull_ups":
      max = 30;
      break;
    case "push_ups":
      max = 60;
      break;
    case "dips":
      max = 40;
      break;
    case "40_yard":
      max = 4.2;
      break;
    case "plank":
      max = 210;
      break;
    case "jump":
      max = 60;
      break;
    case "shuttle":
      max = 20;
      break;
    default:
      max = null;
      break;
  }
  let finalScore = (score / max) * 100;
  if (finalScore > 100) {
    finalScore = 100;
  }
  if (finalScore < 0) {
    finalScore = 0;
  }
  return Math.floor(finalScore);
}
