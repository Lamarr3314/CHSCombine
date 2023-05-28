let genderSelector = document.getElementById("gender");

let genders = "m";
let maxWidths = 0;
let maxHeight = 0;
let names = "";
let readDocument = false;
let userInfo = {
  user_name: "",
  user_gender: "m",
  child_name: "",
  student_id: "",
  student_signature: "",
  parent_name: "",
  parent_signature: "",
  date_signed: "",
  user_id: -1,
  phone_1: "",
  address_1: "",
  phone_2: "",
  address_2: "",
};

genderSelector.onclick = function () {
  if (genders == "m" && genderSelector.value == "female") {
    genders = "w";
    userInfo.user_gender = genders;
  } else if (genders == "w" && genderSelector.value == "male") {
    // genders = "m";
    userInfo.user_gender = genders;
  }
};
// let button = document.getElementById("submit");
let nextButton = document.getElementById("next");
// nextButton.addEventListener("click", loadPermissionSlip);
nextButton.onclick = function () {
  let n = document.getElementById("name_bar").value;
  if (n == "" || !n.includes(" ")) {
    alert("please enter your full name");
  } else {
    userInfo.user_name = n;
    loadPermissionSlip();
  }
};
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
});
// button.addEventListener("click", checkUser);

function loadPermissionSlip() {
  let fillInForm = document.getElementById("fillInForm");
  fillInForm.innerHTML = "";
  let slipContainer = document.createElement("div");
  slipContainer.id = "slipContainer";
  let firstLine = document.createElement("div");
  firstLine.id = "firstLine";
  let firsth1 = document.createElement("h1");
  firsth1.innerHTML =
    "I hereby grant permission for my child " + userInfo.user_name;
  firstLine.appendChild(firsth1);
  slipContainer.appendChild(firstLine);
  let secondLine = document.createElement("div");
  secondLine.id = "secondLine";
  let secondh1 = document.createElement("h1");
  secondh1.innerHTML =
    " to participate in the CHS Combine on Wednesday, June 7, 2023. The event will be hosted by the Student Council Association and Student Council class of 2025.";
  secondLine.appendChild(secondh1);
  slipContainer.appendChild(secondLine);
  let thirdLine = document.createElement("div");
  thirdLine.id = "thirdLine";
  let thirdh1 = document.createElement("h1");
  thirdh1.id = "thirdh1";
  thirdh1.innerHTML =
    "In consideration for permitting my child to participate in this extracurricular event, I hereby release and forever discharge the Clifton Board of Education, its employees, and agents from and and all liability, suits, damages, claims, and demands, if any, arising from said extracurricular event.";
  thirdLine.appendChild(thirdh1);
  slipContainer.appendChild(thirdLine);
  let fourthLine = document.createElement("div");
  fourthLine.id = "fourthLine";
  let fourthh1 = document.createElement("h1");
  fourthh1.id = "fourthh1";
  fourthh1.innerHTML =
    "In the event of an unanticipated and untoward occurrence, this permission slip will also authorize the school staff members in charge of the event to secure any needed medical care until I can be contacted";
  fourthLine.appendChild(fourthh1);
  slipContainer.appendChild(fourthLine);
  let fifthLine = document.createElement("div");
  fifthLine.id = "fifthLine";
  let fifthh1 = document.createElement("h1");
  fifthh1.id = "fifthh1";
  fifthh1.innerHTML =
    "It is further understood that it is the student's responsibility to follow proper school code as outlined in the Clifton High School Student Handbook.";
  fifthLine.appendChild(fifthh1);
  slipContainer.appendChild(fifthLine);
  let sixthLine = document.createElement("div");
  sixthLine.id = "sixthLine";
  let sixthh1 = document.createElement("h1");
  sixthh1.id = "sixthh1";
  sixthLine.appendChild(sixthh1);
  slipContainer.appendChild(sixthLine);
  let seventhLine = document.createElement("div");
  seventhLine.id = "seventhLine";
  let seventhh1 = document.createElement("h1");
  seventhh1.id = "seventhh1";
  seventhh1.innerHTML =
    "No child will be permitted to participate in this event if this is not filled out by the parent or guardian and submitted before the event begins.";
  seventhLine.appendChild(seventhh1);
  slipContainer.appendChild(seventhLine);
  let eighthLine = document.createElement("div");
  eighthLine.id = "eighthLine";
  let eighthh1 = document.createElement("h1");
  eighthh1.id = "eighthh1";
  eighthh1.innerHTML =
    "Event information, format, and guidelines will be shared with all participants. Please read and review the information before signin this permission slip."; //TODO make this a link to access the documents
  eighthLine.appendChild(eighthh1);
  slipContainer.appendChild(eighthLine);
  let readmeDiv = document.createElement("div");
  readmeDiv.id = "readmeDiv";
  readmeDiv.innerHTML =
    '<input type="checkbox" id="read" name="read" ><label for="read"> I, ' +
    userInfo.user_name +
    "'s Parent/Guardian have read this document </label><br>";
  slipContainer.appendChild(readmeDiv);
  let nextButtonDiv = document.createElement("div");
  nextButton.id = "nextButtonDiv";
  nextButtonDiv.innerHTML =
    '<button class="glowing-btn" type="next2" id="next2" name="next2"><span class="glowing-txt">N<span class="faulty-letter">E</span>XT</span></button>';
  slipContainer.appendChild(nextButtonDiv);
  fillInForm.appendChild(slipContainer);
  fillInForm.appendChild(nextButtonDiv);
  document.getElementById("slipContainer").style.height =
    maxHeight - 300 + "px";
  document.getElementById("read").onclick = function () {
    readDocument = !readDocument;
  };
  document.getElementById("next2").onclick = function () {
    if (!readDocument) {
      alert("Please verify that you have read the document");
    } else {
      fillContantInfo();
    }
  };
  nextButtonDiv.style.marginTop = "-30px";
}
function fillContantInfo() {
  let fillInForm = document.getElementById("fillInForm");
  let contactInfo = document.createElement("div");
  contactInfo.id = "contactInfo";
  fillInForm.innerHTML = "";

  let informationTable = document.createElement("table");
  informationTable.id = "informationTable";
  let student_name_row = document.createElement("tr");
  student_name_row.id = "student_name_row";
  let student_name_header = document.createElement("td");
  student_name_header.id = "student_name_header";
  student_name_header.innerHTML = "Student name";
  let student_name_entry = document.createElement("td");
  student_name_entry.id = "student_name_entry";
  student_name_entry.innerHTML = userInfo.user_name;
  student_name_row.appendChild(student_name_header);
  student_name_row.appendChild(student_name_entry);
  informationTable.appendChild(student_name_row);

  let student_id_row = document.createElement("tr");
  student_id_row.id = "student_id_row";
  let student_id_header = document.createElement("td");
  student_id_header.id = "student_id_header";
  student_id_header.innerHTML = "Student ID";
  let student_id_entry = document.createElement("td");
  student_id_entry.id = "student_id_entry";
  let student_id_textBox = document.createElement("input");
  student_id_textBox.id = "student_id_textbox";
  student_id_textBox.type = "text";
  student_id_entry.appendChild(student_id_textBox);
  student_id_row.appendChild(student_id_header);
  student_id_row.appendChild(student_id_entry);
  informationTable.appendChild(student_id_row);

  let student_signature_row = document.createElement("tr");
  student_signature_row.id = "student_signature_row";
  let student_signature_header = document.createElement("td");
  student_signature_header.id = "student_signature_header";
  student_signature_header.innerHTML = "Student Signature";
  let student_signature_entry = document.createElement("td");
  student_signature_entry.id = "student_signature_entry";
  let student_signature_textBox = document.createElement("input");
  student_signature_textBox.id = "student_signature_textbox";
  student_signature_textBox.type = "text";
  student_signature_entry.appendChild(student_signature_textBox);
  student_signature_row.appendChild(student_signature_header);
  student_signature_row.appendChild(student_signature_entry);
  informationTable.appendChild(student_signature_row);

  let parent_name_row = document.createElement("tr");
  parent_name_row.id = "parent_name_row";
  let parent_name_header = document.createElement("td");
  parent_name_header.id = "parent_name_header";
  parent_name_header.innerHTML = "Parent Name";
  let parent_name_entry = document.createElement("td");
  parent_name_entry.id = "parent_name_entry";
  let parent_name_textBox = document.createElement("input");
  parent_name_textBox.id = "parent_name_textbox";
  parent_name_textBox.type = "text";
  parent_name_entry.appendChild(parent_name_textBox);
  parent_name_row.appendChild(parent_name_header);
  parent_name_row.appendChild(parent_name_entry);
  informationTable.appendChild(parent_name_row);

  let parent_signature_row = document.createElement("tr");
  parent_signature_row.id = "parent_signature_row";
  let parent_signature_header = document.createElement("td");
  parent_signature_header.id = "parent_signature_header";
  parent_signature_header.innerHTML = "Parent Signature";
  let parent_signature_entry = document.createElement("td");
  parent_signature_entry.id = "parent_signature_entry";
  let parent_signature_textBox = document.createElement("input");
  parent_signature_textBox.id = "parent_signature_textbox";
  parent_signature_textBox.type = "text";
  parent_signature_entry.appendChild(parent_signature_textBox);
  parent_signature_row.appendChild(parent_signature_header);
  parent_signature_row.appendChild(parent_signature_entry);
  informationTable.appendChild(parent_signature_row);

  let date_signed_row = document.createElement("tr");
  date_signed_row.id = "date_signed_row";
  let date_signed_header = document.createElement("td");
  date_signed_header.id = "date_signed_header";
  date_signed_header.innerHTML = "Date Signed";
  let date_signed_entry = document.createElement("td");
  date_signed_entry.id = "date_signed_entry";
  let date_signed_textBox = document.createElement("input");
  date_signed_textBox.id = "date_signed_textbox";
  date_signed_textBox.type = "date";
  date_signed_entry.appendChild(date_signed_textBox);
  date_signed_row.appendChild(date_signed_header);
  date_signed_row.appendChild(date_signed_entry);
  informationTable.appendChild(date_signed_row);

  let phone_one_row = document.createElement("tr");
  phone_one_row.id = "phone_one_row";
  let phone_one_header = document.createElement("td");
  phone_one_header.id = "phone_one_header";
  phone_one_header.innerHTML = "Phone One";
  let phone_one_entry = document.createElement("td");
  phone_one_entry.id = "phone_one_entry";
  let phone_one_textBox = document.createElement("input");
  phone_one_textBox.id = "phone_one_textbox";
  phone_one_textBox.type = "text";
  phone_one_entry.appendChild(phone_one_textBox);
  phone_one_row.appendChild(phone_one_header);
  phone_one_row.appendChild(phone_one_entry);
  informationTable.appendChild(phone_one_row);

  let address_one_row = document.createElement("tr");
  address_one_row.id = "address_one_row";
  let address_one_header = document.createElement("td");
  address_one_header.id = "address_one_header";
  address_one_header.innerHTML = "Address One";
  let address_one_entry = document.createElement("td");
  address_one_entry.id = "address_one_entry";
  let address_one_textBox = document.createElement("input");
  address_one_textBox.id = "address_one_textbox";
  address_one_textBox.type = "text";
  address_one_entry.appendChild(address_one_textBox);
  address_one_row.appendChild(address_one_header);
  address_one_row.appendChild(address_one_entry);
  informationTable.appendChild(address_one_row);

  let phone_two_row = document.createElement("tr");
  phone_two_row.id = "phone_two_row";
  let phone_two_header = document.createElement("td");
  phone_two_header.id = "phone_two_header";
  phone_two_header.innerHTML = "Phone Two";
  let phone_two_entry = document.createElement("td");
  phone_two_entry.id = "phone_two_entry";
  let phone_two_textBox = document.createElement("input");
  phone_two_textBox.id = "phone_two_textbox";
  phone_two_textBox.type = "text";
  phone_two_entry.appendChild(phone_two_textBox);
  phone_two_row.appendChild(phone_two_header);
  phone_two_row.appendChild(phone_two_entry);
  informationTable.appendChild(phone_two_row);

  let address_two_row = document.createElement("tr");
  address_two_row.id = "address_two_row";
  let address_two_header = document.createElement("td");
  address_two_header.id = "address_two_header";
  address_two_header.innerHTML = "Address Two";
  let address_two_entry = document.createElement("td");
  address_two_entry.id = "address_two_entry";
  let address_two_textBox = document.createElement("input");
  address_two_textBox.id = "address_two_textbox";
  address_two_textBox.type = "text";
  address_two_entry.appendChild(address_two_textBox);
  address_two_row.appendChild(address_two_header);
  address_two_row.appendChild(address_two_entry);
  informationTable.appendChild(address_two_row);

  let nextButtonDiv = document.createElement("div");
  nextButton.id = "nextButtonDiv";
  nextButtonDiv.innerHTML =
    '<button class="glowing-btn" type="next3" id="next3" name="next3"><span class="glowing-txt">N<span class="faulty-letter">E</span>XT</span></button>';

  contactInfo.appendChild(informationTable);
  fillInForm.appendChild(contactInfo);
  fillInForm.appendChild(nextButtonDiv);
  nextButtonDiv.style.marginTop = "-30px";
  informationTable.style.height = maxHeight - 300 + "px";

  document.getElementById("next3").onclick = function () {
    let vals = [
      student_id_textBox,
      student_signature_textBox,
      parent_name_textBox,
      parent_signature_textBox,
      date_signed_textBox,
      phone_one_textBox,
      address_one_textBox,
    ];
    let unchecked = 0;
    for (let i = 0; i < vals.length; i++) {
      if (vals[i].value == "") {
        alert("Please fill out your " + vals[i].id);
        unchecked++;
      }
    }
    if (unchecked == 0) {
      userInfo.child_name = userInfo.user_name;
      userInfo.student_id = student_id_textBox.value;
      userInfo.student_signature = student_signature_textBox.value;
      userInfo.parent_name = parent_name_textBox.value;
      userInfo.parent_signature = parent_signature_textBox.value;
      userInfo.date_signed = date_signed_textBox.value;
      userInfo.phone_1 = phone_one_textBox.value;
      userInfo.address_1 = address_one_textBox.value;
      userInfo.phone_2 = phone_two_textBox.value;
      userInfo.address_2 = address_two_textBox.value;
      checkSubmission();
    }
  };
}

