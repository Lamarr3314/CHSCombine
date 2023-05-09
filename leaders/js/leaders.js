document.getElementById("arrow_right_img").onclick = function () {
  document.getElementById("categories").scrollBy(220, 0);
};
document.getElementById("arrow_left_img").onclick = function () {
  document.getElementById("categories").scrollBy(-220, 0);
};
let maxWith = 0;
let maxHeight = 0;

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