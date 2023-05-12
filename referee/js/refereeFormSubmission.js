let genderSelector = document.getElementById("gender");
let genders = "m";
let pastFirst = false;
// genderSelector.onclick = function () {
//   if (genders == "m" && genderSelector.value == "female") {
//     genders = "w";
//   } else if (gender == "w" && genderSelector.value == "male") {
//     genders = "m";
//   }
//   console.log(gender);
// };
let button = document.getElementById("submit");
button.addEventListener("click", checkUser);

function checkUser() {
  if (!pastFirst) {
    let names = document.getElementById("name_bar").value;
    let url = "http://localhost:9191/UserById/" + names;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.status == "500"||data.status =="404") {
          alert("No user with that ID. Please check the ID entered");
        } else {
          console.log("WE GOOD");
        }
      })
      .catch(function (err) {
        // console.log("Fetch Error :-S", err);
        alert("No user with that id");
      });
  }
}
