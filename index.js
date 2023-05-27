let introTitle = document.getElementById("introText");
let innerLogo = document.getElementById("innerLogo");
let rightArrow = document.getElementById("arrow_right_img");
let leftArrow = document.getElementById("arrow_left_img");
let pageNumberText = document.getElementById("pageNumberText");
let maxHeight;
let maxWidths;
let boxWidth = 0;
let boxHeight = 0;
let bigTextSize = 0;
let firstImgSize = 0;
let currentPage = 0;
let boxes = document.querySelectorAll(".glow-on-hover");
let slideOneImage = document.getElementById("innerLogo");
leftArrow.style.opacity = "0";
var typed = new Typed(".auto-type", {
  strings: ["CHS Combine"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: false,
  startDelay: 2500,
  showCursor: true,
  onComplete: (self) => {
    delete self;
  },
});

window.addEventListener("load", function () {
  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-width: " + i + "px)").matches) {
      maxWidths = i;
    }
  }
  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-height: " + i + "px)").matches) {
      maxHeight = i;
    }
  }
  setAssets();
  function setAssets() {
    boxWidth = maxWidths * 0.94;
    boxHeight = maxHeight * 0.7;
    bigTextSize = maxHeight * 0.1;
    firstImgSize = maxWidths * 0.2;
    if (boxWidth < 600) {
      firstImgSize = boxWidth * 0.45;
    }
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.width = boxWidth + "px";
      boxes[i].style.height = boxHeight + "px";
      slideOneImage.style.width = firstImgSize + "px";
      slideOneImage.style.marginLeft = (boxWidth - firstImgSize) / 2 + "px";
      document.getElementById("introText").style.fontSize = bigTextSize + "px";
    }
  }
});
rightArrow.onclick = function () {
  leftArrow.style.opacity = "1";
  if (currentPage < 7) {
    document.getElementById("categories").scrollBy(maxWidths * 2, 0);
    console.log(maxWidths);
    currentPage++;
    pageNumberText.innerHTML = currentPage + "/7";
  }else{
    rightArrow.style.opacity = "0";
  }
};
leftArrow.onclick = function () {
  rightArrow.style.opacity = "1";
  if (currentPage > 0) {
    document.getElementById("categories").scrollBy(-maxWidths * 2, 0);
    currentPage--;
    pageNumberText.innerHTML = currentPage + "/7";
  }
  else{
    leftArrow.style.opacity = "0";
  }
};
