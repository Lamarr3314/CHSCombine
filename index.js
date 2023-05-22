let introTitle = document.getElementById("introText");
var typed = new Typed(".auto-type", {
  strings: ["CHS Combine"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: false,
  startDelay: 2500,
  showCursor: true,
  onComplete: (self) => {
    setTimeout(function () {
      //   self.cursor.remove();
      delete self;
    }, 1300);
  },
});
