export function baseCreateCounter() {
  let mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "JE::P{";
  alert("no errors?");
}
export function baseCreateTimer(seconds) {
  alert(seconds + " second timer created");
}
export function baseCreateStopWatch() {
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
  timerRef.innerHTML = "00 : 000 ";

  document.getElementById("startTimer").addEventListener("click", () => {
    if (int !== null) {
      clearInterval(int);
    }
    if (!stopped) {
      clearInterval(int);
      startTimer.innerHTML = "Start";
    } else {
      int = setInterval(displayTimer, 10);
      startTimer.innerHTML = "Stop";
    }
    stopped = !stopped;
  });

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
    let ms = milliseconds > 100 ? milliseconds / 10 : milliseconds;

    timerRef.innerHTML = ` ${s} : ${ms}`;
  }

  glowingButton.addEventListener("click", () =>
    addGame(100, "plank", "300 seconds", 3)
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
  //max Pull Ups: 30
  //max Push Ups: 60
  //max dips: 40
  //max 40: 5 seconds
  //max plank: 3.5 minutes
  //max broad jump: 5 feet
  //max shuttle drill: 20 seconds
  let max;
  switch (event) {
    case "pull_ups":
      max = 30;
      break;
    case "push_ups":
      max = 60;
      break;
  }
}
