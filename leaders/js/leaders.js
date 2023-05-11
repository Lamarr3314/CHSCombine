document.getElementById("arrow_right_img").onclick = function () {
  document.getElementById("categories").scrollBy(220, 0);
};
document.getElementById("arrow_left_img").onclick = function () {
  document.getElementById("categories").scrollBy(-220, 0);
};
let maxWith = 0;
let maxHeight = 0;
let url = "http://localhost:9191/";

window.addEventListener("load", function () {
  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-width: " + i + "px)").matches) {
      maxWidth = i;
    }
  }
  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-height: " + i + "px)").matches) {
      maxHeight = i;
    }
    document.getElementById("board").style.height = maxHeight - 250 + "px";
  }
});
let buttonList = document.querySelectorAll(".glow-on-hover");
let gender = "m";
let events = "overall";
let genderSelector = document.getElementById("gender");
genderSelector.onclick = function () {
  if (gender == "m" && genderSelector.value == "female") {
    gender = "w";
    showNormal(events, gender);
  } else if (gender == "w" && genderSelector.value == "male") {
    gender = "m";
    showNormal(events, gender);
  }
  console.log(gender);
};
for (let i = 0; i < buttonList.length; i++) {
  buttonList[i].onclick = function () {
    if (events != buttonList[i].id) {
      events = buttonList[i].id;
      showNormal(events, gender);
    }
  };
}
function showNormal(events, gender) {
  let pathway = url;
  if (events == "Overall") {
    pathway += "filterLeaderGender/" + gender;
    console.log(gender);
    getUserData(pathway);
  } else if (events == "search") {
    search();
  } else {
    pathway += "filterLeaders/" + gender + "/" + events;
    getUserData(pathway);
  }
}
function search() {
  //change the html to show up as a search bar and show the users' game.
}
function getUserData(pathway) {
  console.log(pathway);
  fetch(pathway)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showData(data);
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });

  //do a get on the api and create div elements for all of the users,make a counter in order to put the rank and fill in all of the correct values in the correct div element already (maybe make it and reset it b/c of the search)
}
function showData(data) {
  let leaderBoard = document.getElementById("leaders");
  console.log("IN SHOW DATA");
  leaderBoard.innerHTML = "";
  for (let x in data) {
    let leader = data[x];
    let glowLeader = document.createElement("div");
    glowLeader.className = "glow-leader";
    glowLeader.id = "scorer";
    let rank = document.createElement("div");
    rank.id = "rank";
    rank.innerHTML = "<p>" + leader.id + "&emsp;</p>";
    glowLeader.appendChild(rank);
    let measure = document.createElement("div");
    measure.id = "measure";
    measure.innerHTML = "<p>" + leader.name + "</p>"; //TODO change to the leader measure, need to change the return type of the game
    glowLeader.appendChild(measure);
    let name = document.createElement("div");
    name.id = "name";
    name.innerHTML = "<p>" + leader.name + "</p>";
    glowLeader.appendChild(name);
    let points = document.createElement("div");
    points.id = "points";
    points.innerHTML = "<p>" + leader.score + "</p>";
    glowLeader.appendChild(points);
    leaderBoard.appendChild(glowLeader);
    console.log(leader.id);
  }
}
/**
 * fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
 */