function checkSubmission() {
  let fillInForm = document.getElementById("fillInForm");
  fillInForm.innerHTML = "";
  let mainContainer = document.createElement("div");
  mainContainer.id = "mainContainer";
  let userText = document.createElement("h2");
  userText.id = "userText";
  userText.innerHTML = '<span class="auto-type"></span>';
  mainContainer.appendChild(userText);
  let submitButtonDiv = document.createElement("div");
  submitButtonDiv.innerHTML =
    '<button class="glowing-btn" type="submit" id="submit" name="submit"><span class="glowing-txt">SU<span class="faulty-letter">BM</span>IT</span></button>';
  mainContainer.appendChild(submitButtonDiv);
  fillInForm.appendChild(mainContainer);
  let goodString =
    "Press Submit to Register " + userInfo.user_name + " To the CHS Combine";
  var typed = new Typed(".auto-type", {
    strings: [goodString],
    typeSpeed: 150,
    backSpeed: 150,
    loop: false,
    startDelay: 1500,
    showCursor: true,
    onComplete: (self) => {
      delete self;
    },
  });
  document.getElementById("submit").onclick = function () {
    console.log(userInfo);//checkuser, then delay, then submit post to permission slip based on the response to checkuser
  };
}

function checkUser() {
  userInfo.user_name = document.getElementById("name_bar").value;
  let url = "https://chscombineapi.com/addUser";
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
