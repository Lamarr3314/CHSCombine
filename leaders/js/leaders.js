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
    gender = "f";
    showNormal(events, gender);
  } else if (gender == "f" && genderSelector.value == "male") {
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
  if (events == "overall") {
    pathway += "filterLeaderGender/" + gender;
    displayUsers(pathway);
  } else if (events == "search") {
    search();
  } else {
    pathway += "filterLeaders/" + gender + "/" + events;
    displayUsers(pathway);
  }
}
function search() {
  //change the html to show up as a search bar and show the users' game.
}
function displayUsers(pathway) {
  //do a get on the api and create div elements for all of the users,make a counter in order to put the rank and fill in all of the correct values in the correct div element already (maybe make it and reset it b/c of the search)
}
