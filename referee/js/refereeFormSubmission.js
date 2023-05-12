let genderSelector = document.getElementById("gender");
let genders = "m";
genderSelector.onclick = function () {
  if (genders == "m" && genderSelector.value == "female") {
    genders = "w";
  } else if (gender == "w" && genderSelector.value == "male") {
    genders = "m";
  }
  console.log(gender);
};
let button = document.getElementById("submit");
button.addEventListener("click", enterUser);


function enterUser() {
  let names = document.getElementById("name_bar").value;
  let url = "http://localhost:9191/addUser";
  const data = {
    gender: genders,
    name: names,
    score: 0,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error: " + response.status);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response:", responseData);
      // Do something with the response data
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle the error
    });
}
