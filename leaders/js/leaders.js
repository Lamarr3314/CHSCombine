document.getElementById("arrow_right_img").onclick = function () {
  document.getElementById("categories").scrollBy(220, 0);
};
document.getElementById("arrow_left_img").onclick = function () {
  document.getElementById("categories").scrollBy(-220, 0);
};
let maxHeight = 0;
let url = "https://chscombineapi.com/";

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

  getUserData("https://chscombineapi.com/filterLeaderGender/m");
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
  console.log(events);
  if (events == "overall") {
    pathway += "filterLeaderGender/" + gender;
    getUserData(pathway);
  } else if (events == "search") {
    search();
  } else {
    pathway += "filterLeaders/" + gender + "/" + events;
    getGameData(pathway);
  }
}
function search() {
  //change the html to show up as a search bar and show the users' game.
}
function getGameData(pathway) {
  console.log(pathway);
  fetch(pathway)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showGameData(data);
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

function getUserData(pathway) {
  console.log(pathway);
  fetch(pathway)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showUserData(data);
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
function userDataSetup() {
  let board = document.getElementById("board");
  board.innerHTML = "";
  let direct = document.createElement("div");
  direct.id = "direct";
  let topRank = document.createElement("div");
  topRank.id = "topRank";
  topRank.innerHTML = "<p>Rank</p>";
  direct.appendChild(topRank);
  let topName = document.createElement("div");
  topName.id = "topName";
  topName.innerHTML = "<p>Name</p>";
  direct.appendChild(topName);
  let topScore = document.createElement("div");
  topScore.id = "topScore";
  topScore.innerHTML = "<p>Points</p>";
  direct.appendChild(topScore);
  let miniNav = document.createElement("div");
  miniNav.id = "miniNav";
  miniNav.appendChild(direct);
  board.appendChild(miniNav);
  let space = document.createElement("div");
  space.id = "space";
  board.appendChild(space);
}
function gameDataSetup() {
  let board = document.getElementById("board");
  board.innerHTML = "";
  let direct = document.createElement("div");
  direct.id = "direct";
  let topRank = document.createElement("div");
  topRank.id = "topRank";
  topRank.innerHTML = "<p>Rank</p>";
  direct.appendChild(topRank);
  let topMeasure = document.createElement("div");
  topMeasure.id = "topMeasure";
  topMeasure.innerHTML = "<p>Measure</p>";
  direct.appendChild(topMeasure);
  let topName = document.createElement("div");
  topName.id = "topName";
  topName.innerHTML = "<p>Name</p>";
  direct.appendChild(topName);
  let topScore = document.createElement("div");
  topScore.id = "topScore";
  topScore.innerHTML = "<p>Points</p>";
  direct.appendChild(topScore);
  let miniNav = document.createElement("div");
  miniNav.id = "miniNav";
  miniNav.appendChild(direct);
  board.appendChild(miniNav);
  let space = document.createElement("div");
  space.id = "space";
  board.appendChild(space);
}
function showGameData(data) {
  gameDataSetup();
  let board = document.getElementById("board");
  let leaderBoard = document.createElement("div");
  leaderBoard.id = "leaders";
  let index = 1;
  for (let x in data) {
    let leader = data[x];
    let glowLeader = document.createElement("div");
    glowLeader.className = "glow-leader";
    glowLeader.id = "scorer";
    let rank = document.createElement("div");
    rank.id = "rank";
    rank.innerHTML = "<p>" + index + "&emsp;</p>";
    glowLeader.appendChild(rank);
    let measure = document.createElement("div");
    measure.id = "measure";
    measure.innerHTML = "<p>" + leader.measure + "</p>";
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
    index++;
  }
  board.appendChild(leaderBoard);
}
function showUserData(data) {
  userDataSetup();
  let board = document.getElementById("board");
  let leaderBoard = document.createElement("div");
  leaderBoard.id = "leaders";
  let index = 1;
  for (let x in data) {
    let leader = data[x];
    let glowLeader = document.createElement("div");
    glowLeader.className = "glow-leader";
    glowLeader.id = "scorer";
    let rank = document.createElement("div");
    rank.id = "rank";
    rank.innerHTML = "<p>" + index + "&emsp;</p>";
    glowLeader.appendChild(rank);
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
    index++;
  }
  board.appendChild(leaderBoard);
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
