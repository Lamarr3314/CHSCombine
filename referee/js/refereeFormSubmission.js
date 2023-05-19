let pastFirst = false;
let pastSecond = false;
import { baseCreateCounter } from "../js/referee.js";
import { baseCreateTimer } from "../js/referee.js";
import { baseCreateStopWatch } from "../js/referee.js";

let button = document.getElementById("submit");
button.addEventListener("click", checkUser);
let userId;
let userEvent;
function checkUser() {
  if (!pastFirst) {
    let names = document.getElementById("name_bar").value;
    let url = "http://ec2-3-83-40-202.compute-1.amazonaws.com:9191/UserById/" + names;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (
          data.status == "500" ||
          data.status == "404" ||
          data.status == "400"
        ) {
          alert("No user with that ID. Please check the ID entered");
        } else {
          goodFirst(data);
        }
      })
      .catch(function (err) {
        // console.log("Fetch Error :-S", err);
        alert("Please see Lamarr for support");
      });
  }
  if (pastFirst) {
    let eventSelector = document.getElementById("event");
    userEvent = eventSelector.value;
    let url = "http://ec2-3-83-40-202.compute-1.amazonaws.com:9191/gameCount/" + userId + "/" + userEvent;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (userEvent == "none") {
          alert("Please select an event");
        } else if (data > 0) {
          alert("This user has already played the selected event");
        } else {
          goodSecond();
        }
      })
      .catch(function (err) {
        alert("Please see Lamarr for support");
      });
  }
}
function goodFirst(data) {
  userId = data.id;
  pastFirst = true;
  document.getElementById("checkBox").src = "../../images/checkBox.png";
  document.getElementById("titleChar").innerHTML = "<h1>" + data.name + "</h1>";
  let player_event_container = document.createElement("div");
  player_event_container.id = "player_event_container";
  let player_event = document.createElement("img");
  player_event.id = "player_event";
  player_event.src = "../../images/eventImage.png";
  player_event.alt = "Event";
  player_event_container.appendChild(player_event);
  let spaceContainer = document.getElementById("spaceContainer");
  spaceContainer.appendChild(player_event_container);
  let eventFeedback = document.createElement("div");
  eventFeedback.id = "eventFeedback";
  spaceContainer.appendChild(eventFeedback);
  let eventBox = document.createElement("div");
  eventBox.id = "eventBox";
  eventBox.className = "glow-table";
  let event = document.createElement("select");
  event.name = "event";
  event.id = "event";
  event.value = "None";
  let noOption = document.createElement("option");
  noOption.value = "none";
  noOption.innerHTML = "None";
  event.appendChild(noOption);
  let pullUpOption = document.createElement("option");
  pullUpOption.value = "pull_ups";
  pullUpOption.innerHTML = "Pull Ups";
  event.appendChild(pullUpOption);
  let plankOption = document.createElement("option");
  plankOption.value = "plank";
  plankOption.innerHTML = "Plank";
  event.appendChild(plankOption);
  let dipOption = document.createElement("option");
  dipOption.value = "dips";
  dipOption.innerHTML = "Dips";
  event.appendChild(dipOption);
  let pushUpOption = document.createElement("option");
  pushUpOption.value = "push_ups";
  pushUpOption.innerHTML = "Push Ups";
  event.appendChild(pushUpOption);
  let fortyOption = document.createElement("option");
  fortyOption.value = "40_yard";
  fortyOption.innerHTML = "40 Yard";
  event.appendChild(fortyOption);
  let shuttleOption = document.createElement("option");
  shuttleOption.value = "shuttle_drill";
  shuttleOption.innerHTML = "Shuttle";
  event.appendChild(shuttleOption);
  let jumpOption = document.createElement("option");
  jumpOption.value = "broad_jump";
  jumpOption.innerHTML = "Jump";
  event.appendChild(jumpOption);
  eventBox.appendChild(event);
  let feedback = document.createElement("div");
  feedback.id = "feedback";
  feedback.appendChild(eventBox);
  let feedbackImg = document.createElement("img");
  feedbackImg.src = "../../images/xBox.png";
  feedbackImg.alt = "NO";
  feedbackImg.id = "feedbackImg";
  feedback.appendChild(feedbackImg);
  eventFeedback.appendChild(feedback);
  spaceContainer.appendChild(eventFeedback);
}
function goodSecond() {
  document.getElementById("feedbackImg").src = "../../images/checkBox.png";
  document.getElementById("mainContainer").innerHTML = "";
  if (
    userEvent == "40_yard" ||
    userEvent == "shuttle_drill" ||
    userEvent == "plank"
  ) {
    createStopWatch();
  } else if (
    userEvent == "pull_ups" ||
    userEvent == "dips" ||
    userEvent == "push_ups"
  ) {
    createTimer();
  } else if (userEvent == "broad_jump") {
    createCounter();
  } else {
    alert("Something is wrong with the dropdown value selected");
  }
}
function createStopWatch() {
  baseCreateStopWatch(userEvent, userId);
}
function createTimer() {
  baseCreateTimer(userEvent, userId);
}
function createCounter() {
  baseCreateCounter();
}
