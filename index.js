let introTitle = document.getElementById("introText");
let innerLogo = document.getElementById("innerLogo");
let maxHeight;
let maxWidths;
let boxWidth = 0;
let boxHeight = 0;
let bigTextSize = 0;
let firstImgSize = 0;
let boxes = document.querySelectorAll(".glow-on-hover");
let slideOneImage = document.getElementById("innerLogo");
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
