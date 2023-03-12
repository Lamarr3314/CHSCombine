let maxWidth = 1;
let sideWidth = 0;
let registerDiv = document.getElementById("register");
let leaderboardDiv = document.getElementById("leaderboard");
let registerImg = document.getElementById("registerImg");
let leaderboardImg = document.getElementById("leaderboardImg");
let mainImg = document.getElementById("mainImage");
let maxLastWidth = 0;
for (let i = 0; i < 2000; i++) {
  if (window.matchMedia("(min-width: " + i + "px)").matches) {
    maxWidth = i;
  }
}
console.log(maxWidth);
sideWidth = (maxWidth - 101.14) / 2;
leaderboardDiv.style.width = sideWidth + "px";
registerDiv.style.width = sideWidth + "px";
registerDiv.style.marginLeft = (sideWidth - 184.55) / 2 + "px";
leaderboardDiv.style.marginLeft = (sideWidth - 200) / 2 + "px";
leaderboardImg.style.transform = "none";
registerImg.style.transform = "none";
mainImg.style.transform = "none";
maxLastWidth = maxWidth;
setTimeout(function() {
  mainImg.style.display="flex";
  registerImg.style.display="flex";
  leaderboardImg.style.display="flex";
}, .00000001);


registerImg.onclick = function () {
  window.location.href = "/register.html";
};
leaderboardImg.onclick = function () {
  window.location.href = "/leaders.html";
};
mainImg.onclick = function () {
  window.location.href = "index.html";
};
