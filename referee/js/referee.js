export function baseCreateCounter() {
  //use for broad jump only
}
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
  let [milliseconds, seconds] = [0, 60];
  let int = null;
  timerRef.innerHTML = "60";

  document.getElementById("startTimer").addEventListener("click", () => {
    countdownTimer();
    if (int !== null) {
      clearInterval(int, timerRef);
    }
    if (!stopped) {
      int = setInterval(displayTimer, 10);
      clearInterval(int);
      startTimer.innerHTML = "Start";
      startTimer.style.backgroundColor = "#e75100";
      count = 0;
      counterHeader.innerHTML = count;
    } else {
      clearInterval(int);
      count = 0;
      counterHeader.innerHTML = count;
      [milliseconds, seconds] = [0, 60];
      timerRef.innerHTML = "60";
      startTimer.innerHTML = "Reset";
      startTimer.style.backgroundColor = "rgb(83, 81, 81)";
    }
    stopped = !stopped;
  });

  function displayTimer() {
    milliseconds -= 10;
    if (milliseconds <= 0) {
      milliseconds = 1000;
      seconds--;
    }
    // let s = seconds < 10 ? "0" + seconds : seconds;
    let s = seconds;
    // let ms = milliseconds;
    let ms = milliseconds >= 100 ? milliseconds / 10 : milliseconds; //TODO: Timer Does NOT WORK oof.

    timerRef.innerHTML = ` ${s}`;
  }

  glowingButton.addEventListener("click", () =>
    addGame(
      scoringAlgorithm(seconds + milliseconds / 1000, events),
      events,
      seconds + milliseconds / 1000 + " seconds",
      id
    )
  );
}
export function baseCreateStopWatch(events, id) {
  let stopped = true;
  let mainContainer = document.getElementById("mainContainer");
  let container = document.createElement("div");
  container.className = "container";
  mainContainer.appendChild(container);
  let timerRef = document.createElement("div");
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

  let [milliseconds, seconds] = [0, 0];
  let int = null;
  timerRef.innerHTML = "00 : 00 ";

  document.getElementById("startTimer").addEventListener("click", () => {
    if (int !== null) {
      clearInterval(int);
    }
    if (!stopped) {
      clearInterval(int);
      startTimer.innerHTML = "Start";
      let startTime = new Date();
    } else {
      int = setInterval(displayTimer, 10);
      startTimer.innerHTML = "Stop";
    }
    stopped = !stopped;
  });
  console.log(stopped);
  if (stopped) {
    console.log("STOPPED");
    console.log(startTimer.getSeconds() + ":" + startTimer.getMilliSeconds());
  }

  document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds] = [0, 0];
    timerRef.innerHTML = "00 : 00 ";
  });

  function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
      milliseconds = 0;
      seconds++;
    }
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds >= 100 ? milliseconds / 10 : milliseconds; //TODO: Timer Does NOT WORK oof.

    timerRef.innerHTML = ` ${s} : ${ms}`;
  }

  glowingButton.addEventListener("click", () =>
    addGame(
      scoringAlgorithm(seconds + milliseconds / 1000, events),
      events,
      seconds + milliseconds / 1000 + " seconds",
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
function countdownTimer() {
  var seconds = 59;

  var timer = setInterval(function () {
    seconds--;
    document.getElementById("timeDisplayStop").innerHTML = "" + seconds;

    if (seconds <= 0) {
      clearInterval(timer);
      console.log("Countdown finished!");
    }
  }, 1000);
}
function stopWatchTimer() {
  var seconds = 0;
  var milliseconds = 0;

  var timer = setInterval(function () {
    seconds--;
    document.getElementById("timeDisplayStop").innerHTML = "" + seconds;

    if (seconds <= 0) {
      clearInterval(timer);
      console.log("Countdown finished!");
    }
  }, 1000);
}